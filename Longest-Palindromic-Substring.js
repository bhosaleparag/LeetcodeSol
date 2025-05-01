/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) return s;

  let start = 0, end = 0;

  const expandFromCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1];
  }

  for (let i = 0; i < s.length; i++) {
    let [left1, right1] = expandFromCenter(i, i);   
    let [left2, right2] = expandFromCenter(i, i + 1); 

    if (right1 - left1 > end - start) {
      start = left1;
      end = right1;
    }

    if (right2 - left2 > end - start) {
      start = left2;
      end = right2;
    }
  }

  return s.slice(start, end + 1);
};
