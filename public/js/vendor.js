function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
  1: function _(e, t, n) {
    n("EVdn"), e.exports = n("MIQu");
  },
  EVdn: function EVdn(e, t, n) {
    var i;
    !function (t, n) {
      "use strict";

      "object" == _typeof(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return n(e);
      } : n(t);
    }("undefined" != typeof window ? window : this, function (n, r) {
      "use strict";

      var o = [],
          s = n.document,
          a = Object.getPrototypeOf,
          u = o.slice,
          l = o.concat,
          c = o.push,
          f = o.indexOf,
          d = {},
          h = d.toString,
          p = d.hasOwnProperty,
          g = p.toString,
          v = g.call(Object),
          y = {},
          m = function m(e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
      },
          b = function b(e) {
        return null != e && e === e.window;
      },
          x = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };

      function w(e, t, n) {
        var i,
            r,
            o = (n = n || s).createElement("script");
        if (o.text = e, t) for (i in x) {
          (r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
        }
        n.head.appendChild(o).parentNode.removeChild(o);
      }

      function C(e) {
        return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? d[h.call(e)] || "object" : _typeof(e);
      }

      var T = function T(e, t) {
        return new T.fn.init(e, t);
      },
          E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

      function _(e) {
        var t = !!e && "length" in e && e.length,
            n = C(e);
        return !m(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
      }

      T.fn = T.prototype = {
        jquery: "3.4.1",
        constructor: T,
        length: 0,
        toArray: function toArray() {
          return u.call(this);
        },
        get: function get(e) {
          return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function pushStack(e) {
          var t = T.merge(this.constructor(), e);
          return t.prevObject = this, t;
        },
        each: function each(e) {
          return T.each(this, e);
        },
        map: function map(e) {
          return this.pushStack(T.map(this, function (t, n) {
            return e.call(t, n, t);
          }));
        },
        slice: function slice() {
          return this.pushStack(u.apply(this, arguments));
        },
        first: function first() {
          return this.eq(0);
        },
        last: function last() {
          return this.eq(-1);
        },
        eq: function eq(e) {
          var t = this.length,
              n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function end() {
          return this.prevObject || this.constructor();
        },
        push: c,
        sort: o.sort,
        splice: o.splice
      }, T.extend = T.fn.extend = function () {
        var e,
            t,
            n,
            i,
            r,
            o,
            s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;

        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == _typeof(s) || m(s) || (s = {}), a === u && (s = this, a--); a < u; a++) {
          if (null != (e = arguments[a])) for (t in e) {
            i = e[t], "__proto__" !== t && s !== i && (l && i && (T.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || T.isPlainObject(n) ? n : {}, r = !1, s[t] = T.extend(l, o, i)) : void 0 !== i && (s[t] = i));
          }
        }

        return s;
      }, T.extend({
        expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function error(e) {
          throw new Error(e);
        },
        noop: function noop() {},
        isPlainObject: function isPlainObject(e) {
          var t, n;
          return !(!e || "[object Object]" !== h.call(e)) && (!(t = a(e)) || "function" == typeof (n = p.call(t, "constructor") && t.constructor) && g.call(n) === v);
        },
        isEmptyObject: function isEmptyObject(e) {
          var t;

          for (t in e) {
            return !1;
          }

          return !0;
        },
        globalEval: function globalEval(e, t) {
          w(e, {
            nonce: t && t.nonce
          });
        },
        each: function each(e, t) {
          var n,
              i = 0;
          if (_(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) {
            ;
          } else for (i in e) {
            if (!1 === t.call(e[i], i, e[i])) break;
          }
          return e;
        },
        trim: function trim(e) {
          return null == e ? "" : (e + "").replace(E, "");
        },
        makeArray: function makeArray(e, t) {
          var n = t || [];
          return null != e && (_(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
        },
        inArray: function inArray(e, t, n) {
          return null == t ? -1 : f.call(t, e, n);
        },
        merge: function merge(e, t) {
          for (var n = +t.length, i = 0, r = e.length; i < n; i++) {
            e[r++] = t[i];
          }

          return e.length = r, e;
        },
        grep: function grep(e, t, n) {
          for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) {
            !t(e[r], r) !== s && i.push(e[r]);
          }

          return i;
        },
        map: function map(e, t, n) {
          var i,
              r,
              o = 0,
              s = [];
          if (_(e)) for (i = e.length; o < i; o++) {
            null != (r = t(e[o], o, n)) && s.push(r);
          } else for (o in e) {
            null != (r = t(e[o], o, n)) && s.push(r);
          }
          return l.apply([], s);
        },
        guid: 1,
        support: y
      }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = o[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        d["[object " + t + "]"] = t.toLowerCase();
      });

      var k = function (e) {
        var t,
            n,
            i,
            r,
            o,
            s,
            a,
            u,
            l,
            c,
            f,
            d,
            h,
            p,
            g,
            v,
            y,
            m,
            b,
            x = "sizzle" + 1 * new Date(),
            w = e.document,
            C = 0,
            T = 0,
            E = ue(),
            _ = ue(),
            k = ue(),
            A = ue(),
            N = function N(e, t) {
          return e === t && (f = !0), 0;
        },
            S = {}.hasOwnProperty,
            D = [],
            j = D.pop,
            L = D.push,
            q = D.push,
            P = D.slice,
            O = function O(e, t) {
          for (var n = 0, i = e.length; n < i; n++) {
            if (e[n] === t) return n;
          }

          return -1;
        },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + I + "*(" + R + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + I + "*\\]",
            F = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            W = new RegExp(I + "+", "g"),
            $ = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            B = new RegExp("^" + I + "*," + I + "*"),
            z = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            U = new RegExp(I + "|>"),
            V = new RegExp(F),
            X = new RegExp("^" + R + "$"),
            Q = {
          ID: new RegExp("^#(" + R + ")"),
          CLASS: new RegExp("^\\.(" + R + ")"),
          TAG: new RegExp("^(" + R + "|[*])"),
          ATTR: new RegExp("^" + M),
          PSEUDO: new RegExp("^" + F),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + H + ")$", "i"),
          needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
        },
            G = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
            ne = function ne(e, t, n) {
          var i = "0x" + t - 65536;
          return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function re(e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        },
            oe = function oe() {
          d();
        },
            se = xe(function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        }, {
          dir: "parentNode",
          next: "legend"
        });

        try {
          q.apply(D = P.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType;
        } catch (e) {
          q = {
            apply: D.length ? function (e, t) {
              L.apply(e, P.call(t));
            } : function (e, t) {
              for (var n = e.length, i = 0; e[n++] = t[i++];) {
                ;
              }

              e.length = n - 1;
            }
          };
        }

        function ae(e, t, i, r) {
          var o,
              a,
              l,
              c,
              f,
              p,
              y,
              m = t && t.ownerDocument,
              C = t ? t.nodeType : 9;
          if (i = i || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return i;

          if (!r && ((t ? t.ownerDocument || t : w) !== h && d(t), t = t || h, g)) {
            if (11 !== C && (f = Z.exec(e))) if (o = f[1]) {
              if (9 === C) {
                if (!(l = t.getElementById(o))) return i;
                if (l.id === o) return i.push(l), i;
              } else if (m && (l = m.getElementById(o)) && b(t, l) && l.id === o) return i.push(l), i;
            } else {
              if (f[2]) return q.apply(i, t.getElementsByTagName(e)), i;
              if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(i, t.getElementsByClassName(o)), i;
            }

            if (n.qsa && !A[e + " "] && (!v || !v.test(e)) && (1 !== C || "object" !== t.nodeName.toLowerCase())) {
              if (y = e, m = t, 1 === C && U.test(e)) {
                for ((c = t.getAttribute("id")) ? c = c.replace(ie, re) : t.setAttribute("id", c = x), a = (p = s(e)).length; a--;) {
                  p[a] = "#" + c + " " + be(p[a]);
                }

                y = p.join(","), m = ee.test(e) && ye(t.parentNode) || t;
              }

              try {
                return q.apply(i, m.querySelectorAll(y)), i;
              } catch (t) {
                A(e, !0);
              } finally {
                c === x && t.removeAttribute("id");
              }
            }
          }

          return u(e.replace($, "$1"), t, i, r);
        }

        function ue() {
          var e = [];
          return function t(n, r) {
            return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r;
          };
        }

        function le(e) {
          return e[x] = !0, e;
        }

        function ce(e) {
          var t = h.createElement("fieldset");

          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null;
          }
        }

        function fe(e, t) {
          for (var n = e.split("|"), r = n.length; r--;) {
            i.attrHandle[n[r]] = t;
          }
        }

        function de(e, t) {
          var n = t && e,
              i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (i) return i;
          if (n) for (; n = n.nextSibling;) {
            if (n === t) return -1;
          }
          return e ? 1 : -1;
        }

        function he(e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        }

        function pe(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        }

        function ge(e) {
          return function (t) {
            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e;
          };
        }

        function ve(e) {
          return le(function (t) {
            return t = +t, le(function (n, i) {
              for (var r, o = e([], n.length, t), s = o.length; s--;) {
                n[r = o[s]] && (n[r] = !(i[r] = n[r]));
              }
            });
          });
        }

        function ye(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }

        for (t in n = ae.support = {}, o = ae.isXML = function (e) {
          var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
          return !G.test(t || n && n.nodeName || "HTML");
        }, d = ae.setDocument = function (e) {
          var t,
              r,
              s = e ? e.ownerDocument || e : w;
          return s !== h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement, g = !o(h), w !== h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.attributes = ce(function (e) {
            return e.className = "i", !e.getAttribute("className");
          }), n.getElementsByTagName = ce(function (e) {
            return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
          }), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = ce(function (e) {
            return p.appendChild(e).id = x, !h.getElementsByName || !h.getElementsByName(x).length;
          }), n.getById ? (i.filter.ID = function (e) {
            var t = e.replace(te, ne);
            return function (e) {
              return e.getAttribute("id") === t;
            };
          }, i.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && g) {
              var n = t.getElementById(e);
              return n ? [n] : [];
            }
          }) : (i.filter.ID = function (e) {
            var t = e.replace(te, ne);
            return function (e) {
              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return n && n.value === t;
            };
          }, i.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && g) {
              var n,
                  i,
                  r,
                  o = t.getElementById(e);

              if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];

                for (r = t.getElementsByName(e), i = 0; o = r[i++];) {
                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                }
              }

              return [];
            }
          }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
          } : function (e, t) {
            var n,
                i = [],
                r = 0,
                o = t.getElementsByTagName(e);

            if ("*" === e) {
              for (; n = o[r++];) {
                1 === n.nodeType && i.push(n);
              }

              return i;
            }

            return o;
          }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
          }, y = [], v = [], (n.qsa = J.test(h.querySelectorAll)) && (ce(function (e) {
            p.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]");
          }), ce(function (e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t = h.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
          })), (n.matchesSelector = J.test(m = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce(function (e) {
            n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", F);
          }), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = J.test(p.compareDocumentPosition), b = t || J.test(p.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
                i = t && t.parentNode;
            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
          } : function (e, t) {
            if (t) for (; t = t.parentNode;) {
              if (t === e) return !0;
            }
            return !1;
          }, N = t ? function (e, t) {
            if (e === t) return f = !0, 0;
            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === w && b(w, e) ? -1 : t === h || t.ownerDocument === w && b(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & i ? -1 : 1);
          } : function (e, t) {
            if (e === t) return f = !0, 0;
            var n,
                i = 0,
                r = e.parentNode,
                o = t.parentNode,
                s = [e],
                a = [t];
            if (!r || !o) return e === h ? -1 : t === h ? 1 : r ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
            if (r === o) return de(e, t);

            for (n = e; n = n.parentNode;) {
              s.unshift(n);
            }

            for (n = t; n = n.parentNode;) {
              a.unshift(n);
            }

            for (; s[i] === a[i];) {
              i++;
            }

            return i ? de(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0;
          }, h) : h;
        }, ae.matches = function (e, t) {
          return ae(e, null, null, t);
        }, ae.matchesSelector = function (e, t) {
          if ((e.ownerDocument || e) !== h && d(e), n.matchesSelector && g && !A[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t))) try {
            var i = m.call(e, t);
            if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
          } catch (e) {
            A(t, !0);
          }
          return ae(t, h, null, [e]).length > 0;
        }, ae.contains = function (e, t) {
          return (e.ownerDocument || e) !== h && d(e), b(e, t);
        }, ae.attr = function (e, t) {
          (e.ownerDocument || e) !== h && d(e);
          var r = i.attrHandle[t.toLowerCase()],
              o = r && S.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
          return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }, ae.escape = function (e) {
          return (e + "").replace(ie, re);
        }, ae.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }, ae.uniqueSort = function (e) {
          var t,
              i = [],
              r = 0,
              o = 0;

          if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(N), f) {
            for (; t = e[o++];) {
              t === e[o] && (r = i.push(o));
            }

            for (; r--;) {
              e.splice(i[r], 1);
            }
          }

          return c = null, e;
        }, r = ae.getText = function (e) {
          var t,
              n = "",
              i = 0,
              o = e.nodeType;

          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;

              for (e = e.firstChild; e; e = e.nextSibling) {
                n += r(e);
              }
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; t = e[i++];) {
            n += r(t);
          }

          return n;
        }, (i = ae.selectors = {
          cacheLength: 50,
          createPseudo: le,
          match: Q,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function ATTR(e) {
              return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
            },
            CHILD: function CHILD(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e;
            },
            PSEUDO: function PSEUDO(e) {
              var t,
                  n = !e[6] && e[2];
              return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
            }
          },
          filter: {
            TAG: function TAG(e) {
              var t = e.replace(te, ne).toLowerCase();
              return "*" === e ? function () {
                return !0;
              } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
            },
            CLASS: function CLASS(e) {
              var t = E[e + " "];
              return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && E(e, function (e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
              });
            },
            ATTR: function ATTR(e, t, n) {
              return function (i) {
                var r = ae.attr(i, e);
                return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function CHILD(e, t, n, i, r) {
              var o = "nth" !== e.slice(0, 3),
                  s = "last" !== e.slice(-4),
                  a = "of-type" === t;
              return 1 === i && 0 === r ? function (e) {
                return !!e.parentNode;
              } : function (t, n, u) {
                var l,
                    c,
                    f,
                    d,
                    h,
                    p,
                    g = o !== s ? "nextSibling" : "previousSibling",
                    v = t.parentNode,
                    y = a && t.nodeName.toLowerCase(),
                    m = !u && !a,
                    b = !1;

                if (v) {
                  if (o) {
                    for (; g;) {
                      for (d = t; d = d[g];) {
                        if (a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                      }

                      p = g = "only" === e && !p && "nextSibling";
                    }

                    return !0;
                  }

                  if (p = [s ? v.firstChild : v.lastChild], s && m) {
                    for (b = (h = (l = (c = (f = (d = v)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === C && l[1]) && l[2], d = h && v.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || p.pop();) {
                      if (1 === d.nodeType && ++b && d === t) {
                        c[e] = [C, h, b];
                        break;
                      }
                    }
                  } else if (m && (b = h = (l = (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === C && l[1]), !1 === b) for (; (d = ++h && d && d[g] || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++b || (m && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [C, b]), d !== t));) {
                    ;
                  }

                  return (b -= r) === i || b % i == 0 && b / i >= 0;
                }
              };
            },
            PSEUDO: function PSEUDO(e, t) {
              var n,
                  r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
              return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, n) {
                for (var i, o = r(e, t), s = o.length; s--;) {
                  e[i = O(e, o[s])] = !(n[i] = o[s]);
                }
              }) : function (e) {
                return r(e, 0, n);
              }) : r;
            }
          },
          pseudos: {
            not: le(function (e) {
              var t = [],
                  n = [],
                  i = a(e.replace($, "$1"));
              return i[x] ? le(function (e, t, n, r) {
                for (var o, s = i(e, null, r, []), a = e.length; a--;) {
                  (o = s[a]) && (e[a] = !(t[a] = o));
                }
              }) : function (e, r, o) {
                return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
              };
            }),
            has: le(function (e) {
              return function (t) {
                return ae(e, t).length > 0;
              };
            }),
            contains: le(function (e) {
              return e = e.replace(te, ne), function (t) {
                return (t.textContent || r(t)).indexOf(e) > -1;
              };
            }),
            lang: le(function (e) {
              return X.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                var n;

                do {
                  if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                } while ((t = t.parentNode) && 1 === t.nodeType);

                return !1;
              };
            }),
            target: function target(t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function root(e) {
              return e === p;
            },
            focus: function focus(e) {
              return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
            },
            enabled: ge(!1),
            disabled: ge(!0),
            checked: function checked(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected;
            },
            selected: function selected(e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
            },
            empty: function empty(e) {
              for (e = e.firstChild; e; e = e.nextSibling) {
                if (e.nodeType < 6) return !1;
              }

              return !0;
            },
            parent: function parent(e) {
              return !i.pseudos.empty(e);
            },
            header: function header(e) {
              return Y.test(e.nodeName);
            },
            input: function input(e) {
              return K.test(e.nodeName);
            },
            button: function button(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t;
            },
            text: function text(e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
            },
            first: ve(function () {
              return [0];
            }),
            last: ve(function (e, t) {
              return [t - 1];
            }),
            eq: ve(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: ve(function (e, t) {
              for (var n = 0; n < t; n += 2) {
                e.push(n);
              }

              return e;
            }),
            odd: ve(function (e, t) {
              for (var n = 1; n < t; n += 2) {
                e.push(n);
              }

              return e;
            }),
            lt: ve(function (e, t, n) {
              for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) {
                e.push(i);
              }

              return e;
            }),
            gt: ve(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t;) {
                e.push(i);
              }

              return e;
            })
          }
        }).pseudos.nth = i.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) {
          i.pseudos[t] = he(t);
        }

        for (t in {
          submit: !0,
          reset: !0
        }) {
          i.pseudos[t] = pe(t);
        }

        function me() {}

        function be(e) {
          for (var t = 0, n = e.length, i = ""; t < n; t++) {
            i += e[t].value;
          }

          return i;
        }

        function xe(e, t, n) {
          var i = t.dir,
              r = t.next,
              o = r || i,
              s = n && "parentNode" === o,
              a = T++;
          return t.first ? function (t, n, r) {
            for (; t = t[i];) {
              if (1 === t.nodeType || s) return e(t, n, r);
            }

            return !1;
          } : function (t, n, u) {
            var l,
                c,
                f,
                d = [C, a];

            if (u) {
              for (; t = t[i];) {
                if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
              }
            } else for (; t = t[i];) {
              if (1 === t.nodeType || s) if (c = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;else {
                if ((l = c[o]) && l[0] === C && l[1] === a) return d[2] = l[2];
                if (c[o] = d, d[2] = e(t, n, u)) return !0;
              }
            }

            return !1;
          };
        }

        function we(e) {
          return e.length > 1 ? function (t, n, i) {
            for (var r = e.length; r--;) {
              if (!e[r](t, n, i)) return !1;
            }

            return !0;
          } : e[0];
        }

        function Ce(e, t, n, i, r) {
          for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++) {
            (o = e[a]) && (n && !n(o, i, r) || (s.push(o), l && t.push(a)));
          }

          return s;
        }

        function Te(e, t, n, i, r, o) {
          return i && !i[x] && (i = Te(i)), r && !r[x] && (r = Te(r, o)), le(function (o, s, a, u) {
            var l,
                c,
                f,
                d = [],
                h = [],
                p = s.length,
                g = o || function (e, t, n) {
              for (var i = 0, r = t.length; i < r; i++) {
                ae(e, t[i], n);
              }

              return n;
            }(t || "*", a.nodeType ? [a] : a, []),
                v = !e || !o && t ? g : Ce(g, d, e, a, u),
                y = n ? r || (o ? e : p || i) ? [] : s : v;

            if (n && n(v, y, a, u), i) for (l = Ce(y, h), i(l, [], a, u), c = l.length; c--;) {
              (f = l[c]) && (y[h[c]] = !(v[h[c]] = f));
            }

            if (o) {
              if (r || e) {
                if (r) {
                  for (l = [], c = y.length; c--;) {
                    (f = y[c]) && l.push(v[c] = f);
                  }

                  r(null, y = [], l, u);
                }

                for (c = y.length; c--;) {
                  (f = y[c]) && (l = r ? O(o, f) : d[c]) > -1 && (o[l] = !(s[l] = f));
                }
              }
            } else y = Ce(y === s ? y.splice(p, y.length) : y), r ? r(null, s, y, u) : q.apply(s, y);
          });
        }

        function Ee(e) {
          for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], u = s ? 1 : 0, c = xe(function (e) {
            return e === t;
          }, a, !0), f = xe(function (e) {
            return O(t, e) > -1;
          }, a, !0), d = [function (e, n, i) {
            var r = !s && (i || n !== l) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
            return t = null, r;
          }]; u < o; u++) {
            if (n = i.relative[e[u].type]) d = [xe(we(d), n)];else {
              if ((n = i.filter[e[u].type].apply(null, e[u].matches))[x]) {
                for (r = ++u; r < o && !i.relative[e[r].type]; r++) {
                  ;
                }

                return Te(u > 1 && we(d), u > 1 && be(e.slice(0, u - 1).concat({
                  value: " " === e[u - 2].type ? "*" : ""
                })).replace($, "$1"), n, u < r && Ee(e.slice(u, r)), r < o && Ee(e = e.slice(r)), r < o && be(e));
              }

              d.push(n);
            }
          }

          return we(d);
        }

        return me.prototype = i.filters = i.pseudos, i.setFilters = new me(), s = ae.tokenize = function (e, t) {
          var n,
              r,
              o,
              s,
              a,
              u,
              l,
              c = _[e + " "];
          if (c) return t ? 0 : c.slice(0);

          for (a = e, u = [], l = i.preFilter; a;) {
            for (s in n && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), o.push({
              value: n,
              type: r[0].replace($, " ")
            }), a = a.slice(n.length)), i.filter) {
              !(r = Q[s].exec(a)) || l[s] && !(r = l[s](r)) || (n = r.shift(), o.push({
                value: n,
                type: s,
                matches: r
              }), a = a.slice(n.length));
            }

            if (!n) break;
          }

          return t ? a.length : a ? ae.error(e) : _(e, u).slice(0);
        }, a = ae.compile = function (e, t) {
          var n,
              r = [],
              o = [],
              a = k[e + " "];

          if (!a) {
            for (t || (t = s(e)), n = t.length; n--;) {
              (a = Ee(t[n]))[x] ? r.push(a) : o.push(a);
            }

            (a = k(e, function (e, t) {
              var n = t.length > 0,
                  r = e.length > 0,
                  o = function o(_o, s, a, u, c) {
                var f,
                    p,
                    v,
                    y = 0,
                    m = "0",
                    b = _o && [],
                    x = [],
                    w = l,
                    T = _o || r && i.find.TAG("*", c),
                    E = C += null == w ? 1 : Math.random() || .1,
                    _ = T.length;

                for (c && (l = s === h || s || c); m !== _ && null != (f = T[m]); m++) {
                  if (r && f) {
                    for (p = 0, s || f.ownerDocument === h || (d(f), a = !g); v = e[p++];) {
                      if (v(f, s || h, a)) {
                        u.push(f);
                        break;
                      }
                    }

                    c && (C = E);
                  }

                  n && ((f = !v && f) && y--, _o && b.push(f));
                }

                if (y += m, n && m !== y) {
                  for (p = 0; v = t[p++];) {
                    v(b, x, s, a);
                  }

                  if (_o) {
                    if (y > 0) for (; m--;) {
                      b[m] || x[m] || (x[m] = j.call(u));
                    }
                    x = Ce(x);
                  }

                  q.apply(u, x), c && !_o && x.length > 0 && y + t.length > 1 && ae.uniqueSort(u);
                }

                return c && (C = E, l = w), b;
              };

              return n ? le(o) : o;
            }(o, r))).selector = e;
          }

          return a;
        }, u = ae.select = function (e, t, n, r) {
          var o,
              u,
              l,
              c,
              f,
              d = "function" == typeof e && e,
              h = !r && s(e = d.selector || e);

          if (n = n || [], 1 === h.length) {
            if ((u = h[0] = h[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && i.relative[u[1].type]) {
              if (!(t = (i.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
              d && (t = t.parentNode), e = e.slice(u.shift().value.length);
            }

            for (o = Q.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !i.relative[c = l.type]);) {
              if ((f = i.find[c]) && (r = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
                if (u.splice(o, 1), !(e = r.length && be(u))) return q.apply(n, r), n;
                break;
              }
            }
          }

          return (d || a(e, h))(r, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
        }, n.sortStable = x.split("").sort(N).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = ce(function (e) {
          return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
        }), ce(function (e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), n.attributes && ce(function (e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ce(function (e) {
          return null == e.getAttribute("disabled");
        }) || fe(H, function (e, t, n) {
          var i;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }), ae;
      }(n);

      T.find = k, T.expr = k.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = k.uniqueSort, T.text = k.getText, T.isXMLDoc = k.isXML, T.contains = k.contains, T.escapeSelector = k.escape;

      var A = function A(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
          if (1 === e.nodeType) {
            if (r && T(e).is(n)) break;
            i.push(e);
          }
        }

        return i;
      },
          N = function N(e, t) {
        for (var n = []; e; e = e.nextSibling) {
          1 === e.nodeType && e !== t && n.push(e);
        }

        return n;
      },
          S = T.expr.match.needsContext;

      function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }

      var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function L(e, t, n) {
        return m(t) ? T.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        }) : t.nodeType ? T.grep(e, function (e) {
          return e === t !== n;
        }) : "string" != typeof t ? T.grep(e, function (e) {
          return f.call(t, e) > -1 !== n;
        }) : T.filter(t, e, n);
      }

      T.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, function (e) {
          return 1 === e.nodeType;
        }));
      }, T.fn.extend({
        find: function find(e) {
          var t,
              n,
              i = this.length,
              r = this;
          if ("string" != typeof e) return this.pushStack(T(e).filter(function () {
            for (t = 0; t < i; t++) {
              if (T.contains(r[t], this)) return !0;
            }
          }));

          for (n = this.pushStack([]), t = 0; t < i; t++) {
            T.find(e, r[t], n);
          }

          return i > 1 ? T.uniqueSort(n) : n;
        },
        filter: function filter(e) {
          return this.pushStack(L(this, e || [], !1));
        },
        not: function not(e) {
          return this.pushStack(L(this, e || [], !0));
        },
        is: function is(e) {
          return !!L(this, "string" == typeof e && S.test(e) ? T(e) : e || [], !1).length;
        }
      });
      var q,
          P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (T.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;

        if (n = n || q, "string" == typeof e) {
          if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : P.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

          if (i[1]) {
            if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), j.test(i[1]) && T.isPlainObject(t)) for (i in t) {
              m(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            }
            return this;
          }

          return (r = s.getElementById(i[2])) && (this[0] = r, this.length = 1), this;
        }

        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
      }).prototype = T.fn, q = T(s);
      var O = /^(?:parents|prev(?:Until|All))/,
          H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

      function I(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) {
          ;
        }

        return e;
      }

      T.fn.extend({
        has: function has(e) {
          var t = T(e, this),
              n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) {
              if (T.contains(this, t[e])) return !0;
            }
          });
        },
        closest: function closest(e, t) {
          var n,
              i = 0,
              r = this.length,
              o = [],
              s = "string" != typeof e && T(e);
          if (!S.test(e)) for (; i < r; i++) {
            for (n = this[i]; n && n !== t; n = n.parentNode) {
              if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                o.push(n);
                break;
              }
            }
          }
          return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
        },
        index: function index(e) {
          return e ? "string" == typeof e ? f.call(T(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function add(e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function addBack(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
      }), T.each({
        parent: function parent(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function parents(e) {
          return A(e, "parentNode");
        },
        parentsUntil: function parentsUntil(e, t, n) {
          return A(e, "parentNode", n);
        },
        next: function next(e) {
          return I(e, "nextSibling");
        },
        prev: function prev(e) {
          return I(e, "previousSibling");
        },
        nextAll: function nextAll(e) {
          return A(e, "nextSibling");
        },
        prevAll: function prevAll(e) {
          return A(e, "previousSibling");
        },
        nextUntil: function nextUntil(e, t, n) {
          return A(e, "nextSibling", n);
        },
        prevUntil: function prevUntil(e, t, n) {
          return A(e, "previousSibling", n);
        },
        siblings: function siblings(e) {
          return N((e.parentNode || {}).firstChild, e);
        },
        children: function children(e) {
          return N(e.firstChild);
        },
        contents: function contents(e) {
          return void 0 !== e.contentDocument ? e.contentDocument : (D(e, "template") && (e = e.content || e), T.merge([], e.childNodes));
        }
      }, function (e, t) {
        T.fn[e] = function (n, i) {
          var r = T.map(this, t, n);
          return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = T.filter(i, r)), this.length > 1 && (H[e] || T.uniqueSort(r), O.test(e) && r.reverse()), this.pushStack(r);
        };
      });
      var R = /[^\x20\t\r\n\f]+/g;

      function M(e) {
        return e;
      }

      function F(e) {
        throw e;
      }

      function W(e, t, n, i) {
        var r;

        try {
          e && m(r = e.promise) ? r.call(e).done(t).fail(n) : e && m(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }

      T.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
          var t = {};
          return T.each(e.match(R) || [], function (e, n) {
            t[n] = !0;
          }), t;
        }(e) : T.extend({}, e);

        var t,
            n,
            i,
            r,
            o = [],
            s = [],
            a = -1,
            u = function u() {
          for (r = r || e.once, i = t = !0; s.length; a = -1) {
            for (n = s.shift(); ++a < o.length;) {
              !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
            }
          }

          e.memory || (n = !1), t = !1, r && (o = n ? [] : "");
        },
            l = {
          add: function add() {
            return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
              T.each(n, function (n, i) {
                m(i) ? e.unique && l.has(i) || o.push(i) : i && i.length && "string" !== C(i) && t(i);
              });
            }(arguments), n && !t && u()), this;
          },
          remove: function remove() {
            return T.each(arguments, function (e, t) {
              for (var n; (n = T.inArray(t, o, n)) > -1;) {
                o.splice(n, 1), n <= a && a--;
              }
            }), this;
          },
          has: function has(e) {
            return e ? T.inArray(e, o) > -1 : o.length > 0;
          },
          empty: function empty() {
            return o && (o = []), this;
          },
          disable: function disable() {
            return r = s = [], o = n = "", this;
          },
          disabled: function disabled() {
            return !o;
          },
          lock: function lock() {
            return r = s = [], n || t || (o = n = ""), this;
          },
          locked: function locked() {
            return !!r;
          },
          fireWith: function fireWith(e, n) {
            return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || u()), this;
          },
          fire: function fire() {
            return l.fireWith(this, arguments), this;
          },
          fired: function fired() {
            return !!i;
          }
        };

        return l;
      }, T.extend({
        Deferred: function Deferred(e) {
          var t = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]],
              i = "pending",
              r = {
            state: function state() {
              return i;
            },
            always: function always() {
              return o.done(arguments).fail(arguments), this;
            },
            "catch": function _catch(e) {
              return r.then(null, e);
            },
            pipe: function pipe() {
              var e = arguments;
              return T.Deferred(function (n) {
                T.each(t, function (t, i) {
                  var r = m(e[i[4]]) && e[i[4]];
                  o[i[1]](function () {
                    var e = r && r.apply(this, arguments);
                    e && m(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments);
                  });
                }), e = null;
              }).promise();
            },
            then: function then(e, i, r) {
              var o = 0;

              function s(e, t, i, r) {
                return function () {
                  var a = this,
                      u = arguments,
                      l = function l() {
                    var n, l;

                    if (!(e < o)) {
                      if ((n = i.apply(a, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                      l = n && ("object" == _typeof(n) || "function" == typeof n) && n.then, m(l) ? r ? l.call(n, s(o, t, M, r), s(o, t, F, r)) : (o++, l.call(n, s(o, t, M, r), s(o, t, F, r), s(o, t, M, t.notifyWith))) : (i !== M && (a = void 0, u = [n]), (r || t.resolveWith)(a, u));
                    }
                  },
                      c = r ? l : function () {
                    try {
                      l();
                    } catch (n) {
                      T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= o && (i !== F && (a = void 0, u = [n]), t.rejectWith(a, u));
                    }
                  };

                  e ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), n.setTimeout(c));
                };
              }

              return T.Deferred(function (n) {
                t[0][3].add(s(0, n, m(r) ? r : M, n.notifyWith)), t[1][3].add(s(0, n, m(e) ? e : M)), t[2][3].add(s(0, n, m(i) ? i : F));
              }).promise();
            },
            promise: function promise(e) {
              return null != e ? T.extend(e, r) : r;
            }
          },
              o = {};
          return T.each(t, function (e, n) {
            var s = n[2],
                a = n[5];
            r[n[1]] = s.add, a && s.add(function () {
              i = a;
            }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), o[n[0]] = function () {
              return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
            }, o[n[0] + "With"] = s.fireWith;
          }), r.promise(o), e && e.call(o, o), o;
        },
        when: function when(e) {
          var t = arguments.length,
              n = t,
              i = Array(n),
              r = u.call(arguments),
              o = T.Deferred(),
              s = function s(e) {
            return function (n) {
              i[e] = this, r[e] = arguments.length > 1 ? u.call(arguments) : n, --t || o.resolveWith(i, r);
            };
          };

          if (t <= 1 && (W(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || m(r[n] && r[n].then))) return o.then();

          for (; n--;) {
            W(r[n], s(n), o.reject);
          }

          return o.promise();
        }
      });
      var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      T.Deferred.exceptionHook = function (e, t) {
        n.console && n.console.warn && e && $.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }, T.readyException = function (e) {
        n.setTimeout(function () {
          throw e;
        });
      };
      var B = T.Deferred();

      function z() {
        s.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), T.ready();
      }

      T.fn.ready = function (e) {
        return B.then(e)["catch"](function (e) {
          T.readyException(e);
        }), this;
      }, T.extend({
        isReady: !1,
        readyWait: 1,
        ready: function ready(e) {
          (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || B.resolveWith(s, [T]));
        }
      }), T.ready.then = B.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(T.ready) : (s.addEventListener("DOMContentLoaded", z), n.addEventListener("load", z));

      var U = function U(e, t, n, i, r, o, s) {
        var a = 0,
            u = e.length,
            l = null == n;
        if ("object" === C(n)) for (a in r = !0, n) {
          U(e, t, a, n[a], !0, o, s);
        } else if (void 0 !== i && (r = !0, m(i) || (s = !0), l && (s ? (t.call(e, i), t = null) : (l = t, t = function t(e, _t2, n) {
          return l.call(T(e), n);
        })), t)) for (; a < u; a++) {
          t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        }
        return r ? e : l ? t.call(e) : u ? t(e[0], n) : o;
      },
          V = /^-ms-/,
          X = /-([a-z])/g;

      function Q(e, t) {
        return t.toUpperCase();
      }

      function G(e) {
        return e.replace(V, "ms-").replace(X, Q);
      }

      var K = function K(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };

      function Y() {
        this.expando = T.expando + Y.uid++;
      }

      Y.uid = 1, Y.prototype = {
        cache: function cache(e) {
          var t = e[this.expando];
          return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t;
        },
        set: function set(e, t, n) {
          var i,
              r = this.cache(e);
          if ("string" == typeof t) r[G(t)] = n;else for (i in t) {
            r[G(i)] = t[i];
          }
          return r;
        },
        get: function get(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
        },
        access: function access(e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function remove(e, t) {
          var n,
              i = e[this.expando];

          if (void 0 !== i) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in i ? [t] : t.match(R) || []).length;

              for (; n--;) {
                delete i[t[n]];
              }
            }

            (void 0 === t || T.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
          }
        },
        hasData: function hasData(e) {
          var t = e[this.expando];
          return void 0 !== t && !T.isEmptyObject(t);
        }
      };
      var J = new Y(),
          Z = new Y(),
          ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          te = /[A-Z]/g;

      function ne(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
          try {
            n = function (e) {
              return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e);
            }(n);
          } catch (e) {}

          Z.set(e, t, n);
        } else n = void 0;
        return n;
      }

      T.extend({
        hasData: function hasData(e) {
          return Z.hasData(e) || J.hasData(e);
        },
        data: function data(e, t, n) {
          return Z.access(e, t, n);
        },
        removeData: function removeData(e, t) {
          Z.remove(e, t);
        },
        _data: function _data(e, t, n) {
          return J.access(e, t, n);
        },
        _removeData: function _removeData(e, t) {
          J.remove(e, t);
        }
      }), T.fn.extend({
        data: function data(e, t) {
          var n,
              i,
              r,
              o = this[0],
              s = o && o.attributes;

          if (void 0 === e) {
            if (this.length && (r = Z.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
              for (n = s.length; n--;) {
                s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = G(i.slice(5)), ne(o, i, r[i]));
              }

              J.set(o, "hasDataAttrs", !0);
            }

            return r;
          }

          return "object" == _typeof(e) ? this.each(function () {
            Z.set(this, e);
          }) : U(this, function (t) {
            var n;
            if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) ? n : void 0 !== (n = ne(o, e)) ? n : void 0;
            this.each(function () {
              Z.set(this, e, t);
            });
          }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function removeData(e) {
          return this.each(function () {
            Z.remove(this, e);
          });
        }
      }), T.extend({
        queue: function queue(e, t, n) {
          var i;
          if (e) return t = (t || "fx") + "queue", i = J.get(e, t), n && (!i || Array.isArray(n) ? i = J.access(e, t, T.makeArray(n)) : i.push(n)), i || [];
        },
        dequeue: function dequeue(e, t) {
          t = t || "fx";

          var n = T.queue(e, t),
              i = n.length,
              r = n.shift(),
              o = T._queueHooks(e, t);

          "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
            T.dequeue(e, t);
          }, o)), !i && o && o.empty.fire();
        },
        _queueHooks: function _queueHooks(e, t) {
          var n = t + "queueHooks";
          return J.get(e, n) || J.access(e, n, {
            empty: T.Callbacks("once memory").add(function () {
              J.remove(e, [t + "queue", n]);
            })
          });
        }
      }), T.fn.extend({
        queue: function queue(e, t) {
          var n = 2;
          return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each(function () {
            var n = T.queue(this, e, t);
            T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
          });
        },
        dequeue: function dequeue(e) {
          return this.each(function () {
            T.dequeue(this, e);
          });
        },
        clearQueue: function clearQueue(e) {
          return this.queue(e || "fx", []);
        },
        promise: function promise(e, t) {
          var n,
              i = 1,
              r = T.Deferred(),
              o = this,
              s = this.length,
              a = function a() {
            --i || r.resolveWith(o, [o]);
          };

          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
            (n = J.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
          }

          return a(), r.promise(t);
        }
      });

      var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
          oe = ["Top", "Right", "Bottom", "Left"],
          se = s.documentElement,
          ae = function ae(e) {
        return T.contains(e.ownerDocument, e);
      },
          ue = {
        composed: !0
      };

      se.getRootNode && (ae = function ae(e) {
        return T.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument;
      });

      var le = function le(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === T.css(e, "display");
      },
          ce = function ce(e, t, n, i) {
        var r,
            o,
            s = {};

        for (o in t) {
          s[o] = e.style[o], e.style[o] = t[o];
        }

        for (o in r = n.apply(e, i || []), t) {
          e.style[o] = s[o];
        }

        return r;
      };

      function fe(e, t, n, i) {
        var r,
            o,
            s = 20,
            a = i ? function () {
          return i.cur();
        } : function () {
          return T.css(e, t, "");
        },
            u = a(),
            l = n && n[3] || (T.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (T.cssNumber[t] || "px" !== l && +u) && re.exec(T.css(e, t));

        if (c && c[3] !== l) {
          for (u /= 2, l = l || c[3], c = +u || 1; s--;) {
            T.style(e, t, c + l), (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0), c /= o;
          }

          c *= 2, T.style(e, t, c + l), n = n || [];
        }

        return n && (c = +c || +u || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = r)), r;
      }

      var de = {};

      function he(e) {
        var t,
            n = e.ownerDocument,
            i = e.nodeName,
            r = de[i];
        return r || (t = n.body.appendChild(n.createElement(i)), r = T.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), de[i] = r, r);
      }

      function pe(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++) {
          (i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = J.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && le(i) && (r[o] = he(i))) : "none" !== n && (r[o] = "none", J.set(i, "display", n)));
        }

        for (o = 0; o < s; o++) {
          null != r[o] && (e[o].style.display = r[o]);
        }

        return e;
      }

      T.fn.extend({
        show: function show() {
          return pe(this, !0);
        },
        hide: function hide() {
          return pe(this);
        },
        toggle: function toggle(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            le(this) ? T(this).show() : T(this).hide();
          });
        }
      });
      var ge = /^(?:checkbox|radio)$/i,
          ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          ye = /^$|^module$|\/(?:java|ecma)script/i,
          me = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

      function be(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? T.merge([e], n) : n;
      }

      function xe(e, t) {
        for (var n = 0, i = e.length; n < i; n++) {
          J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
        }
      }

      me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td;
      var we,
          Ce,
          Te = /<|&#?\w+;/;

      function Ee(e, t, n, i, r) {
        for (var o, s, a, u, l, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++) {
          if ((o = e[h]) || 0 === o) if ("object" === C(o)) T.merge(d, o.nodeType ? [o] : o);else if (Te.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (ve.exec(o) || ["", ""])[1].toLowerCase(), u = me[a] || me._default, s.innerHTML = u[1] + T.htmlPrefilter(o) + u[2], c = u[0]; c--;) {
              s = s.lastChild;
            }

            T.merge(d, s.childNodes), (s = f.firstChild).textContent = "";
          } else d.push(t.createTextNode(o));
        }

        for (f.textContent = "", h = 0; o = d[h++];) {
          if (i && T.inArray(o, i) > -1) r && r.push(o);else if (l = ae(o), s = be(f.appendChild(o), "script"), l && xe(s), n) for (c = 0; o = s[c++];) {
            ye.test(o.type || "") && n.push(o);
          }
        }

        return f;
      }

      we = s.createDocumentFragment().appendChild(s.createElement("div")), (Ce = s.createElement("input")).setAttribute("type", "radio"), Ce.setAttribute("checked", "checked"), Ce.setAttribute("name", "t"), we.appendChild(Ce), y.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked, we.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue;
      var _e = /^key/,
          ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Ae = /^([^.]*)(?:\.(.+)|)/;

      function Ne() {
        return !0;
      }

      function Se() {
        return !1;
      }

      function De(e, t) {
        return e === function () {
          try {
            return s.activeElement;
          } catch (e) {}
        }() == ("focus" === t);
      }

      function je(e, t, n, i, r, o) {
        var s, a;

        if ("object" == _typeof(t)) {
          for (a in "string" != typeof n && (i = i || n, n = void 0), t) {
            je(e, a, n, i, t[a], o);
          }

          return e;
        }

        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Se;else if (!r) return e;
        return 1 === o && (s = r, (r = function r(e) {
          return T().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = T.guid++)), e.each(function () {
          T.event.add(this, t, r, i, n);
        });
      }

      function Le(e, t, n) {
        n ? (J.set(e, t, !1), T.event.add(e, t, {
          namespace: !1,
          handler: function handler(e) {
            var i,
                r,
                o = J.get(this, t);

            if (1 & e.isTrigger && this[t]) {
              if (o.length) (T.event.special[t] || {}).delegateType && e.stopPropagation();else if (o = u.call(arguments), J.set(this, t, o), i = n(this, t), this[t](), o !== (r = J.get(this, t)) || i ? J.set(this, t, !1) : r = {}, o !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value;
            } else o.length && (J.set(this, t, {
              value: T.event.trigger(T.extend(o[0], T.Event.prototype), o.slice(1), this)
            }), e.stopImmediatePropagation());
          }
        })) : void 0 === J.get(e, t) && T.event.add(e, t, Ne);
      }

      T.event = {
        global: {},
        add: function add(e, t, n, i, r) {
          var o,
              s,
              a,
              u,
              l,
              c,
              f,
              d,
              h,
              p,
              g,
              v = J.get(e);
          if (v) for (n.handler && (n = (o = n).handler, r = o.selector), r && T.find.matchesSelector(se, r), n.guid || (n.guid = T.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function (t) {
            return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
          }), l = (t = (t || "").match(R) || [""]).length; l--;) {
            h = g = (a = Ae.exec(t[l]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = T.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = T.event.special[h] || {}, c = T.extend({
              type: h,
              origType: g,
              data: i,
              handler: n,
              guid: n.guid,
              selector: r,
              needsContext: r && T.expr.match.needsContext.test(r),
              namespace: p.join(".")
            }, o), (d = u[h]) || ((d = u[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), T.event.global[h] = !0);
          }
        },
        remove: function remove(e, t, n, i, r) {
          var o,
              s,
              a,
              u,
              l,
              c,
              f,
              d,
              h,
              p,
              g,
              v = J.hasData(e) && J.get(e);

          if (v && (u = v.events)) {
            for (l = (t = (t || "").match(R) || [""]).length; l--;) {
              if (h = g = (a = Ae.exec(t[l]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                for (f = T.event.special[h] || {}, d = u[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) {
                  c = d[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                }

                s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, v.handle) || T.removeEvent(e, h, v.handle), delete u[h]);
              } else for (h in u) {
                T.event.remove(e, h + t[l], n, i, !0);
              }
            }

            T.isEmptyObject(u) && J.remove(e, "handle events");
          }
        },
        dispatch: function dispatch(e) {
          var t,
              n,
              i,
              r,
              o,
              s,
              a = T.event.fix(e),
              u = new Array(arguments.length),
              l = (J.get(this, "events") || {})[a.type] || [],
              c = T.event.special[a.type] || {};

          for (u[0] = a, t = 1; t < arguments.length; t++) {
            u[t] = arguments[t];
          }

          if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
            for (s = T.event.handlers.call(this, a, l), t = 0; (r = s[t++]) && !a.isPropagationStopped();) {
              for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) {
                a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((T.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, u)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
              }
            }

            return c.postDispatch && c.postDispatch.call(this, a), a.result;
          }
        },
        handlers: function handlers(e, t) {
          var n,
              i,
              r,
              o,
              s,
              a = [],
              u = t.delegateCount,
              l = e.target;
          if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
              for (o = [], s = {}, n = 0; n < u; n++) {
                void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? T(r, this).index(l) > -1 : T.find(r, this, null, [l]).length), s[r] && o.push(i);
              }

              o.length && a.push({
                elem: l,
                handlers: o
              });
            }
          }
          return l = this, u < t.length && a.push({
            elem: l,
            handlers: t.slice(u)
          }), a;
        },
        addProp: function addProp(e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: m(t) ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            } : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
            set: function set(t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
              });
            }
          });
        },
        fix: function fix(e) {
          return e[T.expando] ? e : new T.Event(e);
        },
        special: {
          load: {
            noBubble: !0
          },
          click: {
            setup: function setup(e) {
              var t = this || e;
              return ge.test(t.type) && t.click && D(t, "input") && Le(t, "click", Ne), !1;
            },
            trigger: function trigger(e) {
              var t = this || e;
              return ge.test(t.type) && t.click && D(t, "input") && Le(t, "click"), !0;
            },
            _default: function _default(e) {
              var t = e.target;
              return ge.test(t.type) && t.click && D(t, "input") && J.get(t, "click") || D(t, "a");
            }
          },
          beforeunload: {
            postDispatch: function postDispatch(e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            }
          }
        }
      }, T.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }, T.Event = function (e, t) {
        if (!(this instanceof T.Event)) return new T.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0;
      }, T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function preventDefault() {
          var e = this.originalEvent;
          this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function stopPropagation() {
          var e = this.originalEvent;
          this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function stopImmediatePropagation() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        }
      }, T.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function which(e) {
          var t = e.button;
          return null == e.which && _e.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
      }, T.event.addProp), T.each({
        focus: "focusin",
        blur: "focusout"
      }, function (e, t) {
        T.event.special[e] = {
          setup: function setup() {
            return Le(this, e, De), !1;
          },
          trigger: function trigger() {
            return Le(this, e), !0;
          },
          delegateType: t
        };
      }), T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (e, t) {
        T.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function handle(e) {
            var n,
                i = e.relatedTarget,
                r = e.handleObj;
            return i && (i === this || T.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n;
          }
        };
      }), T.fn.extend({
        on: function on(e, t, n, i) {
          return je(this, e, t, n, i);
        },
        one: function one(e, t, n, i) {
          return je(this, e, t, n, i, 1);
        },
        off: function off(e, t, n) {
          var i, r;
          if (e && e.preventDefault && e.handleObj) return i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;

          if ("object" == _typeof(e)) {
            for (r in e) {
              this.off(r, t, e[r]);
            }

            return this;
          }

          return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
            T.event.remove(this, e, n, t);
          });
        }
      });
      var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          Pe = /<script|<style|<link/i,
          Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
          He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function Ie(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e;
      }

      function Re(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
      }

      function Me(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
      }

      function Fe(e, t) {
        var n, i, r, o, s, a, u, l;

        if (1 === t.nodeType) {
          if (J.hasData(e) && (o = J.access(e), s = J.set(t, o), l = o.events)) for (r in delete s.handle, s.events = {}, l) {
            for (n = 0, i = l[r].length; n < i; n++) {
              T.event.add(t, r, l[r][n]);
            }
          }
          Z.hasData(e) && (a = Z.access(e), u = T.extend({}, a), Z.set(t, u));
        }
      }

      function We(e, t, n, i) {
        t = l.apply([], t);
        var r,
            o,
            s,
            a,
            u,
            c,
            f = 0,
            d = e.length,
            h = d - 1,
            p = t[0],
            g = m(p);
        if (g || d > 1 && "string" == typeof p && !y.checkClone && Oe.test(p)) return e.each(function (r) {
          var o = e.eq(r);
          g && (t[0] = p.call(this, r, o.html())), We(o, t, n, i);
        });

        if (d && (o = (r = Ee(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
          for (a = (s = T.map(be(r, "script"), Re)).length; f < d; f++) {
            u = r, f !== h && (u = T.clone(u, !0, !0), a && T.merge(s, be(u, "script"))), n.call(e[f], u, f);
          }

          if (a) for (c = s[s.length - 1].ownerDocument, T.map(s, Me), f = 0; f < a; f++) {
            u = s[f], ye.test(u.type || "") && !J.access(u, "globalEval") && T.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? T._evalUrl && !u.noModule && T._evalUrl(u.src, {
              nonce: u.nonce || u.getAttribute("nonce")
            }) : w(u.textContent.replace(He, ""), u, c));
          }
        }

        return e;
      }

      function $e(e, t, n) {
        for (var i, r = t ? T.filter(t, e) : e, o = 0; null != (i = r[o]); o++) {
          n || 1 !== i.nodeType || T.cleanData(be(i)), i.parentNode && (n && ae(i) && xe(be(i, "script")), i.parentNode.removeChild(i));
        }

        return e;
      }

      T.extend({
        htmlPrefilter: function htmlPrefilter(e) {
          return e.replace(qe, "<$1></$2>");
        },
        clone: function clone(e, t, n) {
          var i,
              r,
              o,
              s,
              a,
              u,
              l,
              c = e.cloneNode(!0),
              f = ae(e);
          if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for (s = be(c), i = 0, r = (o = be(e)).length; i < r; i++) {
            a = o[i], u = s[i], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && ge.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
          }
          if (t) if (n) for (o = o || be(e), s = s || be(c), i = 0, r = o.length; i < r; i++) {
            Fe(o[i], s[i]);
          } else Fe(e, c);
          return (s = be(c, "script")).length > 0 && xe(s, !f && be(e, "script")), c;
        },
        cleanData: function cleanData(e) {
          for (var t, n, i, r = T.event.special, o = 0; void 0 !== (n = e[o]); o++) {
            if (K(n)) {
              if (t = n[J.expando]) {
                if (t.events) for (i in t.events) {
                  r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
                }
                n[J.expando] = void 0;
              }

              n[Z.expando] && (n[Z.expando] = void 0);
            }
          }
        }
      }), T.fn.extend({
        detach: function detach(e) {
          return $e(this, e, !0);
        },
        remove: function remove(e) {
          return $e(this, e);
        },
        text: function text(e) {
          return U(this, function (e) {
            return void 0 === e ? T.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
            });
          }, null, e, arguments.length);
        },
        append: function append() {
          return We(this, arguments, function (e) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e);
          });
        },
        prepend: function prepend() {
          return We(this, arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = Ie(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function before() {
          return We(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function after() {
          return We(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function empty() {
          for (var e, t = 0; null != (e = this[t]); t++) {
            1 === e.nodeType && (T.cleanData(be(e, !1)), e.textContent = "");
          }

          return this;
        },
        clone: function clone(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function () {
            return T.clone(this, e, t);
          });
        },
        html: function html(e) {
          return U(this, function (e) {
            var t = this[0] || {},
                n = 0,
                i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

            if ("string" == typeof e && !Pe.test(e) && !me[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = T.htmlPrefilter(e);

              try {
                for (; n < i; n++) {
                  1 === (t = this[n] || {}).nodeType && (T.cleanData(be(t, !1)), t.innerHTML = e);
                }

                t = 0;
              } catch (e) {}
            }

            t && this.empty().append(e);
          }, null, e, arguments.length);
        },
        replaceWith: function replaceWith() {
          var e = [];
          return We(this, arguments, function (t) {
            var n = this.parentNode;
            T.inArray(this, e) < 0 && (T.cleanData(be(this)), n && n.replaceChild(t, this));
          }, e);
        }
      }), T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (e, t) {
        T.fn[e] = function (e) {
          for (var n, i = [], r = T(e), o = r.length - 1, s = 0; s <= o; s++) {
            n = s === o ? this : this.clone(!0), T(r[s])[t](n), c.apply(i, n.get());
          }

          return this.pushStack(i);
        };
      });

      var Be = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
          ze = function ze(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = n), t.getComputedStyle(e);
      },
          Ue = new RegExp(oe.join("|"), "i");

      function Ve(e, t, n) {
        var i,
            r,
            o,
            s,
            a = e.style;
        return (n = n || ze(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || ae(e) || (s = T.style(e, t)), !y.pixelBoxStyles() && Be.test(s) && Ue.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s;
      }

      function Xe(e, t) {
        return {
          get: function get() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          }
        };
      }

      !function () {
        function e() {
          if (c) {
            l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(l).appendChild(c);
            var e = n.getComputedStyle(c);
            i = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), r = 36 === t(e.width), c.style.position = "absolute", o = 12 === t(c.offsetWidth / 3), se.removeChild(l), c = null;
          }
        }

        function t(e) {
          return Math.round(parseFloat(e));
        }

        var i,
            r,
            o,
            a,
            u,
            l = s.createElement("div"),
            c = s.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === c.style.backgroundClip, T.extend(y, {
          boxSizingReliable: function boxSizingReliable() {
            return e(), r;
          },
          pixelBoxStyles: function pixelBoxStyles() {
            return e(), a;
          },
          pixelPosition: function pixelPosition() {
            return e(), i;
          },
          reliableMarginLeft: function reliableMarginLeft() {
            return e(), u;
          },
          scrollboxSize: function scrollboxSize() {
            return e(), o;
          }
        }));
      }();
      var Qe = ["Webkit", "Moz", "ms"],
          Ge = s.createElement("div").style,
          Ke = {};

      function Ye(e) {
        var t = T.cssProps[e] || Ke[e];
        return t || (e in Ge ? e : Ke[e] = function (e) {
          for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--;) {
            if ((e = Qe[n] + t) in Ge) return e;
          }
        }(e) || e);
      }

      var Je = /^(none|table(?!-c[ea]).+)/,
          Ze = /^--/,
          et = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
          tt = {
        letterSpacing: "0",
        fontWeight: "400"
      };

      function nt(e, t, n) {
        var i = re.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
      }

      function it(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            u = 0;
        if (n === (i ? "border" : "content")) return 0;

        for (; s < 4; s += 2) {
          "margin" === n && (u += T.css(e, n + oe[s], !0, r)), i ? ("content" === n && (u -= T.css(e, "padding" + oe[s], !0, r)), "margin" !== n && (u -= T.css(e, "border" + oe[s] + "Width", !0, r))) : (u += T.css(e, "padding" + oe[s], !0, r), "padding" !== n ? u += T.css(e, "border" + oe[s] + "Width", !0, r) : a += T.css(e, "border" + oe[s] + "Width", !0, r));
        }

        return !i && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - .5)) || 0), u;
      }

      function rt(e, t, n) {
        var i = ze(e),
            r = (!y.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, i),
            o = r,
            s = Ve(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);

        if (Be.test(s)) {
          if (!n) return s;
          s = "auto";
        }

        return (!y.boxSizingReliable() && r || "auto" === s || !parseFloat(s) && "inline" === T.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === T.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + it(e, t, n || (r ? "border" : "content"), o, i, s) + "px";
      }

      function ot(e, t, n, i, r) {
        return new ot.prototype.init(e, t, n, i, r);
      }

      T.extend({
        cssHooks: {
          opacity: {
            get: function get(e, t) {
              if (t) {
                var n = Ve(e, "opacity");
                return "" === n ? "1" : n;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function style(e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var r,
                o,
                s,
                a = G(t),
                u = Ze.test(t),
                l = e.style;
            if (u || (t = Ye(a)), s = T.cssHooks[t] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t];
            "string" === (o = _typeof(n)) && (r = re.exec(n)) && r[1] && (n = fe(e, t, r), o = "number"), null != n && n == n && ("number" !== o || u || (n += r && r[3] || (T.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (u ? l.setProperty(t, n) : l[t] = n));
          }
        },
        css: function css(e, t, n, i) {
          var r,
              o,
              s,
              a = G(t);
          return Ze.test(t) || (t = Ye(a)), (s = T.cssHooks[t] || T.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Ve(e, t, i)), "normal" === r && t in tt && (r = tt[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r;
        }
      }), T.each(["height", "width"], function (e, t) {
        T.cssHooks[t] = {
          get: function get(e, n, i) {
            if (n) return !Je.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, t, i) : ce(e, et, function () {
              return rt(e, t, i);
            });
          },
          set: function set(e, n, i) {
            var r,
                o = ze(e),
                s = !y.scrollboxSize() && "absolute" === o.position,
                a = (s || i) && "border-box" === T.css(e, "boxSizing", !1, o),
                u = i ? it(e, t, i, a, o) : 0;
            return a && s && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - it(e, t, "border", !1, o) - .5)), u && (r = re.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = T.css(e, t)), nt(0, n, u);
          }
        };
      }), T.cssHooks.marginLeft = Xe(y.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - ce(e, {
          marginLeft: 0
        }, function () {
          return e.getBoundingClientRect().left;
        })) + "px";
      }), T.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function (e, t) {
        T.cssHooks[e + t] = {
          expand: function expand(n) {
            for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
              r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
            }

            return r;
          }
        }, "margin" !== e && (T.cssHooks[e + t].set = nt);
      }), T.fn.extend({
        css: function css(e, t) {
          return U(this, function (e, t, n) {
            var i,
                r,
                o = {},
                s = 0;

            if (Array.isArray(t)) {
              for (i = ze(e), r = t.length; s < r; s++) {
                o[t[s]] = T.css(e, t[s], !1, i);
              }

              return o;
            }

            return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
          }, e, t, arguments.length > 1);
        }
      }), T.Tween = ot, ot.prototype = {
        constructor: ot,
        init: function init(e, t, n, i, r, o) {
          this.elem = e, this.prop = n, this.easing = r || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (T.cssNumber[n] ? "" : "px");
        },
        cur: function cur() {
          var e = ot.propHooks[this.prop];
          return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
        },
        run: function run(e) {
          var t,
              n = ot.propHooks[this.prop];
          return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this;
        }
      }, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
        _default: {
          get: function get(e) {
            var t;
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
          },
          set: function set(e) {
            T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit);
          }
        }
      }, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
        set: function set(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
      }, T.easing = {
        linear: function linear(e) {
          return e;
        },
        swing: function swing(e) {
          return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
      }, T.fx = ot.prototype.init, T.fx.step = {};
      var st,
          at,
          ut = /^(?:toggle|show|hide)$/,
          lt = /queueHooks$/;

      function ct() {
        at && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ct) : n.setTimeout(ct, T.fx.interval), T.fx.tick());
      }

      function ft() {
        return n.setTimeout(function () {
          st = void 0;
        }), st = Date.now();
      }

      function dt(e, t) {
        var n,
            i = 0,
            r = {
          height: e
        };

        for (t = t ? 1 : 0; i < 4; i += 2 - t) {
          r["margin" + (n = oe[i])] = r["padding" + n] = e;
        }

        return t && (r.opacity = r.width = e), r;
      }

      function ht(e, t, n) {
        for (var i, r = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, s = r.length; o < s; o++) {
          if (i = r[o].call(n, t, e)) return i;
        }
      }

      function pt(e, t, n) {
        var i,
            r,
            o = 0,
            s = pt.prefilters.length,
            a = T.Deferred().always(function () {
          delete u.elem;
        }),
            u = function u() {
          if (r) return !1;

          for (var t = st || ft(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; o < s; o++) {
            l.tweens[o].run(i);
          }

          return a.notifyWith(e, [l, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1);
        },
            l = a.promise({
          elem: e,
          props: T.extend({}, t),
          opts: T.extend(!0, {
            specialEasing: {},
            easing: T.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: st || ft(),
          duration: n.duration,
          tweens: [],
          createTween: function createTween(t, n) {
            var i = T.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
            return l.tweens.push(i), i;
          },
          stop: function stop(t) {
            var n = 0,
                i = t ? l.tweens.length : 0;
            if (r) return this;

            for (r = !0; n < i; n++) {
              l.tweens[n].run(1);
            }

            return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this;
          }
        }),
            c = l.props;

        for (!function (e, t) {
          var n, i, r, o, s;

          for (n in e) {
            if (r = t[i = G(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = T.cssHooks[i]) && ("expand" in s)) for (n in o = s.expand(o), delete e[i], o) {
              (n in e) || (e[n] = o[n], t[n] = r);
            } else t[i] = r;
          }
        }(c, l.opts.specialEasing); o < s; o++) {
          if (i = pt.prefilters[o].call(l, e, c, l.opts)) return m(i.stop) && (T._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i)), i;
        }

        return T.map(c, ht, l), m(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), T.fx.timer(T.extend(u, {
          elem: e,
          anim: l,
          queue: l.opts.queue
        })), l;
      }

      T.Animation = T.extend(pt, {
        tweeners: {
          "*": [function (e, t) {
            var n = this.createTween(e, t);
            return fe(n.elem, e, re.exec(t), n), n;
          }]
        },
        tweener: function tweener(e, t) {
          m(e) ? (t = e, e = ["*"]) : e = e.match(R);

          for (var n, i = 0, r = e.length; i < r; i++) {
            n = e[i], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
          }
        },
        prefilters: [function (e, t, n) {
          var i,
              r,
              o,
              s,
              a,
              u,
              l,
              c,
              f = "width" in t || "height" in t,
              d = this,
              h = {},
              p = e.style,
              g = e.nodeType && le(e),
              v = J.get(e, "fxshow");

          for (i in n.queue || (null == (s = T._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
            s.unqueued || a();
          }), s.unqueued++, d.always(function () {
            d.always(function () {
              s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
            });
          })), t) {
            if (r = t[i], ut.test(r)) {
              if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                if ("show" !== r || !v || void 0 === v[i]) continue;
                g = !0;
              }

              h[i] = v && v[i] || T.style(e, i);
            }
          }

          if ((u = !T.isEmptyObject(t)) || !T.isEmptyObject(h)) for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (l = v && v.display) && (l = J.get(e, "display")), "none" === (c = T.css(e, "display")) && (l ? c = l : (pe([e], !0), l = e.style.display || l, c = T.css(e, "display"), pe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === T.css(e, "float") && (u || (d.done(function () {
            p.display = l;
          }), null == l && (c = p.display, l = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
          })), u = !1, h) {
            u || (v ? "hidden" in v && (g = v.hidden) : v = J.access(e, "fxshow", {
              display: l
            }), o && (v.hidden = !g), g && pe([e], !0), d.done(function () {
              for (i in g || pe([e]), J.remove(e, "fxshow"), h) {
                T.style(e, i, h[i]);
              }
            })), u = ht(g ? v[i] : 0, i, d), i in v || (v[i] = u.start, g && (u.end = u.start, u.start = 0));
          }
        }],
        prefilter: function prefilter(e, t) {
          t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        }
      }), T.speed = function (e, t, n) {
        var i = e && "object" == _typeof(e) ? T.extend({}, e) : {
          complete: n || !n && t || m(e) && e,
          duration: e,
          easing: n && t || t && !m(t) && t
        };
        return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
          m(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue);
        }, i;
      }, T.fn.extend({
        fadeTo: function fadeTo(e, t, n, i) {
          return this.filter(le).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, i);
        },
        animate: function animate(e, t, n, i) {
          var r = T.isEmptyObject(e),
              o = T.speed(t, n, i),
              s = function s() {
            var t = pt(this, T.extend({}, e), o);
            (r || J.get(this, "finish")) && t.stop(!0);
          };

          return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
        },
        stop: function stop(e, t, n) {
          var i = function i(e) {
            var t = e.stop;
            delete e.stop, t(n);
          };

          return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
            var t = !0,
                r = null != e && e + "queueHooks",
                o = T.timers,
                s = J.get(this);
            if (r) s[r] && s[r].stop && i(s[r]);else for (r in s) {
              s[r] && s[r].stop && lt.test(r) && i(s[r]);
            }

            for (r = o.length; r--;) {
              o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
            }

            !t && n || T.dequeue(this, e);
          });
        },
        finish: function finish(e) {
          return !1 !== e && (e = e || "fx"), this.each(function () {
            var t,
                n = J.get(this),
                i = n[e + "queue"],
                r = n[e + "queueHooks"],
                o = T.timers,
                s = i ? i.length : 0;

            for (n.finish = !0, T.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) {
              o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            }

            for (t = 0; t < s; t++) {
              i[t] && i[t].finish && i[t].finish.call(this);
            }

            delete n.finish;
          });
        }
      }), T.each(["toggle", "show", "hide"], function (e, t) {
        var n = T.fn[t];

        T.fn[t] = function (e, i, r) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, r);
        };
      }), T.each({
        slideDown: dt("show"),
        slideUp: dt("hide"),
        slideToggle: dt("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function (e, t) {
        T.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }), T.timers = [], T.fx.tick = function () {
        var e,
            t = 0,
            n = T.timers;

        for (st = Date.now(); t < n.length; t++) {
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        }

        n.length || T.fx.stop(), st = void 0;
      }, T.fx.timer = function (e) {
        T.timers.push(e), T.fx.start();
      }, T.fx.interval = 13, T.fx.start = function () {
        at || (at = !0, ct());
      }, T.fx.stop = function () {
        at = null;
      }, T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, T.fn.delay = function (e, t) {
        return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, i) {
          var r = n.setTimeout(t, e);

          i.stop = function () {
            n.clearTimeout(r);
          };
        });
      }, function () {
        var e = s.createElement("input"),
            t = s.createElement("select").appendChild(s.createElement("option"));
        e.type = "checkbox", y.checkOn = "" !== e.value, y.optSelected = t.selected, (e = s.createElement("input")).value = "t", e.type = "radio", y.radioValue = "t" === e.value;
      }();
      var gt,
          vt = T.expr.attrHandle;
      T.fn.extend({
        attr: function attr(e, t) {
          return U(this, T.attr, e, t, arguments.length > 1);
        },
        removeAttr: function removeAttr(e) {
          return this.each(function () {
            T.removeAttr(this, e);
          });
        }
      }), T.extend({
        attr: function attr(e, t, n) {
          var i,
              r,
              o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (r = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = T.find.attr(e, t)) ? void 0 : i);
        },
        attrHooks: {
          type: {
            set: function set(e, t) {
              if (!y.radioValue && "radio" === t && D(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            }
          }
        },
        removeAttr: function removeAttr(e, t) {
          var n,
              i = 0,
              r = t && t.match(R);
          if (r && 1 === e.nodeType) for (; n = r[i++];) {
            e.removeAttribute(n);
          }
        }
      }), gt = {
        set: function set(e, t, n) {
          return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
      }, T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = vt[t] || T.find.attr;

        vt[t] = function (e, t, i) {
          var r,
              o,
              s = t.toLowerCase();
          return i || (o = vt[s], vt[s] = r, r = null != n(e, t, i) ? s : null, vt[s] = o), r;
        };
      });
      var yt = /^(?:input|select|textarea|button)$/i,
          mt = /^(?:a|area)$/i;

      function bt(e) {
        return (e.match(R) || []).join(" ");
      }

      function xt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
      }

      function wt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
      }

      T.fn.extend({
        prop: function prop(e, t) {
          return U(this, T.prop, e, t, arguments.length > 1);
        },
        removeProp: function removeProp(e) {
          return this.each(function () {
            delete this[T.propFix[e] || e];
          });
        }
      }), T.extend({
        prop: function prop(e, t, n) {
          var i,
              r,
              o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t, r = T.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
        },
        propHooks: {
          tabIndex: {
            get: function get(e) {
              var t = T.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : yt.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      }), y.optSelected || (T.propHooks.selected = {
        get: function get(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function set(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
      }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        T.propFix[this.toLowerCase()] = this;
      }), T.fn.extend({
        addClass: function addClass(e) {
          var t,
              n,
              i,
              r,
              o,
              s,
              a,
              u = 0;
          if (m(e)) return this.each(function (t) {
            T(this).addClass(e.call(this, t, xt(this)));
          });
          if ((t = wt(e)).length) for (; n = this[u++];) {
            if (r = xt(n), i = 1 === n.nodeType && " " + bt(r) + " ") {
              for (s = 0; o = t[s++];) {
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              }

              r !== (a = bt(i)) && n.setAttribute("class", a);
            }
          }
          return this;
        },
        removeClass: function removeClass(e) {
          var t,
              n,
              i,
              r,
              o,
              s,
              a,
              u = 0;
          if (m(e)) return this.each(function (t) {
            T(this).removeClass(e.call(this, t, xt(this)));
          });
          if (!arguments.length) return this.attr("class", "");
          if ((t = wt(e)).length) for (; n = this[u++];) {
            if (r = xt(n), i = 1 === n.nodeType && " " + bt(r) + " ") {
              for (s = 0; o = t[s++];) {
                for (; i.indexOf(" " + o + " ") > -1;) {
                  i = i.replace(" " + o + " ", " ");
                }
              }

              r !== (a = bt(i)) && n.setAttribute("class", a);
            }
          }
          return this;
        },
        toggleClass: function toggleClass(e, t) {
          var n = _typeof(e),
              i = "string" === n || Array.isArray(e);

          return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function (n) {
            T(this).toggleClass(e.call(this, n, xt(this), t), t);
          }) : this.each(function () {
            var t, r, o, s;
            if (i) for (r = 0, o = T(this), s = wt(e); t = s[r++];) {
              o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
            } else void 0 !== e && "boolean" !== n || ((t = xt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
          });
        },
        hasClass: function hasClass(e) {
          var t,
              n,
              i = 0;

          for (t = " " + e + " "; n = this[i++];) {
            if (1 === n.nodeType && (" " + bt(xt(n)) + " ").indexOf(t) > -1) return !0;
          }

          return !1;
        }
      });
      var Ct = /\r/g;
      T.fn.extend({
        val: function val(e) {
          var t,
              n,
              i,
              r = this[0];
          return arguments.length ? (i = m(e), this.each(function (n) {
            var r;
            1 === this.nodeType && (null == (r = i ? e.call(this, n, T(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = T.map(r, function (e) {
              return null == e ? "" : e + "";
            })), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
          })) : r ? (t = T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(Ct, "") : null == n ? "" : n : void 0;
        }
      }), T.extend({
        valHooks: {
          option: {
            get: function get(e) {
              var t = T.find.attr(e, "value");
              return null != t ? t : bt(T.text(e));
            }
          },
          select: {
            get: function get(e) {
              var t,
                  n,
                  i,
                  r = e.options,
                  o = e.selectedIndex,
                  s = "select-one" === e.type,
                  a = s ? null : [],
                  u = s ? o + 1 : r.length;

              for (i = o < 0 ? u : s ? o : 0; i < u; i++) {
                if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                  if (t = T(n).val(), s) return t;
                  a.push(t);
                }
              }

              return a;
            },
            set: function set(e, t) {
              for (var n, i, r = e.options, o = T.makeArray(t), s = r.length; s--;) {
                ((i = r[s]).selected = T.inArray(T.valHooks.option.get(i), o) > -1) && (n = !0);
              }

              return n || (e.selectedIndex = -1), o;
            }
          }
        }
      }), T.each(["radio", "checkbox"], function () {
        T.valHooks[this] = {
          set: function set(e, t) {
            if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1;
          }
        }, y.checkOn || (T.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value;
        });
      }), y.focusin = "onfocusin" in n;

      var Tt = /^(?:focusinfocus|focusoutblur)$/,
          Et = function Et(e) {
        e.stopPropagation();
      };

      T.extend(T.event, {
        trigger: function trigger(e, t, i, r) {
          var o,
              a,
              u,
              l,
              c,
              f,
              d,
              h,
              g = [i || s],
              v = p.call(e, "type") ? e.type : e,
              y = p.call(e, "namespace") ? e.namespace.split(".") : [];

          if (a = h = u = i = i || s, 3 !== i.nodeType && 8 !== i.nodeType && !Tt.test(v + T.event.triggered) && (v.indexOf(".") > -1 && (y = v.split("."), v = y.shift(), y.sort()), c = v.indexOf(":") < 0 && "on" + v, (e = e[T.expando] ? e : new T.Event(v, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : T.makeArray(t, [e]), d = T.event.special[v] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, t))) {
            if (!r && !d.noBubble && !b(i)) {
              for (l = d.delegateType || v, Tt.test(l + v) || (a = a.parentNode); a; a = a.parentNode) {
                g.push(a), u = a;
              }

              u === (i.ownerDocument || s) && g.push(u.defaultView || u.parentWindow || n);
            }

            for (o = 0; (a = g[o++]) && !e.isPropagationStopped();) {
              h = a, e.type = o > 1 ? l : d.bindType || v, (f = (J.get(a, "events") || {})[e.type] && J.get(a, "handle")) && f.apply(a, t), (f = c && a[c]) && f.apply && K(a) && (e.result = f.apply(a, t), !1 === e.result && e.preventDefault());
            }

            return e.type = v, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), t) || !K(i) || c && m(i[v]) && !b(i) && ((u = i[c]) && (i[c] = null), T.event.triggered = v, e.isPropagationStopped() && h.addEventListener(v, Et), i[v](), e.isPropagationStopped() && h.removeEventListener(v, Et), T.event.triggered = void 0, u && (i[c] = u)), e.result;
          }
        },
        simulate: function simulate(e, t, n) {
          var i = T.extend(new T.Event(), n, {
            type: e,
            isSimulated: !0
          });
          T.event.trigger(i, null, t);
        }
      }), T.fn.extend({
        trigger: function trigger(e, t) {
          return this.each(function () {
            T.event.trigger(e, t, this);
          });
        },
        triggerHandler: function triggerHandler(e, t) {
          var n = this[0];
          if (n) return T.event.trigger(e, t, n, !0);
        }
      }), y.focusin || T.each({
        focus: "focusin",
        blur: "focusout"
      }, function (e, t) {
        var n = function n(e) {
          T.event.simulate(t, e.target, T.event.fix(e));
        };

        T.event.special[t] = {
          setup: function setup() {
            var i = this.ownerDocument || this,
                r = J.access(i, t);
            r || i.addEventListener(e, n, !0), J.access(i, t, (r || 0) + 1);
          },
          teardown: function teardown() {
            var i = this.ownerDocument || this,
                r = J.access(i, t) - 1;
            r ? J.access(i, t, r) : (i.removeEventListener(e, n, !0), J.remove(i, t));
          }
        };
      });
      var _t = n.location,
          kt = Date.now(),
          At = /\?/;

      T.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;

        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }

        return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t;
      };

      var Nt = /\[\]$/,
          St = /\r?\n/g,
          Dt = /^(?:submit|button|image|reset|file)$/i,
          jt = /^(?:input|select|textarea|keygen)/i;

      function Lt(e, t, n, i) {
        var r;
        if (Array.isArray(t)) T.each(t, function (t, r) {
          n || Nt.test(e) ? i(e, r) : Lt(e + "[" + ("object" == _typeof(r) && null != r ? t : "") + "]", r, n, i);
        });else if (n || "object" !== C(t)) i(e, t);else for (r in t) {
          Lt(e + "[" + r + "]", t[r], n, i);
        }
      }

      T.param = function (e, t) {
        var n,
            i = [],
            r = function r(e, t) {
          var n = m(t) ? t() : t;
          i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };

        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function () {
          r(this.name, this.value);
        });else for (n in e) {
          Lt(n, e[n], t, r);
        }
        return i.join("&");
      }, T.fn.extend({
        serialize: function serialize() {
          return T.param(this.serializeArray());
        },
        serializeArray: function serializeArray() {
          return this.map(function () {
            var e = T.prop(this, "elements");
            return e ? T.makeArray(e) : this;
          }).filter(function () {
            var e = this.type;
            return this.name && !T(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !ge.test(e));
          }).map(function (e, t) {
            var n = T(this).val();
            return null == n ? null : Array.isArray(n) ? T.map(n, function (e) {
              return {
                name: t.name,
                value: e.replace(St, "\r\n")
              };
            }) : {
              name: t.name,
              value: n.replace(St, "\r\n")
            };
          }).get();
        }
      });
      var qt = /%20/g,
          Pt = /#.*$/,
          Ot = /([?&])_=[^&]*/,
          Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          It = /^(?:GET|HEAD)$/,
          Rt = /^\/\//,
          Mt = {},
          Ft = {},
          Wt = "*/".concat("*"),
          $t = s.createElement("a");

      function Bt(e) {
        return function (t, n) {
          "string" != typeof t && (n = t, t = "*");
          var i,
              r = 0,
              o = t.toLowerCase().match(R) || [];
          if (m(n)) for (; i = o[r++];) {
            "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
          }
        };
      }

      function zt(e, t, n, i) {
        var r = {},
            o = e === Ft;

        function s(a) {
          var u;
          return r[a] = !0, T.each(e[a] || [], function (e, a) {
            var l = a(t, n, i);
            return "string" != typeof l || o || r[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), s(l), !1);
          }), u;
        }

        return s(t.dataTypes[0]) || !r["*"] && s("*");
      }

      function Ut(e, t) {
        var n,
            i,
            r = T.ajaxSettings.flatOptions || {};

        for (n in t) {
          void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        }

        return i && T.extend(!0, e, i), e;
      }

      $t.href = _t.href, T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: _t.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Wt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": T.parseXML
          },
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        ajaxSetup: function ajaxSetup(e, t) {
          return t ? Ut(Ut(e, T.ajaxSettings), t) : Ut(T.ajaxSettings, e);
        },
        ajaxPrefilter: Bt(Mt),
        ajaxTransport: Bt(Ft),
        ajax: function ajax(e, t) {
          "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
          var i,
              r,
              o,
              a,
              u,
              l,
              c,
              f,
              d,
              h,
              p = T.ajaxSetup({}, t),
              g = p.context || p,
              v = p.context && (g.nodeType || g.jquery) ? T(g) : T.event,
              y = T.Deferred(),
              m = T.Callbacks("once memory"),
              b = p.statusCode || {},
              x = {},
              w = {},
              C = "canceled",
              E = {
            readyState: 0,
            getResponseHeader: function getResponseHeader(e) {
              var t;

              if (c) {
                if (!a) for (a = {}; t = Ht.exec(o);) {
                  a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                }
                t = a[e.toLowerCase() + " "];
              }

              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function getAllResponseHeaders() {
              return c ? o : null;
            },
            setRequestHeader: function setRequestHeader(e, t) {
              return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this;
            },
            overrideMimeType: function overrideMimeType(e) {
              return null == c && (p.mimeType = e), this;
            },
            statusCode: function statusCode(e) {
              var t;
              if (e) if (c) E.always(e[E.status]);else for (t in e) {
                b[t] = [b[t], e[t]];
              }
              return this;
            },
            abort: function abort(e) {
              var t = e || C;
              return i && i.abort(t), _(0, t), this;
            }
          };

          if (y.promise(E), p.url = ((e || p.url || _t.href) + "").replace(Rt, _t.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(R) || [""], null == p.crossDomain) {
            l = s.createElement("a");

            try {
              l.href = p.url, l.href = l.href, p.crossDomain = $t.protocol + "//" + $t.host != l.protocol + "//" + l.host;
            } catch (e) {
              p.crossDomain = !0;
            }
          }

          if (p.data && p.processData && "string" != typeof p.data && (p.data = T.param(p.data, p.traditional)), zt(Mt, p, t, E), c) return E;

          for (d in (f = T.event && p.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !It.test(p.type), r = p.url.replace(Pt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(qt, "+")) : (h = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (At.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(Ot, "$1"), h = (At.test(r) ? "&" : "?") + "_=" + kt++ + h), p.url = r + h), p.ifModified && (T.lastModified[r] && E.setRequestHeader("If-Modified-Since", T.lastModified[r]), T.etag[r] && E.setRequestHeader("If-None-Match", T.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && E.setRequestHeader("Content-Type", p.contentType), E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : p.accepts["*"]), p.headers) {
            E.setRequestHeader(d, p.headers[d]);
          }

          if (p.beforeSend && (!1 === p.beforeSend.call(g, E, p) || c)) return E.abort();

          if (C = "abort", m.add(p.complete), E.done(p.success), E.fail(p.error), i = zt(Ft, p, t, E)) {
            if (E.readyState = 1, f && v.trigger("ajaxSend", [E, p]), c) return E;
            p.async && p.timeout > 0 && (u = n.setTimeout(function () {
              E.abort("timeout");
            }, p.timeout));

            try {
              c = !1, i.send(x, _);
            } catch (e) {
              if (c) throw e;

              _(-1, e);
            }
          } else _(-1, "No Transport");

          function _(e, t, s, a) {
            var l,
                d,
                h,
                x,
                w,
                C = t;
            c || (c = !0, u && n.clearTimeout(u), i = void 0, o = a || "", E.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, s && (x = function (e, t, n) {
              for (var i, r, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];) {
                u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
              }

              if (i) for (r in a) {
                if (a[r] && a[r].test(i)) {
                  u.unshift(r);
                  break;
                }
              }
              if (u[0] in n) o = u[0];else {
                for (r in n) {
                  if (!u[0] || e.converters[r + " " + u[0]]) {
                    o = r;
                    break;
                  }

                  s || (s = r);
                }

                o = o || s;
              }
              if (o) return o !== u[0] && u.unshift(o), n[o];
            }(p, E, s)), x = function (e, t, n, i) {
              var r,
                  o,
                  s,
                  a,
                  u,
                  l = {},
                  c = e.dataTypes.slice();
              if (c[1]) for (s in e.converters) {
                l[s.toLowerCase()] = e.converters[s];
              }

              for (o = c.shift(); o;) {
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
                  if (!(s = l[u + " " + o] || l["* " + o])) for (r in l) {
                    if ((a = r.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                      !0 === s ? s = l[r] : !0 !== l[r] && (o = a[0], c.unshift(a[1]));
                      break;
                    }
                  }
                  if (!0 !== s) if (s && e["throws"]) t = s(t);else try {
                    t = s(t);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: s ? e : "No conversion from " + u + " to " + o
                    };
                  }
                }
              }

              return {
                state: "success",
                data: t
              };
            }(p, x, E, l), l ? (p.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (T.lastModified[r] = w), (w = E.getResponseHeader("etag")) && (T.etag[r] = w)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, d = x.data, l = !(h = x.error))) : (h = C, !e && C || (C = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (t || C) + "", l ? y.resolveWith(g, [d, C, E]) : y.rejectWith(g, [E, C, h]), E.statusCode(b), b = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, p, l ? d : h]), m.fireWith(g, [E, C]), f && (v.trigger("ajaxComplete", [E, p]), --T.active || T.event.trigger("ajaxStop")));
          }

          return E;
        },
        getJSON: function getJSON(e, t, n) {
          return T.get(e, t, n, "json");
        },
        getScript: function getScript(e, t) {
          return T.get(e, void 0, t, "script");
        }
      }), T.each(["get", "post"], function (e, t) {
        T[t] = function (e, n, i, r) {
          return m(n) && (r = r || i, i = n, n = void 0), T.ajax(T.extend({
            url: e,
            type: t,
            dataType: r,
            data: n,
            success: i
          }, T.isPlainObject(e) && e));
        };
      }), T._evalUrl = function (e, t) {
        return T.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: {
            "text script": function textScript() {}
          },
          dataFilter: function dataFilter(e) {
            T.globalEval(e, t);
          }
        });
      }, T.fn.extend({
        wrapAll: function wrapAll(e) {
          var t;
          return this[0] && (m(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var e = this; e.firstElementChild;) {
              e = e.firstElementChild;
            }

            return e;
          }).append(this)), this;
        },
        wrapInner: function wrapInner(e) {
          return m(e) ? this.each(function (t) {
            T(this).wrapInner(e.call(this, t));
          }) : this.each(function () {
            var t = T(this),
                n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e);
          });
        },
        wrap: function wrap(e) {
          var t = m(e);
          return this.each(function (n) {
            T(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function unwrap(e) {
          return this.parent(e).not("body").each(function () {
            T(this).replaceWith(this.childNodes);
          }), this;
        }
      }), T.expr.pseudos.hidden = function (e) {
        return !T.expr.pseudos.visible(e);
      }, T.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }, T.ajaxSettings.xhr = function () {
        try {
          return new n.XMLHttpRequest();
        } catch (e) {}
      };
      var Vt = {
        0: 200,
        1223: 204
      },
          Xt = T.ajaxSettings.xhr();
      y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, T.ajaxTransport(function (e) {
        var _t3, i;

        if (y.cors || Xt && !e.crossDomain) return {
          send: function send(r, o) {
            var s,
                a = e.xhr();
            if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) {
              a[s] = e.xhrFields[s];
            }

            for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) {
              a.setRequestHeader(s, r[s]);
            }

            _t3 = function t(e) {
              return function () {
                _t3 && (_t3 = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Vt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                  binary: a.response
                } : {
                  text: a.responseText
                }, a.getAllResponseHeaders()));
              };
            }, a.onload = _t3(), i = a.onerror = a.ontimeout = _t3("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
              4 === a.readyState && n.setTimeout(function () {
                _t3 && i();
              });
            }, _t3 = _t3("abort");

            try {
              a.send(e.hasContent && e.data || null);
            } catch (e) {
              if (_t3) throw e;
            }
          },
          abort: function abort() {
            _t3 && _t3();
          }
        };
      }), T.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }), T.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function textScript(e) {
            return T.globalEval(e), e;
          }
        }
      }), T.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }), T.ajaxTransport("script", function (e) {
        var t, _n;

        if (e.crossDomain || e.scriptAttrs) return {
          send: function send(i, r) {
            t = T("<script>").attr(e.scriptAttrs || {}).prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", _n = function n(e) {
              t.remove(), _n = null, e && r("error" === e.type ? 404 : 200, e.type);
            }), s.head.appendChild(t[0]);
          },
          abort: function abort() {
            _n && _n();
          }
        };
      });
      var Qt,
          Gt = [],
          Kt = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function jsonpCallback() {
          var e = Gt.pop() || T.expando + "_" + kt++;
          return this[e] = !0, e;
        }
      }), T.ajaxPrefilter("json jsonp", function (e, t, i) {
        var r,
            o,
            s,
            a = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Kt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
          return s || T.error(r + " was not called"), s[0];
        }, e.dataTypes[0] = "json", o = n[r], n[r] = function () {
          s = arguments;
        }, i.always(function () {
          void 0 === o ? T(n).removeProp(r) : n[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), s && m(o) && o(s[0]), s = o = void 0;
        }), "script";
      }), y.createHTMLDocument = ((Qt = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Qt.childNodes.length), T.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((i = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, t.head.appendChild(i)) : t = s), o = !n && [], (r = j.exec(e)) ? [t.createElement(r[1])] : (r = Ee([e], t, o), o && o.length && T(o).remove(), T.merge([], r.childNodes)));
        var i, r, o;
      }, T.fn.load = function (e, t, n) {
        var i,
            r,
            o,
            s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = bt(e.slice(a)), e = e.slice(0, a)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (r = "POST"), s.length > 0 && T.ajax({
          url: e,
          type: r || "GET",
          dataType: "html",
          data: t
        }).done(function (e) {
          o = arguments, s.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e);
        }).always(n && function (e, t) {
          s.each(function () {
            n.apply(this, o || [e.responseText, t, e]);
          });
        }), this;
      }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        T.fn[t] = function (e) {
          return this.on(t, e);
        };
      }), T.expr.pseudos.animated = function (e) {
        return T.grep(T.timers, function (t) {
          return e === t.elem;
        }).length;
      }, T.offset = {
        setOffset: function setOffset(e, t, n) {
          var i,
              r,
              o,
              s,
              a,
              u,
              l = T.css(e, "position"),
              c = T(e),
              f = {};
          "static" === l && (e.style.position = "relative"), a = c.offset(), o = T.css(e, "top"), u = T.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0), m(t) && (t = t.call(e, n, T.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : c.css(f);
        }
      }, T.fn.extend({
        offset: function offset(e) {
          if (arguments.length) return void 0 === e ? this : this.each(function (t) {
            T.offset.setOffset(this, e, t);
          });
          var t,
              n,
              i = this[0];
          return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
            top: t.top + n.pageYOffset,
            left: t.left + n.pageXOffset
          }) : {
            top: 0,
            left: 0
          } : void 0;
        },
        position: function position() {
          if (this[0]) {
            var e,
                t,
                n,
                i = this[0],
                r = {
              top: 0,
              left: 0
            };
            if ("fixed" === T.css(i, "position")) t = i.getBoundingClientRect();else {
              for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) {
                e = e.parentNode;
              }

              e && e !== i && 1 === e.nodeType && ((r = T(e).offset()).top += T.css(e, "borderTopWidth", !0), r.left += T.css(e, "borderLeftWidth", !0));
            }
            return {
              top: t.top - r.top - T.css(i, "marginTop", !0),
              left: t.left - r.left - T.css(i, "marginLeft", !0)
            };
          }
        },
        offsetParent: function offsetParent() {
          return this.map(function () {
            for (var e = this.offsetParent; e && "static" === T.css(e, "position");) {
              e = e.offsetParent;
            }

            return e || se;
          });
        }
      }), T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function (e, t) {
        var n = "pageYOffset" === t;

        T.fn[e] = function (i) {
          return U(this, function (e, i, r) {
            var o;
            if (b(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
            o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r;
          }, e, i, arguments.length);
        };
      }), T.each(["top", "left"], function (e, t) {
        T.cssHooks[t] = Xe(y.pixelPosition, function (e, n) {
          if (n) return n = Ve(e, t), Be.test(n) ? T(e).position()[t] + "px" : n;
        });
      }), T.each({
        Height: "height",
        Width: "width"
      }, function (e, t) {
        T.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
        }, function (n, i) {
          T.fn[i] = function (r, o) {
            var s = arguments.length && (n || "boolean" != typeof r),
                a = n || (!0 === r || !0 === o ? "margin" : "border");
            return U(this, function (t, n, r) {
              var o;
              return b(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? T.css(t, n, a) : T.style(t, n, r, a);
            }, t, s ? r : void 0, s);
          };
        });
      }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        T.fn[t] = function (e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
      }), T.fn.extend({
        hover: function hover(e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        }
      }), T.fn.extend({
        bind: function bind(e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function unbind(e, t) {
          return this.off(e, null, t);
        },
        delegate: function delegate(e, t, n, i) {
          return this.on(t, e, n, i);
        },
        undelegate: function undelegate(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
      }), T.proxy = function (e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return i = u.call(arguments, 2), (r = function r() {
          return e.apply(t || this, i.concat(u.call(arguments)));
        }).guid = e.guid = e.guid || T.guid++, r;
      }, T.holdReady = function (e) {
        e ? T.readyWait++ : T.ready(!0);
      }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = D, T.isFunction = m, T.isWindow = b, T.camelCase = G, T.type = C, T.now = Date.now, T.isNumeric = function (e) {
        var t = T.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }, void 0 === (i = function () {
        return T;
      }.apply(t, [])) || (e.exports = i);
      var Yt = n.jQuery,
          Jt = n.$;
      return T.noConflict = function (e) {
        return n.$ === T && (n.$ = Jt), e && n.jQuery === T && (n.jQuery = Yt), T;
      }, r || (n.jQuery = n.$ = T), T;
    });
  },
  "GC/X": function GCX(e, t, n) {
    var i, r, o;
    r = [n("EVdn"), n("Qwlt")], void 0 === (o = "function" == typeof (i = function i(e) {
      return e.ui.escapeSelector = (t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g, function (e) {
        return e.replace(t, "\\$1");
      });
      var t;
    }) ? i.apply(t, r) : i) || (e.exports = o);
  },
  MIQu: function MIQu(e, t, n) {
    var i, r, o;
    r = [n("EVdn"), n("Qwlt")], void 0 === (o = "function" == typeof (i = function i(e) {
      var t,
          n = 0,
          i = Array.prototype.slice;
      return e.cleanData = (t = e.cleanData, function (n) {
        var i, r, o;

        for (o = 0; null != (r = n[o]); o++) {
          try {
            (i = e._data(r, "events")) && i.remove && e(r).triggerHandler("remove");
          } catch (e) {}
        }

        t(n);
      }), e.widget = function (t, n, i) {
        var r,
            o,
            s,
            a = {},
            u = t.split(".")[0],
            l = u + "-" + (t = t.split(".")[1]);
        return i || (i = n, n = e.Widget), e.isArray(i) && (i = e.extend.apply(null, [{}].concat(i))), e.expr[":"][l.toLowerCase()] = function (t) {
          return !!e.data(t, l);
        }, e[u] = e[u] || {}, r = e[u][t], o = e[u][t] = function (e, t) {
          if (!this._createWidget) return new o(e, t);
          arguments.length && this._createWidget(e, t);
        }, e.extend(o, r, {
          version: i.version,
          _proto: e.extend({}, i),
          _childConstructors: []
        }), (s = new n()).options = e.widget.extend({}, s.options), e.each(i, function (t, i) {
          e.isFunction(i) ? a[t] = function () {
            function e() {
              return n.prototype[t].apply(this, arguments);
            }

            function r(e) {
              return n.prototype[t].apply(this, e);
            }

            return function () {
              var t,
                  n = this._super,
                  o = this._superApply;
              return this._super = e, this._superApply = r, t = i.apply(this, arguments), this._super = n, this._superApply = o, t;
            };
          }() : a[t] = i;
        }), o.prototype = e.widget.extend(s, {
          widgetEventPrefix: r && s.widgetEventPrefix || t
        }, a, {
          constructor: o,
          namespace: u,
          widgetName: t,
          widgetFullName: l
        }), r ? (e.each(r._childConstructors, function (t, n) {
          var i = n.prototype;
          e.widget(i.namespace + "." + i.widgetName, o, n._proto);
        }), delete r._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o), o;
      }, e.widget.extend = function (t) {
        for (var n, r, o = i.call(arguments, 1), s = 0, a = o.length; s < a; s++) {
          for (n in o[s]) {
            r = o[s][n], o[s].hasOwnProperty(n) && void 0 !== r && (e.isPlainObject(r) ? t[n] = e.isPlainObject(t[n]) ? e.widget.extend({}, t[n], r) : e.widget.extend({}, r) : t[n] = r);
          }
        }

        return t;
      }, e.widget.bridge = function (t, n) {
        var r = n.prototype.widgetFullName || t;

        e.fn[t] = function (o) {
          var s = "string" == typeof o,
              a = i.call(arguments, 1),
              u = this;
          return s ? this.length || "instance" !== o ? this.each(function () {
            var n,
                i = e.data(this, r);
            return "instance" === o ? (u = i, !1) : i ? e.isFunction(i[o]) && "_" !== o.charAt(0) ? (n = i[o].apply(i, a)) !== i && void 0 !== n ? (u = n && n.jquery ? u.pushStack(n.get()) : n, !1) : void 0 : e.error("no such method '" + o + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + o + "'");
          }) : u = void 0 : (a.length && (o = e.widget.extend.apply(null, [o].concat(a))), this.each(function () {
            var t = e.data(this, r);
            t ? (t.option(o || {}), t._init && t._init()) : e.data(this, r, new n(o, this));
          })), u;
        };
      }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
          classes: {},
          disabled: !1,
          create: null
        },
        _createWidget: function _createWidget(t, i) {
          i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), this.classesElementLookup = {}, i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
            remove: function remove(e) {
              e.target === i && this.destroy();
            }
          }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
        },
        _getCreateOptions: function _getCreateOptions() {
          return {};
        },
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function destroy() {
          var t = this;
          this._destroy(), e.each(this.classesElementLookup, function (e, n) {
            t._removeClass(n, e);
          }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
        },
        _destroy: e.noop,
        widget: function widget() {
          return this.element;
        },
        option: function option(t, n) {
          var i,
              r,
              o,
              s = t;
          if (0 === arguments.length) return e.widget.extend({}, this.options);
          if ("string" == typeof t) if (s = {}, i = t.split("."), t = i.shift(), i.length) {
            for (r = s[t] = e.widget.extend({}, this.options[t]), o = 0; o < i.length - 1; o++) {
              r[i[o]] = r[i[o]] || {}, r = r[i[o]];
            }

            if (t = i.pop(), 1 === arguments.length) return void 0 === r[t] ? null : r[t];
            r[t] = n;
          } else {
            if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
            s[t] = n;
          }
          return this._setOptions(s), this;
        },
        _setOptions: function _setOptions(e) {
          var t;

          for (t in e) {
            this._setOption(t, e[t]);
          }

          return this;
        },
        _setOption: function _setOption(e, t) {
          return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this;
        },
        _setOptionClasses: function _setOptionClasses(t) {
          var n, i, r;

          for (n in t) {
            r = this.classesElementLookup[n], t[n] !== this.options.classes[n] && r && r.length && (i = e(r.get()), this._removeClass(r, n), i.addClass(this._classes({
              element: i,
              keys: n,
              classes: t,
              add: !0
            })));
          }
        },
        _setOptionDisabled: function _setOptionDisabled(e) {
          this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
        },
        enable: function enable() {
          return this._setOptions({
            disabled: !1
          });
        },
        disable: function disable() {
          return this._setOptions({
            disabled: !0
          });
        },
        _classes: function _classes(t) {
          var n = [],
              i = this;

          function r(r, o) {
            var s, a;

            for (a = 0; a < r.length; a++) {
              s = i.classesElementLookup[r[a]] || e(), s = t.add ? e(e.unique(s.get().concat(t.element.get()))) : e(s.not(t.element).get()), i.classesElementLookup[r[a]] = s, n.push(r[a]), o && t.classes[r[a]] && n.push(t.classes[r[a]]);
            }
          }

          return t = e.extend({
            element: this.element,
            classes: this.options.classes || {}
          }, t), this._on(t.element, {
            remove: "_untrackClassesElement"
          }), t.keys && r(t.keys.match(/\S+/g) || [], !0), t.extra && r(t.extra.match(/\S+/g) || []), n.join(" ");
        },
        _untrackClassesElement: function _untrackClassesElement(t) {
          var n = this;
          e.each(n.classesElementLookup, function (i, r) {
            -1 !== e.inArray(t.target, r) && (n.classesElementLookup[i] = e(r.not(t.target).get()));
          });
        },
        _removeClass: function _removeClass(e, t, n) {
          return this._toggleClass(e, t, n, !1);
        },
        _addClass: function _addClass(e, t, n) {
          return this._toggleClass(e, t, n, !0);
        },
        _toggleClass: function _toggleClass(e, t, n, i) {
          i = "boolean" == typeof i ? i : n;
          var r = "string" == typeof e || null === e,
              o = {
            extra: r ? t : n,
            keys: r ? e : t,
            element: r ? this.element : e,
            add: i
          };
          return o.element.toggleClass(this._classes(o), i), this;
        },
        _on: function _on(t, n, i) {
          var r,
              o = this;
          "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = r = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, r = this.widget()), e.each(i, function (i, s) {
            function a() {
              if (t || !0 !== o.options.disabled && !e(this).hasClass("ui-state-disabled")) return ("string" == typeof s ? o[s] : s).apply(o, arguments);
            }

            "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || e.guid++);
            var u = i.match(/^([\w:-]*)\s*(.*)$/),
                l = u[1] + o.eventNamespace,
                c = u[2];
            c ? r.on(l, c, a) : n.on(l, a);
          });
        },
        _off: function _off(t, n) {
          n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(n).off(n), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get());
        },
        _delay: function _delay(e, t) {
          var n = this;
          return setTimeout(function () {
            return ("string" == typeof e ? n[e] : e).apply(n, arguments);
          }, t || 0);
        },
        _hoverable: function _hoverable(t) {
          this.hoverable = this.hoverable.add(t), this._on(t, {
            mouseenter: function mouseenter(t) {
              this._addClass(e(t.currentTarget), null, "ui-state-hover");
            },
            mouseleave: function mouseleave(t) {
              this._removeClass(e(t.currentTarget), null, "ui-state-hover");
            }
          });
        },
        _focusable: function _focusable(t) {
          this.focusable = this.focusable.add(t), this._on(t, {
            focusin: function focusin(t) {
              this._addClass(e(t.currentTarget), null, "ui-state-focus");
            },
            focusout: function focusout(t) {
              this._removeClass(e(t.currentTarget), null, "ui-state-focus");
            }
          });
        },
        _trigger: function _trigger(t, n, i) {
          var r,
              o,
              s = this.options[t];
          if (i = i || {}, (n = e.Event(n)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], o = n.originalEvent) for (r in o) {
            r in n || (n[r] = o[r]);
          }
          return this.element.trigger(n, i), !(e.isFunction(s) && !1 === s.apply(this.element[0], [n].concat(i)) || n.isDefaultPrevented());
        }
      }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
      }, function (t, n) {
        e.Widget.prototype["_" + t] = function (i, r, o) {
          var s;
          "string" == typeof r && (r = {
            effect: r
          });
          var a = r ? !0 === r || "number" == typeof r ? n : r.effect || n : t;
          "number" == typeof (r = r || {}) && (r = {
            duration: r
          }), s = !e.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), s && e.effects && e.effects.effect[a] ? i[t](r) : a !== t && i[a] ? i[a](r.duration, r.easing, o) : i.queue(function (n) {
            e(this)[t](), o && o.call(i[0]), n();
          });
        };
      }), e.widget;
    }) ? i.apply(t, r) : i) || (e.exports = o);
  },
  Qwlt: function Qwlt(e, t, n) {
    var i, r, o;
    r = [n("EVdn")], void 0 === (o = "function" == typeof (i = function i(e) {
      return e.ui = e.ui || {}, e.ui.version = "1.12.1";
    }) ? i.apply(t, r) : i) || (e.exports = o);
  },
  pVw5: function pVw5(e, t, n) {
    var i, r, o;
    r = [n("EVdn"), n("GC/X"), n("vBzC"), n("yw1R"), n("y6ec"), n("Qwlt"), n("MIQu")], void 0 === (o = "function" == typeof (i = function i(e) {
      var t;
      return e.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
          active: null,
          classes: {
            "ui-tabs": "ui-corner-all",
            "ui-tabs-nav": "ui-corner-all",
            "ui-tabs-panel": "ui-corner-bottom",
            "ui-tabs-tab": "ui-corner-top"
          },
          collapsible: !1,
          event: "click",
          heightStyle: "content",
          hide: null,
          show: null,
          activate: null,
          beforeActivate: null,
          beforeLoad: null,
          load: null
        },
        _isLocal: (t = /#.*$/, function (e) {
          var n, i;
          n = e.href.replace(t, ""), i = location.href.replace(t, "");

          try {
            n = decodeURIComponent(n);
          } catch (e) {}

          try {
            i = decodeURIComponent(i);
          } catch (e) {}

          return e.hash.length > 1 && n === i;
        }),
        _create: function _create() {
          var t = this,
              n = this.options;
          this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, n.collapsible), this._processTabs(), n.active = this._initialActive(), e.isArray(n.disabled) && (n.disabled = e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
            return t.tabs.index(e);
          }))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(n.active) : this.active = e(), this._refresh(), this.active.length && this.load(n.active);
        },
        _initialActive: function _initialActive() {
          var t = this.options.active,
              n = this.options.collapsible,
              i = location.hash.substring(1);
          return null === t && (i && this.tabs.each(function (n, r) {
            if (e(r).attr("aria-controls") === i) return t = n, !1;
          }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== t && -1 !== t || (t = !!this.tabs.length && 0)), !1 !== t && -1 === (t = this.tabs.index(this.tabs.eq(t))) && (t = !n && 0), !n && !1 === t && this.anchors.length && (t = 0), t;
        },
        _getCreateEventData: function _getCreateEventData() {
          return {
            tab: this.active,
            panel: this.active.length ? this._getPanelForTab(this.active) : e()
          };
        },
        _tabKeydown: function _tabKeydown(t) {
          var n = e(e.ui.safeActiveElement(this.document[0])).closest("li"),
              i = this.tabs.index(n),
              r = !0;

          if (!this._handlePageNav(t)) {
            switch (t.keyCode) {
              case e.ui.keyCode.RIGHT:
              case e.ui.keyCode.DOWN:
                i++;
                break;

              case e.ui.keyCode.UP:
              case e.ui.keyCode.LEFT:
                r = !1, i--;
                break;

              case e.ui.keyCode.END:
                i = this.anchors.length - 1;
                break;

              case e.ui.keyCode.HOME:
                i = 0;
                break;

              case e.ui.keyCode.SPACE:
                return t.preventDefault(), clearTimeout(this.activating), void this._activate(i);

              case e.ui.keyCode.ENTER:
                return t.preventDefault(), clearTimeout(this.activating), void this._activate(i !== this.options.active && i);

              default:
                return;
            }

            t.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, r), t.ctrlKey || t.metaKey || (n.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function () {
              this.option("active", i);
            }, this.delay));
          }
        },
        _panelKeydown: function _panelKeydown(t) {
          this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus"));
        },
        _handlePageNav: function _handlePageNav(t) {
          return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0;
        },
        _findNextTab: function _findNextTab(t, n) {
          for (var i = this.tabs.length - 1; -1 !== e.inArray((t > i && (t = 0), t < 0 && (t = i), t), this.options.disabled);) {
            t = n ? t + 1 : t - 1;
          }

          return t;
        },
        _focusNextTab: function _focusNextTab(e, t) {
          return e = this._findNextTab(e, t), this.tabs.eq(e).trigger("focus"), e;
        },
        _setOption: function _setOption(e, t) {
          "active" !== e ? (this._super(e, t), "collapsible" === e && (this._toggleClass("ui-tabs-collapsible", null, t), t || !1 !== this.options.active || this._activate(0)), "event" === e && this._setupEvents(t), "heightStyle" === e && this._setupHeightStyle(t)) : this._activate(t);
        },
        _sanitizeSelector: function _sanitizeSelector(e) {
          return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
        },
        refresh: function refresh() {
          var t = this.options,
              n = this.tablist.children(":has(a[href])");
          t.disabled = e.map(n.filter(".ui-state-disabled"), function (e) {
            return n.index(e);
          }), this._processTabs(), !1 !== t.active && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh();
        },
        _refresh: function _refresh() {
          this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
            "aria-selected": "false",
            "aria-expanded": "false",
            tabIndex: -1
          }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
            "aria-hidden": "true"
          }), this.active.length ? (this.active.attr({
            "aria-selected": "true",
            "aria-expanded": "true",
            tabIndex: 0
          }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
            "aria-hidden": "false"
          })) : this.tabs.eq(0).attr("tabIndex", 0);
        },
        _processTabs: function _processTabs() {
          var t = this,
              n = this.tabs,
              i = this.anchors,
              r = this.panels;
          this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (t) {
            e(this).is(".ui-state-disabled") && t.preventDefault();
          }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
            e(this).closest("li").is(".ui-state-disabled") && this.blur();
          }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
            role: "tab",
            tabIndex: -1
          }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
            return e("a", this)[0];
          }).attr({
            role: "presentation",
            tabIndex: -1
          }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = e(), this.anchors.each(function (n, i) {
            var r,
                o,
                s,
                a = e(i).uniqueId().attr("id"),
                u = e(i).closest("li"),
                l = u.attr("aria-controls");
            t._isLocal(i) ? (s = (r = i.hash).substring(1), o = t.element.find(t._sanitizeSelector(r))) : (r = "#" + (s = u.attr("aria-controls") || e({}).uniqueId()[0].id), (o = t.element.find(r)).length || (o = t._createPanel(s)).insertAfter(t.panels[n - 1] || t.tablist), o.attr("aria-live", "polite")), o.length && (t.panels = t.panels.add(o)), l && u.data("ui-tabs-aria-controls", l), u.attr({
              "aria-controls": s,
              "aria-labelledby": a
            }), o.attr("aria-labelledby", a);
          }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), n && (this._off(n.not(this.tabs)), this._off(i.not(this.anchors)), this._off(r.not(this.panels)));
        },
        _getList: function _getList() {
          return this.tablist || this.element.find("ol, ul").eq(0);
        },
        _createPanel: function _createPanel(t) {
          return e("<div>").attr("id", t).data("ui-tabs-destroy", !0);
        },
        _setOptionDisabled: function _setOptionDisabled(t) {
          var n, i, r;

          for (e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), r = 0; i = this.tabs[r]; r++) {
            n = e(i), !0 === t || -1 !== e.inArray(r, t) ? (n.attr("aria-disabled", "true"), this._addClass(n, null, "ui-state-disabled")) : (n.removeAttr("aria-disabled"), this._removeClass(n, null, "ui-state-disabled"));
          }

          this.options.disabled = t, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t);
        },
        _setupEvents: function _setupEvents(t) {
          var n = {};
          t && e.each(t.split(" "), function (e, t) {
            n[t] = "_eventHandler";
          }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
            click: function click(e) {
              e.preventDefault();
            }
          }), this._on(this.anchors, n), this._on(this.tabs, {
            keydown: "_tabKeydown"
          }), this._on(this.panels, {
            keydown: "_panelKeydown"
          }), this._focusable(this.tabs), this._hoverable(this.tabs);
        },
        _setupHeightStyle: function _setupHeightStyle(t) {
          var n,
              i = this.element.parent();
          "fill" === t ? (n = i.height(), n -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
            var t = e(this),
                i = t.css("position");
            "absolute" !== i && "fixed" !== i && (n -= t.outerHeight(!0));
          }), this.element.children().not(this.panels).each(function () {
            n -= e(this).outerHeight(!0);
          }), this.panels.each(function () {
            e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()));
          }).css("overflow", "auto")) : "auto" === t && (n = 0, this.panels.each(function () {
            n = Math.max(n, e(this).height("").height());
          }).height(n));
        },
        _eventHandler: function _eventHandler(t) {
          var n = this.options,
              i = this.active,
              r = e(t.currentTarget).closest("li"),
              o = r[0] === i[0],
              s = o && n.collapsible,
              a = s ? e() : this._getPanelForTab(r),
              u = i.length ? this._getPanelForTab(i) : e(),
              l = {
            oldTab: i,
            oldPanel: u,
            newTab: s ? e() : r,
            newPanel: a
          };
          t.preventDefault(), r.hasClass("ui-state-disabled") || r.hasClass("ui-tabs-loading") || this.running || o && !n.collapsible || !1 === this._trigger("beforeActivate", t, l) || (n.active = !s && this.tabs.index(r), this.active = o ? e() : r, this.xhr && this.xhr.abort(), u.length || a.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(r), t), this._toggle(t, l));
        },
        _toggle: function _toggle(t, n) {
          var i = this,
              r = n.newPanel,
              o = n.oldPanel;

          function s() {
            i.running = !1, i._trigger("activate", t, n);
          }

          function a() {
            i._addClass(n.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.length && i.options.show ? i._show(r, i.options.show, s) : (r.show(), s());
          }

          this.running = !0, o.length && this.options.hide ? this._hide(o, this.options.hide, function () {
            i._removeClass(n.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a();
          }) : (this._removeClass(n.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), o.hide(), a()), o.attr("aria-hidden", "true"), n.oldTab.attr({
            "aria-selected": "false",
            "aria-expanded": "false"
          }), r.length && o.length ? n.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function () {
            return 0 === e(this).attr("tabIndex");
          }).attr("tabIndex", -1), r.attr("aria-hidden", "false"), n.newTab.attr({
            "aria-selected": "true",
            "aria-expanded": "true",
            tabIndex: 0
          });
        },
        _activate: function _activate(t) {
          var n,
              i = this._findActive(t);

          i[0] !== this.active[0] && (i.length || (i = this.active), n = i.find(".ui-tabs-anchor")[0], this._eventHandler({
            target: n,
            currentTarget: n,
            preventDefault: e.noop
          }));
        },
        _findActive: function _findActive(t) {
          return !1 === t ? e() : this.tabs.eq(t);
        },
        _getIndex: function _getIndex(t) {
          return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + e.ui.escapeSelector(t) + "']"))), t;
        },
        _destroy: function _destroy() {
          this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
            e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
          }), this.tabs.each(function () {
            var t = e(this),
                n = t.data("ui-tabs-aria-controls");
            n ? t.attr("aria-controls", n).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls");
          }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
        },
        enable: function enable(t) {
          var n = this.options.disabled;
          !1 !== n && (void 0 === t ? n = !1 : (t = this._getIndex(t), n = e.isArray(n) ? e.map(n, function (e) {
            return e !== t ? e : null;
          }) : e.map(this.tabs, function (e, n) {
            return n !== t ? n : null;
          })), this._setOptionDisabled(n));
        },
        disable: function disable(t) {
          var n = this.options.disabled;

          if (!0 !== n) {
            if (void 0 === t) n = !0;else {
              if (t = this._getIndex(t), -1 !== e.inArray(t, n)) return;
              n = e.isArray(n) ? e.merge([t], n).sort() : [t];
            }

            this._setOptionDisabled(n);
          }
        },
        load: function load(t, n) {
          t = this._getIndex(t);

          var i = this,
              r = this.tabs.eq(t),
              o = r.find(".ui-tabs-anchor"),
              s = this._getPanelForTab(r),
              a = {
            tab: r,
            panel: s
          },
              u = function u(e, t) {
            "abort" === t && i.panels.stop(!1, !0), i._removeClass(r, "ui-tabs-loading"), s.removeAttr("aria-busy"), e === i.xhr && delete i.xhr;
          };

          this._isLocal(o[0]) || (this.xhr = e.ajax(this._ajaxSettings(o, n, a)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(r, "ui-tabs-loading"), s.attr("aria-busy", "true"), this.xhr.done(function (e, t, r) {
            setTimeout(function () {
              s.html(e), i._trigger("load", n, a), u(r, t);
            }, 1);
          }).fail(function (e, t) {
            setTimeout(function () {
              u(e, t);
            }, 1);
          })));
        },
        _ajaxSettings: function _ajaxSettings(t, n, i) {
          var r = this;
          return {
            url: t.attr("href").replace(/#.*$/, ""),
            beforeSend: function beforeSend(t, o) {
              return r._trigger("beforeLoad", n, e.extend({
                jqXHR: t,
                ajaxSettings: o
              }, i));
            }
          };
        },
        _getPanelForTab: function _getPanelForTab(t) {
          var n = e(t).attr("aria-controls");
          return this.element.find(this._sanitizeSelector("#" + n));
        }
      }), !1 !== e.uiBackCompat && e.widget("ui.tabs", e.ui.tabs, {
        _processTabs: function _processTabs() {
          this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
        }
      }), e.ui.tabs;
    }) ? i.apply(t, r) : i) || (e.exports = o);
  },
  vBzC: function vBzC(e, t, n) {
    var i, r, o;
    r = [n("EVdn"), n("Qwlt")], void 0 === (o = "function" == typeof (i = function i(e) {
      return e.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
      };
    }) ? i.apply(t, r) : i) || (e.exports = o);
  },
  y6ec: function y6ec(e, t, n) {
    var i, r, o;
    r = [n("EVdn"), n("Qwlt")], void 0 === (o = "function" == typeof (i = function i(e) {
      return e.fn.extend({
        uniqueId: (t = 0, function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++t);
          });
        }),
        removeUniqueId: function removeUniqueId() {
          return this.each(function () {
            /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
          });
        }
      });
      var t;
    }) ? i.apply(t, r) : i) || (e.exports = o);
  },
  yw1R: function yw1R(e, t, n) {
    var i, r, o;
    r = [n("EVdn"), n("Qwlt")], void 0 === (o = "function" == typeof (i = function i(e) {
      return e.ui.safeActiveElement = function (e) {
        var t;

        try {
          t = e.activeElement;
        } catch (n) {
          t = e.body;
        }

        return t || (t = e.body), t.nodeName || (t = e.body), t;
      };
    }) ? i.apply(t, r) : i) || (e.exports = o);
  }
}]);
