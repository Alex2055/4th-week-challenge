window.addEventListener('DOMContentLoaded', connectEvents);


function connectEvents() {
    document.getElementById("start-quiz").onclick = consolLog;
    function consolLog() {
        console.log("huy");
    }
}




var cards = [{

    q: "Commonly used data types DO Not include:",
    answers:
        [{
            text: "1.strings",
            isCorrect: false
        },
        {
            text: "2.booleans",
            isCorrect: false
        },
        {
            text: "3.alerts",
            isCorrect: true
        },
        {
            Text: "4.numbers",
            isCorrect: false
        }]
},
{

    q: "The condition in an if / else statement is enclosed with_______.",
    answers:
        [{
            text: "1.quotes",
            isCorrect: false
        },
        {
            text: "2.curly brackets",
            isCorrect: false
        },
        {
            text: "3.parenthesis",
            isCorrect: true
        },
        {
            Text: "4.square brackets",
            isCorrect: false
        }]
},
{

    q: "Arrays in JavaScript can be used to store_________.",
    answers:
        [{
            text: "1.numbers and strings",
            isCorrect: false
        },
        {
            text: "2.other arrays",
            isCorrect: false
        },
        {
            text: "3.booleans",
            isCorrect: false
        },
        {
            Text: "4.all of the above",
            isCorrect: true
        }]
},
{

    q: "String values must be enclosed within______ when being assigned to variables",
    answers:
        [{
            text: "1.commas",
            isCorrect: false
        },
        {
            text: "2.curly brackets",
            isCorrect: false
        },
        {
            text: "3.quotes",
            isCorrect: true
        },
        {
            Text: "4.parenthesis",
            isCorrect: false
        }]
},
{

    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers:
        [{
            text: "1.JavaScript",
            isCorrect: false
        },
        {
            text: "2.terminal/bash",
            isCorrect: false
        },
        {
            text: "3.for loops",
            isCorrect: false
        },
        {
            Text: "4.console.log",
            isCorrect: true
        }]
},]

function showQuestion (){
    
}

