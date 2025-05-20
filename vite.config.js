import { defineConfig } from 'vite'
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        service: 'service.html',
        team: 'team.html',
        contact: 'contactus.html',
        about: 'aboutus.html',
        work: 'work.html',
        'movie-posters': 'movie-poster.html',
        'film-posters': 'film-posters.html',
        events: 'events.html',
        'title-animations': 'title-animations.html',
        branding: 'branding.html',
        products: 'products.html',
        advertising: 'advertising.html',
      }
    }
  }
})