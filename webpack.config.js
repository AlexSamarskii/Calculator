const path = require('path');

module.exports = {
  mode: 'development',  
  entry: './src/utils/index.js',  
  output: {
    filename: 'bundle.js',  
    path: path.resolve(__dirname, 'dist'),  
    clean: true,  
  },
  devServer: {
    static: './dist',  
    hot: true,         
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Обрабатываем и .js, и .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};