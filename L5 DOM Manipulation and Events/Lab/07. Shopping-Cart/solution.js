//When the "Add" button is clicked, append the current product to the textarea 
//When the button "Checkout" is clicked, calculate the total money that you need to pay 
//list should contain only the unique products, separated by ", ". 
//after clicking over "Checkout" and every from above is done you should disable all buttons

function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);
   let cart = [];
   let output = document.getElementsByTagName('textarea')[0];

   function onClick(ev) {
      if(ev.target.tagName == 'BUTTON' && ev.target.classList.contains('add-product')) {
         const product = ev.target.parentNode.parentNode;
         const name = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent).toFixed(2);
         cart.push({
            name,
            price
         });
         output.value += `Added ${name} for ${price} to the cart.\n`
      }
   }
   function checkout() {
      const products = new Set();
      let total = 0;
      cart.forEach(p => products.add(p.name));
      cart.forEach(p => total += Number(p.price));
      let totalPrice = total.toFixed(2);
      output.value += `You bought ${[...products.keys()].join(', ')} for ${totalPrice}.`;
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(button => button.disabled= true);
   }
}

