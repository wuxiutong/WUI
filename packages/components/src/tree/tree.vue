<template>
  <div class="z-tree" :class="treeId">
    <div v-if="!treeNodeData || treeNodeData.length <= 0" class="z-tree-empty-tips">
      <span>{{ emptyTips }}</span>
    </div>
    <tree-node v-else v-for="(node, index) in treeNodeData" :sender-element-id="senderElementId" :tree-id="treeId"
      :max-tab-index="treeNodeList.length + 1" :key="node.id ? node.id : index" :treeNode="node" :cascade="cascade"
      :showCheckbox="showCheckbox" :transition="transition" :showLine="showLine" :expandAll="expandAll"
      :checkedAll="checkedAll" :multipleCheck="multipleCheck" :onlyLeafCheck="onlyLeafCheck"
      :enableDblclick="enableDblclick" :enableWholeAnchorStatus="enableWholeAnchorStatus"
      :enableCheckConfirm="enableCheckConfirm" :showId="showId" :idSeparator="idSeparator" :hideLeafIcon="hideLeafIcon"
      :hideExpander="hideExpander" :nodeContentClickAction="nodeContentClickAction" :checkedNodes="treeNodeChecked"
      :expandKeys="expandKeys" @checkbox-click="checkboxClickEvent" @update:expand-node="treeExpanderClickEvent"
      @node-click="treeNodeClickEvent" @node-dblclick="treeNodeDblclickEvent">
      <template #default="slotProps">
        <slot :treeNode="slotProps.treeNode"></slot>
      </template>
    </tree-node>
  </div>
</template>
<script lang="ts" setup>
defineOptions({ name: "wui-tree" })
import { ref, defineProps, watch, reactive } from 'vue'
import { randomString } from '../utils'
import { TreeNode } from './tree-node'
import {
  TreeNodeData,
  TreeProps,
  TreeOriginalData,
  TreeNodeCheckedType,
  TreeCheckedKeys,
  TreeEmits,
  TreeNodeContentClickActionEnum
} from './type'
const emit = defineEmits<TreeEmits>()
const props = withDefaults(defineProps<TreeProps>(), {
  data: () => {
    return []
  },
  checkedKeys: () => {
    return []
  },
  expandKeys: () => {
    return []
  },
  senderElementId: '',
  treeId: () => randomString(32),
  cascade: true,
  showCheckbox: false,
  transition: 'slide-fade',
  showLine: true,
  expandAll: false,
  checkedAll: false,
  multipleCheck: true,
  onlyLeafCheck: true,
  enableDblclick: false,
  enableWholeAnchorStatus: false,
  enableCheckConfirm: false,
  showId: false,
  idSeparator: '',
  hideLeafIcon: false,
  hideExpander: false,
  nodeContentClickAction: TreeNodeContentClickActionEnum.NONE,
  emptyTips: '无数据'
})
/***
 * data
 */
// 该列表是树节点列表，用于渲染树节点，存在上下级关系
let treeNodeData = reactive<TreeNodeData[]>([])
// 该列表是平铺列表，用于缓存节点所有数据
const treeNodeList = ref<TreeNodeData[]>([])
const treeNodeChecked = ref<TreeNodeData[]>([])
const treeNodeExpand = ref<TreeNodeData[]>([])
watch(
  () => props.data,
  () => {
    initNode()
  },
  {
    deep: true
  }
)
watch(
  () => props.checkedKeys,
  () => {
    refreshCheckedNodes()
  },
  {
    deep: true
  }
)
watch(
  () => props.showCheckbox,
  () => {
    refreshCheckedNodes()
  }
)
watch(
  () => props.expandAll,
  () => {
    treeNodeList.value.forEach((node) => {
      node.expanded = props.expandAll
    })
  }
)
watch(
  () => props.checkedAll,
  () => {
    if (props.checkedAll) {
      // 取消勾选
      treeNodeChecked.value.forEach(element => {
        element.checked = 0;
      })
      // 勾选列表中移除
      treeNodeChecked.value.splice(0, treeNodeChecked.value.length)
      const data = treeNodeList.value.filter((item) => !item.disabled)
      if (data && data.length > 0) {
        data.forEach(element => {
          treeNodeChecked.value.push(element)
          element.checked = 1
        });
      }
    } else {
      // 取消勾选
      treeNodeChecked.value.forEach(element => {
        element.checked = 0;
      })
      treeNodeChecked.value.splice(0, treeNodeChecked.value.length)
    }
    // 发布给父组件
    let checkedKeys: TreeCheckedKeys[] = []
    treeNodeChecked.value.forEach((item) => {
      checkedKeys.push({ id: item.id, label: item.label })
    })
    emit('update:checkedKeys', checkedKeys)
  }
)
watch(
  () => props.expandKeys,
  () => {
    refreshExpandNodes()
  },
  {
    deep: true
  }
)
/**
 * 初始化树子节点
 * @param array 原始数据内容
 * @param parentNode
 */
