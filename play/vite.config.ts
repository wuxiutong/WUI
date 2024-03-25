import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'  
import path, {resolve} from 'path'
export default defineConfig({ 
	plugins: [vue()],
	server: {
		port: 3000,
		open: false,
	}
})