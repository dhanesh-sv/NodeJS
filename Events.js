var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("myEvent", myEventFunction);
function myEventFunction(a, b) {
    console.log("event fired");
    var sum = a + b;
    console.log("sum is :" + sum);
};

setTimeout(startFunction, 2000);

function startFunction() {
    eventEmitter.emit("myEvent", 14, 55);
};