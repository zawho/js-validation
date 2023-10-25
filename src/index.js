import './style.css';

function resetForm() {
    const sampleForm = document.querySelector('.sample-form');
    sampleForm.reset();
}

function addInvalidFocusStyle() {
    this.style.outline = '2px solid red';
}

function addValidFocusStyle() {
    this.style.outline = '2px solid green';
}

function addNeutralFocusStyle() {
    this.style.outline = '2px solid blue';
}

function removeFocusStyle() {
    this.style.outline = 'none';
}

function validateEmailFocusOut() {
    const emailErrorMsg = document.querySelector('#email-error-msg');
    if (this.validity.typeMismatch) {
        emailErrorMsg.innerText = 'please enter a valid email address.';
        this.style.border = '1px solid red';
        this.removeEventListener('focus', addValidFocusStyle);
        this.removeEventListener('focus', addNeutralFocusStyle);
        this.addEventListener('focus', addInvalidFocusStyle);
        this.addEventListener('focusout', removeFocusStyle);
    }
}

function resetNeutralEmailStyles() {
    const emailErrorMsg = document.querySelector('#email-error-msg');
    if (this.validity.valueMissing) {
        this.style.border = '1px solid grey';
        this.style.outline = '2px solid blue';
        this.addEventListener('focus', addNeutralFocusStyle);
        this.removeEventListener('focus', addValidFocusStyle);
        this.removeEventListener('focus', addInvalidFocusStyle);
        emailErrorMsg.innerText = '';
    }
}

function validateEmailInput() {
    const emailErrorMsg = document.querySelector('#email-error-msg');
    if (this.validity.valid) {
        this.style.border = '1px solid green';
        this.style.outline = '2px solid green';
        this.addEventListener('focus', addValidFocusStyle);
        this.addEventListener('focusout', removeFocusStyle);
    }
    if (this.validity.valid && !(emailErrorMsg.innerText === '')) {
        emailErrorMsg.innerText = '';
    }
}

function setEmailEvents() {
    const emailInput = document.querySelector('#email');
    emailInput.addEventListener('focusout', validateEmailFocusOut);
    emailInput.addEventListener('input', validateEmailInput);
    emailInput.addEventListener('input', resetNeutralEmailStyles);
}

function validateCountryFocusOut() {
    const countryErrorMsg = document.querySelector('#country-error-msg');
    if (this.validity.valueMissing) {
        countryErrorMsg.innerText = 'please enter your country.';
        this.style.border = '1px solid red';
        this.removeEventListener('focus', addValidFocusStyle);
        this.removeEventListener('focus', addNeutralFocusStyle);
        this.addEventListener('focus', addInvalidFocusStyle);
        this.addEventListener('focusout', removeFocusStyle);
    }
}

function resetNeutralCountryStyles() {
    const countryErrorMsg = document.querySelector('#country-error-msg');
    if (this.validity.valueMissing && this.style.border === '1px solid green') {
        this.style.border = '1px solid red';
        this.style.outline = '2px solid red';
        this.removeEventListener('focus', addValidFocusStyle);
        this.addEventListener('focus', addInvalidFocusStyle);
        countryErrorMsg.innerText = 'please enter your country.';
    }
}

function validateCountryInput() {
    const countryErrorMsg = document.querySelector('#country-error-msg');
    if (this.validity.valid) {
        this.style.border = '1px solid green';
        this.style.outline = '2px solid green';
        this.addEventListener('focus', addValidFocusStyle);
        this.addEventListener('focusout', removeFocusStyle);
    }
    if (this.validity.valid && !(countryErrorMsg.innerText === '')) {
        countryErrorMsg.innerText = '';
    }
}

function setCountryEvents() {
    const countryInput = document.querySelector('#country');
    countryInput.addEventListener('focusout', validateCountryFocusOut);
    countryInput.addEventListener('input', validateCountryInput);
    countryInput.addEventListener('input', resetNeutralCountryStyles);
}

function validateZipFocusOut() {
    const zipErrorMsg = document.querySelector('#zip-error-msg');
    if (this.validity.patternMismatch) {
        zipErrorMsg.innerText = 'please enter a valid zip code, must be 5 digits.';
        this.style.border = '1px solid red';
        this.removeEventListener('focus', addValidFocusStyle);
        this.removeEventListener('focus', addNeutralFocusStyle);
        this.addEventListener('focus', addInvalidFocusStyle);
        this.addEventListener('focusout', removeFocusStyle);
    }
}

function resetNeutralZipStyles() {
    const zipErrorMsg = document.querySelector('#zip-error-msg');
    if (this.validity.valueMissing) {
        this.style.border = '1px solid grey';
        this.style.outline = '2px solid blue';
        this.addEventListener('focus', addNeutralFocusStyle);
        this.removeEventListener('focus', addValidFocusStyle);
        this.removeEventListener('focus', addInvalidFocusStyle);
        zipErrorMsg.innerText = '';
    }
}

