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

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            //create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            //create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            //remember allItems[type] is another way of accessing an array and, since the value of type is what the same as
            //the names of the array, this will add the new item to the end of each array properly
            //push it into our data structure
            data.allItems[type].push(newItem);
            //return the new element
            return newItem;
        },

        testing: function() {
            console.log(data);
        }
    }
})();


var UIController = (function(){

    //this object makes things easier if classes change down the line, rather than having to rewrite a bunch of
    //lines of code, we can simply update the classes.
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
    };

    return{
      getinput: function() {
          return {
              type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
              description : document.querySelector(DOMstrings.inputDescription).value,
              value : document.querySelector(DOMstrings.inputValue).value,
          };
      },

        addListItem: function(obj, type) {
          var html, newHTML, element;
            //create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div>' +
                    '<div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp'){
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div>' +
                '<div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            //replace placeholder text with actual data
            //replace() allows you to find a bit of code and replace it with something else
            newHTML = html.replace('%id%', obj.id);
            newHTML = newHTML.replace('%description%', obj.description);
            newHTML = newHTML.replace('%value%', obj.value);

            //insert the html into the DOM
            //insertAdjatentHTML allows you to insert html into a specific area you specify. 'beforeend' specifies where it gets put
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);

        },

        getDOMStrings: function() {
          return DOMstrings;
        }
    };
})();


//by renaming the controllers in the arguments, it allows you to be able to quickly change
// the names of the actual functions and not have to rename many things inside this controller
//function if names change. In other words, we could use the actual budgetController and UIController
//within this function but, if we changed the name, we would have to then change them throughout here
//which is not a good practice, better to send in the functions as arguments and rename them within the
//function.
var controller = (function(budgetCtrl, UICtrl){

    //placing all the event listeners into one container
    var setupEventListeners = function() {
        var DOM = UIController.getDOMStrings();
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
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
    };

    //for DRY coding we are making this a function because we need it called both on an enter key
    //press as well as a button click press. So better to have it once than to repeat the code.
    var ctrlAddItem = function() {

        var input, newItem;
        //1. get the field input data
        input = UIController.getinput();
        console.log(input);

        //2. add the item to the budget controller.
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        //3. add the item to the UI
        UIController.addListItem(newItem, input.type);
        //4. calculate the budget.

        //5. display the budget on the ui

    };

    //to make the add event listeners funciton public, we need to return it as an object so it can be called from
    //outside else, nothing will happen.
    return {
        init: function() {
            setupEventListeners();
        }
    };

})(budgetController, UIController);

//only line of code needed to run the program, to initialize it.
controller.init();