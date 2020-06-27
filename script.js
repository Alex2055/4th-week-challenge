window.addEventListener('DOMContentLoaded', connectEvents);


function connectEvents() {
    document.getElementById("start-quiz").onclick = showQuestion;

    // after start quiz button clicked hide intro and load question and buttons
    function showQuestion() {
        var x = document.getElementById("main-text");
        x.style.display = "none";

        var y = document.getElementById("question-body");
        y.style.display = "block";
    }



    function cardLoad(arreyindex) {
        var z = document.getElementById("question");
        z.innerText = cards[arreyindex].q
        for (var u = 0; u < cards[arreyindex].answers.length; u++) {
            var h = document.createElement("BUTTON");
            var m = document.createTextNode(cards[arreyindex].answers[u].text);
            h.appendChild(m);
            document.getElementById("answers").appendChild(h);

        }
        
    }
    cardLoad(0);
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
            text: "1. quotes",
            isCorrect: false
        },
        {
            text: "2. curly brackets",
            isCorrect: false
        },
        {
            text: "3. parenthesis",
            isCorrect: true
        },
        {
            text: "4. square brackets",
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



