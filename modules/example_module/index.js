var util = require("util");
var events = require("events");

function ExampleModule() {
    events.EventEmitter.call(this);
}

util.inherits(ExampleModule, events.EventEmitter);

ExampleModule.prototype.process = function(obj) {
    console.log('Processing data & returning result on event...');
    this.emit("data", util.format("Received object %s", JSON.stringify(obj)));
};

exports = module.exports = ExampleModule;