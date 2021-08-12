// bind.js
Function.prototype.mybind = function(context) {
    if(typeof this !== "function") {
        throw new Error("must be a function");
    }
    let ctx = context || window; // 兼容null情况指向window
    let outArgs = [];
    let self = this;
    for (let i = 1; i < arguments.length; i++) {
        outArgs.push(arguments[i]);
    }
    let F = function() {};
    let bound = function() {
        let innerArgs = [];
        for (let i = 0; i < arguments.length; i++) {
            innerArgs.push(arguments[i]);
        }
        let args = outArgs.concat(innerArgs);
        //若函数是匿名函数则会出现下述错误。
        //Function has non-object prototype 'undefined' in instanceof check 
        self.apply((this instanceof self) ? this : ctx, args);
    };
    F.prototype = self.prototype;
    bound.prototype = new F();

    return bound;
}

let obj1 = {
    name: "obj1",
    say: function (age, height) {
        this.age = age;
        this.height = height;
        console.log(this.name, this.age, this.height);
    }
}
function say(age, height) {
    this.age = age;
    this.height = height;
    console.log(this.name, this.age, this.height);
}
let obj2 = {
    name: "obj2",
}
let obj3 = {
    name: "obj3",
}
obj1.say(1, 10);
let res1 = obj1.say.bind(obj2);
res1(2,20)
let o2 = new res1(2, 20);
console.dir(o2);