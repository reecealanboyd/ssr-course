const path = require('path')

module.exports = {
  // inform webpack that we're building a bundle for nodejs rather than for the browser
  target: 'node',

  // tell webpack the root file of our server application
  entry: './src/index.js',

  // tell webpack where to put output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            'react', // turns our jsx into normal js function calls
            'stage-0', // handle async code
            ['env', { 
              targets: { 
                browsers: ['last 2 versions']
              }
            }] 
          ]
        }
      }
    ]
  }
}