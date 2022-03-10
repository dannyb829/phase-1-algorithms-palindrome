function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split("").reverse().join("")
}

/* 
  Add your pseudocode here
  the function takes in a 'word' as an arguement
  if (word same as word backwards)
  return true
  else 
  return false
  */
 
 /*
 Add written explanation of your solution here
 I need to create a function that checks if a word reads the same backwards as forwards
 to reverse word turn word into array using split, then apply reverse, then join reversed array back into a string
 compare this to the original word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("rotor"))
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("apple"));
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("people"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));
}

module.exports = isPalindrome;
