function mergeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  const result = [[...sorted[0]]];

  for (let i = 1; i < sorted.length; i++) {
    const currentInterval = sorted[i];    
   
    const lastMerged = result[result.length - 1];

    if (currentInterval[0] <= lastMerged[1]) {

      lastMerged[1] = Math.max(lastMerged[1], currentInterval[1]);
    } else {

      result.push([...currentInterval]);
    }
  }
  return result;
}

// Test Cases
console.log("=== Test Case 1 ===");
const intervals1 = [[1,3], [2,6], [8,10], [15,18]];
console.log("Input:", intervals1);
console.log("Output:", mergeIntervals(intervals1));

console.log("\n=== Test Case 2 ===");
const intervals2 = [[1,4], [4,5]];
console.log("Input:", intervals2);
console.log("Output:", mergeIntervals(intervals2));

console.log("\n=== Test Case 3 ===");
const intervals3 = [[1,4], [0,4]];
console.log("Input:", intervals3);
console.log("Output:", mergeIntervals(intervals3));

console.log("\n=== Test Case 4 ===");
const intervals4 = [[1,4], [2,3]];
console.log("Input:", intervals4);
console.log("Output:", mergeIntervals(intervals4));