//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const isPangram = (sentence) => {
let cnt= 0
let rtnVal=false
let sentenceLC = sentence.toLowerCase()
let alpha= "abcdefghijklmnopqrstuvwxyz"
for (let char of alpha ) {

  for(let letter of sentenceLC){
    if(char === letter){
      cnt++
      break
    }
  }
}
if(cnt === alpha.length){
  rtnVal = true
}
return rtnVal
}

