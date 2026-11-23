const R=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const ls=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}};
const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const get=id=>PRODUTOS.find(p=>p.id===id), pix=p=>p.preco*.9, cart=()=>ls('cart',{});
const imgH=p=>p.img?`<img src="${p.img}" alt="${esc(p.nome)}">`:`<span class="emo">${p.ico}</span>`;
function add(id){const c=cart();c[id]=(c[id]||0)+1;sv('cart',c);render();abrirCarrinho(true)}
function rem(id){const c=cart();delete c[id];sv('cart',c);render();abrirCarrinho(true)}
function abrirCarrinho(o){document.getElementById('cart').classList.toggle('open',o===true?true:undefined)}
function buscar(e){e.preventDefault();location.href='index.html?q='+encodeURIComponent(document.getElementById('q').value)}
function render(){
const c=cart(),ids=Object.keys(c).filter(get),n=ids.reduce((a,i)=>a+c[i],0),t=ids.reduce((a,i)=>a+c[i]*pix(get(i)),0);
const cats=[...new Set(PRODUTOS.map(p=>p.cat))];
document.getElementById('hdr').innerHTML=`<div class="top">🚚 Frete grátis acima de R$ 500 · 💸 10% OFF no Pix · 🛡️ Garantia de fábrica</div>
<header><a class="logo" href="index.html">Nobre<span>Tech</span><small>TECNOLOGIA SEM LIMITES</small></a>
<form onsubmit="buscar(event)"><input id="q" placeholder="Buscar produtos, marcas..."><button>🔍</button></form>
<div class="acts"><a href="#" onclick="alert('Login: em breve');return false">👤 Entrar</a><a href="#" onclick="abrirCarrinho();return false">🛒 Carrinho <span class="badge">${n}</span></a></div></header>
<nav><a href="index.html">Início</a>${cats.map(x=>`<a href="index.html?cat=${encodeURIComponent(x)}">${x}</a>`).join('')}<a href="#contato">Contato</a></nav>`;
document.getElementById('cart').innerHTML=`<h3>Meu carrinho <button onclick="abrirCarrinho(false)">✕</button></h3>${ids.map(i=>{const p=get(i);return`<div class="ci"><div class="im">${imgH(p)}</div><div><a href="produto.html?id=${i}">${p.nome}</a><small>${c[i]}x ${R(pix(p))}</small></div><button onclick="rem('${i}')">🗑</button></div>`}).join('')||'<p>Seu carrinho está vazio.</p>'}
<div class="tot">Total no Pix: <b>${R(t)}</b></div><button class="btn" onclick="alert('Pedido simulado! Integre um gateway de pagamento para vender de verdade.')">FINALIZAR PEDIDO</button>`;
document.getElementById('ftr').innerHTML=`<footer id="contato"><div><b>NobreTech</b><p>Hardware, computadores e periféricos.</p></div><div><b>Atendimento</b><p>pedrophnobre2000@gmail.com<br>(88) 99950-2994</p></div><div><b>Pagamento</b><p>Pix · Cartão em até 12x · Boleto</p></div><p class="cp">© 2026 NobreTech — Projeto de portfólio.</p></footer>`}
function listar(){const u=new URLSearchParams(location.search),q=(u.get('q')||'').toLowerCase(),sc=document.getElementById('cat'),so=document.getElementById('ord');
sc.innerHTML='<option value="">Todas as categorias</option>'+[...new Set(PRODUTOS.map(p=>p.cat))].map(c=>`<option ${u.get('cat')===c?'selected':''}>${c}</option>`).join('');
const draw=()=>{const l=PRODUTOS.filter(p=>(!sc.value||p.cat===sc.value)&&(p.nome+p.marca).toLowerCase().includes(q));
if(so.value)l.sort((a,b)=>so.value==='asc'?a.preco-b.preco:b.preco-a.preco);
document.getElementById('grid').innerHTML=l.map(p=>`<article class="card"><a class="im" href="produto.html?id=${p.id}">${imgH(p)}</a><small>${p.marca}</small><a href="produto.html?id=${p.id}"><h3>${p.nome}</h3></a><s>${R(p.preco*1.12)}</s><b class="pr">${R(pix(p))}</b><small>no Pix · ou ${R(p.preco)} em 12x de ${R(p.preco/12)}</small><button class="btn" onclick="add('${p.id}')">Comprar</button></article>`).join('')||'<p>Nenhum produto encontrado.</p>'};
sc.onchange=so.onchange=draw;draw()}
function aba(i){document.querySelectorAll('.tabs button').forEach((b,j)=>b.classList.toggle('on',i===j));document.querySelectorAll('.pn>div').forEach((d,j)=>d.hidden=i!==j)}
const tab=o=>`<table>${Object.entries(o).map(([k,v])=>`<tr><th>${k}</th><td>${v}</td></tr>`).join('')}</table>`;
function frete(){const d=document.getElementById('cep').value.replace(/\D/g,'');document.getElementById('fr').textContent=d.length===8?'Entrega em 3 a 7 dias úteis · R$ 24,90 (grátis acima de R$ 500) — simulação':'Digite um CEP válido'}
function listaCm(id){const l=ls('cm_'+id,[]);document.getElementById('lc').innerHTML=l.map(c=>`<div class="cm"><b>${esc(c.n)}</b> <span class="st">${'★'.repeat(c.s)}${'☆'.repeat(5-c.s)}</span> <small>${c.d}</small><p>${esc(c.t)}</p></div>`).join('')||'<p>Seja o primeiro a avaliar este produto.</p>'}
function comentar(id){const n=cn.value.trim(),t=ct.value.trim();if(!n||!t)return alert('Preencha nome e comentário.');const l=ls('cm_'+id,[]);l.unshift({n,t,s:+cs.value,d:new Date().toLocaleDateString('pt-BR')});sv('cm_'+id,l);cn.value=ct.value='';listaCm(id)}
function produto(){const p=get(new URLSearchParams(location.search).get('id')),m=document.getElementById('prod');
if(!p){m.innerHTML='<p>Produto não encontrado. <a href="index.html">Voltar à loja</a></p>';return}
document.title=p.nome+' | NobreTech';
m.innerHTML=`<p class="bc"><a href="index.html">Início</a> › <a href="index.html?cat=${encodeURIComponent(p.cat)}">${p.cat}</a> › ${p.nome}</p>
<div class="pg"><div class="im big">${imgH(p)}</div><div><small>${p.marca} · ${p.cat}</small><h1>${p.nome}</h1><s>${R(p.preco*1.12)}</s><div class="pr big">${R(pix(p))}</div><p>à vista no Pix <b>(10% OFF)</b></p><p>ou ${R(p.preco)} em até <b>12x de ${R(p.preco/12)}</b> sem juros</p><p class="ok">✔ Em estoque · Garantia: ${p.extra.Garantia}</p>
<button class="btn" onclick="add('${p.id}')">🛒 Adicionar ao carrinho</button> <div class="frete"><input id="cep" placeholder="Seu CEP" maxlength="9"><button class="btn alt" onclick="frete()">Calcular frete</button><small id="fr"></small></div></div></div>
<div class="tabs">${['Descrição','Especificações','Informações adicionais','Pagamento','Avaliações'].map((t,i)=>`<button class="${i?'':'on'}" onclick="aba(${i})">${t}</button>`).join('')}</div>
<div class="pn"><div><p>${p.desc}</p></div><div hidden>${tab(p.specs)}</div><div hidden>${tab(p.extra)}</div>
<div hidden>${tab({"💸 Pix":`${R(pix(p))} à vista (10% de desconto)`,"💳 Cartão de crédito":`${R(p.preco)} em até 12x de ${R(p.preco/12)} sem juros`,"🧾 Boleto":`${R(pix(p))} à vista`})}<p><small>Valores de exemplo. Ajuste as regras conforme o seu gateway de pagamento.</small></p></div>
<div hidden><form class="cf" onsubmit="event.preventDefault();comentar('${p.id}')"><input id="cn" placeholder="Seu nome"><select id="cs"><option value="5">★★★★★</option><option value="4">★★★★☆</option><option value="3">★★★☆☆</option><option value="2">★★☆☆☆</option><option value="1">★☆☆☆☆</option></select><textarea id="ct" rows="3" placeholder="Escreva seu comentário..."></textarea><button class="btn">Enviar avaliação</button></form><div id="lc"></div></div></div>`;listaCm(p.id)}
document.body.insertAdjacentHTML('beforeend','<aside id="cart"></aside>');render();
