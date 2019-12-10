function solution() {

    const addInput = document.querySelector("body > div > section:nth-child(1) > div > input[type=text]");
    const addButton = document.querySelector("body > div > section:nth-child(1) > div > button");
    const ulGiftList = document.querySelector("body > div > section:nth-child(2) > ul");
    const ulGiftSend = document.querySelector("body > div > section:nth-child(3) > ul");
    const ulGiftDiscard = document.querySelector("body > div > section:nth-child(4) > ul");

    addButton.addEventListener('click', addNewGift);

    function addNewGift() {
        const li = document.createElement('li');
        const sendBtn = document.createElement('button');
        const discardBtn = document.createElement('button');
        li.innerHTML = addInput.value
        sendBtn.innerHTML = 'Send';
        discardBtn.innerHTML = 'Discard'
        sendBtn.id = 'sendButton'
        discardBtn.id = 'discardButton'

        li.classList.add('gift');

        sendBtn.addEventListener('click', moveGift);
        discardBtn.addEventListener('click', moveGift);

        li.appendChild(sendBtn)
        li.appendChild(discardBtn)
        ulGiftList.appendChild(li)

        addInput.value = '';

        const result = Array.from(ulGiftList.children).sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));
        ulGiftList.innerHTML = '';
        result.map(li => ulGiftList.appendChild(li));
    }
}
