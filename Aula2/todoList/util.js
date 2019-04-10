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

const find = (name) => {
    const buffer = fs.readFileSync(file).toString();
    const arrayBuffer =  buffer.split('\n');    

    for(i = 0; i < arrayBuffer.length; i++)
    {
        var line = arrayBuffer[i];

         if (line != '')
         {
            var item = JSON.parse(line);
            
            if(item.name == name)
                return item;
         }
    }
}

const remove = (name) => {
    const buffer = fs.readFileSync(file).toString();
    const arrayBuffer =  buffer.split('\n');    
    const result = [];

    for(i = 0; i < arrayBuffer.length; i++)
    {
        var line = arrayBuffer[i];

         if (line != '')
         {
            var item = JSON.parse(line);
            
            if(item.name == name)
                continue;
            result.push(item);
         }
    }

    // removendo arquivo anterior
    if (result.length > 0)
        fs.unlinkSync(file);
    
    // gravando novo arquivo
    for(i = 0; i < result.length; i++)
    {
        const tarefaJson = JSON.stringify(result[i]);
        fs.appendFileSync(file, `${tarefaJson}\n`, 'utf8');
    }
}

module.exports = { add, list, remove, find }