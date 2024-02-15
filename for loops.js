// syntax for a for loop
// for (initialexpression; condition; iterator){
//     // block of code
// }

// write a program to display "I love Javascript" five times in the console
for (let i = 1; i <= 5; i++) {
  console.log("I love javascript: ${i}");
}

// write a program to display numbers from 1 to 5
for (let i = 1; i <= 6; i++) {
  console.log("1,2,3,4,5: ${i}");
}

// write a program to display the sum of natural numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
//   console.log(i);
}

sum = 0;
n = 100;

for (let i = 1; i <= n; i++){
    sum = sum + i;
    console.log(`${sum}`);
}