function initChildren(array: TreeOriginalData[], parentNode: TreeNodeData | null, tabIndex: { index: number }) {
  if (parentNode) {
    array.forEach((item) => {
      let node: TreeNodeData = {
        label: item.label,
        id: item.id,
        tabIndex: tabIndex.index++,
        children: [],
        checked: 0,
        disabled: item.disabled,
        expanded: false,
        parent: parentNode
      }
      // 添加默认选中项
      if (props.checkedKeys.filter((item) => node.id === item.id).length > 0) {
        treeNodeChecked.value.push(node)
      }
      // 添加默认展开项
      if (props.expandKeys.filter((item) => node.id === item.id).length > 0) {
        treeNodeExpand.value.push(node)
      }
      if (parentNode.children === undefined) {
        parentNode.children = []
      }
      parentNode.children.push(node)
      treeNodeList.value.push(node)
      if (item.children && item.children.length) {
        initChildren(item.children, node, tabIndex)
      }
    })
  }
}
/**
 * 初始化树节点
 */
function initNode() {
  // 清空
  treeNodeData.splice(0, treeNodeData.length)
  treeNodeChecked.value.splice(0, treeNodeChecked.value.length)
  treeNodeExpand.value.splice(0, treeNodeExpand.value.length)
  treeNodeList.value = []
  let tabIndex = { index: 1 }
  props.data.forEach((item) => {
    let node: TreeNodeData = {
      label: item.label,
      tabIndex: tabIndex.index++,
      id: item.id,
      children: [],
      checked: 0,
      disabled: item.disabled,
      expanded: false,
      parent: null
    }
    // 添加默认选中项
    if (props.checkedKeys.filter((item) => node.id === item.id).length > 0) {
      treeNodeChecked.value.push(node)
    }
    // 添加默认展开项
    if (props.expandKeys.filter((item) => node.id === item.id).length > 0) {
      treeNodeExpand.value.push(node)
    }
    if (item.children && item.children.length) {
      initChildren(item.children, node, tabIndex)
    }
    treeNodeData.push(node)
    treeNodeList.value.push(node)
  })
  // 节点生成完成后更新选中项的显示标识checked
  treeNodeChecked.value.forEach((checkedItem) => {
    checkedItem.checked = 1
    if (props.cascade) {
      if (checkedItem.children && checkedItem.children.length > 0) {
        changeChildrenCheckedStatus(checkedItem, 1)
      }
      if (checkedItem.parent) {
        changeParentNodeStatus(checkedItem, 1)
      }
    }
  })
  // 节点生成完成后更新展开项的显示标识expanded
  treeNodeExpand.value.forEach((expandItem) => {
    if (expandItem.children && expandItem.children.length > 0) {
      expandItem.expanded = true
      if (expandItem.parent) {
        changeTreeParentNodeExpandStatus(expandItem.parent, true)
      }
    }
  })
  // 节点展开项不存在，则遵循expandAll表示 wxt 20240326
  if (!treeNodeExpand.value || treeNodeExpand.value.length <= 0) {
    treeNodeList.value.forEach((item) => {
      item.expanded = props.expandAll
    })
  }
}
/**
 * 递归遍历父节点，改变展开状态
 */
