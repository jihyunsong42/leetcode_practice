const getFirstPowerOfHex = (pow) => {
  let res = Math.pow(16, pow); // Get the power of 16
  let numToStr = res.toString(); // Change number to string

  if (res <= 16**4) { // If the number is not bigger than 16^4, increase the power and iterates the function recursively.
    pow++;
    return getFirstPowerOfHex(pow);
  }
  else {
    if (numToStr.includes("e")) { // In case the number has floating point, I added If statement finding "e" so I can exclude string after "e" e.g) 1.36264e+12 => 1.36264
      let e_index = numToStr.indexOf("e"); // Find an index of e
      numToStr = numToStr.slice(0, e_index); // exclude string followed by "e"
    }

    // If the number does not have floating point, I'll just keep going with it.

    if (!numToStr.includes("1") || !numToStr.includes("2") || !numToStr.includes("4") || !numToStr.includes("8")) { 
      // if the number does NOT include 1, 2, 4, OR 8
      return res; // Return the result
    }
    else { // if the number includes 1, 2, 4 AND 8, add power and iterates the function recursively.
      pow++;
      return getFirstPowerOfHex(pow);
    }
  }
}

console.log(getFirstPowerOfHex(1)); // Starts from power 1.