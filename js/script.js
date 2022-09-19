//this variable creates a flashing cursor in the Name input field
const nameElement = document.getElementById('name');
nameElement.focus();


//Job Role Section
//created two variables targeting the 
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

//Selecting a speciic design allows the user only to chose from the corresponding options in the Color field

const shirtDesign = document.getElementById('design');
const colorOptions = document.querySelectorAll('[data-theme]');
colorOptions.disabled = true;

shirtDesign.addEventListener("change", e => {
    colorOptions.disabled = false;
    let eventValue = e.target.value;
    
    colorOptions.forEach (option => {

        if (option.dataset.theme === eventValue) {
            
            option.hidden = false;
         }  else {
            option.hidden = true;
         }
    })      
});

//Created two variables that select an activity and associated cost
//When a user selects an activity, the Total Cost is updated with the cost 

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

//When users select a payment option, only the selected option is visible and the other two are hidden

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
    } else {
        bitcoin.hidden = false;
        paypal.hidden = true;
        creditCard.hidden = true;
    }
});

//Notifies the user whethe

nameElement;
const email = document.getElementById('email');
activities;
const card = document.getElementById('cc-num');
const zipcode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');

let emailResult;
let activitiesResult;
let cardResult;
let zipcodeResult;
let cvvResult;

form.addEventListener("submit", e => {
//name validation
    function nameTest(){
    let nameInput = nameElement.value;
    let nameResult = /^[a-zA-z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameInput);
    return nameResult;
    };

    if (!nameTest()){
    e.preventDefault();
    nameElement.parentElement.classList.add('not-valid');
    nameElement.parentElement.classList.remove('valid');
    nameElement.nextElementSibling.style.display = 'block';
    } else {
        nameElement.parentElement.classList.add('valid');
        nameElement.parentElement.classList.remove('not-valid');
        nameElement.nextElementSibling.style.display = 'none';;
    };

//email validation
function emailTest(){
    let emailInput = email.value;
    emailResult = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput);
    return emailResult;
    };

    if (!emailTest()){
     e.preventDefault();
     email.parentElement.classList.add('not-valid');
     email.parentElement.classList.remove('valid');
     email.nextElementSibling.style.display = 'block';
      } else {
         email.parentElement.classList.add('valid');
         email.parentElement.classList.remove('not-valid');
         email.nextElementSibling.style.display = 'none';
        };
    
// activities validation
    function activitiesTest() {
    let activitiesInput = totalCost > 0;
    return activitiesInput;
    }; 

    if (!activitiesTest()){
        e.preventDefault();
        activities.parentElement.classList.add('not-valid')
        activities.parentElement.classList.remove('valid');
        activities.nextElementSibling.style.display = 'block';
         } else {
            activities.parentElement.classList.add('valid');
            activities.parentElement.classList.remove('not-valid');
            activities.nextElementSibling.style.display = 'none';
           };  
//card validation
    function cardTest () {
    let cardInput = card.value;
    cardResult = /^[0-9]{13,16}$/.test(cardInput);
    return cardResult;
    };

    if (!cardTest()){
        e.preventDefault();
        card.parentElement.classList.add('not-valid')
        card.parentElement.classList.remove('valid');
        card.nextElementSibling.style.display = 'block';
         } else {
            card.parentElement.classList.add('valid');
            card.parentElement.classList.remove('not-valid');
            card.nextElementSibling.style.display = 'none';
           }; 
//zipcode validation
    function zipTest() {
    let zipcodeInput = zipcode.value;
    zipcodeResult = /^\d{5}$/.test(zipcodeInput);
    return zipcodeResult;
    };

    if (!zipTest()){
        e.preventDefault();
        zipcode.parentElement.classList.add('not-valid')
        zipcode.parentElement.classList.remove('valid');
        zipcode.nextElementSibling.style.display = 'block';
         } else {
            zipcode.parentElement.classList.add('valid');
            zipcode.parentElement.classList.remove('not-valid');
            zipcode.nextElementSibling.style.display = 'none';
           };  
//cvv validation
    function cvvTest() {
    let cvvInput = cvv.value;
    cvvResult = /^\d{3}$/.test(cvvInput);
    return cvvResult;
    };

    if (!cvvTest()){
        e.preventDefault();
        cvv.parentElement.classList.add('not-valid')
        cvv.parentElement.classList.remove('valid');
        cvv.nextElementSibling.style.display = 'block';
         } else {
            cvv.parentElement.classList.add('valid');
            cvv.parentElement.classList.remove('not-valid');
            cvv.nextElementSibling.style.display = 'none';
           };    
});



//accessibility - making focus states more obvious to users
const activitiesCheckbox =  document.querySelectorAll('[type="checkbox"]');

for (let i = 0; i < activitiesCheckbox.length; i++) {
activitiesCheckbox[i].addEventListener("focus", e => {
let checkboxParent = e.target.parentElement;
checkboxParent.classList.add("focus");

});
activitiesCheckbox[i].addEventListener("blur", e => {
    checkboxParent = e.target.parentElement;
    checkboxParent.classList.remove("focus");
});
}


 
