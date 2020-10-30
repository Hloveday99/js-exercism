//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (startDate) => {

    // get date in terms of milliseconds
    let milSec = startDate.getTime()

    // add the number of milliseconds that equal 1 gigasecond
   milSec += (1000000000000) //1000 miliseconds times 1 billion seconds

    // convert back to date

    // return date
    return new Date (milSec)
}
