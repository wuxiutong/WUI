import { defineComponent as P, reactive as T, ref as x, watch as s, openBlock as C, createElementBlock as g, normalizeClass as V, unref as v, createElementVNode as W, toDisplayString as z, Fragment as F, renderList as H, createBlock as U, withCtx as X, renderSlot as j } from "vue";
import q from "./tree-node.vue.js";
import { TreeNodeContentClickActionEnum as y } from "./type.js";
import { randomString as G } from "../utils/random.js";
const J = {
  key: 0,
  class: "z-tree-empty-tips"
}, Z = /* @__PURE__ */ P({
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
    treeId: { default: () => G(32) }
  },
  emits: ["update:checkedKeys", "tree-node-click", "tree-node-checkbox-click"],
  setup(w, { emit: B }) {
    const f = B, n = w;
    let u = T([]);
    const h = x([]), c = x([]), d = x([]);
    s(
      () => n.data,
      () => {
        A();
      },
      {
        deep: !0
      }
    ), s(
      () => n.checkedKeys,
      () => {
        L();
      },
      {
        deep: !0
      }
    ), s(
      () => n.showCheckbox,
      () => {
        L();
      }
    ), s(
      () => n.expandAll,
      () => {
        h.value.forEach((e) => {
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
          const l = h.value.filter((a) => !a.disabled);
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
    function E(e, l, a) {
      l && e.forEach((i) => {
        let t = {
          label: i.label,
          id: i.id,
          tabIndex: a.index++,
          children: [],
          checked: 0,
          disabled: i.disabled,
          expanded: !1,
          parent: l
        };
        n.checkedKeys.filter((r) => t.id === r.id).length > 0 && c.value.push(t), n.expandKeys.filter((r) => t.id === r.id).length > 0 && d.value.push(t), l.children === void 0 && (l.children = []), l.children.push(t), h.value.push(t), i.children && i.children.length && E(i.children, t, a);
      });
    }
    function A() {
      u.splice(0, u.length), c.value.splice(0, c.value.length), d.value.splice(0, d.value.length), h.value = [];
      let e = { index: 1 };
      n.data.forEach((l) => {
        let a = {
          label: l.label,
          tabIndex: e.index++,
          id: l.id,
          children: [],
          checked: 0,
          disabled: l.disabled,
          expanded: !1,
          parent: null
        };
        n.checkedKeys.filter((i) => a.id === i.id).length > 0 && c.value.push(a), n.expandKeys.filter((i) => a.id === i.id).length > 0 && d.value.push(a), l.children && l.children.length && E(l.children, a, e), u.push(a), h.value.push(a);
      }), c.value.forEach((l) => {
        l.checked = 1, n.cascade && (l.children && l.children.length > 0 && o(l, 1), l.parent && p(l, 1));
      }), d.value.forEach((l) => {
        l.children && l.children.length > 0 && (l.expanded = !0, l.parent && b(l.parent, !0));
      }), (!d.value || d.value.length <= 0) && h.value.forEach((l) => {
        l.expanded = n.expandAll;
      });
    }
    function b(e, l) {
      e.expanded = l, e.parent && b(e.parent, l);
    }
    function L() {
      let e = n.checkedKeys.length !== c.value.length;
      e || n.checkedKeys.some((l) => {
        let a = !1;
        if (h.value.some((i) => {
          if (i.id === l.id)
            return a = !0, !0;
        }), !a)
          return e = !0, !0;
      }), e || h.value.some((l) => {
        let a = !1;
        if (n.checkedKeys.some((i) => {
          if (i.id === l.id)
            return a = !0, !0;
        }), !a)
          return e = !0, !0;
      }), e && (c.value.splice(0, c.value.length), n.checkedKeys.forEach((l) => {
        h.value.some((a) => {
          if (a.id === l.id)
            return c.value.push(a), !0;
        });
      }), c.value.forEach((l) => {
        l.checked = 1, n.multipleCheck && n.cascade && (l.children && l.children.length > 0 && o(l, 1), l.parent && p(l, 1));
      }));
    }
    function S() {
      d.value = [], n.expandKeys.forEach((e) => {
        h.value.some((l) => {
          if (l.id === e.id)
            return d.value.push(l), !0;
        });
      }), d.value.forEach((e) => {
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
              c.value.some((r) => {
                if (r.id === e.id)
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
    function m(e) {
      const l = d.value.indexOf(e);
      e.expanded ? (e.expanded = !1, l > -1 && d.value.splice(l, 1)) : (e.expanded = !0, l <= -1 && d.value.push(e));
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
          let r = 0;
          (a = e.parent.children) == null || a.some((k) => {
            if (k.checked === 1 || k.checked === 2)
              return r = 2, !0;
          }), e.parent.checked = r;
        } else if (l === 1) {
          let r = 1;
          (i = e.parent.children) == null || i.some((k) => {
            if (k.checked === 0 || k.checked === 2)
              return r = 2, !0;
          }), e.parent.checked = r;
        } else
          e.parent.checked = 2;
        if (e.parent.checked !== 1) {
          const r = c.value.indexOf(e.parent);
          r > -1 && c.value.splice(r, 1);
        } else
          n.onlyLeafCheck || c.value.indexOf(e.parent) <= -1 && c.value.push(e.parent);
        t !== e.parent.checked && p(e.parent, l);
      }
    }
    return A(), (e, l) => (C(), g("div", {
      class: V(["z-tree", e.treeId])
    }, [
      !v(u) || v(u).length <= 0 ? (C(), g("div", J, [
        W("span", null, z(e.emptyTips), 1)
      ])) : (C(!0), g(F, { key: 1 }, H(v(u), (a, i) => (C(), U(v(q), {
        "sender-element-id": e.senderElementId,
        "tree-id": e.treeId,
        "max-tab-index": h.value.length + 1,
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
        "onUpdate:expandNode": m,
        onNodeClick: D,
        onNodeDblclick: O
      }, {
        default: X((t) => [
          j(e.$slots, "default", {
            treeNode: t.treeNode
          })
        ]),
        _: 2
      }, 1032, ["sender-element-id", "tree-id", "max-tab-index", "treeNode", "cascade", "showCheckbox", "transition", "showLine", "expandAll", "checkedAll", "multipleCheck", "onlyLeafCheck", "enableDblclick", "enableWholeAnchorStatus", "enableCheckConfirm", "showId", "idSeparator", "hideLeafIcon", "hideExpander", "nodeContentClickAction", "checkedNodes", "expandKeys"]))), 128))
    ], 2));
  }
});
export {
  Z as default
};
