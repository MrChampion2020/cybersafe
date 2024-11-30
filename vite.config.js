// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   server:{
//     proxy:{
//       '/api':{
//         target:'http://localhost:3000',
//         secure:false,
//       },
//     },
//   },
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://cybersafeapi.onrender.com',
        // http://localhost:3000
        secure: false,
        changeOrigin: true, // Add this for proxy to work properly
      },
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['axios'], // Ensure axios is treated as an external dependency
    },
  },
});
