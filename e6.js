const numbers = [88, 89, 89, 90];
const student = {
    name: 'mehedi',
    age: 43,
    movies: ['king', 'fivefaster']
}

// template string
const about = `my name is ${student.name} age of ${student.age} has number ${numbers[2]} also like movies ${student.movies[0]}`
console.log(about)

// 2. arrow function
const getFiftyfive = () => 44;
const addsixtyfive = num => num + 65;
const isEven = x => x%2 ==0;
const addthree = (x, y, z) => x+y+z;
const domath = (num1, num2) => {
    const add = num1 + num2;

    return add;
}

// spread operator
const newnumbers = [...numbers];
numbers.push(99);
console.log(newnumbers);
console.log(numbers);

// create a new array from an older array and add an element

const currentnumbers =[...numbers, 55];
console.log(numbers)
console.log(newnumbers)
console.log(currentnumbers)
