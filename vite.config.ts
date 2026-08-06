import { defineConfig } from 'vite';
import path from 'path';
export default defineConfig({
  resolve: {
    alias: {
      '@state': path.resolve(__dirname, './src/frontend/state'),
      '@layout': path.resolve(__dirname, './src/frontend/layout'),
      '@controls': path.resolve(
        __dirname,
        './src/frontend/layout/app_controls',
      ),
      '@header': path.resolve(
        __dirname,
        './src/frontend/layout/app__container/app_header/',
      ),
      '@playlist': path.resolve(
        __dirname,
        './src/frontend/layout/app__container/app_playlist/',
      ),
      '@bottomSheet': path.resolve(
        __dirname,
        './src/frontend/layout/app__container/app__bottom-sheet/',
      ),
      '@core': path.resolve(__dirname, './src/core'),
      '@tsTypes': path.resolve(
        __dirname,
        './src/frontend/layout/app__container/types/',
      ),
      '@utils': path.resolve(
        __dirname,
        './src/frontend/layout/app__container/utils/',
      ),
    },
  },
});
