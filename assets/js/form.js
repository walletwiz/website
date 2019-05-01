$(document).ready(() => {
    let contactForm = $('#contactForm');
    let formSubmitButton = $('#formSubmitButton');
    contactForm.submit((event) => {
        event.preventDefault(); 
        console.log(contactForm.serialize());
        formSubmitButton.prop('disabled', true);
        formSubmitButton.html('Please Wait...');
        setTimeout(() => {
            formSubmitButton.html('Message Sent!');
        }, 2000);
    });
});