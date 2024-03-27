import { TreeOriginalData } from '../tree';
/**
 * 树组件工具
 */
declare const TreeUtils: {
    /**
     * 重组所有节点的parent和children，原始数据支持两种模式一种是parentId模式：{id:'',label:'',parentId:''}；另一种是children模式：{id:'',label:'',children:[]}，返回数据结果{id:'',label:'',children:[],parent:{}}
     * @param rootNodes 原始数据（该数据源不会被改变，放方法会返回新的数组）
     * @param parentIdMode 指定数据源是否采用parentId数据结构模式，否则就是children结构模式。
     * @returns 返回数据结果{id:'',label:'',children:[],parent:{}}
     */
    buildParentAndChildren: (rootNodes: TreeOriginalData[], parentIdMode: boolean) => TreeOriginalData[];
    /**
     * 根据关键字搜索（id或label包含关键字即匹配）树节点，其中：如果上级节点匹配，则保留叶子节点，原始数据支持两种模式一种是parentId模式：{id:'',label:'',parentId:''}；另一种是children模式：{id:'',label:'',children:[]}
     * @param treeDataSrc 原始数据（该数据源不会被改变，放方法会返回新的数组）
     * @param keyWords 搜索关键字
     * @param parentIdMode 原始数据属于parentId模式，否则就是children模式
     * @param exactMatch 是否精准匹配
     * @returns 返回数据结果{id:'',label:'',children:[],parent:{}}
     */
    searchIdAndLabel: (treeDataSrc: TreeOriginalData[], keyWords: string, parentIdMode: boolean, exactMatch?: boolean) => TreeOriginalData[];
    /**
     * 根据关键字搜索（id）树节点，其中：如果上级节点匹配，则保留叶子节点，其中：如果上级节点匹配，则保留叶子节点，原始数据支持两种模式一种是parentId模式：{id:'',label:'',parentId:''}；另一种是children模式：{id:'',label:'',children:[]}
     * @param treeDataSrc 原始数据（该数据源不会被改变，放方法会返回新的数组）
     * @param keyWords 搜索关键字
     * @param parentIdMode 原始数据属于parentId模式，否则就是children模式
     * @param exactMatch 是否精准匹配
     * @returns 返回数据结果{id:'',label:'',children:[],parent:{}}
     */
    searchId: (treeDataSrc: TreeOriginalData[], keyWords: string, parentIdMode: boolean, exactMatch?: boolean) => TreeOriginalData[];
    /**
     * 根据关键字搜索（label）树节点，其中：如果上级节点匹配，其中：如果上级节点匹配，则保留叶子节点，原始数据支持两种模式一种是parentId模式：{id:'',label:'',parentId:''}；另一种是children模式：{id:'',label:'',children:[]}
     * @param treeDataSrc 原始数据（该数据源不会被改变，放方法会返回新的数组）
     * @param keyWords 搜索关键字
     * @param parentIdMode 原始数据属于parentId模式，否则就是children模式
     * @param exactMatch 是否精准匹配
     * @returns 返回数据结果{id:'',label:'',children:[],parent:{}}
     */
    searchLabel: (treeDataSrc: TreeOriginalData[], keyWords: string, parentIdMode: boolean, exactMatch?: boolean) => TreeOriginalData[];
};
export { TreeUtils };
