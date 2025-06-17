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
    "table4": "โต๊ะ 4",
    "gameHeader": "มาเล่นเกมทำพิซซ่ากัน! 🍕",
    "gameDescription": "เบื่อแล้วใช่ไหม? มาลองทำพิซซ่าในเกมสนุกๆ กัน!",
    "playGameBtnText": "เล่นเกม Good Pizza, Great Pizza"
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
    "table4": "Table 4",
    "gameHeader": "Let's Play Pizza Game! 🍕",
    "gameDescription": "Bored? Let's try making pizza in a fun game!",
    "playGameBtnText": "Play Good Pizza, Great Pizza Game"
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

  // New game section translations
  document.getElementById('gameHeader').textContent = getTranslation('gameHeader');
  document.getElementById('gameDescription').textContent = getTranslation('gameDescription');
  document.getElementById('playGameBtnText').textContent = getTranslation('playGameBtnText');
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

  // **เพิ่มเมนู เหล้า-เบียร์**
  {id:78,name:"เบียร์ช้าง",price:90,category:"alcohol",icon:"🍺"},
  {id:79,name:"เบียร์ลีโอ",price:90,category:"alcohol",icon:"🍺"},
  {id:80,name:"เบียร์สิงห์",price:100,category:"alcohol",icon:"🍺"},
  {id:81,name:"เบียร์ไฮเนเก้น",price:120,category:"alcohol",icon:"🍺"},
  {id:82,name:"วิสกี้ (แก้ว)",price:150,category:"alcohol",icon:"🥃"},
  {id:83,name:"เหล้าขาว (ช็อต)",price:60,category:"alcohol",icon:"🍶"},
  {id:84,name:"ค็อกเทล มะพร้าว (Coconut Cocktail)",price:180,category:"alcohol",icon:"🍹"},


  // อาหาร (Food)
  {id:5,name:"แซนวิช",price:45,category:"food",icon:"🥪"}, // Changed to general 'food' category
  {id:8,name:"ครัวซองต์",price:40,category:"food",icon:"🥐"}, // Changed to general 'food' category

  // ของหวาน (Desserts)
  {id:3,name:"เค้กช็อกโกแลต",price:55,category:"cakesBakeries",icon:"🧁"},
  {id:6,name:"บราวนี่",price:50,category:"cakesBakeries",icon:"🍫"},
  {id:24,name:"บ้านขนมหวาน Sweet Home Bakery",price:65,category:"cakesBakeries",icon:"🍰"},
  {id:25,name:"ขนมอบรัก Love Bake",price:70,category:"cakesBakeries",icon:"💖"},
  {id:26,name:"ครัวอบอุ่น Warm Oven",price:60,category:"cakesBakeries",icon:"🍪"},
  {id:27,name:"หอมกลิ่นขนม Aroma Bakery",price:75,category:"cakesBakeries",icon:"🍞"},
  {id:28,name:"กลิ่นอบอวล Cozy Crust",price:68,category:"cakesBakeries",icon:"🥨"},
  {id:29,name:"ขนมบ้านสวน Garden Sweets",price:55,category:"cakesBakeries",icon:"🌳"},
  {id:30,name:"ขนมหวานใจ Sweetheart Treats",price:72,category:"cakesBakeries",icon:"🍬"},
  {id:31,name:"สวรรค์ขนม Heaven Bakery",price:80,category:"cakesBakeries",icon:"😇"},
  {id:32,name:"เตาอบสุขใจ Happy Oven",price:62,category:"cakesBakeries",icon:"😊"},
  {id:33,name:"ขนมมงคล Lucky Bakes",price:78,category:"cakesBakeries",icon:"🧧"},
  {id:34,name:"ขนมอบสด Fresh Bake",price:58,category:"cakesBakeries",icon:"🥖"},
  {id:35,name:"อบอบอุ่น Warm & Fresh",price:60,category:"cakesBakeries",icon:"🥐"},
  {id:36,name:"หอมกรุ่นขนม Fragrant Sweets",price:65,category:"cakesBakeries",icon:"🍩"},
  {id:37,name:"รสหวานบ้านเรา Sweet Taste Home",price:55,category:"cakesBakeries",icon:"🏠"},
  {id:38,name:"ขนมบ้านใกล้ Nearby Bakery",price:50,category:"cakesBakeries",icon:"🏡"},

  // พิซซ่า (Pizza) - ย้ายไปอยู่ Main Dishes
  {id:9,name:"พิซซ่ามาการิต้า (Margherita)",price:180,category:"pizza",icon:"🍕"},
  {id:10,name:"พิซซ่าเปปเปอโรนี (Pepperoni)",price:220,category:"pizza",icon:"🍕"},
  {id:11,name:"พิซซ่าฮาวายเอี้ยน (Hawaiian)",price:200,category:"pizza",icon:"🍕"},
  {id:12,name:"พิซซ่าซุปเปอร์ดีลักซ์ (Super Deluxe)",price:250,category:"pizza",icon:"🍕"},
  {id:13,name:"พิซซ่าพริกหยวกและเห็ด (Bell Pepper & Mushroom)",price:190,category:"pizza",icon:"🍕"},
  {id:14,name:"พิซซ่าไส้กรอกอิตาเลียน (Italian Sausage)",price:230,category:"pizza",icon:"🍕"},
  {id:15,name:"พิซซ่าแซลมอนรมควัน (Smoked Salmon)",price:280,category:"pizza",icon:"🍕"},
  {id:16,name:"พิซซ่าชีสรวมมิตร (Four Cheese)",price:210,category:"pizza",icon:"🍕"},
  {id:17,name:"พิซซ่าบาร์บีคิวไก่ (BBQ Chicken)",price:200,category:"pizza",icon:"🍕"},
  {id:18,name:"พิซซ่าทะเลรวม (Seafood)",price:270,category:"pizza",icon:"🍕"},
  {id:19,name:"พิซซ่าผักโขมและริคอตต้า (Spinach & Ricotta)",price:195,category:"pizza",icon:"🍕"},
  {id:20,name:"พิซซ่าเบคอนกับไข่ (Bacon & Egg)",price:215,category:"pizza",icon:"🍕"},
  {id:21,name:"พิซซ่าปาปริก้าและไก่ (Paprika & Chicken)",price:205,category:"pizza",icon:"🍕"},
  {id:22,name:"พิซซ่ารสจัด (Spicy Hot)",price:190,category:"pizza",icon:"🍕"},
  {id:23,name:"พิซซ่ามะกอกดำกับแฮม (Black Olive & Ham)",price:200,category:"pizza",icon:"🍕"},

  // สปาเก็ตตี้ (Spaghetti) - ย้ายไปอยู่ Main Dishes
  {id:59,name:"สปาเก็ตตี้คาโบนาร่า (Carbonara)",price:150,category:"spaghetti",icon:"🍝"},
  {id:60,name:"สปาเก็ตตี้โบโลเนส (Bolognese)",price:140,category:"spaghetti",icon:"🍝"},
  {id:61,name:"สปาเก็ตตี้ผัดขี้เมาทะเล (Spicy Seafood)",price:160,category:"spaghetti",icon:"🍝"},
  {id:62,name:"สปาเก็ตตี้เบคอนพริกแห้ง (Dried Chili Bacon)",price:130,category:"spaghetti",icon:"🍝"},
  {id:63,name:"สปาเก็ตตี้ซอสมะเขือเทศ (Tomato Sauce)",price:120,category:"spaghetti",icon:"🍝"},
  
  // สเต็ก (Steak) - ย้ายไปอยู่ Main Dishes
  {id:49,name:"สเต็กพริกไทยดำ (Black Pepper Steak)",price:180,category:"steak",icon:"🥩"},
  {id:50,name:"สเต็กซอสเห็ดหอม (Mushroom Sauce Steak)",price:190,category:"steak",icon:"🥩"},
  {id:51,name:"สเต็กหมูจิ้มแจ่ว (Spicy Thai Dipping Pork Steak)",price:170,category:"steak",icon:"🍖"},
  {id:52,name:"สเต็กเนื้อย่างน้ำจิ้มแจ่ว (Thai Spicy Beef Steak)",price:220,category:"steak",icon:"🥩"},
  {id:53,name:"สเต็กไก่ซอสกระเทียมพริกไทย (Garlic Pepper Chicken Steak)",price:160,category:"steak",icon:"🍗"},
  {id:54,name:"สเต็กหมูซอสเทอริยากิ (Teriyaki Pork Steak)",price:175,category:"steak",icon:"🍖"},
  {id:55,name:"สเต็กแซ่บ (Zapp Steak – แนวอีสานจัดจ้าน)",price:185,category:"steak",icon:"🌶️"},
  {id:56,name:"สเต็กปลาแซลมอนย่างซีอิ๊ว (Grilled Salmon with Soy Glaze)",price:250,category:"steak",icon:"🐟"},
  {id:57,name:"สเต็กหมูพริกเกลือ (Spicy Pork Steak Thai Style)",price:170,category:"steak",icon:"🌶️"},
  {id:58,name:"สเต็กไก่ลาบ (Larb Chicken Steak)",price:165,category:"steak",icon:"🍗"},

  // อาหารไทย (Thai Food) - ย้ายไปอยู่ Main Dishes
  {id:64,name:"ผัดกะเพราไก่ไข่ดาว (Stir-fried Basil with Chicken & Fried Egg)",price:80,category:"thaiFood",icon:"🍚"},
  {id:65,name:"ข้าวผัดกุ้ง (Shrimp Fried Rice)",price:90,category:"thaiFood",icon:"🍤"},
  {id:66,name:"ต้มยำกุ้งน้ำข้น (Creamy Tom Yum Goong)",price:120,category:"thaiFood",icon:"🍲"},
  {id:67,name:"แกงเขียวหวานไก่ (Green Curry with Chicken)",price:100,category:"thaiFood",icon:"🍛"},
  {id:68,name:"พะแนงหมู (Panaeng Curry with Pork)",price:110,category:"thaiFood",icon:"🍜"},
  {id:69,name:"ฉู่ฉี่ปลาทู (Chu Chee Mackerel)",price:130,category:"thaiFood",icon:"🐟"},
  {id:70,name:"แกงส้มกุ้งผักรวม (Sour Curry with Shrimp & Mixed Veggies)",price:120,category:"thaiFood",icon:"🌶️"},
  {id:71,name:"ส้มตำไทย (Papaya Salad Thai Style)",price:70,category:"thaiFood",icon:"🥗"},
  {id:72,name:"คั่วกลิ้งหมู (Southern Thai Stir-fried Pork)",price:110,category:"thaiFood",icon:"🌶️"},
  {id:73,name:"ผัดไทยกุ้งสด (Pad Thai with Fresh Shrimp)",price:95,category:"thaiFood",icon:"🍜"},
  {id:74,name:"ข้าวซอยไก่ (Northern Thai Curry Noodles with Chicken)",price:100,category:"thaiFood",icon:"🍜"},
  {id:75,name:"น้ำตกหมู (Spicy Grilled Pork Salad)",price:85,category:"thaiFood",icon:"🥗"},
  {id:76,name:"ลาบหมู (Spicy Minced Pork Salad)",price:85,category:"thaiFood",icon:"🥗"},
  {id:77,name:"ไก่ย่าง (Grilled Chicken)",price:150,category:"thaiFood",icon:"🍗"}
];

