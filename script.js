// Base de dados de hardware (mínimo 10 produtos de cada categoria)
const products = [
    // Placas de Vídeo (gpu)
    { id: 1, name: "Placa de Vídeo Galax GeForce RTX 3060 12GB GDDR6", category: "gpu", price: 1999.90, oldPrice: 2299.90, tag: "OFERTA", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Placa de Vídeo ASUS ROG Strix RTX 4070 Ti Super 16GB", category: "gpu", price: 5899.90, oldPrice: 6499.90, tag: "NOVO", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Placa de Vídeo MSI Radeon RX 6600 8GB GDDR6", category: "gpu", price: 1399.90, oldPrice: 1599.90, tag: "POPULAR", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Placa de Vídeo Gigabyte RTX 4060 Gaming OC 8GB", category: "gpu", price: 2199.90, oldPrice: 2499.90, tag: "OFERTA", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80" },
    { id: 5, name: "Placa de Vídeo XFX Radeon RX 7800 XT 16GB GDDR6", category: "gpu", price: 3799.90, oldPrice: 4199.90, tag: "DESTAQUE", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80" },
    { id: 6, name: "Placa de Vídeo Palit GeForce RTX 3050 6GB GDDR6", category: "gpu", price: 1149.90, oldPrice: 1299.90, tag: "OFERTA", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80" },
    { id: 7, name: "Placa de Vídeo Zotac RTX 4080 Super Trinity 16GB", category: "gpu", price: 7499.90, oldPrice: 8299.90, tag: "HIGH END", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80" },
    { id: 8, name: "Placa de Vídeo Sapphire Radeon RX 7600 8GB", category: "gpu", price: 1749.90, oldPrice: 1999.90, tag: "OFERTA", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80" },
    { id: 9, name: "Placa de Vídeo Gainward RTX 4090 Phantom 24GB", category: "gpu", price: 13999.90, oldPrice: 15499.90, tag: "ULTRA", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80" },
    { id: 10, name: "Placa de Vídeo PowerColor RX 6750 XT 12GB", category: "gpu", price: 2499.90, oldPrice: 2899.90, tag: "OFERTA", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80" },

    // Processadores (cpu)
    { id: 11, name: "Processador AMD Ryzen 5 5600 3.5GHz (4.4GHz Turbo)", category: "cpu", price: 799.90, oldPrice: 999.90, tag: "BEST SELLER", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80" },
    { id: 12, name: "Processador Intel Core i5-12400F 2.5GHz (4.4GHz Turbo)", category: "cpu", price: 849.90, oldPrice: 1049.90, tag: "OFERTA", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80" },
    { id: 13, name: "Processador AMD Ryzen 7 5700X3D 3.0GHz (4.1GHz Turbo)", category: "cpu", price: 1399.90, oldPrice: 1699.90, tag: "GAMING", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80" },
    { id: 14, name: "Processador Intel Core i7-13700KF 3.4GHz (5.4GHz Turbo)", category: "cpu", price: 2399.90, oldPrice: 2799.90, tag: "NOVO", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80" },
    { id: 15, name: "Processador AMD Ryzen 7 7800X3D 4.2GHz (5.0GHz Turbo)", category: "cpu", price: 2899.90, oldPrice: 3299.90, tag: "TOP GAMER", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80" },
    { id: 16, name: "Processador Intel Core i3-12100F 3.3GHz (4.3GHz Turbo)", category: "cpu", price: 549.90, oldPrice: 699.90, tag: "ENTRADA", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80" },
    { id: 17, name: "Processador AMD Ryzen 5 8600G 4.3GHz (5.0GHz Turbo)", category: "cpu", price: 1299.90, oldPrice: 1499.90, tag: "COM VEGA", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80" },
    { id: 18, name: "Processador Intel Core i9-14900K 3.2GHz (6.0GHz Turbo)", category: "cpu", price: 3999.90, oldPrice: 4499.90, tag: "ULTRA", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80" },
    { id: 19, name: "Processador AMD Ryzen 9 7950X3D 4.2GHz (5.7GHz)", category: "cpu", price: 4299.90, oldPrice: 4899.90, tag: "WORKSTATION", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80" },
    { id: 20, name: "Processador Intel Core i5-14600KF 3.5GHz (5.3GHz)", category: "cpu", price: 1899.90, oldPrice: 2199.90, tag: "OFERTA", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80" },

    // Memórias RAM (ram)
    { id: 21, name: "Memória Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz", category: "ram", price: 299.90, oldPrice: 389.90, tag: "OFERTA", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80" },
    { id: 22, name: "Memória Kingston Fury Beast 16GB DDR4 3200MHz RGB", category: "ram", price: 239.90, oldPrice: 289.90, tag: "RGB", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80" },
    { id: 23, name: "Memória XPG Spectrix D35G 32GB (2x16GB) DDR4 3200MHz", category: "ram", price: 549.90, oldPrice: 649.90, tag: "KIT 32GB", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80" },
    { id: 24, name: "Memória Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz", category: "ram", price: 899.90, oldPrice: 1099.90, tag: "DDR5", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80" },
    { id: 25, name: "Memória Kingston Fury Renegade 16GB DDR5 6400MHz", category: "ram", price: 499.90, oldPrice: 599.90, tag: "DDR5", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80" },
    { id: 26, name: "Memória GeIL Super Luce RGB 8GB DDR4 3000MHz", category: "ram", price: 129.90, oldPrice: 169.90, tag: "ENTRADA", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80" },
    { id: 27, name: "Memória Team Group T-Force Delta RGB 32GB DDR5 5600MHz", category: "ram", price: 799.90, oldPrice: 929.90, tag: "DDR5", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80" },
    { id: 28, name: "Memória Asgard Valkyrie V2 32GB (2x16GB) DDR4 3600MHz", category: "ram", price: 599.90, oldPrice: 699.90, tag: "PREMIUM", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80" },
    { id: 29, name: "Memória Lexar Thor 16GB (2x8GB) DDR4 3200MHz", category: "ram", price: 269.90, oldPrice: 319.90, tag: "OFERTA", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80" },
    { id: 30, name: "Memória G.Skill Trident Z5 RGB 64GB (2x32GB) DDR5 6000MHz", category: "ram", price: 1899.90, oldPrice: 2199.90, tag: "ULTRA 64GB", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80" },

    // Armazenamento (storage)
    { id: 31, name: "SSD Kingston NV2 1TB NVMe M.2 2280 (Leitura 3500MB/s)", category: "storage", price: 449.90, oldPrice: 529.90, tag: "OFERTA", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80" },
    { id: 32, name: "SSD Samsung 990 Pro 2TB NVMe M.2 (Leitura 7450MB/s)", category: "storage", price: 1299.90, oldPrice: 1499.90, tag: "TOP PERFORMANCE", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80" },
    { id: 33, name: "SSD WD Black SN850X 1TB NVMe M.2 (Leitura 7300MB/s)", category: "storage", price: 749.90, oldPrice: 899.90, tag: "GAMING", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80" },
    { id: 34, name: "SSD Lexar NM620 512GB NVMe M.2 2280", category: "storage", price: 249.90, oldPrice: 299.90, tag: "CUSTO BENEFÍCIO", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80" },
    { id: 35, name: "SSD Crucial P3 Plus 2TB NVMe PCIe 4.0 M.2", category: "storage", price: 899.90, oldPrice: 1049.90, tag: "OFERTA", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80" },
    { id: 36, name: "SSD ADATA XPG S70 Blade 1TB NVMe M.2", category: "storage", price: 599.90, oldPrice: 699.90, tag: "PS5 COMPATÍVEL", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80" },
    { id: 37, name: "SSD SanDisk Plus 480GB Sata III 2.5", category: "storage", price: 199.90, oldPrice: 249.90, tag: "SATA", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80" },
    { id: 38, name: "HD Seagate BarraCuda 2TB 3.5 Sata III 7200RPM", category: "storage", price: 389.90, oldPrice: 449.90, tag: "HD SEAGATE", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80" },
    { id: 39, name: "SSD Kingston XS2000 1TB Portátil USB 3.2", category: "storage", price: 849.90, oldPrice: 999.90, tag: "EXTERNO", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80" },
    { id: 40, name: "SSD Corsair MP600 PRO LPX 4TB NVMe M.2", category: "storage", price: 2799.90, oldPrice: 3199.90, tag: "ULTRA 4TB", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80" },

    // Placas Mãe (mobo)
    { id: 41, name: "Placa Mãe ASUS TUF Gaming B450M-Plus II AMD AM4", category: "mobo", price: 699.90, oldPrice: 829.90, tag: "OFERTA", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" },
    { id: 42, name: "Placa Mãe MSI B550M Pro-VDH WiFi AMD AM4", category: "mobo", price: 749.90, oldPrice: 899.90, tag: "WIFI INCLUSO", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" },
    { id: 43, name: "Placa Mãe Gigabyte B760M AORUS Elite Intel LGA 1700 DDR5", category: "mobo", price: 1199.90, oldPrice: 1399.90, tag: "DDR5", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" },
    { id: 44, name: "Placa Mãe ASRock B650M HDV/M.2 AMD AM5 DDR5", category: "mobo", price: 899.90, oldPrice: 1049.90, tag: "AM5 DDR5", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" },
    { id: 45, name: "Placa Mãe ASUS ROG Strix Z790-E Gaming WiFi Intel", category: "mobo", price: 3499.90, oldPrice: 3899.90, tag: "PREMIUM", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" },
    { id: 46, name: "Placa Mãe Gigabyte A520M K V2 AMD AM4", category: "mobo", price: 389.90, oldPrice: 459.90, tag: "ENTRADA", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" },
    { id: 47, name: "Placa Mãe Biostar H610M-E Intel LGA 1700", category: "mobo", price: 429.90, oldPrice: 499.90, tag: "ENTRADA", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" },
    { id: 48, name: "Placa Mãe MSI MAG B650 Tomahawk WiFi AM5", category: "mobo", price: 1699.90, oldPrice: 1899.90, tag: "AM5 TOP", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" },
    { id: 49, name: "Placa Mãe ASRock Z690 Steel Legend Intel DDR4", category: "mobo", price: 1399.90, oldPrice: 1599.90, tag: "OFERTA", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" },
    { id: 50, name: "Placa Mãe ASUS Prime X670E-Pro WiFi AMD AM5", category: "mobo", price: 2499.90, oldPrice: 2799.90, tag: "X670E", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" }
];

// Estado da Aplicação
let cart = [];
let currentCategory = 'all';
let isRegisterMode = false;
let userLoggedIn = null;

// Inicialização DOM
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupSearch();
});

// Renderizar lista de produtos
function renderProducts(items) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    if(items.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-gray);">
            <i class="fa-solid fa-box-open" style="font-size: 48px; margin-bottom: 12px;"></i>
            <p>Nenhum produto encontrado.</p>
        </div>`;
        return;
    }

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <span class="product-tag">${product.tag}</span>
            <button class="fav-btn" onclick="toggleFavorite(this)"><i class="fa-regular fa-heart"></i></button>
            <img class="product-img" src="${product.image}" alt="${product.name}">
            <h3 class="product-title">${product.name}</h3>
            <span class="old-price">R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</span>
            <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <i class="fa-solid fa-cart-shopping"></i> Adicionar ao carrinho
            </button>
        `;
        grid.appendChild(card);
    });
}

// Filtro por Categoria
function filterByCategory(category, element = null) {
    currentCategory = category;

    // Ajustar classe ativa nos botões
    if(element) {
        document.querySelectorAll('.cat-card').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    }

    if(category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// Filtro por Busca Dinâmica
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(query);
            const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
            return matchesSearch && matchesCategory;
        });
        renderProducts(filtered);
    });
}

// Gestão do Carrinho de Compras
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    openCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if(item) {
        item.quantity += change;
        if(item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartCount = document.getElementById('cartCount');
    const cartTotalValue = document.getElementById('cartTotalValue');

    cartItemsContainer.innerHTML = '';
    
    let total = 0;
    let itemCount = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<div style="text-align: center; color: var(--text-gray); margin-top: 40px;">
            <i class="fa-solid fa-cart-flatbed" style="font-size: 40px; margin-bottom: 10px;"></i>
            <p>Seu carrinho está vazio</p>
        </div>`;
    } else {
        cart.forEach(item => {
            total += item.price * item.quantity;
            itemCount += item.quantity;

            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <i class="fa-solid fa-trash cart-item-remove" onclick="removeFromCart(${item.id})"></i>
            `;
            cartItemsContainer.appendChild(itemEl);
        });
    }

    cartCount.textContent = itemCount;
    cartTotalValue.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Abrir e Fechar Carrinho Lateral
function toggleCart() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
}

function openCart() {
    document.getElementById('cartDrawer').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
}

function checkout() {
    if(cart.length === 0) {
        alert("Adicione pelo menos um produto ao carrinho para finalizar a compra.");
        return;
    }
    alert("Obrigado por testar o protótipo NobreTech! Pedido finalizado com sucesso.");
    cart = [];
    updateCartUI();
    toggleCart();
}

// Favoritos (Visual)
function toggleFavorite(btn) {
    const icon = btn.querySelector('i');
    if(icon.classList.contains('fa-regular')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        icon.style.color = '#FF6600';
    } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        icon.style.color = 'var(--text-gray)';
    }
}

// Modal de Autenticação (Login / Cadastro)
function openAuthModal() {
    document.getElementById('authModal').classList.add('active');
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('active');
}

function toggleAuthMode() {
    isRegisterMode = !isRegisterMode;
    const title = document.getElementById('modalTitle');
    const submitBtn = document.getElementById('authSubmitBtn');
    const toggleText = document.getElementById('toggleText');
    const toggleBtn = document.getElementById('toggleBtn');

    if (isRegisterMode) {
        title.textContent = 'Criar uma Conta';
        submitBtn.textContent = 'Cadastrar';
        toggleText.textContent = 'Já possui conta?';
        toggleBtn.textContent = 'Entrar';
    } else {
        title.textContent = 'Acessar Conta';
        submitBtn.textContent = 'Entrar';
        toggleText.textContent = 'Não tem uma conta?';
        toggleBtn.textContent = 'Cadastrar-se';
    }
}

function handleAuth(event) {
    event.preventDefault();
    const email = document.getElementById('authEmail').value;
    
    userLoggedIn = email.split('@')[0];
    document.getElementById('userName').textContent = `Olá, ${userLoggedIn}`;
    document.getElementById('userSub').textContent = 'Minha Conta';
    
    closeAuthModal();
    alert(isRegisterMode ? "Conta criada e logada com sucesso!" : "Login realizado com sucesso!");
}
