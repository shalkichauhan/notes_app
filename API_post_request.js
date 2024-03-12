let options

const shalki_fun = async () => {

    options = {
        method: 'post',
        headers: {'a': 'b'},
        body: {
            title: 'my post request is working'
        }


    }
    c = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m", options).then((value) => {
        return value.json()
        console.log(" gudd")
    }).then((value) => {
        console.log(value)
        console.log("happy birthday Shalki")


    })
}

// const my_function = async () => {
shalki_fun()