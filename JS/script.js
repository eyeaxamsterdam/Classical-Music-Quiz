'use strict';

let questionNum = 9;
let score = 0;
let incorrect = 0




function showQuestion() {
    $('.counter-num').text(questionNum+1);
    $('.num-questions').text(STORE.length);

    let html = 
    `<h3 class="question">${STORE[questionNum].question}</h3>
    <div class="flexans">`

    for(let i=0; i < STORE[questionNum].answers.length; i++) {
        html += `<button class="answer-btn btn" id="${i}">${STORE[questionNum].answers[i]}</button>`
    }

    html += `</div>`

    $('.qanda').html(html);
    $('.submit').show();
}


function checkAnswer(answer) {
    $('.btn').addClass('disabled').prop('disabled', true);;
    if (answer === STORE[questionNum].correctAnswer) {
        $('.correct, .next').show(); 
        $('h1').addClass('correct-heading');
        $('section').eq(1).addClass('question-card-correct');
        $('.correct').html(`${STORE[questionNum].correctResponse}`);
        score++;
    }
    else {
        $('.selected')
        $('.wrong, .next').show(); 
        $('h1').addClass('wrong-heading');
        $('section').eq(1).addClass('question-card-wrong');
        $('.wrong').html(`${STORE[questionNum].incorrectResponse}`);
        incorrect++
    }
    $('.submit').hide();
    $('.score-correct').text(score);
    $('.score-wrong').text(incorrect);   
}

function finishQuiz() {
    $('.next, .correct, .wrong, .next, .banner').hide();
    let finalScore=`You got ${score} out of ${STORE.length} correct. `
    if (score <= 3) {
        $('h1').html(finalScore + 'Yikes, that was not good!');
        $('.summary').html(`<h2>It's okay, you can try again! Click "restart"</h2>`);
    }
    else if (score <= 6) {
        $('h1').html(finalScore);
        $('.summary').html(`<h2>Not great! Try again though.</h2>`);
    }
    else if (score >= 7 && score != 10) {
        $('h1').html(finalScore + 'Hey, you\'re doing alright!');
        $('.summary').html(`<h2>Try and get a perfect score, now. Go again!</h2>`);
    
    }
    else {
        $('h1').html(`Is your name Ash Ketchem? Because you just got them all!`);
        $('.summary').html(`<h2>I guess you can go and score another perfect run if you want..</h2>`);
    }
    $('.summary').show();
    $('.question-card').hide();
    $('.restart').show();   
}

$('.next').click(function() {
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


$('.submit').on('click', function(event) {
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


$('.question-card').on('click','.btn', e=>{
    $('.selected').removeClass('selected');
    $(e.target).addClass('selected');
});


$('.start').on('click', function(event) {
    event.preventDefault();
    $('.banner').show();
    $('.start, .handel').hide();
    showQuestion();
});


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



/* runQuizApp() {



} */