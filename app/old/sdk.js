/*1487167062,,JIT Construction: v2835688,pt_BR*/

/**
 * Copyright Facebook Inc.
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
try {
    window.FB || (function(window, fb_fif_window) {
        var apply = Function.prototype.apply;

        function bindContext(fn, thisArg) {
            return function _sdkBound() {
                return apply.call(fn, thisArg, arguments);
            };
        }
        var global = {
            __type: 'JS_SDK_SANDBOX',
            window: window,
            document: window.document
        };
        var sandboxWhitelist = ['setTimeout', 'setInterval', 'clearTimeout', 'clearInterval'];
        for (var i = 0; i < sandboxWhitelist.length; i++) {
            global[sandboxWhitelist[i]] = bindContext(window[sandboxWhitelist[i]], window);
        }(function() {
            var self = window;
            var __DEV__ = 0;

            function emptyFunction() {};
            var __transform_includes = {};
            var __annotator, __bodyWrapper;
            var __w, __t;
            var undefined;
            with(this) {
                (function() {
                    var a = {},
                        b = function i(j, k) {
                            if (!j && !k) return null;
                            var l = {};
                            if (typeof j !== 'undefined') l.type = j;
                            if (typeof k !== 'undefined') l.signature = k;
                            return l;
                        },
                        c = function i(j, k) {
                            return b(j && /^[A-Z]/.test(j) ? j : undefined, k && (k.params && k.params.length || k.returns) ? 'function(' + (k.params ? k.params.map(function(l) {
                                return /\?/.test(l) ? '?' + l.replace('?', '') : l;
                            }).join(',') : '') + ')' + (k.returns ? ':' + k.returns : '') : undefined);
                        },
                        d = function i(j, k, l) {
                            return j;
                        },
                        e = function i(j, k, l) {
                            if ('sourcemeta' in __transform_includes) j.__SMmeta = k;
                            if ('typechecks' in __transform_includes) {
                                var m = c(k ? k.name : undefined, l);
                                if (m) __w(j, m);
                            }
                            return j;
                        },
                        f = function i(j, k, l) {
                            return l.apply(j, k);
                        },
                        g = function i(j, k, l, m) {
                            if (m && m.params) __t.apply(j, m.params);
                            var n = l.apply(j, k);
                            if (m && m.returns) __t([n, m.returns]);
                            return n;
                        },
                        h = function i(j, k, l, m, n) {
                            if (n) {
                                if (!n.callId) n.callId = n.module + ':' + (n.line || 0) + ':' + (n.column || 0);
                                var o = n.callId;
                                a[o] = (a[o] || 0) + 1;
                            }
                            return l.apply(j, k);
                        };
                    if (typeof __transform_includes === 'undefined') {
                        __annotator = d;
                        __bodyWrapper = f;
                    } else {
                        __annotator = e;
                        if ('codeusage' in __transform_includes) {
                            __annotator = d;
                            __bodyWrapper = h;
                            __bodyWrapper.getCodeUsage = function() {
                                return a;
                            };
                            __bodyWrapper.clearCodeUsage = function() {
                                a = {};
                            };
                        } else if ('typechecks' in __transform_includes) {
                            __bodyWrapper = g;
                        } else __bodyWrapper = f;
                    }
                })();
                __t = function(a) {
                    return a[0];
                };
                __w = function(a) {
                    return a;
                };
                var require, __d;
                (function(a) {
                    var b = {},
                        c = {},
                        d = ['global', 'require', 'requireDynamic', 'requireLazy', 'module', 'exports'];
                    require = function(e, f) {
                        if (c.hasOwnProperty(e)) return c[e];
                        if (!b.hasOwnProperty(e)) {
                            if (f) return null;
                            throw new Error('Module ' + e + ' has not been defined');
                        }
                        var g = b[e],
                            h = g.deps,
                            i = g.factory.length,
                            j, k = [];
                        for (var l = 0; l < i; l++) {
                            switch (h[l]) {
                                case 'module':
                                    j = g;
                                    break;
                                case 'exports':
                                    j = g.exports;
                                    break;
                                case 'global':
                                    j = a;
                                    break;
                                case 'require':
                                    j = require;
                                    break;
                                case 'requireDynamic':
                                    j = null;
                                    break;
                                case 'requireLazy':
                                    j = null;
                                    break;
                                default:
                                    j = require.call(null, h[l]);
                            }
                            k.push(j);
                        }
                        g.factory.apply(a, k);
                        c[e] = g.exports;
                        return g.exports;
                    };
                    __d = function(e, f, g, h) {
                        if (typeof g == 'function') {
                            b[e] = {
                                factory: g,
                                deps: d.concat(f),
                                exports: {}
                            };
                            if (h === 3) require.call(null, e);
                        } else c[e] = g;
                    };
                })(this);
                __d('ES5Array', [], (function a(b, c, d, e, f, g) {
                    var h = {};
                    h.isArray = function(i) {
                        return Object.prototype.toString.call(i) == '[object Array]';
                    };
                    f.exports = h;
                }), null);
                __d('ES5ArrayPrototype', [], (function a(b, c, d, e, f, g) {
                    var h = {};
                    h.map = function(i, j) {
                        if (typeof i != 'function') throw new TypeError();
                        var k, l = this.length,
                            m = new Array(l);
                        for (k = 0; k < l; ++k)
                            if (k in this) m[k] = i.call(j, this[k], k, this);
                        return m;
                    };
                    h.forEach = function(i, j) {
                        h.map.call(this, i, j);
                    };
                    h.filter = function(i, j) {
                        if (typeof i != 'function') throw new TypeError();
                        var k, l, m = this.length,
                            n = [];
                        for (k = 0; k < m; ++k)
                            if (k in this) {
                                l = this[k];
                                if (i.call(j, l, k, this)) n.push(l);
                            }
                        return n;
                    };
                    h.every = function(i, j) {
                        if (typeof i != 'function') throw new TypeError();
                        var k = new Object(this),
                            l = k.length;
                        for (var m = 0; m < l; m++)
                            if (m in k)
                                if (!i.call(j, k[m], m, k)) return false;
                        return true;
                    };
                    h.some = function(i, j) {
                        if (typeof i != 'function') throw new TypeError();
                        var k = new Object(this),
                            l = k.length;
                        for (var m = 0; m < l; m++)
                            if (m in k)
                                if (i.call(j, k[m], m, k)) return true;
                        return false;
                    };
                    h.indexOf = function(i, j) {
                        var k = this.length;
                        j |= 0;
                        if (j < 0) j += k;
                        for (; j < k; j++)
                            if (j in this && this[j] === i) return j;
                        return -1;
                    };
                    f.exports = h;
                }), null);
                __d("ES5Date", [], (function a(b, c, d, e, f, g) {
                    var h = {};
                    h.now = function() {
                        return new Date().getTime();
                    };
                    f.exports = h;
                }), null);
                __d('ES5FunctionPrototype', [], (function a(b, c, d, e, f, g) {
                    var h = {};
                    h.bind = function(i) {
                        if (typeof this != 'function') throw new TypeError('Bind must be called on a function');
                        var j = this,
                            k = Array.prototype.slice.call(arguments, 1);

                        function l() {
                            return j.apply(i, k.concat(Array.prototype.slice.call(arguments)));
                        }
                        l.displayName = 'bound:' + (j.displayName || j.name || '(?)');
                        l.toString = function m() {
                            return 'bound: ' + j;
                        };
                        return l;
                    };
                    f.exports = h;
                }), null);
                __d('ie8DontEnum', [], (function a(b, c, d, e, f, g) {
                    var h = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'prototypeIsEnumerable', 'constructor'],
                        i = {}.hasOwnProperty,
                        j = function k() {};
                    if ({
                            toString: true
                        }.propertyIsEnumerable('toString')) j = function k(l, m) {
                        for (var n = 0; n < h.length; n++) {
                            var o = h[n];
                            if (i.call(l, o)) m(o);
                        }
                    };
                    f.exports = j;
                }), null);
                __d('ES5Object', ['ie8DontEnum'], (function a(b, c, d, e, f, g, h) {
                    var i = {}.hasOwnProperty,
                        j = {};

                    function k() {}
                    j.create = function(l) {
                        var m = typeof l;
                        if (m != 'object' && m != 'function') throw new TypeError('Object prototype may only be a Object or null');
                        k.prototype = l;
                        return new k();
                    };
                    j.keys = function(l) {
                        var m = typeof l;
                        if (m != 'object' && m != 'function' || l === null) throw new TypeError('Object.keys called on non-object');
                        var n = [];
                        for (var o in l)
                            if (i.call(l, o)) n.push(o);
                        h(l, function(p) {
                            return n.push(p);
                        });
                        return n;
                    };
                    f.exports = j;
                }), null);
                __d('ES5StringPrototype', [], (function a(b, c, d, e, f, g) {
                    var h = {};
                    h.trim = function() {
                        if (this == null) throw new TypeError('String.prototype.trim called on null or undefined');
                        return String.prototype.replace.call(this, /^\s+|\s+$/g, '');
                    };
                    h.startsWith = function(i) {
                        var j = String(this);
                        if (this == null) throw new TypeError('String.prototype.startsWith called on null or undefined');
                        var k = arguments.length > 1 ? Number(arguments[1]) : 0;
                        if (isNaN(k)) k = 0;
                        var l = Math.min(Math.max(k, 0), j.length);
                        return j.indexOf(String(i), k) == l;
                    };
                    h.endsWith = function(i) {
                        var j = String(this);
                        if (this == null) throw new TypeError('String.prototype.endsWith called on null or undefined');
                        var k = j.length,
                            l = String(i),
                            m = arguments.length > 1 ? Number(arguments[1]) : k;
                        if (isNaN(m)) m = 0;
                        var n = Math.min(Math.max(m, 0), k),
                            o = n - l.length;
                        if (o < 0) return false;
                        return j.lastIndexOf(l, o) == o;
                    };
                    h.includes = function(i) {
                        if (this == null) throw new TypeError('String.prototype.contains called on null or undefined');
                        var j = String(this),
                            k = arguments.length > 1 ? Number(arguments[1]) : 0;
                        if (isNaN(k)) k = 0;
                        return j.indexOf(String(i), k) != -1;
                    };
                    h.contains = h.includes;
                    h.repeat = function(i) {
                        if (this == null) throw new TypeError('String.prototype.repeat called on null or undefined');
                        var j = String(this),
                            k = i ? Number(i) : 0;
                        if (isNaN(k)) k = 0;
                        if (k < 0 || k === Infinity) throw RangeError();
                        if (k === 1) return j;
                        if (k === 0) return '';
                        var l = '';
                        while (k) {
                            if (k & 1) l += j;
                            if (k >>= 1) j += j;
                        }
                        return l;
                    };
                    f.exports = h;
                }), null);
                __d('ES6Array', [], (function a(b, c, d, e, f, g) {
                    'use strict';
                    var h = {
                        from: function i(j) {
                            if (j == null) throw new TypeError('Object is null or undefined');
                            var k = arguments[1],
                                l = arguments[2],
                                m = this,
                                n = Object(j),
                                o = typeof Symbol === 'function' ? typeof Symbol === 'function' ? Symbol.iterator : '@@iterator' : '@@iterator',
                                p = typeof k === 'function',
                                q = typeof n[o] === 'function',
                                r = 0,
                                s = void 0,
                                t = void 0;
                            if (q) {
                                s = typeof m === 'function' ? new m() : [];
                                var u = n[o](),
                                    v = void 0;
                                while (!(v = u.next()).done) {
                                    t = v.value;
                                    if (p) t = k.call(l, t, r);
                                    s[r] = t;
                                    r += 1;
                                }
                                s.length = r;
                                return s;
                            }
                            var w = n.length;
                            if (isNaN(w) || w < 0) w = 0;
                            s = typeof m === 'function' ? new m(w) : new Array(w);
                            while (r < w) {
                                t = n[r];
                                if (p) t = k.call(l, t, r);
                                s[r] = t;
                                r += 1;
                            }
                            s.length = r;
                            return s;
                        }
                    };
                    f.exports = h;
                }), null);
                __d('ES6ArrayPrototype', [], (function a(b, c, d, e, f, g) {
                    var h = {
                        find: function i(j, k) {
                            if (this == null) throw new TypeError('Array.prototype.find called on null or undefined');
                            if (typeof j !== 'function') throw new TypeError('predicate must be a function');
                            var l = h.findIndex.call(this, j, k);
                            return l === -1 ? void 0 : this[l];
                        },
                        findIndex: function i(j, k) {
                            if (this == null) throw new TypeError('Array.prototype.findIndex called on null or undefined');
                            if (typeof j !== 'function') throw new TypeError('predicate must be a function');
                            var l = Object(this),
                                m = l.length >>> 0;
                            for (var n = 0; n < m; n++)
                                if (j.call(k, l[n], n, l)) return n;
                            return -1;
                        },
                        fill: function i(j) {
                            if (this == null) throw new TypeError('Array.prototype.fill called on null or undefined');
                            var k = Object(this),
                                l = k.length >>> 0,
                                m = arguments[1],
                                n = m >> 0,
                                o = n < 0 ? Math.max(l + n, 0) : Math.min(n, l),
                                p = arguments[2],
                                q = p === undefined ? l : p >> 0,
                                r = q < 0 ? Math.max(l + q, 0) : Math.min(q, l);
                            while (o < r) {
                                k[o] = j;
                                o++;
                            }
                            return k;
                        }
                    };
                    f.exports = h;
                }), null);
                __d('ES6DatePrototype', [], (function a(b, c, d, e, f, g) {
                    function h(j) {
                        return (j < 10 ? '0' : '') + j;
                    }
                    var i = {
                        toISOString: function j() {
                            if (!isFinite(this)) throw new Error('Invalid time value');
                            var k = this.getUTCFullYear();
                            k = (k < 0 ? '-' : k > 9999 ? '+' : '') + ('00000' + Math.abs(k)).slice(0 <= k && k <= 9999 ? -4 : -6);
                            return k + '-' + h(this.getUTCMonth() + 1) + '-' + h(this.getUTCDate()) + 'T' + h(this.getUTCHours()) + ':' + h(this.getUTCMinutes()) + ':' + h(this.getUTCSeconds()) + '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
                        }
                    };
                    f.exports = i;
                }), null);
                __d('ES6Number', [], (function a(b, c, d, e, f, g) {
                    var h = Math.pow(2, -52),
                        i = Math.pow(2, 53) - 1,
                        j = -1 * i,
                        k = {
                            isFinite: function(l) {
                                function m(n) {
                                    return l.apply(this, arguments);
                                }
                                m.toString = function() {
                                    return l.toString();
                                };
                                return m;
                            }(function(l) {
                                return typeof l == 'number' && isFinite(l);
                            }),
                            isNaN: function(l) {
                                function m(n) {
                                    return l.apply(this, arguments);
                                }
                                m.toString = function() {
                                    return l.toString();
                                };
                                return m;
                            }(function(l) {
                                return typeof l == 'number' && isNaN(l);
                            }),
                            isInteger: function l(m) {
                                return this.isFinite(m) && Math.floor(m) === m;
                            },
                            isSafeInteger: function l(m) {
                                return this.isFinite(m) && m >= this.MIN_SAFE_INTEGER && m <= this.MAX_SAFE_INTEGER && Math.floor(m) === m;
                            },
                            EPSILON: h,
                            MAX_SAFE_INTEGER: i,
                            MIN_SAFE_INTEGER: j
                        };
                    f.exports = k;
                }), null);
                __d('ES6Object', ['ie8DontEnum'], (function a(b, c, d, e, f, g, h) {
                    var i = {}.hasOwnProperty,
                        j = {
                            assign: function k(l) {
                                if (l == null) throw new TypeError('Object.assign target cannot be null or undefined');
                                l = Object(l);
                                for (var m = arguments.length, n = Array(m > 1 ? m - 1 : 0), o = 1; o < m; o++) n[o - 1] = arguments[o];
                                for (var p = 0; p < n.length; p++) {
                                    var q = n[p];
                                    if (q == null) continue;
                                    q = Object(q);
                                    for (var r in q)
                                        if (i.call(q, r)) l[r] = q[r];
                                    h(q, function(s) {
                                        return l[s] = q[s];
                                    });
                                }
                                return l;
                            },
                            is: function k(l, m) {
                                if (l === m) {
                                    return l !== 0 || 1 / l === 1 / m;
                                } else return l !== l && m !== m;
                            }
                        };
                    f.exports = j;
                }), null);
                __d('ES7Object', ['ie8DontEnum'], (function a(b, c, d, e, f, g, h) {
                    var i = {}.hasOwnProperty,
                        j = {};
                    j.entries = function(k) {
                        if (k == null) throw new TypeError('Object.entries called on non-object');
                        var l = [];
                        for (var m in k)
                            if (i.call(k, m)) l.push([m, k[m]]);
                        h(k, function(n) {
                            return l.push([n, k[n]]);
                        });
                        return l;
                    };
                    j.values = function(k) {
                        if (k == null) throw new TypeError('Object.values called on non-object');
                        var l = [];
                        for (var m in k)
                            if (i.call(k, m)) l.push(k[m]);
                        h(k, function(n) {
                            return l.push(k[n]);
                        });
                        return l;
                    };
                    f.exports = j;
                }), null);
                __d('ES7StringPrototype', [], (function a(b, c, d, e, f, g) {
                    var h = {};
                    h.trimLeft = function() {
                        return this.replace(/^\s+/, '');
                    };
                    h.trimRight = function() {
                        return this.replace(/\s+$/, '');
                    };
                    f.exports = h;
                }), null);
                /**
                 * @providesModule JSON3
                 * @preserve-header
                 *
                 *! JSON v3.2.3 | http://bestiejs.github.com/json3 | Copyright 2012, Kit Cambridge | http://kit.mit-license.org
                 */
                __d("JSON3", [], (function a(b, c, d, e, f, g) {
                    (function() {
                        var h = {}.toString,
                            i, j, k, l = f.exports = {},
                            m = '{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',
                            n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca = new Date(-3509827334573292),
                            da, ea, fa;
                        try {
                            ca = ca.getUTCFullYear() == -109252 && ca.getUTCMonth() === 0 && ca.getUTCDate() == 1 && ca.getUTCHours() == 10 && ca.getUTCMinutes() == 37 && ca.getUTCSeconds() == 6 && ca.getUTCMilliseconds() == 708;
                        } catch (ga) {}
                        if (!ca) {
                            da = Math.floor;
                            ea = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                            fa = function(ha, ia) {
                                return ea[ia] + 365 * (ha - 1970) + da((ha - 1969 + (ia = +(ia > 1))) / 4) - da((ha - 1901 + ia) / 100) + da((ha - 1601 + ia) / 400);
                            };
                        }
                        if (typeof JSON == "object" && JSON) {
                            l.stringify = JSON.stringify;
                            l.parse = JSON.parse;
                        }
                        if ((n = typeof l.stringify == "function" && !fa)) {
                            (ca = function() {
                                return 1;
                            }).toJSON = ca;
                            try {
                                n = l.stringify(0) === "0" && l.stringify(new Number()) === "0" && l.stringify(new String()) == '""' && l.stringify(h) === k && l.stringify(k) === k && l.stringify() === k && l.stringify(ca) === "1" && l.stringify([ca]) == "[1]" && l.stringify([k]) == "[null]" && l.stringify(null) == "null" && l.stringify([k, h, null]) == "[null,null,null]" && l.stringify({
                                    result: [ca, true, false, null, "\0\b\n\f\r\t"]
                                }) == m && l.stringify(null, ca) === "1" && l.stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" && l.stringify(new Date(-8.64e+15)) == '"-271821-04-20T00:00:00.000Z"' && l.stringify(new Date(8.64e+15)) == '"+275760-09-13T00:00:00.000Z"' && l.stringify(new Date(-62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && l.stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
                            } catch (ga) {
                                n = false;
                            }
                        }
                        if (typeof l.parse == "function") try {
                            if (l.parse("0") === 0 && !l.parse(false)) {
                                ca = l.parse(m);
                                if ((s = ca.A.length == 5 && ca.A[0] == 1)) {
                                    try {
                                        s = !l.parse('"\t"');
                                    } catch (ga) {}
                                    if (s) try {
                                        s = l.parse("01") != 1;
                                    } catch (ga) {}
                                }
                            }
                        } catch (ga) {
                            s = false;
                        }
                        ca = m = null;
                        if (!n || !s) {
                            if (!(i = {}.hasOwnProperty)) i = function(ha) {
                                var ia = {},
                                    ja;
                                if ((ia.__proto__ = null, ia.__proto__ = {
                                        toString: 1
                                    }, ia).toString != h) {
                                    i = function(ka) {
                                        var la = this.__proto__,
                                            ma = ka in (this.__proto__ = null, this);
                                        this.__proto__ = la;
                                        return ma;
                                    };
                                } else {
                                    ja = ia.constructor;
                                    i = function(ka) {
                                        var la = (this.constructor || ja).prototype;
                                        return ka in this && !(ka in la && this[ka] === la[ka]);
                                    };
                                }
                                ia = null;
                                return i.call(this, ha);
                            };
                            j = function(ha, ia) {
                                var ja = 0,
                                    ka, la, ma, na;
                                (ka = function() {
                                    this.valueOf = 0;
                                }).prototype.valueOf = 0;
                                la = new ka();
                                for (ma in la)
                                    if (i.call(la, ma)) ja++;
                                ka = la = null;
                                if (!ja) {
                                    la = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                                    na = function(oa, pa) {
                                        var qa = h.call(oa) == "[object Function]",
                                            ra, sa;
                                        for (ra in oa)
                                            if (!(qa && ra == "prototype") && i.call(oa, ra)) pa(ra);
                                        for (sa = la.length; ra = la[--sa]; i.call(oa, ra) && pa(ra));
                                    };
                                } else if (ja == 2) {
                                    na = function(oa, pa) {
                                        var qa = {},
                                            ra = h.call(oa) == "[object Function]",
                                            sa;
                                        for (sa in oa)
                                            if (!(ra && sa == "prototype") && !i.call(qa, sa) && (qa[sa] = 1) && i.call(oa, sa)) pa(sa);
                                    };
                                } else na = function(oa, pa) {
                                    var qa = h.call(oa) == "[object Function]",
                                        ra, sa;
                                    for (ra in oa)
                                        if (!(qa && ra == "prototype") && i.call(oa, ra) && !(sa = ra === "constructor")) pa(ra);
                                    if (sa || i.call(oa, (ra = "constructor"))) pa(ra);
                                };
                                return na(ha, ia);
                            };
                            if (!n) {
                                o = {
                                    "\\": "\\\\",
                                    '"': '\\"',
                                    "\b": "\\b",
                                    "\f": "\\f",
                                    "\n": "\\n",
                                    "\r": "\\r",
                                    "\t": "\\t"
                                };
                                p = function(ha, ia) {
                                    return ("000000" + (ia || 0)).slice(-ha);
                                };
                                q = function(ha) {
                                    var ia = '"',
                                        ja = 0,
                                        ka;
                                    for (; ka = ha.charAt(ja); ja++) ia += '\\"\b\f\n\r\t'.indexOf(ka) > -1 ? o[ka] : ka < " " ? "\\u00" + p(2, ka.charCodeAt(0).toString(16)) : ka;
                                    return ia + '"';
                                };
                                r = function(ha, ia, ja, ka, la, ma, na) {
                                    var oa = ia[ha],
                                        pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, ab, bb, cb, db;
                                    if (typeof oa == "object" && oa) {
                                        pa = h.call(oa);
                                        if (pa == "[object Date]" && !i.call(oa, "toJSON")) {
                                            if (oa > -1 / 0 && oa < 1 / 0) {
                                                if (fa) {
                                                    sa = da(oa / 86400000);
                                                    for (qa = da(sa / 365.2425) + 1970 - 1; fa(qa + 1, 0) <= sa; qa++);
                                                    for (ra = da((sa - fa(qa, 0)) / 30.42); fa(qa, ra + 1) <= sa; ra++);
                                                    sa = 1 + sa - fa(qa, ra);
                                                    ta = (oa % 86400000 + 86400000) % 86400000;
                                                    ua = da(ta / 3600000) % 24;
                                                    va = da(ta / 60000) % 60;
                                                    wa = da(ta / 1000) % 60;
                                                    xa = ta % 1000;
                                                } else {
                                                    qa = oa.getUTCFullYear();
                                                    ra = oa.getUTCMonth();
                                                    sa = oa.getUTCDate();
                                                    ua = oa.getUTCHours();
                                                    va = oa.getUTCMinutes();
                                                    wa = oa.getUTCSeconds();
                                                    xa = oa.getUTCMilliseconds();
                                                }
                                                oa = (qa <= 0 || qa >= 10000 ? (qa < 0 ? "-" : "+") + p(6, qa < 0 ? -qa : qa) : p(4, qa)) + "-" + p(2, ra + 1) + "-" + p(2, sa) + "T" + p(2, ua) + ":" + p(2, va) + ":" + p(2, wa) + "." + p(3, xa) + "Z";
                                            } else oa = null;
                                        } else if (typeof oa.toJSON == "function" && ((pa != "[object Number]" && pa != "[object String]" && pa != "[object Array]") || i.call(oa, "toJSON"))) oa = oa.toJSON(ha);
                                    }
                                    if (ja) oa = ja.call(ia, ha, oa);
                                    if (oa === null) return "null";
                                    pa = h.call(oa);
                                    if (pa == "[object Boolean]") {
                                        return "" + oa;
                                    } else if (pa == "[object Number]") {
                                        return oa > -1 / 0 && oa < 1 / 0 ? "" + oa : "null";
                                    } else if (pa == "[object String]") return q(oa);
                                    if (typeof oa == "object") {
                                        for (bb = na.length; bb--;)
                                            if (na[bb] === oa) throw TypeError();
                                        na.push(oa);
                                        ya = [];
                                        cb = ma;
                                        ma += la;
                                        if (pa == "[object Array]") {
                                            for (ab = 0, bb = oa.length; ab < bb; db || (db = true), ab++) {
                                                za = r(ab, oa, ja, ka, la, ma, na);
                                                ya.push(za === k ? "null" : za);
                                            }
                                            return db ? (la ? "[\n" + ma + ya.join(",\n" + ma) + "\n" + cb + "]" : ("[" + ya.join(",") + "]")) : "[]";
                                        } else {
                                            j(ka || oa, function(eb) {
                                                var fb = r(eb, oa, ja, ka, la, ma, na);
                                                if (fb !== k) ya.push(q(eb) + ":" + (la ? " " : "") + fb);
                                                db || (db = true);
                                            });
                                            return db ? (la ? "{\n" + ma + ya.join(",\n" + ma) + "\n" + cb + "}" : ("{" + ya.join(",") + "}")) : "{}";
                                        }
                                        na.pop();
                                    }
                                };
                                l.stringify = function(ha, ia, ja) {
                                    var ka, la, ma, na, oa, pa;
                                    if (typeof ia == "function" || typeof ia == "object" && ia)
                                        if (h.call(ia) == "[object Function]") {
                                            la = ia;
                                        } else if (h.call(ia) == "[object Array]") {
                                        ma = {};
                                        for (na = 0, oa = ia.length; na < oa; pa = ia[na++], ((h.call(pa) == "[object String]" || h.call(pa) == "[object Number]") && (ma[pa] = 1)));
                                    }
                                    if (ja)
                                        if (h.call(ja) == "[object Number]") {
                                            if ((ja -= ja % 1) > 0)
                                                for (ka = "", ja > 10 && (ja = 10); ka.length < ja; ka += " ");
                                        } else if (h.call(ja) == "[object String]") ka = ja.length <= 10 ? ja : ja.slice(0, 10);
                                    return r("", (pa = {}, pa[""] = ha, pa), la, ma, ka, "", []);
                                };
                            }
                            if (!s) {
                                t = String.fromCharCode;
                                u = {
                                    "\\": "\\",
                                    '"': '"',
                                    "/": "/",
                                    b: "\b",
                                    t: "\t",
                                    n: "\n",
                                    f: "\f",
                                    r: "\r"
                                };
                                v = function() {
                                    aa = ba = null;
                                    throw SyntaxError();
                                };
                                w = function() {
                                    var ha = ba,
                                        ia = ha.length,
                                        ja, ka, la, ma, na;
                                    while (aa < ia) {
                                        ja = ha.charAt(aa);
                                        if ("\t\r\n ".indexOf(ja) > -1) {
                                            aa++;
                                        } else if ("{}[]:,".indexOf(ja) > -1) {
                                            aa++;
                                            return ja;
                                        } else if (ja == '"') {
                                            for (ka = "@", aa++; aa < ia;) {
                                                ja = ha.charAt(aa);
                                                if (ja < " ") {
                                                    v();
                                                } else if (ja == "\\") {
                                                    ja = ha.charAt(++aa);
                                                    if ('\\"/btnfr'.indexOf(ja) > -1) {
                                                        ka += u[ja];
                                                        aa++;
                                                    } else if (ja == "u") {
                                                        la = ++aa;
                                                        for (ma = aa + 4; aa < ma; aa++) {
                                                            ja = ha.charAt(aa);
                                                            if (!(ja >= "0" && ja <= "9" || ja >= "a" && ja <= "f" || ja >= "A" && ja <= "F")) v();
                                                        }
                                                        ka += t("0x" + ha.slice(la, aa));
                                                    } else v();
                                                } else {
                                                    if (ja == '"') break;
                                                    ka += ja;
                                                    aa++;
                                                }
                                            }
                                            if (ha.charAt(aa) == '"') {
                                                aa++;
                                                return ka;
                                            }
                                            v();
                                        } else {
                                            la = aa;
                                            if (ja == "-") {
                                                na = true;
                                                ja = ha.charAt(++aa);
                                            }
                                            if (ja >= "0" && ja <= "9") {
                                                if (ja == "0" && (ja = ha.charAt(aa + 1), ja >= "0" && ja <= "9")) v();
                                                na = false;
                                                for (; aa < ia && (ja = ha.charAt(aa), ja >= "0" && ja <= "9"); aa++);
                                                if (ha.charAt(aa) == ".") {
                                                    ma = ++aa;
                                                    for (; ma < ia && (ja = ha.charAt(ma), ja >= "0" && ja <= "9"); ma++);
                                                    if (ma == aa) v();
                                                    aa = ma;
                                                }
                                                ja = ha.charAt(aa);
                                                if (ja == "e" || ja == "E") {
                                                    ja = ha.charAt(++aa);
                                                    if (ja == "+" || ja == "-") aa++;
                                                    for (ma = aa; ma < ia && (ja = ha.charAt(ma), ja >= "0" && ja <= "9"); ma++);
                                                    if (ma == aa) v();
                                                    aa = ma;
                                                }
                                                return +ha.slice(la, aa);
                                            }
                                            if (na) v();
                                            if (ha.slice(aa, aa + 4) == "true") {
                                                aa += 4;
                                                return true;
                                            } else if (ha.slice(aa, aa + 5) == "false") {
                                                aa += 5;
                                                return false;
                                            } else if (ha.slice(aa, aa + 4) == "null") {
                                                aa += 4;
                                                return null;
                                            }
                                            v();
                                        }
                                    }
                                    return "$";
                                };
                                x = function(ha) {
                                    var ia, ja, ka;
                                    if (ha == "$") v();
                                    if (typeof ha == "string") {
                                        if (ha.charAt(0) == "@") return ha.slice(1);
                                        if (ha == "[") {
                                            ia = [];
                                            for (;; ja || (ja = true)) {
                                                ha = w();
                                                if (ha == "]") break;
                                                if (ja)
                                                    if (ha == ",") {
                                                        ha = w();
                                                        if (ha == "]") v();
                                                    } else v();
                                                if (ha == ",") v();
                                                ia.push(x(ha));
                                            }
                                            return ia;
                                        } else if (ha == "{") {
                                            ia = {};
                                            for (;; ja || (ja = true)) {
                                                ha = w();
                                                if (ha == "}") break;
                                                if (ja)
                                                    if (ha == ",") {
                                                        ha = w();
                                                        if (ha == "}") v();
                                                    } else v();
                                                if (ha == "," || typeof ha != "string" || ha.charAt(0) != "@" || w() != ":") v();
                                                ia[ha.slice(1)] = x(w());
                                            }
                                            return ia;
                                        }
                                        v();
                                    }
                                    return ha;
                                };
                                z = function(ha, ia, ja) {
                                    var ka = y(ha, ia, ja);
                                    if (ka === k) {
                                        delete ha[ia];
                                    } else ha[ia] = ka;
                                };
                                y = function(ha, ia, ja) {
                                    var ka = ha[ia],
                                        la;
                                    if (typeof ka == "object" && ka)
                                        if (h.call(ka) == "[object Array]") {
                                            for (la = ka.length; la--;) z(ka, la, ja);
                                        } else j(ka, function(ma) {
                                            z(ka, ma, ja);
                                        });
                                    return ja.call(ha, ia, ka);
                                };
                                l.parse = function(ha, ia) {
                                    aa = 0;
                                    ba = ha;
                                    var ja = x(w());
                                    if (w() != "$") v();
                                    aa = ba = null;
                                    return ia && h.call(ia) == "[object Function]" ? y((ca = {}, ca[""] = ja, ca), "", ia) : ja;
                                };
                            }
                        }
                    }).call(this);
                }), null);
                __d('ES', ['ES5ArrayPrototype', 'ES5FunctionPrototype', 'ES5StringPrototype', 'ES5Array', 'ES5Object', 'ES5Date', 'JSON3', 'ES6Array', 'ES6Object', 'ES6ArrayPrototype', 'ES6DatePrototype', 'ES6Number', 'ES7StringPrototype', 'ES7Object'], (function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
                    var v = {}.toString,
                        w = {
                            'JSON.stringify': n.stringify,
                            'JSON.parse': n.parse
                        },
                        x = {
                            'Array.prototype': h,
                            'Function.prototype': i,
                            'String.prototype': j,
                            Object: l,
                            Array: k,
                            Date: m
                        },
                        y = {
                            Object: p,
                            'Array.prototype': q,
                            'Date.prototype': r,
                            Number: s,
                            Array: o
                        },
                        z = {
                            Object: u,
                            'String.prototype': t
                        };

                    function aa(ca) {
                        for (var da in ca) {
                            if (!ca.hasOwnProperty(da)) continue;
                            var ea = ca[da],
                                fa = da.split('.');
                            if (fa.length === 2) {
                                var ga = fa[0],
                                    ha = fa[1];
                                if (!ga || !ha || !window[ga] || !window[ga][ha]) {
                                    var ia = ga ? window[ga] : '-',
                                        ja = ga && window[ga] && ha ? window[ga][ha] : '-';
                                    throw new Error('Unexpected state (t11975770): ' + (ga + ', ' + ha + ', ' + ia + ', ' + ja + ', ' + da));
                                }
                            }
                            var ka = fa.length === 2 ? window[fa[0]][fa[1]] : window[da];
                            for (var la in ea) {
                                if (!ea.hasOwnProperty(la)) continue;
                                if (typeof ea[la] !== 'function') {
                                    w[da + '.' + la] = ea[la];
                                    continue;
                                }
                                var ma = ka[la];
                                w[da + '.' + la] = ma && /\{\s+\[native code\]\s\}/.test(ma) ? ma : ea[la];
                            }
                        }
                    }
                    aa(x);
                    aa(y);
                    aa(z);

                    function ba(ca, da, ea) {
                        var fa = ea ? v.call(ca).slice(8, -1) + '.prototype' : ca,
                            ga = w[fa + '.' + da] || ca[da];
                        if (typeof ga === 'function') {
                            for (var ha = arguments.length, ia = Array(ha > 3 ? ha - 3 : 0), ja = 3; ja < ha; ja++) ia[ja - 3] = arguments[ja];
                            return ga.apply(ca, ia);
                        } else if (ga) return ga;
                        throw new Error('Polyfill ' + fa + ' does not have implementation of ' + da);
                    }
                    f.exports = ba;
                }), null);
                __d('sdk.babelHelpers', ['ES5FunctionPrototype', 'ES5Object', 'ES6Object'], (function a(b, c, d, e, f, g, h, i, j) {
                    var k = {},
                        l = Object.prototype.hasOwnProperty;
                    k.inherits = function(m, n) {
                        j.assign(m, n);
                        m.prototype = i.create(n && n.prototype);
                        m.prototype.constructor = m;
                        m.__superConstructor__ = n;
                        return n;
                    };
                    k._extends = j.assign;
                    k['extends'] = k._extends;
                    k.objectWithoutProperties = function(m, n) {
                        var o = {};
                        for (var p in m) {
                            if (!l.call(m, p) || n.indexOf(p) >= 0) continue;
                            o[p] = m[p];
                        }
                        return o;
                    };
                    k.taggedTemplateLiteralLoose = function(m, n) {
                        m.raw = n;
                        return m;
                    };
                    k.bind = h.bind;
                    f.exports = k;
                }), null);
                var ES = require('ES');
                var babelHelpers = require('sdk.babelHelpers');
                (function(a, b) {
                    var c = 'keys',
                        d = 'values',
                        e = 'entries',
                        f = function() {
                            var l = h(Array),
                                m = void 0;
                            if (!l) m = function() {
                                function n(o, p) {
                                    'use strict';
                                    this.$ArrayIterator1 = o;
                                    this.$ArrayIterator2 = p;
                                    this.$ArrayIterator3 = 0;
                                }
                                n.prototype.next = function() {
                                    'use strict';
                                    if (this.$ArrayIterator1 == null) return {
                                        value: b,
                                        done: true
                                    };
                                    var o = this.$ArrayIterator1,
                                        p = this.$ArrayIterator1.length,
                                        q = this.$ArrayIterator3,
                                        r = this.$ArrayIterator2;
                                    if (q >= p) {
                                        this.$ArrayIterator1 = b;
                                        return {
                                            value: b,
                                            done: true
                                        };
                                    }
                                    this.$ArrayIterator3 = q + 1;
                                    if (r === c) {
                                        return {
                                            value: q,
                                            done: false
                                        };
                                    } else if (r === d) {
                                        return {
                                            value: o[q],
                                            done: false
                                        };
                                    } else if (r === e) return {
                                        value: [q, o[q]],
                                        done: false
                                    };
                                };
                                n.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function() {
                                    'use strict';
                                    return this;
                                };
                                return n;
                            }();
                            return {
                                keys: l ? function(n) {
                                    return n.keys();
                                } : function(n) {
                                    return new m(n, c);
                                },
                                values: l ? function(n) {
                                    return n.values();
                                } : function(n) {
                                    return new m(n, d);
                                },
                                entries: l ? function(n) {
                                    return n.entries();
                                } : function(n) {
                                    return new m(n, e);
                                }
                            };
                        }(),
                        g = function() {
                            var l = h(String),
                                m = void 0;
                            if (!l) m = function() {
                                function n(o) {
                                    'use strict';
                                    this.$StringIterator1 = o;
                                    this.$StringIterator2 = 0;
                                }
                                n.prototype.next = function() {
                                    'use strict';
                                    if (this.$StringIterator1 == null) return {
                                        value: b,
                                        done: true
                                    };
                                    var o = this.$StringIterator2,
                                        p = this.$StringIterator1,
                                        q = p.length;
                                    if (o >= q) {
                                        this.$StringIterator1 = b;
                                        return {
                                            value: b,
                                            done: true
                                        };
                                    }
                                    var r = void 0,
                                        s = p.charCodeAt(o);
                                    if (s < 55296 || s > 56319 || o + 1 === q) {
                                        r = p[o];
                                    } else {
                                        var t = p.charCodeAt(o + 1);
                                        if (t < 56320 || t > 57343) {
                                            r = p[o];
                                        } else r = p[o] + p[o + 1];
                                    }
                                    this.$StringIterator2 = o + r.length;
                                    return {
                                        value: r,
                                        done: false
                                    };
                                };
                                n.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function() {
                                    'use strict';
                                    return this;
                                };
                                return n;
                            }();
                            return {
                                keys: function n() {
                                    throw TypeError('Strings default iterator doesn\'t implement keys.');
                                },
                                values: l ? function(n) {
                                    return n[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
                                } : function(n) {
                                    return new m(n);
                                },
                                entries: function n() {
                                    throw TypeError('Strings default iterator doesn\'t implement entries.');
                                }
                            };
                        }();

                    function h(l) {
                        return typeof l.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] === 'function' && typeof l.prototype.values === 'function' && typeof l.prototype.keys === 'function' && typeof l.prototype.entries === 'function';
                    }

                    function i(l, m) {
                        'use strict';
                        this.$ObjectIterator1 = l;
                        this.$ObjectIterator2 = m;
                        this.$ObjectIterator3 = ES('Object', 'keys', false, l);
                        this.$ObjectIterator4 = 0;
                    }
                    i.prototype.next = function() {
                        'use strict';
                        var l = this.$ObjectIterator3.length,
                            m = this.$ObjectIterator4,
                            n = this.$ObjectIterator2,
                            o = this.$ObjectIterator3[m];
                        if (m >= l) {
                            this.$ObjectIterator1 = b;
                            return {
                                value: b,
                                done: true
                            };
                        }
                        this.$ObjectIterator4 = m + 1;
                        if (n === c) {
                            return {
                                value: o,
                                done: false
                            };
                        } else if (n === d) {
                            return {
                                value: this.$ObjectIterator1[o],
                                done: false
                            };
                        } else if (n === e) return {
                            value: [o, this.$ObjectIterator1[o]],
                            done: false
                        };
                    };
                    i.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function() {
                        'use strict';
                        return this;
                    };
                    var j = {
                        keys: function l(m) {
                            return new i(m, c);
                        },
                        values: function l(m) {
                            return new i(m, d);
                        },
                        entries: function l(m) {
                            return new i(m, e);
                        }
                    };

                    function k(l, m) {
                        if (typeof l === 'string') {
                            return g[m || d](l);
                        } else if (ES('Array', 'isArray', false, l)) {
                            return f[m || d](l);
                        } else if (l[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']) {
                            return l[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
                        } else return j[m || e](l);
                    }
                    ES('Object', 'assign', false, k, {
                        KIND_KEYS: c,
                        KIND_VALUES: d,
                        KIND_ENTRIES: e,
                        keys: function l(m) {
                            return k(m, c);
                        },
                        values: function l(m) {
                            return k(m, d);
                        },
                        entries: function l(m) {
                            return k(m, e);
                        },
                        generic: j.entries
                    });
                    a.FB_enumerate = k;
                })(typeof global === 'undefined' ? this : global);
                (function(a, b) {
                    var c = a.window || a;

                    function d() {
                        return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.', '');
                    }

                    function e(j) {
                        var k = j ? j.ownerDocument || j : document,
                            l = k.defaultView || c;
                        return !!(j && (typeof l.Node === 'function' ? j instanceof l.Node : typeof j === 'object' && typeof j.nodeType === 'number' && typeof j.nodeName === 'string'));
                    }

                    function f(j) {
                        var k = c[j];
                        if (k == null) return true;
                        if (typeof c.Symbol !== 'function') return true;
                        var l = k.prototype;
                        return k == null || typeof k !== 'function' || typeof l.clear !== 'function' || new k().size !== 0 || typeof l.keys !== 'function' || typeof l['for' + 'Each'] !== 'function';
                    }
                    var g = a.FB_enumerate,
                        h = function() {
                            if (!f('Map')) return c.Map;
                            var j = 'key',
                                k = 'value',
                                l = 'key+value',
                                m = '$map_',
                                n = void 0,
                                o = 'IE_HASH_';

                            function p(ba) {
                                'use strict';
                                if (!u(this)) throw new TypeError('Wrong map object type.');
                                t(this);
                                if (ba != null) {
                                    var ca = g(ba),
                                        da = void 0;
                                    while (!(da = ca.next()).done) {
                                        if (!u(da.value)) throw new TypeError('Expected iterable items to be pair objects.');
                                        this.set(da.value[0], da.value[1]);
                                    }
                                }
                            }
                            p.prototype.clear = function() {
                                'use strict';
                                t(this);
                            };
                            p.prototype.has = function(ba) {
                                'use strict';
                                var ca = r(this, ba);
                                return !!(ca != null && this._mapData[ca]);
                            };
                            p.prototype.set = function(ba, ca) {
                                'use strict';
                                var da = r(this, ba);
                                if (da != null && this._mapData[da]) {
                                    this._mapData[da][1] = ca;
                                } else {
                                    da = this._mapData.push([ba, ca]) - 1;
                                    s(this, ba, da);
                                    this.size += 1;
                                }
                                return this;
                            };
                            p.prototype.get = function(ba) {
                                'use strict';
                                var ca = r(this, ba);
                                if (ca == null) {
                                    return b;
                                } else return this._mapData[ca][1];
                            };
                            p.prototype['delete'] = function(ba) {
                                'use strict';
                                var ca = r(this, ba);
                                if (ca != null && this._mapData[ca]) {
                                    s(this, ba, b);
                                    this._mapData[ca] = b;
                                    this.size -= 1;
                                    return true;
                                } else return false;
                            };
                            p.prototype.entries = function() {
                                'use strict';
                                return new q(this, l);
                            };
                            p.prototype.keys = function() {
                                'use strict';
                                return new q(this, j);
                            };
                            p.prototype.values = function() {
                                'use strict';
                                return new q(this, k);
                            };
                            p.prototype.forEach = function(ba, ca) {
                                'use strict';
                                if (typeof ba !== 'function') throw new TypeError('Callback must be callable.');
                                var da = ES(ba, 'bind', true, ca || b),
                                    ea = this._mapData;
                                for (var fa = 0; fa < ea.length; fa++) {
                                    var ga = ea[fa];
                                    if (ga != null) da(ga[1], ga[0], this);
                                }
                            };
                            p.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function() {
                                'use strict';
                                return this.entries();
                            };

                            function q(ba, ca) {
                                'use strict';
                                if (!(u(ba) && ba._mapData)) throw new TypeError('Object is not a map.');
                                if (ES([j, l, k], 'indexOf', true, ca) === -1) throw new Error('Invalid iteration kind.');
                                this._map = ba;
                                this._nextIndex = 0;
                                this._kind = ca;
                            }
                            q.prototype.next = function() {
                                'use strict';
                                if (!this instanceof p) throw new TypeError('Expected to be called on a MapIterator.');
                                var ba = this._map,
                                    ca = this._nextIndex,
                                    da = this._kind;
                                if (ba == null) return v(b, true);
                                var ea = ba._mapData;
                                while (ca < ea.length) {
                                    var fa = ea[ca];
                                    ca += 1;
                                    this._nextIndex = ca;
                                    if (fa)
                                        if (da === j) {
                                            return v(fa[0], false);
                                        } else if (da === k) {
                                        return v(fa[1], false);
                                    } else if (da) return v(fa, false);
                                }
                                this._map = b;
                                return v(b, true);
                            };
                            q.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function() {
                                'use strict';
                                return this;
                            };

                            function r(ba, ca) {
                                if (u(ca)) {
                                    var da = z(ca);
                                    return da ? ba._objectIndex[da] : b;
                                } else {
                                    var ea = m + ca;
                                    if (typeof ca === 'string') {
                                        return ba._stringIndex[ea];
                                    } else return ba._otherIndex[ea];
                                }
                            }

                            function s(ba, ca, da) {
                                var ea = da == null;
                                if (u(ca)) {
                                    var fa = z(ca);
                                    if (!fa) fa = aa(ca);
                                    if (ea) {
                                        delete ba._objectIndex[fa];
                                    } else ba._objectIndex[fa] = da;
                                } else {
                                    var ga = m + ca;
                                    if (typeof ca === 'string') {
                                        if (ea) {
                                            delete ba._stringIndex[ga];
                                        } else ba._stringIndex[ga] = da;
                                    } else if (ea) {
                                        delete ba._otherIndex[ga];
                                    } else ba._otherIndex[ga] = da;
                                }
                            }

                            function t(ba) {
                                ba._mapData = [];
                                ba._objectIndex = {};
                                ba._stringIndex = {};
                                ba._otherIndex = {};
                                ba.size = 0;
                            }

                            function u(ba) {
                                return ba != null && (typeof ba === 'object' || typeof ba === 'function');
                            }

                            function v(ba, ca) {
                                return {
                                    value: ba,
                                    done: ca
                                };
                            }
                            p.__isES5 = function() {
                                try {
                                    Object.defineProperty({}, '__.$#x', {});
                                    return true;
                                } catch (ba) {
                                    return false;
                                }
                            }();

                            function w(ba) {
                                if (!p.__isES5 || !Object.isExtensible) {
                                    return true;
                                } else return Object.isExtensible(ba);
                            }

                            function x(ba) {
                                var ca = void 0;
                                switch (ba.nodeType) {
                                    case 1:
                                        ca = ba.uniqueID;
                                        break;
                                    case 9:
                                        ca = ba.documentElement.uniqueID;
                                        break;
                                    default:
                                        return null;
                                }
                                if (ca) {
                                    return o + ca;
                                } else return null;
                            }
                            var y = d();

                            function z(ba) {
                                if (ba[y]) {
                                    return ba[y];
                                } else if (!p.__isES5 && ba.propertyIsEnumerable && ba.propertyIsEnumerable[y]) {
                                    return ba.propertyIsEnumerable[y];
                                } else if (!p.__isES5 && e(ba) && x(ba)) {
                                    return x(ba);
                                } else if (!p.__isES5 && ba[y]) return ba[y];
                            }
                            var aa = function() {
                                var ba = Object.prototype.propertyIsEnumerable,
                                    ca = 0;
                                return function da(ea) {
                                    if (w(ea)) {
                                        ca += 1;
                                        if (p.__isES5) {
                                            Object.defineProperty(ea, y, {
                                                enumerable: false,
                                                writable: false,
                                                configurable: false,
                                                value: ca
                                            });
                                        } else if (ea.propertyIsEnumerable) {
                                            ea.propertyIsEnumerable = function() {
                                                return ba.apply(this, arguments);
                                            };
                                            ea.propertyIsEnumerable[y] = ca;
                                        } else if (e(ea)) {
                                            ea[y] = ca;
                                        } else throw new Error('Unable to set a non-enumerable property on object.');
                                        return ca;
                                    } else throw new Error('Non-extensible objects are not allowed as keys.');
                                };
                            }();
                            return __annotator(p, {
                                name: 'Map'
                            });
                        }(),
                        i = function() {
                            if (!f('Set')) return c.Set;

                            function j(l) {
                                'use strict';
                                if (this == null || typeof this !== 'object' && typeof this !== 'function') throw new TypeError('Wrong set object type.');
                                k(this);
                                if (l != null) {
                                    var m = g(l),
                                        n = void 0;
                                    while (!(n = m.next()).done) this.add(n.value);
                                }
                            }
                            j.prototype.add = function(l) {
                                'use strict';
                                this._map.set(l, l);
                                this.size = this._map.size;
                                return this;
                            };
                            j.prototype.clear = function() {
                                'use strict';
                                k(this);
                            };
                            j.prototype['delete'] = function(l) {
                                'use strict';
                                var m = this._map['delete'](l);
                                this.size = this._map.size;
                                return m;
                            };
                            j.prototype.entries = function() {
                                'use strict';
                                return this._map.entries();
                            };
                            j.prototype.forEach = function(l) {
                                'use strict';
                                var m = arguments[1],
                                    n = this._map.keys(),
                                    o = void 0;
                                while (!(o = n.next()).done) l.call(m, o.value, o.value, this);
                            };
                            j.prototype.has = function(l) {
                                'use strict';
                                return this._map.has(l);
                            };
                            j.prototype.values = function() {
                                'use strict';
                                return this._map.values();
                            };
                            j.prototype.keys = function() {
                                'use strict';
                                return this.values();
                            };
                            j.prototype[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'] = function() {
                                'use strict';
                                return this.values();
                            };

                            function k(l) {
                                l._map = new h();
                                l.size = l._map.size;
                            }
                            return __annotator(j, {
                                name: 'Set'
                            });
                        }();
                    a.FB_PolyfilledMap = h;
                    a.FB_PolyfilledSet = i;
                })(typeof global === 'undefined' ? this : global);
                __d("UrlMapConfig", [], {
                    "www": "www.facebook.com",
                    "m": "m.facebook.com",
                    "connect": "connect.facebook.net",
                    "business": "business.facebook.com",
                    "api_https": "api.facebook.com",
                    "api_read_https": "api-read.facebook.com",
                    "graph_https": "graph.facebook.com",
                    "an_https": "an.facebook.com",
                    "fbcdn_http": "static.xx.fbcdn.net",
                    "fbcdn_https": "static.xx.fbcdn.net",
                    "cdn_http": "staticxx.facebook.com",
                    "cdn_https": "staticxx.facebook.com"
                });
                __d("JSSDKRuntimeConfig", [], {
                    "locale": "pt_BR",
                    "rtl": false,
                    "revision": "2835688"
                });
                __d("JSSDKConfig", [], {
                    "bustCache": true,
                    "tagCountLogRate": 0.01,
                    "errorHandling": {
                        "rate": 4
                    },
                    "usePluginPipe": true,
                    "features": {
                        "dialog_resize_refactor": true,
                        "one_comment_controller": true,
                        "allow_non_canvas_app_events": false,
                        "event_subscriptions_log": {
                            "rate": 0.01,
                            "value": 10000
                        },
                        "should_force_single_dialog_instance": true,
                        "js_sdk_force_status_on_load": true,
                        "js_sdk_mbasic_share_plugin_init": true,
                        "kill_fragment": true,
                        "xfbml_profile_pic_server": true,
                        "error_handling": {
                            "rate": 4
                        },
                        "e2e_ping_tracking": {
                            "rate": 1.0e-6
                        },
                        "getloginstatus_tracking": {
                            "rate": 0.001
                        },
                        "xd_timeout": {
                            "rate": 4,
                            "value": 30000
                        },
                        "use_bundle": true,
                        "launch_payment_dialog_via_pac": {
                            "rate": 100
                        },
                        "plugin_tags_blacklist": ["recommendations_bar", "registration", "activity", "recommendations", "facepile"],
                        "should_log_response_error": true
                    },
                    "api": {
                        "mode": "warn",
                        "whitelist": ["AppEvents", "AppEvents.EventNames", "AppEvents.ParameterNames", "AppEvents.activateApp", "AppEvents.logEvent", "AppEvents.logPageView", "AppEvents.logPurchase", "Canvas", "Canvas.Prefetcher", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.hideFlashElement", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.showFlashElement", "Canvas.startTimer", "Canvas.stopTimer", "Event", "Event.subscribe", "Event.unsubscribe", "Music.flashCallback", "Music.init", "Music.send", "Payment", "Payment.cancelFlow", "Payment.continueFlow", "Payment.init", "Payment.lockForProcessing", "Payment.parse", "Payment.setSize", "Payment.unlockForProcessing", "ThirdPartyProvider", "ThirdPartyProvider.init", "ThirdPartyProvider.sendData", "UA", "UA.nativeApp", "XFBML", "XFBML.RecommendationsBar", "XFBML.RecommendationsBar.markRead", "XFBML.parse", "addFriend", "api", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "init", "login", "logout", "publish", "share", "ui"]
                    },
                    "initSitevars": {
                        "enableMobileComments": 1,
                        "iframePermissions": {
                            "read_stream": false,
                            "manage_mailbox": false,
                            "manage_friendlists": false,
                            "read_mailbox": false,
                            "publish_checkins": true,
                            "status_update": true,
                            "photo_upload": true,
                            "video_upload": true,
                            "sms": false,
                            "create_event": true,
                            "rsvp_event": true,
                            "offline_access": true,
                            "email": true,
                            "xmpp_login": false,
                            "create_note": true,
                            "share_item": true,
                            "export_stream": false,
                            "publish_stream": true,
                            "publish_likes": true,
                            "ads_management": false,
                            "contact_email": true,
                            "access_private_data": false,
                            "read_insights": false,
                            "read_requests": false,
                            "read_friendlists": true,
                            "manage_pages": false,
                            "physical_login": false,
                            "manage_groups": false,
                            "read_deals": false
                        }
                    }
                });
                __d("JSSDKXDConfig", [], {
                    "XdUrl": "\/connect\/xd_arbiter.php?version=42",
                    "XdBundleUrl": "\/connect\/xd_arbiter\/r\/0eWevUAMuoH.js?version=42",
                    "Flash": {
                        "path": "https:\/\/connect.facebook.net\/rsrc.php\/v2\/yW\/r\/yOZN1vHw3Z_.swf"
                    },
                    "useCdn": true
                });
                __d("JSSDKCssConfig", [], {
                    "rules": ".fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}.fb_link img{border:none}\u0040keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_reset .fb_dialog_legacy{overflow:visible}.fb_dialog_advanced{padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px;border-radius:8px}.fb_dialog_content{background:#fff;color:#333}.fb_dialog_close_icon{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;_background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yL\/r\/s816eWC-2sl.gif);cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent;_background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yL\/r\/s816eWC-2sl.gif)}.fb_dialog_close_icon:active{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yq\/r\/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent;_background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yL\/r\/s816eWC-2sl.gif)}.fb_dialog_loader{background-color:#f6f7f9;border:1px solid #606060;font-size:24px;padding:20px}.fb_dialog_top_left,.fb_dialog_top_right,.fb_dialog_bottom_left,.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}.fb_dialog_top_left{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}.fb_dialog_top_right{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}.fb_dialog_bottom_left{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}.fb_dialog_bottom_right{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/ye\/r\/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}.fb_dialog_vert_left,.fb_dialog_vert_right,.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_dialog_vert_right{width:10px;height:100\u0025}.fb_dialog_vert_left{margin-left:-10px}.fb_dialog_vert_right{right:0;margin-right:-10px}.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{width:100\u0025;height:10px}.fb_dialog_horiz_top{margin-top:-10px}.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yd\/r\/Cou7n-nqK52.gif) no-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}body.fb_hidden{-webkit-transform:none;height:100\u0025;margin:0;overflow:visible;position:absolute;top:-10000px;left:0;width:100\u0025}.fb_dialog.fb_dialog_mobile.loading{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/ya\/r\/3rhSv5V8j3o.gif) white no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{width:auto;height:auto;min-height:initial;min-width:initial;background:none}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100\u0025}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{color:#fff;display:block;padding-top:20px;clear:both;font-size:18px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;bottom:0;left:0;right:0;top:0;width:100\u0025;min-height:100\u0025;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0\u0025 0\u0025, 0\u0025 100\u0025, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100\u0025}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0\u0025 0\u0025, 0\u0025 100\u0025, from(#4966A6), color-stop(.5, #355492), to(#2A4887));border:1px solid #29487d;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset, rgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/y9\/r\/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #555;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f6f7f9;border:1px solid #555;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yD\/r\/t-wz8gw1xG1.png);background-repeat:no-repeat;background-position:50\u0025 50\u0025;height:24px;width:24px}\u0040keyframes rotateSpinner{0\u0025{transform:rotate(0deg)}100\u0025{transform:rotate(360deg)}}\n.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100\u0025}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_hide_iframes iframe{position:relative;left:-10000px}.fb_iframe_widget_loader{position:relative;display:inline-block}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100\u0025}.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}.fb_iframe_widget_loader .FB_Loader{background:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/y9\/r\/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50\u0025;z-index:4}",
                    "components": ["css:fb.css.base", "css:fb.css.dialog", "css:fb.css.iframewidget"]
                });
                __d("ApiClientConfig", [], {
                    "FlashRequest": {
                        "swfUrl": "https:\/\/connect.facebook.net\/rsrc.php\/v2\/yd\/r\/mxzow1Sdmxr.swf"
                    }
                });
                __d("JSSDKCanvasPrefetcherConfig", [], {
                    "blacklist": [144959615576466, 768691303149786, 320528941393723],
                    "sampleRate": 500
                });
                __d("DOMWrapper", [], function a(b, c, d, e, f, g) {
                    var h, i, j = {
                        setRoot: function k(l) {
                            h = l;
                        },
                        getRoot: function k() {
                            return h || document.body;
                        },
                        setWindow: function k(l) {
                            i = l;
                        },
                        getWindow: function k() {
                            return i || self;
                        }
                    };
                    f.exports = j;
                }, null);
                __d('dotAccess', [], function a(b, c, d, e, f, g) {
                    function h(i, j, k) {
                        var l = j.split('.');
                        do {
                            var m = l.shift();
                            i = i[m] || k && (i[m] = {});
                        } while (l.length && i);
                        return i;
                    }
                    f.exports = h;
                }, null);
                __d('guid', [], (function a(b, c, d, e, f, g) {
                    function h() {
                        return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.', '');
                    }
                    f.exports = h;
                }), null);
                __d('wrapFunction', [], function a(b, c, d, e, f, g) {
                    var h = {},
                        i = function j(k, l, m) {
                            var n = l || 'default';
                            return function() {
                                var o = n in h ? h[n](k, m) : k;
                                return o.apply(this, arguments);
                            };
                        };
                    i.setWrapper = function(j) {
                        var k = arguments.length <= 1 || arguments[1] === undefined ? 'default' : arguments[1];
                        h[k] = j;
                    };
                    f.exports = i;
                }, null);
                __d('GlobalCallback', ['DOMWrapper', 'dotAccess', 'guid', 'wrapFunction'], function a(b, c, d, e, f, g, h, i, j, k) {
                    var l, m, n = {
                        setPrefix: function o(p) {
                            l = i(h.getWindow(), p, true);
                            m = p;
                        },
                        create: function o(p, q) {
                            if (!l) this.setPrefix('__globalCallbacks');
                            var r = j();
                            l[r] = k(p, 'entry', q || 'GlobalCallback');
                            return m + '.' + r;
                        },
                        remove: function o(p) {
                            var q = p.substring(m.length + 1);
                            delete l[q];
                        }
                    };
                    f.exports = n;
                }, null);
                __d("sprintf", [], (function a(b, c, d, e, f, g) {
                    function h(i) {
                        for (var j = arguments.length, k = Array(j > 1 ? j - 1 : 0), l = 1; l < j; l++) k[l - 1] = arguments[l];
                        var m = 0;
                        return i.replace(/%s/g, function() {
                            return String(k[m++]);
                        });
                    }
                    f.exports = h;
                }), null);
                __d('Log', ['sprintf'], function a(b, c, d, e, f, g, h) {
                    var i = {
                        DEBUG: 3,
                        INFO: 2,
                        WARNING: 1,
                        ERROR: 0
                    };

                    function j(l, m) {
                        var n = Array.prototype.slice.call(arguments, 2),
                            o = h.apply(null, n),
                            p = window.console;
                        if (p && k.level >= m) p[l in p ? l : 'log'](o);
                    }
                    var k = {
                        level: -1,
                        Level: i,
                        debug: ES(j, 'bind', true, null, 'debug', i.DEBUG),
                        info: ES(j, 'bind', true, null, 'info', i.INFO),
                        warn: ES(j, 'bind', true, null, 'warn', i.WARNING),
                        error: ES(j, 'bind', true, null, 'error', i.ERROR)
                    };
                    f.exports = k;
                }, null);
                __d("ObservableMixin", [], function a(b, c, d, e, f, g) {
                    function h() {
                        this.__observableEvents = {};
                    }
                    h.prototype = {
                        inform: function i(j) {
                            var k = Array.prototype.slice.call(arguments, 1),
                                l = Array.prototype.slice.call(this.getSubscribers(j));
                            for (var m = 0; m < l.length; m++) {
                                if (l[m] === null) continue;
                                try {
                                    l[m].apply(this, k);
                                } catch (n) {
                                    setTimeout(function() {
                                        throw n;
                                    }, 0);
                                }
                            }
                            return this;
                        },
                        getSubscribers: function i(j) {
                            return this.__observableEvents[j] || (this.__observableEvents[j] = []);
                        },
                        clearSubscribers: function i(j) {
                            if (j) this.__observableEvents[j] = [];
                            return this;
                        },
                        clearAllSubscribers: function i() {
                            this.__observableEvents = {};
                            return this;
                        },
                        subscribe: function i(j, k) {
                            var l = this.getSubscribers(j);
                            l.push(k);
                            return this;
                        },
                        unsubscribe: function i(j, k) {
                            var l = this.getSubscribers(j);
                            for (var m = 0; m < l.length; m++)
                                if (l[m] === k) {
                                    l.splice(m, 1);
                                    break;
                                }
                            return this;
                        },
                        monitor: function i(j, k) {
                            if (!k()) {
                                var i = ES(function(l) {
                                    if (k.apply(k, arguments)) this.unsubscribe(j, i);
                                }, "bind", true, this);
                                this.subscribe(j, i);
                            }
                            return this;
                        }
                    };
                    f.exports = h;
                }, null);
                __d('UrlMap', ['UrlMapConfig'], function a(b, c, d, e, f, g, h) {
                    var i = {
                        resolve: function j(k, l) {
                            var m = typeof l == 'undefined' ? location.protocol.replace(':', '') : l ? 'https' : 'http';
                            if (k in h) return m + '://' + h[k];
                            if (typeof l == 'undefined' && k + '_' + m in h) return m + '://' + h[k + '_' + m];
                            if (l !== true && k + '_http' in h) return 'http://' + h[k + '_http'];
                            if (l !== false && k + '_https' in h) return 'https://' + h[k + '_https'];
                        }
                    };
                    f.exports = i;
                }, null);
                __d('QueryString', [], function a(b, c, d, e, f, g) {
                    function h(l) {
                        var m = [];
                        ES(ES('Object', 'keys', false, l).sort(), 'forEach', true, function(n) {
                            var o = l[n];
                            if (typeof o === 'undefined') return;
                            if (o === null) {
                                m.push(n);
                                return;
                            }
                            m.push(encodeURIComponent(n) + '=' + encodeURIComponent(o));
                        });
                        return m.join('&');
                    }

                    function i(l, m) {
                        var n = {};
                        if (l === '') return n;
                        var o = l.split('&');
                        for (var p = 0; p < o.length; p++) {
                            var q = o[p].split('=', 2),
                                r = decodeURIComponent(q[0]);
                            if (m && n.hasOwnProperty(r)) throw new URIError('Duplicate key: ' + r);
                            n[r] = q.length === 2 ? decodeURIComponent(q[1]) : null;
                        }
                        return n;
                    }

                    function j(l, m) {
                        return l + (ES(l, 'indexOf', true, '?') !== -1 ? '&' : '?') + (typeof m === 'string' ? m : k.encode(m));
                    }
                    var k = {
                        encode: h,
                        decode: i,
                        appendToUrl: j
                    };
                    f.exports = k;
                }, null);
                __d("ManagedError", [], function a(b, c, d, e, f, g) {
                    function h(i, j) {
                        Error.prototype.constructor.call(this, i);
                        this.message = i;
                        this.innerError = j;
                    }
                    h.prototype = new Error();
                    h.prototype.constructor = h;
                    f.exports = h;
                }, null);
                __d('AssertionError', ['ManagedError'], function a(b, c, d, e, f, g, h) {
                    function i(j) {
                        h.prototype.constructor.apply(this, arguments);
                    }
                    i.prototype = new h();
                    i.prototype.constructor = i;
                    f.exports = i;
                }, null);
                __d('Assert', ['AssertionError', 'sprintf'], function a(b, c, d, e, f, g, h, i) {
                    function j(o, p) {
                        if (typeof o !== 'boolean' || !o) throw new h(p);
                        return o;
                    }

                    function k(o, p, q) {
                        var r;
                        if (p === undefined) {
                            r = 'undefined';
                        } else if (p === null) {
                            r = 'null';
                        } else {
                            var s = Object.prototype.toString.call(p);
                            r = /\s(\w*)/.exec(s)[1].toLowerCase();
                        }
                        j(ES(o, 'indexOf', true, r) !== -1, q || i('Expression is of type %s, not %s', r, o));
                        return p;
                    }

                    function l(o, p, q) {
                        j(p instanceof o, q || 'Expression not instance of type');
                        return p;
                    }

                    function m(o, p) {
                        n['is' + o] = p;
                        n['maybe' + o] = function(q, r) {
                            if (q != null) p(q, r);
                        };
                    }
                    var n = {
                        isInstanceOf: l,
                        isTrue: j,
                        isTruthy: function o(p, q) {
                            return j(!!p, q);
                        },
                        type: k,
                        define: function o(p, q) {
                            p = p.substring(0, 1).toUpperCase() + p.substring(1).toLowerCase();
                            m(p, function(r, s) {
                                j(q(r), s);
                            });
                        }
                    };
                    ES(['Array', 'Boolean', 'Date', 'Function', 'Null', 'Number', 'Object', 'Regexp', 'String', 'Undefined'], 'forEach', true, function(o) {
                        m(o, ES(k, 'bind', true, null, o.toLowerCase()));
                    });
                    f.exports = n;
                }, null);
                __d('Type', ['Assert'], function a(b, c, d, e, f, g, h) {
                    function i() {
                        var m = this.__mixins;
                        if (m)
                            for (var n = 0; n < m.length; n++) m[n].apply(this, arguments);
                    }

                    function j(m, n) {
                        if (n instanceof m) return true;
                        if (n instanceof i)
                            for (var o = 0; o < n.__mixins.length; o++)
                                if (n.__mixins[o] == m) return true;
                        return false;
                    }

                    function k(m, n) {
                        var o = m.prototype;
                        if (!ES('Array', 'isArray', false, n)) n = [n];
                        for (var p = 0; p < n.length; p++) {
                            var q = n[p];
                            if (typeof q == 'function') {
                                o.__mixins.push(q);
                                q = q.prototype;
                            }
                            ES(ES('Object', 'keys', false, q), 'forEach', true, function(r) {
                                o[r] = q[r];
                            });
                        }
                    }

                    function l(m, n, o) {
                        var p = n && n.hasOwnProperty('constructor') ? n.constructor : function() {
                            this.parent.apply(this, arguments);
                        };
                        h.isFunction(p);
                        if (m && m.prototype instanceof i === false) throw new Error('parent type does not inherit from Type');
                        m = m || i;

                        function q() {}
                        q.prototype = m.prototype;
                        p.prototype = new q();
                        if (n) ES('Object', 'assign', false, p.prototype, n);
                        p.prototype.constructor = p;
                        p.parent = m;
                        p.prototype.__mixins = m.prototype.__mixins ? Array.prototype.slice.call(m.prototype.__mixins) : [];
                        if (o) k(p, o);
                        p.prototype.parent = function() {
                            this.parent = m.prototype.parent;
                            m.apply(this, arguments);
                        };
                        p.prototype.parentCall = function(r) {
                            return m.prototype[r].apply(this, Array.prototype.slice.call(arguments, 1));
                        };
                        p.extend = function(r, s) {
                            return l(this, r, s);
                        };
                        return p;
                    }
                    ES('Object', 'assign', false, i.prototype, {
                        instanceOf: function m(n) {
                            return j(n, this);
                        }
                    });
                    ES('Object', 'assign', false, i, {
                        extend: function m(n, o) {
                            return typeof n === 'function' ? l.apply(null, arguments) : l(null, n, o);
                        },
                        instanceOf: j
                    });
                    f.exports = i;
                }, null);
                __d('sdk.Model', ['Type', 'ObservableMixin'], function a(b, c, d, e, f, g, h, i) {
                    var j = h.extend({
                        constructor: function k(l) {
                            this.parent();
                            var m = {},
                                n = this;
                            ES(ES('Object', 'keys', false, l), 'forEach', true, function(o) {
                                m[o] = l[o];
                                n['set' + o] = function(p) {
                                    if (p === m[o]) return this;
                                    m[o] = p;
                                    n.inform(o + '.change', p);
                                    return n;
                                };
                                n['get' + o] = function() {
                                    return m[o];
                                };
                            });
                        }
                    }, i);
                    f.exports = j;
                }, null);
                __d('sdk.Runtime', ['sdk.Model', 'JSSDKRuntimeConfig'], function a(b, c, d, e, f, g, h, i) {
                    var j = {
                            UNKNOWN: 0,
                            PAGETAB: 1,
                            CANVAS: 2,
                            PLATFORM: 4
                        },
                        k = new h({
                            AccessToken: '',
                            ClientID: '',
                            CookieUserID: '',
                            Environment: j.UNKNOWN,
                            Initialized: false,
                            IsVersioned: false,
                            KidDirectedSite: undefined,
                            Locale: i.locale,
                            LoggedIntoFacebook: undefined,
                            LoginStatus: undefined,
                            Revision: i.revision,
                            Rtl: i.rtl,
                            Scope: undefined,
                            Secure: undefined,
                            UseCookie: false,
                            UserID: '',
                            Version: undefined
                        });
                    ES('Object', 'assign', false, k, {
                        ENVIRONMENTS: j,
                        isEnvironment: function l(m) {
                            var n = this.getEnvironment();
                            return (m | n) === n;
                        },
                        isCanvasEnvironment: function l() {
                            return this.isEnvironment(j.CANVAS) || this.isEnvironment(j.PAGETAB);
                        }
                    });
                    (function() {
                        var l = /app_runner/.test(window.name) ? j.PAGETAB : /iframe_canvas/.test(window.name) ? j.CANVAS : j.UNKNOWN;
                        if ((l | j.PAGETAB) === l) l = l | j.CANVAS;
                        k.setEnvironment(l);
                    })();
                    f.exports = k;
                }, null);
                __d('sdk.Cookie', ['QueryString', 'sdk.Runtime'], function a(b, c, d, e, f, g, h, i) {
                    var j = null;

                    function k(n, o, p) {
                        n = n + i.getClientID();
                        var q = j && j !== '.';
                        if (q) {
                            document.cookie = n + '=; expires=Wed, 04 Feb 2004 08:00:00 GMT;';
                            document.cookie = n + '=; expires=Wed, 04 Feb 2004 08:00:00 GMT;' + 'domain=' + location.hostname + ';';
                        }
                        var r = new Date(p).toGMTString();
                        document.cookie = n + '=' + o + (o && p === 0 ? '' : '; expires=' + r) + '; path=/' + (q ? '; domain=' + j : '');
                    }

                    function l(n) {
                        n = n + i.getClientID();
                        var o = new RegExp('\\b' + n + '=([^;]*)\\b');
                        return o.test(document.cookie) ? RegExp.$1 : null;
                    }
                    var m = {
                        setDomain: function n(o) {
                            j = o;
                            var p = h.encode({
                                    base_domain: j && j !== '.' ? j : ''
                                }),
                                q = new Date();
                            q.setFullYear(q.getFullYear() + 1);
                            k('fbm_', p, q.getTime());
                        },
                        getDomain: function n() {
                            return j;
                        },
                        loadMeta: function n() {
                            var o = l('fbm_');
                            if (o) {
                                var p = h.decode(o);
                                if (!j) j = p.base_domain;
                                return p;
                            }
                        },
                        loadSignedRequest: function n() {
                            return l('fbsr_');
                        },
                        setSignedRequestCookie: function n(o, p) {
                            if (!o) throw new Error('Value passed to Cookie.setSignedRequestCookie ' + 'was empty.');
                            k('fbsr_', o, p);
                        },
                        clearSignedRequestCookie: function n() {
                            k('fbsr_', '', 0);
                        },
                        setRaw: k,
                        getRaw: l
                    };
                    f.exports = m;
                }, null);
                __d('Miny', [], function a(b, c, d, e, f, g) {
                    var h = 'Miny1',
                        i = 'wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.split(''),
                        j = {
                            encode: function k(l) {
                                if (/^$|[~\\]|__proto__/.test(l)) return l;
                                var m = l.match(/\w+|\W+/g),
                                    n, o = ES('Object', 'create', false, null);
                                for (n = 0; n < m.length; n++) o[m[n]] = (o[m[n]] || 0) + 1;
                                var p = ES('Object', 'keys', false, o);
                                p.sort(function(s, t) {
                                    return o[t] - o[s];
                                });
                                for (n = 0; n < p.length; n++) {
                                    var q = (n - n % 32) / 32;
                                    o[p[n]] = q ? q.toString(32) + i[n % 32] : i[n % 32];
                                }
                                var r = '';
                                for (n = 0; n < m.length; n++) r += o[m[n]];
                                p.unshift(h, p.length);
                                p.push(r);
                                return p.join('~');
                            }
                        };
                    f.exports = j;
                }, null);
                __d('sdk.UA', [], function a(b, c, d, e, f, g) {
                    var h = navigator.userAgent,
                        i = {
                            iphone: /\b(iPhone|iP[ao]d)/.test(h),
                            ipad: /\b(iP[ao]d)/.test(h),
                            android: /Android/i.test(h),
                            nativeApp: /FBAN\/\w+;/i.test(h)
                        },
                        j = /Mobile/i.test(h),
                        k = {
                            ie: '',
                            firefox: '',
                            chrome: '',
                            webkit: '',
                            osx: '',
                            edge: '',
                            operaMini: '',
                            ucWeb: ''
                        },
                        l = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(h);
                    if (l) {
                        k.ie = l[1] ? parseFloat(l[1]) : l[4] ? parseFloat(l[4]) : '';
                        k.firefox = l[2] || '';
                        k.webkit = l[3] || '';
                        if (l[3]) {
                            var m = /(?:Chrome\/(\d+\.\d+))/.exec(h);
                            k.chrome = m ? m[1] : '';
                            var n = /(?:Edge\/(\d+\.\d+))/.exec(h);
                            k.edge = n ? n[1] : '';
                        }
                    }
                    var o = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(h);
                    if (o) k.osx = o[1];
                    var p = /(?:Opera Mini\/(\d+(?:\.\d+)?))/.exec(h);
                    if (p) k.operaMini = p[1];
                    var q = /(?:UCWEB\/(\d+(?:\.\d+))?)/.exec(h);
                    if (q) k.ucWeb = q[1] || '2.0';

                    function r(t) {
                        return ES(t.split('.'), 'map', true, function(u) {
                            return parseFloat(u);
                        });
                    }
                    var s = {};
                    ES(ES('Object', 'keys', false, k), 'map', true, function(t) {
                        s[t] = function() {
                            return parseFloat(k[t]);
                        };
                        s[t].getVersionParts = function() {
                            return r(k[t]);
                        };
                    });
                    ES(ES('Object', 'keys', false, i), 'map', true, function(t) {
                        s[t] = function() {
                            return i[t];
                        };
                    });
                    s.mobile = function() {
                        return i.iphone || i.ipad || i.android || j;
                    };
                    s.mTouch = function() {
                        return i.android || i.iphone || i.ipad;
                    };
                    s.mBasic = function() {
                        return !!(k.ucWeb || k.operaMini);
                    };
                    f.exports = s;
                }, null);
                __d('getBlankIframeSrc', ['sdk.UA'], function a(b, c, d, e, f, g, h) {
                    function i() {
                        return h.ie() < 10 ? 'javascript:false' : 'about:blank';
                    }
                    f.exports = i;
                }, null);
                __d('insertIframe', ['GlobalCallback', 'getBlankIframeSrc', 'guid'], function a(b, c, d, e, f, g, h, i, j) {
                    function k(l) {
                        l.id = l.id || j();
                        l.name = l.name || j();
                        var m = false,
                            n = false,
                            o = function s() {
                                if (m && !n) {
                                    n = true;
                                    l.onload && l.onload(l.root.firstChild);
                                }
                            },
                            p = h.create(o);
                        if (document.attachEvent) {
                            var q = '<iframe' + ' id="' + l.id + '"' + ' name="' + l.name + '"' + (l.title ? ' title="' + l.title + '"' : '') + (l.className ? ' class="' + l.className + '"' : '') + ' style="border:none;' + (l.width ? 'width:' + l.width + 'px;' : '') + (l.height ? 'height:' + l.height + 'px;' : '') + '"' + ' src="' + i() + '"' + ' frameborder="0"' + ' scrolling="no"' + ' allowtransparency="true"' + ' onload="' + p + '()"' + '></iframe>';
                            l.root.innerHTML = '<iframe src="' + i() + '"' + ' frameborder="0"' + ' scrolling="no"' + ' style="height:1px"></iframe>';
                            m = true;
                            setTimeout(function() {
                                l.root.innerHTML = q;
                                l.root.firstChild.src = l.url;
                                l.onInsert && l.onInsert(l.root.firstChild);
                            }, 0);
                        } else {
                            var r = document.createElement('iframe');
                            r.id = l.id;
                            r.name = l.name;
                            r.onload = o;
                            r.scrolling = 'no';
                            r.style.border = 'none';
                            r.style.overflow = 'hidden';
                            if (l.title) r.title = l.title;
                            if (l.className) r.className = l.className;
                            if (l.height !== undefined) r.style.height = l.height + 'px';
                            if (l.width !== undefined)
                                if (l.width == '100%') {
                                    r.style.width = l.width;
                                } else r.style.width = l.width + 'px';
                            l.root.appendChild(r);
                            m = true;
                            r.src = l.url;
                            l.onInsert && l.onInsert(r);
                        }
                    }
                    f.exports = k;
                }, null);
                __d('sdk.domReady', ['sdk.Runtime'], function a(b, c, d, e, f, g, h) {
                    var i, j = 'readyState' in document ? /loaded|complete/.test(document.readyState) : !!document.body;

                    function k() {
                        if (!i) return;
                        var n;
                        while (n = i.shift()) n();
                        i = null;
                    }

                    function l(n) {
                        if (i) {
                            i.push(n);
                            return;
                        } else n();
                    }
                    if (!j) {
                        i = [];
                        if (document.addEventListener) {
                            document.addEventListener('DOMContentLoaded', k, false);
                            window.addEventListener('load', k, false);
                        } else if (document.attachEvent) {
                            document.attachEvent('onreadystatechange', k);
                            window.attachEvent('onload', k);
                        }
                        if (document.documentElement.doScroll && window == window.top) {
                            var m = function n() {
                                try {
                                    h.getRtl() ? document.documentElement.doScroll('right') : document.documentElement.doScroll('left');
                                } catch (o) {
                                    setTimeout(n, 0);
                                    return;
                                }
                                k();
                            };
                            m();
                        }
                    }
                    f.exports = l;
                }, 3);
                __d('sdk.Content', ['Log', 'sdk.UA', 'sdk.domReady'], function a(b, c, d, e, f, g, h, i, j) {
                    var k, l, m = {
                        append: function n(o, p) {
                            if (!p)
                                if (!k) {
                                    k = p = document.getElementById('fb-root');
                                    if (!p) {
                                        h.warn('The "fb-root" div has not been created, auto-creating');
                                        k = p = document.createElement('div');
                                        p.id = 'fb-root';
                                        if (i.ie() || !document.body) {
                                            j(function() {
                                                document.body.appendChild(p);
                                            });
                                        } else document.body.appendChild(p);
                                    }
                                    p.className += ' fb_reset';
                                } else p = k;
                            if (typeof o == 'string') {
                                var q = document.createElement('div');
                                p.appendChild(q).innerHTML = o;
                                return q;
                            } else return p.appendChild(o);
                        },
                        appendHidden: function n(o) {
                            if (!p) {
                                var p = document.createElement('div'),
                                    q = p.style;
                                q.position = 'absolute';
                                q.top = '-10000px';
                                q.width = q.height = 0;
                                p = m.append(p);
                            }
                            return m.append(o, p);
                        },
                        submitToTarget: function n(o, p) {
                            var q = document.createElement('form');
                            q.action = o.url;
                            q.target = o.target;
                            q.method = p ? 'GET' : 'POST';
                            m.appendHidden(q);
                            for (var r in o.params)
                                if (o.params.hasOwnProperty(r)) {
                                    var s = o.params[r];
                                    if (s !== null && s !== undefined) {
                                        var t = document.createElement('input');
                                        t.name = r;
                                        t.value = s;
                                        q.appendChild(t);
                                    }
                                }
                            q.submit();
                            q.parentNode.removeChild(q);
                        }
                    };
                    f.exports = m;
                }, null);
                __d('sdk.Impressions', ['sdk.Content', 'Miny', 'QueryString', 'sdk.Runtime', 'UrlMap', 'getBlankIframeSrc', 'guid', 'insertIframe'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
                    function p(r) {
                        var s = k.getClientID();
                        if (!r.api_key && s) r.api_key = s;
                        r.kid_directed_site = k.getKidDirectedSite();
                        var t = l.resolve('www', true) + '/impression.php/' + n() + '/',
                            u = j.appendToUrl(t, r);
                        if (u.length > 2000)
                            if (r.payload && typeof r.payload === 'string') {
                                var v = i.encode(r.payload);
                                if (v && v.length < r.payload.length) {
                                    r.payload = v;
                                    u = j.appendToUrl(t, r);
                                }
                            }
                        if (u.length <= 2000) {
                            var w = new Image();
                            w.src = u;
                        } else {
                            var x = n(),
                                y = h.appendHidden('');
                            o({
                                url: m(),
                                root: y,
                                name: x,
                                className: 'fb_hidden fb_invisible',
                                onload: function z() {
                                    y.parentNode.removeChild(y);
                                }
                            });
                            h.submitToTarget({
                                url: t,
                                target: x,
                                params: r
                            });
                        }
                    }
                    var q = {
                        log: function r(s, t) {
                            if (!t.source) t.source = 'jssdk';
                            p({
                                lid: s,
                                payload: ES('JSON', 'stringify', false, t)
                            });
                        },
                        impression: p
                    };
                    f.exports = q;
                }, null);
                __d('sdk.Scribe', ['QueryString', 'sdk.Runtime', 'UrlMap'], function a(b, c, d, e, f, g, h, i, j) {
                    function k(m, n) {
                        if (typeof n.extra == 'object') n.extra.revision = i.getRevision();
                        new Image().src = h.appendToUrl(j.resolve('www', true) + '/common/scribe_endpoint.php', {
                            c: m,
                            m: ES('JSON', 'stringify', false, n)
                        });
                    }
                    var l = {
                        log: k
                    };
                    f.exports = l;
                }, null);
                __d('Base64', [], function a(b, c, d, e, f, g) {
                    var h = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

                    function i(m) {
                        m = m.charCodeAt(0) << 16 | m.charCodeAt(1) << 8 | m.charCodeAt(2);
                        return String.fromCharCode(h.charCodeAt(m >>> 18), h.charCodeAt(m >>> 12 & 63), h.charCodeAt(m >>> 6 & 63), h.charCodeAt(m & 63));
                    }
                    var j = '>___?456789:;<=_______' + '\x00\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0b\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19' + '______\x1a\x1b\x1c\x1d\x1e\x1f !"#$%&\'()*+,-./0123';

                    function k(m) {
                        m = j.charCodeAt(m.charCodeAt(0) - 43) << 18 | j.charCodeAt(m.charCodeAt(1) - 43) << 12 | j.charCodeAt(m.charCodeAt(2) - 43) << 6 | j.charCodeAt(m.charCodeAt(3) - 43);
                        return String.fromCharCode(m >>> 16, m >>> 8 & 255, m & 255);
                    }
                    var l = {
                        encode: function m(n) {
                            n = unescape(encodeURI(n));
                            var o = (n.length + 2) % 3;
                            n = (n + '\0\0'.slice(o)).replace(/[\s\S]{3}/g, i);
                            return n.slice(0, n.length + o - 2) + '=='.slice(o);
                        },
                        decode: function m(n) {
                            n = n.replace(/[^A-Za-z0-9+\/]/g, '');
                            var o = n.length + 3 & 3;
                            n = (n + 'AAA'.slice(o)).replace(/..../g, k);
                            n = n.slice(0, n.length + o - 3);
                            try {
                                return decodeURIComponent(escape(n));
                            } catch (p) {
                                throw new Error('Not valid UTF-8');
                            }
                        },
                        encodeObject: function m(n) {
                            return l.encode(ES('JSON', 'stringify', false, n));
                        },
                        decodeObject: function m(n) {
                            return ES('JSON', 'parse', false, l.decode(n));
                        },
                        encodeNums: function m(n) {
                            return String.fromCharCode.apply(String, ES(n, 'map', true, function(o) {
                                return h.charCodeAt((o | -(o > 63)) & -(o > 0) & 63);
                            }));
                        }
                    };
                    f.exports = l;
                }, null);
                __d('sdk.SignedRequest', ['Base64'], function a(b, c, d, e, f, g, h) {
                    function i(k) {
                        if (!k) return null;
                        var l = k.split('.', 2)[1].replace(/\-/g, '+').replace(/\_/g, '/');
                        return h.decodeObject(l);
                    }
                    var j = {
                        parse: i
                    };
                    f.exports = j;
                }, null);
                __d('URIRFC3986', [], function a(b, c, d, e, f, g) {
                    var h = new RegExp('^' + '([^:/?#]+:)?' + '(//' + '([^\\\\/?#@]*@)?' + '(' + '\\[[A-Fa-f0-9:.]+\\]|' + '[^\\/?#:]*' + ')' + '(:[0-9]*)?' + ')?' + '([^?#]*)' + '(\\?[^#]*)?' + '(#.*)?'),
                        i = {
                            parse: function j(k) {
                                if (ES(k, 'trim', true) === '') return null;
                                var l = k.match(h);
                                if (l == null) return null;
                                var m = {};
                                m.uri = l[0] ? l[0] : null;
                                m.scheme = l[1] ? l[1].substr(0, l[1].length - 1) : null;
                                m.authority = l[2] ? l[2].substr(2) : null;
                                m.userinfo = l[3] ? l[3].substr(0, l[3].length - 1) : null;
                                m.host = l[2] ? l[4] : null;
                                m.port = l[5] ? l[5].substr(1) ? parseInt(l[5].substr(1), 10) : null : null;
                                m.path = l[6] ? l[6] : null;
                                m.query = l[7] ? l[7].substr(1) : null;
                                m.fragment = l[8] ? l[8].substr(1) : null;
                                m.isGenericURI = m.authority === null && !!m.scheme;
                                return m;
                            }
                        };
                    f.exports = i;
                }, null);
                __d('createObjectFrom', [], function a(b, c, d, e, f, g) {
                    function h(i, j) {
                        var k = {},
                            l = ES('Array', 'isArray', false, j);
                        if (j === undefined) j = true;
                        for (var m = i.length - 1; m >= 0; m--) k[i[m]] = l ? j[m] : j;
                        return k;
                    }
                    f.exports = h;
                }, null);
                __d('URISchemes', ['createObjectFrom'], function a(b, c, d, e, f, g, h) {
                    var i = h(['blob', 'cmms', 'fb', 'fbatwork', 'fb-ama', 'fb-messenger', 'fb-page-messages', 'fb-pma', 'fbcf', 'fbconnect', 'fbmobilehome', 'fbrpc', 'file', 'ftp', 'http', 'https', 'mailto', 'ms-app', 'intent', 'itms', 'itms-apps', 'itms-services', 'market', 'svn+ssh', 'fbstaging', 'tel', 'sms', 'pebblejs', 'sftp', 'whatsapp', 'moments', 'fblite', 'chrome-extension', 'webcal', 'fb124024574287414', 'fb124024574287414rc', 'fb124024574287414master', 'fb1576585912599779', 'fb929757330408142', 'designpack']),
                        j = {
                            isAllowed: function k(l) {
                                if (!l) return true;
                                return i.hasOwnProperty(l.toLowerCase());
                            }
                        };
                    f.exports = j;
                }, null);
                __d('eprintf', [], function a(b, c, d, e, f, g) {
                    function h(i) {
                        for (var j = arguments.length, k = Array(j > 1 ? j - 1 : 0), l = 1; l < j; l++) k[l - 1] = arguments[l];
                        var m = ES(k, 'map', true, function(p) {
                                return String(p);
                            }),
                            n = i.split('%s').length - 1;
                        if (n !== m.length) return h('eprintf args number mismatch: %s', ES('JSON', 'stringify', false, [i].concat(m)));
                        var o = 0;
                        return i.replace(/%s/g, function() {
                            return String(m[o++]);
                        });
                    }
                    f.exports = h;
                }, null);
                __d('ex', ['eprintf'], function a(b, c, d, e, f, g, h) {
                    function i(j) {
                        for (var k = arguments.length, l = Array(k > 1 ? k - 1 : 0), m = 1; m < k; m++) l[m - 1] = arguments[m];
                        var n = ES(l, 'map', true, function(p) {
                                return String(p);
                            }),
                            o = j.split('%s').length - 1;
                        if (o !== n.length) return i('ex args number mismatch: %s', ES('JSON', 'stringify', false, [j].concat(n)));
                        return i._prefix + ES('JSON', 'stringify', false, [j].concat(n)) + i._suffix;
                    }
                    i._prefix = '<![EX[';
                    i._suffix = ']]>';
                    f.exports = i;
                }, null);
                __d('invariant', ['ex', 'sprintf'], (function a(b, c, d, e, f, g, h, i) {
                    'use strict';
                    var j = h;

                    function k(l, m) {
                        if (!l) {
                            var n = void 0;
                            if (m === undefined) {
                                n = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
                            } else {
                                for (var o = arguments.length, p = Array(o > 2 ? o - 2 : 0), q = 2; q < o; q++) p[q - 2] = arguments[q];
                                n = new Error(j.apply(undefined, [m].concat(p)));
                                n.name = 'Invariant Violation';
                                n.messageWithParams = [m].concat(p);
                            }
                            n.framesToPop = 1;
                            throw n;
                        }
                    }
                    f.exports = k;
                }), null);
                __d('setHostSubdomain', [], (function a(b, c, d, e, f, g) {
                    function h(i, j) {
                        var k = i.split('.');
                        if (k.length < 3) {
                            k.unshift(j);
                        } else k[0] = j;
                        return k.join('.');
                    }
                    f.exports = h;
                }), null);
                __d('URIBase', ['URIRFC3986', 'URISchemes', 'ex', 'invariant', 'setHostSubdomain'], function a(b, c, d, e, f, g, h, i, j, k, l) {
                    var m = new RegExp('[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f' + '\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF' + '\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]'),
                        n = new RegExp('^(?:[^/]*:|' + '[\\x00-\\x1f]*/[\\x00-\\x1f]*/)');

                    function o(r, s, t, u) {
                        if (!s) return true;
                        if (s instanceof q) {
                            r.setProtocol(s.getProtocol());
                            r.setDomain(s.getDomain());
                            r.setPort(s.getPort());
                            r.setPath(s.getPath());
                            r.setQueryData(u.deserialize(u.serialize(s.getQueryData())));
                            r.setFragment(s.getFragment());
                            r.setIsGeneric(s.getIsGeneric());
                            r.setForceFragmentSeparator(s.getForceFragmentSeparator());
                            return true;
                        }
                        s = ES(s.toString(), 'trim', true);
                        var v = h.parse(s) || {
                            fragment: null,
                            scheme: null
                        };
                        if (!t && !i.isAllowed(v.scheme)) return false;
                        r.setProtocol(v.scheme || '');
                        if (!t && m.test(v.host || '')) return false;
                        r.setDomain(v.host || '');
                        r.setPort(v.port || '');
                        r.setPath(v.path || '');
                        if (t) {
                            r.setQueryData(u.deserialize(v.query || '') || {});
                        } else try {
                            r.setQueryData(u.deserialize(v.query || '') || {});
                        } catch (w) {
                            return false;
                        }
                        r.setFragment(v.fragment || '');
                        if (v.fragment === '') r.setForceFragmentSeparator(true);
                        r.setIsGeneric(v.isGenericURI || false);
                        if (v.userinfo !== null)
                            if (t) {
                                throw new Error(j('URI.parse: invalid URI (userinfo is not allowed in a URI): %s', r.toString()));
                            } else return false;
                        if (!r.getDomain() && ES(r.getPath(), 'indexOf', true, '\\') !== -1)
                            if (t) {
                                throw new Error(j('URI.parse: invalid URI (no domain but multiple back-slashes): %s', r.toString()));
                            } else return false;
                        if (!r.getProtocol() && n.test(s))
                            if (t) {
                                throw new Error(j('URI.parse: invalid URI (unsafe protocol-relative URLs): %s', r.toString()));
                            } else return false;
                        if (r.getDomain() && r.getPath() && !ES(r.getPath(), 'startsWith', true, '/'))
                            if (t) {
                                throw new Error(j('URI.parse: invalid URI (domain and path where path lacks leading slash): %s', r.toString()));
                            } else return false;
                        return true;
                    }
                    var p = [];
                    q.isValidURI = function(r, s) {
                        'use strict';
                        return o(new q(null, s), r, false, s);
                    };

                    function q(r, s) {
                        'use strict';
                        s || k(0);
                        this.$URIBase9 = s;
                        this.$URIBase7 = '';
                        this.$URIBase1 = '';
                        this.$URIBase6 = '';
                        this.$URIBase5 = '';
                        this.$URIBase3 = '';
                        this.$URIBase4 = false;
                        this.$URIBase8 = {};
                        this.$URIBase2 = false;
                        o(this, r, true, s);
                    }
                    q.prototype.setProtocol = function(r) {
                        'use strict';
                        i.isAllowed(r) || k(0);
                        this.$URIBase7 = r;
                        return this;
                    };
                    q.prototype.getProtocol = function() {
                        'use strict';
                        return (this.$URIBase7 || '').toLowerCase();
                    };
                    q.prototype.setSecure = function(r) {
                        'use strict';
                        return this.setProtocol(r ? 'https' : 'http');
                    };
                    q.prototype.isSecure = function() {
                        'use strict';
                        return this.getProtocol() === 'https';
                    };
                    q.prototype.setDomain = function(r) {
                        'use strict';
                        if (m.test(r)) throw new Error(j('URI.setDomain: unsafe domain specified: %s for url %s', r, this.toString()));
                        this.$URIBase1 = r;
                        return this;
                    };
                    q.prototype.getDomain = function() {
                        'use strict';
                        return this.$URIBase1;
                    };
                    q.prototype.setPort = function(r) {
                        'use strict';
                        this.$URIBase6 = r;
                        return this;
                    };
                    q.prototype.getPort = function() {
                        'use strict';
                        return this.$URIBase6;
                    };
                    q.prototype.setPath = function(r) {
                        'use strict';
                        this.$URIBase5 = r;
                        return this;
                    };
                    q.prototype.getPath = function() {
                        'use strict';
                        return this.$URIBase5;
                    };
                    q.prototype.addQueryData = function(r, s) {
                        'use strict';
                        if (Object.prototype.toString.call(r) === '[object Object]') {
                            ES('Object', 'assign', false, this.$URIBase8, r);
                        } else this.$URIBase8[r] = s;
                        return this;
                    };
                    q.prototype.setQueryData = function(r) {
                        'use strict';
                        this.$URIBase8 = r;
                        return this;
                    };
                    q.prototype.getQueryData = function() {
                        'use strict';
                        return this.$URIBase8;
                    };
                    q.prototype.removeQueryData = function(r) {
                        'use strict';
                        if (!ES('Array', 'isArray', false, r)) r = [r];
                        for (var s = 0, t = r.length; s < t; ++s) delete this.$URIBase8[r[s]];
                        return this;
                    };
                    q.prototype.setFragment = function(r) {
                        'use strict';
                        this.$URIBase3 = r;
                        this.setForceFragmentSeparator(false);
                        return this;
                    };
                    q.prototype.getFragment = function() {
                        'use strict';
                        return this.$URIBase3;
                    };
                    q.prototype.setForceFragmentSeparator = function(r) {
                        'use strict';
                        this.$URIBase2 = r;
                        return this;
                    };
                    q.prototype.getForceFragmentSeparator = function() {
                        'use strict';
                        return this.$URIBase2;
                    };
                    q.prototype.setIsGeneric = function(r) {
                        'use strict';
                        this.$URIBase4 = r;
                        return this;
                    };
                    q.prototype.getIsGeneric = function() {
                        'use strict';
                        return this.$URIBase4;
                    };
                    q.prototype.isEmpty = function() {
                        'use strict';
                        return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || ES('Object', 'keys', false, this.getQueryData()).length > 0 || this.getFragment());
                    };
                    q.prototype.toString = function() {
                        'use strict';
                        var r = this;
                        for (var s = 0; s < p.length; s++) r = p[s](r);
                        return r.$URIBase10();
                    };
                    q.prototype.$URIBase10 = function() {
                        'use strict';
                        var r = '',
                            s = this.getProtocol();
                        if (s) r += s + ':' + (this.getIsGeneric() ? '' : '//');
                        var t = this.getDomain();
                        if (t) r += t;
                        var u = this.getPort();
                        if (u) r += ':' + u;
                        var v = this.getPath();
                        if (v) {
                            r += v;
                        } else if (r) r += '/';
                        var w = this.$URIBase9.serialize(this.getQueryData());
                        if (w) r += '?' + w;
                        var x = this.getFragment();
                        if (x) {
                            r += '#' + x;
                        } else if (this.getForceFragmentSeparator()) r += '#';
                        return r;
                    };
                    q.registerFilter = function(r) {
                        'use strict';
                        p.push(r);
                    };
                    q.prototype.getOrigin = function() {
                        'use strict';
                        var r = this.getPort();
                        return this.getProtocol() + '://' + this.getDomain() + (r ? ':' + r : '');
                    };
                    q.prototype.getQualifiedURIBase = function() {
                        'use strict';
                        return new q(this, this.$URIBase9).qualify();
                    };
                    q.prototype.qualify = function() {
                        'use strict';
                        if (!this.getDomain()) {
                            var r = new q(window.location.href, this.$URIBase9);
                            this.setProtocol(r.getProtocol()).setDomain(r.getDomain()).setPort(r.getPort());
                        }
                        return this;
                    };
                    q.prototype.setSubdomain = function(r) {
                        'use strict';
                        var s = this.qualify().getDomain();
                        return this.setDomain(l(s, r));
                    };
                    q.prototype.getSubdomain = function() {
                        'use strict';
                        if (!this.getDomain()) return '';
                        var r = this.getDomain().split('.');
                        if (r.length <= 2) {
                            return '';
                        } else return r[0];
                    };
                    f.exports = q;
                }, null);
                __d('sdk.URI', ['Assert', 'QueryString', 'URIBase'], function a(b, c, d, e, f, g, h, i, j) {
                    var k, l, m = /\.facebook\.com$/,
                        n = {
                            serialize: function p(q) {
                                return q ? i.encode(q) : '';
                            },
                            deserialize: function p(q) {
                                return q ? i.decode(q) : {};
                            }
                        };
                    k = babelHelpers.inherits(o, j);
                    l = k && k.prototype;

                    function o(p) {
                        'use strict';
                        h.isString(p, 'The passed argument was of invalid type.');
                        l.constructor.call(this, p, n);
                    }
                    o.prototype.isFacebookURI = function() {
                        'use strict';
                        return m.test(this.getDomain());
                    };
                    o.prototype.valueOf = function() {
                        'use strict';
                        return this.toString();
                    };
                    f.exports = o;
                }, null);
                __d('Queue', [], function a(b, c, d, e, f, g) {
                    var h = {};

                    function i(j) {
                        'use strict';
                        this._opts = babelHelpers['extends']({
                            interval: 0,
                            processor: null
                        }, j);
                        this._queue = [];
                        this._stopped = true;
                    }
                    i.prototype._dispatch = function(j) {
                        'use strict';
                        if (this._stopped || this._queue.length === 0) return;
                        if (!this._opts.processor) {
                            this._stopped = true;
                            throw new Error('No processor available');
                        }
                        if (this._opts.interval) {
                            this._opts.processor.call(this, this._queue.shift());
                            this._timeout = setTimeout(ES(this._dispatch, 'bind', true, this), this._opts.interval);
                        } else
                            while (this._queue.length) this._opts.processor.call(this, this._queue.shift());
                    };
                    i.prototype.enqueue = function(j) {
                        'use strict';
                        if (this._opts.processor && !this._stopped) {
                            this._opts.processor.call(this, j);
                        } else this._queue.push(j);
                        return this;
                    };
                    i.prototype.start = function(j) {
                        'use strict';
                        if (j) this._opts.processor = j;
                        this._stopped = false;
                        this._dispatch();
                        return this;
                    };
                    i.prototype.isStarted = function() {
                        'use strict';
                        return !this._stopped;
                    };
                    i.prototype.dispatch = function() {
                        'use strict';
                        this._dispatch(true);
                    };
                    i.prototype.stop = function(j) {
                        'use strict';
                        this._stopped = true;
                        if (j) clearTimeout(this._timeout);
                        return this;
                    };
                    i.prototype.merge = function(j, k) {
                        'use strict';
                        this._queue[k ? 'unshift' : 'push'].apply(this._queue, j._queue);
                        j._queue = [];
                        this._dispatch();
                        return this;
                    };
                    i.prototype.getLength = function() {
                        'use strict';
                        return this._queue.length;
                    };
                    i.get = function(j, k) {
                        'use strict';
                        var l;
                        if (j in h) {
                            l = h[j];
                        } else l = h[j] = new i(k);
                        return l;
                    };
                    i.exists = function(j) {
                        'use strict';
                        return j in h;
                    };
                    i.remove = function(j) {
                        'use strict';
                        return delete h[j];
                    };
                    f.exports = i;
                }, null);
                __d('DOMEventListener', ['invariant', 'wrapFunction'], function a(b, c, d, e, f, g, h, i) {
                    var j = void 0,
                        k = void 0;
                    if (window.addEventListener) {
                        j = function m(n, o, p) {
                            p.wrapper = i(p, 'entry', 'DOMEventListener.add ' + o);
                            n.addEventListener(o, p.wrapper, false);
                        };
                        k = function m(n, o, p) {
                            n.removeEventListener(o, p.wrapper, false);
                        };
                    } else if (window.attachEvent) {
                        j = function m(n, o, p) {
                            p.wrapper = i(p, 'entry', 'DOMEventListener.add ' + o);
                            n.attachEvent || h(0);
                            n.attachEvent('on' + o, p.wrapper);
                        };
                        k = function m(n, o, p) {
                            n.detachEvent || h(0);
                            n.detachEvent('on' + o, p.wrapper);
                        };
                    } else k = j = function m() {};
                    var l = {
                        add: function m(n, o, p) {
                            j(n, o, p);
                            return {
                                remove: function q() {
                                    k(n, o, p);
                                }
                            };
                        },
                        remove: k
                    };
                    f.exports = l;
                }, null);
                __d('UserAgent_DEPRECATED', [], function a(b, c, d, e, f, g) {
                    var h = false,
                        i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;

                    function x() {
                        if (h) return;
                        h = true;
                        var z = navigator.userAgent,
                            aa = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(z),
                            ba = /(Mac OS X)|(Windows)|(Linux)/.exec(z);
                        t = /\b(iPhone|iP[ao]d)/.exec(z);
                        u = /\b(iP[ao]d)/.exec(z);
                        r = /Android/i.exec(z);
                        v = /FBAN\/\w+;/i.exec(z);
                        w = /Mobile/i.exec(z);
                        s = !!/Win64/.exec(z);
                        if (aa) {
                            i = aa[1] ? parseFloat(aa[1]) : aa[5] ? parseFloat(aa[5]) : NaN;
                            if (i && document && document.documentMode) i = document.documentMode;
                            var ca = /(?:Trident\/(\d+.\d+))/.exec(z);
                            n = ca ? parseFloat(ca[1]) + 4 : i;
                            j = aa[2] ? parseFloat(aa[2]) : NaN;
                            k = aa[3] ? parseFloat(aa[3]) : NaN;
                            l = aa[4] ? parseFloat(aa[4]) : NaN;
                            if (l) {
                                aa = /(?:Chrome\/(\d+\.\d+))/.exec(z);
                                m = aa && aa[1] ? parseFloat(aa[1]) : NaN;
                            } else m = NaN;
                        } else i = j = k = m = l = NaN;
                        if (ba) {
                            if (ba[1]) {
                                var da = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(z);
                                o = da ? parseFloat(da[1].replace('_', '.')) : true;
                            } else o = false;
                            p = !!ba[2];
                            q = !!ba[3];
                        } else o = p = q = false;
                    }
                    var y = {
                        ie: function z() {
                            return x() || i;
                        },
                        ieCompatibilityMode: function z() {
                            return x() || n > i;
                        },
                        ie64: function z() {
                            return y.ie() && s;
                        },
                        firefox: function z() {
                            return x() || j;
                        },
                        opera: function z() {
                            return x() || k;
                        },
                        webkit: function z() {
                            return x() || l;
                        },
                        safari: function z() {
                            return y.webkit();
                        },
                        chrome: function z() {
                            return x() || m;
                        },
                        windows: function z() {
                            return x() || p;
                        },
                        osx: function z() {
                            return x() || o;
                        },
                        linux: function z() {
                            return x() || q;
                        },
                        iphone: function z() {
                            return x() || t;
                        },
                        mobile: function z() {
                            return x() || t || u || r || w;
                        },
                        nativeApp: function z() {
                            return x() || v;
                        },
                        android: function z() {
                            return x() || r;
                        },
                        ipad: function z() {
                            return x() || u;
                        }
                    };
                    f.exports = y;
                }, null);
                __d('htmlSpecialChars', [], (function a(b, c, d, e, f, g) {
                    var h = /&/g,
                        i = /</g,
                        j = />/g,
                        k = /"/g,
                        l = /'/g;

                    function m(n) {
                        if (typeof n == 'undefined' || n === null || !n.toString) return '';
                        if (n === false) {
                            return '0';
                        } else if (n === true) return '1';
                        return n.toString().replace(h, '&amp;').replace(k, '&quot;').replace(l, '&#039;').replace(i, '&lt;').replace(j, '&gt;');
                    }
                    f.exports = m;
                }), null);
                __d('Flash', ['DOMEventListener', 'DOMWrapper', 'QueryString', 'UserAgent_DEPRECATED', 'guid', 'htmlSpecialChars'], function a(b, c, d, e, f, g, h, i, j, k, l, m) {
                    var n = {},
                        o, p = i.getWindow().document;

                    function q(v) {
                        var w = p.getElementById(v);
                        if (w) w.parentNode.removeChild(w);
                        delete n[v];
                    }

                    function r() {
                        for (var v in n)
                            if (n.hasOwnProperty(v)) q(v);
                    }

                    function s(v) {
                        return v.replace(/\d+/g, function(w) {
                            return '000'.substring(w.length) + w;
                        });
                    }

                    function t(v) {
                        if (!o) {
                            if (k.ie() >= 9) h.add(window, 'unload', r);
                            o = true;
                        }
                        n[v] = v;
                    }
                    var u = {
                        embed: function v(w, x, y, z) {
                            var aa = l();
                            w = m(w).replace(/&amp;/g, '&');
                            y = babelHelpers['extends']({
                                allowscriptaccess: 'always',
                                flashvars: z,
                                movie: w
                            }, y);
                            if (typeof y.flashvars == 'object') y.flashvars = j.encode(y.flashvars);
                            var ba = [];
                            for (var ca in y)
                                if (y.hasOwnProperty(ca) && y[ca]) ba.push('<param name="' + m(ca) + '" value="' + m(y[ca]) + '">');
                            var da = x.appendChild(p.createElement('span')),
                                ea = '<object ' + (k.ie() ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ' : 'type="application/x-shockwave-flash"') + 'data="' + w + '" ' + (y.height ? 'height="' + y.height + '" ' : '') + (y.width ? 'width="' + y.width + '" ' : '') + 'id="' + aa + '">' + ba.join('') + '</object>';
                            da.innerHTML = ea;
                            var fa = da.firstChild;
                            t(aa);
                            return fa;
                        },
                        remove: q,
                        getVersion: function v() {
                            var w = 'Shockwave Flash',
                                x = 'application/x-shockwave-flash',
                                y = 'ShockwaveFlash.ShockwaveFlash',
                                z;
                            if (navigator.plugins && typeof navigator.plugins[w] == 'object') {
                                var aa = navigator.plugins[w].description;
                                if (aa && navigator.mimeTypes && navigator.mimeTypes[x] && navigator.mimeTypes[x].enabledPlugin) z = aa.match(/\d+/g);
                            }
                            if (!z) try {
                                z = new ActiveXObject(y).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);
                                z = Array.prototype.slice.call(z, 1);
                            } catch (ba) {}
                            return z;
                        },
                        getVersionString: function v() {
                            var w = u.getVersion();
                            return w ? w.join('.') : '';
                        },
                        checkMinVersion: function v(w) {
                            var x = u.getVersion();
                            if (!x) return false;
                            return s(x.join('.')) >= s(w);
                        },
                        isAvailable: function v() {
                            return !!u.getVersion();
                        }
                    };
                    f.exports = u;
                }, null);
                __d("emptyFunction", [], function a(b, c, d, e, f, g) {
                    function h(j) {
                        return function() {
                            return j;
                        };
                    }
                    var i = function j() {};
                    i.thatReturns = h;
                    i.thatReturnsFalse = h(false);
                    i.thatReturnsTrue = h(true);
                    i.thatReturnsNull = h(null);
                    i.thatReturnsThis = function() {
                        return this;
                    };
                    i.thatReturnsArgument = function(j) {
                        return j;
                    };
                    f.exports = i;
                }, null);
                __d('XDM', ['DOMEventListener', 'DOMWrapper', 'emptyFunction', 'Flash', 'GlobalCallback', 'guid', 'Log', 'UserAgent_DEPRECATED', 'wrapFunction'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
                    var q = {},
                        r = {
                            transports: []
                        },
                        s = i.getWindow();

                    function t(w) {
                        var x = {},
                            y = w.length,
                            z = r.transports;
                        while (y--) x[w[y]] = 1;
                        y = z.length;
                        while (y--) {
                            var aa = z[y],
                                ba = q[aa];
                            if (!x[aa] && ba.isAvailable()) return aa;
                        }
                    }
                    var u = {
                        register: function w(x, y) {
                            n.debug('Registering %s as XDM provider', x);
                            r.transports.push(x);
                            q[x] = y;
                        },
                        create: function w(x) {
                            if (!x.whenReady && !x.onMessage) {
                                n.error('An instance without whenReady or onMessage makes no sense');
                                throw new Error('An instance without whenReady or ' + 'onMessage makes no sense');
                            }
                            if (!x.channel) {
                                n.warn('Missing channel name, selecting at random');
                                x.channel = m();
                            }
                            if (!x.whenReady) x.whenReady = j;
                            if (!x.onMessage) x.onMessage = j;
                            var y = x.transport || t(x.blacklist || []),
                                z = q[y];
                            if (z && z.isAvailable()) {
                                n.debug('%s is available', y);
                                z.init(x);
                                return y;
                            }
                        }
                    };
                    u.register('flash', function() {
                        var w = false,
                            x, y = false,
                            z = 15000,
                            aa;
                        return {
                            isAvailable: function ba() {
                                return k.checkMinVersion('8.0.24');
                            },
                            init: function ba(ca) {
                                n.debug('init flash: ' + ca.channel);
                                var da = {
                                    send: function ga(ha, ia, ja, ka) {
                                        n.debug('sending to: %s (%s)', ia, ka);
                                        x.postMessage(ha, ia, ka);
                                    }
                                };
                                if (w) {
                                    ca.whenReady(da);
                                    return;
                                }
                                var ea = ca.root.appendChild(s.document.createElement('div')),
                                    fa = l.create(function() {
                                        l.remove(fa);
                                        clearTimeout(aa);
                                        n.info('xdm.swf called the callback');
                                        var ga = l.create(function(ha, ia) {
                                            ha = decodeURIComponent(ha);
                                            ia = decodeURIComponent(ia);
                                            n.debug('received message %s from %s', ha, ia);
                                            ca.onMessage(ha, ia);
                                        }, 'xdm.swf:onMessage');
                                        x.init(ca.channel, ga);
                                        ca.whenReady(da);
                                    }, 'xdm.swf:load');
                                x = k.embed(ca.flashUrl, ea, null, {
                                    protocol: location.protocol.replace(':', ''),
                                    host: location.host,
                                    callback: fa,
                                    log: y
                                });
                                aa = setTimeout(function() {
                                    n.warn('The Flash component did not load within %s ms - ' + 'verify that the container is not set to hidden or invisible ' + 'using CSS as this will cause some browsers to not load ' + 'the components', z);
                                }, z);
                                w = true;
                            }
                        };
                    }());
                    var v = /\.facebook\.com(\/|$)/;
                    u.register('postmessage', function() {
                        var w = false;
                        return {
                            isAvailable: function x() {
                                return !!s.postMessage;
                            },
                            init: function x(y) {
                                n.debug('init postMessage: ' + y.channel);
                                var z = '_FB_' + y.channel,
                                    aa = {
                                        send: function ba(ca, da, ea, fa) {
                                            if (s === ea) {
                                                n.error('Invalid windowref, equal to window (self)');
                                                throw new Error();
                                            }
                                            n.debug('sending to: %s (%s)', da, fa);
                                            var ba = function ga() {
                                                ea.postMessage('_FB_' + fa + ca, da);
                                            };
                                            if (o.ie() == 8 || o.ieCompatibilityMode()) {
                                                setTimeout(ba, 0);
                                            } else ba();
                                        }
                                    };
                                if (w) {
                                    y.whenReady(aa);
                                    return;
                                }
                                h.add(s, 'message', p(function(event) {
                                    var ba = event.data,
                                        ca = event.origin || 'native';
                                    if (!/^(https?:\/\/|native$)/.test(ca)) {
                                        n.debug('Received message from invalid origin type: %s', ca);
                                        return;
                                    }
                                    if (ca !== 'native' && !(v.test(location.hostname) || v.test(event.origin))) return;
                                    if (typeof ba != 'string') {
                                        n.warn('Received message of type %s from %s, expected a string', typeof ba, ca);
                                        return;
                                    }
                                    n.debug('received message %s from %s', ba, ca);
                                    if (ba.substring(0, z.length) == z) ba = ba.substring(z.length);
                                    y.onMessage(ba, ca);
                                }, 'entry', 'onMessage'));
                                y.whenReady(aa);
                                w = true;
                            }
                        };
                    }());
                    f.exports = u;
                }, null);
                __d('isFacebookURI', [], function a(b, c, d, e, f, g) {
                    var h = null,
                        i = ['http', 'https'];

                    function j(k) {
                        if (!h) h = new RegExp('(^|\\.)facebook\\.com$', 'i');
                        if (k.isEmpty() && k.toString() !== '#') return false;
                        if (!k.getDomain() && !k.getProtocol()) return true;
                        return ES(i, 'indexOf', true, k.getProtocol()) !== -1 && h.test(k.getDomain());
                    }
                    j.setRegex = function(k) {
                        h = k;
                    };
                    f.exports = j;
                }, null);
                __d('sdk.Event', [], function a(b, c, d, e, f, g) {
                    var h = {
                        SUBSCRIBE: 'event.subscribe',
                        UNSUBSCRIBE: 'event.unsubscribe',
                        subscribers: function i() {
                            if (!this._subscribersMap) this._subscribersMap = {};
                            return this._subscribersMap;
                        },
                        subscribe: function i(j, k) {
                            var l = this.subscribers();
                            if (!l[j]) {
                                l[j] = [k];
                            } else if (ES(l[j], 'indexOf', true, k) == -1) l[j].push(k);
                            if (j != this.SUBSCRIBE && j != this.UNSUBSCRIBE) this.fire(this.SUBSCRIBE, j, l[j]);
                        },
                        unsubscribe: function i(j, k) {
                            var l = this.subscribers()[j];
                            if (l) ES(l, 'forEach', true, function(m, n) {
                                if (m == k) l.splice(n, 1);
                            });
                            if (j != this.SUBSCRIBE && j != this.UNSUBSCRIBE) this.fire(this.UNSUBSCRIBE, j, l);
                        },
                        monitor: function i(j, k) {
                            if (!k()) {
                                var l = this,
                                    m = function n() {
                                        if (k.apply(k, arguments)) l.unsubscribe(j, n);
                                    };
                                this.subscribe(j, m);
                            }
                        },
                        clear: function i(j) {
                            delete this.subscribers()[j];
                        },
                        fire: function i(j) {
                            var k = Array.prototype.slice.call(arguments, 1),
                                l = this.subscribers()[j];
                            if (l) ES(l, 'forEach', true, function(m) {
                                if (m) m.apply(this, k);
                            });
                        }
                    };
                    f.exports = h;
                }, null);
                __d('JSONRPC', ['Log'], function a(b, c, d, e, f, g, h) {
                    function i(j) {
                        'use strict';
                        this.$JSONRPC1 = 0;
                        this.$JSONRPC2 = {};
                        this.remote = ES(function(k) {
                            this.$JSONRPC3 = k;
                            return this.remote;
                        }, 'bind', true, this);
                        this.local = {};
                        this.$JSONRPC4 = j;
                    }
                    i.prototype.stub = function(j) {
                        'use strict';
                        this.remote[j] = ES(function() {
                            var k = {
                                jsonrpc: '2.0',
                                method: j
                            };
                            for (var l = arguments.length, m = Array(l), n = 0; n < l; n++) m[n] = arguments[n];
                            if (typeof m[m.length - 1] == 'function') {
                                k.id = ++this.$JSONRPC1;
                                this.$JSONRPC2[k.id] = m.pop();
                            }
                            k.params = m;
                            this.$JSONRPC4(ES('JSON', 'stringify', false, k), this.$JSONRPC3 || {
                                method: j
                            });
                        }, 'bind', true, this);
                    };
                    i.prototype.read = function(j, k) {
                        'use strict';
                        var l = ES('JSON', 'parse', false, j),
                            m = l.id;
                        if (!l.method) {
                            if (!this.$JSONRPC2[m]) {
                                h.warn('Could not find callback %s', m);
                                return;
                            }
                            var n = this.$JSONRPC2[m];
                            delete this.$JSONRPC2[m];
                            delete l.id;
                            delete l.jsonrpc;
                            n(l);
                            return;
                        }
                        var o = this,
                            p = this.local[l.method],
                            q;
                        if (m) {
                            q = function t(u, v) {
                                var w = {
                                    jsonrpc: '2.0',
                                    id: m
                                };
                                w[u] = v;
                                setTimeout(function() {
                                    o.$JSONRPC4(ES('JSON', 'stringify', false, w), k);
                                }, 0);
                            };
                        } else q = function t() {};
                        if (!p) {
                            h.error('Method "%s" has not been defined', l.method);
                            q('error', {
                                code: -32601,
                                message: 'Method not found',
                                data: l.method
                            });
                            return;
                        }
                        l.params.push(ES(q, 'bind', true, null, 'result'));
                        l.params.push(ES(q, 'bind', true, null, 'error'));
                        try {
                            var s = p.apply(k || null, l.params);
                            if (typeof s !== 'undefined') q('result', s);
                        } catch (r) {
                            h.error('Invokation of RPC method %s resulted in the error: %s', l.method, r.message);
                            q('error', {
                                code: -32603,
                                message: 'Internal error',
                                data: r.message
                            });
                        }
                    };
                    f.exports = i;
                }, null);
                __d('sdk.RPC', ['Assert', 'JSONRPC', 'Queue'], function a(b, c, d, e, f, g, h, i, j) {
                    var k = new j(),
                        l = new i(function(n) {
                            k.enqueue(n);
                        }),
                        m = {
                            local: l.local,
                            remote: l.remote,
                            stub: ES(l.stub, 'bind', true, l),
                            setInQueue: function n(o) {
                                h.isInstanceOf(j, o);
                                o.start(function(p) {
                                    l.read(p);
                                });
                            },
                            getOutQueue: function n() {
                                return k;
                            }
                        };
                    f.exports = m;
                }, null);
                __d('hasNamePropertyBug', ['guid', 'UserAgent_DEPRECATED'], function a(b, c, d, e, f, g, h, i) {
                    var j = i.ie() ? undefined : false;

                    function k() {
                        var m = document.createElement("form"),
                            n = m.appendChild(document.createElement("input"));
                        n.name = h();
                        j = n !== m.elements[n.name];
                        m = n = null;
                        return j;
                    }

                    function l() {
                        return typeof j === 'undefined' ? k() : j;
                    }
                    f.exports = l;
                }, null);
                __d("isNumberLike", [], function a(b, c, d, e, f, g) {
                    function h(i) {
                        return !isNaN(parseFloat(i)) && isFinite(i);
                    }
                    f.exports = h;
                }, null);
                __d('sdk.createIframe', ['DOMEventListener', 'getBlankIframeSrc', 'guid', 'hasNamePropertyBug', 'isNumberLike'], function a(b, c, d, e, f, g, h, i, j, k, l) {
                    function m(n) {
                        n = ES('Object', 'assign', false, {}, n);
                        var o, p = n.name || j(),
                            q = n.root,
                            r = n.style || {
                                border: 'none'
                            },
                            s = n.url,
                            t = n.onload,
                            u = n.onerror;
                        if (k()) {
                            o = document.createElement('<iframe name="' + p + '"/>');
                        } else {
                            o = document.createElement('iframe');
                            o.name = p;
                        }
                        delete n.style;
                        delete n.name;
                        delete n.url;
                        delete n.root;
                        delete n.onload;
                        delete n.onerror;
                        var v = ES('Object', 'assign', false, {
                            frameBorder: 0,
                            allowTransparency: true,
                            allowFullscreen: true,
                            scrolling: 'no'
                        }, n);
                        if (v.width && l(v.width)) o.width = v.width + 'px';
                        if (v.height && l(v.height)) o.height = v.height + 'px';
                        delete v.height;
                        delete v.width;
                        for (var w in v)
                            if (v.hasOwnProperty(w)) o.setAttribute(w, v[w]);
                        ES('Object', 'assign', false, o.style, r);
                        o.src = i();
                        q.appendChild(o);
                        if (t) var x = h.add(o, 'load', function() {
                            x.remove();
                            t();
                        });
                        if (u) var y = h.add(o, 'error', function() {
                            y.remove();
                            u();
                        });
                        o.src = s;
                        return o;
                    }
                    f.exports = m;
                }, null);
                __d('sdk.FeatureFunctor', ['invariant'], function a(b, c, d, e, f, g, h) {
                    function i(k, l, m) {
                        if (k.features && l in k.features) {
                            var n = k.features[l];
                            if (typeof n === 'object' && typeof n.rate === 'number') {
                                if (n.rate && Math.random() * 100 <= n.rate) {
                                    return n.value || true;
                                } else return n.value ? null : false;
                            } else return n;
                        }
                        return m;
                    }

                    function j(k) {
                        return function(l, m) {
                            arguments.length >= 2 || h(0);
                            return i(k, l, m);
                        };
                    }
                    f.exports = {
                        create: j
                    };
                }, null);
                __d('sdk.feature', ['sdk.FeatureFunctor', 'JSSDKConfig'], function a(b, c, d, e, f, g, h, i) {
                    f.exports = h.create(i);
                }, null);
                __d('sdk.XD', ['sdk.Content', 'sdk.Event', 'Log', 'QueryString', 'Queue', 'sdk.RPC', 'sdk.Runtime', 'sdk.Scribe', 'sdk.URI', 'UrlMap', 'JSSDKXDConfig', 'XDM', 'isFacebookURI', 'sdk.createIframe', 'sdk.feature', 'guid'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w) {
                    var x = new l(),
                        y = new l(),
                        z = new l(),
                        aa, ba, ca = w(),
                        da = r.useCdn ? 'cdn' : 'www',
                        ea = v('use_bundle', false) ? r.XdBundleUrl : r.XdUrl,
                        fa = q.resolve(da, false) + ea,
                        ga = q.resolve(da, true) + ea,
                        ha = function va() {
                            if ('origin' in location)
                                if (location.origin && location.origin !== 'null') {
                                    return location.origin;
                                } else if (window !== window.parent) try {
                                var xa = parent.location.origin;
                                if (xa && xa !== 'null') return xa;
                            } catch (wa) {}
                            return location.protocol + '//' + location.host;
                        },
                        ia = w(),
                        ja = ha(),
                        ka, la = false,
                        ma = 'Facebook Cross Domain Communication Frame',
                        na = {},
                        oa = new l();
                    m.setInQueue(oa);

                    function pa(va) {
                        j.info('Remote XD can talk to facebook.com (%s)', va);
                        n.setEnvironment(va === 'canvas' ? n.ENVIRONMENTS.CANVAS : n.ENVIRONMENTS.PAGETAB);
                    }

                    function qa(va, wa) {
                        if (!wa) {
                            j.error('No senderOrigin');
                            throw new Error();
                        }
                        var xa = /^https?/.exec(wa)[0];
                        switch (va.xd_action) {
                            case 'proxy_ready':
                                var ya, za;
                                if (xa == 'https') {
                                    ya = z;
                                    za = ba;
                                    n.setLoggedIntoFacebook(va.logged_in === 'true');
                                } else {
                                    ya = y;
                                    za = aa;
                                }
                                if (va.registered) {
                                    pa(va.registered);
                                    x = ya.merge(x);
                                }
                                j.info('Proxy ready, starting queue %s containing %s messages', xa + 'ProxyQueue', ya.getLength());
                                ya.start(function(bb) {
                                    ka.send(typeof bb === 'string' ? bb : k.encode(bb), wa, za.contentWindow, ia + '_' + xa);
                                });
                                break;
                            case 'plugin_ready':
                                j.info('Plugin %s ready, protocol: %s', va.name, xa);
                                na[va.name] = {
                                    protocol: xa
                                };
                                if (l.exists(va.name)) {
                                    var ab = l.get(va.name);
                                    j.debug('Enqueuing %s messages for %s in %s', ab.getLength(), va.name, xa + 'ProxyQueue');
                                    (xa == 'https' ? z : y).merge(ab);
                                }
                                break;
                        }
                        if (va.data) ra(va.data, wa);
                    }

                    function ra(va, wa) {
                        if (wa && wa !== 'native' && !t(new p(wa))) return;
                        if (typeof va == 'string') {
                            if (/^FB_RPC:/.test(va)) {
                                oa.enqueue(va.substring(7));
                                return;
                            }
                            if (va.substring(0, 1) == '{') {
                                try {
                                    va = ES('JSON', 'parse', false, va);
                                } catch (xa) {
                                    j.warn('Failed to decode %s as JSON', va);
                                    return;
                                }
                            } else va = k.decode(va);
                        }
                        if (!wa)
                            if (va.xd_sig == ca) wa = va.xd_origin;
                        if (va.xd_action) {
                            qa(va, wa);
                            return;
                        }
                        if (va.access_token) n.setSecure(/^https/.test(ja));
                        if (va.cb) {
                            var ya = ua._callbacks[va.cb];
                            if (!ua._forever[va.cb]) delete ua._callbacks[va.cb];
                            if (ya) ya(va);
                        }
                    }

                    function sa(va, wa) {
                        if (va == 'facebook') {
                            wa.relation = 'parent.parent';
                            x.enqueue(wa);
                        } else {
                            wa.relation = 'parent.frames["' + va + '"]';
                            var xa = na[va];
                            if (xa) {
                                j.debug('Enqueuing message for plugin %s in %s', va, xa.protocol + 'ProxyQueue');
                                (xa.protocol == 'https' ? z : y).enqueue(wa);
                            } else {
                                j.debug('Buffering message for plugin %s', va);
                                l.get(va).enqueue(wa);
                            }
                        }
                    }
                    m.getOutQueue().start(function(va) {
                        sa('facebook', 'FB_RPC:' + va);
                    });

                    function ta(va) {
                        if (la) return;
                        var wa = h.appendHidden(document.createElement('div')),
                            xa = s.create({
                                blacklist: null,
                                root: wa,
                                channel: ia,
                                flashUrl: r.Flash.path,
                                whenReady: function ya(za) {
                                    ka = za;
                                    var ab = {
                                            channel: ia,
                                            origin: ja,
                                            transport: xa,
                                            xd_name: va
                                        },
                                        bb = '#' + k.encode(ab);
                                    if (n.getSecure() !== true) aa = u({
                                        url: fa + bb,
                                        name: 'fb_xdm_frame_http',
                                        id: 'fb_xdm_frame_http',
                                        root: wa,
                                        'aria-hidden': true,
                                        title: ma,
                                        tabindex: -1
                                    });
                                    ba = u({
                                        url: ga + bb,
                                        name: 'fb_xdm_frame_https',
                                        id: 'fb_xdm_frame_https',
                                        root: wa,
                                        'aria-hidden': true,
                                        title: ma,
                                        tabindex: -1
                                    });
                                },
                                onMessage: ra
                            });
                        if (!xa) o.log('jssdk_error', {
                            appId: n.getClientID(),
                            error: 'XD_TRANSPORT',
                            extra: {
                                message: 'Failed to create a valid transport'
                            }
                        });
                        la = true;
                    }
                    var ua = {
                        rpc: m,
                        _callbacks: {},
                        _forever: {},
                        _channel: ia,
                        _origin: ja,
                        onMessage: ra,
                        recv: ra,
                        init: ta,
                        sendToFacebook: sa,
                        inform: function va(wa, xa, ya, za) {
                            sa('facebook', {
                                method: wa,
                                params: ES('JSON', 'stringify', false, xa || {}),
                                behavior: za || 'p',
                                relation: ya
                            });
                        },
                        handler: function va(wa, xa, ya, za) {
                            var ab = '#' + k.encode({
                                cb: this.registerCallback(wa, ya, za),
                                origin: ja + '/' + ia,
                                domain: location.hostname,
                                relation: xa || 'opener'
                            });
                            return (location.protocol == 'https:' ? ga : fa) + ab;
                        },
                        registerCallback: function va(wa, xa, ya) {
                            ya = ya || w();
                            if (xa) ua._forever[ya] = true;
                            ua._callbacks[ya] = wa;
                            return ya;
                        },
                        getXDArbiterURL: function va(wa) {
                            return wa ? ga : fa;
                        }
                    };
                    i.subscribe('init:post', function(va) {
                        ta(va.xdProxyName);
                        var wa = v('xd_timeout', false);
                        if (wa) setTimeout(function() {
                            var xa = ba && !!aa == y.isStarted() && !!ba == z.isStarted();
                            if (!xa) o.log('jssdk_error', {
                                appId: n.getClientID(),
                                error: 'XD_INITIALIZATION',
                                extra: {
                                    message: 'Failed to initialize in ' + wa + 'ms'
                                }
                            });
                        }, wa);
                    });
                    f.exports = ua;
                }, null);
                __d('sdk.getContextType', ['sdk.Runtime', 'sdk.UA'], function a(b, c, d, e, f, g, h, i) {
                    function j() {
                        if (i.nativeApp()) return 3;
                        if (i.mobile()) return 2;
                        if (h.isEnvironment(h.ENVIRONMENTS.CANVAS)) return 5;
                        return 1;
                    }
                    f.exports = j;
                }, null);
                __d('sdk.Auth', ['sdk.Cookie', 'sdk.createIframe', 'DOMWrapper', 'sdk.feature', 'sdk.getContextType', 'guid', 'sdk.Impressions', 'Log', 'ObservableMixin', 'sdk.Runtime', 'sdk.Scribe', 'sdk.SignedRequest', 'UrlMap', 'sdk.URI', 'sdk.XD'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
                    var w = 'fblo_',
                        x = 365 * 24 * 60 * 60 * 1000,
                        y, z, aa = new p();

                    function ba(ja, ka) {
                        var la = q.getUserID(),
                            ma = '';
                        if (ja)
                            if (ja.userID) {
                                ma = ja.userID;
                            } else if (ja.signedRequest) {
                            var na = s.parse(ja.signedRequest);
                            if (na && na.user_id) ma = na.user_id;
                        }
                        var oa = q.getLoginStatus(),
                            pa = oa === 'unknown' && ja || q.getUseCookie() && q.getCookieUserID() !== ma,
                            qa = la && !ja,
                            ra = ja && la && la != ma,
                            sa = ja != y,
                            ta = ka != (oa || 'unknown');
                        q.setLoginStatus(ka);
                        q.setAccessToken(ja && ja.accessToken || null);
                        q.setUserID(ma);
                        y = ja;
                        var ua = {
                            authResponse: ja,
                            status: ka
                        };
                        if (qa || ra) aa.inform('logout', ua);
                        if (pa || ra) aa.inform('login', ua);
                        if (sa) aa.inform('authresponse.change', ua);
                        if (ta) aa.inform('status.change', ua);
                        return ua;
                    }

                    function ca() {
                        return y;
                    }

                    function da(ja, ka, la) {
                        return function(ma) {
                            var na;
                            if (ma && ma.access_token) {
                                var oa = s.parse(ma.signed_request);
                                ka = {
                                    accessToken: ma.access_token,
                                    userID: oa.user_id,
                                    expiresIn: parseInt(ma.expires_in, 10),
                                    signedRequest: ma.signed_request
                                };
                                if (ma.granted_scopes) ka.grantedScopes = ma.granted_scopes;
                                if (q.getUseCookie()) {
                                    var pa = ka.expiresIn === 0 ? 0 : ES('Date', 'now', false) + ka.expiresIn * 1000,
                                        qa = h.getDomain();
                                    if (!qa && ma.base_domain) h.setDomain('.' + ma.base_domain);
                                    h.setSignedRequestCookie(ma.signed_request, pa);
                                    ea();
                                }
                                na = 'connected';
                                ba(ka, na);
                            } else if (la === 'logout' || la === 'login_status') {
                                if (ma.error && ma.error === 'not_authorized') {
                                    na = 'not_authorized';
                                } else na = 'unknown';
                                ba(null, na);
                                if (q.getUseCookie()) h.clearSignedRequestCookie();
                                if (la === 'logout') {
                                    fa();
                                    r.log('jssdk_error', {
                                        appId: q.getClientID(),
                                        error: 'PLATFORM_AUTH_LOGOUT',
                                        extra: {
                                            args: {
                                                fblo: true
                                            }
                                        }
                                    });
                                }
                            }
                            if (ma && ma.https == 1) q.setSecure(true);
                            if (ja) ja({
                                authResponse: ka,
                                status: q.getLoginStatus()
                            });
                            return ka;
                        };
                    }

                    function ea() {
                        h.setRaw(w, '', 0);
                    }

                    function fa() {
                        h.setRaw(w, 'y', ES('Date', 'now', false) + x);
                    }

                    function ga(ja) {
                        var ka, la = ES('Date', 'now', false);
                        if (z) {
                            clearTimeout(z);
                            z = null;
                        }
                        var ma = h.getRaw(w) === 'y';
                        if (k('getloginstatus_tracking', true)) r.log('jssdk_error', {
                            appId: q.getClientID(),
                            error: 'PLATFORM_AUTH_GETLOGINSTATUS',
                            extra: {
                                args: {
                                    fblo: ma
                                }
                            }
                        });
                        if (ma) {
                            var na = 'unknown';
                            ba(null, na);
                            if (ja) ja({
                                authResponse: null,
                                status: na
                            });
                            return;
                        }
                        var oa = da(ja, y, 'login_status'),
                            pa = new u(t.resolve('www', true) + '/connect/ping').setQueryData({
                                client_id: q.getClientID(),
                                response_type: 'token,signed_request,code',
                                domain: location.hostname,
                                origin: l(),
                                redirect_uri: v.handler(function(qa) {
                                    if (k('e2e_ping_tracking', true)) {
                                        var ra = {
                                            init: la,
                                            close: ES('Date', 'now', false),
                                            method: 'ping'
                                        };
                                        o.debug('e2e: %s', ES('JSON', 'stringify', false, ra));
                                        n.log(114, {
                                            payload: ra
                                        });
                                    }
                                    ka.parentNode.removeChild(ka);
                                    if (oa(qa)) z = setTimeout(function() {
                                        ga(function() {});
                                    }, 1200000);
                                }, 'parent'),
                                sdk: 'joey',
                                kid_directed_site: q.getKidDirectedSite()
                            });
                        ka = i({
                            root: j.getRoot(),
                            name: m(),
                            url: pa.toString(),
                            style: {
                                display: 'none'
                            }
                        });
                    }
                    var ha;

                    function ia(ja, ka) {
                        if (!q.getClientID()) {
                            o.warn('FB.getLoginStatus() called before calling FB.init().');
                            return;
                        }
                        if (ja)
                            if (!ka && ha == 'loaded') {
                                ja({
                                    status: q.getLoginStatus(),
                                    authResponse: ca()
                                });
                                return;
                            } else aa.subscribe('FB.loginStatus', ja);
                        if (!ka && ha == 'loading') return;
                        ha = 'loading';
                        var la = function ma(na) {
                            ha = 'loaded';
                            aa.inform('FB.loginStatus', na);
                            aa.clearSubscribers('FB.loginStatus');
                        };
                        ga(la);
                    }
                    ES('Object', 'assign', false, aa, {
                        removeLogoutState: ea,
                        getLoginStatus: ia,
                        fetchLoginStatus: ga,
                        setAuthResponse: ba,
                        getAuthResponse: ca,
                        parseSignedRequest: s.parse,
                        xdResponseWrapper: da
                    });
                    f.exports = aa;
                }, null);
                __d('sdk.DOM', ['Assert', 'sdk.UA', 'sdk.domReady'], function a(b, c, d, e, f, g, h, i, j) {
                    var k = {};

                    function l(z, aa) {
                        var ba = z.getAttribute(aa) || z.getAttribute(aa.replace(/_/g, '-')) || z.getAttribute(aa.replace(/-/g, '_')) || z.getAttribute(aa.replace(/-/g, '')) || z.getAttribute(aa.replace(/_/g, '')) || z.getAttribute('data-' + aa) || z.getAttribute('data-' + aa.replace(/_/g, '-')) || z.getAttribute('data-' + aa.replace(/-/g, '_')) || z.getAttribute('data-' + aa.replace(/-/g, '')) || z.getAttribute('data-' + aa.replace(/_/g, ''));
                        return ba ? String(ba) : null;
                    }

                    function m(z, aa) {
                        var ba = l(z, aa);
                        return ba ? /^(true|1|yes|on)$/.test(ba) : null;
                    }

                    function n(z, aa) {
                        h.isTruthy(z, 'element not specified');
                        h.isString(aa);
                        try {
                            return String(z[aa]);
                        } catch (ba) {
                            throw new Error('Could not read property ' + aa + ' : ' + ba.message);
                        }
                    }

                    function o(z, aa) {
                        h.isTruthy(z, 'element not specified');
                        h.isString(aa);
                        try {
                            z.innerHTML = aa;
                        } catch (ba) {
                            throw new Error('Could not set innerHTML : ' + ba.message);
                        }
                    }

                    function p(z, aa) {
                        h.isTruthy(z, 'element not specified');
                        h.isString(aa);
                        var ba = ' ' + n(z, 'className') + ' ';
                        return ES(ba, 'indexOf', true, ' ' + aa + ' ') >= 0;
                    }

                    function q(z, aa) {
                        h.isTruthy(z, 'element not specified');
                        h.isString(aa);
                        if (!p(z, aa)) z.className = n(z, 'className') + ' ' + aa;
                    }

                    function r(z, aa) {
                        h.isTruthy(z, 'element not specified');
                        h.isString(aa);
                        var ba = new RegExp('\\s*' + aa, 'g');
                        z.className = ES(n(z, 'className').replace(ba, ''), 'trim', true);
                    }

                    function s(z, aa, ba) {
                        h.isString(z);
                        aa = aa || document.body;
                        ba = ba || '*';
                        if (aa.querySelectorAll) return ES('Array', 'from', false, aa.querySelectorAll(ba + '.' + z));
                        var ca = aa.getElementsByTagName(ba),
                            da = [];
                        for (var ea = 0, fa = ca.length; ea < fa; ea++)
                            if (p(ca[ea], z)) da[da.length] = ca[ea];
                        return da;
                    }

                    function t(z, aa) {
                        h.isTruthy(z, 'element not specified');
                        h.isString(aa);
                        aa = aa.replace(/-(\w)/g, function(da, ea) {
                            return ea.toUpperCase();
                        });
                        var ba = z.currentStyle || document.defaultView.getComputedStyle(z, null),
                            ca = ba[aa];
                        if (/backgroundPosition?/.test(aa) && /top|left/.test(ca)) ca = '0%';
                        return ca;
                    }

                    function u(z, aa, ba) {
                        h.isTruthy(z, 'element not specified');
                        h.isString(aa);
                        aa = aa.replace(/-(\w)/g, function(ca, da) {
                            return da.toUpperCase();
                        });
                        z.style[aa] = ba;
                    }

                    function v(z, aa) {
                        var ba = true;
                        for (var ca = 0, da; da = aa[ca++];)
                            if (!(da in k)) {
                                ba = false;
                                k[da] = true;
                            }
                        if (ba) return;
                        if (i.ie() < 11) {
                            try {
                                document.createStyleSheet().cssText = z;
                            } catch (ea) {
                                if (document.styleSheets[0]) document.styleSheets[0].cssText += z;
                            }
                        } else {
                            var fa = document.createElement('style');
                            fa.type = 'text/css';
                            fa.textContent = z;
                            document.getElementsByTagName('head')[0].appendChild(fa);
                        }
                    }

                    function w() {
                        var z = document.documentElement && document.compatMode == 'CSS1Compat' ? document.documentElement : document.body;
                        return {
                            scrollTop: z.scrollTop || document.body.scrollTop,
                            scrollLeft: z.scrollLeft || document.body.scrollLeft,
                            width: window.innerWidth ? window.innerWidth : z.clientWidth,
                            height: window.innerHeight ? window.innerHeight : z.clientHeight
                        };
                    }

                    function x(z) {
                        h.isTruthy(z, 'element not specified');
                        var aa = 0,
                            ba = 0;
                        do {
                            aa += z.offsetLeft;
                            ba += z.offsetTop;
                        } while (z = z.offsetParent);
                        return {
                            x: aa,
                            y: ba
                        };
                    }
                    var y = {
                        containsCss: p,
                        addCss: q,
                        removeCss: r,
                        getByClass: s,
                        getStyle: t,
                        setStyle: u,
                        getAttr: l,
                        getBoolAttr: m,
                        getProp: n,
                        html: o,
                        addCssRules: v,
                        getViewportInfo: w,
                        getPosition: x,
                        ready: j
                    };
                    f.exports = y;
                }, null);
                __d('normalizeError', ['sdk.UA'], function a(b, c, d, e, f, g, h) {
                    function i(j) {
                        var k = {
                            line: j.lineNumber || j.line,
                            message: j.message,
                            name: j.name,
                            script: j.fileName || j.sourceURL || j.script,
                            stack: j.stackTrace || j.stack
                        };
                        k._originalError = j;
                        var l = /([\w:\.\/]+\.js):(\d+)/.exec(j.stack);
                        if (h.chrome() && l) {
                            k.script = l[1];
                            k.line = parseInt(l[2], 10);
                        }
                        for (var m in k) k[m] == null && delete k[m];
                        return k;
                    }
                    f.exports = i;
                }, null);
                __d('sdk.ErrorHandling', ['ManagedError', 'sdk.Runtime', 'sdk.Scribe', 'sdk.feature', 'normalizeError', 'wrapFunction'], function a(b, c, d, e, f, g, h, i, j, k, l, m) {
                    var n = k('error_handling', false),
                        o = '';

                    function p(v) {
                        var w = v._originalError;
                        delete v._originalError;
                        j.log('jssdk_error', {
                            appId: i.getClientID(),
                            error: v.name || v.message,
                            extra: v
                        });
                        throw w;
                    }

                    function q(v, w) {
                        return function() {
                            if (!n) return v.apply(this, arguments);
                            try {
                                o = w;
                                return v.apply(this, arguments);
                            } catch (x) {
                                if (x instanceof h) throw x;
                                var y = l(x);
                                y.entry = w;
                                var z = ES(Array.prototype.slice.call(arguments), 'map', true, function(aa) {
                                    var ba = Object.prototype.toString.call(aa);
                                    return /^\[object (String|Number|Boolean|Object|Date)\]$/.test(ba) ? aa : aa.toString();
                                });
                                y.args = ES('JSON', 'stringify', false, z).substring(0, 200);
                                p(y);
                            } finally {
                                o = '';
                            }
                        };
                    }

                    function r(v) {
                        if (!v.__wrapper) v.__wrapper = function() {
                            try {
                                return v.apply(this, arguments);
                            } catch (w) {
                                window.setTimeout(function() {
                                    throw w;
                                }, 0);
                                return false;
                            }
                        };
                        return v.__wrapper;
                    }

                    function s(v) {
                        try {
                            return v && v.callee && v.callee.caller ? v.callee.caller.name : '';
                        } catch (w) {
                            return '';
                        }
                    }

                    function t(v, w) {
                        return function(x, y) {
                            var z = w + ':' + (o || '[global]') + ':' + (x.name || '[anonymous]' + s(arguments));
                            return v(m(x, 'entry', z), y);
                        };
                    }
                    if (n) {
                        setTimeout = t(setTimeout, 'setTimeout');
                        setInterval = t(setInterval, 'setInterval');
                        m.setWrapper(q, 'entry');
                    }
                    var u = {
                        guard: q,
                        unguard: r
                    };
                    f.exports = u;
                }, null);
                __d('sdk.Insights', ['sdk.Impressions'], (function a(b, c, d, e, f, g, h) {
                    var i = {
                        TYPE: {
                            NOTICE: 'notice',
                            WARNING: 'warn',
                            ERROR: 'error'
                        },
                        CATEGORY: {
                            DEPRECATED: 'deprecated',
                            APIERROR: 'apierror'
                        },
                        log: function j(k, l, m) {
                            var n = {
                                source: 'jssdk',
                                type: k,
                                category: l,
                                payload: m
                            };
                            h.log(113, n);
                        },
                        impression: h.impression
                    };
                    f.exports = i;
                }), null);
                __d('FB', ['sdk.Auth', 'JSSDKCssConfig', 'dotAccess', 'sdk.domReady', 'sdk.DOM', 'sdk.ErrorHandling', 'sdk.Content', 'DOMWrapper', 'GlobalCallback', 'sdk.Insights', 'Log', 'sdk.Runtime', 'sdk.Scribe', 'JSSDKConfig'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
                    var v = void 0,
                        w = void 0,
                        x = j(u, 'api.mode'),
                        y = {};
                    v = window.FB = {};
                    var z = {};
                    r.level = 0;
                    p.setPrefix('FB.__globalCallbacks');
                    var aa = document.createElement('div');
                    o.setRoot(aa);
                    k(function() {
                        r.info('domReady');
                        n.appendHidden(aa);
                        if (i.rules) l.addCssRules(i.rules, i.components);
                    });
                    s.subscribe('AccessToken.change', function(da) {
                        if (!da && s.getLoginStatus() === 'connected') h.getLoginStatus(null, true);
                    });
                    if (j(u, 'api.whitelist.length')) {
                        w = {};
                        ES(u.api.whitelist, 'forEach', true, function(da) {
                            w[da] = 1;
                        });
                    }

                    function ba(da, ea, fa, ga) {
                        var ha;
                        if (/^_/.test(fa)) {
                            ha = 'hide';
                        } else if (w && !w[ea]) ha = x;
                        switch (ha) {
                            case 'hide':
                                return;
                            case 'stub':
                                return function() {
                                    r.warn('The method FB.%s has been removed from the JS SDK.', ea);
                                };
                            default:
                                return m.guard(function() {
                                    if (ha === 'warn') {
                                        r.warn('The method FB.%s is not officially supported by ' + 'Facebook and access to it will soon be removed.', ea);
                                        if (!y.hasOwnProperty(ea)) {
                                            q.log(q.TYPE.WARNING, q.CATEGORY.DEPRECATED, 'FB.' + ea);
                                            t.log('jssdk_error', {
                                                appId: s.getClientID(),
                                                error: 'Private method used',
                                                extra: {
                                                    args: ea
                                                }
                                            });
                                            y[ea] = true;
                                        }
                                    }

                                    function ia(pa) {
                                        if (ES('Array', 'isArray', false, pa)) return ES(pa, 'map', true, ia);
                                        if (pa && typeof pa === 'object' && pa.__wrapped) return pa.__wrapped;
                                        return typeof pa === 'function' && /^function/.test(pa.toString()) ? m.unguard(pa) : pa;
                                    }
                                    var ja = ES(Array.prototype.slice.call(arguments), 'map', true, ia),
                                        ka = da.apply(ga, ja),
                                        la, ma = true;
                                    if (ka && typeof ka === 'object') {
                                        la = ES('Object', 'create', false, ka);
                                        la.__wrapped = ka;
                                        for (var na in ka) {
                                            var oa = ka[na];
                                            if (typeof oa !== 'function' || na === 'constructor') continue;
                                            ma = false;
                                            la[na] = ba(oa, ea + ':' + na, na, ka);
                                        }
                                    }
                                    if (!ma) return la;
                                    return ma ? ka : la;
                                }, ea);
                        }
                    }

                    function ca(da, ea) {
                        var fa = da ? j(v, da, true) : v;
                        ES(ES('Object', 'keys', false, ea), 'forEach', true, function(ga) {
                            var ha = ea[ga];
                            if (typeof ha === 'function') {
                                var ia = (da ? da + '.' : '') + ga,
                                    ja = ba(ha, ia, ga, ea);
                                if (ja) fa[ga] = ja;
                            } else if (typeof ha === 'object' || typeof ha === 'number') {
                                ia = (da ? da + '.' : '') + ga;
                                if (w && w[ia]) fa[ga] = ha;
                            }
                        });
                    }
                    s.setSecure(function() {
                        var da = /iframe_canvas|app_runner/.test(window.name),
                            ea = /dialog/.test(window.name);
                        if (location.protocol == 'https:' && (window == top || !(da || ea))) return true;
                        if (/_fb_https?/.test(window.name)) return ES(window.name, 'indexOf', true, '_fb_https') != -1;
                    }());
                    ES('Object', 'assign', false, z, {
                        provide: ca
                    });
                    f.exports = z;
                }, null);
                __d('ArgumentError', ['ManagedError'], function a(b, c, d, e, f, g, h) {
                    function i(j, k) {
                        h.prototype.constructor.apply(this, arguments);
                    }
                    i.prototype = new h();
                    i.prototype.constructor = i;
                    f.exports = i;
                }, null);
                __d('errorCode', [], function a(b, c, d, e, f, g) {
                    'use strict';

                    function h(i) {
                        throw new Error('errorCode' + '("' + i + '"): This should not happen. Oh noes!');
                    }
                    f.exports = h;
                }, null);
                __d('sdk.safelyParseResponse', ['errorCode'], function a(b, c, d, e, f, g, h) {
                    'use strict';

                    function i(k) {
                        try {
                            return k === null ? j : ES('JSON', 'parse', false, k);
                        } catch (l) {
                            return j;
                        }
                    }
                    var j = {
                        error: {
                            code: 1,
                            error_subcode: 1357046,
                            message: 'Received Invalid JSON reply.',
                            type: 'http'
                        }
                    };
                    i.ERROR = j;
                    f.exports = i;
                }, null);
                __d('CORSRequest', ['wrapFunction', 'QueryString', 'errorCode', 'sdk.safelyParseResponse'], function a(b, c, d, e, f, g, h, i, j, k) {
                    function l(o, p) {
                        if (!self.XMLHttpRequest) return null;
                        var q = new XMLHttpRequest(),
                            r = function w() {};
                        if ('withCredentials' in q) {
                            q.open(o, p, true);
                            q.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                        } else if (self.XDomainRequest) {
                            q = new XDomainRequest();
                            try {
                                q.open(o, p);
                                q.onprogress = q.ontimeout = r;
                            } catch (s) {
                                return null;
                            }
                        } else return null;
                        var t = {
                                send: function w(x) {
                                    q.send(x);
                                }
                            },
                            u = h(function() {
                                u = r;
                                if ('onload' in t) t.onload(q);
                            }, 'entry', 'XMLHttpRequest:load'),
                            v = h(function() {
                                v = r;
                                if ('onerror' in t) t.onerror(q);
                            }, 'entry', 'XMLHttpRequest:error');
                        q.onload = function() {
                            u();
                        };
                        q.onerror = function() {
                            v();
                        };
                        q.onreadystatechange = function() {
                            if (q.readyState == 4)
                                if (q.status == 200) {
                                    u();
                                } else v();
                        };
                        return t;
                    }

                    function m(o, p, q, r) {
                        q.suppress_http_code = 1;
                        var s = i.encode(q);
                        if (p != 'post') {
                            o = i.appendToUrl(o, s);
                            s = '';
                        }
                        var t = l(p, o);
                        if (!t) return false;
                        t.onload = function(u) {
                            r(k(u.responseText));
                        };
                        t.onerror = function(u) {
                            if (u.responseText) {
                                r(k(u.responseText));
                            } else r({
                                error: {
                                    code: 1,
                                    error_subcode: 1357045,
                                    message: 'unknown error (empty response)',
                                    status: u.status,
                                    type: 'http'
                                }
                            });
                        };
                        t.send(s);
                        return true;
                    }
                    var n = {
                        execute: m
                    };
                    f.exports = n;
                }, null);
                __d('FlashRequest', ['DOMWrapper', 'Flash', 'GlobalCallback', 'QueryString', 'Queue'], function a(b, c, d, e, f, g, h, i, j, k, l) {
                    var m, n = {},
                        o, p;

                    function q() {
                        if (!o) throw new Error('swfUrl has not been set');
                        var t = j.create(function() {
                                m.start(function(v) {
                                    var w = p.execute(v.method, v.url, v.body);
                                    if (!w) throw new Error('Could create request');
                                    n[w] = v.callback;
                                });
                            }),
                            u = j.create(function(v, w, x) {
                                var y;
                                try {
                                    y = ES('JSON', 'parse', false, decodeURIComponent(x));
                                } catch (z) {
                                    y = {
                                        error: {
                                            type: 'SyntaxError',
                                            message: z.message,
                                            status: w,
                                            raw: x
                                        }
                                    };
                                }
                                n[v](y);
                                delete n[v];
                            });
                        p = i.embed(o, h.getRoot(), null, {
                            log: false,
                            initCallback: t,
                            requestCallback: u
                        });
                    }

                    function r(t, u, v, w) {
                        v.suppress_http_code = 1;
                        if (!v.method) v.method = u;
                        var x = k.encode(v);
                        if (u === 'get' && t.length + x.length < 2000) {
                            t = k.appendToUrl(t, x);
                            x = '';
                        } else u = 'post';
                        if (!m) {
                            if (!i.isAvailable()) return false;
                            m = new l();
                            q();
                        }
                        m.enqueue({
                            method: u,
                            url: t,
                            body: x,
                            callback: w
                        });
                        return true;
                    }
                    var s = {
                        setSwfUrl: function t(u) {
                            o = u;
                        },
                        execute: r
                    };
                    f.exports = s;
                }, null);
                __d('JSONPRequest', ['DOMWrapper', 'GlobalCallback', 'QueryString'], function a(b, c, d, e, f, g, h, i, j) {
                    var k = 2000;

                    function l(n, o, p, q) {
                        var r = document.createElement('script'),
                            s = function u(v) {
                                s = function w() {};
                                i.remove(p.callback);
                                q(v);
                                r.parentNode.removeChild(r);
                            };
                        p.callback = i.create(s);
                        if (!p.method) p.method = o;
                        n = j.appendToUrl(n, p);
                        if (n.length > k) {
                            i.remove(p.callback);
                            return false;
                        }
                        r.onerror = function() {
                            s({
                                error: {
                                    type: 'http',
                                    message: 'unknown error'
                                }
                            });
                        };
                        var t = function u() {
                            setTimeout(function() {
                                s({
                                    error: {
                                        type: 'http',
                                        message: 'unknown error'
                                    }
                                });
                            }, 0);
                        };
                        if (r.addEventListener) {
                            r.addEventListener('load', t, false);
                        } else r.onreadystatechange = function() {
                            if (/loaded|complete/.test(this.readyState)) t();
                        };
                        r.src = n;
                        h.getRoot().appendChild(r);
                        return true;
                    }
                    var m = {
                        execute: l,
                        MAX_QUERYSTRING_LENGTH: k
                    };
                    f.exports = m;
                }, null);
                __d('flattenObject', [], function a(b, c, d, e, f, g) {
                    function h(i) {
                        var j = {};
                        for (var k in i)
                            if (i.hasOwnProperty(k)) {
                                var l = i[k];
                                if (null === l || undefined === l) {
                                    continue;
                                } else if (typeof l == 'string') {
                                    j[k] = l;
                                } else j[k] = ES('JSON', 'stringify', false, l);
                            }
                        return j;
                    }
                    f.exports = h;
                }, null);
                __d('ApiClient', ['ArgumentError', 'Assert', 'CORSRequest', 'FlashRequest', 'flattenObject', 'JSONPRequest', 'Log', 'ObservableMixin', 'QueryString', 'sprintf', 'sdk.URI', 'UrlMap', 'ApiClientConfig', 'invariant', 'sdk.safelyParseResponse'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
                    var w, x, y, z = m.MAX_QUERYSTRING_LENGTH,
                        aa = {
                            get: true,
                            post: true,
                            'delete': true,
                            put: true
                        },
                        ba = {
                            fql_query: true,
                            fql_multiquery: true,
                            friends_get: true,
                            notifications_get: true,
                            stream_get: true,
                            users_getinfo: true
                        },
                        ca = ['jsonp', 'cors', 'flash'],
                        da = [],
                        ea = [],
                        fa = null,
                        ga = 0,
                        ha = [],
                        ia = 0,
                        ja = 50,
                        ka = 105440539523;

                    function la(va, wa, xa, ya) {
                        var za = ia !== 0 && ga >= ia;
                        if (za) {
                            ha.push(function() {
                                return la(va, wa, xa, ya);
                            });
                            ta.inform('request.queued', va, wa, xa);
                            return;
                        }
                        ga++;
                        if (y) xa = ES('Object', 'assign', false, {}, y, xa);
                        xa.pretty = xa.pretty || 0;
                        xa = l(xa);
                        var ab = {
                                jsonp: m,
                                cors: j,
                                flash: k
                            },
                            bb = {},
                            cb = xa.access_token || w;
                        if (cb) bb.access_token = cb;
                        if (xa.routing_control) bb.routing_control = xa.routing_control;
                        var db = ES('Object', 'keys', false, bb);
                        if (db.length > 0) {
                            va = p.appendToUrl(va, bb);
                            ES(db, 'forEach', true, function(ib) {
                                return delete xa[ib];
                            });
                        }
                        var eb;
                        if (xa.transport) {
                            eb = [xa.transport];
                            delete xa.transport;
                        } else eb = ca;
                        for (var fb = 0; fb < eb.length; fb++) {
                            var gb = ab[eb[fb]],
                                hb = ES('Object', 'assign', false, {}, xa);
                            if (gb.execute(va, wa, hb, ya)) return;
                        }
                        ya({
                            error: {
                                type: 'no-transport',
                                message: 'Could not find a usable transport for request'
                            }
                        });
                    }

                    function ma(va, wa, xa, ya, za, ab) {
                        if (ab && ab.error) ta.inform('request.error', wa, xa, ya, ab, ES('Date', 'now', false) - za);
                        ta.inform('request.complete', wa, xa, ya, ab, ES('Date', 'now', false) - za);
                        ga--;
                        if (va) va(ab);
                        var bb = ha.length > 0 && ga < ia;
                        if (bb) {
                            var cb = ha.shift();
                            cb();
                        }
                    }

                    function na(va) {
                        var wa = va.shift();
                        i.isString(wa, 'Invalid path');
                        if (!/^https?/.test(wa) && wa.charAt(0) !== '/') wa = '/' + wa;
                        var xa, ya = {};
                        try {
                            xa = new r(wa);
                        } catch (za) {
                            throw new h(za.message, za);
                        }
                        ES(va, 'forEach', true, function(db) {
                            return ya[typeof db] = db;
                        });
                        var ab = (ya.string || 'get').toLowerCase();
                        i.isTrue(aa.hasOwnProperty(ab), q('Invalid method passed to ApiClient: %s', ab));
                        var bb = ya['function'];
                        if (!bb) n.warn('No callback passed to the ApiClient');
                        if (ya.object) xa.addQueryData(l(ya.object));
                        var cb = xa.getQueryData();
                        cb.method = ab;
                        return {
                            uri: xa,
                            callback: bb,
                            params: cb
                        };
                    }

                    function oa() {
                        for (var va = arguments.length, wa = Array(va), xa = 0; xa < va; xa++) wa[xa] = arguments[xa];
                        var ya = na(wa),
                            za = ya.uri,
                            ab = ya.callback,
                            bb = ya.params,
                            cb = bb.method;
                        if (ua(za, cb)) cb = 'post';
                        var db = za.getProtocol() && za.getDomain() ? za.setQueryData({}).toString() : s.resolve('graph') + za.getPath();
                        ta.inform('request.prepare', db, bb);
                        la(db, cb == 'get' ? 'get' : 'post', bb, ES(ma, 'bind', true, null, ab, za.getPath(), cb, bb, ES('Date', 'now', false)));
                    }

                    function pa(va) {
                        var wa = na(va),
                            xa = wa.uri,
                            ya = wa.callback,
                            za = wa.params.method,
                            ab, bb = xa.removeQueryData('method').toString();
                        if (za.toLowerCase() == 'post') {
                            ab = p.encode(xa.getQueryData());
                            bb = xa.setQueryData({}).toString();
                        }
                        return {
                            body: ab,
                            callback: ya,
                            method: za,
                            relative_url: bb
                        };
                    }

                    function qa() {
                        for (var va = arguments.length, wa = Array(va), xa = 0; xa < va; xa++) wa[xa] = arguments[xa];
                        var ya = pa(wa),
                            za = ya.body,
                            ab = ya.callback,
                            bb = ya.method,
                            cb = ya.relative_url,
                            db = {
                                method: bb,
                                relative_url: cb
                            };
                        if (za) db.body = za;
                        da.push(db);
                        ea.push(ab);
                        if (da.length == ja) {
                            if (fa) clearTimeout(fa);
                            ra();
                        } else if (!fa) fa = setTimeout(ra, 0);
                    }

                    function ra() {
                        da.length > 0 || u(0);
                        da.length === ea.length || u(0);
                        var va = da,
                            wa = ea;
                        da = [];
                        ea = [];
                        fa = null;
                        if (va.length === 1) {
                            var xa = va[0],
                                ya = wa[0],
                                za = xa.body ? p.decode(xa.body) : null;
                            oa(xa.relative_url, xa.method, za, ya);
                            return;
                        }
                        oa('/', 'POST', {
                            batch: va,
                            include_headers: false,
                            batch_app_id: x || ka
                        }, function(ab) {
                            if (ES('Array', 'isArray', false, ab)) {
                                ES(ab, 'forEach', true, function(bb, cb) {
                                    wa[cb](v(bb && bb.body));
                                });
                            } else ES(wa, 'forEach', true, function(bb) {
                                return (bb({
                                    error: {
                                        message: 'Fatal: batch call failed.'
                                    }
                                }));
                            });
                        });
                    }

                    function sa(va, wa) {
                        i.isObject(va);
                        i.isString(va.method, 'method missing');
                        if (!wa) n.warn('No callback passed to the ApiClient');
                        var xa = va.method.toLowerCase().replace('.', '_');
                        va.format = 'json-strings';
                        va.api_key = x;
                        var ya = xa in ba ? 'api_read' : 'api',
                            za = s.resolve(ya) + '/restserver.php',
                            ab = ES(ma, 'bind', true, null, wa, '/restserver.php', 'get', va, ES('Date', 'now', false));
                        la(za, 'get', va, ab);
                    }
                    var ta = ES('Object', 'assign', false, new o(), {
                        setAccessToken: function va(wa) {
                            w = wa;
                        },
                        setAccessTokenForClientID: function va(wa, xa) {
                            if (!(w && x && x !== xa)) w = wa;
                        },
                        getAccessToken: function va() {
                            return w;
                        },
                        setClientID: function va(wa) {
                            x = wa;
                        },
                        setDefaultParams: function va(wa) {
                            y = wa;
                        },
                        setDefaultTransports: function va(wa) {
                            ca = wa;
                        },
                        setMaxConcurrentRequests: function va(wa) {
                            ia = wa;
                        },
                        getCurrentlyExecutingRequestCount: function va() {
                            return ga;
                        },
                        getQueuedRequestCount: function va() {
                            return ha.length;
                        },
                        rest: sa,
                        graph: oa,
                        scheduleBatchCall: qa,
                        prepareBatchParams: pa
                    });

                    function ua(va, wa) {
                        return va.toString().length > z && wa === 'get';
                    }
                    k.setSwfUrl(t.FlashRequest.swfUrl);
                    f.exports = ta;
                }, null);
                __d('sdk.PlatformVersioning', ['sdk.Runtime', 'ManagedError'], (function a(b, c, d, e, f, g, h, i) {
                    var j = /^v\d+\.\d\d?$/,
                        k = {
                            REGEX: j,
                            assertVersionIsSet: function l() {
                                if (!h.getVersion()) throw new i('init not called with valid version');
                            },
                            assertValidVersion: function l(m) {
                                if (!j.test(m)) throw new i('invalid version specified');
                            }
                        };
                    f.exports = k;
                }), null);
                __d('sdk.api', ['ApiClient', 'sdk.PlatformVersioning', 'sdk.Runtime', 'sdk.Scribe', 'sdk.URI', 'sdk.feature'], function a(b, c, d, e, f, g, h, i, j, k, l, m) {
                    var n = m('should_log_response_error', false),
                        o;
                    j.subscribe('ClientID.change', function(q) {
                        return h.setClientID(q);
                    });
                    j.subscribe('AccessToken.change', function(q) {
                        o = q;
                        h.setAccessToken(q);
                    });
                    h.setDefaultParams({
                        sdk: 'joey'
                    });
                    h.subscribe('request.complete', function(q, r, s, t) {
                        var u = false;
                        if (t && typeof t == 'object')
                            if (t.error) {
                                if (t.error == 'invalid_token' || t.error.type == 'OAuthException' && t.error.code == 190) u = true;
                            } else if (t.error_code)
                            if (t.error_code == '190') u = true;
                        if (u && o === j.getAccessToken()) j.setAccessToken(null);
                    });
                    h.subscribe('request.complete', function(q, r, s, t) {
                        if ((q == '/me/permissions' && r === 'delete' || q == '/restserver.php' && s.method == 'Auth.revokeAuthorization') && t === true) j.setAccessToken(null);
                    });
                    h.subscribe('request.error', function(q, r, s, t) {
                        if (n && t.error.type === 'http') k.log('jssdk_error', {
                            appId: j.getClientID(),
                            error: 'transport',
                            extra: {
                                name: 'transport',
                                message: ES('JSON', 'stringify', false, t.error)
                            }
                        });
                    });

                    function p(q) {
                        if (typeof q === 'string') {
                            if (j.getIsVersioned()) {
                                i.assertVersionIsSet();
                                if (!/https?/.test(q) && q.charAt(0) !== '/') q = '/' + q;
                                q = new l(q).setDomain(null).setProtocol(null).toString();
                                if (!i.REGEX.test(q.substring(1, ES(q, 'indexOf', true, '/', 1)))) q = '/' + j.getVersion() + q;
                                var r = [q].concat(Array.prototype.slice.call(arguments, 1));
                                h.graph.apply(h, r);
                            } else h.graph.apply(h, arguments);
                        } else h.rest.apply(h, arguments);
                    }
                    f.exports = p;
                }, null);
                __d('legacy:fb.api', ['FB', 'sdk.api'], (function a(b, c, d, e, f, g, h, i) {
                    h.provide('', {
                        api: i
                    });
                }), 3);
                __d('FBEventsParamList', [], function a(b, c, d, e, f, g) {
                    'use strict';
                    var h = 'deep',
                        i = 'shallow';

                    function j() {
                        this.list = [];
                    }
                    j.prototype = {
                        append: function l(m, n) {
                            this._append(encodeURIComponent(m), n, h);
                        },
                        _append: function l(m, n, o) {
                            if (Object(n) !== n) {
                                this._appendPrimitive(m, n);
                            } else if (o === h) {
                                this._appendObject(m, n);
                            } else this._appendPrimitive(m, k(n));
                        },
                        _appendPrimitive: function l(m, n) {
                            if (n != null) this.list.push([m, n]);
                        },
                        _appendObject: function l(m, n) {
                            for (var o in n)
                                if (n.hasOwnProperty(o)) {
                                    var p = m + '[' + encodeURIComponent(o) + ']';
                                    this._append(p, n[o], i);
                                }
                        },
                        each: function l(m) {
                            var n = this.list;
                            for (var o = 0, p = n.length; o < p; o++) m(n[o][0], n[o][1]);
                        },
                        toQueryString: function l() {
                            var m = [];
                            this.each(function(n, o) {
                                m.push(n + '=' + encodeURIComponent(o));
                            });
                            return m.join('&');
                        }
                    };

                    function k(l) {
                        if (typeof JSON === 'undefined' || JSON === null || !ES('JSON', 'stringify', false)) {
                            return Object.prototype.toString.call(l);
                        } else return ES('JSON', 'stringify', false, l);
                    }
                    f.exports = j;
                }, null);
                __d('FBEventsUtils', [], function a(b, c, d, e, f, g) {
                    'use strict';
                    var h = 'console',
                        i = 'error',
                        j = 'Facebook Pixel Error',
                        k = 'Facebook Pixel Warning',
                        l = 'warn',
                        m = Object.prototype.toString,
                        n = !('addEventListener' in document),
                        o = function w() {},
                        p = window[h] || {},
                        q = window.postMessage || o;

                    function r(w) {
                        return ES('Array', 'isArray', false) ? ES('Array', 'isArray', false, w) : m.call(w) === '[object Array]';
                    }

                    function s(w) {
                        q({
                            action: 'FB_LOG',
                            logType: j,
                            logMessage: w
                        }, '*');
                        if (i in p) p[i](j + ': ' + w);
                    }

                    function t(w) {
                        q({
                            action: 'FB_LOG',
                            logType: k,
                            logMessage: w
                        }, '*');
                        if (l in p) p[l](k + ': ' + w);
                    }

                    function u(w, x, y) {
                        x = n ? 'on' + x : x;
                        var z = n ? 'attachEvent' : 'addEventListener',
                            aa = n ? 'detachEvent' : 'removeEventListener',
                            ba = function ca() {
                                w[aa](x, ca, false);
                                y();
                            };
                        w[z](x, ba, false);
                    }

                    function v(w, x, y) {
                        var z = w[x];
                        w[x] = function() {
                            var aa = z.apply(this, arguments);
                            y.apply(this, arguments);
                            return aa;
                        };
                    }
                    g.isArray = r;
                    g.logError = s;
                    g.logWarning = t;
                    g.listenOnce = u;
                    g.injectMethod = v;
                }, null);
                __d('FBPixelEndpoint', ['FBEventsParamList', 'FBEventsUtils'], function a(b, c, d, e, f, g, h, i) {
                    'use strict';
                    var j = 'https://www.facebook.com/tr/',
                        k = location.href,
                        l = window.top !== window,
                        m = document.referrer;

                    function n(s, t, u, v) {
                        v = v || {};
                        var w = new h();
                        w.append('id', s);
                        w.append('ev', t);
                        w.append('dl', k);
                        w.append('rl', m);
                        w.append('if', l);
                        w.append('ts', new Date().valueOf());
                        w.append('cd', u);
                        for (var x in v) w.append(x, v[x]);
                        return w;
                    }

                    function o(s, t, u, v) {
                        var w = n(s, t, u, v),
                            x = w.toQueryString();
                        if (2048 > (j + '?' + x).length) {
                            p(j, x);
                        } else q(j, w);
                    }

                    function p(s, t) {
                        var u = new Image();
                        u.src = s + '?' + t;
                    }

                    function q(s, t) {
                        var u = 'fb' + Math.random().toString().replace('.', ''),
                            v = document.createElement('form');
                        v.method = 'post';
                        v.action = s;
                        v.target = u;
                        v.acceptCharset = 'utf-8';
                        v.style.display = 'none';
                        var w = !!(window.attachEvent && !window.addEventListener),
                            x = w ? '<iframe name="' + u + '">' : 'iframe',
                            y = document.createElement(x);
                        y.src = 'javascript:false';
                        y.id = u;
                        y.name = u;
                        v.appendChild(y);
                        i.listenOnce(y, 'load', function() {
                            t.each(function(z, aa) {
                                var ba = document.createElement('input');
                                ba.name = z;
                                ba.value = aa;
                                v.appendChild(ba);
                            });
                            i.listenOnce(y, 'load', function() {
                                v.parentNode.removeChild(v);
                            });
                            v.submit();
                        });
                        document.body.appendChild(v);
                    }
                    var r = {
                        sendEvent: o
                    };
                    f.exports = r;
                }, null);
                __d('FBAppEvents', ['FBPixelEndpoint'], function a(b, c, d, e, f, g, h) {
                    'use strict';

                    function i(j, k, l, m, n) {
                        var o = {
                            es: 'APP'
                        };
                        if (m != null) o.vts = m.toString();
                        if (n != null) o.at = n;
                        h.sendEvent(j.toString(), k, l, o);
                    }
                    f.exports = {
                        logEvent: i
                    };
                }, null);
                __d('sdk.AppEvents', ['Assert', 'sdk.Impressions', 'sdk.Runtime', 'FBAppEvents', 'sdk.Auth'], function a(b, c, d, e, f, g, h, i, j, k, l) {
                    var m = {
                            COMPLETED_REGISTRATION: 'fb_mobile_complete_registration',
                            VIEWED_CONTENT: 'fb_mobile_content_view',
                            SEARCHED: 'fb_mobile_search',
                            RATED: 'fb_mobile_rate',
                            COMPLETED_TUTORIAL: 'fb_mobile_tutorial_completion',
                            ADDED_TO_CART: 'fb_mobile_add_to_cart',
                            ADDED_TO_WISHLIST: 'fb_mobile_add_to_wishlist',
                            INITIATED_CHECKOUT: 'fb_mobile_initiated_checkout',
                            ADDED_PAYMENT_INFO: 'fb_mobile_add_payment_info',
                            ACHIEVED_LEVEL: 'fb_mobile_level_achieved',
                            UNLOCKED_ACHIEVEMENT: 'fb_mobile_achievement_unlocked',
                            PAGE_VIEW: 'fb_page_view',
                            SPENT_CREDITS: 'fb_mobile_spent_credits'
                        },
                        n = {
                            ACTIVATED_APP: 'fb_mobile_activate_app',
                            PURCHASED: 'fb_mobile_purchase'
                        },
                        o = {
                            CURRENCY: 'fb_currency',
                            REGISTRATION_METHOD: 'fb_registration_method',
                            CONTENT_TYPE: 'fb_content_type',
                            CONTENT_ID: 'fb_content_id',
                            SEARCH_STRING: 'fb_search_string',
                            SUCCESS: 'fb_success',
                            MAX_RATING_VALUE: 'fb_max_rating_value',
                            PAYMENT_INFO_AVAILABLE: 'fb_payment_info_available',
                            NUM_ITEMS: 'fb_num_items',
                            LEVEL: 'fb_level',
                            DESCRIPTION: 'fb_description'
                        },
                        p = 40,
                        q = '^[0-9a-zA-Z_]+[0-9a-zA-Z _-]*$';

                    function r(y, z, aa, ba) {
                        var ca = {
                            ae: 1,
                            ev: z,
                            vts: aa,
                            canvas: 1
                        };
                        if (ba) ca.cd = ba;
                        i.impression({
                            api_key: y,
                            payload: ES('JSON', 'stringify', false, ca)
                        });
                    }

                    function s(y, z, aa, ba) {
                        var ca = l.getAuthResponse(),
                            da = ca && ca.accessToken ? ca.accessToken : null;
                        k.logEvent(y, z, ba, aa, da);
                    }

                    function t(y, z, aa, ba) {
                        h.isTrue(u(z), 'Invalid event name: ' + z + '. ' + 'It must be between 1 and ' + p + ' characters, ' + 'and must be contain only alphanumerics, _, - or spaces, ' + 'starting with alphanumeric or _.');
                        if (j.isCanvasEnvironment()) {
                            r.apply(null, arguments);
                        } else s.apply(null, arguments);
                    }

                    function u(y) {
                        if (y === null || y.length === 0 || y.length > p || !new RegExp(q).test(y)) return false;
                        return true;
                    }

                    function v(y, z, aa, ba) {
                        var ca = {};
                        ca[o.CURRENCY] = aa;
                        t(y, n.PURCHASED, z, babelHelpers['extends']({}, ba, ca));
                    }

                    function w(y) {
                        t(y, n.ACTIVATED_APP);
                    }

                    function x(y) {
                        t(y, m.PAGE_VIEW);
                    }
                    f.exports = {
                        activateApp: w,
                        logEvent: t,
                        logPurchase: v,
                        logPageView: x,
                        isValidEventName: u,
                        EventNames: m,
                        ParameterNames: o
                    };
                }, null);
                __d('legacy:fb.appevents', ['Assert', 'sdk.AppEvents', 'FB', 'sdk.Runtime'], function a(b, c, d, e, f, g, h, i, j, k) {
                    j.provide('AppEvents', {
                        logEvent: function l(m, n, o) {
                            h.isString(m, 'Invalid eventName');
                            h.maybeNumber(n, 'Invalid valueToSum');
                            h.maybeObject(o, 'Invalid params');
                            var p = k.getClientID();
                            h.isTrue(p !== null && p.length > 0, 'You need to call FB.init() with App ID first.');
                            i.logEvent(p, m, n, o);
                        },
                        logPurchase: function l(m, n, o) {
                            h.isNumber(m, 'Invalid purchaseAmount');
                            h.isString(n, 'Invalid currency');
                            h.maybeObject(o, 'Invalid params');
                            var p = k.getClientID();
                            h.isTrue(p !== null && p.length > 0, 'You need to call FB.init() with App ID first.');
                            i.logPurchase(p, m, n, o);
                        },
                        activateApp: function l() {
                            var m = k.getClientID();
                            h.isTrue(m !== null && m.length > 0, 'You need to call FB.init() with App ID first.');
                            i.activateApp(m);
                        },
                        logPageView: function l() {
                            var m = k.getClientID();
                            h.isTrue(m !== null && m.length > 0, 'You need to call FB.init() with App ID first.');
                            i.logPageView(m);
                        },
                        EventNames: i.EventNames,
                        ParameterNames: i.ParameterNames
                    });
                }, 3);
                __d('resolveURI', [], function a(b, c, d, e, f, g) {
                    function h(i) {
                        if (!i) return window.location.href;
                        i = i.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
                        var j = document.createElement('div');
                        j.innerHTML = '<a href="' + i + '"></a>';
                        return j.firstChild.href;
                    }
                    f.exports = h;
                }, null);
                __d('sdk.Canvas.Environment', ['sdk.RPC'], (function a(b, c, d, e, f, g, h) {
                    function i(l) {
                        h.remote.getPageInfo(function(m) {
                            l(m.result);
                        });
                    }

                    function j(l, m) {
                        h.remote.scrollTo({
                            x: l || 0,
                            y: m || 0
                        });
                    }
                    h.stub('getPageInfo');
                    h.stub('scrollTo');
                    var k = {
                        getPageInfo: i,
                        scrollTo: j
                    };
                    f.exports = k;
                }), null);
                __d('sdk.DialogUtils', ['sdk.Content', 'sdk.DOM', 'DOMEventListener', 'sdk.UA', 'sdk.feature'], function a(b, c, d, e, f, g, h, i, j, k, l) {
                    'use strict';
                    var m = {
                        isOrientationPotrait: function n() {
                            return window.innerWidth < window.innerHeight;
                        },
                        addDoubleClickAction: function n(o, p, q) {
                            var r = null;
                            return j.add(o, 'click', function() {
                                if (r !== null) {
                                    clearTimeout(r);
                                    r = null;
                                    p();
                                }
                                r = setTimeout(function() {
                                    r = null;
                                }, q);
                            });
                        },
                        addIdleDesktopAction: function n(o, p, q) {
                            var r = void 0,
                                event = void 0,
                                s = function t() {
                                    r = setTimeout(p, q);
                                };
                            s();
                            return j.add(o, 'mouseenter', function() {
                                clearTimeout(r);
                                if (!event) event = j.add(o, 'mouseleave', function() {
                                    s();
                                });
                            });
                        },
                        addMobileOrientationChangeAction: function n(o) {
                            if (!k.mobile()) return null;
                            var event = 'onorientationchange' in window ? 'orientationchange' : 'resize',
                                p = function q(r) {
                                    return setTimeout(function(s) {
                                        return o(s);
                                    }, 50);
                                };
                            return j.add(window, event, p);
                        },
                        applyScreenDimensions: function n(o) {
                            if (o == null) return;
                            var p = i.getViewportInfo();
                            o.style.minHeight = p.height || p.width ? p.height + 'px' : '';
                            o.style.top = p.scrollTop ? p.scrollTop + 'px' : '';
                        },
                        setDialogPositionToCenter: function n(o, p, q) {
                            var r = function ba(ca) {
                                    return typeof ca === 'number' ? ca : parseInt(ca, 10);
                                },
                                s = i.getViewportInfo(),
                                t = r(o.offsetWidth),
                                u = r(o.offsetHeight),
                                v = s.scrollLeft + (s.width - t) / 2,
                                w = (s.height - u) / 2.5;
                            if (v < w) w = v;
                            var x = s.height - u - w,
                                y = (s.height - u) / 2;
                            if (q) y = q.scrollTop - q.offsetTop + (q.clientHeight - u) / 2;
                            if (y < w) {
                                y = w;
                            } else if (y > x) y = x;
                            y += s.scrollTop;
                            if (k.mobile()) {
                                var z = 100;
                                if (p) {
                                    z += (s.height - u) / 2;
                                    i.addCss(document.body, 'fb_reposition');
                                } else {
                                    i.addCss(document.body, 'fb_hidden');
                                    if (l('dialog_resize_refactor', false)) document.body.style.width = 'auto';
                                    y = 10000;
                                }
                                var aa = i.getByClass('fb_dialog_padding', o);
                                if (aa.length) aa[0].style.height = z + 'px';
                            }
                            o.style.left = (v > 0 ? v : 0) + 'px';
                            o.style.top = (y > 0 ? y : 0) + 'px';
                        },
                        setDialogPositionToTop: function n(o, p, q) {
                            this.setDialogPositionToCenter(o, p, q);
                            var r = i.getViewportInfo(),
                                s = r.scrollTop + (r.height - o.offsetHeight) * .05;
                            i.setStyle(o, 'top', s + 'px');
                        },
                        setupNewDarkOverlay: function n() {
                            var o = document.createElement('div');
                            o.setAttribute('id', 'fb_dialog_ipad_overlay');
                            this.applyScreenDimensions(o);
                            return o;
                        },
                        setupNewDialog: function n(o) {
                            o = o || {};
                            var p = document.createElement('div'),
                                q = o,
                                r = q.onClose;
                            if (o.closeIcon && r) {
                                var s = document.createElement('a');
                                s.className = 'fb_dialog_close_icon';
                                j.add(s, 'click', r);
                                p.appendChild(s);
                            }
                            var t = 'fb_dialog';
                            t += ' ' + (o.classes || '');
                            if (k.ie()) {
                                t += ' fb_dialog_legacy';
                                ES(['vert_left', 'vert_right', 'horiz_top', 'horiz_bottom', 'top_left', 'top_right', 'bottom_left', 'bottom_right'], 'forEach', true, function(x) {
                                    var y = document.createElement('span');
                                    y.className = 'fb_dialog_' + x;
                                    p.appendChild(y);
                                });
                            } else t += k.mobile() ? ' fb_dialog_mobile' : ' fb_dialog_advanced';
                            p.className = t;
                            if (o.width) {
                                var u = parseInt(o.width, 10);
                                if (!isNaN(u)) p.style.width = u + 'px';
                            }
                            var v = document.createElement('div');
                            if (o.content) h.append(o.content, v);
                            v.className = 'fb_dialog_content';
                            p.appendChild(v);
                            if (k.mobile()) {
                                var w = document.createElement('div');
                                w.className = 'fb_dialog_padding';
                                p.appendChild(w);
                            }
                            return {
                                dialogElement: p,
                                contentRoot: v
                            };
                        },
                        onDialogHideCleanup: function n(o) {
                            var p = document.body;
                            if (o) {
                                i.removeCss(p, 'fb_reposition');
                            } else i.removeCss(p, 'fb_hidden');
                        }
                    };
                    f.exports = m;
                }, null);
                __d('sdk.fbt', [], (function a(b, c, d, e, f, g) {
                    var h = {
                        _: function i(j) {
                            return typeof j === 'string' ? j : j[0];
                        }
                    };
                    f.exports = h;
                }), null);
                __d('sdk.Dialog', ['sdk.Canvas.Environment', 'sdk.Content', 'sdk.DialogUtils', 'sdk.DOM', 'DOMEventListener', 'ObservableMixin', 'sdk.Runtime', 'Type', 'sdk.UA', 'sdk.fbt', 'sdk.feature'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
                    var s = 30,
                        t = 590,
                        u = 500,
                        v = 240,
                        w = 575;

                    function x() {
                        if (r('dialog_resize_refactor', false)) {
                            var aa = k.getViewportInfo();
                            if (aa.height && aa.width) return {
                                width: Math.min(aa.width, u),
                                height: Math.min(aa.height, t)
                            };
                        }
                        return null;
                    }
                    var y = o.extend({
                            constructor: function aa(ba, ca) {
                                this.parent();
                                this.id = ba;
                                this.display = ca;
                                this._e2e = {};
                                if (!z._dialogs) {
                                    z._dialogs = {};
                                    z._addOrientationHandler();
                                }
                                z._dialogs[ba] = this;
                                this.trackEvent('init');
                            },
                            trackEvent: function aa(ba, ca) {
                                if (this._e2e[ba]) return this;
                                this._e2e[ba] = ca || ES('Date', 'now', false);
                                if (ba == 'close') this.inform('e2e:end', this._e2e);
                                return this;
                            },
                            trackEvents: function aa(ba) {
                                if (typeof ba === 'string') ba = ES('JSON', 'parse', false, ba);
                                for (var ca in ba)
                                    if (ba.hasOwnProperty(ca)) this.trackEvent(ca, ba[ca]);
                                return this;
                            }
                        }, m),
                        z = {
                            newInstance: function aa(ba, ca) {
                                return new y(ba, ca);
                            },
                            _dialogs: null,
                            _lastYOffset: 0,
                            _overlayListeners: [],
                            _loaderEl: null,
                            _overlayEl: null,
                            _stack: [],
                            _active: null,
                            _forceTabletStyle: null,
                            _closeOnOverlayTap: null,
                            _positionDialogAtTopWhenPortrait: null,
                            get: function aa(ba) {
                                return z._dialogs[ba];
                            },
                            _findRoot: function aa(ba) {
                                while (ba) {
                                    if (k.containsCss(ba, 'fb_dialog')) return ba;
                                    ba = ba.parentNode;
                                }
                            },
                            _createWWWLoader: function aa(ba) {
                                ba = ba ? ba : 460;
                                return z.create({
                                    content: '<div class="dialog_title">' + '  <a id="fb_dialog_loader_close">' + '    <div class="fb_dialog_close_icon"></div>' + '  </a>' + '  <span>Facebook</span>' + '  <div style="clear:both;"></div>' + '</div>' + '<div class="dialog_content"></div>' + '<div class="dialog_footer"></div>',
                                    width: ba
                                });
                            },
                            _createMobileLoader: function aa() {
                                var ba;
                                if (p.nativeApp()) {
                                    ba = '<div class="dialog_header"></div>';
                                } else if (z.isTabletStyle()) {
                                    ba = '<div class="overlayLoader">' + '<div id="fb_dialog_loader_spinner"></div>' + '<a id="fb_dialog_loader_close" href="#">' + q._("Cancelar") + '</a>' + '</div>';
                                } else ba = '<div class="dialog_header">' + '<table>' + '  <tbody>' + '    <tr>' + '      <td class="header_left">' + '        <label class="touchable_button">' + '          <input type="submit" value="' + q._("Cancelar") + '"' + '            id="fb_dialog_loader_close"/>' + '        </label>' + '      </td>' + '      <td class="header_center">' + '        <div>' + '         ' + q._("Carregando...") + '        </div>' + '      </td>' + '      <td class="header_right">' + '      </td>' + '    </tr>' + '  </tbody>' + '</table>' + '</div>';
                                return z.create({
                                    classes: 'loading' + (z.isTabletStyle() ? ' centered' : ''),
                                    content: ba
                                });
                            },
                            _setDialogOverlayStyle: function aa() {
                                j.applyScreenDimensions(z._overlayEl);
                            },
                            _showTabletOverlay: function aa(ba) {
                                if (!z.isTabletStyle()) return;
                                if (!z._overlayEl) {
                                    z._overlayEl = j.setupNewDarkOverlay();
                                    i.append(z._overlayEl, null);
                                }
                                if (z._closeOnOverlayTap) {
                                    var ca = j.addDoubleClickAction(z._overlayEl, ES(ba, 'bind', true, this), 5000);
                                    z._overlayListeners.push(ca);
                                }
                                z._overlayEl.className = '';
                            },
                            _hideTabletOverlay: function aa() {
                                if (z.isTabletStyle()) {
                                    z._overlayEl.className = 'hidden';
                                    ES(z._overlayListeners, 'forEach', true, function(ba) {
                                        return ba.remove();
                                    });
                                    z._overlayListeners = [];
                                }
                            },
                            showLoader: function aa(ba, ca) {
                                if (!ba) ba = function ga() {};
                                var da = function ga() {
                                    z._hideLoader();
                                    j.onDialogHideCleanup(z.isTabletStyle());
                                    z._hideTabletOverlay();
                                    ba();
                                };
                                z._showTabletOverlay(da);
                                if (!z._loaderEl) z._loaderEl = z._findRoot(p.mobile() ? z._createMobileLoader() : z._createWWWLoader(ca));
                                var ea = document.getElementById('fb_dialog_loader_close');
                                if (ea) {
                                    k.removeCss(ea, 'fb_hidden');
                                    var fa = l.add(ea, 'click', da);
                                    z._overlayListeners.push(fa);
                                }
                                z._makeActive(z._loaderEl);
                            },
                            setCloseOnOverlayTap: function aa(ba) {
                                z._closeOnOverlayTap = !!ba;
                            },
                            setPositionDialogAtTopWhenPortrait: function aa(ba) {
                                z._positionDialogAtTopWhenPortrait = !!ba;
                            },
                            _hideLoader: function aa() {
                                if (z._loaderEl && z._loaderEl == z._active) z._loaderEl.style.top = '-10000px';
                            },
                            _makeActive: function aa(ba) {
                                z._setDialogSizes();
                                z._lowerActive();
                                z._active = ba;
                                if (n.isEnvironment(n.ENVIRONMENTS.CANVAS)) h.getPageInfo(function(ca) {
                                    z._centerActive(ca);
                                });
                                z._centerActive();
                            },
                            _lowerActive: function aa() {
                                if (!z._active) return;
                                z._active.style.top = '-10000px';
                                z._active = null;
                            },
                            _removeStacked: function aa(ba) {
                                z._stack = ES(z._stack, 'filter', true, function(ca) {
                                    return ca != ba;
                                });
                            },
                            _centerActive: function aa(ba) {
                                var ca = z._active;
                                if (!ca) return;
                                if (z._positionDialogAtTopWhenPortrait && j.isOrientationPotrait()) {
                                    j.setDialogPositionToTop(ca, z.isTabletStyle(), ba);
                                } else j.setDialogPositionToCenter(ca, z.isTabletStyle(), ba);
                            },
                            _setDialogSizes: function aa() {
                                var ba = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
                                if (!p.mobile()) return;
                                for (var ca in z._dialogs)
                                    if (z._dialogs.hasOwnProperty(ca)) {
                                        var da = document.getElementById(ca);
                                        if (da) {
                                            da.style.width = z.getDefaultSize().width + 'px';
                                            if (!ba) da.style.height = z.getDefaultSize().height + 'px';
                                        }
                                    }
                            },
                            getDefaultSize: function aa() {
                                if (p.mobile()) {
                                    var ba = x();
                                    if (ba) {
                                        if (k.getViewportInfo().width <= ba.width) ba.width = k.getViewportInfo().width - s;
                                        if (k.getViewportInfo().height <= ba.height) ba.height = k.getViewportInfo().height - s;
                                        return ba;
                                    }
                                    if (p.ipad()) return {
                                        width: u,
                                        height: t
                                    };
                                    if (p.android()) {
                                        return {
                                            width: screen.availWidth,
                                            height: screen.availHeight
                                        };
                                    } else {
                                        var ca = window.innerWidth,
                                            da = window.innerHeight,
                                            ea = ca / da > 1.2;
                                        return {
                                            width: ca,
                                            height: Math.max(da, ea ? screen.width : screen.height)
                                        };
                                    }
                                }
                                return {
                                    width: w,
                                    height: v
                                };
                            },
                            _handleOrientationChange: function aa() {
                                var ba = r('dialog_resize_refactor', false) ? k.getViewportInfo().width : screen.availWidth;
                                z._availScreenWidth = ba;
                                if (z.isTabletStyle()) {
                                    z._setDialogSizes(true);
                                    z._centerActive();
                                    z._setDialogOverlayStyle();
                                } else {
                                    var ca = z.getDefaultSize().width;
                                    for (var da in z._dialogs)
                                        if (z._dialogs.hasOwnProperty(da)) {
                                            var ea = document.getElementById(da);
                                            if (ea) ea.style.width = ca + 'px';
                                        }
                                }
                            },
                            _addOrientationHandler: function aa() {
                                if (!p.mobile()) return null;
                                z._availScreenWidth = r('dialog_resize_refactor', false) ? k.getViewportInfo().width : screen.availWidth;
                                j.addMobileOrientationChangeAction(z._handleOrientationChange);
                            },
                            create: function aa(ba) {
                                var ca = j.setupNewDialog(ba);
                                i.append(ca.dialogElement);
                                if (ba.visible) z.show(ca.dialogElement);
                                if (typeof ba.styles === 'object') ES('Object', 'assign', false, ca.dialogElement.style, ba.styles);
                                return ca.contentRoot;
                            },
                            show: function aa(ba) {
                                var ca = z._findRoot(ba);
                                if (ca) {
                                    z._removeStacked(ca);
                                    z._hideLoader();
                                    z._makeActive(ca);
                                    z._stack.push(ca);
                                    if ('fbCallID' in ba) z.get(ba.fbCallID).inform('iframe_show').trackEvent('show');
                                }
                            },
                            hide: function aa(ba) {
                                var ca = z._findRoot(ba);
                                z._hideLoader();
                                if (ca == z._active) {
                                    z._lowerActive();
                                    j.onDialogHideCleanup(z.isTabletStyle());
                                    z._hideTabletOverlay();
                                    if ('fbCallID' in ba) z.get(ba.fbCallID).inform('iframe_hide').trackEvent('hide');
                                }
                            },
                            remove: function aa(ba) {
                                ba = z._findRoot(ba);
                                if (ba) {
                                    var ca = z._active == ba;
                                    z._removeStacked(ba);
                                    if (ca) {
                                        z._hideLoader();
                                        if (z._stack.length > 0) {
                                            z.show(z._stack.pop());
                                        } else {
                                            z._lowerActive();
                                            j.onDialogHideCleanup(z.isTabletStyle());
                                            z._hideTabletOverlay();
                                        }
                                    } else if (z._active === null && z._stack.length > 0) z.show(z._stack.pop());
                                    setTimeout(function() {
                                        ba.parentNode.removeChild(ba);
                                    }, 3000);
                                }
                            },
                            isActive: function aa(ba) {
                                var ca = z._findRoot(ba);
                                return ca && ca === z._active;
                            },
                            setForceTabletStyle: function aa(ba) {
                                z._forceTabletStyle = !!ba;
                            },
                            isTabletStyle: function aa() {
                                var ba;
                                if (!p.mobile()) return false;
                                if (z._forceTabletStyle) return true;
                                if (r('dialog_resize_refactor', false)) {
                                    var ca = x();
                                    ba = ca && (ca.height >= t || ca.width >= u);
                                } else ba = !!p.ipad();
                                return ba;
                            }
                        };
                    f.exports = z;
                }, null);
                __d('sdk.Frictionless', ['sdk.Auth', 'sdk.api', 'sdk.Event', 'sdk.Dialog'], function a(b, c, d, e, f, g, h, i, j, k) {
                    var l = {
                        _allowedRecipients: {},
                        _useFrictionless: false,
                        _updateRecipients: function m() {
                            l._allowedRecipients = {};
                            i('/me/apprequestformerrecipients', function(n) {
                                if (!n || n.error) return;
                                ES(n.data, 'forEach', true, function(o) {
                                    l._allowedRecipients[o.recipient_id] = true;
                                });
                            });
                        },
                        init: function m() {
                            l._useFrictionless = true;
                            h.getLoginStatus(function(n) {
                                if (n.status == 'connected') l._updateRecipients();
                            });
                            j.subscribe('auth.login', function(n) {
                                if (n.authResponse) l._updateRecipients();
                            });
                        },
                        _processRequestResponse: function m(n, o) {
                            return function(p) {
                                var q = p && p.updated_frictionless;
                                if (l._useFrictionless && q) l._updateRecipients();
                                if (p) {
                                    if (!o && p.frictionless) {
                                        k._hideLoader();
                                        k._restoreBodyPosition();
                                        k._hideIPadOverlay();
                                    }
                                    delete p.frictionless;
                                    delete p.updated_frictionless;
                                }
                                n && n(p);
                            };
                        },
                        isAllowed: function m(n) {
                            if (!n) return false;
                            if (typeof n === 'number') return n in l._allowedRecipients;
                            if (typeof n === 'string') n = n.split(',');
                            n = ES(n, 'map', true, function(q) {
                                return ES(String(q), 'trim', true);
                            });
                            var o = true,
                                p = false;
                            ES(n, 'forEach', true, function(q) {
                                o = o && q in l._allowedRecipients;
                                p = true;
                            });
                            return o && p;
                        }
                    };
                    j.subscribe('init:post', function(m) {
                        if (m.frictionlessRequests) l.init();
                    });
                    f.exports = l;
                }, null);
                __d('sdk.Native', ['Log', 'sdk.UA'], function a(b, c, d, e, f, g, h, i) {
                    var j = 'fbNativeReady',
                        k = {
                            onready: function l(m) {
                                if (!i.nativeApp()) {
                                    h.error('FB.Native.onready only works when the page is rendered ' + 'in a WebView of the native Facebook app. Test if this is the ' + 'case calling FB.UA.nativeApp()');
                                    return;
                                }
                                if (window.__fbNative && !this.nativeReady) ES('Object', 'assign', false, this, window.__fbNative);
                                if (this.nativeReady) {
                                    m();
                                } else {
                                    var n = function o(p) {
                                        window.removeEventListener(j, o);
                                        this.onready(m);
                                    };
                                    window.addEventListener(j, n, false);
                                }
                            }
                        };
                    f.exports = k;
                }, null);
                __d('sdk.openMessenger', ['sdk.UA'], (function a(b, c, d, e, f, g, h) {
                    'use strict';
                    var i = 'https://itunes.apple.com/us/app/messenger/id454638411',
                        j = 'https://play.google.com/store/apps/details?id=com.facebook.orca',
                        k = 3000;

                    function l(m) {
                        var n = void 0,
                            o = void 0,
                            p = m.link,
                            q = m.app_id;
                        if (h.android()) {
                            n = 'intent://share/#Intent;' + 'package=com.facebook.orca;' + 'scheme=fb-messenger;' + 'S.android.intent.extra.TEXT=' + encodeURIComponent(p) + ';' + 'S.trigger=send_plugin;';
                            if (q) n += 'S.platform_app_id=' + encodeURIComponent(q) + ';';
                            n += 'end';
                            o = j;
                        } else {
                            n = 'fb-messenger://share?link=' + encodeURIComponent(p);
                            if (q) n += '&app_id=' + encodeURIComponent(q);
                            o = i;
                        }
                        setTimeout(function() {
                            window.location.href = o;
                        }, k);
                        window.location.href = n;
                    }
                    f.exports = l;
                }), null);
                __d('sdk.UIServer', ['sdk.Auth', 'sdk.Content', 'sdk.DOM', 'sdk.Dialog', 'sdk.Event', 'sdk.Frictionless', 'Log', 'sdk.Native', 'QueryString', 'sdk.RPC', 'sdk.Runtime', 'JSSDKConfig', 'sdk.UA', 'UrlMap', 'sdk.XD', 'createObjectFrom', 'sdk.feature', 'sdk.fbt', 'flattenObject', 'sdk.getContextType', 'guid', 'insertIframe', 'sdk.openMessenger', 'resolveURI'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea) {
                    var fa = {
                            transform: function la(ma) {
                                if (ma.params.display === 'touch' && ka.canIframe(ma.params) && window.postMessage) {
                                    ma.params.channel = ka._xdChannelHandler(ma.id, 'parent');
                                    if (!t.nativeApp()) ma.params.in_iframe = 1;
                                    return ma;
                                } else return ka.genericTransform(ma);
                            },
                            getXdRelation: function la(ma) {
                                var na = ma.display;
                                if (na === 'touch' && window.postMessage && ma.in_iframe) return 'parent';
                                return ka.getXdRelation(ma);
                            }
                        },
                        ga = {
                            'stream.share': {
                                size: {
                                    width: 670,
                                    height: 340
                                },
                                url: 'sharer.php',
                                transform: function la(ma) {
                                    if (!ma.params.u) ma.params.u = window.location.toString();
                                    ma.params.display = 'popup';
                                    return ma;
                                }
                            },
                            apprequests: {
                                transform: function la(ma) {
                                    ma = fa.transform(ma);
                                    ma.params.frictionless = m && m._useFrictionless;
                                    if (ma.params.frictionless) {
                                        if (m.isAllowed(ma.params.to)) {
                                            ma.params.display = 'iframe';
                                            ma.params.in_iframe = true;
                                            ma.hideLoader = true;
                                        }
                                        ma.cb = m._processRequestResponse(ma.cb, ma.hideLoader);
                                    }
                                    ma.closeIcon = false;
                                    return ma;
                                },
                                getXdRelation: fa.getXdRelation
                            },
                            'permissions.oauth': {
                                url: 'dialog/oauth',
                                size: {
                                    width: t.mobile() ? null : 475,
                                    height: t.mobile() ? null : 183
                                },
                                transform: function la(ma) {
                                    if (!r.getClientID()) {
                                        n.error('FB.login() called before FB.init().');
                                        return;
                                    }
                                    if (h.getAuthResponse() && !ma.params.scope && !ma.params.auth_type) {
                                        n.error('FB.login() called when user is already connected.');
                                        ma.cb && ma.cb({
                                            status: r.getLoginStatus(),
                                            authResponse: h.getAuthResponse()
                                        });
                                        return;
                                    }
                                    var na = ma.cb,
                                        oa = ma.id;
                                    delete ma.cb;
                                    var pa = ES('Object', 'keys', false, ES('Object', 'assign', false, ma.params.response_type ? w(ma.params.response_type.split(',')) : {}, {
                                        token: true,
                                        signed_request: true
                                    })).join(',');
                                    if (ma.params.display === 'async') {
                                        ES('Object', 'assign', false, ma.params, {
                                            client_id: r.getClientID(),
                                            origin: aa(),
                                            response_type: pa,
                                            domain: location.hostname
                                        });
                                        ma.cb = h.xdResponseWrapper(na, h.getAuthResponse(), 'permissions.oauth');
                                    } else ES('Object', 'assign', false, ma.params, {
                                        client_id: r.getClientID(),
                                        redirect_uri: ea(ka.xdHandler(na, oa, 'opener', h.getAuthResponse(), 'permissions.oauth')),
                                        origin: aa(),
                                        response_type: pa,
                                        domain: location.hostname
                                    });
                                    return ma;
                                }
                            },
                            'auth.logout': {
                                url: 'logout.php',
                                transform: function la(ma) {
                                    if (!r.getClientID()) {
                                        n.error('FB.logout() called before calling FB.init().');
                                    } else if (!h.getAuthResponse()) {
                                        n.error('FB.logout() called without an access token.');
                                    } else {
                                        ma.params.next = ka.xdHandler(ma.cb, ma.id, 'parent', h.getAuthResponse(), 'logout');
                                        return ma;
                                    }
                                }
                            },
                            'login.status': {
                                url: 'dialog/oauth',
                                transform: function la(ma) {
                                    var na = ma.cb,
                                        oa = ma.id;
                                    delete ma.cb;
                                    ES('Object', 'assign', false, ma.params, {
                                        client_id: r.getClientID(),
                                        redirect_uri: ka.xdHandler(na, oa, 'parent', h.getAuthResponse(), 'login_status'),
                                        origin: aa(),
                                        response_type: 'token,signed_request,code',
                                        domain: location.hostname
                                    });
                                    return ma;
                                }
                            },
                            pay: {
                                size: {
                                    width: 555,
                                    height: 120
                                },
                                connectDisplay: 'popup'
                            },
                            live_broadcast: {
                                transform: function la(ma) {
                                    if (ma.params.phase === 'create') ma.size = {
                                        width: 480,
                                        height: 280
                                    };
                                    if (ma.params.phase === 'publish') ma.size = {
                                        width: 772,
                                        height: 540
                                    };
                                    return ma;
                                },
                                require_access_token: true
                            }
                        },
                        ha = {};

                    function ia(la, ma) {
                        ha[ma] = true;
                        return function(na) {
                            delete ha[ma];
                            la(na);
                        };
                    }

                    function ja(la) {
                        if (!x('should_force_single_dialog_instance', true)) return false;
                        var ma = la.method.toLowerCase();
                        if (ma === 'pay' && la.display === 'async') return true;
                        return false;
                    }
                    var ka = {
                        Methods: ga,
                        _loadedNodes: {},
                        _defaultCb: {},
                        _resultToken: '"xxRESULTTOKENxx"',
                        genericTransform: function la(ma) {
                            if (ma.params.display == 'dialog' || ma.params.display == 'iframe') ES('Object', 'assign', false, ma.params, {
                                display: 'iframe',
                                channel: ka._xdChannelHandler(ma.id, 'parent.parent')
                            }, true);
                            return ma;
                        },
                        checkOauthDisplay: function la(ma) {
                            var na = ma.scope || ma.perms || r.getScope();
                            if (!na) return ma.display;
                            var oa = na.split(/\s|,/g);
                            for (var pa = 0; pa < oa.length; pa++)
                                if (!s.initSitevars.iframePermissions[ES(oa[pa], 'trim', true)]) return 'popup';
                            return ma.display;
                        },
                        prepareCall: function la(ma, na) {
                            var oa = ma.method.toLowerCase(),
                                pa = ka.Methods.hasOwnProperty(oa) ? ES('Object', 'assign', false, {}, ka.Methods[oa]) : {},
                                qa = ba(),
                                ra = r.getSecure() || oa !== 'auth.status' && oa != 'login.status';
                            ES('Object', 'assign', false, ma, {
                                app_id: r.getClientID(),
                                locale: r.getLocale(),
                                sdk: 'joey',
                                access_token: ra && r.getAccessToken() || undefined
                            });
                            if (oa === 'share' || oa === 'share_open_graph') {
                                ma.mobile_iframe = t.mobile() && (ma.mobile_iframe || ma.iframe_test);
                                if (ma.mobile_iframe) pa = ES('Object', 'assign', false, {}, fa);
                            }
                            ma.display = ka.getDisplayMode(pa, ma);
                            if (!pa.url) pa.url = 'dialog/' + oa;
                            if ((pa.url == 'dialog/oauth' || pa.url == 'dialog/permissions.request') && (ma.display == 'iframe' || ma.display == 'touch' && ma.in_iframe)) ma.display = ka.checkOauthDisplay(ma);
                            if (ma.display == 'popup' && !pa.require_access_token) delete ma.access_token;
                            if (r.getIsVersioned() && pa.url.substring(0, 7) === 'dialog/') pa.url = ma.version + '/' + pa.url;
                            if (ja(ma)) {
                                if (ha[oa]) {
                                    var sa = 'Dialog "' + oa + '" is trying to run more than once.';
                                    n.warn(sa);
                                    na({
                                        error_code: -100,
                                        error_message: sa
                                    });
                                    return;
                                }
                                na = ia(na, oa);
                            }
                            var ta = {
                                    cb: na,
                                    id: qa,
                                    size: pa.size || ka.getDefaultSize(),
                                    url: u.resolve(ma.display == 'touch' ? 'm' : 'www', ra) + '/' + pa.url,
                                    params: ma,
                                    name: oa,
                                    dialog: k.newInstance(qa, ma.display)
                                },
                                ua = pa.transform ? pa.transform : ka.genericTransform;
                            if (ua) {
                                ta = ua(ta);
                                if (!ta) return;
                            }
                            if (ma.display === 'touch' && ma.in_iframe) ta.params.parent_height = window.innerHeight;
                            var va = pa.getXdRelation || ka.getXdRelation,
                                wa = va(ta.params);
                            if (!(ta.id in ka._defaultCb) && !('next' in ta.params) && !('redirect_uri' in ta.params)) ta.params.next = ka._xdResult(ta.cb, ta.id, wa, true);
                            if (wa === 'parent') ES('Object', 'assign', false, ta.params, {
                                channel_url: ka._xdChannelHandler(qa, 'parent.parent')
                            }, true);
                            ta = ka.prepareParams(ta);
                            return ta;
                        },
                        prepareParams: function la(ma) {
                            if (ma.params.display !== 'async') delete ma.params.method;
                            ma.params = z(ma.params);
                            var na = p.encode(ma.params);
                            if (!t.nativeApp() && ka.urlTooLongForIE(ma.url + '?' + na)) {
                                ma.post = true;
                            } else if (na) ma.url += '?' + na;
                            return ma;
                        },
                        urlTooLongForIE: function la(ma) {
                            return t.ie() && t.ie() <= 8 && ma.length > 2048;
                        },
                        getDisplayMode: function la(ma, na) {
                            if (na.display === 'hidden' || na.display === 'none' || na.display === 'native') return na.display;
                            var oa = r.isEnvironment(r.ENVIRONMENTS.CANVAS) || r.isEnvironment(r.ENVIRONMENTS.PAGETAB);
                            if (oa && !na.display) return 'async';
                            if (t.mobile() || na.display === 'touch') return 'touch';
                            if (na.display == 'iframe' || na.display == 'dialog')
                                if (!ka.canIframe(na)) {
                                    n.error('"dialog" mode can only be used when the user is connected.');
                                    return 'popup';
                                }
                            if (ma.connectDisplay && !oa) return ma.connectDisplay;
                            return na.display || (ka.canIframe(na) ? 'dialog' : 'popup');
                        },
                        canIframe: function la(ma) {
                            if (r.getAccessToken()) return true;
                            if (t.mobile() && r.getLoggedIntoFacebook()) return !!ma.mobile_iframe;
                            return false;
                        },
                        getXdRelation: function la(ma) {
                            var na = ma.display;
                            if (na === 'popup' || na === 'touch') return 'opener';
                            if (na === 'dialog' || na === 'iframe' || na === 'hidden' || na === 'none') return 'parent';
                            if (na === 'async') return 'parent.frames[' + window.name + ']';
                        },
                        popup: function la(ma) {
                            var na = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
                                oa = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
                                pa = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.documentElement.clientWidth,
                                qa = typeof window.outerHeight != 'undefined' ? window.outerHeight : document.documentElement.clientHeight - 22,
                                ra = t.mobile() ? null : ma.size.width,
                                sa = t.mobile() ? null : ma.size.height,
                                ta = na < 0 ? window.screen.width + na : na,
                                ua = parseInt(ta + (pa - ra) / 2, 10),
                                va = parseInt(oa + (qa - sa) / 2.5, 10),
                                wa = [];
                            if (ra !== null) wa.push('width=' + ra);
                            if (sa !== null) wa.push('height=' + sa);
                            wa.push('left=' + ua);
                            wa.push('top=' + va);
                            wa.push('scrollbars=1');
                            if (ma.name == 'permissions.request' || ma.name == 'permissions.oauth') wa.push('location=1,toolbar=0');
                            wa = wa.join(',');
                            var la;
                            if (ma.post) {
                                la = window.open('about:blank', ma.id, wa);
                                if (la) {
                                    ka.setLoadedNode(ma, la, 'popup');
                                    i.submitToTarget({
                                        url: ma.url,
                                        target: ma.id,
                                        params: ma.params
                                    });
                                }
                            } else {
                                la = window.open(ma.url, ma.id, wa);
                                if (la) ka.setLoadedNode(ma, la, 'popup');
                            }
                            if (!la) return;
                            if (ma.id in ka._defaultCb) ka._popupMonitor();
                        },
                        setLoadedNode: function la(ma, na, oa) {
                            if (oa === 'iframe') na.fbCallID = ma.id;
                            na = {
                                node: na,
                                type: oa,
                                fbCallID: ma.id
                            };
                            ka._loadedNodes[ma.id] = na;
                        },
                        getLoadedNode: function la(ma) {
                            var na = typeof ma == 'object' ? ma.id : ma,
                                oa = ka._loadedNodes[na];
                            return oa ? oa.node : null;
                        },
                        hidden: function la(ma) {
                            ma.className = 'FB_UI_Hidden';
                            ma.root = i.appendHidden('');
                            ka._insertIframe(ma);
                        },
                        iframe: function la(ma) {
                            ma.className = 'FB_UI_Dialog';
                            if (ma.params.mobile_iframe) {
                                k.setForceTabletStyle(true);
                                k.setCloseOnOverlayTap(true);
                                k.setPositionDialogAtTopWhenPortrait(true);
                            }
                            var na = function pa() {
                                    var qa = ES('JSON', 'stringify', false, {
                                        error_code: 4201,
                                        error_message: y._("User canceled the Dialog flow")
                                    });
                                    ka._triggerDefault(ma.id, qa);
                                },
                                oa = {
                                    onClose: na,
                                    closeIcon: ma.closeIcon === undefined ? true : ma.closeIcon,
                                    classes: k.isTabletStyle() ? 'centered' : ''
                                };
                            if (ma.params.mobile_iframe) oa.styles = {
                                'border-radius': '8px'
                            };
                            ma.root = k.create(oa);
                            if (!ma.hideLoader) k.showLoader(na, ma.size.width);
                            j.addCss(ma.root, 'fb_dialog_iframe');
                            ka._insertIframe(ma);
                        },
                        touch: function la(ma) {
                            if (ma.params && ma.params.in_iframe) {
                                if (ma.ui_created) {
                                    k.showLoader(function() {
                                        ka._triggerDefault(ma.id, null);
                                    }, 0);
                                } else ka.iframe(ma);
                            } else if (t.nativeApp() && !ma.ui_created) {
                                ma.frame = ma.id;
                                o.onready(function() {
                                    ka.setLoadedNode(ma, o.open(ma.url + '#cb=' + ma.frameName), 'native');
                                });
                                ka._popupMonitor();
                            } else if (!ma.ui_created) ka.popup(ma);
                        },
                        async: function la(ma) {
                            ma.params.redirect_uri = location.protocol + '//' + location.host + location.pathname;
                            delete ma.params.access_token;
                            q.remote.showDialog(ma.params, function(na) {
                                var oa = na.result;
                                if (oa && oa.e2e) {
                                    var pa = k.get(ma.id);
                                    pa.trackEvents(oa.e2e);
                                    pa.trackEvent('close');
                                    delete oa.e2e;
                                }
                                ma.cb(oa);
                            });
                        },
                        native: function la(ma) {
                            da(ma.params);
                        },
                        getDefaultSize: function la() {
                            return k.getDefaultSize();
                        },
                        _insertIframe: function la(ma) {
                            ka._loadedNodes[ma.id] = false;
                            var na = function oa(pa) {
                                if (ma.id in ka._loadedNodes) ka.setLoadedNode(ma, pa, 'iframe');
                            };
                            if (ma.post) {
                                ca({
                                    url: 'about:blank',
                                    root: ma.root,
                                    className: ma.className,
                                    width: ma.size.width,
                                    height: ma.size.height,
                                    id: ma.id,
                                    onInsert: na,
                                    onload: function oa(pa) {
                                        i.submitToTarget({
                                            url: ma.url,
                                            target: pa.name,
                                            params: ma.params
                                        });
                                    }
                                });
                            } else ca({
                                url: ma.url,
                                root: ma.root,
                                className: ma.className,
                                width: ma.size.width,
                                height: ma.size.height,
                                id: ma.id,
                                name: ma.frameName,
                                onInsert: na
                            });
                        },
                        _handleResizeMessage: function la(ma, na) {
                            var oa = ka.getLoadedNode(ma);
                            if (!oa) return;
                            if (na.height) oa.style.height = na.height + 'px';
                            if (na.width) oa.style.width = na.width + 'px';
                            v.inform('resize.ack', na || {}, 'parent.frames[' + oa.name + ']');
                            if (!k.isActive(oa)) {
                                k.show(oa);
                            } else k._centerActive();
                        },
                        _triggerDefault: function la(ma, na) {
                            var oa = {
                                frame: ma
                            };
                            if (na) oa.result = na;
                            ka._xdRecv(oa, ka._defaultCb[ma] || function() {});
                        },
                        _popupMonitor: function la() {
                            var ma;
                            for (var na in ka._loadedNodes)
                                if (ka._loadedNodes.hasOwnProperty(na) && na in ka._defaultCb) {
                                    var oa = ka._loadedNodes[na];
                                    if (oa.type != 'popup' && oa.type != 'native') continue;
                                    var pa = oa.node;
                                    try {
                                        if (pa.closed) {
                                            ka._triggerDefault(na, null);
                                        } else ma = true;
                                    } catch (qa) {}
                                }
                            if (ma && !ka._popupInterval) {
                                ka._popupInterval = setInterval(ka._popupMonitor, 100);
                            } else if (!ma && ka._popupInterval) {
                                clearInterval(ka._popupInterval);
                                ka._popupInterval = null;
                            }
                        },
                        _xdChannelHandler: function la(ma, na) {
                            return v.handler(function(oa) {
                                var pa = ka.getLoadedNode(ma);
                                if (!pa) return;
                                if (oa.type == 'resize') {
                                    ka._handleResizeMessage(ma, oa);
                                } else if (oa.type == 'hide') {
                                    k.hide(pa);
                                } else if (oa.type == 'rendered') {
                                    var qa = k._findRoot(pa);
                                    k.show(qa);
                                } else if (oa.type == 'fireevent') l.fire(oa.event);
                            }, na, true, null);
                        },
                        _xdNextHandler: function la(ma, na, oa, pa) {
                            if (pa) ka._defaultCb[na] = ma;
                            return v.handler(function(qa) {
                                ka._xdRecv(qa, ma);
                            }, oa) + '&frame=' + na;
                        },
                        _xdRecv: function la(ma, na) {
                            var oa = ka.getLoadedNode(ma.frame);
                            if (oa)
                                if (oa.close) {
                                    try {
                                        oa.close();
                                        if (/iPhone.*Version\/(5|6)/.test(navigator.userAgent) && RegExp.$1 !== '5') window.focus();
                                        ka._popupCount--;
                                    } catch (pa) {}
                                } else if (j.containsCss(oa, 'FB_UI_Hidden')) {
                                setTimeout(function() {
                                    oa.parentNode.parentNode.removeChild(oa.parentNode);
                                }, 3000);
                            } else if (j.containsCss(oa, 'FB_UI_Dialog')) k.remove(oa);
                            delete ka._loadedNodes[ma.frame];
                            delete ka._defaultCb[ma.frame];
                            if (ma.e2e) {
                                var qa = k.get(ma.frame);
                                qa.trackEvents(ma.e2e);
                                qa.trackEvent('close');
                                delete ma.e2e;
                            }
                            na(ma);
                        },
                        _xdResult: function la(ma, na, oa, pa) {
                            return (ka._xdNextHandler(function(qa) {
                                ma && ma(qa.result && qa.result != ka._resultToken && ES('JSON', 'parse', false, qa.result));
                            }, na, oa, pa) + '&result=' + encodeURIComponent(ka._resultToken));
                        },
                        xdHandler: function la(ma, na, oa, pa, qa) {
                            return ka._xdNextHandler(h.xdResponseWrapper(ma, pa, qa), na, oa, true);
                        }
                    };
                    q.stub('showDialog');
                    f.exports = ka;
                }, null);
                __d('sdk.ui', ['Assert', 'sdk.Impressions', 'Log', 'sdk.PlatformVersioning', 'sdk.Runtime', 'sdk.UIServer', 'sdk.feature'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
                    function o(p, q) {
                        h.isObject(p);
                        h.maybeFunction(q);
                        if (l.getIsVersioned()) {
                            k.assertVersionIsSet();
                            if (p.version) {
                                k.assertValidVersion(p.version);
                            } else p.version = l.getVersion();
                        }
                        p = ES('Object', 'assign', false, {}, p);
                        if (!p.method) {
                            j.error('"method" is a required parameter for FB.ui().');
                            return null;
                        }
                        if (p.method == 'pay.prompt') p.method = 'pay';
                        var r = p.method;
                        if (p.redirect_uri) {
                            j.warn('When using FB.ui, you should not specify a redirect_uri.');
                            delete p.redirect_uri;
                        }
                        if ((r == 'permissions.request' || r == 'permissions.oauth') && (p.display == 'iframe' || p.display == 'dialog')) p.display = m.checkOauthDisplay(p);
                        if (p.display === 'native' && r !== 'send') {
                            j.error('display type "native" not supported');
                            return null;
                        }
                        var s = n('e2e_tracking', true);
                        if (s) p.e2e = {};
                        var t = m.prepareCall(p, q || function() {});
                        if (!t) return null;
                        var u = t.params.display;
                        if (u === 'dialog') {
                            u = 'iframe';
                        } else if (u === 'none') u = 'hidden';
                        var v = m[u];
                        if (!v) {
                            j.error('"display" must be one of "popup", ' + '"dialog", "iframe", "touch", "async", "hidden", or "none"');
                            return null;
                        }
                        if (s) t.dialog.subscribe('e2e:end', function(w) {
                            w.method = r;
                            w.display = u;
                            j.debug('e2e: %s', ES('JSON', 'stringify', false, w));
                            i.log(114, {
                                payload: w
                            });
                        });
                        v(t);
                        return t.dialog;
                    }
                    f.exports = o;
                }, null);
                __d('legacy:fb.auth', ['sdk.Auth', 'sdk.Cookie', 'sdk.Event', 'FB', 'Log', 'sdk.Runtime', 'sdk.SignedRequest', 'sdk.ui'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
                    k.provide('', {
                        getLoginStatus: function p() {
                            return h.getLoginStatus.apply(h, arguments);
                        },
                        getAuthResponse: function p() {
                            return h.getAuthResponse();
                        },
                        getAccessToken: function p() {
                            return m.getAccessToken() || null;
                        },
                        getUserID: function p() {
                            return m.getUserID() || m.getCookieUserID();
                        },
                        login: function p(q, r) {
                            if (r && r.perms && !r.scope) {
                                r.scope = r.perms;
                                delete r.perms;
                                l.warn('OAuth2 specification states that \'perms\' ' + 'should now be called \'scope\'.  Please update.');
                            }
                            var s = m.isEnvironment(m.ENVIRONMENTS.CANVAS) || m.isEnvironment(m.ENVIRONMENTS.PAGETAB);
                            o(babelHelpers['extends']({
                                method: 'permissions.oauth',
                                display: s ? 'async' : 'popup',
                                domain: location.hostname
                            }, r || {}), q);
                        },
                        logout: function p(q) {
                            o({
                                method: 'auth.logout',
                                display: 'hidden'
                            }, q);
                        }
                    });
                    h.subscribe('logout', ES(j.fire, 'bind', true, j, 'auth.logout'));
                    h.subscribe('login', ES(j.fire, 'bind', true, j, 'auth.login'));
                    h.subscribe('authresponse.change', ES(j.fire, 'bind', true, j, 'auth.authResponseChange'));
                    h.subscribe('status.change', ES(j.fire, 'bind', true, j, 'auth.statusChange'));
                    j.subscribe('init:post', function(p) {
                        if (p.status) h.getLoginStatus();
                        if (m.getClientID())
                            if (p.authResponse) {
                                h.setAuthResponse(p.authResponse, 'connected');
                            } else if (m.getUseCookie()) {
                            var q = i.loadSignedRequest(),
                                r;
                            if (q) {
                                try {
                                    r = n.parse(q);
                                } catch (s) {
                                    i.clearSignedRequestCookie();
                                }
                                if (r && r.user_id) m.setCookieUserID(r.user_id);
                            }
                            i.loadMeta();
                        }
                    });
                }, 3);
                __d('sdk.Canvas.IframeHandling', ['DOMWrapper', 'sdk.RPC'], (function a(b, c, d, e, f, g, h, i) {
                    var j = null,
                        k;

                    function l() {
                        var p = h.getWindow().document,
                            q = p.body,
                            r = p.documentElement,
                            s = Math.max(q.offsetTop, 0),
                            t = Math.max(r.offsetTop, 0),
                            u = q.scrollHeight + s,
                            v = q.offsetHeight + s,
                            w = r.scrollHeight + t,
                            x = r.offsetHeight + t;
                        return Math.max(u, v, w, x);
                    }

                    function m(p) {
                        if (typeof p != 'object') p = {};
                        var q = 0,
                            r = 0;
                        if (!p.height) {
                            p.height = l();
                            q = 16;
                            r = 4;
                        }
                        if (!p.frame) p.frame = window.name || 'iframe_canvas';
                        if (k) {
                            var s = k.height,
                                t = p.height - s;
                            if (t <= r && t >= -q) return false;
                        }
                        k = p;
                        i.remote.setSize(p);
                        return true;
                    }

                    function n(p, q) {
                        if (q === undefined && typeof p === 'number') {
                            q = p;
                            p = true;
                        }
                        if (p || p === undefined) {
                            if (j === null) j = setInterval(function() {
                                m();
                            }, q || 100);
                            m();
                        } else if (j !== null) {
                            clearInterval(j);
                            j = null;
                        }
                    }
                    i.stub('setSize');
                    var o = {
                        setSize: m,
                        setAutoGrow: n
                    };
                    f.exports = o;
                }), null);
                __d('sdk.Canvas.Navigation', ['sdk.RPC'], (function a(b, c, d, e, f, g, h) {
                    function i(k) {
                        h.local.navigate = function(l) {
                            k({
                                path: l
                            });
                        };
                        h.remote.setNavigationEnabled(true);
                    }
                    h.stub('setNavigationEnabled');
                    var j = {
                        setUrlHandler: i
                    };
                    f.exports = j;
                }), null);
                __d('sdk.Canvas.Plugin', ['Log', 'sdk.RPC', 'sdk.Runtime', 'sdk.UA', 'sdk.api'], function a(b, c, d, e, f, g, h, i, j, k, l) {
                    var m = 'CLSID:D27CDB6E-AE6D-11CF-96B8-444553540000',
                        n = 'CLSID:444785F1-DE89-4295-863A-D46C3A781394',
                        o = null,
                        p = k.osx() && k.osx.getVersionParts(),
                        q = !(p && p[0] > 10 && p[1] > 10 && (k.chrome() >= 31 || k.webkit() >= 537.71 || k.firefox() >= 25));

                    function r(ba) {
                        ba._hideunity_savedstyle = {};
                        ba._hideunity_savedstyle.left = ba.style.left;
                        ba._hideunity_savedstyle.position = ba.style.position;
                        ba._hideunity_savedstyle.width = ba.style.width;
                        ba._hideunity_savedstyle.height = ba.style.height;
                        ba.style.left = '-10000px';
                        ba.style.position = 'absolute';
                        ba.style.width = '1px';
                        ba.style.height = '1px';
                    }

                    function s(ba) {
                        if (ba._hideunity_savedstyle) {
                            ba.style.left = ba._hideunity_savedstyle.left;
                            ba.style.position = ba._hideunity_savedstyle.position;
                            ba.style.width = ba._hideunity_savedstyle.width;
                            ba.style.height = ba._hideunity_savedstyle.height;
                        }
                    }

                    function t(ba) {
                        ba._old_visibility = ba.style.visibility;
                        ba.style.visibility = 'hidden';
                    }

                    function u(ba) {
                        ba.style.visibility = ba._old_visibility || '';
                        delete ba._old_visibility;
                    }

                    function v(ba) {
                        var ca = ba.type ? ba.type.toLowerCase() : null,
                            da = ca === 'application/x-shockwave-flash' || ba.classid && ba.classid.toUpperCase() == m;
                        if (!da) return false;
                        var ea = /opaque|transparent/i;
                        if (ea.test(ba.getAttribute('wmode'))) return false;
                        for (var fa = 0; fa < ba.childNodes.length; fa++) {
                            var ga = ba.childNodes[fa];
                            if (/param/i.test(ga.nodeName) && /wmode/i.test(ga.name) && ea.test(ga.value)) return false;
                        }
                        return true;
                    }

                    function w(ba) {
                        var ca = ba.type ? ba.type.toLowerCase() : null;
                        return ca === 'application/vnd.unity' || ba.classid && ba.classid.toUpperCase() == n;
                    }

                    function x(ba) {
                        var ca = ES('Array', 'from', false, window.document.getElementsByTagName('object'));
                        ca = ca.concat(ES('Array', 'from', false, window.document.getElementsByTagName('embed')));
                        var da = false,
                            ea = false;
                        ES(ca, 'forEach', true, function(ga) {
                            var ha = v(ga),
                                ia = q && w(ga);
                            if (!ha && !ia) return;
                            da = da || ha;
                            ea = ea || ia;
                            var ja = function la() {
                                if (ba.state === 'opened') {
                                    if (ha) {
                                        t(ga);
                                    } else r(ga);
                                } else if (ha) {
                                    u(ga);
                                } else s(ga);
                            };
                            if (o) {
                                h.info('Calling developer specified callback');
                                var ka = {
                                    state: ba.state,
                                    elem: ga
                                };
                                o(ka);
                                setTimeout(ja, 200);
                            } else ja();
                        });
                        if (Math.random() <= 1 / 1000) {
                            var fa = {
                                unity: ea,
                                flash: da
                            };
                            l(j.getClientID() + '/occludespopups', 'post', fa);
                        }
                    }
                    i.local.hidePluginObjects = function() {
                        h.info('hidePluginObjects called');
                        x({
                            state: 'opened'
                        });
                    };
                    i.local.showPluginObjects = function() {
                        h.info('showPluginObjects called');
                        x({
                            state: 'closed'
                        });
                    };
                    i.local.showFlashObjects = i.local.showPluginObjects;
                    i.local.hideFlashObjects = i.local.hidePluginObjects;

                    function y() {
                        t();
                        r();
                    }

                    function z() {
                        u();
                        s();
                    }
                    var aa = {
                        _setHidePluginCallback: function ba(ca) {
                            o = ca;
                        },
                        hidePluginElement: y,
                        showPluginElement: z
                    };
                    f.exports = aa;
                }, null);
                __d('sdk.Canvas.Tti', ['sdk.RPC', 'sdk.Runtime'], function a(b, c, d, e, f, g, h, i) {
                    function j(o, p) {
                        var q = {
                                appId: i.getClientID(),
                                time: ES('Date', 'now', false),
                                name: p
                            },
                            r = [q];
                        if (o) r.push(function(s) {
                            o(s.result);
                        });
                        h.remote.logTtiMessage.apply(null, r);
                    }

                    function k() {
                        j(null, 'StartIframeAppTtiTimer');
                    }

                    function l(o) {
                        j(o, 'StopIframeAppTtiTimer');
                    }

                    function m(o) {
                        j(o, 'RecordIframeAppTti');
                    }
                    h.stub('logTtiMessage');
                    var n = {
                        setDoneLoading: m,
                        startTimer: k,
                        stopTimer: l
                    };
                    f.exports = n;
                }, null);
                __d('legacy:fb.canvas', ['Assert', 'sdk.Canvas.Environment', 'sdk.Event', 'FB', 'sdk.Canvas.IframeHandling', 'sdk.Canvas.Navigation', 'sdk.Canvas.Plugin', 'sdk.RPC', 'sdk.Runtime', 'sdk.Canvas.Tti'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
                    k.provide('Canvas', {
                        setSize: function r(s) {
                            h.maybeObject(s, 'Invalid argument');
                            return l.setSize.apply(null, arguments);
                        },
                        setAutoGrow: function r() {
                            return l.setAutoGrow.apply(null, arguments);
                        },
                        getPageInfo: function r(s) {
                            h.isFunction(s, 'Invalid argument');
                            return i.getPageInfo.apply(null, arguments);
                        },
                        scrollTo: function r(s, t) {
                            h.maybeNumber(s, 'Invalid argument');
                            h.maybeNumber(t, 'Invalid argument');
                            return i.scrollTo.apply(null, arguments);
                        },
                        setDoneLoading: function r(s) {
                            h.maybeFunction(s, 'Invalid argument');
                            return q.setDoneLoading.apply(null, arguments);
                        },
                        startTimer: function r() {
                            return q.startTimer.apply(null, arguments);
                        },
                        stopTimer: function r(s) {
                            h.maybeFunction(s, 'Invalid argument');
                            return q.stopTimer.apply(null, arguments);
                        },
                        getHash: function r(s) {
                            h.isFunction(s, 'Invalid argument');
                            return m.getHash.apply(null, arguments);
                        },
                        setHash: function r(s) {
                            h.isString(s, 'Invalid argument');
                            return m.setHash.apply(null, arguments);
                        },
                        setUrlHandler: function r(s) {
                            h.isFunction(s, 'Invalid argument');
                            return m.setUrlHandler.apply(null, arguments);
                        }
                    });
                    o.local.fireEvent = ES(j.fire, 'bind', true, j);
                    j.subscribe('init:post', function(r) {
                        if (p.isEnvironment(p.ENVIRONMENTS.CANVAS)) {
                            h.isTrue(!r.hideFlashCallback || !r.hidePluginCallback, 'cannot specify deprecated hideFlashCallback and new hidePluginCallback');
                            n._setHidePluginCallback(r.hidePluginCallback || r.hideFlashCallback);
                        }
                    });
                }, 3);
                __d('legacy:fb.canvas.plugin', ['FB', 'sdk.Canvas.Plugin'], (function a(b, c, d, e, f, g, h, i) {
                    h.provide('Canvas.Plugin', i);
                }), 3);
                __d('sdk.Canvas.Prefetcher', ['JSSDKCanvasPrefetcherConfig', 'sdk.Runtime', 'sdk.api'], function a(b, c, d, e, f, g, h, i, j) {
                    var k = {
                            AUTOMATIC: 0,
                            MANUAL: 1
                        },
                        l = h.sampleRate,
                        m = h.blacklist,
                        n = k.AUTOMATIC,
                        o = [];

                    function p() {
                        var u = {
                            object: 'data',
                            link: 'href',
                            script: 'src'
                        };
                        if (n == k.AUTOMATIC) ES(ES('Object', 'keys', false, u), 'forEach', true, function(v) {
                            var w = u[v];
                            ES(ES('Array', 'from', false, document.getElementsByTagName(v)), 'forEach', true, function(x) {
                                if (x[w]) o.push(x[w]);
                            });
                        });
                        if (o.length === 0) return;
                        j(i.getClientID() + '/staticresources', 'post', {
                            urls: ES('JSON', 'stringify', false, o),
                            is_https: location.protocol === 'https:'
                        });
                        o = [];
                    }

                    function q() {
                        if (!i.isEnvironment(i.ENVIRONMENTS.CANVAS) || !i.getClientID() || !l) return;
                        if (Math.random() > 1 / l || m == '*' || ~ES(m, 'indexOf', true, i.getClientID())) return;
                        setTimeout(p, 30000);
                    }

                    function r(u) {
                        n = u;
                    }

                    function s(u) {
                        o.push(u);
                    }
                    var t = {
                        COLLECT_AUTOMATIC: k.AUTOMATIC,
                        COLLECT_MANUAL: k.MANUAL,
                        addStaticResource: s,
                        setCollectionMode: r,
                        _maybeSample: q
                    };
                    f.exports = t;
                }, null);
                __d('legacy:fb.canvas.prefetcher', ['FB', 'sdk.Canvas.Prefetcher', 'sdk.Event', 'sdk.Runtime'], function a(b, c, d, e, f, g, h, i, j, k) {
                    h.provide('Canvas.Prefetcher', i);
                    j.subscribe('init:post', function(l) {
                        if (k.isEnvironment(k.ENVIRONMENTS.CANVAS)) i._maybeSample();
                    });
                }, 3);
                __d('legacy:fb.canvas.presence', ['sdk.RPC', 'sdk.Event'], (function a(b, c, d, e, f, g, h, i) {
                    i.subscribe(i.SUBSCRIBE, j);
                    i.subscribe(i.UNSUBSCRIBE, k);
                    h.stub('useFriendsOnline');

                    function j(l, m) {
                        if (l != 'canvas.friendsOnlineUpdated') return;
                        if (m.length === 1) h.remote.useFriendsOnline(true);
                    }

                    function k(l, m) {
                        if (l != 'canvas.friendsOnlineUpdated') return;
                        if (m.length === 0) h.remote.useFriendsOnline(false);
                    }
                }), 3);
                __d('legacy:fb.canvas.syncrequests', ['sdk.RPC', 'sdk.Event'], (function a(b, c, d, e, f, g, h, i) {
                    h.stub('initPendingSyncRequests');

                    function j(k, l) {
                        if (k != 'canvas.syncRequestUpdated') return;
                        h.remote.initPendingSyncRequests();
                        i.unsubscribe(i.SUBSCRIBE, j);
                    }
                    i.subscribe(i.SUBSCRIBE, j);
                }), 3);
                __d('legacy:fb.event', ['FB', 'sdk.Event', 'sdk.Runtime', 'sdk.Scribe', 'sdk.feature'], function a(b, c, d, e, f, g, h, i, j, k, l) {
                    var m = [],
                        n = null,
                        o = l('event_subscriptions_log', false);
                    h.provide('Event', {
                        subscribe: function p(q, r) {
                            if (o) {
                                m.push(q);
                                if (!n) n = setTimeout(function() {
                                    k.log('jssdk_error', {
                                        appId: j.getClientID(),
                                        error: 'EVENT_SUBSCRIPTIONS_LOG',
                                        extra: {
                                            line: 0,
                                            name: 'EVENT_SUBSCRIPTIONS_LOG',
                                            script: 'N/A',
                                            stack: 'N/A',
                                            message: m.sort().join(',')
                                        }
                                    });
                                    m.length = 0;
                                    n = null;
                                }, o);
                            }
                            return i.subscribe(q, r);
                        },
                        unsubscribe: ES(i.unsubscribe, 'bind', true, i)
                    });
                }, 3);
                __d('legacy:fb.frictionless', ['FB', 'sdk.Frictionless'], (function a(b, c, d, e, f, g, h, i) {
                    h.provide('Frictionless', i);
                }), 3);
                __d('sdk.MBasicInitializer', ['sdk.DOM', 'sdk.Runtime', 'sdk.UA', 'sdk.URI', 'UrlMap', 'sdk.fbt', 'sdk.feature'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
                    var o = function q() {
                        function r(s) {
                            if (!s) return;
                            var t = s.parentNode;
                            if (!t) return;
                            var u = h.getAttr(s, 'href') || window.location.href,
                                v = new k(l.resolve('m'));
                            v.setPath('/dialog/share');
                            v.addQueryData('href', encodeURI(u));
                            v.addQueryData('app_id', i.getClientID());
                            v.addQueryData('mbasic_link', 1);
                            var w = document.createElement('a');
                            w.style = 'display:inline-block; zoom:1;';
                            w.textContent = m._("Share to Facebook");
                            w.setAttribute('href', v.toString());
                            w.setAttribute('target', '_blank');
                            t.insertBefore(w, s);
                            t.removeChild(s);
                        }
                        if (!n('js_sdk_mbasic_share_plugin_init', false)) return;
                        ES(ES('Array', 'from', false, document.getElementsByTagName('fb:share-button')), 'forEach', true, function(s) {
                            return r(s);
                        });
                        ES(ES('Array', 'from', false, document.getElementsByClassName('fb-share-button')), 'forEach', true, function(s) {
                            return r(s);
                        });
                    };

                    function p() {
                        if (!j.mBasic()) return;
                        o();
                    }
                    f.exports = {
                        init: p
                    };
                }, null);
                __d('sdk.init', ['sdk.Cookie', 'sdk.ErrorHandling', 'sdk.Event', 'sdk.Impressions', 'Log', 'ManagedError', 'sdk.MBasicInitializer', 'sdk.PlatformVersioning', 'QueryString', 'sdk.Runtime', 'sdk.UA', 'sdk.URI', 'sdk.feature'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
                    function u(w) {
                        var x = typeof w == 'number' && w > 0 || typeof w == 'string' && /^[0-9a-f]{21,}$|^[0-9]{1,21}$/.test(w);
                        if (x) return w.toString();
                        l.warn('Invalid App Id: Must be a number or numeric string representing ' + 'the application id.');
                        return null;
                    }

                    function v(w) {
                        if (q.getInitialized()) l.warn('FB.init has already been called - this could indicate a problem');
                        if (q.getIsVersioned()) {
                            if (Object.prototype.toString.call(w) !== '[object Object]') throw new m('Invalid argument');
                            if (w.authResponse) l.warn('Setting authResponse is not supported');
                            if (!w.version) w.version = new s(location.href).getQueryData().sdk_version;
                            o.assertValidVersion(w.version);
                            q.setVersion(w.version);
                        } else {
                            if (/number|string/.test(typeof w)) {
                                l.warn('FB.init called with invalid parameters');
                                w = {
                                    apiKey: w
                                };
                            }
                            w = ES('Object', 'assign', false, {
                                status: true
                            }, w || {});
                        }
                        var x = u(w.appId || w.apiKey);
                        if (x !== null) q.setClientID(x);
                        if ('scope' in w) q.setScope(w.scope);
                        if (w.cookie) {
                            q.setUseCookie(true);
                            if (typeof w.cookie === 'string') h.setDomain(w.cookie);
                        }
                        if (w.kidDirectedSite) q.setKidDirectedSite(true);
                        q.setInitialized(true);
                        if (t('js_sdk_impression_on_load', true)) k.log(115, {});
                        if (r.mBasic()) n.init();
                        j.fire('init:post', w);
                    }
                    setTimeout(function() {
                        var w = /(connect\.facebook\.net|\.facebook\.com\/assets.php).*?#(.*)/;
                        ES(ES('Array', 'from', false, fb_fif_window.document.getElementsByTagName('script')), 'forEach', true, function(x) {
                            if (x.src) {
                                var y = w.exec(x.src);
                                if (y) {
                                    var z = p.decode(y[2]);
                                    for (var aa in z)
                                        if (z.hasOwnProperty(aa)) {
                                            var ba = z[aa];
                                            if (ba == '0') z[aa] = 0;
                                        }
                                    v(z);
                                }
                            }
                        });
                        if (window.fbAsyncInit && !window.fbAsyncInit.hasRun) {
                            window.fbAsyncInit.hasRun = true;
                            i.unguard(window.fbAsyncInit)();
                        }
                    }, 0);
                    f.exports = v;
                }, null);
                __d('legacy:fb.init', ['FB', 'sdk.init'], (function a(b, c, d, e, f, g, h, i) {
                    h.provide('', {
                        init: i
                    });
                }), 3);
                __d('legacy:fb.ui', ['FB', 'sdk.ui'], (function a(b, c, d, e, f, g, h, i) {
                    h.provide('', {
                        ui: i
                    });
                }), 3);
                __d('legacy:fb.versioned-sdk', ['sdk.Runtime'], (function a(b, c, d, e, f, g, h) {
                    h.setIsVersioned(true);
                }), 3);
                __d('IframePlugin', ['sdk.Auth', 'sdk.DOM', 'sdk.Event', 'Log', 'ObservableMixin', 'sdk.PlatformVersioning', 'QueryString', 'sdk.Runtime', 'Type', 'sdk.UA', 'sdk.URI', 'UrlMap', 'sdk.XD', 'sdk.createIframe', 'sdk.feature', 'guid', 'resolveURI'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) {
                    var y = {
                        skin: 'string',
                        font: 'string',
                        width: 'string',
                        height: 'px',
                        ref: 'string',
                        color_scheme: 'string'
                    };

                    function z(ha, ia, ja) {
                        if (ia || ia === 0)
                            if (ia === '100%') {
                                ha.style.width = '100%';
                            } else ha.style.width = ia + 'px';
                        if (ja || ja === 0) ha.style.height = ja + 'px';
                    }

                    function aa(ha) {
                        return function(ia) {
                            var ja = {
                                width: ia.width,
                                height: ia.height,
                                pluginID: ha
                            };
                            j.fire('xfbml.resize', ja);
                        };
                    }
                    var ba = {
                        string: function ha(ia) {
                            return ia;
                        },
                        bool: function ha(ia) {
                            return ia ? /^(?:true|1|yes|on)$/i.test(ia) : undefined;
                        },
                        url: function ha(ia) {
                            return x(ia);
                        },
                        url_maybe: function ha(ia) {
                            return ia ? x(ia) : ia;
                        },
                        hostname: function ha(ia) {
                            return ia || window.location.hostname;
                        },
                        px: function ha(ia) {
                            return /^(\d+)(?:px)?$/.test(ia) ? parseInt(RegExp.$1, 10) : undefined;
                        },
                        text: function ha(ia) {
                            return ia;
                        }
                    };

                    function ca(ha, ia) {
                        var ja = ha[ia] || ha[ia.replace(/_/g, '-')] || ha[ia.replace(/_/g, '')] || ha['data-' + ia] || ha['data-' + ia.replace(/_/g, '-')] || ha['data-' + ia.replace(/_/g, '')] || undefined;
                        return ja;
                    }

                    function da(ha, ia, ja, ka) {
                        ES(ES('Object', 'keys', false, ha), 'forEach', true, function(la) {
                            if (ha[la] == 'text' && !ja[la]) {
                                ja[la] = ia.textContent || ia.innerText || '';
                                ia.setAttribute(la, ja[la]);
                            }
                            ka[la] = ba[ha[la]](ca(ja, la));
                        });
                    }

                    function ea(ha) {
                        if (ha === '100%') return '100%';
                        return ha || ha === '0' || ha === 0 ? parseInt(ha, 10) : undefined;
                    }

                    function fa(ha) {
                        if (ha) z(ha, 0, 0);
                    }
                    var ga = p.extend({
                        constructor: function ha(ia, ja, ka, la) {
                            this.parent();
                            ka = ka.replace(/-/g, '_');
                            var ma = ca(la, 'plugin_id');
                            this.subscribe('xd.resize', aa(ma));
                            this.subscribe('xd.resize.flow', aa(ma));
                            this.subscribe('xd.resize.flow', ES(function(ra) {
                                ES('Object', 'assign', false, this._iframeOptions.root.style, {
                                    verticalAlign: 'bottom',
                                    overflow: ''
                                });
                                z(this._iframeOptions.root, ea(ra.width), ea(ra.height));
                                this.updateLift();
                                clearTimeout(this._timeoutID);
                            }, 'bind', true, this));
                            this.subscribe('xd.resize', ES(function(ra) {
                                ES('Object', 'assign', false, this._iframeOptions.root.style, {
                                    verticalAlign: 'bottom',
                                    overflow: ''
                                });
                                z(this._iframeOptions.root, ea(ra.width), ea(ra.height));
                                z(this._iframe, ea(ra.width), ea(ra.height));
                                this._isIframeResized = true;
                                this.updateLift();
                                clearTimeout(this._timeoutID);
                            }, 'bind', true, this));
                            this.subscribe('xd.resize.iframe', ES(function(ra) {
                                if (ra.reposition === 'true' && v('reposition_iframe', false)) this.reposition(ea(ra.width));
                                z(this._iframe, ea(ra.width), ea(ra.height));
                                this._isIframeResized = true;
                                this.updateLift();
                                clearTimeout(this._timeoutID);
                            }, 'bind', true, this));
                            this.subscribe('xd.sdk_event', function(ra) {
                                var sa = ES('JSON', 'parse', false, ra.data);
                                sa.pluginID = ma;
                                j.fire(ra.event, sa, ia);
                            });
                            var na = s.resolve('www', true) + '/plugins/' + ka + '.php?',
                                oa = {};
                            da(this.getParams(), ia, la, oa);
                            da(y, ia, la, oa);
                            ES('Object', 'assign', false, oa, {
                                app_id: o.getClientID(),
                                locale: o.getLocale(),
                                sdk: 'joey',
                                kid_directed_site: o.getKidDirectedSite(),
                                channel: t.handler(ES(function(ra) {
                                    return this.inform('xd.' + ra.type, ra);
                                }, 'bind', true, this), 'parent.parent', true)
                            });
                            oa.container_width = ia.offsetWidth;
                            i.addCss(ia, 'fb_iframe_widget');
                            var pa = w();
                            this.subscribe('xd.verify', function(ra) {
                                t.sendToFacebook(pa, {
                                    method: 'xd/verify',
                                    params: ES('JSON', 'stringify', false, ra.token)
                                });
                            });
                            this.subscribe('xd.refreshLoginStatus', ES(function() {
                                h.removeLogoutState();
                                h.getLoginStatus(ES(this.inform, 'bind', true, this, 'login.status'), true);
                            }, 'bind', true, this));
                            var qa = document.createElement('span');
                            ES('Object', 'assign', false, qa.style, {
                                verticalAlign: 'top',
                                width: '0px',
                                height: '0px',
                                overflow: 'hidden'
                            });
                            this._element = ia;
                            this._ns = ja;
                            this._tag = ka;
                            this._params = oa;
                            this._config = this.getConfig();
                            this._iframeOptions = {
                                root: qa,
                                url: na + n.encode(oa),
                                name: pa,
                                width: this._config.mobile_fullsize && q.mobile() ? void 0 : oa.width || 1000,
                                height: oa.height || 1000,
                                style: {
                                    border: 'none',
                                    visibility: 'hidden'
                                },
                                title: this._ns + ':' + this._tag + ' Facebook Social Plugin',
                                onload: ES(function() {
                                    return this.inform('render');
                                }, 'bind', true, this),
                                onerror: ES(function() {
                                    return fa(this._iframe);
                                }, 'bind', true, this)
                            };
                            if (this.isFluid() && oa.width !== 'auto') {
                                i.addCss(this._element, 'fb_iframe_widget_fluid_desktop');
                                if (!oa.width && this._config.full_width) {
                                    this._element.style.width = '100%';
                                    this._iframeOptions.root.style.width = '100%';
                                    this._iframeOptions.style.width = '100%';
                                    this._params.container_width = this._element.offsetWidth;
                                    this._iframeOptions.url = na + n.encode(this._params);
                                }
                            }
                        },
                        process: function ha() {
                            if (o.getIsVersioned()) {
                                m.assertVersionIsSet();
                                var ia = new r(this._iframeOptions.url);
                                this._iframeOptions.url = ia.setPath('/' + o.getVersion() + ia.getPath()).toString();
                            }
                            var ja = ES('Object', 'assign', false, {}, this._params);
                            delete ja.channel;
                            var ka = n.encode(ja);
                            if (this._element.getAttribute('fb-iframe-plugin-query') == ka) {
                                k.info('Skipping render: %s:%s %s', this._ns, this._tag, ka);
                                this.inform('render');
                                return;
                            }
                            this._element.setAttribute('fb-iframe-plugin-query', ka);
                            this.subscribe('render', ES(function() {
                                this._iframe.style.visibility = 'visible';
                                if (!this._isIframeResized) fa(this._iframe);
                            }, 'bind', true, this));
                            while (this._element.firstChild) this._element.removeChild(this._element.firstChild);
                            this._element.appendChild(this._iframeOptions.root);
                            var la = q.mobile() ? 120 : 45;
                            this._timeoutID = setTimeout(ES(function() {
                                fa(this._iframe);
                                k.warn('%s:%s failed to resize in %ss', this._ns, this._tag, la);
                            }, 'bind', true, this), la * 1000);
                            this._iframe = u(this._iframeOptions);
                            if (q.mobile() || ja.width === 'auto') {
                                i.addCss(this._element, 'fb_iframe_widget_fluid');
                                if (!this._iframeOptions.width) {
                                    ES('Object', 'assign', false, this._element.style, {
                                        display: 'block',
                                        width: '100%',
                                        height: 'auto'
                                    });
                                    ES('Object', 'assign', false, this._iframeOptions.root.style, {
                                        width: '100%',
                                        height: 'auto'
                                    });
                                    var ma = {
                                        height: 'auto',
                                        position: 'static',
                                        width: '100%'
                                    };
                                    if (q.iphone() || q.ipad()) ES('Object', 'assign', false, ma, {
                                        width: '220px',
                                        'min-width': '100%'
                                    });
                                    ES('Object', 'assign', false, this._iframe.style, ma);
                                }
                            }
                        },
                        getConfig: function ha() {
                            return {};
                        },
                        isFluid: function ha() {
                            var ia = this.getConfig();
                            return ia.fluid;
                        },
                        reposition: function ha(ia) {
                            var ja = i.getPosition(this._iframe).x,
                                ka = i.getViewportInfo().width,
                                la = parseInt(i.getStyle(this._iframe, 'width'), 10),
                                ma = {};
                            if (ja + ia > ka && ja > ia) {
                                this._iframe.style.left = parseInt(i.getStyle(this._iframe, 'width'), 10) - ia + 'px';
                                this._isRepositioned = true;
                                ma.type = 'reposition';
                            } else if (this._isRepositioned && la - ia !== 0) {
                                this._iframe.style.left = '0px';
                                this._isRepositioned = false;
                                ma.type = 'restore';
                            } else return;
                            t.sendToFacebook(this._iframe.name, {
                                method: 'xd/reposition',
                                params: ES('JSON', 'stringify', false, ma)
                            });
                        },
                        updateLift: function ha() {
                            var ia = this._iframe.style.width === this._iframeOptions.root.style.width && this._iframe.style.height === this._iframeOptions.root.style.height;
                            i[ia ? 'removeCss' : 'addCss'](this._iframe, 'fb_iframe_widget_lift');
                        }
                    }, l);
                    ga.getVal = ca;
                    ga.withParams = function(ha, ia) {
                        return ga.extend({
                            getParams: function ja() {
                                return ha;
                            },
                            getConfig: function ja() {
                                return ia ? ia : {};
                            }
                        });
                    };
                    f.exports = ga;
                }, null);
                __d('PluginConfig', ['sdk.feature'], (function a(b, c, d, e, f, g, h) {
                    var i = {
                        messengerpreconfirmation: {
                            mobile_fullsize: true
                        },
                        messengeraccountconfirmation: {
                            mobile_fullsize: true
                        },
                        messengerbusinesslink: {
                            mobile_fullsize: true
                        },
                        messengertoggle: {
                            mobile_fullsize: true
                        },
                        messengermessageus: {
                            mobile_fullsize: true
                        },
                        send_to_messenger: {
                            mobile_fullsize: true
                        },
                        post: {
                            fluid: h('fluid_embed', false),
                            mobile_fullsize: true
                        }
                    };
                    f.exports = i;
                }), null);
                __d('PluginTags', [], function a(b, c, d, e, f, g) {
                    var h = {
                            comment_embed: {
                                href: 'url',
                                include_parent: 'bool'
                            },
                            composer: {
                                action_type: 'string',
                                action_properties: 'string'
                            },
                            create_event_button: {},
                            follow: {
                                href: 'url',
                                layout: 'string',
                                show_faces: 'bool',
                                size: 'string'
                            },
                            like: {
                                href: 'url',
                                layout: 'string',
                                show_faces: 'bool',
                                share: 'bool',
                                action: 'string',
                                send: 'bool',
                                size: 'string'
                            },
                            like_box: {
                                href: 'string',
                                show_faces: 'bool',
                                header: 'bool',
                                stream: 'bool',
                                force_wall: 'bool',
                                show_border: 'bool',
                                id: 'string',
                                connections: 'string',
                                profile_id: 'string',
                                name: 'string'
                            },
                            page: {
                                href: 'string',
                                hide_cta: 'bool',
                                hide_cover: 'bool',
                                small_header: 'bool',
                                adapt_container_width: 'bool',
                                show_facepile: 'bool',
                                show_posts: 'bool',
                                tabs: 'string'
                            },
                            messenger_checkbox: {
                                messenger_app_id: 'string',
                                page_id: 'string',
                                pixel_id: 'string',
                                prechecked: 'bool',
                                allow_login: 'bool',
                                size: 'string',
                                origin: 'string',
                                user_ref: 'string',
                                identity_match: 'string'
                            },
                            messengerpreconfirmation: {
                                messenger_app_id: 'string',
                                page_id: 'string'
                            },
                            messengeraccountconfirmation: {
                                messenger_app_id: 'string',
                                page_id: 'string',
                                state: 'string'
                            },
                            messengerbusinesslink: {
                                messenger_app_id: 'string',
                                page_id: 'string',
                                state: 'string'
                            },
                            messengertoggle: {
                                messenger_app_id: 'string',
                                page_id: 'string',
                                token: 'string',
                                psid: 'string'
                            },
                            messengermessageus: {
                                messenger_app_id: 'string',
                                page_id: 'string',
                                color: 'string',
                                size: 'string'
                            },
                            send_to_messenger: {
                                messenger_app_id: 'string',
                                page_id: 'string',
                                color: 'string',
                                size: 'string',
                                enforce_login: 'bool',
                                identity_match: 'string',
                                origin: 'string'
                            },
                            page_events: {
                                href: 'url'
                            },
                            post: {
                                href: 'url',
                                show_text: 'bool'
                            },
                            profile_pic: {
                                uid: 'string',
                                linked: 'bool',
                                href: 'string',
                                size: 'string',
                                facebook_logo: 'bool'
                            },
                            send: {
                                href: 'url',
                                size: 'string'
                            },
                            send_to_mobile: {
                                max_rows: 'string',
                                show_faces: 'bool',
                                size: 'string'
                            }
                        },
                        i = {
                            subscribe: 'follow',
                            fan: 'like_box',
                            likebox: 'like_box'
                        };
                    ES(ES('Object', 'keys', false, i), 'forEach', true, function(j) {
                        h[j] = h[i[j]];
                    });
                    f.exports = h;
                }, null);
                __d("runOnce", [], (function a(b, c, d, e, f, g) {
                    function h(i) {
                        var j, k;
                        return function() {
                            if (!j) {
                                j = true;
                                k = i();
                            }
                            return k;
                        };
                    }
                    f.exports = h;
                }), null);
                __d('XFBML', ['Assert', 'sdk.DOM', 'Log', 'ObservableMixin', 'sdk.UA', 'runOnce'], function a(b, c, d, e, f, g, h, i, j, k, l, m) {
                    var n = {},
                        o = {},
                        p = 0,
                        q = new k();

                    function r(y, z) {
                        return ES(y[z] + '', 'trim', true);
                    }

                    function s(y) {
                        return y.scopeName ? y.scopeName + ':' + y.nodeName : '';
                    }

                    function t(y) {
                        return n[r(y, 'nodeName').toLowerCase()] || n[s(y).toLowerCase()];
                    }

                    function u(y) {
                        var z = ES(r(y, 'className').split(/\s+/), 'filter', true, function(aa) {
                            return o.hasOwnProperty(aa);
                        });
                        if (z.length === 0) return undefined;
                        if (y.getAttribute('fb-xfbml-state') || !y.childNodes || y.childNodes.length === 0 || y.childNodes.length === 1 && y.childNodes[0].nodeType === 3 || y.children.length === 1 && r(y.children[0], 'className') === 'fb-xfbml-parse-ignore') return o[z[0]];
                    }

                    function v(y) {
                        var z = {};
                        ES(ES('Array', 'from', false, y.attributes), 'forEach', true, function(aa) {
                            z[r(aa, 'name')] = r(aa, 'value');
                        });
                        return z;
                    }

                    function w(y, z, aa) {
                        var ba = document.createElement('div');
                        i.addCss(y, z + '-' + aa);
                        ES(ES('Array', 'from', false, y.childNodes), 'forEach', true, function(ca) {
                            ba.appendChild(ca);
                        });
                        ES(ES('Array', 'from', false, y.attributes), 'forEach', true, function(ca) {
                            ba.setAttribute(ca.name, ca.value);
                        });
                        y.parentNode.replaceChild(ba, y);
                        return ba;
                    }

                    function x(y, z, aa) {
                        h.isTrue(y && y.nodeType && y.nodeType === 1 && !!y.getElementsByTagName, 'Invalid DOM node passed to FB.XFBML.parse()');
                        h.isFunction(z, 'Invalid callback passed to FB.XFBML.parse()');
                        var ba = ++p;
                        j.info('XFBML Parsing Start %s', ba);
                        var ca = 1,
                            da = 0,
                            ea = function ga() {
                                ca--;
                                if (ca === 0) {
                                    j.info('XFBML Parsing Finish %s, %s tags found', ba, da);
                                    z();
                                    q.inform('render', ba, da);
                                }
                                h.isTrue(ca >= 0, 'onrender() has been called too many times');
                            };
                        ES(ES('Array', 'from', false, y.getElementsByTagName('*')), 'forEach', true, function(ga) {
                            if (!aa && ga.getAttribute('fb-xfbml-state')) return;
                            if (ga.nodeType !== 1) return;
                            var ha = t(ga) || u(ga);
                            if (!ha) return;
                            if (l.ie() < 9 && ga.scopeName) ga = w(ga, ha.xmlns, ha.localName);
                            ca++;
                            da++;
                            var ia = new ha.ctor(ga, ha.xmlns, ha.localName, v(ga));
                            ia.subscribe('render', m(function() {
                                ga.setAttribute('fb-xfbml-state', 'rendered');
                                ea();
                            }));
                            var ja = function ka() {
                                if (ga.getAttribute('fb-xfbml-state') == 'parsed') {
                                    q.subscribe('render.queue', ka);
                                } else {
                                    ga.setAttribute('fb-xfbml-state', 'parsed');
                                    ia.process();
                                }
                            };
                            ja();
                        });
                        q.inform('parse', ba, da);
                        var fa = 30000;
                        setTimeout(function() {
                            if (ca > 0) j.warn('%s tags failed to render in %s ms', ca, fa);
                        }, fa);
                        ea();
                    }
                    q.subscribe('render', function() {
                        var y = q.getSubscribers('render.queue');
                        q.clearSubscribers('render.queue');
                        ES(y, 'forEach', true, function(z) {
                            z();
                        });
                    });
                    ES('Object', 'assign', false, q, {
                        registerTag: function y(z) {
                            var aa = z.xmlns + ':' + z.localName;
                            h.isUndefined(n[aa], aa + ' already registered');
                            n[aa] = z;
                            o[z.xmlns + '-' + z.localName] = z;
                        },
                        parse: function y(z, aa) {
                            x(z || document.body, aa || function() {}, true);
                        },
                        parseNew: function y() {
                            x(document.body, function() {}, false);
                        }
                    });
                    f.exports = q;
                }, null);
                __d('sdk.Arbiter', [], (function a(b, c, d, e, f, g) {
                    var h = {
                        BEHAVIOR_EVENT: 'e',
                        BEHAVIOR_PERSISTENT: 'p',
                        BEHAVIOR_STATE: 's'
                    };
                    f.exports = h;
                }), null);
                __d('sdk.XFBML.Element', ['sdk.DOM', 'Type', 'ObservableMixin'], function a(b, c, d, e, f, g, h, i, j) {
                    var k = i.extend({
                        constructor: function l(m) {
                            this.parent();
                            this.dom = m;
                        },
                        fire: function l() {
                            this.inform.apply(this, arguments);
                        },
                        getAttribute: function l(m, n, o) {
                            var p = h.getAttr(this.dom, m);
                            return p ? o ? o(p) : p : n;
                        },
                        _getBoolAttribute: function l(m, n) {
                            var o = h.getBoolAttr(this.dom, m);
                            return o === null ? n : o;
                        },
                        _getPxAttribute: function l(m, n) {
                            return this.getAttribute(m, n, function(o) {
                                var p = parseInt(o, 10);
                                return isNaN(p) ? n : p;
                            });
                        },
                        _getLengthAttribute: function l(m, n) {
                            return this.getAttribute(m, n, function(o) {
                                if (o === '100%' || o === 'auto') return o;
                                var p = parseInt(o, 10);
                                return isNaN(p) ? n : p;
                            });
                        },
                        _getAttributeFromList: function l(m, n, o) {
                            return this.getAttribute(m, n, function(p) {
                                p = p.toLowerCase();
                                return ES(o, 'indexOf', true, p) > -1 ? p : n;
                            });
                        },
                        isValid: function l() {
                            for (var m = this.dom; m; m = m.parentNode)
                                if (m == document.body) return true;
                        },
                        clear: function l() {
                            h.html(this.dom, '');
                        }
                    }, j);
                    f.exports = k;
                }, null);
                __d('sdk.XFBML.IframeWidget', ['sdk.Arbiter', 'sdk.Auth', 'sdk.Content', 'sdk.DOM', 'sdk.Event', 'sdk.XFBML.Element', 'guid', 'insertIframe', 'QueryString', 'sdk.Runtime', 'sdk.ui', 'UrlMap', 'sdk.XD'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
                    var u = m.extend({
                            _iframeName: null,
                            _showLoader: true,
                            _refreshOnAuthChange: false,
                            _allowReProcess: false,
                            _fetchPreCachedLoader: false,
                            _visibleAfter: 'load',
                            _widgetPipeEnabled: false,
                            _borderReset: false,
                            _repositioned: false,
                            getUrlBits: function y() {
                                throw new Error('Inheriting class needs to implement getUrlBits().');
                            },
                            setupAndValidate: function y() {
                                return true;
                            },
                            oneTimeSetup: function y() {},
                            getSize: function y() {},
                            getIframeName: function y() {
                                return this._iframeName;
                            },
                            getIframeTitle: function y() {
                                return 'Facebook Social Plugin';
                            },
                            getChannelUrl: function y() {
                                if (!this._channelUrl) {
                                    var z = this;
                                    this._channelUrl = t.handler(function(aa) {
                                        z.fire('xd.' + aa.type, aa);
                                    }, 'parent.parent', true);
                                }
                                return this._channelUrl;
                            },
                            getIframeNode: function y() {
                                return this.dom.getElementsByTagName('iframe')[0];
                            },
                            arbiterInform: function y(event, z, aa) {
                                t.sendToFacebook(this.getIframeName(), {
                                    method: event,
                                    params: ES('JSON', 'stringify', false, z || {}),
                                    behavior: aa || h.BEHAVIOR_PERSISTENT
                                });
                            },
                            _arbiterInform: function y(event, z, aa) {
                                var ba = 'parent.frames["' + this.getIframeNode().name + '"]';
                                t.inform(event, z, ba, aa);
                            },
                            getDefaultWebDomain: function y() {
                                return s.resolve('www');
                            },
                            process: function y(z) {
                                if (this._done) {
                                    if (!this._allowReProcess && !z) return;
                                    this.clear();
                                } else this._oneTimeSetup();
                                this._done = true;
                                this._iframeName = this.getIframeName() || this._iframeName || n();
                                if (!this.setupAndValidate()) {
                                    this.fire('render');
                                    return;
                                }
                                if (this._showLoader) this._addLoader();
                                k.addCss(this.dom, 'fb_iframe_widget');
                                if (this._visibleAfter != 'immediate') {
                                    k.addCss(this.dom, 'fb_hide_iframes');
                                } else this.subscribe('iframe.onload', ES(this.fire, 'bind', true, this, 'render'));
                                var aa = this.getSize() || {},
                                    ba = this.getFullyQualifiedURL();
                                if (aa.width == '100%') k.addCss(this.dom, 'fb_iframe_widget_fluid');
                                this.clear();
                                o({
                                    url: ba,
                                    root: this.dom.appendChild(document.createElement('span')),
                                    name: this._iframeName,
                                    title: this.getIframeTitle(),
                                    className: q.getRtl() ? 'fb_rtl' : 'fb_ltr',
                                    height: aa.height,
                                    width: aa.width,
                                    onload: ES(this.fire, 'bind', true, this, 'iframe.onload')
                                });
                                this._resizeFlow(aa);
                                this.loaded = false;
                                this.subscribe('iframe.onload', ES(function() {
                                    this.loaded = true;
                                    if (!this._isResizeHandled) k.addCss(this.dom, 'fb_hide_iframes');
                                }, 'bind', true, this));
                            },
                            generateWidgetPipeIframeName: function y() {
                                v++;
                                return 'fb_iframe_' + v;
                            },
                            getFullyQualifiedURL: function y() {
                                var z = this._getURL();
                                z += '?' + p.encode(this._getQS());
                                if (z.length > 2000) {
                                    z = 'about:blank';
                                    var aa = ES(function() {
                                        this._postRequest();
                                        this.unsubscribe('iframe.onload', aa);
                                    }, 'bind', true, this);
                                    this.subscribe('iframe.onload', aa);
                                }
                                return z;
                            },
                            _getWidgetPipeShell: function y() {
                                return s.resolve('www') + '/common/widget_pipe_shell.php';
                            },
                            _oneTimeSetup: function y() {
                                this.subscribe('xd.resize', ES(this._handleResizeMsg, 'bind', true, this));
                                this.subscribe('xd.resize', ES(this._bubbleResizeEvent, 'bind', true, this));
                                this.subscribe('xd.resize.iframe', ES(this._resizeIframe, 'bind', true, this));
                                this.subscribe('xd.resize.flow', ES(this._resizeFlow, 'bind', true, this));
                                this.subscribe('xd.resize.flow', ES(this._bubbleResizeEvent, 'bind', true, this));
                                this.subscribe('xd.refreshLoginStatus', function() {
                                    i.getLoginStatus(function() {}, true);
                                });
                                this.subscribe('xd.logout', function() {
                                    r({
                                        method: 'auth.logout',
                                        display: 'hidden'
                                    }, function() {});
                                });
                                if (this._refreshOnAuthChange) this._setupAuthRefresh();
                                if (this._visibleAfter == 'load') this.subscribe('iframe.onload', ES(this._makeVisible, 'bind', true, this));
                                this.subscribe('xd.verify', ES(function(z) {
                                    this.arbiterInform('xd/verify', z.token);
                                }, 'bind', true, this));
                                this.oneTimeSetup();
                            },
                            _makeVisible: function y() {
                                this._removeLoader();
                                k.removeCss(this.dom, 'fb_hide_iframes');
                                this.fire('render');
                            },
                            _setupAuthRefresh: function y() {
                                i.getLoginStatus(ES(function(z) {
                                    var aa = z.status;
                                    l.subscribe('auth.statusChange', ES(function(ba) {
                                        if (!this.isValid()) return;
                                        if (aa == 'unknown' || ba.status == 'unknown') this.process(true);
                                        aa = ba.status;
                                    }, 'bind', true, this));
                                }, 'bind', true, this));
                            },
                            _handleResizeMsg: function y(z) {
                                if (!this.isValid()) return;
                                this._resizeIframe(z);
                                this._resizeFlow(z);
                                if (!this._borderReset) {
                                    this.getIframeNode().style.border = 'none';
                                    this._borderReset = true;
                                }
                                this._isResizeHandled = true;
                                this._makeVisible();
                            },
                            _bubbleResizeEvent: function y(z) {
                                var aa = {
                                    height: z.height,
                                    width: z.width,
                                    pluginID: this.getAttribute('plugin-id')
                                };
                                l.fire('xfbml.resize', aa);
                            },
                            _resizeIframe: function y(z) {
                                var aa = this.getIframeNode();
                                if (z.reposition === "true") this._repositionIframe(z);
                                z.height && (aa.style.height = z.height + 'px');
                                z.width && (aa.style.width = z.width + 'px');
                                this._updateIframeZIndex();
                            },
                            _resizeFlow: function y(z) {
                                var aa = this.dom.getElementsByTagName('span')[0];
                                z.height && (aa.style.height = z.height + 'px');
                                z.width && (aa.style.width = z.width + 'px');
                                this._updateIframeZIndex();
                            },
                            _updateIframeZIndex: function y() {
                                var z = this.dom.getElementsByTagName('span')[0],
                                    aa = this.getIframeNode(),
                                    ba = aa.style.height === z.style.height && aa.style.width === z.style.width,
                                    ca = ba ? 'removeCss' : 'addCss';
                                k[ca](aa, 'fb_iframe_widget_lift');
                            },
                            _repositionIframe: function y(z) {
                                var aa = this.getIframeNode(),
                                    ba = parseInt(k.getStyle(aa, 'width'), 10),
                                    ca = k.getPosition(aa).x,
                                    da = k.getViewportInfo().width,
                                    ea = parseInt(z.width, 10);
                                if (ca + ea > da && ca > ea) {
                                    aa.style.left = ba - ea + 'px';
                                    this.arbiterInform('xd/reposition', {
                                        type: 'horizontal'
                                    });
                                    this._repositioned = true;
                                } else if (this._repositioned) {
                                    aa.style.left = '0px';
                                    this.arbiterInform('xd/reposition', {
                                        type: 'restore'
                                    });
                                    this._repositioned = false;
                                }
                            },
                            _addLoader: function y() {
                                if (!this._loaderDiv) {
                                    k.addCss(this.dom, 'fb_iframe_widget_loader');
                                    this._loaderDiv = document.createElement('div');
                                    this._loaderDiv.className = 'FB_Loader';
                                    this.dom.appendChild(this._loaderDiv);
                                }
                            },
                            _removeLoader: function y() {
                                if (this._loaderDiv) {
                                    k.removeCss(this.dom, 'fb_iframe_widget_loader');
                                    if (this._loaderDiv.parentNode) this._loaderDiv.parentNode.removeChild(this._loaderDiv);
                                    this._loaderDiv = null;
                                }
                            },
                            _getQS: function y() {
                                return ES('Object', 'assign', false, {
                                    api_key: q.getClientID(),
                                    locale: q.getLocale(),
                                    sdk: 'joey',
                                    kid_directed_site: q.getKidDirectedSite(),
                                    ref: this.getAttribute('ref')
                                }, this.getUrlBits().params);
                            },
                            _getURL: function y() {
                                var z = this.getDefaultWebDomain(),
                                    aa = '';
                                return z + '/plugins/' + aa + this.getUrlBits().name + '.php';
                            },
                            _postRequest: function y() {
                                j.submitToTarget({
                                    url: this._getURL(),
                                    target: this.getIframeNode().name,
                                    params: this._getQS()
                                });
                            }
                        }),
                        v = 0,
                        w = {};

                    function x() {
                        var y = {};
                        for (var z in w) {
                            var aa = w[z];
                            y[z] = {
                                widget: aa.getUrlBits().name,
                                params: aa._getQS()
                            };
                        }
                        return y;
                    }
                    f.exports = u;
                }, null);
                __d('sdk.XFBML.Comments', ['sdk.Event', 'sdk.XFBML.IframeWidget', 'QueryString', 'sdk.Runtime', 'JSSDKConfig', 'sdk.UA', 'UrlMap'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
                    var o = 320,
                        p = i.extend({
                            _visibleAfter: 'immediate',
                            _refreshOnAuthChange: true,
                            setupAndValidate: function q() {
                                var r = {
                                    channel_url: this.getChannelUrl(),
                                    colorscheme: this.getAttribute('colorscheme'),
                                    skin: this.getAttribute('skin'),
                                    numposts: this.getAttribute('num-posts', 10),
                                    width: this._getLengthAttribute('width'),
                                    href: this.getAttribute('href'),
                                    permalink: this.getAttribute('permalink'),
                                    publish_feed: this.getAttribute('publish_feed'),
                                    order_by: this.getAttribute('order_by'),
                                    mobile: this._getBoolAttribute('mobile'),
                                    version: this.getAttribute('version')
                                };
                                if (!r.width && !r.permalink) r.width = 550;
                                if (l.initSitevars.enableMobileComments && m.mobile() && r.mobile !== false) {
                                    r.mobile = true;
                                    delete r.width;
                                }
                                if (!r.skin) r.skin = r.colorscheme;
                                if (!r.href) {
                                    r.migrated = this.getAttribute('migrated');
                                    r.xid = this.getAttribute('xid');
                                    r.title = this.getAttribute('title', document.title);
                                    r.url = this.getAttribute('url', document.URL);
                                    r.quiet = this.getAttribute('quiet');
                                    r.reverse = this.getAttribute('reverse');
                                    r.simple = this.getAttribute('simple');
                                    r.css = this.getAttribute('css');
                                    r.notify = this.getAttribute('notify');
                                    if (!r.xid) {
                                        var s = ES(document.URL, 'indexOf', true, '#');
                                        if (s > 0) {
                                            r.xid = encodeURIComponent(document.URL.substring(0, s));
                                        } else r.xid = encodeURIComponent(document.URL);
                                    }
                                    if (r.migrated) r.href = n.resolve('www') + '/plugins/comments_v1.php?' + 'app_id=' + k.getClientID() + '&xid=' + encodeURIComponent(r.xid) + '&url=' + encodeURIComponent(r.url);
                                } else {
                                    var t = this.getAttribute('fb_comment_id');
                                    if (!t) {
                                        t = j.decode(document.URL.substring(ES(document.URL, 'indexOf', true, '?') + 1)).fb_comment_id;
                                        if (t && ES(t, 'indexOf', true, '#') > 0) t = t.substring(0, ES(t, 'indexOf', true, '#'));
                                    }
                                    if (t) {
                                        r.fb_comment_id = t;
                                        this.subscribe('render', ES(function() {
                                            if (!window.location.hash) window.location.hash = this.getIframeNode().id;
                                        }, 'bind', true, this));
                                    }
                                }
                                if (!r.version) r.version = k.getVersion();
                                this._attr = r;
                                return true;
                            },
                            oneTimeSetup: function q() {
                                this.subscribe('xd.sdk_event', function(r) {
                                    h.fire(r.event, ES('JSON', 'parse', false, r.data));
                                });
                            },
                            getSize: function q() {
                                if (!this._attr.permalink) return {
                                    width: this._attr.mobile || this._attr.width === 'auto' || this._attr.width === '100%' ? '100%' : Math.max(this._attr.width, o),
                                    height: 100
                                };
                            },
                            getUrlBits: function q() {
                                return {
                                    name: 'comments',
                                    params: this._attr
                                };
                            },
                            getDefaultWebDomain: function q() {
                                return n.resolve('www', true);
                            }
                        });
                    f.exports = p;
                }, null);
                __d('sdk.XFBML.CommentsCount', ['ApiClient', 'sdk.DOM', 'sdk.XFBML.Element', 'sprintf'], function a(b, c, d, e, f, g, h, i, j, k) {
                    var l = j.extend({
                        process: function m() {
                            i.addCss(this.dom, 'fb_comments_count_zero');
                            var n = this.getAttribute('href', window.location.href);
                            h.scheduleBatchCall('/v2.1/' + encodeURIComponent(n), {
                                fields: 'share'
                            }, ES(function(o) {
                                var p = o.share && o.share.comment_count || 0;
                                i.html(this.dom, k('<span class="fb_comments_count">%s</span>', p));
                                if (p > 0) i.removeCss(this.dom, 'fb_comments_count_zero');
                                this.fire('render');
                            }, 'bind', true, this));
                        }
                    });
                    f.exports = l;
                }, null);
                __d('safeEval', [], function a(b, c, d, e, f, g) {
                    function h(i, j) {
                        if (i === null || typeof i === 'undefined') return;
                        if (typeof i !== 'string') return i;
                        if (/^\w+$/.test(i) && typeof window[i] === 'function') return window[i].apply(null, j || []);
                        return Function('return eval("' + i.replace(/"/g, '\\"') + '");').apply(null, j || []);
                    }
                    f.exports = h;
                }, null);
                __d('sdk.Helper', ['sdk.ErrorHandling', 'sdk.Event', 'UrlMap', 'safeEval', 'sprintf'], function a(b, c, d, e, f, g, h, i, j, k, l) {
                    var m = {
                        isUser: function n(o) {
                            return o < 2.2e+09 || o >= 1e+14 && o <= 100099999989999 || o >= 8.9e+13 && o <= 89999999999999 || o >= 6.000001e+13 && o <= 60000019999999;
                        },
                        upperCaseFirstChar: function n(o) {
                            if (o.length > 0) {
                                return o.substr(0, 1).toUpperCase() + o.substr(1);
                            } else return o;
                        },
                        getProfileLink: function n(o, p, q) {
                            if (!q && o) q = l('%s/profile.php?id=%s', j.resolve('www'), o.uid || o.id);
                            if (q) p = l('<a class="fb_link" href="%s">%s</a>', q, p);
                            return p;
                        },
                        invokeHandler: function n(o, p, q) {
                            if (o)
                                if (typeof o === 'string') {
                                    h.unguard(k)(o, q);
                                } else if (o.apply) h.unguard(o).apply(p, q || []);
                        },
                        fireEvent: function n(o, p) {
                            var q = p._attr.href;
                            p.fire(o, q);
                            i.fire(o, q, p);
                        },
                        executeFunctionByName: function n(o) {
                            var p = Array.prototype.slice.call(arguments, 1),
                                q = o.split("."),
                                r = q.pop(),
                                s = window;
                            for (var t = 0; t < q.length; t++) s = s[q[t]];
                            return s[r].apply(this, p);
                        }
                    };
                    f.exports = m;
                }, null);
                __d('sdk.XFBML.LoginButton', ['sdk.Helper', 'IframePlugin', 'Log', 'sdk.ui'], function a(b, c, d, e, f, g, h, i, j, k) {
                    var l = i.extend({
                        constructor: function m(n, o, p, q) {
                            this.parent(n, o, p, q);
                            var r = i.getVal(q, 'on_login'),
                                s = null;
                            if (r) {
                                s = function t(u) {
                                    if (u.error_code) {
                                        j.debug('Plugin Return Error (%s): %s', u.error_code, u.error_message || u.error_description);
                                        return;
                                    }
                                    h.invokeHandler(r, null, [u]);
                                };
                                this.subscribe('login.status', s);
                            }
                            this.subscribe('xd.login_button_native_open', function(t) {
                                k(ES('JSON', 'parse', false, t.params), s);
                            });
                        },
                        getParams: function m() {
                            return {
                                scope: 'string',
                                perms: 'string',
                                size: 'string',
                                login_text: 'text',
                                show_faces: 'bool',
                                max_rows: 'string',
                                show_login_face: 'bool',
                                registration_url: 'url_maybe',
                                auto_logout_link: 'bool',
                                one_click: 'bool',
                                show_banner: 'bool',
                                auth_type: 'string',
                                default_audience: 'string',
                                use_continue_as: 'bool',
                                button_type: 'string'
                            };
                        }
                    });
                    f.exports = l;
                }, null);
                __d('escapeHTML', [], function a(b, c, d, e, f, g) {
                    var h = /[&<>"'\/]/g,
                        i = {
                            '&': '&amp;',
                            '<': '&lt;',
                            '>': '&gt;',
                            '"': '&quot;',
                            "'": '&#039;',
                            '/': '&#x2F;'
                        };

                    function j(k) {
                        return k.replace(h, function(l) {
                            return i[l];
                        });
                    }
                    f.exports = j;
                }, null);
                __d('sdk.XFBML.Name', ['ApiClient', 'escapeHTML', 'sdk.Event', 'sdk.XFBML.Element', 'sdk.Helper', 'Log', 'sdk.Runtime'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
                    var o = {}.hasOwnProperty,
                        p = k.extend({
                            process: function q() {
                                ES('Object', 'assign', false, this, {
                                    _uid: this.getAttribute('uid'),
                                    _firstnameonly: this._getBoolAttribute('first-name-only'),
                                    _lastnameonly: this._getBoolAttribute('last-name-only'),
                                    _possessive: this._getBoolAttribute('possessive'),
                                    _reflexive: this._getBoolAttribute('reflexive'),
                                    _objective: this._getBoolAttribute('objective'),
                                    _linked: this._getBoolAttribute('linked', true),
                                    _subjectId: this.getAttribute('subject-id')
                                });
                                if (!this._uid) {
                                    m.error('"uid" is a required attribute for <fb:name>');
                                    this.fire('render');
                                    return;
                                }
                                var r = [];
                                if (this._firstnameonly) {
                                    r.push('first_name');
                                } else if (this._lastnameonly) {
                                    r.push('last_name');
                                } else r.push('name');
                                if (this._subjectId) {
                                    r.push('gender');
                                    if (this._subjectId == n.getUserID()) this._reflexive = true;
                                }
                                j.monitor('auth.statusChange', ES(function() {
                                    if (!this.isValid()) {
                                        this.fire('render');
                                        return true;
                                    }
                                    if (!this._uid || this._uid == 'loggedinuser') this._uid = n.getUserID();
                                    if (!this._uid) return;
                                    h.scheduleBatchCall('/v1.0/' + this._uid, {
                                        fields: r.join(',')
                                    }, ES(function(s) {
                                        if (o.call(s, 'error')) {
                                            m.warn('The name is not found for ID: ' + this._uid);
                                            return;
                                        }
                                        if (this._subjectId == this._uid) {
                                            this._renderPronoun(s);
                                        } else this._renderOther(s);
                                        this.fire('render');
                                    }, 'bind', true, this));
                                }, 'bind', true, this));
                            },
                            _renderPronoun: function q(r) {
                                var s = '',
                                    t = this._objective;
                                if (this._subjectId) {
                                    t = true;
                                    if (this._subjectId === this._uid) this._reflexive = true;
                                }
                                if (this._uid == n.getUserID() && this._getBoolAttribute('use-you', true)) {
                                    if (this._possessive) {
                                        if (this._reflexive) {
                                            s = 'your own';
                                        } else s = 'your';
                                    } else if (this._reflexive) {
                                        s = 'yourself';
                                    } else s = 'you';
                                } else switch (r.gender) {
                                    case 'male':
                                        if (this._possessive) {
                                            s = this._reflexive ? 'his own' : 'his';
                                        } else if (this._reflexive) {
                                            s = 'himself';
                                        } else if (t) {
                                            s = 'him';
                                        } else s = 'he';
                                        break;
                                    case 'female':
                                        if (this._possessive) {
                                            s = this._reflexive ? 'her own' : 'her';
                                        } else if (this._reflexive) {
                                            s = 'herself';
                                        } else if (t) {
                                            s = 'her';
                                        } else s = 'she';
                                        break;
                                    default:
                                        if (this._getBoolAttribute('use-they', true)) {
                                            if (this._possessive) {
                                                if (this._reflexive) {
                                                    s = 'their own';
                                                } else s = 'their';
                                            } else if (this._reflexive) {
                                                s = 'themselves';
                                            } else if (t) {
                                                s = 'them';
                                            } else s = 'they';
                                        } else if (this._possessive) {
                                            if (this._reflexive) {
                                                s = 'his/her own';
                                            } else s = 'his/her';
                                        } else if (this._reflexive) {
                                            s = 'himself/herself';
                                        } else if (t) {
                                            s = 'him/her';
                                        } else s = 'he/she';
                                        break;
                                }
                                if (this._getBoolAttribute('capitalize', false)) s = l.upperCaseFirstChar(s);
                                this.dom.innerHTML = s;
                            },
                            _renderOther: function q(r) {
                                var s = '',
                                    t = '';
                                if (this._uid == n.getUserID() && this._getBoolAttribute('use-you', true)) {
                                    if (this._reflexive) {
                                        if (this._possessive) {
                                            s = 'your own';
                                        } else s = 'yourself';
                                    } else if (this._possessive) {
                                        s = 'your';
                                    } else s = 'you';
                                } else if (r) {
                                    if (null === r.first_name) r.first_name = '';
                                    if (null === r.last_name) r.last_name = '';
                                    if (this._firstnameonly && r.first_name !== undefined) {
                                        s = i(r.first_name);
                                    } else if (this._lastnameonly && r.last_name !== undefined) s = i(r.last_name);
                                    if (!s) s = i(r.name);
                                    if (s !== '' && this._possessive) s += '\'s';
                                }
                                if (!s) s = i(this.getAttribute('if-cant-see', 'Facebook User'));
                                if (s) {
                                    if (this._getBoolAttribute('capitalize', false)) s = l.upperCaseFirstChar(s);
                                    if (r && this._linked) {
                                        t = l.getProfileLink(r, s, this.getAttribute('href', null));
                                    } else t = s;
                                }
                                this.dom.innerHTML = t;
                            }
                        });
                    f.exports = p;
                }, null);
                __d('UnicodeUtils', ['invariant'], function a(b, c, d, e, f, g, h) {
                    'use strict';
                    var i = 55296,
                        j = 56319,
                        k = 56320,
                        l = 57343,
                        m = /[\uD800-\uDFFF]/;

                    function n(w) {
                        return i <= w && w <= l;
                    }

                    function o(w, x) {
                        0 <= x && x < w.length || h(0);
                        if (x + 1 === w.length) return false;
                        var y = w.charCodeAt(x),
                            z = w.charCodeAt(x + 1);
                        return (i <= y && y <= j && k <= z && z <= l);
                    }

                    function p(w) {
                        return m.test(w);
                    }

                    function q(w, x) {
                        return 1 + n(w.charCodeAt(x));
                    }

                    function r(w) {
                        if (!p(w)) return w.length;
                        var x = 0;
                        for (var y = 0; y < w.length; y += q(w, y)) x++;
                        return x;
                    }

                    function s(w, x, y) {
                        x = x || 0;
                        y = y === undefined ? Infinity : y || 0;
                        if (!p(w)) return w.substr(x, y);
                        var z = w.length;
                        if (z <= 0 || x > z || y <= 0) return '';
                        var aa = 0;
                        if (x > 0) {
                            for (; x > 0 && aa < z; x--) aa += q(w, aa);
                            if (aa >= z) return '';
                        } else if (x < 0) {
                            for (aa = z; x < 0 && 0 < aa; x++) aa -= q(w, aa - 1);
                            if (aa < 0) aa = 0;
                        }
                        var ba = z;
                        if (y < z)
                            for (ba = aa; y > 0 && ba < z; y--) ba += q(w, ba);
                        return w.substring(aa, ba);
                    }

                    function t(w, x, y) {
                        x = x || 0;
                        y = y === undefined ? Infinity : y || 0;
                        if (x < 0) x = 0;
                        if (y < 0) y = 0;
                        var z = Math.abs(y - x);
                        x = x < y ? x : y;
                        return s(w, x, z);
                    }

                    function u(w) {
                        var x = [];
                        for (var y = 0; y < w.length; y += q(w, y)) x.push(w.codePointAt(y));
                        return x;
                    }
                    var v = {
                        getCodePoints: u,
                        getUTF16Length: q,
                        hasSurrogateUnit: p,
                        isCodeUnitInSurrogateRange: n,
                        isSurrogatePair: o,
                        strlen: r,
                        substring: t,
                        substr: s
                    };
                    f.exports = v;
                }, null);
                __d('isNode', [], function a(b, c, d, e, f, g) {
                    function h(i) {
                        var j = i ? i.ownerDocument || i : document,
                            k = j.defaultView || window;
                        return !!(i && (typeof k.Node === 'function' ? i instanceof k.Node : typeof i === 'object' && typeof i.nodeType === 'number' && typeof i.nodeName === 'string'));
                    }
                    f.exports = h;
                }, null);
                __d('isTextNode', ['isNode'], function a(b, c, d, e, f, g, h) {
                    function i(j) {
                        return h(j) && j.nodeType == 3;
                    }
                    f.exports = i;
                }, null);
                __d('containsNode', ['isTextNode'], function a(b, c, d, e, f, g, h) {
                    function i(j, k) {
                        if (!j || !k) {
                            return false;
                        } else if (j === k) {
                            return true;
                        } else if (h(j)) {
                            return false;
                        } else if (h(k)) {
                            return i(j, k.parentNode);
                        } else if ('contains' in j) {
                            return ES(j, 'contains', true, k);
                        } else if (j.compareDocumentPosition) {
                            return !!(j.compareDocumentPosition(k) & 16);
                        } else return false;
                    }
                    f.exports = i;
                }, null);
                __d('sdk.XFBML.Quote', ['sdk.DOM', 'DOMEventListener', 'IframePlugin', 'UnicodeUtils', 'sdk.UA', 'sdk.XD', 'containsNode', 'sdk.feature'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
                    'use strict';
                    var p = 'fb-quotable',
                        q = 155,
                        r = 70,
                        s = '',
                        t = null,
                        u = [],
                        v = false,
                        w = null,
                        x = l.mobile();

                    function y(da) {
                        var ea = da.getRangeAt(0),
                            fa = ea.startContainer;
                        return fa.nodeType === 3 ? fa.parentNode : fa;
                    }

                    function z(da) {
                        if (!document.getSelection || x) return;
                        var ea = document.getSelection();
                        if (ea.rangeCount === 0) {
                            ba();
                            return;
                        }
                        var fa = u.length;
                        ba();
                        if (fa) {
                            var ga = false;
                            for (var ha = 0; ha < fa; ha++)
                                if (n(u[ha], ea.focusNode)) {
                                    ga = true;
                                    break;
                                }
                            if (!ga) return;
                        }
                        s = ea.toString();
                        if (s === '') {
                            ba();
                            return;
                        }
                        s = ES(s.toString().replace(/\s+/g, ' '), 'trim', true);
                        var ia = Number(o('sharequotelimit', 500));
                        if (k.strlen(s) > ia) {
                            s = k.substr(s, 0, ia - 3) + '...';
                        } else s = k.substr(s, 0, ia);
                        if (!v && w) {
                            y(ea).appendChild(w);
                            var ja = aa(ea);
                            w.style.left = ja.x + 'px';
                            w.style.top = ja.y + 'px';
                        }
                    }

                    function aa(da) {
                        var ea = w && w.offsetWidth,
                            fa = ea ? w.offsetHeight : r,
                            ga = ea ? w.offsetWidth : q,
                            ha = da.getRangeAt(0),
                            ia = document.createElement('span'),
                            ja = document.createElement('span'),
                            ka = document.createRange();
                        ka.setStart(ha.startContainer, ha.startOffset);
                        ka.insertNode(ia);
                        var la = document.createRange();
                        la.setStart(ha.endContainer, ha.endOffset);
                        la.insertNode(ja);
                        var ma = ia.offsetTop - fa,
                            na = ia.offsetLeft + (ja.offsetLeft - ia.offsetLeft) / 2 - ga / 2;
                        ia.parentNode.removeChild(ia);
                        ja.parentNode.removeChild(ja);
                        return {
                            x: na,
                            y: ma
                        };
                    }

                    function ba() {
                        s = '';
                        if (!v && w) w.style.left = '-9999px';
                    }
                    var ca = j.extend({
                        constructor: function da(ea, fa, ga, ha) {
                            if (t) return t;
                            this.parent(ea, fa, ga, ha);
                            v = h.getAttr(ea, 'layout') === 'button';
                            w = ea;
                            w.style.position = 'absolute';
                            w.style.display = '';
                            i.add(document, 'keyup', z);
                            i.add(document, 'mouseup', z);
                            this.subscribe('xd.getTextSelection', ES(function() {
                                m.sendToFacebook(this._iframeOptions.name, {
                                    method: 'setTextSelection',
                                    params: ES('JSON', 'stringify', false, {
                                        text: s
                                    })
                                });
                                ba();
                            }, 'bind', true, this));
                            u = ES(ES('Array', 'from', false, document.getElementsByTagName('*')), 'filter', true, function(ia) {
                                return (ia.nodeName.toLowerCase() === 'article' || h.containsCss(ia, p));
                            });
                            ba();
                            t = this;
                            return t;
                        },
                        getParams: function da() {
                            return {
                                href: 'url',
                                layout: 'string'
                            };
                        }
                    });
                    f.exports = ca;
                }, null);
                __d('sdk.XFBML.Save', ['sdk.Content', 'sdk.DialogUtils', 'sdk.DOM', 'sdk.Event', 'IframePlugin', 'QueryString', 'sdk.UA', 'sdk.XD', 'sdk.createIframe'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
                    'use strict';
                    var q = void 0,
                        r = l.extend({
                            constructor: function s(t, u, v, w) {
                                this.parent(t, u, v, w);
                                var x = n.mobile();
                                this.subscribe('xd.savePluginGetBlankIframe', ES(function(y) {
                                    var z = void 0,
                                        aa = void 0,
                                        ba = void 0,
                                        ca = function ha(ia) {
                                            if (ia) j.removeCss(ia, 'fb_invisible');
                                        },
                                        da = function ha(ia) {
                                            if (ia) j.addCss(ia, 'fb_invisible');
                                        };
                                    if (x) {
                                        z = i.setupNewDarkOverlay();
                                        da(z);
                                        h.append(z);
                                        i.addDoubleClickAction(z, function() {
                                            return ES(ba, 'forEach', true, da);
                                        }, 5000);
                                    }
                                    aa = this.setupNewIframeDialog(ES('JSON', 'parse', false, y.data), y.fromIframe, ES('JSON', 'parse', false, y.isHTTPS));
                                    da(aa);
                                    h.append(aa);
                                    ba = [aa, z];
                                    var ea = function ha() {
                                            ES(ba, 'forEach', true, da);
                                            i.onDialogHideCleanup(x);
                                            clearInterval(q);
                                        },
                                        fa = void 0;
                                    this.subscribe('xd.savePluginShowIframe', ES(function() {
                                        k.fire('savePlugin:hideDialog');
                                        ES(ba, 'forEach', true, ca);
                                        this.positionOnScreen(aa, z);
                                        if (!x && !fa) fa = i.addIdleDesktopAction(aa, ea, 7000);
                                    }, 'bind', true, this));
                                    this.subscribe('xd.savePluginHideIframe', function() {
                                        return ea();
                                    });
                                    k.subscribe('savePlugin:hideDialog', function() {
                                        return ea();
                                    });
                                    var ga = setInterval(function() {
                                        var ha = document.getElementsByName(y.fromIframe);
                                        if (ha.length === 0) {
                                            clearTimeout(ga);
                                            ea();
                                            ES(ba, 'forEach', true, function(ia) {
                                                ia && ia.parentNode.removeChild(ia);
                                            });
                                        }
                                    }, 500);
                                }, 'bind', true, this));
                            },
                            positionOnScreen: function s(t, u) {
                                var v, w = n.mobile();
                                if (w) {
                                    (function() {
                                        var x = function y(z, aa) {
                                            if (aa != null) i.setDialogPositionToCenter(aa, w);
                                            i.setDialogPositionToCenter(z, w);
                                        };
                                        x(t, u);
                                        i.addMobileOrientationChangeAction(function(y) {
                                            x(t, u);
                                        });
                                        q = setInterval(function() {
                                            return x(t, u);
                                        }, 100);
                                    })();
                                } else {
                                    j.setStyle(t, 'position', 'fixed');
                                    j.setStyle(t, 'top', '20px');
                                    j.setStyle(t, 'right', '20px');
                                }
                            },
                            setupNewIframeDialog: function s(t, u, v) {
                                var w = '#' + m.encode({
                                        forIframe: u
                                    }),
                                    x = i.setupNewDialog();
                                p({
                                    url: o.getXDArbiterURL(v) + w,
                                    name: 'blank_' + this._iframeOptions.name,
                                    root: x.contentRoot,
                                    tabindex: -1
                                });
                                j.addCss(x.contentRoot, 'fb_dialog_iframe');
                                ES('Object', 'assign', false, x.dialogElement.style, t.style || {});
                                j.setStyle(x.dialogElement, 'width', t.width + 'px');
                                j.setStyle(x.dialogElement, 'height', t.height + 'px');
                                ES(t.classList, 'forEach', true, function(y) {
                                    return j.addCss(x.dialogElement, y);
                                });
                                j.removeCss(x.dialogElement, 'fb_dialog_advanced');
                                return x.dialogElement;
                            },
                            getParams: function s() {
                                return {
                                    uri: 'url',
                                    url_category: 'string',
                                    size: 'string'
                                };
                            }
                        });
                    f.exports = r;
                }, null);
                __d('sdk.XFBML.ShareButton', ['IframePlugin', 'sdk.UA', 'sdk.ui'], function a(b, c, d, e, f, g, h, i, j) {
                    'use strict';
                    var k = h.extend({
                        constructor: function l(m, n, o, p) {
                            this.parent(m, n, o, p);
                            this.subscribe('xd.shareTriggerMobileIframe', function(q) {
                                var r = ES('JSON', 'parse', false, q.data);
                                j({
                                    method: 'share',
                                    href: r.href,
                                    mobile_iframe: i.mobile()
                                });
                            });
                        },
                        getParams: function l() {
                            return {
                                href: 'url',
                                layout: 'string',
                                mobile_iframe: 'bool',
                                type: 'string',
                                size: 'string'
                            };
                        }
                    });
                    f.exports = k;
                }, null);
                __d('sdk.XFBML.Video', ['Assert', 'sdk.Event', 'IframePlugin', 'ObservableMixin', 'sdk.XD'], function a(b, c, d, e, f, g, h, i, j, k, l) {
                    function m(p) {
                        'use strict';
                        this.$VideoCache1 = p.isMuted;
                        this.$VideoCache2 = p.volume;
                        this.$VideoCache3 = p.timePosition;
                        this.$VideoCache4 = p.duration;
                    }
                    m.prototype.update = function(p) {
                        'use strict';
                        if (p.isMuted !== undefined) this.$VideoCache1 = p.isMuted;
                        if (p.volume !== undefined) this.$VideoCache2 = p.volume;
                        if (p.timePosition !== undefined) this.$VideoCache3 = p.timePosition;
                        if (p.duration !== undefined) this.$VideoCache4 = p.duration;
                    };
                    m.prototype.isMuted = function() {
                        'use strict';
                        return this.$VideoCache1;
                    };
                    m.prototype.getVolume = function() {
                        'use strict';
                        return this.$VideoCache1 ? 0 : this.$VideoCache2;
                    };
                    m.prototype.getCurrentPosition = function() {
                        'use strict';
                        return this.$VideoCache3;
                    };
                    m.prototype.getDuration = function() {
                        'use strict';
                        return this.$VideoCache4;
                    };

                    function n(p, q, r) {
                        'use strict';
                        this.$VideoController1 = p;
                        this.$VideoController2 = q;
                        this.$VideoController3 = r;
                    }
                    n.prototype.play = function() {
                        'use strict';
                        l.sendToFacebook(this.$VideoController1, {
                            method: 'play',
                            params: ES('JSON', 'stringify', false, {})
                        });
                    };
                    n.prototype.pause = function() {
                        'use strict';
                        l.sendToFacebook(this.$VideoController1, {
                            method: 'pause',
                            params: ES('JSON', 'stringify', false, {})
                        });
                    };
                    n.prototype.seek = function(p) {
                        'use strict';
                        h.isNumber(p, 'Invalid argument');
                        l.sendToFacebook(this.$VideoController1, {
                            method: 'seek',
                            params: ES('JSON', 'stringify', false, {
                                target: p
                            })
                        });
                    };
                    n.prototype.mute = function() {
                        'use strict';
                        l.sendToFacebook(this.$VideoController1, {
                            method: 'mute',
                            params: ES('JSON', 'stringify', false, {})
                        });
                    };
                    n.prototype.unmute = function() {
                        'use strict';
                        l.sendToFacebook(this.$VideoController1, {
                            method: 'unmute',
                            params: ES('JSON', 'stringify', false, {})
                        });
                    };
                    n.prototype.setVolume = function(p) {
                        'use strict';
                        h.isNumber(p, 'Invalid argument');
                        l.sendToFacebook(this.$VideoController1, {
                            method: 'setVolume',
                            params: ES('JSON', 'stringify', false, {
                                volume: p
                            })
                        });
                    };
                    n.prototype.isMuted = function() {
                        'use strict';
                        return this.$VideoController3.isMuted();
                    };
                    n.prototype.getVolume = function() {
                        'use strict';
                        return this.$VideoController3.getVolume();
                    };
                    n.prototype.getCurrentPosition = function() {
                        'use strict';
                        return this.$VideoController3.getCurrentPosition();
                    };
                    n.prototype.getDuration = function() {
                        'use strict';
                        return this.$VideoController3.getDuration();
                    };
                    n.prototype.subscribe = function(event, p) {
                        'use strict';
                        h.isString(event, 'Invalid argument');
                        h.isFunction(p, 'Invalid argument');
                        this.$VideoController2.subscribe(event, p);
                        return {
                            release: ES(function() {
                                this.$VideoController2.unsubscribe(event, p);
                            }, 'bind', true, this)
                        };
                    };
                    var o = j.extend({
                        constructor: function p(q, r, s, t) {
                            this.parent(q, r, s, t);
                            this._videoController = null;
                            this._sharedObservable = null;
                            this._sharedVideoCache = null;
                            this.subscribe('xd.onVideoAPIReady', function(u) {
                                this._sharedObservable = new k();
                                this._sharedVideoCache = new m(ES('JSON', 'parse', false, u.data));
                                this._videoController = new n(this._iframeOptions.name, this._sharedObservable, this._sharedVideoCache);
                                i.fire('xfbml.ready', {
                                    type: 'video',
                                    id: t.id,
                                    instance: this._videoController
                                });
                            });
                            this.subscribe('xd.stateChange', function(u) {
                                this._sharedObservable.inform(u.state);
                            });
                            this.subscribe('xd.cachedStateUpdateRequest', function(u) {
                                this._sharedVideoCache.update(ES('JSON', 'parse', false, u.data));
                            });
                        },
                        getParams: function p() {
                            return {
                                allowfullscreen: 'bool',
                                autoplay: 'bool',
                                controls: 'bool',
                                href: 'url',
                                show_captions: 'bool',
                                show_text: 'bool'
                            };
                        },
                        getConfig: function p() {
                            return {
                                fluid: true,
                                full_width: true
                            };
                        }
                    });
                    f.exports = o;
                }, null);
                __d('legacy:fb.xfbml', ['Assert', 'sdk.Event', 'FB', 'IframePlugin', 'PluginConfig', 'PluginTags', 'XFBML', 'sdk.domReady', 'sdk.feature', 'wrapFunction', 'sdk.XFBML.Comments', 'sdk.XFBML.CommentsCount', 'sdk.XFBML.LoginButton', 'sdk.XFBML.Name', 'sdk.XFBML.Quote', 'sdk.XFBML.Save', 'sdk.XFBML.ShareButton', 'sdk.XFBML.Video'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
                    var r = {
                            comments: c('sdk.XFBML.Comments'),
                            comments_count: c('sdk.XFBML.CommentsCount'),
                            login_button: c('sdk.XFBML.LoginButton'),
                            name: c('sdk.XFBML.Name'),
                            quote: c('sdk.XFBML.Quote'),
                            save: c('sdk.XFBML.Save'),
                            share_button: c('sdk.XFBML.ShareButton'),
                            video: c('sdk.XFBML.Video')
                        },
                        s = p('plugin_tags_blacklist', []);
                    ES(ES('Object', 'keys', false, m), 'forEach', true, function(u) {
                        if (ES(s, 'indexOf', true, u) !== -1) return;
                        n.registerTag({
                            xmlns: 'fb',
                            localName: u.replace(/_/g, '-'),
                            ctor: k.withParams(m[u], l[u])
                        });
                    });
                    ES(ES('Object', 'keys', false, r), 'forEach', true, function(u) {
                        if (ES(s, 'indexOf', true, u) !== -1) return;
                        n.registerTag({
                            xmlns: 'fb',
                            localName: u.replace(/_/g, '-'),
                            ctor: r[u]
                        });
                    });
                    j.provide('XFBML', {
                        parse: function u(v) {
                            h.maybeXfbml(v, 'Invalid argument');
                            if (v && v.nodeType === 9) v = v.body;
                            return n.parse.apply(null, arguments);
                        }
                    });
                    n.subscribe('parse', ES(i.fire, 'bind', true, i, 'xfbml.parse'));
                    n.subscribe('render', ES(i.fire, 'bind', true, i, 'xfbml.render'));
                    i.subscribe('init:post', function(u) {
                        if (u.xfbml) setTimeout(q(ES(o, 'bind', true, null, n.parse), 'entry', 'init:post:xfbml.parse'), 0);
                    });
                    h.define('Xfbml', function(u) {
                        return (u.nodeType === 1 || u.nodeType === 9) && typeof u.nodeName === 'string';
                    });
                    try {
                        if (document.namespaces && !document.namespaces.item.fb) document.namespaces.add('fb');
                    } catch (t) {}
                }, 3);
            }
        }).call(global);
    })(window.inDapIF ? parent.window : window, window);
} catch (e) {
    new Image().src = "https:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m=' + encodeURIComponent('{"error":"LOAD", "extra": {"name":"' + e.name + '","line":"' + (e.lineNumber || e.line) + '","script":"' + (e.fileName || e.sourceURL || e.script) + '","stack":"' + (e.stackTrace || e.stack) + '","revision":"2835688","namespace":"FB","message":"' + e.message + '"}}');
}
