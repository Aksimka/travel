// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  pages: {
    landing: {
      entry: './src/pages/landing/main.ts',
      template: 'public/landing.html',
      title: 'Landing',
    },
    index: {
      entry: './src/pages/tickets/main.ts',
      template: 'public/index.html',
      title: 'Tickets',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        public: path.resolve(__dirname, 'public/'),
        landing: path.resolve(__dirname, 'src/pages/landing'),
        tickets: path.resolve(__dirname, 'src/pages/tickets'),
      },
    },
  },
};
