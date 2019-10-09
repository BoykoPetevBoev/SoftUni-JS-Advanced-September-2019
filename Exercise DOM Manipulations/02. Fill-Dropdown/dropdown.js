function addItem() {
    const select = document.getElementById('menu');
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');
    
    if(select === null || inputText === null || inputValue === null){
        throw new Error('Error!');
    }
    const option = document.createElement('option');

    option.textContent = inputText.value;
    option.value = inputValue.value;

    select.appendChild(option);

    inputText.value = '';
    inputValue.value = '';
}