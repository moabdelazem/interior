let dictionary = JSON.parse(localStorage.getItem("dictionary")) || {
  Armchair: { arabic: "كرسي بذراعين", image: "" },
  "Accent Wall": { arabic: "جدار مميز", image: "" },
  Backsplash: { arabic: "جدار خلفي للمطبخ", image: "" },
  Balcony: { arabic: "شرفة", image: "" },
  Baseboards: { arabic: "ألواح القاعدة", image: "" },
  Bookshelf: { arabic: "رف كتب", image: "" },
  Cabinet: { arabic: "خزانة", image: "" },
  Chandelier: { arabic: "ثريا", image: "" },
  Closet: { arabic: "خزانة ملابس", image: "" },
  "Coffee Table": { arabic: "طاولة قهوة", image: "" },
  "Console Table": { arabic: "طاولة الكونسول", image: "" },
  Curtains: { arabic: "ستائر", image: "" },
  Desk: { arabic: "مكتب", image: "" },
  "Dining Table": { arabic: "طاولة طعام", image: "" },
  Doorknob: { arabic: "مقبض الباب", image: "" },
  Dresser: { arabic: "خزانة الملابس", image: "" },
  "End Table": { arabic: "طاولة جانبية", image: "" },
  Fireplace: { arabic: "موقد", image: "" },
  "Floor Lamp": { arabic: "مصباح أرضي", image: "" },
  Footstool: { arabic: "مسند قدم", image: "" },
  "Gallery Wall": { arabic: "جدار معرض", image: "" },
  Headboard: { arabic: "رأس السرير", image: "" },
  Island: { arabic: "جزيرة المطبخ", image: "" },
  "Jewelry Box": { arabic: "صندوق مجوهرات", image: "" },
  "Kitchen Counter": { arabic: "طاولة المطبخ", image: "" },
  "Lamp Shade": { arabic: "غطاء المصباح", image: "" },
  Loveseat: { arabic: "أريكة صغيرة", image: "" },
  Mirror: { arabic: "مرآة", image: "" },
  Nightstand: { arabic: "طاولة سرير", image: "" },
  Ottoman: { arabic: "مقعد عثماني", image: "" },
  Pantry: { arabic: "مخزن طعام", image: "" },
  "Picture Frame": { arabic: "إطار صورة", image: "" },
  Pillow: { arabic: "وسادة", image: "" },
  Quilt: { arabic: "لحاف", image: "" },
  Rack: { arabic: "رف", image: "" },
  Radiator: { arabic: "مشعاع", image: "" },
  Rug: { arabic: "سجادة", image: "" },
  Shelf: { arabic: "رف", image: "" },
  Sofa: { arabic: "أريكة", image: "" },
  "Table Lamp": { arabic: "مصباح طاولة", image: "" },
  Upholstery: { arabic: "تنجيد", image: "" },
  Vanity: { arabic: "طاولة زينة", image: "" },
  Wardrobe: { arabic: "خزانة ملابس", image: "" },
  "Window Sill": { arabic: "عتبة النافذة", image: "" },
  "Accent Chair": { arabic: "كرسي مميز", image: "" },
  "Bar Stool": { arabic: "كرسي بار", image: "" },
  Bench: { arabic: "مقعد طويل", image: "" },
  Carpet: { arabic: "سجاد", image: "" },
  "Ceiling Fan": { arabic: "مروحة سقف", image: "" },
  "Desk Chair": { arabic: "كرسي مكتب", image: "" },
  Drawer: { arabic: "درج", image: "" },
  "Entertainment Center": { arabic: "مركز ترفيه", image: "" },
  "Floor Tile": { arabic: "بلاط أرضي", image: "" },
  "Glass Door": { arabic: "باب زجاجي", image: "" },
  Hammock: { arabic: "أرجوحة", image: "" },
  "Indoor Plant": { arabic: "نبات داخلي", image: "" },
  "Kitchen Sink": { arabic: "حوض المطبخ", image: "" },
  "Light Switch": { arabic: "مفتاح إضاءة", image: "" },
  "Magazine Rack": { arabic: "حامل مجلات", image: "" },
  Nook: { arabic: "ركن صغير", image: "" },
  "Office Chair": { arabic: "كرسي مكتب", image: "" },
  "Pendant Light": { arabic: "مصباح معلق", image: "" },
  "Queen Bed": { arabic: "سرير كوين", image: "" },
  Recliner: { arabic: "كرسي استرخاء", image: "" },
  "Side Table": { arabic: "طاولة جانبية", image: "" },
  "Track Lighting": { arabic: "إضاءة متتبعة", image: "" },
  "Umbrella Stand": { arabic: "حامل مظلات", image: "" },
  Vase: { arabic: "مزهرية", image: "" },
  "Wall Clock": { arabic: "ساعة حائط", image: "" },
  Xerophyte: { arabic: "نبات صحراوي", image: "" },
  "Yard Furniture": { arabic: "أثاث الفناء", image: "" },
  "Zen Garden": { arabic: "حديقة زن", image: "" },
  Alcove: { arabic: "تجويف", image: "" },
  Banister: { arabic: "درابزين", image: "" },
  Canopy: { arabic: "مظلة", image: "" },
  Doormat: { arabic: "ممسحة أرجل", image: "" },
  Etagere: { arabic: "رف مفتوح", image: "" },
  Futon: { arabic: "فوتون", image: "" },
  "Garden Stool": { arabic: "كرسي حديقة", image: "" },
  "Hall Tree": { arabic: "شماعة مدخل", image: "" },
  "Iron Board": { arabic: "لوح كي", image: "" },
  "Jute Rug": { arabic: "سجادة جوت", image: "" },
  "Key Holder": { arabic: "حامل مفاتيح", image: "" },
  "Ladder Shelf": { arabic: "رف سلم", image: "" },
  "Media Console": { arabic: "كونسول وسائط", image: "" },
  "Napkin Holder": { arabic: "حامل مناديل", image: "" },
  "Ottoman Tray": { arabic: "صينية عثمانية", image: "" },
  Planter: { arabic: "وعاء نباتات", image: "" },
  "Quilt Rack": { arabic: "حامل لحاف", image: "" },
  "Room Divider": { arabic: "فاصل غرف", image: "" },
  "Shoe Rack": { arabic: "رف أحذية", image: "" },
  "Tea Cart": { arabic: "عربة شاي", image: "" },
  "Utility Cart": { arabic: "عربة متعددة الاستخدامات", image: "" },
  "Vanity Stool": { arabic: "كرسي طاولة الزينة", image: "" },
  "Wall Sconce": { arabic: "مصباح جداري", image: "" },
  "Wine Rack": { arabic: "رف نبيذ", image: "" },
  "Xylophone Decor": { arabic: "ديكور زيلوفون", image: "" },
  "Yoga Mat": { arabic: "سجادة يوغا", image: "" },
  "Zebra Rug": { arabic: "سجادة مخططة", image: "" },
};
let currentFilter = null;
let currentView = "grid";

