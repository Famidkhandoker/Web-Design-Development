//initializing some values
let totalAttempts=5;
let attempts=0;
let totalWons=0;
let totallost=0;



//finding elements
const form=document.querySelector("form");
const cardBody=document.querySelector(".card-body");
const guessingNumber=form.querySelector("#guessingNumber");
const checkButton=form.querySelector("#check");
const resultText=cardBody.querySelector(".resultText");
const lostWonMessage=document.createElement("P");
const remainingAttempts =cardBody.querySelector(".remainingAttempts");


form.addEventListener("submit",function(event){
    event.preventDefault();
   
    attempts++;
    if(attempts>5)
    {
        guessingNumber.disabled=true;
        checkButton.disabled=true;
    }
    else{
        checkResult(guessingNumber.value);
        remainingAttempts.innerHTML=`Remaining attempts: ${totalAttempts - attempts}`;
    }

    guessingNumber.value="";  //reset
});

function checkResult(guessingNumber)
{
   const randomNumber=getRandomNumber(5);
   if(guessingNumber==randomNumber)
   {
    resultText.innerHTML=`You have Won;random number was:${randomNumber}`;
    totalWons++;
   }
   else{
    resultText.innerHTML=`You have lost;random number was:${randomNumber}`;
    totallost++;
   }
   lostWonMessage.innerHTML=`Won:${totalWons},Lost:${totallost}`;
   lostWonMessage.classList.add("large-text");
   cardBody.appendChild(lostWonMessage);
   

}

function getRandomNumber(limit){
    return  randomNumber=Math.floor(Math.random()*limit)+1;
}
