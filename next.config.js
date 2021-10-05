module.exports = {
  async exportPathMap(
    defaultPathMap,
    {
      dev, dir, outDir, distDir, buildId,
    },
  ) {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
      '/signup': { page: '/signup' },
    };
  },
  serverRuntimeConfig: {
    secret: 'SUKA BLYAD AAAAAAAAAAAAAAAAA',
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
      ? 'http://localhost:8080/api/v1/' // development api
      : 'http://localhost:8080/api/v1/', // production api
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext]',
          },
        },
        'babel-loader',
        'styled-jsx-css-loader',
      ],
    });

    return config;
  },
};
