"use strict"

const dataFn = {

  getParamsArr: function getParamsArr(){
    let paramsArr = []
    process.argv.forEach((val, index, array) => {
      paramsArr.push(val)
    })
    return paramsArr
  },

  hasParam: function hasParam(param){
    let isExist = false;
    process.argv.map((arg) => {
      if(param === arg){
        isExist = true
      }
    })
    return isExist
  }
}

module.exports = dataFn;
