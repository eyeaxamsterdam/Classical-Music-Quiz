'use strict';

let questionNum = 0;
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
    $('.btn').prop('disabled', 'true');
    if (answer === STORE[questionNum].correctAnswer) {
        $('.correct, .next').show(); 
        $('h1').addClass('correct-heading');
        score++;
    }
    else {
        $('.wrong, .next').show(); 
        $('h1').addClass('wrong-heading');
        incorrect++
    }
    $('.submit').hide();
    $('.score-correct').text(score);
    $('.score-wrong').text(incorrect);   
}

function finishQuiz() {
    $('.next,.correct, .wrong, .next').hide();
    if (score <= 3) {
        $('.summary').html(`<h2>Oof, not very good. "restart" to have another go!</h2>`)
        $('h1').html(`oof, not so good`)
    }
    else if (score <= 6) {
        $('.summary').html(`<h2>That's it! Click "restart" to have another go!</h2>`)
        $('h1').html(`not great!`)
    }
    else if (score >= 7 && score != 10) {
        $('.summary').html(`<h2>That's it! Click "restart" to have another go!</h2>`)
        $('h1').html(`You did good!`)
    
    }
    else {
        $('.summary').html(`<h2>That's it! Click "restart" to have another go!</h2>`)
        $('h1').html(`You got em all!`)
    }
    $('.summary').show();
    $('.question-card').hide();
    $('.restart').show();   
}

$('.next').click(function() {
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

