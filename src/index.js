import './style.css';

function addInvalidFocusStyle() {
    this.style.outline = '2px solid red';
}

function addValidFocusStyle() {
    this.style.outline = '2px solid green';
}

function removeFocusStyle() {
    this.style.outline = 'none';
}

function validateEmailFocusOut() {
    const emailInput = document.querySelector('.email-input');
    const emailErrorMsg = document.querySelector('#email-error-msg');
    if (emailInput.validity.valueMissing || emailInput.validity.typeMismatch) {
        emailErrorMsg.innerText = 'please enter a valid email address.';
        emailInput.style.border = '1px solid red';
        emailInput.removeEventListener('focus', addValidFocusStyle);
        emailInput.addEventListener('focus', addInvalidFocusStyle);
        emailInput.addEventListener('focusout', removeFocusStyle);
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

function setEvents() {
    const emailInput = document.querySelector('.email-input');
    emailInput.addEventListener('focusout', validateEmailFocusOut);
    emailInput.addEventListener('input', validateEmailInput);
}

setEvents();