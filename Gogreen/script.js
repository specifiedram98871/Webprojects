function donor(){
    location.href="donate.html"
}
function helper(){
    location.href="help.html"
}
function Donor_Form() {
            let isValid = true;
            let inputs = document.querySelectorAll('.form-control');
            inputs.forEach(input => {
                input.classList.remove('is-invalid');
            });

            
            let firstName = document.getElementById('validationCustom01');
            if (firstName.value.trim() === '') {
                firstName.classList.add('is-invalid');
                isValid = false;
            }

            let lastName = document.getElementById('validationCustom02');
            if (lastName.value.trim() === '') {
                lastName.classList.add('is-invalid');
                isValid = false;
            }

            let contact = document.getElementById('validationcontact');
            if (contact.value.trim() === '' || isNaN(contact.value)) {
                contact.classList.add('is-invalid');
                isValid = false;
            }

            let city = document.getElementById('validationCustom03');
            if (city.value === '') {
                city.classList.add('is-invalid');
                isValid = false;
            }

            let noPlants = document.getElementById('validationCustomUsername');
            if (noPlants.value.trim() === '' || parseInt(noPlants.value) < 100) {
                noPlants.classList.add('is-invalid');
                isValid = false;
            }

            let agreeCheck = document.getElementById('Check');
            if (!agreeCheck.checked) {
                agreeCheck.classList.add('is-invalid');
                isValid = false;
            }
            if(isValid == true)
    {
    alert('Your form has been submitted');
   }
            return isValid;
        }

function helper_Form()
{
    let isValid = true;
    let inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.classList.remove('is-invalid');
    });

    
    let firstName = document.getElementById('validationCustom01');
    if (firstName.value.trim() === '') {
        firstName.classList.add('is-invalid');
        isValid = false;
    }

    let lastName = document.getElementById('validationCustom02');
    if (lastName.value.trim() === '') {
        lastName.classList.add('is-invalid');
        isValid = false;
    }

    let contact = document.getElementById('validationcontact');
    if (contact.value.trim() === '' || isNaN(contact.value)) {
        contact.classList.add('is-invalid');
        isValid = false;
    }


    let agreeCheck = document.getElementById('Check');
    if (!agreeCheck.checked) {
        agreeCheck.classList.add('is-invalid');
        isValid = false;
    }
    if(isValid == true)
    {
    alert('Your form has been submitted');
   }
    return isValid;
}