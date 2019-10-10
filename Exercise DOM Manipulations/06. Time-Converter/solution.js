function attachEventsListeners() {
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', function () {
        let days = Number(daysInput.value);
        convertDays(days);
    })
    document.getElementById('hoursBtn').addEventListener('click', function () {
        let days = Number(hoursInput.value) / 24;
        convertDays(days);
    })
    document.getElementById('minutesBtn').addEventListener('click', function () {
        let days = Number(minutesInput.value) / 1440;
        convertDays(days);
    })
    document.getElementById('secondsBtn').addEventListener('click', function () {
        let days = Number(secondsInput.value) / 86400;
        convertDays(days);
    })
    function convertDays(days) {
        const convDays = {
            'days': days,
            'hours': days * 24,
            'minutes': days * 1440,
            'seconds': days * 86400
        }
        printResult(convDays);
    }
    function printResult(obj){
        daysInput.value = obj['days'];
        hoursInput.value = obj['hours'];
        minutesInput.value = obj['minutes'];
        secondsInput.value = obj['seconds'];
    }
}
