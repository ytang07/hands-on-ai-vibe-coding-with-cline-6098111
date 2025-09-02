document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentNode.querySelector('h3').textContent;
            console.log(`${productName} added to cart!`);
            alert(`${productName} added to cart!`);
        });
    });
});
