import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  //支持less样式
  css:{
    preprocessorOptions: {
      less: {
        
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            'primary-color': '#92440e',
            'link-color': '#92440e',
            'border-radius-base': '3px',
          },
          javascriptEnabled: true,
        
      },
   },
  },
  plugins: [
    vue(),
    styleImport({
      libs:[{
        libraryName:'ant-design-vue',
        esModule: true,
        resolveStyle:(name)=>{
          return `ant-design-vue/es/${name}/style/css`;
        },
      }]
    })
  ],
})
