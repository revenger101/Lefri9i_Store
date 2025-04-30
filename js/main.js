document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateAuthLink();
});

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('#cart-count').forEach(el => {
        el.textContent = cartCount;
    });
}

function updateAuthLink() {
    const user = sessionStorage.getItem('user');
    const authLink = document.getElementById('auth-link');
    if (user) {
        authLink.innerHTML = `
            <a class="nav-link btn-nav" href="#" onclick="logout()">
                Logout
            </a>
        `;
    } else {
        authLink.innerHTML = `
            <a class="nav-link btn-nav" href="login.html">
                Login
            </a>
        `;
    }
}

function logout() {
    sessionStorage.removeItem('user');
    updateAuthLink();
    window.location.href = 'index.html';
}