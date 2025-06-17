let currentLang = 'th'; // กำหนดภาษาเริ่มต้นเป็นภาษาไทย
let currentActiveCategory = 'all'; // หมวดหมู่หลักที่ active (all, drink, food, dessert, mainDish)
let currentActiveSubCategory = 'all'; // หมวดหมู่ย่อยที่ active (หรือ 'all' ถ้าไม่มีการเลือกหมวดหมู่ย่อย)

const translations = {
  "th": {
    "appTitle": "บ้านพักครู /คาเฟ่ 🧁☕️",
    "menuHeader": "เมนู",
    "orderListHeader": "รายการสั่งซื้อ",
    "allCategory": "ทั้งหมด ✨", // เพิ่มอีโมจิ
    "drinkCategory": "เครื่องดื่ม ☕️", // เพิ่มอีโมจิ
    "foodCategory": "อาหาร 🥪", // เพิ่มอีโมจิ
    "dessertCategory": "ของหวาน 🍰", // เพิ่มอีโมจิ
    "mainDishCategory": "อาหารหลัก 🍽️", // เพิ่มอีโมจิ
    "coffeeSubCategory": "กาแฟ ☕",
    "teaSubCategory": "ชา 🍵",
    "juiceSubCategory": "น้ำผลไม้ 🥤",
    "otherDrinkSubCategory": "อื่นๆ 🍹",
    "alcoholSubCategory": "เหล้า-เบียร์ 🍻", // เพิ่มหมวดหมู่ย่อยใหม่
    "pizzaSubCategory": "พิซซ่า 🍕",
    "spaghettiSubCategory": "สปาเก็ตตี้ 🍝",
    "steakSubCategory": "สเต็ก 🥩",
    "thaiFoodSubCategory": "อาหารไทย 🍚",
    "cakesBakeriesSubCategory": "เค้ก & เบเกอรี่ 🧁",
    "otherDessertSubCategory": "อื่นๆ 🍬",
    "menuNameCol": "เมนู",
    "priceCol": "ราคา",
    "qtyCol": "จำนวน",
    "totalCol": "รวม",
    "manageCol": "จัดการ",
    "grandTotal": "รวมทั้งหมด",
    "orderTypeLabel": "ประเภทออเดอร์",
    "eatHere": "นั่งทานที่ร้าน",
    "takeHome": "ซื้อกลับบ้าน",
    "tableSelectLabel": "เลือกโต๊ะ",
    "clearOrderBtn": "ล้างรายการ",
    "sendOrderBtn": "ส่งออเดอร์",
    "modalReceiptTitle": "ใบเสร็จรับเงิน",
    "cafeNameReceipt": "บ้านพักครู คาเฟ่ 🏠",
    "receiptType": "ประเภท",
    "receiptTable": "โต๊ะ",
    "printReceiptBtn": "พิมพ์ใบเสร็จ",
    "closeBtn": "ปิด",
    "addToOrderSuccess": "เพิ่ม {itemName} เรียบร้อย",
    "removeFromOrderSuccess": "ลบ {itemName} เรียบร้อย",
    "noItemsSelected": "โปรดเลือกสินค้าอย่างน้อย 1 รายการ",
    "sendingOrder": "กำลังส่งข้อมูล...",
    "orderSuccess": "ส่งออเดอร์สำเร็จ 🎉",
    "orderFailed": "เกิดข้อผิดพลาด: {errorMessage}",
    "clearOrderConfirm": "ล้างรายการทั้งหมด?",
    "orderCleared": "ล้างรายการเรียบร้อย",
    "noMenuInCategory": "ไม่มีเมนูในหมวดหมู่นี้",
    "บาท": "บาท",
    "table1": "โต๊ะ 1",
    "table2": "โต๊ะ 2",
    "table3": "โต๊ะ 3",
    "table4": "โต๊ะ 4"
  },
  "en": {
    "appTitle": "Teacher's Home / Cafe 🧁☕️",
    "menuHeader": "Menu",
    "orderListHeader": "Order List",
    "allCategory": "All ✨",
    "drinkCategory": "Drinks ☕️",
    "foodCategory": "Food 🥪",
    "dessertCategory": "Desserts 🍰",
    "mainDishCategory": "Main Dishes 🍽️",
    "coffeeSubCategory": "Coffee ☕",
    "teaSubCategory": "Tea 🍵",
    "juiceSubCategory": "Juices 🥤",
    "otherDrinkSubCategory": "Others 🍹",
    "alcoholSubCategory": "Alcohol & Beer 🍻", // เพิ่มหมวดหมู่ย่อยใหม่
    "pizzaSubCategory": "Pizza 🍕",
    "spaghettiSubCategory": "Spaghetti 🍝",
    "steakSubCategory": "Steak 🥩",
    "thaiFoodSubCategory": "Thai Food 🍚",
    "cakesBakeriesSubCategory": "Cakes & Bakeries 🧁",
    "otherDessertSubCategory": "Others 🍬",
    "menuNameCol": "Menu",
    "priceCol": "Price",
    "qtyCol": "Quantity",
    "totalCol": "Total",
    "manageCol": "Manage",
    "grandTotal": "Grand Total",
    "orderTypeLabel": "Order Type",
    "eatHere": "Eat Here",
    "takeHome": "Take Home",
    "tableSelectLabel": "Select Table",
    "clearOrderBtn": "Clear Order",
    "sendOrderBtn": "Send Order",
    "modalReceiptTitle": "Receipt",
    "cafeNameReceipt": "Teacher's Home Cafe 🏠",
    "receiptType": "Type",
    "receiptTable": "Table",
    "printReceiptBtn": "Print Receipt",
    "closeBtn": "Close",
    "addToOrderSuccess": "Added {itemName} to order",
    "removeFromOrderSuccess": "Removed {itemName} from order",
    "noItemsSelected": "Please select at least 1 item",
    "sendingOrder": "Sending order...",
    "orderSuccess": "Order sent successfully 🎉",
    "orderFailed": "Error: {errorMessage}",
    "clearOrderConfirm": "Clear all items?",
    "orderCleared": "Order cleared",
    "noMenuInCategory": "No menu in this category",
    "บาท": "Baht",
    "table1": "Table 1",
    "table2": "Table 2",
    "table3": "Table 3",
    "table4": "Table 4"
  }
};

