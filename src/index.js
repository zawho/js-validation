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
    const emailInput = document.querySelector('.email-input');
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
    const countryInput = document.querySelector('.country-input');
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
    const zipInput = document.querySelector('.zip-input');
    zipInput.addEventListener('focusout', validateZipFocusOut);
    zipInput.addEventListener('input', validateZipInput);
    zipInput.addEventListener('input', resetNeutralZipStyles);
}

function showPassword() {
    const passInput = document.querySelector('.pw-input');
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
    const passInput = document.querySelector('.pw-input');
    const passCheckbox = document.querySelector('.pw-checkbox');
    passInput.addEventListener('focusout', validatePassFocusOut);
    passInput.addEventListener('input', resetPassStyles);
    passInput.addEventListener('input', validatePassInput);
    passInput.addEventListener('focusout', checkRulesFocusOut);
    passInput.addEventListener('input', resetRuleStyles);
    passInput.addEventListener('input', checkRulesOnInput);
    passCheckbox.addEventListener('click', showPassword);
}

function validateConfirmPassFocusOut() {
    const confirmErrorMsg = document.querySelector('#confirm-error-msg');
    const passInput = document.querySelector('.pw-input');
    if (!(this.value === passInput.value)) {
        confirmErrorMsg.innerText = 'passwords do not match.';
        this.style.border = '1px solid red';
        this.removeEventListener('focus', addValidFocusStyle);
        this.removeEventListener('focus', addNeutralFocusStyle);
        this.addEventListener('focus', addInvalidFocusStyle);
        this.addEventListener('focusout', removeFocusStyle);
    }
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
    const passInput = document.querySelector('.pw-input');
    if (this.value === passInput.value) {
        this.style.border = '1px solid green';
        this.style.outline = '2px solid green';
        this.addEventListener('focus', addValidFocusStyle);
        this.addEventListener('focusout', removeFocusStyle);
        confirmErrorMsg.innerText = '';
    }
    if (!(this.value === passInput.value)) {
        this.style.border = '1px solid red';
        this.style.outline = '2px solid red';
        this.addEventListener('focus', addInvalidFocusStyle);
        this.addEventListener('focusout', removeFocusStyle);
        confirmErrorMsg.innerText = 'passwords do not match.';
    }
}

function setConfirmPassEvents() {
    const confirmPassInput = document.querySelector('.pw-confirm-input');
    confirmPassInput.addEventListener('input', validateConfirmPassInput);
    confirmPassInput.addEventListener('input', resetNeutralConfirmPassStyles);
}

window.addEventListener('load', resetForm);
setEmailEvents();
setCountryEvents();
setZipEvents();
setPassEvents();
setConfirmPassEvents();