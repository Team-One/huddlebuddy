if (typeof global.__coverage__ === 'undefined') { global.__coverage__ = {}; }
if (!global.__coverage__['/Users/matteo/Repositories/ascoltatori/lib/util.js']) {
   global.__coverage__['/Users/matteo/Repositories/ascoltatori/lib/util.js'] = {"path":"/Users/matteo/Repositories/ascoltatori/lib/util.js","s":{"1":0,"2":0,"3":0,"4":0,"5":1,"6":0,"7":0,"8":0,"9":1,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":1,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":1,"25":0,"26":0,"27":0,"28":0,"29":1,"30":0,"31":0,"32":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"fnMap":{"1":{"name":"buildIdentifier","line":11,"loc":{"start":{"line":11,"column":0},"end":{"line":11,"column":27}}},"2":{"name":"alias","line":25,"loc":{"start":{"line":25,"column":0},"end":{"line":25,"column":30}}},"3":{"name":"aliasAscoltatore","line":51,"loc":{"start":{"line":51,"column":0},"end":{"line":51,"column":31}}},"4":{"name":"(anonymous_4)","line":53,"loc":{"start":{"line":53,"column":31},"end":{"line":53,"column":45}}},"5":{"name":"(anonymous_5)","line":55,"loc":{"start":{"line":55,"column":27},"end":{"line":55,"column":39}}},"6":{"name":"wrap","line":71,"loc":{"start":{"line":71,"column":0},"end":{"line":71,"column":20}}},"7":{"name":"(anonymous_7)","line":72,"loc":{"start":{"line":72,"column":9},"end":{"line":72,"column":20}}},"8":{"name":"defer","line":87,"loc":{"start":{"line":87,"column":0},"end":{"line":87,"column":21}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":13}},"2":{"start":{"line":3,"column":0},"end":{"line":3,"column":27}},"3":{"start":{"line":4,"column":0},"end":{"line":4,"column":32}},"4":{"start":{"line":5,"column":0},"end":{"line":5,"column":29}},"5":{"start":{"line":11,"column":0},"end":{"line":14,"column":1}},"6":{"start":{"line":12,"column":2},"end":{"line":12,"column":48}},"7":{"start":{"line":13,"column":2},"end":{"line":13,"column":16}},"8":{"start":{"line":15,"column":0},"end":{"line":15,"column":49}},"9":{"start":{"line":25,"column":0},"end":{"line":31,"column":1}},"10":{"start":{"line":26,"column":2},"end":{"line":28,"column":3}},"11":{"start":{"line":27,"column":4},"end":{"line":27,"column":54}},"12":{"start":{"line":29,"column":2},"end":{"line":29,"column":22}},"13":{"start":{"line":30,"column":2},"end":{"line":30,"column":13}},"14":{"start":{"line":32,"column":0},"end":{"line":32,"column":29}},"15":{"start":{"line":39,"column":0},"end":{"line":43,"column":2}},"16":{"start":{"line":51,"column":0},"end":{"line":61,"column":1}},"17":{"start":{"line":52,"column":2},"end":{"line":52,"column":17}},"18":{"start":{"line":53,"column":2},"end":{"line":59,"column":5}},"19":{"start":{"line":54,"column":4},"end":{"line":58,"column":5}},"20":{"start":{"line":55,"column":6},"end":{"line":57,"column":9}},"21":{"start":{"line":56,"column":8},"end":{"line":56,"column":42}},"22":{"start":{"line":60,"column":2},"end":{"line":60,"column":13}},"23":{"start":{"line":62,"column":0},"end":{"line":62,"column":51}},"24":{"start":{"line":71,"column":0},"end":{"line":77,"column":1}},"25":{"start":{"line":72,"column":2},"end":{"line":76,"column":4}},"26":{"start":{"line":73,"column":4},"end":{"line":75,"column":5}},"27":{"start":{"line":74,"column":6},"end":{"line":74,"column":13}},"28":{"start":{"line":78,"column":0},"end":{"line":78,"column":27}},"29":{"start":{"line":87,"column":0},"end":{"line":91,"column":1}},"30":{"start":{"line":88,"column":2},"end":{"line":90,"column":3}},"31":{"start":{"line":89,"column":4},"end":{"line":89,"column":29}},"32":{"start":{"line":92,"column":0},"end":{"line":92,"column":29}}},"branchMap":{"1":{"line":26,"type":"if","locations":[{"start":{"line":26,"column":2},"end":{"line":26,"column":2}},{"start":{"line":26,"column":2},"end":{"line":26,"column":2}}]},"2":{"line":54,"type":"if","locations":[{"start":{"line":54,"column":4},"end":{"line":54,"column":4}},{"start":{"line":54,"column":4},"end":{"line":54,"column":4}}]},"3":{"line":73,"type":"if","locations":[{"start":{"line":73,"column":4},"end":{"line":73,"column":4}},{"start":{"line":73,"column":4},"end":{"line":73,"column":4}}]},"4":{"line":88,"type":"if","locations":[{"start":{"line":88,"column":2},"end":{"line":88,"column":2}},{"start":{"line":88,"column":2},"end":{"line":88,"column":2}}]}}};
}
var __cov_GUung3xqPfljyf$W0j9_qg = global.__coverage__['/Users/matteo/Repositories/ascoltatori/lib/util.js'];
__cov_GUung3xqPfljyf$W0j9_qg.s['1']++;
'use strict';
__cov_GUung3xqPfljyf$W0j9_qg.s['2']++;
var util = require('util');
__cov_GUung3xqPfljyf$W0j9_qg.s['3']++;
var uuid = require('node-uuid');
__cov_GUung3xqPfljyf$W0j9_qg.s['4']++;
var async = require('async');
function buildIdentifier() {
    __cov_GUung3xqPfljyf$W0j9_qg.f['1']++;
    __cov_GUung3xqPfljyf$W0j9_qg.s['6']++;
    var result = util.format('asc_%s', uuid.v1());
    __cov_GUung3xqPfljyf$W0j9_qg.s['7']++;
    return result;
}
__cov_GUung3xqPfljyf$W0j9_qg.s['8']++;
module.exports.buildIdentifier = buildIdentifier;
function alias(obj, from, to) {
    __cov_GUung3xqPfljyf$W0j9_qg.f['2']++;
    __cov_GUung3xqPfljyf$W0j9_qg.s['10']++;
    if (typeof obj[from] !== 'function') {
        __cov_GUung3xqPfljyf$W0j9_qg.b['1'][0]++;
        __cov_GUung3xqPfljyf$W0j9_qg.s['11']++;
        throw util.format('\'%s\' is not a function', from);
    } else {
        __cov_GUung3xqPfljyf$W0j9_qg.b['1'][1]++;
    }
    __cov_GUung3xqPfljyf$W0j9_qg.s['12']++;
    obj[to] = obj[from];
    __cov_GUung3xqPfljyf$W0j9_qg.s['13']++;
    return obj;
}
__cov_GUung3xqPfljyf$W0j9_qg.s['14']++;
module.exports.alias = alias;
__cov_GUung3xqPfljyf$W0j9_qg.s['15']++;
var aliases = {
        publish: ['pub'],
        subscribe: ['sub'],
        unsubscribe: ['unsub']
    };
function aliasAscoltatore(obj) {
    __cov_GUung3xqPfljyf$W0j9_qg.f['3']++;
    __cov_GUung3xqPfljyf$W0j9_qg.s['17']++;
    var key = null;
    __cov_GUung3xqPfljyf$W0j9_qg.s['18']++;
    Object.keys(aliases).forEach(function (key) {
        __cov_GUung3xqPfljyf$W0j9_qg.f['4']++;
        __cov_GUung3xqPfljyf$W0j9_qg.s['19']++;
        if (aliases.hasOwnProperty(key)) {
            __cov_GUung3xqPfljyf$W0j9_qg.b['2'][0]++;
            __cov_GUung3xqPfljyf$W0j9_qg.s['20']++;
            aliases[key].forEach(function (a) {
                __cov_GUung3xqPfljyf$W0j9_qg.f['5']++;
                __cov_GUung3xqPfljyf$W0j9_qg.s['21']++;
                module.exports.alias(obj, key, a);
            });
        } else {
            __cov_GUung3xqPfljyf$W0j9_qg.b['2'][1]++;
        }
    });
    __cov_GUung3xqPfljyf$W0j9_qg.s['22']++;
    return obj;
}
__cov_GUung3xqPfljyf$W0j9_qg.s['23']++;
module.exports.aliasAscoltatore = aliasAscoltatore;
function wrap(done) {
    __cov_GUung3xqPfljyf$W0j9_qg.f['6']++;
    __cov_GUung3xqPfljyf$W0j9_qg.s['25']++;
    return function () {
        __cov_GUung3xqPfljyf$W0j9_qg.f['7']++;
        __cov_GUung3xqPfljyf$W0j9_qg.s['26']++;
        if (typeof done === 'function') {
            __cov_GUung3xqPfljyf$W0j9_qg.b['3'][0]++;
            __cov_GUung3xqPfljyf$W0j9_qg.s['27']++;
            done();
        } else {
            __cov_GUung3xqPfljyf$W0j9_qg.b['3'][1]++;
        }
    };
}
__cov_GUung3xqPfljyf$W0j9_qg.s['28']++;
module.exports.wrap = wrap;
function defer(done) {
    __cov_GUung3xqPfljyf$W0j9_qg.f['8']++;
    __cov_GUung3xqPfljyf$W0j9_qg.s['30']++;
    if (typeof done === 'function') {
        __cov_GUung3xqPfljyf$W0j9_qg.b['4'][0]++;
        __cov_GUung3xqPfljyf$W0j9_qg.s['31']++;
        async.setImmediate(done);
    } else {
        __cov_GUung3xqPfljyf$W0j9_qg.b['4'][1]++;
    }
}
__cov_GUung3xqPfljyf$W0j9_qg.s['32']++;
module.exports.defer = defer;
