const scriptURL = 'https://script.google.com/macros/s/AKfycbyBRskjXB4I-r9T24rFn3i3dpjRPRjDSkvUQ_gz6SEAfiYiiqbKjW4NVYXyn2LyUGo2fQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

