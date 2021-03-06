/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function (a, b) {
	var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.1", m = function (a, b) { return new m.fn.init(a, b) }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) { return b.toUpperCase() }; m.fn = m.prototype = { jquery: l, constructor: m, selector: "", length: 0, toArray: function () { return d.call(this) }, get: function (a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this) }, pushStack: function (a) { var b = m.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function (a, b) { return m.each(this, a, b) }, map: function (a) { return this.pushStack(m.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(d.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length, c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function () { return this.prevObject || this.constructor(null) }, push: f, sort: c.sort, splice: c.splice }, m.extend = m.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c)); return g }, m.extend({ expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a) }, noop: function () { }, isFunction: function (a) { return "function" === m.type(a) }, isArray: Array.isArray || function (a) { return "array" === m.type(a) }, isWindow: function (a) { return null != a && a == a.window }, isNumeric: function (a) { return !m.isArray(a) && a - parseFloat(a) >= 0 }, isEmptyObject: function (a) { var b; for (b in a) return !1; return !0 }, isPlainObject: function (a) { var b; if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1; try { if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } if (k.ownLast) for (b in a) return j.call(a, b); for (b in a); return void 0 === b || j.call(a, b) }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a }, globalEval: function (b) { b && m.trim(b) && (a.execScript || function (b) { a.eval.call(a, b) })(b) }, camelCase: function (a) { return a.replace(o, "ms-").replace(p, q) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b, c) { var d, e = 0, f = a.length, g = r(a); if (c) { if (g) { for (; f > e; e++)if (d = b.apply(a[e], c), d === !1) break } else for (e in a) if (d = b.apply(a[e], c), d === !1) break } else if (g) { for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1) break } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break; return a }, trim: function (a) { return null == a ? "" : (a + "").replace(n, "") }, makeArray: function (a, b) { var c = b || []; return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c }, inArray: function (a, b, c) { var d; if (b) { if (g) return g.call(b, a, c); for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a) return c } return -1 }, merge: function (a, b) { var c = +b.length, d = 0, e = a.length; while (c > d) a[e++] = b[d++]; if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++]; return a.length = e, a }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function (a, b, c) { var d, f = 0, g = a.length, h = r(a), i = []; if (h) for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), null != d && i.push(d); return e.apply([], i) }, guid: 1, proxy: function (a, b) { var c, e, f; return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () { return a.apply(b || this, c.concat(d.call(arguments))) }, e.guid = a.guid = a.guid || m.guid++, e) : void 0 }, now: function () { return +new Date }, support: k }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) { h["[object " + b + "]"] = b.toLowerCase() }); function r(a) { var b = a.length, c = m.type(a); return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a } var s = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function (a, b) { return a === b && (l = !0), 0 }, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function (a) { for (var b = 0, c = this.length; c > b; b++)if (this[b] === a) return b; return -1 }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = { ID: new RegExp("^#(" + N + ")"), CLASS: new RegExp("^\\.(" + N + ")"), TAG: new RegExp("^(" + N.replace("w", "w*") + ")"), ATTR: new RegExp("^" + P), PSEUDO: new RegExp("^" + Q), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + L + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }; try { I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType } catch (eb) { I = { apply: F.length ? function (a, b) { H.apply(a, J.call(b)) } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]); a.length = c - 1 } } } function fb(a, b, d, e) { var f, h, j, k, l, o, r, s, w, x; if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d; if (1 !== (k = b.nodeType) && 9 !== k) return []; if (p && !e) { if (f = _.exec(a)) if (j = f[1]) { if (9 === k) { if (h = b.getElementById(j), !h || !h.parentNode) return d; if (h.id === j) return d.push(h), d } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d } else { if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d; if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d } if (c.qsa && (!q || !q.test(a))) { if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) { o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length; while (l--) o[l] = s + qb(o[l]); w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",") } if (x) try { return I.apply(d, w.querySelectorAll(x)), d } catch (y) { } finally { r || b.removeAttribute("id") } } } return i(a.replace(R, "$1"), b, d, e) } function gb() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function hb(a) { return a[u] = !0, a } function ib(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function jb(a, b) { var c = a.split("|"), e = a.length; while (e--) d.attrHandle[c[e]] = b } function kb(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D); if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1 } function lb(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function mb(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function nb(a) { return hb(function (b) { return b = +b, hb(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function ob(a) { return a && typeof a.getElementsByTagName !== C && a } c = fb.support = {}, f = fb.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = fb.setDocument = function (a) { var b, e = a ? a.ownerDocument || a : v, g = e.defaultView; return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () { m() }, !1) : g.attachEvent && g.attachEvent("onunload", function () { m() })), c.attributes = ib(function (a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ib(function (a) { return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) { return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length }), c.getById = ib(function (a) { return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length }), c.getById ? (d.find.ID = function (a, b) { if (typeof b.getElementById !== C && p) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, d.filter.ID = function (a) { var b = a.replace(cb, db); return function (a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function (a) { var b = a.replace(cb, db); return function (a) { var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0 } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function (a, b) { return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) { a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked") }), ib(function (a) { var b = e.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, B = b ? function (a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1) } : function (a, b) { if (a === b) return l = !0, 0; var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b]; if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0; if (f === g) return kb(a, b); c = a; while (c = c.parentNode) h.unshift(c); c = b; while (c = c.parentNode) i.unshift(c); while (h[d] === i[d]) d++; return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0 }, e) : n }, fb.matches = function (a, b) { return fb(a, null, null, b) }, fb.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) { } return fb(b, n, null, [a]).length > 0 }, fb.contains = function (a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, fb.attr = function (a, b) { (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, fb.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }, fb.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = fb.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling)c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else while (b = a[d++]) c += e(b); return c }, d = fb.selectors = { cacheLength: 50, createPseudo: hb, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a }, PSEUDO: function (a) { var b, c = !a[6] && a[2]; return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function (a) { var b = a.replace(cb, db).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) { return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) { return function (d) { var e = fb.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h; if (q) { if (f) { while (p) { l = b; while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n]; while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) { k[a] = [w, n, m]; break } } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0 } } }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) { var d, f = e(a, b), g = f.length; while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g]) }) : function (a) { return e(a, 0, c) }) : e } }, pseudos: { not: hb(function (a) { var b = [], c = [], d = h(a.replace(R, "$1")); return d[u] ? hb(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--) (f = g[h]) && (a[h] = !(b[h] = f)) }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), !c.pop() } }), has: hb(function (a) { return function (b) { return fb(a, b).length > 0 } }), contains: hb(function (a) { return function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: hb(function (a) { return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) { var c; do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === o }, focus: function (a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function (a) { return a.disabled === !1 }, disabled: function (a) { return a.disabled === !0 }, checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6) return !1; return !0 }, parent: function (a) { return !d.pseudos.empty(a) }, header: function (a) { return Z.test(a.nodeName) }, input: function (a) { return Y.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: nb(function () { return [0] }), last: nb(function (a, b) { return [b - 1] }), eq: nb(function (a, b, c) { return [0 > c ? c + b : c] }), even: nb(function (a, b) { for (var c = 0; b > c; c += 2)a.push(c); return a }), odd: nb(function (a, b) { for (var c = 1; b > c; c += 2)a.push(c); return a }), lt: nb(function (a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d); return a }), gt: nb(function (a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = lb(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = mb(b); function pb() { } pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? fb.error(a) : z(a, i).slice(0) }; function qb(a) { for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value; return d } function rb(a, b, c) { var d = b.dir, e = c && "parentNode" === d, f = x++; return b.first ? function (b, c, f) { while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f) } : function (b, c, g) { var h, i, j = [w, f]; if (g) { while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else while (b = b[d]) if (1 === b.nodeType || e) { if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 } } } function sb(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function tb(a, b, c) { for (var d = 0, e = b.length; e > d; d++)fb(a, b[d], c); return c } function ub(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g } function vb(a, b, c, d, e, f) { return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = ub(r, n), d(j, [], h, i), k = j.length; while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--) (l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) } k = r.length; while (k--) (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r) }) } function wb(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) { return a === b }, h, !0), l = rb(function (a) { return K.call(b, a) > -1 }, h, !0), m = [function (a, c, d) { return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)) }]; f > i; i++)if (c = d.relative[a[i].type]) m = [rb(sb(m), c)]; else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; f > e; e++)if (d.relative[a[e].type]) break; return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a)) } m.push(c) } return sb(m) } function xb(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) { var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length; for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) { if (e && l) { m = 0; while (o = a[m++]) if (o(l, g, h)) { i.push(l); break } k && (w = v) } c && ((l = !o && l) && p--, f && r.push(l)) } if (p += q, c && q !== p) { m = 0; while (o = b[m++]) o(r, s, g, h); if (f) { if (p > 0) while (q--) r[q] || s[q] || (s[q] = G.call(i)); s = ub(s) } I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i) } return k && (w = v, j = t), r }; return c ? hb(f) : f } return h = fb.compile = function (a, b) { var c, d = [], e = [], f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f); f = A(a, xb(e, d)), f.selector = a } return f }, i = fb.select = function (a, b, e, f) { var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a); if (e = e || [], 1 === o.length) { if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) { if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e; n && (b = b.parentNode), a = a.slice(j.shift().value.length) } i = X.needsContext.test(a) ? 0 : j.length; while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e; break } } } return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), ib(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || jb("type|href|height|width", function (a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ib(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || jb("value", function (a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), ib(function (a) { return null == a.getAttribute("disabled") }) || jb(L, function (a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), fb }(a); m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains; var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/; function w(a, b, c) { if (m.isFunction(b)) return m.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return m.grep(a, function (a) { return a === b !== c }); if ("string" == typeof b) { if (v.test(b)) return m.filter(b, a, c); b = m.filter(b, a) } return m.grep(a, function (a) { return m.inArray(a, b) >= 0 !== c }) } m.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) { return 1 === a.nodeType })) }, m.fn.extend({ find: function (a) { var b, c = [], d = this, e = d.length; if ("string" != typeof a) return this.pushStack(m(a).filter(function () { for (b = 0; e > b; b++)if (m.contains(d[b], this)) return !0 })); for (b = 0; e > b; b++)m.find(a, d[b], c); return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c }, filter: function (a) { return this.pushStack(w(this, a || [], !1)) }, not: function (a) { return this.pushStack(w(this, a || [], !0)) }, is: function (a) { return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length } }); var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) { var c, d; if (!a) return this; if ("string" == typeof a) { if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a); if (c[1]) { if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]); return this } if (d = y.getElementById(c[2]), d && d.parentNode) { if (d.id !== c[2]) return x.find(a); this.length = 1, this[0] = d } return this.context = y, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this)) }; A.prototype = m.fn, x = m(y); var B = /^(?:parents|prev(?:Until|All))/, C = { children: !0, contents: !0, next: !0, prev: !0 }; m.extend({ dir: function (a, b, c) { var d = [], e = a[b]; while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b]; return d }, sibling: function (a, b) { for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a); return c } }), m.fn.extend({ has: function (a) { var b, c = m(a, this), d = c.length; return this.filter(function () { for (b = 0; d > b; b++)if (m.contains(this, c[b])) return !0 }) }, closest: function (a, b) { for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? m.unique(f) : f) }, index: function (a) { return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (a, b) { return this.pushStack(m.unique(m.merge(this.get(), m(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }); function D(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a } m.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function (a) { return m.dir(a, "parentNode") }, parentsUntil: function (a, b, c) { return m.dir(a, "parentNode", c) }, next: function (a) { return D(a, "nextSibling") }, prev: function (a) { return D(a, "previousSibling") }, nextAll: function (a) { return m.dir(a, "nextSibling") }, prevAll: function (a) { return m.dir(a, "previousSibling") }, nextUntil: function (a, b, c) { return m.dir(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return m.dir(a, "previousSibling", c) }, siblings: function (a) { return m.sibling((a.parentNode || {}).firstChild, a) }, children: function (a) { return m.sibling(a.firstChild) }, contents: function (a) { return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes) } }, function (a, b) { m.fn[a] = function (c, d) { var e = m.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e) } }); var E = /\S+/g, F = {}; function G(a) { var b = F[a] = {}; return m.each(a.match(E) || [], function (a, c) { b[c] = !0 }), b } m.Callbacks = function (a) { a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a); var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) { for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) { c = !1; break } b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable()) }, k = { add: function () { if (h) { var d = h.length; !function f(b) { m.each(b, function (b, c) { var d = m.type(c); "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c) }) }(arguments), b ? e = h.length : c && (g = d, j(c)) } return this }, remove: function () { return h && m.each(arguments, function (a, c) { var d; while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--) }), this }, has: function (a) { return a ? m.inArray(a, h) > -1 : !(!h || !h.length) }, empty: function () { return h = [], e = 0, this }, disable: function () { return h = i = c = void 0, this }, disabled: function () { return !h }, lock: function () { return i = void 0, c || k.disable(), this }, locked: function () { return !i }, fireWith: function (a, c) { return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this }, fire: function () { return k.fireWith(this, arguments), this }, fired: function () { return !!d } }; return k }, m.extend({ Deferred: function (a) { var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]], c = "pending", d = { state: function () { return c }, always: function () { return e.done(arguments).fail(arguments), this }, then: function () { var a = arguments; return m.Deferred(function (c) { m.each(b, function (b, f) { var g = m.isFunction(a[b]) && a[b]; e[f[1]](function () { var a = g && g.apply(this, arguments); a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function (a) { return null != a ? m.extend(a, d) : d } }, e = {}; return d.pipe = d.then, m.each(b, function (a, f) { var g = f[2], h = f[3]; d[f[1]] = g.add, h && g.add(function () { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function (a) { var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function (a, b, c) { return function (e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } }, i, j, k; if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f; return f || g.resolveWith(k, c), g.promise() } }); var H; m.fn.ready = function (a) { return m.ready.promise().done(a), this }, m.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? m.readyWait++ : m.ready(!0) }, ready: function (a) { if (a === !0 ? !--m.readyWait : !m.isReady) { if (!y.body) return setTimeout(m.ready); m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready"))) } } }); function I() { y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J)) } function J() { (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready()) } m.ready.promise = function (b) { if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready); else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1); else { y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J); var c = !1; try { c = null == a.frameElement && y.documentElement } catch (d) { } c && c.doScroll && !function e() { if (!m.isReady) { try { c.doScroll("left") } catch (a) { return setTimeout(e, 50) } I(), m.ready() } }() } return H.promise(b) }; var K = "undefined", L; for (L in m(k)) break; k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () { var a, b, c, d; c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d)) }), function () { var a = y.createElement("div"); if (null == k.deleteExpando) { k.deleteExpando = !0; try { delete a.test } catch (b) { k.deleteExpando = !1 } } a = null }(), m.acceptData = function (a) { var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1; return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b }; var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g; function O(a, b, c) { if (void 0 === c && 1 === a.nodeType) { var d = "data-" + b.replace(N, "-$1").toLowerCase(); if (c = a.getAttribute(d), "string" == typeof c) { try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c } catch (e) { } m.data(a, b, c) } else c = void 0 } return c } function P(a) { var b; for (b in a) if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1; return !0 } function Q(a, b, d, e) {
		if (m.acceptData(a)) {
			var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
			if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
		}
	} function R(a, b, c) { if (m.acceptData(a)) { var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando; if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; while (e--) delete d[b[e]]; if (c ? !P(d) : !m.isEmptyObject(d)) return } (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null) } } } m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (a) { return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a) }, data: function (a, b, c) { return Q(a, b, c) }, removeData: function (a, b) { return R(a, b) }, _data: function (a, b, c) { return Q(a, b, c, !0) }, _removeData: function (a, b) { return R(a, b, !0) } }), m.fn.extend({ data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) { if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d]))); m._data(f, "parsedAttrs", !0) } return e } return "object" == typeof a ? this.each(function () { m.data(this, a) }) : arguments.length > 1 ? this.each(function () { m.data(this, a, b) }) : f ? O(f, a, m.data(f, a)) : void 0 }, removeData: function (a) { return this.each(function () { m.removeData(this, a) }) } }), m.extend({ queue: function (a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function (a, b) { b = b || "fx"; var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () { m.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return m._data(a, c) || m._data(a, c, { empty: m.Callbacks("once memory").add(function () { m._removeData(a, b + "queue"), m._removeData(a, c) }) }) } }), m.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = m.queue(this, a, b); m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { m.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) { var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } }); var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = ["Top", "Right", "Bottom", "Left"], U = function (a, b) { return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a) }, V = m.access = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === m.type(c)) { e = !0; for (h in c) m.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(m(a), c) })), b)) for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f }, W = /^(?:checkbox|radio)$/i; !function () { var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment(); if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () { k.noCloneEvent = !1 }), b.cloneNode(!0).click()), null == k.deleteExpando) { k.deleteExpando = !0; try { delete b.test } catch (d) { k.deleteExpando = !1 } } }(), function () { var b, c, d = y.createElement("div"); for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1); d = null }(); var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/; function ab() { return !0 } function bb() { return !1 } function cb() { try { return y.activeElement } catch (a) { } } m.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a); if (r) { c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) { return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(E) || [""], h = b.length; while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0); a = null } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a); if (r && (k = r.events)) { b = (b || "").match(E) || [""], j = b.length; while (j--) if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length; while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g)); i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]) } else for (o in k) m.event.remove(a, o + b[j], c, d, !0); m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events")) } }, trigger: function (b, c, d, e) { var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : []; if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) { if (!e && !k.noBubble && !m.isWindow(d)) { for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), l = h; l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a) } n = 0; while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault()); if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) { l = d[g], l && (d[g] = null), m.event.triggered = p; try { d[p]() } catch (r) { } m.event.triggered = void 0, l && (d[g] = l) } return b.result } }, dispatch: function (a) { a = m.event.fix(a); var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = m.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, g = 0; while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function (a, b) { var c, d, e, f, g = [], h = b.delegateCount, i = a.target; if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) { for (e = [], f = 0; h > f; f++)d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d); e.length && g.push({ elem: i, handlers: e }) } return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, fix: function (a) { if (a[m.expando]) return a; var b, c, d, e = a.type, f = a, g = this.fixHooks[e]; g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length; while (b--) c = d[b], a[c] = f[c]; return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) { var c, d, e, f = b.button, g = b.fromElement; return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== cb() && this.focus) try { return this.focus(), !1 } catch (a) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === cb() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function () { return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function (a) { return m.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }, simulate: function (a, b, c, d) { var e = m.extend(new m.Event, c, { type: a, isSimulated: !0, originalEvent: {} }); d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, m.removeEvent = y.removeEventListener ? function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function (a, b, c) { var d = "on" + b; a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c)) }, m.Event = function (a, b) { return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b) }, m.Event.prototype = { isDefaultPrevented: bb, isPropagationStopped: bb, isImmediatePropagationStopped: bb, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function () { var a = this.originalEvent; this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation() } }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) { m.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), k.submitBubbles || (m.event.special.submit = { setup: function () { return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) { var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0; c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) { a._submit_bubble = !0 }), m._data(c, "submitBubbles", !0)) }) }, postDispatch: function (a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0)) }, teardown: function () { return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit") } }), k.changeBubbles || (m.event.special.change = { setup: function () { return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), m.event.add(this, "click._change", function (a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0) })), !1) : void m.event.add(this, "beforeactivate._change", function (a) { var b = a.target; X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) { !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0) }), m._data(b, "changeBubbles", !0)) }) }, handle: function (a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function () { return m.event.remove(this, "._change"), !X.test(this.nodeName) } }), k.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { m.event.simulate(b, a.target, m.event.fix(a), !0) }; m.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = m._data(d, b); e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1) }, teardown: function () { var d = this.ownerDocument || this, e = m._data(d, b) - 1; e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b)) } } }), m.fn.extend({ on: function (a, b, c, d, e) { var f, g; if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (f in a) this.on(f, b, c, a[f], e); return this } if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb; else if (!d) return this; return 1 === e && (g = d, d = function (a) { return m().off(a), g.apply(this, arguments) }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () { m.event.add(this, a, d, c, b) }) }, one: function (a, b, c, d) { return this.on(a, b, c, d, 1) }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () { m.event.remove(this, a, c, b) }) }, trigger: function (a, b) { return this.each(function () { m.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; return c ? m.event.trigger(a, b, c, !0) : void 0 } }); function db(a) { var b = eb.split("|"), c = a.createDocumentFragment(); if (c.createElement) while (b.length) c.createElement(b.pop()); return c } var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fb = / jQuery\d+="(?:null|\d+)"/g, gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"), hb = /^\s+/, ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, jb = /<([\w:]+)/, kb = /<tbody/i, lb = /<|&#?\w+;/, mb = /<(?:script|style|link)/i, nb = /checked\s*(?:[^=]|=\s*.checked.)/i, ob = /^$|\/(?:java|ecma)script/i, pb = /^true\/(.*)/, qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rb = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, sb = db(y), tb = sb.appendChild(y.createElement("div")); rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td; function ub(a, b) { var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0; if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b)); return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f } function vb(a) { W.test(a.type) && (a.defaultChecked = a.checked) } function wb(a, b) { return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a } function xb(a) { return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a } function yb(a) { var b = pb.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a } function zb(a, b) { for (var c, d = 0; null != (c = a[d]); d++)m._data(c, "globalEval", !b || m._data(b[d], "globalEval")) } function Ab(a, b) { if (1 === b.nodeType && m.hasData(a)) { var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events; if (h) { delete g.handle, g.events = {}; for (c in h) for (d = 0, e = h[c].length; e > d; d++)m.event.add(b, c, h[c][d]) } g.data && (g.data = m.extend({}, g.data)) } } function Bb(a, b) { var c, d, e; if (1 === b.nodeType) { if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) { e = m._data(b); for (d in e.events) m.removeEvent(b, d, e.handle); b.removeAttribute(m.expando) } "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) } } m.extend({ clone: function (a, b, c) { var d, e, f, g, h, i = m.contains(a.ownerDocument, a); if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g)d[g] && Bb(e, d[g]); if (b) if (c) for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++)Ab(e, d[g]); else Ab(a, f); return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f }, buildFragment: function (a, b, c, d) { for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)if (f = a[q], f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f); else if (lb.test(f)) { h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0]; while (e--) h = h.lastChild; if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) { f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j) } m.merge(p, h.childNodes), h.textContent = ""; while (h.firstChild) h.removeChild(h.firstChild); h = o.lastChild } else p.push(b.createTextNode(f)); h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0; while (f = p[q++]) if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) { e = 0; while (f = h[e++]) ob.test(f.type || "") && c.push(f) } return h = null, o }, cleanData: function (a, b) { for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) { if (g.events) for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle); j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f)) } } }), m.fn.extend({ text: function (a) { return V(this, function (a) { return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a)) }, null, a, arguments.length) }, append: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = wb(this, a); b.appendChild(a) } }) }, prepend: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = wb(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, remove: function (a, b) { for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c)); return this }, empty: function () { for (var a, b = 0; null != (a = this[b]); b++) { 1 === a.nodeType && m.cleanData(ub(a, !1)); while (a.firstChild) a.removeChild(a.firstChild); a.options && m.nodeName(a, "select") && (a.options.length = 0) } return this }, clone: function (a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () { return m.clone(this, a, b) }) }, html: function (a) { return V(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0; if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) { a = a.replace(ib, "<$1></$2>"); try { for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a); b = 0 } catch (e) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () { var a = arguments[0]; return this.domManip(arguments, function (b) { a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() }, detach: function (a) { return this.remove(a, !0) }, domManip: function (a, b) { a = e.apply([], a); var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p); if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function (c) { var d = n.eq(c); q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b) }); if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) { for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++)d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j); if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++)d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, ""))); i = c = null } return this } }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { m.fn[a] = function (a) { for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get()); return this.pushStack(e) } }); var Cb, Db = {}; function Eb(b, c) { var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display"); return e.detach(), f } function Fb(a) { var b = y, c = Db[a]; return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c } !function () { var a; k.shrinkWrapBlocks = function () { if (null != a) return a; a = !1; var b, c, d; return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0 } }(); var Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ib, Jb, Kb = /^(top|right|bottom|left)$/; a.getComputedStyle ? (Ib = function (a) { return a.ownerDocument.defaultView.getComputedStyle(a, null) }, Jb = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "" }) : y.documentElement.currentStyle && (Ib = function (a) { return a.currentStyle }, Jb = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" }); function Lb(a, b) { return { get: function () { var c = a(); if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments) } } } !function () { var b, c, d, e, f, g, h; if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) { c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, { reliableHiddenOffsets: function () { return null == g && i(), g }, boxSizingReliable: function () { return null == f && i(), f }, pixelPosition: function () { return null == e && i(), e }, reliableMarginRight: function () { return null == h && i(), h } }); function i() { var b, c, d, i; c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d)) } } }(), m.swap = function (a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e }; var Mb = /alpha\([^)]*\)/i, Nb = /opacity\s*=\s*([^)]*)/, Ob = /^(none|table(?!-c[ea]).+)/, Pb = new RegExp("^(" + S + ")(.*)$", "i"), Qb = new RegExp("^([+-])=(" + S + ")", "i"), Rb = { position: "absolute", visibility: "hidden", display: "block" }, Sb = { letterSpacing: "0", fontWeight: "400" }, Tb = ["Webkit", "O", "Moz", "ms"]; function Ub(a, b) { if (b in a) return b; var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Tb.length; while (e--) if (b = Tb[e] + c, b in a) return b; return d } function Vb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display")))); for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a } function Wb(a, b, c) { var d = Pb.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b } function Xb(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e))); return g } function Yb(a, b, c) { var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ib(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f); if (0 >= e || null == e) { if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e; d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px" } m.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = Jb(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": k.cssFloat ? "cssFloat" : "styleFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = m.camelCase(b), i = a.style; if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]; if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = c } catch (j) { } } }, css: function (a, b, c, d) { var e, f, g, h = m.camelCase(b); return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f } }), m.each(["height", "width"], function (a, b) { m.cssHooks[b] = { get: function (a, c, d) { return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function () { return Yb(a, b, d) }) : Yb(a, b, d) : void 0 }, set: function (a, c, d) { var e = d && Ib(a); return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0) } } }), k.opacity || (m.cssHooks.opacity = { get: function (a, b) { return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" }, set: function (a, b) { var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || ""; c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e) } }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) { return b ? m.swap(a, { display: "inline-block" }, Jb, [a, "marginRight"]) : void 0 }), m.each({ margin: "", padding: "", border: "Width" }, function (a, b) { m.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + T[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Gb.test(a) || (m.cssHooks[a + b].set = Wb) }), m.fn.extend({ css: function (a, b) { return V(this, function (a, b, c) { var d, e, f = {}, g = 0; if (m.isArray(b)) { for (d = Ib(a), e = b.length; e > g; g++)f[b[g]] = m.css(a, b[g], !1, d); return f } return void 0 !== c ? m.style(a, b, c) : m.css(a, b) }, a, b, arguments.length > 1) }, show: function () { return Vb(this, !0) }, hide: function () { return Vb(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { U(this) ? m(this).show() : m(this).hide() }) } }); function Zb(a, b, c, d, e) { return new Zb.prototype.init(a, b, c, d, e) } m.Tween = Zb, Zb.prototype = {
		constructor: Zb, init: function (a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
		}, cur: function () { var a = Zb.propHooks[this.prop]; return a && a.get ? a.get(this) : Zb.propHooks._default.get(this) }, run: function (a) { var b, c = Zb.propHooks[this.prop]; return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this }
	}, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = { _default: { get: function (a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function (a) { m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, m.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 } }, m.fx = Zb.prototype.init, m.fx.step = {}; var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cc = /queueHooks$/, dc = [ic], ec = { "*": [function (a, b) { var c = this.createTween(a, b), d = c.cur(), e = bc.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)), h = 1, i = 20; if (g && g[3] !== f) { f = f || g[3], e = e || [], g = +d || 1; do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i) } return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c }] }; function fc() { return setTimeout(function () { $b = void 0 }), $b = m.now() } function gc(a, b) { var c, d = { height: a }, e = 0; for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = T[e], d["margin" + c] = d["padding" + c] = a; return b && (d.opacity = d.width = a), d } function hc(a, b, c) { for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a)) return d } function ic(a, b, c) { var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow"); c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () { h.unqueued || i() }), h.unqueued++, n.always(function () { n.always(function () { h.unqueued--, m.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] })); for (d in b) if (e = b[d], ac.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) { if ("show" !== e || !r || void 0 === r[d]) continue; q = !0 } o[d] = r && r[d] || m.style(a, d) } else j = void 0; if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j); else { r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () { m(a).hide() }), n.done(function () { var b; m._removeData(a, "fxshow"); for (b in o) m.style(a, b, o[b]) }); for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } } function jc(a, b) { var c, d, e, f, g; for (c in a) if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function kc(a, b, c) { var d, e, f = 0, g = dc.length, h = m.Deferred().always(function () { delete i.elem }), i = function () { if (e) return !1; for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) }, j = h.promise({ elem: a, props: m.extend({}, b), opts: m.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: $b || fc(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++)j.tweens[c].run(1); return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this } }), k = j.props; for (jc(k, j.opts.specialEasing); g > f; f++)if (d = dc[f].call(j, a, k, j.opts)) return d; return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) } m.Animation = m.extend(kc, { tweener: function (a, b) { m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++)c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b) }, prefilter: function (a, b) { b ? dc.unshift(a) : dc.push(a) } }), m.speed = function (a, b, c) { var d = a && "object" == typeof a ? m.extend({}, a) : { complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b }; return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () { m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue) }, d }, m.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(U).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () { var b = kc(this, m.extend({}, a), f); (e || m._data(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this); if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]); for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); (b || !c) && m.dequeue(this, a) }) }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0; for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) } }), m.each(["toggle", "show", "hide"], function (a, b) { var c = m.fn[b]; m.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e) } }), m.each({ slideDown: gc("show"), slideUp: gc("hide"), slideToggle: gc("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { m.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), m.timers = [], m.fx.tick = function () { var a, b = m.timers, c = 0; for ($b = m.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1); b.length || m.fx.stop(), $b = void 0 }, m.fx.timer = function (a) { m.timers.push(a), a() ? m.fx.start() : m.timers.pop() }, m.fx.interval = 13, m.fx.start = function () { _b || (_b = setInterval(m.fx.tick, m.fx.interval)) }, m.fx.stop = function () { clearInterval(_b), _b = null }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function (a, b) { return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) { var d = setTimeout(b, a); c.stop = function () { clearTimeout(d) } }) }, function () { var a, b, c, d, e; b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value }(); var lc = /\r/g; m.fn.extend({ val: function (a) { var b, c, d, e = this[0]; { if (arguments.length) return d = m.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) { return null == a ? "" : a + "" })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c) } } }), m.extend({ valHooks: { option: { get: function (a) { var b = m.find.attr(a, "value"); return null != b ? b : m.trim(m.text(a)) } }, select: { get: function (a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) { if (b = m(c).val(), f) return b; g.push(b) } return g }, set: function (a, b) { var c, d, e = a.options, f = m.makeArray(b), g = e.length; while (g--) if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1; return c || (a.selectedIndex = -1), e } } } }), m.each(["radio", "checkbox"], function () { m.valHooks[this] = { set: function (a, b) { return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0 } }, k.checkOn || (m.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input; m.fn.extend({ attr: function (a, b) { return V(this, m.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { m.removeAttr(this, a) }) } }), m.extend({ attr: function (a, b, c) { var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b)) }, removeAttr: function (a, b) { var c, d, e = 0, f = b && b.match(E); if (f && 1 === a.nodeType) while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d) }, attrHooks: { type: { set: function (a, b) { if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } } }), nc = { set: function (a, b, c) { return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c } }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = oc[b] || m.find.attr; oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) { var e, f; return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e } : function (a, b, c) { return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null } }), rc && qc || (m.attrHooks.value = { set: function (a, b, c) { return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c) } }), qc || (mc = { set: function (a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, oc.id = oc.name = oc.coords = function (a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, m.valHooks.button = { get: function (a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: mc.set }, m.attrHooks.contenteditable = { set: function (a, b, c) { mc.set(a, "" === b ? !1 : b, c) } }, m.each(["width", "height"], function (a, b) { m.attrHooks[b] = { set: function (a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), k.style || (m.attrHooks.style = { get: function (a) { return a.style.cssText || void 0 }, set: function (a, b) { return a.style.cssText = b + "" } }); var sc = /^(?:input|select|textarea|button|object)$/i, tc = /^(?:a|area)$/i; m.fn.extend({ prop: function (a, b) { return V(this, m.prop, a, b, arguments.length > 1) }, removeProp: function (a) { return a = m.propFix[a] || a, this.each(function () { try { this[a] = void 0, delete this[a] } catch (b) { } }) } }), m.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function (a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function (a) { var b = m.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1 } } } }), k.hrefNormalized || m.each(["href", "src"], function (a, b) { m.propHooks[b] = { get: function (a) { return a.getAttribute(b, 4) } } }), k.optSelected || (m.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { m.propFix[this.toLowerCase()] = this }), k.enctype || (m.propFix.enctype = "encoding"); var uc = /[\t\r\n\f]/g; m.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a; if (m.isFunction(a)) return this.each(function (b) { m(this).addClass(a.call(this, b, this.className)) }); if (j) for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) { f = 0; while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " "); g = m.trim(d), c.className !== g && (c.className = g) } return this }, removeClass: function (a) { var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a; if (m.isFunction(a)) return this.each(function (b) { m(this).removeClass(a.call(this, b, this.className)) }); if (j) for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) { f = 0; while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " "); g = a ? m.trim(d) : "", c.className !== g && (c.className = g) } return this }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) { m(this).toggleClass(a.call(this, c, this.className, b), b) } : function () { if ("string" === c) { var b, d = 0, e = m(this), f = a.match(E) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "") }) }, hasClass: function (a) { for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0; return !1 } }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) { m.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), m.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }); var vc = m.now(), wc = /\?/, xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g; m.parseJSON = function (b) { if (a.JSON && a.JSON.parse) return a.JSON.parse(b + ""); var c, d = null, e = m.trim(b + ""); return e && !m.trim(e.replace(xc, function (a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : m.error("Invalid JSON: " + b) }, m.parseXML = function (b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c }; var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = "*/".concat("*"); try { zc = location.href } catch (Kc) { zc = y.createElement("a"), zc.href = "", zc = zc.href } yc = Gc.exec(zc.toLowerCase()) || []; function Lc(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(E) || []; if (m.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } } function Mc(a, b, c, d) { var e = {}, f = a === Ic; function g(h) { var i; return e[h] = !0, m.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") } function Nc(a, b) { var c, d, e = m.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && m.extend(!0, a, c), a } function Oc(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type")); if (e) for (g in h) if (h[g] && h[g].test(e)) { i.unshift(g); break } if (i[0] in c) f = i[0]; else { for (g in c) { if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break } d || (d = g) } f = f || d } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 } function Pc(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a["throws"]) b = g(b); else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } } m.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: zc, type: "GET", isLocal: Dc.test(yc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Jc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a) }, ajaxPrefilter: Lc(Hc), ajaxTransport: Lc(Ic), ajax: function (a, b) { "object" == typeof a && (b = a, a = void 0), b = b || {}; var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = { readyState: 0, getResponseHeader: function (a) { var b; if (2 === t) { if (!j) { j = {}; while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2] } b = j[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return 2 === t ? f : null }, setRequestHeader: function (a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this }, overrideMimeType: function (a) { return t || (k.mimeType = a), this }, statusCode: function (a) { var b; if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]); return this }, abort: function (a) { var b = a || u; return i && i.abort(b), x(0, b), this } }; if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v; h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]); for (d in k.headers) v.setRequestHeader(d, k.headers[d]); if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort(); u = "abort"; for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]); if (i = Mc(Ic, k, b, v)) { v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () { v.abort("timeout") }, k.timeout)); try { t = 1, i.send(r, x) } catch (w) { if (!(2 > t)) throw w; x(-1, w) } } else x(-1, "No Transport"); function x(a, b, c, d) { var j, r, s, u, w, x = b; 2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop"))) } return v }, getJSON: function (a, b, c) { return m.get(a, b, c, "json") }, getScript: function (a, b) { return m.get(a, void 0, b, "script") } }), m.each(["get", "post"], function (a, b) { m[b] = function (a, c, d, e) { return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { m.fn[b] = function (a) { return this.on(b, a) } }), m._evalUrl = function (a) { return m.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, m.fn.extend({ wrapAll: function (a) { if (m.isFunction(a)) return this.each(function (b) { m(this).wrapAll(a.call(this, b)) }); if (this[0]) { var b = m(a, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild; return a }).append(this) } return this }, wrapInner: function (a) { return this.each(m.isFunction(a) ? function (b) { m(this).wrapInner(a.call(this, b)) } : function () { var b = m(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = m.isFunction(a); return this.each(function (c) { m(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function () { return this.parent().each(function () { m.nodeName(this, "body") || m(this).replaceWith(this.childNodes) }).end() } }), m.expr.filters.hidden = function (a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display")) }, m.expr.filters.visible = function (a) { return !m.expr.filters.hidden(a) }; var Qc = /%20/g, Rc = /\[\]$/, Sc = /\r?\n/g, Tc = /^(?:submit|button|image|reset|file)$/i, Uc = /^(?:input|select|textarea|keygen)/i; function Vc(a, b, c, d) { var e; if (m.isArray(b)) m.each(b, function (b, e) { c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) }); else if (c || "object" !== m.type(b)) d(a, b); else for (e in b) Vc(a + "[" + e + "]", b[e], c, d) } m.param = function (a, b) { var c, d = [], e = function (a, b) { b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () { e(this.name, this.value) }); else for (c in a) Vc(c, a[c], b, e); return d.join("&").replace(Qc, "+") }, m.fn.extend({ serialize: function () { return m.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var a = m.prop(this, "elements"); return a ? m.makeArray(a) : this }).filter(function () { var a = this.type; return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a)) }).map(function (a, b) { var c = m(this).val(); return null == c ? null : m.isArray(c) ? m.map(c, function (a) { return { name: b.name, value: a.replace(Sc, "\r\n") } }) : { name: b.name, value: c.replace(Sc, "\r\n") } }).get() } }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c() } : Zc; var Wc = 0, Xc = {}, Yc = m.ajaxSettings.xhr(); a.ActiveXObject && m(a).on("unload", function () { for (var a in Xc) Xc[a](void 0, !0) }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) { if (!a.crossDomain || k.cors) { var b; return { send: function (c, d) { var e, f = a.xhr(), g = ++Wc; if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e]; a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"); for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + ""); f.send(a.hasContent && a.data || null), b = function (c, e) { var h, i, j; if (b && (e || 4 === f.readyState)) if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort(); else { j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText); try { i = f.statusText } catch (k) { i = "" } h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404 } j && d(h, i, j, f.getAllResponseHeaders()) }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b() }, abort: function () { b && b(void 0, !0) } } } }); function Zc() { try { return new a.XMLHttpRequest } catch (b) { } } function $c() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) { } } m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (a) { return m.globalEval(a), a } } }), m.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), m.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, c = y.head || m("head")[0] || y.documentElement; return { send: function (d, e) { b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) { (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success")) }, c.insertBefore(b, c.firstChild) }, abort: function () { b && b.onload(void 0, !0) } } } }); var _c = [], ad = /(=)\?(?=&|$)|\?\?/; m.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = _c.pop() || m.expando + "_" + vc++; return this[a] = !0, a } }), m.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || m.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments }, d.always(function () { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), m.parseHTML = function (a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || y; var d = u.exec(a), e = !c && []; return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes)) }; var bd = m.fn.load; m.fn.load = function (a, b, c) { if ("string" != typeof a && bd) return bd.apply(this, arguments); var d, e, f, g = this, h = a.indexOf(" "); return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({ url: a, type: f, dataType: "html", data: b }).done(function (a) { e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a) }).complete(c && function (a, b) { g.each(c, e || [a.responseText, b, a]) }), this }, m.expr.filters.animated = function (a) { return m.grep(m.timers, function (b) { return a === b.elem }).length }; var cd = a.document.documentElement; function dd(a) { return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 } m.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n) } }, m.fn.extend({ offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { m.offset.setOffset(this, a, b) }); var b, c, d = { top: 0, left: 0 }, e = this[0], f = e && e.ownerDocument; if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d }, position: function () { if (this[0]) { var a, b, c = { top: 0, left: 0 }, d = this[0]; return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent || cd; while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent; return a || cd }) } }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = /Y/.test(b); m.fn[a] = function (d) { return V(this, function (a, d, e) { var f = dd(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) } }), m.each(["top", "left"], function (a, b) { m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) { return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0 }) }), m.each({ Height: "height", Width: "width" }, function (a, b) { m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { m.fn[d] = function (d, e) { var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border"); return V(this, function (b, c, d) { var e; return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), m.fn.size = function () { return this.length }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () { return m }); var ed = a.jQuery, fd = a.$; return m.noConflict = function (b) { return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m }, typeof b === K && (a.jQuery = a.$ = m), m
});
/*! google.fastbutton.js*/
(function () { function b(f, e, g, c) { if (f.addEventListener) { f.addEventListener(e, g, c); return { destroy: function () { f.removeEventListener(e, g, c) } } } else { var d = function (h) { g.handleEvent(window.event, g) }; f.attachEvent("on" + e, d); return { destroy: function () { f.detachEvent("on" + e, d) } } } } var a = "ontouchstart" in window; this.FastButton = function (d, e, c) { this.events = []; this.touchEvents = []; this.element = d; this.handler = e; this.useCapture = c; if (a) { this.events.push(b(d, "touchstart", this, this.useCapture)) } this.events.push(b(d, "click", this, this.useCapture)) }; this.FastButton.prototype.destroy = function () { for (i = this.events.length - 1; i >= 0; i -= 1) { this.events[i].destroy() } this.events = this.touchEvents = this.element = this.handler = this.fastButton = null }; this.FastButton.prototype.handleEvent = function (c) { switch (c.type) { case "touchstart": this.onTouchStart(c); break; case "touchmove": this.onTouchMove(c); break; case "touchend": this.onClick(c); break; case "click": this.onClick(c); break } }; this.FastButton.prototype.onTouchStart = function (c) { c.stopPropagation ? c.stopPropagation() : (c.cancelBubble = true); this.touchEvents.push(b(this.element, "touchend", this, this.useCapture)); this.touchEvents.push(b(document.body, "touchmove", this, this.useCapture)); this.startX = c.touches[0].clientX; this.startY = c.touches[0].clientY }; this.FastButton.prototype.onTouchMove = function (c) { if (Math.abs(c.touches[0].clientX - this.startX) > 10 || Math.abs(c.touches[0].clientY - this.startY) > 10) { this.reset() } }; this.FastButton.prototype.onClick = function (d) { d.stopPropagation ? d.stopPropagation() : (d.cancelBubble = true); this.reset(); var c = this.handler.call(this.element, d); if (d.type == "touchend") { clickbuster.preventGhostClick(this.startX, this.startY) } return c }; this.FastButton.prototype.reset = function () { for (i = this.touchEvents.length - 1; i >= 0; i -= 1) { this.touchEvents[i].destroy() } this.touchEvents = [] }; this.clickbuster = function () { }; this.clickbuster.preventGhostClick = function (c, d) { clickbuster.coordinates.push(c, d); window.setTimeout(clickbuster.pop, 2500) }; this.clickbuster.pop = function () { clickbuster.coordinates.splice(0, 2) }; this.clickbuster.onClick = function (e) { for (var d = 0; d < clickbuster.coordinates.length; d += 2) { var c = clickbuster.coordinates[d]; var f = clickbuster.coordinates[d + 1]; if (Math.abs(e.clientX - c) < 25 && Math.abs(e.clientY - f) < 25) { e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true); e.preventDefault ? e.preventDefault() : (e.returnValue = false) } } }; if (a) { document.addEventListener("click", clickbuster.onClick, true); clickbuster.coordinates = [] } })(this);
/*! jquery.fastbutton.js*/
(function (a) { a.event.special.fastClick = { setup: function () { a(this).data("fastClick", new FastButton(this, a.event.special.fastClick.handler)) }, teardown: function () { a(this).data("fastClick").destroy(); a(this).removeData("fastClick") }, handler: function (b) { b = a.event.fix(b); b.type = "fastClick"; a.event.dispatch.apply(this, arguments) } }; a.fn.fastClick = function (b) { return a(this).each(function () { return b ? a(this).bind("fastClick", b) : a(this).trigger("fastClick") }) } }(jQuery));
/* cryptojs */
(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory();
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define([], factory);
	}
	else {
		// Global (browser)
		root.CryptoJS = factory();
	}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
		/**
		 * CryptoJS namespace.
		 */
		var C = {};

		/**
		 * Library namespace.
		 */
		var C_lib = C.lib = {};

		/**
		 * Base object for prototypal inheritance.
		 */
		var Base = C_lib.Base = (function () {
			function F() { }

			return {
				/**
				 * Creates a new object that inherits from this object.
				 *
				 * @param {Object} overrides Properties to copy into the new object.
				 *
				 * @return {Object} The new object.
				 *
				 * @static
				 *
				 * @example
				 *
				 *     var MyType = CryptoJS.lib.Base.extend({
				 *         field: 'value',
				 *
				 *         method: function () {
				 *         }
				 *     });
				 */
				extend: function (overrides) {
					// Spawn
					F.prototype = this;
					var subtype = new F();

					// Augment
					if (overrides) {
						subtype.mixIn(overrides);
					}

					// Create default initializer
					if (!subtype.hasOwnProperty('init')) {
						subtype.init = function () {
							subtype.$super.init.apply(this, arguments);
						};
					}

					// Initializer's prototype is the subtype object
					subtype.init.prototype = subtype;

					// Reference supertype
					subtype.$super = this;

					return subtype;
				},

				/**
				 * Extends this object and runs the init method.
				 * Arguments to create() will be passed to init().
				 *
				 * @return {Object} The new object.
				 *
				 * @static
				 *
				 * @example
				 *
				 *     var instance = MyType.create();
				 */
				create: function () {
					var instance = this.extend();
					instance.init.apply(instance, arguments);

					return instance;
				},

				/**
				 * Initializes a newly created object.
				 * Override this method to add some logic when your objects are created.
				 *
				 * @example
				 *
				 *     var MyType = CryptoJS.lib.Base.extend({
				 *         init: function () {
				 *             // ...
				 *         }
				 *     });
				 */
				init: function () {
				},

				/**
				 * Copies properties into this object.
				 *
				 * @param {Object} properties The properties to mix in.
				 *
				 * @example
				 *
				 *     MyType.mixIn({
				 *         field: 'value'
				 *     });
				 */
				mixIn: function (properties) {
					for (var propertyName in properties) {
						if (properties.hasOwnProperty(propertyName)) {
							this[propertyName] = properties[propertyName];
						}
					}

					// IE won't copy toString using the loop above
					if (properties.hasOwnProperty('toString')) {
						this.toString = properties.toString;
					}
				},

				/**
				 * Creates a copy of this object.
				 *
				 * @return {Object} The clone.
				 *
				 * @example
				 *
				 *     var clone = instance.clone();
				 */
				clone: function () {
					return this.init.prototype.extend(this);
				}
			};
		}());

		/**
		 * An array of 32-bit words.
		 *
		 * @property {Array} words The array of 32-bit words.
		 * @property {number} sigBytes The number of significant bytes in this word array.
		 */
		var WordArray = C_lib.WordArray = Base.extend({
			/**
			 * Initializes a newly created word array.
			 *
			 * @param {Array} words (Optional) An array of 32-bit words.
			 * @param {number} sigBytes (Optional) The number of significant bytes in the words.
			 *
			 * @example
			 *
			 *     var wordArray = CryptoJS.lib.WordArray.create();
			 *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
			 *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
			 */
			init: function (words, sigBytes) {
				words = this.words = words || [];

				if (sigBytes != undefined) {
					this.sigBytes = sigBytes;
				} else {
					this.sigBytes = words.length * 4;
				}
			},

			/**
			 * Converts this word array to a string.
			 *
			 * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
			 *
			 * @return {string} The stringified word array.
			 *
			 * @example
			 *
			 *     var string = wordArray + '';
			 *     var string = wordArray.toString();
			 *     var string = wordArray.toString(CryptoJS.enc.Utf8);
			 */
			toString: function (encoder) {
				return (encoder || Hex).stringify(this);
			},

			/**
			 * Concatenates a word array to this word array.
			 *
			 * @param {WordArray} wordArray The word array to append.
			 *
			 * @return {WordArray} This word array.
			 *
			 * @example
			 *
			 *     wordArray1.concat(wordArray2);
			 */
			concat: function (wordArray) {
				// Shortcuts
				var thisWords = this.words;
				var thatWords = wordArray.words;
				var thisSigBytes = this.sigBytes;
				var thatSigBytes = wordArray.sigBytes;

				// Clamp excess bits
				this.clamp();

				// Concat
				if (thisSigBytes % 4) {
					// Copy one byte at a time
					for (var i = 0; i < thatSigBytes; i++) {
						var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
						thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
					}
				} else {
					// Copy one word at a time
					for (var i = 0; i < thatSigBytes; i += 4) {
						thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
					}
				}
				this.sigBytes += thatSigBytes;

				// Chainable
				return this;
			},

			/**
			 * Removes insignificant bits.
			 *
			 * @example
			 *
			 *     wordArray.clamp();
			 */
			clamp: function () {
				// Shortcuts
				var words = this.words;
				var sigBytes = this.sigBytes;

				// Clamp
				words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
				words.length = Math.ceil(sigBytes / 4);
			},

			/**
			 * Creates a copy of this word array.
			 *
			 * @return {WordArray} The clone.
			 *
			 * @example
			 *
			 *     var clone = wordArray.clone();
			 */
			clone: function () {
				var clone = Base.clone.call(this);
				clone.words = this.words.slice(0);
				return clone;
			},


			/**
			 * Creates a word array filled with random bytes.
			 *
			 * @param {number} nBytes The number of random bytes to generate.
			 *
			 * @return {WordArray} The random word array.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var wordArray = CryptoJS.lib.WordArray.random(16);
			 */
			random: function (nBytes) {
				var words = [];

				var r = (function (m_w) {
					var m_w = m_w;
					var m_z = 0x3ade68b1;
					var mask = 0xffffffff;

					return function () {
						m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
						m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
						var result = ((m_z << 0x10) + m_w) & mask;
						result /= 0x100000000;
						result += 0.5;
						return result * (Math.random() > .5 ? 1 : -1);
					}
				});

				for (var i = 0, rcache; i < nBytes; i += 4) {
					var _r = r((rcache || Math.random()) * 0x100000000);
					rcache = _r() * 0x3ade67b7;
					words.push((_r() * 0x100000000) | 0);
				}
				return new WordArray.init(words, nBytes);
			}
		});

		/**
		 * Encoder namespace.
		 */
		var C_enc = C.enc = {};

		/**
		 * Hex encoding strategy.
		 */
		var Hex = C_enc.Hex = {
			/**
			 * Converts a word array to a hex string.
			 *
			 * @param {WordArray} wordArray The word array.
			 *
			 * @return {string} The hex string.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
			 */
			stringify: function (wordArray) {
				// Shortcuts
				var words = wordArray.words;
				var sigBytes = wordArray.sigBytes;

				// Convert
				var hexChars = [];
				for (var i = 0; i < sigBytes; i++) {
					var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
					hexChars.push((bite >>> 4).toString(16));
					hexChars.push((bite & 0x0f).toString(16));
				}

				return hexChars.join('');
			},

			/**
			 * Converts a hex string to a word array.
			 *
			 * @param {string} hexStr The hex string.
			 *
			 * @return {WordArray} The word array.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
			 */
			parse: function (hexStr) {
				// Shortcut
				var hexStrLength = hexStr.length;

				// Convert
				var words = [];
				for (var i = 0; i < hexStrLength; i += 2) {
					words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
				}

				return new WordArray.init(words, hexStrLength / 2);
			}
		};

		/**
		 * Latin1 encoding strategy.
		 */
		var Latin1 = C_enc.Latin1 = {
			/**
			 * Converts a word array to a Latin1 string.
			 *
			 * @param {WordArray} wordArray The word array.
			 *
			 * @return {string} The Latin1 string.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
			 */
			stringify: function (wordArray) {
				// Shortcuts
				var words = wordArray.words;
				var sigBytes = wordArray.sigBytes;

				// Convert
				var latin1Chars = [];
				for (var i = 0; i < sigBytes; i++) {
					var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
					latin1Chars.push(String.fromCharCode(bite));
				}

				return latin1Chars.join('');
			},

			/**
			 * Converts a Latin1 string to a word array.
			 *
			 * @param {string} latin1Str The Latin1 string.
			 *
			 * @return {WordArray} The word array.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
			 */
			parse: function (latin1Str) {
				// Shortcut
				var latin1StrLength = latin1Str.length;

				// Convert
				var words = [];
				for (var i = 0; i < latin1StrLength; i++) {
					words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
				}

				return new WordArray.init(words, latin1StrLength);
			}
		};

		/**
		 * UTF-8 encoding strategy.
		 */
		var Utf8 = C_enc.Utf8 = {
			/**
			 * Converts a word array to a UTF-8 string.
			 *
			 * @param {WordArray} wordArray The word array.
			 *
			 * @return {string} The UTF-8 string.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
			 */
			stringify: function (wordArray) {
				try {
					return decodeURIComponent(escape(Latin1.stringify(wordArray)));
				} catch (e) {
					throw new Error('Malformed UTF-8 data');
				}
			},

			/**
			 * Converts a UTF-8 string to a word array.
			 *
			 * @param {string} utf8Str The UTF-8 string.
			 *
			 * @return {WordArray} The word array.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
			 */
			parse: function (utf8Str) {
				return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
			}
		};

		/**
		 * Abstract buffered block algorithm template.
		 *
		 * The property blockSize must be implemented in a concrete subtype.
		 *
		 * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
		 */
		var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
			/**
			 * Resets this block algorithm's data buffer to its initial state.
			 *
			 * @example
			 *
			 *     bufferedBlockAlgorithm.reset();
			 */
			reset: function () {
				// Initial values
				this._data = new WordArray.init();
				this._nDataBytes = 0;
			},

			/**
			 * Adds new data to this block algorithm's buffer.
			 *
			 * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
			 *
			 * @example
			 *
			 *     bufferedBlockAlgorithm._append('data');
			 *     bufferedBlockAlgorithm._append(wordArray);
			 */
			_append: function (data) {
				// Convert string to WordArray, else assume WordArray already
				if (typeof data == 'string') {
					data = Utf8.parse(data);
				}

				// Append
				this._data.concat(data);
				this._nDataBytes += data.sigBytes;
			},

			/**
			 * Processes available data blocks.
			 *
			 * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
			 *
			 * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
			 *
			 * @return {WordArray} The processed data.
			 *
			 * @example
			 *
			 *     var processedData = bufferedBlockAlgorithm._process();
			 *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
			 */
			_process: function (doFlush) {
				// Shortcuts
				var data = this._data;
				var dataWords = data.words;
				var dataSigBytes = data.sigBytes;
				var blockSize = this.blockSize;
				var blockSizeBytes = blockSize * 4;

				// Count blocks ready
				var nBlocksReady = dataSigBytes / blockSizeBytes;
				if (doFlush) {
					// Round up to include partial blocks
					nBlocksReady = Math.ceil(nBlocksReady);
				} else {
					// Round down to include only full blocks,
					// less the number of blocks that must remain in the buffer
					nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
				}

				// Count words ready
				var nWordsReady = nBlocksReady * blockSize;

				// Count bytes ready
				var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

				// Process blocks
				if (nWordsReady) {
					for (var offset = 0; offset < nWordsReady; offset += blockSize) {
						// Perform concrete-algorithm logic
						this._doProcessBlock(dataWords, offset);
					}

					// Remove processed words
					var processedWords = dataWords.splice(0, nWordsReady);
					data.sigBytes -= nBytesReady;
				}

				// Return processed words
				return new WordArray.init(processedWords, nBytesReady);
			},

			/**
			 * Creates a copy of this object.
			 *
			 * @return {Object} The clone.
			 *
			 * @example
			 *
			 *     var clone = bufferedBlockAlgorithm.clone();
			 */
			clone: function () {
				var clone = Base.clone.call(this);
				clone._data = this._data.clone();

				return clone;
			},

			_minBufferSize: 0
		});

		/**
		 * Abstract hasher template.
		 *
		 * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
		 */
		var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
			/**
			 * Configuration options.
			 */
			cfg: Base.extend(),

			/**
			 * Initializes a newly created hasher.
			 *
			 * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
			 *
			 * @example
			 *
			 *     var hasher = CryptoJS.algo.SHA256.create();
			 */
			init: function (cfg) {
				// Apply config defaults
				this.cfg = this.cfg.extend(cfg);

				// Set initial values
				this.reset();
			},

			/**
			 * Resets this hasher to its initial state.
			 *
			 * @example
			 *
			 *     hasher.reset();
			 */
			reset: function () {
				// Reset data buffer
				BufferedBlockAlgorithm.reset.call(this);

				// Perform concrete-hasher logic
				this._doReset();
			},

			/**
			 * Updates this hasher with a message.
			 *
			 * @param {WordArray|string} messageUpdate The message to append.
			 *
			 * @return {Hasher} This hasher.
			 *
			 * @example
			 *
			 *     hasher.update('message');
			 *     hasher.update(wordArray);
			 */
			update: function (messageUpdate) {
				// Append
				this._append(messageUpdate);

				// Update the hash
				this._process();

				// Chainable
				return this;
			},

			/**
			 * Finalizes the hash computation.
			 * Note that the finalize operation is effectively a destructive, read-once operation.
			 *
			 * @param {WordArray|string} messageUpdate (Optional) A final message update.
			 *
			 * @return {WordArray} The hash.
			 *
			 * @example
			 *
			 *     var hash = hasher.finalize();
			 *     var hash = hasher.finalize('message');
			 *     var hash = hasher.finalize(wordArray);
			 */
			finalize: function (messageUpdate) {
				// Final message update
				if (messageUpdate) {
					this._append(messageUpdate);
				}

				// Perform concrete-hasher logic
				var hash = this._doFinalize();

				return hash;
			},

			blockSize: 512 / 32,

			/**
			 * Creates a shortcut function to a hasher's object interface.
			 *
			 * @param {Hasher} hasher The hasher to create a helper for.
			 *
			 * @return {Function} The shortcut function.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
			 */
			_createHelper: function (hasher) {
				return function (message, cfg) {
					return new hasher.init(cfg).finalize(message);
				};
			},

			/**
			 * Creates a shortcut function to the HMAC's object interface.
			 *
			 * @param {Hasher} hasher The hasher to use in this HMAC helper.
			 *
			 * @return {Function} The shortcut function.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
			 */
			_createHmacHelper: function (hasher) {
				return function (message, key) {
					return new C_algo.HMAC.init(hasher, key).finalize(message);
				};
			}
		});

		/**
		 * Algorithm namespace.
		 */
		var C_algo = C.algo = {};

		return C;
	}(Math));


	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var C_enc = C.enc;

		/**
		 * Base64 encoding strategy.
		 */
		var Base64 = C_enc.Base64 = {
			/**
			 * Converts a word array to a Base64 string.
			 *
			 * @param {WordArray} wordArray The word array.
			 *
			 * @return {string} The Base64 string.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
			 */
			stringify: function (wordArray) {
				// Shortcuts
				var words = wordArray.words;
				var sigBytes = wordArray.sigBytes;
				var map = this._map;

				// Clamp excess bits
				wordArray.clamp();

				// Convert
				var base64Chars = [];
				for (var i = 0; i < sigBytes; i += 3) {
					var byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
					var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
					var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

					var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

					for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
						base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
					}
				}

				// Add padding
				var paddingChar = map.charAt(64);
				if (paddingChar) {
					while (base64Chars.length % 4) {
						base64Chars.push(paddingChar);
					}
				}

				return base64Chars.join('');
			},

			/**
			 * Converts a Base64 string to a word array.
			 *
			 * @param {string} base64Str The Base64 string.
			 *
			 * @return {WordArray} The word array.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
			 */
			parse: function (base64Str) {
				// Shortcuts
				var base64StrLength = base64Str.length;
				var map = this._map;

				// Ignore padding
				var paddingChar = map.charAt(64);
				if (paddingChar) {
					var paddingIndex = base64Str.indexOf(paddingChar);
					if (paddingIndex != -1) {
						base64StrLength = paddingIndex;
					}
				}

				// Convert
				var words = [];
				var nBytes = 0;
				for (var i = 0; i < base64StrLength; i++) {
					if (i % 4) {
						var bits1 = map.indexOf(base64Str.charAt(i - 1)) << ((i % 4) * 2);
						var bits2 = map.indexOf(base64Str.charAt(i)) >>> (6 - (i % 4) * 2);
						var bitsCombined = bits1 | bits2;
						words[nBytes >>> 2] |= (bitsCombined) << (24 - (nBytes % 4) * 8);
						nBytes++;
					}
				}

				return WordArray.create(words, nBytes);
			},

			_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
		};
	}());


	(function (Math) {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var Hasher = C_lib.Hasher;
		var C_algo = C.algo;

		// Constants table
		var T = [];

		// Compute constants
		(function () {
			for (var i = 0; i < 64; i++) {
				T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
			}
		}());

		/**
		 * MD5 hash algorithm.
		 */
		var MD5 = C_algo.MD5 = Hasher.extend({
			_doReset: function () {
				this._hash = new WordArray.init([
					0x67452301, 0xefcdab89,
					0x98badcfe, 0x10325476
				]);
			},

			_doProcessBlock: function (M, offset) {
				// Swap endian
				for (var i = 0; i < 16; i++) {
					// Shortcuts
					var offset_i = offset + i;
					var M_offset_i = M[offset_i];

					M[offset_i] = (
						(((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff) |
						(((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00)
					);
				}

				// Shortcuts
				var H = this._hash.words;

				var M_offset_0 = M[offset + 0];
				var M_offset_1 = M[offset + 1];
				var M_offset_2 = M[offset + 2];
				var M_offset_3 = M[offset + 3];
				var M_offset_4 = M[offset + 4];
				var M_offset_5 = M[offset + 5];
				var M_offset_6 = M[offset + 6];
				var M_offset_7 = M[offset + 7];
				var M_offset_8 = M[offset + 8];
				var M_offset_9 = M[offset + 9];
				var M_offset_10 = M[offset + 10];
				var M_offset_11 = M[offset + 11];
				var M_offset_12 = M[offset + 12];
				var M_offset_13 = M[offset + 13];
				var M_offset_14 = M[offset + 14];
				var M_offset_15 = M[offset + 15];

				// Working varialbes
				var a = H[0];
				var b = H[1];
				var c = H[2];
				var d = H[3];

				// Computation
				a = FF(a, b, c, d, M_offset_0, 7, T[0]);
				d = FF(d, a, b, c, M_offset_1, 12, T[1]);
				c = FF(c, d, a, b, M_offset_2, 17, T[2]);
				b = FF(b, c, d, a, M_offset_3, 22, T[3]);
				a = FF(a, b, c, d, M_offset_4, 7, T[4]);
				d = FF(d, a, b, c, M_offset_5, 12, T[5]);
				c = FF(c, d, a, b, M_offset_6, 17, T[6]);
				b = FF(b, c, d, a, M_offset_7, 22, T[7]);
				a = FF(a, b, c, d, M_offset_8, 7, T[8]);
				d = FF(d, a, b, c, M_offset_9, 12, T[9]);
				c = FF(c, d, a, b, M_offset_10, 17, T[10]);
				b = FF(b, c, d, a, M_offset_11, 22, T[11]);
				a = FF(a, b, c, d, M_offset_12, 7, T[12]);
				d = FF(d, a, b, c, M_offset_13, 12, T[13]);
				c = FF(c, d, a, b, M_offset_14, 17, T[14]);
				b = FF(b, c, d, a, M_offset_15, 22, T[15]);

				a = GG(a, b, c, d, M_offset_1, 5, T[16]);
				d = GG(d, a, b, c, M_offset_6, 9, T[17]);
				c = GG(c, d, a, b, M_offset_11, 14, T[18]);
				b = GG(b, c, d, a, M_offset_0, 20, T[19]);
				a = GG(a, b, c, d, M_offset_5, 5, T[20]);
				d = GG(d, a, b, c, M_offset_10, 9, T[21]);
				c = GG(c, d, a, b, M_offset_15, 14, T[22]);
				b = GG(b, c, d, a, M_offset_4, 20, T[23]);
				a = GG(a, b, c, d, M_offset_9, 5, T[24]);
				d = GG(d, a, b, c, M_offset_14, 9, T[25]);
				c = GG(c, d, a, b, M_offset_3, 14, T[26]);
				b = GG(b, c, d, a, M_offset_8, 20, T[27]);
				a = GG(a, b, c, d, M_offset_13, 5, T[28]);
				d = GG(d, a, b, c, M_offset_2, 9, T[29]);
				c = GG(c, d, a, b, M_offset_7, 14, T[30]);
				b = GG(b, c, d, a, M_offset_12, 20, T[31]);

				a = HH(a, b, c, d, M_offset_5, 4, T[32]);
				d = HH(d, a, b, c, M_offset_8, 11, T[33]);
				c = HH(c, d, a, b, M_offset_11, 16, T[34]);
				b = HH(b, c, d, a, M_offset_14, 23, T[35]);
				a = HH(a, b, c, d, M_offset_1, 4, T[36]);
				d = HH(d, a, b, c, M_offset_4, 11, T[37]);
				c = HH(c, d, a, b, M_offset_7, 16, T[38]);
				b = HH(b, c, d, a, M_offset_10, 23, T[39]);
				a = HH(a, b, c, d, M_offset_13, 4, T[40]);
				d = HH(d, a, b, c, M_offset_0, 11, T[41]);
				c = HH(c, d, a, b, M_offset_3, 16, T[42]);
				b = HH(b, c, d, a, M_offset_6, 23, T[43]);
				a = HH(a, b, c, d, M_offset_9, 4, T[44]);
				d = HH(d, a, b, c, M_offset_12, 11, T[45]);
				c = HH(c, d, a, b, M_offset_15, 16, T[46]);
				b = HH(b, c, d, a, M_offset_2, 23, T[47]);

				a = II(a, b, c, d, M_offset_0, 6, T[48]);
				d = II(d, a, b, c, M_offset_7, 10, T[49]);
				c = II(c, d, a, b, M_offset_14, 15, T[50]);
				b = II(b, c, d, a, M_offset_5, 21, T[51]);
				a = II(a, b, c, d, M_offset_12, 6, T[52]);
				d = II(d, a, b, c, M_offset_3, 10, T[53]);
				c = II(c, d, a, b, M_offset_10, 15, T[54]);
				b = II(b, c, d, a, M_offset_1, 21, T[55]);
				a = II(a, b, c, d, M_offset_8, 6, T[56]);
				d = II(d, a, b, c, M_offset_15, 10, T[57]);
				c = II(c, d, a, b, M_offset_6, 15, T[58]);
				b = II(b, c, d, a, M_offset_13, 21, T[59]);
				a = II(a, b, c, d, M_offset_4, 6, T[60]);
				d = II(d, a, b, c, M_offset_11, 10, T[61]);
				c = II(c, d, a, b, M_offset_2, 15, T[62]);
				b = II(b, c, d, a, M_offset_9, 21, T[63]);

				// Intermediate hash value
				H[0] = (H[0] + a) | 0;
				H[1] = (H[1] + b) | 0;
				H[2] = (H[2] + c) | 0;
				H[3] = (H[3] + d) | 0;
			},

			_doFinalize: function () {
				// Shortcuts
				var data = this._data;
				var dataWords = data.words;

				var nBitsTotal = this._nDataBytes * 8;
				var nBitsLeft = data.sigBytes * 8;

				// Add padding
				dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

				var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
				var nBitsTotalL = nBitsTotal;
				dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
					(((nBitsTotalH << 8) | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
					(((nBitsTotalH << 24) | (nBitsTotalH >>> 8)) & 0xff00ff00)
				);
				dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
					(((nBitsTotalL << 8) | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
					(((nBitsTotalL << 24) | (nBitsTotalL >>> 8)) & 0xff00ff00)
				);

				data.sigBytes = (dataWords.length + 1) * 4;

				// Hash final blocks
				this._process();

				// Shortcuts
				var hash = this._hash;
				var H = hash.words;

				// Swap endian
				for (var i = 0; i < 4; i++) {
					// Shortcut
					var H_i = H[i];

					H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff) |
						(((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
				}

				// Return final computed hash
				return hash;
			},

			clone: function () {
				var clone = Hasher.clone.call(this);
				clone._hash = this._hash.clone();

				return clone;
			}
		});

		function FF(a, b, c, d, x, s, t) {
			var n = a + ((b & c) | (~b & d)) + x + t;
			return ((n << s) | (n >>> (32 - s))) + b;
		}

		function GG(a, b, c, d, x, s, t) {
			var n = a + ((b & d) | (c & ~d)) + x + t;
			return ((n << s) | (n >>> (32 - s))) + b;
		}

		function HH(a, b, c, d, x, s, t) {
			var n = a + (b ^ c ^ d) + x + t;
			return ((n << s) | (n >>> (32 - s))) + b;
		}

		function II(a, b, c, d, x, s, t) {
			var n = a + (c ^ (b | ~d)) + x + t;
			return ((n << s) | (n >>> (32 - s))) + b;
		}

		/**
		 * Shortcut function to the hasher's object interface.
		 *
		 * @param {WordArray|string} message The message to hash.
		 *
		 * @return {WordArray} The hash.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var hash = CryptoJS.MD5('message');
		 *     var hash = CryptoJS.MD5(wordArray);
		 */
		C.MD5 = Hasher._createHelper(MD5);

		/**
		 * Shortcut function to the HMAC's object interface.
		 *
		 * @param {WordArray|string} message The message to hash.
		 * @param {WordArray|string} key The secret key.
		 *
		 * @return {WordArray} The HMAC.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var hmac = CryptoJS.HmacMD5(message, key);
		 */
		C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var Hasher = C_lib.Hasher;
		var C_algo = C.algo;

		// Reusable object
		var W = [];

		/**
		 * SHA-1 hash algorithm.
		 */
		var SHA1 = C_algo.SHA1 = Hasher.extend({
			_doReset: function () {
				this._hash = new WordArray.init([
					0x67452301, 0xefcdab89,
					0x98badcfe, 0x10325476,
					0xc3d2e1f0
				]);
			},

			_doProcessBlock: function (M, offset) {
				// Shortcut
				var H = this._hash.words;

				// Working variables
				var a = H[0];
				var b = H[1];
				var c = H[2];
				var d = H[3];
				var e = H[4];

				// Computation
				for (var i = 0; i < 80; i++) {
					if (i < 16) {
						W[i] = M[offset + i] | 0;
					} else {
						var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
						W[i] = (n << 1) | (n >>> 31);
					}

					var t = ((a << 5) | (a >>> 27)) + e + W[i];
					if (i < 20) {
						t += ((b & c) | (~b & d)) + 0x5a827999;
					} else if (i < 40) {
						t += (b ^ c ^ d) + 0x6ed9eba1;
					} else if (i < 60) {
						t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
					} else /* if (i < 80) */ {
						t += (b ^ c ^ d) - 0x359d3e2a;
					}

					e = d;
					d = c;
					c = (b << 30) | (b >>> 2);
					b = a;
					a = t;
				}

				// Intermediate hash value
				H[0] = (H[0] + a) | 0;
				H[1] = (H[1] + b) | 0;
				H[2] = (H[2] + c) | 0;
				H[3] = (H[3] + d) | 0;
				H[4] = (H[4] + e) | 0;
			},

			_doFinalize: function () {
				// Shortcuts
				var data = this._data;
				var dataWords = data.words;

				var nBitsTotal = this._nDataBytes * 8;
				var nBitsLeft = data.sigBytes * 8;

				// Add padding
				dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
				dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
				dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
				data.sigBytes = dataWords.length * 4;

				// Hash final blocks
				this._process();

				// Return final computed hash
				return this._hash;
			},

			clone: function () {
				var clone = Hasher.clone.call(this);
				clone._hash = this._hash.clone();

				return clone;
			}
		});

		/**
		 * Shortcut function to the hasher's object interface.
		 *
		 * @param {WordArray|string} message The message to hash.
		 *
		 * @return {WordArray} The hash.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var hash = CryptoJS.SHA1('message');
		 *     var hash = CryptoJS.SHA1(wordArray);
		 */
		C.SHA1 = Hasher._createHelper(SHA1);

		/**
		 * Shortcut function to the HMAC's object interface.
		 *
		 * @param {WordArray|string} message The message to hash.
		 * @param {WordArray|string} key The secret key.
		 *
		 * @return {WordArray} The HMAC.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var hmac = CryptoJS.HmacSHA1(message, key);
		 */
		C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());


	(function (Math) {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var Hasher = C_lib.Hasher;
		var C_algo = C.algo;

		// Initialization and round constants tables
		var H = [];
		var K = [];

		// Compute constants
		(function () {
			function isPrime(n) {
				var sqrtN = Math.sqrt(n);
				for (var factor = 2; factor <= sqrtN; factor++) {
					if (!(n % factor)) {
						return false;
					}
				}

				return true;
			}

			function getFractionalBits(n) {
				return ((n - (n | 0)) * 0x100000000) | 0;
			}

			var n = 2;
			var nPrime = 0;
			while (nPrime < 64) {
				if (isPrime(n)) {
					if (nPrime < 8) {
						H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
					}
					K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

					nPrime++;
				}

				n++;
			}
		}());

		// Reusable object
		var W = [];

		/**
		 * SHA-256 hash algorithm.
		 */
		var SHA256 = C_algo.SHA256 = Hasher.extend({
			_doReset: function () {
				this._hash = new WordArray.init(H.slice(0));
			},

			_doProcessBlock: function (M, offset) {
				// Shortcut
				var H = this._hash.words;

				// Working variables
				var a = H[0];
				var b = H[1];
				var c = H[2];
				var d = H[3];
				var e = H[4];
				var f = H[5];
				var g = H[6];
				var h = H[7];

				// Computation
				for (var i = 0; i < 64; i++) {
					if (i < 16) {
						W[i] = M[offset + i] | 0;
					} else {
						var gamma0x = W[i - 15];
						var gamma0 = ((gamma0x << 25) | (gamma0x >>> 7)) ^
							((gamma0x << 14) | (gamma0x >>> 18)) ^
							(gamma0x >>> 3);

						var gamma1x = W[i - 2];
						var gamma1 = ((gamma1x << 15) | (gamma1x >>> 17)) ^
							((gamma1x << 13) | (gamma1x >>> 19)) ^
							(gamma1x >>> 10);

						W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
					}

					var ch = (e & f) ^ (~e & g);
					var maj = (a & b) ^ (a & c) ^ (b & c);

					var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
					var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7) | (e >>> 25));

					var t1 = h + sigma1 + ch + K[i] + W[i];
					var t2 = sigma0 + maj;

					h = g;
					g = f;
					f = e;
					e = (d + t1) | 0;
					d = c;
					c = b;
					b = a;
					a = (t1 + t2) | 0;
				}

				// Intermediate hash value
				H[0] = (H[0] + a) | 0;
				H[1] = (H[1] + b) | 0;
				H[2] = (H[2] + c) | 0;
				H[3] = (H[3] + d) | 0;
				H[4] = (H[4] + e) | 0;
				H[5] = (H[5] + f) | 0;
				H[6] = (H[6] + g) | 0;
				H[7] = (H[7] + h) | 0;
			},

			_doFinalize: function () {
				// Shortcuts
				var data = this._data;
				var dataWords = data.words;

				var nBitsTotal = this._nDataBytes * 8;
				var nBitsLeft = data.sigBytes * 8;

				// Add padding
				dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
				dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
				dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
				data.sigBytes = dataWords.length * 4;

				// Hash final blocks
				this._process();

				// Return final computed hash
				return this._hash;
			},

			clone: function () {
				var clone = Hasher.clone.call(this);
				clone._hash = this._hash.clone();

				return clone;
			}
		});

		/**
		 * Shortcut function to the hasher's object interface.
		 *
		 * @param {WordArray|string} message The message to hash.
		 *
		 * @return {WordArray} The hash.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var hash = CryptoJS.SHA256('message');
		 *     var hash = CryptoJS.SHA256(wordArray);
		 */
		C.SHA256 = Hasher._createHelper(SHA256);

		/**
		 * Shortcut function to the HMAC's object interface.
		 *
		 * @param {WordArray|string} message The message to hash.
		 * @param {WordArray|string} key The secret key.
		 *
		 * @return {WordArray} The HMAC.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var hmac = CryptoJS.HmacSHA256(message, key);
		 */
		C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var C_enc = C.enc;

		/**
		 * UTF-16 BE encoding strategy.
		 */
		var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
			/**
			 * Converts a word array to a UTF-16 BE string.
			 *
			 * @param {WordArray} wordArray The word array.
			 *
			 * @return {string} The UTF-16 BE string.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
			 */
			stringify: function (wordArray) {
				// Shortcuts
				var words = wordArray.words;
				var sigBytes = wordArray.sigBytes;

				// Convert
				var utf16Chars = [];
				for (var i = 0; i < sigBytes; i += 2) {
					var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
					utf16Chars.push(String.fromCharCode(codePoint));
				}

				return utf16Chars.join('');
			},

			/**
			 * Converts a UTF-16 BE string to a word array.
			 *
			 * @param {string} utf16Str The UTF-16 BE string.
			 *
			 * @return {WordArray} The word array.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
			 */
			parse: function (utf16Str) {
				// Shortcut
				var utf16StrLength = utf16Str.length;

				// Convert
				var words = [];
				for (var i = 0; i < utf16StrLength; i++) {
					words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
				}

				return WordArray.create(words, utf16StrLength * 2);
			}
		};

		/**
		 * UTF-16 LE encoding strategy.
		 */
		C_enc.Utf16LE = {
			/**
			 * Converts a word array to a UTF-16 LE string.
			 *
			 * @param {WordArray} wordArray The word array.
			 *
			 * @return {string} The UTF-16 LE string.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
			 */
			stringify: function (wordArray) {
				// Shortcuts
				var words = wordArray.words;
				var sigBytes = wordArray.sigBytes;

				// Convert
				var utf16Chars = [];
				for (var i = 0; i < sigBytes; i += 2) {
					var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
					utf16Chars.push(String.fromCharCode(codePoint));
				}

				return utf16Chars.join('');
			},

			/**
			 * Converts a UTF-16 LE string to a word array.
			 *
			 * @param {string} utf16Str The UTF-16 LE string.
			 *
			 * @return {WordArray} The word array.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
			 */
			parse: function (utf16Str) {
				// Shortcut
				var utf16StrLength = utf16Str.length;

				// Convert
				var words = [];
				for (var i = 0; i < utf16StrLength; i++) {
					words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
				}

				return WordArray.create(words, utf16StrLength * 2);
			}
		};

		function swapEndian(word) {
			return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
		}
	}());


	(function () {
		// Check if typed arrays are supported
		if (typeof ArrayBuffer != 'function') {
			return;
		}

		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;

		// Reference original init
		var superInit = WordArray.init;

		// Augment WordArray.init to handle typed arrays
		var subInit = WordArray.init = function (typedArray) {
			// Convert buffers to uint8
			if (typedArray instanceof ArrayBuffer) {
				typedArray = new Uint8Array(typedArray);
			}

			// Convert other array views to uint8
			if (
				typedArray instanceof Int8Array ||
				(typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
				typedArray instanceof Int16Array ||
				typedArray instanceof Uint16Array ||
				typedArray instanceof Int32Array ||
				typedArray instanceof Uint32Array ||
				typedArray instanceof Float32Array ||
				typedArray instanceof Float64Array
			) {
				typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
			}

			// Handle Uint8Array
			if (typedArray instanceof Uint8Array) {
				// Shortcut
				var typedArrayByteLength = typedArray.byteLength;

				// Extract bytes
				var words = [];
				for (var i = 0; i < typedArrayByteLength; i++) {
					words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
				}

				// Initialize this word array
				superInit.call(this, words, typedArrayByteLength);
			} else {
				// Else call normal init
				superInit.apply(this, arguments);
			}
		};

		subInit.prototype = WordArray;
	}());


	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

		- Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
		- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function (Math) {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var Hasher = C_lib.Hasher;
		var C_algo = C.algo;

		// Constants table
		var _zl = WordArray.create([
			0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
			7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
			3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
			1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
			4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
		var _zr = WordArray.create([
			5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
			6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
			15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
			8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
			12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
		var _sl = WordArray.create([
			11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
			7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
			11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
			11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
			9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
		var _sr = WordArray.create([
			8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
			9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
			9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
			15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
			8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);

		var _hl = WordArray.create([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
		var _hr = WordArray.create([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

		/**
		 * RIPEMD160 hash algorithm.
		 */
		var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
			_doReset: function () {
				this._hash = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
			},

			_doProcessBlock: function (M, offset) {

				// Swap endian
				for (var i = 0; i < 16; i++) {
					// Shortcuts
					var offset_i = offset + i;
					var M_offset_i = M[offset_i];

					// Swap
					M[offset_i] = (
						(((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff) |
						(((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00)
					);
				}
				// Shortcut
				var H = this._hash.words;
				var hl = _hl.words;
				var hr = _hr.words;
				var zl = _zl.words;
				var zr = _zr.words;
				var sl = _sl.words;
				var sr = _sr.words;

				// Working variables
				var al, bl, cl, dl, el;
				var ar, br, cr, dr, er;

				ar = al = H[0];
				br = bl = H[1];
				cr = cl = H[2];
				dr = dl = H[3];
				er = el = H[4];
				// Computation
				var t;
				for (var i = 0; i < 80; i += 1) {
					t = (al + M[offset + zl[i]]) | 0;
					if (i < 16) {
						t += f1(bl, cl, dl) + hl[0];
					} else if (i < 32) {
						t += f2(bl, cl, dl) + hl[1];
					} else if (i < 48) {
						t += f3(bl, cl, dl) + hl[2];
					} else if (i < 64) {
						t += f4(bl, cl, dl) + hl[3];
					} else {// if (i<80) {
						t += f5(bl, cl, dl) + hl[4];
					}
					t = t | 0;
					t = rotl(t, sl[i]);
					t = (t + el) | 0;
					al = el;
					el = dl;
					dl = rotl(cl, 10);
					cl = bl;
					bl = t;

					t = (ar + M[offset + zr[i]]) | 0;
					if (i < 16) {
						t += f5(br, cr, dr) + hr[0];
					} else if (i < 32) {
						t += f4(br, cr, dr) + hr[1];
					} else if (i < 48) {
						t += f3(br, cr, dr) + hr[2];
					} else if (i < 64) {
						t += f2(br, cr, dr) + hr[3];
					} else {// if (i<80) {
						t += f1(br, cr, dr) + hr[4];
					}
					t = t | 0;
					t = rotl(t, sr[i]);
					t = (t + er) | 0;
					ar = er;
					er = dr;
					dr = rotl(cr, 10);
					cr = br;
					br = t;
				}
				// Intermediate hash value
				t = (H[1] + cl + dr) | 0;
				H[1] = (H[2] + dl + er) | 0;
				H[2] = (H[3] + el + ar) | 0;
				H[3] = (H[4] + al + br) | 0;
				H[4] = (H[0] + bl + cr) | 0;
				H[0] = t;
			},

			_doFinalize: function () {
				// Shortcuts
				var data = this._data;
				var dataWords = data.words;

				var nBitsTotal = this._nDataBytes * 8;
				var nBitsLeft = data.sigBytes * 8;

				// Add padding
				dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
				dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
					(((nBitsTotal << 8) | (nBitsTotal >>> 24)) & 0x00ff00ff) |
					(((nBitsTotal << 24) | (nBitsTotal >>> 8)) & 0xff00ff00)
				);
				data.sigBytes = (dataWords.length + 1) * 4;

				// Hash final blocks
				this._process();

				// Shortcuts
				var hash = this._hash;
				var H = hash.words;

				// Swap endian
				for (var i = 0; i < 5; i++) {
					// Shortcut
					var H_i = H[i];

					// Swap
					H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff) |
						(((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
				}

				// Return final computed hash
				return hash;
			},

			clone: function () {
				var clone = Hasher.clone.call(this);
				clone._hash = this._hash.clone();

				return clone;
			}
		});


		function f1(x, y, z) {
			return ((x) ^ (y) ^ (z));

		}

		function f2(x, y, z) {
			return (((x) & (y)) | ((~x) & (z)));
		}

		function f3(x, y, z) {
			return (((x) | (~(y))) ^ (z));
		}

		function f4(x, y, z) {
			return (((x) & (z)) | ((y) & (~(z))));
		}

		function f5(x, y, z) {
			return ((x) ^ ((y) | (~(z))));

		}

		function rotl(x, n) {
			return (x << n) | (x >>> (32 - n));
		}


		/**
		 * Shortcut function to the hasher's object interface.
		 *
		 * @param {WordArray|string} message The message to hash.
		 *
		 * @return {WordArray} The hash.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var hash = CryptoJS.RIPEMD160('message');
		 *     var hash = CryptoJS.RIPEMD160(wordArray);
		 */
		C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

		/**
		 * Shortcut function to the HMAC's object interface.
		 *
		 * @param {WordArray|string} message The message to hash.
		 * @param {WordArray|string} key The secret key.
		 *
		 * @return {WordArray} The HMAC.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
		 */
		C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
	}(Math));


	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var Base = C_lib.Base;
		var C_enc = C.enc;
		var Utf8 = C_enc.Utf8;
		var C_algo = C.algo;

		/**
		 * HMAC algorithm.
		 */
		var HMAC = C_algo.HMAC = Base.extend({
			/**
			 * Initializes a newly created HMAC.
			 *
			 * @param {Hasher} hasher The hash algorithm to use.
			 * @param {WordArray|string} key The secret key.
			 *
			 * @example
			 *
			 *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
			 */
			init: function (hasher, key) {
				// Init hasher
				hasher = this._hasher = new hasher.init();

				// Convert string to WordArray, else assume WordArray already
				if (typeof key == 'string') {
					key = Utf8.parse(key);
				}

				// Shortcuts
				var hasherBlockSize = hasher.blockSize;
				var hasherBlockSizeBytes = hasherBlockSize * 4;

				// Allow arbitrary length keys
				if (key.sigBytes > hasherBlockSizeBytes) {
					key = hasher.finalize(key);
				}

				// Clamp excess bits
				key.clamp();

				// Clone key for inner and outer pads
				var oKey = this._oKey = key.clone();
				var iKey = this._iKey = key.clone();

				// Shortcuts
				var oKeyWords = oKey.words;
				var iKeyWords = iKey.words;

				// XOR keys with pad constants
				for (var i = 0; i < hasherBlockSize; i++) {
					oKeyWords[i] ^= 0x5c5c5c5c;
					iKeyWords[i] ^= 0x36363636;
				}
				oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

				// Set initial values
				this.reset();
			},

			/**
			 * Resets this HMAC to its initial state.
			 *
			 * @example
			 *
			 *     hmacHasher.reset();
			 */
			reset: function () {
				// Shortcut
				var hasher = this._hasher;

				// Reset
				hasher.reset();
				hasher.update(this._iKey);
			},

			/**
			 * Updates this HMAC with a message.
			 *
			 * @param {WordArray|string} messageUpdate The message to append.
			 *
			 * @return {HMAC} This HMAC instance.
			 *
			 * @example
			 *
			 *     hmacHasher.update('message');
			 *     hmacHasher.update(wordArray);
			 */
			update: function (messageUpdate) {
				this._hasher.update(messageUpdate);

				// Chainable
				return this;
			},

			/**
			 * Finalizes the HMAC computation.
			 * Note that the finalize operation is effectively a destructive, read-once operation.
			 *
			 * @param {WordArray|string} messageUpdate (Optional) A final message update.
			 *
			 * @return {WordArray} The HMAC.
			 *
			 * @example
			 *
			 *     var hmac = hmacHasher.finalize();
			 *     var hmac = hmacHasher.finalize('message');
			 *     var hmac = hmacHasher.finalize(wordArray);
			 */
			finalize: function (messageUpdate) {
				// Shortcut
				var hasher = this._hasher;

				// Compute HMAC
				var innerHash = hasher.finalize(messageUpdate);
				hasher.reset();
				var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

				return hmac;
			}
		});
	}());


	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var Base = C_lib.Base;
		var WordArray = C_lib.WordArray;
		var C_algo = C.algo;
		var SHA1 = C_algo.SHA1;
		var HMAC = C_algo.HMAC;

		/**
		 * Password-Based Key Derivation Function 2 algorithm.
		 */
		var PBKDF2 = C_algo.PBKDF2 = Base.extend({
			/**
			 * Configuration options.
			 *
			 * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
			 * @property {Hasher} hasher The hasher to use. Default: SHA1
			 * @property {number} iterations The number of iterations to perform. Default: 1
			 */
			cfg: Base.extend({
				keySize: 128 / 32,
				hasher: SHA1,
				iterations: 1
			}),

			/**
			 * Initializes a newly created key derivation function.
			 *
			 * @param {Object} cfg (Optional) The configuration options to use for the derivation.
			 *
			 * @example
			 *
			 *     var kdf = CryptoJS.algo.PBKDF2.create();
			 *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
			 *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
			 */
			init: function (cfg) {
				this.cfg = this.cfg.extend(cfg);
			},

			/**
			 * Computes the Password-Based Key Derivation Function 2.
			 *
			 * @param {WordArray|string} password The password.
			 * @param {WordArray|string} salt A salt.
			 *
			 * @return {WordArray} The derived key.
			 *
			 * @example
			 *
			 *     var key = kdf.compute(password, salt);
			 */
			compute: function (password, salt) {
				// Shortcut
				var cfg = this.cfg;

				// Init HMAC
				var hmac = HMAC.create(cfg.hasher, password);

				// Initial values
				var derivedKey = WordArray.create();
				var blockIndex = WordArray.create([0x00000001]);

				// Shortcuts
				var derivedKeyWords = derivedKey.words;
				var blockIndexWords = blockIndex.words;
				var keySize = cfg.keySize;
				var iterations = cfg.iterations;

				// Generate key
				while (derivedKeyWords.length < keySize) {
					var block = hmac.update(salt).finalize(blockIndex);
					hmac.reset();

					// Shortcuts
					var blockWords = block.words;
					var blockWordsLength = blockWords.length;

					// Iterations
					var intermediate = block;
					for (var i = 1; i < iterations; i++) {
						intermediate = hmac.finalize(intermediate);
						hmac.reset();

						// Shortcut
						var intermediateWords = intermediate.words;

						// XOR intermediate with block
						for (var j = 0; j < blockWordsLength; j++) {
							blockWords[j] ^= intermediateWords[j];
						}
					}

					derivedKey.concat(block);
					blockIndexWords[0]++;
				}
				derivedKey.sigBytes = keySize * 4;

				return derivedKey;
			}
		});

		/**
		 * Computes the Password-Based Key Derivation Function 2.
		 *
		 * @param {WordArray|string} password The password.
		 * @param {WordArray|string} salt A salt.
		 * @param {Object} cfg (Optional) The configuration options to use for this computation.
		 *
		 * @return {WordArray} The derived key.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var key = CryptoJS.PBKDF2(password, salt);
		 *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
		 *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
		 */
		C.PBKDF2 = function (password, salt, cfg) {
			return PBKDF2.create(cfg).compute(password, salt);
		};
	}());


	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var Base = C_lib.Base;
		var WordArray = C_lib.WordArray;
		var C_algo = C.algo;
		var MD5 = C_algo.MD5;

		/**
		 * This key derivation function is meant to conform with EVP_BytesToKey.
		 * www.openssl.org/docs/crypto/EVP_BytesToKey.html
		 */
		var EvpKDF = C_algo.EvpKDF = Base.extend({
			/**
			 * Configuration options.
			 *
			 * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
			 * @property {Hasher} hasher The hash algorithm to use. Default: MD5
			 * @property {number} iterations The number of iterations to perform. Default: 1
			 */
			cfg: Base.extend({
				keySize: 128 / 32,
				hasher: MD5,
				iterations: 1
			}),

			/**
			 * Initializes a newly created key derivation function.
			 *
			 * @param {Object} cfg (Optional) The configuration options to use for the derivation.
			 *
			 * @example
			 *
			 *     var kdf = CryptoJS.algo.EvpKDF.create();
			 *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
			 *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
			 */
			init: function (cfg) {
				this.cfg = this.cfg.extend(cfg);
			},

			/**
			 * Derives a key from a password.
			 *
			 * @param {WordArray|string} password The password.
			 * @param {WordArray|string} salt A salt.
			 *
			 * @return {WordArray} The derived key.
			 *
			 * @example
			 *
			 *     var key = kdf.compute(password, salt);
			 */
			compute: function (password, salt) {
				// Shortcut
				var cfg = this.cfg;

				// Init hasher
				var hasher = cfg.hasher.create();

				// Initial values
				var derivedKey = WordArray.create();

				// Shortcuts
				var derivedKeyWords = derivedKey.words;
				var keySize = cfg.keySize;
				var iterations = cfg.iterations;

				// Generate key
				while (derivedKeyWords.length < keySize) {
					if (block) {
						hasher.update(block);
					}
					var block = hasher.update(password).finalize(salt);
					hasher.reset();

					// Iterations
					for (var i = 1; i < iterations; i++) {
						block = hasher.finalize(block);
						hasher.reset();
					}

					derivedKey.concat(block);
				}
				derivedKey.sigBytes = keySize * 4;

				return derivedKey;
			}
		});

		/**
		 * Derives a key from a password.
		 *
		 * @param {WordArray|string} password The password.
		 * @param {WordArray|string} salt A salt.
		 * @param {Object} cfg (Optional) The configuration options to use for this computation.
		 *
		 * @return {WordArray} The derived key.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var key = CryptoJS.EvpKDF(password, salt);
		 *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
		 *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
		 */
		C.EvpKDF = function (password, salt, cfg) {
			return EvpKDF.create(cfg).compute(password, salt);
		};
	}());


	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var C_algo = C.algo;
		var SHA256 = C_algo.SHA256;

		/**
		 * SHA-224 hash algorithm.
		 */
		var SHA224 = C_algo.SHA224 = SHA256.extend({
			_doReset: function () {
				this._hash = new WordArray.init([
					0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
					0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
				]);
			},

			_doFinalize: function () {
				var hash = SHA256._doFinalize.call(this);

				hash.sigBytes -= 4;

				return hash;
			}
		});

		/**
		 * Shortcut function to the hasher's object interface.
		 *
		 * @param {WordArray|string} message The message to hash.
		 *
		 * @return {WordArray} The hash.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var hash = CryptoJS.SHA224('message');
		 *     var hash = CryptoJS.SHA224(wordArray);
		 */
		C.SHA224 = SHA256._createHelper(SHA224);

		/**
		 * Shortcut function to the HMAC's object interface.
		 *
		 * @param {WordArray|string} message The message to hash.
		 * @param {WordArray|string} key The secret key.
		 *
		 * @return {WordArray} The HMAC.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var hmac = CryptoJS.HmacSHA224(message, key);
		 */
		C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
	}());


	(function (undefined) {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var Base = C_lib.Base;
		var X32WordArray = C_lib.WordArray;

		/**
		 * x64 namespace.
		 */
		var C_x64 = C.x64 = {};

		/**
		 * A 64-bit word.
		 */
		var X64Word = C_x64.Word = Base.extend({
			/**
			 * Initializes a newly created 64-bit word.
			 *
			 * @param {number} high The high 32 bits.
			 * @param {number} low The low 32 bits.
			 *
			 * @example
			 *
			 *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
			 */
			init: function (high, low) {
				this.high = high;
				this.low = low;
			}

			/**
			 * Bitwise NOTs this word.
			 *
			 * @return {X64Word} A new x64-Word object after negating.
			 *
			 * @example
			 *
			 *     var negated = x64Word.not();
			 */
			// not: function () {
			// var high = ~this.high;
			// var low = ~this.low;

			// return X64Word.create(high, low);
			// },

			/**
			 * Bitwise ANDs this word with the passed word.
			 *
			 * @param {X64Word} word The x64-Word to AND with this word.
			 *
			 * @return {X64Word} A new x64-Word object after ANDing.
			 *
			 * @example
			 *
			 *     var anded = x64Word.and(anotherX64Word);
			 */
			// and: function (word) {
			// var high = this.high & word.high;
			// var low = this.low & word.low;

			// return X64Word.create(high, low);
			// },

			/**
			 * Bitwise ORs this word with the passed word.
			 *
			 * @param {X64Word} word The x64-Word to OR with this word.
			 *
			 * @return {X64Word} A new x64-Word object after ORing.
			 *
			 * @example
			 *
			 *     var ored = x64Word.or(anotherX64Word);
			 */
			// or: function (word) {
			// var high = this.high | word.high;
			// var low = this.low | word.low;

			// return X64Word.create(high, low);
			// },

			/**
			 * Bitwise XORs this word with the passed word.
			 *
			 * @param {X64Word} word The x64-Word to XOR with this word.
			 *
			 * @return {X64Word} A new x64-Word object after XORing.
			 *
			 * @example
			 *
			 *     var xored = x64Word.xor(anotherX64Word);
			 */
			// xor: function (word) {
			// var high = this.high ^ word.high;
			// var low = this.low ^ word.low;

			// return X64Word.create(high, low);
			// },

			/**
			 * Shifts this word n bits to the left.
			 *
			 * @param {number} n The number of bits to shift.
			 *
			 * @return {X64Word} A new x64-Word object after shifting.
			 *
			 * @example
			 *
			 *     var shifted = x64Word.shiftL(25);
			 */
			// shiftL: function (n) {
			// if (n < 32) {
			// var high = (this.high << n) | (this.low >>> (32 - n));
			// var low = this.low << n;
			// } else {
			// var high = this.low << (n - 32);
			// var low = 0;
			// }

			// return X64Word.create(high, low);
			// },

			/**
			 * Shifts this word n bits to the right.
			 *
			 * @param {number} n The number of bits to shift.
			 *
			 * @return {X64Word} A new x64-Word object after shifting.
			 *
			 * @example
			 *
			 *     var shifted = x64Word.shiftR(7);
			 */
			// shiftR: function (n) {
			// if (n < 32) {
			// var low = (this.low >>> n) | (this.high << (32 - n));
			// var high = this.high >>> n;
			// } else {
			// var low = this.high >>> (n - 32);
			// var high = 0;
			// }

			// return X64Word.create(high, low);
			// },

			/**
			 * Rotates this word n bits to the left.
			 *
			 * @param {number} n The number of bits to rotate.
			 *
			 * @return {X64Word} A new x64-Word object after rotating.
			 *
			 * @example
			 *
			 *     var rotated = x64Word.rotL(25);
			 */
			// rotL: function (n) {
			// return this.shiftL(n).or(this.shiftR(64 - n));
			// },

			/**
			 * Rotates this word n bits to the right.
			 *
			 * @param {number} n The number of bits to rotate.
			 *
			 * @return {X64Word} A new x64-Word object after rotating.
			 *
			 * @example
			 *
			 *     var rotated = x64Word.rotR(7);
			 */
			// rotR: function (n) {
			// return this.shiftR(n).or(this.shiftL(64 - n));
			// },

			/**
			 * Adds this word with the passed word.
			 *
			 * @param {X64Word} word The x64-Word to add with this word.
			 *
			 * @return {X64Word} A new x64-Word object after adding.
			 *
			 * @example
			 *
			 *     var added = x64Word.add(anotherX64Word);
			 */
			// add: function (word) {
			// var low = (this.low + word.low) | 0;
			// var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
			// var high = (this.high + word.high + carry) | 0;

			// return X64Word.create(high, low);
			// }
		});

		/**
		 * An array of 64-bit words.
		 *
		 * @property {Array} words The array of CryptoJS.x64.Word objects.
		 * @property {number} sigBytes The number of significant bytes in this word array.
		 */
		var X64WordArray = C_x64.WordArray = Base.extend({
			/**
			 * Initializes a newly created word array.
			 *
			 * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
			 * @param {number} sigBytes (Optional) The number of significant bytes in the words.
			 *
			 * @example
			 *
			 *     var wordArray = CryptoJS.x64.WordArray.create();
			 *
			 *     var wordArray = CryptoJS.x64.WordArray.create([
			 *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
			 *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
			 *     ]);
			 *
			 *     var wordArray = CryptoJS.x64.WordArray.create([
			 *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
			 *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
			 *     ], 10);
			 */
			init: function (words, sigBytes) {
				words = this.words = words || [];

				if (sigBytes != undefined) {
					this.sigBytes = sigBytes;
				} else {
					this.sigBytes = words.length * 8;
				}
			},

			/**
			 * Converts this 64-bit word array to a 32-bit word array.
			 *
			 * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
			 *
			 * @example
			 *
			 *     var x32WordArray = x64WordArray.toX32();
			 */
			toX32: function () {
				// Shortcuts
				var x64Words = this.words;
				var x64WordsLength = x64Words.length;

				// Convert
				var x32Words = [];
				for (var i = 0; i < x64WordsLength; i++) {
					var x64Word = x64Words[i];
					x32Words.push(x64Word.high);
					x32Words.push(x64Word.low);
				}

				return X32WordArray.create(x32Words, this.sigBytes);
			},

			/**
			 * Creates a copy of this word array.
			 *
			 * @return {X64WordArray} The clone.
			 *
			 * @example
			 *
			 *     var clone = x64WordArray.clone();
			 */
			clone: function () {
				var clone = Base.clone.call(this);

				// Clone "words" array
				var words = clone.words = this.words.slice(0);

				// Clone each X64Word object
				var wordsLength = words.length;
				for (var i = 0; i < wordsLength; i++) {
					words[i] = words[i].clone();
				}

				return clone;
			}
		});
	}());


	(function (Math) {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var Hasher = C_lib.Hasher;
		var C_x64 = C.x64;
		var X64Word = C_x64.Word;
		var C_algo = C.algo;

		// Constants tables
		var RHO_OFFSETS = [];
		var PI_INDEXES = [];
		var ROUND_CONSTANTS = [];

		// Compute Constants
		(function () {
			// Compute rho offset constants
			var x = 1, y = 0;
			for (var t = 0; t < 24; t++) {
				RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

				var newX = y % 5;
				var newY = (2 * x + 3 * y) % 5;
				x = newX;
				y = newY;
			}

			// Compute pi index constants
			for (var x = 0; x < 5; x++) {
				for (var y = 0; y < 5; y++) {
					PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
				}
			}

			// Compute round constants
			var LFSR = 0x01;
			for (var i = 0; i < 24; i++) {
				var roundConstantMsw = 0;
				var roundConstantLsw = 0;

				for (var j = 0; j < 7; j++) {
					if (LFSR & 0x01) {
						var bitPosition = (1 << j) - 1;
						if (bitPosition < 32) {
							roundConstantLsw ^= 1 << bitPosition;
						} else /* if (bitPosition >= 32) */ {
							roundConstantMsw ^= 1 << (bitPosition - 32);
						}
					}

					// Compute next LFSR
					if (LFSR & 0x80) {
						// Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
						LFSR = (LFSR << 1) ^ 0x71;
					} else {
						LFSR <<= 1;
					}
				}

				ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
			}
		}());

		// Reusable objects for temporary values
		var T = [];
		(function () {
			for (var i = 0; i < 25; i++) {
				T[i] = X64Word.create();
			}
		}());

		/**
		 * SHA-3 hash algorithm.
		 */
		var SHA3 = C_algo.SHA3 = Hasher.extend({
			/**
			 * Configuration options.
			 *
			 * @property {number} outputLength
			 *   The desired number of bits in the output hash.
			 *   Only values permitted are: 224, 256, 384, 512.
			 *   Default: 512
			 */
			cfg: Hasher.cfg.extend({
				outputLength: 512
			}),

			_doReset: function () {
				var state = this._state = []
				for (var i = 0; i < 25; i++) {
					state[i] = new X64Word.init();
				}

				this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
			},

			_doProcessBlock: function (M, offset) {
				// Shortcuts
				var state = this._state;
				var nBlockSizeLanes = this.blockSize / 2;

				// Absorb
				for (var i = 0; i < nBlockSizeLanes; i++) {
					// Shortcuts
					var M2i = M[offset + 2 * i];
					var M2i1 = M[offset + 2 * i + 1];

					// Swap endian
					M2i = (
						(((M2i << 8) | (M2i >>> 24)) & 0x00ff00ff) |
						(((M2i << 24) | (M2i >>> 8)) & 0xff00ff00)
					);
					M2i1 = (
						(((M2i1 << 8) | (M2i1 >>> 24)) & 0x00ff00ff) |
						(((M2i1 << 24) | (M2i1 >>> 8)) & 0xff00ff00)
					);

					// Absorb message into state
					var lane = state[i];
					lane.high ^= M2i1;
					lane.low ^= M2i;
				}

				// Rounds
				for (var round = 0; round < 24; round++) {
					// Theta
					for (var x = 0; x < 5; x++) {
						// Mix column lanes
						var tMsw = 0, tLsw = 0;
						for (var y = 0; y < 5; y++) {
							var lane = state[x + 5 * y];
							tMsw ^= lane.high;
							tLsw ^= lane.low;
						}

						// Temporary values
						var Tx = T[x];
						Tx.high = tMsw;
						Tx.low = tLsw;
					}
					for (var x = 0; x < 5; x++) {
						// Shortcuts
						var Tx4 = T[(x + 4) % 5];
						var Tx1 = T[(x + 1) % 5];
						var Tx1Msw = Tx1.high;
						var Tx1Lsw = Tx1.low;

						// Mix surrounding columns
						var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
						var tLsw = Tx4.low ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
						for (var y = 0; y < 5; y++) {
							var lane = state[x + 5 * y];
							lane.high ^= tMsw;
							lane.low ^= tLsw;
						}
					}

					// Rho Pi
					for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
						// Shortcuts
						var lane = state[laneIndex];
						var laneMsw = lane.high;
						var laneLsw = lane.low;
						var rhoOffset = RHO_OFFSETS[laneIndex];

						// Rotate lanes
						if (rhoOffset < 32) {
							var tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
							var tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
						} else /* if (rhoOffset >= 32) */ {
							var tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
							var tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
						}

						// Transpose lanes
						var TPiLane = T[PI_INDEXES[laneIndex]];
						TPiLane.high = tMsw;
						TPiLane.low = tLsw;
					}

					// Rho pi at x = y = 0
					var T0 = T[0];
					var state0 = state[0];
					T0.high = state0.high;
					T0.low = state0.low;

					// Chi
					for (var x = 0; x < 5; x++) {
						for (var y = 0; y < 5; y++) {
							// Shortcuts
							var laneIndex = x + 5 * y;
							var lane = state[laneIndex];
							var TLane = T[laneIndex];
							var Tx1Lane = T[((x + 1) % 5) + 5 * y];
							var Tx2Lane = T[((x + 2) % 5) + 5 * y];

							// Mix rows
							lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
							lane.low = TLane.low ^ (~Tx1Lane.low & Tx2Lane.low);
						}
					}

					// Iota
					var lane = state[0];
					var roundConstant = ROUND_CONSTANTS[round];
					lane.high ^= roundConstant.high;
					lane.low ^= roundConstant.low;;
				}
			},

			_doFinalize: function () {
				// Shortcuts
				var data = this._data;
				var dataWords = data.words;
				var nBitsTotal = this._nDataBytes * 8;
				var nBitsLeft = data.sigBytes * 8;
				var blockSizeBits = this.blockSize * 32;

				// Add padding
				dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
				dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
				data.sigBytes = dataWords.length * 4;

				// Hash final blocks
				this._process();

				// Shortcuts
				var state = this._state;
				var outputLengthBytes = this.cfg.outputLength / 8;
				var outputLengthLanes = outputLengthBytes / 8;

				// Squeeze
				var hashWords = [];
				for (var i = 0; i < outputLengthLanes; i++) {
					// Shortcuts
					var lane = state[i];
					var laneMsw = lane.high;
					var laneLsw = lane.low;

					// Swap endian
					laneMsw = (
						(((laneMsw << 8) | (laneMsw >>> 24)) & 0x00ff00ff) |
						(((laneMsw << 24) | (laneMsw >>> 8)) & 0xff00ff00)
					);
					laneLsw = (
						(((laneLsw << 8) | (laneLsw >>> 24)) & 0x00ff00ff) |
						(((laneLsw << 24) | (laneLsw >>> 8)) & 0xff00ff00)
					);

					// Squeeze state to retrieve hash
					hashWords.push(laneLsw);
					hashWords.push(laneMsw);
				}

				// Return final computed hash
				return new WordArray.init(hashWords, outputLengthBytes);
			},

			clone: function () {
				var clone = Hasher.clone.call(this);

				var state = clone._state = this._state.slice(0);
				for (var i = 0; i < 25; i++) {
					state[i] = state[i].clone();
				}

				return clone;
			}
		});

		/**
		 * Shortcut function to the hasher's object interface.
		 *
		 * @param {WordArray|string} message The message to hash.
		 *
		 * @return {WordArray} The hash.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var hash = CryptoJS.SHA3('message');
		 *     var hash = CryptoJS.SHA3(wordArray);
		 */
		C.SHA3 = Hasher._createHelper(SHA3);

		/**
		 * Shortcut function to the HMAC's object interface.
		 *
		 * @param {WordArray|string} message The message to hash.
		 * @param {WordArray|string} key The secret key.
		 *
		 * @return {WordArray} The HMAC.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var hmac = CryptoJS.HmacSHA3(message, key);
		 */
		C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
	}(Math));


	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var Hasher = C_lib.Hasher;
		var C_x64 = C.x64;
		var X64Word = C_x64.Word;
		var X64WordArray = C_x64.WordArray;
		var C_algo = C.algo;

		function X64Word_create() {
			return X64Word.create.apply(X64Word, arguments);
		}

		// Constants
		var K = [
			X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
			X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
			X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
			X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
			X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
			X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
			X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
			X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
			X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
			X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
			X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
			X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
			X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
			X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
			X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
			X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
			X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
			X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
			X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
			X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
			X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
			X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
			X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
			X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
			X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
			X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
			X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
			X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
			X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
			X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
			X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
			X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
			X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
			X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
			X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
			X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
			X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
			X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
			X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
			X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
		];

		// Reusable objects
		var W = [];
		(function () {
			for (var i = 0; i < 80; i++) {
				W[i] = X64Word_create();
			}
		}());

		/**
		 * SHA-512 hash algorithm.
		 */
		var SHA512 = C_algo.SHA512 = Hasher.extend({
			_doReset: function () {
				this._hash = new X64WordArray.init([
					new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
					new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
					new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
					new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
				]);
			},

			_doProcessBlock: function (M, offset) {
				// Shortcuts
				var H = this._hash.words;

				var H0 = H[0];
				var H1 = H[1];
				var H2 = H[2];
				var H3 = H[3];
				var H4 = H[4];
				var H5 = H[5];
				var H6 = H[6];
				var H7 = H[7];

				var H0h = H0.high;
				var H0l = H0.low;
				var H1h = H1.high;
				var H1l = H1.low;
				var H2h = H2.high;
				var H2l = H2.low;
				var H3h = H3.high;
				var H3l = H3.low;
				var H4h = H4.high;
				var H4l = H4.low;
				var H5h = H5.high;
				var H5l = H5.low;
				var H6h = H6.high;
				var H6l = H6.low;
				var H7h = H7.high;
				var H7l = H7.low;

				// Working variables
				var ah = H0h;
				var al = H0l;
				var bh = H1h;
				var bl = H1l;
				var ch = H2h;
				var cl = H2l;
				var dh = H3h;
				var dl = H3l;
				var eh = H4h;
				var el = H4l;
				var fh = H5h;
				var fl = H5l;
				var gh = H6h;
				var gl = H6l;
				var hh = H7h;
				var hl = H7l;

				// Rounds
				for (var i = 0; i < 80; i++) {
					// Shortcut
					var Wi = W[i];

					// Extend message
					if (i < 16) {
						var Wih = Wi.high = M[offset + i * 2] | 0;
						var Wil = Wi.low = M[offset + i * 2 + 1] | 0;
					} else {
						// Gamma0
						var gamma0x = W[i - 15];
						var gamma0xh = gamma0x.high;
						var gamma0xl = gamma0x.low;
						var gamma0h = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
						var gamma0l = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

						// Gamma1
						var gamma1x = W[i - 2];
						var gamma1xh = gamma1x.high;
						var gamma1xl = gamma1x.low;
						var gamma1h = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
						var gamma1l = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

						// W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
						var Wi7 = W[i - 7];
						var Wi7h = Wi7.high;
						var Wi7l = Wi7.low;

						var Wi16 = W[i - 16];
						var Wi16h = Wi16.high;
						var Wi16l = Wi16.low;

						var Wil = gamma0l + Wi7l;
						var Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
						var Wil = Wil + gamma1l;
						var Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
						var Wil = Wil + Wi16l;
						var Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

						Wi.high = Wih;
						Wi.low = Wil;
					}

					var chh = (eh & fh) ^ (~eh & gh);
					var chl = (el & fl) ^ (~el & gl);
					var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
					var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

					var sigma0h = ((ah >>> 28) | (al << 4)) ^ ((ah << 30) | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
					var sigma0l = ((al >>> 28) | (ah << 4)) ^ ((al << 30) | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
					var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
					var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

					// t1 = h + sigma1 + ch + K[i] + W[i]
					var Ki = K[i];
					var Kih = Ki.high;
					var Kil = Ki.low;

					var t1l = hl + sigma1l;
					var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
					var t1l = t1l + chl;
					var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
					var t1l = t1l + Kil;
					var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
					var t1l = t1l + Wil;
					var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

					// t2 = sigma0 + maj
					var t2l = sigma0l + majl;
					var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

					// Update working variables
					hh = gh;
					hl = gl;
					gh = fh;
					gl = fl;
					fh = eh;
					fl = el;
					el = (dl + t1l) | 0;
					eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
					dh = ch;
					dl = cl;
					ch = bh;
					cl = bl;
					bh = ah;
					bl = al;
					al = (t1l + t2l) | 0;
					ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
				}

				// Intermediate hash value
				H0l = H0.low = (H0l + al);
				H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
				H1l = H1.low = (H1l + bl);
				H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
				H2l = H2.low = (H2l + cl);
				H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
				H3l = H3.low = (H3l + dl);
				H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
				H4l = H4.low = (H4l + el);
				H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
				H5l = H5.low = (H5l + fl);
				H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
				H6l = H6.low = (H6l + gl);
				H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
				H7l = H7.low = (H7l + hl);
				H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
			},

			_doFinalize: function () {
				// Shortcuts
				var data = this._data;
				var dataWords = data.words;

				var nBitsTotal = this._nDataBytes * 8;
				var nBitsLeft = data.sigBytes * 8;

				// Add padding
				dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
				dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
				dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
				data.sigBytes = dataWords.length * 4;

				// Hash final blocks
				this._process();

				// Convert hash to 32-bit word array before returning
				var hash = this._hash.toX32();

				// Return final computed hash
				return hash;
			},

			clone: function () {
				var clone = Hasher.clone.call(this);
				clone._hash = this._hash.clone();

				return clone;
			},

			blockSize: 1024 / 32
		});

		/**
		 * Shortcut function to the hasher's object interface.
		 *
		 * @param {WordArray|string} message The message to hash.
		 *
		 * @return {WordArray} The hash.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var hash = CryptoJS.SHA512('message');
		 *     var hash = CryptoJS.SHA512(wordArray);
		 */
		C.SHA512 = Hasher._createHelper(SHA512);

		/**
		 * Shortcut function to the HMAC's object interface.
		 *
		 * @param {WordArray|string} message The message to hash.
		 * @param {WordArray|string} key The secret key.
		 *
		 * @return {WordArray} The HMAC.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var hmac = CryptoJS.HmacSHA512(message, key);
		 */
		C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
	}());


	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_x64 = C.x64;
		var X64Word = C_x64.Word;
		var X64WordArray = C_x64.WordArray;
		var C_algo = C.algo;
		var SHA512 = C_algo.SHA512;

		/**
		 * SHA-384 hash algorithm.
		 */
		var SHA384 = C_algo.SHA384 = SHA512.extend({
			_doReset: function () {
				this._hash = new X64WordArray.init([
					new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
					new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
					new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
					new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
				]);
			},

			_doFinalize: function () {
				var hash = SHA512._doFinalize.call(this);

				hash.sigBytes -= 16;

				return hash;
			}
		});

		/**
		 * Shortcut function to the hasher's object interface.
		 *
		 * @param {WordArray|string} message The message to hash.
		 *
		 * @return {WordArray} The hash.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var hash = CryptoJS.SHA384('message');
		 *     var hash = CryptoJS.SHA384(wordArray);
		 */
		C.SHA384 = SHA512._createHelper(SHA384);

		/**
		 * Shortcut function to the HMAC's object interface.
		 *
		 * @param {WordArray|string} message The message to hash.
		 * @param {WordArray|string} key The secret key.
		 *
		 * @return {WordArray} The HMAC.
		 *
		 * @static
		 *
		 * @example
		 *
		 *     var hmac = CryptoJS.HmacSHA384(message, key);
		 */
		C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
	}());


	/**
	 * Cipher core components.
	 */
	CryptoJS.lib.Cipher || (function (undefined) {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var Base = C_lib.Base;
		var WordArray = C_lib.WordArray;
		var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
		var C_enc = C.enc;
		var Utf8 = C_enc.Utf8;
		var Base64 = C_enc.Base64;
		var C_algo = C.algo;
		var EvpKDF = C_algo.EvpKDF;

		/**
		 * Abstract base cipher template.
		 *
		 * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
		 * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
		 * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
		 * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
		 */
		var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
			/**
			 * Configuration options.
			 *
			 * @property {WordArray} iv The IV to use for this operation.
			 */
			cfg: Base.extend(),

			/**
			 * Creates this cipher in encryption mode.
			 *
			 * @param {WordArray} key The key.
			 * @param {Object} cfg (Optional) The configuration options to use for this operation.
			 *
			 * @return {Cipher} A cipher instance.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
			 */
			createEncryptor: function (key, cfg) {
				return this.create(this._ENC_XFORM_MODE, key, cfg);
			},

			/**
			 * Creates this cipher in decryption mode.
			 *
			 * @param {WordArray} key The key.
			 * @param {Object} cfg (Optional) The configuration options to use for this operation.
			 *
			 * @return {Cipher} A cipher instance.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
			 */
			createDecryptor: function (key, cfg) {
				return this.create(this._DEC_XFORM_MODE, key, cfg);
			},

			/**
			 * Initializes a newly created cipher.
			 *
			 * @param {number} xformMode Either the encryption or decryption transormation mode constant.
			 * @param {WordArray} key The key.
			 * @param {Object} cfg (Optional) The configuration options to use for this operation.
			 *
			 * @example
			 *
			 *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
			 */
			init: function (xformMode, key, cfg) {
				// Apply config defaults
				this.cfg = this.cfg.extend(cfg);

				// Store transform mode and key
				this._xformMode = xformMode;
				this._key = key;

				// Set initial values
				this.reset();
			},

			/**
			 * Resets this cipher to its initial state.
			 *
			 * @example
			 *
			 *     cipher.reset();
			 */
			reset: function () {
				// Reset data buffer
				BufferedBlockAlgorithm.reset.call(this);

				// Perform concrete-cipher logic
				this._doReset();
			},

			/**
			 * Adds data to be encrypted or decrypted.
			 *
			 * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
			 *
			 * @return {WordArray} The data after processing.
			 *
			 * @example
			 *
			 *     var encrypted = cipher.process('data');
			 *     var encrypted = cipher.process(wordArray);
			 */
			process: function (dataUpdate) {
				// Append
				this._append(dataUpdate);

				// Process available blocks
				return this._process();
			},

			/**
			 * Finalizes the encryption or decryption process.
			 * Note that the finalize operation is effectively a destructive, read-once operation.
			 *
			 * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
			 *
			 * @return {WordArray} The data after final processing.
			 *
			 * @example
			 *
			 *     var encrypted = cipher.finalize();
			 *     var encrypted = cipher.finalize('data');
			 *     var encrypted = cipher.finalize(wordArray);
			 */
			finalize: function (dataUpdate) {
				// Final data update
				if (dataUpdate) {
					this._append(dataUpdate);
				}

				// Perform concrete-cipher logic
				var finalProcessedData = this._doFinalize();

				return finalProcessedData;
			},

			keySize: 128 / 32,

			ivSize: 128 / 32,

			_ENC_XFORM_MODE: 1,

			_DEC_XFORM_MODE: 2,

			/**
			 * Creates shortcut functions to a cipher's object interface.
			 *
			 * @param {Cipher} cipher The cipher to create a helper for.
			 *
			 * @return {Object} An object with encrypt and decrypt shortcut functions.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
			 */
			_createHelper: (function () {
				function selectCipherStrategy(key) {
					if (typeof key == 'string') {
						return PasswordBasedCipher;
					} else {
						return SerializableCipher;
					}
				}

				return function (cipher) {
					return {
						encrypt: function (message, key, cfg) {
							return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
						},

						decrypt: function (ciphertext, key, cfg) {
							return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
						}
					};
				};
			}())
		});

		/**
		 * Abstract base stream cipher template.
		 *
		 * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
		 */
		var StreamCipher = C_lib.StreamCipher = Cipher.extend({
			_doFinalize: function () {
				// Process partial blocks
				var finalProcessedBlocks = this._process(!!'flush');

				return finalProcessedBlocks;
			},

			blockSize: 1
		});

		/**
		 * Mode namespace.
		 */
		var C_mode = C.mode = {};

		/**
		 * Abstract base block cipher mode template.
		 */
		var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
			/**
			 * Creates this mode for encryption.
			 *
			 * @param {Cipher} cipher A block cipher instance.
			 * @param {Array} iv The IV words.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
			 */
			createEncryptor: function (cipher, iv) {
				return this.Encryptor.create(cipher, iv);
			},

			/**
			 * Creates this mode for decryption.
			 *
			 * @param {Cipher} cipher A block cipher instance.
			 * @param {Array} iv The IV words.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
			 */
			createDecryptor: function (cipher, iv) {
				return this.Decryptor.create(cipher, iv);
			},

			/**
			 * Initializes a newly created mode.
			 *
			 * @param {Cipher} cipher A block cipher instance.
			 * @param {Array} iv The IV words.
			 *
			 * @example
			 *
			 *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
			 */
			init: function (cipher, iv) {
				this._cipher = cipher;
				this._iv = iv;
			}
		});

		/**
		 * Cipher Block Chaining mode.
		 */
		var CBC = C_mode.CBC = (function () {
			/**
			 * Abstract base CBC mode.
			 */
			var CBC = BlockCipherMode.extend();

			/**
			 * CBC encryptor.
			 */
			CBC.Encryptor = CBC.extend({
				/**
				 * Processes the data block at offset.
				 *
				 * @param {Array} words The data words to operate on.
				 * @param {number} offset The offset where the block starts.
				 *
				 * @example
				 *
				 *     mode.processBlock(data.words, offset);
				 */
				processBlock: function (words, offset) {
					// Shortcuts
					var cipher = this._cipher;
					var blockSize = cipher.blockSize;

					// XOR and encrypt
					xorBlock.call(this, words, offset, blockSize);
					cipher.encryptBlock(words, offset);

					// Remember this block to use with next block
					this._prevBlock = words.slice(offset, offset + blockSize);
				}
			});

			/**
			 * CBC decryptor.
			 */
			CBC.Decryptor = CBC.extend({
				/**
				 * Processes the data block at offset.
				 *
				 * @param {Array} words The data words to operate on.
				 * @param {number} offset The offset where the block starts.
				 *
				 * @example
				 *
				 *     mode.processBlock(data.words, offset);
				 */
				processBlock: function (words, offset) {
					// Shortcuts
					var cipher = this._cipher;
					var blockSize = cipher.blockSize;

					// Remember this block to use with next block
					var thisBlock = words.slice(offset, offset + blockSize);

					// Decrypt and XOR
					cipher.decryptBlock(words, offset);
					xorBlock.call(this, words, offset, blockSize);

					// This block becomes the previous block
					this._prevBlock = thisBlock;
				}
			});

			function xorBlock(words, offset, blockSize) {
				// Shortcut
				var iv = this._iv;

				// Choose mixing block
				if (iv) {
					var block = iv;

					// Remove IV for subsequent blocks
					this._iv = undefined;
				} else {
					var block = this._prevBlock;
				}

				// XOR blocks
				for (var i = 0; i < blockSize; i++) {
					words[offset + i] ^= block[i];
				}
			}

			return CBC;
		}());

		/**
		 * Padding namespace.
		 */
		var C_pad = C.pad = {};

		/**
		 * PKCS #5/7 padding strategy.
		 */
		var Pkcs7 = C_pad.Pkcs7 = {
			/**
			 * Pads data using the algorithm defined in PKCS #5/7.
			 *
			 * @param {WordArray} data The data to pad.
			 * @param {number} blockSize The multiple that the data should be padded to.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
			 */
			pad: function (data, blockSize) {
				// Shortcut
				var blockSizeBytes = blockSize * 4;

				// Count padding bytes
				var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

				// Create padding word
				var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

				// Create padding
				var paddingWords = [];
				for (var i = 0; i < nPaddingBytes; i += 4) {
					paddingWords.push(paddingWord);
				}
				var padding = WordArray.create(paddingWords, nPaddingBytes);

				// Add padding
				data.concat(padding);
			},

			/**
			 * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
			 *
			 * @param {WordArray} data The data to unpad.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     CryptoJS.pad.Pkcs7.unpad(wordArray);
			 */
			unpad: function (data) {
				// Get number of padding bytes from last byte
				var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

				// Remove padding
				data.sigBytes -= nPaddingBytes;
			}
		};

		/**
		 * Abstract base block cipher template.
		 *
		 * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
		 */
		var BlockCipher = C_lib.BlockCipher = Cipher.extend({
			/**
			 * Configuration options.
			 *
			 * @property {Mode} mode The block mode to use. Default: CBC
			 * @property {Padding} padding The padding strategy to use. Default: Pkcs7
			 */
			cfg: Cipher.cfg.extend({
				mode: CBC,
				padding: Pkcs7
			}),

			reset: function () {
				// Reset cipher
				Cipher.reset.call(this);

				// Shortcuts
				var cfg = this.cfg;
				var iv = cfg.iv;
				var mode = cfg.mode;

				// Reset block mode
				if (this._xformMode == this._ENC_XFORM_MODE) {
					var modeCreator = mode.createEncryptor;
				} else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
					var modeCreator = mode.createDecryptor;

					// Keep at least one block in the buffer for unpadding
					this._minBufferSize = 1;
				}
				this._mode = modeCreator.call(mode, this, iv && iv.words);
			},

			_doProcessBlock: function (words, offset) {
				this._mode.processBlock(words, offset);
			},

			_doFinalize: function () {
				// Shortcut
				var padding = this.cfg.padding;

				// Finalize
				if (this._xformMode == this._ENC_XFORM_MODE) {
					// Pad data
					padding.pad(this._data, this.blockSize);

					// Process final blocks
					var finalProcessedBlocks = this._process(!!'flush');
				} else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
					// Process final blocks
					var finalProcessedBlocks = this._process(!!'flush');

					// Unpad data
					padding.unpad(finalProcessedBlocks);
				}

				return finalProcessedBlocks;
			},

			blockSize: 128 / 32
		});

		/**
		 * A collection of cipher parameters.
		 *
		 * @property {WordArray} ciphertext The raw ciphertext.
		 * @property {WordArray} key The key to this ciphertext.
		 * @property {WordArray} iv The IV used in the ciphering operation.
		 * @property {WordArray} salt The salt used with a key derivation function.
		 * @property {Cipher} algorithm The cipher algorithm.
		 * @property {Mode} mode The block mode used in the ciphering operation.
		 * @property {Padding} padding The padding scheme used in the ciphering operation.
		 * @property {number} blockSize The block size of the cipher.
		 * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
		 */
		var CipherParams = C_lib.CipherParams = Base.extend({
			/**
			 * Initializes a newly created cipher params object.
			 *
			 * @param {Object} cipherParams An object with any of the possible cipher parameters.
			 *
			 * @example
			 *
			 *     var cipherParams = CryptoJS.lib.CipherParams.create({
			 *         ciphertext: ciphertextWordArray,
			 *         key: keyWordArray,
			 *         iv: ivWordArray,
			 *         salt: saltWordArray,
			 *         algorithm: CryptoJS.algo.AES,
			 *         mode: CryptoJS.mode.CBC,
			 *         padding: CryptoJS.pad.PKCS7,
			 *         blockSize: 4,
			 *         formatter: CryptoJS.format.OpenSSL
			 *     });
			 */
			init: function (cipherParams) {
				this.mixIn(cipherParams);
			},

			/**
			 * Converts this cipher params object to a string.
			 *
			 * @param {Format} formatter (Optional) The formatting strategy to use.
			 *
			 * @return {string} The stringified cipher params.
			 *
			 * @throws Error If neither the formatter nor the default formatter is set.
			 *
			 * @example
			 *
			 *     var string = cipherParams + '';
			 *     var string = cipherParams.toString();
			 *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
			 */
			toString: function (formatter) {
				return (formatter || this.formatter).stringify(this);
			}
		});

		/**
		 * Format namespace.
		 */
		var C_format = C.format = {};

		/**
		 * OpenSSL formatting strategy.
		 */
		var OpenSSLFormatter = C_format.OpenSSL = {
			/**
			 * Converts a cipher params object to an OpenSSL-compatible string.
			 *
			 * @param {CipherParams} cipherParams The cipher params object.
			 *
			 * @return {string} The OpenSSL-compatible string.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
			 */
			stringify: function (cipherParams) {
				// Shortcuts
				var ciphertext = cipherParams.ciphertext;
				var salt = cipherParams.salt;

				// Format
				if (salt) {
					var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
				} else {
					var wordArray = ciphertext;
				}

				return wordArray.toString(Base64);
			},

			/**
			 * Converts an OpenSSL-compatible string to a cipher params object.
			 *
			 * @param {string} openSSLStr The OpenSSL-compatible string.
			 *
			 * @return {CipherParams} The cipher params object.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
			 */
			parse: function (openSSLStr) {
				// Parse base64
				var ciphertext = Base64.parse(openSSLStr);

				// Shortcut
				var ciphertextWords = ciphertext.words;

				// Test for salt
				if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
					// Extract salt
					var salt = WordArray.create(ciphertextWords.slice(2, 4));

					// Remove salt from ciphertext
					ciphertextWords.splice(0, 4);
					ciphertext.sigBytes -= 16;
				}

				return CipherParams.create({ ciphertext: ciphertext, salt: salt });
			}
		};

		/**
		 * A cipher wrapper that returns ciphertext as a serializable cipher params object.
		 */
		var SerializableCipher = C_lib.SerializableCipher = Base.extend({
			/**
			 * Configuration options.
			 *
			 * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
			 */
			cfg: Base.extend({
				format: OpenSSLFormatter
			}),

			/**
			 * Encrypts a message.
			 *
			 * @param {Cipher} cipher The cipher algorithm to use.
			 * @param {WordArray|string} message The message to encrypt.
			 * @param {WordArray} key The key.
			 * @param {Object} cfg (Optional) The configuration options to use for this operation.
			 *
			 * @return {CipherParams} A cipher params object.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
			 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
			 *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
			 */
			encrypt: function (cipher, message, key, cfg) {
				// Apply config defaults
				cfg = this.cfg.extend(cfg);

				// Encrypt
				var encryptor = cipher.createEncryptor(key, cfg);
				var ciphertext = encryptor.finalize(message);

				// Shortcut
				var cipherCfg = encryptor.cfg;

				// Create and return serializable cipher params
				return CipherParams.create({
					ciphertext: ciphertext,
					key: key,
					iv: cipherCfg.iv,
					algorithm: cipher,
					mode: cipherCfg.mode,
					padding: cipherCfg.padding,
					blockSize: cipher.blockSize,
					formatter: cfg.format
				});
			},

			/**
			 * Decrypts serialized ciphertext.
			 *
			 * @param {Cipher} cipher The cipher algorithm to use.
			 * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
			 * @param {WordArray} key The key.
			 * @param {Object} cfg (Optional) The configuration options to use for this operation.
			 *
			 * @return {WordArray} The plaintext.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
			 *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
			 */
			decrypt: function (cipher, ciphertext, key, cfg) {
				// Apply config defaults
				cfg = this.cfg.extend(cfg);

				// Convert string to CipherParams
				ciphertext = this._parse(ciphertext, cfg.format);

				// Decrypt
				var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

				return plaintext;
			},

			/**
			 * Converts serialized ciphertext to CipherParams,
			 * else assumed CipherParams already and returns ciphertext unchanged.
			 *
			 * @param {CipherParams|string} ciphertext The ciphertext.
			 * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
			 *
			 * @return {CipherParams} The unserialized ciphertext.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
			 */
			_parse: function (ciphertext, format) {
				if (typeof ciphertext == 'string') {
					return format.parse(ciphertext, this);
				} else {
					return ciphertext;
				}
			}
		});

		/**
		 * Key derivation function namespace.
		 */
		var C_kdf = C.kdf = {};

		/**
		 * OpenSSL key derivation function.
		 */
		var OpenSSLKdf = C_kdf.OpenSSL = {
			/**
			 * Derives a key and IV from a password.
			 *
			 * @param {string} password The password to derive from.
			 * @param {number} keySize The size in words of the key to generate.
			 * @param {number} ivSize The size in words of the IV to generate.
			 * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
			 *
			 * @return {CipherParams} A cipher params object with the key, IV, and salt.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
			 *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
			 */
			execute: function (password, keySize, ivSize, salt) {
				// Generate random salt
				if (!salt) {
					salt = WordArray.random(64 / 8);
				}

				// Derive key and IV
				var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

				// Separate key and IV
				var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
				key.sigBytes = keySize * 4;

				// Return params
				return CipherParams.create({ key: key, iv: iv, salt: salt });
			}
		};

		/**
		 * A serializable cipher wrapper that derives the key from a password,
		 * and returns ciphertext as a serializable cipher params object.
		 */
		var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
			/**
			 * Configuration options.
			 *
			 * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
			 */
			cfg: SerializableCipher.cfg.extend({
				kdf: OpenSSLKdf
			}),

			/**
			 * Encrypts a message using a password.
			 *
			 * @param {Cipher} cipher The cipher algorithm to use.
			 * @param {WordArray|string} message The message to encrypt.
			 * @param {string} password The password.
			 * @param {Object} cfg (Optional) The configuration options to use for this operation.
			 *
			 * @return {CipherParams} A cipher params object.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
			 *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
			 */
			encrypt: function (cipher, message, password, cfg) {
				// Apply config defaults
				cfg = this.cfg.extend(cfg);

				// Derive key and other params
				var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

				// Add IV to config
				cfg.iv = derivedParams.iv;

				// Encrypt
				var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

				// Mix in derived params
				ciphertext.mixIn(derivedParams);

				return ciphertext;
			},

			/**
			 * Decrypts serialized ciphertext using a password.
			 *
			 * @param {Cipher} cipher The cipher algorithm to use.
			 * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
			 * @param {string} password The password.
			 * @param {Object} cfg (Optional) The configuration options to use for this operation.
			 *
			 * @return {WordArray} The plaintext.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
			 *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
			 */
			decrypt: function (cipher, ciphertext, password, cfg) {
				// Apply config defaults
				cfg = this.cfg.extend(cfg);

				// Convert string to CipherParams
				ciphertext = this._parse(ciphertext, cfg.format);

				// Derive key and other params
				var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

				// Add IV to config
				cfg.iv = derivedParams.iv;

				// Decrypt
				var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

				return plaintext;
			}
		});
	}());


	/**
	 * Cipher Feedback block mode.
	 */
	CryptoJS.mode.CFB = (function () {
		var CFB = CryptoJS.lib.BlockCipherMode.extend();

		CFB.Encryptor = CFB.extend({
			processBlock: function (words, offset) {
				// Shortcuts
				var cipher = this._cipher;
				var blockSize = cipher.blockSize;

				generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

				// Remember this block to use with next block
				this._prevBlock = words.slice(offset, offset + blockSize);
			}
		});

		CFB.Decryptor = CFB.extend({
			processBlock: function (words, offset) {
				// Shortcuts
				var cipher = this._cipher;
				var blockSize = cipher.blockSize;

				// Remember this block to use with next block
				var thisBlock = words.slice(offset, offset + blockSize);

				generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

				// This block becomes the previous block
				this._prevBlock = thisBlock;
			}
		});

		function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
			// Shortcut
			var iv = this._iv;

			// Generate keystream
			if (iv) {
				var keystream = iv.slice(0);

				// Remove IV for subsequent blocks
				this._iv = undefined;
			} else {
				var keystream = this._prevBlock;
			}
			cipher.encryptBlock(keystream, 0);

			// Encrypt
			for (var i = 0; i < blockSize; i++) {
				words[offset + i] ^= keystream[i];
			}
		}

		return CFB;
	}());


	/**
	 * Electronic Codebook block mode.
	 */
	CryptoJS.mode.ECB = (function () {
		var ECB = CryptoJS.lib.BlockCipherMode.extend();

		ECB.Encryptor = ECB.extend({
			processBlock: function (words, offset) {
				this._cipher.encryptBlock(words, offset);
			}
		});

		ECB.Decryptor = ECB.extend({
			processBlock: function (words, offset) {
				this._cipher.decryptBlock(words, offset);
			}
		});

		return ECB;
	}());


	/**
	 * ANSI X.923 padding strategy.
	 */
	CryptoJS.pad.AnsiX923 = {
		pad: function (data, blockSize) {
			// Shortcuts
			var dataSigBytes = data.sigBytes;
			var blockSizeBytes = blockSize * 4;

			// Count padding bytes
			var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

			// Compute last byte position
			var lastBytePos = dataSigBytes + nPaddingBytes - 1;

			// Pad
			data.clamp();
			data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
			data.sigBytes += nPaddingBytes;
		},

		unpad: function (data) {
			// Get number of padding bytes from last byte
			var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

			// Remove padding
			data.sigBytes -= nPaddingBytes;
		}
	};


	/**
	 * ISO 10126 padding strategy.
	 */
	CryptoJS.pad.Iso10126 = {
		pad: function (data, blockSize) {
			// Shortcut
			var blockSizeBytes = blockSize * 4;

			// Count padding bytes
			var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

			// Pad
			data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
				concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
		},

		unpad: function (data) {
			// Get number of padding bytes from last byte
			var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

			// Remove padding
			data.sigBytes -= nPaddingBytes;
		}
	};


	/**
	 * ISO/IEC 9797-1 Padding Method 2.
	 */
	CryptoJS.pad.Iso97971 = {
		pad: function (data, blockSize) {
			// Add 0x80 byte
			data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

			// Zero pad the rest
			CryptoJS.pad.ZeroPadding.pad(data, blockSize);
		},

		unpad: function (data) {
			// Remove zero padding
			CryptoJS.pad.ZeroPadding.unpad(data);

			// Remove one more byte -- the 0x80 byte
			data.sigBytes--;
		}
	};


	/**
	 * Output Feedback block mode.
	 */
	CryptoJS.mode.OFB = (function () {
		var OFB = CryptoJS.lib.BlockCipherMode.extend();

		var Encryptor = OFB.Encryptor = OFB.extend({
			processBlock: function (words, offset) {
				// Shortcuts
				var cipher = this._cipher
				var blockSize = cipher.blockSize;
				var iv = this._iv;
				var keystream = this._keystream;

				// Generate keystream
				if (iv) {
					keystream = this._keystream = iv.slice(0);

					// Remove IV for subsequent blocks
					this._iv = undefined;
				}
				cipher.encryptBlock(keystream, 0);

				// Encrypt
				for (var i = 0; i < blockSize; i++) {
					words[offset + i] ^= keystream[i];
				}
			}
		});

		OFB.Decryptor = Encryptor;

		return OFB;
	}());


	/**
	 * A noop padding strategy.
	 */
	CryptoJS.pad.NoPadding = {
		pad: function () {
		},

		unpad: function () {
		}
	};


	(function (undefined) {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var CipherParams = C_lib.CipherParams;
		var C_enc = C.enc;
		var Hex = C_enc.Hex;
		var C_format = C.format;

		var HexFormatter = C_format.Hex = {
			/**
			 * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
			 *
			 * @param {CipherParams} cipherParams The cipher params object.
			 *
			 * @return {string} The hexadecimally encoded string.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
			 */
			stringify: function (cipherParams) {
				return cipherParams.ciphertext.toString(Hex);
			},

			/**
			 * Converts a hexadecimally encoded ciphertext string to a cipher params object.
			 *
			 * @param {string} input The hexadecimally encoded string.
			 *
			 * @return {CipherParams} The cipher params object.
			 *
			 * @static
			 *
			 * @example
			 *
			 *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
			 */
			parse: function (input) {
				var ciphertext = Hex.parse(input);
				return CipherParams.create({ ciphertext: ciphertext });
			}
		};
	}());


	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var BlockCipher = C_lib.BlockCipher;
		var C_algo = C.algo;

		// Lookup tables
		var SBOX = [];
		var INV_SBOX = [];
		var SUB_MIX_0 = [];
		var SUB_MIX_1 = [];
		var SUB_MIX_2 = [];
		var SUB_MIX_3 = [];
		var INV_SUB_MIX_0 = [];
		var INV_SUB_MIX_1 = [];
		var INV_SUB_MIX_2 = [];
		var INV_SUB_MIX_3 = [];

		// Compute lookup tables
		(function () {
			// Compute double table
			var d = [];
			for (var i = 0; i < 256; i++) {
				if (i < 128) {
					d[i] = i << 1;
				} else {
					d[i] = (i << 1) ^ 0x11b;
				}
			}

			// Walk GF(2^8)
			var x = 0;
			var xi = 0;
			for (var i = 0; i < 256; i++) {
				// Compute sbox
				var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
				sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
				SBOX[x] = sx;
				INV_SBOX[sx] = x;

				// Compute multiplication
				var x2 = d[x];
				var x4 = d[x2];
				var x8 = d[x4];

				// Compute sub bytes, mix columns tables
				var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
				SUB_MIX_0[x] = (t << 24) | (t >>> 8);
				SUB_MIX_1[x] = (t << 16) | (t >>> 16);
				SUB_MIX_2[x] = (t << 8) | (t >>> 24);
				SUB_MIX_3[x] = t;

				// Compute inv sub bytes, inv mix columns tables
				var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
				INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
				INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
				INV_SUB_MIX_2[sx] = (t << 8) | (t >>> 24);
				INV_SUB_MIX_3[sx] = t;

				// Compute next counter
				if (!x) {
					x = xi = 1;
				} else {
					x = x2 ^ d[d[d[x8 ^ x2]]];
					xi ^= d[d[xi]];
				}
			}
		}());

		// Precomputed Rcon lookup
		var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

		/**
		 * AES block cipher algorithm.
		 */
		var AES = C_algo.AES = BlockCipher.extend({
			_doReset: function () {
				// Shortcuts
				var key = this._key;
				var keyWords = key.words;
				var keySize = key.sigBytes / 4;

				// Compute number of rounds
				var nRounds = this._nRounds = keySize + 6

				// Compute number of key schedule rows
				var ksRows = (nRounds + 1) * 4;

				// Compute key schedule
				var keySchedule = this._keySchedule = [];
				for (var ksRow = 0; ksRow < ksRows; ksRow++) {
					if (ksRow < keySize) {
						keySchedule[ksRow] = keyWords[ksRow];
					} else {
						var t = keySchedule[ksRow - 1];

						if (!(ksRow % keySize)) {
							// Rot word
							t = (t << 8) | (t >>> 24);

							// Sub word
							t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

							// Mix Rcon
							t ^= RCON[(ksRow / keySize) | 0] << 24;
						} else if (keySize > 6 && ksRow % keySize == 4) {
							// Sub word
							t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
						}

						keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
					}
				}

				// Compute inv key schedule
				var invKeySchedule = this._invKeySchedule = [];
				for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
					var ksRow = ksRows - invKsRow;

					if (invKsRow % 4) {
						var t = keySchedule[ksRow];
					} else {
						var t = keySchedule[ksRow - 4];
					}

					if (invKsRow < 4 || ksRow <= 4) {
						invKeySchedule[invKsRow] = t;
					} else {
						invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
							INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
					}
				}
			},

			encryptBlock: function (M, offset) {
				this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
			},

			decryptBlock: function (M, offset) {
				// Swap 2nd and 4th rows
				var t = M[offset + 1];
				M[offset + 1] = M[offset + 3];
				M[offset + 3] = t;

				this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

				// Inv swap 2nd and 4th rows
				var t = M[offset + 1];
				M[offset + 1] = M[offset + 3];
				M[offset + 3] = t;
			},

			_doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
				// Shortcut
				var nRounds = this._nRounds;

				// Get input, add round key
				var s0 = M[offset] ^ keySchedule[0];
				var s1 = M[offset + 1] ^ keySchedule[1];
				var s2 = M[offset + 2] ^ keySchedule[2];
				var s3 = M[offset + 3] ^ keySchedule[3];

				// Key schedule row counter
				var ksRow = 4;

				// Rounds
				for (var round = 1; round < nRounds; round++) {
					// Shift rows, sub bytes, mix columns, add round key
					var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
					var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
					var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
					var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

					// Update state
					s0 = t0;
					s1 = t1;
					s2 = t2;
					s3 = t3;
				}

				// Shift rows, sub bytes, add round key
				var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
				var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
				var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
				var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

				// Set output
				M[offset] = t0;
				M[offset + 1] = t1;
				M[offset + 2] = t2;
				M[offset + 3] = t3;
			},

			keySize: 256 / 32
		});

		/**
		 * Shortcut functions to the cipher's object interface.
		 *
		 * @example
		 *
		 *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
		 *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
		 */
		C.AES = BlockCipher._createHelper(AES);
	}());


	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var WordArray = C_lib.WordArray;
		var BlockCipher = C_lib.BlockCipher;
		var C_algo = C.algo;

		// Permuted Choice 1 constants
		var PC1 = [
			57, 49, 41, 33, 25, 17, 9, 1,
			58, 50, 42, 34, 26, 18, 10, 2,
			59, 51, 43, 35, 27, 19, 11, 3,
			60, 52, 44, 36, 63, 55, 47, 39,
			31, 23, 15, 7, 62, 54, 46, 38,
			30, 22, 14, 6, 61, 53, 45, 37,
			29, 21, 13, 5, 28, 20, 12, 4
		];

		// Permuted Choice 2 constants
		var PC2 = [
			14, 17, 11, 24, 1, 5,
			3, 28, 15, 6, 21, 10,
			23, 19, 12, 4, 26, 8,
			16, 7, 27, 20, 13, 2,
			41, 52, 31, 37, 47, 55,
			30, 40, 51, 45, 33, 48,
			44, 49, 39, 56, 34, 53,
			46, 42, 50, 36, 29, 32
		];

		// Cumulative bit shift constants
		var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

		// SBOXes and round permutation constants
		var SBOX_P = [
			{
				0x0: 0x808200,
				0x10000000: 0x8000,
				0x20000000: 0x808002,
				0x30000000: 0x2,
				0x40000000: 0x200,
				0x50000000: 0x808202,
				0x60000000: 0x800202,
				0x70000000: 0x800000,
				0x80000000: 0x202,
				0x90000000: 0x800200,
				0xa0000000: 0x8200,
				0xb0000000: 0x808000,
				0xc0000000: 0x8002,
				0xd0000000: 0x800002,
				0xe0000000: 0x0,
				0xf0000000: 0x8202,
				0x8000000: 0x0,
				0x18000000: 0x808202,
				0x28000000: 0x8202,
				0x38000000: 0x8000,
				0x48000000: 0x808200,
				0x58000000: 0x200,
				0x68000000: 0x808002,
				0x78000000: 0x2,
				0x88000000: 0x800200,
				0x98000000: 0x8200,
				0xa8000000: 0x808000,
				0xb8000000: 0x800202,
				0xc8000000: 0x800002,
				0xd8000000: 0x8002,
				0xe8000000: 0x202,
				0xf8000000: 0x800000,
				0x1: 0x8000,
				0x10000001: 0x2,
				0x20000001: 0x808200,
				0x30000001: 0x800000,
				0x40000001: 0x808002,
				0x50000001: 0x8200,
				0x60000001: 0x200,
				0x70000001: 0x800202,
				0x80000001: 0x808202,
				0x90000001: 0x808000,
				0xa0000001: 0x800002,
				0xb0000001: 0x8202,
				0xc0000001: 0x202,
				0xd0000001: 0x800200,
				0xe0000001: 0x8002,
				0xf0000001: 0x0,
				0x8000001: 0x808202,
				0x18000001: 0x808000,
				0x28000001: 0x800000,
				0x38000001: 0x200,
				0x48000001: 0x8000,
				0x58000001: 0x800002,
				0x68000001: 0x2,
				0x78000001: 0x8202,
				0x88000001: 0x8002,
				0x98000001: 0x800202,
				0xa8000001: 0x202,
				0xb8000001: 0x808200,
				0xc8000001: 0x800200,
				0xd8000001: 0x0,
				0xe8000001: 0x8200,
				0xf8000001: 0x808002
			},
			{
				0x0: 0x40084010,
				0x1000000: 0x4000,
				0x2000000: 0x80000,
				0x3000000: 0x40080010,
				0x4000000: 0x40000010,
				0x5000000: 0x40084000,
				0x6000000: 0x40004000,
				0x7000000: 0x10,
				0x8000000: 0x84000,
				0x9000000: 0x40004010,
				0xa000000: 0x40000000,
				0xb000000: 0x84010,
				0xc000000: 0x80010,
				0xd000000: 0x0,
				0xe000000: 0x4010,
				0xf000000: 0x40080000,
				0x800000: 0x40004000,
				0x1800000: 0x84010,
				0x2800000: 0x10,
				0x3800000: 0x40004010,
				0x4800000: 0x40084010,
				0x5800000: 0x40000000,
				0x6800000: 0x80000,
				0x7800000: 0x40080010,
				0x8800000: 0x80010,
				0x9800000: 0x0,
				0xa800000: 0x4000,
				0xb800000: 0x40080000,
				0xc800000: 0x40000010,
				0xd800000: 0x84000,
				0xe800000: 0x40084000,
				0xf800000: 0x4010,
				0x10000000: 0x0,
				0x11000000: 0x40080010,
				0x12000000: 0x40004010,
				0x13000000: 0x40084000,
				0x14000000: 0x40080000,
				0x15000000: 0x10,
				0x16000000: 0x84010,
				0x17000000: 0x4000,
				0x18000000: 0x4010,
				0x19000000: 0x80000,
				0x1a000000: 0x80010,
				0x1b000000: 0x40000010,
				0x1c000000: 0x84000,
				0x1d000000: 0x40004000,
				0x1e000000: 0x40000000,
				0x1f000000: 0x40084010,
				0x10800000: 0x84010,
				0x11800000: 0x80000,
				0x12800000: 0x40080000,
				0x13800000: 0x4000,
				0x14800000: 0x40004000,
				0x15800000: 0x40084010,
				0x16800000: 0x10,
				0x17800000: 0x40000000,
				0x18800000: 0x40084000,
				0x19800000: 0x40000010,
				0x1a800000: 0x40004010,
				0x1b800000: 0x80010,
				0x1c800000: 0x0,
				0x1d800000: 0x4010,
				0x1e800000: 0x40080010,
				0x1f800000: 0x84000
			},
			{
				0x0: 0x104,
				0x100000: 0x0,
				0x200000: 0x4000100,
				0x300000: 0x10104,
				0x400000: 0x10004,
				0x500000: 0x4000004,
				0x600000: 0x4010104,
				0x700000: 0x4010000,
				0x800000: 0x4000000,
				0x900000: 0x4010100,
				0xa00000: 0x10100,
				0xb00000: 0x4010004,
				0xc00000: 0x4000104,
				0xd00000: 0x10000,
				0xe00000: 0x4,
				0xf00000: 0x100,
				0x80000: 0x4010100,
				0x180000: 0x4010004,
				0x280000: 0x0,
				0x380000: 0x4000100,
				0x480000: 0x4000004,
				0x580000: 0x10000,
				0x680000: 0x10004,
				0x780000: 0x104,
				0x880000: 0x4,
				0x980000: 0x100,
				0xa80000: 0x4010000,
				0xb80000: 0x10104,
				0xc80000: 0x10100,
				0xd80000: 0x4000104,
				0xe80000: 0x4010104,
				0xf80000: 0x4000000,
				0x1000000: 0x4010100,
				0x1100000: 0x10004,
				0x1200000: 0x10000,
				0x1300000: 0x4000100,
				0x1400000: 0x100,
				0x1500000: 0x4010104,
				0x1600000: 0x4000004,
				0x1700000: 0x0,
				0x1800000: 0x4000104,
				0x1900000: 0x4000000,
				0x1a00000: 0x4,
				0x1b00000: 0x10100,
				0x1c00000: 0x4010000,
				0x1d00000: 0x104,
				0x1e00000: 0x10104,
				0x1f00000: 0x4010004,
				0x1080000: 0x4000000,
				0x1180000: 0x104,
				0x1280000: 0x4010100,
				0x1380000: 0x0,
				0x1480000: 0x10004,
				0x1580000: 0x4000100,
				0x1680000: 0x100,
				0x1780000: 0x4010004,
				0x1880000: 0x10000,
				0x1980000: 0x4010104,
				0x1a80000: 0x10104,
				0x1b80000: 0x4000004,
				0x1c80000: 0x4000104,
				0x1d80000: 0x4010000,
				0x1e80000: 0x4,
				0x1f80000: 0x10100
			},
			{
				0x0: 0x80401000,
				0x10000: 0x80001040,
				0x20000: 0x401040,
				0x30000: 0x80400000,
				0x40000: 0x0,
				0x50000: 0x401000,
				0x60000: 0x80000040,
				0x70000: 0x400040,
				0x80000: 0x80000000,
				0x90000: 0x400000,
				0xa0000: 0x40,
				0xb0000: 0x80001000,
				0xc0000: 0x80400040,
				0xd0000: 0x1040,
				0xe0000: 0x1000,
				0xf0000: 0x80401040,
				0x8000: 0x80001040,
				0x18000: 0x40,
				0x28000: 0x80400040,
				0x38000: 0x80001000,
				0x48000: 0x401000,
				0x58000: 0x80401040,
				0x68000: 0x0,
				0x78000: 0x80400000,
				0x88000: 0x1000,
				0x98000: 0x80401000,
				0xa8000: 0x400000,
				0xb8000: 0x1040,
				0xc8000: 0x80000000,
				0xd8000: 0x400040,
				0xe8000: 0x401040,
				0xf8000: 0x80000040,
				0x100000: 0x400040,
				0x110000: 0x401000,
				0x120000: 0x80000040,
				0x130000: 0x0,
				0x140000: 0x1040,
				0x150000: 0x80400040,
				0x160000: 0x80401000,
				0x170000: 0x80001040,
				0x180000: 0x80401040,
				0x190000: 0x80000000,
				0x1a0000: 0x80400000,
				0x1b0000: 0x401040,
				0x1c0000: 0x80001000,
				0x1d0000: 0x400000,
				0x1e0000: 0x40,
				0x1f0000: 0x1000,
				0x108000: 0x80400000,
				0x118000: 0x80401040,
				0x128000: 0x0,
				0x138000: 0x401000,
				0x148000: 0x400040,
				0x158000: 0x80000000,
				0x168000: 0x80001040,
				0x178000: 0x40,
				0x188000: 0x80000040,
				0x198000: 0x1000,
				0x1a8000: 0x80001000,
				0x1b8000: 0x80400040,
				0x1c8000: 0x1040,
				0x1d8000: 0x80401000,
				0x1e8000: 0x400000,
				0x1f8000: 0x401040
			},
			{
				0x0: 0x80,
				0x1000: 0x1040000,
				0x2000: 0x40000,
				0x3000: 0x20000000,
				0x4000: 0x20040080,
				0x5000: 0x1000080,
				0x6000: 0x21000080,
				0x7000: 0x40080,
				0x8000: 0x1000000,
				0x9000: 0x20040000,
				0xa000: 0x20000080,
				0xb000: 0x21040080,
				0xc000: 0x21040000,
				0xd000: 0x0,
				0xe000: 0x1040080,
				0xf000: 0x21000000,
				0x800: 0x1040080,
				0x1800: 0x21000080,
				0x2800: 0x80,
				0x3800: 0x1040000,
				0x4800: 0x40000,
				0x5800: 0x20040080,
				0x6800: 0x21040000,
				0x7800: 0x20000000,
				0x8800: 0x20040000,
				0x9800: 0x0,
				0xa800: 0x21040080,
				0xb800: 0x1000080,
				0xc800: 0x20000080,
				0xd800: 0x21000000,
				0xe800: 0x1000000,
				0xf800: 0x40080,
				0x10000: 0x40000,
				0x11000: 0x80,
				0x12000: 0x20000000,
				0x13000: 0x21000080,
				0x14000: 0x1000080,
				0x15000: 0x21040000,
				0x16000: 0x20040080,
				0x17000: 0x1000000,
				0x18000: 0x21040080,
				0x19000: 0x21000000,
				0x1a000: 0x1040000,
				0x1b000: 0x20040000,
				0x1c000: 0x40080,
				0x1d000: 0x20000080,
				0x1e000: 0x0,
				0x1f000: 0x1040080,
				0x10800: 0x21000080,
				0x11800: 0x1000000,
				0x12800: 0x1040000,
				0x13800: 0x20040080,
				0x14800: 0x20000000,
				0x15800: 0x1040080,
				0x16800: 0x80,
				0x17800: 0x21040000,
				0x18800: 0x40080,
				0x19800: 0x21040080,
				0x1a800: 0x0,
				0x1b800: 0x21000000,
				0x1c800: 0x1000080,
				0x1d800: 0x40000,
				0x1e800: 0x20040000,
				0x1f800: 0x20000080
			},
			{
				0x0: 0x10000008,
				0x100: 0x2000,
				0x200: 0x10200000,
				0x300: 0x10202008,
				0x400: 0x10002000,
				0x500: 0x200000,
				0x600: 0x200008,
				0x700: 0x10000000,
				0x800: 0x0,
				0x900: 0x10002008,
				0xa00: 0x202000,
				0xb00: 0x8,
				0xc00: 0x10200008,
				0xd00: 0x202008,
				0xe00: 0x2008,
				0xf00: 0x10202000,
				0x80: 0x10200000,
				0x180: 0x10202008,
				0x280: 0x8,
				0x380: 0x200000,
				0x480: 0x202008,
				0x580: 0x10000008,
				0x680: 0x10002000,
				0x780: 0x2008,
				0x880: 0x200008,
				0x980: 0x2000,
				0xa80: 0x10002008,
				0xb80: 0x10200008,
				0xc80: 0x0,
				0xd80: 0x10202000,
				0xe80: 0x202000,
				0xf80: 0x10000000,
				0x1000: 0x10002000,
				0x1100: 0x10200008,
				0x1200: 0x10202008,
				0x1300: 0x2008,
				0x1400: 0x200000,
				0x1500: 0x10000000,
				0x1600: 0x10000008,
				0x1700: 0x202000,
				0x1800: 0x202008,
				0x1900: 0x0,
				0x1a00: 0x8,
				0x1b00: 0x10200000,
				0x1c00: 0x2000,
				0x1d00: 0x10002008,
				0x1e00: 0x10202000,
				0x1f00: 0x200008,
				0x1080: 0x8,
				0x1180: 0x202000,
				0x1280: 0x200000,
				0x1380: 0x10000008,
				0x1480: 0x10002000,
				0x1580: 0x2008,
				0x1680: 0x10202008,
				0x1780: 0x10200000,
				0x1880: 0x10202000,
				0x1980: 0x10200008,
				0x1a80: 0x2000,
				0x1b80: 0x202008,
				0x1c80: 0x200008,
				0x1d80: 0x0,
				0x1e80: 0x10000000,
				0x1f80: 0x10002008
			},
			{
				0x0: 0x100000,
				0x10: 0x2000401,
				0x20: 0x400,
				0x30: 0x100401,
				0x40: 0x2100401,
				0x50: 0x0,
				0x60: 0x1,
				0x70: 0x2100001,
				0x80: 0x2000400,
				0x90: 0x100001,
				0xa0: 0x2000001,
				0xb0: 0x2100400,
				0xc0: 0x2100000,
				0xd0: 0x401,
				0xe0: 0x100400,
				0xf0: 0x2000000,
				0x8: 0x2100001,
				0x18: 0x0,
				0x28: 0x2000401,
				0x38: 0x2100400,
				0x48: 0x100000,
				0x58: 0x2000001,
				0x68: 0x2000000,
				0x78: 0x401,
				0x88: 0x100401,
				0x98: 0x2000400,
				0xa8: 0x2100000,
				0xb8: 0x100001,
				0xc8: 0x400,
				0xd8: 0x2100401,
				0xe8: 0x1,
				0xf8: 0x100400,
				0x100: 0x2000000,
				0x110: 0x100000,
				0x120: 0x2000401,
				0x130: 0x2100001,
				0x140: 0x100001,
				0x150: 0x2000400,
				0x160: 0x2100400,
				0x170: 0x100401,
				0x180: 0x401,
				0x190: 0x2100401,
				0x1a0: 0x100400,
				0x1b0: 0x1,
				0x1c0: 0x0,
				0x1d0: 0x2100000,
				0x1e0: 0x2000001,
				0x1f0: 0x400,
				0x108: 0x100400,
				0x118: 0x2000401,
				0x128: 0x2100001,
				0x138: 0x1,
				0x148: 0x2000000,
				0x158: 0x100000,
				0x168: 0x401,
				0x178: 0x2100400,
				0x188: 0x2000001,
				0x198: 0x2100000,
				0x1a8: 0x0,
				0x1b8: 0x2100401,
				0x1c8: 0x100401,
				0x1d8: 0x400,
				0x1e8: 0x2000400,
				0x1f8: 0x100001
			},
			{
				0x0: 0x8000820,
				0x1: 0x20000,
				0x2: 0x8000000,
				0x3: 0x20,
				0x4: 0x20020,
				0x5: 0x8020820,
				0x6: 0x8020800,
				0x7: 0x800,
				0x8: 0x8020000,
				0x9: 0x8000800,
				0xa: 0x20800,
				0xb: 0x8020020,
				0xc: 0x820,
				0xd: 0x0,
				0xe: 0x8000020,
				0xf: 0x20820,
				0x80000000: 0x800,
				0x80000001: 0x8020820,
				0x80000002: 0x8000820,
				0x80000003: 0x8000000,
				0x80000004: 0x8020000,
				0x80000005: 0x20800,
				0x80000006: 0x20820,
				0x80000007: 0x20,
				0x80000008: 0x8000020,
				0x80000009: 0x820,
				0x8000000a: 0x20020,
				0x8000000b: 0x8020800,
				0x8000000c: 0x0,
				0x8000000d: 0x8020020,
				0x8000000e: 0x8000800,
				0x8000000f: 0x20000,
				0x10: 0x20820,
				0x11: 0x8020800,
				0x12: 0x20,
				0x13: 0x800,
				0x14: 0x8000800,
				0x15: 0x8000020,
				0x16: 0x8020020,
				0x17: 0x20000,
				0x18: 0x0,
				0x19: 0x20020,
				0x1a: 0x8020000,
				0x1b: 0x8000820,
				0x1c: 0x8020820,
				0x1d: 0x20800,
				0x1e: 0x820,
				0x1f: 0x8000000,
				0x80000010: 0x20000,
				0x80000011: 0x800,
				0x80000012: 0x8020020,
				0x80000013: 0x20820,
				0x80000014: 0x20,
				0x80000015: 0x8020000,
				0x80000016: 0x8000000,
				0x80000017: 0x8000820,
				0x80000018: 0x8020820,
				0x80000019: 0x8000020,
				0x8000001a: 0x8000800,
				0x8000001b: 0x0,
				0x8000001c: 0x20800,
				0x8000001d: 0x820,
				0x8000001e: 0x20020,
				0x8000001f: 0x8020800
			}
		];

		// Masks that select the SBOX input
		var SBOX_MASK = [
			0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
			0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
		];

		/**
		 * DES block cipher algorithm.
		 */
		var DES = C_algo.DES = BlockCipher.extend({
			_doReset: function () {
				// Shortcuts
				var key = this._key;
				var keyWords = key.words;

				// Select 56 bits according to PC1
				var keyBits = [];
				for (var i = 0; i < 56; i++) {
					var keyBitPos = PC1[i] - 1;
					keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
				}

				// Assemble 16 subkeys
				var subKeys = this._subKeys = [];
				for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
					// Create subkey
					var subKey = subKeys[nSubKey] = [];

					// Shortcut
					var bitShift = BIT_SHIFTS[nSubKey];

					// Select 48 bits according to PC2
					for (var i = 0; i < 24; i++) {
						// Select from the left 28 key bits
						subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

						// Select from the right 28 key bits
						subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
					}

					// Since each subkey is applied to an expanded 32-bit input,
					// the subkey can be broken into 8 values scaled to 32-bits,
					// which allows the key to be used without expansion
					subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
					for (var i = 1; i < 7; i++) {
						subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
					}
					subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
				}

				// Compute inverse subkeys
				var invSubKeys = this._invSubKeys = [];
				for (var i = 0; i < 16; i++) {
					invSubKeys[i] = subKeys[15 - i];
				}
			},

			encryptBlock: function (M, offset) {
				this._doCryptBlock(M, offset, this._subKeys);
			},

			decryptBlock: function (M, offset) {
				this._doCryptBlock(M, offset, this._invSubKeys);
			},

			_doCryptBlock: function (M, offset, subKeys) {
				// Get input
				this._lBlock = M[offset];
				this._rBlock = M[offset + 1];

				// Initial permutation
				exchangeLR.call(this, 4, 0x0f0f0f0f);
				exchangeLR.call(this, 16, 0x0000ffff);
				exchangeRL.call(this, 2, 0x33333333);
				exchangeRL.call(this, 8, 0x00ff00ff);
				exchangeLR.call(this, 1, 0x55555555);

				// Rounds
				for (var round = 0; round < 16; round++) {
					// Shortcuts
					var subKey = subKeys[round];
					var lBlock = this._lBlock;
					var rBlock = this._rBlock;

					// Feistel function
					var f = 0;
					for (var i = 0; i < 8; i++) {
						f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
					}
					this._lBlock = rBlock;
					this._rBlock = lBlock ^ f;
				}

				// Undo swap from last round
				var t = this._lBlock;
				this._lBlock = this._rBlock;
				this._rBlock = t;

				// Final permutation
				exchangeLR.call(this, 1, 0x55555555);
				exchangeRL.call(this, 8, 0x00ff00ff);
				exchangeRL.call(this, 2, 0x33333333);
				exchangeLR.call(this, 16, 0x0000ffff);
				exchangeLR.call(this, 4, 0x0f0f0f0f);

				// Set output
				M[offset] = this._lBlock;
				M[offset + 1] = this._rBlock;
			},

			keySize: 64 / 32,

			ivSize: 64 / 32,

			blockSize: 64 / 32
		});

		// Swap bits across the left and right words
		function exchangeLR(offset, mask) {
			var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
			this._rBlock ^= t;
			this._lBlock ^= t << offset;
		}

		function exchangeRL(offset, mask) {
			var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
			this._lBlock ^= t;
			this._rBlock ^= t << offset;
		}

		/**
		 * Shortcut functions to the cipher's object interface.
		 *
		 * @example
		 *
		 *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
		 *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
		 */
		C.DES = BlockCipher._createHelper(DES);

		/**
		 * Triple-DES block cipher algorithm.
		 */
		var TripleDES = C_algo.TripleDES = BlockCipher.extend({
			_doReset: function () {
				// Shortcuts
				var key = this._key;
				var keyWords = key.words;

				// Create DES instances
				this._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));
				this._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));
				this._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));
			},

			encryptBlock: function (M, offset) {
				this._des1.encryptBlock(M, offset);
				this._des2.decryptBlock(M, offset);
				this._des3.encryptBlock(M, offset);
			},

			decryptBlock: function (M, offset) {
				this._des3.decryptBlock(M, offset);
				this._des2.encryptBlock(M, offset);
				this._des1.decryptBlock(M, offset);
			},

			keySize: 192 / 32,

			ivSize: 64 / 32,

			blockSize: 64 / 32
		});

		/**
		 * Shortcut functions to the cipher's object interface.
		 *
		 * @example
		 *
		 *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
		 *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
		 */
		C.TripleDES = BlockCipher._createHelper(TripleDES);
	}());


	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var StreamCipher = C_lib.StreamCipher;
		var C_algo = C.algo;

		/**
		 * RC4 stream cipher algorithm.
		 */
		var RC4 = C_algo.RC4 = StreamCipher.extend({
			_doReset: function () {
				// Shortcuts
				var key = this._key;
				var keyWords = key.words;
				var keySigBytes = key.sigBytes;

				// Init sbox
				var S = this._S = [];
				for (var i = 0; i < 256; i++) {
					S[i] = i;
				}

				// Key setup
				for (var i = 0, j = 0; i < 256; i++) {
					var keyByteIndex = i % keySigBytes;
					var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

					j = (j + S[i] + keyByte) % 256;

					// Swap
					var t = S[i];
					S[i] = S[j];
					S[j] = t;
				}

				// Counters
				this._i = this._j = 0;
			},

			_doProcessBlock: function (M, offset) {
				M[offset] ^= generateKeystreamWord.call(this);
			},

			keySize: 256 / 32,

			ivSize: 0
		});

		function generateKeystreamWord() {
			// Shortcuts
			var S = this._S;
			var i = this._i;
			var j = this._j;

			// Generate keystream word
			var keystreamWord = 0;
			for (var n = 0; n < 4; n++) {
				i = (i + 1) % 256;
				j = (j + S[i]) % 256;

				// Swap
				var t = S[i];
				S[i] = S[j];
				S[j] = t;

				keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
			}

			// Update counters
			this._i = i;
			this._j = j;

			return keystreamWord;
		}

		/**
		 * Shortcut functions to the cipher's object interface.
		 *
		 * @example
		 *
		 *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
		 *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
		 */
		C.RC4 = StreamCipher._createHelper(RC4);

		/**
		 * Modified RC4 stream cipher algorithm.
		 */
		var RC4Drop = C_algo.RC4Drop = RC4.extend({
			/**
			 * Configuration options.
			 *
			 * @property {number} drop The number of keystream words to drop. Default 192
			 */
			cfg: RC4.cfg.extend({
				drop: 192
			}),

			_doReset: function () {
				RC4._doReset.call(this);

				// Drop
				for (var i = this.cfg.drop; i > 0; i--) {
					generateKeystreamWord.call(this);
				}
			}
		});

		/**
		 * Shortcut functions to the cipher's object interface.
		 *
		 * @example
		 *
		 *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
		 *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
		 */
		C.RC4Drop = StreamCipher._createHelper(RC4Drop);
	}());


	/** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
	CryptoJS.mode.CTRGladman = (function () {
		var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

		function incWord(word) {
			if (((word >> 24) & 0xff) === 0xff) { //overflow
				var b1 = (word >> 16) & 0xff;
				var b2 = (word >> 8) & 0xff;
				var b3 = word & 0xff;

				if (b1 === 0xff) // overflow b1
				{
					b1 = 0;
					if (b2 === 0xff) {
						b2 = 0;
						if (b3 === 0xff) {
							b3 = 0;
						}
						else {
							++b3;
						}
					}
					else {
						++b2;
					}
				}
				else {
					++b1;
				}

				word = 0;
				word += (b1 << 16);
				word += (b2 << 8);
				word += b3;
			}
			else {
				word += (0x01 << 24);
			}
			return word;
		}

		function incCounter(counter) {
			if ((counter[0] = incWord(counter[0])) === 0) {
				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
				counter[1] = incWord(counter[1]);
			}
			return counter;
		}

		var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
			processBlock: function (words, offset) {
				// Shortcuts
				var cipher = this._cipher
				var blockSize = cipher.blockSize;
				var iv = this._iv;
				var counter = this._counter;

				// Generate keystream
				if (iv) {
					counter = this._counter = iv.slice(0);

					// Remove IV for subsequent blocks
					this._iv = undefined;
				}

				incCounter(counter);

				var keystream = counter.slice(0);
				cipher.encryptBlock(keystream, 0);

				// Encrypt
				for (var i = 0; i < blockSize; i++) {
					words[offset + i] ^= keystream[i];
				}
			}
		});

		CTRGladman.Decryptor = Encryptor;

		return CTRGladman;
	}());




	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var StreamCipher = C_lib.StreamCipher;
		var C_algo = C.algo;

		// Reusable objects
		var S = [];
		var C_ = [];
		var G = [];

		/**
		 * Rabbit stream cipher algorithm
		 */
		var Rabbit = C_algo.Rabbit = StreamCipher.extend({
			_doReset: function () {
				// Shortcuts
				var K = this._key.words;
				var iv = this.cfg.iv;

				// Swap endian
				for (var i = 0; i < 4; i++) {
					K[i] = (((K[i] << 8) | (K[i] >>> 24)) & 0x00ff00ff) |
						(((K[i] << 24) | (K[i] >>> 8)) & 0xff00ff00);
				}

				// Generate initial state values
				var X = this._X = [
					K[0], (K[3] << 16) | (K[2] >>> 16),
					K[1], (K[0] << 16) | (K[3] >>> 16),
					K[2], (K[1] << 16) | (K[0] >>> 16),
					K[3], (K[2] << 16) | (K[1] >>> 16)
				];

				// Generate initial counter values
				var C = this._C = [
					(K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
					(K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
					(K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
					(K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
				];

				// Carry bit
				this._b = 0;

				// Iterate the system four times
				for (var i = 0; i < 4; i++) {
					nextState.call(this);
				}

				// Modify the counters
				for (var i = 0; i < 8; i++) {
					C[i] ^= X[(i + 4) & 7];
				}

				// IV setup
				if (iv) {
					// Shortcuts
					var IV = iv.words;
					var IV_0 = IV[0];
					var IV_1 = IV[1];

					// Generate four subvectors
					var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
					var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
					var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
					var i3 = (i2 << 16) | (i0 & 0x0000ffff);

					// Modify counter values
					C[0] ^= i0;
					C[1] ^= i1;
					C[2] ^= i2;
					C[3] ^= i3;
					C[4] ^= i0;
					C[5] ^= i1;
					C[6] ^= i2;
					C[7] ^= i3;

					// Iterate the system four times
					for (var i = 0; i < 4; i++) {
						nextState.call(this);
					}
				}
			},

			_doProcessBlock: function (M, offset) {
				// Shortcut
				var X = this._X;

				// Iterate the system
				nextState.call(this);

				// Generate four keystream words
				S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
				S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
				S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
				S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

				for (var i = 0; i < 4; i++) {
					// Swap endian
					S[i] = (((S[i] << 8) | (S[i] >>> 24)) & 0x00ff00ff) |
						(((S[i] << 24) | (S[i] >>> 8)) & 0xff00ff00);

					// Encrypt
					M[offset + i] ^= S[i];
				}
			},

			blockSize: 128 / 32,

			ivSize: 64 / 32
		});

		function nextState() {
			// Shortcuts
			var X = this._X;
			var C = this._C;

			// Save old counter values
			for (var i = 0; i < 8; i++) {
				C_[i] = C[i];
			}

			// Calculate new counter values
			C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
			C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
			C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
			C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
			C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
			C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
			C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
			C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
			this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

			// Calculate the g-values
			for (var i = 0; i < 8; i++) {
				var gx = X[i] + C[i];

				// Construct high and low argument for squaring
				var ga = gx & 0xffff;
				var gb = gx >>> 16;

				// Calculate high and low result of squaring
				var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
				var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

				// High XOR low
				G[i] = gh ^ gl;
			}

			// Calculate new state values
			X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
			X[1] = (G[1] + ((G[0] << 8) | (G[0] >>> 24)) + G[7]) | 0;
			X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
			X[3] = (G[3] + ((G[2] << 8) | (G[2] >>> 24)) + G[1]) | 0;
			X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
			X[5] = (G[5] + ((G[4] << 8) | (G[4] >>> 24)) + G[3]) | 0;
			X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
			X[7] = (G[7] + ((G[6] << 8) | (G[6] >>> 24)) + G[5]) | 0;
		}

		/**
		 * Shortcut functions to the cipher's object interface.
		 *
		 * @example
		 *
		 *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
		 *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
		 */
		C.Rabbit = StreamCipher._createHelper(Rabbit);
	}());


	/**
	 * Counter block mode.
	 */
	CryptoJS.mode.CTR = (function () {
		var CTR = CryptoJS.lib.BlockCipherMode.extend();

		var Encryptor = CTR.Encryptor = CTR.extend({
			processBlock: function (words, offset) {
				// Shortcuts
				var cipher = this._cipher
				var blockSize = cipher.blockSize;
				var iv = this._iv;
				var counter = this._counter;

				// Generate keystream
				if (iv) {
					counter = this._counter = iv.slice(0);

					// Remove IV for subsequent blocks
					this._iv = undefined;
				}
				var keystream = counter.slice(0);
				cipher.encryptBlock(keystream, 0);

				// Increment counter
				counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0

				// Encrypt
				for (var i = 0; i < blockSize; i++) {
					words[offset + i] ^= keystream[i];
				}
			}
		});

		CTR.Decryptor = Encryptor;

		return CTR;
	}());


	(function () {
		// Shortcuts
		var C = CryptoJS;
		var C_lib = C.lib;
		var StreamCipher = C_lib.StreamCipher;
		var C_algo = C.algo;

		// Reusable objects
		var S = [];
		var C_ = [];
		var G = [];

		/**
		 * Rabbit stream cipher algorithm.
		 *
		 * This is a legacy version that neglected to convert the key to little-endian.
		 * This error doesn't affect the cipher's security,
		 * but it does affect its compatibility with other implementations.
		 */
		var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
			_doReset: function () {
				// Shortcuts
				var K = this._key.words;
				var iv = this.cfg.iv;

				// Generate initial state values
				var X = this._X = [
					K[0], (K[3] << 16) | (K[2] >>> 16),
					K[1], (K[0] << 16) | (K[3] >>> 16),
					K[2], (K[1] << 16) | (K[0] >>> 16),
					K[3], (K[2] << 16) | (K[1] >>> 16)
				];

				// Generate initial counter values
				var C = this._C = [
					(K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
					(K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
					(K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
					(K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
				];

				// Carry bit
				this._b = 0;

				// Iterate the system four times
				for (var i = 0; i < 4; i++) {
					nextState.call(this);
				}

				// Modify the counters
				for (var i = 0; i < 8; i++) {
					C[i] ^= X[(i + 4) & 7];
				}

				// IV setup
				if (iv) {
					// Shortcuts
					var IV = iv.words;
					var IV_0 = IV[0];
					var IV_1 = IV[1];

					// Generate four subvectors
					var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
					var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
					var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
					var i3 = (i2 << 16) | (i0 & 0x0000ffff);

					// Modify counter values
					C[0] ^= i0;
					C[1] ^= i1;
					C[2] ^= i2;
					C[3] ^= i3;
					C[4] ^= i0;
					C[5] ^= i1;
					C[6] ^= i2;
					C[7] ^= i3;

					// Iterate the system four times
					for (var i = 0; i < 4; i++) {
						nextState.call(this);
					}
				}
			},

			_doProcessBlock: function (M, offset) {
				// Shortcut
				var X = this._X;

				// Iterate the system
				nextState.call(this);

				// Generate four keystream words
				S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
				S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
				S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
				S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

				for (var i = 0; i < 4; i++) {
					// Swap endian
					S[i] = (((S[i] << 8) | (S[i] >>> 24)) & 0x00ff00ff) |
						(((S[i] << 24) | (S[i] >>> 8)) & 0xff00ff00);

					// Encrypt
					M[offset + i] ^= S[i];
				}
			},

			blockSize: 128 / 32,

			ivSize: 64 / 32
		});

		function nextState() {
			// Shortcuts
			var X = this._X;
			var C = this._C;

			// Save old counter values
			for (var i = 0; i < 8; i++) {
				C_[i] = C[i];
			}

			// Calculate new counter values
			C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
			C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
			C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
			C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
			C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
			C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
			C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
			C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
			this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

			// Calculate the g-values
			for (var i = 0; i < 8; i++) {
				var gx = X[i] + C[i];

				// Construct high and low argument for squaring
				var ga = gx & 0xffff;
				var gb = gx >>> 16;

				// Calculate high and low result of squaring
				var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
				var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

				// High XOR low
				G[i] = gh ^ gl;
			}

			// Calculate new state values
			X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
			X[1] = (G[1] + ((G[0] << 8) | (G[0] >>> 24)) + G[7]) | 0;
			X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
			X[3] = (G[3] + ((G[2] << 8) | (G[2] >>> 24)) + G[1]) | 0;
			X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
			X[5] = (G[5] + ((G[4] << 8) | (G[4] >>> 24)) + G[3]) | 0;
			X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
			X[7] = (G[7] + ((G[6] << 8) | (G[6] >>> 24)) + G[5]) | 0;
		}

		/**
		 * Shortcut functions to the cipher's object interface.
		 *
		 * @example
		 *
		 *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
		 *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
		 */
		C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
	}());


	/**
	 * Zero padding strategy.
	 */
	CryptoJS.pad.ZeroPadding = {
		pad: function (data, blockSize) {
			// Shortcut
			var blockSizeBytes = blockSize * 4;

			// Pad
			data.clamp();
			data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
		},

		unpad: function (data) {
			// Shortcut
			var dataWords = data.words;

			// Unpad
			var i = data.sigBytes - 1;
			while (!((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
				i--;
			}
			data.sigBytes = i + 1;
		}
	};


	return CryptoJS;

}));
