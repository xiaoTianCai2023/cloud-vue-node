'use strict';

const { Controller } = require('egg');
const axios = require('axios');
const qs = require('qs')

class HomeController extends Controller {
  async search() {
    const { ctx } = this;

    const body = ctx.request.body;
    const search = body.search;

    const timestamp = new Date().getTime()

    const res = await axios.get(`https://cloud.tencent.com/search/ajax/searchtips?${qs.stringify({
      mc_gtk: '',
      is_iniframe: 0,
      csrfCode: '',
      uin: '',
      kwd: search,
      _: timestamp,
      callback: 'axiosJsonpCallback109'
    })}`)

    let res_str = res.data;

    res_str = res_str.replace("/**/ typeof axiosJsonpCallback109 === 'function' && axiosJsonpCallback109(", '')

    res_str = res_str.substr(0, res_str.length - 2)

    ctx.body = JSON.parse(res_str)
  }

  async carousel() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      msg: 'ok',
      data: [{
        title: '2023新春采购节',
        dec:"领8888元采购礼包，抢爆款2核2G云服务器 8元/月起",
        mp4: "https://qcloudimg.tencent-cloud.cn/raw/f253c62ded01bc2fd5e73ce8345ffcc4.mp4",
        id: 1
      },{
        title: '企业服务中心',
        dec:"为企业提供多行业场景解决方案及企业专属优惠，助力企业实现数字化转型升级",
        img: "https://picsum.photos/1115/217",
        id: 2
      },{
        title: 'CDN&音视频通信会场',
        dec:"短信0.032元/条起，CDN 0.06元/GB起，直播/点播/TRTC 套餐包0.1折起",
        img: "https://picsum.photos/1115/217",
        id: 3
      },{
        title: '大数据 新春盛惠专场',
        dec:"移动推送、BI、Doris、ES、数据湖计算、WeData、流计算、智能推荐，爆款限量秒杀，组合购买更优惠",
        img: "https://picsum.photos/1115/217",
        id: 4
      },{
        title: '会员权益中心',
        dec:"10日会员日限时领取活动可用优惠券，老用户续费更优惠",
        img: "https://picsum.photos/1115/217",
        id: 5
      }]
    }
  }

  async frame_tab() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      msg: 'ok',
      data: [{
        name: '热门推荐',
        id: Math.random().toString(36).slice(-8),
        left_card: [{
          name: '轻量应用服务器',
          dec: '开箱即用，轻量应用首选',
          id: Math.random().toString(36).slice(-8),
        },{
          name: '腾讯会议',
          dec: '云端 + 视频会议解决方案',
          id: Math.random().toString(36).slice(-8),
        }],
        right_card: [{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        }]
      },{
        name: '计算',
        id: Math.random().toString(36).slice(-8),
        left_card: [{
          name: '轻量应用服务器',
          dec: '开箱即用，轻量应用首选',
          id: Math.random().toString(36).slice(-8),
        },{
          name: '腾讯会议',
          dec: '云端 + 视频会议解决方案',
          id: Math.random().toString(36).slice(-8),
        }],
        right_card: [{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        }]
      },{
        name: '容器与中间件',
        id: Math.random().toString(36).slice(-8),
        left_card: [{
          name: '轻量应用服务器',
          dec: '开箱即用，轻量应用首选',
          id: Math.random().toString(36).slice(-8),
        },{
          name: '腾讯会议',
          dec: '云端 + 视频会议解决方案',
          id: Math.random().toString(36).slice(-8),
        }],
        right_card: [{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        }]
      },{
        name: '存储',
        id: Math.random().toString(36).slice(-8),
        left_card: [{
          name: '轻量应用服务器',
          dec: '开箱即用，轻量应用首选',
          id: Math.random().toString(36).slice(-8),
        },{
          name: '腾讯会议',
          dec: '云端 + 视频会议解决方案',
          id: Math.random().toString(36).slice(-8),
        }],
        right_card: [{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        }]
      },{
        name: '数据库',
        id: Math.random().toString(36).slice(-8),
        left_card: [{
          name: '轻量应用服务器',
          dec: '开箱即用，轻量应用首选',
          id: Math.random().toString(36).slice(-8),
        },{
          name: '腾讯会议',
          dec: '云端 + 视频会议解决方案',
          id: Math.random().toString(36).slice(-8),
        }],
        right_card: [{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        }]
      },{
        name: '网络与CDN',
        id: Math.random().toString(36).slice(-8),
        left_card: [{
          name: '轻量应用服务器',
          dec: '开箱即用，轻量应用首选',
          id: Math.random().toString(36).slice(-8),
        },{
          name: '腾讯会议',
          dec: '云端 + 视频会议解决方案',
          id: Math.random().toString(36).slice(-8),
        }],
        right_card: [{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        }]
      },{
        name: '视频服务',
        id: Math.random().toString(36).slice(-8),
        left_card: [{
          name: '轻量应用服务器',
          dec: '开箱即用，轻量应用首选',
          id: Math.random().toString(36).slice(-8),
        },{
          name: '腾讯会议',
          dec: '云端 + 视频会议解决方案',
          id: Math.random().toString(36).slice(-8),
        }],
        right_card: [{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        },{
          name: 'Elas Search',
          dec: '开箱即用的xxx服务',
          tags: [
            '易于部署',
            '强劲内核',
            '安全加固'
          ],
          id: Math.random().toString(36).slice(-8),
        }]
      }]
    }
  }


  async frame_card() {
    const { ctx } = this
    ctx.body = {
      code: 0,
      msg: 'ok',
      data: [{
        name: '教育',
        dec: '教育行业数字助手',
        icon_url: 'https://qcloudimg.tencent-cloud.cn/raw/1bab9190781de375c4291f069886fe74.png'
      },{
        name: '大数据',
        dec: '快速构建企业级数据架构',
        icon_url: '	https://qcloudimg.tencent-cloud.cn/raw/e9405a43d1c3e68b3e2eb42f6783f987.png'
      },{
        name: '专有云',
        dec: '专业安全稳定的云平台',
        icon_url: '	https://qcloudimg.tencent-cloud.cn/raw/77d8ac28ee107e0523b8ca60fe8852d4.png'
      },{
        name: '安全',
        dec: '快速省心一站式过等保',
        icon_url: 'https://qcloudimg.tencent-cloud.cn/raw/6805e8de35b66e7e87fe4d06d3a3d09e.png'
      },{
        name: '医疗',
        dec: '助力健康产业智慧化升级',
        icon_url: 'https://qcloudimg.tencent-cloud.cn/raw/bfbcf8d7614bcd231c16da40ea1d48b5.png'
      },{
        name: '云支付',
        dec: '开放可靠的支付SaaS服务',
        icon_url: 'https://qcloudimg.tencent-cloud.cn/raw/4f38122e35629dd3bd3a567251ca03b9.png'
      },{
        name: '文旅',
        dec: '文旅产业数字化转型升级',
        icon_url: 'https://qcloudimg.tencent-cloud.cn/raw/e44f8613c89741b78886fc6680effaa7.png'
      },{
        name: '小程序 云开发',
        dec: '稳定可靠一站式后端云服务',
        icon_url: 'https://qcloudimg.tencent-cloud.cn/raw/c92a7debc16466ddd27a7e5b0c1eb6ef.png'
      },{
        name: '政务',
        dec: '打造全域融合信息化平台',
        icon_url: 'https://qcloudimg.tencent-cloud.cn/raw/c2e41321fb9197e53d4fdb10dcd773ed.png'
      }]
    }
  }

  async get_qrcode() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      msg: 'ok',
      data: {
        qrcode_url: 'https://qcloudimg.tencent-cloud.cn/raw/42c198dbc0b57ae490e57f89aa01ec23.png'
      }  
    }
  }

  async solution_tabs() {
    const { ctx } = this;

    ctx.body = {
      code: 0,
      msg: 'ok',
      data: {
        search_keywords: [{
          name: '金融',
          url: 'https://baidu.com'
        },{
          name: '游戏',
          url: 'https://baidu.com'
        },{
          name: '音视频产品定制',
          url: 'https://baidu.com'
        },{
          name: '小程序 云开发',
          url: 'https://baidu.com'
        }],
        list: [{
          tab: '行业解决方案',
          id: Math.random().toString(36).slice(-8),
          content: [{
            type: '金融',
            id: Math.random().toString(36).slice(-8),
            list: ['金融', '产业金融', '金融风控', '至信链保险销售行为回溯','至信链金融类案速裁', '至信链金融数据存证']
          },{
            type: '医疗',
            id: Math.random().toString(36).slice(-8),
            list: ['医疗大健康', '医疗数据中台', '智慧医保', '消费医疗经营增长']
          },{
            type: '游戏',
            id: Math.random().toString(36).slice(-8),
            list: ['游戏', '游戏语音互动', '游戏多媒体内容安全']
          },{
            type: '文旅',
            id: Math.random().toString(36).slice(-8),
            list: ['智慧景区', '智慧停车', '生活互联', '文旅行业','云会展']
          },{
            type: '金融',
            id: Math.random().toString(36).slice(-8),
            list: ['金融', '产业金融', '金融风控', '至信链保险销售行为回溯','至信链金融类案速裁', '至信链金融数据存证']
          },{
            type: '教育',
            id: Math.random().toString(36).slice(-8),
            list: ['基础教育', '教育', '智能教育', '在线课堂','智慧教室', '校企合作人才培养']
          },{
            type: '音视频',
            id: Math.random().toString(36).slice(-8),
            list: ['腾讯智眸·采识审', '腾讯明眸·极速高清', '腾讯天籁inside', '一站式在线联络平台','音视频产品定制', '远程制作中心']
          },{
            type: '制造',
            id: Math.random().toString(36).slice(-8),
            list: ['智能制造', '工企互联', '工企微信', '工企AI','工企营销', '工业高性能计算']
          },{
            type: '交通物流',
            id: Math.random().toString(36).slice(-8),
            list: ['智慧交通', '智慧物流']
          },{
            type: '传媒',
            id: Math.random().toString(36).slice(-8),
            list: ['智慧传媒', '融媒数据中台', '智能内容安全审核', '媒体AI','至信链区块链版权保护', '智能在线视频应用']
          },{
            type: '能源与资源',
            id: Math.random().toString(36).slice(-8),
            list: ['智黄能源产品方家']
          }]
        },{
          tab: '通用解决方案',
          id: Math.random().toString(36).slice(-8),
          content: [{
            type: '金融222',
            id: Math.random().toString(36).slice(-8),
            list: ['金融', '产业金融', '金融风控', '至信链保险销售行为回溯','至信链金融类案速裁', '至信链金融数据存证']
          },{
            type: '医疗222',
            id: Math.random().toString(36).slice(-8),
            list: ['医疗大健康', '医疗数据中台', '智慧医保', '消费医疗经营增长']
          },{
            type: '游戏222',
            id: Math.random().toString(36).slice(-8),
            list: ['游戏', '游戏语音互动', '游戏多媒体内容安全']
          },{
            type: '文旅222',
            id: Math.random().toString(36).slice(-8),
            list: ['智慧景区', '智慧停车', '生活互联', '文旅行业','云会展']
          },{
            type: '金融222',
            id: Math.random().toString(36).slice(-8),
            list: ['金融', '产业金融', '金融风控', '至信链保险销售行为回溯','至信链金融类案速裁', '至信链金融数据存证']
          },{
            type: '教育222',
            id: Math.random().toString(36).slice(-8),
            list: ['基础教育', '教育', '智能教育', '在线课堂','智慧教室', '校企合作人才培养']
          },{
            type: '音视频222',
            id: Math.random().toString(36).slice(-8),
            list: ['腾讯智眸·采识审', '腾讯明眸·极速高清', '腾讯天籁inside', '一站式在线联络平台','音视频产品定制', '远程制作中心']
          },{
            type: '制造222',
            id: Math.random().toString(36).slice(-8),
            list: ['智能制造', '工企互联', '工企微信', '工企AI','工企营销', '工业高性能计算']
          },,{
            type: '交通物流222',
            id: Math.random().toString(36).slice(-8),
            list: ['智慧交通', '智慧物流']
          },{
            type: '传媒222',
            id: Math.random().toString(36).slice(-8),
            list: ['智慧传媒', '融媒数据中台', '智能内容安全审核', '媒体AI','至信链区块链版权保护', '智能在线视频应用']
          },{
            type: '能源与资源',
            id: Math.random().toString(36).slice(-8),
            list: ['智黄能源产品方家']
          }]
        },{
          tab: '微信解决方案',
          id: Math.random().toString(36).slice(-8),
          content: [{
            type: '金融333',
            id: Math.random().toString(36).slice(-8),
            list: ['金融', '产业金融', '金融风控', '至信链保险销售行为回溯','至信链金融类案速裁', '至信链金融数据存证']
          },{
            type: '医疗3333',
            id: Math.random().toString(36).slice(-8),
            list: ['医疗大健康', '医疗数据中台', '智慧医保', '消费医疗经营增长']
          },{
            type: '游戏333',
            id: Math.random().toString(36).slice(-8),
            list: ['游戏', '游戏语音互动', '游戏多媒体内容安全']
          },{
            type: '文旅3333',
            id: Math.random().toString(36).slice(-8),
            list: ['智慧景区', '智慧停车', '生活互联', '文旅行业','云会展']
          },{
            type: '金融333',
            id: Math.random().toString(36).slice(-8),
            list: ['金融', '产业金融', '金融风控', '至信链保险销售行为回溯','至信链金融类案速裁', '至信链金融数据存证']
          },{
            type: '教育333',
            id: Math.random().toString(36).slice(-8),
            list: ['基础教育', '教育', '智能教育', '在线课堂','智慧教室', '校企合作人才培养']
          },{
            type: '音视频333',
            id: Math.random().toString(36).slice(-8),
            list: ['腾讯智眸·采识审', '腾讯明眸·极速高清', '腾讯天籁inside', '一站式在线联络平台','音视频产品定制', '远程制作中心']
          },{
            type: '制造333',
            id: Math.random().toString(36).slice(-8),
            list: ['智能制造', '工企互联', '工企微信', '工企AI','工企营销', '工业高性能计算']
          },{
            type: '交通物流333',
            id: Math.random().toString(36).slice(-8),
            list: ['智慧交通', '智慧物流']
          },{
            type: '传媒333',
            id: Math.random().toString(36).slice(-8),
            list: ['智慧传媒', '融媒数据中台', '智能内容安全审核', '媒体AI','至信链区块链版权保护', '智能在线视频应用']
          },{
            type: '能源与资源333',
            id: Math.random().toString(36).slice(-8),
            list: ['智黄能源产品方家']
          }]
        }]
      }
    }

  }



}

module.exports = HomeController;
