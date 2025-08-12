// Function to add 5 + 2 and show the result
function addFunk(){
    result = 5 + 2;
    document.getElementById("add").innerHTML = "5 + 2 =" + " " + result;
}

// Function to subtract 5 - 2
function subtractaFunk(){
    var Subtraction = 5 - 2;
    document.getElementById("sub").innerHTML = "5 - 2 =" + " " + Subtraction;
}

// Function to divide 5 / 2
function divisorFunk(){
    var Division = 5 / 2; 
    document.getElementById("divi").innerHTML = "5 / 2 =" + " " + Division;
}

// Function to multiply 5 * 2
function multipliFunk(){
    var Multiplication = 5 * 2;
    document.getElementById("multi").innerHTML = "5 * 2 =" + " " + Multiplication;
}

// Function that does multiple math steps: (1+10) * 10 / (5-2)
function lotsaMath(){
    var lotsa = (1 + 10) * 10 / (5 - 2);
    document.getElementById("lotsa").innerHTML = 
        "One plus Ten, multiplied by Ten, divided by Five minus Two = " + lotsa;
}

// Function to use the modulus operator (%), which gives the remainder of division
function Modulus() {
    var modulus = 11 % 2; // 11 divided by 2 leaves remainder 1
    document.getElementById("modulus").innerHTML = "11 % 2 =" + " " + modulus;
}

// Function to use the negation operator (-) to turn a number negative
function Negation() {
    var Negation = 5 + 5; 
    document.getElementById("negation").innerHTML = -Negation; // Then make it negative
}

// Function to increment (add 1 to) a number
function Increment() {
    var x = 5; 
    x++;       
    document.getElementById("increment").innerHTML = x;
}

// Function to decrement (subtract 1 from) a number
function Decrement() {
    var y = 5; 
    y--;       
    document.getElementById("decrement").innerHTML = y;
}

// Function to show a random number between 0 and 10,000 in an alert box
function Random() {
    window.alert(Math.random() * 10000);
}

// Function that uses Math.random() and Math.floor() to create a random integer
function mathMethod(){
    let min = 5;  
    let max = 10; 
    // Random decimal number between 0 and 10
    let randInt = Math.random() * 10;
    // Multiply min * max, divide by randInt, then round down with Math.floor()
    window.alert(Math.floor(min * max / randInt));
}