var webpack = require('webpack');  
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer-core');

module.exports = {  
    entry: [
//	'webpack/hot/only-dev-server',
//        "font-awesome-webpack!./font-awesome.config.js",
	"./src/js/app.js"	
    ],
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
	
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
	    // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // Optionally extract less files
            // or any other compile-to-css language
          /*  {
                test: /\.less$/, 
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader!postcss")
	   
            },
	    {
		test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
	    },
	    { test: /\.less$/, loader: "style-loader!less-loader!css-loader!postcss"},
*/
	    { test: /\.less$/, 
	      loader: "style-loader!css-loader!postcss-loader!less-loader"
	    },
	    { test: /\.(jpe?g|png|gif|svg)$/i,
              loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
	    },
	    { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
	    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 4 versions'] }) ],
    resolve: {
	// you can now require('file') instead of require('file.jsx')
	extensions: ['', '.jsx', '.js', 'less']
    },
    plugins: [
	new webpack.NoErrorsPlugin(),
	new ExtractTextPlugin("[name].css", { allChunks: true })
    ]

};
