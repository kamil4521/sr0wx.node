var util = require("util");
var events = require("events");

function ExampleMiddleware() {
    events.EventEmitter.call(this);
}

util.inherits(ExampleMiddleware, events.EventEmitter);

ExampleMiddleware.prototype.process = function(obj) {
    console.log('Processing data & returning result on event...');
    this.emit("data", util.format("Received object %s", JSON.stringify(obj)));
};

exports = module.exports = ExampleMiddleware;