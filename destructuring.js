// array destructuring
const numbers = [42, 65]
// const x = numbers[0];
// const y = numbers[1];
// const [x,y] = [42, 65]


const [x,y] =numbers

function getvalues (num1, num2){
    const nums =[num1, num2]
    return nums;
}

console.log(nums(44,45))



const student = {
    name: 'mehedi',
    age: 43,
    movies: ['king', 'fivefaster']
}
const [xa, ya ] = student.movies


// object destructuring

const{name,age} = {name:'alu', age:14}
const{namea,aage} = {id: 12, name:'alu', age:14};
const employee ={
    naem:'vs code',
    designation: 'developer',
    languages:['html', 'css', 'js'],
    specification:{
        height: 66,
        weight: 'kalia',
        drink:'water',
        watch: {
            color:'blacj',
            price:'4---',
            brand:'garbee'
        }
    }
}

const {languages, id}= employee;
const {weight, height}= employee.specification;
const {brand}= employee.specification.watch;
