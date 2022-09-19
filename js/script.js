//variable for the first form field to be in focus, with a flashing cursor
const nameElement = document.getElementById('name');
nameElement.focus();


//job role section
//when a change is detected display/hide the "text" field
const jobRole = document.getElementById('title');

const otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display = 'none';

jobRole.addEventListener("change", e => {
    if (e.target.value === "other"){
     otherJobRole.style.display = '';
     } else {
         otherJobRole.style.display = 'none';
     }
    });

//tshirt info section 

const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
shirtColor.disabled = true;


shirtDesign.addEventListener("change", e => {
    shirtColor.disabled = false;
    
    for (let i = 0; i < shirtColor.length; i++ ) {
        let eventValue = e.target.value;

        let jsPuns = document.querySelectorAll('[data-theme="js puns"]');
    
        let  heartJS = document.querySelectorAll('[data-theme="heart js"]');

         if (eventValue === jsPuns) {
            
            jsPuns[i].hidden = false;
            heartJS[i].hidden = true;
         }  else {
            jsPuns[i].hidden = true;
            heartJS[i].hidden = false;
         }

     }
    });

//register for activities section

const activities = document.getElementById('activities');
const total = document.getElementById('activities-cost');
let totalCost = 0;


activities.addEventListener("change", (e) => {
   let clicked = e.target;
   let dataCost = +clicked.getAttribute('data-cost');

    if (clicked.checked){
      totalCost += dataCost; 
    } else {
        totalCost -= dataCost;
    };
total.innerHTML = `Total: ${totalCost}`;

});

//payment info section

const payment = document.getElementById('payment');

const creditCard = document.getElementById('credit-card');

const paypal = document.getElementById('paypal');

const bitcoin = document.getElementById('bitcoin');

paypal.hidden = true;
bitcoin.hidden = true;

payment.setAttribute('value.children', 'value.children.selected'); 

payment.addEventListener("change", e => {
    let paymentClicked = e.target.value;
    if (paymentClicked === creditCard.id ){
        creditCard.hidden = false;
        paypal.hidden = true;
        bitcoin.hidden = true;
    } else if (paymentClicked === paypal.id) {
        paypal.hidden = false;
        creditCard.hidden = true;
        bitcoin.hidden = true;
    } else (paymentClicked === bitcoin.id)
    {
        bitcoin.hidden = false;
        paypal.hidden = true;
        creditCard.hidden = true;
    }
});

////form validation section

nameElement;
const email = document.getElementById('email');
activities;
const card = document.getElementById('cc-num');
const zipcode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');

function nameTest (){
    let nameInput = nameElement.value;
    let nameResult = /^[a-zA-z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameInput);
    return nameResult;
};

//email validation

let emailResult;

function emailTest(){
    let emailInput = email.value;
    emailResult = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput);
    return emailResult;
};

// activities 
let activitiesResult;

function activitiesTest(){
    let activitiesInput = totalCost > 0;
    return activitiesInput;
};

//card validation
let cardResult;

function cardTest(card){
    let cardInput = card.value;
    cardResult = /^[0-9]{13,16}$/.test(cardInput);
    return cardResult;
};


//zipcode validation
let zipcodeResult;

function zipcodeTest(zipcode){
    let zipcodeInput = zipcode.value;
    zipcodeResult = /^\d{5}$/.test(zipcodeInput);
    return zipcodeResult;
};


//cvv validation

let cvvResult;

function cvvTest(cvv){
    let cvvInput = cvv.value;
    cvvResult = /^\d{3}$/.test(cvvInput);
    return cvvResult;
};



//accessibility
const activitiesCheckbox =  document.querySelectorAll('[type="checkbox"]');

for (let i = 0; i < activitiesCheckbox.length; i++) {
activitiesCheckbox[1].addEventListener("focus", e => {

});
activitiesCheckbox[1].addEventListener("blur", e => {

});

}