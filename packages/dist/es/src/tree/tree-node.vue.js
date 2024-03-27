import { defineComponent as Z, watch as F, openBlock as r, createElementBlock as l, normalizeClass as u, createElementVNode as t, withKeys as h, withModifiers as i, createCommentVNode as s, withDirectives as U, vShow as G, renderSlot as v, toDisplayString as g, createVNode as O, Transition as R, withCtx as E, Fragment as X, renderList as J, createBlock as P, unref as Q } from "vue";
import "./style/tree-node.css";
import { TreeNodeContentClickActionEnum as Y } from "./type.js";
const ee = ["id", "tabIndex", "onKeydown"], oe = {
  key: 0,
  class: "z-tree-node-anchor-arrow"
}, ne = {
  key: 0,
  class: "z-tree-node-anchor-arrow-expander-minus",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 16 16"
}, te = /* @__PURE__ */ t("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "0.5",
  d: "M 1.2595435,6.004727 H 10.740457",
  style: { "stroke-width": "0.509454", "stroke-linecap": "square", "stroke-dasharray": "none" }
}, null, -1), de = [
  te
], re = {
  key: 1,
  class: "z-tree-node-anchor-arrow-expander-arrow-down",
  width: "12",
  height: "12",
  version: "1.1",
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:svg": "http://www.w3.org/2000/svg"
}, le = /* @__PURE__ */ t("path", {
  fill: "currentColor",
  d: "m 0,2.3 5.999999,8 L 12,2.3 Z",
  id: "path1",
  style: { "stroke-width": "1.38564" }
}, null, -1), se = [
  le
], ie = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "z-tree-node-anchor-arrow-expander-plus",
  viewBox: "-1 -1 14 14"
}, ae = /* @__PURE__ */ t("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M 5.994727,1.254727 V 10.73564",
  id: "path1-8",
  style: { "stroke-width": "0.509454", "stroke-linecap": "square", "stroke-dasharray": "none" }
}, null, -1), ce = /* @__PURE__ */ t("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M 1.2595435,6.004727 H 10.740457",
  id: "path1",
  style: { "stroke-width": "0.509454", "stroke-linecap": "square", "stroke-dasharray": "none" }
}, null, -1), he = [
  ae,
  ce
], ue = {
  key: 3,
  class: "z-tree-node-anchor-arrow-expander-arrow-right",
  width: "12",
  height: "12",
  version: "1.1",
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:svg": "http://www.w3.org/2000/svg"
}, ke = /* @__PURE__ */ t("path", {
  fill: "currentColor",
  d: "M 2.3,12 10.3,6.000001 2.3,0 Z",
  id: "path1",
  style: { "stroke-width": "1.38564" }
}, null, -1), pe = [
  ke
], fe = /* @__PURE__ */ t("svg", {
  width: "14px",
  height: "14px",
  viewBox: "0 -30 256 300"
}, [
  /* @__PURE__ */ t("path", {
    fill: "currentColor",
    d: "m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4"
  })
], -1), we = [
  fe
], me = {
  key: 0,
  class: "z-tree-node-anchor-checkbox-icon-checked"
}, Ce = /* @__PURE__ */ t("svg", {
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
], -1), ye = [
  Ce
], Ne = {
  key: 1,
  class: "z-tree-node-anchor-checkbox-icon-half-checked"
}, be = /* @__PURE__ */ t("svg", {
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
], -1), ve = [
  be
], ge = {
  key: 2,
  class: "z-tree-node-anchor-checkbox-icon-unchecked"
}, Ee = /* @__PURE__ */ t("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 0 0"
}, [
  /* @__PURE__ */ t("path", { fill: "currentColor" })
], -1), Ie = [
  Ee
], Be = { class: "z-tree-node-anchor-content-default" }, Le = {
  key: 0,
  class: "z-tree-node-anchor-content-id"
}, ze = ["innerHTML"], xe = { class: "z-tree-node-anchor-content-label" }, Ae = {
  key: 0,
  class: "z-tree-node-child"
}, De = {
  name: "TreeNode"
}, Ke = /* @__PURE__ */ Z({
  ...De,
  props: {
    treeNode: {},
    checkedNodes: { default: () => [] },
    expandKeys: { default: () => [] },
    maxTabIndex: {},
    treeNodeList: { default: () => [] },
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
    nodeContentClickAction: { default: Y.NONE },
    senderElementId: { default: "" },
    treeId: { default: "" },
    focusedId: {}
  },
  emits: ["update:checkedNode", "update:expandNode", "checkbox-click", "node-click", "node-dblclick"],
  setup(I, { emit: B }) {
    const n = I;
    let w = null, k = !1;
    const a = B;
    F(
      () => n.treeNode,
      () => {
      }
    );
    function L(e) {
      let o = e.disabled ? "z-tree-node-anchor-disabled" : "";
      return (n.enableWholeAnchorStatus || !n.multipleCheck) && n.checkedNodes.some((d) => {
        if (e.id === d.id)
          return o += " z-tree-node-anchor-selected", !0;
      }), o;
    }
    function z(e) {
      let o = "";
      return n.showLine && (o += " z-tree-node-line"), o;
    }
    function x(e) {
      if (e.children && e.children.length > 0 && n.onlyLeafCheck && (!n.multipleCheck || !n.cascade))
        return "z-tree-node-anchor-checkbox-disabled";
    }
    function A(e, o) {
      n.enableDblclick ? (k = !1, w = setTimeout(() => {
        k || m(e, o);
      }, 200)) : m(e, o);
    }
    function m(e, o) {
      a("node-click", e, o);
    }
    function D(e, o) {
      a("node-click", e, o);
    }
    function K(e, o) {
      n.enableDblclick && (k = !0, clearTimeout(w), a("node-dblclick", e, o));
    }
    function S(e, o) {
      a("node-dblclick", e, o);
    }
    function C(e) {
      a("update:expandNode", e);
    }
    function M(e) {
      a("update:expandNode", e);
    }
    function y(e, o) {
      a("checkbox-click", e, o);
    }
    function T(e, o) {
      a("checkbox-click", e, o);
    }
    function _() {
      if (n.senderElementId) {
        const e = document.getElementById(n.senderElementId);
        e && e.focus();
      }
    }
    function H() {
      N(n.treeNode.tabIndex ?? 0);
    }
    function N(e) {
      const o = document.getElementById(n.treeId + "__" + (e - 1));
      o ? o.focus() : e > 0 && N(e - 1);
    }
    function j() {
      b(n.treeNode.tabIndex ?? 0);
    }
    function b(e) {
      const o = document.getElementById(n.treeId + "__" + (e + 1));
      o ? o.focus() : e <= n.maxTabIndex && e <= Number.MAX_SAFE_INTEGER && b(e + 1);
    }
    function V() {
      if (y(n.treeNode, new MouseEvent("click")), n.senderElementId && !n.multipleCheck && !n.treeNode.disabled && (n.onlyLeafCheck && (!n.treeNode.children || n.treeNode.children.length <= 0) || !n.onlyLeafCheck)) {
        const e = document.getElementById(n.senderElementId);
        e && e.focus();
      }
    }
    function p(e) {
      e.expanded || (e.expanded = !0), e.children && e.children.length > 0 && e.children.forEach((o) => {
        p(o);
      });
    }
    function f(e) {
      e.expanded && (e.expanded = !1), e.children && e.children.length > 0 && e.children.forEach((o) => {
        f(o);
      });
    }
    function W(e) {
      e.ctrlKey && e.shiftKey ? n.treeNodeList.forEach((o) => {
        p(o);
      }) : e.shiftKey ? p(n.treeNode) : n.treeNode.expanded = !0;
    }
    function $(e) {
      if (e.ctrlKey && e.shiftKey) {
        n.treeNodeList.forEach((c) => {
          f(c);
        });
        let o = n.treeNode;
        for (; o.__parent; )
          o = o.__parent;
        const d = document.getElementById(n.treeId + "__" + o.tabIndex);
        if (d)
          d.focus();
        else {
          const c = document.getElementById(n.treeId + "__1");
          c && c.focus();
        }
      } else
        e.shiftKey ? f(n.treeNode) : n.treeNode.expanded = !1;
    }
    return (e, o) => (r(), l("div", {
      class: u(["z-tree-node", z(e.treeNode)])
    }, [
      t("div", {
        class: u(["z-tree-node-anchor", L(e.treeNode)]),
        id: e.treeId + "__" + e.treeNode.tabIndex,
        tabIndex: e.treeNode.tabIndex,
        onKeydown: [
          h(i(j, ["prevent"]), ["down"]),
          h(i(H, ["prevent"]), ["up"]),
          h(i(_, ["prevent"]), ["esc"]),
          h(i($, ["prevent"]), ["left"]),
          h(i(W, ["prevent"]), ["right"]),
          h(i(V, ["prevent"]), ["enter"])
        ],
        onClick: o[3] || (o[3] = (d) => A(e.treeNode, d)),
        onDblclick: o[4] || (o[4] = (d) => K(e.treeNode, d))
      }, [
        e.hideExpander ? s("", !0) : (r(), l("span", oe, [
          e.treeNode.children && e.treeNode.children.length ? (r(), l("span", {
            key: 0,
            class: "z-tree-node-anchor-arrow-expander",
            onClick: o[0] || (o[0] = i((d) => C(e.treeNode), ["stop"]))
          }, [
            e.treeNode.expanded && e.showLine ? (r(), l("svg", ne, de)) : s("", !0),
            e.treeNode.expanded && !e.showLine ? (r(), l("svg", re, se)) : s("", !0),
            e.showLine && !e.treeNode.expanded ? (r(), l("svg", ie, he)) : s("", !0),
            !e.showLine && !e.treeNode.expanded ? (r(), l("svg", ue, pe)) : s("", !0)
          ])) : e.hideLeafIcon ? s("", !0) : (r(), l("span", {
            key: 1,
            class: "z-tree-node-anchor-arrow-nochild",
            onClick: o[1] || (o[1] = i((d) => C(e.treeNode), ["stop"]))
          }, we))
        ])),
        U(t("span", {
          class: u(["z-tree-node-anchor-checkbox", x(e.treeNode)])
        }, [
          t("span", {
            class: "z-tree-node-anchor-checkbox-icon",
            onClick: o[2] || (o[2] = i((d) => y(e.treeNode, d), ["stop"]))
          }, [
            e.treeNode.checked === 1 ? (r(), l("span", me, ye)) : e.treeNode.checked === 2 ? (r(), l("span", Ne, ve)) : (r(), l("span", ge, Ie))
          ])
        ], 2), [
          [G, e.multipleCheck || e.showCheckbox && !e.multipleCheck]
        ]),
        t("div", {
          class: u(["z-tree-node-anchor-content", e.hideLeafIcon && (!e.treeNode.children || e.treeNode.children.length <= 0) && !e.showCheckbox && !e.multipleCheck ? "z-tree-node-anchor-content-noicon-nocheckbox" : ""])
        }, [
          v(e.$slots, "default", { treeNode: e.treeNode }, () => [
            t("div", Be, [
              e.showId ? (r(), l("span", Le, g(e.treeNode.id), 1)) : s("", !0),
              e.showId ? (r(), l("span", {
                key: 1,
                class: "z-tree-node-anchor-content-separator",
                innerHTML: e.idSeparator
              }, null, 8, ze)) : s("", !0),
              t("span", xe, g(e.treeNode.label), 1)
            ])
          ])
        ], 2)
      ], 42, ee),
      O(R, {
        name: e.transition,
        mode: "out-in"
      }, {
        default: E(() => [
          e.treeNode.expanded ? (r(), l("div", Ae, [
            e.treeNode.expanded ? (r(!0), l(X, { key: 0 }, J(e.treeNode.children, (d, c) => (r(), P(Q(Ke), {
              "sender-element-id": e.senderElementId,
              mode: "out-in",
              "tree-node-list": e.treeNodeList,
              key: d.id ? d.id : c,
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
              onCheckboxClick: T,
              "onUpdate:expandNode": M,
              onNodeClick: D,
              onNodeDblclick: S
            }, {
              default: E((q) => [
                v(e.$slots, "default", {
                  treeNode: q.treeNode
                })
              ]),
              _: 2
            }, 1032, ["sender-element-id", "tree-node-list", "tree-id", "max-tab-index", "cascade", "showCheckbox", "transition", "showLine", "expandAll", "checkedAll", "multipleCheck", "onlyLeafCheck", "enableDblclick", "enableWholeAnchorStatus", "enableCheckConfirm", "showId", "idSeparator", "hideLeafIcon", "hideExpander", "nodeContentClickAction", "treeNode", "checked-nodes", "expandKeys"]))), 128)) : s("", !0)
          ])) : s("", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
export {
  Ke as default
};
