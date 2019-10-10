function create(words) {
   const display = document.getElementById('content');
   for (let text of words) {
      createElements(text)
   }
   display.addEventListener('click', function (el){
       el.target.firstChild.style.display = 'block';
   })
   function createElements(text) {
      const p = document.createElement('p');
      const div = document.createElement('div');
      p.textContent = text;
      p.style.display = 'none';
      div.appendChild(p);
      display.appendChild(div);
   }
}
