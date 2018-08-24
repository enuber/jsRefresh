// Function constructor

// var john = {
//     nane: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person  = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // this.calculateAge = function() {
//     //     console.log(2018 - this.yearOfBirth);
//     // }
// };
//
// //since every object has a prototype is a property of any object. this is how we access this.
// Person.prototype.calculateAge = function() {
//     console.log(2018 - this.yearOfBirth);
// };
// Person.prototype.lastName = "smith";

//this is called instantiation when we use a constructor to make a new object based off of it. We instantiate it.
//when we use the new operator a new empty object is created. The constructor function is then called. usually this
//points to the global object or "window". By using the new keyword, instead we are pointing at the empty object so
//THIS refers to that empty object.
// var john = new Person('John', 1990, 'teacher');
//
// console.log(john.name, john.yearOfBirth, john.job, john.lastName);
// john.calculateAge();
//
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');
//
// console.log(jane.name, jane.yearOfBirth, jane.job, jane.lastName);
// jane.calculateAge();
// console.log(mark.name, mark.yearOfBirth, mark.job, marke.lastName);
// mark.calculateAge();

//Object.create
// object.create builds and object that inherits directly from what is passed in as the first arguement. a constructor
// inherits from the prototype property. object.create allows you to directly specify which object should be
// a prototype;
// var personProto = {
//   calculateAge: function() {
//       console.log(2018-this.yearOfBirth);
//   }
// };
//
// var john = Object.create(personProto);
// john.name = 'John';
// john.job = 'teacher';
// john.yearOfBirth = 1990;
//
// var jane = Object.create(personProto,
//     {
//         name: {value: 'Jane'},
//         yearOfBirth: {value: 1969},
//         job: {value: 'designer'}
//     });

//Primitives vs objects

//primatives
var a = 22;
var b = a;
a = 46;
console.log(a, b); //gives 46, 23
//objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age, obj2.age); //both are 30; this happens because they both point to the same object in memory, it is
// the same object versus the  primatives which are stored bits of memory
//functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};
function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}
change(age, obj);
console.log(age, obj.city)
//this gives back 27, San Francisco the Primative within the function can be changed as much as you want but will not
// change what is on the outside. However when sending in an object, we are sending in a reference to the object and when
// the object is changed within the function, you can change the reference and have it change the object outside of the
// function because it is a reference pointing to where the data is stored not an actual primative value;

//Passing functions as arguements

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
//this is being used as a call back function because we are using it to pass into another function to be used
//at a later time, it is not being called directly.
function calcAge(el) {
    return 2018-el;
}
function isFullAge(el) {
    return el >= 18;
}
function maxHeartRate(el) {
    if (el >= 18 && el <=81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calcAge);
console.log(ages);
var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

//functions returning functions

function interviewQuestion(job) {
    if (job === 'designer'){
        return function(name){
            console.log(name + ', can you explain what UX design is');
        }
    } else if (job === 'teacher'){
        return function (name){
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?' )
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');

//this works because the function calls go from left to right. So interviewQuestion is called with teacher passed in
//and then the function is returned and, is immediately invoked with Mark being passed in.
interviewQuestion('teacher')('Mark');

//iife functions

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//without the fun ()(); the inner function is a function declaration with no name so it will throw an error
//you need to add in the ()() so that it becomes an expression and, the second () makes the function get called immediately
//what's inside a () can not be a statement but becomes an expression. without the second set of () the expression wouldn't
//ever do anything by adding the second set of () you are invoking the expression. Also an IFFE only gets called once
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//this is how you would pass variables, the function is hidden completely from outside scope
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

//closures
//an inner function always has access to the variables and parameters of its outer function even after the outer function has returned.
//this works because when the function is returned, it is a point in memory that houses the outer variables, so when it is called again,
//it is being called from that point in memory where it still retains the variables of it's scope chain, which includes those in the outer
//function. The scope chain always stays in tact.
function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

//this is another way of calling the function it is called first with the age of 66 and, the function is returned and immediately
//called again with the year of birth. the above method works as well and allows you to create a variable that houses the inner
//function (ie the function that is returned). Then it can be called anytime with differing years.
retirement(66)(1990);

var retirementDE = retirement(65);
var retirementIceland = retirement(67);

retirementDE(1990);
retirementIceland(1990);

// function interviewQuestion(job) {
//     if (job === 'designer'){
//         return function(name){
//             console.log(name + ', can you explain what UX design is');
//         }
//     } else if (job === 'teacher'){
//         return function (name){
//             console.log(name + ', what subject do you teach?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?' )
//         }
//     }
// }

function interviewQues(job) {
    return function(name) {
        if (job === 'designer'){
            console.log(name + ', can you explain what UX design is');
        } else if (job === 'teacher'){
            console.log(name + ', what subject do you teach?');
        } else {
            console.log('Hello ' + name + ', what do you do?' )
        }
    }
}

interviewQues('teacher')('John');