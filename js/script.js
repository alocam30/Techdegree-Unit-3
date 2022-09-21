//This variable creates a flashing cursor in the Name input field when the page first loads
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

//Selecting a speciic design allows the user only to chose from the 3 corresponding color options

const shirtDesign = document.getElementById('design');
let color = document.getElementById('color');
color.disabled = true;

let colorSelect = color.children;
let eventValue;


shirtDesign.addEventListener("change", e => {
    color.disabled = false;
     eventValue = e.target.value;
    
    for (let i = 1; i < colorSelect.length; i++) {

    if (eventValue === colorSelect[i].getAttribute('data-theme')) {
        colorSelect[i].hidden = false;
        colorSelect[i].selected = true;
    } else {
        colorSelect[i].hidden = true;
        colorSelect[i].selected = false;
    }
}
});;

//Created two variables that select an activity and associated cost
//When a user selects an activity, the Total Cost is updated

let activities = document.getElementById('activities');
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

//Makes it obvious to the user whether input form is valid or invalid.
//Displays a green checkmark if value meets the criteria, and displays a red triangle if it does not.

const email = document.getElementById('email');
const card = document.getElementById('cc-num');
const zipcode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');


form.addEventListener("submit", e => {
//name validation form
    function nameTest(nameElement){
    let nameInput = nameElement.value;
    let nameResult = /^[a-zA-z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameInput); //returns T/F
    return nameResult;
    };

//email validation form
function emailTest(email){
    let emailInput = email.value;
    let emailResult = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput);
    return emailResult;
    };

    
// activities validation form
    function activitiesTest(activities) {
    let activitiesInput = totalCost > 0;
    return activitiesInput;
    }; 

//credit card validation form
    function cardTest (card) {
    let cardInput = card.value;
    let cardResult = /^[0-9]{13,16}$/.test(cardInput);
    return cardResult;
    };   

//zipcode validation form
    function zipTest(zipcode) {
    let zipcodeInput = zipcode.value;
    zipcodeResult = /^\d{5}$/.test(zipcodeInput);
    return zipcodeResult;
    };

    
//cvv validation form
    function cvvTest(cvv) {
    let cvvInput = cvv.value;
    cvvResult = /^\d{3}$/.test(cvvInput);
    return cvvResult;
    };



    if (!nameTest(nameElement)){
        e.preventDefault();
        nameElement.parentElement.classList.add('not-valid');
        nameElement.parentElement.classList.remove('valid');
        nameElement.nextElementSibling.style.display = 'block';
        } else {
            nameElement.parentElement.classList.add('valid');
            nameElement.parentElement.classList.remove('not-valid');
            nameElement.nextElementSibling.style.display = 'none';
            nameElement.classList.remove('error-border');
        };

    if (!emailTest(email)){
        e.preventDefault();
        email.parentElement.classList.add('not-valid');
        email.parentElement.classList.remove('valid');
        email.nextElementSibling.style.display = 'block';
         } else {
            email.parentElement.classList.add('valid');
            email.parentElement.classList.remove('not-valid');
            email.nextElementSibling.style.display = 'none';
            email.classList.remove('error-border');
           };



    if (!activitiesTest(activities)){
        e.preventDefault();
        activities.parentElement.classList.add('not-valid')
        activities.parentElement.classList.remove('valid');
        activities.lastElementChild.style.display = 'block';
           } else {
           activities.parentElement.classList.add('valid');
           activities.parentElement.classList.remove('not-valid');
           activities.lastElementChild.style.display = 'none'; 
           activities.classList.remove('activities-box error-border');
           };  

    if (!cardTest(card)) {
        e.preventDefault();
        card.parentElement.classList.add('not-valid')
        card.parentElement.classList.remove('valid');
        card.nextElementSibling.style.display = 'block';
        } else {
         card.parentElement.classList.add('valid');
         card.parentElement.classList.remove('not-valid');
         card.nextElementSibling.style.display = 'none';
         card.classList.remove('error-border');
        }; 


    if (!zipTest(zipcode)) {
        e.preventDefault();
        zipcode.parentElement.classList.add('not-valid')
        zipcode.parentElement.classList.remove('valid');
        zipcode.nextElementSibling.style.display = 'block';
        } else {
         zipcode.parentElement.classList.add('valid');
         zipcode.parentElement.classList.remove('not-valid');
         zipcode.nextElementSibling.style.display = 'none';
         zipcode.classList.remove('error-border');

         
        };     

    if (!cvvTest(cvv)) {
        e.preventDefault();
        cvv.parentElement.classList.add('not-valid')
       cvv.parentElement.classList.remove('valid');
        cvv.nextElementSibling.style.display = 'block';
        } else {
         cvv.parentElement.classList.add('valid');
         cvv.parentElement.classList.remove('not-valid');
         cvv.nextElementSibling.style.display = 'none';
         cvv.classList.remove('error-border');
        };  

});


//This section makes focus states more obvious to users, which makes it more accessible
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


 
