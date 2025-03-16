// next.config.mjs

import { EventEmitter } from 'events';
EventEmitter.defaultMaxListeners = 20;

import bundleAnalyzer from '@next/bundle-analyzer';

// Создаём обёртку
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Прописываем основные настройки Next.js
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
});

// Экспортируем конфиг по умолчанию (ESM-стиль)
export default nextConfig;
