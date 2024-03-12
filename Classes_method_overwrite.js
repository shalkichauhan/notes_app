class morning {
    time = 'early'
    mode = 'alarm'

    sunrise(a, b) {
        this.a = a
        this.b = b
        console.log(" the early riser will see it  " + this.a + this.b)
    }

    constructor(dog, cat) {
        this.dog = dog
        this.cat = cat
        console.log(" my favourite animal is  " + this.dog + " of the colour  " + this.cat)
    }
}

class evening extends morning {
    sun() {
        console.log(" what's hapenning ?   + this.Diwali")
        super.sunrise("good", "time")
        console.log(` what's hapenning ? ${this.x} ` + this.y)
    }


    constructor() {
        super()
        console.log(" this is an experiment")
    }
}

let lalit = new morning('husky', 'white')
let zubin = new morning('elephant', 'brown')
let shalki = new evening('koala', 'gray')

console.log(lalit.time)
console.log(zubin.mode)
console.log(shalki.time)
console.log(shalki.sun('happy', 'birthday'))
console.log()
