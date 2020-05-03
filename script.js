let form = document.querySelector('#parking-form')
let formIsValid

// Step 1

//function validate name
form.addEventListener('submit', function (event) {
    event.preventDefault()

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
        nameError.innerHTML = 'Name is required'
        
}}) 

//function validate car year & make & model
form.addEventListener('submit', function (event) {
    event.preventDefault()

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
        carError.innerHTML = "Car Information is required"

}})

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
    dateError.innerHTML = 'Date is required'

}})

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
    dayError.innerHTML = 'Number of days is required'

}})

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
    creditError.innerHTML = 'Credit card is required'
      
}})

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
    cvvError.innerHTML = 'CVV is required'

}})

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
    expirationError.innerHTML = 'Expiration is required'

}})

//step 2 

document.querySelector ('#name-field')
let nameError = document.createElement('div')
let errorDiv = document.querySelector ("#name-field")
errorDiv.appendChild (nameError) 
nameError.className = ('nameError')


document.querySelector ('#car-field')
let carError = document.createElement('div')
let carDiv = document.querySelector ('#car-field')
carDiv.appendChild (carError) 
carError.className = ('carError')


document.querySelector ('#start-date-field')
let dateError = document.createElement ('div')
let dateErrorDiv = document.querySelector ('#start-date-field')
dateErrorDiv.appendChild (dateError)
dateError.className = ('dateError')


document.querySelector ('#days-field')
let dayError = document.createElement('div')
let dayErrorDiv = document.querySelector ("#days-field")
dayErrorDiv.appendChild (dayError) 
dayError.className = ('dayError')


document.querySelector ('#credit-card-field')
let creditError = document.createElement('div')
let creditErrorDiv = document.querySelector ("#credit-card-field")
creditErrorDiv.appendChild (creditError) 
creditError.className = ('creditError')


document.querySelector ('#cvv-field')
let cvvError = document.createElement('div')
let cvvErrorDiv = document.querySelector ("#cvv-field")
cvvErrorDiv.appendChild (cvvError) 
cvvError.className = ('cvvError') 


document.querySelector ('#expiration-field')
let expirationError = document.createElement('div')
let expirationErrorDiv = document.querySelector ("#expiration-field")
expirationErrorDiv.appendChild (expirationError) 
expirationError.className = ('expirationError')  //error needs to be found here 

//step 3


