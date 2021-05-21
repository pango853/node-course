console.log('Client side javascript file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

// Challenge: Fetch weather

const fetchWeather = (address = 'Malacca') => {
    fetch('/weather?address=' + address).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })    
}

const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')

// Goal: Use input value to get weather

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() // prevent browser from refreshing the page
    console.log('testing!')

    const address = searchInput.value
    fetchWeather(address)
})
