// 

let usedNames = []

function randomNumber(min,max) {
    return Math.random() * (max - min) + min;

}

function makeName () {

let name = ""
let cnt
//  check name for uniqueness and limit tries to 100
for (cnt = 0; cnt < 100++) {

// set name to blank
name = ""

// get first random capital letter
name += String.fromCharCode(randomNumber(65,90))

// get second random capital letter
name += String.fromCharCode(randomNumber(65,90))

// get random 3 digit number
let numbStr = ("000" + randomNumber(1, 999) )
name += numStr.substr(numStr.length - 3)
}

if (usedNames.findIndex(uname => name === uname) !== -1); cnt++)

if (cnt === 100) {
    throw new Error("Max tries exceeded")
}

// save unique name
    usedNames.push(name)

// return unique name
return name
}
export class Robot { 
    constructor() {
        this.name = makeName()
    }

    get name() {
        return this._name
    }

    reset () {
        this._name = makeName()
    }
}


Robot.releaseNames = () => { usedNames = []};
