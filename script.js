// BANCO DE DADOS LOCAL DE PRODUTOS (Mais de 10 por categoria solicitada)
const productsData = [
    // --- PLACAS DE VÍDEO (10 itens) ---
    { id: 1, category: 'gpu', name: 'Placa de Vídeo Galax GeForce RTX 3060 12GB', price: 1999.90, oldPrice: 2299.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'OFERTA' },
    { id: 2, category: 'gpu', name: 'Placa de Vídeo ASUS ROG Strix RTX 4070 Ti 12GB', price: 5899.90, oldPrice: 6499.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'TOP' },
    { id: 3, category: 'gpu', name: 'Placa de Vídeo Gigabyte AMD Radeon RX 7600 8GB', price: 1699.90, oldPrice: 1899.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'POPULAR' },
    { id: 4, category: 'gpu', name: 'Placa de Vídeo MSI RTX 4060 Ventus 2X 8GB', price: 2199.90, oldPrice: 2499.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'OFERTA' },
    { id: 5, category: 'gpu', name: 'Placa de Vídeo PowerColor RX 6750 XT 12GB', price: 2599.90, oldPrice: 2899.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'OFERTA' },
    { id: 6, category: 'gpu', name: 'Placa de Vídeo Zotac RTX 4080 Super 16GB', price: 7499.90, oldPrice: 8199.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'PREMIUM' },
    { id: 7, category: 'gpu', name: 'Placa de Vídeo ASRock RX 6600 Challenger 8GB', price: 1399.90, oldPrice: 1599.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'CUSTO' },
    { id: 8, category: 'gpu', name: 'Placa de Vídeo Palit RTX 3050 Dual 8GB', price: 1249.90, oldPrice: 1449.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'OFERTA' },
    { id: 9, category: 'gpu', name: 'Placa de Vídeo Gainward RTX 4090 Phantom 24GB', price: 13999.90, oldPrice: 15299.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'MONSTRO' },
    { id: 10, category: 'gpu', name: 'Placa de Vídeo Sapphire RX 7900 XTX 24GB', price: 6999.90, oldPrice: 7699.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'AMD TOP' },

    // --- PROCESSADORES (10 itens) ---
    { id: 11, category: 'cpu', name: 'Processador AMD Ryzen 5 5600 3.5GHz', price: 799.90, oldPrice: 999.90, image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80', tag: 'RECOMENDADO' },
    { id: 12, category: 'cpu', name: 'Processador Intel Core i5-13400F 2.5GHz', price: 1199.90, oldPrice: 1399.90, image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80', tag: 'INTEL' },
    { id: 13, category: 'cpu', name: 'Processador AMD Ryzen 7 5800X3D 3.4GHz', price: 2199.90, oldPrice: 2499.90, image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80', tag: 'GAMER' },
    { id: 14, category: 'cpu', name: 'Processador Intel Core i7-14700K 3.4GHz', price: 2899.90, oldPrice: 3299.90, image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80', tag: 'NOVO' },
    { id: 15, category: 'cpu', name: 'Processador AMD Ryzen 7 7800X3D 4.2GHz', price: 2799.90, oldPrice: 3199.90, image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80', tag: 'BEST CPU' },
    { id: 16, category: 'cpu', name: 'Processador Intel Core i9-14900K 3.2GHz', price: 4199.90, oldPrice: 4699.90, image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80', tag: 'TOP' },
    { id: 17, category: 'cpu', name: 'Processador AMD Ryzen 5 7600 3.8GHz', price: 1399.90, oldPrice: 1599.90, image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80', tag: 'AM5' },
    { id: 18, category: 'cpu', name: 'Processador Intel Core i3-12100F 3.3GHz', price: 549.90, oldPrice: 649.90, image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80', tag: 'ENTRADA' },
    { id: 19, category: 'cpu', name: 'Processador AMD Ryzen 9 7950X 4.5GHz', price: 3899.90, oldPrice: 4399.90, image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80', tag: 'PRO' },
    { id: 20, category: 'cpu', name: 'Processador Intel Core i5-14600KF 3.5GHz', price: 1899.90, oldPrice: 2199.90, image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80', tag: 'OFERTA' },

    // --- PLACAS MÃE (10 itens) ---
    { id: 21, category: 'motherboard', name: 'Placa Mãe ASUS TUF Gaming B450M-Plus II', price: 699.90, oldPrice: 799.90, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80', tag: 'POPULAR' },
    { id: 22, category: 'motherboard', name: 'Placa Mãe Gigabyte B650M AORUS Elite AX', price: 1399.90, oldPrice: 1599.90, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80', tag: 'AM5' },
    { id: 23, category: 'motherboard', name: 'Placa Mãe MSI MAG B760M Mortar WiFi', price: 1299.90, oldPrice: 1499.90, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80', tag: 'INTEL' },
    { id: 24, category: 'motherboard', name: 'Placa Mãe ASRock B550M Steel Legend', price: 899.90, oldPrice: 1049.90, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80', tag: 'TOP VENDA' },
    { id: 25, category: 'motherboard', name: 'Placa Mãe ASUS ROG Strix Z790-F Gaming', price: 2899.90, oldPrice: 3299.90, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80', tag: 'PREMIUM' },
    { id: 26, category: 'motherboard', name: 'Placa Mãe Gigabyte A520M S2H', price: 439.90, oldPrice: 519.90, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80', tag: 'ENTRADA' },
    { id: 27, category: 'motherboard', name: 'Placa Mãe MSI PRO H610M-G DDR4', price: 499.90, oldPrice: 589.90, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80', tag: 'INTEL' },
    { id: 28, category: 'motherboard', name: 'Placa Mãe ASUS Prime X670-P WiFi', price: 1899.90, oldPrice: 2199.90, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80', tag: 'AM5 PRO' },
    { id: 29, category: 'motherboard', name: 'Placa Mãe Biostar B550MH', price: 479.90, oldPrice: 559.90, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80', tag: 'OFERTA' },
    { id: 30, category: 'motherboard', name: 'Placa Mãe ASRock Z690 PG Riptide', price: 1499.90, oldPrice: 1749.90, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80', tag: 'OFERTA' },

    // --- MEMÓRIAS RAM (10 itens) ---
    { id: 31, category: 'ram', name: 'Memória Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz', price: 299.90, oldPrice: 359.90, image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80', tag: 'KIT' },
    { id: 32, category: 'ram', name: 'Memória Kingston Fury Beast 32GB (2x16GB) DDR5 6000MHz', price: 899.90, oldPrice: 1099.90, image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80', tag: 'DDR5' },
    { id: 33, category: 'ram', name: 'Memória XPG Spectrix D50 RGB 16GB DDR4 3600MHz', price: 249.90, oldPrice: 299.90, image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80', tag: 'RGB' },
    { id: 34, category: 'ram', name: 'Memória G.Skill Trident Z5 RGB 32GB (2x16) DDR5 6400MHz', price: 1199.90, oldPrice: 1399.90, image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80', tag: 'TOP' },
    { id: 35, category: 'ram', name: 'Memória GeIL Super Luce 8GB DDR4 3000MHz', price: 129.90, oldPrice: 159.90, image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80', tag: 'CUSTO' },
    { id: 36, category: 'ram', name: 'Memória Team Group T-Force Delta RGB 16GB DDR4 3200MHz', price: 239.90, oldPrice: 279.90, image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80', tag: 'RGB' },
    { id: 37, category: 'ram', name: 'Memória Corsair Dominator Platinum RGB 32GB DDR5 5600MHz', price: 1299.90, oldPrice: 1499.90, image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80', tag: 'PREMIUM' },
    { id: 38, category: 'ram', name: 'Memória Kingston Fury Renegade 16GB DDR5 6000MHz', price: 479.90, oldPrice: 549.90, image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80', tag: 'FAST' },
    { id: 39, category: 'ram', name: 'Memória Crucial 8GB DDR4 2666MHz', price: 109.90, oldPrice: 139.90, image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80', tag: 'BÁSICO' },
    { id: 40, category: 'ram', name: 'Memória ADATA Premier 16GB DDR4 3200MHz', price: 209.90, oldPrice: 249.90, image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80', tag: 'OFERTA' },

    // --- ARMAZENAMENTO (10 itens) ---
    { id: 41, category: 'storage', name: 'SSD Kingston NV2 1TB NVMe M.2 2280', price: 449.90, oldPrice: 519.90, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80', tag: 'BEST SELLER' },
    { id: 42, category: 'storage', name: 'SSD Samsung 990 Pro 2TB NVMe M.2 Gen4', price: 1299.90, oldPrice: 1499.90, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80', tag: 'VELOZ' },
    { id: 43, category: 'storage', name: 'SSD WD Black SN850X 1TB M.2 Gen4 com Dissipador', price: 749.90, oldPrice: 859.90, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80', tag: 'PRO' },
    { id: 44, category: 'storage', name: 'SSD XPG S20G RGB 512GB NVMe M.2', price: 279.90, oldPrice: 329.90, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80', tag: 'RGB' },
    { id: 45, category: 'storage', name: 'SSD Crucial BX500 480GB SATA III 2.5', price: 219.90, oldPrice: 259.90, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80', tag: 'SATA' },
    { id: 46, category: 'storage', name: 'HD Seagate BarraCuda 2TB 3.5 SATA III', price: 389.90, oldPrice: 439.90, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80', tag: 'HD' },
    { id: 47, category: 'storage', name: 'SSD Lexar NM620 512GB M.2 2280', price: 239.90, oldPrice: 289.90, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80', tag: 'OFERTA' },
    { id: 48, category: 'storage', name: 'SSD Adata Legend 800 1TB PCIe Gen4', price: 429.90, oldPrice: 499.90, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80', tag: 'GEN4' },
    { id: 49, category: 'storage', name: 'SSD Corsair MP600 PRO 2TB M.2 Gen4', price: 1399.90, oldPrice: 1599.90, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80', tag: 'EXTREMO' },
    { id: 50, category: 'storage', name: 'HD Western Digital Blue 1TB 3.5 SATA', price: 289.90, oldPrice: 329.90, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80', tag: 'WD' },

    // --- FONTES (10 itens) ---
    { id: 51, category: 'psu', name: 'Fonte Corsair CV650 650W 80 Plus Bronze', price: 399.90, oldPrice: 469.90, image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80', tag: 'POPULAR' },
    { id: 52, category: 'psu', name: 'Fonte MSI MAG A650BN 650W 80 Plus Bronze', price: 329.90, oldPrice: 389.90, image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80', tag: 'CUSTO' },
    { id: 53, category: 'psu', name: 'Fonte XPG Pylon 750W 80 Plus Bronze', price: 449.90, oldPrice: 519.90, image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80', tag: 'OFERTA' },
    { id: 54, category: 'psu', name: 'Fonte ASUS ROG Thor 850W Platinum II OLED', price: 1899.90, oldPrice: 2199.90, image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80', tag: 'PREMIUM' },
    { id: 55, category: 'psu', name: 'Fonte Gigabyte P550B 550W 80 Plus Bronze', price: 279.90, oldPrice: 329.90, image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80', tag: 'ENTRADA' },
    { id: 56, category: 'psu', name: 'Fonte Corsair RM850x 850W 80 Plus Gold Modular', price: 899.90, oldPrice: 1049.90, image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80', tag: 'GOLD' },
    { id: 57, category: 'psu', name: 'Fonte EVGA 600W 80 Plus White', price: 299.90, oldPrice: 349.90, image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80', tag: 'OFERTA' },
    { id: 58, category: 'psu', name: 'Fonte ThermalTake Toughpower 1000W Gold', price: 1199.90, oldPrice: 1399.90, image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80', tag: 'POWER' },
    { id: 59, category: 'psu', name: 'Fonte Super Flower Legion GX Pro 750W Gold', price: 599.90, oldPrice: 689.90, image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80', tag: 'TOP' },
    { id: 60, category: 'psu', name: 'Fonte Cooler Master MWE 500W V2 Bronze', price: 269.90, oldPrice: 309.90, image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80', tag: 'BÁSICO' },

    // --- GABINETES (10 itens) ---
    { id: 61, category: 'case', name: 'Gabinete Gamer Rise Mode Galaxy Glass Aquário Black', price: 349.90, oldPrice: 429.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'AQUÁRIO' },
    { id: 62, category: 'case', name: 'Gabinete Lian Li O11 Dynamic EVO RGB Black', price: 1299.90, oldPrice: 1499.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'PREMIUM' },
    { id: 63, category: 'case', name: 'Gabinete Montech Air 903 Max ARGB Black', price: 419.90, oldPrice: 489.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'AIRFLOW' },
    { id: 64, category: 'case', name: 'Gabinete Corsair 4000D Airflow Mid-Tower White', price: 629.90, oldPrice: 719.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'TOP' },
    { id: 65, category: 'case', name: 'Gabinete Pichau HX600 Glass Mesh', price: 289.90, oldPrice: 349.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'OFERTA' },
    { id: 66, category: 'case', name: 'Gabinete NZXT H9 Flow Dual-Chamber Mid-Tower', price: 1149.90, oldPrice: 1299.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'HIGH END' },
    { id: 67, category: 'case', name: 'Gabinete Cougar Archon 2 Mesh RGB', price: 259.90, oldPrice: 299.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'RGB' },
    { id: 68, category: 'case', name: 'Gabinete DeepCool CC560 V2 com 4 Fans', price: 329.90, oldPrice: 389.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: '4 FANS' },
    { id: 69, category: 'case', name: 'Gabinete Thermaltake Tower 150 Mini-ITX', price: 549.90, oldPrice: 629.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'MINI' },
    { id: 70, category: 'case', name: 'Gabinete Redragon Grapple RGB Mid Tower', price: 299.90, oldPrice: 349.90, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80', tag: 'OFERTA' },

    // --- MONITORES (10 itens) ---
    { id: 71, category: 'monitor', name: 'Monitor Gamer LG UltraGear 27" Full HD 144Hz 1ms IPS', price: 1199.90, oldPrice: 1399.90, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80', tag: 'BEST SELLER' },
    { id: 72, category: 'monitor', name: 'Monitor Gamer Samsung Odyssey G5 34" QHD Ultrawide 165Hz', price: 2899.90, oldPrice: 3299.90, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80', tag: 'CURVO' },
    { id: 73, category: 'monitor', name: 'Monitor Gamer AOC Hero 24" 165Hz 1ms IPS', price: 899.90, oldPrice: 1049.90, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80', tag: 'OFERTA' },
    { id: 74, category: 'monitor', name: 'Monitor ASUS ROG Swift 27" OLED 240Hz 0.03ms', price: 6499.90, oldPrice: 7199.90, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80', tag: 'OLED 240Hz' },
    { id: 75, category: 'monitor', name: 'Monitor Gamer Mancer Valak 180Hz 1ms Curved 24"', price: 699.90, oldPrice: 829.90, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80', tag: 'CUSTO' },
    { id: 76, category: 'monitor', name: 'Monitor Dell P2722H 27" Full HD Ergoclean', price: 1249.90, oldPrice: 1449.90, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80', tag: 'OFFICE' },
    { id: 77, category: 'monitor', name: 'Monitor Gigabyte M27Q 27" QHD 170Hz IPS KVM', price: 2199.90, oldPrice: 2499.90, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80', tag: 'QHD 144P' },
    { id: 78, category: 'monitor', name: 'Monitor Philips 22" Full HD 75Hz VA HDMI', price: 479.90, oldPrice: 559.90, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80', tag: 'BÁSICO' },
    { id: 79, category: 'monitor', name: 'Monitor Zinnia 23.8" IPS 75Hz Full HD', price: 499.90, oldPrice: 589.90, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80', tag: 'OFERTA' },
    { id: 80, category: 'monitor', name: 'Monitor Gamer Alienware 24.5" 360Hz Fast IPS', price: 3799.90, oldPrice: 4299.90, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80', tag: 'ESPORTS' },

    // --- PERIFÉRICOS (10 itens) ---
    { id: 81, category: 'peripherals', name: 'Teclado Mecânico Gamer Redragon Kumara RGB Switch Blue', price: 229.90, oldPrice: 279.90, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80', tag: 'MECÂNICO' },
    { id: 82, category: 'peripherals', name: 'Mouse Gamer Logitech G Pro X Superlight Wireless White', price: 699.90, oldPrice: 829.90, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80', tag: 'PRO' },
    { id: 83, category: 'peripherals', name: 'Headset Gamer HyperX Cloud II 7.1 Red', price: 499.90, oldPrice: 589.90, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80', tag: 'LENDÁRIO' },
    { id: 84, category: 'peripherals', name: 'Mousepad Gamer Extra Grande 900x400mm Speed Black', price: 79.90, oldPrice: 99.90, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80', tag: 'XL' },
    { id: 85, category: 'peripherals', name: 'Teclado Mecânico Corsair K70 RGB PRO Cherry MX', price: 999.90, oldPrice: 1199.90, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80', tag: 'TOP' },
    { id: 86, category: 'peripherals', name: 'Headset Gamer Razer BlackShark V2 X', price: 299.90, oldPrice: 349.90, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80', tag: 'RAZER' },
    { id: 87, category: 'peripherals', name: 'Mouse Gamer Redragon Cobra Chroma 10000 DPI', price: 119.90, oldPrice: 149.90, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80', tag: 'BEST SELLER' },
    { id: 88, category: 'peripherals', name: 'Microfone Condensador Fifine AmpliGame A6V RGB', price: 199.90, oldPrice: 249.90, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80', tag: 'STREAMER' },
    { id: 89, category: 'peripherals', name: 'Cadeira Gamer Mancer Tyr T3 Preto/Vermelho', price: 649.90, oldPrice: 759.90, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80', tag: 'CONFORTO' },
    { id: 90, category: 'peripherals', name: 'Webcam Logitech C920s Full HD 1080p', price: 379.90, oldPrice: 439.90, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80', tag: 'FULL HD' }
];

// LISTA DE CATEGORIAS DA BARRA SUPERIOR
const categoriesData = [
    { name: 'Placas de Vídeo', icon: 'fa-solid fa-microchip', key: 'gpu' },
    { name: 'Processadores', icon: 'fa-solid fa-memory', key: 'cpu' },
    { name: 'Placas Mãe', icon: 'fa-solid fa-chess-board', key: 'motherboard' },
    { name: 'Memórias RAM', icon: 'fa-solid fa-server', key: 'ram' },
    { name: 'Armazenamento', icon: 'fa-solid fa-hard-drive', key: 'storage' },
    { name: 'Fontes', icon: 'fa-solid fa-plug', key: 'psu' },
    { name: 'Gabinetes', icon: 'fa-solid fa-box', key: 'case' },
    { name: 'Monitores', icon: 'fa-solid fa-desktop', key: 'monitor' },
    { name: 'Periféricos', icon: 'fa-solid fa-keyboard', key: 'peripherals' }
];

// ESTADO DO CARRINHO DE COMPRAS
let cart = [];
let activeCategory = 'todos';

// CARREGAR ELEMENTOS DO DOM
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts();
    setupCartControls();
    setupSearch();
    setupFilters();
    setupAuth();
});

// 1. RENDERIZAR CATEGORIAS EM DESTAQUE
function renderCategories() {
    const container = document.getElementById('categoryContainer');
    container.innerHTML = categoriesData.map(cat => `
        <div class="category-card" onclick="filterByCategory('${cat.key}')">
            <i class="${cat.icon}"></i>
            <span>${cat.name}</span>
        </div>
    `).join('');
}

// 2. RENDERIZAR QUADRO DE PRODUTOS
function renderProducts(itemsToRender = productsData) {
    const grid = document.getElementById('productGrid');
    
    if (itemsToRender.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">Nenhum produto encontrado.</div>`;
        return;
    }

    grid.innerHTML = itemsToRender.map(prod => `
        <div class="product-card">
            ${prod.tag ? `<span class="badge-offer">${prod.tag}</span>` : ''}
            <button class="wishlist-btn" title="Adicionar aos Favoritos"><i class="fa-regular fa-heart"></i></button>
            <img class="product-image" src="${prod.image}" alt="${prod.name}">
            <div class="product-title">${prod.name}</div>
            <div class="price-old">De: R$ ${prod.oldPrice.toFixed(2).replace('.', ',')}</div>
            <div class="price-current">R$ ${prod.price.toFixed(2).replace('.', ',')}</div>
            <div class="price-pix">À vista no PIX (15% OFF)</div>
            <button class="btn-add-cart" onclick="addToCart(${prod.id})">
                <i class="fa-solid fa-cart-plus"></i> Adicionar ao carrinho
            </button>
        </div>
    `).join('');
}

// 3. FILTRAGEM POR CATEGORIA E ABAS
function setupFilters() {
    const pills = document.querySelectorAll('.pill');
    pills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            pills.forEach(p => p.classList.remove('active'));
            e.target.classList.add('active');
            const cat = e.target.getAttribute('data-category');
            filterByCategory(cat);
        });
    });
}

function filterByCategory(categoryKey) {
    activeCategory = categoryKey;
    
    // Sincronizar pills
    const pills = document.querySelectorAll('.pill');
    pills.forEach(p => {
        if(p.getAttribute('data-category') === categoryKey) {
            p.classList.add('active');
        } else {
            p.classList.remove('active');
        }
    });

    if (categoryKey === 'todos') {
        renderProducts(productsData);
    } else {
        const filtered = productsData.filter(p => p.category === categoryKey);
        renderProducts(filtered);
    }
}

// 4. PESQUISA EM TEMPO REAL
function setupSearch() {
    const input = document.getElementById('searchInput');
    input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = productsData.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query)
        );
        renderProducts(filtered);
    });
}

// 5. FUNÇÕES DO CARRINHO DE COMPRAS
function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    openCart();
}

function updateCartQuantity(productId, change) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart[itemIndex].qty += change;
        if (cart[itemIndex].qty <= 0) {
            cart.splice(itemIndex, 1);
        }
    }
    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cartItemsContainer');
    const badge = document.getElementById('cartBadge');
    const totalPixElem = document.getElementById('cartTotalPix');
    const totalCardElem = document.getElementById('cartTotalCard');

    // Total Contagem
    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    badge.innerText = totalQty;

    if (cart.length === 0) {
        container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 40px 0;">Seu carrinho está vazio.</div>`;
        totalPixElem.innerText = 'R$ 0,00';
        totalCardElem.innerText = 'R$ 0,00';
        return;
    }

    // Renderizar itens com rolagem na barra lateral
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</div>
                <div class="cart-controls">
                    <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    <button style="background:none; border:none; color:#ef4444; margin-left:auto; cursor:pointer;" onclick="removeFromCart(${item.id})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Calcular valores totais
    const totalPix = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const totalCard = totalPix * 1.10; // Sem desconto

    totalPixElem.innerText = `R$ ${totalPix.toFixed(2).replace('.', ',')}`;
    totalCardElem.innerText = `R$ ${totalCard.toFixed(2).replace('.', ',')}`;
}

// 6. CONTROLE DE ABERTURA E FECHAMENTO DO DRAWER DO CARRINHO
function setupCartControls() {
    const toggleBtn = document.getElementById('cartToggleBtn');
    const closeBtn = document.getElementById('closeCartBtn');
    const overlay = document.getElementById('cartOverlay');

    toggleBtn.addEventListener('click', openCart);
    closeBtn.addEventListener('click', closeCart);
    overlay.addEventListener('click', closeCart);
}

function openCart() {
    document.getElementById('cartDrawer').classList.add('open');
    document.getElementById('cartOverlay').classList.add('active');
}

function closeCart() {
    document.getElementById('cartDrawer').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('active');
}

function checkout() {
    if(cart.length === 0) {
        alert("Adicione produtos ao seu carrinho primeiro!");
        return;
    }
    alert("Pedido finalizado com sucesso! Esta é uma demonstração do portfólio.");
    clearCart();
    closeCart();
}

// 7. MODAL DE LOGIN / CADASTRO DA CONTA
function setupAuth() {
    const openBtn = document.getElementById('openAuthBtn');
    const closeBtn = document.getElementById('closeAuthBtn');
    const overlay = document.getElementById('authOverlay');
    const loginTabBtn = document.getElementById('loginTabBtn');
    const registerTabBtn = document.getElementById('registerTabBtn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    openBtn.addEventListener('click', () => overlay.classList.add('active'));
    closeBtn.addEventListener('click', () => overlay.classList.remove('active'));

    loginTabBtn.addEventListener('click', () => {
        loginTabBtn.classList.add('active');
        registerTabBtn.classList.remove('active');
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    });

    registerTabBtn.addEventListener('click', () => {
        registerTabBtn.classList.add('active');
        loginTabBtn.classList.remove('active');
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
    });

    // Submissão dos Formulários
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        document.getElementById('userNameDisplay').innerText = "Olá, Cliente";
        document.getElementById('userSubDisplay').innerText = email;
        overlay.classList.remove('active');
        alert('Login efetuado com sucesso!');
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        document.getElementById('userNameDisplay').innerText = `Olá, ${name.split(' ')[0]}`;
        document.getElementById('userSubDisplay').innerText = "Minha Conta";
        overlay.classList.remove('active');
        alert('Conta criada com sucesso!');
    });
}
