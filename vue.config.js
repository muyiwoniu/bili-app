// vue-cli配置文件，90%的配置都是webpack配置
// 为什么vue的配置文件里必须要用CommonJS导出呢？不能用ES6 Module的方式导出呢？
// 和webpack有关，在webpack加载配置的时候是node环境，而node环境默认模块化标准是CommonJS
// webpack在运行打包的过程中的环境是webpack环境，webpack环境是既支持CommonJS又支持ES6 Module
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {// 开发服务器的配置
    proxy: {// 配置代理
      "/x": {// 凡是以 /x 开头的请求，进行代理
        target: "https://api.bilibili.com",
        onProxyReq(proxyReq, req, res){
          proxyReq.setHeader('origin', 'https://www.bilibili.com');
          proxyReq.setHeader('referer', 'https://www.bilibili.com/');
        }
      }
    }
  }
})
