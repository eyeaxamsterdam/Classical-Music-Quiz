'use strict';

/* initialize scores and question number */
let questionNum = 9;
let score = 9;
let incorrect = 0


/* event listener will run this on restart, next, and start buttons.*/
function showQuestion() {
    $('.counter-num').text(questionNum+1);
    $('.num-questions').text(STORE.length);

    let htmlQuestion = 
    `<h3 class="question">${STORE[questionNum].question}</h3>`

    /* populate answers by index */
    let htmlAnswers = ``
    for(let i=0; i < STORE[questionNum].answers.length; i++) {
        htmlAnswers += `<input type="button" class="answer-btn btn" id="${i}" value="${STORE[questionNum].answers[i]}">`
    }
    $('.question').html(htmlQuestion);
    $('.flexans').html(htmlAnswers);

    $('.submit').show();
}

/* event listener will run this as well on submit button. if correct one thing will run, if
not another will run. score and not-needed buttons will be hidden with adding classes or using .hide() */
function checkAnswer(answer) {
    $('.submit').hide();
    $('.btn').addClass('disabled').prop('disabled', true);
    //don't want butons to be clickable after answer is checked
    if (answer === STORE[questionNum].correctAnswer) {
        $('.correct, .next').show(); 
        $('h1').addClass('correct-heading');
        $('section').eq(1).addClass('question-card-correct');
        $('section').eq(1).removeClass('question-card');
        $('.correct').html(`${STORE[questionNum].correctResponse}`);
        score++;
    }
    else {
        $('.selected')
        $('.wrong, .next').show(); 
        $('h1').addClass('wrong-heading');
        $('section').eq(1).addClass('question-card-wrong');
        $('section').eq(1).removeClass('question-card');
        $('.wrong').html(`${STORE[questionNum].incorrectResponse}`);
        incorrect++
    }
    $('.score-correct').text(score);
    $('.score-wrong').text(incorrect);  
}


/* when STORE.length is met, the next button will run a different function that give the final feedback and
give a chance to take the quiz again */
function finishQuiz() {
    $('.next, .correct, .wrong, .next, .banner').hide();
    let finalScore=`You got ${score} out of ${STORE.length} correct! `
    if (score <= 3) {
        $('h1').html(finalScore + 'Yikes, that was not good!');
        $('.summary').html(`<div><img class=imgBank src="images/mozartlaughing.gif" alt="WA Mozart laughing"></div><h2>It's okay, you can try again! Click "restart."</h2>`);
    }
    else if (score <= 6) {
        $('h1').html(finalScore);
        $('.summary').html(`<div><img class=imgBank src="images/mozartlaughing.gif" alt="WA Mozart laughing"></div><h2>Not great! Try again though.</h2>`);
    }
    else if (score >= 7 && score != 10) {
        $('h1').html(finalScore + 'Hey, you\'re doing alright!');
        $('.summary').html(`<h2>Keep trying and get a perfect score, now. Go again!</h2><div><img class=imgBank src="images/marchingcello.gif" alt="person trying to march and play cello"></div>`);
    
    }
    else {
        $('h1').html(`You got them all correct! Go celebrate by listening to Mahler's 2nd Symphony.`);
        $('.summary').html(`<div><img class=imgBank src="images/mahler.gif" alt="Simon Rattle in absolute extacy conducting Mahler's 2nd symphony"></div><h2>I guess you can click "restart" and score another perfect run if you want...</h2>`);
    }
    $('.summary').show();
    $('.question-card').hide();
    $('.restart').show();   
}


/* this starts the whole quiz */
$('.start').on('click', function(event) {
    event.preventDefault();
    $('.banner, .answers').show();
    $('.start, .handel').hide();
    showQuestion();
});


/* brings up the next question */
$('.next').click(function() {
    $('section').eq(1).addClass('question-card'); 
    $('section').removeClass('question-card-wrong question-card-correct disabled');
    $('.banner').show();
    $('.answer-card, h1').removeClass('wrong correct-heading wrong-heading');
    if (questionNum < STORE.length-1) {
        $('.next, .correct, .wrong').hide();
        questionNum++;
        $('.submit').show();
        showQuestion();
    }
    else {
        finishQuiz();
    }
});


/* runs the checkAnswer() function */
$('.submit').on('click', function(event) {
    event.preventDefault();
    const answer = parseInt($('.selected').attr('id'));
    if ($('.selected').length) {
        checkAnswer(answer);
        $('.next').show();
        $('.banner').hide();
    } 
    else {
        alert('Please select an answer');
    }
});

/* when you click buttons it will deselect the other selections */
$('.question-card').on('click','.btn', e=>{
    e.preventDefault();
    $('.selected').removeClass('selected');
    $(e.target).addClass('selected');
});

/* basically the same as the start event listener */

$('.restart').on('click', function(event) {
    console.log('click')
    questionNum = 0;
    score = 0;
    incorrect = 0;
    $('.score-correct').text(score);
    $('.score-wrong').text(incorrect);   
    event.preventDefault();
    $('.restart').hide();
    $('.submit').show();
    $('.question-card').show();
    $('.summary').hide();
    $('h1').text('How Well Do You Know Classical Music?');
    showQuestion();
});