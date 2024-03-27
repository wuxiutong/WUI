<template>
	<div>tree测试</div>
	<legend>
		<figcaption>参数设置</figcaption>
		<fieldset>
			<div class="buttons">
				<span>搜索:</span>
				<input id='__searchInput' v-model="keywords" @keydown.down.prevent="searchKeyDown"
					@keydown.enter.prevent="searchKeywords" />
				<button @click="hideLeafIcon = !hideLeafIcon" class="theme-button blue">{{
					hideLeafIcon ? '显示末级图标' : '隐藏末级图标'
				}}</button>
				<button @click="showCheckbox = !showCheckbox" :disabled="multipleCheck" class="theme-button blue">{{
					showCheckbox ? '显示复选框' : '隐藏复选框'
				}}</button>
				<button @click="showId = !showId" class="theme-button blue">{{ showId ? '显示ID' : '隐藏ID' }}</button>
				<button @click="showLine = !showLine" class="theme-button blue">{{ showLine ? '显示虚线' : '显示虚线' }}</button>
				<button @click="multipleCheck = !multipleCheck" class="theme-button blue">{{ multipleCheck ? '单选模式' : '多选模式'
					}}</button>
				<button @click="onlyLeafCheck = !onlyLeafCheck" class="theme-button blue">{{ onlyLeafCheck ? '允许选中所有' :
					'仅允许选中末级'
					}}</button>
				<button @click="nodeContentClickAction = (nodeContentClickAction === 'expand' ? 'check' : 'expand')"
					class="theme-button blue">{{
					nodeContentClickAction === 'expand' ? '节点点击（勾选/取消）' :
						'节点点击（展开/折叠）'
				}}</button>
				<button @click="cascade = !cascade" class="theme-button blue">{{ cascade ? '层级联动' : '独立节点' }}</button>
				<button @click="expandAll = !expandAll" class="theme-button blue">{{ !expandAll ? '展开所有' : '折叠所有' }}</button>
				<button @click="checkedAll = !checkedAll" :disabled="!multipleCheck" class="theme-button blue">{{ !checkedAll ?
					'勾选所有' : '取消勾选'
					}}</button>
				<button @click="enableCheckConfirm = !enableCheckConfirm" class="theme-button blue">{{
					!enableCheckConfirm ?
						'启用勾选确认' : '禁用勾选确认'
				}}</button>
				<button @click="loadData" class="theme-button blue">加载数据</button>
				<button @click="clearData" class="theme-button blue">清空数据</button>
			</div>
		</fieldset>
	</legend>
	<legend>
		<figcaption>主题设置</figcaption>
		<fieldset>
			<div class="buttons">
				<button @click="switchTheme('blue')" class="theme-button blue">蓝色主题</button>
				<button @click="switchTheme('red')" class="theme-button red">红色主题</button>
				<button @click="increaseFontSize" class="size-button large">字体+</button>
				<button @click="defaultFontSize" class="size-button normal">字体（{{ fontSize }}px）</button>
				<button @click="decreaseFontSize" class="size-button small">字体-</button>
			</div>
		</fieldset>
	</legend>
	<WuiTree :data="treeData" class="tree" sender-element-id="__searchInput" :tree-id="randomStr" :show-id="showId"
		:show-line="showLine" :checkedAll="checkedAll" :hideLeafIcon="hideLeafIcon" :cascade="cascade"
		:expand-all="expandAll" :showCheckbox="showCheckbox" :multipleCheck="multipleCheck"
		:nodeContentClickAction="nodeContentClickAction" :enableCheckConfirm="enableCheckConfirm"
		:onlyLeafCheck="onlyLeafCheck" :enableDbclick="true" @update:checkedKeys="checkedChanged" :focused-id="focusedId"
		@tree-node-checkbox-click="treeNodeCheckboxClick" idSeparator="&nbsp;&nbsp;&nbsp;">
		<!-- <template v-slot="slotProps">
			<div class="tree-node-content-div">
				<div>
					<span v-if="showId">{{ slotProps.treeNode.id }}</span>
					<span>{{ slotProps.treeNode.label }}</span>
				</div>
				  <a href="#" v-if="!slotProps.treeNode.children || slotProps.treeNode.children.length <= 0">选择</a> 
		</div>
</template> -->
	</WuiTree>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { WuiTree, randomString, TreeUtils } from '@wuxiutong/wui'
