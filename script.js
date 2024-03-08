//LOGIN POP UP

let loginPopUp_button = document.querySelector('#login-pop-up')
loginPopUp_button.addEventListener('click', PopUpForm)

function PopUpForm(){
console.log("testing");
let form_pop = document.querySelector('.form-1').style.display="none";
if(form_pop == (document.querySelector('.form-1').style.display="none")){
    document.querySelector('.form-1').style.display="block";
}
}

//CANCEL BUTTON

let cancel_button = document.querySelector('#cancel-form')
cancel_button.addEventListener('click', cancelFormOne)

function cancelFormOne(){
    let FormOne = document.querySelector('.form-1').style.display="block";
if(FormOne == (document.querySelector('.form-1').style.display="block")){
    document.querySelector('.form-1').style.display="none";

}
}

let cancel_buttonTwo = document.querySelector('#cancel-form2')
cancel_buttonTwo.addEventListener('click', cancelFormTwo)

function cancelFormTwo(){
    let FormTwo = document.querySelector('.form-2').style.display="block";
if(FormTwo == (document.querySelector('.form-2').style.display="block")){
    document.querySelector('.form-2').style.display="none";
}
}

//SIGN IN EXCHANGE

let exchangeOne= document.querySelector('#sign-up')
exchangeOne.addEventListener('click',changeFormOne)

function changeFormOne(){
    let sign_up_btn = document.querySelector('#sign-up').style.display="block";
if(sign_up_btn == (document.querySelector('#sign-up').style.display="block")){
    document.querySelector('.form-1').style.display="none";
    document.querySelector('.form-2').style.display="block"
}
}

//SIGN UP EXCHANGE

let exchangeTwo= document.querySelector('#sign-in')
exchangeTwo.addEventListener('click',changeFormTwo)

function changeFormTwo(){
    let sign_in_btn = document.querySelector('#sign-in').style.display="block";
if(sign_in_btn == (document.querySelector('#sign-in').style.display="block")){
    document.querySelector('.form-1').style.display="block";
    document.querySelector('.form-2').style.display="none"
}
}

//CART POP_UP

let cart_popper= document.querySelector('.cart-btn')
cart_popper.addEventListener('click', cartPop)

function cartPop(){
    let cartBtn=document.querySelector('.cart-list').style.display="none";
if(cartBtn==(document.querySelector('.cart-list').style.display="none")){
    document.querySelector('.cart-list').style.display="block";
}
}

//CART HIDE

let basketRemover= document.querySelector('#cancel-basket')
basketRemover.addEventListener('click', hideBasket)

function hideBasket(){
    let basket = document.querySelector('.cart-list').style.display="block";
if (basket == (document.querySelector('.cart-list').style.display="block")){
        document.querySelector('.cart-list').style.display="none";
}
}