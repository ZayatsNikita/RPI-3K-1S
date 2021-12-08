let form = document.getElementById('inputForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();

    let target = evt.target;

    let numA = target.numA.value;
    let numB = target.numB.value;
    let numC = target.numC.value;

    let numbers = [numA, numB, numC]

    if (!numbers.every(isEmpty) || !numbers.every(isNumber)) {
        getModal()
    } else {
        let numbersForWork = numbers.map(value => {
            return Number.parseFloat(value)
        })
        let answer = numbersForWork.reduce((a, b) => a + b) / numbersForWork.length
        target.result.value=answer;
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


function getModal() {
    let modal = document.getElementById('modalWindow')
    modal.style.display = 'block'
    var span = document.getElementById('close')
    span.onclick = function () {
        modal.style.display = 'none'
    }
}
