"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Remote = void 0;
var Remote = /** @class */ (function () {
    function Remote(device) {
        this.device = device;
    }
    Remote.prototype.togglePower = function () {
        if (this.device.isEnabled()) {
            this.device.disable();
        }
        else {
            this.device.enable();
        }
        return this.device.isEnabled();
    };
    Remote.prototype.volumeDown = function () {
        var volume = this.device.getVolume();
        if (volume >= 10) {
            this.device.setVolume(volume - 10);
        }
        return this.device.getVolume();
    };
    Remote.prototype.volumeUp = function () {
        var volume = this.device.getVolume();
        if (volume <= 90) {
            this.device.setVolume(volume + 10);
        }
        return this.device.getVolume();
    };
    Remote.prototype.channelDown = function () {
        var channel = this.device.getChannel();
        if (channel > 1) {
            this.device.setChannel(channel - 1);
        }
        return this.device.getChannel();
    };
    Remote.prototype.channelUp = function () {
        var channel = this.device.getChannel();
        if (channel < 100) {
            this.device.setChannel(channel + 1);
        }
        return this.device.getChannel();
    };
    return Remote;
}());
exports.Remote = Remote;
