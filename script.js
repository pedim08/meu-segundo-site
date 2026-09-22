document.addEventListener('DOMContentLoaded', () => {
    let cart = [];

    // Elementos do Carrinho
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCountBadge = document.querySelector('.header-action label[for="cart-toggle"] .header-icon-wrap i') || 
                           document.querySelectorAll('.header-icon-wrap i')[1];
    const cartTotalElement = document.querySelector('.cart-summary .total strong');

    // Elementos da Busca e Produtos
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    const productCards = document.querySelectorAll('.product-card');
    const productGrid = document.querySelector('.product-grid');

    // Criar mensagem de "Nenhum produto encontrado" para a pesquisa
    const noResultsMsg = document.createElement('p');
    noResultsMsg.className = 'no-results-msg';
    noResultsMsg.style.cssText = 'grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 40px 0; font-size: 1rem; display: none;';
    noResultsMsg.innerText = 'Nenhum produto encontrado para a sua busca.';
    if (productGrid) {
        productGrid.appendChild(noResultsMsg);
    }

    /* ==========================================================
       1. FUNCIONALIDADE DA BARRA DE PESQUISA (FILTRO DINÂMICO)
       ========================================================== */
    function filterProducts() {
        if (!searchInput) return;

        // Normaliza o texto buscado (remove acentos e transforma em minúsculas)
        const searchTerm = searchInput.value
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .trim();

        let visibleCount = 0;

        productCards.forEach(card => {
            const titleElement = card.querySelector('h3');
            if (!titleElement) return;

            // Normaliza o título do produto
            const productTitle = titleElement.innerText
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '');

            // Verifica se o título inclui o termo digitado
            if (productTitle.includes(searchTerm)) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Exibe mensagem caso nenhum produto corresponda à busca
        if (visibleCount === 0) {
            noResultsMsg.style.display = 'block';
        } else {
            noResultsMsg.style.display = 'none';
        }
    }

    // Eventos da Pesquisa (digitação em tempo real + clique no botão)
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
    if (searchButton) {
        searchButton.addEventListener('click', (e) => {
            e.preventDefault();
            filterProducts();
            // Rola a página suavemente até a seção de produtos
            const productsSection = document.getElementById('produtos');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    /* ==========================================================
       2. GERENCIAMENTO DO CARRINHO (ADICIONAR / REMOVER)
       ========================================================== */
    const addButtons = document.querySelectorAll('.btn-product');
    
    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productCard = button.closest('.product-card');
            
            if (!productCard) return;

            const title = productCard.querySelector('h3')?.innerText || 'Produto';
            const priceText = productCard.querySelector('.price')?.innerText || '0';
            const price = parseFloat(priceText.replace('R$', '').replace('.', '').replace(',', '.').trim());
            const id = title.toLowerCase().replace(/\s+/g, '-');

            addToCart({ id, title, price });

            const cartToggle = document.getElementById('cart-toggle');
            if (cartToggle) cartToggle.checked = true;
        });
    });

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

            itemElement.querySelector('.btn-remove-item').addEventListener('click', () => {
                removeFromCart(item.id);
            });

            cartItemsContainer.appendChild(itemElement);
        });

        if (cartCountBadge) {
            cartCountBadge.innerText = totalItemsCount;
        }

        updateTotal(total);
    }

    function updateTotal(total) {
        if (cartTotalElement) {
            cartTotalElement.innerText = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        }
    }
});
/* ==========================================================
   SISTEMA DE CADASTRO DE CONTA
   ========================================================== */
const registerForm = document.getElementById('register-form');
const authMessage = document.getElementById('auth-message');

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;

        // Salva os dados no navegador
        const userData = { name, email, password };
        localStorage.setItem('currentUser', JSON.stringify(userData));

        // Exibe mensagem de sucesso
        if (authMessage) {
            authMessage.innerText = `Conta criada com sucesso! Bem-vindo(a), ${name}!`;
            authMessage.style.display = 'block';
        }

        // Reseta o formulário e fecha a gaveta após 2 segundos
        setTimeout(() => {
            registerForm.reset();
            if (authMessage) authMessage.style.display = 'none';
            const authToggle = document.getElementById('auth-toggle');
            if (authToggle) authToggle.checked = false;
        }, 2000);
    });
}
