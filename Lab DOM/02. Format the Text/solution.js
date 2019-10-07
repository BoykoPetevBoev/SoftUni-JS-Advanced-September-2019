function solve() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    let textArr = input.innerHTML.split('.');
    textArr.pop();

    for(let i = 0; i < textArr.length; i += 3) {
      let text = textArr.slice(i, i + 3).join('.');
      let p = document.createElement("p");
      p.innerHTML = text + '.';
      output.appendChild(p);
    }
}