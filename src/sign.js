import { Net } from './net.js'
import CryptoJS from 'crypto-js'


const signList = process.env.SIGN_LIST

const userMsg = (name, ck) => {
  const messageId = CryptoJS.MD5((new Date).getTime() + Math.floor(999999999 * Math.random())).toString()
  return Net.request({
    url: `https://vinfo.vip.iqiyi.com/external/vip_users?messageId=${messageId}&appVersion=&lang=zh_cn&platform=b6c13e26323c537d&P00001=${ck}&version=7.0&bizSource=qiyiV2_vip&vipTypes=1`,
    method: 'GET'
  }).then(({ data }) => {
    console.log(`${name}====userMsg`, data)
  }).catch((err) => {
    console.log(`${name}====userMsg`, err)
  })
}


const sign = async (name, { ck, id, uId }) => {

  await userMsg(name, ck)
  const timestamp = new Date().getTime()
  const sign = CryptoJS.MD5(`agentType=1|agentversion=1.0|appKey=basic_pcw|authCookie=${ck}|qyid=${id}|task_code=natural_month_sign|timestamp=${timestamp}|typeCode=point|userId=${uId}|UKobMjDMsDoScuWOfp6F`)
    .toString()

  return Net.request({
    url: `https://community.iqiyi.com/openApi/task/execute?agentType=1&agentversion=1.0&appKey=basic_pcw&authCookie=${ck}&qyid=${id}&task_code=natural_month_sign&timestamp=${timestamp}&typeCode=point&userId=${uId}&sign=${sign}`,
    data: {
      'natural_month_sign': {
        'agentType': 1,
        'agentversion': 1,
        'authCookie': ck,
        'qyid': id,
        'verticalCode': 'iQIYI',
        'taskCode': 'iQIYI_mofhr'
      }
    },
    method: 'POST'
  }).then(({ data }) => {
    console.log(`${name}====sign`, data)
  }).catch((err) => {
    console.log(`${name}====sign`, err)
  })
}

signList.split(',').forEach((signItem, index) => {
  const itemKey = signItem.split(' ')
  sign(itemKey[0], {
    ck: itemKey[1], id: itemKey[2], uId: itemKey[3]
  })
})

