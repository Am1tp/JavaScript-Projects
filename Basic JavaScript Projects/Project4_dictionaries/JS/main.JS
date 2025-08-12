function myDictionary(){
    var Animal = {
        Species : "Cat",   
        Sound : "Meow",    
        Color : "Black",   
        Age : 2            
    };

    // The 'delete' keyword removes a property from an object , Animal.Sound will be 'undefined'
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}