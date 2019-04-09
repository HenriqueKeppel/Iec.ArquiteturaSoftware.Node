const fs = require('fs');
const file = "log.txt";

const insertLog = (logInformation) => {
    fs.appendFileSync(file, `${logInformation}\n`, 'utf8');
}

module.exports = { insertLog }
