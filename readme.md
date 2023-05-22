介绍
使用 vue3 vuex vue-router axios bootstrap 搭建的跨平台云音乐播放器

Usage

# 项目根目录安装依赖

npm install

# 浏览器访问 localhost:8000

npm run dev

# 打包编译生成静态资源

npm run build
编译为桌面端应用
当前配置仅编译为 mac 端桌面程序，如需 window、linux 版本只需在 build/package.json 中 script 字段下的--platform=darwin 后添加对应平台名称即可。

重要！

第一步：请先使用以下代码打开目录里的 NeteaseCloudMusicApi-master 网易云接口

# npm start

第二步：

# 重要！以下操作均在目录下的 wyy 文件夹进行

# 安装相关依赖

npm run install

# 预览效果

npm run dev

开发计划
短期：

播放
暂停
上一首、下一首
随机、单曲循环播放
查询(支持歌名，歌手，歌词，专辑查询)
将 SongList 组件中的抽象为一个通用组件
参考 Vue HackerNews，对代码结构进行优化
缓冲进度条
用 beforeMount 优化 SongList 组件
webpack code spliting 优化

# 本项目仅供交流学习之用
