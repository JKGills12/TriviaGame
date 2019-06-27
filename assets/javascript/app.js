$(document).ready(function() {

    // Event Listners
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click', '.option', trivia.guessChecker);

})

var trivia = {
    // Trivia Properties
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 10,
    timerOn: false,
    timerId: '',
    // Quesitons options and answers data
    questions: {
        q1: 'Which character decides to whiten his teeth before going on a first date with a girl he\'s had a crush on for a long time?',
        q2: 'Who was Ross\' second wife?',
        q3: 'Which two "friends" hook up in London?',
        q4: 'Fill in the blanks for Phoebe\'s song: "___ ___, ___ ___, what are they feeding you?"',
        q5: 'What borough of New York does the "Friends" gang live in?',
        q6: 'Who plays Chandler Bing?',
        q7: 'Who walked Carol down the aisle when she married Susan?',
        q8: 'Who plays Rachel Green?',
        q9: 'When Rachel, Chandler, and Ross are trying to carry Ross\s new couch up a flight of stairs, what is the word that Ross yells out constently to the other two?',
        q10: 'Who was Rachel going to marry but left at the alter?',
        q11: 'What is Ross most freightened of?',
        q12: 'What motivated Monica to loss weight?',
        q13: 'What is the name of Ross\'s son?',
        q14: 'What was the name of the character Joey played on "Days of Our Lives"?',
        q15: 'What is Joey\'s rule on eating with other people?',
        q16: 'Whose favorite food is sandwiches?',
        q17: 'What was the name of Chandler\'s annoying ex-girlfriend?',
        q18: 'Who plays Joey Tribbiani?',
    },
    options: {
        q1: ['Ross', 'Chandler', 'Joey', 'Gunther'],
        q2: ['Phoebe', 'Emily', 'Janice', 'Rachel'],
        q3: ['Ross + Rachel', 'Chandler + Monica', 'Joey + Phoebe', 'Chandler + Janice'],
        q4: ['Smelly dog, smelly dog', 'Sticky fish, stinky fish', 'Smelly cat, smelly cat', 'Rotten skunk, rotten skunk'],
        q5: ['The Bronx', 'Queens', 'Brooklyn', 'Manhattan'],
        q6: ['Matt LeBlanc', 'David Schwimmer', 'Joshua Jackson', 'Matthew Perry'],
        q7: ['Ross', 'Chandler', 'Joey', 'Rachel'],
        q8: ['Jennifer Aniston', 'Courtney Cox', 'Lisa Kudrow', 'Gweneth Paltrow'],
        q9: ['Left!', 'Right!', 'Pivot!', 'Lift!'],
        q10: ['Ross', 'Joey', 'Chandler', 'Barry'],
        q11: ['Cats', 'Dogs', 'Spiders', 'Commitment'],
        q12: ['She wanted to fit in her wedding dress', 'She heard Chandler call her fat', 'She was in The Biggest Loser', 'She wanted to be a body builder'],
        q13: ['Albert', 'William', 'Ben', 'Austin'],
        q14: ['Dr. Drake Ramoray', 'Sargent Phil Murray', 'President Allen Poe', 'Father Larry Jones'],
        q15: ['They must share food', 'No one touches his food', 'He doesn\'t pay', 'He picks the restaurant'],
        q16: ['Monica', 'Rachel', 'Ross', 'Joey'],
        q17: ['Rachel', 'Janice', 'Susan', 'Phoebe'],
        q18: ['Matt LeBlanc', 'Matthew Perry', 'Drake Ramoray', 'Channing Tatum']
    },
    answers: {
        q1: 'Ross',
        q2: 'Emily',
        q3: 'Chandler + Monica',
        q4: 'Smelly cat, smelly cat',
        q5: 'Manhattan',
        q6: 'Matthew Perry',
        q7: 'Ross',
        q8: 'Jennifer Aniston',
        q9: 'Pivot!',
        q10: 'Barry',
        q11: 'Spiders',
        q12: 'She heard Chandler call her fat',
        q13: 'Ben',
        q14: 'Dr. Drake Ramoray',
        q15: 'No one touches his food',
        q16: 'Joey',
        q17: 'Janice',
        q18: 'Matt LeBlanc'
    },
    
    // Trivia Methods
    // Method to initialize the game
    startGame: function() {
        // Restarting game result
        trivia.currentSet = 0;
        trivia.correct = 0;
        trivia.incorrect = 0;
        trivia.unanswered = 0;
        clearInterval(trivia.timerId);

        // Shows game section
        $('#game').show();

        // Empty last results
        $('#results').html('');

        // Show timer
        $('#timer').text(trivia.timer);

        // Remove start button
        $('#start').hide();

        $('#remaining-time').show();

        // Ask first question
        trivia.nextQuestion();
    },
    // Method to loop through and display questions and options
    nextQuestion : function() {
        
    // Set timer to 10 seconds for each question
    trivia.timer = 10;
    $('#timer').removeClass('last-seconds');
    $('#timer').text(trivia.timer);

    // To prevent time speed up
    if(!trivia.timerOn){
        trivia.timerId = setInterval(trivia.timerRunning, 1000);
    }

    // Gets all the question then indexes the current questions
    var questionContent = Object.values(trivia.questions)
    [trivia.currentSet];
    $('#question').text(questionContent);

    // An array of all the user options for the current question
    var questionOptions = Object.values(trivia.options)
    [trivia.currentSet];

    // Creates all the trivia guess options in the html
    $.each(questionOptions, function(index, key) {
        $('#options').append($('<button class="option btn btn-info btn-lg">' + key + '</button>'));
    })

    },
    // Method to decrement the counter and count unanswered if the timer runs out
    timerRunning : function() {
        // If timer still has time left and there are still questions left to ask
        if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
            $('#timer').text(trivia.timer);
            trivia.timer--;
                if(trivia.timer === 4){
                    $('#timer').addClass('last-seconds');
                }
        }
        // The time has run out and increment unaswered questions, run result
        else if(trivia.timer === -1) {
            trivia.unanswered++;
            trivia.resut = false;
            clearInterval(trivia.timerId);
            resultId = setTimeout(trivia.guessResult, 1000);
            $('#results').html('<h3>Out of Time! The answer was ' + Object.values(trivia.answers)[trivia.currentSet] + '</h3>');
        }
        // If all the questions have been shown end the game, show results
        else if(trivia.currentSet === Object.keys(trivia.questions).length) {
        // Adds result of game (correct, incorrect, unanswered) to the page
        $('#results')
            .html('<h3>Thank you for playing!</h3>' +
            '<p>Correct: ' + trivia.correct + '</p>' +
            '<p>Incorrect: ' + trivia.incorrect + '</p>' +
            '<p>Unanswered: ' + trivia.unanswered + '</p>' +
            '<p>Please play again!</p>');

            // Hide game section
            $('#game').hide();

            // Show the start button to begin a new game
            $('#start').show();
        }

    },

    // method to evaluate the option clicked
    guessChecker : function() {

    // Timer ID for gameResult setTimeout
    var resultId;

    // The answer to the current question being asked
    var currentAnswer = Object.values(trivia.answers)
    [trivia.currentSet];

    // If the text of the option picked matches the answer of the current question, increment correct
    if($(this).text() === currentAnswer) {

    // Turn button green for correct
        $(this).addClass('btn-success').removeClass('btn-info');

        trivia.correct++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 2000);
        $('#results').html('<h3>Correct Answer!</h3>');
    }
    // Else the user picked the wrong option, increment incorrect
    else{
        // Turn button clicked red for incorrect
        $(this).addClass('btn-danger').removeClass('btn-info');

        trivia.incorrect++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 2000);
        $('#results').html('<h3>Better luck next time! '+ currentAnswer + '</h3>');
        }
    },
    // Method to remove previous question results and options
    guessResult : function() {
        
        // increment to next question set
        trivia.currentSet++;

        // remove the options and results
        $('.option').remove();
        $('#results h3').remove();

        // begin next question
        trivia.nextQuestion();
    }
}
