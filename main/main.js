var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elLink = document.querySelector(".link");
console.log(elForm);


elForm.addEventListener("submit", function(evt) {
    evt.preventDefault()

    var Input = elInput.value.trim()

    var Plus = "t.me/" + Input

    if(elLink.textContent = Plus) {
        elLink.textContent = Plus
    }
});