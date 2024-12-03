const d = document,
    itemBox = d.querySelectorAll('.item_box'), // the block of each product
    cartCont = d.getElementById('cart_content'), // the block of cart content
    cartItemsList = d.getElementById('cart_items'), // list of products in the shopping cart
    totalPriceElem = d.getElementById('total_price'); // the element with the total amount

// The function of setting the event handler
function addEvent(elem, type, handler) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handler, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, function() { handler.call(elem); });
    }
}

// Getting data from LocalStorage
function getCartData() {
    return JSON.parse(localStorage.getItem('cart')) || {}; // We return an empty object if there is no data
}

// Recording the data in LocalStorage
function setCartData(o) {
    localStorage.setItem('cart', JSON.stringify(o));
}

// Adding an item to the cart
function addToCart(e) {
    e.preventDefault();
    const cartData = getCartData(),
          parentBox = this.closest('.item_box'),
          itemId = this.getAttribute('data-id'),
          itemTitle = parentBox.querySelector('.item_title').textContent,
          itemPrice = parseFloat(parentBox.querySelector('.item_price').textContent);

    // If the product is already in the cart, we increase the quantity
    if (cartData[itemId]) {
        cartData[itemId].quantity += 1;
    } else {
        // Adding a new product to the cart
        cartData[itemId] = {
            title: itemTitle,
            price: itemPrice,
            quantity: 1
        };
    }

    setCartData(cartData); // Updating the data in LocalStorage
    renderCart(); // Updating the cart display
}

// Open the shopping cart and show the list of products
function renderCart() {
    const cartData = getCartData(),
          totalPrice = 0;

    cartItemsList.innerHTML = ''; // Clearing the cart

    // Checking if there are items in the cart
    if (Object.keys(cartData).length > 0) {
        for (const itemId in cartData) {
            const item = cartData[itemId];
            const itemRow = document.createElement('li');
            itemRow.innerHTML = `${item.title} — $${item.price} x ${item.quantity} 
                <button class="remove_item" data-id="${itemId}">delete</button>`;
            cartItemsList.appendChild(itemRow);
        }
        
        // Total price
        let totalCost = 0;
        for (const itemId in cartData) {
            const item = cartData[itemId];
            totalCost += item.price * item.quantity;
        }
        totalPriceElem.textContent = `Total: $${totalCost.toFixed(2)}`; // Update total amount
    } else {
        // If the shopping cart is empty
        cartItemsList.innerHTML = '<li>Cart empty</li>';
        totalPriceElem.textContent = 'Total: $0.00';
    }
}

// Using event delegation for removing items
cartItemsList.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove_item')) {
        removeFromCart.call(e.target, e);
    }
});

// Removing an item from the shopping cart
function removeFromCart(e) {
    e.preventDefault();
    const itemId = this.getAttribute('data-id'),
          cartData = getCartData();

    if (cartData[itemId]) {
        delete cartData[itemId]; // Removing an item from the shopping cart
    }

    setCartData(cartData); // Updating the data in LocalStorage
    renderCart(); // Updating the cart display
}

// Clearing the cart
function clearCart(e) {
    e.preventDefault(); // Preventing the default behavior of the button
    localStorage.removeItem('cart'); // Deleting the cart from LocalStorage
    renderCart(); // Updating the display
}

// Setting event handlers for each "Add to cart" button
for (let i = 0; i < itemBox.length; i++) {
    addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}

// Handlers for the "Checkout" and "Empty cart" buttons
addEvent(d.getElementById('checkout'), 'click', renderCart);
addEvent(d.getElementById('clear_cart'), 'click', clearCart);

// Initialize the cart display when the page loads
renderCart();

export { getCartData, setCartData, addToCart, removeFromCart, clearCart };
 
console.log(document.querySelector('.add_item'));

