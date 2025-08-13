function full_Sentence(){   // concatenate strings
    var part_1 = "This ";
    var part_2 = "is a ";
    var part_3 = "sentence!";

    var whole = part_1.concat(part_2, part_3)
    document.getElementById("concat").innerHTML = whole
}

function slice_Method(){    // slice a string
    let myString = "This is an example to dispay a section of a string."
    let slice = myString.slice(29)
    document.getElementById("slice").innerHTML = slice

}

function upperCase(){   // convert string to uppercase
    let text = "some text to uppercase"
    let uppercased = text.toUpperCase()
    document.getElementById("upper").innerHTML = uppercased
}

function strSearch(){   // search inside string for another string
    let searchText = "Some text to search for a word"
    let searchWord = "search"

    document.getElementById("search").innerHTML = ("Found at index " + searchText.search(searchWord))
}

function numToString(){     // convert number into string 
    let x = 12345
    document.getElementById("toString").innerHTML = x.toString()
}

function morePrecise(){     // round a decimal to specified number of places
    let x = 123456.789101112131415
    document.getElementById("precision").innerHTML = x.toPrecision(8)
}

function numFixed(){    // convert number to string, round to specified number of places
    let x = 123.456789
    document.getElementById("fixed").innerHTML = x.toFixed(3)
}

function valueOfThis() {    // return primitive value
    let x = 123456
    document.getElementById("value").innerHTML = (x.valueOf())
}