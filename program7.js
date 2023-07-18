function join(words) {
    let result = words[0]; 
    let minOverlap = 0; 
  
    for (let i = 1; i < words.length; i++) {
      const word1 = words[i - 1];
      const word2 = words[i];
      let overlap = 0;
  
      for (let j = word1.length; j > 0; j--) {
        if (word2.startsWith(word1.substring(word1.length - j))) {
          overlap = j;
          break;
        }
      }
  
      result += word2.substring(overlap); 
      minOverlap = i === 1 ? overlap : Math.min(minOverlap, overlap);
    }
  
    return [result, minOverlap];
  }
  
  console.log(join(["oven", "envier", "erase", "serious"]));
  
  console.log(join(["move", "over", "very"]));
  
  console.log(join(["to", "ops", "psy", "syllable"]));
  
  console.log(join(["aaa", "bbb", "ccc", "ddd"]));
  