const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },

    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
]

// For loops
for(let i = 0; i <= 10; i++) {
    console.log('For Loop Number: ${i}');
}

// While loops 
let i = 0;
while(i <= 10){
    console.log('For Loop Number: ${i}');
    i++;
} 


// Looping through arrays 

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}
// Not the best way

// For ov loop
for(let todo of todos) {
    console.log(todos.text);
    // console.log(todos[1].text);
}

// High order array method 
// forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText =todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

const todoCompleted =todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})
console.log(todoCompleted);