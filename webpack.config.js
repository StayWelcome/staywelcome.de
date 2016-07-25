module.exports = {
    entry: {
        script: './assets/js/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/assets'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: require.resolve('snapsvg'),
                loader: 'imports-loader?this=>window,fix=>module.exports=0'
            }
        ]
    }
};