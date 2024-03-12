const greetings = (message, callback)=>{
    console.log(message)
    callback()
}

const greetingsTo = (name)=>{
    console.log("Blonde")
}

greetings("Good Morning ", greetingsTo)


const abc=(zyx, mycallback1, mycallback2) => { console.log(" Hi I am running")
mycallback1()
    mycallback2()

}

const dfg = () => { console.log("happpy day")



}
 abc("message", dfg, greetingsTo)