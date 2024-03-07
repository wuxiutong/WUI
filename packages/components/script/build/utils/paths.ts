/**
 *build脚本所需的所有路径
 */
import {resolve} from 'path';

// r项目根目录，当前路径./是基于当前paths所在的目录
export const workspacePath = resolve(__dirname, '../../../../../');
// packages目录，当前路径./是基于当前paths所在的目录
export const packagesPath = resolve(workspacePath, './packages/');
// component组件库根目录，当前路径./是基于当前paths所在的目录
export const componentPath = resolve(workspacePath, './packages/components/');
// dist目录名称
export const distDirName = 'dist';