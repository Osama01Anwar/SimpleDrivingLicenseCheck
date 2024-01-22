// let age = 20;
// var license = true;
// if(age>18 && license == true){
//     alert("YOU CAN DRIVE");
// }
// else{
//     alert("SORRY YOU CANT DRIVE")
// }
// Prompt the user to enter their age
let userAge = prompt("Please enter your age:");

// Convert the user input to a number
let age = parseInt(userAge);

// Check if the entered age is a valid number and the user is legally allowed to drive (age >= 18)
if (!isNaN(age) && age >= 18) {
    console.log("Congratulations! You are legally allowed to drive.");

    // Check if the user has a driving license
    var userLicense = prompt("Do you have a driving license? (Yes/No):");
    userLicense = userLicense.toLowerCase();

    if (userLicense === "yes" || userLicense === "y") {
        alert("You are ready to drive!");
    } else {
        alert("Sorry, you need a driving license to drive.");
    }
} else {
    alert("Sorry, you are either not legally allowed to drive or entered an invalid age.");
}