// Function to switch language
function switchLanguage(lang) {
  currentLang = lang;
  updateUIForLanguage();
  renderMenu(); // Re-render menu to apply language change to menu items
  renderOrders(); // Re-render orders to apply language change to order list
  updateCurrentTime(); // Update time display for new language
}

// Function to update UI elements based on current language
function updateUIForLanguage() {
  document.getElementById('appTitle').textContent = getTranslation('appTitle');
  document.getElementById('menuHeader').textContent = getTranslation('menuHeader');
  document.getElementById('orderListHeader').textContent = getTranslation('orderListHeader');

  // Update main category buttons
  document.querySelector('.category-btn[data-category="all"]').textContent = getTranslation('allCategory');
  document.querySelector('.category-btn[data-category="drink"]').textContent = getTranslation('drinkCategory');
  document.querySelector('.category-btn[data-category="food"]').textContent = getTranslation('foodCategory');
  document.querySelector('.category-btn[data-category="dessert"]').textContent = getTranslation('dessertCategory');
  document.querySelector('.category-btn[data-category="mainDish"]').textContent = getTranslation('mainDishCategory');

  // Update sub-category buttons
  document.querySelector('#subCategoryDrink .sub-category-btn[data-category="coffee"]').textContent = getTranslation('coffeeSubCategory');
  document.querySelector('#subCategoryDrink .sub-category-btn[data-category="tea"]').textContent = getTranslation('teaSubCategory');
  document.querySelector('#subCategoryDrink .sub-category-btn[data-category="juice"]').textContent = getTranslation('juiceSubCategory');
  document.querySelector('#subCategoryDrink .sub-category-btn[data-category="otherDrink"]').textContent = getTranslation('otherDrinkSubCategory');
  document.querySelector('#subCategoryDrink .sub-category-btn[data-category="alcohol"]').textContent = getTranslation('alcoholSubCategory'); // อัปเดตข้อความสำหรับปุ่มใหม่

  document.querySelector('#subCategoryDessert .sub-category-btn[data-category="cakesBakeries"]').textContent = getTranslation('cakesBakeriesSubCategory');
  document.querySelector('#subCategoryDessert .sub-category-btn[data-category="otherDessert"]').textContent = getTranslation('otherDessertSubCategory');

  document.querySelector('#subCategoryMainDish .sub-category-btn[data-category="pizza"]').textContent = getTranslation('pizzaSubCategory');
  document.querySelector('#subCategoryMainDish .sub-category-btn[data-category="spaghetti"]').textContent = getTranslation('spaghettiSubCategory');
  document.querySelector('#subCategoryMainDish .sub-category-btn[data-category="steak"]').textContent = getTranslation('steakSubCategory');
  document.querySelector('#subCategoryMainDish .sub-category-btn[data-category="thaiFood"]').textContent = getTranslation('thaiFoodSubCategory');

  document.getElementById('colMenuName').textContent = getTranslation('menuNameCol');
  document.getElementById('colPrice').textContent = getTranslation('priceCol');
  document.getElementById('colQty').textContent = getTranslation('qtyCol');
  document.getElementById('colTotal').textContent = getTranslation('totalCol');
  document.getElementById('colManage').textContent = getTranslation('manageCol');
  document.getElementById('totalAmountLabel').textContent = getTranslation('grandTotal');

  document.getElementById('orderTypeHeader').textContent = getTranslation('orderTypeLabel');
  document.getElementById('orderTypeLabel').textContent = getTranslation('orderTypeLabel');
  document.getElementById('eatHereLabel').innerHTML = `${getTranslation('eatHere')} <span class="fs-4">🍽️</span>`;
  document.getElementById('takeHomeLabel').innerHTML = `${getTranslation('takeHome')} <span class="fs-4">🛍️</span>`;
  document.getElementById('tableSelectLabel').innerHTML = `${getTranslation('tableSelectLabel')} <span class="fs-4 ms-2">🪑</span>`;

  // Update table number options
  document.querySelector('#tableNumber option[value="โต๊ะ 1"]').textContent = getTranslation('table1');
  document.querySelector('#tableNumber option[value="โต๊ะ 2"]').textContent = getTranslation('table2');
  document.querySelector('#tableNumber option[value="โต๊ะ 3"]').textContent = getTranslation('table3');
  document.querySelector('#tableNumber option[value="โต๊ะ 4"]').textContent = getTranslation('table4');

  document.getElementById('clearOrderBtn').innerHTML = `<i class="bi bi-trash"></i> ${getTranslation('clearOrderBtn')}`;
  document.getElementById('sendOrderBtn').innerHTML = `<i class="bi bi-send-check"></i> ${getTranslation('sendOrderBtn')}`;

  document.getElementById('receiptModalTitle').textContent = getTranslation('modalReceiptTitle');
  document.getElementById('cafeNameReceipt').textContent = getTranslation('cafeNameReceipt');
  document.getElementById('printReceiptBtn').innerHTML = `<i class="bi bi-printer"></i> ${getTranslation('printReceiptBtn')}`;
  document.getElementById('closeModalBtn').textContent = getTranslation('closeBtn');
}

