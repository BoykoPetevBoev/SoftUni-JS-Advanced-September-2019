function mySolution() {
    const section = document.getElementById('inputSection');
    const pendingQuestion = document.getElementById('pendingQuestions');
    const openQuestions = document.getElementById('openQuestions');
    
    section.children[1].children[2].addEventListener('click', addQuestion);
    document.getElementById('outputSection').addEventListener('click', function questions(x) {
        if (x.target.innerHTML === 'Archive') {
            removeElement(x.target.parentNode.parentNode);
        }
        if (x.target.innerHTML === 'Open') {
            moveQuestion(x.target);
        }
        if (x.target.innerHTML === 'Reply') {
            x.target.parentNode.parentNode.lastElementChild.style.display = 'block';
            x.target.innerHTML = 'Back';
        }
        else if (x.target.innerHTML === 'Back') {
            x.target.parentNode.parentNode.lastElementChild.style.display = 'none';
            x.target.innerHTML = 'Reply';
        }
        if (x.target.innerHTML === 'Send') {
            if (x.target.parentNode.children[0].value != '') {
                postAnswer(x.target.parentNode.children);
            }
        }
    });
    function postAnswer(div) {
        let li = createElement('li');
        addText(li, div[0].value);
        div[0].value = '';
        createChild(div[2], [li]);
    }
    function moveQuestion(button) {
        openQuestions.appendChild(button.parentNode.parentNode);
        modifyCode(button.parentNode.parentNode);
    }
    function modifyCode(sectionQuestions) {
        sectionQuestions.classList.remove('pendingQuestion');
        sectionQuestions.classList.add('openQuestion');
        removeElement(sectionQuestions.lastElementChild.children[0]);
        removeElement(sectionQuestions.lastElementChild.children[0]);

        let btn1 = createElement('button');
        createClass(btn1, 'reply')
        addText(btn1, 'Reply')

        let div = createElement('div');
        createClass(div, 'replySection');
        div.style.display = 'none';

        let btn2 = createElement('button');
        createClass(btn2, 'replyButton');
        btn2.innerHTML = 'Send';

        let input = createElement('input');
        createClass(input, 'replyInput');
        input.type = 'text';
        input.placeholder = 'Reply to this question here...';

        let ol = createElement('ol');
        createClass(ol, 'reply')
        ol.type = '1';

        createChild(sectionQuestions.lastElementChild, [btn1]);
        createChild(div, [input, btn2, ol]);
        createChild(sectionQuestions, [div])
    }
    function addQuestion() {
        let [text, name] = getInformation();

        let mainDiv = createElement('div');
        createClass(mainDiv, 'pendingQuestion');

        let div = createElement('div');
        createClass(div, 'actions');

        let img = imgElement();
        let span = createElement('span');
        addText(span, name);

        let p = createElement('p');
        addText(p, text);

        let btn1 = createElement('button');
        createClass(btn1, 'archive');
        addText(btn1, 'Archive');

        let btn2 = createElement('button');
        createClass(btn2, 'open');
        addText(btn2, 'Open');

        createChild(div, [btn1, btn2]);
        createChild(mainDiv, [img, span, p, div]);
        createChild(pendingQuestion, [mainDiv]);
    }
    function removeElement(element) {
        element.remove();
    }
    function getInformation() {
        let nameInput = section.children[1].children[1].value;
        let textInput = section.children[0].value;
        if (nameInput === '') {
            nameInput = 'Anonymous';
        }
        section.children[1].children[1].value = '';
        section.children[0].value = '';
        return [textInput, nameInput];
    }
    function imgElement() {
        let img = createElement('img');
        img.src = './images/user.png';
        img.width = 32;
        img.height = 32;
        return img;
    }
    function createElement(element) {
        return document.createElement(element);
    }
    function createClass(element, className) {
        return element.classList.add(className);
    }
    function addText(element, text) {
        return element.innerHTML = text;
    }
    function createChild(parent, childrens) {
        for (let child of childrens) {
            parent.appendChild(child);
        }
    }
}
