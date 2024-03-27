import { TreeOriginalData } from '../tree'

interface TreeOriginalDataLevel {
  rootNodes: TreeOriginalData[]
  middleNodes: TreeOriginalData[]
  leafNodes: TreeOriginalData[]
}

/**
 *
 * @param node 递归遍历清除父节点，并且重新复制新的children
 */
function recursionRemoveParent(node: TreeOriginalData) {
  if (node.children && node.children.length > 0) {
    let children: TreeOriginalData[] = []
    node.children.forEach((element) => {
      element = { parent: null, ...element }
      children.push(element)
      recursionRemoveParent(element)
    })
    node.children = children
  }
}
/**
 *
 * @param node 递归添加父亲节点
 */
function recursionAddParent(node: TreeOriginalData) {
  if (node.children && node.children.length > 0) {
    node.children.forEach((element) => {
      element.parent = node
      recursionAddParent(element)
    })
  }
}
// 递归移除children中不匹配的节点
function recursionRemoveChild(
  node: TreeOriginalData,
  keyWords: string,
  searchMode: 'label' | 'id' | 'all',
  exactMatch: boolean
): number {
  let isMatched = false
  if (searchMode === 'all') {
    if (
      exactMatch &&
      (String(node.id) === String(keyWords) ||
        String(node.label) === String(keyWords))
    ) {
      isMatched = true
    } else if (
      String(node.id).indexOf(keyWords) >= 0 ||
      String(node.label).indexOf(keyWords) >= 0
    ) {
      isMatched = true
    }
  } else if (searchMode === 'id') {
    if (exactMatch && String(node.id) === String(keyWords)) {
      isMatched = true
    } else if (String(node.id).indexOf(keyWords) >= 0) {
      isMatched = true
    }
  } else if (searchMode === 'label') {
    if (exactMatch && String(node.label) === String(keyWords)) {
      isMatched = true
    } else if (String(node.label).indexOf(keyWords) >= 0) {
      isMatched = true
    }
  }
  // 匹配则直接返回
  if (isMatched) {
    return 0
  }
  // 存在子节点则递归遍历子节点
  if (node.children && node.children.length > 0) {
    for (let i = 0; i < node.children.length; i++) {
      const rst = recursionRemoveChild(
        node.children[i],
        keyWords,
        searchMode,
        exactMatch
      )
      i = i + rst
    }
  }
  // 不匹配并且没有子级则将其从父请children中删除，并且返回-1
  if ((!node.children || node.children.length <= 0) && !isMatched) {
    node.parent?.children?.splice(node.parent.children.indexOf(node), 1)
    return -1
  }
  return 0
}

/**
 * 树组件工具
 */
