module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv', {
      'moduleName': 'react-native-dotenv',
      'path': '.env',
    }
    ],
    ['module-resolver', { root: ['./'], alias: { '@': './src' } }],
    'react-native-reanimated/plugin',
  ]
}
