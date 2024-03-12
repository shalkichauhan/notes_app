const weather = async () => {

    const P1 = new Promise((resolve, reject) => {

        // resolve("P1 is resolved")
        reject(" I am rejected")
    })
    const P2 = new Promise((resolve, reject) => {

        // resolve("P2 is resolved")
        reject(" I am rejected")

    })

    try {
        const waiting = await P1
        console.log("waiting for await P1-", waiting)
        const waiting2 = await P2
        console.log(" waiting for P2- ")
        console.log(waiting2)

    } catch (e) {
        console.log("there is an error")
    }


}

weather()
// const resolveValue = P1.then((value) => {
//     console.log(" Value resolved", value)
//
//
// }).catch((error) => {
//     console.log(" the error is - ", error)
// })

// console.log(" shalki", resolveValue)


///




