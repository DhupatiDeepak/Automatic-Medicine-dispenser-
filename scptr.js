// CityCare Kiosk SPA — Enhanced with premium tablet medicine images from online sources

const INVENTORY = [
  // TABLET MEDICINES - High-quality, realistic images from online sources
  { 
    binary:"10101001", 
    name:"Paracetamol 650mg (Tablet)", 
    type:"tablet", 
    price:22.00, 
    img:"https://images.unsplash.com/photo-1595433562696-4f1b4f9f1b54?q=80&w=420&h=300&fit=crop&crop=entropy" 
  },
  { 
    binary:"11001100", 
    name:"Amoxicillin 500mg (Capsule)", 
    type:"tablet", 
    price:48.50, 
    img:"https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=420&h=300&fit=crop&crop=face" 
  },
  { 
    binary:"10100110", 
    name:"Ibuprofen 400mg (Tablet)", 
    type:"tablet", 
    price:18.00, 
    img:"https://images.unsplash.com/photo-1584367369853-8b966cf2435a?q=80&w=420&h=300&fit=crop&crop=center" 
  },
  { 
    binary:"11010010", 
    name:"Cetirizine 10mg (Tablet)", 
    type:"tablet", 
    price:10.00, 
    img:"https://images.unsplash.com/photo-1622547010046-0c066de484a0?q=80&w=420&h=300&fit=crop&crop=bottom" 
  },
  { 
    binary:"10111001", 
    name:"Azithromycin 500mg (Tablet)", 
    type:"tablet", 
    price:95.00, 
    img:"https://images.unsplash.com/photo-1580281657521-2a7a7bf2b37c?q=80&w=420&h=300&fit=crop&crop=face" 
  },
  { 
    binary:"11100011", 
    name:"Pantoprazole 40mg (Tablet)", 
    type:"tablet", 
    price:30.00, 
    img:"https://images.unsplash.com/photo-1600180758895-5d0d5f6d2dd6?q=80&w=420&h=300&fit=crop&crop=entropy" 
  },
  { 
    binary:"00110110", 
    name:"Metformin 500mg (Tablet)", 
    type:"tablet", 
    price:25.00, 
    img:"https://images.unsplash.com/photo-1606248897737-9b4a09b7b9d1?q=80&w=420&h=300&fit=crop&crop=center" 
  },
  { 
    binary:"10000101", 
    name:"Loperamide 2mg (Tablet)", 
    type:"tablet", 
    price:18.00, 
    img:"https://images.unsplash.com/photo-1582719478250-57657f07b48a?q=80&w=420&h=300&fit=crop&crop=bottom" 
  },
  { 
    binary:"11000011", 
    name:"Paracetamol 500mg (Tablet)", 
    type:"tablet", 
    price:10.00, 
    img:"https://images.pexels.com/photos/52500/tablets-pills-drugs-medication-52500.jpeg?q=80&w=420&h=300&fit=crop&crop=entropy" 
  },
  
  // SYRUP MEDICINES - Different visual style
  { 
    binary:"11110000", 
    name:"Cough Syrup 100ml", 
    type:"syrup", 
    price:96.00, 
    img:"https://images.unsplash.com/photo-1600959907703-125ba1374b8f?q=80&w=420&h=300&fit=crop&crop=center" 
  },
  { 
    binary:"10001011", 
    name:"Multivitamin Syrup 200ml", 
    type:"syrup", 
    price:150.00, 
    img:"https://images.unsplash.com/photo-1580281323503-3b1e0f32f8d2?q=80&w=420&h=300&fit=crop&crop=bottom" 
  },
  { 
    binary:"00111001", 
    name:"Honey Cough Syrup 100ml", 
    type:"syrup", 
    price:110.00, 
    img:"https://images.unsplash.com/photo-1571934811356-7e0a7b7b3f47?q=80&w=420&h=300&fit=crop&crop=face" 
  },
  
  // VITAMIN SUPPLEMENTS - Bright, healthy visuals
  { 
    binary:"10011001", 
    name:"Vitamin C 500mg (Tablet)", 
    type:"vitamin", 
    price:15.00, 
    img:"https://images.unsplash.com/photo-1582719478250-57657f07b48a?q=80&w=420&h=300&fit=crop&crop=bottom" 
  },
  { 
    binary:"01011100", 
    name:"Vitamin D3 1000 IU (Tablet)", 
    type:"vitamin", 
    price:20.00, 
    img:"https://images.unsplash.com/photo-1602237100965-1e21f7ef1f46?q=80&w=420&h=300&fit=crop&crop=entropy" 
  },
  { 
    binary:"01101111", 
    name:"Calcium + D (Tablet)", 
    type:"vitamin", 
    price:45.00, 
    img:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=420&h=300&fit=crop&crop=center" 
  },
  
  // OTHER PRODUCTS - Diverse medical items
  { 
    binary:"01101001", 
    name:"ORS Sachet (Powder)", 
    type:"other", 
    price:12.00, 
    img:"https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d?q=80&w=420&h=300&fit=crop&crop=bottom" 
  },
  { 
    binary:"01110010", 
    name:"Saline Nasal Spray 50ml", 
    type:"other", 
    price:85.00, 
    img:"https://images.unsplash.com/photo-1553264665-4e8b8b4e4d67?q=80&w=420&h=300&fit=crop&crop=face" 
  },
  { 
    binary:"10101110", 
    name:"Antacid Suspension 200ml", 
    type:"other", 
    price:55.00, 
    img:"https://images.unsplash.com/photo-1580281323503-3b1e0f32f8d2?q=80&w=420&h=300&fit=crop&crop=bottom" 
  },
  { 
    binary:"11101010", 
    name:"Anti-allergy Eye Drops 10ml", 
    type:"other", 
    price:120.00, 
    img:"https://images.unsplash.com/photo-1610279841595-0f77b9d0c9b7?q=80&w=420&h=300&fit=crop&crop=center" 
  }
];

