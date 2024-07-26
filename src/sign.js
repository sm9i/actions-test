import { Net } from './net.js'
import CryptoJS from 'crypto-js'

const ck = process.env.CK
const id = process.env.ID
const uId = process.env.UID

const timestamp = new Date().getTime()
const sign = CryptoJS.MD5(`agentType=1|agentversion=1.0|appKey=basic_pcw|authCookie=${ck}|qyid=${id}|task_code=natural_month_sign|timestamp=${timestamp}|typeCode=point|userId=${uId}|UKobMjDMsDoScuWOfp6F`).toString()

Net.request({
  url: `/openApi/task/execute?agentType=1&agentversion=1.0&appKey=basic_pcw&authCookie=${ck}&qyid=${id}&task_code=natural_month_sign&timestamp=${timestamp}&typeCode=point&userId=${uId}&sign=${sign}`,
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
  console.log(data)
}).catch((err) => {
  console.log(err)
})