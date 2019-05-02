$(document).ready(() => {
    let contactForm = $('#contactForm');
    let formSubmitButton = $('#formSubmitButton');
    let formSubmitSuccess = $('#formSubmitSuccess');
    let formSubmitDanger = $('#formSubmitDanger');
    contactForm.submit((event) => {
        event.preventDefault(); 
        console.log(contactForm.serialize());
        formSubmitButton.prop('disabled', true);
        formSubmitButton.html('Please Wait...');
        setTimeout(() => {
            formSubmitButton.html('Send');
            formSubmitButton.prop('disabled', false);
            formSubmitSuccess.show();
            formSubmitDanger.hide();
        }, 2000);
    });
});