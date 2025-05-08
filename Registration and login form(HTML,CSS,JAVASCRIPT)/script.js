const signUpButton=document.getElementById("signUpButton");
const signInButton=document.getElementById("signInButton");
const signInFrom=document.getElementById("signIn");
const signUpFrom=document.getElementById("signUp");
signUpButton.addEventListener("click",function(){
    signInFrom.style.display="none";
    signUpFrom.style.display="block";
})
signInButton.addEventListener("click",function(){
    signInFrom.style.display="block";
    signUpFrom.style.display="none";
})