<template>
  <div class="z-tree-node" :class="treeNodeClass(treeNode)">
    <div class="z-tree-node-anchor" :id="treeId + '__' + treeNode.tabIndex" :tabIndex="treeNode.tabIndex"
      :class="treeNodeStatusClass(treeNode)" @keydown.down.prevent="downKeyDown" @keydown.up.prevent="upKeyDown"
      @keydown.left.prevent="leftKeyDown" @keydown.right.prevent="rightKeyDown" @keydown.enter.prevent="enterKeyDown"
      @click="treeNodeClick(treeNode, $event)" @dblclick="treeNodeDblClick(treeNode, $event)">
      <span class="z-tree-node-anchor-arrow" v-if="!hideExpander">
        <!-- 折叠图标1 -->
        <span class="z-tree-node-anchor-arrow-expander" v-if="treeNode.children && treeNode.children.length"
          @click.stop="treeExpanderClick(treeNode)">
          <!-- 展开状态减号图标 -->
          <svg v-if="treeNode.expanded && showLine" class="z-tree-node-anchor-arrow-expander-minus"
            xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 16 16">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"
              d="M 1.2595435,6.004727 H 10.740457"
              style="stroke-width:0.509454;stroke-linecap:square;stroke-dasharray:none" />
          </svg>
          <svg v-if="treeNode.expanded && !showLine" class="z-tree-node-anchor-arrow-expander-arrow-down" width="12"
            height="12" version="1.1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="m 0,2.3 5.999999,8 L 12,2.3 Z" id="path1" style="stroke-width:1.38564" />
          </svg>
          <!-- 折叠状态加号 -->
          <svg xmlns="http://www.w3.org/2000/svg" v-if="showLine && !treeNode.expanded"
            class="z-tree-node-anchor-arrow-expander-plus" viewBox="-1 -1 14 14">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M 5.994727,1.254727 V 10.73564" id="path1-8"
              style="stroke-width:0.509454;stroke-linecap:square;stroke-dasharray:none" />
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M 1.2595435,6.004727 H 10.740457" id="path1"
              style="stroke-width:0.509454;stroke-linecap:square;stroke-dasharray:none" />
          </svg>
          <svg v-if="!showLine && !treeNode.expanded" class="z-tree-node-anchor-arrow-expander-arrow-right" width="12"
            height="12" version="1.1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M 2.3,12 10.3,6.000001 2.3,0 Z" id="path1" style="stroke-width:1.38564" />
          </svg>
        </span>
        <!-- 末级图标 -->
        <span v-else-if="!hideLeafIcon" class="z-tree-node-anchor-arrow-nochild"
          @click.stop="treeExpanderClick(treeNode)">
          <!-- 无子元素的file图标 -->
          <svg width="14px" height="14px" viewBox="0 -30 256 300">
            <path fill="currentColor"
              d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4" />
          </svg>
          <!-- <div v-else class="z-tree-node-anchor-arrow-nochild-noicon"></div> -->
        </span>
      </span>
      <!-- 勾选框 -->
      <span class="z-tree-node-anchor-checkbox" :class="checkboxStatusClass(treeNode)"
        v-show="multipleCheck || (showCheckbox && !multipleCheck)">
        <span class="z-tree-node-anchor-checkbox-icon" @click.stop="checkboxClick(treeNode, $event)">
          <!-- 勾选框图标 -->
          <span class="z-tree-node-anchor-checkbox-icon-checked" v-if="treeNode.checked === 1">
            <!-- 勾选 -->
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 3 12 12">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="1.2919" d="M 1.64595,9.2236174 4.5486491,12.354075 10.354047,5.64595"
                style="stroke-width:1.5;stroke-dasharray:none" />
            </svg>
          </span>
          <span class="z-tree-node-anchor-checkbox-icon-half-checked" v-else-if="treeNode.checked === 2">
            <!-- 半勾选 -->
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 3 12 12">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="1.2919" d="M 1.73638,8.993499 4.2115414,9.013614 10.263617,8.98638"
                style="stroke-width:1.47276;stroke-linejoin:round;stroke-dasharray:none" sodipodi:nodetypes="ccc" />
            </svg>
          </span>
          <span class="z-tree-node-anchor-checkbox-icon-unchecked" v-else>
            <!-- 未勾选 -->
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 0 0">
              <path fill="currentColor" />
            </svg>
          </span>
        </span>
      </span>
      <!-- 组件 主要内容，默认分配为id-separator-label区域 -->
      <div class="z-tree-node-anchor-content"
        :class="(hideLeafIcon && (!treeNode.children || treeNode.children.length <= 0) && (!showCheckbox && !multipleCheck)) ? 'z-tree-node-anchor-content-noicon-nocheckbox' : ''">
        <slot :treeNode="treeNode">
          <div class="z-tree-node-anchor-content-default">
            <span class="z-tree-node-anchor-content-id" v-if="showId">{{ treeNode.id }}</span>
            <span class="z-tree-node-anchor-content-separator" v-if="showId" v-html="idSeparator"></span>
            <span class="z-tree-node-anchor-content-label">{{ treeNode.label }}</span>
          </div>
        </slot>
      </div>
    </div>
    <Transition :name="transition" mode="out-in">
      <div class="z-tree-node-child" v-if="treeNode.expanded">
        <tree-node v-for="(node, index) in treeNode.children" :sender-element-id="senderElementId" mode="out-in"
          :key="node.id ? node.id : index" :tree-id="treeId" :max-tab-index="maxTabIndex" :cascade="cascade"
          :showCheckbox="showCheckbox" :transition="transition" :showLine="showLine" :expandAll="expandAll"
          :checkedAll="checkedAll" :multipleCheck="multipleCheck" :onlyLeafCheck="onlyLeafCheck"
          :enableDblclick="enableDblclick" :enableWholeAnchorStatus="enableWholeAnchorStatus"
          :enableCheckConfirm="enableCheckConfirm" :showId="showId" :idSeparator="idSeparator"
          :hideLeafIcon="hideLeafIcon" :hideExpander="hideExpander" :nodeContentClickAction="nodeContentClickAction"
          :treeNode="node" :checked-nodes="checkedNodes" :expandKeys="expandKeys"
          @checkbox-click="checkboxClickBubbleEvent" @update:expand-node="treeExpanderClickBubbleEvent"
          @node-click="treeNodeClickBubbleEvent" @node-dblclick="treeNodeDblClickBubbleEvent" v-if="treeNode.expanded">
          <template #default="slotProps: any">
            <slot :treeNode="slotProps.treeNode"></slot>
          </template>
        </tree-node>
      </div>
    </Transition>
  </div>
