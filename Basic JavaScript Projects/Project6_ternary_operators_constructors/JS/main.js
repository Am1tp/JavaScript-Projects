function Vote_Function() {
    var Age, Can_vote;
    Age= document.getElementById("Age").value;
    Can_vote= (Age < 18) ? "You are too young" : "You are old enough"
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."
}

function Vehicle(Make,Model,Year,Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red")
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black") 
var Erik = new Vehicle("Tesla", "Cybertrick", 1971, "PINK")


function myFunction(){
    document.getElementById("New_and_This").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function reserved(){    // test reserved words
    var True = 10
    console.log(True)
}

function peepol(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

var John = new peepol("John", "Smith", 30) // new objects created
var Jane = new peepol("Jane", "Doe", 30)


let Starting_point = 9; // stays persistent between clicks

function Count_Function() {
    function Count(){
        function Plus_One() {
            Starting_point += 1; //modifies outer variable
        }
        Plus_One(); // call nested function
        return Starting_point
    }
    document.getElementById("Nested_Function").innerHTML= Count()
}