const themeReco = require('./themeReco.js')
const nav = require('../nav.js')
const sidebar = require('../sidebar.js')

module.exports = Object.assign({}, themeReco, {
    nav,
    sidebar: sidebar,
    // logo: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
})