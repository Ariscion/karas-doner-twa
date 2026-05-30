// MENU DATA FOR ORDER EDITING
const MENU = {
    doners: [
        { id: 'doner_classic', name: "Классический донер", emoji: "🌯", options: [{ label: "ср", price: 1500 }, { label: "мега", price: 1900 }] },
        { id: 'doner_karas', name: "Kara's донер", emoji: "🌯", options: [{ label: "ср", price: 1500 }, { label: "мега", price: 1900 }] },
        { id: 'doner_cheese', name: "Сырный донер", emoji: "🧀", options: [{ label: "ср", price: 1900 }, { label: "мега", price: 2200 }] }
    ],
    snacks: [
        { id: 'snack_fries', name: "Картошка фри (150гр)", emoji: "🍟", options: [{ label: "150г", price: 800 }] },
        { id: 'snack_nuggets', name: "Наггетсы", emoji: "🍗", options: [{ label: "5шт", price: 1000 }, { label: "10шт", price: 1500 }] },
        { id: 'snack_onion_rings', name: "Луковые кольца (8шт)", emoji: "🧅", options: [{ label: "8шт", price: 950 }] },
        { id: 'snack_cheese_sticks', name: "Сырные палочки (5шт)", emoji: "🧀", options: [{ label: "5шт", price: 1450 }] },
        { id: 'snack_cheese_balls', name: "Сырные шарики (12шт)", emoji: "🟡", options: [{ label: "12шт", price: 1200 }] }
    ],
    addons: [
        { id: 'addon_jalapeno', name: "Халапеньо", emoji: "🌶️", options: [{ label: "порция", price: 250 }] },
        { id: 'addon_meat', name: "Доп. Мясо (80гр)", emoji: "🥩", options: [{ label: "80г", price: 600 }] },
        { id: 'addon_cheese', name: "Ломтик сыра", emoji: "🧀", options: [{ label: "1шт", price: 250 }] },
        { id: 'addon_chips', name: "Чипсы", emoji: "🥔", options: [{ label: "порция", price: 250 }] },
        { id: 'addon_crispy_onion', name: "Хрустящий лук", emoji: "🧅", options: [{ label: "порция", price: 250 }] }
    ],
    'hot-drinks': [
        { id: 'hot_cappuccino', name: "Капучино", emoji: "☕", options: [{ label: "250мл", price: 600 }, { label: "350мл", price: 750 }] },
        { id: 'hot_latte', name: "Латте", emoji: "🥛", options: [{ label: "250мл", price: 650 }, { label: "350мл", price: 800 }] },
        { id: 'hot_americano', name: "Американо", emoji: "☕", options: [{ label: "250мл", price: 450 }, { label: "350мл", price: 600 }] },
        { id: 'hot_chocolate', name: "Горячий шоколад", emoji: "🍫", options: [{ label: "250мл", price: 550 }, { label: "350мл", price: 700 }] },
        { id: 'hot_tea', name: "Чай", emoji: "🫖", options: [{ label: "250мл", price: 250 }, { label: "350мл", price: 350 }] }
    ],
    shakes: [
        { id: 'shake_classic', name: "Милкшейк Молочный", emoji: "🍦", options: [{ label: "300мл", price: 800 }, { label: "500мл", price: 1100 }] },
        { id: 'shake_strawberry', name: "Милкшейк Клубничный", emoji: "🍓", options: [{ label: "300мл", price: 1000 }, { label: "500мл", price: 1300 }] },
        { id: 'shake_chocolate', name: "Милкшейк Шоколадный", emoji: "🍫", options: [{ label: "300мл", price: 1000 }, { label: "500мл", price: 1300 }] },
        { id: 'shake_banana', name: "Милкшейк Банановый", emoji: "🍌", options: [{ label: "300мл", price: 1000 }, { label: "500мл", price: 1300 }] }
    ],
    lemonades: [
        { id: 'lemonade_pina', name: "Лимонад Пина Колада", emoji: "🥥", options: [{ label: "500мл", price: 1000 }] },
        { id: 'lemonade_mango', name: "Лимонад Манго-Маракуйя", emoji: "🥭", options: [{ label: "500мл", price: 1100 }] },
        { id: 'lemonade_mojito', name: "Лимонад Мохито", emoji: "🍋", options: [{ label: "500мл", price: 1100 }] },
        { id: 'lemonade_blue', name: "Лимонад Голубая Лагуна", emoji: "🌊", options: [{ label: "500мл", price: 1100 }] }
    ],
    drinks: [
        { id: 'drink_cola', name: "CocaCola", emoji: "🥤", options: [{ label: "0.5л", price: 550 }, { label: "1л", price: 800 }] },
        { id: 'drink_fuse', name: "Fuse tea", emoji: "🍂", options: [{ label: "0.5л", price: 550 }, { label: "1л", price: 800 }] },
        { id: 'drink_sprite', name: "Sprite", emoji: "🍋", options: [{ label: "0.5л", price: 550 }] },
        { id: 'drink_fanta', name: "Fanta", emoji: "🍊", options: [{ label: "0.5л", price: 550 }] },
        { id: 'drink_water', name: "Вода", emoji: "💧", options: [{ label: "б.г 0.5л", price: 350 }, { label: "с.г 0.5л", price: 350 }] },
        { id: 'drink_ayran', name: "Айран", emoji: "🥛", options: [{ label: "порция", price: 350 }] },
        { id: 'drink_gorilla', name: "Gorilla", emoji: "🔋", options: [{ label: "банка", price: 650 }] },
        { id: 'drink_piko', name: "Piko 0,2", emoji: "🧃", options: [{ label: "0.2л", price: 350 }] }
    ]
};