function validateZipInput() {
    const zipErrorMsg = document.querySelector('#zip-error-msg');
    if (this.validity.valid) {
        this.style.border = '1px solid green';
        this.style.outline = '2px solid green';
        this.addEventListener('focus', addValidFocusStyle);
        this.addEventListener('focusout', removeFocusStyle);
    }
    if (!this.validity.valid && this.style.border === '1px solid green') {
        this.style.border = '1px solid red';
        this.style.outline = '2px solid red';
        this.addEventListener('focus', addInvalidFocusStyle);
        this.addEventListener('focusout', removeFocusStyle);
        zipErrorMsg.innerText = 'please enter a valid zip code, must be 5 digits.';
    }
    if (this.validity.valid && !(zipErrorMsg.innerText === '')) {
        zipErrorMsg.innerText = '';
    }
}

function setZipEvents() {
    const zipInput = document.querySelector('#zip');
    zipInput.addEventListener('focusout', validateZipFocusOut);
    zipInput.addEventListener('input', validateZipInput);
    zipInput.addEventListener('input', resetNeutralZipStyles);
}

function showPassword() {
    const passInput = document.querySelector('#pw');
    if (this.checked === true) {
        passInput.type = 'text';
    } else {
        passInput.type = 'password';
    }
}

function validatePassFocusOut() {
    if (this.validity.patternMismatch) {
        this.style.border = '1px solid red';
        this.removeEventListener('focus', addValidFocusStyle);
        this.removeEventListener('focus', addNeutralFocusStyle);
        this.addEventListener('focus', addInvalidFocusStyle);
        this.addEventListener('focusout', removeFocusStyle);
    }
}

function resetPassStyles() {
    if (this.validity.valueMissing) {
        this.style.border = '1px solid grey';
        this.style.outline = '2px solid blue';
        this.addEventListener('focus', addNeutralFocusStyle);
        this.removeEventListener('focus', addValidFocusStyle);
        this.removeEventListener('focus', addInvalidFocusStyle);
    }
}

function validatePassInput() {
    const confirmPassInput = document.querySelector('#pw-confirm');
    const confirmErrorMsg = document.querySelector('#confirm-error-msg');
    if (this.validity.valid) {
        this.style.border = '1px solid green';
        this.style.outline = '2px solid green';
        this.addEventListener('focus', addValidFocusStyle);
        this.addEventListener('focusout', removeFocusStyle);
    }
    if (!this.validity.valid && this.style.border === '1px solid green') {
        this.style.border = '1px solid red';
        this.style.outline = '2px solid red';
        this.addEventListener('focus', addInvalidFocusStyle);
        this.addEventListener('focusout', removeFocusStyle);
    }
    if (!(confirmPassInput.value === '')) {
        confirmPassInput.value = '';
        confirmPassInput.style.border = '1px solid grey';
        confirmPassInput.removeEventListener('focus', addValidFocusStyle);
        confirmPassInput.removeEventListener('focus', addInvalidFocusStyle);
        confirmPassInput.addEventListener('focus', addNeutralFocusStyle);
        confirmPassInput.addEventListener('focusout', removeFocusStyle);
        confirmErrorMsg.innerText = '';
    }
}