let inventory = JSON.parse(JSON.stringify(INVENTORY));
let cart = [];
let orders = [];
let servedCounter = 0;

// -------- Utilities --------
const select = q => document.querySelector(q);
const selectAll = q => document.querySelectorAll(q);

// -------- Routing and Nav --------
const pages = Array.from(selectAll('[data-page]'));
const navBtns = selectAll('.nav-btn');
function showPage(name) {
  pages.forEach(p => p.hidden = p.dataset.page !== name);
  navBtns.forEach(b => b.classList.toggle('active', b.dataset.route === name));
  location.hash = '#' + name;
}
navBtns.forEach(b => b.addEventListener('click', ()=> showPage(b.dataset.route)));
const start = (location.hash && location.hash.replace('#','')) || 'home';
showPage(start);

// -------- Theme Handling --------
const root = document.documentElement;
function applyTheme(t) {
  root.classList.remove('light','auto');
  if(t === 'light') root.classList.add('light');
  if(t === 'auto') root.classList.add('auto');
  localStorage.setItem('citycare_theme', t);
}
applyTheme(localStorage.getItem('citycare_theme') || 'dark');
select('#themeToggle').addEventListener('click', ()=>{
  let cur = localStorage.getItem('citycare_theme') || 'dark';
  applyTheme(cur === 'dark' ? 'light' : 'dark');
});
select('#themeLight')?.addEventListener('click', ()=> applyTheme('light'));
select('#themeDark')?.addEventListener('click', ()=> applyTheme('dark'));
select('#themeAuto')?.addEventListener('click', ()=> applyTheme('auto'));

// -------- ENHANCED Rendering Functions - Added data-type for styling --------
function renderCatalog(list = inventory){
  const catalogEl = select('#catalog');
  catalogEl.innerHTML = '';
  list.forEach(item => {
    const div = document.createElement('div');
    div.className = 'pill';
    div.setAttribute('data-type', item.type); // Added for enhanced CSS styling
    div.innerHTML = `
      <img class="thumb" src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/420x300?text=${encodeURIComponent(item.name.substring(0,20))}'">
      <div class="info">
        <h4>${item.name}</h4>
        <p class="muted">${item.binary}</p>
        <div class="price">₹${item.price.toFixed(2)}</div>
      </div>
      <div class="binary">${item.binary}</div>
    `;
    div.addEventListener('click', ()=> openProductModal(item));
    catalogEl.appendChild(div);
  });
  select('#kpi-stock').textContent = inventory.length;
}