// عرض القاموس
function displayDictionary(words = dictionary) {
  const container = document.getElementById("dictionaryContainer");
  container.innerHTML = "";

  // Apply staggered animation
  let delay = 0;
  const entries = Object.keys(words).sort();

  entries.forEach((english, index) => {
    const word = words[english];
    const card = document.createElement("div");
    card.className = "word-card";
    card.style.animationDelay = `${index * 0.05}s`;

    // Buttons container for better organization
    const buttonsHTML = `
            <div class="buttons-container">
              <button class="edit-btn" onclick="editWord('${english}')">تعديل</button>
              <button class="delete-btn" onclick="deleteWord('${english}')">حذف الكلمة</button>
              ${
                word.image
                  ? `<button class="delete-btn" onclick="deleteImage('${english}')">حذف الصورة</button>`
                  : ""
              }
            </div>
          `;

    card.innerHTML = `
            <h3>${english}</h3>
            <p>${word.arabic}</p>
            ${
              word.image
                ? `<img src="${word.image}" alt="${english}" loading="lazy">`
                : ""
            }
            ${buttonsHTML}
          `;
    container.appendChild(card);
  });
}

// Toggle view between grid and list
function toggleView(view) {
  const container = document.getElementById("dictionaryContainer");
  const gridBtn = document.getElementById("gridViewBtn");
  const listBtn = document.getElementById("listViewBtn");

  if (view === "grid") {
    container.className = "dictionary grid-view";
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
    currentView = "grid";
  } else {
    container.className = "dictionary list-view";
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
    currentView = "list";
  }

  // Refresh display to apply new layout
  filterByLetter(currentFilter);
}

