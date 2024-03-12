const shalki = async () => {
    let options = {
        method: 'post',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({
            title: 'my post request is working'
        })


    }
    // let options2 = {
    //     method: 'post',
    //     headers: {'Content-type': 'application/json; charset=UTF-8'},
    //     body: JSON.stringify({
    //         title2: 'my post request is working 2'
    //     })


    let p = await fetch("https://jsonplaceholder.typicode.com/posts", options)
    let result = await p.json()
    return result
    // console.log(" I am running")
}

const my_fun = async () => {

    let x = await shalki()
    console.log(x)
    console.log(" am I running ?    .....")


}

my_fun()

//.................................