</template>
<script lang="ts">
export default {
  name: 'TreeNode'
}
</script>
<script lang="ts" setup>
import './style/tree-node.less'
import { TreeNode } from './tree-node'
import { ref, defineProps, watch, Transition } from 'vue'
import { TreeNodeData, TreeItemProps, TreeNodeEmits, TreeNodeContentClickActionEnum, TreeConfig } from './type'
import { tree } from 'gulp';
/**
参数
*/
const props = withDefaults(defineProps<TreeItemProps>(), {
  checkedNodes: () => {
    return []
  },
  expandKeys: () => {
    return []
  },
  treeId: '',
  senderElementId: '',
  cascade: true,
  showCheckbox: false,
  transition: 'slide-fade',
  showLine: true,
  expandAll: false,
  multipleCheck: true,
  onlyLeafCheck: true,
  enableDblclick: false,
  enableWholeAnchorStatus: false,
  enableCheckConfirm: false,
  showId: false,
  idSeparator: '',
  hideLeafIcon: false,
  hideExpander: false,
  nodeContentClickAction: TreeNodeContentClickActionEnum.NONE
})
/**
 * data
 */
// 单击计时器
let clickTimer: any = null
let isDoubleClick = false
const emit = defineEmits<TreeNodeEmits>()

watch(
  () => props.treeNode,
  () => {
  }
)
// 返回节点的状态class
function treeNodeStatusClass(node: TreeNodeData) {
  let clazzs = node.disabled ? 'z-tree-node-anchor-disabled' : ''
  // 判断是否选中
  if (props.enableWholeAnchorStatus || !props.multipleCheck) {
    props.checkedNodes.some((item) => {
      if (node.id === item.id) {
        clazzs += ' z-tree-node-anchor-selected'
        return true
      }
    })
  }
  // 判断是否disabled
  return clazzs
}

// 节点隐藏及节点线class
function treeNodeClass(node: TreeNodeData) {
  let clazzs = ''
  // 判断是否显示line
  if (props.showLine) {
    clazzs += ' z-tree-node-line'
  }
  return clazzs
}

