let user = {
    firstname: 'giorgi' ,
    lastname: 'smith' ,
    age: 25 ,
    studentstatus: 'active'
} ;

// 1 ამოიღეთ user ცვლადის სტუდენტის სტატუსი;

delete user.studentstatus;

console.log(user);

// 2  შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი(for da while ციკლით);
 
let colors = ['red', 'green', 'yellow', 'black'];

for ( i=0 ; i < 4 ; i++ ) {
    console.log(colors[i]);
}

for (let element of colors) {
    console.log(element);
}

let index=0; 
while (index < colors.length) {
    console.log(colors[index]);
    index++;
}

// 3 შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5){
        console.log(numbers[i]); 
    }
}

// 4

let person = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

if (person.age < 18 && person.studentstatus == 'active') {
    console.log('Hello');
} else if (person.name == 'levan') {
    console.log('hello levani');
} else if (person.status == 'active' || person.age < 25 ) {
    console.log("hello world");
} else {
    console.log('error');
}

// 5 ? 

let array = ['watermelon' , 'pear' , 10 , 45 ,50 ,'apple' , 'ananas'];

for ( let i=0; i < array.lenght ; i++ )  {
    if (typeof i == string ) {
        console.log(array[i]);
    }
}

// 6 ? 
//  7?

// 8

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

console.log (user[2]['status']);

