"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
var Radio = /** @class */ (function () {
    function Radio() {
        this.able = Math.random() < 0.2 ? true : false;
        this.volume = Math.round(Math.random() * 100);
        this.channel = Math.round(Math.random() * 100);
    }
    Radio.prototype.disable = function () {
        return false;
    };
    Radio.prototype.enable = function () {
        return true;
    };
    Radio.prototype.getChannel = function () {
        return this.channel;
    };
    Radio.prototype.getVolume = function () {
        return this.volume;
    };
    Radio.prototype.isEnabled = function () {
        return this.able;
    };
    Radio.prototype.setChannel = function (channel) {
        this.channel = channel;
        return this.channel;
    };
    Radio.prototype.setVolume = function (percent) {
        this.volume = percent;
        return this.volume;
    };
    return Radio;
}());
exports.Radio = Radio;
