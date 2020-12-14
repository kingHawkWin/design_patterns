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
<<<<<<< HEAD
    console.log(s1 === s2);
=======
    console.log("s1 === s2, " + (s1 === s2));
>>>>>>> ff0f8f96f42e3edb68aff6ab15e64aeab4313474
}
client();
