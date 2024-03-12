const yargs = require('yargs')
const notes = require('./1-json.js')

//const proces = process.argv

//console.log(proces)
//console.log(yargs)

yargs.command({

    command: 'adding',
    description: 'this is adding a note',
    builder: {
        title: {
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: ' this is the body of my notes',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function (argv) {
        console.log(2 + 8, argv.body, argv.title)
    }
})

yargs.command({

    command: 'removing',
    description: 'removing a note',
    builder: {

        book: {

            demandOption: " True",
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(argv, 9 - 2)
    }
})

yargs.parse()
console.log(yargs.argv)
