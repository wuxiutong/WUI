import delPath from './utils/delPath';
import { series,parallel, src, dest } from 'gulp'
import { componentPath,packagesPath,distDirName } from './utils/paths';
import less from 'gulp-less';
import autoPrefixer from 'gulp-autoprefixer';
import run from './utils/run'; 
import copyFiles  from './utils/copyFiles'
// 定义执行删除发布文件任务
export const removeDist:any = ()=>{ 
	return delPath(`${packagesPath}/${distDirName}`);
}


// 组件打包
export const buildComponent:any = async()=>{ 
	run('pnpm run build',componentPath);
}
 
// 复制package.json、readMe等文件 
export const copyLibFiles = ()=>{
	const files = [
			{src:'/packages/components/package.json',dest:"package.json"}
		, {src:'README.md',dest:'README.md'}
		, {src:'LICENSE',dest:'LICENSE'}
		, {src:'CHANGELOG.md',dest:'CHANGELOG.md'}
	]; 
		return copyFiles(files) 
}

export default series(
	 () => removeDist(), 
	 async ()=>buildComponent(), 
	 () => copyLibFiles()
)