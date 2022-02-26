var romanToInt = function(s) {
    // 1000 = M
    // 900 = CM
    // 500 = D
    // 400 = CD
    // 100 = C
    // 90 = XC
    // 50 = L
    // 40 = XL
    // 10 = X
    // 9 = IX
    // 5 = V
    // 4 = IV
    // 1 = I
   let result = 0;
   const hash = new Map();
   hash.set("M", 1000);
   hash.set("CM", 900);
   hash.set("D", 500);
   hash.set("CD", 400);
   hash.set("C", 100);
   hash.set("XC", 90);
   hash.set("L", 50);
   hash.set("XL", 40);
   hash.set("X", 10);
   hash.set("IX", 9);
   hash.set("V", 5);
   hash.set("IV", 4);
   hash.set("I", 1);

   for (let i = 0; i < s.length; i++) {
       let currVal = hash.get(s[i]); // C - 100
       let nextVal = hash.get(s[i+1]); // M - 1000

       if (currVal < nextVal) {
           let valToAdd = nextVal - currVal;
           result += valToAdd;
           i++;
       }
       else {
           result += currVal;
       }
   }
   return result;
};