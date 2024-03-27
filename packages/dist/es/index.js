import * as e from "./src/index.js";
import { TreeNodeContentClickActionEnum as m } from "./src/tree/type.js";
import { WuiTree as x } from "./src/tree/index.js";
import { randomString as p } from "./src/utils/random.js";
import { TreeUtils as a } from "./src/utils/tree-utils.js";
const t = {
  install: (o) => {
    for (let r in e)
      o.use(e[r]);
  }
};
export {
  m as TreeNodeContentClickActionEnum,
  a as TreeUtils,
  x as WuiTree,
  t as default,
  p as randomString
};