// Highlight a word
function highlightWord(english) {
  const cards = document.querySelectorAll(".word-card");
  cards.forEach((card) => {
    if (card.querySelector("h3").textContent === english) {
      card.classList.toggle("highlighted");
    }
  });
}

// البحث عن كلمة
function searchWord() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = Object.fromEntries(
    Object.entries(dictionary).filter(
      ([english]) =>
        english.toLowerCase().includes(query) ||
        dictionary[english].arabic.includes(query)
    )
  );
  displayDictionary(filtered);
}

// إضافة كلمة جديدة
function addWord() {
  const english = document.getElementById("englishInput").value.trim();
  const arabic = document.getElementById("arabicInput").value.trim();
  const imageInput = document.getElementById("imageInput");

  if (english && arabic) {
    // Check if word already exists (prevent duplicates on add)
    if (dictionary[english]) {
      alert(`الكلمة "${english}" موجودة بالفعل.`);
      return;
    }
    if (imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        dictionary[english] = { arabic, image: e.target.result };
        saveAndUpdate();
        resetAddForm(); // Reset form after adding
      };
      reader.readAsDataURL(imageInput.files[0]);
    } else {
      dictionary[english] = { arabic, image: "" };
      saveAndUpdate();
      resetAddForm(); // Reset form after adding
    }
    // Moved resetAddForm inside async/sync branches
    // document.getElementById("englishInput").value = "";
    // document.getElementById("arabicInput").value = "";
    // imageInput.value = "";
  } else {
    alert("يرجى إدخال الكلمة بالإنجليزية والعربية.");
  }
}

// تعديل كلمة (جديد)
function editWord(english) {
  const word = dictionary[english];
  if (!word) return;

  document.getElementById("englishInput").value = english;
  document.getElementById("arabicInput").value = word.arabic;
  document.getElementById("imageInput").value = ""; // Clear file input

  // Disable English input during edit to prevent key change issues
  document.getElementById("englishInput").disabled = true;

  // Change button to "Update"
  const addButton = document.querySelector(".add-section button");
  addButton.textContent = "تحديث الكلمة";
  addButton.onclick = () => updateWord(english); // Pass original key

  // Add a Cancel button if it doesn't exist
  let cancelButton = document.getElementById("cancelEditBtn");
  if (!cancelButton) {
    cancelButton = document.createElement("button");
    cancelButton.id = "cancelEditBtn";
    cancelButton.textContent = "إلغاء التعديل";
    cancelButton.onclick = resetAddForm;
    cancelButton.style.marginLeft = "10px"; // Add some space
    cancelButton.classList.add("cancel-btn"); // Add class for styling
    addButton.parentNode.insertBefore(cancelButton, addButton.nextSibling);
  }
  cancelButton.style.display = "inline-block"; // Ensure it's visible

  // Scroll to the form for better UX
  document.querySelector(".add-section").scrollIntoView({ behavior: "smooth" });
}

