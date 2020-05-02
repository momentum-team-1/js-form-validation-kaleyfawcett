let form = document.querySelector('#parking-form')
let formIsValid

// Step 1

form.addEventListener('submit', function (event) {
    event.preventDefault()

    
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
        
    }}) 

form.addEventListener('submit', function (event) {
    event.preventDefault()

//function ValidateCarYear & make & model
let carYearInput = document.querySelector('#car-year');
let carYear = carYearInput.value;

let carMakeInput = document.querySelector('#car-make');
let carMake = carMakeInput.value;

let carModelInput = document.querySelector('#car-model');
let carModel = carModelInput.value; 

    if (carYear && carMake && carModel) {
        let carStatus = document.getElementById('car-field')
        carStatus.classList.add ('input-valid')
        carStatus.classList.remove ('input-invalid')
        

    } else {
        let carStatus = document.getElementById("car-field")
        carStatus.classList.add('input-invalid')
        carStatus.classList.remove ('input-valid')

    }    

})

// fuction validate date parking 
form.addEventListener('submit', function (event) {
    event.preventDefault()

let startDateInput = document.querySelector ('#start-date');
let startDate = startDateInput.value;

if (startDate) {
    let startDateStatus = document.getElementById ('start-date-field')
    startDateStatus.classList.add ('input-valid')
    startDateStatus.classList.remove ('input-invalid')

} else {
    let startDateStatus = document.getElementById ('start-date-field')
    startDateStatus.classList.add ('input-invalid')
    startDateStatus.classList.remove ('input-valid')  

}
})

//function validate number of days 
form.addEventListener('submit', function (event) {
    event.preventDefault()

let daysInput = document.querySelector ('#days');
let days = daysInput.value;

if (days) {
    let dayStatus = document.getElementById ('days-field')
    dayStatus.classList.add ('input-valid')
    dayStatus.classList.remove ('input-invalid')

} else {
    let dayStatus = document.getElementById ('days-field')
    dayStatus.classList.add ('input-invalid')
    dayStatus.classList.remove ('input-valid')  

}
})

//function validate credit card
form.addEventListener('submit', function (event) {
    event.preventDefault()

let creditCardInput = document.querySelector ('#credit-card');
let creditCard = creditCardInput.value;

if (creditCard) {
    let creditCardInput = document.getElementById ('credit-card-field')
    creditCardInput.classList.add ('input-valid')
    creditCardInput.classList.remove ('input-invalid')

} else {
    let creditCardInput = document.getElementById ('credit-card-field')
    creditCardInput.classList.add ('input-invalid')
    creditCardInput.classList.remove ('input-valid')  

}
})

//function validate cvv
form.addEventListener('submit', function (event) {
    event.preventDefault()

let cvvInput = document.querySelector ('#cvv');
let cvv = cvvInput.value;

if (cvv) {
    let cvvInput = document.getElementById ('cvv-field')
    cvvInput.classList.add ('input-valid')
    cvvInput.classList.remove ('input-invalid')

} else {
    let cvvInput = document.getElementById ('cvv-field')
    cvvInput.classList.add ('input-invalid')
    cvvInput.classList.remove ('input-valid')  

}
})

//function validate expiration date 
form.addEventListener('submit', function (event) {
    event.preventDefault()

let expirationInput = document.querySelector ('#expiration');
let expiration = expirationInput.value;

if (expiration) {
    let expirationInput = document.getElementById ('expiration-field')
    expirationInput.classList.add ('input-valid')
    expirationInput.classList.remove ('input-invalid')

} else {
    let expirationInput = document.getElementById ('expiration-field')
    expirationInput.classList.add ('input-invalid')
    expiration.classList.remove ('input-valid')  

}
})