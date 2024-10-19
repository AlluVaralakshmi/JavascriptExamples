function performOperation(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    if (operation === 'add') {
        result = num1 + num2;
        document.getElementById('result').innerText = `The sum is: ${result}`;
    } else if (operation === 'multiply') {
        result = num1 * num2;
        document.getElementById('result').innerText = `The product is: ${result}`;
    }
}
