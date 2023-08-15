function onsubmitform() {
    let name = document.forms['simpleform']['name'].value;
    let email = document.forms['simpleform']['email'].value;
    let password = document.forms['simpleform']['password'].value;
    let birthyear = document.forms['simpleform']['birthyear'].value;
    let terms = document.forms['simpleform']['terms'].checked;

    if (name == '') {
        alert("Name cannot be empty");
        return false;
    }
    if (email == '') {
        alert("Enter valid email");
        return false;  
    }
    if (password == '') {
        alert("Password cannot be blank");
        return false;  
    }
    if (password.length < 8) {
        alert("Enter more than 8 characters");
        return false;  
    }
    if (birthyear == 'select') {
        alert('Select a birth date');
        return false;
    }

    if (!terms) {  
        alert('You must agree to the terms and conditions');
        return false;
    }
    return true;
}
