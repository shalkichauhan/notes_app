p1 = new Promise((resolve, reject) => {
    console.log(1 + 2)
    reject(" shalki")
})

p2 = new Promise((resolve, reject) => {
    console.log(3 + 3)
    reject(3)
})

let promise_all = Promise.allSettled(([p1, p2]))

promise_all.then((v1, v2) => {
    console.log("I am successfull ", v1, v2)
})