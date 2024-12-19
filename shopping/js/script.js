const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

// Get form elements
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('login-error-message');


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;
        // Your login logic
    });



    // Simulate a simple login validation (for demonstration purposes)
    if (email === "user@example.com" && password === "password123") {
        alert('Login successful!');
        // Redirect to another page (e.g., dashboard) after successful login
        window.location.href = 'dashboard.html'; // Change this to your desired page
    } else {
        errorMessage.textContent = "Invalid email or password. Please try again.";
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for the "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const product = {
                name: this.getAttribute('data-name'),
                price: parseFloat(this.getAttribute('data-price')),
                img: this.getAttribute('data-img'),
                quantity: 1
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProductIndex = cart.findIndex(item => item.name === product.name);
            if (existingProductIndex > -1) {
                cart[existingProductIndex].quantity += 1;
            } else {
                cart.push(product);
            }

            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Product added to cart!');
        });
    });
  

    document.addEventListener('DOMContentLoaded', function () {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItemsContainer = document.getElementById('cart-items');
        cart.forEach(item => {
            console.log(item.img); // Check if this is a valid path
        });
        
        
    
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<tr><td colspan="5">Your cart is empty.</td></tr>';
        } else {
            cart.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><img src="${item.img}" alt="${item.name}"></td>
                    <td>${item.name}</td>
                    <td>$${item.price}</td>
                    <td><input type="number" value="${item.quantity}" min="1" class="quantity" data-name="${item.name}"></td>
                    <td><a href="#" class="remove-item" data-name="${item.name}"><i class="fa-solid fa-rectangle-xmark"></i></a></td>
                `;
                cartItemsContainer.appendChild(row);
            });
        }
    });

    

    // Handle quantity changes and update in localStorage
    document.querySelectorAll('.quantity').forEach(input => {
        input.addEventListener('change', function() {
            const name = this.getAttribute('data-name');
            const newQuantity = parseInt(this.value);

            if (newQuantity > 0) {
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                const productIndex = cart.findIndex(item => item.name === name);
                if (productIndex > -1) {
                    cart[productIndex].quantity = newQuantity;
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
            }
        });
    });

    // Handle item removal from the cart
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const name = this.getAttribute('data-name');

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart = cart.filter(item => item.name !== name);
            localStorage.setItem('cart', JSON.stringify(cart));

            // Refresh the cart page
            location.reload();
        });
    });
});


