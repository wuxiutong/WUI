import { TreeNodeData, TreeItemProps, TreeNodeContentClickActionEnum } from './type';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TreeItemProps>, {
    checkedNodes: () => never[];
    expandKeys: () => never[];
    cascade: boolean;
    showCheckbox: boolean;
    transition: string;
    showLine: boolean;
    expandAll: boolean;
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
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:checkedNode": (node: TreeNodeData) => void;
    "update:expandNode": (node: TreeNodeData) => void;
    "checkbox-click": (node: TreeNodeData, eventParam: MouseEvent) => void;
    "node-click": (node: TreeNodeData, eventParam: MouseEvent) => void;
    "node-dblclick": (node: TreeNodeData, eventParam: MouseEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TreeItemProps>, {
    checkedNodes: () => never[];
    expandKeys: () => never[];
    cascade: boolean;
    showCheckbox: boolean;
    transition: string;
    showLine: boolean;
    expandAll: boolean;
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
}>>> & {
    "onUpdate:checkedNode"?: ((node: TreeNodeData) => any) | undefined;
    "onUpdate:expandNode"?: ((node: TreeNodeData) => any) | undefined;
    "onCheckbox-click"?: ((node: TreeNodeData, eventParam: MouseEvent) => any) | undefined;
    "onNode-click"?: ((node: TreeNodeData, eventParam: MouseEvent) => any) | undefined;
    "onNode-dblclick"?: ((node: TreeNodeData, eventParam: MouseEvent) => any) | undefined;
}, {
    checkedNodes: TreeNodeData[];
    expandKeys: import("./type").TreeExpandKeys[];
    cascade: boolean;
    showCheckbox: boolean;
    transition: "" | "slide-fade";
    showLine: boolean;
    expandAll: boolean;
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
}, {}>, {
    default?(_: {
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
