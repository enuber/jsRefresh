// Function constructor

// var john = {
//     nane: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

var Person  = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function() {
    //     console.log(2018 - this.yearOfBirth);
    // }
};

//since every object has a prototype is a property of any object. this is how we access this.
Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
};
Person.prototype.lastName = "smith";

//this is called instantiation when we use a constructor to make a new object based off of it. We instantiate it.
//when we use the new operator a new empty object is created. The constructor function is then called. usually this
//points to the global object or "window". By using the new keyword, instead we are pointing at the empty object so
//THIS refers to that empty object.
var john = new Person('John', 1990, 'teacher');

console.log(john.name, john.yearOfBirth, john.job, john.lastName);
john.calculateAge();

var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

console.log(jane.name, jane.yearOfBirth, jane.job, jane.lastName);
jane.calculateAge();
console.log(mark.name, mark.yearOfBirth, mark.job, mark.lastName);
mark.calculateAge();