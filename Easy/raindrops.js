//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {


  let speak = ''
  
  if (number % 3 != 0 && number % 5 != 0 && number % 7 !=0) {
    speak = number.toString()
  } else {
    if (number % 3 === 0) {
      speak += 'Pling'
    }
    if (number % 5 === 0) {
      speak += 'Plang'
    }
    if (number % 7 === 0) {
      speak += 'Plong'
    }
  }
  
  return speak

}
