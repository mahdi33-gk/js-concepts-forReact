// 1.how to declare a variable using let and const

const faterName = 'Noor'
let season = 'rainy'


// 2. 6 basic conditions >,<,===, !==,<=,=>
    //  multiple conditions: &&, || 

if(faterName === 'noor' ||  season ==='rainy'){

}
else if(faterName === 'noor'){

}
else{

}

// 3. array
// index
// length, push,
const numbers = [33, 43, 54, 33]
numbers[0] = 56

// 4. for loop
for(let i=0; i<numbers.length; i++){
    const number = numbers[i]
    console.log(number)
}

// 5. function 
function multiply(num1, num2){
    const result = num1*num2
    return result
}

const output = multiply(34, 3)

// 6.object
// 3 ways to access property by name 
const student = {
    name:'sakinb',
    age: 32,
    movies: ['king' ,'friend']
}
 console.log(student.age) ;  // direct by property
console.log(student['age']) //access via property name string
console.log(student[myVariable]); //access via property name in a variable