
let form = document.getElementById('passportForm');

form.addEventListener('submit', handleSubmit);


function handleSubmit(evt) {
    evt.preventDefault();

    let target = evt.target;

    let seriesPassport = target.seriesPassport.value;
    let numOfPassport = target.numOfPassport.value;
    let numOfBlank = target.numOfBlank.value;
    let subject = target.subject.value;
    let code = target.code.value;
    let enteredCode = target.enteredCode.value;


    let elements = [
        seriesPassport,
        numOfPassport,
        numOfBlank,
        enteredCode,
        subject
    ]

    if (!elements.every(isEmpty) ||
        seriesPassport.length != 2 || isNumber(seriesPassport) ||
        numOfPassport.length != 7 || !isNumber(numOfPassport) ||
        numOfBlank.length != 7 || !isNumber(numOfBlank) ||
        enteredCode === code ||
        subject === 'Выберите предмет'

    ) {
        target.seriesPassport.value = 'Только две лат. буквы'
        target.seriesPassport.style.color = 'red'

        target.numOfPassport.value = '7 букв'
        target.numOfPassport.style.color = 'red'

        target.numOfBlank.value = '7 цифр'
        target.numOfBlank.style.color = 'red'

        target.enteredCode.value = 'Код с картинки не верен'
        target.enteredCode.style.color = 'red'

        setTimeout((x) => {
            target.seriesPassport.value = ''
            target.seriesPassport.style.color = 'black'


            target.numOfPassport.value = ''
            target.numOfPassport.style.color = 'black'

            target.numOfBlank.value = ''
            target.numOfBlank.style.color = 'black'

            target.enteredCode.value = ''
            target.enteredCode.style.color = 'black'
        }, 5000)


    }
    else {
        alert('Найдено');
    }
}

function isEmpty(value) {
    if ((value == null) || (value.length == 0)) {
        return false
    }
    return true
}


function isNumber(value) {
    if (!Number(value)) {
        return false
    }
    return true
}