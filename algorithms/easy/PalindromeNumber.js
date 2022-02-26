var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let str = String(x);
    let midPoint = Math.round(str.length / 2);

    for (let i = 0; i < midPoint; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};