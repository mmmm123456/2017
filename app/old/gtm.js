// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 5
(function(w, g) {
    w[g] = w[g] || {};
})(window, 'google_tag_manager');
(function() {


    var __awct;
    (function() {
        var a = !1,
            b = [],
            d = function(a) {
                var b = p("google_trackConversion"),
                    c = a.gtm_onFailure;
                "function" == typeof b ? b(a) || c() : c()
            },
            c = function() {
                for (; 0 < b.length;) d(b.shift())
            };
        (function(a) {
            __awct = a;
            __awct.a = "awct";
            __awct.b = ["google"];
            __awct.isVendorTemplate = !0
        })(function(e) {
            var f = {
                google_conversion_domain: "",
                google_conversion_id: e["20"],
                google_conversion_label: e["21"],
                google_conversion_value: e[""] || 0,
                google_remarketing_only: !1,
                onload_callback: e["23"],
                gtm_onFailure: e["24"]
            };
            e[""] && (f.google_conversion_currency = e[""]);
            e[""] && (f.google_conversion_order_id = e[""]);
            b.push(f);
            a || (a = !0, ea("//www.googleadservices.com/pagead/conversion_async.js", function() {
                c();
                b = {
                    push: d
                }
            }, function() {
                c();
                a = !1
            }))
        })
    })();









    var hb = this;
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var ib = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        eb = function(a) {
            if (null == a) return String(a);
            var b = ib.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        jb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Na = function(a) {
            if (!a || "object" != eb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !jb(a, "constructor") && !jb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (d) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || jb(a, b)
        },
        kb = function(a, b) {
            var d = b || ("array" == eb(a) ? [] : {}),
                c;
            for (c in a)
                if (jb(a, c)) {
                    var e = a[c];
                    "array" == eb(e) ? ("array" != eb(d[c]) && (d[c] = []), d[c] = kb(e, d[c])) : Na(e) ? (Na(d[c]) || (d[c] = {}), d[c] = kb(e, d[c])) : d[c] = e
                }
            return d
        };
    var Sa = null,
        lb = Math.random(),
        mb = null,
        Ga = null,
        cb = !1,
        nb = {},
        ob = {},
        db = {};
    var pb, qb, rb, sb, tb, ub, vb, xb, yb, zb, Ab, Bb, T, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Qb, Rb, Sb, Tb, Ub, Vb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc, Sc, Tc, Uc, Vc, Wc, Xc, Yc, Zc, $c, ad, bd, cd, dd, ed, fd, gd, hd, id, jd, kd, ld, md, nd, od, pd, qd, rd, td, ud, vd, wd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, ae, be, ce, de, ee, fe, ge, he, ie, je, ke, le, me, ne, oe, pe, qe, re, se, te, ue, ve, we, xe, ye, ze, Ae, Be, Ce,
        De, Ee, Fe, Ge, He, Ie, Je, Ke, Le, Me, Ne, Oe, Pe, Qe, Re, Se, Te, Ue, Ve, We, Xe, Ye, Ze, $e, af, bf, cf, df, ef, ff, gf, hf, jf, kf, lf, mf, nf, of, pf, qf, rf, sf, tf, uf;
    (function() {
        var a = function(a) {
            return {
                toString: function() {
                    return a
                }
            }
        };
        pb = a("");
        qb = a("0");
        rb = "";
        sb = a("");
        tb = a("");
        ub = a("");
        vb = a("");
        xb = a("");
        yb = a("");
        zb = a("");
        Ab = a("");
        Bb = a("2");
        T = a("3");
        Cb = a("");
        Db = a("");
        Eb = a("");
        Fb = a("");
        Gb = a("");
        Hb = a("");
        Ib = a("");
        Jb = a("");
        Kb = a("");
        Lb = a("");
        Mb = a("");
        Nb = a("");
        Ob = a("");
        Qb = a("");
        Rb = a("");
        Sb = a("");
        Tb = a("");
        Ub = a("");
        Vb = a("");
        Xb = a("");
        Yb = a("");
        Zb = a("");
        $b = a("");
        ac = a("4");
        bc = a("");
        cc = a("");
        dc = a("");
        ec = a("");
        fc = a("");
        gc = a("");
        hc = a("");
        ic = a("");
        jc = a("");
        kc = a("");
        lc = a("");
        mc = a("");
        nc = a("");
        oc = a("");
        pc = a("");
        qc = a("5");
        rc = a("");
        sc = a("");
        tc = a("");
        uc = a("6");
        vc = a("");
        wc = a("");
        xc = a("7");
        yc = a("");
        zc = a("");
        Ac = a("");
        Bc = a("");
        Cc = a("");
        Dc = a("");
        Ec = a("");
        Gc = a("");
        Hc = a("8");
        Ic = a("");
        Jc = a("9");
        Kc = a("");
        Lc = a("");
        Mc = a("");
        Nc = a("");
        Oc = a("");
        Pc = a("");
        Qc = a("10");
        Rc = a("");
        Sc = a("");
        Tc = a("");
        Uc = a("");
        Vc = a("");
        Wc = a("");
        Xc = a("");
        Yc = a("");
        Zc = a("");
        $c = a("");
        ad = a("");
        bd = a("");
        cd = a("");
        dd = a("11");
        ed = a("");
        fd = a("23");
        gd = a("24");
        hd = a("");
        id = a("");
        jd = a("12");
        kd = a("13");
        ld = a("");
        md = a("");
        nd = a("");
        od = a("");
        pd = a("14");
        qd = a("");
        rd = a("");
        td = a("");
        ud = a("");
        vd = a("");
        wd = a("");
        Ad = a("");
        Bd = a("");
        Cd = a("");
        Dd = a("");
        Ed = a("15");
        Fd = a("");
        Gd = a("");
        Hd = a("");
        Id = a("");
        Jd = a("");
        Kd = a("");
        Ld = a("");
        Md = a("");
        Nd = a("");
        Od = a("");
        Pd = a("");
        Qd = a("");
        Rd = a("");
        Sd = a("");
        Td = a("");
        Ud = a("");
        Vd = a("");
        Wd = a("16");
        Xd = a("");
        Yd = a("");
        Zd = a("");
        $d = a("");
        ae = a("");
        be = a("");
        ce = a("");
        de = a("");
        ee = a("");
        fe = a("");
        ge = a("");
        he = a("");
        ie = a("");
        je = a("");
        ke = a("");
        le = a("");
        me = a("");
        ne = a("");
        oe = a("");
        pe = a("");
        qe = a("");
        re = a("");
        se = a("");
        te = a("");
        ue = a("");
        ve = a("");
        we = a("");
        xe = a("");
        ye = a("");
        ze = a("");
        Ae = a("");
        Be = a("");
        Ce = a("");
        De = a("");
        Ee = a("");
        Fe = a("");
        Ge = a("");
        He = a("17");
        Ie =
            a("");
        Je = a("");
        Ke = a("");
        Le = a("");
        Me = a("");
        Ne = a("");
        Oe = a("");
        Pe = a("");
        Qe = a("");
        Re = a("");
        Se = a("");
        Te = a("");
        Ue = a("");
        Ve = a("");
        We = a("");
        Xe = a("");
        Ye = a("");
        Ze = a("");
        $e = a("");
        af = a("");
        bf = a("");
        cf = a("");
        df = "";
        ef = a("");
        ff = a("");
        gf = a("");
        hf = a("");
        jf = a("");
        kf = a("18");
        lf = a("");
        mf = a("");
        nf = a("");
        of = a("");
        pf = a("");
        qf =
            a("");
        rf = a("");
        sf = a("");
        tf = a("");
        uf = a("")
    })();
    var Ya = function() {},
        R = function(a) {
            return "function" == typeof a
        },
        N = function(a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
        vf = function(a) {
            return "number" == eb(a) && !isNaN(a)
        },
        wf = function(a) {
            return /^[0-9]+$/.test(a)
        },
        Cf = function(a, b) {
            if (Array.prototype.indexOf) {
                var d = a.indexOf(b);
                return "number" == typeof d ? d : -1
            }
            for (var c = 0; c < a.length; c++)
                if (a[c] === b) return c;
            return -1
        },
        Fa = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        O = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ia = function(a) {
            return "false" ==
                String(a).toLowerCase() ? !1 : !!a
        },
        Df = function(a) {
            var b = [];
            if (N(a))
                for (var d = 0; d < a.length; d++) b.push(String(a[d]));
            return b
        },
        J = function() {
            return new Date
        },
        Ka = function(a, b) {
            if (!vf(a) || !vf(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Ef = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ef.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Ef.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    Ef.prototype.contains = function(a) {
        return void 0 !== this.get(a)
    };
    var Ff = function(a, b, d) {
            try {
                if (!a[Jd]) return a[dd](a, b || Ya, d || Ya);
                d && d()
            } catch (c) {}
            return !1
        },
        Gf = function(a, b) {
            function d(b, c) {
                a.contains(b) || a.set(b, []);
                a.get(b).push(c)
            }
            for (var c = Fa(b).split("&"), e = 0; e < c.length; e++)
                if (c[e]) {
                    var f = c[e].indexOf("=");
                    0 > f ? d(c[e], "1") : d(c[e].substring(0, f), c[e].substring(f + 1))
                }
        },
        Hf = function(a) {
            var b = a ? a.length : 0;
            return 0 < b ? a[b - 1] : ""
        },
        If = function(a) {
            return function() {
                return a("GTM-TB322GZ")
            }
        },
        Jf = function(a) {
            for (var b = 0; b < a.length; b++) a[b]()
        },
        Ma = function() {
            return "gtm" + Lf()
        },
        Lf = function() {
            var a = Sa.sequence || 0;
            Sa.sequence = a + 1;
            return a
        },
        Pa = function(a, b, d) {
            return a && a.hasOwnProperty(b) ? a[b] : d
        },
        Mf = function(a) {
            return null !== a && void 0 !== a && void 0 !== a.length
        },
        Nf = function(a, b) {
            0 == b ? a.Xa = !0 : a.complete = !0;
            var d = a.g;
            a.s && (a.s.Ha[d] = b);
            nb[d] && (nb[d].state = b)
        },
        Pf = function(a, b) {
            a.sort(function(a, c) {
                return b(a, c) ? -1 : b(c, a) ? 1 : 0
            })
        };
    var v = window,
        M = document,
        Rf = navigator,
        bb = function(a, b) {
            var d = v[a];
            v[a] = void 0 === d ? b : d;
            return v[a]
        },
        L = function(a, b, d, c) {
            return (c || "http:" != v.location.protocol ? a : b) + d
        },
        Sf = function(a) {
            var b = M.getElementsByTagName("script")[0] || M.body || M.head;
            b.parentNode.insertBefore(a, b)
        },
        Ra = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        r = function(a, b, d) {
            var c = M.createElement("script");
            c.type = "text/javascript";
            c.async = !0;
            c.src = a;
            Ra(c, b);
            d && (c.onerror = d);
            Sf(c);
            return c
        },
        ia = function(a, b) {
            var d = M.createElement("iframe");
            d.height = "0";
            d.width = "0";
            d.style.display = "none";
            d.style.visibility = "hidden";
            Sf(d);
            Ra(d, b);
            void 0 !== a && (d.src = a);
            return d
        },
        G = function(a, b, d) {
            var c = new Image(1, 1);
            c.onload = function() {
                c.onload = null;
                b && b()
            };
            c.onerror = function() {
                c.onerror = null;
                d && d()
            };
            c.src = a
        },
        Q = function(a, b, d, c) {
            a.addEventListener ? a.addEventListener(b, d, !!c) : a.attachEvent && a.attachEvent("on" + b, d)
        },
        z = function(a) {
            v.setTimeout(a,
                0)
        },
        Ua = !1,
        Va = [],
        Tf = function(a) {
            if (!Ua) {
                var b = M.createEventObject,
                    d = "complete" == M.readyState,
                    c = "interactive" == M.readyState;
                if (!a || "readystatechange" != a.type || d || !b && c) {
                    Ua = !0;
                    for (var e = 0; e < Va.length; e++) Va[e]()
                }
                Va.push = function() {
                    for (var a = 0; a < arguments.length; a++) z(arguments[a]);
                    return 0
                }
            }
        },
        Uf = 0,
        Vf = function() {
            if (!Ua && 140 > Uf) {
                Uf++;
                try {
                    M.documentElement.doScroll("left"), Tf()
                } catch (a) {
                    v.setTimeout(Vf, 50)
                }
            }
        },
        za = function(a) {
            var b = M.getElementById(a);
            if (b && ua(b, "id") != a)
                for (var d = 1; d < document.all[a].length; d++)
                    if (ua(document.all[a][d],
                            "id") == a) return document.all[a][d];
            return b
        },
        ua = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        xa = function(a) {
            return a.target || a.srcElement || {}
        },
        Ea = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        ab = function(a) {
            var b = M.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            for (var b = b.lastChild, d = []; b.firstChild;) d.push(b.removeChild(b.firstChild));
            return d
        },
        ya = function(a, b) {
            for (var d = {}, c = 0; c < b.length; c++) d[b[c]] = !0;
            for (var e = a, c = 0; e && !d[String(e.tagName).toLowerCase()] && 100 > c; c++) e = e.parentElement;
            e && !d[String(e.tagName).toLowerCase()] && (e = null);
            return e
        },
        Wf = !1,
        Xf = [],
        Yf = function() {
            if (!Wf) {
                Wf = !0;
                for (var a = 0; a < Xf.length; a++) Xf[a]()
            }
        },
        Zf = function(a) {
            a = a || v;
            var b = a.location.href,
                d = b.indexOf("#");
            return 0 > d ? "" : b.substring(d + 1)
        },
        Za = function(a) {
            window.console && window.console.log && window.console.log(a)
        };
    var aa = function(a, b, d, c, e) {
            var f, g = (a.protocol.replace(":", "") || v.location.protocol.replace(":", "")).toLowerCase();
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = (a.hostname || v.location.hostname).split(":")[0].toLowerCase();
                    if (d) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f = String(1 * (a.hostname ? a.port : v.location.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var k =
                        f.split("/");
                    0 <= Cf(c || [], k[k.length - 1]) && (k[k.length - 1] = "");
                    f = k.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    if (e) a: {
                        for (var l = f.split("&"), m = 0; m < l.length; m++) {
                            var n = l[m].split("=");
                            if (decodeURIComponent(n[0]).replace(/\+/g, " ") == e) {
                                f = decodeURIComponent(n.slice(1).join("=")).replace(/\+/g, " ");
                                break a
                            }
                        }
                        f = void 0
                    }
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        $f = function(a) {
            var b = "";
            a && a.href && (b = a.hash ? a.href.replace(a.hash, "") : a.href);
            return b
        },
        ba = function(a) {
            var b =
                M.createElement("a");
            a && (b.href = a);
            return b
        };
    var ja = function(a, b) {
        var d = function() {};
        d.prototype = a.prototype;
        var c = new d;
        a.apply(c, Array.prototype.slice.call(arguments, 1));
        return c
    };
    var ga = function(a, b, d) {
            G(a, b, d)
        },
        ha = function(a) {
            var b = ["veinteractive.com", "ve-interactive.cn"];
            if (!a) return !1;
            var d = aa(ba(a), "host");
            if (!d) return !1;
            for (var c = 0; b && c < b.length; c++) {
                var e = b[c] && b[c].toLowerCase();
                if (e) {
                    var f = d.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && d.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        Ba = function(a, b, d) {
            for (var c = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(d) && (c[a[f][b]] = a[f][d], e = !0);
            return e ? c : null
        };
    var ag = new Ef,
        bg = {},
        dg = {
            set: function(a, b) {
                kb(cg(a, b), bg)
            },
            get: function(a) {
                return S(a, 2)
            },
            reset: function() {
                ag = new Ef;
                bg = {}
            }
        },
        S = function(a, b) {
            if (2 == b) {
                for (var d = bg, c = a.split("."), e = 0; e < c.length; e++) {
                    if (void 0 === d[c[e]]) return;
                    d = d[c[e]]
                }
                return d
            }
            return ag.get(a)
        },
        cg = function(a, b) {
            for (var d = {}, c = d, e = a.split("."), f = 0; f < e.length - 1; f++) c = c[e[f]] = {};
            c[e[e.length - 1]] = b;
            return d
        };
    var eg = !1,
        fg = !1;
    var gg = Math.random(),
        hg = "0.100000" > gg;
    var ig = function(a, b) {
            if (hg) {
                var d = "//www.googletagmanager.com/a?id=GTM-TB322GZ&cv=5",
                    c = function(a, b) {
                        b && (d += a + encodeURIComponent(b))
                    };
                c("&v=", "t");
                c("&n=", a);
                c("&s=", b && b.state);
                c("&h=", b && b.hideLatency);
                c("&g=", b && b.gaLatency);
                c("&p=", b && b.loadBy);
                c("&o=", b && b.timeout);
                c("&l=", J().getTime() - O(mb));
                d += "&sr=0.100000";
                c("&ps=", gg);
                c("&cb=", Ka());
                G(d)
            }
        },
        jg = Ya;
    var kg = Ya,
        lg = [],
        mg = !1,
        ca = function(a) {
            return v["dataLayer"].push(a)
        },
        ng = function(a) {
            var b = !1;
            return function() {
                !b && R(a) && z(If(a));
                b = !0
            }
        },
        tg = function() {
            for (var a = !1; !mg && 0 < lg.length;) {
                mg = !0;
                var b = lg.shift();
                if (R(b)) try {
                        b.call(dg)
                    } catch (oa) {} else if (N(b)) a: {
                        var d = b;
                        if ("string" == eb(d[0])) {
                            for (var c = d[0].split("."), e = c.pop(), f = d.slice(1), g = bg, h = 0; h < c.length; h++) {
                                if (void 0 === g[c[h]]) break a;
                                g = g[c[h]]
                            }
                            try {
                                g[e].apply(g, f)
                            } catch (oa) {}
                        }
                    }
                    else {
                        var k = void 0,
                            l = void 0,
                            m = b;
                        for (l in m)
                            if (m.hasOwnProperty(l)) {
                                var n =
                                    l,
                                    q = m[l];
                                ag.set(n, q);
                                kb(cg(n, q), bg)
                            }
                        var w = !1,
                            y = m.event;
                        if (y) {
                            if (!m.hasOwnProperty("gtm.uniqueEventId")) {
                                m["gtm.uniqueEventId"] = Lf();
                                var t = m["gtm.uniqueEventId"];
                                ag.set("gtm.uniqueEventId", t);
                                kb(cg("gtm.uniqueEventId", t), bg)
                            }
                            k = m["gtm.uniqueEventId"];
                            Ga = y;
                            var x = ng(m.eventCallback),
                                F = m.eventTimeout;
                            F && v.setTimeout(x, Number(F));
                            w = kg(k, y, x, m.eventReporter)
                        }
                        mb || (mb = m["gtm.start"]) && jg();
                        var B = m,
                            A = k,
                            E = y,
                            H = bg;
                        if (!w) {
                            var C = k,
                                I = y;
                        }
                        Ga = null;
                        a = w || a
                    }
                var P = b,
                    K = bg;
                sg();
                mg = !1
            }
            return !a
        },
        ug = function() {
            var a = tg();
            try {
                var b = v["dataLayer"].hide;
                if (b && void 0 !== b["GTM-TB322GZ"] && b.end) {
                    b["GTM-TB322GZ"] = !1;
                    var d = !0,
                        c;
                    for (c in b)
                        if (b.hasOwnProperty(c) && !0 === b[c]) {
                            d = !1;
                            break
                        }
                    d && (b.end(), b.end = null)
                }
            } catch (e) {}
            return a
        };
    var wa = function(a, b, d) {
            Q(a, b, d, void 0)
        },
        ea = function(a, b, d) {
            r(a, b, d)
        },
        Ha = function(a, b) {
            return S(a, b || 2)
        },
        fa = function(a, b) {
            v[a] = b
        },
        p = function(a, b, d) {
            var c = v;
            b && (void 0 === c[a] || d && !c[a]) && (c[a] = b);
            return c[a]
        },
        u = function(a, b, d, c) {
            return (c || "https:" == v.location.protocol ? a : b) + d
        };
    var vg = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        wg = {
            customPixels: ["nonGooglePixels"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        xg = {
            customPixels: ["customScripts", "html"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels",
                "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"
            ],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        yg = function(a, b) {
            for (var d = [], c = 0; c < a.length; c++) d.push(a[c]), d.push.apply(d, b[a[c]] || []);
            return d
        },
        zg = function() {
            var a = S("gtm.whitelist");
            var b = a && yg(Df(a), wg),
                d = S("gtm.blacklist") || S("tagTypeBlacklist") || [];
            vg.test(v.location && v.location.hostname) && (d = Df(d), d.push("nonGooglePixels", "nonGoogleScripts"));
            var c = d && yg(Df(d), xg),
                e = {};
            return function(f) {
                var g = f && f[dd];
                if (!g) return !0;
                if (void 0 !== e[g.a]) return e[g.a];
                var h = !0;
                if (a) a: {
                    if (0 > Cf(b, g.a))
                        if (g.b && 0 < g.b.length)
                            for (var k = 0; k < g.b.length; k++) {
                                if (0 > Cf(b,
                                        g.b[k])) {
                                    h = !1;
                                    break a
                                }
                            } else {
                                h = !1;
                                break a
                            }
                        h = !0
                }
                var l = !1;
                if (d) {
                    var m;
                    if (!(m = 0 <= Cf(c, g.a))) a: {
                        for (var n = g.b || [], q = new Ef, w = 0; w < c.length; w++) q.set(c[w], !0);
                        for (w = 0; w < n.length; w++)
                            if (q.get(n[w])) {
                                m = !0;
                                break a
                            }
                        m = !1
                    }
                    l = m
                }
                return e[g.a] = !h || l
            }
        };
    var Da = function(a) {
            var b = M;
            return Ag ? b.querySelectorAll(a) : null
        },
        Bg = !1;
    if (M.querySelectorAll) try {
        var Cg = M.querySelectorAll(":root");
        Cg && 1 == Cg.length && Cg[0] == M.documentElement && (Bg = !0)
    } catch (a) {}
    var Ag = Bg;
    var _eu = function(a) {
        var b = String(S("gtm.elementUrl") || a[Ac] || ""),
            d = ba(b);
        return b
    };
    _eu.a = "eu";
    _eu.b = ["google"];
    var _e = function() {
        return Ga
    };
    _e.a = "e";
    _e.b = ["google"];
    var Hg = /(^|\.)doubleclick\.net$/i,
        Ig = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Ja = function(a) {
            for (var b = String(M.cookie).split(";"), d = [], c = 0; c < b.length; c++) {
                var e = b[c].split("="),
                    f = Fa(e[0]);
                if (f && f == a) {
                    var g = Fa(e.slice(1).join("="));
                    g && (g = decodeURIComponent(g));
                    d.push(g)
                }
            }
            return d
        },
        Jg = function(a, b, d, c, e) {
            if (Hg.test(M.location.hostname) || "/" == d && Ig.test(c)) return !1;
            var f = a + "=" + b + "; ";
            d && (f += "path=" + d + "; ");
            e && (f += "expires=" + e.toGMTString() + "; ");
            c && (f += "domain=" + c + ";");
            var g = M.cookie;
            M.cookie = f;
            return g !=
                M.cookie || 0 <= Cf(Ja(a), b)
        },
        Kg = function(a) {
            if ("none" == a) return 0;
            0 == a.indexOf(".") && (a = a.substr(1));
            return a.split(".").length
        },
        Lg = function(a) {
            var b = a;
            b ? (1 < b.length && b.lastIndexOf("/") == b.length - 1 && (b = b.substr(0, b.length - 1)), 0 != b.indexOf("/") && (b = "/" + b), a = b) : a = "/";
            return "/" == a ? 1 : a.split("/").length
        },
        Mg = function() {
            var a = aa(v.location, "host", !0).split(".");
            if (4 == a.length && /^[0-9]*$/.exec(a[3])) return ["none"];
            for (var b = [], d = a.length - 2; 0 <= d; d--) b.push(a.slice(d).join("."));
            b.push("none");
            return b
        };
    var Ng = function(a, b) {
        this.f = a;
        this.j = b
    };
    Ng.prototype.toString = function() {
        var a = "" + this.f;
        1 < this.j && (a = a + "-" + this.j);
        return a
    };
    var Og = function(a, b) {
        this.Fa = a;
        this.ka = b
    };
    Og.prototype.toString = function() {
        return "" + this.ka + "." + this.Fa
    };
    var Rg = function(a, b) {
            var d = new Pg(null, a, b);
            Qg(d);
            return d
        },
        Pg = function(a, b, d) {
            this.Oa = Math.floor(J().getTime() / 864E5);
            this.ja = b || "auto";
            this.aa = d || "/";
            var c = Kg(this.ja),
                e = Lg(this.aa);
            this.F = a || new Ng(c, e);
            this.h = [];
            this.C = new Ef
        },
        Tg = function(a, b, d) {
            b && ("" == d.Fa ? Sg(a, b) : (a.C.contains(b) || a.h.push(b), a.C.set(b, d)))
        },
        Ug = function(a, b) {
            for (var d = 0; d < b.length; d++) Tg(a, b[d][0], b[d][1])
        },
        Sg = function(a, b) {
            var d = Cf(a.h, b);
            0 <= d && a.h.splice(d, 1);
            a.C.set(b, void 0)
        },
        Vg = function(a) {
            for (var b = [], d = 0; d < a.h.length; d++) {
                var c =
                    a.h[d];
                b.push([c, a.C.get(c)])
            }
            return b
        },
        Wg = function(a) {
            for (var b = 0, d = 0; d < a.h.length; d++) b = Math.max(b, a.C.get(a.h[d]).ka);
            return 864E5 * b
        };
    Pg.prototype.toString = function() {
        if (0 == this.h.length) return "";
        for (var a = [], b = 0; b < this.h.length; b++) {
            var d = this.h[b];
            a.push("" + d + "." + this.C.get(d).toString())
        }
        return "GAX1." + this.F.toString() + "." + a.join("!")
    };
    var Xg = function(a, b) {
            for (var d = new Date, c = Lg(a.aa), e = [], f = 0; f < a.h.length; f++) {
                var g = a.h[f];
                a.C.get(g).ka < a.Oa && e.push(g)
            }
            for (f = 0; f < e.length; f++) Sg(a, e[f]);
            if (a.h.length > (b || 10)) return !1;
            d.setTime(Wg(a));
            if ("auto" != a.ja) return Jg("_gaexp", a.toString(), a.aa, a.ja, d);
            for (var h = Mg(), k = 0; k < h.length; k++)
                if ("none" != h[k] && (a.F = new Ng(Kg(h[k]), c), Jg("_gaexp", a.toString(), a.aa, h[k], d))) return !0;
            return !1
        },
        Qg = function(a) {
            for (var b = a.F.f, d = a.F.j, c = Ja("_gaexp"), e = [], f = 0; f < c.length; f++) {
                var g = Yg(a, c[f]);
                g && e.push(g)
            }
            Pf(e,
                function(a, c) {
                    var e = a.F,
                        f = c.F;
                    return e.f == f.f && e.j == f.j ? !1 : e.f == b && e.j == d ? !0 : f.f == b && f.j == d ? !1 : e.f == b ? f.f != b || e.j < f.j : f.f == b ? !1 : e.j == d ? f.f != b && (f.j != d || e.f < f.f) : f.j == d ? !1 : e.f < f.f || e.f == f.f && e.j < f.j
                });
            a.F = 0 < e.length ? e[0].F : new Ng(b, d);
            for (f = e.length - 1; 0 <= f; f--) Ug(a, Vg(e[f]))
        },
        Yg = function(a, b) {
            var d = b.match(/GAX1\.([^.]+).(.*)/);
            if (d) {
                var c;
                a: {
                    var e = (d[1] || "").split("-");
                    if (!(0 == e.length || 2 < e.length)) {
                        var f = Fa(e[0]);
                        if (0 != f.length) {
                            var g = 2 == e.length ? Fa(e[1]) : "1";
                            if (wf(f) && wf(g)) {
                                c = new Ng(O(f), O(g));
                                break a
                            }
                        }
                    }
                    c = void 0
                }
                if (c) {
                    for (var h = new Pg(c, a.ja, a.aa), k = (d[2] || "").split("!"), l = 0; l < k.length; l++) {
                        var m = k[l].split(".");
                        if (3 == m.length) {
                            if (!wf(m[1])) return;
                            Tg(h, m[0], new Og(m[2], O(m[1])))
                        }
                    }
                    return h
                }
            }
        };
    var _f = function(a) {
        var b = String(S("gtm.referrer") || M.referrer);
        if (!b) return b;
        var d = ba(b);
        return b
    };
    _f.a = "f";
    _f.b = ["google"];
    var Ca = function(a) {
            var b = v.location,
                d;
            (d = a[pc] ? a[pc] : S("gtm.url")) && (b = ba(String(d)));
            var c = b.href,
                e = c.indexOf("#"),
                f = 0 > e ? c : c.substr(0, e);
            a[ac] && (f = aa(b, a[ac], a[Be], a[zc], a[oe]));
            return f
        },
        _u = Ca;
    _u.a = "u";
    _u.b = ["google"];
    var _eq = function(a) {
        return String(a[Bb]) == String(a[T])
    };
    _eq.a = "eq";
    _eq.b = ["google"];
    var La = new String("undefined"),
        Wa = function(a) {
            this.resolve = function(b) {
                for (var d = [], c = 0; c < a.length; c++) d.push(a[c] === La ? b : a[c]);
                return d.join("")
            }
        };
    Wa.prototype.toString = function() {
        return this.resolve("undefined")
    };
    Wa.prototype.valueOf = Wa.prototype.toString;
    var kh = {},
        Xa = function(a, b) {
            var d = Lf();
            kh[d] = [a, b];
            return d
        },
        lh = function(a) {
            var b = a ? 0 : 1;
            return function(a) {
                var c = kh[a];
                if (c && R(c[b])) c[b]();
                kh[a] = void 0
            }
        };
    var mh = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        nh = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var oh;
    a: {
        var ph = hb.navigator;
        if (ph) {
            var qh = ph.userAgent;
            if (qh) {
                oh = qh;
                break a
            }
        }
        oh = ""
    }
    var W = function(a) {
        return -1 != oh.indexOf(a)
    };
    var rh = function() {
            W("iPod")
        },
        sh = function() {
            return W("iPhone") && !W("iPod") && !W("iPad")
        };
    var th = function(a) {
        th[" "](a);
        return a
    };
    th[" "] = function() {};
    var vh = function(a, b) {
        var d = uh;
        return Object.prototype.hasOwnProperty.call(d, a) ? d[a] : d[a] = b(a)
    };
    var wh = W("Opera"),
        xh = W("Trident") || W("MSIE"),
        yh = W("Edge"),
        zh;
    if (zh = W("Gecko")) zh = !(-1 != oh.toLowerCase().indexOf("webkit") && !W("Edge"));
    var Ah = zh && !(W("Trident") || W("MSIE")) && !W("Edge"),
        Bh = -1 != oh.toLowerCase().indexOf("webkit") && !W("Edge");
    Bh && W("Mobile");
    W("Macintosh");
    W("Windows");
    W("Linux") || W("CrOS");
    var Ch = hb.navigator || null;
    Ch && (Ch.appVersion || "").indexOf("X11");
    W("Android");
    sh();
    W("iPad");
    rh();
    sh() || W("iPad") || rh();
    var Dh = function() {
            var a = hb.document;
            return a ? a.documentMode : void 0
        },
        Eh;
    a: {
        var Fh = "",
            Gh = function() {
                var a = oh;
                if (Ah) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (yh) return /Edge\/([\d\.]+)/.exec(a);
                if (xh) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Bh) return /WebKit\/(\S+)/.exec(a);
                if (wh) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Gh && (Fh = Gh ? Gh[1] : "");
        if (xh) {
            var Hh = Dh();
            if (null != Hh && Hh > parseFloat(Fh)) {
                Eh = String(Hh);
                break a
            }
        }
        Eh = Fh
    }
    var Ih = Eh,
        uh = {},
        Jh = function(a) {
            return vh(a, function() {
                for (var b = 0, d = mh(String(Ih)).split("."), c = mh(String(a)).split("."), e = Math.max(d.length, c.length), f = 0; 0 == b && f < e; f++) {
                    var g = d[f] || "",
                        h = c[f] || "";
                    do {
                        var k = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""],
                            l = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                        if (0 == k[0].length && 0 == l[0].length) break;
                        b = nh(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || nh(0 == k[2].length, 0 == l[2].length) || nh(k[2], l[2]);
                        g = k[3];
                        h = l[3]
                    } while (0 == b)
                }
                return 0 <= b
            })
        },
        Kh;
    var Lh = hb.document;
    Kh = Lh && xh ? Dh() || ("CSS1Compat" == Lh.compatMode ? parseInt(Ih, 10) : 5) : void 0;
    var Mh;
    if (!(Mh = !Ah && !xh)) {
        var Nh;
        if (Nh = xh) Nh = 9 <= Number(Kh);
        Mh = Nh
    }
    Mh || Ah && Jh("1.9.1");
    xh && Jh("9");
    var $a = function(a, b) {
            var d = "";
            xh && !Oh(a) && (d = '<script>document.domain="' + document.domain + '";\x3c/script>' + d);
            var c = "<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>" + d + "</head><body>" + b + "</body></html>";
            if (Ph) a.srcdoc = c;
            else if (Qh) {
                var e = a.contentWindow.document;
                e.open("text/html", "replace");
                e.write(c);
                e.close()
            } else Rh(a, c)
        },
        Ph = Bh && "srcdoc" in document.createElement("iframe"),
        Qh = Ah || Bh || xh && Jh(11),
        Rh = function(a, b) {
            xh && Jh(7) && !Jh(10) && 6 > Sh() && Th(b) && (b = Uh(b));
            var d = function() {
                a.contentWindow.goog_content =
                    b;
                a.contentWindow.location.replace("javascript:window.goog_content")
            };
            xh && !Oh(a) ? Vh(a, d) : d()
        },
        Sh = function() {
            var a = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
            return a ? parseFloat(a[1]) : 0
        },
        Oh = function(a) {
            try {
                var b;
                var d = a.contentWindow;
                try {
                    var c;
                    if (c = !!d && null != d.location.href) b: {
                        try {
                            th(d.foo);
                            c = !0;
                            break b
                        } catch (e) {}
                        c = !1
                    }
                    b = c
                } catch (e) {
                    b = !1
                }
                return b
            } catch (e) {
                return !1
            }
        },
        Wh = 0,
        Vh = function(a, b) {
            var d = "goog_rendering_callback" + Wh++;
            hb[d] = b;
            a.src = "javascript:'<script>(function() {document.domain = \"" +
                document.domain + '";var continuation = window.parent.' + d + ";window.parent." + d + " = null;continuation();})()\x3c/script>'"
        },
        Th = function(a) {
            for (var b = 0; b < a.length; ++b)
                if (127 < a.charCodeAt(b)) return !0;
            return !1
        },
        Uh = function(a) {
            for (var b = unescape(encodeURIComponent(a)), d = Math.floor(b.length / 2), c = [], e = 0; e < d; ++e) c[e] = String.fromCharCode(256 * b.charCodeAt(2 * e + 1) + b.charCodeAt(2 * e));
            1 == b.length % 2 && (c[d] = b.charAt(b.length - 1));
            return c.join("")
        };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

    var Yh = function(a, b, d, c) {
        return function() {
            try {
                if (0 < b.length) {
                    var e = b.shift(),
                        f = Yh(a, b, d, c);
                    if ("SCRIPT" == String(e.nodeName).toUpperCase() && "text/gtmscript" == e.type) {
                        var g = M.createElement("script");
                        g.async = !1;
                        g.type = "text/javascript";
                        g.id = e.id;
                        g.text = e.text || e.textContent || e.innerHTML || "";
                        e.charset && (g.charset = e.charset);
                        var h = e.getAttribute("data-gtmsrc");
                        h && (g.src = h, Ra(g, f));
                        a.insertBefore(g, null);
                        h || f()
                    } else if (e.innerHTML && 0 <= e.innerHTML.toLowerCase().indexOf("<script")) {
                        for (var k = []; e.firstChild;) k.push(e.removeChild(e.firstChild));
                        a.insertBefore(e, null);
                        Yh(e, k, f, c)()
                    } else a.insertBefore(e, null), f()
                } else d()
            } catch (l) {
                z(c)
            }
        }
    };
    var $h = function(a, b, d) {
            if (M.body) {
                var c =
                    a[jd];
                c instanceof Wa && (c = c.resolve(Xa(b, d)), b = Ya);
                if (a[lf]) try {
                    $a(ia(), "<script>var google_tag_manager=parent.google_tag_manager;\x3c/script>" + c), z(b)
                } catch (e) {
                    z(d)
                } else a[nf] ? Zh(c, b, d) : Yh(M.body, ab(c), b, d)()
            } else v.setTimeout(function() {
                $h(a, b, d)
            }, 200)
        },
        _html = $h;
    _html.a = "html";
    _html.b = ["customScripts"];
    var li = function(a, b, d, c, e) {
            var f = a + "{" + (b + ": " + d + (c ? " !important" : "")) + "}";
            e && (f = e + "{" + f + "}");
            var g = document;
            if (g.createStyleSheet) {
                var h = ii(g),
                    k = h.rules.length;
                h.insertRule(f, k);
                return function() {
                    h.deleteRule ? h.deleteRule(k) : h.removeRule(k);
                    h.insertRule("x {}", k)
                }
            }
            var l = ji(f, g);
            ki(l, g);
            var m = l.parentNode;
            return function() {
                m.removeChild(l)
            }
        },
        mi = null,
        ii = function(a) {
            if (mi) return mi;
            for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
                var d = a.styleSheets[b],
                    c = d.ownerNode;
                if (c && c.parentNode && "HEAD" == c.parentNode.tagName) return mi =
                    d
            }
            0 == a.styleSheets.length && a.createStyleSheet();
            return mi = a.styleSheets[0]
        },
        ji = function(a, b) {
            var d = (b || document).createElement("style");
            void 0 !== d.cssText ? d.cssText = a : d.innerHTML = a;
            return d
        },
        ki = function(a, b) {
            var d = b || document,
                c = d.getElementsByTagName("head")[0];
            c || (c = d.createElement("head"), d.body.parentNode.insertBefore(c, d.body));
            c.appendChild(a)
        };
    var ti = {},
        ui = void 0,
        vi = function(a) {
            var b = ti[a];
            b || (b = {
                id: a,
                v: [],
                W: 0,
                Ia: null,
                za: void 0,
                Da: !1
            }, ti[a] = b);
            ui = b
        },
        xi = function(a, b, d, c) {
            var e = ui;
            if (!Ag || !e) return !1;
            var f = {
                id: e.id + ":" + e.v.length,
                fb: b,
                U: [],
                $a: d,
                G: a,
                ua: 0,
                sa: c || null,
                Na: 0,
                V: !1
            };
            e.v.push(f);
            null === a ? (f.V = !0, b(null)) : wi(e);
            return !0
        },
        yi = function(a) {
            var b = li(a, "visibility", "hidden", !0);
            return function() {
                R(b) && b.apply();
                b = null
            }
        },
        zi = function(a, b, d, c) {
            var e = b;
            if (!Ua) {
                var f = yi(a.A);
                Va.push(f);
                e = function(a, c) {
                    var d = b(a, c);
                    f();
                    return d
                }
            }
            return xi(a, e,
                d, c)
        },
        wi = function(a) {
            if (!a.Da) {
                for (var b = a.W; b < a.v.length; b++) {
                    var d = a.v[b],
                        c = b == a.W;
                    if (!d.V && !Ai(c, d)) break;
                    d.V && c && a.W++
                }
                a.v.length > a.W ? (a.Ia || (a.Ia = v.setTimeout(function() {
                    a.Ia = null;
                    wi(a)
                }, 80)), Ua || a.za || (a.za = function() {
                    z(function() {
                        wi(a)
                    })
                }, Q(M, "DOMContentLoaded", a.za))) : Bi(a)
            }
        },
        Bi = function(a) {
            for (var b = 0; b < a.v.length; b++) {
                var d = a.v[b];
                if (d.G)
                    for (var c = Da(d.G.A) || [], e = 0; e < c.length; e++) {
                        var f = c[e];
                        f.gtmProgressiveApplied && f.gtmProgressiveApplied[d.id] || (Ci(f, d.id), d.U.push(Di(f, d.id)))
                    }
            }
        },
        Ai =
        function(a, b) {
            var d = [];
            if (b.G) {
                var c = Ei(b.G, b.id),
                    e = null;
                b.sa && (e = Ei(b.sa, b.id + "-t"));
                for (var f = 0; f < c.length; f++) {
                    var g = c[f],
                        h;
                    if (null != e && (h = e.length > f ? e[f] : null, !h && !Ua && (null === b.sa.o || b.Na + d.length < b.sa.o))) break;
                    d.push({
                        element: g,
                        Jb: h
                    })
                }
            }
            if (!Ua && b.$a && (!a || null == b.G.o || b.G.o != b.ua + d.length)) return !1;
            for (var k = 0; k < d.length; k++) {
                var l = d[k].element,
                    m = d[k].Jb,
                    n;
                b.ua++;
                Ci(l, b.id);
                m && (b.Na++, n = b.id + "-t", Ci(m, n));
                var q = b.fb(l, m);
                R(q) && b.U.push(q);
                b.U.push(Di(l, b.id));
                m && n && b.U.push(Di(m, n))
            }
            if (b.G.o &&
                b.G.o == b.ua || Ua) b.V = !0;
            return !0
        },
        Ci = function(a, b) {
            a.gtmProgressiveApplied || (a.gtmProgressiveApplied = {});
            a.gtmProgressiveApplied[b] = !0
        },
        Di = function(a, b) {
            return function() {
                a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b]
            }
        },
        Ei = function(a, b) {
            for (var d = Da(a.A) || [], c = [], e = 0; e < d.length; e++) {
                var f = d[e];
                if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
                    if (a.D && !Fi(f)) break;
                    c.push(f)
                }
            }
            return c
        },
        Fi = function(a) {
            if (Ua) return !0;
            for (; a;) {
                if (a.nextSibling) return !0;
                a = a.parentNode
            }
            return !1
        };
    var ka, Gi, Hi, sa = /(Firefox\D28\D)/g.test(Rf.userAgent),
        Ji = function(a, b) {
            return function(d) {
                d = d || v.event;
                var c = xa(d),
                    e = !1;
                if (3 !== d.which || "LINK_CLICK" != a) {
                    "LINK_CLICK" == a && (c = ya(c, ["a", "area"]), e = !c || !c.href || Ii(c.href) || 2 === d.which || null == d.which && 4 == d.button || d.ctrlKey || d.shiftKey || d.altKey || !0 === d.metaKey);
                    var f = "FORM_SUBMIT" == a ? ka : Hi;
                    if (d.defaultPrevented || !1 === d.returnValue || d.X && d.X()) {
                        if (c) {
                            var g = {
                                    simulateDefault: !1
                                },
                                h = la(f, ["wnc", "nwnc"]);
                            h && ma(a, c, g, f.wt, h)
                        }
                    } else {
                        if (c) {
                            var g = {},
                                k, l = la(f, ["wnc",
                                    "nwnc", "nwc", "wc"
                                ]);
                            (k = ma(a, c, g, f.wt, l)) || (na(g.eventReport, f) ? b = !0 : e = !0);
                            e = e || k || "LINK_CLICK" == a && sa;
                            g.simulateDefault = !k && b && !e;
                            g.simulateDefault && (e = va(c, g) || e, !e && d.preventDefault && d.preventDefault());
                            d.returnValue = k || !b || e;
                            return d.returnValue
                        }
                        return !0
                    }
                }
            }
        },
        ma = function(a, b, d, c, e) {
            var f = c || 2E3,
                g = {
                    "gtm.element": b,
                    "gtm.elementClasses": b.className,
                    "gtm.elementId": b["for"] || ua(b, "id") || "",
                    "gtm.elementTarget": b.formTarget || b.target || ""
                };
            switch (a) {
                case "LINK_CLICK":
                    g["gtm.triggers"] = e || "";
                    g.event = "gtm.linkClick";
                    g["gtm.elementUrl"] = b.href;
                    g.eventTimeout = f;
                    g.eventCallback = Ki(b, d);
                    g.eventReporter = function(a) {
                        d.eventReport = a
                    };
                    break;
                case "FORM_SUBMIT":
                    g["gtm.triggers"] = e || "";
                    g.event = "gtm.formSubmit";
                    g["gtm.elementUrl"] = Li(b);
                    g.eventTimeout = f;
                    g.eventCallback = Mi(b, d);
                    g.eventReporter = function(a) {
                        d.eventReport = a
                    };
                    break;
                case "CLICK":
                    g.event = "gtm.click";
                    g["gtm.elementUrl"] = (b.attributes && b.attributes.formaction ? b.formAction : "") || b.action || b.href || b.src || b.code || b.codebase || "";
                    break;
                default:
                    return !0
            }
            return ca(g)
        },
        Li =
        function(a) {
            var b = a.action;
            b && b.tagName && (b = a.cloneNode(!1).action);
            return b
        },
        ra = function(a) {
            var b = a.target;
            if (!b) switch (String(a.tagName).toLowerCase()) {
                case "a":
                case "area":
                case "form":
                    b = "_self"
            }
            return b
        },
        va = function(a, b) {
            var d = !1,
                c = /(iPad|iPhone|iPod)/g.test(Rf.userAgent),
                e = ra(a).toLowerCase();
            switch (e) {
                case "":
                case "_self":
                case "_parent":
                case "_top":
                    var f;
                    f = (e || "_self").substring(1);
                    b.targetWindow = v.frames && v.frames[f] || v[f];
                    break;
                case "_blank":
                    c ? (b.simulateDefault = !1, d = !0) : (b.targetWindowName =
                        "gtm_autoEvent_" + J().getTime(), b.targetWindow = v.open("", b.targetWindowName));
                    break;
                default:
                    c && !v.frames[e] ? (b.simulateDefault = !1, d = !0) : (v.frames[e] || (b.targetWindowName = e), b.targetWindow = v.frames[e] || v.open("", e))
            }
            return d
        },
        Ki = function(a, b, d) {
            return function() {
                b.simulateDefault && (b.targetWindow ? b.targetWindow.location.href = a.href : (d = d || J().getTime(), 500 > J().getTime() - d && v.setTimeout(Ki(a, b, d), 25)))
            }
        },
        Mi = function(a, b, d) {
            return function() {
                if (b.simulateDefault)
                    if (b.targetWindow) {
                        var c;
                        b.targetWindowName &&
                            (c = a.target, a.target = b.targetWindowName);
                        M.gtmSubmitFormNow = !0;
                        pa(a).call(a);
                        b.targetWindowName && (a.target = c)
                    } else d = d || J().getTime(), 500 > J().getTime() - d && v.setTimeout(Mi(a, b, d), 25)
            }
        },
        la = function(a, b) {
            for (var d = [], c = 0; c < b.length; c++) {
                var e = a[b[c]],
                    f;
                for (f in e) e.hasOwnProperty(f) && e[f] && d.push(f)
            }
            return d.join(",")
        },
        Ni = function(a, b, d, c, e) {
            var f = e;
            if (!f || "0" == f) {
                if (a.l) return;
                a.l = !0;
                f = "0"
            }
            var g = a.wt;
            b && (!g || g > c) && (a.wt = c);
            a[b ? d ? "wc" : "wnc" : d ? "nwc" : "nwnc"][f] = !0
        },
        na = function(a, b) {
            if (b.wnc["0"] || b.wc["0"]) return !0;
            for (var d = 0; d < Oi.length; d++)
                if (a.passingRules[d]) {
                    var c = Pi[d],
                        e = c && c[0] && c[0][0] || c[1] && c[1][0];
                    if (e && "0" != e && (b.wc[e] || b.wnc[e]))
                        for (var f = Oi[d][1], g = 0; g < f.length; g++)
                            if (a.resolvedTags[f[g]]) return !0
                }
            return !1
        },
        Aa = function(a, b, d, c, e) {
            var f, g, h = !1;
            switch (a) {
                case "CLICK":
                    if (M.gtmHasClickListenerTag) return;
                    M.gtmHasClickListenerTag = !0;
                    f = "click";
                    g = function(a) {
                        var b = xa(a);
                        b && ma("CLICK", b, {}, c)
                    };
                    h = !0;
                    break;
                case "LINK_CLICK":
                    b && !Gi && (Gi = $f(M.location));
                    Ni(Hi, b || !1, d || !1, c, e);
                    if (M.gtmHasLinkClickListenerTag) return;
                    M.gtmHasLinkClickListenerTag = !0;
                    f = "click";
                    g = Ji(a, b || !1);
                    break;
                case "FORM_SUBMIT":
                    Ni(ka, b || !1, d || !1, c, e);
                    if (M.gtmHasFormSubmitListenerTag) return;
                    M.gtmHasFormSubmitListenerTag = !0;
                    f = "submit";
                    g = Ji(a, b || !1);
                    break;
                default:
                    return
            }
            Q(M, f, g, h)
        },
        Ii = function(a) {
            if (!Gi) return !0;
            var b = a.indexOf("#");
            if (0 > b) return !1;
            if (0 == b) return !0;
            var d = ba(a);
            return Gi == $f(d)
        },
        pa = function(a) {
            try {
                if (a.constructor && a.constructor.prototype) return a.constructor.prototype.submit
            } catch (b) {}
            if (a.gtmReplacedFormSubmit) return a.gtmReplacedFormSubmit;
            M.gtmFormElementSubmitter || (M.gtmFormElementSubmitter = M.createElement("form"));
            return M.gtmFormElementSubmitter.submit.call ? M.gtmFormElementSubmitter.submit : a.submit
        };
    var Qa = function(a, b) {
        var d = b || hb,
            c = d.onerror,
            e = !1;
        Bh && !Jh("535.3") && (e = !e);
        d.onerror = function(b, d, h, k, l) {
            c && c(b, d, h, k, l);
            a({
                message: b,
                fileName: d,
                Ta: h,
                Zb: k,
                error: l
            });
            return e
        }
    };
    var Mj = 42,
        Nj = [],
        Oj = [],
        Pj = [],
        Qj = new Ef,
        Rj = [],
        Z = [],
        Oi = [],
        Pi = [],
        Sj = function() {
            this.L = []
        };
    Sj.prototype.set = function(a, b) {
        this.L.push([a, b]);
        return this
    };
    Sj.prototype.resolve = function(a, b) {
        for (var d = {}, c = 0; c < this.L.length; c++) {
            var e = Tj(this.L[c][0], a, b),
                f = Tj(this.L[c][1], a, b);
            d[e] = f
        }
        return d
    };
    var Uj = function(a) {
        this.index = a
    };
    Uj.prototype.resolve = function(a, b) {
        var d = Pj[this.index];
        if (d && !b(d)) {
            var c = d[pd];
            if (a) {
                if (a.get(c)) return;
                a.set(c, !0)
            }
            d = Tj(d, a, b);
            a && a.set(c, !1);
            return Ff(d)
        }
    };
    var _M = function(a) {
            return new Uj(a)
        },
        Vj = function(a) {
            this.resolve = function(b, d) {
                for (var c = [], e = !1, f = 0; f < a.length; f++) {
                    var g = Tj(Nj[a[f]], b, d);
                    g === La && (e = !0);
                    c.push(g)
                }
                return e ? new Wa(c) : c.join("")
            }
        },
        _T = function(a) {
            return new Vj(arguments)
        },
        Wj = function(a) {
            function b(b) {
                for (var c = 1; c < a.length; c++)
                    if (a[c] == b) return !0;
                return !1
            }
            this.resolve =
                function(d, c) {
                    var e = Tj(a[0], d, c);
                    if (a[0] instanceof Uj && b(8) && b(16)) {
                        if (e === La) return e;
                        var f = Ma();
                        Qj.set(f, e);
                        return 'google_tag_manager["GTM-TB322GZ"].macro(\'' + f + "')"
                    }
                    for (var e = String(e), g = 1; g < a.length; g++) e = Y[a[g]](e);
                    return e
                }
        },
        _E = function(a, b) {
            return new Wj(arguments)
        },
        Xj = function(a, b) {
            this.w = a;
            this.ra = b
        },
        _R = function(a, b) {
            return new Xj(a, b)
        },
        Tj = function(a, b, d) {
            var c = a;
            if (a instanceof Uj || a instanceof Sj || a instanceof Vj || a instanceof Wj) return a.resolve(b, d);
            if (!(a instanceof Xj))
                if (N(a))
                    for (var c = [], e = 0; e < a.length; e++) c[e] = Tj(a[e], b, d);
                else if (a && "object" == typeof a) {
                var c = {},
                    f;
                for (f in a) a.hasOwnProperty(f) && (c[f] = Tj(a[f], b, d))
            }
            return c
        },
        Yj = function(a, b) {
            var d = b[a],
                c = d;
            if (d instanceof Uj || d instanceof Wj || d instanceof Vj || d instanceof Xj) c = d;
            else if (N(d))
                for (var c = [], e = 0; e < d.length; e++) c[e] = Yj(d[e], b);
            else if ("object" == typeof d) {
                var c = new Sj,
                    f;
                for (f in d) d.hasOwnProperty(f) && c.set(b[f], Yj(d[f], b))
            }
            return c
        },
        ak = function(a, b) {
            for (var d = b ? b.split(",") : [], c = 0; c < d.length; c++) {
                var e = d[c] = d[c].split(":");
                0 == a && (e[1] = Nj[e[1]]);
                if (1 == a)
                    for (var f = Zj(e[0]), e = d[c] = {}, g = 0; g < f.length; g++) {
                        var h = Oj[f[g]];
                        e[h[0]] = h[1]
                    }
                if (2 == a)
                    for (g = 0; 4 > g; g++) e[g] = Zj(e[g]);
                3 == a && (d[c] = Nj[e[0]]);
                if (4 == a)
                    for (g = 0; 2 > g; g++)
                        if (e[g]) {
                            e[g] = e[g].split(".");
                            for (var k = 0; k < e[g].length; k++) e[g][k] = Nj[e[g][k]]
                        } else e[g] = [];
                5 == a && (d[c] = e[0])
            }
            return d
        },
        Zj = function(a) {
            var b = [];
            if (!a) return b;
            for (var d = 0, c = 0; c < a.length && d < Mj; d += 6, c++) {
                var e = a && a.charCodeAt(c) || 65;
                if (65 != e) {
                    var f;
                    f = 65 < e && 90 >= e ? e - 65 : 97 <= e && 122 >= e ? e - 97 + 26 : 95 == e ? 63 : 48 <= e ? e - 48 + 52 :
                        62;
                    1 & f && b.push(d);
                    2 & f && b.push(d + 1);
                    4 & f && b.push(d + 2);
                    8 & f && b.push(d + 3);
                    16 & f && b.push(d + 4);
                    32 & f && b.push(d + 5)
                }
            }
            return b
        },
        bk = function(a, b, d) {
            a.push.apply(a, ak(b, d))
        };
    var pg = function() {},
        jk = function(a) {},
        sg = function() {},
        kk = function(a) {},
        lk = function(a, b) {},
        mk = function(a, b) {},
        qg = function(a) {};
    var nk, ok;
    var yk = function(a) {
            return function() {}
        },
        zk = function(a) {
            return function() {}
        };
    var Ak = function(a) {
            var b = this;
            this.g = a;
            this.complete = this.Xa = !1;
            this.qa = [];
            this.la = [];
            this.S = function() {
                if (b.s && b.s.event) {
                    var d = b.s.event,
                        c = b.g;
                }
                b.complete || Jf(b.qa);
                Nf(b, 1);
                if (ob[a])
                    for (var e = 0; e < ob[a].length; e++) ob[a].shift().S()
            };
            this.R = function() {
                if (b.s && b.s.event) {
                    var d = b.s.event,
                        c = b.g;
                }
                b.complete ||
                    Jf(b.la);
                Nf(b, 2);
                if (ob[a])
                    for (var e = 0; e < ob[a].length; e++) ob[a].shift().R()
            };
            this.B = Ya
        },
        Bk = function(a, b) {
            a.qa.push(b)
        },
        Ck = function(a, b) {
            a.la.push(b)
        },
        Dk = function(a) {
            this.M = [];
            this.Ga = [];
            this.Pa = {};
            this.ya = [];
            this.Y = 0;
            this.Wa = {};
            this.Ya = {};
            this.Ha = {};
            this.event = a
        };
    Dk.prototype.addListener = function(a) {
        this.ya.push(a)
    };
    var Ek = function(a, b, d, c, e, f) {
            if (!d.complete) {
                a.M[b] = d;
                void 0 == c && (c = []);
                void 0 == e && (e = []);
                void 0 == f && (f = []);
                c = N(c) ? c.slice() : ["or", c];
                e = N(e) ? e.slice() : [e];
                f = N(f) ? f.slice() : [f];
                a.Pa[b] = c;
                a.Wa[b] = 0 < e.length;
                a.Ya[b] = 0 < f.length;
                a.Y++;
                var g = function() {
                    0 < a.Y && a.Y--;
                    0 < a.Y || Jf(a.ya)
                };
                Bk(d, g);
                Ck(d, g)
            }
        },
        Fk = function(a, b, d) {
            a.M[b] && (Bk(a.M[b], function() {
                d(b, !0)
            }), Ck(a.M[b], function() {
                d(b, !1)
            }))
        },
        Gk = function(a, b) {
            var d = Ya,
                c = !1;
            return function(e, f) {
                var g;
                a: {
                    for (var h = 0; h < a.length; h++)
                        if (a[h] instanceof Xj && a[h].w ===
                            e || a[h] === e) {
                            g = h;
                            break a
                        }
                    g = -1
                }
                c || 0 > g || ("or" == a[0] ? f ? (c = !0, b()) : (a.splice(g, 1), 1 == a.length && (c = !0, d())) : f ? (a.splice(g, 1), 1 == a.length && (c = !0, b())) : (c = !0, d()))
            }
        },
        Kk = function(a, b) {
            var d = [],
                c = !1,
                e = function(b) {
                    var f, g, h = Z[b];
                    if (a.event.c(h)) {} else g = Hk(h, b, a);
                    if (f = g) {
                        var k = Ik(b, !0);
                        0 < k.length && e(k[0].w);
                        d.push(f);
                        var l = Ik(b, !1);
                        0 < l.length && e(l[0].w)
                    } else c = !0
                };
            e(b);
            if (!c) {
                for (var f = 0; f < d.length; f++) {
                    var g = d[f],
                        h = Ik(g.g, !0);
                    if (0 < h.length) {
                        var k = d[f - 1],
                            l = Jk(g);
                        Bk(k, l);
                        0 == h[0].ra && Ck(k, l)
                    }
                    var m = Ik(g.g, !1);
                    0 < m.length && (l = Jk(d[f + 1]), Bk(g, l), 0 == m[0].ra && Ck(g, l))
                }
                a.Ga.push(d)
            }
        },
        Ik = function(a, b) {
            var d = b ? ye : Pe,
                c = Z[a],
                e = void 0 === c[d] ? [] : c[d];
            return N(e) ? e : [e]
        },
        Jk = function(a) {
            return function() {
                a.B()
            }
        },
        Mk = function(a) {
            for (var b = {}, d = 0; d < a.length; d++) {
                var c = a[d],
                    e = [],
                    f = function(a) {
                        var b = Ik(a, !0);
                        0 < b.length && f(b[0].w);
                        e.push(a);
                        var c = Ik(a, !1);
                        0 < c.length && f(c[0].w)
                    };
                f(c.g);
                b[c.g] = e
            }
            Lk(a, b);
            return b
        },
        Lk = function(a, b) {
            for (var d = 0; d < a.length; d++) {
                var c = a[d].g,
                    e;
                for (e in b)
                    if (b.hasOwnProperty(e) && e != c && -1 < Cf(b[e], c)) {
                        delete b[c];
                        break
                    }
            }
        };
    var Ok = function(a, b) {
            return function() {
                a[fd] = b.S;
                a[gd] = b.R;
                var d = b.g,
                    c = b.s && b.s.Ha[d],
                    e = nb[d] && nb[d].state,
                    f = c ? void 0 !== c : b.Xa || b.$b,
                    g = nb[d] && nb[d].firingOption,
                    h = g && 2 == g,
                    k = g && 1 == g;
                if (!f && void 0 === e || !f && !h || !h && !k) {
                    Nf(b, 0);
                    var l = b.s ? b.s.event : void 0;
                    a = Nk(a, l ? l.c : zg());
                    if (l) {
                        var m = a;
                        lk(l, d)
                    }
                    Ff(a, b.S, b.R)
                } else h && 0 == e || k && 0 == c ? ob[d].push(b) : h && 1 == e || k && 1 == c ? b.S() : b.R()
            }
        },
        Nk = function(a, b) {
            a = Tj(a, new Ef, b);
            return a
        },
        Hk = function(a, b, d) {
            var c = new Ak(b);
            c.s = d;
            Bk(c, yk(a));
            Ck(c, zk(a));
            c.B = Ok(a, c);
            return c
        };
    var _sp = function(a, b, d) {
        r("//www.googleadservices.com/pagead/conversion_async.js", function() {
            var c = v.google_trackConversion;
            R(c) ? c({
                google_conversion_id: a[kd],
                google_conversion_label: a[wd],
                google_custom_params: a[qc] || {},
                google_remarketing_only: !0,
                onload_callback: b
            }) || d() : d()
        }, d)
    };
    _sp.a = "sp";
    _sp.b = ["google"];
    var Sk = !1,
        _ua = function(a, b, d) {
            function c(a) {
                var b = [].slice.call(arguments, 0);
                b[0] = n + b[0];
                v[l()].apply(window, b)
            }

            function e(b, d) {
                void 0 !== a[d] && c("set", b, a[d])
            }

            function f(a, b) {
                return void 0 === b ? b : a(b)
            }

            function g(a, b) {
                if (b)
                    for (var d in b) b.hasOwnProperty(d) && c("set", a + d, b[d])
            }

            function h() {
                var b = function(a, b, d) {
                        if (!Na(b)) return !1;
                        for (var e = Pa(Object(b), d, []), f = 0; e && f < e.length; f++) c(a, e[f]);
                        return !!e && 0 < e.length
                    },
                    d;
                a[Jc] ? d = S("ecommerce") :
                    a[Ic] && (d = a[Ic].ecommerce);
                if (!Na(d)) return;
                d = Object(d);
                var e = Pa(a[ad], "currencyCode", d.currencyCode);
                void 0 !== e && c("set", "&cu", e);
                b("ec:addImpression", d, "impressions");
                if (b("ec:addPromo", d[d.promoClick ? "promoClick" : "promoView"], "promotions") && d.promoClick) {
                    c("ec:setAction", "promo_click", d.promoClick.actionField);
                    return
                }
                for (var f = "detail checkout checkout_option click add remove purchase refund".split(" "), g = 0; g < f.length; g++) {
                    var h = d[f[g]];
                    if (h) {
                        b("ec:addProduct", h, "products");
                        c("ec:setAction", f[g],
                            h.actionField);
                        break
                    }
                }
            }

            function k(a, b, c) {
                var d = 0;
                if (void 0 !== a)
                    for (var e in a)
                        if (a.hasOwnProperty(e) && (c && y[e] || !c && void 0 === y[e])) {
                            var f = t[e] ? Ia(a[e]) : a[e];
                            "anonymizeIp" != e || f || (f = void 0);
                            b[e] = f;
                            d++
                        }
                return d
            }
            bb("GoogleAnalyticsObject", a[Pd] || "ga");
            var l = function() {
                    return v.GoogleAnalyticsObject
                },
                m = bb(l(), function() {
                    var a = v[l()];
                    a.q = a.q || [];
                    a.q.push(arguments)
                });
            m.l = Number(J());
            var n = "",
                q = "";
            "string" != typeof a[bf] ? (q = Ma(), n = q + ".") : "" !==
                a[bf] && (q = a[bf], n = q + ".");
            var w = !1;
            var x = {
                name: q
            };
            m("create", a[qb], x);
            c("set", "&gtm", "GTM-TB322GZ");
            var B;
            a[Ed] && c("require", "linkid", "linkid.js");
            c("set", "hitCallback", function() {
                if (R(a[hd])) a[hd]();
                else {
                    var c = a[ad],
                        d = c && c.hitCallback;
                    R(d) && d()
                }
                b()
            });
            if (a[Ye]) {} else if (a[Ze]) {} else if (a[af]) {} else if (a[$e]) {} else if (a[yc]) {} else if (a[wc]) {} else if (a[Xe]) {} else {
                a[Qc] && (c("require", "ec", "ec.js"), h());
                if (a[Hc] && !a[Sc]) {
                    var K = "_dc_gtm_" + String(a[qb]).replace(/[^A-Za-z0-9-]/g, "");
                    c("require", "displayfeatures", void 0, {
                        cookieName: K
                    })
                }
                B ? c("send", "pageview", B) : c("send", "pageview");
            }
            if (!Sk) {
                var U = a[uc] ? "u/analytics_debug.js" : "analytics.js";
                a[qd] && !a[uc] && (U = "internal/" + U);
                Sk = !0;
                r(L("https:", "http:", "//www.google-analytics.com/" + U, w), function() {
                    v[l()].loaded || d()
                }, d)
            }
        };
    _ua.a = "ua";
    _ua.b = ["google"];
    var Tk = function() {
            var a = [];
            return function(b, d) {
                if (void 0 === a[b]) {
                    var c = Rj[b] && Tj(Rj[b], new Ef, d),
                        e = c;
                    if (c)
                        if (c[Ab] && N(c[T]))
                            for (var f = c[T], e = !1, g = 0; !e && g < f.length; g++) c[T] = f[g], e = Ff(c);
                        else e = Ff(c);
                    a[b] = [e, c]
                }
                return a[b]
            }
        },
        ik = function(a, b) {
            for (var d = b[0], c = 0; c < d.length; c++)
                if (!a.P(d[c], a.c)[0]) return !1;
            for (var e = b[2], c = 0; c < e.length; c++)
                if (a.P(e[c], a.c)[0]) return !1;
            return !0
        },
        Uk = !1,
        kg = function(a, b, d, c) {
            switch (b) {
                case "gtm.js":
                    if (Uk) return !1;
                    Uk = !0;
                    break;
                case "gtm.sync":
                    if (S("gtm.snippet") != lb) return !1
            }
            S("tagTypeBlacklist");
            for (var e = {
                    id: a,
                    name: b,
                    ha: d || Ya,
                    fa: Zj(),
                    pa: Zj(),
                    P: Tk(),
                    c: zg()
                }, f = [], g = 0; g < Oi.length; g++)
                if (ik(e, Oi[g])) {
                    f[g] = !0;
                    for (var h = e, k = Oi[g], l = k[1], m = 0; m < l.length; m++) h.fa[l[m]] = !0;
                    for (var n = k[3], m = 0; m < n.length; m++) h.pa[n[m]] = !0
                } else f[g] = !1;
            lk(e);
            var w = [];
            for (var y = 0; y < Mj; y++)
                if (e.fa[y] && !e.pa[y])
                    if (e.c(Z[y])) {} else {
                        w[y] = Z[y];
                    }
            e.T = w;
            for (var t = new Dk(e), x = 0; x < Mj; x++)
                if (e.fa[x] && !e.pa[x])
                    if (e.c(Z[x])) {} else {
                        var F = e.T[x],
                            B = Hk(F, x, t);
                        Ek(t, x, B, F[Bc], F[ye], F[Pe]);
                        if (F[pb]) break
                    }
            t.addListener(e.ha);
            for (var A = [],
                    E = 0; E < t.M.length; E++) {
                var H = t.M[E];
                if (H) {
                    var D = t.Pa[E],
                        C = t.Wa[E],
                        I = t.Ya[E];
                    if (0 != D.length || C || I) {
                        if (0 < D.length)
                            for (var P = Gk(D, H.B), K = 0; K < D.length; K++) D[K] instanceof Xj && D[K].w != E && Fk(t, D[K].w, P);
                        (C || I) && Kk(t, E)
                    } else A.push(E)
                }
            }
            for (E = 0; E < A.length; E++) t.M[A[E]].B();
            for (E = 0; E < t.Ga.length; E++) {
                for (var oa = t.Ga[E], U = void 0, V = oa, qa = [], wb = 0; wb < V.length; wb++) {
                    var gb = V[wb],
                        Wb = gb.g,
                        Kf = nb[Wb],
                        xd = Kf.firingOption;
                    0 != xd && (1 == xd && void 0 !== gb.s.Ha[Wb] || 2 == xd && void 0 !== Kf.state) && qa.push(gb)
                }
                var yd = Mk(qa);
                for (U in yd)
                    if (yd.hasOwnProperty(U)) {
                        for (var zd =
                                void 0, Of = void 0, Fc = yd[U], hl = Fc[0], pj = Fc[Fc.length - 1], qj, Oa = 0; Oa < V.length; Oa++) {
                            var sd = V[Oa];
                            !zd && sd.g == hl && 0 < Oa && (zd = V[Oa - 1]);
                            sd.g == pj && Oa < V.length - 1 && (Of = V[Oa + 1]);
                            if (-1 < Cf(Fc, sd.g))
                                if (qj = V.splice(Oa, 1)[0], sd.g == pj) break;
                                else Oa--
                        }
                        if (qj) {
                            var rj = Number(U),
                                ta = zd,
                                xf = Of;
                            if (ta) {
                                var il = ta.qa[0],
                                    jl = ta.la[0],
                                    sj = ta;
                                sj.qa = [];
                                sj.la = [];
                                Bk(ta, il);
                                Ck(ta, jl)
                            }
                            if (ta && xf) {
                                var yf = Jk(xf);
                                Bk(ta, yf);
                                var zf = Ik(ta.g, !1);
                                0 < zf.length && zf[0].w != rj && 0 == zf[0].ra && Ck(ta, yf);
                                var Af = Ik(xf.g, !0);
                                0 < Af.length && Af[0].w != rj && 0 == Af[0].ra &&
                                    Ck(ta, yf)
                            }
                        }
                    }
                0 < oa.length && oa[0].B()
            }
            0 < t.Y || Jf(t.ya);
            c && R(c) && c({
                passingRules: f,
                resolvedTags: e.T
            });
            if ("gtm.js" == b || "gtm.sync" == b) a: {}
            for (var vj in e.T)
                if (e.T.hasOwnProperty(vj)) {
                    var wj = e.T[vj],
                        Bf;
                    if (!(Bf = void 0 == wj[pd])) {
                        var xj = wj[pd];
                        Bf = !("function" != typeof String.prototype.startsWith ? 0 === xj.indexOf("_implicit") : xj.startsWith("_implicit"))
                    }
                    if (Bf) return !0
                }
            return !1
        };
    var Vk = {
        macro: function(a) {
            if (Qj.contains(a)) return Qj.get(a)
        }
    };
    Vk.dataLayer = dg;
    Vk.onHtmlSuccess = lh(!0);
    Vk.onHtmlFailure = lh(!1);
    Vk.callback = function(a) {
        db.hasOwnProperty(a) && R(db[a]) && db[a]();
        delete db[a]
    };
    Vk.kb = function() {
        var a = v.google_tag_manager;
        a || (a = v.google_tag_manager = {});
        a["GTM-TB322GZ"] || (a["GTM-TB322GZ"] = Vk);
        Sa = a
    };
    (function() {
        var a = function(a) {
            var b = bb("google_tag_manager", {}),
                c = b[a];
            c || (c = b[a] = {}, c.nwnc = {}, c.nwc = {}, c.wnc = {}, c.wc = {}, c.wt = null, c.l = !1);
            return c
        };
        Hi = a("linkClickMap");
        ka = a("formSubmitMap")
    })();
    Nj.push.apply(Nj, function() {
        for (var a = [_eq, _e, '_event', _M(0), 'gtm.js', '6041668_2147479553', _sp, true, '866376821', '', 2, _ua, 'UA-70072834-1', false, '\x26tid', {
                14: 12
            }, 3, _u, 'Page URL', _M(1), 'http://cappen.com/about/#contato', '6041668_9', __awct, '1', 'SKgtCJfv-GwQ9biPnQM', '_url', _M(2), 4, _html, '\n\x3cscript type\x3d\x22text/gtmscript\x22\x3e!function(b,e,f,g,a,c,d){b.fbq||(a\x3db.fbq\x3dfunction(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq\x3da),a.push\x3da,a.loaded\x3d!0,a.version\x3d\x222.0\x22,a.queue\x3d[],c\x3de.createElement(f),c.async\x3d!0,c.src\x3dg,d\x3de.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\x22script\x22,\x22https://connect.facebook.net/en_US/fbevents.js\x22);fbq(\x22init\x22,\x221700608386854503\x22);fbq(\x22track\x22,\x22PageView\x22);\x3c/script\x3e\n\x3cnoscript\x3e\x3cimg height\x3d\x221\x22 width\x3d\x221\x22 style\x3d\x22display:none\x22 src\x3d\x22https://www.facebook.com/tr?id\x3d1700608386854503\x26amp;ev\x3dPageView\x26amp;noscript\x3d1\x22\x3e\x3c/noscript\x3e\n\n', 1, 'Page Hostname', 'host', 'Page Path', 'path', _f, 'Referrer', 'Event'], b = [], d = 0; d < a.length; d++) b[d] = Yj(d, a);
        return b
    }());
    bk(Oj, 0, "11:0,11:1,14:2,2:3,3:4,11:6,16:7,13:8,5:9,17:10,11:11,0:12,10:13,9:13,18:13,6:13,7:13,1:15,15:13,8:13,17:16,11:17,14:18,2:19,3:20,11:22,19:23,20:8,21:24,14:25,22:26,17:27,11:28,12:29,17:30,14:31,4:32,14:33,4:34,11:35,14:36,14:37");
    bk(Pj, 1, "G,AAAY,AAAIg,AAAIAgB,AAAIAAG,AAAAAAY,CAAAAAg");
    bk(Rj, 1, "Z,BAAgB");
    bk(Z, 1, "gP,Ax_H,ABAAeD,ABAAAc");
    bk(Oi, 2, "B:L::,D:E::");
    bk(Pi, 4, "5.5.5:,21:");
    for (var Wk = 0; Wk < Z.length; Wk++) {
        var Xk = Z[Wk],
            Yk = 1;
        Xk[Wd] ? Yk = 2 : Xk[gf] && (Yk = 0);
        nb[Wk] = {
            firingOption: Yk,
            state: void 0
        };
        ob[Wk] = []
    }
    Vk.kb();
    (function(a) {})("async");
    (function() {
        var a = bb("dataLayer", []),
            b = bb("google_tag_manager", {}),
            b = b["dataLayer"] = b["dataLayer"] || {};
        Va.push(function() {
            b.gtmDom || (b.gtmDom = !0, a.push({
                event: "gtm.dom"
            }))
        });
        Xf.push(function() {
            b.gtmLoad || (b.gtmLoad = !0, a.push({
                event: "gtm.load"
            }))
        });
        var d = a.push;
        a.push = function() {
            var b = [].slice.call(arguments, 0);
            d.apply(a, b);
            for (lg.push.apply(lg, b); 300 < this.length;) this.shift();
            return tg()
        };
        lg.push.apply(lg, a.slice(0));
        z(ug)
    })();
    var fl = v;
    if ("interactive" == M.readyState && !M.createEventObject || "complete" == M.readyState) Tf();
    else {
        Q(M, "DOMContentLoaded", Tf);
        Q(M, "readystatechange", Tf);
        if (M.createEventObject && M.documentElement.doScroll) {
            var gl = !0;
            try {
                gl = !fl.frameElement
            } catch (a) {}
            gl && Vf()
        }
        Q(fl, "load", Tf)
    }
    "complete" === M.readyState ? Yf() : Q(v, "load", Yf);
    (function(a) {})("async");
    (function() {})();
    var _vs = "res_ts:1482433809887000,srv_cl:146675502,ds:live,cv:5";
})()
