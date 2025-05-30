/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      if(n===1) return 1
      let low = 0;
      let high = n
      while(low<=high){
        let mid = Math.floor((low+high)/2)
        let badVer = isBadVersion(mid);

        if(badVer){
          if(!isBadVersion(mid-1)) return mid;
          high = mid -1
        } else {
          if(isBadVersion(mid+1)) return mid+1;
          low = mid +1
        }
        n--
      }
      return 1
    };
};