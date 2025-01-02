const circle = {
    radius: 10
};
const coloredCircle = {
    ...circle,
    color: "black"

};
console.log(coloredCircle);

const blueSquare = {
    length: 100,
    color: 'blue'
};

Object.defineProperty(blueSquare, 'color', {
    value: 'blue',
    enumerable: true,
    writable: false

});

console.log(blueSquare);


let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(dayName); // Tuesday


