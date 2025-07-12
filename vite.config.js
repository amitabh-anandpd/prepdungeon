// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        auth: resolve(__dirname, 'auth.html'),
        dailyQuest: resolve(__dirname, 'daily-quest.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        initialScreening: resolve(__dirname, 'initial-screening.html'),
        leaderboard: resolve(__dirname, 'leaderboard.html'),
        onboarding: resolve(__dirname, 'onboarding.html'),
        studyGuide: resolve(__dirname, 'study-guide.html'),
        profile: resolve(__dirname, 'profile.html'),
        testCenter: resolve(__dirname, 'test-center.html'),
        testConceptual: resolve(__dirname, 'test-conceptual.html'),
        testMcq: resolve(__dirname, 'test-mcq.html'),
        testSpeed: resolve(__dirname, 'test-speed.html'),
        contact: resolve(__dirname, 'contact.html'),
        faq: resolve(__dirname, 'faq.html'),
        features: resolve(__dirname, 'features.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
    outDir: 'dist',
  },
});
