import './style.css';

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
    const emailInput = document.querySelector('.email-input');
    const emailErrorMsg = document.querySelector('#email-error-msg');
    if (emailInput.validity.typeMismatch) {
        emailErrorMsg.innerText = 'please enter a valid email address.';
        emailInput.style.border = '1px solid red';
        emailInput.removeEventListener('focus', addValidFocusStyle);
        emailInput.removeEventListener('focus', addNeutralFocusStyle);
        emailInput.addEventListener('focus', addInvalidFocusStyle);
        emailInput.addEventListener('focusout', removeFocusStyle);
    } else if (emailInput.validity.valueMissing) {
        emailInput.style.border = '1px solid grey';
        emailInput.addEventListener('focus', addNeutralFocusStyle);
    }
}

function resetNeutralStyles() {
    const emailInput = document.querySelector('.email-input');
    const emailErrorMsg = document.querySelector('#email-error-msg');
    if (emailInput.validity.valueMissing) {
        emailInput.style.border = '1px solid grey';
        this.style.outline = '2px solid blue';
        emailInput.addEventListener('focus', addNeutralFocusStyle);
        emailInput.removeEventListener('focus', addValidFocusStyle);
        emailInput.removeEventListener('focus', addInvalidFocusStyle);
        emailErrorMsg.innerText = '';
    }
}

function validateEmailInput() {
    const emailInput = document.querySelector('.email-input');
    const emailErrorMsg = document.querySelector('#email-error-msg');
    if (emailInput.validity.valid) {
        emailInput.style.border = '1px solid green';
        emailInput.style.outline = '2px solid green';
        emailInput.addEventListener('focus', addValidFocusStyle);
        emailInput.addEventListener('focusout', removeFocusStyle);
    }
    if (emailInput.validity.valid && !(emailErrorMsg.innerText === '')) {
        emailErrorMsg.innerText = '';
    }
}

function setEmailEvents() {
    const emailInput = document.querySelector('.email-input');
    emailInput.addEventListener('focusout', validateEmailFocusOut);
    emailInput.addEventListener('input', validateEmailInput);
    emailInput.addEventListener('input', resetNeutralStyles);
}

setEmailEvents();