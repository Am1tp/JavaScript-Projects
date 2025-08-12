function typeoffunk() {
    document.write(typeof 5)
}

function coerFunc(){
    var x = 5
    var y = "five"
    document.write(x + y)
}

function nanFunk(){
    var x = 0
    var y = 0
    document.write(x / y)
}

function nanTrue(){
    document.write(isNaN("Five"))
}

function nanFalse(){
    document.write(isNaN(5))
}

function infinity(){
    document.getElementById("infin").innerHTML= 3E310
}

function ninfinity(){
    document.getElementById("neginfin").innerHTML= -3E310
}

function bool(){
    document.getElementById("bool").innerHTML= 10 < 1

}