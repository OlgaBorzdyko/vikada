import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import viteSvgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), eslintPlugin(), viteSvgr(), tsconfigPaths()],
  server: {
    port: 3000,
    proxy: {
      '/objects': {
        target: 'http://objects.vkdapi.ru',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/objects/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
})
