$(document).ready(() => {
    
    let contactForm = $('#contactForm');
    let formSubmitButton = $('#formSubmitButton');
    let formSubmitSuccess = $('#formSubmitSuccess');
    let formSubmitDanger = $('#formSubmitDanger');
    let formToken = $('#token');
    contactForm.submit((event) => {
        event.preventDefault();

        formSubmitButton.prop('disabled', true);
        formSubmitButton.html('Please Wait...');
        formSubmitSuccess.hide();
        formSubmitDanger.hide();

        grecaptcha.execute('6LeL_6IUAAAAAGmtbTDdIVQYNNnSbBspuoLvIrIb', {action: 'homepage'}).then(function(token) {
            
            formToken.val(token);
            $.ajax({
                type: "POST",
                url: 'https://walletwiz-website-back-end.herokuapp.com/api/handle-contact-form',
                data: contactForm.serialize(),
                success: function(data) {
                    formSubmitButton.html('Send');
                    formSubmitButton.prop('disabled', false);
                    formSubmitSuccess.show();
                    formSubmitDanger.hide();
                },
                error: function(xhr) {
                    formSubmitButton.html('Send');
                    formSubmitButton.prop('disabled', false);
                    formSubmitDanger.html(xhr.responseText);
                    formSubmitSuccess.hide();
                    formSubmitDanger.show();
                }
            });
        });

    });
});