function myFunk() {
    var x = "this is the button text"
    
    document.getElementById("elament").innerHTML = x;
}

function myFunky() {
    var y = "I learn"
    y += " much from this book"
    
    document.getElementById("concat").innerHTML = y;
}

function myChallengeFunc (a, b) {
    result = a * b
    window.alert(result)
} 


function changeButtonText() {
    document.getElementById("changeTextBtn").innerHTML = "this text has been changed";
}