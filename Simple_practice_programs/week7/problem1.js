function matchPatternFromPosition(text, textStart, pattern, patternStart) {
  let textIndex = textStart;
  let patternIndex = patternStart;

  while (patternIndex < pattern.length) {
    if (pattern.charAt(patternIndex) === "*") {
      if (patternIndex === pattern.length - 1) {
        return textIndex < text.length;
      }

      for (let matchLen = 1; textIndex + matchLen <= text.length; matchLen++) {
        if (
          matchPatternFromPosition(
            text,
            textIndex + matchLen,
            pattern,
            patternIndex + 1
          )
        ) {
          return true;
        }
      }
      return false;
    } else {
      if (
        textIndex >= text.length ||
        pattern.charAt(patternIndex) !== text.charAt(textIndex)
      ) {
        return false;
      }
      textIndex++;
      patternIndex++;
    }
  }

  return true;
}

function isSubstringMatch(text, pattern) {
  for (let i = 0; i < text.length; i++) {
    if (matchPatternFromPosition(text, i, pattern, 0)) {
      return true;
    }
  }
  return false;
}

let text1 = "Spoon";
let pattern1 = "Sp*n";
console.log("Input:", text1, "   ", pattern1);
console.log("Output:", isSubstringMatch(text1, pattern1));
console.log();

let text2 = "Man";
let pattern2 = "n*";
console.log("Input:", text2, "   ", pattern2);
console.log("Output:", isSubstringMatch(text2, pattern2));
console.log();

let text3 = "Subline";
let pattern3 = "line";
console.log("Input:", text3, "   ", pattern3);
console.log("Output:", isSubstringMatch(text3, pattern3));
console.log();

let text4 = "Apple";
let pattern4 = "*pp*";
console.log("Input:", text4, "   ", pattern4);
console.log("Output:", isSubstringMatch(text4, pattern4));
console.log();

let text5 = "HelloWorld";
let pattern5 = "H*W*d";
console.log("Input:", text5, "   ", pattern5);
console.log("Output:", isSubstringMatch(text5, pattern5));
console.log();

let text6 = "Test";
let pattern6 = "*est";
console.log("Input:", text6, "   ", pattern6);
console.log("Output:", isSubstringMatch(text6, pattern6));
