if (typeof global.__coverage__ === 'undefined') { global.__coverage__ = {}; }
if (!global.__coverage__['/Users/matteo/Repositories/ascoltatori/lib/json_ascoltatore.js']) {
   global.__coverage__['/Users/matteo/Repositories/ascoltatori/lib/json_ascoltatore.js'] = {"path":"/Users/matteo/Repositories/ascoltatori/lib/json_ascoltatore.js","s":{"1":0,"2":0,"3":0,"4":0,"5":1,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"JSONAscoltatore","line":14,"loc":{"start":{"line":14,"column":0},"end":{"line":14,"column":38}}},"2":{"name":"(anonymous_2)","line":25,"loc":{"start":{"line":25,"column":41},"end":{"line":25,"column":66}}},"3":{"name":"(anonymous_3)","line":28,"loc":{"start":{"line":28,"column":41},"end":{"line":28,"column":62}}},"4":{"name":"(anonymous_4)","line":36,"loc":{"start":{"line":36,"column":40},"end":{"line":36,"column":64}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":13}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":62}},"3":{"start":{"line":4,"column":0},"end":{"line":4,"column":29}},"4":{"start":{"line":5,"column":0},"end":{"line":5,"column":49}},"5":{"start":{"line":14,"column":0},"end":{"line":16,"column":1}},"6":{"start":{"line":15,"column":2},"end":{"line":15,"column":47}},"7":{"start":{"line":23,"column":0},"end":{"line":23,"column":74}},"8":{"start":{"line":25,"column":0},"end":{"line":34,"column":2}},"9":{"start":{"line":26,"column":2},"end":{"line":26,"column":18}},"10":{"start":{"line":27,"column":2},"end":{"line":32,"column":3}},"11":{"start":{"line":28,"column":4},"end":{"line":31,"column":6}},"12":{"start":{"line":29,"column":6},"end":{"line":29,"column":36}},"13":{"start":{"line":30,"column":6},"end":{"line":30,"column":39}},"14":{"start":{"line":33,"column":2},"end":{"line":33,"column":49}},"15":{"start":{"line":36,"column":0},"end":{"line":44,"column":2}},"16":{"start":{"line":38,"column":2},"end":{"line":40,"column":3}},"17":{"start":{"line":39,"column":4},"end":{"line":39,"column":20}},"18":{"start":{"line":42,"column":2},"end":{"line":42,"column":30}},"19":{"start":{"line":43,"column":2},"end":{"line":43,"column":38}},"20":{"start":{"line":51,"column":0},"end":{"line":51,"column":33}}},"branchMap":{"1":{"line":27,"type":"if","locations":[{"start":{"line":27,"column":2},"end":{"line":27,"column":2}},{"start":{"line":27,"column":2},"end":{"line":27,"column":2}}]},"2":{"line":38,"type":"if","locations":[{"start":{"line":38,"column":2},"end":{"line":38,"column":2}},{"start":{"line":38,"column":2},"end":{"line":38,"column":2}}]},"3":{"line":38,"type":"binary-expr","locations":[{"start":{"line":38,"column":6},"end":{"line":38,"column":27}},{"start":{"line":38,"column":31},"end":{"line":38,"column":47}}]}}};
}
var __cov_C0cK4fNx0ND5A86lT861TQ = global.__coverage__['/Users/matteo/Repositories/ascoltatori/lib/json_ascoltatore.js'];
__cov_C0cK4fNx0ND5A86lT861TQ.s['1']++;
'use strict';
__cov_C0cK4fNx0ND5A86lT861TQ.s['2']++;
var DecoratorAscoltatore = require('./decorator_ascoltatore');
__cov_C0cK4fNx0ND5A86lT861TQ.s['3']++;
var util = require('./util');
__cov_C0cK4fNx0ND5A86lT861TQ.s['4']++;
var debug = require('debug')('ascoltatori:json');
function JSONAscoltatore(ascoltatore) {
    __cov_C0cK4fNx0ND5A86lT861TQ.f['1']++;
    __cov_C0cK4fNx0ND5A86lT861TQ.s['6']++;
    DecoratorAscoltatore.call(this, ascoltatore);
}
__cov_C0cK4fNx0ND5A86lT861TQ.s['7']++;
JSONAscoltatore.prototype = Object.create(DecoratorAscoltatore.prototype);
__cov_C0cK4fNx0ND5A86lT861TQ.s['8']++;
JSONAscoltatore.prototype.wrapCallback = function (callback, next) {
    __cov_C0cK4fNx0ND5A86lT861TQ.f['2']++;
    __cov_C0cK4fNx0ND5A86lT861TQ.s['9']++;
    var that = this;
    __cov_C0cK4fNx0ND5A86lT861TQ.s['10']++;
    if (!callback._json_ascoltatore_wrapper) {
        __cov_C0cK4fNx0ND5A86lT861TQ.b['1'][0]++;
        __cov_C0cK4fNx0ND5A86lT861TQ.s['11']++;
        callback._json_ascoltatore_wrapper = function (t, payload) {
            __cov_C0cK4fNx0ND5A86lT861TQ.f['3']++;
            __cov_C0cK4fNx0ND5A86lT861TQ.s['12']++;
            debug('converting from JSON');
            __cov_C0cK4fNx0ND5A86lT861TQ.s['13']++;
            callback(t, JSON.parse(payload));
        };
    } else {
        __cov_C0cK4fNx0ND5A86lT861TQ.b['1'][1]++;
    }
    __cov_C0cK4fNx0ND5A86lT861TQ.s['14']++;
    next(null, callback._json_ascoltatore_wrapper);
};
__cov_C0cK4fNx0ND5A86lT861TQ.s['15']++;
JSONAscoltatore.prototype.wrapPayload = function (payload, next) {
    __cov_C0cK4fNx0ND5A86lT861TQ.f['4']++;
    __cov_C0cK4fNx0ND5A86lT861TQ.s['16']++;
    if ((__cov_C0cK4fNx0ND5A86lT861TQ.b['3'][0]++, payload === undefined) || (__cov_C0cK4fNx0ND5A86lT861TQ.b['3'][1]++, payload === null)) {
        __cov_C0cK4fNx0ND5A86lT861TQ.b['2'][0]++;
        __cov_C0cK4fNx0ND5A86lT861TQ.s['17']++;
        payload = false;
    } else {
        __cov_C0cK4fNx0ND5A86lT861TQ.b['2'][1]++;
    }
    __cov_C0cK4fNx0ND5A86lT861TQ.s['18']++;
    debug('converting to JSON');
    __cov_C0cK4fNx0ND5A86lT861TQ.s['19']++;
    next(null, JSON.stringify(payload));
};
__cov_C0cK4fNx0ND5A86lT861TQ.s['20']++;
module.exports = JSONAscoltatore;
