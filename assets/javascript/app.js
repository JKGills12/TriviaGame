$(document).ready(function () {

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
    timer: 20,
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
    
}
