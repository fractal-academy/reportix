const CracoAlias = require('craco-alias')

// module.exports = {
//   plugins: [
//     {
//       plugin: CracoAlias,
//       options: {
//         source: 'jsconfig',
//         baseUrl: './src'
//       }
//     }
//   ]
// }

const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        baseUrl: './src'
      }
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#766bd9',
              '@font-family': '"Montserrat", sans-serif',
              '@border-radius-base': '6px'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
