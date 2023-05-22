# 网易云音乐

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

项目名称:仿网易云音乐
项目描述:一个基于 vue3 的音乐网页
涉及技术:vue3,Element-Plus,vuex,Axios,swiper,rem 布局 等
负责内容:

1.独立搭建起路由框架,实现路由组件之间的切换

2.封装了发现音乐的个性推荐组件,调用网易云 api 实现总体布局

3.封装了发现音乐的歌单组件,点击头部标签调用网易云 api 实现切换不同风格歌单

4.封装了歌单详情组件,根据传输过去的不同的 id 渲染歌单详情和歌曲以及实现歌单内搜索歌曲功能等等

5.封装了分页组件,防止数据过多,点击切换渲染不同数据
