let weight = 70;
let height = 1.72;
let bmi = weight / (height * height);
let weightStatus;
if (bmi < 18.5) {
    weightStatus = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    weightStatus = "healthy weight";
} else if (bmi >= 25 && bmi <= 29.9) {
    weightStatus = "overweight";
} else {
    weightStatus = "obsity";
}
console.log(weightStatus);
