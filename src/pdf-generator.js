const Ur = {
  root: {
    doNumber: ["doNumber", "do_number", "deliveryOrderNumber", "reference"],
    driver: ["driver", "driverName", "driver_name"],
    date: ["date", "deliveryDate", "delivery_date"],
    notes: ["notes", "remarks"],
    totalQuantityUnit: ["totalQuantityUnit", "total_quantity_unit"],
    totalWeight: ["totalWeight", "total_weight"],
    totalWeightUnit: ["totalWeightUnit", "total_weight_unit"]
  },
  company: {
    name: ["company.name", "companyName", "company_name"],
    address: ["company.address", "companyAddress", "company_address"]
  },
  customer: {
    name: ["customer.name", "customerName", "customer_name", "client.name"],
    address: ["customer.address", "customerAddress", "customer_address", "client.address"]
  },
  items: ["items", "lineItems", "line_items"],
  item: {
    name: ["name", "itemName", "item_name", "description"],
    department: ["department", "dept"],
    quantity: ["quantity", "qty"],
    unit: ["unit", "uom"],
    remarks: ["remarks", "notes"]
  },
  totals: {
    totalLinenItems: [
      "totals.totalLinenItems",
      "totals.totalLineItems",
      "totalLinenItems",
      "totalLineItems"
    ],
    totalLineItems: ["totals.totalLineItems", "totalLineItems"],
    totalQuantity: ["totals.totalQuantity", "totalQuantity", "total_qty"],
    totalQuantityUnit: ["totals.totalQuantityUnit", "totalQuantityUnit"],
    totalWeight: ["totals.totalWeight", "totalWeight", "total_weight"],
    totalWeightUnit: ["totals.totalWeightUnit", "totalWeightUnit", "total_weight_unit"]
  }
}, cr = {
  root: {
    reportTitle: ["reportTitle", "report_title", "title"],
    hotelName: ["hotelName", "hotel_name", "company.name", "customer.name"],
    department: ["department", "dept"],
    taxRate: ["taxRate", "tax_rate", "sstRate", "sst_rate"],
    sstRate: ["sstRate", "sst_rate"],
    taxLabel: ["taxLabel", "tax_label"],
    generatedOn: ["generatedOn", "generated_on"],
    notes: ["notes", "remarks"]
  },
  company: {
    name: ["company.name", "companyName", "company_name"],
    address: ["company.address", "companyAddress", "company_address"]
  },
  period: {
    month: ["period.month", "dateRange.month", "month"],
    from: ["period.from", "dateRange.from", "from", "fromDate", "from_date"],
    to: ["period.to", "dateRange.to", "to", "toDate", "to_date"]
  },
  deliveries: ["deliveries", "days", "deliveryDays", "delivery_days"],
  delivery: {
    date: ["date", "deliveryDate", "delivery_date"],
    deliveryDate: ["deliveryDate", "delivery_date"],
    doNumber: ["doNumber", "do_number", "reference"],
    reference: ["reference", "doNumber", "do_number"]
  },
  items: ["items", "lineItems", "line_items"],
  item: {
    no: ["no", "number", "index"],
    description: ["description", "name", "itemName", "item_name"],
    name: ["name", "description", "itemName", "item_name"],
    unit: ["unit", "uom"],
    servicing: ["servicing"],
    unitPrice: ["unitPrice", "unit_price", "price"],
    quantities: ["quantities", "qtyByDelivery", "qty_by_delivery"],
    totalQty: ["totalQty", "total_qty"],
    billableQty: ["billableQty", "billable_qty"],
    totalValue: ["totalValue", "total_value"]
  },
  summaryOverrides: {
    totalQtyPerDay: ["summaryOverrides.totalQtyPerDay", "summary.totalQtyPerDay"],
    totalValuePerDay: ["summaryOverrides.totalValuePerDay", "summary.totalValuePerDay"],
    taxPerDay: ["summaryOverrides.taxPerDay", "summary.taxPerDay"],
    subtotalPerDay: ["summaryOverrides.subtotalPerDay", "summary.subtotalPerDay"],
    totalQty: ["summaryOverrides.totalQty", "summary.totalQty"],
    billableQty: ["summaryOverrides.billableQty", "summary.billableQty"],
    totalValue: ["summaryOverrides.totalValue", "summary.totalValue"],
    taxTotal: ["summaryOverrides.taxTotal", "summary.taxTotal"],
    subtotalTotal: ["summaryOverrides.subtotalTotal", "summary.subtotalTotal"]
  }
}, Li = {
  root: {
    reportTitle: ["reportTitle", "report_title", "title"],
    hotelName: ["hotelName", "hotel_name", "company.name"],
    department: ["department", "dept"],
    generatedOn: ["generatedOn", "generated_on"]
  },
  items: ["items", "lineItems", "line_items"],
  item: {
    item: ["item", "itemName", "item_name", "name", "description"],
    days0to30: ["days0to30", "days_0_30", "d0to30", "range1"],
    days31to60: ["days31to60", "days_31_60", "d31to60", "range2"],
    days60plus: ["days60plus", "days_60_plus", "d60plus", "range3"],
    total: ["total", "totalCount", "total_count"]
  }
};
function ah(r, e = {}) {
  const t = { ...Li.root, ...e.root }, n = e.items ?? Li.items, i = { ...Li.item, ...e.item }, a = ft(r, t), o = Tn(r, n);
  return xi({
    ...a,
    items: o.map(
      (s) => ft(s, i)
    )
  });
}
const qi = {
  root: {
    reportTitle: ["reportTitle", "report_title", "title"],
    hotelName: ["hotelName", "hotel_name", "company.name"],
    date: ["date", "reportDate", "report_date"]
  },
  items: ["Items", "items", "lineItems", "line_items"],
  item: {
    linenType: ["linenType", "linen_type", "name", "description"],
    LinenIn: ["LinenIn", "linenIn", "linen_in", "in"],
    LinenOut: ["LinenOut", "linenOut", "linen_out", "out"],
    Stock: ["Stock", "stock", "stockLevel", "stock_level"],
    PAR: ["PAR", "par", "parLevel", "par_level"]
  }
};
function oh(r, e = {}) {
  const t = { ...qi.root, ...e.root }, n = e.items ?? qi.items, i = { ...qi.item, ...e.item }, a = ft(r, t), o = Tn(r, n);
  return xi({
    ...a,
    Items: o.map(
      (s) => ft(s, i)
    )
  });
}
function sh(r, e = {}) {
  const t = iu(e), n = ft(r, t.root), i = ft(r, t.company), a = ft(r, t.customer), o = ft(r, t.totals), s = Tn(r, t.items);
  return xi({
    ...n,
    company: i,
    customer: a,
    totals: o,
    items: s.map(
      (u) => ft(u, t.item)
    )
  });
}
function uh(r, e = {}) {
  const t = au(e), n = ft(r, t.root), i = ft(r, t.company), a = ft(r, t.period), o = ft(r, t.summaryOverrides), s = Tn(r, t.deliveries), u = Tn(r, t.items);
  return xi({
    ...n,
    company: i,
    period: a,
    summaryOverrides: o,
    deliveries: s.map(
      (l) => ft(l, t.delivery)
    ),
    items: u.map(
      (l) => ft(l, t.item)
    )
  });
}
function Ko(r, e) {
  if (!e)
    return;
  if (typeof e == "function")
    return e(r);
  const t = Array.isArray(e) ? e : [e];
  for (const n of t) {
    const i = ou(r, n);
    if (i != null && i !== "")
      return i;
  }
}
function ft(r, e) {
  const t = {};
  return Object.entries(e).forEach(([n, i]) => {
    const a = Ko(r, i);
    a !== void 0 && (t[n] = a);
  }), t;
}
function iu(r) {
  return {
    root: { ...Ur.root, ...r.root },
    company: { ...Ur.company, ...r.company },
    customer: { ...Ur.customer, ...r.customer },
    items: r.items ?? Ur.items,
    item: { ...Ur.item, ...r.item },
    totals: { ...Ur.totals, ...r.totals }
  };
}
function au(r) {
  return {
    root: { ...cr.root, ...r.root },
    company: { ...cr.company, ...r.company },
    period: { ...cr.period, ...r.period },
    deliveries: r.deliveries ?? cr.deliveries,
    delivery: { ...cr.delivery, ...r.delivery },
    items: r.items ?? cr.items,
    item: { ...cr.item, ...r.item },
    summaryOverrides: {
      ...cr.summaryOverrides,
      ...r.summaryOverrides
    }
  };
}
function Tn(r, e) {
  const t = Ko(r, e);
  return Array.isArray(t) ? t : [];
}
function ou(r, e) {
  return e.split(".").reduce((t, n) => {
    if (!(t == null || typeof t != "object"))
      return t[n];
  }, r);
}
function xi(r) {
  return Object.entries(r).forEach(([e, t]) => {
    Array.isArray(t) || t && typeof t == "object" && !Object.keys(t).length && delete r[e];
  }), r;
}
var sa = function(r, e) {
  return sa = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var i in n) n.hasOwnProperty(i) && (t[i] = n[i]);
  }, sa(r, e);
};
function X(r, e) {
  sa(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var de = function() {
  return de = Object.assign || function(e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, de.apply(this, arguments);
};
function su(r, e) {
  var t = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (t[n[i]] = r[n[i]]);
  return t;
}
function ge(r, e, t, n) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function s(c) {
      try {
        l(n.next(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      try {
        l(n.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      c.done ? a(c.value) : i(c.value).then(s, u);
    }
    l((n = n.apply(r, [])).next());
  });
}
function ye(r, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (n = 1, i && (a = l[0] & 2 ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, l[1])).done) return a;
      switch (i = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
        case 0:
        case 1:
          a = l;
          break;
        case 4:
          return t.label++, { value: l[1], done: !1 };
        case 5:
          t.label++, i = l[1], l = [0];
          continue;
        case 7:
          l = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            t = 0;
            continue;
          }
          if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
            t.label = l[1];
            break;
          }
          if (l[0] === 6 && t.label < a[1]) {
            t.label = a[1], a = l;
            break;
          }
          if (a && t.label < a[2]) {
            t.label = a[2], t.ops.push(l);
            break;
          }
          a[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      l = e.call(r, t);
    } catch (c) {
      l = [6, c], i = 0;
    } finally {
      n = a = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function ke() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++) r += arguments[e].length;
  for (var n = Array(r), i = 0, e = 0; e < t; e++)
    for (var a = arguments[e], o = 0, s = a.length; o < s; o++, i++)
      n[i] = a[o];
  return n;
}
var Xr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", dn = new Uint8Array(256);
for (var Ln = 0; Ln < Xr.length; Ln++)
  dn[Xr.charCodeAt(Ln)] = Ln;
var uu = function(r) {
  for (var e = "", t = r.length, n = 0; n < t; n += 3)
    e += Xr[r[n] >> 2], e += Xr[(r[n] & 3) << 4 | r[n + 1] >> 4], e += Xr[(r[n + 1] & 15) << 2 | r[n + 2] >> 6], e += Xr[r[n + 2] & 63];
  return t % 3 === 2 ? e = e.substring(0, e.length - 1) + "=" : t % 3 === 1 && (e = e.substring(0, e.length - 2) + "=="), e;
}, Ga = function(r) {
  var e = r.length * 0.75, t = r.length, n, i = 0, a, o, s, u;
  r[r.length - 1] === "=" && (e--, r[r.length - 2] === "=" && e--);
  var l = new Uint8Array(e);
  for (n = 0; n < t; n += 4)
    a = dn[r.charCodeAt(n)], o = dn[r.charCodeAt(n + 1)], s = dn[r.charCodeAt(n + 2)], u = dn[r.charCodeAt(n + 3)], l[i++] = a << 2 | o >> 4, l[i++] = (o & 15) << 4 | s >> 2, l[i++] = (s & 3) << 6 | u & 63;
  return l;
}, lu = /^(data)?:?([\w\/\+]+)?;?(charset=[\w-]+|base64)?.*,/i, fu = function(r) {
  var e = r.trim(), t = e.substring(0, 100), n = t.match(lu);
  if (!n)
    return Ga(e);
  var i = n[0], a = e.substring(i.length);
  return Ga(a);
}, he = function(r) {
  return r.charCodeAt(0);
}, cu = function(r) {
  return r.codePointAt(0);
}, En = function(r, e) {
  return Lt(r.toString(16), e, "0").toUpperCase();
}, wi = function(r) {
  return En(r, 2);
}, rr = function(r) {
  return String.fromCharCode(r);
}, hu = function(r) {
  return rr(parseInt(r, 16));
}, Lt = function(r, e, t) {
  for (var n = "", i = 0, a = e - r.length; i < a; i++)
    n += t;
  return n + r;
}, it = function(r, e, t) {
  for (var n = r.length, i = 0; i < n; i++)
    e[t++] = r.charCodeAt(i);
  return n;
}, du = function(r) {
  return r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}, Nn = function(r) {
  return r.replace(/\t|\u0085|\u2028|\u2029/g, "    ").replace(/[\b\v]/g, "");
}, vu = ["\\n", "\\f", "\\r", "\\u000B"], Go = function(r) {
  return /^[\n\f\r\u000B]$/.test(r);
}, Xo = function(r) {
  return r.split(/[\n\f\r\u000B]/);
}, Zo = function(r) {
  return r.replace(/[\n\f\r\u000B]/g, " ");
}, Yo = function(r, e) {
  var t = r.charCodeAt(e), n, i = e + 1, a = 1;
  return (
    // Check if it's the start of a surrogate pair.
    t >= 55296 && t <= 56319 && // high surrogate
    r.length > i && (n = r.charCodeAt(i), n >= 56320 && n <= 57343 && (a = 2)), [r.slice(e, e + a), a]
  );
}, pu = function(r) {
  for (var e = [], t = 0, n = r.length; t < n; ) {
    var i = Yo(r, t), a = i[0], o = i[1];
    e.push(a), t += o;
  }
  return e;
}, gu = function(r) {
  for (var e = vu.join("|"), t = ["$"], n = 0, i = r.length; n < i; n++) {
    var a = r[n];
    if (Go(a))
      throw new TypeError("`wordBreak` must not include " + e);
    t.push(a === "" ? "." : du(a));
  }
  var o = t.join("|");
  return new RegExp("(" + e + ")|((.*?)(" + o + "))", "gm");
}, yu = function(r, e, t, n) {
  for (var i = gu(e), a = Nn(r).match(i), o = "", s = 0, u = [], l = function() {
    o !== "" && u.push(o), o = "", s = 0;
  }, c = 0, h = a.length; c < h; c++) {
    var d = a[c];
    if (Go(d))
      l();
    else {
      var v = n(d);
      s + v > t && l(), o += d, s += v;
    }
  }
  return l(), u;
}, mu = /^D:(\d\d\d\d)(\d\d)?(\d\d)?(\d\d)?(\d\d)?(\d\d)?([+\-Z])?(\d\d)?'?(\d\d)?'?$/, Qo = function(r) {
  var e = r.match(mu);
  if (e) {
    var t = e[1], n = e[2], i = n === void 0 ? "01" : n, a = e[3], o = a === void 0 ? "01" : a, s = e[4], u = s === void 0 ? "00" : s, l = e[5], c = l === void 0 ? "00" : l, h = e[6], d = h === void 0 ? "00" : h, v = e[7], y = v === void 0 ? "Z" : v, w = e[8], F = w === void 0 ? "00" : w, S = e[9], A = S === void 0 ? "00" : S, C = y === "Z" ? "Z" : "" + y + F + ":" + A, E = /* @__PURE__ */ new Date(t + "-" + i + "-" + o + "T" + u + ":" + c + ":" + d + C);
    return E;
  }
}, wa = function(r, e) {
  for (var t, n = 0, i; n < r.length; ) {
    var a = r.substring(n).match(e);
    if (!a)
      return { match: i, pos: n };
    i = a, n += ((t = a.index) !== null && t !== void 0 ? t : 0) + a[0].length;
  }
  return { match: i, pos: n };
}, oi = function(r) {
  return r[r.length - 1];
}, ua = function(r) {
  if (r instanceof Uint8Array)
    return r;
  for (var e = r.length, t = new Uint8Array(e), n = 0; n < e; n++)
    t[n] = r.charCodeAt(n);
  return t;
}, bu = function() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r[e] = arguments[e];
  for (var t = r.length, n = [], i = 0; i < t; i++) {
    var a = r[i];
    n[i] = a instanceof Uint8Array ? a : ua(a);
  }
  for (var o = 0, i = 0; i < t; i++)
    o += r[i].length;
  for (var s = new Uint8Array(o), u = 0, l = 0; l < t; l++)
    for (var c = n[l], h = 0, d = c.length; h < d; h++)
      s[u++] = c[h];
  return s;
}, xu = function(r) {
  for (var e = 0, t = 0, n = r.length; t < n; t++)
    e += r[t].length;
  for (var i = new Uint8Array(e), a = 0, t = 0, n = r.length; t < n; t++) {
    var o = r[t];
    i.set(o, a), a += o.length;
  }
  return i;
}, Jo = function(r) {
  for (var e = "", t = 0, n = r.length; t < n; t++)
    e += rr(r[t]);
  return e;
}, wu = function(r, e) {
  return r.id - e.id;
}, Su = function(r, e) {
  for (var t = [], n = 0, i = r.length; n < i; n++) {
    var a = r[n], o = r[n - 1];
    (n === 0 || e(a) !== e(o)) && t.push(a);
  }
  return t;
}, Wr = function(r) {
  for (var e = r.length, t = 0, n = Math.floor(e / 2); t < n; t++) {
    var i = t, a = e - t - 1, o = r[t];
    r[i] = r[a], r[a] = o;
  }
  return r;
}, Fu = function(r) {
  for (var e = 0, t = 0, n = r.length; t < n; t++)
    e += r[t];
  return e;
}, ku = function(r, e) {
  for (var t = new Array(e - r), n = 0, i = t.length; n < i; n++)
    t[n] = r + n;
  return t;
}, Cu = function(r, e) {
  for (var t = new Array(e.length), n = 0, i = e.length; n < i; n++)
    t[n] = r[e[n]];
  return t;
}, Tu = function(r) {
  return r instanceof Uint8Array || r instanceof ArrayBuffer || typeof r == "string";
}, on = function(r) {
  if (typeof r == "string")
    return fu(r);
  if (r instanceof ArrayBuffer)
    return new Uint8Array(r);
  if (r instanceof Uint8Array)
    return r;
  throw new TypeError("`input` must be one of `string | ArrayBuffer | Uint8Array`");
}, Jr = function() {
  return new Promise(function(r) {
    setTimeout(function() {
      return r();
    }, 0);
  });
}, Pu = function(r, e) {
  e === void 0 && (e = !0);
  var t = [];
  e && t.push(65279);
  for (var n = 0, i = r.length; n < i; ) {
    var a = r.codePointAt(n);
    if (a < 65536)
      t.push(a), n += 1;
    else if (a < 1114112)
      t.push(_o(a), $o(a)), n += 2;
    else
      throw new Error("Invalid code point: 0x" + wi(a));
  }
  return new Uint16Array(t);
}, Du = function(r) {
  return r >= 0 && r <= 65535;
}, Au = function(r) {
  return r >= 65536 && r <= 1114111;
}, _o = function(r) {
  return Math.floor((r - 65536) / 1024) + 55296;
}, $o = function(r) {
  return (r - 65536) % 1024 + 56320;
}, gr;
(function(r) {
  r.BigEndian = "BigEndian", r.LittleEndian = "LittleEndian";
})(gr || (gr = {}));
var sn = "�".codePointAt(0), es = function(r, e) {
  if (e === void 0 && (e = !0), r.length <= 1)
    return String.fromCodePoint(sn);
  for (var t = e ? Ou(r) : gr.BigEndian, n = e ? 2 : 0, i = []; r.length - n >= 2; ) {
    var a = Za(r[n++], r[n++], t);
    if (Ru(a))
      if (r.length - n < 2)
        i.push(sn);
      else {
        var o = Za(r[n++], r[n++], t);
        Xa(o) ? i.push(a, o) : i.push(sn);
      }
    else Xa(a) ? (n += 2, i.push(sn)) : i.push(a);
  }
  return n < r.length && i.push(sn), String.fromCodePoint.apply(String, i);
}, Ru = function(r) {
  return r >= 55296 && r <= 56319;
}, Xa = function(r) {
  return r >= 56320 && r <= 57343;
}, Za = function(r, e, t) {
  if (t === gr.LittleEndian)
    return e << 8 | r;
  if (t === gr.BigEndian)
    return r << 8 | e;
  throw new Error("Invalid byteOrder: " + t);
}, Ou = function(r) {
  return ts(r) ? gr.BigEndian : rs(r) ? gr.LittleEndian : gr.BigEndian;
}, ts = function(r) {
  return r[0] === 254 && r[1] === 255;
}, rs = function(r) {
  return r[0] === 255 && r[1] === 254;
}, ns = function(r) {
  return ts(r) || rs(r);
}, Eu = function(r) {
  var e = String(r);
  if (Math.abs(r) < 1) {
    var t = parseInt(r.toString().split("e-")[1]);
    if (t) {
      var n = r < 0;
      n && (r *= -1), r *= Math.pow(10, t - 1), e = "0." + new Array(t).join("0") + r.toString().substring(2), n && (e = "-" + e);
    }
  } else {
    var t = parseInt(r.toString().split("+")[1]);
    t > 20 && (t -= 20, r /= Math.pow(10, t), e = r.toString() + new Array(t + 1).join("0"));
  }
  return e;
}, ei = function(r) {
  return Math.ceil(r.toString(2).length / 8);
}, Vr = function(r) {
  for (var e = new Uint8Array(ei(r)), t = 1; t <= e.length; t++)
    e[t - 1] = r >> (e.length - t) * 8;
  return e;
}, zn = function(r) {
  throw new Error(r);
};
function Nu(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Hi = {}, Ya;
function Fr() {
  return Ya || (Ya = 1, (function(r) {
    var e = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
    function t(a, o) {
      return Object.prototype.hasOwnProperty.call(a, o);
    }
    r.assign = function(a) {
      for (var o = Array.prototype.slice.call(arguments, 1); o.length; ) {
        var s = o.shift();
        if (s) {
          if (typeof s != "object")
            throw new TypeError(s + "must be non-object");
          for (var u in s)
            t(s, u) && (a[u] = s[u]);
        }
      }
      return a;
    }, r.shrinkBuf = function(a, o) {
      return a.length === o ? a : a.subarray ? a.subarray(0, o) : (a.length = o, a);
    };
    var n = {
      arraySet: function(a, o, s, u, l) {
        if (o.subarray && a.subarray) {
          a.set(o.subarray(s, s + u), l);
          return;
        }
        for (var c = 0; c < u; c++)
          a[l + c] = o[s + c];
      },
      // Join array of chunks to single array.
      flattenChunks: function(a) {
        var o, s, u, l, c, h;
        for (u = 0, o = 0, s = a.length; o < s; o++)
          u += a[o].length;
        for (h = new Uint8Array(u), l = 0, o = 0, s = a.length; o < s; o++)
          c = a[o], h.set(c, l), l += c.length;
        return h;
      }
    }, i = {
      arraySet: function(a, o, s, u, l) {
        for (var c = 0; c < u; c++)
          a[l + c] = o[s + c];
      },
      // Join array of chunks to single array.
      flattenChunks: function(a) {
        return [].concat.apply([], a);
      }
    };
    r.setTyped = function(a) {
      a ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, n)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, i));
    }, r.setTyped(e);
  })(Hi)), Hi;
}
var Lr = {}, Ut = {}, Pr = {}, Qa;
function zu() {
  if (Qa) return Pr;
  Qa = 1;
  var r = Fr(), e = 4, t = 0, n = 1, i = 2;
  function a(m) {
    for (var q = m.length; --q >= 0; )
      m[q] = 0;
  }
  var o = 0, s = 1, u = 2, l = 3, c = 258, h = 29, d = 256, v = d + 1 + h, y = 30, w = 19, F = 2 * v + 1, S = 15, A = 16, C = 7, E = 256, O = 16, D = 17, P = 18, M = (
    /* extra bits for each length code */
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
  ), U = (
    /* extra bits for each distance code */
    [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
  ), W = (
    /* extra bits for each bit length code */
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
  ), V = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], Z = 512, I = new Array((v + 2) * 2);
  a(I);
  var J = new Array(y * 2);
  a(J);
  var re = new Array(Z);
  a(re);
  var Y = new Array(c - l + 1);
  a(Y);
  var Q = new Array(h);
  a(Q);
  var Pe = new Array(y);
  a(Pe);
  function be(m, q, G, ee, T) {
    this.static_tree = m, this.extra_bits = q, this.extra_base = G, this.elems = ee, this.max_length = T, this.has_stree = m && m.length;
  }
  var Xe, Be, ze;
  function Ue(m, q) {
    this.dyn_tree = m, this.max_code = 0, this.stat_desc = q;
  }
  function We(m) {
    return m < 256 ? re[m] : re[256 + (m >>> 7)];
  }
  function Le(m, q) {
    m.pending_buf[m.pending++] = q & 255, m.pending_buf[m.pending++] = q >>> 8 & 255;
  }
  function De(m, q, G) {
    m.bi_valid > A - G ? (m.bi_buf |= q << m.bi_valid & 65535, Le(m, m.bi_buf), m.bi_buf = q >> A - m.bi_valid, m.bi_valid += G - A) : (m.bi_buf |= q << m.bi_valid & 65535, m.bi_valid += G);
  }
  function je(m, q, G) {
    De(
      m,
      G[q * 2],
      G[q * 2 + 1]
      /*.Len*/
    );
  }
  function oe(m, q) {
    var G = 0;
    do
      G |= m & 1, m >>>= 1, G <<= 1;
    while (--q > 0);
    return G >>> 1;
  }
  function tt(m) {
    m.bi_valid === 16 ? (Le(m, m.bi_buf), m.bi_buf = 0, m.bi_valid = 0) : m.bi_valid >= 8 && (m.pending_buf[m.pending++] = m.bi_buf & 255, m.bi_buf >>= 8, m.bi_valid -= 8);
  }
  function ot(m, q) {
    var G = q.dyn_tree, ee = q.max_code, T = q.stat_desc.static_tree, j = q.stat_desc.has_stree, p = q.stat_desc.extra_bits, H = q.stat_desc.extra_base, ue = q.stat_desc.max_length, f, z, B, g, k, N, ne = 0;
    for (g = 0; g <= S; g++)
      m.bl_count[g] = 0;
    for (G[m.heap[m.heap_max] * 2 + 1] = 0, f = m.heap_max + 1; f < F; f++)
      z = m.heap[f], g = G[G[z * 2 + 1] * 2 + 1] + 1, g > ue && (g = ue, ne++), G[z * 2 + 1] = g, !(z > ee) && (m.bl_count[g]++, k = 0, z >= H && (k = p[z - H]), N = G[z * 2], m.opt_len += N * (g + k), j && (m.static_len += N * (T[z * 2 + 1] + k)));
    if (ne !== 0) {
      do {
        for (g = ue - 1; m.bl_count[g] === 0; )
          g--;
        m.bl_count[g]--, m.bl_count[g + 1] += 2, m.bl_count[ue]--, ne -= 2;
      } while (ne > 0);
      for (g = ue; g !== 0; g--)
        for (z = m.bl_count[g]; z !== 0; )
          B = m.heap[--f], !(B > ee) && (G[B * 2 + 1] !== g && (m.opt_len += (g - G[B * 2 + 1]) * G[B * 2], G[B * 2 + 1] = g), z--);
    }
  }
  function Ft(m, q, G) {
    var ee = new Array(S + 1), T = 0, j, p;
    for (j = 1; j <= S; j++)
      ee[j] = T = T + G[j - 1] << 1;
    for (p = 0; p <= q; p++) {
      var H = m[p * 2 + 1];
      H !== 0 && (m[p * 2] = oe(ee[H]++, H));
    }
  }
  function Me() {
    var m, q, G, ee, T, j = new Array(S + 1);
    for (G = 0, ee = 0; ee < h - 1; ee++)
      for (Q[ee] = G, m = 0; m < 1 << M[ee]; m++)
        Y[G++] = ee;
    for (Y[G - 1] = ee, T = 0, ee = 0; ee < 16; ee++)
      for (Pe[ee] = T, m = 0; m < 1 << U[ee]; m++)
        re[T++] = ee;
    for (T >>= 7; ee < y; ee++)
      for (Pe[ee] = T << 7, m = 0; m < 1 << U[ee] - 7; m++)
        re[256 + T++] = ee;
    for (q = 0; q <= S; q++)
      j[q] = 0;
    for (m = 0; m <= 143; )
      I[m * 2 + 1] = 8, m++, j[8]++;
    for (; m <= 255; )
      I[m * 2 + 1] = 9, m++, j[9]++;
    for (; m <= 279; )
      I[m * 2 + 1] = 7, m++, j[7]++;
    for (; m <= 287; )
      I[m * 2 + 1] = 8, m++, j[8]++;
    for (Ft(I, v + 1, j), m = 0; m < y; m++)
      J[m * 2 + 1] = 5, J[m * 2] = oe(m, 5);
    Xe = new be(I, M, d + 1, v, S), Be = new be(J, U, 0, y, S), ze = new be(new Array(0), W, 0, w, C);
  }
  function pt(m) {
    var q;
    for (q = 0; q < v; q++)
      m.dyn_ltree[q * 2] = 0;
    for (q = 0; q < y; q++)
      m.dyn_dtree[q * 2] = 0;
    for (q = 0; q < w; q++)
      m.bl_tree[q * 2] = 0;
    m.dyn_ltree[E * 2] = 1, m.opt_len = m.static_len = 0, m.last_lit = m.matches = 0;
  }
  function Tr(m) {
    m.bi_valid > 8 ? Le(m, m.bi_buf) : m.bi_valid > 0 && (m.pending_buf[m.pending++] = m.bi_buf), m.bi_buf = 0, m.bi_valid = 0;
  }
  function kt(m, q, G, ee) {
    Tr(m), Le(m, G), Le(m, ~G), r.arraySet(m.pending_buf, m.window, q, G, m.pending), m.pending += G;
  }
  function mt(m, q, G, ee) {
    var T = q * 2, j = G * 2;
    return m[T] < m[j] || m[T] === m[j] && ee[q] <= ee[G];
  }
  function qe(m, q, G) {
    for (var ee = m.heap[G], T = G << 1; T <= m.heap_len && (T < m.heap_len && mt(q, m.heap[T + 1], m.heap[T], m.depth) && T++, !mt(q, ee, m.heap[T], m.depth)); )
      m.heap[G] = m.heap[T], G = T, T <<= 1;
    m.heap[G] = ee;
  }
  function xe(m, q, G) {
    var ee, T, j = 0, p, H;
    if (m.last_lit !== 0)
      do
        ee = m.pending_buf[m.d_buf + j * 2] << 8 | m.pending_buf[m.d_buf + j * 2 + 1], T = m.pending_buf[m.l_buf + j], j++, ee === 0 ? je(m, T, q) : (p = Y[T], je(m, p + d + 1, q), H = M[p], H !== 0 && (T -= Q[p], De(m, T, H)), ee--, p = We(ee), je(m, p, G), H = U[p], H !== 0 && (ee -= Pe[p], De(m, ee, H)));
      while (j < m.last_lit);
    je(m, E, q);
  }
  function Ct(m, q) {
    var G = q.dyn_tree, ee = q.stat_desc.static_tree, T = q.stat_desc.has_stree, j = q.stat_desc.elems, p, H, ue = -1, f;
    for (m.heap_len = 0, m.heap_max = F, p = 0; p < j; p++)
      G[p * 2] !== 0 ? (m.heap[++m.heap_len] = ue = p, m.depth[p] = 0) : G[p * 2 + 1] = 0;
    for (; m.heap_len < 2; )
      f = m.heap[++m.heap_len] = ue < 2 ? ++ue : 0, G[f * 2] = 1, m.depth[f] = 0, m.opt_len--, T && (m.static_len -= ee[f * 2 + 1]);
    for (q.max_code = ue, p = m.heap_len >> 1; p >= 1; p--)
      qe(m, G, p);
    f = j;
    do
      p = m.heap[
        1
        /*SMALLEST*/
      ], m.heap[
        1
        /*SMALLEST*/
      ] = m.heap[m.heap_len--], qe(
        m,
        G,
        1
        /*SMALLEST*/
      ), H = m.heap[
        1
        /*SMALLEST*/
      ], m.heap[--m.heap_max] = p, m.heap[--m.heap_max] = H, G[f * 2] = G[p * 2] + G[H * 2], m.depth[f] = (m.depth[p] >= m.depth[H] ? m.depth[p] : m.depth[H]) + 1, G[p * 2 + 1] = G[H * 2 + 1] = f, m.heap[
        1
        /*SMALLEST*/
      ] = f++, qe(
        m,
        G,
        1
        /*SMALLEST*/
      );
    while (m.heap_len >= 2);
    m.heap[--m.heap_max] = m.heap[
      1
      /*SMALLEST*/
    ], ot(m, q), Ft(G, ue, m.bl_count);
  }
  function Br(m, q, G) {
    var ee, T = -1, j, p = q[1], H = 0, ue = 7, f = 4;
    for (p === 0 && (ue = 138, f = 3), q[(G + 1) * 2 + 1] = 65535, ee = 0; ee <= G; ee++)
      j = p, p = q[(ee + 1) * 2 + 1], !(++H < ue && j === p) && (H < f ? m.bl_tree[j * 2] += H : j !== 0 ? (j !== T && m.bl_tree[j * 2]++, m.bl_tree[O * 2]++) : H <= 10 ? m.bl_tree[D * 2]++ : m.bl_tree[P * 2]++, H = 0, T = j, p === 0 ? (ue = 138, f = 3) : j === p ? (ue = 6, f = 3) : (ue = 7, f = 4));
  }
  function ur(m, q, G) {
    var ee, T = -1, j, p = q[1], H = 0, ue = 7, f = 4;
    for (p === 0 && (ue = 138, f = 3), ee = 0; ee <= G; ee++)
      if (j = p, p = q[(ee + 1) * 2 + 1], !(++H < ue && j === p)) {
        if (H < f)
          do
            je(m, j, m.bl_tree);
          while (--H !== 0);
        else j !== 0 ? (j !== T && (je(m, j, m.bl_tree), H--), je(m, O, m.bl_tree), De(m, H - 3, 2)) : H <= 10 ? (je(m, D, m.bl_tree), De(m, H - 3, 3)) : (je(m, P, m.bl_tree), De(m, H - 11, 7));
        H = 0, T = j, p === 0 ? (ue = 138, f = 3) : j === p ? (ue = 6, f = 3) : (ue = 7, f = 4);
      }
  }
  function Tt(m) {
    var q;
    for (Br(m, m.dyn_ltree, m.l_desc.max_code), Br(m, m.dyn_dtree, m.d_desc.max_code), Ct(m, m.bl_desc), q = w - 1; q >= 3 && m.bl_tree[V[q] * 2 + 1] === 0; q--)
      ;
    return m.opt_len += 3 * (q + 1) + 5 + 5 + 4, q;
  }
  function Mr(m, q, G, ee) {
    var T;
    for (De(m, q - 257, 5), De(m, G - 1, 5), De(m, ee - 4, 4), T = 0; T < ee; T++)
      De(m, m.bl_tree[V[T] * 2 + 1], 3);
    ur(m, m.dyn_ltree, q - 1), ur(m, m.dyn_dtree, G - 1);
  }
  function lr(m) {
    var q = 4093624447, G;
    for (G = 0; G <= 31; G++, q >>>= 1)
      if (q & 1 && m.dyn_ltree[G * 2] !== 0)
        return t;
    if (m.dyn_ltree[18] !== 0 || m.dyn_ltree[20] !== 0 || m.dyn_ltree[26] !== 0)
      return n;
    for (G = 32; G < d; G++)
      if (m.dyn_ltree[G * 2] !== 0)
        return n;
    return t;
  }
  var jt = !1;
  function Ir(m) {
    jt || (Me(), jt = !0), m.l_desc = new Ue(m.dyn_ltree, Xe), m.d_desc = new Ue(m.dyn_dtree, Be), m.bl_desc = new Ue(m.bl_tree, ze), m.bi_buf = 0, m.bi_valid = 0, pt(m);
  }
  function fr(m, q, G, ee) {
    De(m, (o << 1) + (ee ? 1 : 0), 3), kt(m, q, G);
  }
  function st(m) {
    De(m, s << 1, 3), je(m, E, I), tt(m);
  }
  function Kt(m, q, G, ee) {
    var T, j, p = 0;
    m.level > 0 ? (m.strm.data_type === i && (m.strm.data_type = lr(m)), Ct(m, m.l_desc), Ct(m, m.d_desc), p = Tt(m), T = m.opt_len + 3 + 7 >>> 3, j = m.static_len + 3 + 7 >>> 3, j <= T && (T = j)) : T = j = G + 5, G + 4 <= T && q !== -1 ? fr(m, q, G, ee) : m.strategy === e || j === T ? (De(m, (s << 1) + (ee ? 1 : 0), 3), xe(m, I, J)) : (De(m, (u << 1) + (ee ? 1 : 0), 3), Mr(m, m.l_desc.max_code + 1, m.d_desc.max_code + 1, p + 1), xe(m, m.dyn_ltree, m.dyn_dtree)), pt(m), ee && Tr(m);
  }
  function jr(m, q, G) {
    return m.pending_buf[m.d_buf + m.last_lit * 2] = q >>> 8 & 255, m.pending_buf[m.d_buf + m.last_lit * 2 + 1] = q & 255, m.pending_buf[m.l_buf + m.last_lit] = G & 255, m.last_lit++, q === 0 ? m.dyn_ltree[G * 2]++ : (m.matches++, q--, m.dyn_ltree[(Y[G] + d + 1) * 2]++, m.dyn_dtree[We(q) * 2]++), m.last_lit === m.lit_bufsize - 1;
  }
  return Pr._tr_init = Ir, Pr._tr_stored_block = fr, Pr._tr_flush_block = Kt, Pr._tr_tally = jr, Pr._tr_align = st, Pr;
}
var Ki, Ja;
function is() {
  if (Ja) return Ki;
  Ja = 1;
  function r(e, t, n, i) {
    for (var a = e & 65535 | 0, o = e >>> 16 & 65535 | 0, s = 0; n !== 0; ) {
      s = n > 2e3 ? 2e3 : n, n -= s;
      do
        a = a + t[i++] | 0, o = o + a | 0;
      while (--s);
      a %= 65521, o %= 65521;
    }
    return a | o << 16 | 0;
  }
  return Ki = r, Ki;
}
var Gi, _a;
function as() {
  if (_a) return Gi;
  _a = 1;
  function r() {
    for (var n, i = [], a = 0; a < 256; a++) {
      n = a;
      for (var o = 0; o < 8; o++)
        n = n & 1 ? 3988292384 ^ n >>> 1 : n >>> 1;
      i[a] = n;
    }
    return i;
  }
  var e = r();
  function t(n, i, a, o) {
    var s = e, u = o + a;
    n ^= -1;
    for (var l = o; l < u; l++)
      n = n >>> 8 ^ s[(n ^ i[l]) & 255];
    return n ^ -1;
  }
  return Gi = t, Gi;
}
var Xi, $a;
function Sa() {
  return $a || ($a = 1, Xi = {
    2: "need dictionary",
    /* Z_NEED_DICT       2  */
    1: "stream end",
    /* Z_STREAM_END      1  */
    0: "",
    /* Z_OK              0  */
    "-1": "file error",
    /* Z_ERRNO         (-1) */
    "-2": "stream error",
    /* Z_STREAM_ERROR  (-2) */
    "-3": "data error",
    /* Z_DATA_ERROR    (-3) */
    "-4": "insufficient memory",
    /* Z_MEM_ERROR     (-4) */
    "-5": "buffer error",
    /* Z_BUF_ERROR     (-5) */
    "-6": "incompatible version"
    /* Z_VERSION_ERROR (-6) */
  }), Xi;
}
var eo;
function Bu() {
  if (eo) return Ut;
  eo = 1;
  var r = Fr(), e = zu(), t = is(), n = as(), i = Sa(), a = 0, o = 1, s = 3, u = 4, l = 5, c = 0, h = 1, d = -2, v = -3, y = -5, w = -1, F = 1, S = 2, A = 3, C = 4, E = 0, O = 2, D = 8, P = 9, M = 15, U = 8, W = 29, V = 256, Z = V + 1 + W, I = 30, J = 19, re = 2 * Z + 1, Y = 15, Q = 3, Pe = 258, be = Pe + Q + 1, Xe = 32, Be = 42, ze = 69, Ue = 73, We = 91, Le = 103, De = 113, je = 666, oe = 1, tt = 2, ot = 3, Ft = 4, Me = 3;
  function pt(f, z) {
    return f.msg = i[z], z;
  }
  function Tr(f) {
    return (f << 1) - (f > 4 ? 9 : 0);
  }
  function kt(f) {
    for (var z = f.length; --z >= 0; )
      f[z] = 0;
  }
  function mt(f) {
    var z = f.state, B = z.pending;
    B > f.avail_out && (B = f.avail_out), B !== 0 && (r.arraySet(f.output, z.pending_buf, z.pending_out, B, f.next_out), f.next_out += B, z.pending_out += B, f.total_out += B, f.avail_out -= B, z.pending -= B, z.pending === 0 && (z.pending_out = 0));
  }
  function qe(f, z) {
    e._tr_flush_block(f, f.block_start >= 0 ? f.block_start : -1, f.strstart - f.block_start, z), f.block_start = f.strstart, mt(f.strm);
  }
  function xe(f, z) {
    f.pending_buf[f.pending++] = z;
  }
  function Ct(f, z) {
    f.pending_buf[f.pending++] = z >>> 8 & 255, f.pending_buf[f.pending++] = z & 255;
  }
  function Br(f, z, B, g) {
    var k = f.avail_in;
    return k > g && (k = g), k === 0 ? 0 : (f.avail_in -= k, r.arraySet(z, f.input, f.next_in, k, B), f.state.wrap === 1 ? f.adler = t(f.adler, z, k, B) : f.state.wrap === 2 && (f.adler = n(f.adler, z, k, B)), f.next_in += k, f.total_in += k, k);
  }
  function ur(f, z) {
    var B = f.max_chain_length, g = f.strstart, k, N, ne = f.prev_length, _ = f.nice_match, $ = f.strstart > f.w_size - be ? f.strstart - (f.w_size - be) : 0, Te = f.window, _t = f.w_mask, Ke = f.prev, Ae = f.strstart + Pe, Qe = Te[g + ne - 1], ut = Te[g + ne];
    f.prev_length >= f.good_match && (B >>= 2), _ > f.lookahead && (_ = f.lookahead);
    do
      if (k = z, !(Te[k + ne] !== ut || Te[k + ne - 1] !== Qe || Te[k] !== Te[g] || Te[++k] !== Te[g + 1])) {
        g += 2, k++;
        do
          ;
        while (Te[++g] === Te[++k] && Te[++g] === Te[++k] && Te[++g] === Te[++k] && Te[++g] === Te[++k] && Te[++g] === Te[++k] && Te[++g] === Te[++k] && Te[++g] === Te[++k] && Te[++g] === Te[++k] && g < Ae);
        if (N = Pe - (Ae - g), g = Ae - Pe, N > ne) {
          if (f.match_start = z, ne = N, N >= _)
            break;
          Qe = Te[g + ne - 1], ut = Te[g + ne];
        }
      }
    while ((z = Ke[z & _t]) > $ && --B !== 0);
    return ne <= f.lookahead ? ne : f.lookahead;
  }
  function Tt(f) {
    var z = f.w_size, B, g, k, N, ne;
    do {
      if (N = f.window_size - f.lookahead - f.strstart, f.strstart >= z + (z - be)) {
        r.arraySet(f.window, f.window, z, z, 0), f.match_start -= z, f.strstart -= z, f.block_start -= z, g = f.hash_size, B = g;
        do
          k = f.head[--B], f.head[B] = k >= z ? k - z : 0;
        while (--g);
        g = z, B = g;
        do
          k = f.prev[--B], f.prev[B] = k >= z ? k - z : 0;
        while (--g);
        N += z;
      }
      if (f.strm.avail_in === 0)
        break;
      if (g = Br(f.strm, f.window, f.strstart + f.lookahead, N), f.lookahead += g, f.lookahead + f.insert >= Q)
        for (ne = f.strstart - f.insert, f.ins_h = f.window[ne], f.ins_h = (f.ins_h << f.hash_shift ^ f.window[ne + 1]) & f.hash_mask; f.insert && (f.ins_h = (f.ins_h << f.hash_shift ^ f.window[ne + Q - 1]) & f.hash_mask, f.prev[ne & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = ne, ne++, f.insert--, !(f.lookahead + f.insert < Q)); )
          ;
    } while (f.lookahead < be && f.strm.avail_in !== 0);
  }
  function Mr(f, z) {
    var B = 65535;
    for (B > f.pending_buf_size - 5 && (B = f.pending_buf_size - 5); ; ) {
      if (f.lookahead <= 1) {
        if (Tt(f), f.lookahead === 0 && z === a)
          return oe;
        if (f.lookahead === 0)
          break;
      }
      f.strstart += f.lookahead, f.lookahead = 0;
      var g = f.block_start + B;
      if ((f.strstart === 0 || f.strstart >= g) && (f.lookahead = f.strstart - g, f.strstart = g, qe(f, !1), f.strm.avail_out === 0) || f.strstart - f.block_start >= f.w_size - be && (qe(f, !1), f.strm.avail_out === 0))
        return oe;
    }
    return f.insert = 0, z === u ? (qe(f, !0), f.strm.avail_out === 0 ? ot : Ft) : (f.strstart > f.block_start && (qe(f, !1), f.strm.avail_out === 0), oe);
  }
  function lr(f, z) {
    for (var B, g; ; ) {
      if (f.lookahead < be) {
        if (Tt(f), f.lookahead < be && z === a)
          return oe;
        if (f.lookahead === 0)
          break;
      }
      if (B = 0, f.lookahead >= Q && (f.ins_h = (f.ins_h << f.hash_shift ^ f.window[f.strstart + Q - 1]) & f.hash_mask, B = f.prev[f.strstart & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = f.strstart), B !== 0 && f.strstart - B <= f.w_size - be && (f.match_length = ur(f, B)), f.match_length >= Q)
        if (g = e._tr_tally(f, f.strstart - f.match_start, f.match_length - Q), f.lookahead -= f.match_length, f.match_length <= f.max_lazy_match && f.lookahead >= Q) {
          f.match_length--;
          do
            f.strstart++, f.ins_h = (f.ins_h << f.hash_shift ^ f.window[f.strstart + Q - 1]) & f.hash_mask, B = f.prev[f.strstart & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = f.strstart;
          while (--f.match_length !== 0);
          f.strstart++;
        } else
          f.strstart += f.match_length, f.match_length = 0, f.ins_h = f.window[f.strstart], f.ins_h = (f.ins_h << f.hash_shift ^ f.window[f.strstart + 1]) & f.hash_mask;
      else
        g = e._tr_tally(f, 0, f.window[f.strstart]), f.lookahead--, f.strstart++;
      if (g && (qe(f, !1), f.strm.avail_out === 0))
        return oe;
    }
    return f.insert = f.strstart < Q - 1 ? f.strstart : Q - 1, z === u ? (qe(f, !0), f.strm.avail_out === 0 ? ot : Ft) : f.last_lit && (qe(f, !1), f.strm.avail_out === 0) ? oe : tt;
  }
  function jt(f, z) {
    for (var B, g, k; ; ) {
      if (f.lookahead < be) {
        if (Tt(f), f.lookahead < be && z === a)
          return oe;
        if (f.lookahead === 0)
          break;
      }
      if (B = 0, f.lookahead >= Q && (f.ins_h = (f.ins_h << f.hash_shift ^ f.window[f.strstart + Q - 1]) & f.hash_mask, B = f.prev[f.strstart & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = f.strstart), f.prev_length = f.match_length, f.prev_match = f.match_start, f.match_length = Q - 1, B !== 0 && f.prev_length < f.max_lazy_match && f.strstart - B <= f.w_size - be && (f.match_length = ur(f, B), f.match_length <= 5 && (f.strategy === F || f.match_length === Q && f.strstart - f.match_start > 4096) && (f.match_length = Q - 1)), f.prev_length >= Q && f.match_length <= f.prev_length) {
        k = f.strstart + f.lookahead - Q, g = e._tr_tally(f, f.strstart - 1 - f.prev_match, f.prev_length - Q), f.lookahead -= f.prev_length - 1, f.prev_length -= 2;
        do
          ++f.strstart <= k && (f.ins_h = (f.ins_h << f.hash_shift ^ f.window[f.strstart + Q - 1]) & f.hash_mask, B = f.prev[f.strstart & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = f.strstart);
        while (--f.prev_length !== 0);
        if (f.match_available = 0, f.match_length = Q - 1, f.strstart++, g && (qe(f, !1), f.strm.avail_out === 0))
          return oe;
      } else if (f.match_available) {
        if (g = e._tr_tally(f, 0, f.window[f.strstart - 1]), g && qe(f, !1), f.strstart++, f.lookahead--, f.strm.avail_out === 0)
          return oe;
      } else
        f.match_available = 1, f.strstart++, f.lookahead--;
    }
    return f.match_available && (g = e._tr_tally(f, 0, f.window[f.strstart - 1]), f.match_available = 0), f.insert = f.strstart < Q - 1 ? f.strstart : Q - 1, z === u ? (qe(f, !0), f.strm.avail_out === 0 ? ot : Ft) : f.last_lit && (qe(f, !1), f.strm.avail_out === 0) ? oe : tt;
  }
  function Ir(f, z) {
    for (var B, g, k, N, ne = f.window; ; ) {
      if (f.lookahead <= Pe) {
        if (Tt(f), f.lookahead <= Pe && z === a)
          return oe;
        if (f.lookahead === 0)
          break;
      }
      if (f.match_length = 0, f.lookahead >= Q && f.strstart > 0 && (k = f.strstart - 1, g = ne[k], g === ne[++k] && g === ne[++k] && g === ne[++k])) {
        N = f.strstart + Pe;
        do
          ;
        while (g === ne[++k] && g === ne[++k] && g === ne[++k] && g === ne[++k] && g === ne[++k] && g === ne[++k] && g === ne[++k] && g === ne[++k] && k < N);
        f.match_length = Pe - (N - k), f.match_length > f.lookahead && (f.match_length = f.lookahead);
      }
      if (f.match_length >= Q ? (B = e._tr_tally(f, 1, f.match_length - Q), f.lookahead -= f.match_length, f.strstart += f.match_length, f.match_length = 0) : (B = e._tr_tally(f, 0, f.window[f.strstart]), f.lookahead--, f.strstart++), B && (qe(f, !1), f.strm.avail_out === 0))
        return oe;
    }
    return f.insert = 0, z === u ? (qe(f, !0), f.strm.avail_out === 0 ? ot : Ft) : f.last_lit && (qe(f, !1), f.strm.avail_out === 0) ? oe : tt;
  }
  function fr(f, z) {
    for (var B; ; ) {
      if (f.lookahead === 0 && (Tt(f), f.lookahead === 0)) {
        if (z === a)
          return oe;
        break;
      }
      if (f.match_length = 0, B = e._tr_tally(f, 0, f.window[f.strstart]), f.lookahead--, f.strstart++, B && (qe(f, !1), f.strm.avail_out === 0))
        return oe;
    }
    return f.insert = 0, z === u ? (qe(f, !0), f.strm.avail_out === 0 ? ot : Ft) : f.last_lit && (qe(f, !1), f.strm.avail_out === 0) ? oe : tt;
  }
  function st(f, z, B, g, k) {
    this.good_length = f, this.max_lazy = z, this.nice_length = B, this.max_chain = g, this.func = k;
  }
  var Kt;
  Kt = [
    /*      good lazy nice chain */
    new st(0, 0, 0, 0, Mr),
    /* 0 store only */
    new st(4, 4, 8, 4, lr),
    /* 1 max speed, no lazy matches */
    new st(4, 5, 16, 8, lr),
    /* 2 */
    new st(4, 6, 32, 32, lr),
    /* 3 */
    new st(4, 4, 16, 16, jt),
    /* 4 lazy matches */
    new st(8, 16, 32, 32, jt),
    /* 5 */
    new st(8, 16, 128, 128, jt),
    /* 6 */
    new st(8, 32, 128, 256, jt),
    /* 7 */
    new st(32, 128, 258, 1024, jt),
    /* 8 */
    new st(32, 258, 258, 4096, jt)
    /* 9 max compression */
  ];
  function jr(f) {
    f.window_size = 2 * f.w_size, kt(f.head), f.max_lazy_match = Kt[f.level].max_lazy, f.good_match = Kt[f.level].good_length, f.nice_match = Kt[f.level].nice_length, f.max_chain_length = Kt[f.level].max_chain, f.strstart = 0, f.block_start = 0, f.lookahead = 0, f.insert = 0, f.match_length = f.prev_length = Q - 1, f.match_available = 0, f.ins_h = 0;
  }
  function m() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = D, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new r.Buf16(re * 2), this.dyn_dtree = new r.Buf16((2 * I + 1) * 2), this.bl_tree = new r.Buf16((2 * J + 1) * 2), kt(this.dyn_ltree), kt(this.dyn_dtree), kt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new r.Buf16(Y + 1), this.heap = new r.Buf16(2 * Z + 1), kt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new r.Buf16(2 * Z + 1), kt(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
  }
  function q(f) {
    var z;
    return !f || !f.state ? pt(f, d) : (f.total_in = f.total_out = 0, f.data_type = O, z = f.state, z.pending = 0, z.pending_out = 0, z.wrap < 0 && (z.wrap = -z.wrap), z.status = z.wrap ? Be : De, f.adler = z.wrap === 2 ? 0 : 1, z.last_flush = a, e._tr_init(z), c);
  }
  function G(f) {
    var z = q(f);
    return z === c && jr(f.state), z;
  }
  function ee(f, z) {
    return !f || !f.state || f.state.wrap !== 2 ? d : (f.state.gzhead = z, c);
  }
  function T(f, z, B, g, k, N) {
    if (!f)
      return d;
    var ne = 1;
    if (z === w && (z = 6), g < 0 ? (ne = 0, g = -g) : g > 15 && (ne = 2, g -= 16), k < 1 || k > P || B !== D || g < 8 || g > 15 || z < 0 || z > 9 || N < 0 || N > C)
      return pt(f, d);
    g === 8 && (g = 9);
    var _ = new m();
    return f.state = _, _.strm = f, _.wrap = ne, _.gzhead = null, _.w_bits = g, _.w_size = 1 << _.w_bits, _.w_mask = _.w_size - 1, _.hash_bits = k + 7, _.hash_size = 1 << _.hash_bits, _.hash_mask = _.hash_size - 1, _.hash_shift = ~~((_.hash_bits + Q - 1) / Q), _.window = new r.Buf8(_.w_size * 2), _.head = new r.Buf16(_.hash_size), _.prev = new r.Buf16(_.w_size), _.lit_bufsize = 1 << k + 6, _.pending_buf_size = _.lit_bufsize * 4, _.pending_buf = new r.Buf8(_.pending_buf_size), _.d_buf = 1 * _.lit_bufsize, _.l_buf = 3 * _.lit_bufsize, _.level = z, _.strategy = N, _.method = B, G(f);
  }
  function j(f, z) {
    return T(f, z, D, M, U, E);
  }
  function p(f, z) {
    var B, g, k, N;
    if (!f || !f.state || z > l || z < 0)
      return f ? pt(f, d) : d;
    if (g = f.state, !f.output || !f.input && f.avail_in !== 0 || g.status === je && z !== u)
      return pt(f, f.avail_out === 0 ? y : d);
    if (g.strm = f, B = g.last_flush, g.last_flush = z, g.status === Be)
      if (g.wrap === 2)
        f.adler = 0, xe(g, 31), xe(g, 139), xe(g, 8), g.gzhead ? (xe(
          g,
          (g.gzhead.text ? 1 : 0) + (g.gzhead.hcrc ? 2 : 0) + (g.gzhead.extra ? 4 : 0) + (g.gzhead.name ? 8 : 0) + (g.gzhead.comment ? 16 : 0)
        ), xe(g, g.gzhead.time & 255), xe(g, g.gzhead.time >> 8 & 255), xe(g, g.gzhead.time >> 16 & 255), xe(g, g.gzhead.time >> 24 & 255), xe(g, g.level === 9 ? 2 : g.strategy >= S || g.level < 2 ? 4 : 0), xe(g, g.gzhead.os & 255), g.gzhead.extra && g.gzhead.extra.length && (xe(g, g.gzhead.extra.length & 255), xe(g, g.gzhead.extra.length >> 8 & 255)), g.gzhead.hcrc && (f.adler = n(f.adler, g.pending_buf, g.pending, 0)), g.gzindex = 0, g.status = ze) : (xe(g, 0), xe(g, 0), xe(g, 0), xe(g, 0), xe(g, 0), xe(g, g.level === 9 ? 2 : g.strategy >= S || g.level < 2 ? 4 : 0), xe(g, Me), g.status = De);
      else {
        var ne = D + (g.w_bits - 8 << 4) << 8, _ = -1;
        g.strategy >= S || g.level < 2 ? _ = 0 : g.level < 6 ? _ = 1 : g.level === 6 ? _ = 2 : _ = 3, ne |= _ << 6, g.strstart !== 0 && (ne |= Xe), ne += 31 - ne % 31, g.status = De, Ct(g, ne), g.strstart !== 0 && (Ct(g, f.adler >>> 16), Ct(g, f.adler & 65535)), f.adler = 1;
      }
    if (g.status === ze)
      if (g.gzhead.extra) {
        for (k = g.pending; g.gzindex < (g.gzhead.extra.length & 65535) && !(g.pending === g.pending_buf_size && (g.gzhead.hcrc && g.pending > k && (f.adler = n(f.adler, g.pending_buf, g.pending - k, k)), mt(f), k = g.pending, g.pending === g.pending_buf_size)); )
          xe(g, g.gzhead.extra[g.gzindex] & 255), g.gzindex++;
        g.gzhead.hcrc && g.pending > k && (f.adler = n(f.adler, g.pending_buf, g.pending - k, k)), g.gzindex === g.gzhead.extra.length && (g.gzindex = 0, g.status = Ue);
      } else
        g.status = Ue;
    if (g.status === Ue)
      if (g.gzhead.name) {
        k = g.pending;
        do {
          if (g.pending === g.pending_buf_size && (g.gzhead.hcrc && g.pending > k && (f.adler = n(f.adler, g.pending_buf, g.pending - k, k)), mt(f), k = g.pending, g.pending === g.pending_buf_size)) {
            N = 1;
            break;
          }
          g.gzindex < g.gzhead.name.length ? N = g.gzhead.name.charCodeAt(g.gzindex++) & 255 : N = 0, xe(g, N);
        } while (N !== 0);
        g.gzhead.hcrc && g.pending > k && (f.adler = n(f.adler, g.pending_buf, g.pending - k, k)), N === 0 && (g.gzindex = 0, g.status = We);
      } else
        g.status = We;
    if (g.status === We)
      if (g.gzhead.comment) {
        k = g.pending;
        do {
          if (g.pending === g.pending_buf_size && (g.gzhead.hcrc && g.pending > k && (f.adler = n(f.adler, g.pending_buf, g.pending - k, k)), mt(f), k = g.pending, g.pending === g.pending_buf_size)) {
            N = 1;
            break;
          }
          g.gzindex < g.gzhead.comment.length ? N = g.gzhead.comment.charCodeAt(g.gzindex++) & 255 : N = 0, xe(g, N);
        } while (N !== 0);
        g.gzhead.hcrc && g.pending > k && (f.adler = n(f.adler, g.pending_buf, g.pending - k, k)), N === 0 && (g.status = Le);
      } else
        g.status = Le;
    if (g.status === Le && (g.gzhead.hcrc ? (g.pending + 2 > g.pending_buf_size && mt(f), g.pending + 2 <= g.pending_buf_size && (xe(g, f.adler & 255), xe(g, f.adler >> 8 & 255), f.adler = 0, g.status = De)) : g.status = De), g.pending !== 0) {
      if (mt(f), f.avail_out === 0)
        return g.last_flush = -1, c;
    } else if (f.avail_in === 0 && Tr(z) <= Tr(B) && z !== u)
      return pt(f, y);
    if (g.status === je && f.avail_in !== 0)
      return pt(f, y);
    if (f.avail_in !== 0 || g.lookahead !== 0 || z !== a && g.status !== je) {
      var $ = g.strategy === S ? fr(g, z) : g.strategy === A ? Ir(g, z) : Kt[g.level].func(g, z);
      if (($ === ot || $ === Ft) && (g.status = je), $ === oe || $ === ot)
        return f.avail_out === 0 && (g.last_flush = -1), c;
      if ($ === tt && (z === o ? e._tr_align(g) : z !== l && (e._tr_stored_block(g, 0, 0, !1), z === s && (kt(g.head), g.lookahead === 0 && (g.strstart = 0, g.block_start = 0, g.insert = 0))), mt(f), f.avail_out === 0))
        return g.last_flush = -1, c;
    }
    return z !== u ? c : g.wrap <= 0 ? h : (g.wrap === 2 ? (xe(g, f.adler & 255), xe(g, f.adler >> 8 & 255), xe(g, f.adler >> 16 & 255), xe(g, f.adler >> 24 & 255), xe(g, f.total_in & 255), xe(g, f.total_in >> 8 & 255), xe(g, f.total_in >> 16 & 255), xe(g, f.total_in >> 24 & 255)) : (Ct(g, f.adler >>> 16), Ct(g, f.adler & 65535)), mt(f), g.wrap > 0 && (g.wrap = -g.wrap), g.pending !== 0 ? c : h);
  }
  function H(f) {
    var z;
    return !f || !f.state ? d : (z = f.state.status, z !== Be && z !== ze && z !== Ue && z !== We && z !== Le && z !== De && z !== je ? pt(f, d) : (f.state = null, z === De ? pt(f, v) : c));
  }
  function ue(f, z) {
    var B = z.length, g, k, N, ne, _, $, Te, _t;
    if (!f || !f.state || (g = f.state, ne = g.wrap, ne === 2 || ne === 1 && g.status !== Be || g.lookahead))
      return d;
    for (ne === 1 && (f.adler = t(f.adler, z, B, 0)), g.wrap = 0, B >= g.w_size && (ne === 0 && (kt(g.head), g.strstart = 0, g.block_start = 0, g.insert = 0), _t = new r.Buf8(g.w_size), r.arraySet(_t, z, B - g.w_size, g.w_size, 0), z = _t, B = g.w_size), _ = f.avail_in, $ = f.next_in, Te = f.input, f.avail_in = B, f.next_in = 0, f.input = z, Tt(g); g.lookahead >= Q; ) {
      k = g.strstart, N = g.lookahead - (Q - 1);
      do
        g.ins_h = (g.ins_h << g.hash_shift ^ g.window[k + Q - 1]) & g.hash_mask, g.prev[k & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = k, k++;
      while (--N);
      g.strstart = k, g.lookahead = Q - 1, Tt(g);
    }
    return g.strstart += g.lookahead, g.block_start = g.strstart, g.insert = g.lookahead, g.lookahead = 0, g.match_length = g.prev_length = Q - 1, g.match_available = 0, f.next_in = $, f.input = Te, f.avail_in = _, g.wrap = ne, c;
  }
  return Ut.deflateInit = j, Ut.deflateInit2 = T, Ut.deflateReset = G, Ut.deflateResetKeep = q, Ut.deflateSetHeader = ee, Ut.deflate = p, Ut.deflateEnd = H, Ut.deflateSetDictionary = ue, Ut.deflateInfo = "pako deflate (from Nodeca project)", Ut;
}
var Dr = {}, to;
function os() {
  if (to) return Dr;
  to = 1;
  var r = Fr(), e = !0, t = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch {
    e = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch {
    t = !1;
  }
  for (var n = new r.Buf8(256), i = 0; i < 256; i++)
    n[i] = i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1;
  n[254] = n[254] = 1, Dr.string2buf = function(o) {
    var s, u, l, c, h, d = o.length, v = 0;
    for (c = 0; c < d; c++)
      u = o.charCodeAt(c), (u & 64512) === 55296 && c + 1 < d && (l = o.charCodeAt(c + 1), (l & 64512) === 56320 && (u = 65536 + (u - 55296 << 10) + (l - 56320), c++)), v += u < 128 ? 1 : u < 2048 ? 2 : u < 65536 ? 3 : 4;
    for (s = new r.Buf8(v), h = 0, c = 0; h < v; c++)
      u = o.charCodeAt(c), (u & 64512) === 55296 && c + 1 < d && (l = o.charCodeAt(c + 1), (l & 64512) === 56320 && (u = 65536 + (u - 55296 << 10) + (l - 56320), c++)), u < 128 ? s[h++] = u : u < 2048 ? (s[h++] = 192 | u >>> 6, s[h++] = 128 | u & 63) : u < 65536 ? (s[h++] = 224 | u >>> 12, s[h++] = 128 | u >>> 6 & 63, s[h++] = 128 | u & 63) : (s[h++] = 240 | u >>> 18, s[h++] = 128 | u >>> 12 & 63, s[h++] = 128 | u >>> 6 & 63, s[h++] = 128 | u & 63);
    return s;
  };
  function a(o, s) {
    if (s < 65534 && (o.subarray && t || !o.subarray && e))
      return String.fromCharCode.apply(null, r.shrinkBuf(o, s));
    for (var u = "", l = 0; l < s; l++)
      u += String.fromCharCode(o[l]);
    return u;
  }
  return Dr.buf2binstring = function(o) {
    return a(o, o.length);
  }, Dr.binstring2buf = function(o) {
    for (var s = new r.Buf8(o.length), u = 0, l = s.length; u < l; u++)
      s[u] = o.charCodeAt(u);
    return s;
  }, Dr.buf2string = function(o, s) {
    var u, l, c, h, d = s || o.length, v = new Array(d * 2);
    for (l = 0, u = 0; u < d; ) {
      if (c = o[u++], c < 128) {
        v[l++] = c;
        continue;
      }
      if (h = n[c], h > 4) {
        v[l++] = 65533, u += h - 1;
        continue;
      }
      for (c &= h === 2 ? 31 : h === 3 ? 15 : 7; h > 1 && u < d; )
        c = c << 6 | o[u++] & 63, h--;
      if (h > 1) {
        v[l++] = 65533;
        continue;
      }
      c < 65536 ? v[l++] = c : (c -= 65536, v[l++] = 55296 | c >> 10 & 1023, v[l++] = 56320 | c & 1023);
    }
    return a(v, l);
  }, Dr.utf8border = function(o, s) {
    var u;
    for (s = s || o.length, s > o.length && (s = o.length), u = s - 1; u >= 0 && (o[u] & 192) === 128; )
      u--;
    return u < 0 || u === 0 ? s : u + n[o[u]] > s ? u : s;
  }, Dr;
}
var Zi, ro;
function ss() {
  if (ro) return Zi;
  ro = 1;
  function r() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  }
  return Zi = r, Zi;
}
var no;
function Mu() {
  if (no) return Lr;
  no = 1;
  var r = Bu(), e = Fr(), t = os(), n = Sa(), i = ss(), a = Object.prototype.toString, o = 0, s = 4, u = 0, l = 1, c = 2, h = -1, d = 0, v = 8;
  function y(A) {
    if (!(this instanceof y)) return new y(A);
    this.options = e.assign({
      level: h,
      method: v,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: d,
      to: ""
    }, A || {});
    var C = this.options;
    C.raw && C.windowBits > 0 ? C.windowBits = -C.windowBits : C.gzip && C.windowBits > 0 && C.windowBits < 16 && (C.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
    var E = r.deflateInit2(
      this.strm,
      C.level,
      C.method,
      C.windowBits,
      C.memLevel,
      C.strategy
    );
    if (E !== u)
      throw new Error(n[E]);
    if (C.header && r.deflateSetHeader(this.strm, C.header), C.dictionary) {
      var O;
      if (typeof C.dictionary == "string" ? O = t.string2buf(C.dictionary) : a.call(C.dictionary) === "[object ArrayBuffer]" ? O = new Uint8Array(C.dictionary) : O = C.dictionary, E = r.deflateSetDictionary(this.strm, O), E !== u)
        throw new Error(n[E]);
      this._dict_set = !0;
    }
  }
  y.prototype.push = function(A, C) {
    var E = this.strm, O = this.options.chunkSize, D, P;
    if (this.ended)
      return !1;
    P = C === ~~C ? C : C === !0 ? s : o, typeof A == "string" ? E.input = t.string2buf(A) : a.call(A) === "[object ArrayBuffer]" ? E.input = new Uint8Array(A) : E.input = A, E.next_in = 0, E.avail_in = E.input.length;
    do {
      if (E.avail_out === 0 && (E.output = new e.Buf8(O), E.next_out = 0, E.avail_out = O), D = r.deflate(E, P), D !== l && D !== u)
        return this.onEnd(D), this.ended = !0, !1;
      (E.avail_out === 0 || E.avail_in === 0 && (P === s || P === c)) && (this.options.to === "string" ? this.onData(t.buf2binstring(e.shrinkBuf(E.output, E.next_out))) : this.onData(e.shrinkBuf(E.output, E.next_out)));
    } while ((E.avail_in > 0 || E.avail_out === 0) && D !== l);
    return P === s ? (D = r.deflateEnd(this.strm), this.onEnd(D), this.ended = !0, D === u) : (P === c && (this.onEnd(u), E.avail_out = 0), !0);
  }, y.prototype.onData = function(A) {
    this.chunks.push(A);
  }, y.prototype.onEnd = function(A) {
    A === u && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = e.flattenChunks(this.chunks)), this.chunks = [], this.err = A, this.msg = this.strm.msg;
  };
  function w(A, C) {
    var E = new y(C);
    if (E.push(A, !0), E.err)
      throw E.msg || n[E.err];
    return E.result;
  }
  function F(A, C) {
    return C = C || {}, C.raw = !0, w(A, C);
  }
  function S(A, C) {
    return C = C || {}, C.gzip = !0, w(A, C);
  }
  return Lr.Deflate = y, Lr.deflate = w, Lr.deflateRaw = F, Lr.gzip = S, Lr;
}
var qr = {}, Dt = {}, Yi, io;
function Iu() {
  if (io) return Yi;
  io = 1;
  var r = 30, e = 12;
  return Yi = function(n, i) {
    var a, o, s, u, l, c, h, d, v, y, w, F, S, A, C, E, O, D, P, M, U, W, V, Z, I;
    a = n.state, o = n.next_in, Z = n.input, s = o + (n.avail_in - 5), u = n.next_out, I = n.output, l = u - (i - n.avail_out), c = u + (n.avail_out - 257), h = a.dmax, d = a.wsize, v = a.whave, y = a.wnext, w = a.window, F = a.hold, S = a.bits, A = a.lencode, C = a.distcode, E = (1 << a.lenbits) - 1, O = (1 << a.distbits) - 1;
    e:
      do {
        S < 15 && (F += Z[o++] << S, S += 8, F += Z[o++] << S, S += 8), D = A[F & E];
        t:
          for (; ; ) {
            if (P = D >>> 24, F >>>= P, S -= P, P = D >>> 16 & 255, P === 0)
              I[u++] = D & 65535;
            else if (P & 16) {
              M = D & 65535, P &= 15, P && (S < P && (F += Z[o++] << S, S += 8), M += F & (1 << P) - 1, F >>>= P, S -= P), S < 15 && (F += Z[o++] << S, S += 8, F += Z[o++] << S, S += 8), D = C[F & O];
              r:
                for (; ; ) {
                  if (P = D >>> 24, F >>>= P, S -= P, P = D >>> 16 & 255, P & 16) {
                    if (U = D & 65535, P &= 15, S < P && (F += Z[o++] << S, S += 8, S < P && (F += Z[o++] << S, S += 8)), U += F & (1 << P) - 1, U > h) {
                      n.msg = "invalid distance too far back", a.mode = r;
                      break e;
                    }
                    if (F >>>= P, S -= P, P = u - l, U > P) {
                      if (P = U - P, P > v && a.sane) {
                        n.msg = "invalid distance too far back", a.mode = r;
                        break e;
                      }
                      if (W = 0, V = w, y === 0) {
                        if (W += d - P, P < M) {
                          M -= P;
                          do
                            I[u++] = w[W++];
                          while (--P);
                          W = u - U, V = I;
                        }
                      } else if (y < P) {
                        if (W += d + y - P, P -= y, P < M) {
                          M -= P;
                          do
                            I[u++] = w[W++];
                          while (--P);
                          if (W = 0, y < M) {
                            P = y, M -= P;
                            do
                              I[u++] = w[W++];
                            while (--P);
                            W = u - U, V = I;
                          }
                        }
                      } else if (W += y - P, P < M) {
                        M -= P;
                        do
                          I[u++] = w[W++];
                        while (--P);
                        W = u - U, V = I;
                      }
                      for (; M > 2; )
                        I[u++] = V[W++], I[u++] = V[W++], I[u++] = V[W++], M -= 3;
                      M && (I[u++] = V[W++], M > 1 && (I[u++] = V[W++]));
                    } else {
                      W = u - U;
                      do
                        I[u++] = I[W++], I[u++] = I[W++], I[u++] = I[W++], M -= 3;
                      while (M > 2);
                      M && (I[u++] = I[W++], M > 1 && (I[u++] = I[W++]));
                    }
                  } else if ((P & 64) === 0) {
                    D = C[(D & 65535) + (F & (1 << P) - 1)];
                    continue r;
                  } else {
                    n.msg = "invalid distance code", a.mode = r;
                    break e;
                  }
                  break;
                }
            } else if ((P & 64) === 0) {
              D = A[(D & 65535) + (F & (1 << P) - 1)];
              continue t;
            } else if (P & 32) {
              a.mode = e;
              break e;
            } else {
              n.msg = "invalid literal/length code", a.mode = r;
              break e;
            }
            break;
          }
      } while (o < s && u < c);
    M = S >> 3, o -= M, S -= M << 3, F &= (1 << S) - 1, n.next_in = o, n.next_out = u, n.avail_in = o < s ? 5 + (s - o) : 5 - (o - s), n.avail_out = u < c ? 257 + (c - u) : 257 - (u - c), a.hold = F, a.bits = S;
  }, Yi;
}
var Qi, ao;
function ju() {
  if (ao) return Qi;
  ao = 1;
  var r = Fr(), e = 15, t = 852, n = 592, i = 0, a = 1, o = 2, s = [
    /* Length codes 257..285 base */
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
  ], u = [
    /* Length codes 257..285 extra */
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
  ], l = [
    /* Distance codes 0..29 base */
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
  ], c = [
    /* Distance codes 0..29 extra */
    16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
  ];
  return Qi = function(d, v, y, w, F, S, A, C) {
    var E = C.bits, O = 0, D = 0, P = 0, M = 0, U = 0, W = 0, V = 0, Z = 0, I = 0, J = 0, re, Y, Q, Pe, be, Xe = null, Be = 0, ze, Ue = new r.Buf16(e + 1), We = new r.Buf16(e + 1), Le = null, De = 0, je, oe, tt;
    for (O = 0; O <= e; O++)
      Ue[O] = 0;
    for (D = 0; D < w; D++)
      Ue[v[y + D]]++;
    for (U = E, M = e; M >= 1 && Ue[M] === 0; M--)
      ;
    if (U > M && (U = M), M === 0)
      return F[S++] = 1 << 24 | 64 << 16 | 0, F[S++] = 1 << 24 | 64 << 16 | 0, C.bits = 1, 0;
    for (P = 1; P < M && Ue[P] === 0; P++)
      ;
    for (U < P && (U = P), Z = 1, O = 1; O <= e; O++)
      if (Z <<= 1, Z -= Ue[O], Z < 0)
        return -1;
    if (Z > 0 && (d === i || M !== 1))
      return -1;
    for (We[1] = 0, O = 1; O < e; O++)
      We[O + 1] = We[O] + Ue[O];
    for (D = 0; D < w; D++)
      v[y + D] !== 0 && (A[We[v[y + D]]++] = D);
    if (d === i ? (Xe = Le = A, ze = 19) : d === a ? (Xe = s, Be -= 257, Le = u, De -= 257, ze = 256) : (Xe = l, Le = c, ze = -1), J = 0, D = 0, O = P, be = S, W = U, V = 0, Q = -1, I = 1 << U, Pe = I - 1, d === a && I > t || d === o && I > n)
      return 1;
    for (; ; ) {
      je = O - V, A[D] < ze ? (oe = 0, tt = A[D]) : A[D] > ze ? (oe = Le[De + A[D]], tt = Xe[Be + A[D]]) : (oe = 96, tt = 0), re = 1 << O - V, Y = 1 << W, P = Y;
      do
        Y -= re, F[be + (J >> V) + Y] = je << 24 | oe << 16 | tt | 0;
      while (Y !== 0);
      for (re = 1 << O - 1; J & re; )
        re >>= 1;
      if (re !== 0 ? (J &= re - 1, J += re) : J = 0, D++, --Ue[O] === 0) {
        if (O === M)
          break;
        O = v[y + A[D]];
      }
      if (O > U && (J & Pe) !== Q) {
        for (V === 0 && (V = U), be += P, W = O - V, Z = 1 << W; W + V < M && (Z -= Ue[W + V], !(Z <= 0)); )
          W++, Z <<= 1;
        if (I += 1 << W, d === a && I > t || d === o && I > n)
          return 1;
        Q = J & Pe, F[Q] = U << 24 | W << 16 | be - S | 0;
      }
    }
    return J !== 0 && (F[be + J] = O - V << 24 | 64 << 16 | 0), C.bits = U, 0;
  }, Qi;
}
var oo;
function Uu() {
  if (oo) return Dt;
  oo = 1;
  var r = Fr(), e = is(), t = as(), n = Iu(), i = ju(), a = 0, o = 1, s = 2, u = 4, l = 5, c = 6, h = 0, d = 1, v = 2, y = -2, w = -3, F = -4, S = -5, A = 8, C = 1, E = 2, O = 3, D = 4, P = 5, M = 6, U = 7, W = 8, V = 9, Z = 10, I = 11, J = 12, re = 13, Y = 14, Q = 15, Pe = 16, be = 17, Xe = 18, Be = 19, ze = 20, Ue = 21, We = 22, Le = 23, De = 24, je = 25, oe = 26, tt = 27, ot = 28, Ft = 29, Me = 30, pt = 31, Tr = 32, kt = 852, mt = 592, qe = 15, xe = qe;
  function Ct(T) {
    return (T >>> 24 & 255) + (T >>> 8 & 65280) + ((T & 65280) << 8) + ((T & 255) << 24);
  }
  function Br() {
    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  function ur(T) {
    var j;
    return !T || !T.state ? y : (j = T.state, T.total_in = T.total_out = j.total = 0, T.msg = "", j.wrap && (T.adler = j.wrap & 1), j.mode = C, j.last = 0, j.havedict = 0, j.dmax = 32768, j.head = null, j.hold = 0, j.bits = 0, j.lencode = j.lendyn = new r.Buf32(kt), j.distcode = j.distdyn = new r.Buf32(mt), j.sane = 1, j.back = -1, h);
  }
  function Tt(T) {
    var j;
    return !T || !T.state ? y : (j = T.state, j.wsize = 0, j.whave = 0, j.wnext = 0, ur(T));
  }
  function Mr(T, j) {
    var p, H;
    return !T || !T.state || (H = T.state, j < 0 ? (p = 0, j = -j) : (p = (j >> 4) + 1, j < 48 && (j &= 15)), j && (j < 8 || j > 15)) ? y : (H.window !== null && H.wbits !== j && (H.window = null), H.wrap = p, H.wbits = j, Tt(T));
  }
  function lr(T, j) {
    var p, H;
    return T ? (H = new Br(), T.state = H, H.window = null, p = Mr(T, j), p !== h && (T.state = null), p) : y;
  }
  function jt(T) {
    return lr(T, xe);
  }
  var Ir = !0, fr, st;
  function Kt(T) {
    if (Ir) {
      var j;
      for (fr = new r.Buf32(512), st = new r.Buf32(32), j = 0; j < 144; )
        T.lens[j++] = 8;
      for (; j < 256; )
        T.lens[j++] = 9;
      for (; j < 280; )
        T.lens[j++] = 7;
      for (; j < 288; )
        T.lens[j++] = 8;
      for (i(o, T.lens, 0, 288, fr, 0, T.work, { bits: 9 }), j = 0; j < 32; )
        T.lens[j++] = 5;
      i(s, T.lens, 0, 32, st, 0, T.work, { bits: 5 }), Ir = !1;
    }
    T.lencode = fr, T.lenbits = 9, T.distcode = st, T.distbits = 5;
  }
  function jr(T, j, p, H) {
    var ue, f = T.state;
    return f.window === null && (f.wsize = 1 << f.wbits, f.wnext = 0, f.whave = 0, f.window = new r.Buf8(f.wsize)), H >= f.wsize ? (r.arraySet(f.window, j, p - f.wsize, f.wsize, 0), f.wnext = 0, f.whave = f.wsize) : (ue = f.wsize - f.wnext, ue > H && (ue = H), r.arraySet(f.window, j, p - H, ue, f.wnext), H -= ue, H ? (r.arraySet(f.window, j, p - H, H, 0), f.wnext = H, f.whave = f.wsize) : (f.wnext += ue, f.wnext === f.wsize && (f.wnext = 0), f.whave < f.wsize && (f.whave += ue))), 0;
  }
  function m(T, j) {
    var p, H, ue, f, z, B, g, k, N, ne, _, $, Te, _t, Ke = 0, Ae, Qe, ut, gt, Wn, Vn, Ze, Pt, nt = new r.Buf8(4), $t, Gt, Ka = (
      /* permutation of code lengths */
      [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
    );
    if (!T || !T.state || !T.output || !T.input && T.avail_in !== 0)
      return y;
    p = T.state, p.mode === J && (p.mode = re), z = T.next_out, ue = T.output, g = T.avail_out, f = T.next_in, H = T.input, B = T.avail_in, k = p.hold, N = p.bits, ne = B, _ = g, Pt = h;
    e:
      for (; ; )
        switch (p.mode) {
          case C:
            if (p.wrap === 0) {
              p.mode = re;
              break;
            }
            for (; N < 16; ) {
              if (B === 0)
                break e;
              B--, k += H[f++] << N, N += 8;
            }
            if (p.wrap & 2 && k === 35615) {
              p.check = 0, nt[0] = k & 255, nt[1] = k >>> 8 & 255, p.check = t(p.check, nt, 2, 0), k = 0, N = 0, p.mode = E;
              break;
            }
            if (p.flags = 0, p.head && (p.head.done = !1), !(p.wrap & 1) || /* check if zlib header allowed */
            (((k & 255) << 8) + (k >> 8)) % 31) {
              T.msg = "incorrect header check", p.mode = Me;
              break;
            }
            if ((k & 15) !== A) {
              T.msg = "unknown compression method", p.mode = Me;
              break;
            }
            if (k >>>= 4, N -= 4, Ze = (k & 15) + 8, p.wbits === 0)
              p.wbits = Ze;
            else if (Ze > p.wbits) {
              T.msg = "invalid window size", p.mode = Me;
              break;
            }
            p.dmax = 1 << Ze, T.adler = p.check = 1, p.mode = k & 512 ? Z : J, k = 0, N = 0;
            break;
          case E:
            for (; N < 16; ) {
              if (B === 0)
                break e;
              B--, k += H[f++] << N, N += 8;
            }
            if (p.flags = k, (p.flags & 255) !== A) {
              T.msg = "unknown compression method", p.mode = Me;
              break;
            }
            if (p.flags & 57344) {
              T.msg = "unknown header flags set", p.mode = Me;
              break;
            }
            p.head && (p.head.text = k >> 8 & 1), p.flags & 512 && (nt[0] = k & 255, nt[1] = k >>> 8 & 255, p.check = t(p.check, nt, 2, 0)), k = 0, N = 0, p.mode = O;
          /* falls through */
          case O:
            for (; N < 32; ) {
              if (B === 0)
                break e;
              B--, k += H[f++] << N, N += 8;
            }
            p.head && (p.head.time = k), p.flags & 512 && (nt[0] = k & 255, nt[1] = k >>> 8 & 255, nt[2] = k >>> 16 & 255, nt[3] = k >>> 24 & 255, p.check = t(p.check, nt, 4, 0)), k = 0, N = 0, p.mode = D;
          /* falls through */
          case D:
            for (; N < 16; ) {
              if (B === 0)
                break e;
              B--, k += H[f++] << N, N += 8;
            }
            p.head && (p.head.xflags = k & 255, p.head.os = k >> 8), p.flags & 512 && (nt[0] = k & 255, nt[1] = k >>> 8 & 255, p.check = t(p.check, nt, 2, 0)), k = 0, N = 0, p.mode = P;
          /* falls through */
          case P:
            if (p.flags & 1024) {
              for (; N < 16; ) {
                if (B === 0)
                  break e;
                B--, k += H[f++] << N, N += 8;
              }
              p.length = k, p.head && (p.head.extra_len = k), p.flags & 512 && (nt[0] = k & 255, nt[1] = k >>> 8 & 255, p.check = t(p.check, nt, 2, 0)), k = 0, N = 0;
            } else p.head && (p.head.extra = null);
            p.mode = M;
          /* falls through */
          case M:
            if (p.flags & 1024 && ($ = p.length, $ > B && ($ = B), $ && (p.head && (Ze = p.head.extra_len - p.length, p.head.extra || (p.head.extra = new Array(p.head.extra_len)), r.arraySet(
              p.head.extra,
              H,
              f,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              $,
              /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
              Ze
            )), p.flags & 512 && (p.check = t(p.check, H, $, f)), B -= $, f += $, p.length -= $), p.length))
              break e;
            p.length = 0, p.mode = U;
          /* falls through */
          case U:
            if (p.flags & 2048) {
              if (B === 0)
                break e;
              $ = 0;
              do
                Ze = H[f + $++], p.head && Ze && p.length < 65536 && (p.head.name += String.fromCharCode(Ze));
              while (Ze && $ < B);
              if (p.flags & 512 && (p.check = t(p.check, H, $, f)), B -= $, f += $, Ze)
                break e;
            } else p.head && (p.head.name = null);
            p.length = 0, p.mode = W;
          /* falls through */
          case W:
            if (p.flags & 4096) {
              if (B === 0)
                break e;
              $ = 0;
              do
                Ze = H[f + $++], p.head && Ze && p.length < 65536 && (p.head.comment += String.fromCharCode(Ze));
              while (Ze && $ < B);
              if (p.flags & 512 && (p.check = t(p.check, H, $, f)), B -= $, f += $, Ze)
                break e;
            } else p.head && (p.head.comment = null);
            p.mode = V;
          /* falls through */
          case V:
            if (p.flags & 512) {
              for (; N < 16; ) {
                if (B === 0)
                  break e;
                B--, k += H[f++] << N, N += 8;
              }
              if (k !== (p.check & 65535)) {
                T.msg = "header crc mismatch", p.mode = Me;
                break;
              }
              k = 0, N = 0;
            }
            p.head && (p.head.hcrc = p.flags >> 9 & 1, p.head.done = !0), T.adler = p.check = 0, p.mode = J;
            break;
          case Z:
            for (; N < 32; ) {
              if (B === 0)
                break e;
              B--, k += H[f++] << N, N += 8;
            }
            T.adler = p.check = Ct(k), k = 0, N = 0, p.mode = I;
          /* falls through */
          case I:
            if (p.havedict === 0)
              return T.next_out = z, T.avail_out = g, T.next_in = f, T.avail_in = B, p.hold = k, p.bits = N, v;
            T.adler = p.check = 1, p.mode = J;
          /* falls through */
          case J:
            if (j === l || j === c)
              break e;
          /* falls through */
          case re:
            if (p.last) {
              k >>>= N & 7, N -= N & 7, p.mode = tt;
              break;
            }
            for (; N < 3; ) {
              if (B === 0)
                break e;
              B--, k += H[f++] << N, N += 8;
            }
            switch (p.last = k & 1, k >>>= 1, N -= 1, k & 3) {
              case 0:
                p.mode = Y;
                break;
              case 1:
                if (Kt(p), p.mode = ze, j === c) {
                  k >>>= 2, N -= 2;
                  break e;
                }
                break;
              case 2:
                p.mode = be;
                break;
              case 3:
                T.msg = "invalid block type", p.mode = Me;
            }
            k >>>= 2, N -= 2;
            break;
          case Y:
            for (k >>>= N & 7, N -= N & 7; N < 32; ) {
              if (B === 0)
                break e;
              B--, k += H[f++] << N, N += 8;
            }
            if ((k & 65535) !== (k >>> 16 ^ 65535)) {
              T.msg = "invalid stored block lengths", p.mode = Me;
              break;
            }
            if (p.length = k & 65535, k = 0, N = 0, p.mode = Q, j === c)
              break e;
          /* falls through */
          case Q:
            p.mode = Pe;
          /* falls through */
          case Pe:
            if ($ = p.length, $) {
              if ($ > B && ($ = B), $ > g && ($ = g), $ === 0)
                break e;
              r.arraySet(ue, H, f, $, z), B -= $, f += $, g -= $, z += $, p.length -= $;
              break;
            }
            p.mode = J;
            break;
          case be:
            for (; N < 14; ) {
              if (B === 0)
                break e;
              B--, k += H[f++] << N, N += 8;
            }
            if (p.nlen = (k & 31) + 257, k >>>= 5, N -= 5, p.ndist = (k & 31) + 1, k >>>= 5, N -= 5, p.ncode = (k & 15) + 4, k >>>= 4, N -= 4, p.nlen > 286 || p.ndist > 30) {
              T.msg = "too many length or distance symbols", p.mode = Me;
              break;
            }
            p.have = 0, p.mode = Xe;
          /* falls through */
          case Xe:
            for (; p.have < p.ncode; ) {
              for (; N < 3; ) {
                if (B === 0)
                  break e;
                B--, k += H[f++] << N, N += 8;
              }
              p.lens[Ka[p.have++]] = k & 7, k >>>= 3, N -= 3;
            }
            for (; p.have < 19; )
              p.lens[Ka[p.have++]] = 0;
            if (p.lencode = p.lendyn, p.lenbits = 7, $t = { bits: p.lenbits }, Pt = i(a, p.lens, 0, 19, p.lencode, 0, p.work, $t), p.lenbits = $t.bits, Pt) {
              T.msg = "invalid code lengths set", p.mode = Me;
              break;
            }
            p.have = 0, p.mode = Be;
          /* falls through */
          case Be:
            for (; p.have < p.nlen + p.ndist; ) {
              for (; Ke = p.lencode[k & (1 << p.lenbits) - 1], Ae = Ke >>> 24, Qe = Ke >>> 16 & 255, ut = Ke & 65535, !(Ae <= N); ) {
                if (B === 0)
                  break e;
                B--, k += H[f++] << N, N += 8;
              }
              if (ut < 16)
                k >>>= Ae, N -= Ae, p.lens[p.have++] = ut;
              else {
                if (ut === 16) {
                  for (Gt = Ae + 2; N < Gt; ) {
                    if (B === 0)
                      break e;
                    B--, k += H[f++] << N, N += 8;
                  }
                  if (k >>>= Ae, N -= Ae, p.have === 0) {
                    T.msg = "invalid bit length repeat", p.mode = Me;
                    break;
                  }
                  Ze = p.lens[p.have - 1], $ = 3 + (k & 3), k >>>= 2, N -= 2;
                } else if (ut === 17) {
                  for (Gt = Ae + 3; N < Gt; ) {
                    if (B === 0)
                      break e;
                    B--, k += H[f++] << N, N += 8;
                  }
                  k >>>= Ae, N -= Ae, Ze = 0, $ = 3 + (k & 7), k >>>= 3, N -= 3;
                } else {
                  for (Gt = Ae + 7; N < Gt; ) {
                    if (B === 0)
                      break e;
                    B--, k += H[f++] << N, N += 8;
                  }
                  k >>>= Ae, N -= Ae, Ze = 0, $ = 11 + (k & 127), k >>>= 7, N -= 7;
                }
                if (p.have + $ > p.nlen + p.ndist) {
                  T.msg = "invalid bit length repeat", p.mode = Me;
                  break;
                }
                for (; $--; )
                  p.lens[p.have++] = Ze;
              }
            }
            if (p.mode === Me)
              break;
            if (p.lens[256] === 0) {
              T.msg = "invalid code -- missing end-of-block", p.mode = Me;
              break;
            }
            if (p.lenbits = 9, $t = { bits: p.lenbits }, Pt = i(o, p.lens, 0, p.nlen, p.lencode, 0, p.work, $t), p.lenbits = $t.bits, Pt) {
              T.msg = "invalid literal/lengths set", p.mode = Me;
              break;
            }
            if (p.distbits = 6, p.distcode = p.distdyn, $t = { bits: p.distbits }, Pt = i(s, p.lens, p.nlen, p.ndist, p.distcode, 0, p.work, $t), p.distbits = $t.bits, Pt) {
              T.msg = "invalid distances set", p.mode = Me;
              break;
            }
            if (p.mode = ze, j === c)
              break e;
          /* falls through */
          case ze:
            p.mode = Ue;
          /* falls through */
          case Ue:
            if (B >= 6 && g >= 258) {
              T.next_out = z, T.avail_out = g, T.next_in = f, T.avail_in = B, p.hold = k, p.bits = N, n(T, _), z = T.next_out, ue = T.output, g = T.avail_out, f = T.next_in, H = T.input, B = T.avail_in, k = p.hold, N = p.bits, p.mode === J && (p.back = -1);
              break;
            }
            for (p.back = 0; Ke = p.lencode[k & (1 << p.lenbits) - 1], Ae = Ke >>> 24, Qe = Ke >>> 16 & 255, ut = Ke & 65535, !(Ae <= N); ) {
              if (B === 0)
                break e;
              B--, k += H[f++] << N, N += 8;
            }
            if (Qe && (Qe & 240) === 0) {
              for (gt = Ae, Wn = Qe, Vn = ut; Ke = p.lencode[Vn + ((k & (1 << gt + Wn) - 1) >> gt)], Ae = Ke >>> 24, Qe = Ke >>> 16 & 255, ut = Ke & 65535, !(gt + Ae <= N); ) {
                if (B === 0)
                  break e;
                B--, k += H[f++] << N, N += 8;
              }
              k >>>= gt, N -= gt, p.back += gt;
            }
            if (k >>>= Ae, N -= Ae, p.back += Ae, p.length = ut, Qe === 0) {
              p.mode = oe;
              break;
            }
            if (Qe & 32) {
              p.back = -1, p.mode = J;
              break;
            }
            if (Qe & 64) {
              T.msg = "invalid literal/length code", p.mode = Me;
              break;
            }
            p.extra = Qe & 15, p.mode = We;
          /* falls through */
          case We:
            if (p.extra) {
              for (Gt = p.extra; N < Gt; ) {
                if (B === 0)
                  break e;
                B--, k += H[f++] << N, N += 8;
              }
              p.length += k & (1 << p.extra) - 1, k >>>= p.extra, N -= p.extra, p.back += p.extra;
            }
            p.was = p.length, p.mode = Le;
          /* falls through */
          case Le:
            for (; Ke = p.distcode[k & (1 << p.distbits) - 1], Ae = Ke >>> 24, Qe = Ke >>> 16 & 255, ut = Ke & 65535, !(Ae <= N); ) {
              if (B === 0)
                break e;
              B--, k += H[f++] << N, N += 8;
            }
            if ((Qe & 240) === 0) {
              for (gt = Ae, Wn = Qe, Vn = ut; Ke = p.distcode[Vn + ((k & (1 << gt + Wn) - 1) >> gt)], Ae = Ke >>> 24, Qe = Ke >>> 16 & 255, ut = Ke & 65535, !(gt + Ae <= N); ) {
                if (B === 0)
                  break e;
                B--, k += H[f++] << N, N += 8;
              }
              k >>>= gt, N -= gt, p.back += gt;
            }
            if (k >>>= Ae, N -= Ae, p.back += Ae, Qe & 64) {
              T.msg = "invalid distance code", p.mode = Me;
              break;
            }
            p.offset = ut, p.extra = Qe & 15, p.mode = De;
          /* falls through */
          case De:
            if (p.extra) {
              for (Gt = p.extra; N < Gt; ) {
                if (B === 0)
                  break e;
                B--, k += H[f++] << N, N += 8;
              }
              p.offset += k & (1 << p.extra) - 1, k >>>= p.extra, N -= p.extra, p.back += p.extra;
            }
            if (p.offset > p.dmax) {
              T.msg = "invalid distance too far back", p.mode = Me;
              break;
            }
            p.mode = je;
          /* falls through */
          case je:
            if (g === 0)
              break e;
            if ($ = _ - g, p.offset > $) {
              if ($ = p.offset - $, $ > p.whave && p.sane) {
                T.msg = "invalid distance too far back", p.mode = Me;
                break;
              }
              $ > p.wnext ? ($ -= p.wnext, Te = p.wsize - $) : Te = p.wnext - $, $ > p.length && ($ = p.length), _t = p.window;
            } else
              _t = ue, Te = z - p.offset, $ = p.length;
            $ > g && ($ = g), g -= $, p.length -= $;
            do
              ue[z++] = _t[Te++];
            while (--$);
            p.length === 0 && (p.mode = Ue);
            break;
          case oe:
            if (g === 0)
              break e;
            ue[z++] = p.length, g--, p.mode = Ue;
            break;
          case tt:
            if (p.wrap) {
              for (; N < 32; ) {
                if (B === 0)
                  break e;
                B--, k |= H[f++] << N, N += 8;
              }
              if (_ -= g, T.total_out += _, p.total += _, _ && (T.adler = p.check = /*UPDATE(state.check, put - _out, _out);*/
              p.flags ? t(p.check, ue, _, z - _) : e(p.check, ue, _, z - _)), _ = g, (p.flags ? k : Ct(k)) !== p.check) {
                T.msg = "incorrect data check", p.mode = Me;
                break;
              }
              k = 0, N = 0;
            }
            p.mode = ot;
          /* falls through */
          case ot:
            if (p.wrap && p.flags) {
              for (; N < 32; ) {
                if (B === 0)
                  break e;
                B--, k += H[f++] << N, N += 8;
              }
              if (k !== (p.total & 4294967295)) {
                T.msg = "incorrect length check", p.mode = Me;
                break;
              }
              k = 0, N = 0;
            }
            p.mode = Ft;
          /* falls through */
          case Ft:
            Pt = d;
            break e;
          case Me:
            Pt = w;
            break e;
          case pt:
            return F;
          case Tr:
          /* falls through */
          default:
            return y;
        }
    return T.next_out = z, T.avail_out = g, T.next_in = f, T.avail_in = B, p.hold = k, p.bits = N, (p.wsize || _ !== T.avail_out && p.mode < Me && (p.mode < tt || j !== u)) && jr(T, T.output, T.next_out, _ - T.avail_out), ne -= T.avail_in, _ -= T.avail_out, T.total_in += ne, T.total_out += _, p.total += _, p.wrap && _ && (T.adler = p.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
    p.flags ? t(p.check, ue, _, T.next_out - _) : e(p.check, ue, _, T.next_out - _)), T.data_type = p.bits + (p.last ? 64 : 0) + (p.mode === J ? 128 : 0) + (p.mode === ze || p.mode === Q ? 256 : 0), (ne === 0 && _ === 0 || j === u) && Pt === h && (Pt = S), Pt;
  }
  function q(T) {
    if (!T || !T.state)
      return y;
    var j = T.state;
    return j.window && (j.window = null), T.state = null, h;
  }
  function G(T, j) {
    var p;
    return !T || !T.state || (p = T.state, (p.wrap & 2) === 0) ? y : (p.head = j, j.done = !1, h);
  }
  function ee(T, j) {
    var p = j.length, H, ue, f;
    return !T || !T.state || (H = T.state, H.wrap !== 0 && H.mode !== I) ? y : H.mode === I && (ue = 1, ue = e(ue, j, p, 0), ue !== H.check) ? w : (f = jr(T, j, p, p), f ? (H.mode = pt, F) : (H.havedict = 1, h));
  }
  return Dt.inflateReset = Tt, Dt.inflateReset2 = Mr, Dt.inflateResetKeep = ur, Dt.inflateInit = jt, Dt.inflateInit2 = lr, Dt.inflate = m, Dt.inflateEnd = q, Dt.inflateGetHeader = G, Dt.inflateSetDictionary = ee, Dt.inflateInfo = "pako inflate (from Nodeca project)", Dt;
}
var Ji, so;
function us() {
  return so || (so = 1, Ji = {
    /* Allowed flush values; see deflate() and inflate() below for details */
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    /* Return codes for the compression/decompression functions. Negative values
    * are errors, positive values are used for special but normal events.
    */
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    //Z_MEM_ERROR:     -4,
    Z_BUF_ERROR: -5,
    //Z_VERSION_ERROR: -6,
    /* compression levels */
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    /* Possible values of the data_type field (though see inflate()) */
    Z_BINARY: 0,
    Z_TEXT: 1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN: 2,
    /* The deflate compression method */
    Z_DEFLATED: 8
    //Z_NULL:                 null // Use -1 or null inline, depending on var type
  }), Ji;
}
var _i, uo;
function Wu() {
  if (uo) return _i;
  uo = 1;
  function r() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
  }
  return _i = r, _i;
}
var lo;
function Vu() {
  if (lo) return qr;
  lo = 1;
  var r = Uu(), e = Fr(), t = os(), n = us(), i = Sa(), a = ss(), o = Wu(), s = Object.prototype.toString;
  function u(h) {
    if (!(this instanceof u)) return new u(h);
    this.options = e.assign({
      chunkSize: 16384,
      windowBits: 0,
      to: ""
    }, h || {});
    var d = this.options;
    d.raw && d.windowBits >= 0 && d.windowBits < 16 && (d.windowBits = -d.windowBits, d.windowBits === 0 && (d.windowBits = -15)), d.windowBits >= 0 && d.windowBits < 16 && !(h && h.windowBits) && (d.windowBits += 32), d.windowBits > 15 && d.windowBits < 48 && (d.windowBits & 15) === 0 && (d.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new a(), this.strm.avail_out = 0;
    var v = r.inflateInit2(
      this.strm,
      d.windowBits
    );
    if (v !== n.Z_OK)
      throw new Error(i[v]);
    if (this.header = new o(), r.inflateGetHeader(this.strm, this.header), d.dictionary && (typeof d.dictionary == "string" ? d.dictionary = t.string2buf(d.dictionary) : s.call(d.dictionary) === "[object ArrayBuffer]" && (d.dictionary = new Uint8Array(d.dictionary)), d.raw && (v = r.inflateSetDictionary(this.strm, d.dictionary), v !== n.Z_OK)))
      throw new Error(i[v]);
  }
  u.prototype.push = function(h, d) {
    var v = this.strm, y = this.options.chunkSize, w = this.options.dictionary, F, S, A, C, E, O = !1;
    if (this.ended)
      return !1;
    S = d === ~~d ? d : d === !0 ? n.Z_FINISH : n.Z_NO_FLUSH, typeof h == "string" ? v.input = t.binstring2buf(h) : s.call(h) === "[object ArrayBuffer]" ? v.input = new Uint8Array(h) : v.input = h, v.next_in = 0, v.avail_in = v.input.length;
    do {
      if (v.avail_out === 0 && (v.output = new e.Buf8(y), v.next_out = 0, v.avail_out = y), F = r.inflate(v, n.Z_NO_FLUSH), F === n.Z_NEED_DICT && w && (F = r.inflateSetDictionary(this.strm, w)), F === n.Z_BUF_ERROR && O === !0 && (F = n.Z_OK, O = !1), F !== n.Z_STREAM_END && F !== n.Z_OK)
        return this.onEnd(F), this.ended = !0, !1;
      v.next_out && (v.avail_out === 0 || F === n.Z_STREAM_END || v.avail_in === 0 && (S === n.Z_FINISH || S === n.Z_SYNC_FLUSH)) && (this.options.to === "string" ? (A = t.utf8border(v.output, v.next_out), C = v.next_out - A, E = t.buf2string(v.output, A), v.next_out = C, v.avail_out = y - C, C && e.arraySet(v.output, v.output, A, C, 0), this.onData(E)) : this.onData(e.shrinkBuf(v.output, v.next_out))), v.avail_in === 0 && v.avail_out === 0 && (O = !0);
    } while ((v.avail_in > 0 || v.avail_out === 0) && F !== n.Z_STREAM_END);
    return F === n.Z_STREAM_END && (S = n.Z_FINISH), S === n.Z_FINISH ? (F = r.inflateEnd(this.strm), this.onEnd(F), this.ended = !0, F === n.Z_OK) : (S === n.Z_SYNC_FLUSH && (this.onEnd(n.Z_OK), v.avail_out = 0), !0);
  }, u.prototype.onData = function(h) {
    this.chunks.push(h);
  }, u.prototype.onEnd = function(h) {
    h === n.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = e.flattenChunks(this.chunks)), this.chunks = [], this.err = h, this.msg = this.strm.msg;
  };
  function l(h, d) {
    var v = new u(d);
    if (v.push(h, !0), v.err)
      throw v.msg || i[v.err];
    return v.result;
  }
  function c(h, d) {
    return d = d || {}, d.raw = !0, l(h, d);
  }
  return qr.Inflate = u, qr.inflate = l, qr.inflateRaw = c, qr.ungzip = l, qr;
}
var $i, fo;
function Lu() {
  if (fo) return $i;
  fo = 1;
  var r = Fr().assign, e = Mu(), t = Vu(), n = us(), i = {};
  return r(i, e, t, n), $i = i, $i;
}
var qu = Lu();
const Si = /* @__PURE__ */ Nu(qu);
var co = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", vn = new Uint8Array(256);
for (var qn = 0; qn < co.length; qn++)
  vn[co.charCodeAt(qn)] = qn;
var Hu = function(r) {
  var e = r.length * 0.75, t = r.length, n, i = 0, a, o, s, u;
  r[r.length - 1] === "=" && (e--, r[r.length - 2] === "=" && e--);
  var l = new Uint8Array(e);
  for (n = 0; n < t; n += 4)
    a = vn[r.charCodeAt(n)], o = vn[r.charCodeAt(n + 1)], s = vn[r.charCodeAt(n + 2)], u = vn[r.charCodeAt(n + 3)], l[i++] = a << 2 | o >> 4, l[i++] = (o & 15) << 4 | s >> 2, l[i++] = (s & 3) << 6 | u & 63;
  return l;
}, Ku = function(r) {
  for (var e = "", t = 0; t < r.length; t++)
    e += String.fromCharCode(r[t]);
  return e;
}, ls = function(r) {
  return Ku(Si.inflate(Hu(r)));
}, Gu = function(r, e, t) {
  for (var n = "", i = 0, a = e - r.length; i < a; i++)
    n += t;
  return n + r;
};
const Xu = "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", Zu = "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", Yu = "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", Qu = "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", Ju = /* @__PURE__ */ JSON.parse('"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"'), _u = /* @__PURE__ */ JSON.parse('"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"'), $u = /* @__PURE__ */ JSON.parse('"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"'), el = /* @__PURE__ */ JSON.parse('"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"'), tl = /* @__PURE__ */ JSON.parse('"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"'), rl = /* @__PURE__ */ JSON.parse('"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"'), nl = /* @__PURE__ */ JSON.parse('"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"'), il = /* @__PURE__ */ JSON.parse('"eJyFnVtzG0mOhf+Kgk+7Ee5ZSdbN/aa+ebzuMdvupmjORD9QUlnmmmJpSMoSZ2L++9YNwMEBkn5xuL6TdUkkgLxUFvXv0Y/1/X212o6+H1397XEzv6sOTl6+Onx1cHry6uXJ6MXol3q1fTe/r5oCfyzuq813H+r7+aoVHpdLFA5UmN8vljuUGjitFnef27tIqTfb+XJxc7m6WzbFDpvjzS+L5+r2t8X25vPo++36sXox+vHzfD2/2Vbr36v21J+ft9XqtrrVGzWP9sMP9fPo+398d3R28eK746OLF0eHh4cvLl5d/PliNGkKr5eLVfVbvVlsF/Vq9P13jQzCH58XN19W1WYz+v604VfVetMVGx0eHv+luVBzk3f1dnHT1uTH+mG3bitx8F83/31w9Ori9EX773n376v231eH3b8vu3/PDy5v6+vq4PfdZlvdbw7erG7q9UO9nm+r278cHFwulwcf2qs1dqs21fprQ3szLjYH84Pten5b3c/XXw7qTwe/Llb1dvdQfffXqjnr8vXBfHX7P/X6YNGcvHm83ixuF/P1otr8pXncn5vb3C5Wd7/ffK66Buie4vdtc8p8fStqU/DH+cNfhzY5Ozt+MfooRyetJS43N62p14148fLF6KdKjxsjn78Y/b69/et09P3xRfffq+a/Fyd9e/2t2q4XN41B//Hv0fRjU6S93LvmQTYP88aO/3nR45cvX/a4er5Zzu+Vnxxe9Pyfj3VjqeulKqeHw4VWj/fXbUPdraJ2Wy+X87XyC7nLQ7W+ab1chPPz4Tbz+0baNNaJT9Y9QdfiUXuYr6vVsvpUkvxp+njzTXvFzRdTzk6Gs5aPG6Vqs5smOOfxFp93D5+rVSzeVGVRW02OpZKb5XzzOT7Nv6p1HWm9qiLcPiUlt5/XVVL2U/24Tujia1J2s3hOYPW1Stq2ym26WsADa5Vv6mW9SixR3S+8pC2wbNNAoNU/H+fLiO/WVRPIVs2TkxNxmmrTpRpRXh0fDW0P3nd83LNLRWdn5z36IaIf44k/Wamj4fo/21OenvXol3ji64j+Gh3sjaEmtXXof+OJb+ND/GqhJyf+LZ74LqJxfPrfYqn30Tgf4om/x+f6I15rEtGVtZq05zSW+hjRLN7x79Gq101n9qXaurShnnndaD5O+TyfU07OXklOuVksbhbrm0fLohocj23S3jQ9T5J5u/zmHka9eB6vdB1L3ST5N5ZK7vwpnngX0edopEVE/xdP/BJLWQhr5k+slSSdJO09RPTPWEfLDRpCm/hcST57jOhr9LinWCrJpLvYHP8ydHFo/uUd4VhbHTpTX556uJMj8MbtYnlb7Opv66fEzq53tp5g243TzDmOJOw/tQNDzLNW56zv+LSs14uEb6rCVW4e1003fmMGPJLad2GzWXQD1yT996MWZ01z8sdFo9zX23zk0Mrdhb8hk+kl7X1aJCwZPzUDuXQ4cDu/u6uSnrvnOBSjAUfbdtW6gtg/tbHQ/G49f4CkJqdeN9OHKqmlmfd6vtlj4f1qYfylDeD1bs7Q22a5XDxsFptEauq6/Vw/urFi6Padc1vLredfk3iY3zxuE9zn8k/L6jlqhci6n9+s6+TG1+squ/FtvZ3fuIgzadG0JBrAEhrGoT1sdduYNBujPq7u5uvH++X8MblNfdcMM78kl5tjPaBd7p3P6uDi0kY9x+eDz9fr20/NMM+NC22A4vtYG394rjcY2w1eHh3qDe6bPPe4dHeQzDRPRqO3bchvNkn3tSyMzevCc9bJILqJzmZC3Hh90mpvQoNax+z9zzp/7zXWMaVNapfzbWdjo/AEOoq+XXxdgDvbKf7JbLichIY9duGkSXKSdRYUg9pVdzMvChKoaryk3c8FiuFyQ8wpGuwc/3TWEnSCzQHCTWzG0GQImIL4KSZV9PxMxWHNI7kV5RwbFXo/sFrmdnmXPYCFR8lHfUq1cX52NZtIla7m0yqYMyZK8xBXTeCUEW3wSnc/H+6yrP9Vre6STPKhEFGvs0qac+wNkn2ee1nqRtaFJr3hutrsJ1pOxyR/fK7XSa3GdHczA0WBTvOIX0iyLZhtQjcwi/muzS1vbB67Mc46eV7vgmbFEqe0Kknw/nG5XTwsd8lz+QqCk/vmkI6vGW1tF/Pl7eJTMsHalVPDO38fc9jEWSw29rrZnl6nLN0U0t2qlAapQSGnzFM/fkMXwsW3ZsCAK3A6AVrXX6oVToM0Oa6ru8XGD3wtRAsjrzcxLs50LvLYRLWbjZixCyPIdcEyNceSxmXBpf7uLXZ68kpGrt06l18F01r+vLURiiXZYgJcZnnr5fHgvdtCkqmKvWNJuCwNH/Z4pTewzZZLoVG697jUIqWuh3Ou9iOlO5fjeLx3WMI9powLquU2We7ZuiRtOfGp3pMR40hPzrt/TGrin8hMlY4zLRbI9DZP9SOc81PM440DrxtHhkfTbiRMYaRtloWO5G06yNAZhm+4V7JuoK90spxYnpC9KYT+m1KI/0pPLWZojPZ5voSeQWK8nZnQMrc2xb6x88qPmszTvtF+hUioSt3znc+lWKGhVbNG9fnMeDbcVQfOZzjqYE2WyF541BRalgnn+XiDks2pZvPbxU2WZ38q9GfrvbV559vHHpdGuzbc3OvWe+91WfCFy2KOzmcDY38dy8NJv2kjkUJvX0oUX9Lxs47H3EDArrY3FPwj2PLu3jst67u2vVd1Moqvy7n0MUoSys2lCpF8t3fOUEFHbjYvuO8q7cbh9WHoISzll2L858f2VeSfL0Zvq/Xqt/li3b5A/sfosn1RPXrx3cnhny+Goz57ONQ/p0dDTkf42h/1WcUhrBgK4+bo9FSP5BEAgXM4rk3laB//DrnM45TBZI71i0MO9YGD6L07+qM5Ojo60kMxmmOu/qBM3KUm0QCTggEmqQEm0QCTogEmiQFk6OdYl1GQXLWVeKmH0+bwlbbprBUPVZxJnZDBwwOGfQHOSF+bw/MTOXpq73YsRzt/JDcDBPca6FAIA0ARRYFyCgXjHA+ivE4QRYbyNDxEhRhRRH6iPHMWFaPHqERuozz3HZXZgVSgMFJOsST8fUQYVco4tExI40vkSbw8R5ryfRZMYk6lggUL0adyyYIhDlXwwSgYI1IYhKUgjE1lHKAqJFEqWhqqIkK8CoKgFbRLEIWv8hjDQyhhDCuiGFZOMWycY1iU1wmiGFaexrCoEMOKyAOVZx6oYvRAlcgDleceqDJ7oAoUw8ophoW/jwhjWBnHsAlpDIs8iZfnGFa+z4JJDKtUsGAhhlUuWTDEsAo+hgVjDAuDGBaEMayMY1iFJIZFS2NYRIhhQRDDgnYJohhWHmMY2wkD2XOKZi9SSJPIce3k1yVOEe7FNMxdEYh1z8ldvZj5rC8RHdfr5L1ezF3Yl2E/9iqlAy9STnDi+wLH7OAFThGkpnnClZkUbskZw4vfbIIkd3h9XxMUsogvs7cJQj7xqk8qTsPM4gRIL45jjvECJxqvJtnGFUhTjisBecdxSD6O70qc0pAXYy4ygpkIKeUhlCgLOYlzEIivc0r5B6U0+0AByD1Iye1Rypwe9ejyqJLDo5S7O5ZgZ0eNsg1KlGtAep9SzDOIOcs4Lc0xUGKS3orzC0rfMHSSW1AtG7qQV7DEHkOHnIKazyigYD4BDNkEKOYSxJxJUEvyCMhpFgEdcghQyCBAdzml7IFSzB1D42DiUERZQzmlDOOcL0R5nSDKFMrTNCEq5AhF5LfKM6dVMXqsSuSuynNfVZkdVQVKB8opFwh/HxFmAWWcAkxI41/kSbw8R77yfRZMYl6lggUL0a5yyYIhzlXwQS4YI1wYhLcgjG1lHNgqJFEtWhrSIkI8C4JgFrRLEIWx8hjDYjgMYmMUxSZQGIPAcazS64xRJJuQhrLKEMvGyBVNyHzR1OiMppE3mpC7o+nsj6ZQSJtAMa3C+4RhVBvksAYljWvVJ8ktOLJN2GvOJLZNK5mzEN2mF80Z4tsUH+DKMcIVQogrwxg3yEFuShLlKqZhrirEuTIIdGW7jFGomxBjXWyFsW6MYt0EinUQONZVep0xinUT0lhXGWLdGDmnCZlzmhqd0zRyThNy5zSdndMUinUTKNZVeJ8wjHWDHOugpLGu+iS5Bce6CXvNmcS6aSVzFmLd9KI5Q6yb4mNdOca6Qoh1ZRjrBjnWTUliXcU01lWFWFfWxvopheguY9pMLGBD9Np6+CjbAkoIxblginLFHOOD8DoSim/BaXQPIsS2EHJFwZkjihbdUBRyQsG5C4rKDiicolkwxfKA3weCcSyIo1h5GsODOgmX5vgVvMdoSeyKkhutELeiFowWYla4j9iBYrwOCKJ1IBirgjhShSdxOkhplA4axOhAoDceyC4S6okFx3548BgMTkUUncopPI1zfIryOkEUocrTEBUVYlQR+ZvyzOFUjB6nErmc8tznVGanU4FCVTnFqvD3EWG0KuNwNSGNV5En8fIcscr3WTCJWZUKFixErcolC4a4VcEHrmCMXGEQuoIwdpVx8KqQRK9oafiKCPErCAJY0C5BFMLKQwz/0NDL5qivcnck5wKSeAPk2hc43AGotCogbTFg2ljAhnYCIs5vaNJZVo+sIRS5xwXumkapPC4g8j9QtCLAtCLAhor05KfB7id25DPmT2h3QK4iwKEiQKUigPRxgenjAhseF4jY3dCVO2rj5KUezTS4fsLgABSywLCb11lGEZlHOdlIeWYoFaO1VCKTKWe7qcDGU8FbUDGZUfhVRGBQQbNoLDat8sS+3XcA3r6C2L7C2b7CU/uKmNhXJLav8GBfEYJ9RSD7Cmb7DvwqIrTvgGbRWMG+woN9fxlM2+fsX9CqgMSggJwtgcMdgIoFAanxgKndgA0mAyLWMtSOwY60PnNNpoakBoB8fjWO+dWo5ldDlkWNWRY1JlnUiNTAUP/jUC++uzgUUju9jnWqCxWo0wrUsQI1dxCmJFWrZWAHKNZj+NUqqcj/Du51ZkdSEUDSOIBc3YBD3YBK3QBpDYBp4wAbGgeIVKpHb0f9MPylHelow5AfWhjHoYVRHVoYoqYAxQYdxqQpAOkIQ1F7dHyqR/LUgGRMjQgrAhwqglQ/5HBY6gdIawFMm8NYrWOkt+j0gJJB3FtyeqB+EPc2cXpQaHj3Fp0ekB/LtehRQ6A78qHaoSRUOx5CtaM+VDuUhmqnUKh2jLJQx1wWasnOWX4X/WMXG91NtjAuSKAQITWLFioSA4cKUAyRmocTFeLIIpmCjFSKN69WJYtxFJJKAclqEptU5FstlkUslaDgJZXjmGQOaS9DdJNAgU5qFvNUJIY/FaBMQGqeFKgQ5weSKVWQSlnDq5BASKBcQmqWVqhIzDBUgJINqXneoUKcgkjmbESyT0xe3JVcidMVqSEOfh3160r9EkJ3JMGGyK0lmdAtsRweyuFUB5+/jmRhRUVYUzHm5uyK3UqK3a17/6BPvfNj+V+pegPFb1iGK4VPWALPauu+7hgeFb/uGOrtv+7wxYIF8q87vJbZAj/boHqyVbLPNgZJJpfZHUTbxeJ8B+XJHZzzQROQQA3BatYcvgw2ilegabwwK54SmonkpLF8idSgIXxTGwXjFsN3KDAkVzSuIjKr8cygoqIphYERBc2SYsFwKiQmEy0zlmi7WE82kPJgmncjXA7tjnxv2iG/HNqhpFfteOhKO+r7zw5Rf9gxWg7tmFsO7YjvDN9J8F4miOqinCqkPKuVirFqKlH9lHMlVeCaquCrq5jqjOuGjKjOYd2QeVbnbN2QJapzXDdkgevM64aMuc4uyi+LAtffq2wFr6a28EUSi/gCbBevBut4OdjIy2QpL5K95B3IZYLIRsrJOsozu6gYLaIS2UI5W0EFrr8KvuaKfZ3HrrrjWNNxrOS4UL9xWrVxrNU4qdA4qcs4VGOc16DtpfqF2zF2UIiS177joVs61aOpu+pHV3LmStqKryHsKnoaE+24kGjHhUQ73pdox+VEOy4k2nEp0Y5LiXacJ9pxIdEqhzYJI+PAs9bBkTHZcxpv9zGeOIsncrNlI+VBcl8TQQN6Tq3oRWpKL2bt6UvERvU6tawXuXm9ym3sVd/QXqPWDp/7nSTW43bf97FfVuSq0CrTwnN8LFxnVrgOe0Xxg7dBh09FwDGQklugRE6BUuYSqEeHQJXcASV2BtTYFVDzjoAKuQF9i3US7MQuUP4SKxa4Si0/Te/+Mb3CLL0CN3vh66RBlQ8LoMUVUXMrp7ZWnjW0irGVVaImVs7tqwI3rgq+ZRVTs+KXNSfeDNyghe9qSL2K9pzG232MJ87iidx82Tcog+RX1bAJWaGWZJkalOWsXblMbF4uQa3MMjc269zmrPumZ5U8gGRwBFbIH4KcuQUVuiq22LT4RB+LV5sVr8aew3J0IP3UAFzHGDmNCeQuJmSOYmp0EdPIOUxgtzCFHcIU7wrGyQnctzgnZBFu+NKXOCxfJdadJvf8mJw7S87lRk2/Vhk0Wd2B1lREjamc2lJ51pQqxpZUiRpSObejCtyMKvhWVEyNiCt6J94M3ISFFT1Sr6I9p/F2H+OJs3giN162wjdIcZI+LkzSx4VJ+njfJH1cnqSPC5P0cWmSPi5N0sf5JH1cmqTjTt0TbwZuu8I+XVKvoj2n8XYf44mzeCK3XbantZd+G5qtX479DVsMkDQWINdOwMNe1d+wdQBpwwDTNgE2NAcQaQlDtvmpO/JvDDvkNz91KHlz2PHwurCj/h1hh+idX8foRV/H3Nu9jvhNQy2SzU/DZuIW6T6igb0f4ZbZ7shvme1QsmW242HLbEf9ltkOpVtmO4W2zHaMtsx2zG2Z/TDqN0mc2JHfs9ihZFtix8OOxI76zYgdoqcGhXYodkzeUwPy+w8/DJF9ZkcS1IhcPJswcdeZxPpOCvWdpPWdxPpyK4GS1HdCmzE/QCsZaRPQhR61uad/u/JhyDFndqQb2AzhrrSeykIOtL4iMonyzC4qRuOoRBZSnptJZbaVCuQgyslLcGHtjBD5S2FhjdRJvDa7j/J9tkocSaWCrQoupXLJVsG5VPAehmuHFx6Br+FCIfkRe122UDhI8vYFXE8RmVN5Zk4VozlVInMqz82pMptTBXI95eR6wsH1FJHrGc9cT9RJvDa7nvJ9tkpcT6WCrQqup3LJVsH1VPCuh5v1LzwC18PN+uRH7HrZZn2RwvZAeYh8e2CupgYubg/MC7Cx924PzAsFw+fbA3OVHTbsEDlLBXbefTtE0jKT0j2DO3v12zbPXNsX2Gvzkpv7QvttHl3ey+T4YevMRSZgEISdM6lfh4Ao7pvpC/wxGqYZL/VIpxmGdJphyE8zjOM0w6hOMwzZNMOYTTOMyTTDiE4zFLXRfHShRzr6NuRH38Zx9G1UR9+GePRtio2+jen3CIZ0aqHIvqnojuSpAYndAbmKAA8R0FHv9h0iN+6Y2h0uONgdiM8bLer/wrVMWXvST5f6rUotac84V103GQOSxILIfcFjPGy97ilsHIbC+mGPIdpW3TH7sEfZ8HfPZSbbosVIpvzdkV896RCtW7SsdgasYwvXhebEPcNApUaAyC9B0boCE78EJK1qSOe31ohrV611rP1aGhGR6xJMsL+NLtmtpe0+4xM70i7BkO8HjKPrG1XXN8Rp3hQLCmOW0I1JFlfy5Cy380exvXexXXGz1ZDRwmYr5pSP881WLMbMHDZbMeccHTdbseCzddhsRRzydpgGMM8yeDYNYIlyeWkawDJn9TANYE75Xfg8tjRneuWU7pVnSULFmPhVouyvnLsAFbgfUMF3BoqpRxBO3YJh1zcIhhStiHoJ5dRVGI9f7ZgYOw2TYs+hGnUfyrkPUYE7EhG4NxEOXYoiyqzKuXMRoY6twt2M8n1ulHQ4KlGvozzvelTm/kcF6oSUU08knLsj4etoDe6YlFPvZDzrokRN+imRoLNSRD2W8qzbUjH2XSpRB6Y878VU5q5MBe7PVPCdmuCn2BK7BBWcLevowg5b6Q3yHba5yl3fnh22eZGkG8x32OZq6BILO2xzmbrHfIdtqmJXmS9Y5GrabRYXLPIC3IXuXbDIC4XuNF+wyFXuWp06L3lY6Ga9yp2tV9Nc6YskHa8vwN2vV0Mn7OXQFXuZOmQvcrfsVO6cSfRdtP+CEro2L3B37VXutEnNum5fJOnAqUDSjfsS/pNcVu33HlI5dOxODt27U7GT9wL3VV4NHb7/ZLPU9qHz9+q33TobCPgCPBzwamFQ4AuFoYGXeYDgVR4mODUMFpy6LtkzDBy8ysMHUtNBhCuTDSVcARxQeIGHFV5NBxe+SDLE8AV4oOHVwnDDFwqDDi+HoYeXaQDixKdSS++Kwt4QiAOTyTAaObEjvx49wXEHoGRdekIjDKC+N5i4sQQwWkaewKgBiM/wsn6O1QjfTjCnCuXfTrAYqxa+nWDOlYzfTrDgqxu+nRh4+OYg5VT7/JuDVMzsUPzmINXJIoVvDlKVbZN+c5BqZCXafp9QslC2/T6RMusUtt8nKlkm3X6faGyVZPt9opBFcG86I7JF2JvOPLNCtjedJap/3JvOAtec96Yzpjone7oLClmgtKe7IGf22LOnu1CCrFPc013Q2VaFPd0FlSznNjMHRtaKm5mDkFko3cwcNLJKspk5KGyJsJk5cKq9/pL0Zcao9iZQ7U3Iam9qrL1pVHsTuPamcO1N8bU3TrUffqn3MhKquWCqt+Cs1qLFOotCNRbM9RXOtRXu6yrU1/RqqOXwS61XWEVkulcTmF9fAAFXFQDrWgIwWxwAaBsYAcoORkC6OGCs/Y3jIzvyW0w75IfsJoydTWgvSIeSxux4aMiO+kbsULrXoFOoaTvmd3J0KLYd7E/tDrXtgKkRgPm3rMbxdxKN6nq4IZs3G7N2gztJuwHSX0pUJBOkfurWk2Hz7fErQVSHKqmrLTgAyqtapVV16wl44WiCKjFBlZlAVwmGH99oWbs2cGZHunXDkP9ZLeP4G0JG9eexDNlvYhmjnxpsWe2NbL/oCMxHOgg4ozKqywSGeKUQrmErAsZ0URDK6eRfke3GtmI43TZvaufY5xrqOrEG5L3EOHqJUfUGQ1RDUMxPjNm6kjH5SdGOTCUx9603dYkZmAY3MGouEzAxA9bEDMwSM0DzboAS4IA0MRvrFrHtyO+Sn4b0Cjzskp9iegWU7pKfuvQKTF3MkD62Ilthno7CsvJ0FNaSpyG3Ag/LD1PMrYBojWw6iovC0xGvBE8xsxqSWHh5bqTPrP2a5XRIrHZGFWupaRVRXssq9IZTTqtQ2HeSU5dVgSWV16R6puGycCctfA8+denPWO2uWse6ZwunU859RmNz5uui01FcDJ2OwgrodBSWPaeY+awRMfFZY7eJ71RP08QHyP95AePhs6QpJj5A/PcETLE/JWDM/oqAMfkDAkraBb7zl3qk6doQpuWOzny+nCX5cpbky1kpX87yfDlL8uUsy5ezLF/OYr6cJflyNsIfMZ1hvgSUvD2ZUb4E6t+CzJJ8CQrtc5hhvgTkf2x0NuTLYZQzw4SJTFsAGOV+E3DXqlH/w8ozlzOBwYdQBvVLKEP+p5VnkDX78JqNwnh0NqRNuEyVVFYTp2OFylZpZf2IFEpHI1SJEarMCDYi7UepsyF79u8nZpg9AdEfAJkN2fPoSK9rg0dgvrogYAwb9XtvZkkCxWvQ67sZZlAsp1MORTx4nFEOtaZ/9IZ6pHnHLGRRFMIsY4ZpFFCopEk00Zi5PIoF/VxrpuvnkFrCy4EgcIbMXw8ENcmV4QVBEELWjK8IgkL5M7wkYAEyafjWjXmWU7Nv3Vii7Fr61o1lzrPhWzfmlHGFY9pVxulIBU7AKqSJSdWYnVSiVKSc85EKISmpQulZOeVo4RSthn22Fp5VO+RtFTh5m7DPUEkaNynJ5SoWrBiyugpFK4b8LgIkeUWU6ZVzuhcBc74yTvwqpNlf1dgFqET9gPJCZ6A69wgqcLegAvUNwkMHIULSS4j0mNg89BcqpJ2GqrHnUIm6D+WFPkR17khUCL2JKtSl0EtFybXZW8VM476l+F4xK5D0MNmbxUwL/Uz6bjETqbfJ3i4mGvQ5SKnbQSnreVCPnQ+q1P+glHdBWIJ7IdSoI0KJ+iKQsDtCzIkWNe6UUEvTLRaIGRdVyqsocWpFLWRXFKmbQslWkYJGWcMpvsMCqXCt0G2hxj2X075hzaT/cmrShaFetnboyFDbZ+3QnYEGPRpS6tRQ4n4NNOzaEHPvhlrawWGB2MehSt0cSoWeDotwZ4ca93eoUZcHUuj1QEs6PlAf8wYK3R9qaQ+IBWIniCr1gygVukIswr0haqFDRNH3iU3Ydn9fsu8F2qN241r/YlFSHhYQBKWG5IelBEEpt9sHijoO5eGRoTRQKCvbR6CgICiluwWgmDIo5/629VDO/W3roRz8dd2hFPx13aEM/gnPoRD+Cc++1DV6br+4ez245LEdiScCSt6yXZPfAfVv2a4TPwOF3r9dO7cCNniTka9arZtRvxYKRxpNhnBc1FNxsV2C6ALK41Xw2w9GdJXs2w+R5M8Ru+sY5CuZEq/Vd5L9Hy24vV7K3y3os5hTvdRW0H7uqTvyOwM6lO0MUM/Toyd39OxK7vyRr1puZenG8fkU0UMqT5/UpRqPniJ6jifuEkRVKHuLDDmwHoqoHsrTeogK9cAPkwg9xxN3CaJ6lP3VDY9cZRznGjkxr1bI3gl/KvDnwnV2Jc71dWKsNHQKdzmlCqOUVpc7n0CfUvqcXmGXU6okSkkVbdzq6oiYK4laXksogdUE/JTj5/wiuwLmqqIW6ypd912CqI7K0/q5YYFHTxE9xxN3CaK6KI/10LHFXcaoJiakVfFjF2JPCXtOzt1ljOpjQqyQDoLuMkYVMiGtkB9kEXtK2HNy7i5jVCETQoU+jWS2r0d+Z0eHbG6vKNns0fGw2aOjfrNHh2hLR8fohw875n74sCN+l0eLmmhaVptNN5VU+Ekt2B4tdITWHfmR5CcadfQTy7vBNnagk1IlYhkj/nW8Ynwbr1BfxiuxN+6KbLqrSN63KxCT9ESmHvNIfA0U+2ooTuqiWqiQKr5Wiqlqyql+yl0llfqaxs9JU+5rXfiYNBUTC5Q/JU11b43Sh6SpSpbJPyNNNWcl/VNgeuDsEf78VwsXLi0t4tB0URgOLdJxwyL2Q4skny+SlNgeWbR3Rz5DdcjWywzFDNXxkKF66lbFFPvE1SFKXB2jxNWy2h/FZ64LD1inD1jHJwnrS6Ykz1j7/XId8pnUdydJR5J3IV/il8bD9QpfGucqteC+L43zItFse740zkuQjUtfGucy+0D86jcX9poldZLyV795gb3VKnhR6avfXCbfKnz1m6q7kiOx85W/Be0LLIdRU3+XpVul61H8OnUQ5GfYDUleOtEje85kzJiPFleYNocrxbn6qjBXX5Xn6iucYg8XjpPnVWHyvCpPnlfeRHj5QqOxwLf6RqOtcHVwuJWgXSzFl1ceLlyPcB2udiPqWi5+qEc+CGu+ZE+xOYfrxgWa2rWwP5Fvk7ZwL4XudbhhYbWhjqsKyXX4/uVVhV6nvnx4hHQNoObZfrgC37w02+9VHDAM940T19rNUv2JfLt0ltpL9B0h3JIUuDMpu+LV+DlYjo/jBkbDgyQT3dpPaulcvm0+qe01SX9wP8yIxx7t4ol8s+yvyg4SxvtwL3wbcOzRLp7I90pTQCc9uAs8xHMf8tOG1xCFVWove03OWFaf5Fvdi1SQ58hV/0kCq8l2di4CdcoL+E3urNKudpZpMz/L7qMGFv1O+E7NjbXHUnvM9C0b7TfQHuvsM80+u5SN8m2LwP+HL6HQ5Ubtm7LTw4ibB5xvc22pTu6xDwuv0dJVUsIP/pzmYyTWYZ0/p/6kS6bJRCHV3MMmJboJ7mnEfruB1/SGmSZvu3LVP05S4mF+U+Wm6ax9ETG1RyzxVWveWFf3pZwoudPTuiNd2zOU3aIVdBvHsV5M39n2lZOG49u6d2QXHtEDlN6ReZUfJez5G56Hf79yeB73ruvCI3qe0rsur/LzhB9AlOdJf7JLnsqJ+Gxe4Cf0av6c+c9eHWc3pmcefLRL0ER81CjWFTWP/Vqa13D9ySu6fuaxrZx5TpuDlMtqmae6TubwH2o3Jbo6QTixtYj2t6eEdH96ypH2t+BfeSI2JQwG6pUmzLsFz37E1B3porYhaQpAfseEcdwxYVR3TBiyfRHGbF+EMdkXYUTMbUgi4EyJze66Iz/h65C2BaD4Z6c6HqaFPcWFIMP+r1F1iP4aVcfor1G1rNZQ6o78y4UOJdtUOh62qXTUb1PpULpNpVNom0rHpEsGpLZXpHHeG/9phK+CntChAPlXQU/BoYCHkfUTOhQgWlx6cg4FzL0KekKHMuQd6mmEK29Po7Dc9hQaB3hagTpWIF9CexrFdbOnUVgsexqFFbKn2DjPLjKeY2Q8x8h4LkTGcxoZz3lkPMfIeE4i4zmJjF1ojl2s2I5HDIS5eLLlNip40p//+X+DG1I7"'), al = "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", ol = "eJxtmNtu20YQhl+F4FULyMGeD7pz3AY1ChtG7NpFA18w1NomIlECSRcxgrx7SVk7+wOdG8H5OJydf2Z2d5gf9cV+t0v9VK/r+6vXsXlOlbHe28paq229qj/t++m62aXZ4J/m8PRb1z9/baZxefK63Z6eXN5dVMvTCh83u277xr/6kLrnl2XNq7TpXnczuZyabdee98/b2VzM/x4/dd/T5qab2pd6PQ2vaVVfvDRD005puE3Lu7eH1HbN9hTjx4/77/X6y5lcnUmjVzHIVVDicVX/1W/SsO36dLMfu6nb9/X6TAoBD+5euvZbn8axXtuZ36dhPJrVQqgPQoh5hev91LWLkIv94W1Ygq9+aX+tZAx2tfz64284/sblN/rqfLP/mqrbt3FKu7G67Nv9cNgPzZQ2H6rz7bb6vLgZq89pTMO/M/xfEqturJpqSM/d7GJIm2oamk3aNcO3av80O5xh3yyKmm1193ZIT02bqovTKjP+MAf++7zsZvZ3276kYyWWXB0z99S18/PbafPHQ71W4fjn/fxnFO+ZvkrT0LVzTr78qB/+nk38bHM9exgP8zr1z9U7jt6840YW5uSJKcZOCaBBnKgm5mU8MVNYyMwWFvO7Ukagkmgg6sDWQ5yFFqjzUrLEaQ3BEmiwNsMSaZS0vgWfOkPHWQowNeTUc0kumnxZvsgPxlGai6VTGUqAVCTQ6QkWnc77DKEiLktSUBJKqHIQZ86d8gCpHYoiEzMsb1ubYy8vW50DChB5ZhGqrijD0EqUIeiaEHIfCg5Kpuu0ApiToaGPSY0uaQsyr65L2oKi1yFt1PLaQ3lzfXTgXodGoJYzglndSLDMPg1sTPJpQJHJigw0QrGERqD9YhyTOgONQDUyuF1zaxuokc/BW2ztXCMrGZ9WMW1oQZHIXWNBkSCfRZEL5BMUiZw6CzVSFCfUSGZFNjIldoKDkonTKQiJIGzWmFd3BizJJ9SINoLDriOfUCOZS+zg+KGD1qGiLNMLxtJD1/ns00ON6EzyUCM6vbxhoBKaqbG3DFQCNiL1iHccBPV0DHhQH/JW8EW90dkyFKGywCJU0WkVSvSGeiSUODWFFD0HYdPQVoiRgfPMA+/nnRgiAyNYSjpWNQcNSMrtFCUH4ZIRpSCWocFCSuhCEY6hoUClc0WC52BJlCYYLQdhN+hygRRRlo5BKRRLS6oihSqh+ZzzRGG1Mo4Iz1LoP0qsxDGFzk0JE42ji0jCPejomJKCuwil4m5CiRMEUMVSzVLDUstSx1Juc0oVWMpqY295qVltmtWmWW2a1aZZbZrVplltmtWmWW2G1WZYbYbVZlhthtVmWG2G1WZYbYbVZlhtltVmWW2W1WZZbZbVZlltltVmWW2W1QYjQCh7E2aAQHeGhCFgPoNoy8KNb2wxBhmGKBxoUZXlLGsLI6AsftEDHV0wIURVbANLcTKlGGBIKPOAxCmhePCKUwFzAmpDFRQvjA9R06Hq8TONvshgKDCuRAZTXigUxjxNFfKRo3CLhnIJBMFRvMZpqpNBMlQJzGT5WFQMVQI/AikPMIhEU1aDjqJvQwmjSHB05cC9jbYwc5UtAHNLhDw41ha+lEqF4JaH3gmB61SYcqInxTDmQK8v08vjqv4zDf1N0w3Lf4A8/vwPpfK11w==";
var sl = {
  Courier: Qu,
  "Courier-Bold": Xu,
  "Courier-Oblique": Yu,
  "Courier-BoldOblique": Zu,
  Helvetica: el,
  "Helvetica-Bold": Ju,
  "Helvetica-Oblique": $u,
  "Helvetica-BoldOblique": _u,
  "Times-Roman": il,
  "Times-Bold": tl,
  "Times-Italic": nl,
  "Times-BoldItalic": rl,
  Symbol: al,
  ZapfDingbats: ol
}, Pn;
(function(r) {
  r.Courier = "Courier", r.CourierBold = "Courier-Bold", r.CourierOblique = "Courier-Oblique", r.CourierBoldOblique = "Courier-BoldOblique", r.Helvetica = "Helvetica", r.HelveticaBold = "Helvetica-Bold", r.HelveticaOblique = "Helvetica-Oblique", r.HelveticaBoldOblique = "Helvetica-BoldOblique", r.TimesRoman = "Times-Roman", r.TimesRomanBold = "Times-Bold", r.TimesRomanItalic = "Times-Italic", r.TimesRomanBoldItalic = "Times-BoldItalic", r.Symbol = "Symbol", r.ZapfDingbats = "ZapfDingbats";
})(Pn || (Pn = {}));
var ho = {}, ul = (
  /** @class */
  (function() {
    function r() {
      var e = this;
      this.getWidthOfGlyph = function(t) {
        return e.CharWidths[t];
      }, this.getXAxisKerningForPair = function(t, n) {
        return (e.KernPairXAmounts[t] || {})[n];
      };
    }
    return r.load = function(e) {
      var t = ho[e];
      if (t)
        return t;
      var n = ls(sl[e]), i = Object.assign(new r(), JSON.parse(n));
      return i.CharWidths = i.CharMetrics.reduce(function(a, o) {
        return a[o.N] = o.WX, a;
      }, {}), i.KernPairXAmounts = i.KernPairs.reduce(function(a, o) {
        var s = o[0], u = o[1], l = o[2];
        return a[s] || (a[s] = {}), a[s][u] = l, a;
      }, {}), ho[e] = i, i;
    }, r;
  })()
);
const ll = "eJztWsuy48iN/Ret74KZfHtX47meqfGjPHaXx4/wgpJ4JbooUU1JVXXb0f9u4JwESF13R7TD29koIpFi8gCJBHDA/Pvm+nraTuPmZ3/f5HHzs7/k8WlzvXS7fvPXp02eqyR/2vRfd2N3gqhUUfm0Od9P236+DoczxLWK66fNpZ93/fkGWaOy5mnTnUR67c57lRaZSItM/tnN/XnsX/DfIqg0JOk8HI4UK4BCAFzG+xWCQgXF02Y3nU4dJJVKKrx5mPgKBVMImOvYXY+QKJRCoHzXzxMErQrap810hqaloioF1e0L5kvFUwqe23Hu+Q+1TinWeZnuMwSKrRRsL8Nn/kOxlYLtOnzFWE1Viqmu/eceVioVaylYe1OwVKilQD0PCYgiLRtVcJz4kEItW13mNLi0UsCVAB77KyxTKeJKEPff3rsREkVcCeLD3He3HqArBV0J6G/v/fU2cK1WH23l0e3c7T71N9uUVv/c5i73bWlVs1Y0u5/3srO7aQb2EPUB+eUTva0TYgG5mGbbzZSUkJTpn75ygF4PThhq1SMGMds4HYZdN54n/rdWc8rv02bfH9I2hbqGsKbPnIYzHSc0qmTIxI6nuwpiAIQmU8F4Gy7jK8RwntAI1v3wedj39FmFECp508s4zUOyGmwpKrwbL8eOIlVU//Yf/S1J9C212Pa/uuSwbVDYlWzxf/aj/UtfWgm258t1GG1X1BVawfdnX0xdoRbjPCdBVGs1svo3R/tPVD1r2YL3k0kUfC04f9ldLkmk0NVwv+pO232SKXa126/vHAO5wPxNGivsRsZ/HDhWzLVg/iBuOSfMUTGrTX+b/qSIG0H8u+NEl1J4jcD7/XBI9kDcUYN/0/FNCDuNAP64skYOeLrykUsjElWC9+cmAEAB9NtrEijCplaE/YHvKuC5Iup8zxBAWtFrayakC2QC8uCbhggSskx9zXYNQSRkeuZWQBFKQowabNIfS/qeqOgSOFTINcC4DKcnE70H2zqElJAJ3k++dwgrIRPA47J5iCwr724RWELINFBTAAWiCL7SOogrIQj6abWBOH8hCPoL/4a4EoJgn9MWIq40lcY52cJAGbCHMgkpA3g9t7e0sRWgB1HnvjJYRez6yrSTlYJvRZmdCQhe80Pa24roNYL75uLo10WyKYHVeFLjYnImilM0qPDOJOKWNGlFCJsIrw/qsNv7OPY3SnNYSQ9DP46DLHylvGCcEFU08Nz6JIVx9Chd+93ENNhEWroSuC8SAi0WNznNpqH9+c5k1RQ0nIbi9/LnTzdmoKZAaAwaib/0g0Ti29wxG8gUgLey/O8eHmmqt4eiKTNYo416LPrLkcIWa2u06eZ5+mLBXCaoTp4m7pckBm41P8Qe0mUG6DUCYWY/fTmnCQbwkCa2043vrhA2gqakncwM3aGfe9GAj1Vw9qiuzPW2o4Or4PcxhmUu4atwAGKMy8wCscJhiDFfJh1lhY2K6mo250DrTJXOC82EUgVIkTMmOd0moqC5Dd24H15e0hRKJS0Cvg7Xm9RKgz9ErdWrTpfb6zV5Wx2ytwlDZLplUQ/8Ye72Qyq5RI5kqY4t6fe0iHOItdCYbo8zKOi0vLjvjrdjZ2IYRAPUZZ72910SI7vEiL9LaHSvrZFkipKOf02y8gc9vEbmKHQjRP95uH6ShZI9c9pao41otTPLICMETXSC5jLNupbP8bxo2Dy/DOfh9prk8BKNk935MPIo1jiKUSNQqiVSVSozBWYan5nmNMGz1+r6AleO8KJJwXdk2H8XwgVVP31AticBhdvqIZPwNPcvqWhqah74iIB6GsYuvbdGeYFS93yY775hPNh6giUlzNNXr/eaJmNYKrnLKznOt4ZsEQ6f5ZCfWVvJFK2Xs5BcP8ND23r5uJqDyaPmM90Oscl9a87aIC3HLCxz+uOzNFgOhA+P4XRq8hPTjP3Xhzn4oiYIm1svybSpOX03zDuJX4kqyAx3rrKZdZ3XNMggGh9lsUt/Fm+7m+1bGCxqOttPN/fOFiExKh+xnb1d0gz8qiiXmS0r5YxLaaULN/TaOsu4WEgTS3Fd1TCvlsvj9F1/PvQpPzHAZqiN9yZEntcyaDfet0mGOKLl5LGX6EMhU5ZGkf3QnVIWqvJA5FoG7KbLK1BcBcyLTfNYZGr7g8ar+WEWm63VgmSefX/q5k+r6Rplrdo/Heb+q00gKzcWUiVy3pY5RkGL7kept7/zSRS8Uc+Kw+nOV5ukqeu1KqtZ2Ds2a6yrWZghX/NS7q3OwQZ5WM0tgGCBPK7muPM6B2fP8wditayKMKG5YzW7rIvzkJcPs8vKOBGaRJxo+boMocrFfe407G0SJlJS7pO+KOrwqKkAcw4lp28Xi28vU7AM2Lfz9gUITKM8fJlcnoRtlJIvkwsSRtD2kXkuC8M2ytbX08vSME4ZHqd9cTQgojL5hXr60uhDxDJfTy7WQ3kXy2I9q+t+L7V+d3nZD+fDtrtdf7iZ8gPUNhVNSLOdFKmrqgg5UGR5ktUWkERW4ETnYSnQpK5PsqU2k3I5yZbCTGhJki0lmbJ2ypxOd8rYKXM23Slnp6yxclZkVZK1li1EVlMWmY0yyJokC5bIRdYm6sDCW/9X54knZEYnurpKJCEzNtHVdYqTmdGJrm6SiJRMsdWJmTS1MYWuSZwAHg3D5dSJO6tnpqPiNXIHapSQHkL9WNCyDwEZymTtQzyGcfx/rQVukWUP4RgGS29oG5RieEMSVKm67GISoHZUs0g6TKImlZMdbde2cDMFUCZBSBWevKlNIlRrBNQkEVpt0CXUSYTWGvzG1q5TldeFIklgFfiMvQ6tNXgMtk5IM+qSAjbJSpOh4wdUtYnQYgOqxkRosgFVayK02SJsYCJ02tRw9HkVodUG00UTodcG4+UmQrdN0dPhVYR2m8KPBhX1t/bkumgaofzWplwXDT2Oo9K2Lhp6dogUvT+HBpGC98fQxlDs/lSVCr/OVGZ7CGY3lXEIKyD3fylyrQS63P4VjTl0uRkGJxB+l5th2CBS5LkZhg0iRZ6bYdgPUqC5aYMEh8CSmzrsCinU3PRBKkNYyQ0qTgSiSmFQcSAQVAqDimSFmFIYVPaKFGphUNktUqiFQUVaUvLVFbaHSEZK47vC0LNfpOgLQ8+OkaIvDD2SjZbOXWHokWBQgJeGHkmlwaEz9EglKHFKQ48og8qmNPQgJEp0u9LQg4mAjJeGnm0rRV8aeratFH1p6EE8tBnQlYYebSutwLrS0KNrhRZYZegRbpV3dpWhR8tKSU9XGXr2rJTsdJXBTz0ruLjhT00rVaAyBVLTSjWoTIPUs1IVKlOBbSulAV1lOrBzpZS2q0wJNq8yhH7TovIOb1cb5tSXUny14Ut9KUYQUyS1phRgbaDZmEIiFrKThCnpIMMYGrZh0JBo7M01e+H65sZeUpPp6ZsbX4+dcH1xa1YgxYsIAWYF9rXBI1p/L9tiiL6ZmYGtrYpZybaz8caUCA1iA4iIPcEN0ZAQIuq70g2ZPCOQ7R+yE5riIjTojfMRESbsge1zHMhgsSlk5PR4u0WnQDraMOdEE7JTj7dbhAqpw4K3W4wKGZv3eHtempBkA+nHQldgrwXHM1jwCgj0pB7BwlcIbI7BnhbAAmsvHNJgISyw+MIxDRbEAqsvHNRgYSyw/GqZSE0j1l84rMFCWWABhuMaLJgFVmA4sMHCWUi8CRpZQAvkSzizwUJaIE/CoQ0W1ALpEU5tsLDGDzqg6yI0jaKzfxGaRuRBOLjBglsgAcpYHZhG5D04usECXCDdQd0WLMQFshwc6GBBLqQOETSyMBdIa3DMgwW6QD6Dcx4s1AXyDpSRYmoTsrpmzWKQyDJw0GWjTci2GCBZIAtkFDj+wSJZIJPA+Q8WygIJRCQkw8meFCJAsGAWCu8BiNAsjzTAXkKwEBfYg2IQqM3y7EFFauT/ZAcUGlk0DAU7nyzETPeSHBIa1aZmSe4IjWpTsyRphEa1qVmSTFMjU7Mki4ZGreEsSZ+hUWO6s7+bc4/8cdJlaNSYQdjTRbEbM3+c5BgaWTgOSA7stkSLiqFiCwbgLUiHinQX4C1Kh4pEl+BN94oEl+DNdBWJLcH74yS0AG8RPeCjRmRZ3JiR0ZWKrItbW7MmZWVlbG+vSVWxHY2tyW+lJTUy0yEVgdTKmmYlNplKagSDCMFlTIaH8GmVMWkpIj6sMsQv+Ae3UmUIX3AP6q0yRC94x/IOBC84B4+VyhC7yHTIELQRhGgM32hchmAM14hMRCpEMIZrNC6DJvAMWkxl0ASOQYOpDJqACrX+EmgCX9EQ8f3T5stwlggXf/otCfss8O19uvX7LfqmP3Z1AiRPP2JPY2pA/vTbFIhHqhFedB2s0/2v3bIAG1z14yH8CVcvwJFFoePr5cgbDv9/G+Pfvo2BUIP6ix0r8EO9ZYARuKFeMMAIvFA/gWMESqifiTACG9QrBTpCBFGK9wuMQKz0UgJGoH+C7L8xAvPTL40Y4au7gPkfjEAB9SYBRmB/eokAIxA/vT6AETifXh7ACHRPrwroqAFX0i/5GIEmCZb/xQj8Tu8LYARqp5cFMAKr03sCGIHQ6SUBjMDlBMsfMLIP//+HERicXlzACORNsPxJR2iW4I4FRj92EQa8TTuGInY3/vHrMSBwuoPX3TDot4c7osKPXJtBm0XLvsPc0XfRZkHNhxE4nLZsMQJ902/jDOQIkriXkAL7JhEyNh1ZemtZ98IxCZvebeCYZE3AHjkmUdMPGRyTpAm6v3FMgqY3EjgmOdPPZhyTmOlFBIwZxHEPgWNeJ9BbBxyz+af9c45J2PRMcEyyph8EOSZP03PMMTmaXjLgmN0+vWLAMfBpFfeZY7838AVjNilxLYJj4NOy7ZVjUju9zcHxv3/FiVcKULCpf9yGcb9qEOPL/6pp7GyO2cU+S7N2AaOzDMHKBXxO4/goyYBiZ3S7+yxxf0fNKud0r31a0gnddp4+9WfTpHJOt/r4yfIlfVDq5z7dgWABg8amf4SBnLxZQ9A0718keFqMZSGDNurhPoxjf5r84LGeQY/77d0vb3QvyYc1DTrd9nWo56movd196uyqy792faz2prfkJHyAHPiBONTe+kZ2ephrlhb4Ll0HSRfRNOLxqk5onB1LWu4kCPAGRmicIDOZ6j67Ro0T5V2/F6t1lDpTlkz6iMTpspj/JI53H83+jZNmt/+ybY2TZ1lRctmcUldonEDLxLEbGV5aZ9AwRnqAJmydSFu6c2dunU6/8yDIL5Og0+8W67VOp98xsL6kr1H8FglO/W45Uq1z6ncPXto6rX432zlpnVW/e6bAGfXPV0aOmXPqZwcbM+fUzw42Zs6pnx/BxsyJ9fMaV8ycW79fre3c+v1qbefW79+u7QT7/ePazrGf+UE7Zk6wf+Mmi8EJ9ocFQnCC/WGBEJxgf3gDgddNNIp/WC3Mb12i24cHXIEfkcs3FzGDM/UPnnJjcKb+cQXOmfrHFThn6h/fgItO1z8+4IjO2P+0LBOdsX9znHgBKUYn7Id+Pkklvh3TCgtpX9DFhbSvll1I+1t0C3NfTBcX5v4IeSHv5sYxX7g7H86dt+/Wbpw7c+8XsLkz934Bmztz79+AzZ2+9w+4cmfww2ptZ/DDam1n8MPbtZ3GDw9rs9ui3KZPblw4tz8vJiuc208LhMK5/bRAKJzbT28gFE7wp9XCTvCnR1zO8ZeLw7Fwjj8tTlw4x78v0Ern+PcFWukc//4GWulE//6AonSu/7paxrn+zZ2YnRclRK/rBXJsCAjxh2cKEAWVJ02ku/wOoFv2+12XkmnODwHgW4uQGVbZ0uM7mAJ1b/68/JlpUMnWdy5MF6/Vd5eL19YYSPd6FqPwBkNQo/h2NQxdQQ3bn/dpCxrGrqCW7U8rKZl/mfi0Xytk3Am66ZhYbg4y+KAVslDwbXdNL2d5qU5hnYBlTZaa6hs2t1qWdaeeTptcLco+hl5R7w4H5uOGcQbtEkpT18GusOI2xT9dYcVJf7zCSjmbD+Iud2s1NPRb9E+0UICmizb8ZK/+5JOLOulSqwaw5VJr2vB8dSFn89fvv/8H0oq1dA==";
var fl = ls(ll), ea = JSON.parse(fl), ta = (
  /** @class */
  /* @__PURE__ */ (function() {
    function r(e, t) {
      var n = this;
      this.canEncodeUnicodeCodePoint = function(i) {
        return i in n.unicodeMappings;
      }, this.encodeUnicodeCodePoint = function(i) {
        var a = n.unicodeMappings[i];
        if (!a) {
          var o = String.fromCharCode(i), s = "0x" + Gu(i.toString(16), 4, "0"), u = n.name + ' cannot encode "' + o + '" (' + s + ")";
          throw new Error(u);
        }
        return { code: a[0], name: a[1] };
      }, this.name = e, this.supportedCodePoints = Object.keys(t).map(Number).sort(function(i, a) {
        return i - a;
      }), this.unicodeMappings = t;
    }
    return r;
  })()
), Hn = {
  Symbol: new ta("Symbol", ea.symbol),
  ZapfDingbats: new ta("ZapfDingbats", ea.zapfdingbats),
  WinAnsi: new ta("WinAnsi", ea.win1252)
}, Fi = function(r) {
  return Object.keys(r).map(function(e) {
    return r[e];
  });
}, cl = Fi(Pn), vo = function(r) {
  return cl.includes(r);
}, Kn = function(r, e) {
  return r.x === e.x && r.y === e.y && r.width === e.width && r.height === e.height;
}, Je = function(r) {
  return "`" + r + "`";
}, hl = function(r) {
  return "'" + r + "'";
}, po = function(r) {
  var e = typeof r;
  return e === "string" ? hl(r) : e === "undefined" ? Je(r) : r;
}, dl = function(r, e, t) {
  for (var n = new Array(t.length), i = 0, a = t.length; i < a; i++) {
    var o = t[i];
    n[i] = po(o);
  }
  var s = n.join(" or ");
  return Je(e) + " must be one of " + s + ", but was actually " + po(r);
}, pr = function(r, e, t) {
  Array.isArray(t) || (t = Fi(t));
  for (var n = 0, i = t.length; n < i; n++)
    if (r === t[n])
      return;
  throw new TypeError(dl(r, e, t));
}, At = function(r, e, t) {
  Array.isArray(t) || (t = Fi(t)), pr(r, e, t.concat(void 0));
}, vl = function(r, e, t) {
  Array.isArray(t) || (t = Fi(t));
  for (var n = 0, i = r.length; n < i; n++)
    pr(r[n], e, t);
}, pl = function(r) {
  return r === null ? "null" : r === void 0 ? "undefined" : typeof r == "string" ? "string" : isNaN(r) ? "NaN" : typeof r == "number" ? "number" : typeof r == "boolean" ? "boolean" : typeof r == "symbol" ? "symbol" : typeof r == "bigint" ? "bigint" : r.constructor && r.constructor.name ? r.constructor.name : r.name ? r.name : r.constructor ? String(r.constructor) : String(r);
}, gl = function(r, e) {
  return e === "null" ? r === null : e === "undefined" ? r === void 0 : e === "string" ? typeof r == "string" : e === "number" ? typeof r == "number" && !isNaN(r) : e === "boolean" ? typeof r == "boolean" : e === "symbol" ? typeof r == "symbol" : e === "bigint" ? typeof r == "bigint" : e === Date ? r instanceof Date : e === Array ? r instanceof Array : e === Uint8Array ? r instanceof Uint8Array : e === ArrayBuffer ? r instanceof ArrayBuffer : e === Function ? r instanceof Function : r instanceof e[0];
}, yl = function(r, e, t) {
  for (var n = new Array(t.length), i = 0, a = t.length; i < a; i++) {
    var o = t[i];
    o === "null" && (n[i] = Je("null")), o === "undefined" && (n[i] = Je("undefined")), o === "string" ? n[i] = Je("string") : o === "number" ? n[i] = Je("number") : o === "boolean" ? n[i] = Je("boolean") : o === "symbol" ? n[i] = Je("symbol") : o === "bigint" ? n[i] = Je("bigint") : o === Array ? n[i] = Je("Array") : o === Uint8Array ? n[i] = Je("Uint8Array") : o === ArrayBuffer ? n[i] = Je("ArrayBuffer") : n[i] = Je(o[1]);
  }
  var s = n.join(" or ");
  return Je(e) + " must be of type " + s + ", but was actually of type " + Je(pl(r));
}, R = function(r, e, t) {
  for (var n = 0, i = t.length; n < i; n++)
    if (gl(r, t[n]))
      return;
  throw new TypeError(yl(r, e, t));
}, K = function(r, e, t) {
  R(r, e, t.concat("undefined"));
}, fs = function(r, e, t) {
  for (var n = 0, i = r.length; n < i; n++)
    R(r[n], e, t);
}, bt = function(r, e, t, n) {
  if (R(r, e, ["number"]), R(t, "min", ["number"]), R(n, "max", ["number"]), n = Math.max(t, n), r < t || r > n)
    throw new Error(Je(e) + " must be at least " + t + " and at most " + n + ", but was actually " + r);
}, Wt = function(r, e, t, n) {
  R(r, e, ["number", "undefined"]), typeof r == "number" && bt(r, e, t, n);
}, cs = function(r, e, t) {
  if (R(r, e, ["number"]), r % t !== 0)
    throw new Error(Je(e) + " must be a multiple of " + t + ", but was actually " + r);
}, ml = function(r, e) {
  if (!Number.isInteger(r))
    throw new Error(Je(e) + " must be an integer, but was actually " + r);
}, ki = function(r, e) {
  if (![1, 0].includes(Math.sign(r)))
    throw new Error(Je(e) + " must be a positive number or 0, but was actually " + r);
}, ve = new Uint16Array(256);
for (var Gn = 0; Gn < 256; Gn++)
  ve[Gn] = Gn;
ve[22] = he("");
ve[24] = he("˘");
ve[25] = he("ˇ");
ve[26] = he("ˆ");
ve[27] = he("˙");
ve[28] = he("˝");
ve[29] = he("˛");
ve[30] = he("˚");
ve[31] = he("˜");
ve[127] = he("�");
ve[128] = he("•");
ve[129] = he("†");
ve[130] = he("‡");
ve[131] = he("…");
ve[132] = he("—");
ve[133] = he("–");
ve[134] = he("ƒ");
ve[135] = he("⁄");
ve[136] = he("‹");
ve[137] = he("›");
ve[138] = he("−");
ve[139] = he("‰");
ve[140] = he("„");
ve[141] = he("“");
ve[142] = he("”");
ve[143] = he("‘");
ve[144] = he("’");
ve[145] = he("‚");
ve[146] = he("™");
ve[147] = he("ﬁ");
ve[148] = he("ﬂ");
ve[149] = he("Ł");
ve[150] = he("Œ");
ve[151] = he("Š");
ve[152] = he("Ÿ");
ve[153] = he("Ž");
ve[154] = he("ı");
ve[155] = he("ł");
ve[156] = he("œ");
ve[157] = he("š");
ve[158] = he("ž");
ve[159] = he("�");
ve[160] = he("€");
ve[173] = he("�");
var hs = function(r) {
  for (var e = new Array(r.length), t = 0, n = r.length; t < n; t++)
    e[t] = ve[r[t]];
  return String.fromCodePoint.apply(String, e);
}, nr = (
  /** @class */
  (function() {
    function r(e) {
      this.populate = e, this.value = void 0;
    }
    return r.prototype.getValue = function() {
      return this.value;
    }, r.prototype.access = function() {
      return this.value || (this.value = this.populate()), this.value;
    }, r.prototype.invalidate = function() {
      this.value = void 0;
    }, r.populatedBy = function(e) {
      return new r(e);
    }, r;
  })()
), Et = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = this, a = "Method " + t + "." + n + "() not implemented";
      return i = r.call(this, a) || this, i;
    }
    return e;
  })(Error)
), Fa = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = this, i = "Cannot construct " + t + " - it has a private constructor";
      return n = r.call(this, i) || this, n;
    }
    return e;
  })(Error)
), si = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = this, a = function(u) {
        var l, c;
        return (l = u?.name) !== null && l !== void 0 ? l : (c = u?.constructor) === null || c === void 0 ? void 0 : c.name;
      }, o = Array.isArray(t) ? t.map(a) : [a(t)], s = "Expected instance of " + o.join(" or ") + ", " + ("but got instance of " + (n && a(n)));
      return i = r.call(this, s) || this, i;
    }
    return e;
  })(Error)
), bl = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = this, i = t + " stream encoding not supported";
      return n = r.call(this, i) || this, n;
    }
    return e;
  })(Error)
), ka = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = this, a = "Cannot call " + t + "." + n + "() more than once";
      return i = r.call(this, a) || this, i;
    }
    return e;
  })(Error)
);
(function(r) {
  X(e, r);
  function e(t) {
    var n = this, i = "Missing catalog (ref=" + t + ")";
    return n = r.call(this, i) || this, n;
  }
  return e;
})(Error);
var xl = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      var t = this, n = "Can't embed page with missing Contents";
      return t = r.call(this, n) || this, t;
    }
    return e;
  })(Error)
), wl = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n, i, a, o = this, s = (a = (i = (n = t?.contructor) === null || n === void 0 ? void 0 : n.name) !== null && i !== void 0 ? i : t?.name) !== null && a !== void 0 ? a : t, u = "Unrecognized stream type: " + s;
      return o = r.call(this, u) || this, o;
    }
    return e;
  })(Error)
), Sl = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      var t = this, n = "Found mismatched contexts while embedding pages. All pages in the array passed to `PDFDocument.embedPages()` must be from the same document.";
      return t = r.call(this, n) || this, t;
    }
    return e;
  })(Error)
), Fl = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = this, i = "Attempted to convert PDFArray with " + t + " elements to rectangle, but must have exactly 4 elements.";
      return n = r.call(this, i) || this, n;
    }
    return e;
  })(Error)
), ds = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = this, i = 'Attempted to convert "' + t + '" to a date, but it does not match the PDF date string format.';
      return n = r.call(this, i) || this, n;
    }
    return e;
  })(Error)
), go = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = this, a = "Invalid targetIndex specified: targetIndex=" + t + " must be less than Count=" + n;
      return i = r.call(this, a) || this, i;
    }
    return e;
  })(Error)
), yo = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = this, a = "Failed to " + n + " at targetIndex=" + t + " due to corrupt page tree: It is likely that one or more 'Count' entries are invalid";
      return i = r.call(this, a) || this, i;
    }
    return e;
  })(Error)
), ui = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      var a = this, o = "index should be at least " + n + " and at most " + i + ", but was actually " + t;
      return a = r.call(this, o) || this, a;
    }
    return e;
  })(Error)
), Ca = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      var t = this, n = "Attempted to set invalid field value";
      return t = r.call(this, n) || this, t;
    }
    return e;
  })(Error)
), kl = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      var t = this, n = "Attempted to select multiple values for single-select field";
      return t = r.call(this, n) || this, t;
    }
    return e;
  })(Error)
), Cl = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = this, i = "No /DA (default appearance) entry found for field: " + t;
      return n = r.call(this, i) || this, n;
    }
    return e;
  })(Error)
), Tl = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = this, i = "No Tf operator found for DA of field: " + t;
      return n = r.call(this, i) || this, n;
    }
    return e;
  })(Error)
), mo = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = this, a = "Failed to parse number " + ("(line:" + t.line + " col:" + t.column + " offset=" + t.offset + '): "' + n + '"');
      return i = r.call(this, a) || this, i;
    }
    return e;
  })(Error)
), kr = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = this, a = "Failed to parse PDF document " + ("(line:" + t.line + " col:" + t.column + " offset=" + t.offset + "): " + n);
      return i = r.call(this, a) || this, i;
    }
    return e;
  })(Error)
), Pl = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      var a = this, o = "Expected next byte to be " + n + " but it was actually " + i;
      return a = r.call(this, t, o) || this, a;
    }
    return e;
  })(kr)
), Dl = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = this, a = "Failed to parse PDF object starting with the following byte: " + n;
      return i = r.call(this, t, a) || this, i;
    }
    return e;
  })(kr)
), Al = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = this, i = "Failed to parse invalid PDF object";
      return n = r.call(this, t, i) || this, n;
    }
    return e;
  })(kr)
), Rl = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = this, i = "Failed to parse PDF stream";
      return n = r.call(this, t, i) || this, n;
    }
    return e;
  })(kr)
), Ol = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = this, i = "Failed to parse PDF literal string due to unbalanced parenthesis";
      return n = r.call(this, t, i) || this, n;
    }
    return e;
  })(kr)
), El = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = this, i = "Parser stalled";
      return n = r.call(this, t, i) || this, n;
    }
    return e;
  })(kr)
), Nl = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = this, i = "No PDF header found";
      return n = r.call(this, t, i) || this, n;
    }
    return e;
  })(kr)
), zl = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = this, a = "Did not find expected keyword '" + Jo(n) + "'";
      return i = r.call(this, t, a) || this, i;
    }
    return e;
  })(kr)
), la;
(function(r) {
  r[r.Null = 0] = "Null", r[r.Backspace = 8] = "Backspace", r[r.Tab = 9] = "Tab", r[r.Newline = 10] = "Newline", r[r.FormFeed = 12] = "FormFeed", r[r.CarriageReturn = 13] = "CarriageReturn", r[r.Space = 32] = "Space", r[r.ExclamationPoint = 33] = "ExclamationPoint", r[r.Hash = 35] = "Hash", r[r.Percent = 37] = "Percent", r[r.LeftParen = 40] = "LeftParen", r[r.RightParen = 41] = "RightParen", r[r.Plus = 43] = "Plus", r[r.Minus = 45] = "Minus", r[r.Dash = 45] = "Dash", r[r.Period = 46] = "Period", r[r.ForwardSlash = 47] = "ForwardSlash", r[r.Zero = 48] = "Zero", r[r.One = 49] = "One", r[r.Two = 50] = "Two", r[r.Three = 51] = "Three", r[r.Four = 52] = "Four", r[r.Five = 53] = "Five", r[r.Six = 54] = "Six", r[r.Seven = 55] = "Seven", r[r.Eight = 56] = "Eight", r[r.Nine = 57] = "Nine", r[r.LessThan = 60] = "LessThan", r[r.GreaterThan = 62] = "GreaterThan", r[r.A = 65] = "A", r[r.D = 68] = "D", r[r.E = 69] = "E", r[r.F = 70] = "F", r[r.O = 79] = "O", r[r.P = 80] = "P", r[r.R = 82] = "R", r[r.LeftSquareBracket = 91] = "LeftSquareBracket", r[r.BackSlash = 92] = "BackSlash", r[r.RightSquareBracket = 93] = "RightSquareBracket", r[r.a = 97] = "a", r[r.b = 98] = "b", r[r.d = 100] = "d", r[r.e = 101] = "e", r[r.f = 102] = "f", r[r.i = 105] = "i", r[r.j = 106] = "j", r[r.l = 108] = "l", r[r.m = 109] = "m", r[r.n = 110] = "n", r[r.o = 111] = "o", r[r.r = 114] = "r", r[r.s = 115] = "s", r[r.t = 116] = "t", r[r.u = 117] = "u", r[r.x = 120] = "x", r[r.LeftCurly = 123] = "LeftCurly", r[r.RightCurly = 125] = "RightCurly", r[r.Tilde = 126] = "Tilde";
})(la || (la = {}));
const x = la;
var Ci = (
  /** @class */
  (function() {
    function r(e, t) {
      this.major = String(e), this.minor = String(t);
    }
    return r.prototype.toString = function() {
      var e = rr(129);
      return "%PDF-" + this.major + "." + this.minor + `
%` + e + e + e + e;
    }, r.prototype.sizeInBytes = function() {
      return 12 + this.major.length + this.minor.length;
    }, r.prototype.copyBytesInto = function(e, t) {
      var n = t;
      return e[t++] = x.Percent, e[t++] = x.P, e[t++] = x.D, e[t++] = x.F, e[t++] = x.Dash, t += it(this.major, e, t), e[t++] = x.Period, t += it(this.minor, e, t), e[t++] = x.Newline, e[t++] = x.Percent, e[t++] = 129, e[t++] = 129, e[t++] = 129, e[t++] = 129, t - n;
    }, r.forVersion = function(e, t) {
      return new r(e, t);
    }, r;
  })()
), dt = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.clone = function(e) {
      throw new Et(this.constructor.name, "clone");
    }, r.prototype.toString = function() {
      throw new Et(this.constructor.name, "toString");
    }, r.prototype.sizeInBytes = function() {
      throw new Et(this.constructor.name, "sizeInBytes");
    }, r.prototype.copyBytesInto = function(e, t) {
      throw new Et(this.constructor.name, "copyBytesInto");
    }, r;
  })()
), fe = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = r.call(this) || this;
      return n.numberValue = t, n.stringValue = Eu(t), n;
    }
    return e.prototype.asNumber = function() {
      return this.numberValue;
    }, e.prototype.value = function() {
      return this.numberValue;
    }, e.prototype.clone = function() {
      return e.of(this.numberValue);
    }, e.prototype.toString = function() {
      return this.stringValue;
    }, e.prototype.sizeInBytes = function() {
      return this.stringValue.length;
    }, e.prototype.copyBytesInto = function(t, n) {
      return n += it(this.stringValue, t, n), this.stringValue.length;
    }, e.of = function(t) {
      return new e(t);
    }, e;
  })(dt)
), Re = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = r.call(this) || this;
      return n.array = [], n.context = t, n;
    }
    return e.prototype.size = function() {
      return this.array.length;
    }, e.prototype.push = function(t) {
      this.array.push(t);
    }, e.prototype.insert = function(t, n) {
      this.array.splice(t, 0, n);
    }, e.prototype.indexOf = function(t) {
      var n = this.array.indexOf(t);
      return n === -1 ? void 0 : n;
    }, e.prototype.remove = function(t) {
      this.array.splice(t, 1);
    }, e.prototype.set = function(t, n) {
      this.array[t] = n;
    }, e.prototype.get = function(t) {
      return this.array[t];
    }, e.prototype.lookupMaybe = function(t) {
      for (var n, i = [], a = 1; a < arguments.length; a++)
        i[a - 1] = arguments[a];
      return (n = this.context).lookupMaybe.apply(n, ke([this.get(t)], i));
    }, e.prototype.lookup = function(t) {
      for (var n, i = [], a = 1; a < arguments.length; a++)
        i[a - 1] = arguments[a];
      return (n = this.context).lookup.apply(n, ke([this.get(t)], i));
    }, e.prototype.asRectangle = function() {
      if (this.size() !== 4)
        throw new Fl(this.size());
      var t = this.lookup(0, fe).asNumber(), n = this.lookup(1, fe).asNumber(), i = this.lookup(2, fe).asNumber(), a = this.lookup(3, fe).asNumber(), o = t, s = n, u = i - t, l = a - n;
      return { x: o, y: s, width: u, height: l };
    }, e.prototype.asArray = function() {
      return this.array.slice();
    }, e.prototype.clone = function(t) {
      for (var n = e.withContext(t || this.context), i = 0, a = this.size(); i < a; i++)
        n.push(this.array[i]);
      return n;
    }, e.prototype.toString = function() {
      for (var t = "[ ", n = 0, i = this.size(); n < i; n++)
        t += this.get(n).toString(), t += " ";
      return t += "]", t;
    }, e.prototype.sizeInBytes = function() {
      for (var t = 3, n = 0, i = this.size(); n < i; n++)
        t += this.get(n).sizeInBytes() + 1;
      return t;
    }, e.prototype.copyBytesInto = function(t, n) {
      var i = n;
      t[n++] = x.LeftSquareBracket, t[n++] = x.Space;
      for (var a = 0, o = this.size(); a < o; a++)
        n += this.get(a).copyBytesInto(t, n), t[n++] = x.Space;
      return t[n++] = x.RightSquareBracket, n - i;
    }, e.prototype.scalePDFNumbers = function(t, n) {
      for (var i = 0, a = this.size(); i < a; i++) {
        var o = this.lookup(i);
        if (o instanceof fe) {
          var s = i % 2 === 0 ? t : n;
          this.set(i, fe.of(o.asNumber() * s));
        }
      }
    }, e.withContext = function(t) {
      return new e(t);
    }, e;
  })(dt)
), ra = {}, Dn = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = this;
      if (t !== ra)
        throw new Fa("PDFBool");
      return i = r.call(this) || this, i.value = n, i;
    }
    return e.prototype.asBoolean = function() {
      return this.value;
    }, e.prototype.clone = function() {
      return this;
    }, e.prototype.toString = function() {
      return String(this.value);
    }, e.prototype.sizeInBytes = function() {
      return this.value ? 4 : 5;
    }, e.prototype.copyBytesInto = function(t, n) {
      return this.value ? (t[n++] = x.t, t[n++] = x.r, t[n++] = x.u, t[n++] = x.e, 4) : (t[n++] = x.f, t[n++] = x.a, t[n++] = x.l, t[n++] = x.s, t[n++] = x.e, 5);
    }, e.True = new e(ra, !0), e.False = new e(ra, !1), e;
  })(dt)
), It = new Uint8Array(256);
It[x.LeftParen] = 1;
It[x.RightParen] = 1;
It[x.LessThan] = 1;
It[x.GreaterThan] = 1;
It[x.LeftSquareBracket] = 1;
It[x.RightSquareBracket] = 1;
It[x.LeftCurly] = 1;
It[x.RightCurly] = 1;
It[x.ForwardSlash] = 1;
It[x.Percent] = 1;
var or = new Uint8Array(256);
or[x.Null] = 1;
or[x.Tab] = 1;
or[x.Newline] = 1;
or[x.FormFeed] = 1;
or[x.CarriageReturn] = 1;
or[x.Space] = 1;
var Ta = new Uint8Array(256);
for (var un = 0, Bl = 256; un < Bl; un++)
  Ta[un] = or[un] || It[un] ? 1 : 0;
Ta[x.Hash] = 1;
var Ml = function(r) {
  return r.replace(/#([\dABCDEF]{2})/g, function(e, t) {
    return hu(t);
  });
}, Il = function(r) {
  return r >= x.ExclamationPoint && r <= x.Tilde && !Ta[r];
}, bo = {}, xo = /* @__PURE__ */ new Map(), b = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = this;
      if (t !== bo)
        throw new Fa("PDFName");
      i = r.call(this) || this;
      for (var a = "/", o = 0, s = n.length; o < s; o++) {
        var u = n[o], l = he(u);
        a += Il(l) ? u : "#" + wi(l);
      }
      return i.encodedName = a, i;
    }
    return e.prototype.asBytes = function() {
      for (var t = [], n = "", i = !1, a = function(h) {
        h !== void 0 && t.push(h), i = !1;
      }, o = 1, s = this.encodedName.length; o < s; o++) {
        var u = this.encodedName[o], l = he(u), c = this.encodedName[o + 1];
        i ? l >= x.Zero && l <= x.Nine || l >= x.a && l <= x.f || l >= x.A && l <= x.F ? (n += u, (n.length === 2 || !(c >= "0" && c <= "9" || c >= "a" && c <= "f" || c >= "A" && c <= "F")) && (a(parseInt(n, 16)), n = "")) : a(l) : l === x.Hash ? i = !0 : a(l);
      }
      return new Uint8Array(t);
    }, e.prototype.decodeText = function() {
      var t = this.asBytes();
      return String.fromCharCode.apply(String, Array.from(t));
    }, e.prototype.asString = function() {
      return this.encodedName;
    }, e.prototype.value = function() {
      return this.encodedName;
    }, e.prototype.clone = function() {
      return this;
    }, e.prototype.toString = function() {
      return this.encodedName;
    }, e.prototype.sizeInBytes = function() {
      return this.encodedName.length;
    }, e.prototype.copyBytesInto = function(t, n) {
      return n += it(this.encodedName, t, n), this.encodedName.length;
    }, e.of = function(t) {
      var n = Ml(t), i = xo.get(n);
      return i || (i = new e(bo, n), xo.set(n, i)), i;
    }, e.Length = e.of("Length"), e.FlateDecode = e.of("FlateDecode"), e.Resources = e.of("Resources"), e.Font = e.of("Font"), e.XObject = e.of("XObject"), e.ExtGState = e.of("ExtGState"), e.Contents = e.of("Contents"), e.Type = e.of("Type"), e.Parent = e.of("Parent"), e.MediaBox = e.of("MediaBox"), e.Page = e.of("Page"), e.Annots = e.of("Annots"), e.TrimBox = e.of("TrimBox"), e.ArtBox = e.of("ArtBox"), e.BleedBox = e.of("BleedBox"), e.CropBox = e.of("CropBox"), e.Rotate = e.of("Rotate"), e.Title = e.of("Title"), e.Author = e.of("Author"), e.Subject = e.of("Subject"), e.Creator = e.of("Creator"), e.Keywords = e.of("Keywords"), e.Producer = e.of("Producer"), e.CreationDate = e.of("CreationDate"), e.ModDate = e.of("ModDate"), e;
  })(dt)
), jl = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.asNull = function() {
      return null;
    }, e.prototype.clone = function() {
      return this;
    }, e.prototype.toString = function() {
      return "null";
    }, e.prototype.sizeInBytes = function() {
      return 4;
    }, e.prototype.copyBytesInto = function(t, n) {
      return t[n++] = x.n, t[n++] = x.u, t[n++] = x.l, t[n++] = x.l, 4;
    }, e;
  })(dt)
);
const yt = new jl();
var pe = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = r.call(this) || this;
      return i.dict = t, i.context = n, i;
    }
    return e.prototype.keys = function() {
      return Array.from(this.dict.keys());
    }, e.prototype.values = function() {
      return Array.from(this.dict.values());
    }, e.prototype.entries = function() {
      return Array.from(this.dict.entries());
    }, e.prototype.set = function(t, n) {
      this.dict.set(t, n);
    }, e.prototype.get = function(t, n) {
      n === void 0 && (n = !1);
      var i = this.dict.get(t);
      if (!(i === yt && !n))
        return i;
    }, e.prototype.has = function(t) {
      var n = this.dict.get(t);
      return n !== void 0 && n !== yt;
    }, e.prototype.lookupMaybe = function(t) {
      for (var n, i = [], a = 1; a < arguments.length; a++)
        i[a - 1] = arguments[a];
      var o = i.includes(yt), s = (n = this.context).lookupMaybe.apply(n, ke([this.get(t, o)], i));
      if (!(s === yt && !o))
        return s;
    }, e.prototype.lookup = function(t) {
      for (var n, i = [], a = 1; a < arguments.length; a++)
        i[a - 1] = arguments[a];
      var o = i.includes(yt), s = (n = this.context).lookup.apply(n, ke([this.get(t, o)], i));
      if (!(s === yt && !o))
        return s;
    }, e.prototype.delete = function(t) {
      return this.dict.delete(t);
    }, e.prototype.asMap = function() {
      return new Map(this.dict);
    }, e.prototype.uniqueKey = function(t) {
      t === void 0 && (t = "");
      for (var n = this.keys(), i = b.of(this.context.addRandomSuffix(t, 10)); n.includes(i); )
        i = b.of(this.context.addRandomSuffix(t, 10));
      return i;
    }, e.prototype.clone = function(t) {
      for (var n = e.withContext(t || this.context), i = this.entries(), a = 0, o = i.length; a < o; a++) {
        var s = i[a], u = s[0], l = s[1];
        n.set(u, l);
      }
      return n;
    }, e.prototype.toString = function() {
      for (var t = `<<
`, n = this.entries(), i = 0, a = n.length; i < a; i++) {
        var o = n[i], s = o[0], u = o[1];
        t += s.toString() + " " + u.toString() + `
`;
      }
      return t += ">>", t;
    }, e.prototype.sizeInBytes = function() {
      for (var t = 5, n = this.entries(), i = 0, a = n.length; i < a; i++) {
        var o = n[i], s = o[0], u = o[1];
        t += s.sizeInBytes() + u.sizeInBytes() + 2;
      }
      return t;
    }, e.prototype.copyBytesInto = function(t, n) {
      var i = n;
      t[n++] = x.LessThan, t[n++] = x.LessThan, t[n++] = x.Newline;
      for (var a = this.entries(), o = 0, s = a.length; o < s; o++) {
        var u = a[o], l = u[0], c = u[1];
        n += l.copyBytesInto(t, n), t[n++] = x.Space, n += c.copyBytesInto(t, n), t[n++] = x.Newline;
      }
      return t[n++] = x.GreaterThan, t[n++] = x.GreaterThan, n - i;
    }, e.withContext = function(t) {
      return new e(/* @__PURE__ */ new Map(), t);
    }, e.fromMapWithContext = function(t, n) {
      return new e(t, n);
    }, e;
  })(dt)
), wt = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = r.call(this) || this;
      return n.dict = t, n;
    }
    return e.prototype.clone = function(t) {
      throw new Et(this.constructor.name, "clone");
    }, e.prototype.getContentsString = function() {
      throw new Et(this.constructor.name, "getContentsString");
    }, e.prototype.getContents = function() {
      throw new Et(this.constructor.name, "getContents");
    }, e.prototype.getContentsSize = function() {
      throw new Et(this.constructor.name, "getContentsSize");
    }, e.prototype.updateDict = function() {
      var t = this.getContentsSize();
      this.dict.set(b.Length, fe.of(t));
    }, e.prototype.sizeInBytes = function() {
      return this.updateDict(), this.dict.sizeInBytes() + this.getContentsSize() + 18;
    }, e.prototype.toString = function() {
      this.updateDict();
      var t = this.dict.toString();
      return t += `
stream
`, t += this.getContentsString(), t += `
endstream`, t;
    }, e.prototype.copyBytesInto = function(t, n) {
      this.updateDict();
      var i = n;
      n += this.dict.copyBytesInto(t, n), t[n++] = x.Newline, t[n++] = x.s, t[n++] = x.t, t[n++] = x.r, t[n++] = x.e, t[n++] = x.a, t[n++] = x.m, t[n++] = x.Newline;
      for (var a = this.getContents(), o = 0, s = a.length; o < s; o++)
        t[n++] = a[o];
      return t[n++] = x.Newline, t[n++] = x.e, t[n++] = x.n, t[n++] = x.d, t[n++] = x.s, t[n++] = x.t, t[n++] = x.r, t[n++] = x.e, t[n++] = x.a, t[n++] = x.m, n - i;
    }, e;
  })(dt)
), An = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = r.call(this, t) || this;
      return i.contents = n, i;
    }
    return e.prototype.asUint8Array = function() {
      return this.contents.slice();
    }, e.prototype.clone = function(t) {
      return e.of(this.dict.clone(t), this.contents.slice());
    }, e.prototype.getContentsString = function() {
      return Jo(this.contents);
    }, e.prototype.getContents = function() {
      return this.contents;
    }, e.prototype.getContentsSize = function() {
      return this.contents.length;
    }, e.of = function(t, n) {
      return new e(t, n);
    }, e;
  })(wt)
), wo = {}, So = /* @__PURE__ */ new Map(), Ne = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      var a = this;
      if (t !== wo)
        throw new Fa("PDFRef");
      return a = r.call(this) || this, a.objectNumber = n, a.generationNumber = i, a.tag = n + " " + i + " R", a;
    }
    return e.prototype.clone = function() {
      return this;
    }, e.prototype.toString = function() {
      return this.tag;
    }, e.prototype.sizeInBytes = function() {
      return this.tag.length;
    }, e.prototype.copyBytesInto = function(t, n) {
      return n += it(this.tag, t, n), this.tag.length;
    }, e.of = function(t, n) {
      n === void 0 && (n = 0);
      var i = t + " " + n + " R", a = So.get(i);
      return a || (a = new e(wo, t, n), So.set(i, a)), a;
    }, e;
  })(dt)
), Fe = (
  /** @class */
  (function() {
    function r(e, t) {
      this.name = e, this.args = t || [];
    }
    return r.prototype.clone = function(e) {
      for (var t = new Array(this.args.length), n = 0, i = t.length; n < i; n++) {
        var a = this.args[n];
        t[n] = a instanceof dt ? a.clone(e) : a;
      }
      return r.of(this.name, t);
    }, r.prototype.toString = function() {
      for (var e = "", t = 0, n = this.args.length; t < n; t++)
        e += String(this.args[t]) + " ";
      return e += this.name, e;
    }, r.prototype.sizeInBytes = function() {
      for (var e = 0, t = 0, n = this.args.length; t < n; t++) {
        var i = this.args[t];
        e += (i instanceof dt ? i.sizeInBytes() : i.length) + 1;
      }
      return e += this.name.length, e;
    }, r.prototype.copyBytesInto = function(e, t) {
      for (var n = t, i = 0, a = this.args.length; i < a; i++) {
        var o = this.args[i];
        o instanceof dt ? t += o.copyBytesInto(e, t) : t += it(o, e, t), e[t++] = x.Space;
      }
      return t += it(this.name, e, t), t - n;
    }, r.of = function(e, t) {
      return new r(e, t);
    }, r;
  })()
), fa;
(function(r) {
  r.NonStrokingColor = "sc", r.NonStrokingColorN = "scn", r.NonStrokingColorRgb = "rg", r.NonStrokingColorGray = "g", r.NonStrokingColorCmyk = "k", r.NonStrokingColorspace = "cs", r.StrokingColor = "SC", r.StrokingColorN = "SCN", r.StrokingColorRgb = "RG", r.StrokingColorGray = "G", r.StrokingColorCmyk = "K", r.StrokingColorspace = "CS", r.BeginMarkedContentSequence = "BDC", r.BeginMarkedContent = "BMC", r.EndMarkedContent = "EMC", r.MarkedContentPointWithProps = "DP", r.MarkedContentPoint = "MP", r.DrawObject = "Do", r.ConcatTransformationMatrix = "cm", r.PopGraphicsState = "Q", r.PushGraphicsState = "q", r.SetFlatness = "i", r.SetGraphicsStateParams = "gs", r.SetLineCapStyle = "J", r.SetLineDashPattern = "d", r.SetLineJoinStyle = "j", r.SetLineMiterLimit = "M", r.SetLineWidth = "w", r.SetTextMatrix = "Tm", r.SetRenderingIntent = "ri", r.AppendRectangle = "re", r.BeginInlineImage = "BI", r.BeginInlineImageData = "ID", r.EndInlineImage = "EI", r.ClipEvenOdd = "W*", r.ClipNonZero = "W", r.CloseAndStroke = "s", r.CloseFillEvenOddAndStroke = "b*", r.CloseFillNonZeroAndStroke = "b", r.ClosePath = "h", r.AppendBezierCurve = "c", r.CurveToReplicateFinalPoint = "y", r.CurveToReplicateInitialPoint = "v", r.EndPath = "n", r.FillEvenOddAndStroke = "B*", r.FillEvenOdd = "f*", r.FillNonZeroAndStroke = "B", r.FillNonZero = "f", r.LegacyFillNonZero = "F", r.LineTo = "l", r.MoveTo = "m", r.ShadingFill = "sh", r.StrokePath = "S", r.BeginText = "BT", r.EndText = "ET", r.MoveText = "Td", r.MoveTextSetLeading = "TD", r.NextLine = "T*", r.SetCharacterSpacing = "Tc", r.SetFontAndSize = "Tf", r.SetTextHorizontalScaling = "Tz", r.SetTextLineHeight = "TL", r.SetTextRenderingMode = "Tr", r.SetTextRise = "Ts", r.SetWordSpacing = "Tw", r.ShowText = "Tj", r.ShowTextAdjusted = "TJ", r.ShowTextLine = "'", r.ShowTextLineAndSpace = '"', r.Type3D0 = "d0", r.Type3D1 = "d1", r.BeginCompatibilitySection = "BX", r.EndCompatibilitySection = "EX";
})(fa || (fa = {}));
const Ce = fa;
var Pa = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = r.call(this, t) || this;
      return i.computeContents = function() {
        var a = i.getUnencodedContents();
        return i.encode ? Si.deflate(a) : a;
      }, i.encode = n, n && t.set(b.of("Filter"), b.of("FlateDecode")), i.contentsCache = nr.populatedBy(i.computeContents), i;
    }
    return e.prototype.getContents = function() {
      return this.contentsCache.access();
    }, e.prototype.getContentsSize = function() {
      return this.contentsCache.access().length;
    }, e.prototype.getUnencodedContents = function() {
      throw new Et(this.constructor.name, "getUnencodedContents");
    }, e;
  })(wt)
), bn = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      i === void 0 && (i = !0);
      var a = r.call(this, t, i) || this;
      return a.operators = n, a;
    }
    return e.prototype.push = function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      (t = this.operators).push.apply(t, n);
    }, e.prototype.clone = function(t) {
      for (var n = new Array(this.operators.length), i = 0, a = this.operators.length; i < a; i++)
        n[i] = this.operators[i].clone(t);
      var o = this, s = o.dict, u = o.encode;
      return e.of(s.clone(t), n, u);
    }, e.prototype.getContentsString = function() {
      for (var t = "", n = 0, i = this.operators.length; n < i; n++)
        t += this.operators[n] + `
`;
      return t;
    }, e.prototype.getUnencodedContents = function() {
      for (var t = new Uint8Array(this.getUnencodedContentsSize()), n = 0, i = 0, a = this.operators.length; i < a; i++)
        n += this.operators[i].copyBytesInto(t, n), t[n++] = x.Newline;
      return t;
    }, e.prototype.getUnencodedContentsSize = function() {
      for (var t = 0, n = 0, i = this.operators.length; n < i; n++)
        t += this.operators[n].sizeInBytes() + 1;
      return t;
    }, e.of = function(t, n, i) {
      return i === void 0 && (i = !0), new e(t, n, i);
    }, e;
  })(Pa)
), Ul = (
  /** @class */
  (function() {
    function r(e) {
      this.seed = e;
    }
    return r.prototype.nextInt = function() {
      var e = Math.sin(this.seed++) * 1e4;
      return e - Math.floor(e);
    }, r.withSeed = function(e) {
      return new r(e);
    }, r;
  })()
), Wl = function(r, e) {
  var t = r[0], n = e[0];
  return t.objectNumber - n.objectNumber;
}, ca = (
  /** @class */
  (function() {
    function r() {
      this.largestObjectNumber = 0, this.header = Ci.forVersion(1, 7), this.trailerInfo = {}, this.indirectObjects = /* @__PURE__ */ new Map(), this.rng = Ul.withSeed(1);
    }
    return r.prototype.assign = function(e, t) {
      this.indirectObjects.set(e, t), e.objectNumber > this.largestObjectNumber && (this.largestObjectNumber = e.objectNumber);
    }, r.prototype.nextRef = function() {
      return this.largestObjectNumber += 1, Ne.of(this.largestObjectNumber);
    }, r.prototype.register = function(e) {
      var t = this.nextRef();
      return this.assign(t, e), t;
    }, r.prototype.delete = function(e) {
      return this.indirectObjects.delete(e);
    }, r.prototype.lookupMaybe = function(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var i = t.includes(yt), a = e instanceof Ne ? this.indirectObjects.get(e) : e;
      if (!(!a || a === yt && !i)) {
        for (var o = 0, s = t.length; o < s; o++) {
          var u = t[o];
          if (u === yt) {
            if (a === yt)
              return a;
          } else if (a instanceof u)
            return a;
        }
        throw new si(t, a);
      }
    }, r.prototype.lookup = function(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var i = e instanceof Ne ? this.indirectObjects.get(e) : e;
      if (t.length === 0)
        return i;
      for (var a = 0, o = t.length; a < o; a++) {
        var s = t[a];
        if (s === yt) {
          if (i === yt)
            return i;
        } else if (i instanceof s)
          return i;
      }
      throw new si(t, i);
    }, r.prototype.getObjectRef = function(e) {
      for (var t = Array.from(this.indirectObjects.entries()), n = 0, i = t.length; n < i; n++) {
        var a = t[n], o = a[0], s = a[1];
        if (s === e)
          return o;
      }
    }, r.prototype.enumerateIndirectObjects = function() {
      return Array.from(this.indirectObjects.entries()).sort(Wl);
    }, r.prototype.obj = function(e) {
      if (e instanceof dt)
        return e;
      if (e == null)
        return yt;
      if (typeof e == "string")
        return b.of(e);
      if (typeof e == "number")
        return fe.of(e);
      if (typeof e == "boolean")
        return e ? Dn.True : Dn.False;
      if (Array.isArray(e)) {
        for (var t = Re.withContext(this), n = 0, i = e.length; n < i; n++)
          t.push(this.obj(e[n]));
        return t;
      } else {
        for (var a = pe.withContext(this), o = Object.keys(e), n = 0, i = o.length; n < i; n++) {
          var s = o[n], u = e[s];
          u !== void 0 && a.set(b.of(s), this.obj(u));
        }
        return a;
      }
    }, r.prototype.stream = function(e, t) {
      return t === void 0 && (t = {}), An.of(this.obj(t), ua(e));
    }, r.prototype.flateStream = function(e, t) {
      return t === void 0 && (t = {}), this.stream(Si.deflate(ua(e)), de(de({}, t), { Filter: "FlateDecode" }));
    }, r.prototype.contentStream = function(e, t) {
      return t === void 0 && (t = {}), bn.of(this.obj(t), e);
    }, r.prototype.formXObject = function(e, t) {
      return t === void 0 && (t = {}), this.contentStream(e, de(de({ BBox: this.obj([0, 0, 0, 0]), Matrix: this.obj([1, 0, 0, 1, 0, 0]) }, t), { Type: "XObject", Subtype: "Form" }));
    }, r.prototype.getPushGraphicsStateContentStream = function() {
      if (this.pushGraphicsStateContentStreamRef)
        return this.pushGraphicsStateContentStreamRef;
      var e = this.obj({}), t = Fe.of(Ce.PushGraphicsState), n = bn.of(e, [t]);
      return this.pushGraphicsStateContentStreamRef = this.register(n), this.pushGraphicsStateContentStreamRef;
    }, r.prototype.getPopGraphicsStateContentStream = function() {
      if (this.popGraphicsStateContentStreamRef)
        return this.popGraphicsStateContentStreamRef;
      var e = this.obj({}), t = Fe.of(Ce.PopGraphicsState), n = bn.of(e, [t]);
      return this.popGraphicsStateContentStreamRef = this.register(n), this.popGraphicsStateContentStreamRef;
    }, r.prototype.addRandomSuffix = function(e, t) {
      return t === void 0 && (t = 4), e + "-" + Math.floor(this.rng.nextInt() * Math.pow(10, t));
    }, r.create = function() {
      return new r();
    }, r;
  })()
), ir = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      i === void 0 && (i = !0);
      var a = r.call(this, t, n) || this;
      return a.normalized = !1, a.autoNormalizeCTM = i, a;
    }
    return e.prototype.clone = function(t) {
      for (var n = e.fromMapWithContext(/* @__PURE__ */ new Map(), t || this.context, this.autoNormalizeCTM), i = this.entries(), a = 0, o = i.length; a < o; a++) {
        var s = i[a], u = s[0], l = s[1];
        n.set(u, l);
      }
      return n;
    }, e.prototype.Parent = function() {
      return this.lookupMaybe(b.Parent, pe);
    }, e.prototype.Contents = function() {
      return this.lookup(b.of("Contents"));
    }, e.prototype.Annots = function() {
      return this.lookupMaybe(b.Annots, Re);
    }, e.prototype.BleedBox = function() {
      return this.lookupMaybe(b.BleedBox, Re);
    }, e.prototype.TrimBox = function() {
      return this.lookupMaybe(b.TrimBox, Re);
    }, e.prototype.ArtBox = function() {
      return this.lookupMaybe(b.ArtBox, Re);
    }, e.prototype.Resources = function() {
      var t = this.getInheritableAttribute(b.Resources);
      return this.context.lookupMaybe(t, pe);
    }, e.prototype.MediaBox = function() {
      var t = this.getInheritableAttribute(b.MediaBox);
      return this.context.lookup(t, Re);
    }, e.prototype.CropBox = function() {
      var t = this.getInheritableAttribute(b.CropBox);
      return this.context.lookupMaybe(t, Re);
    }, e.prototype.Rotate = function() {
      var t = this.getInheritableAttribute(b.Rotate);
      return this.context.lookupMaybe(t, fe);
    }, e.prototype.getInheritableAttribute = function(t) {
      var n;
      return this.ascend(function(i) {
        n || (n = i.get(t));
      }), n;
    }, e.prototype.setParent = function(t) {
      this.set(b.Parent, t);
    }, e.prototype.addContentStream = function(t) {
      var n = this.normalizedEntries().Contents || this.context.obj([]);
      this.set(b.Contents, n), n.push(t);
    }, e.prototype.wrapContentStreams = function(t, n) {
      var i = this.Contents();
      return i instanceof Re ? (i.insert(0, t), i.push(n), !0) : !1;
    }, e.prototype.addAnnot = function(t) {
      var n = this.normalizedEntries().Annots;
      n.push(t);
    }, e.prototype.removeAnnot = function(t) {
      var n = this.normalizedEntries().Annots, i = n.indexOf(t);
      i !== void 0 && n.remove(i);
    }, e.prototype.setFontDictionary = function(t, n) {
      var i = this.normalizedEntries().Font;
      i.set(t, n);
    }, e.prototype.newFontDictionaryKey = function(t) {
      var n = this.normalizedEntries().Font;
      return n.uniqueKey(t);
    }, e.prototype.newFontDictionary = function(t, n) {
      var i = this.newFontDictionaryKey(t);
      return this.setFontDictionary(i, n), i;
    }, e.prototype.setXObject = function(t, n) {
      var i = this.normalizedEntries().XObject;
      i.set(t, n);
    }, e.prototype.newXObjectKey = function(t) {
      var n = this.normalizedEntries().XObject;
      return n.uniqueKey(t);
    }, e.prototype.newXObject = function(t, n) {
      var i = this.newXObjectKey(t);
      return this.setXObject(i, n), i;
    }, e.prototype.setExtGState = function(t, n) {
      var i = this.normalizedEntries().ExtGState;
      i.set(t, n);
    }, e.prototype.newExtGStateKey = function(t) {
      var n = this.normalizedEntries().ExtGState;
      return n.uniqueKey(t);
    }, e.prototype.newExtGState = function(t, n) {
      var i = this.newExtGStateKey(t);
      return this.setExtGState(i, n), i;
    }, e.prototype.ascend = function(t) {
      t(this);
      var n = this.Parent();
      n && n.ascend(t);
    }, e.prototype.normalize = function() {
      if (!this.normalized) {
        var t = this.context, n = this.get(b.Contents), i = this.context.lookup(n);
        i instanceof wt && this.set(b.Contents, t.obj([n])), this.autoNormalizeCTM && this.wrapContentStreams(this.context.getPushGraphicsStateContentStream(), this.context.getPopGraphicsStateContentStream());
        var a = this.getInheritableAttribute(b.Resources), o = t.lookupMaybe(a, pe) || t.obj({});
        this.set(b.Resources, o);
        var s = o.lookupMaybe(b.Font, pe) || t.obj({});
        o.set(b.Font, s);
        var u = o.lookupMaybe(b.XObject, pe) || t.obj({});
        o.set(b.XObject, u);
        var l = o.lookupMaybe(b.ExtGState, pe) || t.obj({});
        o.set(b.ExtGState, l);
        var c = this.Annots() || t.obj([]);
        this.set(b.Annots, c), this.normalized = !0;
      }
    }, e.prototype.normalizedEntries = function() {
      this.normalize();
      var t = this.Annots(), n = this.Resources(), i = this.Contents();
      return {
        Annots: t,
        Resources: n,
        Contents: i,
        Font: n.lookup(b.Font, pe),
        XObject: n.lookup(b.XObject, pe),
        ExtGState: n.lookup(b.ExtGState, pe)
      };
    }, e.InheritableEntries = [
      "Resources",
      "MediaBox",
      "CropBox",
      "Rotate"
    ], e.withContextAndParent = function(t, n) {
      var i = /* @__PURE__ */ new Map();
      return i.set(b.Type, b.Page), i.set(b.Parent, n), i.set(b.Resources, t.obj({})), i.set(b.MediaBox, t.obj([0, 0, 612, 792])), new e(i, t, !1);
    }, e.fromMapWithContext = function(t, n, i) {
      return i === void 0 && (i = !0), new e(t, n, i);
    }, e;
  })(pe)
), Fo = (
  /** @class */
  (function() {
    function r(e, t) {
      var n = this;
      this.traversedObjects = /* @__PURE__ */ new Map(), this.copy = function(i) {
        return i instanceof ir ? n.copyPDFPage(i) : i instanceof pe ? n.copyPDFDict(i) : i instanceof Re ? n.copyPDFArray(i) : i instanceof wt ? n.copyPDFStream(i) : i instanceof Ne ? n.copyPDFIndirectObject(i) : i.clone();
      }, this.copyPDFPage = function(i) {
        for (var a = i.clone(), o = ir.InheritableEntries, s = 0, u = o.length; s < u; s++) {
          var l = b.of(o[s]), c = a.getInheritableAttribute(l);
          !a.get(l) && c && a.set(l, c);
        }
        return a.delete(b.of("Parent")), n.copyPDFDict(a);
      }, this.copyPDFDict = function(i) {
        if (n.traversedObjects.has(i))
          return n.traversedObjects.get(i);
        var a = i.clone(n.dest);
        n.traversedObjects.set(i, a);
        for (var o = i.entries(), s = 0, u = o.length; s < u; s++) {
          var l = o[s], c = l[0], h = l[1];
          a.set(c, n.copy(h));
        }
        return a;
      }, this.copyPDFArray = function(i) {
        if (n.traversedObjects.has(i))
          return n.traversedObjects.get(i);
        var a = i.clone(n.dest);
        n.traversedObjects.set(i, a);
        for (var o = 0, s = i.size(); o < s; o++) {
          var u = i.get(o);
          a.set(o, n.copy(u));
        }
        return a;
      }, this.copyPDFStream = function(i) {
        if (n.traversedObjects.has(i))
          return n.traversedObjects.get(i);
        var a = i.clone(n.dest);
        n.traversedObjects.set(i, a);
        for (var o = i.dict.entries(), s = 0, u = o.length; s < u; s++) {
          var l = o[s], c = l[0], h = l[1];
          a.dict.set(c, n.copy(h));
        }
        return a;
      }, this.copyPDFIndirectObject = function(i) {
        var a = n.traversedObjects.has(i);
        if (!a) {
          var o = n.dest.nextRef();
          n.traversedObjects.set(i, o);
          var s = n.src.lookup(i);
          if (s) {
            var u = n.copy(s);
            n.dest.assign(o, u);
          }
        }
        return n.traversedObjects.get(i);
      }, this.src = e, this.dest = t;
    }
    return r.for = function(e, t) {
      return new r(e, t);
    }, r;
  })()
), vs = (
  /** @class */
  (function() {
    function r(e) {
      this.subsections = e ? [[e]] : [], this.chunkIdx = 0, this.chunkLength = e ? 1 : 0;
    }
    return r.prototype.addEntry = function(e, t) {
      this.append({ ref: e, offset: t, deleted: !1 });
    }, r.prototype.addDeletedEntry = function(e, t) {
      this.append({ ref: e, offset: t, deleted: !0 });
    }, r.prototype.toString = function() {
      for (var e = `xref
`, t = 0, n = this.subsections.length; t < n; t++) {
        var i = this.subsections[t];
        e += i[0].ref.objectNumber + " " + i.length + `
`;
        for (var a = 0, o = i.length; a < o; a++) {
          var s = i[a];
          e += Lt(String(s.offset), 10, "0"), e += " ", e += Lt(String(s.ref.generationNumber), 5, "0"), e += " ", e += s.deleted ? "f" : "n", e += ` 
`;
        }
      }
      return e;
    }, r.prototype.sizeInBytes = function() {
      for (var e = 5, t = 0, n = this.subsections.length; t < n; t++) {
        var i = this.subsections[t], a = i.length, o = i[0];
        e += 2, e += String(o.ref.objectNumber).length, e += String(a).length, e += 20 * a;
      }
      return e;
    }, r.prototype.copyBytesInto = function(e, t) {
      var n = t;
      return e[t++] = x.x, e[t++] = x.r, e[t++] = x.e, e[t++] = x.f, e[t++] = x.Newline, t += this.copySubsectionsIntoBuffer(this.subsections, e, t), t - n;
    }, r.prototype.copySubsectionsIntoBuffer = function(e, t, n) {
      for (var i = n, a = e.length, o = 0; o < a; o++) {
        var s = this.subsections[o], u = String(s[0].ref.objectNumber);
        n += it(u, t, n), t[n++] = x.Space;
        var l = String(s.length);
        n += it(l, t, n), t[n++] = x.Newline, n += this.copyEntriesIntoBuffer(s, t, n);
      }
      return n - i;
    }, r.prototype.copyEntriesIntoBuffer = function(e, t, n) {
      for (var i = e.length, a = 0; a < i; a++) {
        var o = e[a], s = Lt(String(o.offset), 10, "0");
        n += it(s, t, n), t[n++] = x.Space;
        var u = Lt(String(o.ref.generationNumber), 5, "0");
        n += it(u, t, n), t[n++] = x.Space, t[n++] = o.deleted ? x.f : x.n, t[n++] = x.Space, t[n++] = x.Newline;
      }
      return 20 * i;
    }, r.prototype.append = function(e) {
      if (this.chunkLength === 0) {
        this.subsections.push([e]), this.chunkIdx = 0, this.chunkLength = 1;
        return;
      }
      var t = this.subsections[this.chunkIdx], n = t[this.chunkLength - 1];
      e.ref.objectNumber - n.ref.objectNumber > 1 ? (this.subsections.push([e]), this.chunkIdx += 1, this.chunkLength = 1) : (t.push(e), this.chunkLength += 1);
    }, r.create = function() {
      return new r({
        ref: Ne.of(0, 65535),
        offset: 0,
        deleted: !0
      });
    }, r.createEmpty = function() {
      return new r();
    }, r;
  })()
), Da = (
  /** @class */
  (function() {
    function r(e) {
      this.lastXRefOffset = String(e);
    }
    return r.prototype.toString = function() {
      return `startxref
` + this.lastXRefOffset + `
%%EOF`;
    }, r.prototype.sizeInBytes = function() {
      return 16 + this.lastXRefOffset.length;
    }, r.prototype.copyBytesInto = function(e, t) {
      var n = t;
      return e[t++] = x.s, e[t++] = x.t, e[t++] = x.a, e[t++] = x.r, e[t++] = x.t, e[t++] = x.x, e[t++] = x.r, e[t++] = x.e, e[t++] = x.f, e[t++] = x.Newline, t += it(this.lastXRefOffset, e, t), e[t++] = x.Newline, e[t++] = x.Percent, e[t++] = x.Percent, e[t++] = x.E, e[t++] = x.O, e[t++] = x.F, t - n;
    }, r.forLastCrossRefSectionOffset = function(e) {
      return new r(e);
    }, r;
  })()
), Vl = (
  /** @class */
  (function() {
    function r(e) {
      this.dict = e;
    }
    return r.prototype.toString = function() {
      return `trailer
` + this.dict.toString();
    }, r.prototype.sizeInBytes = function() {
      return 8 + this.dict.sizeInBytes();
    }, r.prototype.copyBytesInto = function(e, t) {
      var n = t;
      return e[t++] = x.t, e[t++] = x.r, e[t++] = x.a, e[t++] = x.i, e[t++] = x.l, e[t++] = x.e, e[t++] = x.r, e[t++] = x.Newline, t += this.dict.copyBytesInto(e, t), t - n;
    }, r.of = function(e) {
      return new r(e);
    }, r;
  })()
), ps = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      i === void 0 && (i = !0);
      var a = r.call(this, t.obj({}), i) || this;
      return a.objects = n, a.offsets = a.computeObjectOffsets(), a.offsetsString = a.computeOffsetsString(), a.dict.set(b.of("Type"), b.of("ObjStm")), a.dict.set(b.of("N"), fe.of(a.objects.length)), a.dict.set(b.of("First"), fe.of(a.offsetsString.length)), a;
    }
    return e.prototype.getObjectsCount = function() {
      return this.objects.length;
    }, e.prototype.clone = function(t) {
      return e.withContextAndObjects(t || this.dict.context, this.objects.slice(), this.encode);
    }, e.prototype.getContentsString = function() {
      for (var t = this.offsetsString, n = 0, i = this.objects.length; n < i; n++) {
        var a = this.objects[n], o = a[1];
        t += o + `
`;
      }
      return t;
    }, e.prototype.getUnencodedContents = function() {
      for (var t = new Uint8Array(this.getUnencodedContentsSize()), n = it(this.offsetsString, t, 0), i = 0, a = this.objects.length; i < a; i++) {
        var o = this.objects[i], s = o[1];
        n += s.copyBytesInto(t, n), t[n++] = x.Newline;
      }
      return t;
    }, e.prototype.getUnencodedContentsSize = function() {
      return this.offsetsString.length + oi(this.offsets)[1] + oi(this.objects)[1].sizeInBytes() + 1;
    }, e.prototype.computeOffsetsString = function() {
      for (var t = "", n = 0, i = this.offsets.length; n < i; n++) {
        var a = this.offsets[n], o = a[0], s = a[1];
        t += o + " " + s + " ";
      }
      return t;
    }, e.prototype.computeObjectOffsets = function() {
      for (var t = 0, n = new Array(this.objects.length), i = 0, a = this.objects.length; i < a; i++) {
        var o = this.objects[i], s = o[0], u = o[1];
        n[i] = [s.objectNumber, t], t += u.sizeInBytes() + 1;
      }
      return n;
    }, e.withContextAndObjects = function(t, n, i) {
      return i === void 0 && (i = !0), new e(t, n, i);
    }, e;
  })(Pa)
), gs = (
  /** @class */
  (function() {
    function r(e, t) {
      var n = this;
      this.parsedObjects = 0, this.shouldWaitForTick = function(i) {
        return n.parsedObjects += i, n.parsedObjects % n.objectsPerTick === 0;
      }, this.context = e, this.objectsPerTick = t;
    }
    return r.prototype.serializeToBuffer = function() {
      return ge(this, void 0, void 0, function() {
        var e, t, n, i, a, o, s, u, l, c, h, d, v, y, w, F, S;
        return ye(this, function(A) {
          switch (A.label) {
            case 0:
              return [4, this.computeBufferSize()];
            case 1:
              e = A.sent(), t = e.size, n = e.header, i = e.indirectObjects, a = e.xref, o = e.trailerDict, s = e.trailer, u = 0, l = new Uint8Array(t), u += n.copyBytesInto(l, u), l[u++] = x.Newline, l[u++] = x.Newline, c = 0, h = i.length, A.label = 2;
            case 2:
              return c < h ? (d = i[c], v = d[0], y = d[1], w = String(v.objectNumber), u += it(w, l, u), l[u++] = x.Space, F = String(v.generationNumber), u += it(F, l, u), l[u++] = x.Space, l[u++] = x.o, l[u++] = x.b, l[u++] = x.j, l[u++] = x.Newline, u += y.copyBytesInto(l, u), l[u++] = x.Newline, l[u++] = x.e, l[u++] = x.n, l[u++] = x.d, l[u++] = x.o, l[u++] = x.b, l[u++] = x.j, l[u++] = x.Newline, l[u++] = x.Newline, S = y instanceof ps ? y.getObjectsCount() : 1, this.shouldWaitForTick(S) ? [4, Jr()] : [3, 4]) : [3, 5];
            case 3:
              A.sent(), A.label = 4;
            case 4:
              return c++, [3, 2];
            case 5:
              return a && (u += a.copyBytesInto(l, u), l[u++] = x.Newline), o && (u += o.copyBytesInto(l, u), l[u++] = x.Newline, l[u++] = x.Newline), u += s.copyBytesInto(l, u), [2, l];
          }
        });
      });
    }, r.prototype.computeIndirectObjectSize = function(e) {
      var t = e[0], n = e[1], i = t.sizeInBytes() + 3, a = n.sizeInBytes() + 9;
      return i + a;
    }, r.prototype.createTrailerDict = function() {
      return this.context.obj({
        Size: this.context.largestObjectNumber + 1,
        Root: this.context.trailerInfo.Root,
        Encrypt: this.context.trailerInfo.Encrypt,
        Info: this.context.trailerInfo.Info,
        ID: this.context.trailerInfo.ID
      });
    }, r.prototype.computeBufferSize = function() {
      return ge(this, void 0, void 0, function() {
        var e, t, n, i, a, o, s, u, l, c, h;
        return ye(this, function(d) {
          switch (d.label) {
            case 0:
              e = Ci.forVersion(1, 7), t = e.sizeInBytes() + 2, n = vs.create(), i = this.context.enumerateIndirectObjects(), a = 0, o = i.length, d.label = 1;
            case 1:
              return a < o ? (s = i[a], u = s[0], n.addEntry(u, t), t += this.computeIndirectObjectSize(s), this.shouldWaitForTick(1) ? [4, Jr()] : [3, 3]) : [3, 4];
            case 2:
              d.sent(), d.label = 3;
            case 3:
              return a++, [3, 1];
            case 4:
              return l = t, t += n.sizeInBytes() + 1, c = Vl.of(this.createTrailerDict()), t += c.sizeInBytes() + 2, h = Da.forLastCrossRefSectionOffset(l), t += h.sizeInBytes(), [2, { size: t, header: e, indirectObjects: i, xref: n, trailerDict: c, trailer: h }];
          }
        });
      });
    }, r.forContext = function(e, t) {
      return new r(e, t);
    }, r;
  })()
), ys = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = r.call(this) || this;
      return n.data = t, n;
    }
    return e.prototype.clone = function() {
      return e.of(this.data.slice());
    }, e.prototype.toString = function() {
      return "PDFInvalidObject(" + this.data.length + " bytes)";
    }, e.prototype.sizeInBytes = function() {
      return this.data.length;
    }, e.prototype.copyBytesInto = function(t, n) {
      for (var i = this.data.length, a = 0; a < i; a++)
        t[n++] = this.data[a];
      return i;
    }, e.of = function(t) {
      return new e(t);
    }, e;
  })(dt)
), dr;
(function(r) {
  r[r.Deleted = 0] = "Deleted", r[r.Uncompressed = 1] = "Uncompressed", r[r.Compressed = 2] = "Compressed";
})(dr || (dr = {}));
var Ll = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      i === void 0 && (i = !0);
      var a = r.call(this, t, i) || this;
      return a.computeIndex = function() {
        for (var o = [], s = 0, u = 0, l = a.entries.length; u < l; u++) {
          var c = a.entries[u], h = a.entries[u - 1];
          u === 0 ? o.push(c.ref.objectNumber) : c.ref.objectNumber - h.ref.objectNumber > 1 && (o.push(s), o.push(c.ref.objectNumber), s = 0), s += 1;
        }
        return o.push(s), o;
      }, a.computeEntryTuples = function() {
        for (var o = new Array(a.entries.length), s = 0, u = a.entries.length; s < u; s++) {
          var l = a.entries[s];
          if (l.type === dr.Deleted) {
            var c = l.type, h = l.nextFreeObjectNumber, d = l.ref;
            o[s] = [c, h, d.generationNumber];
          }
          if (l.type === dr.Uncompressed) {
            var c = l.type, v = l.offset, d = l.ref;
            o[s] = [c, v, d.generationNumber];
          }
          if (l.type === dr.Compressed) {
            var c = l.type, y = l.objectStreamRef, w = l.index;
            o[s] = [c, y.objectNumber, w];
          }
        }
        return o;
      }, a.computeMaxEntryByteWidths = function() {
        for (var o = a.entryTuplesCache.access(), s = [0, 0, 0], u = 0, l = o.length; u < l; u++) {
          var c = o[u], h = c[0], d = c[1], v = c[2], y = ei(h), w = ei(d), F = ei(v);
          y > s[0] && (s[0] = y), w > s[1] && (s[1] = w), F > s[2] && (s[2] = F);
        }
        return s;
      }, a.entries = n || [], a.entryTuplesCache = nr.populatedBy(a.computeEntryTuples), a.maxByteWidthsCache = nr.populatedBy(a.computeMaxEntryByteWidths), a.indexCache = nr.populatedBy(a.computeIndex), t.set(b.of("Type"), b.of("XRef")), a;
    }
    return e.prototype.addDeletedEntry = function(t, n) {
      var i = dr.Deleted;
      this.entries.push({ type: i, ref: t, nextFreeObjectNumber: n }), this.entryTuplesCache.invalidate(), this.maxByteWidthsCache.invalidate(), this.indexCache.invalidate(), this.contentsCache.invalidate();
    }, e.prototype.addUncompressedEntry = function(t, n) {
      var i = dr.Uncompressed;
      this.entries.push({ type: i, ref: t, offset: n }), this.entryTuplesCache.invalidate(), this.maxByteWidthsCache.invalidate(), this.indexCache.invalidate(), this.contentsCache.invalidate();
    }, e.prototype.addCompressedEntry = function(t, n, i) {
      var a = dr.Compressed;
      this.entries.push({ type: a, ref: t, objectStreamRef: n, index: i }), this.entryTuplesCache.invalidate(), this.maxByteWidthsCache.invalidate(), this.indexCache.invalidate(), this.contentsCache.invalidate();
    }, e.prototype.clone = function(t) {
      var n = this, i = n.dict, a = n.entries, o = n.encode;
      return e.of(i.clone(t), a.slice(), o);
    }, e.prototype.getContentsString = function() {
      for (var t = this.entryTuplesCache.access(), n = this.maxByteWidthsCache.access(), i = "", a = 0, o = t.length; a < o; a++) {
        for (var s = t[a], u = s[0], l = s[1], c = s[2], h = Wr(Vr(u)), d = Wr(Vr(l)), v = Wr(Vr(c)), y = n[0] - 1; y >= 0; y--)
          i += (h[y] || 0).toString(2);
        for (var y = n[1] - 1; y >= 0; y--)
          i += (d[y] || 0).toString(2);
        for (var y = n[2] - 1; y >= 0; y--)
          i += (v[y] || 0).toString(2);
      }
      return i;
    }, e.prototype.getUnencodedContents = function() {
      for (var t = this.entryTuplesCache.access(), n = this.maxByteWidthsCache.access(), i = new Uint8Array(this.getUnencodedContentsSize()), a = 0, o = 0, s = t.length; o < s; o++) {
        for (var u = t[o], l = u[0], c = u[1], h = u[2], d = Wr(Vr(l)), v = Wr(Vr(c)), y = Wr(Vr(h)), w = n[0] - 1; w >= 0; w--)
          i[a++] = d[w] || 0;
        for (var w = n[1] - 1; w >= 0; w--)
          i[a++] = v[w] || 0;
        for (var w = n[2] - 1; w >= 0; w--)
          i[a++] = y[w] || 0;
      }
      return i;
    }, e.prototype.getUnencodedContentsSize = function() {
      var t = this.maxByteWidthsCache.access(), n = Fu(t);
      return n * this.entries.length;
    }, e.prototype.updateDict = function() {
      r.prototype.updateDict.call(this);
      var t = this.maxByteWidthsCache.access(), n = this.indexCache.access(), i = this.dict.context;
      this.dict.set(b.of("W"), i.obj(t)), this.dict.set(b.of("Index"), i.obj(n));
    }, e.create = function(t, n) {
      n === void 0 && (n = !0);
      var i = new e(t, [], n);
      return i.addDeletedEntry(Ne.of(0, 65535), 0), i;
    }, e.of = function(t, n, i) {
      return i === void 0 && (i = !0), new e(t, n, i);
    }, e;
  })(Pa)
), ql = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i, a) {
      var o = r.call(this, t, n) || this;
      return o.encodeStreams = i, o.objectsPerStream = a, o;
    }
    return e.prototype.computeBufferSize = function() {
      return ge(this, void 0, void 0, function() {
        var t, n, i, a, o, s, u, l, y, w, c, S, h, d, F, v, y, w, F, S, A, C, E, O;
        return ye(this, function(D) {
          switch (D.label) {
            case 0:
              t = this.context.largestObjectNumber + 1, n = Ci.forVersion(1, 7), i = n.sizeInBytes() + 2, a = Ll.create(this.createTrailerDict(), this.encodeStreams), o = [], s = [], u = [], l = this.context.enumerateIndirectObjects(), y = 0, w = l.length, D.label = 1;
            case 1:
              return y < w ? (c = l[y], S = c[0], h = c[1], d = S === this.context.trailerInfo.Encrypt || h instanceof wt || h instanceof ys || S.generationNumber !== 0, d ? (o.push(c), a.addUncompressedEntry(S, i), i += this.computeIndirectObjectSize(c), this.shouldWaitForTick(1) ? [4, Jr()] : [3, 3]) : [3, 4]) : [3, 6];
            case 2:
              D.sent(), D.label = 3;
            case 3:
              return [3, 5];
            case 4:
              F = oi(s), v = oi(u), (!F || F.length % this.objectsPerStream === 0) && (F = [], s.push(F), v = Ne.of(t++), u.push(v)), a.addCompressedEntry(S, v, F.length), F.push(c), D.label = 5;
            case 5:
              return y++, [3, 1];
            case 6:
              y = 0, w = s.length, D.label = 7;
            case 7:
              return y < w ? (F = s[y], S = u[y], A = ps.withContextAndObjects(this.context, F, this.encodeStreams), a.addUncompressedEntry(S, i), i += this.computeIndirectObjectSize([S, A]), o.push([S, A]), this.shouldWaitForTick(F.length) ? [4, Jr()] : [3, 9]) : [3, 10];
            case 8:
              D.sent(), D.label = 9;
            case 9:
              return y++, [3, 7];
            case 10:
              return C = Ne.of(t++), a.dict.set(b.of("Size"), fe.of(t)), a.addUncompressedEntry(C, i), E = i, i += this.computeIndirectObjectSize([C, a]), o.push([C, a]), O = Da.forLastCrossRefSectionOffset(E), i += O.sizeInBytes(), [2, { size: i, header: n, indirectObjects: o, trailer: O }];
          }
        });
      });
    }, e.forContext = function(t, n, i, a) {
      return i === void 0 && (i = !0), a === void 0 && (a = 50), new e(t, n, i, a);
    }, e;
  })(gs)
), se = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = r.call(this) || this;
      return n.value = t, n;
    }
    return e.prototype.asBytes = function() {
      for (var t = this.value + (this.value.length % 2 === 1 ? "0" : ""), n = t.length, i = new Uint8Array(t.length / 2), a = 0, o = 0; a < n; ) {
        var s = parseInt(t.substring(a, a + 2), 16);
        i[o] = s, a += 2, o += 1;
      }
      return i;
    }, e.prototype.decodeText = function() {
      var t = this.asBytes();
      return ns(t) ? es(t) : hs(t);
    }, e.prototype.decodeDate = function() {
      var t = this.decodeText(), n = Qo(t);
      if (!n)
        throw new ds(t);
      return n;
    }, e.prototype.asString = function() {
      return this.value;
    }, e.prototype.clone = function() {
      return e.of(this.value);
    }, e.prototype.toString = function() {
      return "<" + this.value + ">";
    }, e.prototype.sizeInBytes = function() {
      return this.value.length + 2;
    }, e.prototype.copyBytesInto = function(t, n) {
      return t[n++] = x.LessThan, n += it(this.value, t, n), t[n++] = x.GreaterThan, this.value.length + 2;
    }, e.of = function(t) {
      return new e(t);
    }, e.fromText = function(t) {
      for (var n = Pu(t), i = "", a = 0, o = n.length; a < o; a++)
        i += En(n[a], 4);
      return new e(i);
    }, e;
  })(dt)
), li = (
  /** @class */
  (function() {
    function r(e, t) {
      this.encoding = e === Pn.ZapfDingbats ? Hn.ZapfDingbats : e === Pn.Symbol ? Hn.Symbol : Hn.WinAnsi, this.font = ul.load(e), this.fontName = this.font.FontName, this.customName = t;
    }
    return r.prototype.encodeText = function(e) {
      for (var t = this.encodeTextAsGlyphs(e), n = new Array(t.length), i = 0, a = t.length; i < a; i++)
        n[i] = wi(t[i].code);
      return se.of(n.join(""));
    }, r.prototype.widthOfTextAtSize = function(e, t) {
      for (var n = this.encodeTextAsGlyphs(e), i = 0, a = 0, o = n.length; a < o; a++) {
        var s = n[a].name, u = (n[a + 1] || {}).name, l = this.font.getXAxisKerningForPair(s, u) || 0;
        i += this.widthOfGlyph(s) + l;
      }
      var c = t / 1e3;
      return i * c;
    }, r.prototype.heightOfFontAtSize = function(e, t) {
      t === void 0 && (t = {});
      var n = t.descender, i = n === void 0 ? !0 : n, a = this.font, o = a.Ascender, s = a.Descender, u = a.FontBBox, l = o || u[3], c = s || u[1], h = l - c;
      return i || (h += s || 0), h / 1e3 * e;
    }, r.prototype.sizeOfFontAtHeight = function(e) {
      var t = this.font, n = t.Ascender, i = t.Descender, a = t.FontBBox, o = n || a[3], s = i || a[1];
      return 1e3 * e / (o - s);
    }, r.prototype.embedIntoContext = function(e, t) {
      var n = e.obj({
        Type: "Font",
        Subtype: "Type1",
        BaseFont: this.customName || this.fontName,
        Encoding: this.encoding === Hn.WinAnsi ? "WinAnsiEncoding" : void 0
      });
      return t ? (e.assign(t, n), t) : e.register(n);
    }, r.prototype.widthOfGlyph = function(e) {
      return this.font.getWidthOfGlyph(e) || 250;
    }, r.prototype.encodeTextAsGlyphs = function(e) {
      for (var t = Array.from(e), n = new Array(t.length), i = 0, a = t.length; i < a; i++) {
        var o = cu(t[i]);
        n[i] = this.encoding.encodeUnicodeCodePoint(o);
      }
      return n;
    }, r.for = function(e, t) {
      return new r(e, t);
    }, r;
  })()
), Hl = function(r, e) {
  for (var t = new Array(r.length), n = 0, i = r.length; n < i; n++) {
    var a = r[n], o = ko(ti(e(a))), s = ko.apply(void 0, a.codePoints.map(Gl));
    t[n] = [o, s];
  }
  return Kl(t);
}, Kl = function(r) {
  return `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange
` + r.length + ` beginbfchar
` + r.map(function(e) {
    var t = e[0], n = e[1];
    return t + " " + n;
  }).join(`
`) + `
endbfchar
endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
}, ko = function() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r[e] = arguments[e];
  return "<" + r.join("") + ">";
}, ti = function(r) {
  return En(r, 4);
}, Gl = function(r) {
  if (Du(r))
    return ti(r);
  if (Au(r)) {
    var e = _o(r), t = $o(r);
    return "" + ti(e) + ti(t);
  }
  var n = wi(r), i = "0x" + n + " is not a valid UTF-8 or UTF-16 codepoint.";
  throw new Error(i);
}, Xl = function(r) {
  var e = 0, t = function(n) {
    e |= 1 << n - 1;
  };
  return r.fixedPitch && t(1), r.serif && t(2), t(3), r.script && t(4), r.nonsymbolic && t(6), r.italic && t(7), r.allCap && t(17), r.smallCap && t(18), r.forceBold && t(19), e;
}, Zl = function(r) {
  var e = r["OS/2"] ? r["OS/2"].sFamilyClass : 0, t = Xl({
    fixedPitch: r.post.isFixedPitch,
    serif: 1 <= e && e <= 7,
    script: e === 10,
    italic: r.head.macStyle.italic
  });
  return t;
}, Ee = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = r.call(this) || this;
      return n.value = t, n;
    }
    return e.prototype.asBytes = function() {
      for (var t = [], n = "", i = !1, a = function(h) {
        h !== void 0 && t.push(h), i = !1;
      }, o = 0, s = this.value.length; o < s; o++) {
        var u = this.value[o], l = he(u), c = this.value[o + 1];
        i ? l === x.Newline || l === x.CarriageReturn ? a() : l === x.n ? a(x.Newline) : l === x.r ? a(x.CarriageReturn) : l === x.t ? a(x.Tab) : l === x.b ? a(x.Backspace) : l === x.f ? a(x.FormFeed) : l === x.LeftParen ? a(x.LeftParen) : l === x.RightParen ? a(x.RightParen) : l === x.Backspace ? a(x.BackSlash) : l >= x.Zero && l <= x.Seven ? (n += u, (n.length === 3 || !(c >= "0" && c <= "7")) && (a(parseInt(n, 8)), n = "")) : a(l) : l === x.BackSlash ? i = !0 : a(l);
      }
      return new Uint8Array(t);
    }, e.prototype.decodeText = function() {
      var t = this.asBytes();
      return ns(t) ? es(t) : hs(t);
    }, e.prototype.decodeDate = function() {
      var t = this.decodeText(), n = Qo(t);
      if (!n)
        throw new ds(t);
      return n;
    }, e.prototype.asString = function() {
      return this.value;
    }, e.prototype.clone = function() {
      return e.of(this.value);
    }, e.prototype.toString = function() {
      return "(" + this.value + ")";
    }, e.prototype.sizeInBytes = function() {
      return this.value.length + 2;
    }, e.prototype.copyBytesInto = function(t, n) {
      return t[n++] = x.LeftParen, n += it(this.value, t, n), t[n++] = x.RightParen, this.value.length + 2;
    }, e.of = function(t) {
      return new e(t);
    }, e.fromDate = function(t) {
      var n = Lt(String(t.getUTCFullYear()), 4, "0"), i = Lt(String(t.getUTCMonth() + 1), 2, "0"), a = Lt(String(t.getUTCDate()), 2, "0"), o = Lt(String(t.getUTCHours()), 2, "0"), s = Lt(String(t.getUTCMinutes()), 2, "0"), u = Lt(String(t.getUTCSeconds()), 2, "0");
      return new e("D:" + n + i + a + o + s + u + "Z");
    }, e;
  })(dt)
), Aa = (
  /** @class */
  (function() {
    function r(e, t, n, i) {
      var a = this;
      this.allGlyphsInFontSortedById = function() {
        for (var o = new Array(a.font.characterSet.length), s = 0, u = o.length; s < u; s++) {
          var l = a.font.characterSet[s];
          o[s] = a.font.glyphForCodePoint(l);
        }
        return Su(o.sort(wu), function(c) {
          return c.id;
        });
      }, this.font = e, this.scale = 1e3 / this.font.unitsPerEm, this.fontData = t, this.fontName = this.font.postscriptName || "Font", this.customName = n, this.fontFeatures = i, this.baseFontName = "", this.glyphCache = nr.populatedBy(this.allGlyphsInFontSortedById);
    }
    return r.for = function(e, t, n, i) {
      return ge(this, void 0, void 0, function() {
        var a;
        return ye(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, e.create(t)];
            case 1:
              return a = o.sent(), [2, new r(a, t, n, i)];
          }
        });
      });
    }, r.prototype.encodeText = function(e) {
      for (var t = this.font.layout(e, this.fontFeatures).glyphs, n = new Array(t.length), i = 0, a = t.length; i < a; i++)
        n[i] = En(t[i].id, 4);
      return se.of(n.join(""));
    }, r.prototype.widthOfTextAtSize = function(e, t) {
      for (var n = this.font.layout(e, this.fontFeatures).glyphs, i = 0, a = 0, o = n.length; a < o; a++)
        i += n[a].advanceWidth * this.scale;
      var s = t / 1e3;
      return i * s;
    }, r.prototype.heightOfFontAtSize = function(e, t) {
      t === void 0 && (t = {});
      var n = t.descender, i = n === void 0 ? !0 : n, a = this.font, o = a.ascent, s = a.descent, u = a.bbox, l = (o || u.maxY) * this.scale, c = (s || u.minY) * this.scale, h = l - c;
      return i || (h -= Math.abs(s) || 0), h / 1e3 * e;
    }, r.prototype.sizeOfFontAtHeight = function(e) {
      var t = this.font, n = t.ascent, i = t.descent, a = t.bbox, o = (n || a.maxY) * this.scale, s = (i || a.minY) * this.scale;
      return 1e3 * e / (o - s);
    }, r.prototype.embedIntoContext = function(e, t) {
      return this.baseFontName = this.customName || e.addRandomSuffix(this.fontName), this.embedFontDict(e, t);
    }, r.prototype.embedFontDict = function(e, t) {
      return ge(this, void 0, void 0, function() {
        var n, i, a;
        return ye(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.embedCIDFontDict(e)];
            case 1:
              return n = o.sent(), i = this.embedUnicodeCmap(e), a = e.obj({
                Type: "Font",
                Subtype: "Type0",
                BaseFont: this.baseFontName,
                Encoding: "Identity-H",
                DescendantFonts: [n],
                ToUnicode: i
              }), t ? (e.assign(t, a), [2, t]) : [2, e.register(a)];
          }
        });
      });
    }, r.prototype.isCFF = function() {
      return this.font.cff;
    }, r.prototype.embedCIDFontDict = function(e) {
      return ge(this, void 0, void 0, function() {
        var t, n;
        return ye(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.embedFontDescriptor(e)];
            case 1:
              return t = i.sent(), n = e.obj({
                Type: "Font",
                Subtype: this.isCFF() ? "CIDFontType0" : "CIDFontType2",
                CIDToGIDMap: "Identity",
                BaseFont: this.baseFontName,
                CIDSystemInfo: {
                  Registry: Ee.of("Adobe"),
                  Ordering: Ee.of("Identity"),
                  Supplement: 0
                },
                FontDescriptor: t,
                W: this.computeWidths()
              }), [2, e.register(n)];
          }
        });
      });
    }, r.prototype.embedFontDescriptor = function(e) {
      return ge(this, void 0, void 0, function() {
        var t, n, i, a, o, s, u, l, c, h, d, v, y, w, F;
        return ye(this, function(S) {
          switch (S.label) {
            case 0:
              return [4, this.embedFontStream(e)];
            case 1:
              return t = S.sent(), n = this.scale, i = this.font, a = i.italicAngle, o = i.ascent, s = i.descent, u = i.capHeight, l = i.xHeight, c = this.font.bbox, h = c.minX, d = c.minY, v = c.maxX, y = c.maxY, w = e.obj((F = {
                Type: "FontDescriptor",
                FontName: this.baseFontName,
                Flags: Zl(this.font),
                FontBBox: [h * n, d * n, v * n, y * n],
                ItalicAngle: a,
                Ascent: o * n,
                Descent: s * n,
                CapHeight: (u || o) * n,
                XHeight: (l || 0) * n,
                // Not sure how to compute/find this, nor is anybody else really:
                // https://stackoverflow.com/questions/35485179/stemv-value-of-the-truetype-font
                StemV: 0
              }, F[this.isCFF() ? "FontFile3" : "FontFile2"] = t, F)), [2, e.register(w)];
          }
        });
      });
    }, r.prototype.serializeFont = function() {
      return ge(this, void 0, void 0, function() {
        return ye(this, function(e) {
          return [2, this.fontData];
        });
      });
    }, r.prototype.embedFontStream = function(e) {
      return ge(this, void 0, void 0, function() {
        var t, n, i;
        return ye(this, function(a) {
          switch (a.label) {
            case 0:
              return i = (n = e).flateStream, [4, this.serializeFont()];
            case 1:
              return t = i.apply(n, [a.sent(), {
                Subtype: this.isCFF() ? "CIDFontType0C" : void 0
              }]), [2, e.register(t)];
          }
        });
      });
    }, r.prototype.embedUnicodeCmap = function(e) {
      var t = Hl(this.glyphCache.access(), this.glyphId.bind(this)), n = e.flateStream(t);
      return e.register(n);
    }, r.prototype.glyphId = function(e) {
      return e ? e.id : -1;
    }, r.prototype.computeWidths = function() {
      for (var e = this.glyphCache.access(), t = [], n = [], i = 0, a = e.length; i < a; i++) {
        var o = e[i], s = e[i - 1], u = this.glyphId(o), l = this.glyphId(s);
        i === 0 ? t.push(u) : u - l !== 1 && (t.push(n), t.push(u), n = []), n.push(o.advanceWidth * this.scale);
      }
      return t.push(n), t;
    }, r;
  })()
), Yl = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i, a) {
      var o = r.call(this, t, n, i, a) || this;
      return o.subset = o.font.createSubset(), o.glyphs = [], o.glyphCache = nr.populatedBy(function() {
        return o.glyphs;
      }), o.glyphIdMap = /* @__PURE__ */ new Map(), o;
    }
    return e.for = function(t, n, i, a) {
      return ge(this, void 0, void 0, function() {
        var o;
        return ye(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, t.create(n)];
            case 1:
              return o = s.sent(), [2, new e(o, n, i, a)];
          }
        });
      });
    }, e.prototype.encodeText = function(t) {
      for (var n = this.font.layout(t, this.fontFeatures).glyphs, i = new Array(n.length), a = 0, o = n.length; a < o; a++) {
        var s = n[a], u = this.subset.includeGlyph(s);
        this.glyphs[u - 1] = s, this.glyphIdMap.set(s.id, u), i[a] = En(u, 4);
      }
      return this.glyphCache.invalidate(), se.of(i.join(""));
    }, e.prototype.isCFF = function() {
      return this.subset.cff;
    }, e.prototype.glyphId = function(t) {
      return t ? this.glyphIdMap.get(t.id) : -1;
    }, e.prototype.serializeFont = function() {
      var t = this;
      return new Promise(function(n, i) {
        var a = [];
        t.subset.encodeStream().on("data", function(o) {
          return a.push(o);
        }).on("end", function() {
          return n(xu(a));
        }).on("error", function(o) {
          return i(o);
        });
      });
    }, e;
  })(Aa)
), ha;
(function(r) {
  r.Source = "Source", r.Data = "Data", r.Alternative = "Alternative", r.Supplement = "Supplement", r.EncryptedPayload = "EncryptedPayload", r.FormData = "EncryptedPayload", r.Schema = "Schema", r.Unspecified = "Unspecified";
})(ha || (ha = {}));
var Ql = (
  /** @class */
  (function() {
    function r(e, t, n) {
      n === void 0 && (n = {}), this.fileData = e, this.fileName = t, this.options = n;
    }
    return r.for = function(e, t, n) {
      return n === void 0 && (n = {}), new r(e, t, n);
    }, r.prototype.embedIntoContext = function(e, t) {
      return ge(this, void 0, void 0, function() {
        var n, i, a, o, s, u, l, c, h;
        return ye(this, function(d) {
          return n = this.options, i = n.mimeType, a = n.description, o = n.creationDate, s = n.modificationDate, u = n.afRelationship, l = e.flateStream(this.fileData, {
            Type: "EmbeddedFile",
            Subtype: i ?? void 0,
            Params: {
              Size: this.fileData.length,
              CreationDate: o ? Ee.fromDate(o) : void 0,
              ModDate: s ? Ee.fromDate(s) : void 0
            }
          }), c = e.register(l), h = e.obj({
            Type: "Filespec",
            F: Ee.of(this.fileName),
            UF: se.fromText(this.fileName),
            EF: { F: c },
            Desc: a ? se.fromText(a) : void 0,
            AFRelationship: u ?? void 0
          }), t ? (e.assign(t, h), [2, t]) : [2, e.register(h)];
        });
      });
    }, r;
  })()
), Co = [
  65472,
  65473,
  65474,
  65475,
  65477,
  65478,
  65479,
  65480,
  65481,
  65482,
  65483,
  65484,
  65485,
  65486,
  65487
], Qr;
(function(r) {
  r.DeviceGray = "DeviceGray", r.DeviceRGB = "DeviceRGB", r.DeviceCMYK = "DeviceCMYK";
})(Qr || (Qr = {}));
var Jl = {
  1: Qr.DeviceGray,
  3: Qr.DeviceRGB,
  4: Qr.DeviceCMYK
}, ms = (
  /** @class */
  (function() {
    function r(e, t, n, i, a) {
      this.imageData = e, this.bitsPerComponent = t, this.width = n, this.height = i, this.colorSpace = a;
    }
    return r.for = function(e) {
      return ge(this, void 0, void 0, function() {
        var t, n, i, a, o, s, u, l, c, h;
        return ye(this, function(d) {
          if (t = new DataView(e.buffer), n = t.getUint16(0), n !== 65496)
            throw new Error("SOI not found in JPEG");
          for (i = 2; i < t.byteLength && (a = t.getUint16(i), i += 2, !Co.includes(a)); )
            i += t.getUint16(i);
          if (!Co.includes(a))
            throw new Error("Invalid JPEG");
          if (i += 2, o = t.getUint8(i++), s = t.getUint16(i), i += 2, u = t.getUint16(i), i += 2, l = t.getUint8(i++), c = Jl[l], !c)
            throw new Error("Unknown JPEG channel.");
          return h = c, [2, new r(e, o, u, s, h)];
        });
      });
    }, r.prototype.embedIntoContext = function(e, t) {
      return ge(this, void 0, void 0, function() {
        var n;
        return ye(this, function(i) {
          return n = e.stream(this.imageData, {
            Type: "XObject",
            Subtype: "Image",
            BitsPerComponent: this.bitsPerComponent,
            Width: this.width,
            Height: this.height,
            ColorSpace: this.colorSpace,
            Filter: "DCTDecode",
            // CMYK JPEG streams in PDF are typically stored complemented,
            // with 1 as 'off' and 0 as 'on' (PDF 32000-1:2008, 8.6.4.4).
            //
            // Standalone CMYK JPEG (usually exported by Photoshop) are
            // stored inverse, with 0 as 'off' and 1 as 'on', like RGB.
            //
            // Applying a swap here as a hedge that most bytes passing
            // through this method will benefit from it.
            Decode: this.colorSpace === Qr.DeviceCMYK ? [1, 0, 1, 0, 1, 0, 1, 0] : void 0
          }), t ? (e.assign(t, n), [2, t]) : [2, e.register(n)];
        });
      });
    }, r;
  })()
), L = {};
L.toRGBA8 = function(r) {
  var e = r.width, t = r.height;
  if (r.tabs.acTL == null) return [L.toRGBA8.decodeImage(r.data, e, t, r).buffer];
  var n = [];
  r.frames[0].data == null && (r.frames[0].data = r.data);
  for (var i = e * t * 4, a = new Uint8Array(i), o = new Uint8Array(i), s = new Uint8Array(i), u = 0; u < r.frames.length; u++) {
    var l = r.frames[u], c = l.rect.x, h = l.rect.y, d = l.rect.width, v = l.rect.height, y = L.toRGBA8.decodeImage(l.data, d, v, r);
    if (u != 0) for (var w = 0; w < i; w++) s[w] = a[w];
    if (l.blend == 0 ? L._copyTile(y, d, v, a, e, t, c, h, 0) : l.blend == 1 && L._copyTile(y, d, v, a, e, t, c, h, 1), n.push(a.buffer.slice(0)), l.dispose != 0) {
      if (l.dispose == 1) L._copyTile(o, d, v, a, e, t, c, h, 0);
      else if (l.dispose == 2) for (var w = 0; w < i; w++) a[w] = s[w];
    }
  }
  return n;
};
L.toRGBA8.decodeImage = function(r, e, t, n) {
  var i = e * t, a = L.decode._getBPP(n), o = Math.ceil(e * a / 8), s = new Uint8Array(i * 4), u = new Uint32Array(s.buffer), l = n.ctype, c = n.depth, h = L._bin.readUshort;
  if (l == 6) {
    var d = i << 2;
    if (c == 8) for (var v = 0; v < d; v += 4)
      s[v] = r[v], s[v + 1] = r[v + 1], s[v + 2] = r[v + 2], s[v + 3] = r[v + 3];
    if (c == 16) for (var v = 0; v < d; v++)
      s[v] = r[v << 1];
  } else if (l == 2) {
    var y = n.tabs.tRNS;
    if (y == null) {
      if (c == 8) for (var v = 0; v < i; v++) {
        var w = v * 3;
        u[v] = 255 << 24 | r[w + 2] << 16 | r[w + 1] << 8 | r[w];
      }
      if (c == 16) for (var v = 0; v < i; v++) {
        var w = v * 6;
        u[v] = 255 << 24 | r[w + 4] << 16 | r[w + 2] << 8 | r[w];
      }
    } else {
      var F = y[0], S = y[1], A = y[2];
      if (c == 8) for (var v = 0; v < i; v++) {
        var C = v << 2, w = v * 3;
        u[v] = 255 << 24 | r[w + 2] << 16 | r[w + 1] << 8 | r[w], r[w] == F && r[w + 1] == S && r[w + 2] == A && (s[C + 3] = 0);
      }
      if (c == 16) for (var v = 0; v < i; v++) {
        var C = v << 2, w = v * 6;
        u[v] = 255 << 24 | r[w + 4] << 16 | r[w + 2] << 8 | r[w], h(r, w) == F && h(r, w + 2) == S && h(r, w + 4) == A && (s[C + 3] = 0);
      }
    }
  } else if (l == 3) {
    var E = n.tabs.PLTE, O = n.tabs.tRNS, D = O ? O.length : 0;
    if (c == 1) for (var P = 0; P < t; P++)
      for (var M = P * o, U = P * e, v = 0; v < e; v++) {
        var C = U + v << 2, W = r[M + (v >> 3)] >> 7 - ((v & 7) << 0) & 1, V = 3 * W;
        s[C] = E[V], s[C + 1] = E[V + 1], s[C + 2] = E[V + 2], s[C + 3] = W < D ? O[W] : 255;
      }
    if (c == 2) for (var P = 0; P < t; P++)
      for (var M = P * o, U = P * e, v = 0; v < e; v++) {
        var C = U + v << 2, W = r[M + (v >> 2)] >> 6 - ((v & 3) << 1) & 3, V = 3 * W;
        s[C] = E[V], s[C + 1] = E[V + 1], s[C + 2] = E[V + 2], s[C + 3] = W < D ? O[W] : 255;
      }
    if (c == 4) for (var P = 0; P < t; P++)
      for (var M = P * o, U = P * e, v = 0; v < e; v++) {
        var C = U + v << 2, W = r[M + (v >> 1)] >> 4 - ((v & 1) << 2) & 15, V = 3 * W;
        s[C] = E[V], s[C + 1] = E[V + 1], s[C + 2] = E[V + 2], s[C + 3] = W < D ? O[W] : 255;
      }
    if (c == 8) for (var v = 0; v < i; v++) {
      var C = v << 2, W = r[v], V = 3 * W;
      s[C] = E[V], s[C + 1] = E[V + 1], s[C + 2] = E[V + 2], s[C + 3] = W < D ? O[W] : 255;
    }
  } else if (l == 4) {
    if (c == 8) for (var v = 0; v < i; v++) {
      var C = v << 2, Z = v << 1, I = r[Z];
      s[C] = I, s[C + 1] = I, s[C + 2] = I, s[C + 3] = r[Z + 1];
    }
    if (c == 16) for (var v = 0; v < i; v++) {
      var C = v << 2, Z = v << 2, I = r[Z];
      s[C] = I, s[C + 1] = I, s[C + 2] = I, s[C + 3] = r[Z + 2];
    }
  } else if (l == 0)
    for (var F = n.tabs.tRNS ? n.tabs.tRNS : -1, P = 0; P < t; P++) {
      var J = P * o, re = P * e;
      if (c == 1) for (var Y = 0; Y < e; Y++) {
        var I = 255 * (r[J + (Y >>> 3)] >>> 7 - (Y & 7) & 1), Q = I == F * 255 ? 0 : 255;
        u[re + Y] = Q << 24 | I << 16 | I << 8 | I;
      }
      else if (c == 2) for (var Y = 0; Y < e; Y++) {
        var I = 85 * (r[J + (Y >>> 2)] >>> 6 - ((Y & 3) << 1) & 3), Q = I == F * 85 ? 0 : 255;
        u[re + Y] = Q << 24 | I << 16 | I << 8 | I;
      }
      else if (c == 4) for (var Y = 0; Y < e; Y++) {
        var I = 17 * (r[J + (Y >>> 1)] >>> 4 - ((Y & 1) << 2) & 15), Q = I == F * 17 ? 0 : 255;
        u[re + Y] = Q << 24 | I << 16 | I << 8 | I;
      }
      else if (c == 8) for (var Y = 0; Y < e; Y++) {
        var I = r[J + Y], Q = I == F ? 0 : 255;
        u[re + Y] = Q << 24 | I << 16 | I << 8 | I;
      }
      else if (c == 16) for (var Y = 0; Y < e; Y++) {
        var I = r[J + (Y << 1)], Q = h(r, J + (Y << v)) == F ? 0 : 255;
        u[re + Y] = Q << 24 | I << 16 | I << 8 | I;
      }
    }
  return s;
};
L.decode = function(r) {
  for (var e = new Uint8Array(r), t = 8, n = L._bin, i = n.readUshort, a = n.readUint, o = { tabs: {}, frames: [] }, s = new Uint8Array(e.length), u = 0, l, c = 0, h = [137, 80, 78, 71, 13, 10, 26, 10], d = 0; d < 8; d++) if (e[d] != h[d]) throw "The input is not a PNG file!";
  for (; t < e.length; ) {
    var v = n.readUint(e, t);
    t += 4;
    var y = n.readASCII(e, t, 4);
    if (t += 4, y == "IHDR")
      L.decode._IHDR(e, t, o);
    else if (y == "IDAT") {
      for (var d = 0; d < v; d++) s[u + d] = e[t + d];
      u += v;
    } else if (y == "acTL")
      o.tabs[y] = { num_frames: a(e, t), num_plays: a(e, t + 4) }, l = new Uint8Array(e.length);
    else if (y == "fcTL") {
      if (c != 0) {
        var w = o.frames[o.frames.length - 1];
        w.data = L.decode._decompress(o, l.slice(0, c), w.rect.width, w.rect.height), c = 0;
      }
      var F = { x: a(e, t + 12), y: a(e, t + 16), width: a(e, t + 4), height: a(e, t + 8) }, S = i(e, t + 22);
      S = i(e, t + 20) / (S == 0 ? 100 : S);
      var A = { rect: F, delay: Math.round(S * 1e3), dispose: e[t + 24], blend: e[t + 25] };
      o.frames.push(A);
    } else if (y == "fdAT") {
      for (var d = 0; d < v - 4; d++) l[c + d] = e[t + d + 4];
      c += v - 4;
    } else if (y == "pHYs")
      o.tabs[y] = [n.readUint(e, t), n.readUint(e, t + 4), e[t + 8]];
    else if (y == "cHRM") {
      o.tabs[y] = [];
      for (var d = 0; d < 8; d++) o.tabs[y].push(n.readUint(e, t + d * 4));
    } else if (y == "tEXt") {
      o.tabs[y] == null && (o.tabs[y] = {});
      var C = n.nextZero(e, t), E = n.readASCII(e, t, C - t), O = n.readASCII(e, C + 1, t + v - C - 1);
      o.tabs[y][E] = O;
    } else if (y == "iTXt") {
      o.tabs[y] == null && (o.tabs[y] = {});
      var C = 0, D = t;
      C = n.nextZero(e, D);
      var E = n.readASCII(e, D, C - D);
      D = C + 1, e[D], e[D + 1], D += 2, C = n.nextZero(e, D), n.readASCII(e, D, C - D), D = C + 1, C = n.nextZero(e, D), n.readUTF8(e, D, C - D), D = C + 1;
      var O = n.readUTF8(e, D, v - (D - t));
      o.tabs[y][E] = O;
    } else if (y == "PLTE")
      o.tabs[y] = n.readBytes(e, t, v);
    else if (y == "hIST") {
      var P = o.tabs.PLTE.length / 3;
      o.tabs[y] = [];
      for (var d = 0; d < P; d++) o.tabs[y].push(i(e, t + d * 2));
    } else if (y == "tRNS")
      o.ctype == 3 ? o.tabs[y] = n.readBytes(e, t, v) : o.ctype == 0 ? o.tabs[y] = i(e, t) : o.ctype == 2 && (o.tabs[y] = [i(e, t), i(e, t + 2), i(e, t + 4)]);
    else if (y == "gAMA") o.tabs[y] = n.readUint(e, t) / 1e5;
    else if (y == "sRGB") o.tabs[y] = e[t];
    else if (y == "bKGD")
      o.ctype == 0 || o.ctype == 4 ? o.tabs[y] = [i(e, t)] : o.ctype == 2 || o.ctype == 6 ? o.tabs[y] = [i(e, t), i(e, t + 2), i(e, t + 4)] : o.ctype == 3 && (o.tabs[y] = e[t]);
    else if (y == "IEND")
      break;
    t += v, n.readUint(e, t), t += 4;
  }
  if (c != 0) {
    var w = o.frames[o.frames.length - 1];
    w.data = L.decode._decompress(o, l.slice(0, c), w.rect.width, w.rect.height), c = 0;
  }
  return o.data = L.decode._decompress(o, s, o.width, o.height), delete o.compress, delete o.interlace, delete o.filter, o;
};
L.decode._decompress = function(r, e, t, n) {
  var i = L.decode._getBPP(r), a = Math.ceil(t * i / 8), o = new Uint8Array((a + 1 + r.interlace) * n);
  return e = L.decode._inflate(e, o), r.interlace == 0 ? e = L.decode._filterZero(e, r, 0, t, n) : r.interlace == 1 && (e = L.decode._readInterlace(e, r)), e;
};
L.decode._inflate = function(r, e) {
  var t = L.inflateRaw(new Uint8Array(r.buffer, 2, r.length - 6), e);
  return t;
};
L.inflateRaw = (function() {
  var r = {};
  return r.H = {}, r.H.N = function(e, t) {
    var n = Uint8Array, i = 0, a = 0, o = 0, s = 0, u = 0, l = 0, c = 0, h = 0, d = 0, v, y;
    if (e[0] == 3 && e[1] == 0) return t || new n(0);
    var w = r.H, F = w.b, S = w.e, A = w.R, C = w.n, E = w.A, O = w.Z, D = w.m, P = t == null;
    for (P && (t = new n(e.length >>> 2 << 3)); i == 0; ) {
      if (i = F(e, d, 1), a = F(e, d + 1, 2), d += 3, a == 0) {
        (d & 7) != 0 && (d += 8 - (d & 7));
        var M = (d >>> 3) + 4, U = e[M - 4] | e[M - 3] << 8;
        P && (t = r.H.W(t, h + U)), t.set(new n(e.buffer, e.byteOffset + M, U), h), d = M + U << 3, h += U;
        continue;
      }
      if (P && (t = r.H.W(t, h + (1 << 17))), a == 1 && (v = D.J, y = D.h, l = 511, c = 31), a == 2) {
        o = S(e, d, 5) + 257, s = S(e, d + 5, 5) + 1, u = S(e, d + 10, 4) + 4, d += 14;
        for (var W = 1, V = 0; V < 38; V += 2)
          D.Q[V] = 0, D.Q[V + 1] = 0;
        for (var V = 0; V < u; V++) {
          var Z = S(e, d + V * 3, 3);
          D.Q[(D.X[V] << 1) + 1] = Z, Z > W && (W = Z);
        }
        d += 3 * u, C(D.Q, W), E(D.Q, W, D.u), v = D.w, y = D.d, d = A(D.u, (1 << W) - 1, o + s, e, d, D.v);
        var I = w.V(D.v, 0, o, D.C);
        l = (1 << I) - 1;
        var J = w.V(D.v, o, s, D.D);
        c = (1 << J) - 1, C(D.C, I), E(D.C, I, v), C(D.D, J), E(D.D, J, y);
      }
      for (; ; ) {
        var re = v[O(e, d) & l];
        d += re & 15;
        var Y = re >>> 4;
        if (!(Y >>> 8))
          t[h++] = Y;
        else {
          if (Y == 256)
            break;
          var Q = h + Y - 254;
          if (Y > 264) {
            var Pe = D.q[Y - 257];
            Q = h + (Pe >>> 3) + S(e, d, Pe & 7), d += Pe & 7;
          }
          var be = y[O(e, d) & c];
          d += be & 15;
          var Xe = be >>> 4, Be = D.c[Xe], ze = (Be >>> 4) + F(e, d, Be & 15);
          for (d += Be & 15; h < Q; )
            t[h] = t[h++ - ze], t[h] = t[h++ - ze], t[h] = t[h++ - ze], t[h] = t[h++ - ze];
          h = Q;
        }
      }
    }
    return t.length == h ? t : t.slice(0, h);
  }, r.H.W = function(e, t) {
    var n = e.length;
    if (t <= n) return e;
    var i = new Uint8Array(n << 1);
    return i.set(e, 0), i;
  }, r.H.R = function(e, t, n, i, a, o) {
    for (var s = r.H.e, u = r.H.Z, l = 0; l < n; ) {
      var c = e[u(i, a) & t];
      a += c & 15;
      var h = c >>> 4;
      if (h <= 15)
        o[l] = h, l++;
      else {
        var d = 0, v = 0;
        h == 16 ? (v = 3 + s(i, a, 2), a += 2, d = o[l - 1]) : h == 17 ? (v = 3 + s(i, a, 3), a += 3) : h == 18 && (v = 11 + s(i, a, 7), a += 7);
        for (var y = l + v; l < y; )
          o[l] = d, l++;
      }
    }
    return a;
  }, r.H.V = function(e, t, n, i) {
    for (var a = 0, o = 0, s = i.length >>> 1; o < n; ) {
      var u = e[o + t];
      i[o << 1] = 0, i[(o << 1) + 1] = u, u > a && (a = u), o++;
    }
    for (; o < s; )
      i[o << 1] = 0, i[(o << 1) + 1] = 0, o++;
    return a;
  }, r.H.n = function(e, t) {
    for (var n = r.H.m, i = e.length, a, o, s, u, l, c = n.j, u = 0; u <= t; u++) c[u] = 0;
    for (u = 1; u < i; u += 2) c[e[u]]++;
    var h = n.K;
    for (a = 0, c[0] = 0, o = 1; o <= t; o++)
      a = a + c[o - 1] << 1, h[o] = a;
    for (s = 0; s < i; s += 2)
      l = e[s + 1], l != 0 && (e[s] = h[l], h[l]++);
  }, r.H.A = function(e, t, n) {
    for (var i = e.length, a = r.H.m, o = a.r, s = 0; s < i; s += 2) if (e[s + 1] != 0)
      for (var u = s >> 1, l = e[s + 1], c = u << 4 | l, h = t - l, d = e[s] << h, v = d + (1 << h); d != v; ) {
        var y = o[d] >>> 15 - t;
        n[y] = c, d++;
      }
  }, r.H.l = function(e, t) {
    for (var n = r.H.m.r, i = 15 - t, a = 0; a < e.length; a += 2) {
      var o = e[a] << t - e[a + 1];
      e[a] = n[o] >>> i;
    }
  }, r.H.M = function(e, t, n) {
    n = n << (t & 7);
    var i = t >>> 3;
    e[i] |= n, e[i + 1] |= n >>> 8;
  }, r.H.I = function(e, t, n) {
    n = n << (t & 7);
    var i = t >>> 3;
    e[i] |= n, e[i + 1] |= n >>> 8, e[i + 2] |= n >>> 16;
  }, r.H.e = function(e, t, n) {
    return (e[t >>> 3] | e[(t >>> 3) + 1] << 8) >>> (t & 7) & (1 << n) - 1;
  }, r.H.b = function(e, t, n) {
    return (e[t >>> 3] | e[(t >>> 3) + 1] << 8 | e[(t >>> 3) + 2] << 16) >>> (t & 7) & (1 << n) - 1;
  }, r.H.Z = function(e, t) {
    return (e[t >>> 3] | e[(t >>> 3) + 1] << 8 | e[(t >>> 3) + 2] << 16) >>> (t & 7);
  }, r.H.i = function(e, t) {
    return (e[t >>> 3] | e[(t >>> 3) + 1] << 8 | e[(t >>> 3) + 2] << 16 | e[(t >>> 3) + 3] << 24) >>> (t & 7);
  }, r.H.m = (function() {
    var e = Uint16Array, t = Uint32Array;
    return { K: new e(16), j: new e(16), X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], S: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999], T: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0], q: new e(32), p: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535], z: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0], c: new t(32), J: new e(512), _: [], h: new e(32), $: [], w: new e(32768), C: [], v: [], d: new e(32768), D: [], u: new e(512), Q: [], r: new e(32768), s: new t(286), Y: new t(30), a: new t(19), t: new t(15e3), k: new e(65536), g: new e(32768) };
  })(), (function() {
    for (var e = r.H.m, t = 32768, n = 0; n < t; n++) {
      var i = n;
      i = (i & 2863311530) >>> 1 | (i & 1431655765) << 1, i = (i & 3435973836) >>> 2 | (i & 858993459) << 2, i = (i & 4042322160) >>> 4 | (i & 252645135) << 4, i = (i & 4278255360) >>> 8 | (i & 16711935) << 8, e.r[n] = (i >>> 16 | i << 16) >>> 17;
    }
    function a(o, s, u) {
      for (; s-- != 0; ) o.push(0, u);
    }
    for (var n = 0; n < 32; n++)
      e.q[n] = e.S[n] << 3 | e.T[n], e.c[n] = e.p[n] << 4 | e.z[n];
    a(e._, 144, 8), a(e._, 112, 9), a(e._, 24, 7), a(e._, 8, 8), r.H.n(e._, 9), r.H.A(e._, 9, e.J), r.H.l(e._, 9), a(e.$, 32, 5), r.H.n(e.$, 5), r.H.A(e.$, 5, e.h), r.H.l(e.$, 5), a(e.Q, 19, 0), a(e.C, 286, 0), a(e.D, 30, 0), a(e.v, 320, 0);
  })(), r.H.N;
})();
L.decode._readInterlace = function(r, e) {
  for (var t = e.width, n = e.height, i = L.decode._getBPP(e), a = i >> 3, o = Math.ceil(t * i / 8), s = new Uint8Array(n * o), u = 0, l = [0, 0, 4, 0, 2, 0, 1], c = [0, 4, 0, 2, 0, 1, 0], h = [8, 8, 8, 4, 4, 2, 2], d = [8, 8, 4, 4, 2, 2, 1], v = 0; v < 7; ) {
    for (var y = h[v], w = d[v], F = 0, S = 0, A = l[v]; A < n; )
      A += y, S++;
    for (var C = c[v]; C < t; )
      C += w, F++;
    var E = Math.ceil(F * i / 8);
    L.decode._filterZero(r, e, u, F, S);
    for (var O = 0, D = l[v]; D < n; ) {
      for (var P = c[v], M = u + O * E << 3; P < t; ) {
        if (i == 1) {
          var U = r[M >> 3];
          U = U >> 7 - (M & 7) & 1, s[D * o + (P >> 3)] |= U << 7 - ((P & 7) << 0);
        }
        if (i == 2) {
          var U = r[M >> 3];
          U = U >> 6 - (M & 7) & 3, s[D * o + (P >> 2)] |= U << 6 - ((P & 3) << 1);
        }
        if (i == 4) {
          var U = r[M >> 3];
          U = U >> 4 - (M & 7) & 15, s[D * o + (P >> 1)] |= U << 4 - ((P & 1) << 2);
        }
        if (i >= 8)
          for (var W = D * o + P * a, V = 0; V < a; V++) s[W + V] = r[(M >> 3) + V];
        M += i, P += w;
      }
      O++, D += y;
    }
    F * S != 0 && (u += S * (1 + E)), v = v + 1;
  }
  return s;
};
L.decode._getBPP = function(r) {
  var e = [1, null, 3, 1, 2, null, 4][r.ctype];
  return e * r.depth;
};
L.decode._filterZero = function(r, e, t, n, i) {
  var a = L.decode._getBPP(e), o = Math.ceil(n * a / 8), s = L.decode._paeth;
  a = Math.ceil(a / 8);
  var u = 0, l = 1, c = r[t], h = 0;
  if (c > 1 && (r[t] = [0, 0, 1][c - 2]), c == 3) for (h = a; h < o; h++) r[h + 1] = r[h + 1] + (r[h + 1 - a] >>> 1) & 255;
  for (var d = 0; d < i; d++)
    if (u = t + d * o, l = u + d + 1, c = r[l - 1], h = 0, c == 0) for (; h < o; h++) r[u + h] = r[l + h];
    else if (c == 1) {
      for (; h < a; h++) r[u + h] = r[l + h];
      for (; h < o; h++) r[u + h] = r[l + h] + r[u + h - a];
    } else if (c == 2)
      for (; h < o; h++) r[u + h] = r[l + h] + r[u + h - o];
    else if (c == 3) {
      for (; h < a; h++) r[u + h] = r[l + h] + (r[u + h - o] >>> 1);
      for (; h < o; h++) r[u + h] = r[l + h] + (r[u + h - o] + r[u + h - a] >>> 1);
    } else {
      for (; h < a; h++) r[u + h] = r[l + h] + s(0, r[u + h - o], 0);
      for (; h < o; h++) r[u + h] = r[l + h] + s(r[u + h - a], r[u + h - o], r[u + h - a - o]);
    }
  return r;
};
L.decode._paeth = function(r, e, t) {
  var n = r + e - t, i = n - r, a = n - e, o = n - t;
  return i * i <= a * a && i * i <= o * o ? r : a * a <= o * o ? e : t;
};
L.decode._IHDR = function(r, e, t) {
  var n = L._bin;
  t.width = n.readUint(r, e), e += 4, t.height = n.readUint(r, e), e += 4, t.depth = r[e], e++, t.ctype = r[e], e++, t.compress = r[e], e++, t.filter = r[e], e++, t.interlace = r[e], e++;
};
L._bin = {
  nextZero: function(r, e) {
    for (; r[e] != 0; ) e++;
    return e;
  },
  readUshort: function(r, e) {
    return r[e] << 8 | r[e + 1];
  },
  writeUshort: function(r, e, t) {
    r[e] = t >> 8 & 255, r[e + 1] = t & 255;
  },
  readUint: function(r, e) {
    return r[e] * (256 * 256 * 256) + (r[e + 1] << 16 | r[e + 2] << 8 | r[e + 3]);
  },
  writeUint: function(r, e, t) {
    r[e] = t >> 24 & 255, r[e + 1] = t >> 16 & 255, r[e + 2] = t >> 8 & 255, r[e + 3] = t & 255;
  },
  readASCII: function(r, e, t) {
    for (var n = "", i = 0; i < t; i++) n += String.fromCharCode(r[e + i]);
    return n;
  },
  writeASCII: function(r, e, t) {
    for (var n = 0; n < t.length; n++) r[e + n] = t.charCodeAt(n);
  },
  readBytes: function(r, e, t) {
    for (var n = [], i = 0; i < t; i++) n.push(r[e + i]);
    return n;
  },
  pad: function(r) {
    return r.length < 2 ? "0" + r : r;
  },
  readUTF8: function(r, e, t) {
    for (var n = "", i, a = 0; a < t; a++) n += "%" + L._bin.pad(r[e + a].toString(16));
    try {
      i = decodeURIComponent(n);
    } catch {
      return L._bin.readASCII(r, e, t);
    }
    return i;
  }
};
L._copyTile = function(r, e, t, n, i, a, o, s, u) {
  for (var l = Math.min(e, i), c = Math.min(t, a), h = 0, d = 0, v = 0; v < c; v++)
    for (var y = 0; y < l; y++)
      if (o >= 0 && s >= 0 ? (h = v * e + y << 2, d = (s + v) * i + o + y << 2) : (h = (-s + v) * e - o + y << 2, d = v * i + y << 2), u == 0)
        n[d] = r[h], n[d + 1] = r[h + 1], n[d + 2] = r[h + 2], n[d + 3] = r[h + 3];
      else if (u == 1) {
        var w = r[h + 3] * 0.00392156862745098, F = r[h] * w, S = r[h + 1] * w, A = r[h + 2] * w, C = n[d + 3] * (1 / 255), E = n[d] * C, O = n[d + 1] * C, D = n[d + 2] * C, P = 1 - w, M = w + C * P, U = M == 0 ? 0 : 1 / M;
        n[d + 3] = 255 * M, n[d + 0] = (F + E * P) * U, n[d + 1] = (S + O * P) * U, n[d + 2] = (A + D * P) * U;
      } else if (u == 2) {
        var w = r[h + 3], F = r[h], S = r[h + 1], A = r[h + 2], C = n[d + 3], E = n[d], O = n[d + 1], D = n[d + 2];
        w == C && F == E && S == O && A == D ? (n[d] = 0, n[d + 1] = 0, n[d + 2] = 0, n[d + 3] = 0) : (n[d] = F, n[d + 1] = S, n[d + 2] = A, n[d + 3] = w);
      } else if (u == 3) {
        var w = r[h + 3], F = r[h], S = r[h + 1], A = r[h + 2], C = n[d + 3], E = n[d], O = n[d + 1], D = n[d + 2];
        if (w == C && F == E && S == O && A == D) continue;
        if (w < 220 && C > 20) return !1;
      }
  return !0;
};
L.encode = function(r, e, t, n, i, a, o) {
  n == null && (n = 0), o == null && (o = !1);
  var s = L.encode.compress(r, e, t, n, [!1, !1, !1, 0, o]);
  return L.encode.compressPNG(s, -1), L.encode._main(s, e, t, i, a);
};
L.encodeLL = function(r, e, t, n, i, a, o, s) {
  for (var u = { ctype: 0 + (n == 1 ? 0 : 2) + (i == 0 ? 0 : 4), depth: a, frames: [] }, l = (n + i) * a, c = l * e, h = 0; h < r.length; h++)
    u.frames.push({ rect: { x: 0, y: 0, width: e, height: t }, img: new Uint8Array(r[h]), blend: 0, dispose: 1, bpp: Math.ceil(l / 8), bpl: Math.ceil(c / 8) });
  L.encode.compressPNG(u, 0, !0);
  var d = L.encode._main(u, e, t, o, s);
  return d;
};
L.encode._main = function(r, e, t, n, i) {
  i == null && (i = {});
  var a = L.crc.crc, o = L._bin.writeUint, s = L._bin.writeUshort, u = L._bin.writeASCII, l = 8, c = r.frames.length > 1, h = !1, d = 33 + (c ? 20 : 0);
  if (i.sRGB != null && (d += 13), i.pHYs != null && (d += 21), r.ctype == 3) {
    for (var v = r.plte.length, y = 0; y < v; y++) r.plte[y] >>> 24 != 255 && (h = !0);
    d += 8 + v * 3 + 4 + (h ? 8 + v * 1 + 4 : 0);
  }
  for (var w = 0; w < r.frames.length; w++) {
    var F = r.frames[w];
    c && (d += 38), d += F.cimg.length + 12, w != 0 && (d += 4);
  }
  d += 12;
  for (var S = new Uint8Array(d), A = [137, 80, 78, 71, 13, 10, 26, 10], y = 0; y < 8; y++) S[y] = A[y];
  if (o(S, l, 13), l += 4, u(S, l, "IHDR"), l += 4, o(S, l, e), l += 4, o(S, l, t), l += 4, S[l] = r.depth, l++, S[l] = r.ctype, l++, S[l] = 0, l++, S[l] = 0, l++, S[l] = 0, l++, o(S, l, a(S, l - 17, 17)), l += 4, i.sRGB != null && (o(S, l, 1), l += 4, u(S, l, "sRGB"), l += 4, S[l] = i.sRGB, l++, o(S, l, a(S, l - 5, 5)), l += 4), i.pHYs != null && (o(S, l, 9), l += 4, u(S, l, "pHYs"), l += 4, o(S, l, i.pHYs[0]), l += 4, o(S, l, i.pHYs[1]), l += 4, S[l] = i.pHYs[2], l++, o(S, l, a(S, l - 13, 13)), l += 4), c && (o(S, l, 8), l += 4, u(S, l, "acTL"), l += 4, o(S, l, r.frames.length), l += 4, o(S, l, i.loop != null ? i.loop : 0), l += 4, o(S, l, a(S, l - 12, 12)), l += 4), r.ctype == 3) {
    var v = r.plte.length;
    o(S, l, v * 3), l += 4, u(S, l, "PLTE"), l += 4;
    for (var y = 0; y < v; y++) {
      var C = y * 3, E = r.plte[y], O = E & 255, D = E >>> 8 & 255, P = E >>> 16 & 255;
      S[l + C + 0] = O, S[l + C + 1] = D, S[l + C + 2] = P;
    }
    if (l += v * 3, o(S, l, a(S, l - v * 3 - 4, v * 3 + 4)), l += 4, h) {
      o(S, l, v), l += 4, u(S, l, "tRNS"), l += 4;
      for (var y = 0; y < v; y++) S[l + y] = r.plte[y] >>> 24 & 255;
      l += v, o(S, l, a(S, l - v - 4, v + 4)), l += 4;
    }
  }
  for (var M = 0, w = 0; w < r.frames.length; w++) {
    var F = r.frames[w];
    c && (o(S, l, 26), l += 4, u(S, l, "fcTL"), l += 4, o(S, l, M++), l += 4, o(S, l, F.rect.width), l += 4, o(S, l, F.rect.height), l += 4, o(S, l, F.rect.x), l += 4, o(S, l, F.rect.y), l += 4, s(S, l, n[w]), l += 2, s(S, l, 1e3), l += 2, S[l] = F.dispose, l++, S[l] = F.blend, l++, o(S, l, a(S, l - 30, 30)), l += 4);
    var U = F.cimg, v = U.length;
    o(S, l, v + (w == 0 ? 0 : 4)), l += 4;
    var W = l;
    u(S, l, w == 0 ? "IDAT" : "fdAT"), l += 4, w != 0 && (o(S, l, M++), l += 4), S.set(U, l), l += v, o(S, l, a(S, W, l - W)), l += 4;
  }
  return o(S, l, 0), l += 4, u(S, l, "IEND"), l += 4, o(S, l, a(S, l - 4, 4)), l += 4, S.buffer;
};
L.encode.compressPNG = function(r, e, t) {
  for (var n = 0; n < r.frames.length; n++) {
    var i = r.frames[n];
    i.rect.width;
    var a = i.rect.height, o = new Uint8Array(a * i.bpl + a);
    i.cimg = L.encode._filterZero(i.img, a, i.bpp, i.bpl, o, e, t);
  }
};
L.encode.compress = function(r, e, t, n, i) {
  for (var a = i[0], o = i[1], s = i[2], u = i[3], l = i[4], c = 6, h = 8, d = 255, v = 0; v < r.length; v++)
    for (var y = new Uint8Array(r[v]), w = y.length, F = 0; F < w; F += 4) d &= y[F + 3];
  var S = d != 255, A = L.encode.framize(r, e, t, a, o, s), C = {}, E = [], O = [];
  if (n != 0) {
    for (var D = [], F = 0; F < A.length; F++) D.push(A[F].img.buffer);
    for (var P = L.encode.concatRGBA(D), M = L.quantize(P, n), U = 0, W = new Uint8Array(M.abuf), F = 0; F < A.length; F++) {
      var V = A[F].img, Z = V.length;
      O.push(new Uint8Array(M.inds.buffer, U >> 2, Z >> 2));
      for (var v = 0; v < Z; v += 4)
        V[v] = W[U + v], V[v + 1] = W[U + v + 1], V[v + 2] = W[U + v + 2], V[v + 3] = W[U + v + 3];
      U += Z;
    }
    for (var F = 0; F < M.plte.length; F++) E.push(M.plte[F].est.rgba);
  } else
    for (var v = 0; v < A.length; v++) {
      var I = A[v], J = new Uint32Array(I.img.buffer), re = I.rect.width, w = J.length, Y = new Uint8Array(w);
      O.push(Y);
      for (var F = 0; F < w; F++) {
        var Q = J[F];
        if (F != 0 && Q == J[F - 1]) Y[F] = Y[F - 1];
        else if (F > re && Q == J[F - re]) Y[F] = Y[F - re];
        else {
          var Pe = C[Q];
          if (Pe == null && (C[Q] = Pe = E.length, E.push(Q), E.length >= 300))
            break;
          Y[F] = Pe;
        }
      }
    }
  var be = E.length;
  be <= 256 && l == !1 && (be <= 2 ? h = 1 : be <= 4 ? h = 2 : be <= 16 ? h = 4 : h = 8, h = Math.max(h, u));
  for (var v = 0; v < A.length; v++) {
    var I = A[v];
    I.rect.x, I.rect.y;
    var re = I.rect.width, Xe = I.rect.height, Be = I.img;
    new Uint32Array(Be.buffer);
    var ze = 4 * re, Ue = 4;
    if (be <= 256 && l == !1) {
      ze = Math.ceil(h * re / 8);
      for (var We = new Uint8Array(ze * Xe), Le = O[v], De = 0; De < Xe; De++) {
        var F = De * ze, je = De * re;
        if (h == 8) for (var oe = 0; oe < re; oe++) We[F + oe] = Le[je + oe];
        else if (h == 4) for (var oe = 0; oe < re; oe++) We[F + (oe >> 1)] |= Le[je + oe] << 4 - (oe & 1) * 4;
        else if (h == 2) for (var oe = 0; oe < re; oe++) We[F + (oe >> 2)] |= Le[je + oe] << 6 - (oe & 3) * 2;
        else if (h == 1) for (var oe = 0; oe < re; oe++) We[F + (oe >> 3)] |= Le[je + oe] << 7 - (oe & 7) * 1;
      }
      Be = We, c = 3, Ue = 1;
    } else if (S == !1 && A.length == 1) {
      for (var We = new Uint8Array(re * Xe * 3), tt = re * Xe, F = 0; F < tt; F++) {
        var V = F * 3, ot = F * 4;
        We[V] = Be[ot], We[V + 1] = Be[ot + 1], We[V + 2] = Be[ot + 2];
      }
      Be = We, c = 2, Ue = 3, ze = 3 * re;
    }
    I.img = Be, I.bpl = ze, I.bpp = Ue;
  }
  return { ctype: c, depth: h, plte: E, frames: A };
};
L.encode.framize = function(r, e, t, n, i, a) {
  for (var o = [], s = 0; s < r.length; s++) {
    var u = new Uint8Array(r[s]), l = new Uint32Array(u.buffer), c, h = 0, d = 0, v = e, y = t, w = n ? 1 : 0;
    if (s != 0) {
      for (var F = a || n || s == 1 || o[s - 2].dispose != 0 ? 1 : 2, S = 0, A = 1e9, C = 0; C < F; C++) {
        for (var I = new Uint8Array(r[s - 1 - C]), E = new Uint32Array(r[s - 1 - C]), O = e, D = t, P = -1, M = -1, U = 0; U < t; U++) for (var W = 0; W < e; W++) {
          var V = U * e + W;
          l[V] != E[V] && (W < O && (O = W), W > P && (P = W), U < D && (D = U), U > M && (M = U));
        }
        P == -1 && (O = D = P = M = 0), i && ((O & 1) == 1 && O--, (D & 1) == 1 && D--);
        var Z = (P - O + 1) * (M - D + 1);
        Z < A && (A = Z, S = C, h = O, d = D, v = P - O + 1, y = M - D + 1);
      }
      var I = new Uint8Array(r[s - 1 - S]);
      S == 1 && (o[s - 1].dispose = 2), c = new Uint8Array(v * y * 4), L._copyTile(I, e, t, c, v, y, -h, -d, 0), w = L._copyTile(u, e, t, c, v, y, -h, -d, 3) ? 1 : 0, w == 1 ? L.encode._prepareDiff(u, e, t, c, { x: h, y: d, width: v, height: y }) : L._copyTile(u, e, t, c, v, y, -h, -d, 0);
    } else c = u.slice(0);
    o.push({ rect: { x: h, y: d, width: v, height: y }, img: c, blend: w, dispose: 0 });
  }
  if (n) for (var s = 0; s < o.length; s++) {
    var J = o[s];
    if (J.blend != 1) {
      var re = J.rect, Y = o[s - 1].rect, Q = Math.min(re.x, Y.x), Pe = Math.min(re.y, Y.y), be = Math.max(re.x + re.width, Y.x + Y.width), Xe = Math.max(re.y + re.height, Y.y + Y.height), Be = { x: Q, y: Pe, width: be - Q, height: Xe - Pe };
      o[s - 1].dispose = 1, s - 1 != 0 && L.encode._updateFrame(r, e, t, o, s - 1, Be, i), L.encode._updateFrame(r, e, t, o, s, Be, i);
    }
  }
  var ze = 0;
  if (r.length != 1) for (var V = 0; V < o.length; V++) {
    var J = o[V];
    ze += J.rect.width * J.rect.height;
  }
  return o;
};
L.encode._updateFrame = function(r, e, t, n, i, a, o) {
  for (var s = Uint8Array, u = Uint32Array, l = new s(r[i - 1]), c = new u(r[i - 1]), h = i + 1 < r.length ? new s(r[i + 1]) : null, d = new s(r[i]), v = new u(d.buffer), y = e, w = t, F = -1, S = -1, A = 0; A < a.height; A++) for (var C = 0; C < a.width; C++) {
    var E = a.x + C, O = a.y + A, D = O * e + E, P = v[D];
    P == 0 || n[i - 1].dispose == 0 && c[D] == P && (h == null || h[D * 4 + 3] != 0) || (E < y && (y = E), E > F && (F = E), O < w && (w = O), O > S && (S = O));
  }
  F == -1 && (y = w = F = S = 0), o && ((y & 1) == 1 && y--, (w & 1) == 1 && w--), a = { x: y, y: w, width: F - y + 1, height: S - w + 1 };
  var M = n[i];
  M.rect = a, M.blend = 1, M.img = new Uint8Array(a.width * a.height * 4), n[i - 1].dispose == 0 ? (L._copyTile(l, e, t, M.img, a.width, a.height, -a.x, -a.y, 0), L.encode._prepareDiff(d, e, t, M.img, a)) : L._copyTile(d, e, t, M.img, a.width, a.height, -a.x, -a.y, 0);
};
L.encode._prepareDiff = function(r, e, t, n, i) {
  L._copyTile(r, e, t, n, i.width, i.height, -i.x, -i.y, 2);
};
L.encode._filterZero = function(r, e, t, n, i, a, o) {
  var s = [], u = [0, 1, 2, 3, 4];
  a != -1 ? u = [a] : (e * n > 5e5 || t == 1) && (u = [0]);
  var l;
  o && (l = { level: 0 });
  for (var c = o && UZIP != null ? UZIP : Si, h = 0; h < u.length; h++) {
    for (var d = 0; d < e; d++) L.encode._filterLine(i, r, d, n, t, u[h]);
    s.push(c.deflate(i, l));
  }
  for (var v, y = 1e9, h = 0; h < s.length; h++) s[h].length < y && (v = h, y = s[h].length);
  return s[v];
};
L.encode._filterLine = function(r, e, t, n, i, a) {
  var o = t * n, s = o + t, u = L.decode._paeth;
  if (r[s] = a, s++, a == 0)
    if (n < 500) for (var l = 0; l < n; l++) r[s + l] = e[o + l];
    else r.set(new Uint8Array(e.buffer, o, n), s);
  else if (a == 1) {
    for (var l = 0; l < i; l++) r[s + l] = e[o + l];
    for (var l = i; l < n; l++) r[s + l] = e[o + l] - e[o + l - i] + 256 & 255;
  } else if (t == 0) {
    for (var l = 0; l < i; l++) r[s + l] = e[o + l];
    if (a == 2) for (var l = i; l < n; l++) r[s + l] = e[o + l];
    if (a == 3) for (var l = i; l < n; l++) r[s + l] = e[o + l] - (e[o + l - i] >> 1) + 256 & 255;
    if (a == 4) for (var l = i; l < n; l++) r[s + l] = e[o + l] - u(e[o + l - i], 0, 0) + 256 & 255;
  } else {
    if (a == 2)
      for (var l = 0; l < n; l++) r[s + l] = e[o + l] + 256 - e[o + l - n] & 255;
    if (a == 3) {
      for (var l = 0; l < i; l++) r[s + l] = e[o + l] + 256 - (e[o + l - n] >> 1) & 255;
      for (var l = i; l < n; l++) r[s + l] = e[o + l] + 256 - (e[o + l - n] + e[o + l - i] >> 1) & 255;
    }
    if (a == 4) {
      for (var l = 0; l < i; l++) r[s + l] = e[o + l] + 256 - u(0, e[o + l - n], 0) & 255;
      for (var l = i; l < n; l++) r[s + l] = e[o + l] + 256 - u(e[o + l - i], e[o + l - n], e[o + l - i - n]) & 255;
    }
  }
};
L.crc = {
  table: (function() {
    for (var r = new Uint32Array(256), e = 0; e < 256; e++) {
      for (var t = e, n = 0; n < 8; n++)
        t & 1 ? t = 3988292384 ^ t >>> 1 : t = t >>> 1;
      r[e] = t;
    }
    return r;
  })(),
  update: function(r, e, t, n) {
    for (var i = 0; i < n; i++) r = L.crc.table[(r ^ e[t + i]) & 255] ^ r >>> 8;
    return r;
  },
  crc: function(r, e, t) {
    return L.crc.update(4294967295, r, e, t) ^ 4294967295;
  }
};
L.quantize = function(r, e) {
  var t = new Uint8Array(r), n = t.slice(0), i = new Uint32Array(n.buffer), a = L.quantize.getKDtree(n, e), o = a[0], s = a[1];
  L.quantize.planeDst;
  for (var u = t, l = i, c = u.length, h = new Uint8Array(t.length >> 2), d = 0; d < c; d += 4) {
    var v = u[d] * 0.00392156862745098, y = u[d + 1] * (1 / 255), w = u[d + 2] * (1 / 255), F = u[d + 3] * (1 / 255), S = L.quantize.getNearest(o, v, y, w, F);
    h[d >> 2] = S.ind, l[d >> 2] = S.est.rgba;
  }
  return { abuf: n.buffer, inds: h, plte: s };
};
L.quantize.getKDtree = function(r, e, t) {
  t == null && (t = 1e-4);
  var n = new Uint32Array(r.buffer), i = { i0: 0, i1: r.length, bst: null, est: null, tdst: 0, left: null, right: null };
  i.bst = L.quantize.stats(r, i.i0, i.i1), i.est = L.quantize.estats(i.bst);
  for (var a = [i]; a.length < e; ) {
    for (var o = 0, s = 0, u = 0; u < a.length; u++) a[u].est.L > o && (o = a[u].est.L, s = u);
    if (o < t) break;
    var l = a[s], c = L.quantize.splitPixels(r, n, l.i0, l.i1, l.est.e, l.est.eMq255), h = l.i0 >= c || l.i1 <= c;
    if (h) {
      l.est.L = 0;
      continue;
    }
    var d = { i0: l.i0, i1: c, bst: null, est: null, tdst: 0, left: null, right: null };
    d.bst = L.quantize.stats(r, d.i0, d.i1), d.est = L.quantize.estats(d.bst);
    var v = { i0: c, i1: l.i1, bst: null, est: null, tdst: 0, left: null, right: null };
    v.bst = { R: [], m: [], N: l.bst.N - d.bst.N };
    for (var u = 0; u < 16; u++) v.bst.R[u] = l.bst.R[u] - d.bst.R[u];
    for (var u = 0; u < 4; u++) v.bst.m[u] = l.bst.m[u] - d.bst.m[u];
    v.est = L.quantize.estats(v.bst), l.left = d, l.right = v, a[s] = d, a.push(v);
  }
  a.sort(function(y, w) {
    return w.bst.N - y.bst.N;
  });
  for (var u = 0; u < a.length; u++) a[u].ind = u;
  return [i, a];
};
L.quantize.getNearest = function(r, e, t, n, i) {
  if (r.left == null)
    return r.tdst = L.quantize.dist(r.est.q, e, t, n, i), r;
  var a = L.quantize.planeDst(r.est, e, t, n, i), o = r.left, s = r.right;
  a > 0 && (o = r.right, s = r.left);
  var u = L.quantize.getNearest(o, e, t, n, i);
  if (u.tdst <= a * a) return u;
  var l = L.quantize.getNearest(s, e, t, n, i);
  return l.tdst < u.tdst ? l : u;
};
L.quantize.planeDst = function(r, e, t, n, i) {
  var a = r.e;
  return a[0] * e + a[1] * t + a[2] * n + a[3] * i - r.eMq;
};
L.quantize.dist = function(r, e, t, n, i) {
  var a = e - r[0], o = t - r[1], s = n - r[2], u = i - r[3];
  return a * a + o * o + s * s + u * u;
};
L.quantize.splitPixels = function(r, e, t, n, i, a) {
  var o = L.quantize.vecDot;
  for (n -= 4; t < n; ) {
    for (; o(r, t, i) <= a; ) t += 4;
    for (; o(r, n, i) > a; ) n -= 4;
    if (t >= n) break;
    var s = e[t >> 2];
    e[t >> 2] = e[n >> 2], e[n >> 2] = s, t += 4, n -= 4;
  }
  for (; o(r, t, i) > a; ) t -= 4;
  return t + 4;
};
L.quantize.vecDot = function(r, e, t) {
  return r[e] * t[0] + r[e + 1] * t[1] + r[e + 2] * t[2] + r[e + 3] * t[3];
};
L.quantize.stats = function(r, e, t) {
  for (var n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = [0, 0, 0, 0], a = t - e >> 2, o = e; o < t; o += 4) {
    var s = r[o] * 0.00392156862745098, u = r[o + 1] * (1 / 255), l = r[o + 2] * (1 / 255), c = r[o + 3] * (1 / 255);
    i[0] += s, i[1] += u, i[2] += l, i[3] += c, n[0] += s * s, n[1] += s * u, n[2] += s * l, n[3] += s * c, n[5] += u * u, n[6] += u * l, n[7] += u * c, n[10] += l * l, n[11] += l * c, n[15] += c * c;
  }
  return n[4] = n[1], n[8] = n[2], n[9] = n[6], n[12] = n[3], n[13] = n[7], n[14] = n[11], { R: n, m: i, N: a };
};
L.quantize.estats = function(r) {
  var e = r.R, t = r.m, n = r.N, i = t[0], a = t[1], o = t[2], s = t[3], u = n == 0 ? 0 : 1 / n, l = [
    e[0] - i * i * u,
    e[1] - i * a * u,
    e[2] - i * o * u,
    e[3] - i * s * u,
    e[4] - a * i * u,
    e[5] - a * a * u,
    e[6] - a * o * u,
    e[7] - a * s * u,
    e[8] - o * i * u,
    e[9] - o * a * u,
    e[10] - o * o * u,
    e[11] - o * s * u,
    e[12] - s * i * u,
    e[13] - s * a * u,
    e[14] - s * o * u,
    e[15] - s * s * u
  ], c = l, h = L.M4, d = [0.5, 0.5, 0.5, 0.5], v = 0, y = 0;
  if (n != 0)
    for (var w = 0; w < 10 && (d = h.multVec(c, d), y = Math.sqrt(h.dot(d, d)), d = h.sml(1 / y, d), !(Math.abs(y - v) < 1e-9)); w++)
      v = y;
  var F = [i * u, a * u, o * u, s * u], S = h.dot(h.sml(255, F), d);
  return {
    Cov: l,
    q: F,
    e: d,
    L: v,
    eMq255: S,
    eMq: h.dot(d, F),
    rgba: (Math.round(255 * F[3]) << 24 | Math.round(255 * F[2]) << 16 | Math.round(255 * F[1]) << 8 | Math.round(255 * F[0]) << 0) >>> 0
  };
};
L.M4 = {
  multVec: function(r, e) {
    return [
      r[0] * e[0] + r[1] * e[1] + r[2] * e[2] + r[3] * e[3],
      r[4] * e[0] + r[5] * e[1] + r[6] * e[2] + r[7] * e[3],
      r[8] * e[0] + r[9] * e[1] + r[10] * e[2] + r[11] * e[3],
      r[12] * e[0] + r[13] * e[1] + r[14] * e[2] + r[15] * e[3]
    ];
  },
  dot: function(r, e) {
    return r[0] * e[0] + r[1] * e[1] + r[2] * e[2] + r[3] * e[3];
  },
  sml: function(r, e) {
    return [r * e[0], r * e[1], r * e[2], r * e[3]];
  }
};
L.encode.concatRGBA = function(r) {
  for (var e = 0, t = 0; t < r.length; t++) e += r[t].byteLength;
  for (var n = new Uint8Array(e), i = 0, t = 0; t < r.length; t++) {
    for (var a = new Uint8Array(r[t]), o = a.length, s = 0; s < o; s += 4) {
      var u = a[s], l = a[s + 1], c = a[s + 2], h = a[s + 3];
      h == 0 && (u = l = c = 0), n[i + s] = u, n[i + s + 1] = l, n[i + s + 2] = c, n[i + s + 3] = h;
    }
    i += o;
  }
  return n.buffer;
};
var _l = function(r) {
  if (r === 0)
    return Rr.Greyscale;
  if (r === 2)
    return Rr.Truecolour;
  if (r === 3)
    return Rr.IndexedColour;
  if (r === 4)
    return Rr.GreyscaleWithAlpha;
  if (r === 6)
    return Rr.TruecolourWithAlpha;
  throw new Error("Unknown color type: " + r);
}, $l = function(r) {
  for (var e = Math.floor(r.length / 4), t = new Uint8Array(e * 3), n = new Uint8Array(e * 1), i = 0, a = 0, o = 0; i < r.length; )
    t[a++] = r[i++], t[a++] = r[i++], t[a++] = r[i++], n[o++] = r[i++];
  return { rgbChannel: t, alphaChannel: n };
}, Rr;
(function(r) {
  r.Greyscale = "Greyscale", r.Truecolour = "Truecolour", r.IndexedColour = "IndexedColour", r.GreyscaleWithAlpha = "GreyscaleWithAlpha", r.TruecolourWithAlpha = "TruecolourWithAlpha";
})(Rr || (Rr = {}));
var ef = (
  /** @class */
  (function() {
    function r(e) {
      var t = L.decode(e), n = L.toRGBA8(t);
      if (n.length > 1)
        throw new Error("Animated PNGs are not supported");
      var i = new Uint8Array(n[0]), a = $l(i), o = a.rgbChannel, s = a.alphaChannel;
      this.rgbChannel = o;
      var u = s.some(function(l) {
        return l < 255;
      });
      u && (this.alphaChannel = s), this.type = _l(t.ctype), this.width = t.width, this.height = t.height, this.bitsPerComponent = 8;
    }
    return r.load = function(e) {
      return new r(e);
    }, r;
  })()
), bs = (
  /** @class */
  (function() {
    function r(e) {
      this.image = e, this.bitsPerComponent = e.bitsPerComponent, this.width = e.width, this.height = e.height, this.colorSpace = "DeviceRGB";
    }
    return r.for = function(e) {
      return ge(this, void 0, void 0, function() {
        var t;
        return ye(this, function(n) {
          return t = ef.load(e), [2, new r(t)];
        });
      });
    }, r.prototype.embedIntoContext = function(e, t) {
      return ge(this, void 0, void 0, function() {
        var n, i;
        return ye(this, function(a) {
          return n = this.embedAlphaChannel(e), i = e.flateStream(this.image.rgbChannel, {
            Type: "XObject",
            Subtype: "Image",
            BitsPerComponent: this.image.bitsPerComponent,
            Width: this.image.width,
            Height: this.image.height,
            ColorSpace: this.colorSpace,
            SMask: n
          }), t ? (e.assign(t, i), [2, t]) : [2, e.register(i)];
        });
      });
    }, r.prototype.embedAlphaChannel = function(e) {
      if (this.image.alphaChannel) {
        var t = e.flateStream(this.image.alphaChannel, {
          Type: "XObject",
          Subtype: "Image",
          Height: this.image.height,
          Width: this.image.width,
          BitsPerComponent: this.image.bitsPerComponent,
          ColorSpace: "DeviceGray",
          Decode: [0, 1]
        });
        return e.register(t);
      }
    }, r;
  })()
), xs = (
  /** @class */
  (function() {
    function r(e, t, n) {
      this.bytes = e, this.start = t || 0, this.pos = this.start, this.end = t && n ? t + n : this.bytes.length;
    }
    return Object.defineProperty(r.prototype, "length", {
      get: function() {
        return this.end - this.start;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "isEmpty", {
      get: function() {
        return this.length === 0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.getByte = function() {
      return this.pos >= this.end ? -1 : this.bytes[this.pos++];
    }, r.prototype.getUint16 = function() {
      var e = this.getByte(), t = this.getByte();
      return e === -1 || t === -1 ? -1 : (e << 8) + t;
    }, r.prototype.getInt32 = function() {
      var e = this.getByte(), t = this.getByte(), n = this.getByte(), i = this.getByte();
      return (e << 24) + (t << 16) + (n << 8) + i;
    }, r.prototype.getBytes = function(e, t) {
      t === void 0 && (t = !1);
      var n = this.bytes, i = this.pos, a = this.end;
      if (e) {
        var s = i + e;
        s > a && (s = a), this.pos = s;
        var o = n.subarray(i, s);
        return t ? new Uint8ClampedArray(o) : o;
      } else {
        var o = n.subarray(i, a);
        return t ? new Uint8ClampedArray(o) : o;
      }
    }, r.prototype.peekByte = function() {
      var e = this.getByte();
      return this.pos--, e;
    }, r.prototype.peekBytes = function(e, t) {
      t === void 0 && (t = !1);
      var n = this.getBytes(e, t);
      return this.pos -= n.length, n;
    }, r.prototype.skip = function(e) {
      e || (e = 1), this.pos += e;
    }, r.prototype.reset = function() {
      this.pos = this.start;
    }, r.prototype.moveStart = function() {
      this.start = this.pos;
    }, r.prototype.makeSubStream = function(e, t) {
      return new r(this.bytes, e, t);
    }, r.prototype.decode = function() {
      return this.bytes;
    }, r;
  })()
), tf = new Uint8Array(0), Bn = (
  /** @class */
  (function() {
    function r(e) {
      if (this.pos = 0, this.bufferLength = 0, this.eof = !1, this.buffer = tf, this.minBufferLength = 512, e)
        for (; this.minBufferLength < e; )
          this.minBufferLength *= 2;
    }
    return Object.defineProperty(r.prototype, "isEmpty", {
      get: function() {
        for (; !this.eof && this.bufferLength === 0; )
          this.readBlock();
        return this.bufferLength === 0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.getByte = function() {
      for (var e = this.pos; this.bufferLength <= e; ) {
        if (this.eof)
          return -1;
        this.readBlock();
      }
      return this.buffer[this.pos++];
    }, r.prototype.getUint16 = function() {
      var e = this.getByte(), t = this.getByte();
      return e === -1 || t === -1 ? -1 : (e << 8) + t;
    }, r.prototype.getInt32 = function() {
      var e = this.getByte(), t = this.getByte(), n = this.getByte(), i = this.getByte();
      return (e << 24) + (t << 16) + (n << 8) + i;
    }, r.prototype.getBytes = function(e, t) {
      t === void 0 && (t = !1);
      var n, i = this.pos;
      if (e) {
        for (this.ensureBuffer(i + e), n = i + e; !this.eof && this.bufferLength < n; )
          this.readBlock();
        var a = this.bufferLength;
        n > a && (n = a);
      } else {
        for (; !this.eof; )
          this.readBlock();
        n = this.bufferLength;
      }
      this.pos = n;
      var o = this.buffer.subarray(i, n);
      return t && !(o instanceof Uint8ClampedArray) ? new Uint8ClampedArray(o) : o;
    }, r.prototype.peekByte = function() {
      var e = this.getByte();
      return this.pos--, e;
    }, r.prototype.peekBytes = function(e, t) {
      t === void 0 && (t = !1);
      var n = this.getBytes(e, t);
      return this.pos -= n.length, n;
    }, r.prototype.skip = function(e) {
      e || (e = 1), this.pos += e;
    }, r.prototype.reset = function() {
      this.pos = 0;
    }, r.prototype.makeSubStream = function(e, t) {
      for (var n = e + t; this.bufferLength <= n && !this.eof; )
        this.readBlock();
      return new xs(
        this.buffer,
        e,
        t
        /* dict */
      );
    }, r.prototype.decode = function() {
      for (; !this.eof; )
        this.readBlock();
      return this.buffer.subarray(0, this.bufferLength);
    }, r.prototype.readBlock = function() {
      throw new Et(this.constructor.name, "readBlock");
    }, r.prototype.ensureBuffer = function(e) {
      var t = this.buffer;
      if (e <= t.byteLength)
        return t;
      for (var n = this.minBufferLength; n < e; )
        n *= 2;
      var i = new Uint8Array(n);
      return i.set(t), this.buffer = i;
    }, r;
  })()
), To = function(r) {
  return r === 32 || r === 9 || r === 13 || r === 10;
}, rf = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = r.call(this, n) || this;
      return i.stream = t, i.input = new Uint8Array(5), n && (n = 0.8 * n), i;
    }
    return e.prototype.readBlock = function() {
      for (var t = 126, n = 122, i = -1, a = this.stream, o = a.getByte(); To(o); )
        o = a.getByte();
      if (o === i || o === t) {
        this.eof = !0;
        return;
      }
      var s = this.bufferLength, u, l;
      if (o === n) {
        for (u = this.ensureBuffer(s + 4), l = 0; l < 4; ++l)
          u[s + l] = 0;
        this.bufferLength += 4;
      } else {
        var c = this.input;
        for (c[0] = o, l = 1; l < 5; ++l) {
          for (o = a.getByte(); To(o); )
            o = a.getByte();
          if (c[l] = o, o === i || o === t)
            break;
        }
        if (u = this.ensureBuffer(s + l - 1), this.bufferLength += l - 1, l < 5) {
          for (; l < 5; ++l)
            c[l] = 117;
          this.eof = !0;
        }
        var h = 0;
        for (l = 0; l < 5; ++l)
          h = h * 85 + (c[l] - 33);
        for (l = 3; l >= 0; --l)
          u[s + l] = h & 255, h >>= 8;
      }
    }, e;
  })(Bn)
), nf = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = r.call(this, n) || this;
      return i.stream = t, i.firstDigit = -1, n && (n = 0.5 * n), i;
    }
    return e.prototype.readBlock = function() {
      var t = 8e3, n = this.stream.getBytes(t);
      if (!n.length) {
        this.eof = !0;
        return;
      }
      for (var i = n.length + 1 >> 1, a = this.ensureBuffer(this.bufferLength + i), o = this.bufferLength, s = this.firstDigit, u = 0, l = n.length; u < l; u++) {
        var c = n[u], h = void 0;
        if (c >= 48 && c <= 57)
          h = c & 15;
        else if (c >= 65 && c <= 70 || c >= 97 && c <= 102)
          h = (c & 15) + 9;
        else if (c === 62) {
          this.eof = !0;
          break;
        } else
          continue;
        s < 0 ? s = h : (a[o++] = s << 4 | h, s = -1);
      }
      s >= 0 && this.eof && (a[o++] = s << 4, s = -1), this.firstDigit = s, this.bufferLength = o;
    }, e;
  })(Bn)
), Po = new Int32Array([
  16,
  17,
  18,
  0,
  8,
  7,
  9,
  6,
  10,
  5,
  11,
  4,
  12,
  3,
  13,
  2,
  14,
  1,
  15
]), af = new Int32Array([
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  65547,
  65549,
  65551,
  65553,
  131091,
  131095,
  131099,
  131103,
  196643,
  196651,
  196659,
  196667,
  262211,
  262227,
  262243,
  262259,
  327811,
  327843,
  327875,
  327907,
  258,
  258,
  258
]), of = new Int32Array([
  1,
  2,
  3,
  4,
  65541,
  65543,
  131081,
  131085,
  196625,
  196633,
  262177,
  262193,
  327745,
  327777,
  393345,
  393409,
  459009,
  459137,
  524801,
  525057,
  590849,
  591361,
  657409,
  658433,
  724993,
  727041,
  794625,
  798721,
  868353,
  876545
]), sf = [new Int32Array([
  459008,
  524368,
  524304,
  524568,
  459024,
  524400,
  524336,
  590016,
  459016,
  524384,
  524320,
  589984,
  524288,
  524416,
  524352,
  590048,
  459012,
  524376,
  524312,
  589968,
  459028,
  524408,
  524344,
  590032,
  459020,
  524392,
  524328,
  59e4,
  524296,
  524424,
  524360,
  590064,
  459010,
  524372,
  524308,
  524572,
  459026,
  524404,
  524340,
  590024,
  459018,
  524388,
  524324,
  589992,
  524292,
  524420,
  524356,
  590056,
  459014,
  524380,
  524316,
  589976,
  459030,
  524412,
  524348,
  590040,
  459022,
  524396,
  524332,
  590008,
  524300,
  524428,
  524364,
  590072,
  459009,
  524370,
  524306,
  524570,
  459025,
  524402,
  524338,
  590020,
  459017,
  524386,
  524322,
  589988,
  524290,
  524418,
  524354,
  590052,
  459013,
  524378,
  524314,
  589972,
  459029,
  524410,
  524346,
  590036,
  459021,
  524394,
  524330,
  590004,
  524298,
  524426,
  524362,
  590068,
  459011,
  524374,
  524310,
  524574,
  459027,
  524406,
  524342,
  590028,
  459019,
  524390,
  524326,
  589996,
  524294,
  524422,
  524358,
  590060,
  459015,
  524382,
  524318,
  589980,
  459031,
  524414,
  524350,
  590044,
  459023,
  524398,
  524334,
  590012,
  524302,
  524430,
  524366,
  590076,
  459008,
  524369,
  524305,
  524569,
  459024,
  524401,
  524337,
  590018,
  459016,
  524385,
  524321,
  589986,
  524289,
  524417,
  524353,
  590050,
  459012,
  524377,
  524313,
  589970,
  459028,
  524409,
  524345,
  590034,
  459020,
  524393,
  524329,
  590002,
  524297,
  524425,
  524361,
  590066,
  459010,
  524373,
  524309,
  524573,
  459026,
  524405,
  524341,
  590026,
  459018,
  524389,
  524325,
  589994,
  524293,
  524421,
  524357,
  590058,
  459014,
  524381,
  524317,
  589978,
  459030,
  524413,
  524349,
  590042,
  459022,
  524397,
  524333,
  590010,
  524301,
  524429,
  524365,
  590074,
  459009,
  524371,
  524307,
  524571,
  459025,
  524403,
  524339,
  590022,
  459017,
  524387,
  524323,
  589990,
  524291,
  524419,
  524355,
  590054,
  459013,
  524379,
  524315,
  589974,
  459029,
  524411,
  524347,
  590038,
  459021,
  524395,
  524331,
  590006,
  524299,
  524427,
  524363,
  590070,
  459011,
  524375,
  524311,
  524575,
  459027,
  524407,
  524343,
  590030,
  459019,
  524391,
  524327,
  589998,
  524295,
  524423,
  524359,
  590062,
  459015,
  524383,
  524319,
  589982,
  459031,
  524415,
  524351,
  590046,
  459023,
  524399,
  524335,
  590014,
  524303,
  524431,
  524367,
  590078,
  459008,
  524368,
  524304,
  524568,
  459024,
  524400,
  524336,
  590017,
  459016,
  524384,
  524320,
  589985,
  524288,
  524416,
  524352,
  590049,
  459012,
  524376,
  524312,
  589969,
  459028,
  524408,
  524344,
  590033,
  459020,
  524392,
  524328,
  590001,
  524296,
  524424,
  524360,
  590065,
  459010,
  524372,
  524308,
  524572,
  459026,
  524404,
  524340,
  590025,
  459018,
  524388,
  524324,
  589993,
  524292,
  524420,
  524356,
  590057,
  459014,
  524380,
  524316,
  589977,
  459030,
  524412,
  524348,
  590041,
  459022,
  524396,
  524332,
  590009,
  524300,
  524428,
  524364,
  590073,
  459009,
  524370,
  524306,
  524570,
  459025,
  524402,
  524338,
  590021,
  459017,
  524386,
  524322,
  589989,
  524290,
  524418,
  524354,
  590053,
  459013,
  524378,
  524314,
  589973,
  459029,
  524410,
  524346,
  590037,
  459021,
  524394,
  524330,
  590005,
  524298,
  524426,
  524362,
  590069,
  459011,
  524374,
  524310,
  524574,
  459027,
  524406,
  524342,
  590029,
  459019,
  524390,
  524326,
  589997,
  524294,
  524422,
  524358,
  590061,
  459015,
  524382,
  524318,
  589981,
  459031,
  524414,
  524350,
  590045,
  459023,
  524398,
  524334,
  590013,
  524302,
  524430,
  524366,
  590077,
  459008,
  524369,
  524305,
  524569,
  459024,
  524401,
  524337,
  590019,
  459016,
  524385,
  524321,
  589987,
  524289,
  524417,
  524353,
  590051,
  459012,
  524377,
  524313,
  589971,
  459028,
  524409,
  524345,
  590035,
  459020,
  524393,
  524329,
  590003,
  524297,
  524425,
  524361,
  590067,
  459010,
  524373,
  524309,
  524573,
  459026,
  524405,
  524341,
  590027,
  459018,
  524389,
  524325,
  589995,
  524293,
  524421,
  524357,
  590059,
  459014,
  524381,
  524317,
  589979,
  459030,
  524413,
  524349,
  590043,
  459022,
  524397,
  524333,
  590011,
  524301,
  524429,
  524365,
  590075,
  459009,
  524371,
  524307,
  524571,
  459025,
  524403,
  524339,
  590023,
  459017,
  524387,
  524323,
  589991,
  524291,
  524419,
  524355,
  590055,
  459013,
  524379,
  524315,
  589975,
  459029,
  524411,
  524347,
  590039,
  459021,
  524395,
  524331,
  590007,
  524299,
  524427,
  524363,
  590071,
  459011,
  524375,
  524311,
  524575,
  459027,
  524407,
  524343,
  590031,
  459019,
  524391,
  524327,
  589999,
  524295,
  524423,
  524359,
  590063,
  459015,
  524383,
  524319,
  589983,
  459031,
  524415,
  524351,
  590047,
  459023,
  524399,
  524335,
  590015,
  524303,
  524431,
  524367,
  590079
]), 9], uf = [new Int32Array([
  327680,
  327696,
  327688,
  327704,
  327684,
  327700,
  327692,
  327708,
  327682,
  327698,
  327690,
  327706,
  327686,
  327702,
  327694,
  0,
  327681,
  327697,
  327689,
  327705,
  327685,
  327701,
  327693,
  327709,
  327683,
  327699,
  327691,
  327707,
  327687,
  327703,
  327695,
  0
]), 5], lf = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = r.call(this, n) || this;
      i.stream = t;
      var a = t.getByte(), o = t.getByte();
      if (a === -1 || o === -1)
        throw new Error("Invalid header in flate stream: " + a + ", " + o);
      if ((a & 15) !== 8)
        throw new Error("Unknown compression method in flate stream: " + a + ", " + o);
      if (((a << 8) + o) % 31 !== 0)
        throw new Error("Bad FCHECK in flate stream: " + a + ", " + o);
      if (o & 32)
        throw new Error("FDICT bit set in flate stream: " + a + ", " + o);
      return i.codeSize = 0, i.codeBuf = 0, i;
    }
    return e.prototype.readBlock = function() {
      var t, n, i = this.stream, a = this.getBits(3);
      if (a & 1 && (this.eof = !0), a >>= 1, a === 0) {
        var o = void 0;
        if ((o = i.getByte()) === -1)
          throw new Error("Bad block header in flate stream");
        var s = o;
        if ((o = i.getByte()) === -1)
          throw new Error("Bad block header in flate stream");
        if (s |= o << 8, (o = i.getByte()) === -1)
          throw new Error("Bad block header in flate stream");
        var u = o;
        if ((o = i.getByte()) === -1)
          throw new Error("Bad block header in flate stream");
        if (u |= o << 8, u !== (~s & 65535) && (s !== 0 || u !== 0))
          throw new Error("Bad uncompressed block length in flate stream");
        this.codeBuf = 0, this.codeSize = 0;
        var l = this.bufferLength;
        t = this.ensureBuffer(l + s);
        var c = l + s;
        if (this.bufferLength = c, s === 0)
          i.peekByte() === -1 && (this.eof = !0);
        else
          for (var h = l; h < c; ++h) {
            if ((o = i.getByte()) === -1) {
              this.eof = !0;
              break;
            }
            t[h] = o;
          }
        return;
      }
      var d, v;
      if (a === 1)
        d = sf, v = uf;
      else if (a === 2) {
        var y = this.getBits(5) + 257, w = this.getBits(5) + 1, F = this.getBits(4) + 4, S = new Uint8Array(Po.length), A = void 0;
        for (A = 0; A < F; ++A)
          S[Po[A]] = this.getBits(3);
        var C = this.generateHuffmanTable(S);
        n = 0, A = 0;
        for (var E = y + w, O = new Uint8Array(E), D = void 0, P = void 0, M = void 0; A < E; ) {
          var U = this.getCode(C);
          if (U === 16)
            D = 2, P = 3, M = n;
          else if (U === 17)
            D = 3, P = 3, M = n = 0;
          else if (U === 18)
            D = 7, P = 11, M = n = 0;
          else {
            O[A++] = n = U;
            continue;
          }
          for (var W = this.getBits(D) + P; W-- > 0; )
            O[A++] = M;
        }
        d = this.generateHuffmanTable(O.subarray(0, y)), v = this.generateHuffmanTable(O.subarray(y, E));
      } else
        throw new Error("Unknown block type in flate stream");
      t = this.buffer;
      for (var V = t ? t.length : 0, Z = this.bufferLength; ; ) {
        var I = this.getCode(d);
        if (I < 256) {
          Z + 1 >= V && (t = this.ensureBuffer(Z + 1), V = t.length), t[Z++] = I;
          continue;
        }
        if (I === 256) {
          this.bufferLength = Z;
          return;
        }
        I -= 257, I = af[I];
        var J = I >> 16;
        J > 0 && (J = this.getBits(J)), n = (I & 65535) + J, I = this.getCode(v), I = of[I], J = I >> 16, J > 0 && (J = this.getBits(J));
        var re = (I & 65535) + J;
        Z + n >= V && (t = this.ensureBuffer(Z + n), V = t.length);
        for (var Y = 0; Y < n; ++Y, ++Z)
          t[Z] = t[Z - re];
      }
    }, e.prototype.getBits = function(t) {
      for (var n = this.stream, i = this.codeSize, a = this.codeBuf, o; i < t; ) {
        if ((o = n.getByte()) === -1)
          throw new Error("Bad encoding in flate stream");
        a |= o << i, i += 8;
      }
      return o = a & (1 << t) - 1, this.codeBuf = a >> t, this.codeSize = i -= t, o;
    }, e.prototype.getCode = function(t) {
      for (var n = this.stream, i = t[0], a = t[1], o = this.codeSize, s = this.codeBuf, u; o < a && (u = n.getByte()) !== -1; )
        s |= u << o, o += 8;
      var l = i[s & (1 << a) - 1];
      typeof i == "number" && console.log("FLATE:", l);
      var c = l >> 16, h = l & 65535;
      if (c < 1 || o < c)
        throw new Error("Bad encoding in flate stream");
      return this.codeBuf = s >> c, this.codeSize = o - c, h;
    }, e.prototype.generateHuffmanTable = function(t) {
      var n = t.length, i = 0, a;
      for (a = 0; a < n; ++a)
        t[a] > i && (i = t[a]);
      for (var o = 1 << i, s = new Int32Array(o), u = 1, l = 0, c = 2; u <= i; ++u, l <<= 1, c <<= 1)
        for (var h = 0; h < n; ++h)
          if (t[h] === u) {
            var d = 0, v = l;
            for (a = 0; a < u; ++a)
              d = d << 1 | v & 1, v >>= 1;
            for (a = d; a < o; a += c)
              s[a] = u << 16 | h;
            ++l;
          }
      return [s, i];
    }, e;
  })(Bn)
), ff = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      var a = r.call(this, n) || this;
      a.stream = t, a.cachedData = 0, a.bitsCached = 0;
      for (var o = 4096, s = {
        earlyChange: i,
        codeLength: 9,
        nextCode: 258,
        dictionaryValues: new Uint8Array(o),
        dictionaryLengths: new Uint16Array(o),
        dictionaryPrevCodes: new Uint16Array(o),
        currentSequence: new Uint8Array(o),
        currentSequenceLength: 0
      }, u = 0; u < 256; ++u)
        s.dictionaryValues[u] = u, s.dictionaryLengths[u] = 1;
      return a.lzwState = s, a;
    }
    return e.prototype.readBlock = function() {
      var t = 512, n = t * 2, i = t, a, o, s, u = this.lzwState;
      if (u) {
        var l = u.earlyChange, c = u.nextCode, h = u.dictionaryValues, d = u.dictionaryLengths, v = u.dictionaryPrevCodes, y = u.codeLength, w = u.prevCode, F = u.currentSequence, S = u.currentSequenceLength, A = 0, C = this.bufferLength, E = this.ensureBuffer(this.bufferLength + n);
        for (a = 0; a < t; a++) {
          var O = this.readBits(y), D = S > 0;
          if (!O || O < 256)
            F[0] = O, S = 1;
          else if (O >= 258)
            if (O < c)
              for (S = d[O], o = S - 1, s = O; o >= 0; o--)
                F[o] = h[s], s = v[s];
            else
              F[S++] = F[0];
          else if (O === 256) {
            y = 9, c = 258, S = 0;
            continue;
          } else {
            this.eof = !0, delete this.lzwState;
            break;
          }
          if (D && (v[c] = w, d[c] = d[w] + 1, h[c] = F[0], c++, y = c + l & c + l - 1 ? y : Math.min(Math.log(c + l) / 0.6931471805599453 + 1, 12) | 0), w = O, A += S, n < A) {
            do
              n += i;
            while (n < A);
            E = this.ensureBuffer(this.bufferLength + n);
          }
          for (o = 0; o < S; o++)
            E[C++] = F[o];
        }
        u.nextCode = c, u.codeLength = y, u.prevCode = w, u.currentSequenceLength = S, this.bufferLength = C;
      }
    }, e.prototype.readBits = function(t) {
      for (var n = this.bitsCached, i = this.cachedData; n < t; ) {
        var a = this.stream.getByte();
        if (a === -1)
          return this.eof = !0, null;
        i = i << 8 | a, n += 8;
      }
      return this.bitsCached = n -= t, this.cachedData = i, i >>> n & (1 << t) - 1;
    }, e;
  })(Bn)
), cf = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = r.call(this, n) || this;
      return i.stream = t, i;
    }
    return e.prototype.readBlock = function() {
      var t = this.stream.getBytes(2);
      if (!t || t.length < 2 || t[0] === 128) {
        this.eof = !0;
        return;
      }
      var n, i = this.bufferLength, a = t[0];
      if (a < 128) {
        if (n = this.ensureBuffer(i + a + 1), n[i++] = t[1], a > 0) {
          var o = this.stream.getBytes(a);
          n.set(o, i), i += a;
        }
      } else {
        a = 257 - a;
        var s = t[1];
        n = this.ensureBuffer(i + a + 1);
        for (var u = 0; u < a; u++)
          n[i++] = s;
      }
      this.bufferLength = i;
    }, e;
  })(Bn)
), Do = function(r, e, t) {
  if (e === b.of("FlateDecode"))
    return new lf(r);
  if (e === b.of("LZWDecode")) {
    var n = 1;
    if (t instanceof pe) {
      var i = t.lookup(b.of("EarlyChange"));
      i instanceof fe && (n = i.asNumber());
    }
    return new ff(r, void 0, n);
  }
  if (e === b.of("ASCII85Decode"))
    return new rf(r);
  if (e === b.of("ASCIIHexDecode"))
    return new nf(r);
  if (e === b.of("RunLengthDecode"))
    return new cf(r);
  throw new bl(e.asString());
}, ws = function(r) {
  var e = r.dict, t = r.contents, n = new xs(t), i = e.lookup(b.of("Filter")), a = e.lookup(b.of("DecodeParms"));
  if (i instanceof b)
    n = Do(n, i, a);
  else if (i instanceof Re)
    for (var o = 0, s = i.size(); o < s; o++)
      n = Do(n, i.lookup(o, b), a && a.lookupMaybe(o, pe));
  else if (i)
    throw new si([b, Re], i);
  return n;
}, hf = function(r) {
  var e = r.MediaBox(), t = e.lookup(2, fe).asNumber() - e.lookup(0, fe).asNumber(), n = e.lookup(3, fe).asNumber() - e.lookup(1, fe).asNumber();
  return { left: 0, bottom: 0, right: t, top: n };
}, df = function(r) {
  return [1, 0, 0, 1, -r.left, -r.bottom];
}, Ss = (
  /** @class */
  (function() {
    function r(e, t, n) {
      this.page = e;
      var i = t ?? hf(e);
      this.width = i.right - i.left, this.height = i.top - i.bottom, this.boundingBox = i, this.transformationMatrix = n ?? df(i);
    }
    return r.for = function(e, t, n) {
      return ge(this, void 0, void 0, function() {
        return ye(this, function(i) {
          return [2, new r(e, t, n)];
        });
      });
    }, r.prototype.embedIntoContext = function(e, t) {
      return ge(this, void 0, void 0, function() {
        var n, i, a, o, s, u, l, c, h, d;
        return ye(this, function(v) {
          if (n = this.page.normalizedEntries(), i = n.Contents, a = n.Resources, !i)
            throw new xl();
          return o = this.decodeContents(i), s = this.boundingBox, u = s.left, l = s.bottom, c = s.right, h = s.top, d = e.flateStream(o, {
            Type: "XObject",
            Subtype: "Form",
            FormType: 1,
            BBox: [u, l, c, h],
            Matrix: this.transformationMatrix,
            Resources: a
          }), t ? (e.assign(t, d), [2, t]) : [2, e.register(d)];
        });
      });
    }, r.prototype.decodeContents = function(e) {
      for (var t = Uint8Array.of(x.Newline), n = [], i = 0, a = e.size(); i < a; i++) {
        var o = e.lookup(i, wt), s = void 0;
        if (o instanceof An)
          s = ws(o).decode();
        else if (o instanceof bn)
          s = o.getUnencodedContents();
        else
          throw new wl(o);
        n.push(s, t);
      }
      return bu.apply(void 0, n);
    }, r;
  })()
), Xn = function(r, e) {
  if (r !== void 0)
    return e[r];
}, xn;
(function(r) {
  r.UseNone = "UseNone", r.UseOutlines = "UseOutlines", r.UseThumbs = "UseThumbs", r.UseOC = "UseOC";
})(xn || (xn = {}));
var wn;
(function(r) {
  r.L2R = "L2R", r.R2L = "R2L";
})(wn || (wn = {}));
var Sn;
(function(r) {
  r.None = "None", r.AppDefault = "AppDefault";
})(Sn || (Sn = {}));
var fi;
(function(r) {
  r.Simplex = "Simplex", r.DuplexFlipShortEdge = "DuplexFlipShortEdge", r.DuplexFlipLongEdge = "DuplexFlipLongEdge";
})(fi || (fi = {}));
var Ao = (
  /** @class */
  (function() {
    function r(e) {
      this.dict = e;
    }
    return r.prototype.lookupBool = function(e) {
      var t = this.dict.lookup(b.of(e));
      if (t instanceof Dn)
        return t;
    }, r.prototype.lookupName = function(e) {
      var t = this.dict.lookup(b.of(e));
      if (t instanceof b)
        return t;
    }, r.prototype.HideToolbar = function() {
      return this.lookupBool("HideToolbar");
    }, r.prototype.HideMenubar = function() {
      return this.lookupBool("HideMenubar");
    }, r.prototype.HideWindowUI = function() {
      return this.lookupBool("HideWindowUI");
    }, r.prototype.FitWindow = function() {
      return this.lookupBool("FitWindow");
    }, r.prototype.CenterWindow = function() {
      return this.lookupBool("CenterWindow");
    }, r.prototype.DisplayDocTitle = function() {
      return this.lookupBool("DisplayDocTitle");
    }, r.prototype.NonFullScreenPageMode = function() {
      return this.lookupName("NonFullScreenPageMode");
    }, r.prototype.Direction = function() {
      return this.lookupName("Direction");
    }, r.prototype.PrintScaling = function() {
      return this.lookupName("PrintScaling");
    }, r.prototype.Duplex = function() {
      return this.lookupName("Duplex");
    }, r.prototype.PickTrayByPDFSize = function() {
      return this.lookupBool("PickTrayByPDFSize");
    }, r.prototype.PrintPageRange = function() {
      var e = this.dict.lookup(b.of("PrintPageRange"));
      if (e instanceof Re)
        return e;
    }, r.prototype.NumCopies = function() {
      var e = this.dict.lookup(b.of("NumCopies"));
      if (e instanceof fe)
        return e;
    }, r.prototype.getHideToolbar = function() {
      var e, t;
      return (t = (e = this.HideToolbar()) === null || e === void 0 ? void 0 : e.asBoolean()) !== null && t !== void 0 ? t : !1;
    }, r.prototype.getHideMenubar = function() {
      var e, t;
      return (t = (e = this.HideMenubar()) === null || e === void 0 ? void 0 : e.asBoolean()) !== null && t !== void 0 ? t : !1;
    }, r.prototype.getHideWindowUI = function() {
      var e, t;
      return (t = (e = this.HideWindowUI()) === null || e === void 0 ? void 0 : e.asBoolean()) !== null && t !== void 0 ? t : !1;
    }, r.prototype.getFitWindow = function() {
      var e, t;
      return (t = (e = this.FitWindow()) === null || e === void 0 ? void 0 : e.asBoolean()) !== null && t !== void 0 ? t : !1;
    }, r.prototype.getCenterWindow = function() {
      var e, t;
      return (t = (e = this.CenterWindow()) === null || e === void 0 ? void 0 : e.asBoolean()) !== null && t !== void 0 ? t : !1;
    }, r.prototype.getDisplayDocTitle = function() {
      var e, t;
      return (t = (e = this.DisplayDocTitle()) === null || e === void 0 ? void 0 : e.asBoolean()) !== null && t !== void 0 ? t : !1;
    }, r.prototype.getNonFullScreenPageMode = function() {
      var e, t, n = (e = this.NonFullScreenPageMode()) === null || e === void 0 ? void 0 : e.decodeText();
      return (t = Xn(n, xn)) !== null && t !== void 0 ? t : xn.UseNone;
    }, r.prototype.getReadingDirection = function() {
      var e, t, n = (e = this.Direction()) === null || e === void 0 ? void 0 : e.decodeText();
      return (t = Xn(n, wn)) !== null && t !== void 0 ? t : wn.L2R;
    }, r.prototype.getPrintScaling = function() {
      var e, t, n = (e = this.PrintScaling()) === null || e === void 0 ? void 0 : e.decodeText();
      return (t = Xn(n, Sn)) !== null && t !== void 0 ? t : Sn.AppDefault;
    }, r.prototype.getDuplex = function() {
      var e, t = (e = this.Duplex()) === null || e === void 0 ? void 0 : e.decodeText();
      return Xn(t, fi);
    }, r.prototype.getPickTrayByPDFSize = function() {
      var e;
      return (e = this.PickTrayByPDFSize()) === null || e === void 0 ? void 0 : e.asBoolean();
    }, r.prototype.getPrintPageRange = function() {
      var e = this.PrintPageRange();
      if (!e)
        return [];
      for (var t = [], n = 0; n < e.size(); n += 2) {
        var i = e.lookup(n, fe).asNumber(), a = e.lookup(n + 1, fe).asNumber();
        t.push({ start: i, end: a });
      }
      return t;
    }, r.prototype.getNumCopies = function() {
      var e, t;
      return (t = (e = this.NumCopies()) === null || e === void 0 ? void 0 : e.asNumber()) !== null && t !== void 0 ? t : 1;
    }, r.prototype.setHideToolbar = function(e) {
      var t = this.dict.context.obj(e);
      this.dict.set(b.of("HideToolbar"), t);
    }, r.prototype.setHideMenubar = function(e) {
      var t = this.dict.context.obj(e);
      this.dict.set(b.of("HideMenubar"), t);
    }, r.prototype.setHideWindowUI = function(e) {
      var t = this.dict.context.obj(e);
      this.dict.set(b.of("HideWindowUI"), t);
    }, r.prototype.setFitWindow = function(e) {
      var t = this.dict.context.obj(e);
      this.dict.set(b.of("FitWindow"), t);
    }, r.prototype.setCenterWindow = function(e) {
      var t = this.dict.context.obj(e);
      this.dict.set(b.of("CenterWindow"), t);
    }, r.prototype.setDisplayDocTitle = function(e) {
      var t = this.dict.context.obj(e);
      this.dict.set(b.of("DisplayDocTitle"), t);
    }, r.prototype.setNonFullScreenPageMode = function(e) {
      pr(e, "nonFullScreenPageMode", xn);
      var t = b.of(e);
      this.dict.set(b.of("NonFullScreenPageMode"), t);
    }, r.prototype.setReadingDirection = function(e) {
      pr(e, "readingDirection", wn);
      var t = b.of(e);
      this.dict.set(b.of("Direction"), t);
    }, r.prototype.setPrintScaling = function(e) {
      pr(e, "printScaling", Sn);
      var t = b.of(e);
      this.dict.set(b.of("PrintScaling"), t);
    }, r.prototype.setDuplex = function(e) {
      pr(e, "duplex", fi);
      var t = b.of(e);
      this.dict.set(b.of("Duplex"), t);
    }, r.prototype.setPickTrayByPDFSize = function(e) {
      var t = this.dict.context.obj(e);
      this.dict.set(b.of("PickTrayByPDFSize"), t);
    }, r.prototype.setPrintPageRange = function(e) {
      Array.isArray(e) || (e = [e]);
      for (var t = [], n = 0, i = e.length; n < i; n++)
        t.push(e[n].start), t.push(e[n].end);
      fs(t, "printPageRange", ["number"]);
      var a = this.dict.context.obj(t);
      this.dict.set(b.of("PrintPageRange"), a);
    }, r.prototype.setNumCopies = function(e) {
      bt(e, "numCopies", 1, Number.MAX_VALUE), ml(e, "numCopies");
      var t = this.dict.context.obj(e);
      this.dict.set(b.of("NumCopies"), t);
    }, r.fromDict = function(e) {
      return new r(e);
    }, r.create = function(e) {
      var t = e.obj({});
      return new r(t);
    }, r;
  })()
), vf = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+Tf/, Fs = (
  /** @class */
  (function() {
    function r(e, t) {
      this.dict = e, this.ref = t;
    }
    return r.prototype.T = function() {
      return this.dict.lookupMaybe(b.of("T"), Ee, se);
    }, r.prototype.Ff = function() {
      var e = this.getInheritableAttribute(b.of("Ff"));
      return this.dict.context.lookupMaybe(e, fe);
    }, r.prototype.V = function() {
      var e = this.getInheritableAttribute(b.of("V"));
      return this.dict.context.lookup(e);
    }, r.prototype.Kids = function() {
      return this.dict.lookupMaybe(b.of("Kids"), Re);
    }, r.prototype.DA = function() {
      var e = this.dict.lookup(b.of("DA"));
      if (e instanceof Ee || e instanceof se)
        return e;
    }, r.prototype.setKids = function(e) {
      this.dict.set(b.of("Kids"), this.dict.context.obj(e));
    }, r.prototype.getParent = function() {
      var e = this.dict.get(b.of("Parent"));
      if (e instanceof Ne) {
        var t = this.dict.lookup(b.of("Parent"), pe);
        return new r(t, e);
      }
    }, r.prototype.setParent = function(e) {
      e ? this.dict.set(b.of("Parent"), e) : this.dict.delete(b.of("Parent"));
    }, r.prototype.getFullyQualifiedName = function() {
      var e = this.getParent();
      return e ? e.getFullyQualifiedName() + "." + this.getPartialName() : this.getPartialName();
    }, r.prototype.getPartialName = function() {
      var e;
      return (e = this.T()) === null || e === void 0 ? void 0 : e.decodeText();
    }, r.prototype.setPartialName = function(e) {
      e ? this.dict.set(b.of("T"), se.fromText(e)) : this.dict.delete(b.of("T"));
    }, r.prototype.setDefaultAppearance = function(e) {
      this.dict.set(b.of("DA"), Ee.of(e));
    }, r.prototype.getDefaultAppearance = function() {
      var e = this.DA();
      return e instanceof se ? e.decodeText() : e?.asString();
    }, r.prototype.setFontSize = function(e) {
      var t, n = (t = this.getFullyQualifiedName()) !== null && t !== void 0 ? t : "", i = this.getDefaultAppearance();
      if (!i)
        throw new Cl(n);
      var a = wa(i, vf);
      if (!a.match)
        throw new Tl(n);
      var o = i.slice(0, a.pos - a.match[0].length), s = a.pos <= i.length ? i.slice(a.pos) : "", u = a.match[1], l = o + " /" + u + " " + e + " Tf " + s;
      this.setDefaultAppearance(l);
    }, r.prototype.getFlags = function() {
      var e, t;
      return (t = (e = this.Ff()) === null || e === void 0 ? void 0 : e.asNumber()) !== null && t !== void 0 ? t : 0;
    }, r.prototype.setFlags = function(e) {
      this.dict.set(b.of("Ff"), fe.of(e));
    }, r.prototype.hasFlag = function(e) {
      var t = this.getFlags();
      return (t & e) !== 0;
    }, r.prototype.setFlag = function(e) {
      var t = this.getFlags();
      this.setFlags(t | e);
    }, r.prototype.clearFlag = function(e) {
      var t = this.getFlags();
      this.setFlags(t & ~e);
    }, r.prototype.setFlagTo = function(e, t) {
      t ? this.setFlag(e) : this.clearFlag(e);
    }, r.prototype.getInheritableAttribute = function(e) {
      var t;
      return this.ascend(function(n) {
        t || (t = n.dict.get(e));
      }), t;
    }, r.prototype.ascend = function(e) {
      e(this);
      var t = this.getParent();
      t && t.ascend(e);
    }, r;
  })()
), na = (
  /** @class */
  (function() {
    function r(e) {
      this.dict = e;
    }
    return r.prototype.W = function() {
      var e = this.dict.lookup(b.of("W"));
      if (e instanceof fe)
        return e;
    }, r.prototype.getWidth = function() {
      var e, t;
      return (t = (e = this.W()) === null || e === void 0 ? void 0 : e.asNumber()) !== null && t !== void 0 ? t : 1;
    }, r.prototype.setWidth = function(e) {
      var t = this.dict.context.obj(e);
      this.dict.set(b.of("W"), t);
    }, r.fromDict = function(e) {
      return new r(e);
    }, r;
  })()
), pf = (
  /** @class */
  (function() {
    function r(e) {
      this.dict = e;
    }
    return r.prototype.Rect = function() {
      return this.dict.lookup(b.of("Rect"), Re);
    }, r.prototype.AP = function() {
      return this.dict.lookupMaybe(b.of("AP"), pe);
    }, r.prototype.F = function() {
      var e = this.dict.lookup(b.of("F"));
      return this.dict.context.lookupMaybe(e, fe);
    }, r.prototype.getRectangle = function() {
      var e, t = this.Rect();
      return (e = t?.asRectangle()) !== null && e !== void 0 ? e : { x: 0, y: 0, width: 0, height: 0 };
    }, r.prototype.setRectangle = function(e) {
      var t = e.x, n = e.y, i = e.width, a = e.height, o = this.dict.context.obj([t, n, t + i, n + a]);
      this.dict.set(b.of("Rect"), o);
    }, r.prototype.getAppearanceState = function() {
      var e = this.dict.lookup(b.of("AS"));
      if (e instanceof b)
        return e;
    }, r.prototype.setAppearanceState = function(e) {
      this.dict.set(b.of("AS"), e);
    }, r.prototype.setAppearances = function(e) {
      this.dict.set(b.of("AP"), e);
    }, r.prototype.ensureAP = function() {
      var e = this.AP();
      return e || (e = this.dict.context.obj({}), this.dict.set(b.of("AP"), e)), e;
    }, r.prototype.getNormalAppearance = function() {
      var e = this.ensureAP(), t = e.get(b.of("N"));
      if (t instanceof Ne || t instanceof pe)
        return t;
      throw new Error("Unexpected N type: " + t?.constructor.name);
    }, r.prototype.setNormalAppearance = function(e) {
      var t = this.ensureAP();
      t.set(b.of("N"), e);
    }, r.prototype.setRolloverAppearance = function(e) {
      var t = this.ensureAP();
      t.set(b.of("R"), e);
    }, r.prototype.setDownAppearance = function(e) {
      var t = this.ensureAP();
      t.set(b.of("D"), e);
    }, r.prototype.removeRolloverAppearance = function() {
      var e = this.AP();
      e?.delete(b.of("R"));
    }, r.prototype.removeDownAppearance = function() {
      var e = this.AP();
      e?.delete(b.of("D"));
    }, r.prototype.getAppearances = function() {
      var e = this.AP();
      if (e) {
        var t = e.lookup(b.of("N"), pe, wt), n = e.lookupMaybe(b.of("R"), pe, wt), i = e.lookupMaybe(b.of("D"), pe, wt);
        return { normal: t, rollover: n, down: i };
      }
    }, r.prototype.getFlags = function() {
      var e, t;
      return (t = (e = this.F()) === null || e === void 0 ? void 0 : e.asNumber()) !== null && t !== void 0 ? t : 0;
    }, r.prototype.setFlags = function(e) {
      this.dict.set(b.of("F"), fe.of(e));
    }, r.prototype.hasFlag = function(e) {
      var t = this.getFlags();
      return (t & e) !== 0;
    }, r.prototype.setFlag = function(e) {
      var t = this.getFlags();
      this.setFlags(t | e);
    }, r.prototype.clearFlag = function(e) {
      var t = this.getFlags();
      this.setFlags(t & ~e);
    }, r.prototype.setFlagTo = function(e, t) {
      t ? this.setFlag(e) : this.clearFlag(e);
    }, r.fromDict = function(e) {
      return new r(e);
    }, r;
  })()
), ia = (
  /** @class */
  (function() {
    function r(e) {
      this.dict = e;
    }
    return r.prototype.R = function() {
      var e = this.dict.lookup(b.of("R"));
      if (e instanceof fe)
        return e;
    }, r.prototype.BC = function() {
      var e = this.dict.lookup(b.of("BC"));
      if (e instanceof Re)
        return e;
    }, r.prototype.BG = function() {
      var e = this.dict.lookup(b.of("BG"));
      if (e instanceof Re)
        return e;
    }, r.prototype.CA = function() {
      var e = this.dict.lookup(b.of("CA"));
      if (e instanceof se || e instanceof Ee)
        return e;
    }, r.prototype.RC = function() {
      var e = this.dict.lookup(b.of("RC"));
      if (e instanceof se || e instanceof Ee)
        return e;
    }, r.prototype.AC = function() {
      var e = this.dict.lookup(b.of("AC"));
      if (e instanceof se || e instanceof Ee)
        return e;
    }, r.prototype.getRotation = function() {
      var e;
      return (e = this.R()) === null || e === void 0 ? void 0 : e.asNumber();
    }, r.prototype.getBorderColor = function() {
      var e = this.BC();
      if (e) {
        for (var t = [], n = 0, i = e?.size(); n < i; n++) {
          var a = e.get(n);
          a instanceof fe && t.push(a.asNumber());
        }
        return t;
      }
    }, r.prototype.getBackgroundColor = function() {
      var e = this.BG();
      if (e) {
        for (var t = [], n = 0, i = e?.size(); n < i; n++) {
          var a = e.get(n);
          a instanceof fe && t.push(a.asNumber());
        }
        return t;
      }
    }, r.prototype.getCaptions = function() {
      var e = this.CA(), t = this.RC(), n = this.AC();
      return {
        normal: e?.decodeText(),
        rollover: t?.decodeText(),
        down: n?.decodeText()
      };
    }, r.prototype.setRotation = function(e) {
      var t = this.dict.context.obj(e);
      this.dict.set(b.of("R"), t);
    }, r.prototype.setBorderColor = function(e) {
      var t = this.dict.context.obj(e);
      this.dict.set(b.of("BC"), t);
    }, r.prototype.setBackgroundColor = function(e) {
      var t = this.dict.context.obj(e);
      this.dict.set(b.of("BG"), t);
    }, r.prototype.setCaptions = function(e) {
      var t = se.fromText(e.normal);
      if (this.dict.set(b.of("CA"), t), e.rollover) {
        var n = se.fromText(e.rollover);
        this.dict.set(b.of("RC"), n);
      } else
        this.dict.delete(b.of("RC"));
      if (e.down) {
        var i = se.fromText(e.down);
        this.dict.set(b.of("AC"), i);
      } else
        this.dict.delete(b.of("AC"));
    }, r.fromDict = function(e) {
      return new r(e);
    }, r;
  })()
), da = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.MK = function() {
      var t = this.dict.lookup(b.of("MK"));
      if (t instanceof pe)
        return t;
    }, e.prototype.BS = function() {
      var t = this.dict.lookup(b.of("BS"));
      if (t instanceof pe)
        return t;
    }, e.prototype.DA = function() {
      var t = this.dict.lookup(b.of("DA"));
      if (t instanceof Ee || t instanceof se)
        return t;
    }, e.prototype.P = function() {
      var t = this.dict.get(b.of("P"));
      if (t instanceof Ne)
        return t;
    }, e.prototype.setP = function(t) {
      this.dict.set(b.of("P"), t);
    }, e.prototype.setDefaultAppearance = function(t) {
      this.dict.set(b.of("DA"), Ee.of(t));
    }, e.prototype.getDefaultAppearance = function() {
      var t = this.DA();
      return t instanceof se ? t.decodeText() : t?.asString();
    }, e.prototype.getAppearanceCharacteristics = function() {
      var t = this.MK();
      if (t)
        return ia.fromDict(t);
    }, e.prototype.getOrCreateAppearanceCharacteristics = function() {
      var t = this.MK();
      if (t)
        return ia.fromDict(t);
      var n = ia.fromDict(this.dict.context.obj({}));
      return this.dict.set(b.of("MK"), n.dict), n;
    }, e.prototype.getBorderStyle = function() {
      var t = this.BS();
      if (t)
        return na.fromDict(t);
    }, e.prototype.getOrCreateBorderStyle = function() {
      var t = this.BS();
      if (t)
        return na.fromDict(t);
      var n = na.fromDict(this.dict.context.obj({}));
      return this.dict.set(b.of("BS"), n.dict), n;
    }, e.prototype.getOnValue = function() {
      var t, n = (t = this.getAppearances()) === null || t === void 0 ? void 0 : t.normal;
      if (n instanceof pe)
        for (var i = n.keys(), a = 0, o = i.length; a < o; a++) {
          var s = i[a];
          if (s !== b.of("Off"))
            return s;
        }
    }, e.fromDict = function(t) {
      return new e(t);
    }, e.create = function(t, n) {
      var i = t.obj({
        Type: "Annot",
        Subtype: "Widget",
        Rect: [0, 0, 0, 0],
        Parent: n
      });
      return new e(i);
    }, e;
  })(pf)
), tn = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.FT = function() {
      var t = this.getInheritableAttribute(b.of("FT"));
      return this.dict.context.lookup(t, b);
    }, e.prototype.getWidgets = function() {
      var t = this.Kids();
      if (!t)
        return [da.fromDict(this.dict)];
      for (var n = new Array(t.size()), i = 0, a = t.size(); i < a; i++) {
        var o = t.lookup(i, pe);
        n[i] = da.fromDict(o);
      }
      return n;
    }, e.prototype.addWidget = function(t) {
      var n = this.normalizedEntries().Kids;
      n.push(t);
    }, e.prototype.removeWidget = function(t) {
      var n = this.Kids();
      if (n) {
        if (t < 0 || t > n.size())
          throw new ui(t, 0, n.size());
        n.remove(t);
      } else {
        if (t !== 0)
          throw new ui(t, 0, 0);
        this.setKids([]);
      }
    }, e.prototype.normalizedEntries = function() {
      var t = this.Kids();
      return t || (t = this.dict.context.obj([this.ref]), this.dict.set(b.of("Kids"), t)), { Kids: t };
    }, e.fromDict = function(t, n) {
      return new e(t, n);
    }, e;
  })(Fs)
), Ra = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.Opt = function() {
      return this.dict.lookupMaybe(b.of("Opt"), Ee, se, Re);
    }, e.prototype.setOpt = function(t) {
      this.dict.set(b.of("Opt"), this.dict.context.obj(t));
    }, e.prototype.getExportValues = function() {
      var t = this.Opt();
      if (t) {
        if (t instanceof Ee || t instanceof se)
          return [t];
        for (var n = [], i = 0, a = t.size(); i < a; i++) {
          var o = t.lookup(i);
          (o instanceof Ee || o instanceof se) && n.push(o);
        }
        return n;
      }
    }, e.prototype.removeExportValue = function(t) {
      var n = this.Opt();
      if (n)
        if (n instanceof Ee || n instanceof se) {
          if (t !== 0)
            throw new ui(t, 0, 0);
          this.setOpt([]);
        } else {
          if (t < 0 || t > n.size())
            throw new ui(t, 0, n.size());
          n.remove(t);
        }
    }, e.prototype.normalizeExportValues = function() {
      for (var t, n, i, a, o = (t = this.getExportValues()) !== null && t !== void 0 ? t : [], s = [], u = this.getWidgets(), l = 0, c = u.length; l < c; l++) {
        var h = u[l], d = (n = o[l]) !== null && n !== void 0 ? n : se.fromText((a = (i = h.getOnValue()) === null || i === void 0 ? void 0 : i.decodeText()) !== null && a !== void 0 ? a : "");
        s.push(d);
      }
      this.setOpt(s);
    }, e.prototype.addOpt = function(t, n) {
      var i;
      this.normalizeExportValues();
      var a = t.decodeText(), o;
      if (n)
        for (var s = (i = this.getExportValues()) !== null && i !== void 0 ? i : [], u = 0, l = s.length; u < l; u++) {
          var c = s[u];
          c.decodeText() === a && (o = u);
        }
      var h = this.Opt();
      return h.push(t), o ?? h.size() - 1;
    }, e.prototype.addWidgetWithOpt = function(t, n, i) {
      var a = this.addOpt(n, i), o = b.of(String(a));
      return this.addWidget(t), o;
    }, e;
  })(tn)
), Ti = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.setValue = function(t) {
      var n, i = (n = this.getOnValue()) !== null && n !== void 0 ? n : b.of("Yes");
      if (t !== i && t !== b.of("Off"))
        throw new Ca();
      this.dict.set(b.of("V"), t);
      for (var a = this.getWidgets(), o = 0, s = a.length; o < s; o++) {
        var u = a[o], l = u.getOnValue() === t ? t : b.of("Off");
        u.setAppearanceState(l);
      }
    }, e.prototype.getValue = function() {
      var t = this.V();
      return t instanceof b ? t : b.of("Off");
    }, e.prototype.getOnValue = function() {
      var t = this.getWidgets()[0];
      return t?.getOnValue();
    }, e.fromDict = function(t, n) {
      return new e(t, n);
    }, e.create = function(t) {
      var n = t.obj({
        FT: "Btn",
        Kids: []
      }), i = t.register(n);
      return new e(n, i);
    }, e;
  })(Ra)
), Ye = function(r) {
  return 1 << r;
}, Vt;
(function(r) {
  r[r.ReadOnly = Ye(0)] = "ReadOnly", r[r.Required = Ye(1)] = "Required", r[r.NoExport = Ye(2)] = "NoExport";
})(Vt || (Vt = {}));
var Rt;
(function(r) {
  r[r.NoToggleToOff = Ye(14)] = "NoToggleToOff", r[r.Radio = Ye(15)] = "Radio", r[r.PushButton = Ye(16)] = "PushButton", r[r.RadiosInUnison = Ye(25)] = "RadiosInUnison";
})(Rt || (Rt = {}));
var He;
(function(r) {
  r[r.Multiline = Ye(12)] = "Multiline", r[r.Password = Ye(13)] = "Password", r[r.FileSelect = Ye(20)] = "FileSelect", r[r.DoNotSpellCheck = Ye(22)] = "DoNotSpellCheck", r[r.DoNotScroll = Ye(23)] = "DoNotScroll", r[r.Comb = Ye(24)] = "Comb", r[r.RichText = Ye(25)] = "RichText";
})(He || (He = {}));
var Oe;
(function(r) {
  r[r.Combo = Ye(17)] = "Combo", r[r.Edit = Ye(18)] = "Edit", r[r.Sort = Ye(19)] = "Sort", r[r.MultiSelect = Ye(21)] = "MultiSelect", r[r.DoNotSpellCheck = Ye(22)] = "DoNotSpellCheck", r[r.CommitOnSelChange = Ye(26)] = "CommitOnSelChange";
})(Oe || (Oe = {}));
var ks = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.setValues = function(t) {
      if (this.hasFlag(Oe.Combo) && !this.hasFlag(Oe.Edit) && !this.valuesAreValid(t))
        throw new Ca();
      if (t.length === 0 && this.dict.delete(b.of("V")), t.length === 1 && this.dict.set(b.of("V"), t[0]), t.length > 1) {
        if (!this.hasFlag(Oe.MultiSelect))
          throw new kl();
        this.dict.set(b.of("V"), this.dict.context.obj(t));
      }
      this.updateSelectedIndices(t);
    }, e.prototype.valuesAreValid = function(t) {
      for (var n = this.getOptions(), i = function(u, l) {
        var c = t[u].decodeText();
        if (!n.find(function(h) {
          return c === (h.display || h.value).decodeText();
        }))
          return { value: !1 };
      }, a = 0, o = t.length; a < o; a++) {
        var s = i(a);
        if (typeof s == "object")
          return s.value;
      }
      return !0;
    }, e.prototype.updateSelectedIndices = function(t) {
      if (t.length > 1) {
        for (var n = new Array(t.length), i = this.getOptions(), a = function(u, l) {
          var c = t[u].decodeText();
          n[u] = i.findIndex(function(h) {
            return c === (h.display || h.value).decodeText();
          });
        }, o = 0, s = t.length; o < s; o++)
          a(o, s);
        this.dict.set(b.of("I"), this.dict.context.obj(n.sort()));
      } else
        this.dict.delete(b.of("I"));
    }, e.prototype.getValues = function() {
      var t = this.V();
      if (t instanceof Ee || t instanceof se)
        return [t];
      if (t instanceof Re) {
        for (var n = [], i = 0, a = t.size(); i < a; i++) {
          var o = t.lookup(i);
          (o instanceof Ee || o instanceof se) && n.push(o);
        }
        return n;
      }
      return [];
    }, e.prototype.Opt = function() {
      return this.dict.lookupMaybe(b.of("Opt"), Ee, se, Re);
    }, e.prototype.setOptions = function(t) {
      for (var n = new Array(t.length), i = 0, a = t.length; i < a; i++) {
        var o = t[i], s = o.value, u = o.display;
        n[i] = this.dict.context.obj([s, u || s]);
      }
      this.dict.set(b.of("Opt"), this.dict.context.obj(n));
    }, e.prototype.getOptions = function() {
      var t = this.Opt();
      if (t instanceof Ee || t instanceof se)
        return [{ value: t, display: t }];
      if (t instanceof Re) {
        for (var n = [], i = 0, a = t.size(); i < a; i++) {
          var o = t.lookup(i);
          if ((o instanceof Ee || o instanceof se) && n.push({ value: o, display: o }), o instanceof Re && o.size() > 0) {
            var s = o.lookup(0, Ee, se), u = o.lookupMaybe(1, Ee, se);
            n.push({ value: s, display: u || s });
          }
        }
        return n;
      }
      return [];
    }, e;
  })(tn)
), Pi = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.fromDict = function(t, n) {
      return new e(t, n);
    }, e.create = function(t) {
      var n = t.obj({
        FT: "Ch",
        Ff: Oe.Combo,
        Kids: []
      }), i = t.register(n);
      return new e(n, i);
    }, e;
  })(ks)
), ci = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.addField = function(t) {
      var n = this.normalizedEntries().Kids;
      n?.push(t);
    }, e.prototype.normalizedEntries = function() {
      var t = this.Kids();
      return t || (t = this.dict.context.obj([]), this.dict.set(b.of("Kids"), t)), { Kids: t };
    }, e.fromDict = function(t, n) {
      return new e(t, n);
    }, e.create = function(t) {
      var n = t.obj({}), i = t.register(n);
      return new e(n, i);
    }, e;
  })(Fs)
), Oa = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.fromDict = function(t, n) {
      return new e(t, n);
    }, e;
  })(tn)
), Di = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.MaxLen = function() {
      var t = this.dict.lookup(b.of("MaxLen"));
      if (t instanceof fe)
        return t;
    }, e.prototype.Q = function() {
      var t = this.dict.lookup(b.of("Q"));
      if (t instanceof fe)
        return t;
    }, e.prototype.setMaxLength = function(t) {
      this.dict.set(b.of("MaxLen"), fe.of(t));
    }, e.prototype.removeMaxLength = function() {
      this.dict.delete(b.of("MaxLen"));
    }, e.prototype.getMaxLength = function() {
      var t;
      return (t = this.MaxLen()) === null || t === void 0 ? void 0 : t.asNumber();
    }, e.prototype.setQuadding = function(t) {
      this.dict.set(b.of("Q"), fe.of(t));
    }, e.prototype.getQuadding = function() {
      var t;
      return (t = this.Q()) === null || t === void 0 ? void 0 : t.asNumber();
    }, e.prototype.setValue = function(t) {
      this.dict.set(b.of("V"), t);
    }, e.prototype.removeValue = function() {
      this.dict.delete(b.of("V"));
    }, e.prototype.getValue = function() {
      var t = this.V();
      if (t instanceof Ee || t instanceof se)
        return t;
    }, e.fromDict = function(t, n) {
      return new e(t, n);
    }, e.create = function(t) {
      var n = t.obj({
        FT: "Tx",
        Kids: []
      }), i = t.register(n);
      return new e(n, i);
    }, e;
  })(tn)
), Ai = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.fromDict = function(t, n) {
      return new e(t, n);
    }, e.create = function(t) {
      var n = t.obj({
        FT: "Btn",
        Ff: Rt.PushButton,
        Kids: []
      }), i = t.register(n);
      return new e(n, i);
    }, e;
  })(Ra)
), Ri = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.setValue = function(t) {
      var n = this.getOnValues();
      if (!n.includes(t) && t !== b.of("Off"))
        throw new Ca();
      this.dict.set(b.of("V"), t);
      for (var i = this.getWidgets(), a = 0, o = i.length; a < o; a++) {
        var s = i[a], u = s.getOnValue() === t ? t : b.of("Off");
        s.setAppearanceState(u);
      }
    }, e.prototype.getValue = function() {
      var t = this.V();
      return t instanceof b ? t : b.of("Off");
    }, e.prototype.getOnValues = function() {
      for (var t = this.getWidgets(), n = [], i = 0, a = t.length; i < a; i++) {
        var o = t[i].getOnValue();
        o && n.push(o);
      }
      return n;
    }, e.fromDict = function(t, n) {
      return new e(t, n);
    }, e.create = function(t) {
      var n = t.obj({
        FT: "Btn",
        Ff: Rt.Radio,
        Kids: []
      }), i = t.register(n);
      return new e(n, i);
    }, e;
  })(Ra)
), Oi = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.fromDict = function(t, n) {
      return new e(t, n);
    }, e.create = function(t) {
      var n = t.obj({
        FT: "Ch",
        Kids: []
      }), i = t.register(n);
      return new e(n, i);
    }, e;
  })(ks)
), Ea = function(r) {
  if (!r)
    return [];
  for (var e = [], t = 0, n = r.size(); t < n; t++) {
    var i = r.get(t), a = r.lookup(t);
    i instanceof Ne && a instanceof pe && e.push([Cs(a, i), i]);
  }
  return e;
}, Cs = function(r, e) {
  var t = gf(r);
  return t ? ci.fromDict(r, e) : yf(r, e);
}, gf = function(r) {
  var e = r.lookup(b.of("Kids"));
  if (e instanceof Re)
    for (var t = 0, n = e.size(); t < n; t++) {
      var i = e.lookup(t), a = i instanceof pe && i.has(b.of("T"));
      if (a)
        return !0;
    }
  return !1;
}, yf = function(r, e) {
  var t = Na(r, b.of("FT")), n = r.context.lookup(t, b);
  return n === b.of("Btn") ? mf(r, e) : n === b.of("Ch") ? bf(r, e) : n === b.of("Tx") ? Di.fromDict(r, e) : n === b.of("Sig") ? Oa.fromDict(r, e) : tn.fromDict(r, e);
}, mf = function(r, e) {
  var t, n = Na(r, b.of("Ff")), i = r.context.lookupMaybe(n, fe), a = (t = i?.asNumber()) !== null && t !== void 0 ? t : 0;
  return va(a, Rt.PushButton) ? Ai.fromDict(r, e) : va(a, Rt.Radio) ? Ri.fromDict(r, e) : Ti.fromDict(r, e);
}, bf = function(r, e) {
  var t, n = Na(r, b.of("Ff")), i = r.context.lookupMaybe(n, fe), a = (t = i?.asNumber()) !== null && t !== void 0 ? t : 0;
  return va(a, Oe.Combo) ? Pi.fromDict(r, e) : Oi.fromDict(r, e);
}, va = function(r, e) {
  return (r & e) !== 0;
}, Na = function(r, e) {
  var t;
  return Ts(r, function(n) {
    t || (t = n.get(e));
  }), t;
}, Ts = function(r, e) {
  e(r);
  var t = r.lookupMaybe(b.of("Parent"), pe);
  t && Ts(t, e);
}, hi = (
  /** @class */
  (function() {
    function r(e) {
      this.dict = e;
    }
    return r.prototype.Fields = function() {
      var e = this.dict.lookup(b.of("Fields"));
      if (e instanceof Re)
        return e;
    }, r.prototype.getFields = function() {
      for (var e = this.normalizedEntries().Fields, t = new Array(e.size()), n = 0, i = e.size(); n < i; n++) {
        var a = e.get(n), o = e.lookup(n, pe);
        t[n] = [Cs(o, a), a];
      }
      return t;
    }, r.prototype.getAllFields = function() {
      var e = [], t = function(n) {
        if (n)
          for (var i = 0, a = n.length; i < a; i++) {
            var o = n[i];
            e.push(o);
            var s = o[0];
            s instanceof ci && t(Ea(s.Kids()));
          }
      };
      return t(this.getFields()), e;
    }, r.prototype.addField = function(e) {
      var t = this.normalizedEntries().Fields;
      t?.push(e);
    }, r.prototype.removeField = function(e) {
      var t = e.getParent(), n = t === void 0 ? this.normalizedEntries().Fields : t.Kids(), i = n?.indexOf(e.ref);
      if (n === void 0 || i === void 0)
        throw new Error("Tried to remove inexistent field " + e.getFullyQualifiedName());
      n.remove(i), t !== void 0 && n.size() === 0 && this.removeField(t);
    }, r.prototype.normalizedEntries = function() {
      var e = this.Fields();
      return e || (e = this.dict.context.obj([]), this.dict.set(b.of("Fields"), e)), { Fields: e };
    }, r.fromDict = function(e) {
      return new r(e);
    }, r.create = function(e) {
      var t = e.obj({ Fields: [] });
      return new r(t);
    }, r;
  })()
), Ps = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.Pages = function() {
      return this.lookup(b.of("Pages"), pe);
    }, e.prototype.AcroForm = function() {
      return this.lookupMaybe(b.of("AcroForm"), pe);
    }, e.prototype.getAcroForm = function() {
      var t = this.AcroForm();
      if (t)
        return hi.fromDict(t);
    }, e.prototype.getOrCreateAcroForm = function() {
      var t = this.getAcroForm();
      if (!t) {
        t = hi.create(this.context);
        var n = this.context.register(t.dict);
        this.set(b.of("AcroForm"), n);
      }
      return t;
    }, e.prototype.ViewerPreferences = function() {
      return this.lookupMaybe(b.of("ViewerPreferences"), pe);
    }, e.prototype.getViewerPreferences = function() {
      var t = this.ViewerPreferences();
      if (t)
        return Ao.fromDict(t);
    }, e.prototype.getOrCreateViewerPreferences = function() {
      var t = this.getViewerPreferences();
      if (!t) {
        t = Ao.create(this.context);
        var n = this.context.register(t.dict);
        this.set(b.of("ViewerPreferences"), n);
      }
      return t;
    }, e.prototype.insertLeafNode = function(t, n) {
      var i = this.get(b.of("Pages")), a = this.Pages().insertLeafNode(t, n);
      return a || i;
    }, e.prototype.removeLeafNode = function(t) {
      this.Pages().removeLeafNode(t);
    }, e.withContextAndPages = function(t, n) {
      var i = /* @__PURE__ */ new Map();
      return i.set(b.of("Type"), b.of("Catalog")), i.set(b.of("Pages"), n), new e(i, t);
    }, e.fromMapWithContext = function(t, n) {
      return new e(t, n);
    }, e;
  })(pe)
), Ds = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.Parent = function() {
      return this.lookup(b.of("Parent"));
    }, e.prototype.Kids = function() {
      return this.lookup(b.of("Kids"), Re);
    }, e.prototype.Count = function() {
      return this.lookup(b.of("Count"), fe);
    }, e.prototype.pushTreeNode = function(t) {
      var n = this.Kids();
      n.push(t);
    }, e.prototype.pushLeafNode = function(t) {
      var n = this.Kids();
      this.insertLeafKid(n.size(), t);
    }, e.prototype.insertLeafNode = function(t, n) {
      var i = this.Kids(), a = this.Count().asNumber();
      if (n > a)
        throw new go(n, a);
      for (var o = n, s = 0, u = i.size(); s < u; s++) {
        if (o === 0) {
          this.insertLeafKid(s, t);
          return;
        }
        var l = i.get(s), c = this.context.lookup(l);
        if (c instanceof e) {
          if (c.Count().asNumber() > o)
            return c.insertLeafNode(t, o) || l;
          o -= c.Count().asNumber();
        }
        c instanceof ir && (o -= 1);
      }
      if (o === 0) {
        this.insertLeafKid(i.size(), t);
        return;
      }
      throw new yo(n, "insertLeafNode");
    }, e.prototype.removeLeafNode = function(t, n) {
      n === void 0 && (n = !0);
      var i = this.Kids(), a = this.Count().asNumber();
      if (t >= a)
        throw new go(t, a);
      for (var o = t, s = 0, u = i.size(); s < u; s++) {
        var l = i.get(s), c = this.context.lookup(l);
        if (c instanceof e)
          if (c.Count().asNumber() > o) {
            c.removeLeafNode(o, n), n && c.Kids().size() === 0 && i.remove(s);
            return;
          } else
            o -= c.Count().asNumber();
        if (c instanceof ir)
          if (o === 0) {
            this.removeKid(s);
            return;
          } else
            o -= 1;
      }
      throw new yo(t, "removeLeafNode");
    }, e.prototype.ascend = function(t) {
      t(this);
      var n = this.Parent();
      n && n.ascend(t);
    }, e.prototype.traverse = function(t) {
      for (var n = this.Kids(), i = 0, a = n.size(); i < a; i++) {
        var o = n.get(i), s = this.context.lookup(o);
        s instanceof e && s.traverse(t), t(s, o);
      }
    }, e.prototype.insertLeafKid = function(t, n) {
      var i = this.Kids();
      this.ascend(function(a) {
        var o = a.Count().asNumber() + 1;
        a.set(b.of("Count"), fe.of(o));
      }), i.insert(t, n);
    }, e.prototype.removeKid = function(t) {
      var n = this.Kids(), i = n.lookup(t);
      i instanceof ir && this.ascend(function(a) {
        var o = a.Count().asNumber() - 1;
        a.set(b.of("Count"), fe.of(o));
      }), n.remove(t);
    }, e.withContext = function(t, n) {
      var i = /* @__PURE__ */ new Map();
      return i.set(b.of("Type"), b.of("Pages")), i.set(b.of("Kids"), t.obj([])), i.set(b.of("Count"), t.obj(0)), n && i.set(b.of("Parent"), n), new e(i, t);
    }, e.fromMapWithContext = function(t, n) {
      return new e(t, n);
    }, e;
  })(pe)
), lt = new Uint8Array(256);
lt[x.Zero] = 1;
lt[x.One] = 1;
lt[x.Two] = 1;
lt[x.Three] = 1;
lt[x.Four] = 1;
lt[x.Five] = 1;
lt[x.Six] = 1;
lt[x.Seven] = 1;
lt[x.Eight] = 1;
lt[x.Nine] = 1;
var Ei = new Uint8Array(256);
Ei[x.Period] = 1;
Ei[x.Plus] = 1;
Ei[x.Minus] = 1;
var za = new Uint8Array(256);
for (var ln = 0, xf = 256; ln < xf; ln++)
  za[ln] = lt[ln] || Ei[ln] ? 1 : 0;
var Ro = x.Newline, Oo = x.CarriageReturn, wf = (
  /** @class */
  (function() {
    function r(e, t) {
      t === void 0 && (t = !1), this.bytes = e, this.capNumbers = t;
    }
    return r.prototype.parseRawInt = function() {
      for (var e = ""; !this.bytes.done(); ) {
        var t = this.bytes.peek();
        if (!lt[t])
          break;
        e += rr(this.bytes.next());
      }
      var n = Number(e);
      if (!e || !isFinite(n))
        throw new mo(this.bytes.position(), e);
      return n;
    }, r.prototype.parseRawNumber = function() {
      for (var e = ""; !this.bytes.done(); ) {
        var t = this.bytes.peek();
        if (!za[t] || (e += rr(this.bytes.next()), t === x.Period))
          break;
      }
      for (; !this.bytes.done(); ) {
        var t = this.bytes.peek();
        if (!lt[t])
          break;
        e += rr(this.bytes.next());
      }
      var n = Number(e);
      if (!e || !isFinite(n))
        throw new mo(this.bytes.position(), e);
      if (n > Number.MAX_SAFE_INTEGER)
        if (this.capNumbers) {
          var i = "Parsed number that is too large for some PDF readers: " + e + ", using Number.MAX_SAFE_INTEGER instead.";
          return console.warn(i), Number.MAX_SAFE_INTEGER;
        } else {
          var i = "Parsed number that is too large for some PDF readers: " + e + ", not capping.";
          console.warn(i);
        }
      return n;
    }, r.prototype.skipWhitespace = function() {
      for (; !this.bytes.done() && or[this.bytes.peek()]; )
        this.bytes.next();
    }, r.prototype.skipLine = function() {
      for (; !this.bytes.done(); ) {
        var e = this.bytes.peek();
        if (e === Ro || e === Oo)
          return;
        this.bytes.next();
      }
    }, r.prototype.skipComment = function() {
      if (this.bytes.peek() !== x.Percent)
        return !1;
      for (; !this.bytes.done(); ) {
        var e = this.bytes.peek();
        if (e === Ro || e === Oo)
          return !0;
        this.bytes.next();
      }
      return !0;
    }, r.prototype.skipWhitespaceAndComments = function() {
      for (this.skipWhitespace(); this.skipComment(); )
        this.skipWhitespace();
    }, r.prototype.matchKeyword = function(e) {
      for (var t = this.bytes.offset(), n = 0, i = e.length; n < i; n++)
        if (this.bytes.done() || this.bytes.next() !== e[n])
          return this.bytes.moveTo(t), !1;
      return !0;
    }, r;
  })()
), Ni = (
  /** @class */
  (function() {
    function r(e) {
      this.idx = 0, this.line = 0, this.column = 0, this.bytes = e, this.length = this.bytes.length;
    }
    return r.prototype.moveTo = function(e) {
      this.idx = e;
    }, r.prototype.next = function() {
      var e = this.bytes[this.idx++];
      return e === x.Newline ? (this.line += 1, this.column = 0) : this.column += 1, e;
    }, r.prototype.assertNext = function(e) {
      if (this.peek() !== e)
        throw new Pl(this.position(), e, this.peek());
      return this.next();
    }, r.prototype.peek = function() {
      return this.bytes[this.idx];
    }, r.prototype.peekAhead = function(e) {
      return this.bytes[this.idx + e];
    }, r.prototype.peekAt = function(e) {
      return this.bytes[e];
    }, r.prototype.done = function() {
      return this.idx >= this.length;
    }, r.prototype.offset = function() {
      return this.idx;
    }, r.prototype.slice = function(e, t) {
      return this.bytes.slice(e, t);
    }, r.prototype.position = function() {
      return { line: this.line, column: this.column, offset: this.idx };
    }, r.of = function(e) {
      return new r(e);
    }, r.fromPDFRawStream = function(e) {
      return r.of(ws(e).decode());
    }, r;
  })()
), Sf = x.Space, fn = x.CarriageReturn, cn = x.Newline, hn = [
  x.s,
  x.t,
  x.r,
  x.e,
  x.a,
  x.m
], Zn = [
  x.e,
  x.n,
  x.d,
  x.s,
  x.t,
  x.r,
  x.e,
  x.a,
  x.m
], Ie = {
  header: [
    x.Percent,
    x.P,
    x.D,
    x.F,
    x.Dash
  ],
  eof: [
    x.Percent,
    x.Percent,
    x.E,
    x.O,
    x.F
  ],
  obj: [x.o, x.b, x.j],
  endobj: [
    x.e,
    x.n,
    x.d,
    x.o,
    x.b,
    x.j
  ],
  xref: [x.x, x.r, x.e, x.f],
  trailer: [
    x.t,
    x.r,
    x.a,
    x.i,
    x.l,
    x.e,
    x.r
  ],
  startxref: [
    x.s,
    x.t,
    x.a,
    x.r,
    x.t,
    x.x,
    x.r,
    x.e,
    x.f
  ],
  true: [x.t, x.r, x.u, x.e],
  false: [x.f, x.a, x.l, x.s, x.e],
  null: [x.n, x.u, x.l, x.l],
  stream: hn,
  streamEOF1: ke(hn, [Sf, fn, cn]),
  streamEOF2: ke(hn, [fn, cn]),
  streamEOF3: ke(hn, [fn]),
  streamEOF4: ke(hn, [cn]),
  endstream: Zn,
  EOF1endstream: ke([fn, cn], Zn),
  EOF2endstream: ke([fn], Zn),
  EOF3endstream: ke([cn], Zn)
}, As = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      i === void 0 && (i = !1);
      var a = r.call(this, t, i) || this;
      return a.context = n, a;
    }
    return e.prototype.parseObject = function() {
      if (this.skipWhitespaceAndComments(), this.matchKeyword(Ie.true))
        return Dn.True;
      if (this.matchKeyword(Ie.false))
        return Dn.False;
      if (this.matchKeyword(Ie.null))
        return yt;
      var t = this.bytes.peek();
      if (t === x.LessThan && this.bytes.peekAhead(1) === x.LessThan)
        return this.parseDictOrStream();
      if (t === x.LessThan)
        return this.parseHexString();
      if (t === x.LeftParen)
        return this.parseString();
      if (t === x.ForwardSlash)
        return this.parseName();
      if (t === x.LeftSquareBracket)
        return this.parseArray();
      if (za[t])
        return this.parseNumberOrRef();
      throw new Dl(this.bytes.position(), t);
    }, e.prototype.parseNumberOrRef = function() {
      var t = this.parseRawNumber();
      this.skipWhitespaceAndComments();
      var n = this.bytes.offset();
      if (lt[this.bytes.peek()]) {
        var i = this.parseRawNumber();
        if (this.skipWhitespaceAndComments(), this.bytes.peek() === x.R)
          return this.bytes.assertNext(x.R), Ne.of(t, i);
      }
      return this.bytes.moveTo(n), fe.of(t);
    }, e.prototype.parseHexString = function() {
      var t = "";
      for (this.bytes.assertNext(x.LessThan); !this.bytes.done() && this.bytes.peek() !== x.GreaterThan; )
        t += rr(this.bytes.next());
      return this.bytes.assertNext(x.GreaterThan), se.of(t);
    }, e.prototype.parseString = function() {
      for (var t = 0, n = !1, i = ""; !this.bytes.done(); ) {
        var a = this.bytes.next();
        if (i += rr(a), n || (a === x.LeftParen && (t += 1), a === x.RightParen && (t -= 1)), a === x.BackSlash ? n = !n : n && (n = !1), t === 0)
          return Ee.of(i.substring(1, i.length - 1));
      }
      throw new Ol(this.bytes.position());
    }, e.prototype.parseName = function() {
      this.bytes.assertNext(x.ForwardSlash);
      for (var t = ""; !this.bytes.done(); ) {
        var n = this.bytes.peek();
        if (or[n] || It[n])
          break;
        t += rr(n), this.bytes.next();
      }
      return b.of(t);
    }, e.prototype.parseArray = function() {
      this.bytes.assertNext(x.LeftSquareBracket), this.skipWhitespaceAndComments();
      for (var t = Re.withContext(this.context); this.bytes.peek() !== x.RightSquareBracket; ) {
        var n = this.parseObject();
        t.push(n), this.skipWhitespaceAndComments();
      }
      return this.bytes.assertNext(x.RightSquareBracket), t;
    }, e.prototype.parseDict = function() {
      this.bytes.assertNext(x.LessThan), this.bytes.assertNext(x.LessThan), this.skipWhitespaceAndComments();
      for (var t = /* @__PURE__ */ new Map(); !this.bytes.done() && this.bytes.peek() !== x.GreaterThan && this.bytes.peekAhead(1) !== x.GreaterThan; ) {
        var n = this.parseName(), i = this.parseObject();
        t.set(n, i), this.skipWhitespaceAndComments();
      }
      this.skipWhitespaceAndComments(), this.bytes.assertNext(x.GreaterThan), this.bytes.assertNext(x.GreaterThan);
      var a = t.get(b.of("Type"));
      return a === b.of("Catalog") ? Ps.fromMapWithContext(t, this.context) : a === b.of("Pages") ? Ds.fromMapWithContext(t, this.context) : a === b.of("Page") ? ir.fromMapWithContext(t, this.context) : pe.fromMapWithContext(t, this.context);
    }, e.prototype.parseDictOrStream = function() {
      var t = this.bytes.position(), n = this.parseDict();
      if (this.skipWhitespaceAndComments(), !this.matchKeyword(Ie.streamEOF1) && !this.matchKeyword(Ie.streamEOF2) && !this.matchKeyword(Ie.streamEOF3) && !this.matchKeyword(Ie.streamEOF4) && !this.matchKeyword(Ie.stream))
        return n;
      var i = this.bytes.offset(), a, o = n.get(b.of("Length"));
      o instanceof fe ? (a = i + o.asNumber(), this.bytes.moveTo(a), this.skipWhitespaceAndComments(), this.matchKeyword(Ie.endstream) || (this.bytes.moveTo(i), a = this.findEndOfStreamFallback(t))) : a = this.findEndOfStreamFallback(t);
      var s = this.bytes.slice(i, a);
      return An.of(n, s);
    }, e.prototype.findEndOfStreamFallback = function(t) {
      for (var n = 1, i = this.bytes.offset(); !this.bytes.done() && (i = this.bytes.offset(), this.matchKeyword(Ie.stream) ? n += 1 : this.matchKeyword(Ie.EOF1endstream) || this.matchKeyword(Ie.EOF2endstream) || this.matchKeyword(Ie.EOF3endstream) || this.matchKeyword(Ie.endstream) ? n -= 1 : this.bytes.next(), n !== 0); )
        ;
      if (n !== 0)
        throw new Rl(t);
      return i;
    }, e.forBytes = function(t, n, i) {
      return new e(Ni.of(t), n, i);
    }, e.forByteStream = function(t, n, i) {
      return i === void 0 && (i = !1), new e(t, n, i);
    }, e;
  })(wf)
), Ff = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = r.call(this, Ni.fromPDFRawStream(t), t.dict.context) || this, a = t.dict;
      return i.alreadyParsed = !1, i.shouldWaitForTick = n || (function() {
        return !1;
      }), i.firstOffset = a.lookup(b.of("First"), fe).asNumber(), i.objectCount = a.lookup(b.of("N"), fe).asNumber(), i;
    }
    return e.prototype.parseIntoContext = function() {
      return ge(this, void 0, void 0, function() {
        var t, n, i, a, o, s, u, l;
        return ye(this, function(c) {
          switch (c.label) {
            case 0:
              if (this.alreadyParsed)
                throw new ka("PDFObjectStreamParser", "parseIntoContext");
              this.alreadyParsed = !0, t = this.parseOffsetsAndObjectNumbers(), n = 0, i = t.length, c.label = 1;
            case 1:
              return n < i ? (a = t[n], o = a.objectNumber, s = a.offset, this.bytes.moveTo(this.firstOffset + s), u = this.parseObject(), l = Ne.of(o, 0), this.context.assign(l, u), this.shouldWaitForTick() ? [4, Jr()] : [3, 3]) : [3, 4];
            case 2:
              c.sent(), c.label = 3;
            case 3:
              return n++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.parseOffsetsAndObjectNumbers = function() {
      for (var t = [], n = 0, i = this.objectCount; n < i; n++) {
        this.skipWhitespaceAndComments();
        var a = this.parseRawInt();
        this.skipWhitespaceAndComments();
        var o = this.parseRawInt();
        t.push({ objectNumber: a, offset: o });
      }
      return t;
    }, e.forStream = function(t, n) {
      return new e(t, n);
    }, e;
  })(As)
), kf = (
  /** @class */
  (function() {
    function r(e) {
      this.alreadyParsed = !1, this.dict = e.dict, this.bytes = Ni.fromPDFRawStream(e), this.context = this.dict.context;
      var t = this.dict.lookup(b.of("Size"), fe), n = this.dict.lookup(b.of("Index"));
      if (n instanceof Re) {
        this.subsections = [];
        for (var i = 0, a = n.size(); i < a; i += 2) {
          var o = n.lookup(i + 0, fe).asNumber(), s = n.lookup(i + 1, fe).asNumber();
          this.subsections.push({ firstObjectNumber: o, length: s });
        }
      } else
        this.subsections = [{ firstObjectNumber: 0, length: t.asNumber() }];
      var u = this.dict.lookup(b.of("W"), Re);
      this.byteWidths = [-1, -1, -1];
      for (var i = 0, a = u.size(); i < a; i++)
        this.byteWidths[i] = u.lookup(i, fe).asNumber();
    }
    return r.prototype.parseIntoContext = function() {
      if (this.alreadyParsed)
        throw new ka("PDFXRefStreamParser", "parseIntoContext");
      this.alreadyParsed = !0, this.context.trailerInfo = {
        Root: this.dict.get(b.of("Root")),
        Encrypt: this.dict.get(b.of("Encrypt")),
        Info: this.dict.get(b.of("Info")),
        ID: this.dict.get(b.of("ID"))
      };
      var e = this.parseEntries();
      return e;
    }, r.prototype.parseEntries = function() {
      for (var e = [], t = this.byteWidths, n = t[0], i = t[1], a = t[2], o = 0, s = this.subsections.length; o < s; o++)
        for (var u = this.subsections[o], l = u.firstObjectNumber, c = u.length, h = 0; h < c; h++) {
          for (var d = 0, v = 0, y = n; v < y; v++)
            d = d << 8 | this.bytes.next();
          for (var w = 0, v = 0, y = i; v < y; v++)
            w = w << 8 | this.bytes.next();
          for (var F = 0, v = 0, y = a; v < y; v++)
            F = F << 8 | this.bytes.next();
          n === 0 && (d = 1);
          var S = l + h, A = {
            ref: Ne.of(S, F),
            offset: w,
            deleted: d === 0,
            inObjectStream: d === 2
          };
          e.push(A);
        }
      return e;
    }, r.forStream = function(e) {
      return new r(e);
    }, r;
  })()
), Cf = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i, a) {
      n === void 0 && (n = 1 / 0), i === void 0 && (i = !1), a === void 0 && (a = !1);
      var o = r.call(this, Ni.of(t), ca.create(), a) || this;
      return o.alreadyParsed = !1, o.parsedObjects = 0, o.shouldWaitForTick = function() {
        return o.parsedObjects += 1, o.parsedObjects % o.objectsPerTick === 0;
      }, o.objectsPerTick = n, o.throwOnInvalidObject = i, o;
    }
    return e.prototype.parseDocument = function() {
      return ge(this, void 0, void 0, function() {
        var t, n;
        return ye(this, function(i) {
          switch (i.label) {
            case 0:
              if (this.alreadyParsed)
                throw new ka("PDFParser", "parseDocument");
              this.alreadyParsed = !0, this.context.header = this.parseHeader(), i.label = 1;
            case 1:
              return this.bytes.done() ? [3, 3] : [4, this.parseDocumentSection()];
            case 2:
              if (i.sent(), n = this.bytes.offset(), n === t)
                throw new El(this.bytes.position());
              return t = n, [3, 1];
            case 3:
              return this.maybeRecoverRoot(), this.context.lookup(Ne.of(0)) && (console.warn("Removing parsed object: 0 0 R"), this.context.delete(Ne.of(0))), [2, this.context];
          }
        });
      });
    }, e.prototype.maybeRecoverRoot = function() {
      var t = function(c) {
        return c instanceof pe && c.lookup(b.of("Type")) === b.of("Catalog");
      }, n = this.context.lookup(this.context.trailerInfo.Root);
      if (!t(n))
        for (var i = this.context.enumerateIndirectObjects(), a = 0, o = i.length; a < o; a++) {
          var s = i[a], u = s[0], l = s[1];
          t(l) && (this.context.trailerInfo.Root = u);
        }
    }, e.prototype.parseHeader = function() {
      for (; !this.bytes.done(); ) {
        if (this.matchKeyword(Ie.header)) {
          var t = this.parseRawInt();
          this.bytes.assertNext(x.Period);
          var n = this.parseRawInt(), i = Ci.forVersion(t, n);
          return this.skipBinaryHeaderComment(), i;
        }
        this.bytes.next();
      }
      throw new Nl(this.bytes.position());
    }, e.prototype.parseIndirectObjectHeader = function() {
      this.skipWhitespaceAndComments();
      var t = this.parseRawInt();
      this.skipWhitespaceAndComments();
      var n = this.parseRawInt();
      if (this.skipWhitespaceAndComments(), !this.matchKeyword(Ie.obj))
        throw new zl(this.bytes.position(), Ie.obj);
      return Ne.of(t, n);
    }, e.prototype.matchIndirectObjectHeader = function() {
      var t = this.bytes.offset();
      try {
        return this.parseIndirectObjectHeader(), !0;
      } catch {
        return this.bytes.moveTo(t), !1;
      }
    }, e.prototype.parseIndirectObject = function() {
      return ge(this, void 0, void 0, function() {
        var t, n;
        return ye(this, function(i) {
          switch (i.label) {
            case 0:
              return t = this.parseIndirectObjectHeader(), this.skipWhitespaceAndComments(), n = this.parseObject(), this.skipWhitespaceAndComments(), this.matchKeyword(Ie.endobj), n instanceof An && n.dict.lookup(b.of("Type")) === b.of("ObjStm") ? [4, Ff.forStream(n, this.shouldWaitForTick).parseIntoContext()] : [3, 2];
            case 1:
              return i.sent(), [3, 3];
            case 2:
              n instanceof An && n.dict.lookup(b.of("Type")) === b.of("XRef") ? kf.forStream(n).parseIntoContext() : this.context.assign(t, n), i.label = 3;
            case 3:
              return [2, t];
          }
        });
      });
    }, e.prototype.tryToParseInvalidIndirectObject = function() {
      var t = this.bytes.position(), n = "Trying to parse invalid object: " + JSON.stringify(t) + ")";
      if (this.throwOnInvalidObject)
        throw new Error(n);
      console.warn(n);
      var i = this.parseIndirectObjectHeader();
      console.warn("Invalid object ref: " + i), this.skipWhitespaceAndComments();
      for (var a = this.bytes.offset(), o = !0; !this.bytes.done() && (this.matchKeyword(Ie.endobj) && (o = !1), !!o); )
        this.bytes.next();
      if (o)
        throw new Al(t);
      var s = this.bytes.offset() - Ie.endobj.length, u = ys.of(this.bytes.slice(a, s));
      return this.context.assign(i, u), i;
    }, e.prototype.parseIndirectObjects = function() {
      return ge(this, void 0, void 0, function() {
        var t;
        return ye(this, function(n) {
          switch (n.label) {
            case 0:
              this.skipWhitespaceAndComments(), n.label = 1;
            case 1:
              if (!(!this.bytes.done() && lt[this.bytes.peek()])) return [3, 8];
              t = this.bytes.offset(), n.label = 2;
            case 2:
              return n.trys.push([2, 4, , 5]), [4, this.parseIndirectObject()];
            case 3:
              return n.sent(), [3, 5];
            case 4:
              return n.sent(), this.bytes.moveTo(t), this.tryToParseInvalidIndirectObject(), [3, 5];
            case 5:
              return this.skipWhitespaceAndComments(), this.skipJibberish(), this.shouldWaitForTick() ? [4, Jr()] : [3, 7];
            case 6:
              n.sent(), n.label = 7;
            case 7:
              return [3, 1];
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.maybeParseCrossRefSection = function() {
      if (this.skipWhitespaceAndComments(), !!this.matchKeyword(Ie.xref)) {
        this.skipWhitespaceAndComments();
        for (var t = -1, n = vs.createEmpty(); !this.bytes.done() && lt[this.bytes.peek()]; ) {
          var i = this.parseRawInt();
          this.skipWhitespaceAndComments();
          var a = this.parseRawInt();
          this.skipWhitespaceAndComments();
          var o = this.bytes.peek();
          if (o === x.n || o === x.f) {
            var s = Ne.of(t, a);
            this.bytes.next() === x.n ? n.addEntry(s, i) : n.addDeletedEntry(s, i), t += 1;
          } else
            t = i;
          this.skipWhitespaceAndComments();
        }
        return n;
      }
    }, e.prototype.maybeParseTrailerDict = function() {
      if (this.skipWhitespaceAndComments(), !!this.matchKeyword(Ie.trailer)) {
        this.skipWhitespaceAndComments();
        var t = this.parseDict(), n = this.context;
        n.trailerInfo = {
          Root: t.get(b.of("Root")) || n.trailerInfo.Root,
          Encrypt: t.get(b.of("Encrypt")) || n.trailerInfo.Encrypt,
          Info: t.get(b.of("Info")) || n.trailerInfo.Info,
          ID: t.get(b.of("ID")) || n.trailerInfo.ID
        };
      }
    }, e.prototype.maybeParseTrailer = function() {
      if (this.skipWhitespaceAndComments(), !!this.matchKeyword(Ie.startxref)) {
        this.skipWhitespaceAndComments();
        var t = this.parseRawInt();
        return this.skipWhitespace(), this.matchKeyword(Ie.eof), this.skipWhitespaceAndComments(), this.matchKeyword(Ie.eof), this.skipWhitespaceAndComments(), Da.forLastCrossRefSectionOffset(t);
      }
    }, e.prototype.parseDocumentSection = function() {
      return ge(this, void 0, void 0, function() {
        return ye(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, this.parseIndirectObjects()];
            case 1:
              return t.sent(), this.maybeParseCrossRefSection(), this.maybeParseTrailerDict(), this.maybeParseTrailer(), this.skipJibberish(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.skipJibberish = function() {
      for (this.skipWhitespaceAndComments(); !this.bytes.done(); ) {
        var t = this.bytes.offset(), n = this.bytes.peek(), i = n >= x.Space && n <= x.Tilde;
        if (i && (this.matchKeyword(Ie.xref) || this.matchKeyword(Ie.trailer) || this.matchKeyword(Ie.startxref) || this.matchIndirectObjectHeader())) {
          this.bytes.moveTo(t);
          break;
        }
        this.bytes.next();
      }
    }, e.prototype.skipBinaryHeaderComment = function() {
      this.skipWhitespaceAndComments();
      try {
        var t = this.bytes.offset();
        this.parseIndirectObjectHeader(), this.bytes.moveTo(t);
      } catch {
        this.bytes.next(), this.skipWhitespaceAndComments();
      }
    }, e.forBytesWithOptions = function(t, n, i, a) {
      return new e(t, n, i, a);
    }, e;
  })(As)
), Xt = function(r) {
  return 1 << r;
}, Fn;
(function(r) {
  r[r.Invisible = Xt(0)] = "Invisible", r[r.Hidden = Xt(1)] = "Hidden", r[r.Print = Xt(2)] = "Print", r[r.NoZoom = Xt(3)] = "NoZoom", r[r.NoRotate = Xt(4)] = "NoRotate", r[r.NoView = Xt(5)] = "NoView", r[r.ReadOnly = Xt(6)] = "ReadOnly", r[r.Locked = Xt(7)] = "Locked", r[r.ToggleNoView = Xt(8)] = "ToggleNoView", r[r.LockedContents = Xt(9)] = "LockedContents";
})(Fn || (Fn = {}));
var zi = function(r) {
  return r instanceof b ? r : b.of(r);
}, ce = function(r) {
  return r instanceof fe ? r : fe.of(r);
}, me = function(r) {
  return r instanceof fe ? r.asNumber() : r;
}, Rn;
(function(r) {
  r.Degrees = "degrees", r.Radians = "radians";
})(Rn || (Rn = {}));
var le = function(r) {
  return R(r, "degreeAngle", ["number"]), { type: Rn.Degrees, angle: r };
}, Rs = Rn.Radians, Os = Rn.Degrees, Es = function(r) {
  return r * Math.PI / 180;
}, Tf = function(r) {
  return r * 180 / Math.PI;
}, at = function(r) {
  return r.type === Rs ? r.angle : r.type === Os ? Es(r.angle) : zn("Invalid rotation: " + JSON.stringify(r));
}, Ns = function(r) {
  return r.type === Rs ? Tf(r.angle) : r.type === Os ? r.angle : zn("Invalid rotation: " + JSON.stringify(r));
}, sr = function(r) {
  r === void 0 && (r = 0);
  var e = r / 90 % 4;
  return e === 0 ? 0 : e === 1 ? 90 : e === 2 ? 180 : e === 3 ? 270 : 0;
}, Or = function(r, e) {
  e === void 0 && (e = 0);
  var t = sr(e);
  return t === 90 || t === 270 ? { width: r.height, height: r.width } : { width: r.width, height: r.height };
}, Pf = function(r, e, t) {
  e === void 0 && (e = 0), t === void 0 && (t = 0);
  var n = r.x, i = r.y, a = r.width, o = r.height, s = sr(t), u = e / 2;
  return s === 0 ? { x: n - u, y: i - u, width: a, height: o } : s === 90 ? { x: n - o + u, y: i - u, width: o, height: a } : s === 180 ? { x: n - a + u, y: i - o + u, width: a, height: o } : s === 270 ? { x: n - u, y: i - a + u, width: o, height: a } : { x: n - u, y: i - u, width: a, height: o };
}, zs = function() {
  return Fe.of(Ce.ClipNonZero);
}, di = Math.cos, vi = Math.sin, pi = Math.tan, Bi = function(r, e, t, n, i, a) {
  return Fe.of(Ce.ConcatTransformationMatrix, [
    ce(r),
    ce(e),
    ce(t),
    ce(n),
    ce(i),
    ce(a)
  ]);
}, Nt = function(r, e) {
  return Bi(1, 0, 0, 1, r, e);
}, On = function(r, e) {
  return Bi(r, 0, 0, e, 0, 0);
}, rn = function(r) {
  return Bi(di(me(r)), vi(me(r)), -vi(me(r)), di(me(r)), 0, 0);
}, Yn = function(r) {
  return rn(Es(me(r)));
}, Ba = function(r, e) {
  return Bi(1, pi(me(r)), pi(me(e)), 1, 0, 0);
}, Mi = function(r, e) {
  return Fe.of(Ce.SetLineDashPattern, [
    "[" + r.map(ce).join(" ") + "]",
    ce(e)
  ]);
}, Zr;
(function(r) {
  r[r.Butt = 0] = "Butt", r[r.Round = 1] = "Round", r[r.Projecting = 2] = "Projecting";
})(Zr || (Zr = {}));
var Ii = function(r) {
  return Fe.of(Ce.SetLineCapStyle, [ce(r)]);
}, Eo;
(function(r) {
  r[r.Miter = 0] = "Miter", r[r.Round = 1] = "Round", r[r.Bevel = 2] = "Bevel";
})(Eo || (Eo = {}));
var Er = function(r) {
  return Fe.of(Ce.SetGraphicsStateParams, [zi(r)]);
}, $e = function() {
  return Fe.of(Ce.PushGraphicsState);
}, et = function() {
  return Fe.of(Ce.PopGraphicsState);
}, Mn = function(r) {
  return Fe.of(Ce.SetLineWidth, [ce(r)]);
}, xt = function(r, e, t, n, i, a) {
  return Fe.of(Ce.AppendBezierCurve, [
    ce(r),
    ce(e),
    ce(t),
    ce(n),
    ce(i),
    ce(a)
  ]);
}, Qn = function(r, e, t, n) {
  return Fe.of(Ce.CurveToReplicateInitialPoint, [
    ce(r),
    ce(e),
    ce(t),
    ce(n)
  ]);
}, xr = function() {
  return Fe.of(Ce.ClosePath);
}, Qt = function(r, e) {
  return Fe.of(Ce.MoveTo, [ce(r), ce(e)]);
}, rt = function(r, e) {
  return Fe.of(Ce.LineTo, [ce(r), ce(e)]);
}, In = function() {
  return Fe.of(Ce.StrokePath);
}, Ma = function() {
  return Fe.of(Ce.FillNonZero);
}, Ia = function() {
  return Fe.of(Ce.FillNonZeroAndStroke);
}, Bs = function() {
  return Fe.of(Ce.EndPath);
}, Df = function() {
  return Fe.of(Ce.NextLine);
}, Ms = function(r) {
  return Fe.of(Ce.ShowText, [r]);
}, Is = function() {
  return Fe.of(Ce.BeginText);
}, js = function() {
  return Fe.of(Ce.EndText);
}, ja = function(r, e) {
  return Fe.of(Ce.SetFontAndSize, [zi(r), ce(e)]);
}, Af = function(r) {
  return Fe.of(Ce.SetTextLineHeight, [ce(r)]);
}, No;
(function(r) {
  r[r.Fill = 0] = "Fill", r[r.Outline = 1] = "Outline", r[r.FillAndOutline = 2] = "FillAndOutline", r[r.Invisible = 3] = "Invisible", r[r.FillAndClip = 4] = "FillAndClip", r[r.OutlineAndClip = 5] = "OutlineAndClip", r[r.FillAndOutlineAndClip = 6] = "FillAndOutlineAndClip", r[r.Clip = 7] = "Clip";
})(No || (No = {}));
var Rf = function(r, e, t, n, i, a) {
  return Fe.of(Ce.SetTextMatrix, [
    ce(r),
    ce(e),
    ce(t),
    ce(n),
    ce(i),
    ce(a)
  ]);
}, Us = function(r, e, t, n, i) {
  return Rf(di(me(r)), vi(me(r)) + pi(me(e)), -vi(me(r)) + pi(me(t)), di(me(r)), n, i);
}, Ua = function(r) {
  return Fe.of(Ce.DrawObject, [zi(r)]);
}, Of = function(r) {
  return Fe.of(Ce.NonStrokingColorGray, [ce(r)]);
}, Ef = function(r) {
  return Fe.of(Ce.StrokingColorGray, [ce(r)]);
}, Nf = function(r, e, t) {
  return Fe.of(Ce.NonStrokingColorRgb, [
    ce(r),
    ce(e),
    ce(t)
  ]);
}, zf = function(r, e, t) {
  return Fe.of(Ce.StrokingColorRgb, [
    ce(r),
    ce(e),
    ce(t)
  ]);
}, Bf = function(r, e, t, n) {
  return Fe.of(Ce.NonStrokingColorCmyk, [
    ce(r),
    ce(e),
    ce(t),
    ce(n)
  ]);
}, Mf = function(r, e, t, n) {
  return Fe.of(Ce.StrokingColorCmyk, [
    ce(r),
    ce(e),
    ce(t),
    ce(n)
  ]);
}, Ws = function(r) {
  return Fe.of(Ce.BeginMarkedContent, [zi(r)]);
}, Vs = function() {
  return Fe.of(Ce.EndMarkedContent);
}, wr;
(function(r) {
  r.Grayscale = "Grayscale", r.RGB = "RGB", r.CMYK = "CMYK";
})(wr || (wr = {}));
var Ls = function(r) {
  return bt(r, "gray", 0, 1), { type: wr.Grayscale, gray: r };
}, te = function(r, e, t) {
  return bt(r, "red", 0, 1), bt(e, "green", 0, 1), bt(t, "blue", 0, 1), { type: wr.RGB, red: r, green: e, blue: t };
}, qs = function(r, e, t, n) {
  return bt(r, "cyan", 0, 1), bt(e, "magenta", 0, 1), bt(t, "yellow", 0, 1), bt(n, "key", 0, 1), { type: wr.CMYK, cyan: r, magenta: e, yellow: t, key: n };
}, Wa = wr.Grayscale, Va = wr.RGB, La = wr.CMYK, Nr = function(r) {
  return r.type === Wa ? Of(r.gray) : r.type === Va ? Nf(r.red, r.green, r.blue) : r.type === La ? Bf(r.cyan, r.magenta, r.yellow, r.key) : zn("Invalid color: " + JSON.stringify(r));
}, jn = function(r) {
  return r.type === Wa ? Ef(r.gray) : r.type === Va ? zf(r.red, r.green, r.blue) : r.type === La ? Mf(r.cyan, r.magenta, r.yellow, r.key) : zn("Invalid color: " + JSON.stringify(r));
}, vt = function(r, e) {
  return e === void 0 && (e = 1), r?.length === 1 ? Ls(r[0] * e) : r?.length === 3 ? te(r[0] * e, r[1] * e, r[2] * e) : r?.length === 4 ? qs(r[0] * e, r[1] * e, r[2] * e, r[3] * e) : void 0;
}, zo = function(r) {
  return r.type === Wa ? [r.gray] : r.type === Va ? [r.red, r.green, r.blue] : r.type === La ? [r.cyan, r.magenta, r.yellow, r.key] : zn("Invalid color: " + JSON.stringify(r));
}, ie = 0, ae = 0, we = 0, Se = 0, pn = 0, gn = 0, Bo = /* @__PURE__ */ new Map([
  ["A", 7],
  ["a", 7],
  ["C", 6],
  ["c", 6],
  ["H", 1],
  ["h", 1],
  ["L", 2],
  ["l", 2],
  ["M", 2],
  ["m", 2],
  ["Q", 4],
  ["q", 4],
  ["S", 4],
  ["s", 4],
  ["T", 2],
  ["t", 2],
  ["V", 1],
  ["v", 1],
  ["Z", 0],
  ["z", 0]
]), If = function(r) {
  for (var e, t = [], n = [], i = "", a = !1, o = 0, s = 0, u = r; s < u.length; s++) {
    var l = u[s];
    if (Bo.has(l))
      o = Bo.get(l), e && (i.length > 0 && (n[n.length] = +i), t[t.length] = { cmd: e, args: n }, n = [], i = "", a = !1), e = l;
    else if ([" ", ","].includes(l) || l === "-" && i.length > 0 && i[i.length - 1] !== "e" || l === "." && a) {
      if (i.length === 0)
        continue;
      n.length === o ? (t[t.length] = { cmd: e, args: n }, n = [+i], e === "M" && (e = "L"), e === "m" && (e = "l")) : n[n.length] = +i, a = l === ".", i = ["-", "."].includes(l) ? l : "";
    } else
      i += l, l === "." && (a = !0);
  }
  return i.length > 0 && (n.length === o ? (t[t.length] = { cmd: e, args: n }, n = [+i], e === "M" && (e = "L"), e === "m" && (e = "l")) : n[n.length] = +i), t[t.length] = { cmd: e, args: n }, t;
}, jf = function(r) {
  ie = ae = we = Se = pn = gn = 0;
  for (var e = [], t = 0; t < r.length; t++) {
    var n = r[t];
    if (n.cmd && typeof Mo[n.cmd] == "function") {
      var i = Mo[n.cmd](n.args);
      Array.isArray(i) ? e = e.concat(i) : e.push(i);
    }
  }
  return e;
}, Mo = {
  M: function(r) {
    return ie = r[0], ae = r[1], we = Se = null, pn = ie, gn = ae, Qt(ie, ae);
  },
  m: function(r) {
    return ie += r[0], ae += r[1], we = Se = null, pn = ie, gn = ae, Qt(ie, ae);
  },
  C: function(r) {
    return ie = r[4], ae = r[5], we = r[2], Se = r[3], xt(r[0], r[1], r[2], r[3], r[4], r[5]);
  },
  c: function(r) {
    var e = xt(r[0] + ie, r[1] + ae, r[2] + ie, r[3] + ae, r[4] + ie, r[5] + ae);
    return we = ie + r[2], Se = ae + r[3], ie += r[4], ae += r[5], e;
  },
  S: function(r) {
    (we === null || Se === null) && (we = ie, Se = ae);
    var e = xt(ie - (we - ie), ae - (Se - ae), r[0], r[1], r[2], r[3]);
    return we = r[0], Se = r[1], ie = r[2], ae = r[3], e;
  },
  s: function(r) {
    (we === null || Se === null) && (we = ie, Se = ae);
    var e = xt(ie - (we - ie), ae - (Se - ae), ie + r[0], ae + r[1], ie + r[2], ae + r[3]);
    return we = ie + r[0], Se = ae + r[1], ie += r[2], ae += r[3], e;
  },
  Q: function(r) {
    return we = r[0], Se = r[1], ie = r[2], ae = r[3], Qn(r[0], r[1], ie, ae);
  },
  q: function(r) {
    var e = Qn(r[0] + ie, r[1] + ae, r[2] + ie, r[3] + ae);
    return we = ie + r[0], Se = ae + r[1], ie += r[2], ae += r[3], e;
  },
  T: function(r) {
    we === null || Se === null ? (we = ie, Se = ae) : (we = ie - (we - ie), Se = ae - (Se - ae));
    var e = Qn(we, Se, r[0], r[1]);
    return we = ie - (we - ie), Se = ae - (Se - ae), ie = r[0], ae = r[1], e;
  },
  t: function(r) {
    we === null || Se === null ? (we = ie, Se = ae) : (we = ie - (we - ie), Se = ae - (Se - ae));
    var e = Qn(we, Se, ie + r[0], ae + r[1]);
    return ie += r[0], ae += r[1], e;
  },
  A: function(r) {
    var e = Io(ie, ae, r);
    return ie = r[5], ae = r[6], e;
  },
  a: function(r) {
    r[5] += ie, r[6] += ae;
    var e = Io(ie, ae, r);
    return ie = r[5], ae = r[6], e;
  },
  L: function(r) {
    return ie = r[0], ae = r[1], we = Se = null, rt(ie, ae);
  },
  l: function(r) {
    return ie += r[0], ae += r[1], we = Se = null, rt(ie, ae);
  },
  H: function(r) {
    return ie = r[0], we = Se = null, rt(ie, ae);
  },
  h: function(r) {
    return ie += r[0], we = Se = null, rt(ie, ae);
  },
  V: function(r) {
    return ae = r[0], we = Se = null, rt(ie, ae);
  },
  v: function(r) {
    return ae += r[0], we = Se = null, rt(ie, ae);
  },
  Z: function() {
    var r = xr();
    return ie = pn, ae = gn, r;
  },
  z: function() {
    var r = xr();
    return ie = pn, ae = gn, r;
  }
}, Io = function(r, e, t) {
  for (var n = t[0], i = t[1], a = t[2], o = t[3], s = t[4], u = t[5], l = t[6], c = Uf(u, l, n, i, o, s, a, r, e), h = [], d = 0, v = c; d < v.length; d++) {
    var y = v[d], w = Wf.apply(void 0, y);
    h.push(xt.apply(void 0, w));
  }
  return h;
}, Uf = function(r, e, t, n, i, a, o, s, u) {
  var l = o * (Math.PI / 180), c = Math.sin(l), h = Math.cos(l);
  t = Math.abs(t), n = Math.abs(n), we = h * (s - r) * 0.5 + c * (u - e) * 0.5, Se = h * (u - e) * 0.5 - c * (s - r) * 0.5;
  var d = we * we / (t * t) + Se * Se / (n * n);
  d > 1 && (d = Math.sqrt(d), t *= d, n *= d);
  var v = h / t, y = c / t, w = -c / n, F = h / n, S = v * s + y * u, A = w * s + F * u, C = v * r + y * e, E = w * r + F * e, O = (C - S) * (C - S) + (E - A) * (E - A), D = 1 / O - 0.25;
  D < 0 && (D = 0);
  var P = Math.sqrt(D);
  a === i && (P = -P);
  var M = 0.5 * (S + C) - P * (E - A), U = 0.5 * (A + E) + P * (C - S), W = Math.atan2(A - U, S - M), V = Math.atan2(E - U, C - M), Z = V - W;
  Z < 0 && a === 1 ? Z += 2 * Math.PI : Z > 0 && a === 0 && (Z -= 2 * Math.PI);
  for (var I = Math.ceil(Math.abs(Z / (Math.PI * 0.5 + 1e-3))), J = [], re = 0; re < I; re++) {
    var Y = W + re * Z / I, Q = W + (re + 1) * Z / I;
    J[re] = [M, U, Y, Q, t, n, c, h];
  }
  return J;
}, Wf = function(r, e, t, n, i, a, o, s) {
  var u = s * i, l = -o * a, c = o * i, h = s * a, d = 0.5 * (n - t), v = 8 / 3 * Math.sin(d * 0.5) * Math.sin(d * 0.5) / Math.sin(d), y = r + Math.cos(t) - v * Math.sin(t), w = e + Math.sin(t) + v * Math.cos(t), F = r + Math.cos(n), S = e + Math.sin(n), A = F + v * Math.sin(n), C = S - v * Math.cos(n), E = [
    u * y + l * w,
    c * y + h * w,
    u * A + l * C,
    c * A + h * C,
    u * F + l * S,
    c * F + h * S
  ];
  return E;
}, Vf = function(r) {
  return jf(If(r));
}, Lf = function(r, e) {
  for (var t = [
    $e(),
    e.graphicsState && Er(e.graphicsState),
    Is(),
    Nr(e.color),
    ja(e.font, e.size),
    Af(e.lineHeight),
    Us(at(e.rotate), at(e.xSkew), at(e.ySkew), e.x, e.y)
  ].filter(Boolean), n = 0, i = r.length; n < i; n++)
    t.push(Ms(r[n]), Df());
  return t.push(js(), et()), t;
}, Hs = function(r, e) {
  return [
    $e(),
    e.graphicsState && Er(e.graphicsState),
    Nt(e.x, e.y),
    rn(at(e.rotate)),
    On(e.width, e.height),
    Ba(at(e.xSkew), at(e.ySkew)),
    Ua(r),
    et()
  ].filter(Boolean);
}, qf = function(r, e) {
  return [
    $e(),
    e.graphicsState && Er(e.graphicsState),
    Nt(e.x, e.y),
    rn(at(e.rotate)),
    On(e.xScale, e.yScale),
    Ba(at(e.xSkew), at(e.ySkew)),
    Ua(r),
    et()
  ].filter(Boolean);
}, Hf = function(r) {
  var e, t;
  return [
    $e(),
    r.graphicsState && Er(r.graphicsState),
    r.color && jn(r.color),
    Mn(r.thickness),
    Mi((e = r.dashArray) !== null && e !== void 0 ? e : [], (t = r.dashPhase) !== null && t !== void 0 ? t : 0),
    Qt(r.start.x, r.start.y),
    r.lineCap && Ii(r.lineCap),
    Qt(r.start.x, r.start.y),
    rt(r.end.x, r.end.y),
    In(),
    et()
  ].filter(Boolean);
}, _r = function(r) {
  var e, t;
  return [
    $e(),
    r.graphicsState && Er(r.graphicsState),
    r.color && Nr(r.color),
    r.borderColor && jn(r.borderColor),
    Mn(r.borderWidth),
    r.borderLineCap && Ii(r.borderLineCap),
    Mi((e = r.borderDashArray) !== null && e !== void 0 ? e : [], (t = r.borderDashPhase) !== null && t !== void 0 ? t : 0),
    Nt(r.x, r.y),
    rn(at(r.rotate)),
    Ba(at(r.xSkew), at(r.ySkew)),
    Qt(0, 0),
    rt(0, r.height),
    rt(r.width, r.height),
    rt(r.width, 0),
    xr(),
    // prettier-ignore
    r.color && r.borderWidth ? Ia() : r.color ? Ma() : r.borderColor ? In() : xr(),
    et()
  ].filter(Boolean);
}, gi = 4 * ((Math.sqrt(2) - 1) / 3), Kf = function(r) {
  var e = me(r.x), t = me(r.y), n = me(r.xScale), i = me(r.yScale);
  e -= n, t -= i;
  var a = n * gi, o = i * gi, s = e + n * 2, u = t + i * 2, l = e + n, c = t + i;
  return [
    $e(),
    Qt(e, c),
    xt(e, c - o, l - a, t, l, t),
    xt(l + a, t, s, c - o, s, c),
    xt(s, c + o, l + a, u, l, u),
    xt(l - a, u, e, c + o, e, c),
    et()
  ];
}, Gf = function(r) {
  var e = me(r.x), t = me(r.y), n = me(r.xScale), i = me(r.yScale), a = -n, o = -i, s = n * gi, u = i * gi, l = a + n * 2, c = o + i * 2, h = a + n, d = o + i;
  return [
    Nt(e, t),
    rn(at(r.rotate)),
    Qt(a, d),
    xt(a, d - u, h - s, o, h, o),
    xt(h + s, o, l, d - u, l, d),
    xt(l, d + u, h + s, c, h, c),
    xt(h - s, c, a, d + u, a, d)
  ];
}, pa = function(r) {
  var e, t, n;
  return ke([
    $e(),
    r.graphicsState && Er(r.graphicsState),
    r.color && Nr(r.color),
    r.borderColor && jn(r.borderColor),
    Mn(r.borderWidth),
    r.borderLineCap && Ii(r.borderLineCap),
    Mi((e = r.borderDashArray) !== null && e !== void 0 ? e : [], (t = r.borderDashPhase) !== null && t !== void 0 ? t : 0)
  ], r.rotate === void 0 ? Kf({
    x: r.x,
    y: r.y,
    xScale: r.xScale,
    yScale: r.yScale
  }) : Gf({
    x: r.x,
    y: r.y,
    xScale: r.xScale,
    yScale: r.yScale,
    rotate: (n = r.rotate) !== null && n !== void 0 ? n : le(0)
  }), [
    // prettier-ignore
    r.color && r.borderWidth ? Ia() : r.color ? Ma() : r.borderColor ? In() : xr(),
    et()
  ]).filter(Boolean);
}, Xf = function(r, e) {
  var t, n, i;
  return ke([
    $e(),
    e.graphicsState && Er(e.graphicsState),
    Nt(e.x, e.y),
    rn(at((t = e.rotate) !== null && t !== void 0 ? t : le(0))),
    // SVG path Y axis is opposite pdf-lib's
    e.scale ? On(e.scale, -e.scale) : On(1, -1),
    e.color && Nr(e.color),
    e.borderColor && jn(e.borderColor),
    e.borderWidth && Mn(e.borderWidth),
    e.borderLineCap && Ii(e.borderLineCap),
    Mi((n = e.borderDashArray) !== null && n !== void 0 ? n : [], (i = e.borderDashPhase) !== null && i !== void 0 ? i : 0)
  ], Vf(r), [
    // prettier-ignore
    e.color && e.borderWidth ? Ia() : e.color ? Ma() : e.borderColor ? In() : xr(),
    et()
  ]).filter(Boolean);
}, Zf = function(r) {
  var e = me(r.size), t = -1 + 0.75, n = -1 + 0.51, i = 1 - 0.525, a = 1 - 0.31, o = -1 + 0.325, s = 0.3995 / (i - n) + n;
  return [
    $e(),
    r.color && jn(r.color),
    Mn(r.thickness),
    Nt(r.x, r.y),
    Qt(o * e, s * e),
    rt(t * e, n * e),
    rt(a * e, i * e),
    In(),
    et()
  ].filter(Boolean);
}, Cr = function(r) {
  return r.rotation === 0 ? [
    Nt(0, 0),
    Yn(0)
  ] : r.rotation === 90 ? [
    Nt(r.width, 0),
    Yn(90)
  ] : r.rotation === 180 ? [
    Nt(r.width, r.height),
    Yn(180)
  ] : r.rotation === 270 ? [
    Nt(0, r.height),
    Yn(270)
  ] : [];
}, Jn = function(r) {
  var e = _r({
    x: r.x,
    y: r.y,
    width: r.width,
    height: r.height,
    borderWidth: r.borderWidth,
    color: r.color,
    borderColor: r.borderColor,
    rotate: le(0),
    xSkew: le(0),
    ySkew: le(0)
  });
  if (!r.filled)
    return e;
  var t = me(r.width), n = me(r.height), i = Math.min(t, n) / 2, a = Zf({
    x: t / 2,
    y: n / 2,
    size: i,
    thickness: r.thickness,
    color: r.markColor
  });
  return ke([$e()], e, a, [et()]);
}, _n = function(r) {
  var e = me(r.width), t = me(r.height), n = Math.min(e, t) / 2, i = pa({
    x: r.x,
    y: r.y,
    xScale: n,
    yScale: n,
    color: r.color,
    borderColor: r.borderColor,
    borderWidth: r.borderWidth
  });
  if (!r.filled)
    return i;
  var a = pa({
    x: r.x,
    y: r.y,
    xScale: n * 0.45,
    yScale: n * 0.45,
    color: r.dotColor,
    borderColor: void 0,
    borderWidth: 0
  });
  return ke([$e()], i, a, [et()]);
}, jo = function(r) {
  var e = me(r.x), t = me(r.y), n = me(r.width), i = me(r.height), a = _r({
    x: e,
    y: t,
    width: n,
    height: i,
    borderWidth: r.borderWidth,
    color: r.color,
    borderColor: r.borderColor,
    rotate: le(0),
    xSkew: le(0),
    ySkew: le(0)
  }), o = qa(r.textLines, {
    color: r.textColor,
    font: r.font,
    size: r.fontSize,
    rotate: le(0),
    xSkew: le(0),
    ySkew: le(0)
  });
  return ke([$e()], a, o, [et()]);
}, qa = function(r, e) {
  for (var t = [
    Is(),
    Nr(e.color),
    ja(e.font, e.size)
  ], n = 0, i = r.length; n < i; n++) {
    var a = r[n], o = a.encoded, s = a.x, u = a.y;
    t.push(Us(at(e.rotate), at(e.xSkew), at(e.ySkew), s, u), Ms(o));
  }
  return t.push(js()), t;
}, Ks = function(r) {
  var e = me(r.x), t = me(r.y), n = me(r.width), i = me(r.height), a = me(r.borderWidth), o = me(r.padding), s = e + a / 2 + o, u = t + a / 2 + o, l = n - (a / 2 + o) * 2, c = i - (a / 2 + o) * 2, h = [
    Qt(s, u),
    rt(s, u + c),
    rt(s + l, u + c),
    rt(s + l, u),
    xr(),
    zs(),
    Bs()
  ], d = _r({
    x: e,
    y: t,
    width: n,
    height: i,
    borderWidth: r.borderWidth,
    color: r.color,
    borderColor: r.borderColor,
    rotate: le(0),
    xSkew: le(0),
    ySkew: le(0)
  }), v = qa(r.textLines, {
    color: r.textColor,
    font: r.font,
    size: r.fontSize,
    rotate: le(0),
    xSkew: le(0),
    ySkew: le(0)
  }), y = ke([
    Ws("Tx"),
    $e()
  ], v, [
    et(),
    Vs()
  ]);
  return ke([
    $e()
  ], d, h, y, [
    et()
  ]);
}, Yf = function(r) {
  for (var e = me(r.x), t = me(r.y), n = me(r.width), i = me(r.height), a = me(r.lineHeight), o = me(r.borderWidth), s = me(r.padding), u = e + o / 2 + s, l = t + o / 2 + s, c = n - (o / 2 + s) * 2, h = i - (o / 2 + s) * 2, d = [
    Qt(u, l),
    rt(u, l + h),
    rt(u + c, l + h),
    rt(u + c, l),
    xr(),
    zs(),
    Bs()
  ], v = _r({
    x: e,
    y: t,
    width: n,
    height: i,
    borderWidth: r.borderWidth,
    color: r.color,
    borderColor: r.borderColor,
    rotate: le(0),
    xSkew: le(0),
    ySkew: le(0)
  }), y = [], w = 0, F = r.selectedLines.length; w < F; w++) {
    var S = r.textLines[r.selectedLines[w]];
    y.push.apply(y, _r({
      x: S.x - s,
      y: S.y - (a - S.height) / 2,
      width: n - o,
      height: S.height + (a - S.height) / 2,
      borderWidth: 0,
      color: r.selectedColor,
      borderColor: void 0,
      rotate: le(0),
      xSkew: le(0),
      ySkew: le(0)
    }));
  }
  var A = qa(r.textLines, {
    color: r.textColor,
    font: r.font,
    size: r.fontSize,
    rotate: le(0),
    xSkew: le(0),
    ySkew: le(0)
  }), C = ke([
    Ws("Tx"),
    $e()
  ], A, [
    et(),
    Vs()
  ]);
  return ke([
    $e()
  ], v, y, d, C, [
    et()
  ]);
}, Qf = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      var t = this, n = "Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways.";
      return t = r.call(this, n) || this, t;
    }
    return e;
  })(Error)
), Jf = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      var t = this, n = "Input to `PDFDocument.embedFont` was a custom font, but no `fontkit` instance was found. You must register a `fontkit` instance with `PDFDocument.registerFontkit(...)` before embedding custom fonts.";
      return t = r.call(this, n) || this, t;
    }
    return e;
  })(Error)
), _f = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      var t = this, n = "A `page` passed to `PDFDocument.addPage` or `PDFDocument.insertPage` was from a different (foreign) PDF document. If you want to copy pages from one PDFDocument to another, you must use `PDFDocument.copyPages(...)` to copy the pages before adding or inserting them.";
      return t = r.call(this, n) || this, t;
    }
    return e;
  })(Error)
), $f = (
  /** @class */
  (function(r) {
    X(e, r);
    function e() {
      var t = this, n = "PDFDocument has no pages so `PDFDocument.removePage` cannot be called";
      return t = r.call(this, n) || this, t;
    }
    return e;
  })(Error)
), ec = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = this, i = 'PDFDocument has no form field with the name "' + t + '"';
      return n = r.call(this, i) || this, n;
    }
    return e;
  })(Error)
), Ar = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      var a, o, s = this, u = n?.name, l = (o = (a = i?.constructor) === null || a === void 0 ? void 0 : a.name) !== null && o !== void 0 ? o : i, c = 'Expected field "' + t + '" to be of type ' + u + ", " + ("but it is actually of type " + l);
      return s = r.call(this, c) || this, s;
    }
    return e;
  })(Error)
);
(function(r) {
  X(e, r);
  function e(t) {
    var n = this, i = 'Failed to select check box due to missing onValue: "' + t + '"';
    return n = r.call(this, i) || this, n;
  }
  return e;
})(Error);
var Gs = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = this, i = 'A field already exists with the specified name: "' + t + '"';
      return n = r.call(this, i) || this, n;
    }
    return e;
  })(Error)
), tc = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = this, i = 'Field name contains invalid component: "' + t + '"';
      return n = r.call(this, i) || this, n;
    }
    return e;
  })(Error)
);
(function(r) {
  X(e, r);
  function e(t) {
    var n = this, i = 'A non-terminal field already exists with the specified name: "' + t + '"';
    return n = r.call(this, i) || this, n;
  }
  return e;
})(Error);
var rc = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t) {
      var n = this, i = "Reading rich text fields is not supported: Attempted to read rich text field: " + t;
      return n = r.call(this, i) || this, n;
    }
    return e;
  })(Error)
), nc = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n) {
      var i = this, a = "Failed to layout combed text as lineLength=" + t + " is greater than cellCount=" + n;
      return i = r.call(this, a) || this, i;
    }
    return e;
  })(Error)
), ic = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      var a = this, o = "Attempted to set text with length=" + t + " for TextField with maxLength=" + n + " and name=" + i;
      return a = r.call(this, o) || this, a;
    }
    return e;
  })(Error)
), ac = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      var a = this, o = "Attempted to set maxLength=" + n + ", which is less than " + t + ", the length of this field's current value (name=" + i + ")";
      return a = r.call(this, o) || this, a;
    }
    return e;
  })(Error)
), _e;
(function(r) {
  r[r.Left = 0] = "Left", r[r.Center = 1] = "Center", r[r.Right = 2] = "Right";
})(_e || (_e = {}));
var Xs = 4, Zs = 500, Ys = function(r, e, t, n) {
  n === void 0 && (n = !1);
  for (var i = Xs; i < Zs; ) {
    for (var a = 0, o = 0, s = r.length; o < s; o++) {
      a += 1;
      for (var u = r[o], l = u.split(" "), c = t.width, h = 0, d = l.length; h < d; h++) {
        var v = h === d - 1, y = v ? l[h] : l[h] + " ", w = e.widthOfTextAtSize(y, i);
        c -= w, c <= 0 && (a += 1, c = t.width - w);
      }
    }
    if (!n && a > r.length)
      return i - 1;
    var F = e.heightAtSize(i), S = F + F * 0.2, A = S * a;
    if (A > Math.abs(t.height))
      return i - 1;
    i += 1;
  }
  return i;
}, oc = function(r, e, t, n) {
  for (var i = t.width / n, a = t.height, o = Xs, s = pu(r); o < Zs; ) {
    for (var u = 0, l = s.length; u < l; u++) {
      var c = s[u], h = e.widthOfTextAtSize(c, o) > i * 0.75;
      if (h)
        return o - 1;
    }
    var d = e.heightAtSize(o, { descender: !1 });
    if (d > a)
      return o - 1;
    o += 1;
  }
  return o;
}, sc = function(r) {
  for (var e = r.length; e > 0; e--)
    if (/\s/.test(r[e]))
      return e;
}, uc = function(r, e, t, n) {
  for (var i, a = r.length; a > 0; ) {
    var o = r.substring(0, a), s = t.encodeText(o), u = t.widthOfTextAtSize(o, n);
    if (u < e) {
      var l = r.substring(a) || void 0;
      return { line: o, encoded: s, width: u, remainder: l };
    }
    a = (i = sc(o)) !== null && i !== void 0 ? i : 0;
  }
  return {
    line: r,
    encoded: t.encodeText(r),
    width: t.widthOfTextAtSize(r, n),
    remainder: void 0
  };
}, Qs = function(r, e) {
  var t = e.alignment, n = e.fontSize, i = e.font, a = e.bounds, o = Xo(Nn(r));
  (n === void 0 || n === 0) && (n = Ys(o, i, a, !0));
  for (var s = i.heightAtSize(n), u = s + s * 0.2, l = [], c = a.x, h = a.y, d = a.x + a.width, v = a.y + a.height, y = a.y + a.height, w = 0, F = o.length; w < F; w++)
    for (var S = o[w]; S !== void 0; ) {
      var A = uc(S, a.width, i, n), C = A.line, E = A.encoded, O = A.width, D = A.remainder, P = t === _e.Left ? a.x : t === _e.Center ? a.x + a.width / 2 - O / 2 : t === _e.Right ? a.x + a.width - O : a.x;
      y -= u, P < c && (c = P), y < h && (h = y), P + O > d && (d = P + O), y + s > v && (v = y + s), l.push({ text: C, encoded: E, width: O, height: s, x: P, y }), S = D?.trim();
    }
  return {
    fontSize: n,
    lineHeight: u,
    lines: l,
    bounds: {
      x: c,
      y: h,
      width: d - c,
      height: v - h
    }
  };
}, lc = function(r, e) {
  var t = e.fontSize, n = e.font, i = e.bounds, a = e.cellCount, o = Zo(Nn(r));
  if (o.length > a)
    throw new nc(o.length, a);
  (t === void 0 || t === 0) && (t = oc(o, n, i, a));
  for (var s = i.width / a, u = n.heightAtSize(t, { descender: !1 }), l = i.y + (i.height / 2 - u / 2), c = [], h = i.x, d = i.y, v = i.x + i.width, y = i.y + i.height, w = 0, F = 0; w < a; ) {
    var S = Yo(o, F), A = S[0], C = S[1], E = n.encodeText(A), O = n.widthOfTextAtSize(A, t), D = i.x + (s * w + s / 2), P = D - O / 2;
    P < h && (h = P), l < d && (d = l), P + O > v && (v = P + O), l + u > y && (y = l + u), c.push({ text: o, encoded: E, width: O, height: u, x: P, y: l }), w += 1, F += C;
  }
  return {
    fontSize: t,
    cells: c,
    bounds: {
      x: h,
      y: d,
      width: v - h,
      height: y - d
    }
  };
}, yi = function(r, e) {
  var t = e.alignment, n = e.fontSize, i = e.font, a = e.bounds, o = Zo(Nn(r));
  (n === void 0 || n === 0) && (n = Ys([o], i, a));
  var s = i.encodeText(o), u = i.widthOfTextAtSize(o, n), l = i.heightAtSize(n, { descender: !1 }), c = t === _e.Left ? a.x : t === _e.Center ? a.x + a.width / 2 - u / 2 : t === _e.Right ? a.x + a.width - u : a.x, h = a.y + (a.height / 2 - l / 2);
  return {
    fontSize: n,
    line: { text: o, encoded: s, width: u, height: l, x: c, y: h },
    bounds: { x: c, y: h, width: u, height: l }
  };
}, nn = function(r) {
  return "normal" in r ? r : { normal: r };
}, fc = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]+(\d*\.\d+|\d+)[\0\t\n\f\r\ ]+Tf/, Sr = function(r) {
  var e, t, n = (e = r.getDefaultAppearance()) !== null && e !== void 0 ? e : "", i = (t = wa(n, fc).match) !== null && t !== void 0 ? t : [], a = Number(i[2]);
  return isFinite(a) ? a : void 0;
}, cc = /(\d*\.\d+|\d+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+(g|rg|k)/, zt = function(r) {
  var e, t = (e = r.getDefaultAppearance()) !== null && e !== void 0 ? e : "", n = wa(t, cc).match, i = n ?? [], a = i[1], o = i[2], s = i[3], u = i[4], l = i[5];
  if (l === "g" && a)
    return Ls(Number(a));
  if (l === "rg" && a && o && s)
    return te(Number(a), Number(o), Number(s));
  if (l === "k" && a && o && s && u)
    return qs(Number(a), Number(o), Number(s), Number(u));
}, Bt = function(r, e, t, n) {
  var i;
  n === void 0 && (n = 0);
  var a = [
    Nr(e).toString(),
    ja((i = t?.name) !== null && i !== void 0 ? i : "dummy__noop", n).toString()
  ].join(`
`);
  r.setDefaultAppearance(a);
}, hc = function(r, e) {
  var t, n, i, a = zt(e), o = zt(r.acroField), s = e.getRectangle(), u = e.getAppearanceCharacteristics(), l = e.getBorderStyle(), c = (t = l?.getWidth()) !== null && t !== void 0 ? t : 0, h = sr(u?.getRotation()), d = Or(s, h), v = d.width, y = d.height, w = Cr(de(de({}, s), { rotation: h })), F = te(0, 0, 0), S = (n = vt(u?.getBorderColor())) !== null && n !== void 0 ? n : F, A = vt(u?.getBackgroundColor()), C = vt(u?.getBackgroundColor(), 0.8), E = (i = a ?? o) !== null && i !== void 0 ? i : F;
  Bt(a ? e : r.acroField, E);
  var O = {
    x: 0 + c / 2,
    y: 0 + c / 2,
    width: v - c,
    height: y - c,
    thickness: 1.5,
    borderWidth: c,
    borderColor: S,
    markColor: E
  };
  return {
    normal: {
      on: ke(w, Jn(de(de({}, O), { color: A, filled: !0 }))),
      off: ke(w, Jn(de(de({}, O), { color: A, filled: !1 })))
    },
    down: {
      on: ke(w, Jn(de(de({}, O), { color: C, filled: !0 }))),
      off: ke(w, Jn(de(de({}, O), { color: C, filled: !1 })))
    }
  };
}, dc = function(r, e) {
  var t, n, i, a = zt(e), o = zt(r.acroField), s = e.getRectangle(), u = e.getAppearanceCharacteristics(), l = e.getBorderStyle(), c = (t = l?.getWidth()) !== null && t !== void 0 ? t : 0, h = sr(u?.getRotation()), d = Or(s, h), v = d.width, y = d.height, w = Cr(de(de({}, s), { rotation: h })), F = te(0, 0, 0), S = (n = vt(u?.getBorderColor())) !== null && n !== void 0 ? n : F, A = vt(u?.getBackgroundColor()), C = vt(u?.getBackgroundColor(), 0.8), E = (i = a ?? o) !== null && i !== void 0 ? i : F;
  Bt(a ? e : r.acroField, E);
  var O = {
    x: v / 2,
    y: y / 2,
    width: v - c,
    height: y - c,
    borderWidth: c,
    borderColor: S,
    dotColor: E
  };
  return {
    normal: {
      on: ke(w, _n(de(de({}, O), { color: A, filled: !0 }))),
      off: ke(w, _n(de(de({}, O), { color: A, filled: !1 })))
    },
    down: {
      on: ke(w, _n(de(de({}, O), { color: C, filled: !0 }))),
      off: ke(w, _n(de(de({}, O), { color: C, filled: !1 })))
    }
  };
}, vc = function(r, e, t) {
  var n, i, a, o, s, u = zt(e), l = zt(r.acroField), c = Sr(e), h = Sr(r.acroField), d = e.getRectangle(), v = e.getAppearanceCharacteristics(), y = e.getBorderStyle(), w = v?.getCaptions(), F = (n = w?.normal) !== null && n !== void 0 ? n : "", S = (a = (i = w?.down) !== null && i !== void 0 ? i : F) !== null && a !== void 0 ? a : "", A = (o = y?.getWidth()) !== null && o !== void 0 ? o : 0, C = sr(v?.getRotation()), E = Or(d, C), O = E.width, D = E.height, P = Cr(de(de({}, d), { rotation: C })), M = te(0, 0, 0), U = vt(v?.getBorderColor()), W = vt(v?.getBackgroundColor()), V = vt(v?.getBackgroundColor(), 0.8), Z = {
    x: A,
    y: A,
    width: O - A * 2,
    height: D - A * 2
  }, I = yi(F, {
    alignment: _e.Center,
    fontSize: c ?? h,
    font: t,
    bounds: Z
  }), J = yi(S, {
    alignment: _e.Center,
    fontSize: c ?? h,
    font: t,
    bounds: Z
  }), re = Math.min(I.fontSize, J.fontSize), Y = (s = u ?? l) !== null && s !== void 0 ? s : M;
  Bt(u || c !== void 0 ? e : r.acroField, Y, t, re);
  var Q = {
    x: 0 + A / 2,
    y: 0 + A / 2,
    width: O - A,
    height: D - A,
    borderWidth: A,
    borderColor: U,
    textColor: Y,
    font: t.name,
    fontSize: re
  };
  return {
    normal: ke(P, jo(de(de({}, Q), { color: W, textLines: [I.line] }))),
    down: ke(P, jo(de(de({}, Q), { color: V, textLines: [J.line] })))
  };
}, pc = function(r, e, t) {
  var n, i, a, o, s = zt(e), u = zt(r.acroField), l = Sr(e), c = Sr(r.acroField), h = e.getRectangle(), d = e.getAppearanceCharacteristics(), v = e.getBorderStyle(), y = (n = r.getText()) !== null && n !== void 0 ? n : "", w = (i = v?.getWidth()) !== null && i !== void 0 ? i : 0, F = sr(d?.getRotation()), S = Or(h, F), A = S.width, C = S.height, E = Cr(de(de({}, h), { rotation: F })), O = te(0, 0, 0), D = vt(d?.getBorderColor()), P = vt(d?.getBackgroundColor()), M, U, W = r.isCombed() ? 0 : 1, V = {
    x: w + W,
    y: w + W,
    width: A - (w + W) * 2,
    height: C - (w + W) * 2
  };
  if (r.isMultiline()) {
    var Z = Qs(y, {
      alignment: r.getAlignment(),
      fontSize: l ?? c,
      font: t,
      bounds: V
    });
    M = Z.lines, U = Z.fontSize;
  } else if (r.isCombed()) {
    var Z = lc(y, {
      fontSize: l ?? c,
      font: t,
      bounds: V,
      cellCount: (a = r.getMaxLength()) !== null && a !== void 0 ? a : 0
    });
    M = Z.cells, U = Z.fontSize;
  } else {
    var Z = yi(y, {
      alignment: r.getAlignment(),
      fontSize: l ?? c,
      font: t,
      bounds: V
    });
    M = [Z.line], U = Z.fontSize;
  }
  var I = (o = s ?? u) !== null && o !== void 0 ? o : O;
  Bt(s || l !== void 0 ? e : r.acroField, I, t, U);
  var J = {
    x: 0 + w / 2,
    y: 0 + w / 2,
    width: A - w,
    height: C - w,
    borderWidth: w ?? 0,
    borderColor: D,
    textColor: I,
    font: t.name,
    fontSize: U,
    color: P,
    textLines: M,
    padding: W
  };
  return ke(E, Ks(J));
}, gc = function(r, e, t) {
  var n, i, a, o = zt(e), s = zt(r.acroField), u = Sr(e), l = Sr(r.acroField), c = e.getRectangle(), h = e.getAppearanceCharacteristics(), d = e.getBorderStyle(), v = (n = r.getSelected()[0]) !== null && n !== void 0 ? n : "", y = (i = d?.getWidth()) !== null && i !== void 0 ? i : 0, w = sr(h?.getRotation()), F = Or(c, w), S = F.width, A = F.height, C = Cr(de(de({}, c), { rotation: w })), E = te(0, 0, 0), O = vt(h?.getBorderColor()), D = vt(h?.getBackgroundColor()), P = 1, M = {
    x: y + P,
    y: y + P,
    width: S - (y + P) * 2,
    height: A - (y + P) * 2
  }, U = yi(v, {
    alignment: _e.Left,
    fontSize: u ?? l,
    font: t,
    bounds: M
  }), W = U.line, V = U.fontSize, Z = (a = o ?? s) !== null && a !== void 0 ? a : E;
  Bt(o || u !== void 0 ? e : r.acroField, Z, t, V);
  var I = {
    x: 0 + y / 2,
    y: 0 + y / 2,
    width: S - y,
    height: A - y,
    borderWidth: y ?? 0,
    borderColor: O,
    textColor: Z,
    font: t.name,
    fontSize: V,
    color: D,
    textLines: [W],
    padding: P
  };
  return ke(C, Ks(I));
}, yc = function(r, e, t) {
  var n, i, a = zt(e), o = zt(r.acroField), s = Sr(e), u = Sr(r.acroField), l = e.getRectangle(), c = e.getAppearanceCharacteristics(), h = e.getBorderStyle(), d = (n = h?.getWidth()) !== null && n !== void 0 ? n : 0, v = sr(c?.getRotation()), y = Or(l, v), w = y.width, F = y.height, S = Cr(de(de({}, l), { rotation: v })), A = te(0, 0, 0), C = vt(c?.getBorderColor()), E = vt(c?.getBackgroundColor()), O = r.getOptions(), D = r.getSelected();
  r.isSorted() && O.sort();
  for (var P = "", M = 0, U = O.length; M < U; M++)
    P += O[M], M < U - 1 && (P += `
`);
  for (var W = 1, V = {
    x: d + W,
    y: d + W,
    width: w - (d + W) * 2,
    height: F - (d + W) * 2
  }, Z = Qs(P, {
    alignment: _e.Left,
    fontSize: s ?? u,
    font: t,
    bounds: V
  }), I = Z.lines, J = Z.fontSize, re = Z.lineHeight, Y = [], M = 0, U = I.length; M < U; M++) {
    var Q = I[M];
    D.includes(Q.text) && Y.push(M);
  }
  var Pe = te(153 / 255, 193 / 255, 218 / 255), be = (i = a ?? o) !== null && i !== void 0 ? i : A;
  return Bt(a || s !== void 0 ? e : r.acroField, be, t, J), ke(S, Yf({
    x: 0 + d / 2,
    y: 0 + d / 2,
    width: w - d,
    height: F - d,
    borderWidth: d ?? 0,
    borderColor: C,
    textColor: be,
    font: t.name,
    fontSize: J,
    color: E,
    textLines: I,
    lineHeight: re,
    selectedColor: Pe,
    selectedLines: Y,
    padding: W
  }));
}, Js = (
  /** @class */
  (function() {
    function r(e, t, n) {
      this.alreadyEmbedded = !1, R(e, "ref", [[Ne, "PDFRef"]]), R(t, "doc", [[Ht, "PDFDocument"]]), R(n, "embedder", [[Ss, "PDFPageEmbedder"]]), this.ref = e, this.doc = t, this.width = n.width, this.height = n.height, this.embedder = n;
    }
    return r.prototype.scale = function(e) {
      return R(e, "factor", ["number"]), { width: this.width * e, height: this.height * e };
    }, r.prototype.size = function() {
      return this.scale(1);
    }, r.prototype.embed = function() {
      return ge(this, void 0, void 0, function() {
        return ye(this, function(e) {
          switch (e.label) {
            case 0:
              return this.alreadyEmbedded ? [3, 2] : [4, this.embedder.embedIntoContext(this.doc.context, this.ref)];
            case 1:
              e.sent(), this.alreadyEmbedded = !0, e.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.of = function(e, t, n) {
      return new r(e, t, n);
    }, r;
  })()
), St = (
  /** @class */
  (function() {
    function r(e, t, n) {
      this.modified = !0, R(e, "ref", [[Ne, "PDFRef"]]), R(t, "doc", [[Ht, "PDFDocument"]]), R(n, "embedder", [
        [Aa, "CustomFontEmbedder"],
        [li, "StandardFontEmbedder"]
      ]), this.ref = e, this.doc = t, this.name = n.fontName, this.embedder = n;
    }
    return r.prototype.encodeText = function(e) {
      return R(e, "text", ["string"]), this.modified = !0, this.embedder.encodeText(e);
    }, r.prototype.widthOfTextAtSize = function(e, t) {
      return R(e, "text", ["string"]), R(t, "size", ["number"]), this.embedder.widthOfTextAtSize(e, t);
    }, r.prototype.heightAtSize = function(e, t) {
      var n;
      return R(e, "size", ["number"]), K(t?.descender, "options.descender", ["boolean"]), this.embedder.heightOfFontAtSize(e, {
        descender: (n = t?.descender) !== null && n !== void 0 ? n : !0
      });
    }, r.prototype.sizeAtHeight = function(e) {
      return R(e, "height", ["number"]), this.embedder.sizeOfFontAtHeight(e);
    }, r.prototype.getCharacterSet = function() {
      return this.embedder instanceof li ? this.embedder.encoding.supportedCodePoints : this.embedder.font.characterSet;
    }, r.prototype.embed = function() {
      return ge(this, void 0, void 0, function() {
        return ye(this, function(e) {
          switch (e.label) {
            case 0:
              return this.modified ? [4, this.embedder.embedIntoContext(this.doc.context, this.ref)] : [3, 2];
            case 1:
              e.sent(), this.modified = !1, e.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.of = function(e, t, n) {
      return new r(e, t, n);
    }, r;
  })()
), ga = (
  /** @class */
  (function() {
    function r(e, t, n) {
      R(e, "ref", [[Ne, "PDFRef"]]), R(t, "doc", [[Ht, "PDFDocument"]]), R(n, "embedder", [
        [ms, "JpegEmbedder"],
        [bs, "PngEmbedder"]
      ]), this.ref = e, this.doc = t, this.width = n.width, this.height = n.height, this.embedder = n;
    }
    return r.prototype.scale = function(e) {
      return R(e, "factor", ["number"]), { width: this.width * e, height: this.height * e };
    }, r.prototype.scaleToFit = function(e, t) {
      R(e, "width", ["number"]), R(t, "height", ["number"]);
      var n = e / this.width, i = t / this.height, a = Math.min(n, i);
      return this.scale(a);
    }, r.prototype.size = function() {
      return this.scale(1);
    }, r.prototype.embed = function() {
      return ge(this, void 0, void 0, function() {
        var e, t, n;
        return ye(this, function(i) {
          switch (i.label) {
            case 0:
              return this.embedder ? (this.embedTask || (e = this, t = e.doc, n = e.ref, this.embedTask = this.embedder.embedIntoContext(t.context, n)), [4, this.embedTask]) : [
                2
                /*return*/
              ];
            case 1:
              return i.sent(), this.embedder = void 0, [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.of = function(e, t, n) {
      return new r(e, t, n);
    }, r;
  })()
), yr;
(function(r) {
  r[r.Left = 0] = "Left", r[r.Center = 1] = "Center", r[r.Right = 2] = "Right";
})(yr || (yr = {}));
var an = function(r) {
  K(r?.x, "options.x", ["number"]), K(r?.y, "options.y", ["number"]), K(r?.width, "options.width", ["number"]), K(r?.height, "options.height", ["number"]), K(r?.textColor, "options.textColor", [
    [Object, "Color"]
  ]), K(r?.backgroundColor, "options.backgroundColor", [
    [Object, "Color"]
  ]), K(r?.borderColor, "options.borderColor", [
    [Object, "Color"]
  ]), K(r?.borderWidth, "options.borderWidth", ["number"]), K(r?.rotate, "options.rotate", [[Object, "Rotation"]]);
}, zr = (
  /** @class */
  (function() {
    function r(e, t, n) {
      R(e, "acroField", [[tn, "PDFAcroTerminal"]]), R(t, "ref", [[Ne, "PDFRef"]]), R(n, "doc", [[Ht, "PDFDocument"]]), this.acroField = e, this.ref = t, this.doc = n;
    }
    return r.prototype.getName = function() {
      var e;
      return (e = this.acroField.getFullyQualifiedName()) !== null && e !== void 0 ? e : "";
    }, r.prototype.isReadOnly = function() {
      return this.acroField.hasFlag(Vt.ReadOnly);
    }, r.prototype.enableReadOnly = function() {
      this.acroField.setFlagTo(Vt.ReadOnly, !0);
    }, r.prototype.disableReadOnly = function() {
      this.acroField.setFlagTo(Vt.ReadOnly, !1);
    }, r.prototype.isRequired = function() {
      return this.acroField.hasFlag(Vt.Required);
    }, r.prototype.enableRequired = function() {
      this.acroField.setFlagTo(Vt.Required, !0);
    }, r.prototype.disableRequired = function() {
      this.acroField.setFlagTo(Vt.Required, !1);
    }, r.prototype.isExported = function() {
      return !this.acroField.hasFlag(Vt.NoExport);
    }, r.prototype.enableExporting = function() {
      this.acroField.setFlagTo(Vt.NoExport, !1);
    }, r.prototype.disableExporting = function() {
      this.acroField.setFlagTo(Vt.NoExport, !0);
    }, r.prototype.needsAppearancesUpdate = function() {
      throw new Et(this.constructor.name, "needsAppearancesUpdate");
    }, r.prototype.defaultUpdateAppearances = function(e) {
      throw new Et(this.constructor.name, "defaultUpdateAppearances");
    }, r.prototype.markAsDirty = function() {
      this.doc.getForm().markFieldAsDirty(this.ref);
    }, r.prototype.markAsClean = function() {
      this.doc.getForm().markFieldAsClean(this.ref);
    }, r.prototype.isDirty = function() {
      return this.doc.getForm().fieldIsDirty(this.ref);
    }, r.prototype.createWidget = function(e) {
      var t, n = e.textColor, i = e.backgroundColor, a = e.borderColor, o = e.borderWidth, s = Ns(e.rotate), u = e.caption, l = e.x, c = e.y, h = e.width + o, d = e.height + o, v = !!e.hidden, y = e.page;
      cs(s, "degreesAngle", 90);
      var w = da.create(this.doc.context, this.ref), F = Pf({ x: l, y: c, width: h, height: d }, o, s);
      w.setRectangle(F), y && w.setP(y);
      var S = w.getOrCreateAppearanceCharacteristics();
      i && S.setBackgroundColor(zo(i)), S.setRotation(s), u && S.setCaptions({ normal: u }), a && S.setBorderColor(zo(a));
      var A = w.getOrCreateBorderStyle();
      if (o !== void 0 && A.setWidth(o), w.setFlagTo(Fn.Print, !0), w.setFlagTo(Fn.Hidden, v), w.setFlagTo(Fn.Invisible, !1), n) {
        var C = (t = this.acroField.getDefaultAppearance()) !== null && t !== void 0 ? t : "", E = C + `
` + Nr(n).toString();
        this.acroField.setDefaultAppearance(E);
      }
      return w;
    }, r.prototype.updateWidgetAppearanceWithFont = function(e, t, n) {
      var i = n.normal, a = n.rollover, o = n.down;
      this.updateWidgetAppearances(e, {
        normal: this.createAppearanceStream(e, i, t),
        rollover: a && this.createAppearanceStream(e, a, t),
        down: o && this.createAppearanceStream(e, o, t)
      });
    }, r.prototype.updateOnOffWidgetAppearance = function(e, t, n) {
      var i = n.normal, a = n.rollover, o = n.down;
      this.updateWidgetAppearances(e, {
        normal: this.createAppearanceDict(e, i, t),
        rollover: a && this.createAppearanceDict(e, a, t),
        down: o && this.createAppearanceDict(e, o, t)
      });
    }, r.prototype.updateWidgetAppearances = function(e, t) {
      var n = t.normal, i = t.rollover, a = t.down;
      e.setNormalAppearance(n), i ? e.setRolloverAppearance(i) : e.removeRolloverAppearance(), a ? e.setDownAppearance(a) : e.removeDownAppearance();
    }, r.prototype.createAppearanceStream = function(e, t, n) {
      var i, a = this.acroField.dict.context, o = e.getRectangle(), s = o.width, u = o.height, l = n && { Font: (i = {}, i[n.name] = n.ref, i) }, c = a.formXObject(t, {
        Resources: l,
        BBox: a.obj([0, 0, s, u]),
        Matrix: a.obj([1, 0, 0, 1, 0, 0])
      }), h = a.register(c);
      return h;
    }, r.prototype.createImageAppearanceStream = function(e, t, n) {
      var i, a, o = this.acroField.dict.context, s = e.getRectangle(), u = e.getAppearanceCharacteristics(), l = e.getBorderStyle(), c = (a = l?.getWidth()) !== null && a !== void 0 ? a : 0, h = sr(u?.getRotation()), d = Cr(de(de({}, s), { rotation: h })), v = Or(s, h), y = t.scaleToFit(v.width - c * 2, v.height - c * 2), w = {
        x: c,
        y: c,
        width: y.width,
        height: y.height,
        //
        rotate: le(0),
        xSkew: le(0),
        ySkew: le(0)
      };
      n === yr.Center ? (w.x += (v.width - c * 2) / 2 - y.width / 2, w.y += (v.height - c * 2) / 2 - y.height / 2) : n === yr.Right && (w.x = v.width - c - y.width, w.y = v.height - c - y.height);
      var F = this.doc.context.addRandomSuffix("Image", 10), S = ke(d, Hs(F, w)), A = { XObject: (i = {}, i[F] = t.ref, i) }, C = o.formXObject(S, {
        Resources: A,
        BBox: o.obj([0, 0, s.width, s.height]),
        Matrix: o.obj([1, 0, 0, 1, 0, 0])
      });
      return o.register(C);
    }, r.prototype.createAppearanceDict = function(e, t, n) {
      var i = this.acroField.dict.context, a = this.createAppearanceStream(e, t.on), o = this.createAppearanceStream(e, t.off), s = i.obj({});
      return s.set(n, a), s.set(b.of("Off"), o), s;
    }, r;
  })()
), yn = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      var a = r.call(this, t, n, i) || this;
      return R(t, "acroCheckBox", [
        [Ti, "PDFAcroCheckBox"]
      ]), a.acroField = t, a;
    }
    return e.prototype.check = function() {
      var t, n = (t = this.acroField.getOnValue()) !== null && t !== void 0 ? t : b.of("Yes");
      this.markAsDirty(), this.acroField.setValue(n);
    }, e.prototype.uncheck = function() {
      this.markAsDirty(), this.acroField.setValue(b.of("Off"));
    }, e.prototype.isChecked = function() {
      var t = this.acroField.getOnValue();
      return !!t && t === this.acroField.getValue();
    }, e.prototype.addToPage = function(t, n) {
      var i, a, o, s, u, l;
      R(t, "page", [[Ot, "PDFPage"]]), an(n), n || (n = {}), "textColor" in n || (n.textColor = te(0, 0, 0)), "backgroundColor" in n || (n.backgroundColor = te(1, 1, 1)), "borderColor" in n || (n.borderColor = te(0, 0, 0)), "borderWidth" in n || (n.borderWidth = 1);
      var c = this.createWidget({
        x: (i = n.x) !== null && i !== void 0 ? i : 0,
        y: (a = n.y) !== null && a !== void 0 ? a : 0,
        width: (o = n.width) !== null && o !== void 0 ? o : 50,
        height: (s = n.height) !== null && s !== void 0 ? s : 50,
        textColor: n.textColor,
        backgroundColor: n.backgroundColor,
        borderColor: n.borderColor,
        borderWidth: (u = n.borderWidth) !== null && u !== void 0 ? u : 0,
        rotate: (l = n.rotate) !== null && l !== void 0 ? l : le(0),
        hidden: n.hidden,
        page: t.ref
      }), h = this.doc.context.register(c.dict);
      this.acroField.addWidget(h), c.setAppearanceState(b.of("Off")), this.updateWidgetAppearance(c, b.of("Yes")), t.node.addAnnot(h);
    }, e.prototype.needsAppearancesUpdate = function() {
      for (var t, n = this.acroField.getWidgets(), i = 0, a = n.length; i < a; i++) {
        var o = n[i], s = o.getAppearanceState(), u = (t = o.getAppearances()) === null || t === void 0 ? void 0 : t.normal;
        if (!(u instanceof pe) || s && !u.has(s))
          return !0;
      }
      return !1;
    }, e.prototype.defaultUpdateAppearances = function() {
      this.updateAppearances();
    }, e.prototype.updateAppearances = function(t) {
      var n;
      K(t, "provider", [Function]);
      for (var i = this.acroField.getWidgets(), a = 0, o = i.length; a < o; a++) {
        var s = i[a], u = (n = s.getOnValue()) !== null && n !== void 0 ? n : b.of("Yes");
        u && this.updateWidgetAppearance(s, u, t);
      }
      this.markAsClean();
    }, e.prototype.updateWidgetAppearance = function(t, n, i) {
      var a = i ?? hc, o = nn(a(this, t));
      this.updateOnOffWidgetAppearance(t, n, o);
    }, e.of = function(t, n, i) {
      return new e(t, n, i);
    }, e;
  })(zr)
), ri = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      var a = r.call(this, t, n, i) || this;
      return R(t, "acroComboBox", [
        [Pi, "PDFAcroComboBox"]
      ]), a.acroField = t, a;
    }
    return e.prototype.getOptions = function() {
      for (var t = this.acroField.getOptions(), n = new Array(t.length), i = 0, a = n.length; i < a; i++) {
        var o = t[i], s = o.display, u = o.value;
        n[i] = (s ?? u).decodeText();
      }
      return n;
    }, e.prototype.getSelected = function() {
      for (var t = this.acroField.getValues(), n = new Array(t.length), i = 0, a = t.length; i < a; i++)
        n[i] = t[i].decodeText();
      return n;
    }, e.prototype.setOptions = function(t) {
      R(t, "options", [Array]);
      for (var n = new Array(t.length), i = 0, a = t.length; i < a; i++)
        n[i] = { value: se.fromText(t[i]) };
      this.acroField.setOptions(n);
    }, e.prototype.addOptions = function(t) {
      R(t, "options", ["string", Array]);
      for (var n = Array.isArray(t) ? t : [t], i = this.acroField.getOptions(), a = new Array(n.length), o = 0, s = n.length; o < s; o++)
        a[o] = { value: se.fromText(n[o]) };
      this.acroField.setOptions(i.concat(a));
    }, e.prototype.select = function(t, n) {
      n === void 0 && (n = !1), R(t, "options", ["string", Array]), R(n, "merge", ["boolean"]);
      var i = Array.isArray(t) ? t : [t], a = this.getOptions(), o = i.find(function(h) {
        return !a.includes(h);
      });
      o && this.enableEditing(), this.markAsDirty(), (i.length > 1 || i.length === 1 && n) && this.enableMultiselect();
      for (var s = new Array(i.length), u = 0, l = i.length; u < l; u++)
        s[u] = se.fromText(i[u]);
      if (n) {
        var c = this.acroField.getValues();
        this.acroField.setValues(c.concat(s));
      } else
        this.acroField.setValues(s);
    }, e.prototype.clear = function() {
      this.markAsDirty(), this.acroField.setValues([]);
    }, e.prototype.setFontSize = function(t) {
      ki(t, "fontSize"), this.acroField.setFontSize(t), this.markAsDirty();
    }, e.prototype.isEditable = function() {
      return this.acroField.hasFlag(Oe.Edit);
    }, e.prototype.enableEditing = function() {
      this.acroField.setFlagTo(Oe.Edit, !0);
    }, e.prototype.disableEditing = function() {
      this.acroField.setFlagTo(Oe.Edit, !1);
    }, e.prototype.isSorted = function() {
      return this.acroField.hasFlag(Oe.Sort);
    }, e.prototype.enableSorting = function() {
      this.acroField.setFlagTo(Oe.Sort, !0);
    }, e.prototype.disableSorting = function() {
      this.acroField.setFlagTo(Oe.Sort, !1);
    }, e.prototype.isMultiselect = function() {
      return this.acroField.hasFlag(Oe.MultiSelect);
    }, e.prototype.enableMultiselect = function() {
      this.acroField.setFlagTo(Oe.MultiSelect, !0);
    }, e.prototype.disableMultiselect = function() {
      this.acroField.setFlagTo(Oe.MultiSelect, !1);
    }, e.prototype.isSpellChecked = function() {
      return !this.acroField.hasFlag(Oe.DoNotSpellCheck);
    }, e.prototype.enableSpellChecking = function() {
      this.acroField.setFlagTo(Oe.DoNotSpellCheck, !1);
    }, e.prototype.disableSpellChecking = function() {
      this.acroField.setFlagTo(Oe.DoNotSpellCheck, !0);
    }, e.prototype.isSelectOnClick = function() {
      return this.acroField.hasFlag(Oe.CommitOnSelChange);
    }, e.prototype.enableSelectOnClick = function() {
      this.acroField.setFlagTo(Oe.CommitOnSelChange, !0);
    }, e.prototype.disableSelectOnClick = function() {
      this.acroField.setFlagTo(Oe.CommitOnSelChange, !1);
    }, e.prototype.addToPage = function(t, n) {
      var i, a, o, s, u, l, c;
      R(t, "page", [[Ot, "PDFPage"]]), an(n), n || (n = {}), "textColor" in n || (n.textColor = te(0, 0, 0)), "backgroundColor" in n || (n.backgroundColor = te(1, 1, 1)), "borderColor" in n || (n.borderColor = te(0, 0, 0)), "borderWidth" in n || (n.borderWidth = 1);
      var h = this.createWidget({
        x: (i = n.x) !== null && i !== void 0 ? i : 0,
        y: (a = n.y) !== null && a !== void 0 ? a : 0,
        width: (o = n.width) !== null && o !== void 0 ? o : 200,
        height: (s = n.height) !== null && s !== void 0 ? s : 50,
        textColor: n.textColor,
        backgroundColor: n.backgroundColor,
        borderColor: n.borderColor,
        borderWidth: (u = n.borderWidth) !== null && u !== void 0 ? u : 0,
        rotate: (l = n.rotate) !== null && l !== void 0 ? l : le(0),
        hidden: n.hidden,
        page: t.ref
      }), d = this.doc.context.register(h.dict);
      this.acroField.addWidget(d);
      var v = (c = n.font) !== null && c !== void 0 ? c : this.doc.getForm().getDefaultFont();
      this.updateWidgetAppearance(h, v), t.node.addAnnot(d);
    }, e.prototype.needsAppearancesUpdate = function() {
      var t;
      if (this.isDirty())
        return !0;
      for (var n = this.acroField.getWidgets(), i = 0, a = n.length; i < a; i++) {
        var o = n[i], s = ((t = o.getAppearances()) === null || t === void 0 ? void 0 : t.normal) instanceof wt;
        if (!s)
          return !0;
      }
      return !1;
    }, e.prototype.defaultUpdateAppearances = function(t) {
      R(t, "font", [[St, "PDFFont"]]), this.updateAppearances(t);
    }, e.prototype.updateAppearances = function(t, n) {
      R(t, "font", [[St, "PDFFont"]]), K(n, "provider", [Function]);
      for (var i = this.acroField.getWidgets(), a = 0, o = i.length; a < o; a++) {
        var s = i[a];
        this.updateWidgetAppearance(s, t, n);
      }
      this.markAsClean();
    }, e.prototype.updateWidgetAppearance = function(t, n, i) {
      var a = i ?? gc, o = nn(a(this, t, n));
      this.updateWidgetAppearanceWithFont(t, n, o);
    }, e.of = function(t, n, i) {
      return new e(t, n, i);
    }, e;
  })(zr)
), ni = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      var a = r.call(this, t, n, i) || this;
      return R(t, "acroListBox", [[Oi, "PDFAcroListBox"]]), a.acroField = t, a;
    }
    return e.prototype.getOptions = function() {
      for (var t = this.acroField.getOptions(), n = new Array(t.length), i = 0, a = n.length; i < a; i++) {
        var o = t[i], s = o.display, u = o.value;
        n[i] = (s ?? u).decodeText();
      }
      return n;
    }, e.prototype.getSelected = function() {
      for (var t = this.acroField.getValues(), n = new Array(t.length), i = 0, a = t.length; i < a; i++)
        n[i] = t[i].decodeText();
      return n;
    }, e.prototype.setOptions = function(t) {
      R(t, "options", [Array]), this.markAsDirty();
      for (var n = new Array(t.length), i = 0, a = t.length; i < a; i++)
        n[i] = { value: se.fromText(t[i]) };
      this.acroField.setOptions(n);
    }, e.prototype.addOptions = function(t) {
      R(t, "options", ["string", Array]), this.markAsDirty();
      for (var n = Array.isArray(t) ? t : [t], i = this.acroField.getOptions(), a = new Array(n.length), o = 0, s = n.length; o < s; o++)
        a[o] = { value: se.fromText(n[o]) };
      this.acroField.setOptions(i.concat(a));
    }, e.prototype.select = function(t, n) {
      n === void 0 && (n = !1), R(t, "options", ["string", Array]), R(n, "merge", ["boolean"]);
      var i = Array.isArray(t) ? t : [t], a = this.getOptions();
      vl(i, "option", a), this.markAsDirty(), (i.length > 1 || i.length === 1 && n) && this.enableMultiselect();
      for (var o = new Array(i.length), s = 0, u = i.length; s < u; s++)
        o[s] = se.fromText(i[s]);
      if (n) {
        var l = this.acroField.getValues();
        this.acroField.setValues(l.concat(o));
      } else
        this.acroField.setValues(o);
    }, e.prototype.clear = function() {
      this.markAsDirty(), this.acroField.setValues([]);
    }, e.prototype.setFontSize = function(t) {
      ki(t, "fontSize"), this.acroField.setFontSize(t), this.markAsDirty();
    }, e.prototype.isSorted = function() {
      return this.acroField.hasFlag(Oe.Sort);
    }, e.prototype.enableSorting = function() {
      this.acroField.setFlagTo(Oe.Sort, !0);
    }, e.prototype.disableSorting = function() {
      this.acroField.setFlagTo(Oe.Sort, !1);
    }, e.prototype.isMultiselect = function() {
      return this.acroField.hasFlag(Oe.MultiSelect);
    }, e.prototype.enableMultiselect = function() {
      this.acroField.setFlagTo(Oe.MultiSelect, !0);
    }, e.prototype.disableMultiselect = function() {
      this.acroField.setFlagTo(Oe.MultiSelect, !1);
    }, e.prototype.isSelectOnClick = function() {
      return this.acroField.hasFlag(Oe.CommitOnSelChange);
    }, e.prototype.enableSelectOnClick = function() {
      this.acroField.setFlagTo(Oe.CommitOnSelChange, !0);
    }, e.prototype.disableSelectOnClick = function() {
      this.acroField.setFlagTo(Oe.CommitOnSelChange, !1);
    }, e.prototype.addToPage = function(t, n) {
      var i, a, o, s, u, l, c;
      R(t, "page", [[Ot, "PDFPage"]]), an(n), n || (n = {}), "textColor" in n || (n.textColor = te(0, 0, 0)), "backgroundColor" in n || (n.backgroundColor = te(1, 1, 1)), "borderColor" in n || (n.borderColor = te(0, 0, 0)), "borderWidth" in n || (n.borderWidth = 1);
      var h = this.createWidget({
        x: (i = n.x) !== null && i !== void 0 ? i : 0,
        y: (a = n.y) !== null && a !== void 0 ? a : 0,
        width: (o = n.width) !== null && o !== void 0 ? o : 200,
        height: (s = n.height) !== null && s !== void 0 ? s : 100,
        textColor: n.textColor,
        backgroundColor: n.backgroundColor,
        borderColor: n.borderColor,
        borderWidth: (u = n.borderWidth) !== null && u !== void 0 ? u : 0,
        rotate: (l = n.rotate) !== null && l !== void 0 ? l : le(0),
        hidden: n.hidden,
        page: t.ref
      }), d = this.doc.context.register(h.dict);
      this.acroField.addWidget(d);
      var v = (c = n.font) !== null && c !== void 0 ? c : this.doc.getForm().getDefaultFont();
      this.updateWidgetAppearance(h, v), t.node.addAnnot(d);
    }, e.prototype.needsAppearancesUpdate = function() {
      var t;
      if (this.isDirty())
        return !0;
      for (var n = this.acroField.getWidgets(), i = 0, a = n.length; i < a; i++) {
        var o = n[i], s = ((t = o.getAppearances()) === null || t === void 0 ? void 0 : t.normal) instanceof wt;
        if (!s)
          return !0;
      }
      return !1;
    }, e.prototype.defaultUpdateAppearances = function(t) {
      R(t, "font", [[St, "PDFFont"]]), this.updateAppearances(t);
    }, e.prototype.updateAppearances = function(t, n) {
      R(t, "font", [[St, "PDFFont"]]), K(n, "provider", [Function]);
      for (var i = this.acroField.getWidgets(), a = 0, o = i.length; a < o; a++) {
        var s = i[a];
        this.updateWidgetAppearance(s, t, n);
      }
      this.markAsClean();
    }, e.prototype.updateWidgetAppearance = function(t, n, i) {
      var a = i ?? yc, o = nn(a(this, t, n));
      this.updateWidgetAppearanceWithFont(t, n, o);
    }, e.of = function(t, n, i) {
      return new e(t, n, i);
    }, e;
  })(zr)
), mn = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      var a = r.call(this, t, n, i) || this;
      return R(t, "acroRadioButton", [
        [Ri, "PDFAcroRadioButton"]
      ]), a.acroField = t, a;
    }
    return e.prototype.getOptions = function() {
      var t = this.acroField.getExportValues();
      if (t) {
        for (var n = new Array(t.length), i = 0, a = t.length; i < a; i++)
          n[i] = t[i].decodeText();
        return n;
      }
      for (var o = this.acroField.getOnValues(), s = new Array(o.length), i = 0, a = s.length; i < a; i++)
        s[i] = o[i].decodeText();
      return s;
    }, e.prototype.getSelected = function() {
      var t = this.acroField.getValue();
      if (t !== b.of("Off")) {
        var n = this.acroField.getExportValues();
        if (n) {
          for (var i = this.acroField.getOnValues(), a = 0, o = i.length; a < o; a++)
            if (i[a] === t)
              return n[a].decodeText();
        }
        return t.decodeText();
      }
    }, e.prototype.select = function(t) {
      R(t, "option", ["string"]);
      var n = this.getOptions();
      pr(t, "option", n), this.markAsDirty();
      var i = this.acroField.getOnValues(), a = this.acroField.getExportValues();
      if (a)
        for (var o = 0, s = a.length; o < s; o++)
          a[o].decodeText() === t && this.acroField.setValue(i[o]);
      else
        for (var o = 0, s = i.length; o < s; o++) {
          var u = i[o];
          u.decodeText() === t && this.acroField.setValue(u);
        }
    }, e.prototype.clear = function() {
      this.markAsDirty(), this.acroField.setValue(b.of("Off"));
    }, e.prototype.isOffToggleable = function() {
      return !this.acroField.hasFlag(Rt.NoToggleToOff);
    }, e.prototype.enableOffToggling = function() {
      this.acroField.setFlagTo(Rt.NoToggleToOff, !1);
    }, e.prototype.disableOffToggling = function() {
      this.acroField.setFlagTo(Rt.NoToggleToOff, !0);
    }, e.prototype.isMutuallyExclusive = function() {
      return !this.acroField.hasFlag(Rt.RadiosInUnison);
    }, e.prototype.enableMutualExclusion = function() {
      this.acroField.setFlagTo(Rt.RadiosInUnison, !1);
    }, e.prototype.disableMutualExclusion = function() {
      this.acroField.setFlagTo(Rt.RadiosInUnison, !0);
    }, e.prototype.addOptionToPage = function(t, n, i) {
      var a, o, s, u, l, c, h, d, v;
      R(t, "option", ["string"]), R(n, "page", [[Ot, "PDFPage"]]), an(i);
      var y = this.createWidget({
        x: (a = i?.x) !== null && a !== void 0 ? a : 0,
        y: (o = i?.y) !== null && o !== void 0 ? o : 0,
        width: (s = i?.width) !== null && s !== void 0 ? s : 50,
        height: (u = i?.height) !== null && u !== void 0 ? u : 50,
        textColor: (l = i?.textColor) !== null && l !== void 0 ? l : te(0, 0, 0),
        backgroundColor: (c = i?.backgroundColor) !== null && c !== void 0 ? c : te(1, 1, 1),
        borderColor: (h = i?.borderColor) !== null && h !== void 0 ? h : te(0, 0, 0),
        borderWidth: (d = i?.borderWidth) !== null && d !== void 0 ? d : 1,
        rotate: (v = i?.rotate) !== null && v !== void 0 ? v : le(0),
        hidden: i?.hidden,
        page: n.ref
      }), w = this.doc.context.register(y.dict), F = this.acroField.addWidgetWithOpt(w, se.fromText(t), !this.isMutuallyExclusive());
      y.setAppearanceState(b.of("Off")), this.updateWidgetAppearance(y, F), n.node.addAnnot(w);
    }, e.prototype.needsAppearancesUpdate = function() {
      for (var t, n = this.acroField.getWidgets(), i = 0, a = n.length; i < a; i++) {
        var o = n[i], s = o.getAppearanceState(), u = (t = o.getAppearances()) === null || t === void 0 ? void 0 : t.normal;
        if (!(u instanceof pe) || s && !u.has(s))
          return !0;
      }
      return !1;
    }, e.prototype.defaultUpdateAppearances = function() {
      this.updateAppearances();
    }, e.prototype.updateAppearances = function(t) {
      K(t, "provider", [Function]);
      for (var n = this.acroField.getWidgets(), i = 0, a = n.length; i < a; i++) {
        var o = n[i], s = o.getOnValue();
        s && this.updateWidgetAppearance(o, s, t);
      }
    }, e.prototype.updateWidgetAppearance = function(t, n, i) {
      var a = i ?? dc, o = nn(a(this, t));
      this.updateOnOffWidgetAppearance(t, n, o);
    }, e.of = function(t, n, i) {
      return new e(t, n, i);
    }, e;
  })(zr)
), ya = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      var a = r.call(this, t, n, i) || this;
      return R(t, "acroSignature", [
        [Oa, "PDFAcroSignature"]
      ]), a.acroField = t, a;
    }
    return e.prototype.needsAppearancesUpdate = function() {
      return !1;
    }, e.of = function(t, n, i) {
      return new e(t, n, i);
    }, e;
  })(zr)
), ii = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      var a = r.call(this, t, n, i) || this;
      return R(t, "acroText", [[Di, "PDFAcroText"]]), a.acroField = t, a;
    }
    return e.prototype.getText = function() {
      var t = this.acroField.getValue();
      if (!t && this.isRichFormatted())
        throw new rc(this.getName());
      return t?.decodeText();
    }, e.prototype.setText = function(t) {
      K(t, "text", ["string"]);
      var n = this.getMaxLength();
      if (n !== void 0 && t && t.length > n)
        throw new ic(t.length, n, this.getName());
      this.markAsDirty(), this.disableRichFormatting(), t ? this.acroField.setValue(se.fromText(t)) : this.acroField.removeValue();
    }, e.prototype.getAlignment = function() {
      var t = this.acroField.getQuadding();
      return t === 0 ? _e.Left : t === 1 ? _e.Center : t === 2 ? _e.Right : _e.Left;
    }, e.prototype.setAlignment = function(t) {
      pr(t, "alignment", _e), this.markAsDirty(), this.acroField.setQuadding(t);
    }, e.prototype.getMaxLength = function() {
      return this.acroField.getMaxLength();
    }, e.prototype.setMaxLength = function(t) {
      if (Wt(t, "maxLength", 0, Number.MAX_SAFE_INTEGER), this.markAsDirty(), t === void 0)
        this.acroField.removeMaxLength();
      else {
        var n = this.getText();
        if (n && n.length > t)
          throw new ac(n.length, t, this.getName());
        this.acroField.setMaxLength(t);
      }
    }, e.prototype.removeMaxLength = function() {
      this.markAsDirty(), this.acroField.removeMaxLength();
    }, e.prototype.setImage = function(t) {
      for (var n = this.getAlignment(), i = n === _e.Center ? yr.Center : n === _e.Right ? yr.Right : yr.Left, a = this.acroField.getWidgets(), o = 0, s = a.length; o < s; o++) {
        var u = a[o], l = this.createImageAppearanceStream(u, t, i);
        this.updateWidgetAppearances(u, { normal: l });
      }
      this.markAsClean();
    }, e.prototype.setFontSize = function(t) {
      ki(t, "fontSize"), this.acroField.setFontSize(t), this.markAsDirty();
    }, e.prototype.isMultiline = function() {
      return this.acroField.hasFlag(He.Multiline);
    }, e.prototype.enableMultiline = function() {
      this.markAsDirty(), this.acroField.setFlagTo(He.Multiline, !0);
    }, e.prototype.disableMultiline = function() {
      this.markAsDirty(), this.acroField.setFlagTo(He.Multiline, !1);
    }, e.prototype.isPassword = function() {
      return this.acroField.hasFlag(He.Password);
    }, e.prototype.enablePassword = function() {
      this.acroField.setFlagTo(He.Password, !0);
    }, e.prototype.disablePassword = function() {
      this.acroField.setFlagTo(He.Password, !1);
    }, e.prototype.isFileSelector = function() {
      return this.acroField.hasFlag(He.FileSelect);
    }, e.prototype.enableFileSelection = function() {
      this.acroField.setFlagTo(He.FileSelect, !0);
    }, e.prototype.disableFileSelection = function() {
      this.acroField.setFlagTo(He.FileSelect, !1);
    }, e.prototype.isSpellChecked = function() {
      return !this.acroField.hasFlag(He.DoNotSpellCheck);
    }, e.prototype.enableSpellChecking = function() {
      this.acroField.setFlagTo(He.DoNotSpellCheck, !1);
    }, e.prototype.disableSpellChecking = function() {
      this.acroField.setFlagTo(He.DoNotSpellCheck, !0);
    }, e.prototype.isScrollable = function() {
      return !this.acroField.hasFlag(He.DoNotScroll);
    }, e.prototype.enableScrolling = function() {
      this.acroField.setFlagTo(He.DoNotScroll, !1);
    }, e.prototype.disableScrolling = function() {
      this.acroField.setFlagTo(He.DoNotScroll, !0);
    }, e.prototype.isCombed = function() {
      return this.acroField.hasFlag(He.Comb) && !this.isMultiline() && !this.isPassword() && !this.isFileSelector() && this.getMaxLength() !== void 0;
    }, e.prototype.enableCombing = function() {
      if (this.getMaxLength() === void 0) {
        var t = "PDFTextFields must have a max length in order to be combed";
        console.warn(t);
      }
      this.markAsDirty(), this.disableMultiline(), this.disablePassword(), this.disableFileSelection(), this.acroField.setFlagTo(He.Comb, !0);
    }, e.prototype.disableCombing = function() {
      this.markAsDirty(), this.acroField.setFlagTo(He.Comb, !1);
    }, e.prototype.isRichFormatted = function() {
      return this.acroField.hasFlag(He.RichText);
    }, e.prototype.enableRichFormatting = function() {
      this.acroField.setFlagTo(He.RichText, !0);
    }, e.prototype.disableRichFormatting = function() {
      this.acroField.setFlagTo(He.RichText, !1);
    }, e.prototype.addToPage = function(t, n) {
      var i, a, o, s, u, l, c;
      R(t, "page", [[Ot, "PDFPage"]]), an(n), n || (n = {}), "textColor" in n || (n.textColor = te(0, 0, 0)), "backgroundColor" in n || (n.backgroundColor = te(1, 1, 1)), "borderColor" in n || (n.borderColor = te(0, 0, 0)), "borderWidth" in n || (n.borderWidth = 1);
      var h = this.createWidget({
        x: (i = n.x) !== null && i !== void 0 ? i : 0,
        y: (a = n.y) !== null && a !== void 0 ? a : 0,
        width: (o = n.width) !== null && o !== void 0 ? o : 200,
        height: (s = n.height) !== null && s !== void 0 ? s : 50,
        textColor: n.textColor,
        backgroundColor: n.backgroundColor,
        borderColor: n.borderColor,
        borderWidth: (u = n.borderWidth) !== null && u !== void 0 ? u : 0,
        rotate: (l = n.rotate) !== null && l !== void 0 ? l : le(0),
        hidden: n.hidden,
        page: t.ref
      }), d = this.doc.context.register(h.dict);
      this.acroField.addWidget(d);
      var v = (c = n.font) !== null && c !== void 0 ? c : this.doc.getForm().getDefaultFont();
      this.updateWidgetAppearance(h, v), t.node.addAnnot(d);
    }, e.prototype.needsAppearancesUpdate = function() {
      var t;
      if (this.isDirty())
        return !0;
      for (var n = this.acroField.getWidgets(), i = 0, a = n.length; i < a; i++) {
        var o = n[i], s = ((t = o.getAppearances()) === null || t === void 0 ? void 0 : t.normal) instanceof wt;
        if (!s)
          return !0;
      }
      return !1;
    }, e.prototype.defaultUpdateAppearances = function(t) {
      R(t, "font", [[St, "PDFFont"]]), this.updateAppearances(t);
    }, e.prototype.updateAppearances = function(t, n) {
      R(t, "font", [[St, "PDFFont"]]), K(n, "provider", [Function]);
      for (var i = this.acroField.getWidgets(), a = 0, o = i.length; a < o; a++) {
        var s = i[a];
        this.updateWidgetAppearance(s, t, n);
      }
      this.markAsClean();
    }, e.prototype.updateWidgetAppearance = function(t, n, i) {
      var a = i ?? pc, o = nn(a(this, t, n));
      this.updateWidgetAppearanceWithFont(t, n, o);
    }, e.of = function(t, n, i) {
      return new e(t, n, i);
    }, e;
  })(zr)
), Mt;
(function(r) {
  r.Courier = "Courier", r.CourierBold = "Courier-Bold", r.CourierOblique = "Courier-Oblique", r.CourierBoldOblique = "Courier-BoldOblique", r.Helvetica = "Helvetica", r.HelveticaBold = "Helvetica-Bold", r.HelveticaOblique = "Helvetica-Oblique", r.HelveticaBoldOblique = "Helvetica-BoldOblique", r.TimesRoman = "Times-Roman", r.TimesRomanBold = "Times-Bold", r.TimesRomanItalic = "Times-Italic", r.TimesRomanBoldItalic = "Times-BoldItalic", r.Symbol = "Symbol", r.ZapfDingbats = "ZapfDingbats";
})(Mt || (Mt = {}));
var mc = (
  /** @class */
  (function() {
    function r(e, t) {
      var n = this;
      this.embedDefaultFont = function() {
        return n.doc.embedStandardFont(Mt.Helvetica);
      }, R(e, "acroForm", [[hi, "PDFAcroForm"]]), R(t, "doc", [[Ht, "PDFDocument"]]), this.acroForm = e, this.doc = t, this.dirtyFields = /* @__PURE__ */ new Set(), this.defaultFontCache = nr.populatedBy(this.embedDefaultFont);
    }
    return r.prototype.hasXFA = function() {
      return this.acroForm.dict.has(b.of("XFA"));
    }, r.prototype.deleteXFA = function() {
      this.acroForm.dict.delete(b.of("XFA"));
    }, r.prototype.getFields = function() {
      for (var e = this.acroForm.getAllFields(), t = [], n = 0, i = e.length; n < i; n++) {
        var a = e[n], o = a[0], s = a[1], u = bc(o, s, this.doc);
        u && t.push(u);
      }
      return t;
    }, r.prototype.getFieldMaybe = function(e) {
      R(e, "name", ["string"]);
      for (var t = this.getFields(), n = 0, i = t.length; n < i; n++) {
        var a = t[n];
        if (a.getName() === e)
          return a;
      }
    }, r.prototype.getField = function(e) {
      R(e, "name", ["string"]);
      var t = this.getFieldMaybe(e);
      if (t)
        return t;
      throw new ec(e);
    }, r.prototype.getButton = function(e) {
      R(e, "name", ["string"]);
      var t = this.getField(e);
      if (t instanceof ai)
        return t;
      throw new Ar(e, ai, t);
    }, r.prototype.getCheckBox = function(e) {
      R(e, "name", ["string"]);
      var t = this.getField(e);
      if (t instanceof yn)
        return t;
      throw new Ar(e, yn, t);
    }, r.prototype.getDropdown = function(e) {
      R(e, "name", ["string"]);
      var t = this.getField(e);
      if (t instanceof ri)
        return t;
      throw new Ar(e, ri, t);
    }, r.prototype.getOptionList = function(e) {
      R(e, "name", ["string"]);
      var t = this.getField(e);
      if (t instanceof ni)
        return t;
      throw new Ar(e, ni, t);
    }, r.prototype.getRadioGroup = function(e) {
      R(e, "name", ["string"]);
      var t = this.getField(e);
      if (t instanceof mn)
        return t;
      throw new Ar(e, mn, t);
    }, r.prototype.getSignature = function(e) {
      R(e, "name", ["string"]);
      var t = this.getField(e);
      if (t instanceof ya)
        return t;
      throw new Ar(e, ya, t);
    }, r.prototype.getTextField = function(e) {
      R(e, "name", ["string"]);
      var t = this.getField(e);
      if (t instanceof ii)
        return t;
      throw new Ar(e, ii, t);
    }, r.prototype.createButton = function(e) {
      R(e, "name", ["string"]);
      var t = Hr(e), n = this.findOrCreateNonTerminals(t.nonTerminal), i = Ai.create(this.doc.context);
      return i.setPartialName(t.terminal), Kr(n, [i, i.ref], t.terminal), ai.of(i, i.ref, this.doc);
    }, r.prototype.createCheckBox = function(e) {
      R(e, "name", ["string"]);
      var t = Hr(e), n = this.findOrCreateNonTerminals(t.nonTerminal), i = Ti.create(this.doc.context);
      return i.setPartialName(t.terminal), Kr(n, [i, i.ref], t.terminal), yn.of(i, i.ref, this.doc);
    }, r.prototype.createDropdown = function(e) {
      R(e, "name", ["string"]);
      var t = Hr(e), n = this.findOrCreateNonTerminals(t.nonTerminal), i = Pi.create(this.doc.context);
      return i.setPartialName(t.terminal), Kr(n, [i, i.ref], t.terminal), ri.of(i, i.ref, this.doc);
    }, r.prototype.createOptionList = function(e) {
      R(e, "name", ["string"]);
      var t = Hr(e), n = this.findOrCreateNonTerminals(t.nonTerminal), i = Oi.create(this.doc.context);
      return i.setPartialName(t.terminal), Kr(n, [i, i.ref], t.terminal), ni.of(i, i.ref, this.doc);
    }, r.prototype.createRadioGroup = function(e) {
      R(e, "name", ["string"]);
      var t = Hr(e), n = this.findOrCreateNonTerminals(t.nonTerminal), i = Ri.create(this.doc.context);
      return i.setPartialName(t.terminal), Kr(n, [i, i.ref], t.terminal), mn.of(i, i.ref, this.doc);
    }, r.prototype.createTextField = function(e) {
      R(e, "name", ["string"]);
      var t = Hr(e), n = this.findOrCreateNonTerminals(t.nonTerminal), i = Di.create(this.doc.context);
      return i.setPartialName(t.terminal), Kr(n, [i, i.ref], t.terminal), ii.of(i, i.ref, this.doc);
    }, r.prototype.flatten = function(e) {
      e === void 0 && (e = { updateFieldAppearances: !0 }), e.updateFieldAppearances && this.updateFieldAppearances();
      for (var t = this.getFields(), n = 0, i = t.length; n < i; n++) {
        for (var a = t[n], o = a.acroField.getWidgets(), s = 0, u = o.length; s < u; s++) {
          var l = o[s], c = this.findWidgetPage(l), h = this.findWidgetAppearanceRef(a, l), d = c.node.newXObject("FlatWidget", h), v = l.getRectangle(), y = ke([
            $e(),
            Nt(v.x, v.y)
          ], Cr(de(de({}, v), { rotation: 0 })), [
            Ua(d),
            et()
          ]).filter(Boolean);
          c.pushOperators.apply(c, y);
        }
        this.removeField(a);
      }
    }, r.prototype.removeField = function(e) {
      for (var t = e.acroField.getWidgets(), n = /* @__PURE__ */ new Set(), i = 0, a = t.length; i < a; i++) {
        var o = t[i], s = this.findWidgetAppearanceRef(e, o), u = this.findWidgetPage(o);
        n.add(u), u.node.removeAnnot(s);
      }
      n.forEach(function(v) {
        return v.node.removeAnnot(e.ref);
      }), this.acroForm.removeField(e.acroField);
      for (var l = e.acroField.normalizedEntries().Kids, c = l.size(), h = 0; h < c; h++) {
        var d = l.get(h);
        d instanceof Ne && this.doc.context.delete(d);
      }
      this.doc.context.delete(e.ref);
    }, r.prototype.updateFieldAppearances = function(e) {
      K(e, "font", [[St, "PDFFont"]]), e = e ?? this.getDefaultFont();
      for (var t = this.getFields(), n = 0, i = t.length; n < i; n++) {
        var a = t[n];
        a.needsAppearancesUpdate() && a.defaultUpdateAppearances(e);
      }
    }, r.prototype.markFieldAsDirty = function(e) {
      K(e, "fieldRef", [[Ne, "PDFRef"]]), this.dirtyFields.add(e);
    }, r.prototype.markFieldAsClean = function(e) {
      K(e, "fieldRef", [[Ne, "PDFRef"]]), this.dirtyFields.delete(e);
    }, r.prototype.fieldIsDirty = function(e) {
      return K(e, "fieldRef", [[Ne, "PDFRef"]]), this.dirtyFields.has(e);
    }, r.prototype.getDefaultFont = function() {
      return this.defaultFontCache.access();
    }, r.prototype.findWidgetPage = function(e) {
      var t = e.P(), n = this.doc.getPages().find(function(a) {
        return a.ref === t;
      });
      if (n === void 0) {
        var i = this.doc.context.getObjectRef(e.dict);
        if (i === void 0)
          throw new Error("Could not find PDFRef for PDFObject");
        if (n = this.doc.findPageForAnnotationRef(i), n === void 0)
          throw new Error("Could not find page for PDFRef " + i);
      }
      return n;
    }, r.prototype.findWidgetAppearanceRef = function(e, t) {
      var n, i = t.getNormalAppearance();
      if (i instanceof pe && (e instanceof yn || e instanceof mn)) {
        var a = e.acroField.getValue(), o = (n = i.get(a)) !== null && n !== void 0 ? n : i.get(b.of("Off"));
        o instanceof Ne && (i = o);
      }
      if (!(i instanceof Ne)) {
        var s = e.getName();
        throw new Error("Failed to extract appearance ref for: " + s);
      }
      return i;
    }, r.prototype.findOrCreateNonTerminals = function(e) {
      for (var t = [
        this.acroForm
      ], n = 0, i = e.length; n < i; n++) {
        var a = e[n];
        if (!a)
          throw new tc(a);
        var o = t[0], s = t[1], u = this.findNonTerminal(a, o);
        if (u)
          t = u;
        else {
          var l = ci.create(this.doc.context);
          l.setPartialName(a), l.setParent(s);
          var c = this.doc.context.register(l.dict);
          o.addField(c), t = [l, c];
        }
      }
      return t;
    }, r.prototype.findNonTerminal = function(e, t) {
      for (var n = t instanceof hi ? this.acroForm.getFields() : Ea(t.Kids()), i = 0, a = n.length; i < a; i++) {
        var o = n[i], s = o[0], u = o[1];
        if (s.getPartialName() === e) {
          if (s instanceof ci)
            return [s, u];
          throw new Gs(e);
        }
      }
    }, r.of = function(e, t) {
      return new r(e, t);
    }, r;
  })()
), bc = function(r, e, t) {
  if (r instanceof Ai)
    return ai.of(r, e, t);
  if (r instanceof Ti)
    return yn.of(r, e, t);
  if (r instanceof Pi)
    return ri.of(r, e, t);
  if (r instanceof Oi)
    return ni.of(r, e, t);
  if (r instanceof Di)
    return ii.of(r, e, t);
  if (r instanceof Ri)
    return mn.of(r, e, t);
  if (r instanceof Oa)
    return ya.of(r, e, t);
}, Hr = function(r) {
  if (r.length === 0)
    throw new Error("PDF field names must not be empty strings");
  for (var e = r.split("."), t = 0, n = e.length; t < n; t++)
    if (e[t] === "")
      throw new Error('Periods in PDF field names must be separated by at least one character: "' + r + '"');
  return e.length === 1 ? { nonTerminal: [], terminal: e[0] } : {
    nonTerminal: e.slice(0, e.length - 1),
    terminal: e[e.length - 1]
  };
}, Kr = function(r, e, t) {
  for (var n = r[0], i = r[1], a = e[0], o = e[1], s = n.normalizedEntries(), u = Ea("Kids" in s ? s.Kids : s.Fields), l = 0, c = u.length; l < c; l++)
    if (u[l][0].getPartialName() === t)
      throw new Gs(t);
  n.addField(o), a.setParent(i);
}, $r = {
  A4: [595.28, 841.89]
}, ma;
(function(r) {
  r[r.Fastest = 1 / 0] = "Fastest", r[r.Fast = 1500] = "Fast", r[r.Medium = 500] = "Medium", r[r.Slow = 100] = "Slow";
})(ma || (ma = {}));
var xc = (
  /** @class */
  (function() {
    function r(e, t, n) {
      this.alreadyEmbedded = !1, this.ref = e, this.doc = t, this.embedder = n;
    }
    return r.prototype.embed = function() {
      return ge(this, void 0, void 0, function() {
        var e, t, n, i, a;
        return ye(this, function(o) {
          switch (o.label) {
            case 0:
              return this.alreadyEmbedded ? [3, 2] : [4, this.embedder.embedIntoContext(this.doc.context, this.ref)];
            case 1:
              e = o.sent(), this.doc.catalog.has(b.of("Names")) || this.doc.catalog.set(b.of("Names"), this.doc.context.obj({})), t = this.doc.catalog.lookup(b.of("Names"), pe), t.has(b.of("EmbeddedFiles")) || t.set(b.of("EmbeddedFiles"), this.doc.context.obj({})), n = t.lookup(b.of("EmbeddedFiles"), pe), n.has(b.of("Names")) || n.set(b.of("Names"), this.doc.context.obj([])), i = n.lookup(b.of("Names"), Re), i.push(se.fromText(this.embedder.fileName)), i.push(e), this.doc.catalog.has(b.of("AF")) || this.doc.catalog.set(b.of("AF"), this.doc.context.obj([])), a = this.doc.catalog.lookup(b.of("AF"), Re), a.push(e), this.alreadyEmbedded = !0, o.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.of = function(e, t, n) {
      return new r(e, t, n);
    }, r;
  })()
), wc = (
  /** @class */
  (function() {
    function r(e, t, n) {
      this.alreadyEmbedded = !1, this.ref = e, this.doc = t, this.embedder = n;
    }
    return r.prototype.embed = function() {
      return ge(this, void 0, void 0, function() {
        var e, t, n, i, a, o, s;
        return ye(this, function(u) {
          switch (u.label) {
            case 0:
              return this.alreadyEmbedded ? [3, 2] : (e = this.doc, t = e.catalog, n = e.context, [4, this.embedder.embedIntoContext(this.doc.context, this.ref)]);
            case 1:
              i = u.sent(), t.has(b.of("Names")) || t.set(b.of("Names"), n.obj({})), a = t.lookup(b.of("Names"), pe), a.has(b.of("JavaScript")) || a.set(b.of("JavaScript"), n.obj({})), o = a.lookup(b.of("JavaScript"), pe), o.has(b.of("Names")) || o.set(b.of("Names"), n.obj([])), s = o.lookup(b.of("Names"), Re), s.push(se.fromText(this.embedder.scriptName)), s.push(i), this.alreadyEmbedded = !0, u.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.of = function(e, t, n) {
      return new r(e, t, n);
    }, r;
  })()
), Sc = (
  /** @class */
  (function() {
    function r(e, t) {
      this.script = e, this.scriptName = t;
    }
    return r.for = function(e, t) {
      return new r(e, t);
    }, r.prototype.embedIntoContext = function(e, t) {
      return ge(this, void 0, void 0, function() {
        var n;
        return ye(this, function(i) {
          return n = e.obj({
            Type: "Action",
            S: "JavaScript",
            JS: se.fromText(this.script)
          }), t ? (e.assign(t, n), [2, t]) : [2, e.register(n)];
        });
      });
    }, r;
  })()
), Ht = (
  /** @class */
  (function() {
    function r(e, t, n) {
      var i = this;
      if (this.defaultWordBreaks = [" "], this.computePages = function() {
        var a = [];
        return i.catalog.Pages().traverse(function(o, s) {
          if (o instanceof ir) {
            var u = i.pageMap.get(o);
            u || (u = Ot.of(o, s, i), i.pageMap.set(o, u)), a.push(u);
          }
        }), a;
      }, this.getOrCreateForm = function() {
        var a = i.catalog.getOrCreateAcroForm();
        return mc.of(a, i);
      }, R(e, "context", [[ca, "PDFContext"]]), R(t, "ignoreEncryption", ["boolean"]), this.context = e, this.catalog = e.lookup(e.trailerInfo.Root), this.isEncrypted = !!e.lookup(e.trailerInfo.Encrypt), this.pageCache = nr.populatedBy(this.computePages), this.pageMap = /* @__PURE__ */ new Map(), this.formCache = nr.populatedBy(this.getOrCreateForm), this.fonts = [], this.images = [], this.embeddedPages = [], this.embeddedFiles = [], this.javaScripts = [], !t && this.isEncrypted)
        throw new Qf();
      n && this.updateInfoDict();
    }
    return r.load = function(e, t) {
      return t === void 0 && (t = {}), ge(this, void 0, void 0, function() {
        var n, i, a, o, s, u, l, c, h, d, v, y;
        return ye(this, function(w) {
          switch (w.label) {
            case 0:
              return n = t.ignoreEncryption, i = n === void 0 ? !1 : n, a = t.parseSpeed, o = a === void 0 ? ma.Slow : a, s = t.throwOnInvalidObject, u = s === void 0 ? !1 : s, l = t.updateMetadata, c = l === void 0 ? !0 : l, h = t.capNumbers, d = h === void 0 ? !1 : h, R(e, "pdf", ["string", Uint8Array, ArrayBuffer]), R(i, "ignoreEncryption", ["boolean"]), R(o, "parseSpeed", ["number"]), R(u, "throwOnInvalidObject", ["boolean"]), v = on(e), [4, Cf.forBytesWithOptions(v, o, u, d).parseDocument()];
            case 1:
              return y = w.sent(), [2, new r(y, i, c)];
          }
        });
      });
    }, r.create = function(e) {
      return e === void 0 && (e = {}), ge(this, void 0, void 0, function() {
        var t, n, i, a, o, s;
        return ye(this, function(u) {
          return t = e.updateMetadata, n = t === void 0 ? !0 : t, i = ca.create(), a = Ds.withContext(i), o = i.register(a), s = Ps.withContextAndPages(i, o), i.trailerInfo.Root = i.register(s), [2, new r(i, !1, n)];
        });
      });
    }, r.prototype.registerFontkit = function(e) {
      this.fontkit = e;
    }, r.prototype.getForm = function() {
      var e = this.formCache.access();
      return e.hasXFA() && (console.warn("Removing XFA form data as pdf-lib does not support reading or writing XFA"), e.deleteXFA()), e;
    }, r.prototype.getTitle = function() {
      var e = this.getInfoDict().lookup(b.Title);
      if (e)
        return hr(e), e.decodeText();
    }, r.prototype.getAuthor = function() {
      var e = this.getInfoDict().lookup(b.Author);
      if (e)
        return hr(e), e.decodeText();
    }, r.prototype.getSubject = function() {
      var e = this.getInfoDict().lookup(b.Subject);
      if (e)
        return hr(e), e.decodeText();
    }, r.prototype.getKeywords = function() {
      var e = this.getInfoDict().lookup(b.Keywords);
      if (e)
        return hr(e), e.decodeText();
    }, r.prototype.getCreator = function() {
      var e = this.getInfoDict().lookup(b.Creator);
      if (e)
        return hr(e), e.decodeText();
    }, r.prototype.getProducer = function() {
      var e = this.getInfoDict().lookup(b.Producer);
      if (e)
        return hr(e), e.decodeText();
    }, r.prototype.getCreationDate = function() {
      var e = this.getInfoDict().lookup(b.CreationDate);
      if (e)
        return hr(e), e.decodeDate();
    }, r.prototype.getModificationDate = function() {
      var e = this.getInfoDict().lookup(b.ModDate);
      if (e)
        return hr(e), e.decodeDate();
    }, r.prototype.setTitle = function(e, t) {
      R(e, "title", ["string"]);
      var n = b.of("Title");
      if (this.getInfoDict().set(n, se.fromText(e)), t?.showInWindowTitleBar) {
        var i = this.catalog.getOrCreateViewerPreferences();
        i.setDisplayDocTitle(!0);
      }
    }, r.prototype.setAuthor = function(e) {
      R(e, "author", ["string"]);
      var t = b.of("Author");
      this.getInfoDict().set(t, se.fromText(e));
    }, r.prototype.setSubject = function(e) {
      R(e, "author", ["string"]);
      var t = b.of("Subject");
      this.getInfoDict().set(t, se.fromText(e));
    }, r.prototype.setKeywords = function(e) {
      R(e, "keywords", [Array]);
      var t = b.of("Keywords");
      this.getInfoDict().set(t, se.fromText(e.join(" ")));
    }, r.prototype.setCreator = function(e) {
      R(e, "creator", ["string"]);
      var t = b.of("Creator");
      this.getInfoDict().set(t, se.fromText(e));
    }, r.prototype.setProducer = function(e) {
      R(e, "creator", ["string"]);
      var t = b.of("Producer");
      this.getInfoDict().set(t, se.fromText(e));
    }, r.prototype.setLanguage = function(e) {
      R(e, "language", ["string"]);
      var t = b.of("Lang");
      this.catalog.set(t, Ee.of(e));
    }, r.prototype.setCreationDate = function(e) {
      R(e, "creationDate", [[Date, "Date"]]);
      var t = b.of("CreationDate");
      this.getInfoDict().set(t, Ee.fromDate(e));
    }, r.prototype.setModificationDate = function(e) {
      R(e, "modificationDate", [[Date, "Date"]]);
      var t = b.of("ModDate");
      this.getInfoDict().set(t, Ee.fromDate(e));
    }, r.prototype.getPageCount = function() {
      return this.pageCount === void 0 && (this.pageCount = this.getPages().length), this.pageCount;
    }, r.prototype.getPages = function() {
      return this.pageCache.access();
    }, r.prototype.getPage = function(e) {
      var t = this.getPages();
      return bt(e, "index", 0, t.length - 1), t[e];
    }, r.prototype.getPageIndices = function() {
      return ku(0, this.getPageCount());
    }, r.prototype.removePage = function(e) {
      var t = this.getPageCount();
      if (this.pageCount === 0)
        throw new $f();
      bt(e, "index", 0, t - 1), this.catalog.removeLeafNode(e), this.pageCount = t - 1;
    }, r.prototype.addPage = function(e) {
      return R(e, "page", ["undefined", [Ot, "PDFPage"], Array]), this.insertPage(this.getPageCount(), e);
    }, r.prototype.insertPage = function(e, t) {
      var n = this.getPageCount();
      if (bt(e, "index", 0, n), R(t, "page", ["undefined", [Ot, "PDFPage"], Array]), !t || Array.isArray(t)) {
        var i = Array.isArray(t) ? t : $r.A4;
        t = Ot.create(this), t.setSize.apply(t, i);
      } else if (t.doc !== this)
        throw new _f();
      var a = this.catalog.insertLeafNode(t.ref, e);
      return t.node.setParent(a), this.pageMap.set(t.node, t), this.pageCache.invalidate(), this.pageCount = n + 1, t;
    }, r.prototype.copyPages = function(e, t) {
      return ge(this, void 0, void 0, function() {
        var n, i, a, o, s, u, l, c;
        return ye(this, function(h) {
          switch (h.label) {
            case 0:
              return R(e, "srcDoc", [[r, "PDFDocument"]]), R(t, "indices", [Array]), [4, e.flush()];
            case 1:
              for (h.sent(), n = Fo.for(e.context, this.context), i = e.getPages(), a = new Array(t.length), o = 0, s = t.length; o < s; o++)
                u = i[t[o]], l = n.copy(u.node), c = this.context.register(l), a[o] = Ot.of(l, c, this);
              return [2, a];
          }
        });
      });
    }, r.prototype.copy = function() {
      return ge(this, void 0, void 0, function() {
        var e, t, n, i;
        return ye(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, r.create()];
            case 1:
              return e = a.sent(), [4, e.copyPages(this, this.getPageIndices())];
            case 2:
              for (t = a.sent(), n = 0, i = t.length; n < i; n++)
                e.addPage(t[n]);
              return this.getAuthor() !== void 0 && e.setAuthor(this.getAuthor()), this.getCreationDate() !== void 0 && e.setCreationDate(this.getCreationDate()), this.getCreator() !== void 0 && e.setCreator(this.getCreator()), this.getModificationDate() !== void 0 && e.setModificationDate(this.getModificationDate()), this.getProducer() !== void 0 && e.setProducer(this.getProducer()), this.getSubject() !== void 0 && e.setSubject(this.getSubject()), this.getTitle() !== void 0 && e.setTitle(this.getTitle()), e.defaultWordBreaks = this.defaultWordBreaks, [2, e];
          }
        });
      });
    }, r.prototype.addJavaScript = function(e, t) {
      R(e, "name", ["string"]), R(t, "script", ["string"]);
      var n = Sc.for(t, e), i = this.context.nextRef(), a = wc.of(i, this, n);
      this.javaScripts.push(a);
    }, r.prototype.attach = function(e, t, n) {
      return n === void 0 && (n = {}), ge(this, void 0, void 0, function() {
        var i, a, o, s;
        return ye(this, function(u) {
          return R(e, "attachment", ["string", Uint8Array, ArrayBuffer]), R(t, "name", ["string"]), K(n.mimeType, "mimeType", ["string"]), K(n.description, "description", ["string"]), K(n.creationDate, "options.creationDate", [Date]), K(n.modificationDate, "options.modificationDate", [
            Date
          ]), At(n.afRelationship, "options.afRelationship", ha), i = on(e), a = Ql.for(i, t, n), o = this.context.nextRef(), s = xc.of(o, this, a), this.embeddedFiles.push(s), [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.embedFont = function(e, t) {
      return t === void 0 && (t = {}), ge(this, void 0, void 0, function() {
        var n, i, a, o, s, u, l, c, h, d;
        return ye(this, function(v) {
          switch (v.label) {
            case 0:
              return n = t.subset, i = n === void 0 ? !1 : n, a = t.customName, o = t.features, R(e, "font", ["string", Uint8Array, ArrayBuffer]), R(i, "subset", ["boolean"]), vo(e) ? (s = li.for(e, a), [3, 7]) : [3, 1];
            case 1:
              return Tu(e) ? (u = on(e), l = this.assertFontkit(), i ? [4, Yl.for(l, u, a, o)] : [3, 3]) : [3, 6];
            case 2:
              return c = v.sent(), [3, 5];
            case 3:
              return [4, Aa.for(l, u, a, o)];
            case 4:
              c = v.sent(), v.label = 5;
            case 5:
              return s = c, [3, 7];
            case 6:
              throw new TypeError("`font` must be one of `StandardFonts | string | Uint8Array | ArrayBuffer`");
            case 7:
              return h = this.context.nextRef(), d = St.of(h, this, s), this.fonts.push(d), [2, d];
          }
        });
      });
    }, r.prototype.embedStandardFont = function(e, t) {
      if (R(e, "font", ["string"]), !vo(e))
        throw new TypeError("`font` must be one of type `StandardFonts`");
      var n = li.for(e, t), i = this.context.nextRef(), a = St.of(i, this, n);
      return this.fonts.push(a), a;
    }, r.prototype.embedJpg = function(e) {
      return ge(this, void 0, void 0, function() {
        var t, n, i, a;
        return ye(this, function(o) {
          switch (o.label) {
            case 0:
              return R(e, "jpg", ["string", Uint8Array, ArrayBuffer]), t = on(e), [4, ms.for(t)];
            case 1:
              return n = o.sent(), i = this.context.nextRef(), a = ga.of(i, this, n), this.images.push(a), [2, a];
          }
        });
      });
    }, r.prototype.embedPng = function(e) {
      return ge(this, void 0, void 0, function() {
        var t, n, i, a;
        return ye(this, function(o) {
          switch (o.label) {
            case 0:
              return R(e, "png", ["string", Uint8Array, ArrayBuffer]), t = on(e), [4, bs.for(t)];
            case 1:
              return n = o.sent(), i = this.context.nextRef(), a = ga.of(i, this, n), this.images.push(a), [2, a];
          }
        });
      });
    }, r.prototype.embedPdf = function(e, t) {
      return t === void 0 && (t = [0]), ge(this, void 0, void 0, function() {
        var n, i, a;
        return ye(this, function(o) {
          switch (o.label) {
            case 0:
              return R(e, "pdf", [
                "string",
                Uint8Array,
                ArrayBuffer,
                [r, "PDFDocument"]
              ]), R(t, "indices", [Array]), e instanceof r ? (i = e, [3, 3]) : [3, 1];
            case 1:
              return [4, r.load(e)];
            case 2:
              i = o.sent(), o.label = 3;
            case 3:
              return n = i, a = Cu(n.getPages(), t), [2, this.embedPages(a)];
          }
        });
      });
    }, r.prototype.embedPage = function(e, t, n) {
      return ge(this, void 0, void 0, function() {
        var i;
        return ye(this, function(a) {
          switch (a.label) {
            case 0:
              return R(e, "page", [[Ot, "PDFPage"]]), [4, this.embedPages([e], [t], [n])];
            case 1:
              return i = a.sent()[0], [2, i];
          }
        });
      });
    }, r.prototype.embedPages = function(e, t, n) {
      return t === void 0 && (t = []), n === void 0 && (n = []), ge(this, void 0, void 0, function() {
        var l, c, i, a, o, s, u, l, c, h, d, v, y, w, F;
        return ye(this, function(S) {
          switch (S.label) {
            case 0:
              if (e.length === 0)
                return [2, []];
              for (l = 0, c = e.length - 1; l < c; l++)
                if (i = e[l], a = e[l + 1], i.node.context !== a.node.context)
                  throw new Sl();
              o = e[0].node.context, s = o === this.context ? function(A) {
                return A;
              } : Fo.for(o, this.context).copy, u = new Array(e.length), l = 0, c = e.length, S.label = 1;
            case 1:
              return l < c ? (h = s(e[l].node), d = t[l], v = n[l], [4, Ss.for(h, d, v)]) : [3, 4];
            case 2:
              y = S.sent(), w = this.context.nextRef(), u[l] = Js.of(w, this, y), S.label = 3;
            case 3:
              return l++, [3, 1];
            case 4:
              return (F = this.embeddedPages).push.apply(F, u), [2, u];
          }
        });
      });
    }, r.prototype.flush = function() {
      return ge(this, void 0, void 0, function() {
        return ye(this, function(e) {
          switch (e.label) {
            case 0:
              return [4, this.embedAll(this.fonts)];
            case 1:
              return e.sent(), [4, this.embedAll(this.images)];
            case 2:
              return e.sent(), [4, this.embedAll(this.embeddedPages)];
            case 3:
              return e.sent(), [4, this.embedAll(this.embeddedFiles)];
            case 4:
              return e.sent(), [4, this.embedAll(this.javaScripts)];
            case 5:
              return e.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.save = function(e) {
      return e === void 0 && (e = {}), ge(this, void 0, void 0, function() {
        var t, n, i, a, o, s, u, l, c, h;
        return ye(this, function(d) {
          switch (d.label) {
            case 0:
              return t = e.useObjectStreams, n = t === void 0 ? !0 : t, i = e.addDefaultPage, a = i === void 0 ? !0 : i, o = e.objectsPerTick, s = o === void 0 ? 50 : o, u = e.updateFieldAppearances, l = u === void 0 ? !0 : u, R(n, "useObjectStreams", ["boolean"]), R(a, "addDefaultPage", ["boolean"]), R(s, "objectsPerTick", ["number"]), R(l, "updateFieldAppearances", ["boolean"]), a && this.getPageCount() === 0 && this.addPage(), l && (c = this.formCache.getValue(), c && c.updateFieldAppearances()), [4, this.flush()];
            case 1:
              return d.sent(), h = n ? ql : gs, [2, h.forContext(this.context, s).serializeToBuffer()];
          }
        });
      });
    }, r.prototype.saveAsBase64 = function(e) {
      return e === void 0 && (e = {}), ge(this, void 0, void 0, function() {
        var t, n, i, a, o;
        return ye(this, function(s) {
          switch (s.label) {
            case 0:
              return t = e.dataUri, n = t === void 0 ? !1 : t, i = su(e, ["dataUri"]), R(n, "dataUri", ["boolean"]), [4, this.save(i)];
            case 1:
              return a = s.sent(), o = uu(a), [2, n ? "data:application/pdf;base64," + o : o];
          }
        });
      });
    }, r.prototype.findPageForAnnotationRef = function(e) {
      for (var t = this.getPages(), n = 0, i = t.length; n < i; n++) {
        var a = t[n], o = a.node.Annots();
        if (o?.indexOf(e) !== void 0)
          return a;
      }
    }, r.prototype.embedAll = function(e) {
      return ge(this, void 0, void 0, function() {
        var t, n;
        return ye(this, function(i) {
          switch (i.label) {
            case 0:
              t = 0, n = e.length, i.label = 1;
            case 1:
              return t < n ? [4, e[t].embed()] : [3, 4];
            case 2:
              i.sent(), i.label = 3;
            case 3:
              return t++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.updateInfoDict = function() {
      var e = "pdf-lib (https://github.com/Hopding/pdf-lib)", t = /* @__PURE__ */ new Date(), n = this.getInfoDict();
      this.setProducer(e), this.setModificationDate(t), n.get(b.of("Creator")) || this.setCreator(e), n.get(b.of("CreationDate")) || this.setCreationDate(t);
    }, r.prototype.getInfoDict = function() {
      var e = this.context.lookup(this.context.trailerInfo.Info);
      if (e instanceof pe)
        return e;
      var t = this.context.obj({});
      return this.context.trailerInfo.Info = this.context.register(t), t;
    }, r.prototype.assertFontkit = function() {
      if (!this.fontkit)
        throw new Jf();
      return this.fontkit;
    }, r;
  })()
);
function hr(r) {
  if (!(r instanceof se) && !(r instanceof Ee))
    throw new si([se, Ee], r);
}
var tr;
(function(r) {
  r.Normal = "Normal", r.Multiply = "Multiply", r.Screen = "Screen", r.Overlay = "Overlay", r.Darken = "Darken", r.Lighten = "Lighten", r.ColorDodge = "ColorDodge", r.ColorBurn = "ColorBurn", r.HardLight = "HardLight", r.SoftLight = "SoftLight", r.Difference = "Difference", r.Exclusion = "Exclusion";
})(tr || (tr = {}));
var Ot = (
  /** @class */
  (function() {
    function r(e, t, n) {
      this.fontSize = 24, this.fontColor = te(0, 0, 0), this.lineHeight = 24, this.x = 0, this.y = 0, R(e, "leafNode", [[ir, "PDFPageLeaf"]]), R(t, "ref", [[Ne, "PDFRef"]]), R(n, "doc", [[Ht, "PDFDocument"]]), this.node = e, this.ref = t, this.doc = n;
    }
    return r.prototype.setRotation = function(e) {
      var t = Ns(e);
      cs(t, "degreesAngle", 90), this.node.set(b.of("Rotate"), this.doc.context.obj(t));
    }, r.prototype.getRotation = function() {
      var e = this.node.Rotate();
      return le(e ? e.asNumber() : 0);
    }, r.prototype.setSize = function(e, t) {
      R(e, "width", ["number"]), R(t, "height", ["number"]);
      var n = this.getMediaBox();
      this.setMediaBox(n.x, n.y, e, t);
      var i = this.getCropBox(), a = this.getBleedBox(), o = this.getTrimBox(), s = this.getArtBox(), u = this.node.CropBox(), l = this.node.BleedBox(), c = this.node.TrimBox(), h = this.node.ArtBox();
      u && Kn(i, n) && this.setCropBox(n.x, n.y, e, t), l && Kn(a, n) && this.setBleedBox(n.x, n.y, e, t), c && Kn(o, n) && this.setTrimBox(n.x, n.y, e, t), h && Kn(s, n) && this.setArtBox(n.x, n.y, e, t);
    }, r.prototype.setWidth = function(e) {
      R(e, "width", ["number"]), this.setSize(e, this.getSize().height);
    }, r.prototype.setHeight = function(e) {
      R(e, "height", ["number"]), this.setSize(this.getSize().width, e);
    }, r.prototype.setMediaBox = function(e, t, n, i) {
      R(e, "x", ["number"]), R(t, "y", ["number"]), R(n, "width", ["number"]), R(i, "height", ["number"]);
      var a = this.doc.context.obj([e, t, e + n, t + i]);
      this.node.set(b.MediaBox, a);
    }, r.prototype.setCropBox = function(e, t, n, i) {
      R(e, "x", ["number"]), R(t, "y", ["number"]), R(n, "width", ["number"]), R(i, "height", ["number"]);
      var a = this.doc.context.obj([e, t, e + n, t + i]);
      this.node.set(b.CropBox, a);
    }, r.prototype.setBleedBox = function(e, t, n, i) {
      R(e, "x", ["number"]), R(t, "y", ["number"]), R(n, "width", ["number"]), R(i, "height", ["number"]);
      var a = this.doc.context.obj([e, t, e + n, t + i]);
      this.node.set(b.BleedBox, a);
    }, r.prototype.setTrimBox = function(e, t, n, i) {
      R(e, "x", ["number"]), R(t, "y", ["number"]), R(n, "width", ["number"]), R(i, "height", ["number"]);
      var a = this.doc.context.obj([e, t, e + n, t + i]);
      this.node.set(b.TrimBox, a);
    }, r.prototype.setArtBox = function(e, t, n, i) {
      R(e, "x", ["number"]), R(t, "y", ["number"]), R(n, "width", ["number"]), R(i, "height", ["number"]);
      var a = this.doc.context.obj([e, t, e + n, t + i]);
      this.node.set(b.ArtBox, a);
    }, r.prototype.getSize = function() {
      var e = this.getMediaBox(), t = e.width, n = e.height;
      return { width: t, height: n };
    }, r.prototype.getWidth = function() {
      return this.getSize().width;
    }, r.prototype.getHeight = function() {
      return this.getSize().height;
    }, r.prototype.getMediaBox = function() {
      var e = this.node.MediaBox();
      return e.asRectangle();
    }, r.prototype.getCropBox = function() {
      var e, t = this.node.CropBox();
      return (e = t?.asRectangle()) !== null && e !== void 0 ? e : this.getMediaBox();
    }, r.prototype.getBleedBox = function() {
      var e, t = this.node.BleedBox();
      return (e = t?.asRectangle()) !== null && e !== void 0 ? e : this.getCropBox();
    }, r.prototype.getTrimBox = function() {
      var e, t = this.node.TrimBox();
      return (e = t?.asRectangle()) !== null && e !== void 0 ? e : this.getCropBox();
    }, r.prototype.getArtBox = function() {
      var e, t = this.node.ArtBox();
      return (e = t?.asRectangle()) !== null && e !== void 0 ? e : this.getCropBox();
    }, r.prototype.translateContent = function(e, t) {
      R(e, "x", ["number"]), R(t, "y", ["number"]), this.node.normalize(), this.getContentStream();
      var n = this.createContentStream($e(), Nt(e, t)), i = this.doc.context.register(n), a = this.createContentStream(et()), o = this.doc.context.register(a);
      this.node.wrapContentStreams(i, o);
    }, r.prototype.scale = function(e, t) {
      R(e, "x", ["number"]), R(t, "y", ["number"]), this.setSize(this.getWidth() * e, this.getHeight() * t), this.scaleContent(e, t), this.scaleAnnotations(e, t);
    }, r.prototype.scaleContent = function(e, t) {
      R(e, "x", ["number"]), R(t, "y", ["number"]), this.node.normalize(), this.getContentStream();
      var n = this.createContentStream($e(), On(e, t)), i = this.doc.context.register(n), a = this.createContentStream(et()), o = this.doc.context.register(a);
      this.node.wrapContentStreams(i, o);
    }, r.prototype.scaleAnnotations = function(e, t) {
      R(e, "x", ["number"]), R(t, "y", ["number"]);
      var n = this.node.Annots();
      if (n)
        for (var i = 0; i < n.size(); i++) {
          var a = n.lookup(i);
          a instanceof pe && this.scaleAnnot(a, e, t);
        }
    }, r.prototype.resetPosition = function() {
      this.getContentStream(!1), this.x = 0, this.y = 0;
    }, r.prototype.setFont = function(e) {
      R(e, "font", [[St, "PDFFont"]]), this.font = e, this.fontKey = this.node.newFontDictionary(this.font.name, this.font.ref);
    }, r.prototype.setFontSize = function(e) {
      R(e, "fontSize", ["number"]), this.fontSize = e;
    }, r.prototype.setFontColor = function(e) {
      R(e, "fontColor", [[Object, "Color"]]), this.fontColor = e;
    }, r.prototype.setLineHeight = function(e) {
      R(e, "lineHeight", ["number"]), this.lineHeight = e;
    }, r.prototype.getPosition = function() {
      return { x: this.x, y: this.y };
    }, r.prototype.getX = function() {
      return this.x;
    }, r.prototype.getY = function() {
      return this.y;
    }, r.prototype.moveTo = function(e, t) {
      R(e, "x", ["number"]), R(t, "y", ["number"]), this.x = e, this.y = t;
    }, r.prototype.moveDown = function(e) {
      R(e, "yDecrease", ["number"]), this.y -= e;
    }, r.prototype.moveUp = function(e) {
      R(e, "yIncrease", ["number"]), this.y += e;
    }, r.prototype.moveLeft = function(e) {
      R(e, "xDecrease", ["number"]), this.x -= e;
    }, r.prototype.moveRight = function(e) {
      R(e, "xIncrease", ["number"]), this.x += e;
    }, r.prototype.pushOperators = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      fs(e, "operator", [[Fe, "PDFOperator"]]);
      var n = this.getContentStream();
      n.push.apply(n, e);
    }, r.prototype.drawText = function(e, t) {
      var n, i, a, o, s, u, l;
      t === void 0 && (t = {}), R(e, "text", ["string"]), K(t.color, "options.color", [[Object, "Color"]]), Wt(t.opacity, "opacity.opacity", 0, 1), K(t.font, "options.font", [[St, "PDFFont"]]), K(t.size, "options.size", ["number"]), K(t.rotate, "options.rotate", [[Object, "Rotation"]]), K(t.xSkew, "options.xSkew", [[Object, "Rotation"]]), K(t.ySkew, "options.ySkew", [[Object, "Rotation"]]), K(t.x, "options.x", ["number"]), K(t.y, "options.y", ["number"]), K(t.lineHeight, "options.lineHeight", ["number"]), K(t.maxWidth, "options.maxWidth", ["number"]), K(t.wordBreaks, "options.wordBreaks", [Array]), At(t.blendMode, "options.blendMode", tr);
      for (var c = this.setOrEmbedFont(t.font), h = c.oldFont, d = c.newFont, v = c.newFontKey, y = t.size || this.fontSize, w = t.wordBreaks || this.doc.defaultWordBreaks, F = function(P) {
        return d.widthOfTextAtSize(P, y);
      }, S = t.maxWidth === void 0 ? Xo(Nn(e)) : yu(e, w, t.maxWidth, F), A = new Array(S.length), C = 0, E = S.length; C < E; C++)
        A[C] = d.encodeText(S[C]);
      var O = this.maybeEmbedGraphicsState({
        opacity: t.opacity,
        blendMode: t.blendMode
      }), D = this.getContentStream();
      D.push.apply(D, Lf(A, {
        color: (n = t.color) !== null && n !== void 0 ? n : this.fontColor,
        font: v,
        size: y,
        rotate: (i = t.rotate) !== null && i !== void 0 ? i : le(0),
        xSkew: (a = t.xSkew) !== null && a !== void 0 ? a : le(0),
        ySkew: (o = t.ySkew) !== null && o !== void 0 ? o : le(0),
        x: (s = t.x) !== null && s !== void 0 ? s : this.x,
        y: (u = t.y) !== null && u !== void 0 ? u : this.y,
        lineHeight: (l = t.lineHeight) !== null && l !== void 0 ? l : this.lineHeight,
        graphicsState: O
      })), t.font && (h ? this.setFont(h) : this.resetFont());
    }, r.prototype.drawImage = function(e, t) {
      var n, i, a, o, s, u, l;
      t === void 0 && (t = {}), R(e, "image", [[ga, "PDFImage"]]), K(t.x, "options.x", ["number"]), K(t.y, "options.y", ["number"]), K(t.width, "options.width", ["number"]), K(t.height, "options.height", ["number"]), K(t.rotate, "options.rotate", [[Object, "Rotation"]]), K(t.xSkew, "options.xSkew", [[Object, "Rotation"]]), K(t.ySkew, "options.ySkew", [[Object, "Rotation"]]), Wt(t.opacity, "opacity.opacity", 0, 1), At(t.blendMode, "options.blendMode", tr);
      var c = this.node.newXObject("Image", e.ref), h = this.maybeEmbedGraphicsState({
        opacity: t.opacity,
        blendMode: t.blendMode
      }), d = this.getContentStream();
      d.push.apply(d, Hs(c, {
        x: (n = t.x) !== null && n !== void 0 ? n : this.x,
        y: (i = t.y) !== null && i !== void 0 ? i : this.y,
        width: (a = t.width) !== null && a !== void 0 ? a : e.size().width,
        height: (o = t.height) !== null && o !== void 0 ? o : e.size().height,
        rotate: (s = t.rotate) !== null && s !== void 0 ? s : le(0),
        xSkew: (u = t.xSkew) !== null && u !== void 0 ? u : le(0),
        ySkew: (l = t.ySkew) !== null && l !== void 0 ? l : le(0),
        graphicsState: h
      }));
    }, r.prototype.drawPage = function(e, t) {
      var n, i, a, o, s;
      t === void 0 && (t = {}), R(e, "embeddedPage", [
        [Js, "PDFEmbeddedPage"]
      ]), K(t.x, "options.x", ["number"]), K(t.y, "options.y", ["number"]), K(t.xScale, "options.xScale", ["number"]), K(t.yScale, "options.yScale", ["number"]), K(t.width, "options.width", ["number"]), K(t.height, "options.height", ["number"]), K(t.rotate, "options.rotate", [[Object, "Rotation"]]), K(t.xSkew, "options.xSkew", [[Object, "Rotation"]]), K(t.ySkew, "options.ySkew", [[Object, "Rotation"]]), Wt(t.opacity, "opacity.opacity", 0, 1), At(t.blendMode, "options.blendMode", tr);
      var u = this.node.newXObject("EmbeddedPdfPage", e.ref), l = this.maybeEmbedGraphicsState({
        opacity: t.opacity,
        blendMode: t.blendMode
      }), c = t.width !== void 0 ? t.width / e.width : t.xScale !== void 0 ? t.xScale : 1, h = t.height !== void 0 ? t.height / e.height : t.yScale !== void 0 ? t.yScale : 1, d = this.getContentStream();
      d.push.apply(d, qf(u, {
        x: (n = t.x) !== null && n !== void 0 ? n : this.x,
        y: (i = t.y) !== null && i !== void 0 ? i : this.y,
        xScale: c,
        yScale: h,
        rotate: (a = t.rotate) !== null && a !== void 0 ? a : le(0),
        xSkew: (o = t.xSkew) !== null && o !== void 0 ? o : le(0),
        ySkew: (s = t.ySkew) !== null && s !== void 0 ? s : le(0),
        graphicsState: l
      }));
    }, r.prototype.drawSvgPath = function(e, t) {
      var n, i, a, o, s, u, l, c, h;
      t === void 0 && (t = {}), R(e, "path", ["string"]), K(t.x, "options.x", ["number"]), K(t.y, "options.y", ["number"]), K(t.scale, "options.scale", ["number"]), K(t.rotate, "options.rotate", [[Object, "Rotation"]]), K(t.borderWidth, "options.borderWidth", ["number"]), K(t.color, "options.color", [[Object, "Color"]]), Wt(t.opacity, "opacity.opacity", 0, 1), K(t.borderColor, "options.borderColor", [
        [Object, "Color"]
      ]), K(t.borderDashArray, "options.borderDashArray", [
        Array
      ]), K(t.borderDashPhase, "options.borderDashPhase", [
        "number"
      ]), At(t.borderLineCap, "options.borderLineCap", Zr), Wt(t.borderOpacity, "options.borderOpacity", 0, 1), At(t.blendMode, "options.blendMode", tr);
      var d = this.maybeEmbedGraphicsState({
        opacity: t.opacity,
        borderOpacity: t.borderOpacity,
        blendMode: t.blendMode
      });
      !("color" in t) && !("borderColor" in t) && (t.borderColor = te(0, 0, 0));
      var v = this.getContentStream();
      v.push.apply(v, Xf(e, {
        x: (n = t.x) !== null && n !== void 0 ? n : this.x,
        y: (i = t.y) !== null && i !== void 0 ? i : this.y,
        scale: t.scale,
        rotate: (a = t.rotate) !== null && a !== void 0 ? a : le(0),
        color: (o = t.color) !== null && o !== void 0 ? o : void 0,
        borderColor: (s = t.borderColor) !== null && s !== void 0 ? s : void 0,
        borderWidth: (u = t.borderWidth) !== null && u !== void 0 ? u : 0,
        borderDashArray: (l = t.borderDashArray) !== null && l !== void 0 ? l : void 0,
        borderDashPhase: (c = t.borderDashPhase) !== null && c !== void 0 ? c : void 0,
        borderLineCap: (h = t.borderLineCap) !== null && h !== void 0 ? h : void 0,
        graphicsState: d
      }));
    }, r.prototype.drawLine = function(e) {
      var t, n, i, a, o;
      R(e.start, "options.start", [
        [Object, "{ x: number, y: number }"]
      ]), R(e.end, "options.end", [
        [Object, "{ x: number, y: number }"]
      ]), R(e.start.x, "options.start.x", ["number"]), R(e.start.y, "options.start.y", ["number"]), R(e.end.x, "options.end.x", ["number"]), R(e.end.y, "options.end.y", ["number"]), K(e.thickness, "options.thickness", ["number"]), K(e.color, "options.color", [[Object, "Color"]]), K(e.dashArray, "options.dashArray", [Array]), K(e.dashPhase, "options.dashPhase", ["number"]), At(e.lineCap, "options.lineCap", Zr), Wt(e.opacity, "opacity.opacity", 0, 1), At(e.blendMode, "options.blendMode", tr);
      var s = this.maybeEmbedGraphicsState({
        borderOpacity: e.opacity,
        blendMode: e.blendMode
      });
      "color" in e || (e.color = te(0, 0, 0));
      var u = this.getContentStream();
      u.push.apply(u, Hf({
        start: e.start,
        end: e.end,
        thickness: (t = e.thickness) !== null && t !== void 0 ? t : 1,
        color: (n = e.color) !== null && n !== void 0 ? n : void 0,
        dashArray: (i = e.dashArray) !== null && i !== void 0 ? i : void 0,
        dashPhase: (a = e.dashPhase) !== null && a !== void 0 ? a : void 0,
        lineCap: (o = e.lineCap) !== null && o !== void 0 ? o : void 0,
        graphicsState: s
      }));
    }, r.prototype.drawRectangle = function(e) {
      var t, n, i, a, o, s, u, l, c, h, d, v, y;
      e === void 0 && (e = {}), K(e.x, "options.x", ["number"]), K(e.y, "options.y", ["number"]), K(e.width, "options.width", ["number"]), K(e.height, "options.height", ["number"]), K(e.rotate, "options.rotate", [[Object, "Rotation"]]), K(e.xSkew, "options.xSkew", [[Object, "Rotation"]]), K(e.ySkew, "options.ySkew", [[Object, "Rotation"]]), K(e.borderWidth, "options.borderWidth", ["number"]), K(e.color, "options.color", [[Object, "Color"]]), Wt(e.opacity, "opacity.opacity", 0, 1), K(e.borderColor, "options.borderColor", [
        [Object, "Color"]
      ]), K(e.borderDashArray, "options.borderDashArray", [
        Array
      ]), K(e.borderDashPhase, "options.borderDashPhase", [
        "number"
      ]), At(e.borderLineCap, "options.borderLineCap", Zr), Wt(e.borderOpacity, "options.borderOpacity", 0, 1), At(e.blendMode, "options.blendMode", tr);
      var w = this.maybeEmbedGraphicsState({
        opacity: e.opacity,
        borderOpacity: e.borderOpacity,
        blendMode: e.blendMode
      });
      !("color" in e) && !("borderColor" in e) && (e.color = te(0, 0, 0));
      var F = this.getContentStream();
      F.push.apply(F, _r({
        x: (t = e.x) !== null && t !== void 0 ? t : this.x,
        y: (n = e.y) !== null && n !== void 0 ? n : this.y,
        width: (i = e.width) !== null && i !== void 0 ? i : 150,
        height: (a = e.height) !== null && a !== void 0 ? a : 100,
        rotate: (o = e.rotate) !== null && o !== void 0 ? o : le(0),
        xSkew: (s = e.xSkew) !== null && s !== void 0 ? s : le(0),
        ySkew: (u = e.ySkew) !== null && u !== void 0 ? u : le(0),
        borderWidth: (l = e.borderWidth) !== null && l !== void 0 ? l : 0,
        color: (c = e.color) !== null && c !== void 0 ? c : void 0,
        borderColor: (h = e.borderColor) !== null && h !== void 0 ? h : void 0,
        borderDashArray: (d = e.borderDashArray) !== null && d !== void 0 ? d : void 0,
        borderDashPhase: (v = e.borderDashPhase) !== null && v !== void 0 ? v : void 0,
        graphicsState: w,
        borderLineCap: (y = e.borderLineCap) !== null && y !== void 0 ? y : void 0
      }));
    }, r.prototype.drawSquare = function(e) {
      e === void 0 && (e = {});
      var t = e.size;
      K(t, "size", ["number"]), this.drawRectangle(de(de({}, e), { width: t, height: t }));
    }, r.prototype.drawEllipse = function(e) {
      var t, n, i, a, o, s, u, l, c, h, d;
      e === void 0 && (e = {}), K(e.x, "options.x", ["number"]), K(e.y, "options.y", ["number"]), K(e.xScale, "options.xScale", ["number"]), K(e.yScale, "options.yScale", ["number"]), K(e.rotate, "options.rotate", [[Object, "Rotation"]]), K(e.color, "options.color", [[Object, "Color"]]), Wt(e.opacity, "opacity.opacity", 0, 1), K(e.borderColor, "options.borderColor", [
        [Object, "Color"]
      ]), Wt(e.borderOpacity, "options.borderOpacity", 0, 1), K(e.borderWidth, "options.borderWidth", ["number"]), K(e.borderDashArray, "options.borderDashArray", [
        Array
      ]), K(e.borderDashPhase, "options.borderDashPhase", [
        "number"
      ]), At(e.borderLineCap, "options.borderLineCap", Zr), At(e.blendMode, "options.blendMode", tr);
      var v = this.maybeEmbedGraphicsState({
        opacity: e.opacity,
        borderOpacity: e.borderOpacity,
        blendMode: e.blendMode
      });
      !("color" in e) && !("borderColor" in e) && (e.color = te(0, 0, 0));
      var y = this.getContentStream();
      y.push.apply(y, pa({
        x: (t = e.x) !== null && t !== void 0 ? t : this.x,
        y: (n = e.y) !== null && n !== void 0 ? n : this.y,
        xScale: (i = e.xScale) !== null && i !== void 0 ? i : 100,
        yScale: (a = e.yScale) !== null && a !== void 0 ? a : 100,
        rotate: (o = e.rotate) !== null && o !== void 0 ? o : void 0,
        color: (s = e.color) !== null && s !== void 0 ? s : void 0,
        borderColor: (u = e.borderColor) !== null && u !== void 0 ? u : void 0,
        borderWidth: (l = e.borderWidth) !== null && l !== void 0 ? l : 0,
        borderDashArray: (c = e.borderDashArray) !== null && c !== void 0 ? c : void 0,
        borderDashPhase: (h = e.borderDashPhase) !== null && h !== void 0 ? h : void 0,
        borderLineCap: (d = e.borderLineCap) !== null && d !== void 0 ? d : void 0,
        graphicsState: v
      }));
    }, r.prototype.drawCircle = function(e) {
      e === void 0 && (e = {});
      var t = e.size, n = t === void 0 ? 100 : t;
      K(n, "size", ["number"]), this.drawEllipse(de(de({}, e), { xScale: n, yScale: n }));
    }, r.prototype.setOrEmbedFont = function(e) {
      var t = this.font, n = this.fontKey;
      e ? this.setFont(e) : this.getFont();
      var i = this.font, a = this.fontKey;
      return { oldFont: t, oldFontKey: n, newFont: i, newFontKey: a };
    }, r.prototype.getFont = function() {
      if (!this.font || !this.fontKey) {
        var e = this.doc.embedStandardFont(Mt.Helvetica);
        this.setFont(e);
      }
      return [this.font, this.fontKey];
    }, r.prototype.resetFont = function() {
      this.font = void 0, this.fontKey = void 0;
    }, r.prototype.getContentStream = function(e) {
      return e === void 0 && (e = !0), e && this.contentStream ? this.contentStream : (this.contentStream = this.createContentStream(), this.contentStreamRef = this.doc.context.register(this.contentStream), this.node.addContentStream(this.contentStreamRef), this.contentStream);
    }, r.prototype.createContentStream = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      var n = this.doc.context.obj({}), i = bn.of(n, e);
      return i;
    }, r.prototype.maybeEmbedGraphicsState = function(e) {
      var t = e.opacity, n = e.borderOpacity, i = e.blendMode;
      if (!(t === void 0 && n === void 0 && i === void 0)) {
        var a = this.doc.context.obj({
          Type: "ExtGState",
          ca: t,
          CA: n,
          BM: i
        }), o = this.node.newExtGState("GS", a);
        return o;
      }
    }, r.prototype.scaleAnnot = function(e, t, n) {
      for (var i = ["RD", "CL", "Vertices", "QuadPoints", "L", "Rect"], a = 0, o = i.length; a < o; a++) {
        var s = e.lookup(b.of(i[a]));
        s instanceof Re && s.scalePDFNumbers(t, n);
      }
      var u = e.lookup(b.of("InkList"));
      if (u instanceof Re)
        for (var a = 0, o = u.size(); a < o; a++) {
          var l = u.lookup(a);
          l instanceof Re && l.scalePDFNumbers(t, n);
        }
    }, r.of = function(e, t, n) {
      return new r(e, t, n);
    }, r.create = function(e) {
      R(e, "doc", [[Ht, "PDFDocument"]]);
      var t = Ne.of(-1), n = ir.withContextAndParent(e.context, t), i = e.context.register(n);
      return new r(n, i, e);
    }, r;
  })()
), ai = (
  /** @class */
  (function(r) {
    X(e, r);
    function e(t, n, i) {
      var a = r.call(this, t, n, i) || this;
      return R(t, "acroButton", [
        [Ai, "PDFAcroPushButton"]
      ]), a.acroField = t, a;
    }
    return e.prototype.setImage = function(t, n) {
      n === void 0 && (n = yr.Center);
      for (var i = this.acroField.getWidgets(), a = 0, o = i.length; a < o; a++) {
        var s = i[a], u = this.createImageAppearanceStream(s, t, n);
        this.updateWidgetAppearances(s, { normal: u });
      }
      this.markAsClean();
    }, e.prototype.setFontSize = function(t) {
      ki(t, "fontSize"), this.acroField.setFontSize(t), this.markAsDirty();
    }, e.prototype.addToPage = function(t, n, i) {
      var a, o, s, u, l, c, h, d, v, y, w;
      K(t, "text", ["string"]), K(n, "page", [[Ot, "PDFPage"]]), an(i);
      var F = this.createWidget({
        x: ((a = i?.x) !== null && a !== void 0 ? a : 0) - ((o = i?.borderWidth) !== null && o !== void 0 ? o : 0) / 2,
        y: ((s = i?.y) !== null && s !== void 0 ? s : 0) - ((u = i?.borderWidth) !== null && u !== void 0 ? u : 0) / 2,
        width: (l = i?.width) !== null && l !== void 0 ? l : 100,
        height: (c = i?.height) !== null && c !== void 0 ? c : 50,
        textColor: (h = i?.textColor) !== null && h !== void 0 ? h : te(0, 0, 0),
        backgroundColor: (d = i?.backgroundColor) !== null && d !== void 0 ? d : te(0.75, 0.75, 0.75),
        borderColor: i?.borderColor,
        borderWidth: (v = i?.borderWidth) !== null && v !== void 0 ? v : 0,
        rotate: (y = i?.rotate) !== null && y !== void 0 ? y : le(0),
        caption: t,
        hidden: i?.hidden,
        page: n.ref
      }), S = this.doc.context.register(F.dict);
      this.acroField.addWidget(S);
      var A = (w = i?.font) !== null && w !== void 0 ? w : this.doc.getForm().getDefaultFont();
      this.updateWidgetAppearance(F, A), n.node.addAnnot(S);
    }, e.prototype.needsAppearancesUpdate = function() {
      var t;
      if (this.isDirty())
        return !0;
      for (var n = this.acroField.getWidgets(), i = 0, a = n.length; i < a; i++) {
        var o = n[i], s = ((t = o.getAppearances()) === null || t === void 0 ? void 0 : t.normal) instanceof wt;
        if (!s)
          return !0;
      }
      return !1;
    }, e.prototype.defaultUpdateAppearances = function(t) {
      R(t, "font", [[St, "PDFFont"]]), this.updateAppearances(t);
    }, e.prototype.updateAppearances = function(t, n) {
      R(t, "font", [[St, "PDFFont"]]), K(n, "provider", [Function]);
      for (var i = this.acroField.getWidgets(), a = 0, o = i.length; a < o; a++) {
        var s = i[a];
        this.updateWidgetAppearance(s, t, n);
      }
    }, e.prototype.updateWidgetAppearance = function(t, n, i) {
      var a = i ?? vc, o = nn(a(this, t, n));
      this.updateWidgetAppearanceWithFont(t, n, o);
    }, e.of = function(t, n, i) {
      return new e(t, n, i);
    }, e;
  })(zr)
);
const Fc = "en-US", _s = "en-GB", ji = "-", kc = {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
}, Cc = new Intl.DateTimeFormat(_s, {
  day: "2-digit",
  month: "short",
  year: "numeric"
}), Tc = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], mi = (r) => Array.isArray(r) ? r : [];
function mr(r, e = 0) {
  const t = Number(r);
  return Number.isFinite(t) ? t : e;
}
const ct = (r) => mr(r, 0);
function vr(r) {
  return Math.round((ct(r) + Number.EPSILON) * 100) / 100;
}
function ht(r, e = {}) {
  return new Intl.NumberFormat(Fc, {
    ...kc,
    ...e
  }).format(ct(r));
}
function Gr(r) {
  return ht(r, { maximumFractionDigits: 0 });
}
function er(r) {
  return ht(vr(r), {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function ar(r) {
  if (r == null || r === "")
    return null;
  if (r instanceof Date)
    return Number.isNaN(r.getTime()) ? null : r;
  if (typeof r == "string") {
    const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(r);
    if (t) {
      const [, n, i, a] = t;
      return new Date(Number(n), Number(i) - 1, Number(a));
    }
  }
  const e = new Date(r);
  return Number.isNaN(e.getTime()) ? null : e;
}
function $s(r) {
  const e = ar(r);
  return e ? Cc.format(e) : ji;
}
function Ui(r = /* @__PURE__ */ new Date()) {
  const e = ar(r);
  return e ? e.toLocaleString(_s) : ji;
}
function Uo(r) {
  const e = ar(r);
  return e ? `${e.getDate()}/${e.getMonth() + 1}/${e.getFullYear()}` : ji;
}
function Pc(r) {
  const e = ar(r);
  return e ? `${String(e.getDate()).padStart(2, "0")}-${Tc[e.getMonth()]}` : ji;
}
function Dc(r = /* @__PURE__ */ new Date()) {
  const e = ar(r) ?? /* @__PURE__ */ new Date(), t = e.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: !0
  });
  return `${e.getDate()}/${e.getMonth() + 1}/${e.getFullYear()} ${t}`;
}
function Wi(r) {
  return String(r ?? "").replace(/\r\n/g, `
`).replace(/\u00a0/g, " ").replace(/[\u2010-\u2015]/g, "-").replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/[^\n\r\t\x20-\x7e\xa0-\xff]/g, "?");
}
const br = {
  ink: te(0.12, 0.16, 0.2),
  muted: te(0.32, 0.38, 0.44),
  line: te(0.77, 0.82, 0.87),
  brand: te(0.04, 0.24, 0.36),
  soft: te(0.95, 0.97, 0.99)
};
function Ve(r, e, t) {
  const n = t.size ?? 10, i = t.lineHeight ?? n * 1.3, a = Ha(Wi(e), t.font, n, t.maxWidth);
  return a.forEach((o, s) => {
    if (!o)
      return;
    const u = t.font.widthOfTextAtSize(o, n), l = t.align === "right" && t.maxWidth ? t.x + t.maxWidth - u : t.align === "center" && t.maxWidth ? t.x + (t.maxWidth - u) / 2 : t.x;
    r.drawText(o, {
      x: l,
      y: t.y - n - s * i,
      size: n,
      font: t.font,
      color: t.color ?? br.ink
    });
  }), t.y - a.length * i;
}
function Vi(r, e) {
  r.drawLine({
    start: { x: e.startX, y: e.startY },
    end: { x: e.endX, y: e.endY },
    color: e.color ?? br.line,
    thickness: e.thickness ?? 1
  });
}
function Jt(r, e, t) {
  return e - t >= r.margins.bottom ? { page: r.page, y: e } : (r.page = r.pdfDoc.addPage(r.pageSize), {
    page: r.page,
    y: r.pageSize[1] - r.margins.top
  });
}
function bi(r, e, t, n) {
  const i = Jt(r, t, 22), a = n.x ?? r.margins.left, o = n.size ?? 9, s = Ve(r.page, e.toUpperCase(), {
    x: a,
    y: i.y,
    font: n.font,
    size: o,
    color: n.color ?? br.muted,
    lineHeight: o + 2
  });
  return { page: r.page, y: s - (n.gapAfter ?? 4) };
}
function en(r, e, t, n, i, a) {
  return Vi(r.page, {
    startX: t,
    startY: n,
    endX: t + i,
    endY: n,
    color: a.lineColor ?? br.line
  }), Ve(r.page, e, {
    x: t,
    y: n - 6,
    font: a.font,
    size: a.size ?? 9,
    color: a.color ?? br.muted,
    maxWidth: i
  }), n - 24;
}
function Un(r) {
  const {
    context: e,
    columns: t,
    headerRows: n = [],
    rows: i,
    font: a,
    boldFont: o,
    x: s,
    padding: u = 4,
    fontSize: l = 8,
    headerFontSize: c = l,
    rowMinHeight: h = 20,
    headerMinHeight: d = 18,
    lineHeight: v = l * 1.25,
    borderColor: y = br.line,
    borderWidth: w = 0.75,
    textColor: F = br.ink,
    headerBackgroundColor: S = br.soft,
    repeatHeader: A = !0
  } = r, C = e.pageSize[0] - s - e.margins.right, E = Ac(t, C);
  let O = r.y;
  const D = () => {
    n.forEach((M) => {
      const U = aa(M, E, {
        font: a,
        boldFont: o,
        fontSize: c,
        lineHeight: c * 1.2,
        minHeight: d,
        padding: u
      });
      Wo({
        page: e.page,
        x: s,
        y: O,
        height: U,
        columns: E,
        cells: M,
        font: a,
        boldFont: o,
        fontSize: c,
        lineHeight: c * 1.2,
        padding: u,
        borderColor: y,
        borderWidth: w,
        defaultTextColor: F,
        defaultBackgroundColor: S,
        defaultBold: !0,
        isHeader: !0
      }), O -= U;
    });
  }, P = n.reduce(
    (M, U) => M + aa(U, E, {
      font: a,
      boldFont: o,
      fontSize: c,
      lineHeight: c * 1.2,
      minHeight: d,
      padding: u
    }),
    0
  );
  return n.length && (O = Jt(e, O, P + h).y, D()), i.forEach((M) => {
    const U = aa(M.cells, E, {
      font: a,
      boldFont: o,
      fontSize: l,
      lineHeight: v,
      minHeight: M.minHeight ?? h,
      padding: u
    });
    O - U < e.margins.bottom && (e.page = e.pdfDoc.addPage(e.pageSize), O = e.pageSize[1] - e.margins.top, A && n.length && D()), Wo({
      page: e.page,
      x: s,
      y: O,
      height: U,
      columns: E,
      cells: M.cells,
      font: a,
      boldFont: o,
      fontSize: l,
      lineHeight: v,
      padding: u,
      borderColor: y,
      borderWidth: w,
      defaultTextColor: F,
      defaultBackgroundColor: M.backgroundColor,
      defaultBold: M.bold ?? !1,
      isHeader: !1
    }), O -= U;
  }), { page: e.page, y: O };
}
function Wo(r) {
  const e = eu(r.cells, r.columns);
  let t = r.x;
  e.forEach(({ cell: n, columnIndex: i, width: a }) => {
    const o = n.fontSize ?? r.fontSize, s = n.fontSize === void 0 ? r.lineHeight : n.fontSize * 1.25, u = n.bold ?? r.defaultBold ? r.boldFont : r.font, l = n.backgroundColor ?? r.defaultBackgroundColor ?? void 0;
    r.page.drawRectangle({
      x: t,
      y: r.y - r.height,
      width: a,
      height: r.height,
      color: l,
      borderColor: r.borderColor,
      borderWidth: r.borderWidth
    });
    const c = Ha(
      Wi(n.text),
      u,
      o,
      Math.max(1, a - r.padding * 2)
    ), h = r.isHeader ? r.columns[i]?.headerAlign : r.columns[i]?.align, d = n.align ?? h ?? "left", v = c.length * s, y = r.y - r.padding - (r.height - v) / 2;
    c.forEach((w, F) => {
      if (!w)
        return;
      const S = u.widthOfTextAtSize(w, o), A = d === "right" ? t + a - r.padding - S : d === "center" ? t + (a - S) / 2 : t + r.padding;
      r.page.drawText(w, {
        x: A,
        y: y - o - F * s,
        size: o,
        font: u,
        color: n.color ?? r.defaultTextColor
      });
    }), t += a;
  });
}
function Ac(r, e) {
  const t = r.reduce((i, a) => i + a.width, 0);
  if (t <= e)
    return r;
  const n = e / t;
  return r.map((i) => ({
    ...i,
    width: i.width * n
  }));
}
function aa(r, e, t) {
  const i = eu(r, e).reduce((a, { cell: o, width: s }) => {
    const u = o.fontSize ?? t.fontSize, l = o.fontSize === void 0 ? t.lineHeight : o.fontSize * 1.25, c = o.bold ? t.boldFont : t.font, h = Ha(
      Wi(o.text),
      c,
      u,
      Math.max(1, s - t.padding * 2)
    );
    return Math.max(a, h.length * l + t.padding * 2);
  }, 0);
  return Math.max(t.minHeight, i);
}
function eu(r, e) {
  const t = [];
  let n = 0;
  for (r.forEach((i) => {
    if (n >= e.length)
      return;
    const a = Rc(i), o = Math.max(1, Math.min(a.colSpan ?? 1, e.length - n)), s = e.slice(n, n + o).reduce((u, l) => u + l.width, 0);
    t.push({ cell: a, columnIndex: n, width: s }), n += o;
  }); n < e.length; )
    t.push({
      cell: { text: "" },
      columnIndex: n,
      width: e[n]?.width ?? 0
    }), n += 1;
  return t;
}
function Rc(r) {
  return typeof r == "object" && r !== null && "text" in r ? r : { text: r };
}
function Ha(r, e, t, n) {
  const i = Wi(r);
  return !n || n <= 0 ? i.split(`
`) : i.split(`
`).flatMap((a) => Oc(a, e, t, n));
}
function Oc(r, e, t, n) {
  if (!r)
    return [""];
  const i = r.split(/\s+/), a = [];
  let o = "";
  return i.forEach((s) => {
    const u = o ? `${o} ${s}` : s;
    if (e.widthOfTextAtSize(u, t) <= n) {
      o = u;
      return;
    }
    o && a.push(o), o = Ec(s, e, t, n, a);
  }), o && a.push(o), a.length ? a : [""];
}
function Ec(r, e, t, n, i) {
  let a = "";
  return [...r].forEach((o) => {
    const s = `${a}${o}`;
    if (e.widthOfTextAtSize(s, t) <= n) {
      a = s;
      return;
    }
    a && i.push(a), a = o;
  }), a;
}
const Zt = {
  companyName: "Company Name",
  companyAddress: "Company Address",
  customerName: "Customer Name",
  customerAddress: "Customer Address",
  doNumber: "N/A",
  driver: "N/A",
  department: "-",
  totalQuantityUnit: "pcs",
  totalWeightUnit: "kg"
}, qt = {
  ink: te(0.12, 0.16, 0.2),
  muted: te(0.32, 0.38, 0.44),
  line: te(0.77, 0.82, 0.87),
  brand: te(0.04, 0.24, 0.36),
  soft: te(0.95, 0.97, 0.99),
  total: te(0.98, 0.99, 1)
};
async function lh(r) {
  const e = Nc(r), t = await Ht.create(), n = await t.embedFont(Mt.Helvetica), i = await t.embedFont(Mt.HelveticaBold), a = $r.A4, o = { top: 40, right: 36, bottom: 40, left: 36 }, s = {
    pdfDoc: t,
    page: t.addPage(a),
    pageSize: a,
    margins: o
  }, u = a[0] - o.left - o.right;
  let l = a[1] - o.top;
  l = zc(s, e, l, u, n, i), l = Bc(
    s,
    e,
    l - 16,
    u,
    n,
    i
  );
  let c = bi(s, "Delivered Items", l - 14, {
    font: i
  });
  l = c.y;
  const h = e.items.length ? e.items.map((d, v) => ({
    cells: [
      { text: v + 1, align: "center" },
      d.name || "-",
      d.department || Zt.department,
      { text: ht(d.quantity), align: "right" },
      { text: d.unit || "-", align: "center" },
      d.remarks || "-"
    ]
  })) : [
    {
      cells: [{ text: "No items provided.", colSpan: 6, align: "center" }],
      minHeight: 32
    }
  ];
  return h.push(
    {
      cells: [
        { text: "Total Linen Items", colSpan: 3, bold: !0 },
        { text: ht(e.totals.totalLinenItems), align: "right", bold: !0 },
        { text: "lines", align: "center", bold: !0 },
        ""
      ],
      backgroundColor: qt.total
    },
    {
      cells: [
        { text: "Total Quantity", colSpan: 3, bold: !0 },
        { text: ht(e.totals.totalQuantity), align: "right", bold: !0 },
        { text: e.totals.totalQuantityUnit, align: "center", bold: !0 },
        ""
      ],
      backgroundColor: qt.total
    }
  ), c = Un({
    context: s,
    x: o.left,
    y: l,
    columns: [
      { width: 34, align: "center", headerAlign: "center" },
      { width: 148 },
      { width: 88 },
      { width: 70, align: "right", headerAlign: "right" },
      { width: 48, align: "center", headerAlign: "center" },
      { width: u - 34 - 148 - 88 - 70 - 48 }
    ],
    headerRows: [["No.", "Item", "Department", "Quantity", "Unit", "Remarks"]],
    rows: h,
    font: n,
    boldFont: i,
    fontSize: 8.8,
    headerFontSize: 8,
    rowMinHeight: 24
  }), l = c.y, l = Mc(s, l - 24, u, n), Jt(s, l, 18), Ve(s.page, `Printed: ${Ui()}`, {
    x: o.left,
    y: Math.max(l - 6, o.bottom + 12),
    font: n,
    size: 8,
    color: qt.muted,
    maxWidth: u,
    align: "right"
  }), t.save();
}
function Nc(r = {}) {
  const e = mi(r.items).map((n = {}) => ({
    name: n.name ?? "",
    department: n.department ?? Zt.department,
    quantity: ct(n.quantity),
    unit: n.unit ?? "",
    remarks: n.remarks ?? ""
  })), t = e[0]?.unit || Zt.totalQuantityUnit;
  return {
    company: {
      name: r.company?.name ?? Zt.companyName,
      address: r.company?.address ?? Zt.companyAddress
    },
    doNumber: r.doNumber ?? Zt.doNumber,
    driver: r.driver ?? Zt.driver,
    date: r.date ?? /* @__PURE__ */ new Date(),
    customer: {
      name: r.customer?.name ?? Zt.customerName,
      address: r.customer?.address ?? Zt.customerAddress
    },
    items: e,
    totals: {
      totalLinenItems: mr(
        r.totals?.totalLinenItems ?? r.totals?.totalLineItems,
        0
      ),
      totalQuantity: mr(r.totals?.totalQuantity, 0),
      totalQuantityUnit: r.totals?.totalQuantityUnit ?? r.totalQuantityUnit ?? t,
      totalWeight: mr(
        r.totals?.totalWeight ?? r.totalWeight,
        0
      ),
      totalWeightUnit: r.totals?.totalWeightUnit ?? r.totalWeightUnit ?? Zt.totalWeightUnit
    }
  };
}
function kn(r, e, t, n) {
  let i = 0;
  for (const a of r.split(`
`)) {
    if (!a) {
      i++;
      continue;
    }
    const o = a.split(/\s+/);
    let s = "";
    for (const u of o) {
      const l = s ? `${s} ${u}` : u;
      e.widthOfTextAtSize(l, t) <= n ? s = l : (s && i++, s = u);
    }
    s && i++;
  }
  return Math.max(1, i);
}
function tu(r, e, t, n, i, a) {
  let o = t;
  for (; o > n; ) {
    if (kn(r, e, o, i) <= a) return o;
    o -= 0.5;
  }
  return n;
}
function zc(r, e, t, n, i, a) {
  const s = r.margins.left + n - 210, u = n - 210 - 16, l = tu(e.company.name, a, 16, 8, u, 3), c = l * 1.3;
  let h = t;
  h = Ve(r.page, e.company.name, {
    x: r.margins.left,
    y: h,
    font: a,
    size: l,
    color: qt.brand,
    maxWidth: u,
    lineHeight: c
  });
  const d = 12, y = kn(e.company.address, i, 9, u) * d;
  Ve(r.page, e.company.address, {
    x: r.margins.left,
    y: h - 3,
    font: i,
    size: 9,
    color: qt.muted,
    maxWidth: u,
    lineHeight: d
  });
  const w = h - 3 - y;
  Ve(r.page, "Delivery Order", {
    x: s,
    y: t,
    font: a,
    size: 18,
    color: qt.brand,
    maxWidth: 210,
    align: "right"
  });
  const F = Un({
    context: r,
    x: s,
    y: t - 26,
    columns: [
      { width: 76 },
      { width: 134 }
    ],
    rows: [
      { cells: [{ text: "DO Number", bold: !0 }, e.doNumber] },
      { cells: [{ text: "Date", bold: !0 }, $s(e.date)] },
      { cells: [{ text: "Driver", bold: !0 }, e.driver] },
      {
        cells: [
          { text: "Total Weight", bold: !0 },
          `${ht(e.totals.totalWeight)} ${e.totals.totalWeightUnit}`
        ]
      }
    ],
    font: i,
    boldFont: a,
    fontSize: 8.5,
    rowMinHeight: 18,
    padding: 4
  }), S = Math.min(w - 8, F.y - 4);
  return Vi(r.page, {
    startX: r.margins.left,
    startY: S,
    endX: r.margins.left + n,
    endY: S,
    color: qt.brand,
    thickness: 1.4
  }), S;
}
function Bc(r, e, t, n, i, a) {
  const s = (n - 10) / 2, u = 10, l = s - u * 2, c = 12, h = tu(e.customer.name, a, 10, 7, l, 2), v = kn(e.customer.name, a, h, l) * (h * 1.3), w = kn(e.customer.address, i, 9, l) * c, F = `Driver: ${e.driver}`, A = kn(F, i, 9, l) * c, C = 24 + c + 6 + A, E = 10 + v + 6 + w, O = Math.max(E, C) + u * 2, D = Jt(r, t, O + 28), P = r.margins.left, M = P + s + 10, U = D.y;
  bi(r, "Customer Information", U, { x: P, font: a });
  const V = bi(r, "Delivery Details", U, { x: M, font: a }).y;
  Vo(r, P, V, s, O);
  const Z = V - u;
  return Ve(r.page, e.customer.name, {
    x: P + u,
    y: Z,
    font: a,
    size: h,
    maxWidth: l,
    lineHeight: h * 1.3
  }), Ve(r.page, e.customer.address, {
    x: P + u,
    y: Z - v - 4,
    font: i,
    size: 9,
    color: qt.muted,
    maxWidth: l,
    lineHeight: c
  }), Vo(r, M, V, s, O), Ve(r.page, "Receiving Department", {
    x: M + u,
    y: V - u,
    font: a,
    size: 10,
    maxWidth: l
  }), Ve(r.page, "Signature and stamp required upon handover.", {
    x: M + u,
    y: V - u - 18,
    font: i,
    size: 9,
    color: qt.muted,
    maxWidth: l,
    lineHeight: c
  }), Ve(r.page, F, {
    x: M + u,
    y: V - u - 18 - c - 6,
    font: i,
    size: 9,
    color: qt.muted,
    maxWidth: l,
    lineHeight: c
  }), V - O;
}
function Mc(r, e, t, n) {
  const i = Jt(r, e, 72), a = (t - 28) / 2, o = i.y - 36;
  return en(r, "Prepared By", r.margins.left, o, a, {
    font: n
  }), en(
    r,
    "Received By",
    r.margins.left + a + 28,
    o,
    a,
    { font: n }
  ), o - 28;
}
function Vo(r, e, t, n, i) {
  r.page.drawRectangle({
    x: e,
    y: t - i,
    width: n,
    height: i,
    borderColor: qt.line,
    borderWidth: 0.75
  });
}
const Cn = {
  reportTitle: "Billing Report",
  hotelName: "Hotel Name",
  department: "IRD",
  unit: "PCS",
  taxRate: 0.08
}, Yt = {
  ink: te(0.12, 0.16, 0.2),
  muted: te(0.32, 0.38, 0.44),
  line: te(0.77, 0.82, 0.87),
  brand: te(0.19, 0.27, 0.35),
  header: te(0.93, 0.96, 0.99),
  qty: te(0.96, 0.98, 1),
  value: te(0.97, 0.98, 0.99),
  tax: te(1, 0.97, 0.93),
  subtotal: te(0.94, 0.98, 0.94)
};
async function fh(r) {
  const e = Ic(r), t = await Ht.create(), n = await t.embedFont(Mt.Helvetica), i = await t.embedFont(Mt.HelveticaBold), a = { top: 28, right: 24, bottom: 28, left: 24 }, o = $r.A4[1], s = $r.A4[0], u = Gc(e.deliveries.length, a), c = [Math.max(o, u), s], h = {
    pdfDoc: t,
    page: t.addPage(c),
    pageSize: c,
    margins: a
  }, d = c[0] - a.left - a.right;
  let v = c[1] - a.top;
  return v = Hc(h, e, v, d, n, i), v = Kc(
    h,
    e,
    v - 12,
    d,
    n,
    i
  ), v = Qc(
    h,
    v - 14,
    d,
    n
  ), Jt(h, v, 16), Ve(h.page, `Generated On ${e.generatedOn}`, {
    x: a.left,
    y: Math.max(v - 6, a.bottom + 12),
    font: n,
    size: 7,
    color: Yt.muted,
    maxWidth: d,
    align: "right"
  }), t.save();
}
function Ic(r = {}) {
  const e = jc(r.period ?? r.dateRange ?? {}), t = Wc(r.deliveries ?? r.days, e), n = Lc(r.items, t.length), i = Uc(r.taxRate ?? r.sstRate), a = qc(r.summary ?? r.summaryOverrides, t.length), o = r.taxLabel ?? `SST ${ht(i * 100)}%`;
  return {
    reportTitle: r.reportTitle ?? Cn.reportTitle,
    hotelName: r.hotelName ?? r.company?.name ?? Cn.hotelName,
    department: r.department ?? Cn.department,
    period: e,
    deliveries: t,
    items: n,
    summary: a,
    taxLabel: o,
    generatedOn: Dc(r.generatedOn)
  };
}
function jc(r) {
  const e = ar(r.month) ?? ar(r.from) ?? ar(r.to) ?? /* @__PURE__ */ new Date();
  return {
    from: new Date(e.getFullYear(), e.getMonth(), 1),
    to: new Date(e.getFullYear(), e.getMonth() + 1, 0)
  };
}
function Uc(r) {
  const e = ct(r);
  return e ? e > 1 ? e / 100 : e : Cn.taxRate;
}
function Wc(r, e) {
  const t = mi(r).map((n) => {
    const i = ar(n.date ?? n.deliveryDate);
    return i ? {
      date: i,
      doNumber: n.doNumber ?? n.reference ?? "-"
    } : null;
  }).filter((n) => n !== null).sort((n, i) => n.date.getTime() - i.date.getTime());
  return t.length ? t : [{ date: e.from, doNumber: "-" }];
}
function Vc(r) {
  return r === "Express" || r === "Special" ? r : "Normal";
}
function Lc(r = [], e) {
  return mi(r).map((t, n) => {
    const i = mi(t.quantities).slice(0, e).map(ct);
    for (; i.length < e; )
      i.push(0);
    const a = mr(t.totalQty, 0), o = mr(t.billableQty, 0), s = ct(t.unitPrice), u = vr(t.totalValue ?? 0);
    return {
      no: t.no ?? n + 1,
      description: t.description ?? t.name ?? "",
      servicing: Vc(t.servicing),
      unit: t.unit ?? Cn.unit,
      unitPrice: s,
      quantities: i,
      totalQty: a,
      billableQty: o,
      totalValue: u
    };
  });
}
function qc(r, e) {
  const t = Array(e).fill(0);
  return {
    totalQtyPerDay: $n(r?.totalQtyPerDay, t, ct),
    totalValuePerDay: $n(r?.totalValuePerDay, t, vr),
    taxPerDay: $n(r?.taxPerDay, t, vr),
    subtotalPerDay: $n(r?.subtotalPerDay, t, vr),
    totalQty: mr(r?.totalQty, 0),
    billableQty: mr(r?.billableQty, 0),
    totalValue: vr(r?.totalValue ?? 0),
    taxTotal: vr(r?.taxTotal ?? 0),
    subtotalTotal: vr(r?.subtotalTotal ?? 0)
  };
}
function $n(r, e, t) {
  if (!Array.isArray(r))
    return [...e];
  const n = [...e];
  return r.forEach((i, a) => {
    a < n.length && (n[a] = t(i));
  }), n;
}
function Hc(r, e, t, n, i, a) {
  return Ve(r.page, e.reportTitle, {
    x: r.margins.left,
    y: t,
    font: a,
    size: 16,
    color: Yt.brand,
    maxWidth: n
  }), Ve(r.page, e.hotelName, {
    x: r.margins.left,
    y: t - 22,
    font: a,
    size: 11,
    color: Yt.ink,
    maxWidth: n
  }), Ve(
    r.page,
    `${e.department}  |  From ${Uo(e.period.from)} To ${Uo(e.period.to)}`,
    {
      x: r.margins.left,
      y: t - 38,
      font: i,
      size: 9,
      color: Yt.muted,
      maxWidth: n
    }
  ), Vi(r.page, {
    startX: r.margins.left,
    startY: t - 52,
    endX: r.margins.left + n,
    endY: t - 52,
    color: Yt.brand,
    thickness: 1.4
  }), t - 52;
}
function Kc(r, e, t, n, i, a) {
  const o = Xc(e.deliveries.length), s = Zc(e.deliveries), u = Yc(e);
  return Un({
    context: r,
    x: r.margins.left,
    y: t,
    columns: o,
    headerRows: s,
    rows: u,
    font: i,
    boldFont: a,
    fontSize: 5.8,
    headerFontSize: 5,
    rowMinHeight: 18,
    headerMinHeight: 14,
    padding: 2,
    lineHeight: 7,
    headerBackgroundColor: Yt.header
  }).y;
}
const ru = 28;
function Gc(r, e) {
  return 412 + r * ru + e.left + e.right;
}
function Xc(r, e) {
  const t = {
    no: 22,
    description: 108,
    servicing: 44,
    unit: 30,
    unitPrice: 56,
    totalQty: 46,
    billableQty: 50,
    totalValue: 56
  };
  return [
    { width: t.no, align: "center", headerAlign: "center" },
    { width: t.description },
    { width: t.servicing, align: "center", headerAlign: "center" },
    { width: t.unit, align: "center", headerAlign: "center" },
    { width: t.unitPrice, align: "right", headerAlign: "right" },
    ...Array.from({ length: r }, () => ({
      width: ru,
      align: "right",
      headerAlign: "center"
    })),
    { width: t.totalQty, align: "right", headerAlign: "right" },
    { width: t.billableQty, align: "right", headerAlign: "right" },
    { width: t.totalValue, align: "right", headerAlign: "right" }
  ];
}
function Zc(r) {
  const e = ["", "", "", "", ""], t = ["", "", ""];
  return [
    [
      "No",
      "Description",
      "Servicing",
      "Unit",
      `Unit Price
(RM)`,
      { text: "Delivered Quantity (Including rewash)", colSpan: r.length, align: "center" },
      "Total Qty",
      "Billable Qty",
      "Total Value (RM)"
    ],
    [
      ...e,
      ...r.map((n) => ({
        text: Pc(n.date),
        align: "center"
      })),
      ...t
    ],
    [
      ...e,
      ...r.map((n) => ({
        text: n.doNumber,
        align: "center",
        fontSize: 4.2
      })),
      ...t
    ]
  ];
}
function Yc(r) {
  return r.items.length ? [
    ...r.items.map((e) => ({
      cells: [
        { text: e.no, align: "center" },
        e.description || "-",
        { text: e.servicing, align: "center" },
        { text: e.unit, align: "center" },
        { text: er(e.unitPrice), align: "right" },
        ...e.quantities.map((t) => ({
          text: Gr(t),
          align: "right"
        })),
        { text: Gr(e.totalQty), align: "right" },
        { text: Gr(e.billableQty), align: "right" },
        { text: er(e.totalValue), align: "right" }
      ]
    })),
    {
      cells: [
        { text: "Total Pcs Per Day", colSpan: 5, bold: !0 },
        ...r.summary.totalQtyPerDay.map((e) => ({
          text: Gr(e),
          align: "right",
          bold: !0
        })),
        { text: Gr(r.summary.totalQty), align: "right", bold: !0 },
        { text: Gr(r.summary.billableQty), align: "right", bold: !0 },
        { text: er(r.summary.totalValue), align: "right", bold: !0 }
      ],
      backgroundColor: Yt.qty
    },
    {
      cells: [
        { text: "Total Value Per Day", colSpan: 5, bold: !0 },
        ...r.summary.totalValuePerDay.map((e) => ({
          text: er(e),
          align: "right",
          bold: !0
        })),
        "",
        "",
        { text: er(r.summary.totalValue), align: "right", bold: !0 }
      ],
      backgroundColor: Yt.value
    },
    {
      cells: [
        { text: r.taxLabel, colSpan: 5, bold: !0 },
        ...r.summary.taxPerDay.map((e) => ({
          text: er(e),
          align: "right",
          bold: !0
        })),
        "",
        "",
        { text: er(r.summary.taxTotal), align: "right", bold: !0 }
      ],
      backgroundColor: Yt.tax
    },
    {
      cells: [
        { text: "Subtotal W Tax", colSpan: 5, bold: !0 },
        ...r.summary.subtotalPerDay.map((e) => ({
          text: er(e),
          align: "right",
          bold: !0
        })),
        "",
        "",
        { text: er(r.summary.subtotalTotal), align: "right", bold: !0 }
      ],
      backgroundColor: Yt.subtotal
    }
  ] : [
    {
      cells: [
        {
          text: "No monthly bill items provided.",
          colSpan: r.deliveries.length + 8,
          align: "center"
        }
      ],
      minHeight: 30
    }
  ];
}
function Qc(r, e, t, n) {
  const i = Jt(r, e, 54), a = (t - 32) / 2, o = i.y - 28;
  return en(r, "Prepared By", r.margins.left, o, a, {
    font: n,
    size: 7.5
  }), en(
    r,
    "Verified By",
    r.margins.left + a + 32,
    o,
    a,
    { font: n, size: 7.5 }
  ), o - 26;
}
const Lo = {
  reportTitle: "Daily Summary",
  hotelName: "Hotel Name"
}, Yr = {
  ink: te(0.12, 0.16, 0.2),
  muted: te(0.32, 0.38, 0.44),
  line: te(0.77, 0.82, 0.87),
  brand: te(0.04, 0.24, 0.36),
  soft: te(0.95, 0.97, 0.99),
  header: te(0.93, 0.96, 0.99),
  total: te(0.94, 0.97, 1)
};
async function ch(r) {
  const e = Jc(r), t = await Ht.create(), n = await t.embedFont(Mt.Helvetica), i = await t.embedFont(Mt.HelveticaBold), a = $r.A4, o = { top: 40, right: 36, bottom: 40, left: 36 }, s = {
    pdfDoc: t,
    page: t.addPage(a),
    pageSize: a,
    margins: o
  }, u = a[0] - o.left - o.right;
  let l = a[1] - o.top;
  return l = _c(s, e, l, u, n, i), l = $c(s, e, l - 14, u, n, i), l = eh(s, l - 24, u, n), Jt(s, l, 18), Ve(s.page, `Printed: ${Ui()}`, {
    x: o.left,
    y: Math.max(l - 6, o.bottom + 12),
    font: n,
    size: 8,
    color: Yr.muted,
    maxWidth: u,
    align: "right"
  }), t.save();
}
function Jc(r = {}) {
  const e = (r.Items ?? []).map((t) => ({
    linenType: t.linenType ?? "-",
    linenIn: ct(t.LinenIn),
    linenOut: ct(t.LinenOut),
    stock: ct(t.Stock),
    par: ct(t.PAR)
  }));
  return {
    reportTitle: r.reportTitle ?? Lo.reportTitle,
    hotelName: r.hotelName ?? Lo.hotelName,
    date: r.date ? new Date(r.date) : /* @__PURE__ */ new Date(),
    items: e
  };
}
function ba(r, e, t, n) {
  let i = 0;
  for (const a of r.split(`
`)) {
    if (!a) {
      i++;
      continue;
    }
    const o = a.split(/\s+/);
    let s = "";
    for (const u of o) {
      const l = s ? `${s} ${u}` : u;
      e.widthOfTextAtSize(l, t) <= n ? s = l : (s && i++, s = u);
    }
    s && i++;
  }
  return Math.max(1, i);
}
function qo(r, e, t, n, i, a) {
  let o = t;
  for (; o > n; ) {
    if (ba(r, e, o, i) <= a) return o;
    o -= 0.5;
  }
  return n;
}
function _c(r, e, t, n, i, a) {
  const o = qo(e.reportTitle, a, 16, 9, n, 2), s = o * 1.3, l = ba(e.reportTitle, a, o, n) * s;
  Ve(r.page, e.reportTitle, {
    x: r.margins.left,
    y: t,
    font: a,
    size: o,
    color: Yr.brand,
    maxWidth: n,
    lineHeight: s
  });
  const c = t - l - 4, h = qo(e.hotelName, a, 11, 7, n, 2), d = h * 1.3, y = ba(e.hotelName, a, h, n) * d;
  Ve(r.page, e.hotelName, {
    x: r.margins.left,
    y: c,
    font: a,
    size: h,
    color: Yr.ink,
    maxWidth: n,
    lineHeight: d
  });
  const w = c - y - 4;
  Ve(r.page, $s(e.date), {
    x: r.margins.left,
    y: w,
    font: i,
    size: 9,
    color: Yr.muted,
    maxWidth: n
  });
  const F = w - 14;
  return Vi(r.page, {
    startX: r.margins.left,
    startY: F,
    endX: r.margins.left + n,
    endY: F,
    color: Yr.brand,
    thickness: 1.4
  }), F;
}
function $c(r, e, t, n, i, a) {
  t = bi(r, "Linen Stock Summary", t, { font: a }).y;
  const s = 80, c = [
    { width: n - s * 4 },
    { width: s, align: "right", headerAlign: "right" },
    { width: s, align: "right", headerAlign: "right" },
    { width: s, align: "right", headerAlign: "right" },
    { width: s, align: "right", headerAlign: "right" }
  ], h = e.items.length ? e.items.map((v) => ({
    cells: [
      v.linenType,
      { text: ht(v.linenIn), align: "right" },
      { text: ht(v.linenOut), align: "right" },
      { text: ht(v.stock), align: "right" },
      { text: ht(v.par), align: "right" }
    ]
  })) : [
    {
      cells: [{ text: "No items provided.", colSpan: 5, align: "center" }],
      minHeight: 32
    }
  ];
  return Un({
    context: r,
    x: r.margins.left,
    y: t,
    columns: c,
    headerRows: [
      ["Linen Type", "Collected", "Delivered", "Stock Level", "Par Level"]
    ],
    rows: h,
    font: i,
    boldFont: a,
    fontSize: 9,
    headerFontSize: 8.5,
    rowMinHeight: 26,
    headerMinHeight: 22,
    padding: 6,
    headerBackgroundColor: Yr.header
  }).y;
}
function eh(r, e, t, n) {
  const i = Jt(r, e, 72), a = (t - 28) / 2, o = i.y - 36;
  return en(r, "Prepared By", r.margins.left, o, a, {
    font: n
  }), en(
    r,
    "Verified By",
    r.margins.left + a + 28,
    o,
    a,
    { font: n }
  ), o - 28;
}
const oa = {
  reportTitle: "Inventory Aging Report",
  hotelName: "Hotel Name",
  department: "Customer Holding"
}, Ge = {
  ink: te(0.12, 0.16, 0.2),
  muted: te(0.32, 0.38, 0.44),
  line: te(0.77, 0.82, 0.87),
  brand: te(0.04, 0.24, 0.36),
  headerDark: te(0.08, 0.28, 0.46),
  headerMid: te(0.28, 0.52, 0.72),
  rowAlt: te(0.93, 0.96, 0.99),
  white: te(1, 1, 1)
};
async function hh(r) {
  const e = th(r), t = await Ht.create(), n = await t.embedFont(Mt.Helvetica), i = await t.embedFont(Mt.HelveticaBold), a = $r.A4, o = { top: 36, right: 36, bottom: 36, left: 36 }, s = {
    pdfDoc: t,
    page: t.addPage(a),
    pageSize: a,
    margins: o
  }, u = a[0] - o.left - o.right;
  let l = a[1] - o.top;
  return l = rh(s, e, l, u, n, i), l = nh(s, e.department, l - 16, u, i), l = ih(s, e, l - 8, u, n, i), Jt(s, l, 18), Ve(s.page, `Generated On ${Ui(e.generatedOn)}`, {
    x: o.left,
    y: Math.max(l - 6, o.bottom + 12),
    font: n,
    size: 7.5,
    color: Ge.muted,
    maxWidth: u,
    align: "right"
  }), t.save();
}
function th(r = {}) {
  const e = (r.items ?? []).map((t) => ({
    item: t.item ?? "-",
    days0to30: ct(t.days0to30),
    days31to60: ct(t.days31to60),
    days60plus: ct(t.days60plus),
    total: ct(t.total)
  }));
  return {
    reportTitle: r.reportTitle ?? oa.reportTitle,
    hotelName: r.hotelName ?? oa.hotelName,
    department: r.department ?? oa.department,
    generatedOn: r.generatedOn ? new Date(r.generatedOn) : /* @__PURE__ */ new Date(),
    items: e
  };
}
function xa(r, e, t, n) {
  let i = 0;
  for (const a of r.split(`
`)) {
    if (!a) {
      i++;
      continue;
    }
    const o = a.split(/\s+/);
    let s = "";
    for (const u of o) {
      const l = s ? `${s} ${u}` : u;
      e.widthOfTextAtSize(l, t) <= n ? s = l : (s && i++, s = u);
    }
    s && i++;
  }
  return Math.max(1, i);
}
function Ho(r, e, t, n, i, a) {
  let o = t;
  for (; o > n; ) {
    if (xa(r, e, o, i) <= a) return o;
    o -= 0.5;
  }
  return n;
}
function rh(r, e, t, n, i, a) {
  const o = Ho(e.reportTitle, a, 16, 9, n * 0.65, 2), s = o * 1.3, l = xa(e.reportTitle, a, o, n * 0.65) * s;
  Ve(r.page, e.reportTitle, {
    x: r.margins.left,
    y: t,
    font: a,
    size: o,
    color: Ge.ink,
    maxWidth: n * 0.65,
    lineHeight: s
  }), Ve(r.page, `Generated On ${Ui(e.generatedOn)}`, {
    x: r.margins.left,
    y: t,
    font: i,
    size: 8,
    color: Ge.ink,
    maxWidth: n,
    align: "right"
  });
  const c = t - l - 4, h = Ho(e.hotelName, a, 11, 7, n, 2), d = h * 1.3, y = xa(e.hotelName, a, h, n) * d;
  return Ve(r.page, e.hotelName, {
    x: r.margins.left,
    y: c,
    font: a,
    size: h,
    color: Ge.ink,
    maxWidth: n,
    lineHeight: d
  }), c - y;
}
function nh(r, e, t, n, i) {
  return Ve(r.page, e, {
    x: r.margins.left,
    y: t,
    font: i,
    size: 9,
    color: Ge.ink,
    maxWidth: n
  }), t - 14;
}
function ih(r, e, t, n, i, a) {
  const o = n * 0.22, s = (n - o - 80) / 3, l = [
    { width: o },
    { width: s, align: "right", headerAlign: "center" },
    { width: s, align: "right", headerAlign: "center" },
    { width: s, align: "right", headerAlign: "center" },
    { width: 80, align: "right", headerAlign: "right" }
  ], c = [
    { text: "Item", bold: !0, color: Ge.white, backgroundColor: Ge.headerDark },
    { text: "No. of Days Since Last Seen", colSpan: 3, align: "center", bold: !0, color: Ge.white, backgroundColor: Ge.headerDark },
    { text: "Total", bold: !0, align: "right", color: Ge.white, backgroundColor: Ge.headerDark }
  ], h = [
    { text: "", backgroundColor: Ge.headerDark },
    { text: "0 - 30", align: "center", bold: !0, color: Ge.white, backgroundColor: Ge.headerMid },
    { text: "31 - 60", align: "center", bold: !0, color: Ge.white, backgroundColor: Ge.headerMid },
    { text: "> 60", align: "center", bold: !0, color: Ge.white, backgroundColor: Ge.headerMid },
    { text: "", backgroundColor: Ge.headerDark }
  ], d = e.items.length ? e.items.map((y, w) => ({
    cells: [
      { text: y.item },
      { text: ht(y.days0to30), align: "right" },
      { text: ht(y.days31to60), align: "right" },
      { text: ht(y.days60plus), align: "right" },
      { text: ht(y.total), align: "right" }
    ],
    backgroundColor: w % 2 === 0 ? Ge.rowAlt : void 0
  })) : [
    {
      cells: [{ text: "No items provided.", colSpan: 5, align: "center" }],
      minHeight: 32
    }
  ];
  return Un({
    context: r,
    x: r.margins.left,
    y: t,
    columns: l,
    headerRows: [c, h],
    rows: d,
    font: i,
    boldFont: a,
    fontSize: 9,
    headerFontSize: 8.5,
    rowMinHeight: 28,
    headerMinHeight: 20,
    padding: 6,
    borderColor: Ge.line,
    headerBackgroundColor: Ge.headerDark,
    repeatHeader: !0
  }).y;
}
function dh(r) {
  const e = new Blob([nu(r)], { type: "application/pdf" }), t = URL.createObjectURL(e);
  window.open(t, "_blank", "noopener,noreferrer");
}
function vh(r, e) {
  const t = new Blob([nu(r)], { type: "application/pdf" }), n = URL.createObjectURL(t), i = document.createElement("a");
  i.href = n, i.download = e, i.click(), URL.revokeObjectURL(n);
}
function nu(r) {
  const e = new ArrayBuffer(r.byteLength);
  return new Uint8Array(e).set(r), e;
}
export {
  oh as createDailyReportData,
  sh as createDeliveryOrderData,
  ah as createNonMovementReportData,
  uh as createSummaryReportData,
  vh as downloadPdf,
  ft as extractObject,
  ch as generateDailyReportPdf,
  lh as generateDeliveryOrderPdf,
  hh as generateNonMovementReportPdf,
  fh as generateSummaryReportPdf,
  dh as openPdfInNewTab,
  Ko as resolveField
};
