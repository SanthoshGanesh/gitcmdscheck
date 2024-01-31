console.log("A new file getting added for new branch");
let a=40;
let b=20;
console.log("a/b", a/b)
var log4js = require('log4js');
log4js.configure({
  appenders: {
    fileLog: { type: 'file', filename: './logfile.txt' },
    console: { type: 'log4js-protractor-appender' }
    },
    categories: {
    file: { appenders: ['fileLog'], level: 'error' },
    another: { appenders: ['fileLog'], level: 'trace' },
    default: { appenders: ['fileLog', 'fileLog'], level: 'trace' }
    }
});
var logger = log4js.getLogger('cheese'); 
var logger = log4js.getLogger('A new file added for new branch');