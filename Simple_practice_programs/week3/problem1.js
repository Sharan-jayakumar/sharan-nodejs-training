function checkBalancedParentheses(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === "(") {
      stack.push(char);
    }
    else if (char === ")") {
      if (stack.length === 0) {
        return 0;
      }
      stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0;
}

let input1 = "HELLO AND (WELCOME (TO THE) TCEA (CONTEST)TODAY)IS (SATURDAY())";
console.log("Input 1:", input1);
console.log("Output:", checkBalancedParentheses(input1));
console.log();

let input2 = "(9*(7-2)*(1*5)";
console.log("Input 2:", input2);
console.log("Output:", checkBalancedParentheses(input2));
console.log();

let input3 = ")(";
console.log("Input 3:", input3);
console.log("Output:", checkBalancedParentheses(input3));
console.log();

let input4 = "()()()";
console.log("Input 4:", input4);
console.log("Output:", checkBalancedParentheses(input4));
