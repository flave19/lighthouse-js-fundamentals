const raining = false;
const cold = false;
const tempurature = 12

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