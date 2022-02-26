const twoSum = (nums, target) => {
    let mapOfNumbers = {};
    let twoIndexes = [];

    for (let i = 0; i < nums.length; i++) {
        mapOfNumbers[nums[i]] = i;
    }
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]; // 4, 2, 3, 2, -4
        if (mapOfNumbers[diff] !== undefined && mapOfNumbers[diff] !== i) { // mapOfNumbers[diff] : 1, 0, 2, und, und
            twoIndexes.push(i); // 0, 1
            twoIndexes.push(mapOfNumbers[diff]); //  1, 0
        }
    }
    twoIndexes = [...new Set(twoIndexes)];

      return twoIndexes;
}