/* =========================================================
   NOBRETECH
   JAVASCRIPT
========================================================= */


/* =========================================================
   PRODUTOS
========================================================= */

const products = [

    /* =====================================================
       PCS
    ====================================================== */

    {
        id: 1,
        category: "pc",
        categoryName: "PC Gamer",
        name: "PC Gamer NobreTech Ryzen 5 RTX",
        price: 4299.90,
        oldPrice: 4799.90,
        offer: true
    },

    {
        id: 2,
        category: "pc",
        categoryName: "PC Gamer",
        name: "PC Gamer Ryzen 5 5600 RTX 4060",
        price: 5299.90,
        oldPrice: 5799.90,
        offer: false
    },

    {
        id: 3,
        category: "pc",
        categoryName: "PC Gamer",
        name: "PC Gamer Ryzen 7 RTX 4060",
        price: 6199.90,
        oldPrice: 6799.90,
        offer: true
    },

    {
        id: 4,
        category: "pc",
        categoryName: "PC Gamer",
        name: "PC Gamer Ryzen 7 RTX 4070",
        price: 7999.90,
        oldPrice: 8499.90,
        offer: false
    },

    {
        id: 5,
        category: "pc",
        categoryName: "PC Gamer",
        name: "PC Gamer Core i5 RTX 4060",
        price: 5499.90,
        oldPrice: 5999.90,
        offer: false
    },

    {
        id: 6,
        category: "pc",
        categoryName: "PC Gamer",
        name: "PC Gamer Core i7 RTX 4070",
        price: 8299.90,
        oldPrice: 8999.90,
        offer: true
    },

    {
        id: 7,
        category: "pc",
        categoryName: "Notebook",
        name: "Notebook Gamer NobreTech 15",
        price: 4299.90,
        oldPrice: 4699.90,
        offer: false
    },

    {
        id: 8,
        category: "pc",
        categoryName: "Notebook",
        name: "Notebook Gamer NobreTech 16",
        price: 5199.90,
        oldPrice: 5599.90,
        offer: true
    },

    {
        id: 9,
        category: "pc",
        categoryName: "PC Gamer",
        name: "PC Gamer Ryzen 5 RX 7600",
        price: 4999.90,
        oldPrice: 5399.90,
        offer: false
    },

    {
        id: 10,
        category: "pc",
        categoryName: "PC Gamer",
        name: "PC Gamer Ryzen 7 RX 7800 XT",
        price: 7999.90,
        oldPrice: 8599.90,
        offer: false
    },


    /* =====================================================
       PLACAS DE VIDEO
    ====================================================== */
    {
    id: 11,
    category: "gpu",
    categoryName: "Placa de Vídeo",
    name: "GeForce RTX 3060 12GB GDDR6",
    price: 1999.90,
    oldPrice: 2299.90,
    offer: true,
    image : "https://images.unsplash.com/photo-1727895949000-da3c10a7d562?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

       {
        id: 12,
        category: "gpu",
        categoryName: "Placa de Vídeo",
        name: "GeForce RTX 4060 8GB GDDR6",
        price: 2199.90,
        oldPrice: 2499.90,
        offer: false
    },

   
       {
        id: 13,
        category: "gpu",
        categoryName: "Placa de Vídeo",
        name: "GeForce RTX 4060 Ti 8GB",
        price: 2799.90,
        oldPrice: 3099.90,
        offer: true
    },

       {
        id: 14,
        category: "gpu",
        categoryName: "Placa de Vídeo",
        name: "GeForce RTX 4070 12GB",
        price: 4199.90,
        oldPrice: 4599.90,
        offer: false
    },

    {
        id: 15,
        category: "gpu",
        categoryName: "Placa de Vídeo",
        name: "GeForce RTX 4070 Super 12GB",
        price: 4599.90,
        oldPrice: 4999.90,
        offer: false
    },

    {
        id: 16,
        category: "gpu",
        categoryName: "Placa de Vídeo",
        name: "GeForce RTX 4080 Super 16GB",
        price: 7899.90,
        oldPrice: 8299.90,
        offer: true
    },

    {
        id: 17,
        category: "gpu",
        categoryName: "Placa de Vídeo",
        name: "Radeon RX 7600 8GB",
        price: 1899.90,
        oldPrice: 2099.90,
        offer: false
    },

    {
        id: 18,
        category: "gpu",
        categoryName: "Placa de Vídeo",
        name: "Radeon RX 7700 XT 12GB",
        price: 3299.90,
        oldPrice: 3599.90,
        offer: false
    },

    {
        id: 19,
        category: "gpu",
        categoryName: "Placa de Vídeo",
        name: "Radeon RX 7800 XT 16GB",
        price: 3899.90,
        oldPrice: 4199.90,
        offer: true
    },

    {
        id: 20,
        category: "gpu",
        categoryName: "Placa de Vídeo",
        name: "Radeon RX 7900 XT 20GB",
        price: 5999.90,
        oldPrice: 6499.90,
        offer: false
    },


    /* =====================================================
       PROCESSADORES
    ====================================================== */

    {
        id: 21,
        category: "cpu",
        categoryName: "Processador",
        name: "AMD Ryzen 5 5500",
        price: 549.90,
        oldPrice: 629.90,
        offer: true
    },

    {
        id: 22,
        category: "cpu",
        categoryName: "Processador",
        name: "AMD Ryzen 5 5600",
        price: 799.90,
        oldPrice: 899.90,
        offer: true
    },

    {
        id: 23,
        category: "cpu",
        categoryName: "Processador",
        name: "AMD Ryzen 5 5600X",
        price: 899.90,
        oldPrice: 999.90,
        offer: false
    },

    {
        id: 24,
        category: "cpu",
        categoryName: "Processador",
        name: "AMD Ryzen 7 5700X",
        price: 1199.90,
        oldPrice: 1299.90,
        offer: false
    },

    {
        id: 25,
        category: "cpu",
        categoryName: "Processador",
        name: "AMD Ryzen 7 5800X",
        price: 1399.90,
        oldPrice: 1499.90,
        offer: true
    },

    {
        id: 26,
        category: "cpu",
        categoryName: "Processador",
        name: "AMD Ryzen 7 7800X3D",
        price: 2499.90,
        oldPrice: 2799.90,
        offer: false
    },

    {
        id: 27,
        category: "cpu",
        categoryName: "Processador",
        name: "AMD Ryzen 9 7900X",
        price: 2799.90,
        oldPrice: 3099.90,
        offer: false
    },

    {
        id: 28,
        category: "cpu",
        categoryName: "Processador",
        name: "Intel Core i5 12400F",
        price: 799.90,
        oldPrice: 899.90,
        offer: true
    },

    {
        id: 29,
        category: "cpu",
        categoryName: "Processador",
        name: "Intel Core i5 13400F",
        price: 1199.90,
        oldPrice: 1299.90,
        offer: false
    },

    {
        id: 30,
        category: "cpu",
        categoryName: "Processador",
        name: "Intel Core i7 14700K",
        price: 2399.90,
        oldPrice: 2599.90,
        offer: false
    },


    /* =====================================================
       MEMÓRIAS RAM
    ====================================================== */

    {
        id: 31,
        category: "ram",
        categoryName: "Memória RAM",
        name: "Corsair Vengeance 16GB DDR4 3200MHz",
        price: 299.90,
        oldPrice: 349.90,
        offer: true
    },

    {
        id: 32,
        category: "ram",
        categoryName: "Memória RAM",
        name: "Corsair Vengeance 32GB DDR4 3200MHz",
        price: 499.90,
        oldPrice: 559.90,
        offer: false
    },

    {
        id: 33,
        category: "ram",
        categoryName: "Memória RAM",
        name: "Kingston Fury 16GB DDR4 3200MHz",
        price: 279.90,
        oldPrice: 319.90,
        offer: true
    },

    {
        id: 34,
        category: "ram",
        categoryName: "Memória RAM",
        name: "Kingston Fury 32GB DDR4",
        price: 469.90,
        oldPrice: 519.90,
        offer: false
    },

    {
        id: 35,
        category: "ram",
        categoryName: "Memória RAM",
        name: "Kingston Fury 16GB DDR5 5200MHz",
        price: 399.90,
        oldPrice: 449.90,
        offer: false
    },

    {
        id: 36,
        category: "ram",
        categoryName: "Memória RAM",
        name: "Corsair Vengeance 32GB DDR5",
        price: 699.90,
        oldPrice: 779.90,
        offer: true
    },

    {
        id: 37,
        category: "ram",
        categoryName: "Memória RAM",
        name: "XPG Spectrix 16GB RGB DDR4",
        price: 349.90,
        oldPrice: 399.90,
        offer: false
    },

    {
        id: 38,
        category: "ram",
        categoryName: "Memória RAM",
        name: "XPG Lancer 32GB DDR5",
        price: 699.90,
        oldPrice: 749.90,
        offer: false
    },

    {
        id: 39,
        category: "ram",
        categoryName: "Memória RAM",
        name: "TeamGroup T-Force 16GB",
        price: 299.90,
        oldPrice: 349.90,
        offer: true
    },

    {
        id: 40,
        category: "ram",
        categoryName: "Memória RAM",
        name: "TeamGroup 32GB DDR5",
        price: 649.90,
        oldPrice: 719.90,
        offer: false
    },


    /* =====================================================
       ARMAZENAMENTO
    ====================================================== */

    {
        id: 41,
        category: "storage",
        categoryName: "SSD NVMe",
        name: "Kingston NV2 1TB NVMe M.2",
        price: 449.90,
        oldPrice: 499.90,
        offer: true
    },

    {
        id: 42,
        category: "storage",
        categoryName: "SSD NVMe",
        name: "Kingston NV2 500GB NVMe",
        price: 279.90,
        oldPrice: 319.90,
        offer: false
    },

    {
        id: 43,
        category: "storage",
        categoryName: "SSD NVMe",
        name: "WD Blue SN580 1TB",
        price: 499.90,
        oldPrice: 559.90,
        offer: false
    },

    {
        id: 44,
        category: "storage",
        categoryName: "SSD NVMe",
        name: "WD Black SN770 1TB",
        price: 599.90,
        oldPrice: 679.90,
        offer: true
    },

    {
        id: 45,
        category: "storage",
        categoryName: "SSD SATA",
        name: "Kingston A400 480GB",
        price: 239.90,
        oldPrice: 279.90,
        offer: false
    },

    {
        id: 46,
        category: "storage",
        categoryName: "SSD SATA",
        name: "Kingston A400 960GB",
        price: 399.90,
        oldPrice: 449.90,
        offer: false
    },

    {
        id: 47,
        category: "storage",
        categoryName: "SSD NVMe",
        name: "Samsung 980 1TB NVMe",
        price: 649.90,
        oldPrice: 719.90,
        offer: true
    },

    {
        id: 48,
        category: "storage",
        categoryName: "SSD NVMe",
        name: "Samsung 990 Pro 1TB",
        price: 799.90,
        oldPrice: 899.90,
        offer: false
    },

    {
        id: 49,
        category: "storage",
        categoryName: "HD",
        name: "WD Blue 1TB 7200RPM",
        price: 329.90,
        oldPrice: 369.90,
        offer: false
    },

    {
        id: 50,
        category: "storage",
        categoryName: "HD",
        name: "Seagate Barracuda 2TB",
        price: 449.90,
        oldPrice: 499.90,
        offer: true
    },


    /* =====================================================
       PLACAS-MÃE
    ====================================================== */

    {
        id: 51,
        category: "motherboard",
        categoryName: "Placa-Mãe",
        name: "ASUS TUF Gaming B450M-Plus II",
        price: 699.90,
        oldPrice: 799.90,
        offer: true
    },

    {
        id: 52,
        category: "motherboard",
        categoryName: "Placa-Mãe",
        name: "MSI B550M Pro-VDH",
        price: 749.90,
        oldPrice: 829.90,
        offer: false
    },

    {
        id: 53,
        category: "motherboard",
        categoryName: "Placa-Mãe",
        name: "Gigabyte B550M DS3H",
        price: 699.90,
        oldPrice: 779.90,
        offer: false
    },

    {
        id: 54,
        category: "motherboard",
        categoryName: "Placa-Mãe",
        name: "ASUS Prime B550M-A",
        price: 799.90,
        oldPrice: 899.90,
        offer: true
    },

    {
        id: 55,
        category: "motherboard",
        categoryName: "Placa-Mãe",
        name: "MSI B650M Gaming Plus",
        price: 1199.90,
        oldPrice: 1299.90,
        offer: false
    },

    {
        id: 56,
        category: "motherboard",
        categoryName: "Placa-Mãe",
        name: "Gigabyte B650M Aorus Elite",
        price: 1399.90,
        oldPrice: 1499.90,
        offer: false
    },

    {
        id: 57,
        category: "motherboard",
        categoryName: "Placa-Mãe",
        name: "ASRock B550M Steel Legend",
        price: 899.90,
        oldPrice: 999.90,
        offer: true
    },

    {
        id: 58,
        category: "motherboard",
        categoryName: "Placa-Mãe",
        name: "ASUS TUF Gaming B650-Plus",
        price: 1499.90,
        oldPrice: 1599.90,
        offer: false
    },

    {
        id: 59,
        category: "motherboard",
        categoryName: "Placa-Mãe",
        name: "MSI MAG B760M Mortar",
        price: 1199.90,
        oldPrice: 1299.90,
        offer: false
    },

    {
        id: 60,
        category: "motherboard",
        categoryName: "Placa-Mãe",
        name: "Gigabyte Z790 Gaming X",
        price: 1799.90,
        oldPrice: 1999.90,
        offer: true
    },


    /* =====================================================
       FONTES
    ====================================================== */

    {
        id: 61,
        category: "psu",
        categoryName: "Fonte",
        name: "Corsair CV550 550W",
        price: 329.90,
        oldPrice: 369.90,
        offer: true
    },

    {
        id: 62,
        category: "psu",
        categoryName: "Fonte",
        name: "Corsair CX650 650W",
        price: 449.90,
        oldPrice: 499.90,
        offer: false
    },

    {
        id: 63,
        category: "psu",
        categoryName: "Fonte",
        name: "MSI MAG A650BN 650W",
        price: 359.90,
        oldPrice: 399.90,
        offer: false
    },

    {
        id: 64,
        category: "psu",
        categoryName: "Fonte",
        name: "MSI MAG A750GL 750W",
        price: 599.90,
        oldPrice: 679.90,
        offer: true
    },

    {
        id: 65,
        category: "psu",
        categoryName: "Fonte",
        name: "XPG Pylon 650W",
        price: 429.90,
        oldPrice: 479.90,
        offer: false
    },

    {
        id: 66,
        category: "psu",
        categoryName: "Fonte",
        name: "Cooler Master MWE 650",
        price: 399.90,
        oldPrice: 449.90,
        offer: false
    },

    {
        id: 67,
        category: "psu",
        categoryName: "Fonte",
        name: "Corsair RM750e 750W",
        price: 749.90,
        oldPrice: 829.90,
        offer: true
    },

    {
        id: 68,
        category: "psu",
        categoryName: "Fonte",
        name: "Corsair RM850e 850W",
        price: 899.90,
        oldPrice: 999.90,
        offer: false
    },

    {
        id: 69,
        category: "psu",
        categoryName: "Fonte",
        name: "XPG Core Reactor 850W",
        price: 799.90,
        oldPrice: 899.90,
        offer: false
    },

    {
        id: 70,
        category: "psu",
        categoryName: "Fonte",
        name: "Super Flower 1000W",
        price: 1099.90,
        oldPrice: 1199.90,
        offer: true
    },


    /* =====================================================
       GABINETES
    ====================================================== */

    {
        id: 71,
        category: "case",
        categoryName: "Gabinete",
        name: "Gabinete Gamer NobreTech Air",
        price: 299.90,
        oldPrice: 349.90,
        offer: true
    },

    {
        id: 72,
        category: "case",
        categoryName: "Gabinete",
        name: "Montech Air 100",
        price: 399.90,
        oldPrice: 449.90,
        offer: false
    },

    {
        id: 73,
        category: "case",
        categoryName: "Gabinete",
        name: "Montech Air 903",
        price: 499.90,
        oldPrice: 549.90,
        offer: false
    },

    {
        id: 74,
        category: "case",
        categoryName: "Gabinete",
        name: "NZXT H5 Flow",
        price: 699.90,
        oldPrice: 779.90,
        offer: true
    },

    {
        id: 75,
        category: "case",
        categoryName: "Gabinete",
        name: "Corsair 4000D Airflow",
        price: 799.90,
        oldPrice: 899.90,
        offer: false
    },

    {
        id: 76,
        category: "case",
        categoryName: "Gabinete",
        name: "Lian Li Lancool 216",
        price: 899.90,
        oldPrice: 999.90,
        offer: false
    },

    {
        id: 77,
        category: "case",
        categoryName: "Gabinete",
        name: "Cooler Master TD500",
        price: 599.90,
        oldPrice: 699.90,
        offer: true
    },

    {
        id: 78,
        category: "case",
        categoryName: "Gabinete",
        name: "DeepCool CH560",
        price: 649.90,
        oldPrice: 729.90,
        offer: false
    },

    {
        id: 79,
        category: "case",
        categoryName: "Gabinete",
        name: "Redragon Wideload",
        price: 349.90,
        oldPrice: 399.90,
        offer: false
    },

    {
        id: 80,
        category: "case",
        categoryName: "Gabinete",
        name: "Rise Mode Galaxy",
        price: 299.90,
        oldPrice: 349.90,
        offer: true
    },


    /* =====================================================
       PERIFÉRICOS
    ====================================================== */

    {
        id: 81,
        category: "peripherals",
        categoryName: "Teclado",
        name: "Teclado Mecânico RGB NobreTech",
        price: 199.90,
        oldPrice: 249.90,
        offer: true
    },

    {
        id: 82,
        category: "peripherals",
        categoryName: "Mouse",
        name: "Mouse Gamer RGB 12000 DPI",
        price: 149.90,
        oldPrice: 179.90,
        offer: false
    },

    {
        id: 83,
        category: "peripherals",
        categoryName: "Headset",
        name: "Headset Gamer 7.1 RGB",
        price: 229.90,
        oldPrice: 279.90,
        offer: true
    },

    {
        id: 84,
        category: "peripherals",
        categoryName: "Mouse",
        name: "Logitech G502 HERO",
        price: 299.90,
        oldPrice: 349.90,
        offer: false
    },

    {
        id: 85,
        category: "peripherals",
        categoryName: "Teclado",
        name: "HyperX Alloy Origins",
        price: 399.90,
        oldPrice: 449.90,
        offer: false
    },

    {
        id: 86,
        category: "peripherals",
        categoryName: "Headset",
        name: "HyperX Cloud III",
        price: 599.90,
        oldPrice: 679.90,
        offer: true
    },

    {
        id: 87,
        category: "peripherals",
        categoryName: "Webcam",
        name: "Webcam Full HD 1080p",
        price: 249.90,
        oldPrice: 299.90,
        offer: false
    },

    {
        id: 88,
        category: "peripherals",
        categoryName: "Mousepad",
        name: "Mousepad Gamer XXL RGB",
        price: 129.90,
        oldPrice: 159.90,
        offer: true
    },

    {
        id: 89,
        category: "peripherals",
        categoryName: "Microfone",
        name: "Microfone USB Gamer",
        price: 299.90,
        oldPrice: 349.90,
        offer: false
    },

    {
        id: 90,
        category: "peripherals",
        categoryName: "Controle",
        name: "Controle Gamer USB",
        price: 179.90,
        oldPrice: 219.90,
        offer: false
    },


    /* =====================================================
       MONITORES
    ====================================================== */

    {
        id: 91,
        category: "monitor",
        categoryName: "Monitor",
        name: "Monitor Gamer 21.5 100Hz",
        price: 599.90,
        oldPrice: 699.90,
        offer: true
    },

    {
        id: 92,
        category: "monitor",
        categoryName: "Monitor",
        name: "Monitor Gamer 24 144Hz",
        price: 799.90,
        oldPrice: 899.90,
        offer: false
    },

    {
        id: 93,
        category: "monitor",
        categoryName: "Monitor",
        name: "Monitor Gamer 24 165Hz",
        price: 899.90,
        oldPrice: 999.90,
        offer: true
    },

    {
        id: 94,
        category: "monitor",
        categoryName: "Monitor",
        name: "Monitor Gamer 27 144Hz",
        price: 1099.90,
        oldPrice: 1199.90,
        offer: false
    },

    {
        id: 95,
        category: "monitor",
        categoryName: "Monitor",
        name: "Monitor Gamer 27 165Hz IPS",
        price: 1299.90,
        oldPrice: 1399.90,
        offer: false
    },

    {
        id: 96,
        category: "monitor",
        categoryName: "Monitor",
        name: "Monitor Gamer 27 240Hz",
        price: 1899.90,
        oldPrice: 2099.90,
        offer: true
    },

    {
        id: 97,
        category: "monitor",
        categoryName: "Monitor",
        name: "Monitor Ultrawide 29",
        price: 1499.90,
        oldPrice: 1699.90,
        offer: false
    },

    {
        id: 98,
        category: "monitor",
        categoryName: "Monitor",
        name: "Monitor 32 4K",
        price: 2199.90,
        oldPrice: 2399.90,
        offer: false
    },

    {
        id: 99,
        category: "monitor",
        categoryName: "Monitor",
        name: "Monitor Curvo 34 Ultrawide",
        price: 2499.90,
        oldPrice: 2799.90,
        offer: true
    },

    {
        id: 100,
        category: "monitor",
        categoryName: "Monitor",
        name: "Monitor Gamer 32 165Hz",
        price: 1799.90,
        oldPrice: 1999.90,
        offer: false
    }

];


/* =========================================================
   ESTADO
========================================================= */

let cart = JSON.parse(
    localStorage.getItem("nobretech_cart")
) || [];

let favorites = JSON.parse(
    localStorage.getItem("nobretech_favorites")
) || [];

let currentCategory = "all";

let currentSearch = "";


/* =========================================================
   ELEMENTOS
========================================================= */

const productsGrid =
    document.getElementById("productsGrid");

const emptyProducts =
    document.getElementById("emptyProducts");

const searchInput =
    document.getElementById("searchInput");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartItems =
    document.getElementById("cartItems");

const overlay =
    document.getElementById("overlay");

const cartCount =
    document.getElementById("cartCount");

const sidebarCartCount =
    document.getElementById("sidebarCartCount");

const cartTotal =
    document.getElementById("cartTotal");

const favoriteCount =
    document.getElementById("favoriteCount");


/* =========================================================
   FORMATAÇÃO DE PREÇO
========================================================= */

function formatPrice(value) {

    return value.toLocaleString("pt-BR", {

        style: "currency",

        currency: "BRL"

    });

}


/* =========================================================
   IMAGEM DOS PRODUTOS
========================================================= */

function productImage(product) {

    const text =
        encodeURIComponent(
            product.categoryName
        );

    return `https://placehold.co/600x400/071827/ff7200?text=${text}`;

}


/* =========================================================
   RENDERIZAR PRODUTOS
========================================================= */

function renderProducts() {

    let filteredProducts =
        products.filter(product => {

            const matchesCategory =
                currentCategory === "all" ||
                product.category === currentCategory;

            const searchText =
                currentSearch.toLowerCase();

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchText) ||

                product.categoryName
                    .toLowerCase()
                    .includes(searchText);

            return matchesCategory && matchesSearch;

        });


    productsGrid.innerHTML = "";


    if (filteredProducts.length === 0) {

        emptyProducts.style.display = "block";

        return;

    }


    emptyProducts.style.display = "none";


    filteredProducts.forEach(product => {

        const isFavorite =
            favorites.includes(product.id);


        const card =
            document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            ${
                product.offer
                    ? `<span class="product-badge">
                        OFERTA
                       </span>`
                    : ""
            }


            <button
                class="favorite-button ${
                    isFavorite ? "active" : ""
                }"
                onclick="toggleFavorite(${product.id})">

                <i class="${
                    isFavorite
                        ? "fa-solid"
                        : "fa-regular"
                } fa-heart"></i>

            </button>


            <div class="product-image">

                <img
                    src="${productImage(product)}"
                    alt="${product.name}">

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${product.categoryName}
                </div>


                <div class="product-name">
                    ${product.name}
                </div>


                <div class="product-old-price">
                    ${formatPrice(product.oldPrice)}
                </div>


                <div class="product-price">
                    ${formatPrice(product.price)}
                </div>


                <button
                    class="add-cart-button"
                    onclick="addToCart(${product.id})">

                    <i class="fa-solid fa-cart-plus"></i>

                    Adicionar ao carrinho

                </button>

            </div>

        `;


        productsGrid.appendChild(card);

    });

}


/* =========================================================
   CARRINHO
========================================================= */

function addToCart(productId) {

    const existing =
        cart.find(item =>
            item.id === productId
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: productId,

            quantity: 1

        });

    }


    saveCart();

    renderCart();

    openCart();

    showToast("Produto adicionado ao carrinho!");

}


function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );

    saveCart();

    renderCart();

}


function changeQuantity(productId, amount) {

    const item =
        cart.find(
            item => item.id === productId
        );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    saveCart();

    renderCart();

}


/* =========================================================
   RENDERIZAR CARRINHO
========================================================= */

function renderCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-cart-shopping"></i>

                <h3>Seu carrinho está vazio</h3>

                <p>
                    Adicione produtos para começar.
                </p>

            </div>

        `;

        updateCartNumbers();

        return;

    }


    let total = 0;

    let quantityTotal = 0;


    cart.forEach(item => {

        const product =
            products.find(
                product => product.id === item.id
            );


        if (!product) return;


        const subtotal =
            product.price * item.quantity;


        total += subtotal;

        quantityTotal += item.quantity;


        const element =
            document.createElement("div");

        element.className = "cart-item";


        element.innerHTML = `

            <div class="cart-item-image">

                <img
                    src="${productImage(product)}"
                    alt="${product.name}">

            </div>


            <div>

                <div class="cart-item-name">
                    ${product.name}
                </div>


                <div class="cart-item-price">
                    ${formatPrice(subtotal)}
                </div>


                <div class="quantity">

                    <button
                        onclick="changeQuantity(
                            ${product.id},
                            -1
                        )">

                        −

                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        onclick="changeQuantity(
                            ${product.id},
                            1
                        )">

                        +

                    </button>

                </div>

            </div>


            <button
                class="cart-item-remove"
                onclick="removeFromCart(${product.id})">

                <i class="fa-solid fa-trash"></i>

            </button>

        `;


        cartItems.appendChild(element);

    });


    cartTotal.textContent =
        formatPrice(total);


    updateCartNumbers(quantityTotal);

}


