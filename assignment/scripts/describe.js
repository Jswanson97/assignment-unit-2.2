// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// we assign number to 1
// number ++ increases the count of number to 2
// the if statement says that if number is greater than or equal to 2, then console log yes
// we console log 'yes'

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we assign name to 'Dane'
// the if statement says that if name is equal to marry we will console log 'Hi, Mary!'
// the else statment says for everything else we will console log 'How do you do?'
// we console log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// we declare secret but dont assign it to anything, we also code to 123
// the if statement says that if code is equal to 123 secret will be assigned to super, and code will equal code x 2
// the next if statement says that if code is greater than 250 secret will be assigned to duper now
// 123 x 2 is 246 so we console log secret which is now 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we assign isStudent to a boolean of true, age to 34 and zip to 55407
// the if statement says that if student is equal to true and zip is greater than 80000, then we will console log 'You're a student on the West Coast!`
// else if 'isStudent' is equal to false or age is less than 30 we will console log 'What are your hobbies?'
// else if 'isStudent' is equal to true we will console log 'Welcome to Prime!'
//and if none of those are true the last else says we will console log 'How about the weather?'
// we will console log 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
/// FIX colorOne needs to be changed to blue and colorTwo needs to be changed red
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  // FIX - we are only setting colorOne to purple. we have to add colorTwo = 'purple' on the next line of code
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// FIX - this is a or, we need to have && to have a and
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// FIX - i think that logically it should be if(age >= minAge), also this will console log no entry, you would have to do if(minAge <= age) 
          console.log('entry');
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/


