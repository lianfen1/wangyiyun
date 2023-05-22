import { createRouter, createWebHashHistory } from 'vue-router'
import { nextTick } from 'vue'
import store from '../store'
// 导入发现音乐组件
import Home from '../components/home.vue'
import findMusic from '../views/findMusic/findMusic.vue'
import SelfSuggest from '../views/findMusic/selfSuggest.vue'
import Customization from '../views/findMusic/customization.vue'
import PlayList from '../views/findMusic/playList.vue'
import playlistDetail from '../views/findMusic/playListDetail.vue'
import TopList from '../views/findMusic/topList.vue'
import Singer from '../views/findMusic/singer.vue'
import NewMusic from '../views/findMusic/NewMusic.vue'

import MUsicBlog from '../views/musicblog/musicblog.vue'
import MUsicVideo from '../views/musicVideo/musicVideo.vue'
import MUsicInterest from '../views/musicInterest/musicInterest.vue'
import MUsicWebcast from '../views/musicWebcast/musicWebcast.vue'
import MUsicPersonalFM from '../views/musicpersonalFM/musicPersonalFM.vue'

import SearchSong from '../components/searchSong.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home', meta: { isShow: false } },
    {
      path: '/home',
      component: Home,
      children: [
        { path: '/home', redirect: '/home/findMusic', meta: { isShow: false } },
        {
          path: 'findMusic',
          component: findMusic,
          meta: { isShow: true, title: '发现音乐', isAuth: false },
          children: [
            { path: '/home/findMusic', redirect: '/home/findMusic/selfSuggest' },
            { path: 'selfSuggest', component: SelfSuggest },
            { path: 'customization', component: Customization },
            {
              path: 'playList',
              component: PlayList,
            },

            { path: 'topList', component: TopList, meta: { isAuth: true } },
            { path: 'singer', component: Singer, meta: { isAuth: true } },
            { path: 'NewMusic', component: NewMusic, meta: { isAuth: true } },
          ],
        },
        {
          path: 'musicblog',
          component: MUsicBlog,
          meta: { isShow: true, title: '博客 ', isAuth: true },
        },
        {
          path: 'musicVideo',
          component: MUsicVideo,
          meta: { isShow: true, title: '视频', isAuth: true },
        },
        {
          path: 'musicInterest',
          component: MUsicInterest,
          meta: { isShow: true, title: '关注', isAuth: true },
        },
        {
          path: 'musicWebcast',
          component: MUsicWebcast,
          meta: { isShow: true, title: '直播', isAuth: true },
        },
        {
          path: 'personalFM',
          component: MUsicPersonalFM,
          meta: { isShow: true, title: ' 私人FM ', isAuth: true },
        },
        // 歌单详情
        {
          name: 'playlistDetail',
          path: 'playlistDetail',
          component: playlistDetail,
          meta: { isShow: false, title: ' 歌单详情 ' },
        },
        // 搜索歌单列表
        { name: 'SearchSong', path: 'SearchSong', component: SearchSong, meta: { isShow: false } },
      ],
    },
  ],
})
router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (localStorage.token == 'wyy') {
      next()
    } else {
      alert('未登录,请先登录')
    }
  } else {
    next()
  }
})
export default router
