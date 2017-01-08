import * as path from 'path'
import * as express from 'express'
import * as webpack from 'webpack'
import * as serveIndex from 'serve-index'

function serve() {
    const port = process.env.PORT || 3000

    var app = express()

    if (process.env.NODE_ENV !== 'production') {
        setupWebpackDevelopmentServer(app)
    }

    const staticPath = path.resolve(__dirname, 'static')
    app.use(express.static(staticPath))

    app.listen(port, error => {
        if (error) return console.error(JSON.stringify(error))
        console.log(`\nDevelopment server served at http://localhost:${port}\n\n`)
    })

    return app
}

function setupWebpackDevelopmentServer(app: express.Express) {
    var config = require('./webpack.config')
    var compiler = webpack(config)
    var hotMiddleware = require('webpack-hot-middleware')(compiler, { reload: true })
    var devMiddleware = require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath,
        noInfo: true,
        stats: { colors: true },
        poll: true,
        quiet: false,
        reload: true
    })

    app.use(devMiddleware)
    app.use(hotMiddleware)
}


serve()