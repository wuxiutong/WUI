//  该文件基于项目根目录，可以如果其他文件夹则基于项目根目录补全文件夹，无需路径分隔符开头
import fs from 'fs'; 
import {workspacePath,packagesPath,componentPath,distDirName} from './paths';
 
/**
 * 复制文件到发布文件夹该文件基于项目根目录，src源文件（路径基于项目根目录），dest目的文件（路径基于发布文件夹）
 */
export type  CopyFileInterface = {
	"src":string,
	"dest":string
}/**
 * 复制文件到发布文件夹该文件基于项目根目录，src源文件（路径基于项目根目录），dest目的文件（路径基于发布文件夹）
 */
const copyFiles =  async (fileNames:CopyFileInterface[]) =>{    
	for(let i in fileNames){
		const file = fileNames[i]  
		// 判断路径是否存在
		if(fs.existsSync(`${workspacePath}/${file.src}`)){
			if(!fs.existsSync(`${packagesPath}/${distDirName}/`)){
				fs.mkdirSync(`${packagesPath}/${distDirName}/`)
			} 
			// 复制资源文件
			fs.copyFileSync(`${workspacePath}/${file.src}`,`${packagesPath}/${distDirName}/${file.dest}`); 
		}
	}
}
export default copyFiles;