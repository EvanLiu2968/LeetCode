const diff = require('./diff');

exports.deepEqual = function(obj1, obj2){
  if(diff(obj1, obj2).length === 0 ){
    return true
  }
  return false
}