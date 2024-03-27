import { defineComponent as W, watch as _, openBlock as r, createElementBlock as l, normalizeClass as h, createElementVNode as t, withKeys as c, withModifiers as a, createCommentVNode as s, withDirectives as $, vShow as Z, renderSlot as b, toDisplayString as N, createVNode as F, Transition as U, withCtx as y, Fragment as G, renderList as O, createBlock as R, unref as X } from "vue";
import "./style/tree-node.css";
import { TreeNodeContentClickActionEnum as J } from "./type.js";
const P = ["id", "tabIndex", "onKeydown"], Q = {
  key: 0,
  class: "z-tree-node-anchor-arrow"
}, Y = {
  key: 0,
  class: "z-tree-node-anchor-arrow-expander-minus",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 16 16"
}, ee = /* @__PURE__ */ t("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "0.5",
  d: "M 1.2595435,6.004727 H 10.740457",
  style: { "stroke-width": "0.509454", "stroke-linecap": "square", "stroke-dasharray": "none" }
}, null, -1), oe = [
  ee
], ne = {
  key: 1,
  class: "z-tree-node-anchor-arrow-expander-arrow-down",
  width: "12",
  height: "12",
  version: "1.1",
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:svg": "http://www.w3.org/2000/svg"
}, te = /* @__PURE__ */ t("path", {
  fill: "currentColor",
  d: "m 0,2.3 5.999999,8 L 12,2.3 Z",
  id: "path1",
  style: { "stroke-width": "1.38564" }
}, null, -1), de = [
  te
], re = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "z-tree-node-anchor-arrow-expander-plus",
  viewBox: "-1 -1 14 14"
}, le = /* @__PURE__ */ t("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M 5.994727,1.254727 V 10.73564",
  id: "path1-8",
  style: { "stroke-width": "0.509454", "stroke-linecap": "square", "stroke-dasharray": "none" }
}, null, -1), se = /* @__PURE__ */ t("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M 1.2595435,6.004727 H 10.740457",
  id: "path1",
  style: { "stroke-width": "0.509454", "stroke-linecap": "square", "stroke-dasharray": "none" }
}, null, -1), ie = [
  le,
  se
], ae = {
  key: 3,
  class: "z-tree-node-anchor-arrow-expander-arrow-right",
  width: "12",
  height: "12",
  version: "1.1",
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:svg": "http://www.w3.org/2000/svg"
}, ce = /* @__PURE__ */ t("path", {
  fill: "currentColor",
  d: "M 2.3,12 10.3,6.000001 2.3,0 Z",
  id: "path1",
  style: { "stroke-width": "1.38564" }
}, null, -1), he = [
  ce
], ue = /* @__PURE__ */ t("svg", {
  width: "14px",
  height: "14px",
  viewBox: "0 -30 256 300"
}, [
  /* @__PURE__ */ t("path", {
    fill: "currentColor",
    d: "m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4"
  })
], -1), ke = [
  ue
], pe = {
  key: 0,
  class: "z-tree-node-anchor-checkbox-icon-checked"
}, fe = /* @__PURE__ */ t("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 3 12 12"
}, [
  /* @__PURE__ */ t("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.2919",
    d: "M 1.64595,9.2236174 4.5486491,12.354075 10.354047,5.64595",
    style: { "stroke-width": "1.5", "stroke-dasharray": "none" }
  })
], -1), we = [
  fe
], Ce = {
  key: 1,
  class: "z-tree-node-anchor-checkbox-icon-half-checked"
}, me = /* @__PURE__ */ t("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 3 12 12"
}, [
  /* @__PURE__ */ t("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.2919",
    d: "M 1.73638,8.993499 4.2115414,9.013614 10.263617,8.98638",
    style: { "stroke-width": "1.47276", "stroke-linejoin": "round", "stroke-dasharray": "none" },
    "sodipodi:nodetypes": "ccc"
  })
], -1), be = [
  me
], Ne = {
  key: 2,
  class: "z-tree-node-anchor-checkbox-icon-unchecked"
}, ye = /* @__PURE__ */ t("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 0 0"
}, [
  /* @__PURE__ */ t("path", { fill: "currentColor" })
], -1), ve = [
  ye
], ge = { class: "z-tree-node-anchor-content-default" }, ze = {
  key: 0,
  class: "z-tree-node-anchor-content-id"
}, Ee = ["innerHTML"], Be = { class: "z-tree-node-anchor-content-label" }, Ie = {
  key: 0,
  class: "z-tree-node-child"
}, Le = {
  name: "TreeNode"
}, Ae = /* @__PURE__ */ W({
  ...Le,
  props: {
    treeNode: {},
    checkedNodes: { default: () => [] },
    expandKeys: { default: () => [] },
    maxTabIndex: {},
    cascade: { type: Boolean, default: !0 },
    showCheckbox: { type: Boolean, default: !1 },
    transition: { default: "slide-fade" },
    showLine: { type: Boolean, default: !0 },
    expandAll: { type: Boolean, default: !1 },
    checkedAll: { type: Boolean },
    multipleCheck: { type: Boolean, default: !0 },
    onlyLeafCheck: { type: Boolean, default: !0 },
    enableDblclick: { type: Boolean, default: !1 },
    enableWholeAnchorStatus: { type: Boolean, default: !1 },
    enableCheckConfirm: { type: Boolean, default: !1 },
    showId: { type: Boolean, default: !1 },
    idSeparator: { default: "" },
    hideLeafIcon: { type: Boolean, default: !1 },
    hideExpander: { type: Boolean, default: !1 },
    nodeContentClickAction: { default: J.NONE },
    senderElementId: { default: "" },
    treeId: { default: "" }
  },
  emits: ["update:checkedNode", "update:expandNode", "checkbox-click", "node-click", "node-dblclick"],
  setup(v, { emit: g }) {
    const n = v;
    let k = null, u = !1;
    const i = g;
    _(
      () => n.treeNode,
      () => {
      }
    );
    function z(e) {
      let o = e.disabled ? "z-tree-node-anchor-disabled" : "";
      return (n.enableWholeAnchorStatus || !n.multipleCheck) && n.checkedNodes.some((d) => {
        if (e.id === d.id)
          return o += " z-tree-node-anchor-selected", !0;
      }), o;
    }
    function E(e) {
      let o = "";
      return n.showLine && (o += " z-tree-node-line"), o;
    }
    function B(e) {
      if (e.children && e.children.length > 0 && n.onlyLeafCheck && (!n.multipleCheck || !n.cascade))
        return "z-tree-node-anchor-checkbox-disabled";
    }
    function I(e, o) {
      n.enableDblclick ? (u = !1, k = setTimeout(() => {
        u || p(e, o);
      }, 200)) : p(e, o);
    }
    function p(e, o) {
      i("node-click", e, o);
    }
    function L(e, o) {
      i("node-click", e, o);
    }
    function A(e, o) {
      n.enableDblclick && (u = !0, clearTimeout(k), i("node-dblclick", e, o));
    }
    function S(e, o) {
      i("node-dblclick", e, o);
    }
    function f(e) {
      i("update:expandNode", e);
    }
    function x(e) {
      i("update:expandNode", e);
    }
    function w(e, o) {
      i("checkbox-click", e, o);
    }
    function D(e, o) {
      i("checkbox-click", e, o);
    }
    function M() {
      C(n.treeNode.tabIndex ?? 0);
    }
    function C(e) {
      const o = document.querySelector("#" + n.treeId + "__" + (e - 1));
      if (o)
        o.focus();
      else if (e > 0)
        C(e - 1);
      else if (n.senderElementId) {
        const d = document.querySelector("#" + n.senderElementId);
        d && d.focus();
      }
    }
    function K() {
      m(n.treeNode.tabIndex ?? 0);
    }
    function m(e) {
      const o = document.querySelector("#" + n.treeId + "__" + (e + 1));
      o ? o.focus() : e <= n.maxTabIndex && e <= Number.MAX_SAFE_INTEGER && m(e + 1);
    }
    function T() {
      if (w(n.treeNode, new MouseEvent("click")), n.senderElementId && !n.multipleCheck && !n.treeNode.disabled && (n.onlyLeafCheck && (!n.treeNode.children || n.treeNode.children.length <= 0) || !n.onlyLeafCheck)) {
        const e = document.querySelector("#" + n.senderElementId);
        e && e.focus();
      }
    }
    function q() {
      n.treeNode.expanded = !0;
    }
    function H() {
      n.treeNode.expanded = !1;
    }
    return (e, o) => (r(), l("div", {
      class: h(["z-tree-node", E(e.treeNode)])
    }, [
      t("div", {
        class: h(["z-tree-node-anchor", z(e.treeNode)]),
        id: e.treeId + "__" + e.treeNode.tabIndex,
        tabIndex: e.treeNode.tabIndex,
        onKeydown: [
          c(a(K, ["prevent"]), ["down"]),
          c(a(M, ["prevent"]), ["up"]),
          c(a(H, ["prevent"]), ["left"]),
          c(a(q, ["prevent"]), ["right"]),
          c(a(T, ["prevent"]), ["enter"])
        ],
        onClick: o[3] || (o[3] = (d) => I(e.treeNode, d)),
        onDblclick: o[4] || (o[4] = (d) => A(e.treeNode, d))
      }, [
        e.hideExpander ? s("", !0) : (r(), l("span", Q, [
          e.treeNode.children && e.treeNode.children.length ? (r(), l("span", {
            key: 0,
            class: "z-tree-node-anchor-arrow-expander",
            onClick: o[0] || (o[0] = a((d) => f(e.treeNode), ["stop"]))
          }, [
            e.treeNode.expanded && e.showLine ? (r(), l("svg", Y, oe)) : s("", !0),
            e.treeNode.expanded && !e.showLine ? (r(), l("svg", ne, de)) : s("", !0),
            e.showLine && !e.treeNode.expanded ? (r(), l("svg", re, ie)) : s("", !0),
            !e.showLine && !e.treeNode.expanded ? (r(), l("svg", ae, he)) : s("", !0)
          ])) : e.hideLeafIcon ? s("", !0) : (r(), l("span", {
            key: 1,
            class: "z-tree-node-anchor-arrow-nochild",
            onClick: o[1] || (o[1] = a((d) => f(e.treeNode), ["stop"]))
          }, ke))
        ])),
        $(t("span", {
          class: h(["z-tree-node-anchor-checkbox", B(e.treeNode)])
        }, [
          t("span", {
            class: "z-tree-node-anchor-checkbox-icon",
            onClick: o[2] || (o[2] = a((d) => w(e.treeNode, d), ["stop"]))
          }, [
            e.treeNode.checked === 1 ? (r(), l("span", pe, we)) : e.treeNode.checked === 2 ? (r(), l("span", Ce, be)) : (r(), l("span", Ne, ve))
          ])
        ], 2), [
          [Z, e.multipleCheck || e.showCheckbox && !e.multipleCheck]
        ]),
        t("div", {
          class: h(["z-tree-node-anchor-content", e.hideLeafIcon && (!e.treeNode.children || e.treeNode.children.length <= 0) && !e.showCheckbox && !e.multipleCheck ? "z-tree-node-anchor-content-noicon-nocheckbox" : ""])
        }, [
          b(e.$slots, "default", { treeNode: e.treeNode }, () => [
            t("div", ge, [
              e.showId ? (r(), l("span", ze, N(e.treeNode.id), 1)) : s("", !0),
              e.showId ? (r(), l("span", {
                key: 1,
                class: "z-tree-node-anchor-content-separator",
                innerHTML: e.idSeparator
              }, null, 8, Ee)) : s("", !0),
              t("span", Be, N(e.treeNode.label), 1)
            ])
          ])
        ], 2)
      ], 42, P),
      F(U, {
        name: e.transition,
        mode: "out-in"
      }, {
        default: y(() => [
          e.treeNode.expanded ? (r(), l("div", Ie, [
            e.treeNode.expanded ? (r(!0), l(G, { key: 0 }, O(e.treeNode.children, (d, j) => (r(), R(X(Ae), {
              "sender-element-id": e.senderElementId,
              mode: "out-in",
              key: d.id ? d.id : j,
              "tree-id": e.treeId,
              "max-tab-index": e.maxTabIndex,
              cascade: e.cascade,
              showCheckbox: e.showCheckbox,
              transition: e.transition,
              showLine: e.showLine,
              expandAll: e.expandAll,
              checkedAll: e.checkedAll,
              multipleCheck: e.multipleCheck,
              onlyLeafCheck: e.onlyLeafCheck,
              enableDblclick: e.enableDblclick,
              enableWholeAnchorStatus: e.enableWholeAnchorStatus,
              enableCheckConfirm: e.enableCheckConfirm,
              showId: e.showId,
              idSeparator: e.idSeparator,
              hideLeafIcon: e.hideLeafIcon,
              hideExpander: e.hideExpander,
              nodeContentClickAction: e.nodeContentClickAction,
              treeNode: d,
              "checked-nodes": e.checkedNodes,
              expandKeys: e.expandKeys,
              onCheckboxClick: D,
              "onUpdate:expandNode": x,
              onNodeClick: L,
              onNodeDblclick: S
            }, {
              default: y((V) => [
                b(e.$slots, "default", {
                  treeNode: V.treeNode
                })
              ]),
              _: 2
            }, 1032, ["sender-element-id", "tree-id", "max-tab-index", "cascade", "showCheckbox", "transition", "showLine", "expandAll", "checkedAll", "multipleCheck", "onlyLeafCheck", "enableDblclick", "enableWholeAnchorStatus", "enableCheckConfirm", "showId", "idSeparator", "hideLeafIcon", "hideExpander", "nodeContentClickAction", "treeNode", "checked-nodes", "expandKeys"]))), 128)) : s("", !0)
          ])) : s("", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
export {
  Ae as default
};
