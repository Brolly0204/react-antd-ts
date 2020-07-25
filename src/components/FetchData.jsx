import React, { Component } from 'react'
import axios from 'axios'
import { getChengpin, postLogin } from './../api/index';

export default class FetchData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      banners: []
    }
  }

  componentDidMount () {
    getChengpin().then(res => {
      console.log(res)
    })

    postLogin({
      user_id: 'iwen@qq.com',
      password: 'iwen123',
      verification_code: 'crfvw',
    }).then(res => {
      console.log(res)
    })

    // fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php', {
    //   method: 'post',
    //   // credentials: 'include'
    //   // body: JSON.stringify({ id: 1 }),
    // })
    // .then(res => {
    //   console.log(res)
    //   return res.json()
    // })
    // .then(data => {
    //   this.setState({
    //     banners: data.banner
    //   })
    // })

    // fetch('http://iwenwiki.com/api/blueberrypai/login.php', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     // name: 'serve'
    //     // authorization2: 'Bearer token'
    //   },
    //   body: new URLSearchParams({
    //     user_id: 'iwen@qq.com',
    //     password: 'iwen123',
    //     verification_code: 'crfvw'
    //   }).toString()
    // })

    // // fetch('/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0').then(res => res.json())
    // // .then(data => {
    // //   console.log(data)
    // // })

    // axios.get('/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0').then(data => {
    //   console.log('songs', data)
    // })

    // axios.post('http://iwenwiki.com/api/blueberrypai/login.php', {
    //     user_id: 'iwen@qq.com',
    //     password: 'iwen123',
    //     verification_code: 'crfvw',
    //   }, {
    //   transformRequest: [
    //     function(data) {
    //      console.log('data', data)  
    //       return new URLSearchParams(data).toString()
    //     }
    //   ]
    // }).then(data => {
    //   console.log('login', data)
    // })
  }

  render() {
    const { banners } = this.state
    console.log(banners)
    return (
      <div>
        {
          banners.length > 0 ? (
            <ul>
              {
                banners.map((banner, index) => {
                  return <li key={index}>{banner.title}</li>
                })
              }
            </ul>
          ) : <div>loading...</div>
        }
      </div>
    )
  }
}