function renderFeatured() {
  const featuredGrid = select('#featuredGrid');
  featuredGrid.innerHTML = '';
  inventory.slice(0, 8).forEach(item => { // Show 8 featured items for better showcase
    const card = document.createElement('div');
    card.className = 'card featured-item';
    card.setAttribute('data-type', item.type);
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" style="width:100%;height:120px;object-fit:cover;border-radius:8px" loading="lazy">
      <div style="padding:10px">
        <div style="font-weight:700">${item.name.substring(0, 30)}${item.name.length > 30 ? '...' : ''}</div>
        <div class="muted" style="font-size:13px">${item.binary}</div>
        <div style="margin-top:6px;font-weight:600;color:var(--accent1)">₹${item.price.toFixed(2)}</div>
      </div>
    `;
    card.addEventListener('click', ()=> { showPage('catalog'); openProductModal(item); });
    featuredGrid.appendChild(card);
  });
}

function renderOrders(){
  const ordersList = select('#ordersList');
  ordersList.innerHTML = '';
  if(orders.length === 0){
    ordersList.classList.add('muted');
    ordersList.innerHTML = 'No orders yet.';
    return;
  }
  ordersList.classList.remove('muted');
  orders.forEach(o => {
    const div = document.createElement('div');
    div.className = 'order-card';
    div.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div><strong>${o.id}</strong><div class="muted" style="font-size:13px">${o.date}</div></div>
        <div style="text-align:right">
          <div style="font-weight:800">₹${o.totals.total.toFixed(2)}</div>
          <div style="margin-top:6px"><button class="btn outline small" data-receipt="${o.id}">Receipt</button></div>
        </div>
      </div>
      <div class="muted" style="margin-top:8px">Items: ${o.items.map(i=> `${i.name.substring(0,20)}×${i.qty}`).join(', ')}</div>
    `;
    div.querySelector('[data-receipt]')?.addEventListener('click', ()=> showReceipt(o));
    ordersList.appendChild(div);
  });
}

// -------- Modal and Product Detail --------
const modal = select('#modal');
const modalContent = select('#modalContent');
function openModal(html) {
  modalContent.innerHTML = html;
  modal.setAttribute('aria-hidden','false');
}
function closeModalFn() {
  modal.setAttribute('aria-hidden','true');
  modalContent.innerHTML = '';
}
select('#closeModal').addEventListener('click', closeModalFn);
modal.addEventListener('click', e => { if(e.target === modal) closeModalFn(); });

function openProductModal(item){
  openModal(`
    <div style="display:flex;gap:16px;align-items:flex-start">
      <img src="${item.img}" alt="${item.name}" style="width:280px;height:240px;object-fit:cover;border-radius:12px;${item.type === 'tablet' ? 'box-shadow: 0 8px 24px rgba(6,182,212,0.12);' : ''}">
      <div style="flex:1">
        <h3 style="margin:0 0 8px;font-size:18px">${item.name}</h3>
        <div class="muted" style="font-size:14px;margin-bottom:12px">${item.binary} • ${item.type.toUpperCase()}</div>
        <p style="margin:12px 0;font-size:14px">Premium quality medicine for quick relief. Available in blister packs.</p>
        <div style="margin-top:16px;display:flex;gap:12px;align-items:center">
          <div style="font-size:20px;font-weight:800;color:var(--accent1)">₹${item.price.toFixed(2)}</div>
          <input id="modalQty" type="number" min="1" value="1" class="input small" style="width:80px">
        </div>
        <div style="margin-top:20px;display:flex;gap:10px">
          <button id="modalAdd" class="btn primary">Add to Cart</button>
          <button id="modalCloseBtn" class="btn ghost">Close</button>
        </div>
      </div>
    </div>
  `);
  select('#modalCloseBtn').addEventListener('click', closeModalFn);
  select('#modalAdd').addEventListener('click', ()=>{
    const q = Math.max(1, parseInt(select('#modalQty').value||'1',10));
    addToCart(item, q);
    closeModalFn();
    showPage('catalog');
  });
}

