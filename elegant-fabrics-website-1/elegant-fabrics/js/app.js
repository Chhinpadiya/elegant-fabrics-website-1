/* ================================================================
   ELEGANT FABRICS — Complete App Logic
   ================================================================ */

'use strict';

/* ── Product Data ─────────────────────────────────────────── */
const PRODUCTS = [
  // Silk
  {id:1,name:'Royal Silk Brocade',category:'Silk',price:2400,originalPrice:2800,unit:'meter',badge:'featured',desc:'Luxurious brocade with intricate gold floral motifs. Perfect for bridal wear and formal occasions.',colors:['#8B3A52','#C9A84C','#2D2D2D','#F2C4CE'],gradient:'linear-gradient(135deg,#8B3A52 0%,#c9a84c 100%)',swatchGrad:'linear-gradient(135deg,#8B3A52,#c9a84c)'},
  {id:2,name:'Pure Crepe de Chine',category:'Silk',price:1850,originalPrice:null,unit:'meter',badge:'new',desc:'Soft, lightweight silk with a subtle sheen. Ideal for blouses, scarves and evening wear.',colors:['#FAF0F3','#E8D48A','#B5637A'],gradient:'linear-gradient(135deg,#fae8ed 0%,#e8d48a 100%)',swatchGrad:'linear-gradient(135deg,#fae8ed,#e8d48a)'},
  {id:3,name:'Mulberry Satin Silk',category:'Silk',price:3200,originalPrice:3800,unit:'meter',badge:'sale',desc:'Premium mulberry silk with a brilliant satin finish. Drapes beautifully for elegant evening gowns.',colors:['#2D2D2D','#8B3A52','#6B6B6B'],gradient:'linear-gradient(135deg,#1a1a2e 0%,#8B3A52 100%)',swatchGrad:'linear-gradient(135deg,#1a1a2e,#8B3A52)'},
  {id:4,name:'Dupioni Raw Silk',category:'Silk',price:1600,originalPrice:null,unit:'meter',badge:null,desc:'Textured dupioni with characteristic slubs. Creates structure in tailored garments.',colors:['#C9A84C','#8B3A52','#FAF7F2'],gradient:'linear-gradient(135deg,#c9a84c 0%,#8B3A52 80%)',swatchGrad:'linear-gradient(135deg,#c9a84c,#8B3A52)'},

  // Cotton
  {id:5,name:'Egyptian Cotton Lawn',category:'Cotton',price:420,originalPrice:null,unit:'meter',badge:'new',desc:'Ultra-fine cotton with 200-count thread density. Breathable and perfect for summer kurtas.',colors:['#FAF7F2','#E8D48A','#B5637A','#FAF0F3'],gradient:'linear-gradient(135deg,#f5f0e8 0%,#e8d48a 100%)',swatchGrad:'linear-gradient(135deg,#f5f0e8,#e8d48a)'},
  {id:6,name:'Handloom Khadi Cotton',category:'Cotton',price:380,originalPrice:420,unit:'meter',badge:'sale',desc:'Authentic hand-spun khadi with natural texture. Eco-friendly and sustainably sourced.',colors:['#FAF7F2','#E8E3DC','#C9A84C'],gradient:'linear-gradient(135deg,#faf7f2 0%,#e8e3dc 100%)',swatchGrad:'linear-gradient(135deg,#faf7f2,#c9a84c)'},
  {id:7,name:'Cotton Cambric Print',category:'Cotton',price:290,originalPrice:null,unit:'meter',badge:null,desc:'Fine cotton cambric with vibrant screen prints. Versatile fabric for casual and semi-formal wear.',colors:['#8B3A52','#F2C4CE','#C9A84C','#FAF7F2'],gradient:'linear-gradient(135deg,#8B3A52 0%,#F2C4CE 100%)',swatchGrad:'linear-gradient(135deg,#8B3A52,#F2C4CE)'},

  // Chiffon
  {id:8,name:'Georgette Chiffon',category:'Chiffon',price:680,originalPrice:null,unit:'meter',badge:'featured',desc:'Flowing georgette with gentle drape. Essential for dupattas, overlays and flowing gowns.',colors:['#B5637A','#FAF0F3','#8B3A52'],gradient:'linear-gradient(135deg,#B5637A 0%,#fae8ed 100%)',swatchGrad:'linear-gradient(135deg,#B5637A,#FAF0F3)'},
  {id:9,name:'French Chiffon Solid',category:'Chiffon',price:520,originalPrice:620,unit:'meter',badge:'sale',desc:'Ultra-sheer French chiffon in rich solid colors. Perfect for layering and evening wear.',colors:['#8B3A52','#2D2D2D','#C9A84C','#6B6B6B'],gradient:'linear-gradient(135deg,#8B3A52 0%,#2D2D2D 100%)',swatchGrad:'linear-gradient(135deg,#8B3A52,#2D2D2D)'},
  {id:10,name:'Pearl Chiffon',category:'Chiffon',price:750,originalPrice:null,unit:'meter',badge:'new',desc:'Lustrous pearl-finish chiffon with a soft texture. Adds elegance to any ensemble.',colors:['#FAF7F2','#E8D48A','#F2C4CE'],gradient:'linear-gradient(135deg,#faf7f2 0%,#E8D48A 100%)',swatchGrad:'linear-gradient(135deg,#faf7f2,#E8D48A)'},

  // Linen
  {id:11,name:'Belgian Linen',category:'Linen',price:960,originalPrice:null,unit:'meter',badge:null,desc:'Premium Belgian linen with natural slub texture. Timeless fabric for structured garments.',colors:['#E8E3DC','#C9A84C','#6B6B6B'],gradient:'linear-gradient(135deg,#e8e3dc 0%,#c9a84c 100%)',swatchGrad:'linear-gradient(135deg,#e8e3dc,#c9a84c)'},
  {id:12,name:'Linen Blend Tweed',category:'Linen',price:1100,originalPrice:1300,unit:'meter',badge:'sale',desc:'Textured linen-wool blend with subtle tweed pattern. Ideal for structured jackets and coats.',colors:['#2D2D2D','#E8E3DC','#8B3A52'],gradient:'linear-gradient(135deg,#2D2D2D 0%,#8B3A52 100%)',swatchGrad:'linear-gradient(135deg,#2D2D2D,#8B3A52)'},

  // Velvet
  {id:13,name:'Crushed Velvet',category:'Velvet',price:1400,originalPrice:null,unit:'meter',badge:'featured',desc:'Rich crushed velvet with dimensional texture. Opulent choice for evening wear and home décor.',colors:['#6B2C3E','#8B3A52','#2D2D2D','#C9A84C'],gradient:'linear-gradient(135deg,#6B2C3E 0%,#8B3A52 100%)',swatchGrad:'linear-gradient(135deg,#6B2C3E,#8B3A52)'},
  {id:14,name:'Korean Velvet',category:'Velvet',price:880,originalPrice:980,unit:'meter',badge:'sale',desc:'Soft Korean velvet with fine pile. Lightweight enough for day wear and flowing silhouettes.',colors:['#8B3A52','#2D2D2D','#C9A84C','#FAF0F3'],gradient:'linear-gradient(135deg,#8B3A52 0%,#c9a84c 80%)',swatchGrad:'linear-gradient(135deg,#8B3A52,#c9a84c)'},

  // Bridal
  {id:15,name:'Banarasi Lehenga Fabric',category:'Bridal',price:4500,originalPrice:5200,unit:'meter',badge:'featured',desc:'Authentic Banarasi with gold zari work on rich silk. The ultimate choice for bridal lehengas.',colors:['#C9A84C','#8B3A52','#2D2D2D'],gradient:'linear-gradient(135deg,#c9a84c 0%,#8B3A52 60%,#2D2D2D 100%)',swatchGrad:'linear-gradient(135deg,#c9a84c,#8B3A52)'},
  {id:16,name:'Bridal Net Embroidered',category:'Bridal',price:2200,originalPrice:null,unit:'meter',badge:'new',desc:'Delicate net fabric with heavy embroidery work. Perfect for bridal dupattas and overlays.',colors:['#FAF0F3','#F2C4CE','#C9A84C','#8B3A52'],gradient:'linear-gradient(135deg,#fae8ed 0%,#c9a84c 100%)',swatchGrad:'linear-gradient(135deg,#fae8ed,#c9a84c)'},
];

