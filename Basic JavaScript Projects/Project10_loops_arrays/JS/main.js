var Y;
var content;
var Instruments = ["Guitar", "Drums", "Piano"]

function for_Loop(){
    for (Y=0; Y <Instruments.length; Y++){
        content += Instruments[Y] + "<br>"; 
    }

    document.getElementById("List_of_Instruments").innerHTML = content

}

function array_Function(){
    var random_Numbers = []
    random_Numbers[0] = Math.random(8)
    random_Numbers[1] = Math.random(8)
    random_Numbers[2] = Math.random(8)
    random_Numbers[3] = Math.random(8)
    random_Numbers[4] = Math.random(8)

    document.getElementById("Array").innerHTML=random_Numbers
}

function constant_function(){
    const Human = {Name:"Bob", Age:100, EyeColor:"Green", Food:"Cheese"}
    document.getElementById("Constant").innerHTML= "Updated EyeColor to " + Human.EyeColor 
    + " + added Food: " +  Human.Food
}

