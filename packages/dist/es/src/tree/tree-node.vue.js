import { defineComponent as I, watch as M, openBlock as n, createElementBlock as d, normalizeClass as c, createElementVNode as t, withModifiers as h, createCommentVNode as a, withDirectives as _, vShow as T, renderSlot as w, toDisplayString as f, Fragment as H, renderList as V, createBlock as C, Transition as W, withCtx as b, unref as j } from "vue";
import "./style/tree-node.css";
import { TreeNodeContentClickActionEnum as K } from "./type.js";
const $ = {
  key: 0,
  class: "z-tree-node-anchor-arrow"
}, Z = {
  key: 0,
  class: "z-tree-node-anchor-arrow-expander-minus",
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 12 12"
}, q = /* @__PURE__ */ t("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "0.5",
  d: "M 1.2595435,6.004727 H 10.740457",
  style: { "stroke-width": "0.509454", "stroke-linecap": "square", "stroke-dasharray": "none" }
}, null, -1), F = [
  q
], O = {
  key: 1,
  class: "z-tree-node-anchor-arrow-expander-arrow-down",
  width: "12",
  height: "12",
  version: "1.1",
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:svg": "http://www.w3.org/2000/svg"
}, U = /* @__PURE__ */ t("path", {
  fill: "currentColor",
  d: "m 0,2.3 5.999999,8 L 12,2.3 Z",
  id: "path1",
  style: { "stroke-width": "1.38564" }
}, null, -1), G = [
  U
], J = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "z-tree-node-anchor-arrow-expander-plus",
  width: "100%",
  height: "100%",
  viewBox: "0 0 256 256"
}, P = /* @__PURE__ */ t("path", {
  fill: "currentColor",
  d: "M222 128a6 6 0 0 1-6 6h-82v82a6 6 0 0 1-12 0v-82H40a6 6 0 0 1 0-12h82V40a6 6 0 0 1 12 0v82h82a6 6 0 0 1 6 6"
}, null, -1), Q = [
  P
], R = {
  key: 3,
  class: "z-tree-node-anchor-arrow-expander-arrow-right",
  width: "12",
  height: "12",
  version: "1.1",
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:svg": "http://www.w3.org/2000/svg"
}, X = /* @__PURE__ */ t("path", {
  fill: "currentColor",
  d: "M 2.3,12 10.3,6.000001 2.3,0 Z",
  id: "path1",
  style: { "stroke-width": "1.38564" }
}, null, -1), Y = [
  X
], ee = {
  key: 0,
  width: "14px",
  height: "14px",
  viewBox: "0 -30 256 300"
}, oe = /* @__PURE__ */ t("path", {
  fill: "currentColor",
  d: "m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4"
}, null, -1), ne = [
  oe
], te = {
  key: 1,
  class: "z-tree-node-anchor-arrow-nochild-noicon"
}, de = {
  key: 0,
  class: "z-tree-node-anchor-checkbox-icon-checked"
}, le = /* @__PURE__ */ t("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
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
], -1), se = [
  le
], re = {
  key: 1,
  class: "z-tree-node-anchor-checkbox-icon-half-checked"
}, ae = /* @__PURE__ */ t("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
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
], -1), ie = [
  ae
], ce = {
  key: 2,
  class: "z-tree-node-anchor-checkbox-icon-unchecked"
}, he = /* @__PURE__ */ t("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 0 0"
}, [
  /* @__PURE__ */ t("path", { fill: "currentColor" })
], -1), ke = [
  he
], pe = { class: "z-tree-node-anchor-content" }, ue = { class: "z-tree-node-anchor-content-default" }, we = {
  key: 0,
  class: "z-tree-node-anchor-content-id"
}, fe = ["innerHTML"], Ce = { class: "z-tree-node-anchor-content-label" }, be = { class: "z-tree-node-child" }, me = {
  name: "TreeNode"
}, ve = /* @__PURE__ */ I({
  ...me,
  props: {
    treeNode: {},
    checkedNodes: { default: () => [] },
    expandKeys: { default: () => [] },
    cascade: { type: Boolean, default: !0 },
    showCheckbox: { type: Boolean, default: !1 },
    transition: { default: "slide-fade" },
    showLine: { type: Boolean, default: !0 },
    expandAll: { type: Boolean, default: !1 },
    checkedAll: { type: Boolean },
    multipleCheck: { type: Boolean, default: !0 },
    onlyLeafCheck: { type: Boolean, default: !1 },
    enableDblclick: { type: Boolean, default: !1 },
    enableWholeAnchorStatus: { type: Boolean, default: !1 },
    enableCheckConfirm: { type: Boolean, default: !1 },
    showId: { type: Boolean, default: !1 },
    idSeparator: { default: "" },
    hideLeafIcon: { type: Boolean, default: !1 },
    hideExpander: { type: Boolean, default: !1 },
    nodeContentClickAction: { default: K.NONE }
  },
  emits: ["update:checkedNode", "update:expandNode", "checkbox-click", "node-click", "node-dblclick"],
  setup(m, { emit: v }) {
    const s = m;
    let k = null, i = !1;
    const r = v;
    M(
      () => s.treeNode,
      () => {
      }
    );
    function N(e) {
      let o = e.disabled ? "z-tree-node-anchor-disabled" : "";
      return (s.enableWholeAnchorStatus || !s.multipleCheck) && s.checkedNodes.some((l) => {
        if (e.id === l.id)
          return o += " z-tree-node-anchor-selected", !0;
      }), o;
    }
    function y(e) {
      if (e.children && e.children.length > 0 && s.onlyLeafCheck && (!s.multipleCheck || !s.cascade))
        return "z-tree-node-anchor-checkbox-disabled";
    }
    function g(e, o) {
      s.enableDblclick ? (i = !1, k = setTimeout(() => {
        i || p(e, o);
      }, 200)) : p(e, o);
    }
    function p(e, o) {
      r("node-click", e, o);
    }
    function z(e, o) {
      r("node-click", e, o);
    }
    function B(e, o) {
      s.enableDblclick && (i = !0, clearTimeout(k), r("node-dblclick", e, o));
    }
    function L(e, o) {
      r("node-dblclick", e, o);
    }
    function u(e) {
      r("update:expandNode", e);
    }
    function A(e) {
      r("update:expandNode", e);
    }
    function E(e, o) {
      r("checkbox-click", e, o);
    }
    function x(e, o) {
      r("checkbox-click", e, o);
    }
    return (e, o) => (n(), d("div", {
      class: c(["z-tree-node", e.showLine ? "z-tree-node-line" : ""])
    }, [
      t("div", {
        class: c(["z-tree-node-anchor", N(e.treeNode)]),
        onClick: o[3] || (o[3] = (l) => g(e.treeNode, l)),
        onDblclick: o[4] || (o[4] = (l) => B(e.treeNode, l))
      }, [
        e.hideExpander ? a("", !0) : (n(), d("span", $, [
          e.treeNode.children && e.treeNode.children.length ? (n(), d("span", {
            key: 0,
            class: "z-tree-node-anchor-arrow-expander",
            onClick: o[0] || (o[0] = h((l) => u(e.treeNode), ["stop"]))
          }, [
            e.treeNode.expanded && e.showLine ? (n(), d("svg", Z, F)) : a("", !0),
            e.treeNode.expanded && !e.showLine ? (n(), d("svg", O, G)) : a("", !0),
            e.showLine && !e.treeNode.expanded ? (n(), d("svg", J, Q)) : a("", !0),
            !e.showLine && !e.treeNode.expanded ? (n(), d("svg", R, Y)) : a("", !0)
          ])) : (n(), d("span", {
            key: 1,
            class: "z-tree-node-anchor-arrow-nochild",
            onClick: o[1] || (o[1] = h((l) => u(e.treeNode), ["stop"]))
          }, [
            e.hideLeafIcon ? (n(), d("div", te)) : (n(), d("svg", ee, ne))
          ]))
        ])),
        _(t("span", {
          class: c(["z-tree-node-anchor-checkbox", y(e.treeNode)])
        }, [
          t("span", {
            class: "z-tree-node-anchor-checkbox-icon",
            onClick: o[2] || (o[2] = h((l) => E(e.treeNode, l), ["stop"]))
          }, [
            e.treeNode.checked === 1 ? (n(), d("span", de, se)) : e.treeNode.checked === 2 ? (n(), d("span", re, ie)) : (n(), d("span", ce, ke))
          ])
        ], 2), [
          [T, e.multipleCheck || e.showCheckbox && !e.multipleCheck]
        ]),
        t("div", pe, [
          w(e.$slots, "node-content", { treeNode: e.treeNode }, () => [
            t("div", ue, [
              e.showId ? (n(), d("span", we, f(e.treeNode.id), 1)) : a("", !0),
              e.showId ? (n(), d("span", {
                key: 1,
                class: "z-tree-node-anchor-content-separator",
                innerHTML: e.idSeparator
              }, null, 8, fe)) : a("", !0),
              t("span", Ce, f(e.treeNode.label), 1)
            ])
          ])
        ])
      ], 34),
      t("div", be, [
        (n(!0), d(H, null, V(e.treeNode.children, (l, S) => (n(), C(W, {
          name: e.transition,
          key: l.id ? l.id : S
        }, {
          default: b(() => [
            e.treeNode.expanded ? (n(), C(j(ve), {
              key: 0,
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
              treeNode: l,
              "checked-nodes": e.checkedNodes,
              expandKeys: e.expandKeys,
              onCheckboxClick: x,
              "onUpdate:expandNode": A,
              onNodeClick: z,
              onNodeDblclick: L
            }, {
              "node-content": b((D) => [
                w(e.$slots, "node-content", {
                  treeNode: D.treeNode
                })
              ]),
              _: 2
            }, 1032, ["cascade", "showCheckbox", "transition", "showLine", "expandAll", "checkedAll", "multipleCheck", "onlyLeafCheck", "enableDblclick", "enableWholeAnchorStatus", "enableCheckConfirm", "showId", "idSeparator", "hideLeafIcon", "hideExpander", "nodeContentClickAction", "treeNode", "checked-nodes", "expandKeys"])) : a("", !0)
          ]),
          _: 2
        }, 1032, ["name"]))), 128))
      ])
    ], 2));
  }
});
export {
  ve as default
};
