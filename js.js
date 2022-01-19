let num = [1,2,3,4,5,6];
let total = 0;
let tbc = 0;
for (i = 0; i < num.length; i++){
    total += num[i];
}
tbc = total/(num.length);
document.writeln("Tổng của mảng là: " + total);
document.write("<br>");
document.writeln("Trung bình cộng là: " + tbc);