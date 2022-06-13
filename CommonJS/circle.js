/*
ES6语法糖
const {a} = {a:1}
等价于
var obj = {a:1}
var a = obj.a
*/

/*
模块 circle.js 已导出函数 area() 和 circumference()。 通过在特殊的 exports 对象上指定额外的属性，将函数和对象添加到模块的根部。

模块的本地变量将是私有的，因为模块被 Node.js 封装在函数中（参见模块封装器）。 在此示例中，变量 PI 是 circle.js 私有的。
*/
const { PI } = Math;
exports.area = (r) => PI * r ** 2;
exports.circumference = (r) => 2 * PI * r;
