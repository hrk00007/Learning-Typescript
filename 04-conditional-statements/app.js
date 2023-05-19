// if-else
var currentTime = 99;
var message = '';
if (currentTime >= 0 && currentTime <= 12) {
    message = 'Good Morning';
}
else if (currentTime >= 13 && currentTime <= 17) {
    message = 'Good Afternoon';
}
else if (currentTime >= 18 && currentTime <= 23) {
    message = 'Good Evening';
}
else {
    message = 'Enter a proper time';
}
console.log(message);
// switch
var day = new Date().getDay(); // 0 , 1 , ... 6 // SUN - SAT
var fullDay = '';
switch (day) {
    case 0:
        fullDay = 'SUNDAY';
        break;
    case 1:
        fullDay = 'MONDAY';
        break;
    case 2:
        fullDay = 'TUESDAY';
        break;
    case 3:
        fullDay = 'WEDNESDAY';
        break;
    case 4:
        fullDay = 'THURSDAY';
        break;
    case 5:
        fullDay = 'FRIDAY';
        break;
    case 6:
        fullDay = 'SATURDAY';
        break;
    default:
        fullDay = 'NO DAY';
        break;
}
console.log(fullDay);
