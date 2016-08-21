var moment = require('moment');

//获取当前时间戳
var timestamp = moment().format('x');
//获取当前日期，按标准格式显示
var date = moment().format('YYYY-MM-DD HH:mm:ss');
//日期转时间戳
var timestamp2 = moment(date, 'YYYY-MM-DD HH:mm:ss').format('x');
//时间戳转日期
var date2 = moment.unix(Math.floor(timestamp / 1000)).format('YYYY-MM-DD HH:mm:ss');


console.log(timestamp);
console.log(date);
console.log(timestamp2);
console.log(date2);
