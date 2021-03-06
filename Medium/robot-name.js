

let usedNames = []

function randomNumber(min,max) {
    return Math.random() * (max - min) + min;

}

function makeName () {

var name = ""
let cnt
//  check name for uniqueness and limit tries to 100
for (cnt = 0; cnt < 100; cnt++) {

// set name to blank
name = ""

// get first random capital letter
name += String.fromCharCode(randomNumber(65,90))

// get second random capital letter
name += String.fromCharCode(randomNumber(65,90))

// get random 3 digit number
// let numStr = ("000" + Math.floor(randomNumber(1, 999)))
//impliments the function above into "name"
// name += numStr.substr(numStr.length - 3)
for (let digit = 0; digit < 3; digit++) {
    name += Math.floor(randomNumber(0, 9))
}


if (usedNames.findIndex(uname => name === uname) === -1){
    break
    }
}

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
        this._name = makeName()
    }

    get name() {
        return this._name
    }

    reset () {
        this._name = makeName()
    }
}


Robot.releaseNames = () => { usedNames = []};
