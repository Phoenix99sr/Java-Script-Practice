// Bubble Sorting Method

const bubbleSort = (...numbers)=>{
    for(let i=0;i<numbers.length;i++){
        for(let j=0; j<numbers.length;j++){
            if(numbers[j]>numbers[j+1]){
                [numbers[j],numbers[j+1]]=[numbers[j+1],numbers[j]];
            }
        }
    }
    console.log(numbers);
}
bubbleSort(5,3,4,9,0,7);

// Selection Sorting Method

const selectionSort = (...numbers)=>{
    for(let i=0;i<numbers.length;i++){
        let smallestIndex = i;
        for(let j=i+1; j<numbers.length;j++){
            if(numbers[smallestIndex]>numbers[j]){
                smallestIndex=j;
            }
        }
        if(smallestIndex !== i){
            [numbers[i],numbers[smallestIndex]]=[numbers[smallestIndex],numbers[i]];
        }
    }
    console.log(numbers);
}
selectionSort(5,2,3,8,1,4);

// Insertion Sort Method

const insertionSort = (...numbers) =>{
    for(let i=1;i<numbers.length;i++){
        let curr = numbers[i];
        let j = i-1;
        while(j >=0 && curr < numbers[j]){
            numbers[j+1] = numbers[j];
            j--;
        }
        numbers[j+1] = curr;
    }
    console.log(numbers);
}
insertionSort(5,3,4,7,9,2,0,-2);


// Merge Sort Method

const mergeSort = (numbers) =>{
    if(numbers.length < 2){
        return numbers;
    }
    const mid = Math.floor(numbers.length/2);
    const firstPart = numbers.slice(0,mid);
    const secondPart = numbers.slice(mid);
    return merge(mergeSort(firstPart),mergeSort(secondPart));
}

const merge = (firstPart,secondPart) =>{
    const sortedNumbers = [];
    while(firstPart.length > 0 && secondPart.length > 0){
        if(firstPart[0] < secondPart[0]){
            sortedNumbers.push(firstPart.shift());
        } else{
            sortedNumbers.push(secondPart.shift());
        }
    }
    return [...sortedNumbers, ...firstPart, ...secondPart];
}
const numbers = [6,7,3,2,8,-5,-6,0];
console.log(mergeSort(numbers));



