function stringManupulation(method){

    let statement = document.getElementById("input").value;
    let result;
    switch(method){
        case "initial":
            result = document.getElementById("output").value = statement;
        break;
        
        case "reversed":
            let collectonOfWordsreversed = statement.split(" ");
            let reversedCollection1reversed = collectonOfWordsreversed.reverse();
            let reversedCollection = reversedCollection1reversed.join(" ")
            result = document.getElementById("output").value = reversedCollection.toString();
        break;
        
        case "reversedWithin":
            let collectonOfWordswithin = statement.split(" ");
            let final1within = [];
            for(i=0; i<collectonOfWordswithin.length; i++){
            splitWord = collectonOfWordswithin[i].split("");
            let rev1 = splitWord.reverse();
            let rev = rev1.join("");
            final1within.push(rev.toString());
            }
            let finalwithin = final1within.join("  ")
            result = document.getElementById("output").value = finalwithin.toString();
        break;
        
        case "fullyReversed":
            // let statement = document.getElementById("input").value;
            let collectonOfWords = statement.split(" ");
            let reversedCollection1 = collectonOfWords.reverse();
            let final1 = [];
            for(i=0; i<reversedCollection1.length; i++){
            splitWord = reversedCollection1[i].split("");
            let rev1 = splitWord.reverse();
            let rev = rev1.join("")
            final1.push(rev.toString());
            }
            let final = final1.join(" ");
            result = document.getElementById("output").value = final.toString();
        break;
    }
    return result;
}