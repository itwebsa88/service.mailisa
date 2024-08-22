!(function (p) {
    "use strict";
    function i() {
        this.v = "2.8.4";
    }
    function h(e, t) {
        (t = t || "log"), p.console && console[t] && console[t]("layui error hint: " + e);
    }
    var e,
        y = p.document,
        m = { modules: {}, status: {}, timeout: 10, event: {} },
        t = p.LAYUI_GLOBAL || {},
        g =
            ((e = y.currentScript
                ? y.currentScript.src
                : (function () {
                      for (var e, t = y.scripts, n = t.length - 1, i = n; 0 < i; i--)
                          if ("interactive" === t[i].readyState) {
                              e = t[i].src;
                              break;
                          }
                      return e || t[n].src;
                  })()),
            (m.dir = t.dir || e.substring(0, e.lastIndexOf("/") + 1))),
        v = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        x = (m.builtin = {
            lay: "lay",
            layer: "layer",
            laydate: "laydate",
            laypage: "laypage",
            laytpl: "laytpl",
            form: "form",
            upload: "upload",
            dropdown: "dropdown",
            transfer: "transfer",
            tree: "tree",
            table: "table",
            treeTable: "treeTable",
            element: "element",
            rate: "rate",
            colorpicker: "colorpicker",
            slider: "slider",
            carousel: "carousel",
            flow: "flow",
            util: "util",
            code: "code",
            jquery: "jquery",
            all: "all",
            "layui.all": "layui.all",
        }),
        c =
            ((i.prototype.cache = m),
            (i.prototype.define = function (e, i) {
                return (
                    "function" == typeof e && ((i = e), (e = [])),
                    this.use(
                        e,
                        function () {
                            function n(e, t) {
                                (layui[e] = t), (m.status[e] = !0);
                            }
                            return (
                                "function" == typeof i &&
                                    i(function (e, t) {
                                        n(e, t),
                                            (m.callback[e] = function () {
                                                i(n);
                                            });
                                    }),
                                this
                            );
                        },
                        null,
                        "define"
                    ),
                    this
                );
            }),
            (i.prototype.use = function (n, e, t, i) {
                var a = this,
                    o = (m.dir = m.dir || g),
                    r = y.getElementsByTagName("head")[0],
                    l =
                        ((n = "string" == typeof n ? [n] : "function" == typeof n ? ((e = n), ["all"]) : n),
                        p.jQuery &&
                            jQuery.fn.on &&
                            (a.each(n, function (e, t) {
                                "jquery" === t && n.splice(e, 1);
                            }),
                            (layui.jquery = layui.$ = jQuery)),
                        n[0]),
                    s = 0;
                function c(e, t) {
                    var n = "PLaySTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/;
                    ("load" !== e.type && !n.test((e.currentTarget || e.srcElement).readyState)) ||
                        ((m.modules[l] = t),
                        r.removeChild(u),
                        (function e() {
                            return ++s > (1e3 * m.timeout) / 4 ? h(l + " is not a valid module", "error") : void (m.status[l] ? d() : setTimeout(e, 4));
                        })());
                }
                function d() {
                    t.push(layui[l]),
                        1 < n.length
                            ? a.use(n.slice(1), e, t, i)
                            : "function" == typeof e &&
                              (layui.jquery && "function" == typeof layui.jquery && "define" !== i
                                  ? layui.jquery(function () {
                                        e.apply(layui, t);
                                    })
                                  : e.apply(layui, t));
                }
                if (((t = t || []), (m.host = m.host || (o.match(/\/\/([\s\S]+?)\//) || ["//" + location.host + "/"])[0]), 0 === n.length || (layui["layui.all"] && x[l]))) return d(), a;
                var u,
                    f = (f = (x[l] ? o + "modules/" : (!/^\{\/\}/.test(a.modules[l]) && m.base) || "") + (a.modules[l] || l) + ".js").replace(/^\{\/\}/, "");
                return (
                    !m.modules[l] && layui[l] && (m.modules[l] = f),
                    m.modules[l]
                        ? (function e() {
                              return ++s > (1e3 * m.timeout) / 4 ? h(l + " is not a valid module", "error") : void ("string" == typeof m.modules[l] && m.status[l] ? d() : setTimeout(e, 4));
                          })()
                        : (((u = y.createElement("script")).async = !0),
                          (u.charset = "utf-8"),
                          (u.src = f + ((o = !0 === m.version ? m.v || new Date().getTime() : m.version || "") ? "?v=" + o : "")),
                          r.appendChild(u),
                          !u.attachEvent || (u.attachEvent.toString && u.attachEvent.toString().indexOf("[native code") < 0) || v
                              ? u.addEventListener(
                                    "load",
                                    function (e) {
                                        c(e, f);
                                    },
                                    !1
                                )
                              : u.attachEvent("onreadystatechange", function (e) {
                                    c(e, f);
                                }),
                          (m.modules[l] = f)),
                    a
                );
            }),
            (i.prototype.disuse = function (e) {
                var n = this;
                return (
                    (e = n.isArray(e) ? e : [e]),
                    n.each(e, function (e, t) {
                        m.status[t], delete n[t], delete x[t], delete n.modules[t], delete m.status[t], delete m.modules[t];
                    }),
                    n
                );
            }),
            (i.prototype.getStyle = function (e, t) {
                return (e = e.currentStyle || p.getComputedStyle(e, null))[e.getPropertyValue ? "getPropertyValue" : "getAttribute"](t);
            }),
            (i.prototype.link = function (i, a, e) {
                var o = this,
                    t = y.getElementsByTagName("head")[0],
                    n = y.createElement("link"),
                    r = "layuicss-" + ((e = "string" == typeof a ? a : e) || i).replace(/\.|\//g, ""),
                    l = "creating",
                    s = 0;
                return (
                    (n.href = i + (m.debug ? "?v=" + new Date().getTime() : "")),
                    (n.rel = "stylesheet"),
                    (n.id = r),
                    (n.media = "all"),
                    y.getElementById(r) || t.appendChild(n),
                    "function" == typeof a &&
                        (function e(t) {
                            var n = y.getElementById(r);
                            return ++s > (1e3 * m.timeout) / 100
                                ? h(i + " timeout")
                                : void (1989 === parseInt(o.getStyle(n, "width"))
                                      ? (t === l && n.removeAttribute("lay-status"), n.getAttribute("lay-status") === l ? setTimeout(e, 100) : a())
                                      : (n.setAttribute("lay-status", l),
                                        setTimeout(function () {
                                            e(l);
                                        }, 100)));
                        })(),
                    o
                );
            }),
            (i.prototype.addcss = function (e, t, n) {
                return layui.link(m.dir + "css/" + e, t, n);
            }),
            (m.callback = {}),
            (i.prototype.factory = function (e) {
                if (layui[e]) return "function" == typeof m.callback[e] ? m.callback[e] : null;
            }),
            (i.prototype.img = function (e, t, n) {
                var i = new Image();
                if (((i.src = e), i.complete)) return t(i);
                (i.onload = function () {
                    (i.onload = null), "function" == typeof t && t(i);
                }),
                    (i.onerror = function (e) {
                        (i.onerror = null), "function" == typeof n && n(e);
                    });
            }),
            (i.prototype.config = function (e) {
                for (var t in (e = e || {})) m[t] = e[t];
                return this;
            }),
            (i.prototype.modules = (function () {
                var e,
                    t = {};
                for (e in x) t[e] = x[e];
                return t;
            })()),
            (i.prototype.extend = function (e) {
                for (var t in (e = e || {})) this[t] || this.modules[t] ? h(t + " Module already exists", "error") : (this.modules[t] = e[t]);
                return this;
            }),
            (i.prototype.router = i.prototype.hash = function (e) {
                var n = { path: [], search: {}, hash: ((e = e || location.hash).match(/[^#](#.*$)/) || [])[1] || "" };
                return (
                    /^#\//.test(e) &&
                        ((e = e.replace(/^#\//, "")),
                        (n.href = "/" + e),
                        (e = e.replace(/([^#])(#.*$)/, "$1").split("/") || []),
                        this.each(e, function (e, t) {
                            /^\w+=/.test(t) ? ((t = t.split("=")), (n.search[t[0]] = t[1])) : n.path.push(t);
                        })),
                    n
                );
            }),
            (i.prototype.url = function (e) {
                var a, t;
                return {
                    pathname: (e ? ((e.match(/\.[^.]+?\/.+/) || [])[0] || "").replace(/^[^\/]+/, "").replace(/\?.+/, "") : location.pathname).replace(/^\//, "").split("/"),
                    search:
                        ((a = {}),
                        (t = (e ? ((e.match(/\?.+/) || [])[0] || "").replace(/\#.+/, "") : location.search).replace(/^\?+/, "").split("&")),
                        this.each(t, function (e, t) {
                            var n = t.indexOf("="),
                                i = n < 0 ? t.substr(0, t.length) : 0 !== n && t.substr(0, n);
                            i && (a[i] = 0 < n ? t.substr(n + 1) : null);
                        }),
                        a),
                    hash: this.router(e ? (e.match(/#.+/) || [])[0] || "/" : location.hash),
                };
            }),
            (i.prototype.data = function (e, t, n) {
                if (((e = e || "layui"), (n = n || localStorage), p.JSON && p.JSON.parse)) {
                    if (null === t) return delete n[e];
                    t = "object" == typeof t ? t : { key: t };
                    try {
                        var i = JSON.parse(n[e]);
                    } catch (e) {
                        i = {};
                    }
                    return "value" in t && (i[t.key] = t.value), t.remove && delete i[t.key], (n[e] = JSON.stringify(i)), t.key ? i[t.key] : i;
                }
            }),
            (i.prototype.sessionData = function (e, t) {
                return this.data(e, t, sessionStorage);
            }),
            (i.prototype.device = function (e) {
                function t(e) {
                    return (e = new RegExp(e + "/([^\\s\\_\\-]+)")), (n.match(e) || [])[1] || !1;
                }
                var n = navigator.userAgent.toLowerCase(),
                    i = {
                        os: /windows/.test(n) ? "windows" : /linux/.test(n) ? "linux" : /iphone|ipod|ipad|ios/.test(n) ? "ios" : /mac/.test(n) ? "mac" : void 0,
                        ie: !!(p.ActiveXObject || "ActiveXObject" in p) && ((n.match(/msie\s(\d+)/) || [])[1] || "11"),
                        weixin: t("micromessenger"),
                    };
                return e && !i[e] && (i[e] = t(e)), (i.android = /android/.test(n)), (i.ios = "ios" === i.os), (i.mobile = !(!i.android && !i.ios)), i;
            }),
            (i.prototype.hint = function () {
                return { error: h };
            }),
            (i.prototype._typeof = i.prototype.type = function (e) {
                return null === e
                    ? String(e)
                    : "object" == typeof e || "function" == typeof e
                    ? ((t = (t = Object.prototype.toString.call(e).match(/\s(.+)\]$/) || [])[1] || "Object"), new RegExp("\\b(Function|Array|Date|RegExp|Object|Error|Symbol)\\b").test(t) ? t.toLowerCase() : "object")
                    : typeof e;
                var t;
            }),
            (i.prototype._isArray = i.prototype.isArray = function (e) {
                var t,
                    n = this.type(e);
                return !(!e || "object" != typeof e || e === p) && ((t = "length" in e && e.length), "array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
            }),
            (i.prototype.each = function (e, n) {
                function t(e, t) {
                    return n.call(t[e], e, t[e]);
                }
                if ("function" != typeof n) return this;
                if (this.isArray((e = e || []))) for (i = 0; i < e.length && !t(i, e); i++);
                else for (var i in e) if (t(i, e)) break;
                return this;
            }),
            (i.prototype.sort = function (e, a, t, n) {
                return (
                    (n = n ? e || [] : JSON.parse(JSON.stringify(e || []))),
                    "object" !== this.type(e) || a
                        ? "object" != typeof e
                            ? [n]
                            : (n.sort(function (e, t) {
                                  var n = e[a],
                                      i = t[a];
                                  if (!isNaN(e) && !isNaN(t)) return e - t;
                                  if (!isNaN(e) && isNaN(t)) {
                                      if (!a || "object" != typeof t) return -1;
                                      n = e;
                                  } else if (isNaN(e) && !isNaN(t)) {
                                      if (!a || "object" != typeof e) return 1;
                                      i = t;
                                  }
                                  return (e = [!isNaN(n), !isNaN(i)])[0] && e[1] ? (n && !i && 0 !== i ? 1 : !n && 0 !== n && i ? -1 : n - i) : e[0] || e[1] ? (e[0] || !e[1] ? -1 : !e[0] || e[1] ? 1 : void 0) : i < n ? 1 : n < i ? -1 : 0;
                              }),
                              t && n.reverse(),
                              n)
                        : n
                );
            }),
            (i.prototype.stope = function (t) {
                t = t || p.event;
                try {
                    t.stopPropagation();
                } catch (e) {
                    t.cancelBubble = !0;
                }
            }),
            "LAYUI-EVENT-REMOVE");
    (i.prototype.onevent = function (e, t, n) {
        return "string" != typeof e || "function" != typeof n ? this : i.event(e, t, null, n);
    }),
        (i.prototype.event = i.event = function (e, t, n, i) {
            function a(e, t) {
                !1 === (t && t.call(o, n)) && null === r && (r = !1);
            }
            var o = this,
                r = null,
                l = (t || "").match(/\((.*)\)$/) || [],
                e = (e + "." + t).replace(l[0], ""),
                s = l[1] || "";
            return n === c
                ? (delete (o.cache.event[e] || {})[s], o)
                : i
                ? ((m.event[e] = m.event[e] || {}), s ? (m.event[e][s] = [i]) : ((m.event[e][s] = m.event[e][s] || []), m.event[e][s].push(i)), this)
                : (layui.each(m.event[e], function (e, t) {
                      "{*}" === s ? layui.each(t, a) : ("" === e && layui.each(t, a), s && e === s && layui.each(t, a));
                  }),
                  r);
        }),
        (i.prototype.on = function (e, t, n) {
            return this.onevent.call(this, t, e, n);
        }),
        (i.prototype.off = function (e, t) {
            return this.event.call(this, t, e, c);
        }),
        (i.prototype.debounce = function (n, i) {
            var a;
            return function () {
                var e = this,
                    t = arguments;
                clearTimeout(a),
                    (a = setTimeout(function () {
                        n.apply(e, t);
                    }, i));
            };
        }),
        (i.prototype.throttle = function (e, t) {
            var n = !1;
            return function () {
                n ||
                    (e.apply(this, arguments),
                    (n = !0),
                    setTimeout(function () {
                        n = !1;
                    }, t));
            };
        }),
        (p.layui = new i());
})(window),
    layui.define(function (e) {
        var t = layui.cache;
        layui.config({ dir: t.dir.replace(/lay\/dest\/$/, "") }), e("layui.all", layui.v);
    }),
    (function (d) {
        "use strict";
        function u(e) {
            return new a(e);
        }
        var e,
            f = d.document,
            a = function (e) {
                var n = this,
                    i = "object" == typeof e ? (layui.isArray(e) ? e : [e]) : ((this.selector = e), f.querySelectorAll(e || null));
                u.each(i, function (e, t) {
                    n.push(i[e]);
                });
            };
        (a.fn = a.prototype = []),
            (a.fn.constructor = a),
            (u.extend = function () {
                function i(e, t) {
                    for (var n in ((e = e || ("array" === layui.type(t) ? [] : {})), t)) e[n] = t[n] && t[n].constructor === Object ? i(e[n], t[n]) : t[n];
                    return e;
                }
                var e,
                    t = 1,
                    n = arguments;
                for (n[0] = "object" == typeof n[0] ? n[0] : {}, e = n.length; t < e; t++) "object" == typeof n[t] && i(n[0], n[t]);
                return n[0];
            }),
            (u.ie = ((e = navigator.userAgent.toLowerCase()), !!(d.ActiveXObject || "ActiveXObject" in d) && ((e.match(/msie\s(\d+)/) || [])[1] || "11"))),
            (u.layui = layui || {}),
            (u.getPath = layui.cache.dir),
            (u.stope = layui.stope),
            (u.each = function () {
                return layui.each.apply(layui, arguments), this;
            }),
            (u.digit = function (e, t) {
                if ("string" != typeof e && "number" != typeof e) return "";
                var n = "";
                t = t || 2;
                for (var i = (e = String(e)).length; i < t; i++) n += "0";
                return e < Math.pow(10, t) ? n + e : e;
            }),
            (u.elem = function (e, t) {
                var n = f.createElement(e);
                return (
                    u.each(t || {}, function (e, t) {
                        n.setAttribute(e, t);
                    }),
                    n
                );
            }),
            (u.hasScrollbar = function () {
                return f.body.scrollHeight > (d.innerHeight || f.documentElement.clientHeight);
            }),
            (u.position = function (e, t, n) {
                var i, a, o, r, l, s, c;
                t &&
                    ((n = n || {}),
                    (e !== f && e !== u("body")[0]) || (n.clickType = "right"),
                    (l = "right" === n.clickType ? { left: (l = n.e || d.event || {}).clientX, top: l.clientY, right: l.clientX, bottom: l.clientY } : e.getBoundingClientRect()),
                    (s = t.offsetWidth),
                    (c = t.offsetHeight),
                    (i = function (e) {
                        return f.body[(e = e ? "scrollLeft" : "scrollTop")] | f.documentElement[e];
                    }),
                    (o = l.left),
                    (r = l.bottom),
                    "center" === n.align ? (o -= (s - e.offsetWidth) / 2) : "right" === n.align && (o = o - s + e.offsetWidth),
                    (o =
                        o + s + 5 >
                        (a = function (e) {
                            return f.documentElement[e ? "clientWidth" : "clientHeight"];
                        })("width")
                            ? a("width") - s - 5
                            : o) < 5 && (o = 5),
                    r + c + 5 > a() && (l.top > c + 5 ? (r = l.top - c - 10) : "right" === n.clickType ? (r = a() - c - 10) < 0 && (r = 0) : (r = 5)),
                    (s = n.position) && (t.style.position = s),
                    (t.style.left = o + ("fixed" === s ? 0 : i(1)) + "px"),
                    (t.style.top = r + ("fixed" === s ? 0 : i()) + "px"),
                    u.hasScrollbar() ||
                        ((c = t.getBoundingClientRect()),
                        !n.SYSTEM_RELOAD &&
                            c.bottom + 5 > a() &&
                            ((n.SYSTEM_RELOAD = !0),
                            setTimeout(function () {
                                u.position(e, t, n);
                            }, 50))));
            }),
            (u.options = function (t, n) {
                if (((n = "object" == typeof n ? n : { attr: n }), t === f)) return {};
                var t = u(t),
                    i = n.attr || "lay-options",
                    t = t.attr(i);
                try {
                    return new Function("return " + (t || "{}"))();
                } catch (e) {
                    return layui.hint().error(n.errorText || [i + '="' + t + '"', "\n parseerror: " + e].join("\n"), "error"), {};
                }
            }),
            (u.isTopElem = function (n) {
                var e = [f, u("body")[0]],
                    i = !1;
                return (
                    u.each(e, function (e, t) {
                        if (t === n) return (i = !0);
                    }),
                    i
                );
            }),
            (a.addStr = function (n, e) {
                return (
                    (n = n.replace(/\s+/, " ")),
                    (e = e.replace(/\s+/, " ").split(" ")),
                    u.each(e, function (e, t) {
                        new RegExp("\\b" + t + "\\b").test(n) || (n = n + " " + t);
                    }),
                    n.replace(/^\s|\s$/, "")
                );
            }),
            (a.removeStr = function (n, e) {
                return (
                    (n = n.replace(/\s+/, " ")),
                    (e = e.replace(/\s+/, " ").split(" ")),
                    u.each(e, function (e, t) {
                        (t = new RegExp("\\b" + t + "\\b")).test(n) && (n = n.replace(t, ""));
                    }),
                    n.replace(/\s+/, " ").replace(/^\s|\s$/, "")
                );
            }),
            (a.fn.find = function (n) {
                var i = [],
                    a = "object" == typeof n;
                return (
                    this.each(function (e, t) {
                        (t = a && t.contains(n) ? n : t.querySelectorAll(n || null)),
                            u.each(t, function (e, t) {
                                i.push(t);
                            });
                    }),
                    u(i)
                );
            }),
            (a.fn.each = function (e) {
                return u.each.call(this, this, e);
            }),
            (a.fn.addClass = function (n, i) {
                return this.each(function (e, t) {
                    t.className = a[i ? "removeStr" : "addStr"](t.className, n);
                });
            }),
            (a.fn.removeClass = function (e) {
                return this.addClass(e, !0);
            }),
            (a.fn.hasClass = function (n) {
                var i = !1;
                return (
                    this.each(function (e, t) {
                        new RegExp("\\b" + n + "\\b").test(t.className) && (i = !0);
                    }),
                    i
                );
            }),
            (a.fn.css = function (t, i) {
                function a(e) {
                    return isNaN(e) ? e : e + "px";
                }
                return "string" != typeof t || void 0 !== i
                    ? this.each(function (e, n) {
                          "object" == typeof t
                              ? u.each(t, function (e, t) {
                                    n.style[e] = a(t);
                                })
                              : (n.style[t] = a(i));
                      })
                    : 0 < this.length
                    ? this[0].style[t]
                    : void 0;
            }),
            (a.fn.width = function (n) {
                var i = this;
                return void 0 !== n
                    ? i.each(function (e, t) {
                          i.css("width", n);
                      })
                    : 0 < i.length
                    ? i[0].offsetWidth
                    : void 0;
            }),
            (a.fn.height = function (n) {
                var i = this;
                return void 0 !== n
                    ? i.each(function (e, t) {
                          i.css("height", n);
                      })
                    : 0 < i.length
                    ? i[0].offsetHeight
                    : void 0;
            }),
            (a.fn.attr = function (n, i) {
                return void 0 !== i
                    ? this.each(function (e, t) {
                          t.setAttribute(n, i);
                      })
                    : 0 < this.length
                    ? this[0].getAttribute(n)
                    : void 0;
            }),
            (a.fn.removeAttr = function (n) {
                return this.each(function (e, t) {
                    t.removeAttribute(n);
                });
            }),
            (a.fn.html = function (n) {
                return void 0 !== n
                    ? this.each(function (e, t) {
                          t.innerHTML = n;
                      })
                    : 0 < this.length
                    ? this[0].innerHTML
                    : void 0;
            }),
            (a.fn.val = function (n) {
                return void 0 !== n
                    ? this.each(function (e, t) {
                          t.value = n;
                      })
                    : 0 < this.length
                    ? this[0].value
                    : void 0;
            }),
            (a.fn.append = function (n) {
                return this.each(function (e, t) {
                    "object" == typeof n ? t.appendChild(n) : (t.innerHTML = t.innerHTML + n);
                });
            }),
            (a.fn.remove = function (n) {
                return this.each(function (e, t) {
                    n ? t.removeChild(n) : t.parentNode.removeChild(t);
                });
            }),
            (a.fn.on = function (n, i) {
                return this.each(function (e, t) {
                    t.attachEvent
                        ? t.attachEvent("on" + n, function (e) {
                              (e.target = e.srcElement), i.call(t, e);
                          })
                        : t.addEventListener(n, i, !1);
                });
            }),
            (a.fn.off = function (n, i) {
                return this.each(function (e, t) {
                    t.detachEvent ? t.detachEvent("on" + n, i) : t.removeEventListener(n, i, !1);
                });
            }),
            (d.lay = u),
            d.layui &&
                layui.define &&
                layui.define(function (e) {
                    e("lay", u);
                });
    })(window, window.document),
    layui.define(function (e) {
        "use strict";
        function s(e) {
            return new RegExp(e, "g");
        }
        function n(e, t) {
            var n = this;
            (n.config = n.config || {}),
                (n.template = e),
                (e = function (e) {
                    for (var t in e) n.config[t] = e[t];
                })(i),
                e(t);
        }
        function t(e, t) {
            return new n(e, t);
        }
        var i = { open: "{{", close: "}}" },
            c = {
                escape: function (e) {
                    return null == e
                        ? ""
                        : /[<"'>]|&(?=#[a-zA-Z0-9]+)/g.test((e += ""))
                        ? e
                              .replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;")
                              .replace(/</g, "&lt;")
                              .replace(/>/g, "&gt;")
                              .replace(/'/g, "&#39;")
                              .replace(/"/g, "&quot;")
                        : e;
                },
            };
        (n.prototype.tagExp = function (e, t, n) {
            var i = this.config;
            return s((t || "") + i.open + ["#([\\s\\S])+?", "([^{#}])*?"][e || 0] + i.close + (n || ""));
        }),
            (n.prototype.parse = function (t, n) {
                var i = this,
                    a = i.config,
                    o = t,
                    r = s("^" + a.open + "#"),
                    l = s(a.close + "$");
                if ("string" != typeof t) return t;
                t =
                    '"use strict";var view = "' +
                    t
                        .replace(/\s+|\r|\t|\n/g, " ")
                        .replace(s(a.open + "#"), a.open + "# ")
                        .replace(s(a.close + "}"), "} " + a.close)
                        .replace(/\\/g, "\\\\")
                        .replace(s(a.open + "!(.+?)!" + a.close), function (e) {
                            return e
                                .replace(s("^" + a.open + "!"), "")
                                .replace(s("!" + a.close), "")
                                .replace(s(a.open + "|" + a.close), function (e) {
                                    return e.replace(/(.)/g, "\\$1");
                                });
                        })
                        .replace(/(?="|')/g, "\\")
                        .replace(i.tagExp(), function (e) {
                            return '";' + (e = e.replace(r, "").replace(l, "")).replace(/\\(.)/g, "$1") + ';view+="';
                        })
                        .replace(i.tagExp(1), function (e) {
                            var t = '"+laytpl.escape(';
                            return e.replace(/\s/g, "") === a.open + a.close
                                ? ""
                                : ((e = e.replace(s(a.open + "|" + a.close), "")), /^=/.test(e) ? (e = e.replace(/^=/, "")) : /^-/.test(e) && ((e = e.replace(/^-/, "")), (t = '"+(')), t + e.replace(/\\(.)/g, "$1") + ')+"');
                        }) +
                    '";return view;';
                try {
                    return (i.cache = t = new Function("d, laytpl", t)), t(n, c);
                } catch (e) {
                    return delete i.cache, (t = e), (n = o), (i = "Laytpl Error: "), "object" == typeof console && console.error(i + t + "\n" + (n || "")), i + t;
                }
            }),
            (n.prototype.render = function (e, t) {
                e = e || {};
                e = this.cache ? this.cache(e, c) : this.parse(this.template, e);
                return "function" == typeof t && t(e), e;
            });
        (t.config = function (e) {
            for (var t in (e = e || {})) i[t] = e[t];
        }),
            (t.v = "2.0.0"),
            e("laytpl", t);
    }),
    layui.define(function (e) {
        "use strict";
        function t(e) {
            (this.config = e || {}), (this.config.index = ++u.index), this.render(!0);
        }
        var o = document,
            r = "getElementById",
            d = "getElementsByTagName",
            s = "layui-disabled",
            u =
                ((t.prototype.type = function () {
                    var e = this.config;
                    if ("object" == typeof e.elem) return void 0 === e.elem.length ? 2 : 3;
                }),
                (t.prototype.view = function () {
                    var n,
                        i,
                        a = this.config,
                        o = (a.groups = "groups" in a ? Number(a.groups) || 0 : 5),
                        r =
                            ((a.layout = "object" == typeof a.layout ? a.layout : ["prev", "page", "next"]),
                            (a.count = Number(a.count) || 0),
                            (a.curr = Number(a.curr) || 1),
                            (a.limits = "object" == typeof a.limits ? a.limits : [10, 20, 30, 40, 50]),
                            (a.limit = Number(a.limit) || 10),
                            (a.pages = Math.ceil(a.count / a.limit) || 1),
                            a.curr > a.pages ? (a.curr = a.pages) : a.curr < 1 && (a.curr = 1),
                            o < 0 ? (o = 1) : o > a.pages && (o = a.pages),
                            (a.prev = "prev" in a ? a.prev : "Trang trước"),
                            (a.next = "next" in a ? a.next : "Trang sau"),
                            a.pages > o ? Math.ceil((a.curr + (1 < o ? 1 : 0)) / (0 < o ? o : 1)) : 1),
                        l = {
                            prev: a.prev ? '<a class="layui-laypage-prev' + (1 == a.curr ? " " + s : "") + '" data-page="' + (a.curr - 1) + '">' + a.prev + "</a>" : "",
                            page: (function () {
                                var e = [];
                                if (a.count < 1) return "";
                                1 < r && !1 !== a.first && 0 !== o && e.push('<a class="layui-laypage-first" data-page="1"  title="Trang chủ">' + (a.first || 1) + "</a>");
                                var t = Math.floor((o - 1) / 2),
                                    n = 1 < r ? a.curr - t : 1,
                                    i = 1 < r ? ((t = a.curr + (o - t - 1)) > a.pages ? a.pages : t) : o;
                                for (i - n < o - 1 && (n = i - o + 1), !1 !== a.first && 2 < n && e.push('<span class="layui-laypage-spr">...</span>'); n <= i; n++)
                                    n === a.curr
                                        ? e.push('<span class="layui-laypage-curr"><em class="layui-laypage-em" ' + (/^#/.test(a.theme) ? 'style="background-color:' + a.theme + ';"' : "") + "></em><em>" + n + "</em></span>")
                                        : e.push('<a data-page="' + n + '">' + n + "</a>");
                                return (
                                    a.pages > o &&
                                        a.pages > i &&
                                        !1 !== a.last &&
                                        (i + 1 < a.pages && e.push('<span class="layui-laypage-spr">...</span>'),
                                        0 !== o && e.push('<a class="layui-laypage-last" title="Trang cuối"  data-page="' + a.pages + '">' + (a.last || a.pages) + "</a>")),
                                    e.join("")
                                );
                            })(),
                            next: a.next ? '<a class="layui-laypage-next' + (a.curr == a.pages ? " " + s : "") + '" data-page="' + (a.curr + 1) + '">' + a.next + "</a>" : "",
                            count: '<span class="layui-laypage-count">Tổng cộng ' + a.count + " mục</span>",
                            limit:
                                ((n = ['<span class="layui-laypage-limits"><select lay-ignore>']),
                                layui.each(a.limits, function (e, t) {
                                    n.push('<option value="' + t + '"' + (t === a.limit ? "selected" : "") + ">" + t + " mục/trang</option>");
                                }),
                                n.join("") + "</select></span>"),
                            refresh: ['<a data-page="' + a.curr + '" class="layui-laypage-refresh">', '<i class="layui-icon layui-icon-refresh"></i>', "</a>"].join(""),
                            skip: ['<span class="layui-laypage-skip">Xem trang', '<input type="text" min="1" value="' + a.curr + '" class="layui-input">', '<button type="button" class="layui-laypage-btn">Làm mới</button>', "</span>"].join(
                                ""
                            ),
                        };
                    return [
                        '<div class="layui-box layui-laypage layui-laypage-' + (a.theme ? (/^#/.test(a.theme) ? "molv" : a.theme) : "default") + '" id="layui-laypage-' + a.index + '">',
                        ((i = []),
                        layui.each(a.layout, function (e, t) {
                            l[t] && i.push(l[t]);
                        }),
                        i.join("")),
                        "</div>",
                    ].join("");
                }),
                (t.prototype.jump = function (e, t) {
                    if (e) {
                        var n = this,
                            i = n.config,
                            a = e.children,
                            o = e[d]("button")[0],
                            r = e[d]("input")[0],
                            e = e[d]("select")[0],
                            l = function () {
                                var e = Number(r.value.replace(/\s|\D/g, ""));
                                e && ((i.curr = e), n.render());
                            };
                        if (t) return l();
                        for (var s = 0, c = a.length; s < c; s++)
                            "a" === a[s].nodeName.toLowerCase() &&
                                u.on(a[s], "click", function () {
                                    var e = Number(this.getAttribute("data-page"));
                                    e < 1 || e > i.pages || ((i.curr = e), n.render());
                                });
                        e &&
                            u.on(e, "change", function () {
                                var e = this.value;
                                i.curr * e > i.count && (i.curr = Math.ceil(i.count / e)), (i.limit = e), n.render();
                            }),
                            o &&
                                u.on(o, "click", function () {
                                    l();
                                });
                    }
                }),
                (t.prototype.skip = function (n) {
                    var i, e;
                    n &&
                        ((i = this),
                        (e = n[d]("input")[0]) &&
                            u.on(e, "keyup", function (e) {
                                var t = this.value,
                                    e = e.keyCode;
                                /^(37|38|39|40)$/.test(e) || (/\D/.test(t) && (this.value = t.replace(/\D/, "")), 13 === e && i.jump(n, !0));
                            }));
                }),
                (t.prototype.render = function (e) {
                    var t = this,
                        n = t.config,
                        i = t.type(),
                        a = t.view(),
                        i = (2 === i ? n.elem && (n.elem.innerHTML = a) : 3 === i ? n.elem.html(a) : o[r](n.elem) && (o[r](n.elem).innerHTML = a), n.jump && n.jump(n, e), o[r]("layui-laypage-" + n.index));
                    t.jump(i), n.hash && !e && (location.hash = "!" + n.hash + "=" + n.curr), t.skip(i);
                }),
                {
                    render: function (e) {
                        return new t(e).index;
                    },
                    index: layui.laypage ? layui.laypage.index + 1e4 : 0,
                    on: function (t, e, n) {
                        return (
                            t.attachEvent
                                ? t.attachEvent("on" + e, function (e) {
                                      (e.target = e.srcElement), n.call(t, e);
                                  })
                                : t.addEventListener(e, n, !1),
                            this
                        );
                    },
                });
        e("laypage", u);
    }),
    (function (a, v) {
        "use strict";
        function o() {
            var t = this,
                e = t.config.id;
            return ((o.that[e] = t).inst = {
                hint: function (e) {
                    t.hint.call(t, e);
                },
                reload: function (e) {
                    t.reload.call(t, e);
                },
                config: t.config,
            });
        }
        function x(e) {
            var t,
                n = this,
                i = ((n.index = ++b.index), (n.config = lay.extend({}, n.config, b.config, e)), lay(e.elem || n.config.elem));
            return 1 < i.length
                ? (lay.each(i, function () {
                      b.render(lay.extend({}, n.config, { elem: this }));
                  }),
                  n)
                : ((e = lay.extend(n.config, lay.options(i[0]))),
                  i[0] && i.attr(s)
                      ? (t = o.getThis(i.attr(s)))
                          ? t.reload(e)
                          : void 0
                      : ((e.id = "id" in e ? e.id : i.attr("id") || n.index),
                        (e.index = n.index),
                        void b.ready(function () {
                            n.init();
                        })));
        }
        var i = a.layui && layui.define,
            r = {
                getPath: a.lay && lay.getPath ? lay.getPath : "",
                link: function (e, t, n) {
                    b.path && a.lay && lay.layui && lay.layui.link(b.path + e, t, n);
                },
            },
            e = a.LAYUI_GLOBAL || {},
            s = "layui-laydate-id",
            b = {
                v: "5.5.0",
                config: { weekStart: 0 },
                index: a.laydate && a.laydate.v ? 1e5 : 0,
                path: e.laydate_dir || r.getPath,
                set: function (e) {
                    return (this.config = lay.extend({}, this.config, e)), this;
                },
                ready: function (e) {
                    var t = "laydate",
                        n = (i ? "modules/" : "") + "laydate.css?v=" + b.v;
                    return i ? (layui["layui.all"] ? "function" == typeof e && e() : layui.addcss(n, e, t)) : r.link(n, e, t), this;
                },
            },
            n = "laydate",
            k = "layui-this",
            w = "laydate-disabled",
            h = [100, 2e5],
            C = "layui-laydate-static",
            T = "layui-laydate-list",
            l = "laydate-selected",
            c = "layui-laydate-hint",
            d = "laydate-day-prev",
            u = "laydate-day-next",
            E = ".laydate-btns-confirm",
            D = "laydate-time-text",
            S = "laydate-btns-time",
            N = "layui-laydate-preview",
            L = "layui-laydate-shade",
            f = "yyyy|y|MM|M|dd|d|HH|H|mm|m|ss|s";
        (o.formatArr = function (e) {
            return (e || "").match(new RegExp(f + "|.", "g")) || [];
        }),
            (x.isLeapYear = function (e) {
                return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
            }),
            (x.prototype.config = {
                type: "date",
                range: !1,
                format: "yyyy-MM-dd",
                value: null,
                isInitValue: !0,
                min: "1900-1-1",
                max: "2099-12-31",
                trigger: "click",
                show: !1,
                showBottom: !0,
                isPreview: !0,
                btns: ["clear", "now", "confirm"],
                lang: "cn",
                theme: "default",
                position: null,
                calendar: !1,
                mark: {},
                holidays: null,
                zIndex: null,
                done: null,
                change: null,
                autoConfirm: !0,
                shade: 0,
            }),
            (x.prototype.lang = function () {
                var e = {
                    cn: {
                        weeks: ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
                        time: ["Giờ", "Phút", "Giây"],
                        timeTips: "Chọn thời gian",
                        startTime: "Thời gian bắt đầu",
                        endTime: "Thời gian kết thúc",
                        dateTips: "Trở về ngày",
                        month: ["Một", "Hai", "Ba", "Bốn", "Năm", "Sáu", "Bảy", "Tám", "Chín", "Mười", "Mười một", "Mười hai"],
                        tools: { confirm: "Tải lại", clear: "Xóa trắng", now: "Hiện tại" },
                        timeout: "Thời gian kết thúc không được sớm hơn thời gian bắt đầu<br>Vui lòng chọn lại",
                        invalidDate: "Không nằm trong ngày hoặc phạm vi thời gian hợp lệ",
                        formatError: ["Định dạng ngày tháng hợp lệ<br>Phải theo định dạng dưới đây：<br>", "<br>thiết lập lại cho bạn"],
                        preview: "kết quả hiện được chọn",
                    },
                    en: {
                        weeks: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                        time: ["Hours", "Minutes", "Seconds"],
                        timeTips: "Select Time",
                        startTime: "Start Time",
                        endTime: "End Time",
                        dateTips: "Select Date",
                        month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        tools: { confirm: "Confirm", clear: "Clear", now: "Now" },
                        timeout: "End time cannot be less than start Time<br>Please re-select",
                        invalidDate: "Invalid date",
                        formatError: ["The date format error<br>Must be followed：<br>", "<br>It has been reset"],
                        preview: "The selected result",
                    },
                };
                return e[this.config.lang] || e.cn;
            }),
            (x.prototype.reload = function (e) {
                (this.config = lay.extend({}, this.config, e)), this.init();
            }),
            (x.prototype.init = function () {
                var r = this,
                    l = r.config,
                    e = "static" === l.position,
                    t = { year: "yyyy", month: "yyyy-MM", date: "yyyy-MM-dd", time: "HH:mm:ss", datetime: "yyyy-MM-dd HH:mm:ss" };
                (l.elem = lay(l.elem)),
                    (l.eventElem = lay(l.eventElem)),
                    l.elem[0] &&
                        ("array" !== layui.type(l.theme) && (l.theme = [l.theme]),
                        l.fullPanel && ("datetime" !== l.type || l.range) && delete l.fullPanel,
                        (r.rangeStr = l.range ? ("string" == typeof l.range ? l.range : "-") : ""),
                        (r.rangeLinked = !(!l.range || !l.rangeLinked || ("date" !== l.type && "datetime" !== l.type))),
                        (r.autoCalendarModel = function () {
                            var e = r.rangeLinked;
                            return (
                                (r.rangeLinked =
                                    l.range && ("date" === l.type || "datetime" === l.type) && (!r.startDate || !r.endDate || (r.startDate && r.endDate && r.startDate.year === r.endDate.year && r.startDate.month === r.endDate.month))),
                                lay(r.elem)[r.rangeLinked ? "addClass" : "removeClass"]("layui-laydate-linkage"),
                                r.rangeLinked != e
                            );
                        }),
                        (r.autoCalendarModel.auto = r.rangeLinked && "auto" === l.rangeLinked),
                        "array" === layui.type(l.range) && (r.rangeElem = [lay(l.range[0]), lay(l.range[1])]),
                        t[l.type] || (a.console && console.error && console.error("laydate type error:'" + l.type + "' is not supported"), (l.type = "date")),
                        l.format === t.date && (l.format = t[l.type] || t.date),
                        (r.format = o.formatArr(l.format)),
                        l.weekStart && !/^[0-6]$/.test(l.weekStart) && ((t = r.lang()), (l.weekStart = t.weeks.indexOf(l.weekStart)), -1 === l.weekStart && (l.weekStart = 0)),
                        (r.EXP_IF = ""),
                        (r.EXP_SPLIT = ""),
                        lay.each(r.format, function (e, t) {
                            (e = new RegExp(f).test(t)
                                ? "\\d{" + (new RegExp(f).test(r.format[0 === e ? e + 1 : e - 1] || "") ? (/^yyyy|y$/.test(t) ? 4 : t.length) : /^yyyy$/.test(t) ? "1,4" : /^y$/.test(t) ? "1,308" : "1,2") + "}"
                                : "\\" + t),
                                (r.EXP_IF = r.EXP_IF + e),
                                (r.EXP_SPLIT = r.EXP_SPLIT + "(" + e + ")");
                        }),
                        (r.EXP_IF_ONE = new RegExp("^" + r.EXP_IF + "$")),
                        (r.EXP_IF = new RegExp("^" + (l.range ? r.EXP_IF + "\\s\\" + r.rangeStr + "\\s" + r.EXP_IF : r.EXP_IF) + "$")),
                        (r.EXP_SPLIT = new RegExp("^" + r.EXP_SPLIT + "$", "")),
                        r.isInput(l.elem[0]) || ("focus" === l.trigger && (l.trigger = "click")),
                        l.elem.attr("lay-key", r.index),
                        l.eventElem.attr("lay-key", r.index),
                        l.elem.attr(s, l.id),
                        (l.mark = lay.extend(
                            {},
                            l.calendar && "cn" === l.lang
                                ? {
                                      "0-1-1": "Ngày Tết dương lịch",
                                      "0-2-14": "Ngày Lễ Tình nhân",
                                      "0-3-8": "Ngày Quốc tế Phụ nữ",
                                      "0-3-12": "Ngày Trồng cây",
                                      "0-4-1": "Ngày Nghịch ngợm",
                                      "0-5-1": "Ngày Quốc tế Lao động",
                                      "0-5-4": "Ngày Thanh niên",
                                      "0-6-1": "Ngày Quốc tế Thiếu nhi",
                                      "0-9-10": "Ngày Nhà giáo Việt Nam",
                                      "0-4-30": "Ngày quốc khánh",
                                      "0-12-25": "Ngày giáng sinh",
                                  }
                                : {},
                            l.mark
                        )),
                        lay.each(["min", "max"], function (e, t) {
                            var n = [],
                                i = [];
                            if ("number" == typeof l[t])
                                var a = l[t],
                                    o = new Date(),
                                    o = r.newDate({ year: o.getFullYear(), month: o.getMonth(), date: o.getDate(), hours: e ? 23 : 0, minutes: e ? 59 : 0, seconds: e ? 59 : 0 }).getTime(),
                                    n = [(e = new Date(a ? (a < 864e5 ? o + 864e5 * a : a) : o)).getFullYear(), e.getMonth() + 1, e.getDate()],
                                    i = [e.getHours(), e.getMinutes(), e.getSeconds()];
                            else if ("string" == typeof l[t]) (n = (l[t].match(/\d+-\d+-\d+/) || [""])[0].split("-")), (i = (l[t].match(/\d+:\d+:\d+/) || [""])[0].split(":"));
                            else if ("object" == typeof l[t]) return l[t];
                            l[t] = { year: 0 | n[0] || new Date().getFullYear(), month: n[1] ? (0 | n[1]) - 1 : new Date().getMonth(), date: 0 | n[2] || new Date().getDate(), hours: 0 | i[0], minutes: 0 | i[1], seconds: 0 | i[2] };
                        }),
                        (r.elemID = "layui-laydate" + l.elem.attr("lay-key")),
                        (l.show || e) && r.render(),
                        e || r.events(),
                        l.value && l.isInitValue && ("date" === layui.type(l.value) ? r.setValue(r.parse(0, r.systemDate(l.value))) : r.setValue(l.value)));
            }),
            (x.prototype.render = function () {
                var n,
                    i,
                    a,
                    o,
                    r = this,
                    l = r.config,
                    s = r.lang(),
                    c = "static" === l.position,
                    d = (r.elem = lay.elem("div", {
                        id: r.elemID,
                        class: [
                            "layui-laydate",
                            l.range ? " layui-laydate-range" : "",
                            r.rangeLinked ? " layui-laydate-linkage" : "",
                            c ? " " + C : "",
                            l.fullPanel ? " laydate-theme-fullpanel" : "",
                            ((n = ""),
                            lay.each(l.theme, function (e, t) {
                                "default" === t || /^#/.test(t) || (n += " laydate-theme-" + t);
                            }),
                            n),
                        ].join(""),
                    })),
                    u = (r.elemMain = []),
                    f = (r.elemHeader = []),
                    p = (r.elemCont = []),
                    h = (r.table = []),
                    e = (r.footer = lay.elem("div", { class: "layui-laydate-footer" })),
                    t = (r.shortcut = lay.elem("ul", { class: "layui-laydate-shortcut" })),
                    y =
                        (l.zIndex && (d.style.zIndex = l.zIndex),
                        lay.each(new Array(2), function (e) {
                            if (!l.range && 0 < e) return !0;
                            var n = lay.elem("div", { class: "layui-laydate-header" }),
                                t = [
                                    (((t = lay.elem("i", { class: "layui-icon laydate-icon laydate-prev-y" })).innerHTML = "&#xe65a;"), t),
                                    (((t = lay.elem("i", { class: "layui-icon laydate-icon laydate-prev-m" })).innerHTML = "&#xe603;"), t),
                                    ((t = lay.elem("div", { class: "laydate-set-ym" })), (i = lay.elem("span")), (o = lay.elem("span")), t.appendChild(i), t.appendChild(o), t),
                                    (((i = lay.elem("i", { class: "layui-icon laydate-icon laydate-next-m" })).innerHTML = "&#xe602;"), i),
                                    (((o = lay.elem("i", { class: "layui-icon laydate-icon laydate-next-y" })).innerHTML = "&#xe65b;"), o),
                                ],
                                i = lay.elem("div", { class: "layui-laydate-content" }),
                                a = lay.elem("table"),
                                o = lay.elem("thead"),
                                r = lay.elem("tr");
                            lay.each(t, function (e, t) {
                                n.appendChild(t);
                            }),
                                o.appendChild(r),
                                lay.each(new Array(6), function (n) {
                                    var i = a.insertRow(0);
                                    lay.each(new Array(7), function (e) {
                                        var t;
                                        0 === n && (((t = lay.elem("th")).innerHTML = s.weeks[(e + l.weekStart) % 7]), r.appendChild(t)), i.insertCell(e);
                                    });
                                }),
                                a.insertBefore(o, a.children[0]),
                                i.appendChild(a),
                                (u[e] = lay.elem("div", { class: "layui-laydate-main laydate-main-list-" + e })),
                                u[e].appendChild(n),
                                u[e].appendChild(i),
                                f.push(t),
                                p.push(i),
                                h.push(a);
                        }),
                        lay(e).html(
                            ((y = []),
                            (i = []),
                            "datetime" === l.type && y.push('<span lay-type="datetime" class="' + S + '">' + s.timeTips + "</span>"),
                            (l.range || "datetime" !== l.type || l.fullPanel) && y.push('<span class="' + N + '" title="' + s.preview + '"></span>'),
                            lay.each(l.btns, function (e, t) {
                                var n = s.tools[t] || "btn";
                                (l.range && "now" === t) || (c && "clear" === t && (n = "cn" === l.lang ? "Đặt lại" : "Reset"), i.push('<span lay-type="' + t + '" class="laydate-btns-' + t + '">' + n + "</span>"));
                            }),
                            y.push('<div class="laydate-footer-btns">' + i.join("") + "</div>"),
                            y.join(""))
                        ),
                        l.shortcuts &&
                            (d.appendChild(t),
                            lay(t)
                                .html(
                                    ((a = []),
                                    lay.each(l.shortcuts, function (e, t) {
                                        a.push('<li data-index="' + e + '">' + t.text + "</li>");
                                    }),
                                    a.join(""))
                                )
                                .find("li")
                                .on("click", function (e) {
                                    var t = (l.shortcuts[this.dataset.index] || {}).value || [],
                                        i = (layui.isArray(t) || (t = [t]), l.type);
                                    lay.each(t, function (e, t) {
                                        var n = [l.dateTime, r.endDate][e];
                                        "time" === i && "date" !== layui.type(t)
                                            ? r.EXP_IF.test(t) && ((t = (t.match(r.EXP_SPLIT) || []).slice(1)), lay.extend(n, { hours: 0 | t[0], minutes: 0 | t[2], seconds: 0 | t[4] }))
                                            : lay.extend(n, r.systemDate("date" === layui.type(t) ? t : new Date(t))),
                                            ("time" !== i && "datetime" !== i) || (r[["startTime", "endTime"][e]] = { hours: n.hours, minutes: n.minutes, seconds: n.seconds }),
                                            0 === e ? (r.startDate = lay.extend({}, n)) : (r.endState = !0),
                                            "year" === i || "month" === i || "time" === i ? (r.listYM[e] = [n.year, n.month + 1]) : e && r.autoCalendarModel.auto && r.autoCalendarModel();
                                    }),
                                        r.checkDate("limit").calendar(null, null, "init"),
                                        (t = lay(r.footer)
                                            .find("." + S)
                                            .removeClass(w)) &&
                                            "date" === t.attr("lay-type") &&
                                            t[0].click(),
                                        r.done(null, "change"),
                                        lay(this).addClass(k),
                                        "static" !== l.position && r.setValue(r.parse()).done().remove();
                                })),
                        lay.each(u, function (e, t) {
                            d.appendChild(t);
                        }),
                        l.showBottom && d.appendChild(e),
                        lay.elem("style")),
                    m = [],
                    g = !0,
                    t =
                        (lay.each(l.theme, function (e, t) {
                            if (g && /^#/.test(t))
                                return (
                                    (g = !(o = !0)),
                                    void m.push(
                                        [
                                            "#{{id}} .layui-laydate-header{background-color:{{theme}};}",
                                            "#{{id}} li.layui-this,#{{id}} td.layui-this>div{background-color:{{theme}} !important;}",
                                            -1 !== l.theme.indexOf("circle") ? "" : "#{{id}} .layui-this{background-color:{{theme}} !important;}",
                                            "#{{id}} .laydate-day-now{color:{{theme}} !important;}",
                                            "#{{id}} .laydate-day-now:after{border-color:{{theme}} !important;}",
                                        ]
                                            .join("")
                                            .replace(/{{id}}/g, r.elemID)
                                            .replace(/{{theme}}/g, t)
                                    )
                                );
                            !g &&
                                /^#/.test(t) &&
                                m.push(
                                    ["#{{id}} .laydate-selected>div{background-color:{{theme}} !important;}", "#{{id}} .laydate-selected:hover>div{background-color:{{theme}} !important;}"]
                                        .join("")
                                        .replace(/{{id}}/g, r.elemID)
                                        .replace(/{{theme}}/g, t)
                                );
                        }),
                        l.shortcuts && l.range && m.push("#{{id}}.layui-laydate-range{width: 628px;}".replace(/{{id}}/g, r.elemID)),
                        m.length && ((m = m.join("")), "styleSheet" in y ? (y.setAttribute("type", "text/css"), (y.styleSheet.cssText = m)) : (y.innerHTML = m), o && lay(d).addClass("laydate-theme-molv"), d.appendChild(y)),
                        r.remove(x.thisElemDate),
                        (b.thisId = l.id),
                        c ? l.elem.append(d) : (v.body.appendChild(d), r.position()),
                        l.shade ? '<div class="' + L + '" style="z-index:' + (parseInt(layui.getStyle(d, "z-index")) - 1) + "; background-color: " + (l.shade[1] || "#000") + "; opacity: " + (l.shade[0] || l.shade) + '"></div>' : "");
                d.insertAdjacentHTML("beforebegin", t),
                    r.checkDate().calendar(null, 0, "init"),
                    r.changeEvent(),
                    (x.thisElemDate = r.elemID),
                    r.renderAdditional(),
                    "function" == typeof l.ready && l.ready(lay.extend({}, l.dateTime, { month: l.dateTime.month + 1 })),
                    r.preview();
            }),
            (x.prototype.remove = function (e) {
                var t = this,
                    n = t.config,
                    i = lay("#" + (e || t.elemID));
                return (
                    i[0] &&
                        (i.hasClass(C) ||
                            t.checkDate(function () {
                                i.remove(), delete t.startDate, delete t.endDate, delete t.endState, delete t.startTime, delete t.endTime, delete b.thisId, "function" == typeof n.close && n.close(t);
                            }),
                        lay("." + L).remove()),
                    t
                );
            }),
            (x.prototype.position = function () {
                var e = this.config;
                return lay.position(e.elem[0], this.elem, { position: e.position }), this;
            }),
            (x.prototype.hint = function (e) {
                var t = this,
                    n = (t.config, lay.elem("div", { class: c }));
                t.elem &&
                    ((n.innerHTML = (e = "object" == typeof e ? e || {} : { content: e }).content || ""),
                    lay(t.elem)
                        .find("." + c)
                        .remove(),
                    t.elem.appendChild(n),
                    clearTimeout(t.hinTimer),
                    (t.hinTimer = setTimeout(
                        function () {
                            lay(t.elem)
                                .find("." + c)
                                .remove();
                        },
                        "ms" in e ? e.ms : 3e3
                    )));
            }),
            (x.prototype.getAsYM = function (e, t, n) {
                return n ? t-- : t++, t < 0 && ((t = 11), e--), 11 < t && ((t = 0), e++), [e, t];
            }),
            (x.prototype.systemDate = function (e) {
                var t = e || new Date();
                return { year: t.getFullYear(), month: t.getMonth(), date: t.getDate(), hours: e ? e.getHours() : 0, minutes: e ? e.getMinutes() : 0, seconds: e ? e.getSeconds() : 0 };
            }),
            (x.prototype.checkDate = function (e) {
                function n(i, a, o) {
                    var r = ["startTime", "endTime"];
                    (a = (a.match(s.EXP_SPLIT) || []).slice(1)),
                        (o = o || 0),
                        c.range && (s[r[o]] = s[r[o]] || {}),
                        lay.each(s.format, function (e, t) {
                            var n = parseFloat(a[e]);
                            a[e].length < t.length && (l = !0),
                                /yyyy|y/.test(t)
                                    ? (n < h[0] && ((n = h[0]), (l = !0)), (i.year = n))
                                    : /MM|M/.test(t)
                                    ? (n < 1 && ((n = 1), (l = !0)), (i.month = n - 1))
                                    : /dd|d/.test(t)
                                    ? (n < 1 && ((n = 1), (l = !0)), (i.date = n))
                                    : /HH|H/.test(t)
                                    ? (n < 0 && (l = !(n = 0)), 23 < n && ((n = 23), (l = !0)), (i.hours = n), c.range && (s[r[o]].hours = n))
                                    : /mm|m/.test(t)
                                    ? (n < 0 && (l = !(n = 0)), 59 < n && ((n = 59), (l = !0)), (i.minutes = n), c.range && (s[r[o]].minutes = n))
                                    : /ss|s/.test(t) && (n < 0 && (l = !(n = 0)), 59 < n && ((n = 59), (l = !0)), (i.seconds = n), c.range && (s[r[o]].seconds = n));
                        }),
                        d(i);
                }
                var t,
                    l,
                    s = this,
                    c = (new Date(), s.config),
                    i = s.lang(),
                    a = (c.dateTime = c.dateTime || s.systemDate()),
                    o = c.elem[0],
                    r =
                        (s.isInput(o),
                        (function () {
                            if (s.rangeElem) {
                                var e = [s.rangeElem[0].val(), s.rangeElem[1].val()];
                                if (e[0] && e[1]) return e.join(" " + s.rangeStr + " ");
                            }
                            return s.isInput(o) ? o.value : "static" === c.position ? "" : lay(o).attr("lay-date");
                        })()),
                    d = function (e) {
                        e &&
                            (e.year > h[1] && ((e.year = h[1]), (l = !0)),
                            11 < e.month && ((e.month = 11), (l = !0)),
                            59 < e.seconds && ((e.seconds = 0), e.minutes++, (l = !0)),
                            59 < e.minutes && ((e.minutes = 0), e.hours++, (l = !0)),
                            23 < e.hours && ((e.hours = 0), (l = !0)),
                            (t = b.getEndDate(e.month + 1, e.year)),
                            e.date > t && ((e.date = t), (l = !0)));
                    };
                if ("limit" === e) return c.range ? (d(s.rangeLinked ? s.startDate : a), s.endDate && d(s.endDate)) : d(a), s;
                "string" == typeof (r = r || c.value) && (r = r.replace(/\s+/g, " ").replace(/^\s|\s$/g, ""));
                var u,
                    f,
                    p = function () {
                        var e, t, n;
                        c.range &&
                            (s.endDate =
                                s.endDate ||
                                lay.extend(
                                    {},
                                    c.dateTime,
                                    ((e = {}),
                                    (t = c.dateTime),
                                    (n = s.getAsYM(t.year, t.month)),
                                    "year" === c.type ? (e.year = t.year + 1) : "time" !== c.type && ((e.year = n[0]), (e.month = n[1])),
                                    ("datetime" !== c.type && "time" !== c.type) || ((e.hours = 23), (e.minutes = e.seconds = 59)),
                                    e)
                                ));
                    };
                return (
                    p(),
                    "string" == typeof r && r
                        ? s.EXP_IF.test(r)
                            ? c.range
                                ? ((r = r.split(" " + s.rangeStr + " ")),
                                  lay.each([c.dateTime, s.endDate], function (e, t) {
                                      n(t, r[e], e);
                                  }))
                                : n(a, r)
                            : (s.hint(i.formatError[0] + (c.range ? c.format + " " + s.rangeStr + " " + c.format : c.format) + i.formatError[1]), (l = !0))
                        : r && "date" === layui.type(r)
                        ? (c.dateTime = s.systemDate(r))
                        : ((c.dateTime = s.systemDate()), delete s.startTime, delete s.endDate, p(), delete s.endTime),
                    s.rangeElem &&
                        ((p = [s.rangeElem[0].val(), s.rangeElem[1].val()]),
                        (u = [c.dateTime, s.endDate]),
                        lay.each(p, function (e, t) {
                            s.EXP_IF_ONE.test(t) && n(u[e], t, e);
                        })),
                    d(a),
                    c.range && d(s.endDate),
                    l && r && s.setValue(!c.range || s.endDate ? s.parse() : ""),
                    s.getDateTime(a) > s.getDateTime(c.max) ? ((a = c.dateTime = lay.extend({}, c.max)), (f = !0)) : s.getDateTime(a) < s.getDateTime(c.min) && ((a = c.dateTime = lay.extend({}, c.min)), (f = !0)),
                    c.range &&
                        ((s.getDateTime(s.endDate) < s.getDateTime(c.min) || s.getDateTime(s.endDate) > s.getDateTime(c.max)) && ((s.endDate = lay.extend({}, c.max)), (f = !0)),
                        (s.startTime = { hours: c.dateTime.hours, minutes: c.dateTime.minutes, seconds: c.dateTime.seconds }),
                        (s.endTime = { hours: s.endDate.hours, minutes: s.endDate.minutes, seconds: s.endDate.seconds }),
                        "month" === c.type && ((c.dateTime.date = 1), (s.endDate.date = 1))),
                    f && r && (s.setValue(s.parse()), s.hint("value " + i.invalidDate + i.formatError[1])),
                    (s.startDate = s.startDate || (r && lay.extend({}, c.dateTime))),
                    s.autoCalendarModel.auto && s.autoCalendarModel(),
                    (s.endState = !c.range || !s.rangeLinked || !(!s.startDate || !s.endDate)),
                    e && e(),
                    s
                );
            }),
            (x.prototype.mark = function (e, n) {
                var i,
                    t = this.config;
                return (
                    lay.each(t.mark, function (e, t) {
                        ((e = e.split("-"))[0] != n[0] && 0 != e[0]) || (e[1] != n[1] && 0 != e[1]) || e[2] != n[2] || (i = t || n[2]);
                    }),
                    i && e.find("div").html('<span class="laydate-day-mark">' + i + "</span>"),
                    this
                );
            }),
            (x.prototype.holidays = function (i, a) {
                var e = this.config,
                    o = ["", "work"];
                return (
                    "array" === layui.type(e.holidays) &&
                        lay.each(e.holidays, function (n, e) {
                            lay.each(e, function (e, t) {
                                t === i.attr("lay-ymd") && i.find("div").html('<span class="laydate-day-holidays"' + (o[n] ? 'type="' + o[n] + '"' : "") + ">" + a[2] + "</span>");
                            });
                        }),
                    this
                );
            }),
            (x.prototype.limit = function (t) {
                t = t || {};
                var a = this,
                    e = a.config,
                    o = {},
                    n = t.index > (t.time ? 0 : 41) ? a.endDate : e.dateTime;
                return (
                    lay.each({ now: lay.extend({}, n, t.date || {}), min: e.min, max: e.max }, function (e, n) {
                        var i;
                        o[e] = a
                            .newDate(
                                lay.extend(
                                    { year: n.year, month: "year" === t.type ? 0 : n.month, date: "year" === t.type || "month" === t.type ? 1 : n.date },
                                    ((i = {}),
                                    lay.each(t.time, function (e, t) {
                                        i[t] = n[t];
                                    }),
                                    i)
                                )
                            )
                            .getTime();
                    }),
                    (n = o.now < o.min || o.now > o.max),
                    t.elem && t.elem[n ? "addClass" : "removeClass"](w),
                    n
                );
            }),
            (x.prototype.thisDateTime = function (e) {
                var t = this.config;
                return e ? this.endDate : t.dateTime;
            }),
            (x.prototype.calendar = function (e, t, n) {
                var a,
                    o,
                    r,
                    l = this,
                    i = l.config,
                    t = t ? 1 : 0,
                    s = e || l.thisDateTime(t),
                    c = new Date(),
                    d = l.lang(),
                    u = "date" !== i.type && "datetime" !== i.type,
                    f = lay(l.table[t]).find("td"),
                    p = lay(l.elemHeader[t][2]).find("span");
                return (
                    s.year < h[0] && ((s.year = h[0]), l.hint(d.invalidDate)),
                    s.year > h[1] && ((s.year = h[1]), l.hint(d.invalidDate)),
                    l.firstDate || (l.firstDate = lay.extend({}, s)),
                    c.setFullYear(s.year, s.month, 1),
                    (a = (c.getDay() + (7 - i.weekStart)) % 7),
                    (o = b.getEndDate(s.month || 12, s.year)),
                    (r = b.getEndDate(s.month + 1, s.year)),
                    lay.each(f, function (e, t) {
                        var n = [s.year, s.month],
                            i = 0;
                        (t = lay(t)).removeAttr("class"),
                            e < a
                                ? ((i = o - a + e), t.addClass("laydate-day-prev"), (n = l.getAsYM(s.year, s.month, "sub")))
                                : a <= e && e < r + a
                                ? ((i = e - a), l.rangeLinked || (i + 1 === s.date && t.addClass(k)))
                                : ((i = e - r - a), t.addClass("laydate-day-next"), (n = l.getAsYM(s.year, s.month))),
                            n[1]++,
                            (n[2] = i + 1),
                            t.attr("lay-ymd", n.join("-")).html("<div>" + n[2] + "</div>"),
                            l
                                .mark(t, n)
                                .holidays(t, n)
                                .limit({ elem: t, date: { year: n[0], month: n[1] - 1, date: n[2] }, index: e });
                    }),
                    lay(p[0]).attr("lay-ym", s.year + "-" + (s.month + 1)),
                    lay(p[1]).attr("lay-ym", s.year + "-" + (s.month + 1)),
                    "cn" === i.lang
                        ? (lay(p[0])
                              .attr("lay-type", "year")
                              .html(s.year + " năm"),
                          lay(p[1])
                              .attr("lay-type", "month")
                              .html(s.month + 1 + " tháng"))
                        : (lay(p[0]).attr("lay-type", "month").html(d.month[s.month]), lay(p[1]).attr("lay-type", "year").html(s.year)),
                    u &&
                        (i.range
                            ? (!e && "init" === n) ||
                              ((l.listYM = [
                                  [(l.startDate || i.dateTime).year, (l.startDate || i.dateTime).month + 1],
                                  [l.endDate.year, l.endDate.month + 1],
                              ]),
                              l.list(i.type, 0).list(i.type, 1),
                              "time" === i.type ? l.setBtnStatus("thời gian", lay.extend({}, l.systemDate(), l.startTime), lay.extend({}, l.systemDate(), l.endTime)) : l.setBtnStatus(!0))
                            : ((l.listYM = [[s.year, s.month + 1]]), l.list(i.type, 0))),
                    i.range && "init" === n && (l.rangeLinked ? ((c = l.getAsYM(s.year, s.month, t ? "sub" : null)), l.calendar(lay.extend({}, s, { year: c[0], month: c[1] }), 1 - t)) : l.calendar(null, 1 - t)),
                    i.range || ((f = ["hours", "minutes", "seconds"]), l.limit({ elem: lay(l.footer).find(".laydate-btns-now"), date: l.systemDate(), index: 0, time: f }), l.limit({ elem: lay(l.footer).find(E), index: 0, time: f })),
                    l.setBtnStatus(),
                    lay(l.shortcut)
                        .find("li." + k)
                        .removeClass(k),
                    i.range && !u && "init" !== n && l.stampRange(),
                    l
                );
            }),
            (x.prototype.list = function (i, a) {
                var o,
                    r,
                    e,
                    l,
                    s = this,
                    c = s.config,
                    d = s.rangeLinked ? c.dateTime : [c.dateTime, s.endDate][a],
                    u = s.lang(),
                    t = c.range && "date" !== c.type && "datetime" !== c.type,
                    f = lay.elem("ul", { class: T + " " + { year: "laydate-year-list", month: "laydate-month-list", time: "laydate-time-list" }[i] }),
                    n = s.elemHeader[a],
                    p = lay(n[2]).find("span"),
                    h = s.elemCont[a || 0],
                    y = lay(h).find("." + T)[0],
                    m = "cn" === c.lang,
                    g = m ? "năm" : "",
                    v = s.listYM[a] || {},
                    x = ["hours", "minutes", "seconds"],
                    b = ["startTime", "endTime"][a];
                return (
                    v[0] < 1 && (v[0] = 1),
                    "year" === i
                        ? ((e = o = v[0] - 7),
                          o < 1 && (e = o = 1),
                          lay.each(new Array(15), function (e) {
                              var t = lay.elem("li", { "lay-ym": o }),
                                  n = { year: o, month: 0, date: 1 };
                              o == v[0] && lay(t).addClass(k), (t.innerHTML = o + g), f.appendChild(t), s.limit({ elem: lay(t), date: n, index: a, type: i }), o++;
                          }),
                          lay(p[m ? 0 : 1])
                              .attr("lay-ym", o - 8 + "-" + v[1])
                              .html(e + g + " - " + (o - 1) + g))
                        : "month" === i
                        ? (lay.each(new Array(12), function (e) {
                              var t = lay.elem("li", { "lay-ym": e }),
                                  n = { year: v[0], month: e, date: 1 };
                              e + 1 == v[1] && lay(t).addClass(k), (t.innerHTML = u.month[e] + (m ? "tháng" : "")), f.appendChild(t), s.limit({ elem: lay(t), date: n, index: a, type: i });
                          }),
                          lay(p[m ? 0 : 1])
                              .attr("lay-ym", v[0] + "-" + v[1])
                              .html(v[0] + g))
                        : "time" === i &&
                          ((r = function () {
                              lay(f)
                                  .find("ol")
                                  .each(function (n, e) {
                                      lay(e)
                                          .find("li")
                                          .each(function (e, t) {
                                              s.limit({
                                                  elem: lay(t),
                                                  date: [{ hours: e }, { hours: s[b].hours, minutes: e }, { hours: s[b].hours, minutes: s[b].minutes, seconds: e }][n],
                                                  index: a,
                                                  time: [["hours"], ["hours", "minutes"], ["hours", "minutes", "seconds"]][n],
                                              });
                                          });
                                  }),
                                  c.range || s.limit({ elem: lay(s.footer).find(E), date: s[b], inedx: 0, time: ["hours", "minutes", "seconds"] });
                          }),
                          c.range ? s[b] || (s[b] = "startTime" === b ? d : s.endDate) : (s[b] = d),
                          lay.each([24, 60, 60], function (t, e) {
                              var n = lay.elem("li"),
                                  i = ["<p>" + u.time[t] + "</p><ol>"];
                              lay.each(new Array(e), function (e) {
                                  i.push("<li" + (s[b][x[t]] === e ? ' class="' + k + '"' : "") + ">" + lay.digit(e, 2) + "</li>");
                              }),
                                  (n.innerHTML = i.join("") + "</ol>"),
                                  f.appendChild(n);
                          }),
                          r()),
                    y && h.removeChild(y),
                    h.appendChild(f),
                    "year" === i || "month" === i
                        ? (lay(s.elemMain[a]).addClass("laydate-ym-show"),
                          lay(f)
                              .find("li")
                              .on("click", function () {
                                  var e = 0 | lay(this).attr("lay-ym");
                                  lay(this).hasClass(w) ||
                                      (s.rangeLinked ? lay.extend(d, { year: "year" === i ? e : v[0], month: "year" === i ? v[1] - 1 : e }) : (d[i] = e),
                                      "year" === c.type || "month" === c.type
                                          ? (lay(f)
                                                .find("." + k)
                                                .removeClass(k),
                                            lay(this).addClass(k),
                                            "month" === c.type && "year" === i && ((s.listYM[a][0] = e), t && ((a ? s.endDate : d).year = e), s.list("month", a)))
                                          : (s.checkDate("limit").calendar(d, a, "init"), s.closeList()),
                                      s.setBtnStatus(),
                                      !c.range && c.autoConfirm && (("month" === c.type && "month" === i) || ("year" === c.type && "year" === i)) && s.setValue(s.parse()).done().remove(),
                                      s.autoCalendarModel.auto && !s.rangeLinked ? s.choose(lay(h).find("td.layui-this"), a) : s.endState && s.done(null, "change"),
                                      lay(s.footer)
                                          .find("." + S)
                                          .removeClass(w));
                              }))
                        : ((e = lay.elem("span", { class: D })),
                          (l = function () {
                              lay(f)
                                  .find("ol")
                                  .each(function (e) {
                                      var n = this,
                                          t = lay(n).find("li");
                                      (n.scrollTop = 30 * (s[b][x[e]] - 2)),
                                          n.scrollTop <= 0 &&
                                              t.each(function (e, t) {
                                                  if (!lay(this).hasClass(w)) return (n.scrollTop = 30 * (e - 2)), !0;
                                              });
                                  });
                          }),
                          (p = lay(n[2]).find("." + D)),
                          l(),
                          (e.innerHTML = c.range ? [u.startTime, u.endTime][a] : u.timeTips),
                          lay(s.elemMain[a]).addClass("laydate-time-show"),
                          p[0] && p.remove(),
                          n[2].appendChild(e),
                          lay(f)
                              .find("ol")
                              .each(function (t) {
                                  var n = this;
                                  lay(n)
                                      .find("li")
                                      .on("click", function () {
                                          var e = 0 | this.innerHTML;
                                          lay(this).hasClass(w) ||
                                              (c.range ? (s[b][x[t]] = e) : (d[x[t]] = e),
                                              lay(n)
                                                  .find("." + k)
                                                  .removeClass(k),
                                              lay(this).addClass(k),
                                              r(),
                                              l(),
                                              (s.endDate || "time" === c.type || ("datetime" === c.type && c.fullPanel)) && s.done(null, "change"),
                                              s.setBtnStatus());
                                      });
                              })),
                    s
                );
            }),
            (x.prototype.listYM = []),
            (x.prototype.closeList = function () {
                var n = this;
                n.config,
                    lay.each(n.elemCont, function (e, t) {
                        lay(this)
                            .find("." + T)
                            .remove(),
                            lay(n.elemMain[e]).removeClass("laydate-ym-show laydate-time-show");
                    }),
                    lay(n.elem)
                        .find("." + D)
                        .remove();
            }),
            (x.prototype.setBtnStatus = function (e, t, n) {
                var i = this,
                    a = i.config,
                    o = i.lang(),
                    r = lay(i.footer).find(E);
                a.range &&
                    "time" !== a.type &&
                    ((t = t || (i.rangeLinked ? i.startDate : a.dateTime)),
                    (n = n || i.endDate),
                    (a = !i.endState || i.newDate(t).getTime() > i.newDate(n).getTime()),
                    i.limit({ date: t }) || i.limit({ date: n }) ? r.addClass(w) : r[a ? "addClass" : "removeClass"](w),
                    e && a && i.hint("string" == typeof e ? o.timeout.replace(/\u65e5\u671f/g, e) : o.timeout));
            }),
            (x.prototype.parse = function (e, t) {
                var n = this,
                    i = n.config,
                    t = t || ("end" == e ? lay.extend({}, n.endDate, n.endTime) : i.range ? lay.extend({}, n.rangeLinked ? n.startDate : i.dateTime, n.startTime) : i.dateTime),
                    t = b.parse(t, n.format, 1);
                return i.range && void 0 === e ? t + " " + n.rangeStr + " " + n.parse("end") : t;
            }),
            (x.prototype.newDate = function (e) {
                return (e = e || {}), new Date(e.year || 1, e.month || 0, e.date || 1, e.hours || 0, e.minutes || 0, e.seconds || 0);
            }),
            (x.prototype.getDateTime = function (e) {
                return this.newDate(e).getTime();
            }),
            (x.prototype.setValue = function (e) {
                var t = this,
                    n = t.config,
                    i = n.elem[0];
                return (
                    "static" !== n.position &&
                        ((e = e || ""),
                        t.isInput(i)
                            ? lay(i).val(e)
                            : (n = t.rangeElem)
                            ? ("array" !== layui.type(e) && (e = e.split(" " + t.rangeStr + " ")), n[0].val(e[0] || ""), n[1].val(e[1] || ""))
                            : (0 === lay(i).find("*").length && lay(i).html(e), lay(i).attr("lay-date", e))),
                    t
                );
            }),
            (x.prototype.preview = function () {
                var e,
                    t = this,
                    n = t.config;
                n.isPreview &&
                    ((e = lay(t.elem).find("." + N)),
                    (n = !n.range || (t.rangeLinked ? t.endState : t.endDate) ? t.parse() : ""),
                    e.html(n),
                    e.html() &&
                        (e.css({ color: "#16b777" }),
                        setTimeout(function () {
                            e.css({ color: "#777" });
                        }, 300)));
            }),
            (x.prototype.renderAdditional = function () {
                this.config.fullPanel && this.list("time", 0);
            }),
            (x.prototype.stampRange = function () {
                var i,
                    a = this,
                    o = a.config,
                    r = a.rangeLinked ? a.startDate : o.dateTime,
                    e = lay(a.elem).find("td");
                o.range && !a.endState && lay(a.footer).find(E).addClass(w),
                    (r = r && a.newDate({ year: r.year, month: r.month, date: r.date }).getTime()),
                    (i = a.endState && a.endDate && a.newDate({ year: a.endDate.year, month: a.endDate.month, date: a.endDate.date }).getTime()),
                    lay.each(e, function (e, t) {
                        var n = lay(t).attr("lay-ymd").split("-"),
                            n = a.newDate({ year: n[0], month: n[1] - 1, date: n[2] }).getTime();
                        o.rangeLinked && !a.startDate && n === a.newDate(a.systemDate()).getTime() && lay(t).addClass(lay(t).hasClass(d) || lay(t).hasClass(u) ? "" : "laydate-day-now"),
                            lay(t).removeClass(l + " " + k),
                            (n !== r && n !== i) || ((a.rangeLinked || (!a.rangeLinked && (e < 42 ? n === r : n === i))) && lay(t).addClass(lay(t).hasClass(d) || lay(t).hasClass(u) ? l : k)),
                            r < n && n < i && lay(t).addClass(l);
                    });
            }),
            (x.prototype.done = function (e, t) {
                var n = this,
                    i = n.config,
                    a = lay.extend({}, lay.extend(i.dateTime, n.startTime)),
                    o = lay.extend({}, lay.extend(n.endDate, n.endTime));
                return (
                    lay.each([a, o], function (e, t) {
                        "month" in t && lay.extend(t, { month: t.month + 1 });
                    }),
                    n.preview(),
                    (e = e || [n.parse(), a, o]),
                    "change" === t && n.renderAdditional(),
                    "function" == typeof i[t || "done"] && i[t || "done"].apply(i, e),
                    n
                );
            }),
            (x.prototype.choose = function (e, n) {
                var i, a, t, o, r, l;
                e.hasClass(w) ||
                    ((a = (i = this).config),
                    (t = n),
                    i.rangeLinked && (i.endState || !i.startDate ? ((n = 0), (i.endState = !1), (i.endDate = {})) : ((n = 1), (i.endState = !0))),
                    (o = i.thisDateTime(n)),
                    lay(i.elem).find("td"),
                    (e = { year: 0 | (e = e.attr("lay-ymd").split("-"))[0], month: (0 | e[1]) - 1, date: 0 | e[2] }),
                    lay.extend(o, e),
                    a.range
                        ? (lay.each(["startTime", "endTime"], function (e, t) {
                              (i[t] = i[t] || { hours: e ? 23 : 0, minutes: e ? 59 : 0, seconds: e ? 59 : 0 }),
                                  n === e &&
                                      (i.getDateTime(lay.extend({}, o, i[t])) < i.getDateTime(a.min)
                                          ? ((i[t] = { hours: a.min.hours, minutes: a.min.minutes, seconds: a.min.seconds }), lay.extend(o, i[t]))
                                          : i.getDateTime(lay.extend({}, o, i[t])) > i.getDateTime(a.max) && ((i[t] = { hours: a.max.hours, minutes: a.max.minutes, seconds: a.max.seconds }), lay.extend(o, i[t])));
                          }),
                          n || (i.startDate = lay.extend({}, o)),
                          i.endState &&
                              !i.limit({ date: i.thisDateTime(1 - n) }) &&
                              (((r = i.endState && i.autoCalendarModel.auto ? i.autoCalendarModel() : r) || (i.rangeLinked && i.endState)) &&
                                  i.newDate(i.startDate) > i.newDate(i.endDate) &&
                                  ((e = i.startDate.year === i.endDate.year && i.startDate.month === i.endDate.month && i.startDate.date === i.endDate.date),
                                  (l = i.startDate),
                                  (i.startDate = lay.extend({}, i.endDate, e ? {} : i.startTime)),
                                  (a.dateTime = lay.extend({}, i.startDate)),
                                  (i.endDate = lay.extend({}, l, e ? {} : i.endTime)),
                                  e && ((l = i.startTime), (i.startTime = i.endTime), (i.endTime = l))),
                              r && (a.dateTime = lay.extend({}, i.startDate))),
                          i.rangeLinked
                              ? ((e = lay.extend({}, o)), !t || n || r || ((l = i.getAsYM(o.year, o.month, "sub")), lay.extend(a.dateTime, { year: l[0], month: l[1] })), i.calendar(e, t, r ? "init" : null))
                              : i.calendar(null, n, r ? "init" : null),
                          i.endState && i.done(null, "change"))
                        : "static" === a.position
                        ? i.calendar().done().done(null, "change")
                        : "date" === a.type
                        ? a.autoConfirm
                            ? i.setValue(i.parse()).done().remove()
                            : i.calendar().done(null, "change")
                        : "datetime" === a.type && i.calendar().done(null, "change"));
            }),
            (x.prototype.tool = function (t, e) {
                var n = this,
                    i = n.config,
                    a = n.lang(),
                    o = i.dateTime,
                    r = "static" === i.position,
                    l = {
                        datetime: function () {
                            lay(t).hasClass(w) || (n.list("time", 0), i.range && n.list("time", 1), lay(t).attr("lay-type", "date").html(n.lang().dateTips));
                        },
                        date: function () {
                            n.closeList(), lay(t).attr("lay-type", "datetime").html(n.lang().timeTips);
                        },
                        clear: function () {
                            r && (lay.extend(o, n.firstDate), n.calendar()), i.range && (delete i.dateTime, delete n.endDate, delete n.startTime, delete n.endTime), n.setValue(""), n.done(null, "onClear").done(["", {}, {}]).remove();
                        },
                        now: function () {
                            var e = new Date();
                            if (lay(t).hasClass(w)) return n.hint(a.tools.now + ", " + a.invalidDate);
                            lay.extend(o, n.systemDate(), { hours: e.getHours(), minutes: e.getMinutes(), seconds: e.getSeconds() }), n.setValue(n.parse()), r && n.calendar(), n.done(null, "onNow").done().remove();
                        },
                        confirm: function () {
                            if (i.range) {
                                if (lay(t).hasClass(w)) return n.hint("time" === i.type ? a.timeout.replace(/\u65e5\u671f/g, "thời gian") : a.timeout);
                            } else if (lay(t).hasClass(w)) return n.hint(a.invalidDate);
                            n.setValue(n.parse()), n.done(null, "onConfirm").done().remove();
                        },
                    };
                l[e] && l[e]();
            }),
            (x.prototype.change = function (i) {
                function e(e) {
                    var t = lay(s).find(".laydate-year-list")[0],
                        n = lay(s).find(".laydate-month-list")[0];
                    return (
                        t && ((c[0] = e ? c[0] - 15 : c[0] + 15), a.list("year", i)),
                        n && (e ? c[0]-- : c[0]++, a.list("month", i)),
                        (t || n) && (lay.extend(r, { year: c[0] }), l && (r.year = c[0]), o.range || a.done(null, "change"), o.range || a.limit({ elem: lay(a.footer).find(E), date: { year: c[0] } })),
                        a.setBtnStatus(),
                        t || n
                    );
                }
                var a = this,
                    o = a.config,
                    r = a.thisDateTime(i),
                    l = o.range && ("year" === o.type || "month" === o.type),
                    s = a.elemCont[i || 0],
                    c = a.listYM[i];
                return {
                    prevYear: function () {
                        e("sub") ||
                            (a.rangeLinked
                                ? (o.dateTime.year--, a.checkDate("limit").calendar(null, null, "init"))
                                : (r.year--, a.checkDate("limit").calendar(null, i), a.autoCalendarModel.auto ? a.choose(lay(s).find("td.layui-this"), i) : a.done(null, "change")));
                    },
                    prevMonth: function () {
                        a.rangeLinked && (r = o.dateTime);
                        var e = a.getAsYM(r.year, r.month, "sub");
                        lay.extend(r, { year: e[0], month: e[1] }), a.checkDate("limit").calendar(null, null, "init"), a.rangeLinked || (a.autoCalendarModel.auto ? a.choose(lay(s).find("td.layui-this"), i) : a.done(null, "change"));
                    },
                    nextMonth: function () {
                        a.rangeLinked && (r = o.dateTime);
                        var e = a.getAsYM(r.year, r.month);
                        lay.extend(r, { year: e[0], month: e[1] }), a.checkDate("limit").calendar(null, null, "init"), a.rangeLinked || (a.autoCalendarModel.auto ? a.choose(lay(s).find("td.layui-this"), i) : a.done(null, "change"));
                    },
                    nextYear: function () {
                        e() ||
                            (a.rangeLinked
                                ? (o.dateTime.year++, a.checkDate("limit").calendar(null, 0, "init"))
                                : (r.year++, a.checkDate("limit").calendar(null, i), a.autoCalendarModel.auto ? a.choose(lay(s).find("td.layui-this"), i) : a.done(null, "change")));
                    },
                };
            }),
            (x.prototype.changeEvent = function () {
                var a = this;
                a.config,
                    lay(a.elem)
                        .on("click", function (e) {
                            lay.stope(e);
                        })
                        .on("mousedown", function (e) {
                            lay.stope(e);
                        }),
                    lay.each(a.elemHeader, function (i, e) {
                        lay(e[0]).on("click", function (e) {
                            a.change(i).prevYear();
                        }),
                            lay(e[1]).on("click", function (e) {
                                a.change(i).prevMonth();
                            }),
                            lay(e[2])
                                .find("span")
                                .on("click", function (e) {
                                    var t = (n = lay(this)).attr("lay-ym"),
                                        n = n.attr("lay-type");
                                    t &&
                                        ((t = t.split("-")),
                                        (a.listYM[i] = [0 | t[0], 0 | t[1]]),
                                        a.list(n, i),
                                        lay(a.footer)
                                            .find("." + S)
                                            .addClass(w));
                                }),
                            lay(e[3]).on("click", function (e) {
                                a.change(i).nextMonth();
                            }),
                            lay(e[4]).on("click", function (e) {
                                a.change(i).nextYear();
                            });
                    }),
                    lay.each(a.table, function (e, t) {
                        lay(t)
                            .find("td")
                            .on("click", function () {
                                a.choose(lay(this), e);
                            });
                    }),
                    lay(a.footer)
                        .find("span")
                        .on("click", function () {
                            var e = lay(this).attr("lay-type");
                            a.tool(this, e);
                        });
            }),
            (x.prototype.isInput = function (e) {
                return /input|textarea/.test(e.tagName.toLocaleLowerCase()) || /INPUT|TEXTAREA/.test(e.tagName);
            }),
            (x.prototype.events = function () {
                var e,
                    t = this,
                    n = t.config;
                n.elem[0] &&
                    !n.elem[0].eventHandler &&
                    (n.elem.on(
                        n.trigger,
                        (e = function () {
                            b.thisId !== n.id && t.render();
                        })
                    ),
                    (n.elem[0].eventHandler = !0),
                    n.eventElem.on(n.trigger, e),
                    (t.unbind = function () {
                        t.remove(), n.elem.off(n.trigger, e), n.elem.removeAttr("lay-key"), n.elem.removeAttr(s), (n.elem[0].eventHandler = !1), n.eventElem.off(n.trigger, e), n.eventElem.removeAttr("lay-key"), delete o.that[n.id];
                    }));
            }),
            (o.that = {}),
            (o.getThis = function (e) {
                var t = o.that[e];
                return !t && i && layui.hint().error(e ? n + " instance with ID '" + e + "' not found" : "ID argument required"), t;
            }),
            (r.run = function (i) {
                i(v)
                    .on("mousedown", function (e) {
                        var t, n;
                        b.thisId && (t = o.getThis(b.thisId)) && ((n = t.config), e.target !== n.elem[0] && e.target !== n.eventElem[0] && e.target !== i(n.closeStop)[0] && t.remove());
                    })
                    .on("keydown", function (e) {
                        var t;
                        b.thisId && (t = o.getThis(b.thisId)) && "static" !== t.config.position && 13 === e.keyCode && i("#" + t.elemID)[0] && t.elemID === x.thisElemDate && (e.preventDefault(), i(t.footer).find(E)[0].click());
                    }),
                    i(a).on("resize", function () {
                        if (b.thisId) {
                            var e = o.getThis(b.thisId);
                            if (e) return !(!e.elem || !i(".layui-laydate")[0]) && void e.position();
                        }
                    });
            }),
            (b.render = function (e) {
                return (e = new x(e)), o.call(e);
            }),
            (b.reload = function (e, t) {
                if ((e = o.getThis(e))) return e.reload(t);
            }),
            (b.getInst = function (e) {
                if ((e = o.getThis(e))) return e.inst;
            }),
            (b.hint = function (e, t) {
                if ((e = o.getThis(e))) return e.hint(t);
            }),
            (b.unbind = function (e) {
                if ((e = o.getThis(e))) return e.unbind();
            }),
            (b.close = function (e) {
                if ((e = o.getThis(e || b.thisId))) return e.remove();
            }),
            (b.parse = function (n, i, a) {
                return (
                    (n = n || {}),
                    (i = ((i = "string" == typeof i ? o.formatArr(i) : i) || []).concat()),
                    lay.each(i, function (e, t) {
                        /yyyy|y/.test(t)
                            ? (i[e] = lay.digit(n.year, t.length))
                            : /MM|M/.test(t)
                            ? (i[e] = lay.digit(n.month + (a || 0), t.length))
                            : /dd|d/.test(t)
                            ? (i[e] = lay.digit(n.date, t.length))
                            : /HH|H/.test(t)
                            ? (i[e] = lay.digit(n.hours, t.length))
                            : /mm|m/.test(t)
                            ? (i[e] = lay.digit(n.minutes, t.length))
                            : /ss|s/.test(t) && (i[e] = lay.digit(n.seconds, t.length));
                    }),
                    i.join("")
                );
            }),
            (b.getEndDate = function (e, t) {
                var n = new Date();
                return n.setFullYear(t || n.getFullYear(), e || n.getMonth() + 1, 1), new Date(n.getTime() - 864e5).getDate();
            }),
            i
                ? (b.ready(),
                  layui.define("lay", function (e) {
                      (b.path = layui.cache.dir), r.run(lay), e(n, b);
                  }))
                : "function" == typeof define && define.amd
                ? define(function () {
                      return r.run(lay), b;
                  })
                : (b.ready(), r.run(a.lay), (a.laydate = b));
    })(window, window.document),
    (function (e, t) {
        "object" == typeof module && "object" == typeof module.exports
            ? (module.exports = e.document
                  ? t(e)
                  : function (e) {
                        if (e.document) return t(e);
                        throw new Error("jQuery requires a window with a document");
                    })
            : t(e);
    })("undefined" != typeof window ? window : this, function (k, F) {
        function O(e, t) {
            return t.toUpperCase();
        }
        var u = [],
            h = k.document,
            d = u.slice,
            P = u.concat,
            q = u.push,
            B = u.indexOf,
            R = {},
            W = R.toString,
            y = R.hasOwnProperty,
            m = {},
            e = "1.12.4",
            w = function (e, t) {
                return new w.fn.init(e, t);
            },
            z = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            $ = /^-ms-/,
            Y = /-([\da-z])/gi;
        function V(e) {
            var t = !!e && "length" in e && e.length,
                n = w.type(e);
            return "function" !== n && !w.isWindow(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
        }
        (w.fn = w.prototype = {
            jquery: e,
            constructor: w,
            selector: "",
            length: 0,
            toArray: function () {
                return d.call(this);
            },
            get: function (e) {
                return null != e ? (e < 0 ? this[e + this.length] : this[e]) : d.call(this);
            },
            pushStack: function (e) {
                return ((e = w.merge(this.constructor(), e)).prevObject = this), (e.context = this.context), e;
            },
            each: function (e) {
                return w.each(this, e);
            },
            map: function (n) {
                return this.pushStack(
                    w.map(this, function (e, t) {
                        return n.call(e, t, e);
                    })
                );
            },
            slice: function () {
                return this.pushStack(d.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (e) {
                var t = this.length,
                    e = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= e && e < t ? [this[e]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: q,
            sort: u.sort,
            splice: u.splice,
        }),
            (w.extend = w.fn.extend = function () {
                var e,
                    t,
                    n,
                    i,
                    a,
                    o = arguments[0] || {},
                    r = 1,
                    l = arguments.length,
                    s = !1;
                for ("boolean" == typeof o && ((s = o), (o = arguments[r] || {}), r++), "object" == typeof o || w.isFunction(o) || (o = {}), r === l && ((o = this), r--); r < l; r++)
                    if (null != (i = arguments[r]))
                        for (n in i)
                            (a = o[n]),
                                o !== (t = i[n]) &&
                                    (s && t && (w.isPlainObject(t) || (e = w.isArray(t))) ? ((a = e ? ((e = !1), a && w.isArray(a) ? a : []) : a && w.isPlainObject(a) ? a : {}), (o[n] = w.extend(s, a, t))) : void 0 !== t && (o[n] = t));
                return o;
            }),
            w.extend({
                expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e);
                },
                noop: function () {},
                isFunction: function (e) {
                    return "function" === w.type(e);
                },
                isArray:
                    Array.isArray ||
                    function (e) {
                        return "array" === w.type(e);
                    },
                isWindow: function (e) {
                    return null != e && e == e.window;
                },
                isNumeric: function (e) {
                    var t = e && e.toString();
                    return !w.isArray(e) && 0 <= t - parseFloat(t) + 1;
                },
                isEmptyObject: function (e) {
                    for (var t in e) return !1;
                    return !0;
                },
                isPlainObject: function (e) {
                    if (!e || "object" !== w.type(e) || e.nodeType || w.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1;
                    } catch (e) {
                        return !1;
                    }
                    if (!m.ownFirst) for (var t in e) return y.call(e, t);
                    for (t in e);
                    return void 0 === t || y.call(e, t);
                },
                type: function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? R[W.call(e)] || "object" : typeof e;
                },
                globalEval: function (e) {
                    e &&
                        w.trim(e) &&
                        (
                            k.execScript ||
                            function (e) {
                                k.eval.call(k, e);
                            }
                        )(e);
                },
                camelCase: function (e) {
                    return e.replace($, "ms-").replace(Y, O);
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                },
                each: function (e, t) {
                    var n,
                        i = 0;
                    if (V(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                    else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                    return e;
                },
                trim: function (e) {
                    return null == e ? "" : (e + "").replace(z, "");
                },
                makeArray: function (e, t) {
                    return (t = t || []), null != e && (V(Object(e)) ? w.merge(t, "string" == typeof e ? [e] : e) : q.call(t, e)), t;
                },
                inArray: function (e, t, n) {
                    var i;
                    if (t) {
                        if (B) return B.call(t, e, n);
                        for (i = t.length, n = n ? (n < 0 ? Math.max(0, i + n) : n) : 0; n < i; n++) if (n in t && t[n] === e) return n;
                    }
                    return -1;
                },
                merge: function (e, t) {
                    for (var n = +t.length, i = 0, a = e.length; i < n; ) e[a++] = t[i++];
                    if (n != n) for (; void 0 !== t[i]; ) e[a++] = t[i++];
                    return (e.length = a), e;
                },
                grep: function (e, t, n) {
                    for (var i = [], a = 0, o = e.length, r = !n; a < o; a++) !t(e[a], a) != r && i.push(e[a]);
                    return i;
                },
                map: function (e, t, n) {
                    var i,
                        a,
                        o = 0,
                        r = [];
                    if (V(e)) for (i = e.length; o < i; o++) null != (a = t(e[o], o, n)) && r.push(a);
                    else for (o in e) null != (a = t(e[o], o, n)) && r.push(a);
                    return P.apply([], r);
                },
                guid: 1,
                proxy: function (e, t) {
                    var n, i;
                    return (
                        "string" == typeof t && ((i = e[t]), (t = e), (e = i)),
                        w.isFunction(e)
                            ? ((n = d.call(arguments, 2)),
                              ((i = function () {
                                  return e.apply(t || this, n.concat(d.call(arguments)));
                              }).guid = e.guid = e.guid || w.guid++),
                              i)
                            : void 0
                    );
                },
                now: function () {
                    return +new Date();
                },
                support: m,
            }),
            "function" == typeof Symbol && (w.fn[Symbol.iterator] = u[Symbol.iterator]),
            w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                R["[object " + t + "]"] = t.toLowerCase();
            });
        function i(e, t, n) {
            for (var i = [], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (a && w(e).is(n)) break;
                    i.push(e);
                }
            return i;
        }
        function X(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
        var e = (function (F) {
                function b(e, t) {
                    for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                    return -1;
                }
                function u(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
                }
                function O() {
                    C();
                }
                var e,
                    h,
                    k,
                    o,
                    P,
                    y,
                    q,
                    B,
                    w,
                    s,
                    c,
                    C,
                    T,
                    t,
                    E,
                    m,
                    i,
                    a,
                    g,
                    D = "sizzle" + +new Date(),
                    v = F.document,
                    S = 0,
                    R = 0,
                    W = ce(),
                    z = ce(),
                    N = ce(),
                    $ = function (e, t) {
                        return e === t && (c = !0), 0;
                    },
                    Y = {}.hasOwnProperty,
                    n = [],
                    V = n.pop,
                    X = n.push,
                    L = n.push,
                    U = n.slice,
                    G = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    r = "[\\x20\\t\\r\\n\\f]",
                    l = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    K = "\\[" + r + "*(" + l + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + l + "))|)" + r + "*\\]",
                    J = ":(" + l + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + K + ")*)|.*)\\)|)",
                    Q = new RegExp(r + "+", "g"),
                    A = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
                    Z = new RegExp("^" + r + "*," + r + "*"),
                    ee = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
                    te = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
                    ne = new RegExp(J),
                    ie = new RegExp("^" + l + "$"),
                    f = {
                        ID: new RegExp("^#(" + l + ")"),
                        CLASS: new RegExp("^\\.(" + l + ")"),
                        TAG: new RegExp("^(" + l + "|[*])"),
                        ATTR: new RegExp("^" + K),
                        PSEUDO: new RegExp("^" + J),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + G + ")$", "i"),
                        needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i"),
                    },
                    ae = /^(?:input|select|textarea|button)$/i,
                    oe = /^h\d$/i,
                    d = /^[^{]+\{\s*\[native \w/,
                    re = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    le = /[+~]/,
                    se = /'|\\/g,
                    p = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig");
                try {
                    L.apply((n = U.call(v.childNodes)), v.childNodes), n[v.childNodes.length].nodeType;
                } catch (e) {
                    L = {
                        apply: n.length
                            ? function (e, t) {
                                  X.apply(e, U.call(t));
                              }
                            : function (e, t) {
                                  for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                                  e.length = n - 1;
                              },
                    };
                }
                function I(e, t, n, i) {
                    var a,
                        o,
                        r,
                        l,
                        s,
                        c,
                        d,
                        u,
                        f = t && t.ownerDocument,
                        p = t ? t.nodeType : 9;
                    if (((n = n || []), "string" != typeof e || !e || (1 !== p && 9 !== p && 11 !== p))) return n;
                    if (!i && ((t ? t.ownerDocument || t : v) !== T && C(t), (t = t || T), E)) {
                        if (11 !== p && (c = re.exec(e)))
                            if ((a = c[1])) {
                                if (9 === p) {
                                    if (!(r = t.getElementById(a))) return n;
                                    if (r.id === a) return n.push(r), n;
                                } else if (f && (r = f.getElementById(a)) && g(t, r) && r.id === a) return n.push(r), n;
                            } else {
                                if (c[2]) return L.apply(n, t.getElementsByTagName(e)), n;
                                if ((a = c[3]) && h.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(a)), n;
                            }
                        if (h.qsa && !N[e + " "] && (!m || !m.test(e))) {
                            if (1 !== p) (f = t), (u = e);
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((l = t.getAttribute("id")) ? (l = l.replace(se, "\\$&")) : t.setAttribute("id", (l = D)), o = (d = y(e)).length, s = ie.test(l) ? "#" + l : "[id='" + l + "']"; o--; ) d[o] = s + " " + _(d[o]);
                                (u = d.join(",")), (f = (le.test(e) && fe(t.parentNode)) || t);
                            }
                            if (u)
                                try {
                                    return L.apply(n, f.querySelectorAll(u)), n;
                                } catch (e) {
                                } finally {
                                    l === D && t.removeAttribute("id");
                                }
                        }
                    }
                    return B(e.replace(A, "$1"), t, n, i);
                }
                function ce() {
                    var n = [];
                    function i(e, t) {
                        return n.push(e + " ") > k.cacheLength && delete i[n.shift()], (i[e + " "] = t);
                    }
                    return i;
                }
                function j(e) {
                    return (e[D] = !0), e;
                }
                function x(e) {
                    var t = T.createElement("div");
                    try {
                        return !!e(t);
                    } catch (e) {
                        return !1;
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t);
                    }
                }
                function de(e, t) {
                    for (var n = e.split("|"), i = n.length; i--; ) k.attrHandle[n[i]] = t;
                }
                function ue(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
                    if (i) return i;
                    if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                    return e ? 1 : -1;
                }
                function M(r) {
                    return j(function (o) {
                        return (
                            (o = +o),
                            j(function (e, t) {
                                for (var n, i = r([], e.length, o), a = i.length; a--; ) e[(n = i[a])] && (e[n] = !(t[n] = e[n]));
                            })
                        );
                    });
                }
                function fe(e) {
                    return e && void 0 !== e.getElementsByTagName && e;
                }
                for (e in ((h = I.support = {}),
                (P = I.isXML = function (e) {
                    return !!(e = e && (e.ownerDocument || e).documentElement) && "HTML" !== e.nodeName;
                }),
                (C = I.setDocument = function (e) {
                    return (
                        (e = e ? e.ownerDocument || e : v) !== T &&
                            9 === e.nodeType &&
                            e.documentElement &&
                            ((t = (T = e).documentElement),
                            (E = !P(T)),
                            (e = T.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", O, !1) : e.attachEvent && e.attachEvent("onunload", O)),
                            (h.attributes = x(function (e) {
                                return (e.className = "i"), !e.getAttribute("className");
                            })),
                            (h.getElementsByTagName = x(function (e) {
                                return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length;
                            })),
                            (h.getElementsByClassName = d.test(T.getElementsByClassName)),
                            (h.getById = x(function (e) {
                                return (t.appendChild(e).id = D), !T.getElementsByName || !T.getElementsByName(D).length;
                            })),
                            h.getById
                                ? ((k.find.ID = function (e, t) {
                                      if (void 0 !== t.getElementById && E) return (e = t.getElementById(e)) ? [e] : [];
                                  }),
                                  (k.filter.ID = function (e) {
                                      var t = e.replace(p, u);
                                      return function (e) {
                                          return e.getAttribute("id") === t;
                                      };
                                  }))
                                : (delete k.find.ID,
                                  (k.filter.ID = function (e) {
                                      var t = e.replace(p, u);
                                      return function (e) {
                                          return (e = void 0 !== e.getAttributeNode && e.getAttributeNode("id")) && e.value === t;
                                      };
                                  })),
                            (k.find.TAG = h.getElementsByTagName
                                ? function (e, t) {
                                      return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0;
                                  }
                                : function (e, t) {
                                      var n,
                                          i = [],
                                          a = 0,
                                          o = t.getElementsByTagName(e);
                                      if ("*" !== e) return o;
                                      for (; (n = o[a++]); ) 1 === n.nodeType && i.push(n);
                                      return i;
                                  }),
                            (k.find.CLASS =
                                h.getElementsByClassName &&
                                function (e, t) {
                                    if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e);
                                }),
                            (i = []),
                            (m = []),
                            (h.qsa = d.test(T.querySelectorAll)) &&
                                (x(function (e) {
                                    (t.appendChild(e).innerHTML = "<a id='" + D + "'></a><select id='" + D + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                        e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + r + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || m.push("\\[" + r + "*(?:value|" + G + ")"),
                                        e.querySelectorAll("[id~=" + D + "-]").length || m.push("~="),
                                        e.querySelectorAll(":checked").length || m.push(":checked"),
                                        e.querySelectorAll("a#" + D + "+*").length || m.push(".#.+[+~]");
                                }),
                                x(function (e) {
                                    var t = T.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                        e.appendChild(t).setAttribute("name", "D"),
                                        e.querySelectorAll("[name=d]").length && m.push("name" + r + "*[*^$|!~]?="),
                                        e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"),
                                        e.querySelectorAll("*,:x"),
                                        m.push(",.*:");
                                })),
                            (h.matchesSelector = d.test((a = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.msMatchesSelector))) &&
                                x(function (e) {
                                    (h.disconnectedMatch = a.call(e, "div")), a.call(e, "[s!='']:x"), i.push("!=", J);
                                }),
                            (m = m.length && new RegExp(m.join("|"))),
                            (i = i.length && new RegExp(i.join("|"))),
                            (e = d.test(t.compareDocumentPosition)),
                            (g =
                                e || d.test(t.contains)
                                    ? function (e, t) {
                                          var n = 9 === e.nodeType ? e.documentElement : e;
                                          return e === (t = t && t.parentNode) || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)));
                                      }
                                    : function (e, t) {
                                          if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                          return !1;
                                      }),
                            ($ = e
                                ? function (e, t) {
                                      return e === t
                                          ? ((c = !0), 0)
                                          : !e.compareDocumentPosition - !t.compareDocumentPosition ||
                                                (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!h.sortDetached && t.compareDocumentPosition(e) === n)
                                                    ? e === T || (e.ownerDocument === v && g(v, e))
                                                        ? -1
                                                        : t === T || (t.ownerDocument === v && g(v, t))
                                                        ? 1
                                                        : s
                                                        ? b(s, e) - b(s, t)
                                                        : 0
                                                    : 4 & n
                                                    ? -1
                                                    : 1);
                                      var n;
                                  }
                                : function (e, t) {
                                      if (e === t) return (c = !0), 0;
                                      var n,
                                          i = 0,
                                          a = e.parentNode,
                                          o = t.parentNode,
                                          r = [e],
                                          l = [t];
                                      if (!a || !o) return e === T ? -1 : t === T ? 1 : a ? -1 : o ? 1 : s ? b(s, e) - b(s, t) : 0;
                                      if (a === o) return ue(e, t);
                                      for (n = e; (n = n.parentNode); ) r.unshift(n);
                                      for (n = t; (n = n.parentNode); ) l.unshift(n);
                                      for (; r[i] === l[i]; ) i++;
                                      return i ? ue(r[i], l[i]) : r[i] === v ? -1 : l[i] === v ? 1 : 0;
                                  })),
                        T
                    );
                }),
                (I.matches = function (e, t) {
                    return I(e, null, null, t);
                }),
                (I.matchesSelector = function (e, t) {
                    if (((e.ownerDocument || e) !== T && C(e), (t = t.replace(te, "='$1']")), h.matchesSelector && E && !N[t + " "] && (!i || !i.test(t)) && (!m || !m.test(t))))
                        try {
                            var n = a.call(e, t);
                            if (n || h.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                        } catch (e) {}
                    return 0 < I(t, T, null, [e]).length;
                }),
                (I.contains = function (e, t) {
                    return (e.ownerDocument || e) !== T && C(e), g(e, t);
                }),
                (I.attr = function (e, t) {
                    (e.ownerDocument || e) !== T && C(e);
                    var n = k.attrHandle[t.toLowerCase()];
                    return void 0 !== (n = n && Y.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0) ? n : h.attributes || !E ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
                }),
                (I.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }),
                (I.uniqueSort = function (e) {
                    var t,
                        n = [],
                        i = 0,
                        a = 0;
                    if (((c = !h.detectDuplicates), (s = !h.sortStable && e.slice(0)), e.sort($), c)) {
                        for (; (t = e[a++]); ) t === e[a] && (i = n.push(a));
                        for (; i--; ) e.splice(n[i], 1);
                    }
                    return (s = null), e;
                }),
                (o = I.getText = function (e) {
                    var t,
                        n = "",
                        i = 0,
                        a = e.nodeType;
                    if (a) {
                        if (1 === a || 9 === a || 11 === a) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                        } else if (3 === a || 4 === a) return e.nodeValue;
                    } else for (; (t = e[i++]); ) n += o(t);
                    return n;
                }),
                ((k = I.selectors = {
                    cacheLength: 50,
                    createPseudo: j,
                    match: f,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: {
                        ATTR: function (e) {
                            return (e[1] = e[1].replace(p, u)), (e[3] = (e[3] || e[4] || e[5] || "").replace(p, u)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function (e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && I.error(e[0]),
                                e
                            );
                        },
                        PSEUDO: function (e) {
                            var t,
                                n = !e[6] && e[2];
                            return f.CHILD.test(e[0])
                                ? null
                                : (e[3] ? (e[2] = e[4] || e[5] || "") : n && ne.test(n) && (t = y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(p, u).toLowerCase();
                            return "*" === e
                                ? function () {
                                      return !0;
                                  }
                                : function (e) {
                                      return e.nodeName && e.nodeName.toLowerCase() === t;
                                  };
                        },
                        CLASS: function (e) {
                            var t = W[e + " "];
                            return (
                                t ||
                                ((t = new RegExp("(^|" + r + ")" + e + "(" + r + "|$)")) &&
                                    W(e, function (e) {
                                        return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                    }))
                            );
                        },
                        ATTR: function (t, n, i) {
                            return function (e) {
                                return null == (e = I.attr(e, t))
                                    ? "!=" === n
                                    : !n ||
                                          ((e += ""),
                                          "=" === n
                                              ? e === i
                                              : "!=" === n
                                              ? e !== i
                                              : "^=" === n
                                              ? i && 0 === e.indexOf(i)
                                              : "*=" === n
                                              ? i && -1 < e.indexOf(i)
                                              : "$=" === n
                                              ? i && e.slice(-i.length) === i
                                              : "~=" === n
                                              ? -1 < (" " + e.replace(Q, " ") + " ").indexOf(i)
                                              : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"));
                            };
                        },
                        CHILD: function (h, e, t, y, m) {
                            var g = "nth" !== h.slice(0, 3),
                                v = "last" !== h.slice(-4),
                                x = "of-type" === e;
                            return 1 === y && 0 === m
                                ? function (e) {
                                      return !!e.parentNode;
                                  }
                                : function (e, t, n) {
                                      var i,
                                          a,
                                          o,
                                          r,
                                          l,
                                          s,
                                          c = g != v ? "nextSibling" : "previousSibling",
                                          d = e.parentNode,
                                          u = x && e.nodeName.toLowerCase(),
                                          f = !n && !x,
                                          p = !1;
                                      if (d) {
                                          if (g) {
                                              for (; c; ) {
                                                  for (r = e; (r = r[c]); ) if (x ? r.nodeName.toLowerCase() === u : 1 === r.nodeType) return !1;
                                                  s = c = "only" === h && !s && "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (((s = [v ? d.firstChild : d.lastChild]), v && f)) {
                                              for (
                                                  p = (l = (i = (a = (o = (r = d)[D] || (r[D] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[h] || [])[0] === S && i[1]) && i[2], r = l && d.childNodes[l];
                                                  (r = (++l && r && r[c]) || (p = l = 0) || s.pop());

                                              )
                                                  if (1 === r.nodeType && ++p && r === e) {
                                                      a[h] = [S, l, p];
                                                      break;
                                                  }
                                          } else if (!1 === (p = f ? (l = (i = (a = (o = (r = e)[D] || (r[D] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[h] || [])[0] === S && i[1]) : p))
                                              for (
                                                  ;
                                                  (r = (++l && r && r[c]) || (p = l = 0) || s.pop()) &&
                                                  ((x ? r.nodeName.toLowerCase() !== u : 1 !== r.nodeType) || !++p || (f && ((a = (o = r[D] || (r[D] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[h] = [S, p]), r !== e));

                                              );
                                          return (p -= m) === y || (p % y == 0 && 0 <= p / y);
                                      }
                                  };
                        },
                        PSEUDO: function (e, o) {
                            var t,
                                r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
                            return r[D]
                                ? r(o)
                                : 1 < r.length
                                ? ((t = [e, e, "", o]),
                                  k.setFilters.hasOwnProperty(e.toLowerCase())
                                      ? j(function (e, t) {
                                            for (var n, i = r(e, o), a = i.length; a--; ) e[(n = b(e, i[a]))] = !(t[n] = i[a]);
                                        })
                                      : function (e) {
                                            return r(e, 0, t);
                                        })
                                : r;
                        },
                    },
                    pseudos: {
                        not: j(function (e) {
                            var i = [],
                                a = [],
                                l = q(e.replace(A, "$1"));
                            return l[D]
                                ? j(function (e, t, n, i) {
                                      for (var a, o = l(e, null, i, []), r = e.length; r--; ) (a = o[r]) && (e[r] = !(t[r] = a));
                                  })
                                : function (e, t, n) {
                                      return (i[0] = e), l(i, null, n, a), (i[0] = null), !a.pop();
                                  };
                        }),
                        has: j(function (t) {
                            return function (e) {
                                return 0 < I(t, e).length;
                            };
                        }),
                        contains: j(function (t) {
                            return (
                                (t = t.replace(p, u)),
                                function (e) {
                                    return -1 < (e.textContent || e.innerText || o(e)).indexOf(t);
                                }
                            );
                        }),
                        lang: j(function (n) {
                            return (
                                ie.test(n || "") || I.error("unsupported lang: " + n),
                                (n = n.replace(p, u).toLowerCase()),
                                function (e) {
                                    var t;
                                    do {
                                        if ((t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function (e) {
                            var t = F.location && F.location.hash;
                            return t && t.slice(1) === e.id;
                        },
                        root: function (e) {
                            return e === t;
                        },
                        focus: function (e) {
                            return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled: function (e) {
                            return !1 === e.disabled;
                        },
                        disabled: function (e) {
                            return !0 === e.disabled;
                        },
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (e) {
                            return !k.pseudos.empty(e);
                        },
                        header: function (e) {
                            return oe.test(e.nodeName);
                        },
                        input: function (e) {
                            return ae.test(e.nodeName);
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && "button" === e.type) || "button" === t;
                        },
                        text: function (e) {
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase());
                        },
                        first: M(function () {
                            return [0];
                        }),
                        last: M(function (e, t) {
                            return [t - 1];
                        }),
                        eq: M(function (e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: M(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: M(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: M(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
                            return e;
                        }),
                        gt: M(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                            return e;
                        }),
                    },
                }).pseudos.nth = k.pseudos.eq),
                { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                    k.pseudos[e] = (function (t) {
                        return function (e) {
                            return "input" === e.nodeName.toLowerCase() && e.type === t;
                        };
                    })(e);
                for (e in { submit: !0, reset: !0 })
                    k.pseudos[e] = (function (n) {
                        return function (e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t || "button" === t) && e.type === n;
                        };
                    })(e);
                function pe() {}
                function _(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i;
                }
                function he(r, e, t) {
                    var l = e.dir,
                        s = t && "parentNode" === l,
                        c = R++;
                    return e.first
                        ? function (e, t, n) {
                              for (; (e = e[l]); ) if (1 === e.nodeType || s) return r(e, t, n);
                          }
                        : function (e, t, n) {
                              var i,
                                  a,
                                  o = [S, c];
                              if (n) {
                                  for (; (e = e[l]); ) if ((1 === e.nodeType || s) && r(e, t, n)) return !0;
                              } else
                                  for (; (e = e[l]); )
                                      if (1 === e.nodeType || s) {
                                          if ((i = (a = (a = e[D] || (e[D] = {}))[e.uniqueID] || (a[e.uniqueID] = {}))[l]) && i[0] === S && i[1] === c) return (o[2] = i[2]);
                                          if (((a[l] = o)[2] = r(e, t, n))) return !0;
                                      }
                          };
                }
                function ye(a) {
                    return 1 < a.length
                        ? function (e, t, n) {
                              for (var i = a.length; i--; ) if (!a[i](e, t, n)) return !1;
                              return !0;
                          }
                        : a[0];
                }
                function H(e, t, n, i, a) {
                    for (var o, r = [], l = 0, s = e.length, c = null != t; l < s; l++) !(o = e[l]) || (n && !n(o, i, a)) || (r.push(o), c && t.push(l));
                    return r;
                }
                return (
                    (pe.prototype = k.filters = k.pseudos),
                    (k.setFilters = new pe()),
                    (y = I.tokenize = function (e, t) {
                        var n,
                            i,
                            a,
                            o,
                            r,
                            l,
                            s,
                            c = z[e + " "];
                        if (c) return t ? 0 : c.slice(0);
                        for (r = e, l = [], s = k.preFilter; r; ) {
                            for (o in ((n && !(i = Z.exec(r))) || (i && (r = r.slice(i[0].length) || r), l.push((a = []))),
                            (n = !1),
                            (i = ee.exec(r)) && ((n = i.shift()), a.push({ value: n, type: i[0].replace(A, " ") }), (r = r.slice(n.length))),
                            k.filter))
                                !(i = f[o].exec(r)) || (s[o] && !(i = s[o](i))) || ((n = i.shift()), a.push({ value: n, type: o, matches: i }), (r = r.slice(n.length)));
                            if (!n) break;
                        }
                        return t ? r.length : r ? I.error(e) : z(e, l).slice(0);
                    }),
                    (q = I.compile = function (e, t) {
                        var n,
                            m,
                            g,
                            v,
                            x,
                            i,
                            a = [],
                            o = [],
                            r = N[e + " "];
                        if (!r) {
                            for (n = (t = t || y(e)).length; n--; )
                                ((r = (function e(t) {
                                    for (
                                        var i,
                                            n,
                                            a,
                                            o = t.length,
                                            r = k.relative[t[0].type],
                                            l = r || k.relative[" "],
                                            s = r ? 1 : 0,
                                            c = he(
                                                function (e) {
                                                    return e === i;
                                                },
                                                l,
                                                !0
                                            ),
                                            d = he(
                                                function (e) {
                                                    return -1 < b(i, e);
                                                },
                                                l,
                                                !0
                                            ),
                                            u = [
                                                function (e, t, n) {
                                                    return (e = (!r && (n || t !== w)) || ((i = t).nodeType ? c : d)(e, t, n)), (i = null), e;
                                                },
                                            ];
                                        s < o;
                                        s++
                                    )
                                        if ((n = k.relative[t[s].type])) u = [he(ye(u), n)];
                                        else {
                                            if ((n = k.filter[t[s].type].apply(null, t[s].matches))[D]) {
                                                for (a = ++s; a < o && !k.relative[t[a].type]; a++);
                                                return (function e(p, h, y, m, g, t) {
                                                    return (
                                                        m && !m[D] && (m = e(m)),
                                                        g && !g[D] && (g = e(g, t)),
                                                        j(function (e, t, n, i) {
                                                            var a,
                                                                o,
                                                                r,
                                                                l = [],
                                                                s = [],
                                                                c = t.length,
                                                                d =
                                                                    e ||
                                                                    (function (e, t, n) {
                                                                        for (var i = 0, a = t.length; i < a; i++) I(e, t[i], n);
                                                                        return n;
                                                                    })(h || "*", n.nodeType ? [n] : n, []),
                                                                u = !p || (!e && h) ? d : H(d, l, p, n, i),
                                                                f = y ? (g || (e ? p : c || m) ? [] : t) : u;
                                                            if ((y && y(u, f, n, i), m)) for (a = H(f, s), m(a, [], n, i), o = a.length; o--; ) (r = a[o]) && (f[s[o]] = !(u[s[o]] = r));
                                                            if (e) {
                                                                if (g || p) {
                                                                    if (g) {
                                                                        for (a = [], o = f.length; o--; ) (r = f[o]) && a.push((u[o] = r));
                                                                        g(null, (f = []), a, i);
                                                                    }
                                                                    for (o = f.length; o--; ) (r = f[o]) && -1 < (a = g ? b(e, r) : l[o]) && (e[a] = !(t[a] = r));
                                                                }
                                                            } else (f = H(f === t ? f.splice(c, f.length) : f)), g ? g(null, t, f, i) : L.apply(t, f);
                                                        })
                                                    );
                                                })(
                                                    1 < s && ye(u),
                                                    1 < s && _(t.slice(0, s - 1).concat({ value: " " === t[s - 2].type ? "*" : "" })).replace(A, "$1"),
                                                    n,
                                                    s < a && e(t.slice(s, a)),
                                                    a < o && e((t = t.slice(a))),
                                                    a < o && _(t)
                                                );
                                            }
                                            u.push(n);
                                        }
                                    return ye(u);
                                })(t[n]))[D]
                                    ? a
                                    : o
                                ).push(r);
                            (r = N(
                                e,
                                ((v = 0 < (g = a).length),
                                (x = 0 < (m = o).length),
                                (i = function (e, t, n, i, a) {
                                    var o,
                                        r,
                                        l,
                                        s = 0,
                                        c = "0",
                                        d = e && [],
                                        u = [],
                                        f = w,
                                        p = e || (x && k.find.TAG("*", a)),
                                        h = (S += null == f ? 1 : Math.random() || 0.1),
                                        y = p.length;
                                    for (a && (w = t === T || t || a); c !== y && null != (o = p[c]); c++) {
                                        if (x && o) {
                                            for (r = 0, t || o.ownerDocument === T || (C(o), (n = !E)); (l = m[r++]); )
                                                if (l(o, t || T, n)) {
                                                    i.push(o);
                                                    break;
                                                }
                                            a && (S = h);
                                        }
                                        v && ((o = !l && o) && s--, e && d.push(o));
                                    }
                                    if (((s += c), v && c !== s)) {
                                        for (r = 0; (l = g[r++]); ) l(d, u, t, n);
                                        if (e) {
                                            if (0 < s) for (; c--; ) d[c] || u[c] || (u[c] = V.call(i));
                                            u = H(u);
                                        }
                                        L.apply(i, u), a && !e && 0 < u.length && 1 < s + g.length && I.uniqueSort(i);
                                    }
                                    return a && ((S = h), (w = f)), d;
                                }),
                                v ? j(i) : i)
                            )).selector = e;
                        }
                        return r;
                    }),
                    (B = I.select = function (e, t, n, i) {
                        var a,
                            o,
                            r,
                            l,
                            s,
                            c = "function" == typeof e && e,
                            d = !i && y((e = c.selector || e));
                        if (((n = n || []), 1 === d.length)) {
                            if (2 < (o = d[0] = d[0].slice(0)).length && "ID" === (r = o[0]).type && h.getById && 9 === t.nodeType && E && k.relative[o[1].type]) {
                                if (!(t = (k.find.ID(r.matches[0].replace(p, u), t) || [])[0])) return n;
                                c && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                            }
                            for (a = f.needsContext.test(e) ? 0 : o.length; a-- && ((r = o[a]), !k.relative[(l = r.type)]); )
                                if ((s = k.find[l]) && (i = s(r.matches[0].replace(p, u), (le.test(o[0].type) && fe(t.parentNode)) || t))) {
                                    if ((o.splice(a, 1), (e = i.length && _(o)))) break;
                                    return L.apply(n, i), n;
                                }
                        }
                        return (c || q(e, d))(i, t, !E, n, !t || (le.test(e) && fe(t.parentNode)) || t), n;
                    }),
                    (h.sortStable = D.split("").sort($).join("") === D),
                    (h.detectDuplicates = !!c),
                    C(),
                    (h.sortDetached = x(function (e) {
                        return 1 & e.compareDocumentPosition(T.createElement("div"));
                    })),
                    x(function (e) {
                        return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                    }) ||
                        de("type|href|height|width", function (e, t, n) {
                            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                        }),
                    (h.attributes &&
                        x(function (e) {
                            return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                        })) ||
                        de("value", function (e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                        }),
                    x(function (e) {
                        return null == e.getAttribute("disabled");
                    }) ||
                        de(G, function (e, t, n) {
                            if (!n) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
                        }),
                    I
                );
            })(k),
            U = ((w.find = e), (w.expr = e.selectors), (w.expr[":"] = w.expr.pseudos), (w.uniqueSort = w.unique = e.uniqueSort), (w.text = e.getText), (w.isXMLDoc = e.isXML), (w.contains = e.contains), w.expr.match.needsContext),
            G = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            K = /^.[^:#\[\.,]*$/;
        function J(e, n, i) {
            if (w.isFunction(n))
                return w.grep(e, function (e, t) {
                    return !!n.call(e, t, e) !== i;
                });
            if (n.nodeType)
                return w.grep(e, function (e) {
                    return (e === n) !== i;
                });
            if ("string" == typeof n) {
                if (K.test(n)) return w.filter(n, e, i);
                n = w.filter(n, e);
            }
            return w.grep(e, function (e) {
                return -1 < w.inArray(e, n) !== i;
            });
        }
        (w.filter = function (e, t, n) {
            var i = t[0];
            return (
                n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === i.nodeType
                    ? w.find.matchesSelector(i, e)
                        ? [i]
                        : []
                    : w.find.matches(
                          e,
                          w.grep(t, function (e) {
                              return 1 === e.nodeType;
                          })
                      )
            );
        }),
            w.fn.extend({
                find: function (e) {
                    var t,
                        n = [],
                        i = this,
                        a = i.length;
                    if ("string" != typeof e)
                        return this.pushStack(
                            w(e).filter(function () {
                                for (t = 0; t < a; t++) if (w.contains(i[t], this)) return !0;
                            })
                        );
                    for (t = 0; t < a; t++) w.find(e, i[t], n);
                    return ((n = this.pushStack(1 < a ? w.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e), n;
                },
                filter: function (e) {
                    return this.pushStack(J(this, e || [], !1));
                },
                not: function (e) {
                    return this.pushStack(J(this, e || [], !0));
                },
                is: function (e) {
                    return !!J(this, "string" == typeof e && U.test(e) ? w(e) : e || [], !1).length;
                },
            });
        var Q,
            Z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ee =
                (((w.fn.init = function (e, t, n) {
                    if (!e) return this;
                    if (((n = n || Q), "string" != typeof e))
                        return e.nodeType
                            ? ((this.context = this[0] = e), (this.length = 1), this)
                            : w.isFunction(e)
                            ? void 0 !== n.ready
                                ? n.ready(e)
                                : e(w)
                            : (void 0 !== e.selector && ((this.selector = e.selector), (this.context = e.context)), w.makeArray(e, this));
                    if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Z.exec(e)) || (!i[1] && t)) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                    if (i[1]) {
                        if (((t = t instanceof w ? t[0] : t), w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : h, !0)), G.test(i[1]) && w.isPlainObject(t)))
                            for (var i in t) w.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this;
                    }
                    if ((n = h.getElementById(i[2])) && n.parentNode) {
                        if (n.id !== i[2]) return Q.find(e);
                        (this.length = 1), (this[0] = n);
                    }
                    return (this.context = h), (this.selector = e), this;
                }).prototype = w.fn),
                (Q = w(h)),
                /^(?:parents|prev(?:Until|All))/),
            te = { children: !0, contents: !0, next: !0, prev: !0 };
        function ne(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
        }
        w.fn.extend({
            has: function (e) {
                var t,
                    n = w(e, this),
                    i = n.length;
                return this.filter(function () {
                    for (t = 0; t < i; t++) if (w.contains(this, n[t])) return !0;
                });
            },
            closest: function (e, t) {
                for (var n, i = 0, a = this.length, o = [], r = U.test(e) || "string" != typeof e ? w(e, t || this.context) : 0; i < a; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (r ? -1 < r.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
                return this.pushStack(1 < o.length ? w.uniqueSort(o) : o);
            },
            index: function (e) {
                return e ? ("string" == typeof e ? w.inArray(this[0], w(e)) : w.inArray(e.jquery ? e[0] : e, this)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function (e, t) {
                return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            },
        }),
            w.each(
                {
                    parent: function (e) {
                        return (e = e.parentNode) && 11 !== e.nodeType ? e : null;
                    },
                    parents: function (e) {
                        return i(e, "parentNode");
                    },
                    parentsUntil: function (e, t, n) {
                        return i(e, "parentNode", n);
                    },
                    next: function (e) {
                        return ne(e, "nextSibling");
                    },
                    prev: function (e) {
                        return ne(e, "previousSibling");
                    },
                    nextAll: function (e) {
                        return i(e, "nextSibling");
                    },
                    prevAll: function (e) {
                        return i(e, "previousSibling");
                    },
                    nextUntil: function (e, t, n) {
                        return i(e, "nextSibling", n);
                    },
                    prevUntil: function (e, t, n) {
                        return i(e, "previousSibling", n);
                    },
                    siblings: function (e) {
                        return X((e.parentNode || {}).firstChild, e);
                    },
                    children: function (e) {
                        return X(e.firstChild);
                    },
                    contents: function (e) {
                        return w.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : w.merge([], e.childNodes);
                    },
                },
                function (i, a) {
                    w.fn[i] = function (e, t) {
                        var n = w.map(this, a, e);
                        return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = w.filter(t, n)), 1 < this.length && (te[i] || (n = w.uniqueSort(n)), ee.test(i) && (n = n.reverse())), this.pushStack(n);
                    };
                }
            );
        var ie,
            ae,
            C = /\S+/g;
        function oe() {
            h.addEventListener ? (h.removeEventListener("DOMContentLoaded", t), k.removeEventListener("load", t)) : (h.detachEvent("onreadystatechange", t), k.detachEvent("onload", t));
        }
        function t() {
            (!h.addEventListener && "load" !== k.event.type && "complete" !== h.readyState) || (oe(), w.ready());
        }
        for (ae in ((w.Callbacks = function (i) {
            var e, n;
            i =
                "string" == typeof i
                    ? ((e = i),
                      (n = {}),
                      w.each(e.match(C) || [], function (e, t) {
                          n[t] = !0;
                      }),
                      n)
                    : w.extend({}, i);
            function a() {
                for (l = i.once, r = o = !0; c.length; d = -1) for (t = c.shift(); ++d < s.length; ) !1 === s[d].apply(t[0], t[1]) && i.stopOnFalse && ((d = s.length), (t = !1));
                i.memory || (t = !1), (o = !1), l && (s = t ? [] : "");
            }
            var o,
                t,
                r,
                l,
                s = [],
                c = [],
                d = -1,
                u = {
                    add: function () {
                        return (
                            s &&
                                (t && !o && ((d = s.length - 1), c.push(t)),
                                (function n(e) {
                                    w.each(e, function (e, t) {
                                        w.isFunction(t) ? (i.unique && u.has(t)) || s.push(t) : t && t.length && "string" !== w.type(t) && n(t);
                                    });
                                })(arguments),
                                t && !o && a()),
                            this
                        );
                    },
                    remove: function () {
                        return (
                            w.each(arguments, function (e, t) {
                                for (var n; -1 < (n = w.inArray(t, s, n)); ) s.splice(n, 1), n <= d && d--;
                            }),
                            this
                        );
                    },
                    has: function (e) {
                        return e ? -1 < w.inArray(e, s) : 0 < s.length;
                    },
                    empty: function () {
                        return (s = s && []), this;
                    },
                    disable: function () {
                        return (l = c = []), (s = t = ""), this;
                    },
                    disabled: function () {
                        return !s;
                    },
                    lock: function () {
                        return (l = !0), t || u.disable(), this;
                    },
                    locked: function () {
                        return !!l;
                    },
                    fireWith: function (e, t) {
                        return l || ((t = [e, (t = t || []).slice ? t.slice() : t]), c.push(t), o || a()), this;
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this;
                    },
                    fired: function () {
                        return !!r;
                    },
                };
            return u;
        }),
        w.extend({
            Deferred: function (e) {
                var o = [
                        ["resolve", "done", w.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", w.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", w.Callbacks("memory")],
                    ],
                    a = "pending",
                    r = {
                        state: function () {
                            return a;
                        },
                        always: function () {
                            return l.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var a = arguments;
                            return w
                                .Deferred(function (i) {
                                    w.each(o, function (e, t) {
                                        var n = w.isFunction(a[e]) && a[e];
                                        l[t[1]](function () {
                                            var e = n && n.apply(this, arguments);
                                            e && w.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this === r ? i.promise() : this, n ? [e] : arguments);
                                        });
                                    }),
                                        (a = null);
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? w.extend(e, r) : r;
                        },
                    },
                    l = {};
                return (
                    (r.pipe = r.then),
                    w.each(o, function (e, t) {
                        var n = t[2],
                            i = t[3];
                        (r[t[1]] = n.add),
                            i &&
                                n.add(
                                    function () {
                                        a = i;
                                    },
                                    o[1 ^ e][2].disable,
                                    o[2][2].lock
                                ),
                            (l[t[0]] = function () {
                                return l[t[0] + "With"](this === l ? r : this, arguments), this;
                            }),
                            (l[t[0] + "With"] = n.fireWith);
                    }),
                    r.promise(l),
                    e && e.call(l, l),
                    l
                );
            },
            when: function (e) {
                function t(t, n, i) {
                    return function (e) {
                        (n[t] = this), (i[t] = 1 < arguments.length ? d.call(arguments) : e), i === a ? c.notifyWith(n, i) : --s || c.resolveWith(n, i);
                    };
                }
                var a,
                    n,
                    i,
                    o = 0,
                    r = d.call(arguments),
                    l = r.length,
                    s = 1 !== l || (e && w.isFunction(e.promise)) ? l : 0,
                    c = 1 === s ? e : w.Deferred();
                if (1 < l) for (a = new Array(l), n = new Array(l), i = new Array(l); o < l; o++) r[o] && w.isFunction(r[o].promise) ? r[o].promise().progress(t(o, n, a)).done(t(o, i, r)).fail(c.reject) : --s;
                return s || c.resolveWith(i, r), c.promise();
            },
        }),
        (w.fn.ready = function (e) {
            return w.ready.promise().done(e), this;
        }),
        w.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? w.readyWait++ : w.ready(!0);
            },
            ready: function (e) {
                (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0) !== e && 0 < --w.readyWait) || (ie.resolveWith(h, [w]), w.fn.triggerHandler && (w(h).triggerHandler("ready"), w(h).off("ready")));
            },
        }),
        (w.ready.promise = function (e) {
            if (!ie)
                if (((ie = w.Deferred()), "complete" === h.readyState || ("loading" !== h.readyState && !h.documentElement.doScroll))) k.setTimeout(w.ready);
                else if (h.addEventListener) h.addEventListener("DOMContentLoaded", t), k.addEventListener("load", t);
                else {
                    h.attachEvent("onreadystatechange", t), k.attachEvent("onload", t);
                    var n = !1;
                    try {
                        n = null == k.frameElement && h.documentElement;
                    } catch (e) {}
                    n &&
                        n.doScroll &&
                        !(function t() {
                            if (!w.isReady) {
                                try {
                                    n.doScroll("left");
                                } catch (e) {
                                    return k.setTimeout(t, 50);
                                }
                                oe(), w.ready();
                            }
                        })();
                }
            return ie.promise(e);
        }),
        w.ready.promise(),
        w(m)))
            break;
        (m.ownFirst = "0" === ae),
            (m.inlineBlockNeedsLayout = !1),
            w(function () {
                var e,
                    t,
                    n = h.getElementsByTagName("body")[0];
                n &&
                    n.style &&
                    ((e = h.createElement("div")),
                    ((t = h.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                    n.appendChild(t).appendChild(e),
                    void 0 !== e.style.zoom && ((e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"), (m.inlineBlockNeedsLayout = e = 3 === e.offsetWidth), e && (n.style.zoom = 1)),
                    n.removeChild(t));
            }),
            (e = h.createElement("div")),
            (m.deleteExpando = !0);
        try {
            delete e.test;
        } catch (e) {
            m.deleteExpando = !1;
        }
        function g(e) {
            var t = w.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || (!0 !== t && e.getAttribute("classid") === t));
        }
        var a,
            re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            le = /([A-Z])/g;
        function se(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(le, "-$1").toLowerCase();
                if ("string" == typeof (n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || ("false" !== n && ("null" === n ? null : +n + "" === n ? +n : re.test(n) ? w.parseJSON(n) : n));
                    } catch (e) {}
                    w.data(e, t, n);
                } else n = void 0;
            }
            return n;
        }
        function ce(e) {
            for (var t in e) if (("data" !== t || !w.isEmptyObject(e[t])) && "toJSON" !== t) return;
            return 1;
        }
        function de(e, t, n, i) {
            if (g(e)) {
                var a,
                    o = w.expando,
                    r = e.nodeType,
                    l = r ? w.cache : e,
                    s = r ? e[o] : e[o] && o;
                if ((s && l[s] && (i || l[s].data)) || void 0 !== n || "string" != typeof t)
                    return (
                        l[(s = s || (r ? (e[o] = u.pop() || w.guid++) : o))] || (l[s] = r ? {} : { toJSON: w.noop }),
                        ("object" != typeof t && "function" != typeof t) || (i ? (l[s] = w.extend(l[s], t)) : (l[s].data = w.extend(l[s].data, t))),
                        (e = l[s]),
                        i || (e.data || (e.data = {}), (e = e.data)),
                        void 0 !== n && (e[w.camelCase(t)] = n),
                        "string" == typeof t ? null == (a = e[t]) && (a = e[w.camelCase(t)]) : (a = e),
                        a
                    );
            }
        }
        function ue(e, t, n) {
            if (g(e)) {
                var i,
                    a,
                    o = e.nodeType,
                    r = o ? w.cache : e,
                    l = o ? e[w.expando] : w.expando;
                if (r[l]) {
                    if (t && (i = n ? r[l] : r[l].data)) {
                        a = (t = w.isArray(t) ? t.concat(w.map(t, w.camelCase)) : t in i || (t = w.camelCase(t)) in i ? [t] : t.split(" ")).length;
                        for (; a--; ) delete i[t[a]];
                        if (n ? !ce(i) : !w.isEmptyObject(i)) return;
                    }
                    (n || (delete r[l].data, ce(r[l]))) && (o ? w.cleanData([e], !0) : m.deleteExpando || r != r.window ? delete r[l] : (r[l] = void 0));
                }
            }
        }
        w.extend({
            cache: {},
            noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" },
            hasData: function (e) {
                return !!(e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando]) && !ce(e);
            },
            data: function (e, t, n) {
                return de(e, t, n);
            },
            removeData: function (e, t) {
                return ue(e, t);
            },
            _data: function (e, t, n) {
                return de(e, t, n, !0);
            },
            _removeData: function (e, t) {
                return ue(e, t, !0);
            },
        }),
            w.fn.extend({
                data: function (e, t) {
                    var n,
                        i,
                        a,
                        o = this[0],
                        r = o && o.attributes;
                    if (void 0 !== e)
                        return "object" == typeof e
                            ? this.each(function () {
                                  w.data(this, e);
                              })
                            : 1 < arguments.length
                            ? this.each(function () {
                                  w.data(this, e, t);
                              })
                            : o
                            ? se(o, e, w.data(o, e))
                            : void 0;
                    if (this.length && ((a = w.data(o)), 1 === o.nodeType && !w._data(o, "parsedAttrs"))) {
                        for (n = r.length; n--; ) r[n] && 0 === (i = r[n].name).indexOf("data-") && se(o, (i = w.camelCase(i.slice(5))), a[i]);
                        w._data(o, "parsedAttrs", !0);
                    }
                    return a;
                },
                removeData: function (e) {
                    return this.each(function () {
                        w.removeData(this, e);
                    });
                },
            }),
            w.extend({
                queue: function (e, t, n) {
                    var i;
                    if (e) return (i = w._data(e, (t = (t || "fx") + "queue"))), n && (!i || w.isArray(n) ? (i = w._data(e, t, w.makeArray(n))) : i.push(n)), i || [];
                },
                dequeue: function (e, t) {
                    t = t || "fx";
                    var n = w.queue(e, t),
                        i = n.length,
                        a = n.shift(),
                        o = w._queueHooks(e, t);
                    "inprogress" === a && ((a = n.shift()), i--),
                        a &&
                            ("fx" === t && n.unshift("inprogress"),
                            delete o.stop,
                            a.call(
                                e,
                                function () {
                                    w.dequeue(e, t);
                                },
                                o
                            )),
                        !i && o && o.empty.fire();
                },
                _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return (
                        w._data(e, n) ||
                        w._data(e, n, {
                            empty: w.Callbacks("once memory").add(function () {
                                w._removeData(e, t + "queue"), w._removeData(e, n);
                            }),
                        })
                    );
                },
            }),
            w.fn.extend({
                queue: function (t, n) {
                    var e = 2;
                    return (
                        "string" != typeof t && ((n = t), (t = "fx"), e--),
                        arguments.length < e
                            ? w.queue(this[0], t)
                            : void 0 === n
                            ? this
                            : this.each(function () {
                                  var e = w.queue(this, t, n);
                                  w._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && w.dequeue(this, t);
                              })
                    );
                },
                dequeue: function (e) {
                    return this.each(function () {
                        w.dequeue(this, e);
                    });
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", []);
                },
                promise: function (e, t) {
                    function n() {
                        --a || o.resolveWith(r, [r]);
                    }
                    var i,
                        a = 1,
                        o = w.Deferred(),
                        r = this,
                        l = this.length;
                    for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; l--; ) (i = w._data(r[l], e + "queueHooks")) && i.empty && (a++, i.empty.add(n));
                    return n(), o.promise(t);
                },
            }),
            (m.shrinkWrapBlocks = function () {
                return null != a
                    ? a
                    : ((a = !1),
                      (t = h.getElementsByTagName("body")[0]) && t.style
                          ? ((e = h.createElement("div")),
                            ((n = h.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                            t.appendChild(n).appendChild(e),
                            void 0 !== e.style.zoom &&
                                ((e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                                (e.appendChild(h.createElement("div")).style.width = "5px"),
                                (a = 3 !== e.offsetWidth)),
                            t.removeChild(n),
                            a)
                          : void 0);
                var e, t, n;
            });
        function fe(e, t) {
            return "none" === w.css((e = t || e), "display") || !w.contains(e.ownerDocument, e);
        }
        var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            pe = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
            l = ["Top", "Right", "Bottom", "Left"];
        function he(e, t, n, i) {
            var a,
                o = 1,
                r = 20,
                l = i
                    ? function () {
                          return i.cur();
                      }
                    : function () {
                          return w.css(e, t, "");
                      },
                s = l(),
                c = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
                d = (w.cssNumber[t] || ("px" !== c && +s)) && pe.exec(w.css(e, t));
            if (d && d[3] !== c) for (c = c || d[3], n = n || [], d = +s || 1; (d /= o = o || ".5"), w.style(e, t, d + c), o !== (o = l() / s) && 1 !== o && --r; );
            return n && ((d = +d || +s || 0), (a = n[1] ? d + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = c), (i.start = d), (i.end = a))), a;
        }
        function f(e, t, n, i, a, o, r) {
            var l = 0,
                s = e.length,
                c = null == n;
            if ("object" === w.type(n)) for (l in ((a = !0), n)) f(e, t, l, n[l], !0, o, r);
            else if (
                void 0 !== i &&
                ((a = !0),
                w.isFunction(i) || (r = !0),
                (t = c
                    ? r
                        ? (t.call(e, i), null)
                        : ((c = t),
                          function (e, t, n) {
                              return c.call(w(e), n);
                          })
                    : t))
            )
                for (; l < s; l++) t(e[l], n, r ? i : i.call(e[l], l, t(e[l], n)));
            return a ? e : c ? t.call(e) : s ? t(e[0], n) : o;
        }
        var ye = /^(?:checkbox|radio)$/i,
            me = /<([\w:-]+)/,
            ge = /^$|\/(?:java|ecma)script/i,
            ve = /^\s+/,
            xe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        function be(e) {
            var t = xe.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement) for (; t.length; ) n.createElement(t.pop());
            return n;
        }
        (S = h.createElement("div")),
            (D = h.createDocumentFragment()),
            (M = h.createElement("input")),
            (S.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
            (m.leadingWhitespace = 3 === S.firstChild.nodeType),
            (m.tbody = !S.getElementsByTagName("tbody").length),
            (m.htmlSerialize = !!S.getElementsByTagName("link").length),
            (m.html5Clone = "<:nav></:nav>" !== h.createElement("nav").cloneNode(!0).outerHTML),
            (M.type = "checkbox"),
            (M.checked = !0),
            D.appendChild(M),
            (m.appendChecked = M.checked),
            (S.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!S.cloneNode(!0).lastChild.defaultValue),
            D.appendChild(S),
            (M = h.createElement("input")).setAttribute("type", "radio"),
            M.setAttribute("checked", "checked"),
            M.setAttribute("name", "t"),
            S.appendChild(M),
            (m.checkClone = S.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (m.noCloneEvent = !!S.addEventListener),
            (S[w.expando] = 1),
            (m.attributes = !S.getAttribute(w.expando));
        var v = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: m.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
        };
        function x(e, t) {
            var n,
                i,
                a = 0,
                o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
            if (!o) for (o = [], n = e.childNodes || e; null != (i = n[a]); a++) !t || w.nodeName(i, t) ? o.push(i) : w.merge(o, x(i, t));
            return void 0 === t || (t && w.nodeName(e, t)) ? w.merge([e], o) : o;
        }
        function ke(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) w._data(n, "globalEval", !t || w._data(t[i], "globalEval"));
        }
        (v.optgroup = v.option), (v.tbody = v.tfoot = v.colgroup = v.caption = v.thead), (v.th = v.td);
        var we = /<|&#?\w+;/,
            Ce = /<tbody/i;
        function Te(e) {
            ye.test(e.type) && (e.defaultChecked = e.checked);
        }
        function Ee(e, t, n, i, a) {
            for (var o, r, l, s, c, d, u, f = e.length, p = be(t), h = [], y = 0; y < f; y++)
                if ((r = e[y]) || 0 === r)
                    if ("object" === w.type(r)) w.merge(h, r.nodeType ? [r] : r);
                    else if (we.test(r)) {
                        for (s = s || p.appendChild(t.createElement("div")), c = (me.exec(r) || ["", ""])[1].toLowerCase(), u = v[c] || v._default, s.innerHTML = u[1] + w.htmlPrefilter(r) + u[2], o = u[0]; o--; ) s = s.lastChild;
                        if ((!m.leadingWhitespace && ve.test(r) && h.push(t.createTextNode(ve.exec(r)[0])), !m.tbody))
                            for (o = (r = "table" !== c || Ce.test(r) ? ("<table>" !== u[1] || Ce.test(r) ? 0 : s) : s.firstChild) && r.childNodes.length; o--; )
                                w.nodeName((d = r.childNodes[o]), "tbody") && !d.childNodes.length && r.removeChild(d);
                        for (w.merge(h, s.childNodes), s.textContent = ""; s.firstChild; ) s.removeChild(s.firstChild);
                        s = p.lastChild;
                    } else h.push(t.createTextNode(r));
            for (s && p.removeChild(s), m.appendChecked || w.grep(x(h, "input"), Te), y = 0; (r = h[y++]); )
                if (i && -1 < w.inArray(r, i)) a && a.push(r);
                else if (((l = w.contains(r.ownerDocument, r)), (s = x(p.appendChild(r), "script")), l && ke(s), n)) for (o = 0; (r = s[o++]); ) ge.test(r.type || "") && n.push(r);
            return (s = null), p;
        }
        var De,
            Se,
            Ne = h.createElement("div");
        for (De in { submit: !0, change: !0, focusin: !0 }) (m[De] = (Se = "on" + De) in k) || (Ne.setAttribute(Se, "t"), (m[De] = !1 === Ne.attributes[Se].expando));
        var Le = /^(?:input|select|textarea)$/i,
            Ae = /^key/,
            Ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            je = /^(?:focusinfocus|focusoutblur)$/,
            Me = /^([^.]*)(?:\.(.+)|)/;
        function _e() {
            return !0;
        }
        function s() {
            return !1;
        }
        function He() {
            try {
                return h.activeElement;
            } catch (e) {}
        }
        function Fe(e, t, n, i, a, o) {
            var r, l;
            if ("object" == typeof t) {
                for (l in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) Fe(e, l, n, i, t[l], o);
                return e;
            }
            if ((null == i && null == a ? ((a = n), (i = n = void 0)) : null == a && ("string" == typeof n ? ((a = i), (i = void 0)) : ((a = i), (i = n), (n = void 0))), !1 === a)) a = s;
            else if (!a) return e;
            return (
                1 === o &&
                    ((r = a),
                    ((a = function (e) {
                        return w().off(e), r.apply(this, arguments);
                    }).guid = r.guid || (r.guid = w.guid++))),
                e.each(function () {
                    w.event.add(this, t, a, i, n);
                })
            );
        }
        (w.event = {
            global: {},
            add: function (e, t, n, i, a) {
                var o,
                    r,
                    l,
                    s,
                    c,
                    d,
                    u,
                    f,
                    p,
                    h = w._data(e);
                if (h)
                    for (
                        n.handler && ((n = (l = n).handler), (a = l.selector)),
                            n.guid || (n.guid = w.guid++),
                            (o = h.events) || (o = h.events = {}),
                            (c = h.handle) ||
                                ((c = h.handle = function (e) {
                                    return void 0 === w || (e && w.event.triggered === e.type) ? void 0 : w.event.dispatch.apply(c.elem, arguments);
                                }).elem = e),
                            r = (t = (t || "").match(C) || [""]).length;
                        r--;

                    )
                        (u = p = (f = Me.exec(t[r]) || [])[1]),
                            (f = (f[2] || "").split(".").sort()),
                            u &&
                                ((s = w.event.special[u] || {}),
                                (u = (a ? s.delegateType : s.bindType) || u),
                                (s = w.event.special[u] || {}),
                                (p = w.extend({ type: u, origType: p, data: i, handler: n, guid: n.guid, selector: a, needsContext: a && w.expr.match.needsContext.test(a), namespace: f.join(".") }, l)),
                                (d = o[u]) || (((d = o[u] = []).delegateCount = 0), (s.setup && !1 !== s.setup.call(e, i, f, c)) || (e.addEventListener ? e.addEventListener(u, c, !1) : e.attachEvent && e.attachEvent("on" + u, c))),
                                s.add && (s.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)),
                                a ? d.splice(d.delegateCount++, 0, p) : d.push(p),
                                (w.event.global[u] = !0));
            },
            remove: function (e, t, n, i, a) {
                var o,
                    r,
                    l,
                    s,
                    c,
                    d,
                    u,
                    f,
                    p,
                    h,
                    y,
                    m = w.hasData(e) && w._data(e);
                if (m && (d = m.events)) {
                    for (c = (t = (t || "").match(C) || [""]).length; c--; )
                        if (((p = y = (l = Me.exec(t[c]) || [])[1]), (h = (l[2] || "").split(".").sort()), p)) {
                            for (u = w.event.special[p] || {}, f = d[(p = (i ? u.delegateType : u.bindType) || p)] || [], l = l[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--; )
                                (r = f[o]),
                                    (!a && y !== r.origType) ||
                                        (n && n.guid !== r.guid) ||
                                        (l && !l.test(r.namespace)) ||
                                        (i && i !== r.selector && ("**" !== i || !r.selector)) ||
                                        (f.splice(o, 1), r.selector && f.delegateCount--, u.remove && u.remove.call(e, r));
                            s && !f.length && ((u.teardown && !1 !== u.teardown.call(e, h, m.handle)) || w.removeEvent(e, p, m.handle), delete d[p]);
                        } else for (p in d) w.event.remove(e, p + t[c], n, i, !0);
                    w.isEmptyObject(d) && (delete m.handle, w._removeData(e, "events"));
                }
            },
            trigger: function (e, t, n, i) {
                var a,
                    o,
                    r,
                    l,
                    s,
                    c,
                    d = [n || h],
                    u = y.call(e, "type") ? e.type : e,
                    f = y.call(e, "namespace") ? e.namespace.split(".") : [],
                    p = (s = n = n || h);
                if (
                    3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !je.test(u + w.event.triggered) &&
                    (-1 < u.indexOf(".") && ((u = (f = u.split(".")).shift()), f.sort()),
                    (o = u.indexOf(":") < 0 && "on" + u),
                    ((e = e[w.expando] ? e : new w.Event(u, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
                    (e.namespace = f.join(".")),
                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : w.makeArray(t, [e])),
                    (l = w.event.special[u] || {}),
                    i || !l.trigger || !1 !== l.trigger.apply(n, t))
                ) {
                    if (!i && !l.noBubble && !w.isWindow(n)) {
                        for (r = l.delegateType || u, je.test(r + u) || (p = p.parentNode); p; p = p.parentNode) d.push(p), (s = p);
                        s === (n.ownerDocument || h) && d.push(s.defaultView || s.parentWindow || k);
                    }
                    for (c = 0; (p = d[c++]) && !e.isPropagationStopped(); )
                        (e.type = 1 < c ? r : l.bindType || u),
                            (a = (w._data(p, "events") || {})[e.type] && w._data(p, "handle")) && a.apply(p, t),
                            (a = o && p[o]) && a.apply && g(p) && ((e.result = a.apply(p, t)), !1 === e.result && e.preventDefault());
                    if (((e.type = u), !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && g(n) && o && n[u] && !w.isWindow(n))) {
                        (s = n[o]) && (n[o] = null), (w.event.triggered = u);
                        try {
                            n[u]();
                        } catch (e) {}
                        (w.event.triggered = void 0), s && (n[o] = s);
                    }
                    return e.result;
                }
            },
            dispatch: function (e) {
                e = w.event.fix(e);
                var t,
                    n,
                    i,
                    a,
                    o,
                    r = d.call(arguments),
                    l = (w._data(this, "events") || {})[e.type] || [],
                    s = w.event.special[e.type] || {};
                if ((((r[0] = e).delegateTarget = this), !s.preDispatch || !1 !== s.preDispatch.call(this, e))) {
                    for (o = w.event.handlers.call(this, e, l), t = 0; (i = o[t++]) && !e.isPropagationStopped(); )
                        for (e.currentTarget = i.elem, n = 0; (a = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                            (e.rnamespace && !e.rnamespace.test(a.namespace)) ||
                                ((e.handleObj = a), (e.data = a.data), void 0 !== (a = ((w.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, r)) && !1 === (e.result = a) && (e.preventDefault(), e.stopPropagation()));
                    return s.postDispatch && s.postDispatch.call(this, e), e.result;
                }
            },
            handlers: function (e, t) {
                var n,
                    i,
                    a,
                    o,
                    r = [],
                    l = t.delegateCount,
                    s = e.target;
                if (l && s.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; s != this; s = s.parentNode || this)
                        if (1 === s.nodeType && (!0 !== s.disabled || "click" !== e.type)) {
                            for (i = [], n = 0; n < l; n++) void 0 === i[(a = (o = t[n]).selector + " ")] && (i[a] = o.needsContext ? -1 < w(a, this).index(s) : w.find(a, this, null, [s]).length), i[a] && i.push(o);
                            i.length && r.push({ elem: s, handlers: i });
                        }
                return l < t.length && r.push({ elem: this, handlers: t.slice(l) }), r;
            },
            fix: function (e) {
                if (e[w.expando]) return e;
                var t,
                    n,
                    i,
                    a = e.type,
                    o = e,
                    r = this.fixHooks[a];
                for (r || (this.fixHooks[a] = r = Ie.test(a) ? this.mouseHooks : Ae.test(a) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, e = new w.Event(o), t = i.length; t--; ) e[(n = i[t])] = o[n];
                return e.target || (e.target = o.srcElement || h), 3 === e.target.nodeType && (e.target = e.target.parentNode), (e.metaKey = !!e.metaKey), r.filter ? r.filter(e, o) : e;
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
                },
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n,
                        i,
                        a = t.button,
                        o = t.fromElement;
                    return (
                        null == e.pageX &&
                            null != t.clientX &&
                            ((i = (n = e.target.ownerDocument || h).documentElement),
                            (n = n.body),
                            (e.pageX = t.clientX + ((i && i.scrollLeft) || (n && n.scrollLeft) || 0) - ((i && i.clientLeft) || (n && n.clientLeft) || 0)),
                            (e.pageY = t.clientY + ((i && i.scrollTop) || (n && n.scrollTop) || 0) - ((i && i.clientTop) || (n && n.clientTop) || 0))),
                        !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o),
                        e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                        e
                    );
                },
            },
            special: {
                load: { noBubble: !0 },
                focus: {
                    trigger: function () {
                        if (this !== He() && this.focus)
                            try {
                                return this.focus(), !1;
                            } catch (e) {}
                    },
                    delegateType: "focusin",
                },
                blur: {
                    trigger: function () {
                        if (this === He() && this.blur) return this.blur(), !1;
                    },
                    delegateType: "focusout",
                },
                click: {
                    trigger: function () {
                        if (w.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1;
                    },
                    _default: function (e) {
                        return w.nodeName(e.target, "a");
                    },
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                    },
                },
            },
            simulate: function (e, t, n) {
                (e = w.extend(new w.Event(), n, { type: e, isSimulated: !0 })), w.event.trigger(e, null, t), e.isDefaultPrevented() && n.preventDefault();
            },
        }),
            (w.removeEvent = h.removeEventListener
                ? function (e, t, n) {
                      e.removeEventListener && e.removeEventListener(t, n);
                  }
                : function (e, t, n) {
                      (t = "on" + t), e.detachEvent && (void 0 === e[t] && (e[t] = null), e.detachEvent(t, n));
                  }),
            (w.Event = function (e, t) {
                if (!(this instanceof w.Event)) return new w.Event(e, t);
                e && e.type ? ((this.originalEvent = e), (this.type = e.type), (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? _e : s)) : (this.type = e),
                    t && w.extend(this, t),
                    (this.timeStamp = (e && e.timeStamp) || w.now()),
                    (this[w.expando] = !0);
            }),
            (w.Event.prototype = {
                constructor: w.Event,
                isDefaultPrevented: s,
                isPropagationStopped: s,
                isImmediatePropagationStopped: s,
                preventDefault: function () {
                    var e = this.originalEvent;
                    (this.isDefaultPrevented = _e), e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    (this.isPropagationStopped = _e), e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    (this.isImmediatePropagationStopped = _e), e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
                },
            }),
            w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, a) {
                w.event.special[e] = {
                    delegateType: a,
                    bindType: a,
                    handle: function (e) {
                        var t,
                            n = e.relatedTarget,
                            i = e.handleObj;
                        return (n && (n === this || w.contains(this, n))) || ((e.type = i.origType), (t = i.handler.apply(this, arguments)), (e.type = a)), t;
                    },
                };
            }),
            m.submit ||
                (w.event.special.submit = {
                    setup: function () {
                        if (w.nodeName(this, "form")) return !1;
                        w.event.add(this, "click._submit keypress._submit", function (e) {
                            (e = e.target),
                                (e = w.nodeName(e, "input") || w.nodeName(e, "button") ? w.prop(e, "form") : void 0) &&
                                    !w._data(e, "submit") &&
                                    (w.event.add(e, "submit._submit", function (e) {
                                        e._submitBubble = !0;
                                    }),
                                    w._data(e, "submit", !0));
                        });
                    },
                    postDispatch: function (e) {
                        e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && w.event.simulate("submit", this.parentNode, e));
                    },
                    teardown: function () {
                        if (w.nodeName(this, "form")) return !1;
                        w.event.remove(this, "._submit");
                    },
                }),
            m.change ||
                (w.event.special.change = {
                    setup: function () {
                        if (Le.test(this.nodeName))
                            return (
                                ("checkbox" !== this.type && "radio" !== this.type) ||
                                    (w.event.add(this, "propertychange._change", function (e) {
                                        "checked" === e.originalEvent.propertyName && (this._justChanged = !0);
                                    }),
                                    w.event.add(this, "click._change", function (e) {
                                        this._justChanged && !e.isTrigger && (this._justChanged = !1), w.event.simulate("change", this, e);
                                    })),
                                !1
                            );
                        w.event.add(this, "beforeactivate._change", function (e) {
                            (e = e.target),
                                Le.test(e.nodeName) &&
                                    !w._data(e, "change") &&
                                    (w.event.add(e, "change._change", function (e) {
                                        !this.parentNode || e.isSimulated || e.isTrigger || w.event.simulate("change", this.parentNode, e);
                                    }),
                                    w._data(e, "change", !0));
                        });
                    },
                    handle: function (e) {
                        var t = e.target;
                        if (this !== t || e.isSimulated || e.isTrigger || ("radio" !== t.type && "checkbox" !== t.type)) return e.handleObj.handler.apply(this, arguments);
                    },
                    teardown: function () {
                        return w.event.remove(this, "._change"), !Le.test(this.nodeName);
                    },
                }),
            m.focusin ||
                w.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
                    function a(e) {
                        w.event.simulate(i, e.target, w.event.fix(e));
                    }
                    w.event.special[i] = {
                        setup: function () {
                            var e = this.ownerDocument || this,
                                t = w._data(e, i);
                            t || e.addEventListener(n, a, !0), w._data(e, i, (t || 0) + 1);
                        },
                        teardown: function () {
                            var e = this.ownerDocument || this,
                                t = w._data(e, i) - 1;
                            t ? w._data(e, i, t) : (e.removeEventListener(n, a, !0), w._removeData(e, i));
                        },
                    };
                }),
            w.fn.extend({
                on: function (e, t, n, i) {
                    return Fe(this, e, t, n, i);
                },
                one: function (e, t, n, i) {
                    return Fe(this, e, t, n, i, 1);
                },
                off: function (e, t, n) {
                    var i, a;
                    if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" != typeof e)
                        return (
                            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                            !1 === n && (n = s),
                            this.each(function () {
                                w.event.remove(this, e, n, t);
                            })
                        );
                    for (a in e) this.off(a, t, e[a]);
                    return this;
                },
                trigger: function (e, t) {
                    return this.each(function () {
                        w.event.trigger(e, t, this);
                    });
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return w.event.trigger(e, t, n, !0);
                },
            });
        var Oe = / jQuery\d+="(?:null|\d+)"/g,
            Pe = new RegExp("<(?:" + xe + ")[\\s/>]", "i"),
            qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            Be = /<script|<style|<link/i,
            Re = /checked\s*(?:[^=]|=\s*.checked.)/i,
            We = /^true\/(.*)/,
            ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            $e = be(h).appendChild(h.createElement("div"));
        function Ye(e, t) {
            return w.nodeName(e, "table") && w.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
        }
        function Ve(e) {
            return (e.type = (null !== w.find.attr(e, "type")) + "/" + e.type), e;
        }
        function Xe(e) {
            var t = We.exec(e.type);
            return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
        }
        function Ue(e, t) {
            if (1 === t.nodeType && w.hasData(e)) {
                var n,
                    i,
                    a,
                    e = w._data(e),
                    o = w._data(t, e),
                    r = e.events;
                if (r) for (n in (delete o.handle, (o.events = {}), r)) for (i = 0, a = r[n].length; i < a; i++) w.event.add(t, n, r[n][i]);
                o.data && (o.data = w.extend({}, o.data));
            }
        }
        function b(n, i, a, o) {
            i = P.apply([], i);
            var e,
                t,
                r,
                l,
                s,
                c,
                d = 0,
                u = n.length,
                f = u - 1,
                p = i[0],
                h = w.isFunction(p);
            if (h || (1 < u && "string" == typeof p && !m.checkClone && Re.test(p)))
                return n.each(function (e) {
                    var t = n.eq(e);
                    h && (i[0] = p.call(this, e, t.html())), b(t, i, a, o);
                });
            if (u && ((e = (c = Ee(i, n[0].ownerDocument, !1, n, o)).firstChild), 1 === c.childNodes.length && (c = e), e || o)) {
                for (r = (l = w.map(x(c, "script"), Ve)).length; d < u; d++) (t = c), d !== f && ((t = w.clone(t, !0, !0)), r && w.merge(l, x(t, "script"))), a.call(n[d], t, d);
                if (r)
                    for (s = l[l.length - 1].ownerDocument, w.map(l, Xe), d = 0; d < r; d++)
                        (t = l[d]), ge.test(t.type || "") && !w._data(t, "globalEval") && w.contains(s, t) && (t.src ? w._evalUrl && w._evalUrl(t.src) : w.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ze, "")));
                c = e = null;
            }
            return n;
        }
        function Ge(e, t, n) {
            for (var i, a = t ? w.filter(t, e) : e, o = 0; null != (i = a[o]); o++) n || 1 !== i.nodeType || w.cleanData(x(i)), i.parentNode && (n && w.contains(i.ownerDocument, i) && ke(x(i, "script")), i.parentNode.removeChild(i));
            return e;
        }
        w.extend({
            htmlPrefilter: function (e) {
                return e.replace(qe, "<$1></$2>");
            },
            clone: function (e, t, n) {
                var i,
                    a,
                    o,
                    r,
                    l,
                    s = w.contains(e.ownerDocument, e);
                if (
                    (m.html5Clone || w.isXMLDoc(e) || !Pe.test("<" + e.nodeName + ">") ? (o = e.cloneNode(!0)) : (($e.innerHTML = e.outerHTML), $e.removeChild((o = $e.firstChild))),
                    !((m.noCloneEvent && m.noCloneChecked) || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e)))
                )
                    for (i = x(o), l = x(e), r = 0; null != (a = l[r]); ++r)
                        if (i[r]) {
                            d = p = void 0;
                            var c,
                                d,
                                u,
                                f = a,
                                p = i[r];
                            if (1 === p.nodeType) {
                                if (((c = p.nodeName.toLowerCase()), !m.noCloneEvent && p[w.expando])) {
                                    for (d in (u = w._data(p)).events) w.removeEvent(p, d, u.handle);
                                    p.removeAttribute(w.expando);
                                }
                                "script" === c && p.text !== f.text
                                    ? ((Ve(p).text = f.text), Xe(p))
                                    : "object" === c
                                    ? (p.parentNode && (p.outerHTML = f.outerHTML), m.html5Clone && f.innerHTML && !w.trim(p.innerHTML) && (p.innerHTML = f.innerHTML))
                                    : "input" === c && ye.test(f.type)
                                    ? ((p.defaultChecked = p.checked = f.checked), p.value !== f.value && (p.value = f.value))
                                    : "option" === c
                                    ? (p.defaultSelected = p.selected = f.defaultSelected)
                                    : ("input" !== c && "textarea" !== c) || (p.defaultValue = f.defaultValue);
                            }
                        }
                if (t)
                    if (n) for (l = l || x(e), i = i || x(o), r = 0; null != (a = l[r]); r++) Ue(a, i[r]);
                    else Ue(e, o);
                return 0 < (i = x(o, "script")).length && ke(i, !s && x(e, "script")), (i = l = a = null), o;
            },
            cleanData: function (e, t) {
                for (var n, i, a, o, r = 0, l = w.expando, s = w.cache, c = m.attributes, d = w.event.special; null != (n = e[r]); r++)
                    if ((t || g(n)) && (o = (a = n[l]) && s[a])) {
                        if (o.events) for (i in o.events) d[i] ? w.event.remove(n, i) : w.removeEvent(n, i, o.handle);
                        s[a] && (delete s[a], c || void 0 === n.removeAttribute ? (n[l] = void 0) : n.removeAttribute(l), u.push(a));
                    }
            },
        }),
            w.fn.extend({
                domManip: b,
                detach: function (e) {
                    return Ge(this, e, !0);
                },
                remove: function (e) {
                    return Ge(this, e);
                },
                text: function (e) {
                    return f(
                        this,
                        function (e) {
                            return void 0 === e ? w.text(this) : this.empty().append(((this[0] && this[0].ownerDocument) || h).createTextNode(e));
                        },
                        null,
                        e,
                        arguments.length
                    );
                },
                append: function () {
                    return b(this, arguments, function (e) {
                        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Ye(this, e).appendChild(e);
                    });
                },
                prepend: function () {
                    return b(this, arguments, function (e) {
                        var t;
                        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (t = Ye(this, e)).insertBefore(e, t.firstChild);
                    });
                },
                before: function () {
                    return b(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this);
                    });
                },
                after: function () {
                    return b(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                    });
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && w.cleanData(x(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
                        e.options && w.nodeName(e, "select") && (e.options.length = 0);
                    }
                    return this;
                },
                clone: function (e, t) {
                    return (
                        (e = null != e && e),
                        (t = null == t ? e : t),
                        this.map(function () {
                            return w.clone(this, e, t);
                        })
                    );
                },
                html: function (e) {
                    return f(
                        this,
                        function (e) {
                            var t = this[0] || {},
                                n = 0,
                                i = this.length;
                            if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Oe, "") : void 0;
                            if ("string" == typeof e && !Be.test(e) && (m.htmlSerialize || !Pe.test(e)) && (m.leadingWhitespace || !ve.test(e)) && !v[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = w.htmlPrefilter(e);
                                try {
                                    for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(x(t, !1)), (t.innerHTML = e));
                                    t = 0;
                                } catch (e) {}
                            }
                            t && this.empty().append(e);
                        },
                        null,
                        e,
                        arguments.length
                    );
                },
                replaceWith: function () {
                    var n = [];
                    return b(
                        this,
                        arguments,
                        function (e) {
                            var t = this.parentNode;
                            w.inArray(this, n) < 0 && (w.cleanData(x(this)), t && t.replaceChild(e, this));
                        },
                        n
                    );
                },
            }),
            w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, r) {
                w.fn[e] = function (e) {
                    for (var t, n = 0, i = [], a = w(e), o = a.length - 1; n <= o; n++) (t = n === o ? this : this.clone(!0)), w(a[n])[r](t), q.apply(i, t.get());
                    return this.pushStack(i);
                };
            });
        var Ke,
            Je = { HTML: "block", BODY: "block" };
        function Qe(e, t) {
            return (e = w(t.createElement(e)).appendTo(t.body)), (t = w.css(e[0], "display")), e.detach(), t;
        }
        function Ze(e) {
            var t = h,
                n = Je[e];
            return (
                n ||
                    (("none" !== (n = Qe(e, t)) && n) ||
                        ((t = ((Ke = (Ke || w("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ke[0].contentDocument).document).write(), t.close(), (n = Qe(e, t)), Ke.detach()),
                    (Je[e] = n)),
                n
            );
        }
        function et(e, t, n, i) {
            var a,
                o = {};
            for (a in t) (o[a] = e.style[a]), (e.style[a] = t[a]);
            for (a in ((i = n.apply(e, i || [])), t)) e.style[a] = o[a];
            return i;
        }
        var n,
            tt,
            nt,
            it,
            at,
            ot,
            rt,
            o,
            lt = /^margin/,
            st = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
            ct = h.documentElement;
        function r() {
            var e,
                t = h.documentElement;
            t.appendChild(rt),
                (o.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
                (n = nt = ot = !1),
                (tt = at = !0),
                k.getComputedStyle &&
                    ((e = k.getComputedStyle(o)),
                    (n = "1%" !== (e || {}).top),
                    (ot = "2px" === (e || {}).marginLeft),
                    (nt = "4px" === (e || { width: "4px" }).width),
                    (o.style.marginRight = "50%"),
                    (tt = "4px" === (e || { marginRight: "4px" }).marginRight),
                    ((e = o.appendChild(h.createElement("div"))).style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                    (e.style.marginRight = e.style.width = "0"),
                    (o.style.width = "1px"),
                    (at = !parseFloat((k.getComputedStyle(e) || {}).marginRight)),
                    o.removeChild(e)),
                (o.style.display = "none"),
                (it = 0 === o.getClientRects().length) &&
                    ((o.style.display = ""),
                    (o.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                    (o.childNodes[0].style.borderCollapse = "separate"),
                    ((e = o.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
                    (it = 0 === e[0].offsetHeight) && ((e[0].style.display = ""), (e[1].style.display = "none"), (it = 0 === e[0].offsetHeight))),
                t.removeChild(rt);
        }
        (rt = h.createElement("div")),
            (o = h.createElement("div")).style &&
                ((o.style.cssText = "float:left;opacity:.5"),
                (m.opacity = "0.5" === o.style.opacity),
                (m.cssFloat = !!o.style.cssFloat),
                (o.style.backgroundClip = "content-box"),
                (o.cloneNode(!0).style.backgroundClip = ""),
                (m.clearCloneStyle = "content-box" === o.style.backgroundClip),
                ((rt = h.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
                (o.innerHTML = ""),
                rt.appendChild(o),
                (m.boxSizing = "" === o.style.boxSizing || "" === o.style.MozBoxSizing || "" === o.style.WebkitBoxSizing),
                w.extend(m, {
                    reliableHiddenOffsets: function () {
                        return null == n && r(), it;
                    },
                    boxSizingReliable: function () {
                        return null == n && r(), nt;
                    },
                    pixelMarginRight: function () {
                        return null == n && r(), tt;
                    },
                    pixelPosition: function () {
                        return null == n && r(), n;
                    },
                    reliableMarginRight: function () {
                        return null == n && r(), at;
                    },
                    reliableMarginLeft: function () {
                        return null == n && r(), ot;
                    },
                }));
        var c,
            p,
            dt = /^(top|right|bottom|left)$/;
        function ut(e, t) {
            return {
                get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get;
                },
            };
        }
        k.getComputedStyle
            ? ((c = function (e) {
                  var t = e.ownerDocument.defaultView;
                  return (t = t && t.opener ? t : k).getComputedStyle(e);
              }),
              (p = function (e, t, n) {
                  var i,
                      a,
                      o = e.style;
                  return (
                      ("" !== (a = (n = n || c(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)),
                      n && !m.pixelMarginRight() && st.test(a) && lt.test(t) && ((e = o.width), (t = o.minWidth), (i = o.maxWidth), (o.minWidth = o.maxWidth = o.width = a), (a = n.width), (o.width = e), (o.minWidth = t), (o.maxWidth = i)),
                      void 0 === a ? a : a + ""
                  );
              }))
            : ct.currentStyle &&
              ((c = function (e) {
                  return e.currentStyle;
              }),
              (p = function (e, t, n) {
                  var i,
                      a,
                      o,
                      r = e.style;
                  return (
                      null == (n = (n = n || c(e)) ? n[t] : void 0) && r && r[t] && (n = r[t]),
                      st.test(n) && !dt.test(t) && ((i = r.left), (o = (a = e.runtimeStyle) && a.left) && (a.left = e.currentStyle.left), (r.left = "fontSize" === t ? "1em" : n), (n = r.pixelLeft + "px"), (r.left = i), o && (a.left = o)),
                      void 0 === n ? n : n + "" || "auto"
                  );
              }));
        var ft = /alpha\([^)]*\)/i,
            pt = /opacity\s*=\s*([^)]*)/i,
            ht = /^(none|table(?!-c[ea]).+)/,
            yt = new RegExp("^(" + e + ")(.*)$", "i"),
            mt = { position: "absolute", visibility: "hidden", display: "block" },
            gt = { letterSpacing: "0", fontWeight: "400" },
            vt = ["Webkit", "O", "Moz", "ms"],
            xt = h.createElement("div").style;
        function bt(e) {
            if (e in xt) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = vt.length; n--; ) if ((e = vt[n] + t) in xt) return e;
        }
        function kt(e, t) {
            for (var n, i, a, o = [], r = 0, l = e.length; r < l; r++)
                (i = e[r]).style &&
                    ((o[r] = w._data(i, "olddisplay")),
                    (n = i.style.display),
                    t
                        ? (o[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && fe(i) && (o[r] = w._data(i, "olddisplay", Ze(i.nodeName))))
                        : ((a = fe(i)), ((n && "none" !== n) || !a) && w._data(i, "olddisplay", a ? n : w.css(i, "display"))));
            for (r = 0; r < l; r++) !(i = e[r]).style || (t && "none" !== i.style.display && "" !== i.style.display) || (i.style.display = t ? o[r] || "" : "none");
            return e;
        }
        function wt(e, t, n) {
            var i = yt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
        }
        function Ct(e, t, n, i, a) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; o < 4; o += 2)
                "margin" === n && (r += w.css(e, n + l[o], !0, a)),
                    i
                        ? ("content" === n && (r -= w.css(e, "padding" + l[o], !0, a)), "margin" !== n && (r -= w.css(e, "border" + l[o] + "Width", !0, a)))
                        : ((r += w.css(e, "padding" + l[o], !0, a)), "padding" !== n && (r += w.css(e, "border" + l[o] + "Width", !0, a)));
            return r;
        }
        function Tt(e, t, n) {
            var i = !0,
                a = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = c(e),
                r = m.boxSizing && "border-box" === w.css(e, "boxSizing", !1, o);
            if (a <= 0 || null == a) {
                if ((((a = p(e, t, o)) < 0 || null == a) && (a = e.style[t]), st.test(a))) return a;
                (i = r && (m.boxSizingReliable() || a === e.style[t])), (a = parseFloat(a) || 0);
            }
            return a + Ct(e, t, n || (r ? "border" : "content"), i, o) + "px";
        }
        function T(e, t, n, i, a) {
            return new T.prototype.init(e, t, n, i, a);
        }
        w.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) return "" === (t = p(e, "opacity")) ? "1" : t;
                    },
                },
            },
            cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { float: m.cssFloat ? "cssFloat" : "styleFloat" },
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var a,
                        o,
                        r,
                        l = w.camelCase(t),
                        s = e.style;
                    if (((t = w.cssProps[l] || (w.cssProps[l] = bt(l) || l)), (r = w.cssHooks[t] || w.cssHooks[l]), void 0 === n)) return r && "get" in r && void 0 !== (a = r.get(e, !1, i)) ? a : s[t];
                    if (
                        ("string" == (o = typeof n) && (a = pe.exec(n)) && a[1] && ((n = he(e, t, a)), (o = "number")),
                        null != n &&
                            n == n &&
                            ("number" === o && (n += (a && a[3]) || (w.cssNumber[l] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (s[t] = "inherit"), !(r && "set" in r && void 0 === (n = r.set(e, n, i)))))
                    )
                        try {
                            s[t] = n;
                        } catch (e) {}
                }
            },
            css: function (e, t, n, i) {
                var a,
                    o = w.camelCase(t);
                return (
                    (t = w.cssProps[o] || (w.cssProps[o] = bt(o) || o)),
                    "normal" === (a = void 0 === (a = (o = w.cssHooks[t] || w.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : a) ? p(e, t, i) : a) && t in gt && (a = gt[t]),
                    "" === n || n ? ((o = parseFloat(a)), !0 === n || isFinite(o) ? o || 0 : a) : a
                );
            },
        }),
            w.each(["height", "width"], function (e, a) {
                w.cssHooks[a] = {
                    get: function (e, t, n) {
                        if (t)
                            return ht.test(w.css(e, "display")) && 0 === e.offsetWidth
                                ? et(e, mt, function () {
                                      return Tt(e, a, n);
                                  })
                                : Tt(e, a, n);
                    },
                    set: function (e, t, n) {
                        var i = n && c(e);
                        return wt(0, t, n ? Ct(e, a, n, m.boxSizing && "border-box" === w.css(e, "boxSizing", !1, i), i) : 0);
                    },
                };
            }),
            m.opacity ||
                (w.cssHooks.opacity = {
                    get: function (e, t) {
                        return pt.test((t && e.currentStyle ? e.currentStyle : e.style).filter || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
                    },
                    set: function (e, t) {
                        var n = e.style,
                            e = e.currentStyle,
                            i = w.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                            a = (e && e.filter) || n.filter || "";
                        (((n.zoom = 1) <= t || "" === t) && "" === w.trim(a.replace(ft, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || (e && !e.filter))) || (n.filter = ft.test(a) ? a.replace(ft, i) : a + " " + i);
                    },
                }),
            (w.cssHooks.marginRight = ut(m.reliableMarginRight, function (e, t) {
                if (t) return et(e, { display: "inline-block" }, p, [e, "marginRight"]);
            })),
            (w.cssHooks.marginLeft = ut(m.reliableMarginLeft, function (e, t) {
                if (t)
                    return (
                        (parseFloat(p(e, "marginLeft")) ||
                            (w.contains(e.ownerDocument, e)
                                ? e.getBoundingClientRect().left -
                                  et(e, { marginLeft: 0 }, function () {
                                      return e.getBoundingClientRect().left;
                                  })
                                : 0)) + "px"
                    );
            })),
            w.each({ margin: "", padding: "", border: "Width" }, function (a, o) {
                (w.cssHooks[a + o] = {
                    expand: function (e) {
                        for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[a + l[t] + o] = i[t] || i[t - 2] || i[0];
                        return n;
                    },
                }),
                    lt.test(a) || (w.cssHooks[a + o].set = wt);
            }),
            w.fn.extend({
                css: function (e, t) {
                    return f(
                        this,
                        function (e, t, n) {
                            var i,
                                a,
                                o = {},
                                r = 0;
                            if (w.isArray(t)) {
                                for (i = c(e), a = t.length; r < a; r++) o[t[r]] = w.css(e, t[r], !1, i);
                                return o;
                            }
                            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                        },
                        e,
                        t,
                        1 < arguments.length
                    );
                },
                show: function () {
                    return kt(this, !0);
                },
                hide: function () {
                    return kt(this);
                },
                toggle: function (e) {
                    return "boolean" == typeof e
                        ? e
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              fe(this) ? w(this).show() : w(this).hide();
                          });
                },
            }),
            (((w.Tween = T).prototype = {
                constructor: T,
                init: function (e, t, n, i, a, o) {
                    (this.elem = e), (this.prop = n), (this.easing = a || w.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = o || (w.cssNumber[n] ? "" : "px"));
                },
                cur: function () {
                    var e = T.propHooks[this.prop];
                    return (e && e.get ? e : T.propHooks._default).get(this);
                },
                run: function (e) {
                    var t,
                        n = T.propHooks[this.prop];
                    return (
                        this.options.duration ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                        (this.now = (this.end - this.start) * t + this.start),
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        (n && n.set ? n : T.propHooks._default).set(this),
                        this
                    );
                },
            }).init.prototype = T.prototype),
            ((T.propHooks = {
                _default: {
                    get: function (e) {
                        return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (e = w.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0;
                    },
                    set: function (e) {
                        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : w.style(e.elem, e.prop, e.now + e.unit);
                    },
                },
            }).scrollTop = T.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                },
            }),
            (w.easing = {
                linear: function (e) {
                    return e;
                },
                swing: function (e) {
                    return 0.5 - Math.cos(e * Math.PI) / 2;
                },
                _default: "swing",
            }),
            (w.fx = T.prototype.init),
            (w.fx.step = {});
        var E,
            Et,
            D,
            S,
            Dt = /^(?:toggle|show|hide)$/,
            St = /queueHooks$/;
        function Nt() {
            return (
                k.setTimeout(function () {
                    E = void 0;
                }),
                (E = w.now())
            );
        }
        function Lt(e, t) {
            var n,
                i = { height: e },
                a = 0;
            for (t = t ? 1 : 0; a < 4; a += 2 - t) i["margin" + (n = l[a])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
        }
        function At(e, t, n) {
            for (var i, a = (N.tweeners[t] || []).concat(N.tweeners["*"]), o = 0, r = a.length; o < r; o++) if ((i = a[o].call(n, t, e))) return i;
        }
        function N(a, e, t) {
            var n,
                o,
                i,
                r,
                l,
                s,
                c,
                d = 0,
                u = N.prefilters.length,
                f = w.Deferred().always(function () {
                    delete p.elem;
                }),
                p = function () {
                    if (o) return !1;
                    for (var e = E || Nt(), t = 1 - ((e = Math.max(0, h.startTime + h.duration - e)) / h.duration || 0), n = 0, i = h.tweens.length; n < i; n++) h.tweens[n].run(t);
                    return f.notifyWith(a, [h, t, e]), t < 1 && i ? e : (f.resolveWith(a, [h]), !1);
                },
                h = f.promise({
                    elem: a,
                    props: w.extend({}, e),
                    opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: E || Nt(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function (e, t) {
                        return (t = w.Tween(a, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing)), h.tweens.push(t), t;
                    },
                    stop: function (e) {
                        var t = 0,
                            n = e ? h.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; t < n; t++) h.tweens[t].run(1);
                        return e ? (f.notifyWith(a, [h, 1, 0]), f.resolveWith(a, [h, e])) : f.rejectWith(a, [h, e]), this;
                    },
                }),
                y = h.props,
                m = y,
                g = h.opts.specialEasing;
            for (i in m)
                if (((l = g[(r = w.camelCase(i))]), (s = m[i]), w.isArray(s) && ((l = s[1]), (s = m[i] = s[0])), i !== r && ((m[r] = s), delete m[i]), (c = w.cssHooks[r]) && "expand" in c))
                    for (i in ((s = c.expand(s)), delete m[r], s)) i in m || ((m[i] = s[i]), (g[i] = l));
                else g[r] = l;
            for (; d < u; d++) if ((n = N.prefilters[d].call(h, a, y, h.opts))) return w.isFunction(n.stop) && (w._queueHooks(h.elem, h.opts.queue).stop = w.proxy(n.stop, n)), n;
            return (
                w.map(y, At, h),
                w.isFunction(h.opts.start) && h.opts.start.call(a, h),
                w.fx.timer(w.extend(p, { elem: a, anim: h, queue: h.opts.queue })),
                h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
            );
        }
        (w.Animation = w.extend(N, {
            tweeners: {
                "*": [
                    function (e, t) {
                        var n = this.createTween(e, t);
                        return he(n.elem, e, pe.exec(t), n), n;
                    },
                ],
            },
            tweener: function (e, t) {
                for (var n, i = 0, a = (e = w.isFunction(e) ? ((t = e), ["*"]) : e.match(C)).length; i < a; i++) (n = e[i]), (N.tweeners[n] = N.tweeners[n] || []), N.tweeners[n].unshift(t);
            },
            prefilters: [
                function (t, e, n) {
                    var i,
                        a,
                        o,
                        r,
                        l,
                        s,
                        c,
                        d = this,
                        u = {},
                        f = t.style,
                        p = t.nodeType && fe(t),
                        h = w._data(t, "fxshow");
                    for (i in (n.queue ||
                        (null == (l = w._queueHooks(t, "fx")).unqueued &&
                            ((l.unqueued = 0),
                            (s = l.empty.fire),
                            (l.empty.fire = function () {
                                l.unqueued || s();
                            })),
                        l.unqueued++,
                        d.always(function () {
                            d.always(function () {
                                l.unqueued--, w.queue(t, "fx").length || l.empty.fire();
                            });
                        })),
                    1 === t.nodeType &&
                        ("height" in e || "width" in e) &&
                        ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                        "inline" === ("none" === (c = w.css(t, "display")) ? w._data(t, "olddisplay") || Ze(t.nodeName) : c) &&
                            "none" === w.css(t, "float") &&
                            (m.inlineBlockNeedsLayout && "inline" !== Ze(t.nodeName) ? (f.zoom = 1) : (f.display = "inline-block"))),
                    n.overflow &&
                        ((f.overflow = "hidden"),
                        m.shrinkWrapBlocks() ||
                            d.always(function () {
                                (f.overflow = n.overflow[0]), (f.overflowX = n.overflow[1]), (f.overflowY = n.overflow[2]);
                            })),
                    e))
                        if (((a = e[i]), Dt.exec(a))) {
                            if ((delete e[i], (o = o || "toggle" === a), a === (p ? "hide" : "show"))) {
                                if ("show" !== a || !h || void 0 === h[i]) continue;
                                p = !0;
                            }
                            u[i] = (h && h[i]) || w.style(t, i);
                        } else c = void 0;
                    if (w.isEmptyObject(u)) "inline" === ("none" === c ? Ze(t.nodeName) : c) && (f.display = c);
                    else
                        for (i in (h ? "hidden" in h && (p = h.hidden) : (h = w._data(t, "fxshow", {})),
                        o && (h.hidden = !p),
                        p
                            ? w(t).show()
                            : d.done(function () {
                                  w(t).hide();
                              }),
                        d.done(function () {
                            for (var e in (w._removeData(t, "fxshow"), u)) w.style(t, e, u[e]);
                        }),
                        u))
                            (r = At(p ? h[i] : 0, i, d)), i in h || ((h[i] = r.start), p && ((r.end = r.start), (r.start = "width" === i || "height" === i ? 1 : 0)));
                },
            ],
            prefilter: function (e, t) {
                t ? N.prefilters.unshift(e) : N.prefilters.push(e);
            },
        })),
            (w.speed = function (e, t, n) {
                var i = e && "object" == typeof e ? w.extend({}, e) : { complete: n || (!n && t) || (w.isFunction(e) && e), duration: e, easing: (n && t) || (t && !w.isFunction(t) && t) };
                return (
                    (i.duration = w.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in w.fx.speeds ? w.fx.speeds[i.duration] : w.fx.speeds._default),
                    (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                    (i.old = i.complete),
                    (i.complete = function () {
                        w.isFunction(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
                    }),
                    i
                );
            }),
            w.fn.extend({
                fadeTo: function (e, t, n, i) {
                    return this.filter(fe).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
                },
                animate: function (t, e, n, i) {
                    var a = w.isEmptyObject(t),
                        o = w.speed(e, n, i);
                    return (
                        ((e = function () {
                            var e = N(this, w.extend({}, t), o);
                            (a || w._data(this, "finish")) && e.stop(!0);
                        }).finish = e),
                        a || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
                    );
                },
                stop: function (a, e, o) {
                    function r(e) {
                        var t = e.stop;
                        delete e.stop, t(o);
                    }
                    return (
                        "string" != typeof a && ((o = e), (e = a), (a = void 0)),
                        e && !1 !== a && this.queue(a || "fx", []),
                        this.each(function () {
                            var e = !0,
                                t = null != a && a + "queueHooks",
                                n = w.timers,
                                i = w._data(this);
                            if (t) i[t] && i[t].stop && r(i[t]);
                            else for (t in i) i[t] && i[t].stop && St.test(t) && r(i[t]);
                            for (t = n.length; t--; ) n[t].elem !== this || (null != a && n[t].queue !== a) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                            (!e && o) || w.dequeue(this, a);
                        })
                    );
                },
                finish: function (r) {
                    return (
                        !1 !== r && (r = r || "fx"),
                        this.each(function () {
                            var e,
                                t = w._data(this),
                                n = t[r + "queue"],
                                i = t[r + "queueHooks"],
                                a = w.timers,
                                o = n ? n.length : 0;
                            for (t.finish = !0, w.queue(this, r, []), i && i.stop && i.stop.call(this, !0), e = a.length; e--; ) a[e].elem === this && a[e].queue === r && (a[e].anim.stop(!0), a.splice(e, 1));
                            for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                            delete t.finish;
                        })
                    );
                },
            }),
            w.each(["toggle", "show", "hide"], function (e, i) {
                var a = w.fn[i];
                w.fn[i] = function (e, t, n) {
                    return null == e || "boolean" == typeof e ? a.apply(this, arguments) : this.animate(Lt(i, !0), e, t, n);
                };
            }),
            w.each({ slideDown: Lt("show"), slideUp: Lt("hide"), slideToggle: Lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, i) {
                w.fn[e] = function (e, t, n) {
                    return this.animate(i, e, t, n);
                };
            }),
            (w.timers = []),
            (w.fx.tick = function () {
                var e,
                    t = w.timers,
                    n = 0;
                for (E = w.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
                t.length || w.fx.stop(), (E = void 0);
            }),
            (w.fx.timer = function (e) {
                w.timers.push(e), e() ? w.fx.start() : w.timers.pop();
            }),
            (w.fx.interval = 13),
            (w.fx.start = function () {
                Et = Et || k.setInterval(w.fx.tick, w.fx.interval);
            }),
            (w.fx.stop = function () {
                k.clearInterval(Et), (Et = null);
            }),
            (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (w.fn.delay = function (i, e) {
                return (
                    (i = (w.fx && w.fx.speeds[i]) || i),
                    this.queue((e = e || "fx"), function (e, t) {
                        var n = k.setTimeout(e, i);
                        t.stop = function () {
                            k.clearTimeout(n);
                        };
                    })
                );
            }),
            (D = h.createElement("input")),
            (M = h.createElement("div")),
            (e = (S = h.createElement("select")).appendChild(h.createElement("option"))),
            (M = h.createElement("div")).setAttribute("className", "t"),
            (M.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
            (H = M.getElementsByTagName("a")[0]),
            D.setAttribute("type", "checkbox"),
            M.appendChild(D),
            ((H = M.getElementsByTagName("a")[0]).style.cssText = "top:1px"),
            (m.getSetAttribute = "t" !== M.className),
            (m.style = /top/.test(H.getAttribute("style"))),
            (m.hrefNormalized = "/a" === H.getAttribute("href")),
            (m.checkOn = !!D.value),
            (m.optSelected = e.selected),
            (m.enctype = !!h.createElement("form").enctype),
            (S.disabled = !0),
            (m.optDisabled = !e.disabled),
            (D = h.createElement("input")).setAttribute("value", ""),
            (m.input = "" === D.getAttribute("value")),
            (D.value = "t"),
            D.setAttribute("type", "radio"),
            (m.radioValue = "t" === D.value);
        var It = /\r/g,
            jt = /[\x20\t\r\n\f]+/g;
        w.fn.extend({
            val: function (t) {
                var n,
                    e,
                    i,
                    a = this[0];
                return arguments.length
                    ? ((i = w.isFunction(t)),
                      this.each(function (e) {
                          1 === this.nodeType &&
                              (null == (e = i ? t.call(this, e, w(this).val()) : t)
                                  ? (e = "")
                                  : "number" == typeof e
                                  ? (e += "")
                                  : w.isArray(e) &&
                                    (e = w.map(e, function (e) {
                                        return null == e ? "" : e + "";
                                    })),
                              ((n = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value")) || (this.value = e));
                      }))
                    : a
                    ? (n = w.valHooks[a.type] || w.valHooks[a.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(a, "value"))
                        ? e
                        : "string" == typeof (e = a.value)
                        ? e.replace(It, "")
                        : null == e
                        ? ""
                        : e
                    : void 0;
            },
        }),
            w.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = w.find.attr(e, "value");
                            return null != t ? t : w.trim(w.text(e)).replace(jt, " ");
                        },
                    },
                    select: {
                        get: function (e) {
                            for (var t, n = e.options, i = e.selectedIndex, a = "select-one" === e.type || i < 0, o = a ? null : [], r = a ? i + 1 : n.length, l = i < 0 ? r : a ? i : 0; l < r; l++)
                                if (((t = n[l]).selected || l === i) && (m.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !w.nodeName(t.parentNode, "optgroup"))) {
                                    if (((t = w(t).val()), a)) return t;
                                    o.push(t);
                                }
                            return o;
                        },
                        set: function (e, t) {
                            for (var n, i, a = e.options, o = w.makeArray(t), r = a.length; r--; )
                                if (((i = a[r]), -1 < w.inArray(w.valHooks.option.get(i), o)))
                                    try {
                                        i.selected = n = !0;
                                    } catch (e) {
                                        i.scrollHeight;
                                    }
                                else i.selected = !1;
                            return n || (e.selectedIndex = -1), a;
                        },
                    },
                },
            }),
            w.each(["radio", "checkbox"], function () {
                (w.valHooks[this] = {
                    set: function (e, t) {
                        if (w.isArray(t)) return (e.checked = -1 < w.inArray(w(e).val(), t));
                    },
                }),
                    m.checkOn ||
                        (w.valHooks[this].get = function (e) {
                            return null === e.getAttribute("value") ? "on" : e.value;
                        });
            });
        var L,
            Mt,
            A = w.expr.attrHandle,
            _t = /^(?:checked|selected)$/i,
            I = m.getSetAttribute,
            Ht = m.input,
            Ft =
                (w.fn.extend({
                    attr: function (e, t) {
                        return f(this, w.attr, e, t, 1 < arguments.length);
                    },
                    removeAttr: function (e) {
                        return this.each(function () {
                            w.removeAttr(this, e);
                        });
                    },
                }),
                w.extend({
                    attr: function (e, t, n) {
                        var i,
                            a,
                            o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return void 0 === e.getAttribute
                                ? w.prop(e, t, n)
                                : ((1 === o && w.isXMLDoc(e)) || ((t = t.toLowerCase()), (a = w.attrHooks[t] || (w.expr.match.bool.test(t) ? Mt : L))),
                                  void 0 !== n
                                      ? null === n
                                          ? void w.removeAttr(e, t)
                                          : a && "set" in a && void 0 !== (i = a.set(e, n, t))
                                          ? i
                                          : (e.setAttribute(t, n + ""), n)
                                      : (a && "get" in a && null !== (i = a.get(e, t))) || null != (i = w.find.attr(e, t))
                                      ? i
                                      : void 0);
                    },
                    attrHooks: {
                        type: {
                            set: function (e, t) {
                                var n;
                                if (!m.radioValue && "radio" === t && w.nodeName(e, "input")) return (n = e.value), e.setAttribute("type", t), n && (e.value = n), t;
                            },
                        },
                    },
                    removeAttr: function (e, t) {
                        var n,
                            i,
                            a = 0,
                            o = t && t.match(C);
                        if (o && 1 === e.nodeType)
                            for (; (n = o[a++]); )
                                (i = w.propFix[n] || n), w.expr.match.bool.test(n) ? ((Ht && I) || !_t.test(n) ? (e[i] = !1) : (e[w.camelCase("default-" + n)] = e[i] = !1)) : w.attr(e, n, ""), e.removeAttribute(I ? n : i);
                    },
                }),
                (Mt = {
                    set: function (e, t, n) {
                        return !1 === t ? w.removeAttr(e, n) : (Ht && I) || !_t.test(n) ? e.setAttribute((!I && w.propFix[n]) || n, n) : (e[w.camelCase("default-" + n)] = e[n] = !0), n;
                    },
                }),
                w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var o = A[t] || w.find.attr;
                    (Ht && I) || !_t.test(t)
                        ? (A[t] = function (e, t, n) {
                              var i, a;
                              return n || ((a = A[t]), (A[t] = i), (i = null != o(e, t, n) ? t.toLowerCase() : null), (A[t] = a)), i;
                          })
                        : (A[t] = function (e, t, n) {
                              if (!n) return e[w.camelCase("default-" + t)] ? t.toLowerCase() : null;
                          });
                }),
                (Ht && I) ||
                    (w.attrHooks.value = {
                        set: function (e, t, n) {
                            if (!w.nodeName(e, "input")) return L && L.set(e, t, n);
                            e.defaultValue = t;
                        },
                    }),
                I ||
                    ((L = {
                        set: function (e, t, n) {
                            var i = e.getAttributeNode(n);
                            if ((i || e.setAttributeNode((i = e.ownerDocument.createAttribute(n))), (i.value = t += ""), "value" === n || t === e.getAttribute(n))) return t;
                        },
                    }),
                    (A.id = A.name = A.coords = function (e, t, n) {
                        if (!n) return (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null;
                    }),
                    (w.valHooks.button = {
                        get: function (e, t) {
                            if ((t = e.getAttributeNode(t)) && t.specified) return t.value;
                        },
                        set: L.set,
                    }),
                    (w.attrHooks.contenteditable = {
                        set: function (e, t, n) {
                            L.set(e, "" !== t && t, n);
                        },
                    }),
                    w.each(["width", "height"], function (e, n) {
                        w.attrHooks[n] = {
                            set: function (e, t) {
                                if ("" === t) return e.setAttribute(n, "auto"), t;
                            },
                        };
                    })),
                m.style ||
                    (w.attrHooks.style = {
                        get: function (e) {
                            return e.style.cssText || void 0;
                        },
                        set: function (e, t) {
                            return (e.style.cssText = t + "");
                        },
                    }),
                /^(?:input|select|textarea|button|object)$/i),
            Ot = /^(?:a|area)$/i,
            Pt =
                (w.fn.extend({
                    prop: function (e, t) {
                        return f(this, w.prop, e, t, 1 < arguments.length);
                    },
                    removeProp: function (e) {
                        return (
                            (e = w.propFix[e] || e),
                            this.each(function () {
                                try {
                                    (this[e] = void 0), delete this[e];
                                } catch (e) {}
                            })
                        );
                    },
                }),
                w.extend({
                    prop: function (e, t, n) {
                        var i,
                            a,
                            o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return (
                                (1 === o && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (a = w.propHooks[t])),
                                void 0 !== n ? (a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : (e[t] = n)) : a && "get" in a && null !== (i = a.get(e, t)) ? i : e[t]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = w.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : Ft.test(e.nodeName) || (Ot.test(e.nodeName) && e.href) ? 0 : -1;
                            },
                        },
                    },
                    propFix: { for: "htmlFor", class: "className" },
                }),
                m.hrefNormalized ||
                    w.each(["href", "src"], function (e, t) {
                        w.propHooks[t] = {
                            get: function (e) {
                                return e.getAttribute(t, 4);
                            },
                        };
                    }),
                m.optSelected ||
                    (w.propHooks.selected = {
                        get: function (e) {
                            return (e = e.parentNode) && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null;
                        },
                        set: function (e) {
                            (e = e.parentNode) && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                        },
                    }),
                w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    w.propFix[this.toLowerCase()] = this;
                }),
                m.enctype || (w.propFix.enctype = "encoding"),
                /[\t\r\n\f]/g);
        function j(e) {
            return w.attr(e, "class") || "";
        }
        w.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    i,
                    a,
                    o,
                    r,
                    l = 0;
                if (w.isFunction(t))
                    return this.each(function (e) {
                        w(this).addClass(t.call(this, e, j(this)));
                    });
                if ("string" == typeof t && t)
                    for (e = t.match(C) || []; (n = this[l++]); )
                        if (((r = j(n)), (i = 1 === n.nodeType && (" " + r + " ").replace(Pt, " ")))) {
                            for (o = 0; (a = e[o++]); ) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                            r !== (r = w.trim(i)) && w.attr(n, "class", r);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    i,
                    a,
                    o,
                    r,
                    l = 0;
                if (w.isFunction(t))
                    return this.each(function (e) {
                        w(this).removeClass(t.call(this, e, j(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(C) || []; (n = this[l++]); )
                        if (((r = j(n)), (i = 1 === n.nodeType && (" " + r + " ").replace(Pt, " ")))) {
                            for (o = 0; (a = e[o++]); ) for (; -1 < i.indexOf(" " + a + " "); ) i = i.replace(" " + a + " ", " ");
                            r !== (r = w.trim(i)) && w.attr(n, "class", r);
                        }
                return this;
            },
            toggleClass: function (a, t) {
                var o = typeof a;
                return "boolean" == typeof t && "string" == o
                    ? t
                        ? this.addClass(a)
                        : this.removeClass(a)
                    : w.isFunction(a)
                    ? this.each(function (e) {
                          w(this).toggleClass(a.call(this, e, j(this), t), t);
                      })
                    : this.each(function () {
                          var e, t, n, i;
                          if ("string" == o) for (t = 0, n = w(this), i = a.match(C) || []; (e = i[t++]); ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                          else (void 0 !== a && "boolean" != o) || ((e = j(this)) && w._data(this, "__className__", e), w.attr(this, "class", (!e && !1 !== a && w._data(this, "__className__")) || ""));
                      });
            },
            hasClass: function (e) {
                for (var t, n = 0, i = " " + e + " "; (t = this[n++]); ) if (1 === t.nodeType && -1 < (" " + j(t) + " ").replace(Pt, " ").indexOf(i)) return !0;
                return !1;
            },
        }),
            w.each(
                "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
                function (e, n) {
                    w.fn[n] = function (e, t) {
                        return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
                    };
                }
            ),
            w.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                },
            });
        var M = k.location,
            qt = w.now(),
            Bt = /\?/,
            Rt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g,
            Wt =
                ((w.parseJSON = function (e) {
                    if (k.JSON && k.JSON.parse) return k.JSON.parse(e + "");
                    var a,
                        o = null,
                        t = w.trim(e + "");
                    return t &&
                        !w.trim(
                            t.replace(Rt, function (e, t, n, i) {
                                return 0 === (o = a && t ? 0 : o) ? e : ((a = n || t), (o += !i - !n), "");
                            })
                        )
                        ? Function("return " + t)()
                        : w.error("Invalid JSON: " + e);
                }),
                (w.parseXML = function (e) {
                    var t;
                    if (!e || "string" != typeof e) return null;
                    try {
                        k.DOMParser ? (t = new k.DOMParser().parseFromString(e, "text/xml")) : (((t = new k.ActiveXObject("Microsoft.XMLDOM")).async = "false"), t.loadXML(e));
                    } catch (e) {
                        t = void 0;
                    }
                    return (t && t.documentElement && !t.getElementsByTagName("parsererror").length) || w.error("Invalid XML: " + e), t;
                }),
                /#.*$/),
            zt = /([?&])_=[^&]*/,
            $t = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Yt = /^(?:GET|HEAD)$/,
            Vt = /^\/\//,
            Xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Ut = {},
            Gt = {},
            Kt = "*/".concat("*"),
            Jt = M.href,
            _ = Xt.exec(Jt.toLowerCase()) || [];
        function Qt(o) {
            return function (e, t) {
                "string" != typeof e && ((t = e), (e = "*"));
                var n,
                    i = 0,
                    a = e.toLowerCase().match(C) || [];
                if (w.isFunction(t)) for (; (n = a[i++]); ) "+" === n.charAt(0) ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
            };
        }
        function Zt(t, i, a, o) {
            var r = {},
                l = t === Gt;
            function s(e) {
                var n;
                return (
                    (r[e] = !0),
                    w.each(t[e] || [], function (e, t) {
                        return "string" != typeof (t = t(i, a, o)) || l || r[t] ? (l ? !(n = t) : void 0) : (i.dataTypes.unshift(t), s(t), !1);
                    }),
                    n
                );
            }
            return s(i.dataTypes[0]) || (!r["*"] && s("*"));
        }
        function en(e, t) {
            var n,
                i,
                a = w.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((a[i] ? e : (n = n || {}))[i] = t[i]);
            return n && w.extend(!0, e, n), e;
        }
        w.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Jt,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Kt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": w.parseJSON, "text xml": w.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? en(en(e, w.ajaxSettings), t) : en(w.ajaxSettings, e);
            },
            ajaxPrefilter: Qt(Ut),
            ajaxTransport: Qt(Gt),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0));
                var n,
                    s,
                    c,
                    d,
                    u,
                    f,
                    i,
                    p = w.ajaxSetup({}, (t = t || {})),
                    h = p.context || p,
                    y = p.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                    m = w.Deferred(),
                    g = w.Callbacks("once memory"),
                    v = p.statusCode || {},
                    a = {},
                    o = {},
                    x = 0,
                    r = "canceled",
                    b = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === x) {
                                if (!i) for (i = {}; (t = $t.exec(c)); ) i[t[1].toLowerCase()] = t[2];
                                t = i[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function () {
                            return 2 === x ? c : null;
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return x || ((e = o[n] = o[n] || e), (a[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return x || (p.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            if (e)
                                if (x < 2) for (var t in e) v[t] = [v[t], e[t]];
                                else b.always(e[b.status]);
                            return this;
                        },
                        abort: function (e) {
                            return (e = e || r), f && f.abort(e), l(0, e), this;
                        },
                    };
                if (
                    ((m.promise(b).complete = g.add),
                    (b.success = b.done),
                    (b.error = b.fail),
                    (p.url = ((e || p.url || Jt) + "").replace(Wt, "").replace(Vt, _[1] + "//")),
                    (p.type = t.method || t.type || p.method || p.type),
                    (p.dataTypes = w
                        .trim(p.dataType || "*")
                        .toLowerCase()
                        .match(C) || [""]),
                    null == p.crossDomain && ((e = Xt.exec(p.url.toLowerCase())), (p.crossDomain = !(!e || (e[1] === _[1] && e[2] === _[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (_[3] || ("http:" === _[1] ? "80" : "443")))))),
                    p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)),
                    Zt(Ut, p, t, b),
                    2 === x)
                )
                    return b;
                for (n in ((u = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !Yt.test(p.type)),
                (s = p.url),
                p.hasContent || (p.data && ((s = p.url += (Bt.test(s) ? "&" : "?") + p.data), delete p.data), !1 === p.cache && (p.url = zt.test(s) ? s.replace(zt, "$1_=" + qt++) : s + (Bt.test(s) ? "&" : "?") + "_=" + qt++)),
                p.ifModified && (w.lastModified[s] && b.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && b.setRequestHeader("If-None-Match", w.etag[s])),
                ((p.data && p.hasContent && !1 !== p.contentType) || t.contentType) && b.setRequestHeader("Content-Type", p.contentType),
                b.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Kt + "; q=0.01" : "") : p.accepts["*"]),
                p.headers))
                    b.setRequestHeader(n, p.headers[n]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, b, p) || 2 === x)) return b.abort();
                for (n in ((r = "abort"), { success: 1, error: 1, complete: 1 })) b[n](p[n]);
                if ((f = Zt(Gt, p, t, b))) {
                    if (((b.readyState = 1), u && y.trigger("ajaxSend", [b, p]), 2 === x)) return b;
                    p.async &&
                        0 < p.timeout &&
                        (d = k.setTimeout(function () {
                            b.abort("timeout");
                        }, p.timeout));
                    try {
                        (x = 1), f.send(a, l);
                    } catch (e) {
                        if (!(x < 2)) throw e;
                        l(-1, e);
                    }
                } else l(-1, "No Transport");
                function l(e, t, n, i) {
                    var a,
                        o,
                        r,
                        l = t;
                    2 !== x &&
                        ((x = 2),
                        d && k.clearTimeout(d),
                        (f = void 0),
                        (c = i || ""),
                        (b.readyState = 0 < e ? 4 : 0),
                        (i = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (r = (function (e, t, n) {
                                for (var i, a, o, r, l = e.contents, s = e.dataTypes; "*" === s[0]; ) s.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (a)
                                    for (r in l)
                                        if (l[r] && l[r].test(a)) {
                                            s.unshift(r);
                                            break;
                                        }
                                if (s[0] in n) o = s[0];
                                else {
                                    for (r in n) {
                                        if (!s[0] || e.converters[r + " " + s[0]]) {
                                            o = r;
                                            break;
                                        }
                                        i = i || r;
                                    }
                                    o = o || i;
                                }
                                if (o) return o !== s[0] && s.unshift(o), n[o];
                            })(p, b, n)),
                        (r = (function (e, t, n, i) {
                            var a,
                                o,
                                r,
                                l,
                                s,
                                c = {},
                                d = e.dataTypes.slice();
                            if (d[1]) for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                            for (o = d.shift(); o; )
                                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !s && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (s = o), (o = d.shift())))
                                    if ("*" === o) o = s;
                                    else if ("*" !== s && s !== o) {
                                        if (!(r = c[s + " " + o] || c["* " + o]))
                                            for (a in c)
                                                if ((l = a.split(" "))[1] === o && (r = c[s + " " + l[0]] || c["* " + l[0]])) {
                                                    !0 === r ? (r = c[a]) : !0 !== c[a] && ((o = l[0]), d.unshift(l[1]));
                                                    break;
                                                }
                                        if (!0 !== r)
                                            if (r && e.throws) t = r(t);
                                            else
                                                try {
                                                    t = r(t);
                                                } catch (e) {
                                                    return { state: "parsererror", error: r ? e : "No conversion from " + s + " to " + o };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(p, r, b, i)),
                        i
                            ? (p.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (w.lastModified[s] = n), (n = b.getResponseHeader("etag")) && (w.etag[s] = n)),
                              204 === e || "HEAD" === p.type ? (l = "nocontent") : 304 === e ? (l = "notmodified") : ((l = r.state), (a = r.data), (i = !(o = r.error))))
                            : ((o = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
                        (b.status = e),
                        (b.statusText = (t || l) + ""),
                        i ? m.resolveWith(h, [a, l, b]) : m.rejectWith(h, [b, l, o]),
                        b.statusCode(v),
                        (v = void 0),
                        u && y.trigger(i ? "ajaxSuccess" : "ajaxError", [b, p, i ? a : o]),
                        g.fireWith(h, [b, l]),
                        u && (y.trigger("ajaxComplete", [b, p]), --w.active || w.event.trigger("ajaxStop")));
                }
                return b;
            },
            getJSON: function (e, t, n) {
                return w.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return w.get(e, void 0, t, "script");
            },
        }),
            w.each(["get", "post"], function (e, a) {
                w[a] = function (e, t, n, i) {
                    return w.isFunction(t) && ((i = i || n), (n = t), (t = void 0)), w.ajax(w.extend({ url: e, type: a, dataType: i, data: t, success: n }, w.isPlainObject(e) && e));
                };
            }),
            (w._evalUrl = function (e) {
                return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
            }),
            w.fn.extend({
                wrapAll: function (t) {
                    return w.isFunction(t)
                        ? this.each(function (e) {
                              w(this).wrapAll(t.call(this, e));
                          })
                        : (this[0] &&
                              ((e = w(t, this[0].ownerDocument).eq(0).clone(!0)),
                              this[0].parentNode && e.insertBefore(this[0]),
                              e
                                  .map(function () {
                                      for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                                      return e;
                                  })
                                  .append(this)),
                          this);
                    var e;
                },
                wrapInner: function (n) {
                    return w.isFunction(n)
                        ? this.each(function (e) {
                              w(this).wrapInner(n.call(this, e));
                          })
                        : this.each(function () {
                              var e = w(this),
                                  t = e.contents();
                              t.length ? t.wrapAll(n) : e.append(n);
                          });
                },
                wrap: function (t) {
                    var n = w.isFunction(t);
                    return this.each(function (e) {
                        w(this).wrapAll(n ? t.call(this, e) : t);
                    });
                },
                unwrap: function () {
                    return this.parent()
                        .each(function () {
                            w.nodeName(this, "body") || w(this).replaceWith(this.childNodes);
                        })
                        .end();
                },
            }),
            (w.expr.filters.hidden = function (e) {
                if (m.reliableHiddenOffsets()) return e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length;
                var t,
                    n = e;
                if (!w.contains(n.ownerDocument || h, n)) return !0;
                for (; n && 1 === n.nodeType; ) {
                    if ("none" === (((t = n).style && t.style.display) || w.css(t, "display")) || "hidden" === n.type) return !0;
                    n = n.parentNode;
                }
                return !1;
            }),
            (w.expr.filters.visible = function (e) {
                return !w.expr.filters.hidden(e);
            });
        var tn = /%20/g,
            nn = /\[\]$/,
            an = /\r?\n/g,
            on = /^(?:submit|button|image|reset|file)$/i,
            rn = /^(?:input|select|textarea|keygen)/i,
            ln =
                ((w.param = function (e, t) {
                    function n(e, t) {
                        (t = w.isFunction(t) ? t() : null == t ? "" : t), (a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
                    }
                    var i,
                        a = [];
                    if ((void 0 === t && (t = w.ajaxSettings && w.ajaxSettings.traditional), w.isArray(e) || (e.jquery && !w.isPlainObject(e))))
                        w.each(e, function () {
                            n(this.name, this.value);
                        });
                    else
                        for (i in e)
                            !(function n(i, e, a, o) {
                                if (w.isArray(e))
                                    w.each(e, function (e, t) {
                                        a || nn.test(i) ? o(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, a, o);
                                    });
                                else if (a || "object" !== w.type(e)) o(i, e);
                                else for (var t in e) n(i + "[" + t + "]", e[t], a, o);
                            })(i, e[i], t, n);
                    return a.join("&").replace(tn, "+");
                }),
                w.fn.extend({
                    serialize: function () {
                        return w.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var e = w.prop(this, "elements");
                            return e ? w.makeArray(e) : this;
                        })
                            .filter(function () {
                                var e = this.type;
                                return this.name && !w(this).is(":disabled") && rn.test(this.nodeName) && !on.test(e) && (this.checked || !ye.test(e));
                            })
                            .map(function (e, t) {
                                var n = w(this).val();
                                return null == n
                                    ? null
                                    : w.isArray(n)
                                    ? w.map(n, function (e) {
                                          return { name: t.name, value: e.replace(an, "\r\n") };
                                      })
                                    : { name: t.name, value: n.replace(an, "\r\n") };
                            })
                            .get();
                    },
                }),
                (w.ajaxSettings.xhr =
                    void 0 !== k.ActiveXObject
                        ? function () {
                              return this.isLocal ? dn() : 8 < h.documentMode ? cn() : (/^(get|post|head|put|delete|options)$/i.test(this.type) && cn()) || dn();
                          }
                        : cn),
                0),
            sn = {},
            H = w.ajaxSettings.xhr();
        function cn() {
            try {
                return new k.XMLHttpRequest();
            } catch (e) {}
        }
        function dn() {
            try {
                return new k.ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
        k.attachEvent &&
            k.attachEvent("onunload", function () {
                for (var e in sn) sn[e](void 0, !0);
            }),
            (m.cors = !!H && "withCredentials" in H),
            (H = m.ajax = !!H) &&
                w.ajaxTransport(function (s) {
                    var c;
                    if (!s.crossDomain || m.cors)
                        return {
                            send: function (e, o) {
                                var t,
                                    r = s.xhr(),
                                    l = ++ln;
                                if ((r.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields)) for (t in s.xhrFields) r[t] = s.xhrFields[t];
                                for (t in (s.mimeType && r.overrideMimeType && r.overrideMimeType(s.mimeType), s.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e))
                                    void 0 !== e[t] && r.setRequestHeader(t, e[t] + "");
                                r.send((s.hasContent && s.data) || null),
                                    (c = function (e, t) {
                                        var n, i, a;
                                        if (c && (t || 4 === r.readyState))
                                            if ((delete sn[l], (c = void 0), (r.onreadystatechange = w.noop), t)) 4 !== r.readyState && r.abort();
                                            else {
                                                (a = {}), (n = r.status), "string" == typeof r.responseText && (a.text = r.responseText);
                                                try {
                                                    i = r.statusText;
                                                } catch (e) {
                                                    i = "";
                                                }
                                                n || !s.isLocal || s.crossDomain ? 1223 === n && (n = 204) : (n = a.text ? 200 : 404);
                                            }
                                        a && o(n, i, a, r.getAllResponseHeaders());
                                    }),
                                    s.async ? (4 === r.readyState ? k.setTimeout(c) : (r.onreadystatechange = sn[l] = c)) : c();
                            },
                            abort: function () {
                                c && c(void 0, !0);
                            },
                        };
                }),
            w.ajaxSetup({
                accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                    "text script": function (e) {
                        return w.globalEval(e), e;
                    },
                },
            }),
            w.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && ((e.type = "GET"), (e.global = !1));
            }),
            w.ajaxTransport("script", function (t) {
                var i, a;
                if (t.crossDomain)
                    return (
                        (a = h.head || w("head")[0] || h.documentElement),
                        {
                            send: function (e, n) {
                                ((i = h.createElement("script")).async = !0),
                                    t.scriptCharset && (i.charset = t.scriptCharset),
                                    (i.src = t.url),
                                    (i.onload = i.onreadystatechange = function (e, t) {
                                        (!t && i.readyState && !/loaded|complete/.test(i.readyState)) || ((i.onload = i.onreadystatechange = null), i.parentNode && i.parentNode.removeChild(i), (i = null), t || n(200, "success"));
                                    }),
                                    a.insertBefore(i, a.firstChild);
                            },
                            abort: function () {
                                i && i.onload(void 0, !0);
                            },
                        }
                    );
            });
        var un = [],
            fn = /(=)\?(?=&|$)|\?\?/,
            pn =
                (w.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function () {
                        var e = un.pop() || w.expando + "_" + qt++;
                        return (this[e] = !0), e;
                    },
                }),
                w.ajaxPrefilter("json jsonp", function (e, t, n) {
                    var i,
                        a,
                        o,
                        r = !1 !== e.jsonp && (fn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && fn.test(e.data) && "data");
                    if (r || "jsonp" === e.dataTypes[0])
                        return (
                            (i = e.jsonpCallback = w.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                            r ? (e[r] = e[r].replace(fn, "$1" + i)) : !1 !== e.jsonp && (e.url += (Bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                            (e.converters["script json"] = function () {
                                return o || w.error(i + " was not called"), o[0];
                            }),
                            (e.dataTypes[0] = "json"),
                            (a = k[i]),
                            (k[i] = function () {
                                o = arguments;
                            }),
                            n.always(function () {
                                void 0 === a ? w(k).removeProp(i) : (k[i] = a), e[i] && ((e.jsonpCallback = t.jsonpCallback), un.push(i)), o && w.isFunction(a) && a(o[0]), (o = a = void 0);
                            }),
                            "script"
                        );
                }),
                (w.parseHTML = function (e, t, n) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && ((n = t), (t = !1)), (t = t || h);
                    var i = G.exec(e),
                        n = !n && [];
                    return i ? [t.createElement(i[1])] : ((i = Ee([e], t, n)), n && n.length && w(n).remove(), w.merge([], i.childNodes));
                }),
                w.fn.load);
        function hn(e) {
            return w.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
        }
        return (
            (w.fn.load = function (e, t, n) {
                if ("string" != typeof e && pn) return pn.apply(this, arguments);
                var i,
                    a,
                    o,
                    r = this,
                    l = e.indexOf(" ");
                return (
                    -1 < l && ((i = w.trim(e.slice(l, e.length))), (e = e.slice(0, l))),
                    w.isFunction(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (a = "POST"),
                    0 < r.length &&
                        w
                            .ajax({ url: e, type: a || "GET", dataType: "html", data: t })
                            .done(function (e) {
                                (o = arguments), r.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
                            })
                            .always(
                                n &&
                                    function (e, t) {
                                        r.each(function () {
                                            n.apply(this, o || [e.responseText, t, e]);
                                        });
                                    }
                            ),
                    this
                );
            }),
            w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                w.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }),
            (w.expr.filters.animated = function (t) {
                return w.grep(w.timers, function (e) {
                    return t === e.elem;
                }).length;
            }),
            (w.offset = {
                setOffset: function (e, t, n) {
                    var i,
                        a,
                        o,
                        r,
                        l = w.css(e, "position"),
                        s = w(e),
                        c = {};
                    "static" === l && (e.style.position = "relative"),
                        (o = s.offset()),
                        (i = w.css(e, "top")),
                        (r = w.css(e, "left")),
                        (l = ("absolute" === l || "fixed" === l) && -1 < w.inArray("auto", [i, r]) ? ((a = (l = s.position()).top), l.left) : ((a = parseFloat(i) || 0), parseFloat(r) || 0)),
                        null != (t = w.isFunction(t) ? t.call(e, n, w.extend({}, o)) : t).top && (c.top = t.top - o.top + a),
                        null != t.left && (c.left = t.left - o.left + l),
                        "using" in t ? t.using.call(e, c) : s.css(c);
                },
            }),
            w.fn.extend({
                offset: function (t) {
                    if (arguments.length)
                        return void 0 === t
                            ? this
                            : this.each(function (e) {
                                  w.offset.setOffset(this, t, e);
                              });
                    var e,
                        n = { top: 0, left: 0 },
                        i = this[0],
                        a = i && i.ownerDocument;
                    return a
                        ? ((e = a.documentElement),
                          w.contains(e, i)
                              ? (void 0 !== i.getBoundingClientRect && (n = i.getBoundingClientRect()),
                                (i = hn(a)),
                                { top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) })
                              : n)
                        : void 0;
                },
                position: function () {
                    var e, t, n, i;
                    if (this[0])
                        return (
                            (n = { top: 0, left: 0 }),
                            (i = this[0]),
                            "fixed" === w.css(i, "position")
                                ? (t = i.getBoundingClientRect())
                                : ((e = this.offsetParent()), (t = this.offset()), ((n = w.nodeName(e[0], "html") ? n : e.offset()).top += w.css(e[0], "borderTopWidth", !0)), (n.left += w.css(e[0], "borderLeftWidth", !0))),
                            { top: t.top - n.top - w.css(i, "marginTop", !0), left: t.left - n.left - w.css(i, "marginLeft", !0) }
                        );
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && !w.nodeName(e, "html") && "static" === w.css(e, "position"); ) e = e.offsetParent;
                        return e || ct;
                    });
                },
            }),
            w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, a) {
                var o = /Y/.test(a);
                w.fn[t] = function (e) {
                    return f(
                        this,
                        function (e, t, n) {
                            var i = hn(e);
                            if (void 0 === n) return i ? (a in i ? i[a] : i.document.documentElement[t]) : e[t];
                            i ? i.scrollTo(o ? w(i).scrollLeft() : n, o ? n : w(i).scrollTop()) : (e[t] = n);
                        },
                        t,
                        e,
                        arguments.length,
                        null
                    );
                };
            }),
            w.each(["top", "left"], function (e, n) {
                w.cssHooks[n] = ut(m.pixelPosition, function (e, t) {
                    if (t) return (t = p(e, n)), st.test(t) ? w(e).position()[n] + "px" : t;
                });
            }),
            w.each({ Height: "height", Width: "width" }, function (o, r) {
                w.each({ padding: "inner" + o, content: r, "": "outer" + o }, function (i, e) {
                    w.fn[e] = function (e, t) {
                        var n = arguments.length && (i || "boolean" != typeof e),
                            a = i || (!0 === e || !0 === t ? "margin" : "border");
                        return f(
                            this,
                            function (e, t, n) {
                                var i;
                                return w.isWindow(e)
                                    ? e.document.documentElement["client" + o]
                                    : 9 === e.nodeType
                                    ? ((i = e.documentElement), Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o]))
                                    : void 0 === n
                                    ? w.css(e, t, a)
                                    : w.style(e, t, n, a);
                            },
                            r,
                            n ? e : void 0,
                            n,
                            null
                        );
                    };
                });
            }),
            w.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind: function (e, t) {
                    return this.off(e, null, t);
                },
                delegate: function (e, t, n, i) {
                    return this.on(t, e, n, i);
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                },
            }),
            (w.fn.size = function () {
                return this.length;
            }),
            (w.fn.andSelf = w.fn.addBack),
            layui.define(function (e) {
                e("jquery", (layui.$ = w));
            }),
            w
        );
    }),
    (function (p) {
        "use strict";
        function t(e) {
            function t() {
                n.creat();
            }
            var n = this;
            (n.index = ++m.index),
                (n.config.maxWidth = y(u).width() - 30),
                (n.config = y.extend({}, n.config, f.config, e)),
                document.body
                    ? t()
                    : setTimeout(function () {
                          t();
                      }, 30);
        }
        function h(e) {
            return i.skin ? " " + i.skin + " " + i.skin + "-" + e : "";
        }
        var y,
            u,
            e,
            n = p.layui && layui.define,
            f = {
                getPath:
                    ((e = document.currentScript
                        ? document.currentScript.src
                        : (function () {
                              for (var e, t = document.scripts, n = t.length - 1, i = n; 0 < i; i--)
                                  if ("interactive" === t[i].readyState) {
                                      e = t[i].src;
                                      break;
                                  }
                              return e || t[n].src;
                          })()),
                    (p.LAYUI_GLOBAL || {}).layer_dir || e.substring(0, e.lastIndexOf("/") + 1)),
                config: { removeFocus: !0 },
                end: {},
                events: { resize: {} },
                minStackIndex: 0,
                minStackArr: [],
                btn: ["Xác nhận", "Hủy bỏ"],
                type: ["dialog", "page", "iframe", "loading", "tips"],
                getStyle: function (e, t) {
                    return (e = e.currentStyle || p.getComputedStyle(e, null))[e.getPropertyValue ? "getPropertyValue" : "getAttribute"](t);
                },
                link: function (e, i, t) {
                    var n, a, o, r, l, s;
                    m.path &&
                        ((n = document.getElementsByTagName("head")[0]),
                        (a = document.createElement("link")),
                        (o = ((t = "string" == typeof i ? i : t) || e).replace(/\.|\//g, "")),
                        (r = "layuicss-" + o),
                        (l = "creating"),
                        (s = 0),
                        (a.rel = "stylesheet"),
                        (a.href = m.path + e),
                        (a.id = r),
                        document.getElementById(r) || n.appendChild(a),
                        "function" == typeof i &&
                            (function e(t) {
                                var n = document.getElementById(r);
                                return 100 < ++s
                                    ? p.console && console.error(o + ".css: Invalid")
                                    : void (1989 === parseInt(f.getStyle(n, "width"))
                                          ? (t === l && n.removeAttribute("lay-status"), n.getAttribute("lay-status") === l ? setTimeout(e, 100) : i())
                                          : (n.setAttribute("lay-status", l),
                                            setTimeout(function () {
                                                e(l);
                                            }, 100)));
                            })());
                },
            },
            m = {
                v: "3.6.0",
                ie: ((e = navigator.userAgent.toLowerCase()), !!(p.ActiveXObject || "ActiveXObject" in p) && ((e.match(/msie\s(\d+)/) || [])[1] || "11")),
                index: p.layer && p.layer.v ? 1e5 : 0,
                path: f.getPath,
                config: function (e, t) {
                    return (
                        (m.cache = f.config = y.extend({}, f.config, (e = e || {}))),
                        (m.path = f.config.path || m.path),
                        "string" == typeof e.extend && (e.extend = [e.extend]),
                        f.config.path && m.ready(),
                        e.extend && (n ? layui.addcss("modules/layer/" + e.extend) : f.link("css/" + e.extend)),
                        this
                    );
                },
                ready: function (e) {
                    var t = (n ? "modules/" : "css/") + "layer.css?v=" + m.v;
                    return n ? (layui["layui.all"] ? "function" == typeof e && e() : layui.addcss(t, e, "layer")) : f.link(t, e, "layer"), this;
                },
                alert: function (e, t, n) {
                    var i = "function" == typeof t;
                    return m.open(y.extend({ content: e, yes: (n = i ? t : n) }, i ? {} : t));
                },
                confirm: function (e, t, n, i) {
                    var a = "function" == typeof t;
                    return a && ((i = n), (n = t)), m.open(y.extend({ content: e, btn: f.btn, yes: n, btn2: i }, a ? {} : t));
                },
                msg: function (e, t, n) {
                    var i = "function" == typeof t,
                        a = ((a = f.config.skin) ? a + " " + a + "-msg" : "") || "layui-layer-msg",
                        o = g.anim.length - 1;
                    return (
                        i && (n = t),
                        m.open(
                            y.extend(
                                { content: e, time: 3e3, shade: !1, skin: a, title: !1, closeBtn: !1, btn: !1, resize: !1, end: n, removeFocus: !1 },
                                i && !f.config.skin ? { skin: a + " layui-layer-hui", anim: o } : ((-1 !== (t = t || {}).icon && (void 0 !== t.icon || f.config.skin)) || (t.skin = a + " " + (t.skin || "layui-layer-hui")), t)
                            )
                        )
                    );
                },
                load: function (e, t) {
                    return m.open(y.extend({ type: 3, icon: e || 0, resize: !1, shade: 0.01, removeFocus: !1 }, t));
                },
                tips: function (e, t, n) {
                    return m.open(y.extend({ type: 4, content: [e, t], closeBtn: !1, time: 3e3, shade: !1, resize: !1, fixed: !1, maxWidth: 260, removeFocus: !1 }, n));
                },
            },
            g = ((t.pt = t.prototype), ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"]),
            i =
                ((g.anim = {
                    0: "layer-anim-00",
                    1: "layer-anim-01",
                    2: "layer-anim-02",
                    3: "layer-anim-03",
                    4: "layer-anim-04",
                    5: "layer-anim-05",
                    6: "layer-anim-06",
                    slideDown: "layer-anim-slide-down",
                    slideLeft: "layer-anim-slide-left",
                    slideUp: "layer-anim-slide-up",
                    slideRight: "layer-anim-slide-right",
                }),
                (g.SHADE = "layui-layer-shade"),
                (g.MOVE = "layui-layer-move"),
                (t.pt.config = {
                    type: 0,
                    shade: 0.3,
                    fixed: !0,
                    move: g[1],
                    title: "Thông báo",
                    offset: "auto",
                    area: "auto",
                    closeBtn: 1,
                    icon: -1,
                    time: 0,
                    zIndex: 19891014,
                    maxWidth: 360,
                    anim: 0,
                    isOutAnim: !0,
                    minStack: !0,
                    moveType: 1,
                    resize: !0,
                    scrollbar: !0,
                    tips: 2,
                }),
                (t.pt.vessel = function (e, t) {
                    var n,
                        i = this.index,
                        a = this.config,
                        o = a.zIndex + i,
                        r = "object" == typeof a.title,
                        l = a.maxmin && (1 === a.type || 2 === a.type),
                        r = a.title ? '<div class="layui-layer-title" style="' + (r ? a.title[1] : "") + '">' + (r ? a.title[0] : a.title) + "</div>" : "";
                    return (
                        (a.zIndex = o),
                        t(
                            [
                                a.shade ? '<div class="' + g.SHADE + '" id="' + g.SHADE + i + '" times="' + i + '" style="z-index:' + (o - 1) + '; "></div>' : "",
                                '<div class="' +
                                    g[0] +
                                    " layui-layer-" +
                                    f.type[a.type] +
                                    ((0 != a.type && 2 != a.type) || a.shade ? "" : " layui-layer-border") +
                                    " " +
                                    (a.skin || "") +
                                    '" id="' +
                                    g[0] +
                                    i +
                                    '" type="' +
                                    f.type[a.type] +
                                    '" times="' +
                                    i +
                                    '" showtime="' +
                                    a.time +
                                    '" conType="' +
                                    (e ? "object" : "string") +
                                    '" style="z-index: ' +
                                    o +
                                    "; width:" +
                                    a.area[0] +
                                    ";height:" +
                                    a.area[1] +
                                    ";position:" +
                                    (a.fixed ? "fixed;" : "absolute;") +
                                    '">' +
                                    (e && 2 != a.type ? "" : r) +
                                    "<div" +
                                    (a.id ? ' id="' + a.id + '"' : "") +
                                    ' class="layui-layer-content' +
                                    (0 == a.type && -1 !== a.icon ? " layui-layer-padding" : "") +
                                    (3 == a.type ? " layui-layer-loading" + a.icon : "") +
                                    '">' +
                                    ((i = ["layui-icon-tips", "layui-icon-success", "layui-icon-error", "layui-icon-question", "layui-icon-lock", "layui-icon-face-cry", "layui-icon-face-smile"]),
                                    (o = "layui-anim layui-anim-rotate layui-anim-loop"),
                                    0 == a.type && -1 !== a.icon
                                        ? '<i class="layui-layer-face layui-icon ' + ((n = 16 == a.icon ? "layui-icon layui-icon-loading " + o : n) || i[a.icon] || i[0]) + '"></i>'
                                        : 3 == a.type
                                        ? ((n = ["layui-icon-loading", "layui-icon-loading-1"]),
                                          2 == a.icon ? '<div class="layui-layer-loading-2 ' + o + '"></div>' : '<i class="layui-layer-loading-icon layui-icon ' + (n[a.icon] || n[0]) + " " + o + '"></i>')
                                        : "") +
                                    (((1 != a.type || !e) && a.content) || "") +
                                    '</div><div class="layui-layer-setwin">' +
                                    ((i = []),
                                    l && (i.push('<span class="layui-layer-min"></span>'), i.push('<span class="layui-layer-max"></span>')),
                                    a.closeBtn && i.push('<span class="layui-icon layui-icon-close ' + [g[7], g[7] + (a.title ? a.closeBtn : 4 == a.type ? "1" : "2")].join(" ") + '"></span>'),
                                    i.join("")) +
                                    "</div>" +
                                    (a.btn
                                        ? (function () {
                                              var e = "";
                                              "string" == typeof a.btn && (a.btn = [a.btn]);
                                              for (var t = 0, n = a.btn.length; t < n; t++) e += '<a class="' + g[6] + t + '">' + a.btn[t] + "</a>";
                                              return '<div class="' + g[6] + " layui-layer-btn-" + (a.btnAlign || "") + '">' + e + "</div>";
                                          })()
                                        : "") +
                                    (a.resize ? '<span class="layui-layer-resize"></span>' : "") +
                                    "</div>",
                            ],
                            r,
                            y('<div class="' + g.MOVE + '" id="' + g.MOVE + '"></div>')
                        ),
                        this
                    );
                }),
                (t.pt.creat = function () {
                    var e,
                        t,
                        n,
                        i,
                        a,
                        o = this,
                        r = o.config,
                        l = o.index,
                        s = "object" == typeof (d = r.content),
                        c = y("body");
                    if (r.id && y("." + g[0]).find("#" + r.id)[0])
                        return (
                            (t = (e = y("#" + r.id).closest("." + g[0])).attr("times")),
                            (n = e.data("config")),
                            (i = y("#" + g.SHADE + t)),
                            void ("min" === (e.data("maxminStatus") || {}) ? m.restore(t) : n.hideOnClose && (i.show(), e.show()))
                        );
                    switch ((r.removeFocus && document.activeElement.blur(), "string" == typeof r.area && (r.area = "auto" === r.area ? ["", ""] : [r.area, ""]), r.shift && (r.anim = r.shift), 6 == m.ie && (r.fixed = !1), r.type)) {
                        case 0:
                            (r.btn = "btn" in r ? r.btn : f.btn[0]), m.closeAll("dialog");
                            break;
                        case 2:
                            var d = (r.content = s ? r.content : [r.content || "", "auto"]);
                            r.content =
                                '<iframe scrolling="' +
                                (r.content[1] || "auto") +
                                '" allowtransparency="true" id="' +
                                g[4] +
                                l +
                                '" name="' +
                                g[4] +
                                l +
                                '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' +
                                r.content[0] +
                                '"></iframe>';
                            break;
                        case 3:
                            delete r.title, delete r.closeBtn, -1 === r.icon && r.icon, m.closeAll("loading");
                            break;
                        case 4:
                            s || (r.content = [r.content, "body"]),
                                (r.follow = r.content[1]),
                                (r.content = r.content[0] + '<i class="layui-layer-TipsG"></i>'),
                                delete r.title,
                                (r.tips = "object" == typeof r.tips ? r.tips : [r.tips, !0]),
                                r.tipsMore || m.closeAll("tips");
                    }
                    o
                        .vessel(s, function (e, t, n) {
                            c.append(e[0]),
                                s
                                    ? 2 == r.type || 4 == r.type
                                        ? y("body").append(e[1])
                                        : d.parents("." + g[0])[0] ||
                                          (d.data("display", d.css("display")).show().addClass("layui-layer-wrap").wrap(e[1]),
                                          y("#" + g[0] + l)
                                              .find("." + g[5])
                                              .before(t))
                                    : c.append(e[1]),
                                y("#" + g.MOVE)[0] || c.append((f.moveElem = n)),
                                (o.layero = y("#" + g[0] + l)),
                                (o.shadeo = y("#" + g.SHADE + l)),
                                r.scrollbar || g.html.css("overflow", "hidden").attr("layer-full", l);
                        })
                        .auto(l),
                        o.shadeo.css({ "background-color": r.shade[1] || "#000", opacity: r.shade[0] || r.shade }),
                        2 == r.type && 6 == m.ie && o.layero.find("iframe").attr("src", d[0]),
                        4 == r.type
                            ? o.tips()
                            : (o.offset(),
                              parseInt(f.getStyle(document.getElementById(g.MOVE), "z-index")) ||
                                  (o.layero.css("visibility", "hidden"),
                                  m.ready(function () {
                                      o.offset(), o.layero.css("visibility", "visible");
                                  }))),
                        r.fixed &&
                            !f.events.resize[o.index] &&
                            ((f.events.resize[o.index] = function () {
                                o.resize();
                            }),
                            u.on("resize", f.events.resize[o.index])),
                        r.time <= 0 ||
                            setTimeout(function () {
                                m.close(o.index);
                            }, r.time),
                        o.move().callback(),
                        g.anim[r.anim] &&
                            ((a = "layer-anim " + g.anim[r.anim]),
                            o.layero.addClass(a).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                                y(this).removeClass(a);
                            })),
                        o.layero.data("config", r);
                }),
                (t.pt.resize = function () {
                    var e = this,
                        t = e.config;
                    e.offset(), (/^\d+%$/.test(t.area[0]) || /^\d+%$/.test(t.area[1])) && e.auto(e.index), 4 == t.type && e.tips();
                }),
                (t.pt.auto = function (e) {
                    var t = this.config,
                        n = y("#" + g[0] + e),
                        i = ("" === t.area[0] && 0 < t.maxWidth && (m.ie && m.ie < 8 && t.btn && n.width(n.innerWidth()), n.outerWidth() > t.maxWidth && n.width(t.maxWidth)), [n.innerWidth(), n.innerHeight()]),
                        a = n.find(g[1]).outerHeight() || 0,
                        o = n.find("." + g[6]).outerHeight() || 0,
                        e = function (e) {
                            (e = n.find(e)).height(i[1] - a - o - 2 * (0 | parseFloat(e.css("padding-top"))));
                        };
                    return (
                        2 === t.type
                            ? e("iframe")
                            : "" === t.area[1]
                            ? 0 < t.maxHeight && n.outerHeight() > t.maxHeight
                                ? ((i[1] = t.maxHeight), e("." + g[5]))
                                : t.fixed && i[1] >= u.height() && ((i[1] = u.height()), e("." + g[5]))
                            : e("." + g[5]),
                        this
                    );
                }),
                (t.pt.offset = function () {
                    var e = this,
                        t = e.config,
                        n = e.layero,
                        i = [n.outerWidth(), n.outerHeight()],
                        a = "object" == typeof t.offset;
                    (e.offsetTop = (u.height() - i[1]) / 2),
                        (e.offsetLeft = (u.width() - i[0]) / 2),
                        a
                            ? ((e.offsetTop = t.offset[0]), (e.offsetLeft = t.offset[1] || e.offsetLeft))
                            : "auto" !== t.offset &&
                              ("t" === t.offset
                                  ? (e.offsetTop = 0)
                                  : "r" === t.offset
                                  ? (e.offsetLeft = u.width() - i[0])
                                  : "b" === t.offset
                                  ? (e.offsetTop = u.height() - i[1])
                                  : "l" === t.offset
                                  ? (e.offsetLeft = 0)
                                  : "lt" === t.offset
                                  ? ((e.offsetTop = 0), (e.offsetLeft = 0))
                                  : "lb" === t.offset
                                  ? ((e.offsetTop = u.height() - i[1]), (e.offsetLeft = 0))
                                  : "rt" === t.offset
                                  ? ((e.offsetTop = 0), (e.offsetLeft = u.width() - i[0]))
                                  : "rb" === t.offset
                                  ? ((e.offsetTop = u.height() - i[1]), (e.offsetLeft = u.width() - i[0]))
                                  : (e.offsetTop = t.offset)),
                        t.fixed ||
                            ((e.offsetTop = /%$/.test(e.offsetTop) ? (u.height() * parseFloat(e.offsetTop)) / 100 : parseFloat(e.offsetTop)),
                            (e.offsetLeft = /%$/.test(e.offsetLeft) ? (u.width() * parseFloat(e.offsetLeft)) / 100 : parseFloat(e.offsetLeft)),
                            (e.offsetTop += u.scrollTop()),
                            (e.offsetLeft += u.scrollLeft())),
                        "min" === n.data("maxminStatus") && ((e.offsetTop = u.height() - (n.find(g[1]).outerHeight() || 0)), (e.offsetLeft = n.css("left"))),
                        n.css({ top: e.offsetTop, left: e.offsetLeft });
                }),
                (t.pt.tips = function () {
                    var e = this.config,
                        t = this.layero,
                        n = [t.outerWidth(), t.outerHeight()],
                        i = { width: (o = (o = y(e.follow))[0] ? o : y("body")).outerWidth(), height: o.outerHeight(), top: o.offset().top, left: o.offset().left },
                        a = t.find(".layui-layer-TipsG"),
                        o = e.tips[0];
                    e.tips[1] || a.remove(),
                        (i.autoLeft = function () {
                            0 < i.left + n[0] - u.width() ? ((i.tipLeft = i.left + i.width - n[0]), a.css({ right: 12, left: "auto" })) : (i.tipLeft = i.left);
                        }),
                        (i.where = [
                            function () {
                                i.autoLeft(), (i.tipTop = i.top - n[1] - 10), a.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", e.tips[1]);
                            },
                            function () {
                                (i.tipLeft = i.left + i.width + 10), (i.tipTop = i.top), a.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", e.tips[1]);
                            },
                            function () {
                                i.autoLeft(), (i.tipTop = i.top + i.height + 10), a.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", e.tips[1]);
                            },
                            function () {
                                (i.tipLeft = i.left - n[0] - 10), (i.tipTop = i.top), a.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", e.tips[1]);
                            },
                        ]),
                        i.where[o - 1](),
                        1 === o
                            ? i.top - (u.scrollTop() + n[1] + 16) < 0 && i.where[2]()
                            : 2 === o
                            ? 0 < u.width() - (i.left + i.width + n[0] + 16) || i.where[3]()
                            : 3 === o
                            ? 0 < i.top - u.scrollTop() + i.height + n[1] + 16 - u.height() && i.where[0]()
                            : 4 === o && 0 < n[0] + 16 - i.left && i.where[1](),
                        t.find("." + g[5]).css({ "background-color": e.tips[1], "padding-right": e.closeBtn ? "30px" : "" }),
                        t.css({ left: i.tipLeft - (e.fixed ? u.scrollLeft() : 0), top: i.tipTop - (e.fixed ? u.scrollTop() : 0) });
                }),
                (t.pt.move = function () {
                    var i = this,
                        a = i.config,
                        e = y(document),
                        o = i.layero,
                        s = ["LAY_MOVE_DICT", "LAY_RESIZE_DICT"],
                        t = o.find(a.move),
                        n = o.find(".layui-layer-resize");
                    return (
                        a.move && t.css("cursor", "move"),
                        t.on("mousedown", function (e) {
                            var t, n;
                            e.button ||
                                ((t = y(this)),
                                (n = {}),
                                a.move &&
                                    ((n.layero = o),
                                    (n.config = a),
                                    (n.offset = [e.clientX - parseFloat(o.css("left")), e.clientY - parseFloat(o.css("top"))]),
                                    t.data(s[0], n),
                                    (f.eventMoveElem = t),
                                    f.moveElem.css("cursor", "move").show()),
                                e.preventDefault());
                        }),
                        n.on("mousedown", function (e) {
                            var t = y(this),
                                n = {};
                            a.resize &&
                                ((n.layero = o),
                                (n.config = a),
                                (n.offset = [e.clientX, e.clientY]),
                                (n.index = i.index),
                                (n.area = [o.outerWidth(), o.outerHeight()]),
                                t.data(s[1], n),
                                (f.eventResizeElem = t),
                                f.moveElem.css("cursor", "se-resize").show()),
                                e.preventDefault();
                        }),
                        f.docEvent ||
                            (e
                                .on("mousemove", function (e) {
                                    var t, n, i, a, o, r, l;
                                    f.eventMoveElem &&
                                        ((t = (a = f.eventMoveElem.data(s[0]) || {}).layero),
                                        (o = a.config),
                                        (r = e.clientX - a.offset[0]),
                                        (l = e.clientY - a.offset[1]),
                                        (n = "fixed" === t.css("position")),
                                        e.preventDefault(),
                                        (a.stX = n ? 0 : u.scrollLeft()),
                                        (a.stY = n ? 0 : u.scrollTop()),
                                        o.moveOut || ((n = u.width() - t.outerWidth() + a.stX), (i = u.height() - t.outerHeight() + a.stY), n < (r = r < a.stX ? a.stX : r) && (r = n), i < (l = l < a.stY ? a.stY : l) && (l = i)),
                                        t.css({ left: r, top: l })),
                                        f.eventResizeElem &&
                                            ((o = (a = f.eventResizeElem.data(s[1]) || {}).config),
                                            (r = e.clientX - a.offset[0]),
                                            (l = e.clientY - a.offset[1]),
                                            e.preventDefault(),
                                            m.style(a.index, { width: a.area[0] + r, height: a.area[1] + l }),
                                            o.resizing && o.resizing(a.layero));
                                })
                                .on("mouseup", function (e) {
                                    var t, n;
                                    f.eventMoveElem && ((n = (t = f.eventMoveElem.data(s[0]) || {}).config), f.eventMoveElem.removeData(s[0]), delete f.eventMoveElem, f.moveElem.hide(), n.moveEnd && n.moveEnd(t.layero)),
                                        f.eventResizeElem && (f.eventResizeElem.removeData(s[1]), delete f.eventResizeElem, f.moveElem.hide());
                                }),
                            (f.docEvent = !0)),
                        i
                    );
                }),
                (t.pt.callback = function () {
                    var t = this,
                        n = t.layero,
                        i = t.config;
                    t.openLayer(),
                        i.success &&
                            (2 == i.type
                                ? n.find("iframe").on("load", function () {
                                      i.success(n, t.index, t);
                                  })
                                : i.success(n, t.index, t)),
                        6 == m.ie && t.IE6(n),
                        n
                            .find("." + g[6])
                            .children("a")
                            .on("click", function () {
                                var e = y(this).index();
                                0 === e ? (i.yes ? i.yes(t.index, n, t) : i.btn1 ? i.btn1(t.index, n, t) : m.close(t.index)) : !1 !== (i["btn" + (e + 1)] && i["btn" + (e + 1)](t.index, n, t)) && m.close(t.index);
                            }),
                        n.find("." + g[7]).on("click", function () {
                            !1 !== (i.cancel && i.cancel(t.index, n, t)) && m.close(t.index);
                        }),
                        i.shadeClose &&
                            t.shadeo.on("click", function () {
                                m.close(t.index);
                            }),
                        n.find(".layui-layer-min").on("click", function () {
                            !1 !== (i.min && i.min(n, t.index, t)) && m.min(t.index, i);
                        }),
                        n.find(".layui-layer-max").on("click", function () {
                            y(this).hasClass("layui-layer-maxmin")
                                ? (m.restore(t.index), i.restore && i.restore(n, t.index, t))
                                : (m.full(t.index, i),
                                  setTimeout(function () {
                                      i.full && i.full(n, t.index, t);
                                  }, 100));
                        }),
                        i.end && (f.end[t.index] = i.end);
                }),
                (f.reselect = function () {
                    y.each(y("select"), function (e, t) {
                        var n = y(this);
                        n.parents("." + g[0])[0] || (1 == n.attr("layer") && y("." + g[0]).length < 1 && n.removeAttr("layer").show());
                    });
                }),
                (t.pt.IE6 = function (e) {
                    y("select").each(function (e, t) {
                        var n = y(this);
                        n.parents("." + g[0])[0] || ("none" !== n.css("display") && n.attr({ layer: "1" }).hide());
                    });
                }),
                (t.pt.openLayer = function () {
                    (m.zIndex = this.config.zIndex),
                        (m.setTop = function (e) {
                            return (
                                (m.zIndex = parseInt(e[0].style.zIndex)),
                                e.on("mousedown", function () {
                                    m.zIndex++, e.css("z-index", m.zIndex + 1);
                                }),
                                m.zIndex
                            );
                        });
                }),
                (f.record = function (e) {
                    if (!e[0]) return p.console && console.error("index error");
                    var t = [e[0].style.width || e.width(), e[0].style.height || e.height(), e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
                    e.find(".layui-layer-max").addClass("layui-layer-maxmin"), e.attr({ area: t });
                }),
                (f.rescollbar = function (e) {
                    g.html.attr("layer-full") == e && (g.html[0].style.removeProperty ? g.html[0].style.removeProperty("overflow") : g.html[0].style.removeAttribute("overflow"), g.html.removeAttr("layer-full"));
                }),
                ((p.layer = m).getChildFrame = function (e, t) {
                    return (
                        (t = t || y("." + g[4]).attr("times")),
                        y("#" + g[0] + t)
                            .find("iframe")
                            .contents()
                            .find(e)
                    );
                }),
                (m.getFrameIndex = function (e) {
                    return y("#" + e)
                        .parents("." + g[4])
                        .attr("times");
                }),
                (m.iframeAuto = function (e) {
                    var t, n, i;
                    e &&
                        ((t = m.getChildFrame("html", e).outerHeight()),
                        (n = (e = y("#" + g[0] + e)).find(g[1]).outerHeight() || 0),
                        (i = e.find("." + g[6]).outerHeight() || 0),
                        e.css({ height: t + n + i }),
                        e.find("iframe").css({ height: t }));
                }),
                (m.iframeSrc = function (e, t) {
                    y("#" + g[0] + e)
                        .find("iframe")
                        .attr("src", t);
                }),
                (m.style = function (e, t, n) {
                    var i = (e = y("#" + g[0] + e)).find(".layui-layer-content"),
                        a = e.attr("type"),
                        o = e.find(g[1]).outerHeight() || 0,
                        r = e.find("." + g[6]).outerHeight() || 0;
                    e.attr("minLeft"),
                        a !== f.type[3] &&
                            a !== f.type[4] &&
                            (n || (parseFloat(t.width) <= 260 && (t.width = 260), parseFloat(t.height) - o - r <= 64 && (t.height = 64 + o + r)),
                            e.css(t),
                            (r = e.find("." + g[6]).outerHeight() || 0),
                            a === f.type[2]
                                ? e.find("iframe").css({ height: ("number" == typeof t.height ? t.height : e.height()) - o - r })
                                : i.css({ height: ("number" == typeof t.height ? t.height : e.height()) - o - r - parseFloat(i.css("padding-top")) - parseFloat(i.css("padding-bottom")) }));
                }),
                (m.min = function (e, t) {
                    var n,
                        i,
                        a,
                        o,
                        r,
                        l,
                        s = y("#" + g[0] + e),
                        c = s.data("maxminStatus");
                    "min" !== c &&
                        ("max" === c && m.restore(e),
                        s.data("maxminStatus", "min"),
                        (t = t || s.data("config") || {}),
                        (c = y("#" + g.SHADE + e)),
                        (n = s.find(".layui-layer-min")),
                        (i = s.find(g[1]).outerHeight() || 0),
                        (o = (a = "string" == typeof (o = s.attr("minLeft"))) ? o : 181 * f.minStackIndex + "px"),
                        (r = s.css("position")),
                        (l = { width: 180, height: i, position: "fixed", overflow: "hidden" }),
                        f.record(s),
                        0 < f.minStackArr.length && ((o = f.minStackArr[0]), f.minStackArr.shift()),
                        parseFloat(o) + 180 > u.width() && (o = u.width() - 180 - ((f.minStackArr.edgeIndex = f.minStackArr.edgeIndex || 0), (f.minStackArr.edgeIndex += 3))) < 0 && (o = 0),
                        t.minStack && ((l.left = o), (l.top = u.height() - i), a || f.minStackIndex++, s.attr("minLeft", o)),
                        s.attr("position", r),
                        m.style(e, l, !0),
                        n.hide(),
                        "page" === s.attr("type") && s.find(g[4]).hide(),
                        f.rescollbar(e),
                        c.hide());
                }),
                (m.restore = function (e) {
                    var t = y("#" + g[0] + e),
                        n = y("#" + g.SHADE + e),
                        i = t.attr("area").split(","),
                        a = t.attr("type");
                    t.removeData("maxminStatus"),
                        m.style(e, { width: i[0], height: i[1], top: parseFloat(i[2]), left: parseFloat(i[3]), position: t.attr("position"), overflow: "visible" }, !0),
                        t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),
                        t.find(".layui-layer-min").show(),
                        "page" === a && t.find(g[4]).show(),
                        f.rescollbar(e),
                        n.show();
                }),
                (m.full = function (t) {
                    var n = y("#" + g[0] + t),
                        e = n.data("maxminStatus");
                    "max" !== e &&
                        ("min" === e && m.restore(t),
                        n.data("maxminStatus", "max"),
                        f.record(n),
                        g.html.attr("layer-full") || g.html.css("overflow", "hidden").attr("layer-full", t),
                        clearTimeout(void 0),
                        setTimeout(function () {
                            var e = "fixed" === n.css("position");
                            m.style(t, { top: e ? 0 : u.scrollTop(), left: e ? 0 : u.scrollLeft(), width: "100%", height: "100%" }, !0), n.find(".layui-layer-min").hide();
                        }, 100));
                }),
                (m.title = function (e, t) {
                    y("#" + g[0] + (t || m.index))
                        .find(g[1])
                        .html(e);
                }),
                (m.close = function (a, o) {
                    var r,
                        e,
                        l = (t = y("." + g[0])
                            .find("#" + a)
                            .closest("." + g[0]))[0]
                            ? ((a = t.attr("times")), t)
                            : y("#" + g[0] + a),
                        s = l.attr("type"),
                        t = l.data("config") || {},
                        c = t.id && t.hideOnClose;
                    l[0] &&
                        ((r = { slideDown: "layer-anim-slide-down-out", slideLeft: "layer-anim-slide-left-out", slideUp: "layer-anim-slide-up-out", slideRight: "layer-anim-slide-right-out" }[t.anim] || "layer-anim-close"),
                        (e = function () {
                            var e = "layui-layer-wrap";
                            if (c) return l.removeClass("layer-anim " + r), l.hide();
                            if (s === f.type[1] && "object" === l.attr("conType")) {
                                l.children(":not(." + g[5] + ")").remove();
                                for (var t = l.find("." + e), n = 0; n < 2; n++) t.unwrap();
                                t.css("display", t.data("display")).removeClass(e);
                            } else {
                                if (s === f.type[2])
                                    try {
                                        var i = y("#" + g[4] + a)[0];
                                        i.contentWindow.document.write(""), i.contentWindow.close(), l.find("." + g[5])[0].removeChild(i);
                                    } catch (e) {}
                                (l[0].innerHTML = ""), l.remove();
                            }
                            "function" == typeof f.end[a] && f.end[a](), delete f.end[a], "function" == typeof o && o(), f.events.resize[a] && (u.off("resize", f.events.resize[a]), delete f.events.resize[a]);
                        }),
                        y("#" + g.SHADE + a)[c ? "hide" : "remove"](),
                        t.isOutAnim && l.addClass("layer-anim " + r),
                        6 == m.ie && f.reselect(),
                        f.rescollbar(a),
                        "string" == typeof l.attr("minLeft") && (f.minStackIndex--, f.minStackArr.push(l.attr("minLeft"))),
                        (m.ie && m.ie < 10) || !t.isOutAnim
                            ? e()
                            : setTimeout(function () {
                                  e();
                              }, 200));
                }),
                (m.closeAll = function (n, i) {
                    "function" == typeof n && ((i = n), (n = null));
                    var a = y("." + g[0]);
                    y.each(a, function (e) {
                        var t = y(this);
                        (n ? t.attr("type") === n : 1) && m.close(t.attr("times"), e === a.length - 1 ? i : null);
                    }),
                        0 === a.length && "function" == typeof i && i();
                }),
                (m.closeLast = function (e) {
                    m.close(y(".layui-layer-" + (e = e || "page") + ":last").attr("times"));
                }),
                m.cache || {});
        (m.prompt = function (n, i) {
            var e = "",
                t = "";
            "function" == typeof (n = n || {}) && (i = n), n.area && ((e = 'style="width: ' + (o = n.area)[0] + "; height: " + o[1] + ';"'), delete n.area), n.placeholder && (t = ' placeholder="' + n.placeholder + '"');
            var a,
                o = 2 == n.formType ? '<textarea class="layui-layer-input"' + e + t + "></textarea>" : '<input type="' + (1 == n.formType ? "password" : "text") + '" class="layui-layer-input"' + t + ">",
                r = n.success;
            return (
                delete n.success,
                m.open(
                    y.extend(
                        {
                            type: 1,
                            btn: ["Xác nhận", "Hủy bỏ"],
                            content: o,
                            skin: "layui-layer-prompt" + h("prompt"),
                            maxWidth: u.width(),
                            success: function (e) {
                                (a = e.find(".layui-layer-input")).val(n.value || "").focus(), "function" == typeof r && r(e);
                            },
                            resize: !1,
                            yes: function (e) {
                                var t = a.val();
                                t.length > (n.maxlength || 500) ? m.tips("Tối đa" + (n.maxlength || 500) + " ký tự", a, { tips: 1 }) : i && i(t, e, a);
                            },
                        },
                        n
                    )
                )
            );
        }),
            (m.tab = function (i) {
                var a = (i = i || {}).tab || {},
                    o = "layui-this",
                    r = i.success;
                return (
                    delete i.success,
                    m.open(
                        y.extend(
                            {
                                type: 1,
                                skin: "layui-layer-tab" + h("tab"),
                                resize: !1,
                                title: (function () {
                                    var e = a.length,
                                        t = 1,
                                        n = "";
                                    if (0 < e) for (n = '<span class="' + o + '">' + a[0].title + "</span>"; t < e; t++) n += "<span>" + a[t].title + "</span>";
                                    return n;
                                })(),
                                content:
                                    '<ul class="layui-layer-tabmain">' +
                                    (function () {
                                        var e = a.length,
                                            t = 1,
                                            n = "";
                                        if (0 < e)
                                            for (n = '<li class="layui-layer-tabli ' + o + '">' + (a[0].content || "no content") + "</li>"; t < e; t++) n += '<li class="layui-layer-tabli">' + (a[t].content || "no  content") + "</li>";
                                        return n;
                                    })() +
                                    "</ul>",
                                success: function (e) {
                                    var t = e.find(".layui-layer-title").children(),
                                        n = e.find(".layui-layer-tabmain").children();
                                    t.on("mousedown", function (e) {
                                        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
                                        var t = (e = y(this)).index();
                                        e.addClass(o).siblings().removeClass(o), n.eq(t).show().siblings().hide(), "function" == typeof i.change && i.change(t);
                                    }),
                                        "function" == typeof r && r(e);
                                },
                            },
                            i
                        )
                    )
                );
            }),
            (m.photos = function (i, e, a) {
                var o = {};
                if ((i = i || {}).photos) {
                    var t = (d = !("string" == typeof i.photos || i.photos instanceof y)) ? i.photos : {},
                        r = t.data || [],
                        l = t.start || 0,
                        s = ((o.imgIndex = 1 + (0 | l)), (i.img = i.img || "img"), i.success);
                    if ((delete i.success, d)) {
                        if (0 === r.length) return m.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;");
                    } else {
                        var n = y(i.photos),
                            c = function () {
                                (r = []),
                                    n.find(i.img).each(function (e) {
                                        var t = y(this);
                                        t.attr("layer-index", e), r.push({ alt: t.attr("alt"), pid: t.attr("layer-pid"), src: t.attr("lay-src") || t.attr("layer-src") || t.attr("src"), thumb: t.attr("src") });
                                    });
                            };
                        if ((c(), 0 === r.length)) return;
                        if (
                            (e ||
                                n.on("click", i.img, function () {
                                    c();
                                    var e = y(this).attr("layer-index");
                                    m.photos(y.extend(i, { photos: { start: e, data: r, tab: i.tab }, full: i.full }), !0);
                                }),
                            !e)
                        )
                            return;
                    }
                    (o.imgprev = function (e) {
                        o.imgIndex--, o.imgIndex < 1 && (o.imgIndex = r.length), o.tabimg(e);
                    }),
                        (o.imgnext = function (e, t) {
                            o.imgIndex++, (o.imgIndex > r.length && ((o.imgIndex = 1), t)) || o.tabimg(e);
                        }),
                        (o.keyup = function (e) {
                            var t;
                            o.end || ((t = e.keyCode), e.preventDefault(), 37 === t ? o.imgprev(!0) : 39 === t ? o.imgnext(!0) : 27 === t && m.close(o.index));
                        }),
                        (o.tabimg = function (e) {
                            if (!(r.length <= 1)) return (t.start = o.imgIndex - 1), m.close(o.index), m.photos(i, !0, e);
                        }),
                        (o.event = function () {
                            o.bigimg.find(".layui-layer-imgprev").on("click", function (e) {
                                e.preventDefault(), o.imgprev(!0);
                            }),
                                o.bigimg.find(".layui-layer-imgnext").on("click", function (e) {
                                    e.preventDefault(), o.imgnext(!0);
                                }),
                                y(document).on("keyup", o.keyup);
                        }),
                        (o.loadi = m.load(1, { shade: !("shade" in i) && 0.9, scrollbar: !1 }));
                    var d = r[l].src,
                        u = function (e) {
                            m.close(o.loadi);
                            var t,
                                n = r[l].alt || "";
                            a && (i.anim = -1),
                                (o.index = m.open(
                                    y.extend(
                                        {
                                            type: 1,
                                            id: "layui-layer-photos",
                                            area:
                                                ((e = [e.width, e.height]),
                                                (t = [y(p).width() - 100, y(p).height() - 100]),
                                                !i.full &&
                                                    (e[0] > t[0] || e[1] > t[1]) &&
                                                    ((t = [e[0] / t[0], e[1] / t[1]])[1] < t[0] ? ((e[0] = e[0] / t[0]), (e[1] = e[1] / t[0])) : t[0] < t[1] && ((e[0] = e[0] / t[1]), (e[1] = e[1] / t[1]))),
                                                [e[0] + "px", e[1] + "px"]),
                                            title: !1,
                                            shade: 0.9,
                                            shadeClose: !0,
                                            closeBtn: !1,
                                            move: ".layui-layer-phimg img",
                                            moveType: 1,
                                            scrollbar: !1,
                                            moveOut: !0,
                                            anim: 5,
                                            isOutAnim: !1,
                                            skin: "layui-layer-photos" + h("photos"),
                                            content:
                                                '<div class="layui-layer-phimg"><img src="' +
                                                r[l].src +
                                                '" alt="' +
                                                n +
                                                '" layer-pid="' +
                                                r[l].pid +
                                                '">' +
                                                ((t = ['<div class="layui-layer-imgsee">']),
                                                1 < r.length &&
                                                    t.push(
                                                        [
                                                            '<div class="layui-layer-imguide">',
                                                            '<span class="layui-icon layui-icon-left layui-layer-iconext layui-layer-imgprev"></span>',
                                                            '<span class="layui-icon layui-icon-right layui-layer-iconext layui-layer-imgnext"></span>',
                                                            "</div>",
                                                        ].join("")
                                                    ),
                                                i.hideFooter ||
                                                    t.push(
                                                        [
                                                            '<div class="layui-layer-imgbar">',
                                                            '<div class="layui-layer-imgtit">',
                                                            "<h3>" + n + "</h3>",
                                                            "<em>" + o.imgIndex + " / " + r.length + "</em>",
                                                            '<a href="' + r[l].src + '" target="_blank">Xem ảnh gốc</a>',
                                                            "</div>",
                                                            "</div>",
                                                        ].join("")
                                                    ),
                                                t.push("</div>"),
                                                t.join("")) +
                                                "</div>",
                                            success: function (e, t) {
                                                (o.bigimg = e.find(".layui-layer-phimg")), (o.imgsee = e.find(".layui-layer-imgbar")), o.event(e), i.tab && i.tab(r[l], e), "function" == typeof s && s(e);
                                            },
                                            end: function () {
                                                (o.end = !0), y(document).off("keyup", o.keyup);
                                            },
                                        },
                                        i
                                    )
                                ));
                        },
                        f = new Image();
                    (f.src = d),
                        f.complete
                            ? u(f)
                            : ((f.onload = function () {
                                  (f.onload = null), u(f);
                              }),
                              (f.onerror = function (e) {
                                  (f.onerror = null),
                                      m.close(o.loadi),
                                      m.msg("Địa chỉ ảnh hiện tại bất thường.<br>Bạn có muốn tiếp tục xem ảnh tiếp theo không?", {
                                          time: 3e4,
                                          btn: ["Xem tiếp", "Không xem nữa"],
                                          yes: function () {
                                              1 < r.length && o.imgnext(!0, !0);
                                          },
                                      });
                              }));
                }
            }),
            (f.run = function (e) {
                (u = (y = e)(p)),
                    (g.html = y("html")),
                    (m.open = function (e) {
                        return new t(e).index;
                    });
            }),
            p.layui && layui.define
                ? (m.ready(),
                  layui.define("jquery", function (e) {
                      (m.path = layui.cache.dir), f.run(layui.$), e("layer", (p.layer = m));
                  }))
                : "function" == typeof define && define.amd
                ? define(["jquery"], function () {
                      return f.run(p.jQuery), m;
                  })
                : (m.ready(), f.run(p.jQuery));
    })(window),
    layui.define("jquery", function (e) {
        "use strict";
        var d = layui.$,
            o = layui.hint(),
            a = {
                fixbar: function (i) {
                    var a,
                        t,
                        e,
                        n,
                        o = "layui-fixbar",
                        r = d(document),
                        l = ((i = d.extend(!0, { target: "body", bars: [], default: !0, margin: 160, duration: 320 }, i)), d(i.target)),
                        s = i.scroll ? d(i.scroll) : d("body" === i.target ? r : l),
                        c =
                            (i.default && (i.bar1 && i.bars.push({ type: "bar1", icon: "layui-icon-chat" }), i.bar2 && i.bars.push({ type: "bar2", icon: "layui-icon-help" }), i.bars.push({ type: "top", icon: "layui-icon-top" })),
                            d("<ul>").addClass(o));
                    layui.each(i.bars, function (e, t) {
                        var n = d('<li class="layui-icon">');
                        n
                            .addClass(t.icon)
                            .attr({ "lay-type": t.type, style: t.style || "background-color: " + i.bgcolor || "" })
                            .html(t.content),
                            n.on("click", function () {
                                var e = d(this).attr("lay-type");
                                "top" === e && ("body" === i.target ? d("html,body") : s).animate({ scrollTop: 0 }, i.duration), "function" == typeof i.click && i.click.call(this, e);
                            }),
                            "object" === layui.type(i.on) &&
                                layui.each(i.on, function (e, t) {
                                    n.on(e, function () {
                                        var e = d(this).attr("lay-type");
                                        "function" == typeof t && t.call(this, e);
                                    });
                                }),
                            "top" === t.type && (n.addClass("layui-fixbar-top"), (a = n)),
                            c.append(n);
                    }),
                        l.find("." + o).remove(),
                        "object" == typeof i.css && c.css(i.css),
                        l.append(c),
                        a &&
                            (e = (function e() {
                                return s.scrollTop() >= i.margin ? t || (a.show(), (t = 1)) : t && (a.hide(), (t = 0)), e;
                            })()),
                        s.on("scroll", function () {
                            e &&
                                (clearTimeout(n),
                                (n = setTimeout(function () {
                                    e();
                                }, 100)));
                        });
                },
                countdown: function (e, t, n) {
                    var i = this,
                        a = "function" == typeof t,
                        o = new Date(e).getTime(),
                        r = new Date(!t || a ? new Date().getTime() : t).getTime(),
                        o = o - r,
                        l = [Math.floor(o / 864e5), Math.floor(o / 36e5) % 24, Math.floor(o / 6e4) % 60, Math.floor(o / 1e3) % 60],
                        a =
                            (a && (n = t),
                            setTimeout(function () {
                                i.countdown(e, r + 1e3, n);
                            }, 1e3));
                    return n && n(0 < o ? l : [0, 0, 0, 0], t, a), o <= 0 && clearTimeout(a), a;
                },
                timeAgo: function (e, t) {
                    var n = this,
                        i = [[], []],
                        a = new Date().getTime() - new Date(e).getTime();
                    return 26784e5 < a
                        ? ((a = new Date(e)),
                          (i[0][0] = n.digit(a.getFullYear(), 4)),
                          (i[0][1] = n.digit(a.getMonth() + 1)),
                          (i[0][2] = n.digit(a.getDate())),
                          t || ((i[1][0] = n.digit(a.getHours())), (i[1][1] = n.digit(a.getMinutes())), (i[1][2] = n.digit(a.getSeconds()))),
                          i[0].join("-") + " " + i[1].join(":"))
                        : 864e5 <= a
                        ? ((a / 1e3 / 60 / 60 / 24) | 0) + " Ngày trước"
                        : 36e5 <= a
                        ? ((a / 1e3 / 60 / 60) | 0) + " Một giờ trước"
                        : 18e4 <= a
                        ? ((a / 1e3 / 60) | 0) + " Vài phút trước"
                        : a < 0
                        ? "Tương lai"
                        : "Chỉ";
                },
                digit: function (e, t) {
                    var n = "";
                    t = t || 2;
                    for (var i = (e = String(e)).length; i < t; i++) n += "0";
                    return e < Math.pow(10, t) ? n + (0 | e) : e;
                },
                toDateString: function (e, t) {
                    if (null === e || "" === e) return "";
                    var n = this,
                        i = new Date(
                            (function () {
                                if (e) return isNaN(e) || "string" != typeof e ? e : parseInt(e);
                            })() || new Date()
                        ),
                        a = [n.digit(i.getFullYear(), 4), n.digit(i.getMonth() + 1), n.digit(i.getDate())],
                        n = [n.digit(i.getHours()), n.digit(i.getMinutes()), n.digit(i.getSeconds())];
                    return i.getDate()
                        ? (t = t || "yyyy-MM-dd HH:mm:ss").replace(/yyyy/g, a[0]).replace(/MM/g, a[1]).replace(/dd/g, a[2]).replace(/HH/g, n[0]).replace(/mm/g, n[1]).replace(/ss/g, n[2])
                        : (o.error('Invalid Msec for "util.toDateString(Msec)"'), "");
                },
                escape: function (e) {
                    return null == e
                        ? ""
                        : /[<"'>]|&(?=#[a-zA-Z0-9]+)/g.test((e += ""))
                        ? e
                              .replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;")
                              .replace(/</g, "&lt;")
                              .replace(/>/g, "&gt;")
                              .replace(/'/g, "&#39;")
                              .replace(/"/g, "&quot;")
                        : e;
                },
                unescape: function (e) {
                    return (
                        null == e && (e = ""),
                        (e += "")
                            .replace(/\&amp;/g, "&")
                            .replace(/\&lt;/g, "<")
                            .replace(/\&gt;/g, ">")
                            .replace(/\&#39;/g, "'")
                            .replace(/\&quot;/g, '"')
                    );
                },
                openWin: function (e) {
                    var t = (e = e || {}).window || window.open(e.url || "", e.target, e.specs);
                    e.url || (t.document.open("text/html", "replace"), t.document.write(e.content || ""), t.document.close());
                },
                toVisibleArea: function (e) {
                    var t, n, i, a, o, r, l, s;
                    (e = d.extend({ margin: 160, duration: 200, type: "y" }, e)).scrollElem[0] &&
                        e.thisElem[0] &&
                        ((t = e.scrollElem),
                        (l = e.thisElem),
                        (i = (o = "y" === e.type) ? "top" : "left"),
                        (a = t[(n = o ? "scrollTop" : "scrollLeft")]()),
                        (o = t[o ? "height" : "width"]()),
                        (r = t.offset()[i]),
                        (s = {}),
                        ((l = l.offset()[i] - r) > o - e.margin || l < e.margin) && ((s[n] = l - o / 2 + a), t.animate(s, e.duration)));
                },
                event: function (n, i, e) {
                    var t = d("body");
                    return (
                        (e = e || "click"),
                        (i = a.event[n] = d.extend(!0, a.event[n], i) || {}),
                        (a.event.UTIL_EVENT_CALLBACK = a.event.UTIL_EVENT_CALLBACK || {}),
                        t.off(e, "*[" + n + "]", a.event.UTIL_EVENT_CALLBACK[n]),
                        (a.event.UTIL_EVENT_CALLBACK[n] = function () {
                            var e = d(this),
                                t = e.attr(n);
                            "function" == typeof i[t] && i[t].call(this, e);
                        }),
                        t.on(e, "*[" + n + "]", a.event.UTIL_EVENT_CALLBACK[n]),
                        i
                    );
                },
            };
        (a.on = a.event), e("util", a);
    }),
    layui.define(["jquery", "laytpl", "lay"], function (e) {
        "use strict";
        function r() {
            var t = this,
                e = t.config,
                n = e.id;
            return (
                (r.that[n] = t),
                {
                    config: e,
                    reload: function (e) {
                        t.reload.call(t, e);
                    },
                    reloadData: function (e) {
                        p.reloadData(n, e);
                    },
                    close: function () {
                        t.remove();
                    },
                }
            );
        }
        function t(e) {
            (this.index = ++p.index), (this.config = d.extend({}, this.config, p.config, e)), this.init();
        }
        var i,
            n,
            a,
            d = layui.$,
            u = layui.laytpl,
            o = layui.hint(),
            l = layui.device().mobile ? "touchstart" : "mousedown",
            s = "dropdown",
            f = "layui_" + s + "_index",
            p = {
                config: {},
                index: layui[s] ? layui[s].index + 1e4 : 0,
                set: function (e) {
                    return (this.config = d.extend({}, this.config, e)), this;
                },
                on: function (e, t) {
                    return layui.onevent.call(this, s, e, t);
                },
            },
            h = "layui-dropdown",
            c = "layui-menu-item-up",
            y = "layui-menu-item-down",
            m = "layui-menu-body-title",
            g = "layui-menu-item-group",
            v = "layui-menu-item-parent",
            x = "layui-menu-item-checked",
            b = "layui-menu-item-checked2",
            k = "layui-menu-body-panel",
            w = "layui-menu-body-panel-left",
            C = "layui-dropdown-shade",
            T = "." + g + ">." + m;
        (t.prototype.config = { trigger: "click", content: "", className: "", style: "", show: !1, isAllowSpread: !0, isSpreadItem: !0, data: [], delay: 300, shade: 0 }),
            (t.prototype.reload = function (e, t) {
                (this.config = d.extend({}, this.config, e)), this.init(!0, t);
            }),
            (t.prototype.init = function (e, t) {
                var n,
                    i = this,
                    a = i.config,
                    o = d(a.elem);
                return 1 < o.length
                    ? (layui.each(o, function () {
                          p.render(d.extend({}, a, { elem: this }));
                      }),
                      i)
                    : (d.extend(a, lay.options(o[0])),
                      !e && o[0] && o.data(f)
                          ? (n = r.getThis(o.data(f)))
                              ? n.reload(a, t)
                              : void 0
                          : ((a.elem = d(a.elem)), (a.id = "id" in a ? a.id : o.attr("id") || i.index), (a.show || ("reloadData" === t && i.elemView && d("body").find(i.elemView.get(0)).length)) && i.render(e, t), void i.events()));
            }),
            (t.prototype.render = function (e, t) {
                function n() {
                    var e = d('<ul class="layui-menu layui-dropdown-menu"></ul>');
                    return 0 < s.data.length ? c(e, s.data) : e.html('<li class="layui-menu-item-none">No data</li>'), e;
                }
                var o = this,
                    s = o.config,
                    i = d("body"),
                    c = function (l, e) {
                        return (
                            layui.each(e, function (e, t) {
                                var n,
                                    i = t.child && 0 < t.child.length,
                                    a = ("isSpreadItem" in t ? t : s).isSpreadItem,
                                    o = ((r = t.title), (r = (o = t.templet || s.templet) ? ("function" == typeof o ? o(t) : u(o).render(t)) : r)),
                                    r = (i && (t.type = t.type || "parent"), t.type ? { group: "group", parent: "parent", "-": "-" }[t.type] || "parent" : "");
                                ("-" === r || t.title || t.id || i) &&
                                    ((o = d(
                                        [
                                            "<li" +
                                                ((n = { group: "layui-menu-item-group" + (s.isAllowSpread ? (a ? " layui-menu-item-down" : " layui-menu-item-up") : ""), parent: v, "-": "layui-menu-item-divider" }),
                                                i || r ? ' class="' + n[r] + '"' : t.disabled ? ' class="layui-disabled"' : "") +
                                                ">",
                                            ((n = "href" in t ? '<a href="' + t.href + '" target="' + (t.target || "_self") + '">' + o + "</a>" : o),
                                            i
                                                ? '<div class="' +
                                                  m +
                                                  '">' +
                                                  n +
                                                  ("parent" === r ? '<i class="layui-icon layui-icon-right"></i>' : "group" === r && s.isAllowSpread ? '<i class="layui-icon layui-icon-' + (a ? "up" : "down") + '"></i>' : "") +
                                                  "</div>"
                                                : '<div class="' + m + '">' + n + "</div>"),
                                            "</li>",
                                        ].join("")
                                    )).data("item", t),
                                    i && ((a = d('<div class="layui-panel layui-menu-body-panel"></div>')), (n = d("<ul></ul>")), "parent" === r ? (a.append(c(n, t.child)), o.append(a)) : o.append(c(n, t.child))),
                                    l.append(o));
                            }),
                            l
                        );
                    },
                    a = ['<div class="layui-dropdown layui-border-box layui-panel layui-anim layui-anim-downbit" lay-id="' + s.id + '">', "</div>"].join("");
                (!(e = !("contextmenu" !== s.trigger && !lay.isTopElem(s.elem[0])) || e) && s.elem.data(f + "_opened")) ||
                    ((o.elemView = d("." + h + '[lay-id="' + s.id + '"]')),
                    "reloadData" === t && o.elemView.length
                        ? o.elemView.html(s.content || n())
                        : ((o.elemView = d(a)),
                          o.elemView.append(s.content || n()),
                          s.className && o.elemView.addClass(s.className),
                          s.style && o.elemView.attr("style", s.style),
                          (p.thisId = s.id),
                          o.remove(),
                          i.append(o.elemView),
                          s.elem.data(f + "_opened", !0),
                          (e = s.shade ? '<div class="' + C + '" style="z-index:' + (o.elemView.css("z-index") - 1) + "; background-color: " + (s.shade[1] || "#000") + "; opacity: " + (s.shade[0] || s.shade) + '"></div>' : ""),
                          o.elemView.before(e),
                          "mouseenter" === s.trigger &&
                              o.elemView
                                  .on("mouseenter", function () {
                                      clearTimeout(r.timer);
                                  })
                                  .on("mouseleave", function () {
                                      o.delayRemove();
                                  })),
                    o.position(),
                    (r.prevElem = o.elemView).data("prevElem", s.elem),
                    o.elemView.find(".layui-menu").on(l, function (e) {
                        layui.stope(e);
                    }),
                    o.elemView.find(".layui-menu li").on("click", function (e) {
                        var t = d(this),
                            n = t.data("item") || {},
                            i = n.child && 0 < n.child.length,
                            a = "all" === s.clickScope;
                        n.disabled || (i && !a) || "-" === n.type || (!1 === ("function" == typeof s.click ? s.click(n, t) : null) || i || o.remove(), layui.stope(e));
                    }),
                    o.elemView.find(T).on("click", function (e) {
                        var t = d(this).parent();
                        "group" === (t.data("item") || {}).type && s.isAllowSpread && r.spread(t);
                    }),
                    "function" == typeof s.ready && s.ready(o.elemView, s.elem));
            }),
            (t.prototype.position = function (e) {
                var t = this.config;
                lay.position(t.elem[0], this.elemView[0], { position: t.position, e: this.e, clickType: "contextmenu" === t.trigger ? "right" : null, align: t.align || null });
            }),
            (t.prototype.remove = function () {
                this.config;
                var e = r.prevElem;
                e && (e.data("prevElem") && e.data("prevElem").data(f + "_opened", !1), e.remove()), lay("." + C).remove();
            }),
            (t.prototype.delayRemove = function () {
                var e = this,
                    t = e.config;
                clearTimeout(r.timer),
                    (r.timer = setTimeout(function () {
                        e.remove();
                    }, t.delay));
            }),
            (t.prototype.events = function () {
                var t = this,
                    e = t.config;
                "hover" === e.trigger && (e.trigger = "mouseenter"),
                    t.prevElem && t.prevElem.off(e.trigger, t.prevElemCallback),
                    (t.prevElem = e.elem),
                    (t.prevElemCallback = function (e) {
                        clearTimeout(r.timer), (t.e = e), t.render(), e.preventDefault();
                    }),
                    e.elem.on(e.trigger, t.prevElemCallback),
                    "mouseenter" === e.trigger &&
                        e.elem.on("mouseleave", function () {
                            t.delayRemove();
                        });
            }),
            (r.that = {}),
            (r.getThis = function (e) {
                var t = r.that[e];
                return t || o.error(e ? s + " instance with ID '" + e + "' not found" : "ID argument required"), t;
            }),
            (r.spread = function (e) {
                var t = e.children("." + m).find(".layui-icon");
                e.hasClass(c) ? (e.removeClass(c).addClass(y), t.removeClass("layui-icon-down").addClass("layui-icon-up")) : (e.removeClass(y).addClass(c), t.removeClass("layui-icon-up").addClass("layui-icon-down"));
            }),
            (i = d(window)),
            (n = d(document)),
            i.on("resize", function () {
                if (p.thisId) {
                    var e = r.getThis(p.thisId);
                    if (e) {
                        if (!e.elemView[0] || !d("." + h)[0]) return !1;
                        "contextmenu" === e.config.trigger ? e.remove() : e.position();
                    }
                }
            }),
            n.on(l, function (e) {
                var t, n;
                p.thisId &&
                    (t = r.getThis(p.thisId)) &&
                    ((n = t.config),
                    (!lay.isTopElem(n.elem[0]) && "contextmenu" !== n.trigger && (e.target === n.elem[0] || n.elem.find(e.target)[0] || (t.elemView && e.target === t.elemView[0]) || (t.elemView && t.elemView.find(e.target)[0]))) ||
                        t.remove());
            }),
            n.on("click", (a = ".layui-menu:not(.layui-dropdown-menu) li"), function (e) {
                var t = d(this),
                    n = t.parents(".layui-menu").eq(0),
                    i = t.hasClass(g) || t.hasClass(v),
                    a = n.attr("lay-filter") || n.attr("id"),
                    o = lay.options(this);
                t.hasClass("layui-menu-item-divider") ||
                    i ||
                    (n.find("." + x).removeClass(x),
                    n.find("." + b).removeClass(b),
                    t.addClass(x),
                    t.parents("." + v).addClass(b),
                    (o.title = o.title || d.trim(t.children("." + m).text())),
                    layui.event.call(this, s, "click(" + a + ")", o));
            }),
            n.on("click", a + T, function (e) {
                var t = d(this).parents("." + g + ":eq(0)"),
                    n = lay.options(t[0]);
                ("isAllowSpread" in n && !n.isAllowSpread) || r.spread(t);
            }),
            n
                .on("mouseenter", (a = ".layui-menu ." + v), function (e) {
                    var t,
                        n = d(this).find("." + k);
                    n[0] &&
                        ((t = n[0].getBoundingClientRect()).right > i.width() && (n.addClass(w), (t = n[0].getBoundingClientRect()).left < 0 && n.removeClass(w)),
                        t.bottom > i.height() && n.eq(0).css("margin-top", -(t.bottom - i.height() + 5)));
                })
                .on("mouseleave", a, function (e) {
                    var t = d(this).children("." + k);
                    t.removeClass(w), t.css("margin-top", 0);
                }),
            (p.close = function (e) {
                return (e = r.getThis(e)) ? (e.remove(), r.call(e)) : this;
            }),
            (p.reload = function (e, t, n) {
                return (e = r.getThis(e)) ? (e.reload(t, n), r.call(e)) : this;
            }),
            (p.reloadData = function () {
                var n = d.extend([], arguments),
                    i = ((n[2] = "reloadData"), new RegExp("^(" + ["data", "templet", "content"].join("|") + ")$"));
                return (
                    layui.each(n[1], function (e, t) {
                        i.test(e) || delete n[1][e];
                    }),
                    p.reload.apply(null, n)
                );
            }),
            (p.render = function (e) {
                return (e = new t(e)), r.call(e);
            }),
            e(s, p);
    }),
    layui.define(["jquery", "lay"], function (e) {
        "use strict";
        function t(e) {
            (this.index = ++f.index), (this.config = v.extend({}, this.config, f.config, e)), this.render();
        }
        var v = layui.$,
            u = layui.lay,
            f = {
                config: {},
                index: layui.slider ? layui.slider.index + 1e4 : 0,
                set: function (e) {
                    return (this.config = v.extend({}, this.config, e)), this;
                },
                on: function (e, t) {
                    return layui.onevent.call(this, n, e, t);
                },
            },
            n = "slider",
            p = "layui-disabled",
            x = "layui-slider-bar",
            b = "layui-slider-wrap",
            k = "layui-slider-wrap-btn",
            w = "layui-slider-tips",
            C = "layui-slider-input-txt",
            T = "layui-slider-hover";
        (t.prototype.config = { type: "default", min: 0, max: 100, value: 0, step: 1, showstep: !1, tips: !0, input: !1, range: !1, height: 200, disabled: !1, theme: "#16baaa" }),
            (t.prototype.render = function () {
                var i = this,
                    a = i.config;
                if (1 < (e = v(a.elem)).length)
                    return (
                        layui.each(e, function () {
                            f.render(v.extend({}, a, { elem: this }));
                        }),
                        i
                    );
                v.extend(a, u.options(e[0])),
                    a.step < 1 && (a.step = 1),
                    a.max < a.min && (a.max = a.min + a.step),
                    a.range
                        ? ((a.value = "object" == typeof a.value ? a.value : [a.min, a.value]),
                          (e = Math.min(a.value[0], a.value[1])),
                          (t = Math.max(a.value[0], a.value[1])),
                          (a.value[0] = e > a.min ? e : a.min),
                          (a.value[1] = t > a.min ? t : a.min),
                          (a.value[0] = a.value[0] > a.max ? a.max : a.value[0]),
                          (a.value[1] = a.value[1] > a.max ? a.max : a.value[1]),
                          (t = Math.floor(((a.value[0] - a.min) / (a.max - a.min)) * 100)),
                          (n = (r = Math.floor(((a.value[1] - a.min) / (a.max - a.min)) * 100)) - t + "%"),
                          (t += "%"),
                          (r += "%"))
                        : ("object" == typeof a.value && (a.value = Math.min.apply(null, a.value)),
                          a.value < a.min && (a.value = a.min),
                          a.value > a.max && (a.value = a.max),
                          (n = Math.floor(((a.value - a.min) / (a.max - a.min)) * 100) + "%"));
                var o,
                    e = a.disabled ? "#c2c2c2" : a.theme,
                    t =
                        '<div class="layui-slider ' +
                        ("vertical" === a.type ? "layui-slider-vertical" : "") +
                        '">' +
                        (a.tips ? '<div class="' + w + '"></div>' : "") +
                        '<div class="layui-slider-bar" style="background:' +
                        e +
                        "; " +
                        ("vertical" === a.type ? "height" : "width") +
                        ":" +
                        n +
                        ";" +
                        ("vertical" === a.type ? "bottom" : "left") +
                        ":" +
                        (t || 0) +
                        ';"></div><div class="layui-slider-wrap" style="' +
                        ("vertical" === a.type ? "bottom" : "left") +
                        ":" +
                        (t || n) +
                        ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' +
                        e +
                        ';"></div></div>' +
                        (a.range ? '<div class="layui-slider-wrap" style="' + ("vertical" === a.type ? "bottom" : "left") + ":" + r + ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' + e + ';"></div></div>' : "") +
                        "</div>",
                    n = v(a.elem),
                    r = n.next(".layui-slider");
                if (
                    (r[0] && r.remove(),
                    (i.elemTemp = v(t)),
                    a.range
                        ? (i.elemTemp
                              .find("." + b)
                              .eq(0)
                              .data("value", a.value[0]),
                          i.elemTemp
                              .find("." + b)
                              .eq(1)
                              .data("value", a.value[1]))
                        : i.elemTemp.find("." + b).data("value", a.value),
                    n.html(i.elemTemp),
                    "vertical" === a.type && i.elemTemp.height(a.height + "px"),
                    a.showstep)
                ) {
                    for (var l = (a.max - a.min) / a.step, s = "", c = 1; c < 1 + l; c++) {
                        var d = (100 * c) / l;
                        d < 100 && (s += '<div class="layui-slider-step" style="' + ("vertical" === a.type ? "bottom" : "left") + ":" + d + '%"></div>');
                    }
                    i.elemTemp.append(s);
                }
                a.input &&
                    !a.range &&
                    ((e = v(
                        '<div class="layui-slider-input layui-input"><div class="layui-slider-input-txt"><input type="text" class="layui-input"></div><div class="layui-slider-input-btn"><i class="layui-icon layui-icon-up"></i><i class="layui-icon layui-icon-down"></i></div></div>'
                    )),
                    n.css("position", "relative"),
                    n.append(e),
                    n
                        .find("." + C)
                        .children("input")
                        .val(a.value),
                    "vertical" === a.type ? e.css({ left: 0, top: -48 }) : i.elemTemp.css("margin-right", e.outerWidth() + 15)),
                    a.disabled ? (i.elemTemp.addClass(p), i.elemTemp.find("." + k).addClass(p)) : i.slide(),
                    i.elemTemp
                        .find("." + k)
                        .on("mouseover", function () {
                            var e = "vertical" === a.type ? a.height : i.elemTemp[0].offsetWidth,
                                t = i.elemTemp.find("." + b),
                                n = (("vertical" === a.type ? e - v(this).parent()[0].offsetTop - t.height() : v(this).parent()[0].offsetLeft) / e) * 100,
                                t = v(this).parent().data("value"),
                                e = a.setTips ? a.setTips(t) : t;
                            i.elemTemp.find("." + w).html(e),
                                clearTimeout(o),
                                (o = setTimeout(function () {
                                    "vertical" === a.type ? i.elemTemp.find("." + w).css({ bottom: n + "%", "margin-bottom": "20px", display: "inline-block" }) : i.elemTemp.find("." + w).css({ left: n + "%", display: "inline-block" });
                                }, 300));
                        })
                        .on("mouseout", function () {
                            clearTimeout(o), i.elemTemp.find("." + w).css("display", "none");
                        });
            }),
            (t.prototype.slide = function (e, t, n) {
                var l = this,
                    s = l.config,
                    c = l.elemTemp,
                    d = function () {
                        return "vertical" === s.type ? s.height : c[0].offsetWidth;
                    },
                    u = c.find("." + b),
                    f = c.next(".layui-slider-input"),
                    p = f
                        .children("." + C)
                        .children("input")
                        .val(),
                    h = 100 / ((s.max - s.min) / Math.ceil(s.step)),
                    y = function (e, t, n) {
                        (e = (e = 100 < (e = 100 < Math.ceil(e) * h ? Math.ceil(e) * h : Math.round(e) * h) ? 100 : e) < 0 ? 0 : e), u.eq(t).css("vertical" === s.type ? "bottom" : "left", e + "%");
                        var i,
                            a = m(u[0].offsetLeft),
                            o = s.range ? m(u[1].offsetLeft) : 0,
                            r =
                                ("vertical" === s.type
                                    ? (c.find("." + w).css({ bottom: e + "%", "margin-bottom": "20px" }), (a = m(d() - u[0].offsetTop - u.height())), (o = s.range ? m(d() - u[1].offsetTop - u.height()) : 0))
                                    : c.find("." + w).css("left", e + "%"),
                                (a = 100 < a ? 100 : a),
                                (o = 100 < o ? 100 : o),
                                Math.min(a, o)),
                            a = Math.abs(a - o),
                            o = ("vertical" === s.type ? c.find("." + x).css({ height: a + "%", bottom: r + "%" }) : c.find("." + x).css({ width: a + "%", left: r + "%" }), s.min + Math.round(((s.max - s.min) * e) / 100));
                        (p = o),
                            f
                                .children("." + C)
                                .children("input")
                                .val(p),
                            u.eq(t).data("value", o),
                            c.find("." + w).html(s.setTips ? s.setTips(o) : o),
                            s.range && (i = [u.eq(0).data("value"), u.eq(1).data("value")])[0] > i[1] && i.reverse(),
                            (l.value = s.range ? i : o),
                            s.change && s.change(l.value),
                            "done" === n && s.done && s.done(l.value);
                    },
                    m = function (e) {
                        var t = ((e / d()) * 100) / h,
                            n = Math.round(t) * h;
                        return e == d() ? Math.ceil(t) * h : n;
                    },
                    g = v(['<div class="layui-auxiliar-moving" id="LAY-slider-moving"></div'].join(""));
                if ("set" === e) return y(t - s.min, n, "done");
                c.find("." + k).each(function (o) {
                    var r = v(this);
                    r.on("mousedown", function (e) {
                        e = e || window.event;
                        var t,
                            n,
                            i = r.parent()[0].offsetLeft,
                            a = e.clientX;
                        "vertical" === s.type && ((i = d() - r.parent()[0].offsetTop - u.height()), (a = e.clientY)),
                            (e = function (e) {
                                e = e || window.event;
                                var t = (((t = (t = (t = i + ("vertical" === s.type ? a - e.clientY : e.clientX - a)) < 0 ? 0 : t) > d() ? d() : t) / d()) * 100) / h;
                                y(t, o), r.addClass(T), c.find("." + w).show(), e.preventDefault();
                            }),
                            (t = function () {
                                r.removeClass(T), c.find("." + w).hide();
                            }),
                            (n = function () {
                                t(), g.remove(), s.done && s.done(l.value);
                            }),
                            v("#LAY-slider-moving")[0] || v("body").append(g),
                            g.on("mousemove", e),
                            g.on("mouseup", n).on("mouseleave", n);
                    });
                }),
                    c.on("click", function (e) {
                        var t = v("." + k),
                            n = v(this);
                        !t.is(event.target) &&
                            0 === t.has(event.target).length &&
                            t.length &&
                            ((n = (((t = (t = (t = "vertical" === s.type ? d() - e.clientY + n.offset().top - v(window).scrollTop() : e.clientX - n.offset().left - v(window).scrollLeft()) < 0 ? 0 : t) > d() ? d() : t) / d()) * 100) / h),
                            (t = s.range
                                ? "vertical" === s.type
                                    ? Math.abs(t - parseInt(v(u[0]).css("bottom"))) > Math.abs(t - parseInt(v(u[1]).css("bottom")))
                                        ? 1
                                        : 0
                                    : Math.abs(t - u[0].offsetLeft) > Math.abs(t - u[1].offsetLeft)
                                    ? 1
                                    : 0
                                : 0),
                            y(n, t, "done"),
                            e.preventDefault());
                    }),
                    f
                        .children(".layui-slider-input-btn")
                        .children("i")
                        .each(function (t) {
                            v(this).on("click", function () {
                                p = f
                                    .children("." + C)
                                    .children("input")
                                    .val();
                                var e = ((((p = 1 == t ? (p - s.step < s.min ? s.min : Number(p) - s.step) : Number(p) + s.step > s.max ? s.max : Number(p) + s.step) - s.min) / (s.max - s.min)) * 100) / h;
                                y(e, 0, "done");
                            });
                        });
                function i() {
                    var e = this.value,
                        e = ((e = (e = (e = isNaN(e) ? 0 : e) < s.min ? s.min : e) > s.max ? s.max : e), ((((this.value = e) - s.min) / (s.max - s.min)) * 100) / h);
                    y(e, 0, "done");
                }
                f.children("." + C)
                    .children("input")
                    .on("keydown", function (e) {
                        13 === e.keyCode && (e.preventDefault(), i.call(this));
                    })
                    .on("change", i);
            }),
            (t.prototype.events = function () {
                this.config;
            }),
            (f.render = function (e) {
                return (
                    (e = new t(e)),
                    function () {
                        var n = this,
                            i = n.config;
                        return {
                            setValue: function (e, t) {
                                return (e = (e = e > i.max ? i.max : e) < i.min ? i.min : e), (i.value = e), n.slide("set", e, t || 0);
                            },
                            config: i,
                        };
                    }.call(e)
                );
            }),
            e(n, f);
    }),
    layui.define(["jquery", "lay"], function (e) {
        "use strict";
        function a() {
            var e = this.config,
                t = e.id;
            return (a.that[t] = this), { config: e };
        }
        function x(e) {
            var t = { h: 0, s: 0, b: 0 },
                n = Math.min(e.r, e.g, e.b),
                i = Math.max(e.r, e.g, e.b),
                a = i - n;
            return (
                (t.b = i),
                (t.s = 0 !== i ? (255 * a) / i : 0),
                0 !== t.s ? (e.r == i ? (t.h = (e.g - e.b) / a) : e.g == i ? (t.h = 2 + (e.b - e.r) / a) : (t.h = 4 + (e.r - e.g) / a)) : (t.h = -1),
                i === n && (t.h = 0),
                (t.h *= 60),
                t.h < 0 && (t.h += 360),
                (t.s *= 100 / 255),
                (t.b *= 100 / 255),
                t
            );
        }
        function b(e) {
            var t,
                n = {},
                i = e.h,
                a = (255 * e.s) / 100,
                e = (255 * e.b) / 100;
            return (
                0 == a
                    ? (n.r = n.g = n.b = e)
                    : ((e = ((i % 60) * ((t = e) - (a = ((255 - a) * e) / 255))) / 60),
                      (i = 360 === i ? 0 : i) < 60
                          ? ((n.r = t), (n.b = a), (n.g = a + e))
                          : i < 120
                          ? ((n.g = t), (n.b = a), (n.r = t - e))
                          : i < 180
                          ? ((n.g = t), (n.r = a), (n.b = a + e))
                          : i < 240
                          ? ((n.b = t), (n.r = a), (n.g = t - e))
                          : i < 300
                          ? ((n.b = t), (n.g = a), (n.r = a + e))
                          : i < 360
                          ? ((n.r = t), (n.g = a), (n.b = t - e))
                          : ((n.r = 0), (n.g = 0), (n.b = 0))),
                { r: Math.round(n.r), g: Math.round(n.g), b: Math.round(n.b) }
            );
        }
        function k(e) {
            var n = [(e = b(e)).r.toString(16), e.g.toString(16), e.b.toString(16)];
            return (
                C.each(n, function (e, t) {
                    1 === t.length && (n[e] = "0" + t);
                }),
                n.join("")
            );
        }
        function w(e) {
            return { r: (e = e.match(/[0-9]{1,3}/g) || [])[0], g: e[1], b: e[2] };
        }
        function o(e) {
            (this.index = ++l.index), (this.config = C.extend({}, this.config, l.config, e)), this.render();
        }
        var C = layui.$,
            r = layui.lay,
            n = layui.hint(),
            t = layui.device().mobile ? "click" : "mousedown",
            l = {
                config: {},
                index: layui.colorpicker ? layui.colorpicker.index + 1e4 : 0,
                set: function (e) {
                    return (this.config = C.extend({}, this.config, e)), this;
                },
                on: function (e, t) {
                    return layui.onevent.call(this, "colorpicker", e, t);
                },
            },
            i = "colorpicker",
            s = "layui-colorpicker",
            c = ".layui-colorpicker-main",
            T = "layui-icon-down",
            E = "layui-icon-close",
            D = "layui-colorpicker-trigger-span",
            S = "layui-colorpicker-trigger-i",
            N = "layui-colorpicker-side-slider",
            L = "layui-colorpicker-basis",
            A = "layui-colorpicker-alpha-bgcolor",
            I = "layui-colorpicker-alpha-slider",
            j = "layui-colorpicker-basis-cursor",
            M = "layui-colorpicker-main-input",
            _ = C(window),
            d = C(document);
        (o.prototype.config = {
            color: "",
            size: null,
            alpha: !1,
            format: "hex",
            predefine: !1,
            colors: [
                "#16baaa",
                "#16b777",
                "#1E9FFF",
                "#FF5722",
                "#FFB800",
                "#01AAED",
                "#999",
                "#c00",
                "#ff8c00",
                "#ffd700",
                "#90ee90",
                "#00ced1",
                "#1e90ff",
                "#c71585",
                "rgb(0, 186, 189)",
                "rgb(255, 120, 0)",
                "rgb(250, 212, 0)",
                "#393D49",
                "rgba(0,0,0,.5)",
                "rgba(255, 69, 0, 0.68)",
                "rgba(144, 240, 144, 0.5)",
                "rgba(31, 147, 255, 0.73)",
            ],
        }),
            (o.prototype.render = function () {
                var e = this,
                    t = e.config;
                if (1 < (i = C(t.elem)).length)
                    return (
                        layui.each(i, function () {
                            l.render(C.extend({}, t, { elem: this }));
                        }),
                        e
                    );
                C.extend(t, r.options(i[0]));
                var n = C(
                        [
                            '<div class="layui-unselect layui-colorpicker">',
                            "<span " + ("rgb" == t.format && t.alpha ? 'class="layui-colorpicker-trigger-bgcolor"' : "") + ">",
                            '<span class="layui-colorpicker-trigger-span" ',
                            'lay-type="' + ("rgb" == t.format ? (t.alpha ? "rgba" : "torgb") : "") + '" ',
                            'style="' + ((n = ""), t.color ? ((n = t.color), 3 < (t.color.match(/[0-9]{1,3}/g) || []).length && ((t.alpha && "rgb" == t.format) || (n = "#" + k(x(w(t.color))))), "background: " + n) : n) + '">',
                            '<i class="layui-icon layui-colorpicker-trigger-i ' + (t.color ? T : E) + '"></i>',
                            "</span>",
                            "</span>",
                            "</div>",
                        ].join("")
                    ),
                    i = (t.elem = C(t.elem));
                t.size && n.addClass("layui-colorpicker-" + t.size),
                    i.addClass("layui-inline").html((e.elemColorBox = n)),
                    (t.id = "id" in t ? t.id : i.attr("id") || e.index),
                    (e.color = e.elemColorBox.find("." + D)[0].style.background),
                    e.events();
            }),
            (o.prototype.renderPicker = function () {
                var n,
                    e = this,
                    t = e.config,
                    i = e.elemColorBox[0],
                    a = (e.elemPicker = C(
                        [
                            '<div id="layui-colorpicker' + e.index + '" data-index="' + e.index + '" class="layui-anim layui-anim-downbit layui-colorpicker-main">',
                            '<div class="layui-colorpicker-main-wrapper">',
                            '<div class="layui-colorpicker-basis">',
                            '<div class="layui-colorpicker-basis-white"></div>',
                            '<div class="layui-colorpicker-basis-black"></div>',
                            '<div class="layui-colorpicker-basis-cursor"></div>',
                            "</div>",
                            '<div class="layui-colorpicker-side">',
                            '<div class="layui-colorpicker-side-slider"></div>',
                            "</div>",
                            "</div>",
                            '<div class="layui-colorpicker-main-alpha ' + (t.alpha ? "layui-show" : "") + '">',
                            '<div class="layui-colorpicker-alpha-bgcolor">',
                            '<div class="layui-colorpicker-alpha-slider"></div>',
                            "</div>",
                            "</div>",
                            t.predefine
                                ? ((n = ['<div class="layui-colorpicker-main-pre">']),
                                  layui.each(t.colors, function (e, t) {
                                      n.push(['<div class="layui-colorpicker-pre' + (3 < (t.match(/[0-9]{1,3}/g) || []).length ? " layui-colorpicker-pre-isalpha" : "") + '">', '<div style="background:' + t + '"></div>', "</div>"].join(""));
                                  }),
                                  n.push("</div>"),
                                  n.join(""))
                                : "",
                            '<div class="layui-colorpicker-main-input">',
                            '<div class="layui-inline">',
                            '<input type="text" class="layui-input">',
                            "</div>",
                            '<div class="layui-btn-container">',
                            '<button class="layui-btn layui-btn-primary layui-btn-sm" colorpicker-events="clear">trống</button>',
                            '<button class="layui-btn layui-btn-sm" colorpicker-events="confirm">Tải lại</button>',
                            "</div",
                            "</div>",
                            "</div>",
                        ].join("")
                    ));
                e.elemColorBox.find("." + D)[0],
                    C(c)[0] && C(c).data("index") == e.index ? e.removePicker(o.thisElemInd) : (e.removePicker(o.thisElemInd), C("body").append(a)),
                    (l.thisId = t.id),
                    (o.thisElemInd = e.index),
                    (o.thisColor = i.style.background),
                    e.position(),
                    e.pickerEvents();
            }),
            (o.prototype.removePicker = function (e) {
                var t = this.config;
                return (e = C("#layui-colorpicker" + (e || this.index)))[0] && (e.remove(), delete l.thisId, "function" == typeof t.close && t.close(this.color)), this;
            }),
            (o.prototype.position = function () {
                var e = this,
                    t = e.config;
                return r.position(e.bindElem || e.elemColorBox[0], e.elemPicker[0], { position: t.position, align: "center" }), e;
            }),
            (o.prototype.val = function () {
                var e,
                    t = this,
                    n = (t.config, t.elemColorBox.find("." + D)),
                    i = t.elemPicker.find("." + M),
                    a = n[0].style.backgroundColor;
                a
                    ? ((e = x(w(a))),
                      (n = n.attr("lay-type")),
                      t.select(e.h, e.s, e.b),
                      "torgb" === n
                          ? i.find("input").val(a)
                          : "rgba" === n
                          ? ((n = w(a)),
                            3 === (a.match(/[0-9]{1,3}/g) || []).length
                                ? (i.find("input").val("rgba(" + n.r + ", " + n.g + ", " + n.b + ", 1)"), t.elemPicker.find("." + I).css("left", 280))
                                : (i.find("input").val(a), (a = 280 * a.slice(a.lastIndexOf(",") + 1, a.length - 1)), t.elemPicker.find("." + I).css("left", a)),
                            (t.elemPicker.find("." + A)[0].style.background = "linear-gradient(to right, rgba(" + n.r + ", " + n.g + ", " + n.b + ", 0), rgb(" + n.r + ", " + n.g + ", " + n.b + "))"))
                          : i.find("input").val("#" + k(e)))
                    : (t.select(0, 100, 100), i.find("input").val(""), (t.elemPicker.find("." + A)[0].style.background = ""), t.elemPicker.find("." + I).css("left", 280));
            }),
            (o.prototype.side = function () {
                function c(e, t, n, i) {
                    o.select(e, t, n);
                    var a = b({ h: e, s: t, b: n }),
                        e = k({ h: e, s: t, b: n }),
                        t = o.elemPicker.find("." + M).find("input");
                    v.addClass(T).removeClass(E),
                        (l[0].style.background = "rgb(" + a.r + ", " + a.g + ", " + a.b + ")"),
                        "torgb" === s
                            ? t.val("rgb(" + a.r + ", " + a.g + ", " + a.b + ")")
                            : "rgba" === s
                            ? (p.css("left", 280 * i),
                              t.val("rgba(" + a.r + ", " + a.g + ", " + a.b + ", " + i + ")"),
                              (l[0].style.background = "rgba(" + a.r + ", " + a.g + ", " + a.b + ", " + i + ")"),
                              (f[0].style.background = "linear-gradient(to right, rgba(" + a.r + ", " + a.g + ", " + a.b + ", 0), rgb(" + a.r + ", " + a.g + ", " + a.b + "))"))
                            : t.val("#" + e),
                        r.change &&
                            r.change(
                                o.elemPicker
                                    .find("." + M)
                                    .find("input")
                                    .val()
                            );
                }
                function t(e) {
                    C("#LAY-colorpicker-moving")[0] || C("body").append(a),
                        a.on("mousemove", e),
                        a
                            .on("mouseup", function () {
                                a.remove();
                            })
                            .on("mouseleave", function () {
                                a.remove();
                            });
                }
                var o = this,
                    r = o.config,
                    l = o.elemColorBox.find("." + D),
                    s = l.attr("lay-type"),
                    d = o.elemPicker.find(".layui-colorpicker-side"),
                    e = o.elemPicker.find("." + N),
                    u = o.elemPicker.find("." + L),
                    i = o.elemPicker.find("." + j),
                    f = o.elemPicker.find("." + A),
                    p = o.elemPicker.find("." + I),
                    h = (e[0].offsetTop / 180) * 360,
                    y = 100 - ((i[0].offsetTop + 3) / 180) * 100,
                    m = ((i[0].offsetLeft + 3) / 260) * 100,
                    g = Math.round((p[0].offsetLeft / 280) * 100) / 100,
                    v = o.elemColorBox.find("." + S),
                    n = o.elemPicker.find(".layui-colorpicker-pre").children("div"),
                    a = C(['<div class="layui-auxiliar-moving" id="LAY-colorpicker-moving"></div>'].join(""));
                e.on("mousedown", function (e) {
                    var i = this.offsetTop,
                        a = e.clientY;
                    t(function (e) {
                        var t = i + (e.clientY - a),
                            n = ((t = (n = d[0].offsetHeight) < (t = t < 0 ? 0 : t) ? n : t) / 180) * 360;
                        c((h = n), m, y, g), e.preventDefault();
                    }),
                        e.preventDefault();
                }),
                    d.on("click", function (e) {
                        var t = (((t = (t = e.clientY - C(this).offset().top + _.scrollTop()) < 0 ? 0 : t) > this.offsetHeight ? this.offsetHeight : t) / 180) * 360;
                        c((h = t), m, y, g), e.preventDefault();
                    }),
                    i.on("mousedown", function (e) {
                        var o = this.offsetTop,
                            r = this.offsetLeft,
                            l = e.clientY,
                            s = e.clientX;
                        layui.stope(e),
                            t(function (e) {
                                var t = o + (e.clientY - l),
                                    n = r + (e.clientX - s),
                                    i = u[0].offsetHeight - 3,
                                    a = (((n = (a = u[0].offsetWidth - 3) < (n = n < -3 ? -3 : n) ? a : n) + 3) / 260) * 100,
                                    n = 100 - (((t = i < (t = t < -3 ? -3 : t) ? i : t) + 3) / 180) * 100;
                                c(h, (m = a), (y = n), g), e.preventDefault();
                            }),
                            e.preventDefault();
                    }),
                    u.on("mousedown", function (e) {
                        var t = e.clientY - C(this).offset().top - 3 + _.scrollTop(),
                            n = e.clientX - C(this).offset().left - 3 + _.scrollLeft(),
                            n = ((t = t < -3 ? -3 : t) > this.offsetHeight - 3 && (t = this.offsetHeight - 3), ((((n = n < -3 ? -3 : n) > this.offsetWidth - 3 ? this.offsetWidth - 3 : n) + 3) / 260) * 100);
                        c(h, (m = n), (y = t = 100 - ((t + 3) / 180) * 100), g), layui.stope(e), e.preventDefault(), i.trigger(e, "mousedown");
                    }),
                    p.on("mousedown", function (e) {
                        var i = this.offsetLeft,
                            a = e.clientX;
                        t(function (e) {
                            var t = i + (e.clientX - a),
                                n = ((n = f[0].offsetWidth) < (t = t < 0 ? 0 : t) && (t = n), Math.round((t / 280) * 100) / 100);
                            c(h, m, y, (g = n)), e.preventDefault();
                        }),
                            e.preventDefault();
                    }),
                    f.on("click", function (e) {
                        (t = (t = e.clientX - C(this).offset().left) < 0 ? 0 : t) > this.offsetWidth && (t = this.offsetWidth);
                        var t = Math.round((t / 280) * 100) / 100;
                        c(h, m, y, (g = t)), e.preventDefault();
                    }),
                    n.each(function () {
                        C(this).on("click", function () {
                            C(this).parent(".layui-colorpicker-pre").addClass("selected").siblings().removeClass("selected");
                            var e = this.style.backgroundColor,
                                t = x(w(e)),
                                n = e.slice(e.lastIndexOf(",") + 1, e.length - 1);
                            (h = t.h), (m = t.s), (y = t.b), 3 === (e.match(/[0-9]{1,3}/g) || []).length && (n = 1), (g = n), c(t.h, t.s, t.b, n);
                        });
                    });
            }),
            (o.prototype.select = function (e, t, n, i) {
                this.config;
                var a = k({ h: e, s: 100, b: 100 }),
                    e = (k({ h: e, s: t, b: n }), (e / 360) * 180),
                    n = 180 - (n / 100) * 180 - 3,
                    t = (t / 100) * 260 - 3;
                this.elemPicker.find("." + N).css("top", e), (this.elemPicker.find("." + L)[0].style.background = "#" + a), this.elemPicker.find("." + j).css({ top: n, left: t });
            }),
            (o.prototype.pickerEvents = function () {
                var l = this,
                    s = l.config,
                    c = l.elemColorBox.find("." + D),
                    d = l.elemPicker.find("." + M + " input"),
                    n = {
                        clear: function (e) {
                            (c[0].style.background = ""),
                                l.elemColorBox
                                    .find("." + S)
                                    .removeClass(T)
                                    .addClass(E),
                                (l.color = ""),
                                s.done && s.done(""),
                                l.removePicker();
                        },
                        confirm: function (e, t) {
                            var n,
                                i,
                                a,
                                o,
                                r = d.val();
                            if (
                                (-1 < r.indexOf(",")
                                    ? ((i = x(w(r))),
                                      l.select(i.h, i.s, i.b),
                                      (c[0].style.background = n = "#" + k(i)),
                                      3 < (r.match(/[0-9]{1,3}/g) || []).length &&
                                          "rgba" === c.attr("lay-type") &&
                                          ((a = 280 * r.slice(r.lastIndexOf(",") + 1, r.length - 1)), l.elemPicker.find("." + I).css("left", a), (n = c[0].style.background = r)))
                                    : (3 === (a = -1 < (a = r).indexOf("#") ? a.substring(1) : a).length && (a = (o = a.split(""))[0] + o[0] + o[1] + o[1] + o[2] + o[2]),
                                      (o = { r: (a = parseInt(a, 16)) >> 16, g: (65280 & a) >> 8, b: 255 & a }),
                                      (i = x(o)),
                                      (c[0].style.background = n = "#" + k(i)),
                                      l.elemColorBox
                                          .find("." + S)
                                          .removeClass(E)
                                          .addClass(T)),
                                "change" === t)
                            )
                                return l.select(i.h, i.s, i.b, t), void (s.change && s.change(n));
                            (l.color = r), s.done && s.done(r), l.removePicker();
                        },
                    };
                l.elemPicker.on("click", "*[colorpicker-events]", function () {
                    var e = C(this),
                        t = e.attr("colorpicker-events");
                    n[t] && n[t].call(this, e);
                }),
                    d.on("keyup", function (e) {
                        var t = C(this);
                        n.confirm.call(this, t, 13 === e.keyCode ? null : "change");
                    });
            }),
            (o.prototype.events = function () {
                var e = this;
                e.config,
                    e.elemColorBox.on("click", function () {
                        e.renderPicker(), C(c)[0] && (e.val(), e.side());
                    });
            }),
            d.on(t, function (e) {
                var t, n, i;
                l.thisId &&
                    (t = a.getThis(l.thisId)) &&
                    ((n = t.config),
                    (i = t.elemColorBox.find("." + D)),
                    C(e.target).hasClass(s) ||
                        C(e.target).parents("." + s)[0] ||
                        C(e.target).hasClass(c.replace(/\./g, "")) ||
                        C(e.target).parents(c)[0] ||
                        (t.elemPicker &&
                            (t.color
                                ? ((e = x(w(t.color))), t.select(e.h, e.s, e.b))
                                : t.elemColorBox
                                      .find("." + S)
                                      .removeClass(T)
                                      .addClass(E),
                            (i[0].style.background = t.color || ""),
                            "function" == typeof n.cancel && n.cancel(t.color),
                            t.removePicker())));
            }),
            _.on("resize", function () {
                if (l.thisId) {
                    var e = a.getThis(l.thisId);
                    if (e) return !(!e.elemPicker || !C(c)[0]) && void e.position();
                }
            }),
            (a.that = {}),
            (a.getThis = function (e) {
                var t = a.that[e];
                return t || n.error(e ? i + " instance with ID '" + e + "' not found" : "ID argument required"), t;
            }),
            (l.render = function (e) {
                return (e = new o(e)), a.call(e);
            }),
            e(i, l);
    }),
    layui.define("jquery", function (e) {
        "use strict";
        function t() {
            this.config = {};
        }
        var d = layui.$,
            u = (layui.hint(), layui.device()),
            l = "element",
            s = "layui-this",
            f = "layui-show",
            r = ".layui-tab-title",
            p =
                ((t.prototype.set = function (e) {
                    return d.extend(!0, this.config, e), this;
                }),
                (t.prototype.on = function (e, t) {
                    return layui.onevent.call(this, l, e, t);
                }),
                (t.prototype.tabAdd = function (e, t) {
                    var n,
                        i = (e = d(".layui-tab[lay-filter=" + e + "]")).children(r),
                        a = i.children(".layui-tab-bar"),
                        e = e.children(".layui-tab-content"),
                        o =
                            "<li" +
                            ((n = []),
                            layui.each(t, function (e, t) {
                                /^(title|content)$/.test(e) || n.push("lay-" + e + '="' + t + '"');
                            }),
                            0 < n.length && n.unshift(""),
                            n.join(" ")) +
                            ">" +
                            (t.title || "unnaming") +
                            "</li>";
                    return a[0] ? a.before(o) : i.append(o), e.append('<div class="layui-tab-item">' + (t.content || "") + "</div>"), x.hideTabMore(!0), x.tabAuto(), this;
                }),
                (t.prototype.tabDelete = function (e, t) {
                    return (
                        (e = d(".layui-tab[lay-filter=" + e + "]")
                            .children(r)
                            .find('>li[lay-id="' + t + '"]')),
                        x.tabDelete(null, e),
                        this
                    );
                }),
                (t.prototype.tabChange = function (e, t) {
                    return (
                        (e = d(".layui-tab[lay-filter=" + e + "]")
                            .children(r)
                            .find('>li[lay-id="' + t + '"]')),
                        x.tabClick.call(e[0], { liElem: e }),
                        this
                    );
                }),
                (t.prototype.tab = function (n) {
                    (n = n || {}),
                        i.on("click", n.headerElem, function (e) {
                            var t = d(this).index();
                            x.tabClick.call(this, { index: t, options: n });
                        });
                }),
                (t.prototype.progress = function (e, t) {
                    var n = (e = d("." + (n = "layui-progress") + "[lay-filter=" + e + "]").find("." + n + "-bar")).find("." + n + "-text");
                    return (
                        e
                            .css("width", function () {
                                return /^.+\/.+$/.test(t) ? 100 * new Function("return " + t)() + "%" : t;
                            })
                            .attr("lay-percent", t),
                        n.text(t),
                        this
                    );
                }),
                ".layui-nav"),
            h = "layui-nav-item",
            a = "layui-nav-bar",
            y = "layui-nav-tree",
            m = "layui-nav-child",
            g = "layui-nav-more",
            v = "layui-anim layui-anim-upbit",
            x = {
                tabClick: function (e) {
                    var t = (e = e || {}).options || {},
                        n = e.liElem || d(this),
                        i = t.headerElem ? n.parent() : n.parents(".layui-tab").eq(0),
                        t = t.bodyElem ? d(t.bodyElem) : i.children(".layui-tab-content").children(".layui-tab-item"),
                        a = "javascript:;" !== (a = n.find("a")).attr("href") && "_blank" === a.attr("target"),
                        o = "string" == typeof n.attr("lay-unselect"),
                        r = i.attr("lay-filter"),
                        e = "index" in e ? e.index : n.parent().children("li").index(n);
                    a || o || (n.addClass(s).siblings().removeClass(s), t.eq(e).addClass(f).siblings().removeClass(f)), layui.event.call(this, l, "tab(" + r + ")", { elem: i, index: e });
                },
                tabDelete: function (e, t) {
                    var n = (t = t || d(this).parent()).index(),
                        i = t.closest(".layui-tab"),
                        a = i.children(".layui-tab-content").children(".layui-tab-item"),
                        o = i.attr("lay-filter");
                    t.hasClass(s) && (t.next()[0] && t.next().is("li") ? x.tabClick.call(t.next()[0], { index: n + 1 }) : t.prev()[0] && t.prev().is("li") && x.tabClick.call(t.prev()[0], null, n - 1)),
                        t.remove(),
                        a.eq(n).remove(),
                        setTimeout(function () {
                            x.tabAuto();
                        }, 50),
                        layui.event.call(this, l, "tabDelete(" + o + ")", { elem: i, index: n });
                },
                tabAuto: function () {
                    var i = "layui-tab-bar",
                        a = "layui-tab-close",
                        o = this;
                    d(".layui-tab").each(function () {
                        var e = d(this),
                            t = e.children(".layui-tab-title");
                        e.children(".layui-tab-content").children(".layui-tab-item");
                        var n = d('<span class="layui-unselect layui-tab-bar" ' + (n = 'lay-stope="tabmore"') + "><i " + n + ' class="layui-icon">&#xe61a;</i></span>');
                        o === window && 8 != u.ie && x.hideTabMore(!0),
                            e.attr("lay-allowclose") &&
                                t.find("li").each(function () {
                                    var e,
                                        t = d(this);
                                    t.find("." + a)[0] || ((e = d('<i class="layui-icon layui-icon-close layui-unselect ' + a + '"></i>')).on("click", x.tabDelete), t.append(e));
                                }),
                            "string" != typeof e.attr("lay-unauto") &&
                                (t.prop("scrollWidth") > t.outerWidth() + 1
                                    ? t.find("." + i)[0] ||
                                      (t.append(n),
                                      e.attr("overflow", ""),
                                      n.on("click", function (e) {
                                          t[this.title ? "removeClass" : "addClass"]("layui-tab-more"), (this.title = this.title ? "" : "收缩");
                                      }))
                                    : (t.find("." + i).remove(), e.removeAttr("overflow")));
                    });
                },
                hideTabMore: function (e) {
                    var t = d(".layui-tab-title");
                    (!0 !== e && "tabmore" === d(e.target).attr("lay-stope")) || (t.removeClass("layui-tab-more"), t.find(".layui-tab-bar").attr("title", ""));
                },
                clickThis: function () {
                    var e = d(this),
                        t = e.parents(p),
                        n = t.attr("lay-filter"),
                        i = e.parent(),
                        a = e.siblings("." + m),
                        o = "string" == typeof i.attr("lay-unselect");
                    ("javascript:;" !== e.attr("href") && "_blank" === e.attr("target")) || o || a[0] || (t.find("." + s).removeClass(s), i.addClass(s)),
                        t.hasClass(y) && (a.removeClass(v), a[0] && (i["none" === a.css("display") ? "addClass" : "removeClass"](h + "ed"), "all" === t.attr("lay-shrink") && i.siblings().removeClass(h + "ed"))),
                        layui.event.call(this, l, "nav(" + n + ")", e);
                },
                collapse: function () {
                    var e = d(this),
                        t = e.find(".layui-colla-icon"),
                        n = e.siblings(".layui-colla-content"),
                        i = e.parents(".layui-collapse").eq(0),
                        a = i.attr("lay-filter"),
                        o = "none" === n.css("display");
                    "string" == typeof i.attr("lay-accordion") && ((i = i.children(".layui-colla-item").children("." + f)).siblings(".layui-colla-title").children(".layui-colla-icon").html("&#xe602;"), i.removeClass(f)),
                        n[o ? "addClass" : "removeClass"](f),
                        t.html(o ? "&#xe61a;" : "&#xe602;"),
                        layui.event.call(this, l, "collapse(" + a + ")", { title: e, content: n, show: o });
                },
            },
            n =
                ((t.prototype.render = t.prototype.init = function (e, t) {
                    var n = t ? '[lay-filter="' + t + '"]' : "";
                    return (t = {
                        tab: function () {
                            x.tabAuto.call({});
                        },
                        nav: function () {
                            var r = {},
                                l = {},
                                s = {},
                                c = "layui-nav-title";
                            d(p + n).each(function (e) {
                                var t = d(this),
                                    n = d('<span class="' + a + '"></span>'),
                                    i = t.find("." + h);
                                t.find("." + a)[0] ||
                                    (t.append(n),
                                    (t.hasClass(y) ? i.find("dd,>." + c) : i)
                                        .on("mouseenter", function () {
                                            !function (e, t, n) {
                                                var i,
                                                    a = d(this),
                                                    o = a.find("." + m);
                                                t.hasClass(y)
                                                    ? o[0] || ((i = a.children("." + c)), e.css({ top: a.offset().top - t.offset().top, height: (i[0] ? i : a).outerHeight(), opacity: 1 }))
                                                    : (o.addClass(v),
                                                      o.hasClass("layui-nav-child-c") && o.css({ left: -(o.outerWidth() - a.width()) / 2 }),
                                                      o[0]
                                                          ? e.css({ left: e.position().left + e.width() / 2, width: 0, opacity: 0 })
                                                          : e.css({ left: a.position().left + parseFloat(a.css("marginLeft")), top: a.position().top + a.height() - e.height() }),
                                                      (r[n] = setTimeout(
                                                          function () {
                                                              e.css({ width: o[0] ? 0 : a.width(), opacity: o[0] ? 0 : 1 });
                                                          },
                                                          u.ie && u.ie < 10 ? 0 : 200
                                                      )),
                                                      clearTimeout(s[n]),
                                                      "block" === o.css("display") && clearTimeout(l[n]),
                                                      (l[n] = setTimeout(function () {
                                                          o.addClass(f), a.find("." + g).addClass(g + "d");
                                                      }, 300)));
                                            }.call(this, n, t, e);
                                        })
                                        .on("mouseleave", function () {
                                            t.hasClass(y)
                                                ? n.css({ height: 0, opacity: 0 })
                                                : (clearTimeout(l[e]),
                                                  (l[e] = setTimeout(function () {
                                                      t.find("." + m).removeClass(f), t.find("." + g).removeClass(g + "d");
                                                  }, 300)));
                                        }),
                                    t.on("mouseleave", function () {
                                        clearTimeout(r[e]),
                                            (s[e] = setTimeout(function () {
                                                t.hasClass(y) || n.css({ width: 0, left: n.position().left + n.width() / 2, opacity: 0 });
                                            }, 200));
                                    })),
                                    i.find("a").each(function () {
                                        var e = d(this);
                                        e.parent(), e.siblings("." + m)[0] && !e.children("." + g)[0] && e.append('<i class="layui-icon layui-icon-down ' + g + '"></i>'), e.off("click", x.clickThis).on("click", x.clickThis);
                                    });
                            });
                        },
                        breadcrumb: function () {
                            d(".layui-breadcrumb" + n).each(function () {
                                var e = d(this),
                                    t = "lay-separator",
                                    n = e.attr(t) || "/",
                                    i = e.find("a");
                                i.next("span[" + t + "]")[0] ||
                                    (i.each(function (e) {
                                        e !== i.length - 1 && d(this).after("<span " + t + ">" + n + "</span>");
                                    }),
                                    e.css("visibility", "visible"));
                            });
                        },
                        progress: function () {
                            var i = "layui-progress";
                            d("." + i + n).each(function () {
                                var e = d(this),
                                    t = e.find(".layui-progress-bar"),
                                    n = t.attr("lay-percent");
                                t.css("width", function () {
                                    return /^.+\/.+$/.test(n) ? 100 * new Function("return " + n)() + "%" : n;
                                }),
                                    e.attr("lay-showpercent") &&
                                        setTimeout(function () {
                                            t.html('<span class="' + i + '-text">' + n + "</span>");
                                        }, 350);
                            });
                        },
                        collapse: function () {
                            d(".layui-collapse" + n).each(function () {
                                d(this)
                                    .find(".layui-colla-item")
                                    .each(function () {
                                        var e = (t = d(this)).find(".layui-colla-title"),
                                            t = "none" === t.find(".layui-colla-content").css("display");
                                        e.find(".layui-colla-icon").remove(), e.append('<i class="layui-icon layui-colla-icon">' + (t ? "&#xe602;" : "&#xe61a;") + "</i>"), e.off("click", x.collapse).on("click", x.collapse);
                                    });
                            });
                        },
                    })[e]
                        ? t[e]()
                        : layui.each(t, function (e, t) {
                              t();
                          });
                }),
                new t()),
            i = d(document);
        d(function () {
            n.render();
        }),
            i.on("click", ".layui-tab-title li", x.tabClick),
            i.on("click", x.hideTabMore),
            d(window).on("resize", x.tabAuto),
            e(l, n);
    }),
    layui.define(["lay", "layer"], function (e) {
        "use strict";
        function g(e) {
            (this.config = v.extend({}, this.config, n.config, e)), this.render();
        }
        var v = layui.$,
            t = layui.layer,
            x = layui.device(),
            n = {
                config: {},
                set: function (e) {
                    return (this.config = v.extend({}, this.config, e)), this;
                },
                on: function (e, t) {
                    return layui.onevent.call(this, i, e, t);
                },
            },
            i = "upload",
            a = "layui-upload-file",
            o = "layui-upload-form",
            b = "layui-upload-iframe",
            k = "layui-upload-choose";
        (g.prototype.config = { accept: "images", exts: "", auto: !0, bindAction: "", url: "", force: "", field: "file", acceptMime: "", method: "post", data: {}, drag: !0, size: 0, number: 0, multiple: !1 }),
            (g.prototype.render = function (e) {
                ((e = this.config).elem = v(e.elem)), (e.bindAction = v(e.bindAction)), this.file(), this.events();
            }),
            (g.prototype.file = function () {
                var e = this,
                    t = e.config,
                    n = (e.elemFile = v(['<input class="' + a + '" type="file" accept="' + t.acceptMime + '" name="' + t.field + '"', t.multiple ? " multiple" : "", ">"].join(""))),
                    i = t.elem.next();
                (i.hasClass(a) || i.hasClass(o)) && i.remove(),
                    x.ie && x.ie < 10 && t.elem.wrap('<div class="layui-upload-wrap"></div>'),
                    e.isFile() ? ((e.elemFile = t.elem), (t.field = t.elem[0].name)) : t.elem.after(n),
                    x.ie && x.ie < 10 && e.initIE();
            }),
            (g.prototype.initIE = function () {
                var n,
                    e = this.config,
                    t = v('<iframe id="' + b + '" class="' + b + '" name="' + b + '" frameborder="0"></iframe>'),
                    i = v(['<form target="' + b + '" class="' + o + '" method="post" key="set-mine" enctype="multipart/form-data" action="' + e.url + '">', "</form>"].join(""));
                v("#" + b)[0] || v("body").append(t),
                    e.elem.next().hasClass(o) ||
                        (this.elemFile.wrap(i),
                        e.elem.next("." + o).append(
                            ((n = []),
                            layui.each(e.data, function (e, t) {
                                (t = "function" == typeof t ? t() : t), n.push('<input type="hidden" name="' + e + '" value="' + t + '">');
                            }),
                            n.join(""))
                        ));
            }),
            (g.prototype.msg = function (e) {
                return t.msg(e, { icon: 2, shift: 6 });
            }),
            (g.prototype.isFile = function () {
                var e = this.config.elem[0];
                if (e) return "input" === e.tagName.toLocaleLowerCase() && "file" === e.type;
            }),
            (g.prototype.preview = function (i) {
                window.FileReader &&
                    layui.each(this.chooseFiles, function (e, t) {
                        var n = new FileReader();
                        n.readAsDataURL(t),
                            (n.onload = function () {
                                i && i(e, t, this.result);
                            });
                    });
            }),
            (g.prototype.upload = function (e, t) {
                var n,
                    i,
                    a,
                    o,
                    r = this,
                    l = r.config,
                    s = r.elemFile[0],
                    c = function () {
                        return e || r.files || r.chooseFiles || s.files;
                    },
                    d = function () {
                        function t() {
                            l.multiple && a + o === r.fileLength && "function" == typeof l.allDone && l.allDone({ total: r.fileLength, successful: a, failed: o });
                        }
                        var a = 0,
                            o = 0,
                            e = c();
                        layui.each(e, function (n, e) {
                            var i = new FormData(),
                                e =
                                    (layui.each(l.data, function (e, t) {
                                        (t = "function" == typeof t ? t() : t), i.append(e, t);
                                    }),
                                    i.append(l.field, e),
                                    {
                                        url: l.url,
                                        type: "post",
                                        data: i,
                                        contentType: !1,
                                        processData: !1,
                                        dataType: "json",
                                        headers: l.headers || {},
                                        success: function (e) {
                                            a++, u(n, e), t();
                                        },
                                        error: function (e) {
                                            o++, r.msg(["Upload failed, please try again.", "status: " + (e.status || "") + " - " + (e.statusText || "error")].join("<br>")), f(n), t();
                                        },
                                    });
                            "function" == typeof l.progress &&
                                (e.xhr = function () {
                                    var e = v.ajaxSettings.xhr();
                                    return (
                                        e.upload.addEventListener("progress", function (e) {
                                            var t;
                                            e.lengthComputable && ((t = Math.floor((e.loaded / e.total) * 100)), l.progress(t, (l.item || l.elem)[0], e, n));
                                        }),
                                        e
                                    );
                                }),
                                v.ajax(e);
                        });
                    },
                    u = function (e, t) {
                        if ((r.elemFile.next("." + k).remove(), (s.value = ""), "json" === l.force && "object" != typeof t))
                            try {
                                t = JSON.parse(t);
                            } catch (e) {
                                return (t = {}), r.msg("Please return JSON data format");
                            }
                        "function" == typeof l.done &&
                            l.done(t, e || 0, function (e) {
                                r.upload(e);
                            });
                    },
                    f = function (e) {
                        l.auto && (s.value = ""),
                            "function" == typeof l.error &&
                                l.error(e || 0, function (e) {
                                    r.upload(e);
                                });
                    },
                    p = l.exts,
                    h =
                        ((i = []),
                        layui.each(e || r.chooseFiles, function (e, t) {
                            i.push(t.name);
                        }),
                        i),
                    y = {
                        preview: function (e) {
                            r.preview(e);
                        },
                        upload: function (e, t) {
                            var n = {};
                            (n[e] = t), r.upload(n);
                        },
                        pushFile: function () {
                            return (
                                (r.files = r.files || {}),
                                layui.each(r.chooseFiles, function (e, t) {
                                    r.files[e] = t;
                                }),
                                r.files
                            );
                        },
                        resetFile: function (e, t, n) {
                            (t = new File([t], n)), (r.files = r.files || {}), (r.files[e] = t);
                        },
                    },
                    m = { file: "File", images: "Ảnh", video: "Video", audio: "Âm thanh" }[l.accept] || "File";
                if (0 !== (h = 0 === h.length ? s.value.match(/[^\/\\]+\..+/g) || [] || "" : h).length) {
                    switch (l.accept) {
                        case "file":
                            layui.each(h, function (e, t) {
                                if (p && !RegExp(".\\.(" + p + ")$", "i").test(escape(t))) return (n = !0);
                            });
                            break;
                        case "video":
                            layui.each(h, function (e, t) {
                                if (!RegExp(".\\.(" + (p || "avi|mp4|wma|rmvb|rm|flash|3gp|flv") + ")$", "i").test(escape(t))) return (n = !0);
                            });
                            break;
                        case "audio":
                            layui.each(h, function (e, t) {
                                if (!RegExp(".\\.(" + (p || "mp3|wav|mid") + ")$", "i").test(escape(t))) return (n = !0);
                            });
                            break;
                        default:
                            layui.each(h, function (e, t) {
                                if (!RegExp(".\\.(" + (p || "jpg|png|gif|bmp|jpeg|svg") + ")$", "i").test(escape(t))) return (n = !0);
                            });
                    }
                    return n
                        ? (r.msg("Đã chọn" + m + "chứa định dạng không được hỗ trợ"), (s.value = ""))
                        : ("choose" !== t && !l.auto) || (l.choose && l.choose(y), "choose" !== t)
                        ? ((r.fileLength =
                              ((a = 0),
                              (m = c()),
                              layui.each(m, function () {
                                  a++;
                              }),
                              a)),
                          l.number && r.fileLength > l.number
                              ? r.msg("Tải lên đồng thời nhiều nhất: " + l.number + " tập tin<br>Bạn hiện chọn: " + r.fileLength + " tập tin")
                              : 0 < l.size &&
                                !(x.ie && x.ie < 10) &&
                                (layui.each(c(), function (e, t) {
                                    t.size > 1024 * l.size && ((t = 1 <= (t = l.size / 1024) ? t.toFixed(2) + "MB" : l.size + "KB"), (s.value = ""), (o = t));
                                }),
                                o)
                              ? r.msg("Kích thước tệp không thể vượt quá " + o)
                              : void (
                                    (l.before && !1 === l.before(y)) ||
                                    (!x.ie || 9 < x.ie
                                        ? d
                                        : function () {
                                              var n = v("#" + b);
                                              r.elemFile.parent().submit(),
                                                  clearInterval(g.timer),
                                                  (g.timer = setInterval(function () {
                                                      var e,
                                                          t = n.contents().find("body");
                                                      try {
                                                          e = t.text();
                                                      } catch (e) {
                                                          r.msg("Cross-domain requests are not supported"), clearInterval(g.timer), f();
                                                      }
                                                      e && (clearInterval(g.timer), t.html(""), u(0, e));
                                                  }, 30));
                                          })()
                                ))
                        : void 0;
                }
            }),
            (g.prototype.reload = function (e) {
                delete (e = e || {}).elem, delete e.bindAction, (e = this.config = v.extend({}, this.config, n.config, e)).elem.next().attr({ name: e.name, accept: e.acceptMime, multiple: e.multiple });
            }),
            (g.prototype.events = function () {
                function i(e) {
                    (r.chooseFiles = {}),
                        layui.each(e, function (e, t) {
                            var n = new Date().getTime();
                            r.chooseFiles[n + "-" + e] = t;
                        });
                }
                function a(e, t) {
                    var n = r.elemFile,
                        e = (l.item || l.elem, 1 < e.length ? e.length + "tập tin" : (e[0] || {}).name || n[0].value.match(/[^\/\\]+\..+/g) || [] || "");
                    n.next().hasClass(k) && n.next().remove(), r.upload(null, "choose"), r.isFile() || l.choose || n.after('<span class="layui-inline ' + k + '">' + e + "</span>");
                }
                function o() {
                    var e = v(this);
                    (e.attr("lay-data") || e.attr("lay-options")) && (r.config = v.extend({}, l, lay.options(this, { attr: e.attr("lay-data") ? "lay-data" : null })));
                }
                var r = this,
                    l = r.config;
                l.elem.off("upload.start").on("upload.start", function () {
                    var e = v(this);
                    o.call(this), (r.config.item = e), r.elemFile[0].click();
                }),
                    (x.ie && x.ie < 10) ||
                        l.elem
                            .off("upload.over")
                            .on("upload.over", function () {
                                v(this).attr("lay-over", "");
                            })
                            .off("upload.leave")
                            .on("upload.leave", function () {
                                v(this).removeAttr("lay-over");
                            })
                            .off("upload.drop")
                            .on("upload.drop", function (e, t) {
                                var n = v(this),
                                    t = t.originalEvent.dataTransfer.files || [];
                                n.removeAttr("lay-over"), o.call(this), i(t), l.auto ? r.upload() : a(t);
                            }),
                    r.elemFile.off("upload.change").on("upload.change", function () {
                        var e = this.files || [];
                        o.call(this), i(e), l.auto ? r.upload() : a(e);
                    }),
                    l.bindAction.off("upload.action").on("upload.action", function () {
                        r.upload();
                    }),
                    l.elem.data("haveEvents") ||
                        (r.elemFile.on("change", function () {
                            v(this).trigger("upload.change");
                        }),
                        l.elem.on("click", function () {
                            r.isFile() || v(this).trigger("upload.start");
                        }),
                        l.drag &&
                            l.elem
                                .on("dragover", function (e) {
                                    e.preventDefault(), v(this).trigger("upload.over");
                                })
                                .on("dragleave", function (e) {
                                    v(this).trigger("upload.leave");
                                })
                                .on("drop", function (e) {
                                    e.preventDefault(), v(this).trigger("upload.drop", e);
                                }),
                        l.bindAction.on("click", function () {
                            v(this).trigger("upload.action");
                        }),
                        l.elem.data("haveEvents", !0));
            }),
            (n.render = function (e) {
                return (
                    (e = new g(e)),
                    function () {
                        var t = this;
                        return {
                            upload: function (e) {
                                t.upload.call(t, e);
                            },
                            reload: function (e) {
                                t.reload.call(t, e);
                            },
                            config: t.config,
                        };
                    }.call(e)
                );
            }),
            e(i, n);
    }),
    layui.define(["lay", "layer", "util"], function (e) {
        "use strict";
        var w = layui.$,
            h = layui.layer,
            c = layui.util,
            o = layui.hint(),
            C = (layui.device(), "form"),
            s = ".layui-form",
            T = "layui-this",
            E = "layui-hide",
            D = "layui-disabled",
            t =
                (((n = function () {
                    this.config = {
                        verify: {
                            required: [/[\S]+/, "Các trường bắt buộc không được để trống"],
                            phone: [/^1\d{10}$/, "Xin vui lòng nhập một số điện thoại hợp lệ"],
                            email: [/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, "Định dạng email không chính xác"],
                            url: [/^(#|(http(s?)):\/\/|\/\/)[^\s]+\.[^\s]+$/, "   "],
                            number: function (e) {
                                if (isNaN(e)) return "Chỉ có thể điền số";
                            },
                            date: [/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/, "Định dạng ngày không chính xác"],
                            identity: [/(^\d{15}$)|(^\d{17}(x|X|\d)$)/, "Vui lòng nhập đúng số CMND"],
                        },
                        verIncludelRequired: !1,
                        autocomplete: null,
                    };
                }).prototype.set = function (e) {
                    return w.extend(!0, this.config, e), this;
                }),
                (n.prototype.verify = function (e) {
                    return w.extend(!0, this.config.verify, e), this;
                }),
                (n.prototype.getFormElem = function (e) {
                    return w(s + (e ? '[lay-filter="' + e + '"]' : ""));
                }),
                (n.prototype.on = function (e, t) {
                    return layui.onevent.call(this, C, e, t);
                }),
                (n.prototype.val = function (e, n) {
                    return (
                        this.getFormElem(e).each(function (e, t) {
                            var i = w(this);
                            layui.each(n, function (e, t) {
                                var n;
                                (e = i.find('[name="' + e + '"]'))[0] &&
                                    ("checkbox" === (n = e[0].type)
                                        ? (e[0].checked = t)
                                        : "radio" === n
                                        ? e.each(function () {
                                              this.checked = this.value == t;
                                          })
                                        : e.val(t));
                            });
                        }),
                        r.render(null, e),
                        this.getValue(e)
                    );
                }),
                (n.prototype.getValue = function (e, t) {
                    t = t || this.getFormElem(e);
                    var i = {},
                        a = {},
                        e = t.find("input,select,textarea");
                    return (
                        layui.each(e, function (e, t) {
                            var n;
                            w(this),
                                (t.name = (t.name || "").replace(/^\s*|\s*&/, "")),
                                t.name &&
                                    (/^.*\[\]$/.test(t.name) && ((n = t.name.match(/^(.*)\[\]$/g)[0]), (i[n] = 0 | i[n]), (n = t.name.replace(/^(.*)\[\]$/, "$1[" + i[n]++ + "]"))),
                                    (/^(checkbox|radio)$/.test(t.type) && !t.checked) || (a[n || t.name] = t.value));
                        }),
                        a
                    );
                }),
                (n.prototype.render = function (e, t) {
                    var n = this.config,
                        i = w(s + (t ? '[lay-filter="' + t + '"]' : "")),
                        a = {
                            input: function (e) {
                                (e = e || i.find("input,textarea")),
                                    n.autocomplete && e.attr("autocomplete", n.autocomplete),
                                    i.find("input[lay-affix],textarea[lay-affix]").each(function () {
                                        function a(t) {
                                            t = w.extend({}, d[r] || { value: r }, t, lay.options(o[0]));
                                            var n = w('<div class="' + s + '">'),
                                                e = w('<i class="layui-icon layui-icon-' + t.value + (t.disabled ? " " + D : "") + '"></i>'),
                                                i = (n.append(e), t.split && n.addClass("layui-input-split"), o.next("." + s)),
                                                a = (i[0] && i.remove(), o.next("." + l));
                                            a[0]
                                                ? ((i = a.find("." + s))[0] && i.remove(),
                                                  a.prepend(n),
                                                  o.css("padding-right", function () {
                                                      return (o.closest(".layui-input-group")[0] ? 0 : a.outerWidth()) + n.outerWidth();
                                                  }))
                                                : (n.addClass(l), o.after(n)),
                                                "auto" === t.show && c(n, o.val()),
                                                o.on("input propertychange", function () {
                                                    var e = this.value;
                                                    "auto" === t.show && c(n, e);
                                                }),
                                                e.on("click", function () {
                                                    var e = o.attr("lay-filter");
                                                    w(this).hasClass(D) || ("function" == typeof t.click && t.click.call(this, o, t), layui.event.call(this, C, "input-affix(" + e + ")", { elem: o[0], affix: r, options: t }));
                                                });
                                        }
                                        var o = w(this),
                                            r = o.attr("lay-affix"),
                                            l = "layui-input-suffix",
                                            s = "layui-input-affix",
                                            e = o.is("[disabled]") || o.is("[readonly]"),
                                            c = function (e, t) {
                                                (e = w(e))[0] && e[w.trim(t) ? "removeClass" : "addClass"](E);
                                            },
                                            d = {
                                                eye: {
                                                    value: "eye-invisible",
                                                    click: function (e, t) {
                                                        var n = "LAY_FORM_INPUT_AFFIX_SHOW",
                                                            i = e.data(n);
                                                        e.attr("type", i ? "password" : "text").data(n, !i), a({ value: i ? "eye-invisible" : "eye" });
                                                    },
                                                },
                                                clear: {
                                                    value: "clear",
                                                    click: function (e) {
                                                        e.val("").focus(), c(w(this).parent(), null);
                                                    },
                                                    show: "auto",
                                                    disabled: e,
                                                },
                                            };
                                        a();
                                    });
                            },
                            select: function (e) {
                                function m(e, t) {
                                    (w(e.target).parent().hasClass(x) && !t) || (w("." + v).removeClass(v + "ed " + v + "up"), g && k && g.val(k)), (g = null);
                                }
                                var g,
                                    v = "layui-form-select",
                                    x = "layui-select-title",
                                    b = "layui-select-none",
                                    k = "",
                                    e = e || i.find("select");
                                e.each(function (e, t) {
                                    var n = w(this),
                                        i = n.next("." + v),
                                        a = this.disabled,
                                        o = t.value,
                                        r = w(t.options[t.selectedIndex]),
                                        t = t.options[0];
                                    if ("string" == typeof n.attr("lay-ignore")) return n.show();
                                    var l,
                                        s = "string" == typeof n.attr("lay-search"),
                                        t = (t && !t.value && t.innerHTML) || "vui lòng chọn",
                                        r = w(
                                            [
                                                '<div class="' + (s ? "" : "layui-unselect ") + v,
                                                (a ? " layui-select-disabled" : "") + '">',
                                                '<div class="' + x + '">',
                                                '<input type="text" placeholder="' +
                                                    c.escape(w.trim(t)) +
                                                    '" value="' +
                                                    c.escape(w.trim(o ? r.html() : "")) +
                                                    '"' +
                                                    (!a && s ? "" : " readonly") +
                                                    ' class="layui-input' +
                                                    (s ? "" : " layui-unselect") +
                                                    (a ? " " + D : "") +
                                                    '">',
                                                '<i class="layui-edge"></i></div>',
                                                '<dl class="layui-anim layui-anim-upbit' + (n.find("optgroup")[0] ? " layui-select-group" : "") + '">',
                                                ((t = n.find("*")),
                                                (l = []),
                                                layui.each(t, function (e, t) {
                                                    var n = t.tagName.toLowerCase();
                                                    0 !== e || t.value || "optgroup" === n
                                                        ? "optgroup" === n
                                                            ? l.push("<dt>" + t.label + "</dt>")
                                                            : l.push('<dd lay-value="' + c.escape(t.value) + '" class="' + (o === t.value ? T : "") + (t.disabled ? " " + D : "") + '">' + w.trim(t.innerHTML) + "</dd>")
                                                        : l.push('<dd lay-value="" class="layui-select-tips">' + w.trim(t.innerHTML || "vui lòng chọn") + "</dd>");
                                                }),
                                                0 === l.length && l.push('<dd lay-value="" class="' + D + '">không có tùy chọn</dd>'),
                                                l.join("") + "</dl>"),
                                                "</div>",
                                            ].join("")
                                        );
                                    i[0] && i.remove(),
                                        n.after(r),
                                        function (i, e, t) {
                                            var l,
                                                r,
                                                n,
                                                a,
                                                s,
                                                o,
                                                c = w(this),
                                                d = i.find("." + x),
                                                u = d.find("input"),
                                                f = i.find("dl"),
                                                p = f.children("dd"),
                                                h = f.children("dt"),
                                                y = this.selectedIndex;
                                            e ||
                                                ((r = c.attr("lay-search")),
                                                (n = function () {
                                                    var e = i.offset().top + i.outerHeight() + 5 - S.scrollTop(),
                                                        t = f.outerHeight();
                                                    (y = c[0].selectedIndex),
                                                        i.addClass(v + "ed"),
                                                        p.removeClass(E),
                                                        h.removeClass(E),
                                                        (l = null),
                                                        p.removeClass(T),
                                                        0 <= y && p.eq(y).addClass(T),
                                                        e + t > S.height() && t <= e && i.addClass(v + "up"),
                                                        s();
                                                }),
                                                (a = function (e) {
                                                    i.removeClass(v + "ed " + v + "up"),
                                                        u.blur(),
                                                        (l = null),
                                                        e ||
                                                            o(u.val(), function (e) {
                                                                var t = c[0].selectedIndex;
                                                                e && ((k = w(c[0].options[t]).html()), 0 === t && k === u.attr("placeholder") && (k = ""), u.val(k || ""));
                                                            });
                                                }),
                                                (s = function () {
                                                    var e,
                                                        t,
                                                        n = f.children("dd." + T);
                                                    n[0] && ((e = n.position().top), (t = f.height()), (n = n.height()), t < e && f.scrollTop(e + f.scrollTop() - t + n - 5), e < 0 && f.scrollTop(e + f.scrollTop() - 5));
                                                }),
                                                d.on("click", function (e) {
                                                    i.hasClass(v + "ed") ? a() : (m(e, !0), n()), f.find("." + b).remove();
                                                }),
                                                d.find(".layui-edge").on("click", function () {
                                                    u.focus();
                                                }),
                                                u
                                                    .on("keyup", function (e) {
                                                        9 === e.keyCode && n();
                                                    })
                                                    .on("keydown", function (o) {
                                                        var e = o.keyCode,
                                                            r =
                                                                (9 === e && a(),
                                                                function (i, a) {
                                                                    o.preventDefault();
                                                                    var e = (function () {
                                                                            var e = f.children("dd." + T);
                                                                            if (f.children("dd." + E)[0] && "next" === i) {
                                                                                var t = f.children("dd:not(." + E + ",." + D + ")"),
                                                                                    n = t.eq(0).index();
                                                                                if (0 <= n && n < e.index() && !t.hasClass(T)) return t.eq(0).prev()[0] ? t.eq(0).prev() : f.children(":last");
                                                                            }
                                                                            return a && a[0] ? a : l && l[0] ? l : e;
                                                                        })(),
                                                                        t = e[i](),
                                                                        n = e[i]("dd:not(." + E + ")");
                                                                    return t[0] ? ((l = e[i]()), (n[0] && !n.hasClass(D)) || !l[0] ? (n.addClass(T).siblings().removeClass(T), void s()) : r(i, l)) : (l = null);
                                                                });
                                                        38 === e && r("prev"), 40 === e && r("next"), 13 === e && (o.preventDefault(), f.children("dd." + T).trigger("click"));
                                                    }),
                                                (o = function (i, e, a) {
                                                    var o = 0,
                                                        t =
                                                            (layui.each(p, function () {
                                                                var e = w(this),
                                                                    t = e.text(),
                                                                    n = ("cs" !== r && ((t = t.toLowerCase()), (i = i.toLowerCase())), -1 === t.indexOf(i));
                                                                ("" === i || "blur" === a ? i !== t : n) && o++, "keyup" === a && e[n ? "addClass" : "removeClass"](E);
                                                            }),
                                                            "keyup" === a &&
                                                                layui.each(h, function () {
                                                                    var e = w(this),
                                                                        t = e.nextUntil("dt").filter("dd");
                                                                    e[t.length == t.filter("." + E).length ? "addClass" : "removeClass"](E);
                                                                }),
                                                            o === p.length);
                                                    return e(t), t;
                                                }),
                                                t &&
                                                    u
                                                        .on("input propertychange", function (e) {
                                                            var t = this.value;
                                                            if (9 === (e = e.keyCode) || 13 === e || 37 === e || 38 === e || 39 === e || 40 === e) return !1;
                                                            o(
                                                                t,
                                                                function (e) {
                                                                    e ? f.find("." + b)[0] || f.append('<p class="' + b + '">无匹配项</p>') : f.find("." + b).remove();
                                                                },
                                                                "keyup"
                                                            ),
                                                                "" === t && (c.val(""), f.find("." + T).removeClass(T), (c[0].options[0] || {}).value || f.children("dd:eq(0)").addClass(T), f.find("." + b).remove()),
                                                                s();
                                                        })
                                                        .on("blur", function (e) {
                                                            var t = c[0].selectedIndex;
                                                            (g = u),
                                                                (k = w(c[0].options[t]).text()),
                                                                0 === t && k === u.attr("placeholder") && (k = ""),
                                                                setTimeout(function () {
                                                                    o(
                                                                        u.val(),
                                                                        function (e) {
                                                                            k || u.val("");
                                                                        },
                                                                        "blur"
                                                                    );
                                                                }, 200);
                                                        }),
                                                p.on("click", function () {
                                                    var e = w(this),
                                                        t = e.attr("lay-value"),
                                                        n = c.attr("lay-filter");
                                                    return (
                                                        e.hasClass(D) ||
                                                            (e.hasClass("layui-select-tips") ? u.val("") : (u.val(e.text()), e.addClass(T)),
                                                            e.siblings().removeClass(T),
                                                            c.val(t).removeClass("layui-form-danger"),
                                                            layui.event.call(this, C, "select(" + n + ")", { elem: c[0], value: t, othis: i }),
                                                            a(!0)),
                                                        !1
                                                    );
                                                }),
                                                i.find("dl>dt").on("click", function (e) {
                                                    return !1;
                                                }),
                                                w(document).off("click", m).on("click", m));
                                        }.call(this, r, a, s);
                                });
                            },
                            checkbox: function (e) {
                                var s = { checkbox: ["layui-form-checkbox", "layui-form-checked", "checkbox"], switch: ["layui-form-switch", "layui-form-onswitch", "switch"], SUBTRA: "layui-icon-indeterminate" };
                                (e = e || i.find("input[type=checkbox]")).each(function (e, t) {
                                    var n = w(this),
                                        i = n.attr("lay-skin") || "primary",
                                        a = c.escape(w.trim(t.title || (t.title = n.attr("lay-text") || ""))),
                                        o = this.disabled,
                                        r = s[i] || s.checkbox,
                                        l = n.next("." + r[0]);
                                    if ((l[0] && l.remove(), n.next("[lay-checkbox]")[0] && (a = n.next().html() || ""), (a = "switch" === i ? a.split("|") : [a]), "string" == typeof n.attr("lay-ignore"))) return n.show();
                                    (o = w(
                                        [
                                            '<div class="layui-unselect ' + r[0],
                                            t.checked ? " " + r[1] : "",
                                            o ? " layui-checkbox-disabled " + D : "",
                                            '"',
                                            i ? ' lay-skin="' + i + '"' : "",
                                            ">",
                                            (l = {
                                                checkbox: [
                                                    a[0] ? "<div>" + a[0] + "</div>" : "primary" === i ? "" : "<div></div>",
                                                    '<i class="layui-icon ' + ("primary" === i && !t.checked && n.get(0).indeterminate ? s.SUBTRA : "layui-icon-ok") + '"></i>',
                                                ].join(""),
                                                switch: "<div>" + ((t.checked ? a[0] : a[1]) || "") + "</div><i></i>",
                                            })[i] || l.checkbox,
                                            "</div>",
                                        ].join("")
                                    )),
                                        n.after(o),
                                        function (i, a) {
                                            var o = w(this);
                                            i.on("click", function () {
                                                var e = w(this),
                                                    t = o.attr("lay-filter"),
                                                    e = e.next("*[lay-checkbox]")[0] ? e.next().html() : o.attr("title") || "",
                                                    n = o.attr("lay-skin") || "primary",
                                                    e = "switch" === n ? e.split("|") : [e];
                                                o[0].disabled ||
                                                    (o[0].indeterminate &&
                                                        ((o[0].indeterminate = !1),
                                                        i
                                                            .find("." + s.SUBTRA)
                                                            .removeClass(s.SUBTRA)
                                                            .addClass("layui-icon-ok")),
                                                    o[0].checked
                                                        ? ((o[0].checked = !1), i.removeClass(a[1]), "switch" === n && i.children("div").html(e[1]))
                                                        : ((o[0].checked = !0), i.addClass(a[1]), "switch" === n && i.children("div").html(e[0])),
                                                    layui.event.call(o[0], C, a[2] + "(" + t + ")", { elem: o[0], value: o[0].value, othis: i }));
                                            });
                                        }.call(this, o, r);
                                });
                            },
                            radio: function (e) {
                                var r = "layui-form-radio",
                                    l = ["layui-icon-radio", "layui-icon-circle"];
                                (e = e || i.find("input[type=radio]")).each(function (e, t) {
                                    var n = w(this),
                                        i = n.next("." + r),
                                        a = this.disabled;
                                    if ("string" == typeof n.attr("lay-ignore")) return n.show();
                                    i[0] && i.remove(),
                                        (a = w(
                                            [
                                                '<div class="layui-unselect ' + r,
                                                t.checked ? " " + r + "ed" : "",
                                                (a ? " layui-radio-disabled " + D : "") + '">',
                                                '<i class="layui-anim layui-icon ' + l[t.checked ? 0 : 1] + '"></i>',
                                                "<div>" + ((i = c.escape(t.title || "")), (i = n.next("[lay-radio]")[0] ? n.next().html() : i)) + "</div>",
                                                "</div>",
                                            ].join("")
                                        )),
                                        n.after(a),
                                        function (i) {
                                            var a = w(this),
                                                o = "layui-anim-scaleSpring";
                                            i.on("click", function () {
                                                var e = a[0].name,
                                                    t = a.parents(s),
                                                    n = a.attr("lay-filter"),
                                                    e = t.find("input[name=" + e.replace(/(\.|#|\[|\])/g, "\\$1") + "]");
                                                a[0].disabled ||
                                                    (layui.each(e, function () {
                                                        var e = w(this).next("." + r);
                                                        (this.checked = !1),
                                                            e.removeClass(r + "ed"),
                                                            e
                                                                .find(".layui-icon")
                                                                .removeClass(o + " " + l[0])
                                                                .addClass(l[1]);
                                                    }),
                                                    (a[0].checked = !0),
                                                    i.addClass(r + "ed"),
                                                    i.find(".layui-icon").addClass(o + " " + l[0]),
                                                    layui.event.call(a[0], C, "radio(" + n + ")", { elem: a[0], value: a[0].value, othis: i }));
                                            });
                                        }.call(this, a);
                                });
                            },
                        },
                        t = function () {
                            layui.each(a, function (e, t) {
                                t();
                            });
                        };
                    return (
                        "object" === layui.type(e)
                            ? w(e).is(s)
                                ? ((i = w(e)), t())
                                : e.each(function (e, t) {
                                      var n = w(t);
                                      n.closest(s).length && ("SELECT" === t.tagName ? a.select(n) : "INPUT" === t.tagName && ("checkbox" === (t = t.type) || "radio" === t ? a[t](n) : a.input(n)));
                                  })
                            : e
                            ? a[e]
                                ? a[e]()
                                : o.error('不支持的 "' + e + '" 表单渲染')
                            : t(),
                        this
                    );
                }),
                (n.prototype.validate = function (e) {
                    var d = null,
                        u = this.config,
                        f = u.verify,
                        p = "layui-form-danger";
                    return (
                        !(e = w(e))[0] ||
                        ((void 0 !== e.attr("lay-verify") || !1 !== this.validate(e.find("*[lay-verify]"))) &&
                            (layui.each(e, function (e, r) {
                                var l = w(this),
                                    t = (l.attr("lay-verify") || "").split("|"),
                                    s = l.attr("lay-vertype"),
                                    c = w.trim(l.val());
                                if (
                                    (l.removeClass(p),
                                    layui.each(t, function (e, t) {
                                        var n = "",
                                            i = f[t];
                                        if (i) {
                                            var a = "function" == typeof i ? (n = i(c, r)) : !i[0].test(c),
                                                o = "select" === r.tagName.toLowerCase() || /^(checkbox|radio)$/.test(r.type),
                                                n = n || i[1];
                                            if (("required" === t && (n = l.attr("lay-reqtext") || n), a && (u.verIncludelRequired || "required" === t || (c && "required" !== t))))
                                                return (
                                                    "tips" === s
                                                        ? h.tips(n, "string" != typeof l.attr("lay-ignore") && o ? l.next() : l, { tips: 1 })
                                                        : "alert" === s
                                                        ? h.alert(n, { title: "提示", shadeClose: !0 })
                                                        : /\b(string|number)\b/.test(typeof n) && h.msg(n, { icon: 5, shift: 6 }),
                                                    setTimeout(function () {
                                                        (o ? l.next().find("input") : r).focus();
                                                    }, 7),
                                                    l.addClass(p),
                                                    (d = !0)
                                                );
                                        }
                                    }),
                                    d)
                                )
                                    return d;
                            }),
                            !d))
                    );
                }),
                (n.prototype.submit = function (e, t) {
                    var n = w(this),
                        e = "string" == typeof e ? e : n.attr("lay-filter"),
                        i = this.getFormElem ? this.getFormElem(e) : n.parents(s).eq(0),
                        a = i.find("*[lay-verify]");
                    return (
                        !!r.validate(a) &&
                        ((a = r.getValue(null, i)),
                        (i = { elem: this.getFormElem ? window.event && window.event.target : this, form: (this.getFormElem ? i : n.parents("form"))[0], field: a }),
                        "function" == typeof t && t(i),
                        layui.event.call(this, C, "submit(" + e + ")", i))
                    );
                })),
            r = new n(),
            n = w(document),
            S = w(window);
        w(function () {
            r.render();
        }),
            n.on("reset", s, function () {
                var e = w(this).attr("lay-filter");
                setTimeout(function () {
                    r.render(null, e);
                }, 50);
            }),
            n.on("submit", s, t).on("click", "*[lay-submit]", t),
            e(C, r);
    }),
    layui.define(["lay", "laytpl", "laypage", "form", "util"], function (e) {
        "use strict";
        function h() {
            var n = this,
                e = n.config,
                i = e.id || e.index;
            return {
                config: e,
                reload: function (e, t) {
                    n.reload.call(n, e, t);
                },
                reloadData: function (e, t) {
                    C.reloadData(i, e, t);
                },
                setColsWidth: function () {
                    n.setColsWidth.call(n);
                },
                resize: function () {
                    n.resize.call(n);
                },
            };
        }
        function y(e) {
            var t = h.that[e];
            return t || f.error(e ? "The table instance with ID '" + e + "' not found" : "ID argument required"), t || null;
        }
        function a(e) {
            var t = h.config[e];
            return t || f.error(e ? "The table instance with ID '" + e + "' not found" : "ID argument required"), t || null;
        }
        function m(e) {
            var t = this.config || {},
                n = (e = e || {}).item3,
                i = e.content;
            return (
                ("escape" in n ? n : t).escape && (i = k.escape(i)),
                (t = (e.text && n.exportTemplet) || n.templet || n.toolbar) && (i = "function" == typeof t ? t.call(n, e.tplData, e.obj) : v(g(t).html() || String(i)).render(g.extend({ LAY_COL: n }, e.tplData))),
                e.text ? g("<div>" + i + "</div>").text() : i
            );
        }
        function t(e) {
            return [
                '<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ',
                '{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>',
                "<thead>",
                "{{# layui.each(d.data.cols, function(i1, item1){ }}",
                "<tr>",
                "{{# layui.each(item1, function(i2, item2){ }}",
                '{{# if(item2.fixed && item2.fixed !== "right"){ left = true; } }}',
                '{{# if(item2.fixed === "right"){ right = true; } }}',
                (e = e || {}).fixed && "right" !== e.fixed ? '{{# if(item2.fixed && item2.fixed !== "right"){ }}' : "right" === e.fixed ? '{{# if(item2.fixed === "right"){ }}' : "",
                "{{# var isSort = !(item2.colGroup) && item2.sort; }}",
                '<th data-field="{{= item2.field||i2 }}" data-key="{{=d.index}}-{{=i1}}-{{=i2}}" {{# if( item2.parentKey){ }}data-parentkey="{{= item2.parentKey }}"{{# } }} {{# if(item2.minWidth){ }}data-minwidth="{{=item2.minWidth}}"{{# } }} {{# if(item2.maxWidth){ }}data-maxwidth="{{=item2.maxWidth}}"{{# } }} {{#var colspan = layui.type(item2.colspan2) === \'number\' ? item2.colspan2 : item2.colspan; if(colspan){}} colspan="{{=colspan}}"{{#} if(item2.rowspan){}} rowspan="{{=item2.rowspan}}"{{#}}} {{# if(item2.unresize || item2.colGroup){ }}data-unresize="true"{{# } }} class="{{# if(item2.hide){ }}layui-hide{{# } }}{{# if(isSort){ }} layui-unselect{{# } }}{{# if(!item2.field){ }} layui-table-col-special{{# } }}"{{# if(item2.title){ }} title="{{ layui.$(\'<div>\' + item2.title + \'</div>\').text() }}"{{# } }}>',
                '<div class="layui-table-cell laytable-cell-',
                "{{# if(item2.colGroup){ }}",
                "group",
                "{{# } else { }}",
                "{{=d.index}}-{{=i1}}-{{=i2}}",
                '{{# if(item2.type !== "normal"){ }}',
                " laytable-cell-{{= item2.type }}",
                "{{# } }}",
                "{{# } }}",
                '" {{#if(item2.align){}}align="{{=item2.align}}"{{#}}}>',
                '{{# if(item2.type === "checkbox"){ }}',
                '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose" {{# if(item2[d.data.checkName]){ }}checked{{# }; }}>',
                "{{# } else { }}",
                '<span>{{-item2.title||""}}</span>',
                "{{# if(isSort){ }}",
                '<span class="layui-table-sort layui-inline"><i class="layui-edge layui-table-sort-asc" title="thứ tự tăng dần"></i><i class="layui-edge layui-table-sort-desc" title="thứ tự giảm dần"></i></span>',
                "{{# } }}",
                "{{# } }}",
                "</div>",
                "</th>",
                e.fixed ? "{{# }; }}" : "",
                "{{# }); }}",
                "</tr>",
                "{{# }); }}",
                "</thead>",
                "</table>",
            ].join("");
        }
        function n(e) {
            (this.index = ++C.index), (this.config = g.extend({}, this.config, C.config, e)), this.render();
        }
        var g = layui.$,
            s = layui.lay,
            v = layui.laytpl,
            q = layui.laypage,
            x = layui.layer,
            b = layui.form,
            k = layui.util,
            f = layui.hint(),
            w = layui.device(),
            C = {
                config: { checkName: "LAY_CHECKED", indexName: "LAY_INDEX", numbersName: "LAY_NUM", disabledName: "LAY_DISABLED" },
                cache: {},
                index: layui.table ? layui.table.index + 1e4 : 0,
                set: function (e) {
                    return (this.config = g.extend({}, this.config, e)), this;
                },
                on: function (e, t) {
                    return layui.onevent.call(this, T, e, t);
                },
            },
            T = "table",
            o = ".layui-table",
            E = "layui-hide",
            p = "layui-hide-v",
            D = "layui-none",
            S = "layui-table-view",
            r = ".layui-table-header",
            N = ".layui-table-body",
            L = ".layui-table-pageview",
            A = ".layui-table-sort",
            I = "layui-table-edit",
            j = "layui-table-hover",
            M = "laytable-cell-group",
            _ = "layui-table-col-special",
            H = "layui-table-tool-panel",
            F = "LAY_TABLE_MOVE_DICT",
            i = [
                '<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ',
                '{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>',
                "<tbody></tbody>",
                "</table>",
            ].join(""),
            c = [
                ,
                "{{# if(d.data.toolbar){ }}",
                '<div class="layui-table-tool">',
                '<div class="layui-table-tool-temp"></div>',
                '<div class="layui-table-tool-self"></div>',
                "</div>",
                "{{# } }}",
                '<div class="layui-table-box">',
                "{{# if(d.data.loading){ }}",
                '<div class="layui-table-init" style="background-color: #fff;">',
                '<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>',
                "</div>",
                "{{# } }}",
                "{{# var left, right; }}",
                '<div class="layui-table-header">',
                t(),
                "</div>",
                '<div class="layui-table-body layui-table-main">',
                i,
                "</div>",
                "{{# if(left){ }}",
                '<div class="layui-table-fixed layui-table-fixed-l">',
                '<div class="layui-table-header">',
                t({ fixed: !0 }),
                "</div>",
                '<div class="layui-table-body">',
                i,
                "</div>",
                "</div>",
                "{{# }; }}",
                "{{# if(right){ }}",
                '<div class="layui-table-fixed layui-table-fixed-r layui-hide">',
                '<div class="layui-table-header">',
                t({ fixed: "right" }),
                '<div class="layui-table-mend"></div>',
                "</div>",
                '<div class="layui-table-body">',
                i,
                "</div>",
                "</div>",
                "{{# }; }}",
                "</div>",
                "{{# if(d.data.totalRow){ }}",
                '<div class="layui-table-total">',
                '<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ',
                '{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>',
                '<tbody><tr><td><div class="layui-table-cell" style="visibility: hidden;">Total</div></td></tr></tbody>',
                "</table>",
                "</div>",
                "{{# } }}",
                '<div class="layui-table-column layui-table-page layui-hide">',
                '<div class="layui-inline layui-table-pageview" id="layui-table-page{{=d.index}}"></div>',
                "</div>",
                "<style>",
                "{{# layui.each(d.data.cols, function(i1, item1){",
                "layui.each(item1, function(i2, item2){ }}",
                ".laytable-cell-{{=d.index}}-{{=i1}}-{{=i2}}{ ",
                "{{# if(item2.width){ }}",
                "width: {{=item2.width}}px;",
                "{{# } }}",
                " }",
                "{{# });",
                "}); }}",
                "{{# if(d.data.lineStyle){",
                'var cellClassName = ".layui-table-view-"+ d.index +" .layui-table-body .layui-table .layui-table-cell";',
                "}}",
                "{{= cellClassName }}{",
                "display: -webkit-box; -webkit-box-align: center; white-space: normal; {{- d.data.lineStyle }} ",
                "}",
                "{{= cellClassName }}:hover{overflow: auto;}",
                "{{# } }}",
                "{{# if(d.data.css){ }}",
                "{{- d.data.css }}",
                "{{# } }}",
                "</style>",
            ].join(""),
            O = g(window),
            P = g(document),
            l =
                ((n.prototype.config = {
                    limit: 10,
                    loading: !0,
                    escape: !0,
                    cellMinWidth: 60,
                    cellMaxWidth: Number.MAX_VALUE,
                    editTrigger: "click",
                    defaultToolbar: ["filter", "exports", "print"],
                    defaultContextmenu: !0,
                    autoSort: !0,
                    text: { none: "Không có dữ liệu" },
                    cols: [],
                }),
                (n.prototype.render = function (e) {
                    var t = this,
                        n = t.config,
                        i = ((n.elem = g(n.elem)), (n.where = n.where || {}), (n.id = "id" in n ? n.id : n.elem.attr("id") || t.index));
                    if (
                        ((h.that[i] = t),
                        ((h.config[i] = n).request = g.extend({ pageName: "page", limitName: "limit" }, n.request)),
                        (n.response = g.extend({ statusName: "code", statusCode: 0, msgName: "msg", dataName: "data", totalRowName: "totalRow", countName: "count" }, n.response)),
                        null !== n.page && "object" == typeof n.page && ((n.limit = n.page.limit || n.limit), (n.limits = n.page.limits || n.limits), (t.page = n.page.curr = n.page.curr || 1), delete n.page.elem, delete n.page.jump),
                        !n.elem[0])
                    )
                        return t;
                    if ((n.elem.attr("lay-filter") || n.elem.attr("lay-filter", n.id), "reloadData" === e)) return t.pullData(t.page, { type: "reloadData" });
                    (n.index = t.index),
                        (t.key = n.id || n.index),
                        t.setInit(),
                        n.height && /^full-\d+$/.test(n.height)
                            ? ((t.fullHeightGap = n.height.split("-")[1]), (n.height = O.height() - t.fullHeightGap))
                            : n.height && /^#\w+\S*-\d+$/.test(n.height) && ((i = n.height.split("-")), (t.parentHeightGap = i.pop()), (t.parentDiv = i.join("-")), (n.height = g(t.parentDiv).height() - t.parentHeightGap));
                    var a,
                        i = (e = n.elem).next("." + S),
                        o = (t.elem = g("<div></div>"));
                    o
                        .addClass(((a = [S, S + "-" + t.index, "layui-form", "layui-border-box"]), n.className && a.push(n.className), a.join(" ")))
                        .attr({ "lay-filter": "LAY-TABLE-FORM-DF-" + t.index, "lay-id": n.id, style: ((a = []), n.width && a.push("width:" + n.width + "px;"), a.join("")) })
                        .html(v(c, { open: "{{", close: "}}" }).render({ data: n, index: t.index })),
                        i[0] && i.remove(),
                        e.after(o),
                        (t.layTool = o.find(".layui-table-tool")),
                        (t.layBox = o.find(".layui-table-box")),
                        (t.layHeader = o.find(r)),
                        (t.layMain = o.find(".layui-table-main")),
                        (t.layBody = o.find(N)),
                        (t.layFixed = o.find(".layui-table-fixed")),
                        (t.layFixLeft = o.find(".layui-table-fixed-l")),
                        (t.layFixRight = o.find(".layui-table-fixed-r")),
                        (t.layTotal = o.find(".layui-table-total")),
                        (t.layPage = o.find(".layui-table-page")),
                        t.renderToolbar(),
                        t.renderPagebar(),
                        t.fullSize(),
                        t.pullData(t.page),
                        t.events();
                }),
                (n.prototype.initOpts = function (e) {
                    this.config,
                        e.checkbox && (e.type = "checkbox"),
                        e.space && (e.type = "space"),
                        e.type || (e.type = "normal"),
                        "normal" !== e.type && ((e.unresize = !0), (e.width = e.width || { checkbox: 50, radio: 50, space: 30, numbers: 60 }[e.type]));
                }),
                (n.prototype.setInit = function (e) {
                    var i,
                        n,
                        l = this,
                        s = l.config;
                    if (
                        ((s.clientWidth =
                            s.width ||
                            (i = function (e) {
                                var t,
                                    n = (e = e || s.elem.parent()).width();
                                try {
                                    t = "none" === e.css("display");
                                } catch (e) {}
                                return !e[0] || (n && !t) ? n : i(e.parent());
                            })()),
                        "width" === e)
                    )
                        return s.clientWidth;
                    (s.height = s.maxHeight || s.height),
                        s.css &&
                            -1 === s.css.indexOf(S) &&
                            ((n = s.css.split("}")),
                            layui.each(n, function (e, t) {
                                t && (n[e] = "." + S + "-" + l.index + " " + t);
                            }),
                            (s.css = n.join("}")));
                    var c = function (n, e, i, a) {
                        var o, r;
                        a
                            ? ((a.key = [s.index, n, i].join("-")),
                              (a.colspan = a.colspan || 0),
                              (a.rowspan = a.rowspan || 0),
                              l.initOpts(a),
                              (o = n + (parseInt(a.rowspan) || 1)) < s.cols.length
                                  ? ((a.colGroup = !0),
                                    (r = 0),
                                    layui.each(s.cols[o], function (e, t) {
                                        t.HAS_PARENT || (1 <= r && r == (a.colspan || 1)) || ((t.HAS_PARENT = !0), (t.parentKey = [s.index, n, i].join("-")), (r += parseInt(1 < t.colspan ? t.colspan : 1)), c(o, s.cols[o], e, t));
                                    }))
                                  : (a.colGroup = !1),
                              (a.hide = (a.hide && !a.colGroup) || !1))
                            : e.splice(i, 1);
                    };
                    layui.each(s.cols, function (n, i) {
                        layui.each(i, function (e, t) {
                            n ? delete t.HAS_PARENT : c(n, i, e, t);
                        });
                    });
                }),
                (n.prototype.renderToolbar = function () {
                    var e = this.config,
                        t = [
                            '<div class="layui-inline" lay-event="add"><i class="layui-icon layui-icon-add-1"></i></div>',
                            '<div class="layui-inline" lay-event="update"><i class="layui-icon layui-icon-edit"></i></div>',
                            '<div class="layui-inline" lay-event="delete"><i class="layui-icon layui-icon-delete"></i></div>',
                        ].join(""),
                        n = this.layTool.find(".layui-table-tool-temp"),
                        i =
                            ("default" === e.toolbar ? n.html(t) : "string" == typeof e.toolbar && (t = g(e.toolbar).html() || "") && n.html(v(t).render(e)),
                            {
                                filter: { title: "Cột", layEvent: "LAYTABLE_COLS", icon: "layui-icon-cols" },
                                exports: { title: "Xuất", layEvent: "LAYTABLE_EXPORT", icon: "layui-icon-export" },
                                print: { title: "In", layEvent: "LAYTABLE_PRINT", icon: "layui-icon-print" },
                            }),
                        a = [];
                    "object" == typeof e.defaultToolbar &&
                        layui.each(e.defaultToolbar, function (e, t) {
                            (t = "string" == typeof t ? i[t] : t) && a.push('<div class="layui-inline" title="' + t.title + '" lay-event="' + t.layEvent + '"><i class="layui-icon ' + t.icon + '"></i></div>');
                        }),
                        this.layTool.find(".layui-table-tool-self").html(a.join(""));
                }),
                (n.prototype.renderPagebar = function () {
                    var e,
                        t = this.config,
                        n = (this.layPagebar = g('<div class="layui-inline layui-table-pagebar"></div>'));
                    t.pagebar && ((e = g(t.pagebar).html() || "") && n.append(v(e).render(t)), this.layPage.append(n));
                }),
                (n.prototype.setParentCol = function (e, t) {
                    var n = this.config,
                        i = this.layHeader.find('th[data-key="' + t + '"]'),
                        a = parseInt(i.attr("colspan")) || 0;
                    i[0] && ((t = t.split("-")), (t = n.cols[t[1]][t[2]]), e ? a-- : a++, i.attr("colspan", a), i[a ? "removeClass" : "addClass"](E), (t.colspan2 = a), (t.hide = a < 1), (n = i.data("parentkey")) && this.setParentCol(e, n));
                }),
                (n.prototype.setColsPatch = function () {
                    var n = this,
                        e = n.config;
                    layui.each(e.cols, function (e, t) {
                        layui.each(t, function (e, t) {
                            t.hide && n.setParentCol(t.hide, t.parentKey);
                        });
                    });
                }),
                (n.prototype.setGroupWidth = function (i) {
                    var e,
                        a = this;
                    a.config.cols.length <= 1 ||
                        ((e = a.layHeader.find((i ? "th[data-key=" + i.data("parentkey") + "]>" : "") + "." + M)).css("width", 0),
                        layui.each(e.get().reverse(), function () {
                            var e = g(this),
                                t = e.parent().data("key"),
                                n = 0;
                            a.layHeader
                                .eq(0)
                                .find("th[data-parentkey=" + t + "]")
                                .width(function (e, t) {
                                    g(this).hasClass(E) || (0 < t && (n += t));
                                }),
                                n && e.css("max-width", n),
                                i && e.parent().data("parentkey") && a.setGroupWidth(e.parent());
                        }),
                        e.css("width", "auto"));
                }),
                (n.prototype.setColsWidth = function () {
                    var t,
                        n,
                        o = this,
                        l = o.config,
                        i = 0,
                        s = 0,
                        c = 0,
                        d = 0,
                        u = o.setInit("width"),
                        e =
                            (o.eachCols(function (e, t) {
                                t.hide || i++;
                            }),
                            (u = u - ("line" === l.skin || "nob" === l.skin ? 2 : i + 1) - o.getScrollWidth(o.layMain[0]) - 1),
                            function (r) {
                                layui.each(l.cols, function (e, o) {
                                    layui.each(o, function (e, t) {
                                        var n = 0,
                                            i = t.minWidth || l.cellMinWidth,
                                            a = t.maxWidth || l.cellMaxWidth;
                                        t
                                            ? t.colGroup ||
                                              t.hide ||
                                              (r
                                                  ? c && c < i
                                                      ? (s--, (n = i))
                                                      : c && a < c && (s--, (n = a))
                                                  : ((n = t.width || 0),
                                                    /\d+%$/.test(n)
                                                        ? a < (n = (n = Math.floor((parseFloat(n) / 100) * u)) < i ? i : n) && (n = a)
                                                        : n
                                                        ? "normal" === t.type && (n < i && (t.width = n = i), a < n && (t.width = n = a))
                                                        : ((t.width = n = 0), s++)),
                                              t.hide && (n = 0),
                                              (d += n))
                                            : o.splice(e, 1);
                                    });
                                }),
                                    d < u && 0 < s && (c = (u - d) / s);
                            }),
                        a =
                            (e(),
                            e(!0),
                            (o.autoColNums = s = 0 < s ? s : 0),
                            o.eachCols(function (e, n) {
                                var i = n.minWidth || l.cellMinWidth,
                                    a = n.maxWidth || l.cellMaxWidth;
                                n.colGroup ||
                                    n.hide ||
                                    (0 === n.width
                                        ? o.getCssRule(n.key, function (e) {
                                              e.style.width = Math.floor(c < i ? i : a < c ? a : c) + "px";
                                          })
                                        : /\d+%$/.test(n.width)
                                        ? o.getCssRule(n.key, function (e) {
                                              var t = Math.floor((parseFloat(n.width) / 100) * u);
                                              e.style.width = (t = a < (t = t < i ? i : t) ? a : t) + "px";
                                          })
                                        : o.getCssRule(n.key, function (e) {
                                              e.style.width = n.width + "px";
                                          }));
                            }),
                            o.layMain.width() - o.getScrollWidth(o.layMain[0]) - o.layMain.children("table").outerWidth());
                    0 < o.autoColNums &&
                        -i <= a &&
                        a <= i &&
                        ((e = (n = (t = function (e) {
                            return !(e = e || o.layHeader.eq(0).find("thead > tr:first-child > th:last-child")).data("field") && e.prev()[0] ? t(e.prev()) : e;
                        })()).data("key")),
                        o.getCssRule(e, function (e) {
                            var t = e.style.width || n.outerWidth();
                            (e.style.width = parseFloat(t) + a + "px"), 0 < o.layMain.height() - o.layMain.prop("clientHeight") && (e.style.width = parseFloat(e.style.width) - 1 + "px");
                        })),
                        o.setGroupWidth(),
                        o.layMain.find("tbody").is(":empty") ? ((e = o.layHeader.first().children("table").width()), o.layMain.find("table").width(e)) : o.layMain.find("table").width("auto"),
                        o.loading(!0);
                }),
                (n.prototype.resize = function () {
                    this.fullSize(), this.setColsWidth(), this.scrollPatch();
                }),
                (n.prototype.reload = function (e, t, n) {
                    var i = this;
                    (e = e || {}),
                        delete i.haveInit,
                        layui.each(e, function (e, t) {
                            "array" === layui.type(t) && delete i.config[e];
                        }),
                        (i.config = g.extend(t, {}, i.config, e)),
                        "reloadData" !== n &&
                            (layui.each(i.config.cols, function (e, t) {
                                layui.each(t, function (e, t) {
                                    delete t.colspan2;
                                });
                            }),
                            delete i.config.HAS_SET_COLS_PATCH),
                        i.render(n);
                }),
                (n.prototype.errorView = function (e) {
                    var t = this,
                        n = t.layMain.find("." + D),
                        e = g('<div class="' + D + '">' + (e || "Error") + "</div>");
                    n[0] && (t.layNone.remove(), n.remove()),
                        t.layFixed.addClass(E),
                        t.layMain.find("tbody").html(""),
                        t.layMain.append((t.layNone = e)),
                        t.layTotal.addClass(p),
                        t.layPage.find(L).addClass(p),
                        (C.cache[t.key] = []),
                        t.syncCheckAll(),
                        t.renderForm(),
                        t.setColsWidth();
                }),
                (n.prototype.page = 1),
                (n.prototype.pullData = function (t, n) {
                    function i() {
                        "object" == typeof r.initSort && o.sort({ field: r.initSort.field, type: r.initSort.type, reloadType: n.type });
                    }
                    var e,
                        a,
                        o = this,
                        r = o.config,
                        l = r.request,
                        s = r.response;
                    (n = n || {}),
                        "function" == typeof r.before && r.before(r),
                        (o.startTime = new Date().getTime()),
                        r.url
                            ? ((e = {}),
                              r.page && ((e[l.pageName] = t), (e[l.limitName] = r.limit)),
                              (l = g.extend(e, r.where)),
                              r.contentType && 0 == r.contentType.indexOf("application/json") && (l = JSON.stringify(l)),
                              o.loading(),
                              g.ajax({
                                  type: r.method || "get",
                                  url: r.url,
                                  contentType: r.contentType,
                                  data: l,
                                  dataType: r.dataType || "json",
                                  jsonpCallback: r.jsonpCallback,
                                  headers: r.headers || {},
                                  success: function (e) {
                                      (e = ("function" == typeof r.parseData && r.parseData(e)) || e)[s.statusName] != s.statusCode
                                          ? o.errorView(e[s.msgName] || 'Dữ liệu được trả về không phù hợp với thông số kỹ thuật và mã trạng thái thành công chính xác phải là: "' + s.statusName + '": ' + s.statusCode)
                                          : (o.renderData({ res: e, curr: t, count: e[s.countName], type: n.type }), i(), (r.time = new Date().getTime() - o.startTime + " ms")),
                                          o.setColsWidth(),
                                          "function" == typeof r.done && r.done(e, t, e[s.countName]);
                                  },
                                  error: function (e, t) {
                                      o.errorView("Yêu cầu ngoại lệ, thông báo lỗi: " + t), "function" == typeof r.error && r.error(e, t);
                                  },
                              }))
                            : "array" === layui.type(r.data) &&
                              ((e = {}),
                              (l = t * r.limit - r.limit),
                              (a = r.data.concat()),
                              (e[s.dataName] = r.page ? a.splice(l, r.limit) : a),
                              (e[s.countName] = r.data.length),
                              "object" == typeof r.totalRow && (e[s.totalRowName] = g.extend({}, r.totalRow)),
                              o.renderData({ res: e, curr: t, count: e[s.countName], type: n.type }),
                              i(),
                              o.setColsWidth(),
                              "function" == typeof r.done && r.done(e, t, e[s.countName]));
                }),
                (n.prototype.eachCols = function (e) {
                    return C.eachCols(null, e, this.config.cols), this;
                }),
                (n.prototype.col = function (e) {
                    try {
                        return (e = e.split("-")), this.config.cols[e[1]][e[2]] || {};
                    } catch (e) {
                        return f.error(e), {};
                    }
                }),
                (n.prototype.getTrHtml = function (e, t, n, i) {
                    var u = this,
                        f = u.config,
                        a = (i && i.trs) || [],
                        o = (i && i.trs_fixed) || [],
                        p = (i && i.trs_fixed_r) || [];
                    return (
                        (n = n || 1),
                        layui.each(e, function (r, l) {
                            var i = [],
                                s = [],
                                c = [],
                                d = r + f.limit * (n - 1) + 1;
                            if ("object" != typeof l) {
                                e[r] = l = { LAY_KEY: l };
                                try {
                                    C.cache[u.key][r] = l;
                                } catch (e) {}
                            }
                            ("array" === layui.type(l) && 0 === l.length) ||
                                ((l[C.config.numbersName] = d),
                                t || (l[C.config.indexName] = r),
                                u.eachCols(function (e, a) {
                                    var t,
                                        e = a.field || e,
                                        n = a.key,
                                        o = l[e];
                                    null == o && (o = ""),
                                        a.colGroup ||
                                            ((t = [
                                                '<td data-field="' +
                                                    e +
                                                    '" data-key="' +
                                                    n +
                                                    '" ' +
                                                    ((e = []),
                                                    (t = "function" == typeof a.edit ? a.edit(l) : a.edit) && e.push('data-edit="' + t + '"'),
                                                    a.templet && e.push('data-content="' + k.escape(o) + '"'),
                                                    a.toolbar && e.push('data-off="true"'),
                                                    a.event && e.push('lay-event="' + a.event + '"'),
                                                    a.minWidth && e.push('data-minwidth="' + a.minWidth + '"'),
                                                    a.maxWidth && e.push('data-maxwidth="' + a.maxWidth + '"'),
                                                    e.join(" ")) +
                                                    ' class="' +
                                                    ((t = []), a.hide && t.push(E), a.field || t.push(_), t.join(" ")) +
                                                    '">',
                                                '<div class="layui-table-cell laytable-cell-' +
                                                    ("normal" === a.type ? n : n + " laytable-cell-" + a.type) +
                                                    '"' +
                                                    (a.align ? ' align="' + a.align + '"' : "") +
                                                    ((e = []), a.style && e.push('style="' + a.style + '"'), e.join(" ")) +
                                                    ">" +
                                                    (function () {
                                                        var e,
                                                            t = g.extend(!0, { LAY_COL: a }, l),
                                                            n = C.config.checkName,
                                                            i = C.config.disabledName;
                                                        switch (a.type) {
                                                            case "checkbox":
                                                                return (
                                                                    '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" ' +
                                                                    ((e = []), a[n] && ((l[n] = a[n]), a[n] && (e[0] = "checked")), t[n] && (e[0] = "checked"), t[i] && e.push("disabled"), e.join(" ")) +
                                                                    ' lay-type="layTableCheckbox">'
                                                                );
                                                            case "radio":
                                                                return (
                                                                    t[n] && (u.thisCheckedRowIndex = r),
                                                                    '<input type="radio" name="layTableRadio_' + f.index + '" ' + ((e = []), t[n] && (e[0] = "checked"), t[i] && e.push("disabled"), e.join(" ")) + ' lay-type="layTableRadio">'
                                                                );
                                                            case "numbers":
                                                                return d;
                                                        }
                                                        return a.toolbar ? v(g(a.toolbar).html() || "").render(t) : m.call(u, { item3: a, content: o, tplData: t });
                                                    })(),
                                                "</div></td>",
                                            ].join("")),
                                            i.push(t),
                                            a.fixed && "right" !== a.fixed && s.push(t),
                                            "right" === a.fixed && c.push(t));
                                }),
                                a.push('<tr data-index="' + r + '">' + i.join("") + "</tr>"),
                                o.push('<tr data-index="' + r + '">' + s.join("") + "</tr>"),
                                p.push('<tr data-index="' + r + '">' + c.join("") + "</tr>"));
                        }),
                        { trs: a, trs_fixed: o, trs_fixed_r: p }
                    );
                }),
                (C.getTrHtml = function (e, t) {
                    return y(e).getTrHtml(t);
                }),
                (n.prototype.renderData = function (e) {
                    function t() {
                        if ((i.HAS_SET_COLS_PATCH || n.setColsPatch(), (i.HAS_SET_COLS_PATCH = !0), (n.thisCheckedRowIndex = ""), !l && n.sortKey))
                            return n.sort({ field: n.sortKey.field, type: n.sortKey.sort, pull: !0, reloadType: e.type });
                        n.getTrHtml(s, l, o, { trs: c, trs_fixed: d, trs_fixed_r: u }),
                            ("fixed" === i.scrollPos && "reloadData" === e.type) || n.layBody.scrollTop(0),
                            "reset" === i.scrollPos && n.layBody.scrollLeft(0),
                            n.layMain.find("." + D).remove(),
                            n.layMain.find("tbody").html(c.join("")),
                            n.layFixLeft.find("tbody").html(d.join("")),
                            n.layFixRight.find("tbody").html(u.join("")),
                            n.renderForm(),
                            "number" == typeof n.thisCheckedRowIndex && n.setRowChecked({ type: "radio", index: n.thisCheckedRowIndex }, !0),
                            n.syncCheckAll(),
                            n.fullSize(),
                            n.haveInit
                                ? n.scrollPatch()
                                : setTimeout(function () {
                                      n.scrollPatch();
                                  }, 50),
                            (n.haveInit = !0),
                            x.close(n.tipsIndex);
                    }
                    var n = this,
                        i = n.config,
                        a = e.res,
                        o = e.curr,
                        r = e.count,
                        l = e.sort,
                        s = a[i.response.dataName] || [],
                        a = a[i.response.totalRowName],
                        c = [],
                        d = [],
                        u = [];
                    return (
                        (C.cache[n.key] = s),
                        n.layTotal[0 == s.length ? "addClass" : "removeClass"](p),
                        n.layPage[i.page || i.pagebar ? "removeClass" : "addClass"](E),
                        n.layPage.find(L)[!i.page || 0 == r || (0 === s.length && 1 == o) ? "addClass" : "removeClass"](p),
                        0 === s.length
                            ? n.errorView(i.text.none)
                            : (n.layFixLeft.removeClass(E),
                              l
                                  ? t()
                                  : (t(),
                                    n.renderTotal(s, a),
                                    n.layTotal && n.layTotal.removeClass(E),
                                    void (
                                        i.page &&
                                        ((i.page = g.extend(
                                            {
                                                elem: "layui-table-page" + i.index,
                                                count: r,
                                                limit: i.limit,
                                                limits: i.limits || [10, 20, 30, 40, 50, 60, 70, 80, 90],
                                                groups: 3,
                                                layout: ["prev", "page", "next", "skip", "count", "limit"],
                                                prev: '<i class="layui-icon">&#xe603;</i>',
                                                next: '<i class="layui-icon">&#xe602;</i>',
                                                jump: function (e, t) {
                                                    t || ((n.page = e.curr), (i.limit = e.limit), n.pullData(e.curr));
                                                },
                                            },
                                            i.page
                                        )),
                                        (i.page.count = r),
                                        q.render(i.page))
                                    )))
                    );
                }),
                (n.prototype.renderTotal = function (e, r) {
                    var l,
                        s = this,
                        c = s.config,
                        d = {};
                    c.totalRow &&
                        (layui.each(e, function (e, i) {
                            ("array" === layui.type(i) && 0 === i.length) ||
                                s.eachCols(function (e, t) {
                                    var e = t.field || e,
                                        n = i[e];
                                    t.totalRow && (d[e] = (d[e] || 0) + (parseFloat(n) || 0));
                                });
                        }),
                        (s.dataTotal = []),
                        (l = []),
                        s.eachCols(function (e, t) {
                            var n,
                                e = t.field || e,
                                i = r && r[t.field],
                                a = "totalRowDecimals" in t ? t.totalRowDecimals : 2,
                                a = d[e] ? parseFloat(d[e] || 0).toFixed(a) : "",
                                a = ((n = t.totalRowText || ""), ((o = { LAY_COL: t })[e] = a), (o = (t.totalRow && m.call(s, { item3: t, content: a, tplData: o })) || n), i || o),
                                o =
                                    (t.field && s.dataTotal.push({ field: t.field, total: g("<div>" + a + "</div>").text() }),
                                    [
                                        '<td data-field="' +
                                            e +
                                            '" data-key="' +
                                            t.key +
                                            '" ' +
                                            ((n = []), t.minWidth && n.push('data-minwidth="' + t.minWidth + '"'), t.maxWidth && n.push('data-maxwidth="' + t.maxWidth + '"'), n.join(" ")) +
                                            ' class="' +
                                            ((o = []), t.hide && o.push(E), t.field || o.push(_), o.join(" ")) +
                                            '">',
                                        '<div class="layui-table-cell laytable-cell-' +
                                            ((n = t.key), "normal" === t.type ? n : n + " laytable-cell-" + t.type) +
                                            '"' +
                                            ((o = []), t.align && o.push('align="' + t.align + '"'), t.style && o.push('style="' + t.style + '"'), o.join(" ")) +
                                            ">" +
                                            ("string" == typeof (n = t.totalRow || c.totalRow) ? v(n).render(g.extend({ TOTAL_NUMS: i || d[e], TOTAL_ROW: r || {}, LAY_COL: t }, t)) : a),
                                        "</div></td>",
                                    ].join(""));
                            l.push(o);
                        }),
                        (e = s.layTotal.find(".layui-table-patch")),
                        s.layTotal.find("tbody").html("<tr>" + l.join("") + (e.length ? e.get(0).outerHTML : "") + "</tr>"));
                }),
                (n.prototype.getColElem = function (e, t) {
                    return this.config, e.eq(0).find(".laytable-cell-" + t + ":eq(0)");
                }),
                (n.prototype.renderForm = function (e) {
                    this.config;
                    var t = this.elem.attr("lay-filter");
                    b.render(e, t);
                }),
                (n.prototype.setRowChecked = function (n, e) {
                    var t,
                        i,
                        a = this.config,
                        o = "layui-table-click",
                        r = this.layBody.find("tr" + ("all" === n.index ? "" : '[data-index="' + n.index + '"]'));
                    "checkbox" !== (n = g.extend({ type: "checkbox" }, n)).type && "all" !== n.index && r.addClass(o).siblings("tr").removeClass(o),
                        n.selectedStyle ||
                            e ||
                            ((o = C.cache[this.key]),
                            (t = "checked" in n),
                            (i = function (e) {
                                return "radio" === n.type || (t ? n.checked : !e);
                            }),
                            layui.each(o, function (e, t) {
                                n.index === e || "all" === n.index ? (t[a.checkName] = i(t[a.checkName])) : "radio" === n.type && delete t[a.checkName];
                            }),
                            (e = r.find('input[lay-type="' + ({ radio: "layTableRadio", checkbox: "layTableCheckbox" }[n.type] || "checkbox") + '"]')).prop("checked", i(e.last().prop("checked"))),
                            this.syncCheckAll(),
                            this.renderForm(n.type));
                }),
                (n.prototype.sort = function (a) {
                    var e,
                        t = this,
                        n = {},
                        i = t.config,
                        o = i.elem.attr("lay-filter"),
                        r = C.cache[t.key];
                    "string" == typeof (a = a || {}).field &&
                        ((l = a.field),
                        t.layHeader.find("th").each(function (e, t) {
                            var n = g(this),
                                i = n.data("field");
                            if (i === a.field) return (a.field = n), (l = i), !1;
                        }));
                    try {
                        var l = l || a.field.data("field"),
                            s = a.field.data("key");
                        if (t.sortKey && !a.pull && l === t.sortKey.field && a.type === t.sortKey.sort) return;
                        var c = t.layHeader.find("th .laytable-cell-" + s).find(A);
                        t.layHeader.find("th").find(A).removeAttr("lay-sort"), c.attr("lay-sort", a.type || null), t.layFixed.find("th");
                    } catch (e) {
                        f.error("Table modules: sort field '" + l + "' not matched");
                    }
                    (t.sortKey = { field: l, sort: a.type }),
                        i.autoSort && ("asc" === a.type ? (e = layui.sort(r, l, null, !0)) : "desc" === a.type ? (e = layui.sort(r, l, !0, !0)) : ((e = layui.sort(r, C.config.indexName, null, !0)), delete t.sortKey, delete i.initSort)),
                        (n[i.response.dataName] = e || r),
                        t.renderData({ res: n, curr: t.page, count: t.count, sort: !0, type: a.reloadType }),
                        a.fromEvent && ((i.initSort = { field: l, type: a.type }), layui.event.call(a.field, T, "sort(" + o + ")", g.extend({ config: i }, i.initSort)));
                }),
                (n.prototype.loading = function (e) {
                    this.config.loading &&
                        (e
                            ? (this.layInit && this.layInit.remove(), delete this.layInit, this.layBox.find(".layui-table-init").remove())
                            : ((this.layInit = g(['<div class="layui-table-init">', '<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>', "</div>"].join(""))), this.layBox.append(this.layInit)));
                }),
                (n.prototype.setCheckData = function (n, i, a) {
                    var o = this.config,
                        e = C.cache[this.key];
                    e[n] &&
                        "array" !== layui.type(e[n]) &&
                        layui.each(e, function (e, t) {
                            n === e ? (t[o.checkName] = i) : a && delete t[o.checkName];
                        });
                }),
                (n.prototype.syncCheckAll = function () {
                    function e(n) {
                        t.eachCols(function (e, t) {
                            "checkbox" === t.type && (t[i.checkName] = n);
                        });
                    }
                    var t = this,
                        i = t.config,
                        n = t.layHeader.find('input[name="layTableCheckbox"]');
                    n[0] && (C.checkStatus(t.key).isAll ? (n[0].checked || (n.prop("checked", !0), t.renderForm("checkbox")), e(!0)) : (n[0].checked && (n.prop("checked", !1), t.renderForm("checkbox")), e(!1)));
                }),
                (n.prototype.getCssRule = function (n, i) {
                    var e = (e = (e = this.elem.find("style")[0]).sheet || e.styleSheet || {}).cssRules || e.rules;
                    layui.each(e, function (e, t) {
                        if (t.selectorText === ".laytable-cell-" + n) return i(t), !0;
                    });
                }),
                (n.prototype.fullSize = function () {
                    var e,
                        n,
                        i = this,
                        t = i.config,
                        a = t.height;
                    i.fullHeightGap ? (a = O.height() - i.fullHeightGap) < 135 && (a = 135) : i.parentDiv && i.parentHeightGap && (a = g(i.parentDiv).height() - i.parentHeightGap) < 135 && (a = 135),
                        1 < t.cols.length &&
                            ((e = i.layFixed.find(r).find("th")),
                            (n = i.layHeader.first()),
                            layui.each(e, function (e, t) {
                                (t = g(t)).height(n.find('th[data-key="' + t.attr("data-key") + '"]').height() + "px");
                            })),
                        a &&
                            ((e = parseFloat(a) - (i.layHeader.outerHeight() || 39)),
                            t.toolbar && (e -= i.layTool.outerHeight() || 51),
                            t.totalRow && (e -= i.layTotal.outerHeight() || 40),
                            (t.page || t.pagebar) && (e -= i.layPage.outerHeight() || 43),
                            t.maxHeight
                                ? layui.each({ elem: a, layMain: e }, function (e, t) {
                                      i[e].css({ height: "auto", maxHeight: t + "px" });
                                  })
                                : i.layMain.outerHeight(e));
                }),
                (n.prototype.getScrollWidth = function (e) {
                    var t = 0;
                    return (
                        e
                            ? (t = e.offsetWidth - e.clientWidth)
                            : (((e = document.createElement("div")).style.width = "100px"),
                              (e.style.height = "100px"),
                              (e.style.overflowY = "scroll"),
                              document.body.appendChild(e),
                              (t = e.offsetWidth - e.clientWidth),
                              document.body.removeChild(e)),
                        t
                    );
                }),
                (n.prototype.scrollPatch = function () {
                    var e = this,
                        t = e.layMain.children("table"),
                        n = e.layMain.width() - e.layMain.prop("clientWidth"),
                        i = e.layMain.height() - e.layMain.prop("clientHeight"),
                        a = (e.getScrollWidth(e.layMain[0]), t.outerWidth() - e.layMain.width()),
                        o = function (e) {
                            var t;
                            n && i
                                ? (e = e.eq(0)).find(".layui-table-patch")[0] || ((t = g('<th class="layui-table-patch"><div class="layui-table-cell"></div></th>')).find("div").css({ width: n }), e.find("tr").append(t))
                                : e.find(".layui-table-patch").remove();
                        };
                    o(e.layHeader),
                        o(e.layTotal),
                        (o = e.layMain.height() - i),
                        e.layFixed.find(N).css("height", t.height() >= o ? o : "auto"),
                        e.layFixRight[C.cache[e.key] && C.cache[e.key].length && 0 < a ? "removeClass" : "addClass"](E),
                        e.layFixRight.css("right", n - 1);
                }),
                (n.prototype.events = function () {
                    function o(e, t) {
                        var n, i, a, o;
                        (e = g(e)).data("off") ||
                            ((n = e.data("field")),
                            (o = e.data("key")),
                            (o = d.col(o)),
                            (i = e.closest("tr").data("index")),
                            (i = C.cache[d.key][i]),
                            (a = e.children(f)),
                            (o = "function" == typeof o.edit ? o.edit(i) : o.edit) &&
                                (((o = g("textarea" === o ? '<textarea class="layui-input ' + I + '"></textarea>' : '<input class="layui-input ' + I + '">'))[0].value = e.data("content") || i[n] || a.text()),
                                e.find("." + I)[0] || e.append(o),
                                o.focus(),
                                t && layui.stope(t)));
                    }
                    function t(e) {
                        var t = g(this).parent().children(f);
                        (d.tipsIndex = x.tips(
                            [
                                '<div class="layui-table-tips-main" style="margin-top: -' + (t.height() + 23) + "px;" + ("sm" === u.size ? "padding: 4px 15px; font-size: 12px;" : "lg" === u.size ? "padding: 14px 15px;" : "") + '">',
                                t.html(),
                                "</div>",
                                '<i class="layui-icon layui-table-tips-c layui-icon-close"></i>',
                            ].join(""),
                            t[0],
                            {
                                tips: [3, ""],
                                time: -1,
                                anim: -1,
                                maxWidth: w.ios || w.android ? 300 : d.elem.width() / 2,
                                isOutAnim: !1,
                                skin: "layui-table-tips",
                                success: function (e, t) {
                                    e.find(".layui-table-tips-c").on("click", function () {
                                        x.close(t);
                                    });
                                },
                            }
                        )),
                            layui.stope(e);
                    }
                    function n(e) {
                        var t = g(this),
                            n = t.closest("td"),
                            i = t.parents("tr").eq(0).data("index");
                        layui.event.call(
                            this,
                            T,
                            (e || "tool") + "(" + s + ")",
                            c.call(this, {
                                event: t.attr("lay-event"),
                                getCol: function () {
                                    return d.col(n.data("key"));
                                },
                            })
                        ),
                            d.setRowChecked({ type: "radio", index: i }, !0);
                    }
                    var d = this,
                        u = d.config,
                        s = u.elem.attr("lay-filter"),
                        e = d.layHeader.find("th"),
                        f = ".layui-table-cell",
                        r = g("body"),
                        l = {},
                        c =
                            (d.layTool.on("click", "*[lay-event]", function (e) {
                                function t(e) {
                                    var t = g(e.list),
                                        n = g('<ul class="' + H + '"></ul>');
                                    n.html(t),
                                        u.height && n.css("max-height", u.height - (d.layTool.outerHeight() || 50)),
                                        i.find("." + H)[0] || i.append(n),
                                        d.renderForm(),
                                        n.on("click", function (e) {
                                            layui.stope(e);
                                        }),
                                        e.done && e.done(n, t);
                                }
                                var n,
                                    i = g(this),
                                    a = i.attr("lay-event");
                                switch ((layui.stope(e), P.trigger("table.tool.panel.remove"), x.close(d.tipsIndex), a)) {
                                    case "LAYTABLE_COLS":
                                        t({
                                            list:
                                                ((n = []),
                                                d.eachCols(function (e, t) {
                                                    t.field &&
                                                        "normal" == t.type &&
                                                        n.push(
                                                            '<li><input type="checkbox" name="' +
                                                                t.field +
                                                                '" data-key="' +
                                                                t.key +
                                                                '" data-parentkey="' +
                                                                (t.parentKey || "") +
                                                                '" lay-skin="primary" ' +
                                                                (t.hide ? "" : "checked") +
                                                                ' title="' +
                                                                k.escape(g("<div>" + (t.fieldTitle || t.title || t.field) + "</div>").text()) +
                                                                '" lay-filter="LAY_TABLE_TOOL_COLS"></li>'
                                                        );
                                                }),
                                                n.join("")),
                                            done: function () {
                                                b.on("checkbox(LAY_TABLE_TOOL_COLS)", function (e) {
                                                    var e = g(e.elem),
                                                        t = this.checked,
                                                        n = e.data("key"),
                                                        i = d.col(n),
                                                        a = i.hide,
                                                        e = e.data("parentkey");
                                                    i.key &&
                                                        ((i.hide = !t),
                                                        d.elem.find('*[data-key="' + n + '"]')[t ? "removeClass" : "addClass"](E),
                                                        a != i.hide && d.setParentCol(!t, e),
                                                        d.resize(),
                                                        layui.event.call(this, T, "colToggled(" + s + ")", { col: i, config: u }));
                                                });
                                            },
                                        });
                                        break;
                                    case "LAYTABLE_EXPORT":
                                        w.ie
                                            ? x.tips("Chức năng xuất không hỗ trợ IE, vui lòng sử dụng trình duyệt nâng cao như Chrome để xuất", this, { tips: 3 })
                                            : t({
                                                  list: ['<li data-type="csv">Xuất csv</li>', '<li data-type="xls">Xuất xls</li>'].join(""),
                                                  done: function (e, t) {
                                                      t.on("click", function () {
                                                          var e = g(this).data("type");
                                                          C.exportFile.call(d, u.id, null, e);
                                                      });
                                                  },
                                              });
                                        break;
                                    case "LAYTABLE_PRINT":
                                        var o = window.open("about:blank", "_blank"),
                                            r = [
                                                "<style>",
                                                "body{font-size: 12px; color: #5F5F5F;}",
                                                "table{width: 100%; border-collapse: collapse; border-spacing: 0;}",
                                                "th,td{line-height: 20px; padding: 9px 15px; border: 1px solid #ccc; text-align: left; font-size: 12px; color: #5F5F5F;}",
                                                "a{color: #5F5F5F; text-decoration:none;}",
                                                "img{max-height: 100%;}",
                                                "*.layui-hide{display: none}",
                                                "</style>",
                                            ].join(""),
                                            l = g(d.layHeader.html());
                                        l.append(d.layMain.find("table").html()),
                                            l.append(d.layTotal.find("table").html()),
                                            l.find("th.layui-table-patch").remove(),
                                            l
                                                .find("thead>tr>th." + _)
                                                .filter(function (e, t) {
                                                    return !g(t).children("." + M).length;
                                                })
                                                .remove(),
                                            l.find("tbody>tr>td." + _).remove(),
                                            o.document.write(r + l.prop("outerHTML")),
                                            o.document.close(),
                                            layui.device("edg").edg ? ((o.onafterprint = o.close), o.print()) : (o.print(), o.close());
                                }
                                layui.event.call(this, T, "toolbar(" + s + ")", g.extend({ event: a, config: u }, {}));
                            }),
                            d.layPagebar.on("click", "*[lay-event]", function (e) {
                                var t = g(this).attr("lay-event");
                                layui.event.call(this, T, "pagebar(" + s + ")", g.extend({ event: t, config: u }, {}));
                            }),
                            e
                                .on("mousemove", function (e) {
                                    var t = g(this),
                                        n = t.offset().left,
                                        e = e.clientX - n;
                                    t.data("unresize") || h.eventMoveElem || ((l.allowResize = t.width() - e <= 10), r.css("cursor", l.allowResize ? "col-resize" : ""));
                                })
                                .on("mouseleave", function () {
                                    g(this), h.eventMoveElem || r.css("cursor", "");
                                })
                                .on("mousedown", function (e) {
                                    var t,
                                        n = g(this);
                                    l.allowResize &&
                                        ((t = n.data("key")),
                                        e.preventDefault(),
                                        (l.offset = [e.clientX, e.clientY]),
                                        d.getCssRule(t, function (e) {
                                            var t = e.style.width || n.outerWidth();
                                            (l.rule = e), (l.ruleWidth = parseFloat(t)), (l.minWidth = n.data("minwidth") || u.cellMinWidth), (l.maxWidth = n.data("maxwidth") || u.cellMaxWidth);
                                        }),
                                        n.data(F, l),
                                        (h.eventMoveElem = n));
                                }),
                            h.docEvent ||
                                P.on("mousemove", function (e) {
                                    var t, n;
                                    h.eventMoveElem &&
                                        ((t = h.eventMoveElem.data(F) || {}),
                                        h.eventMoveElem.data("resizing", 1),
                                        e.preventDefault(),
                                        t.rule &&
                                            ((e = t.ruleWidth + e.clientX - t.offset[0]),
                                            (n = h.eventMoveElem.closest("." + S).attr("lay-id")),
                                            (n = y(n)) && ((e = e < t.minWidth ? t.minWidth : e) > t.maxWidth && (e = t.maxWidth), (t.rule.style.width = e + "px"), n.setGroupWidth(h.eventMoveElem), x.close(d.tipsIndex))));
                                }).on("mouseup", function (e) {
                                    var t, n, i, a, o;
                                    h.eventMoveElem &&
                                        ((i = (t = h.eventMoveElem).closest("." + S).attr("lay-id")),
                                        (n = y(i)) &&
                                            ((i = t.data("key")),
                                            (a = n.col(i)),
                                            (o = n.config.elem.attr("lay-filter")),
                                            (l = {}),
                                            r.css("cursor", ""),
                                            n.scrollPatch(),
                                            t.removeData(F),
                                            delete h.eventMoveElem,
                                            n.getCssRule(i, function (e) {
                                                (a.width = parseFloat(e.style.width)), layui.event.call(t[0], T, "colResized(" + o + ")", { col: a, config: n.config });
                                            })));
                                }),
                            (h.docEvent = !0),
                            e
                                .on("click", function (e) {
                                    var t = g(this),
                                        n = t.find(A),
                                        i = n.attr("lay-sort");
                                    if (!n[0] || 1 === t.data("resizing")) return t.removeData("resizing");
                                    d.sort({ field: t, type: "asc" === i ? "desc" : "desc" === i ? null : "asc", fromEvent: !0 });
                                })
                                .find(A + " .layui-edge ")
                                .on("click", function (e) {
                                    var t = (n = g(this)).index(),
                                        n = n.parents("th").eq(0).data("field");
                                    layui.stope(e), 0 === t ? d.sort({ field: n, type: "asc", fromEvent: !0 }) : d.sort({ field: n, type: "desc", fromEvent: !0 });
                                }),
                            (d.commonMember = function (e) {
                                var t = g(this).parents("tr").eq(0).data("index"),
                                    s = d.layBody.find('tr[data-index="' + t + '"]'),
                                    c = (c = C.cache[d.key] || [])[t] || {},
                                    n = {
                                        tr: s,
                                        config: u,
                                        data: C.clearCacheKey(c),
                                        index: t,
                                        del: function () {
                                            (C.cache[d.key][t] = []), s.remove(), d.scrollPatch();
                                        },
                                        update: function (e, l) {
                                            (e = e || {}),
                                                layui.each(e, function (i, a) {
                                                    var o = s.children('td[data-field="' + i + '"]'),
                                                        r = o.children(f);
                                                    (c[i] = n.data[i] = a),
                                                        d.eachCols(function (e, t) {
                                                            var n;
                                                            t.field == i
                                                                ? (r.html(m.call(d, { item3: t, content: a, tplData: g.extend({ LAY_COL: t }, c) })), o.data("content", a))
                                                                : l &&
                                                                  (t.templet || t.toolbar) &&
                                                                  ((e = s.children('td[data-field="' + (t.field || e) + '"]')),
                                                                  (n = c[t.field]),
                                                                  e.children(f).html(m.call(d, { item3: t, content: n, tplData: g.extend({ LAY_COL: t }, c) })),
                                                                  e.data("content", n));
                                                        });
                                                }),
                                                d.renderForm();
                                        },
                                        setRowChecked: function (e) {
                                            d.setRowChecked(g.extend({ index: t }, e));
                                        },
                                    };
                                return g.extend(n, e);
                            })),
                        i =
                            (d.elem.on("click", 'input[name="layTableCheckbox"]+', function (e) {
                                var t = (n = g(this)).closest("td"),
                                    n = n.prev(),
                                    i = d.layBody.find('input[name="layTableCheckbox"]'),
                                    a = n.parents("tr").eq(0).data("index"),
                                    o = n[0].checked,
                                    r = "layTableAllChoose" === n.attr("lay-filter");
                                n[0].disabled ||
                                    (r
                                        ? (i.each(function (e, t) {
                                              (t.checked = o), d.setCheckData(e, o);
                                          }),
                                          d.syncCheckAll(),
                                          d.renderForm("checkbox"))
                                        : (d.setCheckData(a, o), d.syncCheckAll(), layui.stope(e)),
                                    layui.event.call(
                                        n[0],
                                        T,
                                        "checkbox(" + s + ")",
                                        c.call(n[0], {
                                            checked: o,
                                            type: r ? "all" : "one",
                                            getCol: function () {
                                                return d.col(t.data("key"));
                                            },
                                        })
                                    ));
                            }),
                            d.elem.on("click", 'input[lay-type="layTableRadio"]+', function (e) {
                                var t = g(this),
                                    n = t.closest("td"),
                                    i = (t = t.prev())[0].checked,
                                    a = t.parents("tr").eq(0).data("index");
                                if ((layui.stope(e), t[0].disabled)) return !1;
                                d.setCheckData(a, i, "radio"),
                                    d.setRowChecked({ type: "radio", index: a }, !0),
                                    layui.event.call(
                                        t[0],
                                        T,
                                        "radio(" + s + ")",
                                        c.call(t[0], {
                                            checked: i,
                                            getCol: function () {
                                                return d.col(n.data("key"));
                                            },
                                        })
                                    );
                            }),
                            d.layBody
                                .on("mouseenter", "tr", function () {
                                    var e = g(this),
                                        t = e.index();
                                    e.data("off") || d.layBody.find("tr:eq(" + t + ")").addClass(j);
                                })
                                .on("mouseleave", "tr", function () {
                                    var e = g(this),
                                        t = e.index();
                                    e.data("off") || d.layBody.find("tr:eq(" + t + ")").removeClass(j);
                                })
                                .on("click", "tr", function (e) {
                                    var t = ".layui-form-checkbox,.layui-form-radio,[lay-unrow]",
                                        n = g(this).find(t);
                                    g(e.target).is(t) || (n[0] && g.contains(n[0], e.target)) || i.call(this, "row");
                                })
                                .on("dblclick", "tr", function () {
                                    i.call(this, "rowDouble");
                                })
                                .on("contextmenu", "tr", function (e) {
                                    u.defaultContextmenu || e.preventDefault(), i.call(this, "rowContextmenu");
                                }),
                            function (e) {
                                var t = g(this);
                                t.data("off") || layui.event.call(this, T, e + "(" + s + ")", c.call(t.children("td")[0]));
                            }),
                        a =
                            (d.layBody
                                .on("change", "." + I, function () {
                                    var e = (i = g(this)).parent(),
                                        t = this.value,
                                        n = i.parent().data("field"),
                                        i = i.closest("tr").data("index"),
                                        i = C.cache[d.key][i],
                                        a = c.call(e[0], {
                                            value: t,
                                            field: n,
                                            oldValue: i[n],
                                            td: e,
                                            reedit: function () {
                                                setTimeout(function () {
                                                    o(a.td);
                                                    var e = {};
                                                    (e[n] = a.oldValue), a.update(e);
                                                });
                                            },
                                            getCol: function () {
                                                return d.col(e.data("key"));
                                            },
                                        });
                                    ((i = {})[n] = t), a.update(i), layui.event.call(e[0], T, "edit(" + s + ")", a);
                                })
                                .on("blur", "." + I, function () {
                                    g(this).remove();
                                }),
                            d.layBody
                                .on(u.editTrigger, "td", function (e) {
                                    o(this, e);
                                })
                                .on("mouseenter", "td", function () {
                                    p.call(this);
                                })
                                .on("mouseleave", "td", function () {
                                    p.call(this, "hide");
                                }),
                            d.layTotal
                                .on("mouseenter", "td", function () {
                                    p.call(this);
                                })
                                .on("mouseleave", "td", function () {
                                    p.call(this, "hide");
                                }),
                            "layui-table-grid-down"),
                        p = function (e) {
                            var t = g(this),
                                n = t.children(f);
                            t.data("off") ||
                                (e
                                    ? t.find(".layui-table-grid-down").remove()
                                    : !(n.prop("scrollWidth") > n.outerWidth() || 0 < n.find("br").length) || u.lineStyle || n.find("." + a)[0] || t.append('<div class="' + a + '"><i class="layui-icon layui-icon-down"></i></div>'));
                        };
                    d.layBody.on("click", "." + a, function (e) {
                        t.call(this, e);
                    }),
                        d.layTotal.on("click", "." + a, function (e) {
                            t.call(this, e);
                        });
                    d.layBody
                        .on("click", "*[lay-event]", function (e) {
                            n.call(this), layui.stope(e);
                        })
                        .on("dblclick", "*[lay-event]", function (e) {
                            n.call(this, "toolDouble"), layui.stope(e);
                        }),
                        d.layMain.on("scroll", function () {
                            var e = (t = g(this)).scrollLeft(),
                                t = t.scrollTop();
                            d.layHeader.scrollLeft(e), d.layTotal.scrollLeft(e), d.layFixed.find(N).scrollTop(t), x.close(d.tipsIndex);
                        }),
                        O.on("resize", function () {
                            d.resize();
                        });
                }),
                P.on("click", function () {
                    P.trigger("table.remove.tool.panel");
                }),
                P.on("table.remove.tool.panel", function () {
                    g("." + H).remove();
                }),
                (C.init = function (i, r) {
                    r = r || {};
                    var e = "object" == typeof i ? i : g("string" == typeof i ? 'table[lay-filter="' + i + '"]' : o + "[lay-data], " + o + "[lay-options]"),
                        l = "Table element property lay-data configuration item has a syntax error: ";
                    return (
                        e.each(function () {
                            var a,
                                e = g(this),
                                t = e.attr("lay-data"),
                                t = s.options(this, { attr: t ? "lay-data" : null, errorText: l + (t || e.attr("lay-options")) }),
                                o = g.extend({ elem: this, cols: [], data: [], skin: e.attr("lay-skin"), size: e.attr("lay-size"), even: "string" == typeof e.attr("lay-even") }, C.config, r, t),
                                n =
                                    (i && e.hide(),
                                    e.find("thead>tr").each(function (i) {
                                        (o.cols[i] = []),
                                            g(this)
                                                .children()
                                                .each(function (e) {
                                                    var t = (n = g(this)).attr("lay-data"),
                                                        t = s.options(this, { attr: t ? "lay-data" : null, errorText: l + (t || n.attr("lay-options")) }),
                                                        n = g.extend({ title: n.text(), colspan: parseInt(n.attr("colspan")) || 0, rowspan: parseInt(n.attr("rowspan")) || 0 }, t);
                                                    o.cols[i].push(n);
                                                });
                                    }),
                                    e.find("tbody>tr")),
                                t = C.render(o);
                            !n.length ||
                                r.data ||
                                t.config.url ||
                                ((a = 0),
                                C.eachCols(t.config.id, function (e, i) {
                                    n.each(function (e) {
                                        o.data[e] = o.data[e] || {};
                                        var t = g(this),
                                            n = i.field;
                                        o.data[e][n] = t.children("td").eq(a).html();
                                    }),
                                        a++;
                                }),
                                t.reloadData({ data: o.data }));
                        }),
                        this
                    );
                }),
                (h.that = {}),
                (h.config = {}),
                function (n, i, e, a) {
                    var o, r;
                    a.colGroup &&
                        ((o = 0),
                        n++,
                        (a.CHILD_COLS = []),
                        (r = e + (parseInt(a.rowspan) || 1)),
                        layui.each(i[r], function (e, t) {
                            t.parentKey
                                ? t.parentKey === a.key && ((t.PARENT_COL_INDEX = n), a.CHILD_COLS.push(t), l(n, i, r, t))
                                : t.PARENT_COL_INDEX || (1 <= o && o == (a.colspan || 1)) || ((t.PARENT_COL_INDEX = n), a.CHILD_COLS.push(t), (o += parseInt(1 < t.colspan ? t.colspan : 1)), l(n, i, r, t));
                        }));
                });
        (C.eachCols = function (e, n, i) {
            var e = h.config[e] || {},
                a = [],
                o =
                    ((i = g.extend(!0, [], i || e.cols)),
                    layui.each(i, function (n, e) {
                        if (n) return !0;
                        layui.each(e, function (e, t) {
                            l(0, i, n, t), t.PARENT_COL_INDEX || a.push(t);
                        });
                    }),
                    function (e) {
                        layui.each(e || a, function (e, t) {
                            if (t.CHILD_COLS) return o(t.CHILD_COLS);
                            "function" == typeof n && n(e, t);
                        });
                    });
            o();
        }),
            (C.checkStatus = function (e) {
                var n = 0,
                    i = 0,
                    a = [],
                    e = C.cache[e] || [];
                return (
                    layui.each(e, function (e, t) {
                        "array" === layui.type(t) ? i++ : t[C.config.checkName] && (n++, t[C.config.disabledName] || a.push(C.clearCacheKey(t)));
                    }),
                    { data: a, isAll: !!e.length && n === e.length - i }
                );
            }),
            (C.setRowChecked = function (e, t) {
                (e = y(e)) && e.setRowChecked(t);
            }),
            (C.getData = function (e) {
                var n = [],
                    e = C.cache[e] || [];
                return (
                    layui.each(e, function (e, t) {
                        "array" !== layui.type(t) && n.push(C.clearCacheKey(t));
                    }),
                    n
                );
            }),
            (C.resize = function (e) {
                e
                    ? a(e) && y(e).resize()
                    : layui.each(h.that, function () {
                          this.resize();
                      });
            }),
            (C.exportFile = function (e, t, n) {
                t = t || C.clearCacheKey(C.cache[e]);
                var r,
                    l,
                    i,
                    s,
                    a = (n = "object" == typeof n ? n : ((a = {}), n && (a.type = n), a)).type || "csv",
                    c = h.that[e],
                    o = h.config[e] || {},
                    d = { csv: "text/csv", xls: "application/vnd.ms-excel" }[a],
                    u = document.createElement("a");
                if (w.ie) return f.error("IE_NOT_SUPPORT_EXPORTS");
                (u.href =
                    "data:" +
                    d +
                    ";charset=utf-8,\ufeff" +
                    encodeURIComponent(
                        ((r = []),
                        (l = []),
                        (i = []),
                        (s = {}),
                        layui.each(t, function (i, a) {
                            var o = [];
                            "object" == typeof e
                                ? (layui.each(e, function (e, t) {
                                      0 == i && r.push(t || "");
                                  }),
                                  layui.each(layui.isArray(a) ? g.extend([], a) : C.clearCacheKey(a), function (e, t) {
                                      o.push('"' + (t || "") + '"');
                                  }))
                                : C.eachCols(e, function (e, t) {
                                      var n;
                                      t.field &&
                                          "normal" == t.type &&
                                          (t.hide || t.ignoreExport
                                              ? 0 == i && (s[t.field] = !0)
                                              : (null == (n = a[t.field]) && (n = ""),
                                                0 == i && r.push(t.fieldTitle || t.title || t.field || ""),
                                                (n = (n = m.call(c, {
                                                    item3: t,
                                                    content: n,
                                                    tplData: a,
                                                    text: "text",
                                                    obj: {
                                                        td: function (e) {
                                                            return c.layBody.find('tr[data-index="' + i + '"]>td').filter('[data-field="' + e + '"]');
                                                        },
                                                    },
                                                })).replace(/"/g, '""')),
                                                o.push((n = '"' + n + '"'))));
                                  }),
                                l.push(o.join(","));
                        }),
                        c &&
                            layui.each(c.dataTotal, function (e, t) {
                                s[t.field] || i.push(t.total + "\t");
                            }),
                        r.join(",") + "\r\n" + l.join("\r\n") + "\r\n" + i.join(","))
                    )),
                    (u.download = (n.title || o.title || "table_" + (o.index || "")) + "." + a),
                    document.body.appendChild(u),
                    u.click(),
                    document.body.removeChild(u);
            }),
            (C.getOptions = a),
            (C.hideCol = function (e, a) {
                var o = y(e);
                o &&
                    ("boolean" === layui.type(a)
                        ? o.eachCols(function (e, t) {
                              var n = t.key,
                                  i = o.col(n),
                                  t = t.parentKey;
                              i.hide != a && ((i = i.hide = a), o.elem.find('*[data-key="' + n + '"]')[i ? "addClass" : "removeClass"](E), o.setParentCol(i, t));
                          })
                        : layui.each(a, function (e, a) {
                              o.eachCols(function (e, t) {
                                  var n, i;
                                  a.field === t.field &&
                                      ((n = t.key),
                                      (i = o.col(n)),
                                      (t = t.parentKey),
                                      "hide" in a && i.hide != a.hide && ((i = i.hide = !!a.hide), o.elem.find('*[data-key="' + n + '"]')[i ? "addClass" : "removeClass"](E), o.setParentCol(i, t)));
                              });
                          }),
                    g("." + H).remove(),
                    o.resize());
            }),
            (C.reload = function (e, t, n, i) {
                if (a(e)) return (e = y(e)).reload(t, n, i), h.call(e);
            }),
            (C.reloadData = function () {
                var n = g.extend([], arguments),
                    i = ((n[3] = "reloadData"), new RegExp("^(" + ["elem", "id", "cols", "width", "height", "maxHeight", "toolbar", "defaultToolbar", "className", "css", "totalRow", "pagebar"].join("|") + ")$"));
                return (
                    layui.each(n[1], function (e, t) {
                        i.test(e) && delete n[1][e];
                    }),
                    C.reload.apply(null, n)
                );
            }),
            (C.render = function (e) {
                return (e = new n(e)), h.call(e);
            }),
            (C.clearCacheKey = function (e) {
                return delete (e = g.extend({}, e))[C.config.checkName], delete e[C.config.indexName], delete e[C.config.numbersName], delete e[C.config.disabledName], e;
            }),
            g(function () {
                C.init();
            }),
            e(T, C);
    }),
    layui.define(["table"], function (e) {
        "use strict";
        function M(e) {
            var t = r.that[e];
            return t || u.error(e ? "The treeTable instance with ID '" + e + "' not found" : "ID argument required"), t || null;
        }
        function t(e) {
            (this.index = ++P.index), (this.config = F.extend(!0, {}, this.config, P.config, e)), this.init(), this.render();
        }
        function a(a, n, e) {
            var o = M(a),
                t = ("reloadData" !== e && (o.status = { expand: {} }), F.extend(!0, {}, o.getOptions(), n)),
                i = t.tree,
                r = i.customName.children,
                l = i.customName.id,
                s =
                    (delete n.hasNumberCol,
                    delete n.hasChecboxCol,
                    delete n.hasRadioCol,
                    O.eachCols(
                        null,
                        function (e, t) {
                            "numbers" === t.type ? (n.hasNumberCol = !0) : "checkbox" === t.type ? (n.hasChecboxCol = !0) : "radio" === t.type && (n.hasRadioCol = !0);
                        },
                        t.cols
                    ),
                    n.parseData),
                c = n.done;
            t.url
                ? (e && (!s || s.mod)) ||
                  ((n.parseData = function () {
                      var e = (t = arguments)[0],
                          t = ("function" === layui.type(s) && (e = s.apply(this, t) || t[0]), this.response.dataName);
                      return (
                          i.data.isSimpleData && !i.async.enable && (e[t] = o.flatToTree(e[t])),
                          p(
                              e[t],
                              function (e) {
                                  e[$] = o.status.expand[e[l]];
                              },
                              r
                          ),
                          this.autoSort && this.initSort && this.initSort.type && layui.sort(e[t], this.initSort.field, "desc" === this.initSort.type, !0),
                          o.initData(e[t]),
                          e
                      );
                  }),
                  (n.parseData.mod = !0))
                : ((n.data = n.data || []), i.data.isSimpleData && (n.data = o.flatToTree(n.data)), n.initSort && n.initSort.type && layui.sort(n.data, n.initSort.field, "desc" === n.initSort.type, !0), o.initData(n.data)),
                (e && (!c || c.mod)) ||
                    ((n.done = function () {
                        var e,
                            t = arguments,
                            n = this.elem.next(),
                            i = (o.updateStatus(null, { LAY_HAS_EXPANDED: !1 }), f(a, r), n.find('[name="layTableCheckbox"][lay-filter="layTableAllChoose"]'));
                        if ((i.length && ((e = P.checkStatus(a)), i.prop({ checked: e.isAll && e.data.length, indeterminate: !e.isAll && e.data.length })), o.renderTreeTable(n), "function" === layui.type(c))) return c.apply(this, t);
                    }),
                    (n.done.mod = !0));
        }
        function _(e, t, n) {
            return o[e] || (o[e] = layui.debounce(t, n)), o[e];
        }
        function H(t, n, i, a, o) {
            var e = t.trElem,
                r = t.tableViewElem || e.closest(".layui-table-view"),
                l = t.tableId || r.attr("lay-id"),
                s = t.options || O.getOptions(l),
                e = t.dataIndex || e.attr("lay-data-index"),
                c = M(l),
                d = s.tree || {},
                u = d.customName || {},
                f = u.isParent,
                p = c.getNodeDataByIndex(e),
                h = "boolean" !== layui.type(n),
                y = h ? !p[$] : n,
                m = p[f] ? y : null;
            if (o && y != p[$] && (!p[V] || "local" === p[V])) {
                var g = d.callback.beforeExpand;
                if ("function" === layui.type(g) && !1 === g(l, p, n)) return m;
            }
            var g = p[Y],
                v = (w = r.find('tr[lay-data-index="' + e + '"]')).find(".layui-table-tree-flexIcon");
            if (
                (v.html(y ? d.view.flexIconOpen : d.view.flexIconClose),
                p[f] && v.css("visibility", "visible"),
                d.view.showIcon && w.find(".layui-table-tree-nodeIcon:not(.layui-table-tree-iconCustom,.layui-table-tree-iconLeaf)").html(y ? d.view.iconOpen : d.view.iconClose),
                (c.status.expand[p[u.id]] = p[$] = y),
                null === m)
            )
                return m;
            var x = p[u.children] || [];
            if (y)
                if (g)
                    w
                        .nextAll(
                            x
                                .map(function (e, t, n) {
                                    return 'tr[lay-data-index="' + e[z] + '"]';
                                })
                                .join(",")
                        )
                        .removeClass(q),
                        layui.each(x, function (e, t) {
                            t[f] &&
                                (!i || h || t[$]
                                    ? t[$] && H({ dataIndex: t[z], trElem: r.find('tr[lay-data-index="' + t[z] + '"]').first(), tableViewElem: r, tableId: l, options: s }, !0)
                                    : H({ dataIndex: t[z], trElem: r.find('tr[lay-data-index="' + t[z] + '"]').first(), tableViewElem: r, tableId: l, options: s }, n, i, a, o));
                        });
                else {
                    var b,
                        k,
                        w,
                        C = (w = d.async || {}).url || s.url;
                    if (w.enable && p[f] && !p[V]) {
                        (p[V] = "loading"), v.html('<i class="layui-icon layui-icon-loading layui-anim layui-anim-loop layui-anim-rotate"></i>');
                        var T = function (e) {
                                (p[V] = "success"), (p[u.children] = e), c.initData(p[u.children], p[z]), H(t, !0, !h && i, a, o);
                            },
                            E = w.format;
                        if ("function" === layui.type(E)) return E(p, s, T), m;
                        var D = F.extend({}, w.where || s.where),
                            E = w.autoParam;
                        layui.each(E, function (e, t) {
                            (t = t.split("=")), (D[t[0].trim()] = p[(t[1] || t[0]).trim()]);
                        });
                        (E = w.contentType || s.contentType) && 0 == E.indexOf("application/json") && (D = JSON.stringify(D));
                        var S = w.method || s.method,
                            N = w.dataType || s.dataType,
                            L = w.jsonpCallback || s.jsonpCallback,
                            A = w.headers || s.headers,
                            I = w.parseData || s.parseData,
                            j = w.response || s.response;
                        return (
                            F.ajax({
                                type: S || "get",
                                url: C,
                                contentType: E,
                                data: D,
                                dataType: N || "json",
                                jsonpCallback: L,
                                headers: A || {},
                                success: function (e) {
                                    (e = ("function" == typeof I && I.call(s, e)) || e)[j.statusName] != j.statusCode ? ((p[V] = "error"), v.html('<i class="layui-icon layui-icon-refresh"></i>')) : T(e[j.dataName]);
                                },
                                error: function (e, t) {
                                    (p[V] = "error"), "function" == typeof s.error && s.error(e, t);
                                },
                            }),
                            m
                        );
                    }
                    (g = p[Y] = !0),
                        x.length &&
                            (!s.initSort || (s.url && !s.autoSort) || ((w = s.initSort).type ? layui.sort(x, w.field, "desc" === w.type, !0) : layui.sort(x, O.config.indexName, null, !0)),
                            c.initData(p[u.children], p[z]),
                            (S = O.getTrHtml(l, x, null, null, e)),
                            (b = { trs: F(S.trs.join("")), trs_fixed: F(S.trs_fixed.join("")), trs_fixed_r: F(S.trs_fixed_r.join("")) }),
                            (k = (e.split("-").length - 1 || 0) + 1),
                            layui.each(x, function (e, t) {
                                b.trs.eq(e).attr({ "data-index": t[z], "lay-data-index": t[z], "data-level": k }),
                                    b.trs_fixed.eq(e).attr({ "data-index": t[z], "lay-data-index": t[z], "data-level": k }),
                                    b.trs_fixed_r.eq(e).attr({ "data-index": t[z], "lay-data-index": t[z], "data-level": k });
                            }),
                            r
                                .find(B)
                                .find('tbody tr[lay-data-index="' + e + '"]')
                                .after(b.trs),
                            r
                                .find(R)
                                .find('tbody tr[lay-data-index="' + e + '"]')
                                .after(b.trs_fixed),
                            r
                                .find(W)
                                .find('tbody tr[lay-data-index="' + e + '"]')
                                .after(b.trs_fixed_r),
                            c.renderTreeTable(b.trs, k),
                            i &&
                                !h &&
                                layui.each(x, function (e, t) {
                                    H({ dataIndex: t[z], trElem: r.find('tr[lay-data-index="' + t[z] + '"]').first(), tableViewElem: r, tableId: l, options: s }, n, i, a, o);
                                }));
                }
            else
                i && !h
                    ? (layui.each(x, function (e, t) {
                          H({ dataIndex: t[z], trElem: r.find('tr[lay-data-index="' + t[z] + '"]').first(), tableViewElem: r, tableId: l, options: s }, n, i, a, o);
                      }),
                      r
                          .find(
                              x
                                  .map(function (e, t, n) {
                                      return 'tr[lay-data-index="' + e[z] + '"]';
                                  })
                                  .join(",")
                          )
                          .addClass(q))
                    : ((C = c.treeToFlat(x, p[u.id], e)),
                      r
                          .find(
                              C.map(function (e, t, n) {
                                  return 'tr[lay-data-index="' + e[z] + '"]';
                              }).join(",")
                          )
                          .addClass(q));
            return (
                _(
                    "resize-" + l,
                    function () {
                        P.resize(l);
                    },
                    0
                )(),
                o && "loading" !== p[V] && ((E = d.callback.onExpand), "function" === layui.type(E) && E(l, p, y)),
                m
            );
        }
        function i(i) {
            var t = i.config.id,
                a = M(t),
                n = (i.data = P.getNodeDataByIndex(t, i.index)),
                o = n[z],
                r = ((i.dataIndex = o), i.update);
            (i.update = function () {
                var e = arguments,
                    t = (F.extend(a.getNodeDataByIndex(o), e[0]), r.apply(this, e)),
                    n = i.config.tree.customName.name;
                return (
                    n in e[0] &&
                        i.tr
                            .find('td[data-field="' + n + '"]')
                            .children("div.layui-table-cell")
                            .removeClass("layui-table-tree-item"),
                    a.renderTreeTable(i.tr, i.tr.attr("data-level"), !1),
                    t
                );
            }),
                (i.del = function () {
                    P.removeNode(t, n);
                }),
                (i.setRowChecked = function (e) {
                    P.setRowChecked(t, { index: n, checked: e });
                });
        }
        var o,
            F = layui.$,
            m = layui.form,
            O = layui.table,
            u = layui.hint(),
            P = {
                config: {},
                on: O.on,
                eachCols: O.eachCols,
                index: O.index,
                set: function (e) {
                    return (this.config = F.extend({}, this.config, e)), this;
                },
                resize: O.resize,
                getOptions: O.getOptions,
                hideCol: O.hideCol,
            },
            r = function () {
                var n = this,
                    e = n.config,
                    i = e.id || e.index;
                return {
                    config: e,
                    reload: function (e, t) {
                        n.reload.call(n, e, t);
                    },
                    reloadData: function (e, t) {
                        P.reloadData(i, e, t);
                    },
                };
            },
            q = "layui-hide",
            B = ".layui-table-main",
            R = ".layui-table-fixed-l",
            W = ".layui-table-fixed-r",
            g = "layui-table-tree",
            z = "LAY_DATA_INDEX",
            y = "LAY_DATA_INDEX_HISTORY",
            d = "LAY_PARENT_INDEX",
            v = "LAY_CHECKBOX_HALF",
            $ = "LAY_EXPAND",
            Y = "LAY_HAS_EXPANDED",
            V = "LAY_ASYNC_STATUS",
            f = function (i, a, e) {
                var o = O.cache[i];
                layui.each(e || o, function (e, t) {
                    var n = t[z];
                    -1 !== n.indexOf("-") && (o[n] = t), t[a] && f(i, a, t[a]);
                });
            },
            o =
                ((t.prototype.init = function () {
                    var e = this.config,
                        t = O.render(F.extend({}, e, { data: [], url: "", done: null })),
                        n = t.config.id;
                    ((r.that[n] = this).tableIns = t), a(n, e);
                }),
                (t.prototype.config = {
                    tree: {
                        customName: { children: "children", isParent: "isParent", name: "name", id: "id", pid: "parentId", icon: "icon" },
                        view: {
                            indent: 14,
                            flexIconClose: '<i class="layui-icon layui-icon-triangle-r"></i>',
                            flexIconOpen: '<i class="layui-icon layui-icon-triangle-d"></i>',
                            showIcon: !0,
                            icon: "",
                            iconClose: '<i class="layui-icon layui-icon-folder"></i>',
                            iconOpen: '<i class="layui-icon layui-icon-folder-open"></i>',
                            iconLeaf: '<i class="layui-icon layui-icon-leaf"></i>',
                            showFlexIconIfNotParent: !1,
                            dblClickExpand: !0,
                        },
                        data: { isSimpleData: !1, rootPid: null },
                        async: { enable: !1, url: "", type: null, contentType: null, headers: null, where: null, autoParam: [] },
                        callback: { beforeExpand: null, onExpand: null },
                    },
                }),
                (t.prototype.getOptions = function () {
                    return this.tableIns ? O.getOptions(this.tableIns.config.id) : this.config;
                }),
                (t.prototype.flatToTree = function (e) {
                    var n,
                        i,
                        a,
                        t,
                        o,
                        r,
                        l,
                        s = (d = this.getOptions()).tree,
                        c = s.customName,
                        d = d.id;
                    return (
                        (d = e = e || O.cache[d]),
                        (n = c.id),
                        (i = c.pid),
                        (a = c.children),
                        (t = s.data.rootPid),
                        (n = n || "id"),
                        (i = i || "parentId"),
                        (a = a || "children"),
                        (l = {}),
                        layui.each(d, function (e, t) {
                            (o = n + t[n]), (l[o] = F.extend({}, t)), (l[o][a] = []);
                        }),
                        layui.each(l, function (e, t) {
                            (r = n + t[i]) && l[r] && l[r][a].push(t);
                        }),
                        Object.values(l).filter(function (e) {
                            return t ? e[i] === t : !e[i];
                        })
                    );
                }),
                (t.prototype.treeToFlat = function (e, i, a) {
                    var o = this,
                        r = o.getOptions().tree.customName,
                        l = r.children,
                        s = r.pid,
                        c = [];
                    return (
                        layui.each(e, function (e, t) {
                            var e = (a ? a + "-" : "") + e,
                                n = F.extend({}, t);
                            (n[l] = null), (n[s] = t[s] || i), c.push(n), (c = c.concat(o.treeToFlat(t[l], t[r.id], e)));
                        }),
                        c
                    );
                }),
                (t.prototype.getTreeNode = function (e) {
                    var t = this;
                    if (!e) return u.error("Không thể tìm thấy dữ liệu");
                    var n = t.getOptions(),
                        i = n.tree;
                    return (
                        n.id,
                        i.customName,
                        {
                            data: e,
                            dataIndex: e[z],
                            getParentNode: function () {
                                return t.getNodeByIndex(e[d]);
                            },
                        }
                    );
                }),
                (t.prototype.getNodeByIndex = function (t) {
                    var e = this,
                        n = e.getNodeDataByIndex(t);
                    if (!n) return u.error("Không thể tìm thấy dữ liệu");
                    var i = e.getOptions(),
                        a = (i.tree.customName.parent, i.id);
                    return (
                        ((i = {
                            data: n,
                            dataIndex: n[z],
                            getParentNode: function () {
                                return e.getNodeByIndex(n[d]);
                            },
                            update: function (e) {
                                return P.updateNode(a, t, e);
                            },
                            remove: function () {
                                return P.removeNode(a, t);
                            },
                            expand: function (e) {
                                return P.expandNode(a, F.extend({}, e, { index: t }));
                            },
                            setChecked: function (e) {
                                return P.setRowChecked(a, F.extend({}, e, { index: t }));
                            },
                        }).dataIndex = t),
                        i
                    );
                }),
                (t.prototype.getNodeById = function (n) {
                    var i = (e = this.getOptions()).tree.customName.id,
                        a = "",
                        e = P.getData(e.id, !0);
                    if (
                        (layui.each(e, function (e, t) {
                            if (t[i] === n) return (a = t[z]), !0;
                        }),
                        a)
                    )
                        return this.getNodeByIndex(a);
                }),
                (t.prototype.getNodeDataByIndex = function (n, e, t) {
                    var i = this.getOptions(),
                        a = i.tree,
                        o = i.id,
                        r = O.cache[o][n];
                    if ("delete" !== t && r) return F.extend(r, t), e ? F.extend({}, r) : r;
                    for (var r = this.getTableData(), l = (n += "").split("-"), s = r, c = i.url || 1 < l.length ? null : O.cache[o], d = 0, u = a.customName.children; d < l.length; d++) {
                        if (t && d === l.length - 1) {
                            if ("delete" === t)
                                return (
                                    c &&
                                        layui.each(c, function (e, t) {
                                            if (t[z] === n) return c.splice(e, 1), !0;
                                        }),
                                    (d ? s[u] : s).splice(l[d], 1)[0]
                                );
                            F.extend((d ? s[u] : s)[l[d]], t);
                        }
                        s = (d ? s[u] : s)[l[d]];
                    }
                    return e ? F.extend({}, s) : s;
                }),
                (P.getNodeDataByIndex = function (e, t) {
                    if ((e = M(e))) return e.getNodeDataByIndex(t, !0);
                }),
                (t.prototype.initData = function (e, n) {
                    var i = this,
                        t = (a = i.getOptions()).tree,
                        a = a.id;
                    e = e || i.getTableData();
                    var o = (t = t.customName).isParent,
                        r = t.children;
                    return (
                        layui.each(e, function (e, t) {
                            o in t || (t[o] = !(!t[r] || !t[r].length)), (t[y] = t[z]), (t[d] = n = n || ""), (e = t[z] = (n ? n + "-" : "") + e), i.initData(t[r] || [], e);
                        }),
                        f(a, r, e),
                        e
                    );
                }),
                {}),
            x =
                ((P.expandNode = function (e, t) {
                    var n, i, a;
                    if ((e = M(e)))
                        return (n = (t = t || {}).index), (i = t.expandFlag), (a = t.inherit), (t = t.callbackFlag), (e = e.getOptions().elem.next()), H({ trElem: e.find('tr[lay-data-index="' + n + '"]').first() }, i, a, null, t);
                }),
                (P.expandAll = function (n, e) {
                    if ("boolean" !== layui.type(e)) return u.error("Tham số trạng thái mở rộng của expandAll chỉ chấp nhận true/false");
                    var t = M(n);
                    if (t) {
                        var i = (c = t.getOptions()).tree,
                            a = c.elem.next(),
                            o = i.customName.isParent;
                        if (e) {
                            if (((e = P.getData(n, !0)), i.async.enable)) {
                                var r = !0;
                                if (
                                    (layui.each(e, function (e, t) {
                                        if (t[o] && !t[V]) return !(r = !1);
                                    }),
                                    !r)
                                )
                                    return void layui.each(P.getData(n), function (e, t) {
                                        P.expandNode(n, { index: t[z], expandFlag: !0, inherit: !0 });
                                    });
                            }
                            var l = !0;
                            if (
                                (layui.each(e, function (e, t) {
                                    if (!t[Y]) return !(l = !1);
                                }),
                                l)
                            )
                                t.updateStatus(null, function (e) {
                                    e[o] && (e[$] = !0);
                                }),
                                    a.find('tbody tr[data-level!="0"]').removeClass(q),
                                    a.find(".layui-table-tree-flexIcon").html(i.view.flexIconOpen),
                                    i.view.showIcon && a.find(".layui-table-tree-nodeIcon:not(.layui-table-tree-iconCustom,.layui-table-tree-iconLeaf)").html(i.view.iconOpen);
                            else {
                                if (
                                    (t.updateStatus(null, function (e) {
                                        e[o] && ((e[$] = !0), (e[Y] = !0));
                                    }),
                                    c.initSort && c.initSort.type && (!c.url || c.autoSort))
                                )
                                    return P.sort(n);
                                var s,
                                    c = O.getTrHtml(n, e),
                                    d = { trs: F(c.trs.join("")), trs_fixed: F(c.trs_fixed.join("")), trs_fixed_r: F(c.trs_fixed_r.join("")) };
                                layui.each(e, function (e, t) {
                                    var n = t[z].split("-").length - 1;
                                    (s = { "data-index": t[z], "lay-data-index": t[z], "data-level": n }), d.trs.eq(e).attr(s), d.trs_fixed.eq(e).attr(s), d.trs_fixed_r.eq(e).attr(s);
                                }),
                                    layui.each(["main", "fixed-l", "fixed-r"], function (e, t) {
                                        a.find(".layui-table-" + t + " tbody").html(d[["trs", "trs_fixed", "trs_fixed_r"][e]]);
                                    }),
                                    t.renderTreeTable(a, 0, !1);
                            }
                        } else
                            t.updateStatus(null, function (e) {
                                e[o] && (e[$] = !1);
                            }),
                                a.find('.layui-table-box tbody tr[data-level!="0"]').addClass(q),
                                a.find(".layui-table-tree-flexIcon").html(i.view.flexIconClose),
                                i.view.showIcon && a.find(".layui-table-tree-nodeIcon:not(.layui-table-tree-iconCustom,.layui-table-tree-iconLeaf)").html(i.view.iconClose);
                        P.resize(n);
                    }
                }),
                (t.prototype.renderTreeTable = function (e, t, n) {
                    var i = this,
                        a = i.getOptions(),
                        o = a.elem.next(),
                        r = (o.hasClass(g) || o.addClass(g), a.id),
                        l = a.tree || {},
                        s = (l.data, l.view || {}),
                        c = l.customName || {},
                        d = c.isParent,
                        u = o.attr("lay-filter"),
                        f = i,
                        p =
                            ((t = t || 0) ||
                                (o.find(".layui-table-body tr:not([data-level])").attr("data-level", t),
                                layui.each(O.cache[r], function (e, t) {
                                    o.find('.layui-table-main tbody tr[data-level="0"]:eq(' + e + ")").attr("lay-data-index", t[z]),
                                        o.find('.layui-table-fixed-l tbody tr[data-level="0"]:eq(' + e + ")").attr("lay-data-index", t[z]),
                                        o.find('.layui-table-fixed-r tbody tr[data-level="0"]:eq(' + e + ")").attr("lay-data-index", t[z]);
                                })),
                            null),
                        h = c.name,
                        y = s.indent || 14;
                    layui.each(e.find('td[data-field="' + h + '"]'), function (e, t) {
                        var n,
                            i,
                            a = (t = F(t)).closest("tr");
                        (t = t.children(".layui-table-cell")).hasClass("layui-table-tree-item") ||
                            ((i = a.attr("lay-data-index")) &&
                                ((a = o.find('tr[lay-data-index="' + i + '"]')),
                                (n = f.getNodeDataByIndex(i))[$] && ((p = p || {})[i] = !0),
                                n[v] && a.find('input[type="checkbox"][name="layTableCheckbox"]').prop("indeterminate", !0),
                                (i = t.html()),
                                (t = a.find('td[data-field="' + h + '"]>div.layui-table-cell')).addClass("layui-table-tree-item"),
                                t
                                    .html(
                                        [
                                            '<div class="layui-inline layui-table-tree-flexIcon" ',
                                            'style="',
                                            "margin-left: " + y * a.attr("data-level") + "px;",
                                            n[d] || s.showFlexIconIfNotParent ? "" : " visibility: hidden;",
                                            '">',
                                            n[$] ? s.flexIconOpen : s.flexIconClose,
                                            "</div>",
                                            s.showIcon
                                                ? '<div class="layui-inline layui-table-tree-nodeIcon' +
                                                  (n[c.icon] || s.icon ? " layui-table-tree-iconCustom" : "") +
                                                  (n[d] ? "" : " layui-table-tree-iconLeaf") +
                                                  '">' +
                                                  (n[c.icon] || s.icon || (n[d] ? (n[$] ? s.iconOpen : s.iconClose) : s.iconLeaf) || "") +
                                                  "</div>"
                                                : "",
                                            i,
                                        ].join("")
                                    )
                                    .find(".layui-table-tree-flexIcon")
                                    .on("click", function (e) {
                                        layui.stope(e), H({ trElem: a }, null, null, null, !0);
                                    })));
                    }),
                        !1 !== n && p
                            ? layui.each(p, function (e, t) {
                                  (e = o.find('tr[lay-data-index="' + e + '"]')).find(".layui-table-tree-flexIcon").html(s.flexIconOpen), H({ trElem: e.first() }, !0);
                              })
                            : _(
                                  "renderTreeTable-" + r,
                                  function () {
                                      a.hasNumberCol && x(i), m.render(null, u);
                                  },
                                  0
                              )();
                }),
                function (n) {
                    var e = n.getOptions(),
                        t = e.elem.next(),
                        i = 0,
                        a = t.find(".layui-table-main tbody tr"),
                        o = t.find(".layui-table-fixed-l tbody tr"),
                        r = t.find(".layui-table-fixed-r tbody tr");
                    layui.each(n.treeToFlat(O.cache[e.id]), function (e, t) {
                        (n.getNodeDataByIndex(t[z]).LAY_NUM = ++i), a.eq(e).find(".laytable-cell-numbers").html(i), o.eq(e).find(".laytable-cell-numbers").html(i), r.eq(e).find(".laytable-cell-numbers").html(i);
                    });
                }),
            p =
                ((t.prototype.render = function (e) {
                    (this.tableIns = O["reloadData" === e ? "reloadData" : "reload"](this.tableIns.config.id, F.extend(!0, {}, this.config))), (this.config = this.tableIns.config);
                }),
                (t.prototype.reload = function (e, t, n) {
                    var i = this;
                    (e = e || {}),
                        delete i.haveInit,
                        layui.each(e, function (e, t) {
                            "array" === layui.type(t) && delete i.config[e];
                        }),
                        a(i.config.id, e, n || !0),
                        (i.config = F.extend(t, {}, i.config, e)),
                        i.render(n);
                }),
                (P.reloadData = function () {
                    var e = F.extend(!0, [], arguments);
                    return (e[3] = "reloadData"), P.reload.apply(null, e);
                }),
                function (e, n, i) {
                    var a = [];
                    return (
                        layui.each(e, function (e, t) {
                            "function" === layui.type(n) ? n(t) : F.extend(t, n), a.push(F.extend({}, t)), (a = a.concat(p(t[i], n, i)));
                        }),
                        a
                    );
                }),
            s =
                ((t.prototype.updateStatus = function (e, t) {
                    var n = this.getOptions(),
                        i = n.tree;
                    return (e = e || O.cache[n.id]), p(e, t, i.customName.children);
                }),
                (t.prototype.getTableData = function () {
                    var e = this.getOptions();
                    return e.url ? O.cache[e.id] : e.data;
                }),
                (P.updateStatus = function (e, t, n) {
                    var i = (e = M(e)).getOptions();
                    return (n = n || (i.url ? O.cache[i.id] : i.data)), e.updateStatus(n, t);
                }),
                (P.sort = function (e) {
                    var t,
                        n,
                        i,
                        a,
                        o = M(e);
                    o &&
                        ((n = (t = o.getOptions()).initSort),
                        t.url
                            ? t.autoSort && ((i = o.initData()), ((a = {})[t.response.dataName] = i), "function" == typeof t.done && t.done(a, o.page, o.count))
                            : (n.type ? layui.sort(t.data, n.field, "desc" === n.type, !0) : layui.sort(t.data, O.config.indexName, null, !0), o.initData(t.data), P.reloadData(e)));
                }),
                (P.updateNode = function (e, n, t) {
                    var i,
                        a,
                        o,
                        r,
                        l,
                        s = M(e);
                    s &&
                        ((r = s.getOptions()).tree,
                        (r = (i = r.elem.next()).find('tr[lay-data-index="' + n + '"]')),
                        (a = r.attr("data-index")),
                        (o = r.attr("data-level")),
                        t &&
                            ((r = s.getNodeDataByIndex(n, !1, t)),
                            (l = O.getTrHtml(e, [r])),
                            layui.each(["main", "fixed-l", "fixed-r"], function (e, t) {
                                i.find(".layui-table-" + t + ' tbody tr[lay-data-index="' + n + '"]').replaceWith(F(l[["trs", "trs_fixed", "trs_fixed_r"][e]].join("")).attr({ "data-index": a, "lay-data-index": n, "data-level": o }));
                            }),
                            s.renderTreeTable(i.find('tr[lay-data-index="' + n + '"]'), o)));
                }),
                (P.removeNode = function (e, t) {
                    var n,
                        i,
                        a,
                        o,
                        r,
                        l = M(e);
                    l &&
                        ((r = (n = l.getOptions()).tree),
                        (i = n.elem.next()),
                        (a = []),
                        (t = l.getNodeDataByIndex("string" === layui.type(t) ? t : t[z], !1, "delete")),
                        (o = l.getNodeDataByIndex(t[d])),
                        l.updateCheckStatus(o),
                        (o = l.treeToFlat([t], t[r.customName.pid], t[d])),
                        layui.each(o, function (e, t) {
                            a.push('tr[lay-data-index="' + t[z] + '"]');
                        }),
                        i.find(a.join(",")).remove(),
                        (r = l.initData()),
                        layui.each(l.treeToFlat(r), function (e, t) {
                            t[y] && t[y] !== t[z] && i.find('tr[lay-data-index="' + t[y] + '"]').attr({ "data-index": t[z], "lay-data-index": t[z] });
                        }),
                        layui.each(O.cache[e], function (e, t) {
                            i.find('tr[data-level="0"][lay-data-index="' + t[z] + '"]').attr("data-index", e);
                        }),
                        n.hasNumberCol && x(l));
                }),
                (P.addNodes = function (e, t) {
                    var n,
                        i,
                        a,
                        o,
                        r,
                        l,
                        s,
                        c,
                        d,
                        u,
                        f,
                        p,
                        h = M(e);
                    if (h)
                        return (
                            (f = (u = h.getOptions()).tree),
                            (n = u.elem.next()),
                            (p = (t = t || {}).parentIndex),
                            (a = t.index),
                            (o = t.data),
                            (t = t.focus),
                            (i = (p = "number" === layui.type(p) ? p.toString() : p) ? h.getNodeDataByIndex(p) : null),
                            (a = "number" === layui.type(a) ? a : -1),
                            (o = F.extend(!0, [], layui.isArray(o) ? o : [o])),
                            h.getTableData(),
                            i
                                ? ((r = f.customName.isParent),
                                  (f = f.customName.children),
                                  (i[r] = !0),
                                  (d = (d = i[f]) ? ((l = d.splice(-1 === a ? d.length : a)), (i[f] = d.concat(o, l))) : (i[f] = o)),
                                  h.updateStatus(d, function (e) {
                                      e[r] && (e[Y] = !1);
                                  }),
                                  (f = h.treeToFlat(d)),
                                  n
                                      .find(
                                          f
                                              .map(function (e) {
                                                  return 'tr[lay-data-index="' + e[z] + '"]';
                                              })
                                              .join(",")
                                      )
                                      .remove(),
                                  h.initData(),
                                  (i[Y] = !1),
                                  (i[V] = "local"),
                                  H({ trElem: n.find('tr[lay-data-index="' + p + '"]') }, !0))
                                : ((l = O.cache[e].splice(-1 === a ? O.cache[e].length : a)),
                                  (O.cache[e] = O.cache[e].concat(o, l)),
                                  u.url || (u.page ? ((d = u.page), u.data.splice.apply(u.data, [d.limit * (d.curr - 1), d.limit].concat(O.cache[e]))) : (u.data = O.cache[e])),
                                  h.initData(),
                                  (f = O.getTrHtml(e, o)),
                                  (s = { trs: F(f.trs.join("")), trs_fixed: F(f.trs_fixed.join("")), trs_fixed_r: F(f.trs_fixed_r.join("")) }),
                                  layui.each(o, function (e, t) {
                                      (c = { "data-index": t[z], "lay-data-index": t[z], "data-level": "0" }), s.trs.eq(e).attr(c), s.trs_fixed.eq(e).attr(c), s.trs_fixed_r.eq(e).attr(c);
                                  }),
                                  (p = parseInt(o[0][z]) - 1),
                                  (d = n.find(B)),
                                  (u = n.find(R)),
                                  (f = n.find(W)),
                                  -1 == p
                                      ? (d.find('tr[data-level="0"][data-index="0"]').before(s.trs), u.find('tr[data-level="0"][data-index="0"]').before(s.trs_fixed), f.find('tr[data-level="0"][data-index="0"]').before(s.trs_fixed_r))
                                      : -1 === a
                                      ? (d.find("tbody").append(s.trs), u.find("tbody").append(s.trs_fixed), f.find("tbody").append(s.trs_fixed_r))
                                      : ((p = l[0][y]),
                                        d.find('tr[data-level="0"][data-index="' + p + '"]').before(s.trs),
                                        u.find('tr[data-level="0"][data-index="' + p + '"]').before(s.trs_fixed),
                                        f.find('tr[data-level="0"][data-index="' + p + '"]').before(s.trs_fixed_r)),
                                  layui.each(O.cache[e], function (e, t) {
                                      n.find('tr[data-level="0"][lay-data-index="' + t[z] + '"]').attr("data-index", e);
                                  }),
                                  h.renderTreeTable(
                                      n.find(
                                          o
                                              .map(function (e, t, n) {
                                                  return 'tr[lay-data-index="' + e[z] + '"]';
                                              })
                                              .join(",")
                                      )
                                  )),
                            h.updateCheckStatus(i),
                            P.resize(e),
                            t &&
                                n
                                    .find(B)
                                    .find('tr[lay-data-index="' + o[0][z] + '"]')
                                    .get(0)
                                    .scrollIntoViewIfNeeded(),
                            o
                        );
                }),
                (P.checkStatus = function (e, i) {
                    var a, t, n;
                    if (M(e))
                        return (
                            (a = O.config.checkName),
                            (t = P.getData(e, !0).filter(function (e, t, n) {
                                return e[a] || (i && e[v]);
                            })),
                            (n = !0),
                            layui.each(O.cache[e], function (e, t) {
                                if (!t[a]) return !(n = !1);
                            }),
                            { data: t, isAll: n }
                        );
                }),
                P.on("sort", function (e) {
                    var t = (e = e.config).elem.next(),
                        e = e.id;
                    t.hasClass(g) && P.sort(e);
                }),
                P.on("row", function (e) {
                    e.config.elem.next().hasClass(g) && i(e);
                }),
                P.on("rowDouble", function (e) {
                    var t = e.config,
                        n = t.elem.next();
                    t.id, n.hasClass(g) && (i(e), (t.tree || {}).view.dblClickExpand && H({ trElem: e.tr.first() }, null, null, null, !0));
                }),
                P.on("rowContextmenu", function (e) {
                    var t = e.config,
                        n = t.elem.next();
                    t.id, n.hasClass(g) && i(e);
                }),
                P.on("tool", function (e) {
                    var t = e.config,
                        n = t.elem.next();
                    t.id, n.hasClass(g) && i(e);
                }),
                P.on("edit", function (e) {
                    var t = e.config,
                        n = t.elem.next();
                    t.id, n.hasClass(g) && (i(e), e.field === t.tree.customName.name && (((n = {})[e.field] = e.value), e.update(n)));
                }),
                P.on("radio", function (e) {
                    var t = (n = e.config).elem.next(),
                        n = n.id;
                    t.hasClass(g) && ((t = M(n)), i(e), s.call(t, e.tr, e.checked));
                }),
                (t.prototype.updateCheckStatus = function (e, t) {
                    var n = this.getOptions(),
                        i = (n.tree, n.id),
                        a = n.elem.next(),
                        o = O.config.checkName,
                        r =
                            (e &&
                                ((n = this.updateParentCheckStatus(e, "boolean" === layui.type(t) ? t : null)),
                                layui.each(n, function (e, t) {
                                    m.render(a.find('tr[lay-data-index="' + t[z] + '"]  input[name="layTableCheckbox"]:not(:disabled)').prop({ checked: t[o], indeterminate: t[v] }));
                                })),
                            !0),
                        l = !1;
                    return (
                        layui.each(O.cache[i], function (e, t) {
                            (t[o] || t[v]) && (l = !0), t[o] || (r = !1);
                        }),
                        (l = l && !r),
                        m.render(a.find('input[name="layTableCheckbox"][lay-filter="layTableAllChoose"]').prop({ checked: r, indeterminate: l })),
                        r
                    );
                }),
                (t.prototype.updateParentCheckStatus = function (n, i) {
                    var a,
                        e = (t = this.getOptions()).tree,
                        t = t.id,
                        o = O.config.checkName,
                        e = e.customName.children,
                        r = [];
                    return (
                        !(n[v] = !1) === i
                            ? n[e].length
                                ? layui.each(n[e], function (e, t) {
                                      if (!t[o]) return (i = !1), (n[v] = !0);
                                  })
                                : (i = !1)
                            : !1 === i
                            ? layui.each(n[e], function (e, t) {
                                  if (t[o] || t[v]) return (n[v] = !0);
                              })
                            : ((i = !1),
                              (a = 0),
                              layui.each(n[e], function (e, t) {
                                  t[o] && a++;
                              }),
                              (i = n[e].length ? n[e].length === a : n[o]),
                              (n[v] = !i && 0 < a)),
                        (n[o] = i),
                        r.push(F.extend({}, n)),
                        n[d] ? r.concat(this.updateParentCheckStatus(O.cache[t][n[d]], i)) : r
                    );
                }),
                function (e, t, n) {
                    var i = this.getOptions(),
                        a = i.id,
                        o = i.elem.next(),
                        r = (e.length ? e : o).find(".laytable-cell-radio, .laytable-cell-checkbox").children("input").last(),
                        l = "radio" === r.attr("type");
                    if (n)
                        (n = function () {
                            function e(e) {
                                layui.stope(e);
                            }
                            r.parent().on("click", e), r.next().click(), r.parent().off("click", e);
                        }),
                            l ? t && !r.prop("checked") && n() : ("boolean" === layui.type(t) && r.prop("checked") === t) || n();
                    else {
                        var s,
                            n = this.getNodeDataByIndex(e.attr("data-index")),
                            c = O.config.checkName;
                        if (!l)
                            return (
                                i.tree.customName.isParent,
                                (t = "boolean" === layui.type(t) ? t : !n[c]),
                                (l = this.updateStatus(n ? [n] : O.cache[a], function (e) {
                                    e[O.config.disabledName] || ((e[c] = t), (e[v] = !1));
                                })),
                                m.render(
                                    o
                                        .find(
                                            l
                                                .map(function (e) {
                                                    return 'tr[lay-data-index="' + e[z] + '"] input[name="layTableCheckbox"]:not(:disabled)';
                                                })
                                                .join(",")
                                        )
                                        .prop({ checked: t, indeterminate: !1 })
                                ),
                                n && n[d] && (s = this.getNodeDataByIndex(n[d])),
                                this.updateCheckStatus(s, t)
                            );
                        n &&
                            (this.updateStatus(null, function (e) {
                                e[c] && ((e[c] = !1), m.render(o.find('tr[lay-data-index="' + e[z] + '"] input[type="radio"][lay-type="layTableRadio"]').prop("checked", !1)));
                            }),
                            (n[c] = t),
                            m.render(e.find('input[type="radio"][lay-type="layTableRadio"]').prop("checked", t)));
                    }
                });
        P.on("checkbox", function (e) {
            var t = (n = e.config).elem.next(),
                n = n.id;
            t.hasClass(g) && ((t = M(n)), (n = e.checked), i(e), (e.isAll = s.call(t, e.tr, n)));
        }),
            (P.setRowChecked = function (e, t) {
                var n,
                    i,
                    a,
                    o,
                    r,
                    l = M(e);
                l &&
                    ((n = l.getOptions().elem.next()),
                    (a = (t = t || {}).index),
                    (i = t.checked),
                    (t = t.callbackFlag),
                    (a = "string" === layui.type(a) ? a : a[z]),
                    (o = l.getNodeDataByIndex(a)) && ((r = n.find('tr[lay-data-index="' + a + '"]')).length || (P.expandNode(e, { index: o[d], expandFlag: !0 }), (r = n.find('tr[lay-data-index="' + a + '"]'))), s.call(l, r, i, t)));
            }),
            (P.checkAllNodes = function (e, t) {
                var n;
                (e = M(e)) && ((n = e.getOptions().elem.next()), s.call(e, n.find('tr[data-index="NONE"]'), !!t));
            }),
            (P.getData = function (e, t) {
                var n,
                    i = M(e);
                if (i)
                    return (
                        (n = []),
                        layui.each(F.extend(!0, [], O.cache[e] || []), function (e, t) {
                            n.push(t);
                        }),
                        t ? i.treeToFlat(n) : n
                    );
            }),
            (P.reAsync = function (n, e) {
                var t,
                    i,
                    a = M(n);
                a &&
                    (t = a.getOptions().tree).async &&
                    t.async.enable &&
                    (i = a.getNodeDataByIndex(e)) &&
                    ((i[Y] = !1),
                    (i[$] = !1),
                    (i[V] = !1),
                    layui.each(a.treeToFlat(i[t.customName.children]).reverse(), function (e, t) {
                        P.removeNode(n, t[z]);
                    }),
                    P.expandNode(n, { index: e, expandFlag: !0, callbackFlag: !0 }));
            }),
            (P.getNodeById = function (e, t) {
                if ((e = M(e))) return e.getNodeById(t);
            }),
            (P.getNodesByFilter = function (e, t, n) {
                var i,
                    a,
                    o,
                    r = M(e);
                if (r)
                    return (
                        (a = r.getOptions()),
                        (i = (n = n || {}).isSingle),
                        (n = (n = n.parentNode) && n.data),
                        (a = r.treeToFlat(n ? n[a.tree.customName.children] || [] : O.cache[e]).filter(t)),
                        (o = []),
                        layui.each(a, function (e, t) {
                            if ((o.push(r.getNodeByIndex(t[z])), i)) return !0;
                        }),
                        o
                    );
            }),
            (r.that = {}),
            (P.reload = function (e, t, n, i) {
                if (((n = !1 !== n), M(e).config)) return (e = M(e)).reload(t, n, i), r.call(e);
            }),
            (P.render = function (e) {
                return (e = new t(e)), r.call(e);
            }),
            e("treeTable", P);
    }),
    layui.define("form", function (e) {
        "use strict";
        function i() {
            var t = this,
                e = t.config,
                n = e.id || t.index;
            return (
                (i.that[n] = t),
                {
                    config: (i.config[n] = e),
                    reload: function (e) {
                        t.reload.call(t, e);
                    },
                    getChecked: function () {
                        return t.getChecked.call(t);
                    },
                    setChecked: function (e) {
                        return t.setChecked.call(t, e);
                    },
                }
            );
        }
        function t(e) {
            (this.index = ++o.index), (this.config = f.extend({}, this.config, o.config, e)), this.render();
        }
        var f = layui.$,
            n = layui.form,
            p = layui.layer,
            a = "tree",
            o = {
                config: {},
                index: layui.tree ? layui.tree.index + 1e4 : 0,
                set: function (e) {
                    return (this.config = f.extend({}, this.config, e)), this;
                },
                on: function (e, t) {
                    return layui.onevent.call(this, a, e, t);
                },
            },
            h = "layui-hide",
            s = "layui-disabled",
            y = "layui-tree-set",
            m = "layui-tree-iconClick",
            g = "layui-icon-addition",
            v = "layui-icon-subtraction",
            x = "layui-tree-entry",
            b = "layui-tree-main",
            k = "layui-tree-txt",
            w = "layui-tree-pack",
            C = "layui-tree-spread",
            T = "layui-tree-setLineShort",
            E = "layui-tree-showLine",
            D = "layui-tree-lineExtend";
        (t.prototype.config = { data: [], showCheckbox: !1, showLine: !0, accordion: !1, onlyIconControl: !1, isJump: !1, edit: !1, text: { defaultNodeName: "Chưa đặt tên", none: "Không có dữ liệu" } }),
            (t.prototype.reload = function (e) {
                var n = this;
                layui.each(e, function (e, t) {
                    "array" === layui.type(t) && delete n.config[e];
                }),
                    (n.config = f.extend(!0, {}, n.config, e)),
                    n.render();
            }),
            (t.prototype.render = function () {
                var e = this,
                    t = e.config,
                    n = ((e.checkids = []), f('<div class="layui-tree' + (t.showCheckbox ? " layui-form" : "") + (t.showLine ? " layui-tree-line" : "") + '" lay-filter="LAY-tree-' + e.index + '"></div>')),
                    i = (e.tree(n), (t.elem = f(t.elem)));
                if (i[0]) {
                    if (((e.key = t.id || e.index), (e.elem = n), (e.elemNone = f('<div class="layui-tree-emptyText">' + t.text.none + "</div>")), i.html(e.elem), 0 == e.elem.find(".layui-tree-set").length))
                        return e.elem.append(e.elemNone);
                    t.showCheckbox && e.renderForm("checkbox"),
                        e.elem.find(".layui-tree-set").each(function () {
                            var e = f(this);
                            e.parent(".layui-tree-pack")[0] || e.addClass("layui-tree-setHide"),
                                !e.next()[0] && e.parents(".layui-tree-pack").eq(1).hasClass("layui-tree-lineExtend") && e.addClass(T),
                                e.next()[0] || e.parents(".layui-tree-set").eq(0).next()[0] || e.addClass(T);
                        }),
                        e.events();
                }
            }),
            (t.prototype.renderForm = function (e) {
                n.render(e, "LAY-tree-" + this.index);
            }),
            (t.prototype.tree = function (o, e) {
                var r = this,
                    l = r.config,
                    e = e || l.data;
                layui.each(e, function (e, t) {
                    var n = t.children && 0 < t.children.length,
                        i = f('<div class="layui-tree-pack" ' + (t.spread ? 'style="display: block;"' : "") + "></div>"),
                        a = f(
                            [
                                '<div data-id="' + t.id + '" class="layui-tree-set' + (t.spread ? " layui-tree-spread" : "") + (t.checked ? " layui-tree-checkedFirst" : "") + '">',
                                '<div class="layui-tree-entry">',
                                '<div class="layui-tree-main">',
                                l.showLine
                                    ? n
                                        ? '<span class="layui-tree-iconClick layui-tree-icon"><i class="layui-icon ' + (t.spread ? "layui-icon-subtraction" : "layui-icon-addition") + '"></i></span>'
                                        : '<span class="layui-tree-iconClick"><i class="layui-icon layui-icon-file"></i></span>'
                                    : '<span class="layui-tree-iconClick"><i class="layui-tree-iconArrow ' + (n ? "" : h) + '"></i></span>',
                                l.showCheckbox ? '<input type="checkbox" name="' + (t.field || "layuiTreeCheck_" + t.id) + '" same="layuiTreeCheck" lay-skin="primary" ' + (t.disabled ? "disabled" : "") + ' value="' + t.id + '">' : "",
                                l.isJump && t.href
                                    ? '<a href="' + t.href + '" target="_blank" class="' + k + '">' + (t.title || t.label || l.text.defaultNodeName) + "</a>"
                                    : '<span class="' + k + (t.disabled ? " " + s : "") + '">' + (t.title || t.label || l.text.defaultNodeName) + "</span>",
                                "</div>",
                                (function () {
                                    if (!l.edit) return "";
                                    var n = {
                                            add: '<i class="layui-icon layui-icon-add-1"  data-type="add"></i>',
                                            update: '<i class="layui-icon layui-icon-edit" data-type="update"></i>',
                                            del: '<i class="layui-icon layui-icon-delete" data-type="del"></i>',
                                        },
                                        i = ['<div class="layui-btn-group layui-tree-btnGroup">'];
                                    return (
                                        !0 === l.edit && (l.edit = ["update", "del"]),
                                        "object" == typeof l.edit
                                            ? (layui.each(l.edit, function (e, t) {
                                                  i.push(n[t] || "");
                                              }),
                                              i.join("") + "</div>")
                                            : void 0
                                    );
                                })(),
                                "</div></div>",
                            ].join("")
                        );
                    n && (a.append(i), r.tree(i, t.children)),
                        o.append(a),
                        a.prev("." + y)[0] && a.prev().children(".layui-tree-pack").addClass("layui-tree-showLine"),
                        n || a.parent(".layui-tree-pack").addClass("layui-tree-lineExtend"),
                        r.spread(a, t),
                        l.showCheckbox && (t.checked && r.checkids.push(t.id), r.checkClick(a, t)),
                        l.edit && r.operate(a, t);
                });
            }),
            (t.prototype.spread = function (i, e) {
                var a = this.config,
                    t = (o = i.children("." + x)).children("." + b),
                    n = o.find("." + m),
                    o = o.find("." + k),
                    r = a.onlyIconControl ? n : t,
                    l = "";
                r.on("click", function (e) {
                    var t = i.children("." + w),
                        n = (r.children(".layui-icon")[0] ? r : r.find(".layui-tree-icon")).children(".layui-icon");
                    t[0]
                        ? i.hasClass(C)
                            ? (i.removeClass(C), t.slideUp(200), n.removeClass(v).addClass(g))
                            : (i.addClass(C),
                              t.slideDown(200),
                              n.addClass(v).removeClass(g),
                              a.accordion && ((t = i.siblings("." + y)).removeClass(C), t.children("." + w).slideUp(200), t.find(".layui-tree-icon").children(".layui-icon").removeClass(v).addClass(g)))
                        : (l = "normal");
                }),
                    o.on("click", function () {
                        f(this).hasClass(s) || ((l = i.hasClass(C) ? (a.onlyIconControl ? "open" : "close") : a.onlyIconControl ? "close" : "open"), a.click && a.click({ elem: i, state: l, data: e }));
                    });
            }),
            (t.prototype.setCheckbox = function (e, t, n) {
                this.config;
                var a,
                    o = n.prop("checked");
                n.prop("disabled") ||
                    (("object" != typeof t.children && !e.find("." + w)[0]) ||
                        e
                            .find("." + w)
                            .find('input[same="layuiTreeCheck"]')
                            .each(function () {
                                this.disabled || (this.checked = o);
                            }),
                    (a = function (e) {
                        var t, n, i;
                        e.parents("." + y)[0] &&
                            ((n = (e = e.parent("." + w)).parent()),
                            (i = e.prev().find('input[same="layuiTreeCheck"]')),
                            o
                                ? i.prop("checked", o)
                                : (e.find('input[same="layuiTreeCheck"]').each(function () {
                                      this.checked && (t = !0);
                                  }),
                                  t || i.prop("checked", !1)),
                            a(n));
                    })(e),
                    this.renderForm("checkbox"));
            }),
            (t.prototype.checkClick = function (n, i) {
                var a = this,
                    o = a.config;
                n.children("." + x)
                    .children("." + b)
                    .on("click", 'input[same="layuiTreeCheck"]+', function (e) {
                        layui.stope(e);
                        var t = (e = f(this).prev()).prop("checked");
                        e.prop("disabled") || (a.setCheckbox(n, i, e), o.oncheck && o.oncheck({ elem: n, checked: t, data: i }));
                    });
            }),
            (t.prototype.operate = function (s, o) {
                var c = this,
                    d = c.config,
                    e = s.children("." + x),
                    u = e.children("." + b);
                e.children(".layui-tree-btnGroup").on("click", ".layui-icon", function (e) {
                    layui.stope(e);
                    var t,
                        n,
                        i,
                        a,
                        e = f(this).data("type"),
                        r = s.children("." + w),
                        l = { data: o, type: e, elem: s };
                    "add" == e
                        ? (r[0] ||
                              (d.showLine
                                  ? (u.find("." + m).addClass("layui-tree-icon"),
                                    u
                                        .find("." + m)
                                        .children(".layui-icon")
                                        .addClass(g)
                                        .removeClass("layui-icon-file"))
                                  : u.find(".layui-tree-iconArrow").removeClass(h),
                              s.append('<div class="layui-tree-pack"></div>')),
                          (i = d.operate && d.operate(l)),
                          ((a = {}).title = d.text.defaultNodeName),
                          (a.id = i),
                          c.tree(s.children("." + w), [a]),
                          d.showLine &&
                              (r[0]
                                  ? (r.hasClass(D) || r.addClass(D),
                                    s.find("." + w).each(function () {
                                        f(this)
                                            .children("." + y)
                                            .last()
                                            .addClass(T);
                                    }),
                                    (r
                                        .children("." + y)
                                        .last()
                                        .prev()
                                        .hasClass(T)
                                        ? r
                                              .children("." + y)
                                              .last()
                                              .prev()
                                        : r.children("." + y).last()
                                    ).removeClass(T),
                                    !s.parent("." + w)[0] &&
                                        s.next()[0] &&
                                        r
                                            .children("." + y)
                                            .last()
                                            .removeClass(T))
                                  : ((i = s.siblings("." + y)),
                                    (n = 1),
                                    (a = s.parent("." + w)),
                                    layui.each(i, function (e, t) {
                                        f(t).children("." + w)[0] || (n = 0);
                                    }),
                                    1 == n
                                        ? (i.children("." + w).addClass(E),
                                          i
                                              .children("." + w)
                                              .children("." + y)
                                              .removeClass(T),
                                          s.children("." + w).addClass(E),
                                          a.removeClass(D),
                                          a
                                              .children("." + y)
                                              .last()
                                              .children("." + w)
                                              .children("." + y)
                                              .last()
                                              .addClass(T))
                                        : s
                                              .children("." + w)
                                              .children("." + y)
                                              .addClass(T))),
                          d.showCheckbox &&
                              (u.find('input[same="layuiTreeCheck"]')[0].checked &&
                                  (s
                                      .children("." + w)
                                      .children("." + y)
                                      .last()
                                      .find('input[same="layuiTreeCheck"]')[0].checked = !0),
                              c.renderForm("checkbox")))
                        : "update" == e
                        ? ((i = u.children("." + k).html()),
                          u.children("." + k).html(""),
                          u.append('<input type="text" class="layui-tree-editInput">'),
                          u.children(".layui-tree-editInput").val(i).focus(),
                          (t = function (e) {
                              var t = e.val().trim() || d.text.defaultNodeName;
                              e.remove(), u.children("." + k).html(t), (l.data.title = t), d.operate && d.operate(l);
                          }),
                          u.children(".layui-tree-editInput").blur(function () {
                              t(f(this));
                          }),
                          u.children(".layui-tree-editInput").on("keydown", function (e) {
                              13 === e.keyCode && (e.preventDefault(), t(f(this)));
                          }))
                        : p.confirm('Xác nhận xóa "<span style="color: #999;">' + (o.title || "") + '</span>" ?', function (e) {
                              if ((d.operate && d.operate(l), (l.status = "remove"), p.close(e), !s.prev("." + y)[0] && !s.next("." + y)[0] && !s.parent("." + w)[0])) return s.remove(), void c.elem.append(c.elemNone);
                              var o, n, t;
                              s.siblings("." + y).children("." + x)[0]
                                  ? (d.showCheckbox &&
                                        (o = function (e) {
                                            var t, n, i, a;
                                            e.parents("." + y)[0] &&
                                                ((t = e.siblings("." + y).children("." + x)),
                                                (n = (e = e.parent("." + w).prev()).find('input[same="layuiTreeCheck"]')[0]),
                                                (i = 1),
                                                (a = 0) == n.checked &&
                                                    (t.each(function (e, t) {
                                                        0 != (t = f(t).find('input[same="layuiTreeCheck"]')[0]).checked || t.disabled || (i = 0), t.disabled || (a = 1);
                                                    }),
                                                    1 == i && 1 == a && ((n.checked = !0), c.renderForm("checkbox"), o(e.parent("." + y)))));
                                        })(s),
                                    d.showLine &&
                                        ((e = s.siblings("." + y)),
                                        (n = 1),
                                        (t = s.parent("." + w)),
                                        layui.each(e, function (e, t) {
                                            f(t).children("." + w)[0] || (n = 0);
                                        }),
                                        1 == n
                                            ? (r[0] ||
                                                  (t.removeClass(D),
                                                  e.children("." + w).addClass(E),
                                                  e
                                                      .children("." + w)
                                                      .children("." + y)
                                                      .removeClass(T)),
                                              (s.next()[0] ? t.children("." + y).last() : s.prev())
                                                  .children("." + w)
                                                  .children("." + y)
                                                  .last()
                                                  .addClass(T),
                                              s.next()[0] ||
                                                  s.parents("." + y)[1] ||
                                                  s
                                                      .parents("." + y)
                                                      .eq(0)
                                                      .next()[0] ||
                                                  s.prev("." + y).addClass(T))
                                            : !s.next()[0] && s.hasClass(T) && s.prev().addClass(T)))
                                  : ((e = s.parent("." + w).prev()),
                                    d.showLine
                                        ? (e.find("." + m).removeClass("layui-tree-icon"),
                                          e
                                              .find("." + m)
                                              .children(".layui-icon")
                                              .removeClass(v)
                                              .addClass("layui-icon-file"),
                                          (t = e.parents("." + w).eq(0)).addClass(D),
                                          t.children("." + y).each(function () {
                                              f(this)
                                                  .children("." + w)
                                                  .children("." + y)
                                                  .last()
                                                  .addClass(T);
                                          }))
                                        : e.find(".layui-tree-iconArrow").addClass(h),
                                    s
                                        .parents("." + y)
                                        .eq(0)
                                        .removeClass(C),
                                    s.parent("." + w).remove()),
                                  s.remove();
                          });
                });
            }),
            (t.prototype.events = function () {
                var t = this,
                    a = t.config;
                t.elem.find(".layui-tree-checkedFirst"),
                    t.setChecked(t.checkids),
                    t.elem.find(".layui-tree-search").on("keyup", function () {
                        var n = (e = f(this)).val(),
                            e = e.nextAll(),
                            i = [];
                        e.find("." + k).each(function () {
                            var t,
                                e = f(this).parents("." + x);
                            -1 != f(this).html().indexOf(n) &&
                                (i.push(f(this).parent()),
                                (t = function (e) {
                                    e.addClass("layui-tree-searchShow"), e.parent("." + w)[0] && t(e.parent("." + w).parent("." + y));
                                })(e.parent("." + y)));
                        }),
                            e.find("." + x).each(function () {
                                var e = f(this).parent("." + y);
                                e.hasClass("layui-tree-searchShow") || e.addClass(h);
                            }),
                            0 == e.find(".layui-tree-searchShow").length && t.elem.append(t.elemNone),
                            a.onsearch && a.onsearch({ elem: i });
                    }),
                    t.elem.find(".layui-tree-search").on("keydown", function () {
                        f(this)
                            .nextAll()
                            .find("." + x)
                            .each(function () {
                                f(this)
                                    .parent("." + y)
                                    .removeClass("layui-tree-searchShow " + h);
                            }),
                            f(".layui-tree-emptyText")[0] && f(".layui-tree-emptyText").remove();
                    });
            }),
            (t.prototype.getChecked = function () {
                var e = this.config,
                    t = [],
                    n = [],
                    a =
                        (this.elem.find(".layui-form-checked").each(function () {
                            t.push(f(this).prev()[0].value);
                        }),
                        function (e, i) {
                            layui.each(e, function (e, n) {
                                layui.each(t, function (e, t) {
                                    if (n.id == t) return delete (t = f.extend({}, n)).children, i.push(t), n.children && ((t.children = []), a(n.children, t.children)), !0;
                                });
                            });
                        });
                return a(f.extend({}, e.data), n), n;
            }),
            (t.prototype.setChecked = function (o) {
                this.config,
                    this.elem.find("." + y).each(function (e, t) {
                        var n = f(this).data("id"),
                            i = f(t)
                                .children("." + x)
                                .find('input[same="layuiTreeCheck"]'),
                            a = i.next();
                        if ("number" == typeof o) {
                            if (n.toString() == o.toString()) return i[0].checked || a.click(), !1;
                        } else
                            "object" == typeof o &&
                                layui.each(o, function (e, t) {
                                    if (t.toString() == n.toString() && !i[0].checked) return a.click(), !0;
                                });
                    });
            }),
            (i.that = {}),
            (i.config = {}),
            (o.reload = function (e, t) {
                return (e = i.that[e]).reload(t), i.call(e);
            }),
            (o.getChecked = function (e) {
                return i.that[e].getChecked();
            }),
            (o.setChecked = function (e, t) {
                return i.that[e].setChecked(t);
            }),
            (o.render = function (e) {
                return (e = new t(e)), i.call(e);
            }),
            e(a, o);
    }),
    layui.define(["laytpl", "form"], function (e) {
        "use strict";
        function i() {
            var t = this,
                e = t.config,
                n = e.id || t.index;
            return (
                (i.that[n] = t),
                {
                    config: (i.config[n] = e),
                    reload: function (e) {
                        t.reload.call(t, e);
                    },
                    getData: function () {
                        return t.getData.call(t);
                    },
                }
            );
        }
        function t(e) {
            return [
                '<div class="layui-transfer-box" data-index="' + (e = e || {}).index + '">',
                '<div class="layui-transfer-header">',
                '<input type="checkbox" name="' + e.checkAllName + '" lay-filter="layTransferCheckbox" lay-type="all" lay-skin="primary" title="{{= d.data.title[' + e.index + "] || 'list" + (e.index + 1) + "' }}\">",
                "</div>",
                "{{# if(d.data.showSearch){ }}",
                '<div class="layui-transfer-search">',
                '<i class="layui-icon layui-icon-search"></i>',
                '<input type="text" class="layui-input" placeholder="Tìm kiếm từ khóa">',
                "</div>",
                "{{# } }}",
                '<ul class="layui-transfer-data"></ul>',
                "</div>",
            ].join("");
        }
        function n(e) {
            (this.index = ++l.index), (this.config = c.extend({}, this.config, l.config, e)), this.render();
        }
        var c = layui.$,
            a = layui.laytpl,
            o = layui.form,
            r = "transfer",
            l = {
                config: {},
                index: layui[r] ? layui[r].index + 1e4 : 0,
                set: function (e) {
                    return (this.config = c.extend({}, this.config, e)), this;
                },
                on: function (e, t) {
                    return layui.onevent.call(this, r, e, t);
                },
            },
            d = "layui-hide",
            u = "layui-btn-disabled",
            s = "layui-none",
            f = "layui-transfer-box",
            p = "layui-transfer-header",
            h = "layui-transfer-search",
            y = "layui-transfer-data",
            m = [
                '<div class="layui-transfer layui-form layui-border-box" lay-filter="LAY-transfer-{{= d.index }}">',
                t({ index: 0, checkAllName: "layTransferLeftCheckAll" }),
                '<div class="layui-transfer-active">',
                '<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="0">',
                '<i class="layui-icon layui-icon-next"></i>',
                "</button>",
                '<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="1">',
                '<i class="layui-icon layui-icon-prev"></i>',
                "</button>",
                "</div>",
                t({ index: 1, checkAllName: "layTransferRightCheckAll" }),
                "</div>",
            ].join("");
        (n.prototype.config = { title: ["Danh sách một", "Danh sách hai"], width: 200, height: 360, data: [], value: [], showSearch: !1, id: "", text: { none: "Không có dữ liệu", searchNone: "Không có dữ liệu phù hợp" } }),
            (n.prototype.reload = function (e) {
                (this.config = c.extend({}, this.config, e)), this.render();
            }),
            (n.prototype.render = function () {
                var e = this,
                    t = e.config,
                    n = (e.elem = c(a(m, { open: "{{", close: "}}" }).render({ data: t, index: e.index }))),
                    i = (t.elem = c(t.elem));
                i[0] &&
                    ((t.data = t.data || []),
                    (t.value = t.value || []),
                    (t.id = "id" in t ? t.id : elem.attr("id") || e.index),
                    (e.key = t.id),
                    i.html(e.elem),
                    (e.layBox = e.elem.find("." + f)),
                    (e.layHeader = e.elem.find("." + p)),
                    (e.laySearch = e.elem.find("." + h)),
                    (e.layData = n.find("." + y)),
                    (e.layBtn = n.find(".layui-transfer-active .layui-btn")),
                    e.layBox.css({ width: t.width, height: t.height }),
                    e.layData.css({ height: ((i = t.height - e.layHeader.outerHeight()), t.showSearch && (i -= e.laySearch.outerHeight()), i - 2) }),
                    e.renderData(),
                    e.events());
            }),
            (n.prototype.renderData = function () {
                var e = this.config,
                    o = [
                        { checkName: "layTransferLeftCheck", views: [] },
                        { checkName: "layTransferRightCheck", views: [] },
                    ];
                this.parseData(function (n) {
                    var i = n.selected ? 1 : 0,
                        a = [
                            "<li>",
                            '<input type="checkbox" name="' +
                                o[i].checkName +
                                '" lay-skin="primary" lay-filter="layTransferCheckbox" title="' +
                                n.title +
                                '"' +
                                (n.disabled ? " disabled" : "") +
                                (n.checked ? " checked" : "") +
                                ' value="' +
                                n.value +
                                '">',
                            "</li>",
                        ].join("");
                    i
                        ? layui.each(e.value, function (e, t) {
                              t == n.value && n.selected && (o[i].views[e] = a);
                          })
                        : o[i].views.push(a),
                        delete n.selected;
                }),
                    this.layData.eq(0).html(o[0].views.join("")),
                    this.layData.eq(1).html(o[1].views.join("")),
                    this.renderCheckBtn();
            }),
            (n.prototype.renderForm = function (e) {
                o.render(e, "LAY-transfer-" + this.index);
            }),
            (n.prototype.renderCheckBtn = function (r) {
                var l = this,
                    s = l.config;
                (r = r || {}),
                    l.layBox.each(function (e) {
                        var t = (n = c(this)).find("." + y),
                            n = n.find("." + p).find('input[type="checkbox"]'),
                            i = t.find('input[type="checkbox"]'),
                            a = 0,
                            o = !1;
                        i.each(function () {
                            var e = c(this).data("hide");
                            (this.checked || this.disabled || e) && a++, this.checked && !e && (o = !0);
                        }),
                            n.prop("checked", o && a === i.length),
                            l.layBtn.eq(e)[o ? "removeClass" : "addClass"](u),
                            r.stopNone || ((i = t.children("li:not(." + d + ")").length), l.noneView(t, i ? "" : s.text.none));
                    }),
                    l.renderForm("checkbox");
            }),
            (n.prototype.noneView = function (e, t) {
                var n = c('<p class="layui-none">' + (t || "") + "</p>");
                e.find("." + s)[0] && e.find("." + s).remove(), t.replace(/\s/g, "") && e.append(n);
            }),
            (n.prototype.setValue = function () {
                var e = this.config,
                    t = [];
                return (
                    this.layBox
                        .eq(1)
                        .find("." + y + ' input[type="checkbox"]')
                        .each(function () {
                            c(this).data("hide") || t.push(this.value);
                        }),
                    (e.value = t),
                    this
                );
            }),
            (n.prototype.parseData = function (t) {
                var i = this.config,
                    a = [];
                return (
                    layui.each(i.data, function (e, n) {
                        (n = ("function" == typeof i.parseData ? i.parseData(n) : n) || n),
                            a.push((n = c.extend({}, n))),
                            layui.each(i.value, function (e, t) {
                                t == n.value && (n.selected = !0);
                            }),
                            t && t(n);
                    }),
                    (i.data = a),
                    this
                );
            }),
            (n.prototype.getData = function (e) {
                var t = this.config,
                    i = [];
                return (
                    this.setValue(),
                    layui.each(e || t.value, function (e, n) {
                        layui.each(t.data, function (e, t) {
                            delete t.selected, n == t.value && i.push(t);
                        });
                    }),
                    i
                );
            }),
            (n.prototype.transfer = function (e, t) {
                var n,
                    i = this,
                    a = i.config,
                    o = i.layBox.eq(e),
                    r = [];
                t
                    ? (((n = t.find('input[type="checkbox"]'))[0].checked = !1),
                      o
                          .siblings("." + f)
                          .find("." + y)
                          .append(t.clone()),
                      t.remove(),
                      r.push(n[0].value),
                      i.setValue())
                    : o.each(function (e) {
                          c(this)
                              .find("." + y)
                              .children("li")
                              .each(function () {
                                  var e = c(this),
                                      t = e.find('input[type="checkbox"]'),
                                      n = t.data("hide");
                                  t[0].checked &&
                                      !n &&
                                      ((t[0].checked = !1),
                                      o
                                          .siblings("." + f)
                                          .find("." + y)
                                          .append(e.clone()),
                                      e.remove(),
                                      r.push(t[0].value)),
                                      i.setValue();
                              });
                      }),
                    i.renderCheckBtn(),
                    "" !== (t = o.siblings("." + f).find("." + h + " input")).val() && t.trigger("keyup"),
                    a.onchange && a.onchange(i.getData(r), e);
            }),
            (n.prototype.events = function () {
                var a = this,
                    o = a.config;
                a.elem.on("click", 'input[lay-filter="layTransferCheckbox"]+', function () {
                    var e = c(this).prev(),
                        t = e[0].checked,
                        n = e
                            .parents("." + f)
                            .eq(0)
                            .find("." + y);
                    e[0].disabled ||
                        ("all" === e.attr("lay-type") &&
                            n.find('input[type="checkbox"]').each(function () {
                                this.disabled || (this.checked = t);
                            }),
                        setTimeout(function () {
                            a.renderCheckBtn({ stopNone: !0 });
                        }, 0));
                }),
                    a.elem.on("dblclick", "." + y + ">li", function (e) {
                        var t = c(this),
                            n = t.children('input[type="checkbox"]'),
                            i = t.parent().parent();
                        n[0].disabled || a.transfer(i.data("index"), t);
                    }),
                    a.layBtn.on("click", function () {
                        var e = c(this),
                            t = e.data("index");
                        e.hasClass(u) || a.transfer(t);
                    }),
                    a.laySearch.find("input").on("keyup", function () {
                        var i = this.value,
                            e = c(this)
                                .parents("." + h)
                                .eq(0)
                                .siblings("." + y),
                            t =
                                ((t = e.children("li")).each(function () {
                                    var e = c(this),
                                        t = e.find('input[type="checkbox"]'),
                                        n = t[0].title;
                                    "cs" !== o.showSearch && ((n = n.toLowerCase()), (i = i.toLowerCase())), e[(n = -1 !== n.indexOf(i)) ? "removeClass" : "addClass"](d), t.data("hide", !n);
                                }),
                                a.renderCheckBtn(),
                                t.length === e.children("li." + d).length);
                        a.noneView(e, t ? o.text.searchNone : "");
                    });
            }),
            (i.that = {}),
            (i.config = {}),
            (l.reload = function (e, t) {
                return (e = i.that[e]).reload(t), i.call(e);
            }),
            (l.getData = function (e) {
                return i.that[e].getData();
            }),
            (l.render = function (e) {
                return (e = new n(e)), i.call(e);
            }),
            e(r, l);
    }),
    layui.define(["jquery", "lay"], function (e) {
        "use strict";
        function t(e) {
            (this.config = a.extend({}, this.config, o.config, e)), this.render();
        }
        var a = layui.$,
            i = layui.lay,
            o =
                (layui.hint(),
                layui.device(),
                {
                    config: {},
                    set: function (e) {
                        return (this.config = a.extend({}, this.config, e)), this;
                    },
                    on: function (e, t) {
                        return layui.onevent.call(this, l, e, t);
                    },
                }),
            l = "carousel",
            s = "layui-this",
            c = "layui-carousel-left",
            d = "layui-carousel-right",
            u = "layui-carousel-prev",
            f = "layui-carousel-next",
            r = "layui-carousel-arrow",
            p = "layui-carousel-ind";
        (t.prototype.config = { width: "600px", height: "280px", full: !1, arrow: "hover", indicator: "inside", autoplay: !0, interval: 3e3, anim: "", trigger: "click", index: 0 }),
            (t.prototype.render = function () {
                var e = this,
                    t = e.config,
                    n = a(t.elem);
                if (1 < n.length)
                    return (
                        layui.each(n, function () {
                            o.render(a.extend({}, t, { elem: this }));
                        }),
                        e
                    );
                a.extend(t, i.options(n[0])),
                    (t.elem = a(t.elem)),
                    t.elem[0] &&
                        ((e.elemItem = t.elem.find(">*[carousel-item]>*")),
                        t.index < 0 && (t.index = 0),
                        t.index >= e.elemItem.length && (t.index = e.elemItem.length - 1),
                        t.interval < 800 && (t.interval = 800),
                        t.full ? t.elem.css({ position: "fixed", width: "100%", height: "100%", zIndex: 9999 }) : t.elem.css({ width: t.width, height: t.height }),
                        t.elem.attr("lay-anim", t.anim),
                        e.elemItem.eq(t.index).addClass(s),
                        e.elemItem.length <= 1 || (e.indicator(), e.arrow(), e.autoplay(), e.events()));
            }),
            (t.prototype.reload = function (e) {
                clearInterval(this.timer), (this.config = a.extend({}, this.config, e)), this.render();
            }),
            (t.prototype.prevIndex = function () {
                var e = this.config.index - 1;
                return e < 0 ? this.elemItem.length - 1 : e;
            }),
            (t.prototype.nextIndex = function () {
                var e = this.config.index + 1;
                return e >= this.elemItem.length ? 0 : e;
            }),
            (t.prototype.addIndex = function (e) {
                var t = this.config;
                (t.index = t.index + (e = e || 1)), t.index >= this.elemItem.length && (t.index = 0);
            }),
            (t.prototype.subIndex = function (e) {
                var t = this.config;
                (t.index = t.index - (e = e || 1)), t.index < 0 && (t.index = this.elemItem.length - 1);
            }),
            (t.prototype.autoplay = function () {
                var e = this,
                    t = e.config;
                t.autoplay &&
                    (clearInterval(e.timer),
                    (e.timer = setInterval(function () {
                        e.slide();
                    }, t.interval)));
            }),
            (t.prototype.arrow = function () {
                var t = this,
                    e = t.config,
                    n = a(
                        [
                            '<button class="layui-icon ' + r + '" lay-type="sub">' + ("updown" === e.anim ? "&#xe619;" : "&#xe603;") + "</button>",
                            '<button class="layui-icon ' + r + '" lay-type="add">' + ("updown" === e.anim ? "&#xe61a;" : "&#xe602;") + "</button>",
                        ].join("")
                    );
                e.elem.attr("lay-arrow", e.arrow),
                    e.elem.find("." + r)[0] && e.elem.find("." + r).remove(),
                    e.elem.append(n),
                    n.on("click", function () {
                        var e = a(this).attr("lay-type");
                        t.slide(e);
                    });
            }),
            (t.prototype.goto = function (e) {
                var t = this.config;
                e > t.index ? this.slide("add", e - t.index) : e < t.index && this.slide("sub", t.index - e);
            }),
            (t.prototype.indicator = function () {
                var t,
                    e = this,
                    n = e.config,
                    i = (e.elemInd = a(
                        [
                            '<div class="' + p + '"><ul>',
                            ((t = []),
                            layui.each(e.elemItem, function (e) {
                                t.push("<li" + (n.index === e ? ' class="layui-this"' : "") + "></li>");
                            }),
                            t.join("")),
                            "</ul></div>",
                        ].join("")
                    ));
                n.elem.attr("lay-indicator", n.indicator),
                    n.elem.find("." + p)[0] && n.elem.find("." + p).remove(),
                    n.elem.append(i),
                    "updown" === n.anim && i.css("margin-top", -i.height() / 2),
                    i.find("li").on("hover" === n.trigger ? "mouseover" : n.trigger, function () {
                        e.goto(a(this).index());
                    });
            }),
            (t.prototype.slide = function (e, t) {
                var n = this,
                    i = n.elemItem,
                    a = n.config,
                    o = a.index,
                    r = a.elem.attr("lay-filter");
                n.haveSlide ||
                    ("sub" === e
                        ? (n.subIndex(t),
                          i.eq(a.index).addClass(u),
                          setTimeout(function () {
                              i.eq(o).addClass(d), i.eq(a.index).addClass(d);
                          }, 50))
                        : (n.addIndex(t),
                          i.eq(a.index).addClass(f),
                          setTimeout(function () {
                              i.eq(o).addClass(c), i.eq(a.index).addClass(c);
                          }, 50)),
                    setTimeout(function () {
                        i.removeClass(s + " " + u + " " + f + " " + c + " " + d), i.eq(a.index).addClass(s), (n.haveSlide = !1);
                    }, 300),
                    n.elemInd.find("li").eq(a.index).addClass(s).siblings().removeClass(s),
                    (n.haveSlide = !0),
                    (e = { index: a.index, prevIndex: o, item: i.eq(a.index) }),
                    "function" == typeof a.change && a.change(e),
                    layui.event.call(this, l, "change(" + r + ")", e));
            }),
            (t.prototype.events = function () {
                var e = this,
                    t = e.config;
                t.elem.data("haveEvents") ||
                    (t.elem
                        .on("mouseenter", function () {
                            "always" !== e.config.autoplay && clearInterval(e.timer);
                        })
                        .on("mouseleave", function () {
                            "always" !== e.config.autoplay && e.autoplay();
                        }),
                    t.elem.data("haveEvents", !0));
            }),
            (o.render = function (e) {
                return new t(e);
            }),
            e(l, o);
    }),
    layui.define(["jquery", "lay"], function (e) {
        "use strict";
        function t(e) {
            (this.index = ++c.index), (this.config = l.extend({}, this.config, c.config, e)), this.render();
        }
        var l = layui.jquery,
            s = layui.lay,
            c = {
                config: {},
                index: layui.rate ? layui.rate.index + 1e4 : 0,
                set: function (e) {
                    return (this.config = l.extend({}, this.config, e)), this;
                },
                on: function (e, t) {
                    return layui.onevent.call(this, n, e, t);
                },
            },
            n = "rate",
            d = "layui-icon-rate",
            u = "layui-icon-rate-solid",
            r = "layui-icon-rate-half",
            f = "layui-icon-rate-solid layui-icon-rate-half",
            p = "layui-icon-rate layui-icon-rate-half";
        (t.prototype.config = { length: 5, text: !1, readonly: !1, half: !1, value: 0, theme: "" }),
            (t.prototype.render = function () {
                var e = this.config,
                    t = l(e.elem);
                if (1 < t.length)
                    return (
                        layui.each(t, function () {
                            c.render(l.extend({}, e, { elem: this }));
                        }),
                        this
                    );
                l.extend(e, s.options(t[0]));
                for (
                    var n = e.theme ? 'style="color: ' + e.theme + ';"' : "",
                        i =
                            ((e.elem = l(e.elem)),
                            e.value > e.length && (e.value = e.length),
                            parseInt(e.value) === e.value || e.half || (e.value = Math.ceil(e.value) - e.value < 0.5 ? Math.ceil(e.value) : Math.floor(e.value)),
                            '<ul class="layui-rate" ' + (e.readonly ? "readonly" : "") + ">"),
                        a = 1;
                    a <= e.length;
                    a++
                ) {
                    var o = '<li class="layui-inline"><i class="layui-icon ' + (a > Math.floor(e.value) ? d : u) + '" ' + n + "></i></li>";
                    e.half && parseInt(e.value) !== e.value && a == Math.ceil(e.value) ? (i = i + '<li><i class="layui-icon layui-icon-rate-half" ' + n + "></i></li>") : (i += o);
                }
                i += "</ul>" + (e.text ? '<span class="layui-inline">' + e.value + "sao" : "") + "</span>";
                var r = (t = e.elem).next(".layui-rate");
                r[0] && r.remove(), (this.elemTemp = l(i)), (e.span = this.elemTemp.next("span")), e.setText && e.setText(e.value), t.html(this.elemTemp), t.addClass("layui-inline"), e.readonly || this.action();
            }),
            (t.prototype.setvalue = function (e) {
                (this.config.value = e), this.render();
            }),
            (t.prototype.action = function () {
                var i = this.config,
                    a = this.elemTemp,
                    o = a.find("i").width();
                a.children("li").each(function (e) {
                    var t = e + 1,
                        n = l(this);
                    n.on("click", function (e) {
                        (i.value = t), i.half && e.pageX - l(this).offset().left <= o / 2 && (i.value = i.value - 0.5), i.text && a.next("span").text(i.value + "sao"), i.choose && i.choose(i.value), i.setText && i.setText(i.value);
                    }),
                        n.on("mousemove", function (e) {
                            a.find("i").each(function () {
                                l(this).addClass(d).removeClass(f);
                            }),
                                a.find("i:lt(" + t + ")").each(function () {
                                    l(this).addClass(u).removeClass(p);
                                }),
                                i.half && e.pageX - l(this).offset().left <= o / 2 && n.children("i").addClass(r).removeClass(u);
                        }),
                        n.on("mouseleave", function () {
                            a.find("i").each(function () {
                                l(this).addClass(d).removeClass(f);
                            }),
                                a.find("i:lt(" + Math.floor(i.value) + ")").each(function () {
                                    l(this).addClass(u).removeClass(p);
                                }),
                                i.half &&
                                    parseInt(i.value) !== i.value &&
                                    a
                                        .children("li:eq(" + Math.floor(i.value) + ")")
                                        .children("i")
                                        .addClass(r)
                                        .removeClass("layui-icon-rate-solid layui-icon-rate");
                        });
                });
            }),
            (t.prototype.events = function () {
                this.config;
            }),
            (c.render = function (e) {
                return (
                    (e = new t(e)),
                    function () {
                        var t = this;
                        return {
                            setvalue: function (e) {
                                t.setvalue.call(t, e);
                            },
                            config: t.config,
                        };
                    }.call(e)
                );
            }),
            e(n, c);
    }),
    layui.define("jquery", function (e) {
        "use strict";
        function t(e) {}
        var m = layui.$;
        (t.prototype.load = function (e) {
            var i,
                a,
                o,
                t,
                r,
                n,
                l,
                s,
                c,
                d,
                u,
                f,
                p,
                h = 0,
                y = m((e = e || {}).elem);
            if (y[0])
                return (
                    (t = m(e.scrollElem || document)),
                    (r = e.mb || 50),
                    (n = !("isAuto" in e) || e.isAuto),
                    (l = e.end || "Không còn nữa"),
                    (s = e.scrollElem && e.scrollElem !== document),
                    (d = m('<div class="layui-flow-more"><a href="javascript:;">' + (c = "<cite>Tải thêm</cite>") + "</a></div>")),
                    y.find(".layui-flow-more")[0] || y.append(d),
                    (u = function (e, t) {
                        (e = m(e)), d.before(e), (t = 0 == t || null) ? d.html(l) : d.find("a").html(c), (a = t), (i = null), p && p();
                    }),
                    (f = function () {
                        (i = !0), d.find("a").html('<i class="layui-anim layui-anim-rotate layui-anim-loop layui-icon ">&#xe63e;</i>'), "function" == typeof e.done && e.done(++h, u);
                    })(),
                    d.find("a").on("click", function () {
                        m(this), a || i || f();
                    }),
                    e.isLazyimg && (p = this.lazyimg({ elem: e.elem + " img", scrollElem: e.scrollElem })),
                    n &&
                        t.on("scroll", function () {
                            var t = m(this),
                                n = t.scrollTop();
                            o && clearTimeout(o),
                                !a &&
                                    y.width() &&
                                    (o = setTimeout(function () {
                                        var e = (s ? t : m(window)).height();
                                        (s ? t.prop("scrollHeight") : document.documentElement.scrollHeight) - n - e <= r && (i || f());
                                    }, 100));
                        }),
                    this
                );
        }),
            (t.prototype.lazyimg = function (e) {
                var t,
                    s = this,
                    c = 0,
                    d = m((e = e || {}).scrollElem || document),
                    u = e.elem || "img",
                    f = e.scrollElem && e.scrollElem !== document,
                    p = function (t, e) {
                        var n,
                            i = d.scrollTop(),
                            e = i + e,
                            a = f ? t.offset().top - d.offset().top + i : t.offset().top;
                        i <= a &&
                            a <= e &&
                            t.attr("lay-src") &&
                            ((n = t.attr("lay-src")),
                            layui.img(
                                n,
                                function () {
                                    var e = s.lazyimg.elem.eq(c);
                                    t.attr("src", n).removeAttr("lay-src"), e[0] && o(e), c++;
                                },
                                function () {
                                    s.lazyimg.elem.eq(c), t.removeAttr("lay-src");
                                }
                            ));
                    },
                    o = function (e, t) {
                        var n = (f ? t || d : m(window)).height(),
                            i = d.scrollTop(),
                            a = i + n;
                        if (((s.lazyimg.elem = m(u)), e)) p(e, n);
                        else
                            for (var o = 0; o < s.lazyimg.elem.length; o++) {
                                var r = s.lazyimg.elem.eq(o),
                                    l = f ? r.offset().top - d.offset().top + i : r.offset().top;
                                if ((p(r, n), (c = o), a < l)) break;
                            }
                    };
                return (
                    o(),
                    d.on("scroll", function () {
                        var e = m(this);
                        t && clearTimeout(t),
                            (t = setTimeout(function () {
                                o(null, e);
                            }, 50));
                    }),
                    o
                );
            }),
            e("flow", new t());
    }),
    layui.define(["lay", "util", "element", "form"], function (e) {
        "use strict";
        function k(e) {
            return w.trim(e).replace(/^\n|\n$/, "");
        }
        var w = layui.$,
            C = layui.util,
            T = layui.element,
            E = layui.form,
            D = layui.layer,
            S = {
                ELEM_VIEW: "layui-code-view",
                ELEM_COPY: "layui-code-copy",
                ELEM_TAB: "layui-tab",
                ELEM_TITLE: "layui-code-title",
                ELEM_FULL: "layui-code-full",
                ELEM_PREVIEW: "layui-code-preview",
                ELEM_ITEM: "layui-code-item",
                ELEM_SHOW: "layui-show",
            },
            t = { elem: ".layui-code", about: "", ln: !0, header: !1, encode: !0, copy: !0, text: { code: C.escape("</>"), preview: "Preview" } };
        e("code", function (e) {
            var b = (e = w.extend(!0, {}, t, e));
            (e.elem = w(e.elem)),
                e.elem[0] &&
                    layui.each(e.elem.get().reverse(), function (e, t) {
                        var i,
                            n,
                            a,
                            o,
                            r,
                            l,
                            s,
                            c,
                            d,
                            u,
                            f = w(t),
                            p = w.extend(
                                !0,
                                {},
                                b,
                                lay.options(t),
                                ((i = {}),
                                layui.each(["title", "height", "encode", "skin", "about"], function (e, t) {
                                    var n = f.attr("lay-" + t);
                                    "string" == typeof n && (i[t] = n);
                                }),
                                i)
                            ),
                            h =
                                f.data("code") ||
                                ((a = []),
                                f.children("textarea").each(function () {
                                    a.push(k(this.value));
                                }),
                                0 === a.length && a.push(k(f.html())),
                                a),
                            y =
                                (f.data("code", h),
                                {
                                    copy: {
                                        className: "file-b",
                                        title: ["Sao chép mã"],
                                        event: function (e, t) {
                                            if ("function" == typeof p.onCopy) p.onCopy(n);
                                            else
                                                try {
                                                    navigator.clipboard.writeText(C.unescape(n)).then(function () {
                                                        D.msg("Đã sao chép", { icon: 1 });
                                                    });
                                                } catch (e) {
                                                    D.msg("Sao chép失败", { icon: 2 });
                                                }
                                        },
                                    },
                                }),
                            m =
                                (p.preview &&
                                    ((t = "LAY-CODE-DF-" + e),
                                    (d = p.layout || ["code", "preview"]),
                                    (o = "iframe" === p.preview),
                                    (x = w('<div class="' + S.ELEM_PREVIEW + '">')),
                                    (c = w('<div class="layui-tab layui-tab-brief">')),
                                    (r = w('<div class="layui-tab-title">')),
                                    (u = w('<div class="' + [S.ELEM_ITEM, S.ELEM_ITEM + "-preview", "layui-border"].join(" ") + '">')),
                                    (l = w('<div class="layui-code-tools"></div>')),
                                    (v = f.parent("." + S.ELEM_PREVIEW)),
                                    (m = f.prev("." + S.ELEM_TAB)),
                                    (g = f.next("." + S.ELEM_ITEM + "-preview")),
                                    p.id && x.attr("id", p.id),
                                    x.addClass(p.className),
                                    c.attr("lay-filter", t),
                                    (p.encode = !0),
                                    layui.each(d, function (e, t) {
                                        var n = w('<li lay-id="' + t + '">');
                                        0 === e && n.addClass("layui-this"), n.html(p.text[t]), r.append(n);
                                    }),
                                    w.extend(y, {
                                        full: {
                                            className: "screen-full",
                                            title: ["Tối đa hóa hiển thị", "Phục hồi hiển thị"],
                                            event: function (e, t) {
                                                var n = e.closest("." + S.ELEM_PREVIEW),
                                                    i = "layui-icon-" + this.className,
                                                    a = "layui-icon-screen-restore",
                                                    o = this.title,
                                                    r = w("html,body"),
                                                    l = "layui-scollbar-hide";
                                                e.hasClass(i)
                                                    ? (n.addClass(S.ELEM_FULL), e.removeClass(i).addClass(a), e.attr("title", o[1]), r.addClass(l))
                                                    : (n.removeClass(S.ELEM_FULL), e.removeClass(a).addClass(i), e.attr("title", o[0]), r.removeClass(l));
                                            },
                                        },
                                        window: {
                                            className: "release",
                                            title: ["Xem trước trong cửa sổ mới"],
                                            event: function (e, t) {
                                                C.openWin({ content: n });
                                            },
                                        },
                                    }),
                                    p.copy && ("array" === layui.type(p.tools) ? -1 === p.tools.indexOf("copy") && p.tools.unshift("copy") : (p.tools = ["copy"])),
                                    l.on("click", ">i", function () {
                                        var e = w(this),
                                            t = e.data("type");
                                        "function" == typeof y[t].event && y[t].event(e, t), "function" == typeof p.toolsEvent && p.toolsEvent(e, t);
                                    }),
                                    layui.each(p.tools, function (e, t) {
                                        var n = (y[t] && y[t].className) || t,
                                            i = y[t].title || [""];
                                        l.append('<i class="layui-icon layui-icon-' + n + '" data-type="' + t + '" title="' + i[0] + '"></i>');
                                    }),
                                    m[0] && m.remove(),
                                    g[0] && g.remove(),
                                    v[0] && f.unwrap(),
                                    c.append(r),
                                    p.tools && c.append(l),
                                    f.wrap(x).addClass(S.ELEM_ITEM).before(c),
                                    o && u.html('<iframe allowtransparency="true" frameborder="0"></iframe>'),
                                    (s = function (e) {
                                        var t = e.children("iframe")[0],
                                            n =
                                                (o && t ? (t.srcdoc = h.join("")) : e.html(h.join("")),
                                                {
                                                    container: e,
                                                    render: function () {
                                                        E.render(e.find(".layui-form")), T.render();
                                                    },
                                                });
                                        setTimeout(function () {
                                            "function" == typeof p.done && p.done(n);
                                        }, 3);
                                    }),
                                    "preview" === d[0] ? (u.addClass(S.ELEM_SHOW), f.before(u), s(u)) : f.addClass(S.ELEM_SHOW).after(u),
                                    (p.codeStyle = [p.style, p.codeStyle].join("")),
                                    (p.previewStyle = [p.style, p.previewStyle].join("")),
                                    u.attr("style", p.previewStyle),
                                    T.on("tab(" + t + ")", function (e) {
                                        var t = w(this),
                                            n = w(e.elem)
                                                .closest("." + S.ELEM_PREVIEW)
                                                .find("." + S.ELEM_ITEM),
                                            e = n.eq(e.index);
                                        n.removeClass(S.ELEM_SHOW), e.addClass(S.ELEM_SHOW), "preview" === t.attr("lay-id") && s(e);
                                    })),
                                p.ln ? "ol" : "ul"),
                            g = w("<" + m + ' class="layui-code-' + m + '">'),
                            v = w('<div class="' + S.ELEM_TITLE + '">'),
                            x = (f.addClass("layui-code-view layui-box"), p.skin && ("notepad" === p.skin && (p.skin = "dark"), f.removeClass("layui-code-dark layui-code-light"), f.addClass("layui-code-" + p.skin)), (n = h.join("")));
                        "function" == typeof p.codeParse && (x = n = p.codeParse(x)),
                            (x = (x = p.encode ? C.escape(x) : x).replace(/[\r\t\n]+/g, "</li><li>")),
                            f.html(g.html("<li>" + x + "</li>")),
                            p.header && !f.children("." + S.ELEM_TITLE)[0] && (v.html((p.title || p.text.code) + (p.about ? '<div class="layui-code-about">' + p.about + "</div>" : "")), f.prepend(v)),
                            p.elem.length === e + 1 && "function" == typeof p.allDone && p.allDone(),
                            0 < (c = Math.floor(g.find("li").length / 100)) && g.css("margin-left", c + "px"),
                            p.height && g.css("max-height", p.height),
                            g.attr("style", p.codeStyle),
                            p.copy &&
                                !p.preview &&
                                ((d = w(['<span class="' + S.ELEM_COPY + '">', '<i class="layui-icon layui-icon-file-b" title="Sao chép"></i>', "</span>"].join(""))),
                                (u = f.children("." + S.ELEM_COPY)),
                                (g[0].style.height || g[0].style.maxHeight) && d.addClass(S.ELEM_COPY + "-offset"),
                                u[0] && u.remove(),
                                f.append(d),
                                d.on("click", function () {
                                    y.copy.event();
                                }));
                    });
        });
    }),
    layui["layui.all"] || layui.addcss("modules/code.css?v=3", "skincodecss");
