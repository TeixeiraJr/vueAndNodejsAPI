
module.exports = {
  devServer: {
    proxy: `http://localhost:${process.env.PORT}`
  }
}
