var city0 = "Islamabad";
var city1 = "Karachi";
var city2 = "Lahore";
var city3 = "Peshawar";
var city4 = "Queta";

// alert("Welcome to " + city4)



// var newCitites = cities.slice(2, 5)
// console.log("newCities =>", newCitites)
// alert("Welcome to " + cities[4])
// console.log(cities.length)

// for (var index = 0; index < cities.length; index++) { }
var cities = ["Islamabad", "Karachi", "Lahore", "Faisalabad", "Sheikhupura"];
var cleanestCity = "Faisalabad";
button1.onclick = function () {
    var number = document.getElementById("number").value;
    number = Number(number)
    console.log(number)
    // var cityFound = false;
    // for (var index = 0; index < cities.length; index++) {
    //     // alert(cities[index])
    //     if (cleanestCity === cities[index]) {
    //         cityFound = true
    //         result.innerHTML += "I love this city: " + cities[index] + "<br>";
    //         break;
    //     }
    // }
    // if (cityFound === false) {
    //     alert("City not found")
    // }
}
// result.innerHTML += "I love: " + cities[index] + "<br>";

// }

// if (cleanestCity == cities[0]) {
//     alert("Correct")
// } else if (cleanestCity == cities[1]) {
//     alert("Correct")
// }else if (cleanestCity == cities[2]) {
//     alert("Correct")
// }
// else if (cleanestCity == cities[3]) {
//     alert("Correct")
// }
// else if (cleanestCity == cities[4]) {
//     alert("Correct")
// }


// cities[3] = "Faisalabad"

// cities[10] = "city name"

// console.log(cities[6])


// cities.pop()
// cities.shift()
// cities.push("Faisalabad", "ISB");
// cities.unshift("Faisalabad", "ISB");

cities.splice(2, 1)
console.log("cities =>", cities)


















// var cities = ["Islamabad", "Karachi", "Lahore", "Peshawar", "Queta"];

// var index = 1;

// console.log(cities)
// console.log(cities[index])


// for( var index = 0; index < 5; index++ ){

//     console.log( "I love: " + cities[ index ] )

// }

// //-----------------------------------------

// button1.onclick = function () {

//     alert();

// }



var cities = ["Islamabad", "Karachi", "Lahore", "Peshawar", "Queta"];

// cities[5] = "Faisalabad";
// pop() remove the last element of an array.
// push() Using the keyword, push, you can add one or more elements to the end of an array.
// cities.push("Faisalabad", "Sheikhupura")
// shift() method removes an element from the beginning of an array.
// unshift() To add one or more elements to the beginning of an array, use the unshift method.


// cities.push("Faisalabad")

// console.log(cities);

// var pets = ["dog", "cat", "fly", "bug", "ox"]

// pets.splice(2, 2, "snake", "cow", "lion")
// var newPets = pets.slice(2, 4);

// console.log(pets);
// console.log(newPets);

















button2.onclick = function () {

    var name = prompt("what is your name?");

    alert(name);

}

button3.onclick = function () {

    var city = prompt("Enter your city?");

    cities.push(city)

    alert(city + " has been added into cities array.")

}

button4.onclick = function () {

    result.innerHTML = "";

    for (var index = 0; index < cities.length; index++) {

        result.innerHTML += "I love: " + cities[index] + "<br>";

    }

}

button5.onclick = function () {

    var number = +prompt("Enter a number");

    for (var index = 1; index <= 10; index++) {

        // console.log(number + " * " + index + " = " + number * index)
        result.innerHTML += number + " * " + index + " = " + number * index + "<br>";

    }
    // result.innerHTML += "<hr>"

}


//-----------------------------------------


//------------------------------------------


// var names = ["Umar","Irfan","Naveed", "Shahzad"];
// var castes = ["Shehikh", "Jutt", "Malik"];

// for( var i = 0; i < names.length; i++ ){

//     for(var j = 0; j < castes.length; j++ ){

//         console.log( names[i] + ' ' + castes[j ] )

//     }

// }