// CONSTANTS
const SHIPPING_COST = 500;

// STATE
let supabaseUrl = '';
let supabaseKey = '';
let supabase = null;

let orders = [];
let selectedOrderId = null;
let currentFilter = 'active'; // active, archive
let editingOrder = null; // Copy of order being edited in modal

// DOM ELEMENTS
const connStatusBadge = document.getElementById('conn-status');
const ordersListContainer = document.getElementById('admin-orders-list');
const detailsPanel = document.getElementById('admin-details-panel');
const settingsBackdrop = document.getElementById('settings-backdrop');
const editOrderBackdrop = document.getElementById('edit-order-backdrop');

// INITIALIZE
window.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    initFilters();
    initAddSelects();
    if (supabase) {
        loadOrdersData();
        setupRealtimeSubscription();
    } else {
        toggleSettingsModal(true);
    }
});

// SETTINGS & CONNECTION MANAGEMENT
function loadSettings() {
    supabaseUrl = localStorage.getItem('kd_sb_url') || '';
    supabaseKey = localStorage.getItem('kd_sb_key') || '';
    
    document.getElementById('set-supabase-url').value = supabaseUrl;
    document.getElementById('set-supabase-key').value = supabaseKey;
    
    if (supabaseUrl && supabaseKey) {
        initSupabase();
    }
}

function initSupabase() {
    try {
        supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
        setConnectionState('connected', 'Подключено');
    } catch (e) {
        console.error(e);
        setConnectionState('disconnected', 'Ошибка подкл.');
    }
}

function setConnectionState(state, text) {
    connStatusBadge.className = `conn-status-badge ${state}`;
    connStatusBadge.querySelector('.status-text').innerText = text;
}

window.toggleSettingsModal = function(show = null) {
    if (show === true) {
        settingsBackdrop.classList.add('open');
    } else if (show === false) {
        settingsBackdrop.classList.remove('open');
    } else {
        settingsBackdrop.classList.toggle('open');
    }
};

window.saveConnectionSettings = function() {
    const url = document.getElementById('set-supabase-url').value.trim();
    const key = document.getElementById('set-supabase-key').value.trim();
    
    if (!url || !key) {
        alert("Заполните оба поля!");
        return;
    }
    
    localStorage.setItem('kd_sb_url', url);
    localStorage.setItem('kd_sb_key', key);
    
    supabaseUrl = url;
    supabaseKey = key;
    
    initSupabase();
    toggleSettingsModal(false);
    
    if (supabase) {
        loadOrdersData();
        setupRealtimeSubscription();
    }
};

// INITIALIZE MENU DROPDOWNS FOR EDIT MODAL
function initAddSelects() {
    const itemSelect = document.getElementById('add-select-item');
    if (!itemSelect) return;
    
    itemSelect.innerHTML = '';
    
    // Add all categories items
    Object.keys(MENU).forEach(cat => {
        MENU[cat].forEach(item => {
            const opt = document.createElement('option');
            opt.value = item.id;
            opt.innerText = `${item.emoji} ${item.name}`;
            itemSelect.appendChild(opt);
        });
    });
    
    updateAddOptionsSelect();
}

