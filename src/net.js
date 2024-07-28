import axios from 'axios'
export const Net = axios.create({
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json;charset=UTF-8 application/json;charset=UTF-8'
  }
})
