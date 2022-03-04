var removeElement = function(nums, val) {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};
// [0,1,2,2,3,0,4,2];
let nums = [0,1,2,2,3,0,4,2];
let val = 2;
removeElement(nums, val);