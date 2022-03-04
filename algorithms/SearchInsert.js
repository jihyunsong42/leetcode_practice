
searchInsert = function(nums, target) {
    let arr = nums;
    let start = 0; // 0
    let end = nums.length - 1; // 5
    let midIndex;
    while (start <= end) {
        midIndex = parseInt((start + end) / 2); // 4
        console.log("start : " + start); // 3
        console.log("end : " + end); // 5
        console.log("mid : " + midIndex); // 4
        console.log("----")
        if (target == arr[midIndex]) {
            return midIndex;
        }
        else if (target < arr[midIndex]) {
            end = midIndex - 1;
        }
        else {
            start = midIndex + 1;
        }
        
        if (start > end) 
            return end + 1;
    }
}
console.log(searchInsert([0,2,4,5,7,9], 10));
