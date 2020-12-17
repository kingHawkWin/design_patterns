"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proxy = void 0;
var Proxy = /** @class */ (function () {
    function Proxy(realSubject) {
        this.realSubject = realSubject;
    }
    Proxy.prototype.checkAccess = function () {
        console.log('Proxy: Checking access prior to firing a real request.');
        return true;
    };
    Proxy.prototype.logAccess = function () {
        console.log('Proxy: Logging the time of request.');
    };
    Proxy.prototype.request = function () {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    };
    return Proxy;
}());
exports.Proxy = Proxy;
