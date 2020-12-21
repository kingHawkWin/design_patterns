"use strict";
exports.__esModule = true;
var originator_1 = require("./originator");
var caretaker_1 = require("./caretaker");
var originator = new originator_1.Originator('Super-duper-super-puper-super.');
var caretaker = new caretaker_1.Caretaker(originator);
caretaker.backup();
originator.doSomething();
caretaker.backup();
originator.doSomething();
caretaker.backup();
originator.doSomething();
console.log();
caretaker.showHistory();
console.log('---- rollback ----');
caretaker.undo();
console.log('---- rollback ----');
caretaker.undo();
caretaker.showHistory();
//# sourceMappingURL=main.js.map