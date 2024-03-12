let a = {
    name: 'shalki',
    age: 31,
    sex: 'f'

}

let b =
    {
        name1: "Ankit",
        age1: 29,

        birthday: () => {

            console.log("happy Birthday")

        }

    }
a.__proto__ = b
console.log(a.name1)
console.log(a.age1)
console.log(a.birthday())
//console.log(b.sex)


