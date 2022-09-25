const billAmount = document.querySelector("#billAmt");
const NextBTN = document.querySelector("#nextBtn");

const cashGivenDiv = document.querySelector(".cashGivenInput");
const cashGiven = document.querySelector("#cashGiven");
const checkButton = document.querySelector("#checkBtn");

const message = document.querySelector(".errorMsg");
const cashReturnDiv = document.querySelector(".changeReturn");
const noOfNotes = document.querySelectorAll(".noOfNotes");
const Ans = document.querySelector("#ans");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


//when bill amount is entered and next button is clicked
NextBTN.addEventListener('click', ()=>{
    //hideError();
    if(Number(billAmount.value)>0){
        NextBTN.style.display = "none";
        cashGivenDiv.style.display = "block";

    }
    else{
        showMessage("Enter valid bill amount");
    }
})

//when check button is clicked
checkButton.addEventListener("click", function validate(){
    message.style.display = "none";  //hide-message

    if(billAmount.value > 0 && cashGiven.value > 0)  {
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


/*
check button react code
checkBtn.addEventListener('click', ()=>{
    clearNoOfNotes();
    hideError();
    //error handling
    let billAmtValue= Number(billAmt.value);
    let cashGivenValue= Number(cashGiven.value);

    if(billAmtValue>0 && cashGivenValue>0){

        if(!Number.isInteger(cashGivenValue)){
            showError("Enter valid amount in cash given field");
            return;
        }
        if(billAmtValue > cashGivenValue){
            showError("Cash is less than bill, please enter right amount");
            return;
        }
        //if input valid calculate no. of notes
        calculateNotes(billAmtValue, cashGivenValue);
    } else{
        showError("Enter valid bill amount and cash given to continue");
        }
})
*/