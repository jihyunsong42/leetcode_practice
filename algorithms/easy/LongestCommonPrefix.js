var longestCommonPrefix = function(strs) {
    let result = "";
    let lettersToCheck = strs[0]; // pick the first word to check prefix
    for (let i = 0; i < lettersToCheck.length; i++) { // iterate lettersToCheck array from the first letter to the last letter
        let isDone = false; // flag for break
        for (let j = 1; j < strs.length; j++) { // iterate strs array from the second word to the last word
            if (lettersToCheck[i] != strs[j][i]) { // check if the word contains letter in lettersToCheck
                isDone = true;
                break;
            }
        }
        if (isDone) 
            break;
        result += lettersToCheck[i]; // add contained letter to the result 
    }
    return result;
    
};