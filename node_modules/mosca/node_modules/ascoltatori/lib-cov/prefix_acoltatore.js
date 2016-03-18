if (typeof global.__coverage__ === 'undefined') { global.__coverage__ = {}; }
if (!global.__coverage__['/Users/matteo/Repositories/ascoltatori/lib/prefix_acoltatore.js']) {
   global.__coverage__['/Users/matteo/Repositories/ascoltatori/lib/prefix_acoltatore.js'] = {"path":"/Users/matteo/Repositories/ascoltatori/lib/prefix_acoltatore.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":1,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"PrefixAscoltatore","line":17,"loc":{"start":{"line":17,"column":0},"end":{"line":17,"column":48}}},"2":{"name":"(anonymous_2)","line":30,"loc":{"start":{"line":30,"column":43},"end":{"line":30,"column":68}}},"3":{"name":"(anonymous_3)","line":33,"loc":{"start":{"line":33,"column":43},"end":{"line":33,"column":64}}},"4":{"name":"(anonymous_4)","line":40,"loc":{"start":{"line":40,"column":45},"end":{"line":40,"column":61}}},"5":{"name":"(anonymous_5)","line":46,"loc":{"start":{"line":46,"column":40},"end":{"line":46,"column":62}}},"6":{"name":"(anonymous_6)","line":50,"loc":{"start":{"line":50,"column":45},"end":{"line":50,"column":61}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":13}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":62}},"3":{"start":{"line":4,"column":0},"end":{"line":4,"column":52}},"4":{"start":{"line":5,"column":0},"end":{"line":5,"column":29}},"5":{"start":{"line":6,"column":0},"end":{"line":6,"column":51}},"6":{"start":{"line":7,"column":0},"end":{"line":7,"column":27}},"7":{"start":{"line":17,"column":0},"end":{"line":21,"column":1}},"8":{"start":{"line":18,"column":2},"end":{"line":18,"column":72}},"9":{"start":{"line":20,"column":2},"end":{"line":20,"column":24}},"10":{"start":{"line":28,"column":0},"end":{"line":28,"column":76}},"11":{"start":{"line":30,"column":0},"end":{"line":38,"column":2}},"12":{"start":{"line":31,"column":2},"end":{"line":31,"column":18}},"13":{"start":{"line":32,"column":2},"end":{"line":36,"column":3}},"14":{"start":{"line":33,"column":4},"end":{"line":35,"column":6}},"15":{"start":{"line":34,"column":6},"end":{"line":34,"column":48}},"16":{"start":{"line":37,"column":2},"end":{"line":37,"column":51}},"17":{"start":{"line":40,"column":0},"end":{"line":44,"column":2}},"18":{"start":{"line":41,"column":2},"end":{"line":41,"column":48}},"19":{"start":{"line":42,"column":2},"end":{"line":42,"column":64}},"20":{"start":{"line":43,"column":2},"end":{"line":43,"column":18}},"21":{"start":{"line":46,"column":0},"end":{"line":48,"column":2}},"22":{"start":{"line":47,"column":2},"end":{"line":47,"column":41}},"23":{"start":{"line":50,"column":0},"end":{"line":54,"column":2}},"24":{"start":{"line":51,"column":2},"end":{"line":51,"column":73}},"25":{"start":{"line":52,"column":2},"end":{"line":52,"column":65}},"26":{"start":{"line":53,"column":2},"end":{"line":53,"column":18}},"27":{"start":{"line":61,"column":0},"end":{"line":61,"column":35}}},"branchMap":{"1":{"line":18,"type":"binary-expr","locations":[{"start":{"line":18,"column":34},"end":{"line":18,"column":45}},{"start":{"line":18,"column":49},"end":{"line":18,"column":70}}]},"2":{"line":32,"type":"if","locations":[{"start":{"line":32,"column":2},"end":{"line":32,"column":2}},{"start":{"line":32,"column":2},"end":{"line":32,"column":2}}]}}};
}
var __cov_zUH_5X3I6Dq35bBqsBzTzA = global.__coverage__['/Users/matteo/Repositories/ascoltatori/lib/prefix_acoltatore.js'];
__cov_zUH_5X3I6Dq35bBqsBzTzA.s['1']++;
'use strict';
__cov_zUH_5X3I6Dq35bBqsBzTzA.s['2']++;
var DecoratorAscoltatore = require('./decorator_ascoltatore');
__cov_zUH_5X3I6Dq35bBqsBzTzA.s['3']++;
var TrieAscoltatore = require('./trie_ascoltatore');
__cov_zUH_5X3I6Dq35bBqsBzTzA.s['4']++;
var util = require('./util');
__cov_zUH_5X3I6Dq35bBqsBzTzA.s['5']++;
var debug = require('debug')('ascoltatori:prefix');
__cov_zUH_5X3I6Dq35bBqsBzTzA.s['6']++;
var path = require('path');
function PrefixAscoltatore(prefix, ascoltatore) {
    __cov_zUH_5X3I6Dq35bBqsBzTzA.f['1']++;
    __cov_zUH_5X3I6Dq35bBqsBzTzA.s['8']++;
    DecoratorAscoltatore.call(this, (__cov_zUH_5X3I6Dq35bBqsBzTzA.b['1'][0]++, ascoltatore) || (__cov_zUH_5X3I6Dq35bBqsBzTzA.b['1'][1]++, new TrieAscoltatore()));
    __cov_zUH_5X3I6Dq35bBqsBzTzA.s['9']++;
    this._prefix = prefix;
}
__cov_zUH_5X3I6Dq35bBqsBzTzA.s['10']++;
PrefixAscoltatore.prototype = Object.create(DecoratorAscoltatore.prototype);
__cov_zUH_5X3I6Dq35bBqsBzTzA.s['11']++;
PrefixAscoltatore.prototype.wrapCallback = function (callback, next) {
    __cov_zUH_5X3I6Dq35bBqsBzTzA.f['2']++;
    __cov_zUH_5X3I6Dq35bBqsBzTzA.s['12']++;
    var that = this;
    __cov_zUH_5X3I6Dq35bBqsBzTzA.s['13']++;
    if (!callback._prefix_ascoltatore_wrapper) {
        __cov_zUH_5X3I6Dq35bBqsBzTzA.b['2'][0]++;
        __cov_zUH_5X3I6Dq35bBqsBzTzA.s['14']++;
        callback._prefix_ascoltatore_wrapper = function (t, payload) {
            __cov_zUH_5X3I6Dq35bBqsBzTzA.f['3']++;
            __cov_zUH_5X3I6Dq35bBqsBzTzA.s['15']++;
            callback(that._parentToLocal(t), payload);
        };
    } else {
        __cov_zUH_5X3I6Dq35bBqsBzTzA.b['2'][1]++;
    }
    __cov_zUH_5X3I6Dq35bBqsBzTzA.s['16']++;
    next(null, callback._prefix_ascoltatore_wrapper);
};
__cov_zUH_5X3I6Dq35bBqsBzTzA.s['17']++;
PrefixAscoltatore.prototype._localToParent = function (topic) {
    __cov_zUH_5X3I6Dq35bBqsBzTzA.f['4']++;
    __cov_zUH_5X3I6Dq35bBqsBzTzA.s['18']++;
    var newTopic = path.join(this._prefix, topic);
    __cov_zUH_5X3I6Dq35bBqsBzTzA.s['19']++;
    debug('rewriting local topic ' + topic + ' into ' + newTopic);
    __cov_zUH_5X3I6Dq35bBqsBzTzA.s['20']++;
    return newTopic;
};
__cov_zUH_5X3I6Dq35bBqsBzTzA.s['21']++;
PrefixAscoltatore.prototype.wrapTopic = function (topic, next) {
    __cov_zUH_5X3I6Dq35bBqsBzTzA.f['5']++;
    __cov_zUH_5X3I6Dq35bBqsBzTzA.s['22']++;
    next(null, this._localToParent(topic));
};
__cov_zUH_5X3I6Dq35bBqsBzTzA.s['23']++;
PrefixAscoltatore.prototype._parentToLocal = function (topic) {
    __cov_zUH_5X3I6Dq35bBqsBzTzA.f['6']++;
    __cov_zUH_5X3I6Dq35bBqsBzTzA.s['24']++;
    var newTopic = topic.replace(new RegExp('^' + this._prefix + '/'), '');
    __cov_zUH_5X3I6Dq35bBqsBzTzA.s['25']++;
    debug('rewriting remote topic ' + topic + ' into ' + newTopic);
    __cov_zUH_5X3I6Dq35bBqsBzTzA.s['26']++;
    return newTopic;
};
__cov_zUH_5X3I6Dq35bBqsBzTzA.s['27']++;
module.exports = PrefixAscoltatore;