function checkRulesFocusOut() {
    const lengthRule = document.querySelector('.length-rule');
    const lowercaseRule = document.querySelector('.lowercase-rule');
    const lowercaseRegex = /[a-z]/;
    const uppercaseRule = document.querySelector('.uppercase-rule');
    const uppercaseRegex = /[A-Z]/;
    const numberRule = document.querySelector('.number-rule');
    const numberRegex = /[0-9]/;
    const specialRule = document.querySelector('.special-rule');
    const specialRegEx = /[!@#$%^&*?]/;
    if (this.value.length < 8 && !this.validity.valueMissing) {
        lengthRule.style.color = 'red';
    }
    if (!lowercaseRegex.test(this.value) && !this.validity.valueMissing) {
        lowercaseRule.style.color = 'red';
    }
    if (!uppercaseRegex.test(this.value) && !this.validity.valueMissing) {
        uppercaseRule.style.color = 'red';
    }
    if (!numberRegex.test(this.value) && !this.validity.valueMissing) {
        numberRule.style.color = 'red';
    }
    if (!specialRegEx.test(this.value) && !this.validity.valueMissing) {
        specialRule.style.color = 'red';
    }
}

function resetRuleStyles() {
    const lengthRule = document.querySelector('.length-rule');
    const lowercaseRule = document.querySelector('.lowercase-rule');
    const uppercaseRule = document.querySelector('.uppercase-rule');
    const numberRule = document.querySelector('.number-rule');
    const specialRule = document.querySelector('.special-rule');
    if (this.validity.valueMissing) {
        lengthRule.style.color = 'black';
        lowercaseRule.style.color = 'black';
        uppercaseRule.style.color = 'black';
        numberRule.style.color = 'black';
        specialRule.style.color = 'black';
    }
}

function checkRulesOnInput() {
    const lengthRule = document.querySelector('.length-rule');
    const lowercaseRule = document.querySelector('.lowercase-rule');
    const lowercaseRegex = /[a-z]/;
    const uppercaseRule = document.querySelector('.uppercase-rule');
    const uppercaseRegex = /[A-Z]/;
    const numberRule = document.querySelector('.number-rule');
    const numberRegex = /[0-9]/;
    const specialRule = document.querySelector('.special-rule');
    const specialRegEx = /[!@#$%^&*?]/;
    if (this.value.length >= 8) {
        lengthRule.style.color = 'green';
    } else if (this.value.length < 8 && lengthRule.style.color === 'green') {
        lengthRule.style.color = 'red';
    }
    if (lowercaseRegex.test(this.value)) {
        lowercaseRule.style.color = 'green';
    } else if (!lowercaseRegex.test(this.value) && lowercaseRule.style.color === 'green') {
        lowercaseRule.style.color = 'red';
    }
    if (uppercaseRegex.test(this.value)) {
        uppercaseRule.style.color = 'green';
    } else if (!uppercaseRegex.test(this.value) && uppercaseRule.style.color === 'green') {
        uppercaseRule.style.color = 'red';
    }
    if (numberRegex.test(this.value)) {
        numberRule.style.color = 'green';
    } else if (!numberRegex.test(this.value) && numberRule.style.color === 'green') {
        numberRule.style.color = 'red';
    }
    if (specialRegEx.test(this.value)) {
        specialRule.style.color = 'green';
    } else if (!specialRegEx.test(this.value) && specialRule.style.color === 'green') {
        specialRule.style.color = 'red';
    }
}

function setPassEvents() {
    const passInput = document.querySelector('#pw');
    const passCheckbox = document.querySelector('.pw-checkbox');
    passInput.addEventListener('focusout', validatePassFocusOut);
    passInput.addEventListener('input', resetPassStyles);
    passInput.addEventListener('input', validatePassInput);
    passInput.addEventListener('focusout', checkRulesFocusOut);
    passInput.addEventListener('input', resetRuleStyles);
    passInput.addEventListener('input', checkRulesOnInput);
    passCheckbox.addEventListener('click', showPassword);
}

function resetNeutralConfirmPassStyles() {
    const confirmErrorMsg = document.querySelector('#confirm-error-msg');
    if (this.validity.valueMissing) {
        this.style.border = '1px solid grey';
        this.style.outline = '2px solid blue';
        this.addEventListener('focus', addNeutralFocusStyle);
        this.removeEventListener('focus', addValidFocusStyle);
        this.removeEventListener('focus', addInvalidFocusStyle);
        confirmErrorMsg.innerText = '';
    }
}

function validateConfirmPassInput() {
    const confirmErrorMsg = document.querySelector('#confirm-error-msg');
    const passInput = document.querySelector('#pw');
    if (this.value === passInput.value) {
        this.style.border = '1px solid green';
        this.style.outline = '2px solid green';
        this.removeEventListener('focus', addInvalidFocusStyle);
        this.addEventListener('focus', addValidFocusStyle);
        this.addEventListener('focusout', removeFocusStyle);
        confirmErrorMsg.innerText = '';
    }
    if (!(this.value === passInput.value)) {
        this.style.border = '1px solid red';
        this.style.outline = '2px solid red';
        this.removeEventListener('focus', addValidFocusStyle);
        this.addEventListener('focus', addInvalidFocusStyle);
        this.addEventListener('focusout', removeFocusStyle);
        confirmErrorMsg.innerText = 'passwords do not match.';
    }
}

function setConfirmPassEvents() {
    const confirmPassInput = document.querySelector('#pw-confirm');
    confirmPassInput.addEventListener('input', validateConfirmPassInput);
    confirmPassInput.addEventListener('input', resetNeutralConfirmPassStyles);
}

function validateOnSubmit() {
     const allInputs = document.querySelectorAll('.sample-form .form-input');
     const submitMsg = document.querySelector('.submit-msg');
     const allInputsArr = Array.from(allInputs);
     submitMsg.style.color = 'green';
     submitMsg.innerText = 'everything looks good. woohoo!';
     for (let i = 0; i < allInputsArr.length; i++) {
        if (!(allInputsArr[i].style.border === '1px solid green')) {
            submitMsg.style.color = 'red';
            submitMsg.innerText = 'one or more field is invalid or empty.';
        }
     }
}

function setSubmitEvent() {
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.addEventListener('click', validateOnSubmit);
}

window.addEventListener('load', resetForm);
setEmailEvents();
setCountryEvents();
setZipEvents();
setPassEvents();
setConfirmPassEvents();
setSubmitEvent();