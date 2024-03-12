class employee {

    workDay(a) {

        console.log(` employee works from mon - fri ${a + 2}`)
    }

    holiday() {
        console.log(" employee is on holiday on the weekends")
    }
}

class programmer extends employee {


}

let sheets = new employee()
let michelle = new programmer()

michelle.workDay(4)

