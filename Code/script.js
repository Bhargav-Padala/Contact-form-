
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('form-success');

function isValidGITAMEmail(email) {
    const gitamEmailPattern = /^[a-zA-Z0-9._%+-]+@gitam\.(in|edu)$/;
    return gitamEmailPattern.test(email);
}


function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.textContent = message;
    errorMessage.style.visibility = 'visible';
}


function hideError(input) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.style.visibility = 'hidden';
}


function validateForm() {
    let isValid = true;

    
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
    } else {
        hideError(nameInput);
    }

  
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
        isValid = false;
    } else if (!isValidGITAMEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid GITAM email (@gitam.in or @gitam.edu)');
        isValid = false;
    } else {
        hideError(emailInput);
    }

    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Message is required');
        isValid = false;
    } else {
        hideError(messageInput);
    }

    return isValid;
}


form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    if (validateForm()) {
        successMessage.classList.remove('hidden');
        form.reset(); 
    }
});
