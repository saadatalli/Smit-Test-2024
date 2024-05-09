function calculateSavings() {
    var income = parseFloat(document.getElementById('income').value);
    var expenses = parseFloat(document.getElementById('expenses').value);

    if (isNaN(income) || isNaN(expenses)) {
        alert('Please enter valid numbers for income and expenses.');
        return;
    }


    var savings = income - expenses;
    var resultElement = document.getElementById('result');

    resultElement.innerHTML = '<p>Expenses: ' + expenses.toFixed(2) + '</p><p>Savings: ' + savings.toFixed(2) + '</p>';
}
