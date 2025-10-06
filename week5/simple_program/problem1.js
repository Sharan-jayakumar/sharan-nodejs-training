const dict = new Set([
  "i",
  "like",
  "sam",
  "sung",
  "samsung",
  "mobile",
  "ice",
  "cream",
  "icecream",
  "man",
  "go",
  "mango",
]);

let input = "ilike";
let segments = [];
let segment = "";
let start = 0;

while (start < input.length) {
  let canSegment = false;
  let end = input.length;

  while (end > start) {
    const word = input.slice(start, end);

    if (dict.has(word)) {
      segments.push(word);
      start = end;
      canSegment = true;
      break;
    }
    end--;
  }

  if (!canSegment) {
    console.log("No Segments found");
    break;
  }
}

console.log(segments);