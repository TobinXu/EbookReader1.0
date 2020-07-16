import axios from 'axios'

export function home() {
  return axios({
    url: `${process.env.VUE_APP_BASE_URL}/book/home`,
    method: 'get'
  })
}

export function detail(book) {
  return axios({
    method: 'get',
    url: `${process.env.VUE_APP_BASE_URL}/book/detail`,
    params: {
      fileName: book.fileName
    }
  })
}

export function list() {
    return axios({
      method: 'get',
      url: `${process.env.VUE_APP_BASE_URL}/book/list`
    })
  }
