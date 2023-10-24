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

function resetNeutralStyles() {
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
    emailInput.addEventListener('input', resetNeutralStyles);
}

setEmailEvents();