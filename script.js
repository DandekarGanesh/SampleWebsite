const products = [
    { id: 1, name: "Wireless Earbuds", image: "https://via.placeholder.com/250", price: "$50" },
    { id: 2, name: "Smart Watch", image: "https://via.placeholder.com/250", price: "$100" },
    { id: 3, name: "Bluetooth Speaker", image: "https://via.placeholder.com/250", price: "$30" },
    { id: 4, name: "Gaming Mouse", image: "https://via.placeholder.com/250", price: "$25" },
    { id: 5, name: "4K Monitor", image: "https://via.placeholder.com/250", price: "$200" },
];

let cartCount = 0;

function loadProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

function toggleCart() {
    alert(`You have ${cartCount} items in your cart.`);
}

document.addEventListener("DOMContentLoaded", loadProducts);
