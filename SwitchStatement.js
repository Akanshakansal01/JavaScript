// mon  - 7am
// tue - thurs  - 4am
// fri - 9am
// sat- sun  -  8am
let day="Tuesday"
switch(day)
{
    case 'Monday':
        console.log("7am");
        break;
    case 'Tuesday':
        console.log("4am");
        break;
    case 'Tuesday':           
    case 'Wednesday':
    case 'Thursday':
        console.log("4am");
        break;
    case 'Friday':
        console.log("9am");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("8am");
        break;
    default:
        console.log("It's Holiday.")
}
console.log("Wake up...........")