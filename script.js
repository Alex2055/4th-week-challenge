window.addEventListener('DOMContentLoaded', connectEvents);

var currentcardindex = 0;

var score = 0;


function cardLoad(arreyindex) {
    console.log(score)
    var z = document.getElementById("question");
    z.innerText = cards[arreyindex].q
    for (var u = 0; u < cards[arreyindex].answers.length; u++) {
        var h = document.createElement("BUTTON");
        h.classList.add("cardbuttons");
        var m = document.createTextNode(cards[arreyindex].answers[u].text);
        h.appendChild(m);
        document.getElementById("answers").appendChild(h);
        h.onclick = nextCard(cards[arreyindex].answers[u].isCorrect);

    }

}


// after start quiz button clicked hide intro and load question and buttons
function showQuestion() {
    var x = document.getElementById("main-text");
    x.style.display = "none";

    var y = document.getElementById("question-body");
    y.style.display = "block";
    currentcardindex = 0;

    cardLoad(0);
    timerGo();
}

function connectEvents() {

    document.getElementById("start-quiz").onclick = showQuestion;



}

function nextCard(isCorrect) {
    return function () {
        if (isCorrect) {
            score = score + 100;

            document.getElementById("C-or-W").innerHTML = "Correct";
        }
        else {
            console.log("wrong");
            document.getElementById("C-or-W").innerHTML = "Wrong"
        }
        document.querySelectorAll(".cardbuttons").forEach(function (button) { button.remove() });


        currentcardindex++;
        if (currentcardindex == cards.length) {
            initialsEnter()
        }
        else {
            cardLoad(currentcardindex);
        }
    }

}

function initialsEnter() {
    var y = document.getElementById("question-body");
    y.style.display = "none";
    var y = document.getElementById("init-input");
    y.style.display = "block";
    var scoreto = score.toString();
    document.getElementById("final-score").innerHTML = scoreto;
    document.getElementById("submit-button").onclick = submitScore;


}

function timerGo() {
    var timeleft = 20;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            initialsEnter();
            timeleft++;
        }
        timeleft = timeleft - 1;
        timeleftstring = timeleft.toString();
        document.getElementById("time-amount").innerHTML = timeleftstring;
    }, 1000);
}

function submitScore() {
    window.location.href = './highscores.html';
    var initials = document.querySelector("#input-value").value;
    var score = document.getElementById("final-score").innerHTML;
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);


}



var cards = [{

    q: "Commonly used data types DO Not include:",
    answers:
        [{
            text: "1. strings",
            isCorrect: false
        },
        {
            text: "2. booleans",
            isCorrect: false
        },
        {
            text: "3. alerts",
            isCorrect: true
        },
        {
            text: "4. numbers",
            isCorrect: false
        }]
},
{

    q: "The condition in an if / else statement is enclosed with_______.",
    answers:
        [{
            text: "1. I can set any amount",
            isCorrect: false
        },
        {
            text: "2. of possible aswers here",
            isCorrect: false
        },
        {
            text: "3. parenthesis",
            isCorrect: true
        },
        {
            text: "4. curly brackets",
            isCorrect: false
        },
        {
            text: "5. quotes",
            isCorrect: false
        },
        {
            text: "6. square brackets",
            isCorrect: false
        }]
},
{

    q: "Arrays in JavaScript can be used to store_________.",
    answers:
        [{
            text: "1. numbers and strings",
            isCorrect: false
        },
        {
            text: "2. other arrays",
            isCorrect: false
        },
        {
            text: "3. booleans",
            isCorrect: false
        },
        {
            text: "4. all of the above",
            isCorrect: true
        }]
},
{

    q: "String values must be enclosed within______ when being assigned to variables",
    answers:
        [{
            text: "1. commas",
            isCorrect: false
        },
        {
            text: "2. curly brackets",
            isCorrect: false
        },
        {
            text: "3. quotes",
            isCorrect: true
        },
        {
            text: "4. parenthesis",
            isCorrect: false
        }]
},
{

    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers:
        [{
            text: "1. JavaScript",
            isCorrect: false
        },
        {
            text: "2. terminal/bash",
            isCorrect: false
        },
        {
            text: "3. for loops",
            isCorrect: false
        },
        {
            text: "4. console.log",
            isCorrect: true
        }]
},]



