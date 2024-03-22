import {spawn} from 'child_process';
export default async (command:string, path:string) => {
	// cmd是命令，args是参数,如rm -rf
	const  [cmd, ...args] = command.split(' ');
	return new Promise((resolve,reject)=>{
		const app  = spawn(cmd,args,{
			cwd:path, // 执行命令的路径
			stdio:'inherit', // 标砖输出共享给父进程
			shell:true // 使用shell执行，windows下需要git base需要开启支持
		});
		// 执行完毕后关闭并resolve
		app.on('close',resolve)
	})
}