// JavaScript code (reference.js)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signInForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get form values
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let email = document.getElementById('email').value;
        
        // Create an object to hold the form data
        let formData = {
            firstName: firstName,
            lastName: lastName,
            email: email
        };
        
        // Save the form data to local storage
        localStorage.setItem('formData', JSON.stringify(formData));
        
        // Optionally, show a confirmation message
        alert('Form data saved successfully!');
        
        // Optionally, clear the form after submission
        form.reset();
    });
    
});

/* let brandenString = localStorage.getItem("Branden");

console.log(brandenString + " " + typeof(brandenString));

let brandenJson = JSON.parse(brandenString);

console.log(brandenJson + " " +typeof(brandenJson));

console.log(brandenJson.occupation); */