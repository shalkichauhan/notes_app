const P1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        return " This code will run in 3 seconds";
    }, 2000);

    resolve(" Happily resolved")
})

P1.then((x) => {
    return 4 + 6
    console.log(x)
}).then(() => {
    setTimeout(() => {
        return "There is a wait";
    }, 3000);
    console.log("I am going to start .....")
}).then(() => {
    console.log(10 + 10)
})
