/* @type {import('next').NextConfig} */
const webpack = require('webpack')
const nextConfig = {
  // target: 'server',
  env: {
    APIpath: 'http://api.ohotnadzor.rtyva.ru',
    token: 'e4d881306056928865aff21a9340d374f58d1fd8cd85b7ce5d8f8a87c7f38dedab810c55771cdc35c29893878729bc57dabfefe25f6e73f7ef218e0b6ceab40f512bcc6a38bb40ef0fb876a92d51be4a562740acbc3a72c0414b635cc4f060b48b9998af017c08df076d17bd3341400bb91be1f4840e3053bfdb5bbe0149575e'
  },
  webpack: (config, { dev }) => {

    config.plugins.push(
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jQuery: 'jquery'
      })
    );

    return config
  },
  images: {
    domains: ['pos.gosuslugi.ru', 'api.ohotnadzor.rtyva.ru', 'mc.yandex.ru'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.ohotnadzor.rtyva.ru',
        pathname: '/'
      },
      {
        protocol: 'https',
        hostname: 'pos.gosuslugi.ru',
        pathname: '/'
      },
      {
        protocol: 'https',
        hostname: 'mc.yandex.ru',
        pathname: '/'
      }
    ]
  },
  compress: true,
  // assetPrefix: "http://api.ohornadzor.rtyva.ru",

  reactStrictMode: false,
  output: 'standalone'
}

module.exports = nextConfig