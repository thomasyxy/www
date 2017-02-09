"use strict"
const fs = require("fs");

module.exports = {
  index: function *(next){
    // var data = yield this.fetch('home_data', {}, {})
    this.render('index',{
      title: '逸轩的博客',
      data: {
        msg: '1',
        smile: ':)'
      }
    })
    yield next
  },

  center: function *(next){
    this.render('login', {
      title: 'login',
      data: {
        msg: 'login'
      }
    })
    yield next
  },

  getInitData: function *(next){
    this.body = {
      "success": true,
      "message": 0,
      "data": {
        "navData": {
          "list" : [
            {
              "title": "博客",
              "url": "111",
              "desc": "2333333333"
            },
            {
              "title": "github",
              "url": "111",
              "desc": "2333333333"
            },
            {
              "title": "实验室",
              "list": [
                {
                  "title": "游戏",
                  "list": [
                    {
                      "title": "小游戏",
                      "url": "1112",
                      "desc": "2333333333"
                    },
                    {
                      "title": "聊天室",
                      "url": "1112",
                      "desc": "2333333333"
                    },
                    {
                      "title": "聊天室",
                      "url": "1112",
                      "desc": "2333333333"
                    }
                  ],
                  "default": false,
                  "url": "",
                  "desc": "2333333333"
                },
                {
                  "title": "音乐",
                  "list": [
                    {
                      "title": "小游戏",
                      "url": "1112",
                      "desc": "2333333333"
                    },
                    {
                      "title": "聊天室",
                      "url": "1112",
                      "desc": "2333333333"
                    },
                    {
                      "title": "聊天室",
                      "url": "1112",
                      "desc": "2333333333"
                    },
                    {
                      "title": "聊天室",
                      "url": "1112",
                      "desc": "2333333333"
                    }
                  ],
                  "default": false,
                  "url": "",
                  "desc": "2333333333"
                },
                {
                  "title": "电影",
                  "list": [
                    {
                      "title": "小游戏",
                      "url": "1112",
                      "desc": "2333333333"
                    },
                    {
                      "title": "聊天室",
                      "url": "1112",
                      "desc": "2333333333"
                    },
                    {
                      "title": "聊天室",
                      "url": "1112",
                      "desc": "2333333333"
                    },
                    {
                      "title": "聊天室",
                      "url": "1112",
                      "desc": "2333333333"
                    }
                  ],
                  "default": false,
                  "url": "",
                  "desc": "2333333333"
                },
                {
                  "title": "开发",
                  "list": [
                    {
                      "title": "小游戏",
                      "url": "1112",
                      "desc": "2333333333"
                    },
                    {
                      "title": "聊天室",
                      "url": "1112",
                      "desc": "2333333333"
                    },
                    {
                      "title": "聊天室",
                      "url": "1112",
                      "desc": "2333333333"
                    },
                    {
                      "title": "聊天室",
                      "url": "1112",
                      "desc": "2333333333"
                    }
                  ],
                  "default": false,
                  "url": "",
                  "desc": "2333333333"
                },
                {
                  "title": "更多",
                  "list": [],
                  "default": false,
                  "url": "aaa",
                  "desc": "2333333333"
                }
              ],
              "url": "",
              "desc": "2333333333"
            }
          ]
        }
      }
    }

    yield next
  }
}
