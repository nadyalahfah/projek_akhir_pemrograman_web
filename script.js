const games = [
    {
        id: 'mobile-legends',
        name: 'Mobile Legends',
        image: 'moba.webp',
        category: 'MOBA',
        popular: true
    },
    {
        id: 'free-fire',
        name: 'Free Fire',
        image: 'epep.jpg',
        category: 'Battle Royale',
        popular: true
    },
    {
        id: 'pubg-mobile',
        name: 'PUBG Mobile',
        image: 'pubg.jpg',
        category: 'Battle Royale',
        popular: true
    },
    {
        id: 'genshin-impact',
        name: 'Genshin Impact',
        image: 'genshin.jpg',
        category: 'RPG',
        popular: true
    },
    {
        id: 'valorant',
        name: 'Valorant',
        image: 'valo.png',
        category: 'FPS',
        popular: false
    },
    {
        id: 'call-of-duty',
        name: 'Call of Duty Mobile',
        image: 'cod.jpg',
        category: 'FPS',
        popular: false
    },
    {
        id: 'arena-of-valor',
        name: 'Arena of Valor',
        image: 'hok.jpg',
        category: 'MOBA',
        popular: false
    },
    {
        id: 'clash-of-clans',
        name: 'Clash of Clans',
        image: 'coc.jpg',
        category: 'Strategy',
        popular: false
    }
];

const gameProducts = {
    'mobile-legends': {
        name: 'Mobile Legends',
        currency: 'Diamond',
        needsServerId: true,
        products: [
            { id: '1', amount: '86', price: 20000, popular: true },
            { id: '2', amount: '172', price: 40000 },
            { id: '3', amount: '257', price: 60000 },
            { id: '4', amount: '344', price: 80000 },
            { id: '5', amount: '429', price: 100000, discount: 10 },
            { id: '6', amount: '514', price: 120000 },
            { id: '7', amount: '706', price: 160000, popular: true },
            { id: '8', amount: '878', bonus: '+92', price: 200000, discount: 5 },
            { id: '9', amount: '2195', bonus: '+230', price: 500000, discount: 15 }
        ]
    },
    'free-fire': {
        name: 'Free Fire',
        currency: 'Diamond',
        needsServerId: false,
        products: [
            { id: '1', amount: '50', price: 7000 },
            { id: '2', amount: '100', price: 14000, popular: true },
            { id: '3', amount: '210', price: 28000 },
            { id: '4', amount: '355', price: 47000 },
            { id: '5', amount: '720', price: 95000, discount: 10 },
            { id: '6', amount: '1450', price: 190000, discount: 15 }
        ]
    },
    'pubg-mobile': {
        name: 'PUBG Mobile',
        currency: 'UC',
        needsServerId: false,
        products: [
            { id: '1', amount: '60', price: 15000 },
            { id: '2', amount: '325', price: 75000, popular: true },
            { id: '3', amount: '660', price: 150000 },
            { id: '4', amount: '1800', price: 400000, discount: 10 }
        ]
    },
    'genshin-impact': {
        name: 'Genshin Impact',
        currency: 'Genesis Crystal',
        needsServerId: false,
        products: [
            { id: '1', amount: '60', price: 16000 },
            { id: '2', amount: '330', price: 79000, popular: true },
            { id: '3', amount: '1090', price: 249000 },
            { id: '4', amount: '2240', price: 479000, discount: 5 }
        ]
    },
    'valorant': {
        name: 'Valorant',
        currency: 'VP',
        needsServerId: false,
        products: [
            { id: '1', amount: '475', price: 50000 },
            { id: '2', amount: '1000', price: 100000, popular: true },
            { id: '3', amount: '2050', price: 200000 },
            { id: '4', amount: '3650', price: 350000, discount: 8 }
        ]
    },
    'call-of-duty': {
        name: 'Call of Duty Mobile',
        currency: 'CP',
        needsServerId: false,
        products: [
            { id: '1', amount: '80', price: 15000 },
            { id: '2', amount: '400', price: 70000, popular: true },
            { id: '3', amount: '800', price: 140000 },
            { id: '4', amount: '2000', price: 350000, discount: 10 }
        ]
    },
    'arena-of-valor': {
        name: 'Arena of Valor',
        currency: 'Voucher',
        needsServerId: true,
        products: [
            { id: '1', amount: '60', price: 15000 },
            { id: '2', amount: '300', price: 70000, popular: true },
            { id: '3', amount: '600', price: 140000 },
            { id: '4', amount: '1500', price: 350000, discount: 10 }
        ]
    },
    'clash-of-clans': {
        name: 'Clash of Clans',
        currency: 'Gems',
        needsServerId: false,
        products: [
            { id: '1', amount: '80', price: 15000 },
            { id: '2', amount: '500', price: 75000, popular: true },
            { id: '3', amount: '1200', price: 150000 },
            { id: '4', amount: '2500', price: 300000, discount: 10 }
        ]
    }
};

