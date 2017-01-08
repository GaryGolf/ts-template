
module.exports = process.env.NODE_ENV === "production" ? require("./webpack.prod.config.js") : require("./webpack.dev.config.js")