function solve() {
   let input = document.getElementById('searchField');
   let body = document.querySelectorAll('tbody tr');

   if (input === null || body === null) {
      throw new Error('Missing HTML elements!');
   }

   document.getElementById('searchBtn').addEventListener('click', main);
   function main() {
      for (let tr of body) {
         tr.classList.remove('select');
      }
      if (input.value == '') {
         return '';
      }
      for (let tr of body) {
         if (tr.textContent.includes(input.value)) {
            tr.classList.add('select');
         }
      }
      input.value = '';
   }
}