/* =========================================================
   CONTADORES
========================================================= */

function updateCartNumbers(quantity = null) {

    if (quantity === null) {

        quantity =
            cart.reduce(
                (sum, item) =>
                    sum + item.quantity,
                0
            );

    }


    cartCount.textContent = quantity;

    sidebarCartCount.textContent = quantity;

    favoriteCount.textContent =
        favorites.length;

}


/* =========================================================
   SALVAR CARRINHO
========================================================= */

function saveCart() {

    localStorage.setItem(
        "nobretech_cart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   ABRIR CARRINHO
========================================================= */

function openCart() {

    cartSidebar.classList.add("open");

    overlay.classList.add("active");

}

function closeCart() {

    cartSidebar.classList.remove("open");

    overlay.classList.remove("active");

}


/* =========================================================
   FAVORITOS
========================================================= */

function toggleFavorite(productId) {

    if (favorites.includes(productId)) {

        favorites =
            favorites.filter(
                id => id !== productId
            );

        showToast("Removido dos favoritos.");

    } else {

        favorites.push(productId);

        showToast("Adicionado aos favoritos!");

    }


    localStorage.setItem(
        "nobretech_favorites",
        JSON.stringify(favorites)
    );


    renderProducts();

    updateCartNumbers();

}


/* =========================================================
   FILTRO POR CATEGORIA
========================================================= */

function filterCategory(category) {

    currentCategory = category;

    currentSearch = "";

    searchInput.value = "";


    document
        .querySelectorAll(".category-card")
        .forEach(card => {

            card.classList.toggle(
                "active",
                card.dataset.category === category
            );

        });


    renderProducts();


    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   FILTRO DE OFERTAS
========================================================= */

function filterOffers() {

    currentCategory = "all";

    currentSearch = "";

    searchInput.value = "";


    productsGrid.innerHTML = "";


    const offers =
        products.filter(
            product => product.offer
        );


    offers.forEach(product => {

        const isFavorite =
            favorites.includes(product.id);


        const card =
            document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <span class="product-badge">
                OFERTA
            </span>


            <button
                class="favorite-button ${
                    isFavorite ? "active" : ""
                }"
                onclick="toggleFavorite(${product.id})">

                <i class="${
                    isFavorite
                        ? "fa-solid"
                        : "fa-regular"
                } fa-heart"></i>

            </button>


            <div class="product-image">

                <img
                    src="${productImage(product)}"
                    alt="${product.name}">

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${product.categoryName}
                </div>

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="product-old-price">
                    ${formatPrice(product.oldPrice)}
                </div>

                <div class="product-price">
                    ${formatPrice(product.price)}
                </div>

                <button
                    class="add-cart-button"
                    onclick="addToCart(${product.id})">

                    <i class="fa-solid fa-cart-plus"></i>

                    Adicionar ao carrinho

                </button>

            </div>

        `;


        productsGrid.appendChild(card);

    });


    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   PESQUISA
========================================================= */

searchInput.addEventListener(
    "input",
    function () {

        currentSearch =
            this.value.trim();

        currentCategory = "all";

        document
            .querySelectorAll(".category-card")
            .forEach(card => {

                card.classList.remove("active");

            });

        renderProducts();

    }
);


/* =========================================================
   BOTÃO PESQUISA
========================================================= */

document
    .getElementById("searchButton")
    .addEventListener(
        "click",
        function () {

            document
                .getElementById("products")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* =========================================================
   CATEGORIAS DO MENU
========================================================= */

document
    .querySelectorAll(
        ".category-dropdown button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                filterCategory(
                    this.dataset.category
                );

                document
                    .getElementById(
                        "categoryDropdown"
                    )
                    .classList.remove("show");

            }
        );

    });


/* =========================================================
   CATEGORIAS VISUAIS
========================================================= */

document
    .querySelectorAll(".category-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            function () {

                filterCategory(
                    this.dataset.category
                );

            }
        );

    });


/* =========================================================
   MENU TODAS AS CATEGORIAS
========================================================= */

document
    .getElementById("categoryButton")
    .addEventListener(
        "click",
        function () {

            document
                .getElementById(
                    "categoryDropdown"
                )
                .classList.toggle("show");

        }
    );


/* =========================================================
   FECHAR MENU AO CLICAR FORA
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const dropdown =
            document.getElementById(
                "categoryDropdown"
            );

        const button =
            document.getElementById(
                "categoryButton"
            );


        if (
            !dropdown.contains(event.target) &&
            !button.contains(event.target)
        ) {

            dropdown.classList.remove("show");

        }

    }
);


/* =========================================================
   BOTÃO CARRINHO
========================================================= */

document
    .getElementById("cartButton")
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCart
    );


document
    .getElementById("continueShopping")
    .addEventListener(
        "click",
        closeCart
    );


overlay.addEventListener(
    "click",
    closeCart
);


/* =========================================================
   VER TODOS OS PRODUTOS
========================================================= */

document
    .getElementById("showAllProducts")
    .addEventListener(
        "click",
        function () {

            currentCategory = "all";

            currentSearch = "";

            searchInput.value = "";

            renderProducts();

        }
    );


/* =========================================================
   SCROLL PARA PRODUTOS
========================================================= */

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   MODAL CONTA
========================================================= */

const accountModal =
    document.getElementById(
        "accountModal"
    );


const loginForm =
    document.getElementById(
        "loginForm"
    );


const registerForm =
    document.getElementById(
        "registerForm"
    );


document
    .getElementById("accountButton")
    .addEventListener(
        "click",
        function () {

            accountModal.classList.add("active");

        }
    );


document
    .getElementById("closeAccount")
    .addEventListener(
        "click",
        function () {

            accountModal.classList.remove(
                "active"
            );

        }
    );


/* =========================================================
   MOSTRAR CADASTRO
========================================================= */

document
    .getElementById("showRegister")
    .addEventListener(
        "click",
        function () {

            loginForm.classList.add("hidden");

            registerForm.classList.remove(
                "hidden"
            );

        }
    );


/* =========================================================
   MOSTRAR LOGIN
========================================================= */

document
    .getElementById("showLogin")
    .addEventListener(
        "click",
        function () {

            registerForm.classList.add(
                "hidden"
            );

            loginForm.classList.remove(
                "hidden"
            );

        }
    );


/* =========================================================
   CADASTRO
========================================================= */

registerForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "registerName"
            ).value.trim();


        const email =
            document.getElementById(
                "registerEmail"
            ).value.trim();


        const password =
            document.getElementById(
                "registerPassword"
            ).value;


        const user = {

            name: name,

            email: email,

            password: password

        };


        localStorage.setItem(
            "nobretech_user",
            JSON.stringify(user)
        );


        localStorage.setItem(
            "nobretech_logged",
            "true"
        );


        updateAccount();


        registerForm.reset();


        accountModal.classList.remove(
            "active"
        );


        showToast(
            "Conta criada com sucesso!"
        );

    }
);


/* =========================================================
   LOGIN
========================================================= */

loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const email =
            document.getElementById(
                "loginEmail"
            ).value.trim();


        const password =
            document.getElementById(
                "loginPassword"
            ).value;


        const savedUser =
            JSON.parse(
                localStorage.getItem(
                    "nobretech_user"
                )
            );


        if (!savedUser) {

            showToast(
                "Nenhuma conta cadastrada."
            );

            return;

        }


        if (
            email !== savedUser.email ||
            password !== savedUser.password
        ) {

            showToast(
                "E-mail ou senha incorretos."
            );

            return;

        }


        localStorage.setItem(
            "nobretech_logged",
            "true"
        );


        loginForm.reset();


        accountModal.classList.remove(
            "active"
        );


        updateAccount();


        showToast(
            "Login realizado com sucesso!"
        );

    }
);


/* =========================================================
   ATUALIZAR CONTA
========================================================= */

function updateAccount() {

    const user =
        JSON.parse(
            localStorage.getItem(
                "nobretech_user"
            )
        );


    const logged =
        localStorage.getItem(
            "nobretech_logged"
        );


    if (user && logged === "true") {

        document.getElementById(
            "accountName"
        ).textContent =
            user.name;


        document.getElementById(
            "accountStatus"
        ).textContent =
            "Conta conectada";

    } else {

        document.getElementById(
            "accountName"
        ).textContent =
            "Minha conta";


        document.getElementById(
            "accountStatus"
        ).textContent =
            "Entrar / Cadastrar";

    }

}


/* =========================================================
   FINALIZAR PEDIDO
========================================================= */

document
    .getElementById("checkoutButton")
    .addEventListener(
        "click",
        function () {

            if (cart.length === 0) {

                showToast(
                    "Seu carrinho está vazio."
                );

                return;

            }


            showToast(
                "Checkout demonstrativo do portfólio."
            );

        }
    );


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    const oldToast =
        document.querySelector(".toast");


    if (oldToast) {

        oldToast.remove();

    }


    const toast =
        document.createElement("div");


    toast.className = "toast";


    toast.innerHTML = `

        <i class="fa-solid fa-circle-check"></i>

        ${message}

    `;


    document.body.appendChild(toast);


    setTimeout(
        () => toast.remove(),
        2500
    );

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

renderProducts();

renderCart();

updateAccount();

updateCartNumbers();
