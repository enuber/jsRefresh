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
    Question.prototype.checkAnswer = function(answer) {
        if (answer === this.correct) {
            console.log('Correct Answer!');
        } else {
            console.log('Wrong Answer');
        }
    };


    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question('What\'s the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    var questions = [q1, q2, q3];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();
//parseInt() converts a string to a number;
    var answer = parseInt(prompt('Please select the correct answer'));
    questions[n].checkAnswer(answer);
})();

