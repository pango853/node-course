const name = 'Andrew'
const userAge = 27

const user = {
    name, // Object property shorthand. Tough 'name' is deprecated
    age: userAge,
    location: 'Kuala Lumpur'
}

console.log(user)


const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

//const label = product.label
//const stock = product.stock

const {label, stock} = product // Object destructuring
console.log(label)
console.log(stock)

const {label:productLabel, stock:productStock, rating, ratingWithDef = 5} = product // Object destructuring with renaming
console.log(productLabel)
console.log(productStock)
console.log(rating) // no match, thus undefined
console.log(ratingWithDef) // will show default

const transaction = (type, myProduct) => {
    const { label } = myProduct // destructuring here
    console.log(type, label, stock)
}
const transaction2 = (type, {label, stock}) => { // destructuring here
    console.log(type, label, stock)
}

transaction('order', product)
transaction2('order2', product)
