function validateName() {
    var nameInput = document.getElementById('name');

    if (nameInput.value.trim() === '') {
        alert('Name is required');
        return false;
    } 
    return true;
}

function validateEmail() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim();

    if (email === '') {
        alert('Email is required');
        return false;
    } else if (!email.includes('@') || !email.includes('.')) {
        alert('Enter a valid email address');
        return false;
    } 
    return true;
}

function validateDOB() {
    var dobInput = document.getElementById('dob');

    if (dobInput.value.trim() === '') {
        alert('Date of Birth is required');
        return false;
    } 
    return true;
}

function validateGender() {
    var genderInput = document.getElementById('gender');

    if (genderInput.value.trim() === '') {
        alert('Please select your gender');
        return false;
    } 
    return true;
}

function validateAgreement() {
    var agreeCheckbox = document.getElementById('agree');

    if (!agreeCheckbox.checked) {
        alert('You must agree to the terms and conditions');
        return false;
    } 
    return true;
}

function validateForm() {
    var isNameValid = validateName();
    var isEmailValid = validateEmail();
    var isDOBValid = validateDOB();
    var isGenderValid = validateGender();
    var isAgreementValid = validateAgreement();

    return isNameValid && isEmailValid && isDOBValid && isGenderValid && isAgreementValid;
}

document.getElementById('register-form').addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault(); 
    }
});
