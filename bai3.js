let value = +prompt('Enter your number: ');
let numbers = [-3,5,1,3,2,10];
for (let i = 0; i < numbers.length; i++) {
    if(value == numbers[i]){
        alert("Value " + numbers[i] + " " + "found in " + i);
        break;
    }
//     else {
//         alert("Value" + value + " not found in");
//         break;
//     }
}