const CATEGORIES = [
  {name:'Silk',emoji:'✨',count:4,bg:'linear-gradient(135deg,#8B3A52,#c9a84c)'},
  {name:'Cotton',emoji:'🌿',count:3,bg:'linear-gradient(135deg,#e8e3dc,#c9a84c)'},
  {name:'Chiffon',emoji:'🌸',count:3,bg:'linear-gradient(135deg,#f2c4ce,#8B3A52)'},
  {name:'Linen',emoji:'🍃',count:2,bg:'linear-gradient(135deg,#c9a84c,#e8e3dc)'},
  {name:'Velvet',emoji:'💜',count:2,bg:'linear-gradient(135deg,#6B2C3E,#8B3A52)'},
  {name:'Bridal',emoji:'👰',count:2,bg:'linear-gradient(135deg,#c9a84c,#8B3A52)'},
];

const TESTIMONIALS = [
  {name:'Sara Ahmed',loc:'Karachi',text:'Absolutely stunning quality! The Banarasi fabric I ordered for my wedding was beyond my expectations. Every guest complimented the texture.',rating:5,initial:'SA'},
  {name:'Fatima Khan',loc:'Lahore',text:'My go-to fabric store! The chiffon collection is unmatched. Fast delivery and the fabrics look even better in person.',rating:5,initial:'FK'},
  {name:'Nadia Malik',loc:'Islamabad',text:'Ordered the silk brocade and I\'m completely in love. Customer service was excellent, WhatsApp ordering made it so easy!',rating:5,initial:'NM'},
  {name:'Ayesha Siddiqui',loc:'Dubai',text:'International shipping was smooth and the linen quality is top-notch. Will definitely order again for my boutique.',rating:5,initial:'AS'},
  {name:'Zara Hussain',loc:'Karachi',text:'The cotton lawn collection is perfect for Pakistani summers. Breathable, beautiful prints, and great value for money.',rating:5,initial:'ZH'},
  {name:'Meena Raza',loc:'London',text:'Even from abroad, the shopping experience was seamless. The velvet fabric arrived perfectly packaged and the quality is exceptional.',rating:5,initial:'MR'},
];

