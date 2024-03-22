import _tree from "./tree.vue"; 
// 导出统一定义的接口及类型，便于使用者直接使用
export * from './type'
// 插件注册install
import withInstall from "../utils/WithInstall"; 
export const WuiTree = withInstall(_tree);
export default WuiTree;
