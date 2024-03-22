import * as e from "./src/index.js";
import { TreeNodeContentClickActionEnum as f } from "./src/tree/type.js";
import { WuiTree as m } from "./src/tree/index.js";
const r = {
  install: (o) => {
    for (let t in e)
      o.use(e[t]);
  }
};
export {
  f as TreeNodeContentClickActionEnum,
  m as WuiTree,
  r as default
};
