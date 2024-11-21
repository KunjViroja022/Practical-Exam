let cart = [];
const cartItemsDiv = document.getElementById('cart-items');
const totalAmountDiv = document.getElementById('total-amount');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productDiv = button.parentElement;
        const productName = productDiv.dataset.name;
        const productPrice = parseFloat(productDiv.dataset.price);

        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

function updateCart() {
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
    });

    totalAmountDiv.textContent = `Total: $${total.toFixed(2)}`;
}
