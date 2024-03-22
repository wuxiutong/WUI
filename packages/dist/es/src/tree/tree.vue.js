import { defineComponent as T, reactive as V, ref as g, watch as u, openBlock as C, createElementBlock as x, unref as v, createElementVNode as W, toDisplayString as z, Fragment as F, renderList as H, createBlock as U, withCtx as X, renderSlot as j } from "vue";
import q from "./tree-node.vue.js";
import { TreeNodeContentClickActionEnum as y } from "./type.js";
const G = { class: "z-tree" }, J = {
  key: 0,
  class: "z-tree-empty-tips"
}, Y = /* @__PURE__ */ T({
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
    nodeContentClickAction: { default: y.NONE }
  },
  emits: ["update:checkedKeys", "tree-node-click", "tree-node-checkbox-click"],
  setup(w, { emit: B }) {
    const f = B, n = w;
    let s = V([]);
    const d = g([]), a = g([]), r = g([]);
    u(
      () => n.data,
      () => {
        L();
      },
      {
        deep: !0
      }
    ), u(
      () => n.checkedKeys,
      () => {
        A();
      },
      {
        deep: !0
      }
    ), u(
      () => n.showCheckbox,
      () => {
        A();
      }
    ), u(
      () => n.expandAll,
      () => {
        d.value.forEach((e) => {
          e.expanded = n.expandAll;
        });
      }
    ), u(
      () => n.checkedAll,
      () => {
        if (n.checkedAll) {
          a.value.forEach((c) => {
            c.checked = 0;
          }), a.value.splice(0, a.value.length);
          const l = d.value.filter((c) => !c.disabled);
          l && l.length > 0 && l.forEach((c) => {
            a.value.push(c), c.checked = 1;
          });
        } else
          a.value.forEach((l) => {
            l.checked = 0;
          }), a.value.splice(0, a.value.length);
        let e = [];
        a.value.forEach((l) => {
          e.push({ id: l.id, label: l.label });
        }), f("update:checkedKeys", e);
      }
    ), u(
      () => n.expandKeys,
      () => {
        S();
      },
      {
        deep: !0
      }
    );
    function E(e, l) {
      l && e.forEach((c) => {
        let i = {
          label: c.label,
          id: c.id,
          children: [],
          checked: 0,
          disabled: c.disabled,
          expanded: !1,
          parent: l
        };
        n.checkedKeys.filter((t) => i.id === t.id).length > 0 && a.value.push(i), n.expandKeys.filter((t) => i.id === t.id).length > 0 && r.value.push(i), l.children === void 0 && (l.children = []), l.children.push(i), d.value.push(i), c.children && c.children.length && E(c.children, i);
      });
    }
    function L() {
      s.splice(0, s.length), a.value.splice(0, a.value.length), r.value.splice(0, r.value.length), d.value = [], n.data.forEach((e) => {
        let l = {
          label: e.label,
          id: e.id,
          children: [],
          checked: 0,
          disabled: e.disabled,
          expanded: !1,
          parent: null
        };
        n.checkedKeys.filter((c) => l.id === c.id).length > 0 && a.value.push(l), n.expandKeys.filter((c) => l.id === c.id).length > 0 && r.value.push(l), e.children && e.children.length && E(e.children, l), s.push(l), d.value.push(l);
      }), a.value.forEach((e) => {
        e.checked = 1, n.cascade && (e.children && e.children.length > 0 && o(e, 1), e.parent && p(e, 1));
      }), r.value.forEach((e) => {
        e.children && e.children.length > 0 && (e.expanded = !0, e.parent && b(e.parent, !0));
      });
    }
    function b(e, l) {
      e.expanded = l, e.parent && b(e.parent, l);
    }
    function A() {
      let e = n.checkedKeys.length !== a.value.length;
      e || n.checkedKeys.some((l) => {
        let c = !1;
        if (d.value.some((i) => {
          if (i.id === l.id)
            return c = !0, !0;
        }), !c)
          return e = !0, !0;
      }), e || d.value.some((l) => {
        let c = !1;
        if (n.checkedKeys.some((i) => {
          if (i.id === l.id)
            return c = !0, !0;
        }), !c)
          return e = !0, !0;
      }), e && (a.value.splice(0, a.value.length), n.checkedKeys.forEach((l) => {
        d.value.some((c) => {
          if (c.id === l.id)
            return a.value.push(c), !0;
        });
      }), a.value.forEach((l) => {
        l.checked = 1, n.multipleCheck && n.cascade && (l.children && l.children.length > 0 && o(l, 1), l.parent && p(l, 1));
      }));
    }
    function S() {
      r.value = [], n.expandKeys.forEach((e) => {
        d.value.some((l) => {
          if (l.id === e.id)
            return r.value.push(l), !0;
        });
      }), r.value.forEach((e) => {
        e.children && e.children.length > 0 && (e.expanded = !0, e.parent && b(e.parent, !0));
      });
    }
    function D(e, l) {
      if (n.nodeContentClickAction === y.NONE)
        f("tree-node-click", e, l);
      else {
        if (n.nodeContentClickAction === y.CHECK)
          return n.onlyLeafCheck && e.children && e.children.length > 0 ? (e.expanded = !e.expanded, f("tree-node-click", e, l), !1) : (e.disabled || N(e, l), !1);
        n.nodeContentClickAction === y.EXPAND && (e.expanded = !e.expanded), f("tree-node-click", e, l);
      }
    }
    function O(e) {
      if (n.enableDblclick) {
        if (n.onlyLeafCheck && e.children && e.children.length > 0)
          return !1;
        for (let c = 0; c < a.value.length; c++)
          a.value[c].id !== e.id && (a.value[c].checked = 0, a.value.splice(c, 1), c--);
        a.value.indexOf(e) <= -1 && (e.checked = 1, a.value.push(e));
      }
    }
    function N(e, l) {
      e.disabled || (n.enableCheckConfirm ? f("tree-node-checkbox-click", e, () => K(e), l) : (f("tree-node-checkbox-click", e, () => {
      }, l), K(e)));
    }
    function K(e) {
      return new Promise((l, c) => {
        try {
          if (e.checked !== 1)
            if (n.multipleCheck) {
              let t = !1;
              a.value.some((h) => {
                if (h.id === e.id)
                  return t = !0, !0;
              }), t || (!n.onlyLeafCheck || n.onlyLeafCheck && (!e.children || e.children.length <= 0)) && a.value.push(e), n.cascade ? (e.checked = 1, n.multipleCheck && (e.children && e.children.length > 0 && o(e, e.checked), e.parent && p(e, e.checked))) : (!n.onlyLeafCheck || n.onlyLeafCheck && (!e.children || e.children.length <= 0)) && (e.checked = 1);
            } else {
              if (n.onlyLeafCheck && e.children && e.children.length > 0)
                return !1;
              for (let t = 0; t < a.value.length; t++)
                a.value[t].id !== e.id && (a.value[t].checked = 0, a.value.splice(t, 1), t--);
              a.value.length <= 0 && (e.checked = 1, (!n.onlyLeafCheck || n.onlyLeafCheck && (!e.children || e.children.length <= 0)) && a.value.push(e));
            }
          else
            a.value.some((t) => {
              if (t.id === e.id)
                return t.checked = 0, a.value.splice(a.value.indexOf(t), 1), !0;
            }), e.checked = 0, n.cascade && n.multipleCheck && (e.children && e.children.length > 0 && o(e, e.checked), e.parent && p(e, e.checked));
          let i = [];
          a.value.forEach((t) => {
            i.push({ id: t.id, label: t.label });
          }), f("update:checkedKeys", i), l(i);
        } catch (i) {
          c(i);
        }
      });
    }
    function P(e) {
      const l = r.value.indexOf(e);
      e.expanded ? (e.expanded = !1, l > -1 && r.value.splice(l, 1)) : (e.expanded = !0, l <= -1 && r.value.push(e));
    }
    function o(e, l) {
      e.children && e.children.length && e.children.forEach((c) => {
        if (c.checked !== l) {
          c.checked = l;
          const i = a.value.indexOf(c);
          l === 1 ? (!n.onlyLeafCheck || n.onlyLeafCheck && (!c.children || c.children.length <= 0)) && i <= -1 && a.value.push(c) : i > -1 && a.value.splice(i, 1), c.children && c.children.length > 0 && o(c, l);
        }
      });
    }
    function p(e, l) {
      var c, i;
      if (e.parent) {
        const t = e.parent.checked;
        if (l === 0) {
          let h = 0;
          (c = e.parent.children) == null || c.some((k) => {
            if (k.checked === 1 || k.checked === 2)
              return h = 2, !0;
          }), e.parent.checked = h;
        } else if (l === 1) {
          let h = 1;
          (i = e.parent.children) == null || i.some((k) => {
            if (k.checked === 0 || k.checked === 2)
              return h = 2, !0;
          }), e.parent.checked = h;
        } else
          e.parent.checked = 2;
        if (e.parent.checked !== 1) {
          const h = a.value.indexOf(e.parent);
          h > -1 && a.value.splice(h, 1);
        } else
          n.onlyLeafCheck || a.value.indexOf(e.parent) <= -1 && a.value.push(e.parent);
        t !== e.parent.checked && p(e.parent, l);
      }
    }
    return L(), (e, l) => (C(), x("div", G, [
      !v(s) || v(s).length <= 0 ? (C(), x("div", J, [
        W("span", null, z(e.emptyTips), 1)
      ])) : (C(!0), x(F, { key: 1 }, H(v(s), (c, i) => (C(), U(v(q), {
        key: c.id ? c.id : i,
        treeNode: c,
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
        checkedNodes: a.value,
        expandKeys: e.expandKeys,
        onCheckboxClick: N,
        "onUpdate:expandNode": P,
        onNodeClick: D,
        onNodeDblclick: O
      }, {
        "node-content": X((t) => [
          j(e.$slots, "node-content", {
            treeNode: t.treeNode
          })
        ]),
        _: 2
      }, 1032, ["treeNode", "cascade", "showCheckbox", "transition", "showLine", "expandAll", "checkedAll", "multipleCheck", "onlyLeafCheck", "enableDblclick", "enableWholeAnchorStatus", "enableCheckConfirm", "showId", "idSeparator", "hideLeafIcon", "hideExpander", "nodeContentClickAction", "checkedNodes", "expandKeys"]))), 128))
    ]));
  }
});
export {
  Y as default
};
