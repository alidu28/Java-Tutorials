// alert("hi there");

// String, Numbers, Boolean, Null, Undefined

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const is_cool = true;
// const x = null;
// const y = undefined;

// console.log(typeof is_cool);

// const s = 'Hello World!';

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());

// console.log(s.substring(0, 5).toUpperCase());

// console.log(s.split(''))

// const s = 'technology, computers, it, code';

// console.log(s.split(','))

// Arrays - variables that hold multiple values

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears', 10, true];
// const fruits = ['apples', 'oranges', 'pears'];
// fruits[3] = 'grapes';

// fruits.push('mango');

// fruits.unshift('strawberries');

// fruits.pop();

// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('oranges'));
// console.log(fruits[1]);
// console.log(fruits);

// const person = {
//     first_name: 'John',
//     last_name: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// person.email = 'john@gmail.com';

// console.log(person);
// console.log(person.first_name, person.last_name, person.age);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// Pulling out
// const { first_name, last_name, address: { city } } = person;
// console.log(first_name);
// console.log(city);

// const todos = [
//     {
//         id:1,
//         text: 'Take out trash',
//         is_completed: true,
//     },

//     {
//         id:2,
//         text: 'Meeting with boss',
//         is_completed: true,
//     },

//     {
//         id:3,
//         text: 'Dentist appointment',
//         is_completed: false,
//     },
// ];

// console.log(todos);
// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// For
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`For Loop Number: ${i}`);
// }

// Increment in javascript
// let my_var = 86;

// my_var = my_var + 1; instead_of this,
// my_var++; you do this
// console.log(my_var);

// Dcreament in javascript
// let my_var = 86;
// my_var = my_var - 1; instead
// my_var--; do this
// console.log(my_var);

// finding remainder
// let remainder;
// remainder = 4 % 2;
// console.log(remainder);

// compound assignment with augmented addition
// let a = 3;
// let b = 7;
// let c = 12;

// a = a + 7; instead
// b = 6 + b; instead
// c = c + 5; instead

// a += 12; do this
// b += 6;
// c += 5;

// subtraction
// let a = 7;
// let b = 16;
// let c = 14;

// a -= 3;
// b -= 5;
// c -= 7;
// console.log(c);

// multiplication
// let a = 4;
// let b = 3;
// let c = 8;

// a *=4;
// b *=5;
// c *=8;
// console.log(c);

// division
// let a = 123;
// let b = 122;
// let c = 142;

// a /=3;
// b /=4;
// c /=6;
// console.log(c);

// Escaping literal quotes in strings

// let text = "this is a"double quotes"string test";
// let text = "this is quotes\"double quotes\"string test\".";
// console.log(text);

// let my_str = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>"; instead

// let my_str = '<a href="http://www.example.com" target=_blank>Link</a>';
// console.log(my_str);
// or back ticks can be used in place of single quotes

// Escape Sequence in strings
/*
CODE OUTPUT
\' single quotes 
\" double quotes 
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed 
*/

// let my_str = "first_line\n\t\\second_line\nthird_line"
// console.log(my_str);

// concatenating strings with plus operator
// let our_str = "I come first. " + "I come second."; or

// let our_str = "I come first "
// our_str += "I come second"
// console.log(our_str);

// constructing strings with variables
// let our_name = "free_code_camp";
// let our_str = "Hello our name is " + our_name + " How are you doing?";
// console.log(our_str);

// appending variables to strings
// let an_adjective = "taller!";
// let our_str = "The Boys are ";
// our_str += an_adjective;
// console.log(our_str);

// using the bracket notation to find character in a string
// let first_name = "Mohammed"
// console.log(first_name[3]);

//  correction of strings
let word = "Jello World";
word = "Hello World";
console.log(word);

// word blanks
function word_blanks(my_noun, my_adjective, my_verb, my_adverb) {
  let result = "";
  result +=
    "The " +
    my_adjective +
    " " +
    my_noun +
    " " +
    my_verb +
    " to the store " +
    my_adverb +
    ".";

  return result;
}

console.log(word_blanks("big", "dog", "ran", "quickly"));
console.log(word_blanks("bike", "slow", "flew", "slowly"));

console.clear();

// functions

// declaration of function

function greet() {
  console.log("Hello there");
}

greet();

// function expression