function changeTreeParentNodeExpandStatus(node: TreeNodeData, value: boolean) {
  node.expanded = value
  if (node.parent) {
    changeTreeParentNodeExpandStatus(node.parent, value)
  }
}
/**
 * 根据传递的checkedKeys，刷新选中节点
 */
function refreshCheckedNodes() {
  // 检查选中项是否已经变化 
  let isChanged = props.checkedKeys.length !== treeNodeChecked.value.length;
  if (!isChanged) {
    props.checkedKeys.some((item) => {
      let isExists = false
      treeNodeList.value.some((node) => {
        if (node.id === item.id) {
          isExists = true
          return true
        }
      })
      if (!isExists) {
        isChanged = true
        return true;
      }
    })
  }
  if (!isChanged) {
    treeNodeList.value.some((item) => {
      let isExists = false
      props.checkedKeys.some((node) => {
        if (node.id === item.id) {
          isExists = true
          return true
        }
      })
      if (!isExists) {
        isChanged = true
        return true;
      }
    })
  }
  if (isChanged) {
    treeNodeChecked.value.splice(0, treeNodeChecked.value.length)
    props.checkedKeys.forEach((item) => {
      treeNodeList.value.some((node) => {
        if (node.id === item.id) {
          treeNodeChecked.value.push(node)
          return true
        }
      })
    })
    // 节点生成完成后更新选中项的显示标识checked
    treeNodeChecked.value.forEach((checkedItem) => {
      checkedItem.checked = 1
      if (props.multipleCheck && props.cascade) {
        if (checkedItem.children && checkedItem.children.length > 0) {
          changeChildrenCheckedStatus(checkedItem, 1)
        }
        if (checkedItem.parent) {
          changeParentNodeStatus(checkedItem, 1)
        }
      }
    })
  }
}
/**
 * 根据传递的expandKeys，刷新展开节点
 */
function refreshExpandNodes() {
  treeNodeExpand.value = []
  props.expandKeys.forEach((item) => {
    treeNodeList.value.some((node) => {
      if (node.id === item.id) {
        treeNodeExpand.value.push(node)
        return true
      }
    })
  })
  // 节点生成完成后更新展开项的显示标识expanded
  treeNodeExpand.value.forEach((expandItem) => {
    if (expandItem.children && expandItem.children.length > 0) {
      expandItem.expanded = true
      if (expandItem.parent) {
        changeTreeParentNodeExpandStatus(expandItem.parent, true)
      }
    }
  })
}

/***
 * 
      // 节点内容点击事件不执行任何操作
      if (props.nodeContentClickAction === NodeContentClickActionEnum.NONE) {
        return false
      } else
        // 节点内容点击事件为勾选
        if (props.nodeContentClickAction === NodeContentClickActionEnum.CHECK) {
          if (node.disabled) {
            return false
          } else {
            checkboxClickEvent(node)
            return false
          }
        }
        // 节点内容点击事件为展开/折叠
        else if (props.nodeContentClickAction === NodeContentClickActionEnum.EXPAND) {
          node.expanded = !node.expanded
        }
 */

/**
 * 点击节点事件
 * 1、多选模式下点击，执行操作为展开/折叠；
 * 2、单选模式下点击，执行操作为选中/取消选中
 */
function treeNodeClickEvent(node: TreeNodeData, $event: MouseEvent) {
  //console.log('点击：' + node.expanded)
  //console.log('节点点击模式：' + props.nodeContentClickAction)
  // 节点内容点击事件不执行任何操作
  if (props.nodeContentClickAction === TreeNodeContentClickActionEnum.NONE) {
    emit('tree-node-click', node, $event)
  } else
    // 节点内容点击事件为勾选
    if (props.nodeContentClickAction === TreeNodeContentClickActionEnum.CHECK) {
      if (props.onlyLeafCheck && node.children && node.children.length > 0) {
        // 如果设置的仅勾选末级，则上级点击时自动展开或折叠
        node.expanded = !node.expanded
        emit('tree-node-click', node, $event)
        return false
      } else if (node.disabled) {
        return false
      } else {
        checkboxClickEvent(node, $event)
        return false
      }
    }
    // 节点内容点击事件为展开/折叠
    else if (props.nodeContentClickAction === TreeNodeContentClickActionEnum.EXPAND) {
      node.expanded = !node.expanded
      emit('tree-node-click', node, $event)
    } else {
      emit('tree-node-click', node, $event)
    }
}
/**
 * 节点双击事件
 */
