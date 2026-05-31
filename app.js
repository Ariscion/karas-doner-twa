// SUPABASE CONFIGURATION (Fill these in for production deployment)
const SUPABASE_URL = "https://xibnkismcwrtwlhjgwij.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpYm5rdWFtY3dydHd0aHVqd2xqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDEwMjIsImV4cCI6MjA5NTcxNzAyMn0.31M99Mkxa1uKt1gRo9nAEagm8veLhDxsWwqLPQobwYI";

// INITIALIZE TELEGRAM WEB APP
const tg = window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;

if (tg) {
    tg.ready();
    tg.expand();
    // Configure header color to match app style
    tg.setHeaderColor('#121212');
    tg.setBackgroundColor('#121212');
}

// Helper to trigger haptics
function triggerHaptic() {
    if (tg && tg.HapticFeedback) {
        tg.HapticFeedback.impactOccurred('medium');
    }
}

// MENU DATA STRUCTURE (Parsed from menu.md)
const MENU = {
    doners: [
        {
            id: 'doner_classic',
            name: "Классический донер",
            desc: "Нежное мясо на вертеле, свежие томаты, огурцы, хрустящий картофель и фирменный белый чесночный соус.",
            emoji: "🌯",
            img: "assets/doner_hero.png",
            options: [
                { label: "ср", price: 1500 },
                { label: "мега", price: 1900 }
            ]
        },
        {
            id: 'doner_karas',
            name: "Kara's донер",
            desc: "Наш фирменный донер с секретным пикантным соусом, карамелизированным луком и зеленью.",
            emoji: "🌯",
            img: "assets/doner_hero.png",
            options: [
                { label: "ср", price: 1500 },
                { label: "мега", price: 1900 }
            ]
        },
        {
            id: 'doner_cheese',
            name: "Сырный донер",
            desc: "Донер с двойной порцией расплавленного сыра чеддер, маринованными огурчиками и тягучим сырным соусом.",
            emoji: "🧀",
            img: "assets/doner_hero.png",
            options: [
                { label: "ср", price: 1900 },
                { label: "мега", price: 2200 }
            ]
        }
    ],
    snacks: [
        {
            id: 'snack_fries',
            name: "Картошка фри (150гр)",
            desc: "Золотистый хрустящий картофель фри средней прожарки. Идеальный гарнир.",
            emoji: "🍟",
            img: "assets/snacks_hero.png",
            options: [
                { label: "150г", price: 800 }
            ]
        },
        {
            id: 'snack_nuggets',
            name: "Наггетсы",
            desc: "Сочные куриные наггетсы в хрустящей панировке.",
            emoji: "🍗",
            img: "assets/snacks_hero.png",
            options: [
                { label: "5шт", price: 1000 },
                { label: "10шт", price: 1500 }
            ]
        },
        {
            id: 'snack_onion_rings',
            name: "Луковые кольца (8шт)",
            desc: "Хрустящие луковые кольца в панировке. Подаются горячими.",
            emoji: "🧅",
            img: "assets/snacks_hero.png",
            options: [
                { label: "8шт", price: 950 }
            ]
        },
        {
            id: 'snack_cheese_sticks',
            name: "Сырные палочки (5шт)",
            desc: "Обжаренные во фритюре палочки из моцареллы с тягучей начинкой.",
            emoji: "🧀",
            img: "assets/snacks_hero.png",
            options: [
                { label: "5шт", price: 1450 }
            ]
        },
        {
            id: 'snack_cheese_balls',
            name: "Сырные шарики (12шт)",
            desc: "Хрустящие мини-шарики с начинкой из нежного сливочного сыра.",
            emoji: "🟡",
            img: "assets/snacks_hero.png",
            options: [
                { label: "12шт", price: 1200 }
            ]
        }
    ],
    addons: [
        {
            id: 'addon_jalapeno',
            name: "Халапеньо",
            desc: "Острые перчики халапеньо для любителей попикантнее.",
            emoji: "🌶️",
            options: [
                { label: "порция", price: 250 }
            ]
        },
        {
            id: 'addon_meat',
            name: "Доп. Мясо (80гр)",
            desc: "Дополнительная порция сочного мяса донера.",
            emoji: "🥩",
            options: [
                { label: "80г", price: 600 }
            ]
        },
        {
            id: 'addon_cheese',
            name: "Ломтик сыра",
            desc: "Плавленый сыр чеддер для нежного сливочного вкуса.",
            emoji: "🧀",
            options: [
                { label: "1шт", price: 250 }
            ]
        },
        {
            id: 'addon_chips',
            name: "Чипсы",
            desc: "Добавление хрустящих чипсов прямо внутрь донера.",
            emoji: "🥔",
            options: [
                { label: "порция", price: 250 }
            ]
        },
        {
            id: 'addon_crispy_onion',
            name: "Хрустящий лук",
            desc: "Сушеный жареный лук для приятного хруста.",
            emoji: "🧅",
            options: [
                { label: "порция", price: 250 }
            ]
        }
    ],
    'hot-drinks': [
        {
            id: 'hot_cappuccino',
            name: "Капучино",
            desc: "Классический кофейный напиток с пышной молочной пенкой.",
            emoji: "☕",
            img: "assets/drinks_hero.png",
            options: [
                { label: "250мл", price: 600 },
                { label: "350мл", price: 750 }
            ]
        },
        {
            id: 'hot_latte',
            name: "Латте",
            desc: "Нежный кофейный напиток с большим количеством пропаренного молока.",
            emoji: "🥛",
            img: "assets/drinks_hero.png",
            options: [
                { label: "250мл", price: 650 },
                { label: "350мл", price: 800 }
            ]
        },
        {
            id: 'hot_americano',
            name: "Американо",
            desc: "Насыщенный эспрессо с добавлением горячей воды.",
            emoji: "☕",
            img: "assets/drinks_hero.png",
            options: [
                { label: "250мл", price: 450 },
                { label: "350мл", price: 600 }
            ]
        },
        {
            id: 'hot_chocolate',
            name: "Горячий шоколад",
            desc: "Сладкий согревающий напиток из натурального какао.",
            emoji: "🍫",
            img: "assets/drinks_hero.png",
            options: [
                { label: "250мл", price: 550 },
                { label: "350мл", price: 700 }
            ]
        },
        {
            id: 'hot_tea',
            name: "Чай",
            desc: "Черный или зеленый листовой чай на ваш выбор.",
            emoji: "🫖",
            img: "assets/drinks_hero.png",
            options: [
                { label: "250мл", price: 250 },
                { label: "350мл", price: 350 }
            ]
        }
    ],
    shakes: [
        {
            id: 'shake_classic',
            name: "Милкшейк Молочный",
            desc: "Густой прохладный коктейль на основе пломбира и молока.",
            emoji: "🍦",
            img: "assets/drinks_hero.png",
            options: [
                { label: "300мл", price: 800 },
                { label: "500мл", price: 1100 }
            ]
        },
        {
            id: 'shake_strawberry',
            name: "Милкшейк Клубничный",
            desc: "Нежный коктейль с натуральным сиропом спелой клубники.",
            emoji: "🍓",
            img: "assets/drinks_hero.png",
            options: [
                { label: "300мл", price: 1000 },
                { label: "500мл", price: 1300 }
            ]
        },
        {
            id: 'shake_chocolate',
            name: "Милкшейк Шоколадный",
            desc: "Шоколадный взрыв вкуса из какао и сливочного мороженого.",
            emoji: "🍫",
            img: "assets/drinks_hero.png",
            options: [
                { label: "300мл", price: 1000 },
                { label: "500мл", price: 1300 }
            ]
        },
        {
            id: 'shake_banana',
            name: "Милкшейк Банановый",
            desc: "Фруктовый коктейль с добавлением бананового пюре.",
            emoji: "🍌",
            img: "assets/drinks_hero.png",
            options: [
                { label: "300мл", price: 1000 },
                { label: "500мл", price: 1300 }
            ]
        }
    ],
    lemonades: [
        {
            id: 'lemonade_pina',
            name: "Лимонад Пина Колада",
            desc: "Кокосово-ананасовый освежающий коктейль со льдом.",
            emoji: "🥥",
            img: "assets/drinks_hero.png",
            options: [
                { label: "500мл", price: 1000 }
            ]
        },
        {
            id: 'lemonade_mango',
            name: "Лимонад Манго-Маракуйя",
            desc: "Тропический взрыв сладости манго и кислинки маракуйи.",
            emoji: "🥭",
            img: "assets/drinks_hero.png",
            options: [
                { label: "500мл", price: 1100 }
            ]
        },
        {
            id: 'lemonade_mojito',
            name: "Лимонад Мохито",
            desc: "Классический освежающий микс лайма, свежей мяты и газировки.",
            emoji: "🍋",
            img: "assets/drinks_hero.png",
            options: [
                { label: "500мл", price: 1100 }
            ]
        },
        {
            id: 'lemonade_blue',
            name: "Лимонад Голубая Лагуна",
            desc: "Яркий коктейль со вкусом цитруса кюрасао и лимонного сока.",
            emoji: "🌊",
            img: "assets/drinks_hero.png",
            options: [
                { label: "500мл", price: 1100 }
            ]
        }
    ],
    drinks: [
        {
            id: 'drink_cola',
            name: "CocaCola",
            desc: "Классическая газированная газировка в объеме на выбор.",
            emoji: "🥤",
            img: "assets/drinks_hero.png",
            options: [
                { label: "0.5л", price: 550 },
                { label: "1л", price: 800 }
            ]
        },
        {
            id: 'drink_fuse',
            name: "Fuse tea",
            desc: "Освежающий холодный чай с фруктовым вкусом.",
            emoji: "🍂",
            img: "assets/drinks_hero.png",
            options: [
                { label: "0.5л", price: 550 },
                { label: "1л", price: 800 }
            ]
        },
        {
            id: 'drink_sprite',
            name: "Sprite",
            desc: "Прохладительный напиток со вкусом лимона и лайма.",
            emoji: "🍋",
            img: "assets/drinks_hero.png",
            options: [
                { label: "0.5л", price: 550 }
            ]
        },
        {
            id: 'drink_fanta',
            name: "Fanta",
            desc: "Бодрящий апельсиновый газированный напиток.",
            emoji: "🍊",
            img: "assets/drinks_hero.png",
            options: [
                { label: "0.5л", price: 550 }
            ]
        },
        {
            id: 'drink_water',
            name: "Вода",
            desc: "Природная питьевая вода без газа / с газом.",
            emoji: "💧",
            img: "assets/drinks_hero.png",
            options: [
                { label: "б.г 0.5л", price: 350 },
                { label: "с.г 0.5л", price: 350 }
            ]
        },
        {
            id: 'drink_ayran',
            name: "Айран",
            desc: "Традиционный кисломолочный освежающий напиток.",
            emoji: "🥛",
            img: "assets/drinks_hero.png",
            options: [
                { label: "порция", price: 350 }
            ]
        },
        {
            id: 'drink_gorilla',
            name: "Gorilla",
            desc: "Энергетический газированный напиток для заряда бодрости.",
            emoji: "🔋",
            img: "assets/drinks_hero.png",
            options: [
                { label: "банка", price: 650 }
            ]
        },
        {
            id: 'drink_piko',
            name: "Piko 0,2",
            desc: "Натуральный сок в удобной маленькой коробочке с трубочкой.",
            emoji: "🧃",
            img: "assets/drinks_hero.png",
            options: [
                { label: "0.2л", price: 350 }
            ]
        }
    ]
};

