// next.config.js
/** @type {import('next').NextConfig} */


const nextConfig = {
  output: 'export', // 静的HTML出力
  basePath: '/bio_dep_eng_website',
  images: {
    unoptimized: true, // 画像最適化を無効化（GitHub Pagesで必要）
  },
};

module.exports = nextConfig;