function treeNodeDblclickEvent(node: TreeNodeData) {
  //console.log('z-tree[双击]节点事件：', node)
  if (props.enableDblclick) {
    if (props.onlyLeafCheck) {
      if (node.children && node.children.length > 0) {
        return false
      }
    }
    for (let i = 0; i < treeNodeChecked.value.length; i++) {
      if (treeNodeChecked.value[i].id !== node.id) {
        treeNodeChecked.value[i].checked = 0
        treeNodeChecked.value.splice(i, 1)
        i--
      }
    }
    const index = treeNodeChecked.value.indexOf(node)
    if (index <= -1) {
      node.checked = 1
      treeNodeChecked.value.push(node)
    }
  }
}
/**
 * 复选框点击事件
 */
function checkboxClickEvent(node: TreeNodeData, e: MouseEvent) {
  if (node.disabled) {
    return
  }
  // 无需勾选确认则直接按照预定规则勾选或取消节点后并且提交tree-node-checkbox-click即可。
  if (!props.enableCheckConfirm) {
    emit('tree-node-checkbox-click', node, () => { }, e)
    nodeCheckOperate(node)
  } else {
    emit('tree-node-checkbox-click', node, () => {
      // 执行节点的实际操作
      return nodeCheckOperate(node)
    }, e)
  }
}

/**
 * 执行节点的实际操作
 */
function nodeCheckOperate(node: TreeNodeData) {
  return new Promise((resolve, reject) => {
    try {
      //1、勾选处理
      if (node.checked !== 1) {
        // 1.1、单选模式下，清空其他选择项目，仅保留当前选择项
        if (!props.multipleCheck) {
          //console.log('单选模式')
          // 1.1.1、如果单选模式下，仅选择叶子节点模式，并且当前节点有子节点，则不改变当前选择状态
          if (props.onlyLeafCheck && node.children && node.children.length > 0) {
            return false
          }
          for (let i = 0; i < treeNodeChecked.value.length; i++) {
            if (treeNodeChecked.value[i].id !== node.id) {
              treeNodeChecked.value[i].checked = 0
              treeNodeChecked.value.splice(i, 1)
              i--
            }
          }
          if (treeNodeChecked.value.length <= 0) {
            node.checked = 1
            if (
              !props.onlyLeafCheck ||
              (props.onlyLeafCheck && (!node.children || node.children.length <= 0))
            ) {
              treeNodeChecked.value.push(node)
            }
          }
        } else {
          //console.log('多选模式')
          // 1.2、多选模式下，添加选择项目
          let exist = false
          treeNodeChecked.value.some((item) => {
            if (item.id === node.id) {
              exist = true
              return true
            }
          })
          // 勾选列表中不存在，则判断是否仅支持叶子节点勾选来添加当前节点
          if (!exist) {
            if (
              !props.onlyLeafCheck ||
              (props.onlyLeafCheck && (!node.children || node.children.length <= 0))
            ) {
              treeNodeChecked.value.push(node)
            }
          }
          // 级联模式下，勾选子节点及父节点
          if (props.cascade) {
            //console.log('勾选级联处理')
            node.checked = 1
            // 多选模式下才执行上下层级联动勾选
            if (props.multipleCheck) {
              if (node.children && node.children.length > 0) {
                changeChildrenCheckedStatus(node, node.checked)
              }
              if (node.parent) {
                changeParentNodeStatus(node, node.checked)
              }
            }
          } else {
            //console.log('非勾选级联处理')
            if (
              !props.onlyLeafCheck ||
              (props.onlyLeafCheck && (!node.children || node.children.length <= 0))
            ) {
              node.checked = 1
            }
          }
        }
      } else {
        //console.log('取消勾选')
        //2、取消勾选处理
        treeNodeChecked.value.some((item) => {
          if (item.id === node.id) {
            item.checked = 0
            treeNodeChecked.value.splice(treeNodeChecked.value.indexOf(item), 1)
            return true
          }
        })
        node.checked = 0
        // 级联模式下，勾选子节点及父节点
        if (props.cascade) {
          // 多选模式下才执行上下层级联动勾选
          if (props.multipleCheck) {
            //console.log('取消勾选级联处理')
            if (node.children && node.children.length > 0) {
              changeChildrenCheckedStatus(node, node.checked)
            }
            if (node.parent) {
              changeParentNodeStatus(node, node.checked)
            }
          }
        }
      }
      let checkedKeys: TreeCheckedKeys[] = []
      treeNodeChecked.value.forEach((item) => {
        checkedKeys.push({ id: item.id, label: item.label })
      })
      emit('update:checkedKeys', checkedKeys)
      resolve(checkedKeys)
    } catch (err) {
      reject(err)
    }
  })
}

