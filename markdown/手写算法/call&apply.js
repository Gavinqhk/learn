Function.prototype.mycall = function (context) {
    let fn = Symbol();
    let args = [];
    context = context || window;
    context[fn] = this;
    for (let index = 1; index < arguments.length; index++) {
        const arg = arguments[index];
        args.push(arg);
    }
    const resp = eval('context[fn]('+ args +')');

    delete context.fn;

    return resp;

}
Function.prototype.myapply = function(context) {
    let fn = Symbol();
    context = context || window;
    context[fn] = this;
    let args = arguments[1];
    if(!args instanceof Array) {
        console.error("the second args must be a Array");
        return;
    }
    const resp = eval('context[fn]('+ args + ')')
    delete context.fn;
    return resp;
}
let obj1 = {
    name: "obj1",
    sayName(age, sex, height) {
        console.log("i am " + this.name);
        console.log("age " + age);
        console.log("sex " + sex);
        console.log("height " + height);
        return `i am ${this.name},${age}years old,${height}cm and ${sex}`;
    },
}
let obj2 = {
    name: "obj2"
}
let obj3 = {
    name: "obj3"
}
const resp1 = obj1.sayName(18, 0, 170);
console.log(resp1);
const resp2 = obj1.sayName.mycall(obj2, 20, 1, 178);
console.log(resp2);
const resp3 = obj1.sayName.myapply(obj3, [20, 1, 199]);
console.log(resp3);

// call 现象
// [].call(this, arg1, arg2, ...);
// 第一个参数指定this指向， 后续为单个参数形式
// 结果两种情况，有数据返回，无数据返回。


// apply 不同的是 第二个参数为数组。
