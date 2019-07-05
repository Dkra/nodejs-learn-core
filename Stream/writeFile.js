const fs = require('fs');
const file = fs.createWriteStream('./Stream/writeFile.output');

for (let i = 0; i <= 10; i++) {
    file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n');
}
setTimeout(() => file.write('write after 5sec.....'), 5000) // write after 5sec
setTimeout(() => file.end(), 10000) //  pending three second