const TreeUtils = {
  /**
   * 重组所有节点的parent和children，原始数据支持两种模式一种是parentId模式：{id:'',label:'',parentId:''}；另一种是children模式：{id:'',label:'',children:[]}，返回数据结果{id:'',label:'',children:[],parent:{}}
   * @param rootNodes 原始数据（该数据源不会被改变，放方法会返回新的数组）
   * @param parentIdMode 指定数据源是否采用parentId数据结构模式，否则就是children结构模式。
   * @returns 返回数据结果{id:'',label:'',children:[],parent:{}}
   */
  buildParentAndChildren: function (
    rootNodes: TreeOriginalData[],
    parentIdMode: boolean
  ): TreeOriginalData[] {
    //1、parentId模式
    if (parentIdMode) {
      // 清除原始的children及parent，解构成新对象
      let array: TreeOriginalData[] = []
      for (let i = 0; i < rootNodes.length; i++) {
        const node = { parent: null, children: [], ...rootNodes[i] }
        array.push(node)
      }
      // 添加children及parent
      for (let i = 0; i < array.length; i++) {
        const node = array[i]
        const id = String(node.id)
        const parentId = String(node.parentId)
        array.some((item) => {
          if (String(item.id) === parentId) {
            if (!item.children) {
              item.children = []
            }
            item.children?.push(node)
            node.parent = item
            return true
          }
        })
      }
      // 找到根节点、拉起来一拉起来即可
      let array2: TreeOriginalData[] = []
      for (let i = 0; i < array.length; i++) {
        const node = array[i]
        if (!node.parent) {
          array2.push(node)
        }
      }
      return array2
    } else {
      // 2、children结构数据
      // 先清除parent,然后复制一份数据，再添加parent
      let array: TreeOriginalData[] = []
      for (let i = 0; i < rootNodes.length; i++) {
        const node = { parent: null, ...rootNodes[i] }
        if (node.children && node.children.length > 0) {
          recursionRemoveParent(node)
        }
        array.push(node)
      }
      // 循环添加parent
      for (let i = 0; i < array.length; i++) {
        const node = array[i]
        node.parent = null
        if (node.children && node.children.length > 0) {
          recursionAddParent(node)
        }
      }
      return array
    }
  },

  /**
   * 根据关键字搜索（id或label包含关键字即匹配）树节点，其中：如果上级节点匹配，则保留叶子节点，原始数据支持两种模式一种是parentId模式：{id:'',label:'',parentId:''}；另一种是children模式：{id:'',label:'',children:[]}
   * @param treeDataSrc 原始数据（该数据源不会被改变，放方法会返回新的数组）
   * @param keyWords 搜索关键字
   * @param parentIdMode 原始数据属于parentId模式，否则就是children模式
   * @param exactMatch 是否精准匹配
   * @returns 返回数据结果{id:'',label:'',children:[],parent:{}}
   */
  searchIdAndLabel: function (
    treeDataSrc: TreeOriginalData[],
    keyWords: string,
    parentIdMode: boolean,
    exactMatch: boolean = false
  ): TreeOriginalData[] {
    // 添加了上下级次
    let array = this.buildParentAndChildren(treeDataSrc, parentIdMode)
    // 关键字为空则返回所有
    if (!keyWords || keyWords.length <= 0) {
      return array
    }
    // 执行筛选
    for (let i = 0; i < array.length; i++) {
      const node = array[i]
      let isMatched = false
      if (exactMatch) {
        isMatched =
          String(node.id) === (keyWords ?? '') ||
          String(node.label) === (keyWords ?? '')
      } else {
        isMatched =
          String(node.id).indexOf(keyWords ?? '') >= 0 ||
          String(node.label).indexOf(keyWords ?? '') >= 0
      }
      if (!isMatched) {
        // 不匹配则找子级
        recursionRemoveChild(node, keyWords, 'all', exactMatch)
        // 没有子级则删除当前
        if (!node.children || node.children.length <= 0) {
          array.splice(array.indexOf(node), 1)
          i--
        }
      }
    }
    return array
  },
  /**
   * 根据关键字搜索（id）树节点，其中：如果上级节点匹配，则保留叶子节点，其中：如果上级节点匹配，则保留叶子节点，原始数据支持两种模式一种是parentId模式：{id:'',label:'',parentId:''}；另一种是children模式：{id:'',label:'',children:[]}
   * @param treeDataSrc 原始数据（该数据源不会被改变，放方法会返回新的数组）
   * @param keyWords 搜索关键字
   * @param parentIdMode 原始数据属于parentId模式，否则就是children模式
   * @param exactMatch 是否精准匹配
   * @returns 返回数据结果{id:'',label:'',children:[],parent:{}}
   */
  searchId: function (
    treeDataSrc: TreeOriginalData[],
    keyWords: string,
    parentIdMode: boolean,
    exactMatch: boolean = false
  ): TreeOriginalData[] {
    // 添加了上下级次
    let array = this.buildParentAndChildren(treeDataSrc, parentIdMode)
    // 关键字为空则返回所有
    if (!keyWords || keyWords.length <= 0) {
      return array
    }
    // 执行筛选
    for (let i = 0; i < array.length; i++) {
      const node = array[i]
      let isMatched = false
      if (exactMatch) {
        isMatched = String(node.id) === (keyWords ?? '')
      } else {
        isMatched = String(node.id).indexOf(keyWords ?? '') >= 0
      }
      if (!isMatched) {
        // 不匹配则找子级
        recursionRemoveChild(node, keyWords, 'id', exactMatch)
        // 没有子级则删除当前
        if (!node.children || node.children.length <= 0) {
          array.splice(array.indexOf(node), 1)
          i--
        }
      }
    }
    return array
  },
  /**
   * 根据关键字搜索（label）树节点，其中：如果上级节点匹配，其中：如果上级节点匹配，则保留叶子节点，原始数据支持两种模式一种是parentId模式：{id:'',label:'',parentId:''}；另一种是children模式：{id:'',label:'',children:[]}
   * @param treeDataSrc 原始数据（该数据源不会被改变，放方法会返回新的数组）
   * @param keyWords 搜索关键字
   * @param parentIdMode 原始数据属于parentId模式，否则就是children模式
   * @param exactMatch 是否精准匹配
   * @returns 返回数据结果{id:'',label:'',children:[],parent:{}}
   */
  searchLabel: function (
    treeDataSrc: TreeOriginalData[],
    keyWords: string,
    parentIdMode: boolean,
    exactMatch: boolean = false
  ): TreeOriginalData[] {
    // 添加了上下级次
    let array = this.buildParentAndChildren(treeDataSrc, parentIdMode)
    // 关键字为空则返回所有
    if (!keyWords || keyWords.length <= 0) {
      return array
    }
    // 执行筛选
    for (let i = 0; i < array.length; i++) {
      const node = array[i]
      let isMatched = false
      if (exactMatch) {
        isMatched = String(node.label) === (keyWords ?? '')
      } else {
        isMatched = String(node.label).indexOf(keyWords ?? '') >= 0
      }
      if (!isMatched) {
        // 不匹配则找子级
        recursionRemoveChild(node, keyWords, 'label', exactMatch)
        // 没有子级则删除当前
        if (!node.children || node.children.length <= 0) {
          array.splice(array.indexOf(node), 1)
          i--
        }
      }
    }
    return array
  },
}

export { TreeUtils }
