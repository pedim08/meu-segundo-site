document.addEventListener('DOMContentLoaded', () => {
    // Array global para armazenar os produtos do carrinho
    let cart = [];

    // Elementos do DOM
    const cartItemsContainer = document.querySelector('.cart-items') || createCartItemsContainer();
    const cartCountBadge = document.querySelector('.header-icon-wrap i');
    const cartTotalElement = document.querySelector('.cart-summary .total strong') || document.querySelector('.cart-summary .total');

    // Inicializar evento nos botões "Adicionar ao carrinho"
    initAddToCartButtons();

    function createCartItemsContainer() {
        const container = document.createElement('div');
        container.className = 'cart-items';
        const drawer = document.querySelector('.cart-drawer');
        const head = document.querySelector('.cart-head');
        if (drawer && head) {
            head.after(container);
        }
        return container;
    }

    function initAddToCartButtons() {
        const addButtons = document.querySelectorAll('.btn-product');
        
        addButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const productCard = button.closest('.product-card');
                
                if (!productCard) return;

                // Captura os dados do produto a partir do Card HTML
                const title = productCard.querySelector('h3')?.innerText || 'Produto';
                const priceText = productCard.querySelector('.price')?.innerText || '0';
                const price = parseFloat(priceText.replace('R$', '').replace('.', '').replace(',', '.').trim());
                const id = title.toLowerCase().replace(/\s+/g, '-');

                addToCart({ id, title, price });

                // Abre a gaveta do carrinho automaticamente
                const cartToggle = document.getElementById('cart-toggle');
                if (cartToggle) cartToggle.checked = true;
            });
        });
    }

    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        renderCart();
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        renderCart();
    }

    function updateQuantity(productId, delta) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                removeFromCart(productId);
            } else {
                renderCart();
            }
        }
    }

    function renderCart() {
        if (!cartItemsContainer) return;

        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="cart-empty-msg">Seu carrinho está vazio.</p>';
            if (cartCountBadge) cartCountBadge.innerText = '0';
            updateTotal(0);
            return;
        }

        let total = 0;
        let totalItemsCount = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            totalItemsCount += item.quantity;

            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-header">
                        <b>${item.title}</b>
                        <button class="btn-remove-item" data-id="${item.id}" title="Remover produto">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </button>
                    </div>
                    <small>Qtd: ${item.quantity} x R$ ${item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</small>
                    <strong>R$ ${itemTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>
                </div>
            `;

            // Adiciona evento de clique no ícone da lixeira
            itemElement.querySelector('.btn-remove-item').addEventListener('click', () => {
                removeFromCart(item.id);
            });

            cartItemsContainer.appendChild(itemElement);
        });

        // Atualiza contador do topo
        if (cartCountBadge) cartCountBadge.innerText = totalItemsCount;

        // Atualiza valor total
        updateTotal(total);
    }

    function updateTotal(total) {
        if (cartTotalElement) {
            cartTotalElement.innerText = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        }
    }
});
