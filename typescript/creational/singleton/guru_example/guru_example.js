"use strict";
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
function client() {
    var s1 = Singleton.getInstance();
    var s2 = Singleton.getInstance();
    console.log(s1 === s2);
}
client();
