const yargs = require("yargs");
const util = require("./util.js");

//console.log(process.argv);

yargs.version('1.2.7');

yargs.command({
    command: 'add',
    describe: 'adding new task',
    builder: {
        name: {
            describe: 'task name',
            demandOption: true,
            type: 'string',
        },
        description: {
            describe: 'task name',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (yargs){
        util.add(yargs.name, yargs.description);
        console.log('Tarefa criada com sucesso!');
        //console.log(yargs.name);
        //console.log(yargs.description);
    }
}).command({
    command: 'remove',
    describe: 'remove new task',
    builder: {
        name: {
            describe: 'task name',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (yargs){
        console.log(yargs.name);
    }
}).command({
    command: 'list',
    describe: 'list tasks',
    // builder: {
    //     name: {
    //         describe: 'task name',
    //         demandOption: true,
    //         type: 'string',
    //     }
    // },
    handler: function (yargs){
        //console.log(yargs.name);
        util.list();
    }
}).command({
    command: 'find',
    describe: 'find task',
    builder: {
        name: {
            describe: 'task name',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (yargs){
        console.log(yargs.name);
    }
})

yargs.parse();