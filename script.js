const plusBtn = document.getElementById("plus ");
plusBtn.addEventListener("click", function() {
    getCrackerNumber(true);
})
const minusBtn = document.getElementById("minus ");
minusBtn.addEventListener("click", function() {
    getCrackerNumber(false);
})

function getCrackerNumber(plus) {
    const inputBox = document.getElementById("FirstClassInput ").value;
    const inputNumber = parseInt(inputBox);
    let newValue = inputNumber;
    if (plus == true) {
        newValue = inputNumber + 1;
    }
    if (plus == false && newValue > 0) {
        newValue = inputNumber - 1;
    }

    document.getElementById("FirstClassInput ").value = newValue;
    SubtotalAmount()

}