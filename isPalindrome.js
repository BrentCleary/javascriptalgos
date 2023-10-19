/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  
  // loop over param
  // if param[0] = param.length-1;
    // increment param
  // else
    // return false
  
  const str1 = x.toString();

  if(str1.length === 1 || str1.length === 0)
  {
    return true;
  }

  for(let i = 0; i < str1.length / 2; i++)
  {
    if(str1[i] !== str1[str1.length - i - 1])
    {
      return false;
    }
  }

  return true;
};