let order = []; // array to store selected items

// Get DOM elements
const menuList = document.getElementById('menuList');
const orderTableBody = document.querySelector('#orderTable tbody');
const totalAmountElement = document.getElementById('totalAmount');
const categoryFilter = document.getElementById('categoryFilter');
const subCategoryDrink = document.getElementById('subCategoryDrink');
const subCategoryDessert = document.getElementById('subCategoryDessert');
const subCategoryMainDish = document.getElementById('subCategoryMainDish');
const clearOrderBtn = document.getElementById('clearOrderBtn');
const sendOrderBtn = document.getElementById('sendOrderBtn');
const statusMsg = document.getElementById('statusMsg');
const orderTypeRadios = document.querySelectorAll('input[name="orderType"]');
const tableSelectContainer = document.getElementById('tableSelectContainer');
const tableNumberSelect = document.getElementById('tableNumber');
const receiptModal = new bootstrap.Modal(document.getElementById('receiptModal'));
const receiptContent = document.getElementById('receiptContent');
const qrImage = document.getElementById('qrImage');
const themeToggle = document.getElementById('themeToggle');


// Function to display current time
function updateCurrentTime() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  document.getElementById('current-time').textContent = now.toLocaleDateString(currentLang === 'th' ? 'th-TH' : 'en-US', options);
}

