const scriptURL = 'https://script.google.com/macros/s/AKfycbwPsrMyGahPpWuUUErDQUhlVwXTDjVwSEneLuwNl9UHUMGvHkfgzVshcNfgdR5Nt4d81Q/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the value of the date input field
        const userDate = document.getElementById('date').value;

        // Now you can use 'userDate' for further processing or submission
        console.log('User entered date:', userDate);

        // Example: If you want to submit the form with the user-entered date
        // You can add your fetch or form submission logic here
        // fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        //     .then(response => {
        //         if (response.ok) {
        //             alert("Form submitted successfully!");
        //             form.reset(); // Optionally reset the form after successful submission
        //         } else {
        //             throw new Error('Network response was not ok.');
        //         }
        //     })
        //     .catch(error => console.error('Error!', error.message));
    });
});
