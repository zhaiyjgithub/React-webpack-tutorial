/**
 * Created by jbmac01 on 16/4/23.
 */
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [ {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },{
            test: /\.(png|jpg)$/,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        },{
            test: /\.js|jsx$/,
            loader: 'jsx?harmony'
        }]
    }
}