/* ── State ────────────────────────────────────────────────── */
const state = {
  cart: JSON.parse(localStorage.getItem('ef_cart') || '[]'),
  activeCategory: 'All',
  searchQuery: '',
  sort: 'default',
  modal: null,
};

/* ── Helpers ─────────────────────────────────────────────── */
const fmt = n => 'PKR ' + n.toLocaleString('en-PK');
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

function saveCart() {
  localStorage.setItem('ef_cart', JSON.stringify(state.cart));
}

function showToast(msg, type = 'success') {
  const tc = $('#toastContainer');
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  const icons = {success:'✅',cart:'🛒',info:'ℹ️'};
  t.innerHTML = `<span>${icons[type]||'✅'}</span><span>${msg}</span>`;
  tc.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

/* ── Navigation ──────────────────────────────────────────── */
function navigateTo(pageId, updateHistory = true) {
  $$('.page').forEach(p => p.classList.remove('active'));
  $$('.nav-links a, .mobile-nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === pageId);
  });
  const page = $(`#page-${pageId}`);
  if (page) {
    page.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  closeMobileNav();
  if (pageId === 'shop') renderShop();
}

function closeMobileNav() {
  $('#mobileNav').classList.remove('open');
  $('#hamburger').classList.remove('open');
}

/* ── Cart ────────────────────────────────────────────────── */
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = state.cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ id: productId, qty });
  }
  saveCart();
  updateCartUI();
  showToast(`${product.name} added to cart`, 'cart');
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  const total = state.cart.reduce((s, i) => s + i.qty, 0);
  $$('.cart-badge').forEach(b => {
    b.textContent = total;
    b.style.display = total > 0 ? 'flex' : 'none';
  });
  const subtotal = state.cart.reduce((s, i) => {
    const p = PRODUCTS.find(pr => pr.id === i.id);
    return p ? s + p.price * i.qty : s;
  }, 0);
  const sv = $('#cartSubtotalValue');
  if (sv) sv.textContent = fmt(subtotal);
}

