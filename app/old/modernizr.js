/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-checked-contains-contenteditable-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-details-flash-flexbox-flexboxlegacy-fontface-generatedcontent-geolocation-hashchange-hidden-history-hsla-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svg-svgclippaths-textshadow-video-webgl-websockets-websqldatabase-webworkers-addtest-fnbind-printshiv-testprop !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function a() {
        var e, t, n, a, o, i, s;
        for (var c in b)
            if (b.hasOwnProperty(c)) {
                if (e = [], t = b[c], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (a = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) i = e[o], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = a : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = a), w.push((a ? "" : "no-") + s.join("-"))
            }
    }

    function o(e) {
        var t = S.className,
            n = Modernizr._config.classPrefix || "";
        if (C && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), C ? S.className.baseVal = t : S.className = t)
    }

    function i(e, t) {
        if ("object" == typeof e)
            for (var n in e) x(e, n) && i(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                a = Modernizr[r[0]];
            if (2 == r.length && (a = a[r[1]]), "undefined" != typeof a) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), o([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function s(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function c() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : C ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function d() {
        var e = t.body;
        return e || (e = c(C ? "svg" : "body"), e.fake = !0), e
    }

    function l(e, n, r, a) {
        var o, i, s, l, u = "modernizr",
            f = c("div"),
            p = d();
        if (parseInt(r, 10))
            for (; r--;) s = c("div"), s.id = a ? a[r] : u + (r + 1), f.appendChild(s);
        return o = c("style"), o.type = "text/css", o.id = "s" + u, (p.fake ? p : f).appendChild(o), p.appendChild(f), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), f.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = S.style.overflow, S.style.overflow = "hidden", S.appendChild(p)), i = n(f, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = l, S.offsetHeight) : f.parentNode.removeChild(f), !!i
    }

    function u(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function f(t, r) {
        var a = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; a--;)
                if (e.CSS.supports(u(t[a]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; a--;) o.push("(" + u(t[a]) + ":" + r + ")");
            return o = o.join(" or "), l("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function p(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function m(e, t, a, o) {
        function i() {
            l && (delete E.style, delete E.modElem)
        }
        if (o = r(o, "undefined") ? !1 : o, !r(a, "undefined")) {
            var d = f(e, a);
            if (!r(d, "undefined")) return d
        }
        for (var l, u, m, h, g, v = ["modernizr", "tspan"]; !E.style;) l = !0, E.modElem = c(v.shift()), E.style = E.modElem.style;
        for (m = e.length, u = 0; m > u; u++)
            if (h = e[u], g = E.style[h], s(h, "-") && (h = p(h)), E.style[h] !== n) {
                if (o || r(a, "undefined")) return i(), "pfx" == t ? h : !0;
                try {
                    E.style[h] = a
                } catch (y) {}
                if (E.style[h] != g) return i(), "pfx" == t ? h : !0
            }
        return i(), !1
    }

    function h(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function g(e, t, n) {
        var a;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (a = t[e[o]], r(a, "function") ? h(a, n || t) : a);
        return !1
    }

    function v(e, t, n, a, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + O.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? m(s, t, a, o) : (s = (e + " " + B.join(i + " ") + i).split(" "), g(s, t, n))
    }

    function y(e, t, r) {
        return v(e, n, n, t, r)
    }
    var b = [],
        T = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                b.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                b.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = T, Modernizr = new Modernizr;
    var x, w = [];
    ! function() {
        var e = {}.hasOwnProperty;
        x = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function(t, n) {
            return e.call(t, n)
        }
    }();
    var S = t.documentElement,
        C = "svg" === S.nodeName.toLowerCase();
    T._l = {}, T.on = function(e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, T._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, r;
                for (e = 0; e < n.length; e++)(r = n[e])(t)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() {
        T.addTest = i
    });
    C || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = C.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function a(e, t) {
            var n = C.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), C.elements = n + " " + e, d(t)
        }

        function o(e) {
            var t = S[e[x]];
            return t || (t = {}, w++, e[x] = w, S[w] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), g) return n.createElement(e);
            r || (r = o(n));
            var a;
            return a = r.cache[e] ? r.cache[e].cloneNode() : T.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || b.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
        }

        function s(e, n) {
            if (e || (e = t), g) return e.createDocumentFragment();
            n = n || o(e);
            for (var a = n.frag.cloneNode(), i = 0, s = r(), c = s.length; c > i; i++) a.createElement(s[i]);
            return a
        }

        function c(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return C.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(C, t.frag)
        }

        function d(e) {
            e || (e = t);
            var r = o(e);
            return !C.shivCSS || h || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), g || c(e, r), e
        }

        function l(e) {
            for (var t, n = e.getElementsByTagName("*"), a = n.length, o = RegExp("^(?:" + r().join("|") + ")$", "i"), i = []; a--;) t = n[a], o.test(t.nodeName) && i.push(t.applyElement(u(t)));
            return i
        }

        function u(e) {
            for (var t, n = e.attributes, r = n.length, a = e.ownerDocument.createElement(E + ":" + e.nodeName); r--;) t = n[r], t.specified && a.setAttribute(t.nodeName, t.nodeValue);
            return a.style.cssText = e.style.cssText, a
        }

        function f(e) {
            for (var t, n = e.split("{"), a = n.length, o = RegExp("(^|[\\s,>+~])(" + r().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), i = "$1" + E + "\\:$2"; a--;) t = n[a] = n[a].split("}"), t[t.length - 1] = t[t.length - 1].replace(o, i), n[a] = t.join("}");
            return n.join("{")
        }

        function p(e) {
            for (var t = e.length; t--;) e[t].removeNode()
        }

        function m(e) {
            function t() {
                clearTimeout(i._removeSheetTimer), r && r.removeNode(!0), r = null
            }
            var r, a, i = o(e),
                s = e.namespaces,
                c = e.parentWindow;
            return !_ || e.printShived ? e : ("undefined" == typeof s[E] && s.add(E), c.attachEvent("onbeforeprint", function() {
                t();
                for (var o, i, s, c = e.styleSheets, d = [], u = c.length, p = Array(u); u--;) p[u] = c[u];
                for (; s = p.pop();)
                    if (!s.disabled && k.test(s.media)) {
                        try {
                            o = s.imports, i = o.length
                        } catch (m) {
                            i = 0
                        }
                        for (u = 0; i > u; u++) p.push(o[u]);
                        try {
                            d.push(s.cssText)
                        } catch (m) {}
                    }
                d = f(d.reverse().join("")), a = l(e), r = n(e, d)
            }), c.attachEvent("onafterprint", function() {
                p(a), clearTimeout(i._removeSheetTimer), i._removeSheetTimer = setTimeout(t, 500)
            }), e.printShived = !0, e)
        }
        var h, g, v = "3.7.3",
            y = e.html5 || {},
            b = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            T = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            x = "_html5shiv",
            w = 0,
            S = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", h = "hidden" in e, g = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                h = !0, g = !0
            }
        }();
        var C = {
            elements: y.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: v,
            shivCSS: y.shivCSS !== !1,
            supportsUnknownElements: g,
            shivMethods: y.shivMethods !== !1,
            type: "default",
            shivDocument: d,
            createElement: i,
            createDocumentFragment: s,
            addElements: a
        };
        e.html5 = C, d(t);
        var k = /^$|\b(?:all|print)\b/,
            E = "html5shiv",
            _ = !g && function() {
                var n = t.documentElement;
                return !("undefined" == typeof t.namespaces || "undefined" == typeof t.parentWindow || "undefined" == typeof n.applyElement || "undefined" == typeof n.removeNode || "undefined" == typeof e.attachEvent)
            }();
        C.type += " print", C.shivPrint = m, m(t), "object" == typeof module && module.exports && (module.exports = C)
    }("undefined" != typeof e ? e : this, t);
    var k = {
        elem: c("modernizr")
    };
    Modernizr._q.push(function() {
        delete k.elem
    });
    var E = {
        style: k.elem.style
    };
    Modernizr._q.unshift(function() {
        delete E.style
    });
    var _ = T.testProp = function(e, t, r) {
        return m([e], n, t, r)
    };
    Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), Modernizr.addTest("applicationcache", "applicationCache" in e), Modernizr.addTest("audio", function() {
        var e = c("audio"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("canvas", function() {
        var e = c("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }), Modernizr.addTest("canvastext", function() {
        return Modernizr.canvas === !1 ? !1 : "function" == typeof c("canvas").getContext("2d").fillText
    }), Modernizr.addTest("contenteditable", function() {
        if ("contentEditable" in S) {
            var e = c("div");
            return e.contentEditable = !0, "true" === e.contentEditable
        }
    }), Modernizr.addTest("geolocation", "geolocation" in navigator);
    var P = function() {
        function e(e, t) {
            var a;
            return e ? (t && "string" != typeof t || (t = c(t || "div")), e = "on" + e, a = e in t, !a && r && (t.setAttribute || (t = c("div")), t.setAttribute(e, ""), a = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), a) : !1
        }
        var r = !("onblur" in t.documentElement);
        return e
    }();
    T.hasEvent = P, Modernizr.addTest("hashchange", function() {
        return P("hashchange", e) === !1 ? !1 : t.documentMode === n || t.documentMode > 7
    }), Modernizr.addTest("history", function() {
        var t = navigator.userAgent;
        return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") ? e.history && "pushState" in e.history : !1
    });
    var N = c("input"),
        A = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        $ = {};
    Modernizr.input = function(t) {
        for (var n = 0, r = t.length; r > n; n++) $[t[n]] = !!(t[n] in N);
        return $.list && ($.list = !(!c("datalist") || !e.HTMLDataListElement)), $
    }(A);
    var z = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        j = {};
    Modernizr.inputtypes = function(e) {
        for (var r, a, o, i = e.length, s = "1)", c = 0; i > c; c++) N.setAttribute("type", r = e[c]), o = "text" !== N.type && "style" in N, o && (N.value = s, N.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && N.style.WebkitAppearance !== n ? (S.appendChild(N), a = t.defaultView, o = a.getComputedStyle && "textfield" !== a.getComputedStyle(N, null).WebkitAppearance && 0 !== N.offsetHeight, S.removeChild(N)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? N.checkValidity && N.checkValidity() === !1 : N.value != s)), j[e[c]] = !!o;
        return j
    }(z), Modernizr.addTest("postmessage", "postMessage" in e), Modernizr.addTest("video", function() {
        var e = c("video"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("webgl", function() {
        var t = c("canvas"),
            n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";
        return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e
    }), Modernizr.addTest("websockets", "WebSocket" in e && 2 === e.WebSocket.CLOSING);
    var R = "Moz O ms Webkit",
        O = T._config.usePrefixes ? R.split(" ") : [];
    T._cssomPrefixes = O;
    var B = T._config.usePrefixes ? R.toLowerCase().split(" ") : [];
    T._domPrefixes = B, T.testAllProps = v, T.testAllProps = y, Modernizr.addTest("cssanimations", y("animationName", "a", !0)), Modernizr.addTest("backgroundsize", y("backgroundSize", "100%", !0)), Modernizr.addTest("borderimage", y("borderImage", "url() 1", !0)), Modernizr.addTest("borderradius", y("borderRadius", "0px", !0)), Modernizr.addTest("boxshadow", y("boxShadow", "1px 1px", !0));
    var F = T.testStyles = l;
    Modernizr.addTest("checked", function() {
            return F("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}", function(e) {
                var t = c("input");
                return t.setAttribute("type", "checkbox"), t.setAttribute("checked", "checked"), e.appendChild(t), 20 === t.offsetLeft
            })
        }),
        function() {
            Modernizr.addTest("csscolumns", function() {
                var e = !1,
                    t = y("columnCount");
                try {
                    (e = !!t) && (e = new Boolean(e))
                } catch (n) {}
                return e
            });
            for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = y("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || y(n[r])), Modernizr.addTest("csscolumns." + e, t)
        }(), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("flexboxlegacy", y("boxDirection", "reverse", !0));
    var L = function() {
        var e = navigator.userAgent,
            t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
            n = e.match(/w(eb)?osbrowser/gi),
            r = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9,
            a = 533 > t && e.match(/android/gi);
        return n || a || r
    }();
    L ? Modernizr.addTest("fontface", !1) : F('@font-face {font-family:"font";src:url("https://")}', function(e, n) {
        var r = t.getElementById("smodernizr"),
            a = r.sheet || r.styleSheet,
            o = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "",
            i = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
        Modernizr.addTest("fontface", i)
    }), F('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
        Modernizr.addTest("generatedcontent", e.offsetHeight >= 7)
    });
    var M = T._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    T._prefixes = M, Modernizr.addTest("cssgradients", function() {
        for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "", a = 0, o = M.length - 1; o > a; a++) e = 0 === a ? "to " : "", r += t + M[a] + "linear-gradient(" + e + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
        var i = c("a"),
            s = i.style;
        return s.cssText = r, ("" + s.backgroundImage).indexOf("gradient") > -1
    }), Modernizr.addTest("hsla", function() {
        var e = c("a").style;
        return e.cssText = "background-color:hsla(120,40%,100%,.5)", s(e.backgroundColor, "rgba") || s(e.backgroundColor, "hsla")
    }), Modernizr.addTest("multiplebgs", function() {
        var e = c("a").style;
        return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
    }), Modernizr.addTest("opacity", function() {
        var e = c("a").style;
        return e.cssText = M.join("opacity:.55;"), /^0.55$/.test(e.opacity)
    }), Modernizr.addTest("cssreflections", y("boxReflect", "above", !0)), Modernizr.addTest("rgba", function() {
        var e = c("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
    }), Modernizr.addTest("textshadow", _("textShadow", "1px 1px")), Modernizr.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && y("transform", "scale(1)", !0)
    });
    var W = "CSS" in e && "supports" in e.CSS,
        H = "supportsCSS" in e;
    Modernizr.addTest("supports", W || H), Modernizr.addTest("csstransforms3d", function() {
        var e = !!y("perspective", "1px", !0),
            t = Modernizr._config.usePrefixes;
        if (e && (!t || "webkitPerspective" in S.style)) {
            var n, r = "#modernizr{width:0;height:0}";
            Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", F(r + n, function(t) {
                e = 7 === t.offsetWidth && 18 === t.offsetHeight
            })
        }
        return e
    }), Modernizr.addTest("csstransitions", y("transition", "all", !0)), Modernizr.addTest("hidden", "hidden" in c("a")), Modernizr.addTest("contains", r(String.prototype.contains, "function")), Modernizr.addTest("localstorage", function() {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("sessionstorage", function() {
        var e = "modernizr";
        try {
            return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("websqldatabase", "openDatabase" in e);
    var I = {}.toString;
    Modernizr.addTest("svgclippaths", function() {
        return !!t.createElementNS && /SVGClipPath/.test(I.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    }), Modernizr.addTest("inlinesvg", function() {
        var e = c("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    }), Modernizr.addTest("smil", function() {
        return !!t.createElementNS && /SVGAnimate/.test(I.call(t.createElementNS("http://www.w3.org/2000/svg", "animate")))
    }), Modernizr.addTest("webworkers", "Worker" in e), Modernizr.addAsyncTest(function() {
        var n, r, a = function(e) {
                S.contains(e) || S.appendChild(e)
            },
            o = function(e) {
                e.fake && e.parentNode && e.parentNode.removeChild(e)
            },
            s = function(e, t) {
                var n = !!e;
                if (n && (n = new Boolean(n), n.blocked = "blocked" === e), i("flash", function() {
                        return n
                    }), t && m.contains(t)) {
                    for (; t.parentNode !== m;) t = t.parentNode;
                    m.removeChild(t)
                }
            };
        try {
            r = "ActiveXObject" in e && "Pan" in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash")
        } catch (l) {}
        if (n = !("plugins" in navigator && "Shockwave Flash" in navigator.plugins || r), n || C) s(!1);
        else {
            var u, f, p = c("embed"),
                m = d();
            if (p.type = "application/x-shockwave-flash", m.appendChild(p), !("Pan" in p || r)) return a(m), s("blocked", p), void o(m);
            u = function() {
                return a(m), S.contains(m) ? (S.contains(p) ? (f = p.style.cssText, "" !== f ? s("blocked", p) : s(!0, p)) : s("blocked"), void o(m)) : (m = t.body || m, p = c("embed"), p.type = "application/x-shockwave-flash", m.appendChild(p), setTimeout(u, 1e3))
            }, setTimeout(u, 10)
        }
    }), Modernizr.addTest("details", function() {
        var e, t = c("details");
        return "open" in t ? (F("#modernizr details{display:block}", function(n) {
            n.appendChild(t), t.innerHTML = "<summary>a</summary>b", e = t.offsetHeight, t.open = !0, e = e != t.offsetHeight
        }), e) : !1
    }), a(), delete T.addTest, delete T.addAsyncTest;
    for (var D = 0; D < Modernizr._q.length; D++) Modernizr._q[D]();
    e.Modernizr = Modernizr
}(window, document);
