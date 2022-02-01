require('dotenv').config();

const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

const workBoxOptions = {
  workboxOpts: {
    exclude: [/.+error\.js$/, /\.map$/],
  },
};

const backendHostname = new URL(process.env.PUBLIC_SITE_URL).hostname;

module.exports = withCss(
  withSass({
    workboxOpts: {
      workboxOpts: {
        exclude: [/.+error\.js$/, /\.map$/],
      },
    },
    generateInDevMode: true,
    dontAutoRegisterSw: true,
    generateSw: false,
    globPatterns: ['static/**/*'],
    globDirectory: '.',
    target: 'serverless',
    images: {
      domains: [backendHostname, process.env.PUBLIC_SITE_URL],
    },
  })
);
