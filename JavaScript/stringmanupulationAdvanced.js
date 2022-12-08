function stringManupulation(method){

    const statement = document.getElementById("input").value;
    let result;
    switch(method){
        case "initial":
            result = document.getElementById("output").value = statement;
        break;
        
        case "reversed":
            const collectonOfWordsreversed = statement.split(" ");
            const reversedCollection1reversed = collectonOfWordsreversed.reverse();
            const reversedCollection = reversedCollection1reversed.join(" ")
            result = document.getElementById("output").value = reversedCollection.toString();
        break;
        
        case "reversedWithin":
           
            const collectonOfWordswithin = statement.split(" ");
            const final1within = [];
            collectonOfWordswithin.map(i => {
                const splitWord = i.split("");
                const rev1 = splitWord.reverse();
                const rev = rev1.join("");
                final1within.push(rev.toString());
            });
            const finalwithin = final1within.join("  ")
            result = document.getElementById("output").value = finalwithin.toString();
        break;
        
        case "fullyReversed":
            const collectonOfWords = statement.split(" ");
            const reversedCollection1 = collectonOfWords.reverse();
            const final1 = [];
            reversedCollection1.map(i =>{
                const splitWord = i.split("");
                const rev1 = splitWord.reverse();
                const rev = rev1.join("")
                final1.push(rev.toString());
            });
            const final = final1.join(" ");
            result = document.getElementById("output").value = final.toString();
        break;
    }
    return result;
}