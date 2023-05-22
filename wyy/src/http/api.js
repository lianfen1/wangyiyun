import axios from 'axios'
import bus from '../Utils/bus.js'

// 获取热搜列表/cloudsearch?keywords
export async function searchHot() {
  let { data: searchHotList } = await axios.get(`/search/hot`)
  return searchHotList
}
// 获取搜索歌曲
export async function getSearchData(searchKey) {
  let { data: result } = await axios.get(`/search?keywords=${searchKey}`)
  return result
}
// 获取歌曲url
export async function getSongUrlData(songId) {
  let { data: SongUrlData } = await axios.get(`/song/url?id=${songId}`)
  bus.emit('sendSongUrl', SongUrlData)
}
// 获取歌单所有歌曲
export async function getSongAllData() {
  let { data: SongAllData } = await this.$http.get('/playlist/track/all?id=24381616')
  console.log(SongAllData)
}
