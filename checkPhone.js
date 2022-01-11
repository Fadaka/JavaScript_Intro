let checkLength = (phoneNumber) => {
  return phoneNumber.length <= 10;
};

let filterLongNumbers = (phoneNumbersArray, checkLength) => {
  let correct_numbers = phoneNumbersArray.filter(checkLength);
  return correct_numbers;
};

const numbers = [
  "1763687364",
  "4763687363",
  "7867867862",
  "aaaaaaaabbbbbbbcccccdddddddd", // this element should be filtered
];

console.log(filterLongNumbers(numbers, checkLength));
