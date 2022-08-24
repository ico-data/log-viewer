import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), dts()],
	resolve: {
		alias: [
			{ find: "@", replacement: path.resolve(__dirname, "./src") },
		]
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, "./src/index.ts"),
			name: "@ico-data/log-viewer",
			formats: ["es"],
			fileName: (name: string) => `log-viewer.${name}.js`,
		},
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ["react", "react-dom", "vite"],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					react: "react",
					"react-dom": "react-dom",
					vite: "vite"
				}
			}
		},
		outDir: "lib/dist",
		target: "es2015",
		minify: "terser",
		manifest: false,
		sourcemap: true,
	}
});