// تحديث كلمة (جديد)
function updateWord(originalEnglish) {
  const arabic = document.getElementById("arabicInput").value.trim();
  const imageInput = document.getElementById("imageInput");

  if (arabic) {
    // English input is disabled, so no need to check it
    const currentWord = dictionary[originalEnglish];
    if (!currentWord) return; // Should not happen, but good practice

    if (imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        dictionary[originalEnglish] = { arabic, image: e.target.result };
        saveAndUpdate();
        resetAddForm(); // Reset form after update
      };
      reader.readAsDataURL(imageInput.files[0]);
    } else {
      // Keep existing image if no new one is selected
      dictionary[originalEnglish] = { arabic, image: currentWord.image };
      saveAndUpdate();
      resetAddForm(); // Reset form after update
    }
  } else {
    alert("يرجى إدخال الترجمة بالعربية.");
  }
}

// إعادة تعيين نموذج الإضافة (جديد)
function resetAddForm() {
  document.getElementById("englishInput").value = "";
  document.getElementById("arabicInput").value = "";
  document.getElementById("imageInput").value = "";
  document.getElementById("englishInput").disabled = false; // Re-enable English input

  const addButton = document.querySelector(".add-section button");
  addButton.textContent = "إضافة كلمة جديدة";
  addButton.onclick = addWord;

  // Hide the Cancel button
  const cancelButton = document.getElementById("cancelEditBtn");
  if (cancelButton) {
    cancelButton.style.display = "none";
  }
}

// حذف كلمة
function deleteWord(english) {
  if (confirm(`هل تريد حذف كلمة "${english}"؟`)) {
    delete dictionary[english];
    saveAndUpdate();
  }
}

// حذف صورة فقط
function deleteImage(english) {
  if (confirm(`هل تريد حذف صورة كلمة "${english}"؟`)) {
    dictionary[english].image = "";
    saveAndUpdate();
  }
}

// حفظ البيانات وعرضها
function saveAndUpdate() {
  localStorage.setItem("dictionary", JSON.stringify(dictionary));
  filterByLetter(currentFilter);
  // Consider resetting the form if an edit was in progress but deleted
  // resetAddForm(); // Optional: Reset form after any save? Decide based on UX preference.
}

// إنشاء أزرار الفلترة حسب الحروف
function createLetterFilter() {
  const filterContainer = document.getElementById("letterFilter");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  letters.forEach((letter) => {
    const btn = document.createElement("button");
    btn.className = "letter-btn";
    btn.textContent = letter;
    btn.onclick = () => filterByLetter(letter);
    filterContainer.appendChild(btn);
  });
  const allBtn = document.createElement("button");
  allBtn.className = "letter-btn";
  allBtn.textContent = "الكل";
  allBtn.onclick = () => filterByLetter(null);
  filterContainer.appendChild(allBtn);
}

// فلترة الكلمات حسب الحرف
function filterByLetter(letter) {
  currentFilter = letter;
  const buttons = document.querySelectorAll(".letter-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  if (letter) {
    const filtered = Object.fromEntries(
      Object.entries(dictionary).filter(([english]) =>
        english.toUpperCase().startsWith(letter)
      )
    );
    displayDictionary(filtered);
    buttons.forEach((btn) => {
      if (btn.textContent === letter) btn.classList.add("active");
    });
  } else {
    displayDictionary();
    buttons[buttons.length - 1].classList.add("active"); // "الكل"
  }
}

// تهيئة الصفحة
createLetterFilter();
displayDictionary();
resetAddForm(); // Ensure form is in 'Add' mode initially

// Add event listener for keyboard shortcuts
document.addEventListener("keydown", function (e) {
  // Ctrl+G for Grid View
  if (e.ctrlKey && e.key === "g") {
    e.preventDefault();
    toggleView("grid");
  }
  // Ctrl+L for List View
  if (e.ctrlKey && e.key === "l") {
    e.preventDefault();
    toggleView("list");
  }
});

// --- Back to Top Button Logic ---

// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document smoothly
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