const paymentMethods = [
    { id: 'gopay', name: 'GoPay', icon: 'fa-mobile-alt', fee: 0 },
    { id: 'ovo', name: 'OVO', icon: 'fa-mobile-alt', fee: 0 },
    { id: 'dana', name: 'DANA', icon: 'fa-mobile-alt', fee: 0 },
    { id: 'bank-transfer', name: 'Transfer Bank', icon: 'fa-university', fee: 0 },
    { id: 'credit-card', name: 'Kartu Kredit', icon: 'fa-credit-card', fee: 2500 }
];

let currentState = {
    currentPage: 'home',
    selectedGame: null,
    selectedProduct: null,
    selectedPayment: null,
    userProfile: {
        name: '',
        email: '',
        phone: '',
        photo: ''
    },
    transactions: [],
    lastTransaction: null
};

function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}

function calculateDiscountedPrice(price, discount) {
    if (!discount) return price;
    return price - (price * discount / 100);
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function loadFromStorage() {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
        currentState.userProfile = JSON.parse(savedProfile);
    }

    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
        currentState.transactions = JSON.parse(savedTransactions);
    }
}

function saveToStorage() {
    localStorage.setItem('userProfile', JSON.stringify(currentState.userProfile));
    localStorage.setItem('transactions', JSON.stringify(currentState.transactions));
}

function navigateTo(page) {
    currentState.currentPage = page;
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    document.getElementById(`${page}Page`).classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`nav${page.charAt(0).toUpperCase() + page.slice(1)}`).classList.add('active');

    if (page === 'account') {
        loadAccountPage();
    } else if (page === 'history') {
        loadHistoryPage();
    } else if (page === 'home') {
        showGameSelection();
    }
}

function showView(viewId) {
    const homePage = document.getElementById('homePage');
    homePage.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(viewId).classList.add('active');
}

function showGameSelection() {
    currentState.selectedGame = null;
    currentState.selectedProduct = null;
    currentState.selectedPayment = null;
    showView('gameSelectionView');
}

function showProductSelection() {
    currentState.selectedProduct = null;
    currentState.selectedPayment = null;
    showView('productSelectionView');
}

function showOrderForm() {
    showView('orderFormView');
    updateOrderSummary();
}

function renderGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = games.map(game => `
        <div class="game-card" onclick="selectGame('${game.id}')">
            <div class="game-card-image">
                <img src="${game.image}" alt="${game.name}">
                <div class="game-card-overlay"></div>
                ${game.popular ? `
                    <div class="game-card-badge">
                        <i class="fas fa-bolt"></i>
                        Populer
                    </div>
                ` : ''}
                <div class="game-card-content">
                    <div class="game-card-title">${game.name}</div>
                    <div class="game-card-category">${game.category}</div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProducts(gameId) {
    const gameData = gameProducts[gameId] || gameProducts['mobile-legends'];
    currentState.selectedGame = gameData;

    document.getElementById('productGameName').textContent = gameData.name;
    document.getElementById('productGameCurrency').textContent = `Pilih jumlah ${gameData.currency}`;

    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = gameData.products.map(product => {
        const finalPrice = calculateDiscountedPrice(product.price, product.discount);
        return `
            <div class="product-card" onclick='selectProduct(${JSON.stringify(product).replace(/'/g, "&apos;")})'>
                ${product.popular ? `
                    <div class="product-badge popular">
                        <i class="fas fa-star"></i>
                        Terlaris
                    </div>
                ` : ''}
                ${product.discount ? `
                    <div class="product-badge discount">
                        <i class="fas fa-trending-up"></i>
                        Hemat ${product.discount}%
                    </div>
                ` : ''}
                <div class="product-amount">
                    <div class="product-amount-value">${product.amount}</div>
                    ${product.bonus ? `<div class="product-amount-bonus">${product.bonus} Bonus</div>` : ''}
                    <div class="product-amount-currency">${gameData.currency}</div>
                </div>
                <div class="product-price-section">
                    ${product.discount ? `
                        <div class="product-price-original">${formatPrice(product.price)}</div>
                    ` : ''}
                    <div class="product-price-final">${formatPrice(finalPrice)}</div>
                    <button class="btn-select">Pilih Paket</button>
                </div>
            </div>
        `;
    }).join('');
}

function renderPaymentMethods() {
    const paymentMethodsDiv = document.getElementById('paymentMethods');
    paymentMethodsDiv.innerHTML = paymentMethods.map(method => `
        <div class="payment-method" onclick="selectPaymentMethod('${method.id}')">
            <div class="payment-method-info">
                <div class="payment-method-radio"></div>
                <i class="fas ${method.icon} payment-method-icon"></i>
                <span>${method.name}</span>
            </div>
            ${method.fee > 0 ? `<span class="payment-method-fee">+${formatPrice(method.fee)}</span>` : ''}
        </div>
    `).join('');
}

function updateOrderSummary() {
    if (!currentState.selectedProduct) return;

    const product = currentState.selectedProduct;
    const gameData = currentState.selectedGame;

    document.getElementById('summaryGame').textContent = gameData.name;
    
    let itemText = `${product.amount} ${gameData.currency}`;
    if (product.bonus) {
        itemText += ` <span style="color: #c084fc;">${product.bonus}</span>`;
    }
    document.getElementById('summaryItem').innerHTML = itemText;

    const finalPrice = calculateDiscountedPrice(product.price, product.discount);
    document.getElementById('summaryPrice').textContent = formatPrice(finalPrice);

    updateTotal();

    const serverIdGroup = document.getElementById('serverIdGroup');
    if (gameData.needsServerId) {
        serverIdGroup.style.display = 'block';
        document.getElementById('serverId').required = true;
    } else {
        serverIdGroup.style.display = 'none';
        document.getElementById('serverId').required = false;
    }
}

function updateTotal() {
    if (!currentState.selectedProduct) return;

    const product = currentState.selectedProduct;
    const finalPrice = calculateDiscountedPrice(product.price, product.discount);
    
    let fee = 0;
    if (currentState.selectedPayment) {
        const payment = paymentMethods.find(p => p.id === currentState.selectedPayment);
        fee = payment ? payment.fee : 0;
    }

    const feeRow = document.getElementById('summaryFeeRow');
    if (fee > 0) {
        feeRow.style.display = 'flex';
        document.getElementById('summaryFee').textContent = formatPrice(fee);
    } else {
        feeRow.style.display = 'none';
    }

    const total = finalPrice + fee;
    document.getElementById('summaryTotal').textContent = formatPrice(total);
}

function loadAccountPage() {
    const profile = currentState.userProfile;
    
    const profilePhoto = document.getElementById('profilePhoto');
    if (profile.photo) {
        profilePhoto.innerHTML = `<img src="${profile.photo}" alt="Profile Photo">`;
    } else {
        profilePhoto.innerHTML = '<i class="fas fa-user"></i>';
    }
    
    document.getElementById('displayName').textContent = profile.name || '-';
    document.getElementById('displayEmail').textContent = profile.email || '-';
    document.getElementById('displayPhone').textContent = profile.phone || '-';
    
    document.getElementById('profileName').value = profile.name;
    document.getElementById('profileEmail').value = profile.email;
    document.getElementById('profilePhone').value = profile.phone;
    
    toggleEditMode(false);
}

function toggleEditMode(isEdit) {
    const viewMode = document.getElementById('profileViewMode');
    const editMode = document.getElementById('profileEditMode');
    
    if (isEdit) {
        viewMode.style.display = 'none';
        editMode.style.display = 'block';
    } else {
        viewMode.style.display = 'block';
        editMode.style.display = 'none';
    }
}

function saveProfile() {
    const name = document.getElementById('profileName').value;
    const email = document.getElementById('profileEmail').value;
    const phone = document.getElementById('profilePhone').value;

    if (!name || !email || !phone) {
        showToast('Mohon lengkapi semua data', 'error');
        return;
    }

    currentState.userProfile.name = name;
    currentState.userProfile.email = email;
    currentState.userProfile.phone = phone;
    
    saveToStorage();
    loadAccountPage();
    showToast('Profil berhasil diperbarui!', 'success');
}

function uploadProfilePhoto(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
        showToast('Mohon pilih file gambar', 'error');
        return;
    }

    if (file.size > 2 * 1024 * 1024) {
        showToast('Ukuran file maksimal 2MB', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        currentState.userProfile.photo = e.target.result;
        saveToStorage();
        loadAccountPage();
        showToast('Foto profil berhasil diperbarui!', 'success');
    };
    reader.readAsDataURL(file);
}

function loadHistoryPage() {
    const transactionsList = document.getElementById('transactionsList');
    const emptyTransactions = document.getElementById('emptyTransactions');

    if (currentState.transactions.length === 0) {
        transactionsList.innerHTML = '';
        emptyTransactions.style.display = 'block';
        return;
    }

    emptyTransactions.style.display = 'none';
    transactionsList.innerHTML = currentState.transactions.map(transaction => {
        const statusLabels = {
            pending: 'Menunggu Pembayaran',
            success: 'Berhasil',
            failed: 'Gagal'
        };

        return `
            <div class="transaction-card">
                <div class="transaction-header">
                    <div>
                        <div class="transaction-game">
                            <i class="fas fa-gamepad"></i>
                            <span>${transaction.gameName}</span>
                        </div>
                        <div class="transaction-item">${transaction.item}</div>
                    </div>
                    <div class="transaction-badge ${transaction.status}">
                        ${statusLabels[transaction.status]}
                    </div>
                </div>
                
                <div class="transaction-details">
                    <div class="transaction-detail">
                        <i class="fas fa-calendar"></i>
                        <span>${formatDate(transaction.date)}</span>
                    </div>
                    <div class="transaction-detail">
                        <i class="fas fa-credit-card"></i>
                        <span>${transaction.paymentMethod}</span>
                    </div>
                </div>
                
                <div class="transaction-info">
                    <div>User ID: ${transaction.userId}</div>
                    ${transaction.serverId ? `<div>Server ID: ${transaction.serverId}</div>` : ''}
                    <div>WhatsApp: ${transaction.whatsapp}</div>
                </div>
                
                <div class="transaction-footer">
                    <div class="transaction-total-label">Total</div>
                    <div class="transaction-total-amount">${formatPrice(transaction.total)}</div>
                    <div class="transaction-id">ID: ${transaction.id}</div>
                </div>
            </div>
        `;
    }).join('');
}

function selectGame(gameId) {
    renderProducts(gameId);
    showView('productSelectionView');
}

function selectProduct(product) {
    currentState.selectedProduct = product;
    renderPaymentMethods();
    showOrderForm();
}

function selectPaymentMethod(methodId) {
    currentState.selectedPayment = methodId;
    
    document.querySelectorAll('.payment-method').forEach(el => {
        el.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    updateTotal();
    validateForm();
}

function validateForm() {
    const userId = document.getElementById('userId').value;
    const serverId = document.getElementById('serverId').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const needsServerId = currentState.selectedGame?.needsServerId;
    
    const isValid = userId && 
                    (!needsServerId || serverId) && 
                    whatsapp && 
                    currentState.selectedPayment;
    
    document.getElementById('submitOrderBtn').disabled = !isValid;
}

function showConfirmationDialog() {
    const userId = document.getElementById('userId').value;
    const serverId = document.getElementById('serverId').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const needsServerId = currentState.selectedGame?.needsServerId;

    if (!userId || (needsServerId && !serverId) || !whatsapp || !currentState.selectedPayment) {
        showToast('Mohon lengkapi semua data yang diperlukan', 'error');
        return;
    }

    const product = currentState.selectedProduct;
    const gameData = currentState.selectedGame;
    const selectedPayment = paymentMethods.find(p => p.id === currentState.selectedPayment);
    const finalPrice = calculateDiscountedPrice(product.price, product.discount);
    const totalPrice = finalPrice + (selectedPayment?.fee || 0);

    const confirmationDetails = document.getElementById('confirmationDetails');
    confirmationDetails.innerHTML = `
        <div class="confirmation-item">
            <div class="confirmation-label">Game</div>
            <div class="confirmation-value">${gameData.name}</div>
        </div>
        <div class="confirmation-item">
            <div class="confirmation-label">Item</div>
            <div class="confirmation-value">
                ${product.amount} ${gameData.currency}
                ${product.bonus ? `<span style="color: #c084fc;">${product.bonus}</span>` : ''}
            </div>
        </div>
        <div class="separator"></div>
        <div class="confirmation-item">
            <div class="confirmation-label">User ID</div>
            <div class="confirmation-value">${userId}</div>
        </div>
        ${needsServerId && serverId ? `
            <div class="confirmation-item">
                <div class="confirmation-label">Server ID</div>
                <div class="confirmation-value">${serverId}</div>
            </div>
        ` : ''}
        <div class="confirmation-item">
            <div class="confirmation-label">WhatsApp</div>
            <div class="confirmation-value">${whatsapp}</div>
        </div>
        <div class="confirmation-item">
            <div class="confirmation-label">Metode Pembayaran</div>
            <div class="confirmation-value">${selectedPayment?.name}</div>
        </div>
        <div class="separator"></div>
        <div class="confirmation-item">
            <div class="confirmation-label">Total Pembayaran</div>
            <div class="confirmation-value confirmation-total">${formatPrice(totalPrice)}</div>
        </div>
    `;

    document.getElementById('confirmationDialog').classList.add('show');
}

function closeConfirmationDialog() {
    document.getElementById('confirmationDialog').classList.remove('show');
}

function confirmOrder() {
    const userId = document.getElementById('userId').value;
    const serverId = document.getElementById('serverId').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const product = currentState.selectedProduct;
    const gameData = currentState.selectedGame;
    const selectedPayment = paymentMethods.find(p => p.id === currentState.selectedPayment);
    const finalPrice = calculateDiscountedPrice(product.price, product.discount);
    const totalPrice = finalPrice + (selectedPayment?.fee || 0);

    closeConfirmationDialog();

    const btn = document.getElementById('submitOrderBtn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';

    const transaction = {
        id: `TRX${Date.now()}`,
        date: new Date().toISOString(),
        gameName: gameData.name,
        item: `${product.amount} ${gameData.currency}${product.bonus ? ` ${product.bonus}` : ''}`,
        userId: userId,
        serverId: gameData.needsServerId ? serverId : undefined,
        whatsapp: whatsapp,
        paymentMethod: selectedPayment?.name || '',
        total: totalPrice,
        status: 'pending'
    };

    setTimeout(() => {
        currentState.transactions.unshift(transaction);
        currentState.lastTransaction = transaction;
        saveToStorage();
        
        document.getElementById('userId').value = '';
        document.getElementById('serverId').value = '';
        document.getElementById('whatsapp').value = '';
        currentState.selectedPayment = null;
        
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-check-circle"></i> Buat Pesanan';
        
        showSuccessDialog();
    }, 2000);
}

function showSuccessDialog() {
    const transaction = currentState.lastTransaction;
    if (!transaction) return;

    const successDetails = document.getElementById('successDetails');
    successDetails.innerHTML = `
        <div class="success-detail-item">
            <div class="success-detail-label">ID Transaksi</div>
            <div class="success-detail-value">${transaction.id}</div>
        </div>
        <div class="success-detail-item">
            <div class="success-detail-label">Game</div>
            <div class="success-detail-value">${transaction.gameName}</div>
        </div>
        <div class="success-detail-item">
            <div class="success-detail-label">Item</div>
            <div class="success-detail-value">${transaction.item}</div>
        </div>
        <div class="success-detail-item">
            <div class="success-detail-label">Metode Pembayaran</div>
            <div class="success-detail-value">${transaction.paymentMethod}</div>
        </div>
        <div class="success-detail-item highlight">
            <div class="success-detail-label">Total Pembayaran</div>
            <div class="success-detail-value">${formatPrice(transaction.total)}</div>
        </div>
    `;

    document.getElementById('successDialog').classList.add('show');
}

function closeSuccessDialog() {
    document.getElementById('successDialog').classList.remove('show');
    showGameSelection();
}

function viewTransactionHistory() {
    closeSuccessDialog();
    navigateTo('history');
}

document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
    renderGames();
    
    const inputs = ['userId', 'serverId', 'whatsapp'];
    inputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', validateForm);
        }
    });

    document.getElementById('confirmationDialog').addEventListener('click', (e) => {
        if (e.target.id === 'confirmationDialog') {
            closeConfirmationDialog();
        }
    });

    document.getElementById('successDialog').addEventListener('click', (e) => {
        if (e.target.id === 'successDialog') {
            closeSuccessDialog();
        }
    });
});
