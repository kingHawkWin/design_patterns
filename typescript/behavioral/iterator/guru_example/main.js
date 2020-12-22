"use strict";
exports.__esModule = true;
var wordsCollection_1 = require("./wordsCollection");
var collection = new wordsCollection_1.WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');
var iterator = collection.getIterator();
console.log('Straight traversal:');
while (iterator.valid()) {
    console.log(iterator.next());
}
console.log();
console.log('Reverse traversal:');
var reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}
//# sourceMappingURL=main.js.map