import { defineConfig } from 'vite'
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        service: 'service.html',
        team:'team.html',
        contact:'contactus.html',
        about:'aboutus.html',
        work:'work.html',
      }
    }
  }
})