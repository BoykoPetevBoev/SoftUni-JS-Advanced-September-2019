function solve() {
  const inputArea = document.querySelector("#exercise > textarea:nth-child(2)");
  const tbodyMenu = document.querySelector("#exercise > div > div > div > div > table > tbody");
  const outputArea = document.querySelector("#exercise > textarea:nth-child(5)");
  const checkbox = document.getElementsByTagName("input");
  checkbox[0].outerHTML = '<input type=\"checkbox\">';

  Object.values(document.getElementsByTagName('button')).map(btn => btn.addEventListener('click', function () {
    if (btn.textContent === 'Generate') {
      createElements();
    }
    else if (btn.textContent === 'Buy') {
      findMarkedObjects();
    }
  }))

  function createElements() {
    let furnitureArray = JSON.parse(inputArea.value);
    for (let obj of furnitureArray) {
      let tr = document.createElement('tr');
      let td = document.createElement('td');
      for (let i = 0; i < 5; i++) {
        tr.appendChild(td.cloneNode(true));
      }
      fillElements(tr, obj);
      tbodyMenu.appendChild(tr);
    }
  }
  function fillElements(tr, obj) {
    tr.children[0].innerHTML = `<img src=${obj['img']}>`;
    tr.children[1].innerHTML = `<p>${obj['name']}</p>`;
    tr.children[2].innerHTML = `<p>${obj['price']}</p>`;
    tr.children[3].innerHTML = `<p>${obj['decFactor']}</p>`;
    tr.children[4].innerHTML = `<input type="checkbox"/>`;
  }
  function findMarkedObjects() {
    outputArea.value = '';
    let myOrder = [];
    let totalPrice = 0;
    let decFactor = 0;
    let menuLength = tbodyMenu.children.length;
    let rows = tbodyMenu.children;
    for (let i = 0; i < menuLength; i++) {
      if (checkbox[i].checked === true) {
        let td = rows[i].children;
        addFurniture(td);
      }
    }
    printResult(myOrder, totalPrice, decFactor);
    function addFurniture(td) {
      myOrder.push(td[1].textContent.trim());
      totalPrice += Number(td[2].textContent);
      decFactor += Number(td[3].textContent);
    }
  }
  function printResult(myOrder, totalPrice, decFactor) {
    outputArea.value +=
      `Bought furniture: ${myOrder.join(', ')} \n` +
      `Total price: ${totalPrice.toFixed(2)} \n` +
      `Average decoration factor: ${(decFactor / myOrder.length)}\n`;
  }
}
