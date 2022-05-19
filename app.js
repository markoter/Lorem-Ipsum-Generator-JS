//lorem text
const text = ['some text for generate'];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const value = parseInt(amount.value); //without parse it will be string
    console.log(value);
})