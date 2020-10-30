//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`

export const toRna = (dna) => {

  let rna = ""

  for (let num = 0; num < dna.length; num++) {

  let char = dna.charAt(num)
  
      if ( char == 'G' ) {
      // to C
      rna = rna + "C"

      } else if ( char == 'C') {
      rna = rna + "G"
      // to G
      } else if ( char == 'T') {
      rna = rna + "A"
      // to A
      } else if ( char == 'A') {
      rna = rna + "U"
      // to U

    }
    
  } // for each char
  return rna  
}
