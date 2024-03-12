class morning {
    time = 'early'
    mode = 'alarm'

    constructor(dog, cat) {
        this.dog = dog
        this.cat = cat
        console.log(" my favourite animal is  " + this.dog + " of the colour  " + this.cat)
    }

}

class evening extends morning {


    hide() {

        console.log(" I am an iherited class")
    }
}


let lalit = new morning('husky', 'white')
let zubin = new morning('elephant', 'brown')
let shalki = new evening('koala', 'gray')


console.log(lalit.time)
console.log(zubin.mode)
console.log(shalki.time)
console.log(shalki.hide())
