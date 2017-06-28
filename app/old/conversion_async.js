(function() {
    var k = this,
        m = function(a) {
            return "string" == typeof a
        };
    var aa = function(a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a
    };
    var ba = aa("0.20"),
        ca = aa("0.01");
    var da = /^true$/.test("false") ? !0 : !1;
    var ea = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        p = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var fa = Array.prototype.indexOf ? function(a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        ga = Array.prototype.filter ? function(a, b, c) {
            return Array.prototype.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var e = a.length, d = [], f = 0, g = m(a) ? a.split("") : a, h = 0; h < e; h++)
                if (h in g) {
                    var l = g[h];
                    b.call(c, l, h, a) && (d[f++] = l)
                }
            return d
        },
        ha = Array.prototype.map ?
        function(a, b, c) {
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var e = a.length, d = Array(e), f = m(a) ? a.split("") : a, g = 0; g < e; g++) g in f && (d[g] = b.call(c, f[g], g, a));
            return d
        },
        ia = function(a) {
            return Array.prototype.concat.apply(Array.prototype, arguments)
        };
    var ja = function(a) {
        var b = [],
            c = 0,
            e;
        for (e in a) b[c++] = a[e];
        return b
    };
    var v;
    a: {
        var ka = k.navigator;
        if (ka) {
            var la = ka.userAgent;
            if (la) {
                v = la;
                break a
            }
        }
        v = ""
    };
    var w = function(a) {
        w[" "](a);
        return a
    };
    w[" "] = function() {};
    var na = function(a, b) {
        var c = ma;
        Object.prototype.hasOwnProperty.call(c, a) || (c[a] = b(a))
    };
    var oa = -1 != v.indexOf("Opera"),
        x = -1 != v.indexOf("Trident") || -1 != v.indexOf("MSIE"),
        pa = -1 != v.indexOf("Edge"),
        y = -1 != v.indexOf("Gecko") && !(-1 != v.toLowerCase().indexOf("webkit") && -1 == v.indexOf("Edge")) && !(-1 != v.indexOf("Trident") || -1 != v.indexOf("MSIE")) && -1 == v.indexOf("Edge"),
        qa = -1 != v.toLowerCase().indexOf("webkit") && -1 == v.indexOf("Edge"),
        ra = function() {
            var a = k.document;
            return a ? a.documentMode : void 0
        },
        B;
    a: {
        var D = "",
            H = function() {
                var a = v;
                if (y) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (pa) return /Edge\/([\d\.]+)/.exec(a);
                if (x) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (qa) return /WebKit\/(\S+)/.exec(a);
                if (oa) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();H && (D = H ? H[1] : "");
        if (x) {
            var I = ra();
            if (null != I && I > parseFloat(D)) {
                B = String(I);
                break a
            }
        }
        B = D
    }
    var sa = B,
        ma = {},
        ya = function(a) {
            na(a, function() {
                for (var b = 0, c = ea(String(sa)).split("."), e = ea(String(a)).split("."), d = Math.max(c.length, e.length), f = 0; 0 == b && f < d; f++) {
                    var g = c[f] || "",
                        h = e[f] || "";
                    do {
                        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                        h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                        if (0 == g[0].length && 0 == h[0].length) break;
                        b = p(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || p(0 == g[2].length, 0 == h[2].length) || p(g[2], h[2]);
                        g = g[3];
                        h = h[3]
                    } while (0 == b)
                }
                return 0 <= b
            })
        },
        za;
    var Aa = k.document;
    za = Aa && x ? ra() || ("CSS1Compat" == Aa.compatMode ? parseInt(sa, 10) : 5) : void 0;
    var J;
    if (!(J = !y && !x)) {
        var K;
        if (K = x) K = 9 <= Number(za);
        J = K
    }
    J || y && ya("1.9.1");
    x && ya("9");
    var Ba = function(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    };
    (function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            k.addEventListener("test", null, b)
        } catch (c) {}
        return a
    })();
    var Ca = function(a, b, c, e) {
            for (var d = c.length; 0 <= (b = a.indexOf(c, b)) && b < e;) {
                var f = a.charCodeAt(b - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(b + d), !f || 61 == f || 38 == f || 35 == f) return b;
                b += d + 1
            }
            return -1
        },
        Da = /#|$/,
        L = function(a, b) {
            var c = a.search(Da),
                e = Ca(a, 0, b, c);
            if (0 > e) return null;
            var d = a.indexOf("&", e);
            if (0 > d || d > c) d = c;
            e += b.length + 1;
            return decodeURIComponent(a.substr(e, d - e).replace(/\+/g, " "))
        },
        Ea = /[?&]($|#)/;
    var Fa = function() {
            this.h = {};
            this.a = {};
            for (var a = [2, 3], b = 0, c = a.length; b < c; ++b) this.a[a[b]] = ""
        },
        Ga = function() {
            try {
                var a = k.top.location.hash;
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    return b && b[1] || ""
                }
            } catch (c) {}
            return ""
        },
        Ha = function(a, b, c) {
            var e = M;
            if (c ? e.a.hasOwnProperty(c) && "" == e.a[c] : 1) {
                var d;
                if (d = (d = Ga().match(new RegExp("\\b(" + a.join("|") + ")\\b"))) && d[0] || null) a = d;
                else a: {
                    if (!(1E-4 > Math.random()) && (d = Math.random(), d < b)) {
                        try {
                            var f = new Uint32Array(1);
                            k.crypto.getRandomValues(f);
                            d = f[0] / 65536 / 65536
                        } catch (g) {
                            d =
                                Math.random()
                        }
                        a = a[Math.floor(d * a.length)];
                        break a
                    }
                    a = null
                }
                a && "" != a && (c ? e.a.hasOwnProperty(c) && (e.a[c] = a) : e.h[a] = !0)
            }
        },
        Ia = function(a) {
            var b = M;
            return b.a.hasOwnProperty(a) ? b.a[a] : ""
        },
        Ja = function() {
            var a = M,
                b = [];
            Ba(a.h, function(a, e) {
                b.push(e)
            });
            Ba(a.a, function(a) {
                "" != a && b.push(a)
            });
            return b
        };
    var N = null,
        O = null;
    var M, Ka = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_conversion_page_url google_conversion_referrer_url".split(" ");

    function P(a) {
        return null != a ? encodeURIComponent(a.toString()) : ""
    }

    function La(a) {
        return null != a ? a.toString().substring(0, 512) : ""
    }

    function Q(a, b) {
        b = P(b);
        return "" != b && (a = P(a), "" != a) ? "&".concat(a, "=", b) : ""
    }

    function R(a) {
        var b = typeof a;
        return null == a || "object" == b || "function" == b ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }

    function Ma(a) {
        var b;
        if ((a = a.google_custom_params) && "object" == typeof a && "function" != typeof a.join) {
            var c = [];
            for (b in a)
                if (Object.prototype.hasOwnProperty.call(a, b)) {
                    var e = a[b];
                    if (e && "function" == typeof e.join) {
                        for (var d = [], f = 0; f < e.length; ++f) {
                            var g = R(e[f]);
                            null != g && d.push(g)
                        }
                        e = 0 == d.length ? null : d.join(",")
                    } else e = R(e);
                    (d = R(b)) && null != e && c.push(d + "=" + e)
                }
            b = c.join(";")
        } else b = "";
        return "" == b ? "" : "&".concat("data=", encodeURIComponent(b))
    }

    function S(a) {
        return "number" != typeof a && "string" != typeof a ? "" : P(a.toString())
    }

    function Na(a) {
        if (!a) return "";
        a = a.google_conversion_items;
        if (!a) return "";
        for (var b = [], c = 0, e = a.length; c < e; c++) {
            var d = a[c],
                f = [];
            d && (f.push(S(d.value)), f.push(S(d.quantity)), f.push(S(d.item_id)), f.push(S(d.adwords_grouping)), f.push(S(d.sku)), b.push("(" + f.join("*") + ")"))
        }
        return 0 < b.length ? "&item=" + b.join("") : ""
    }

    function Oa(a, b, c) {
        var e = [];
        if (a) {
            var d = a.screen;
            d && (e.push(Q("u_h", d.height)), e.push(Q("u_w", d.width)), e.push(Q("u_ah", d.availHeight)), e.push(Q("u_aw", d.availWidth)), e.push(Q("u_cd", d.colorDepth)));
            a.history && e.push(Q("u_his", a.history.length))
        }
        c && "function" == typeof c.getTimezoneOffset && e.push(Q("u_tz", -c.getTimezoneOffset()));
        b && ("function" == typeof b.javaEnabled && e.push(Q("u_java", b.javaEnabled())), b.plugins && e.push(Q("u_nplug", b.plugins.length)), b.mimeTypes && e.push(Q("u_nmime", b.mimeTypes.length)));
        return e.join("")
    }

    function Pa(a) {
        a = a ? a.title : "";
        if (void 0 == a || "" == a) return "";
        var b = function(a) {
            try {
                return decodeURIComponent(a), !0
            } catch (d) {
                return !1
            }
        };
        a = encodeURIComponent(a);
        for (var c = 256; !b(a.substr(0, c));) c--;
        return "&tiba=" + a.substr(0, c)
    }

    function Qa(a, b, c, e) {
        var d = "";
        if (b) {
            var f;
            if (a.top == a) f = 0;
            else {
                var g = a.location.ancestorOrigins;
                if (g) f = g[g.length - 1] == a.location.origin ? 1 : 2;
                else {
                    g = a.top;
                    try {
                        var h;
                        if (h = !!g && null != g.location.href) c: {
                            try {
                                w(g.foo);
                                h = !0;
                                break c
                            } catch (l) {}
                            h = !1
                        }
                        f = h
                    } catch (l) {
                        f = !1
                    }
                    f = f ? 1 : 2
                }
            }
            a = c ? c : 1 == f ? a.top.location.href : a.location.href;
            d += Q("frm", f);
            d += Q("url", La(a));
            d += Q("ref", La(e || b.referrer))
        }
        return d
    }

    function T(a, b) {
        return !(da || b && Ra.test(navigator.userAgent)) || a && a.location && a.location.protocol && "https:" == a.location.protocol.toString().toLowerCase() ? "https:" : "http:"
    }
    var U = {
            g: {
                c: "27391101",
                b: "27391102"
            },
            f: {
                c: "376635470",
                b: "376635471"
            }
        },
        Sa = function() {
            var a = ia.apply([], ha(ja(U), function(a) {
                    return ja(a)
                }, void 0)),
                b = ga(Ga().split(","), function(b) {
                    return "" != b && !(0 <= fa(a, b))
                });
            return 0 < b.length ? "&debug_experiment_id=" + b.join(",") : ""
        },
        Ra = /Android ([01]\.|2\.[01])/i,
        V = function(a, b) {
            var c = b.createElement("iframe");
            c.style.display = "none";
            c.src = T(a, !1) + "//bid.g.doubleclick.net/xbbe/pixel?d=KAE";
            b.body.appendChild(c)
        };

    function Ta() {
        return new Image
    }

    function Ua(a, b, c, e) {
        if ((M ? Ia(3) : "") == U.g.b) try {
            var d;
            a: if (3 != L(c, "fmt")) d = !1;
                else {
                    if (e) {
                        var f = L(c, "random"),
                            g = L(c, "label");
                        if (!f || !g) {
                            d = !1;
                            break a
                        }
                        var h;
                        for (var l = decodeURIComponent(g.replace(/\+/g, " ")) + ":" + decodeURIComponent(f.replace(/\+/g, " ")), f = [], t = g = 0; t < l.length; t++) {
                            for (var n = l.charCodeAt(t); 255 < n;) f[g++] = n & 255, n >>= 8;
                            f[g++] = n
                        }
                        if (!N)
                            for (N = {}, O = {}, l = 0; 65 > l; l++) N[l] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l), O[l] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(l);
                        l = O;
                        n = [];
                        for (g = 0; g < f.length; g += 3) {
                            var u = f[g],
                                C = g + 1 < f.length,
                                q = C ? f[g + 1] : 0,
                                z = g + 2 < f.length,
                                E = z ? f[g + 2] : 0,
                                t = u >> 2,
                                ta = (u & 3) << 4 | q >> 4,
                                ua = (q & 15) << 2 | E >> 6,
                                va = E & 63;
                            z || (va = 64, C || (ua = 64));
                            n.push(l[t], l[ta], l[ua], l[va])
                        }
                        var W = n.join("").replace(/[.]*$/, ""),
                            F, G = a.GooglebQhCsO;
                        G || (G = {}, a.GooglebQhCsO = G);
                        F = G;
                        F[W] ? h = !1 : (F[W] = [], F[W][0] = e, h = !0);
                        if (!h) {
                            d = !1;
                            break a
                        }
                    }
                    var X = c.search(Da);
                    a = 0;
                    var Y;
                    for (e = []; 0 <= (Y = Ca(c, a, "fmt", X));) e.push(c.substring(a, Y)), a = Math.min(c.indexOf("&", Y) + 1 || X, X);
                    e.push(c.substr(a));
                    var r = [e.join("").replace(Ea,
                        "$1"), "&", "fmt"];
                    r.push("=", encodeURIComponent("4"));
                    if (r[1]) {
                        var A = r[0],
                            Z = A.indexOf("#");
                        0 <= Z && (r.push(A.substr(Z)), r[0] = A = A.substr(0, Z));
                        var wa = A.indexOf("?");
                        0 > wa ? r[1] = "?" : wa == A.length - 1 && (r[1] = void 0)
                    }
                    var xa = b.createElement("script");
                    xa.src = r.join("");
                    b.getElementsByTagName("script")[0].parentElement.appendChild(xa);
                    d = !0
                }
            return d
        } catch (Ya) {}
        return !1
    }

    function Va(a, b, c, e, d, f) {
        var g = c.opt_image_generator && c.opt_image_generator.call,
            h;
        d && c.onload_callback && c.onload_callback.call ? h = c.onload_callback : h = function() {};
        e += Q("async", "1");
        !g && f && Ua(a, b, e, h) || (a = Ta, g && (a = c.opt_image_generator), c = a(), c.src = e, c.onload = h)
    }

    function Wa(a, b) {
        (M ? Ia(2) : "") == U.f.b && ("complete" === b.readyState ? V(a, b) : a.addEventListener ? a.addEventListener("load", function() {
            V(a, b)
        }) : a.attachEvent("onload", function() {
            V(a, b)
        }))
    }

    function Xa(a) {
        for (var b = window, c = {}, e = function(d) {
                c[d] = a && null != a[d] ? a[d] : b[d]
            }, d = 0; d < Ka.length; d++) e(Ka[d]);
        e("onload_callback");
        return c
    };
    window.google_trackConversion = function(a) {
        a = Xa(a);
        a.google_conversion_format = 3;
        var b;
        var c = window,
            e = navigator,
            d = document,
            f = !1;
        if (a && 3 == a.google_conversion_format) {
            try {
                var g;
                "landing" == a.google_conversion_type || !a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough ? g = !1 : (a.google_conversion_date = new Date, a.google_conversion_time = a.google_conversion_date.getTime(), a.google_conversion_snippets = "number" == typeof a.google_conversion_snippets && 0 < a.google_conversion_snippets ? a.google_conversion_snippets +
                    1 : 1, "number" != typeof a.google_conversion_first_time && (a.google_conversion_first_time = a.google_conversion_time), a.google_conversion_js_version = "8", 0 != a.google_conversion_format && 1 != a.google_conversion_format && 2 != a.google_conversion_format && 3 != a.google_conversion_format && (a.google_conversion_format = 1), !1 !== a.google_enable_display_cookie_match && (a.google_enable_display_cookie_match = !0), M = new Fa, g = !0);
                if (g) {
                    a.google_remarketing_only && a.google_enable_display_cookie_match && M && Ha([U.f.c, U.f.b], ba, 2);
                    if (!a.google_remarketing_only &&
                        !a.google_conversion_domain) {
                        var h = U.g;
                        M && Ha([h.c, h.b], ca, 3)
                    }
                    g = "/?";
                    "landing" == a.google_conversion_type && (g = "/extclk?");
                    var l, t = [a.google_remarketing_only ? "viewthroughconversion/" : "conversion/", P(a.google_conversion_id), g, "random=", P(a.google_conversion_time)].join(""),
                        n = a.google_remarketing_only ? "googleads.g.doubleclick.net" : a.google_conversion_domain || "www.googleadservices.com";
                    l = T(c, /www[.]googleadservices[.]com/i.test(n)) + "//" + n + "/pagead/" + t;
                    var u;
                    b: {
                        var C = a.google_conversion_language;
                        if (null !=
                            C) {
                            var q = C.toString();
                            if (2 == q.length) {
                                u = Q("hl", q);
                                break b
                            }
                            if (5 == q.length) {
                                u = Q("hl", q.substring(0, 2)) + Q("gl", q.substring(3, 5));
                                break b
                            }
                        }
                        u = ""
                    }
                    b = [Q("cv", a.google_conversion_js_version), Q("fst", a.google_conversion_first_time), Q("num", a.google_conversion_snippets), Q("fmt", a.google_conversion_format), Q("value", a.google_conversion_value), Q("currency_code", a.google_conversion_currency), Q("label", a.google_conversion_label), Q("oid", a.google_conversion_order_id), Q("bg", a.google_conversion_color), u, Q("guid",
                        "ON"), Q("disvt", a.google_disable_viewthrough), Q("eid", Ja().join()), Na(a), Oa(c, e, a.google_conversion_date), Ma(a), Qa(c, d, a.google_conversion_page_url, a.google_conversion_referrer_url), a.google_remarketing_for_search && !a.google_conversion_domain ? "&srr=n" : "", Pa(d)].join("") + Sa();
                    Va(c, d, a, l + b, !0, !0);
                    if (a.google_remarketing_for_search && !a.google_conversion_domain) {
                        var z, E = [P(a.google_conversion_id), "/?random=", Math.floor(1E9 * Math.random())].join("");
                        z = T(c, !1) + "//www.google.com/ads/user-lists/" + E;
                        z += [Q("label",
                            a.google_conversion_label), Q("fmt", "3"), Qa(c, d, a.google_conversion_page_url, a.google_conversion_referrer_url)].join("");
                        Va(c, d, a, z, !1, !1)
                    }
                    a.google_remarketing_only && a.google_enable_display_cookie_match && Wa(c, d);
                    f = !0
                }
            } catch (ta) {}
            b = f
        } else b = !1;
        return b
    };
}).call(this);
