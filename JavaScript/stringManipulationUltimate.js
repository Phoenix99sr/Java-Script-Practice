function stringManupulation(method) {
  const statement = document.getElementById("input").value;
  function commonMethod(x, y) {
    x.map((letter) => {
      const rev = letter.split("").reverse().join("");
      y.push(rev.toString());
    });
    return (result = document.getElementById("output").value = y.join(" "));
  }
  let result;
  switch (method) {
    case "initial":
      result = document.getElementById("output").value = statement;
      break;

    case "reversed":
      const wordCollection = statement.split(" ").reverse().join(" ");
      result = document.getElementById("output").value =
        wordCollection.toString();
      break;

    case "reversedWithin":
      const collectonOfWordswithin = statement.split(" ");
      const finalwithin = [];
      commonMethod(collectonOfWordswithin, finalwithin);
      break;

    case "fullyReversed":
      const fullyReversedCollection = statement.split(" ").reverse();
      const final = [];
      commonMethod(fullyReversedCollection, final);
      break;
  }
  return result;
}