window.updateAddOptionsSelect = function() {
    const itemSelect = document.getElementById('add-select-item');
    const optionSelect = document.getElementById('add-select-option');
    if (!itemSelect || !optionSelect) return;
    
    const selectedId = itemSelect.value;
    const item = findMenuItemById(selectedId);
    
    optionSelect.innerHTML = '';
    if (item && item.options) {
        item.options.forEach(opt => {
            const o = document.createElement('option');
            o.value = opt.label;
            o.innerText = `${opt.label} (${opt.price} ₸)`;
            optionSelect.appendChild(o);
        });
    }
};

function findMenuItemById(itemId) {
    for (const cat of Object.keys(MENU)) {
        const found = MENU[cat].find(i => i.id === itemId);
        if (found) return found;
    }
    return null;
}

// FILTER CONTROLS
function initFilters() {
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            renderOrdersList();
        });
    });
}

// DATABASE LOADING
async function loadOrdersData() {
    if (!supabase) return;
    
    setConnectionState('connected', 'Загрузка...');
    
    try {
        // Query orders table
        const { data: dbOrders, error } = await supabase
            .from('orders')
            .select('*')
            .order('created_at', { ascending: false });
            
        if (error) throw error;
        
        orders = dbOrders || [];
        renderOrdersList();
        calculateShiftStats();
        
        setConnectionState('connected', 'Активен');
    } catch (e) {
        console.error("Error loading orders:", e);
        setConnectionState('disconnected', 'Ошибка загрузки');
    }
}

// REALTIME SUBSCRIPTION
function setupRealtimeSubscription() {
    if (!supabase) return;
    
    supabase.channel('orders-realtime')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, async (payload) => {
            console.log('Realtime change on orders:', payload);
            
            const event = payload.eventType;
            const newRecord = payload.new;
            const oldRecord = payload.old;
            
            if (event === 'INSERT') {
                orders.unshift(newRecord);
                playNotificationSound();
            } else if (event === 'UPDATE') {
                orders = orders.map(o => o.id === newRecord.id ? { ...o, ...newRecord } : o);
                
                // If selected order was updated, refresh details
                if (selectedOrderId && orders.find(o => o.id === selectedOrderId)?.id === newRecord.id) {
                    await selectOrder(newRecord.id, false); // Reload details without loader
                }
            } else if (event === 'DELETE') {
                orders = orders.filter(o => o.id !== oldRecord.id);
                if (selectedOrderId === oldRecord.id) {
                    selectedOrderId = null;
                    renderOrderDetails();
                }
            }
            
            renderOrdersList();
            calculateShiftStats();
        })
        .subscribe();
}

function playNotificationSound() {
    const audio = document.getElementById('notification-sound');
    if (audio) {
        audio.play().catch(err => console.log("Sound autoplay blocked by browser:", err));
    }
}

// STATS CALCULATION
function calculateShiftStats() {
    // Shifts total completed today since 00:00:00 local time
    const startOfToday = new Date();
    startOfToday.setHours(0,0,0,0);
    
    const shiftOrders = orders.filter(o => {
        if (o.status !== 'completed') return false;
        const oDate = new Date(o.created_at);
        return oDate >= startOfToday;
    });
    
    let totalSales = 0;
    shiftOrders.forEach(o => totalSales += parseFloat(o.total || 0));
    
    document.getElementById('shift-sales').innerText = `${totalSales} ₸`;
    document.getElementById('shift-orders-count').innerText = shiftOrders.length;
}

