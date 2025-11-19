function flattenArray(arr) {
  let result = [];
  let stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    stack.push(arr[i]);
  }

  while (stack.length > 0) {
    let current = stack.pop();

    if (Array.isArray(current)) {
      for (let i = current.length - 1; i >= 0; i--) {
        stack.push(current[i]);
      }
    } else {
      result.push(current);
    }
  }

  return result;
}

let input1 = [1, [2, [3, 4], 5]];
console.log("Input:", JSON.stringify(input1));
console.log("Output (Recursive):", flattenArray(input1));

console.log();

let input2 = [1, 2, [3, 4, [5, 6, [7, 8]], 9], 10];
console.log("Input:", JSON.stringify(input2));
console.log("Output:", flattenArray(input2));

let input3 = [[[[1]]], [2, [3]], 4];
console.log("Input:", JSON.stringify(input3));
console.log("Output:", flattenArray(input3));

let input4 = [1, [], [2, []], 3];
console.log("Input:", JSON.stringify(input4));
console.log("Output:", flattenArray(input4));
