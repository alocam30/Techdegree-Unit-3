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

let jsPuns = document.querySelectorAll('[data-theme="js puns"]');
    
let  heartJS = document.querySelectorAll('[data-theme="heart js"]');

shirtDesign.addEventListener("change", e => {
    shirtColor.disabled = false;
    for (let i = 0; i < shirtColor.length; i++ ) {
         let eventValue = e.target.value;

         if (eventValue === jsPuns) {
            jsPuns.hidden = false;
         } else  {
            jsPuns.hidden = true;
         };

         if (eventValue === heartJS) {
            heartJS.hidden = false;
         } else{
            heartJS.hidden = true;
         };

         };

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
paypal.style.display = 'none';

const bitcoin = document.getElementById('bitcoin');
bitcoin.style.display ='none';

payment.setAttribute()

payment.addEventListener("change", e => {



});

//form validation

//accessibility

