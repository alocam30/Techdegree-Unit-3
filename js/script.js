//variable for the first form field to be in focus, with a flashing cursor
const nameElement = document.getElementById('name');
nameElement.focus();


//job role section
//when a change is detected display/hide the "text" field
const jobRole = document.getElementById('title');

const otherJobRole = document.getElementById('other-job-role');

    jobRole.addEventListener("change", e => {
        if (e.target.value === "other"){
        otherJobRole.style.display = '';
        } else {
            otherJobRole.style.display = 'none';
        }

    });

