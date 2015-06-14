var util = require("util");
var events = require("events");

function Sr0wx(conf){
    events.EventEmitter.call(this);
}

Sr0wx.prototype.start = function(){
    console.log('Starting SR0WX.node');
};

exports = module.exports = Sr0wx;