/**
 * 节点展开点击事件
 */
function treeExpanderClickEvent(node: TreeNodeData) {
  const index = treeNodeExpand.value.indexOf(node)
  if (node.expanded) {
    node.expanded = false
    if (index > -1) {
      treeNodeExpand.value.splice(index, 1)
    }
  } else {
    node.expanded = true
    if (index <= -1) {
      treeNodeExpand.value.push(node)
    }
  }
}
/***
 * 递归遍历树节点，改变勾选状态
 */
function changeChildrenCheckedStatus(item: TreeNodeData, value: TreeNodeCheckedType) {
  if (item.children && item.children.length) {
    item.children.forEach((child) => {
      if (child.checked !== value) {
        child.checked = value
        const index = treeNodeChecked.value.indexOf(child)
        if (value === 1) {
          if (
            !props.onlyLeafCheck ||
            (props.onlyLeafCheck && (!child.children || child.children.length <= 0))
          ) {
            if (index <= -1) {
              treeNodeChecked.value.push(child)
            }
          }
        } else {
          if (index > -1) {
            treeNodeChecked.value.splice(index, 1)
          }
        }
        if (child.children && child.children.length > 0) {
          changeChildrenCheckedStatus(child, value)
        }
      }
    })
  }
}
/**
 * 遍历父节点，改变勾选状态
 * @param item
 * @param value
 */
function changeParentNodeStatus(item: TreeNodeData, value: TreeNodeCheckedType) {
  if (item.parent) {
    const oldValue = item.parent.checked
    if (value === 0) {
      let checkValue = 0
      item.parent.children?.some((child) => {
        if (child.checked === 1 || child.checked === 2) {
          checkValue = 2
          return true
        }
      })
      item.parent.checked = checkValue as TreeNodeCheckedType;
    } else if (value === 1) {
      let checkValue = 1
      item.parent.children?.some((child) => {
        if (child.checked === 0 || child.checked === 2) {
          checkValue = 2
          return true
        }
      })
      item.parent.checked = checkValue as TreeNodeCheckedType
    } else {
      item.parent.checked = 2
    }
    // 选中列表中去除父节点
    if (item.parent.checked !== 1) {
      const index = treeNodeChecked.value.indexOf(item.parent)
      if (index > -1) {
        treeNodeChecked.value.splice(index, 1)
      }
    } else if (!props.onlyLeafCheck) {
      const index = treeNodeChecked.value.indexOf(item.parent)
      if (index <= -1) {
        treeNodeChecked.value.push(item.parent)
      }
    }
    if (oldValue !== item.parent.checked) {
      changeParentNodeStatus(item.parent, value)
    }
  }
}
initNode()

</script>
<style lang="less">
.z-tree {
  position: relative;
  height: auto;
  width: auto;
}
</style>./type
