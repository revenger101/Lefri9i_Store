function fetchProducts() {
    return fetch('data/products.json')
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            console.error('Error fetching products:', error);
            return [];
        });
}

function fetchProduct(id) {
    return fetch('data/products.json')
        .then(response => response.json())
        .then(data => data.find(product => product.id === parseInt(id)))
        .catch(error => {
            console.error('Error fetching product:', error);
            return null;
        });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('products.html')) {
        fetchProducts().then(products => {
            const productList = document.getElementById('product-list');
            products.forEach(product => {
                productList.innerHTML += `
                    <div class="product-card">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.price} TND</p>
                        <a href="product.html?id=${product.id}">View Details</a>
                    </div>
                `;
            });
        });
    }
});