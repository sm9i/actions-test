import { Net } from './net.js'

const ck = process.env.CK
const id = process.env.ID
const uId = process.env.UID
const sign = process.env.SIGN

const path = `/openApi/task/execute?agentType=1&agentversion=1.0&appKey=basic_pcw` +
  `&authCookie=${ck}` +
  `&qyid=${id}&task_code=natural_month_sign` +
  `&timestamp=1722003203886&typeCode=point&userId=${uId}&sign=${sign}`

const data = {
  'natural_month_sign': {
    'agentType': 1,
    'agentversion': 1,
    'authCookie': ck,
    'qyid': id,
    'verticalCode': 'iQIYI',
    'taskCode': 'iQIYI_mofhr'
  }
}

Net.request({
  url: path,
  data: data,
  method: 'POST'
}).then(({ data }) => {
  console.log(data)
}).catch((err) => {
  console.log(err)
})