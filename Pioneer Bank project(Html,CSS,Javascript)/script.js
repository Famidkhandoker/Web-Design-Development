//login button event handler
const loginBtn=document.getElementById("login");
loginBtn.addEventListener("click",function(){
    
    const loginArea=document.getElementById("login-area");
    loginArea.style.display="none";           //display show korbe na
    const transactionArea=document.getElementById("transaction-area")
    transactionArea.style.display="block";    //display show korbe
});

//diposit button event handler

const depositBtn=document.getElementById("addDeposit");
depositBtn.addEventListener("click",function(){
    //const depositAmount=document.getElementById("depositAmount").value;
    //const depositNumber=parseFloat(depositAmount);
    const depositNumber=getInputNumber("depositAmount");

//     const currentDeposit=document.getElementById("currentDeposit").innerText;
//     const currentDepositNumber=parseFloat(currentDeposit);
//     const totalDeposit=depositNumber+currentDepositNumber;

// document.getElementById("currentDeposit").innerText=totalDeposit;

// const currentBalance =document.getElementById("currentBalance").innerText;
// const currentBalanceNumber=parseFloat(currentBalance);
// const totalBalance=depositNumber + currentBalanceNumber;
// document.getElementById("currentBalance").innerText = totalBalance;


updateSpanText("currentDeposit",depositNumber);
updateSpanText("currentBalance",depositNumber);

document.getElementById("depositAmount").value ="";
});

// function updateSpanText(id,depositNumber){
//     const currentBalance =document.getElementById(id).innerText;
// const currentBalanceNumber=parseFloat(currentBalance);
// const totalBalance=depositNumber + currentBalanceNumber;
// document.getElementById(id).innerText = totalBalance;


//withdraw button event handler
const withdrawBtn =document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click",function(){
   //const withdrawAmount=document.getElementById("withdrawAmount").value;
  //const withdrawNumber=parseFloat(withdrawAmount);
  const withdrawNumber=getInputNumber("withdrawAmount");
  //console.log(withdrawNumber);
  updateSpanText("currentWithdraw",withdrawNumber);
  updateSpanText("currentBalance",-1 * withdrawNumber);//-1* means subtruction hobe


  document.getElementById("withdrawAmount").value ="";
});

function getInputNumber(id){
    // const withdrawAmount=document.getElementById(id).value;
    // const withdrawNumber=parseFloat(withdrawAmount);
    // return withdrawNumber;
    const amount=document.getElementById(id).value;
    const amountNumber=parseFloat(amount);
    return amountNumber;
}
function updateSpanText(id,depositNumber){
    const current =document.getElementById(id).innerText;
const currentNumber=parseFloat(current);
const totalAmount=depositNumber + currentNumber;
document.getElementById(id).innerText = totalAmount;
}


