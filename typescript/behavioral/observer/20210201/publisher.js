"use strict";
exports.__esModule = true;
exports.Publisher = void 0;
var Publisher = /** @class */ (function () {
    function Publisher() {
        this.subscribers = [];
    }
    Publisher.prototype.subscribe = function (s) {
        this.subscribers.push(s);
    };
    Publisher.prototype.unsubscribe = function (s) {
        var index = this.subscribers.indexOf(s);
        this.subscribers.splice(index, 1);
    };
    Publisher.prototype.notify = function () {
        var _this = this;
        this.subscribers.forEach(function (v) {
            v.update(_this);
        });
    };
    return Publisher;
}());
exports.Publisher = Publisher;
//# sourceMappingURL=publisher.js.map