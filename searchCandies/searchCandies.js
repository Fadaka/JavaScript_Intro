const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Mars', price: 1.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
  ];

//   function capitalize(s)
// {
//     return s && s[0].toUpperCase() + s.slice(1);
// }

function add(candiesArray,price,faveCandy){
  // realCandy = capitalize(faveCandy)
  let candyName = candiesArray.filter(candy => candy.name.includes(faveCandy))
  let candyPrice = candyName.filter(candy => candy.price < price)
  return candyPrice
};


console.log(add(candies,1.5,'M'))

//Alternate way of making candySearch function

const searchCandies = (prefix,  maxprice) => {
  return candies.filter(candy => { 
    return candy.name
  }).filter( candy => {
    return candy.price <= maxprice
  }).map( candy => {
    return candy.name
  })
};

console.log(searchCandies('M', 5))
module.exports = add;
