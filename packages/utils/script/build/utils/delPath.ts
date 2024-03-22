// 删除指定文件夹的方式
import fs from 'fs';
import {resolve} from "path";
import {packagesPath,distDirName} from './paths'; 
// 异步操作
const delPath:any =  async (path:string) =>{ 
	let files:string[] = [];
	// 判断路径是否存在
	if(fs.existsSync(path)){
		// 读取文件夹下所有文件
		files = fs.readdirSync(path); 
		files.forEach(async(file)=>{
			let curPath = resolve(path, file);
			// 判断是否是文件夹
			if(fs.statSync(curPath).isDirectory()){
				// 文件夹则递归删除
				if(file!=='node_modules') await delPath(curPath); 
			}else{  
					// 删除文件或者移除软连接
					fs.unlinkSync(curPath); 
			}
		})
		// 删除传入文件夹
		fs.rmdirSync(path); 
	}
}
export default delPath;