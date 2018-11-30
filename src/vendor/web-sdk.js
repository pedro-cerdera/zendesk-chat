/* eslint-disable */
/*!
 * Copyright Zendesk, Inc.
 * 
 * By downloading or accessing this software, You agree to the Zendesk Terms of Service (https://www.zendesk.com/company/terms) and Application Developer and API License Agreement (https://www.zendesk.com/company/application-developer-and-api-license-agreement) and acknowledge that such terms govern Your use of and access to the software.
 * 
 */
!function(e, t) {
"object" == typeof exports && "object" == typeof module ? module.exports = t() : "object" == typeof exports ? exports.zChat = t() : e.zChat = t();
}(window, function() {
return function(e) {
function t(i) {
if (n[i]) return n[i].exports;
var o = n[i] = {
i: i,
l: !1,
exports: {}
};
e[i].call(o.exports, o, o.exports, t);
o.l = !0;
return o.exports;
}
var n = {};
t.m = e;
t.c = n;
t.d = function(e, n, i) {
t.o(e, n) || Object.defineProperty(e, n, {
enumerable: !0,
get: i
});
};
t.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
});
Object.defineProperty(e, "__esModule", {
value: !0
});
};
t.t = function(e, n) {
1 & n && (e = t(e));
if (8 & n) return e;
if (4 & n && "object" == typeof e && e && e.__esModule) return e;
var i = Object.create(null);
t.r(i);
Object.defineProperty(i, "default", {
enumerable: !0,
value: e
});
if (2 & n && "string" != typeof e) for (var o in e) t.d(i, o, function(t) {
return e[t];
}.bind(null, o));
return i;
};
t.n = function(e) {
var n = e && e.__esModule ? function() {
return e.default;
} : function() {
return e;
};
t.d(n, "a", n);
return n;
};
t.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
};
t.p = "../../bin/";
return t(t.s = 50);
}([ function(e, t) {
function n(e, t) {
if ("function" == typeof e && e.prototype && !e.__jx__no_fqname) {
e.prototype.__jx__fqname_chain = (e.prototype.__jx__fqname_chain || "") + " " + t;
e.prototype.__jx__fqname = t;
}
}
e.exports = n;
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
var n = {}, i = {}, o = function(t) {
return !e.nodeType && e != window && e != document || ("FORM" != e.tagName || "submit" != t) && (!f.isCustomEvents && (f.isFF && f.isFF < 9 ? !document.createEvent("event")[t.toUpperCase()] : void 0 === e["on" + t]));
}, r = function(t, i, r) {
if (!t && "function" != typeof i) throw "bad arguments to on / addEventListener";
if (!(t in n)) {
n[t] = [];
o(t) || s(t);
}
n[t].push(i);
return e;
}, s = function(t) {
if (!(t in i)) {
i[t] = function(i) {
i && (i.stopPropagation || d(i));
var o, r = n[t], s = r.length, a = !0;
r._active = !0;
for (o = 0; o < s; o++) try {
if (!r[o]) continue;
!1 === r[o].call(e, f.isCustomEvents && i instanceof f.CustomEvent ? i.detail : i) && (a = !1);
} catch (e) {
h.fire("error", e);
}
r._active = !1;
if (r._dirty) {
for (o = 0; o < s; o++) if (!r[o]) {
o == s - 1 ? r.pop() : r[o--] = r.pop();
s--;
}
r._dirty = !1;
}
if (!1 === a) {
if (i) {
i.preventDefault();
i.returnValue = !1;
}
return !1;
}
};
e.attachEvent ? e.attachEvent("on" + t, i[t]) : e.addEventListener && e.addEventListener(t, i[t], !1);
}
}, a = function(t) {
var o = i[t];
if (o) {
e.attachEvent ? e.detachEvent("on" + t, o) : e.addEventListener && e.removeEventListener(t, o, !1);
delete i[t];
delete n[t];
}
}, c = function(t, o) {
var r = n[t];
if (r) {
for (var s = 0, c = r.length; s < c; s++) if (r[s] === o) {
1 == r.length ? i[t] ? a(t) : delete n[t] : r._active ? (r[s] = null, r._dirty = !0) : s == c - 1 ? r.pop() : r[s] = r.pop();
break;
}
return e;
}
}, u = function() {
if (n && i) {
for (var e in i) i.hasOwnProperty(e) && a(e);
n = i = null;
}
}, l = function(t, i) {
if (!f.isCustomEvents || o(t)) {
var r = n[t], s = !0;
if (r && r.length) {
r._active = !0;
var a, c, u;
for (a = 0, c = r.length; a < c; a++) try {
if (!r[a]) continue;
u = r[a].call(e, i);
!1 === u && (s = !1);
} catch (e) {
h.fire("error", e);
}
r._active = !1;
if (r._dirty) {
for (a = 0; a < c; a++) if (!r[a]) {
a == c - 1 ? r.pop() : r[a--] = r.pop();
c--;
}
r._dirty = !1;
}
}
return s;
}
return e.dispatchEvent(new f.CustomEvent(t, {
bubbles: !1,
cancelable: !0,
detail: i
}));
}, d = function(e) {
e.preventDefault = d.preventDefault;
e.stopPropagation = d.stopPropagation;
e.target = e.srcElement;
};
d.preventDefault = function() {
this.returnValue = !1;
};
d.stopPropagation = function() {
this.cancelBubble = !0;
};
var p = {
fire: l,
on: r,
un: c,
unextendEvents: u
};
if (t) return p;
for (var m in p) p.hasOwnProperty(m) && (e[m] = p[m]);
f.bugs.leaksMemory && f.bugs.leaksMemory(function() {
for (var t in p) p.hasOwnProperty(t) && (e[t] = null);
});
return e;
}
function o(e) {
a(0, e);
}
function r(e) {
a(1, e);
}
function s(e) {
a(2, e);
}
function a(e, t) {
e <= d ? t() : p[e].push(t);
}
function c(e) {
for (;d < e; ) {
d++;
for (var t = 0; t < p[d].length; t++) p[d][t]();
p[d] = null;
}
}
function u() {
d > 0 || (document.body && document.body.firstChild ? c(1) : window.setTimeout(u, 200));
}
function l() {
c(2);
}
var f = n(3), h = {
extend: i,
body: i(document.body, !0),
window: i(window, !0),
document: i(document, !0),
runAfterScriptReady: o,
runAfterFirstChildReady: r,
runAfterDomReady: s
};
h.extend(h);
var d = 0, p = [ [], [], [], [] ];
u();
!function() {
var e;
if (f.isSafari) e = window.setInterval(function() {
if (/loaded|complete/i.test(document.readyState)) {
window.clearInterval(e);
l();
}
}, 20); else if (document.addEventListener) /loaded|complete/i.test(document.readyState) ? l() : document.addEventListener("DOMContentLoaded", l, !1); else if (f.isIE) {
window.attachEvent("onload", l);
var t = document.createElement("document:ready");
e = window.setInterval(function() {
if (/loaded|complete/i.test(document.readyState)) {
t = null;
window.clearInterval(e);
l();
} else {
try {
t.doScroll("left");
} catch (e) {
return;
}
t = null;
window.clearInterval(e);
l();
}
}, 200);
}
}();
e.exports = h;
t(h, "jx_core_Events");
return h;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var n = function(e) {
return function(e, t) {
return t ? null == e : void 0 === e;
};
}();
e.exports = n;
t(n, "jx_core_globals_isUndefined");
return n;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var i = (n(10), n(25)), o = (n(6), n(2)), r = function() {
function e(e) {
return e.replace(/^http:/, N ? "https:" : "http:");
}
function t() {
if (void 0 !== window.innerHeight) return window.innerHeight;
if (document.documentElement) return document.documentElement.offsetHeight;
var e = document.getElementsByTagName("body");
return e.length ? e[0].clientHeight : 0;
}
function n() {
if (void 0 !== window.innerWidth) return window.innerWidth;
if (document.documentElement) return document.documentElement.offsetWidth;
var e = document.getElementsByTagName("body");
return e.length ? e[0].clientWidth : 0;
}
function r() {
if (!o(s)) return s;
var e = document.createElement("div"), t = document.createElement("div"), n = e.style, i = t.style;
n.overflow = "auto";
n.width = n.height = "100px";
n.position = "absolute";
n.top = "-1000px";
i.width = "100%";
i.height = "200px";
e.appendChild(t);
document.body.appendChild(e);
s = e.offsetWidth - e.clientWidth;
document.body.removeChild(e);
return s;
}
var s, a, c = navigator, u = c.userAgent.toLowerCase(), l = +(/trident.*rv:? *([0-9]+)/.exec(u) || [])[1] || !1, f = function() {
for (var e = 3, t = document.createElement("div"), n = t.getElementsByTagName("i"); t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->", 
n[0]; ) ;
return e > 4 ? e : document.documentMode;
}(), h = 8 === f, d = 7 === f, p = 6 === f, m = !!window.opera && "[object Opera]" === Object.prototype.toString.call(window.opera), _ = u.indexOf("edge") > -1, g = "Google Inc." === c.vendor, v = "Apple Computer, Inc." === c.vendor, w = !_ && !f && !m && (g || v || /webkit|khtml/.test(u)), y = +/\d+/.exec(/firefox\/\d+/i.exec(c.userAgent) || ""), b = -1 !== u.indexOf("iphone"), $ = -1 !== u.indexOf("ipod"), E = -1 !== u.indexOf("ipad"), x = b || E || $, k = -1 !== u.indexOf("android"), T = -1 !== u.indexOf("wp7"), S = x || k || T, A = f && "msie" || y && "firefox" || m && "opera" || g && "chrome" || v && "safari", D = "CSS1Compat" === document.compatMode, O = !D, R = f && O && document.documentElement && !!document.documentElement.style.setExpression, C = document.documentMode || f, L = -1 !== u.indexOf("windows") || -1 !== u.indexOf("win32"), I = -1 !== u.indexOf("macintosh") || -1 !== u.indexOf("mac os x"), N = "https:" === document.location.protocol, M = c.language || c.browserLanguage || c.userLanguage || c.systemLanguage, P = {
noBoxSizing: C <= 7,
ie: {
cssBottomRight: p,
cssFixed: p || R,
buggyCSS: p || R
}
}, U = "textContent" in document.createElement("div"), V = !1, j = null;
try {
if (window.CustomEvent && /\[native code\]|\[object CustomEventConstructor\]/.test(window.CustomEvent.toString())) {
new window.CustomEvent("testevent", {
bubbles: !1,
cancelable: !0,
detail: !0
});
V = !0;
j = window.CustomEvent;
}
} catch (e) {}
switch (A) {
case "msie":
case "firefox":
case "chrome":
a = +/\d+/.exec(new RegExp(A + "[ /]\\d+").exec(u) || "");
break;

default:
a = +/\d+/.exec(/version[ \/]\d+/.exec(u) || "");
}
if (p) {
var z = [];
P.leaksMemory = function(e) {
i.isFunction(e);
z.push(e);
};
var F = function() {
for (var e = 0; e < z.length; e++) z[e]();
};
P.leaksMemory.remove = function(e) {
for (var t = z.length - 1; t >= 0; t--) e == z[t] && z.splice(t, 1);
};
window.attachEvent("onunload", F);
}
var q = "Shockwave Flash", H = "ShockwaveFlash.ShockwaveFlash", G = "application/x-shockwave-flash", B = "application/x-java-vm";
return {
browser: A,
version: a,
isStrict: D,
isQuirks: O,
isOpera: m,
isSafari: v,
isWebKit: w,
isChrome: g,
isAndroid: k,
isIPhone: b,
isIPod: $,
isIPad: E,
isIOS: x,
isWP7: T,
isMobile: S,
isNewIE: l,
isEdge: _,
isIE: f,
isIE6: p,
isIE7: d,
isIE8: h,
isFF: y,
isCustomEvents: V,
CustomEvent: j,
engineIE: C,
bugs: P,
isWindows: L,
isMac: I,
isSecure: N,
secureURL: e,
hasFlash: function() {
var e, t = c.plugins && c.plugins[q];
if (t) {
e = c.mimeTypes && c.mimeTypes[G];
return e && !e.enabledPlugin ? null : t.description;
}
if (window.ActiveXObject) try {
t = new window.ActiveXObject(H);
t.AllowScriptAccess = "always";
return t.GetVariable("$version");
} catch (e) {}
}(),
hasJava: function() {
var e = c.mimeTypes;
return f ? !T && ("javaEnabled" in c && c.javaEnabled()) : e && (e = e[B]) && (e = e.enabledPlugin) ? e.name : void 0;
}(),
language: M,
getScrollbarSize: r,
getWindowClientHeight: t,
getWindowClientWidth: n,
isTextContent: U
};
}();
e.exports = r;
t(r, "jx_core_Browser");
return r;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i() {
if (window.$zopim && window.$zopim.s) return window.$zopim.s.src;
for (var e, t = document.getElementsByTagName("script"), n = /.*zopim.(com|net|org)\//, i = 0, o = t.length; i < o; i++) {
e = t[i].src || "";
if (n.test(e)) return e;
}
return "";
}
function o(e) {
e && !p.test(e) && (e = null);
var t = "id." + (l.brandDomain || "zopim.com");
return "https://" + (e || t) + "/authenticated/web/jwt";
}
var r = n(2), s = n(5), a = n(3), c = n(22), u = n(15), l = function() {
for (var e = i(), t = [ /\/?[?]/, /\/livechat\// ], n = [], o = 0; o < t.length; o++) {
n = e.split(t[o]);
if (n.length) break;
}
var r = n[1], s = n[0], a = /^(https?:)?\/\/[^\/]+/.exec(s), c = s.replace(/^(https?:)?\/\//i, "").split("/")[0], u = c.replace(/(.+\.)(?=.+\..+)/, ""), l = n[0].split("/");
l = l.pop() == c ? n[0] : l.join("/");
a = a && "zopim.com" !== c ? a[0] : "https://v2.zopim.com";
return {
accountKey: r,
brandDomain: u,
baseURL: l,
rootURL: a
};
}(), f = "https://v2.zopim.com/widget", h = f + "/images", d = c.map([ ".zopim.com", ".zopim.org", ".zdch.at" ], u.escape), p = new RegExp("^[a-z][a-z0-9_-]*(\\.[a-z][a-z0-9_-]*)*(" + d.join("|") + ")(:\\d+)?$", "i");
r(s.baseURL, !0) && (s.baseURL = a.secureURL(l.baseURL));
var m = {
ASSETS_URL: f,
IMAGES_URL: h,
SOUNDS_URL: "https://v2.zopim.com/widget/sounds",
FONTS_URL: "https://v2.zopim.com/widget/fonts",
ASSETS_LEGACY: document.location.protocol + "//cdn.zopim.com/assets",
BRANDING_URL: "https://www.zopim.com",
AVATARS: {
CONCIERGE: h + "/avatar_simple_agent.png",
AGENT: h + "/avatar_simple_agent.png",
VISITOR: h + "/avatar_simple_visitor.png",
DEFAULT: h + "/avatar_simple_visitor.png"
},
ACCOUNT_KEY: l.accountKey,
BRAND_DOMAIN: l.brandDomain,
COUNTRY_CODE: function() {
var e = '<!--# echo var="http_cf_ipcountry" default="geo" -->'.toUpperCase();
"<" == e.charAt(0) && (e = "geo");
return e;
}(),
AUTH_URL: "https://www.zopim.com/auth/$NAME/$KEY-$MID",
AUTH_LOGOUT_URL: "https://www.zopim.com/auth/logout/$KEY-$MID",
AUTH_SERVER_URL: o(),
IS_POPOUT: window.$zopim_popout,
POPOUT_WINDOW_PREFIX: "zlivechatpopout_",
POPOUT_URL: l.rootURL + "/widget/livechat.html",
CALLBACK_FILE_UPLOAD_PATH: "/client/widget/upload",
FILE_UPLOAD_PATH: "/client/widget/uploads",
FILE_UPLOAD_MAX: 20971520,
RESEND_MSG_TIMEOUT: 5e3,
FILE_REPLACE_SOURCE: /^(\s*https?\:\/\/v2(?:assets|uploads)\.zopim\.)com(\/)/i,
FILE_REPLACE_RESULT: "$1io$2",
CHAT_LOG_REMEMBER_COUNT: 10,
getAuthServerURL: o
};
e.exports = m;
t(m, "meshim_widget_Config");
return m;
}();
}).call(this, n(0));
}, function(e, t) {
var n = {
build_number: "20180801.050616",
git_commit: "b9f418830f1070ec6eeba13ade29586373506020",
release_tag: "1.5.0"
};
e.exports = n;
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n(e) {
return "function" == typeof e;
}
e.exports = n;
t(n, "jx_core_globals_isFunction");
return n;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
for (var n, i = document.createElement("div"), o = 0, r = M.length; o < r; o++) if (void 0 !== i.style[M[o]]) {
n = t[o];
break;
}
return n ? e ? function(e, t, i) {
e.autobind(t, n, i);
} : function(e, t, i) {
P && e.autounbind(t, n, i);
} : function() {};
}
function o(e, t) {
for (var n = {}, i = 0, o = t.length; i < o; i++) {
var r = t[i];
r in e && (n[r] = e[r]);
}
return n;
}
function r() {
for (var e, t, n = arguments.length, i = 1, o = arguments[0] || {}; i < n; i++) if (null != (e = arguments[i])) for (t in e) e.hasOwnProperty(t) && o !== e[t] && (o[t] = e[t]);
return o;
}
function s(e, t) {
for (var n in t) if (t.hasOwnProperty(n)) if (t[n] && t[n].constructor && t[n].constructor === Object) {
e[n] = e[n] || {};
s(e[n], t[n]);
} else e[n] = t[n];
return e;
}
function a(e, t) {
for (var n in t) if (t.hasOwnProperty(n)) {
if (!(n in e)) continue;
t[n] && t[n].constructor && t[n].constructor === Object ? a(e[n], t[n]) : delete e[n];
}
return e;
}
function c() {
if (void 0 === A) try {
A = u();
} catch (e) {}
return A;
}
function u() {
if (!window.getComputedStyle) return !1;
var e = document.createElement("div"), t = "border-box";
document.body.appendChild(e);
e.style.height = "10px";
e.style.padding = "5px";
e.style.boxSizing = t;
e.style.webkitBoxSizing = t;
e.style.mozBoxSizing = t;
var n = parseInt(window.getComputedStyle(e).height, 10);
document.body.removeChild(e);
return 10 != n;
}
function l(e) {
var t = e.getComputedStyle();
if ("auto" == t.height) return e.getHeight();
var n = parseInt(t.height, 10) || 0;
V.computedHeightBoxSizingBug() && (n += (parseInt(t.paddingTop, 10) || 0) + (parseInt(t.paddingBottom, 10) || 0) + (parseInt(t.borderTopWidth, 10) || 0) + (parseInt(t.borderBottomWidth, 10) || 0));
return n + "px";
}
function f(e) {
function t() {
this.addClass("hover");
}
function n() {
this.removeClass("hover");
}
if (D.bugs.noBoxSizing) {
e.on("mouseover", t);
e.on("mouseout", n);
}
}
function h(e, t) {
for (var n, i = t.split("."); i.length; ) {
n = i.shift();
O(e[n], !0) && (e[n] = {});
e = e[n];
}
return e;
}
function d(e, t) {
if (0 === t.indexOf(e.path)) {
for (var n, i = e.path.split(".").length, o = t.split(".").slice(i), r = e.update; o.length; ) {
n = o.shift();
if (!(n in r)) return;
r = r[n];
}
return r;
}
}
function p(e, t, n) {
e = e.split(".");
var i = e.pop();
if (i) {
for (var o = 0, r = e.length; o < r; o++) {
e[o] in n || (n[e[o]] = {});
n = n[e[o]];
}
n[i] = t;
}
}
function m(e) {
for (var t = e.split("."), n = "." + t.splice(t.length - 2, 2).join("."); t.length; ) {
var i = {
domain: n,
path: "/"
};
C.set("zte2095", "1", i);
if ("1" == C.get("zte2095")) {
C.remove("zte2095", i);
break;
}
n = "." + t.pop() + n;
}
return n;
}
function _(e) {
return z.test(e);
}
function g(e) {
return j.test(e);
}
function v(e) {
if (e && "object" == typeof e) {
var t = [];
for (var n in e) e.hasOwnProperty(n) && t.push(n);
return t;
}
}
function w(e) {
if (window.Image) try {
var t = new window.Image();
t.onload = t.onerror = function() {
e(!(1 != this.width || 1 != this.height));
};
t.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
} catch (t) {
e();
} else e();
}
function y(e, t) {
e = parseInt(e, 10);
isNaN(e) && (e = 0);
var n = e < 0;
e = Math.abs(e).toString().split("");
for (var i = Math.max(t - e.length, 0); i--; ) e.unshift("0");
n && e.unshift("-");
return e.join("");
}
function b(e, t) {
function n(e, t, n) {
return n.replace("<hours>", e).replace("<minutes>", t);
}
var i = R("<hours>:<minutes>"), o = R("<hours>:<minutes> am"), r = R("<hours>:<minutes> pm"), s = "24" === t ? 24 : 12, a = function(e, t) {
return e - Math[e > 0 ? "floor" : "ceil"](e / t) * t;
}(Math[e > 0 ? "floor" : "ceil"](e / 60), s), c = V.pad(Math.abs(e) % 60, 2);
if (24 === s) return n(V.pad(a, 2), c, i);
var u = 0 === a ? 12 : a;
return Math.abs(e / 60) % 24 < 12 ? n(u, c, o) : n(u, c, r);
}
function $(e) {
return e && e.replace(L.FILE_REPLACE_SOURCE, L.FILE_REPLACE_RESULT);
}
function E(e, t) {
t = parseInt(t, 10);
if (!t) return e.getValue();
var n = e.getKeys(), i = n.length, o = {};
if (i <= t) return e.getValue() || o;
for (var r = 0; r < i; r++) n[r] = parseInt(n[r], 10);
n = n.sort().slice(-t);
var s, a = e.getValue();
if (!a) return o;
for (r = 0, i = n.length; r < i; r++) {
s = n[r];
o[s] = a[s];
}
return o;
}
function x(e, t) {
var n;
if (e.leaf && e.parentNode) {
n = {};
n[e.name] = t;
e.parentNode.write(n);
} else e.write(t);
}
function k() {
if (D.isNewIE) try {
"body" !== document.activeElement.nodeName.toLowerCase() && document.activeElement.focus();
} catch (e) {}
}
function T() {
window.console && window.console.warn && window.console.warn("The Zopim widget embed code is invalid. Please email chat@zendesk.com with your account key: " + L.ACCOUNT_KEY);
}
function S(e, t, n) {
return L.AUTH_URL.replace("$NAME", e).replace("$KEY", t).replace("$MID", n);
}
var A, D = n(3), O = n(2), R = n(14), C = n(19), L = n(4), I = "-webkit- -moz- -o- -ms- ".split(" "), N = "webkit Moz O ms ".split(" "), M = [ "transition", "MozTransition", "OTransition", "WebkitTransition" ], P = [ "transitionend", "transitionend", "otransitionend", "webkitTransitionEnd" ], U = [ "animationend", "animationend", "oanimationend", "webkitAnimationEnd" ], V = {
contains: function() {
var e = document.documentElement;
return e.compareDocumentPosition ? function(e, t) {
e = e.dom || e;
t = t.dom || t;
return !!(16 & e.compareDocumentPosition(t));
} : e.contains ? function(e, t) {
e = e.dom || e;
t = t.dom || t;
var n = 9 === e.nodeType ? e.documentElement : e, i = t.parentNode;
return e === i || !!(i && 1 === i.nodeType && n.contains && n.contains(i));
} : function(e, t) {
e = e.dom || e;
t = t.dom || t;
for (;t = t.parentNode; ) if (t === e) return !0;
return !1;
};
}(),
onTransitionEnd: i(!0, P),
unTransitionEnd: i(!1, P),
onAnimationEnd: i(!0, U),
unAnimationEnd: i(!1, U),
css_prefixes: I,
cssom_prefixes: N,
isStyleSupported: function() {
function e(e) {
for (var t = e.charAt(0).toUpperCase() + e.slice(1), i = (e + " " + N.join(t + " ") + t).split(" "), o = 0; o < i.length; o++) if (void 0 !== n[i[o]]) return !0;
return !1;
}
var t = document.createElement("div"), n = t.style;
return e;
}(),
pick: o,
shallowExtend: r,
fullyExtend: s,
fullyDelete: a,
computedHeightBoxSizingBug: c,
getComputedHeight: l,
hoverFix: f,
getEffectiveTLD: m,
descendsObj: h,
insertObj: p,
getValueByReference: d,
isDefaultName: g,
getKeys: v,
supportsDataURI: w,
isIE: function() {
return D.isIE || /Trident\//.test(window.navigator.userAgent);
}(),
pad: y,
formatMinutesAsHours: b,
replaceFileHostname: $,
getLastLogEntries: E,
writeNode: x,
isAgentNick: _,
refocusActiveElement: k,
warnBadEmbed: T,
getAuthLoginUrl: S
}, j = /^Visitor [0-9]{3,}$/, z = /^agent:[0-9]+/i;
e.exports = V;
t(V, "meshim_widget_utils_Utils");
return V;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n(e) {
return "[object Array]" == Object.prototype.toString.call(e);
}
e.exports = n;
t(n, "jx_core_globals_isArray");
return n;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
if (!r(e)) throw new TypeError("FunctionUtils.bind - what is trying to be bound is not callable");
if (r(e.bind) && !("prototype" in e.bind)) return e.bind.apply(e, a.call(arguments, 1));
var n = a.call(arguments, 2), i = function() {}, o = function() {
return e.apply(this instanceof i && t ? this : t, n.concat(a.call(arguments)));
};
i.prototype = o.prototype;
o.prototype = new i();
return o;
}
function o(e) {
var t;
return function() {
if (!t) {
t = !0;
return e.apply(this, a.call(arguments));
}
};
}
var r = n(6), s = {
bind: i,
once: o
}, a = Array.prototype.slice;
e.exports = s;
t(s, "jx_core_FunctionUtils");
return s;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n(e) {
"use strict";
if (null == this) throw new TypeError();
var t = Object(this), n = t.length >>> 0;
if (0 === n) return -1;
var i = 0;
if (arguments.length > 0) {
i = Number(arguments[1]);
i != i ? i = 0 : 0 != i && i != 1 / 0 && i != -1 / 0 && (i = (i > 0 || -1) * Math.floor(Math.abs(i)));
}
if (i >= n) return -1;
for (var o = i >= 0 ? i : Math.max(n - Math.abs(i), 0); o < n; o++) if (o in t && t[o] === e) return o;
return -1;
}
function i(e, t, n) {
return o.call(t, e, n);
}
var o = Array.prototype.indexOf;
"function" == typeof o && /\[native code\]/.test(o.toString()) || (o = n);
e.exports = i;
t(i, "jx_core_globals_indexOf");
return i;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
if (!(this instanceof i)) {
c || i._initSingleton(window);
return c;
}
if (e) return i.parseQuery(e);
this.store = {};
}
function o(e, t, n) {
if (void 0 === t && void 0 === n) return e;
void 0 === t && (t = "string");
if (!(t in a)) throw "invalid type requested";
return void 0 === e ? void 0 !== n ? n : a[t] : "boolean" === t ? s.test(e) : "integer" === t ? !0 === e ? 1 : parseInt(e, 10) : "float" === t ? !0 === e ? 1 : parseFloat(e) : e;
}
var r = n(8), s = /^(1|on|true)$/i, a = {
boolean: !1,
integer: 0,
float: 0,
string: ""
}, c = null;
i._initSingleton = function(e) {
c = new i(e.location.search);
};
i.buildQuery = function(e) {
var t, n, i, o, s, a, c = [], u = [];
for (s in e) e.hasOwnProperty(s) && c.push(s);
c.sort();
for (t = 0, i = c.length; t < i; t++) {
s = c[t];
a = e[s];
s = window.encodeURIComponent(s);
if (r(a)) if (1 !== a.length || !0 !== a[0]) for (n = 0, o = a.length; n < o; n++) u.push(s + "=" + window.encodeURIComponent(a[n] + "")); else u.push(s); else u.push(s + "=" + window.encodeURIComponent(a + ""));
}
return u.join("&");
};
i.parseQuery = function(e) {
var t, n, o = new i();
e = e.replace(/^\?|\/+$/g, "");
var r, s, a = e.split("&");
for (t = 0, n = a.length; t < n; t++) {
var c = a[t];
if (c.length) {
var u = c.indexOf("=");
if (u <= -1) {
r = c;
s = !0;
} else {
r = c.slice(0, u);
s = window.decodeURIComponent(c.slice(u + 1));
}
o.add(window.decodeURIComponent(r), s);
}
}
return o;
};
i.getHash = function(e, t) {
var n = t || window.location.hash;
return i.parseQuery(n.replace(/^#/, "")).get(e);
};
var u = i.prototype;
u.add = function(e, t) {
this.has(e) ? this.store[e].push(t) : this.store[e] = [ t ];
};
u.has = function(e) {
return this.store.hasOwnProperty(e);
};
u.getLast = function(e, t, n) {
return this.has(e) ? this.getAt(e, this.store[e].length - 1, t, n) : o(void 0, t, n);
};
u.getFirst = function(e, t, n) {
return this.getAt(e, 0, t, n);
};
u.getAt = function(e, t, n, i) {
return o(this.has(e) ? this.store[e][t] : void 0, n, i);
};
u.getRaw = function(e) {
return this.has(e) ? this.store[e].concat() : [];
};
u.get = u.getLast;
u.toString = function() {
return i.buildQuery(this.store);
};
e.exports = i;
t(i, "meshim_common_QueryString");
return i;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
return '"' + e.replace(f, o) + '"';
}
function o(e) {
return h[e] || "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
}
function r(e) {
switch (typeof e) {
case "string":
return i(e);

case "number":
return isFinite(e) ? e.toString() : "null";

case "boolean":
return String(e);

case "object":
if (!e) return "null";
var t, n, o = [];
if (u(e)) {
for (t = 0, n = e.length; t < n; t++) o[t] = r(e[t]) || "null";
return "[" + o.join(",") + "]";
}
var s, a, c = [];
for (s in e) e.hasOwnProperty(s) && c.push(s);
c.sort();
for (t = 0, n = c.length; t < n; t++) {
s = c[t];
a = r(e[s]);
a && o.push(i(s) + ":" + a);
}
if (o.length) return "{" + o.join(",") + "}";
}
}
function s(e, t, n) {
return t ? m[t] : String.fromCharCode(parseInt(n, 16));
}
function a(e) {
var t, n, i, o, r, a = e.match(d), c = a.length, u = a[0];
"{" == u ? (t = {}, r = 1) : "[" == u ? (t = [], r = 1) : (t = [], r = 0, n = !0);
var l = [ t ];
for (c = a.length; r < c; ++r) {
u = a[r];
switch (u.charCodeAt(0)) {
case 91:
o = l[0];
l.unshift(o[i || o.length] = []);
i = void 0;
break;

case 93:
l.shift();
break;

case 123:
o = l[0];
l.unshift(o[i || o.length] = {});
i = void 0;
break;

case 125:
l.shift();
break;

case 102:
o = l[0];
o[i || o.length] = !1;
i = void 0;
break;

case 110:
o = l[0];
o[i || o.length] = null;
i = void 0;
break;

case 116:
o = l[0];
o[i || o.length] = !0;
i = void 0;
break;

case 34:
u = u.substring(1, u.length - 1);
-1 !== u.indexOf(g) && (u = u.replace(p, s));
o = l[0];
if (void 0 == i) {
if (!(o instanceof Array)) {
i = u || _;
break;
}
i = o.length;
}
o[i] = u;
i = void 0;
break;

default:
o = l[0];
o[i || o.length] = +u;
i = void 0;
}
}
if (n) {
if (1 == l.length) return t[0];
} else if (!l.length) return t;
throw "error";
}
var c = n(2), u = n(8), l = (n(10), !c(window) && window.JSON || {
parse: a,
stringify: r
}), f = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, h = {
"\b": "\\b",
"\t": "\\t",
"\n": "\\n",
"\f": "\\f",
"\r": "\\r",
"\\": "\\\\",
'"': '\\"'
}, d = new RegExp('(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))', "g"), p = new RegExp("\\\\(?:([^u])|u(.{4}))", "g"), m = {
'"': '"',
"/": "/",
"\\": "\\",
b: "\b",
f: "\f",
n: "\n",
r: "\r",
t: "\t"
}, _ = new String(""), g = "\\";
e.exports = l;
t(l, "jx_data_JSON");
return l;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
var t, n, i = r.extend(this);
try {
t = new window.ActiveXObject("htmlfile");
t.open();
t.write("<script>document.win = window</script>");
t.close();
n = t.win;
} catch (e) {}
if (!n) {
var o = this.iframe = document.createElement("iframe"), a = o.style;
i.allowTransparency = "true";
i.frameBorder = "0";
a.backgroundColor = "transparent";
a.position = "absolute";
a.width = a.height = "1px";
a.left = a.top = "-9999px";
a.border = 0;
document.body.appendChild(o);
try {
n = o.contentWindow;
t = n.document;
t.open();
t.close();
} catch (e) {
i.fire("error");
i.destroy();
return;
}
}
i.doc = t;
i.win = n;
i.$Loader = {
cleanup: function() {
s(function() {
i.$Loader.payload ? i.fire("success", i.$Loader.payload) : i.fire("error");
i.$Loader.payload = null;
e || i.destroy();
});
}
};
i.reusable = e;
}
function o(e) {
return e && e.replace(a, function(e) {
return "&#" + e.charCodeAt(0) + ";";
});
}
var r = n(1), s = n(20);
i.prototype.setScope = function(e) {
this.scope = e;
};
var a = /[&<>"']/g;
i.prototype.load = function(e) {
if (/^(?:https?:)?\/\//i.test(e)) {
e = o(e);
try {
this.doc.open();
this.win.$Loader = this.$Loader;
this.win.$Loader.scope = this.scope || {};
this.doc.write('<html><head><script src="' + e + '"></script><script>document.addEventListener && document.addEventListener("DOMContentLoaded", function() {try { $Loader.cleanup() } catch(e) {}})</script></head><body></body></html>');
this.doc.close();
} catch (e) {
this.$Loader.cleanup();
}
} else this.$Loader.cleanup();
};
i.prototype.destroy = function() {
try {
this.iframe && document.body.removeChild(this.iframe);
this.doc = this.win = this.iframe = this.win.$Loader = null;
} catch (e) {}
};
e.exports = i;
t(i, "jx_io_DataIFrame");
return i;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
if (isNaN(e)) {
var n = new o();
n.add("_", e);
return n;
}
-1 == e && (e = v.length);
var i = v[e];
i || (v[e] = i = new o());
if ("string" == typeof t) i.add("_", t); else for (var r in t) t.hasOwnProperty(r) && i.add(r, t[r]);
return i;
}
function o() {
function e(e, t) {
u[e] = t;
}
function t(e) {
r(e, f);
}
function n(e) {
l.push(e);
}
function i() {
return s();
}
function s(e) {
return u[e || w] || u._;
}
function a(e) {
var t, n = s(e);
for (t = 0; t < l.length; t++) l[t](n);
}
function c(e, t) {
var n, i = new o();
v[u._] = i;
for (var r in u) if (u.hasOwnProperty(r)) {
n = u[r];
if ("string" != typeof n) continue;
n = n[e].apply(n, t);
i.add(r, n);
}
return i;
}
for (var u = {}, l = [], f = {
add: e,
bind: t,
onTranslate: n,
toJSON: i,
toString: s,
update: a
}, h = [ "concat", "replace", "toLowerCase", "toUpperCase" ], d = 0; d < h.length; d++) f[h[d]] = function(e) {
return function() {
return c(e, arguments);
};
}(h[d]);
return f;
}
function r(e, t) {
for (var n = 0; n < y.length; n++) if (y[n] == e) {
b[n] = t;
return;
}
y.push(e);
b.push(t);
}
function s(e) {
for (var t = 0; t < y.length; t++) if (y[t] == e) {
y.splice(t, 1);
b.splice(t, 1);
return;
}
}
function a(e) {
e = e.split(/-|_/).slice(0, 2);
var t = e[0] = e[0].toLowerCase();
e[1] && (e[1] = e[1].toUpperCase());
e = e.join("_");
return m.languages ? e in m.languages ? e : t in m.languages ? t : null : null;
}
function c(e) {
var t, n, o, r, s, c;
e = a(e);
if (e) {
s = m.languages[e];
if (s) {
c = _[m.languages[e]];
if (c) {
i.language = w = e;
g.ensureLoaded(c, function(i) {
i && u(e);
if (e == w) {
for (t = 0, n = v.length; t < n; t++) v[t].update instanceof Function && v[t].update(e);
for (t = 0, n = y.length; t < n; t++) {
o = y[t];
r = b[t].toString();
if (E) o.textContent = r; else if ("string" == typeof o.innerText) o.innerText = r; else if ("string" == typeof o.nodeValue) try {
o.data = r;
} catch (e) {}
}
$._active = !0;
n = $.length;
for (t = 0; t < n; t++) try {
$[t] && $[t](e);
} catch (e) {}
$._active = !1;
if ($._dirty) {
for (t = 0; t < n; t++) if (!$[t]) {
t == n - 1 ? $.pop() : $[t--] = $.pop();
n--;
}
$._dirty = !1;
}
}
});
}
}
}
}
function u(e) {
var t, n = _[m.languages[e]];
for (t = 0; t < n.length; t++) 0 !== n[t] && v[t].add(e, n[t]);
}
function l(e) {
$.push(e);
}
function f(e) {
for (var t = 0, n = $.length; t < n; t++) if ($[t] == e) {
$._active ? ($[t] = null, $._dirty = !0) : t == n - 1 ? $.pop() : $[t] = $.pop();
break;
}
}
function h() {
return !(-1 == w.search(x));
}
function d(e) {
return h() ? e.replace(/left/, "%left%").replace(/right/, "left").replace(/%left%/, "right").replace(/ltr/, "%ltr%").replace(/rtl/, "ltr").replace(/%ltr%/, "rtl") : e;
}
var p = n(3), m = n(5), _ = n(21), g = n(45), v = [], w = "_", y = [], b = [], $ = [], E = p.isTextContent, x = /^ar|^fa|^he|^ku|^ur/, k = m.strings;
if (k) for (var T = 0; T < k.length; T++) i(T, k[T]);
i.bind = r;
i.flip = d;
i.onLanguage = l;
i.unLanguage = f;
i.update = c;
i.unbind = s;
i.rtl = h;
i.findClosestLanguage = a;
e.exports = i;
t(i, "jx_core__");
return i;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var n = "[a-z0-9!#$%&'*+\\/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+\\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+([a-z0-9][a-z0-9-]*[a-z0-9])", i = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)", o = {
email: new RegExp("^" + n + "$", "i"),
ip_token: new RegExp("^" + i + "$"),
ip: new RegExp("^(?:" + i + "\\.){3}" + i + "$"),
tld: /^(AERO|ARPA|ASIA|A[CDEFGILMNOQRSTUWXZ]|BIZ|B[ABDEFGHIJMNORSTVWYZ]|CAT|COM|COOP|C[ACDFGHIKLMNORUVXYZ]|D[EJKMOZ]|EDU|E[CEGRSTU]|F[IJKMOR]|GOV|G[ABDEFGHILMNPQRSTUWY]|H[KMNRTU]|INFO|INT|I[DELMNOQRST]|JOBS|J[EMOP]|K[EGHIMNPRWYZ]|L[ABCIKRSTUVY]||MIL|MOBI|MUSEUM|M[ACDEGHKLMNOPQRSTUVWXYZ]|NAME|NET|N[ACEFGILOPRUZ]|ORG|OM|PRO|P[AEFGHKLMNRSTWY]|QA|R[EOSUW]|S[ABCDEGHIJKLMNORTUVYZ]|TEL|TRAVEL|T[CDFGHJKLMNOPRTVWZ]|U[AGKSYZ]|V[ACEGINU]|W[FS]|XN|Y[ET]|Z[AMW])$/i,
search: {
email: new RegExp(n, "ig"),
email_lws: new RegExp("(^|\\s+)" + n, "ig"),
hurl: /(^|\s+)(?:(?:https?|ftps?):\/\/)(?:\S+)/gi,
url: /(^|\s+)(?:[\w-]+\.)+(\w{2,})(?::[0-9]+)?(?:\/\S*)?/g,
phone_number: /(?:^|\s+)(?:(?:\+?\d{1,3}|\(\d{1,3}\))([-.\s])?)?\d{3,10}(?:([-.\s])\d{3,10})?/gi
},
escape: function(e) {
return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
};
e.exports = o;
t(o, "meshim_common_Regex");
return o;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n(e) {
return "string" == typeof e;
}
e.exports = n;
t(n, "jx_core_globals_isString");
return n;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
p = e;
}
function o(e) {
x = e ? w.getAuthServerURL(e) : w.AUTH_SERVER_URL;
}
function r(e) {
h = e;
}
function s() {
return h;
}
function a(e) {
if (d) {
+new Date() - d.issued_at >= d.expires_in - 6e4 ? y.authenticate(function(t) {
if (t) {
p && p.$("visitor").$("auth_status$string").update("failed");
e(t, null);
} else e(null, d.id_token);
}) : e(null, d.id_token);
} else e(null, null);
}
function c() {
h = void 0;
d = void 0;
p && p.$("visitor").$("authenticated$bool").update(!1);
}
function u() {
return !!d;
}
function l(e) {
h && h(_.once(function(t) {
t && m(t) ? y.exchangeToken({
account_key: w.ACCOUNT_KEY,
auth_url: x,
site_jwt: t,
state: d && d.state ? d.state : null
}, function(t, n) {
d = n;
p && p.$("visitor").$("authenticated$bool").update(!t);
e(t);
}) : e({
reason: "invalid jwt in callback"
});
}));
}
function f(e, t) {
var n = new g();
n.on("success", function(e) {
"object" != typeof e && t && t({
reason: b
});
e.success ? t && t(void 0, {
issued_at: +new Date(),
id_token: e.id_token,
expires_in: 1e3 * e.expires_in,
state: e.state
}) : t && t({
reason: E,
details: e.details
});
});
n.on("error", function() {
t && t({
reason: $
});
});
var i = {
account_key: e.account_key,
token: e.site_jwt,
format: "dataiframe"
};
e.state && (i.state = e.state);
n.load(e.auth_url + "?" + v.buildQuery(i));
}
var h, d, p, m = n(16), _ = n(9), g = n(13), v = n(11), w = n(4), y = {
authenticate: l,
isAuthenticated: u,
getSiteJWTFunc: s,
retrieveIDToken: a,
clearIdentity: c,
setOverrideHost: o,
setSiteJWTFunc: r,
setDataNode: i,
exchangeToken: f
}, b = "format error", $ = "network/security error", E = "jwt verification error", x = w.AUTH_SERVER_URL;
e.exports = y;
t(y, "meshim_widget_controllers_IdentityController");
return y;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i() {
x = b.ACCOUNT_KEY;
}
function o() {
if (b.IS_POPOUT) return y.get(S) || v().get("mid");
var e = f();
return e || (y.get(T) || "");
}
function r(e) {
y.set(T, e, {
path: "/",
ttl: 365,
domain: _
});
}
function s() {
y.remove(T, {
path: "/",
domain: _
});
}
function a() {
var e = h();
if ("boolean" == typeof e) return e;
var t = y.get(A);
t = parseInt(t, 10);
return 0 !== t && (1 === t || void 0);
}
function c() {
y.remove(A, {
path: "/",
domain: _
});
}
function u(e) {
e = g(e);
e = e ? 1 : 0;
y.set(A, e, {
path: "/",
ttl: 365,
domain: _
});
}
function l() {
s();
w.remove(k);
}
function f() {
var e = y.getJSONCookie("__zlcid");
y.remove("__zlcid", {
path: "/"
});
if (e.mID) return e.mID;
var t = d("__zlcstore");
y.remove("__zlcstore", {
path: "/",
domain: _
});
return t && t.mID ? t.mID : void 0;
}
function h() {
var e, t = d("__zlcprivacy");
if ("boolean" == typeof t) {
e = t;
u(t);
}
return e;
}
function d(e) {
return y.getJSONCookie(e)[x];
}
function p(e, t) {
var n = w.get(k) || {};
n[x] || (n[x] = {});
var i = n[x];
i[e] = t;
i.timestamp = +new Date();
w.set(k, n);
}
function m(e) {
var t = w.get(k) || {};
if (!t[x]) return {};
var n = t[x];
return n.timestamp ? +new Date() - n.timestamp > E ? {} : n[e] : n[e] || {};
}
var _, g = n(41), v = n(11), w = n(40), y = n(19), b = n(4), $ = n(7), E = 48e4, x = b.ACCOUNT_KEY, k = "__zlcstore", T = "__zlcmid", S = "__zlcpomid", A = "__zlcprivacy", D = window.location.hostname;
_ = /\b(?:\d{1,3}\.){3}\d{1,3}/.test(D) ? D : $.getEffectiveTLD(D);
var O = {
init: i,
DOM: {
saveVariable: p,
getVariable: m
},
Cookie: y,
clearAll: l,
setIdentity: r,
getIdentity: o,
clearIdentity: s,
clearAllowCookieLaw: c,
getAllowCookieLaw: a,
setAllowCookieLaw: u
};
e.exports = O;
t(O, "meshim_widget_controllers_StorageController");
return O;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
return "string" == typeof e && "" != e;
}
function o() {
var e, t, n, i, o = document.cookie, r = {};
if (!o || "string" != typeof o) return {};
o = o.split(/;\s/);
for (e = o.length; e--; ) try {
t = o[e].match(/^([^=]+)(=(.*))?$/);
if (!t) continue;
n = d(t[1]);
i = d(t[3] || "");
r[n] = i;
} catch (e) {}
return r;
}
function r(e) {
return i(e) ? o()[e] || null : null;
}
function s(e) {
var t = r(e), n = {};
try {
n = l.parse(t);
} catch (e) {}
return n && "object" == typeof n ? n : {};
}
function a(e, t, n) {
n = n || {};
var i = h(e) + "=" + h(t);
if ("ttl" in n) {
var o = new Date(), r = 24 * n.ttl * 60 * 60 * 1e3;
o.setTime(o.getTime() + r);
i += "; expires=" + o.toGMTString();
}
"path" in n && (i += "; path=" + n.path);
"domain" in n && (i += "; domain=" + n.domain);
n.secure && (i += "; secure");
document.cookie = i;
}
function c(e, t, n) {
"object" != typeof t && (t = {});
a(e, l.stringify(t), n);
}
function u(e, t) {
t = t || {};
t.ttl = -1;
a(e, "", t);
}
var l = n(12), f = {
set: a,
get: r,
getJSONCookie: s,
setJSONCookie: c,
remove: u
}, h = window.encodeURIComponent, d = window.decodeURIComponent;
e.exports = f;
t(f, "meshim_common_Cookie");
return f;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t, n) {
s.ok("function" == typeof e, "1st argument to nextTick must be a function");
if (n) for (var i = u.length; i-- > 0; ) if (u[i][0] === e && u[i][1] === t) return;
u.push([ e, t ]);
r || (r = setTimeout(o, 0));
}
function o() {
var e = +new Date() + c, t = u;
u = [];
r && (r = clearTimeout(r));
for (var n = 0, i = t.length; n < i; n++) {
try {
t[n][0].apply(t[n][1]);
} catch (e) {
a.fire("error", e);
}
if (+new Date() > e) {
if (n < i - 1) {
t.splice(0, n + 1);
if (u.length) u = t.concat(u); else {
u = t;
r = setTimeout(o, 0);
}
}
break;
}
}
}
var r, s = n(25), a = n(1), c = 100, u = [];
i.tick = o;
e.exports = i;
t(i, "jx_core_globals_nextTick");
return i;
}();
}).call(this, n(0));
}, function(e, t, n) {
var i = n(5), o = {};
o.$Data = i;
e.exports = o;
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
return t ? s(e, t) : o(e);
}
function o(e) {
for (var t, n, i = e.length; i > 1; ) {
t = Math.floor(i-- * Math.random());
n = e[t];
e[t] = e[i];
e[i] = n;
}
return e;
}
function r(e, t) {
if (!e || e.length <= 0) return -1;
if (!t) return Math.floor(Math.random() * e.length);
t = a(e, t);
var n, i = 0;
for (n = t.length; n--; ) i += t[n];
var o = Math.random() * i, r = 0, s = t.length;
for (n = 0; n < s - 1; n++) {
r += t[n];
if (o <= r) return n;
}
return n;
}
function s(e, t) {
var n, i, o, r, s, c = e.concat();
t = a(e, t);
e.length = 0;
s = 0;
for (n = t.length; n--; ) s += t[n];
o = Math.random() * s;
r = 0;
n = 0;
for (;c.length; ) {
r += t[n];
if (o <= r) {
s -= t[n];
i = c.splice(n, 1)[0];
t.splice(n, 1);
e.push(i);
o = Math.random() * s;
r = 0;
n = 0;
} else n++;
}
return e;
}
function a(e, t) {
if (u(t)) {
if (t.length === e.length) return t.concat();
throw new window.Error("Invalid weights array: length does not match");
}
if (l(t)) return c(e, t);
throw new window.Error("Invalid weights supplied");
}
function c(e, t, n) {
var i, o, r;
if (!u(e)) throw new TypeError(" arr is not an array");
var s = Object(e), a = s.length >>> 0;
if (!l(t)) throw new TypeError(t + " is not a function");
arguments.length > 2 && (i = n);
o = new Array(a);
r = 0;
for (;r < a; ) {
var c, f;
if (r in s) {
c = s[r];
f = t.call(i, c, r, s);
o[r] = f;
}
r++;
}
return o;
}
var u = n(8), l = n(6), f = {
shuffle: i,
random_index: r,
map: c
};
e.exports = f;
t(f, "meshim_common_ArrayUtils");
return f;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var n = function(e, t) {
return e === t || e && t && "object" == typeof e && "object" == typeof t && i(e, t);
}, i = function(e, t) {
var i;
for (i in e) if (!n(e[i], t[i])) return !1;
for (i in t) if (!n(e[i], t[i])) return !1;
return !0;
}, o = function(e) {
if ("object" != typeof e || !e) return e;
var t = {};
for (var n in e) e.hasOwnProperty(n) && (t[n] = o(e[n]));
return t;
}, r = function(e) {
if (e) for (var t = 1, n = arguments.length; t < n; t++) {
var i = arguments[t];
if (i) for (var o in i) i.hasOwnProperty(o) && (e[o] = i[o]);
}
return e;
}, s = {
equal: n,
clone: o,
extend: r
};
e.exports = s;
t(s, "jx_core_ObjectUtil");
return s;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n(e) {
return "number" == typeof e;
}
e.exports = n;
t(n, "jx_core_globals_isNumber");
return n;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
e || r.log(t);
}
var o = n(6), r = {
ok: i,
isFunction: function(e, t) {
i(o(e), t);
}
};
r.log = function() {};
e.exports = r;
t(r, "jx_core_Assert");
return r;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n(e, t) {
c = e.$("connection");
u = t.$("tmp");
f = c.$("status$string");
h = c.$("socket_status$string");
d = c.$("disconnection_status$string");
p = c.$("socket_resume_timestamp$int");
m = c.$("socket_open_timestamp$int");
_ = c.$("client_reattached_timestamp$int");
g = e.$("livechat").$("account").$("status$string");
v = e.$("visitor").$("auth_status$string");
c.bindValue(r);
}
function i() {
c && c.unbindValue(r);
}
function o() {
i();
l = clearTimeout(l);
c = u = null;
f = h = d = p = m = _ = g = v = null;
}
function r(e) {
e && "resume" == e.socket_status$string && (l = setTimeout(r, 1e3));
var t = s();
t && u.update({
friendly_connection_status$string: t
});
}
function s() {
var e = +new Date(), t = f.getValue(), n = h.getValue(), i = d.getValue(), o = p.getValue(), r = m.getValue(), s = _.getValue();
if ((n || t || i) && "disconnecting" !== i) {
if ("break" == n) {
if (w.indexOf(t) > -1) return "closed";
if ("disconnected" === i) return "closed";
}
return (null === n || "reconnect" == n || "resume" == n && e - o >= 1e3) && "reattached" === t && r <= s ? "connected" : "connecting";
}
}
function a() {
var e = f.getValue(), t = g.getValue(), n = d.getValue(), i = v.getValue();
return "banned" === t ? "banned" : "disconnected" === n ? "failed" === i ? "authentication_failed" : "logged_out" : "idle_disconnect" === e ? "idle_disconnect" : "error" === e || "shutdown" === e ? "server_error" : "unknown";
}
var c, u, l, f, h, d, p, m, _, g, v, w = [ "idle_disconnect", "shutdown", "error" ], y = {
init: n,
reset: o,
destroy: i,
getConnectionClosedReason: a
};
e.exports = y;
t(y, "meshim_widget_controllers_webSDKAPI_ConnectionStatusMonitor");
return y;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
t = t || window;
s = e.$("livechat").$("profile");
var n = {
window: a.extend(t, !0),
document: a.extend(t.document, !0)
};
n.document.on("mousemove", o);
n.window.on("click", o);
n.window.on("scroll", o);
n.window.on("keypress", o);
r();
}
function o() {
u++;
}
function r() {
u && s.write({
active$int: +new Date()
});
u = 0;
window.setTimeout(r, l);
}
var s, a = n(1), c = {
init: i
}, u = 1, l = 2e4;
e.exports = c;
t(c, "meshim_widget_controllers_Tracker");
return c;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var i = n(14), o = {
livechat: {
timestamp$int: +new Date(),
settings: {
file_sending: {
enabled$bool: !0
},
behavior: {
do_not_display$bool: !1
},
theme: {
name$string: "simple",
message_type$string: "bubble_avatar",
colors: {
placeholder$string: "_"
},
chat_button: {
position$string: "br",
position_mobile$string: "br"
},
chat_window: {
position$string: "br",
size$string: "medium",
profile_card: {
display_avatar$bool: !0,
display_rating$bool: !0,
display_title_name$bool: !0
},
use_banner$bool: !0,
title_bar: {
hide_minimize$bool: !1,
hide_popout$bool: !1
}
},
branding: {
type$string: "icon_font_zopim"
}
},
greetings: {
online$string: i("Chat With Us"),
offline$string: i("Leave a Message")
},
banner: {
enabled$bool: !0,
layout$string: "image_right",
text$string: i("Chat with us"),
image_path$string: "",
image_data$string: ""
},
chat_button: {
hide_when_offline$bool: !1
},
chat_window: {
mobile_mode$string: "popout",
title_bar: {
title$string: i("support"),
status_messages: {
online$string: i("We're online."),
away$string: i("We're away."),
offline$string: i("We're offline.")
}
}
},
login: {
allowed_types: {
email$bool: !0,
facebook$bool: !0,
twitter$bool: !1,
google$bool: !0
},
phone_display$bool: !1,
restrict_profile$bool: !1
},
concierge: {
display_name$string: i("Live Support"),
title$string: i("Ask us anything"),
avatar_path$string: "",
avatar_data$string: "",
greeting: {
enabled$bool: !1,
message$string: i("Hi, welcome to our website!")
}
},
branding: {
hide_branding$bool: !1,
hide_favicon$bool: !1,
custom_favicon_path$string: ""
},
language: {
language$string: "--"
},
cookie_law: {
enabled$bool: !1
},
sound: {
disabled$bool: !1
},
popout: {
enabled$bool: !0
},
rating: {
enabled$bool: !0
},
end_chat_menu: {
enabled$bool: !0,
message$string: ""
},
emoticons: {
enabled$bool: !1
},
bubble: {
enabled$bool: !0,
title$string: i("Questions?"),
text$string: i("Click here to chat with us")
},
forms: {
pre_chat_form: {
required$bool: !1,
profile_required$bool: !1,
message$string: "",
form: {
0: {
name$string: "name",
required$bool: 0
},
1: {
name$string: "email",
required$bool: 0
},
2: {
label$string: i("Choose a Department"),
name$string: "department",
required$bool: 0,
type$string: "department"
},
3: {
label$string: i("Message"),
name$string: "message",
required$bool: 0,
type$string: "textarea"
},
4: {
label$string: i("Phone"),
name$string: "phone",
required$bool: 0,
type$string: "text",
hidden$bool: !0
}
}
},
offline_form: {
message$string: i("Sorry, we aren't online at the moment. Leave a message and we'll get back to you."),
message_disabled$string: i("Sorry, we aren't online at the moment."),
post_submit_message$string: i("Thanks for the message! We'll get back to you as soon as we can."),
profile_required$bool: !0,
form: {
0: {
name$string: "name",
required$bool: 1
},
1: {
name$string: "email",
required$bool: 1
},
2: {
label$string: i("Message"),
name$string: "message",
required$bool: 1,
type$string: "textarea"
},
3: {
label$string: i("Phone"),
name$string: "phone",
required$bool: 0,
type$string: "text",
hidden$bool: !0
}
}
},
post_chat_form: {
header$string: i("Nice chatting with you!"),
message$string: i("How would you rate the chat experience you just had?"),
comments_enabled$bool: !0,
comments_messages: {
good: {
message$string: i("Thanks for the good rating! Would you like to leave a comment?"),
placeholder$string: i("What did you like about this chat?")
},
bad: {
message$string: i("Sorry that we disappointed you. We'd appreciate it if you could tell us how to improve."),
placeholder$string: i("What did you dislike about this chat?")
}
}
},
card_form: {}
}
}
}
};
e.exports = o;
t(o, "meshim_widget_controllers_DefaultDataNode");
return o;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var i = n(14), o = n(10), r = n(2), s = i("File size too large. Maximum limit is <size>."), a = i("The file you are trying to send is not supported."), c = i("File sending is temporarily disabled. Please try again later."), u = i("<size> bytes"), l = i("<size> KB"), f = i("<size> MB"), h = {};
h.ERR_SIZE = "TOO_LARGE";
h.ERR_FORMAT = "ILLEGAL_TYPE";
h.ERR_DISABLED = "FILE_UPLOADS_TEMPORARILY_DISABLED";
var d = /^(x-|vnd\.)/i, p = [ "png", "jpg", "jpeg", "gif", "txt", "pdf" ], m = {}, _ = i("Failed to send. Please try again.");
m[h.ERR_SIZE] = s;
m[h.ERR_FORMAT] = a;
m[h.ERR_DISABLED] = c;
h.prettySize = function() {
var e = [ u, l, f ], t = [ 0, 1, 2 ];
return function(n, i) {
n = Math.max(parseInt(n, 10) || 0, 0);
i = i || {};
for (var o, r = i.base2 ? 1024 : 1e3, s = e.length; s--; ) {
o = Math.pow(r, s);
if (n >= o) return e[s].replace("<size>", (n / o).toFixed(t[s]));
}
};
}();
h.prettyType = function(e, t, n) {
n = n || window.Infinity;
var i = e.split("/")[1];
i = i && i.replace(d, "");
if (i && i.length < n) return i.toLowerCase();
i = t.split(".").pop();
return (i || "").toLowerCase();
};
h.isValidType = function(e, t) {
if (e) {
t = t || p;
var n = e.substr(e.lastIndexOf(".") + 1).toLowerCase();
return -1 !== o(n, t);
}
};
h.prettyError = function(e, t) {
var n = e in m ? m[e] : _;
r(t) || (n = n.replace("<size>", h.prettySize(t || 5e6)));
return n;
};
h.blobToFile = function(e, t, n) {
e.lastModifiedDate = new Date();
e.name = t;
return new window.File([ e ], t, {
type: n
});
};
h.getExtension = function(e) {
var t = e.lastIndexOf(".");
return -1 === t ? null : e.substr(t + 1).toLowerCase();
};
e.exports = h;
t(h, "meshim_common_FileUtil");
return h;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
f = e;
h = t;
f.$("livechat").$("channel").$("department_id$int").on("value", function(e) {
e && (d = e);
});
}
function o(e, t, n) {
var i = parseInt(t, 10) || parseInt(h.getServerTime().toFixed(0), 10), o = i + "", r = f.$("livechat").$("profile"), s = d, a = (e.msg || "") + "";
"department" in e && (s = e.department);
f.$("livechat").$("channel").$("log").$(o).write({
timestamp$int: i,
type$string: "chat.msg",
msg$string: a,
nick$string: r.$("nick$string").getValue() || "",
display_name$string: r.$("display_name$string").getValue() || "",
department_id$int: s,
unverified$bool: !0,
__client$bool: !0
}, n);
}
function r(e, t) {
var n = parseInt(t, 10) || parseInt(h.getServerTime().toFixed(0), 10), i = n + "";
f.$("livechat").$("channel").$("log").$(i).write({
timestamp$int: n,
nick$string: f.$("livechat").$("profile").$("nick$string").getValue() || "",
display_name$string: f.$("livechat").$("profile").$("display_name$string").getValue() || "",
type$string: "chat.file.upload",
file_name$string: e.file_name || "",
file_type$string: e.file_type || "",
file_size$int: e.file_size || 0,
unverified$bool: !0,
__client$bool: !0
});
return n;
}
function s(e, t) {
function n(e) {
if ("ok" !== e.raw.__status) return t(new window.Error(l(e.raw.error)));
if (!e.raw.data || "chat.file" !== e.raw.data.type) return t(new window.Error("INTERNAL_ERROR"));
t(null, y.pick(e.raw.data, [ "mime_type", "name", "size", "url", "metadata" ]));
}
var i = E._validateAndPrepareData([ e ]);
t = _.once(t);
if (p(i)) m(function() {
t(new window.Error(i));
}); else {
var o = h.registerCallback(n), r = "https://" + i.host + g.CALLBACK_FILE_UPLOAD_PATH, s = {
ts: parseInt(h.getServerTime().toFixed(0), 10),
__messageID: o
}, a = {
"X-Zopim-MID": i.mid,
"X-Zopim-UID": i.uid
}, c = {
error: function() {
t(new window.Error("CONN_ERROR"));
},
load: function() {
if (200 !== this.status) {
var e;
try {
e = JSON.parse(this.responseText);
} catch (e) {}
t(e && e.error ? new window.Error(l(e.error)) : new window.Error("INTERNAL_ERROR"));
}
}
};
E._uploadFiles(i.form_data, r, s, a, c);
}
}
function a(e, t) {
var n = E._validateAndPrepareData(e);
if (p(n)) return n;
var i = r({
file_name: n.name,
file_type: n.type,
file_size: n.size
}, t), o = "https://" + n.host + g.FILE_UPLOAD_PATH, s = {
ts: i
}, a = {
"X-Zopim-MID": n.mid,
"X-Zopim-UID": n.uid
};
E._uploadFiles(n.form_data, o, s, a);
}
function c(e) {
if (!window.FormData) return "NOT_SUPPORTED";
var t = f.$("livechat"), n = t.$("settings").$("file_sending"), i = t.$("settings").$("package"), o = n.$("enabled$bool").getValue(), r = (n.$("allowed_extensions$string").getValue() || "").trim().replace(/\s*,\s*/g, ",").split(","), s = i.$("color_customization_enabled$int").getValue() || i.$("widget_customization_enabled$int").getValue(), a = t.$("profile").$("mid$string").getValue(), c = t.$("profile").$("uid$string").getValue(), u = h.getHost(), l = new window.FormData(), d = [], p = [], m = 0;
if (!u) return "CONN_ERROR";
if (!s) return "INVALID_PLAN";
if (!o) return "NOT_ALLOWED";
for (var _ = 0, w = e.length; _ < w; _++) {
if (!v.isValidType(e[_].name, r)) return "INVALID_EXTENSION";
d.push(e[_].name);
p.push(e[_].type);
m += e[_].size || 0;
l.append("file_" + e[_].name, e[_]);
}
return m > g.FILE_UPLOAD_MAX ? "EXCEED_SIZE_LIMIT" : {
form_data: l,
name: d.join(", "),
type: p.join(", "),
size: m,
host: u,
mid: a,
uid: c
};
}
function u(e, t, n, i, o) {
var r = new window.XMLHttpRequest(), s = t + (Object.keys(n).length ? "?" + w.buildQuery(n) : "");
if (r.upload) {
r.open("POST", s, !0);
for (var a in i) i.hasOwnProperty(a) && r.setRequestHeader(a, i[a]);
for (var c in o) o.hasOwnProperty(c) && r.addEventListener(c, o[c]);
r.send(e);
}
}
function l(e) {
return $[e] || "UNKNOWN_ERROR";
}
var f, h, d, p = n(16), m = n(20), _ = n(9), g = n(4), v = n(29), w = n(11), y = n(7), b = {
NOT_SUPPORTED: "NOT_SUPPORTED",
NOT_ALLOWED: "NOT_ALLOWED",
CONN_ERROR: "CONN_ERROR",
INVALID_EXTENSION: "INVALID_EXTENSION",
INVALID_PLAN: "INVALID_PLAN",
EXCEED_SIZE_LIMIT: "EXCEED_SIZE_LIMIT",
INTERNAL_ERROR: "INTERNAL_ERROR",
UNKNOWN_ERROR: "UNKNOWN_ERROR"
}, $ = {
TOO_LARGE: "EXCEED_SIZE_LIMIT",
ILLEGAL_TYPE: "INVALID_EXTENSION",
NO_SESSION: "INTERNAL_ERROR",
UNEXPECTED_ERROR: "INTERNAL_ERROR",
UNABLE_TO_GET_SETTINGS: "INTERNAL_ERROR",
S3_UPLOAD_ERROR: "INTERNAL_ERROR",
NO_GATES: "INTERNAL_ERROR",
FILE_UPLOADS_DISABLED: "NOT_ALLOWED",
FILE_UPLOADS_TEMPORARILY_DISABLED: "INVALID_PLAN"
}, E = {
FILE_SENDING_ERRORS: b,
init: i,
sendChatMsg: o,
sendFiles: a,
sendFileWithCallback: s,
_validateAndPrepareData: c,
_uploadFiles: u
};
e.exports = E;
t(E, "meshim_widget_controllers_ChatUtils");
return E;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var n = {};
n.SECOND = 1e3;
n.MINUTE = 60 * n.SECOND;
n.HOUR = 60 * n.MINUTE;
n.DAY = 24 * n.HOUR;
n.WEEK = 7 * n.DAY;
e.exports = n;
t(n, "meshim_common_Time");
return n;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t, n, i, o, r, c, u) {
this.CLUSTERS = e.CLUSTERS;
this.WEIGHTS = e.WEIGHTS;
this.NEAR_MAP = e.NEAR_MAP;
this.FALLBACKS = e.FALLBACKS;
this.geo_code = n || "geo";
this.default_domain = t;
this.supported_domains = (u || []).concat(this.default_domain);
var l = s.map(this.supported_domains, a.escape);
this.supported_proxy_re = new RegExp("^[a-z][a-z0-9_-]*(\\.[a-z][a-z0-9_-]*)*(" + l.join("|") + ")(:\\d+)?$", "i");
this.cluster_hosts = [];
this.host_list = [];
this.host_index = 0;
this.last_connected_host = o && this.getValidatedHost(o);
this.override_proxy = i && this.getValidatedHost(i);
this.num_primary_hosts = r || 0;
this.num_fallback_hosts = c || 0;
this.init();
}
var o = n(24), r = n(10), s = n(22), a = n(15), c = /^([a-z][a-z0-9_-]*)(:\d+)?$/i, u = i.prototype;
u.init = function() {
var e = this.geo_code && this.geo_code in this.NEAR_MAP ? this.NEAR_MAP[this.geo_code] : this.NEAR_MAP.DEFAULT;
if (!e) throw "Error: no cluster code found for " + this.geo_code;
if (e in this.CLUSTERS) this._growClusterHosts(e, this.num_primary_hosts); else if (!this.override_proxy && !this.last_connected_host) throw "Error: " + e + " has no cluster definition";
if (e in this.FALLBACKS) for (var t = this.FALLBACKS[e], n = 0, i = t.length; n < i; n++) {
var o = t[n];
o in this.CLUSTERS && this._growClusterHosts(o, this.num_fallback_hosts);
}
this._makeHostList();
};
u._verifyHostInGeoConfig = function(e) {
var t = this;
return Object.keys(t.CLUSTERS).some(function(n) {
return t.CLUSTERS[n].some(function(n) {
return e === t.getValidatedHost(n);
});
});
};
u._growClusterHosts = function(e, t) {
var n = this.CLUSTERS[e], i = this.getWeights(e);
s.shuffle(n, i);
t && (n = n.slice(0, t));
this.cluster_hosts = this.cluster_hosts.concat(n);
};
u.getWeights = function(e) {
if (!(e in this.CLUSTERS)) return [];
var t, n = this.CLUSTERS[e], i = n.length, r = new Array(i);
if (this.WEIGHTS && this.WEIGHTS[e]) {
var s = this.WEIGHTS[e];
for (t = i; t--; ) {
var a = n[t];
r[t] = o(s[a]) ? s[a] : 1;
}
} else for (t = i; t--; ) r[t] = 1;
return r;
};
u.getValidatedHost = function(e, t) {
if (e) {
if (!t && c.test(e)) return this._expandSimpleHost(e);
if (this.supported_proxy_re.test(e)) return e;
}
return !1;
};
u._expandSimpleHost = function(e) {
return e.replace(c, "$1" + this.default_domain + "$2");
};
u._makeHostList = function() {
var e = this, t = s.map(this.cluster_hosts, function(t) {
return e._expandSimpleHost(t);
}), n = [];
this.override_proxy && n.push(this.override_proxy);
this.last_connected_host && this.last_connected_host !== this.override_proxy && this._verifyHostInGeoConfig(this.last_connected_host) && n.push(this.last_connected_host);
t = t.filter(function(e) {
return -1 === r(e, n);
});
this.host_list = n.concat(t);
this.host_index = 0;
};
u.getHostList = function() {
return this.host_list;
};
u.getNextHost = function() {
return this.host_index >= this.host_list.length ? "" : this.host_list[this.host_index++];
};
u.hasNext = function() {
return this.host_index < this.host_list.length;
};
u.rewind = function() {
this.host_index = 0;
};
u.pushHostToLast = function(e) {
var t, n = this.getValidatedHost(e), i = r(n, this.host_list);
if (-1 !== i) {
t = this.host_list.splice(i, 1);
this.host_list = this.host_list.concat(t);
}
};
e.exports = i;
t(i, "meshim_common_GeoAccess");
return i;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
window.__$__GEO = e;
}
function o(e, t) {
this.clusters_config = e;
this.setGeoCode("geo" === a ? c : a);
try {
if (t.length <= 0) throw "SSI cluster definition not found";
if ("<" == t.charAt(0)) throw "SSI not processed";
this.clusters_config = JSON.parse(t);
} catch (e) {}
}
var r = n(32), s = n(23), a = '<!--# echo var="http_cf_ipcountry" default="geo" -->'.toUpperCase(), c = '<!--# echo var="geoip_country_code" default="geo" -->'.toUpperCase(), u = [ ".zopim.net", ".zopim.org", ".zdch.at" ];
"<" == a.charAt(0) && (a = "geo");
"<" == c.charAt(0) && (c = "geo");
o.SUPPORTED_DOMAINS = u;
var l = o.prototype;
l.getGeoCode = function() {
return this.countryCode;
};
l.setGeoCode = function(e) {
if (e && "--" !== e) {
this.countryCode = e;
i(e);
}
};
l.updateClustersConfig = function(e) {
try {
s.extend(this.clusters_config, JSON.parse(e));
} catch (e) {
window.console && window.console.log("Unable to process update");
}
};
l.getGeoAccess = function(e, t, n, i, o, s) {
return new r(this.clusters_config, o || ".zopim.com", this.countryCode, e, t, n, i, s || u);
};
e.exports = o;
t(o, "meshim_common_GeoAccessFactory");
return o;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var n = {
CLUSTERS: {
US: [ "us08", "us10", "us12", "us14", "us16", "us18", "us20", "us22", "us24", "us26", "us28", "us30", "us32", "us34", "us36", "us38", "us40", "us42", "us44", "us46" ],
DE: [ "de04", "de06", "de08", "de10", "de12", "ie02", "ie04", "ie06", "ie08", "ie10", "ie12", "ie14", "ie16", "de14", "de16", "de18", "de20", "ie18", "ie20", "ie22", "ie24", "de22", "de24", "de26", "de28" ],
SG: [ "sg06", "sg08", "sg10", "sg12", "sg14", "sg16", "sg18", "sg20" ],
JP: [ "jp02", "jp04", "jp06", "jp08" ],
AU: [ "au02", "au04" ],
BR: [ "br02", "br04", "br06", "br08", "br10", "br12" ]
},
FALLBACKS: {
US: [ "DE" ],
DE: [ "US" ],
SG: [ "US" ],
JP: [ "US" ],
AU: [ "SG", "US" ],
BR: [ "US" ]
},
NEAR_MAP: {
AL: "DE",
AD: "DE",
AM: "DE",
AT: "DE",
BY: "DE",
BE: "DE",
BA: "DE",
BG: "DE",
CH: "DE",
CY: "DE",
CZ: "DE",
DE: "DE",
DK: "DE",
EE: "DE",
ES: "DE",
EU: "DE",
FO: "DE",
FI: "DE",
FR: "DE",
GB: "DE",
GE: "DE",
GI: "DE",
GR: "DE",
HU: "DE",
HR: "DE",
IE: "DE",
IM: "DE",
IS: "DE",
IT: "DE",
LT: "DE",
LU: "DE",
LV: "DE",
MC: "DE",
MK: "DE",
MT: "DE",
NO: "DE",
NL: "DE",
PK: "DE",
PO: "DE",
PT: "DE",
RO: "DE",
SA: "DE",
SE: "DE",
SI: "DE",
SK: "DE",
SM: "DE",
TR: "DE",
UA: "DE",
VA: "DE",
ZA: "DE",
NG: "DE",
MA: "DE",
AP: "SG",
BD: "SG",
BN: "SG",
CN: "SG",
ID: "SG",
IN: "SG",
LA: "SG",
KH: "SG",
LK: "SG",
MM: "SG",
MY: "SG",
SG: "SG",
TH: "SG",
VN: "SG",
AU: "AU",
NZ: "AU",
HK: "JP",
KR: "JP",
JP: "JP",
PH: "US",
RU: "JP",
TW: "JP",
AR: "BR",
BO: "BR",
BR: "BR",
CL: "BR",
PE: "BR",
PY: "BR",
UY: "BR",
DEFAULT: "US"
}
};
e.exports = n;
t(n, "meshim_config_geo_WidgetMediatorsAccessDefinition");
return n;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
var t = this, n = this.longpoll = new s(!0), i = this.sender = new s(!0);
n.on("success", function(e) {
t.process_data(e);
});
n.on("error", function() {
t.abort("longpoll error");
});
i.on("success", function() {
t.ondrain && t.ondrain();
});
i.on("error", function() {
t.abort("sender error");
});
this.url = "https://" + e;
o.window.on("unload", this.unload = function() {
t.abort("unload");
});
this.longpoll.load(this.url + [ "c", +new Date() ].join("/"));
}
var o = n(1), r = i;
i.protocol = "xdds";
var s = n(13);
i.prototype.process_data = function(e) {
if (e && !this._abort) {
!this.ts && this.onopen && this.onopen();
this.ts = +new Date();
this.onmessage && this.onmessage(e, this.ts);
this.longpoll && this.longpoll.load(this.url + [ "p", +new Date() ].join("/"));
}
};
i.prototype.send = function(e) {
if (this._abort) return !1;
var t = this.url + [ "d", +new Date(), window.encodeURIComponent(e) ].join("/");
this.sender && this.sender.load(t);
return !1;
};
i.prototype.abort = function(e) {
if (!this._abort) {
this._abort = !0;
a("XDDS - abort: " + e);
o.window.un("unload", this.unload);
this.longpoll.destroy();
this.sender.destroy();
this.longpoll = this.sender = this.unload = null;
this.onclose && this.onclose(e);
window.CollectGarbage && window.CollectGarbage();
}
};
var a = function() {};
e.exports = r;
t(r, "jx_io_socket_XDomainDynScript");
return r;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n(e) {
var t = new i("wss://" + e + [ "c", +new Date() ].join("/")), n = this;
t.onclose = function(e) {
n.onclose && n.onclose(e);
};
t.onerror = function(e) {
n.onerror && n.onerror(e);
};
t.onmessage = function(e) {
n.onmessage && n.onmessage(e.data, +new Date());
};
t.onopen = function(e) {
n.onopen && n.onopen(e);
};
this.ws = t;
}
var i = window.WebSocket || window.MozWebSocket, o = i ? n : null;
n.prototype.abort = function() {
if (!this._aborted) {
this._aborted = !0;
var e = this.ws;
e.readyState == i.CONNECTING ? e.onopen = function() {
e.close();
} : e.close();
}
};
n.prototype.send = function(e) {
this.ws.send(e);
return !0;
};
n.protocol = "ws";
e.exports = o;
t(o, "jx_io_socket_WebSocket");
return o;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
function t(e) {
!c && r.onopen && r.onopen();
c = +new Date();
e.origin == i && ("event-stream" == e.data ? s.onload = null : r.onmessage && r.onmessage(e.data, c));
}
var n, i, r = this, s = this.iframe = o("iframe");
this.url = "https://" + e;
s.src = this.src = n = this.url + [ "c", +new Date() ].join("/");
i = n.match(/https?:\/\/[^\/]+/)[0];
s.onload = function(e) {
r.abort(e);
};
document.body.insertBefore(s, document.body.firstChild);
a("SPM connecting to: " + this.url);
window.addEventListener("message", t, !1);
this.remove_listeners = function() {
window.removeEventListener("message", t, !1);
};
var c;
}
function o(e) {
var t = document.createElement(e), n = t.style;
n.position = "absolute";
n.width = n.height = 0;
n.overflow = "hidden";
return t;
}
var r = n(3), s = window.postMessage ? !r.isAndroid && i : null;
i.protocol = "spm";
i.prototype.send = function(e) {
this.iframe.contentWindow.postMessage(e, this.src);
return !0;
};
i.prototype.abort = function(e) {
if (!this._abort) {
this._abort = !0;
a(e);
this.iframe && document.body.removeChild(this.iframe);
this.onclose && this.onclose(e);
this.remove_listeners();
this.iframe = this.remove_listeners = null;
}
};
var a = function() {};
e.exports = s;
t(s, "jx_io_socket_StreamingPostMessage");
return s;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
function t(e) {
c("extracting data");
!n && s.onopen && s.onopen();
n = e;
u += i.responseText.substr(l);
l = i.responseText.length;
u = u.split("\n\n");
for (var t = 0; t < u.length - 1; t++) s.onmessage && s.onmessage(u[t], n);
u = u[u.length - 1];
(l > 1048576 && !u.length || l > 4194304) && s.abort();
}
var n, i = this.xhr = new r(), s = this, u = "", l = 0;
this.url = a + e;
i.open("GET", this.url + [ "c", +new Date() ].join("/"), !0);
i.onerror = function(e) {
s.abort(e);
};
if (o.isIE) {
i.onprogress = function() {
t(+new Date());
};
i.onload = function() {
s.abort("close");
};
} else i.onreadystatechange = function() {
switch (i.readyState) {
case 3:
t(+new Date());
break;

case 4:
s.abort("close");
}
};
c("CXHR connecting to: " + this.url);
i.send();
}
var o = n(3), r = o.isIE ? window.XDomainRequest : !o.isOpera && !o.isAndroid && window.XMLHttpRequest, s = r ? i : null, a = o.isIE ? "//" : "https://";
i.protocol = "cxhr";
i.prototype.send = function(e) {
function t() {
c.abort("send failed");
}
function n() {
c.xhr_sender = null;
clearTimeout(i);
c.ondrain && c.ondrain();
}
var i, s = this.url + [ "d", +new Date() ].join("/"), a = new r(), c = this;
a.open("POST", s, !0);
a.send(e);
if (o.isIE) {
a.onerror = t;
a.onload = n;
} else a.onreadystatechange = function() {
if (4 == a.readyState) {
200 != a.status && t();
n();
}
};
i = setTimeout(t, 5e3);
this.xhr_sender = a;
return !1;
};
i.prototype.abort = function(e) {
if (!this._abort) {
this._abort = !0;
c(e);
this.xhr && this.xhr.abort();
this.xhr_sender && this.xhr_sender.abort();
this.onclose && this.onclose(e);
this.onerror = this.onload = this.onprogress = this.onreadystatechange = this.xhr = this.xhr_sender = null;
}
};
var c = function() {};
e.exports = s;
t(s, "jx_io_socket_ChunkedXHR");
return s;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t, n, o) {
this.options = o = o || {};
for (var r in g) g.hasOwnProperty(r) && (r in o || (o[r] = g[r]));
if (!m && !o.PREFERRED_PROVIDER) throw "No available transports";
u.extend(this);
this.provider = o.PREFERRED_PROVIDER || m;
this.id = n || i.generateID();
this.host = e;
this.ns = t;
this.path = "/" + [ "s", this.ns, this.provider.protocol, this.id ].join("/");
this.url = this.host + this.path + "/";
this.status = "connecting";
this.connected = !1;
this.quality = 0;
this.rtt = o.INITIAL_RTT;
this.clock_skew = 0;
this.connect_attempts = 0;
this.connections = 0;
this.disconnects = 0;
this.sent_bytes = 0;
this.recv_bytes = 0;
this.sent_messages = 0;
this.recv_messages = 0;
this.sent_frames = 0;
this.recv_frames = 0;
this.lost_frames = 0;
this.ooo_frames = 0;
this.remote_seq = 0;
this.local_seq = 0;
this.timeout_server = 0;
this.timeout_response_soft = 0;
this.timeout_response_hard = 0;
this.bytes_at_connect = -1;
this.time_last_alive = -1;
this.time_last_open = -1;
this.starttime = Date.now();
this.uptime = 0;
this.connected_time = new a();
this.idle_time = new a();
this.last_frame_time = 0;
this.raw_clock_skew = 0;
this.smooth_skewed_transit_time_in = 0;
this.remote_smooth_skewed_transit_time_out = 0;
this.cur_conn_recv_messages = 0;
this.drained = !0;
this.buffer = [];
this.glitch_timer = this.reconnect_timer = null;
this.reconnect_delay = o.RECONNECT_DELAY_MS * (.2 * Math.random() + .8);
this.keep_alive_interval = 15e3;
this.data_packet_queue = new c(this);
this.connect();
var s = this;
this.onoffline = function() {
i.prototype.onoffline.call(s);
};
this.ononline = function() {
i.prototype.ononline.call(s);
};
u.window.on("offline", this.onoffline);
u.window.on("online", this.ononline);
}
function o() {
var e = y, t = new Date(), n = t.getUTCFullYear() - 2e3, i = t.getUTCMonth() + 1, o = t.getUTCDate(), r = t.getUTCHours(), s = t.getUTCMinutes(), a = t.getUTCSeconds(), c = t.getUTCMilliseconds();
return e[n] + e[i] + e[o] + e[r] + e[s] + e[a] + e[c >> 6] + e[63 & c];
}
function r(e) {
for (var t = "", n = y; e-- > 0; ) t += n.charAt(Math.floor(Math.random() * n.length));
return t;
}
function s(e, t, n) {
return Math.min(n, Math.max(t, e));
}
function a() {
this.count = 0;
this.sum = 0;
this.sq_sum = 0;
this.mean = 0;
this.stddev = 0;
}
function c(e) {
this.socket = e;
this.queue = [];
this.curFrame = null;
this.curIdx = 0;
this.last_work_finished_time = 0;
this.work_timer = null;
this.processing = !1;
}
var u = n(1), l = n(12), f = n(38), h = n(37), d = n(36), p = n(35), m = d || f || h || p, _ = p, g = {
INITIAL_RTT: 1e3,
RECONNECT_DELAY_MS: 3e4,
FAST_RECONNECT_MS: 100,
FLUSH_DELAY_MS: 75,
MAX_BLOCKING_TIME_MS: 40,
MAX_NO_WORK_TIME_MS: 15,
PREFERRED_PROVIDER: void 0
};
i.providers = {};
[ f, h, d, p ].forEach(function(e) {
e && (i.providers[e.protocol] = e);
});
i.available = function() {
return !!m;
};
i.generateID = function() {
return r(16);
};
i.prototype.connect = function(e) {
this.debug("connect(" + (e && "glitch" || "") + ")");
if (!this.reconnect_timer) {
var t = this, n = this.options, i = !this.connections || !this.cur_conn_recv_messages;
!n.PREFERRED_PROVIDER && i && (this.provider = 1 & this.connect_attempts ? _ : m);
this.response_timer = clearTimeout(this.response_timer);
this.timeout_timer = clearTimeout(this.timeout_timer);
if (this.socket) {
this.socket.onclose = this.socket.ondrain = this.socket.onerror = this.socket.onmessage = this.socket.onopen = null;
this.socket.abort("connect");
this.socket = null;
}
this.connected = !1;
this.cur_conn_recv_messages = 0;
if (e) {
this.reconnect_delay = n.RECONNECT_DELAY_MS * (.2 * Math.random() + .9);
this.glitch_timer = setTimeout(function() {
t.quality = 0;
t.glitch_timer = setTimeout(function() {
t.status = "reconnecting";
t.fire_break();
}, s(3 * t.rtt, 1e3, 5e3));
}, s(3 * this.rtt, 1e3, 5e3));
}
this.debug("reconnect_delay: " + this.reconnect_delay);
clearTimeout(this.reconnect_timer);
this.reconnect_timer = setTimeout(function() {
t.reconnect_timer = null;
t.reconnect_delay = Math.min(1.4 * t.reconnect_delay + 1e3, 6e4);
t.reconnect_delay *= .2 * Math.random() + .9;
t.connect();
}, this.reconnect_delay);
this.path = "/" + [ "s", this.ns, this.provider.protocol, this.id ].join("/");
this.url = this.host + this.path + "/";
this.debug("connecting: " + this.url);
this.socket = new this.provider(this.url);
this.transport = this.provider.protocol;
this.connect_attempts++;
this.socket.onopen = function() {
t.status = "connected";
t.glitch_timer = clearTimeout(t.glitch_timer);
t.reconnect_timer = clearTimeout(t.reconnect_timer);
t.connections++;
t.drained = !0;
t.connected = !0;
t.time_last_open = t.time_last_alive = Date.now();
t.uptime >= 0 && (t.uptime -= t.time_last_open);
1 == t.connections ? t.fire("open") : t.fire_resume();
t.flush();
t.keep_alive();
t.debug("connected");
-1 == t.bytes_at_connect && setTimeout(function() {
t.bytes_at_connect = t.recv_bytes;
}, 50);
};
this.socket.onmessage = function(e, n) {
t.onmessage(e, n);
};
this.socket.onclose = function(e) {
t._onclose(e);
};
this.socket.ondrain = function(e) {
t._ondrain(e);
};
this.socket.onerror = function(e) {
t._onerror(e);
};
}
};
i.prototype.reconnect = function() {
this.reconnect_timer = clearTimeout(this.reconnect_timer);
this.broken_reason = "FORCED_RECONNECT";
this.connect();
};
i.prototype.send = function(e, t) {
if ("disconnected" != this.status) {
"null" == this.buffer[0] && (this.buffer = []);
this.buffer.push(l.stringify(e));
this.schedule_flush();
t && this.response_timeout();
}
};
i.prototype.close = function(e) {
this.debug("close()");
this.flush_scheduled = clearTimeout(this.flush_scheduled);
this.keep_alive_timer = clearTimeout(this.keep_alive_timer);
this.reconnect_timer = clearTimeout(this.reconnect_timer);
this.response_timer = clearTimeout(this.response_timer);
this.timeout_timer = clearTimeout(this.timeout_timer);
this.broken_reason || (this.broken_reason = "CLOSE");
this.fire_break();
this.status = e ? "reconnecting" : "disconnected";
this.connected = !1;
this.quality = 0;
if (this.socket) {
this.socket.onclose = this.socket.ondrain = this.socket.onerror = this.socket.onmessage = this.socket.onopen = null;
this.socket.abort("close");
this.socket = null;
if (!e) {
u.window.un("offline", this.onoffline);
u.window.un("online", this.ononline);
}
}
};
i.prototype.hibernate = function() {};
i.prototype.onoffline = function() {
this.broken_reason = "OFFLINE";
this.debug("onoffline");
this.close(!0);
};
i.prototype.ononline = function() {
this.debug("ononline");
if ("disconnected" != this.status && !this.connected) {
this.reconnect_timer = clearTimeout(this.reconnect_timer);
this.connect();
}
};
i.prototype.schedule_flush = function() {
if ("disconnected" != this.status && !this.flush_scheduled && this.drained && this.connected) {
var e = this, t = this.options;
this.flush_scheduled = setTimeout(function() {
e.flush();
}, t.FLUSH_DELAY_MS);
}
};
i.prototype.flush = function() {
if ("disconnected" != this.status && this.buffer.length && this.drained && this.connected) {
var e = this.buffer;
this.sent_messages += e.length;
this.sent_frames++;
e = this.generate_frame(e.join("\n"));
this.drained = this.socket.send(e);
this.sent_bytes += e.length;
this.flush_scheduled = clearTimeout(this.flush_scheduled);
this.buffer = [];
this.keep_alive();
this.time_last_alive = Date.now();
}
};
i.prototype.keep_alive = function() {
if ("disconnected" != this.status) {
clearTimeout(this.keep_alive_timer);
var e = this;
this.keep_alive_timer = setTimeout(function() {
e.debug("pong!");
e.send(null);
}, this.keep_alive_interval);
}
};
i.prototype.response_timeout = function() {
if (!this.response_timer) {
var e = this, t = s(4 * this.rtt + this.options.FLUSH_DELAY_MS, 2e3, 2e4);
this.response_timer = setTimeout(function() {
e.timeout_response_soft++;
e.debug("response timeout, " + t + "ms");
e.fire_break("SOFT_RESPONSE_TIMEOUT");
e.response_timer = setTimeout(function() {
e.timeout_response_hard++;
e.debug("response timeout - reconnecting");
e.broken_reason = "HARD_RESPONSE_TIMEOUT";
e.connect(!0);
}, 2 * t);
}, t);
}
};
i.prototype.reset_server_timeout = function() {
clearTimeout(this.timeout_timer);
var e = this, t = 4 * this.keep_alive_interval + s(4 * e.rtt, 2e3, 2e4);
this.timeout_timer = setTimeout(function() {
e.timeout_server++;
e.debug("server " + t + "ms timeout, reconnecting");
e.broken_reason = "SERVER_TIMEOUT";
e.connect(!0);
}, t);
};
i.prototype.fire_break = function(e) {
this.broken || this.fire("break", e || this.broken_reason);
this.broken = !0;
this.broken_reason = "";
this.uptime < 0 && (this.uptime += Date.now());
};
i.prototype.fire_resume = function() {
this.broken_reason = "";
this.broken && this.fire("resume");
this.broken = !1;
this.uptime >= 0 && (this.uptime -= Date.now());
};
i.prototype.onmessage = function(e, t) {
this.recv_bytes += e.length;
e = e.split("\n");
if (e.length < 6) this.debug("Bad data: " + e.join("\n")); else {
var n = Date.now(), i = +e[0], o = +e[1], r = +e[2], s = (e[3], e[4]);
this.calculate_clocks(t || Date.now(), i, o);
this.reset_server_timeout();
switch (s) {
case "a":
this.broken_reason = "ABORT";
this.close();
break;

case "d":
this.response_timer = clearTimeout(this.response_timer);
this.fire_resume();
this.check_sequence(r);
this.data_packet_queue.queueFrame(e, 5, n);
break;

case "e":
this.debug("server: Are you still there?");
this.send(null);
this.flush();
break;

case "n":
this.remote_seq = r;
this.keep_alive_interval = +e[5] || 15e3;
this.debug("keep_alive is " + this.keep_alive_interval + "ms");
this.connections > 1 && this.fire("reopen");
break;

case "p":
this.debug("ping!");
}
}
};
i.prototype._onclose = function() {
var e = this, t = this.options;
0 == this.connections && 0 == this.disconnects && this.fire("close");
this.debug("_onclose");
this.disconnects++;
this.broken_reason = "HANGUP";
if (this.connected) this.reconnect_timer = setTimeout(function() {
e.reconnect_timer = null;
e.connect(!0);
}, t.FAST_RECONNECT_MS); else if (!this.connections && 1 == this.connect_attempts) {
clearTimeout(this.reconnect_timer);
this.reconnect_timer = setTimeout(function() {
e.reconnect_timer = null;
e.connect();
}, 0);
}
this.connected = !1;
clearTimeout(this.keep_alive_timer);
this.time_last_alive > 0 && this.idle_time.add(Date.now() - this.time_last_alive);
this.time_last_open > 0 && this.connected_time.add(Date.now() - this.time_last_open);
this.time_last_alive = this.time_last_open = -1;
this.uptime < 0 && (this.uptime += Date.now());
};
i.prototype._ondrain = function() {
this.drained = !0;
this.flush();
};
i.prototype._onerror = function(e) {
this.debug("_error");
this.fire("error", e);
};
i.prototype.generate_frame = function(e, t) {
return [ Date.now(), this.smooth_skewed_transit_time_in, ++this.local_seq, this.remote_seq, t || "d", e ].join("\n");
};
var v = Math.pow(50, .1), w = Math.pow(1e3, .1) - v;
i.prototype.calculate_clocks = function(e, t, n) {
var i = e - t, o = Math.max(0, e - this.last_frame_time), r = 1 / (o / 45e3 + 1);
this.smooth_skewed_transit_time_in ? this.smooth_skewed_transit_time_in = r * this.smooth_skewed_transit_time_in + (1 - r) * i : this.smooth_skewed_transit_time_in = i;
this.remote_smooth_skewed_transit_time_out = n;
if (this.smooth_skewed_transit_time_in && this.remote_smooth_skewed_transit_time_out) {
this.rtt = this.smooth_skewed_transit_time_in + this.remote_smooth_skewed_transit_time_out;
this.quality = ~~(100 * (1 - (Math.pow(this.rtt, .1) - v) / w));
this.quality = Math.min(100, Math.max(0, this.quality));
this.raw_clock_skew = i - this.rtt / 2;
this.clock_skew ? this.clock_skew = .9 * this.clock_skew + .1 * this.raw_clock_skew : this.clock_skew = this.raw_clock_skew;
}
this.time_last_alive = this.last_frame_time = e;
};
i.prototype.check_sequence = function(e) {
if (this.remote_seq + 1 == e) this.remote_seq = e; else if (this.remote_seq < e) {
var t = e - this.remote_seq + 1;
this.lost_frames += t;
this.fire("lost", t);
this.remote_seq = e;
} else {
this.ooo_frames++;
this.fire("out_of_order");
}
};
m && (i.prototype.transport = m.protocol);
i.prototype.debug = function() {};
var y = "+-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
i.genDate = o;
i.genID = r;
a.prototype.add = function(e) {
this.count++;
this.sum += e;
this.sq_sum += e * e;
this.mean = this.sum / this.count;
this.stddev = Math.sqrt(this.sq_sum / this.count - this.mean * this.mean);
};
var b = c.prototype;
b.queueFrame = function(e, t, n) {
this.queue.push({
msgs: e,
start_idx: t,
receive_time: n
});
this.process();
};
b.process = function() {
var e = Date.now() - this.last_work_finished_time;
if (!(this.processing && e < this.socket.options.MAX_NO_WORK_TIME_MS)) {
this.work_timer = window.clearTimeout(this.work_timer);
this.processing = !0;
this.work();
}
};
b.work = function() {
for (var e, t, n, i = Date.now() + this.socket.options.MAX_BLOCKING_TIME_MS, o = !1, r = this.socket.recv_frames, s = this, a = 0; a < this.queue.length; a++) {
e = this.queue[a];
if (!("start_time" in e)) {
e.start_time = Date.now();
e.ticks = 0;
e.idx = e.start_idx;
}
e.ticks++;
t = e.msgs;
n = t.length;
for (;e.idx < n; ) {
var c, u = Date.now();
if (u > i) {
o = !0;
break;
}
this.socket.dispatch_delay = u - e.receive_time;
try {
c = l.parse(t[e.idx]);
e.idx++;
} catch (n) {
this.socket.debug("Invalid json message: " + t[e.idx]);
continue;
}
this.socket.fire("message", c);
this.socket.recv_messages++;
this.socket.cur_conn_recv_messages++;
}
e.idx >= n && this.socket.recv_frames++;
if (o) break;
}
this.queue.splice(0, this.socket.recv_frames - r);
this.queue.length ? this.work_timer = window.setTimeout(function() {
s.work();
}, 0) : this.processing = !1;
this.last_work_finished_time = Date.now();
};
e.exports = i;
t(i, "jx_io_Socket");
return i;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
return function() {
try {
var t = Array.prototype.slice.call(arguments, 0);
t.unshift(r);
f.appendChild(r);
r.addBehavior("#default#userData");
r.load(l);
var n = e.apply(a, t);
f.removeChild(r);
return n;
} catch (e) {}
};
}
function o(e) {
return e.replace(d, "___");
}
var r, s = n(12), a = {}, c = window, u = c.document, l = "localStorage";
a.disabled = !1;
a.set = function() {};
a.get = function() {};
a.remove = function() {};
a.clear = function() {};
a.transact = function(e, t, n) {
var i = a.get(e);
if (null == n) {
n = t;
t = null;
}
void 0 === i && (i = t || {});
n(i);
a.set(e, i);
};
a.getAll = function() {};
a.serialize = function(e) {
return s.stringify(e);
};
a.deserialize = function(e) {
if ("string" == typeof e) try {
return s.parse(e);
} catch (t) {
return e || void 0;
}
};
if (function() {
try {
return l in c && c[l];
} catch (e) {
return !1;
}
}()) {
r = c[l];
a.set = function(e, t) {
if (void 0 === t) return a.remove(e);
r.setItem(e, a.serialize(t));
return t;
};
a.get = function(e) {
return a.deserialize(r.getItem(e));
};
a.remove = function(e) {
r.removeItem(e);
};
a.clear = function() {
r.clear();
};
a.getAll = function() {
for (var e = {}, t = 0; t < r.length; ++t) {
var n = r.key(t);
e[n] = a.get(n);
}
return e;
};
} else if (u.documentElement.addBehavior) {
var f, h;
try {
h = new window.ActiveXObject("htmlfile");
h.open();
h.write('<script>document.w=window</script><iframe src="/favicon.ico"></frame>');
h.close();
f = h.w.frames[0].document;
r = f.createElement("div");
} catch (e) {
r = u.createElement("div");
f = u.body;
}
var d = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
a.set = i(function(e, t, n) {
t = o(t);
if (void 0 === n) return a.remove(t);
e.setAttribute(t, a.serialize(n));
e.save(l);
return n;
});
a.get = i(function(e, t) {
t = o(t);
return a.deserialize(e.getAttribute(t));
});
a.remove = i(function(e, t) {
t = o(t);
e.removeAttribute(t);
e.save(l);
});
a.clear = i(function(e) {
var t = e.XMLDocument.documentElement.attributes;
e.load(l);
for (var n, i = 0; n = t[i]; i++) e.removeAttribute(n.name);
e.save(l);
});
a.getAll = i(function(e) {
for (var t, n = e.XMLDocument.documentElement.attributes, i = {}, r = 0; t = n[r]; ++r) {
var s = o(t.name);
i[t.name] = a.deserialize(e.getAttribute(s));
}
return i;
});
}
try {
a.set("__storejs__", "__storejs__");
"__storejs__" != a.get("__storejs__") && (a.disabled = !0);
a.remove("__storejs__");
} catch (e) {
a.disabled = !0;
}
a.enabled = !a.disabled;
var p = a;
e.exports = p;
t(p, "meshim_common_DOMStorage");
return p;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n(e) {
return !!e && "false" != e;
}
e.exports = n;
t(n, "jx_core_globals_parseBoolean");
return n;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
function t() {
if ("prerender" != document.visibilityState) {
document.removeEventListener("visibilitychange", t);
Ie.connect();
}
}
ie = e.isCookieDenied;
oe = e.overrideProxy;
re = e.source;
se = e.lastHost;
ae = e.source_ver;
G = e.root;
Y = G.$("tmp").$("api_settings");
X = G.$("tmp").$("server_settings");
Z = G.$("livechat").$("settings").$("cached$bool");
B = G.$("connection");
J = B.$("server_retired$bool");
ee = B.$("server_ready$bool");
ee.bindValue(a);
J.bindValue(s);
W = G.$("livechat").$("ui").$("mockup$bool").getValue();
if (W) B.$("status$string").update("reattached"); else {
G.$("livechat").$("profile").bindValue(r);
B.$("status$string").bindValue(o);
B.$("socket_status$string").bindValue(D);
G.bindWrite(M);
B.$("reconnect$bool").bindValue(_);
if (window.__z_sdk) q = !0; else {
q = !1;
"visibilityState" in document && "prerender" == document.visibilityState ? document.addEventListener("visibilitychange", t) : Ie.connect();
}
}
}
function o(e) {
Se = "reattached" == e;
if (Se) {
B.update({
client_reattached_timestamp$int: +new Date()
});
M();
}
Se && !1 === q && O();
if ("idle_disconnect" == e || "shutdown" == e || "error" == e) {
var t = G.$("livechat").$("account").$("status$string").getValue(), n = G.$("connection").$("backoff"), i = n.$("active$int").getValue() || 0, o = n.$("max_seconds$int").getValue();
"invalid_account_key" == t ? _e.warnBadEmbed() : "widget_v2" == re && "shutdown" == e && i && o && p(o);
h();
}
D();
}
function r(e) {
e && (ie() || de.IS_POPOUT || e.mid$string && pe.setIdentity(e.mid$string));
}
function s(e) {
Q = !0 === e;
}
function a(e) {
te = !1 !== e;
if (te) {
Oe = !1;
c();
}
}
function c() {
for (var e = 0, t = De.length; e < t; e++) {
var n = De[e];
ue(n) && n();
}
De = [];
}
function u(e) {
if (!te || Q) {
B.update({
server_ready$bool: !1
});
De.push(e);
if (!Oe) {
Oe = !0;
K.reconnect();
}
} else e();
}
function l(e) {
K && K.send(e);
}
function f(e) {
for (var t = -1, n = 0; n < ke.length; n++) if (ke[n].socket == e) {
t = n;
break;
}
if (-1 !== t) {
var i = ke[t].expiryTimer;
e.close();
clearTimeout(i);
}
}
function h(e) {
K && f(K);
H = !e;
K = null;
Te = "";
}
function d() {
window.clearTimeout(Ie.reconnectTimer);
h(!0);
Ie.connect();
}
function p(e) {
window.clearTimeout(Ie.reconnectTimer);
Ie.reconnectTimer = window.setTimeout(function() {
Ie.reconnect();
}, 1e3 * e);
}
function m() {
B.update({
status$string: "idle_disconnect"
});
}
function _(e) {
e && d();
}
function g(e) {
var t = ce || new ge(e, "W", null, be);
t.on("open", function() {
b(e, t);
});
return t;
}
function v() {
var e = w();
try {
ne = xe.getGeoAccess(oe, e, 3, 2);
} catch (e) {
window.console && window.console.log("Unable to compute host list");
return;
}
y($e);
}
function w() {
return se || B.$("server$string").getValue() || "";
}
function y(e) {
function t() {
clearTimeout(o);
i.un("close", t);
y(e);
}
if (!K && !H) {
var n = ne.getNextHost();
if (n) {
Re++;
var i = g(n);
ke.push({
socket: i,
expiryTimer: setTimeout(function() {
i != K && i.close();
}, Ee)
});
if (ne.hasNext()) {
var o = setTimeout(t, e);
i.on("close", t);
}
}
}
}
function b(e, t) {
if (!W) if (K) f(t); else {
B.update({
socket_open_timestamp$int: +new Date(),
socket_status$string: null,
disconnection_status$string: null
});
Te = e;
K = t;
K.on("break", E);
K.on("message", $);
K.on("reopen", k);
K.on("resume", x);
K.on("error", function() {
var e = this.connect_attempts, t = this.recv_messages;
if (e > 3 && 0 == t) {
h(!0);
y($e);
}
});
S();
}
}
function $(e) {
if (e) {
if (e.raw && e.raw.__messageID in Le) {
var t = Le[e.raw.__messageID];
delete Le[e.raw.__messageID];
t(e);
}
var n = G;
if ("update" in e) {
var i = _e.getValueByReference(e, "livechat.account");
if (i) {
X.$("account").update(i);
_e.fullyExtend(i, Y.getValue("account"));
}
var o = _e.getValueByReference(e, "livechat.settings");
if (o) {
X.$("settings").update(o);
_e.fullyExtend(o, Y.getValue("settings"));
}
var r = _e.getValueByReference(e, "livechat.profile.mid$string");
if (r && r !== pe.getIdentity()) {
G.$("livechat").$("channel").update(null);
G.$("livechat").$("profile").update(null);
G.$("livechat").$("ui").$("chat_button").$("unread_count$int").update(0);
}
e.path && (n = n.descend(e.path));
n.update(e.update);
Ie.fire("message", e);
}
}
}
function E() {
B.update({
socket_status$string: "break"
});
}
function x() {
B.update({
socket_resume_timestamp$int: +new Date(),
socket_status$string: "resume"
});
}
function k() {
B.update({
socket_open_timestamp$int: +new Date(),
socket_status$string: "reconnect"
});
Se = !1;
S();
}
function T() {
var e = pe.getIdentity(), t = ie(), n = G.$("livechat").$("ui").getValue("mobile$bool") ? "mobile" : "desktop", i = G.$("livechat").$("settings").$("theme").getValue("name$string"), o = {
__type: "register",
accountKey: de.ACCOUNT_KEY,
mID: e,
ua: window.navigator.userAgent,
dt: n,
theme: i,
cookie_law: t,
rev: le.git_commit,
source: re,
source_ver: ae
};
if (G.$("livechat").$("ui").$("popout$bool").getValue()) o.popout = !0; else {
o.title = document.title;
o.url = window.location.href;
o.ref = window.document.referrer;
}
var r = Ie._register;
if (r) for (var s in r) r.hasOwnProperty(s) && (o[s] = r[s]);
return o;
}
function S() {
if (de.ACCOUNT_KEY) {
K || Ie.connect();
var e = T();
me.retrieveIDToken(function(t, n) {
if (t) z(); else {
if (n) {
delete e.mID;
e.idt = n;
}
l(e);
}
});
}
}
function A() {
return !!Z.getValue();
}
function D() {
var e = B.getValue("status$string"), t = B.getValue("socket_status$string");
window.clearTimeout(R.timer);
if ("error" != e) if ("break" == t) if ("idle_disconnect" == e) B.update({
message$string: "idle_disconnect"
}); else {
B.update({
message$string: "reconnecting"
});
R.timer = window.setTimeout(R, 6e4);
} else if (null === t && "registered" == e) B.update({
message$string: "resuming"
}); else if (fe(e) && fe(t)) {
var n = A() ? "fast_init" : "first_init";
B.update({
message$string: n
});
} else B.update({
message$string: null
}); else R.timer = window.setTimeout(R, 5e3);
}
function O() {
K && G.$("livechat").$("profile").write({
disconnect_timeout$int: U(K.rtt)
});
}
function R() {
B.update({
message$string: "disconnected"
});
}
function C() {
var e = K;
return e ? {
connect_attempts: e.connect_attempts,
connections: e.connections,
disconnects: e.disconnects,
timeout_server: e.timeout_server,
timeout_response_soft: e.timeout_response_soft,
timeout_response_hard: e.timeout_response_hard,
sent_bytes: e.sent_bytes,
recv_bytes: e.recv_bytes,
sent_messages: e.sent_messages,
recv_messages: e.recv_messages,
sent_frames: e.sent_frames,
recv_frames: e.recv_frames,
lost_frames: e.lost_frames,
ooo_frames: e.ooo_frames,
bytes_at_connect: e.bytes_at_connect,
rtt: e.rtt,
clock_skew: e.clock_skew,
reconnect_delay: e.reconnect_delay,
quality: e.quality,
host: e.host,
status: e.status,
zone: window.__$__GEO,
last_frame_time: e.last_frame_time,
local_time: +new Date()
} : {
status: "not connected"
};
}
function L() {
return Te;
}
function I() {
return +new Date() - (K ? K.clock_skew : 0);
}
function N(e) {
Ce += 1;
Le[Ce] = e;
return Ce;
}
function M(e) {
if (e) {
var t = {};
t.path = e.path;
t.value = e.value;
ue(e.func) && (t.__messageID = N(e.func));
Ae.push(t);
}
if (K && Se) for (;Ae.length; ) K.send(Ae.shift());
}
function P(e) {
return e ? X.getValue(e) : X.getValue();
}
function U(e) {
var t, n, i = 10 * ye.SECOND, o = 1 * ye.SECOND, r = 120 * ye.SECOND, s = 20 * ye.SECOND;
e = Math.round(e) || 0;
e = Math.max(o, Math.min(e, i));
t = (e - o) / (i - o);
n = s + function(e) {
return e;
}(t) * (r - s);
return Math.floor(n / 1e3);
}
function V(e) {
ce = e;
}
function j() {
F();
}
function z() {
B.update({
disconnection_status$string: "disconnecting"
});
h();
ke.forEach(function(e) {
f(e.socket);
e.socket.fire("close");
});
R.timer = clearTimeout(R.timer);
B.update({
disconnection_status$string: "disconnected"
});
}
function F() {
ee.unbindValue(a);
J.unbindValue(s);
G.$("livechat").$("profile").unbindValue(r);
B.$("status$string").unbindValue(o);
B.$("socket_status$string").unbindValue(D);
B.$("reconnect$bool").unbindValue(_);
z();
ke = [], Te = "", Se = !1, Ae = [], De = [], Oe = !1, Re = 0, Ce = 0, Le = {}, q = H = G = B = K = W = Y = X = Z = J = Q = ee = te = ne = ie = oe = re = se = ae = ce = null;
}
var q, H, G, B, K, W, Y, X, Z, J, Q, ee, te, ne, ie, oe, re, se, ae, ce, ue = n(6), le = n(5), fe = n(2), he = n(1), de = n(4), pe = n(18), me = n(17), _e = n(7), ge = n(39), ve = n(34), we = n(33), ye = n(31), be = {
FLUSH_DELAY_MS: 0,
RECONNECT_DELAY_MS: 1e4
}, $e = 3e3, Ee = 6e4, xe = new we(ve, !1), ke = [], Te = "", Se = !1, Ae = [], De = [], Oe = !1, Re = 0, Ce = 0, Le = {}, Ie = he.extend({
init: i,
send: l,
connect: v,
reconnect: d,
clientDisconnect: z,
destroy: F,
disconnect: m,
getConnectionStats: C,
getHost: L,
getServerTime: I,
getServerSettings: P,
reconnectIfServerRetired: u,
registerCallback: N,
getDCTimeoutValue: U,
setSocket: V,
reset: j
});
e.exports = Ie;
t(Ie, "meshim_widget_controllers_ConnectionController");
return Ie;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i() {
var e = this;
this.arr = [];
this.validate = m.bind(this.validate, this);
v.concat([ "validateAndThrow", "validateAndLog" ]).forEach(function(t) {
e.validate[t] = e[t].bind(e);
});
return this.validate;
}
function o(e) {
return function(t) {
if (0 === e.length) return !1;
for (var n = 0, i = e.length; n < i; n++) {
if (!(0, e[n])(t)) return !1;
}
return new _('Expect "' + t + '" to fulfill at least one condition');
};
}
function r(e) {
return function(t) {
if (t !== e) return new _('expect "' + t + '" to equal "' + e + '"');
};
}
function s(e, t) {
return function(n) {
if ("object" != typeof n || !n) return new _('Expect "' + n + '" to be an object');
if (t && t.requiredKeys) for (var i = 0, o = t.requiredKeys.length; i < o; i++) {
var r = t.requiredKeys[i];
if (!(r in n)) return new _('Expect key "' + r + '" to be defined');
}
for (var s in n) if (n.hasOwnProperty(s)) {
var a, c = n[s], u = e[s];
if (!u) continue;
a = u(c);
if (a) return a;
}
};
}
function a(e) {
return function(t) {
if (typeof t !== e) return new _('Expect "' + t + '" to have type "' + e + '"');
};
}
function c() {
return function(e) {
if (!e) return new _('Expect "' + e + '" to be truthty');
};
}
function u(e) {
return function(t) {
e.lastIndex = 0;
if (!e.test(t)) return new _('Expect "' + t + '" to match predefined format');
};
}
function l() {
return function(e) {
if (!p(e)) return new _('Expect "' + e + '" to be an Array');
};
}
function f(e) {
return function(t) {
var n;
if (!p(t)) return new _('Expect "' + t + '" to be an Array');
for (var i = 0, o = t.length; i < o; i++) {
n = e(t[i]);
if (n) return n;
}
};
}
function h(e) {
return e;
}
function d(e) {
var t = window.console;
t.error ? t.error(e) : t.log && t.log(e);
}
var p = n(8), m = n(9), _ = window.Error, g = {
any: o,
equal: r,
obj: s,
type: a,
ok: c,
chain: h,
regex: u,
array: l,
each: f
}, v = Object.keys(g), w = i.prototype;
v.forEach(function(e) {
var t = g[e];
i[e] = w[e] = function() {
if (!(this instanceof i)) {
var n = new i();
return n[e].apply(n, arguments);
}
var o = t.apply(null, arguments);
this.arr.push(o);
return this.validate;
};
});
w.validate = function(e) {
for (var t, n, i = 0, o = this.arr.length; i < o; i++) {
t = this.arr[i];
n = t(e);
if (n) return n;
}
};
w.validateAndThrow = function(e, t) {
var n = this.validate(e);
t = t ? t + " - " : "";
if (n) throw new _(t + n.message);
};
w.validateAndLog = function(e, t) {
var n = this.validate(e);
t = t ? t + " - " : "";
if (n) {
d(new _(t + n.message));
return n;
}
};
e.exports = i;
t(i, "meshim_widget_utils_Validator");
return i;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t, n) {
var i = this;
o.extend(i);
var s = new r();
t = t || {};
s.setScope(t);
s.on("success", n);
s.on("error", function(e) {
i.onError(e);
});
s.load(e);
}
var o = n(1), r = n(13);
i.prototype.onError = function(e) {};
e.exports = i;
t(i, "jx_io_ScriptLoader");
return i;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
var n = a[e];
n.module_function = new Function("$Modules", t.toString().replace(f, "$1"));
n.ready();
}
function o(e) {
var t, n, i, o;
for (t = l.length - 1; t >= 0; t--) {
i = l[t];
o = i.dependencies;
for (n = o.length - 1; n >= 0; n--) if (o[n] == e) {
o.splice(n, 1);
break;
}
i.ready();
}
}
function r() {
var e = Array.prototype.slice.call(arguments), t = e.shift();
this.fqname = t;
this.name = t.split(".").pop();
this.callbacks = [];
this.dependencies = e;
l.push(this);
}
function s(e) {
e();
}
var a = n(21), c = n(5), u = n(44), l = [], f = /^function *\( *\) *{ *([\s\S]*) *}$/;
r.ensureLoaded = function(e, t) {
e instanceof r ? e.ensureLoaded(t) : t();
};
r.prototype.ensureLoaded = function(e) {
this.ifLoaded(e);
this.load();
};
r.prototype.ifLoaded = function(e) {
this.callbacks.push(e);
};
r.prototype.load = function() {
function e(e) {
i(e[0], e[1]);
}
var t, n, o = this.getDependencies();
for (t = 0; t < o.length; t++) {
n = o[t];
n.loader || (n.loader = new u(c.baseURL + "/lib/" + c.build_number + "/" + n.fqname + ".js", a, e));
}
};
r.prototype.getDependencies = function() {
var e, t = this.dependencies, n = [ this ];
for (e = 0; e < t.length; e++) {
var i = a[t[e]];
n = n.concat(i.getDependencies());
}
return n;
};
r.prototype.ready = function() {
if (!this.dependencies.length && this.module_function) {
for (e = l.length - 1; e >= 0; e--) if (l[e] == this) {
l.splice(e, 1);
break;
}
this.module_function(a);
var e, t = a[this.fqname];
t.ifLoaded = t.ensureLoaded = s;
for (e = 0; e < this.callbacks.length; e++) this.callbacks[e](t);
o(this.fqname);
delete this.callbacks;
delete this.fqname;
delete this.name;
delete this.dependencies;
delete this.loader;
}
};
a.Module = r;
e.exports = r;
t(r, "jx_core_Module");
return r;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function n() {
var e = window.navigator.userAgent || "", t = window.navigator.vendor || "", n = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i, i = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, o = e || t || window.opera;
return n.test(o) || i.test(o.substr(0, 4));
}
e.exports = n;
t(n, "meshim_widget_utils_isMobileBrowser");
return n;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e, t) {
function n() {
a = !a;
e.apply(o, i);
}
var i, o, r, s, a = !0;
return function() {
i = Array.prototype.slice.call(arguments);
o = this;
if (a) {
s = setTimeout(function() {
a = !0;
}, t);
return n();
}
s && clearTimeout(s);
r && clearTimeout(r);
r = setTimeout(n, t);
};
}
function o(e, t) {
function n() {
e.apply(o, i);
}
var i, o, r;
return function() {
r && clearTimeout(r);
i = Array.prototype.slice.call(arguments);
o = this;
r = setTimeout(n, t);
};
}
function r(e, t) {
function n() {
s = +new Date();
r = null;
e.apply(o, i);
}
var i, o, r, s = 0;
return function() {
i = Array.prototype.slice.call(arguments);
o = this;
if (!r) {
var e = +new Date() - s;
e >= t ? n() : r = setTimeout(n, t - e);
}
};
}
function s(e, t) {
function n() {
s = +new Date();
i = o.length > 1 ? setTimeout(n, t) : null;
e.apply(r.shift(), o.shift());
}
var i, o = [], r = [], s = 0;
return function() {
o.push(Array.prototype.slice.call(arguments));
r.push(this);
if (!i) {
var e = +new Date() - s;
e >= t ? n() : i = setTimeout(n, t - e);
}
};
}
var a = (n(9), {
debounceExceptFirst: i,
debounce: o,
throttle: r,
queue: s
});
e.exports = a;
t(a, "meshim_common_AsyncUtils");
return a;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(n) {
e.exports = function() {
function e(e, t) {
this.name = e;
this.leaf = /\$[a-z]+$/.test(e);
this.parentNode = t;
this.listeners_value = [];
this.listeners_write = [];
if (!this.leaf) {
this.deleted = !1;
this.listeners_keys = [];
this.childNodes = {};
this.keys = {};
}
}
function i(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}
function o(e) {
for (var t = "", n = 0; n < e.length; n++) /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(e[n]) ? t += "." + e[n] : t += "[" + JSON.stringify(e[n]) + "]";
return t.substr(1);
}
e.prototype.fqname = function() {
return o(this.path());
};
e.prototype.path = function() {
for (var e = this, t = [ this.name ]; e = e.parentNode; ) t.unshift(e.name);
return t;
};
e.prototype.descend = function(t) {
var n, o, r, s = this;
"string" == typeof t && (t = t.split("."));
for (o = 0, r = t.length; o < r; o++) {
n = t[o];
i(s.childNodes, n) || (s.childNodes[n] = new e(n, s));
s = s.childNodes[n];
}
return s;
};
e.prototype.$$ = e.prototype.descend;
e.prototype.$ = function(t, n, o, r, s, a, c, u, l) {
var f = i(this.childNodes, t) ? this.childNodes[t] : this.childNodes[t] = new e(t, this);
return n ? f.$(n, o, r, s, a, c, u, l) : f;
};
e.prototype.update = function(e, t) {
var n, i, o, r, s;
null != e && this.undeleteParents();
if (this.leaf) {
if (this.value !== e) {
this.value = e;
r = !0;
this.notifyListeners(e, t);
}
} else if (null == e) {
if (!this.deleted) {
r = null;
this.deleted = !0;
for (n in this.childNodes) this.childNodes.hasOwnProperty(n) && this.childNodes[n].update(null, !0);
this.notifyListeners(r, t);
}
} else {
if (this.deleted) {
this.deleted = !1;
r = e;
for (n in e) e.hasOwnProperty(n) && this.$(n).update(e[n], !0);
} else for (n in e) if (e.hasOwnProperty(n)) {
o = this.$(n);
i = e[n];
if (o.leaf) {
if (o.update(i, !0)) {
r || (r = {});
r[n] = i;
}
} else if (void 0 !== (s = o.update(i, !0))) {
r || (r = {});
r[n] = s;
}
}
r && this.notifyListeners(r, t);
}
return r;
};
e.prototype.replace = function(e, t) {
var n, o, r, s, a;
null != e && this.undeleteParents();
if (this.leaf) {
if (this.value !== e) {
this.value = e;
s = !0;
this.notifyListeners(e, t);
}
} else if (null == e) {
if (!this.deleted) {
s = null;
this.deleted = !0;
for (n in this.childNodes) this.childNodes.hasOwnProperty(n) && this.childNodes[n].replace(null, !0);
this.notifyListeners(s, t);
}
} else {
if (this.deleted) {
this.deleted = !1;
s = e;
for (n in e) e.hasOwnProperty(n) && this.$(n).replace(e[n], !0);
} else {
for (n in this.childNodes) if (this.childNodes.hasOwnProperty(n)) {
if (i(e, n)) continue;
r = this.childNodes[n];
if (r.leaf) {
if (r.replace(null, !0)) {
s || (s = {});
s[n] = null;
}
} else if (void 0 !== (a = r.replace(null, !0))) {
s || (s = {});
s[n] = null;
}
}
for (n in e) if (e.hasOwnProperty(n)) {
r = this.$(n);
o = e[n];
if (r.leaf) {
if (r.replace(o, !0)) {
s || (s = {});
s[n] = o;
}
} else if (void 0 !== (a = r.replace(o, !0))) {
s || (s = {});
s[n] = a;
}
}
}
s && this.notifyListeners(s, t);
}
return s;
};
e.prototype.undeleteParents = function() {
for (var e = this.parentNode; e && e.deleted; ) {
e.deleted = !1;
e = e.parentNode;
}
};
e.prototype.write = function(e, t, n) {
if ("function" == typeof t) {
n = t;
t = !1;
}
var i = {
path: this.path(),
value: e
};
"function" == typeof n && (i.func = n);
this.update(e, t || !1);
for (var o = this; o.parentNode; ) o = o.parentNode;
o.notifyWriteListeners(i);
};
e.prototype.bindWrite = function(e) {
this.listeners_write.push(e);
};
e.prototype.bindValue = function(e) {
this.listeners_value.push(e);
try {
e.call(this, this.getValue());
} catch (e) {}
};
e.prototype.bindKeys = function(e) {
if (!this.leaf) {
this.listeners_keys.push(e);
try {
e.call(this, this.getKeys(), []);
} catch (e) {}
}
};
e.prototype.unbindValue = function(e) {
for (var t = 0; t < this.listeners_value.length; t++) if (this.listeners_value[t] == e) {
this.listeners_value.splice(t, 1);
return;
}
};
e.prototype.unbindKeys = function(e) {
if (!this.leaf) for (var t = 0; t < this.listeners_keys.length; t++) if (this.listeners_keys[t] == e) {
this.listeners_keys.splice(t, 1);
return;
}
};
e.prototype.on = function(e, t) {
switch (e) {
case "value":
this.bindValue(t);
break;

case "keys":
this.bindKeys(t);
}
};
e.prototype.un = function(e, t) {
switch (e) {
case "value":
this.unbindValue(t);
break;

case "keys":
this.unbindKeys(t);
}
};
e.prototype.addListener = function(e, t) {
this.listeners[e].push(t);
};
e.prototype.removeListener = function(e, t) {
for (var n = this.listeners[e], i = n.length; i-- > 0; ) n[i] == t && n.splice(i, 1);
};
e.prototype.notifyListeners = function(e, t) {
var n, o, r, s;
if (!this.leaf) if (e) {
for (n in e) if (e.hasOwnProperty(n)) if (null != e[n]) {
if (!i(this.keys, n)) {
this.keys[n] = 1;
o || (o = []);
o.push(n);
}
} else if (i(this.keys, n)) {
delete this.keys[n];
r || (r = []);
r.push(n);
}
} else for (n in this.keys) if (this.keys.hasOwnProperty(n)) {
delete this.keys[n];
r || (r = []);
r.push(n);
}
s = this.listeners_value.concat();
for (var a = 0, c = s.length; a < c; a++) try {
s[a](e);
} catch (e) {}
if (!this.leaf) {
if (o || r) {
s = this.listeners_keys.concat();
for (a = 0, c = s.length; a < c; a++) try {
s[a](o || [], r || []);
} catch (e) {}
}
if (!t && this.parentNode) {
var u = {};
u[this.name] = e;
this.parentNode.notifyListeners(u, t);
}
}
};
e.prototype.notifyWriteListeners = function(e) {
for (var t = this.listeners_write.concat(), n = 0; n < this.listeners_write.length; n++) try {
t[n].call(this, e);
} catch (e) {}
};
e.prototype.getValue = function(e) {
if (e) return this.descend(e).getValue();
if (this.leaf) return this.value;
if (this.deleted) return null;
var t, n, i = {};
for (var o in this.childNodes) if (this.childNodes.hasOwnProperty(o) && null != (n = this.childNodes[o].getValue())) {
i[o] = n;
t = !0;
}
return t ? i : null;
};
e.prototype.hasKey = function(e) {
return i(this.keys, e);
};
e.prototype.getKeys = function() {
if (this.leaf) return null;
var e = [];
for (var t in this.keys) this.keys.hasOwnProperty(t) && e.push(t);
return e;
};
e.prototype.gc = function() {
if (this.leaf) throw new TypeError("Leaf nodes cannot be collected");
var e = !0;
for (var t in this.childNodes) if (this.childNodes.hasOwnProperty(t)) {
var n = this.childNodes[t];
e = n.leaf ? !n.listeners_value.length && null == n.value && (delete this.keys[t], 
delete this.childNodes[t]) && e : n.gc() && (delete this.keys[t], delete this.childNodes[t]) && e;
}
return e && this.deleted && !this.listeners_keys.length && !this.listeners_value.length;
};
t.DataNode = e;
n(e, "jx_data_DataNode");
return e;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
function i(e) {
if (!ie([ Ye ], [ e ], "logout")) if (Ne.isAuthenticated()) {
he.destroy();
s();
Ne.clearIdentity();
Me.clearIdentity();
ze = !1;
e && setTimeout(function() {
e(null);
});
} else ne(new Error("This API is only applicable for authenticated visitors"), "logout");
}
function o(e) {
me && Fe.un("data", me);
me = function(e) {
je.fire(e.type, e.detail);
};
Fe.on("data", me);
if (ze) ne(new Error("Zendesk Chat Web SDK has already been initialized. Please ensure that zChat.init() is only called once in your code"), "init"); else if (ve.isIE <= 10) ne(new Error("The current browser you are on is not supported by the Web SDK. Please refer to the documentation to learn about the system requirements for Zendesk Chat."), "init"); else {
var t = Ge.obj({
account_key: Ge.type("string").ok(),
suppress_console_error: Ge.type("boolean"),
override_auth_server_host: Ge.type("string").ok(),
override_proxy: Ge.type("string").ok(),
authentication: Ge.obj({
jwt_fn: Ge.type("function").ok()
}, {
requiredKeys: [ "jwt_fn" ]
}),
activity_window: Ge.obj({
document: Ge.type("object").ok()
}, {
requiredKeys: [ "document" ]
})
}, {
requiredKeys: [ "account_key" ]
});
if (!ie([ t ], [ e ], "init")) {
var n = new Te("root"), i = new Te("root"), o = {
livechat: {
settings: ke.clone(Ie.livechat.settings)
}
};
n.update(o);
i.update(o);
Oe() && n.$("livechat").$("ui").$("mobile$bool").update(!0);
De.ACCOUNT_KEY = e.account_key;
if (e.authentication) {
Ne.setOverrideHost(e.override_auth_server_host);
Ne.setSiteJWTFunc(e.authentication.jwt_fn);
Ne.setDataNode(n);
Ne.authenticate(function(t) {
t ? ne(new Error("Failed to verify token: " + t.reason + (t.details ? ": " + t.details : "")), "init", {
reason: t.reason,
details: t.details
}) : r(e, Ce, n, i);
});
} else r(e, Ce, n, i);
}
}
}
function r(e, t, n, i) {
he = t;
de = n;
pe = i;
Ue.init(de, pe);
W();
_e = function(e) {
(e.path ? pe.descend(e.path) : pe).update(e.update);
};
he.on("message", _e);
ge = e.suppress_console_error || !1;
Me.init();
he.init({
root: de,
overrideProxy: e.override_proxy,
isCookieDenied: function() {
return !1;
},
source: qe,
lastHost: Me.DOM.getVariable("web_sdk_last_host"),
source_ver: we.release_tag
});
de.$("connection").$("server$string").bindValue(function(e) {
e && Me.DOM.saveVariable("web_sdk_last_host", e);
});
Le.init(de, he);
Pe.init(de, e.activity_window);
ze = !0;
}
function s() {
Fe.un("data", me);
Ue.destroy();
he.un("message", _e);
me = null;
_e = null;
ge = void 0;
}
function a() {
he.reconnect();
}
function c() {
return Fe;
}
function u() {
return tt(pe.$("livechat").$("profile").getValue());
}
function l(e, t) {
if (!ie([ Ge.obj({
display_name: Ge.any([ Ge.equal(""), Ge.type("string").regex(We) ]),
email: Ge.any([ Ge.equal(""), Ge.type("string").regex(Se.email) ]),
phone: Ge.any([ Ge.equal(""), Ge.type("string").regex(Be) ])
}), Ye ], [ e, t ], "setVisitorInfo")) {
var n = {};
t = t || He;
"display_name" in e && (n.display_name$string = e.display_name);
"email" in e && (n.email$string = e.email);
"phone" in e && (n.phone$string = e.phone);
de.$("livechat").$("profile").write(n, se(t));
}
}
function f(e, t) {
if (!ie([ Ge.type("string").regex(We), Ye ], [ e, t ], "sendChatMsg")) {
t = t || He;
Le.sendChatMsg({
msg: e.trim()
}, null, se(t));
}
}
function h(e, t) {
ie([ Ge.chain(oe), Ye ], [ e, t ], "sendFile") || d(e, t);
}
function d(e, t) {
t = t || He;
Ce.reconnectIfServerRetired(function() {
Le.sendFileWithCallback(e, t);
});
}
function p(e) {
if (!ie([ Ge.type("number") ], [ e ], "getDepartment")) return m(e);
}
function m(e) {
var t = pe.$("livechat").$("departments").$(e).getValue();
if (t) return nt(t, e);
}
function _() {
return J(pe.$("livechat").$("departments").getValue(), nt);
}
function g() {
var e = pe.$("livechat").$("profile").$("department_id$int"), t = e.getValue();
return be(t) ? t : void 0;
}
function v(e, t) {
if (!ie([ Ge.type("number").chain(re), Ye ], [ e, t ], "setVisitorDefaultDepartment")) {
t = t || He;
de.$("livechat").$("profile").write({
department_id$int: e
}, se(t));
}
}
function w(e) {
if (!ie([ Ye ], [ e ], "clearVisitorDefaultDepartment")) {
e = e || He;
de.$("livechat").$("profile").write({
department_id$int: null
}, se(e));
}
}
function y(e, t) {
$("added$string", e, "addTag", t);
}
function b(e, t) {
$("removed$string", e, "removeTag", t);
}
function $(e, t, n, i) {
if (!ie([ Ge.type("string").regex(We).regex(/[^,]/), Ye ], [ t, i ], n)) {
i = i || He;
var o = {};
o[e] = t.trim();
de.$("livechat").$("channel").$("tags").write(o, se(i));
}
}
function E(e, t) {
if (!ie([ Ge.obj({
title: Ge.type("string").regex(We),
url: Ge.type("string").regex(Ke)
}, {
requiredKeys: [ "title", "url" ]
}), Ye ], [ e, t ], "sendVisitorPath")) {
t = t || He;
de.$("livechat").$("session").$("page_path").write({
url$string: e.url,
title$string: e.title
}, se(t));
}
}
function x() {
var e = pe.$("livechat").$("channel").$("rating$string").getValue(), t = pe.$("livechat").$("channel").$("comment$string").getValue(), n = {};
$e(e) || (n.rating = e);
$e(t) || (n.comment = t);
return n;
}
function k(e, t) {
if (!ie([ Ge.any([ Ge.equal(null), Ge.equal("good"), Ge.equal("bad") ]), Ye ], [ e, t ], "sendChatRating")) {
t = t || He;
de.$("livechat").$("channel").write({
rating$string: e
}, se(t));
}
}
function T(e, t) {
if (!ie([ Ge.type("string"), Ye ], [ e, t ], "sendChatComment")) {
t = t || He;
de.$("livechat").$("channel").write({
comment$string: e
}, se(t));
}
}
function S(e) {
var t = de.$("livechat").$("channel");
if (!ie([ Ye ], [ e ], "endChat")) {
e = e || He;
t.write({
chatting$bool: !1
}, se(e));
}
}
function A() {
return pe.$("livechat").$("channel").$("chatting$bool").getValue() || !1;
}
function D() {
return J(pe.$("livechat").$("agents").getValue(), it);
}
function O(e) {
return it(pe.$("livechat").$("agents").$(e).getValue(), e);
}
function R() {
var e = pe.$("livechat"), t = e.$("settings"), n = t.$("operating_hours");
if (t.hasKey("operating_hours")) {
var i = n.$("type$string").getValue(), o = {
enabled: n.$("enabled$bool").getValue(),
type: i,
timezone: t.$("timezone$string").getValue() || "UTC"
};
"account" == i ? o.account_schedule = ae(n.$("schedule").getValue() || {}) : "department" == i && (o.department_schedule = ce(n.$("schedules").getValue(), e.$("departments").getKeys()));
return o;
}
}
function C(e, t) {
if (!ie([ Ge.obj({
name: Ge.type("string").regex(We),
email: Ge.type("string").regex(Se.email),
message: Ge.type("string").regex(We)
}, {
requiredKeys: [ "name", "email", "message" ]
}), Ye ], [ e, t ], "sendOfflineMsg")) {
t = t || He;
var n = {
name: {
name$string: "name",
value$string: e.name
},
email: {
name$string: "email",
value$string: e.email
},
message: {
name$string: "message",
value$string: e.message
}
};
"department" in e && (n.department = {
name$string: "department_id",
value$string: e.department
});
de.$("livechat").$("settings").$("forms").$("offline_form").$("form_submitted").write(n, se(t));
}
}
function L(e) {
var t = de.$("livechat").$("channel").$("typing"), n = t.$("typing$bool").getValue(), i = Ge.type("boolean");
n !== e && (ie([ i ], [ e ], "sendTyping") || t.write({
typing$bool: e
}));
}
function I(e, t) {
var n = Ge.type("string").regex(Se.email), i = !!pe.$("livechat").$("channel").$("log").getKeys().length;
if (!ie([ n, Ye ], [ e, t ], "sendEmailTranscript")) {
t = t || He;
pe.$("livechat").$("channel").$("chatting$bool").getValue() || !1 ? de.$("livechat").$("channel").write({
email_transcript$string: e
}, se(t)) : Ne.isAuthenticated() || i ? de.$("livechat").$("channel").write({
email_last_transcript$string: e
}, se(t)) : ne(new Error("There were no past chat to send a transcript of"), "sendEmailTranscript");
}
}
function N(e, t) {
return {
id: parseInt(t, 10)
};
}
function M(e) {
return e.hasOwnProperty("typing$bool") ? {
type: "typing"
} : null;
}
function P(e) {
var t = e.hasOwnProperty("typing$bool"), n = {
type: "typing",
nick: "agent:trigger"
};
return t ? n : null;
}
function U(e) {
return 0 === e.indexOf("visitor:") ? "visitor" : e;
}
function V(e) {
if (!e.type$string) return null;
if (!e.nick$string) return null;
var t = {
nick: U(e.nick$string),
type: e.type$string
}, n = e.msg$string;
e.first$bool && (t.first = e.first$bool);
switch (e.type$string) {
case "chat.msg":
if ("attachment" in e) {
if (!0 === e.unverified$bool) return null;
var i, o = e.attachment, r = {
mime_type: o.mime_type$string,
name: o.name$string,
size: o.size$int,
url: o.url$string
};
if ("metadata" in o) {
i = o.metadata;
r.metadata = {
width: i.width$int,
height: i.height$int
};
}
"deleted$bool" in o && (r.deleted = o.deleted$bool);
return ke.extend(t, {
type: "chat.file",
display_name: e.display_name$string,
attachment: r
});
}
;
return ke.extend(t, {
display_name: e.display_name$string,
msg: n,
options: e.options$string ? e.options$string.split("/") : []
});

case "chat.rating":
return ke.extend(t, {
display_name: e.display_name$string,
new_rating: e.new_rating$string,
rating: e.rating$string
});

case "chat.comment":
return ke.extend(t, {
display_name: e.display_name$string,
comment: e.comment$string,
new_comment: e.new_comment$string
});

case "chat.memberjoin":
case "chat.memberleave":
case "chat.request.rating":
return ke.extend(t, {
display_name: e.display_name$string
});

case "chat.event":
var s, a = /Please wait while our agents attend to you. There are currently (\d+) visitor\(s\) waiting to be served\./;
return "agent:system" === e.nick$string && (s = a.exec(n)) ? {
type: "chat.wait_queue",
nick: "system.queue",
wait_queue: parseInt(s[1], 10)
} : null;

case "chat.join":
var c = e.history;
if (c && c[0]) {
var u = ke.extend({}, c[0]), l = u.timestamp$int;
u.type$string = u.__type$string;
u.display_name$string = u.name$string;
l *= 1e3;
u.timestamp$int = l;
return V(u);
}
return null;

case "chat.file.update":
default:
return null;
}
}
function j() {
var e, t, n, i = [ "type$string", "timestamp$int" ], o = pe.$("livechat").$("channel").$("log").getValue(), r = [];
for (var s in o) if (o.hasOwnProperty(s)) {
if (o[s].type$string) e = o[s]; else {
e = de.$("livechat").$("channel").$("log").$(s).getValue();
if ("chat.msg" === e.type$string && (!0 === e.unverified$bool || !0 === e.failed$bool)) continue;
}
var a = V(e);
if (null === a) continue;
for (var c = 0; c < i.length; c++) {
t = i[c];
n = te(t);
n in a || (a[n] = e[t]);
}
r.push(a);
}
return r;
}
function z() {
if (!pe) return "closed";
var e = pe.$("tmp").$("friendly_connection_status$string").getValue();
return Qe(e)[0];
}
function F() {
var e = pe.$("livechat").$("account").$("status$string").getValue();
return et(e)[0];
}
function q() {
return pe.$("livechat").$("channel").$("queue_position$int").getValue() || 0;
}
function H(e) {
if (!ie([ Ye ], [ e ], "fetchChatHistory")) if (Ne.isAuthenticated()) {
var t = pe.$("livechat").$("history"), n = de.$("livechat").$("history"), i = n.$("in_progress$bool").getValue(), o = t.$("has_more$bool").getValue(), r = t.$("cursor$string").getValue();
if (i) ne(new Error("Previous fetching of history is still in progress"), "fetchChatHistory"); else if (!1 !== o) {
e = e || He;
n.$("in_progress$bool").update(!0);
n.write({
cursor$string: r || ""
}, se(e));
} else ne(new Error("No more history to load"), "fetchChatHistory");
} else ne(new Error("This API is not available for unauthenticated visitors"), "fetchChatHistory");
}
function G(e, t, n) {
return function(i, o) {
if (null === i) return {};
for (var r = {}, s = 0, a = e.length; s < a; s++) {
var c = e[s];
c in i && (r[te(c)] = i[c]);
}
Ee(t) && Object.keys(r).length && (r[t] = o);
if (xe(n)) {
var u = n(i, o);
return null === u ? {} : ke.extend(r, u);
}
return r;
};
}
function B(e, t, n) {
pe.descend(t).bindValue(function(t) {
n(t).forEach(function(t) {
K(e, t);
});
});
}
function K(e, t) {
if (t) {
if (t instanceof Error) {
if (!t.message) return;
} else if ("object" == typeof t && !Object.keys(t).length) return;
Fe.fire("data", {
type: e,
detail: t
});
}
}
function W() {
B("connection_update", "tmp.friendly_connection_status$string", Qe);
B("account_status", "livechat.account.status$string", X(Je));
B("visitor_update", "livechat.profile", Q([ "email$string", "phone$string", "display_name$string" ], u));
B("department_update", "livechat.departments", ee([ "name$string", "status$string" ], m));
B("agent_update", "livechat.agents", ee([ "avatar_path$string", "display_name$string", "title$string" ], O));
B("chat", "livechat.channel.log", Z(st));
B("chat", "livechat.agents", Z(ot));
B("chat", "livechat.triggers.agents", Z(rt));
B("chat", "livechat.channel.queue_position$int", Y);
B("history", "livechat.history.log", Z(st));
}
function Y(e) {
return [ "number" != typeof e ? null : {
type: "chat.queue_position",
nick: "system.queue",
queue_position: e
} ];
}
function X(e) {
return function(t) {
return void 0 === t ? [ null ] : [ e[t] || null ];
};
}
function Z(e) {
return function(t) {
return J(t, e);
};
}
function J(e, t) {
var n = [];
for (var i in e) e.hasOwnProperty(i) && n.push(t(e[i], i));
return n;
}
function Q(e, t) {
return function(n) {
return e.some(function(e) {
return n && e in n;
}) ? [ t() ] : [ null ];
};
}
function ee(e, t) {
return function(n) {
var i = [];
for (var o in n) if (n.hasOwnProperty(o)) {
var r = n[o], s = e.some(function(e) {
return r && e in r;
});
s && i.push(t(o));
}
return i;
};
}
function te(e) {
return e.split("$")[0];
}
function ne(e, t, n) {
var i = t ? t + ": " : "";
e = new Error("Zendesk Chat Web SDK: Error: " + i + e.message);
e.context = t;
e.extra = n;
ge || window.console && window.console.error && console.error(e.message);
K("error", e);
}
function ie(e, t, n) {
for (var i = 0; i < e.length; i++) {
var o = e[i], r = o(t[i]);
if (r) {
ne(r, n);
return !0;
}
}
return !1;
}
function oe(e) {
if ("[object File]" !== Object.prototype.toString.call(e)) return new Error("Expect a File object");
}
function re(e) {
if (!p(e)) return new Error("Expect a valid department id");
}
function se(e) {
return function(t) {
var n = t.raw, i = "ok" === n.__status ? null : new window.Error("Failed");
for (var o in n) n.hasOwnProperty(o) && 0 === o.indexOf("__") && delete n[o];
e(i, n);
};
}
function ae(e) {
for (var t, n, i = {}, o = 0; o < 7; o++) {
var r = e[o] || {};
if (r.enabled$bool) {
t = [];
n = r.periods;
for (var s in n) n.hasOwnProperty(s) && t.push({
start: n[s].start$int,
end: n[s].end$int
});
i[o] = fe(t);
} else i[o] = [];
}
return i;
}
function ce(e, t) {
var n, i = {}, o = le(e), r = ue(e, t);
t.forEach(function(e) {
var t = r[e];
i[e] = {};
for (n = 0; n < 7; n++) i[e][n] = [];
t.forEach(function(t) {
for (var n in o[t]) o[t].hasOwnProperty(n) && Array.prototype.push.apply(i[e][n], o[t][n]);
});
for (n = 0; n < 7; n++) {
var s = i[e][n];
s.length > 1 && (i[e][n] = fe(s));
}
});
return i;
}
function ue(e, t) {
var n, i = {};
t.forEach(function(e) {
i[e] = [];
});
for (var o in e) if (e.hasOwnProperty(o)) {
n = e[o];
for (var r in n.departments) if (n.departments.hasOwnProperty(r)) {
if (!n.departments[r]) continue;
var s = te(r);
if (!i[s]) continue;
i[s].push(o);
}
}
return i;
}
function le(e) {
var t, n, i = {};
for (var o in e) if (e.hasOwnProperty(o)) {
n = e[o];
if (n.hasOwnProperty("deleted_ts$int")) continue;
if (!n.departments) continue;
if (!n.enabled$bool) continue;
t = {};
for (var r = 0; r < 7; r++) {
var s = n[r], a = [];
if (s.enabled$bool && s.periods) {
var c = s.periods;
for (var u in c) c.hasOwnProperty(u) && a.push({
start: c[u].start$int,
end: c[u].end$int
});
a.length && (t[r] = a);
}
}
Object.keys(t).length && (i[o] = t);
}
return i;
}
function fe(e) {
if (e.length <= 1) return e;
var t = [];
e.forEach(function(e) {
t[e.start] = void 0 !== t[e.start] ? t[e.start] + 1 : 1;
t[e.end] = void 0 !== t[e.end] ? t[e.end] - 1 : -1;
});
return function(e) {
var t, n = [], i = 0;
e.forEach(function(e, o) {
e > 0 && !t && (t = o);
if (e) {
i += e;
if (0 === i) {
n.push({
start: t,
end: o
});
t = void 0;
}
}
});
return n;
}(t);
}
var he, de, pe, me, _e, ge, ve = n(3), we = n(5), ye = n(1), be = n(24), $e = n(2), Ee = n(16), xe = n(6), ke = n(23), Te = n(48), Se = n(15), Ae = n(47), De = n(4), Oe = n(46), Re = (n(7), 
n(43)), Ce = n(42), Le = n(30), Ie = n(28), Ne = n(17), Me = n(18), Pe = n(27), Ue = n(26), Ve = {
init: o,
reconnect: a,
getFirehose: c,
setVisitorInfo: l,
getVisitorInfo: u,
setVisitorDefaultDepartment: v,
getVisitorDefaultDepartment: g,
getAllDepartments: _,
getDepartment: p,
clearVisitorDefaultDepartment: w,
addTag: y,
removeTag: b,
sendChatMsg: f,
sendFile: h,
sendVisitorPath: E,
sendChatComment: T,
sendChatRating: k,
getChatInfo: x,
endChat: S,
isChatting: A,
getServingAgentsInfo: D,
sendOfflineMsg: C,
sendTyping: Ae.debounceExceptFirst(L, 300),
sendEmailTranscript: I,
getChatLog: j,
getConnectionStatus: z,
getAccountStatus: F,
getOperatingHours: R,
getQueuePosition: q,
fetchChatHistory: H,
logout: i,
EMAIL_REGEX: Se.email
}, je = ye.extend(Ve), ze = !1, Fe = ye.extend({}), qe = "web_sdk", He = function() {}, Ge = Re, Be = /[0-9]+/, Ke = /^(https?|ftps?):\/\//i, We = /\S/, Ye = Ge.any([ Ge.equal(void 0), Ge.type("function") ]), Xe = [ "email$string", "phone$string", "display_name$string" ], Ze = {
connected: "connected",
connecting: "connecting",
closed: "closed"
}, Je = {
online: "online",
offline: "offline",
away: "away",
invalid_account_key: null,
banned: null
}, Qe = X(Ze), et = X(Je), tt = G(Xe), nt = G([ "name$string", "status$string" ], "id", N), it = G([ "avatar_path$string", "display_name$string", "title$string" ], "nick"), ot = G([ "typing$bool" ], "nick", M), rt = G([ "typing$bool" ], "display_name", P), st = G([ "timestamp$int" ], null, V), at = (G([ "banner", "behavior", "branding", "bubble", "chat_button", "chat_window", "concierge", "file_sending", "forms", "greetings", "language", "login", "rating", "sound", "theme", "timezone$string" ]), 
[ "on", "un", "fire", "unextendEvents", "init", "getFirehose", "getConnectionStatus" ]);
for (var ct in je) je.hasOwnProperty(ct) && -1 === at.indexOf(ct) && (je[ct] = function(e, t) {
return function() {
if (!1 !== ze) return t.apply(null, arguments);
ne(new Error("Web SDK is not initialized yet. Please ensure that you call zChat.init() and wait for the connection to be established before calling this method"), e);
};
}(ct, je[ct]));
e.exports = je;
t(je, "meshim_widget_controllers_WebSDKAPI");
return je;
}();
}).call(this, n(0));
}, function(e, t, n) {
(function(t) {
e.exports = function() {
var i = n(49), o = i;
e.exports = o;
t(o, "web_sdk");
return o;
}();
}).call(this, n(0));
} ]);
});
//# sourceMappingURL=web_sdk.map