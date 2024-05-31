// Using a temporary variable
let first_number = 2;
let second_number = 1;

let temp = first_number;
first_number = second_number;
second_number = temp;

console.log(first_number); 
console.log(second_number); 


// Using Array Destructing 
let firstNumber = 15;
let secondNumber = 17;

[first_number, second_number] = [second_number, first_number];

console.log(first_number);  
console.log(second_number); 

// Using Arithmetic Operations 
let firstnumber = 15;
let secondnumber = 17;

first_number = first_number + second_number; 
second_number = first_number - second_number; 
first_number = first_number - second_number; 

console.log(first_number); 
console.log(second_number); 


