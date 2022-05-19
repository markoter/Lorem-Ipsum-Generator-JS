//lorem text
const text = ['some text for generate', 'second para', 'third parag', 'fourth para', '5. p'];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = parseInt(amount.value); //without parse it will be string
    console.log(isNaN(value));
    const random = Math.floor(Math.random() * text.length);

    if (isNaN(value) || value < 0 || value > 9) {
        console.log(random);
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    }
    else {
        let tempText = text.slice(0, value);
        result.innerHTML = `<p class ="result">${tempText}</p>`;
    }
});