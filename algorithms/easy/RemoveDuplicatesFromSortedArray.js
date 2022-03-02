var removeDuplicates = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[count] < nums[i]) { // if prev < nums[1]
            count++;
            nums[count] = nums[i];
        }
    }

    for (let i = count + 1; i < nums.length; i++) {
        nums[i] = "_";
    }
    return count + 1;
};

removeDuplicates(nums);