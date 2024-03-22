export type StringFn = () => string;
export type StringOrNumber = string | number;
export type KeysType = (number | string)[];
/**
 * @description: 树组件节点内容点击动作
 */
export declare enum TreeNodeContentClickActionEnum {
    EXPAND = "expand",
    CHECK = "check",
    NONE = "none",
    "" = ""
}
/**
 * @description: 树组件配置项
 * @param {boolean} cascade - 是否级联选择
 * @param {boolean} showCheckbox - 是否显示复选框
 * @param {boolean} transition - 是否开启折叠动画, slide-fade或者置空，模式为slide-fade
 * @param {boolean} showLine - 是否显示连接线
 * @param {boolean} expandAll - 展开/折叠所有节点
 * @param {boolean} checkedAll - 勾选/取消勾选所有节点
 * @param {boolean} multipleCheck - 是否多选
 * @param {boolean} onlyLeafCheck - 是否只能选择叶子节点
 * @param {boolean} dbclickCallback - 是否双击节点带回，仅单选时有效
 * @param {boolean} enableDblclick - 是否开启双击事件
 * @param {boolean} enableWholeAnchorStatus - 是否开启全选状态
 * @param {boolean} enableCheckConfirm - 是否开启勾选确认,默认关闭，开启后节点勾选操作需要父组件在checkbox-click事件中回调该事件的第三个
 * @param {boolean} showId - 是否显示id
 * @param {string} separator - id分隔符
 * @param {boolean} hideLeafIcon - 是否隐藏叶子节点图标
 * @param {boolean} hideExpander - 是否隐藏展开图标,通常只有一层，当做list列表使用时设置为隐藏
 * @param {string} nodeContentClickAction - 点击节点内容的行为，expand: 展开/折叠节点, check: 选中/取消选中节点, none: 无行为
 */
interface config {
    cascade?: boolean;
    showCheckbox?: boolean;
    transition?: 'slide-fade' | '';
    showLine?: boolean;
    expandAll?: boolean;
    checkedAll?: boolean;
    multipleCheck?: boolean;
    onlyLeafCheck?: boolean;
    enableDblclick?: boolean;
    enableWholeAnchorStatus?: boolean;
    enableCheckConfirm: boolean;
    showId?: boolean;
    idSeparator?: string;
    hideLeafIcon?: boolean;
    hideExpander?: boolean;
    nodeContentClickAction?: TreeNodeContentClickActionEnum;
}
/**
 * @param {string} emptyTips - 内容为空的提示信息
 */
export interface TreeConfig extends config {
    emptyTips: string;
}
/**
 * @description: 树组件选中项数据结构0 | 1 | 2，分别代表未选中、选中、半选中
 */
export type TreeNodeCheckedType = 0 | 1 | 2;
/**
 * @description: 树组件所需原始数据结构
 */
export interface TreeOriginalData {
    label: string;
    id: StringOrNumber;
    children?: TreeOriginalData[];
    disabled?: boolean;
}
/**
 * @description: 树组件内部项所需参数
 */
export interface TreeItemProps extends config {
    treeNode: TreeNodeData;
    checkedNodes?: TreeNodeData[];
    expandKeys?: TreeExpandKeys[];
}
/**
 * @description: 树组件所需参数
 */
export interface TreeProps extends TreeConfig {
    data?: TreeOriginalData[];
    checkedKeys?: TreeCheckedKeys[];
    expandKeys?: TreeExpandKeys[];
}
/**
 * @description: 树组件内部项数据结构
 */
export type TreeNodeData = {
    label: string;
    id: StringOrNumber;
    children?: TreeNodeData[];
    checked: TreeNodeCheckedType;
    disabled?: boolean;
    expanded?: boolean;
    parent: TreeNodeData | null;
};
/**
 * @description: 树组件选中项数据结构
 */
export interface TreeCheckedKeys {
    label: string;
    id: StringOrNumber;
}
/**
 * @description: 树组件展开项数据结构
 */
export interface TreeExpandKeys {
    label: string;
    id: StringOrNumber;
}
/**
 * 节点响应事件
 */
export interface TreeNodeEmits {
    (e: 'update:checkedNode', node: TreeNodeData): void;
    (e: 'update:expandNode', node: TreeNodeData): void;
    (e: 'checkbox-click', node: TreeNodeData, eventParam: MouseEvent): void;
    (e: 'node-click', node: TreeNodeData, eventParam: MouseEvent): void;
    (e: 'node-dblclick', node: TreeNodeData, eventParam: MouseEvent): void;
}
/**
 * 树响应事件
 */
export interface TreeEmits {
    (e: 'update:checkedKeys', keys: TreeCheckedKeys[]): void;
    (e: 'tree-node-click', node: TreeNodeData, eventParam?: MouseEvent): void;
    (e: 'tree-node-checkbox-click', node: TreeNodeData, fn?: Function, eventParam?: MouseEvent): void;
}
export {};
