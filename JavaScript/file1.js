console.log("Hello World");
document.getElementById("btn").onclick = function(){
    alert("This is a Dialouge Box.");
}
var x = parseFloat(prompt("Give a number : "));
var y = parseFloat(prompt("Give a number : "));
var result = x + y;
console.log("Yuor Given Numbers are :" + x + " & " + y);
console.log("The Summation is :"+ result);