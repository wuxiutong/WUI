import { defineComponent as T, reactive as V, ref as g, watch as s, openBlock as C, createElementBlock as x, unref as v, createElementVNode as W, toDisplayString as z, Fragment as F, renderList as H, createBlock as U, withCtx as X, renderSlot as j } from "vue";
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
    let u = V([]);
    const d = g([]), c = g([]), r = g([]);
    s(
      () => n.data,
      () => {
        L();
      },
      {
        deep: !0
      }
    ), s(
      () => n.checkedKeys,
      () => {
        A();
      },
      {
        deep: !0
      }
    ), s(
      () => n.showCheckbox,
      () => {
        A();
      }
    ), s(
      () => n.expandAll,
      () => {
        d.value.forEach((e) => {
          e.expanded = n.expandAll;
        });
      }
    ), s(
      () => n.checkedAll,
      () => {
        if (n.checkedAll) {
          c.value.forEach((a) => {
            a.checked = 0;
          }), c.value.splice(0, c.value.length);
          const l = d.value.filter((a) => !a.disabled);
          l && l.length > 0 && l.forEach((a) => {
            c.value.push(a), a.checked = 1;
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
    ), s(
      () => n.expandKeys,
      () => {
        S();
      },
      {
        deep: !0
      }
    );
    function E(e, l) {
      l && e.forEach((a) => {
        let i = {
          label: a.label,
          id: a.id,
          children: [],
          checked: 0,
          disabled: a.disabled,
          expanded: !1,
          parent: l
        };
        n.checkedKeys.filter((t) => i.id === t.id).length > 0 && c.value.push(i), n.expandKeys.filter((t) => i.id === t.id).length > 0 && r.value.push(i), l.children === void 0 && (l.children = []), l.children.push(i), d.value.push(i), a.children && a.children.length && E(a.children, i);
      });
    }
    function L() {
      u.splice(0, u.length), c.value.splice(0, c.value.length), r.value.splice(0, r.value.length), d.value = [], n.data.forEach((e) => {
        let l = {
          label: e.label,
          id: e.id,
          children: [],
          checked: 0,
          disabled: e.disabled,
          expanded: !1,
          parent: null
        };
        n.checkedKeys.filter((a) => l.id === a.id).length > 0 && c.value.push(l), n.expandKeys.filter((a) => l.id === a.id).length > 0 && r.value.push(l), e.children && e.children.length && E(e.children, l), u.push(l), d.value.push(l);
      }), c.value.forEach((e) => {
        e.checked = 1, n.cascade && (e.children && e.children.length > 0 && o(e, 1), e.parent && p(e, 1));
      }), r.value.forEach((e) => {
        e.children && e.children.length > 0 && (e.expanded = !0, e.parent && b(e.parent, !0));
      });
    }
    function b(e, l) {
      e.expanded = l, e.parent && b(e.parent, l);
    }
    function A() {
      let e = n.checkedKeys.length !== c.value.length;
      e || n.checkedKeys.some((l) => {
        let a = !1;
        if (d.value.some((i) => {
          if (i.id === l.id)
            return a = !0, !0;
        }), !a)
          return e = !0, !0;
      }), e || d.value.some((l) => {
        let a = !1;
        if (n.checkedKeys.some((i) => {
          if (i.id === l.id)
            return a = !0, !0;
        }), !a)
          return e = !0, !0;
      }), e && (c.value.splice(0, c.value.length), n.checkedKeys.forEach((l) => {
        d.value.some((a) => {
          if (a.id === l.id)
            return c.value.push(a), !0;
        });
      }), c.value.forEach((l) => {
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
        for (let a = 0; a < c.value.length; a++)
          c.value[a].id !== e.id && (c.value[a].checked = 0, c.value.splice(a, 1), a--);
        c.value.indexOf(e) <= -1 && (e.checked = 1, c.value.push(e));
      }
    }
    function N(e, l) {
      e.disabled || (n.enableCheckConfirm ? f("tree-node-checkbox-click", e, () => K(e), l) : (f("tree-node-checkbox-click", e, () => {
      }, l), K(e)));
    }
    function K(e) {
      return new Promise((l, a) => {
        try {
          if (e.checked !== 1)
            if (n.multipleCheck) {
              let t = !1;
              c.value.some((h) => {
                if (h.id === e.id)
                  return t = !0, !0;
              }), t || (!n.onlyLeafCheck || n.onlyLeafCheck && (!e.children || e.children.length <= 0)) && c.value.push(e), n.cascade ? (e.checked = 1, n.multipleCheck && (e.children && e.children.length > 0 && o(e, e.checked), e.parent && p(e, e.checked))) : (!n.onlyLeafCheck || n.onlyLeafCheck && (!e.children || e.children.length <= 0)) && (e.checked = 1);
            } else {
              if (n.onlyLeafCheck && e.children && e.children.length > 0)
                return !1;
              for (let t = 0; t < c.value.length; t++)
                c.value[t].id !== e.id && (c.value[t].checked = 0, c.value.splice(t, 1), t--);
              c.value.length <= 0 && (e.checked = 1, (!n.onlyLeafCheck || n.onlyLeafCheck && (!e.children || e.children.length <= 0)) && c.value.push(e));
            }
          else
            c.value.some((t) => {
              if (t.id === e.id)
                return t.checked = 0, c.value.splice(c.value.indexOf(t), 1), !0;
            }), e.checked = 0, n.cascade && n.multipleCheck && (e.children && e.children.length > 0 && o(e, e.checked), e.parent && p(e, e.checked));
          let i = [];
          c.value.forEach((t) => {
            i.push({ id: t.id, label: t.label });
          }), f("update:checkedKeys", i), l(i);
        } catch (i) {
          a(i);
        }
      });
    }
    function P(e) {
      const l = r.value.indexOf(e);
      e.expanded ? (e.expanded = !1, l > -1 && r.value.splice(l, 1)) : (e.expanded = !0, l <= -1 && r.value.push(e));
    }
    function o(e, l) {
      e.children && e.children.length && e.children.forEach((a) => {
        if (a.checked !== l) {
          a.checked = l;
          const i = c.value.indexOf(a);
          l === 1 ? (!n.onlyLeafCheck || n.onlyLeafCheck && (!a.children || a.children.length <= 0)) && i <= -1 && c.value.push(a) : i > -1 && c.value.splice(i, 1), a.children && a.children.length > 0 && o(a, l);
        }
      });
    }
    function p(e, l) {
      var a, i;
      if (e.parent) {
        const t = e.parent.checked;
        if (l === 0) {
          let h = 0;
          (a = e.parent.children) == null || a.some((k) => {
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
          const h = c.value.indexOf(e.parent);
          h > -1 && c.value.splice(h, 1);
        } else
          n.onlyLeafCheck || c.value.indexOf(e.parent) <= -1 && c.value.push(e.parent);
        t !== e.parent.checked && p(e.parent, l);
      }
    }
    return L(), (e, l) => (C(), x("div", G, [
      !v(u) || v(u).length <= 0 ? (C(), x("div", J, [
        W("span", null, z(e.emptyTips), 1)
      ])) : (C(!0), x(F, { key: 1 }, H(v(u), (a, i) => (C(), U(v(q), {
        key: a.id ? a.id : i,
        treeNode: a,
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
        onCheckboxClick: N,
        "onUpdate:expandNode": P,
        onNodeClick: D,
        onNodeDblclick: O
      }, {
        default: X((t) => [
          j(e.$slots, "default", {
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
