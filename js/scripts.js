console.log("scripts.js loaded successfully!");

const products = {
    "Burgers": [
        { name: "Cheeseburger", image: "assets/burger.jpg", description: "Delicious cheeseburger with fresh ingredients.", model: "assets/burger.glb" },
        { name: "Veggie Burger", image: "assets/veggie-burger.jpg", description: "Healthy veggie burger with organic veggies.", model: "assets/veggie-burger.glb" }
    ],
    "Pizzas": [
        { name: "Margherita Pizza", image: "assets/pizza.jpg", description: "Classic margherita with fresh basil and cheese.", model: "assets/pizza.glb" },
        { name: "Pepperoni Pizza", image: "assets/pepperoni.jpg", description: "Spicy pepperoni pizza with rich cheese.", model: "assets/pepperoni.glb" }
    ]
};

document.addEventListener("DOMContentLoaded", function () {
    loadCategories();
});

function loadCategories() {
    console.log("Loading categories...");

    const categorySelect = document.getElementById("category");
    if (!categorySelect) {
        console.error("Category dropdown not found!");
        return;
    }

    categorySelect.innerHTML = '<option value="">-- Choose a Category --</option>'; // Reset options

    Object.keys(products).forEach(category => {
        let option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    console.log("Categories loaded:", Object.keys(products));
}

function loadProducts() {
    console.log("Loading products...");

    const category = document.getElementById("category").value;
    const container = document.getElementById("product-container");

    if (!container) {
        console.error("Product container not found!");
        return;
    }

    container.innerHTML = ""; // Clear previous products

    if (!category) {
        console.warn("No category selected!");
        return;
    }

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

    console.log(`Products for ${category} loaded.`);
}

function viewAR(model) {
    console.log(`Opening AR model: ${model}`);
    window.location.href = `ar.html?model=${model}`;
}
