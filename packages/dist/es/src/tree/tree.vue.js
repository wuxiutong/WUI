import { defineComponent as P, reactive as T, ref as x, watch as u, openBlock as C, createElementBlock as g, unref as v, createElementVNode as V, toDisplayString as W, Fragment as z, renderList as F, createBlock as H, withCtx as U, renderSlot as X } from "vue";
import "./style/tree.css";
import j from "./tree-node.vue.js";
import { TreeNodeContentClickActionEnum as y } from "./type.js";
import { randomString as q } from "../utils/random.js";
const G = ["id"], J = {
  key: 0,
  class: "z-tree-empty-tips"
}, $ = /* @__PURE__ */ P({
  name: "wui-tree",
  __name: "tree",
  props: {
    data: { default: () => [] },
    checkedKeys: { default: () => [] },
    expandKeys: { default: () => [] },
    emptyTips: { default: "无数据" },
    cascade: { type: Boolean, default: !0 },
    showCheckbox: { type: Boolean, default: !1 },
    transition: { default: "slide-fade" },
    showLine: { type: Boolean, default: !0 },
    expandAll: { type: Boolean, default: !1 },
    checkedAll: { type: Boolean, default: !1 },
    multipleCheck: { type: Boolean, default: !0 },
    onlyLeafCheck: { type: Boolean, default: !0 },
    enableDblclick: { type: Boolean, default: !1 },
    enableWholeAnchorStatus: { type: Boolean, default: !1 },
    enableCheckConfirm: { type: Boolean, default: !1 },
    showId: { type: Boolean, default: !1 },
    idSeparator: { default: "" },
    hideLeafIcon: { type: Boolean, default: !1 },
    hideExpander: { type: Boolean, default: !1 },
    nodeContentClickAction: { default: y.NONE },
    senderElementId: { default: "" },
    treeId: { default: () => q(32) },
    focusedId: {}
  },
  emits: ["update:checkedKeys", "tree-node-click", "tree-node-checkbox-click"],
  setup(B, { emit: m }) {
    const f = m, a = B;
    let s = T([]);
    const r = x([]), c = x([]), h = x([]);
    u(
      () => a.data,
      () => {
        E();
      },
      {
        deep: !0
      }
    ), u(
      () => a.checkedKeys,
      () => {
        A();
      },
      {
        deep: !0
      }
    ), u(
      () => a.focusedId,
      () => {
        O();
      }
    ), u(
      () => a.showCheckbox,
      () => {
        A();
      }
    ), u(
      () => a.expandAll,
      () => {
        r.value.forEach((e) => {
          e.expanded = a.expandAll;
        });
      }
    ), u(
      () => a.checkedAll,
      () => {
        if (a.checkedAll) {
          c.value.forEach((n) => {
            n.checked = 0;
          }), c.value.splice(0, c.value.length);
          const l = r.value.filter((n) => !n.disabled);
          l && l.length > 0 && l.forEach((n) => {
            c.value.push(n), n.checked = 1;
          });
        } else
          c.value.forEach((l) => {
            l.checked = 0;
          }), c.value.splice(0, c.value.length);
        let e = [];
        c.value.forEach((l) => {
          e.push({ id: l.id, label: l.label });
        }), f("update:checkedKeys", e);
      }
    ), u(
      () => a.expandKeys,
      () => {
        w();
      },
      {
        deep: !0
      }
    );
    function _(e, l, n) {
      l && e.forEach((i) => {
        let t = {
          label: i.label,
          id: i.id,
          tabIndex: n.index++,
          children: [],
          checked: 0,
          disabled: i.disabled,
          expanded: !1,
          __parent: l
        };
        a.checkedKeys.filter((d) => t.id === d.id).length > 0 && c.value.push(t), a.expandKeys.filter((d) => t.id === d.id).length > 0 && h.value.push(t), l.children === void 0 && (l.children = []), l.children.push(t), r.value.push(t), i.children && i.children.length && _(i.children, t, n);
      });
    }
    function E() {
      s.splice(0, s.length), c.value.splice(0, c.value.length), h.value.splice(0, h.value.length), r.value = [];
      let e = { index: 1 };
      a.data.forEach((l) => {
        let n = {
          label: l.label,
          tabIndex: e.index++,
          id: l.id,
          children: [],
          checked: 0,
          disabled: l.disabled,
          expanded: !1,
          __parent: null
        };
        a.checkedKeys.filter((i) => n.id === i.id).length > 0 && c.value.push(n), a.expandKeys.filter((i) => n.id === i.id).length > 0 && h.value.push(n), l.children && l.children.length && _(l.children, n, e), s.push(n), r.value.push(n);
      }), c.value.forEach((l) => {
        l.checked = 1, a.cascade && (l.children && l.children.length > 0 && o(l, 1), l.__parent && p(l, 1));
      }), h.value.forEach((l) => {
        l.children && l.children.length > 0 && (l.expanded = !0, l.__parent && b(l.__parent, !0));
      }), (!h.value || h.value.length <= 0) && r.value.forEach((l) => {
        l.expanded = a.expandAll;
      });
    }
    function b(e, l) {
      e.expanded = l, e.__parent && b(e.__parent, l);
    }
    function A() {
      let e = a.checkedKeys.length !== c.value.length;
      e || a.checkedKeys.some((l) => {
        let n = !1;
        if (r.value.some((i) => {
          if (i.id === l.id)
            return n = !0, !0;
        }), !n)
          return e = !0, !0;
      }), e || r.value.some((l) => {
        let n = !1;
        if (a.checkedKeys.some((i) => {
          if (i.id === l.id)
            return n = !0, !0;
        }), !n)
          return e = !0, !0;
      }), e && (c.value.splice(0, c.value.length), a.checkedKeys.forEach((l) => {
        r.value.some((n) => {
          if (n.id === l.id)
            return c.value.push(n), !0;
        });
      }), c.value.forEach((l) => {
        l.checked = 1, a.multipleCheck && a.cascade && (l.children && l.children.length > 0 && o(l, 1), l.__parent && p(l, 1));
      }));
    }
    function w() {
      h.value = [], a.expandKeys.forEach((e) => {
        r.value.some((l) => {
          if (l.id === e.id)
            return h.value.push(l), !0;
        });
      }), h.value.forEach((e) => {
        e.children && e.children.length > 0 && (e.expanded = !0, e.__parent && b(e.__parent, !0));
      });
    }
    function S(e, l) {
      if (a.nodeContentClickAction === y.NONE)
        f("tree-node-click", e, l);
      else {
        if (a.nodeContentClickAction === y.CHECK)
          return a.onlyLeafCheck && e.children && e.children.length > 0 ? (e.expanded = !e.expanded, f("tree-node-click", e, l), !1) : (e.disabled || L(e, l), !1);
        a.nodeContentClickAction === y.EXPAND && (e.expanded = !e.expanded), f("tree-node-click", e, l);
      }
    }
    function I(e) {
      if (a.enableDblclick) {
        if (a.onlyLeafCheck && e.children && e.children.length > 0)
          return !1;
        for (let n = 0; n < c.value.length; n++)
          c.value[n].id !== e.id && (c.value[n].checked = 0, c.value.splice(n, 1), n--);
        c.value.indexOf(e) <= -1 && (e.checked = 1, c.value.push(e));
      }
    }
    function L(e, l) {
      e.disabled || (a.enableCheckConfirm ? f("tree-node-checkbox-click", e, () => N(e), l) : (f("tree-node-checkbox-click", e, () => {
      }, l), N(e)));
    }
    function N(e) {
      return new Promise((l, n) => {
        try {
          if (e.checked !== 1)
            if (a.multipleCheck) {
              let t = !1;
              c.value.some((d) => {
                if (d.id === e.id)
                  return t = !0, !0;
              }), t || (!a.onlyLeafCheck || a.onlyLeafCheck && (!e.children || e.children.length <= 0)) && c.value.push(e), a.cascade ? (e.checked = 1, a.multipleCheck && (e.children && e.children.length > 0 && o(e, e.checked), e.__parent && p(e, e.checked))) : (!a.onlyLeafCheck || a.onlyLeafCheck && (!e.children || e.children.length <= 0)) && (e.checked = 1);
            } else {
              if (a.onlyLeafCheck && e.children && e.children.length > 0)
                return !1;
              for (let t = 0; t < c.value.length; t++)
                c.value[t].id !== e.id && (c.value[t].checked = 0, c.value.splice(t, 1), t--);
              c.value.length <= 0 && (e.checked = 1, (!a.onlyLeafCheck || a.onlyLeafCheck && (!e.children || e.children.length <= 0)) && c.value.push(e));
            }
          else
            c.value.some((t) => {
              if (t.id === e.id)
                return t.checked = 0, c.value.splice(c.value.indexOf(t), 1), !0;
            }), e.checked = 0, a.cascade && a.multipleCheck && (e.children && e.children.length > 0 && o(e, e.checked), e.__parent && p(e, e.checked));
          let i = [];
          c.value.forEach((t) => {
            i.push({ id: t.id, label: t.label });
          }), f("update:checkedKeys", i), l(i);
        } catch (i) {
          n(i);
        }
      });
    }
    function D(e) {
      const l = h.value.indexOf(e);
      e.expanded ? (e.expanded = !1, l > -1 && h.value.splice(l, 1)) : (e.expanded = !0, l <= -1 && h.value.push(e));
    }
    function o(e, l) {
      e.children && e.children.length && e.children.forEach((n) => {
        if (n.checked !== l) {
          n.checked = l;
          const i = c.value.indexOf(n);
          l === 1 ? (!a.onlyLeafCheck || a.onlyLeafCheck && (!n.children || n.children.length <= 0)) && i <= -1 && c.value.push(n) : i > -1 && c.value.splice(i, 1), n.children && n.children.length > 0 && o(n, l);
        }
      });
    }
    function p(e, l) {
      var n, i;
      if (e.__parent) {
        const t = e.__parent.checked;
        if (l === 0) {
          let d = 0;
          (n = e.__parent.children) == null || n.some((k) => {
            if (k.checked === 1 || k.checked === 2)
              return d = 2, !0;
          }), e.__parent.checked = d;
        } else if (l === 1) {
          let d = 1;
          (i = e.__parent.children) == null || i.some((k) => {
            if (k.checked === 0 || k.checked === 2)
              return d = 2, !0;
          }), e.__parent.checked = d;
        } else
          e.__parent.checked = 2;
        if (e.__parent.checked !== 1) {
          const d = c.value.indexOf(e.__parent);
          d > -1 && c.value.splice(d, 1);
        } else
          a.onlyLeafCheck || c.value.indexOf(e.__parent) <= -1 && c.value.push(e.__parent);
        t !== e.__parent.checked && p(e.__parent, l);
      }
    }
    function O() {
      if (a.focusedId) {
        let e = !1;
        if (r.value.some((l) => {
          if (String(l.id) === String(a.focusedId)) {
            e = !0;
            const n = document.getElementById(a.treeId + "__" + l.tabIndex);
            return n ? n.focus() : (K(l), setTimeout(() => {
              const i = document.getElementById(a.treeId + "__" + l.tabIndex);
              if (i)
                i.focus();
              else {
                const t = document.getElementById(a.treeId + "__1");
                t && t.focus();
              }
            }, 100)), !0;
          }
        }), !e) {
          const l = document.getElementById(a.treeId + "__1");
          l && l.focus();
        }
      }
    }
    function K(e) {
      e.__parent && (e.__parent.expanded = !0, K(e.__parent));
    }
    return E(), (e, l) => (C(), g("div", {
      class: "z-tree",
      id: e.treeId
    }, [
      !v(s) || v(s).length <= 0 ? (C(), g("div", J, [
        V("span", null, W(e.emptyTips), 1)
      ])) : (C(!0), g(z, { key: 1 }, F(v(s), (n, i) => (C(), H(v(j), {
        "sender-element-id": e.senderElementId,
        "tree-id": e.treeId,
        "tree-node-list": r.value,
        "max-tab-index": r.value.length + 1,
        key: n.id ? n.id : i,
        treeNode: n,
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
        checkedNodes: c.value,
        expandKeys: e.expandKeys,
        onCheckboxClick: L,
        "onUpdate:expandNode": D,
        onNodeClick: S,
        onNodeDblclick: I
      }, {
        default: U((t) => [
          X(e.$slots, "default", {
            treeNode: t.treeNode
          })
        ]),
        _: 2
      }, 1032, ["sender-element-id", "tree-id", "tree-node-list", "max-tab-index", "treeNode", "cascade", "showCheckbox", "transition", "showLine", "expandAll", "checkedAll", "multipleCheck", "onlyLeafCheck", "enableDblclick", "enableWholeAnchorStatus", "enableCheckConfirm", "showId", "idSeparator", "hideLeafIcon", "hideExpander", "nodeContentClickAction", "checkedNodes", "expandKeys"]))), 128))
    ], 8, G));
  }
});
export {
  $ as default
};
