#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件 , yarn docs:build
npm run docs:build

# git初始化，每次初始化不影响推送
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -u origin "master"