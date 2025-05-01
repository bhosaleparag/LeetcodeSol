/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
  return words.reduce((acc, word) => acc + (s.startsWith(word) ? 1 : 0), 0);
};