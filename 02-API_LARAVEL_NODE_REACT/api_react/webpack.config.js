module.exports = {
    entry: './front/index.jsx',
    output: {
        path: './public_api/',
        filename: "lista.js",
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};