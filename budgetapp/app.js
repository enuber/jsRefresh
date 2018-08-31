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



})();


var UIController = (function(){

})();


//by renaming the controllers in the arguments, it allows you to be able to quickly change
// the names of the actual functions and not have to rename many things inside this controller
//function if names change. In other words, we could use the actual budgetController and UIController
//within this function but, if we changed the name, we would have to then change them throughout here
//which is not a good practice, better to send in the functions as arguments and rename them within the
//function.
var controller = (function(budgetCtrl, UICtrl){

    //for DRY coding we are making this a function because we need it called both on an enter key
    //press as well as a button click press. So better to have it once than to repeat the code.
    var ctrlAddItem = function() {

        //1. get the filed input datas

        //2. add the item to the budget controller.

        //3. add the item to the UI

        //4. calculate the budget.

        //5. display the budget on the ui

        console.log('its alive');
    };

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    //doing the key event on the document as it isn't tied to a specific element on the page. So we
    //don't need to get a specific selector. We pass in the event object in order to find out
    //what key was pressed. The event passes in an object with many prototypes. BUt, specifically
    //we are interested in the keycode which references what key is being pressed. We also use
    //the event.which because of older browsers that don't recognize the keyCode.
    document.addEventListener('keypress', function(evt) {
        if (evt.keyCode === 13 || evt.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);

