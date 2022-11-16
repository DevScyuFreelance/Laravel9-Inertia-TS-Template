import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/ts/app.tsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'resources/ts') },
            { find: 'ziggy-js', replacement: path.resolve(__dirname, 'vendor/tightenco/ziggy/dist') },
        ],
    },
    optimizeDeps: {
        include: ["ziggy-js"],
    },
});
