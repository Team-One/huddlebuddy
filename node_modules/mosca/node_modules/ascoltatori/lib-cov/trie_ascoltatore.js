if (typeof global.__coverage__ === 'undefined') { global.__coverage__ = {}; }
if (!global.__coverage__['/Users/matteo/Repositories/ascoltatori/lib/trie_ascoltatore.js']) {
   global.__coverage__['/Users/matteo/Repositories/ascoltatori/lib/trie_ascoltatore.js'] = {"path":"/Users/matteo/Repositories/ascoltatori/lib/trie_ascoltatore.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":1,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"TrieAscoltatore","line":16,"loc":{"start":{"line":16,"column":0},"end":{"line":16,"column":35}}},"2":{"name":"subscribe","line":37,"loc":{"start":{"line":37,"column":38},"end":{"line":37,"column":80}}},"3":{"name":"(anonymous_3)","line":45,"loc":{"start":{"line":45,"column":36},"end":{"line":45,"column":77}}},"4":{"name":"unsubscribe","line":58,"loc":{"start":{"line":58,"column":40},"end":{"line":58,"column":84}}},"5":{"name":"close","line":68,"loc":{"start":{"line":68,"column":34},"end":{"line":68,"column":55}}},"6":{"name":"(anonymous_6)","line":77,"loc":{"start":{"line":77,"column":43},"end":{"line":77,"column":60}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":13}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":60}},"3":{"start":{"line":4,"column":0},"end":{"line":4,"column":29}},"4":{"start":{"line":5,"column":0},"end":{"line":5,"column":23}},"5":{"start":{"line":6,"column":0},"end":{"line":6,"column":49}},"6":{"start":{"line":7,"column":0},"end":{"line":7,"column":41}},"7":{"start":{"line":8,"column":0},"end":{"line":8,"column":43}},"8":{"start":{"line":16,"column":0},"end":{"line":26,"column":1}},"9":{"start":{"line":17,"column":2},"end":{"line":17,"column":33}},"10":{"start":{"line":19,"column":2},"end":{"line":23,"column":5}},"11":{"start":{"line":25,"column":2},"end":{"line":25,"column":21}},"12":{"start":{"line":35,"column":0},"end":{"line":35,"column":73}},"13":{"start":{"line":37,"column":0},"end":{"line":43,"column":2}},"14":{"start":{"line":38,"column":2},"end":{"line":38,"column":24}},"15":{"start":{"line":39,"column":2},"end":{"line":39,"column":56}},"16":{"start":{"line":41,"column":2},"end":{"line":41,"column":37}},"17":{"start":{"line":42,"column":2},"end":{"line":42,"column":14}},"18":{"start":{"line":45,"column":0},"end":{"line":56,"column":2}},"19":{"start":{"line":46,"column":2},"end":{"line":46,"column":24}},"20":{"start":{"line":47,"column":2},"end":{"line":47,"column":45}},"21":{"start":{"line":49,"column":2},"end":{"line":49,"column":39}},"22":{"start":{"line":51,"column":2},"end":{"line":53,"column":3}},"23":{"start":{"line":52,"column":4},"end":{"line":52,"column":36}},"24":{"start":{"line":55,"column":2},"end":{"line":55,"column":14}},"25":{"start":{"line":58,"column":0},"end":{"line":66,"column":2}},"26":{"start":{"line":59,"column":2},"end":{"line":59,"column":24}},"27":{"start":{"line":61,"column":2},"end":{"line":61,"column":54}},"28":{"start":{"line":63,"column":2},"end":{"line":63,"column":40}},"29":{"start":{"line":65,"column":2},"end":{"line":65,"column":14}},"30":{"start":{"line":68,"column":0},"end":{"line":75,"column":2}},"31":{"start":{"line":69,"column":2},"end":{"line":69,"column":24}},"32":{"start":{"line":70,"column":2},"end":{"line":70,"column":22}},"33":{"start":{"line":72,"column":2},"end":{"line":72,"column":18}},"34":{"start":{"line":74,"column":2},"end":{"line":74,"column":14}},"35":{"start":{"line":77,"column":0},"end":{"line":85,"column":2}},"36":{"start":{"line":78,"column":2},"end":{"line":78,"column":29}},"37":{"start":{"line":80,"column":2},"end":{"line":82,"column":3}},"38":{"start":{"line":81,"column":4},"end":{"line":81,"column":33}},"39":{"start":{"line":84,"column":2},"end":{"line":84,"column":44}},"40":{"start":{"line":87,"column":0},"end":{"line":87,"column":49}},"41":{"start":{"line":94,"column":0},"end":{"line":94,"column":33}}},"branchMap":{"1":{"line":80,"type":"if","locations":[{"start":{"line":80,"column":2},"end":{"line":80,"column":2}},{"start":{"line":80,"column":2},"end":{"line":80,"column":2}}]}}};
}
var __cov_$QJgSgJiDtpziLWus8Mbfw = global.__coverage__['/Users/matteo/Repositories/ascoltatori/lib/trie_ascoltatore.js'];
__cov_$QJgSgJiDtpziLWus8Mbfw.s['1']++;
'use strict';
__cov_$QJgSgJiDtpziLWus8Mbfw.s['2']++;
var AbstractAscoltatore = require('./abstract_ascoltatore');
__cov_$QJgSgJiDtpziLWus8Mbfw.s['3']++;
var util = require('./util');
__cov_$QJgSgJiDtpziLWus8Mbfw.s['4']++;
var defer = util.defer;
__cov_$QJgSgJiDtpziLWus8Mbfw.s['5']++;
var debug = require('debug')('ascoltatori:trie');
__cov_$QJgSgJiDtpziLWus8Mbfw.s['6']++;
var Qlobber = require('qlobber').Qlobber;
__cov_$QJgSgJiDtpziLWus8Mbfw.s['7']++;
var ascoltatori = require('./ascoltatori');
function TrieAscoltatore(settings) {
    __cov_$QJgSgJiDtpziLWus8Mbfw.f['1']++;
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['9']++;
    AbstractAscoltatore.call(this);
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['10']++;
    this._matcher = new Qlobber({
        separator: '/',
        wildcard_one: '+',
        wildcard_some: '*'
    });
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['11']++;
    this.emit('ready');
}
__cov_$QJgSgJiDtpziLWus8Mbfw.s['12']++;
TrieAscoltatore.prototype = Object.create(AbstractAscoltatore.prototype);
__cov_$QJgSgJiDtpziLWus8Mbfw.s['13']++;
TrieAscoltatore.prototype.subscribe = function subscribe(topic, callback, done) {
    __cov_$QJgSgJiDtpziLWus8Mbfw.f['2']++;
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['14']++;
    this._raiseIfClosed();
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['15']++;
    debug('registered new subscriber for topic ' + topic);
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['16']++;
    this._matcher.add(topic, callback);
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['17']++;
    defer(done);
};
__cov_$QJgSgJiDtpziLWus8Mbfw.s['18']++;
TrieAscoltatore.prototype.publish = function (topic, message, options, done) {
    __cov_$QJgSgJiDtpziLWus8Mbfw.f['3']++;
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['19']++;
    this._raiseIfClosed();
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['20']++;
    debug('new message published to ' + topic);
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['21']++;
    var cbs = this._matcher.match(topic);
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['22']++;
    for (var i = 0; i < cbs.length; i++) {
        __cov_$QJgSgJiDtpziLWus8Mbfw.s['23']++;
        cbs[i](topic, message, options);
    }
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['24']++;
    defer(done);
};
__cov_$QJgSgJiDtpziLWus8Mbfw.s['25']++;
TrieAscoltatore.prototype.unsubscribe = function unsubscribe(topic, callback, done) {
    __cov_$QJgSgJiDtpziLWus8Mbfw.f['4']++;
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['26']++;
    this._raiseIfClosed();
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['27']++;
    debug('deregistered subscriber for topic ' + topic);
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['28']++;
    this._matcher.remove(topic, callback);
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['29']++;
    defer(done);
};
__cov_$QJgSgJiDtpziLWus8Mbfw.s['30']++;
TrieAscoltatore.prototype.close = function close(done) {
    __cov_$QJgSgJiDtpziLWus8Mbfw.f['5']++;
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['31']++;
    this._matcher.clear();
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['32']++;
    this.emit('closed');
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['33']++;
    debug('closed');
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['34']++;
    defer(done);
};
__cov_$QJgSgJiDtpziLWus8Mbfw.s['35']++;
TrieAscoltatore.prototype.registerDomain = function (domain) {
    __cov_$QJgSgJiDtpziLWus8Mbfw.f['6']++;
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['36']++;
    debug('registered domain');
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['37']++;
    if (!this._publish) {
        __cov_$QJgSgJiDtpziLWus8Mbfw.b['1'][0]++;
        __cov_$QJgSgJiDtpziLWus8Mbfw.s['38']++;
        this._publish = this.publish;
    } else {
        __cov_$QJgSgJiDtpziLWus8Mbfw.b['1'][1]++;
    }
    __cov_$QJgSgJiDtpziLWus8Mbfw.s['39']++;
    this.publish = domain.bind(this._publish);
};
__cov_$QJgSgJiDtpziLWus8Mbfw.s['40']++;
util.aliasAscoltatore(TrieAscoltatore.prototype);
__cov_$QJgSgJiDtpziLWus8Mbfw.s['41']++;
module.exports = TrieAscoltatore;
