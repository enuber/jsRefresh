//by placing the function in an iffe we are protecting the code so that it wouldn't interfere with anyone
//elses code. So variables and now safe. You can't interact with this bit of code as it will run exactly one time
//when the program starts. So this isn't always a best solution but, this is using information learned in this
//part of the course.

(function(){
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i=0; i<this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    };
    Question.prototype.checkAnswer = function(answer, callback) {
        var sc;
        if (answer === this.correct) {
            console.log('Correct Answer!');
            sc = callback(true);
        } else {
            console.log('Wrong Answer');
            sc = callback(false);
        }
        this.displayScore(sc);
    };

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('-------------------------------------------------------');
    };

        var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
        var q2 = new Question('What\'s the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
        var q3 = new Question('What does best describe coding', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

        var questions = [q1, q2, q3];

    //this is a closure, we are returning a function that has access to the sc variable of the outer scope so that it
    //can increase the score. You can set multiple variables to this function and, each will be independent.
        function score() {
            var sc = 0;
            return function(correct) {
                if (correct) {
                    sc++;
                }
                return sc;
            }
        }

        var keepScore = score();

        function nextQuestion() {

            var n = Math.floor(Math.random() * questions.length);

            questions[n].displayQuestion();
    //parseInt() converts a string to a number;
            var answer = prompt('Please select the correct answer. Type exit to leave.');

            //allows you to exit out if user puts in the word exit. Otherwise it
            if (answer.toLowerCase() !== 'exit') {
                questions[n].checkAnswer(parseInt(answer), keepScore);
                nextQuestion();
        }
    }

    nextQuestion();
})();

