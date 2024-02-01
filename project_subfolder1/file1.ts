console.log("A new file getting added for new branch");
 a=40;
 b=20;
 let c=60;
console.log("a/b", a/b)
if(c===a+b){
console.log("c is sum of a and b");
}
else{
  console.log("c is not the sum of a and b")
}
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