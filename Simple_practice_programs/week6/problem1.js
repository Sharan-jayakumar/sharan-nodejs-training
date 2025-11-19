function sortSentence(sentence) {
    let words = sentence.split(' ');
    let result = new Array(10);
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let position = -1;
        let cleanWord = '';
        
        for (let j = 0; j < word.length; j++) {
            let char = word.charAt(j);
            
            if (char >= '0' && char <= '9') {
                position = parseInt(char);
            } else {
                cleanWord += char;
            }
        }
        
        if (position !== -1) {
            result[position] = cleanWord;
        }
    }
    
    return result.filter(word => word !== undefined).join(' ');
}

let input1 = "is1 Thi0s T3est 2a";
console.log("Input 1:", input1);
console.log("Output:", sortSentence(input1));
console.log();

let input2 = "t2o j3oin 4WonderBiz I0 Technolog5ies wan1t";
console.log("Input 2:", input2);
console.log("Output:", sortSentence(input2));
console.log();

let input3 = "0Hello 1World";
console.log("Input 3:", input3);
console.log("Output:", sortSentence(input3));
console.log();

let input4 = "coding2 love1 I0";
console.log("Input 4:", input4);
console.log("Output:", sortSentence(input4));