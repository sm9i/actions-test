import axios from 'axios'
export const Net = axios.create({
  baseURL: 'https://community.iqiyi.com',
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json;charset=UTF-8 application/json;charset=UTF-8'
  }
})
