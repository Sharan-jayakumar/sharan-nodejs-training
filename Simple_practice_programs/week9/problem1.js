function groupAnagrams(strs) {
  let hashMap = {};

  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];

    let charArray = [];
    for (let j = 0; j < word.length; j++) {
      charArray.push(word.charAt(j));
    }

    for (let j = 0; j < charArray.length - 1; j++) {
      for (let k = j + 1; k < charArray.length; k++) {
        if (charArray[j] > charArray[k]) {
          let temp = charArray[j];
          charArray[j] = charArray[k];
          charArray[k] = temp;
        }
      }
    }

    let sortedKey = "";
    for (let j = 0; j < charArray.length; j++) {
      sortedKey += charArray[j];
    }

    if (hashMap[sortedKey] === undefined) {
      hashMap[sortedKey] = [];
    }
    hashMap[sortedKey].push(word);
  }

  let result = [];
  for (let key in hashMap) {
    result.push(hashMap[key]);
  }

  return result;
}

let input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("Input:", input1);
console.log("Output:", groupAnagrams(input1));
console.log();

let input2 = [""];
console.log("Input:", input2);
console.log("Output:", groupAnagrams(input2));
console.log();

let input3 = ["a"];
console.log("Input:", input3);
console.log("Output:", groupAnagrams(input3));
console.log();

let input4 = ["abc", "bca", "cab", "xyz", "zyx", "hello"];
console.log("Input:", input4);
console.log("Output:", groupAnagrams(input4));
