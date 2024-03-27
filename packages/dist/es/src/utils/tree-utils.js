function g(e) {
  if (e.children && e.children.length > 0) {
    let i = [];
    e.children.forEach((t) => {
      t = Object.assign({}, t), delete t.__parent, i.push(t), g(t);
    }), e.children = i;
  }
}
function d(e) {
  e.children && e.children.length > 0 && e.children.forEach((i) => {
    i.__parent = e, d(i);
  });
}
function a(e, i, t, l) {
  var f, r;
  let n = !1;
  if (t === "all" ? (l && (String(e.id) === String(i) || String(e.label) === String(i)) || String(e.id).indexOf(i) >= 0 || String(e.label).indexOf(i) >= 0) && (n = !0) : t === "id" ? (l && String(e.id) === String(i) || String(e.id).indexOf(i) >= 0) && (n = !0) : t === "label" && (l && String(e.label) === String(i) || String(e.label).indexOf(i) >= 0) && (n = !0), n)
    return 0;
  if (e.children && e.children.length > 0)
    for (let h = 0; h < e.children.length; h++) {
      const c = a(
        e.children[h],
        i,
        t,
        l
      );
      h = h + c;
    }
  return (!e.children || e.children.length <= 0) && !n ? ((r = (f = e.__parent) == null ? void 0 : f.children) == null || r.splice(e.__parent.children.indexOf(e), 1), -1) : 0;
}
const u = {
  /**
   * 重组所有节点的__parent和children，原始数据支持两种模式一种是__parentId模式：{id:'',label:'',__parentId:''}；另一种是children模式：{id:'',label:'',children:[]}，返回数据结果{id:'',label:'',children:[],__parent:{}}
   * @param srcNodes 原始数据（该数据源不会被改变，放方法会返回新的数组）
   * @param __parentIdMode 指定数据源是否采用__parentId数据结构模式，否则就是children结构模式。
   * @returns 返回数据结果{id:'',label:'',children:[],__parent:{}}
   */
  buildParentAndChildren: function(e, i) {
    if (i) {
      let t = [];
      for (let n = 0; n < e.length; n++) {
        const f = Object.assign({}, e[n]);
        delete f.__parent, f.children = [], t.push(f);
      }
      for (let n = 0; n < t.length; n++) {
        const f = t[n];
        String(f.id);
        const r = String(f.__parentId);
        t.some((h) => {
          var c;
          if (String(h.id) === r)
            return h.children || (h.children = []), (c = h.children) == null || c.push(f), f.__parent = h, !0;
        });
      }
      let l = [];
      for (let n = 0; n < t.length; n++) {
        const f = t[n];
        f.__parent || l.push(f);
      }
      return l;
    } else {
      let t = [];
      for (let l = 0; l < e.length; l++) {
        const n = Object.assign({}, e[l]);
        delete n.__parent, n.children && n.children.length > 0 && g(n), t.push(n);
      }
      for (let l = 0; l < t.length; l++) {
        const n = t[l];
        n.__parent = null, n.children && n.children.length > 0 && d(n);
      }
      return t;
    }
  },
  /**
   * 重组所有节点的children，同时会清空__parent，原始数据支持是__parentId模式：{id:'',label:'',__parentId:''}
   * @param srcNodes 原始数据（该数据源不会被改变，该方法会返回新的数组）
   * @returns 返回数据结果{id:'',label:'',children:[]}
   */
  buildChildren: function(e) {
    let i = [];
    for (let l = 0; l < e.length; l++) {
      const n = Object.assign({}, e[l]);
      delete n.__parent, n.children = [], i.push(n);
    }
    for (let l = 0; l < i.length; l++) {
      const n = i[l];
      String(n.id);
      const f = String(n.__parentId);
      i.some((r) => {
        var h;
        if (String(r.id) === f)
          return r.children || (r.children = []), (h = r.children) == null || h.push(n), n.__parent = r, !0;
      });
    }
    let t = [];
    for (let l = 0; l < i.length; l++) {
      const n = i[l];
      n.__parent || t.push(n);
    }
    return t;
  },
  /**
   * 根据关键字搜索（id或label包含关键字即匹配）树节点，其中：如果上级节点匹配，则保留叶子节点，原始数据支持两种模式一种是__parentId模式：{id:'',label:'',__parentId:''}；另一种是children模式：{id:'',label:'',children:[]}
   * @param treeDataSrc 原始数据（该数据源不会被改变，放方法会返回新的数组）
   * @param keyWords 搜索关键字
   * @param __parentIdMode 原始数据属于__parentId模式，否则就是children模式
   * @param exactMatch 是否精准匹配
   * @returns 返回数据结果{id:'',label:'',children:[],__parent:{}}
   */
  searchIdAndLabel: function(e, i, t, l = !1) {
    let n = this.buildParentAndChildren(e, t);
    if (!i || i.length <= 0)
      return n;
    for (let f = 0; f < n.length; f++) {
      const r = n[f];
      let h = !1;
      l ? h = String(r.id) === (i ?? "") || String(r.label) === (i ?? "") : h = String(r.id).indexOf(i ?? "") >= 0 || String(r.label).indexOf(i ?? "") >= 0, h || (a(r, i, "all", l), (!r.children || r.children.length <= 0) && (n.splice(n.indexOf(r), 1), f--));
    }
    return n;
  },
  /**
   * 根据关键字搜索（id）树节点，其中：如果上级节点匹配，则保留叶子节点，其中：如果上级节点匹配，则保留叶子节点，原始数据支持两种模式一种是__parentId模式：{id:'',label:'',__parentId:''}；另一种是children模式：{id:'',label:'',children:[]}
   * @param treeDataSrc 原始数据（该数据源不会被改变，放方法会返回新的数组）
   * @param keyWords 搜索关键字
   * @param __parentIdMode 原始数据属于__parentId模式，否则就是children模式
   * @param exactMatch 是否精准匹配
   * @returns 返回数据结果{id:'',label:'',children:[],__parent:{}}
   */
  searchId: function(e, i, t, l = !1) {
    let n = this.buildParentAndChildren(e, t);
    if (!i || i.length <= 0)
      return n;
    for (let f = 0; f < n.length; f++) {
      const r = n[f];
      let h = !1;
      l ? h = String(r.id) === (i ?? "") : h = String(r.id).indexOf(i ?? "") >= 0, h || (a(r, i, "id", l), (!r.children || r.children.length <= 0) && (n.splice(n.indexOf(r), 1), f--));
    }
    return n;
  },
  /**
   * 根据关键字搜索（label）树节点，其中：如果上级节点匹配，其中：如果上级节点匹配，则保留叶子节点，原始数据支持两种模式一种是__parentId模式：{id:'',label:'',__parentId:''}；另一种是children模式：{id:'',label:'',children:[]}
   * @param treeDataSrc 原始数据（该数据源不会被改变，放方法会返回新的数组）
   * @param keyWords 搜索关键字
   * @param __parentIdMode 原始数据属于__parentId模式，否则就是children模式
   * @param exactMatch 是否精准匹配
   * @returns 返回数据结果{id:'',label:'',children:[],__parent:{}}
   */
  searchLabel: function(e, i, t, l = !1) {
    let n = this.buildParentAndChildren(e, t);
    if (!i || i.length <= 0)
      return n;
    for (let f = 0; f < n.length; f++) {
      const r = n[f];
      let h = !1;
      l ? h = String(r.label) === (i ?? "") : h = String(r.label).indexOf(i ?? "") >= 0, h || (a(r, i, "label", l), (!r.children || r.children.length <= 0) && (n.splice(n.indexOf(r), 1), f--));
    }
    return n;
  }
};
export {
  u as TreeUtils
};
