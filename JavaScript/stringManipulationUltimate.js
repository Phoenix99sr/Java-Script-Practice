function stringManupulation(method) {
  const statement = document.getElementById("input").value;
  function commonMethod(collectionOfWords, finalArray) {
    collectionOfWords.map((letter) => {
      const reverseCase = letter.split("").reverse().join("");
      finalArray.push(reverseCase.toString());
    });
    return (document.getElementById("output").value = finalArray.join(" "));
  }
  let result;
  switch (method) {
    case "initial":
      result = document.getElementById("output").value = statement;
      break;

    case "reversed":
      result = document.getElementById("output").value = statement
        .split(" ")
        .reverse()
        .join(" ")
        .toString();
      break;

    case "reversedWithin":
      const finalwithin = [];
      commonMethod(statement.split(" "), finalwithin);
      break;

    case "fullyReversed":
      const final = [];
      commonMethod(statement.split(" ").reverse(), final);
      break;
  }
  return result;
}
