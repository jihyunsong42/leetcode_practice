var isValid = function(s) {
    let temp = [];
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
            temp.push(s[i]);
            count++;
        }
        else {
            let poppedElement = temp.pop();
            switch (poppedElement) {
                case "{" : {
                    if (s[i] !== "}") 
                        return false;
                    break;
                }
                case "[" : {
                    if (s[i] !== "]") 
                        return false;
                    break;
                }
                case "(" : {
                    if (s[i] !== ")") 
                        return false;
                    break;
                }
            }
            count--;
            if (count < 0)
                return false;
        }
    }
    if (!count) return true;
    return false;
};

console.log(isValid("()"))