// CONSTANTS
const SHIPPING_COST = 500;

// STATE MANAGEMENT
let cart = [];
let orders = []; // List of all user orders (active + completed)
let selectedOrderId = null; // ID of order currently displayed on status screen
let selectedOptionsState = {}; // Stores chosen size option indices for each card: { itemId: optionIndex }

// DOM ELEMENTS
const menuScreen = document.getElementById('menu-screen');
const statusScreen = document.getElementById('status-screen');
const categoryNavbar = document.getElementById('category-navbar');
const cartStrip = document.getElementById('cart-strip');
const cartBadgeQty = document.getElementById('cart-badge-qty');
const cartPriceSum = document.getElementById('cart-price-sum');
const checkoutDrawer = document.getElementById('checkout-drawer');
const checkoutBackdrop = document.getElementById('checkout-backdrop');
const cartItemsContainer = document.getElementById('cart-items-container');
const totalSubtotal = document.getElementById('total-subtotal');
const totalShipping = document.getElementById('total-shipping');
const totalGrand = document.getElementById('total-grand');
const toastElement = document.getElementById('toast-message');
const toastText = document.getElementById('toast-text');

// INITIALIZE APP
window.addEventListener('DOMContentLoaded', () => {
    initCatalog();
    initCategoryScroller();
    authenticateUser(); // Background auth and load saved profiles
    checkExistingOrder();
    setupPhoneMasks();
});

