// document.getElementById("phone-increase ").addEventListener("click",function(){
//     const caseInput=document.getElementById("phone-count");
//     const caseCount=parseInt(caseInput.value)
//    const caseNewCount= caseCount+1;
//    caseInput.value=caseNewCount;
//    const caseTotal=caseNewCount*1278;
//    document.getElementById("phone-total").innerText= '$'+ caseTotal;
 
// });

// document.getElementById("phone-decrease").addEventListener("click",function(){
//     const caseInput=document.getElementById("phone-count");
//      const caseCount= parseInt(caseInput.value);
//      const caseNewCount=caseCount-1;
//      caseInput.value=caseNewCount;
//      const caseTotal=caseNewCount*1278;
//      document.getElementById("phone-total").innerText= '$' + caseTotal;
     
// });


// document.getElementById("case-increase").addEventListener("click",function(){
//     const caseInput=document.getElementById("case-count");
//     const caseCount=parseInt(caseInput.value)
//    const caseNewCount= caseCount+1;
//    caseInput.value=caseNewCount;
//    const caseTotal=caseNewCount*59;
//    document.getElementById("case-total").innerText= '$'+ caseTotal;
   
// });

// document.getElementById("case-decrease").addEventListener("click",function(){
//     const caseInput=document.getElementById("case-count");
//      const caseCount= parseInt(caseInput.value);
//      const caseNewCount=caseCount-1;
//      caseInput.value=caseNewCount;
//      const caseTotal=caseNewCount*59;
//      document.getElementById("case-total").innerText= '$' + caseTotal;

// });




//on the otherhand

function handleProductChange(product,isIncrease){
    // const productInput=document.getElementById(product +'-count');
     //const productCount= parseInt(productInput.value);
     const productCount=getInputValue(product);
    //  const caseNewCount=caseCount-1;
    let productNewCount=productCount;
    if(isIncrease==true){
        productNewCount=productCount+1;
    }
    if(isIncrease==false && productCount>0){
        productNewCount=productCount-1;
    }
     //productInput.value=productNewCount;
     document.getElementById(product+'-count').value=productNewCount;
     //const caseTotal=caseNewCount*59;
     let productTotal = 0;
     if(product=='phone'){
        productTotal=productNewCount * 1278;
     }
     if(product=='case'){
        productTotal=productNewCount * 59;
     }
     document.getElementById(product +'-total').innerText= '$' + productTotal;
     calculateTotal();
}

function calculateTotal(){

    const phoneCount=getInputValue("phone");
    const caseCount=getInputValue("case");
    

    // const phoneInput=document.getElementById("phone-count");
    // const phoneCount=parseInt(phoneInput.value);

    // const caseInput=document.getElementById("case-count");
    // const caseCount=parseInt(caseInput.value);

    const totalPrice =phoneCount*1278 +caseCount*59;
    document.getElementById("total-price").innerText='$'+totalPrice;

    const tax= Math.round(totalPrice*0.1);
    document.getElementById("tax-amount").innerText='$'+ tax;
    const grandTotal=totalPrice + tax;
    document.getElementById("grand-total").innerText='$'+grandTotal;

}
function getInputValue(product){
    const productInput=document.getElementById(product +'-count');
    const productCount=parseInt(productInput.value);
    return productCount;
}

// function handleProductChange(isIncrease){
//     const caseInput=document.getElementById("case-count");
//      const caseCount= parseInt(caseInput.value);
//     //  const caseNewCount=caseCount-1;
//     let caseNewCount=caseCount;
//     if(isIncrease==true){
//         caseNewCount=caseCount+1;
//     }
//     if(isIncrease==false && caseCount>0){
//         caseNewCount=caseCount-1;
//     }
//      caseInput.value=caseNewCount;
//      const caseTotal=caseNewCount*59;
//      document.getElementById("case-total").innerText= '$' + caseTotal;
     
// }


// function handlePhoneChange(isIncrease){
//     const phoneInput=document.getElementById("phone-count");
//      const phoneCount= parseInt(phoneInput.value);
//     //  const caseNewCount=caseCount-1;
//     let phoneNewCount=phoneCount;
//     if(isIncrease==true){
//         phoneNewCount=phoneCount+1;
//     }
//     if(isIncrease==false && phoneCount>0){
//         phoneNewCount=phoneCount-1;
//     }
//      phoneInput.value=phoneNewCount;
//      const phoneTotal=phoneNewCount*1278;
//      document.getElementById("phone-total").innerText= '$' + phoneTotal;
     
// }












// //on the otherhand
// document.getElementById("case-increase").addEventListener("click",function(){
//   handleProductChange(true);
// });


// document.getElementById("case-decrease").addEventListener("click",function(){
//     handleProductChange(false);
// });
// function handleProductChange(isIncrease){
//     const caseInput=document.getElementById("case-count");
//      const caseCount= parseInt(caseInput.value);
//     //  const caseNewCount=caseCount-1;
//     let caseNewCount=caseCount;
//     if(isIncrease==true){
//         caseNewCount=caseCount+1;
//     }
//     if(isIncrease==false && caseCount>0){
//         caseNewCount=caseCount-1;
//     }
//      caseInput.value=caseNewCount;
//      const caseTotal=caseNewCount*59;
//      document.getElementById("case-total").innerText= '$' + caseTotal;
     
// }

// document.getElementById("phone-increase").addEventListener("click",function(){
//   handlePhoneChange(true);
// });


// document.getElementById("phone-decrease").addEventListener("click",function(){
//     handlePhoneChange(false);
// });
// function handlePhoneChange(isIncrease){
//     const phoneInput=document.getElementById("phone-count");
//      const phoneCount= parseInt(phoneInput.value);
//     //  const phoneNewCount=caseCount-1;
//     let phoneNewCount=phoneCount;
//     if(isIncrease==true){
//         phoneNewCount=phoneCount+1;
//     }
//     if(isIncrease==false && phoneCount>0){
//         phoneNewCount=phoneCount-1;
//     }
//      phoneInput.value=phoneNewCount;
//      const phoneTotal=phoneNewCount*1278;
//      document.getElementById("phone-total").innerText= '$' + phoneTotal;
     
// }







