document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('product.html')) {
        loadProductDetails();
    } else if (window.location.pathname.includes('cart.html')) {
        loadCart();
    }
});

function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    fetchProduct(productId).then(product => {
        const productInfo = document.getElementById('product-info');
        productInfo.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>${product.price} TND</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">Add to Cart</button>
        `;
    });
}

function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('Product added to cart!');
}

function loadCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" style="width: 50px;">
                <p>${item.name}</p>
                <p>${item.price} TND x ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
    });

    cartTotal.textContent = total.toFixed(2);
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (!sessionStorage.getItem('user')) {
            alert('Please login to checkout!');
            window.location.href = 'login.html';
        } else {
            alert('Checkout successful!');
            localStorage.removeItem('cart');
            loadCart();
            updateCartCount();
        }
    });
}

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartCount();
}