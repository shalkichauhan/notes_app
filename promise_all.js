p1 = new Promise((resolve, reject) => {
    console.log(1 + 2)
    resolve(" shalki")
})

p2 = new Promise((resolve, reject) => {
    console.log(3 + 3)
    resolve(3)
})

let promise_all = Promise.all(([p1, p2]))

promise_all.then((v1, v2) => {
    console.log("I am successfull ", v1, v2)
})