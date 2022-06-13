// 在nodejs中,每个文件都会被视为一个单独的模块


// 加载了一个在同级目录中名为circle.js的文件
const circle = require('./circle.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`)