function renderCartItems() {
  const body = $('#cartBody');
  if (!body) return;
  if (state.cart.length === 0) {
    body.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Your cart is empty</p><p style="font-size:.82rem;margin-top:.25rem">Discover our beautiful fabrics</p></div>`;
    return;
  }
  body.innerHTML = state.cart.map(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return '';
    return `
    <div class="cart-item">
      <div class="cart-item-thumb">
        <div class="pimg" style="position:relative;width:100%;height:100%;background:${p.gradient}"></div>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-cat">${p.category}</div>
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-controls">
          <button class="cqbtn" onclick="updateCartQty(${p.id},-1)">−</button>
          <span class="cqnum">${item.qty}</span>
          <button class="cqbtn" onclick="updateCartQty(${p.id},1)">+</button>
        </div>
      </div>
      <div class="cart-item-right">
        <div class="cart-item-price">${fmt(p.price * item.qty)}</div>
        <button class="ciremove" onclick="removeFromCart(${p.id})">✕ Remove</button>
      </div>
    </div>`;
  }).join('');
}

function openCart() {
  renderCartItems();
  $('#cartSidebar').classList.add('open');
  $('#cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  $('#cartSidebar').classList.remove('open');
  $('#cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── WhatsApp Order ──────────────────────────────────────── */
function whatsappOrder() {
  if (state.cart.length === 0) {
    showToast('Add items to cart first!', 'info');
    return;
  }
  const lines = state.cart.map(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    return p ? `• ${p.name} (${item.qty}m) — ${fmt(p.price * item.qty)}` : '';
  }).filter(Boolean);
  const total = state.cart.reduce((s, i) => {
    const p = PRODUCTS.find(pr => pr.id === i.id);
    return p ? s + p.price * i.qty : s;
  }, 0);
  const msg = encodeURIComponent(
    `Hello Elegant Fabrics! 🌸\n\nI'd like to place an order:\n\n${lines.join('\n')}\n\n*Total: ${fmt(total)}*\n\nPlease confirm availability and delivery details. Thank you!`
  );
  window.open(`https://wa.me/923001234567?text=${msg}`, '_blank');
}

function whatsappGeneral() {
  const msg = encodeURIComponent('Hello Elegant Fabrics! 🌸 I\'d like to inquire about your fabric collection. Could you please help me?');
  window.open(`https://wa.me/923001234567?text=${msg}`, '_blank');
}

/* ── Product Card ────────────────────────────────────────── */
function createProductCard(p) {
  const badge = p.badge ? `<span class="pbadge badge-${p.badge}">${p.badge}</span>` : '';
  const original = p.originalPrice ? `<span class="poriginal">${fmt(p.originalPrice)}</span>` : '';
  const swatches = p.colors.slice(0, 4).map(c =>
    `<span class="sdot" style="background:${c}"></span>`
  ).join('');
  return `
  <div class="product-card" onclick="openModal(${p.id})">
    <div class="product-card-img">
      <div class="pimg" style="background:${p.gradient}"></div>
      ${badge}
      <button class="pwish" onclick="event.stopPropagation();toggleWish(this)" title="Wishlist">♡</button>
    </div>
    <div class="product-card-body">
      <div class="pcat">${p.category}</div>
      <div class="pname">${p.name}</div>
      <div class="pdesc">${p.desc.slice(0, 70)}…</div>
      <div class="pmeta">
        <div class="pprice">
          <span class="pcurrent">${fmt(p.price)}</span>
          ${original}
          <span class="punit">/${p.unit}</span>
        </div>
        <button class="padd" onclick="event.stopPropagation();addToCart(${p.id})" title="Add to cart">+</button>
      </div>
      <div class="pswatches">${swatches}</div>
    </div>
  </div>`;
}

function toggleWish(btn) {
  btn.classList.toggle('wished');
  btn.textContent = btn.classList.contains('wished') ? '♥' : '♡';
  showToast(btn.classList.contains('wished') ? 'Added to wishlist ♥' : 'Removed from wishlist', 'info');
}

