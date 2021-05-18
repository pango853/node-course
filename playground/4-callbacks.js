setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => name.length <= 4)

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }

        //return data // instead of returning data, we try to use callback
        callback(data)
    }, 2000)
}

geocode('Kuala Lumpur', (data) => {
    console.log(data)
})


const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

// Challenge: Mess around with the callback pattern
add(1, 4, (sum) => {
    console.log(sum)
})