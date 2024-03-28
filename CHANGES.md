## Changelog

### 0.1.1

_2024-03-23_

#### Bug fixes

none

#### Features

- Components [tree] Add automatic folding/expand judgment, With prop nodeContentClickAction: TreeNodeContentClickActionEnum.CHECK.

### 0.1.2

_2024-03-23_

#### Bug fixes

none

#### Features

- Components [tree] remove "node-content" slot,add default slot for node content.

### 0.1.3

_2024-03-23_

#### Bug fixes

none

#### Features

- Components [tree] remove "node-content" slot,add default slot for node content.

### 0.1.4

_2024-03-25_

#### Bug fixes

fix display error!

#### Features

none

### 0.1.5

_2024-03-25_

#### Bug fixes

fix disabled tree node cursor:not allowed

#### Features

none

### 0.2.

_2024-03-27_

#### Bug fixes

none

#### Features

1, new response keyboard up and down left and right key events; 2. Add the "treeId" attribute to specify the dom id of the tree; 3. Add the "senderElementId" attribute to specify the caller ID; 4. Add radio mode and press enter to focus the cursor on the call according to "senderElementId";5. Add the component named "Utils";

### 0.2.1

_2024-03-27_

#### Bug fixes

fixed TreeUtils bugs

#### Features

### 0.2.2

_2024-03-27_

#### Bug fixes

none

#### Features

组件：WuiTree
1、新增 shift+ctrl+left 键盘事件折叠所有节点。
2、新增 shift+left 键盘事件折叠当前节点的所有子节点。
3、新增 shift+ctrl+right 键盘事件展开所有节点。
4、新增 shift+right 键盘事件展开当前节点的所有子节点。
5、新增 esc 键盘事件替代方向键向上键返回焦点回到 Dom id 为 senderElementId 值的 dom 的功能。
6、新增 focusedId 属性，通过给改属性赋值节点内容的 ID 值，焦点会自动跳转到指定节点，如果该节点的所有上级处于折叠状态，将自动展开，推荐使用先赋值然后定时清空。
如下：
focusedId.value = "2-3-1"
setTimeout(() => {
focusedId.value = ""
}, 100)

### 0.2.7

_2024-03-28_

#### Bug fixes

1、修改字体大小 css 变量--theme-font-size 变更为--wui-font-size，
2、修改主题色 css 变量--theme-primary-color 变更为--wui-primary-color

#### Features