/* ── Modal ───────────────────────────────────────────────── */
function openModal(productId) {
  const p = PRODUCTS.find(pr => pr.id === productId);
  if (!p) return;
  state.modal = p;
  const original = p.originalPrice ? `<span class="poriginal" style="font-size:1rem;margin-left:.5rem">${fmt(p.originalPrice)}</span>` : '';
  const badge = p.badge ? `<span class="pbadge badge-${p.badge}" style="margin-bottom:.75rem;display:inline-block">${p.badge}</span>` : '';
  $('#modalContent').innerHTML = `
    <div class="mcat">${p.category}</div>
    ${badge}
    <div class="mname">${p.name}</div>
    <div class="mprice">${fmt(p.price)}<span class="punit" style="font-size:.9rem;font-weight:400">/${p.unit}</span>${original}</div>
    <div class="mdesc">${p.desc}</div>
    <div style="font-size:.82rem;color:var(--gray);margin-bottom:.5rem">Available colors:</div>
    <div class="pswatches" style="margin-bottom:.5rem">
      ${p.colors.map(c => `<span class="sdot" style="background:${c};width:24px;height:24px"></span>`).join('')}
    </div>
    <div class="modal-qty">
      <button class="qty-btn" onclick="modalQtyChange(-1)">−</button>
      <input class="qty-input" id="modalQty" type="number" value="1" min="1" max="100">
      <button class="qty-btn" onclick="modalQtyChange(1)">+</button>
      <span style="font-size:.82rem;color:var(--gray)">meters</span>
    </div>
    <div class="modal-actions">
      <button class="btn btn-primary" style="flex:1" onclick="modalAddToCart(${p.id})">🛒 Add to Cart</button>
      <button class="btn btn-whatsapp" onclick="whatsappProduct(${p.id})">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Order via WhatsApp
      </button>
    </div>`;
  $('#modalImage').style.background = p.gradient;
  $('#productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('#productModal').classList.remove('open');
  document.body.style.overflow = '';
  state.modal = null;
}

function modalQtyChange(delta) {
  const input = $('#modalQty');
  if (!input) return;
  input.value = Math.max(1, parseInt(input.value || 1) + delta);
}

function modalAddToCart(productId) {
  const qty = parseInt($('#modalQty')?.value || 1);
  addToCart(productId, qty);
  closeModal();
}

function whatsappProduct(productId) {
  const p = PRODUCTS.find(pr => pr.id === productId);
  if (!p) return;
  const qty = parseInt($('#modalQty')?.value || 1);
  const msg = encodeURIComponent(`Hello Elegant Fabrics! 🌸\n\nI'm interested in:\n\n*${p.name}*\nCategory: ${p.category}\nQuantity: ${qty} meter(s)\nPrice: ${fmt(p.price * qty)}\n\nPlease share availability and delivery details. Thank you!`);
  window.open(`https://wa.me/923001234567?text=${msg}`, '_blank');
}

/* ── Render Sections ─────────────────────────────────────── */
function renderCategories() {
  const grid = $('#categoryGrid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="category-card" onclick="shopByCategory('${c.name}')">
      <div class="cat-visual">
        <div class="cat-bg" style="background:${c.bg}">
          <span style="font-size:2.5rem">${c.emoji}</span>
        </div>
      </div>
      <div class="cat-label">
        <strong>${c.name}</strong>
        <span>${c.count} fabrics</span>
      </div>
    </div>`).join('');
}

function shopByCategory(cat) {
  state.activeCategory = cat;
  navigateTo('shop');
}

function renderFeatured() {
  const grid = $('#featuredGrid');
  if (!grid) return;
  const featured = PRODUCTS.filter(p => p.badge === 'featured' || p.badge === 'new').slice(0, 4);
  grid.innerHTML = featured.map(createProductCard).join('');
}

function renderTestimonials() {
  const track = $('#testimonialsTrack');
  if (!track) return;
  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="tcard">
      <div class="tstars">${'★'.repeat(t.rating)}</div>
      <div class="ttext">"${t.text}"</div>
      <div class="tauthor">
        <div class="tavatar">${t.initial}</div>
        <div>
          <div class="tname">${t.name}</div>
          <div class="tloc">📍 ${t.loc}</div>
        </div>
      </div>
    </div>`).join('');
}

/* ── Shop Page ───────────────────────────────────────────── */
function renderShop() {
  renderFilters();
  filterAndRender();
}

function renderFilters() {
  const bar = $('#filterBar');
  if (!bar) return;
  const cats = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  bar.innerHTML = cats.map(c => {
    const count = c === 'All' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === c).length;
    return `<button class="filter-pill ${state.activeCategory === c ? 'active' : ''}" onclick="setCategory('${c}')">${c} <span style="opacity:.7;font-size:.7rem">(${count})</span></button>`;
  }).join('');
}

function setCategory(cat) {
  state.activeCategory = cat;
  renderFilters();
  filterAndRender();
}

