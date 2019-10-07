function solve() {

    let points = 0;
    let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let index = 0;
    let question = document.getElementsByTagName('section');

    Array.from(document.querySelectorAll('.quiz-answer'))
        .map((x) => x.addEventListener('click', (answer) => {
            if (correctAnswers.includes(answer.target.innerHTML)) {
                points++;
            };
            question[index].style.display = 'none';
            index++;

            index !== 3
                ? question[index].style.display = 'block'
                : printResult(points);
        }));
    function printResult(points) {
        document.querySelector("#results").style.display = 'block';
        let text = '';
        points === 3
            ? text = 'You are recognized as top JavaScript fan!'
            : text = `You have ${points} right answers`;
        document.querySelector("#results > li > h1").textContent = text;
    }
}
