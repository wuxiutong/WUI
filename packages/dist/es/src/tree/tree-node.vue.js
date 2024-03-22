import { defineComponent as _, watch as I, openBlock as t, createElementBlock as r, normalizeClass as c, createElementVNode as n, withModifiers as h, createCommentVNode as i, withDirectives as M, vShow as T, renderSlot as w, toDisplayString as f, Fragment as H, renderList as j, createBlock as C, Transition as V, withCtx as b, unref as W } from "vue";
import "./style/tree-node.css";
import { TreeNodeContentClickActionEnum as K } from "./type.js";
const $ = {
  key: 0,
  class: "z-tree-node-anchor-arrow"
}, q = {
  key: 0,
  class: "z-tree-node-anchor-arrow-expander-minus",
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "-2 -2 16 16"
}, Z = /* @__PURE__ */ n("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "0.5",
  d: "M 1.2595435,6.004727 H 10.740457",
  style: { "stroke-width": "0.509454", "stroke-linecap": "square", "stroke-dasharray": "none" }
}, null, -1), F = [
  Z
], O = {
  key: 1,
  class: "z-tree-node-anchor-arrow-expander-arrow-down",
  width: "12",
  height: "12",
  version: "1.1",
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:svg": "http://www.w3.org/2000/svg"
}, U = /* @__PURE__ */ n("path", {
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
  viewBox: "-1 -1 14 14"
}, P = /* @__PURE__ */ n("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M 5.994727,1.254727 V 10.73564",
  id: "path1-8",
  style: { "stroke-width": "0.509454", "stroke-linecap": "square", "stroke-dasharray": "none" }
}, null, -1), Q = /* @__PURE__ */ n("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M 1.2595435,6.004727 H 10.740457",
  id: "path1",
  style: { "stroke-width": "0.509454", "stroke-linecap": "square", "stroke-dasharray": "none" }
}, null, -1), R = [
  P,
  Q
], X = {
  key: 3,
  class: "z-tree-node-anchor-arrow-expander-arrow-right",
  width: "12",
  height: "12",
  version: "1.1",
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:svg": "http://www.w3.org/2000/svg"
}, Y = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M 2.3,12 10.3,6.000001 2.3,0 Z",
  id: "path1",
  style: { "stroke-width": "1.38564" }
}, null, -1), ee = [
  Y
], oe = {
  key: 0,
  width: "14px",
  height: "14px",
  viewBox: "0 -30 256 300"
}, ne = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4"
}, null, -1), te = [
  ne
], re = {
  key: 1,
  class: "z-tree-node-anchor-arrow-nochild-noicon"
}, de = {
  key: 0,
  class: "z-tree-node-anchor-checkbox-icon-checked"
}, se = /* @__PURE__ */ n("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 3 12 12"
}, [
  /* @__PURE__ */ n("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.2919",
    d: "M 1.64595,9.2236174 4.5486491,12.354075 10.354047,5.64595",
    style: { "stroke-width": "1.5", "stroke-dasharray": "none" }
  })
], -1), le = [
  se
], ie = {
  key: 1,
  class: "z-tree-node-anchor-checkbox-icon-half-checked"
}, ae = /* @__PURE__ */ n("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 3 12 12"
}, [
  /* @__PURE__ */ n("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "1.2919",
    d: "M 1.73638,8.993499 4.2115414,9.013614 10.263617,8.98638",
    style: { "stroke-width": "1.47276", "stroke-linejoin": "round", "stroke-dasharray": "none" },
    "sodipodi:nodetypes": "ccc"
  })
], -1), ce = [
  ae
], he = {
  key: 2,
  class: "z-tree-node-anchor-checkbox-icon-unchecked"
}, ke = /* @__PURE__ */ n("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 0 0"
}, [
  /* @__PURE__ */ n("path", { fill: "currentColor" })
], -1), pe = [
  ke
], ue = { class: "z-tree-node-anchor-content" }, we = { class: "z-tree-node-anchor-content-default" }, fe = {
  key: 0,
  class: "z-tree-node-anchor-content-id"
}, Ce = ["innerHTML"], be = { class: "z-tree-node-anchor-content-label" }, me = { class: "z-tree-node-child" }, ye = {
  name: "TreeNode"
}, Ne = /* @__PURE__ */ _({
  ...ye,
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
    onlyLeafCheck: { type: Boolean, default: !0 },
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
  setup(m, { emit: y }) {
    const s = m;
    let k = null, a = !1;
    const l = y;
    I(
      () => s.treeNode,
      () => {
      }
    );
    function N(e) {
      let o = e.disabled ? "z-tree-node-anchor-disabled" : "";
      return (s.enableWholeAnchorStatus || !s.multipleCheck) && s.checkedNodes.some((d) => {
        if (e.id === d.id)
          return o += " z-tree-node-anchor-selected", !0;
      }), o;
    }
    function v(e) {
      if (e.children && e.children.length > 0 && s.onlyLeafCheck && (!s.multipleCheck || !s.cascade))
        return "z-tree-node-anchor-checkbox-disabled";
    }
    function g(e, o) {
      s.enableDblclick ? (a = !1, k = setTimeout(() => {
        a || p(e, o);
      }, 200)) : p(e, o);
    }
    function p(e, o) {
      l("node-click", e, o);
    }
    function z(e, o) {
      l("node-click", e, o);
    }
    function B(e, o) {
      s.enableDblclick && (a = !0, clearTimeout(k), l("node-dblclick", e, o));
    }
    function L(e, o) {
      l("node-dblclick", e, o);
    }
    function u(e) {
      l("update:expandNode", e);
    }
    function A(e) {
      l("update:expandNode", e);
    }
    function E(e, o) {
      l("checkbox-click", e, o);
    }
    function x(e, o) {
      l("checkbox-click", e, o);
    }
    return (e, o) => (t(), r("div", {
      class: c(["z-tree-node", e.showLine ? "z-tree-node-line" : ""])
    }, [
      n("div", {
        class: c(["z-tree-node-anchor", N(e.treeNode)]),
        onClick: o[3] || (o[3] = (d) => g(e.treeNode, d)),
        onDblclick: o[4] || (o[4] = (d) => B(e.treeNode, d))
      }, [
        e.hideExpander ? i("", !0) : (t(), r("span", $, [
          e.treeNode.children && e.treeNode.children.length ? (t(), r("span", {
            key: 0,
            class: "z-tree-node-anchor-arrow-expander",
            onClick: o[0] || (o[0] = h((d) => u(e.treeNode), ["stop"]))
          }, [
            e.treeNode.expanded && e.showLine ? (t(), r("svg", q, F)) : i("", !0),
            e.treeNode.expanded && !e.showLine ? (t(), r("svg", O, G)) : i("", !0),
            e.showLine && !e.treeNode.expanded ? (t(), r("svg", J, R)) : i("", !0),
            !e.showLine && !e.treeNode.expanded ? (t(), r("svg", X, ee)) : i("", !0)
          ])) : (t(), r("span", {
            key: 1,
            class: "z-tree-node-anchor-arrow-nochild",
            onClick: o[1] || (o[1] = h((d) => u(e.treeNode), ["stop"]))
          }, [
            e.hideLeafIcon ? (t(), r("div", re)) : (t(), r("svg", oe, te))
          ]))
        ])),
        M(n("span", {
          class: c(["z-tree-node-anchor-checkbox", v(e.treeNode)])
        }, [
          n("span", {
            class: "z-tree-node-anchor-checkbox-icon",
            onClick: o[2] || (o[2] = h((d) => E(e.treeNode, d), ["stop"]))
          }, [
            e.treeNode.checked === 1 ? (t(), r("span", de, le)) : e.treeNode.checked === 2 ? (t(), r("span", ie, ce)) : (t(), r("span", he, pe))
          ])
        ], 2), [
          [T, e.multipleCheck || e.showCheckbox && !e.multipleCheck]
        ]),
        n("div", ue, [
          w(e.$slots, "node-content", { treeNode: e.treeNode }, () => [
            n("div", we, [
              e.showId ? (t(), r("span", fe, f(e.treeNode.id), 1)) : i("", !0),
              e.showId ? (t(), r("span", {
                key: 1,
                class: "z-tree-node-anchor-content-separator",
                innerHTML: e.idSeparator
              }, null, 8, Ce)) : i("", !0),
              n("span", be, f(e.treeNode.label), 1)
            ])
          ])
        ])
      ], 34),
      n("div", me, [
        (t(!0), r(H, null, j(e.treeNode.children, (d, S) => (t(), C(V, {
          name: e.transition,
          key: d.id ? d.id : S
        }, {
          default: b(() => [
            e.treeNode.expanded ? (t(), C(W(Ne), {
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
              treeNode: d,
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
            }, 1032, ["cascade", "showCheckbox", "transition", "showLine", "expandAll", "checkedAll", "multipleCheck", "onlyLeafCheck", "enableDblclick", "enableWholeAnchorStatus", "enableCheckConfirm", "showId", "idSeparator", "hideLeafIcon", "hideExpander", "nodeContentClickAction", "treeNode", "checked-nodes", "expandKeys"])) : i("", !0)
          ]),
          _: 2
        }, 1032, ["name"]))), 128))
      ])
    ], 2));
  }
});
export {
  Ne as default
};
