// Daftar produk
const products = [
    { id: 1, name: "Scarf", price: 75000 , 
    description: "A warm and stylish scarf made from high-quality wool. Perfect for chilly days and adding a touch of elegance to your outfit.",
    image: "images/scarf.jpg" },
    { id: 2, name: "Snapback", price: 80000, 
    description: "A classic snapback hat with a comfortable fit and adjustable closure. Ideal for casual wear and sports activities.",
    image: "images/snapback.jpg" },
    { id: 3, name: "Bucket Hat", price: 60000, 
    description: "A trendy bucket hat with a wide brim and soft fabric. Perfect for outdoor activities and beach days.",
    image: "images/bucket-hat.jpg" },
    { id: 4, name: "Beanie", price: 50000, 
    description: "A cozy beanie made from premium wool. Keeps you warm during cold weather while maintaining a stylish look.",
    image: "images/beanie.jpg" },
    { id: 5, name: "Sunglasses", price: 90000, 
    description: "Stylish sunglasses with UV protection. Designed to shield your eyes from harmful rays while enhancing your look.",
    image: "images/sunglasses.jpg" },
    { id: 6, name: "Sneakers", price: 300000, 
    description: "Comfortable sneakers perfect for everyday wear or light exercise. Features durable soles and breathable materials.",
    image: "images/sneakers.jpg" }
];
// keranjang
let cart = [];

//render produk
const productlist = 
document.querySelector("product-list");

products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Rp ${product.price.toLocaleString()}</p>
        <button onclick="addToCart(${product.id})">tambah ke keranjang</button>
    `;
    productlist.appendChild(productCard);
});

//fungsi tambah ke keranjang
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
cart.push(product);
alert(`${product.name} telah ditambahkan ke keranjang.`);
updateCart();
}

//fungsi update keranjang
function updateCart() {
    const cartList = document.querySelector("#cart-list"); 
    cartList.innerHTML = "";
    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>Rp ${item.price.toLocaleString()}</p>
        `;
        cartList.appendChild(cartItem);
    });
}
// Inisialisasi tampilan keranjang
updateCart();
const cartList = document.querySelector("#cart-list"); 
cartList.innerHTML = "";
cart.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
        <h4>${item.name}</h4>
        <p>Rp ${item.price.toLocaleString()}</p>
    `;
    cartList.appendChild(cartItem);
});
