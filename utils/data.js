"use strict"

function getParamsArr(){
  let paramsArr = []
  process.argv.forEach((val, index, array) => {
    index >= 2 && paramsArr.push(val)
  })
  return paramsArr
}

function hasParam(param){
  let paramsArr = []
  process.argv.forEach((val, index, array) => {
    if(index >= 2 && param === val){
      return true
    }
    return false
  })
}

module.exports = {
  getParamsArr: getParamsArr,
  hasParam: hasParam
}
