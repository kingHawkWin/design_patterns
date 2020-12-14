"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Target = /** @class */ (function () {
    function Target() {
    }
    Target.prototype.request = function () {
        return 'test';
    };
    return Target;
}());
var Adaptee = /** @class */ (function () {
    function Adaptee() {
    }
    Adaptee.prototype.specificRequest = function () {
        return 'tset';
    };
    return Adaptee;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(adaptee) {
        var _this = _super.call(this) || this;
        _this.adaptee = adaptee;
        return _this;
    }
    Adapter.prototype.request = function () {
        var result = this.adaptee.specificRequest().split('').reverse().join('');
        return result;
    };
    return Adapter;
}(Adaptee));
var targetResult = new Target().request();
var adapteeResult = new Adaptee().specificRequest();
var adapterResult = new Adapter(new Adaptee()).request();
console.log("targetResult === adapteeResult, " + (targetResult === adapteeResult));
console.log("targetResult === adapterResult, " + (targetResult === adapterResult));
