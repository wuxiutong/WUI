export * from './type';
export declare const WuiTree: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        expandKeys: {
            type: import("vue").PropType<import("./type").TreeExpandKeys[]>;
            default: () => never[];
        };
        cascade: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        showCheckbox: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        transition: {
            type: import("vue").PropType<"" | "slide-fade">;
            default: string;
        };
        showLine: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        expandAll: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        checkedAll: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        multipleCheck: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        onlyLeafCheck: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        enableDblclick: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        enableWholeAnchorStatus: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        enableCheckConfirm: {
            type: import("vue").PropType<boolean>;
            required: true;
            default: boolean;
        };
        showId: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        idSeparator: {
            type: import("vue").PropType<string>;
            default: string;
        };
        hideLeafIcon: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        hideExpander: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        nodeContentClickAction: {
            type: import("vue").PropType<import("./type").TreeNodeContentClickActionEnum>;
            default: import("./type").TreeNodeContentClickActionEnum;
        };
        data: {
            type: import("vue").PropType<import("./type").TreeOriginalData[]>;
            default: () => never[];
        };
        checkedKeys: {
            type: import("vue").PropType<import("./type").TreeCheckedKeys[]>;
            default: () => never[];
        };
        emptyTips: {
            type: import("vue").PropType<string>;
            required: true;
            default: string;
        };
    }>> & {
        "onUpdate:checkedKeys"?: ((keys: import("./type").TreeCheckedKeys[]) => any) | undefined;
        "onTree-node-click"?: ((node: import("./type").TreeNodeData, eventParam?: MouseEvent | undefined) => any) | undefined;
        "onTree-node-checkbox-click"?: ((node: import("./type").TreeNodeData, fn?: Function | undefined, eventParam?: MouseEvent | undefined) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:checkedKeys": (keys: import("./type").TreeCheckedKeys[]) => void;
        "tree-node-click": (node: import("./type").TreeNodeData, eventParam?: MouseEvent | undefined) => void;
        "tree-node-checkbox-click": (node: import("./type").TreeNodeData, fn?: Function | undefined, eventParam?: MouseEvent | undefined) => void;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        expandKeys: {
            type: import("vue").PropType<import("./type").TreeExpandKeys[]>;
            default: () => never[];
        };
        cascade: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        showCheckbox: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        transition: {
            type: import("vue").PropType<"" | "slide-fade">;
            default: string;
        };
        showLine: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        expandAll: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        checkedAll: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        multipleCheck: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        onlyLeafCheck: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        enableDblclick: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        enableWholeAnchorStatus: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        enableCheckConfirm: {
            type: import("vue").PropType<boolean>;
            required: true;
            default: boolean;
        };
        showId: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        idSeparator: {
            type: import("vue").PropType<string>;
            default: string;
        };
        hideLeafIcon: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        hideExpander: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        nodeContentClickAction: {
            type: import("vue").PropType<import("./type").TreeNodeContentClickActionEnum>;
            default: import("./type").TreeNodeContentClickActionEnum;
        };
        data: {
            type: import("vue").PropType<import("./type").TreeOriginalData[]>;
            default: () => never[];
        };
        checkedKeys: {
            type: import("vue").PropType<import("./type").TreeCheckedKeys[]>;
            default: () => never[];
        };
        emptyTips: {
            type: import("vue").PropType<string>;
            required: true;
            default: string;
        };
    }>> & {
        "onUpdate:checkedKeys"?: ((keys: import("./type").TreeCheckedKeys[]) => any) | undefined;
        "onTree-node-click"?: ((node: import("./type").TreeNodeData, eventParam?: MouseEvent | undefined) => any) | undefined;
        "onTree-node-checkbox-click"?: ((node: import("./type").TreeNodeData, fn?: Function | undefined, eventParam?: MouseEvent | undefined) => any) | undefined;
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
        nodeContentClickAction: import("./type").TreeNodeContentClickActionEnum;
        data: import("./type").TreeOriginalData[];
        checkedKeys: import("./type").TreeCheckedKeys[];
        emptyTips: string;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        expandKeys: {
            type: import("vue").PropType<import("./type").TreeExpandKeys[]>;
            default: () => never[];
        };
        cascade: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        showCheckbox: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        transition: {
            type: import("vue").PropType<"" | "slide-fade">;
            default: string;
        };
        showLine: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        expandAll: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        checkedAll: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        multipleCheck: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        onlyLeafCheck: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        enableDblclick: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        enableWholeAnchorStatus: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        enableCheckConfirm: {
            type: import("vue").PropType<boolean>;
            required: true;
            default: boolean;
        };
        showId: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        idSeparator: {
            type: import("vue").PropType<string>;
            default: string;
        };
        hideLeafIcon: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        hideExpander: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        nodeContentClickAction: {
            type: import("vue").PropType<import("./type").TreeNodeContentClickActionEnum>;
            default: import("./type").TreeNodeContentClickActionEnum;
        };
        data: {
            type: import("vue").PropType<import("./type").TreeOriginalData[]>;
            default: () => never[];
        };
        checkedKeys: {
            type: import("vue").PropType<import("./type").TreeCheckedKeys[]>;
            default: () => never[];
        };
        emptyTips: {
            type: import("vue").PropType<string>;
            required: true;
            default: string;
        };
    }>> & {
        "onUpdate:checkedKeys"?: ((keys: import("./type").TreeCheckedKeys[]) => any) | undefined;
        "onTree-node-click"?: ((node: import("./type").TreeNodeData, eventParam?: MouseEvent | undefined) => any) | undefined;
        "onTree-node-checkbox-click"?: ((node: import("./type").TreeNodeData, fn?: Function | undefined, eventParam?: MouseEvent | undefined) => any) | undefined;
    }, {}, {}, {}, {}, {
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
        nodeContentClickAction: import("./type").TreeNodeContentClickActionEnum;
        data: import("./type").TreeOriginalData[];
        checkedKeys: import("./type").TreeCheckedKeys[];
        emptyTips: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    expandKeys: {
        type: import("vue").PropType<import("./type").TreeExpandKeys[]>;
        default: () => never[];
    };
    cascade: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showCheckbox: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    transition: {
        type: import("vue").PropType<"" | "slide-fade">;
        default: string;
    };
    showLine: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    expandAll: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    checkedAll: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    multipleCheck: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    onlyLeafCheck: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    enableDblclick: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    enableWholeAnchorStatus: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    enableCheckConfirm: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    showId: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    idSeparator: {
        type: import("vue").PropType<string>;
        default: string;
    };
    hideLeafIcon: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hideExpander: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    nodeContentClickAction: {
        type: import("vue").PropType<import("./type").TreeNodeContentClickActionEnum>;
        default: import("./type").TreeNodeContentClickActionEnum;
    };
    data: {
        type: import("vue").PropType<import("./type").TreeOriginalData[]>;
        default: () => never[];
    };
    checkedKeys: {
        type: import("vue").PropType<import("./type").TreeCheckedKeys[]>;
        default: () => never[];
    };
    emptyTips: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
}>> & {
    "onUpdate:checkedKeys"?: ((keys: import("./type").TreeCheckedKeys[]) => any) | undefined;
    "onTree-node-click"?: ((node: import("./type").TreeNodeData, eventParam?: MouseEvent | undefined) => any) | undefined;
    "onTree-node-checkbox-click"?: ((node: import("./type").TreeNodeData, fn?: Function | undefined, eventParam?: MouseEvent | undefined) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:checkedKeys": (keys: import("./type").TreeCheckedKeys[]) => void;
    "tree-node-click": (node: import("./type").TreeNodeData, eventParam?: MouseEvent | undefined) => void;
    "tree-node-checkbox-click": (node: import("./type").TreeNodeData, fn?: Function | undefined, eventParam?: MouseEvent | undefined) => void;
}, string, {
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
    nodeContentClickAction: import("./type").TreeNodeContentClickActionEnum;
    data: import("./type").TreeOriginalData[];
    checkedKeys: import("./type").TreeCheckedKeys[];
    emptyTips: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {
            treeNode: any;
        }): any;
    };
}) & import("vue").Plugin;
export default WuiTree;
