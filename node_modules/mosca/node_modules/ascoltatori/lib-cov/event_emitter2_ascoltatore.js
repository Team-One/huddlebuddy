if (typeof global.__coverage__ === 'undefined') { global.__coverage__ = {}; }
if (!global.__coverage__['/Users/matteo/Repositories/ascoltatori/lib/event_emitter2_ascoltatore.js']) {
   global.__coverage__['/Users/matteo/Repositories/ascoltatori/lib/event_emitter2_ascoltatore.js'] = {"path":"/Users/matteo/Repositories/ascoltatori/lib/event_emitter2_ascoltatore.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":1,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"EventEmitter2Ascoltatore","line":16,"loc":{"start":{"line":16,"column":0},"end":{"line":16,"column":44}}},"2":{"name":"subscribe","line":38,"loc":{"start":{"line":38,"column":47},"end":{"line":38,"column":89}}},"3":{"name":"(anonymous_3)","line":46,"loc":{"start":{"line":46,"column":45},"end":{"line":46,"column":86}}},"4":{"name":"unsubscribe","line":55,"loc":{"start":{"line":55,"column":49},"end":{"line":55,"column":93}}},"5":{"name":"close","line":65,"loc":{"start":{"line":65,"column":43},"end":{"line":65,"column":64}}},"6":{"name":"(anonymous_6)","line":74,"loc":{"start":{"line":74,"column":52},"end":{"line":74,"column":69}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":13}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":60}},"3":{"start":{"line":4,"column":0},"end":{"line":4,"column":29}},"4":{"start":{"line":5,"column":0},"end":{"line":5,"column":23}},"5":{"start":{"line":6,"column":0},"end":{"line":6,"column":48}},"6":{"start":{"line":7,"column":0},"end":{"line":7,"column":59}},"7":{"start":{"line":8,"column":0},"end":{"line":8,"column":43}},"8":{"start":{"line":16,"column":0},"end":{"line":27,"column":1}},"9":{"start":{"line":17,"column":2},"end":{"line":17,"column":33}},"10":{"start":{"line":19,"column":2},"end":{"line":22,"column":5}},"11":{"start":{"line":24,"column":2},"end":{"line":24,"column":33}},"12":{"start":{"line":26,"column":2},"end":{"line":26,"column":21}},"13":{"start":{"line":36,"column":0},"end":{"line":36,"column":82}},"14":{"start":{"line":38,"column":0},"end":{"line":44,"column":2}},"15":{"start":{"line":39,"column":2},"end":{"line":39,"column":24}},"16":{"start":{"line":40,"column":2},"end":{"line":40,"column":56}},"17":{"start":{"line":42,"column":2},"end":{"line":42,"column":95}},"18":{"start":{"line":43,"column":2},"end":{"line":43,"column":14}},"19":{"start":{"line":46,"column":0},"end":{"line":53,"column":2}},"20":{"start":{"line":47,"column":2},"end":{"line":47,"column":24}},"21":{"start":{"line":48,"column":2},"end":{"line":48,"column":45}},"22":{"start":{"line":50,"column":2},"end":{"line":50,"column":71}},"23":{"start":{"line":52,"column":2},"end":{"line":52,"column":14}},"24":{"start":{"line":55,"column":0},"end":{"line":63,"column":2}},"25":{"start":{"line":56,"column":2},"end":{"line":56,"column":24}},"26":{"start":{"line":58,"column":2},"end":{"line":58,"column":54}},"27":{"start":{"line":60,"column":2},"end":{"line":60,"column":35}},"28":{"start":{"line":62,"column":2},"end":{"line":62,"column":14}},"29":{"start":{"line":65,"column":0},"end":{"line":72,"column":2}},"30":{"start":{"line":66,"column":2},"end":{"line":66,"column":35}},"31":{"start":{"line":67,"column":2},"end":{"line":67,"column":22}},"32":{"start":{"line":69,"column":2},"end":{"line":69,"column":18}},"33":{"start":{"line":71,"column":2},"end":{"line":71,"column":14}},"34":{"start":{"line":74,"column":0},"end":{"line":82,"column":2}},"35":{"start":{"line":75,"column":2},"end":{"line":75,"column":29}},"36":{"start":{"line":77,"column":2},"end":{"line":79,"column":3}},"37":{"start":{"line":78,"column":4},"end":{"line":78,"column":33}},"38":{"start":{"line":81,"column":2},"end":{"line":81,"column":44}},"39":{"start":{"line":84,"column":0},"end":{"line":84,"column":58}},"40":{"start":{"line":91,"column":0},"end":{"line":91,"column":42}}},"branchMap":{"1":{"line":77,"type":"if","locations":[{"start":{"line":77,"column":2},"end":{"line":77,"column":2}},{"start":{"line":77,"column":2},"end":{"line":77,"column":2}}]}}};
}
var __cov_f3rgHfHSkMSkPriPm7Ni8Q = global.__coverage__['/Users/matteo/Repositories/ascoltatori/lib/event_emitter2_ascoltatore.js'];
__cov_f3rgHfHSkMSkPriPm7Ni8Q.s['1']++;
'use strict';
__cov_f3rgHfHSkMSkPriPm7Ni8Q.s['2']++;
var AbstractAscoltatore = require('./abstract_ascoltatore');
__cov_f3rgHfHSkMSkPriPm7Ni8Q.s['3']++;
var util = require('./util');
__cov_f3rgHfHSkMSkPriPm7Ni8Q.s['4']++;
var defer = util.defer;
__cov_f3rgHfHSkMSkPriPm7Ni8Q.s['5']++;
var debug = require('debug')('ascoltatori:ee2');
__cov_f3rgHfHSkMSkPriPm7Ni8Q.s['6']++;
var EventEmitter2 = require('eventemitter2').EventEmitter2;
__cov_f3rgHfHSkMSkPriPm7Ni8Q.s['7']++;
var ascoltatori = require('./ascoltatori');
function EventEmitter2Ascoltatore(settings) {
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.f['1']++;
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['9']++;
    AbstractAscoltatore.call(this);
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['10']++;
    this._event = new EventEmitter2({
        delimiter: '/',
        wildcard: true
    });
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['11']++;
    this._event.setMaxListeners(0);
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['12']++;
    this.emit('ready');
}
__cov_f3rgHfHSkMSkPriPm7Ni8Q.s['13']++;
EventEmitter2Ascoltatore.prototype = Object.create(AbstractAscoltatore.prototype);
__cov_f3rgHfHSkMSkPriPm7Ni8Q.s['14']++;
EventEmitter2Ascoltatore.prototype.subscribe = function subscribe(topic, callback, done) {
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.f['2']++;
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['15']++;
    this._raiseIfClosed();
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['16']++;
    debug('registered new subscriber for topic ' + topic);
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['17']++;
    this._event.on(topic.replace(/\*/g, '**').replace(/\+/g, '*').replace(/^\//g, ''), callback);
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['18']++;
    defer(done);
};
__cov_f3rgHfHSkMSkPriPm7Ni8Q.s['19']++;
EventEmitter2Ascoltatore.prototype.publish = function (topic, message, options, done) {
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.f['3']++;
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['20']++;
    this._raiseIfClosed();
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['21']++;
    debug('new message published to ' + topic);
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['22']++;
    this._event.emit(topic.replace(/^\//g, ''), topic, message, options);
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['23']++;
    defer(done);
};
__cov_f3rgHfHSkMSkPriPm7Ni8Q.s['24']++;
EventEmitter2Ascoltatore.prototype.unsubscribe = function unsubscribe(topic, callback, done) {
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.f['4']++;
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['25']++;
    this._raiseIfClosed();
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['26']++;
    debug('deregistered subscriber for topic ' + topic);
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['27']++;
    this._event.off(topic, callback);
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['28']++;
    defer(done);
};
__cov_f3rgHfHSkMSkPriPm7Ni8Q.s['29']++;
EventEmitter2Ascoltatore.prototype.close = function close(done) {
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.f['5']++;
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['30']++;
    this._event.removeAllListeners();
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['31']++;
    this.emit('closed');
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['32']++;
    debug('closed');
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['33']++;
    defer(done);
};
__cov_f3rgHfHSkMSkPriPm7Ni8Q.s['34']++;
EventEmitter2Ascoltatore.prototype.registerDomain = function (domain) {
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.f['6']++;
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['35']++;
    debug('registered domain');
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['36']++;
    if (!this._publish) {
        __cov_f3rgHfHSkMSkPriPm7Ni8Q.b['1'][0]++;
        __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['37']++;
        this._publish = this.publish;
    } else {
        __cov_f3rgHfHSkMSkPriPm7Ni8Q.b['1'][1]++;
    }
    __cov_f3rgHfHSkMSkPriPm7Ni8Q.s['38']++;
    this.publish = domain.bind(this._publish);
};
__cov_f3rgHfHSkMSkPriPm7Ni8Q.s['39']++;
util.aliasAscoltatore(EventEmitter2Ascoltatore.prototype);
__cov_f3rgHfHSkMSkPriPm7Ni8Q.s['40']++;
module.exports = EventEmitter2Ascoltatore;
