console.log('Client side javascript file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

// Challenge: Fetch weather

const fetchWeather = (address = 'Malacca') => {
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + address).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                messageOne.textContent = data.error
            } else {
                console.log(data.location)
                console.log(data.forecast)
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast.description
            }
        })
    })    
}

const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')
const messageOne = document.querySelector('p#message-1')
const messageTwo = document.querySelector('p#message-2')

// Goal: Use input value to get weather

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() // prevent browser from refreshing the page
    console.log('testing!')

    const address = searchInput.value
    messageTwo.textContent = fetchWeather(address, messageOne, messageTwo)
})
