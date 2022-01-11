function fizzBuzzCalcualtor(n) { for (var i = 1; i < n; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);

}
return(i)
}

console.log(fizzBuzzCalcualtor(25))


module.exports = fizzBuzzCalcualtor;