// Initial call to display time
updateCurrentTime();
// Update time every second
setInterval(updateCurrentTime, 1000);


// Render menu items based on selected category
function renderMenu() {
  menuList.innerHTML = '';
  let filteredMenu = [];

  if (currentActiveCategory === 'all') {
    filteredMenu = menuItems;
  } else if (currentActiveSubCategory !== 'all' && currentActiveSubCategory !== currentActiveCategory) {
    // If a specific sub-category is active, filter by it
    filteredMenu = menuItems.filter(item => item.category === currentActiveSubCategory);
  } else {
    // Otherwise, filter by the main category
    if (currentActiveCategory === 'drink') {
      // All drink subcategories
      filteredMenu = menuItems.filter(item => ['coffee', 'tea', 'juice', 'otherDrink', 'alcohol'].includes(item.category));
    } else if (currentActiveCategory === 'dessert') {
      // All dessert subcategories
      filteredMenu = menuItems.filter(item => ['cakesBakeries', 'otherDessert'].includes(item.category));
    } else if (currentActiveCategory === 'mainDish') {
      // All main dish subcategories
      filteredMenu = menuItems.filter(item => ['pizza', 'spaghetti', 'steak', 'thaiFood'].includes(item.category));
    } else if (currentActiveCategory === 'food') {
      // Items directly under 'food' category, if any, and not a subcategory
      filteredMenu = menuItems.filter(item => item.category === 'food');
    }
  }


  if (filteredMenu.length === 0) {
    menuList.innerHTML = `<p class="text-center text-muted mt-3">${getTranslation('noMenuInCategory')}</p>`;
    return;
  }

  filteredMenu.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'list-group-item menu-item d-flex justify-content-between align-items-center';
    itemDiv.innerHTML = `
      <div>
        ${item.icon ? `<span class="me-2">${item.icon}</span>` : ''}
        ${item.name}
      </div>
      <span class="badge bg-primary rounded-pill">${item.price} ${getTranslation('บาท')}</span>
    `;
    itemDiv.onclick = () => addToOrder(item);
    menuList.appendChild(itemDiv);
  });
}


