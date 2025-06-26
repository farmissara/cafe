// *** ส่วนที่ 1: ตั้งค่า Telegram Bot Token และ Chat ID ของคุณ ***
// คุณจะต้องเปลี่ยนค่า 'YOUR_TELEGRAM_BOT_TOKEN_HERE' และ 'YOUR_TELEGRAM_CHAT_ID_HERE'
// ดูวิธีหาค่าเหล่านี้ได้ใน "ขั้นตอนที่ 1: เตรียม Telegram Bot และรับ Chat ID" ด้านล่าง
const TELEGRAM_BOT_TOKEN_RAW = "8000970103:AAFkOqQZNcvE20GKkLMnrmaDpHLSow-ql2k"; // เปลี่ยนเป็น Token ของบอทคุณ
const TELEGRAM_CHAT_ID_RAW = "7643319108";   // เปลี่ยนเป็น Chat ID ของคุณ (มักจะเป็นตัวเลข)

// ฟังก์ชันสำหรับสร้าง QR Code (ไม่เกี่ยวข้องโดยตรงกับการสั่งออเดอร์ แต่มีอยู่ในโค้ดที่คุณให้มา)
function generateQRCode() {
  const url = 'https://script.google.com/macros/s/AKfycbz3a8Dwbwfejb3OaZWdaSAWCOHrXEekUcbAOCBJ0LE/exec'; // URL นี้ควรเป็น URL ของ Web App ที่คุณ Deploy
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(url)}`;
  return HtmlService.createHtmlOutput(`
    <h1>QR Code สำหรับแอปพลิเคชัน</h1>
    <img src="${qrUrl}" alt="QR Code">
    <p>สแกนเพื่อเข้าสู่ระบบ</p>
  `);
}

// ฟังก์ชันหลักสำหรับเว็บแอป: ทำหน้าที่แสดงผลหน้า HTML
function doGet() {
  try {
    const htmlOutput = HtmlService.createHtmlOutputFromFile('index')
      .setTitle('บ้านพักครู คาเฟ่')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    return htmlOutput;
  } catch (e) {
    return HtmlService.createHtmlOutput('<h1>เกิดข้อผิดพลาด:</h1><p>' + e.message + '</p>')
      .setTitle('ข้อผิดพลาด - บ้านพักครู คาเฟ่');
  }
}

// ฟังก์ชันประมวลผลออเดอร์: บันทึกลง Google Sheet และส่งแจ้งเตือน Telegram
function processOrder(payload) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // บันทึกลง Sheet Orders
    const orderSheet = ss.getSheetByName('Orders') || ss.insertSheet('Orders');
    // เพิ่ม header ถ้าชีตว่างเปล่า
    if (orderSheet.getLastRow() === 0) {
      orderSheet.appendRow(['วันที่', 'เวลา', 'ชื่อเมนู', 'ราคา', 'จำนวน', 'รวม', 'หมวดหมู่', 'ประเภทออเดอร์', 'หมายเลขโต๊ะ']);
    }

    // บันทึกลง Sheet Summary
    const summarySheet = ss.getSheetByName('Summary') || ss.insertSheet('Summary');
    // เพิ่ม header ถ้าชีตว่างเปล่า
    if (summarySheet.getLastRow() === 0) {
      summarySheet.appendRow(['วันที่', 'จำนวนออเดอร์', 'รายได้ทั้งหมด']);
    }

    // คำนวณยอดรวมจริงและเตรียมข้อมูลสำหรับบันทึก
    let calculatedTotal = 0;
    const orderDate = new Date(payload.timestamp);
    // ตั้งค่า Time Zone ให้ถูกต้องตามเวลาประเทศไทย (GMT+7)
    const scriptTimeZone = Session.getScriptTimeZone();
    const formattedDate = Utilities.formatDate(orderDate, scriptTimeZone, 'dd/MM/yyyy');
    const formattedTime = Utilities.formatDate(orderDate, scriptTimeZone, 'HH:mm:ss');

    const orderType = payload.orderType || 'ไม่ระบุ';
    const tableNumber = payload.tableNumber || 'N/A';

    // บันทึกแต่ละรายการในออเดอร์
    payload.orders.forEach(item => {
      const itemTotal = item.price * item.qty;
      calculatedTotal += itemTotal;

      orderSheet.appendRow([
        formattedDate,
        formattedTime,
        item.name,
        item.price,
        item.qty,
        itemTotal,
        item.category,
        orderType,
        tableNumber
      ]);
    });

    // อัปเดต Summary Sheet
    const summaryData = summarySheet.getDataRange().getValues();
    let dateFound = false;

    for (let i = 1; i < summaryData.length; i++) {
      // ตรวจสอบวันที่ใน Summary Sheet
      if (summaryData[i][0] === formattedDate) {
        const currentOrders = summaryData[i][1] + payload.orders.length;
        const currentTotal = summaryData[i][2] + calculatedTotal;

        summarySheet.getRange(i + 1, 2).setValue(currentOrders);
        summarySheet.getRange(i + 1, 3).setValue(currentTotal);
        dateFound = true;
        break;
      }
    }

    // หากไม่พบวันที่ใน Summary Sheet ให้เพิ่มแถวใหม่
    if (!dateFound) {
      summarySheet.appendRow([
        formattedDate,
        payload.orders.length,
        calculatedTotal
      ]);
    }

    // สร้างข้อความสำหรับส่งไป Telegram (ใช้ Markdown เพื่อให้ข้อความเป็นตัวหนาได้)
    const orderDetails = payload.orders.map(i =>
      `➡️ ${i.name} (${i.price} บาท) x${i.qty} = ${i.price * i.qty} บาท`
    ).join('\n');

    const msg = `*📦 ออเดอร์ใหม่* (${formattedDate} ${formattedTime})\n` +
                `*ประเภท:* ${orderType}` + (orderType === 'นั่งทานที่ร้าน' ? ` | *โต๊ะ:* ${tableNumber}` : '') + `\n` +
                `${orderDetails}\n` +
                `*💰 รวมทั้งหมด:* ${calculatedTotal} บาท`;

    sendTelegram(msg); // เรียกฟังก์ชันส่ง Telegram

    return { status: 'success', calculatedTotal: calculatedTotal };
  } catch (err) {
    console.error('Error in processOrder:', err);
    return { status: 'error', message: err.message };
  }
}

// ฟังก์ชันส่งข้อความ Telegram
function sendTelegram(msg) {
  try {
    const token = PropertiesService.getScriptProperties().getProperty('TELEGRAM_TOKEN');
    const chatId = PropertiesService.getScriptProperties().getProperty('TELEGRAM_CHAT_ID');

    if (!token || !chatId) {
      console.warn('Telegram token or chat ID not set in Script Properties.');
      return;
    }

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const options = {
      method: 'post',
      payload: {
        chat_id: chatId,
        text: msg,
        parse_mode: 'Markdown' // ใช้ Markdown เพื่อให้ข้อความเป็นตัวหนาได้
      }
    };

    UrlFetchApp.fetch(url, options);
  } catch (e) {
    console.error("Telegram send error: " + e.message);
  }
}

// ฟังก์ชันสำหรับตั้งค่าเริ่มต้น: รันเพียงครั้งเดียวเพื่อบันทึก Token และ Chat ID
function setup() {
  const props = PropertiesService.getScriptProperties();

  // ตั้งค่า Token และ Chat ID หากยังไม่ได้ตั้งค่า
  // คุณสามารถเปลี่ยนค่า TELEGRAM_BOT_TOKEN_RAW และ TELEGRAM_CHAT_ID_RAW ด้านบนได้โดยตรง
  // และรัน setup() ใหม่เพื่ออัปเดต (จะบันทึกทับค่าเดิม)
  props.setProperty('TELEGRAM_TOKEN', TELEGRAM_BOT_TOKEN_RAW);
  props.setProperty('TELEGRAM_CHAT_ID', TELEGRAM_CHAT_ID_RAW);

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // สร้าง Sheet 'Orders' หากยังไม่มี
  if (!ss.getSheetByName('Orders')) {
    const orderSheet = ss.insertSheet('Orders');
    orderSheet.appendRow(['วันที่', 'เวลา', 'ชื่อเมนู', 'ราคา', 'จำนวน', 'รวม', 'หมวดหมู่', 'ประเภทออเดอร์', 'หมายเลขโต๊ะ']);
  }

  // สร้าง Sheet 'Summary' หากยังไม่มี
  if (!ss.getSheetByName('Summary')) {
    const summarySheet = ss.insertSheet('Summary');
    summarySheet.appendRow(['วันที่', 'จำนวนออเดอร์', 'รายได้ทั้งหมด']);
  }
  console.log('การตั้งค่าเสร็จสมบูรณ์: Telegram Token/Chat ID และ Sheets ถูกสร้าง/อัปเดตแล้ว');
}
