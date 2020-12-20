"use strict";
exports.__esModule = true;
exports.AbstractClass = void 0;
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    AbstractClass.prototype.templateMethod = function () {
        this.baseOperation1();
        this.requiredOperation1();
        this.baseOperation2();
        this.hook1();
        this.requiredOperation2();
        this.baseOperation3();
        this.hook2();
    };
    AbstractClass.prototype.baseOperation1 = function () {
        console.log('AbstractClass baseOperation1.');
    };
    AbstractClass.prototype.baseOperation2 = function () {
        console.log('AbstractClass baseOperation2.');
    };
    AbstractClass.prototype.baseOperation3 = function () {
        console.log('AbstractClass baseOperation3.');
    };
    AbstractClass.prototype.hook1 = function () { };
    AbstractClass.prototype.hook2 = function () { };
    return AbstractClass;
}());
exports.AbstractClass = AbstractClass;
//# sourceMappingURL=abstractClass.js.map