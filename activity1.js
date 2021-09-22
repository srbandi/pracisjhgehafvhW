var score=0;

function updating(){

    score=score+1;
    document.getElementById("score").innerHTML=score;

}

function saving(){

    localStorage.setItem("score",score);

}

function np(){

    window.location="activity_2.html";

}