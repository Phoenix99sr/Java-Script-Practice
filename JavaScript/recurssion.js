function commonFunction(method) {
  let word = document.getElementById("input1").value.toLowerCase();
  let n = document.getElementById("input2").value;

  switch (method) {
    case "palindrome":
      if (word.split("").reverse().join("") === word) {
        document.getElementById("color").style.backgroundColor = "green";
      } else {
        document.getElementById("color").style.backgroundColor = "red";
      }
      break;
    case "factorial":
      let answer = 1;
      if (n == 0 || n == 1) {
        return (document.getElementById("output").value = answer);
      } else {
        for (let i = n; i >= 1; i--) {
          answer = answer * i;
        }
        return (document.getElementById("output").value = answer);
      }
      break;
  }
}
// function isPalindrome() {
//   let word = document.getElementById("input1").value;
//   let stored = word;
//   if (word.split("").reverse().join("") === stored) {
//     document.getElementById("color").style.backgroundColor = "green";
//   } else {
//     document.getElementById("color").style.backgroundColor = "red";
//   }
// }

// function factorial() {
//   let n = document.getElementById("input2").value;
//   let answer = 1;
//   if (n == 0 || n == 1) {
//     return (document.getElementById("output").value = answer);
//   } else {
//     for (var i = n; i >= 1; i--) {
//       answer = answer * i;
//     }
//     return (document.getElementById("output").value = answer);
//   }
// }
