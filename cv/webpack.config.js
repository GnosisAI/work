var webpack = require('webpack')
module.exports = {
    entry:"./javascript/main.js",
    output: {
        filename:"./javascript/bundle.js"
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:'jquery',
            JQuery:'jquery',
            "window.jQuery":"jquery"
        })
    ]
}