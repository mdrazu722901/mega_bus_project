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
// ==========================================================================================================
// =============================================================================================================
document.getElementById("EconomePlus ").addEventListener("click", function() {
    addEconomyCard(true);
})
document.getElementById("EconomeMinus ").addEventListener("click", function() {
    addEconomyCard(false);
})

function addEconomyCard(add) {
    const Economy = document.getElementById("EconomyInput ").value;
    const EconomyNumber = parseInt(Economy);
    let newValue = EconomyNumber;
    if (add == true) {
        newValue = EconomyNumber + 1;
    }
    if (add == false && newValue > 0) {
        newValue = EconomyNumber - 1;
    }
    document.getElementById("EconomyInput ").value = newValue;

    SubtotalAmount()


}
// =======================================================================================================
// =========================================================================================================
function SubtotalAmount() {
    const FirstClassCricket = getInputValue("FirstClassInput ");
    const EconomyCricket = getInputValue("EconomyInput ");
    const SubtotalAmount = FirstClassCricket * 150 + EconomyCricket * 100;
    document.getElementById("subtotal ").innerText = "$" + SubtotalAmount;
    const vat = SubtotalAmount * 0.1;
    document.getElementById("vat ").innerText = vat;
    const total = SubtotalAmount + vat;
    document.getElementById("total ").innerText = total;

}

function getInputValue(get) {
    const cricket = document.getElementById(get).value;
    const cricketNumber = parseInt(cricket);
    return cricketNumber;
}