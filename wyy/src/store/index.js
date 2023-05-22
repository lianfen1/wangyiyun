import { createStore } from 'vuex'
import axios from 'axios'
import VuexPersist from 'vuex-persistedstate'
import qs from 'qs'

let store = createStore({
  state() {
    return {
      pageNow: 1,
      pageSize: 30,
      pageTotal: 0,
      pageCount: 0,
      bannerList: [], // 发现音乐轮播图
      MusicSuggestList: [], // 推荐歌单
      MusicblogList: [], // 热门博客
      ListenBookList: [], // 听书
      ExclusiveList: [], // 独家推送
      NewSongList: [], // 最新音乐
      PlaylistHighqualityList: [], // 精品歌单
      PlaylistsData: [], // 全部歌单
      Playlists: [], // 歌单分类2
      PlaylistDetail: [], //歌单详情
    }
  },
  mutations: {
    getPlaylistPage(state) {
      state.Playlists = JSON.parse(JSON.stringify(state.PlaylistsData.playlists))
      let playlists = state.Playlists
      state.Playlists = playlists.splice((state.pageNow - 1) * state.pageSize, state.pageSize)
    },
  },
  actions: {
    // 获取轮播图
    async getBannerList(context) {
      let { data: bannerListData } = await axios.get('/banner', { type: 0 })
      this.state.bannerList = bannerListData
    },
    // 获取推荐歌单
    async getMusicSuggestList(context) {
      let { data: MusicSuggestData } = await axios.get('/personalized?limit=10')
      this.state.MusicSuggestList = MusicSuggestData
    },
    // 获取歌单详情
    async getPlaylistDetail(context, id) {
      let { data: PlaylistDetailData } = await axios.get(`/playlist/detail?id=${id}`)
      this.state.PlaylistDetail = PlaylistDetailData
    },
    // 获取听书
    async getListenBookList(context) {
      let { data: ListenBookListData } = await axios.get('/personalized?limit=20')
      let ls = ListenBookListData.result.slice(10, 15)
      this.state.ListenBookList = ls
    },
    // 获取独家放送
    async getExclusiveList(context) {
      let { data: ExclusiveListData } = await axios.get('/personalized/privatecontent', {
        limit: 3,
      })
      this.state.ExclusiveList = ExclusiveListData
    },
    // 获取新音乐
    async getNewSongList(context) {
      let { data: NewSongListData } = await axios.get('/personalized/newsong', { limit: 12 })
      this.state.NewSongList = NewSongListData
    },
    // 获取精品歌单
    async getPlaylistHighqualityList(context) {
      let { data: PlaylistHighqualityListData } = await axios.get(
        '/top/playlist/highquality?limit=1'
      )
      // console.log(PlaylistHighqualityListData)
      this.state.PlaylistHighqualityList = PlaylistHighqualityListData
    },
    // 获取分类歌单/playlist/catlist
    async getPlaylist(context, tag) {
      let { data: PlaylistData } = await axios.get(`/top/playlist?cat=${tag}&limit=1426`)
      // console.log(PlaylistData)
      this.state.PlaylistsData = PlaylistData
      this.state.pageTotal = PlaylistData.playlists.length
      this.state.pageCount = Math.ceil(this.state.pageTotal / this.state.pageSize)
      context.commit('getPlaylistPage')
    },
    // 获取专属订制
  },

  plugins: [VuexPersist()],
})
export default store
