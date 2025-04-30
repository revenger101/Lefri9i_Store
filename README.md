# Lefri9i Store - Club Africain

Welcome to **Lefri9i Store**, the official online merchandise store for **Club Africain** fans. This e-commerce platform offers a modern, user-friendly experience to browse, purchase, and manage official Club Africain apparel and accessories.

---

## 🚀 Features

### 🎨 General
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **Club Africain Branding**: Consistent red (`#c8102e`, `#a00d24`) and gold (`#ffd700`) color scheme with the official Club Africain logo.
- **Fixed Footer**: Always stays at the bottom, includes copyright.
- **SEO Optimization**: Meta tags included for better search engine visibility.

---

## 📄 Pages

### 🏠 Home Page (`index.html`)
- Hero section with background image, welcome message, and “Shop Now” CTA.
- Smooth fade-in animation.

### 🛍️ Products Page (`products.html`)
- Grid of product cards with image, name, price, and “View Details” link.
- Hover effects (scale, shadow, "New" badge).
- Dynamic product loading via `api.js`.

### 📦 Product Details Page (`product.html`)
- Modern layout with:
  - Zoomable main image.
  - Thumbnail gallery with active state.
  - Title with red underline.
  - Price with discount support.
  - Specifications list with checkmarks.
  - Quantity selector and "Add to Cart" button.
  - "Back to Products" link.
  - Social sharing icons.
  - Customer reviews with star ratings.
  - “Official Merch” gold badge.

### 🛒 Cart Page (`cart.html`)
- Cart item list with remove buttons.
- Total price and animated "Checkout" button.
- Slide-in animation for cart items.

### 🔐 Login Page (`login.html`)
- Email/password form with styled inputs.
- Link to register page.

### 📝 Register Page (`register.html`)
- Name, email, password form.
- Link to login page.

---

## 🔗 Navigation

- **Sticky Navbar**: Red gradient, logo, and page links.
- **Login Button**: White background, red border, sliding hover effect, Font Awesome icon.
- **Cart Indicator**: Item count badge with hover effect.
- **Hover Effects**: Gold underline and transitions on nav links.

---

## ⚙️ Functionality

- **Cart Management**: Add, remove, update items (saved to `localStorage` via `cart.js`).
- **Authentication**: Session-based login/register via `sessionStorage` (`auth.js`).
- **Dynamic Products**: Fetched and rendered with `api.js`.
- **Quantity Selector**: Choose amount before adding to cart.

---

## 🛠 Technologies Used

### 📌 Frontend
- **HTML5** – Semantic structure.
- **CSS3** – Modular custom styles:
  - Fonts: Poppins (Google Fonts)
  - Effects: Animations (fadeIn, slideIn, gradients)
  - Responsive: Media queries

- **Bootstrap 5.3.3** – Navbar & grid system
- **Font Awesome 5.15.4 / 6.0.0-beta3** – Icons
- **JavaScript (ES6)**:
  - `main.js`: Cart count, auth logic
  - `api.js`: Load product data
  - `cart.js`: Cart behavior
  - `auth.js`: Login/register logic

---

## 🖼 Assets

- `assets/images/hero-bg.jpg`
- `assets/logos/logo-club-africain.svg`
- **Favicon**: Club Africain logo

---

## 🧰 Setup Instructions

### 📋 Prerequisites
- A modern browser (Chrome, Firefox, Safari)
- A local server (e.g., Python, Node.js)

### 🔧 Installation

1. **Clone the Repository**  
   ```bash
   git clone <https://github.com/revenger101/Lefri9i_Store.git>
