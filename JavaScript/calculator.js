const keys = document.querySelectorAll(".key");
const displayInput = document.querySelector(".display .input");
const displayOutput = document.querySelector(".display .output");

let input = "";
for (let key of keys) {
  const value = key.dataset.key;

  key.addEventListener("click", () => {
    if (value == "clear") {
      input = "";
      displayInput.innerHTML = "";
      displayOutput.innerHTML = "";
    } else if (value == "backspace") {
      input = input.slice(0, -1);
      displayInput.innerHTML = CleanInput(input);
    } else if (value == "=") {
      let result = eval(input);
      displayOutput.innerHTML = result;
      
    } else if (value == "openBrackets") {
      input += "(";
      displayInput.innerHTML = CleanInput(input);
    } else if (value == "closeBrackets") {
      input += ")";
      displayInput.innerHTML = CleanInput(input);
    } else {
      if (ValidateInput(value)) {
        input += value;
        displayInput.innerHTML = CleanInput(input);
      }
    }
  });
}

function CleanInput(input) {
  let inputArray = input.split("");

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == "*") {
      inputArray[i] = ` <span class="operator">x</span> `;
    } else if (inputArray[i] == "/") {
      inputArray[i] = ` <span class="operator">/</span> `;
    } else if (inputArray[i] == "+") {
      inputArray[i] = ` <span class="operator">+</span> `;
    } else if (inputArray[i] == "-") {
      inputArray[i] = ` <span class="operator">-</span> `;
    } else if (inputArray[i] == "(") {
      inputArray[i] = `<span class="openBrackets">(</span>`;
    } else if (inputArray[i] == ")") {
      inputArray[i] = `<span class="closeBrackets">)</span>`;
    }
  }

  return inputArray.join("");
}

function ValidateInput(value) {
  let last_input = input.slice(-1);
  let operators = ["+", "-", "*", "/"];

  if (value == "." && last_input == ".") {
    return false;
  }

  if (operators.includes(value)) {
    if (operators.includes(last_input)) {
      return false;
    } else {
      return true;
    }
  }

  return true;
}
