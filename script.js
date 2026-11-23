// Para usar foto real: adicione img:"img/rtx4060.jpg" em cada produto (o emoji é só reserva).
// Preços são exemplos: ajuste para os seus. "preco" = valor no cartão; o Pix tem 10% OFF automático.
const PRODUTOS=[
{id:"rtx-4060",ico:"🎮",cat:"Placas de Vídeo",marca:"NVIDIA",nome:"Placa de Vídeo GeForce RTX 4060 8GB GDDR6",preco:1999,
desc:"Placa de vídeo com arquitetura Ada Lovelace, ideal para jogar em Full HD e QHD com ray tracing e DLSS 3 (geração de quadros por IA), com baixo consumo de energia.",
specs:{"GPU":"AD107","Núcleos CUDA":"3072","Memória":"8 GB GDDR6, 128 bits","Clock boost":"até 2460 MHz","Consumo (TDP)":"115 W","Conexões":"1x HDMI 2.1, 3x DisplayPort 1.4a","Interface":"PCIe 4.0 x8","Alimentação":"1x 8 pinos"},
extra:{Marca:"NVIDIA (modelos de parceiros)",Modelo:"RTX 4060",Garantia:"12 meses","Na caixa":"Placa de vídeo, manual"}},
{id:"ryzen-5-5600",ico:"🧠",cat:"Processadores",marca:"AMD",nome:"Processador AMD Ryzen 5 5600 3.5GHz (4.4GHz Turbo) 6 Núcleos AM4",preco:679,
desc:"Processador de 6 núcleos e 12 threads com excelente custo-benefício para games e produtividade. Acompanha cooler Wraith Stealth.",
specs:{"Núcleos / Threads":"6 / 12","Frequência base / turbo":"3.5 GHz / 4.4 GHz","Cache L3":"32 MB","TDP":"65 W","Soquete":"AM4","Litografia":"7 nm","Vídeo integrado":"Não possui"},
extra:{Marca:"AMD",Modelo:"100-100000927BOX",Garantia:"36 meses","Na caixa":"Processador e cooler Wraith Stealth"}},
{id:"fury-16gb",ico:"💾",cat:"Memórias RAM",marca:"Kingston",nome:"Memória Kingston Fury Beast 16GB DDR4 3200MHz CL16",preco:189,
desc:"Memória DDR4 com dissipador de calor de perfil baixo, plug and play e compatível com Intel XMP, para quem quer mais desempenho em jogos e multitarefa.",
specs:{"Capacidade":"1x 16 GB","Tipo":"DDR4 DIMM","Velocidade":"3200 MHz","Latência":"CL16","Tensão":"1.35 V"},
extra:{Marca:"Kingston",Modelo:"KF432C16BB/16",Garantia:"Vitalícia limitada","Na caixa":"1 módulo de memória"}},
{id:"nv2-1tb",ico:"⚡",cat:"Armazenamento",marca:"Kingston",nome:"SSD Kingston NV2 1TB M.2 2280 NVMe PCIe 4.0",preco:399,
desc:"SSD NVMe de alta velocidade que reduz o tempo de boot e de carregamento de jogos e programas. Formato M.2 compacto para notebooks e desktops.",
specs:{"Capacidade":"1 TB","Formato":"M.2 2280","Interface":"NVMe PCIe 4.0 x4","Leitura":"até 3500 MB/s","Gravação":"até 2100 MB/s"},
extra:{Marca:"Kingston",Modelo:"SNV2S/1000G",Garantia:"36 meses","Na caixa":"SSD"}},
{id:"cv650",ico:"🔌",cat:"Fontes",marca:"Corsair",nome:"Fonte Corsair CV650 650W 80 Plus Bronze",preco:379,
desc:"Fonte com certificação 80 Plus Bronze, PFC ativo e ventoinha de 120 mm silenciosa. Confiável para PCs gamer de entrada e intermediários.",
specs:{"Potência":"650 W","Certificação":"80 Plus Bronze","Modular":"Não","Ventoinha":"120 mm","Proteções":"OVP, UVP, SCP, OPP"},
extra:{Marca:"Corsair",Modelo:"CV650",Garantia:"36 meses","Na caixa":"Fonte, cabo de energia, parafusos"}},
{id:"aoc-24g2",ico:"🖥️",cat:"Monitores",marca:"AOC",nome:"Monitor Gamer AOC Hero 23.8\" IPS 144Hz 1ms Full HD",preco:899,
desc:"Monitor gamer com painel IPS de cores vibrantes, 144 Hz e 1 ms de resposta, com suporte FreeSync Premium para jogos mais fluidos.",
specs:{"Tela":"23.8\" IPS","Resolução":"1920x1080 (Full HD)","Taxa de atualização":"144 Hz","Tempo de resposta":"1 ms (MPRT)","Entradas":"HDMI 1.4, DisplayPort 1.2, VGA","Sincronização":"FreeSync Premium"},
extra:{Marca:"AOC",Modelo:"24G2",Garantia:"12 meses","Na caixa":"Monitor, base, cabos HDMI e energia"}}
];
