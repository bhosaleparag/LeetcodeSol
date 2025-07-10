
var TimeMap = function() {
  this.timeMap = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if(!this.timeMap[key]) this.timeMap[key] = []
  this.timeMap[key][timestamp] = value
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  if(this.timeMap[key]){
    if(this.timeMap[key].length <= timestamp) return this.timeMap[key][this.timeMap[key].length-1]
    if(this.timeMap[key][timestamp]){
      return this.timeMap[key][timestamp]
    }
    for(let i=timestamp-1;i>=0;i--){
      if(this.timeMap[key][i]){
        this.timeMap[key][timestamp] = this.timeMap[key][i]
        return this.timeMap[key][i]
      }
    }
  } else {
    return ''
  }
  this.timeMap[key][timestamp] = ''
  return ''
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */