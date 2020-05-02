let form = document.querySelector('#parking-form')
let formIsValid

form.addEventListener('submit', function (event) {
    // formIsValid = true
    event.preventDefault()

    // removeErrorMessage()


    // validateName ()
    // validateCarYear ()
    // validateCarMake ()
    // validateCarModel ()
    // validateDateParking ()
    // validateNumberOfDays ()
    // validateCreditCard ()
    // validateCVV ()
    // validateExpiration ()


// function ValidateName () {
    let nameInput = document.querySelector('#name');
    let name = nameInput.value;



    if (name) {
        let nameValid = document.getElementById("name-field")
        nameValid.classList.remove ('input-invalid')
        nameValid.classList.add ('input-valid')
    } else {
        let nameValid = document.getElementById("name-field")
        nameValid.classList.add('input-invalid')
        nameValid.classList.remove ('input-valid')
        
    }

})
