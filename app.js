//lorem text
const text = ['some text for generate', 'second para', 'third parag', 'fourth para', '5. p'];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = parseInt(amount.value); //without parse it will be string
    console.log(isNaN(value));

    if (isNaN(value) || value < 0 || value > 9) {
        result.innerHTML = '<p class="result">${text[0]}</p>';
    }
});