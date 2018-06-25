var A = function () {}
A.prototype = {
    a: function () {
        return "Method a";
    }
}

var B = function () {}
B.prototype = {
    b: 101
}

var A1 = new A();
var B1 = new B();

var C1 = {};
for (var key in A1) {
    C1[key] = A1[key];
}
for (var key in B1) {
    C1[key] = B1[key];
}

var C = function () {}
C.prototype = C1

var c = new C();

console.log(c.a());
console.log(c.b);
