const P1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log(" This code will run in 3 seconds");
    }, 5000);

    resolve(" Happily resolved")
})

P1.then(() => {
    console.log(4 + 6)
}).then(() => {
    setTimeout(() => {
        console.log("There is a wait");
    }, 3000);
    console.log("I am going to start .....")
}).then(() => {
    console.log(10 + 10)
})

//
// setTimeout(() => {
//     console.log("Delayed for 1 second.");
// }, 1000);