// -------- Selection Panel --------
select('#binaryCode').addEventListener('input', ()=> {
  const code = select('#binaryCode').value.trim();
  const found = inventory.find(i => i.binary === code);
  select('#medName').value = found ? found.name : '';
  // Visual feedback for binary input
  select('#binaryCode').style.borderColor = found ? 'rgba(16,185,129,0.5)' : 'rgba(239,68,68,0.3)';
});

select('#addToCart').addEventListener('click', ()=>{
  const code = select('#binaryCode').value.trim();
  if(!code) return alert('Enter or select a binary code');
  let found = inventory.find(i => i.binary === code);
  if(!found){
    found = { binary:code, name: select('#medName').value || 'Custom Medicine', type:'other', price:25.0, img:'https://images.unsplash.com/photo-1584367369853-8b966cf2435a?q=80&w=420&h=300&fit=crop' };
  }
  const q = Math.max(1, parseInt(select('#quantity').value||'1',10));
  addToCart(found,q);
});

// -------- Cart Logic --------
function addToCart(item, qty=1){
  const existing = cart.find(c => c.binary === item.binary);
  if(existing) existing.qty += qty;
  else cart.push({...item, qty});
  renderCart();
}

function removeFromCart(binary){
  cart = cart.filter(c => c.binary !== binary);
  renderCart();
}

function renderCart(){
  const cartList = select('#cartList');
  cartList.innerHTML = '';
  if(cart.length === 0){
    cartList.innerHTML = '<div class="muted">Cart is empty</div>';
  } else {
    cart.forEach(it => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.setAttribute('data-type', it.type);
      div.innerHTML = `
        <img src="${it.img || 'https://via.placeholder.com/90x90?text=Med'}" alt="${it.name}" style="border-radius:8px">
        <div class="meta" style="flex:1">
          <h5 style="margin:0;font-size:14px">${it.name.substring(0, 35)}${it.name.length > 35 ? '...' : ''}</h5>
          <p class="muted" style="margin:4px 0 0;font-size:12px">Code: ${it.binary} • Qty: ${it.qty} • ${it.type}</p>
        </div>
        <div style="min-width:70px;text-align:right;font-weight:700;font-size:15px">₹${(it.price*it.qty).toFixed(2)}</div>
        <div><button class="btn outline small" style="background:rgba(239,68,68,0.1);color:#ef4444" data-remove="${it.binary}">×</button></div>
      `;
      div.querySelector('[data-remove]')?.addEventListener('click', ()=> removeFromCart(it.binary));
      cartList.appendChild(div);
    });
  }
  recomputeCart();
}

function recomputeCart(){
  const subtotal = cart.reduce((s,it)=> s + it.price * it.qty, 0);
  const tax = +(subtotal * 0.18);
  const total = subtotal + tax;
  select('#cSub').textContent = '₹' + subtotal.toFixed(2);
  select('#cTax').textContent = '₹' + tax.toFixed(2);
  select('#cTotal').textContent = '₹' + total.toFixed(2);
  select('#genQR').disabled = cart.length === 0;
  select('#clearCart').disabled = cart.length === 0;
  return {subtotal, tax, total};
}

select('#clearCart').addEventListener('click', ()=> {
  if(!confirm('Clear cart?')) return;
  cart = [];
  renderCart();
});