// RENDER ORDER QUEUE
function renderOrdersList() {
    ordersListContainer.innerHTML = '';
    
    let filtered = [];
    if (currentFilter === 'active') {
        filtered = orders.filter(o => o.status !== 'completed' && o.status !== 'cancelled');
    } else {
        filtered = orders.filter(o => o.status === 'completed' || o.status === 'cancelled');
    }
    
    if (filtered.length === 0) {
        ordersListContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-folder-open" style="font-size: 28px;"></i>
                Очередь пуста
            </div>
        `;
        return;
    }
    
    filtered.forEach(o => {
        const card = document.createElement('div');
        card.className = `admin-order-card ${o.id === selectedOrderId ? 'selected' : ''}`;
        card.onclick = () => selectOrder(o.id);
        
        const statusLabels = {
            'pending_confirm': 'Подтверждение',
            'pending_payment': 'Оплата',
            'preparing': 'Кухня',
            'delivering': 'В пути',
            'completed': 'Выполнен',
            'cancelled': 'Отменен'
        };
        
        card.innerHTML = `
            <div class="card-header-row">
                <span class="order-num">${escapeHtml(o.order_num)}</span>
                <span class="order-time">${formatOrderTime(o.created_at)}</span>
            </div>
            <div class="order-items-preview">${escapeHtml(o.client_name)}: ${escapeHtml(o.client_address)}</div>
            <div class="card-footer-row">
                <span class="order-sum">${o.total} ₸</span>
                <span class="status-badge ${o.status}">${statusLabels[o.status] || o.status}</span>
            </div>
        `;
        ordersListContainer.appendChild(card);
    });
}

// LOAD & SELECT SPECIFIC ORDER DETAILS
async function selectOrder(id, showLoader = true) {
    selectedOrderId = id;
    
    // Highlight in list
    document.querySelectorAll('.admin-order-card').forEach(card => card.classList.remove('selected'));
    renderOrdersList();
    
    if (showLoader) {
        detailsPanel.innerHTML = `
            <div class="loading-state">
                <i class="fa-solid fa-circle-notch fa-spin"></i> Загрузка деталей заказа...
            </div>
        `;
    }
    
    const order = orders.find(o => o.id === id);
    if (!order) return;
    
    try {
        // Fetch items from order_items table in Supabase
        const { data: dbItems, error } = await supabase
            .from('order_items')
            .select('*')
            .eq('order_id', order.id);
            
        if (error) throw error;
        
        order.items = dbItems || [];
        renderOrderDetails(order);
    } catch (e) {
        console.error("Error loading order items:", e);
        detailsPanel.innerHTML = `
            <div class="empty-state" style="color: var(--color-kaspi);">
                <i class="fa-solid fa-triangle-exclamation"></i>
                Ошибка загрузки элементов заказа
            </div>
        `;
    }
}

// RENDER DETAILS PANE
function renderOrderDetails(order = null) {
    if (!order) {
        detailsPanel.innerHTML = `
            <div class="no-selection-state">
                <i class="fa-solid fa-receipt"></i>
                <h3>Выберите заказ для работы</h3>
                <p>Здесь отобразятся подробности заказа, контакты и управление статусом</p>
            </div>
        `;
        return;
    }
    
    const statusLabels = {
        'pending_confirm': 'Подтверждение',
        'pending_payment': 'Оплата',
        'preparing': 'Кухня',
        'delivering': 'В пути',
        'completed': 'Выполнен',
        'cancelled': 'Отменен'
    };
    
    // Items table content
    let itemsHtml = '';
    order.items.forEach(item => {
        itemsHtml += `
            <div class="table-row">
                <span class="item-name">${item.emoji || '🌯'} ${escapeHtml(item.name)}</span>
                <span class="item-option">${escapeHtml(item.selected_option)}</span>
                <span>x${item.quantity}</span>
                <span>${item.price * item.quantity} ₸</span>
            </div>
        `;
    });
    
    const subtotal = order.total - SHIPPING_COST;
    
    // Status Action Button configuration
    let statusActionBtn = '';
    if (order.status === 'pending_confirm') {
        statusActionBtn = `
            <button class="btn-status-act active-action" onclick="updateOrderStatus('pending_payment')">
                <i class="fa-solid fa-check"></i>
                Подтвердить звонком
            </button>
        `;
    } else if (order.status === 'pending_payment') {
        statusActionBtn = `
            <button class="btn-status-act active-action" onclick="updateOrderStatus('preparing')">
                <i class="fa-solid fa-credit-card"></i>
                Счет оплачен в Kaspi
            </button>
        `;
    } else if (order.status === 'preparing') {
        statusActionBtn = `
            <button class="btn-status-act active-action" onclick="updateOrderStatus('delivering')">
                <i class="fa-solid fa-utensils"></i>
                Приготовлено (В путь)
            </button>
        `;
    } else if (order.status === 'delivering') {
        statusActionBtn = `
            <button class="btn-status-act active-action" onclick="updateOrderStatus('completed')">
                <i class="fa-solid fa-truck-fast"></i>
                Курьер доставил заказ
            </button>
        `;
    }
    
    // Cancel action is always present if order is active
    let cancelActionBtn = '';
    if (order.status !== 'completed' && order.status !== 'cancelled') {
        cancelActionBtn = `
            <button class="btn-status-act btn-status-cancel" onclick="updateOrderStatus('cancelled')">
                <i class="fa-solid fa-ban"></i>
                Отменить заказ
            </button>
        `;
    }
    
    // Edit items is only allowed if order is in progress
    const showEditBtn = (order.status !== 'completed' && order.status !== 'cancelled');
    const editBtnHtml = showEditBtn ? `
        <button class="btn-edit-items" onclick="openEditOrderModal()">
            <i class="fa-solid fa-pen-to-square"></i> Редактировать
        </button>
    ` : '';
    
    detailsPanel.innerHTML = `
        <div class="order-details-container">
            <!-- Header Row -->
            <div class="details-header-row">
                <div>
                    <h2>Заказ ${escapeHtml(order.order_num)}</h2>
                    <p style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">
                        Создан: ${formatOrderDate(order.created_at)}
                    </p>
                </div>
                <span class="status-badge ${order.status}">${statusLabels[order.status] || order.status}</span>
            </div>
            
            <!-- Status Stepper Controller -->
            <div class="status-controller-box">
                <h3>Действия со статусом:</h3>
                <div class="status-actions-grid">
                    ${statusActionBtn}
                    ${cancelActionBtn}
                </div>
            </div>
            
            <!-- Info Cards Grid -->
            <div class="info-grid">
                <!-- Customer Details -->
                <div class="info-card">
                    <h3><i class="fa-solid fa-address-book"></i> Клиент</h3>
                    <div class="info-row">
                        <span class="info-label">Имя:</span>
                        <span class="info-value">${escapeHtml(order.client_name)}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Телефон:</span>
                        <span class="info-value">${escapeHtml(order.client_phone)}</span>
                    </div>
                </div>
                <!-- Delivery & Payment -->
                <div class="info-card">
                    <h3><i class="fa-solid fa-truck"></i> Доставка и оплата</h3>
                    <div class="info-row">
                        <span class="info-label">Адрес:</span>
                        <span class="info-value address">${escapeHtml(order.client_address)}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Kaspi номер:</span>
                        <span class="info-value">${escapeHtml(order.client_kaspi)}</span>
                    </div>
                </div>
            </div>
            
            <!-- Items Card -->
            <div class="items-card">
                <div class="items-card-header">
                    <h3>Позиции в заказе</h3>
                    ${editBtnHtml}
                </div>
                <div class="items-table">
                    <div class="table-header">
                        <span>Название</span>
                        <span>Размер</span>
                        <span>Кол-во</span>
                        <span>Цена</span>
                    </div>
                    ${itemsHtml}
                    
                    <div class="summary-rows">
                        <div class="summary-row">
                            <span>Подитог:</span>
                            <span>${subtotal} ₸</span>
                        </div>
                        <div class="summary-row">
                            <span>Доставка:</span>
                            <span>500 ₸</span>
                        </div>
                        <div class="summary-row grand-total">
                            <span>Итого к оплате:</span>
                            <span>${order.total} ₸</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// UPDATE ORDER STATUS IN DATABASE
window.updateOrderStatus = async function(newStatus) {
    if (!selectedOrderId || !supabase) return;
    
    try {
        const { error } = await supabase
            .from('orders')
            .update({ status: newStatus })
            .eq('id', selectedOrderId);
            
        if (error) throw error;
        console.log(`Order status updated to ${newStatus}`);
    } catch (e) {
        console.error("Error updating status:", e);
        alert("Не удалось обновить статус: " + e.message);
    }
};

// EDIT ORDER ITEMS MODAL ACTIONS
window.openEditOrderModal = function() {
    const order = orders.find(o => o.id === selectedOrderId);
    if (!order) return;
    
    // Deep clone order
    editingOrder = JSON.parse(JSON.stringify(order));
    
    document.getElementById('edit-modal-order-num').innerText = editingOrder.order_num;
    editOrderBackdrop.classList.add('open');
    renderEditModalItems();
};

window.closeEditOrderModal = function() {
    editOrderBackdrop.classList.remove('open');
    editingOrder = null;
};

function renderEditModalItems() {
    const list = document.getElementById('edit-items-list');
    if (!list || !editingOrder) return;
    
    list.innerHTML = '';
    
    let subtotal = 0;
    editingOrder.items.forEach((item, idx) => {
        const row = document.createElement('div');
        row.className = 'edit-item-row';
        row.innerHTML = `
            <span class="item-name">${item.emoji || '🌯'} ${escapeHtml(item.name)}</span>
            <span class="item-option">${escapeHtml(item.selected_option)}</span>
            <input type="number" value="${item.quantity}" min="1" max="20" onchange="changeEditItemQty(${idx}, this.value)">
            <span>${item.price * item.quantity} ₸</span>
            <button class="btn-delete-item" onclick="deleteEditItem(${idx})"><i class="fa-solid fa-trash-can"></i></button>
        `;
        list.appendChild(row);
        subtotal += item.price * item.quantity;
    });
    
    const grand = subtotal + SHIPPING_COST;
    editingOrder.total = grand;
    
    document.getElementById('edit-subtotal-val').innerText = `${subtotal} ₸`;
    document.getElementById('edit-grand-val').innerText = `${grand} ₸`;
}

window.changeEditItemQty = function(index, value) {
    if (!editingOrder) return;
    
    const qty = parseInt(value);
    if (isNaN(qty) || qty <= 0) return;
    
    editingOrder.items[index].quantity = qty;
    renderEditModalItems();
};

window.deleteEditItem = function(index) {
    if (!editingOrder) return;
    
    editingOrder.items.splice(index, 1);
    renderEditModalItems();
};

window.addNewItemToEditingOrder = function() {
    if (!editingOrder) return;
    
    const itemSelect = document.getElementById('add-select-item');
    const optionSelect = document.getElementById('add-select-option');
    const qtyInput = document.getElementById('add-item-qty');
    
    const itemId = itemSelect.value;
    const optionLabel = optionSelect.value;
    const quantity = parseInt(qtyInput.value);
    
    if (isNaN(quantity) || quantity <= 0) return;
    
    const item = findMenuItemById(itemId);
    if (!item) return;
    
    const option = item.options.find(o => o.label === optionLabel);
    if (!option) return;
    
    // Check if item is already in list, if so add quantity
    const existingIdx = editingOrder.items.findIndex(i => i.item_id === itemId && i.selected_option === optionLabel);
    if (existingIdx > -1) {
        editingOrder.items[existingIdx].quantity += quantity;
    } else {
        editingOrder.items.push({
            item_id: itemId,
            name: item.name,
            selected_option: optionLabel,
            price: option.price,
            quantity: quantity,
            emoji: item.emoji
        });
    }
    
    // Reset qty input
    qtyInput.value = 1;
    renderEditModalItems();
};

// SAVE EDITED ORDER TO SUPABASE
window.saveEditedOrder = async function() {
    if (!editingOrder || !supabase) return;
    
    try {
        // Start a database operation:
        // 1. Delete all old items in order_items for this order
        const { error: deleteError } = await supabase
            .from('order_items')
            .delete()
            .eq('order_id', editingOrder.id);
            
        if (deleteError) throw deleteError;
        
        // 2. Insert new items in order_items
        if (editingOrder.items.length > 0) {
            // Map items to include order_id
            const insertPayload = editingOrder.items.map(item => ({
                order_id: editingOrder.id,
                item_id: item.item_id,
                name: item.name,
                selected_option: item.selected_option,
                price: item.price,
                quantity: item.quantity,
                emoji: item.emoji
            }));
            
            const { error: insertError } = await supabase
                .from('order_items')
                .insert(insertPayload);
                
            if (insertError) throw insertError;
        }
        
        // 3. Update total in orders table
        const { error: updateError } = await supabase
            .from('orders')
            .update({ total: editingOrder.total })
            .eq('id', editingOrder.id);
            
        if (updateError) throw updateError;
        
        closeEditOrderModal();
        alert("Заказ успешно отредактирован!");
        
        // Refresh detail view
        await selectOrder(editingOrder.id, false);
    } catch (e) {
        console.error("Error saving edits:", e);
        alert("Не удалось сохранить изменения: " + e.message);
    }
};

// HELPERS
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
    } catch(e) {
        return '';
    }
}

function formatOrderTime(isoString) {
    if (!isoString) return '';
    try {
        const date = new Date(isoString);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    } catch(e) {
        return '';
    }
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
