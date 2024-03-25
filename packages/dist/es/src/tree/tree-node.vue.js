import { defineComponent as x, watch as I, openBlock as t, createElementBlock as r, normalizeClass as i, createElementVNode as n, withModifiers as h, createCommentVNode as l, withDirectives as M, vShow as T, renderSlot as w, toDisplayString as f, createVNode as H, Transition as j, withCtx as C, Fragment as V, renderList as W, createBlock as K, unref as $ } from "vue";
import "./style/tree-node.css";
import { TreeNodeContentClickActionEnum as q } from "./type.js";
const Z = {
  key: 0,
  class: "z-tree-node-anchor-arrow"
}, F = {
  key: 0,
  class: "z-tree-node-anchor-arrow-expander-minus",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 16 16"
}, O = /* @__PURE__ */ n("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "0.5",
  d: "M 1.2595435,6.004727 H 10.740457",
  style: { "stroke-width": "0.509454", "stroke-linecap": "square", "stroke-dasharray": "none" }
}, null, -1), U = [
  O
], G = {
  key: 1,
  class: "z-tree-node-anchor-arrow-expander-arrow-down",
  width: "12",
  height: "12",
  version: "1.1",
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:svg": "http://www.w3.org/2000/svg"
}, J = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "m 0,2.3 5.999999,8 L 12,2.3 Z",
  id: "path1",
  style: { "stroke-width": "1.38564" }
}, null, -1), P = [
  J
], Q = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "z-tree-node-anchor-arrow-expander-plus",
  viewBox: "-1 -1 14 14"
}, R = /* @__PURE__ */ n("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M 5.994727,1.254727 V 10.73564",
  id: "path1-8",
  style: { "stroke-width": "0.509454", "stroke-linecap": "square", "stroke-dasharray": "none" }
}, null, -1), X = /* @__PURE__ */ n("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M 1.2595435,6.004727 H 10.740457",
  id: "path1",
  style: { "stroke-width": "0.509454", "stroke-linecap": "square", "stroke-dasharray": "none" }
}, null, -1), Y = [
  R,
  X
], _ = {
  key: 3,
  class: "z-tree-node-anchor-arrow-expander-arrow-right",
  width: "12",
  height: "12",
  version: "1.1",
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:svg": "http://www.w3.org/2000/svg"
}, ee = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M 2.3,12 10.3,6.000001 2.3,0 Z",
  id: "path1",
  style: { "stroke-width": "1.38564" }
}, null, -1), oe = [
  ee
], ne = /* @__PURE__ */ n("svg", {
  width: "14px",
  height: "14px",
  viewBox: "0 -30 256 300"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4"
  })
], -1), te = [
  ne
], re = {
  key: 0,
  class: "z-tree-node-anchor-checkbox-icon-checked"
}, de = /* @__PURE__ */ n("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
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
  de
], se = {
  key: 1,
  class: "z-tree-node-anchor-checkbox-icon-half-checked"
}, ae = /* @__PURE__ */ n("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
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
], -1), ie = [
  ae
], ce = {
  key: 2,
  class: "z-tree-node-anchor-checkbox-icon-unchecked"
}, he = /* @__PURE__ */ n("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 0 0"
}, [
  /* @__PURE__ */ n("path", { fill: "currentColor" })
], -1), ke = [
  he
], ue = { class: "z-tree-node-anchor-content-default" }, pe = {
  key: 0,
  class: "z-tree-node-anchor-content-id"
}, we = ["innerHTML"], fe = { class: "z-tree-node-anchor-content-label" }, Ce = {
  key: 0,
  class: "z-tree-node-child"
}, be = {
  name: "TreeNode"
}, Ne = /* @__PURE__ */ x({
  ...be,
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
    nodeContentClickAction: { default: q.NONE }
  },
  emits: ["update:checkedNode", "update:expandNode", "checkbox-click", "node-click", "node-dblclick"],
  setup(b, { emit: N }) {
    const s = b;
    let k = null, c = !1;
    const a = N;
    I(
      () => s.treeNode,
      () => {
      }
    );
    function y(e) {
      let o = e.disabled ? "z-tree-node-anchor-disabled" : "";
      return (s.enableWholeAnchorStatus || !s.multipleCheck) && s.checkedNodes.some((d) => {
        if (e.id === d.id)
          return o += " z-tree-node-anchor-selected", !0;
      }), o;
    }
    function m(e) {
      if (e.children && e.children.length > 0 && s.onlyLeafCheck && (!s.multipleCheck || !s.cascade))
        return "z-tree-node-anchor-checkbox-disabled";
    }
    function v(e, o) {
      s.enableDblclick ? (c = !1, k = setTimeout(() => {
        c || u(e, o);
      }, 200)) : u(e, o);
    }
    function u(e, o) {
      a("node-click", e, o);
    }
    function g(e, o) {
      a("node-click", e, o);
    }
    function z(e, o) {
      s.enableDblclick && (c = !0, clearTimeout(k), a("node-dblclick", e, o));
    }
    function B(e, o) {
      a("node-dblclick", e, o);
    }
    function p(e) {
      a("update:expandNode", e);
    }
    function L(e) {
      a("update:expandNode", e);
    }
    function A(e, o) {
      a("checkbox-click", e, o);
    }
    function E(e, o) {
      a("checkbox-click", e, o);
    }
    return (e, o) => (t(), r("div", {
      class: i(["z-tree-node", e.showLine ? "z-tree-node-line" : ""])
    }, [
      n("div", {
        class: i(["z-tree-node-anchor", y(e.treeNode)]),
        onClick: o[3] || (o[3] = (d) => v(e.treeNode, d)),
        onDblclick: o[4] || (o[4] = (d) => z(e.treeNode, d))
      }, [
        e.hideExpander ? l("", !0) : (t(), r("span", Z, [
          e.treeNode.children && e.treeNode.children.length ? (t(), r("span", {
            key: 0,
            class: "z-tree-node-anchor-arrow-expander",
            onClick: o[0] || (o[0] = h((d) => p(e.treeNode), ["stop"]))
          }, [
            e.treeNode.expanded && e.showLine ? (t(), r("svg", F, U)) : l("", !0),
            e.treeNode.expanded && !e.showLine ? (t(), r("svg", G, P)) : l("", !0),
            e.showLine && !e.treeNode.expanded ? (t(), r("svg", Q, Y)) : l("", !0),
            !e.showLine && !e.treeNode.expanded ? (t(), r("svg", _, oe)) : l("", !0)
          ])) : e.hideLeafIcon ? l("", !0) : (t(), r("span", {
            key: 1,
            class: "z-tree-node-anchor-arrow-nochild",
            onClick: o[1] || (o[1] = h((d) => p(e.treeNode), ["stop"]))
          }, te))
        ])),
        M(n("span", {
          class: i(["z-tree-node-anchor-checkbox", m(e.treeNode)])
        }, [
          n("span", {
            class: "z-tree-node-anchor-checkbox-icon",
            onClick: o[2] || (o[2] = h((d) => A(e.treeNode, d), ["stop"]))
          }, [
            e.treeNode.checked === 1 ? (t(), r("span", re, le)) : e.treeNode.checked === 2 ? (t(), r("span", se, ie)) : (t(), r("span", ce, ke))
          ])
        ], 2), [
          [T, e.multipleCheck || e.showCheckbox && !e.multipleCheck]
        ]),
        n("div", {
          class: i(["z-tree-node-anchor-content", e.hideLeafIcon && (!e.treeNode.children || e.treeNode.children.length <= 0) && !e.showCheckbox && !e.multipleCheck ? "z-tree-node-anchor-content-noicon-nocheckbox" : ""])
        }, [
          w(e.$slots, "default", { treeNode: e.treeNode }, () => [
            n("div", ue, [
              e.showId ? (t(), r("span", pe, f(e.treeNode.id), 1)) : l("", !0),
              e.showId ? (t(), r("span", {
                key: 1,
                class: "z-tree-node-anchor-content-separator",
                innerHTML: e.idSeparator
              }, null, 8, we)) : l("", !0),
              n("span", fe, f(e.treeNode.label), 1)
            ])
          ])
        ], 2)
      ], 34),
      H(j, {
        name: e.transition,
        mode: "out-in"
      }, {
        default: C(() => [
          e.treeNode.expanded ? (t(), r("div", Ce, [
            e.treeNode.expanded ? (t(!0), r(V, { key: 0 }, W(e.treeNode.children, (d, S) => (t(), K($(Ne), {
              mode: "out-in",
              key: d.id ? d.id : S,
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
              onCheckboxClick: E,
              "onUpdate:expandNode": L,
              onNodeClick: g,
              onNodeDblclick: B
            }, {
              default: C((D) => [
                w(e.$slots, "default", {
                  treeNode: D.treeNode
                })
              ]),
              _: 2
            }, 1032, ["cascade", "showCheckbox", "transition", "showLine", "expandAll", "checkedAll", "multipleCheck", "onlyLeafCheck", "enableDblclick", "enableWholeAnchorStatus", "enableCheckConfirm", "showId", "idSeparator", "hideLeafIcon", "hideExpander", "nodeContentClickAction", "treeNode", "checked-nodes", "expandKeys"]))), 128)) : l("", !0)
          ])) : l("", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
export {
  Ne as default
};
