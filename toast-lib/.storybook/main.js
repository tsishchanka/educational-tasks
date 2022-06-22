const path = require('path')
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
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    ;(config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        include: [path.resolve(__dirname, '..')],
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                require.resolve('babel-preset-react-app'),
              ],
            },
          },
          require.resolve('react-docgen-typescript-loader'),
        ],
      },
    ]),
      config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
