document.addEventListener('DOMContentLoaded', (event) => {
    const cartMessage = document.getElementById('cart-message');
    const cartActions = document.getElementById('cart-actions');

    // Function for incrementing quantity
    function incrementButton(event) {
        const button = event.target;
        const cardBody = button.closest(".item1");
        const quantityItem = cardBody.querySelector('input[type="number"]');
        let quantity = parseInt(quantityItem.value, 10) || 0;
        quantity += 1;
        quantityItem.value = quantity;
    }

    // Function for decrementing quantity
    function decrementButton(event) {
        const button = event.target;
        const cardBody = button.closest(".item1");
        const quantityItem = cardBody.querySelector('input[type="number"]');
        let quantity = parseInt(quantityItem.value, 10) || 0;
        if (quantity > 1) {
            quantity -= 1;
            quantityItem.value = quantity;
        }
    }

    // Attach increment event listeners
    const incrementButtons = document.querySelectorAll(".fa-plus");
    incrementButtons.forEach(button => {
        button.addEventListener("click", incrementButton);
    });

    // Attach decrement event listeners
    const decrementButtons = document.querySelectorAll(".fa-minus");
    decrementButtons.forEach(button => {
        button.addEventListener("click", decrementButton);
    });

    // Event listener for add to cart button
    function addToCartButton(event) {
        const addToCartButton = event.target;
        const cardBody = addToCartButton.closest(".item1");
        const quantityInput = cardBody.querySelector('input[type="number"]');
        let quantity = parseInt(quantityInput.value, 10) || 0;
        alert("Item added successfully")

        // Update cart message
        cartMessage.textContent = `You have ${quantity} item(s) in your cart.`;

        // Optionally update cart actions
    }
    function update(event){
        const update = event.target;
        const cardBody = update.closest(".row1");
        document.addEventListener('DOMContentLoaded', (event) => {
            const cartMessage = document.getElementById('cart-message');
            const cartActions = document.getElementById('cart-actions');
        
            // Function for incrementing quantity
            function incrementButton(event) {
                const button = event.target;
                const cardBody = button.closest(".item1");
                const quantityItem = cardBody.querySelector('input[type="number"]');
                let quantity = parseInt(quantityItem.value, 10) || 0;
                quantity += 1;
                quantityItem.value = quantity;
            }
        
            // Function for decrementing quantity
            function decrementButton(event) {
                const button = event.target;
                const cardBody = button.closest(".item1");
                const quantityItem = cardBody.querySelector('input[type="number"]');
                let quantity = parseInt(quantityItem.value, 10) || 0;
                if (quantity > 1) {
                    quantity -= 1;
                    quantityItem.value = quantity;
                }
            }
        
            // Attach increment event listeners
            const incrementButtons = document.querySelectorAll(".fa-plus");
            incrementButtons.forEach(button => {
                button.addEventListener("click", incrementButton);
            });
        
            // Attach decrement event listeners
            const decrementButtons = document.querySelectorAll(".fa-minus");
            decrementButtons.forEach(button => {
                button.addEventListener("click", decrementButton);
            });
        
            // Event listener for add to cart button
            function addToCartButton(event) {
                const addToCartButton = event.target;
                const cardBody = addToCartButton.closest(".item1");
                const quantityInput = cardBody.querySelector('input[type="number"]');
                let quantity = parseInt(quantityInput.value, 10) || 0;
                alert("Item added successfully");

                 update(event);
                // Update cart message
                cartMessage.textContent = `You have ${quantity} item(s) in your cart.`;
        
                // Optionally update cart actions
            }
            function update(event){
                const cardBody = event.target.closest(".row1");
                cartActions.innerHTML = `
                <button><a href="cart.html">VIEW CART</a></button>
                <button><a href="checkout.html">CHECKOUT</a></button>
            `;
        
            }
        
            // Attach event listener for the "Add to Cart" button
            const addToCartButtons = document.querySelectorAll('button.add-to-cart');
            addToCartButtons.forEach(button => {
                button.addEventListener("click", addToCartButton, update);
            });
        });
        
        cartActions.innerHTML = `
        <button><a href="cart.html">VIEW CART</a></button>
        <button><a href="checkout.html">CHECKOUT</a></button>
    `;

    }

    // Attach event listener for the "Add to Cart" button
    const addToCartButtons = document.querySelectorAll('button.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener("click", addToCartButton, update);
    });
});
