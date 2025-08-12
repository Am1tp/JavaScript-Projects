function Vehicle(Make,Model,Year,Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Tesla", "Cybertruck", 2020, "Silver")
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black") 
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard")

function myFunction(){
    document.getElementById("New_and_This").innerHTML = 
    "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model + " manufactured in " + Jack.Vehicle_Year;
}