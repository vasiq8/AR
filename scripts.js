const products = {
    "Burgers": [
        { name: "Cheeseburger", image: "assets/burger.jpg", description: "Delicious cheeseburger with fresh ingredients.", model: "burger.glb" },
        { name: "Veggie Burger", image: "assets/veggie-burger.jpg", description: "Healthy veggie burger with organic veggies.", model: "veggie-burger.glb" }
    ],
    "Pizzas": [
        { name: "Margherita Pizza", image: "assets/pizza.jpg", description: "Classic margherita with fresh basil and cheese.", model: "pizza.glb" },
        { name: "Pepperoni Pizza", image: "assets/pepperoni.jpg", description: "Spicy pepperoni pizza with rich cheese.", model: "pepperoni.glb" }
    ]
};

function loadCategories() {
    const categorySelect = document.getElementById("category");
    categorySelect.innerHTML = '<option value="">-- Choose a Category --</option>'; // Reset options

    Object.keys(products).forEach(category => {
        let option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

function loadProducts() {
    const category = document.getElementById("category").value;
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    if (!category) return;

    products[category].forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name} <button onclick="viewAR('${product.model}')">View in AR</button></h3>
            <p>${product.description}</p>
        `;
        container.appendChild(productDiv);
    });
}

function viewAR(model) {
    window.location.href = `ar.html?model=${model}`;
}

window.onload = loadCategories;