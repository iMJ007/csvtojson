const csvToJson = require('csvtojson');
const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, 'customer-data.csv');

csvToJson()
    .fromFile(csvPath)
    .then((convertedJson) => {
        fs.writeFileSync(path.join(__dirname, 'customer-data.json'), convertedJson);
        console.log('File successfully converted to json!');
    });