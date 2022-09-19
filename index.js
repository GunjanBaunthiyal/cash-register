const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const Ans = document.querySelector("#ans");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validate(){
    message.style.display = "none";  //hide-message

    if(billAmount.value > 0)  {
        if(cashGiven.value >= billAmount.value) {
            const amt = cashGiven.value - billAmount.value;
            calculateChange(amt);
            print(amt);
        } else {
            showMessage("The cash provided is less than bill amount");
        }
    }else {
        showMessage("Invalid Bill Amount");    
    }
});


function calculateChange(amt) {
    for(let i = 0; i < availableNotes.length; i++){
        const no = Math.trunc(amt / availableNotes[i]);
        amt %= availableNotes[i];
        noOfNotes[i].innerText = no; 
    }
}
function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function print(pt) {
    Ans.style.display = "block";
    Ans.innerText = pt;
}