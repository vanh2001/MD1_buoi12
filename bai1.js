let x=0;
let array = new Array();
function addElemntToArray() {
    array[x] = document.getElementById('txtValue').value;
    alert('Element: ' + array[x] + " " + "Add at index" + " " +x);
    x++;
    document.getElementById('txtValue').value = "";
}
function displayArray() {
    let e = "<hr>"
    for ( let i=0; i < array.length; i++){
        e += "Element " + i + " = " + array[i] + "<br>";
    }
    document.getElementById('result').innerHTML = e;
}