// STATE & USER VARIABLES FOR TWA AUTH & PROFILES
let currentUser = null;
let savedProfiles = [];

function authenticateUser() {
    if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) {
        currentUser = tg.initDataUnsafe.user;
        console.log("Authenticated Telegram User:", currentUser);

        // Auto pre-fill name input if empty
        const nameInput = document.getElementById('input-name');
        if (nameInput && !nameInput.value) {
            nameInput.value = currentUser.first_name || "";
        }

        showToast(`С возвращением, ${currentUser.first_name}!`, "fa-regular fa-handshake");
    } else {
        console.log("Browser mode: running as guest.");
    }

    // Load checkout profiles suggestions
    loadSavedProfiles();
}

function loadSavedProfiles() {
    const key = currentUser ? `kd_profiles_${currentUser.id}` : 'kd_profiles_guest';
    savedProfiles = JSON.parse(localStorage.getItem(key) || '[]');
    renderProfilesChips();
}

function renderProfilesChips() {
    const container = document.getElementById('saved-profiles-container');
    const chipsBox = document.getElementById('profiles-chips');
    if (!container || !chipsBox) return;

    if (savedProfiles.length === 0) {
        container.classList.add('hidden');
        return;
    }

    container.classList.remove('hidden');
    chipsBox.innerHTML = '';

    savedProfiles.forEach((profile, idx) => {
        const chip = document.createElement('div');
        chip.className = 'profile-chip';
        chip.innerHTML = `
            <span class="profile-chip-text" onclick="autofillForm(${idx})">
                <strong>${escapeHtml(profile.name)}</strong>: ${escapeHtml(profile.address)}
            </span>
            <button type="button" class="btn-delete-profile" onclick="deleteProfile(${idx})" title="Удалить">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;
        chipsBox.appendChild(chip);
    });
}

window.autofillForm = function (index) {
    triggerHaptic();
    const profile = savedProfiles[index];
    if (!profile) return;

    document.getElementById('input-name').value = profile.name;
    document.getElementById('input-phone').value = profile.phone;
    document.getElementById('input-address').value = profile.address;
    document.getElementById('input-kaspi').value = profile.kaspi;

    showToast("Данные формы заполнены!", "fa-solid fa-circle-check");
};

window.deleteProfile = function (index) {
    triggerHaptic();
    savedProfiles.splice(index, 1);
    const key = currentUser ? `kd_profiles_${currentUser.id}` : 'kd_profiles_guest';
    localStorage.setItem(key, JSON.stringify(savedProfiles));
    renderProfilesChips();
    showToast("Профиль удален", "fa-solid fa-trash");
};

function saveCurrentProfile(name, phone, address, kaspi) {
    // Check if duplicate (match name and address)
    const duplicateIndex = savedProfiles.findIndex(p => p.name === name && p.address === address);

    if (duplicateIndex > -1) {
        // Update phone and kaspi
        savedProfiles[duplicateIndex].phone = phone;
        savedProfiles[duplicateIndex].kaspi = kaspi;
    } else {
        // Add new profile to the top of list
        savedProfiles.unshift({ name, phone, address, kaspi });
    }

    // Limit to 5 entries
    if (savedProfiles.length > 5) {
        savedProfiles.pop();
    }

    const key = currentUser ? `kd_profiles_${currentUser.id}` : 'kd_profiles_guest';
    localStorage.setItem(key, JSON.stringify(savedProfiles));
    renderProfilesChips();
}

function escapeHtml(str) {
    if (!str) return '';
    return str.toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// TELEGRAM THEME SYNC
if (tg) {
    const theme = tg.themeParams;
    if (theme.bg_color) document.documentElement.style.setProperty('--bg-dark', theme.bg_color);
    if (theme.secondary_bg_color) document.documentElement.style.setProperty('--bg-card', theme.secondary_bg_color);
    if (theme.text_color) document.documentElement.style.setProperty('--text-primary', theme.text_color);
    if (theme.hint_color) document.documentElement.style.setProperty('--text-secondary', theme.hint_color);
    if (theme.button_color) document.documentElement.style.setProperty('--color-accent', theme.button_color);
}

// SETUP INPUT MASKS
function setupPhoneMasks() {
    const phoneInputs = [document.getElementById('input-phone'), document.getElementById('input-kaspi')];
    phoneInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            if (!x[2]) {
                e.target.value = x[1] ? `+${x[1]}` : '';
                return;
            }
            e.target.value = `+7 (${x[2]})` + (x[3] ? ` ${x[3]}` : '') + (x[4] ? `-${x[4]}` : '') + (x[5] ? `-${x[5]}` : '');
        });
    });
}

// TOAST NOTIFICATIONS
function showToast(message, iconClass = "fa-solid fa-bell") {
    toastText.innerText = message;
    const icon = toastElement.querySelector('i');
    icon.className = iconClass;
    toastElement.classList.add('show');
    setTimeout(() => {
        toastElement.classList.remove('show');
    }, 2000);
}

// THROTTLE HELPER FOR PERFORMANCE OPTIMIZATION
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// CATEGORY NAVIGATION SCROLLER
function initCategoryScroller() {
    const tabs = document.querySelectorAll('.category-tab');

    // Add throttled scroll listener to catalog sections to auto-activate tabs
    window.addEventListener('scroll', throttle(() => {
        let currentActiveSection = 'doners';
        let minDistance = 999999;

        Object.keys(MENU).forEach(cat => {
            const el = document.getElementById(`cat-${cat}`);
            if (el) {
                const rect = el.getBoundingClientRect();
                // Check distance from top of screen
                const distance = Math.abs(rect.top - 120);
                if (distance < minDistance) {
                    minDistance = distance;
                    currentActiveSection = cat;
                }
            }
        });

        tabs.forEach(tab => {
            if (tab.dataset.category === currentActiveSection) {
                tab.classList.add('active');
                // Scroll the active tab into view inside navbar
                tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            } else {
                tab.classList.remove('active');
            }
        });
    }, 100));

    // Click events to scroll directly to the category heading
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            triggerHaptic();
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const cat = tab.dataset.category;
            const targetEl = document.getElementById(`cat-${cat}`);
            if (targetEl) {
                const yOffset = -100; // Account for sticky header
                const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    });
}

// CATALOG RENDERING
function initCatalog() {
    Object.keys(MENU).forEach(categoryKey => {
        const grid = document.getElementById(`grid-${categoryKey}`);
        if (!grid) return;

        grid.innerHTML = '';

        MENU[categoryKey].forEach(item => {
            // Set default selected option for card
            selectedOptionsState[item.id] = 0;

            const card = document.createElement('div');
            card.className = 'food-card';
            card.dataset.itemId = item.id;

            // Build size selector layout if there's multiple options
            let sizeSelectorHtml = '';
            if (item.options.length > 1) {
                sizeSelectorHtml = `<div class="size-toggle-container">`;
                item.options.forEach((opt, idx) => {
                    const activeClass = idx === 0 ? 'active' : '';
                    sizeSelectorHtml += `
                        <button class="size-btn ${activeClass}" 
                                onclick="changeCardOption('${item.id}', ${idx}, this)">
                            ${opt.label}
                        </button>`;
                });
                sizeSelectorHtml += `</div>`;
            }

            // Image or emoji fallback
            let imgHtml = '';
            if (item.img) {
                imgHtml = `<img src="${item.img}" alt="${item.name}">`;
            } else {
                imgHtml = `<div class="food-emoji">${item.emoji}</div>`;
            }

            const defaultPrice = item.options[0].price;

            card.innerHTML = `
                <div class="food-card-left">
                    <h3 class="food-card-title">${item.name}</h3>
                    <p class="food-card-desc">${item.desc}</p>
                    ${sizeSelectorHtml}
                    <div class="price-action-row">
                        <span class="food-card-price" id="price-val-${item.id}">${defaultPrice} ₸</span>
                        <div class="add-btn-wrapper" id="btn-wrapper-${item.id}">
                            <button class="btn-add-food" onclick="addItemToCartFromCatalog('${item.id}')">
                                <i class="fa-solid fa-plus"></i> Добавить
                            </button>
                        </div>
                    </div>
                </div>
                <div class="food-card-image-box">
                    ${imgHtml}
                </div>
            `;

            grid.appendChild(card);
        });
    });
}

// HANDLE CARD SIZE OPTION TOGGLES
window.changeCardOption = function (itemId, optionIndex, buttonElement) {
    triggerHaptic();

    // Toggle active state in UI
    const container = buttonElement.parentElement;
    container.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');

    // Update State
    selectedOptionsState[itemId] = optionIndex;

    // Find Item Details
    const item = findItemById(itemId);
    if (!item) return;

    // Update Price Display
    const priceDisplay = document.getElementById(`price-val-${itemId}`);
    if (priceDisplay) {
        priceDisplay.innerText = `${item.options[optionIndex].price} ₸`;
    }

    // If the item is already in the cart, sync card counter state with the newly chosen option
    updateCatalogBtnState(itemId);
};

// FIND ITEM HELPER
function findItemById(itemId) {
    for (const cat of Object.keys(MENU)) {
        const found = MENU[cat].find(i => i.id === itemId);
        if (found) return found;
    }
    return null;
}

// CATALOG BUTTON STATE UPDATE
function updateCatalogBtnState(itemId) {
    const optionIndex = selectedOptionsState[itemId];
    const item = findItemById(itemId);
    if (!item) return;

    const optionLabel = item.options[optionIndex].label;
    const wrapper = document.getElementById(`btn-wrapper-${itemId}`);
    if (!wrapper) return;

    // Look for matching item in cart
    const cartIndex = cart.findIndex(c => c.itemId === itemId && c.selectedOption === optionLabel);

    if (cartIndex > -1) {
        const qty = cart[cartIndex].quantity;
        wrapper.innerHTML = `
            <div class="counter-controls">
                <button class="counter-btn" onclick="adjustItemQtyFromCatalog('${itemId}', '${optionLabel}', -1)">-</button>
                <span class="counter-qty">${qty}</span>
                <button class="counter-btn" onclick="adjustItemQtyFromCatalog('${itemId}', '${optionLabel}', 1)">+</button>
            </div>
        `;
    } else {
        wrapper.innerHTML = `
            <button class="btn-add-food" onclick="addItemToCartFromCatalog('${itemId}')">
                <i class="fa-solid fa-plus"></i> Добавить
            </button>
        `;
    }
}

// CART ACTIONS
window.addItemToCartFromCatalog = function (itemId) {
    triggerHaptic();
    const optionIndex = selectedOptionsState[itemId];
    const item = findItemById(itemId);
    if (!item) return;

    const optionLabel = item.options[optionIndex].label;
    const price = item.options[optionIndex].price;

    // Check if duplicate
    const existingIndex = cart.findIndex(c => c.itemId === itemId && c.selectedOption === optionLabel);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            itemId: itemId,
            name: item.name,
            selectedOption: optionLabel,
            price: price,
            quantity: 1,
            emoji: item.emoji
        });
    }

    showToast(`Добавлено: ${item.name} (${optionLabel})`, "fa-solid fa-cart-plus");
    updateCartUI();
    updateCatalogBtnState(itemId);
};

window.adjustItemQtyFromCatalog = function (itemId, optionLabel, change) {
    triggerHaptic();
    const existingIndex = cart.findIndex(c => c.itemId === itemId && c.selectedOption === optionLabel);
    if (existingIndex === -1) return;

    cart[existingIndex].quantity += change;

    if (cart[existingIndex].quantity <= 0) {
        cart.splice(existingIndex, 1);
        showToast("Удалено из корзины", "fa-solid fa-trash");
    }

    updateCartUI();
    updateCatalogBtnState(itemId);
};

window.adjustItemQtyFromCart = function (itemId, optionLabel, change) {
    triggerHaptic();
    const existingIndex = cart.findIndex(c => c.itemId === itemId && c.selectedOption === optionLabel);
    if (existingIndex === -1) return;

    cart[existingIndex].quantity += change;

    if (cart[existingIndex].quantity <= 0) {
        cart.splice(existingIndex, 1);
        showToast("Удалено из корзины", "fa-solid fa-trash");
    }

    updateCartUI();
    updateCatalogBtnState(itemId);
};

window.clearCart = function () {
    triggerHaptic();
    cart = [];
    updateCartUI();
    // Reset all catalog buttons to "Add"
    Object.keys(selectedOptionsState).forEach(itemId => {
        updateCatalogBtnState(itemId);
    });
    showToast("Корзина очищена", "fa-solid fa-trash-can");
};

// UPDATE CART STRIP AND BOTTOM DRAWER UI
function updateCartUI() {
    let totalQty = 0;
    let subtotal = 0;

    cart.forEach(item => {
        totalQty += item.quantity;
        subtotal += item.price * item.quantity;
    });

    // Update floating cart strip
    if (totalQty > 0) {
        cartStrip.classList.add('visible');
        cartBadgeQty.innerText = totalQty;
        cartBadgeQty.style.animation = 'none';
        void cartBadgeQty.offsetWidth; // Trigger reflow for bump animation
        cartBadgeQty.style.animation = 'bump 0.3s ease';
        cartPriceSum.innerText = `${subtotal} ₸`;
    } else {
        cartStrip.classList.remove('visible');
        closeCheckoutDrawer();
    }

    // Update drawer totals
    totalSubtotal.innerText = `${subtotal} ₸`;
    totalShipping.innerText = `${SHIPPING_COST} ₸`;
    const grandTotal = subtotal + SHIPPING_COST;
    totalGrand.innerText = `${grandTotal} ₸`;

    // Update Submit button text
    const btnSubmit = document.getElementById('btn-submit-order');
    if (btnSubmit) {
        btnSubmit.querySelector('.btn-label').innerText = `Оформить заказ на ${grandTotal} ₸`;
    }

    // Fill drawer items list
    cartItemsContainer.innerHTML = '';
    const cartTotals = document.querySelector('.cart-totals');
    const checkoutForm = document.getElementById('checkout-form');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<div class="empty-cart-message">Ваша корзина пуста. Выберите вкуснейший донер из меню!</div>`;
        if (cartTotals) cartTotals.classList.add('hidden');
        if (checkoutForm) checkoutForm.classList.add('hidden');
        return;
    } else {
        if (cartTotals) cartTotals.classList.remove('hidden');
        if (checkoutForm) checkoutForm.classList.remove('hidden');
    }

    cart.forEach(item => {
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.innerHTML = `
            <div class="cart-item-info">
                <span class="cart-item-name">${item.emoji} ${item.name}</span>
                <span class="cart-item-option">${item.selectedOption}</span>
                <div class="cart-item-price">${item.price} ₸</div>
            </div>
            <div class="cart-item-controls">
                <button class="counter-btn" onclick="adjustItemQtyFromCart('${item.itemId}', '${item.selectedOption}', -1)">-</button>
                <span class="cart-item-qty">${item.quantity}</span>
                <button class="counter-btn" onclick="adjustItemQtyFromCart('${item.itemId}', '${item.selectedOption}', 1)">+</button>
            </div>
        `;
        cartItemsContainer.appendChild(row);
    });
}

// CHECKOUT DRAWER INTERACTIONS
window.openCheckoutDrawer = function () {
    triggerHaptic();
    checkoutDrawer.classList.add('open');
    checkoutBackdrop.classList.add('open');
};

window.closeCheckoutDrawer = function () {
    checkoutDrawer.classList.remove('open');
    checkoutBackdrop.classList.remove('open');
};

// SUBMIT ORDER (Trigger Checkout)
window.submitOrder = function (event) {
    event.preventDefault();
    triggerHaptic();

    const inputName = document.getElementById('input-name').value.trim();
    const inputPhone = document.getElementById('input-phone').value.trim();
    const inputAddress = document.getElementById('input-address').value.trim();
    const inputKaspi = document.getElementById('input-kaspi').value.trim();

    if (!inputName || !inputPhone || !inputAddress || !inputKaspi) {
        showToast("Заполните все обязательные поля!", "fa-solid fa-triangle-exclamation");
        return;
    }

    // Generate order ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const orderId = `#KD-${randomNum}`;

    // Calculate total price
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    const finalTotal = subtotal + SHIPPING_COST;

    // Create Order Object
    const newOrder = {
        orderId: orderId,
        client: {
            name: inputName,
            phone: inputPhone,
            address: inputAddress,
            kaspi: inputKaspi
        },
        items: [...cart],
        shipping: SHIPPING_COST,
        total: finalTotal,
        status: 'pending_confirm',
        createdAt: new Date().toISOString()
    };

    // Add new order to the top of list
    orders.unshift(newOrder);
    saveOrders();

    // Set selected order for status screen
    selectedOrderId = orderId;

    // Animate loader inside button
    const submitBtn = document.getElementById('btn-submit-order');
    const label = submitBtn.querySelector('.btn-label');
    const spinner = submitBtn.querySelector('.btn-spinner');

    label.classList.add('hidden');
    spinner.classList.remove('hidden');
    submitBtn.disabled = true;

    // Sync order to Supabase if connected
    if (supabase) {
        supabase.from('orders').insert({
            order_num: newOrder.orderId,
            telegram_id: currentUser ? String(currentUser.id) : 'guest',
            client_name: newOrder.client.name,
            client_phone: newOrder.client.phone,
            client_address: newOrder.client.address,
            client_kaspi: newOrder.client.kaspi,
            shipping: newOrder.shipping,
            total: newOrder.total,
            status: newOrder.status
        }).select().then(({ data, error }) => {
            if (error) {
                console.error("Error inserting order to Supabase:", error);
            } else if (data && data.length > 0) {
                const dbOrder = data[0];
                newOrder.id = dbOrder.id; // Save UUID
                saveOrders();

                // Now insert items
                const insertItems = newOrder.items.map(item => ({
                    order_id: dbOrder.id,
                    item_id: item.itemId,
                    name: item.name,
                    selected_option: item.selectedOption,
                    price: item.price,
                    quantity: item.quantity,
                    emoji: item.emoji
                }));

                supabase.from('order_items').insert(insertItems).then(({ error: itemsError }) => {
                    if (itemsError) {
                        console.error("Error inserting items to Supabase:", itemsError);
                    } else {
                        console.log("Order synced to Supabase successfully!");
                        subscribeToOrderUpdates();
                    }
                });
            }
        });
    }

    setTimeout(() => {
        // Clear Cart
        cart = [];
        updateCartUI();
        Object.keys(selectedOptionsState).forEach(itemId => {
            updateCatalogBtnState(itemId);
        });

        // Reset button states
        label.classList.remove('hidden');
        spinner.classList.add('hidden');
        submitBtn.disabled = false;

        closeCheckoutDrawer();
        showToast("Заказ успешно оформлен!", "fa-solid fa-circle-check");

        // Save current profile to localStorage history
        saveCurrentProfile(inputName, inputPhone, inputAddress, inputKaspi);

        // Load Status Screen
        renderStatusScreen();
        updateActiveOrderBanner();
    }, 1500);
};

// HELPER TO MANAGE ORDERS STORAGE KEYS
function getOrdersStorageKey() {
    return currentUser ? `kd_orders_${currentUser.id}` : 'kd_orders_guest';
}

function loadOrders() {
    const key = getOrdersStorageKey();
    orders = JSON.parse(localStorage.getItem(key) || '[]');
}

function saveOrders() {
    const key = getOrdersStorageKey();
    localStorage.setItem(key, JSON.stringify(orders));
}

function getActiveOrders() {
    return orders.filter(o => o.status !== 'completed' && o.status !== 'cancelled');
}

// CHECK PERSISTED ORDERS ON REFRESH
async function checkExistingOrder() {
    loadOrders();
    initSupabase();

    if (supabase) {
        await syncOrdersFromSupabase();
    }

    const activeOrders = getActiveOrders();
    if (activeOrders.length > 0) {
        // Default to the first active order
        selectedOrderId = activeOrders[0].orderId;
        renderStatusScreen();
        updateActiveOrderBanner();
    } else {
        updateActiveOrderBanner();
    }

    if (supabase) {
        subscribeToOrderUpdates();
    }
}

// UPDATE ACTIVE ORDER BANNER ON MENU
function updateActiveOrderBanner() {
    const banner = document.getElementById('active-order-banner');
    if (!banner) return;

    const activeOrders = getActiveOrders();

    if (activeOrders.length > 0) {
        banner.classList.remove('hidden');
        const bannerText = document.getElementById('banner-order-status');
        const bannerId = document.getElementById('banner-order-id');
        const icon = banner.querySelector('.banner-icon');

        if (activeOrders.length === 1) {
            const singleOrder = activeOrders[0];
            bannerId.innerText = singleOrder.orderId;

            const statusTranslations = {
                'pending_confirm': 'Ожидает подтверждения кассиром',
                'pending_payment': 'Ожидает оплаты по Kaspi',
                'preparing': 'Готовится на кухне',
                'delivering': 'Доставляется курьером'
            };
            bannerText.innerText = statusTranslations[singleOrder.status] || singleOrder.status;

            // Update icon
            if (singleOrder.status === 'pending_confirm') icon.className = 'fa-solid fa-clock-rotate-left banner-icon';
            else if (singleOrder.status === 'pending_payment') icon.className = 'fa-solid fa-wallet banner-icon';
            else if (singleOrder.status === 'preparing') icon.className = 'fa-solid fa-fire-burner banner-icon';
            else if (singleOrder.status === 'delivering') icon.className = 'fa-solid fa-motorcycle banner-icon';
        } else {
            bannerId.innerText = `${activeOrders.length} активных заказа`;
            bannerText.innerText = 'Нажмите, чтобы отследить все заказы';
            icon.className = 'fa-solid fa-receipt banner-icon';
        }
    } else {
        banner.classList.add('hidden');
    }
}

window.showActiveOrderScreen = function () {
    triggerHaptic();
    renderStatusScreen();
};

// RENDER STATUS / TIMELINE SCREEN
function renderStatusScreen() {
    loadOrders();
    const activeOrders = getActiveOrders();

    if (activeOrders.length === 0) {
        if (!selectedOrderId || !orders.some(o => o.orderId === selectedOrderId)) {
            if (orders.length > 0) {
                // No active orders, default to the latest completed/cancelled order
                selectedOrderId = orders[0].orderId;
            } else {
                menuScreen.classList.add('active');
                statusScreen.classList.remove('active');
                return;
            }
        }
    } else if (!selectedOrderId || !orders.some(o => o.orderId === selectedOrderId)) {
        selectedOrderId = activeOrders[0].orderId;
    }

    const currentOrder = orders.find(o => o.orderId === selectedOrderId);
    if (!currentOrder) return;

    menuScreen.classList.remove('active');
    statusScreen.classList.add('active');

    // Display Active Orders Switcher (tabs) if there are multiple active orders
    const selector = document.getElementById('active-orders-selector');
    const tabsList = document.getElementById('orders-tabs-list');

    // Filter orders to show in tab switcher (all active orders + currently viewed order)
    const switcherOrders = orders.filter(o => {
        const isActive = o.status !== 'completed' && o.status !== 'cancelled';
        return isActive || o.orderId === selectedOrderId;
    });

    if (switcherOrders.length > 1) {
        selector.classList.remove('hidden');
        tabsList.innerHTML = '';

        switcherOrders.forEach(o => {
            const statusLabels = {
                'pending_confirm': 'Подтверждение',
                'pending_payment': 'Оплата',
                'preparing': 'Кухня',
                'delivering': 'В пути',
                'completed': 'Выполнен',
                'cancelled': 'Отменен'
            };

            const tab = document.createElement('button');
            tab.className = `order-tab ${o.orderId === selectedOrderId ? 'active' : ''}`;
            tab.innerHTML = `
                <span class="order-tab-dot"></span>
                <span>${o.orderId} (${statusLabels[o.status] || o.status})</span>
            `;
            tab.onclick = () => {
                triggerHaptic();
                selectedOrderId = o.orderId;
                renderStatusScreen();
            };
            tabsList.appendChild(tab);
        });
    } else {
        selector.classList.add('hidden');
    }

    // Display Order Meta
    document.getElementById('display-order-id').innerText = currentOrder.orderId;
    document.getElementById('client-sum-name').innerText = currentOrder.client.name;
    document.getElementById('client-sum-phone').innerText = currentOrder.client.phone;
    document.getElementById('client-sum-address').innerText = currentOrder.client.address;
    document.getElementById('client-sum-total').innerText = `${currentOrder.total} ₸`;

    // Fill client order details card
    const itemsList = document.getElementById('client-ordered-items-list');
    itemsList.innerHTML = '';
    currentOrder.items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'client-sum-item';
        div.innerHTML = `
            <span class="client-sum-item-name">${item.emoji} ${item.name} (${item.selectedOption}) x${item.quantity}</span>
            <span class="client-sum-item-price">${item.price * item.quantity} ₸</span>
        `;
        itemsList.appendChild(div);
    });

    // Update Stepper Timelines & Animations
    updateTimelineVisuals(currentOrder);
}

