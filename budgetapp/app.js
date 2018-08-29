//iffy allows you to have data privacy because it creates a new scope that isn't visible from outside scope.

// var budgetController = (function(){
//
//     //these are private variable and functions because you can not access them outside of this function
//     var x = 23;
//
//     var add = function(a) {
//         return x+a;
//     };

    //this allows you to create some visibility from the outside. when you are returning an object, you
    //then have access to what is within the object which may use the private variables and functions to
    //complete tasks. by calling budgetController.publicTest you are able to pass in your own value to
    //then be added to a variable that otherwise is inaccessible. This is a closure in that it
    //is returning a function that has access to the outer scope. (the scope within budgetController)
//     return {
//         publicTest: function(b) {
//             console.log(add(b));
//         }
//     }
//
// })();

var budgetController = (function(){

    var x = 23;

    var add = function(a) {
        return x+a;
    };

    return {
        publicTest: function(b) {
           return add(b);
        }
    }

})();


var UIController = (function(){

})();


//by renaming the controllers in the arguements, it allows you to be able to quickly change
// the names of the actual functions and not have to rename many things inside this controller
//function if names change. In other words, we could use the actual budgetController and UIController
//within this function but, if we changed the name, we would have to then change them throughout here
//which is not a good practice, better to send in the functions as arguements and rename them within the
//function.
var controller = (function(budgetCtrl, UICtrl){

    var z = budgetCtrl.publicTest(25);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);

