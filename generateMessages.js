let generateMessages = (namesArray) => {
  let personalised_greeting = namesArray.map(greeting);
  return personalised_greeting;
};

let greeting = (namesAndDiscounts) => {
  return `Hi ${namesAndDiscounts.name}! ${namesAndDiscounts.discount}% off our best candies for you today!`;
};

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

console.log(generateMessages(namesAndDiscounts));
