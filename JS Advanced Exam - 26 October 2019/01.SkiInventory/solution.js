function solve() {
   const addForm = document.getElementById('add-new')
   const availableProductsUl = document.querySelector("#products > ul");
   const totalPrice = document.querySelector("body > h1:nth-child(4)");
   const myProductUl = document.querySelector("#myProducts > ul");
   const buyBtn = document.querySelector("#myProducts > button");
   const filterBtn = document.querySelector("#products > div > button");

   let total = 0;

   buyBtn.addEventListener('click', clearMyList)
   filterBtn.addEventListener('click', filterMyList)

   addForm.children[4].addEventListener('click', function (e) {
      e.preventDefault();
      const inputName = addForm.children[1];
      const inputQuantity = addForm.children[2];
      const inputPrice = addForm.children[3];

      if (inputName.value !== '' && Number(inputQuantity.value) > 0 && Number(inputPrice.value) > 0) {

         const li = createElement('li');
         const span = createElement('span', inputName.value);
         const strongQ = createElement('strong', `Available: ${inputQuantity.value}`);
         const div = createElement('div');
         const strongP = createElement('strong', Number(inputPrice.value).toFixed(2));
         const btn = createElement('button', "Add to Client's List");

         btn.addEventListener('click', addProduct)

         div.appendChild(strongP);
         div.appendChild(btn)
         li.appendChild(span)
         li.appendChild(strongQ)
         li.appendChild(div)
         availableProductsUl.appendChild(li);
      }
      inputName.value = '';
      inputQuantity.value = '';
      inputPrice.value = '';
   })
   function addProduct(e) {
      const price = Number(this.parentNode.children[0].innerHTML);
      const name = this.parentNode.parentNode.children[0].innerHTML;
      const quantity = this.parentNode.parentNode.children[1];
      total += price;

      const li = createElement('li', name);
      const strong = createElement('strong', price.toFixed(2));

      totalPrice.innerHTML = `Total Price: ${total.toFixed(2)}`

      let products = Number(quantity.innerHTML.split(' ')[1]);
      products--;
      if (products === 0) {
         quantity.parentNode.remove();
      }
      else {
         quantity.innerHTML = `Available: ${products}`;
      }
      li.appendChild(strong);
      myProductUl.appendChild(li);
   }
   function clearMyList() {
      total = 0;
      myProductUl.innerHTML = '';
      totalPrice.innerHTML = 'Total Price: 00.00';
   }
   function createElement(element, text, value) {
      let e = document.createElement(element)
      if (text) {
         e.innerHTML = text;
      }
      if (value) {
         e.value = value;
      }
      return e;
   } 
   function filterMyList(){
      const input = document.getElementById('filter');
      Array.from(availableProductsUl.children).map(li => {
         if(!li.firstElementChild.innerHTML.includes(input.value)){
            li.style.display = 'none';
         }
         else{
            li.style.display = 'block';
         }
      })
      input.value = '';
   }
}
