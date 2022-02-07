require('dotenv').config();

module.exports = {
  dontAutoRegisterSw: true,
  generateInDevMode: true,
  generateSw: false,
  globDirectory: '.',
  globPatterns: ['static/**/*'],
  images: {
    domains: [process.env.PUBLIC_SITE_URL],
  },
  workboxOpts: {
    workboxOpts: {
      exclude: [/.+error\.js$/, /\.map$/],
    },
  },
};