import { TreeNodeContentClickActionEnum, } from '@wuxiutong/wui'
import type { TreeOriginalData } from '@wuxiutong/wui'
// import { WuiTree } from '@WUI/components'
// import { TreeNodeContentClickActionEnum, } from '@WUI/components'
// import type { TreeOriginalData } from '@WUI/components'
import { TreeCheckedKeys, TreeNodeData } from 'packages/components';
let treeDataSrc: TreeOriginalData[] = [
	{
		label: '所有',
		id: '0',
		__parentId: '', children: []
	},
	{
		label: '第一级1',
		id: '1',
		__parentId: '0'
	},
	{
		label: '第一级1-1 这一定特别长长长长长长长长长长长长长长长长长长长长长尾巴',
		id: '1-1',
		__parentId: '1'
	},
	{ label: '第一级1-2', id: '1-2', __parentId: '1' },
	{ label: '第一级1-3', id: '1-3', __parentId: '1', disabled: true },
	{
		label: '第一级2',
		id: '2',
		__parentId: '0'
	},
	{ label: '第一级2-1', id: '2-1', __parentId: '2' },
	{ label: '第一级2-2', id: '2-2', __parentId: '2' },
	{ label: '第一级有末级3', id: '2-3', __parentId: '2' },
	{ label: '第一级2-3-1', id: '2-3-1', __parentId: '2-3' },
	{ label: '第一级2-3-2', id: '2-3-2', __parentId: '2-3' },
	{ label: '第一级有末级4', id: '2-4', __parentId: '2' },
	{ label: '第一级2-4-1', id: '2-4-1', __parentId: '2-4' },
	{ label: '第一级2-4-2', id: '2-4-2', __parentId: '2-4' },
	{ label: '第一级2-4-3', id: '2-4-3', __parentId: '2-4' }
]

let treeData = ref<TreeOriginalData[]>()

const enableCheckConfirm = ref<boolean>(false)
const nodeContentClickAction = ref<TreeNodeContentClickActionEnum>(TreeNodeContentClickActionEnum.EXPAND)
const onlyLeafCheck = ref(true)
const multipleCheck = ref(true)
const showCheckbox = ref(true)
const showLine = ref(true)
const cascade = ref(true)
const showId = ref(true)
const hideLeafIcon = ref(true)
let expandAll = ref<boolean>(false);
let fontSize = ref<number>(14);
let checkedAll = ref<boolean>(false);
let randomStr = randomString(32)
let keywords = ref<string>('')
let focusedId = ref<string>('')
function switchTheme(flag: string) {
	document.documentElement.style.setProperty(
		"--theme-primary-color",
		flag === 'red' ? '255,0,0' : '0,0,255'
	);
}

function loadData() {
	treeData.value = TreeUtils.buildParentAndChildren(treeDataSrc, true)
}
function clearData() {
	treeData.value.splice(0, treeData.value.length)
}
function checkedChanged(checkedKeys: TreeCheckedKeys) {
}
function treeNodeCheckboxClick(node: TreeNodeData, fn: Function, e: MouseEvent) {
	// console.log('checkbox点击了：' + node.checked)
	if (enableCheckConfirm.value) {
		if (confirm('是否勾选？')) {
			fn().then(() => {
				console.log('勾选确认完毕')
			})
		} else {
		}
	} else {
		// console.log('无需确认')
	}
}

function increaseFontSize() {
	fontSize.value = fontSize.value + 1;
	document.documentElement.style.setProperty(
		"font-size",
		fontSize.value + 'px'
	);
	console.log('当前字体大小：' + (fontSize.value + 'px'))
}

function decreaseFontSize() {
	fontSize.value = fontSize.value - 1;
	document.documentElement.style.setProperty(
		"font-size",
		fontSize.value + 'px'
	);
}
function defaultFontSize() {
	fontSize.value = 14;
	document.documentElement.style.setProperty(
		"font-size",
		fontSize.value + 'px'
	);
}

// 搜索框汇总向下方向键按下事件
function searchKeyDown(e: KeyboardEvent) {
	focusedId.value = "2-3-1"
	// 清空focusedId
	setTimeout(() => {
		focusedId.value = ""
	}, 100)
	// let dom = document.querySelector("#" + randomStr + "__" + 1)
	// if (dom) {
	// 	dom.focus()
	// }
}

// 搜索框回车事件
function searchKeywords() {
	const ddata = TreeUtils.searchIdAndLabel(treeDataSrc, keywords.value, true, false)
	treeData.value = ddata
}

// 初始化数据
function init() {
	treeData.value = TreeUtils.buildParentAndChildren(treeDataSrc, true)
}

init();

</script>


<style lang="less">
:root {
	// --theme-primary-color: 0, 0, 255;
	font-size: 14px;
}

.buttons {

	.theme-button {
		min-width: 60px;
		height: 35px;

		&.red {
			color: #fa0707;
		}

		&.blue {
			color: blue;
		}

		&:not(:first-child) {
			margin-left: 10px;
		}
	}

	.size-button {
		min-width: 60px;
		height: 35px;

		&:not(:first-child) {
			margin-left: 10px;
		}
	}

}

.tree {
	height: 300px;
	border: 1px solid gray;
}

.tree-node-content-div {
	display: flex;

	span {}

	div {
		// max-width: calc(100% - 3em);
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	a {
		margin-left: 1em;
	}
}
</style>