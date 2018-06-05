/**
 * Created by eriknuber on 5/31/18.
 */
console.log("hello world!");
var name = 'John';
console.log(name);
var lastName = 'Smith';
console.log(lastName);
var fullName = name + ' ' + lastName;
console.log(fullName);

var fullAge = true;

// var prompted = prompt("What is the last name?");
// console.log(prompted);
var age = 26;
var birthYear = 2018 - age *2;
console.log(birthYear);
var isMarried = "no";

if (isMarried === "yes") {
    console.log(name + " is married");
} else {
    console.log(name + " is not married");
}

if (age < 20) {
    console.log("John is a teenanger");
} else if ( age >= 20 && age < 30) {
    console.log("John is in his twenties")
} else {
    console.log("John is a man");
}

var job = "cop";

switch(job) {
    case "teacher":
        console.log("John teaches kids.");
        break;
    case "driver":
        console.log("John drives a cab in Lisbon.");
        break;
    case "cop":
        console.log("John helps fight crime.");
        break;
    default:
        console.log("John does something else");
}
//coding challenge
var adam = {
    height: 65,
    age: 30
};
var eve = {
    height: 50,
    age: 30
};
var snake = {
    height: 5,
    age: 30
};

score = (height, age) => height + (age * 5);

adam.score = score(adam.height, adam.age);
eve.score = score(eve.height, eve.age);
snake.score = score(snake.height, snake.age);

if (adam.score > eve.score && adam.score > snake.score) {
    console.log("Adam Wins");
} else if (eve.score > adam.score && eve.score > snake.score) {
    console.log("Eve Wins");
} else if (snake.score > adam.score && snake.score > eve.score) {
    console.log("Snake Wins");
} else if (snake.score === adam.score && adam.score === eve.score) {
    console.log('It\'s a draw');
} else {
    console.log("Hmmm I can't figure it out");
}

//functions

function calculateAge(yearBorn) {
        var age = new Date().getFullYear() - yearBorn;
        return age;
}
//this is ES6 version
calcAge = yearBorn => new Date().getFullYear() - yearBorn;


let adamsAge = calcAge(1864);
console.log(adamsAge);
let ageEve = calcAge(1992);
console.log(ageEve);

function yearsToRetirement(name, birthYear) {
    var age = calcAge(birthYear);
    var retirementYear = 65 - age;
    console.log(name + " will retire in " + retirementYear + " years.");
}
//es6 function
yTR = (name, year) => {
  const age = calcAge(year);
  const retirement = 65 - age;
  if (retirement >= 0 ) {
      console.log(name + " will retire in " + retirement + " years.");
  } else {
      console.log(name + " has already retired.")
  }
};

yTR("John", 1990);
yTR("Mary", 1945);


//arrays
let names = ["John", "Jane", "Mary"];
var years = new Array(1990, 1969, 1948);

console.log(names[0], years[0]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'Teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);
john.pop();
john.shift();

if (john.indexOf('designer') === -1) {
    console.log("John Is Not A Designer")
}

//Objects

var john = {
    firstName : "John",
    lastName : "Smith",
    yearOfBirth: 1990,
    job : 'teacher',
    isMarried : false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        return age;
    }
};

console.log(john.lastName);
console.log(john['job']);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();

jane.firstName = "Jane";
jane.lastName = "Smith";
jane['yearOfBirth'] = '1969';
jane['job'] = 'retired';
jane.isMarried =  true;

console.log(jane);

console.log(john.family, john.family[1]);
console.log(john.calculateAge());
var age = john.calculateAge();
john.age = age;
console.log(john);


var Mark = {
    firstName : "Mark",
    lastName : "Smith",
    yearOfBirth: 1990,
    job : 'teacher',
    isMarried : false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = new Date().getFullYear() - this.yearOfBirth;
    }
};

console.log(Mark);

//Loops

for (var i = 0; i <= 10; i++) {
    console.log(i);
}

var nameList = ['John', 'Jane', 'Mark', 'Mary', 'Bob'];

for (var i=0; i < nameList.length; i++) {
    console.log(nameList[i]);
}

//while loops
var i = nameList.length - 1;
while(i > -1) {
    console.log(nameList[i]);
    i--;
}

//break will stop a loop.  continue will allow you to skip a value in a loop or
//allow something else to happen and then continue on within the loop. in this
//case we would be skipping the value of 3.

for (var i=1; i <=5; i++) {
    if(i===3) {
        continue;
    }
    console.log(i);
}