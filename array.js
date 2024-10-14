const products = [
    {name: 'laptop', color:'blue', price: 5000, brand:'Phone'},
    {name: 'camera', color:'white', price: 6000, brand:'witch'},
    {name: 'laptop', color:'red', price: 7000, brand:'apple'},
    {name: 'watch', color:'silver', price: 8000, brand:'lenovo'}
];


const brands = products.map(product =>product.brand)
console.log(brands)
const prices = products.map(product => product.price)
console.log(price)



products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {

})

// 3.filter

const cheap = products.filter(product => product.price <= 5000)
console.log(cheap)

const name= products.filter(pd =>pd.name('n'))
console.log(name)

//4.find 

const speacial = product.find(p => p.name.includes('n'));
console.log(speacial);