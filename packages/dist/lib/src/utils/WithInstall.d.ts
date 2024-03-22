import type { Plugin } from "vue";
type SFCWithInstall<T> = T & Plugin;
declare const withInstall: <T>(comp: T) => SFCWithInstall<T>;
export default withInstall;
export { withInstall };