function filterAndRender() {
  let products = [...PRODUCTS];

  if (state.activeCategory !== 'All') {
    products = products.filter(p => p.category === state.activeCategory);
  }

  const q = state.searchQuery.toLowerCase().trim();
  if (q) {
    products = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
  }

  switch (state.sort) {
    case 'price-asc': products.sort((a, b) => a.price - b.price); break;
    case 'price-desc': products.sort((a, b) => b.price - a.price); break;
    case 'name': products.sort((a, b) => a.name.localeCompare(b.name)); break;
  }

  const grid = $('#shopGrid');
  const count = $('#resultCount');
  if (count) count.innerHTML = `Showing <strong>${products.length}</strong> fabric${products.length !== 1 ? 's' : ''}`;

  if (!grid) return;
  if (products.length === 0) {
    grid.innerHTML = `<div class="no-results" style="grid-column:1/-1"><div class="no-results-icon">🔍</div><h3>No fabrics found</h3><p>Try adjusting your search or filters</p></div>`;
    return;
  }
  grid.innerHTML = products.map(createProductCard).join('');
}

/* ── Contact Form ────────────────────────────────────────── */
function handleContactSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Message Sent ✅';
    showToast('Thank you! We\'ll be in touch soon.', 'success');
    e.target.reset();
    setTimeout(() => { btn.textContent = 'Send Message'; btn.disabled = false; }, 3000);
  }, 1500);
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  showToast('Subscribed! Welcome to Elegant Fabrics 🌸', 'success');
  e.target.reset();
}

/* ── Category Page Grids ─────────────────────────────────── */
function renderCategoryPage() {
  ['Silk','Cotton','Chiffon','Bridal'].forEach(cat => {
    const el = document.getElementById('cat' + cat);
    if (!el) return;
    const filtered = PRODUCTS.filter(p => p.category === cat);
    el.innerHTML = filtered.map(createProductCard).join('');
  });
}

/* ── Init ────────────────────────────────────────────────── */
function init() {
  // Render sections
  renderCategories();
  renderFeatured();
  renderTestimonials();
  renderCategoryPage();
  updateCartUI();

  // Promo banner
  $('#promoBannerClose')?.addEventListener('click', () => {
    $('#promoBanner').style.display = 'none';
    // adjust navbar top
    $('.navbar').style.top = '0';
  });

  // Navbar scroll
  window.addEventListener('scroll', () => {
    $('.navbar').classList.toggle('scrolled', window.scrollY > 10);
    $('#scrollTopBtn').classList.toggle('show', window.scrollY > 400);
  });

  // Hamburger
  $('#hamburger')?.addEventListener('click', () => {
    $('#hamburger').classList.toggle('open');
    $('#mobileNav').classList.toggle('open');
  });

  // Nav links (desktop + mobile)
  $$('[data-page]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(a.dataset.page);
    });
  });

  // Cart
  $('#cartBtn')?.addEventListener('click', openCart);
  $('#mobileCartBtn')?.addEventListener('click', openCart);
  $('#cartClose')?.addEventListener('click', closeCart);
  $('#cartOverlay')?.addEventListener('click', closeCart);

  // Modal close
  $('#modalClose')?.addEventListener('click', closeModal);
  $('#productModal')?.addEventListener('click', e => {
    if (e.target === $('#productModal')) closeModal();
  });

  // Search
  $('#shopSearch')?.addEventListener('input', e => {
    state.searchQuery = e.target.value;
    filterAndRender();
  });

  // Sort
  $('#shopSort')?.addEventListener('change', e => {
    state.sort = e.target.value;
    filterAndRender();
  });

  // Contact form
  $('#contactForm')?.addEventListener('submit', handleContactSubmit);

  // Newsletter
  $$('[data-newsletter]').forEach(f => f.addEventListener('submit', handleNewsletterSubmit));

  // Scroll top
  $('#scrollTopBtn')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // WhatsApp buttons
  $('#waCheckoutBtn')?.addEventListener('click', whatsappOrder);
  $('#waFloatBtn')?.addEventListener('click', whatsappGeneral);
  $$('[data-wa-general]').forEach(b => b.addEventListener('click', whatsappGeneral));

  // Start on home
  navigateTo('home', false);

  console.log('🌸 Elegant Fabrics — App initialized');
}

document.addEventListener('DOMContentLoaded', init);
