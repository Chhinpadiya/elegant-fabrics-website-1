# 🌸 Elegant Fabrics — Premium Women's Fabric Store

A complete, production-ready e-commerce website for a women's fabric store.
Built with pure HTML5, CSS3 (custom design system), and vanilla JavaScript — no frameworks required.

---

## 📁 Folder Structure

```
elegant-fabrics/
├── index.html          # Main SPA — all 4 pages in one file
├── css/
│   └── style.css       # Complete design system (1,100+ lines)
├── js/
│   └── app.js          # All app logic — products, cart, routing (530+ lines)
├── robots.txt          # SEO: search engine crawling rules
├── sitemap.xml         # SEO: sitemap for Google indexing
└── README.md           # This file
```

---

## ✨ Features

| Feature | Details |
|---|---|
| **4 Pages** | Home, Shop, Categories, Contact |
| **SPA Routing** | Instant page switching without reload |
| **Product Catalog** | 16 premium fabrics across 6 categories |
| **Shopping Cart** | Sidebar cart with quantity controls, persists via localStorage |
| **WhatsApp Ordering** | One-click order via WhatsApp with full cart details |
| **Category Filters** | Filter by Silk, Cotton, Chiffon, Linen, Velvet, Bridal |
| **Search** | Real-time search across product names, categories, descriptions |
| **Sort** | Sort by price (asc/desc) or name |
| **Product Modal** | Quick-view with quantity selector and WhatsApp direct order |
| **Wishlist** | Toggle wishlist on any product card |
| **Testimonials** | Scrollable customer reviews section |
| **Contact Form** | With subject selector and form validation |
| **Newsletter** | Email subscription with toast confirmation |
| **Toast Notifications** | Animated feedback for all user actions |
| **Promo Banner** | Dismissible top banner for promotions |
| **Responsive** | Fully mobile-first, works on all screen sizes |
| **SEO Optimised** | Meta tags, OG tags, semantic HTML, sitemap, robots.txt |
| **Accessibility** | ARIA labels, focus styles, keyboard navigation |

---

## 🎨 Design System

| Token | Value | Use |
|---|---|---|
| `--rose` | `#8B3A52` | Primary brand colour |
| `--rose-dark` | `#6B2C3E` | Hover states |
| `--blush` | `#F2C4CE` | Accent / backgrounds |
| `--ivory` | `#FAF7F2` | Page background |
| `--gold` | `#C9A84C` | Category labels, accents |
| `--charcoal` | `#2D2D2D` | Body text |
| Font Display | Playfair Display | Headings, prices |
| Font Body | Inter | UI, descriptions |

---

## 🚀 How to Run

**Locally (simplest):**
```bash
# Just open index.html in any browser — no server required
open index.html
```

**With a local server (recommended for best experience):**
```bash
# Python
python3 -m http.server 8000

# Node.js (npx)
npx serve .

# VS Code: install "Live Server" extension, right-click index.html → Open with Live Server
```
Then visit `http://localhost:8000`

---

## 📱 WhatsApp Integration

Update the phone number in `js/app.js` — search for `923001234567` and replace with your WhatsApp Business number (digits only, with country code, no + or spaces):

```js
// Line ~91 and ~97 in app.js
window.open(`https://wa.me/YOUR_NUMBER_HERE?text=${msg}`, '_blank');
```

---

## 🛍️ Adding Products

Products are defined in the `PRODUCTS` array at the top of `js/app.js`. Each product has:

```js
{
  id: 17,                          // Unique number
  name: 'New Fabric Name',
  category: 'Silk',                // Must match a category name
  price: 1500,                     // Price in PKR
  originalPrice: 1800,             // Set null if no sale
  unit: 'meter',
  badge: 'new',                    // 'new' | 'sale' | 'featured' | null
  desc: 'Description here.',
  colors: ['#hex1', '#hex2'],      // Swatch colours (up to 4)
  gradient: 'linear-gradient(…)',  // Card background
  swatchGrad: 'linear-gradient(…)',
}
```

---

## 🌐 Deployment

Deploy to any static host:

- **Netlify**: Drag & drop the `elegant-fabrics/` folder at netlify.com/drop
- **Vercel**: `vercel --prod` from the folder
- **GitHub Pages**: Push to a repo → Settings → Pages → Deploy from main branch
- **cPanel / shared hosting**: Upload via FTP to `public_html/`

---

## 📞 Store Contact (Update These)

In `index.html`, update:
- Phone: `+92 300 123 4567`
- Email: `hello@elegantfabrics.pk`
- Address: `Shop 14, Fabric Market, Clifton, Karachi`
- WhatsApp number in `app.js`

---

*Built with ❤️ for Elegant Fabrics — Pakistan's finest fabric destination*
