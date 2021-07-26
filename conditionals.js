const raining = true;
const cold = false;
const temperature = 15
if (raining) {
    console.log("Don't forget your umberlla!"); 
}

if (cold) {
    console.log("Make sure you pick out a scarf");
} else if (temperature < 15) {
    console.log("Short Sleeves won't cut it!")
} else {
    console.log("Short sleeves are fine"); 
}

console.log("Now you're ready to go outside!"); 

