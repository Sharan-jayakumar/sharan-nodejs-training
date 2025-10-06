function patternX(s) {
    const n = s.length;
    for(i = 0; i < n; i++) {
        let row = "";
        for(j = 0; j < n; j++) {
            if(j === i) {
                row += s[i];
            } else if (j === n - 1 - i) {
                row += s[n - 1 - i];
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}

patternX("geeksforgeeks");
patternX("1234");
patternX("0");