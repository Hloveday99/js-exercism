//A,C,G,T

export class NucleotideCounts {
  static parse(dna) {
  
let A = 0

let C = 0

let G = 0

let T = 0

let dnaArray = dna.split('')
for (let cnt = 0; cnt < dnaArray.length; cnt++) {
  switch(dnaArray [cnt]) {
    case'A':
     A +=1;
     break;
    case'C':
     C +=1;
     break;
    case'G':
     G +=1;
     break;
    case'T':
     T +=1;
     break;
    default: 
    throw new Error('Invalid nucleotide in strand')
      }
    }
    return `${A} ${C} ${G} ${T}`
  }
}