import axios from 'axios'
import { baseURL, chengpin, login } from './base'
import { httpGet, httpPost } from './../utils/http';

axios.defaults.baseURL = baseURL

export const getChengpin = () => {
  return httpGet(chengpin)
}

export const postLogin = (params) => {
  return httpPost(login, params)
}
