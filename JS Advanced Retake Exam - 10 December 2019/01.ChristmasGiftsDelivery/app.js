function solution() {

    const addInput = document.querySelector("body > div > section:nth-child(1) > div > input[type=text]");
    const addButton = document.querySelector("body > div > section:nth-child(1) > div > button");
    const ulGiftList = document.querySelector("body > div > section:nth-child(2) > ul");
    const ulGiftSend = document.querySelector("body > div > section:nth-child(3) > ul");
    const ulGiftDiscard = document.querySelector("body > div > section:nth-child(4) > ul");

    addButton.addEventListener('click', addNewGift);

    function addNewGift(){
        const li = createNewelement('li', addInput.value);
        const sendBtn = createNewelement('button', 'Send', 'sendButton');
        const discardBtn = createNewelement('button', 'Discard', 'discardButton');

        li.classList.add('gift');

        sendBtn.addEventListener('click', moveGift);
        discardBtn.addEventListener('click', moveGift);

        appendElements(li, [sendBtn, discardBtn]);
        appendElements(ulGiftList, [li]);

        addInput.value = '';

        const result = Array.from(ulGiftList.children).sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));
        ulGiftList.innerHTML = '';
        result.map(li => ulGiftList.appendChild(li));
    }
    function moveGift(){
        const li = this.parentNode;
        const [btn1, btn2] = Array.from(li.children);
        li.removeChild(btn1);
        li.removeChild(btn2);
        if(this.innerHTML === 'Send'){
            ulGiftSend.appendChild(li);
        }
        if(this.innerHTML === 'Discard'){
            ulGiftDiscard.appendChild(li);
        }
    }
    function appendElements(parent, childrens){
        childrens.map(el => parent.appendChild(el));
    }
    function createNewelement(el, text, id){
        const element = document.createElement(el);
        if(text){
            element.innerHTML = text;
        }
        if(id){
            element.id = id;
        }
        return element;
    }
}
