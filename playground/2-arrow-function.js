
// const square = function(x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

const square = (x) => x * x

console.log(square(2))

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList: function() {
        console.log('Guest list for ' + this.name) // -> Birthday Party
    },
    printGuestList2: () => {
        console.log('Guest list for ' + this.name) // -> undefined. Cannot use `this` for lambda
    },
    printGuestList3() {
        console.log('Guest list for ' + this.name) // -> works!

        this.guestList.forEach(function(guest) {
            console.log(guest + ' is attending ' + this.name) // undefined
        })
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name) // works! Since lambda don't have `this`
        })
    }
}

event.printGuestList()
event.printGuestList2()
event.printGuestList3()
