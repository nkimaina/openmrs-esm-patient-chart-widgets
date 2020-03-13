System.register(
  [
    "react",
    "@openmrs/esm-api",
    "@openmrs/esm-error-handling",
    "react-router-dom",
    "react-i18next"
  ],
  function(e) {
    var t, n, r, a, i;
    return {
      setters: [
        function(e) {
          t = e;
        },
        function(e) {
          n = e;
        },
        function(e) {
          r = e;
        },
        function(e) {
          a = e;
        },
        function(e) {
          i = e;
        }
      ],
      execute: function() {
        e(
          (function(e) {
            function t(t) {
              for (
                var n, a, i = t[0], o = t[1], l = 0, c = [];
                l < i.length;
                l++
              )
                (a = i[l]),
                  Object.prototype.hasOwnProperty.call(r, a) &&
                    r[a] &&
                    c.push(r[a][0]),
                  (r[a] = 0);
              for (n in o)
                Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
              for (s && s(t); c.length; ) c.shift()();
            }
            var n = {},
              r = { 0: 0 };
            function a(t) {
              if (n[t]) return n[t].exports;
              var r = (n[t] = { i: t, l: !1, exports: {} });
              return (
                e[t].call(r.exports, r, r.exports, a), (r.l = !0), r.exports
              );
            }
            (a.e = function(e) {
              var t = [],
                n = r[e];
              if (0 !== n)
                if (n) t.push(n[2]);
                else {
                  var i = new Promise(function(t, a) {
                    n = r[e] = [t, a];
                  });
                  t.push((n[2] = i));
                  var o,
                    l = document.createElement("script");
                  (l.charset = "utf-8"),
                    (l.timeout = 120),
                    a.nc && l.setAttribute("nonce", a.nc),
                    (l.src = (function(e) {
                      return (
                        a.p + "" + e + ".openmrs-esm-patient-chart-widgets.js"
                      );
                    })(e));
                  var s = new Error();
                  o = function(t) {
                    (l.onerror = l.onload = null), clearTimeout(c);
                    var n = r[e];
                    if (0 !== n) {
                      if (n) {
                        var a = t && ("load" === t.type ? "missing" : t.type),
                          i = t && t.target && t.target.src;
                        (s.message =
                          "Loading chunk " +
                          e +
                          " failed.\n(" +
                          a +
                          ": " +
                          i +
                          ")"),
                          (s.name = "ChunkLoadError"),
                          (s.type = a),
                          (s.request = i),
                          n[1](s);
                      }
                      r[e] = void 0;
                    }
                  };
                  var c = setTimeout(function() {
                    o({ type: "timeout", target: l });
                  }, 12e4);
                  (l.onerror = l.onload = o), document.head.appendChild(l);
                }
              return Promise.all(t);
            }),
              (a.m = e),
              (a.c = n),
              (a.d = function(e, t, n) {
                a.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: n });
              }),
              (a.r = function(e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              (a.t = function(e, t) {
                if ((1 & t && (e = a(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                  return e;
                var n = Object.create(null);
                if (
                  (a.r(n),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                  }),
                  2 & t && "string" != typeof e)
                )
                  for (var r in e)
                    a.d(
                      n,
                      r,
                      function(t) {
                        return e[t];
                      }.bind(null, r)
                    );
                return n;
              }),
              (a.n = function(e) {
                var t =
                  e && e.__esModule
                    ? function() {
                        return e.default;
                      }
                    : function() {
                        return e;
                      };
                return a.d(t, "a", t), t;
              }),
              (a.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (a.p = ""),
              (a.oe = function(e) {
                throw (console.error(e), e);
              });
            var i = (window.webpackJsonp_openmrs_esm_patient_chart_widgets =
                window.webpackJsonp_openmrs_esm_patient_chart_widgets || []),
              o = i.push.bind(i);
            (i.push = t), (i = i.slice());
            for (var l = 0; l < i.length; l++) t(i[l]);
            var s = o;
            return a((a.s = 94));
          })([
            function(e, n) {
              e.exports = t;
            },
            function(e, t) {
              e.exports = n;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(80);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              e.exports = (function() {
                "use strict";
                var e = "millisecond",
                  t = "second",
                  n = "minute",
                  r = "hour",
                  a = "day",
                  i = "week",
                  o = "month",
                  l = "quarter",
                  s = "year",
                  c = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
                  u = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                  m = function(e, t, n) {
                    var r = String(e);
                    return !r || r.length >= t
                      ? e
                      : "" + Array(t + 1 - r.length).join(n) + e;
                  },
                  d = {
                    s: m,
                    z: function(e) {
                      var t = -e.utcOffset(),
                        n = Math.abs(t),
                        r = Math.floor(n / 60),
                        a = n % 60;
                      return (
                        (t <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(a, 2, "0")
                      );
                    },
                    m: function(e, t) {
                      var n =
                          12 * (t.year() - e.year()) + (t.month() - e.month()),
                        r = e.clone().add(n, o),
                        a = t - r < 0,
                        i = e.clone().add(n + (a ? -1 : 1), o);
                      return Number(-(n + (t - r) / (a ? r - i : i - r)) || 0);
                    },
                    a: function(e) {
                      return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
                    },
                    p: function(c) {
                      return (
                        {
                          M: o,
                          y: s,
                          w: i,
                          d: a,
                          D: "date",
                          h: r,
                          m: n,
                          s: t,
                          ms: e,
                          Q: l
                        }[c] ||
                        String(c || "")
                          .toLowerCase()
                          .replace(/s$/, "")
                      );
                    },
                    u: function(e) {
                      return void 0 === e;
                    }
                  },
                  _ = {
                    name: "en",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                      "_"
                    ),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
                      "_"
                    )
                  },
                  p = "en",
                  f = {};
                f[p] = _;
                var h = function(e) {
                    return e instanceof b;
                  },
                  g = function(e, t, n) {
                    var r;
                    if (!e) return p;
                    if ("string" == typeof e)
                      f[e] && (r = e), t && ((f[e] = t), (r = e));
                    else {
                      var a = e.name;
                      (f[a] = e), (r = a);
                    }
                    return n || (p = r), r;
                  },
                  v = function(e, t, n) {
                    if (h(e)) return e.clone();
                    var r = t
                      ? "string" == typeof t
                        ? { format: t, pl: n }
                        : t
                      : {};
                    return (r.date = e), new b(r);
                  },
                  y = d;
                (y.l = g),
                  (y.i = h),
                  (y.w = function(e, t) {
                    return v(e, {
                      locale: t.$L,
                      utc: t.$u,
                      $offset: t.$offset
                    });
                  });
                var b = (function() {
                  function m(e) {
                    (this.$L = this.$L || g(e.locale, null, !0)), this.parse(e);
                  }
                  var d = m.prototype;
                  return (
                    (d.parse = function(e) {
                      (this.$d = (function(e) {
                        var t = e.date,
                          n = e.utc;
                        if (null === t) return new Date(NaN);
                        if (y.u(t)) return new Date();
                        if (t instanceof Date) return new Date(t);
                        if ("string" == typeof t && !/Z$/i.test(t)) {
                          var r = t.match(c);
                          if (r)
                            return n
                              ? new Date(
                                  Date.UTC(
                                    r[1],
                                    r[2] - 1,
                                    r[3] || 1,
                                    r[4] || 0,
                                    r[5] || 0,
                                    r[6] || 0,
                                    r[7] || 0
                                  )
                                )
                              : new Date(
                                  r[1],
                                  r[2] - 1,
                                  r[3] || 1,
                                  r[4] || 0,
                                  r[5] || 0,
                                  r[6] || 0,
                                  r[7] || 0
                                );
                        }
                        return new Date(t);
                      })(e)),
                        this.init();
                    }),
                    (d.init = function() {
                      var e = this.$d;
                      (this.$y = e.getFullYear()),
                        (this.$M = e.getMonth()),
                        (this.$D = e.getDate()),
                        (this.$W = e.getDay()),
                        (this.$H = e.getHours()),
                        (this.$m = e.getMinutes()),
                        (this.$s = e.getSeconds()),
                        (this.$ms = e.getMilliseconds());
                    }),
                    (d.$utils = function() {
                      return y;
                    }),
                    (d.isValid = function() {
                      return !("Invalid Date" === this.$d.toString());
                    }),
                    (d.isSame = function(e, t) {
                      var n = v(e);
                      return this.startOf(t) <= n && n <= this.endOf(t);
                    }),
                    (d.isAfter = function(e, t) {
                      return v(e) < this.startOf(t);
                    }),
                    (d.isBefore = function(e, t) {
                      return this.endOf(t) < v(e);
                    }),
                    (d.$g = function(e, t, n) {
                      return y.u(e) ? this[t] : this.set(n, e);
                    }),
                    (d.year = function(e) {
                      return this.$g(e, "$y", s);
                    }),
                    (d.month = function(e) {
                      return this.$g(e, "$M", o);
                    }),
                    (d.day = function(e) {
                      return this.$g(e, "$W", a);
                    }),
                    (d.date = function(e) {
                      return this.$g(e, "$D", "date");
                    }),
                    (d.hour = function(e) {
                      return this.$g(e, "$H", r);
                    }),
                    (d.minute = function(e) {
                      return this.$g(e, "$m", n);
                    }),
                    (d.second = function(e) {
                      return this.$g(e, "$s", t);
                    }),
                    (d.millisecond = function(t) {
                      return this.$g(t, "$ms", e);
                    }),
                    (d.unix = function() {
                      return Math.floor(this.valueOf() / 1e3);
                    }),
                    (d.valueOf = function() {
                      return this.$d.getTime();
                    }),
                    (d.startOf = function(e, l) {
                      var c = this,
                        u = !!y.u(l) || l,
                        m = y.p(e),
                        d = function(e, t) {
                          var n = y.w(
                            c.$u ? Date.UTC(c.$y, t, e) : new Date(c.$y, t, e),
                            c
                          );
                          return u ? n : n.endOf(a);
                        },
                        _ = function(e, t) {
                          return y.w(
                            c
                              .toDate()
                              [e].apply(
                                c.toDate(),
                                (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)
                              ),
                            c
                          );
                        },
                        p = this.$W,
                        f = this.$M,
                        h = this.$D,
                        g = "set" + (this.$u ? "UTC" : "");
                      switch (m) {
                        case s:
                          return u ? d(1, 0) : d(31, 11);
                        case o:
                          return u ? d(1, f) : d(0, f + 1);
                        case i:
                          var v = this.$locale().weekStart || 0,
                            b = (p < v ? p + 7 : p) - v;
                          return d(u ? h - b : h + (6 - b), f);
                        case a:
                        case "date":
                          return _(g + "Hours", 0);
                        case r:
                          return _(g + "Minutes", 1);
                        case n:
                          return _(g + "Seconds", 2);
                        case t:
                          return _(g + "Milliseconds", 3);
                        default:
                          return this.clone();
                      }
                    }),
                    (d.endOf = function(e) {
                      return this.startOf(e, !1);
                    }),
                    (d.$set = function(i, l) {
                      var c,
                        u = y.p(i),
                        m = "set" + (this.$u ? "UTC" : ""),
                        d = ((c = {}),
                        (c[a] = m + "Date"),
                        (c.date = m + "Date"),
                        (c[o] = m + "Month"),
                        (c[s] = m + "FullYear"),
                        (c[r] = m + "Hours"),
                        (c[n] = m + "Minutes"),
                        (c[t] = m + "Seconds"),
                        (c[e] = m + "Milliseconds"),
                        c)[u],
                        _ = u === a ? this.$D + (l - this.$W) : l;
                      if (u === o || u === s) {
                        var p = this.clone().set("date", 1);
                        p.$d[d](_),
                          p.init(),
                          (this.$d = p
                            .set("date", Math.min(this.$D, p.daysInMonth()))
                            .toDate());
                      } else d && this.$d[d](_);
                      return this.init(), this;
                    }),
                    (d.set = function(e, t) {
                      return this.clone().$set(e, t);
                    }),
                    (d.get = function(e) {
                      return this[y.p(e)]();
                    }),
                    (d.add = function(e, l) {
                      var c,
                        u = this;
                      e = Number(e);
                      var m = y.p(l),
                        d = function(t) {
                          var n = v(u);
                          return y.w(n.date(n.date() + Math.round(t * e)), u);
                        };
                      if (m === o) return this.set(o, this.$M + e);
                      if (m === s) return this.set(s, this.$y + e);
                      if (m === a) return d(1);
                      if (m === i) return d(7);
                      var _ =
                          ((c = {}),
                          (c[n] = 6e4),
                          (c[r] = 36e5),
                          (c[t] = 1e3),
                          c)[m] || 1,
                        p = this.$d.getTime() + e * _;
                      return y.w(p, this);
                    }),
                    (d.subtract = function(e, t) {
                      return this.add(-1 * e, t);
                    }),
                    (d.format = function(e) {
                      var t = this;
                      if (!this.isValid()) return "Invalid Date";
                      var n = e || "YYYY-MM-DDTHH:mm:ssZ",
                        r = y.z(this),
                        a = this.$locale(),
                        i = this.$H,
                        o = this.$m,
                        l = this.$M,
                        s = a.weekdays,
                        c = a.months,
                        m = function(e, r, a, i) {
                          return (e && (e[r] || e(t, n))) || a[r].substr(0, i);
                        },
                        d = function(e) {
                          return y.s(i % 12 || 12, e, "0");
                        },
                        _ =
                          a.meridiem ||
                          function(e, t, n) {
                            var r = e < 12 ? "AM" : "PM";
                            return n ? r.toLowerCase() : r;
                          },
                        p = {
                          YY: String(this.$y).slice(-2),
                          YYYY: this.$y,
                          M: l + 1,
                          MM: y.s(l + 1, 2, "0"),
                          MMM: m(a.monthsShort, l, c, 3),
                          MMMM: c[l] || c(this, n),
                          D: this.$D,
                          DD: y.s(this.$D, 2, "0"),
                          d: String(this.$W),
                          dd: m(a.weekdaysMin, this.$W, s, 2),
                          ddd: m(a.weekdaysShort, this.$W, s, 3),
                          dddd: s[this.$W],
                          H: String(i),
                          HH: y.s(i, 2, "0"),
                          h: d(1),
                          hh: d(2),
                          a: _(i, o, !0),
                          A: _(i, o, !1),
                          m: String(o),
                          mm: y.s(o, 2, "0"),
                          s: String(this.$s),
                          ss: y.s(this.$s, 2, "0"),
                          SSS: y.s(this.$ms, 3, "0"),
                          Z: r
                        };
                      return n.replace(u, function(e, t) {
                        return t || p[e] || r.replace(":", "");
                      });
                    }),
                    (d.utcOffset = function() {
                      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                    }),
                    (d.diff = function(e, c, u) {
                      var m,
                        d = y.p(c),
                        _ = v(e),
                        p = 6e4 * (_.utcOffset() - this.utcOffset()),
                        f = this - _,
                        h = y.m(this, _);
                      return (
                        (h =
                          ((m = {}),
                          (m[s] = h / 12),
                          (m[o] = h),
                          (m[l] = h / 3),
                          (m[i] = (f - p) / 6048e5),
                          (m[a] = (f - p) / 864e5),
                          (m[r] = f / 36e5),
                          (m[n] = f / 6e4),
                          (m[t] = f / 1e3),
                          m)[d] || f),
                        u ? h : y.a(h)
                      );
                    }),
                    (d.daysInMonth = function() {
                      return this.endOf(o).$D;
                    }),
                    (d.$locale = function() {
                      return f[this.$L];
                    }),
                    (d.locale = function(e, t) {
                      if (!e) return this.$L;
                      var n = this.clone(),
                        r = g(e, t, !0);
                      return r && (n.$L = r), n;
                    }),
                    (d.clone = function() {
                      return y.w(this.$d, this);
                    }),
                    (d.toDate = function() {
                      return new Date(this.valueOf());
                    }),
                    (d.toJSON = function() {
                      return this.isValid() ? this.toISOString() : null;
                    }),
                    (d.toISOString = function() {
                      return this.$d.toISOString();
                    }),
                    (d.toString = function() {
                      return this.$d.toUTCString();
                    }),
                    m
                  );
                })();
                return (
                  (v.prototype = b.prototype),
                  (v.extend = function(e, t) {
                    return e(t, b, v), v;
                  }),
                  (v.locale = g),
                  (v.isDayjs = h),
                  (v.unix = function(e) {
                    return v(1e3 * e);
                  }),
                  (v.en = f[p]),
                  (v.Ls = f),
                  v
                );
              })();
            },
            function(e, t) {
              e.exports = r;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(71);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t) {
              e.exports = a;
            },
            function(e, t, n) {
              "use strict";
              var r,
                a = function() {
                  return (
                    void 0 === r &&
                      (r = Boolean(
                        window && document && document.all && !window.atob
                      )),
                    r
                  );
                },
                i = (function() {
                  var e = {};
                  return function(t) {
                    if (void 0 === e[t]) {
                      var n = document.querySelector(t);
                      if (
                        window.HTMLIFrameElement &&
                        n instanceof window.HTMLIFrameElement
                      )
                        try {
                          n = n.contentDocument.head;
                        } catch (e) {
                          n = null;
                        }
                      e[t] = n;
                    }
                    return e[t];
                  };
                })(),
                o = [];
              function l(e) {
                for (var t = -1, n = 0; n < o.length; n++)
                  if (o[n].identifier === e) {
                    t = n;
                    break;
                  }
                return t;
              }
              function s(e, t) {
                for (var n = {}, r = [], a = 0; a < e.length; a++) {
                  var i = e[a],
                    s = t.base ? i[0] + t.base : i[0],
                    c = n[s] || 0,
                    u = "".concat(s, " ").concat(c);
                  n[s] = c + 1;
                  var m = l(u),
                    d = { css: i[1], media: i[2], sourceMap: i[3] };
                  -1 !== m
                    ? (o[m].references++, o[m].updater(d))
                    : o.push({
                        identifier: u,
                        updater: h(d, t),
                        references: 1
                      }),
                    r.push(u);
                }
                return r;
              }
              function c(e) {
                var t = document.createElement("style"),
                  r = e.attributes || {};
                if (void 0 === r.nonce) {
                  var a = n.nc;
                  a && (r.nonce = a);
                }
                if (
                  (Object.keys(r).forEach(function(e) {
                    t.setAttribute(e, r[e]);
                  }),
                  "function" == typeof e.insert)
                )
                  e.insert(t);
                else {
                  var o = i(e.insert || "head");
                  if (!o)
                    throw new Error(
                      "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                  o.appendChild(t);
                }
                return t;
              }
              var u,
                m =
                  ((u = []),
                  function(e, t) {
                    return (u[e] = t), u.filter(Boolean).join("\n");
                  });
              function d(e, t, n, r) {
                var a = n
                  ? ""
                  : r.media
                  ? "@media ".concat(r.media, " {").concat(r.css, "}")
                  : r.css;
                if (e.styleSheet) e.styleSheet.cssText = m(t, a);
                else {
                  var i = document.createTextNode(a),
                    o = e.childNodes;
                  o[t] && e.removeChild(o[t]),
                    o.length ? e.insertBefore(i, o[t]) : e.appendChild(i);
                }
              }
              function _(e, t, n) {
                var r = n.css,
                  a = n.media,
                  i = n.sourceMap;
                if (
                  (a ? e.setAttribute("media", a) : e.removeAttribute("media"),
                  i &&
                    btoa &&
                    (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleSheet)
                )
                  e.styleSheet.cssText = r;
                else {
                  for (; e.firstChild; ) e.removeChild(e.firstChild);
                  e.appendChild(document.createTextNode(r));
                }
              }
              var p = null,
                f = 0;
              function h(e, t) {
                var n, r, a;
                if (t.singleton) {
                  var i = f++;
                  (n = p || (p = c(t))),
                    (r = d.bind(null, n, i, !1)),
                    (a = d.bind(null, n, i, !0));
                } else
                  (n = c(t)),
                    (r = _.bind(null, n, t)),
                    (a = function() {
                      !(function(e) {
                        if (null === e.parentNode) return !1;
                        e.parentNode.removeChild(e);
                      })(n);
                    });
                return (
                  r(e),
                  function(t) {
                    if (t) {
                      if (
                        t.css === e.css &&
                        t.media === e.media &&
                        t.sourceMap === e.sourceMap
                      )
                        return;
                      r((e = t));
                    } else a();
                  }
                );
              }
              e.exports = function(e, t) {
                (t = t || {}).singleton ||
                  "boolean" == typeof t.singleton ||
                  (t.singleton = a());
                var n = s((e = e || []), t);
                return function(e) {
                  if (
                    ((e = e || []),
                    "[object Array]" === Object.prototype.toString.call(e))
                  ) {
                    for (var r = 0; r < n.length; r++) {
                      var a = l(n[r]);
                      o[a].references--;
                    }
                    for (var i = s(e, t), c = 0; c < n.length; c++) {
                      var u = l(n[c]);
                      0 === o[u].references && (o[u].updater(), o.splice(u, 1));
                    }
                    n = i;
                  }
                };
              };
            },
            function(e, t, n) {
              "use strict";
              e.exports = function(e) {
                var t = [];
                return (
                  (t.toString = function() {
                    return this.map(function(t) {
                      var n = (function(e, t) {
                        var n = e[1] || "",
                          r = e[3];
                        if (!r) return n;
                        if (t && "function" == typeof btoa) {
                          var a =
                              ((o = r),
                              (l = btoa(
                                unescape(encodeURIComponent(JSON.stringify(o)))
                              )),
                              (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                                l
                              )),
                              "/*# ".concat(s, " */")),
                            i = r.sources.map(function(e) {
                              return "/*# sourceURL="
                                .concat(r.sourceRoot || "")
                                .concat(e, " */");
                            });
                          return [n]
                            .concat(i)
                            .concat([a])
                            .join("\n");
                        }
                        var o, l, s;
                        return [n].join("\n");
                      })(t, e);
                      return t[2]
                        ? "@media ".concat(t[2], " {").concat(n, "}")
                        : n;
                    }).join("");
                  }),
                  (t.i = function(e, n, r) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var a = {};
                    if (r)
                      for (var i = 0; i < this.length; i++) {
                        var o = this[i][0];
                        null != o && (a[o] = !0);
                      }
                    for (var l = 0; l < e.length; l++) {
                      var s = [].concat(e[l]);
                      (r && a[s[0]]) ||
                        (n &&
                          (s[2]
                            ? (s[2] = "".concat(n, " and ").concat(s[2]))
                            : (s[2] = n)),
                        t.push(s));
                    }
                  }),
                  t
                );
              };
            },
            function(e, t, n) {
              var r = n(7),
                a = n(88);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(85);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(74);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              "use strict";
              var r = n(36),
                a =
                  "object" == typeof self &&
                  self &&
                  self.Object === Object &&
                  self,
                i = r.a || a || Function("return this")();
              t.a = i;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(78);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(72);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(83);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(79);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t) {
              e.exports = i;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(70);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(87);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(76);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(58);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(73);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(63);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(77);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(81);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(86);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(93);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(64);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(90);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(75);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(82);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              (function(e, r) {
                var a;
                /**
                 * @license
                 * Lodash <https://lodash.com/>
                 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
                 * Released under MIT license <https://lodash.com/license>
                 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
                 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
                 */ (function() {
                  var i = "Expected a function",
                    o = "__lodash_placeholder__",
                    l = [
                      ["ary", 128],
                      ["bind", 1],
                      ["bindKey", 2],
                      ["curry", 8],
                      ["curryRight", 16],
                      ["flip", 512],
                      ["partial", 32],
                      ["partialRight", 64],
                      ["rearg", 256]
                    ],
                    s = "[object Arguments]",
                    c = "[object Array]",
                    u = "[object Boolean]",
                    m = "[object Date]",
                    d = "[object Error]",
                    _ = "[object Function]",
                    p = "[object GeneratorFunction]",
                    f = "[object Map]",
                    h = "[object Number]",
                    g = "[object Object]",
                    v = "[object RegExp]",
                    y = "[object Set]",
                    b = "[object String]",
                    A = "[object Symbol]",
                    w = "[object WeakMap]",
                    E = "[object ArrayBuffer]",
                    x = "[object DataView]",
                    S = "[object Float32Array]",
                    N = "[object Float64Array]",
                    k = "[object Int8Array]",
                    O = "[object Int16Array]",
                    C = "[object Int32Array]",
                    j = "[object Uint8Array]",
                    T = "[object Uint16Array]",
                    D = "[object Uint32Array]",
                    M = /\b__p \+= '';/g,
                    I = /\b(__p \+=) '' \+/g,
                    U = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                    F = /&(?:amp|lt|gt|quot|#39);/g,
                    P = /[&<>"']/g,
                    R = RegExp(F.source),
                    H = RegExp(P.source),
                    W = /<%-([\s\S]+?)%>/g,
                    Y = /<%([\s\S]+?)%>/g,
                    L = /<%=([\s\S]+?)%>/g,
                    B = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                    z = /^\w*$/,
                    $ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    V = /[\\^$.*+?()[\]{}|]/g,
                    q = RegExp(V.source),
                    K = /^\s+|\s+$/g,
                    G = /^\s+/,
                    J = /\s+$/,
                    Z = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                    Q = /\{\n\/\* \[wrapped with (.+)\] \*/,
                    X = /,? & /,
                    ee = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                    te = /\\(\\)?/g,
                    ne = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                    re = /\w*$/,
                    ae = /^[-+]0x[0-9a-f]+$/i,
                    ie = /^0b[01]+$/i,
                    oe = /^\[object .+?Constructor\]$/,
                    le = /^0o[0-7]+$/i,
                    se = /^(?:0|[1-9]\d*)$/,
                    ce = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                    ue = /($^)/,
                    me = /['\n\r\u2028\u2029\\]/g,
                    de = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                    _e =
                      "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                    pe = "[\\ud800-\\udfff]",
                    fe = "[" + _e + "]",
                    he = "[" + de + "]",
                    ge = "\\d+",
                    ve = "[\\u2700-\\u27bf]",
                    ye = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                    be =
                      "[^\\ud800-\\udfff" +
                      _e +
                      ge +
                      "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                    Ae = "\\ud83c[\\udffb-\\udfff]",
                    we = "[^\\ud800-\\udfff]",
                    Ee = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                    xe = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                    Se = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                    Ne = "(?:" + ye + "|" + be + ")",
                    ke = "(?:" + Se + "|" + be + ")",
                    Oe = "(?:" + he + "|" + Ae + ")" + "?",
                    Ce =
                      "[\\ufe0e\\ufe0f]?" +
                      Oe +
                      ("(?:\\u200d(?:" +
                        [we, Ee, xe].join("|") +
                        ")[\\ufe0e\\ufe0f]?" +
                        Oe +
                        ")*"),
                    je = "(?:" + [ve, Ee, xe].join("|") + ")" + Ce,
                    Te =
                      "(?:" + [we + he + "?", he, Ee, xe, pe].join("|") + ")",
                    De = RegExp("['’]", "g"),
                    Me = RegExp(he, "g"),
                    Ie = RegExp(Ae + "(?=" + Ae + ")|" + Te + Ce, "g"),
                    Ue = RegExp(
                      [
                        Se +
                          "?" +
                          ye +
                          "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" +
                          [fe, Se, "$"].join("|") +
                          ")",
                        ke +
                          "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" +
                          [fe, Se + Ne, "$"].join("|") +
                          ")",
                        Se + "?" + Ne + "+(?:['’](?:d|ll|m|re|s|t|ve))?",
                        Se + "+(?:['’](?:D|LL|M|RE|S|T|VE))?",
                        "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                        "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                        ge,
                        je
                      ].join("|"),
                      "g"
                    ),
                    Fe = RegExp(
                      "[\\u200d\\ud800-\\udfff" + de + "\\ufe0e\\ufe0f]"
                    ),
                    Pe = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                    Re = [
                      "Array",
                      "Buffer",
                      "DataView",
                      "Date",
                      "Error",
                      "Float32Array",
                      "Float64Array",
                      "Function",
                      "Int8Array",
                      "Int16Array",
                      "Int32Array",
                      "Map",
                      "Math",
                      "Object",
                      "Promise",
                      "RegExp",
                      "Set",
                      "String",
                      "Symbol",
                      "TypeError",
                      "Uint8Array",
                      "Uint8ClampedArray",
                      "Uint16Array",
                      "Uint32Array",
                      "WeakMap",
                      "_",
                      "clearTimeout",
                      "isFinite",
                      "parseInt",
                      "setTimeout"
                    ],
                    He = -1,
                    We = {};
                  (We[S] = We[N] = We[k] = We[O] = We[C] = We[j] = We[
                    "[object Uint8ClampedArray]"
                  ] = We[T] = We[D] = !0),
                    (We[s] = We[c] = We[E] = We[u] = We[x] = We[m] = We[d] = We[
                      _
                    ] = We[f] = We[h] = We[g] = We[v] = We[y] = We[b] = We[
                      w
                    ] = !1);
                  var Ye = {};
                  (Ye[s] = Ye[c] = Ye[E] = Ye[x] = Ye[u] = Ye[m] = Ye[S] = Ye[
                    N
                  ] = Ye[k] = Ye[O] = Ye[C] = Ye[f] = Ye[h] = Ye[g] = Ye[
                    v
                  ] = Ye[y] = Ye[b] = Ye[A] = Ye[j] = Ye[
                    "[object Uint8ClampedArray]"
                  ] = Ye[T] = Ye[D] = !0),
                    (Ye[d] = Ye[_] = Ye[w] = !1);
                  var Le = {
                      "\\": "\\",
                      "'": "'",
                      "\n": "n",
                      "\r": "r",
                      "\u2028": "u2028",
                      "\u2029": "u2029"
                    },
                    Be = parseFloat,
                    ze = parseInt,
                    $e = "object" == typeof e && e && e.Object === Object && e,
                    Ve =
                      "object" == typeof self &&
                      self &&
                      self.Object === Object &&
                      self,
                    qe = $e || Ve || Function("return this")(),
                    Ke = t && !t.nodeType && t,
                    Ge = Ke && "object" == typeof r && r && !r.nodeType && r,
                    Je = Ge && Ge.exports === Ke,
                    Ze = Je && $e.process,
                    Qe = (function() {
                      try {
                        var e = Ge && Ge.require && Ge.require("util").types;
                        return e || (Ze && Ze.binding && Ze.binding("util"));
                      } catch (e) {}
                    })(),
                    Xe = Qe && Qe.isArrayBuffer,
                    et = Qe && Qe.isDate,
                    tt = Qe && Qe.isMap,
                    nt = Qe && Qe.isRegExp,
                    rt = Qe && Qe.isSet,
                    at = Qe && Qe.isTypedArray;
                  function it(e, t, n) {
                    switch (n.length) {
                      case 0:
                        return e.call(t);
                      case 1:
                        return e.call(t, n[0]);
                      case 2:
                        return e.call(t, n[0], n[1]);
                      case 3:
                        return e.call(t, n[0], n[1], n[2]);
                    }
                    return e.apply(t, n);
                  }
                  function ot(e, t, n, r) {
                    for (var a = -1, i = null == e ? 0 : e.length; ++a < i; ) {
                      var o = e[a];
                      t(r, o, n(o), e);
                    }
                    return r;
                  }
                  function lt(e, t) {
                    for (
                      var n = -1, r = null == e ? 0 : e.length;
                      ++n < r && !1 !== t(e[n], n, e);

                    );
                    return e;
                  }
                  function st(e, t) {
                    for (
                      var n = null == e ? 0 : e.length;
                      n-- && !1 !== t(e[n], n, e);

                    );
                    return e;
                  }
                  function ct(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                      if (!t(e[n], n, e)) return !1;
                    return !0;
                  }
                  function ut(e, t) {
                    for (
                      var n = -1, r = null == e ? 0 : e.length, a = 0, i = [];
                      ++n < r;

                    ) {
                      var o = e[n];
                      t(o, n, e) && (i[a++] = o);
                    }
                    return i;
                  }
                  function mt(e, t) {
                    return !!(null == e ? 0 : e.length) && At(e, t, 0) > -1;
                  }
                  function dt(e, t, n) {
                    for (var r = -1, a = null == e ? 0 : e.length; ++r < a; )
                      if (n(t, e[r])) return !0;
                    return !1;
                  }
                  function _t(e, t) {
                    for (
                      var n = -1, r = null == e ? 0 : e.length, a = Array(r);
                      ++n < r;

                    )
                      a[n] = t(e[n], n, e);
                    return a;
                  }
                  function pt(e, t) {
                    for (var n = -1, r = t.length, a = e.length; ++n < r; )
                      e[a + n] = t[n];
                    return e;
                  }
                  function ft(e, t, n, r) {
                    var a = -1,
                      i = null == e ? 0 : e.length;
                    for (r && i && (n = e[++a]); ++a < i; )
                      n = t(n, e[a], a, e);
                    return n;
                  }
                  function ht(e, t, n, r) {
                    var a = null == e ? 0 : e.length;
                    for (r && a && (n = e[--a]); a--; ) n = t(n, e[a], a, e);
                    return n;
                  }
                  function gt(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                      if (t(e[n], n, e)) return !0;
                    return !1;
                  }
                  var vt = St("length");
                  function yt(e, t, n) {
                    var r;
                    return (
                      n(e, function(e, n, a) {
                        if (t(e, n, a)) return (r = n), !1;
                      }),
                      r
                    );
                  }
                  function bt(e, t, n, r) {
                    for (
                      var a = e.length, i = n + (r ? 1 : -1);
                      r ? i-- : ++i < a;

                    )
                      if (t(e[i], i, e)) return i;
                    return -1;
                  }
                  function At(e, t, n) {
                    return t == t
                      ? (function(e, t, n) {
                          var r = n - 1,
                            a = e.length;
                          for (; ++r < a; ) if (e[r] === t) return r;
                          return -1;
                        })(e, t, n)
                      : bt(e, Et, n);
                  }
                  function wt(e, t, n, r) {
                    for (var a = n - 1, i = e.length; ++a < i; )
                      if (r(e[a], t)) return a;
                    return -1;
                  }
                  function Et(e) {
                    return e != e;
                  }
                  function xt(e, t) {
                    var n = null == e ? 0 : e.length;
                    return n ? Ot(e, t) / n : NaN;
                  }
                  function St(e) {
                    return function(t) {
                      return null == t ? void 0 : t[e];
                    };
                  }
                  function Nt(e) {
                    return function(t) {
                      return null == e ? void 0 : e[t];
                    };
                  }
                  function kt(e, t, n, r, a) {
                    return (
                      a(e, function(e, a, i) {
                        n = r ? ((r = !1), e) : t(n, e, a, i);
                      }),
                      n
                    );
                  }
                  function Ot(e, t) {
                    for (var n, r = -1, a = e.length; ++r < a; ) {
                      var i = t(e[r]);
                      void 0 !== i && (n = void 0 === n ? i : n + i);
                    }
                    return n;
                  }
                  function Ct(e, t) {
                    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                    return r;
                  }
                  function jt(e) {
                    return function(t) {
                      return e(t);
                    };
                  }
                  function Tt(e, t) {
                    return _t(t, function(t) {
                      return e[t];
                    });
                  }
                  function Dt(e, t) {
                    return e.has(t);
                  }
                  function Mt(e, t) {
                    for (
                      var n = -1, r = e.length;
                      ++n < r && At(t, e[n], 0) > -1;

                    );
                    return n;
                  }
                  function It(e, t) {
                    for (var n = e.length; n-- && At(t, e[n], 0) > -1; );
                    return n;
                  }
                  function Ut(e, t) {
                    for (var n = e.length, r = 0; n--; ) e[n] === t && ++r;
                    return r;
                  }
                  var Ft = Nt({
                      À: "A",
                      Á: "A",
                      Â: "A",
                      Ã: "A",
                      Ä: "A",
                      Å: "A",
                      à: "a",
                      á: "a",
                      â: "a",
                      ã: "a",
                      ä: "a",
                      å: "a",
                      Ç: "C",
                      ç: "c",
                      Ð: "D",
                      ð: "d",
                      È: "E",
                      É: "E",
                      Ê: "E",
                      Ë: "E",
                      è: "e",
                      é: "e",
                      ê: "e",
                      ë: "e",
                      Ì: "I",
                      Í: "I",
                      Î: "I",
                      Ï: "I",
                      ì: "i",
                      í: "i",
                      î: "i",
                      ï: "i",
                      Ñ: "N",
                      ñ: "n",
                      Ò: "O",
                      Ó: "O",
                      Ô: "O",
                      Õ: "O",
                      Ö: "O",
                      Ø: "O",
                      ò: "o",
                      ó: "o",
                      ô: "o",
                      õ: "o",
                      ö: "o",
                      ø: "o",
                      Ù: "U",
                      Ú: "U",
                      Û: "U",
                      Ü: "U",
                      ù: "u",
                      ú: "u",
                      û: "u",
                      ü: "u",
                      Ý: "Y",
                      ý: "y",
                      ÿ: "y",
                      Æ: "Ae",
                      æ: "ae",
                      Þ: "Th",
                      þ: "th",
                      ß: "ss",
                      Ā: "A",
                      Ă: "A",
                      Ą: "A",
                      ā: "a",
                      ă: "a",
                      ą: "a",
                      Ć: "C",
                      Ĉ: "C",
                      Ċ: "C",
                      Č: "C",
                      ć: "c",
                      ĉ: "c",
                      ċ: "c",
                      č: "c",
                      Ď: "D",
                      Đ: "D",
                      ď: "d",
                      đ: "d",
                      Ē: "E",
                      Ĕ: "E",
                      Ė: "E",
                      Ę: "E",
                      Ě: "E",
                      ē: "e",
                      ĕ: "e",
                      ė: "e",
                      ę: "e",
                      ě: "e",
                      Ĝ: "G",
                      Ğ: "G",
                      Ġ: "G",
                      Ģ: "G",
                      ĝ: "g",
                      ğ: "g",
                      ġ: "g",
                      ģ: "g",
                      Ĥ: "H",
                      Ħ: "H",
                      ĥ: "h",
                      ħ: "h",
                      Ĩ: "I",
                      Ī: "I",
                      Ĭ: "I",
                      Į: "I",
                      İ: "I",
                      ĩ: "i",
                      ī: "i",
                      ĭ: "i",
                      į: "i",
                      ı: "i",
                      Ĵ: "J",
                      ĵ: "j",
                      Ķ: "K",
                      ķ: "k",
                      ĸ: "k",
                      Ĺ: "L",
                      Ļ: "L",
                      Ľ: "L",
                      Ŀ: "L",
                      Ł: "L",
                      ĺ: "l",
                      ļ: "l",
                      ľ: "l",
                      ŀ: "l",
                      ł: "l",
                      Ń: "N",
                      Ņ: "N",
                      Ň: "N",
                      Ŋ: "N",
                      ń: "n",
                      ņ: "n",
                      ň: "n",
                      ŋ: "n",
                      Ō: "O",
                      Ŏ: "O",
                      Ő: "O",
                      ō: "o",
                      ŏ: "o",
                      ő: "o",
                      Ŕ: "R",
                      Ŗ: "R",
                      Ř: "R",
                      ŕ: "r",
                      ŗ: "r",
                      ř: "r",
                      Ś: "S",
                      Ŝ: "S",
                      Ş: "S",
                      Š: "S",
                      ś: "s",
                      ŝ: "s",
                      ş: "s",
                      š: "s",
                      Ţ: "T",
                      Ť: "T",
                      Ŧ: "T",
                      ţ: "t",
                      ť: "t",
                      ŧ: "t",
                      Ũ: "U",
                      Ū: "U",
                      Ŭ: "U",
                      Ů: "U",
                      Ű: "U",
                      Ų: "U",
                      ũ: "u",
                      ū: "u",
                      ŭ: "u",
                      ů: "u",
                      ű: "u",
                      ų: "u",
                      Ŵ: "W",
                      ŵ: "w",
                      Ŷ: "Y",
                      ŷ: "y",
                      Ÿ: "Y",
                      Ź: "Z",
                      Ż: "Z",
                      Ž: "Z",
                      ź: "z",
                      ż: "z",
                      ž: "z",
                      Ĳ: "IJ",
                      ĳ: "ij",
                      Œ: "Oe",
                      œ: "oe",
                      ŉ: "'n",
                      ſ: "s"
                    }),
                    Pt = Nt({
                      "&": "&amp;",
                      "<": "&lt;",
                      ">": "&gt;",
                      '"': "&quot;",
                      "'": "&#39;"
                    });
                  function Rt(e) {
                    return "\\" + Le[e];
                  }
                  function Ht(e) {
                    return Fe.test(e);
                  }
                  function Wt(e) {
                    var t = -1,
                      n = Array(e.size);
                    return (
                      e.forEach(function(e, r) {
                        n[++t] = [r, e];
                      }),
                      n
                    );
                  }
                  function Yt(e, t) {
                    return function(n) {
                      return e(t(n));
                    };
                  }
                  function Lt(e, t) {
                    for (var n = -1, r = e.length, a = 0, i = []; ++n < r; ) {
                      var l = e[n];
                      (l !== t && l !== o) || ((e[n] = o), (i[a++] = n));
                    }
                    return i;
                  }
                  function Bt(e) {
                    var t = -1,
                      n = Array(e.size);
                    return (
                      e.forEach(function(e) {
                        n[++t] = e;
                      }),
                      n
                    );
                  }
                  function zt(e) {
                    var t = -1,
                      n = Array(e.size);
                    return (
                      e.forEach(function(e) {
                        n[++t] = [e, e];
                      }),
                      n
                    );
                  }
                  function $t(e) {
                    return Ht(e)
                      ? (function(e) {
                          var t = (Ie.lastIndex = 0);
                          for (; Ie.test(e); ) ++t;
                          return t;
                        })(e)
                      : vt(e);
                  }
                  function Vt(e) {
                    return Ht(e)
                      ? (function(e) {
                          return e.match(Ie) || [];
                        })(e)
                      : (function(e) {
                          return e.split("");
                        })(e);
                  }
                  var qt = Nt({
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                  });
                  var Kt = (function e(t) {
                    var n,
                      r = (t =
                        null == t
                          ? qe
                          : Kt.defaults(qe.Object(), t, Kt.pick(qe, Re))).Array,
                      a = t.Date,
                      de = t.Error,
                      _e = t.Function,
                      pe = t.Math,
                      fe = t.Object,
                      he = t.RegExp,
                      ge = t.String,
                      ve = t.TypeError,
                      ye = r.prototype,
                      be = _e.prototype,
                      Ae = fe.prototype,
                      we = t["__core-js_shared__"],
                      Ee = be.toString,
                      xe = Ae.hasOwnProperty,
                      Se = 0,
                      Ne = (n = /[^.]+$/.exec(
                        (we && we.keys && we.keys.IE_PROTO) || ""
                      ))
                        ? "Symbol(src)_1." + n
                        : "",
                      ke = Ae.toString,
                      Oe = Ee.call(fe),
                      Ce = qe._,
                      je = he(
                        "^" +
                          Ee.call(xe)
                            .replace(V, "\\$&")
                            .replace(
                              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                              "$1.*?"
                            ) +
                          "$"
                      ),
                      Te = Je ? t.Buffer : void 0,
                      Ie = t.Symbol,
                      Fe = t.Uint8Array,
                      Le = Te ? Te.allocUnsafe : void 0,
                      $e = Yt(fe.getPrototypeOf, fe),
                      Ve = fe.create,
                      Ke = Ae.propertyIsEnumerable,
                      Ge = ye.splice,
                      Ze = Ie ? Ie.isConcatSpreadable : void 0,
                      Qe = Ie ? Ie.iterator : void 0,
                      vt = Ie ? Ie.toStringTag : void 0,
                      Nt = (function() {
                        try {
                          var e = Xa(fe, "defineProperty");
                          return e({}, "", {}), e;
                        } catch (e) {}
                      })(),
                      Gt = t.clearTimeout !== qe.clearTimeout && t.clearTimeout,
                      Jt = a && a.now !== qe.Date.now && a.now,
                      Zt = t.setTimeout !== qe.setTimeout && t.setTimeout,
                      Qt = pe.ceil,
                      Xt = pe.floor,
                      en = fe.getOwnPropertySymbols,
                      tn = Te ? Te.isBuffer : void 0,
                      nn = t.isFinite,
                      rn = ye.join,
                      an = Yt(fe.keys, fe),
                      on = pe.max,
                      ln = pe.min,
                      sn = a.now,
                      cn = t.parseInt,
                      un = pe.random,
                      mn = ye.reverse,
                      dn = Xa(t, "DataView"),
                      _n = Xa(t, "Map"),
                      pn = Xa(t, "Promise"),
                      fn = Xa(t, "Set"),
                      hn = Xa(t, "WeakMap"),
                      gn = Xa(fe, "create"),
                      vn = hn && new hn(),
                      yn = {},
                      bn = Ni(dn),
                      An = Ni(_n),
                      wn = Ni(pn),
                      En = Ni(fn),
                      xn = Ni(hn),
                      Sn = Ie ? Ie.prototype : void 0,
                      Nn = Sn ? Sn.valueOf : void 0,
                      kn = Sn ? Sn.toString : void 0;
                    function On(e) {
                      if (zo(e) && !Mo(e) && !(e instanceof Dn)) {
                        if (e instanceof Tn) return e;
                        if (xe.call(e, "__wrapped__")) return ki(e);
                      }
                      return new Tn(e);
                    }
                    var Cn = (function() {
                      function e() {}
                      return function(t) {
                        if (!Bo(t)) return {};
                        if (Ve) return Ve(t);
                        e.prototype = t;
                        var n = new e();
                        return (e.prototype = void 0), n;
                      };
                    })();
                    function jn() {}
                    function Tn(e, t) {
                      (this.__wrapped__ = e),
                        (this.__actions__ = []),
                        (this.__chain__ = !!t),
                        (this.__index__ = 0),
                        (this.__values__ = void 0);
                    }
                    function Dn(e) {
                      (this.__wrapped__ = e),
                        (this.__actions__ = []),
                        (this.__dir__ = 1),
                        (this.__filtered__ = !1),
                        (this.__iteratees__ = []),
                        (this.__takeCount__ = 4294967295),
                        (this.__views__ = []);
                    }
                    function Mn(e) {
                      var t = -1,
                        n = null == e ? 0 : e.length;
                      for (this.clear(); ++t < n; ) {
                        var r = e[t];
                        this.set(r[0], r[1]);
                      }
                    }
                    function In(e) {
                      var t = -1,
                        n = null == e ? 0 : e.length;
                      for (this.clear(); ++t < n; ) {
                        var r = e[t];
                        this.set(r[0], r[1]);
                      }
                    }
                    function Un(e) {
                      var t = -1,
                        n = null == e ? 0 : e.length;
                      for (this.clear(); ++t < n; ) {
                        var r = e[t];
                        this.set(r[0], r[1]);
                      }
                    }
                    function Fn(e) {
                      var t = -1,
                        n = null == e ? 0 : e.length;
                      for (this.__data__ = new Un(); ++t < n; ) this.add(e[t]);
                    }
                    function Pn(e) {
                      var t = (this.__data__ = new In(e));
                      this.size = t.size;
                    }
                    function Rn(e, t) {
                      var n = Mo(e),
                        r = !n && Do(e),
                        a = !n && !r && Po(e),
                        i = !n && !r && !a && Qo(e),
                        o = n || r || a || i,
                        l = o ? Ct(e.length, ge) : [],
                        s = l.length;
                      for (var c in e)
                        (!t && !xe.call(e, c)) ||
                          (o &&
                            ("length" == c ||
                              (a && ("offset" == c || "parent" == c)) ||
                              (i &&
                                ("buffer" == c ||
                                  "byteLength" == c ||
                                  "byteOffset" == c)) ||
                              oi(c, s))) ||
                          l.push(c);
                      return l;
                    }
                    function Hn(e) {
                      var t = e.length;
                      return t ? e[Fr(0, t - 1)] : void 0;
                    }
                    function Wn(e, t) {
                      return Ei(ga(e), Gn(t, 0, e.length));
                    }
                    function Yn(e) {
                      return Ei(ga(e));
                    }
                    function Ln(e, t, n) {
                      ((void 0 === n || Co(e[t], n)) &&
                        (void 0 !== n || t in e)) ||
                        qn(e, t, n);
                    }
                    function Bn(e, t, n) {
                      var r = e[t];
                      (xe.call(e, t) && Co(r, n) && (void 0 !== n || t in e)) ||
                        qn(e, t, n);
                    }
                    function zn(e, t) {
                      for (var n = e.length; n--; )
                        if (Co(e[n][0], t)) return n;
                      return -1;
                    }
                    function $n(e, t, n, r) {
                      return (
                        er(e, function(e, a, i) {
                          t(r, e, n(e), i);
                        }),
                        r
                      );
                    }
                    function Vn(e, t) {
                      return e && va(t, bl(t), e);
                    }
                    function qn(e, t, n) {
                      "__proto__" == t && Nt
                        ? Nt(e, t, {
                            configurable: !0,
                            enumerable: !0,
                            value: n,
                            writable: !0
                          })
                        : (e[t] = n);
                    }
                    function Kn(e, t) {
                      for (
                        var n = -1, a = t.length, i = r(a), o = null == e;
                        ++n < a;

                      )
                        i[n] = o ? void 0 : fl(e, t[n]);
                      return i;
                    }
                    function Gn(e, t, n) {
                      return (
                        e == e &&
                          (void 0 !== n && (e = e <= n ? e : n),
                          void 0 !== t && (e = e >= t ? e : t)),
                        e
                      );
                    }
                    function Jn(e, t, n, r, a, i) {
                      var o,
                        l = 1 & t,
                        c = 2 & t,
                        d = 4 & t;
                      if ((n && (o = a ? n(e, r, a, i) : n(e)), void 0 !== o))
                        return o;
                      if (!Bo(e)) return e;
                      var w = Mo(e);
                      if (w) {
                        if (
                          ((o = (function(e) {
                            var t = e.length,
                              n = new e.constructor(t);
                            t &&
                              "string" == typeof e[0] &&
                              xe.call(e, "index") &&
                              ((n.index = e.index), (n.input = e.input));
                            return n;
                          })(e)),
                          !l)
                        )
                          return ga(e, o);
                      } else {
                        var M = ni(e),
                          I = M == _ || M == p;
                        if (Po(e)) return ma(e, l);
                        if (M == g || M == s || (I && !a)) {
                          if (((o = c || I ? {} : ai(e)), !l))
                            return c
                              ? (function(e, t) {
                                  return va(e, ti(e), t);
                                })(
                                  e,
                                  (function(e, t) {
                                    return e && va(t, Al(t), e);
                                  })(o, e)
                                )
                              : (function(e, t) {
                                  return va(e, ei(e), t);
                                })(e, Vn(o, e));
                        } else {
                          if (!Ye[M]) return a ? e : {};
                          o = (function(e, t, n) {
                            var r = e.constructor;
                            switch (t) {
                              case E:
                                return da(e);
                              case u:
                              case m:
                                return new r(+e);
                              case x:
                                return (function(e, t) {
                                  var n = t ? da(e.buffer) : e.buffer;
                                  return new e.constructor(
                                    n,
                                    e.byteOffset,
                                    e.byteLength
                                  );
                                })(e, n);
                              case S:
                              case N:
                              case k:
                              case O:
                              case C:
                              case j:
                              case "[object Uint8ClampedArray]":
                              case T:
                              case D:
                                return _a(e, n);
                              case f:
                                return new r();
                              case h:
                              case b:
                                return new r(e);
                              case v:
                                return (function(e) {
                                  var t = new e.constructor(
                                    e.source,
                                    re.exec(e)
                                  );
                                  return (t.lastIndex = e.lastIndex), t;
                                })(e);
                              case y:
                                return new r();
                              case A:
                                return (a = e), Nn ? fe(Nn.call(a)) : {};
                            }
                            var a;
                          })(e, M, l);
                        }
                      }
                      i || (i = new Pn());
                      var U = i.get(e);
                      if (U) return U;
                      i.set(e, o),
                        Go(e)
                          ? e.forEach(function(r) {
                              o.add(Jn(r, t, n, r, e, i));
                            })
                          : $o(e) &&
                            e.forEach(function(r, a) {
                              o.set(a, Jn(r, t, n, a, e, i));
                            });
                      var F = w ? void 0 : (d ? (c ? Va : $a) : c ? Al : bl)(e);
                      return (
                        lt(F || e, function(r, a) {
                          F && (r = e[(a = r)]), Bn(o, a, Jn(r, t, n, a, e, i));
                        }),
                        o
                      );
                    }
                    function Zn(e, t, n) {
                      var r = n.length;
                      if (null == e) return !r;
                      for (e = fe(e); r--; ) {
                        var a = n[r],
                          i = t[a],
                          o = e[a];
                        if ((void 0 === o && !(a in e)) || !i(o)) return !1;
                      }
                      return !0;
                    }
                    function Qn(e, t, n) {
                      if ("function" != typeof e) throw new ve(i);
                      return yi(function() {
                        e.apply(void 0, n);
                      }, t);
                    }
                    function Xn(e, t, n, r) {
                      var a = -1,
                        i = mt,
                        o = !0,
                        l = e.length,
                        s = [],
                        c = t.length;
                      if (!l) return s;
                      n && (t = _t(t, jt(n))),
                        r
                          ? ((i = dt), (o = !1))
                          : t.length >= 200 &&
                            ((i = Dt), (o = !1), (t = new Fn(t)));
                      e: for (; ++a < l; ) {
                        var u = e[a],
                          m = null == n ? u : n(u);
                        if (((u = r || 0 !== u ? u : 0), o && m == m)) {
                          for (var d = c; d--; ) if (t[d] === m) continue e;
                          s.push(u);
                        } else i(t, m, r) || s.push(u);
                      }
                      return s;
                    }
                    (On.templateSettings = {
                      escape: W,
                      evaluate: Y,
                      interpolate: L,
                      variable: "",
                      imports: { _: On }
                    }),
                      (On.prototype = jn.prototype),
                      (On.prototype.constructor = On),
                      (Tn.prototype = Cn(jn.prototype)),
                      (Tn.prototype.constructor = Tn),
                      (Dn.prototype = Cn(jn.prototype)),
                      (Dn.prototype.constructor = Dn),
                      (Mn.prototype.clear = function() {
                        (this.__data__ = gn ? gn(null) : {}), (this.size = 0);
                      }),
                      (Mn.prototype.delete = function(e) {
                        var t = this.has(e) && delete this.__data__[e];
                        return (this.size -= t ? 1 : 0), t;
                      }),
                      (Mn.prototype.get = function(e) {
                        var t = this.__data__;
                        if (gn) {
                          var n = t[e];
                          return "__lodash_hash_undefined__" === n ? void 0 : n;
                        }
                        return xe.call(t, e) ? t[e] : void 0;
                      }),
                      (Mn.prototype.has = function(e) {
                        var t = this.__data__;
                        return gn ? void 0 !== t[e] : xe.call(t, e);
                      }),
                      (Mn.prototype.set = function(e, t) {
                        var n = this.__data__;
                        return (
                          (this.size += this.has(e) ? 0 : 1),
                          (n[e] =
                            gn && void 0 === t
                              ? "__lodash_hash_undefined__"
                              : t),
                          this
                        );
                      }),
                      (In.prototype.clear = function() {
                        (this.__data__ = []), (this.size = 0);
                      }),
                      (In.prototype.delete = function(e) {
                        var t = this.__data__,
                          n = zn(t, e);
                        return (
                          !(n < 0) &&
                          (n == t.length - 1 ? t.pop() : Ge.call(t, n, 1),
                          --this.size,
                          !0)
                        );
                      }),
                      (In.prototype.get = function(e) {
                        var t = this.__data__,
                          n = zn(t, e);
                        return n < 0 ? void 0 : t[n][1];
                      }),
                      (In.prototype.has = function(e) {
                        return zn(this.__data__, e) > -1;
                      }),
                      (In.prototype.set = function(e, t) {
                        var n = this.__data__,
                          r = zn(n, e);
                        return (
                          r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t),
                          this
                        );
                      }),
                      (Un.prototype.clear = function() {
                        (this.size = 0),
                          (this.__data__ = {
                            hash: new Mn(),
                            map: new (_n || In)(),
                            string: new Mn()
                          });
                      }),
                      (Un.prototype.delete = function(e) {
                        var t = Za(this, e).delete(e);
                        return (this.size -= t ? 1 : 0), t;
                      }),
                      (Un.prototype.get = function(e) {
                        return Za(this, e).get(e);
                      }),
                      (Un.prototype.has = function(e) {
                        return Za(this, e).has(e);
                      }),
                      (Un.prototype.set = function(e, t) {
                        var n = Za(this, e),
                          r = n.size;
                        return (
                          n.set(e, t), (this.size += n.size == r ? 0 : 1), this
                        );
                      }),
                      (Fn.prototype.add = Fn.prototype.push = function(e) {
                        return (
                          this.__data__.set(e, "__lodash_hash_undefined__"),
                          this
                        );
                      }),
                      (Fn.prototype.has = function(e) {
                        return this.__data__.has(e);
                      }),
                      (Pn.prototype.clear = function() {
                        (this.__data__ = new In()), (this.size = 0);
                      }),
                      (Pn.prototype.delete = function(e) {
                        var t = this.__data__,
                          n = t.delete(e);
                        return (this.size = t.size), n;
                      }),
                      (Pn.prototype.get = function(e) {
                        return this.__data__.get(e);
                      }),
                      (Pn.prototype.has = function(e) {
                        return this.__data__.has(e);
                      }),
                      (Pn.prototype.set = function(e, t) {
                        var n = this.__data__;
                        if (n instanceof In) {
                          var r = n.__data__;
                          if (!_n || r.length < 199)
                            return r.push([e, t]), (this.size = ++n.size), this;
                          n = this.__data__ = new Un(r);
                        }
                        return n.set(e, t), (this.size = n.size), this;
                      });
                    var er = Aa(sr),
                      tr = Aa(cr, !0);
                    function nr(e, t) {
                      var n = !0;
                      return (
                        er(e, function(e, r, a) {
                          return (n = !!t(e, r, a));
                        }),
                        n
                      );
                    }
                    function rr(e, t, n) {
                      for (var r = -1, a = e.length; ++r < a; ) {
                        var i = e[r],
                          o = t(i);
                        if (
                          null != o &&
                          (void 0 === l ? o == o && !Zo(o) : n(o, l))
                        )
                          var l = o,
                            s = i;
                      }
                      return s;
                    }
                    function ar(e, t) {
                      var n = [];
                      return (
                        er(e, function(e, r, a) {
                          t(e, r, a) && n.push(e);
                        }),
                        n
                      );
                    }
                    function ir(e, t, n, r, a) {
                      var i = -1,
                        o = e.length;
                      for (n || (n = ii), a || (a = []); ++i < o; ) {
                        var l = e[i];
                        t > 0 && n(l)
                          ? t > 1
                            ? ir(l, t - 1, n, r, a)
                            : pt(a, l)
                          : r || (a[a.length] = l);
                      }
                      return a;
                    }
                    var or = wa(),
                      lr = wa(!0);
                    function sr(e, t) {
                      return e && or(e, t, bl);
                    }
                    function cr(e, t) {
                      return e && lr(e, t, bl);
                    }
                    function ur(e, t) {
                      return ut(t, function(t) {
                        return Wo(e[t]);
                      });
                    }
                    function mr(e, t) {
                      for (
                        var n = 0, r = (t = la(t, e)).length;
                        null != e && n < r;

                      )
                        e = e[Si(t[n++])];
                      return n && n == r ? e : void 0;
                    }
                    function dr(e, t, n) {
                      var r = t(e);
                      return Mo(e) ? r : pt(r, n(e));
                    }
                    function _r(e) {
                      return null == e
                        ? void 0 === e
                          ? "[object Undefined]"
                          : "[object Null]"
                        : vt && vt in fe(e)
                        ? (function(e) {
                            var t = xe.call(e, vt),
                              n = e[vt];
                            try {
                              e[vt] = void 0;
                              var r = !0;
                            } catch (e) {}
                            var a = ke.call(e);
                            r && (t ? (e[vt] = n) : delete e[vt]);
                            return a;
                          })(e)
                        : (function(e) {
                            return ke.call(e);
                          })(e);
                    }
                    function pr(e, t) {
                      return e > t;
                    }
                    function fr(e, t) {
                      return null != e && xe.call(e, t);
                    }
                    function hr(e, t) {
                      return null != e && t in fe(e);
                    }
                    function gr(e, t, n) {
                      for (
                        var a = n ? dt : mt,
                          i = e[0].length,
                          o = e.length,
                          l = o,
                          s = r(o),
                          c = 1 / 0,
                          u = [];
                        l--;

                      ) {
                        var m = e[l];
                        l && t && (m = _t(m, jt(t))),
                          (c = ln(m.length, c)),
                          (s[l] =
                            !n && (t || (i >= 120 && m.length >= 120))
                              ? new Fn(l && m)
                              : void 0);
                      }
                      m = e[0];
                      var d = -1,
                        _ = s[0];
                      e: for (; ++d < i && u.length < c; ) {
                        var p = m[d],
                          f = t ? t(p) : p;
                        if (
                          ((p = n || 0 !== p ? p : 0),
                          !(_ ? Dt(_, f) : a(u, f, n)))
                        ) {
                          for (l = o; --l; ) {
                            var h = s[l];
                            if (!(h ? Dt(h, f) : a(e[l], f, n))) continue e;
                          }
                          _ && _.push(f), u.push(p);
                        }
                      }
                      return u;
                    }
                    function vr(e, t, n) {
                      var r =
                        null == (e = fi(e, (t = la(t, e)))) ? e : e[Si(Ri(t))];
                      return null == r ? void 0 : it(r, e, n);
                    }
                    function yr(e) {
                      return zo(e) && _r(e) == s;
                    }
                    function br(e, t, n, r, a) {
                      return (
                        e === t ||
                        (null == e || null == t || (!zo(e) && !zo(t))
                          ? e != e && t != t
                          : (function(e, t, n, r, a, i) {
                              var o = Mo(e),
                                l = Mo(t),
                                _ = o ? c : ni(e),
                                p = l ? c : ni(t),
                                w = (_ = _ == s ? g : _) == g,
                                S = (p = p == s ? g : p) == g,
                                N = _ == p;
                              if (N && Po(e)) {
                                if (!Po(t)) return !1;
                                (o = !0), (w = !1);
                              }
                              if (N && !w)
                                return (
                                  i || (i = new Pn()),
                                  o || Qo(e)
                                    ? Ba(e, t, n, r, a, i)
                                    : (function(e, t, n, r, a, i, o) {
                                        switch (n) {
                                          case x:
                                            if (
                                              e.byteLength != t.byteLength ||
                                              e.byteOffset != t.byteOffset
                                            )
                                              return !1;
                                            (e = e.buffer), (t = t.buffer);
                                          case E:
                                            return !(
                                              e.byteLength != t.byteLength ||
                                              !i(new Fe(e), new Fe(t))
                                            );
                                          case u:
                                          case m:
                                          case h:
                                            return Co(+e, +t);
                                          case d:
                                            return (
                                              e.name == t.name &&
                                              e.message == t.message
                                            );
                                          case v:
                                          case b:
                                            return e == t + "";
                                          case f:
                                            var l = Wt;
                                          case y:
                                            var s = 1 & r;
                                            if (
                                              (l || (l = Bt),
                                              e.size != t.size && !s)
                                            )
                                              return !1;
                                            var c = o.get(e);
                                            if (c) return c == t;
                                            (r |= 2), o.set(e, t);
                                            var _ = Ba(l(e), l(t), r, a, i, o);
                                            return o.delete(e), _;
                                          case A:
                                            if (Nn)
                                              return Nn.call(e) == Nn.call(t);
                                        }
                                        return !1;
                                      })(e, t, _, n, r, a, i)
                                );
                              if (!(1 & n)) {
                                var k = w && xe.call(e, "__wrapped__"),
                                  O = S && xe.call(t, "__wrapped__");
                                if (k || O) {
                                  var C = k ? e.value() : e,
                                    j = O ? t.value() : t;
                                  return i || (i = new Pn()), a(C, j, n, r, i);
                                }
                              }
                              if (!N) return !1;
                              return (
                                i || (i = new Pn()),
                                (function(e, t, n, r, a, i) {
                                  var o = 1 & n,
                                    l = $a(e),
                                    s = l.length,
                                    c = $a(t).length;
                                  if (s != c && !o) return !1;
                                  var u = s;
                                  for (; u--; ) {
                                    var m = l[u];
                                    if (!(o ? m in t : xe.call(t, m)))
                                      return !1;
                                  }
                                  var d = i.get(e);
                                  if (d && i.get(t)) return d == t;
                                  var _ = !0;
                                  i.set(e, t), i.set(t, e);
                                  var p = o;
                                  for (; ++u < s; ) {
                                    m = l[u];
                                    var f = e[m],
                                      h = t[m];
                                    if (r)
                                      var g = o
                                        ? r(h, f, m, t, e, i)
                                        : r(f, h, m, e, t, i);
                                    if (
                                      !(void 0 === g
                                        ? f === h || a(f, h, n, r, i)
                                        : g)
                                    ) {
                                      _ = !1;
                                      break;
                                    }
                                    p || (p = "constructor" == m);
                                  }
                                  if (_ && !p) {
                                    var v = e.constructor,
                                      y = t.constructor;
                                    v != y &&
                                      "constructor" in e &&
                                      "constructor" in t &&
                                      !(
                                        "function" == typeof v &&
                                        v instanceof v &&
                                        "function" == typeof y &&
                                        y instanceof y
                                      ) &&
                                      (_ = !1);
                                  }
                                  return i.delete(e), i.delete(t), _;
                                })(e, t, n, r, a, i)
                              );
                            })(e, t, n, r, br, a))
                      );
                    }
                    function Ar(e, t, n, r) {
                      var a = n.length,
                        i = a,
                        o = !r;
                      if (null == e) return !i;
                      for (e = fe(e); a--; ) {
                        var l = n[a];
                        if (o && l[2] ? l[1] !== e[l[0]] : !(l[0] in e))
                          return !1;
                      }
                      for (; ++a < i; ) {
                        var s = (l = n[a])[0],
                          c = e[s],
                          u = l[1];
                        if (o && l[2]) {
                          if (void 0 === c && !(s in e)) return !1;
                        } else {
                          var m = new Pn();
                          if (r) var d = r(c, u, s, e, t, m);
                          if (!(void 0 === d ? br(u, c, 3, r, m) : d))
                            return !1;
                        }
                      }
                      return !0;
                    }
                    function wr(e) {
                      return (
                        !(!Bo(e) || ((t = e), Ne && Ne in t)) &&
                        (Wo(e) ? je : oe).test(Ni(e))
                      );
                      var t;
                    }
                    function Er(e) {
                      return "function" == typeof e
                        ? e
                        : null == e
                        ? Vl
                        : "object" == typeof e
                        ? Mo(e)
                          ? Cr(e[0], e[1])
                          : Or(e)
                        : ts(e);
                    }
                    function xr(e) {
                      if (!mi(e)) return an(e);
                      var t = [];
                      for (var n in fe(e))
                        xe.call(e, n) && "constructor" != n && t.push(n);
                      return t;
                    }
                    function Sr(e) {
                      if (!Bo(e))
                        return (function(e) {
                          var t = [];
                          if (null != e) for (var n in fe(e)) t.push(n);
                          return t;
                        })(e);
                      var t = mi(e),
                        n = [];
                      for (var r in e)
                        ("constructor" != r || (!t && xe.call(e, r))) &&
                          n.push(r);
                      return n;
                    }
                    function Nr(e, t) {
                      return e < t;
                    }
                    function kr(e, t) {
                      var n = -1,
                        a = Uo(e) ? r(e.length) : [];
                      return (
                        er(e, function(e, r, i) {
                          a[++n] = t(e, r, i);
                        }),
                        a
                      );
                    }
                    function Or(e) {
                      var t = Qa(e);
                      return 1 == t.length && t[0][2]
                        ? _i(t[0][0], t[0][1])
                        : function(n) {
                            return n === e || Ar(n, e, t);
                          };
                    }
                    function Cr(e, t) {
                      return si(e) && di(t)
                        ? _i(Si(e), t)
                        : function(n) {
                            var r = fl(n, e);
                            return void 0 === r && r === t
                              ? hl(n, e)
                              : br(t, r, 3);
                          };
                    }
                    function jr(e, t, n, r, a) {
                      e !== t &&
                        or(
                          t,
                          function(i, o) {
                            if ((a || (a = new Pn()), Bo(i)))
                              !(function(e, t, n, r, a, i, o) {
                                var l = gi(e, n),
                                  s = gi(t, n),
                                  c = o.get(s);
                                if (c) return void Ln(e, n, c);
                                var u = i ? i(l, s, n + "", e, t, o) : void 0,
                                  m = void 0 === u;
                                if (m) {
                                  var d = Mo(s),
                                    _ = !d && Po(s),
                                    p = !d && !_ && Qo(s);
                                  (u = s),
                                    d || _ || p
                                      ? Mo(l)
                                        ? (u = l)
                                        : Fo(l)
                                        ? (u = ga(l))
                                        : _
                                        ? ((m = !1), (u = ma(s, !0)))
                                        : p
                                        ? ((m = !1), (u = _a(s, !0)))
                                        : (u = [])
                                      : qo(s) || Do(s)
                                      ? ((u = l),
                                        Do(l)
                                          ? (u = ol(l))
                                          : (Bo(l) && !Wo(l)) || (u = ai(s)))
                                      : (m = !1);
                                }
                                m &&
                                  (o.set(s, u), a(u, s, r, i, o), o.delete(s));
                                Ln(e, n, u);
                              })(e, t, o, n, jr, r, a);
                            else {
                              var l = r
                                ? r(gi(e, o), i, o + "", e, t, a)
                                : void 0;
                              void 0 === l && (l = i), Ln(e, o, l);
                            }
                          },
                          Al
                        );
                    }
                    function Tr(e, t) {
                      var n = e.length;
                      if (n) return oi((t += t < 0 ? n : 0), n) ? e[t] : void 0;
                    }
                    function Dr(e, t, n) {
                      var r = -1;
                      return (
                        (t = _t(t.length ? t : [Vl], jt(Ja()))),
                        (function(e, t) {
                          var n = e.length;
                          for (e.sort(t); n--; ) e[n] = e[n].value;
                          return e;
                        })(
                          kr(e, function(e, n, a) {
                            return {
                              criteria: _t(t, function(t) {
                                return t(e);
                              }),
                              index: ++r,
                              value: e
                            };
                          }),
                          function(e, t) {
                            return (function(e, t, n) {
                              var r = -1,
                                a = e.criteria,
                                i = t.criteria,
                                o = a.length,
                                l = n.length;
                              for (; ++r < o; ) {
                                var s = pa(a[r], i[r]);
                                if (s) {
                                  if (r >= l) return s;
                                  var c = n[r];
                                  return s * ("desc" == c ? -1 : 1);
                                }
                              }
                              return e.index - t.index;
                            })(e, t, n);
                          }
                        )
                      );
                    }
                    function Mr(e, t, n) {
                      for (var r = -1, a = t.length, i = {}; ++r < a; ) {
                        var o = t[r],
                          l = mr(e, o);
                        n(l, o) && Yr(i, la(o, e), l);
                      }
                      return i;
                    }
                    function Ir(e, t, n, r) {
                      var a = r ? wt : At,
                        i = -1,
                        o = t.length,
                        l = e;
                      for (
                        e === t && (t = ga(t)), n && (l = _t(e, jt(n)));
                        ++i < o;

                      )
                        for (
                          var s = 0, c = t[i], u = n ? n(c) : c;
                          (s = a(l, u, s, r)) > -1;

                        )
                          l !== e && Ge.call(l, s, 1), Ge.call(e, s, 1);
                      return e;
                    }
                    function Ur(e, t) {
                      for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                        var a = t[n];
                        if (n == r || a !== i) {
                          var i = a;
                          oi(a) ? Ge.call(e, a, 1) : Xr(e, a);
                        }
                      }
                      return e;
                    }
                    function Fr(e, t) {
                      return e + Xt(un() * (t - e + 1));
                    }
                    function Pr(e, t) {
                      var n = "";
                      if (!e || t < 1 || t > 9007199254740991) return n;
                      do {
                        t % 2 && (n += e), (t = Xt(t / 2)) && (e += e);
                      } while (t);
                      return n;
                    }
                    function Rr(e, t) {
                      return bi(pi(e, t, Vl), e + "");
                    }
                    function Hr(e) {
                      return Hn(Cl(e));
                    }
                    function Wr(e, t) {
                      var n = Cl(e);
                      return Ei(n, Gn(t, 0, n.length));
                    }
                    function Yr(e, t, n, r) {
                      if (!Bo(e)) return e;
                      for (
                        var a = -1, i = (t = la(t, e)).length, o = i - 1, l = e;
                        null != l && ++a < i;

                      ) {
                        var s = Si(t[a]),
                          c = n;
                        if (a != o) {
                          var u = l[s];
                          void 0 === (c = r ? r(u, s, l) : void 0) &&
                            (c = Bo(u) ? u : oi(t[a + 1]) ? [] : {});
                        }
                        Bn(l, s, c), (l = l[s]);
                      }
                      return e;
                    }
                    var Lr = vn
                        ? function(e, t) {
                            return vn.set(e, t), e;
                          }
                        : Vl,
                      Br = Nt
                        ? function(e, t) {
                            return Nt(e, "toString", {
                              configurable: !0,
                              enumerable: !1,
                              value: Bl(t),
                              writable: !0
                            });
                          }
                        : Vl;
                    function zr(e) {
                      return Ei(Cl(e));
                    }
                    function $r(e, t, n) {
                      var a = -1,
                        i = e.length;
                      t < 0 && (t = -t > i ? 0 : i + t),
                        (n = n > i ? i : n) < 0 && (n += i),
                        (i = t > n ? 0 : (n - t) >>> 0),
                        (t >>>= 0);
                      for (var o = r(i); ++a < i; ) o[a] = e[a + t];
                      return o;
                    }
                    function Vr(e, t) {
                      var n;
                      return (
                        er(e, function(e, r, a) {
                          return !(n = t(e, r, a));
                        }),
                        !!n
                      );
                    }
                    function qr(e, t, n) {
                      var r = 0,
                        a = null == e ? r : e.length;
                      if ("number" == typeof t && t == t && a <= 2147483647) {
                        for (; r < a; ) {
                          var i = (r + a) >>> 1,
                            o = e[i];
                          null !== o && !Zo(o) && (n ? o <= t : o < t)
                            ? (r = i + 1)
                            : (a = i);
                        }
                        return a;
                      }
                      return Kr(e, t, Vl, n);
                    }
                    function Kr(e, t, n, r) {
                      t = n(t);
                      for (
                        var a = 0,
                          i = null == e ? 0 : e.length,
                          o = t != t,
                          l = null === t,
                          s = Zo(t),
                          c = void 0 === t;
                        a < i;

                      ) {
                        var u = Xt((a + i) / 2),
                          m = n(e[u]),
                          d = void 0 !== m,
                          _ = null === m,
                          p = m == m,
                          f = Zo(m);
                        if (o) var h = r || p;
                        else
                          h = c
                            ? p && (r || d)
                            : l
                            ? p && d && (r || !_)
                            : s
                            ? p && d && !_ && (r || !f)
                            : !_ && !f && (r ? m <= t : m < t);
                        h ? (a = u + 1) : (i = u);
                      }
                      return ln(i, 4294967294);
                    }
                    function Gr(e, t) {
                      for (var n = -1, r = e.length, a = 0, i = []; ++n < r; ) {
                        var o = e[n],
                          l = t ? t(o) : o;
                        if (!n || !Co(l, s)) {
                          var s = l;
                          i[a++] = 0 === o ? 0 : o;
                        }
                      }
                      return i;
                    }
                    function Jr(e) {
                      return "number" == typeof e ? e : Zo(e) ? NaN : +e;
                    }
                    function Zr(e) {
                      if ("string" == typeof e) return e;
                      if (Mo(e)) return _t(e, Zr) + "";
                      if (Zo(e)) return kn ? kn.call(e) : "";
                      var t = e + "";
                      return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                    }
                    function Qr(e, t, n) {
                      var r = -1,
                        a = mt,
                        i = e.length,
                        o = !0,
                        l = [],
                        s = l;
                      if (n) (o = !1), (a = dt);
                      else if (i >= 200) {
                        var c = t ? null : Pa(e);
                        if (c) return Bt(c);
                        (o = !1), (a = Dt), (s = new Fn());
                      } else s = t ? [] : l;
                      e: for (; ++r < i; ) {
                        var u = e[r],
                          m = t ? t(u) : u;
                        if (((u = n || 0 !== u ? u : 0), o && m == m)) {
                          for (var d = s.length; d--; )
                            if (s[d] === m) continue e;
                          t && s.push(m), l.push(u);
                        } else a(s, m, n) || (s !== l && s.push(m), l.push(u));
                      }
                      return l;
                    }
                    function Xr(e, t) {
                      return (
                        null == (e = fi(e, (t = la(t, e)))) ||
                        delete e[Si(Ri(t))]
                      );
                    }
                    function ea(e, t, n, r) {
                      return Yr(e, t, n(mr(e, t)), r);
                    }
                    function ta(e, t, n, r) {
                      for (
                        var a = e.length, i = r ? a : -1;
                        (r ? i-- : ++i < a) && t(e[i], i, e);

                      );
                      return n
                        ? $r(e, r ? 0 : i, r ? i + 1 : a)
                        : $r(e, r ? i + 1 : 0, r ? a : i);
                    }
                    function na(e, t) {
                      var n = e;
                      return (
                        n instanceof Dn && (n = n.value()),
                        ft(
                          t,
                          function(e, t) {
                            return t.func.apply(t.thisArg, pt([e], t.args));
                          },
                          n
                        )
                      );
                    }
                    function ra(e, t, n) {
                      var a = e.length;
                      if (a < 2) return a ? Qr(e[0]) : [];
                      for (var i = -1, o = r(a); ++i < a; )
                        for (var l = e[i], s = -1; ++s < a; )
                          s != i && (o[i] = Xn(o[i] || l, e[s], t, n));
                      return Qr(ir(o, 1), t, n);
                    }
                    function aa(e, t, n) {
                      for (
                        var r = -1, a = e.length, i = t.length, o = {};
                        ++r < a;

                      ) {
                        var l = r < i ? t[r] : void 0;
                        n(o, e[r], l);
                      }
                      return o;
                    }
                    function ia(e) {
                      return Fo(e) ? e : [];
                    }
                    function oa(e) {
                      return "function" == typeof e ? e : Vl;
                    }
                    function la(e, t) {
                      return Mo(e) ? e : si(e, t) ? [e] : xi(ll(e));
                    }
                    var sa = Rr;
                    function ca(e, t, n) {
                      var r = e.length;
                      return (
                        (n = void 0 === n ? r : n),
                        !t && n >= r ? e : $r(e, t, n)
                      );
                    }
                    var ua =
                      Gt ||
                      function(e) {
                        return qe.clearTimeout(e);
                      };
                    function ma(e, t) {
                      if (t) return e.slice();
                      var n = e.length,
                        r = Le ? Le(n) : new e.constructor(n);
                      return e.copy(r), r;
                    }
                    function da(e) {
                      var t = new e.constructor(e.byteLength);
                      return new Fe(t).set(new Fe(e)), t;
                    }
                    function _a(e, t) {
                      var n = t ? da(e.buffer) : e.buffer;
                      return new e.constructor(n, e.byteOffset, e.length);
                    }
                    function pa(e, t) {
                      if (e !== t) {
                        var n = void 0 !== e,
                          r = null === e,
                          a = e == e,
                          i = Zo(e),
                          o = void 0 !== t,
                          l = null === t,
                          s = t == t,
                          c = Zo(t);
                        if (
                          (!l && !c && !i && e > t) ||
                          (i && o && s && !l && !c) ||
                          (r && o && s) ||
                          (!n && s) ||
                          !a
                        )
                          return 1;
                        if (
                          (!r && !i && !c && e < t) ||
                          (c && n && a && !r && !i) ||
                          (l && n && a) ||
                          (!o && a) ||
                          !s
                        )
                          return -1;
                      }
                      return 0;
                    }
                    function fa(e, t, n, a) {
                      for (
                        var i = -1,
                          o = e.length,
                          l = n.length,
                          s = -1,
                          c = t.length,
                          u = on(o - l, 0),
                          m = r(c + u),
                          d = !a;
                        ++s < c;

                      )
                        m[s] = t[s];
                      for (; ++i < l; ) (d || i < o) && (m[n[i]] = e[i]);
                      for (; u--; ) m[s++] = e[i++];
                      return m;
                    }
                    function ha(e, t, n, a) {
                      for (
                        var i = -1,
                          o = e.length,
                          l = -1,
                          s = n.length,
                          c = -1,
                          u = t.length,
                          m = on(o - s, 0),
                          d = r(m + u),
                          _ = !a;
                        ++i < m;

                      )
                        d[i] = e[i];
                      for (var p = i; ++c < u; ) d[p + c] = t[c];
                      for (; ++l < s; ) (_ || i < o) && (d[p + n[l]] = e[i++]);
                      return d;
                    }
                    function ga(e, t) {
                      var n = -1,
                        a = e.length;
                      for (t || (t = r(a)); ++n < a; ) t[n] = e[n];
                      return t;
                    }
                    function va(e, t, n, r) {
                      var a = !n;
                      n || (n = {});
                      for (var i = -1, o = t.length; ++i < o; ) {
                        var l = t[i],
                          s = r ? r(n[l], e[l], l, n, e) : void 0;
                        void 0 === s && (s = e[l]),
                          a ? qn(n, l, s) : Bn(n, l, s);
                      }
                      return n;
                    }
                    function ya(e, t) {
                      return function(n, r) {
                        var a = Mo(n) ? ot : $n,
                          i = t ? t() : {};
                        return a(n, e, Ja(r, 2), i);
                      };
                    }
                    function ba(e) {
                      return Rr(function(t, n) {
                        var r = -1,
                          a = n.length,
                          i = a > 1 ? n[a - 1] : void 0,
                          o = a > 2 ? n[2] : void 0;
                        for (
                          i =
                            e.length > 3 && "function" == typeof i
                              ? (a--, i)
                              : void 0,
                            o &&
                              li(n[0], n[1], o) &&
                              ((i = a < 3 ? void 0 : i), (a = 1)),
                            t = fe(t);
                          ++r < a;

                        ) {
                          var l = n[r];
                          l && e(t, l, r, i);
                        }
                        return t;
                      });
                    }
                    function Aa(e, t) {
                      return function(n, r) {
                        if (null == n) return n;
                        if (!Uo(n)) return e(n, r);
                        for (
                          var a = n.length, i = t ? a : -1, o = fe(n);
                          (t ? i-- : ++i < a) && !1 !== r(o[i], i, o);

                        );
                        return n;
                      };
                    }
                    function wa(e) {
                      return function(t, n, r) {
                        for (
                          var a = -1, i = fe(t), o = r(t), l = o.length;
                          l--;

                        ) {
                          var s = o[e ? l : ++a];
                          if (!1 === n(i[s], s, i)) break;
                        }
                        return t;
                      };
                    }
                    function Ea(e) {
                      return function(t) {
                        var n = Ht((t = ll(t))) ? Vt(t) : void 0,
                          r = n ? n[0] : t.charAt(0),
                          a = n ? ca(n, 1).join("") : t.slice(1);
                        return r[e]() + a;
                      };
                    }
                    function xa(e) {
                      return function(t) {
                        return ft(Wl(Dl(t).replace(De, "")), e, "");
                      };
                    }
                    function Sa(e) {
                      return function() {
                        var t = arguments;
                        switch (t.length) {
                          case 0:
                            return new e();
                          case 1:
                            return new e(t[0]);
                          case 2:
                            return new e(t[0], t[1]);
                          case 3:
                            return new e(t[0], t[1], t[2]);
                          case 4:
                            return new e(t[0], t[1], t[2], t[3]);
                          case 5:
                            return new e(t[0], t[1], t[2], t[3], t[4]);
                          case 6:
                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                          case 7:
                            return new e(
                              t[0],
                              t[1],
                              t[2],
                              t[3],
                              t[4],
                              t[5],
                              t[6]
                            );
                        }
                        var n = Cn(e.prototype),
                          r = e.apply(n, t);
                        return Bo(r) ? r : n;
                      };
                    }
                    function Na(e) {
                      return function(t, n, r) {
                        var a = fe(t);
                        if (!Uo(t)) {
                          var i = Ja(n, 3);
                          (t = bl(t)),
                            (n = function(e) {
                              return i(a[e], e, a);
                            });
                        }
                        var o = e(t, n, r);
                        return o > -1 ? a[i ? t[o] : o] : void 0;
                      };
                    }
                    function ka(e) {
                      return za(function(t) {
                        var n = t.length,
                          r = n,
                          a = Tn.prototype.thru;
                        for (e && t.reverse(); r--; ) {
                          var o = t[r];
                          if ("function" != typeof o) throw new ve(i);
                          if (a && !l && "wrapper" == Ka(o))
                            var l = new Tn([], !0);
                        }
                        for (r = l ? r : n; ++r < n; ) {
                          var s = Ka((o = t[r])),
                            c = "wrapper" == s ? qa(o) : void 0;
                          l =
                            c &&
                            ci(c[0]) &&
                            424 == c[1] &&
                            !c[4].length &&
                            1 == c[9]
                              ? l[Ka(c[0])].apply(l, c[3])
                              : 1 == o.length && ci(o)
                              ? l[s]()
                              : l.thru(o);
                        }
                        return function() {
                          var e = arguments,
                            r = e[0];
                          if (l && 1 == e.length && Mo(r))
                            return l.plant(r).value();
                          for (
                            var a = 0, i = n ? t[a].apply(this, e) : r;
                            ++a < n;

                          )
                            i = t[a].call(this, i);
                          return i;
                        };
                      });
                    }
                    function Oa(e, t, n, a, i, o, l, s, c, u) {
                      var m = 128 & t,
                        d = 1 & t,
                        _ = 2 & t,
                        p = 24 & t,
                        f = 512 & t,
                        h = _ ? void 0 : Sa(e);
                      return function g() {
                        for (var v = arguments.length, y = r(v), b = v; b--; )
                          y[b] = arguments[b];
                        if (p)
                          var A = Ga(g),
                            w = Ut(y, A);
                        if (
                          (a && (y = fa(y, a, i, p)),
                          o && (y = ha(y, o, l, p)),
                          (v -= w),
                          p && v < u)
                        ) {
                          var E = Lt(y, A);
                          return Ua(
                            e,
                            t,
                            Oa,
                            g.placeholder,
                            n,
                            y,
                            E,
                            s,
                            c,
                            u - v
                          );
                        }
                        var x = d ? n : this,
                          S = _ ? x[e] : e;
                        return (
                          (v = y.length),
                          s ? (y = hi(y, s)) : f && v > 1 && y.reverse(),
                          m && c < v && (y.length = c),
                          this &&
                            this !== qe &&
                            this instanceof g &&
                            (S = h || Sa(S)),
                          S.apply(x, y)
                        );
                      };
                    }
                    function Ca(e, t) {
                      return function(n, r) {
                        return (function(e, t, n, r) {
                          return (
                            sr(e, function(e, a, i) {
                              t(r, n(e), a, i);
                            }),
                            r
                          );
                        })(n, e, t(r), {});
                      };
                    }
                    function ja(e, t) {
                      return function(n, r) {
                        var a;
                        if (void 0 === n && void 0 === r) return t;
                        if ((void 0 !== n && (a = n), void 0 !== r)) {
                          if (void 0 === a) return r;
                          "string" == typeof n || "string" == typeof r
                            ? ((n = Zr(n)), (r = Zr(r)))
                            : ((n = Jr(n)), (r = Jr(r))),
                            (a = e(n, r));
                        }
                        return a;
                      };
                    }
                    function Ta(e) {
                      return za(function(t) {
                        return (
                          (t = _t(t, jt(Ja()))),
                          Rr(function(n) {
                            var r = this;
                            return e(t, function(e) {
                              return it(e, r, n);
                            });
                          })
                        );
                      });
                    }
                    function Da(e, t) {
                      var n = (t = void 0 === t ? " " : Zr(t)).length;
                      if (n < 2) return n ? Pr(t, e) : t;
                      var r = Pr(t, Qt(e / $t(t)));
                      return Ht(t) ? ca(Vt(r), 0, e).join("") : r.slice(0, e);
                    }
                    function Ma(e) {
                      return function(t, n, a) {
                        return (
                          a &&
                            "number" != typeof a &&
                            li(t, n, a) &&
                            (n = a = void 0),
                          (t = nl(t)),
                          void 0 === n ? ((n = t), (t = 0)) : (n = nl(n)),
                          (function(e, t, n, a) {
                            for (
                              var i = -1,
                                o = on(Qt((t - e) / (n || 1)), 0),
                                l = r(o);
                              o--;

                            )
                              (l[a ? o : ++i] = e), (e += n);
                            return l;
                          })(
                            t,
                            n,
                            (a = void 0 === a ? (t < n ? 1 : -1) : nl(a)),
                            e
                          )
                        );
                      };
                    }
                    function Ia(e) {
                      return function(t, n) {
                        return (
                          ("string" == typeof t && "string" == typeof n) ||
                            ((t = il(t)), (n = il(n))),
                          e(t, n)
                        );
                      };
                    }
                    function Ua(e, t, n, r, a, i, o, l, s, c) {
                      var u = 8 & t;
                      (t |= u ? 32 : 64),
                        4 & (t &= ~(u ? 64 : 32)) || (t &= -4);
                      var m = [
                          e,
                          t,
                          a,
                          u ? i : void 0,
                          u ? o : void 0,
                          u ? void 0 : i,
                          u ? void 0 : o,
                          l,
                          s,
                          c
                        ],
                        d = n.apply(void 0, m);
                      return (
                        ci(e) && vi(d, m), (d.placeholder = r), Ai(d, e, t)
                      );
                    }
                    function Fa(e) {
                      var t = pe[e];
                      return function(e, n) {
                        if (
                          ((e = il(e)),
                          (n = null == n ? 0 : ln(rl(n), 292)) && nn(e))
                        ) {
                          var r = (ll(e) + "e").split("e");
                          return +(
                            (r = (ll(t(r[0] + "e" + (+r[1] + n))) + "e").split(
                              "e"
                            ))[0] +
                            "e" +
                            (+r[1] - n)
                          );
                        }
                        return t(e);
                      };
                    }
                    var Pa =
                      fn && 1 / Bt(new fn([, -0]))[1] == 1 / 0
                        ? function(e) {
                            return new fn(e);
                          }
                        : Zl;
                    function Ra(e) {
                      return function(t) {
                        var n = ni(t);
                        return n == f
                          ? Wt(t)
                          : n == y
                          ? zt(t)
                          : (function(e, t) {
                              return _t(t, function(t) {
                                return [t, e[t]];
                              });
                            })(t, e(t));
                      };
                    }
                    function Ha(e, t, n, a, l, s, c, u) {
                      var m = 2 & t;
                      if (!m && "function" != typeof e) throw new ve(i);
                      var d = a ? a.length : 0;
                      if (
                        (d || ((t &= -97), (a = l = void 0)),
                        (c = void 0 === c ? c : on(rl(c), 0)),
                        (u = void 0 === u ? u : rl(u)),
                        (d -= l ? l.length : 0),
                        64 & t)
                      ) {
                        var _ = a,
                          p = l;
                        a = l = void 0;
                      }
                      var f = m ? void 0 : qa(e),
                        h = [e, t, n, a, l, _, p, s, c, u];
                      if (
                        (f &&
                          (function(e, t) {
                            var n = e[1],
                              r = t[1],
                              a = n | r,
                              i = a < 131,
                              l =
                                (128 == r && 8 == n) ||
                                (128 == r && 256 == n && e[7].length <= t[8]) ||
                                (384 == r && t[7].length <= t[8] && 8 == n);
                            if (!i && !l) return e;
                            1 & r && ((e[2] = t[2]), (a |= 1 & n ? 0 : 4));
                            var s = t[3];
                            if (s) {
                              var c = e[3];
                              (e[3] = c ? fa(c, s, t[4]) : s),
                                (e[4] = c ? Lt(e[3], o) : t[4]);
                            }
                            (s = t[5]) &&
                              ((c = e[5]),
                              (e[5] = c ? ha(c, s, t[6]) : s),
                              (e[6] = c ? Lt(e[5], o) : t[6]));
                            (s = t[7]) && (e[7] = s);
                            128 & r &&
                              (e[8] = null == e[8] ? t[8] : ln(e[8], t[8]));
                            null == e[9] && (e[9] = t[9]);
                            (e[0] = t[0]), (e[1] = a);
                          })(h, f),
                        (e = h[0]),
                        (t = h[1]),
                        (n = h[2]),
                        (a = h[3]),
                        (l = h[4]),
                        !(u = h[9] =
                          void 0 === h[9]
                            ? m
                              ? 0
                              : e.length
                            : on(h[9] - d, 0)) &&
                          24 & t &&
                          (t &= -25),
                        t && 1 != t)
                      )
                        g =
                          8 == t || 16 == t
                            ? (function(e, t, n) {
                                var a = Sa(e);
                                return function i() {
                                  for (
                                    var o = arguments.length,
                                      l = r(o),
                                      s = o,
                                      c = Ga(i);
                                    s--;

                                  )
                                    l[s] = arguments[s];
                                  var u =
                                    o < 3 && l[0] !== c && l[o - 1] !== c
                                      ? []
                                      : Lt(l, c);
                                  if ((o -= u.length) < n)
                                    return Ua(
                                      e,
                                      t,
                                      Oa,
                                      i.placeholder,
                                      void 0,
                                      l,
                                      u,
                                      void 0,
                                      void 0,
                                      n - o
                                    );
                                  var m =
                                    this && this !== qe && this instanceof i
                                      ? a
                                      : e;
                                  return it(m, this, l);
                                };
                              })(e, t, u)
                            : (32 != t && 33 != t) || l.length
                            ? Oa.apply(void 0, h)
                            : (function(e, t, n, a) {
                                var i = 1 & t,
                                  o = Sa(e);
                                return function t() {
                                  for (
                                    var l = -1,
                                      s = arguments.length,
                                      c = -1,
                                      u = a.length,
                                      m = r(u + s),
                                      d =
                                        this && this !== qe && this instanceof t
                                          ? o
                                          : e;
                                    ++c < u;

                                  )
                                    m[c] = a[c];
                                  for (; s--; ) m[c++] = arguments[++l];
                                  return it(d, i ? n : this, m);
                                };
                              })(e, t, n, a);
                      else
                        var g = (function(e, t, n) {
                          var r = 1 & t,
                            a = Sa(e);
                          return function t() {
                            var i =
                              this && this !== qe && this instanceof t ? a : e;
                            return i.apply(r ? n : this, arguments);
                          };
                        })(e, t, n);
                      return Ai((f ? Lr : vi)(g, h), e, t);
                    }
                    function Wa(e, t, n, r) {
                      return void 0 === e || (Co(e, Ae[n]) && !xe.call(r, n))
                        ? t
                        : e;
                    }
                    function Ya(e, t, n, r, a, i) {
                      return (
                        Bo(e) &&
                          Bo(t) &&
                          (i.set(t, e), jr(e, t, void 0, Ya, i), i.delete(t)),
                        e
                      );
                    }
                    function La(e) {
                      return qo(e) ? void 0 : e;
                    }
                    function Ba(e, t, n, r, a, i) {
                      var o = 1 & n,
                        l = e.length,
                        s = t.length;
                      if (l != s && !(o && s > l)) return !1;
                      var c = i.get(e);
                      if (c && i.get(t)) return c == t;
                      var u = -1,
                        m = !0,
                        d = 2 & n ? new Fn() : void 0;
                      for (i.set(e, t), i.set(t, e); ++u < l; ) {
                        var _ = e[u],
                          p = t[u];
                        if (r)
                          var f = o ? r(p, _, u, t, e, i) : r(_, p, u, e, t, i);
                        if (void 0 !== f) {
                          if (f) continue;
                          m = !1;
                          break;
                        }
                        if (d) {
                          if (
                            !gt(t, function(e, t) {
                              if (!Dt(d, t) && (_ === e || a(_, e, n, r, i)))
                                return d.push(t);
                            })
                          ) {
                            m = !1;
                            break;
                          }
                        } else if (_ !== p && !a(_, p, n, r, i)) {
                          m = !1;
                          break;
                        }
                      }
                      return i.delete(e), i.delete(t), m;
                    }
                    function za(e) {
                      return bi(pi(e, void 0, Mi), e + "");
                    }
                    function $a(e) {
                      return dr(e, bl, ei);
                    }
                    function Va(e) {
                      return dr(e, Al, ti);
                    }
                    var qa = vn
                      ? function(e) {
                          return vn.get(e);
                        }
                      : Zl;
                    function Ka(e) {
                      for (
                        var t = e.name + "",
                          n = yn[t],
                          r = xe.call(yn, t) ? n.length : 0;
                        r--;

                      ) {
                        var a = n[r],
                          i = a.func;
                        if (null == i || i == e) return a.name;
                      }
                      return t;
                    }
                    function Ga(e) {
                      return (xe.call(On, "placeholder") ? On : e).placeholder;
                    }
                    function Ja() {
                      var e = On.iteratee || ql;
                      return (
                        (e = e === ql ? Er : e),
                        arguments.length ? e(arguments[0], arguments[1]) : e
                      );
                    }
                    function Za(e, t) {
                      var n,
                        r,
                        a = e.__data__;
                      return ("string" == (r = typeof (n = t)) ||
                      "number" == r ||
                      "symbol" == r ||
                      "boolean" == r
                      ? "__proto__" !== n
                      : null === n)
                        ? a["string" == typeof t ? "string" : "hash"]
                        : a.map;
                    }
                    function Qa(e) {
                      for (var t = bl(e), n = t.length; n--; ) {
                        var r = t[n],
                          a = e[r];
                        t[n] = [r, a, di(a)];
                      }
                      return t;
                    }
                    function Xa(e, t) {
                      var n = (function(e, t) {
                        return null == e ? void 0 : e[t];
                      })(e, t);
                      return wr(n) ? n : void 0;
                    }
                    var ei = en
                        ? function(e) {
                            return null == e
                              ? []
                              : ((e = fe(e)),
                                ut(en(e), function(t) {
                                  return Ke.call(e, t);
                                }));
                          }
                        : as,
                      ti = en
                        ? function(e) {
                            for (var t = []; e; ) pt(t, ei(e)), (e = $e(e));
                            return t;
                          }
                        : as,
                      ni = _r;
                    function ri(e, t, n) {
                      for (
                        var r = -1, a = (t = la(t, e)).length, i = !1;
                        ++r < a;

                      ) {
                        var o = Si(t[r]);
                        if (!(i = null != e && n(e, o))) break;
                        e = e[o];
                      }
                      return i || ++r != a
                        ? i
                        : !!(a = null == e ? 0 : e.length) &&
                            Lo(a) &&
                            oi(o, a) &&
                            (Mo(e) || Do(e));
                    }
                    function ai(e) {
                      return "function" != typeof e.constructor || mi(e)
                        ? {}
                        : Cn($e(e));
                    }
                    function ii(e) {
                      return Mo(e) || Do(e) || !!(Ze && e && e[Ze]);
                    }
                    function oi(e, t) {
                      var n = typeof e;
                      return (
                        !!(t = null == t ? 9007199254740991 : t) &&
                        ("number" == n || ("symbol" != n && se.test(e))) &&
                        e > -1 &&
                        e % 1 == 0 &&
                        e < t
                      );
                    }
                    function li(e, t, n) {
                      if (!Bo(n)) return !1;
                      var r = typeof t;
                      return (
                        !!("number" == r
                          ? Uo(n) && oi(t, n.length)
                          : "string" == r && t in n) && Co(n[t], e)
                      );
                    }
                    function si(e, t) {
                      if (Mo(e)) return !1;
                      var n = typeof e;
                      return (
                        !(
                          "number" != n &&
                          "symbol" != n &&
                          "boolean" != n &&
                          null != e &&
                          !Zo(e)
                        ) ||
                        z.test(e) || !B.test(e) || (null != t && e in fe(t))
                      );
                    }
                    function ci(e) {
                      var t = Ka(e),
                        n = On[t];
                      if ("function" != typeof n || !(t in Dn.prototype))
                        return !1;
                      if (e === n) return !0;
                      var r = qa(n);
                      return !!r && e === r[0];
                    }
                    ((dn && ni(new dn(new ArrayBuffer(1))) != x) ||
                      (_n && ni(new _n()) != f) ||
                      (pn && "[object Promise]" != ni(pn.resolve())) ||
                      (fn && ni(new fn()) != y) ||
                      (hn && ni(new hn()) != w)) &&
                      (ni = function(e) {
                        var t = _r(e),
                          n = t == g ? e.constructor : void 0,
                          r = n ? Ni(n) : "";
                        if (r)
                          switch (r) {
                            case bn:
                              return x;
                            case An:
                              return f;
                            case wn:
                              return "[object Promise]";
                            case En:
                              return y;
                            case xn:
                              return w;
                          }
                        return t;
                      });
                    var ui = we ? Wo : is;
                    function mi(e) {
                      var t = e && e.constructor;
                      return (
                        e === (("function" == typeof t && t.prototype) || Ae)
                      );
                    }
                    function di(e) {
                      return e == e && !Bo(e);
                    }
                    function _i(e, t) {
                      return function(n) {
                        return (
                          null != n &&
                          n[e] === t && (void 0 !== t || e in fe(n))
                        );
                      };
                    }
                    function pi(e, t, n) {
                      return (
                        (t = on(void 0 === t ? e.length - 1 : t, 0)),
                        function() {
                          for (
                            var a = arguments,
                              i = -1,
                              o = on(a.length - t, 0),
                              l = r(o);
                            ++i < o;

                          )
                            l[i] = a[t + i];
                          i = -1;
                          for (var s = r(t + 1); ++i < t; ) s[i] = a[i];
                          return (s[t] = n(l)), it(e, this, s);
                        }
                      );
                    }
                    function fi(e, t) {
                      return t.length < 2 ? e : mr(e, $r(t, 0, -1));
                    }
                    function hi(e, t) {
                      for (
                        var n = e.length, r = ln(t.length, n), a = ga(e);
                        r--;

                      ) {
                        var i = t[r];
                        e[r] = oi(i, n) ? a[i] : void 0;
                      }
                      return e;
                    }
                    function gi(e, t) {
                      if (
                        ("constructor" !== t || "function" != typeof e[t]) &&
                        "__proto__" != t
                      )
                        return e[t];
                    }
                    var vi = wi(Lr),
                      yi =
                        Zt ||
                        function(e, t) {
                          return qe.setTimeout(e, t);
                        },
                      bi = wi(Br);
                    function Ai(e, t, n) {
                      var r = t + "";
                      return bi(
                        e,
                        (function(e, t) {
                          var n = t.length;
                          if (!n) return e;
                          var r = n - 1;
                          return (
                            (t[r] = (n > 1 ? "& " : "") + t[r]),
                            (t = t.join(n > 2 ? ", " : " ")),
                            e.replace(Z, "{\n/* [wrapped with " + t + "] */\n")
                          );
                        })(
                          r,
                          (function(e, t) {
                            return (
                              lt(l, function(n) {
                                var r = "_." + n[0];
                                t & n[1] && !mt(e, r) && e.push(r);
                              }),
                              e.sort()
                            );
                          })(
                            (function(e) {
                              var t = e.match(Q);
                              return t ? t[1].split(X) : [];
                            })(r),
                            n
                          )
                        )
                      );
                    }
                    function wi(e) {
                      var t = 0,
                        n = 0;
                      return function() {
                        var r = sn(),
                          a = 16 - (r - n);
                        if (((n = r), a > 0)) {
                          if (++t >= 800) return arguments[0];
                        } else t = 0;
                        return e.apply(void 0, arguments);
                      };
                    }
                    function Ei(e, t) {
                      var n = -1,
                        r = e.length,
                        a = r - 1;
                      for (t = void 0 === t ? r : t; ++n < t; ) {
                        var i = Fr(n, a),
                          o = e[i];
                        (e[i] = e[n]), (e[n] = o);
                      }
                      return (e.length = t), e;
                    }
                    var xi = (function(e) {
                      var t = Eo(e, function(e) {
                          return 500 === n.size && n.clear(), e;
                        }),
                        n = t.cache;
                      return t;
                    })(function(e) {
                      var t = [];
                      return (
                        46 === e.charCodeAt(0) && t.push(""),
                        e.replace($, function(e, n, r, a) {
                          t.push(r ? a.replace(te, "$1") : n || e);
                        }),
                        t
                      );
                    });
                    function Si(e) {
                      if ("string" == typeof e || Zo(e)) return e;
                      var t = e + "";
                      return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                    }
                    function Ni(e) {
                      if (null != e) {
                        try {
                          return Ee.call(e);
                        } catch (e) {}
                        try {
                          return e + "";
                        } catch (e) {}
                      }
                      return "";
                    }
                    function ki(e) {
                      if (e instanceof Dn) return e.clone();
                      var t = new Tn(e.__wrapped__, e.__chain__);
                      return (
                        (t.__actions__ = ga(e.__actions__)),
                        (t.__index__ = e.__index__),
                        (t.__values__ = e.__values__),
                        t
                      );
                    }
                    var Oi = Rr(function(e, t) {
                        return Fo(e) ? Xn(e, ir(t, 1, Fo, !0)) : [];
                      }),
                      Ci = Rr(function(e, t) {
                        var n = Ri(t);
                        return (
                          Fo(n) && (n = void 0),
                          Fo(e) ? Xn(e, ir(t, 1, Fo, !0), Ja(n, 2)) : []
                        );
                      }),
                      ji = Rr(function(e, t) {
                        var n = Ri(t);
                        return (
                          Fo(n) && (n = void 0),
                          Fo(e) ? Xn(e, ir(t, 1, Fo, !0), void 0, n) : []
                        );
                      });
                    function Ti(e, t, n) {
                      var r = null == e ? 0 : e.length;
                      if (!r) return -1;
                      var a = null == n ? 0 : rl(n);
                      return a < 0 && (a = on(r + a, 0)), bt(e, Ja(t, 3), a);
                    }
                    function Di(e, t, n) {
                      var r = null == e ? 0 : e.length;
                      if (!r) return -1;
                      var a = r - 1;
                      return (
                        void 0 !== n &&
                          ((a = rl(n)),
                          (a = n < 0 ? on(r + a, 0) : ln(a, r - 1))),
                        bt(e, Ja(t, 3), a, !0)
                      );
                    }
                    function Mi(e) {
                      return (null == e ? 0 : e.length) ? ir(e, 1) : [];
                    }
                    function Ii(e) {
                      return e && e.length ? e[0] : void 0;
                    }
                    var Ui = Rr(function(e) {
                        var t = _t(e, ia);
                        return t.length && t[0] === e[0] ? gr(t) : [];
                      }),
                      Fi = Rr(function(e) {
                        var t = Ri(e),
                          n = _t(e, ia);
                        return (
                          t === Ri(n) ? (t = void 0) : n.pop(),
                          n.length && n[0] === e[0] ? gr(n, Ja(t, 2)) : []
                        );
                      }),
                      Pi = Rr(function(e) {
                        var t = Ri(e),
                          n = _t(e, ia);
                        return (
                          (t = "function" == typeof t ? t : void 0) && n.pop(),
                          n.length && n[0] === e[0] ? gr(n, void 0, t) : []
                        );
                      });
                    function Ri(e) {
                      var t = null == e ? 0 : e.length;
                      return t ? e[t - 1] : void 0;
                    }
                    var Hi = Rr(Wi);
                    function Wi(e, t) {
                      return e && e.length && t && t.length ? Ir(e, t) : e;
                    }
                    var Yi = za(function(e, t) {
                      var n = null == e ? 0 : e.length,
                        r = Kn(e, t);
                      return (
                        Ur(
                          e,
                          _t(t, function(e) {
                            return oi(e, n) ? +e : e;
                          }).sort(pa)
                        ),
                        r
                      );
                    });
                    function Li(e) {
                      return null == e ? e : mn.call(e);
                    }
                    var Bi = Rr(function(e) {
                        return Qr(ir(e, 1, Fo, !0));
                      }),
                      zi = Rr(function(e) {
                        var t = Ri(e);
                        return (
                          Fo(t) && (t = void 0), Qr(ir(e, 1, Fo, !0), Ja(t, 2))
                        );
                      }),
                      $i = Rr(function(e) {
                        var t = Ri(e);
                        return (
                          (t = "function" == typeof t ? t : void 0),
                          Qr(ir(e, 1, Fo, !0), void 0, t)
                        );
                      });
                    function Vi(e) {
                      if (!e || !e.length) return [];
                      var t = 0;
                      return (
                        (e = ut(e, function(e) {
                          if (Fo(e)) return (t = on(e.length, t)), !0;
                        })),
                        Ct(t, function(t) {
                          return _t(e, St(t));
                        })
                      );
                    }
                    function qi(e, t) {
                      if (!e || !e.length) return [];
                      var n = Vi(e);
                      return null == t
                        ? n
                        : _t(n, function(e) {
                            return it(t, void 0, e);
                          });
                    }
                    var Ki = Rr(function(e, t) {
                        return Fo(e) ? Xn(e, t) : [];
                      }),
                      Gi = Rr(function(e) {
                        return ra(ut(e, Fo));
                      }),
                      Ji = Rr(function(e) {
                        var t = Ri(e);
                        return Fo(t) && (t = void 0), ra(ut(e, Fo), Ja(t, 2));
                      }),
                      Zi = Rr(function(e) {
                        var t = Ri(e);
                        return (
                          (t = "function" == typeof t ? t : void 0),
                          ra(ut(e, Fo), void 0, t)
                        );
                      }),
                      Qi = Rr(Vi);
                    var Xi = Rr(function(e) {
                      var t = e.length,
                        n = t > 1 ? e[t - 1] : void 0;
                      return (
                        (n = "function" == typeof n ? (e.pop(), n) : void 0),
                        qi(e, n)
                      );
                    });
                    function eo(e) {
                      var t = On(e);
                      return (t.__chain__ = !0), t;
                    }
                    function to(e, t) {
                      return t(e);
                    }
                    var no = za(function(e) {
                      var t = e.length,
                        n = t ? e[0] : 0,
                        r = this.__wrapped__,
                        a = function(t) {
                          return Kn(t, e);
                        };
                      return !(t > 1 || this.__actions__.length) &&
                        r instanceof Dn &&
                        oi(n)
                        ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                            func: to,
                            args: [a],
                            thisArg: void 0
                          }),
                          new Tn(r, this.__chain__).thru(function(e) {
                            return t && !e.length && e.push(void 0), e;
                          }))
                        : this.thru(a);
                    });
                    var ro = ya(function(e, t, n) {
                      xe.call(e, n) ? ++e[n] : qn(e, n, 1);
                    });
                    var ao = Na(Ti),
                      io = Na(Di);
                    function oo(e, t) {
                      return (Mo(e) ? lt : er)(e, Ja(t, 3));
                    }
                    function lo(e, t) {
                      return (Mo(e) ? st : tr)(e, Ja(t, 3));
                    }
                    var so = ya(function(e, t, n) {
                      xe.call(e, n) ? e[n].push(t) : qn(e, n, [t]);
                    });
                    var co = Rr(function(e, t, n) {
                        var a = -1,
                          i = "function" == typeof t,
                          o = Uo(e) ? r(e.length) : [];
                        return (
                          er(e, function(e) {
                            o[++a] = i ? it(t, e, n) : vr(e, t, n);
                          }),
                          o
                        );
                      }),
                      uo = ya(function(e, t, n) {
                        qn(e, n, t);
                      });
                    function mo(e, t) {
                      return (Mo(e) ? _t : kr)(e, Ja(t, 3));
                    }
                    var _o = ya(
                      function(e, t, n) {
                        e[n ? 0 : 1].push(t);
                      },
                      function() {
                        return [[], []];
                      }
                    );
                    var po = Rr(function(e, t) {
                        if (null == e) return [];
                        var n = t.length;
                        return (
                          n > 1 && li(e, t[0], t[1])
                            ? (t = [])
                            : n > 2 && li(t[0], t[1], t[2]) && (t = [t[0]]),
                          Dr(e, ir(t, 1), [])
                        );
                      }),
                      fo =
                        Jt ||
                        function() {
                          return qe.Date.now();
                        };
                    function ho(e, t, n) {
                      return (
                        (t = n ? void 0 : t),
                        Ha(
                          e,
                          128,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          (t = e && null == t ? e.length : t)
                        )
                      );
                    }
                    function go(e, t) {
                      var n;
                      if ("function" != typeof t) throw new ve(i);
                      return (
                        (e = rl(e)),
                        function() {
                          return (
                            --e > 0 && (n = t.apply(this, arguments)),
                            e <= 1 && (t = void 0),
                            n
                          );
                        }
                      );
                    }
                    var vo = Rr(function(e, t, n) {
                        var r = 1;
                        if (n.length) {
                          var a = Lt(n, Ga(vo));
                          r |= 32;
                        }
                        return Ha(e, r, t, n, a);
                      }),
                      yo = Rr(function(e, t, n) {
                        var r = 3;
                        if (n.length) {
                          var a = Lt(n, Ga(yo));
                          r |= 32;
                        }
                        return Ha(t, r, e, n, a);
                      });
                    function bo(e, t, n) {
                      var r,
                        a,
                        o,
                        l,
                        s,
                        c,
                        u = 0,
                        m = !1,
                        d = !1,
                        _ = !0;
                      if ("function" != typeof e) throw new ve(i);
                      function p(t) {
                        var n = r,
                          i = a;
                        return (r = a = void 0), (u = t), (l = e.apply(i, n));
                      }
                      function f(e) {
                        return (u = e), (s = yi(g, t)), m ? p(e) : l;
                      }
                      function h(e) {
                        var n = e - c;
                        return (
                          void 0 === c || n >= t || n < 0 || (d && e - u >= o)
                        );
                      }
                      function g() {
                        var e = fo();
                        if (h(e)) return v(e);
                        s = yi(
                          g,
                          (function(e) {
                            var n = t - (e - c);
                            return d ? ln(n, o - (e - u)) : n;
                          })(e)
                        );
                      }
                      function v(e) {
                        return (
                          (s = void 0), _ && r ? p(e) : ((r = a = void 0), l)
                        );
                      }
                      function y() {
                        var e = fo(),
                          n = h(e);
                        if (((r = arguments), (a = this), (c = e), n)) {
                          if (void 0 === s) return f(c);
                          if (d) return ua(s), (s = yi(g, t)), p(c);
                        }
                        return void 0 === s && (s = yi(g, t)), l;
                      }
                      return (
                        (t = il(t) || 0),
                        Bo(n) &&
                          ((m = !!n.leading),
                          (o = (d = "maxWait" in n)
                            ? on(il(n.maxWait) || 0, t)
                            : o),
                          (_ = "trailing" in n ? !!n.trailing : _)),
                        (y.cancel = function() {
                          void 0 !== s && ua(s),
                            (u = 0),
                            (r = c = a = s = void 0);
                        }),
                        (y.flush = function() {
                          return void 0 === s ? l : v(fo());
                        }),
                        y
                      );
                    }
                    var Ao = Rr(function(e, t) {
                        return Qn(e, 1, t);
                      }),
                      wo = Rr(function(e, t, n) {
                        return Qn(e, il(t) || 0, n);
                      });
                    function Eo(e, t) {
                      if (
                        "function" != typeof e ||
                        (null != t && "function" != typeof t)
                      )
                        throw new ve(i);
                      var n = function() {
                        var r = arguments,
                          a = t ? t.apply(this, r) : r[0],
                          i = n.cache;
                        if (i.has(a)) return i.get(a);
                        var o = e.apply(this, r);
                        return (n.cache = i.set(a, o) || i), o;
                      };
                      return (n.cache = new (Eo.Cache || Un)()), n;
                    }
                    function xo(e) {
                      if ("function" != typeof e) throw new ve(i);
                      return function() {
                        var t = arguments;
                        switch (t.length) {
                          case 0:
                            return !e.call(this);
                          case 1:
                            return !e.call(this, t[0]);
                          case 2:
                            return !e.call(this, t[0], t[1]);
                          case 3:
                            return !e.call(this, t[0], t[1], t[2]);
                        }
                        return !e.apply(this, t);
                      };
                    }
                    Eo.Cache = Un;
                    var So = sa(function(e, t) {
                        var n = (t =
                          1 == t.length && Mo(t[0])
                            ? _t(t[0], jt(Ja()))
                            : _t(ir(t, 1), jt(Ja()))).length;
                        return Rr(function(r) {
                          for (var a = -1, i = ln(r.length, n); ++a < i; )
                            r[a] = t[a].call(this, r[a]);
                          return it(e, this, r);
                        });
                      }),
                      No = Rr(function(e, t) {
                        return Ha(e, 32, void 0, t, Lt(t, Ga(No)));
                      }),
                      ko = Rr(function(e, t) {
                        return Ha(e, 64, void 0, t, Lt(t, Ga(ko)));
                      }),
                      Oo = za(function(e, t) {
                        return Ha(e, 256, void 0, void 0, void 0, t);
                      });
                    function Co(e, t) {
                      return e === t || (e != e && t != t);
                    }
                    var jo = Ia(pr),
                      To = Ia(function(e, t) {
                        return e >= t;
                      }),
                      Do = yr(
                        (function() {
                          return arguments;
                        })()
                      )
                        ? yr
                        : function(e) {
                            return (
                              zo(e) &&
                              xe.call(e, "callee") &&
                              !Ke.call(e, "callee")
                            );
                          },
                      Mo = r.isArray,
                      Io = Xe
                        ? jt(Xe)
                        : function(e) {
                            return zo(e) && _r(e) == E;
                          };
                    function Uo(e) {
                      return null != e && Lo(e.length) && !Wo(e);
                    }
                    function Fo(e) {
                      return zo(e) && Uo(e);
                    }
                    var Po = tn || is,
                      Ro = et
                        ? jt(et)
                        : function(e) {
                            return zo(e) && _r(e) == m;
                          };
                    function Ho(e) {
                      if (!zo(e)) return !1;
                      var t = _r(e);
                      return (
                        t == d ||
                        "[object DOMException]" == t ||
                        ("string" == typeof e.message &&
                          "string" == typeof e.name &&
                          !qo(e))
                      );
                    }
                    function Wo(e) {
                      if (!Bo(e)) return !1;
                      var t = _r(e);
                      return (
                        t == _ ||
                        t == p ||
                        "[object AsyncFunction]" == t ||
                        "[object Proxy]" == t
                      );
                    }
                    function Yo(e) {
                      return "number" == typeof e && e == rl(e);
                    }
                    function Lo(e) {
                      return (
                        "number" == typeof e &&
                        e > -1 &&
                        e % 1 == 0 &&
                        e <= 9007199254740991
                      );
                    }
                    function Bo(e) {
                      var t = typeof e;
                      return null != e && ("object" == t || "function" == t);
                    }
                    function zo(e) {
                      return null != e && "object" == typeof e;
                    }
                    var $o = tt
                      ? jt(tt)
                      : function(e) {
                          return zo(e) && ni(e) == f;
                        };
                    function Vo(e) {
                      return "number" == typeof e || (zo(e) && _r(e) == h);
                    }
                    function qo(e) {
                      if (!zo(e) || _r(e) != g) return !1;
                      var t = $e(e);
                      if (null === t) return !0;
                      var n = xe.call(t, "constructor") && t.constructor;
                      return (
                        "function" == typeof n &&
                        n instanceof n &&
                        Ee.call(n) == Oe
                      );
                    }
                    var Ko = nt
                      ? jt(nt)
                      : function(e) {
                          return zo(e) && _r(e) == v;
                        };
                    var Go = rt
                      ? jt(rt)
                      : function(e) {
                          return zo(e) && ni(e) == y;
                        };
                    function Jo(e) {
                      return (
                        "string" == typeof e || (!Mo(e) && zo(e) && _r(e) == b)
                      );
                    }
                    function Zo(e) {
                      return "symbol" == typeof e || (zo(e) && _r(e) == A);
                    }
                    var Qo = at
                      ? jt(at)
                      : function(e) {
                          return zo(e) && Lo(e.length) && !!We[_r(e)];
                        };
                    var Xo = Ia(Nr),
                      el = Ia(function(e, t) {
                        return e <= t;
                      });
                    function tl(e) {
                      if (!e) return [];
                      if (Uo(e)) return Jo(e) ? Vt(e) : ga(e);
                      if (Qe && e[Qe])
                        return (function(e) {
                          for (var t, n = []; !(t = e.next()).done; )
                            n.push(t.value);
                          return n;
                        })(e[Qe]());
                      var t = ni(e);
                      return (t == f ? Wt : t == y ? Bt : Cl)(e);
                    }
                    function nl(e) {
                      return e
                        ? (e = il(e)) === 1 / 0 || e === -1 / 0
                          ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                          : e == e
                          ? e
                          : 0
                        : 0 === e
                        ? e
                        : 0;
                    }
                    function rl(e) {
                      var t = nl(e),
                        n = t % 1;
                      return t == t ? (n ? t - n : t) : 0;
                    }
                    function al(e) {
                      return e ? Gn(rl(e), 0, 4294967295) : 0;
                    }
                    function il(e) {
                      if ("number" == typeof e) return e;
                      if (Zo(e)) return NaN;
                      if (Bo(e)) {
                        var t =
                          "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = Bo(t) ? t + "" : t;
                      }
                      if ("string" != typeof e) return 0 === e ? e : +e;
                      e = e.replace(K, "");
                      var n = ie.test(e);
                      return n || le.test(e)
                        ? ze(e.slice(2), n ? 2 : 8)
                        : ae.test(e)
                        ? NaN
                        : +e;
                    }
                    function ol(e) {
                      return va(e, Al(e));
                    }
                    function ll(e) {
                      return null == e ? "" : Zr(e);
                    }
                    var sl = ba(function(e, t) {
                        if (mi(t) || Uo(t)) va(t, bl(t), e);
                        else for (var n in t) xe.call(t, n) && Bn(e, n, t[n]);
                      }),
                      cl = ba(function(e, t) {
                        va(t, Al(t), e);
                      }),
                      ul = ba(function(e, t, n, r) {
                        va(t, Al(t), e, r);
                      }),
                      ml = ba(function(e, t, n, r) {
                        va(t, bl(t), e, r);
                      }),
                      dl = za(Kn);
                    var _l = Rr(function(e, t) {
                        e = fe(e);
                        var n = -1,
                          r = t.length,
                          a = r > 2 ? t[2] : void 0;
                        for (a && li(t[0], t[1], a) && (r = 1); ++n < r; )
                          for (
                            var i = t[n], o = Al(i), l = -1, s = o.length;
                            ++l < s;

                          ) {
                            var c = o[l],
                              u = e[c];
                            (void 0 === u ||
                              (Co(u, Ae[c]) && !xe.call(e, c))) &&
                              (e[c] = i[c]);
                          }
                        return e;
                      }),
                      pl = Rr(function(e) {
                        return e.push(void 0, Ya), it(El, void 0, e);
                      });
                    function fl(e, t, n) {
                      var r = null == e ? void 0 : mr(e, t);
                      return void 0 === r ? n : r;
                    }
                    function hl(e, t) {
                      return null != e && ri(e, t, hr);
                    }
                    var gl = Ca(function(e, t, n) {
                        null != t &&
                          "function" != typeof t.toString &&
                          (t = ke.call(t)),
                          (e[t] = n);
                      }, Bl(Vl)),
                      vl = Ca(function(e, t, n) {
                        null != t &&
                          "function" != typeof t.toString &&
                          (t = ke.call(t)),
                          xe.call(e, t) ? e[t].push(n) : (e[t] = [n]);
                      }, Ja),
                      yl = Rr(vr);
                    function bl(e) {
                      return Uo(e) ? Rn(e) : xr(e);
                    }
                    function Al(e) {
                      return Uo(e) ? Rn(e, !0) : Sr(e);
                    }
                    var wl = ba(function(e, t, n) {
                        jr(e, t, n);
                      }),
                      El = ba(function(e, t, n, r) {
                        jr(e, t, n, r);
                      }),
                      xl = za(function(e, t) {
                        var n = {};
                        if (null == e) return n;
                        var r = !1;
                        (t = _t(t, function(t) {
                          return (t = la(t, e)), r || (r = t.length > 1), t;
                        })),
                          va(e, Va(e), n),
                          r && (n = Jn(n, 7, La));
                        for (var a = t.length; a--; ) Xr(n, t[a]);
                        return n;
                      });
                    var Sl = za(function(e, t) {
                      return null == e
                        ? {}
                        : (function(e, t) {
                            return Mr(e, t, function(t, n) {
                              return hl(e, n);
                            });
                          })(e, t);
                    });
                    function Nl(e, t) {
                      if (null == e) return {};
                      var n = _t(Va(e), function(e) {
                        return [e];
                      });
                      return (
                        (t = Ja(t)),
                        Mr(e, n, function(e, n) {
                          return t(e, n[0]);
                        })
                      );
                    }
                    var kl = Ra(bl),
                      Ol = Ra(Al);
                    function Cl(e) {
                      return null == e ? [] : Tt(e, bl(e));
                    }
                    var jl = xa(function(e, t, n) {
                      return (t = t.toLowerCase()), e + (n ? Tl(t) : t);
                    });
                    function Tl(e) {
                      return Hl(ll(e).toLowerCase());
                    }
                    function Dl(e) {
                      return (e = ll(e)) && e.replace(ce, Ft).replace(Me, "");
                    }
                    var Ml = xa(function(e, t, n) {
                        return e + (n ? "-" : "") + t.toLowerCase();
                      }),
                      Il = xa(function(e, t, n) {
                        return e + (n ? " " : "") + t.toLowerCase();
                      }),
                      Ul = Ea("toLowerCase");
                    var Fl = xa(function(e, t, n) {
                      return e + (n ? "_" : "") + t.toLowerCase();
                    });
                    var Pl = xa(function(e, t, n) {
                      return e + (n ? " " : "") + Hl(t);
                    });
                    var Rl = xa(function(e, t, n) {
                        return e + (n ? " " : "") + t.toUpperCase();
                      }),
                      Hl = Ea("toUpperCase");
                    function Wl(e, t, n) {
                      return (
                        (e = ll(e)),
                        void 0 === (t = n ? void 0 : t)
                          ? (function(e) {
                              return Pe.test(e);
                            })(e)
                            ? (function(e) {
                                return e.match(Ue) || [];
                              })(e)
                            : (function(e) {
                                return e.match(ee) || [];
                              })(e)
                          : e.match(t) || []
                      );
                    }
                    var Yl = Rr(function(e, t) {
                        try {
                          return it(e, void 0, t);
                        } catch (e) {
                          return Ho(e) ? e : new de(e);
                        }
                      }),
                      Ll = za(function(e, t) {
                        return (
                          lt(t, function(t) {
                            (t = Si(t)), qn(e, t, vo(e[t], e));
                          }),
                          e
                        );
                      });
                    function Bl(e) {
                      return function() {
                        return e;
                      };
                    }
                    var zl = ka(),
                      $l = ka(!0);
                    function Vl(e) {
                      return e;
                    }
                    function ql(e) {
                      return Er("function" == typeof e ? e : Jn(e, 1));
                    }
                    var Kl = Rr(function(e, t) {
                        return function(n) {
                          return vr(n, e, t);
                        };
                      }),
                      Gl = Rr(function(e, t) {
                        return function(n) {
                          return vr(e, n, t);
                        };
                      });
                    function Jl(e, t, n) {
                      var r = bl(t),
                        a = ur(t, r);
                      null != n ||
                        (Bo(t) && (a.length || !r.length)) ||
                        ((n = t), (t = e), (e = this), (a = ur(t, bl(t))));
                      var i = !(Bo(n) && "chain" in n && !n.chain),
                        o = Wo(e);
                      return (
                        lt(a, function(n) {
                          var r = t[n];
                          (e[n] = r),
                            o &&
                              (e.prototype[n] = function() {
                                var t = this.__chain__;
                                if (i || t) {
                                  var n = e(this.__wrapped__),
                                    a = (n.__actions__ = ga(this.__actions__));
                                  return (
                                    a.push({
                                      func: r,
                                      args: arguments,
                                      thisArg: e
                                    }),
                                    (n.__chain__ = t),
                                    n
                                  );
                                }
                                return r.apply(
                                  e,
                                  pt([this.value()], arguments)
                                );
                              });
                        }),
                        e
                      );
                    }
                    function Zl() {}
                    var Ql = Ta(_t),
                      Xl = Ta(ct),
                      es = Ta(gt);
                    function ts(e) {
                      return si(e)
                        ? St(Si(e))
                        : (function(e) {
                            return function(t) {
                              return mr(t, e);
                            };
                          })(e);
                    }
                    var ns = Ma(),
                      rs = Ma(!0);
                    function as() {
                      return [];
                    }
                    function is() {
                      return !1;
                    }
                    var os = ja(function(e, t) {
                        return e + t;
                      }, 0),
                      ls = Fa("ceil"),
                      ss = ja(function(e, t) {
                        return e / t;
                      }, 1),
                      cs = Fa("floor");
                    var us,
                      ms = ja(function(e, t) {
                        return e * t;
                      }, 1),
                      ds = Fa("round"),
                      _s = ja(function(e, t) {
                        return e - t;
                      }, 0);
                    return (
                      (On.after = function(e, t) {
                        if ("function" != typeof t) throw new ve(i);
                        return (
                          (e = rl(e)),
                          function() {
                            if (--e < 1) return t.apply(this, arguments);
                          }
                        );
                      }),
                      (On.ary = ho),
                      (On.assign = sl),
                      (On.assignIn = cl),
                      (On.assignInWith = ul),
                      (On.assignWith = ml),
                      (On.at = dl),
                      (On.before = go),
                      (On.bind = vo),
                      (On.bindAll = Ll),
                      (On.bindKey = yo),
                      (On.castArray = function() {
                        if (!arguments.length) return [];
                        var e = arguments[0];
                        return Mo(e) ? e : [e];
                      }),
                      (On.chain = eo),
                      (On.chunk = function(e, t, n) {
                        t = (n ? li(e, t, n) : void 0 === t) ? 1 : on(rl(t), 0);
                        var a = null == e ? 0 : e.length;
                        if (!a || t < 1) return [];
                        for (var i = 0, o = 0, l = r(Qt(a / t)); i < a; )
                          l[o++] = $r(e, i, (i += t));
                        return l;
                      }),
                      (On.compact = function(e) {
                        for (
                          var t = -1,
                            n = null == e ? 0 : e.length,
                            r = 0,
                            a = [];
                          ++t < n;

                        ) {
                          var i = e[t];
                          i && (a[r++] = i);
                        }
                        return a;
                      }),
                      (On.concat = function() {
                        var e = arguments.length;
                        if (!e) return [];
                        for (var t = r(e - 1), n = arguments[0], a = e; a--; )
                          t[a - 1] = arguments[a];
                        return pt(Mo(n) ? ga(n) : [n], ir(t, 1));
                      }),
                      (On.cond = function(e) {
                        var t = null == e ? 0 : e.length,
                          n = Ja();
                        return (
                          (e = t
                            ? _t(e, function(e) {
                                if ("function" != typeof e[1]) throw new ve(i);
                                return [n(e[0]), e[1]];
                              })
                            : []),
                          Rr(function(n) {
                            for (var r = -1; ++r < t; ) {
                              var a = e[r];
                              if (it(a[0], this, n)) return it(a[1], this, n);
                            }
                          })
                        );
                      }),
                      (On.conforms = function(e) {
                        return (function(e) {
                          var t = bl(e);
                          return function(n) {
                            return Zn(n, e, t);
                          };
                        })(Jn(e, 1));
                      }),
                      (On.constant = Bl),
                      (On.countBy = ro),
                      (On.create = function(e, t) {
                        var n = Cn(e);
                        return null == t ? n : Vn(n, t);
                      }),
                      (On.curry = function e(t, n, r) {
                        var a = Ha(
                          t,
                          8,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          (n = r ? void 0 : n)
                        );
                        return (a.placeholder = e.placeholder), a;
                      }),
                      (On.curryRight = function e(t, n, r) {
                        var a = Ha(
                          t,
                          16,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          (n = r ? void 0 : n)
                        );
                        return (a.placeholder = e.placeholder), a;
                      }),
                      (On.debounce = bo),
                      (On.defaults = _l),
                      (On.defaultsDeep = pl),
                      (On.defer = Ao),
                      (On.delay = wo),
                      (On.difference = Oi),
                      (On.differenceBy = Ci),
                      (On.differenceWith = ji),
                      (On.drop = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        return r
                          ? $r(
                              e,
                              (t = n || void 0 === t ? 1 : rl(t)) < 0 ? 0 : t,
                              r
                            )
                          : [];
                      }),
                      (On.dropRight = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        return r
                          ? $r(
                              e,
                              0,
                              (t = r - (t = n || void 0 === t ? 1 : rl(t))) < 0
                                ? 0
                                : t
                            )
                          : [];
                      }),
                      (On.dropRightWhile = function(e, t) {
                        return e && e.length ? ta(e, Ja(t, 3), !0, !0) : [];
                      }),
                      (On.dropWhile = function(e, t) {
                        return e && e.length ? ta(e, Ja(t, 3), !0) : [];
                      }),
                      (On.fill = function(e, t, n, r) {
                        var a = null == e ? 0 : e.length;
                        return a
                          ? (n &&
                              "number" != typeof n &&
                              li(e, t, n) &&
                              ((n = 0), (r = a)),
                            (function(e, t, n, r) {
                              var a = e.length;
                              for (
                                (n = rl(n)) < 0 && (n = -n > a ? 0 : a + n),
                                  (r = void 0 === r || r > a ? a : rl(r)) < 0 &&
                                    (r += a),
                                  r = n > r ? 0 : al(r);
                                n < r;

                              )
                                e[n++] = t;
                              return e;
                            })(e, t, n, r))
                          : [];
                      }),
                      (On.filter = function(e, t) {
                        return (Mo(e) ? ut : ar)(e, Ja(t, 3));
                      }),
                      (On.flatMap = function(e, t) {
                        return ir(mo(e, t), 1);
                      }),
                      (On.flatMapDeep = function(e, t) {
                        return ir(mo(e, t), 1 / 0);
                      }),
                      (On.flatMapDepth = function(e, t, n) {
                        return (n = void 0 === n ? 1 : rl(n)), ir(mo(e, t), n);
                      }),
                      (On.flatten = Mi),
                      (On.flattenDeep = function(e) {
                        return (null == e ? 0 : e.length) ? ir(e, 1 / 0) : [];
                      }),
                      (On.flattenDepth = function(e, t) {
                        return (null == e
                        ? 0
                        : e.length)
                          ? ir(e, (t = void 0 === t ? 1 : rl(t)))
                          : [];
                      }),
                      (On.flip = function(e) {
                        return Ha(e, 512);
                      }),
                      (On.flow = zl),
                      (On.flowRight = $l),
                      (On.fromPairs = function(e) {
                        for (
                          var t = -1, n = null == e ? 0 : e.length, r = {};
                          ++t < n;

                        ) {
                          var a = e[t];
                          r[a[0]] = a[1];
                        }
                        return r;
                      }),
                      (On.functions = function(e) {
                        return null == e ? [] : ur(e, bl(e));
                      }),
                      (On.functionsIn = function(e) {
                        return null == e ? [] : ur(e, Al(e));
                      }),
                      (On.groupBy = so),
                      (On.initial = function(e) {
                        return (null == e ? 0 : e.length) ? $r(e, 0, -1) : [];
                      }),
                      (On.intersection = Ui),
                      (On.intersectionBy = Fi),
                      (On.intersectionWith = Pi),
                      (On.invert = gl),
                      (On.invertBy = vl),
                      (On.invokeMap = co),
                      (On.iteratee = ql),
                      (On.keyBy = uo),
                      (On.keys = bl),
                      (On.keysIn = Al),
                      (On.map = mo),
                      (On.mapKeys = function(e, t) {
                        var n = {};
                        return (
                          (t = Ja(t, 3)),
                          sr(e, function(e, r, a) {
                            qn(n, t(e, r, a), e);
                          }),
                          n
                        );
                      }),
                      (On.mapValues = function(e, t) {
                        var n = {};
                        return (
                          (t = Ja(t, 3)),
                          sr(e, function(e, r, a) {
                            qn(n, r, t(e, r, a));
                          }),
                          n
                        );
                      }),
                      (On.matches = function(e) {
                        return Or(Jn(e, 1));
                      }),
                      (On.matchesProperty = function(e, t) {
                        return Cr(e, Jn(t, 1));
                      }),
                      (On.memoize = Eo),
                      (On.merge = wl),
                      (On.mergeWith = El),
                      (On.method = Kl),
                      (On.methodOf = Gl),
                      (On.mixin = Jl),
                      (On.negate = xo),
                      (On.nthArg = function(e) {
                        return (
                          (e = rl(e)),
                          Rr(function(t) {
                            return Tr(t, e);
                          })
                        );
                      }),
                      (On.omit = xl),
                      (On.omitBy = function(e, t) {
                        return Nl(e, xo(Ja(t)));
                      }),
                      (On.once = function(e) {
                        return go(2, e);
                      }),
                      (On.orderBy = function(e, t, n, r) {
                        return null == e
                          ? []
                          : (Mo(t) || (t = null == t ? [] : [t]),
                            Mo((n = r ? void 0 : n)) ||
                              (n = null == n ? [] : [n]),
                            Dr(e, t, n));
                      }),
                      (On.over = Ql),
                      (On.overArgs = So),
                      (On.overEvery = Xl),
                      (On.overSome = es),
                      (On.partial = No),
                      (On.partialRight = ko),
                      (On.partition = _o),
                      (On.pick = Sl),
                      (On.pickBy = Nl),
                      (On.property = ts),
                      (On.propertyOf = function(e) {
                        return function(t) {
                          return null == e ? void 0 : mr(e, t);
                        };
                      }),
                      (On.pull = Hi),
                      (On.pullAll = Wi),
                      (On.pullAllBy = function(e, t, n) {
                        return e && e.length && t && t.length
                          ? Ir(e, t, Ja(n, 2))
                          : e;
                      }),
                      (On.pullAllWith = function(e, t, n) {
                        return e && e.length && t && t.length
                          ? Ir(e, t, void 0, n)
                          : e;
                      }),
                      (On.pullAt = Yi),
                      (On.range = ns),
                      (On.rangeRight = rs),
                      (On.rearg = Oo),
                      (On.reject = function(e, t) {
                        return (Mo(e) ? ut : ar)(e, xo(Ja(t, 3)));
                      }),
                      (On.remove = function(e, t) {
                        var n = [];
                        if (!e || !e.length) return n;
                        var r = -1,
                          a = [],
                          i = e.length;
                        for (t = Ja(t, 3); ++r < i; ) {
                          var o = e[r];
                          t(o, r, e) && (n.push(o), a.push(r));
                        }
                        return Ur(e, a), n;
                      }),
                      (On.rest = function(e, t) {
                        if ("function" != typeof e) throw new ve(i);
                        return Rr(e, (t = void 0 === t ? t : rl(t)));
                      }),
                      (On.reverse = Li),
                      (On.sampleSize = function(e, t, n) {
                        return (
                          (t = (n ? li(e, t, n) : void 0 === t) ? 1 : rl(t)),
                          (Mo(e) ? Wn : Wr)(e, t)
                        );
                      }),
                      (On.set = function(e, t, n) {
                        return null == e ? e : Yr(e, t, n);
                      }),
                      (On.setWith = function(e, t, n, r) {
                        return (
                          (r = "function" == typeof r ? r : void 0),
                          null == e ? e : Yr(e, t, n, r)
                        );
                      }),
                      (On.shuffle = function(e) {
                        return (Mo(e) ? Yn : zr)(e);
                      }),
                      (On.slice = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        return r
                          ? (n && "number" != typeof n && li(e, t, n)
                              ? ((t = 0), (n = r))
                              : ((t = null == t ? 0 : rl(t)),
                                (n = void 0 === n ? r : rl(n))),
                            $r(e, t, n))
                          : [];
                      }),
                      (On.sortBy = po),
                      (On.sortedUniq = function(e) {
                        return e && e.length ? Gr(e) : [];
                      }),
                      (On.sortedUniqBy = function(e, t) {
                        return e && e.length ? Gr(e, Ja(t, 2)) : [];
                      }),
                      (On.split = function(e, t, n) {
                        return (
                          n &&
                            "number" != typeof n &&
                            li(e, t, n) &&
                            (t = n = void 0),
                          (n = void 0 === n ? 4294967295 : n >>> 0)
                            ? (e = ll(e)) &&
                              ("string" == typeof t || (null != t && !Ko(t))) &&
                              !(t = Zr(t)) &&
                              Ht(e)
                              ? ca(Vt(e), 0, n)
                              : e.split(t, n)
                            : []
                        );
                      }),
                      (On.spread = function(e, t) {
                        if ("function" != typeof e) throw new ve(i);
                        return (
                          (t = null == t ? 0 : on(rl(t), 0)),
                          Rr(function(n) {
                            var r = n[t],
                              a = ca(n, 0, t);
                            return r && pt(a, r), it(e, this, a);
                          })
                        );
                      }),
                      (On.tail = function(e) {
                        var t = null == e ? 0 : e.length;
                        return t ? $r(e, 1, t) : [];
                      }),
                      (On.take = function(e, t, n) {
                        return e && e.length
                          ? $r(
                              e,
                              0,
                              (t = n || void 0 === t ? 1 : rl(t)) < 0 ? 0 : t
                            )
                          : [];
                      }),
                      (On.takeRight = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        return r
                          ? $r(
                              e,
                              (t = r - (t = n || void 0 === t ? 1 : rl(t))) < 0
                                ? 0
                                : t,
                              r
                            )
                          : [];
                      }),
                      (On.takeRightWhile = function(e, t) {
                        return e && e.length ? ta(e, Ja(t, 3), !1, !0) : [];
                      }),
                      (On.takeWhile = function(e, t) {
                        return e && e.length ? ta(e, Ja(t, 3)) : [];
                      }),
                      (On.tap = function(e, t) {
                        return t(e), e;
                      }),
                      (On.throttle = function(e, t, n) {
                        var r = !0,
                          a = !0;
                        if ("function" != typeof e) throw new ve(i);
                        return (
                          Bo(n) &&
                            ((r = "leading" in n ? !!n.leading : r),
                            (a = "trailing" in n ? !!n.trailing : a)),
                          bo(e, t, { leading: r, maxWait: t, trailing: a })
                        );
                      }),
                      (On.thru = to),
                      (On.toArray = tl),
                      (On.toPairs = kl),
                      (On.toPairsIn = Ol),
                      (On.toPath = function(e) {
                        return Mo(e) ? _t(e, Si) : Zo(e) ? [e] : ga(xi(ll(e)));
                      }),
                      (On.toPlainObject = ol),
                      (On.transform = function(e, t, n) {
                        var r = Mo(e),
                          a = r || Po(e) || Qo(e);
                        if (((t = Ja(t, 4)), null == n)) {
                          var i = e && e.constructor;
                          n = a
                            ? r
                              ? new i()
                              : []
                            : Bo(e) && Wo(i)
                            ? Cn($e(e))
                            : {};
                        }
                        return (
                          (a ? lt : sr)(e, function(e, r, a) {
                            return t(n, e, r, a);
                          }),
                          n
                        );
                      }),
                      (On.unary = function(e) {
                        return ho(e, 1);
                      }),
                      (On.union = Bi),
                      (On.unionBy = zi),
                      (On.unionWith = $i),
                      (On.uniq = function(e) {
                        return e && e.length ? Qr(e) : [];
                      }),
                      (On.uniqBy = function(e, t) {
                        return e && e.length ? Qr(e, Ja(t, 2)) : [];
                      }),
                      (On.uniqWith = function(e, t) {
                        return (
                          (t = "function" == typeof t ? t : void 0),
                          e && e.length ? Qr(e, void 0, t) : []
                        );
                      }),
                      (On.unset = function(e, t) {
                        return null == e || Xr(e, t);
                      }),
                      (On.unzip = Vi),
                      (On.unzipWith = qi),
                      (On.update = function(e, t, n) {
                        return null == e ? e : ea(e, t, oa(n));
                      }),
                      (On.updateWith = function(e, t, n, r) {
                        return (
                          (r = "function" == typeof r ? r : void 0),
                          null == e ? e : ea(e, t, oa(n), r)
                        );
                      }),
                      (On.values = Cl),
                      (On.valuesIn = function(e) {
                        return null == e ? [] : Tt(e, Al(e));
                      }),
                      (On.without = Ki),
                      (On.words = Wl),
                      (On.wrap = function(e, t) {
                        return No(oa(t), e);
                      }),
                      (On.xor = Gi),
                      (On.xorBy = Ji),
                      (On.xorWith = Zi),
                      (On.zip = Qi),
                      (On.zipObject = function(e, t) {
                        return aa(e || [], t || [], Bn);
                      }),
                      (On.zipObjectDeep = function(e, t) {
                        return aa(e || [], t || [], Yr);
                      }),
                      (On.zipWith = Xi),
                      (On.entries = kl),
                      (On.entriesIn = Ol),
                      (On.extend = cl),
                      (On.extendWith = ul),
                      Jl(On, On),
                      (On.add = os),
                      (On.attempt = Yl),
                      (On.camelCase = jl),
                      (On.capitalize = Tl),
                      (On.ceil = ls),
                      (On.clamp = function(e, t, n) {
                        return (
                          void 0 === n && ((n = t), (t = void 0)),
                          void 0 !== n && (n = (n = il(n)) == n ? n : 0),
                          void 0 !== t && (t = (t = il(t)) == t ? t : 0),
                          Gn(il(e), t, n)
                        );
                      }),
                      (On.clone = function(e) {
                        return Jn(e, 4);
                      }),
                      (On.cloneDeep = function(e) {
                        return Jn(e, 5);
                      }),
                      (On.cloneDeepWith = function(e, t) {
                        return Jn(
                          e,
                          5,
                          (t = "function" == typeof t ? t : void 0)
                        );
                      }),
                      (On.cloneWith = function(e, t) {
                        return Jn(
                          e,
                          4,
                          (t = "function" == typeof t ? t : void 0)
                        );
                      }),
                      (On.conformsTo = function(e, t) {
                        return null == t || Zn(e, t, bl(t));
                      }),
                      (On.deburr = Dl),
                      (On.defaultTo = function(e, t) {
                        return null == e || e != e ? t : e;
                      }),
                      (On.divide = ss),
                      (On.endsWith = function(e, t, n) {
                        (e = ll(e)), (t = Zr(t));
                        var r = e.length,
                          a = (n = void 0 === n ? r : Gn(rl(n), 0, r));
                        return (n -= t.length) >= 0 && e.slice(n, a) == t;
                      }),
                      (On.eq = Co),
                      (On.escape = function(e) {
                        return (e = ll(e)) && H.test(e) ? e.replace(P, Pt) : e;
                      }),
                      (On.escapeRegExp = function(e) {
                        return (e = ll(e)) && q.test(e)
                          ? e.replace(V, "\\$&")
                          : e;
                      }),
                      (On.every = function(e, t, n) {
                        var r = Mo(e) ? ct : nr;
                        return n && li(e, t, n) && (t = void 0), r(e, Ja(t, 3));
                      }),
                      (On.find = ao),
                      (On.findIndex = Ti),
                      (On.findKey = function(e, t) {
                        return yt(e, Ja(t, 3), sr);
                      }),
                      (On.findLast = io),
                      (On.findLastIndex = Di),
                      (On.findLastKey = function(e, t) {
                        return yt(e, Ja(t, 3), cr);
                      }),
                      (On.floor = cs),
                      (On.forEach = oo),
                      (On.forEachRight = lo),
                      (On.forIn = function(e, t) {
                        return null == e ? e : or(e, Ja(t, 3), Al);
                      }),
                      (On.forInRight = function(e, t) {
                        return null == e ? e : lr(e, Ja(t, 3), Al);
                      }),
                      (On.forOwn = function(e, t) {
                        return e && sr(e, Ja(t, 3));
                      }),
                      (On.forOwnRight = function(e, t) {
                        return e && cr(e, Ja(t, 3));
                      }),
                      (On.get = fl),
                      (On.gt = jo),
                      (On.gte = To),
                      (On.has = function(e, t) {
                        return null != e && ri(e, t, fr);
                      }),
                      (On.hasIn = hl),
                      (On.head = Ii),
                      (On.identity = Vl),
                      (On.includes = function(e, t, n, r) {
                        (e = Uo(e) ? e : Cl(e)), (n = n && !r ? rl(n) : 0);
                        var a = e.length;
                        return (
                          n < 0 && (n = on(a + n, 0)),
                          Jo(e)
                            ? n <= a && e.indexOf(t, n) > -1
                            : !!a && At(e, t, n) > -1
                        );
                      }),
                      (On.indexOf = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        if (!r) return -1;
                        var a = null == n ? 0 : rl(n);
                        return a < 0 && (a = on(r + a, 0)), At(e, t, a);
                      }),
                      (On.inRange = function(e, t, n) {
                        return (
                          (t = nl(t)),
                          void 0 === n ? ((n = t), (t = 0)) : (n = nl(n)),
                          (function(e, t, n) {
                            return e >= ln(t, n) && e < on(t, n);
                          })((e = il(e)), t, n)
                        );
                      }),
                      (On.invoke = yl),
                      (On.isArguments = Do),
                      (On.isArray = Mo),
                      (On.isArrayBuffer = Io),
                      (On.isArrayLike = Uo),
                      (On.isArrayLikeObject = Fo),
                      (On.isBoolean = function(e) {
                        return !0 === e || !1 === e || (zo(e) && _r(e) == u);
                      }),
                      (On.isBuffer = Po),
                      (On.isDate = Ro),
                      (On.isElement = function(e) {
                        return zo(e) && 1 === e.nodeType && !qo(e);
                      }),
                      (On.isEmpty = function(e) {
                        if (null == e) return !0;
                        if (
                          Uo(e) &&
                          (Mo(e) ||
                            "string" == typeof e ||
                            "function" == typeof e.splice ||
                            Po(e) ||
                            Qo(e) ||
                            Do(e))
                        )
                          return !e.length;
                        var t = ni(e);
                        if (t == f || t == y) return !e.size;
                        if (mi(e)) return !xr(e).length;
                        for (var n in e) if (xe.call(e, n)) return !1;
                        return !0;
                      }),
                      (On.isEqual = function(e, t) {
                        return br(e, t);
                      }),
                      (On.isEqualWith = function(e, t, n) {
                        var r = (n = "function" == typeof n ? n : void 0)
                          ? n(e, t)
                          : void 0;
                        return void 0 === r ? br(e, t, void 0, n) : !!r;
                      }),
                      (On.isError = Ho),
                      (On.isFinite = function(e) {
                        return "number" == typeof e && nn(e);
                      }),
                      (On.isFunction = Wo),
                      (On.isInteger = Yo),
                      (On.isLength = Lo),
                      (On.isMap = $o),
                      (On.isMatch = function(e, t) {
                        return e === t || Ar(e, t, Qa(t));
                      }),
                      (On.isMatchWith = function(e, t, n) {
                        return (
                          (n = "function" == typeof n ? n : void 0),
                          Ar(e, t, Qa(t), n)
                        );
                      }),
                      (On.isNaN = function(e) {
                        return Vo(e) && e != +e;
                      }),
                      (On.isNative = function(e) {
                        if (ui(e))
                          throw new de(
                            "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                          );
                        return wr(e);
                      }),
                      (On.isNil = function(e) {
                        return null == e;
                      }),
                      (On.isNull = function(e) {
                        return null === e;
                      }),
                      (On.isNumber = Vo),
                      (On.isObject = Bo),
                      (On.isObjectLike = zo),
                      (On.isPlainObject = qo),
                      (On.isRegExp = Ko),
                      (On.isSafeInteger = function(e) {
                        return (
                          Yo(e) &&
                          e >= -9007199254740991 &&
                          e <= 9007199254740991
                        );
                      }),
                      (On.isSet = Go),
                      (On.isString = Jo),
                      (On.isSymbol = Zo),
                      (On.isTypedArray = Qo),
                      (On.isUndefined = function(e) {
                        return void 0 === e;
                      }),
                      (On.isWeakMap = function(e) {
                        return zo(e) && ni(e) == w;
                      }),
                      (On.isWeakSet = function(e) {
                        return zo(e) && "[object WeakSet]" == _r(e);
                      }),
                      (On.join = function(e, t) {
                        return null == e ? "" : rn.call(e, t);
                      }),
                      (On.kebabCase = Ml),
                      (On.last = Ri),
                      (On.lastIndexOf = function(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        if (!r) return -1;
                        var a = r;
                        return (
                          void 0 !== n &&
                            (a = (a = rl(n)) < 0 ? on(r + a, 0) : ln(a, r - 1)),
                          t == t
                            ? (function(e, t, n) {
                                for (var r = n + 1; r--; )
                                  if (e[r] === t) return r;
                                return r;
                              })(e, t, a)
                            : bt(e, Et, a, !0)
                        );
                      }),
                      (On.lowerCase = Il),
                      (On.lowerFirst = Ul),
                      (On.lt = Xo),
                      (On.lte = el),
                      (On.max = function(e) {
                        return e && e.length ? rr(e, Vl, pr) : void 0;
                      }),
                      (On.maxBy = function(e, t) {
                        return e && e.length ? rr(e, Ja(t, 2), pr) : void 0;
                      }),
                      (On.mean = function(e) {
                        return xt(e, Vl);
                      }),
                      (On.meanBy = function(e, t) {
                        return xt(e, Ja(t, 2));
                      }),
                      (On.min = function(e) {
                        return e && e.length ? rr(e, Vl, Nr) : void 0;
                      }),
                      (On.minBy = function(e, t) {
                        return e && e.length ? rr(e, Ja(t, 2), Nr) : void 0;
                      }),
                      (On.stubArray = as),
                      (On.stubFalse = is),
                      (On.stubObject = function() {
                        return {};
                      }),
                      (On.stubString = function() {
                        return "";
                      }),
                      (On.stubTrue = function() {
                        return !0;
                      }),
                      (On.multiply = ms),
                      (On.nth = function(e, t) {
                        return e && e.length ? Tr(e, rl(t)) : void 0;
                      }),
                      (On.noConflict = function() {
                        return qe._ === this && (qe._ = Ce), this;
                      }),
                      (On.noop = Zl),
                      (On.now = fo),
                      (On.pad = function(e, t, n) {
                        e = ll(e);
                        var r = (t = rl(t)) ? $t(e) : 0;
                        if (!t || r >= t) return e;
                        var a = (t - r) / 2;
                        return Da(Xt(a), n) + e + Da(Qt(a), n);
                      }),
                      (On.padEnd = function(e, t, n) {
                        e = ll(e);
                        var r = (t = rl(t)) ? $t(e) : 0;
                        return t && r < t ? e + Da(t - r, n) : e;
                      }),
                      (On.padStart = function(e, t, n) {
                        e = ll(e);
                        var r = (t = rl(t)) ? $t(e) : 0;
                        return t && r < t ? Da(t - r, n) + e : e;
                      }),
                      (On.parseInt = function(e, t, n) {
                        return (
                          n || null == t ? (t = 0) : t && (t = +t),
                          cn(ll(e).replace(G, ""), t || 0)
                        );
                      }),
                      (On.random = function(e, t, n) {
                        if (
                          (n &&
                            "boolean" != typeof n &&
                            li(e, t, n) &&
                            (t = n = void 0),
                          void 0 === n &&
                            ("boolean" == typeof t
                              ? ((n = t), (t = void 0))
                              : "boolean" == typeof e &&
                                ((n = e), (e = void 0))),
                          void 0 === e && void 0 === t
                            ? ((e = 0), (t = 1))
                            : ((e = nl(e)),
                              void 0 === t ? ((t = e), (e = 0)) : (t = nl(t))),
                          e > t)
                        ) {
                          var r = e;
                          (e = t), (t = r);
                        }
                        if (n || e % 1 || t % 1) {
                          var a = un();
                          return ln(
                            e + a * (t - e + Be("1e-" + ((a + "").length - 1))),
                            t
                          );
                        }
                        return Fr(e, t);
                      }),
                      (On.reduce = function(e, t, n) {
                        var r = Mo(e) ? ft : kt,
                          a = arguments.length < 3;
                        return r(e, Ja(t, 4), n, a, er);
                      }),
                      (On.reduceRight = function(e, t, n) {
                        var r = Mo(e) ? ht : kt,
                          a = arguments.length < 3;
                        return r(e, Ja(t, 4), n, a, tr);
                      }),
                      (On.repeat = function(e, t, n) {
                        return (
                          (t = (n ? li(e, t, n) : void 0 === t) ? 1 : rl(t)),
                          Pr(ll(e), t)
                        );
                      }),
                      (On.replace = function() {
                        var e = arguments,
                          t = ll(e[0]);
                        return e.length < 3 ? t : t.replace(e[1], e[2]);
                      }),
                      (On.result = function(e, t, n) {
                        var r = -1,
                          a = (t = la(t, e)).length;
                        for (a || ((a = 1), (e = void 0)); ++r < a; ) {
                          var i = null == e ? void 0 : e[Si(t[r])];
                          void 0 === i && ((r = a), (i = n)),
                            (e = Wo(i) ? i.call(e) : i);
                        }
                        return e;
                      }),
                      (On.round = ds),
                      (On.runInContext = e),
                      (On.sample = function(e) {
                        return (Mo(e) ? Hn : Hr)(e);
                      }),
                      (On.size = function(e) {
                        if (null == e) return 0;
                        if (Uo(e)) return Jo(e) ? $t(e) : e.length;
                        var t = ni(e);
                        return t == f || t == y ? e.size : xr(e).length;
                      }),
                      (On.snakeCase = Fl),
                      (On.some = function(e, t, n) {
                        var r = Mo(e) ? gt : Vr;
                        return n && li(e, t, n) && (t = void 0), r(e, Ja(t, 3));
                      }),
                      (On.sortedIndex = function(e, t) {
                        return qr(e, t);
                      }),
                      (On.sortedIndexBy = function(e, t, n) {
                        return Kr(e, t, Ja(n, 2));
                      }),
                      (On.sortedIndexOf = function(e, t) {
                        var n = null == e ? 0 : e.length;
                        if (n) {
                          var r = qr(e, t);
                          if (r < n && Co(e[r], t)) return r;
                        }
                        return -1;
                      }),
                      (On.sortedLastIndex = function(e, t) {
                        return qr(e, t, !0);
                      }),
                      (On.sortedLastIndexBy = function(e, t, n) {
                        return Kr(e, t, Ja(n, 2), !0);
                      }),
                      (On.sortedLastIndexOf = function(e, t) {
                        if (null == e ? 0 : e.length) {
                          var n = qr(e, t, !0) - 1;
                          if (Co(e[n], t)) return n;
                        }
                        return -1;
                      }),
                      (On.startCase = Pl),
                      (On.startsWith = function(e, t, n) {
                        return (
                          (e = ll(e)),
                          (n = null == n ? 0 : Gn(rl(n), 0, e.length)),
                          (t = Zr(t)),
                          e.slice(n, n + t.length) == t
                        );
                      }),
                      (On.subtract = _s),
                      (On.sum = function(e) {
                        return e && e.length ? Ot(e, Vl) : 0;
                      }),
                      (On.sumBy = function(e, t) {
                        return e && e.length ? Ot(e, Ja(t, 2)) : 0;
                      }),
                      (On.template = function(e, t, n) {
                        var r = On.templateSettings;
                        n && li(e, t, n) && (t = void 0),
                          (e = ll(e)),
                          (t = ul({}, t, r, Wa));
                        var a,
                          i,
                          o = ul({}, t.imports, r.imports, Wa),
                          l = bl(o),
                          s = Tt(o, l),
                          c = 0,
                          u = t.interpolate || ue,
                          m = "__p += '",
                          d = he(
                            (t.escape || ue).source +
                              "|" +
                              u.source +
                              "|" +
                              (u === L ? ne : ue).source +
                              "|" +
                              (t.evaluate || ue).source +
                              "|$",
                            "g"
                          ),
                          _ =
                            "//# sourceURL=" +
                            (xe.call(t, "sourceURL")
                              ? (t.sourceURL + "").replace(/[\r\n]/g, " ")
                              : "lodash.templateSources[" + ++He + "]") +
                            "\n";
                        e.replace(d, function(t, n, r, o, l, s) {
                          return (
                            r || (r = o),
                            (m += e.slice(c, s).replace(me, Rt)),
                            n && ((a = !0), (m += "' +\n__e(" + n + ") +\n'")),
                            l && ((i = !0), (m += "';\n" + l + ";\n__p += '")),
                            r &&
                              (m +=
                                "' +\n((__t = (" +
                                r +
                                ")) == null ? '' : __t) +\n'"),
                            (c = s + t.length),
                            t
                          );
                        }),
                          (m += "';\n");
                        var p = xe.call(t, "variable") && t.variable;
                        p || (m = "with (obj) {\n" + m + "\n}\n"),
                          (m = (i ? m.replace(M, "") : m)
                            .replace(I, "$1")
                            .replace(U, "$1;")),
                          (m =
                            "function(" +
                            (p || "obj") +
                            ") {\n" +
                            (p ? "" : "obj || (obj = {});\n") +
                            "var __t, __p = ''" +
                            (a ? ", __e = _.escape" : "") +
                            (i
                              ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                              : ";\n") +
                            m +
                            "return __p\n}");
                        var f = Yl(function() {
                          return _e(l, _ + "return " + m).apply(void 0, s);
                        });
                        if (((f.source = m), Ho(f))) throw f;
                        return f;
                      }),
                      (On.times = function(e, t) {
                        if ((e = rl(e)) < 1 || e > 9007199254740991) return [];
                        var n = 4294967295,
                          r = ln(e, 4294967295);
                        e -= 4294967295;
                        for (var a = Ct(r, (t = Ja(t))); ++n < e; ) t(n);
                        return a;
                      }),
                      (On.toFinite = nl),
                      (On.toInteger = rl),
                      (On.toLength = al),
                      (On.toLower = function(e) {
                        return ll(e).toLowerCase();
                      }),
                      (On.toNumber = il),
                      (On.toSafeInteger = function(e) {
                        return e
                          ? Gn(rl(e), -9007199254740991, 9007199254740991)
                          : 0 === e
                          ? e
                          : 0;
                      }),
                      (On.toString = ll),
                      (On.toUpper = function(e) {
                        return ll(e).toUpperCase();
                      }),
                      (On.trim = function(e, t, n) {
                        if ((e = ll(e)) && (n || void 0 === t))
                          return e.replace(K, "");
                        if (!e || !(t = Zr(t))) return e;
                        var r = Vt(e),
                          a = Vt(t);
                        return ca(r, Mt(r, a), It(r, a) + 1).join("");
                      }),
                      (On.trimEnd = function(e, t, n) {
                        if ((e = ll(e)) && (n || void 0 === t))
                          return e.replace(J, "");
                        if (!e || !(t = Zr(t))) return e;
                        var r = Vt(e);
                        return ca(r, 0, It(r, Vt(t)) + 1).join("");
                      }),
                      (On.trimStart = function(e, t, n) {
                        if ((e = ll(e)) && (n || void 0 === t))
                          return e.replace(G, "");
                        if (!e || !(t = Zr(t))) return e;
                        var r = Vt(e);
                        return ca(r, Mt(r, Vt(t))).join("");
                      }),
                      (On.truncate = function(e, t) {
                        var n = 30,
                          r = "...";
                        if (Bo(t)) {
                          var a = "separator" in t ? t.separator : a;
                          (n = "length" in t ? rl(t.length) : n),
                            (r = "omission" in t ? Zr(t.omission) : r);
                        }
                        var i = (e = ll(e)).length;
                        if (Ht(e)) {
                          var o = Vt(e);
                          i = o.length;
                        }
                        if (n >= i) return e;
                        var l = n - $t(r);
                        if (l < 1) return r;
                        var s = o ? ca(o, 0, l).join("") : e.slice(0, l);
                        if (void 0 === a) return s + r;
                        if ((o && (l += s.length - l), Ko(a))) {
                          if (e.slice(l).search(a)) {
                            var c,
                              u = s;
                            for (
                              a.global ||
                                (a = he(a.source, ll(re.exec(a)) + "g")),
                                a.lastIndex = 0;
                              (c = a.exec(u));

                            )
                              var m = c.index;
                            s = s.slice(0, void 0 === m ? l : m);
                          }
                        } else if (e.indexOf(Zr(a), l) != l) {
                          var d = s.lastIndexOf(a);
                          d > -1 && (s = s.slice(0, d));
                        }
                        return s + r;
                      }),
                      (On.unescape = function(e) {
                        return (e = ll(e)) && R.test(e) ? e.replace(F, qt) : e;
                      }),
                      (On.uniqueId = function(e) {
                        var t = ++Se;
                        return ll(e) + t;
                      }),
                      (On.upperCase = Rl),
                      (On.upperFirst = Hl),
                      (On.each = oo),
                      (On.eachRight = lo),
                      (On.first = Ii),
                      Jl(
                        On,
                        ((us = {}),
                        sr(On, function(e, t) {
                          xe.call(On.prototype, t) || (us[t] = e);
                        }),
                        us),
                        { chain: !1 }
                      ),
                      (On.VERSION = "4.17.15"),
                      lt(
                        [
                          "bind",
                          "bindKey",
                          "curry",
                          "curryRight",
                          "partial",
                          "partialRight"
                        ],
                        function(e) {
                          On[e].placeholder = On;
                        }
                      ),
                      lt(["drop", "take"], function(e, t) {
                        (Dn.prototype[e] = function(n) {
                          n = void 0 === n ? 1 : on(rl(n), 0);
                          var r =
                            this.__filtered__ && !t
                              ? new Dn(this)
                              : this.clone();
                          return (
                            r.__filtered__
                              ? (r.__takeCount__ = ln(n, r.__takeCount__))
                              : r.__views__.push({
                                  size: ln(n, 4294967295),
                                  type: e + (r.__dir__ < 0 ? "Right" : "")
                                }),
                            r
                          );
                        }),
                          (Dn.prototype[e + "Right"] = function(t) {
                            return this.reverse()
                              [e](t)
                              .reverse();
                          });
                      }),
                      lt(["filter", "map", "takeWhile"], function(e, t) {
                        var n = t + 1,
                          r = 1 == n || 3 == n;
                        Dn.prototype[e] = function(e) {
                          var t = this.clone();
                          return (
                            t.__iteratees__.push({
                              iteratee: Ja(e, 3),
                              type: n
                            }),
                            (t.__filtered__ = t.__filtered__ || r),
                            t
                          );
                        };
                      }),
                      lt(["head", "last"], function(e, t) {
                        var n = "take" + (t ? "Right" : "");
                        Dn.prototype[e] = function() {
                          return this[n](1).value()[0];
                        };
                      }),
                      lt(["initial", "tail"], function(e, t) {
                        var n = "drop" + (t ? "" : "Right");
                        Dn.prototype[e] = function() {
                          return this.__filtered__ ? new Dn(this) : this[n](1);
                        };
                      }),
                      (Dn.prototype.compact = function() {
                        return this.filter(Vl);
                      }),
                      (Dn.prototype.find = function(e) {
                        return this.filter(e).head();
                      }),
                      (Dn.prototype.findLast = function(e) {
                        return this.reverse().find(e);
                      }),
                      (Dn.prototype.invokeMap = Rr(function(e, t) {
                        return "function" == typeof e
                          ? new Dn(this)
                          : this.map(function(n) {
                              return vr(n, e, t);
                            });
                      })),
                      (Dn.prototype.reject = function(e) {
                        return this.filter(xo(Ja(e)));
                      }),
                      (Dn.prototype.slice = function(e, t) {
                        e = rl(e);
                        var n = this;
                        return n.__filtered__ && (e > 0 || t < 0)
                          ? new Dn(n)
                          : (e < 0
                              ? (n = n.takeRight(-e))
                              : e && (n = n.drop(e)),
                            void 0 !== t &&
                              (n =
                                (t = rl(t)) < 0
                                  ? n.dropRight(-t)
                                  : n.take(t - e)),
                            n);
                      }),
                      (Dn.prototype.takeRightWhile = function(e) {
                        return this.reverse()
                          .takeWhile(e)
                          .reverse();
                      }),
                      (Dn.prototype.toArray = function() {
                        return this.take(4294967295);
                      }),
                      sr(Dn.prototype, function(e, t) {
                        var n = /^(?:filter|find|map|reject)|While$/.test(t),
                          r = /^(?:head|last)$/.test(t),
                          a = On[r ? "take" + ("last" == t ? "Right" : "") : t],
                          i = r || /^find/.test(t);
                        a &&
                          (On.prototype[t] = function() {
                            var t = this.__wrapped__,
                              o = r ? [1] : arguments,
                              l = t instanceof Dn,
                              s = o[0],
                              c = l || Mo(t),
                              u = function(e) {
                                var t = a.apply(On, pt([e], o));
                                return r && m ? t[0] : t;
                              };
                            c &&
                              n &&
                              "function" == typeof s &&
                              1 != s.length &&
                              (l = c = !1);
                            var m = this.__chain__,
                              d = !!this.__actions__.length,
                              _ = i && !m,
                              p = l && !d;
                            if (!i && c) {
                              t = p ? t : new Dn(this);
                              var f = e.apply(t, o);
                              return (
                                f.__actions__.push({
                                  func: to,
                                  args: [u],
                                  thisArg: void 0
                                }),
                                new Tn(f, m)
                              );
                            }
                            return _ && p
                              ? e.apply(this, o)
                              : ((f = this.thru(u)),
                                _ ? (r ? f.value()[0] : f.value()) : f);
                          });
                      }),
                      lt(
                        ["pop", "push", "shift", "sort", "splice", "unshift"],
                        function(e) {
                          var t = ye[e],
                            n = /^(?:push|sort|unshift)$/.test(e)
                              ? "tap"
                              : "thru",
                            r = /^(?:pop|shift)$/.test(e);
                          On.prototype[e] = function() {
                            var e = arguments;
                            if (r && !this.__chain__) {
                              var a = this.value();
                              return t.apply(Mo(a) ? a : [], e);
                            }
                            return this[n](function(n) {
                              return t.apply(Mo(n) ? n : [], e);
                            });
                          };
                        }
                      ),
                      sr(Dn.prototype, function(e, t) {
                        var n = On[t];
                        if (n) {
                          var r = n.name + "";
                          xe.call(yn, r) || (yn[r] = []),
                            yn[r].push({ name: t, func: n });
                        }
                      }),
                      (yn[Oa(void 0, 2).name] = [
                        { name: "wrapper", func: void 0 }
                      ]),
                      (Dn.prototype.clone = function() {
                        var e = new Dn(this.__wrapped__);
                        return (
                          (e.__actions__ = ga(this.__actions__)),
                          (e.__dir__ = this.__dir__),
                          (e.__filtered__ = this.__filtered__),
                          (e.__iteratees__ = ga(this.__iteratees__)),
                          (e.__takeCount__ = this.__takeCount__),
                          (e.__views__ = ga(this.__views__)),
                          e
                        );
                      }),
                      (Dn.prototype.reverse = function() {
                        if (this.__filtered__) {
                          var e = new Dn(this);
                          (e.__dir__ = -1), (e.__filtered__ = !0);
                        } else (e = this.clone()).__dir__ *= -1;
                        return e;
                      }),
                      (Dn.prototype.value = function() {
                        var e = this.__wrapped__.value(),
                          t = this.__dir__,
                          n = Mo(e),
                          r = t < 0,
                          a = n ? e.length : 0,
                          i = (function(e, t, n) {
                            var r = -1,
                              a = n.length;
                            for (; ++r < a; ) {
                              var i = n[r],
                                o = i.size;
                              switch (i.type) {
                                case "drop":
                                  e += o;
                                  break;
                                case "dropRight":
                                  t -= o;
                                  break;
                                case "take":
                                  t = ln(t, e + o);
                                  break;
                                case "takeRight":
                                  e = on(e, t - o);
                              }
                            }
                            return { start: e, end: t };
                          })(0, a, this.__views__),
                          o = i.start,
                          l = i.end,
                          s = l - o,
                          c = r ? l : o - 1,
                          u = this.__iteratees__,
                          m = u.length,
                          d = 0,
                          _ = ln(s, this.__takeCount__);
                        if (!n || (!r && a == s && _ == s))
                          return na(e, this.__actions__);
                        var p = [];
                        e: for (; s-- && d < _; ) {
                          for (var f = -1, h = e[(c += t)]; ++f < m; ) {
                            var g = u[f],
                              v = g.iteratee,
                              y = g.type,
                              b = v(h);
                            if (2 == y) h = b;
                            else if (!b) {
                              if (1 == y) continue e;
                              break e;
                            }
                          }
                          p[d++] = h;
                        }
                        return p;
                      }),
                      (On.prototype.at = no),
                      (On.prototype.chain = function() {
                        return eo(this);
                      }),
                      (On.prototype.commit = function() {
                        return new Tn(this.value(), this.__chain__);
                      }),
                      (On.prototype.next = function() {
                        void 0 === this.__values__ &&
                          (this.__values__ = tl(this.value()));
                        var e = this.__index__ >= this.__values__.length;
                        return {
                          done: e,
                          value: e ? void 0 : this.__values__[this.__index__++]
                        };
                      }),
                      (On.prototype.plant = function(e) {
                        for (var t, n = this; n instanceof jn; ) {
                          var r = ki(n);
                          (r.__index__ = 0),
                            (r.__values__ = void 0),
                            t ? (a.__wrapped__ = r) : (t = r);
                          var a = r;
                          n = n.__wrapped__;
                        }
                        return (a.__wrapped__ = e), t;
                      }),
                      (On.prototype.reverse = function() {
                        var e = this.__wrapped__;
                        if (e instanceof Dn) {
                          var t = e;
                          return (
                            this.__actions__.length && (t = new Dn(this)),
                            (t = t.reverse()).__actions__.push({
                              func: to,
                              args: [Li],
                              thisArg: void 0
                            }),
                            new Tn(t, this.__chain__)
                          );
                        }
                        return this.thru(Li);
                      }),
                      (On.prototype.toJSON = On.prototype.valueOf = On.prototype.value = function() {
                        return na(this.__wrapped__, this.__actions__);
                      }),
                      (On.prototype.first = On.prototype.head),
                      Qe &&
                        (On.prototype[Qe] = function() {
                          return this;
                        }),
                      On
                    );
                  })();
                  (qe._ = Kt),
                    void 0 ===
                      (a = function() {
                        return Kt;
                      }.call(t, n, t, r)) || (r.exports = a);
                }.call(this));
              }.call(this, n(38), n(84)(e)));
            },
            function(e, t, n) {
              var r = n(7),
                a = n(89);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            ,
            function(e, t, n) {
              e.exports = n(65)();
            },
            function(e, t, n) {
              "use strict";
              (function(e) {
                var n = "object" == typeof e && e && e.Object === Object && e;
                t.a = n;
              }.call(this, n(38)));
            },
            function(e, t, n) {
              var r = n(7),
                a = n(91);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t) {
              var n;
              n = (function() {
                return this;
              })();
              try {
                n = n || new Function("return this")();
              } catch (e) {
                "object" == typeof window && (n = window);
              }
              e.exports = n;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(59);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(60);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              var r = n(7),
                a = n(62);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t) {
              e.exports = function(e, t) {
                (e.prototype = Object.create(t.prototype)),
                  (e.prototype.constructor = e),
                  (e.__proto__ = t);
              };
            },
            function(e, t, n) {
              var r = n(67);
              (e.exports = _),
                (e.exports.parse = i),
                (e.exports.compile = function(e, t) {
                  return l(i(e, t));
                }),
                (e.exports.tokensToFunction = l),
                (e.exports.tokensToRegExp = d);
              var a = new RegExp(
                [
                  "(\\\\.)",
                  "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
                ].join("|"),
                "g"
              );
              function i(e, t) {
                for (
                  var n,
                    r = [],
                    i = 0,
                    o = 0,
                    l = "",
                    u = (t && t.delimiter) || "/";
                  null != (n = a.exec(e));

                ) {
                  var m = n[0],
                    d = n[1],
                    _ = n.index;
                  if (((l += e.slice(o, _)), (o = _ + m.length), d)) l += d[1];
                  else {
                    var p = e[o],
                      f = n[2],
                      h = n[3],
                      g = n[4],
                      v = n[5],
                      y = n[6],
                      b = n[7];
                    l && (r.push(l), (l = ""));
                    var A = null != f && null != p && p !== f,
                      w = "+" === y || "*" === y,
                      E = "?" === y || "*" === y,
                      x = n[2] || u,
                      S = g || v;
                    r.push({
                      name: h || i++,
                      prefix: f || "",
                      delimiter: x,
                      optional: E,
                      repeat: w,
                      partial: A,
                      asterisk: !!b,
                      pattern: S ? c(S) : b ? ".*" : "[^" + s(x) + "]+?"
                    });
                  }
                }
                return o < e.length && (l += e.substr(o)), l && r.push(l), r;
              }
              function o(e) {
                return encodeURI(e).replace(/[\/?#]/g, function(e) {
                  return (
                    "%" +
                    e
                      .charCodeAt(0)
                      .toString(16)
                      .toUpperCase()
                  );
                });
              }
              function l(e) {
                for (var t = new Array(e.length), n = 0; n < e.length; n++)
                  "object" == typeof e[n] &&
                    (t[n] = new RegExp("^(?:" + e[n].pattern + ")$"));
                return function(n, a) {
                  for (
                    var i = "",
                      l = n || {},
                      s = (a || {}).pretty ? o : encodeURIComponent,
                      c = 0;
                    c < e.length;
                    c++
                  ) {
                    var u = e[c];
                    if ("string" != typeof u) {
                      var m,
                        d = l[u.name];
                      if (null == d) {
                        if (u.optional) {
                          u.partial && (i += u.prefix);
                          continue;
                        }
                        throw new TypeError(
                          'Expected "' + u.name + '" to be defined'
                        );
                      }
                      if (r(d)) {
                        if (!u.repeat)
                          throw new TypeError(
                            'Expected "' +
                              u.name +
                              '" to not repeat, but received `' +
                              JSON.stringify(d) +
                              "`"
                          );
                        if (0 === d.length) {
                          if (u.optional) continue;
                          throw new TypeError(
                            'Expected "' + u.name + '" to not be empty'
                          );
                        }
                        for (var _ = 0; _ < d.length; _++) {
                          if (((m = s(d[_])), !t[c].test(m)))
                            throw new TypeError(
                              'Expected all "' +
                                u.name +
                                '" to match "' +
                                u.pattern +
                                '", but received `' +
                                JSON.stringify(m) +
                                "`"
                            );
                          i += (0 === _ ? u.prefix : u.delimiter) + m;
                        }
                      } else {
                        if (
                          ((m = u.asterisk
                            ? encodeURI(d).replace(/[?#]/g, function(e) {
                                return (
                                  "%" +
                                  e
                                    .charCodeAt(0)
                                    .toString(16)
                                    .toUpperCase()
                                );
                              })
                            : s(d)),
                          !t[c].test(m))
                        )
                          throw new TypeError(
                            'Expected "' +
                              u.name +
                              '" to match "' +
                              u.pattern +
                              '", but received "' +
                              m +
                              '"'
                          );
                        i += u.prefix + m;
                      }
                    } else i += u;
                  }
                  return i;
                };
              }
              function s(e) {
                return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
              }
              function c(e) {
                return e.replace(/([=!:$\/()])/g, "\\$1");
              }
              function u(e, t) {
                return (e.keys = t), e;
              }
              function m(e) {
                return e.sensitive ? "" : "i";
              }
              function d(e, t, n) {
                r(t) || ((n = t || n), (t = []));
                for (
                  var a = (n = n || {}).strict, i = !1 !== n.end, o = "", l = 0;
                  l < e.length;
                  l++
                ) {
                  var c = e[l];
                  if ("string" == typeof c) o += s(c);
                  else {
                    var d = s(c.prefix),
                      _ = "(?:" + c.pattern + ")";
                    t.push(c),
                      c.repeat && (_ += "(?:" + d + _ + ")*"),
                      (o += _ = c.optional
                        ? c.partial
                          ? d + "(" + _ + ")?"
                          : "(?:" + d + "(" + _ + "))?"
                        : d + "(" + _ + ")");
                  }
                }
                var p = s(n.delimiter || "/"),
                  f = o.slice(-p.length) === p;
                return (
                  a ||
                    (o =
                      (f ? o.slice(0, -p.length) : o) + "(?:" + p + "(?=$))?"),
                  (o += i ? "$" : a && f ? "" : "(?=" + p + "|$)"),
                  u(new RegExp("^" + o, m(n)), t)
                );
              }
              function _(e, t, n) {
                return (
                  r(t) || ((n = t || n), (t = [])),
                  (n = n || {}),
                  e instanceof RegExp
                    ? (function(e, t) {
                        var n = e.source.match(/\((?!\?)/g);
                        if (n)
                          for (var r = 0; r < n.length; r++)
                            t.push({
                              name: r,
                              prefix: null,
                              delimiter: null,
                              optional: !1,
                              repeat: !1,
                              partial: !1,
                              asterisk: !1,
                              pattern: null
                            });
                        return u(e, t);
                      })(e, t)
                    : r(e)
                    ? (function(e, t, n) {
                        for (var r = [], a = 0; a < e.length; a++)
                          r.push(_(e[a], t, n).source);
                        return u(
                          new RegExp("(?:" + r.join("|") + ")", m(n)),
                          t
                        );
                      })(e, t, n)
                    : (function(e, t, n) {
                        return d(i(e, n), t, n);
                      })(e, t, n)
                );
              }
            },
            function(e, t, n) {
              "use strict";
              (function(e) {
                var r = n(36),
                  a =
                    "object" == typeof exports &&
                    exports &&
                    !exports.nodeType &&
                    exports,
                  i = a && "object" == typeof e && e && !e.nodeType && e,
                  o = i && i.exports === a && r.a.process,
                  l = (function() {
                    try {
                      var e = i && i.require && i.require("util").types;
                      return e || (o && o.binding && o.binding("util"));
                    } catch (e) {}
                  })();
                t.a = l;
              }.call(this, n(47)(e)));
            },
            ,
            function(e, t, n) {
              "use strict";
              e.exports = n(68);
            },
            function(e, t) {
              e.exports = function(e) {
                if (!e.webpackPolyfill) {
                  var t = Object.create(e);
                  t.children || (t.children = []),
                    Object.defineProperty(t, "loaded", {
                      enumerable: !0,
                      get: function() {
                        return t.l;
                      }
                    }),
                    Object.defineProperty(t, "id", {
                      enumerable: !0,
                      get: function() {
                        return t.i;
                      }
                    }),
                    Object.defineProperty(t, "exports", { enumerable: !0 }),
                    (t.webpackPolyfill = 1);
                }
                return t;
              };
            },
            function(e, t, n) {
              var r = n(7),
                a = n(61);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              "use strict";
              (function(t) {
                var n = "__global_unique_id__";
                e.exports = function() {
                  return (t[n] = (t[n] || 0) + 1);
                };
              }.call(this, n(38)));
            },
            function(e, t, n) {
              "use strict";
              var r = n(46),
                a = {
                  childContextTypes: !0,
                  contextType: !0,
                  contextTypes: !0,
                  defaultProps: !0,
                  displayName: !0,
                  getDefaultProps: !0,
                  getDerivedStateFromError: !0,
                  getDerivedStateFromProps: !0,
                  mixins: !0,
                  propTypes: !0,
                  type: !0
                },
                i = {
                  name: !0,
                  length: !0,
                  prototype: !0,
                  caller: !0,
                  callee: !0,
                  arguments: !0,
                  arity: !0
                },
                o = {
                  $$typeof: !0,
                  compare: !0,
                  defaultProps: !0,
                  displayName: !0,
                  propTypes: !0,
                  type: !0
                },
                l = {};
              function s(e) {
                return r.isMemo(e) ? o : l[e.$$typeof] || a;
              }
              l[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
              };
              var c = Object.defineProperty,
                u = Object.getOwnPropertyNames,
                m = Object.getOwnPropertySymbols,
                d = Object.getOwnPropertyDescriptor,
                _ = Object.getPrototypeOf,
                p = Object.prototype;
              e.exports = function e(t, n, r) {
                if ("string" != typeof n) {
                  if (p) {
                    var a = _(n);
                    a && a !== p && e(t, a, r);
                  }
                  var o = u(n);
                  m && (o = o.concat(m(n)));
                  for (var l = s(t), f = s(n), h = 0; h < o.length; ++h) {
                    var g = o[h];
                    if (!(i[g] || (r && r[g]) || (f && f[g]) || (l && l[g]))) {
                      var v = d(n, g);
                      try {
                        c(t, g, v);
                      } catch (e) {}
                    }
                  }
                  return t;
                }
                return t;
              };
            },
            function(e, t, n) {
              var r = n(7),
                a = n(69);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            function(e, t, n) {
              "use strict";
              (function(e) {
                var r = n(12),
                  a = n(53),
                  i =
                    "object" == typeof exports &&
                    exports &&
                    !exports.nodeType &&
                    exports,
                  o = i && "object" == typeof e && e && !e.nodeType && e,
                  l = o && o.exports === i ? r.a.Buffer : void 0,
                  s = (l ? l.isBuffer : void 0) || a.a;
                t.a = s;
              }.call(this, n(47)(e)));
            },
            function(e, t, n) {
              "use strict";
              t.a = function() {
                return !1;
              };
            },
            function(e) {
              e.exports = JSON.parse(
                '[{"name":"aspirin","uuid":"18f43c99-2329-426e-97b5-c3356e6afe54","strength":"81mg","dosageUnits":[{"uuid":"1513AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","name":"Tablet","selected":true},{"uuid":"1608AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","name":"Capsule"}],"route":[{"name":"Oral","conceptUuid":"160240AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","selected":true}],"commonFrequencies":[{"name":"Once daily","conceptUuid":"160862AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","selected":true},{"name":"Twice daily","conceptUuid":"160858AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}],"commonDosages":[{"dosage":"81 mg","numberOfPills":1},{"dosage":"162 mg","numberOfPills":2},{"dosage":"243 mg","numberOfPills":3,"selected":true}]},{"name":"Sulfadoxine","uuid":"fc92c351-8a85-41b9-95bf-a7dfea46c9cd","strength":"500mg","dosageUnits":[{"uuid":"1513AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","name":"Tablet","selected":true},{"uuid":"1608AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","name":"Capsule"}],"route":[{"name":"Oral","conceptUuid":"160240AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","selected":true}],"commonFrequencies":[{"name":"Once daily","conceptUuid":"160862AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","selected":true},{"name":"Twice daily","conceptUuid":"160858AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}],"commonDosages":[{"dosage":"500 mg","numberOfPills":1},{"dosage":"1000 mg","numberOfPills":2},{"dosage":"1500 mg","numberOfPills":3,"selected":true}]}]'
              );
            },
            function(e, t, n) {
              var r = n(7),
                a = n(92);
              "string" == typeof (a = a.__esModule ? a.default : a) &&
                (a = [[e.i, a, ""]]);
              var i = { insert: "head", singleton: !1 },
                o = (r(a, i), a.locals ? a.locals : {});
              e.exports = o;
            },
            ,
            function(e, t, n) {
              var r = { "./en.json": [95, 1] };
              function a(e) {
                if (!n.o(r, e))
                  return Promise.resolve().then(function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw ((t.code = "MODULE_NOT_FOUND"), t);
                  });
                var t = r[e],
                  a = t[0];
                return n.e(t[1]).then(function() {
                  return n(a);
                });
              }
              (a.keys = function() {
                return Object.keys(r);
              }),
                (a.id = 57),
                (e.exports = a);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                '.omrs-breakpoint-lt-desktop .esm-patient-chart-widgets__summary-card__card___1cZTy {\n  width: 100%;\n  box-shadow: 0rem 0.125rem 0.25rem rgba(0, 0, 0, 0.08),\n    0rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.04);\n}\n\n.omrs-breakpoint-gt-tablet .esm-patient-chart-widgets__summary-card__card___1cZTy {\n  box-shadow: 0rem 0.125rem 0.25rem rgba(0, 0, 0, 0.08),\n    0rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.04);\n}\n\n.omrs-breakpoint-lt-desktop .esm-patient-chart-widgets__summary-card__card___1cZTy {\n  margin: 0rem 0rem;\n}\n\n.omrs-card button.esm-patient-chart-widgets__summary-card__addBtn___3cIWi {\n  color: var(--omrs-color-ink-medium-contrast);\n  letter-spacing: 0.0125rem;\n}\n\n.omrs-card button.esm-patient-chart-widgets__summary-card__editBtn___3QmO- {\n  color: var(--omrs-color-ink-medium-contrast);\n  letter-spacing: 0.0125rem;\n}\n\nbutton.esm-patient-chart-widgets__summary-card__addBtn___3cIWi:hover {\n  color: var(--omrs-color-interaction-plus-one);\n}\n\nbutton.esm-patient-chart-widgets__summary-card__editBtn___3QmO-:hover {\n  color: var(--omrs-color-interaction-plus-one);\n}\n\n.esm-patient-chart-widgets__summary-card__header___2Zb2p {\n  display: grid;\n  grid-template-columns: [one] 1fr [two] 4.25rem;\n  grid-template-rows: [rowone] 3rem;\n  grid-template-areas: "a b";\n  background-color: var(--omrs-color-bg-medium-contrast);\n  align-items: center;\n  border-bottom: 0.0625rem solid var(--omrs-color-bg-low-contrast);\n  border-radius: 0.25rem 0.25rem 0 0;\n  justify-content: space-between;\n}\n\n.esm-patient-chart-widgets__summary-card__headerTitle___1kac0 {\n  grid-area: a;\n}\n\n.esm-patient-chart-widgets__summary-card__headerAdd___QpZe_ {\n  grid-area: b;\n  justify-self: center;\n}\n\n.esm-patient-chart-widgets__summary-card__headerEdit___Zg6tI {\n  grid-area: b;\n  justify-self: center;\n}\n\n.esm-patient-chart-widgets__summary-card__title___12KXp {\n  padding: 0 0 0 1rem;\n  display: flex;\n  align-items: center;\n  height: 3rem;\n}\n',
                ""
              ]),
                (t.locals = {
                  card: "esm-patient-chart-widgets__summary-card__card___1cZTy",
                  addBtn:
                    "esm-patient-chart-widgets__summary-card__addBtn___3cIWi",
                  editBtn:
                    "esm-patient-chart-widgets__summary-card__editBtn___3QmO-",
                  header:
                    "esm-patient-chart-widgets__summary-card__header___2Zb2p",
                  headerTitle:
                    "esm-patient-chart-widgets__summary-card__headerTitle___1kac0",
                  headerAdd:
                    "esm-patient-chart-widgets__summary-card__headerAdd___QpZe_",
                  headerEdit:
                    "esm-patient-chart-widgets__summary-card__headerEdit___Zg6tI",
                  title:
                    "esm-patient-chart-widgets__summary-card__title___12KXp"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                ".esm-patient-chart-widgets__summary-card-row__row___21pLz.omrs-unstyled {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: none;\n  border-bottom: inherit;\n  padding: 0.625rem 0.25rem 0.625rem 1rem;\n  border-radius: 0;\n  box-shadow: none;\n  outline: none;\n}\n\n.esm-patient-chart-widgets__summary-card-row__row___21pLz.omrs-unstyled:visited,\n.esm-patient-chart-widgets__summary-card-row__row___21pLz.omrs-unstyled:hover,\n.esm-patient-chart-widgets__summary-card-row__row___21pLz.omrs-unstyled:active,\n.esm-patient-chart-widgets__summary-card-row__row___21pLz.omrs-unstyled:focus,\n.esm-patient-chart-widgets__summary-card-row__row___21pLz.omrs-unstyled:active:hover {\n  padding: 0.625rem 0.25rem 0.625rem 1rem;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-bottom: inherit;\n  border-radius: 0;\n}\n\n.esm-patient-chart-widgets__summary-card-row__row___21pLz:not(:last-child) {\n  border-bottom: 1px solid var(--omrs-color-bg-low-contrast);\n}\n",
                ""
              ]),
                (t.locals = {
                  row:
                    "esm-patient-chart-widgets__summary-card-row__row___21pLz"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                ".esm-patient-chart-widgets__summary-card-footer__footer___3Pjgm {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0rem 0rem 0rem 0.5rem;\n  background-color: var(--omrs-color-bg-medium-contrast);\n  margin: 0rem;\n  color: var(--omrs-color-ink-medium-contrast);\n}\n",
                ""
              ]),
                (t.locals = {
                  footer:
                    "esm-patient-chart-widgets__summary-card-footer__footer___3Pjgm"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                ".esm-patient-chart-widgets__horizontal-label-value__root___2Nlrg sup {\n  line-height: 0;\n  margin: 0.25rem;\n}\n\n.esm-patient-chart-widgets__horizontal-label-value__root___2Nlrg {\n  display: flex;\n  justify-content: space-between;\n  width: 95%;\n}\n",
                ""
              ]),
                (t.locals = {
                  root:
                    "esm-patient-chart-widgets__horizontal-label-value__root___2Nlrg"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                ".esm-patient-chart-widgets__vertical-label-value__label___1nS7t {\n  color: var(--omrs-color-ink-medium-contrast);\n  text-transform: capitalize;\n}\n\n.esm-patient-chart-widgets__vertical-label-value__root___1xmeI:not(:last-of-type) {\n  margin-right: 0.75rem;\n}\n",
                ""
              ]),
                (t.locals = {
                  label:
                    "esm-patient-chart-widgets__vertical-label-value__label___1nS7t",
                  root:
                    "esm-patient-chart-widgets__vertical-label-value__root___1xmeI"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                ".esm-patient-chart-widgets__tabs-component__panel___2Wl-y {\n  width: 100%;\n}\n.esm-patient-chart-widgets__tabs-component__tabs___3VVhO {\n  padding: 0;\n  margin-bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  -webkit-margin-before: 0;\n  -webkit-margin-after: 0;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 0px;\n}\n\n.esm-patient-chart-widgets__tabs-component__tab___26sPj {\n  margin-left: 0;\n  font-weight: 300;\n  cursor: pointer;\n  color: #aaa;\n  text-align: center;\n  width: 100%;\n}\n\n.esm-patient-chart-widgets__tabs-component__tab___26sPj {\n  transition: background-color 0.2s linear;\n}\n\n.esm-patient-chart-widgets__tabs-component__selected___rsmwQ {\n  border-bottom: 0.125rem solid var(--omrs-color-interaction);\n  background-color: var(--omrs-color-interaction-minus-two);\n}\n\n.esm-patient-chart-widgets__tabs-component__selected___rsmwQ button {\n  color: var(--omrs-color-ink-high-contrast);\n}\n\n.esm-patient-chart-widgets__tabs-component__closeIcon___203Mm {\n  float: right;\n  cursor: pointer;\n}\n\n.esm-patient-chart-widgets__tabs-component__closeIcon___203Mm:hover {\n  background-color: var(--omrs-color-interaction-minus-two);\n}\n\n.esm-patient-chart-widgets__tabs-component__tab___26sPj > button {\n  width: 100%;\n  height: 3rem;\n}\n\n.esm-patient-chart-widgets__tabs-component__tab___26sPj > button:focus,\n.esm-patient-chart-widgets__tabs-component__tab___26sPj > button:active {\n  outline: 0 !important;\n}\n\n.esm-patient-chart-widgets__tabs-component__unselected___2Y4uz {\n  border-bottom: 0.0625rem solid var(--omrs-color-ink-lowest-contrast);\n}\n",
                ""
              ]),
                (t.locals = {
                  panel:
                    "esm-patient-chart-widgets__tabs-component__panel___2Wl-y",
                  tabs:
                    "esm-patient-chart-widgets__tabs-component__tabs___3VVhO",
                  tab: "esm-patient-chart-widgets__tabs-component__tab___26sPj",
                  selected:
                    "esm-patient-chart-widgets__tabs-component__selected___rsmwQ",
                  closeIcon:
                    "esm-patient-chart-widgets__tabs-component__closeIcon___203Mm",
                  unselected:
                    "esm-patient-chart-widgets__tabs-component__unselected___2Y4uz"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                ".esm-patient-chart-widgets__breadcrumbs-component__wrapper___1sbUf {\n  display: flex;\n  padding: 0.88rem;\n  align-items: center;\n  border-bottom: 1px solid var(--omrs-color-ink-lowest-contrast);\n}\n\n.esm-patient-chart-widgets__breadcrumbs-component__active___3vnpJ,\n.esm-patient-chart-widgets__breadcrumbs-component__inactive___32xgN {\n  text-transform: capitalize;\n}\n.esm-patient-chart-widgets__breadcrumbs-component__active___3vnpJ {\n  color: var(--omrs-color-ink-high-contrast);\n  font-weight: bold;\n}\n\n.esm-patient-chart-widgets__breadcrumbs-component__inactive___32xgN {\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__breadcrumbs-component__route___2zCrr {\n  display: flex;\n  align-items: center;\n}\n\n.esm-patient-chart-widgets__breadcrumbs-component__breadcrumb___1Q9Nv {\n  text-decoration: none;\n}\n.esm-patient-chart-widgets__breadcrumbs-component__breadcrumb___1Q9Nv:hover {\n  color: var(--omrs-color-interaction);\n  font-weight: bold;\n}\n",
                ""
              ]),
                (t.locals = {
                  wrapper:
                    "esm-patient-chart-widgets__breadcrumbs-component__wrapper___1sbUf",
                  active:
                    "esm-patient-chart-widgets__breadcrumbs-component__active___3vnpJ",
                  inactive:
                    "esm-patient-chart-widgets__breadcrumbs-component__inactive___32xgN",
                  route:
                    "esm-patient-chart-widgets__breadcrumbs-component__route___2zCrr",
                  breadcrumb:
                    "esm-patient-chart-widgets__breadcrumbs-component__breadcrumb___1Q9Nv"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              "use strict";
              var r = n(66);
              function a() {}
              function i() {}
              (i.resetWarningCache = a),
                (e.exports = function() {
                  function e(e, t, n, a, i, o) {
                    if (o !== r) {
                      var l = new Error(
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                      );
                      throw ((l.name = "Invariant Violation"), l);
                    }
                  }
                  function t() {
                    return e;
                  }
                  e.isRequired = e;
                  var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: a
                  };
                  return (n.PropTypes = n), n;
                });
            },
            function(e, t, n) {
              "use strict";
              e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            },
            function(e, t) {
              e.exports =
                Array.isArray ||
                function(e) {
                  return "[object Array]" == Object.prototype.toString.call(e);
                };
            },
            function(e, t, n) {
              "use strict";
              /** @license React v16.10.2
               * react-is.production.min.js
               *
               * Copyright (c) Facebook, Inc. and its affiliates.
               *
               * This source code is licensed under the MIT license found in the
               * LICENSE file in the root directory of this source tree.
               */ Object.defineProperty(t, "__esModule", { value: !0 });
              var r = "function" == typeof Symbol && Symbol.for,
                a = r ? Symbol.for("react.element") : 60103,
                i = r ? Symbol.for("react.portal") : 60106,
                o = r ? Symbol.for("react.fragment") : 60107,
                l = r ? Symbol.for("react.strict_mode") : 60108,
                s = r ? Symbol.for("react.profiler") : 60114,
                c = r ? Symbol.for("react.provider") : 60109,
                u = r ? Symbol.for("react.context") : 60110,
                m = r ? Symbol.for("react.async_mode") : 60111,
                d = r ? Symbol.for("react.concurrent_mode") : 60111,
                _ = r ? Symbol.for("react.forward_ref") : 60112,
                p = r ? Symbol.for("react.suspense") : 60113,
                f = r ? Symbol.for("react.suspense_list") : 60120,
                h = r ? Symbol.for("react.memo") : 60115,
                g = r ? Symbol.for("react.lazy") : 60116,
                v = r ? Symbol.for("react.fundamental") : 60117,
                y = r ? Symbol.for("react.responder") : 60118,
                b = r ? Symbol.for("react.scope") : 60119;
              function A(e) {
                if ("object" == typeof e && null !== e) {
                  var t = e.$$typeof;
                  switch (t) {
                    case a:
                      switch ((e = e.type)) {
                        case m:
                        case d:
                        case o:
                        case s:
                        case l:
                        case p:
                          return e;
                        default:
                          switch ((e = e && e.$$typeof)) {
                            case u:
                            case _:
                            case c:
                              return e;
                            default:
                              return t;
                          }
                      }
                    case g:
                    case h:
                    case i:
                      return t;
                  }
                }
              }
              function w(e) {
                return A(e) === d;
              }
              (t.typeOf = A),
                (t.AsyncMode = m),
                (t.ConcurrentMode = d),
                (t.ContextConsumer = u),
                (t.ContextProvider = c),
                (t.Element = a),
                (t.ForwardRef = _),
                (t.Fragment = o),
                (t.Lazy = g),
                (t.Memo = h),
                (t.Portal = i),
                (t.Profiler = s),
                (t.StrictMode = l),
                (t.Suspense = p),
                (t.isValidElementType = function(e) {
                  return (
                    "string" == typeof e ||
                    "function" == typeof e ||
                    e === o ||
                    e === d ||
                    e === s ||
                    e === l ||
                    e === p ||
                    e === f ||
                    ("object" == typeof e &&
                      null !== e &&
                      (e.$$typeof === g ||
                        e.$$typeof === h ||
                        e.$$typeof === c ||
                        e.$$typeof === u ||
                        e.$$typeof === _ ||
                        e.$$typeof === v ||
                        e.$$typeof === y ||
                        e.$$typeof === b))
                  );
                }),
                (t.isAsyncMode = function(e) {
                  return w(e) || A(e) === m;
                }),
                (t.isConcurrentMode = w),
                (t.isContextConsumer = function(e) {
                  return A(e) === u;
                }),
                (t.isContextProvider = function(e) {
                  return A(e) === c;
                }),
                (t.isElement = function(e) {
                  return "object" == typeof e && null !== e && e.$$typeof === a;
                }),
                (t.isForwardRef = function(e) {
                  return A(e) === _;
                }),
                (t.isFragment = function(e) {
                  return A(e) === o;
                }),
                (t.isLazy = function(e) {
                  return A(e) === g;
                }),
                (t.isMemo = function(e) {
                  return A(e) === h;
                }),
                (t.isPortal = function(e) {
                  return A(e) === i;
                }),
                (t.isProfiler = function(e) {
                  return A(e) === s;
                }),
                (t.isStrictMode = function(e) {
                  return A(e) === l;
                }),
                (t.isSuspense = function(e) {
                  return A(e) === p;
                });
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                ".esm-patient-chart-widgets__allergy-overview__allergyReaction___2na5n {\n  color: var(--omrs-color-ink-medium-contrast);\n  text-transform: lowercase;\n}\n\n.esm-patient-chart-widgets__allergy-overview__allergyReaction___2na5n::first-letter {\n  text-transform: capitalize;\n}\n",
                ""
              ]),
                (t.locals = {
                  allergyReaction:
                    "esm-patient-chart-widgets__allergy-overview__allergyReaction___2na5n"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                '.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__allergy-card-level-two__allergySummary___14xmZ {\n  display: flex;\n  justify-content: center;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__allergy-card-level-two__allergySummary___14xmZ {\n  padding: 0.25rem 0.5rem 0 0.5rem;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__allergyTable___2I8tK {\n  width: 100%;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__allergyTable___2I8tK thead {\n  color: var(--omrs-color-ink-medium-contrast);\n  border-bottom: 0.063rem solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__allergyTable___2I8tK thead td {\n  padding: 1rem 0.25rem 1rem 1rem;\n}\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__allergy-card-level-two__allergyTable___2I8tK thead td {\n  padding: 0.25rem 0.125rem 0.5rem 0.5rem;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__allergyTable___2I8tK thead td:nth-child(3) {\n  text-align: right;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__allergyTable___2I8tK thead td:nth-child(4) {\n  text-align: right;\n  padding-right: 2.925rem;\n}\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__allergy-card-level-two__allergyTable___2I8tK thead td:nth-child(4) {\n  padding-right: 1.45125rem;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__allergyTable___2I8tK tbody td:nth-child(3) {\n  text-align: right;\n  font-family: "Work Sans";\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__allergyTable___2I8tK tbody td:nth-child(4) {\n  text-align: right;\n  font-family: "Work Sans";\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__allergyTable___2I8tK tbody tr:nth-child(3n) {\n  border-bottom: 0.063rem solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__allergyTable___2I8tK tbody {\n  padding: 2rem;\n  border-bottom: 0.063rem solid var(--omrs-color-bg-low-contrast);\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__allergy-card-level-two__allergyTable___2I8tK tbody {\n  padding: 1rem;\n}\n.esm-patient-chart-widgets__allergy-card-level-two__allergyTable___2I8tK td {\n  width: 25%;\n  padding: 0.5rem 0.25rem 0rem 1rem;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__centerItems___dUdVj {\n  display: flex;\n  align-items: center;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__alignRight___2cp5X {\n  justify-content: flex-end;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__alignRight___2cp5X span {\n  margin-right: 1rem;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__allergyComment___troVc {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  color: var(--omrs-color-ink-medium-contrast);\n  padding: 0rem 2.925rem 1rem 0rem;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__allergyComment___troVc p {\n  margin: 0rem;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__allergyComment___troVc p:nth-child(1) {\n  flex: 90%;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__allergyComment___troVc p:nth-child(2) {\n  flex: 10%;\n  align-items: flex-end;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-two__allergyFooter___2p7rQ {\n  text-align: center;\n  color: var(--omrs-color-ink-medium-contrast);\n  font-family: "Work sans";\n}\n\ntr.esm-patient-chart-widgets__allergy-card-level-two__high___KAUqY {\n  border-left: 0.188rem solid var(--omrs-color-danger);\n}\n\ntr.esm-patient-chart-widgets__allergy-card-level-two__high___KAUqY + tr {\n  border-left: 0.188rem solid var(--omrs-color-danger);\n}\n\ntr.esm-patient-chart-widgets__allergy-card-level-two__high___KAUqY + tr + tr {\n  border-left: 0.188rem solid var(--omrs-color-danger);\n}\n',
                ""
              ]),
                (t.locals = {
                  allergySummary:
                    "esm-patient-chart-widgets__allergy-card-level-two__allergySummary___14xmZ",
                  allergyTable:
                    "esm-patient-chart-widgets__allergy-card-level-two__allergyTable___2I8tK",
                  centerItems:
                    "esm-patient-chart-widgets__allergy-card-level-two__centerItems___dUdVj",
                  alignRight:
                    "esm-patient-chart-widgets__allergy-card-level-two__alignRight___2cp5X",
                  allergyComment:
                    "esm-patient-chart-widgets__allergy-card-level-two__allergyComment___troVc",
                  allergyFooter:
                    "esm-patient-chart-widgets__allergy-card-level-two__allergyFooter___2p7rQ",
                  high:
                    "esm-patient-chart-widgets__allergy-card-level-two__high___KAUqY"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                '.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__allergy-form__allergyForm___HSkk5 {\n  display: flex;\n  justify-content: center;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__allergy-form__allergyForm___HSkk5 {\n  padding: 0.25rem 0.5rem 0 0.5rem;\n}\n\n.esm-patient-chart-widgets__allergy-form__allergyHeader___3DUL8 {\n  margin: 0rem 0rem 0.25rem 1rem;\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__allergy-form__allergyEditHeader___1l9zp {\n  margin: 1rem 0rem 0rem 1rem;\n}\n\n.esm-patient-chart-widgets__allergy-form__allergyEditHeader___1l9zp h3,\nh4 {\n  margin: 0rem 0rem 0.25rem 0rem;\n  padding: 0rem;\n}\n\n.esm-patient-chart-widgets__allergy-form__allergyEditHeader___1l9zp h3 span {\n  font-weight: normal;\n}\n\n.esm-patient-chart-widgets__allergy-form__allergyEditHeader___1l9zp h4 {\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__allergy-form__container___2Gycy {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  background: var(--omrs-color-ink-white);\n  border: 0.0625rem solid var(--omrs-color-ink-low-contrast);\n  margin: 0rem 1rem 0.5rem 1rem;\n  padding: 1rem 0.5rem;\n}\n\n.esm-patient-chart-widgets__allergy-form__container___2Gycy div {\n  margin-bottom: 1rem;\n}\n\n.esm-patient-chart-widgets__allergy-form__container___2Gycy div:last-child {\n  margin-bottom: 0rem;\n}\n\n.esm-patient-chart-widgets__allergy-form__allergyCommentContainer___1J2bL {\n  display: flex;\n  background: "var(--omrs-color-bg-medium-contrast)";\n  margin: 0rem 1rem 4.5rem 1rem;\n}\n\n.esm-patient-chart-widgets__allergy-form__allergyCommentTextArea___1REGx {\n  outline: none;\n  width: 100%;\n  padding: 0.5rem;\n  line-height: normal;\n}\n\n.esm-patient-chart-widgets__allergy-form__buttonStyles___11P5U {\n  display: flex;\n  background: var(--omrs-color-ink-white);\n  bottom: 0;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\n.esm-patient-chart-widgets__allergy-form__buttonStyles___11P5U button {\n  margin: 0.5rem 1rem;\n  cursor: pointer;\n}\n\n.esm-patient-chart-widgets__allergy-form__buttonStyles___11P5U button:disabled {\n  background: var(--omrs-color-ink-lowest-contrast);\n}\n\n.esm-patient-chart-widgets__allergy-form__buttonStylesBorder___1rTad {\n  border-top: 0.125rem solid var(--omrs-color-interaction);\n}\n',
                ""
              ]),
                (t.locals = {
                  allergyForm:
                    "esm-patient-chart-widgets__allergy-form__allergyForm___HSkk5",
                  allergyHeader:
                    "esm-patient-chart-widgets__allergy-form__allergyHeader___3DUL8",
                  allergyEditHeader:
                    "esm-patient-chart-widgets__allergy-form__allergyEditHeader___1l9zp",
                  container:
                    "esm-patient-chart-widgets__allergy-form__container___2Gycy",
                  allergyCommentContainer:
                    "esm-patient-chart-widgets__allergy-form__allergyCommentContainer___1J2bL",
                  allergyCommentTextArea:
                    "esm-patient-chart-widgets__allergy-form__allergyCommentTextArea___1REGx",
                  buttonStyles:
                    "esm-patient-chart-widgets__allergy-form__buttonStyles___11P5U",
                  buttonStylesBorder:
                    "esm-patient-chart-widgets__allergy-form__buttonStylesBorder___1rTad"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                '.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__allergy-card-level-three__allergySummary___qbgaf {\n  display: flex;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__allergy-card-level-three__allergySummary___qbgaf {\n  padding: 0.25rem 0.5rem 0 0.5rem;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-three__allergyCard___1DlMv {\n  margin: 0rem 1rem;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-three__allergyName___2-jxK {\n  letter-spacing: 0.05rem;\n  padding: 1rem 0rem;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-three__allergyTable___1J4rM {\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 0.625rem;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-three__allergyTable___1J4rM thead th {\n  color: var(--omrs-color-ink-medium-contrast);\n  font-weight: normal;\n  text-align: left;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-three__allergyTable___1J4rM tbody td:nth-child(3) {\n  font-family: "Work Sans";\n}\n\n.esm-patient-chart-widgets__allergy-card-level-three__allergyDetails___2l4_A tbody td:nth-child(1) {\n  font-family: "Work Sans";\n}\n\n.esm-patient-chart-widgets__allergy-card-level-three__allergyFooter___1febV {\n  padding: 0.625rem;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-three__centerItems___wNFKw {\n  display: flex;\n  align-items: center;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-three__highSeverity___c_1xt {\n  border-left: 0.188rem solid var(--omrs-color-danger);\n  margin: 0rem;\n  padding-left: 1rem;\n}\n\n.esm-patient-chart-widgets__allergy-card-level-three__lowSeverity___2AFvm {\n  border-left: none;\n}\n',
                ""
              ]),
                (t.locals = {
                  allergySummary:
                    "esm-patient-chart-widgets__allergy-card-level-three__allergySummary___qbgaf",
                  allergyCard:
                    "esm-patient-chart-widgets__allergy-card-level-three__allergyCard___1DlMv",
                  allergyName:
                    "esm-patient-chart-widgets__allergy-card-level-three__allergyName___2-jxK",
                  allergyTable:
                    "esm-patient-chart-widgets__allergy-card-level-three__allergyTable___1J4rM",
                  allergyDetails:
                    "esm-patient-chart-widgets__allergy-card-level-three__allergyDetails___2l4_A",
                  allergyFooter:
                    "esm-patient-chart-widgets__allergy-card-level-three__allergyFooter___1febV",
                  centerItems:
                    "esm-patient-chart-widgets__allergy-card-level-three__centerItems___wNFKw",
                  highSeverity:
                    "esm-patient-chart-widgets__allergy-card-level-three__highSeverity___c_1xt",
                  lowSeverity:
                    "esm-patient-chart-widgets__allergy-card-level-three__lowSeverity___2AFvm"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                '.esm-patient-chart-widgets__appointments-overview__tableAppointmentsRow___31Aj4 {\n  border-bottom: 1px solid var(--omrs-color-bg-low-contrast);\n}\n.esm-patient-chart-widgets__appointments-overview__svgUpper___KzQ_X {\n  display: none;\n}\n\n.esm-patient-chart-widgets__appointments-overview__tableHeader___ckXSm {\n  padding: 0.625rem;\n}\n.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__appointments-overview__card___1B4Fi {\n  width: 21.75rem;\n  margin: 0.5rem 1rem;\n}\n.esm-patient-chart-widgets__appointments-overview__tableAppointments___194zm {\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\ntable.esm-patient-chart-widgets__appointments-overview__table___Uu0Km .esm-patient-chart-widgets__appointments-overview__tableDates___20pgz {\n  text-align: start;\n}\n\n.esm-patient-chart-widgets__appointments-overview__tableAppointmentsHeader___2Bg-X {\n  color: var(--omrs-color-ink-medium-contrast);\n  font-size: 0.9375rem;\n  text-transform: capitalize;\n  font-weight: normal;\n  letter-spacing: 0.0275rem;\n  font-family: "Work Sans";\n}\n\n.esm-patient-chart-widgets__appointments-overview__status___1dnNo {\n  color: var(--omrs-color-ink-medium-contrast);\n  font-family: "Roboto";\n}\n.esm-patient-chart-widgets__appointments-overview__tableAppointments___194zm thead th {\n  color: var(--omrs-color-ink-medium-contrast);\n  text-align: left;\n}\n\n.esm-patient-chart-widgets__appointments-overview__tableAppointments___194zm thead {\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__appointments-overview__tableAppointments___194zm tbody td:nth-child(1) {\n  font-family: "Work Sans";\n  padding: 1rem;\n}\n\n.esm-patient-chart-widgets__appointments-overview__tableAppointments___194zm thead td {\n  margin-top: 0.625rem;\n  padding: 0.25rem 0.5rem 0 0.5rem;\n}\n\n.esm-patient-chart-widgets__appointments-overview__tableAppointments___194zm thead td:nth-child(1) {\n  width: 25%;\n}\n',
                ""
              ]),
                (t.locals = {
                  tableAppointmentsRow:
                    "esm-patient-chart-widgets__appointments-overview__tableAppointmentsRow___31Aj4",
                  svgUpper:
                    "esm-patient-chart-widgets__appointments-overview__svgUpper___KzQ_X",
                  tableHeader:
                    "esm-patient-chart-widgets__appointments-overview__tableHeader___ckXSm",
                  card:
                    "esm-patient-chart-widgets__appointments-overview__card___1B4Fi",
                  tableAppointments:
                    "esm-patient-chart-widgets__appointments-overview__tableAppointments___194zm",
                  table:
                    "esm-patient-chart-widgets__appointments-overview__table___Uu0Km",
                  tableDates:
                    "esm-patient-chart-widgets__appointments-overview__tableDates___20pgz",
                  tableAppointmentsHeader:
                    "esm-patient-chart-widgets__appointments-overview__tableAppointmentsHeader___2Bg-X",
                  status:
                    "esm-patient-chart-widgets__appointments-overview__status___1dnNo"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                ".esm-patient-chart-widgets__patient-banner-component__patientBanner___1I1YY {\n  display: flex;\n  justify-content: space-between;\n  height: 2.75rem;\n  background-color: #fff;\n  outline: none;\n  cursor: pointer;\n}\n.esm-patient-chart-widgets__patient-banner-component__demographics___s1ewY {\n  display: flex;\n  flex-wrap: wrap;\n  overflow: hidden;\n  flex-grow: 1;\n  padding-left: 1.5rem;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__patient-banner-component__demographics___s1ewY {\n  padding-left: 1rem;\n}\n\n.omrs-breakpoint-gt-tablet .esm-patient-chart-widgets__patient-banner-component__otherDemographics___2VgNV {\n  margin: 0 1.25rem;\n}\n.omrs-breakpoint-lt-desktop .esm-patient-chart-widgets__patient-banner-component__otherDemographics___2VgNV {\n  margin: 0 1.875rem;\n}\n\n.omrs-breakpoint-lt-desktop .esm-patient-chart-widgets__patient-banner-component__desktopLabel___WrLDT {\n  display: none;\n}\n\n.omrs-type-body-regular.esm-patient-chart-widgets__patient-banner-component__demographic___38H9K {\n  color: var(--omrs-color-ink-medium-contrast);\n  font-weight: 500;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__patient-banner-component__otherDemographics___2VgNV {\n  display: none;\n}\n\n.esm-patient-chart-widgets__patient-banner-component__patientName___3Vfgp,\n.omrs-breakpoint-lt-desktop.omrs-breakpoint-gt-phone\n  .esm-patient-chart-widgets__patient-banner-component__otherDemographics___2VgNV {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.omrs-breakpoint-gt-tablet .esm-patient-chart-widgets__patient-banner-component__otherDemographics___2VgNV {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.omrs-breakpoint-gt-tablet .esm-patient-chart-widgets__patient-banner-component__desktopLabel___WrLDT {\n  margin-right: 0.5rem;\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__patient-banner-component__moreBtn___1Bd4r {\n  color: var(--omrs-color-ink-medium-contrast);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n\n.esm-patient-chart-widgets__patient-banner-component__profileWrapper___bHATb {\n  padding: 0.5rem;\n  width: 100%;\n}\n\n.esm-patient-chart-widgets__patient-banner-component__collapseBtn___12lTJ {\n  background-color: var(--omrs-color-bg-high-contrast);\n  color: var(--omrs-color-ink-medium-contrast);\n  cursor: pointer;\n}\n\n.esm-patient-chart-widgets__patient-banner-component__icon___rUvbD {\n  vertical-align: middle;\n}\n\n.esm-patient-chart-widgets__patient-banner-component__patientBanner___1I1YY {\n  width: 100%;\n  position: fixed;\n}\n\n.esm-patient-chart-widgets__patient-banner-component__patientProfile___36thJ {\n  margin-top: var(--omrs-topnav-height);\n  width: 100%;\n}\n",
                ""
              ]),
                (t.locals = {
                  patientBanner:
                    "esm-patient-chart-widgets__patient-banner-component__patientBanner___1I1YY",
                  demographics:
                    "esm-patient-chart-widgets__patient-banner-component__demographics___s1ewY",
                  otherDemographics:
                    "esm-patient-chart-widgets__patient-banner-component__otherDemographics___2VgNV",
                  desktopLabel:
                    "esm-patient-chart-widgets__patient-banner-component__desktopLabel___WrLDT",
                  demographic:
                    "esm-patient-chart-widgets__patient-banner-component__demographic___38H9K",
                  patientName:
                    "esm-patient-chart-widgets__patient-banner-component__patientName___3Vfgp",
                  moreBtn:
                    "esm-patient-chart-widgets__patient-banner-component__moreBtn___1Bd4r",
                  profileWrapper:
                    "esm-patient-chart-widgets__patient-banner-component__profileWrapper___bHATb",
                  collapseBtn:
                    "esm-patient-chart-widgets__patient-banner-component__collapseBtn___12lTJ",
                  icon:
                    "esm-patient-chart-widgets__patient-banner-component__icon___rUvbD",
                  patientProfile:
                    "esm-patient-chart-widgets__patient-banner-component__patientProfile___36thJ"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                ".esm-patient-chart-widgets__profile-section-component__profile___3AoQ- {\n  background-color: var(--omrs-color-ink-white);\n  margin-top: -0.725rem;\n  box-shadow: 0px 0.125rem var(--omrs-color-ink-low-contrast);\n}\n.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__profile-section-component__profile___3AoQ- {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__profile-section-component__profile___3AoQ- {\n  background-color: var(--omrs-color-ink-white);\n  margin-top: -2rem;\n  padding: 1rem;\n}\n\n.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__profile-section-component__demographicCard___1ogd1 {\n  display: flex;\n}\n\n.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__profile-section-component__otherProfileCards___2rA2- {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__profile-section-component__contactsAndRelationshipsCard___AVSaV {\n  display: flex;\n  flex-direction: column;\n}\n",
                ""
              ]),
                (t.locals = {
                  profile:
                    "esm-patient-chart-widgets__profile-section-component__profile___3AoQ-",
                  demographicCard:
                    "esm-patient-chart-widgets__profile-section-component__demographicCard___1ogd1",
                  otherProfileCards:
                    "esm-patient-chart-widgets__profile-section-component__otherProfileCards___2rA2-",
                  contactsAndRelationshipsCard:
                    "esm-patient-chart-widgets__profile-section-component__contactsAndRelationshipsCard___AVSaV"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                '.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__conditions-summary__conditionSummary___eNxFW {\n  display: flex;\n  justify-content: center;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__conditions-summary__conditionSummary___eNxFW {\n  padding: 0.25rem 0.5rem 0 0.5rem;\n}\n\n.esm-patient-chart-widgets__conditions-summary__conditionTable___3WtOV {\n  width: 100%;\n}\n\n.esm-patient-chart-widgets__conditions-summary__conditionTable___3WtOV thead {\n  color: var(--omrs-color-ink-medium-contrast);\n  border-bottom: 0.0625rem solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__conditions-summary__conditionTable___3WtOV thead td {\n  padding: 1rem 0.25rem 1rem 1rem;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__conditions-summary__conditionTable___3WtOV thead td {\n  padding: 0.25rem 0.125rem 0.5rem 0.5rem;\n}\n\n.esm-patient-chart-widgets__conditions-summary__conditionTable___3WtOV thead td:nth-child(2) {\n  text-align: right;\n  padding-right: 0rem;\n}\n\n.esm-patient-chart-widgets__conditions-summary__conditionTable___3WtOV thead td:nth-child(3) {\n  text-align: left;\n  padding-right: 2.925rem;\n}\n\n.esm-patient-chart-widgets__conditions-summary__conditionTable___3WtOV tbody td:nth-child(1) {\n  width: 15%;\n}\n\n.esm-patient-chart-widgets__conditions-summary__conditionTable___3WtOV tbody td:nth-child(2) {\n  width: 19%;\n  text-align: right;\n  font-family: "Work Sans";\n}\n\n.esm-patient-chart-widgets__conditions-summary__conditionTable___3WtOV tbody td:nth-child(3) {\n  width: 15%;\n  text-align: right;\n  font-family: "Work Sans";\n}\n\n.esm-patient-chart-widgets__conditions-summary__conditionTable___3WtOV tbody td:nth-child(4) {\n  width: 15%;\n  padding-right: 1.125rem;\n  color: var(--omrs-color-bg-low-contrast);\n  text-align: right;\n  font-family: "Work Sans";\n}\n\n.esm-patient-chart-widgets__conditions-summary__conditionTable___3WtOV tbody tr:nth-child(3n) {\n  border-bottom: 0.0625rem solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__conditions-summary__conditionTable___3WtOV tbody {\n  padding: 2rem;\n  border-bottom: 0.0625rem solid var(--omrs-color-bg-low-contrast);\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__conditions-summary__conditionTable___3WtOV tbody {\n  padding: 1rem;\n}\n\n.esm-patient-chart-widgets__conditions-summary__conditionTable___3WtOV tr {\n  padding: 0.813rem 0 1rem 0.813rem;\n  border-bottom: 0.0625rem solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__conditions-summary__conditionTable___3WtOV td {\n  padding: 0.75rem 0 0.75rem 1rem;\n}\n\n.esm-patient-chart-widgets__conditions-summary__centerItems___8mRgP {\n  display: flex;\n  align-items: center;\n}\n\n.esm-patient-chart-widgets__conditions-summary__alignRight___1939r {\n  justify-content: flex-end;\n}\n\n.esm-patient-chart-widgets__conditions-summary__alignLeft___39nZX {\n  justify-content: flex-start;\n}\n\n.esm-patient-chart-widgets__conditions-summary__alignRight___1939r span {\n  margin-right: 1rem;\n}\n\n.esm-patient-chart-widgets__conditions-summary__conditionFooter___M4BAm {\n  text-align: center;\n  font-family: "Work Sans";\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__conditions-summary__conditionMargin___3o-5A {\n  margin: 1rem 1rem;\n}\n\n.esm-patient-chart-widgets__conditions-summary__conditionMargin___3o-5A p {\n  padding-bottom: 1rem;\n}\n\ntr.esm-patient-chart-widgets__conditions-summary__inactive___3MUXg {\n  background: var(--omrs-color-bg-medium-contrast);\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\ntr.esm-patient-chart-widgets__conditions-summary__active___32Nv5 {\n  background: var(--omrs-color-bg-high-contrast);\n}\n',
                ""
              ]),
                (t.locals = {
                  conditionSummary:
                    "esm-patient-chart-widgets__conditions-summary__conditionSummary___eNxFW",
                  conditionTable:
                    "esm-patient-chart-widgets__conditions-summary__conditionTable___3WtOV",
                  centerItems:
                    "esm-patient-chart-widgets__conditions-summary__centerItems___8mRgP",
                  alignRight:
                    "esm-patient-chart-widgets__conditions-summary__alignRight___1939r",
                  alignLeft:
                    "esm-patient-chart-widgets__conditions-summary__alignLeft___39nZX",
                  conditionFooter:
                    "esm-patient-chart-widgets__conditions-summary__conditionFooter___M4BAm",
                  conditionMargin:
                    "esm-patient-chart-widgets__conditions-summary__conditionMargin___3o-5A",
                  inactive:
                    "esm-patient-chart-widgets__conditions-summary__inactive___3MUXg",
                  active:
                    "esm-patient-chart-widgets__conditions-summary__active___32Nv5"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                '.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__conditions-detailed-summary__conditionSummary___2_Jb3 {\n  display: flex;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__conditions-detailed-summary__conditionSummary___2_Jb3 {\n  padding: 0.25rem 0.5rem 0 0.5rem;\n}\n\n.esm-patient-chart-widgets__conditions-detailed-summary__conditionCard___1f3gZ {\n  margin: 0rem 1rem;\n}\n\n.esm-patient-chart-widgets__conditions-detailed-summary__conditionTable___3C6kc {\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.esm-patient-chart-widgets__conditions-detailed-summary__conditionTable___3C6kc thead th {\n  color: var(--omrs-color-ink-medium-contrast);\n  text-align: left;\n}\n\n.esm-patient-chart-widgets__conditions-detailed-summary__conditionTable___3C6kc thead {\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__conditions-detailed-summary__conditionTable___3C6kc tbody td:nth-child(1) {\n  font-family: "Work Sans";\n}\n\n.esm-patient-chart-widgets__conditions-detailed-summary__conditionTable___3C6kc thead td {\n  margin-top: 0.625rem;\n}\n\n.esm-patient-chart-widgets__conditions-detailed-summary__conditionTable___3C6kc thead td:nth-child(1) {\n  width: 25%;\n}\n',
                ""
              ]),
                (t.locals = {
                  conditionSummary:
                    "esm-patient-chart-widgets__conditions-detailed-summary__conditionSummary___2_Jb3",
                  conditionCard:
                    "esm-patient-chart-widgets__conditions-detailed-summary__conditionCard___1f3gZ",
                  conditionTable:
                    "esm-patient-chart-widgets__conditions-detailed-summary__conditionTable___3C6kc"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                '.esm-patient-chart-widgets__heightandweight-overview__table___O7QJC {\n  width: 100%;\n}\n\n.esm-patient-chart-widgets__heightandweight-overview__tableRow___3pZBq {\n  border-bottom: 1px solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__heightandweight-overview__tableHeader___1A2Nl,\n.esm-patient-chart-widgets__heightandweight-overview__tableData___2D0qj {\n  padding: 0.625rem;\n  font-family: "Roboto";\n}\n\n.esm-patient-chart-widgets__heightandweight-overview__tableHeader___1A2Nl {\n  color: var(--omrs-color-ink-medium-contrast);\n  font-size: 0.9375rem;\n  text-transform: uppercase;\n  font-weight: normal;\n  letter-spacing: 0.0275rem;\n  text-align: left;\n}\n\n.esm-patient-chart-widgets__heightandweight-overview__tableData___2D0qj {\n  font-size: 1.0625rem;\n  text-align: left;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__heightandweight-overview__tableDates___3n98n {\n  width: 70%;\n}\n\n.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__heightandweight-overview__card___2wEb1 {\n  width: 21.75rem;\n  margin: 0.5rem 1rem;\n}\n.esm-patient-chart-widgets__heightandweight-overview__card___2wEb1 {\n  width: 40rem;\n  margin: 0.5rem 1rem;\n}\n.esm-patient-chart-widgets__heightandweight-overview__unit___2FWMO {\n  color: var(--omrs-color-ink-medium-contrast);\n}\n',
                ""
              ]),
                (t.locals = {
                  table:
                    "esm-patient-chart-widgets__heightandweight-overview__table___O7QJC",
                  tableRow:
                    "esm-patient-chart-widgets__heightandweight-overview__tableRow___3pZBq",
                  tableHeader:
                    "esm-patient-chart-widgets__heightandweight-overview__tableHeader___1A2Nl",
                  tableData:
                    "esm-patient-chart-widgets__heightandweight-overview__tableData___2D0qj",
                  tableDates:
                    "esm-patient-chart-widgets__heightandweight-overview__tableDates___3n98n",
                  card:
                    "esm-patient-chart-widgets__heightandweight-overview__card___2wEb1",
                  unit:
                    "esm-patient-chart-widgets__heightandweight-overview__unit___2FWMO"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                '.esm-patient-chart-widgets__heightandweight-summary__table___1-iXH {\n  width: 100%;\n}\n\n.esm-patient-chart-widgets__heightandweight-summary__tableRow___3xoo5 {\n  border-bottom: 1px solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__heightandweight-summary__tableHeader___2uV48,\n.esm-patient-chart-widgets__heightandweight-summary__tableData___LAxbE {\n  padding: 0.625rem;\n  font-family: "Work Sans";\n}\n\n.esm-patient-chart-widgets__heightandweight-summary__tableHeader___2uV48 {\n  color: var(--omrs-color-ink-medium-contrast);\n  font-size: 0.9375rem;\n  text-transform: uppercase;\n  font-weight: normal;\n  letter-spacing: 0.0275rem;\n}\n\n.esm-patient-chart-widgets__heightandweight-summary__tableData___LAxbE {\n  font-size: 1.0625rem;\n  text-align: center;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__heightandweight-summary__tableDates___3p-EK {\n  width: 70%;\n}\n\ntable.esm-patient-chart-widgets__heightandweight-summary__table___1-iXH .esm-patient-chart-widgets__heightandweight-summary__tableDates___3p-EK {\n  text-align: start;\n}\n',
                ""
              ]),
                (t.locals = {
                  table:
                    "esm-patient-chart-widgets__heightandweight-summary__table___1-iXH",
                  tableRow:
                    "esm-patient-chart-widgets__heightandweight-summary__tableRow___3xoo5",
                  tableHeader:
                    "esm-patient-chart-widgets__heightandweight-summary__tableHeader___2uV48",
                  tableData:
                    "esm-patient-chart-widgets__heightandweight-summary__tableData___LAxbE",
                  tableDates:
                    "esm-patient-chart-widgets__heightandweight-summary__tableDates___3p-EK"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                ".omrs-breakpoint-gt-phone .esm-patient-chart-widgets__vitals-form__vitalsForm___1hYnd {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__vitals-form__vitalsForm___1hYnd {\n  padding: 0.25rem 0.5rem 0 0.5rem;\n  flex-direction: row;\n}\n\n.esm-patient-chart-widgets__vitals-form__vitalsContainerWrapper___EbiNL {\n  display: flex;\n  margin: 0rem 0rem 0.25rem 0rem;\n  flex-wrap: wrap;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__vitals-form__vitalsContainerWrapper___EbiNL {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n.esm-patient-chart-widgets__vitals-form__vitalsContainer___1_XkV {\n  display: flex;\n  margin: 0rem 0rem 0.25rem 0rem;\n}\n\n.esm-patient-chart-widgets__vitals-form__vitalInputContainer___1MYrz {\n  display: flex;\n  flex-direction: column;\n  margin: 0.625rem;\n}\n\n.esm-patient-chart-widgets__vitals-form__vitalsForm___1hYnd * input {\n  height: 2.5rem;\n  font-size: 1rem;\n  margin: 0rem;\n  font-weight: bold;\n}\n\n.esm-patient-chart-widgets__vitals-form__vitalsForm___1hYnd * input:valid {\n  color: var(--omrs-color-interaction);\n}\n\n.esm-patient-chart-widgets__vitals-form__vitalInputContainer___1MYrz label {\n  font-weight: bold;\n  color: var(--omrs-color-ink-medium-contrast);\n  margin: 0rem 0rem 0.35rem 1rem;\n}\n\n.esm-patient-chart-widgets__vitals-form__vitalInputContainer___1MYrz div {\n  position: relative;\n}\n\n.esm-patient-chart-widgets__vitals-form__vitalInputContainer___1MYrz div input:invalid + span {\n  opacity: 0;\n}\n\n.esm-patient-chart-widgets__vitals-form__vitalInputContainer___1MYrz div input:valid + span {\n  position: absolute;\n  margin-top: 0.625rem;\n  margin-left: 2.5rem;\n  left: 0;\n  color: var(--omrs-color-ink-medium-contrast);\n  font-weight: bold;\n}\n\n.esm-patient-chart-widgets__vitals-form__vitalInputControl___35TKI {\n  padding: 0.5rem;\n  margin-left: 0.5rem;\n  outline: none;\n  border: 0.0625rem solid var(--omrs-color-ink-low-contrast);\n  border-radius: 0.125rem;\n  width: 100%;\n}\n\n.esm-patient-chart-widgets__vitals-form__vitalInputControl___35TKI + svg {\n  padding-right: 0.125rem;\n}\n\n.esm-patient-chart-widgets__vitals-form__buttonStyles___2aTDx {\n  display: flex;\n  background: var(--omrs-color-ink-white);\n  bottom: 0;\n  justify-content: center;\n  width: 100%;\n}\n\n.esm-patient-chart-widgets__vitals-form__buttonStyles___2aTDx button {\n  margin: 0.5rem 1rem;\n  cursor: pointer;\n}\n\n.esm-patient-chart-widgets__vitals-form__buttonStyles___2aTDx button:disabled {\n  background: var(--omrs-color-ink-lowest-contrast);\n}\n\n.esm-patient-chart-widgets__vitals-form__buttonStylesBorder___2KMDQ {\n  border-top: 0.125rem solid var(--omrs-color-interaction);\n}\n\n.esm-patient-chart-widgets__vitals-form__forwardSlash___SivkC {\n  font-size: 2.5rem;\n  line-height: 3rem;\n  margin-top: 1.25rem;\n  font-weight: 100;\n  color: var(--omrs-color-ink-medium-contrast);\n}\n",
                ""
              ]),
                (t.locals = {
                  vitalsForm:
                    "esm-patient-chart-widgets__vitals-form__vitalsForm___1hYnd",
                  vitalsContainerWrapper:
                    "esm-patient-chart-widgets__vitals-form__vitalsContainerWrapper___EbiNL",
                  vitalsContainer:
                    "esm-patient-chart-widgets__vitals-form__vitalsContainer___1_XkV",
                  vitalInputContainer:
                    "esm-patient-chart-widgets__vitals-form__vitalInputContainer___1MYrz",
                  vitalInputControl:
                    "esm-patient-chart-widgets__vitals-form__vitalInputControl___35TKI",
                  buttonStyles:
                    "esm-patient-chart-widgets__vitals-form__buttonStyles___2aTDx",
                  buttonStylesBorder:
                    "esm-patient-chart-widgets__vitals-form__buttonStylesBorder___2KMDQ",
                  forwardSlash:
                    "esm-patient-chart-widgets__vitals-form__forwardSlash___SivkC"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                '.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__heightandweight-detailed-summary__heightAndWeightDetailedSummary___wvMTU {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__heightandweight-detailed-summary__heightAndWeightDetailedSummary___wvMTU {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0.25rem 0.5rem 0 0.5rem;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__heightandweight-detailed-summary__heightAndWeightContainer___21zIT {\n  display: flex;\n  justify-content: flex-start;\n}\n.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__heightandweight-detailed-summary__heightAndWeightContainer___21zIT {\n  display: flex;\n  margin: "0rem 0rem 0rem 4.875rem";\n}\n\n.esm-patient-chart-widgets__heightandweight-detailed-summary__summaryTable___3KGMz {\n  margin: 0.625rem;\n}\n\n.esm-patient-chart-widgets__heightandweight-detailed-summary__summaryTable___3KGMz tbody td {\n  padding: 0.75rem 0.75rem;\n  font-weight: bold;\n  color: var(--omrs-color-brand-black);\n}\n\n.esm-patient-chart-widgets__heightandweight-detailed-summary__summaryTable___3KGMz tbody tr td:nth-child(1) {\n  text-align: right;\n  font-weight: normal;\n  color: var(--omrs-color-ink-medium-contrast);\n  font-family: "Roboto";\n}\n\n.esm-patient-chart-widgets__heightandweight-detailed-summary__summaryTable___3KGMz span {\n  color: var(--omrs-color-ink-medium-contrast);\n  margin-left: 0.25rem;\n}\n\n.esm-patient-chart-widgets__heightandweight-detailed-summary__summaryCard___3-5OT {\n  margin: 0rem 1rem;\n}\n\n.esm-patient-chart-widgets__heightandweight-detailed-summary__heightAndWeightDetailsTable___3oTVy {\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.esm-patient-chart-widgets__heightandweight-detailed-summary__heightAndWeightDetailsTable___3oTVy thead th {\n  color: var(--omrs-color-ink-medium-contrast);\n  text-align: left;\n}\n\n.esm-patient-chart-widgets__heightandweight-detailed-summary__heightAndWeightDetailsTable___3oTVy thead {\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__heightandweight-detailed-summary__heightAndWeightDetailsTable___3oTVy thead td {\n  margin-top: 0.625rem;\n}\n\n.esm-patient-chart-widgets__heightandweight-detailed-summary__heightAndWeightDetailsTable___3oTVy thead td:nth-child(1) {\n  width: 25%;\n}\n',
                ""
              ]),
                (t.locals = {
                  heightAndWeightDetailedSummary:
                    "esm-patient-chart-widgets__heightandweight-detailed-summary__heightAndWeightDetailedSummary___wvMTU",
                  heightAndWeightContainer:
                    "esm-patient-chart-widgets__heightandweight-detailed-summary__heightAndWeightContainer___21zIT",
                  summaryTable:
                    "esm-patient-chart-widgets__heightandweight-detailed-summary__summaryTable___3KGMz",
                  summaryCard:
                    "esm-patient-chart-widgets__heightandweight-detailed-summary__summaryCard___3-5OT",
                  heightAndWeightDetailsTable:
                    "esm-patient-chart-widgets__heightandweight-detailed-summary__heightAndWeightDetailsTable___3oTVy"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                ".esm-patient-chart-widgets__medications-overview__medicationsTable___2R5Is {\n  width: 100%;\n}\n.esm-patient-chart-widgets__medications-overview__medicationsTable___2R5Is thead td {\n  padding: 1rem 0.25rem 1rem 1rem;\n}\n\n.esm-patient-chart-widgets__medications-overview__medicationsTable___2R5Is thead {\n  border-bottom: 1px solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__medications-overview__medicationsTable___2R5Is thead td span {\n  font-weight: normal;\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__medications-overview__medicationsTable___2R5Is tbody td {\n  padding: 0.5rem 0.25rem 0.5rem 1rem;\n}\n\n.esm-patient-chart-widgets__medications-overview__medicationsTable___2R5Is tbody td span {\n  color: var(--omrs-color-ink-high-contrast);\n}\n\n.esm-patient-chart-widgets__medications-overview__medicationsTable___2R5Is tbody tr {\n  border-bottom: 1px solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__medications-overview__medicationsFooter___3ui1e {\n  display: flex;\n  align-items: center;\n  padding: 1rem 0.25rem 1rem 1rem;\n  text-decoration: none;\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__medications-overview__medicationsFooter___3ui1e svg {\n  margin-right: 0.5rem;\n}\n\n.esm-patient-chart-widgets__medications-overview__medicationStatement___1T61D {\n  text-transform: lowercase;\n}\n",
                ""
              ]),
                (t.locals = {
                  medicationsTable:
                    "esm-patient-chart-widgets__medications-overview__medicationsTable___2R5Is",
                  medicationsFooter:
                    "esm-patient-chart-widgets__medications-overview__medicationsFooter___3ui1e",
                  medicationStatement:
                    "esm-patient-chart-widgets__medications-overview__medicationStatement___1T61D"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                '.esm-patient-chart-widgets__medication-order-basket__medicationOrderBasketContainer___3tKyI {\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__medication-order-basket__medicationOrderBasketContainer___3tKyI {\n  display: flex;\n  justify-content: center;\n  margin: 0.25rem 0.5rem 0 0.5rem;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__medication-order-basket__medicationOrderBasketContainer___3tKyI {\n  padding: 0.25rem 0.5rem 0 0.5rem;\n  display: flex;\n  justify-content: center;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__medicationHeader___2GbtS {\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__medicationSearchTerm___38lNN {\n  display: flex;\n  width: 100%;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__medicationSearchTerm___38lNN input[type="text"] {\n  width: 100%;\n  border: none;\n  padding: 1rem;\n  font-size: 1rem;\n  outline: none;\n  font-style: italic;\n  color: var(--omrs-color-interaction);\n}\n\n.esm-patient-chart-widgets__medication-order-basket__medicationSearchTerm___38lNN input[type="text"]::placeholder {\n  color: var(--omrs-color-interaction);\n  font-style: italic;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__searchResults___1MQi5 {\n  display: flex;\n  position: absolute;\n  top: 0;\n  margin-top: 8.5rem;\n  border-radius: 0.625rem;\n  width: 100%;\n  padding: 0rem 1.625rem;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__searchResults___1MQi5 table {\n  border-collapse: collapse;\n  border-style: hidden;\n  box-shadow: 0rem 0.125rem 0.25rem rgba(0, 0, 0, 0.08),\n    0rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.04);\n  width: 100%;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__searchResults___1MQi5 tr {\n  text-align: left;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__searchResults___1MQi5 tbody tr:hover {\n  background-color: var(--omrs-color-success-two);\n  cursor: pointer;\n}\n.esm-patient-chart-widgets__medication-order-basket__searchResults___1MQi5 td,\nth {\n  padding: 0.625rem;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__medicationOrderFooter___1oWdH {\n  display: flex;\n  background-color: var(--omrs-color-ink-white);\n  width: 100%;\n  position: sticky;\n  bottom: 0;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__medicationOrderFooter___1oWdH button {\n  border-radius: 6.25rem;\n  font-weight: 500;\n  padding: 0.25rem 0rem;\n  font-size: 1rem;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__medicationOrderFooter___1oWdH button:nth-child(1) {\n  margin: 0.5rem 0.75rem 0.5rem 1rem;\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__medication-order-basket__medicationOrderFooter___1oWdH button:nth-child(2) {\n  margin: 0.5rem 0.75rem 0.5rem 1rem;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__modal___1iSmL {\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  overflow: auto;\n  background-color: var(--omrs-color-bg-medium-contrast);\n  transition: 0.3s ease all;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__modalContent___3oVYx {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: var(--omrs-color-ink-white);\n  box-shadow: 0rem 0.125rem 0.25rem rgba(0, 0, 0, 0.08),\n    0rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.04);\n  border-radius: 0.5rem;\n  background-color: var(--omrs-color-bg-medium-contrast);\n  position: absolute;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__hide___d8Lk5 {\n  display: none;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__basketContainer___1el3J {\n  display: flex;\n  right: 5%;\n  flex-direction: column;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__basketStyles___14pO4 {\n  border-radius: 0.625rem;\n  box-shadow: 0rem 0.125rem 0.25rem rgba(0, 0, 0, 0.08),\n    0rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.04);\n  margin: 0.25rem 0rem;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__basketStyles___14pO4:hover {\n  opacity: 0.9;\n  cursor: pointer;\n}\n\n.esm-patient-chart-widgets__medication-order-basket__OrderStyle___1CgpT {\n  background-color: var(--omrs-color-success-two);\n  color: var(--omrs-color-brand-black);\n}\n',
                ""
              ]),
                (t.locals = {
                  medicationOrderBasketContainer:
                    "esm-patient-chart-widgets__medication-order-basket__medicationOrderBasketContainer___3tKyI",
                  medicationHeader:
                    "esm-patient-chart-widgets__medication-order-basket__medicationHeader___2GbtS",
                  medicationSearchTerm:
                    "esm-patient-chart-widgets__medication-order-basket__medicationSearchTerm___38lNN",
                  searchResults:
                    "esm-patient-chart-widgets__medication-order-basket__searchResults___1MQi5",
                  medicationOrderFooter:
                    "esm-patient-chart-widgets__medication-order-basket__medicationOrderFooter___1oWdH",
                  modal:
                    "esm-patient-chart-widgets__medication-order-basket__modal___1iSmL",
                  modalContent:
                    "esm-patient-chart-widgets__medication-order-basket__modalContent___3oVYx",
                  hide:
                    "esm-patient-chart-widgets__medication-order-basket__hide___d8Lk5",
                  basketContainer:
                    "esm-patient-chart-widgets__medication-order-basket__basketContainer___1el3J",
                  basketStyles:
                    "esm-patient-chart-widgets__medication-order-basket__basketStyles___14pO4",
                  OrderStyle:
                    "esm-patient-chart-widgets__medication-order-basket__OrderStyle___1CgpT"
                }),
                (e.exports = t);
            },
            function(e, t) {
              e.exports = function(e) {
                return (
                  e.webpackPolyfill ||
                    ((e.deprecate = function() {}),
                    (e.paths = []),
                    e.children || (e.children = []),
                    Object.defineProperty(e, "loaded", {
                      enumerable: !0,
                      get: function() {
                        return e.l;
                      }
                    }),
                    Object.defineProperty(e, "id", {
                      enumerable: !0,
                      get: function() {
                        return e.i;
                      }
                    }),
                    (e.webpackPolyfill = 1)),
                  e
                );
              };
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                '.esm-patient-chart-widgets__medication-order__medicationOrderWrapper___2WWL1 {\n  display: flex;\n  border-radius: 0.25rem;\n  position: relative;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__medication-order__medicationOrderWrapper___2WWL1 {\n  display: flex;\n  justify-content: center;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__medication-order__medicationOrderWrapper___2WWL1 {\n  padding: 0.25rem 0.5rem 0 0.5rem;\n}\n\n.esm-patient-chart-widgets__medication-order__medicationHeaderSummary___3c1yh {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 1.5rem 1.5rem;\n}\n\n.esm-patient-chart-widgets__medication-order__medicationHeaderSummary___3c1yh td {\n  font-size: 1rem;\n}\n\n.esm-patient-chart-widgets__medication-order__medicationHeaderSummary___3c1yh table td:nth-child(1) {\n  font-weight: 500;\n}\n\n.esm-patient-chart-widgets__medication-order__medicationHeaderSummary___3c1yh table td:nth-child(4) {\n  text-transform: uppercase;\n  color: var(--omrs-color-ink-medium-contrast);\n  font-family: "Courier New";\n}\n\n.esm-patient-chart-widgets__medication-order__medicationHeaderSummary___3c1yh table td:nth-child(4) > span {\n  font-weight: 500;\n  color: var(--omrs-color-ink-high-contrast);\n  font-family: "Roboto";\n  text-transform: lowercase;\n}\n\n.esm-patient-chart-widgets__medication-order__medicationOrderDetailsContainer___3m3Sb {\n  display: flex;\n  width: 100%;\n  margin: 0rem 1.25rem;\n}\n\n.esm-patient-chart-widgets__medication-order__medicationContainer___rtZwH {\n  display: flex;\n  width: 50%;\n  border-radius: 0.25rem;\n  padding: 1.25rem;\n  box-shadow: 0rem 0.125rem 0.25rem rgba(0, 0, 0, 0.08),\n    0rem 0.0625rem 0.25rem rgba(0, 0, 0, 0.04);\n  background-color: rgba(249, 249, 249, 0.94);\n}\n\n.esm-patient-chart-widgets__medication-order__doseAndFrequency___39YMc {\n  display: flex;\n  flex-direction: column;\n  font-weight: 500;\n  font-size: 1rem;\n  user-select: none;\n}\n\n.esm-patient-chart-widgets__medication-order__doseAndFrequency___39YMc span {\n  color: var(--omrs-color-ink-medium-contrast);\n  font-weight: 700;\n}\n\n.esm-patient-chart-widgets__medication-order__medicationOrderRadio___nqJJl {\n  margin: 0.625rem 0rem 0rem 0.625rem;\n  display: flex;\n  justify-content: center;\n}\n\n.esm-patient-chart-widgets__medication-order__medicationOrderRadio___nqJJl input[type="radio"] {\n  display: none;\n}\n\n.esm-patient-chart-widgets__medication-order__medicationOrderRadio___nqJJl label {\n  color: var(--omrs-color-ink-medium-contrast);\n  background-color: var(--omrs-color-bg-low-contrast);\n  padding: 0.5rem 1rem;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__medication-order__medicationOrderRadio___nqJJl input[type="radio"]:checked + label {\n  color: var(--omrs-color-interaction);\n  background-color: var(--omrs-color-ink-white);\n  border: 0.0625rem solid var(--omrs-color-interaction);\n}\n\n.esm-patient-chart-widgets__medication-order__medicationContainerColumnTwo___f7gqt {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  margin: 0rem 0rem 0rem 0.625rem;\n}\n\n.esm-patient-chart-widgets__medication-order__medicationOrderInput___1NA10 {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  flex-direction: column;\n}\n\n.esm-patient-chart-widgets__medication-order__medicationOrderInput___1NA10 input[type="text"] {\n  padding: 0.625rem;\n  outline: none;\n  border: 0.0625rem solid var(--omrs-color-ink-lowest-contrast);\n  border-radius: 0.125rem;\n  user-select: none;\n  font-weight: 700;\n  font-size: 1rem;\n}\n\n.esm-patient-chart-widgets__medication-order__medicationOrderInput___1NA10 input[type="text"]::placeholder {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__medication-order__medicationOrderInput___1NA10 input[type="text"]::placeholder {\n  font-size: 1rem;\n  font-weight: 500;\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__medication-order__medicationOrderInput___1NA10 input[type="text"]:valid {\n  color: var(--omrs-color-interaction);\n}\n\n.esm-patient-chart-widgets__medication-order__medicationOrderInput___1NA10 label {\n  color: var(--omrs-color-ink-medium-contrast);\n  font-weight: 500;\n  margin: 0.125rem 0.625rem;\n}\n\n.esm-patient-chart-widgets__medication-order__medicationOrderInput___1NA10 textarea {\n  outline: none;\n  border: 0.0625rem solid var(--omrs-color-ink-low-contrast);\n  border-radius: 0.125rem;\n  padding: 0.625rem;\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.esm-patient-chart-widgets__medication-order__medicationOrderFooter___3m6FA {\n  display: flex;\n  background-color: var(--omrs-color-ink-white);\n  width: 100%;\n  margin-top: 1.25rem;\n}\n\n.esm-patient-chart-widgets__medication-order__medicationOrderFooter___3m6FA button {\n  width: 50%;\n  border-radius: 6.25rem;\n  margin: 0.5rem 1rem;\n  cursor: pointer;\n}\n\n.esm-patient-chart-widgets__medication-order__omrsSelectOptions___vU-Ec {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  width: 100%;\n}\n\n.esm-patient-chart-widgets__medication-order__omrsSelectOptions___vU-Ec select {\n  color: var(--omrs-color-interaction);\n  font-weight: 700;\n  text-align: center;\n  padding: 0.625rem;\n  border: 0.0625rem solid var(--omrs-color-ink-lowest-contrast);\n  background-color: var(--omrs-color-ink-white);\n  border-radius: 4.5rem;\n  min-width: 50%;\n}\n',
                ""
              ]),
                (t.locals = {
                  medicationOrderWrapper:
                    "esm-patient-chart-widgets__medication-order__medicationOrderWrapper___2WWL1",
                  medicationHeaderSummary:
                    "esm-patient-chart-widgets__medication-order__medicationHeaderSummary___3c1yh",
                  medicationOrderDetailsContainer:
                    "esm-patient-chart-widgets__medication-order__medicationOrderDetailsContainer___3m3Sb",
                  medicationContainer:
                    "esm-patient-chart-widgets__medication-order__medicationContainer___rtZwH",
                  doseAndFrequency:
                    "esm-patient-chart-widgets__medication-order__doseAndFrequency___39YMc",
                  medicationOrderRadio:
                    "esm-patient-chart-widgets__medication-order__medicationOrderRadio___nqJJl",
                  medicationContainerColumnTwo:
                    "esm-patient-chart-widgets__medication-order__medicationContainerColumnTwo___f7gqt",
                  medicationOrderInput:
                    "esm-patient-chart-widgets__medication-order__medicationOrderInput___1NA10",
                  medicationOrderFooter:
                    "esm-patient-chart-widgets__medication-order__medicationOrderFooter___3m6FA",
                  omrsSelectOptions:
                    "esm-patient-chart-widgets__medication-order__omrsSelectOptions___vU-Ec"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                ".omrs-breakpoint-gt-phone .esm-patient-chart-widgets__medication-level-two__medicationsLevelTwo___1iaLA {\n  display: flex;\n  justify-content: center;\n  padding-top: 3.25rem;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__medication-level-two__medicationsLevelTwo___1iaLA {\n  padding: 3.25rem 0.5rem 0 0.5rem;\n}\n\n.esm-patient-chart-widgets__medication-level-two__medicationsTable___1_Cyv {\n  width: 100%;\n}\n.esm-patient-chart-widgets__medication-level-two__medicationsTable___1_Cyv thead td {\n  padding: 1rem 0.25rem 1rem 1rem;\n}\n\n.esm-patient-chart-widgets__medication-level-two__medicationsTable___1_Cyv thead {\n  color: var(--omrs-color-ink-medium-contrast);\n  border-bottom: 1px solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__medication-level-two__medicationsTable___1_Cyv thead td span {\n  font-weight: normal;\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__medication-level-two__medicationsTable___1_Cyv tbody td {\n  padding: 0.5rem 0.25rem 0.5rem 1rem;\n}\n\n.esm-patient-chart-widgets__medication-level-two__medicationsTable___1_Cyv tbody td span {\n  color: var(--omrs-color-ink-high-contrast);\n}\n\n.esm-patient-chart-widgets__medication-level-two__medicationsTable___1_Cyv tbody tr {\n  border-bottom: 1px solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__medication-level-two__medicationsFooter___27HEw {\n  display: flex;\n  align-items: center;\n  padding: 1rem 0.25rem 1rem 1rem;\n  text-decoration: none;\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__medication-level-two__medicationsFooter___27HEw svg {\n  margin-right: 0.5rem;\n}\n\n.esm-patient-chart-widgets__medication-level-two__medicationStatement___j5D9J {\n  text-transform: lowercase;\n}\n\n.esm-patient-chart-widgets__medication-level-two__medicationFooter___243B6 {\n  text-align: center;\n}\n\n.esm-patient-chart-widgets__medication-level-two__medicationStatus___35Yir {\n  position: absolute;\n}\n",
                ""
              ]),
                (t.locals = {
                  medicationsLevelTwo:
                    "esm-patient-chart-widgets__medication-level-two__medicationsLevelTwo___1iaLA",
                  medicationsTable:
                    "esm-patient-chart-widgets__medication-level-two__medicationsTable___1_Cyv",
                  medicationsFooter:
                    "esm-patient-chart-widgets__medication-level-two__medicationsFooter___27HEw",
                  medicationStatement:
                    "esm-patient-chart-widgets__medication-level-two__medicationStatement___j5D9J",
                  medicationFooter:
                    "esm-patient-chart-widgets__medication-level-two__medicationFooter___243B6",
                  medicationStatus:
                    "esm-patient-chart-widgets__medication-level-two__medicationStatus___35Yir"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                '.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__medication-level-three__medicationSummary___2AF89 {\n  display: flex;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__medication-level-three__medicationSummary___2AF89 {\n  padding: 0.25rem 0.5rem 0 0.5rem;\n}\n\n.esm-patient-chart-widgets__medication-level-three__medicationCard___1p9sk {\n  margin: 0rem 1rem;\n}\n\n.esm-patient-chart-widgets__medication-level-three__medicationTable___2WyLO {\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.esm-patient-chart-widgets__medication-level-three__medicationTable___2WyLO thead th {\n  color: var(--omrs-color-ink-medium-contrast);\n  text-align: left;\n}\n\n.esm-patient-chart-widgets__medication-level-three__medicationTable___2WyLO thead {\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__medication-level-three__medicationTable___2WyLO tbody td:nth-child(1) {\n  font-family: "Work Sans";\n}\n\n.esm-patient-chart-widgets__medication-level-three__medicationTable___2WyLO thead td {\n  margin-top: 0.625rem;\n}\n\n.esm-patient-chart-widgets__medication-level-three__medicationTable___2WyLO thead td:nth-child(1) {\n  width: 25%;\n}\n.esm-patient-chart-widgets__medication-level-three__gridContainer___3iyKV {\n  display: grid;\n  justify-items: start;\n  grid-template-columns: auto auto auto;\n  grid-gap: 10px;\n  padding: 10px;\n}\n\n.esm-patient-chart-widgets__medication-level-three__gridContainer___3iyKV > div {\n  text-align: left;\n  padding: 20px 20px 20px 20px;\n}\n.esm-patient-chart-widgets__medication-level-three__medicationDisplay___11Rnp {\n  display: block;\n}\n\n.esm-patient-chart-widgets__medication-level-three__medicationTextColor___38U7V {\n  text-decoration-color: "var(--omrs-color-ink-low-contrast)";\n}\n',
                ""
              ]),
                (t.locals = {
                  medicationSummary:
                    "esm-patient-chart-widgets__medication-level-three__medicationSummary___2AF89",
                  medicationCard:
                    "esm-patient-chart-widgets__medication-level-three__medicationCard___1p9sk",
                  medicationTable:
                    "esm-patient-chart-widgets__medication-level-three__medicationTable___2WyLO",
                  gridContainer:
                    "esm-patient-chart-widgets__medication-level-three__gridContainer___3iyKV",
                  medicationDisplay:
                    "esm-patient-chart-widgets__medication-level-three__medicationDisplay___11Rnp",
                  medicationTextColor:
                    "esm-patient-chart-widgets__medication-level-three__medicationTextColor___38U7V"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                '.esm-patient-chart-widgets__notes-overview__moreNotes___2et5Q {\n  display: flex;\n  align-items: center;\n  border: none;\n  padding: 0.625rem 1.625rem 0.625rem 1rem;\n  background-color: var(--omrs-color-bg-medium-contrast);\n  color: var(--omrs-color-ink-medium-contrast);\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.esm-patient-chart-widgets__notes-overview__tableNotesRow___ZD-NV {\n  border-bottom: 1px solid var(--omrs-color-bg-low-contrast);\n}\n.esm-patient-chart-widgets__notes-overview__svgUpper___2MZ68 {\n  display: none;\n}\n\n.esm-patient-chart-widgets__notes-overview__tableHeader___3W71j {\n  padding: 0.625rem;\n}\n.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__notes-overview__card___35KoB {\n  margin: 0.5rem 1rem;\n}\n.esm-patient-chart-widgets__notes-overview__tableNotes___3jVr5 {\n  width: 100%;\n}\n.esm-patient-chart-widgets__notes-overview__tableNotesHeader___2fb0y {\n  color: var(--omrs-color-ink-medium-contrast);\n  font-size: 0.9375rem;\n  text-transform: capitalize;\n  font-weight: normal;\n  letter-spacing: 0.0275rem;\n  font-family: "Work Sans";\n}\n\n.esm-patient-chart-widgets__notes-overview__tableNotesData___3HrNG,\n.esm-patient-chart-widgets__notes-overview__tableNotesAuthor___2iTqC {\n  font-size: 1.0625rem;\n  text-align: center;\n  width: 33.3%;\n}\n\n.esm-patient-chart-widgets__notes-overview__tableNotesDate___1tN4S {\n  font-family: "Work Sans";\n  font-weight: 500;\n  width: 33.3%;\n  padding: 0.625rem 1.625rem 0.625rem 1rem;\n}\n\n.esm-patient-chart-widgets__notes-overview__location___xOTLE {\n  color: var(--omrs-color-ink-medium-contrast);\n  font-family: "Roboto";\n}\n.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__notes-overview__tableNotesRow___ZD-NV {\n  display: table-row;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__notes-overview__tableNotesData___3HrNG,\n.esm-patient-chart-widgets__notes-overview__tableNotesAuthor___2iTqC,\n.esm-patient-chart-widgets__notes-overview__tableNotesRow___ZD-NV {\n  display: block;\n}\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__notes-overview__tableNotesAuthor___2iTqC {\n  color: var(--omrs-color-ink-medium-contrast);\n  text-align: left;\n  font-family: "Roboto";\n}\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__notes-overview__tableNotesData___3HrNG {\n  text-align: left;\n  font-family: "Roboto";\n  font-weight: 500;\n  font-size: 1.0625rem;\n}\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__notes-overview__tableNotesDate___1tN4S {\n  font-family: "Work Sans";\n  text-align: left;\n  padding: 0;\n}\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__notes-overview__tableNotes___3jVr5 {\n  width: 100%;\n}\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__notes-overview__tableNotesHeader___2fb0y,\n.esm-patient-chart-widgets__notes-overview__tdLowerSvg___vd5N0 {\n  display: none;\n}\n',
                ""
              ]),
                (t.locals = {
                  moreNotes:
                    "esm-patient-chart-widgets__notes-overview__moreNotes___2et5Q",
                  tableNotesRow:
                    "esm-patient-chart-widgets__notes-overview__tableNotesRow___ZD-NV",
                  svgUpper:
                    "esm-patient-chart-widgets__notes-overview__svgUpper___2MZ68",
                  tableHeader:
                    "esm-patient-chart-widgets__notes-overview__tableHeader___3W71j",
                  card:
                    "esm-patient-chart-widgets__notes-overview__card___35KoB",
                  tableNotes:
                    "esm-patient-chart-widgets__notes-overview__tableNotes___3jVr5",
                  tableNotesHeader:
                    "esm-patient-chart-widgets__notes-overview__tableNotesHeader___2fb0y",
                  tableNotesData:
                    "esm-patient-chart-widgets__notes-overview__tableNotesData___3HrNG",
                  tableNotesAuthor:
                    "esm-patient-chart-widgets__notes-overview__tableNotesAuthor___2iTqC",
                  tableNotesDate:
                    "esm-patient-chart-widgets__notes-overview__tableNotesDate___1tN4S",
                  location:
                    "esm-patient-chart-widgets__notes-overview__location___xOTLE",
                  tdLowerSvg:
                    "esm-patient-chart-widgets__notes-overview__tdLowerSvg___vd5N0"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                ".esm-patient-chart-widgets__notes-summary__detailedNotesTable___3ZGgO {\n  width: 100%;\n}\n\n.esm-patient-chart-widgets__notes-summary__detailedNotesTable___3ZGgO thead tr {\n  text-align: left;\n  color: var(--omrs-color-ink-medium-contrast);\n  font-weight: normal;\n  border-bottom: 0.0625rem solid var(--omrs-color-bg-lowest-contrast);\n}\n\n.esm-patient-chart-widgets__notes-summary__detailedNotesTable___3ZGgO thead tr,\ntd {\n  padding: 0.75rem 0rem 0.75rem 1.5rem;\n}\n\n.esm-patient-chart-widgets__notes-summary__detailedNotesTable___3ZGgO thead tr td:nth-child(2) {\n  display: flex;\n  align-items: center;\n}\n\n.esm-patient-chart-widgets__notes-summary__detailedNotesTable___3ZGgO thead tr td svg {\n  margin-left: 0.5rem;\n  fill: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__notes-summary__detailedNotesTable___3ZGgO tbody tr td {\n  vertical-align: top;\n}\n\n.esm-patient-chart-widgets__notes-summary__detailedNotesTable___3ZGgO tbody tr {\n  border-bottom: 0.0625rem solid var(--omrs-color-bg-lowest-contrast);\n}\n\n.esm-patient-chart-widgets__notes-summary__detailedNotesTable___3ZGgO tbody tr td:nth-child(2) {\n  display: flex;\n  flex-direction: column;\n}\n\n.esm-patient-chart-widgets__notes-summary__pagination___2kGez {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 1rem 0.25rem 1rem 1rem;\n  background-color: var(--omrs-color-bg-medium-contrast);\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__notes-summary__pagination___2kGez button {\n  outline: none;\n  border: none;\n}\n\n.esm-patient-chart-widgets__notes-summary__pagination___2kGez button:active,\nbutton:focus {\n  outline: none;\n  border: none;\n}\n\n.esm-patient-chart-widgets__notes-summary__navButton___2-Kbe {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n",
                ""
              ]),
                (t.locals = {
                  detailedNotesTable:
                    "esm-patient-chart-widgets__notes-summary__detailedNotesTable___3ZGgO",
                  pagination:
                    "esm-patient-chart-widgets__notes-summary__pagination___2kGez",
                  navButton:
                    "esm-patient-chart-widgets__notes-summary__navButton___2-Kbe"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                '.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__programs-summary__programsSummary___h8smf {\n  display: flex;\n  justify-content: center;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__programs-summary__programsSummary___h8smf {\n  padding: 0.25rem 0.5rem 0 0.5rem;\n}\n\n.esm-patient-chart-widgets__programs-summary__programTable___we2Yd {\n  width: 100%;\n}\n\n.esm-patient-chart-widgets__programs-summary__programTable___we2Yd thead {\n  color: var(--omrs-color-ink-medium-contrast);\n  border-bottom: 0.0625rem solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__programs-summary__programTable___we2Yd thead td {\n  padding: 1rem 0.25rem 1rem 1rem;\n}\n\n.esm-patient-chart-widgets__programs-summary__programTable___we2Yd tbody {\n  padding: 2rem;\n  border-bottom: 0.0625rem solid var(--omrs-color-bg-low-contrast);\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__programs-summary__programTable___we2Yd thead td {\n  padding: 0.25rem 0.125rem 0.5rem 0.5rem;\n}\n\n.esm-patient-chart-widgets__programs-summary__programsSummary___h8smf tr {\n  padding: 0.813rem 0 1rem 0.813rem;\n  border-bottom: 0.0625rem solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__programs-summary__programTable___we2Yd td {\n  padding: 0.75rem 0 0.75rem 1rem;\n}\n\n.esm-patient-chart-widgets__programs-summary__programTable___we2Yd tbody td:nth-child(2) {\n  font-family: "Work Sans";\n}\n\n.esm-patient-chart-widgets__programs-summary__programTable___we2Yd tbody td:nth-child(3) {\n  font-family: "Work Sans";\n}\n\ntr.esm-patient-chart-widgets__programs-summary__inactive___2XON_ {\n  background: var(--omrs-color-bg-medium-contrast);\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\ntr.esm-patient-chart-widgets__programs-summary__active___kFQyV {\n  background: var(--omrs-color-bg-high-contrast);\n}\n',
                ""
              ]),
                (t.locals = {
                  programsSummary:
                    "esm-patient-chart-widgets__programs-summary__programsSummary___h8smf",
                  programTable:
                    "esm-patient-chart-widgets__programs-summary__programTable___we2Yd",
                  inactive:
                    "esm-patient-chart-widgets__programs-summary__inactive___2XON_",
                  active:
                    "esm-patient-chart-widgets__programs-summary__active___kFQyV"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                '.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__programs-detailed-summary__programSummary___2cuzL {\n  display: flex;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__programs-detailed-summary__programSummary___2cuzL {\n  padding: 0.25rem 0.5rem 0 0.5rem;\n}\n\n.esm-patient-chart-widgets__programs-detailed-summary__programCard___1TqRm {\n  margin: 0rem 1rem;\n}\n\n.esm-patient-chart-widgets__programs-detailed-summary__programTable___2rGzA {\n  width: 100%;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.esm-patient-chart-widgets__programs-detailed-summary__programTable___2rGzA thead th {\n  color: var(--omrs-color-ink-medium-contrast);\n  text-align: left;\n}\n\n.esm-patient-chart-widgets__programs-detailed-summary__programTable___2rGzA thead {\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__programs-detailed-summary__programTable___2rGzA tbody td:nth-child(1) {\n  font-family: "Work Sans";\n}\n\n.esm-patient-chart-widgets__programs-detailed-summary__programTable___2rGzA thead td {\n  margin-top: 0.625rem;\n}\n',
                ""
              ]),
                (t.locals = {
                  programSummary:
                    "esm-patient-chart-widgets__programs-detailed-summary__programSummary___2cuzL",
                  programCard:
                    "esm-patient-chart-widgets__programs-detailed-summary__programCard___1TqRm",
                  programTable:
                    "esm-patient-chart-widgets__programs-detailed-summary__programTable___2rGzA"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                ".esm-patient-chart-widgets__vitals-overview__vitalsTable___2SXbk {\n  width: 100%;\n}\n.esm-patient-chart-widgets__vitals-overview__vitalsTable___2SXbk thead td {\n  padding: 1rem 0.25rem 1rem 1rem;\n}\n\n.esm-patient-chart-widgets__vitals-overview__vitalsTable___2SXbk thead {\n  border-bottom: 1px solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__vitals-overview__vitalsTable___2SXbk thead td span {\n  font-weight: normal;\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__vitals-overview__vitalsTable___2SXbk tbody td {\n  padding: 0.5rem 0.25rem 0.5rem 1rem;\n}\n\n.esm-patient-chart-widgets__vitals-overview__vitalsTable___2SXbk tbody td span {\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__vitals-overview__vitalsTable___2SXbk tbody tr {\n  border-bottom: 1px solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__vitals-overview__vitalsFooter___19a-3 {\n  display: flex;\n  align-items: center;\n  padding: 1rem 0.25rem 1rem 1rem;\n  text-decoration: none;\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__vitals-overview__vitalsFooter___19a-3 svg {\n  margin-right: 0.5rem;\n}\n",
                ""
              ]),
                (t.locals = {
                  vitalsTable:
                    "esm-patient-chart-widgets__vitals-overview__vitalsTable___2SXbk",
                  vitalsFooter:
                    "esm-patient-chart-widgets__vitals-overview__vitalsFooter___19a-3"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              (t = n(8)(!1)).push([
                e.i,
                ".esm-patient-chart-widgets__vitals-detailed-summary__vitalsTable___xjUtw {\n  width: 100%;\n}\n.esm-patient-chart-widgets__vitals-detailed-summary__vitalsTable___xjUtw thead td {\n  padding: 1rem 0.25rem 1rem 1rem;\n}\n\n.esm-patient-chart-widgets__vitals-detailed-summary__vitalsTable___xjUtw thead {\n  border-bottom: 1px solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__vitals-detailed-summary__vitalsTable___xjUtw thead td span {\n  font-weight: normal;\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__vitals-detailed-summary__vitalsTable___xjUtw tbody td {\n  padding: 0.5rem 0.25rem 0.5rem 1rem;\n}\n\n.esm-patient-chart-widgets__vitals-detailed-summary__vitalsTable___xjUtw tbody td span {\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__vitals-detailed-summary__vitalsTable___xjUtw tbody tr {\n  border-bottom: 1px solid var(--omrs-color-bg-low-contrast);\n}\n\n.esm-patient-chart-widgets__vitals-detailed-summary__vitalsFooter___1r3DC {\n  display: flex;\n  align-items: center;\n  padding: 1rem 0.25rem 1rem 1rem;\n  text-decoration: none;\n  color: var(--omrs-color-ink-medium-contrast);\n}\n.esm-patient-chart-widgets__vitals-detailed-summary__vitalsFooter___1r3DC p {\n  margin: 0;\n  text-align: center;\n}\n.esm-patient-chart-widgets__vitals-detailed-summary__vitalsFooter___1r3DC svg {\n  margin-right: 0.5rem;\n}\n\n.omrs-breakpoint-gt-phone .esm-patient-chart-widgets__vitals-detailed-summary__vitalsSummary___30Q8o {\n  display: flex;\n  justify-content: center;\n  padding-top: 3.25rem;\n}\n\n.omrs-breakpoint-lt-tablet .esm-patient-chart-widgets__vitals-detailed-summary__vitalsSummary___30Q8o {\n  padding: 3.25rem 0.5rem 0 0.5rem;\n}\n\n.esm-patient-chart-widgets__vitals-detailed-summary__pagination___36LjJ {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 1rem 0.25rem 1rem 1rem;\n  background-color: var(--omrs-color-bg-medium-contrast);\n  color: var(--omrs-color-ink-medium-contrast);\n}\n\n.esm-patient-chart-widgets__vitals-detailed-summary__pagination___36LjJ button {\n  outline: none;\n  border: none;\n}\n\n.esm-patient-chart-widgets__vitals-detailed-summary__pagination___36LjJ button:active,\nbutton:focus {\n  outline: none;\n  border: none;\n}\n\n.esm-patient-chart-widgets__vitals-detailed-summary__navButton___3K_Dt {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.esm-patient-chart-widgets__vitals-detailed-summary__vitalsAbsent___1DSFP {\n  margin: 1rem 0.25rem 1rem 1rem;\n}\n\n.esm-patient-chart-widgets__vitals-detailed-summary__vitalsAbsent___1DSFP a {\n  color: var(--omrs-color-interaction-plus-one);\n}\n",
                ""
              ]),
                (t.locals = {
                  vitalsTable:
                    "esm-patient-chart-widgets__vitals-detailed-summary__vitalsTable___xjUtw",
                  vitalsFooter:
                    "esm-patient-chart-widgets__vitals-detailed-summary__vitalsFooter___1r3DC",
                  vitalsSummary:
                    "esm-patient-chart-widgets__vitals-detailed-summary__vitalsSummary___30Q8o",
                  pagination:
                    "esm-patient-chart-widgets__vitals-detailed-summary__pagination___36LjJ",
                  navButton:
                    "esm-patient-chart-widgets__vitals-detailed-summary__navButton___3K_Dt",
                  vitalsAbsent:
                    "esm-patient-chart-widgets__vitals-detailed-summary__vitalsAbsent___1DSFP"
                }),
                (e.exports = t);
            },
            function(e, t, n) {
              "use strict";
              n.r(t),
                n.d(t, "backendDependencies", function() {
                  return r;
                }),
                n.d(t, "importTranslation", function() {
                  return li;
                }),
                n.d(t, "SummaryCard", function() {
                  return u;
                }),
                n.d(t, "SummaryCardRow", function() {
                  return _;
                }),
                n.d(t, "SummaryCardFooter", function() {
                  return h;
                }),
                n.d(t, "SummaryCardRowContent", function() {
                  return g;
                }),
                n.d(t, "HorizontalLabelValue", function() {
                  return b;
                }),
                n.d(t, "VerticalLabelValue", function() {
                  return E;
                }),
                n.d(t, "Tabs", function() {
                  return N;
                }),
                n.d(t, "Panel", function() {
                  return k;
                }),
                n.d(t, "Breadcrumbs", function() {
                  return de;
                }),
                n.d(t, "AllergiesOverview", function() {
                  return Fe;
                }),
                n.d(t, "AllergiesSummary", function() {
                  return ze;
                }),
                n.d(t, "AllergyDetailedSummary", function() {
                  return qe;
                }),
                n.d(t, "AllergyForm", function() {
                  return Be;
                }),
                n.d(t, "AppointmentsOverview", function() {
                  return Je;
                }),
                n.d(t, "PatientBanner", function() {
                  return st;
                }),
                n.d(t, "ConditionsOverview", function() {
                  return dt;
                }),
                n.d(t, "ConditionsSummary", function() {
                  return ft;
                }),
                n.d(t, "ConditionDetailedSummary", function() {
                  return yt;
                }),
                n.d(t, "HeightAndWeightOverview", function() {
                  return Ot;
                }),
                n.d(t, "HeightAndWeightSummary", function() {
                  return Dr;
                }),
                n.d(t, "HeightAndWeightDetailedSummary", function() {
                  return ia;
                }),
                n.d(t, "MedicationsOverview", function() {
                  return Ca;
                }),
                n.d(t, "MedicationsSummary", function() {
                  return Da;
                }),
                n.d(t, "MedicationDetailedSummary", function() {
                  return Ua;
                }),
                n.d(t, "MedicationOrderBasket", function() {
                  return ka;
                }),
                n.d(t, "MedicationOrder", function() {
                  return Na;
                }),
                n.d(t, "NotesOverview", function() {
                  return Wa;
                }),
                n.d(t, "NotesSummary", function() {
                  return Ba;
                }),
                n.d(t, "Profile", function() {
                  return lt;
                }),
                n.d(t, "ProgramsOverview", function() {
                  return Ka;
                }),
                n.d(t, "ProgramsSummary", function() {
                  return Za;
                }),
                n.d(t, "ProgramDetailedSummary", function() {
                  return ei;
                }),
                n.d(t, "VitalsOverview", function() {
                  return ri;
                }),
                n.d(t, "VitalsSummary", function() {
                  return oi;
                }),
                n.d(t, "VitalsForm", function() {
                  return Tr;
                }),
                (function(e, t) {
                  if (
                    (t || (t = 1),
                    "string" != typeof e || 0 === e.trim().length)
                  )
                    throw Error(
                      "systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'"
                    );
                  if ("number" != typeof t || t <= 0 || !Number.isInteger(t))
                    throw Error(
                      "systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'"
                    );
                  let r;
                  try {
                    if (((r = window.System.resolve(e)), !r)) throw Error();
                  } catch (t) {
                    throw Error(
                      "systemjs-webpack-interop: There is no such module '" +
                        e +
                        "' in the SystemJS registry. Did you misspell the name of your module?"
                    );
                  }
                  n.p = (function(e, t) {
                    const n = new URL(e),
                      r = new URL(e).pathname;
                    let a = 0,
                      i = r.length;
                    for (; a !== t && i >= 0; ) {
                      "/" === r[--i] && a++;
                    }
                    if (a !== t)
                      throw Error(
                        "systemjs-webpack-interop: rootDirectoryLevel (" +
                          t +
                          ") is greater than the number of directories (" +
                          a +
                          ") in the URL path " +
                          fullUrl
                      );
                    return (n.pathname = n.pathname.slice(0, i + 1)), n.href;
                  })(r, t);
                })("@openmrs/esm-patient-chart-widgets");
              const r = { "webservices.rest": "^2.2.0", fhir: "^1.4.2" };
              var a = n(0),
                i = n.n(a),
                o = n(21),
                l = n.n(o),
                s = n(6),
                c = n(17);
              function u(e) {
                const { t: t } = Object(c.useTranslation)();
                return i.a.createElement(
                  "div",
                  { style: e.styles, className: "omrs-card ".concat(l.a.card) },
                  i.a.createElement(
                    "div",
                    { className: l.a.header },
                    i.a.createElement(
                      "div",
                      { className: l.a.headerTitle },
                      e.link
                        ? i.a.createElement(
                            s.Link,
                            { to: e.link, className: "omrs-unstyled" },
                            n()
                          )
                        : i.a.createElement(i.a.Fragment, null, n())
                    ),
                    e.addComponent &&
                      i.a.createElement(
                        "div",
                        { className: l.a.headerAdd },
                        i.a.createElement(
                          "button",
                          {
                            className: "omrs-unstyled ".concat(l.a.addBtn),
                            onClick: () =>
                              e.showComponent(e.addComponent, e.name)
                          },
                          "Add"
                        )
                      ),
                    e.editBtnUrl &&
                      i.a.createElement(
                        "div",
                        { className: l.a.headerEdit },
                        i.a.createElement(
                          "button",
                          { className: "omrs-unstyled ".concat(l.a.editBtn) },
                          i.a.createElement(
                            s.Link,
                            { className: "omrs-unstyled", to: e.editBtnUrl },
                            "Edit"
                          )
                        )
                      )
                  ),
                  e.children
                );
                function n() {
                  return i.a.createElement(
                    "div",
                    { className: l.a.title },
                    i.a.createElement(
                      "h2",
                      { className: "omrs-margin-0" },
                      e.name
                    ),
                    i.a.createElement(
                      "svg",
                      { className: "omrs-icon", fill: "rgba(0, 0, 0, 0.54)" },
                      i.a.createElement("use", {
                        xlinkHref: "#omrs-icon-chevron-right"
                      })
                    )
                  );
                }
              }
              var m = n(39),
                d = n.n(m);
              function _(e) {
                return e.linkTo
                  ? i.a.createElement(
                      s.Link,
                      {
                        to: e.linkTo,
                        className: "omrs-unstyled ".concat(d.a.row)
                      },
                      e.children,
                      i.a.createElement(
                        "svg",
                        {
                          className: "omrs-icon",
                          fill: "var(--omrs-color-ink-low-contrast)"
                        },
                        i.a.createElement("use", {
                          xlinkHref: "#omrs-icon-chevron-right"
                        })
                      )
                    )
                  : i.a.createElement(
                      "div",
                      { className: "omrs-unstyled ".concat(d.a.row) },
                      e.children
                    );
              }
              var p = n(40),
                f = n.n(p);
              function h(e) {
                return e.linkTo
                  ? i.a.createElement(
                      "div",
                      { className: "".concat(f.a.footer) },
                      i.a.createElement(
                        "svg",
                        {
                          className: "omrs-icon",
                          fill: "var(--omrs-color-ink-medium-contrast)"
                        },
                        i.a.createElement("use", {
                          xlinkHref: "#omrs-icon-chevron-right"
                        })
                      ),
                      i.a.createElement(
                        s.Link,
                        {
                          to: e.linkTo,
                          className: "omrs-unstyled",
                          style: { border: "none" }
                        },
                        i.a.createElement(
                          "p",
                          { className: "omrs-bold" },
                          "See all"
                        )
                      )
                    )
                  : i.a.createElement(
                      "div",
                      { className: f.a.footer },
                      i.a.createElement(
                        "p",
                        { className: "omrs-bold" },
                        "See all"
                      )
                    );
              }
              function g(e) {
                const t = {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: e.justifyContent,
                  width: "100%",
                  paddingRight: "1rem",
                  flexWrap: "wrap"
                };
                return i.a.createElement("div", { style: t }, e.children);
              }
              g.defaultProps = { justifyContent: "flex-start" };
              var v = n(48),
                y = n.n(v);
              function b(e) {
                return i.a.createElement(
                  "div",
                  { className: y.a.root },
                  i.a.createElement(
                    "label",
                    {
                      className: e.labelClassName || "omrs-type-body-regular",
                      style: e.labelStyles
                    },
                    e.label,
                    e.specialKey && i.a.createElement("sup", null, "*")
                  ),
                  i.a.createElement(
                    "div",
                    {
                      title: e.label,
                      className: e.valueClassName || "omrs-type-body-regular",
                      style: e.valueStyles
                    },
                    e.value || "—"
                  )
                );
              }
              b.defaultProps = {
                labelStyles: {},
                valueStyles: {},
                specialKey: !1
              };
              var A = n(41),
                w = n.n(A);
              function E(e) {
                return i.a.createElement(
                  "div",
                  { className: w.a.root },
                  i.a.createElement(
                    "label",
                    { className: "omrs-type-body-small ".concat(w.a.label) },
                    e.label
                  ),
                  i.a.createElement(
                    "div",
                    {
                      className: e.className,
                      style: e.valueStyles,
                      title: e.label
                    },
                    e.value || "—"
                  )
                );
              }
              E.defaultProps = { valueStyles: {}, className: "" };
              var x = n(23),
                S = n.n(x);
              function N(e) {
                return i.a.createElement(
                  "div",
                  null,
                  i.a.createElement(
                    "div",
                    { className: S.a.tabs },
                    Array.isArray(e.children)
                      ? e.children.map((t, n) =>
                          i.a.createElement(
                            "div",
                            {
                              key: n,
                              className: "".concat(
                                n == e.selected ? S.a.selected : S.a.unselected
                              ),
                              style: {
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between"
                              }
                            },
                            i.a.createElement(
                              "div",
                              { key: n, className: S.a.tab },
                              i.a.createElement(
                                "button",
                                {
                                  className: "omrs-unstyled",
                                  onClick: () => e.setSelected(n)
                                },
                                t.props.title
                              )
                            ),
                            i.a.createElement(
                              "button",
                              {
                                onClick: t =>
                                  (function(t, n) {
                                    t.stopPropagation(), e.removeTab(n);
                                  })(t, n),
                                className: "".concat(
                                  S.a.closeIcon,
                                  " omrs-unstyled omrs-btn-icon-small"
                                )
                              },
                              i.a.createElement(
                                "svg",
                                { className: "omrs-icon" },
                                i.a.createElement("use", {
                                  xlinkHref: "#omrs-icon-close"
                                })
                              )
                            )
                          )
                        )
                      : i.a.createElement(
                          "div",
                          { className: S.a.selected },
                          e.children.title
                        )
                  ),
                  i.a.createElement("div", { className: S.a.panel }, e.children)
                );
              }
              function k(e) {
                return i.a.createElement("div", { style: e.style }, e.children);
              }
              function O(e, t) {
                (e.prototype = Object.create(t.prototype)),
                  (e.prototype.constructor = e),
                  (e.__proto__ = t);
              }
              var C = n(35),
                j = n.n(C);
              function T() {
                return (
                  Object.assign ||
                  function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          (e[r] = n[r]);
                    }
                    return e;
                  }
                ).apply(this, arguments);
              }
              function D(e) {
                return "/" === e.charAt(0);
              }
              function M(e, t) {
                for (var n = t, r = n + 1, a = e.length; r < a; n += 1, r += 1)
                  e[n] = e[r];
                e.pop();
              }
              var I = function(e, t) {
                void 0 === t && (t = "");
                var n,
                  r = (e && e.split("/")) || [],
                  a = (t && t.split("/")) || [],
                  i = e && D(e),
                  o = t && D(t),
                  l = i || o;
                if (
                  (e && D(e)
                    ? (a = r)
                    : r.length && (a.pop(), (a = a.concat(r))),
                  !a.length)
                )
                  return "/";
                if (a.length) {
                  var s = a[a.length - 1];
                  n = "." === s || ".." === s || "" === s;
                } else n = !1;
                for (var c = 0, u = a.length; u >= 0; u--) {
                  var m = a[u];
                  "." === m
                    ? M(a, u)
                    : ".." === m
                    ? (M(a, u), c++)
                    : c && (M(a, u), c--);
                }
                if (!l) for (; c--; c) a.unshift("..");
                !l || "" === a[0] || (a[0] && D(a[0])) || a.unshift("");
                var d = a.join("/");
                return n && "/" !== d.substr(-1) && (d += "/"), d;
              };
              var U = function(e, t) {
                if (!e) throw new Error("Invariant failed");
              };
              function F(e) {
                var t = e.pathname,
                  n = e.search,
                  r = e.hash,
                  a = t || "/";
                return (
                  n && "?" !== n && ("?" === n.charAt(0) ? n : "?" + n),
                  r && "#" !== r && ("#" === r.charAt(0) ? r : "#" + r),
                  a
                );
              }
              function P(e, t, n, r) {
                var a;
                "string" == typeof e
                  ? ((function(e) {
                      var t = e || "/",
                        n = "",
                        r = "",
                        a = t.indexOf("#");
                      -1 !== a && (t.substr(a), t.substr(0, a));
                      var i = t.indexOf("?");
                      return (
                        -1 !== i && (t.substr(i), t.substr(0, i)),
                        {
                          pathname: t,
                          search: "?" === n ? "" : n,
                          hash: "#" === r ? "" : r
                        }
                      );
                    })(e).state = t)
                  : (void 0 === T({}, e).pathname && (a.pathname = ""),
                    a.search
                      ? "?" !== a.search.charAt(0) &&
                        (a.search = "?" + a.search)
                      : (a.search = ""),
                    a.hash
                      ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash)
                      : (a.hash = ""),
                    void 0 !== t && void 0 === a.state && (a.state = t));
                try {
                  a.pathname = decodeURI(a.pathname);
                } catch (e) {
                  throw e instanceof URIError
                    ? new URIError(
                        'Pathname "' +
                          a.pathname +
                          '" could not be decoded. This is likely caused by an invalid percent-encoding.'
                      )
                    : e;
                }
                return (
                  n && (a.key = n),
                  r
                    ? a.pathname
                      ? "/" !== a.pathname.charAt(0) &&
                        (a.pathname = I(a.pathname, r.pathname))
                      : (a.pathname = r.pathname)
                    : a.pathname || (a.pathname = "/"),
                  a
                );
              }
              function R() {
                var e = null;
                var t = [];
                return {
                  setPrompt: function(t) {
                    return (
                      t,
                      function() {
                        e === t && null;
                      }
                    );
                  },
                  confirmTransitionTo: function(t, n, r, a) {
                    if (null != e) {
                      var i = "function" == typeof e ? e(t, n) : e;
                      "string" == typeof i
                        ? "function" == typeof r
                          ? r(i, a)
                          : a(!0)
                        : a(!1 !== i);
                    } else a(!0);
                  },
                  appendListener: function(e) {
                    var n = !0;
                    function r() {
                      n && e.apply(void 0, arguments);
                    }
                    return (
                      t.push(r),
                      function() {
                        !1,
                          t.filter(function(e) {
                            return e !== r;
                          });
                      }
                    );
                  },
                  notifyListeners: function() {
                    for (
                      var e = arguments.length, n = new Array(e), r = 0;
                      r < e;
                      r++
                    )
                      n[r] = arguments[r];
                    t.forEach(function(e) {
                      return e.apply(void 0, n);
                    });
                  }
                };
              }
              "undefined" == typeof window ||
                !window.document ||
                window.document.createElement;
              function H(e, t, n) {
                return Math.min(Math.max(e, t), n);
              }
              function W(e) {
                void 0 === e && {};
                var t = e,
                  n = t.getUserConfirmation,
                  r = t.initialEntries,
                  a = void 0 === r ? ["/"] : r,
                  i = t.initialIndex,
                  o = void 0 === i ? 0 : i,
                  l = t.keyLength,
                  s = void 0 === l ? 6 : l,
                  c = R();
                function u(e) {
                  T(h, e),
                    (h.length = h.entries.length),
                    c.notifyListeners(h.location, h.action);
                }
                function m() {
                  return Math.random()
                    .toString(36)
                    .substr(2, s);
                }
                var d = H(o, 0, a.length - 1),
                  _ = a.map(function(e) {
                    return P(
                      e,
                      void 0,
                      "string" == typeof e ? m() : e.key || m()
                    );
                  }),
                  p = F;
                function f(e) {
                  var t = H(h.index + e, 0, h.entries.length - 1),
                    r = h.entries[t];
                  c.confirmTransitionTo(r, "POP", n, function(e) {
                    e ? u({ action: "POP", location: r, index: t }) : u();
                  });
                }
                var h = {
                  length: _.length,
                  action: "POP",
                  location: _[d],
                  index: d,
                  entries: _,
                  createHref: p,
                  push: function(e, t) {
                    var r = P(e, t, m(), h.location);
                    c.confirmTransitionTo(r, "PUSH", n, function(e) {
                      if (e) {
                        var t = h.index + 1,
                          n = h.entries.slice(0);
                        n.length > t ? n.splice(t, n.length - t, r) : n.push(r),
                          u({
                            action: "PUSH",
                            location: r,
                            index: t,
                            entries: n
                          });
                      }
                    });
                  },
                  replace: function(e, t) {
                    var r = P(e, t, m(), h.location);
                    c.confirmTransitionTo(r, "REPLACE", n, function(e) {
                      e &&
                        ((h.entries[h.index] = r),
                        u({ action: "REPLACE", location: r }));
                    });
                  },
                  go: f,
                  goBack: function() {
                    f(-1);
                  },
                  goForward: function() {
                    f(1);
                  },
                  canGo: function(e) {
                    var t = h.index + e;
                    return t >= 0 && t < h.entries.length;
                  },
                  block: function(e) {
                    return void 0 === e && !1, c.setPrompt(e);
                  },
                  listen: function(e) {
                    return c.appendListener(e);
                  }
                };
                return h;
              }
              var Y = n(42),
                L = n.n(Y),
                B = n(49),
                z = n.n(B);
              function $(e) {
                var t = [];
                return {
                  on: function(e) {
                    t.push(e);
                  },
                  off: function(e) {
                    t = t.filter(function(t) {
                      return t !== e;
                    });
                  },
                  get: function() {
                    return e;
                  },
                  set: function(n, r) {
                    (e = n),
                      t.forEach(function(t) {
                        return t(e, r);
                      });
                  }
                };
              }
              var V =
                  i.a.createContext ||
                  function(e, t) {
                    var n,
                      r,
                      i = "__create-react-context-" + z()() + "__",
                      o = (function(e) {
                        function n() {
                          var t;
                          return (
                            ((t = e.apply(this, arguments) || this).emitter = $(
                              t.props.value
                            )),
                            t
                          );
                        }
                        L()(n, e);
                        var r = n.prototype;
                        return (
                          (r.getChildContext = function() {
                            var e;
                            return ((e = {})[i] = this.emitter), e;
                          }),
                          (r.componentWillReceiveProps = function(e) {
                            if (this.props.value !== e.value) {
                              var n,
                                r = this.props.value,
                                a = e.value;
                              ((i = r) === (o = a)
                              ? 0 !== i || 1 / i == 1 / o
                              : i != i && o != o)
                                ? (n = 0)
                                : ((n =
                                    "function" == typeof t
                                      ? t(r, a)
                                      : 1073741823),
                                  0 !== (n |= 0) &&
                                    this.emitter.set(e.value, n));
                            }
                            var i, o;
                          }),
                          (r.render = function() {
                            return this.props.children;
                          }),
                          n
                        );
                      })(a.Component);
                    o.childContextTypes =
                      (((n = {})[i] = j.a.object.isRequired), n);
                    var l = (function(t) {
                      function n() {
                        var e;
                        return (
                          ((e = t.apply(this, arguments) || this).state = {
                            value: e.getValue()
                          }),
                          (e.onUpdate = function(t, n) {
                            0 != ((0 | e.observedBits) & n) &&
                              e.setState({ value: e.getValue() });
                          }),
                          e
                        );
                      }
                      L()(n, t);
                      var r = n.prototype;
                      return (
                        (r.componentWillReceiveProps = function(e) {
                          var t = e.observedBits;
                          this.observedBits = null == t ? 1073741823 : t;
                        }),
                        (r.componentDidMount = function() {
                          this.context[i] && this.context[i].on(this.onUpdate);
                          var e = this.props.observedBits;
                          this.observedBits = null == e ? 1073741823 : e;
                        }),
                        (r.componentWillUnmount = function() {
                          this.context[i] && this.context[i].off(this.onUpdate);
                        }),
                        (r.getValue = function() {
                          return this.context[i] ? this.context[i].get() : e;
                        }),
                        (r.render = function() {
                          return ((e = this.props.children),
                          Array.isArray(e) ? e[0] : e)(this.state.value);
                          var e;
                        }),
                        n
                      );
                    })(a.Component);
                    return (
                      (l.contextTypes = (((r = {})[i] = j.a.object), r)),
                      { Provider: o, Consumer: l }
                    );
                  },
                q = n(43),
                K = n.n(q);
              n(46);
              function G(e, t) {
                if (null == e) return {};
                var n,
                  r,
                  a = {},
                  i = Object.keys(e);
                for (0; r < i.length; r++)
                  i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a;
              }
              n(50);
              var J = (function(e) {
                  var t = V();
                  return (t.displayName = e), t;
                })("Router"),
                Z = (function(e) {
                  function t(t) {
                    var n;
                    return (
                      ((n = e.call(this, t) || this).state = {
                        location: t.history.location
                      }),
                      (n._isMounted = !1),
                      (n._pendingLocation = null),
                      t.staticContext ||
                        (n.unlisten = t.history.listen(function(e) {
                          n._isMounted
                            ? n.setState({ location: e })
                            : (n._pendingLocation = e);
                        })),
                      n
                    );
                  }
                  O(t, e),
                    (t.computeRootMatch = function(e) {
                      return {
                        path: "/",
                        url: "/",
                        params: {},
                        isExact: "/" === e
                      };
                    });
                  var n = t.prototype;
                  return (
                    (n.componentDidMount = function() {
                      (this._isMounted = !0),
                        this._pendingLocation &&
                          this.setState({ location: this._pendingLocation });
                    }),
                    (n.componentWillUnmount = function() {
                      this.unlisten && this.unlisten();
                    }),
                    (n.render = function() {
                      return i.a.createElement(J.Provider, {
                        children: this.props.children || null,
                        value: {
                          history: this.props.history,
                          location: this.state.location,
                          match: t.computeRootMatch(
                            this.state.location.pathname
                          ),
                          staticContext: this.props.staticContext
                        }
                      });
                    }),
                    t
                  );
                })(i.a.Component);
              i.a.Component;
              i.a.Component;
              var Q = {},
                X = 0;
              function ee(e, t) {
                void 0 === t && (t = {}),
                  ("string" == typeof t || Array.isArray(t)) &&
                    (t = { path: t });
                var n = t,
                  r = n.path,
                  a = n.exact,
                  i = void 0 !== a && a,
                  o = n.strict,
                  l = void 0 !== o && o,
                  s = n.sensitive,
                  c = void 0 !== s && s;
                return [].concat(r).reduce(function(t, n) {
                  if (!n && "" !== n) return null;
                  if (t) return t;
                  var r = (function(e, t) {
                      var n = "" + t.end + t.strict + t.sensitive,
                        r = Q[n] || (Q[n] = {});
                      if (r[e]) return r[e];
                      var a = [],
                        i = { regexp: K()(e, a, t), keys: a };
                      return X < 1e4 && ((r[e] = i), X++), i;
                    })(n, { end: i, strict: l, sensitive: c }),
                    a = r.regexp,
                    o = r.keys,
                    s = a.exec(e);
                  if (!s) return null;
                  var u = s[0],
                    m = s.slice(1),
                    d = e === u;
                  return i && !d
                    ? null
                    : {
                        path: n,
                        url: "/" === n && "" === u ? "/" : u,
                        isExact: d,
                        params: o.reduce(function(e, t, n) {
                          return (e[t.name] = m[n]), e;
                        }, {})
                      };
                }, null);
              }
              i.a.Component;
              function te(e) {
                return "/" === e.charAt(0) ? e : "/" + e;
              }
              function ne(e, t) {
                if (!e) return t;
                var n = te(e);
                return 0 !== t.pathname.indexOf(n)
                  ? t
                  : T({}, t, { pathname: t.pathname.substr(n.length) });
              }
              function re(e) {
                return "string" == typeof e ? e : F(e);
              }
              function ae(e) {
                return function() {
                  U(!1);
                };
              }
              function ie() {}
              i.a.Component;
              i.a.Component;
              var oe = i.a.useContext;
              function le() {
                return oe(J).location;
              }
              function se(e) {
                return e ? ee(le().pathname, e) : oe(J).match;
              }
              var ce = n(28),
                ue = n.n(ce),
                me = n(1);
              function de(e) {
                const { pathname: t } = le(),
                  [n, r] = Object(a.useState)([]),
                  [o, l] = Object(a.useState)(null);
                function c(e) {
                  return e === n.length - 1;
                }
                function u(e) {
                  return e
                    .substr(e.indexOf("/chart"))
                    .split("/")
                    .filter(e => e.length > 0);
                }
                return (
                  i.a.useEffect(() => {
                    function n(e) {
                      return (
                        (e.url = o ? e.url.replace(":patientUuid", o) : e.url),
                        e
                      );
                    }
                    Object(me.getCurrentPatientUuid)().subscribe(a => {
                      l(a);
                      const i = [n(e.rootUrl)],
                        o = u(t);
                      e.routes.forEach(e => {
                        const t = u(e.url);
                        if (
                          ((r = o),
                          t.every(e => !!e.startsWith(":") || r.includes(e)))
                        ) {
                          const t = n(e);
                          i.push(t);
                        }
                        var r;
                      }),
                        r(i);
                    });
                  }, [t, o, e.rootUrl, e.routes]),
                  i.a.createElement(
                    "div",
                    { className: ue.a.wrapper },
                    n &&
                      n.map((e, t) =>
                        i.a.createElement(
                          "li",
                          { className: ue.a.route, key: t },
                          i.a.createElement(
                            s.Link,
                            {
                              to: e.url,
                              className: ""
                                .concat(ue.a.breadcrumb, " ")
                                .concat(c(t) ? ue.a.active : ue.a.inactive)
                            },
                            e.name
                          ),
                          !c(t) &&
                            i.a.createElement(
                              "div",
                              null,
                              i.a.createElement(
                                "svg",
                                {
                                  className: "omrs-icon",
                                  fill: "var(--omrs-color-ink-medium-contrast)"
                                },
                                i.a.createElement("use", {
                                  xlinkHref: "#omrs-icon-chevron-right"
                                })
                              )
                            )
                        )
                      )
                  )
                );
              }
              /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var _e = function(
                e,
                t
              ) {
                return (_e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function(e, t) {
                      e.__proto__ = t;
                    }) ||
                  function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                  })(e, t);
              };
              function pe(e, t) {
                function n() {
                  this.constructor = e;
                }
                _e(e, t),
                  (e.prototype =
                    null === t
                      ? Object.create(t)
                      : ((n.prototype = t.prototype), new n()));
              }
              function fe(e) {
                return "function" == typeof e;
              }
              var he = !1,
                ge = {
                  Promise: void 0,
                  set useDeprecatedSynchronousErrorHandling(e) {
                    e && new Error().stack;
                    he = e;
                  },
                  get useDeprecatedSynchronousErrorHandling() {
                    return he;
                  }
                };
              function ve(e) {
                setTimeout(function() {
                  throw e;
                }, 0);
              }
              var ye = {
                  closed: !0,
                  next: function(e) {},
                  error: function(e) {
                    if (ge.useDeprecatedSynchronousErrorHandling) throw e;
                    ve(e);
                  },
                  complete: function() {}
                },
                be = (function() {
                  return (
                    Array.isArray ||
                    function(e) {
                      return e && "number" == typeof e.length;
                    }
                  );
                })();
              var Ae = (function() {
                  function e(e) {
                    return (
                      Error.call(this),
                      (this.message = e
                        ? e.length +
                          " errors occurred during unsubscription:\n" +
                          e
                            .map(function(e, t) {
                              return t + 1 + ") " + e.toString();
                            })
                            .join("\n  ")
                        : ""),
                      (this.name = "UnsubscriptionError"),
                      (this.errors = e),
                      this
                    );
                  }
                  return (e.prototype = Object.create(Error.prototype)), e;
                })(),
                we = (function() {
                  function e(e) {
                    (this.closed = !1),
                      (this._parentOrParents = null),
                      (this._subscriptions = null),
                      e && (this._unsubscribe = e);
                  }
                  return (
                    (e.prototype.unsubscribe = function() {
                      var t;
                      if (!this.closed) {
                        var n,
                          r = this._parentOrParents,
                          a = this._unsubscribe,
                          i = this._subscriptions;
                        if (
                          ((this.closed = !0),
                          (this._parentOrParents = null),
                          (this._subscriptions = null),
                          r instanceof e)
                        )
                          r.remove(this);
                        else if (null !== r)
                          for (var o = 0; o < r.length; ++o) {
                            r[o].remove(this);
                          }
                        if (fe(a))
                          try {
                            a.call(this);
                          } catch (e) {
                            t = e instanceof Ae ? Ee(e.errors) : [e];
                          }
                        if (be(i)) {
                          o = -1;
                          for (var l = i.length; ++o < l; ) {
                            var s = i[o];
                            if (null !== (n = s) && "object" == typeof n)
                              try {
                                s.unsubscribe();
                              } catch (e) {
                                (t = t || []),
                                  e instanceof Ae
                                    ? (t = t.concat(Ee(e.errors)))
                                    : t.push(e);
                              }
                          }
                        }
                        if (t) throw new Ae(t);
                      }
                    }),
                    (e.prototype.add = function(t) {
                      var n = t;
                      if (!t) return e.EMPTY;
                      switch (typeof t) {
                        case "function":
                          n = new e(t);
                        case "object":
                          if (
                            n === this ||
                            n.closed ||
                            "function" != typeof n.unsubscribe
                          )
                            return n;
                          if (this.closed) return n.unsubscribe(), n;
                          if (!(n instanceof e)) {
                            var r = n;
                            (n = new e())._subscriptions = [r];
                          }
                          break;
                        default:
                          throw new Error(
                            "unrecognized teardown " +
                              t +
                              " added to Subscription."
                          );
                      }
                      var a = n._parentOrParents;
                      if (null === a) n._parentOrParents = this;
                      else if (a instanceof e) {
                        if (a === this) return n;
                        n._parentOrParents = [a, this];
                      } else {
                        if (-1 !== a.indexOf(this)) return n;
                        a.push(this);
                      }
                      var i = this._subscriptions;
                      return (
                        null === i ? (this._subscriptions = [n]) : i.push(n), n
                      );
                    }),
                    (e.prototype.remove = function(e) {
                      var t = this._subscriptions;
                      if (t) {
                        var n = t.indexOf(e);
                        -1 !== n && t.splice(n, 1);
                      }
                    }),
                    (e.EMPTY = (function(e) {
                      return (e.closed = !0), e;
                    })(new e())),
                    e
                  );
                })();
              function Ee(e) {
                return e.reduce(function(e, t) {
                  return e.concat(t instanceof Ae ? t.errors : t);
                }, []);
              }
              var xe = (function() {
                  return "function" == typeof Symbol
                    ? Symbol("rxSubscriber")
                    : "@@rxSubscriber_" + Math.random();
                })(),
                Se = (function(e) {
                  function t(n, r, a) {
                    var i = e.call(this) || this;
                    switch (
                      ((i.syncErrorValue = null),
                      (i.syncErrorThrown = !1),
                      (i.syncErrorThrowable = !1),
                      (i.isStopped = !1),
                      arguments.length)
                    ) {
                      case 0:
                        i.destination = ye;
                        break;
                      case 1:
                        if (!n) {
                          i.destination = ye;
                          break;
                        }
                        if ("object" == typeof n) {
                          n instanceof t
                            ? ((i.syncErrorThrowable = n.syncErrorThrowable),
                              (i.destination = n),
                              n.add(i))
                            : ((i.syncErrorThrowable = !0),
                              (i.destination = new Ne(i, n)));
                          break;
                        }
                      default:
                        (i.syncErrorThrowable = !0),
                          (i.destination = new Ne(i, n, r, a));
                    }
                    return i;
                  }
                  return (
                    pe(t, e),
                    (t.prototype[xe] = function() {
                      return this;
                    }),
                    (t.create = function(e, n, r) {
                      var a = new t(e, n, r);
                      return (a.syncErrorThrowable = !1), a;
                    }),
                    (t.prototype.next = function(e) {
                      this.isStopped || this._next(e);
                    }),
                    (t.prototype.error = function(e) {
                      this.isStopped || ((this.isStopped = !0), this._error(e));
                    }),
                    (t.prototype.complete = function() {
                      this.isStopped ||
                        ((this.isStopped = !0), this._complete());
                    }),
                    (t.prototype.unsubscribe = function() {
                      this.closed ||
                        ((this.isStopped = !0),
                        e.prototype.unsubscribe.call(this));
                    }),
                    (t.prototype._next = function(e) {
                      this.destination.next(e);
                    }),
                    (t.prototype._error = function(e) {
                      this.destination.error(e), this.unsubscribe();
                    }),
                    (t.prototype._complete = function() {
                      this.destination.complete(), this.unsubscribe();
                    }),
                    (t.prototype._unsubscribeAndRecycle = function() {
                      var e = this._parentOrParents;
                      return (
                        (this._parentOrParents = null),
                        this.unsubscribe(),
                        (this.closed = !1),
                        (this.isStopped = !1),
                        (this._parentOrParents = e),
                        this
                      );
                    }),
                    t
                  );
                })(we),
                Ne = (function(e) {
                  function t(t, n, r, a) {
                    var i,
                      o = e.call(this) || this;
                    o._parentSubscriber = t;
                    var l = o;
                    return (
                      fe(n)
                        ? (i = n)
                        : n &&
                          ((i = n.next),
                          (r = n.error),
                          (a = n.complete),
                          n !== ye &&
                            (fe((l = Object.create(n)).unsubscribe) &&
                              o.add(l.unsubscribe.bind(l)),
                            (l.unsubscribe = o.unsubscribe.bind(o)))),
                      (o._context = l),
                      (o._next = i),
                      (o._error = r),
                      (o._complete = a),
                      o
                    );
                  }
                  return (
                    pe(t, e),
                    (t.prototype.next = function(e) {
                      if (!this.isStopped && this._next) {
                        var t = this._parentSubscriber;
                        ge.useDeprecatedSynchronousErrorHandling &&
                        t.syncErrorThrowable
                          ? this.__tryOrSetError(t, this._next, e) &&
                            this.unsubscribe()
                          : this.__tryOrUnsub(this._next, e);
                      }
                    }),
                    (t.prototype.error = function(e) {
                      if (!this.isStopped) {
                        var t = this._parentSubscriber,
                          n = ge.useDeprecatedSynchronousErrorHandling;
                        if (this._error)
                          n && t.syncErrorThrowable
                            ? (this.__tryOrSetError(t, this._error, e),
                              this.unsubscribe())
                            : (this.__tryOrUnsub(this._error, e),
                              this.unsubscribe());
                        else if (t.syncErrorThrowable)
                          n
                            ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0))
                            : ve(e),
                            this.unsubscribe();
                        else {
                          if ((this.unsubscribe(), n)) throw e;
                          ve(e);
                        }
                      }
                    }),
                    (t.prototype.complete = function() {
                      var e = this;
                      if (!this.isStopped) {
                        var t = this._parentSubscriber;
                        if (this._complete) {
                          var n = function() {
                            return e._complete.call(e._context);
                          };
                          ge.useDeprecatedSynchronousErrorHandling &&
                          t.syncErrorThrowable
                            ? (this.__tryOrSetError(t, n), this.unsubscribe())
                            : (this.__tryOrUnsub(n), this.unsubscribe());
                        } else this.unsubscribe();
                      }
                    }),
                    (t.prototype.__tryOrUnsub = function(e, t) {
                      try {
                        e.call(this._context, t);
                      } catch (e) {
                        if (
                          (this.unsubscribe(),
                          ge.useDeprecatedSynchronousErrorHandling)
                        )
                          throw e;
                        ve(e);
                      }
                    }),
                    (t.prototype.__tryOrSetError = function(e, t, n) {
                      if (!ge.useDeprecatedSynchronousErrorHandling)
                        throw new Error("bad call");
                      try {
                        t.call(this._context, n);
                      } catch (t) {
                        return ge.useDeprecatedSynchronousErrorHandling
                          ? ((e.syncErrorValue = t),
                            (e.syncErrorThrown = !0),
                            !0)
                          : (ve(t), !0);
                      }
                      return !1;
                    }),
                    (t.prototype._unsubscribe = function() {
                      var e = this._parentSubscriber;
                      (this._context = null),
                        (this._parentSubscriber = null),
                        e.unsubscribe();
                    }),
                    t
                  );
                })(Se);
              function ke(e, t) {
                return function(n) {
                  if ("function" != typeof e)
                    throw new TypeError(
                      "argument is not a function. Are you looking for `mapTo()`?"
                    );
                  return n.lift(new Oe(e, t));
                };
              }
              var Oe = (function() {
                  function e(e, t) {
                    (this.project = e), (this.thisArg = t);
                  }
                  return (
                    (e.prototype.call = function(e, t) {
                      return t.subscribe(new Ce(e, this.project, this.thisArg));
                    }),
                    e
                  );
                })(),
                Ce = (function(e) {
                  function t(t, n, r) {
                    var a = e.call(this, t) || this;
                    return (
                      (a.project = n), (a.count = 0), (a.thisArg = r || a), a
                    );
                  }
                  return (
                    pe(t, e),
                    (t.prototype._next = function(e) {
                      var t;
                      try {
                        t = this.project.call(this.thisArg, e, this.count++);
                      } catch (e) {
                        return void this.destination.error(e);
                      }
                      this.destination.next(t);
                    }),
                    t
                  );
                })(Se);
              function je(e, t) {
                return Object(
                  me.openmrsFetch
                )("/ws/fhir/AllergyIntolerance?patient.identifier=".concat(e), {
                  signal: t.signal
                });
              }
              function Te() {
                return Object(me.openmrsObservableFetch)(
                  "/ws/rest/v1/concept/".concat(
                    "162555AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                    "?v=full"
                  )
                ).pipe(ke(({ data: e }) => e.setMembers));
              }
              function De(e, t, n) {
                return Object(me.openmrsFetch)(
                  "/ws/rest/v1/patient/"
                    .concat(e, "/allergy/")
                    .concat(t.allergyUuid, "?v=full"),
                  { signal: n.signal }
                );
              }
              var Me = n(51),
                Ie = n.n(Me),
                Ue = n(4);
              function Fe(e) {
                const [t, n] = i.a.useState(null),
                  [r, a, o, l] = Object(me.useCurrentPatient)();
                return (
                  i.a.useEffect(() => {
                    if (a) {
                      const e = new AbortController();
                      return (
                        je(a.identifier[0].value, e)
                          .then(e => n(e.data))
                          .catch(Object(Ue.createErrorHandler)()),
                        () => e.abort()
                      );
                    }
                  }, [a]),
                  i.a.createElement(
                    u,
                    {
                      name: "Allergies",
                      styles: { margin: "1.25rem, 1.5rem" },
                      link: "/patient/".concat(o, "/chart/allergies")
                    },
                    t &&
                      t.total > 0 &&
                      t.entry.map(e =>
                        i.a.createElement(
                          _,
                          {
                            key: e.resource.id,
                            linkTo: "/patient/".concat(o, "/chart/allergies")
                          },
                          i.a.createElement(b, {
                            label: e.resource.code.text,
                            labelClassName: "omrs-bold",
                            labelStyles: { flex: "1" },
                            value: ""
                              .concat(
                                e.resource.reaction[0].manifestation[0].text,
                                " ("
                              )
                              .concat(
                                "?" === e.resource.criticality
                                  ? "—"
                                  : e.resource.criticality,
                                ")"
                              ),
                            valueStyles: { flex: "1", paddingLeft: "1rem" },
                            valueClassName: Ie.a.allergyReaction
                          })
                        )
                      )
                  )
                );
              }
              var Pe = n(18),
                Re = n.n(Pe),
                He = n(3),
                We = n.n(He),
                Ye = n(5),
                Le = n.n(Ye);
              function Be(e) {
                const [t, n] = i.a.useState(null),
                  [r, a] = i.a.useState(null),
                  [o, l] = i.a.useState(null),
                  [c, m] = i.a.useState(null),
                  [d, _] = i.a.useState(!0),
                  [p, f] = i.a.useState(!0),
                  [h, g] = i.a.useState([]),
                  [v, y] = i.a.useState(""),
                  [b, A] = i.a.useState(null),
                  [w, E] = i.a.useState(null),
                  [x, S] = i.a.useState(null),
                  [N, k] = i.a.useState(null),
                  [O, C] = i.a.useState(null),
                  [j, T, D, M] = Object(me.useCurrentPatient)(),
                  I = i.a.useRef(null),
                  [U, F] = i.a.useState(!0);
                let P = Object(s.useRouteMatch)();
                const R = e => {
                  l(null), a(W(e.target.value)), A(e.target.value);
                };
                let H = Object(s.useHistory)();
                function W(e) {
                  switch (e) {
                    case "162552AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA":
                      return "DRUG";
                    case "162553AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA":
                      return "FOOD";
                    case "162554AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA":
                      return "ENVIROMENTAL";
                  }
                }
                i.a.useEffect(() => {
                  _(!(v && r && t && h && x));
                }, [v, r, t, h, x]),
                  i.a.useEffect(() => {
                    O && x && N && h.length > 0 ? f(!1) : f(!0);
                  }, [O, x, N, h]),
                  i.a.useEffect(() => {
                    w &&
                      (k(w.comment),
                      S(w.severity.uuid),
                      C(w.auditInfo.dateCreated),
                      g(w.reactions.map(e => ({ uuid: e.reaction.uuid }))));
                  }, [w]),
                  i.a.useEffect(() => {
                    const e = new AbortController();
                    D &&
                      P.params &&
                      De(D, P.params, e).then(
                        e => E(e.data),
                        Ue.createErrorHandler
                      ),
                      Te().subscribe(e => m(e), Ue.createErrorHandler);
                  }, [D, P.params]),
                  i.a.useEffect(() => {
                    if (b) {
                      const t = ((e = b),
                        Object(me.openmrsObservableFetch)(
                          "/ws/rest/v1/concept/".concat(e, "?v=full")
                        ).pipe(ke(({ data: e }) => e.setMembers))).subscribe(
                          e => l(e),
                          Ue.createErrorHandler
                        ),
                        n = Te().subscribe(e => m(e), Ue.createErrorHandler);
                      return () => {
                        t.unsubscribe(), n.unsubscribe();
                      };
                    }
                    var e;
                  }, [b]);
                const Y = e => {
                    1 == e.target.checked
                      ? g([...h, { uuid: e.target.value }])
                      : h.splice(
                          h.findIndex(t => t.uuid == e.target.value),
                          1
                        );
                  },
                  L = t => {
                    t.preventDefault();
                    const n = {
                        allergenType: w.allergen.allergenType,
                        codedAllergenUuid: w.allergen.codedAllergen.uuid,
                        severityUuid: x,
                        comment: N,
                        reactionsUuid: h
                      },
                      r = new AbortController();
                    return (
                      (function(e, t, n, r) {
                        const a = e.reactionsUuid.map(e => ({
                          reaction: { uuid: e.uuid }
                        }));
                        return Object(
                          me.openmrsFetch
                        )(
                          "/ws/rest/v1/patient/"
                            .concat(t, "/allergy/")
                            .concat(n.allergyUuid),
                          {
                            headers: { "Content-Type": "application/json" },
                            method: "POST",
                            body: {
                              allergen: {
                                allergenType: e.allergenType,
                                codedAllergen: { uuid: e.codedAllergenUuid }
                              },
                              severity: { uuid: e.severityUuid },
                              comment: e.comment,
                              reactions: a
                            },
                            signal: r.signal
                          }
                        );
                      })(n, D, P.params, r).then(t => {
                        200 == t.status && e.entrySubmitted();
                      }, Ue.createErrorHandler),
                      () => r.abort()
                    );
                  },
                  B = n => {
                    n.preventDefault();
                    const a = {
                        allergenType: r,
                        codedAllergenUuid: t,
                        severityUuid: x,
                        comment: v,
                        reactionsUuid: h
                      },
                      i = new AbortController();
                    return (
                      (function(e, t, n) {
                        const r = e.reactionsUuid.map(e => ({
                          reaction: { uuid: e.uuid }
                        }));
                        return Object(
                          me.openmrsFetch
                        )("/ws/rest/v1/patient/".concat(t, "/allergy"), {
                          headers: { "Content-Type": "application/json" },
                          method: "POST",
                          body: {
                            allergen: {
                              allergenType: e.allergenType,
                              codedAllergen: { uuid: e.codedAllergenUuid }
                            },
                            severity: { uuid: e.severityUuid },
                            comment: e.comment,
                            reactions: r
                          },
                          signal: n.signal
                        });
                      })(a, D, i)
                        .then(t => {
                          201 == t.status && e.entrySubmitted();
                        })
                        .catch(Object(Ue.createErrorHandler)()),
                      () => i.abort()
                    );
                  },
                  z = () => {
                    I.current.reset(), e.entryCancelled();
                  };
                const $ = () => {
                    const e = new AbortController();
                    (function(e, t, n) {
                      return Object(
                        me.openmrsFetch
                      )(
                        "/ws/rest/v1/patient/"
                          .concat(e, "/allergy/")
                          .concat(t.allergyUuid),
                        { method: "DELETE", signal: n.signal }
                      );
                    })(D, P.params, e).then(e => {
                      204 == e.status &&
                        H.push("/patient/".concat(D, "/chart/allergies"));
                    });
                  },
                  V = () => {
                    I.current.reset();
                  };
                return (
                  i.a.useEffect(() => {
                    P.params.allergyUuid ? F(!0) : F(!1);
                  }, [P.params]),
                  i.a.createElement(
                    "div",
                    { className: Le.a.allergyForm },
                    U
                      ? i.a.createElement(
                          u,
                          {
                            name: "Edit Allergy",
                            styles: {
                              width: "100%",
                              background: "var(--omrs-color-bg-medium-contrast)"
                            }
                          },
                          w &&
                            c &&
                            i.a.createElement(
                              "form",
                              { ref: I, onSubmit: L },
                              i.a.createElement(
                                "div",
                                null,
                                i.a.createElement(
                                  "div",
                                  {
                                    className: "".concat(
                                      Le.a.allergyEditHeader,
                                      " omrs-padding-bottom-28"
                                    )
                                  },
                                  i.a.createElement("h4", null, "Allergen"),
                                  i.a.createElement(
                                    "h3",
                                    null,
                                    w.allergen.codedAllergen.display,
                                    " ",
                                    i.a.createElement(
                                      "span",
                                      null,
                                      "(",
                                      w.allergen.allergenType.toLowerCase(),
                                      ")"
                                    )
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  null,
                                  i.a.createElement(
                                    "h4",
                                    {
                                      className: "".concat(
                                        Le.a.allergyHeader,
                                        " omrs-bold"
                                      )
                                    },
                                    "Reactions"
                                  ),
                                  i.a.createElement(
                                    "h4",
                                    {
                                      className: "".concat(
                                        Le.a.allergyHeader,
                                        " omrs-type-body-regular"
                                      )
                                    },
                                    "Select all that apply"
                                  ),
                                  i.a.createElement(
                                    "div",
                                    { className: Le.a.container },
                                    c.map((e, t) => {
                                      return i.a.createElement(
                                        "div",
                                        {
                                          className: "omrs-checkbox ".concat(
                                            Le.a.inputMargin
                                          ),
                                          key: e.name.uuid
                                        },
                                        i.a.createElement(
                                          "label",
                                          null,
                                          i.a.createElement("input", {
                                            type: "checkbox",
                                            name: "reactionsUuid",
                                            defaultValue: e.uuid,
                                            defaultChecked:
                                              ((n = e.uuid),
                                              w.reactions.some(
                                                e => e.reaction.uuid === n
                                              )),
                                            onChange: Y
                                          }),
                                          i.a.createElement(
                                            "span",
                                            null,
                                            e.name.display
                                          )
                                        )
                                      );
                                      var n;
                                    })
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  null,
                                  i.a.createElement(
                                    "h4",
                                    {
                                      className: "".concat(
                                        Le.a.allergyHeader,
                                        " omrs-bold"
                                      )
                                    },
                                    "Severity of worst reaction"
                                  ),
                                  i.a.createElement(
                                    "div",
                                    { className: "".concat(Le.a.container) },
                                    i.a.createElement(
                                      "div",
                                      {
                                        className: "omrs-radio-button ".concat(
                                          Le.a.inputMargin
                                        )
                                      },
                                      i.a.createElement(
                                        "label",
                                        null,
                                        i.a.createElement("input", {
                                          type: "radio",
                                          name: "reactionSeverity",
                                          defaultValue:
                                            "1498AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                          defaultChecked:
                                            w.severity.uuid ===
                                            {
                                              MILD_REACTION_SEVERITY_CONCEPT:
                                                "1498AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
                                            },
                                          onChange: e => S(e.target.value)
                                        }),
                                        i.a.createElement("span", null, "Mild")
                                      )
                                    ),
                                    i.a.createElement(
                                      "div",
                                      {
                                        className: "omrs-radio-button ".concat(
                                          Le.a.inputMargin
                                        )
                                      },
                                      i.a.createElement(
                                        "label",
                                        null,
                                        i.a.createElement("input", {
                                          type: "radio",
                                          name: "reactionSeverity",
                                          defaultValue:
                                            "1499AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                          defaultChecked:
                                            "1499AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" ===
                                            w.severity.uuid,
                                          onChange: e => S(e.target.value)
                                        }),
                                        i.a.createElement(
                                          "span",
                                          null,
                                          "Moderate"
                                        )
                                      )
                                    ),
                                    i.a.createElement(
                                      "div",
                                      {
                                        className: "omrs-radio-button ".concat(
                                          Le.a.inputMargin
                                        )
                                      },
                                      i.a.createElement(
                                        "label",
                                        null,
                                        i.a.createElement("input", {
                                          type: "radio",
                                          name: "reactionSeverity",
                                          defaultValue:
                                            "1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                          defaultChecked:
                                            "1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" ===
                                            w.severity.uuid,
                                          onChange: e => S(e.target.value)
                                        }),
                                        i.a.createElement(
                                          "span",
                                          null,
                                          "Severe"
                                        )
                                      )
                                    )
                                  ),
                                  i.a.createElement(
                                    "h4",
                                    {
                                      className: "".concat(
                                        Le.a.allergyHeader,
                                        " omrs-bold"
                                      )
                                    },
                                    "Date of first onset"
                                  ),
                                  i.a.createElement(
                                    "div",
                                    { className: "".concat(Le.a.container) },
                                    i.a.createElement(
                                      "div",
                                      { className: "omrs-datepicker" },
                                      i.a.createElement("input", {
                                        type: "date",
                                        name: "firstDateOfOnset",
                                        defaultValue: We()(
                                          w.auditInfo.dateCreated
                                        ).format("YYYY-MM-DD"),
                                        required: !0,
                                        onChange: e => C(e.target.value)
                                      }),
                                      i.a.createElement(
                                        "svg",
                                        { className: "omrs-icon", role: "img" },
                                        i.a.createElement("use", {
                                          xlinkHref: "#omrs-icon-calendar"
                                        })
                                      )
                                    )
                                  ),
                                  i.a.createElement(
                                    "h4",
                                    {
                                      className: "".concat(
                                        Le.a.allergyHeader,
                                        " omrs-bold"
                                      )
                                    },
                                    "Comments"
                                  ),
                                  i.a.createElement(
                                    "div",
                                    { className: Le.a.allergyCommentContainer },
                                    i.a.createElement("textarea", {
                                      className: "".concat(
                                        Le.a.allergyCommentTextArea,
                                        " omrs-type-body-regular"
                                      ),
                                      required: !0,
                                      name: "comment",
                                      rows: 6,
                                      defaultValue: w.comment,
                                      onChange: e => k(e.target.value)
                                    })
                                  )
                                )
                              ),
                              i.a.createElement(
                                "div",
                                {
                                  className: p
                                    ? Le.a.buttonStyles
                                    : ""
                                        .concat(Le.a.buttonStyles, " ")
                                        .concat(Le.a.buttonStylesBorder)
                                },
                                i.a.createElement(
                                  "button",
                                  {
                                    type: "button",
                                    className:
                                      "omrs-btn omrs-outlined-neutral omrs-rounded",
                                    style: { width: "20%" },
                                    onClick: $
                                  },
                                  "Delete"
                                ),
                                i.a.createElement(
                                  "button",
                                  {
                                    type: "button",
                                    className:
                                      "omrs-btn omrs-outlined-neutral omrs-rounded",
                                    style: { width: "30%" },
                                    onClick: V
                                  },
                                  "Cancel"
                                ),
                                i.a.createElement(
                                  "button",
                                  {
                                    type: "submit",
                                    className: p
                                      ? "omrs-btn omrs-outlined omrs-rounded"
                                      : "omrs-btn omrs-filled-action omrs-rounded",
                                    style: { width: "50%" },
                                    disabled: p
                                  },
                                  "Sign & Save"
                                )
                              )
                            )
                        )
                      : i.a.createElement(
                          u,
                          {
                            name: "Add Allergy",
                            styles: {
                              width: "100%",
                              background: "var(--omrs-color-bg-medium-contrast)"
                            }
                          },
                          i.a.createElement(
                            "form",
                            {
                              onSubmit: B,
                              onChange: () => e.entryStarted(),
                              ref: I
                            },
                            i.a.createElement(
                              "h4",
                              {
                                className: "".concat(
                                  Le.a.allergyHeader,
                                  " omrs-bold"
                                )
                              },
                              "Category of reaction"
                            ),
                            i.a.createElement(
                              "div",
                              { className: "".concat(Le.a.container) },
                              i.a.createElement(
                                "div",
                                {
                                  className: "omrs-radio-button ".concat(
                                    Le.a.inputMargin
                                  )
                                },
                                i.a.createElement(
                                  "label",
                                  null,
                                  i.a.createElement("input", {
                                    type: "radio",
                                    name: "allergenType",
                                    value:
                                      "162552AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    onChange: R
                                  }),
                                  i.a.createElement(
                                    "span",
                                    { id: "DRUG" },
                                    "Drug"
                                  )
                                )
                              ),
                              i.a.createElement(
                                "div",
                                {
                                  className: "omrs-radio-button ".concat(
                                    Le.a.inputMargin
                                  )
                                },
                                i.a.createElement(
                                  "label",
                                  null,
                                  i.a.createElement("input", {
                                    type: "radio",
                                    name: "allergenType",
                                    value:
                                      "162553AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    onChange: R
                                  }),
                                  i.a.createElement(
                                    "span",
                                    { id: "FOOD" },
                                    "Food"
                                  )
                                )
                              ),
                              i.a.createElement(
                                "div",
                                {
                                  className: "omrs-radio-button ".concat(
                                    Le.a.inputMargin
                                  )
                                },
                                i.a.createElement(
                                  "label",
                                  null,
                                  i.a.createElement("input", {
                                    type: "radio",
                                    name: "allergenType",
                                    value:
                                      "162554AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                    onChange: R
                                  }),
                                  i.a.createElement(
                                    "span",
                                    { id: "ENVIROMENTAL" },
                                    "Enviromental"
                                  )
                                )
                              ),
                              i.a.createElement(
                                "div",
                                {
                                  className: "omrs-radio-button ".concat(
                                    Le.a.inputMargin
                                  )
                                },
                                i.a.createElement(
                                  "label",
                                  null,
                                  i.a.createElement("input", {
                                    type: "radio",
                                    name: "allergenType",
                                    value: "noAllergy",
                                    onChange: R
                                  }),
                                  i.a.createElement(
                                    "span",
                                    { id: "NOALLERGIES" },
                                    "Patient has no allergies"
                                  )
                                )
                              )
                            ),
                            o &&
                              i.a.createElement(
                                "div",
                                null,
                                i.a.createElement(
                                  "h4",
                                  {
                                    className: "".concat(
                                      Le.a.allergyHeader,
                                      " omrs-bold"
                                    )
                                  },
                                  W(b)
                                    .charAt(0)
                                    .toUpperCase() +
                                    W(b)
                                      .slice(1)
                                      .toLowerCase(),
                                  " ",
                                  "allergen"
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: Le.a.container },
                                  o.map(e =>
                                    i.a.createElement(
                                      "div",
                                      {
                                        className: "omrs-radio-button ".concat(
                                          Le.a.inputMargin
                                        ),
                                        key: e.name.uuid
                                      },
                                      i.a.createElement(
                                        "label",
                                        null,
                                        i.a.createElement("input", {
                                          type: "radio",
                                          name: "codedAllergenUuid",
                                          value: e.uuid,
                                          onChange: e => n(e.target.value)
                                        }),
                                        i.a.createElement(
                                          "span",
                                          null,
                                          e.name.display
                                        )
                                      )
                                    )
                                  )
                                )
                              ),
                            o &&
                              c &&
                              i.a.createElement(
                                "div",
                                null,
                                i.a.createElement(
                                  "h4",
                                  {
                                    className: "".concat(
                                      Le.a.allergyHeader,
                                      " omrs-bold"
                                    )
                                  },
                                  "Reactions"
                                ),
                                i.a.createElement(
                                  "h4",
                                  {
                                    className: "".concat(
                                      Le.a.allergyHeader,
                                      " omrs-type-body-regular"
                                    )
                                  },
                                  "Select all that apply"
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: Le.a.container },
                                  c.map(e =>
                                    i.a.createElement(
                                      "div",
                                      {
                                        className: "omrs-checkbox ".concat(
                                          Le.a.inputMargin
                                        ),
                                        key: e.name.uuid
                                      },
                                      i.a.createElement(
                                        "label",
                                        null,
                                        i.a.createElement("input", {
                                          type: "checkbox",
                                          name: "reactionsUuid",
                                          value: e.uuid,
                                          onChange: Y
                                        }),
                                        i.a.createElement(
                                          "span",
                                          null,
                                          e.name.display
                                        )
                                      )
                                    )
                                  )
                                )
                              ),
                            o &&
                              i.a.createElement(
                                "div",
                                null,
                                i.a.createElement(
                                  "h4",
                                  {
                                    className: "".concat(
                                      Le.a.allergyHeader,
                                      " omrs-bold"
                                    )
                                  },
                                  "Severity of worst reaction"
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: "".concat(Le.a.container) },
                                  i.a.createElement(
                                    "div",
                                    {
                                      className: "omrs-radio-button ".concat(
                                        Le.a.inputMargin
                                      )
                                    },
                                    i.a.createElement(
                                      "label",
                                      null,
                                      i.a.createElement("input", {
                                        type: "radio",
                                        name: "reactionSeverity",
                                        value:
                                          "1498AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                        onChange: e => S(e.target.value)
                                      }),
                                      i.a.createElement("span", null, "Mild")
                                    )
                                  ),
                                  i.a.createElement(
                                    "div",
                                    {
                                      className: "omrs-radio-button ".concat(
                                        Le.a.inputMargin
                                      )
                                    },
                                    i.a.createElement(
                                      "label",
                                      null,
                                      i.a.createElement("input", {
                                        type: "radio",
                                        name: "reactionSeverity",
                                        value:
                                          "1499AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                        onChange: e => S(e.target.value)
                                      }),
                                      i.a.createElement(
                                        "span",
                                        null,
                                        "Moderate"
                                      )
                                    )
                                  ),
                                  i.a.createElement(
                                    "div",
                                    {
                                      className: "omrs-radio-button ".concat(
                                        Le.a.inputMargin
                                      )
                                    },
                                    i.a.createElement(
                                      "label",
                                      null,
                                      i.a.createElement("input", {
                                        type: "radio",
                                        name: "reactionSeverity",
                                        value:
                                          "1500AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                        onChange: e => S(e.target.value)
                                      }),
                                      i.a.createElement("span", null, "Severe")
                                    )
                                  )
                                ),
                                i.a.createElement(
                                  "h4",
                                  {
                                    className: "".concat(
                                      Le.a.allergyHeader,
                                      " omrs-bold"
                                    )
                                  },
                                  "Date of first onset"
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: "".concat(Le.a.container) },
                                  i.a.createElement(
                                    "div",
                                    { className: "omrs-datepicker" },
                                    i.a.createElement("input", {
                                      type: "date",
                                      name: "firstDateOfOnset",
                                      required: !0
                                    }),
                                    i.a.createElement(
                                      "svg",
                                      { className: "omrs-icon", role: "img" },
                                      i.a.createElement("use", {
                                        xlinkHref: "#omrs-icon-calendar"
                                      })
                                    )
                                  )
                                ),
                                i.a.createElement(
                                  "h4",
                                  {
                                    className: "".concat(
                                      Le.a.allergyHeader,
                                      " omrs-bold"
                                    )
                                  },
                                  "Comments"
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: Le.a.allergyCommentContainer },
                                  i.a.createElement("textarea", {
                                    className: "".concat(
                                      Le.a.allergyCommentTextArea,
                                      " omrs-type-body-regular"
                                    ),
                                    required: !0,
                                    name: "comment",
                                    rows: 6,
                                    onChange: e => y(e.target.value)
                                  })
                                )
                              ),
                            i.a.createElement(
                              "div",
                              {
                                className: d
                                  ? Le.a.buttonStyles
                                  : ""
                                      .concat(Le.a.buttonStyles, " ")
                                      .concat(Le.a.buttonStylesBorder),
                                style: { position: "sticky" }
                              },
                              i.a.createElement(
                                "button",
                                {
                                  type: "button",
                                  className:
                                    "omrs-btn omrs-outlined-neutral omrs-rounded",
                                  onClick: z,
                                  style: { width: "50%" }
                                },
                                "Cancel"
                              ),
                              i.a.createElement(
                                "button",
                                {
                                  type: "submit",
                                  className: d
                                    ? "omrs-btn omrs-outlined omrs-rounded"
                                    : "omrs-btn omrs-filled-action omrs-rounded",
                                  disabled: d,
                                  style: { width: "50%" }
                                },
                                "Sign & Save"
                              )
                            )
                          )
                        )
                  )
                );
              }
              function ze(e) {
                const [t, n] = i.a.useState(null),
                  [r, a, o, l] = Object(me.useCurrentPatient)();
                return (
                  i.a.useEffect(() => {
                    if (!r && a) {
                      const e = new AbortController();
                      return (
                        je(a.identifier[0].value, e)
                          .then(e => n(e.data))
                          .catch(Object(Ue.createErrorHandler)()),
                        () => e.abort()
                      );
                    }
                  }, [r, a]),
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    t &&
                      i.a.createElement(
                        "div",
                        { className: Re.a.allergySummary },
                        t.total > 0
                          ? i.a.createElement(
                              u,
                              {
                                name: "Allergies",
                                styles: { width: "100%" },
                                addComponent: Be
                              },
                              i.a.createElement(
                                "table",
                                { className: Re.a.allergyTable },
                                i.a.createElement(
                                  "thead",
                                  null,
                                  i.a.createElement(
                                    "tr",
                                    null,
                                    i.a.createElement("td", null, "ALLERGEN"),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      i.a.createElement(
                                        "div",
                                        { className: Re.a.centerItems },
                                        "SEVERITY & REACTION",
                                        i.a.createElement(
                                          "svg",
                                          {
                                            className: "omrs-icon",
                                            fill: "rgba(0, 0, 0, 0.54)"
                                          },
                                          i.a.createElement("use", {
                                            xlinkHref:
                                              "#omrs-icon-arrow-downward"
                                          })
                                        )
                                      )
                                    ),
                                    i.a.createElement("td", null, "SINCE"),
                                    i.a.createElement("td", null, "UPDATED")
                                  )
                                ),
                                i.a.createElement(
                                  "tbody",
                                  null,
                                  t &&
                                    t.entry.map(e =>
                                      i.a.createElement(
                                        i.a.Fragment,
                                        { key: e.resource.id },
                                        i.a.createElement(
                                          "tr",
                                          {
                                            className: "".concat(
                                              "high" === e.resource.criticality
                                                ? "".concat(Re.a.high)
                                                : "".concat(Re.a.low)
                                            )
                                          },
                                          i.a.createElement(
                                            "td",
                                            { className: "omrs-bold" },
                                            e.resource.code.text
                                          ),
                                          i.a.createElement(
                                            "td",
                                            null,
                                            i.a.createElement(
                                              "div",
                                              {
                                                className: ""
                                                  .concat(Re.a.centerItems, " ")
                                                  .concat(
                                                    "high" ===
                                                      e.resource.criticality
                                                      ? "omrs-bold"
                                                      : ""
                                                  ),
                                                style: {
                                                  textTransform: "uppercase"
                                                }
                                              },
                                              "high" ===
                                                e.resource.criticality &&
                                                i.a.createElement(
                                                  "svg",
                                                  {
                                                    className: "omrs-icon",
                                                    fontSize: "15px",
                                                    fill: "rgba(181, 7, 6, 1)"
                                                  },
                                                  i.a.createElement("use", {
                                                    xlinkHref:
                                                      "#omrs-icon-important-notification"
                                                  })
                                                ),
                                              e.resource.criticality
                                            )
                                          ),
                                          i.a.createElement(
                                            "td",
                                            null,
                                            We()(
                                              e.resource.extension[0]
                                                .valueDateTime
                                            ).format("MMM-YYYY")
                                          ),
                                          i.a.createElement(
                                            "td",
                                            null,
                                            i.a.createElement(
                                              "div",
                                              {
                                                className: ""
                                                  .concat(Re.a.centerItems, " ")
                                                  .concat(Re.a.alignRight)
                                              },
                                              i.a.createElement(
                                                "span",
                                                null,
                                                We()(t.meta.lastUpdated).format(
                                                  "DD-MMM-YYYY"
                                                )
                                              ),
                                              i.a.createElement(
                                                s.Link,
                                                {
                                                  to: "/patient/"
                                                    .concat(
                                                      o,
                                                      "/chart/allergies/"
                                                    )
                                                    .concat(e.resource.id)
                                                },
                                                i.a.createElement(
                                                  "svg",
                                                  {
                                                    className: "omrs-icon",
                                                    fill: "rgba(0, 0, 0, 0.54)"
                                                  },
                                                  i.a.createElement("use", {
                                                    xlinkHref:
                                                      "#omrs-icon-chevron-right"
                                                  })
                                                )
                                              )
                                            )
                                          )
                                        ),
                                        i.a.createElement(
                                          "tr",
                                          null,
                                          i.a.createElement("td", null),
                                          i.a.createElement(
                                            "td",
                                            { colSpan: 3 },
                                            Object.values(
                                              e.resource.reaction[0].manifestation.map(
                                                e => e.text
                                              )
                                            ).join(", ")
                                          )
                                        ),
                                        i.a.createElement(
                                          "tr",
                                          null,
                                          i.a.createElement("td", null),
                                          i.a.createElement(
                                            "td",
                                            { colSpan: 3 },
                                            i.a.createElement(
                                              "span",
                                              {
                                                className: "".concat(
                                                  Re.a.allergyComment
                                                )
                                              },
                                              i.a.createElement(
                                                "span",
                                                {
                                                  style: {
                                                    whiteSpace: "pre-line"
                                                  }
                                                },
                                                e.resource.note &&
                                                  e.resource.note[0].text
                                              ),
                                              i.a.createElement(
                                                "span",
                                                null,
                                                "more..."
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                )
                              ),
                              i.a.createElement(
                                "div",
                                {
                                  className: "allergyFooter ".concat(
                                    Re.a.allergyFooter
                                  )
                                },
                                i.a.createElement(
                                  "p",
                                  null,
                                  "No more allergies available"
                                )
                              )
                            )
                          : i.a.createElement(
                              u,
                              {
                                name: "Allergies",
                                styles: { width: "100%" },
                                addComponent: Be
                              },
                              i.a.createElement(
                                "div",
                                { className: Re.a.allergyMargin },
                                i.a.createElement(
                                  "p",
                                  { className: "omrs-bold" },
                                  "The patient's allergy history is not documented."
                                ),
                                i.a.createElement(
                                  "p",
                                  { className: "omrs-bold" },
                                  "Please ",
                                  i.a.createElement(
                                    "a",
                                    { href: "/" },
                                    "add allergy history"
                                  ),
                                  "."
                                )
                              )
                            )
                      )
                  )
                );
              }
              Be.defaultProps = {
                entryStarted: () => {},
                entryCancelled: () => {},
                entrySubmitted: () => {}
              };
              var $e = n(14),
                Ve = n.n($e);
              function qe(e) {
                const [t, n] = i.a.useState(null),
                  [r, a, o] = Object(me.useCurrentPatient)();
                let l = Object(s.useRouteMatch)({
                  path:
                    "/patient/:patientUuid/chart/medications/allergies/:allergyUuid"
                });
                return (
                  i.a.useEffect(() => {
                    if (!r && a) {
                      const e = new AbortController();
                      return (
                        De(o, { allergyUuid: l.params.allergyUuid }, e)
                          .then(e => n(e.data))
                          .catch(Object(Ue.createErrorHandler)()),
                        () => e.abort()
                      );
                    }
                  }, [r, a, o, l.params]),
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    t &&
                      i.a.createElement(
                        "div",
                        { className: Ve.a.allergySummary },
                        i.a.createElement(
                          u,
                          {
                            name: "Allergy",
                            styles: { width: "100%" },
                            editBtnUrl: "/patient/"
                              .concat(o, "/chart/allergies/form/")
                              .concat(l.params.allergyUuid)
                          },
                          i.a.createElement(
                            "div",
                            {
                              className: "omrs-type-body-regular "
                                .concat(Ve.a.allergyCard, " ")
                                .concat(
                                  "Severe" === t.severity.display
                                    ? "".concat(Ve.a.highSeverity)
                                    : "".concat(Ve.a.lowSeverity)
                                )
                            },
                            i.a.createElement(
                              "div",
                              {
                                className: "omrs-type-title-3 ".concat(
                                  Ve.a.allergyName
                                )
                              },
                              i.a.createElement(
                                "span",
                                { "data-testid": "allergy-name" },
                                t.display
                              )
                            ),
                            i.a.createElement(
                              "table",
                              { className: Ve.a.allergyTable },
                              i.a.createElement(
                                "thead",
                                { className: "omrs-type-body-regular" },
                                i.a.createElement(
                                  "tr",
                                  null,
                                  i.a.createElement("th", null, "Severity"),
                                  i.a.createElement("th", null, "Reaction"),
                                  i.a.createElement("th", null, "Onset Date")
                                )
                              ),
                              i.a.createElement(
                                "tbody",
                                null,
                                i.a.createElement(
                                  "tr",
                                  null,
                                  i.a.createElement(
                                    "td",
                                    { "data-testid": "severity" },
                                    i.a.createElement(
                                      "div",
                                      {
                                        className: ""
                                          .concat(Ve.a.centerItems, " ")
                                          .concat(
                                            "Severe" === t.severity.display
                                              ? "omrs-bold"
                                              : ""
                                          ),
                                        style: {
                                          textTransform: "uppercase",
                                          letterSpacing: "1px",
                                          lineHeight: "1rem",
                                          fontWeight: 500
                                        }
                                      },
                                      "Severe" === t.severity.display &&
                                        i.a.createElement(
                                          "svg",
                                          {
                                            className: "omrs-icon",
                                            fontSize: "15px",
                                            fill: "var(--omrs-color-danger)"
                                          },
                                          i.a.createElement("use", {
                                            xlinkHref:
                                              "#omrs-icon-important-notification"
                                          })
                                        ),
                                      t.severity.display
                                    )
                                  ),
                                  i.a.createElement(
                                    "td",
                                    { "data-testid": "reaction" },
                                    t.reactions
                                      .map(e => e.reaction.display)
                                      .join(", ")
                                  ),
                                  i.a.createElement(
                                    "td",
                                    { "data-testid": "onset-date" },
                                    "-"
                                  )
                                )
                              )
                            ),
                            t.comment &&
                              i.a.createElement(
                                "table",
                                { className: Ve.a.allergyTable },
                                i.a.createElement(
                                  "thead",
                                  { className: "omrs-type-body-regular" },
                                  i.a.createElement(
                                    "tr",
                                    null,
                                    i.a.createElement("th", null, "Comments")
                                  )
                                ),
                                i.a.createElement(
                                  "tbody",
                                  null,
                                  i.a.createElement(
                                    "tr",
                                    { "data-testid": "comment" },
                                    i.a.createElement("td", null, t.comment)
                                  )
                                )
                              ),
                            i.a.createElement("div", {
                              className: Ve.a.allergyFooter
                            })
                          )
                        )
                      ),
                    t &&
                      i.a.createElement(
                        "div",
                        { className: Ve.a.allergySummary },
                        i.a.createElement(
                          u,
                          {
                            name: "Details",
                            styles: {
                              width: "100%",
                              background: "var(--omrs-color-bg-medium-contrast)"
                            }
                          },
                          i.a.createElement(
                            "div",
                            { className: Ve.a.allergyCard },
                            i.a.createElement(
                              "table",
                              {
                                className: ""
                                  .concat(Ve.a.allergyTable, " ")
                                  .concat(Ve.a.allergyDetails)
                              },
                              i.a.createElement(
                                "thead",
                                { className: "omrs-type-body-regular" },
                                i.a.createElement(
                                  "tr",
                                  null,
                                  i.a.createElement("th", null, "Last updated"),
                                  i.a.createElement(
                                    "th",
                                    null,
                                    "Last updated by"
                                  ),
                                  i.a.createElement(
                                    "th",
                                    null,
                                    "Last updated location"
                                  )
                                )
                              ),
                              i.a.createElement(
                                "tbody",
                                null,
                                i.a.createElement(
                                  "tr",
                                  null,
                                  i.a.createElement(
                                    "td",
                                    { "data-testid": "last-updated" },
                                    t.auditInfo.dateChanged
                                      ? We()(t.auditInfo.dateChanged).format(
                                          "DD-MMM-YYYY"
                                        )
                                      : "-"
                                  ),
                                  i.a.createElement(
                                    "td",
                                    { "data-testid": "updated-by" },
                                    t.auditInfo.creator.display
                                  ),
                                  i.a.createElement(
                                    "td",
                                    { "data-testid": "update-location" },
                                    "-"
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                  )
                );
              }
              var Ke = n(22),
                Ge = n.n(Ke);
              function Je() {
                const [e, t] = i.a.useState(null),
                  [n, r, a, o] = Object(me.useCurrentPatient)(),
                  l = We()().format();
                return (
                  i.a.useEffect(() => {
                    const e = new AbortController();
                    a &&
                      (function(e, t, n) {
                        return Object(
                          me.openmrsFetch
                        )("/ws/rest/v1/appointments/search", {
                          method: "POST",
                          signal: n.signal,
                          headers: { "Content-Type": "application/json" },
                          body: { patientUuid: e, startDate: t }
                        });
                      })(a, l, e).then(e => t(e.data));
                  }, [a, l]),
                  i.a.createElement(
                    u,
                    {
                      name: "Appointments",
                      styles: { margin: "1.25rem, 1.5rem", width: "100%" }
                    },
                    i.a.createElement(
                      "table",
                      { className: Ge.a.tableAppointments },
                      i.a.createElement(
                        "thead",
                        null,
                        i.a.createElement(
                          "tr",
                          { className: Ge.a.tableAppointmentsRow },
                          i.a.createElement(
                            "th",
                            {
                              className: ""
                                .concat(Ge.a.tableAppointmentsHeader, " ")
                                .concat(Ge.a.tableDates)
                            },
                            "Date"
                          ),
                          i.a.createElement(
                            "th",
                            { className: Ge.a.tableAppointmentsHeader },
                            "Service Name, Status"
                          ),
                          i.a.createElement("th", null)
                        )
                      ),
                      i.a.createElement(
                        "tbody",
                        null,
                        e &&
                          e
                            .slice(0, 5)
                            .map(e =>
                              i.a.createElement(
                                "tr",
                                {
                                  key: e.uuid,
                                  className: Ge.a.tableAppointmentsRow
                                },
                                i.a.createElement(
                                  "td",
                                  { "test-id": "startDate" },
                                  We()(e.startDateTime).format("YY:MM:DD")
                                ),
                                i.a.createElement(
                                  "td",
                                  null,
                                  e.service.name,
                                  i.a.createElement(
                                    "div",
                                    { className: Ge.a.status },
                                    e.status
                                  )
                                ),
                                i.a.createElement(
                                  "td",
                                  {
                                    className: Ge.a.tdLowerSvg,
                                    style: { textAlign: "end" }
                                  },
                                  i.a.createElement(
                                    "svg",
                                    {
                                      className: "omrs-icon",
                                      fill: "var(--omrs-color-ink-low-contrast)"
                                    },
                                    i.a.createElement("use", {
                                      xlinkHref: "#omrs-icon-chevron-right"
                                    })
                                  )
                                )
                              )
                            )
                      )
                    ),
                    i.a.createElement(h, {
                      linkTo: "/patient/".concat(a, "/chart/appointments")
                    })
                  )
                );
              }
              var Ze = n(11),
                Qe = n.n(Ze);
              function Xe(e) {
                const t = new Date(),
                  n = new Date(e),
                  r = t.getUTCMonth() - n.getUTCMonth(),
                  a = t.getUTCDate() - n.getUTCDate();
                let i = t.getUTCFullYear() - n.getUTCFullYear();
                (r < 0 || (0 === r && a < 0)) && i--;
                let o = r >= 0 ? r : r + 12;
                a < 0 && o--;
                const l = o > 0 ? "".concat(o, " mo") : "";
                let s = et(t) - et(n);
                s < 0 && (s += 365);
                const c = Math.floor(s / 7),
                  u = s - 7 * c;
                return 0 === i
                  ? (function(e, t) {
                      const n = e.toISOString(),
                        r = t.toISOString();
                      return (
                        n.slice(0, n.indexOf("T")) ===
                        r.slice(0, r.indexOf("T"))
                      );
                    })(t, n)
                    ? "Today"
                    : c < 4 || 0 === c
                    ? "".concat(s, " day")
                    : u > 0
                    ? "".concat(c, " wk ").concat(u, " d")
                    : "".concat(c, " week")
                  : i < 2
                  ? ""
                      .concat(l, " ")
                      .concat(i, " yr")
                      .trim()
                  : i < 18
                  ? ""
                      .concat(i, " yr ")
                      .concat(l)
                      .trim()
                  : "".concat(i, " yr");
              }
              function et(e) {
                return (
                  (Date.UTC(
                    e.getUTCFullYear(),
                    e.getUTCMonth(),
                    e.getUTCDate()
                  ) -
                    Date.UTC(e.getUTCFullYear(), 0, 0)) /
                  24 /
                  60 /
                  60 /
                  1e3
                );
              }
              var tt = n(30),
                nt = n.n(tt);
              function rt(e) {
                return i.a.createElement(
                  u,
                  { name: "Demographics", styles: e.cardStyles },
                  i.a.createElement(
                    _,
                    null,
                    i.a.createElement(
                      g,
                      null,
                      i.a.createElement(E, {
                        label: "Family",
                        value: e.patient && e.patient.name[0].family + ",",
                        valueStyles: { textTransform: "uppercase" },
                        className: "omrs-type-title-1"
                      }),
                      i.a.createElement(E, {
                        label: "Given",
                        value: e.patient && e.patient.name[0].given.join(" "),
                        className: "omrs-type-title-1",
                        valueStyles: { whiteSpace: "nowrap" }
                      })
                    )
                  ),
                  i.a.createElement(
                    _,
                    null,
                    i.a.createElement(
                      g,
                      { justifyContent: "space-between" },
                      i.a.createElement(E, {
                        label: "Birth Date",
                        value:
                          e.patient &&
                          We()(e.patient.birthDate).format("DD-MMM-YYYY")
                      }),
                      i.a.createElement(E, {
                        label: "Age",
                        value: e.patient && Xe(e.patient.birthDate)
                      }),
                      i.a.createElement(E, {
                        label: "Gender",
                        value: e.patient && e.patient.gender,
                        valueStyles: { textTransform: "capitalize" }
                      })
                    )
                  )
                );
              }
              function at(e) {
                const t = {
                  color: "var(--omrs-color-ink-high-contrast)",
                  fontWeight: 500
                };
                return i.a.createElement(
                  u,
                  { name: "Identifiers" },
                  e.patient &&
                    e.patient.identifier
                      .sort(function(e, t) {
                        return n(e) ? -1 : n(t) ? 1 : 0;
                      })
                      .map(e =>
                        i.a.createElement(
                          _,
                          { key: e.system },
                          i.a.createElement(
                            g,
                            { justifyContent: "space-between" },
                            i.a.createElement(E, {
                              label: e.system,
                              value: e.value,
                              valueStyles: t
                            }),
                            n(e) &&
                              i.a.createElement(
                                "span",
                                {
                                  style: {
                                    color:
                                      "var(--omrs-color-ink-medium-contrast)"
                                  },
                                  className: "omrs-type-body-regular"
                                },
                                "Preferred ID"
                              )
                          )
                        )
                      )
                );
                function n(e) {
                  return "usual" === e.use;
                }
              }
              function it(e) {
                function t(e) {
                  return i.a.createElement(
                    "div",
                    null,
                    i.a.createElement("div", null, e.line),
                    i.a.createElement("div", null, e.city, ", ", e.state),
                    i.a.createElement("div", null, e.country)
                  );
                }
                return i.a.createElement(
                  u,
                  { name: "Contact & Address" },
                  e.patient && e.patient.address
                    ? e.patient.address.map(e =>
                        i.a.createElement(
                          _,
                          { key: e.id },
                          i.a.createElement(
                            g,
                            null,
                            i.a.createElement(E, { label: e.use, value: t(e) })
                          )
                        )
                      )
                    : i.a.createElement(
                        _,
                        null,
                        i.a.createElement(g, null, "—")
                      ),
                  e.patient && e.patient.telecom
                    ? e.patient.telecom.map(e =>
                        i.a.createElement(
                          _,
                          { key: e.system },
                          i.a.createElement(
                            g,
                            null,
                            i.a.createElement(E, {
                              label: e.system,
                              value: e.value
                            })
                          )
                        )
                      )
                    : i.a.createElement(
                        _,
                        null,
                        i.a.createElement(g, null, "—")
                      )
                );
              }
              function ot(e) {
                const [t, n] = i.a.useState(null);
                return (
                  i.a.useEffect(() => {
                    var t;
                    ((t = e.patient.identifier[0].value),
                    Object(me.openmrsFetch)(
                      "/ws/fhir/RelatedPerson?patient.identifier=".concat(t)
                    ))
                      .then(({ data: e }) => {
                        e.total > 0 && n(e.entry.map(e => e.resource));
                      })
                      .catch(Object(Ue.createErrorHandler)());
                  }, [e.patient.identifier]),
                  i.a.createElement(
                    u,
                    { name: "Relationships" },
                    t && t.length
                      ? t.map(e => {
                          return i.a.createElement(
                            _,
                            { key: e.id },
                            i.a.createElement(
                              g,
                              null,
                              i.a.createElement(E, {
                                label: e.relationship.coding[0].code,
                                value:
                                  ((t = e.name),
                                  ""
                                    .concat(t[0].given.join(" "), " ")
                                    .concat(t[0].family))
                              })
                            )
                          );
                          var t;
                        })
                      : i.a.createElement(
                          _,
                          null,
                          i.a.createElement(g, null, "—")
                        )
                  )
                );
              }
              function lt(e) {
                return i.a.createElement(
                  "div",
                  { className: nt.a.profile },
                  i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      "div",
                      { className: nt.a.demographicCard },
                      i.a.createElement(rt, {
                        patient: e.patient,
                        cardStyles: { flexGrow: 1 }
                      })
                    ),
                    i.a.createElement(
                      "div",
                      { className: nt.a.otherProfileCards },
                      i.a.createElement(at, { patient: e.patient }),
                      i.a.createElement(
                        "div",
                        { className: nt.a.contactsAndRelationshipsCard },
                        i.a.createElement(it, { patient: e.patient }),
                        i.a.createElement(ot, { patient: e.patient })
                      )
                    )
                  )
                );
              }
              function st(e) {
                const [t, n] = i.a.useState(!1),
                  [r, a, o, l] = Object(me.useCurrentPatient)();
                return i.a.createElement(
                  "div",
                  { className: Qe.a.patientBanner },
                  !r &&
                    !l &&
                    i.a.createElement(
                      "div",
                      {
                        className: Qe.a.patientBanner,
                        role: "button",
                        onClick: s,
                        tabIndex: 0
                      },
                      i.a.createElement(
                        "div",
                        { className: Qe.a.demographics },
                        i.a.createElement(
                          "div",
                          {
                            className: "".concat(
                              Qe.a.patientName,
                              " omrs-type-title-5"
                            )
                          },
                          ""
                            .concat(a.name[0].family.toUpperCase(), ", ")
                            .concat(a.name[0].given.join(" "))
                        ),
                        i.a.createElement(
                          "div",
                          { className: "".concat(Qe.a.otherDemographics) },
                          i.a.createElement(
                            "span",
                            {
                              className: "".concat(
                                Qe.a.demographic,
                                " omrs-type-body-regular"
                              )
                            },
                            Xe(a.birthDate)
                          )
                        ),
                        i.a.createElement(
                          "div",
                          { className: "".concat(Qe.a.otherDemographics) },
                          i.a.createElement(
                            "span",
                            {
                              className: "".concat(
                                Qe.a.desktopLabel,
                                " omrs-type-body-small"
                              )
                            },
                            "Born"
                          ),
                          i.a.createElement(
                            "span",
                            {
                              className: "".concat(
                                Qe.a.demographic,
                                " omrs-type-body-regular"
                              )
                            },
                            We()(a.birthDate).format("DD-MMM-YYYY")
                          )
                        ),
                        i.a.createElement(
                          "div",
                          { className: "".concat(Qe.a.otherDemographics) },
                          i.a.createElement(
                            "span",
                            {
                              className: "".concat(
                                Qe.a.desktopLabel,
                                " omrs-type-body-small"
                              )
                            },
                            "Gender"
                          ),
                          i.a.createElement(
                            "span",
                            {
                              className: "".concat(
                                Qe.a.demographic,
                                " omrs-type-body-regular"
                              )
                            },
                            a.gender
                          )
                        ),
                        i.a.createElement(
                          "div",
                          { className: "".concat(Qe.a.otherDemographics) },
                          i.a.createElement(
                            "span",
                            {
                              className: "".concat(
                                Qe.a.desktopLabel,
                                " omrs-type-body-small"
                              )
                            },
                            "Preferred ID"
                          ),
                          i.a.createElement(
                            "span",
                            {
                              className: "".concat(
                                Qe.a.demographic,
                                " omrs-type-body-regular"
                              )
                            },
                            a.identifier.find(e => "usual" === e.use).value ||
                              a.identifier[0].value
                          )
                        )
                      ),
                      i.a.createElement(
                        "div",
                        { className: Qe.a.moreBtn },
                        i.a.createElement(
                          "button",
                          {
                            className: "".concat(
                              Qe.a.moreBtn,
                              " omrs-unstyled"
                            ),
                            onClick: s
                          },
                          t ? "Close" : "Open"
                        ),
                        i.a.createElement(
                          "svg",
                          {
                            className: "omrs-icon",
                            fill: "var(--omrs-color-ink-medium-contrast)"
                          },
                          i.a.createElement("use", {
                            xlinkHref: t
                              ? "#omrs-icon-chevron-up"
                              : "#omrs-icon-chevron-down"
                          })
                        )
                      )
                    ),
                  t &&
                    i.a.createElement(
                      "div",
                      { className: Qe.a.patientProfile },
                      i.a.createElement(lt, { patient: a, match: e.match })
                    )
                );
                function s() {
                  n(!t);
                }
              }
              function ct(e, t) {
                return Promise.resolve(mt);
              }
              const ut = {
                  resource: {
                    resourceType: "Condition",
                    id: "92A45BE7A93A4E14A49CB9A51E19C3A4",
                    subject: {
                      reference: "Patient/D1A903924D4443A7A388778D77D86155"
                    },
                    clinicalStatus: "active",
                    code: {
                      coding: {
                        system: "http://snomed.info/sct",
                        code: "236578006",
                        display:
                          "Chronic rejection of renal transplant (disorder)"
                      },
                      text: "Renal rejection"
                    },
                    onsetDateTime: "2011-07-30",
                    lastUpdated: "2011-08-01",
                    lastUpdatedBy: "Dr. Katherine Mwangi",
                    lastUpdatedLocation: "Busia, Clinic"
                  }
                },
                mt = {
                  resourceType: "Bundle",
                  id: "fc7b3b324b4f43e4b5d068774ff6ec0b",
                  type: "searchset",
                  total: 5,
                  entry: [
                    {
                      resource: {
                        resourceType: "Condition",
                        id: "92A45BE7A93A4E14A49CB9A51E19C3A4",
                        subject: {
                          reference: "Patient/D1A903924D4443A7A388778D77D86155"
                        },
                        clinicalStatus: "active",
                        code: {
                          coding: {
                            system: "http://snomed.info/sct",
                            code: "236578006",
                            display:
                              "Chronic rejection of renal transplant (disorder)"
                          },
                          text: "Renal rejection"
                        },
                        onsetDateTime: "2011-07-30"
                      }
                    },
                    {
                      resource: {
                        resourceType: "Condition",
                        id: "67F0026602084CE9BB6DB16A2180B2C5",
                        subject: {
                          reference: "Patient/D1A903924D4443A7A388778D77D86155"
                        },
                        clinicalStatus: "resolved",
                        code: {
                          coding: {
                            system: "http://snomed.info/sct",
                            code: "238131007",
                            display: "Overweight (finding)"
                          },
                          text: "Overweight"
                        },
                        onsetDateTime: "2012-09-31"
                      }
                    },
                    {
                      resource: {
                        resourceType: "Condition",
                        id: "A6460892920047379863DD639D5400B2",
                        subject: {
                          reference: "Patient/D1A903924D4443A7A388778D77D86155"
                        },
                        clinicalStatus: "active",
                        code: {
                          coding: {
                            system: "http://snomed.info/sct",
                            code: "386661006",
                            display: "Fever (finding)"
                          },
                          text: "Fever"
                        },
                        onsetDateTime: "2015-06-22"
                      }
                    },
                    {
                      resource: {
                        resourceType: "Condition",
                        id: "26EFFA98F55D48B38687B3920285BE15",
                        subject: {
                          reference: "Patient/D1A903924D4443A7A388778D77D86155"
                        },
                        clinicalStatus: "active",
                        code: {
                          coding: {
                            system: "http://snomed.info/sct",
                            code: "59621000",
                            display: "Essential hypertension (disorder)"
                          },
                          text: "Hypertension"
                        },
                        onsetDateTime: "2011-08-05"
                      }
                    },
                    {
                      resource: {
                        resourceType: "Condition",
                        id: "27EFFA98F55D48B38687B3920285BE15",
                        subject: {
                          reference: "Patient/D1A903924D4443A7A388778D77D86155"
                        },
                        clinicalStatus: "inactive",
                        code: {
                          coding: {
                            system: "http://snomed.info/sct",
                            code: "59621000",
                            display: "Essential hypertension (disorder)"
                          },
                          text: "Shortness of breath"
                        },
                        onsetDateTime: "2011-08-05"
                      }
                    }
                  ]
                };
              function dt(e) {
                const [t, n] = i.a.useState(null),
                  [r, a, o, l] = Object(me.useCurrentPatient)(),
                  { t: s } = Object(c.useTranslation)();
                return (
                  i.a.useEffect(() => {
                    if (a) {
                      const e = new AbortController();
                      return (
                        ct(a.identifier[0].value)
                          .then(e => n(e))
                          .catch(Object(Ue.createErrorHandler)()),
                        () => e.abort()
                      );
                    }
                  }, [a]),
                  i.a.createElement(
                    u,
                    {
                      name: s("conditions", "Conditions"),
                      styles: { margin: "1.25rem, 1.5rem" }
                    },
                    i.a.createElement(
                      _,
                      null,
                      i.a.createElement(
                        g,
                        null,
                        i.a.createElement(b, {
                          label: "Active Conditions",
                          labelStyles: {
                            color: "var(--omrs-color-ink-medium-contrast)",
                            fontFamily: "Work Sans"
                          },
                          value: "Since",
                          valueStyles: {
                            color: "var(--omrs-color-ink-medium-contrast)",
                            fontFamily: "Work Sans"
                          }
                        })
                      )
                    ),
                    t &&
                      t.entry.map(e =>
                        i.a.createElement(
                          _,
                          {
                            key: e.resource.id,
                            linkTo: "/patient/".concat(o, "/chart/conditions")
                          },
                          i.a.createElement(b, {
                            label: e.resource.code.text,
                            labelStyles: { fontWeight: 500 },
                            value: We()(e.resource.onsetDateTime).format(
                              "MMM-YYYY"
                            ),
                            valueStyles: { fontFamily: "Work Sans" }
                          })
                        )
                      ),
                    i.a.createElement(h, {
                      linkTo: "/patient/".concat(o, "/chart/conditions")
                    })
                  )
                );
              }
              var _t = n(20),
                pt = n.n(_t);
              function ft(e) {
                const [t, n] = i.a.useState(null),
                  [r, a, o] = Object(me.useCurrentPatient)();
                return (
                  i.a.useEffect(() => {
                    if (!r && a) {
                      const e = new AbortController();
                      return (
                        ct(a.identifier[0].value)
                          .then(e => n(e))
                          .catch(Object(Ue.createErrorHandler)()),
                        () => e.abort()
                      );
                    }
                  }, [r, a]),
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    t &&
                      i.a.createElement(
                        "div",
                        { className: pt.a.conditionSummary },
                        t.total > 0
                          ? i.a.createElement(
                              u,
                              { name: "Conditions", styles: { width: "100%" } },
                              i.a.createElement(
                                "table",
                                {
                                  className: "omrs-type-body-regular ".concat(
                                    pt.a.conditionTable
                                  )
                                },
                                i.a.createElement(
                                  "thead",
                                  null,
                                  i.a.createElement(
                                    "tr",
                                    null,
                                    i.a.createElement("td", null, "CONDITION"),
                                    i.a.createElement("td", null, "ONSET DATE"),
                                    i.a.createElement("td", null, "STATUS"),
                                    i.a.createElement("td", null)
                                  )
                                ),
                                i.a.createElement(
                                  "tbody",
                                  null,
                                  t &&
                                    t.entry
                                      .sort((e, t) =>
                                        e.resource.clinicalStatus >
                                        t.resource.clinicalStatus
                                          ? 1
                                          : -1
                                      )
                                      .map(e =>
                                        i.a.createElement(
                                          i.a.Fragment,
                                          { key: e.resource.id },
                                          i.a.createElement(
                                            "tr",
                                            {
                                              className: "".concat(
                                                "active" ===
                                                  e.resource.clinicalStatus
                                                  ? "".concat(pt.a.active)
                                                  : "".concat(pt.a.inactive)
                                              )
                                            },
                                            i.a.createElement(
                                              "td",
                                              { className: "omrs-medium" },
                                              e.resource.code.text
                                            ),
                                            i.a.createElement(
                                              "td",
                                              null,
                                              i.a.createElement(
                                                "div",
                                                {
                                                  className: "".concat(
                                                    pt.a.alignRight
                                                  )
                                                },
                                                We()(
                                                  e.resource.onsetDateTime
                                                ).format("MMM-YYYY")
                                              )
                                            ),
                                            i.a.createElement(
                                              "td",
                                              null,
                                              i.a.createElement(
                                                "div",
                                                {
                                                  className: ""
                                                    .concat(
                                                      pt.a.centerItems,
                                                      " "
                                                    )
                                                    .concat(pt.a.alignLeft)
                                                },
                                                i.a.createElement(
                                                  "span",
                                                  null,
                                                  ht(e.resource.clinicalStatus)
                                                )
                                              )
                                            ),
                                            i.a.createElement(
                                              "td",
                                              null,
                                              i.a.createElement(
                                                s.Link,
                                                {
                                                  to: "/patient/"
                                                    .concat(
                                                      o,
                                                      "/chart/conditions/"
                                                    )
                                                    .concat(e.resource.id)
                                                },
                                                i.a.createElement(
                                                  "svg",
                                                  {
                                                    className: "omrs-icon",
                                                    fill:
                                                      "var(--omrs-color-ink-low-contrast)"
                                                  },
                                                  i.a.createElement("use", {
                                                    xlinkHref:
                                                      "#omrs-icon-chevron-right"
                                                  })
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                )
                              ),
                              i.a.createElement(
                                "div",
                                {
                                  className: "omrs-type-body-regular ".concat(
                                    pt.a.conditionFooter
                                  )
                                },
                                i.a.createElement(
                                  "p",
                                  null,
                                  "No more conditions available"
                                )
                              )
                            )
                          : i.a.createElement(
                              u,
                              {
                                name: "Conditions",
                                styles: {
                                  width: "100%",
                                  background:
                                    "var(--omrs-color-bg-low-contrast)",
                                  border: "none",
                                  boxShadow: "none"
                                }
                              },
                              i.a.createElement(
                                "div",
                                { className: pt.a.conditionMargin },
                                i.a.createElement(
                                  "p",
                                  { className: "omrs-medium" },
                                  "No Conditions are documented."
                                ),
                                i.a.createElement(
                                  "p",
                                  { className: "omrs-medium" },
                                  "Please ",
                                  i.a.createElement(
                                    "a",
                                    { href: "/" },
                                    "add patient condition."
                                  )
                                )
                              )
                            )
                      )
                  )
                );
              }
              const ht = e =>
                "string" != typeof e
                  ? ""
                  : e.charAt(0).toUpperCase() + e.slice(1);
              var gt = n(24),
                vt = n.n(gt);
              function yt(e) {
                const [t, n] = i.a.useState(null),
                  [r, a, o] = Object(me.useCurrentPatient)(),
                  l = se();
                return (
                  i.a.useEffect(() => {
                    if (!r && a) {
                      const e = new AbortController();
                      return (
                        (l.params.conditionUuid, Promise.resolve(ut))
                          .then(e => n(e))
                          .catch(Object(Ue.createErrorHandler)()),
                        () => e.abort()
                      );
                    }
                  }, [r, a, l.params]),
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    t &&
                      i.a.createElement(
                        "div",
                        { className: vt.a.conditionSummary },
                        i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            u,
                            {
                              name: "Condition",
                              styles: { width: "100%" },
                              editBtnUrl: "/patient/".concat(
                                o,
                                "/chart/conditions/edit"
                              )
                            },
                            i.a.createElement(
                              "div",
                              {
                                className: "omrs-type-body-regular ".concat(
                                  vt.a.conditionCard
                                )
                              },
                              i.a.createElement(
                                "div",
                                null,
                                i.a.createElement(
                                  "p",
                                  {
                                    className: "omrs-type-title-3",
                                    "data-testid": "condition-name"
                                  },
                                  t.resource.code.text
                                )
                              ),
                              i.a.createElement(
                                "table",
                                { className: vt.a.conditionTable },
                                i.a.createElement(
                                  "thead",
                                  null,
                                  i.a.createElement(
                                    "tr",
                                    null,
                                    i.a.createElement("td", null, "Onset date"),
                                    i.a.createElement("td", null, "Status")
                                  )
                                ),
                                i.a.createElement(
                                  "tbody",
                                  null,
                                  i.a.createElement(
                                    "tr",
                                    null,
                                    i.a.createElement(
                                      "td",
                                      { "data-testid": "onset-date" },
                                      We()(t.resource.onsetDateTime).format(
                                        "MMM-YYYY"
                                      )
                                    ),
                                    i.a.createElement(
                                      "td",
                                      { "data-testid": "clinical-status" },
                                      bt(t.resource.clinicalStatus)
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      ),
                    t &&
                      i.a.createElement(
                        "div",
                        { className: vt.a.conditionSummary },
                        i.a.createElement(
                          u,
                          {
                            name: "Details",
                            styles: {
                              width: "100%",
                              backgroundColor:
                                "var(--omrs-color-bg-medium-contrast)"
                            }
                          },
                          i.a.createElement(
                            "div",
                            {
                              className: "omrs-type-body-regular ".concat(
                                vt.a.conditionCard
                              )
                            },
                            i.a.createElement(
                              "table",
                              { className: vt.a.conditionTable },
                              i.a.createElement(
                                "thead",
                                null,
                                i.a.createElement(
                                  "tr",
                                  null,
                                  i.a.createElement("td", null, "Last updated"),
                                  i.a.createElement(
                                    "td",
                                    null,
                                    "Last updated by"
                                  ),
                                  i.a.createElement(
                                    "td",
                                    null,
                                    "Last updated location"
                                  )
                                )
                              ),
                              i.a.createElement(
                                "tbody",
                                null,
                                i.a.createElement(
                                  "tr",
                                  null,
                                  i.a.createElement(
                                    "td",
                                    { "data-testid": "last-updated" },
                                    We()(t.resource.lastUpdated).format(
                                      "DD-MMM-YYYY"
                                    )
                                  ),
                                  i.a.createElement(
                                    "td",
                                    { "data-testid": "updated-by" },
                                    t.resource.lastUpdatedBy
                                  ),
                                  i.a.createElement(
                                    "td",
                                    { "data-testid": "update-location" },
                                    t.resource.lastUpdatedLocation
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                  )
                );
              }
              const bt = e =>
                "string" != typeof e
                  ? ""
                  : e.charAt(0).toUpperCase() + e.slice(1);
              function At(e, t) {
                return e > 0 && t > 0 ? (e / (t / 100) ** 2).toFixed(1) : null;
              }
              function wt(e) {
                const t = We()(e),
                  n = We()(new Date());
                return t.date() === n.date() &&
                  t.month() === n.month() &&
                  t.year() === n.year()
                  ? "Today ".concat(t.format("hh:mm A"))
                  : t.year() === n.year()
                  ? t.format("DD-MMM hh:mm A")
                  : t.format("YYYY DD-MMM");
              }
              function Et(e, t) {
                return We()(e).format(t);
              }
              function xt(e) {
                return Object(me.openmrsObservableFetch)(
                  "/ws/rest/v1/obs?concepts="
                    .concat("5089AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", ",")
                    .concat("5090AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "&patient=")
                    .concat(
                      e,
                      "&v=custom:(uuid,display,obsDatetime,encounter:(encounterDatetime),value,concept:(uuid))"
                    )
                ).pipe(
                  ke(e => ({
                    heights: e.data.results.filter(
                      e =>
                        "5090AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" ===
                        e.concept.uuid
                    ),
                    weights: e.data.results.filter(
                      e =>
                        "5089AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" ===
                        e.concept.uuid
                    )
                  })),
                  ke(e =>
                    e.heights
                      ? (function(e, t) {
                          const n = e.map(e => e.obsDatetime),
                            r = t.map(e => e.obsDatetime);
                          return Array.from(new Set(n.concat(r)))
                            .sort(St)
                            .map(n => {
                              const r = e.find(e => e.obsDatetime === n),
                                a = t.find(e => e.obsDatetime === n);
                              return {
                                id: new Date(n).getTime(),
                                weight: r ? r.value : r,
                                height: a ? a.value : a,
                                date: wt(n),
                                bmi: r && a ? At(r.value, a.value) : null,
                                obsData: { weight: r, height: a }
                              };
                            });
                        })(e.weights, e.heights)
                      : []
                  )
                );
              }
              function St(e, t) {
                return new Date(t).getTime() - new Date(e).getTime();
              }
              var Nt = n(13),
                kt = n.n(Nt);
              function Ot(e) {
                const [t, n] = i.a.useState([]),
                  [r, a] = i.a.useState(!1),
                  [o, l, s, c] = Object(me.useCurrentPatient)();
                return (
                  i.a.useEffect(() => {
                    if (s) {
                      const e = xt(s).subscribe(e => {
                        n(e);
                      });
                      return () => e.unsubscribe();
                    }
                  }, [s]),
                  i.a.createElement(
                    u,
                    {
                      name: "Height & Weight",
                      link: "/patient/".concat(s, "/chart/dimensions")
                    },
                    i.a.createElement(
                      _,
                      null,
                      i.a.createElement(
                        g,
                        null,
                        i.a.createElement(
                          "table",
                          { className: kt.a.table },
                          i.a.createElement(
                            "thead",
                            null,
                            i.a.createElement(
                              "tr",
                              { className: kt.a.tableRow },
                              i.a.createElement("th", {
                                className: ""
                                  .concat(kt.a.tableHeader, " ")
                                  .concat(kt.a.tableDates),
                                style: { textAlign: "start" }
                              }),
                              i.a.createElement(
                                "th",
                                { className: kt.a.tableHeader },
                                "Weight"
                              ),
                              i.a.createElement(
                                "th",
                                { className: kt.a.tableHeader },
                                "Height"
                              ),
                              i.a.createElement(
                                "th",
                                { className: kt.a.tableHeader },
                                "BMI"
                              ),
                              i.a.createElement("th", null)
                            )
                          ),
                          i.a.createElement(
                            "tbody",
                            null,
                            t
                              .slice(0, r ? 6 : 3)
                              .map((e, t) =>
                                i.a.createElement(
                                  "tr",
                                  { key: e.id, className: kt.a.tableRow },
                                  i.a.createElement(
                                    "td",
                                    {
                                      className: kt.a.tableData,
                                      style: { textAlign: "start" }
                                    },
                                    e.date
                                  ),
                                  i.a.createElement(
                                    "td",
                                    { className: kt.a.tableData },
                                    e.weight || "—",
                                    i.a.createElement(
                                      "span",
                                      { className: kt.a.unit },
                                      0 === t && " kg"
                                    )
                                  ),
                                  i.a.createElement(
                                    "td",
                                    { className: kt.a.tableData },
                                    e.height || "—",
                                    i.a.createElement(
                                      "span",
                                      { className: kt.a.unit },
                                      0 === t && " cm"
                                    )
                                  ),
                                  i.a.createElement(
                                    "td",
                                    { className: kt.a.tableData },
                                    e.bmi || "—",
                                    i.a.createElement(
                                      "span",
                                      { className: kt.a.unit },
                                      0 === t && " kg/m",
                                      0 === t &&
                                        i.a.createElement("sup", null, "2")
                                    )
                                  ),
                                  i.a.createElement(
                                    "td",
                                    { style: { textAlign: "end" } },
                                    i.a.createElement(
                                      "svg",
                                      {
                                        className: "omrs-icon",
                                        fill:
                                          "var(--omrs-color-ink-low-contrast)"
                                      },
                                      i.a.createElement("use", {
                                        xlinkHref: "#omrs-icon-chevron-right"
                                      })
                                    )
                                  )
                                )
                              )
                          )
                        )
                      )
                    ),
                    i.a.createElement(h, {
                      linkTo: "/patient/".concat(s, "/chart/dimensions")
                    })
                  )
                );
              }
              var Ct = n(16),
                jt = n.n(Ct),
                Tt = n(2),
                Dt = n.n(Tt);
              function Mt(e) {
                return e && "function" == typeof e.schedule;
              }
              var It = (function() {
                return (
                  ("function" == typeof Symbol && Symbol.observable) ||
                  "@@observable"
                );
              })();
              function Ut() {}
              function Ft(e) {
                return e
                  ? 1 === e.length
                    ? e[0]
                    : function(t) {
                        return e.reduce(function(e, t) {
                          return t(e);
                        }, t);
                      }
                  : Ut;
              }
              var Pt = (function() {
                function e(e) {
                  (this._isScalar = !1), e && (this._subscribe = e);
                }
                return (
                  (e.prototype.lift = function(t) {
                    var n = new e();
                    return (n.source = this), (n.operator = t), n;
                  }),
                  (e.prototype.subscribe = function(e, t, n) {
                    var r = this.operator,
                      a = (function(e, t, n) {
                        if (e) {
                          if (e instanceof Se) return e;
                          if (e[xe]) return e[xe]();
                        }
                        return e || t || n ? new Se(e, t, n) : new Se(ye);
                      })(e, t, n);
                    if (
                      (r
                        ? a.add(r.call(a, this.source))
                        : a.add(
                            this.source ||
                              (ge.useDeprecatedSynchronousErrorHandling &&
                                !a.syncErrorThrowable)
                              ? this._subscribe(a)
                              : this._trySubscribe(a)
                          ),
                      ge.useDeprecatedSynchronousErrorHandling &&
                        a.syncErrorThrowable &&
                        ((a.syncErrorThrowable = !1), a.syncErrorThrown))
                    )
                      throw a.syncErrorValue;
                    return a;
                  }),
                  (e.prototype._trySubscribe = function(e) {
                    try {
                      return this._subscribe(e);
                    } catch (t) {
                      ge.useDeprecatedSynchronousErrorHandling &&
                        ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                        !(function(e) {
                          for (; e; ) {
                            var t = e,
                              n = t.closed,
                              r = t.destination,
                              a = t.isStopped;
                            if (n || a) return !1;
                            e = r && r instanceof Se ? r : null;
                          }
                          return !0;
                        })(e)
                          ? console.warn(t)
                          : e.error(t);
                    }
                  }),
                  (e.prototype.forEach = function(e, t) {
                    var n = this;
                    return new (t = Rt(t))(function(t, r) {
                      var a;
                      a = n.subscribe(
                        function(t) {
                          try {
                            e(t);
                          } catch (e) {
                            r(e), a && a.unsubscribe();
                          }
                        },
                        r,
                        t
                      );
                    });
                  }),
                  (e.prototype._subscribe = function(e) {
                    var t = this.source;
                    return t && t.subscribe(e);
                  }),
                  (e.prototype[It] = function() {
                    return this;
                  }),
                  (e.prototype.pipe = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                      e[t] = arguments[t];
                    return 0 === e.length ? this : Ft(e)(this);
                  }),
                  (e.prototype.toPromise = function(e) {
                    var t = this;
                    return new (e = Rt(e))(function(e, n) {
                      var r;
                      t.subscribe(
                        function(e) {
                          return (r = e);
                        },
                        function(e) {
                          return n(e);
                        },
                        function() {
                          return e(r);
                        }
                      );
                    });
                  }),
                  (e.create = function(t) {
                    return new e(t);
                  }),
                  e
                );
              })();
              function Rt(e) {
                if ((e || (e = ge.Promise || Promise), !e))
                  throw new Error("no Promise impl found");
                return e;
              }
              function Ht(e, t) {
                return new Pt(function(n) {
                  var r = new we(),
                    a = 0;
                  return (
                    r.add(
                      t.schedule(function() {
                        a !== e.length
                          ? (n.next(e[a++]), n.closed || r.add(this.schedule()))
                          : n.complete();
                      })
                    ),
                    r
                  );
                });
              }
              function Wt(e, t) {
                return t
                  ? Ht(e, t)
                  : new Pt(
                      ((n = e),
                      function(e) {
                        for (var t = 0, r = n.length; t < r && !e.closed; t++)
                          e.next(n[t]);
                        e.complete();
                      })
                    );
                var n;
              }
              function Yt(e) {
                return (function() {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  var n = e[e.length - 1];
                  return Mt(n) ? (e.pop(), Ht(e, n)) : Wt(e);
                })([]);
              }
              var Lt = n(12),
                Bt = Lt.a.Symbol,
                zt = Object.prototype,
                $t = zt.hasOwnProperty,
                Vt = zt.toString,
                qt = Bt ? Bt.toStringTag : void 0;
              var Kt = function(e) {
                  var t = $t.call(e, qt),
                    n = e[qt];
                  try {
                    e[qt] = void 0;
                    var r = !0;
                  } catch (e) {}
                  var a = Vt.call(e);
                  return r && (t ? (e[qt] = n) : delete e[qt]), a;
                },
                Gt = Object.prototype.toString;
              var Jt = function(e) {
                  return Gt.call(e);
                },
                Zt = Bt ? Bt.toStringTag : void 0;
              var Qt = function(e) {
                return null == e
                  ? void 0 === e
                    ? "[object Undefined]"
                    : "[object Null]"
                  : Zt && Zt in Object(e)
                  ? Kt(e)
                  : Jt(e);
              };
              var Xt = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
              };
              var en,
                tn = function(e) {
                  if (!Xt(e)) return !1;
                  var t = Qt(e);
                  return (
                    "[object Function]" == t ||
                    "[object GeneratorFunction]" == t ||
                    "[object AsyncFunction]" == t ||
                    "[object Proxy]" == t
                  );
                },
                nn = Lt.a["__core-js_shared__"],
                rn = (en = /[^.]+$/.exec(
                  (nn && nn.keys && nn.keys.IE_PROTO) || ""
                ))
                  ? "Symbol(src)_1." + en
                  : "";
              var an = function(e) {
                  return !!rn && rn in e;
                },
                on = Function.prototype.toString;
              var ln = function(e) {
                  if (null != e) {
                    try {
                      return on.call(e);
                    } catch (e) {}
                    try {
                      return e + "";
                    } catch (e) {}
                  }
                  return "";
                },
                sn = /^\[object .+?Constructor\]$/,
                cn = Function.prototype,
                un = Object.prototype,
                mn = cn.toString,
                dn = un.hasOwnProperty,
                _n = RegExp(
                  "^" +
                    mn
                      .call(dn)
                      .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                );
              var pn = function(e) {
                return !(!Xt(e) || an(e)) && (tn(e) ? _n : sn).test(ln(e));
              };
              var fn = function(e, t) {
                return null == e ? void 0 : e[t];
              };
              var hn = function(e, t) {
                  var n = fn(e, t);
                  return pn(n) ? n : void 0;
                },
                gn = hn(Object, "create");
              var vn = function() {
                (this.__data__ = gn ? gn(null) : {}), (this.size = 0);
              };
              var yn = function(e) {
                  var t = this.has(e) && delete this.__data__[e];
                  return (this.size -= t ? 1 : 0), t;
                },
                bn = Object.prototype.hasOwnProperty;
              var An = function(e) {
                  var t = this.__data__;
                  if (gn) {
                    var n = t[e];
                    return "__lodash_hash_undefined__" === n ? void 0 : n;
                  }
                  return bn.call(t, e) ? t[e] : void 0;
                },
                wn = Object.prototype.hasOwnProperty;
              var En = function(e) {
                var t = this.__data__;
                return gn ? void 0 !== t[e] : wn.call(t, e);
              };
              var xn = function(e, t) {
                var n = this.__data__;
                return (
                  (this.size += this.has(e) ? 0 : 1),
                  (n[e] = gn && void 0 === t ? "__lodash_hash_undefined__" : t),
                  this
                );
              };
              function Sn(e) {
                var t = -1,
                  n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              (Sn.prototype.clear = vn),
                (Sn.prototype.delete = yn),
                (Sn.prototype.get = An),
                (Sn.prototype.has = En),
                (Sn.prototype.set = xn);
              var Nn = Sn;
              var kn = function() {
                (this.__data__ = []), (this.size = 0);
              };
              var On = function(e, t) {
                return e === t || (e != e && t != t);
              };
              var Cn = function(e, t) {
                  for (var n = e.length; n--; ) if (On(e[n][0], t)) return n;
                  return -1;
                },
                jn = Array.prototype.splice;
              var Tn = function(e) {
                var t = this.__data__,
                  n = Cn(t, e);
                return (
                  !(n < 0) &&
                  (n == t.length - 1 ? t.pop() : jn.call(t, n, 1),
                  --this.size,
                  !0)
                );
              };
              var Dn = function(e) {
                var t = this.__data__,
                  n = Cn(t, e);
                return n < 0 ? void 0 : t[n][1];
              };
              var Mn = function(e) {
                return Cn(this.__data__, e) > -1;
              };
              var In = function(e, t) {
                var n = this.__data__,
                  r = Cn(n, e);
                return (
                  r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
                );
              };
              function Un(e) {
                var t = -1,
                  n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              (Un.prototype.clear = kn),
                (Un.prototype.delete = Tn),
                (Un.prototype.get = Dn),
                (Un.prototype.has = Mn),
                (Un.prototype.set = In);
              var Fn = Un,
                Pn = hn(Lt.a, "Map");
              var Rn = function() {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new Nn(),
                    map: new (Pn || Fn)(),
                    string: new Nn()
                  });
              };
              var Hn = function(e) {
                var t = typeof e;
                return "string" == t ||
                  "number" == t ||
                  "symbol" == t ||
                  "boolean" == t
                  ? "__proto__" !== e
                  : null === e;
              };
              var Wn = function(e, t) {
                var n = e.__data__;
                return Hn(t)
                  ? n["string" == typeof t ? "string" : "hash"]
                  : n.map;
              };
              var Yn = function(e) {
                var t = Wn(this, e).delete(e);
                return (this.size -= t ? 1 : 0), t;
              };
              var Ln = function(e) {
                return Wn(this, e).get(e);
              };
              var Bn = function(e) {
                return Wn(this, e).has(e);
              };
              var zn = function(e, t) {
                var n = Wn(this, e),
                  r = n.size;
                return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
              };
              function $n(e) {
                var t = -1,
                  n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n; ) {
                  var r = e[t];
                  this.set(r[0], r[1]);
                }
              }
              ($n.prototype.clear = Rn),
                ($n.prototype.delete = Yn),
                ($n.prototype.get = Ln),
                ($n.prototype.has = Bn),
                ($n.prototype.set = zn);
              var Vn = $n;
              var qn = function(e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this;
              };
              var Kn = function(e) {
                return this.__data__.has(e);
              };
              function Gn(e) {
                var t = -1,
                  n = null == e ? 0 : e.length;
                for (this.__data__ = new Vn(); ++t < n; ) this.add(e[t]);
              }
              (Gn.prototype.add = Gn.prototype.push = qn),
                (Gn.prototype.has = Kn);
              var Jn = Gn;
              var Zn = function(e, t, n, r) {
                for (
                  var a = e.length, i = n + (r ? 1 : -1);
                  r ? i-- : ++i < a;

                )
                  if (t(e[i], i, e)) return i;
                return -1;
              };
              var Qn = function(e) {
                return e != e;
              };
              var Xn = function(e, t, n) {
                for (var r = n - 1, a = e.length; ++r < a; )
                  if (e[r] === t) return r;
                return -1;
              };
              var er = function(e, t, n) {
                return t == t ? Xn(e, t, n) : Zn(e, Qn, n);
              };
              var tr = function(e, t) {
                return !!(null == e ? 0 : e.length) && er(e, t, 0) > -1;
              };
              var nr = function(e, t, n) {
                for (var r = -1, a = null == e ? 0 : e.length; ++r < a; )
                  if (n(t, e[r])) return !0;
                return !1;
              };
              var rr = function(e, t) {
                for (
                  var n = -1, r = null == e ? 0 : e.length, a = Array(r);
                  ++n < r;

                )
                  a[n] = t(e[n], n, e);
                return a;
              };
              var ar = function(e) {
                return function(t) {
                  return e(t);
                };
              };
              var ir = function(e, t) {
                return e.has(t);
              };
              var or = function(e, t, n, r) {
                var a = -1,
                  i = tr,
                  o = !0,
                  l = e.length,
                  s = [],
                  c = t.length;
                if (!l) return s;
                n && (t = rr(t, ar(n))),
                  r
                    ? ((i = nr), (o = !1))
                    : t.length >= 200 && ((i = ir), (o = !1), (t = new Jn(t)));
                e: for (; ++a < l; ) {
                  var u = e[a],
                    m = null == n ? u : n(u);
                  if (((u = r || 0 !== u ? u : 0), o && m == m)) {
                    for (var d = c; d--; ) if (t[d] === m) continue e;
                    s.push(u);
                  } else i(t, m, r) || s.push(u);
                }
                return s;
              };
              var lr = function(e, t) {
                for (var n = -1, r = t.length, a = e.length; ++n < r; )
                  e[a + n] = t[n];
                return e;
              };
              var sr = function(e) {
                return null != e && "object" == typeof e;
              };
              var cr = function(e) {
                  return sr(e) && "[object Arguments]" == Qt(e);
                },
                ur = Object.prototype,
                mr = ur.hasOwnProperty,
                dr = ur.propertyIsEnumerable,
                _r = cr(
                  (function() {
                    return arguments;
                  })()
                )
                  ? cr
                  : function(e) {
                      return (
                        sr(e) && mr.call(e, "callee") && !dr.call(e, "callee")
                      );
                    },
                pr = Array.isArray,
                fr = Bt ? Bt.isConcatSpreadable : void 0;
              var hr = function(e) {
                return pr(e) || _r(e) || !!(fr && e && e[fr]);
              };
              var gr = function e(t, n, r, a, i) {
                var o = -1,
                  l = t.length;
                for (r || (r = hr), i || (i = []); ++o < l; ) {
                  var s = t[o];
                  n > 0 && r(s)
                    ? n > 1
                      ? e(s, n - 1, r, a, i)
                      : lr(i, s)
                    : a || (i[i.length] = s);
                }
                return i;
              };
              var vr = function(e) {
                return e;
              };
              var yr = function(e, t, n) {
                  switch (n.length) {
                    case 0:
                      return e.call(t);
                    case 1:
                      return e.call(t, n[0]);
                    case 2:
                      return e.call(t, n[0], n[1]);
                    case 3:
                      return e.call(t, n[0], n[1], n[2]);
                  }
                  return e.apply(t, n);
                },
                br = Math.max;
              var Ar = function(e, t, n) {
                return (
                  (t = br(void 0 === t ? e.length - 1 : t, 0)),
                  function() {
                    for (
                      var r = arguments,
                        a = -1,
                        i = br(r.length - t, 0),
                        o = Array(i);
                      ++a < i;

                    )
                      o[a] = r[t + a];
                    a = -1;
                    for (var l = Array(t + 1); ++a < t; ) l[a] = r[a];
                    return (l[t] = n(o)), yr(e, this, l);
                  }
                );
              };
              var wr = function(e) {
                  return function() {
                    return e;
                  };
                },
                Er = (function() {
                  try {
                    var e = hn(Object, "defineProperty");
                    return e({}, "", {}), e;
                  } catch (e) {}
                })(),
                xr = Er
                  ? function(e, t) {
                      return Er(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: wr(t),
                        writable: !0
                      });
                    }
                  : vr,
                Sr = Date.now;
              var Nr = (function(e) {
                var t = 0,
                  n = 0;
                return function() {
                  var r = Sr(),
                    a = 16 - (r - n);
                  if (((n = r), a > 0)) {
                    if (++t >= 800) return arguments[0];
                  } else t = 0;
                  return e.apply(void 0, arguments);
                };
              })(xr);
              var kr = function(e) {
                return (
                  "number" == typeof e &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e <= 9007199254740991
                );
              };
              var Or = function(e) {
                return null != e && kr(e.length) && !tn(e);
              };
              var Cr = function(e) {
                  return sr(e) && Or(e);
                },
                jr = (function(e, t) {
                  return Nr(Ar(e, t, vr), e + "");
                })(function(e, t) {
                  return Cr(e) ? or(e, gr(t, 1, Cr, !0)) : [];
                });
              function Tr(e) {
                const [t, n] = Object(a.useState)(!1),
                  [r, o] = Object(a.useState)(!0),
                  [l, c] = Object(a.useState)(null),
                  [m, d] = i.a.useState([]),
                  _ = i.a.useRef(null),
                  [p, f] = i.a.useState(null),
                  [h, g] = Object(a.useState)(null),
                  [v, y] = Object(a.useState)(null),
                  [b, A] = Object(a.useState)(null),
                  [w, E] = Object(a.useState)(null),
                  [x, S] = Object(a.useState)(null),
                  [N, k] = Object(a.useState)(null),
                  [O, C] = Object(a.useState)(null),
                  [j, T] = Object(a.useState)(null),
                  [D, M] = Object(a.useState)(null),
                  [I, U] = Object(a.useState)(null),
                  [F, P, R, H] = Object(me.useCurrentPatient)(),
                  [W, Y] = Object(a.useState)();
                let L = Object(s.useHistory)(),
                  B = Object(s.useRouteMatch)();
                i.a.useEffect(() => {
                  if (R) {
                    const e = new AbortController();
                    return (
                      (function(e, t) {
                        return Object(
                          me.openmrsFetch
                        )(
                          "/ws/rest/v1/encounter?patient=".concat(
                            e,
                            "&v=custom:(uuid,encounterDatetime,obs:(uuid,value))"
                          ),
                          { signal: t.signal }
                        );
                      })(R, e).then(e => {
                        e.data.results.length > 0 &&
                          (T(e.data.results[0].encounterDatetime),
                          M(e.data.results[0].encounterDatetime),
                          c(e.data.results[0].obs),
                          d(e.data.results[0].obs),
                          U(e.data.results[0].uuid));
                      }, Object(Ue.createErrorHandler)()),
                      (function(e) {
                        return Object(
                          me.openmrsFetch
                        )("/ws/rest/v1/appui/session", { signal: e.signal });
                      })(e).then(e => {
                        f(e.data.currentProvider.uuid), Y(e.data);
                      }, Object(Ue.createErrorHandler)()),
                      () => e.signal
                    );
                  }
                }, [R]),
                  i.a.useEffect(() => {
                    B.params.vitalsUuid ? o(!0) : o(!1);
                  }, [B.params]),
                  i.a.useEffect(() => {
                    r || n(!(h || v || b || w || x || N || O));
                  }, [h, v, b, w, x, N, O, j, D, r]),
                  i.a.useEffect(() => {
                    n(!1);
                  }, []);
                const z = (e, t) => {
                    d(
                      m.map(n =>
                        n.uuid === e ? { uuid: n.uuid, value: t } : n
                      )
                    );
                  },
                  $ = e => {
                    e.preventDefault();
                    let t = {
                      systolicBloodPressure: h,
                      diastolicBloodPressure: v,
                      heartRate: b,
                      oxygenSaturation: w,
                      temperature: x,
                      weight: N,
                      height: O
                    };
                    const n = new AbortController();
                    return (
                      (function(e, t, n, r, a) {
                        return Object(me.openmrsFetch)(
                          "/ws/rest/v1/encounter",
                          {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            signal: r.signal,
                            body: {
                              encounterDatetime: n,
                              encounterProviders: [
                                {
                                  provider:
                                    "f9badd80-ab76-11e2-9e96-0800200c9a66",
                                  encounterRole:
                                    "240b26f9-dd88-4172-823d-4a8bfeb7841f"
                                }
                              ],
                              location: "b1a8b05e-3542-4037-bbd3-998ee9c40574",
                              patient: e,
                              encounterType:
                                "67a71486-1a54-468f-ac3e-7091a9a79584",
                              form: "a000cb34-9ec1-4344-a1c8-f692232f6edd",
                              obs: [
                                {
                                  concept:
                                    "5085AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                  value: t.systolicBloodPressure
                                },
                                {
                                  concept:
                                    "5086AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                  value: t.diastolicBloodPressure
                                },
                                {
                                  concept:
                                    "5087AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                  value: t.heartRate
                                },
                                {
                                  concept:
                                    "5092AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                  value: t.oxygenSaturation
                                },
                                {
                                  concept:
                                    "5088AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                  value: t.temperature
                                },
                                {
                                  concept:
                                    "5089AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                  value: t.weight
                                },
                                {
                                  concept:
                                    "5090AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                  value: t.height
                                }
                              ],
                              orders: []
                            }
                          }
                        );
                      })(R, t, new Date("".concat(j)), n).then(e => {
                        201 == e.status && V();
                      }, Object(Ue.createErrorHandler)()),
                      () => n.abort()
                    );
                  };
                function V() {
                  L.push("/patient/".concat(R, "/chart/vitals"));
                }
                const q = e => {
                    e.preventDefault();
                    const t = new AbortController();
                    const n = jr(m, l);
                    (function(e, t, n, r, a, i) {
                      return Object(
                        me.openmrsFetch
                      )("/ws/rest/v1/encounter/".concat(a), {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        signal: r.signal,
                        body: {
                          encounterDatetime: n,
                          encounterProviders: [
                            {
                              provider: i,
                              encounterRole:
                                "240b26f9-dd88-4172-823d-4a8bfeb7841f"
                            }
                          ],
                          location: "b1a8b05e-3542-4037-bbd3-998ee9c40574",
                          patient: e,
                          encounterType: "67a71486-1a54-468f-ac3e-7091a9a79584",
                          form: "a000cb34-9ec1-4344-a1c8-f692232f6edd",
                          uuid: a,
                          obs: t,
                          orders: []
                        }
                      });
                    })(R, n, new Date("".concat(j)), t, I, p).then(e => {
                      200 == e.status && V();
                    }, Object(Ue.createErrorHandler)());
                  },
                  K = e => {
                    _.current.reset();
                  };
                return i.a.createElement(
                  "div",
                  null,
                  r
                    ? i.a.createElement(
                        "form",
                        { className: Dt.a.vitalsForm, ref: _, onSubmit: q },
                        i.a.createElement(
                          u,
                          {
                            name: "Edit Vitals",
                            styles: {
                              width: "100%",
                              backgroundColor:
                                "var(--omrs-color-bg-medium-contrast)",
                              height: "auto"
                            }
                          },
                          l &&
                            i.a.createElement(
                              "div",
                              { className: Dt.a.vitalsContainerWrapper },
                              i.a.createElement(
                                "div",
                                { style: { flex: 1, margin: "0rem 0.5rem" } },
                                i.a.createElement(
                                  "div",
                                  { className: Dt.a.vitalInputContainer },
                                  i.a.createElement(
                                    "label",
                                    { htmlFor: "dateRecorded" },
                                    "Date recorded"
                                  ),
                                  i.a.createElement(
                                    "div",
                                    { className: "omrs-datepicker" },
                                    i.a.createElement("input", {
                                      type: "date",
                                      name: "datepicker",
                                      className: Dt.a.vitalInputControl,
                                      defaultValue: We()(j).format(
                                        "YYYY-MM-DD"
                                      ),
                                      onChange: e => T(e.target.value)
                                    }),
                                    i.a.createElement(
                                      "svg",
                                      { className: "omrs-icon", role: "img" },
                                      i.a.createElement("use", {
                                        xlinkHref: "#omrs-icon-calendar"
                                      })
                                    )
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: Dt.a.vitalInputContainer },
                                  i.a.createElement(
                                    "label",
                                    {
                                      htmlFor: "BloodPressure",
                                      style: {
                                        marginTop: "0.5rem",
                                        marginBottom: "0rem"
                                      }
                                    },
                                    "Blood Pressure"
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: Dt.a.vitalsContainer },
                                  i.a.createElement(
                                    "div",
                                    { className: Dt.a.vitalInputContainer },
                                    i.a.createElement(
                                      "label",
                                      { htmlFor: "systolic" },
                                      "Systolic"
                                    ),
                                    i.a.createElement(
                                      "div",
                                      null,
                                      i.a.createElement("input", {
                                        type: "number",
                                        name: "systolicBloodPressure",
                                        id: l[6].uuid,
                                        className: Dt.a.vitalInputControl,
                                        defaultValue: l[6].value,
                                        required: !0,
                                        onChange: e =>
                                          z(e.target.id, e.target.value)
                                      }),
                                      i.a.createElement("span", null, "mmHg")
                                    )
                                  ),
                                  i.a.createElement(
                                    "div",
                                    { className: Dt.a.vitalInputContainer },
                                    i.a.createElement(
                                      "span",
                                      { className: Dt.a.forwardSlash },
                                      "/"
                                    )
                                  ),
                                  i.a.createElement(
                                    "div",
                                    { className: Dt.a.vitalInputContainer },
                                    i.a.createElement(
                                      "label",
                                      { htmlFor: "diastolic" },
                                      "Diastolic"
                                    ),
                                    i.a.createElement(
                                      "div",
                                      null,
                                      i.a.createElement("input", {
                                        type: "number",
                                        name: "diastolicBloodPressure",
                                        id: l[5].uuid,
                                        className: Dt.a.vitalInputControl,
                                        defaultValue: l[5].value,
                                        required: !0,
                                        onChange: e =>
                                          z(e.target.id, e.target.value)
                                      }),
                                      i.a.createElement("span", null, "mmHg")
                                    )
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: Dt.a.vitalInputContainer },
                                  i.a.createElement(
                                    "label",
                                    { htmlFor: "heartRate" },
                                    "Heart Rate"
                                  ),
                                  i.a.createElement(
                                    "div",
                                    null,
                                    i.a.createElement("input", {
                                      type: "number",
                                      name: "heartRate",
                                      id: l[4].uuid,
                                      className: Dt.a.vitalInputControl,
                                      defaultValue: l[4].value,
                                      required: !0,
                                      onChange: e =>
                                        z(e.target.id, e.target.value)
                                    }),
                                    i.a.createElement("span", null, "bpm")
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: Dt.a.vitalInputContainer },
                                  i.a.createElement(
                                    "label",
                                    { htmlFor: "oxygenSaturation" },
                                    "Oxygen saturation"
                                  ),
                                  i.a.createElement(
                                    "div",
                                    null,
                                    i.a.createElement("input", {
                                      type: "number",
                                      name: "oxygensaturation",
                                      id: l[1].uuid,
                                      className: Dt.a.vitalInputControl,
                                      defaultValue: l[1].value,
                                      required: !0,
                                      onChange: e =>
                                        z(e.target.id, e.target.value)
                                    }),
                                    i.a.createElement("span", null, "%")
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: Dt.a.vitalsContainer },
                                  i.a.createElement(
                                    "div",
                                    { className: Dt.a.vitalInputContainer },
                                    i.a.createElement(
                                      "label",
                                      { htmlFor: "temperature" },
                                      "Temperature"
                                    ),
                                    i.a.createElement(
                                      "div",
                                      null,
                                      i.a.createElement("input", {
                                        type: "number",
                                        name: "temperature",
                                        id: l[2].uuid,
                                        className: Dt.a.vitalInputControl,
                                        defaultValue: l[2].value,
                                        required: !0,
                                        onChange: e =>
                                          z(e.target.id, e.target.value)
                                      }),
                                      i.a.createElement("span", null, "℃")
                                    )
                                  ),
                                  i.a.createElement(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        alignItems: "center",
                                        width: "100%",
                                        marginTop: "1rem",
                                        marginLeft: "1rem"
                                      }
                                    },
                                    i.a.createElement(
                                      "div",
                                      { className: "toggleSwitch" },
                                      i.a.createElement("input", {
                                        type: "radio",
                                        name: "toggleButton",
                                        id: "toggleButton1",
                                        defaultChecked: !0
                                      }),
                                      i.a.createElement(
                                        "label",
                                        { htmlFor: "toggleButton1" },
                                        "Celcius"
                                      ),
                                      i.a.createElement("input", {
                                        type: "radio",
                                        name: "toggleButton",
                                        id: "toggleButton2"
                                      }),
                                      i.a.createElement(
                                        "label",
                                        { htmlFor: "toggleButton2" },
                                        "Fahrenheit"
                                      )
                                    )
                                  )
                                )
                              ),
                              i.a.createElement(
                                "div",
                                { style: { flex: 1, margin: "0rem 0.5rem" } },
                                i.a.createElement(
                                  "div",
                                  { className: Dt.a.vitalInputContainer },
                                  i.a.createElement(
                                    "label",
                                    { htmlFor: "timeRecorded" },
                                    "Time recorded"
                                  ),
                                  i.a.createElement(
                                    "div",
                                    { className: "omrs-datepicker" },
                                    i.a.createElement("input", {
                                      type: "time",
                                      name: "timeRecorded",
                                      className: Dt.a.vitalInputControl,
                                      defaultValue: We()(D).format("HH:MM"),
                                      onChange: e => M(e.target.value)
                                    }),
                                    i.a.createElement(
                                      "svg",
                                      { className: "omrs-icon", role: "img" },
                                      i.a.createElement("use", {
                                        xlinkHref: "#omrs-icon-access-time"
                                      })
                                    )
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  {
                                    className: Dt.a.vitalsContainer,
                                    style: { marginTop: "2.8rem" }
                                  },
                                  i.a.createElement(
                                    "div",
                                    { className: Dt.a.vitalInputContainer },
                                    i.a.createElement(
                                      "label",
                                      { htmlFor: "weight" },
                                      "Weight"
                                    ),
                                    i.a.createElement(
                                      "div",
                                      null,
                                      i.a.createElement("input", {
                                        type: "number",
                                        name: "weight",
                                        id: l[0].uuid,
                                        className: Dt.a.vitalInputControl,
                                        defaultValue: l[0].value,
                                        required: !0,
                                        onChange: e =>
                                          z(e.target.id, e.target.value)
                                      }),
                                      i.a.createElement("span", null, "Kg")
                                    )
                                  ),
                                  i.a.createElement(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        alignItems: "center",
                                        width: "100%",
                                        marginTop: "1rem",
                                        marginLeft: "1rem"
                                      }
                                    },
                                    i.a.createElement(
                                      "div",
                                      { className: "toggleSwitch" },
                                      i.a.createElement("input", {
                                        type: "radio",
                                        name: "toggleWeight",
                                        id: "toggleWeight1",
                                        defaultChecked: !0
                                      }),
                                      i.a.createElement(
                                        "label",
                                        { htmlFor: "toggleWeight1" },
                                        "Kg"
                                      ),
                                      i.a.createElement("input", {
                                        type: "radio",
                                        name: "toggleWeight",
                                        id: "toggleWeight2"
                                      }),
                                      i.a.createElement(
                                        "label",
                                        { htmlFor: "toggleWeight2" },
                                        "lbs"
                                      )
                                    )
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: Dt.a.vitalsContainer },
                                  i.a.createElement(
                                    "div",
                                    { className: Dt.a.vitalInputContainer },
                                    i.a.createElement(
                                      "label",
                                      { htmlFor: "systolic" },
                                      "Height"
                                    ),
                                    i.a.createElement(
                                      "div",
                                      null,
                                      i.a.createElement("input", {
                                        type: "number",
                                        name: "height",
                                        id: l[3].uuid,
                                        className: Dt.a.vitalInputControl,
                                        defaultValue: l[3].value,
                                        required: !0,
                                        onChange: e =>
                                          z(e.target.id, e.target.value)
                                      }),
                                      i.a.createElement("span", null, "cm")
                                    )
                                  ),
                                  i.a.createElement(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        alignItems: "center",
                                        width: "100%",
                                        marginTop: "1rem",
                                        marginLeft: "1rem"
                                      }
                                    },
                                    i.a.createElement(
                                      "div",
                                      { className: "toggleSwitch" },
                                      i.a.createElement("input", {
                                        type: "radio",
                                        name: "toggleHeight",
                                        id: "toggleHeight1",
                                        defaultChecked: !0
                                      }),
                                      i.a.createElement(
                                        "label",
                                        { htmlFor: "toggleHeight1" },
                                        "cm"
                                      ),
                                      i.a.createElement("input", {
                                        type: "radio",
                                        name: "toggleHeight",
                                        id: "toggleHeight2"
                                      }),
                                      i.a.createElement(
                                        "label",
                                        { htmlFor: "toggleHeight2" },
                                        "feet"
                                      )
                                    )
                                  )
                                )
                              )
                            )
                        ),
                        i.a.createElement(
                          "div",
                          {
                            className: t
                              ? Dt.a.buttonStyles
                              : ""
                                  .concat(Dt.a.buttonStyles, " ")
                                  .concat(Dt.a.buttonStylesBorder)
                          },
                          i.a.createElement(
                            "button",
                            {
                              type: "button",
                              className:
                                "omrs-btn omrs-outlined-neutral omrs-rounded",
                              style: { width: "20%" }
                            },
                            "Delete"
                          ),
                          i.a.createElement(
                            "button",
                            {
                              type: "button",
                              className:
                                "omrs-btn omrs-outlined-neutral omrs-rounded",
                              style: { width: "30%" },
                              onClick: K
                            },
                            "Cancel"
                          ),
                          i.a.createElement(
                            "button",
                            {
                              type: "submit",
                              className: t
                                ? "omrs-btn omrs-outlined omrs-rounded"
                                : "omrs-btn omrs-filled-action omrs-rounded",
                              disabled: t,
                              style: { width: "50%" }
                            },
                            "Sign & Save"
                          )
                        )
                      )
                    : i.a.createElement(
                        "form",
                        { className: Dt.a.vitalsForm, onSubmit: $, ref: _ },
                        i.a.createElement(
                          u,
                          {
                            name: "Add vitals, weight and height",
                            styles: {
                              width: "100%",
                              backgroundColor:
                                "var(--omrs-color-bg-medium-contrast)",
                              height: "auto"
                            }
                          },
                          i.a.createElement(
                            "div",
                            { className: Dt.a.vitalsContainerWrapper },
                            i.a.createElement(
                              "div",
                              { style: { flex: 1, margin: "0rem 0.5rem" } },
                              i.a.createElement(
                                "div",
                                { className: Dt.a.vitalInputContainer },
                                i.a.createElement(
                                  "label",
                                  { htmlFor: "dateRecorded" },
                                  "Date recorded"
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: "omrs-datepicker" },
                                  i.a.createElement("input", {
                                    type: "date",
                                    name: "datepicker",
                                    className: Dt.a.vitalInputControl,
                                    required: !0,
                                    onChange: e => T(e.target.value),
                                    defaultValue: We()(new Date()).format(
                                      "YYYY-MM-DD"
                                    )
                                  }),
                                  i.a.createElement(
                                    "svg",
                                    { className: "omrs-icon", role: "img" },
                                    i.a.createElement("use", {
                                      xlinkHref: "#omrs-icon-calendar"
                                    })
                                  )
                                )
                              ),
                              i.a.createElement(
                                "div",
                                { className: Dt.a.vitalInputContainer },
                                i.a.createElement(
                                  "label",
                                  {
                                    htmlFor: "BloodPressure",
                                    style: {
                                      marginTop: "0.5rem",
                                      marginBottom: "0rem"
                                    }
                                  },
                                  "Blood Pressure"
                                )
                              ),
                              i.a.createElement(
                                "div",
                                { className: Dt.a.vitalsContainer },
                                i.a.createElement(
                                  "div",
                                  { className: Dt.a.vitalInputContainer },
                                  i.a.createElement(
                                    "label",
                                    { htmlFor: "systolic" },
                                    "Systolic"
                                  ),
                                  i.a.createElement(
                                    "div",
                                    null,
                                    i.a.createElement("input", {
                                      type: "number",
                                      name: "systolicBloodPressure",
                                      id:
                                        "d4d45a89-acef-4811-a3bb-989351d3fa90",
                                      className: Dt.a.vitalInputControl,
                                      onChange: e => g(e.target.value),
                                      autoComplete: "off"
                                    })
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: Dt.a.vitalInputContainer },
                                  i.a.createElement(
                                    "span",
                                    { className: Dt.a.forwardSlash },
                                    "/"
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: Dt.a.vitalInputContainer },
                                  i.a.createElement(
                                    "label",
                                    { htmlFor: "systolic" },
                                    "Diastolic"
                                  ),
                                  i.a.createElement(
                                    "div",
                                    null,
                                    i.a.createElement("input", {
                                      type: "number",
                                      name: "diastolicBloodPressure",
                                      id:
                                        "b5a56b03-412d-4c5d-83d4-af7bfed69059",
                                      className: Dt.a.vitalInputControl,
                                      onChange: e => y(e.target.value),
                                      autoComplete: "off"
                                    })
                                  )
                                )
                              ),
                              i.a.createElement(
                                "div",
                                { className: Dt.a.vitalInputContainer },
                                i.a.createElement(
                                  "label",
                                  { htmlFor: "heartRate" },
                                  "Heart Rate"
                                ),
                                i.a.createElement(
                                  "div",
                                  null,
                                  i.a.createElement("input", {
                                    type: "number",
                                    name: "heartRate",
                                    id: "heartRate",
                                    className: Dt.a.vitalInputControl,
                                    onChange: e => A(e.target.value),
                                    autoComplete: "off"
                                  })
                                )
                              ),
                              i.a.createElement(
                                "div",
                                { className: Dt.a.vitalInputContainer },
                                i.a.createElement(
                                  "label",
                                  { htmlFor: "oxygenSaturation" },
                                  "Oxygen saturation"
                                ),
                                i.a.createElement(
                                  "div",
                                  null,
                                  i.a.createElement("input", {
                                    type: "number",
                                    name: "oxygensaturation",
                                    id: "oxygensaturation",
                                    className: Dt.a.vitalInputControl,
                                    onChange: e => E(e.target.value),
                                    autoComplete: "off"
                                  })
                                )
                              ),
                              i.a.createElement(
                                "div",
                                { className: Dt.a.vitalsContainer },
                                i.a.createElement(
                                  "div",
                                  {
                                    className: Dt.a.vitalInputContainer,
                                    style: { flex: 1 }
                                  },
                                  i.a.createElement(
                                    "label",
                                    { htmlFor: "systolic" },
                                    "Temperature"
                                  ),
                                  i.a.createElement(
                                    "div",
                                    null,
                                    i.a.createElement("input", {
                                      type: "number",
                                      name: "temperature",
                                      id: "tempurature",
                                      className: Dt.a.vitalInputControl,
                                      onChange: e => S(e.target.value),
                                      autoComplete: "off"
                                    })
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  {
                                    style: {
                                      display: "flex",
                                      alignItems: "center",
                                      width: "100%",
                                      marginTop: "1rem",
                                      marginLeft: "1rem",
                                      flex: 1
                                    }
                                  },
                                  i.a.createElement(
                                    "div",
                                    { className: "toggleSwitch" },
                                    i.a.createElement("input", {
                                      type: "radio",
                                      name: "toggleButton",
                                      id: "toggleButton1",
                                      defaultChecked: !0
                                    }),
                                    i.a.createElement(
                                      "label",
                                      { htmlFor: "toggleButton1" },
                                      "Celcius"
                                    ),
                                    i.a.createElement("input", {
                                      type: "radio",
                                      name: "toggleButton",
                                      id: "toggleButton2"
                                    }),
                                    i.a.createElement(
                                      "label",
                                      { htmlFor: "toggleButton2" },
                                      "Fahrenheit"
                                    )
                                  )
                                )
                              )
                            ),
                            i.a.createElement(
                              "div",
                              { style: { flex: 1, margin: "0rem 0.5rem" } },
                              i.a.createElement(
                                "div",
                                { className: Dt.a.vitalInputContainer },
                                i.a.createElement(
                                  "label",
                                  { htmlFor: "timeRecorded" },
                                  "Time recorded"
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: "omrs-datepicker" },
                                  i.a.createElement("input", {
                                    type: "time",
                                    name: "timeRecorded",
                                    className: Dt.a.vitalInputControl,
                                    required: !0,
                                    onChange: e => M(e.target.value),
                                    defaultValue: We()(new Date(), {
                                      utc: !0
                                    }).format("HH:MM")
                                  }),
                                  i.a.createElement(
                                    "svg",
                                    { className: "omrs-icon", role: "img" },
                                    i.a.createElement("use", {
                                      xlinkHref: "#omrs-icon-access-time"
                                    })
                                  )
                                )
                              ),
                              i.a.createElement(
                                "div",
                                {
                                  className: Dt.a.vitalsContainer,
                                  style: { marginTop: "2.8rem" }
                                },
                                i.a.createElement(
                                  "div",
                                  {
                                    className: Dt.a.vitalInputContainer,
                                    style: { flex: 1 }
                                  },
                                  i.a.createElement(
                                    "label",
                                    { htmlFor: "weight" },
                                    "Weight"
                                  ),
                                  i.a.createElement(
                                    "div",
                                    null,
                                    i.a.createElement("input", {
                                      type: "number",
                                      name: "weight",
                                      id: "weight",
                                      className: Dt.a.vitalInputControl,
                                      onChange: e => k(e.target.value),
                                      autoComplete: "off"
                                    })
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  {
                                    style: {
                                      display: "flex",
                                      alignItems: "center",
                                      width: "100%",
                                      marginTop: "1rem",
                                      marginLeft: "1rem",
                                      flex: 1
                                    }
                                  },
                                  i.a.createElement(
                                    "div",
                                    { className: "toggleSwitch" },
                                    i.a.createElement("input", {
                                      type: "radio",
                                      name: "toggleWeight",
                                      id: "toggleWeight1",
                                      defaultChecked: !0
                                    }),
                                    i.a.createElement(
                                      "label",
                                      { htmlFor: "toggleWeight1" },
                                      "Kg"
                                    ),
                                    i.a.createElement("input", {
                                      type: "radio",
                                      name: "toggleWeight",
                                      id: "toggleWeight2"
                                    }),
                                    i.a.createElement(
                                      "label",
                                      { htmlFor: "toggleWeight2" },
                                      "lbs"
                                    )
                                  )
                                )
                              ),
                              i.a.createElement(
                                "div",
                                { className: Dt.a.vitalsContainer },
                                i.a.createElement(
                                  "div",
                                  {
                                    className: Dt.a.vitalInputContainer,
                                    style: { flex: 1 }
                                  },
                                  i.a.createElement(
                                    "label",
                                    { htmlFor: "height" },
                                    "Height"
                                  ),
                                  i.a.createElement(
                                    "div",
                                    null,
                                    i.a.createElement("input", {
                                      type: "Number",
                                      name: "height",
                                      id: "height",
                                      className: Dt.a.vitalInputControl,
                                      onChange: e => C(e.target.value),
                                      autoComplete: "off"
                                    })
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  {
                                    style: {
                                      display: "flex",
                                      alignItems: "center",
                                      width: "100%",
                                      marginTop: "1rem",
                                      marginLeft: "1rem",
                                      flex: 1
                                    }
                                  },
                                  i.a.createElement(
                                    "div",
                                    { className: "toggleSwitch" },
                                    i.a.createElement("input", {
                                      type: "radio",
                                      name: "toggleHeight",
                                      id: "toggleHeight1",
                                      defaultChecked: !0
                                    }),
                                    i.a.createElement(
                                      "label",
                                      { htmlFor: "toggleHeight1" },
                                      "cm"
                                    ),
                                    i.a.createElement("input", {
                                      type: "radio",
                                      name: "toggleHeight",
                                      id: "toggleHeight2"
                                    }),
                                    i.a.createElement(
                                      "label",
                                      { htmlFor: "toggleHeight2" },
                                      "feet"
                                    )
                                  )
                                )
                              )
                            )
                          )
                        ),
                        i.a.createElement(
                          "div",
                          {
                            className: t
                              ? Dt.a.buttonStyles
                              : ""
                                  .concat(Dt.a.buttonStyles, " ")
                                  .concat(Dt.a.buttonStylesBorder)
                          },
                          i.a.createElement(
                            "button",
                            {
                              type: "button",
                              className:
                                "omrs-btn omrs-outlined-neutral omrs-rounded",
                              style: { width: "50%" },
                              onClick: K
                            },
                            "Cancel"
                          ),
                          i.a.createElement(
                            "button",
                            {
                              type: "submit",
                              style: { width: "50%" },
                              className: t
                                ? "omrs-btn omrs-outlined omrs-rounded"
                                : "omrs-btn omrs-filled-action omrs-rounded",
                              disabled: t
                            },
                            "Sign & Save"
                          )
                        )
                      )
                );
              }
              var Dr = function(e) {
                  const [t, n] = i.a.useState([]),
                    [r, a, o, l] = Object(me.useCurrentPatient)();
                  return (
                    i.a.useEffect(() => {
                      if (o) {
                        const e = xt(o).subscribe(e => n(e));
                        return () => e.unsubscribe();
                      }
                    }, [o]),
                    i.a.createElement(
                      "div",
                      {
                        style: {
                          display: "flex",
                          justifyContent: "center",
                          paddingTop: "3.25rem"
                        }
                      },
                      i.a.createElement(
                        u,
                        {
                          name: "Height & Weight",
                          styles: { flex: 1, margin: ".5rem" },
                          addComponent: Tr,
                          showComponent: () => {
                            return (
                              (e = Tr),
                              (t = "Vitals Form"),
                              void Object(me.newWorkspaceItem)({
                                component: e,
                                name: t,
                                props: { match: { params: {} } },
                                inProgress: !1,
                                validations: t =>
                                  t.findIndex(t => t.component === e)
                              })
                            );
                            var e, t;
                          }
                        },
                        i.a.createElement(
                          "table",
                          { className: jt.a.table },
                          i.a.createElement(
                            "thead",
                            null,
                            i.a.createElement(
                              "tr",
                              { className: jt.a.tableRow },
                              i.a.createElement("th", {
                                className: ""
                                  .concat(jt.a.tableHeader, " ")
                                  .concat(jt.a.tableDates)
                              }),
                              i.a.createElement(
                                "th",
                                { className: jt.a.tableHeader },
                                "Weight (kg)"
                              ),
                              i.a.createElement(
                                "th",
                                { className: jt.a.tableHeader },
                                "Height (cm)"
                              ),
                              i.a.createElement(
                                "th",
                                { className: jt.a.tableHeader },
                                "BMI (kg/m",
                                i.a.createElement("sup", null, "2"),
                                ")"
                              ),
                              i.a.createElement("th", null)
                            )
                          ),
                          i.a.createElement(
                            "tbody",
                            null,
                            t.map(e =>
                              i.a.createElement(
                                "tr",
                                { key: e.id, className: jt.a.tableRow },
                                i.a.createElement(
                                  "td",
                                  {
                                    className: jt.a.tableData,
                                    style: { textAlign: "start" }
                                  },
                                  i.a.createElement(
                                    "span",
                                    { style: { fontWeight: 500 } },
                                    e.date.split(" ")[0]
                                  ),
                                  " ",
                                  e.date.slice(
                                    e.date.indexOf(" ") + 1,
                                    e.date.length
                                  )
                                ),
                                i.a.createElement(
                                  "td",
                                  { className: jt.a.tableData },
                                  e.weight || "—"
                                ),
                                i.a.createElement(
                                  "td",
                                  { className: jt.a.tableData },
                                  e.height || "—"
                                ),
                                i.a.createElement(
                                  "td",
                                  { className: jt.a.tableData },
                                  e.bmi || "—"
                                ),
                                i.a.createElement(
                                  "td",
                                  { style: { textAlign: "end" } },
                                  i.a.createElement(
                                    s.Link,
                                    {
                                      to: "?tab=Height%20and%20Weight&uuid=".concat(
                                        e.obsData.weight.uuid
                                      )
                                    },
                                    i.a.createElement(
                                      "svg",
                                      {
                                        className: "omrs-icon",
                                        fill:
                                          "var(--omrs-color-ink-low-contrast)"
                                      },
                                      i.a.createElement("use", {
                                        xlinkHref: "#omrs-icon-chevron-right"
                                      })
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
                Mr = n(25),
                Ir = n.n(Mr),
                Ur = Object.prototype;
              var Fr = function(e) {
                var t = e && e.constructor;
                return e === (("function" == typeof t && t.prototype) || Ur);
              };
              var Pr = (function(e, t) {
                  return function(n) {
                    return e(t(n));
                  };
                })(Object.keys, Object),
                Rr = Object.prototype.hasOwnProperty;
              var Hr = function(e) {
                  if (!Fr(e)) return Pr(e);
                  var t = [];
                  for (var n in Object(e))
                    Rr.call(e, n) && "constructor" != n && t.push(n);
                  return t;
                },
                Wr = hn(Lt.a, "DataView"),
                Yr = hn(Lt.a, "Promise"),
                Lr = hn(Lt.a, "Set"),
                Br = hn(Lt.a, "WeakMap"),
                zr = ln(Wr),
                $r = ln(Pn),
                Vr = ln(Yr),
                qr = ln(Lr),
                Kr = ln(Br),
                Gr = Qt;
              ((Wr && "[object DataView]" != Gr(new Wr(new ArrayBuffer(1)))) ||
                (Pn && "[object Map]" != Gr(new Pn())) ||
                (Yr && "[object Promise]" != Gr(Yr.resolve())) ||
                (Lr && "[object Set]" != Gr(new Lr())) ||
                (Br && "[object WeakMap]" != Gr(new Br()))) &&
                (Gr = function(e) {
                  var t = Qt(e),
                    n = "[object Object]" == t ? e.constructor : void 0,
                    r = n ? ln(n) : "";
                  if (r)
                    switch (r) {
                      case zr:
                        return "[object DataView]";
                      case $r:
                        return "[object Map]";
                      case Vr:
                        return "[object Promise]";
                      case qr:
                        return "[object Set]";
                      case Kr:
                        return "[object WeakMap]";
                    }
                  return t;
                });
              var Jr = Gr,
                Zr = n(52),
                Qr = {};
              (Qr["[object Float32Array]"] = Qr["[object Float64Array]"] = Qr[
                "[object Int8Array]"
              ] = Qr["[object Int16Array]"] = Qr["[object Int32Array]"] = Qr[
                "[object Uint8Array]"
              ] = Qr["[object Uint8ClampedArray]"] = Qr[
                "[object Uint16Array]"
              ] = Qr["[object Uint32Array]"] = !0),
                (Qr["[object Arguments]"] = Qr["[object Array]"] = Qr[
                  "[object ArrayBuffer]"
                ] = Qr["[object Boolean]"] = Qr["[object DataView]"] = Qr[
                  "[object Date]"
                ] = Qr["[object Error]"] = Qr["[object Function]"] = Qr[
                  "[object Map]"
                ] = Qr["[object Number]"] = Qr["[object Object]"] = Qr[
                  "[object RegExp]"
                ] = Qr["[object Set]"] = Qr["[object String]"] = Qr[
                  "[object WeakMap]"
                ] = !1);
              var Xr = function(e) {
                  return sr(e) && kr(e.length) && !!Qr[Qt(e)];
                },
                ea = n(44),
                ta = ea.a && ea.a.isTypedArray,
                na = ta ? ar(ta) : Xr,
                ra = Object.prototype.hasOwnProperty;
              var aa = function(e) {
                if (null == e) return !0;
                if (
                  Or(e) &&
                  (pr(e) ||
                    "string" == typeof e ||
                    "function" == typeof e.splice ||
                    Object(Zr.a)(e) ||
                    na(e) ||
                    _r(e))
                )
                  return !e.length;
                var t = Jr(e);
                if ("[object Map]" == t || "[object Set]" == t) return !e.size;
                if (Fr(e)) return !Hr(e).length;
                for (var n in e) if (ra.call(e, n)) return !1;
                return !0;
              };
              function ia(e) {
                const [t, n] = Object(a.useState)({}),
                  [r, o, l, s] = Object(me.useCurrentPatient)();
                return (
                  Object(a.useEffect)(() => {
                    xt(l).subscribe(t => {
                      n(t.find(t => t.obsData.weight.uuid === e.uuid));
                    });
                  }, [e.uuid, l, r]),
                  aa(t)
                    ? i.a.createElement(
                        u,
                        { name: "Height & Weight", styles: { width: "100%" } },
                        i.a.createElement(
                          "div",
                          { className: Ir.a.heightAndWeightDetailedSummary },
                          i.a.createElement(
                            "p",
                            { className: "omrs-bold" },
                            "The patient's Height and Weight is not documented."
                          ),
                          i.a.createElement(
                            "p",
                            { className: "omrs-bold" },
                            "Please ",
                            i.a.createElement(
                              "a",
                              { href: "/" },
                              "add patient height and weight"
                            ),
                            "."
                          )
                        )
                      )
                    : i.a.createElement(
                        "div",
                        { className: Ir.a.heightAndWeightDetailedSummary },
                        i.a.createElement(
                          u,
                          {
                            name: "Height & Weight",
                            editBtnUrl: "/patient/dimensions",
                            styles: { width: "100%" }
                          },
                          i.a.createElement(
                            "div",
                            { className: Ir.a.heightAndWeightContainer },
                            !aa(t) &&
                              i.a.createElement(
                                "table",
                                { className: Ir.a.summaryTable },
                                i.a.createElement(
                                  "tbody",
                                  null,
                                  i.a.createElement(
                                    "tr",
                                    null,
                                    i.a.createElement(
                                      "td",
                                      null,
                                      "Measured at "
                                    ),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      [
                                        Et(
                                          t.obsData.weight.encounter
                                            .encounterDatetime,
                                          "DD-MMM-YYYY"
                                        ),
                                        Et(
                                          t.obsData.weight.encounter
                                            .encounterDatetime,
                                          "HH:mm A"
                                        )
                                      ].join(" ")
                                    )
                                  ),
                                  i.a.createElement(
                                    "tr",
                                    null,
                                    i.a.createElement("td", null, "Weight"),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      t.weight,
                                      " ",
                                      i.a.createElement("span", null, "Kg")
                                    ),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      (2.205 * t.weight).toFixed(2),
                                      " ",
                                      i.a.createElement("span", null, "lbs")
                                    )
                                  ),
                                  i.a.createElement(
                                    "tr",
                                    null,
                                    i.a.createElement("td", null, "Height"),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      t.height,
                                      " ",
                                      i.a.createElement("span", null, "cm")
                                    ),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      ((c = t.height),
                                      Math.floor(0.0328084 * c)),
                                      " ",
                                      i.a.createElement("span", null, "feet"),
                                      " ",
                                      (function(e) {
                                        return (
                                          12 *
                                          (0.0328084 * e -
                                            Math.floor(0.0328084 * e))
                                        ).toFixed(2);
                                      })(t.height),
                                      " ",
                                      i.a.createElement("span", null, "inches")
                                    )
                                  ),
                                  i.a.createElement(
                                    "tr",
                                    null,
                                    i.a.createElement("td", null, "BMI"),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      t.bmi,
                                      " ",
                                      i.a.createElement("span", null, "Kg/m2")
                                    )
                                  )
                                )
                              )
                          )
                        ),
                        i.a.createElement(
                          u,
                          {
                            name: "Details",
                            styles: {
                              width: "100%",
                              backgroundColor:
                                "var(--omrs-color-bg-medium-contrast)"
                            }
                          },
                          i.a.createElement(
                            "div",
                            {
                              className: "omrs-type-body-regular ".concat(
                                Ir.a.summaryCard
                              )
                            },
                            i.a.createElement(
                              "table",
                              { className: Ir.a.heightAndWeightDetailsTable },
                              i.a.createElement(
                                "thead",
                                null,
                                i.a.createElement(
                                  "tr",
                                  null,
                                  i.a.createElement("td", null, "Last updated"),
                                  i.a.createElement(
                                    "td",
                                    null,
                                    "Last updated by"
                                  ),
                                  i.a.createElement(
                                    "td",
                                    null,
                                    "Last updated location"
                                  )
                                )
                              ),
                              i.a.createElement(
                                "tbody",
                                null,
                                i.a.createElement(
                                  "tr",
                                  null,
                                  i.a.createElement("td", null, "-"),
                                  i.a.createElement("td", null, "-"),
                                  i.a.createElement("td", null, "-")
                                )
                              )
                            )
                          )
                        )
                      )
                );
                var c;
              }
              var oa = (function() {
                  function e() {
                    return (
                      Error.call(this),
                      (this.message = "argument out of range"),
                      (this.name = "ArgumentOutOfRangeError"),
                      this
                    );
                  }
                  return (e.prototype = Object.create(Error.prototype)), e;
                })(),
                la = new Pt(function(e) {
                  return e.complete();
                });
              function sa(e) {
                return e
                  ? (function(e) {
                      return new Pt(function(t) {
                        return e.schedule(function() {
                          return t.complete();
                        });
                      });
                    })(e)
                  : la;
              }
              function ca(e) {
                return function(t) {
                  return 0 === e ? sa() : t.lift(new ua(e));
                };
              }
              var ua = (function() {
                  function e(e) {
                    if (((this.total = e), this.total < 0)) throw new oa();
                  }
                  return (
                    (e.prototype.call = function(e, t) {
                      return t.subscribe(new ma(e, this.total));
                    }),
                    e
                  );
                })(),
                ma = (function(e) {
                  function t(t, n) {
                    var r = e.call(this, t) || this;
                    return (r.total = n), (r.count = 0), r;
                  }
                  return (
                    pe(t, e),
                    (t.prototype._next = function(e) {
                      var t = this.total,
                        n = ++this.count;
                      n <= t &&
                        (this.destination.next(e),
                        n === t &&
                          (this.destination.complete(), this.unsubscribe()));
                    }),
                    t
                  );
                })(Se);
              function da(e) {
                return Object(me.openmrsObservableFetch)(
                  "/ws/rest/v1/order?patient="
                    .concat(e, "&careSetting=")
                    .concat(
                      "6f0c9a92-6f24-11e3-af88-005056821db0",
                      "&status=ACTIVE&v=custom:(uuid,orderNumber,accessionNumber,patient:ref,action,careSetting:ref,previousOrder:ref,dateActivated,scheduledDate,dateStopped,autoExpireDate,orderType:ref,encounter:ref,orderer:ref,orderReason,orderType,urgency,instructions,commentToFulfiller,drug:(name,strength,concept),dose,doseUnits:ref,frequency:ref,asNeeded,asNeededCondition,quantity,quantityUnits:ref,numRefills,dosingInstructions,duration,durationUnits:ref,route:ref,brandName,dispenseAsWritten)"
                    )
                ).pipe(
                  ke(({ data: e }) => {
                    const t = [];
                    return (
                      e.results.map(e => {
                        "Drug Order" === e.orderType.name && t.push(e);
                      }),
                      t
                    );
                  })
                );
              }
              function _a(e, t) {
                return Object(me.openmrsFetch)(
                  "/ws/rest/v1/drug?q=".concat(
                    e,
                    "&v=custom:(uuid,name,strength,dosageForm:(display,uuid),concept)"
                  ),
                  { signal: t.signal }
                );
              }
              function pa(e, t) {
                return Object(me.openmrsFetch)(
                  "/ws/rest/v1/order/".concat(
                    t,
                    "?v=custom:(uuid,orderNumber,patient:(uuid),action,careSetting:(uuid),previousOrder:(uuid),dateActivated,encounter:(uuid),frequency,asNeeded,quantity,quantityUnits:(uuid,display),numRefills,dosingInstructions,duration,durationUnits:(uuid,display),route:(uuid,display),dose,doseUnits:(uuid,display),drug:(name,strength,uuid,concept:(uuid)),orderer:(uuid),concept)"
                  ),
                  { signal: e.signal }
                );
              }
              var fa = n(31),
                ha = n.n(fa);
              function ga(e, t) {
                const n = e.search(/\D/),
                  r = e.substring(0, n),
                  a = e.search(/\//);
                let i,
                  o = e.substring(n);
                if (a >= 0) {
                  o = e.substring(n, a);
                  const l = e.substring(a + 1).search(/\D/);
                  i =
                    t +
                    o +
                    " (" +
                    (t / r) * e.substr(a + 1, l) +
                    e.substring(a + 1 + l) +
                    ")";
                } else i = r * t + o;
                return i;
              }
              const va = (e, t) => {
                Object(me.newWorkspaceItem)({
                  component: e,
                  name: t,
                  props: {
                    match: {
                      params: { orderUuid: null, drugName: null, action: "NEW" }
                    }
                  },
                  inProgress: !1,
                  validations: t => t.findIndex(t => t.component === e)
                });
              };
              var ya = n(15),
                ba = n.n(ya),
                Aa = n(32),
                wa = n(10),
                Ea = n.n(wa),
                xa = n(54);
              const Sa = "e89cae4a-3cb3-40a2-b964-8b20dda2c985";
              function Na(e) {
                const [t, n] = Object(a.useState)([]),
                  [r, o] = Object(a.useState)(""),
                  [l, s] = Object(a.useState)(""),
                  [c, m] = Object(a.useState)(""),
                  [d, _] = Object(a.useState)(null),
                  [p, f] = Object(a.useState)(""),
                  [h, g] = Object(a.useState)(""),
                  [v, y] = Object(a.useState)(""),
                  [b, A] = Object(a.useState)(""),
                  [w, E] = Object(a.useState)(
                    "160240AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
                  ),
                  [x, S] = Object(a.useState)(null),
                  [N, k] = Object(a.useState)(!1),
                  [O, C] = Object(a.useState)(0),
                  [j, T] = Object(a.useState)("NEW"),
                  [D, M] = Object(a.useState)(null),
                  [I, U] = i.a.useState(0),
                  [F, P] = i.a.useState("1072AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
                  [R, H] = Object(a.useState)([]),
                  [W, Y] = Object(a.useState)(""),
                  [L, B] = Object(a.useState)(null),
                  [z, $] = i.a.useState(We()(new Date()).format("DD-MMM-YYYY")),
                  [V, q] = i.a.useState(We()(new Date()).format("DD-MMM-YYYY")),
                  [K, G, J, Z] = Object(me.useCurrentPatient)(),
                  [Q, X] = Object(a.useState)(null),
                  [ee, te] = Object(a.useState)(null);
                Object(a.useEffect)(() => {
                  const t = new AbortController();
                  var r;
                  return (
                    J &&
                      (_a(e.drugName, t).then(({ data: e }) => {
                        n(ne(e.results[0].uuid)),
                          s(e.results[0].name),
                          o(e.results[0].uuid),
                          f(e.results[0].dosageForm.uuid),
                          g(e.results[0].dosageForm.display),
                          B(e.results[0].strength),
                          te(e.results[0].concept.uuid);
                      }, Ue.createErrorHandler),
                      (function(e, t) {
                        return Object(
                          me.openmrsFetch
                        )(
                          "/ws/rest/v1/encounter?patient=".concat(
                            e,
                            "&order=desc&limit=1&v=custom:(uuid)"
                          ),
                          { signal: t.signal }
                        );
                      })(J, t).then(
                        ({ data: e }) => m(e.results[0].uuid),
                        Object(Ue.createErrorHandler)()
                      ),
                      ((r = t),
                      Object(me.openmrsFetch)(
                        "/ws/rest/v1/concept/".concat(
                          "1732AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                          "?v=custom:(answers:(uuid,display))"
                        ),
                        r
                      )).then(({ data: e }) => {
                        H(e.answers);
                      }, Object(Ue.createErrorHandler)())),
                    () => t.abort()
                  );
                }, [e.drugName, J]),
                  Object(a.useEffect)(() => {
                    if (z.length > 0 && R) {
                      let e = R.filter(e => e.uuid === F);
                      if (e.length > 0) {
                        let t = e[0].display.substring(
                          0,
                          e[0].display.lastIndexOf("s")
                        );
                        q(
                          We()(z)
                            .add(I, t)
                            .format("DD-MMM-YYYY")
                        );
                      } else
                        q(
                          We()(z)
                            .add(I, "day")
                            .format("DD-MMM-YYYY")
                        );
                    }
                  }, [z, F, R, I]),
                  Object(a.useEffect)(() => {
                    let n;
                    t.length > 0 &&
                      0 === e.editProperty.length &&
                      !1 === e.orderEdit.orderEdit &&
                      ((n = (function(e) {
                        let t, n, r, a;
                        return (
                          e &&
                            (e[0].commonFrequencies.map(e => {
                              !0 === e.selected && (t = e.conceptUuid);
                            }),
                            e[0].commonDosages.map(e => {
                              !0 === e.selected && (a = e.numberOfPills);
                            })),
                          e[0].route.map(e => {
                            !0 === e.selected &&
                              ((n = e.conceptUuid), (r = e.name));
                          }),
                          [
                            {
                              drugUnits: void 0,
                              frequencyConcept: t,
                              routeConcept: n,
                              dose: a,
                              routeName: r
                            }
                          ]
                        );
                      })(t)),
                      f(n[0].drugUnits),
                      y(n[0].frequencyConcept),
                      _(n[0].dose),
                      E(n[0].routeConcept),
                      S(n[0].routeName)),
                      e.editProperty.length;
                  }, [t, e.editProperty.length, e.orderEdit.orderEdit]),
                  Object(a.useEffect)(() => {
                    const t = new AbortController();
                    if (e.editProperty.length > 0)
                      return (
                        pa(t, e.editProperty[0].OrderUuid).then(
                          ({ data: e }) => {
                            m(e.encounter.uuid),
                              $(We()(e.dateActivated).format("DD-MMM-YYYY")),
                              Y(e.dosingInstructions),
                              f(e.doseUnits.uuid),
                              g(e.doseUnits.display),
                              E(e.route.uuid),
                              S(e.route.display),
                              _(e.dose),
                              U(e.duration),
                              A(e.frequency.display),
                              y(e.frequency.concept.uuid),
                              T("REVISE"),
                              C(e.numRefills),
                              null === e.previousOrder
                                ? X(e.uuid)
                                : X(e.previousOrder.uuid);
                          }
                        ),
                        () => t.abort()
                      );
                  }, [e.editProperty]),
                  Object(a.useEffect)(() => {
                    v &&
                      t.length > 0 &&
                      0 === e.editProperty.length &&
                      A(
                        t[0].commonFrequencies.find(e => e.conceptUuid === v)
                          .name
                      );
                  }, [t, v, e.editProperty.length]),
                  Object(a.useEffect)(() => {
                    if (e.orderEdit.orderEdit) {
                      const t = e.orderEdit.order;
                      m(t.encounterUuid),
                        $(We()(new Date()).format("DD-MMM-YYYY")),
                        Y(t.dosingInstructions),
                        f(t.doseUnitsConcept),
                        g(t.dosageForm),
                        E(t.route),
                        S(t.routeName),
                        _(Number(t.dose)),
                        U(Number(t.duration)),
                        A(t.frequencyName),
                        y(t.frequencyUuid),
                        T(t.action),
                        C(Number(t.numRefills)),
                        X(t.previousOrder);
                    }
                  }, [e.orderEdit]),
                  Object(a.useEffect)(() => {}, [e.orderEdit]);
                const ne = e => xa.filter(t => t.uuid === e);
                return i.a.createElement(
                  "form",
                  {
                    onSubmit: t => {
                      e.resetParams(),
                        t.preventDefault(),
                        "NEW" === j
                          ? e.setOrderBasket([
                              ...e.orderBasket,
                              {
                                patientUuid: J,
                                careSetting:
                                  "6f0c9a92-6f24-11e3-af88-005056821db0",
                                orderer: Sa,
                                encounterUuid: c,
                                drugUuid: r,
                                dose: d,
                                doseUnitsConcept: p,
                                route: w,
                                frequencyUuid: v,
                                asNeeded: N,
                                numRefills: O,
                                action: "NEW",
                                quantity: 1,
                                quantityUnits:
                                  "162396AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                type: "drugorder",
                                drugName: l,
                                duration: I,
                                durationUnits: F,
                                routeName: x,
                                dosageForm: h,
                                frequencyName: b,
                                drugStrength: L,
                                dosingInstructions: W,
                                dateStopped: V,
                                concept: ee
                              }
                            ])
                          : e.setOrderBasket([
                              ...e.orderBasket,
                              {
                                patientUuid: J,
                                careSetting:
                                  "6f0c9a92-6f24-11e3-af88-005056821db0",
                                orderer: Sa,
                                encounterUuid: c,
                                drugUuid: r,
                                dose: d,
                                doseUnitsConcept: p,
                                route: w,
                                frequencyUuid: v,
                                asNeeded: N,
                                numRefills: O,
                                action: "REVISE",
                                quantity: 1,
                                quantityUnits:
                                  "162396AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                                type: "drugorder",
                                drugName: l,
                                previousOrder: Q,
                                duration: I,
                                durationUnits: F,
                                routeName: x,
                                dosageForm: h,
                                frequencyName: b,
                                drugStrength: L,
                                dosingInstructions: W
                              }
                            ]),
                        e.hideModal();
                    },
                    className: Ea.a.medicationOrderWrapper
                  },
                  i.a.createElement(
                    u,
                    { name: "Order Medication", styles: { width: "100%" } },
                    i.a.createElement(
                      "div",
                      { className: Ea.a.medicationHeaderSummary },
                      i.a.createElement(
                        "table",
                        null,
                        i.a.createElement(
                          "tbody",
                          null,
                          i.a.createElement(
                            "tr",
                            null,
                            i.a.createElement("td", null, l, " – "),
                            i.a.createElement("td", null, x, " – "),
                            i.a.createElement("td", null, h, " –"),
                            i.a.createElement(
                              "td",
                              null,
                              "DOSE ",
                              i.a.createElement(
                                "span",
                                null,
                                "".concat(d, " ").concat(h)
                              ),
                              " –"
                            ),
                            i.a.createElement("td", null, b)
                          )
                        )
                      )
                    )
                  ),
                  i.a.createElement(
                    "div",
                    { className: Ea.a.medicationOrderDetailsContainer },
                    i.a.createElement(
                      "div",
                      {
                        className: Ea.a.medicationContainer,
                        style: { marginRight: "0.625rem" }
                      },
                      i.a.createElement(
                        "div",
                        { className: Ea.a.doseAndFrequency },
                        i.a.createElement(
                          "div",
                          { className: Ea.a.medicationOrderRadio },
                          i.a.createElement("span", null, "Dose")
                        ),
                        t.length > 0 &&
                          d &&
                          t[0].commonDosages.map(e =>
                            i.a.createElement(
                              "div",
                              {
                                className: Ea.a.medicationOrderRadio,
                                key: e.dosage
                              },
                              i.a.createElement("input", {
                                type: "radio",
                                name: "doseUnits",
                                id: e.dosage,
                                defaultValue: e.numberOfPills,
                                defaultChecked: d === e.numberOfPills,
                                onChange: e => {
                                  _(Number(e.target.value));
                                }
                              }),
                              i.a.createElement(
                                "label",
                                { htmlFor: e.dosage },
                                e.dosage
                              )
                            )
                          ),
                        i.a.createElement(
                          "div",
                          { className: Ea.a.medicationOrderRadio },
                          i.a.createElement("input", {
                            type: "radio",
                            name: "doseUnits",
                            id: "doseUnits1"
                          }),
                          i.a.createElement(
                            "label",
                            { htmlFor: "doseUnits1" },
                            "other"
                          )
                        )
                      ),
                      i.a.createElement(
                        "div",
                        { className: Ea.a.doseAndFrequency },
                        i.a.createElement(
                          "div",
                          { className: Ea.a.medicationOrderRadio },
                          i.a.createElement("span", null, "Frequency")
                        ),
                        t.length > 0 &&
                          v &&
                          t[0].commonFrequencies.map(e =>
                            i.a.createElement(
                              "div",
                              {
                                className: Ea.a.medicationOrderRadio,
                                key: e.conceptUuid
                              },
                              i.a.createElement("input", {
                                type: "radio",
                                name: "frequency",
                                id: e.name,
                                defaultValue: e.conceptUuid,
                                defaultChecked: e.conceptUuid === v,
                                onChange: e => y(e.target.value)
                              }),
                              i.a.createElement(
                                "label",
                                { htmlFor: e.name },
                                e.name
                              )
                            )
                          ),
                        i.a.createElement(
                          "div",
                          { className: Ea.a.medicationOrderRadio },
                          i.a.createElement("input", {
                            type: "radio",
                            name: "frequency",
                            id: "otherFrequency"
                          }),
                          i.a.createElement(
                            "label",
                            { htmlFor: "otherFrequency" },
                            "other"
                          )
                        )
                      )
                    ),
                    i.a.createElement(
                      "div",
                      { className: Ea.a.medicationContainerColumnTwo },
                      i.a.createElement(
                        "div",
                        {
                          className: Ea.a.medicationContainer,
                          style: {
                            width: "100%",
                            marginBottom: "0.625rem",
                            flexDirection: "column"
                          }
                        },
                        i.a.createElement(
                          "div",
                          { className: Ea.a.medicationOrderInput },
                          i.a.createElement(
                            "label",
                            { htmlFor: "startDate" },
                            "Start date"
                          ),
                          i.a.createElement("input", {
                            type: "text",
                            name: "startDate",
                            id: "startDate",
                            placeholder: "Day-Month-Year",
                            autoComplete: "off",
                            required: !0,
                            defaultValue: z
                          })
                        ),
                        i.a.createElement(
                          "div",
                          {
                            className: Ea.a.medicationOrderInput,
                            style: {
                              flexDirection: "row",
                              margin: "0.625rem 0rem"
                            }
                          },
                          i.a.createElement(
                            "div",
                            {
                              style: { flex: 1 },
                              className: Ea.a.omrsSelectOptions
                            },
                            i.a.createElement(
                              "label",
                              { htmlFor: "duration" },
                              "Duration"
                            ),
                            i.a.createElement(
                              "label",
                              { htmlFor: "option" },
                              i.a.createElement(
                                "select",
                                {
                                  id: "option",
                                  onChange: e => P(e.target.value),
                                  defaultChecked: !0,
                                  value: F
                                },
                                R &&
                                  R.map(e =>
                                    i.a.createElement(
                                      "option",
                                      { key: e.uuid, value: e.uuid },
                                      e.display
                                    )
                                  )
                              )
                            )
                          ),
                          i.a.createElement(
                            "div",
                            {
                              style: {
                                flex: 1,
                                display: "flex",
                                alignItems: "flex-end"
                              }
                            },
                            i.a.createElement(
                              "div",
                              { className: "omrs-increment-buttons" },
                              i.a.createElement(
                                "div",
                                null,
                                i.a.createElement(
                                  "button",
                                  {
                                    type: "button",
                                    className: "omrs-btn-icon-medium",
                                    onClick: e => {
                                      I > 0 && U(I - 1);
                                    }
                                  },
                                  i.a.createElement(
                                    "svg",
                                    null,
                                    i.a.createElement("use", {
                                      xlinkHref: "#omrs-icon-remove"
                                    })
                                  )
                                )
                              ),
                              i.a.createElement(
                                "div",
                                null,
                                i.a.createElement("input", {
                                  type: "number",
                                  value: I,
                                  onChange: e =>
                                    (e => {
                                      U(Number(e));
                                    })(e.target.value)
                                })
                              ),
                              i.a.createElement(
                                "div",
                                null,
                                i.a.createElement(
                                  "button",
                                  {
                                    type: "button",
                                    className: "omrs-btn-icon-medium",
                                    onClick: e => U(I + 1)
                                  },
                                  i.a.createElement(
                                    "svg",
                                    null,
                                    i.a.createElement("use", {
                                      xlinkHref: "#omrs-icon-add"
                                    })
                                  )
                                )
                              )
                            )
                          ),
                          i.a.createElement("div", null)
                        ),
                        i.a.createElement(
                          "div",
                          { className: Ea.a.medicationOrderInput },
                          i.a.createElement(
                            "label",
                            { htmlFor: "endDate" },
                            "End date"
                          ),
                          i.a.createElement("input", {
                            type: "text",
                            name: "endDate",
                            id: "endDate",
                            placeholder: "Day-Month-Year",
                            required: !0,
                            autoComplete: "off",
                            value: V,
                            onChange: e => q(e.target.value)
                          })
                        ),
                        i.a.createElement("div", {
                          className: Ea.a.medicationOrderInput,
                          style: {
                            margin: "1.25rem 0rem 1.0625rem 0rem",
                            border:
                              "0.0625rem solid var(--omrs-color-bg-low-contrast)"
                          }
                        }),
                        i.a.createElement(
                          "div",
                          {
                            className: Ea.a.medicationOrderInput,
                            style: { width: "80%" }
                          },
                          i.a.createElement(
                            "label",
                            { htmlFor: "refills" },
                            "Refills"
                          ),
                          i.a.createElement(
                            "div",
                            {
                              id: "refills",
                              className: "omrs-increment-buttons"
                            },
                            i.a.createElement(
                              "div",
                              null,
                              i.a.createElement(
                                "svg",
                                {
                                  className: "omrs-icon",
                                  onClick: e => {
                                    O > 0 && C(O - 1);
                                  }
                                },
                                i.a.createElement("use", {
                                  xlinkHref: "#omrs-icon-remove"
                                })
                              )
                            ),
                            i.a.createElement(
                              "div",
                              null,
                              i.a.createElement(
                                "span",
                                null,
                                i.a.createElement("input", {
                                  type: "number",
                                  value: O,
                                  onChange: e => C(Number(e.target.value))
                                })
                              )
                            ),
                            i.a.createElement(
                              "div",
                              null,
                              i.a.createElement(
                                "svg",
                                {
                                  className: "omrs-icon",
                                  onClick: e => {
                                    C(O + 1);
                                  }
                                },
                                i.a.createElement("use", {
                                  xlinkHref: "#omrs-icon-add"
                                })
                              )
                            )
                          ),
                          i.a.createElement(
                            "label",
                            { htmlFor: "lastDateOfRefill" },
                            "Last date with refills"
                          )
                        )
                      ),
                      i.a.createElement(
                        "div",
                        {
                          className: Ea.a.medicationContainer,
                          style: { width: "100%" }
                        },
                        i.a.createElement(
                          "div",
                          { className: Ea.a.medicationOrderInput },
                          i.a.createElement(
                            "label",
                            { htmlFor: "dosingInstructions" },
                            "Dosing instructions"
                          ),
                          i.a.createElement("textarea", {
                            name: "dosingInstruction",
                            id: "dosingInstructionTextArea",
                            rows: 6,
                            defaultValue: W,
                            onChange: e => Y(e.target.value)
                          })
                        )
                      )
                    )
                  ),
                  i.a.createElement(
                    "div",
                    { className: Ea.a.medicationOrderFooter },
                    i.a.createElement(
                      "button",
                      { className: "omrs-btn omrs-outlined-neutral" },
                      "Cancel"
                    ),
                    i.a.createElement(
                      "button",
                      {
                        className: "omrs-btn omrs-filled-action",
                        disabled: !1
                      },
                      "Save"
                    )
                  )
                );
              }
              function ka(e) {
                const [t, n] = Object(a.useState)([]),
                  [r, o] = Object(a.useState)(""),
                  [l, c] = Object(a.useState)([]),
                  [m, d] = Object(a.useState)(),
                  [p, f] = Object(a.useState)(!1),
                  [h, v] = Object(a.useState)(!1),
                  [y, b] = Object(a.useState)([]),
                  [A, w, E, x] = Object(me.useCurrentPatient)();
                let S = Object(s.useHistory)();
                const [N, k] = i.a.useState({ orderEdit: !1, order: null }),
                  O = Object(Aa.debounce)(e => {
                    o(e);
                  }, 300);
                Object(a.useEffect)(() => {
                  const e = new AbortController();
                  return (
                    r && r.length >= 3
                      ? _a(r, e).then(
                          e => n(e.data.results),
                          Ue.createErrorHandler
                        )
                      : n([]),
                    () => e.abort()
                  );
                }, [r]),
                  Object(a.useEffect)(() => {
                    l.length > 0 ? v(!0) : v(!1);
                  }, [l]),
                  Object(a.useEffect)(() => {
                    let t = e.match.params;
                    t.drugName &&
                      (f(!0),
                      b([
                        {
                          DrugName: t.drugName,
                          Action: t.action,
                          OrderUuid: t.orderUuid
                        }
                      ]),
                      d(t.drugName));
                  }, [e.match.params]),
                  Object(a.useEffect)(() => {
                    let t = e.match.params;
                    if (null != t.action && "DISCONTINUE" === t.action) {
                      const e = new AbortController();
                      return (
                        pa(e, t.orderUuid).then(({ data: e }) => {
                          c([
                            ...l,
                            {
                              orderUuid: e.uuid,
                              encounterUuid: e.encounter.uuid,
                              patientUuid: e.patient.uuid,
                              type: "drugorder",
                              orderer: e.orderer.uuid,
                              careSetting: e.careSetting.uuid,
                              dose: e.dose,
                              drugStrength: e.drug.strength,
                              drugName: e.drug.name,
                              frequencyName: e.frequency.display,
                              dosageForm: e.doseUnits.display,
                              routeName: e.route.display,
                              action: "DISCONTINUE",
                              concept: e.concept.uuid,
                              doseUnitsConcept: e.doseUnits.uuid,
                              previousOrder: e.previousOrder
                                ? e.previousOrder
                                : e.uuid,
                              drugUuid: e.drug.uuid
                            }
                          ]);
                        }),
                        () => e.abort()
                      );
                    }
                  }, [e.match.params]);
                return i.a.createElement(
                  "div",
                  { className: ba.a.medicationOrderBasketContainer },
                  i.a.createElement(
                    "div",
                    {
                      className: ""
                        .concat(ba.a.medicationHeader, " ")
                        .concat(Object(Aa.isEmpty)(t) ? "" : ba.a.modal)
                    },
                    i.a.createElement(
                      "div",
                      {
                        className: ""
                          .concat(ba.a.medicationHeader, " ")
                          .concat(
                            Object(Aa.isEmpty)(t) ? "" : ba.a.modalContent
                          )
                      },
                      i.a.createElement(
                        u,
                        { name: "Order Medication", styles: { width: "100%" } },
                        i.a.createElement(
                          "div",
                          { className: ba.a.medicationSearchTerm },
                          i.a.createElement("input", {
                            type: "text",
                            name: "searchTerm",
                            id: "searchTerm",
                            placeholder: "medication name",
                            onChange: e => O(e.target.value)
                          })
                        )
                      ),
                      i.a.createElement(
                        "div",
                        {
                          className: ""
                            .concat(ba.a.searchResults, " ")
                            .concat(Object(Aa.isEmpty)(t) ? ba.a.hide : "")
                        },
                        i.a.createElement(
                          "table",
                          null,
                          i.a.createElement(
                            "thead",
                            null,
                            i.a.createElement(
                              "tr",
                              null,
                              i.a.createElement("th", null, "No"),
                              i.a.createElement("th", null, "Drug Name"),
                              i.a.createElement("th", null, "Strength"),
                              i.a.createElement("th", null, "Dosage form")
                            )
                          ),
                          i.a.createElement(
                            "tbody",
                            null,
                            t &&
                              t.map((e, t) =>
                                i.a.createElement(
                                  "tr",
                                  {
                                    key: e,
                                    role: "button",
                                    onClick: t => (
                                      e.uuid, d(r), f(!0), void n([])
                                    )
                                  },
                                  i.a.createElement("td", null, t + 1),
                                  i.a.createElement("td", null, e.name),
                                  i.a.createElement("td", null, e.strength),
                                  i.a.createElement(
                                    "td",
                                    null,
                                    e.dosageForm.display
                                  )
                                )
                              )
                          )
                        )
                      )
                    )
                  ),
                  i.a.createElement(
                    "div",
                    { style: { width: "90%" } },
                    l.length > 0 &&
                      l.map((e, t) =>
                        i.a.createElement(
                          "div",
                          {
                            className: ""
                              .concat(ba.a.basketStyles, " ")
                              .concat(ba.a.OrderStyle),
                            key: t
                          },
                          i.a.createElement(
                            _,
                            null,
                            i.a.createElement(
                              g,
                              { justifyContent: "space-between" },
                              i.a.createElement(
                                "span",
                                null,
                                e.action,
                                " ",
                                i.a.createElement("b", null, e.drugName),
                                " — ",
                                " ",
                                String(e.dosageForm).toLocaleLowerCase(),
                                " — ",
                                " ",
                                String(e.routeName).toLocaleLowerCase(),
                                " — ",
                                " DOSE",
                                " ",
                                i.a.createElement(
                                  "b",
                                  null,
                                  "".concat(ga(e.drugStrength, e.dose)),
                                  " "
                                ),
                                i.a.createElement(
                                  "b",
                                  null,
                                  String(e.frequencyName).toLocaleLowerCase()
                                )
                              ),
                              i.a.createElement(
                                "span",
                                null,
                                i.a.createElement(
                                  "button",
                                  {
                                    className: "omrs-btn-icon-medium",
                                    onClick: e => {
                                      return (
                                        (n = t),
                                        void c(l.filter((e, t) => t !== n))
                                      );
                                      var n;
                                    }
                                  },
                                  i.a.createElement(
                                    "svg",
                                    null,
                                    i.a.createElement("use", {
                                      fill: "var(--omrs-color-brand-black)",
                                      xlinkHref: "#omrs-icon-close"
                                    })
                                  )
                                ),
                                i.a.createElement(
                                  "button",
                                  {
                                    className: "omrs-btn-icon-medium",
                                    onClick: n => {
                                      return (
                                        (r = t),
                                        k({ orderEdit: !0, order: e }),
                                        f(!0),
                                        b([]),
                                        void c(l.filter((e, t) => t !== r))
                                      );
                                      var r;
                                    },
                                    disabled: "DISCONTINUE" === e.action
                                  },
                                  i.a.createElement(
                                    "svg",
                                    null,
                                    i.a.createElement("use", {
                                      fill: "var(--omrs-color-brand-black)",
                                      xlinkHref: "#omrs-icon-menu"
                                    })
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                  ),
                  p &&
                    i.a.createElement(
                      "div",
                      { className: ba.a.modal },
                      i.a.createElement(
                        "div",
                        { className: ba.a.modalContent },
                        i.a.createElement(Na, {
                          drugName: m,
                          setOrderBasket: c,
                          orderBasket: l,
                          hideModal: () => {
                            f(!1), b([]), k({ orderEdit: !1, order: null });
                          },
                          editProperty: y,
                          resetParams: () => {
                            e.match.params = {};
                          },
                          orderEdit: N
                        })
                      )
                    ),
                  i.a.createElement(
                    "div",
                    { className: ba.a.medicationOrderFooter },
                    i.a.createElement(
                      "button",
                      {
                        className: "omrs-btn omrs-outlined-neutral",
                        style: { width: "50%" },
                        onClick: e => c([])
                      },
                      "Cancel"
                    ),
                    i.a.createElement(
                      "button",
                      {
                        className: "".concat(
                          h
                            ? "omrs-btn omrs-filled-action"
                            : "omrs-btn omrs-outlined-neutral"
                        ),
                        style: { width: "50%" },
                        disabled: !h,
                        onClick: () => {
                          const e = new AbortController();
                          return (
                            l.forEach(t => {
                              (function(e, t) {
                                return "NEW" === t.action
                                  ? Object(me.openmrsFetch)(
                                      "/ws/rest/v1/order",
                                      {
                                        method: "POST",
                                        signal: e.signal,
                                        headers: {
                                          "Content-Type": "application/json"
                                        },
                                        body: {
                                          patient: t.patientUuid,
                                          careSetting: t.careSetting,
                                          orderer: t.orderer,
                                          encounter: t.encounterUuid,
                                          drug: t.drugUuid,
                                          dose: t.dose,
                                          doseUnits: t.doseUnitsConcept,
                                          route: t.route,
                                          frequency: t.frequencyUuid,
                                          asNeeded: t.asNeeded,
                                          numRefills: t.numRefills,
                                          action: t.action,
                                          quantity: t.quantity,
                                          quantityUnits: t.quantityUnits,
                                          type: t.type,
                                          duration: t.duration,
                                          durationUnits: t.durationUnits,
                                          dosingInstructions:
                                            t.dosingInstructions,
                                          concept: t.concept
                                        }
                                      }
                                    )
                                  : "REVISE" === t.action
                                  ? Object(me.openmrsFetch)(
                                      "/ws/rest/v1/order",
                                      {
                                        method: "POST",
                                        signal: e.signal,
                                        headers: {
                                          "Content-Type": "application/json"
                                        },
                                        body: {
                                          patient: t.patientUuid,
                                          careSetting: t.careSetting,
                                          orderer: t.orderer,
                                          encounter: t.encounterUuid,
                                          drug: t.drugUuid,
                                          dose: t.dose,
                                          doseUnits: t.doseUnitsConcept,
                                          route: t.route,
                                          frequency: t.frequencyUuid,
                                          asNeeded: t.asNeeded,
                                          numRefills: t.numRefills,
                                          action: t.action,
                                          quantity: t.quantity,
                                          quantityUnits: t.quantityUnits,
                                          type: t.type,
                                          duration: t.duration,
                                          durationUnits: t.durationUnits,
                                          previousOrder: t.previousOrder,
                                          dosingInstructions:
                                            t.dosingInstructions
                                        }
                                      }
                                    )
                                  : "DISCONTINUE" === t.action
                                  ? Object(me.openmrsFetch)(
                                      "/ws/rest/v1/order",
                                      {
                                        signal: e.signal,
                                        method: "POST",
                                        headers: {
                                          "Content-type": "application/json"
                                        },
                                        body: {
                                          type: t.type,
                                          action: t.action,
                                          previousOrder: t.previousOrder,
                                          patient: t.patientUuid,
                                          careSetting: t.careSetting,
                                          encounter: t.encounterUuid,
                                          orderReasonNonCoded:
                                            t.orderReasonNonCoded,
                                          orderer: t.orderer,
                                          concept: t.concept,
                                          drug: t.drugUuid
                                        }
                                      }
                                    )
                                  : void 0;
                              })(e, t).then(e => {
                                201 === e.status &&
                                  (c([]),
                                  S.push(
                                    "/patient/".concat(E, "/chart/medications")
                                  ));
                              }, Object(Ue.createErrorHandler)());
                            }),
                            () => e.abort()
                          );
                        }
                      },
                      "Sign"
                    )
                  )
                );
              }
              function Oa(e) {
                return i.a.createElement(
                  "button",
                  {
                    className: "omrs-btn omrs-text-neutral",
                    onClick: () =>
                      Object(me.newWorkspaceItem)({
                        component: e.component,
                        name: e.name,
                        props: {
                          match: {
                            params: {
                              orderUuid: e.orderUuid,
                              drugName: e.drugName,
                              action: e.action
                            }
                          }
                        },
                        inProgress: e.inProgress,
                        validations: e => e.findIndex(e => e.component === ka)
                      })
                  },
                  e.label
                );
              }
              function Ca(e) {
                const [t, n] = i.a.useState(null),
                  [r, a, o, l] = Object(me.useCurrentPatient)(),
                  { t: m } = Object(c.useTranslation)();
                return (
                  i.a.useEffect(() => {
                    if (o) {
                      const e = da(o).subscribe(
                        e => n(e),
                        Object(Ue.createErrorHandler)()
                      );
                      return () => e.unsubscribe();
                    }
                  }, [o]),
                  i.a.createElement(
                    u,
                    {
                      name: m("Active Medications", "Active Medications"),
                      styles: { width: "100%" },
                      addComponent: ka,
                      showComponent: () => va(ka, "Medication Order")
                    },
                    i.a.createElement(
                      "table",
                      { className: ha.a.medicationsTable },
                      i.a.createElement(
                        "tbody",
                        null,
                        t &&
                          t.map((e, t) =>
                            i.a.createElement(
                              i.a.Fragment,
                              { key: e.uuid },
                              i.a.createElement(
                                "tr",
                                null,
                                i.a.createElement(
                                  "td",
                                  null,
                                  i.a.createElement(
                                    "span",
                                    {
                                      style: {
                                        fontWeight: 500,
                                        color:
                                          "var(--omrs-color-ink-high-contrast)"
                                      }
                                    },
                                    e.drug.name
                                  ),
                                  " — ",
                                  " ",
                                  i.a.createElement(
                                    "span",
                                    { className: ha.a.medicationStatement },
                                    e.doseUnits.display
                                  ),
                                  " ",
                                  " — ",
                                  i.a.createElement(
                                    "span",
                                    { className: ha.a.medicationStatement },
                                    e.route.display,
                                    " "
                                  ),
                                  i.a.createElement(
                                    "span",
                                    {
                                      style: {
                                        color:
                                          "var(--omrs-color-ink-medium-contrast)"
                                      }
                                    },
                                    " ",
                                    "DOSE"
                                  ),
                                  "   ",
                                  i.a.createElement(
                                    "span",
                                    {
                                      style: {
                                        fontWeight: 500,
                                        color:
                                          "var(--omrs-color-ink-high-contrast)"
                                      },
                                      className: ha.a.medicationStatement
                                    },
                                    ga(e.drug.strength, e.dose)
                                  ),
                                  i.a.createElement(
                                    "span",
                                    {
                                      style: {
                                        fontWeight: 400,
                                        color:
                                          "var(--omrs-color-ink-high-contrast)"
                                      }
                                    },
                                    " — ",
                                    e.frequency.display
                                  )
                                ),
                                i.a.createElement(
                                  "td",
                                  null,
                                  i.a.createElement(Oa, {
                                    component: ka,
                                    name: "Medication Order Basket",
                                    label: "REVISE",
                                    orderUuid: e.uuid,
                                    drugName: e.drug.name,
                                    action: "REVISE",
                                    inProgress: !0
                                  }),
                                  i.a.createElement(Oa, {
                                    component: ka,
                                    name: "Medication Order Basket",
                                    label: "DISCONTINUE",
                                    orderUuid: e.uuid,
                                    drugName: null,
                                    action: "DISCONTINUE",
                                    inProgress: !0
                                  })
                                ),
                                i.a.createElement(
                                  "td",
                                  { style: { textAlign: "end" } },
                                  i.a.createElement(
                                    s.Link,
                                    {
                                      to: "/patient/".concat(
                                        o,
                                        "/chart/medications"
                                      )
                                    },
                                    i.a.createElement(
                                      "svg",
                                      {
                                        className: "omrs-icon",
                                        fill: "rgba(0, 0, 0, 0.54)"
                                      },
                                      i.a.createElement("use", {
                                        xlinkHref: "#omrs-icon-chevron-right"
                                      })
                                    )
                                  )
                                )
                              )
                            )
                          )
                      )
                    ),
                    i.a.createElement(h, {
                      linkTo: "/patient/".concat(o, "/chart/Medications")
                    })
                  )
                );
              }
              var ja = n(26),
                Ta = n.n(ja);
              function Da(e) {
                const [t, n] = i.a.useState(null),
                  [r, a, o, l] = Object(me.useCurrentPatient)();
                const { t: m } = Object(c.useTranslation)();
                return (
                  i.a.useEffect(() => {
                    const e = da(o).subscribe(
                      e => n(e),
                      Object(Ue.createErrorHandler)()
                    );
                    return () => e.unsubscribe();
                  }, [o]),
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    t && t.length > 0
                      ? i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            "div",
                            null,
                            i.a.createElement(
                              i.a.Fragment,
                              null,
                              i.a.createElement(
                                u,
                                {
                                  name: m(
                                    "Medications - current",
                                    "Medications - current"
                                  ),
                                  addComponent: ka,
                                  showComponent: () =>
                                    va(ka, "Medication Order")
                                },
                                i.a.createElement(
                                  "table",
                                  { className: Ta.a.medicationsTable },
                                  i.a.createElement(
                                    "thead",
                                    null,
                                    i.a.createElement(
                                      "tr",
                                      null,
                                      i.a.createElement("td", null, "NAME"),
                                      i.a.createElement(
                                        "td",
                                        null,
                                        i.a.createElement(
                                          "div",
                                          { className: Ta.a.centerItems },
                                          "STATUS"
                                        )
                                      ),
                                      i.a.createElement(
                                        "td",
                                        null,
                                        "START DATE"
                                      )
                                    )
                                  ),
                                  i.a.createElement(
                                    "tbody",
                                    null,
                                    t &&
                                      t
                                        .filter(e => "NEW" === e.action)
                                        .map(e => {
                                          var t;
                                          return i.a.createElement(
                                            i.a.Fragment,
                                            { key: e.uuid },
                                            i.a.createElement(
                                              "tr",
                                              null,
                                              i.a.createElement(
                                                "td",
                                                null,
                                                i.a.createElement(
                                                  "span",
                                                  {
                                                    style: {
                                                      fontWeight: 500,
                                                      color:
                                                        "var(--omrs-color-ink-high-contrast)"
                                                    }
                                                  },
                                                  e.drug.name
                                                ),
                                                " — ",
                                                " ",
                                                e.route.display,
                                                " ",
                                                " — ",
                                                e.doseUnits.display,
                                                " ",
                                                " — ",
                                                i.a.createElement(
                                                  "span",
                                                  {
                                                    style: {
                                                      color:
                                                        "var(--omrs-color-ink-medium-contrast)"
                                                    }
                                                  },
                                                  "DOSE"
                                                ),
                                                "   ",
                                                i.a.createElement(
                                                  "span",
                                                  {
                                                    style: {
                                                      fontWeight: 500,
                                                      color:
                                                        "var(--omrs-color-ink-high-contrast)"
                                                    }
                                                  },
                                                  ga(e.drug.strength, e.dose)
                                                ),
                                                i.a.createElement(
                                                  "span",
                                                  null,
                                                  " ",
                                                  " — ",
                                                  " ",
                                                  e.frequency.display,
                                                  " — ",
                                                  e.duration,
                                                  null ===
                                                    (t = e.durationUnits) ||
                                                    void 0 === t
                                                    ? void 0
                                                    : t.display,
                                                  " — "
                                                ),
                                                "  ",
                                                i.a.createElement(
                                                  "span",
                                                  {
                                                    style: {
                                                      color:
                                                        "var(--omrs-color-ink-medium-contrast)"
                                                    }
                                                  },
                                                  "REFILLS"
                                                ),
                                                "   ",
                                                i.a.createElement(
                                                  "span",
                                                  null,
                                                  e.numRefills
                                                ),
                                                " "
                                              ),
                                              i.a.createElement(
                                                "td",
                                                null,
                                                e.action
                                              ),
                                              i.a.createElement(
                                                "td",
                                                null,
                                                We()(e.dateActivated).format(
                                                  "DD-MMM-YYYY"
                                                )
                                              ),
                                              i.a.createElement(
                                                "td",
                                                null,
                                                i.a.createElement(Oa, {
                                                  component: ka,
                                                  name:
                                                    "Medication Order Basket",
                                                  label: "REVISE",
                                                  orderUuid: e.uuid,
                                                  drugName: e.drug.name,
                                                  action: "REVISE",
                                                  inProgress: !0
                                                }),
                                                i.a.createElement(Oa, {
                                                  component: ka,
                                                  name:
                                                    "Medication Order Basket",
                                                  label: "DISCONTINUE",
                                                  orderUuid: e.uuid,
                                                  drugName: null,
                                                  action: "DISCONTINUE",
                                                  inProgress: !0
                                                })
                                              ),
                                              i.a.createElement(
                                                "td",
                                                { style: { textAlign: "end" } },
                                                i.a.createElement(
                                                  s.Link,
                                                  {
                                                    to: "/patient/"
                                                      .concat(
                                                        o,
                                                        "/chart/medications/"
                                                      )
                                                      .concat(e.uuid)
                                                  },
                                                  i.a.createElement(
                                                    "svg",
                                                    {
                                                      className: "omrs-icon",
                                                      fill:
                                                        "rgba(0, 0, 0, 0.54)"
                                                    },
                                                    i.a.createElement("use", {
                                                      xlinkHref:
                                                        "#omrs-icon-chevron-right"
                                                    })
                                                  )
                                                )
                                              )
                                            )
                                          );
                                        })
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: Ta.a.medicationFooter },
                                  i.a.createElement(
                                    "p",
                                    {
                                      style: {
                                        color:
                                          "var(--omrs-color-ink-medium-contrast)"
                                      },
                                      className: "omrs-type-body-large"
                                    },
                                    "No more medications available."
                                  )
                                )
                              )
                            )
                          ),
                          i.a.createElement(
                            "div",
                            null,
                            i.a.createElement(
                              i.a.Fragment,
                              null,
                              i.a.createElement(
                                u,
                                {
                                  name: m(
                                    "Medications - past",
                                    "Medications - past"
                                  ),
                                  addComponent: ka,
                                  showComponent: () =>
                                    va(ka, "Medication Order")
                                },
                                i.a.createElement(
                                  "table",
                                  { className: Ta.a.medicationsTable },
                                  i.a.createElement(
                                    "thead",
                                    null,
                                    i.a.createElement(
                                      "tr",
                                      null,
                                      i.a.createElement(
                                        "td",
                                        null,
                                        i.a.createElement("div", null, "STATUS")
                                      ),
                                      i.a.createElement("td", null, "NAME"),
                                      i.a.createElement("td", null, "END DATE")
                                    )
                                  ),
                                  i.a.createElement(
                                    "tbody",
                                    null,
                                    t &&
                                      t
                                        .filter(e => "NEW" !== e.action)
                                        .map(e =>
                                          i.a.createElement(
                                            i.a.Fragment,
                                            { key: e.uuid },
                                            i.a.createElement(
                                              "tr",
                                              null,
                                              i.a.createElement(
                                                "td",
                                                null,
                                                e.action
                                              ),
                                              i.a.createElement(
                                                "td",
                                                null,
                                                i.a.createElement(
                                                  "span",
                                                  {
                                                    style: {
                                                      fontWeight: 500,
                                                      color:
                                                        "var(--omrs-color-ink-high-contrast)"
                                                    }
                                                  },
                                                  e.drug.name
                                                ),
                                                " — ",
                                                " ",
                                                e.doseUnits.display,
                                                " ",
                                                " — ",
                                                e.route.display,
                                                " ",
                                                " — ",
                                                i.a.createElement(
                                                  "span",
                                                  {
                                                    style: {
                                                      color:
                                                        "var(--omrs-color-ink-medium-contrast)"
                                                    }
                                                  },
                                                  "DOSE"
                                                ),
                                                "   ",
                                                i.a.createElement(
                                                  "span",
                                                  {
                                                    style: {
                                                      fontWeight: 500,
                                                      color:
                                                        "var(--omrs-color-ink-high-contrast)"
                                                    }
                                                  },
                                                  ga(e.drug.strength, e.dose)
                                                ),
                                                i.a.createElement(
                                                  "span",
                                                  null,
                                                  " ",
                                                  " — ",
                                                  " ",
                                                  e.frequency.display,
                                                  " — ",
                                                  e.duration,
                                                  e.durationUnits.display,
                                                  " — "
                                                ),
                                                "   ",
                                                i.a.createElement(
                                                  "span",
                                                  {
                                                    style: {
                                                      color:
                                                        "var(--omrs-color-ink-medium-contrast)"
                                                    }
                                                  },
                                                  "REFILLS"
                                                ),
                                                "   ",
                                                i.a.createElement(
                                                  "span",
                                                  null,
                                                  e.numRefills
                                                )
                                              ),
                                              i.a.createElement(
                                                "td",
                                                null,
                                                We()(e.dateActivated).format(
                                                  "DD-MMM-YYYY"
                                                )
                                              )
                                            )
                                          )
                                        )
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: Ta.a.medicationFooter },
                                  i.a.createElement(
                                    "p",
                                    {
                                      style: {
                                        color:
                                          "var(--omrs-color-ink-medium-contrast)"
                                      },
                                      className: "omrs-type-body-large"
                                    },
                                    "No more medications available."
                                  )
                                )
                              )
                            )
                          )
                        )
                      : i.a.createElement(
                          u,
                          { name: "Medication", styles: { width: "90%" } },
                          i.a.createElement(
                            "div",
                            { className: Ta.a.medicationMargin },
                            i.a.createElement(
                              "p",
                              { className: "omrs-bold" },
                              "The patient's medication history is not documented."
                            ),
                            i.a.createElement(
                              "p",
                              { className: "omrs-bold" },
                              "Please ",
                              i.a.createElement(
                                "a",
                                { href: "/" },
                                "add medication history"
                              ),
                              "."
                            )
                          )
                        )
                  )
                );
              }
              var Ma = n(19),
                Ia = n.n(Ma);
              function Ua(e) {
                const [t, n] = i.a.useState(null),
                  [r, a, o] = Object(me.useCurrentPatient)(),
                  l = Object(s.useRouteMatch)({
                    path:
                      "/patient/:patientUuid/chart/medications/:medicationUuid"
                  });
                return (
                  i.a.useEffect(() => {
                    if (!r && a) {
                      const e = new AbortController();
                      return (
                        (function(e, t) {
                          return Object(
                            me.openmrsFetch
                          )(
                            "/ws/rest/v1/order/".concat(
                              t,
                              "?v=custom:(uuid,route:(uuid,display),action,urgency,display,drug:(display,strength),frequency:(display),dose,doseUnits:(display),orderer,dateStopped,dateActivated,previousOrder,numRefills,duration,durationUnits:(display))"
                            ),
                            { signal: e.signal }
                          );
                        })(e, l.params.medicationUuid).then(e => {
                          n(e.data);
                        }, Object(Ue.createErrorHandler)()),
                        () => e.abort()
                      );
                    }
                  }, [r, a, l.params]),
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    t &&
                      i.a.createElement(
                        "div",
                        { className: Ia.a.conditionSummary },
                        i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            u,
                            {
                              name: "Medication",
                              styles: { width: "90%" },
                              editBtnUrl: "/patient/".concat(
                                o,
                                "/chart/medication/edit"
                              )
                            },
                            i.a.createElement(
                              g,
                              null,
                              i.a.createElement(
                                "span",
                                {
                                  style: {
                                    fontWeight: 500,
                                    fontSize: "130%",
                                    color: "var(--omrs-color-ink-low-contrast)"
                                  }
                                },
                                " ",
                                i.a.createElement("b", null, t.drug.display)
                              )
                            ),
                            i.a.createElement(
                              g,
                              { justifyContent: "space-between" },
                              i.a.createElement(
                                "span",
                                null,
                                i.a.createElement("b", null, t.drug.display),
                                " — ",
                                " ",
                                String(t.doseUnits.display).toLocaleLowerCase(),
                                " — ",
                                " ",
                                String(t.route.display).toLocaleLowerCase(),
                                " — ",
                                " ",
                                "DOSE ".concat(ga(t.drug.strength, t.dose)),
                                " ",
                                " — ",
                                i.a.createElement(
                                  "b",
                                  null,
                                  String(
                                    t.frequency.display
                                  ).toLocaleLowerCase()
                                )
                              )
                            ),
                            i.a.createElement("br", null),
                            i.a.createElement(
                              "div",
                              { className: Ia.a.gridContainer },
                              i.a.createElement(
                                "div",
                                { className: "item1" },
                                i.a.createElement(
                                  "span",
                                  {
                                    style: {
                                      color:
                                        "var(--omrs-color-ink-low-contrast)"
                                    }
                                  },
                                  "Start date"
                                ),
                                i.a.createElement("br", null),
                                i.a.createElement(
                                  "span",
                                  { className: Ia.a.medicationDisplay },
                                  We()(t.dateActivated).format("DD-MMM-YYYY")
                                )
                              ),
                              i.a.createElement(
                                "div",
                                { className: "item2" },
                                i.a.createElement(
                                  "span",
                                  {
                                    style: {
                                      color:
                                        "var(--omrs-color-ink-low-contrast)"
                                    }
                                  },
                                  "Substitutions permitted"
                                ),
                                i.a.createElement(
                                  "span",
                                  { className: Ia.a.medicationDisplay },
                                  "NO "
                                )
                              ),
                              i.a.createElement("div", { className: "item3" }),
                              i.a.createElement(
                                "div",
                                { className: "item4" },
                                i.a.createElement(
                                  "span",
                                  {
                                    style: {
                                      color:
                                        "var(--omrs-color-ink-low-contrast)"
                                    }
                                  },
                                  "End date"
                                ),
                                i.a.createElement(
                                  "span",
                                  { className: Ia.a.medicationDisplay },
                                  We()(t.dateStopped).format("DD-MMM-YYYY")
                                )
                              ),
                              i.a.createElement(
                                "div",
                                { className: "item5" },
                                i.a.createElement(
                                  "span",
                                  {
                                    style: {
                                      color:
                                        "var(--omrs-color-ink-low-contrast)"
                                    }
                                  },
                                  "Dosing Instructions"
                                ),
                                i.a.createElement(
                                  "span",
                                  { className: Ia.a.medicationDisplay },
                                  t.drug.strength,
                                  " — ",
                                  t.frequency.display
                                )
                              ),
                              i.a.createElement("div", { className: "item6" }),
                              i.a.createElement(
                                "div",
                                { className: "item7" },
                                i.a.createElement(
                                  "span",
                                  {
                                    style: {
                                      color:
                                        "var(--omrs-color-ink-low-contrast)"
                                    }
                                  },
                                  "Duration"
                                ),
                                i.a.createElement(
                                  "span",
                                  { className: Ia.a.medicationDisplay },
                                  t.duration,
                                  t.durationUnits.display
                                )
                              ),
                              i.a.createElement("div", { className: "item8" }),
                              i.a.createElement("div", { className: "item10" }),
                              i.a.createElement(
                                "div",
                                { className: "item11" },
                                i.a.createElement(
                                  "span",
                                  {
                                    style: {
                                      color:
                                        "var(--omrs-color-ink-low-contrast)"
                                    }
                                  },
                                  "Total number of refills"
                                ),
                                i.a.createElement(
                                  "span",
                                  { className: Ia.a.medicationDisplay },
                                  t.numRefills
                                )
                              )
                            )
                          )
                        )
                      ),
                    t &&
                      i.a.createElement(
                        "div",
                        { className: Ia.a.conditionSummary },
                        i.a.createElement(
                          u,
                          {
                            name: "Details",
                            styles: {
                              width: "90%",
                              backgroundColor:
                                "var(--omrs-color-bg-medium-contrast)"
                            }
                          },
                          i.a.createElement(
                            "div",
                            {
                              className: "omrs-type-body-regular ".concat(
                                Ia.a.medicationCard
                              )
                            },
                            i.a.createElement(
                              "table",
                              { className: Ia.a.medicationTable },
                              i.a.createElement(
                                "thead",
                                null,
                                i.a.createElement(
                                  "tr",
                                  null,
                                  i.a.createElement("td", null, "Last updated"),
                                  i.a.createElement(
                                    "td",
                                    null,
                                    "Last updated by"
                                  ),
                                  i.a.createElement(
                                    "td",
                                    null,
                                    "Last updated location"
                                  )
                                )
                              ),
                              i.a.createElement(
                                "tbody",
                                null,
                                i.a.createElement(
                                  "tr",
                                  null,
                                  i.a.createElement(
                                    "td",
                                    null,
                                    We()(t.dateActivated).format("DD-MMM-YYYY")
                                  ),
                                  i.a.createElement(
                                    "td",
                                    null,
                                    t.orderer.person.display
                                  ),
                                  i.a.createElement("td", null, "Location Test")
                                )
                              )
                            )
                          )
                        )
                      )
                  )
                );
              }
              function Fa(e) {
                return Object(me.openmrsObservableFetch)(
                  "/ws/rest/v1/encounter?patient=".concat(
                    e,
                    "&v=custom:(uuid,display,encounterDatetime,location:(uuid,display,name),encounterType:(name,uuid),auditInfo:(creator:(display),changedBy:(display)))"
                  )
                ).pipe(ke(e => e.data));
              }
              var Pa = n(9),
                Ra = n.n(Pa);
              function Ha(e) {
                const t = We()(e);
                return t.format("DD-MMM-YYYY") === We()().format("DD-MMM-YYYY")
                  ? "Today   ".concat(t.format("hh:mm A"))
                  : t.format("YYYY") === We()().format("YYYY")
                  ? t.format("DD-MMM hh:mm A")
                  : t.format("DD-MMM-YYYY hh:mm A");
              }
              function Wa(e) {
                const [t, n] = i.a.useState(null),
                  [r, a, o, l] = Object(me.useCurrentPatient)();
                return (
                  i.a.useEffect(() => {
                    if (a) {
                      const e = Fa(o).subscribe(e => n(e.results));
                      return () => e.unsubscribe();
                    }
                  }, [a, o]),
                  i.a.createElement(
                    u,
                    { name: "Notes" },
                    i.a.createElement(
                      "table",
                      { className: Ra.a.tableNotes },
                      i.a.createElement(
                        "thead",
                        null,
                        i.a.createElement(
                          "tr",
                          { className: Ra.a.tableNotesRow },
                          i.a.createElement(
                            "th",
                            {
                              className: ""
                                .concat(Ra.a.tableNotesHeader, " ")
                                .concat(Ra.a.tableDates)
                            },
                            "Date"
                          ),
                          i.a.createElement(
                            "th",
                            { className: Ra.a.tableNotesHeader },
                            "Encounter type, Location"
                          ),
                          i.a.createElement(
                            "th",
                            { className: Ra.a.tableNotesHeader },
                            "Author"
                          ),
                          i.a.createElement("th", null)
                        )
                      ),
                      i.a.createElement(
                        "tbody",
                        null,
                        t &&
                          t
                            .slice(0, 5)
                            .map(e =>
                              i.a.createElement(
                                "tr",
                                { key: e.uuid, className: Ra.a.tableNotesRow },
                                i.a.createElement(
                                  "td",
                                  { className: Ra.a.tableNotesDate },
                                  Ha(e.encounterDatetime)
                                ),
                                i.a.createElement(
                                  "td",
                                  { className: Ra.a.tableNotesData },
                                  e.encounterType.name,
                                  i.a.createElement(
                                    "div",
                                    { className: Ra.a.location },
                                    e.location.name
                                  )
                                ),
                                i.a.createElement(
                                  "td",
                                  { className: Ra.a.tableNotesAuthor },
                                  e.auditInfo.creator
                                    ? String(
                                        e.auditInfo.creator.display
                                      ).toUpperCase()
                                    : String(
                                        e.auditInfo.changedBy.display
                                      ).toUpperCase()
                                ),
                                i.a.createElement(
                                  "td",
                                  {
                                    className: Ra.a.tdLowerSvg,
                                    style: { textAlign: "end" }
                                  },
                                  i.a.createElement(
                                    "svg",
                                    {
                                      className: "omrs-icon",
                                      fill: "var(--omrs-color-ink-low-contrast)"
                                    },
                                    i.a.createElement("use", {
                                      xlinkHref: "#omrs-icon-chevron-right"
                                    })
                                  )
                                )
                              )
                            )
                      )
                    ),
                    i.a.createElement(h, {
                      linkTo: "/patient/".concat(o, "/chart/notes")
                    })
                  )
                );
              }
              var Ya = n(33),
                La = n.n(Ya);
              var Ba = function(e) {
                const [t, n] = Object(a.useState)(),
                  [r, o] = i.a.useState(1),
                  [l, s] = i.a.useState(1),
                  [c, m] = i.a.useState(!1),
                  [d, _] = i.a.useState(!1),
                  [p, f] = i.a.useState([]),
                  [h, g, v, y] = Object(me.useCurrentPatient)();
                return (
                  Object(a.useEffect)(() => {
                    if (!h && g) {
                      const e = Fa(v).subscribe(e => {
                        n(e.results),
                          o(Math.ceil(e.results.length / 10)),
                          f(e.results.slice(0, 10));
                      }, Object(Ue.createErrorHandler)());
                      return () => e.unsubscribe();
                    }
                  }, [v, h, g]),
                  Object(a.useEffect)(() => {
                    t && 10 * l > t.length ? m(!1) : m(!0), _(1 !== l);
                  }, [p, l, t]),
                  i.a.createElement(
                    u,
                    { name: "Notes" },
                    i.a.createElement(
                      "table",
                      { className: La.a.detailedNotesTable },
                      i.a.createElement(
                        "thead",
                        null,
                        i.a.createElement(
                          "tr",
                          null,
                          i.a.createElement("td", null, "DATE"),
                          i.a.createElement(
                            "td",
                            null,
                            "NOTE",
                            i.a.createElement(
                              "svg",
                              { className: "omrs-icon" },
                              i.a.createElement("use", {
                                xlinkHref: "#omrs-icon-arrow-downward"
                              })
                            ),
                            i.a.createElement(
                              "span",
                              { style: { marginLeft: "1.25rem" } },
                              "LOCATION"
                            )
                          ),
                          i.a.createElement("td", { colSpan: 2 }, "AUTHOR")
                        )
                      ),
                      i.a.createElement(
                        "tbody",
                        null,
                        p &&
                          p.map(e =>
                            i.a.createElement(
                              a.Fragment,
                              { key: e.uuid },
                              i.a.createElement(
                                "tr",
                                null,
                                i.a.createElement(
                                  "td",
                                  { className: "omrs-bold" },
                                  wt(e.encounterDatetime)
                                ),
                                i.a.createElement(
                                  "td",
                                  null,
                                  i.a.createElement(
                                    "span",
                                    {
                                      className: "omrs-bold",
                                      style: { paddingBottom: "0.625rem" }
                                    },
                                    e.encounterType.name.toUpperCase()
                                  ),
                                  i.a.createElement(
                                    "span",
                                    {
                                      style: {
                                        color:
                                          "var(--omrs-color-ink-medium-contrast)",
                                        margin: "0rem"
                                      }
                                    },
                                    e.location.name
                                      .split(" ")
                                      .map(e => e[0].toUpperCase() + e.slice(1))
                                      .join(" ")
                                  )
                                ),
                                i.a.createElement(
                                  "td",
                                  null,
                                  e.auditInfo.creator
                                    ? String(
                                        e.auditInfo.creator.display
                                      ).toUpperCase()
                                    : String(
                                        e.auditInfo.changedBy.display
                                      ).toUpperCase()
                                ),
                                i.a.createElement(
                                  "td",
                                  {
                                    style: {
                                      textAlign: "end",
                                      paddingRight: "0.625rem"
                                    }
                                  },
                                  i.a.createElement(
                                    "svg",
                                    { className: "omrs-icon" },
                                    i.a.createElement("use", {
                                      fill:
                                        "var(--omrs-color-ink-low-contrast)",
                                      xlinkHref: "#omrs-icon-chevron-right"
                                    })
                                  )
                                )
                              )
                            )
                          )
                      )
                    ),
                    i.a.createElement(
                      "div",
                      { className: La.a.pagination },
                      i.a.createElement(
                        "div",
                        null,
                        d &&
                          i.a.createElement(
                            "button",
                            {
                              onClick: () => {
                                const e = 10 * (l - 2),
                                  n = 10 * (l - 1),
                                  r = t.slice(e, n);
                                f(r), s(l - 1);
                              },
                              className: "".concat(
                                La.a.navButton,
                                " omrs-bold omrs-btn omrs-text-neutral omrs-rounded"
                              )
                            },
                            i.a.createElement(
                              "svg",
                              {
                                className: "omrs-icon",
                                fill: "rgba(0, 0, 0, 0.54)"
                              },
                              i.a.createElement("use", {
                                xlinkHref: "#omrs-icon-chevron-left"
                              })
                            ),
                            "Previous"
                          )
                      ),
                      i.a.createElement("div", null, "Page ", l, " of ", r),
                      i.a.createElement(
                        "div",
                        null,
                        c &&
                          i.a.createElement(
                            "button",
                            {
                              onClick: () => {
                                let e = 10 * l + 10;
                                const n = 10 * l;
                                e > t.length && (e = t.length);
                                const r = t.slice(n, e);
                                f(r), s(l + 1);
                              },
                              className: "".concat(
                                La.a.navButton,
                                " omrs-bold omrs-btn omrs-text-neutral omrs-rounded"
                              )
                            },
                            "Next",
                            i.a.createElement(
                              "svg",
                              {
                                className: "omrs-icon",
                                fill: "rgba(0, 0, 0, 0.54)"
                              },
                              i.a.createElement("use", {
                                xlinkHref: "#omrs-icon-chevron-right"
                              })
                            )
                          )
                      )
                    )
                  )
                );
              };
              function za(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              }
              function $a(e, t, n) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      })
                    : (e[t] = n),
                  e
                );
              }
              function Va(e) {
                return Object(me.openmrsObservableFetch)(
                  "/ws/rest/v1/programenrollment?patient=".concat(e)
                ).pipe(
                  ke(({ data: e }) => e.results),
                  ca(3)
                );
              }
              function qa(e) {
                return Object(me.openmrsObservableFetch)(
                  "/ws/rest/v1/programenrollment/".concat(e)
                ).pipe(
                  ke(({ data: e }) =>
                    (function(e) {
                      return (function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? za(Object(n), !0).forEach(function(t) {
                                $a(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : za(Object(n)).forEach(function(t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                        }
                        return e;
                      })({}, e);
                    })(e)
                  )
                );
              }
              function Ka(e) {
                const [t, n] = i.a.useState(null),
                  [r, a, o, l] = Object(me.useCurrentPatient)(),
                  { t: s } = Object(c.useTranslation)();
                return (
                  i.a.useEffect(() => {
                    if (o) {
                      const e = Va(o).subscribe(
                        e => n(e),
                        Object(Ue.createErrorHandler)()
                      );
                      return () => e.unsubscribe();
                    }
                  }, [o]),
                  i.a.createElement(
                    u,
                    {
                      name: s("care programs", "Care Programs"),
                      link: "/patient/".concat(o, "/chart/programs"),
                      styles: { margin: "1.25rem, 1.5rem" }
                    },
                    i.a.createElement(
                      _,
                      null,
                      i.a.createElement(
                        g,
                        null,
                        i.a.createElement(b, {
                          label: s("Active Programs", "Active Programs"),
                          labelStyles: {
                            color: "var(--omrs-color-ink-medium-contrast)",
                            fontFamily: "Work Sans"
                          },
                          value: s("Since", "Since"),
                          valueStyles: {
                            color: "var(--omrs-color-ink-medium-contrast)",
                            fontFamily: "Work Sans"
                          }
                        })
                      )
                    ),
                    t &&
                      t.map(e =>
                        i.a.createElement(
                          _,
                          {
                            key: e.uuid,
                            linkTo: "/patient/".concat(o, "/chart/programs")
                          },
                          i.a.createElement(b, {
                            label: e.display,
                            labelStyles: { fontWeight: 500 },
                            value: We()(e.dateEnrolled).format("MMM-YYYY"),
                            valueStyles: { fontFamily: "Work Sans" }
                          })
                        )
                      ),
                    i.a.createElement(h, {
                      linkTo: "/patient/".concat(o, "/chart/programs")
                    })
                  )
                );
              }
              var Ga = n(29),
                Ja = n.n(Ga);
              function Za(e) {
                const [t, n] = i.a.useState(null),
                  [r, a, o, l] = Object(me.useCurrentPatient)(),
                  { t: m } = Object(c.useTranslation)();
                return (
                  i.a.useEffect(() => {
                    const e = Va(o).subscribe(
                      e => n(e),
                      Object(Ue.createErrorHandler)()
                    );
                    return () => e.unsubscribe();
                  }, [o]),
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    t &&
                      i.a.createElement(
                        "div",
                        { className: Ja.a.programsSummary },
                        t.length > 0
                          ? i.a.createElement(
                              u,
                              {
                                name: "Care Programs",
                                styles: { width: "100%" }
                              },
                              i.a.createElement(
                                "table",
                                {
                                  className: "omrs-type-body-regular ".concat(
                                    Ja.a.programTable
                                  )
                                },
                                i.a.createElement(
                                  "thead",
                                  null,
                                  i.a.createElement(
                                    "tr",
                                    null,
                                    i.a.createElement(
                                      "td",
                                      null,
                                      "ACTIVE PROGRAMS"
                                    ),
                                    i.a.createElement("td", null, "SINCE"),
                                    i.a.createElement("td", null, "STATUS"),
                                    i.a.createElement("td", null)
                                  )
                                ),
                                i.a.createElement(
                                  "tbody",
                                  null,
                                  t &&
                                    t.map(e =>
                                      i.a.createElement(
                                        i.a.Fragment,
                                        { key: e.uuid },
                                        i.a.createElement(
                                          "tr",
                                          {
                                            className: "".concat(
                                              e.dateCompleted
                                                ? "".concat(Ja.a.inactive)
                                                : "".concat(Ja.a.active)
                                            )
                                          },
                                          i.a.createElement(
                                            "td",
                                            { className: "omrs-medium" },
                                            e.display
                                          ),
                                          i.a.createElement(
                                            "td",
                                            null,
                                            We()(e.dateEnrolled).format(
                                              "MMM-YYYY"
                                            )
                                          ),
                                          i.a.createElement(
                                            "td",
                                            null,
                                            e.dateCompleted
                                              ? "Completed on ".concat(
                                                  We()(e.dateCompleted).format(
                                                    "DD-MMM-YYYY"
                                                  )
                                                )
                                              : "Active"
                                          ),
                                          i.a.createElement(
                                            "td",
                                            null,
                                            i.a.createElement(
                                              s.Link,
                                              {
                                                to: "/patient/"
                                                  .concat(o, "/chart/programs/")
                                                  .concat(e.uuid)
                                              },
                                              i.a.createElement(
                                                "svg",
                                                {
                                                  className: "omrs-icon",
                                                  fill:
                                                    "var(--omrs-color-ink-low-contrast)"
                                                },
                                                i.a.createElement("use", {
                                                  xlinkHref:
                                                    "#omrs-icon-chevron-right"
                                                })
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                )
                              )
                            )
                          : i.a.createElement(
                              u,
                              {
                                name: "Care Programs",
                                styles: {
                                  width: "100%",
                                  background:
                                    "var(--omrs-color-bg-low-contrast)",
                                  border: "none",
                                  boxShadow: "none"
                                }
                              },
                              i.a.createElement(
                                "div",
                                { className: Ja.a.programMargin },
                                i.a.createElement(
                                  "p",
                                  {
                                    className: "omrs-medium",
                                    "data-testid": "no-programs"
                                  },
                                  "Program data will appear here once the patient enrolls into a program."
                                ),
                                i.a.createElement(
                                  "p",
                                  { className: "omrs-medium" },
                                  "Please ",
                                  i.a.createElement(
                                    "a",
                                    { href: "/" },
                                    "enroll the patient into a program"
                                  ),
                                  "."
                                )
                              )
                            )
                      )
                  )
                );
              }
              var Qa = n(37),
                Xa = n.n(Qa);
              function ei(e) {
                const [t, n] = i.a.useState(null),
                  [r, a, o] = Object(me.useCurrentPatient)(),
                  l = se();
                return (
                  i.a.useEffect(() => {
                    if (!r && a && o) {
                      const e = qa(l.params.programUuid).subscribe(
                        e => n(e),
                        Object(Ue.createErrorHandler)()
                      );
                      return () => e.unsubscribe();
                    }
                  }, [r, a, o, l.params]),
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    t &&
                      i.a.createElement(
                        "div",
                        { className: Xa.a.programSummary },
                        i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            u,
                            { name: "Program", styles: { width: "100%" } },
                            i.a.createElement(
                              "div",
                              {
                                className: "omrs-type-body-regular ".concat(
                                  Xa.a.programCard
                                )
                              },
                              i.a.createElement(
                                "div",
                                null,
                                i.a.createElement(
                                  "p",
                                  {
                                    className: "omrs-type-title-3",
                                    "data-testid": "program-name"
                                  },
                                  t.program.name
                                )
                              ),
                              i.a.createElement(
                                "table",
                                { className: Xa.a.programTable },
                                i.a.createElement(
                                  "thead",
                                  null,
                                  i.a.createElement(
                                    "tr",
                                    null,
                                    i.a.createElement(
                                      "td",
                                      null,
                                      "Enrolled on"
                                    ),
                                    i.a.createElement("td", null, "Status"),
                                    i.a.createElement("td", null, "Enrolled at")
                                  )
                                ),
                                i.a.createElement(
                                  "tbody",
                                  null,
                                  i.a.createElement(
                                    "tr",
                                    null,
                                    i.a.createElement(
                                      "td",
                                      null,
                                      We()(t.dateEnrolled).format("DD-MMM-YYYY")
                                    ),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      t.dateCompleted
                                        ? "Completed on ".concat(
                                            We()(t.dateCompleted).format(
                                              "DD-MMM-YYYY"
                                            )
                                          )
                                        : "Active"
                                    ),
                                    i.a.createElement(
                                      "td",
                                      null,
                                      t.location ? t.location : "-"
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                  )
                );
              }
              var ti = n(55),
                ni = n.n(ti);
              function ri(e) {
                const [t, n] = i.a.useState(null),
                  [r, a, o, l] = Object(me.useCurrentPatient)();
                return (
                  i.a.useEffect(() => {
                    const e = Yt().subscribe(
                      e => n(e),
                      Object(Ue.createErrorHandler)()
                    );
                    return () => e.unsubscribe();
                  }, [o]),
                  i.a.createElement(
                    u,
                    {
                      name: "Vitals",
                      styles: { width: "100%" },
                      link: "/patient/".concat(o, "/chart/vitals")
                    },
                    i.a.createElement(
                      "table",
                      { className: ni.a.vitalsTable },
                      i.a.createElement(
                        "thead",
                        null,
                        i.a.createElement(
                          "tr",
                          { className: "omrs-bold" },
                          i.a.createElement("td", null),
                          i.a.createElement("td", null, "BP"),
                          i.a.createElement("td", null, "Rate"),
                          i.a.createElement("td", null, "Oxygen"),
                          i.a.createElement("td", { colSpan: 2 }, "Temp")
                        )
                      ),
                      i.a.createElement(
                        "tbody",
                        null,
                        t &&
                          t.map((e, t) =>
                            i.a.createElement(
                              i.a.Fragment,
                              { key: e.id },
                              i.a.createElement(
                                "tr",
                                null,
                                i.a.createElement("td", null, wt(e.date)),
                                i.a.createElement(
                                  "td",
                                  null,
                                  ""
                                    .concat(e.systolic, " / ")
                                    .concat(e.diastolic),
                                  0 === t &&
                                    i.a.createElement("span", null, " mmHg")
                                ),
                                i.a.createElement(
                                  "td",
                                  null,
                                  e.pulse,
                                  " ",
                                  0 === t &&
                                    i.a.createElement("span", null, "bpm")
                                ),
                                i.a.createElement(
                                  "td",
                                  null,
                                  e.oxygenation,
                                  " ",
                                  0 === t &&
                                    i.a.createElement("span", null, "%")
                                ),
                                i.a.createElement(
                                  "td",
                                  null,
                                  e.temperature,
                                  0 === t &&
                                    i.a.createElement("span", null, " ℃")
                                ),
                                i.a.createElement(
                                  "td",
                                  null,
                                  i.a.createElement(
                                    "svg",
                                    {
                                      className: "omrs-icon",
                                      fill: "var(--omrs-color-ink-low-contrast)"
                                    },
                                    i.a.createElement("use", {
                                      xlinkHref: "#omrs-icon-chevron-right"
                                    })
                                  )
                                )
                              )
                            )
                          )
                      )
                    ),
                    i.a.createElement(h, {
                      linkTo: "/patient/".concat(o, "/chart/vitals")
                    })
                  )
                );
              }
              var ai = n(27),
                ii = n.n(ai);
              function oi(e) {
                const [t, n] = i.a.useState(null),
                  [r, a] = i.a.useState(1),
                  [o, l] = i.a.useState(1),
                  [s, c] = i.a.useState(!1),
                  [m, d] = i.a.useState(!1),
                  [_, p] = i.a.useState([]),
                  [f, h, g, v] = Object(me.useCurrentPatient)();
                i.a.useEffect(() => {
                  if (!f && h) {
                    const e = Yt(h.id).subscribe(e => {
                      n(e), a(Math.ceil(e.length / 15)), p(e.slice(0, 15));
                    }, Object(Ue.createErrorHandler)());
                    return () => e.unsubscribe();
                  }
                }, [f, h]),
                  i.a.useEffect(() => {
                    t && 15 * o > t.length ? c(!1) : c(!0), d(1 !== o);
                  }, [_, o, t]);
                const y = () => {
                    let e = 15 * o + 15;
                    const n = 15 * o;
                    e > t.length && (e = t.length);
                    const r = t.slice(n, e);
                    p(r), l(o + 1);
                  },
                  b = () => {
                    const e = 15 * (o - 2),
                      n = 15 * (o - 1),
                      r = t.slice(e, n);
                    p(r), l(o - 1);
                  },
                  A = (e, t) => {
                    Object(me.newWorkspaceItem)({
                      component: e,
                      name: t,
                      props: { match: { params: {} } },
                      inProgress: !1,
                      validations: t => t.findIndex(t => t.component === e)
                    });
                  };
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  t &&
                    i.a.createElement(
                      "div",
                      { className: ii.a.vitalsSummary },
                      t.length > 0
                        ? i.a.createElement(
                            u,
                            { name: "Vitals", styles: { width: "100%" } },
                            i.a.createElement(
                              "table",
                              { className: ii.a.vitalsTable },
                              i.a.createElement(
                                "thead",
                                null,
                                i.a.createElement(
                                  "tr",
                                  { className: "omrs-bold" },
                                  i.a.createElement("td", null),
                                  i.a.createElement("td", null, "BP"),
                                  i.a.createElement("td", null, "Rate"),
                                  i.a.createElement("td", null, "Oxygen"),
                                  i.a.createElement(
                                    "td",
                                    { colSpan: 2 },
                                    "Temp"
                                  )
                                )
                              ),
                              i.a.createElement(
                                "tbody",
                                null,
                                _ &&
                                  _.map((e, t) =>
                                    i.a.createElement(
                                      i.a.Fragment,
                                      { key: e.id },
                                      i.a.createElement(
                                        "tr",
                                        null,
                                        i.a.createElement(
                                          "td",
                                          null,
                                          wt(e.date)
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          ""
                                            .concat(e.systolic, " / ")
                                            .concat(e.diastolic),
                                          0 === t &&
                                            i.a.createElement(
                                              "span",
                                              null,
                                              " mmHg "
                                            )
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          e.pulse,
                                          " ",
                                          0 === t &&
                                            i.a.createElement(
                                              "span",
                                              null,
                                              "bpm"
                                            )
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          e.oxygenation,
                                          " ",
                                          0 === t &&
                                            i.a.createElement("span", null, "%")
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          e.temperature,
                                          0 === t &&
                                            i.a.createElement(
                                              "span",
                                              null,
                                              " ℃ "
                                            )
                                        ),
                                        i.a.createElement(
                                          "td",
                                          null,
                                          i.a.createElement(
                                            "svg",
                                            {
                                              className: "omrs-icon",
                                              fill: "rgba(0, 0, 0, 0.54)"
                                            },
                                            i.a.createElement("use", {
                                              xlinkHref:
                                                "#omrs-icon-chevron-right"
                                            })
                                          )
                                        )
                                      )
                                    )
                                  )
                              )
                            ),
                            i.a.createElement(
                              "div",
                              { className: ii.a.pagination },
                              i.a.createElement(
                                "div",
                                null,
                                m &&
                                  i.a.createElement(
                                    "button",
                                    {
                                      onClick: b,
                                      className: "".concat(
                                        ii.a.navButton,
                                        " omrs-bold omrs-btn omrs-text-neutral omrs-rounded"
                                      )
                                    },
                                    i.a.createElement(
                                      "svg",
                                      {
                                        className: "omrs-icon",
                                        fill: "rgba(0, 0, 0, 0.54)"
                                      },
                                      i.a.createElement("use", {
                                        xlinkHref: "#omrs-icon-chevron-left"
                                      })
                                    ),
                                    "Previous"
                                  )
                              ),
                              i.a.createElement(
                                "div",
                                null,
                                "Page ",
                                o,
                                " of ",
                                r
                              ),
                              i.a.createElement(
                                "div",
                                null,
                                s &&
                                  i.a.createElement(
                                    "button",
                                    {
                                      onClick: y,
                                      className: "".concat(
                                        ii.a.navButton,
                                        " omrs-bold omrs-btn omrs-text-neutral omrs-rounded"
                                      )
                                    },
                                    "Next",
                                    i.a.createElement(
                                      "svg",
                                      {
                                        className: "omrs-icon",
                                        fill: "rgba(0, 0, 0, 0.54)"
                                      },
                                      i.a.createElement("use", {
                                        xlinkHref: "#omrs-icon-chevron-right"
                                      })
                                    )
                                  )
                              )
                            )
                          )
                        : i.a.createElement(
                            u,
                            {
                              name: "Vitals",
                              styles: {
                                width: "100%",
                                backgroundColor:
                                  "var(--omrs-color-bg-low-contrast)",
                                boxShadow: "none",
                                border: "none"
                              },
                              addComponent: Tr,
                              showComponent: () => A(Tr, "Vitals Form")
                            },
                            i.a.createElement(
                              "div",
                              {
                                className: "".concat(
                                  ii.a.vitalsAbsent,
                                  " omrs-bold"
                                )
                              },
                              i.a.createElement(
                                "p",
                                null,
                                "No Vitals are documented"
                              ),
                              i.a.createElement(
                                "button",
                                {
                                  className: "omrs-unstyled",
                                  onClick: () => A(Tr, "Vitals Form")
                                },
                                "Add"
                              ),
                              " ",
                              " new set of vitals."
                            )
                          )
                    )
                );
              }
              const li = n(57);
            }
          ])
        );
      }
    };
  }
);
//# sourceMappingURL=openmrs-esm-patient-chart-widgets.js.map
