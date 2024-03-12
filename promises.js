const myPromise1 = new Promise((resolve, reject)=>{
    let a=2, b=7
    const sum = a+b

    if(sum === 10){
        resolve("sum is correct")
    }
    else{
        reject("sum is not correct")
    }
})

const myPromise2 = new Promise((resolve, reject)=>{
    let a=2, b=7
    const sum = a+b

    if(sum === 9){
        resolve("sum is correct")
    }
    else{
        reject("sum is not correct")
    }
})

const myNewPromise=Promise.all([myPromise1, myPromise2])

myNewPromise.then((myValue)=>{
    console.log('printing my new promise', myNewPromise)})
    .catch((error)=> {console.log("my error", error)})




























// const p1= new Promise ((resolve, reject)=>{
//     console.log("inside the p1 promise")
//     resolve("shalki")
//     // reject()
// })
//
// console.log(p1)
// p1.catch((myError)=>{
//     console.log("error aa agya")
//     // console.log(myError)
// })
// p1.then(console.log("my promise has been resolved"))