// Add item to order
function addToOrder(item) {
  const existingItem = order.find(orderItem => orderItem.id === item.id);
  if (existingItem) {
    existingItem.qty++;
  } else {
    order.push({...item, qty: 1});
  }
  renderOrders();
  showStatusMessage(getTranslation('addToOrderSuccess', {itemName: item.name}), 'success');
}

// Render order list
function renderOrders() {
  orderTableBody.innerHTML = '';
  let totalAmount = 0;

  if (order.length === 0) {
    totalAmountElement.textContent = `0 ${getTranslation('บาท')}`;
    return;
  }

  order.forEach((item, index) => {
    const row = orderTableBody.insertRow();
    const itemTotal = item.price * item.qty;
    totalAmount += itemTotal;

    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price} ${getTranslation('บาท')}</td>
      <td>
        <div class="input-group qty-input-group">
          <button class="btn btn-outline-secondary btn-sm" onclick="changeQuantity(${index}, -1)">-</button>
          <input type="text" class="form-control form-control-sm" value="${item.qty}" readonly>
          <button class="btn btn-outline-secondary btn-sm" onclick="changeQuantity(${index}, 1)">+</button>
        </div>
      </td>
      <td>${itemTotal} ${getTranslation('บาท')}</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="removeFromOrder(${index})"><i class="bi bi-x-lg"></i></button>
      </td>
    `;
  });

  totalAmountElement.textContent = `${totalAmount} ${getTranslation('บาท')}`;
}

// Change item quantity
function changeQuantity(index, delta) {
  order[index].qty += delta;
  if (order[index].qty <= 0) {
    removeFromOrder(index);
  } else {
    renderOrders();
  }
}

// Remove item from order
function removeFromOrder(index) {
  const removedItemName = order[index].name;
  order.splice(index, 1);
  renderOrders();
  showStatusMessage(getTranslation('removeFromOrderSuccess', {itemName: removedItemName}), 'danger');
}

// Clear all items from order
clearOrderBtn.addEventListener('click', () => {
  if (confirm(getTranslation('clearOrderConfirm'))) {
    order = [];
    renderOrders();
    showStatusMessage(getTranslation('orderCleared'), 'info');
  }
});

// Handle category filter clicks
categoryFilter.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('category-btn')) {
    // Remove active from all main category buttons
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    // Add active to the clicked button
    target.classList.add('active');

    currentActiveCategory = target.dataset.category;
    currentActiveSubCategory = 'all'; // Reset sub-category when main category changes

    // Hide all sub-category containers
    subCategoryDrink.classList.add('d-none');
    subCategoryDessert.classList.add('d-none');
    subCategoryMainDish.classList.add('d-none');

    // Show relevant sub-category container and activate its first button (if exists)
    if (currentActiveCategory === 'drink') {
      subCategoryDrink.classList.remove('d-none');
      subCategoryDrink.querySelector('.sub-category-btn:first-child').click(); // Auto-select first sub-category
    } else if (currentActiveCategory === 'dessert') {
      subCategoryDessert.classList.remove('d-none');
      subCategoryDessert.querySelector('.sub-category-btn:first-child').click();
    } else if (currentActiveCategory === 'mainDish') {
      subCategoryMainDish.classList.remove('d-none');
      subCategoryMainDish.querySelector('.sub-category-btn:first-child').click();
    } else {
      renderMenu(); // Re-render menu for 'all' or 'food' category
    }
  } else if (target.classList.contains('sub-category-btn')) {
    // Remove active from all sub-category buttons within the current main category's sub-group
    const parentDiv = target.closest('div');
    if (parentDiv) {
      parentDiv.querySelectorAll('.sub-category-btn').forEach(btn => btn.classList.remove('active'));
    }
    // Add active to the clicked sub-category button
    target.classList.add('active');
    currentActiveSubCategory = target.dataset.category;
    renderMenu();
  }
});

// Initial selection for sub-categories for the "all" category
// This ensures that when 'all' is selected, no sub-category is 'active' in the UI sense.
document.querySelectorAll('.sub-category-btn').forEach(btn => btn.classList.remove('active'));


// Show/hide table number input based on order type
orderTypeRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (document.getElementById('eatHere').checked) {
      tableSelectContainer.style.display = 'block';
    } else {
      tableSelectContainer.style.display = 'none';
    }
  });
});

// Simulate sending order to Google Sheet (replace with actual Apps Script URL)
sendOrderBtn.addEventListener('click', async () => {
  if (order.length === 0) {
    showStatusMessage(getTranslation('noItemsSelected'), 'danger');
    return;
  }

  showStatusMessage(getTranslation('sendingOrder'), 'info');
  sendOrderBtn.disabled = true;

  const orderType = document.querySelector('input[name="orderType"]:checked').value;
  const tableNumber = orderType === 'นั่งทานที่ร้าน' ? tableNumberSelect.value : '';
  const totalAmount = parseFloat(totalAmountElement.textContent.replace(getTranslation('บาท'), '').trim());

  const orderData = {
    timestamp: new Date().toLocaleString(),
    orderType: orderType,
    tableNumber: tableNumber,
    items: order.map(item => ({
      name: item.name,
      price: item.price,
      qty: item.qty,
      total: item.price * item.qty
    })),
    totalAmount: totalAmount
  };

  // In a real scenario, you'd send this data to a Google Apps Script Web App
  // เปลี่ยน 'YOUR_APPS_SCRIPT_WEB_APP_URL' เป็น URL ของ Apps Script ของคุณจริง ๆ
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwO0fg-5douOx7_idV9UFEWJA_ByvIm7W3gtWo3FhX125DGLVLdcnKVpTxD7rxEfq0xxQ/exec';

  try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(orderData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();

      if (data.status === 'success') {
        showStatusMessage(getTranslation('orderSuccess'), 'success');
        displayReceipt(orderData);
        receiptModal.show();
        order = []; // Clear order after successful send
        renderOrders();
      } else {
        showStatusMessage(getTranslation('orderFailed', {errorMessage: data.message}), 'danger');
      }
    } catch (error) {
      console.error('Error:', error);
      showStatusMessage(getTranslation('orderFailed', {errorMessage: error.message}), 'danger');
    } finally {
      sendOrderBtn.disabled = false;
    }
});

// Display status messages
let statusMsgTimeout;
function showStatusMessage(message, type) {
  clearTimeout(statusMsgTimeout); // Clear any existing timeout
  statusMsg.textContent = message;
  statusMsg.className = `mt-3 alert alert-${type}`;
  statusMsg.style.display = 'block';

  statusMsgTimeout = setTimeout(() => {
    statusMsg.style.display = 'none';
  }, 3000); // Hide after 3 seconds
}

// Display receipt in modal
function displayReceipt(data) {
  let receiptDetailsHtml = `
    <p><strong>${getTranslation('receiptType')}:</strong> ${data.orderType}</p>
  `;
  if (data.orderType === 'นั่งทานที่ร้าน') {
    receiptDetailsHtml += `<p><strong>${getTranslation('receiptTable')}:</strong> ${data.tableNumber}</p>`;
  }
  receiptDetailsHtml += `<p><strong>${getTranslation('grandTotal')}:</strong> ${data.totalAmount} ${getTranslation('บาท')}</p>`;
  receiptDetailsHtml += `<p><strong>${getTranslation('บาท')}:</strong> ${data.timestamp}</p>`; // Timestamp on receipt

  let receiptTableHtml = `
    <table class="table table-bordered table-sm">
      <thead>
        <tr>
          <th>${getTranslation('menuNameCol')}</th>
          <th>${getTranslation('priceCol')}</th>
          <th>${getTranslation('qtyCol')}</th>
          <th>${getTranslation('totalCol')}</th>
        </tr>
      </thead>
      <tbody>
  `;
  data.items.forEach(item => {
    receiptTableHtml += `
      <tr>
        <td>${item.name}</td>
        <td>${item.price} ${getTranslation('บาท')}</td>
        <td>${item.qty}</td>
        <td>${item.total} ${getTranslation('บาท')}</td>
      </tr>
    `;
  });
  receiptTableHtml += `</tbody></table>`;

  receiptContent.innerHTML = `
     <h6 class="text-center" id="cafeNameReceipt">${getTranslation('cafeNameReceipt')}</h6>
     ${receiptDetailsHtml}
     ${receiptTableHtml}
     <div class="text-center mt-3">
         <p><strong>Total: ${data.totalAmount} ${getTranslation('บาท')}</strong></p>
         <img id="qrImage" src="" width="150"/>
         <p>${getTranslation('sendOrderSuccess')}</p>
     </div>
  `;

  // Generate QR code for payment (ตัวอย่าง: ใช้ URL dummy หากไม่มีระบบจ่ายเงินจริง)
  // หากคุณมีระบบ PromptPay หรือ Payment Gateway ที่สร้างลิงก์สำหรับ QR ได้ ให้เปลี่ยนตรงนี้
  const paymentLink = `https://example.com/pay?amount=${data.totalAmount}&orderId=${Date.now()}`;
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(paymentLink)}`;
}

// Print receipt
function printReceipt() {
  const printContent = document.getElementById('receiptContent').innerHTML;
  const originalBody = document.body.innerHTML;
  document.body.innerHTML = printContent;
  window.print();
  document.body.innerHTML = originalBody; // Restore original content
  location.reload(); // Reload to ensure all event listeners and state are reset
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  themeToggle.innerHTML = isDarkMode ? '<i class="bi bi-brightness-high-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
  // Store theme preference
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Check for saved theme preference on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
  } else {
    themeToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
  }

  // Initialize UI with default language
  updateUIForLanguage();
  // Manually trigger click on 'all' category to render initial menu
  document.querySelector('.category-btn[data-category="all"]').click();
});

// Initial render
renderOrders();
