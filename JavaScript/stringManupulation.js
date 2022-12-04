
function initial(){
        let statement = document.getElementById("input").value;
        document.getElementById("output").value = statement;
}
function reverseWithin(){
        let statement = document.getElementById("input").value;
        let collectonOfWords = statement.split(" ");
        let final1 = [];
        for(i=0; i<collectonOfWords.length; i++){
            splitWord = collectonOfWords[i].split("");
           let rev1 = splitWord.reverse();
            let rev = rev1.join("");
            final1.push(rev.toString());
        }
        let final = final1.join("  ")
        document.getElementById("output").value = final.toString();      //Just Swap the Words Within maintaining index
}
   
function reversed(){
        let statement = document.getElementById("input").value;
        let collectonOfWords = statement.split(" ");
        let reversedCollection1 = collectonOfWords.reverse();
        let reversedCollection = reversedCollection1.join(" ")
        document.getElementById("output").value = reversedCollection.toString();    //swap the word index
}
function fullyReversed(){
        let statement = document.getElementById("input").value;
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
        document.getElementById("output").value = final.toString();      //fully swap the word index with words within it
}
