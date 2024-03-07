import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
export default defineConfig({
  plugins: [vue(),dts(
    {
    // 编译后的文件的会按照此目录计算按层级放入
    entryRoot: "./",
    // 指定打包的类型文件输出位置，分别需要复制到es和lib目录
    outDir: ["../dist/es","../dist/lib"],
    // tsconfig.json为我们整个项目的tsconfig.json，如果不配置，也可以在components配置
    tsconfigPath: "../../tsconfig.json",
    insertTypesEntry:true,
    include:['./src/**/*','./index.ts']
  }
  ),{
    name: "style",
    generateBundle(config, bundle) {
      //这里可以获取打包后的文件目录以及代码code
      const keys = Object.keys(bundle);

      for (const key of keys) {
        const bundler: any = bundle[key as any];
        //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件
        this.emitFile({
          type: "asset",
          fileName: key, //文件名名不变
          source: bundler.code.replace(/\.less/g, ".css"),
        });
      }
    },
  }],
  build: {
    //打包后文件目录
    outDir: "es",
    //压缩
    // minify: false,
    rollupOptions: {
      //忽略打包vue文件,排除less（由gulp负责）
      external: ["vue",/\.less/],
      input: ["index.ts"],
      output: [{
				format: "es",
				// 打包后文件名
				entryFileNames: "[name].js",
				// 让打包目录与开发目录一致
				preserveModules: true,
				// 保留文件名
				exports: "named",
				dir:'../dist/es',
        globals: {
          vue: "Vue",
        }
			},{
				// 打包格式cjs
				format: "cjs",
				// 打包后文件名
				entryFileNames: "[name].js",
				// 让打包目录与开发目录一致
				preserveModules: true,
				// 保留文件名
				exports: "named",
				dir:'../dist/lib',
        globals: {
          vue: "Vue",
        }
      }]
    },
    lib: {
      entry: "./index.ts"
    },
  }
});