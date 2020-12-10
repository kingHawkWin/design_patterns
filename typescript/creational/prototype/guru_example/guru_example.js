"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Prototype = /** @class */ (function () {
    function Prototype() {
    }
    Prototype.prototype.clone = function () {
        var result = Object.create(this); // 以p1为基类创建子类
        result.component = Object.create(this.component); // 同上
        result.circularReference = __assign(__assign({}, this.circularReference), { prototype: __assign({}, this) });
        return result;
    };
    return Prototype;
}());
var ComponentWithBackReference = /** @class */ (function () {
    function ComponentWithBackReference(prototype) {
        this.testValue = 111;
        this.prototype = prototype;
    }
    return ComponentWithBackReference;
}());
function client() {
    var p1 = new Prototype();
    p1.primitive = 222;
    p1.component = [3, 2, 1];
    p1.circularReference = new ComponentWithBackReference(p1);
    var p2 = p1.clone();
    console.log("p1.primitive = " + p1.primitive + ", p2.primitive = " + p2.primitive, p1.primitive === p2.primitive);
    console.log("p1.component = " + p1.component + ", p2.component = " + p2.component, p1.component === p2.component);
    console.log("p1.circularReference = " + p1.circularReference + ", p2.circularReference = " + p2.circularReference, p1.circularReference === p2.circularReference);
    console.log("p1.circularReference.prototype = " + p1.circularReference.prototype + ", p2.circularReference.prototype = " + p2.circularReference.prototype, p1.circularReference.prototype === p2.circularReference.prototype);
    console.log(p2.circularReference.testValue);
    console.log(p1 === Object.getPrototypeOf(p2));
    console.log(p1.component === Object.getPrototypeOf(p2.component));
}
client();
