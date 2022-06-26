const HtmlWebpackPlugin = require('html-webpack-plugin');
    module.exports = {
        mode: 'development',
        output:{
            clean: true
        },
        module:{
            rules:[ 
                {
                    test: /\.html$/i,
                    loader: 'html-loader',
                    options: {
                        sources: false
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                title: 'Mi Webpack App',
                filename: './index.html'

            })
        ]
    

}