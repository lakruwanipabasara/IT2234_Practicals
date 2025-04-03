function getMaxValue(number) {
    if (number < 10) {
        throw new Error("Number should have at least two digits");
    }
    
    let digits = [];
    while (number > 0) {
        digits.push(number % 10);
        number = (number - (number % 10)) / 10; 
    }
    
    digits.sort((a, b) => b - a);
    
    let maxNumber = 0;
    for (let digit of digits) {
        maxNumber = maxNumber * 10 + digit;
    }
    
    return maxNumber;
}


console.log(getMaxValue(215));
console.log(getMaxValue(1093)); 
console.log(getMaxValue(4583)); 