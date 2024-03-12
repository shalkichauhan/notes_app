const book = () => {
    console.log("book is good")
    let my_promise = new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log(" My book function is runnning")
            resolve(" successful")
        }, 5000)


    })
    return my_promise

}
const gym = () => {
    console.log("gym is good")
    return "shalki"
}

const cook = async () => {


    let a = await gym()
    let b = await book()

    //console.log(b)
}
cook()