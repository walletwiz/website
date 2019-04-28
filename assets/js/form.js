$(document).ready(() => {
    let contactForm = $('#contactForm');
    let formSuccessAlert = $('#formSuccessAlert');
    let formSubmitButton = $('#formSubmitButton');
    contactForm.submit((event) => {
        event.preventDefault(); 
        console.log(contactForm.serialize());
        formSubmitButton.html('Please Wait...');
        setTimeout(() => {
            formSubmitButton.html('Send');
            formSuccessAlert.show();
        }, 2000);
    });
});