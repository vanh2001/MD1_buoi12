let numbers = [-3, 5, 1, -5, 2, 10];
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if(min > numbers[i]) {
        min = numbers[i];
    }
}
document.writeln(min);