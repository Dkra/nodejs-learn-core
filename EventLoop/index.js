// https://knownsec-fed.com/2018-09-13-yi-dao-shi-jian-xun-huan-ti-yin-fa-de-xie-an/

const fs = require('fs')

console.log('-------Event Loop Module--------')
setTimeout(() => {
    console.log('timeout 1');
}, 1);

process.nextTick(() => {
    console.log('nextTick 1');
});

fs.readFile('./index.js', (err, data) => {
    if (err) return;
    console.log('I/O callback');
    process.nextTick(() => {
        console.log('nextTick 2');
    });
});

setImmediate(() => {
    console.log('immediate 1');
    process.nextTick(() => {
        console.log('nextTick 3');
    });
});

setTimeout(() => {
    console.log('timeout 2');
    process.nextTick(() => {
        console.log('nextTick 4');
    });
}, 100);

new Promise((resolve, reject) => {
    console.log('promise run');
    process.nextTick(() => {
        console.log('nextTick 5');
    });
    resolve('promise then');
    setImmediate(() => {
        console.log('immediate 2');
    });
}).then(res => {
    console.log(res);
});

console.log('----------------------------')
module.exports = {};