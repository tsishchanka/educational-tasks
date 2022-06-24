const path = require('path');
module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@react-theming/storybook-addon',
    '@storybook/preset-scss',
    '@storybook/addon-backgrounds',
  ],
  typescript: {
    reactDocgen: 'none',
  },
  framework: '@storybook/react',
  webpackFinal: async config => {
    (config.module.rules = [
      ...config.module.rules,

      // {
      //   test: /\.svg$/,
      //   use: ['@svgr/webpack'],
      // },
      // {
      //   test: /\.svg$/,
      //   exclude: /node_modules/,
      //   loader: 'svg-react-loader',
      //   query: {
      //     classIdPrefix: '[name]-[hash:8]__',
      //     propsMap: {
      //       fillRule: 'fill-rule',
      //       foo: 'bar',
      //     },
      //     xmlnsTest: /^xmlns.*$/,
      //   },
      //   plugins: [
      //     [
      //       require.resolve(
      //         'babel-plugin-named-asset-import',
      //       ),
      //       {
      //         loaderMap: {
      //           svg: {
      //             ReactComponent:
      //               '@svgr/webpack?-svgo,+ref![path]',
      //           },
      //         },
      //       },
      //     ],
      //   ],
      // },
    ]),
      config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
