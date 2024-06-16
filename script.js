// script.js
function calculate() {
    const checkboxes = document.querySelectorAll('.option');
    let result = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            result += parseInt(checkbox.value);
        }
    });

    document.getElementById('result').textContent = result;
}
