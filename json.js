// 1.json, stringify

const student = {
    name: 'mehedi',
    age: 43,
    movies: ['king', 'fivefaster']
}

const studenjson =JSON.stringify(student)
console.log(student)
console.log(studenjson)

// 2. fetch
fetch('url')
.then(res => res.json())
.then(data => console.log(data))


// 3.keys, values

const keys = Object.keys(student)
const values = Object.values(student)


// for
const numbers = [22,22,334,4,5,665,65,64]
numbers.forEach(num => console.log(num))
numbers.map (num=> num *2);

// for of on array like object
// loop on an object using for in

// add or remove from an array

// create a new array without one specific item
