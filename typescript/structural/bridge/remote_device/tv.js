"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tv = void 0;
var Tv = /** @class */ (function () {
    function Tv() {
        this.able = Math.random() < 0.5 ? true : false;
        this.volume = Math.round(Math.random() * 100);
        this.channel = Math.round(Math.random() * 100);
    }
    Tv.prototype.disable = function () {
        return false;
    };
    Tv.prototype.enable = function () {
        return true;
    };
    Tv.prototype.getChannel = function () {
        return this.channel;
    };
    Tv.prototype.getVolume = function () {
        return this.volume;
    };
    Tv.prototype.isEnabled = function () {
        return this.able;
    };
    Tv.prototype.setChannel = function (channel) {
        this.channel = channel;
        return this.channel;
    };
    Tv.prototype.setVolume = function (percent) {
        this.volume = percent;
        return this.volume;
    };
    return Tv;
}());
exports.Tv = Tv;
