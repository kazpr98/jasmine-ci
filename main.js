function calculate(inputValue) {
    const expression = /\+|\-|\*|\//;
    const values = inputValue.split(expression);

    const numberA = parseInt(values[0]);
    const numberB = parseInt(values[1])

    const oper = inputValue.match(expression);
    
    if (Number.isNaN(numberA) || Number.isNaN(numberB) || oper === null) {
        updateResult('Operation not recognized');
        return;
    }

    const calculator = new Calculator();
    calculator.add(numberA);

    let result;
    
    switch (oper[0]) {
        case '+' :
            result = calculator.add(numberB); 
            break;
        case '-' :
            result = calculator.substract(numberB); 
            break;
        case '*' :
            result = calculator.multiply(numberB); 
            break;
        case '/' :
            result = calculator.divide(numberB); 
            break;
    }

    updateResult(result);
}

function updateResult(result) {
    const element = document.getElementById('result');

    if (element) {
        element.innerHTML = result;
    }
    
}

function showVersion() {
    const calculator = new Calculator();

    const element = document.getElementById('version');

    if (element) {
        calculator.version
        .then(function(version) {
            element.innerText = version;
        });
    }
}