// '', 0, false, null, undefined
// 'alman', '4', {},[]
// check truthy
const myvart =5
if(myvart){
    myvar = myvar*33;
}
else{
    myvar= 0;
}

let mymoney = 50;
// you check negative or falsey anything
if(!mymoney){
      
}

let food;

const money=70
if (money>100){
    food = 'biriyani'
}
else{
    food= 'cha'
}

// ternary

let food1 =money>100? 'biriyani' : 'cha'
console.log(food1);
 
// number to string 

let drink = money>199? 'maal' : 'rc';
const num1 = 52;
console.log(num1);
const numstring = num1 + '';
console.log(numstring);

// string to number
const input ='390';
const inputnum = +input
console.log(inputnum)

// const 
let isActive = true;
const showUser = () => console.log('display-user')
const showUse = () => console.log('hide-user')
isActive? showUse() : showUser();
isActive && showUser();
// use || if the left side is falsse then right side will be executed
isActive || showUse();

// toggle boolean
isActive = !isActive 