// UPDATE TIMELINE STEPPER AND ANIMATIONS ACCORDING TO STATE
function updateTimelineVisuals(order) {
    if (!order) return;

    const steps = {
        'pending_confirm': 1,
        'pending_payment': 2,
        'preparing': 3,
        'delivering': 4,
        'completed': 5
    };

    const currentStepNum = steps[order.status] || 1;

    // Reset classes
    const stepIds = ['step-confirm', 'step-payment', 'step-preparing', 'step-delivering', 'step-completed'];
    stepIds.forEach((id, idx) => {
        const element = document.getElementById(id);
        if (!element) return;

        element.classList.remove('active', 'completed');

        if (idx + 1 < currentStepNum) {
            element.classList.add('completed');
        } else if (idx + 1 === currentStepNum) {
            element.classList.add('active');
        }
    });

    // Detail descriptions
    document.getElementById('step-confirm-desc').innerText = order.status === 'pending_confirm' ? "Ожидаем звонка от кассира для подтверждения заказа" : "Заказ подтвержден кассиром";
    document.getElementById('step-payment-desc').innerText = order.status === 'pending_payment' ? "Ожидает удаленной оплаты по Kaspi" : (currentStepNum > 2 ? "Оплачено" : "Оплата не завершена");
    document.getElementById('step-preparing-desc').innerText = order.status === 'preparing' ? "Повар уже жарит мясо на вертеле" : (currentStepNum > 3 ? "Приготовлено" : "Ожидает сборки");
    document.getElementById('step-delivering-desc').innerText = order.status === 'delivering' ? "Курьер мчится по вашему адресу" : (currentStepNum > 4 ? "Доставлено" : "В очереди на доставку");

    // Handle Interactive animations inside the Visual Box
    const confirmWrapper = document.getElementById('confirm-wrapper');
    const paymentWrapper = document.getElementById('payment-wrapper');
    const cooking = document.getElementById('cooking-wrapper');
    const scooter = document.getElementById('scooter-wrapper');
    const completedWrapper = document.getElementById('completed-wrapper');
    const visualBg = document.getElementById('tracking-visual-bg');

    confirmWrapper.style.display = 'none';
    paymentWrapper.style.display = 'none';
    cooking.style.display = 'none';
    scooter.style.display = 'none';
    completedWrapper.style.display = 'none';
    visualBg.style.background = 'radial-gradient(circle at 70% 30%, rgba(255, 90, 54, 0.1) 0%, rgba(0, 0, 0, 0) 70%)';

    if (order.status === 'pending_confirm') {
        confirmWrapper.style.display = 'block';
    } else if (order.status === 'pending_payment') {
        paymentWrapper.style.display = 'block';
    } else if (order.status === 'preparing') {
        cooking.style.display = 'block';
    } else if (order.status === 'delivering') {
        scooter.style.display = 'block';
    } else if (order.status === 'completed') {
        completedWrapper.style.display = 'block';
        visualBg.style.background = 'radial-gradient(circle at 50% 50%, rgba(52, 199, 89, 0.15) 0%, rgba(0, 0, 0, 0) 75%)';
    }

    // Kaspi Widget view toggle
    const kaspiWidget = document.getElementById('kaspi-payment-widget');
    if (order.status === 'pending_payment') {
        kaspiWidget.classList.remove('hidden');
        document.getElementById('payment-widget-total').innerText = `${order.total} ₸`;
        document.getElementById('payment-widget-phone').innerText = order.client.kaspi;
    } else {
        kaspiWidget.classList.add('hidden');
    }
}

