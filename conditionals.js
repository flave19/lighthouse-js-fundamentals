const raining = false;
const cold = false;
const tempurature = 12
const isCitizen = true
const age = 26

if (raining) {
  console.log("Don't forget your umbrella!");
}
if(cold) {
  console.log("Make sure you pick out a scarf!");
}

if (tempurature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (tempurature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.")
}
console.log("Now you're ready to go outside!");

if (isCitizen && age >18) {
  console.log("You are eligible to vote.");
}

if( tempurature < -40 || tempurature >40) {
  console.log("Maybe going outside isn\'t such a great idea...");
}

if (!raining){
  console.log("Leave your umbrella at home!");
}