// let p = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
//
// p.then((value) => {
//
//     console.log(value.status)
//     console.log(value.ok)
//     return value.json()
// }).then((value) => {
//     console.log(value)
// })
//
//
// const sampleJson = {
//     name: {
//         firstName: "shalki",
//         lastName: "chauhan"
//     },
//     city: "sydney",
//     country: "australia"
// }
//
// console.log("the first name is : ", sampleJson.name.firstName)
// console.log("the city is : ", sampleJson.city)


//.............................................

const my_api = fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
my_api.then((value) => {

    console.log(value.status)
    return value.json()
}).then((x) => {
    console.log(x)
})