/**
 * 返回复选框的状态class
 * 情况1：当层级独立时并且仅限叶子节点时，非叶子节点不可选；
 * 情况2：当单选模式并且仅限叶子节点时，非叶子节点不可选；
 */
function checkboxStatusClass(node: TreeNodeData) {
  if (node.children && node.children.length > 0) {
    if (props.onlyLeafCheck && (!props.multipleCheck || !props.cascade)) {
      return 'z-tree-node-anchor-checkbox-disabled'
    }
  }
}

/**
 * 点击节点
 * 单选模式下需要响应双击事件，其他模式下直接触发
 */
function treeNodeClick(item: TreeNodeData, e: MouseEvent) {
  if (props.enableDblclick) {
    isDoubleClick = false
    clickTimer = setTimeout(() => {
      if (isDoubleClick) {
        return
      } else {
        treeNodeClickEvent(item, e)
      }
    }, 200)
  } else {
    treeNodeClickEvent(item, e)
  }
}
/***
 * 节点事件具体实现
 * 多选模式下，点击节点展开或者折叠
 * 单选模式且仅选择子节点模式下，非叶子节点展开或者折叠，叶子节点直接触发点击事件
 */
function treeNodeClickEvent(node: TreeNodeData, e: MouseEvent) {
  emit('node-click', node, e)
}
/**
 * 点击冒泡至上层事件
 */
function treeNodeClickBubbleEvent(node: TreeNodeData, e: MouseEvent) {
  emit('node-click', node, e)
}
/**
 * 双击节点
 * 仅单选模式先支持响应双击事件，其他模式下均不响应
 */
function treeNodeDblClick(item: TreeNodeData, e: MouseEvent) {
  if (props.enableDblclick) {
    isDoubleClick = true
    clearTimeout(clickTimer)
    emit('node-dblclick', item, e)
  }
}
function treeNodeDblClickBubbleEvent(item: TreeNodeData, e: MouseEvent) {
  emit('node-dblclick', item, e)
}

// 展开/折叠节点
function treeExpanderClick(node: TreeNodeData) {
  emit('update:expandNode', node)
}
// 展开/折叠节点
function treeExpanderClickBubbleEvent(node: TreeNodeData) {
  emit('update:expandNode', node)
}
/**
 * 节点勾选框点击事件
 */
function checkboxClick(node: TreeNodeData, e: MouseEvent) {
  emit('checkbox-click', node, e)
}
/**
 * 节点勾选点击冒泡事件
 */
function checkboxClickBubbleEvent(node: TreeNodeData, e: MouseEvent) {
  emit('checkbox-click', node, e)
}

// 上键点击事件
function upKeyDown() {
  rollUp(props.treeNode.tabIndex ?? 0)
}
function rollUp(tabIndex: number) {
  const nodeEle = document.querySelector('#' + props.treeId + '__' + (tabIndex - 1))
  if (nodeEle) {
    nodeEle.focus()
  } else {
    if (tabIndex > 0) {
      rollUp(tabIndex - 1)
    } else {
      if (props.senderElementId) {
        const senderElement = document.querySelector('#' + props.senderElementId);
        if (senderElement) {
          senderElement.focus()
        }
      }
      // 跳回
      // emit('up-key-to-leave', props.treeNode)
    }
  }
}

// 下键点击事件
function downKeyDown() {
  rollDown(props.treeNode.tabIndex ?? 0)
}
function rollDown(tabIndex: number) {
  const domEle = document.querySelector('#' + props.treeId + '__' + (tabIndex + 1))
  if (domEle) {
    domEle.focus()
  } else {
    if (tabIndex <= props.maxTabIndex && tabIndex <= Number.MAX_SAFE_INTEGER) {
      rollDown(tabIndex + 1)
    }
  }
}

// 回车事件
function enterKeyDown() {
  checkboxClick(props.treeNode, new MouseEvent('click'))
  // 仅限节点可用，单选模式下有效
  if (props.senderElementId && !props.multipleCheck && !props.treeNode.disabled &&
    (
      (props.onlyLeafCheck && (!props.treeNode.children || props.treeNode.children.length <= 0))
      || !props.onlyLeafCheck
    )
  ) {
    const senderElement = document.querySelector('#' + props.senderElementId);
    if (senderElement) {
      senderElement.focus()
    }
  }
}
// 方向键右键事件
function rightKeyDown() {
  props.treeNode.expanded = true
}
// 方向键左键事件
function leftKeyDown() {
  props.treeNode.expanded = false
}
</script>