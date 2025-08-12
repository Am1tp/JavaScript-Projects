var x = 100 

function funktion(){    // function that uses global variable x
    var y = 100         // local variable y
    window.alert(x + y)
}

function funktion2(){
    var z = 200
    document.write(z+y) // function tries use local variable y in other funktion
}

function getDate() {    // if statements practice
    const date = new Date().getHours()
    if (date < 12) {
        document.getElementById("method").innerHTML= "Good Morning"
    }
    
    if (date >= 12 && date <= 17) {
        document.getElementById("method").innerHTML= "Good Afternoon"
    }

    else (
        document.getElementById("method").innerHTML= "Good Evening"
    )
}

function Age_checker(){ //conditional operators
    Age = document.getElementById("Age").value;
    console.log(Age)
    if (Age >= 18) {
        Vote = "Old enough to vote"
    }
    else {
        Vote = "Not old enough to vote"
    }

    document.getElementById("How old are you?").innerHTML=Vote;
}

function Time_function() {  // else if statements
    var Time = new Date().getHours;
    var Reply;
    if (Time >= 0 && Time < 12) {
        Reply = "It is morning time!"
    }
    else if (Time >= 12 && Time < 16) {
        Reply = "It is afternoon time!"
    }
    else {
        Reply = "It is evening time!"
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}