<template>
	<div>tree测试</div>
	<legend>
		<figcaption>参数设置</figcaption>
		<fieldset>
			<div class="buttons">
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
	<WuiTree :data="treeData" class="tree" :show-id="showId" :show-line="showLine" :checkedAll="checkedAll"
		:cascade="cascade" :expand-all="expandAll" :showCheckbox="showCheckbox" :multipleCheck="multipleCheck"
		:nodeContentClickAction="nodeContentClickAction" :enableCheckConfirm="enableCheckConfirm"
		:onlyLeafCheck="onlyLeafCheck" :enableDbclick="true" @update:checkedKeys="checkedChanged"
		@tree-node-checkbox-click="treeNodeCheckboxClick" idSeparator="&nbsp;&nbsp;&nbsp;">
	</WuiTree>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { WuiTree } from '@WUI/components'
import { TreeNodeContentClickActionEnum, } from '@WUI/components'
import type { TreeOriginalData } from '@WUI/components'
import { TreeCheckedKeys, TreeNodeData } from 'packages/components';
const treeData = ref<TreeOriginalData[]>([
	{
		label: '所有', id: '0', children: [
			{
				label: '第一级1', id: '1', children: [
					{ label: '第一级1-1 这是超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长超级长', id: '1-1' },
					{ label: '第一级1-2', id: '1-2' },
					{ label: '第一级1-3', id: '1-3' }
				]
			},
			{
				label: '第一级2', id: '2', disabled: true, children: [
					{ label: '第一级2-1', id: '2-1' },
					{ label: '第一级2-2', id: '2-2' },
					{ label: '第一级2-3', id: '2-3' }
				]
			},
			{
				label: '第一级3', id: '3', children: [
					{ label: '第一级3-1', id: '3-1' },
					{ label: '第一级3-2', id: '3-2' },
					{ label: '第一级3-3', id: '3-3' }
				]
			},
			{
				label: '第一级4', id: '4', children: [
					{ label: '第一级4-1', id: '5-1' },
					{ label: '第一级5-2', id: '5-2' },
					{ label: '第一级5-3', id: '5-3' }
				]
			}
		]
	}
])
const enableCheckConfirm = ref<boolean>(false)
const nodeContentClickAction = ref<TreeNodeContentClickActionEnum>(TreeNodeContentClickActionEnum.EXPAND)
const onlyLeafCheck = ref(true)
const multipleCheck = ref(true)
const showCheckbox = ref(true)
const showLine = ref(true)
const cascade = ref(true)
const showId = ref(false)
let expandAll = ref<boolean>(false);
let fontSize = ref<number>(14);
let checkedAll = ref<boolean>(false);
function switchTheme(flag: string) {
	document.documentElement.style.setProperty(
		"--theme-primary-color",
		flag === 'red' ? '255,0,0' : '0,0,255'
	);
}

function loadData() {
	treeData.value = [
		{
			label: '所有', id: '0', children: [
				{
					label: '第一级1', id: '1', children: [
						{ label: '第一级1-1', id: '1-1' },
						{ label: '第一级1-2', id: '1-2' },
						{ label: '第一级1-3', id: '1-3' }
					]
				},
				{
					label: '第一级2', id: '2', children: [
						{ label: '第一级2-1', id: '2-1' },
						{ label: '第一级2-2', id: '2-2' },
						{ label: '第一级2-3', id: '2-3' }
					]
				},
				{
					label: '第一级3', id: '3', children: [
						{ label: '第一级3-1', id: '3-1' },
						{ label: '第一级3-2', id: '3-2' },
						{ label: '第一级3-3', id: '3-3' }
					]
				},
				{
					label: '第一级4', id: '4', children: [
						{ label: '第一级4-1', id: '5-1' },
						{ label: '第一级5-2', id: '5-2' },
						{ label: '第一级5-3', id: '5-3' }
					]
				}
			]
		}
	]
}
function clearData() {
	treeData.value.splice(0, treeData.value.length)
}
function checkedChanged(checkedKeys: TreeCheckedKeys) {
}
function treeNodeCheckboxClick(node: TreeNodeData, fn: Function, e: MouseEvent) {
	console.log('checkbox点击了：' + node.checked)
	if (enableCheckConfirm.value) {
		if (confirm('是否勾选？')) {
			fn().then(() => {
				console.log('勾选确认完毕')
			})
		} else {
		}
	} else {
		console.log('无需确认')
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
	console.log('当前字体大小：' + fontSize.value + 'px')
}
function defaultFontSize() {
	fontSize.value = 14;
	document.documentElement.style.setProperty(
		"font-size",
		fontSize.value + 'px'
	);
	console.log('当前字体大小：' + fontSize.value + 'px')
}
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
</style>