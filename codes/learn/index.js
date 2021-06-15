class cla_obj {
    aaa = "aaa";
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(name, age);
        function eat() {
            console.log("eeeee");
        }
    }
    say () {
        console.log("my name is " + this.name);
    }
}

function fun_obj(name, age) {
    this.name = name;
    this.age = age;
    console.log(name, age);
}

console.dir(cla_obj);
console.dir(new cla_obj(1,222));

console.dir(fun_obj);
console.dir(new fun_obj(1,222));

