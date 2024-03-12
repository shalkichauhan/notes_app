const p1 = new Promise((resolve, reject) => {

    const myfun = () => {
        return 3 + 5
    }

    resolve(0)
    reject("sorry")
})

p1.then((value) => {
    console.log(" my program worked", value)
}).then((value) => {
    console.log(" and I am experimenting")
})