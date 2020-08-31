const {override, fixBabelImports, addLessLoader, addWebpackPlugin} = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@form-vertical-label-padding': '0px',
      '@table-expanded-row-bg': '#FFF;'
    },
  }),
  addWebpackPlugin(
    new AntdDayjsWebpackPlugin()
  )
);
