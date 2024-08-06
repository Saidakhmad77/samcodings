
document.addEventListener('DOMContentLoaded', function () {

    let shippingForm = document.getElementById("shippingForm");

    shippingForm.addEventListener("submit", function (e) {
        // Pevent the default behavior submission
        e.preventDefault();

        /*      const formData = new formData(shippingForm); */

        let hasErrors = false;

        //console.log(formData);

        let firstName = e.target.elements["firstname"];
        let lastName = e.target.elements["lastname"];
        let city = e.target.elements["city"];
        let zip = e.target.elements["zip"];
        let birthDate = e.target.elements["birthdate"];
        let email = e.target.elements["email"];
        console.log(birthDate.value)


        /*  verifyFormData(firstName, lastName, city, zip, birthDate, email) */
        let errors = verifyFormData(
            firstName.value,
            lastName.value,
            birthDate.value,
            city.value,
            zip.value,
            email.value
        );

        if (errors.length > 0) {
            hasErrors = true;

            for (let i = 0; i < errors.length; i++) {
                console.log(errors[i])
                switch (errors[i]) {
                    case firstName.value:
                        firstName.classList.add("input-error")
                        break;
                    case lastName.value:
                        lastName.classList.add("input-error")
                        break;
                    case birthDate.value:
                        birthDate.classList.add("input-error")
                        break;
                    case city.value:
                        city.classList.add("input-error")
                        break;
                    default:
                        return;
                }
            }
        }



        /*        if (hasErrors) {
                resetFormErrors(shippingForm);
               }
               else {
                console.log(
                    `First Name: ${firstName}\nLast Name: ${lastName}\nBirth Date: ${birthDate}\nEmail: ${email}\nCity: ${city}\nZip Code: ${zip}`
                );
               } */
    })



})

function verifyFormData(firstName, lastName, birthDate, city, zip, email) {

    let errors = [];

    if (firstName.length > 10 || firstName === "") {
        //console.log(firstName + "error")
        errors.push(firstName)
    }
    if (lastName.length > 10 || lastName === "") {
       // console.log(lastName + "error")
        errors.push(lastName)
    }
    if (zip === "" || isNaN(zip) || zip.length !== 5) {
        //console.log(zip + "error");
        errors.push(zip)
    }
    if (city.length > 8 || city === "") {
        //console.log(city + "error")
        errors.push(city)
    }
    if (birthDate === "") {
        errors.push(birthDate)
    }
    if (email === "") {
        //console.log(email + "error")
        errors.push(email)
    }
    console.log(errors)
    return errors
}