// -------- QR Pay --------
select('#genQR').addEventListener('click', ()=> {
  const bill = recomputeCart();
  const orderId = 'ORD-' + Date.now();
  const payload = `upi://pay?pa=citycare@upi&pn=CityCare+Hospitals&am=${(bill.total).toFixed(2)}&tn=${encodeURIComponent('Medicines Order #'+orderId)}&tr=${orderId}`;
  openModal(`
    <h3 style="margin:0 0 16px">Secure UPI Payment</h3>
    <div style="display:flex;gap:16px;align-items:center;margin-top:12px">
      <div id="qrcodeBox" style="padding:16px;background:var(--card);border-radius:12px"></div>
      <div style="flex:1">
        <div class="muted">Order ID: <strong>${orderId}</strong></div>
        <div style="margin-top:8px;font-size:24px;font-weight:800">₹${bill.total.toFixed(2)}</div>
        <div class="muted" style="margin-top:6px">Scan with any UPI app (Gpay, PhonePe, Paytm)</div>
        <div style="margin-top:16px;display:flex;gap:10px">
          <button id="payConfirm" class="btn primary">Confirm Payment</button>
          <button id="payCancel" class="btn ghost">Cancel</button>
        </div>
      </div>
    </div>
  `);
  setTimeout(()=> {
    const qrcodeBox = select("#qrcodeBox");
    qrcodeBox.innerHTML = '';
    new QRCode(qrcodeBox, { 
      text: payload, 
      width: 180, 
      height: 180, 
      colorDark: "#1e293b", 
      colorLight: "white",
      correctLevel: QRCode.CorrectLevel.M 
    });
    select('#payCancel').addEventListener('click', closeModalFn);
    select('#payConfirm').addEventListener('click', ()=> {
      const order = { id: orderId, date: new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}), items: JSON.parse(JSON.stringify(cart)), totals: bill };
      orders.unshift(order);
      servedCounter += cart.reduce((s,it)=> s+it.qty, 0);
      select('#kpi-served').textContent = servedCounter;
      cart = [];
      renderCart();
      renderOrders();
      showReceipt(order);
      closeModalFn();
      showPage('orders');
    });
  }, 50);
});

// -------- Receipt Print --------
function showReceipt(order){
  const lines = [
    '╔══════════════════════════════════════════════╗',
    '║        CITYCARE HOSPITALS - PHARMACY         ║',
    '╠══════════════════════════════════════════════╣',
    `║ Order ID : ${order.id.padEnd(32)} ║`,
    `║ Date     : ${order.date.padEnd(32)} ║`,
    '╠══════════════════════════════════════════════╣',
    '║                 ITEMS                        ║',
    ...order.items.map(it => `║ ${it.name.padEnd(25).substring(0,25)} x${it.qty.toString().padStart(2)} ₹${(it.price*it.qty).toFixed(2).padStart(8)} ║`),
    '╠══════════════════════════════════════════════╣',
    `║ Subtotal          : ₹${order.totals.subtotal.toFixed(2).padStart(8)} ║`,
    `║ GST (18%)         : ₹${order.totals.tax.toFixed(2).padStart(8)} ║`,
    '╠══════════════════════════════════════════════╣',
    `║ TOTAL             : ₹${order.totals.total.toFixed(2).padStart(8)} ║`,
    '╠══════════════════════════════════════════════╣',
    '║ Payment: RECEIVED via UPI                    ║',
    '║ Thank you! Collect at dispense window #3     ║',
    '╚══════════════════════════════════════════════╝'
  ].join('\n');
  
  openModal(`
    <div style="background:#0f172a;padding:20px;border-radius:12px">
      <pre style="white-space:pre-wrap;color:#e6eef6;font-family:monospace;font-size:12px;margin:0">${lines}</pre>
    </div>
    <div style="margin-top:16px;display:flex;gap:12px;justify-content:flex-end">
      <button id="modalPrint" class="btn primary">Print Receipt</button>
      <button id="modalClose" class="btn ghost">Close</button>
    </div>
  `);
  
  select('#modalPrint').addEventListener('click', ()=> {
    const w = window.open('','_blank','width=400,height=600');
    w.document.write(`
      <html><head><title>CityCare Receipt</title>
      <style>body{font-family:monospace;font-size:12px;margin:20px;background:#f8fafc;padding:20px;max-width:350px;}</style></head>
      <body>${lines.replace(/\n/g,'<br>')}</body></html>
    `);
    w.document.close();
    setTimeout(()=>w.print(), 250);
  });
  select('#modalClose').addEventListener('click', closeModalFn);
}

