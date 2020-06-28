window.addEventListener('DOMContentLoaded', connectEvents);

function connectEvents(){
    
    document.getElementById("clear-scores").onclick = clearScores; 
    var a = document.createElement("LI");
    document.getElementById("score-list").appendChild(a);
    a.classList.add("new-score");
    var myresult = localStorage.getItem("initials") + " " + localStorage.getItem("score");
    console.log(myresult);
    document.querySelector(".new-score").innerHTML = myresult;
    
    }

    function clearScores(){
        localStorage.clear();
        document.querySelector(".new-score").innerHTML = "";

        
    }

    