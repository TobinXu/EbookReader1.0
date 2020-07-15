import axios from 'axios'

export function home() {
  return axios({
    url: `${process.env.VUE_APP_BASE_URL}/book/home`,
    method: 'get'
  })
}