// -------- Inventory / Settings --------
select('#resetInventory')?.addEventListener('click', ()=> {
  if(!confirm('Reset demo inventory to original? (Includes all tablet images)')) return;
  inventory = JSON.parse(JSON.stringify(INVENTORY));
  renderCatalog();
  renderFeatured();
});

select('#applyServed')?.addEventListener('click', ()=> {
  const v = parseInt(select('#servedStart').value || '0', 10);
  servedCounter = Math.max(0, v);
  select('#kpi-served').textContent = servedCounter;
  alert('Served counter updated to ' + servedCounter);
});

// -------- Search & Filter - Enhanced with type highlighting --------
select('#searchInput')?.addEventListener('input', ()=> {
  const q = select('#searchInput').value.trim().toLowerCase();
  const type = select('#filterType')?.value || 'all';
  const list = inventory.filter(i => {
    const matchQ = i.name.toLowerCase().includes(q) || i.binary.includes(q);
    const matchType = (type === 'all') || (i.type === type);
    return matchQ && matchType;
  });
  renderCatalog(list);
  
  // Highlight search results
  if(q) {
    selectAll('.pill').forEach(pill => {
      const name = pill.querySelector('h4')?.textContent.toLowerCase();
      pill.style.outline = name && name.includes(q) ? '2px solid rgba(16,185,129,0.4)' : 'none';
    });
  }
});

select('#filterType')?.addEventListener('change', ()=> {
  select('#searchInput').dispatchEvent(new Event('input'));
  // Visual filter indicator
  const selectedType = select('#filterType').value;
  selectAll('.pill').forEach(pill => {
    pill.style.opacity = pill.dataset.type === selectedType || selectedType === 'all' ? '1' : '0.4';
  });
});

// -------- Footer and Misc --------
select('#printReceipt').addEventListener('click', ()=> window.print());
select('#helpBtn').addEventListener('click', ()=> {
  openModal(`<div style="max-width:500px">
    <h3 style="margin:0 0 16px">CityCare Kiosk Help</h3>
    <div style="line-height:1.6">
      <p><strong>🔍 Finding Medicines:</strong> Use search bar or binary code input. Click any tablet card to view details with premium images.</p>
      <p><strong>🛒 Shopping:</strong> Add items to cart via modal or selection panel. Tablets show enhanced cyan styling.</p>
      <p><strong>💳 Payment:</strong> Generate QR code for UPI payment. All transactions include 18% GST.</p>
      <p><strong>📄 Orders:</strong> View history and print formatted receipts. Served counter tracks patients.</p>
      <p style="margin-top:16px;font-size:12px;color:var(--muted)">Pro tip: Tablet medicines have special hover effects and optimized images from Unsplash/Pexels.</p>
    </div>
    <div style="margin-top:20px"><button class="btn ghost" id="closeHelp">Got it, close</button></div>
  </div>`);
  select('#closeHelp').addEventListener('click', closeModalFn);
});

select('#year').textContent = new Date().getFullYear();

// -------- Initialize UI --------
function init(){
  renderCatalog();
  renderFeatured();
  renderCart();
  renderOrders();
  select('#kpi-stock').textContent = inventory.length;
  select('#kpi-served').textContent = servedCounter;
  
  // Preload tablet images for smooth experience
  INVENTORY.filter(i => i.type === 'tablet').forEach(item => {
    const img = new Image();
    img.src = item.img;
  });
}
init();

window.addEventListener('hashchange', ()=> {
  const route = (location.hash && location.hash.replace('#','')) || 'home';
  showPage(route);
});

// Keyboard shortcuts with visual feedback
window.addEventListener('keydown', (e)=> {
  if(e.key === '1') { showPage('home'); e.preventDefault(); }
  if(e.key === '2') { showPage('catalog'); e.preventDefault(); }
  if(e.key === '3') { showPage('orders'); e.preventDefault(); }
  if(e.key === '4') { showPage('settings'); e.preventDefault(); }
  
  // Quick search focus
  if(e.key === '/') { select('#searchInput').focus(); e.preventDefault(); }
});
