import axios from 'axios'

export const httpGet = (url, params) => {
  return axios.get(url, { params })
}

export const httpPost = (url, params, config = {}) => {
  const _config = {
    transformRequest: [
        function(data) {
         console.log('data', data)  
          return new URLSearchParams(data).toString()
        }
      ]
  }
  return axios.post(url, params, Object.assign({}, _config, config))
}
