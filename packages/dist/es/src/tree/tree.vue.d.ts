import { TreeNodeData, TreeProps, TreeOriginalData, TreeCheckedKeys, TreeNodeContentClickActionEnum } from './type';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TreeProps>, {
    data: () => never[];
    checkedKeys: () => never[];
    expandKeys: () => never[];
    cascade: boolean;
    showCheckbox: boolean;
    transition: string;
    showLine: boolean;
    expandAll: boolean;
    checkedAll: boolean;
    multipleCheck: boolean;
    onlyLeafCheck: boolean;
    enableDblclick: boolean;
    enableWholeAnchorStatus: boolean;
    enableCheckConfirm: boolean;
    showId: boolean;
    idSeparator: string;
    hideLeafIcon: boolean;
    hideExpander: boolean;
    nodeContentClickAction: TreeNodeContentClickActionEnum;
    emptyTips: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:checkedKeys": (keys: TreeCheckedKeys[]) => void;
    "tree-node-click": (node: TreeNodeData, eventParam?: MouseEvent | undefined) => void;
    "tree-node-checkbox-click": (node: TreeNodeData, fn?: Function | undefined, eventParam?: MouseEvent | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TreeProps>, {
    data: () => never[];
    checkedKeys: () => never[];
    expandKeys: () => never[];
    cascade: boolean;
    showCheckbox: boolean;
    transition: string;
    showLine: boolean;
    expandAll: boolean;
    checkedAll: boolean;
    multipleCheck: boolean;
    onlyLeafCheck: boolean;
    enableDblclick: boolean;
    enableWholeAnchorStatus: boolean;
    enableCheckConfirm: boolean;
    showId: boolean;
    idSeparator: string;
    hideLeafIcon: boolean;
    hideExpander: boolean;
    nodeContentClickAction: TreeNodeContentClickActionEnum;
    emptyTips: string;
}>>> & {
    "onUpdate:checkedKeys"?: ((keys: TreeCheckedKeys[]) => any) | undefined;
    "onTree-node-click"?: ((node: TreeNodeData, eventParam?: MouseEvent | undefined) => any) | undefined;
    "onTree-node-checkbox-click"?: ((node: TreeNodeData, fn?: Function | undefined, eventParam?: MouseEvent | undefined) => any) | undefined;
}, {
    expandKeys: import("./type").TreeExpandKeys[];
    cascade: boolean;
    showCheckbox: boolean;
    transition: "" | "slide-fade";
    showLine: boolean;
    expandAll: boolean;
    checkedAll: boolean;
    multipleCheck: boolean;
    onlyLeafCheck: boolean;
    enableDblclick: boolean;
    enableWholeAnchorStatus: boolean;
    enableCheckConfirm: boolean;
    showId: boolean;
    idSeparator: string;
    hideLeafIcon: boolean;
    hideExpander: boolean;
    nodeContentClickAction: TreeNodeContentClickActionEnum;
    data: TreeOriginalData[];
    checkedKeys: TreeCheckedKeys[];
    emptyTips: string;
}, {}>, {
    "node-content"?(_: {
        treeNode: any;
    }): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