// ฟังก์ชันสำหรับดึงข้อความตามภาษา
function getTranslation(key, placeholders = {}) {
  let text = translations[currentLang][key] || key; // ถ้าไม่มี key ให้แสดง key นั้นๆ
  for (const p in placeholders) {
    text = text.replace(`{${p}}`, placeholders[p]);
  }
  return text;
}

const menuItems = [
  // เครื่องดื่ม (Drinks)
  {id:1,name:"กาแฟลาเต้",price:40,category:"coffee",icon:"☕️"},
  {id:42,name:"คาปูชิโน่คลาสสิก (Classic Cappuccino)",price:50,category:"coffee",icon:"☕"},
  {id:44,name:"เอสเปรสโซ่เอ็กซ์ตร้า (Espresso Extra)",price:40,category:"coffee",icon:"☕"},
  {id:46,name:"กาแฟนมสด (Fresh Milk Coffee)",price:45,category:"coffee",icon:"🥛"},
  {id:41,name:"ม็อคค่าแม็กซ์ (Mocha Max)",price:60,category:"coffee",icon:"☕"},
  {id:40,name:"ลาเต้ลาเวนเดอร์ (Lavender Latte)",price:55,category:"coffee",icon:"💜"},

  {id:2,name:"ชาเขียว",price:35,category:"tea",icon:"🍵"},
  {id:43,name:"ชาเขียวมัทฉะ (Matcha Green Tea)",price:45,category:"tea",icon:"🍵"},
  {id:45,name:"ชาไทยเย็น (Thai Iced Tea)",price:40,category:"tea",icon:"🧋"},
  {id:7,name:"ชาไทย",price:35,category:"tea",icon:"🧋"},
  {id:47,name:"ฮันนี่เลมอนที (Honey Lemon Tea)",price:35,category:"tea",icon:"🍋"},
  {id:48,name:"ชาอู่หลงร้อน (Hot Oolong Tea)",price:30,category:"tea",icon:"🍵"},
 
  {id:4,name:"น้ำส้มคั้น",price:30,category:"juice",icon:"🥤"},
  {id:39,name:"โกโก้ครีมมี่ (Cocoa Creamy)",price:45,category:"otherDrink",icon:"🍫"}, // ย้ายโกโก้มาอยู่อื่นๆ

  // **เพิ่มเมนู เหล้า-
