import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'), //the contents of this file will be exported/compiled
      name: 'vue3-timeline',
      fileName: format => `vue3-timeline.${format}.js` //filename
    },
    rollupOptions: {
      external: ['vue'], 
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})