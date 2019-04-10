const fs = require('fs');
const file = "tarefas.json";

const add = (name, description) => {
    
    const tarefa = {
        name: name,
        description: description
    }

    const tarefaJson = JSON.stringify(tarefa);
    fs.appendFileSync(file, `${tarefaJson}\n`, 'utf8');    
}

const list = () => {

    const buffer = fs.readFileSync(file).toString();
    const arrayBuffer =  buffer.split('\n');    
    const result = [];

    for(i = 0; i < arrayBuffer.length; i++)
    {
        var line = arrayBuffer[i];

         if (line != '')
             result.push(JSON.parse(line));
    }
    return result;
}

module.exports = { add, list }