"use strict";
exports.__esModule = true;
exports.WordsCollection = void 0;
var alphabeticalOrderIterator_1 = require("./alphabeticalOrderIterator");
var WordsCollection = /** @class */ (function () {
    function WordsCollection() {
        this.items = [];
    }
    WordsCollection.prototype.getItems = function () {
        return this.items;
    };
    WordsCollection.prototype.getCount = function () {
        return this.items.length;
    };
    WordsCollection.prototype.addItem = function (item) {
        this.items.push(item);
    };
    WordsCollection.prototype.getIterator = function () {
        return new alphabeticalOrderIterator_1.AlphabeticalOrderIterator(this);
    };
    WordsCollection.prototype.getReverseIterator = function () {
        return new alphabeticalOrderIterator_1.AlphabeticalOrderIterator(this, true);
    };
    return WordsCollection;
}());
exports.WordsCollection = WordsCollection;
//# sourceMappingURL=wordsCollection.js.map