// MENU RETURNING
document.getElementById('btn-back-to-menu').addEventListener('click', () => {
    triggerHaptic();
    menuScreen.classList.add('active');
    statusScreen.classList.remove('active');
    updateActiveOrderBanner();
});

// ========================================================
// ORDER HISTORY DRAWER LOGIC
// ========================================================

window.openOrdersDrawer = function () {
    triggerHaptic();
    renderOrdersDrawer();
    document.getElementById('orders-drawer').classList.add('open');
    document.getElementById('orders-backdrop').classList.add('open');
};

window.closeOrdersDrawer = function () {
    document.getElementById('orders-drawer').classList.remove('open');
    document.getElementById('orders-backdrop').classList.remove('open');
};

window.viewOrderFromHistory = function (orderId) {
    triggerHaptic();
    selectedOrderId = orderId;
    closeOrdersDrawer();
    renderStatusScreen();
};

function formatOrderDate(isoString) {
    if (!isoString) return '';
    try {
        const date = new Date(isoString);
        const ruMonths = [
            'янв', 'фев', 'мар', 'апр', 'мая', 'июн',
            'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
        ];
        const day = date.getDate();
        const month = ruMonths[date.getMonth()];
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day} ${month}, ${hours}:${minutes}`;
    } catch (e) {
        return '';
    }
}

function renderOrdersDrawer() {
    loadOrders();
    const content = document.getElementById('orders-history-content');
    if (!content) return;

    content.innerHTML = '';

    if (orders.length === 0) {
        content.innerHTML = `
            <div class="empty-cart-message">
                <i class="fa-solid fa-receipt" style="font-size: 40px; color: var(--text-muted); margin-bottom: 12px; display: block;"></i>
                Вы еще не делали заказов.<br>Время заказать сочный донер!
            </div>
        `;
        return;
    }

    orders.forEach(order => {
        // Build items summary text
        const itemsSummary = order.items.map(item => `${item.name} (${item.selectedOption}) x${item.quantity}`).join(', ');

        const statusLabels = {
            'pending_confirm': 'Подтверждение',
            'pending_payment': 'Оплата',
            'preparing': 'Кухня',
            'delivering': 'В пути',
            'completed': 'Выполнен',
            'cancelled': 'Отменен'
        };

        const card = document.createElement('div');
        card.className = 'order-history-card';
        card.innerHTML = `
            <div class="history-card-header">
                <span class="history-order-id">${escapeHtml(order.orderId)}</span>
                <span class="status-badge ${order.status}">${statusLabels[order.status] || order.status}</span>
            </div>
            <div class="history-card-body">
                <div class="history-order-date">${formatOrderDate(order.createdAt)}</div>
                <div class="history-order-items">${escapeHtml(itemsSummary)}</div>
                <div class="history-order-total">Сумма: <span>${order.total} ₸</span></div>
            </div>
            <div class="history-card-footer">
                <button class="btn-track-history" onclick="viewOrderFromHistory('${order.orderId}')">
                    Отследить
                </button>
            </div>
        `;
        content.appendChild(card);
    });
}

// ========================================================
// ИНТЕГРАЦИЯ С БЭКЕНДОМ ДЛЯ ОБНОВЛЕНИЯ СТАТУСОВ (WebSockets / SSE)
// В реальном приложении статус заказа меняется кассиром на бэкенде.
// Чтобы клиент получал новые статусы мгновенно, мы используем:
//
// ========================================================
// SUPABASE CLIENT & DB SYNC LOGIC
// ========================================================

function initSupabase() {
    // 1. Try production hardcoded variables
    let url = SUPABASE_URL;
    let key = SUPABASE_ANON_KEY;

    // 2. Fallback to developer-configured settings in localStorage (useful for local sandbox testing)
    if (!url || !key) {
        url = localStorage.getItem('kd_sb_url') || '';
        key = localStorage.getItem('kd_sb_key') || '';
    }

    if (url && key) {
        try {
            supabase = window.supabase.createClient(url, key);
            console.log("Supabase client initialized successfully!");
        } catch (e) {
            console.error("Failed to initialize Supabase client:", e);
        }
    }
}

async function syncOrdersFromSupabase() {
    if (!supabase) return;
    const tgId = currentUser ? String(currentUser.id) : 'guest';

    try {
        const { data: dbOrders, error } = await supabase
            .from('orders')
            .select('*')
            .eq('telegram_id', tgId)
            .order('created_at', { ascending: false });

        if (error) throw error;

        if (dbOrders && dbOrders.length > 0) {
            const syncedOrders = [];
            for (const dbo of dbOrders) {
                // Fetch items for this order
                const { data: dbItems } = await supabase
                    .from('order_items')
                    .select('*')
                    .eq('order_id', dbo.id);

                syncedOrders.push({
                    orderId: dbo.order_num,
                    id: dbo.id,
                    client: {
                        name: dbo.client_name,
                        phone: dbo.client_phone,
                        address: dbo.client_address,
                        kaspi: dbo.client_kaspi
                    },
                    items: dbItems ? dbItems.map(di => ({
                        itemId: di.item_id,
                        name: di.name,
                        selectedOption: di.selected_option,
                        price: parseFloat(di.price),
                        quantity: di.quantity,
                        emoji: di.emoji
                    })) : [],
                    shipping: parseFloat(dbo.shipping),
                    total: parseFloat(dbo.total),
                    status: dbo.status,
                    createdAt: dbo.created_at
                });
            }

            orders = syncedOrders;
            saveOrders();
        }
    } catch (e) {
        console.error("Error syncing orders from database:", e);
    }
}

let orderSubscription = null;

function subscribeToOrderUpdates() {
    if (!supabase || orders.length === 0) return;

    // Clean up previous channel if any
    if (orderSubscription) {
        supabase.removeChannel(orderSubscription);
    }

    // Subscribe to order state updates
    orderSubscription = supabase.channel('client-orders-updates')
        .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'orders' }, async (payload) => {
            const updatedOrder = payload.new;
            console.log("Realtime order update from cashier:", updatedOrder);

            // Check if this updated order belongs to the user
            const localOrderIdx = orders.findIndex(o => o.orderId === updatedOrder.order_num || o.id === updatedOrder.id);
            if (localOrderIdx === -1) return;

            // If the updated order is currently viewed, fetch new items too (in case cashier edited items)
            if (selectedOrderId === updatedOrder.order_num) {
                try {
                    const { data: dbItems } = await supabase
                        .from('order_items')
                        .select('*')
                        .eq('order_id', updatedOrder.id);

                    orders = orders.map(o => {
                        if (o.orderId === updatedOrder.order_num) {
                            return {
                                ...o,
                                id: updatedOrder.id,
                                status: updatedOrder.status,
                                total: parseFloat(updatedOrder.total),
                                items: dbItems ? dbItems.map(di => ({
                                    itemId: di.item_id,
                                    name: di.name,
                                    selectedOption: di.selected_option,
                                    price: parseFloat(di.price),
                                    quantity: di.quantity,
                                    emoji: di.emoji
                                })) : o.items
                            };
                        }
                        return o;
                    });

                    saveOrders();
                    renderStatusScreen();
                } catch (e) {
                    console.error("Error loading updated order items:", e);
                    // Fallback: just update status and total
                    updateLocalOrderStatusAndTotal(updatedOrder);
                }
            } else {
                updateLocalOrderStatusAndTotal(updatedOrder);
            }
        })
        .subscribe();
}

function updateLocalOrderStatusAndTotal(updatedOrder) {
    orders = orders.map(o => {
        if (o.orderId === updatedOrder.order_num || o.id === updatedOrder.id) {
            return {
                ...o,
                status: updatedOrder.status,
                total: parseFloat(updatedOrder.total)
            };
        }
        return o;
    });
    saveOrders();
    updateActiveOrderBanner();
}

