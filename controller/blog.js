"use strict"

module.exports = {
  getTitle: function(){
    this.body = {
      "title": "yixuan's blog"
    }
  },
  mockPlug: function *(next){
    this.body = {
  "errCode": 0,
  "data": [
    {
      "_id": "57ccd6ab79e60cb729c8f7d9",
      "version": "1.0.0",
      "description": "AMD/CMD前端项目依赖关系分析工具",
      "author": {
        "name": "minghai.mh",
        "email": "minghai.mh@alibaba-inc.com"
      },
      "repository": {
        "type": "git",
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-analyse.git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-analyse",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "name": "一闻",
          "email": "minghai.mh@alibaba-inc.com"
        }
      ],
      "changeLog": [
        {
          "version": "1.0.0",
          "log": [
            "项目初始化"
          ]
        }
      ],
      "createTime": "2016-09-05T02:21:31.387Z",
      "updateTime": "2016-09-05T02:21:31.387Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": [
        "dependency",
        "analyse"
      ]
    },
    {
      "_id": "57d1530379e60cb729c8f809",
      "version": "2.0.5",
      "description": "fie-plugin-awp 用于自动发布至AWP平台",
      "author": {
        "email": "dengce.dc@alibaba-inc.com",
        "name": "督布"
      },
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-awp.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-awp",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "dengce.dc@alibaba-inc.com",
          "name": "督布"
        }
      ],
      "changeLog": [
        {
          "log": [
            "从fie-wap移植而来"
          ],
          "version": "1.0.0"
        },
        {
          "log": [
            "移除abc.json，配置项需要在fie.config.js中手动添加"
          ],
          "version": "2.0.0"
        },
        {
          "log": [
            "增加不检查build目录下是否已发布的参数设置"
          ],
          "version": "2.0.1"
        },
        {
          "log": [
            "更改错误提醒及引导"
          ],
          "version": "2.0.2"
        },
        {
          "log": [
            "修复由于依赖未添加造成无法使用的故障"
          ],
          "version": "2.0.3"
        },
        {
          "log": [
            "增加自动获取当前git分支信息的feature"
          ],
          "version": "2.0.4"
        },
        {
          "log": [
            "增加说明文档&&bugfix"
          ],
          "version": "2.0.5"
        }
      ],
      "createTime": "2016-09-08T12:01:07.629Z",
      "updateTime": "2016-09-25T03:36:52.949Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "5800542c47fa46692d705159",
      "version": "1.0.4",
      "description": "一键生成各种徽章图标，开启相应的徽章服务",
      "author": {
        "email": "benfchen.cf@alibaba-inc.com",
        "name": "benfchen.cf"
      },
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-badge.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-badge",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "benfchen.cf@alibaba-inc.com",
          "name": "benfchen.cf"
        }
      ],
      "changeLog": [
        {
          "log": [
            "更新文档"
          ],
          "version": "1.0.4"
        },
        {
          "log": [
            "coffeePay 输入支付宝账号时需考虑有时表单已经有默认值",
            "cise 在 gitlab 创建任务后等待 2s 确保已经创建完成再去 cise 上面取 taskId"
          ],
          "version": "1.0.3"
        },
        {
          "log": [
            "bugfix: coffeePay 项目名写死为 test 的问题",
            "判断项目是否能使用tnpm徽章服务，阿里内部域前缀规则放松"
          ],
          "version": "1.0.2"
        },
        {
          "log": [
            "bugfix: 页面未加载完就去操作页面导致出错"
          ],
          "version": "1.0.1"
        },
        {
          "log": [
            "不再从 fie.config.js 里读取需要的徽章服务配置，而是直接在命令行让用户选择",
            "缓存支付宝账号信息，下次别的项目默认使用同一个支付宝账号"
          ],
          "version": "1.0.0"
        },
        {
          "log": [
            "bugfix: cise 等待网页加载完在填写表单提交"
          ],
          "version": "0.0.2"
        },
        {
          "log": [
            "完成基本功能",
            "支持 tnpm, cise, coffeePay"
          ],
          "version": "0.0.1"
        }
      ],
      "createTime": "2016-10-14T03:42:36.080Z",
      "updateTime": "2016-10-19T08:13:19.459Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "5804ae7247fa46692d70515a",
      "version": "1.0.0",
      "description": "fie-plugin-cdnreplace description",
      "author": {
        "name": "宁尘",
        "email": "guanghui.ygh@alibaba-inc.com"
      },
      "repository": {
        "type": "git",
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-cdnreplace.git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-cdnreplace",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "name": "宁尘",
          "email": "guanghui.ygh@alibaba-inc.com"
        }
      ],
      "changeLog": [
        {
          "version": "1.0.0",
          "log": [
            "feat: 插件初始化，支持README.md中的功能"
          ]
        }
      ],
      "createTime": "2016-10-17T10:56:50.277Z",
      "updateTime": "2016-10-17T10:56:50.277Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "576cce14596c621c2b59a080",
      "version": "1.0.16",
      "description": "modules version check plugin for fie",
      "author": {
        "email": "kaian.wx@alibaba-inc.com",
        "name": "kaian.wx"
      },
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-check.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-check",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "kaian.wx@alibaba-inc.com",
          "name": "kaian.wx"
        }
      ],
      "changeLog": [
        {
          "log": [
            "初始版本"
          ],
          "version": "1.0.0"
        },
        {
          "log": [
            "补充.gitignore文件，删除npm包"
          ],
          "version": "1.0.1"
        },
        {
          "log": [
            "补充模块依赖"
          ],
          "version": "1.0.2"
        },
        {
          "log": [
            "发布tnpm"
          ],
          "version": "1.0.3"
        },
        {
          "log": [
            "使用 ii 进行模块安装"
          ],
          "version": "1.0.4"
        },
        {
          "log": [
            "使用 fie.tnpmInstall 进行模块安装"
          ],
          "version": "1.0.5"
        },
        {
          "log": [
            "删除process.exit相关代码"
          ],
          "version": "1.0.6"
        },
        {
          "log": [
            "bugifx"
          ],
          "version": "1.0.7"
        },
        {
          "log": [
            "修复由于npminstall导致无法正确更新组件的问题"
          ],
          "version": "1.0.8"
        },
        {
          "log": [
            "fix http://gitlab.alibaba-inc.com/fie/fie/issues/20"
          ],
          "version": "1.0.9"
        },
        {
          "log": [
            "增加ping域名的操作，处理 http://gitlab.alibaba-inc.com/fie/fie/issues/26"
          ],
          "version": "1.0.10"
        },
        {
          "log": [
            "规范文档"
          ],
          "version": "1.0.11"
        },
        {
          "log": [
            "容错处理"
          ],
          "version": "1.0.12"
        },
        {
          "log": [
            "issue #2"
          ],
          "version": "1.0.13"
        },
        {
          "log": [
            "删除多余的依赖"
          ],
          "version": "1.0.14"
        },
        {
          "log": [
            "增加集成测试"
          ],
          "version": "1.0.15"
        },
        {
          "log": [
            "增加各种徽章"
          ],
          "version": "1.0.16"
        }
      ],
      "createTime": "2016-06-24T06:07:16.911Z",
      "updateTime": "2016-10-18T08:25:38.240Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "57740e46ef936f342b4e8a4e",
      "version": "0.5.4",
      "description": "提供持续集成单测环境",
      "author": {
        "email": "zinc.lx@alibaba-inc.com",
        "name": "zinc.lx"
      },
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-ci.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-ci",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "zinc.lx@alibaba-inc.com",
          "name": "zinc.lx"
        }
      ],
      "changeLog": [
        {
          "log": [
            "兼容tnpm ii安装导致的generator找不到的问题"
          ],
          "version": "0.5.4"
        },
        {
          "log": [
            "更新文档…"
          ],
          "version": "0.5.3"
        },
        {
          "log": [
            "初始化命令规范为fie ci init（兼容原 fie ci unfold）",
            "添加cise命令, 可以一键开启gitlab的CISE服务（需要group或project添加fie_admin为master或owner）",
            "init命令会默认自动执行cise命令",
            "默认配置支持.jsx后缀的用例文件",
            "karma配置文件语法优化（尽量不干扰项目的eslint结果）",
            "会自动向.gitignore中追加测试相关的文件（coverage和results.json）"
          ],
          "version": "0.5.2"
        },
        {
          "log": [
            "browser的测试环境文件精简, 优化了webpack配置适配方式",
            "优化测试环境配置: 1.本地测试命令改为驱动本机Chrome + watch文件变化 2.升级enzyme在webpack中的配置 3.默认提供polyfill",
            "测试报告透出到持续集成环境（Aone实验室）"
          ],
          "version": "0.5.0"
        },
        {
          "log": [
            "支持在fie.config.js中适配webpack配置对象, 支持集成到其他fie套件",
            "集成了expect插件"
          ],
          "version": "0.4.5"
        },
        {
          "log": [
            "文档更新"
          ],
          "version": "0.4.2"
        },
        {
          "log": [
            "提供共享的f2e浏览器云环境帐号, 可以安装环境后直接使用无需再配置帐号信息"
          ],
          "version": "0.4.1"
        },
        {
          "log": [
            "增加f2e浏览器云环境支持"
          ],
          "version": "0.4.0"
        },
        {
          "log": [
            "增加node单测环境模板, 支持环境选择",
            "node环境添加了cise的配置文件, 在gitlab上开启ci后, 提交代码会触发cise上的测试"
          ],
          "version": "0.3.0"
        },
        {
          "log": [
            "支持tnpm ii命令",
            "增加覆盖率的json文件输出"
          ],
          "version": "0.2.0"
        },
        {
          "log": [
            "修复demo代码中的错误",
            "增加webpack配置的适配文件, 优化错误提示"
          ],
          "version": "0.1.1"
        },
        {
          "log": [
            "提供单测环境配置和依赖"
          ],
          "version": "0.1.0"
        }
      ],
      "createTime": "2016-06-29T18:07:02.355Z",
      "updateTime": "2016-10-19T11:24:42.679Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": [
        "fie-plugin",
        "fie-ci",
        "kmcs",
        "unit test env"
      ]
    },
    {
      "_id": "57d7b50846f7d8cd6adb6e0a",
      "version": "1.0.0",
      "description": "FIE云构建插件，可快速将FIE的项目对接云构建平台",
      "author": {
        "name": "宇果",
        "email": "yuguo.hyg@alibaba-inc.com"
      },
      "repository": {
        "type": "git",
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-cloud.git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-cloud",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "name": "宇果",
          "email": "yuguo.hyg@alibaba-inc.com"
        }
      ],
      "changeLog": [
        {
          "version": "1.0.0",
          "log": [
            "初始化"
          ]
        }
      ],
      "createTime": "2016-09-13T08:12:56.851Z",
      "updateTime": "2016-09-13T08:12:56.851Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "57c6edfdbe17b1c82997c9c9",
      "version": "1.1.1",
      "description": "规范git commit提交信息，生成组件的History文件",
      "author": {
        "email": "yuguo.hyg@alibaba-inc.com",
        "name": "宇果"
      },
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-commit.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-commit",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "yuguo.hyg@alibaba-inc.com",
          "name": "宇果"
        }
      ],
      "changeLog": [
        {
          "log": [
            "修复生成history文件时没有提交gitlab的问题"
          ],
          "version": "1.1.1"
        },
        {
          "log": [
            "commit时候 新增 push功能"
          ],
          "version": "1.1.0"
        },
        {
          "log": [
            "完善文档"
          ],
          "version": "1.0.2"
        },
        {
          "log": [
            "1.0 发布失败了,重新发一个"
          ],
          "version": "1.0.1"
        },
        {
          "log": [
            "初始化项目"
          ],
          "version": "1.0.0"
        }
      ],
      "createTime": "2016-08-31T14:47:25.161Z",
      "updateTime": "2016-09-20T02:43:10.980Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "574554ea738d5633191ee26c",
      "version": "1.3.0",
      "description": "初始化fie配置文件工具",
      "author": {
        "email": "yuguo.hyg@alibaba-inc.com",
        "name": "宇果"
      },
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-config.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-config",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "yuguo.hyg@alibaba-inc.com",
          "name": "宇果"
        },
        {
          "email": "zhenwu.czw@alibaba-inc.com",
          "name": "擎空"
        }
      ],
      "changeLog": [
        {
          "log": [
            "新增旧版 sui 多页面定制配置文件"
          ],
          "version": "1.3.0"
        },
        {
          "log": [
            "新增 toolkit-sui 的配置文件"
          ],
          "version": "1.2.0"
        },
        {
          "log": [
            "新增多配置的文件"
          ],
          "version": "1.1.0"
        },
        {
          "log": [
            "初始化插件"
          ],
          "version": "1.0.0"
        }
      ],
      "createTime": "2016-05-25T07:31:54.355Z",
      "updateTime": "2016-09-28T08:43:30.241Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": [
        "fie.config.js"
      ]
    },
    {
      "_id": "57614dbb92b2f2675170bb05",
      "version": "0.0.10",
      "description": "fie-plugin-console description",
      "author": {
        "email": "gengyang.gy@alibaba-inc.com",
        "name": "gengyang.gy"
      },
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/<{%=fiePluginName %}>.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-console",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "gengyang.gy@alibaba-inc.com",
          "name": "gengyang.gy"
        }
      ],
      "changeLog": [
        {
          "log": [
            "恢复默认路径"
          ],
          "version": "0.0.10"
        },
        {
          "log": [
            "修改默认路径"
          ],
          "version": "0.0.9"
        },
        {
          "log": [
            "添加默认路径、修复示例minimatch语法错误"
          ],
          "version": "0.0.8"
        },
        {
          "log": [
            "修改文档"
          ],
          "version": "0.0.7"
        },
        {
          "log": [
            "逻辑上是需要的，恢复一下"
          ],
          "version": "0.0.6"
        },
        {
          "log": [
            "删除 process.exit(1)"
          ],
          "version": "0.0.5"
        },
        {
          "log": [
            "update README.md"
          ],
          "version": "0.0.4"
        },
        {
          "log": [
            "modify the text"
          ],
          "version": "0.0.3"
        },
        {
          "log": [
            "update README.md"
          ],
          "version": "0.0.2"
        },
        {
          "log": [
            "add strip and detect functions"
          ],
          "version": "0.0.1"
        }
      ],
      "createTime": "2016-06-15T12:44:43.753Z",
      "updateTime": "2016-10-10T09:10:39.962Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "57288269ed79471617b89d60",
      "version": "1.0.29",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-dev.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-dev",
      "__v": 0,
      "type": "plugin",
      "description": "fie 套件/插件 开发环境",
      "maintainers": [
        {
          "email": "zhenwu.czw@alibaba-inc.com",
          "name": "擎空"
        }
      ],
      "changeLog": [
        {
          "log": [
            "代码同步化"
          ],
          "version": "1.0.29"
        },
        {
          "log": [
            "执行fie dev publish时 做版本号提示"
          ],
          "version": "1.0.28"
        },
        {
          "log": [
            "更新文档"
          ],
          "version": "1.0.27"
        },
        {
          "log": [
            "小优化了一下模板"
          ],
          "version": "1.0.24"
        },
        {
          "log": [
            "优复发布模块bug"
          ],
          "version": "1.0.23"
        },
        {
          "log": [
            "修复套件模板变量错误问题",
            "修复套件模板window路径问题"
          ],
          "version": "1.0.22"
        },
        {
          "log": [
            "修复插件帮助文案为fie-plugin-dev的问题"
          ],
          "version": "1.0.19"
        },
        {
          "log": [
            "修复.gitgonore文件无法传到tnpm的问题"
          ],
          "version": "1.0.18"
        },
        {
          "log": [
            "修复初始化的时候套件带有next的字眼"
          ],
          "version": "1.0.17"
        },
        {
          "log": [
            "修复若干bug"
          ],
          "version": "1.0.16"
        },
        {
          "log": [
            "优化 plugin 的 init 和 publish 逻辑",
            "优化 plugin 和 toolkit 模板中的package.json"
          ],
          "version": "1.0.15"
        },
        {
          "log": [
            "文档发布 bug 修复",
            "初始化模板更新"
          ],
          "version": "1.0.12"
        },
        {
          "log": [
            "套件/插件模板美化帮助信息"
          ],
          "version": "1.0.9"
        },
        {
          "log": [
            "发布文档 bug 修复"
          ],
          "version": "1.0.8"
        }
      ],
      "createTime": "2016-05-03T10:50:17.374Z",
      "updateTime": "2016-10-18T10:01:50.230Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": [
        "dev"
      ]
    },
    {
      "_id": "576a7a03c9105d1027c82b8c",
      "version": "0.4.0",
      "description": "data request adapter",
      "author": {
        "email": "huazhi.chz@alibaba-inc.com",
        "name": "墨焰"
      },
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/<{%=fiePluginName %}>.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-dra",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "huazhi.chz@alibaba-inc.com",
          "name": "墨焰"
        }
      ],
      "changeLog": [
        {
          "log": [
            "初步完成插件功能"
          ],
          "version": "0.0.1"
        },
        {
          "log": [
            "增加默认的adapter实现"
          ],
          "version": "0.1.0"
        },
        {
          "log": [
            "修改apiMap的集成方式"
          ],
          "version": "0.2.0"
        },
        {
          "log": [
            "简化apiMap，增加adapter方法的参数兼容"
          ],
          "version": "0.3.0"
        },
        {
          "log": [
            "将mock与remote统一在api中管理"
          ],
          "version": "0.4.0"
        }
      ],
      "createTime": "2016-06-22T11:44:03.684Z",
      "updateTime": "2016-08-08T13:38:31.659Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": [
        "adapter",
        "dra",
        "request",
        "DRA"
      ]
    },
    {
      "_id": "57e4f74646f7d8cd6adb6f2b",
      "version": "0.2.1",
      "description": "初始化 eslint 相关配置",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-eslint.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-eslint",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "zhenwu.czw@alibaba-inc.com",
          "name": "擎空"
        },
        {
          "email": "xinlei.sxl@alibaba-inc.com",
          "name": "笑斌"
        }
      ],
      "changeLog": [
        {
          "log": [
            "添加初始化 eslintrc 功能"
          ],
          "version": "0.0.1"
        },
        {
          "log": [
            "设置自动更新"
          ],
          "version": "0.0.2"
        },
        {
          "log": [
            "添加描述"
          ],
          "version": "0.0.3"
        },
        {
          "log": [
            "选项增加说明"
          ],
          "version": "0.0.4"
        },
        {
          "log": [
            "完善选项提示"
          ],
          "version": "0.1.0"
        },
        {
          "log": [
            "接入ais规则包0.0.12",
            "升级eslint到3.6.0",
            "规则升级"
          ],
          "version": "0.1.1"
        },
        {
          "log": [
            "增加运行的功能",
            "增加修复的功能"
          ],
          "version": "0.2.0"
        },
        {
          "log": [
            "init时增加.eslintignore模板"
          ],
          "version": "0.2.1"
        }
      ],
      "createTime": "2016-09-23T09:35:02.235Z",
      "updateTime": "2016-10-17T06:25:24.921Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "5728753ded79471617b89d5f",
      "version": "1.6.8",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-git.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-git",
      "__v": 0,
      "type": "plugin",
      "description": "封装git及gitlab相关操作，简化仓库创建、授权及git提交发布流程",
      "maintainers": [
        {
          "email": "zhenwu.czw@alibaba-inc.com",
          "name": "擎空"
        },
        {
          "email": "yuguo.hyg@alibaba-inc.com",
          "name": "宇果"
        }
      ],
      "changeLog": [
        {
          "log": [
            "fix: 修复tp组使用了别名,导致发布demo失败问题",
            "feat: 云构建时,不执行相关操作"
          ],
          "version": "1.6.8"
        },
        {
          "log": [
            "feature: 代码同步化"
          ],
          "version": "1.6.7"
        },
        {
          "log": [
            "fix: 修复git commit 空格匹配错误的问题"
          ],
          "version": "1.6.4"
        },
        {
          "log": [
            "fix: git commit -m 改为 git commit -am "
          ],
          "version": "1.6.3"
        },
        {
          "log": [
            "fix: git add * 改为 git add ."
          ],
          "version": "1.6.2"
        },
        {
          "log": [
            "fix: 兼容fie commit所需的格式"
          ],
          "version": "1.6.1"
        },
        {
          "log": [
            "feat: 功能变更,在创建仓库的时候同时给自己授权"
          ],
          "version": "1.6.0"
        },
        {
          "log": [
            "将默认的update提示改成 temp: update"
          ],
          "version": "1.5.16"
        },
        {
          "log": [
            "修复fie git create 当搜索不到仓库时(仓库已存在,但没搜索到),没有返回任何错误提示."
          ],
          "version": "1.5.15"
        },
        {
          "log": [
            "修复search project 100个还不够的情况,使用递归搜索"
          ],
          "version": "1.5.14"
        },
        {
          "log": [
            "修复无法创建cm的问题"
          ],
          "version": "1.5.13"
        },
        {
          "log": [
            "修复git search接口只返回20条的bug"
          ],
          "version": "1.5.12"
        },
        {
          "log": [
            "更新文档"
          ],
          "version": "1.5.11"
        },
        {
          "log": [
            "更新文档"
          ],
          "version": "1.5.10"
        },
        {
          "log": [
            "fie git publishDemo 命令请求路径变更"
          ],
          "version": "1.5.9"
        },
        {
          "log": [
            "fie git publishDemo 命令请求路径变更"
          ],
          "version": "1.5.9"
        },
        {
          "log": [
            "添加 publishDaily 命令"
          ],
          "version": "1.5.8"
        },
        {
          "log": [
            "修复 fie git cnp 的 bug"
          ],
          "version": "1.4.6"
        },
        {
          "log": [
            "增加 create 的容错能力"
          ],
          "version": "1.4.5"
        },
        {
          "log": [
            "新增data目录上传至demo平台"
          ],
          "version": "1.4.4"
        },
        {
          "log": [
            "修复Windows下无法发布的问题"
          ],
          "version": "1.4.3"
        },
        {
          "log": [
            "新增example目录发布"
          ],
          "version": "1.4.2"
        },
        {
          "log": [
            "调用中台组件发布功能的时候try catch一下"
          ],
          "version": "1.4.1"
        },
        {
          "log": [
            "新增发布中台组件网站的功能",
            "将权限降低至 master "
          ],
          "version": "1.4.0"
        },
        {
          "log": [
            "新增创建失败的回调"
          ],
          "version": "1.2.3"
        },
        {
          "log": [
            "优化desction的显示"
          ],
          "version": "1.2.1"
        },
        {
          "log": [
            "新增publishDemo命令,用于将Demo目录发布到demo平台"
          ],
          "version": "1.2.0"
        },
        {
          "log": [
            "补充文档"
          ],
          "version": "1.0.13"
        },
        {
          "log": [
            "变更token"
          ],
          "version": "1.0.12"
        },
        {
          "log": [
            "修复 fie git release 没有callback bug"
          ],
          "version": "1.0.11"
        },
        {
          "log": [
            "新增fie git release 命令"
          ],
          "version": "1.0.10"
        },
        {
          "log": [
            "优化 publishCDN 逻辑"
          ],
          "version": "1.0.9"
        }
      ],
      "createTime": "2016-05-03T09:54:05.005Z",
      "updateTime": "2016-10-11T03:43:28.392Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": [
        "git"
      ]
    },
    {
      "_id": "5736c47c9f85926b6c7a789d",
      "version": "1.2.6",
      "description": "将当前仓库软链至fie的LocalCDNPath目录",
      "readme": "",
      "moduleName": "@ali/fie-plugin-link",
      "type": "plugin",
      "__v": 0,
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-link.git",
        "type": "git"
      },
      "maintainers": [
        {
          "email": "yuguo.hyg@alibaba-inc.com",
          "name": "宇果"
        }
      ],
      "changeLog": [
        {
          "log": [
            "feat: 修复package.json中不存在repository的问题",
            "feat: 优化未发布到tnpm时的使用"
          ],
          "version": "1.2.6"
        },
        {
          "log": [
            "完善文档"
          ],
          "version": "1.2.5"
        },
        {
          "log": [
            "完善文档"
          ],
          "version": "1.2.4"
        },
        {
          "log": [
            "完善文档"
          ],
          "version": "1.2.3"
        },
        {
          "log": [
            "修复 link时候 仓库与组件名称不一致问题",
            "修复 获取 仓库信息的时候,当git/config中的url 不带 .git 时报错的问题"
          ],
          "version": "1.2.2"
        },
        {
          "log": [
            "npm 安装失败"
          ],
          "version": "1.2.1"
        },
        {
          "log": [
            "创建link 时，补齐git信息"
          ],
          "version": "1.2.0"
        },
        {
          "log": [
            "删除fie link del 命令,迁移至 fie unlink"
          ],
          "version": "1.1.0"
        },
        {
          "log": [
            "初始化"
          ],
          "version": "1.0.0"
        }
      ],
      "createTime": "2016-05-14T06:23:56.489Z",
      "updateTime": "2016-09-21T05:54:26.438Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "5765514892b2f2675170bb06",
      "version": "1.0.21",
      "description": "用于配置一个简单、易用、灵活的、可交互的前端 http 数据mock服务",
      "author": {
        "email": "shangjin.ysj@alibaba-inc.com",
        "name": "六韬"
      },
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/<{%=fiePluginName %}>.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-mock",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "shangjin.ysj@alibaba-inc.com",
          "name": "六韬"
        }
      ],
      "changeLog": [
        {
          "log": [
            "基本功能版本"
          ],
          "version": "1.0.1"
        },
        {
          "log": [
            "完善使用文档"
          ],
          "version": "1.0.2"
        },
        {
          "log": [
            "添加faker 与rosie的依赖"
          ],
          "version": "1.0.3"
        },
        {
          "log": [
            "修改primaryKey 的bug",
            "完善使用文档"
          ],
          "version": "1.0.4"
        },
        {
          "log": [
            "feed中注释掉brandlist ",
            "完善使用文档"
          ],
          "version": "1.0.5"
        },
        {
          "log": [
            "fixed mock-seed 的路径问题 "
          ],
          "version": "1.0.6"
        },
        {
          "log": [
            "文档不支持markdown table , 暂时用图片显示 "
          ],
          "version": "1.0.7"
        },
        {
          "log": [
            "完善分页功能及返回参数 ",
            "完善Mock.Feild",
            "重新fie mock init 将会提示是否覆盖"
          ],
          "version": "1.0.8"
        },
        {
          "log": [
            "根据id接口更新功能完善 ",
            "处理post提交后数据出现乱码"
          ],
          "version": "1.0.9"
        },
        {
          "log": [
            "添加watch 功能，配置文件更改不需要重启服务 ",
            "Faker.feild 字段优化"
          ],
          "version": "1.0.11"
        },
        {
          "log": [
            "fixed分页bug"
          ],
          "version": "1.0.12"
        },
        {
          "log": [
            "添加非Restful 接口支持",
            "获取列表接口添加查询条件支持与排序条件支持"
          ],
          "version": "1.0.13"
        },
        {
          "log": [
            "fixed bug"
          ],
          "version": "1.0.14"
        },
        {
          "log": [
            "接口添加params 方式支持"
          ],
          "version": "1.0.15"
        },
        {
          "log": [
            "fixed 更新方法的bug"
          ],
          "version": "1.0.16"
        },
        {
          "log": [
            "优化提示，使用Promise 优化创建与生成文件",
            "使用fie文档规范完善文档"
          ],
          "version": "1.0.17"
        },
        {
          "log": [
            "完善文档"
          ],
          "version": "1.0.18"
        },
        {
          "log": [
            "fie mock start 的时候自动init "
          ],
          "version": "1.0.19"
        },
        {
          "log": [
            "添加自定义api异常处理，防止配置代码异常导致服务中断 ",
            "文档增加复杂api定义的实现方式"
          ],
          "version": "1.0.20"
        },
        {
          "log": [
            "支持在mock目录下定义json 并通过 localhost:9090/a.json 并返回mock数据"
          ],
          "version": "1.0.21"
        }
      ],
      "createTime": "2016-06-18T13:48:56.506Z",
      "updateTime": "2016-10-12T10:50:13.597Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "5773f84cef936f342b4e8a48",
      "version": "1.1.1",
      "description": "fie-plugin-proxy description",
      "author": {
        "email": "yanhai.wyh@alibaba-inc.com",
        "name": "子昀"
      },
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/<{%=fiePluginName %}>.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-proxy",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "yanhai.wyh@alibaba-inc.com",
          "name": "子昀"
        }
      ],
      "changeLog": [
        {
          "log": [
            "就是首次发布啊啊"
          ],
          "version": "0.0.1"
        },
        {
          "log": [
            "更新静态指向目录"
          ],
          "version": "0.0.3"
        },
        {
          "log": [
            "更新ip更新政策"
          ],
          "version": "0.0.4"
        },
        {
          "log": [
            "更新文档"
          ],
          "version": "0.0.5"
        },
        {
          "log": [
            "增加hosts功能"
          ],
          "version": "0.0.6"
        },
        {
          "log": [
            "增加hosts功能"
          ],
          "version": "0.0.7"
        },
        {
          "log": [
            "增加hosts功能"
          ],
          "version": "0.0.8"
        },
        {
          "log": [
            "说明更新"
          ],
          "version": "0.0.9"
        },
        {
          "log": [
            "去掉sudo"
          ],
          "version": "0.10.0"
        },
        {
          "log": [
            "去掉调试调用"
          ],
          "version": "0.10.1"
        },
        {
          "log": [
            "去掉调试调用"
          ],
          "version": "0.10.2"
        },
        {
          "log": [
            "更新版本依赖"
          ],
          "version": "1.1.1"
        }
      ],
      "createTime": "2016-06-29T16:33:16.180Z",
      "updateTime": "2016-08-09T04:37:44.940Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "57fb3b58d42ffe045a7e6958",
      "version": "1.1.3",
      "description": "创建retcode项目及任务",
      "author": {
        "email": "yuguo.hyg@alibaba-inc.com",
        "name": "宇果"
      },
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-retcode.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-retcode",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "yuguo.hyg@alibaba-inc.com",
          "name": "宇果"
        }
      ],
      "changeLog": [
        {
          "log": [
            "fix: 修复searchProject函数返回格式不一致的问题"
          ],
          "version": "1.1.3"
        },
        {
          "log": [
            "fix: 删除调试信息"
          ],
          "version": "1.1.2"
        },
        {
          "log": [
            "fix: 修复result为空的bug"
          ],
          "version": "1.1.1"
        },
        {
          "log": [
            "新增check功能"
          ],
          "version": "1.1.0"
        },
        {
          "log": [
            "初始化完成,新增retcode插件"
          ],
          "version": "1.0.0"
        }
      ],
      "createTime": "2016-10-10T06:55:20.612Z",
      "updateTime": "2016-10-10T12:48:32.684Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "578c4b77ce0ac0f578b3fce7",
      "version": "1.0.9",
      "description": "辅助完成sui项目到next的迁移插件",
      "author": {
        "email": "huiyuan.xhy@alibaba-inc.com",
        "name": "huiyuan.xhy"
      },
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/<{%=fiePluginName %}>.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-s2n",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "qianchen.qc@alibaba-inc.com",
          "name": "qianchen.qc"
        },
        {
          "email": "huiyuan.xhy@alibaba-inc.com",
          "name": "huiyuan.xhy"
        }
      ],
      "changeLog": [
        {
          "log": [
            "first commit "
          ],
          "version": "1.0.0"
        },
        {
          "log": [
            "server 展示优化,规则提醒增加"
          ],
          "version": "1.0.1"
        },
        {
          "log": [
            "使用components.scss"
          ],
          "version": "1.0.2"
        },
        {
          "log": [
            "less2sass 使用位置调整"
          ],
          "version": "1.0.3"
        },
        {
          "log": [
            "form的布局定位说明"
          ],
          "version": "1.0.4"
        },
        {
          "log": [
            "增加部分组件说明提示"
          ],
          "version": "1.0.5"
        },
        {
          "log": [
            "@ali/sui去掉引号匹配"
          ],
          "version": "1.0.6"
        },
        {
          "log": [
            "分离出pkg升级的命令"
          ],
          "version": "1.0.7"
        },
        {
          "log": [
            "readme"
          ],
          "version": "1.0.8"
        },
        {
          "log": [
            "依赖包修改"
          ],
          "version": "1.0.9"
        }
      ],
      "createTime": "2016-07-18T03:22:31.101Z",
      "updateTime": "2016-09-30T02:38:06.881Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "5734491e2fc5c2483b973bfb",
      "version": "1.2.3",
      "description": "快速开启本地服务器",
      "readme": "",
      "moduleName": "@ali/fie-plugin-server",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "zhenwu.czw@alibaba-inc.com",
          "name": "擎空"
        }
      ],
      "changeLog": [
        {
          "log": [
            "切换到 promise ，支持 yield"
          ],
          "version": "1.2.3"
        },
        {
          "log": [
            "新增 host 配置"
          ],
          "version": "1.2.2"
        },
        {
          "log": [
            "更新文档"
          ],
          "version": "1.2.1"
        },
        {
          "log": [
            "新增指定 url 开启浏览器功能"
          ],
          "version": "1.2.0"
        },
        {
          "log": [
            "新增开启服务器功能"
          ],
          "version": "1.0.1"
        }
      ],
      "createTime": "2016-05-12T09:13:02.407Z",
      "updateTime": "2016-09-26T08:53:52.235Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": [
        "koa"
      ]
    },
    {
      "_id": "57ecc71fa7b335b66a4342ff",
      "version": "0.0.3",
      "description": "自动生成spm b位",
      "author": {
        "email": "gengyang.gy@alibaba-inc.com",
        "name": "gengyang.gy"
      },
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-spmb.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-spmb",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "gengyang.gy@alibaba-inc.com",
          "name": "gengyang.gy"
        }
      ],
      "changeLog": [
        {
          "log": [
            "优化代码逻辑及体验",
            "修改写入fie.config.js方式,调整为AST读取"
          ],
          "version": "0.0.3"
        },
        {
          "log": [
            "发布前进行babel转码"
          ],
          "version": "0.0.2"
        },
        {
          "log": [
            "完成基本功能"
          ],
          "version": "0.0.1"
        }
      ],
      "createTime": "2016-09-29T07:47:43.268Z",
      "updateTime": "2016-10-10T07:08:56.939Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "5804b73bc294b650723c2d90",
      "version": "1.0.1",
      "description": "fie-plugin-sync description",
      "author": {
        "email": "guanghui.ygh@alibaba-inc.com",
        "name": "宁尘"
      },
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-sync.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-sync",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "guanghui.ygh@alibaba-inc.com",
          "name": "宁尘"
        }
      ],
      "changeLog": [
        {
          "log": [
            "feat: 增加子模块初始化方法"
          ],
          "version": "1.0.1"
        },
        {
          "log": [
            "feat: 插件初始化，支持README.md中的功能"
          ],
          "version": "1.0.0"
        }
      ],
      "createTime": "2016-10-17T11:34:19.903Z",
      "updateTime": "2016-10-17T12:27:17.572Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "57386aa19f85926b6c7a789e",
      "version": "1.2.2",
      "description": "tnpm 发布及权限同步；快速获取当前项目在tnpm上的最新版本号",
      "readme": "",
      "moduleName": "@ali/fie-plugin-tnpm",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "yuguo.hyg@alibaba-inc.com",
          "name": "宇果"
        }
      ],
      "changeLog": [
        {
          "log": [
            "更新文档"
          ],
          "version": "1.2.2"
        },
        {
          "log": [
            "保留fie_admin用户"
          ],
          "version": "1.2.1"
        },
        {
          "log": [
            "新增fie用户",
            "变更同步规则为owner"
          ],
          "version": "1.2.0"
        },
        {
          "log": [
            "新增version命令",
            "更改升级方式为自动更新"
          ],
          "version": "1.1.0"
        }
      ],
      "createTime": "2016-05-15T12:25:05.482Z",
      "updateTime": "2016-08-15T07:43:14.336Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "5739381901c0c9856ce9231b",
      "version": "1.0.1",
      "description": "将当前项目从LocalCDNPath目录中删除",
      "author": {
        "email": "yuguo.hyg@alibaba-inc.com",
        "name": "宇果"
      },
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-plugin-unlink.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-plugin-unlink",
      "type": "plugin",
      "__v": 0,
      "maintainers": [
        {
          "email": "yuguo.hyg@alibaba-inc.com",
          "name": "宇果"
        }
      ],
      "changeLog": [
        {
          "log": [
            " 更新文档  "
          ],
          "version": "1.0.1"
        },
        {
          "log": [
            " 初始化  "
          ],
          "version": "1.0.0"
        }
      ],
      "createTime": "2016-05-16T03:01:45.250Z",
      "updateTime": "2016-08-15T08:01:57.313Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "57c3ab4a79e60cb729c8f7a3",
      "version": "0.3.2",
      "description": "AIS react业务开发用套件",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/<{%=fiePluginName %}>.git",
        "type": "git"
      },
      "author": {
        "email": "xinlei.sxl@alibaba-inc.com",
        "name": "笑斌"
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-ais",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "xinlei.sxl@alibaba-inc.com",
          "name": "笑斌"
        }
      ],
      "changeLog": [
        {
          "log": [
            "demo页移至根目录"
          ],
          "version": "0.3.2"
        },
        {
          "log": [
            "修复新增页面的bug"
          ],
          "version": "0.3.1"
        },
        {
          "log": [
            "增加新增页面功能"
          ],
          "version": "0.3.0"
        },
        {
          "log": [
            "修复缺失依赖和文件夹结构"
          ],
          "version": "0.2.6"
        },
        {
          "log": [
            "修改描述，防止歧义"
          ],
          "version": "0.2.5"
        },
        {
          "log": [
            "修复缺失的依赖"
          ],
          "version": "0.2.4"
        },
        {
          "log": [
            "增加描述"
          ],
          "version": "0.2.3"
        },
        {
          "log": [
            "增加文档",
            "梳理命令"
          ],
          "version": "0.2.2"
        },
        {
          "log": [
            "修复缺少模块问题"
          ],
          "version": "0.2.1"
        },
        {
          "log": [
            "样式兼容css、less、sass",
            "只使用单页应用"
          ],
          "version": "0.2.0"
        },
        {
          "log": [
            "修复无法使用的bug",
            "增加主题初始化"
          ],
          "version": "0.1.1"
        },
        {
          "log": [
            "复刻fie-toolkit-next功能"
          ],
          "version": "0.1.0"
        }
      ],
      "createTime": "2016-08-29T03:26:02.342Z",
      "updateTime": "2016-09-10T03:10:12.400Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "57e3589fa7b335b66a4342bb",
      "version": "0.2.1",
      "description": "fie-toolkit-ais-multi description",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/<{%=fiePluginName %}>.git",
        "type": "git"
      },
      "author": {
        "email": "xinlei.sxl@alibaba-inc.com",
        "name": "笑斌"
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-ais-multi",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "xinlei.sxl@alibaba-inc.com",
          "name": "笑斌"
        }
      ],
      "changeLog": [
        {
          "log": [
            "增加文档"
          ],
          "version": "0.2.1"
        },
        {
          "log": [
            "新增页面功能"
          ],
          "version": "0.2.0"
        },
        {
          "log": [
            "新增初始化模板功能"
          ],
          "version": "0.1.0"
        }
      ],
      "createTime": "2016-09-22T04:05:51.232Z",
      "updateTime": "2016-09-25T04:15:06.062Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "57386c2101c0c9856ce9231a",
      "version": "2.6.4",
      "description": "Webpack + React + Less/Scss 通用『React组件』开发套件。",
      "readme": "",
      "moduleName": "@ali/fie-toolkit-alife",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "yuguo.hyg@alibaba-inc.com",
          "name": "宇果"
        }
      ],
      "changeLog": [
        {
          "log": [
            "fix: 修复test文件夹被ignore的问题"
          ],
          "version": "2.6.4"
        },
        {
          "log": [
            "fix: 修复 fie git publishDemo 命令的顺序问题",
            "feat: 新增watch功能,将src编译到lib",
            "fix: copy css module 文件到lib目录"
          ],
          "version": "2.6.3"
        },
        {
          "log": [
            "fix: 修复调用fie publish d的msg信息不符合规范,导致无法提交的问题",
            "fix: 修复__toolkitCommand__顺序问题"
          ],
          "version": "2.6.2"
        },
        {
          "log": [
            "feat: 调整history文件生成的顺序"
          ],
          "version": "2.6.1"
        },
        {
          "log": [
            "feat: 新增单测及相关依赖",
            "feat: 新增cssmodule支持"
          ],
          "version": "2.6.0"
        },
        {
          "log": [
            "解决端口冲突问题,当端口被占用,会启用另一个端口"
          ],
          "version": "2.5.3"
        },
        {
          "log": [
            "完善文档"
          ],
          "version": "2.5.1"
        },
        {
          "log": [
            "完善文档"
          ],
          "version": "2.5.0"
        },
        {
          "log": [
            "删除兼容next和mext的代码,后续完全改用next-bin 来支持next & mext 开发",
            "优化init后的提示效果"
          ],
          "version": "2.5.0"
        },
        {
          "log": [
            "修复windows下获取文件夹名字的问题"
          ],
          "version": "2.4.1"
        },
        {
          "log": [
            "新增fie check 插件 及 console 插件"
          ],
          "version": "2.4.0"
        },
        {
          "log": [
            "修复react版本写错了的问题"
          ],
          "version": "2.3.1"
        },
        {
          "log": [
            "新增transform-class-properties插件",
            "升级react 版本到15+"
          ],
          "version": "2.3.0"
        },
        {
          "log": [
            "修复fie publish 默认是 daily的情况"
          ],
          "version": "2.2.3"
        },
        {
          "log": [
            "merge 2.1.1"
          ],
          "version": "2.2.1"
        },
        {
          "log": [
            "新增 add config 命令",
            "优化webpack 配置,实现无刷新更新页面",
            "新增fie publish d 命令 用于发布到daily环境"
          ],
          "version": "2.2.0"
        },
        {
          "log": [
            "添加strip-loader来去除console.log"
          ],
          "version": "2.1.1"
        },
        {
          "log": [
            "删除 next mext 相关的命令"
          ],
          "version": "2.1.0"
        },
        {
          "log": [
            "将less调整为scss"
          ],
          "version": "2.0.0"
        },
        {
          "log": [
            "修复全局没有安装gulp的问题"
          ],
          "version": "1.2.5"
        },
        {
          "log": [
            "修复gitignore无法上传到npm包的问题"
          ],
          "version": "1.2.4"
        },
        {
          "log": [
            "将demo发布功能转移至fie git 插件里"
          ],
          "version": "1.2.3"
        },
        {
          "log": [
            "demo文件夹新增源码显示功能",
            "优化build demo时候的配置",
            "优化脚手架结构"
          ],
          "version": "1.2.2"
        },
        {
          "log": [
            "修复runtime 问题"
          ],
          "version": "1.2.1"
        },
        {
          "log": [
            "新增group的输入判断",
            "修复fie add demo问题"
          ],
          "version": "1.2.0"
        },
        {
          "log": [
            "修复 DEMO 跑不起来的问题"
          ],
          "version": "1.1.9"
        },
        {
          "log": [
            "修复 package.json 中 files 导致无法正确发布tnpm的bug",
            "兼容 next-bin"
          ],
          "version": "1.1.8"
        },
        {
          "log": [
            "删除Readme.md覆盖"
          ],
          "version": "1.1.6"
        },
        {
          "log": [
            "新增依赖"
          ],
          "version": "1.1.5"
        },
        {
          "log": [
            "完善中台组件脚手架"
          ],
          "version": "1.1.4"
        },
        {
          "log": [
            "修复next组件模板demo文件"
          ],
          "version": "1.1.3"
        }
      ],
      "createTime": "2016-05-15T12:31:29.332Z",
      "updateTime": "2016-09-26T06:15:48.920Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "57b4240fd457d66e49774bab",
      "version": "0.1.0",
      "description": "北斗插件脚手架",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-toolkit-beidou-plugin.git",
        "type": "git"
      },
      "author": {
        "email": "tb109043@alibaba-inc.com",
        "name": "陌农"
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-beidou-plugin",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "tb109043@alibaba-inc.com",
          "name": "陌农"
        }
      ],
      "changeLog": [
        {
          "log": [
            "北斗插件脚手架"
          ],
          "version": "0.1.0"
        }
      ],
      "createTime": "2016-08-17T08:45:03.914Z",
      "updateTime": "2016-08-17T08:45:55.219Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "57b3004afa66685b49d8ee83",
      "version": "1.0.3",
      "description": "基于React+Redux+Blue的多页面应用解决方案",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-toolkit-blue.git",
        "type": "git"
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-blue",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "guanghui.ygh@alibaba-inc.com",
          "name": "宁尘"
        }
      ],
      "changeLog": [
        {
          "log": [
            "fix: 修改默认的blue地址"
          ],
          "version": "1.0.3"
        },
        {
          "log": [
            "gulpfile更新demo版本号bugfix",
            "修改@alife/next引用"
          ],
          "version": "1.0.2"
        },
        {
          "log": [
            "更新readme"
          ],
          "version": "1.0.1"
        },
        {
          "log": [
            "初始化模板"
          ],
          "version": "1.0.0"
        }
      ],
      "createTime": "2016-08-16T12:00:10.356Z",
      "updateTime": "2016-10-17T12:25:23.202Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": [
        "React",
        "Redux",
        "Blue",
        "muti-page"
      ]
    },
    {
      "_id": "57bd6214be17b1c82997c923",
      "version": "1.0.6",
      "description": "React + Fusion 单页面极简脚手架",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-toolkit-fusion.git",
        "type": "git"
      },
      "author": {
        "email": "yuguo.hyg@alibaba-inc.com",
        "name": "宇果"
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-fusion",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "yuguo.hyg@alibaba-inc.com",
          "name": "宇果"
        }
      ],
      "changeLog": [
        {
          "log": [
            "fix: 修复确实babel-core的问题"
          ],
          "version": "1.0.6"
        },
        {
          "log": [
            "feat: 接入ICE统计"
          ],
          "version": "1.0.5"
        },
        {
          "log": [
            "fix: 修复windows环境下报错问题"
          ],
          "version": "1.0.4"
        },
        {
          "log": [
            "增加editorconfig"
          ],
          "version": "1.0.3"
        },
        {
          "log": [
            "改为自动升级"
          ],
          "version": "1.0.1"
        },
        {
          "log": [
            "新增初始化模板功能"
          ],
          "version": "1.0.0"
        }
      ],
      "createTime": "2016-08-24T09:00:04.452Z",
      "updateTime": "2016-10-10T08:30:13.828Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "5799b09d5c1f630c7958412c",
      "version": "0.1.4",
      "description": "fie-toolkit-ipaas description",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-toolkit-ipaas.git",
        "type": "git"
      },
      "author": {
        "email": "jay.ld@alibaba-inc.com",
        "name": "飞百"
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-ipaas",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "jay.ld@alibaba-inc.com",
          "name": "飞百"
        }
      ],
      "changeLog": [
        {
          "log": [
            "更新依赖包"
          ],
          "version": "0.1.4"
        }
      ],
      "createTime": "2016-07-28T07:13:33.285Z",
      "updateTime": "2016-09-21T03:39:41.109Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "57a9a6655c1f630c79584332",
      "version": "2.1.5",
      "description": "AIS数据大屏开发环境",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/<{%=fiePluginName %}>.git",
        "type": "git"
      },
      "author": {
        "email": "xinlei.sxl@alibaba-inc.com",
        "name": "笑斌"
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-ls",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "xinlei.sxl@alibaba-inc.com",
          "name": "笑斌"
        }
      ],
      "changeLog": [
        {
          "log": [
            "修改webpack.config.js中打包库的名字"
          ],
          "version": "2.1.5"
        },
        {
          "log": [
            "修改module中默认自带方法为setOptions => setOption"
          ],
          "version": "2.1.4"
        },
        {
          "log": [
            "修改页面模板html"
          ],
          "version": "2.1.3"
        },
        {
          "log": [
            "修正添加页面时自动添加模拟入口"
          ],
          "version": "2.1.2"
        },
        {
          "log": [
            "修正package.json无法正常输出问题"
          ],
          "version": "2.1.1"
        },
        {
          "log": [
            "增加本地模拟线上环境实现控件自动加载流程"
          ],
          "version": "2.1.0"
        },
        {
          "log": [
            "修改文档"
          ],
          "version": "2.0.1"
        },
        {
          "log": [
            "[BREAKING CHANGE]打包方式变更,build功能修改为打包模块"
          ],
          "version": "2.0.0"
        },
        {
          "log": [
            "套件功能增加新增模块功能",
            "文档更新"
          ],
          "version": "1.1.0"
        },
        {
          "log": [
            "增加ali-contributors,自动生成贡献者"
          ],
          "version": "1.0.2"
        },
        {
          "log": [
            "规范项目文档",
            "修改fie.config.js中默认可自动刷新"
          ],
          "version": "1.0.1"
        },
        {
          "log": [
            "新增初始化模板功能"
          ],
          "version": "1.0.0"
        }
      ],
      "createTime": "2016-08-09T09:46:13.512Z",
      "updateTime": "2016-09-10T06:48:03.787Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "57a885b8ce0ac0f578b402b7",
      "version": "0.1.0",
      "description": "针对神笔业务开发的套件",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/<{%=fiePluginName %}>.git",
        "type": "git"
      },
      "author": {
        "email": "ray.fr@alibaba-inc.com",
        "name": "ray.fr"
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-magicpen",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "ray.fr@alibaba-inc.com",
          "name": "ray.fr"
        }
      ],
      "changeLog": [
        {
          "log": [
            "修改文档"
          ],
          "version": "0.1.0"
        }
      ],
      "createTime": "2016-08-08T13:14:32.814Z",
      "updateTime": "2016-08-22T01:54:55.035Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "573045bf0549a02e171ee41e",
      "version": "1.3.7",
      "readme": "",
      "moduleName": "@ali/fie-toolkit-mext",
      "__v": 0,
      "description": "基于Mext UI移动端应用解决方案",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-toolkit-mext.git",
        "type": "git"
      },
      "author": {
        "email": "maxin.mx@alibaba-inc.com",
        "name": "秀鑫"
      },
      "type": "toolkit",
      "maintainers": [
        {
          "email": "maxin.mx@alibaba-inc.com",
          "name": "秀鑫"
        }
      ],
      "changeLog": [
        {
          "log": [
            "feat: mtop请求支持扩展参数，比如WindVane|isSec",
            "feat: 修复黄金令箭打点bug"
          ],
          "version": "1.3.7"
        },
        {
          "log": [
            "feat: fie start 时判断是否有node_module 目录,没有的话执行安装"
          ],
          "version": "1.3.6"
        },
        {
          "log": [
            "feat: 端口冲突后自动切换",
            "feat: merge终端传入的参数 如： fie start --port 8888",
            "feat: 支持云构建",
            "feat: 新增debug包,用于显示调试信息,如 DEBUG=fie-toolkit-next fie start"
          ],
          "version": "1.3.5"
        },
        {
          "log": [
            "自动拉取最新mext组件配置列表"
          ],
          "version": "1.3.4"
        },
        {
          "log": [
            "mext依赖版本锁定最新",
            "增加mext-bootstrap.scss"
          ],
          "version": "1.3.3"
        },
        {
          "log": [
            "fastclick模块打包去除"
          ],
          "version": "1.3.1"
        },
        {
          "log": [
            "接入Ice统计"
          ],
          "version": "1.3.0"
        },
        {
          "log": [
            "修改渐进增强选项的调用模式，页面demo美化"
          ],
          "version": "1.2.0"
        },
        {
          "log": [
            "增加readme使用说明"
          ],
          "version": "1.1.20"
        },
        {
          "log": [
            "增加utils",
            "src/pages/list增加默认ajax调用方法",
            "src/pages/list增加默认utils调用方法"
          ],
          "version": "1.1.19"
        },
        {
          "log": [
            "规范套件README"
          ],
          "version": "1.1.18"
        },
        {
          "log": [
            "增加variables配置，icon自定义"
          ],
          "version": "1.1.16"
        },
        {
          "log": [
            "限定Mext大包版本号，版本升级控制"
          ],
          "version": "1.1.14"
        },
        {
          "log": [
            "__DEV__全局参数修正"
          ],
          "version": "1.1.13"
        },
        {
          "log": [
            "基于Mext大包依赖，统一版本升级"
          ],
          "version": "1.1.12"
        },
        {
          "log": [
            "基于配置平台theme，进行主题覆盖"
          ],
          "version": "1.1.0"
        },
        {
          "log": [
            "增加add page",
            "增加add c",
            "增加add data"
          ],
          "version": "1.0.9"
        },
        {
          "log": [
            "补全Mext组件"
          ],
          "version": "1.0.7"
        },
        {
          "log": [
            "文档补充"
          ],
          "version": "1.0.6"
        },
        {
          "log": [
            "build前增加clear目录操作"
          ],
          "version": "1.0.5"
        },
        {
          "log": [
            "修复@alife/mext引用路径报错问题"
          ],
          "version": "1.0.3"
        },
        {
          "log": [
            "修改依赖安装方式"
          ],
          "version": "1.0.2"
        },
        {
          "log": [
            "正式版"
          ],
          "version": "1.0.0"
        }
      ],
      "createTime": "2016-05-09T08:09:35.010Z",
      "updateTime": "2016-09-26T03:00:31.210Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "573571da2fc5c2483b973bfc",
      "version": "2.2.1",
      "description": "RSChema 组件开发套件",
      "readme": "",
      "moduleName": "@ali/fie-toolkit-mod",
      "type": "toolkit",
      "__v": 0,
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-toolkit-mod.git",
        "type": "git"
      },
      "maintainers": [
        {
          "email": "benfchen.cf@alibaba-inc.com",
          "name": "秋知"
        },
        {
          "email": "zhenwu.czw@alibaba-inc.com",
          "name": "擎空"
        }
      ],
      "changeLog": [
        {
          "log": [
            "调整 eslint 规则，继承 AIS 规则（其则是继承 airbnb javascript）"
          ],
          "version": "2.2.1"
        },
        {
          "log": [
            "集成进单元测试环境，提供测试命令"
          ],
          "version": "2.2.0"
        },
        {
          "log": [
            "更新文档"
          ],
          "version": "2.1.2"
        },
        {
          "log": [
            "修复 fie upgrade 命令模板替换问题"
          ],
          "version": "2.1.1"
        },
        {
          "log": [
            "根据模块名是否含有 -pc 字符来确定依赖的基础模块mod-base(-pc)",
            "fie publish 命令增加 merge 当前分支到 master 功能"
          ],
          "version": "2.1.0"
        },
        {
          "log": [
            "更新组件 及 less 命名方式"
          ],
          "version": "2.0.9"
        },
        {
          "log": [
            "fix: demo 引用自身路径出错问题"
          ],
          "version": "2.0.8"
        },
        {
          "log": [
            "fie build 任务中去掉在 webpack 里编译 less"
          ],
          "version": "2.0.7"
        },
        {
          "log": [
            "更新 webpack 配置",
            "支持多个组件 mock 数据",
            "添加 editorconfig"
          ],
          "version": "2.0.6"
        },
        {
          "log": [
            "修改组件模板的依赖配置方式"
          ],
          "version": "2.0.2"
        },
        {
          "log": [
            "添加 0.0.x 升级至 2.x.x 的命令 fie upgrade"
          ],
          "version": "2.0.1"
        },
        {
          "log": [
            "全新的组件开发模式"
          ],
          "version": "2.0.0"
        }
      ],
      "createTime": "2016-05-13T06:19:06.585Z",
      "updateTime": "2016-10-19T06:35:47.520Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "576a45f4c9105d1027c82b01",
      "version": "1.0.0",
      "description": "基于组件化方案的项目脚手架",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/<{%=fiePluginName %}>.git",
        "type": "git"
      },
      "author": {
        "email": "benfchen.cf@alibaba-inc.com",
        "name": "benfchen.cf"
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-mod-app",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "benfchen.cf@alibaba-inc.com",
          "name": "benfchen.cf"
        }
      ],
      "changeLog": [
        {
          "log": [
            "支持编译组件依赖的第三方库的 less -- npm import",
            "加入 retcode 统计, loading layer",
            "默认支持低版本浏览器",
            "webpack 加入 cache,exclude 配置提高编译速度"
          ],
          "version": "1.0.0"
        },
        {
          "log": [
            "修正模板缩进规范问题"
          ],
          "version": "0.0.6"
        },
        {
          "log": [
            "更新文档"
          ],
          "version": "0.0.5"
        },
        {
          "log": [
            "修复命令提示"
          ],
          "version": "0.0.4"
        },
        {
          "log": [
            "修复发布到 tnpm 后 demo 目录丢失的问题"
          ],
          "version": "0.0.3"
        },
        {
          "log": [
            "webpack 打包优化，改用 gulp 编译 less"
          ],
          "version": "0.0.2"
        },
        {
          "log": [
            "基于组件化方案的应用脚手架初版",
            "基本命令实现init, start, add, build, help"
          ],
          "version": "0.0.1"
        }
      ],
      "createTime": "2016-06-22T08:01:56.899Z",
      "updateTime": "2016-09-20T09:32:22.629Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "5732a44f2da333a15c004232",
      "version": "2.10.0",
      "readme": "",
      "moduleName": "@ali/fie-toolkit-next",
      "type": "toolkit",
      "__v": 0,
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-toolkit-next.git",
        "type": "git"
      },
      "description": "基于React+Redux+Next多页面应用解决方案",
      "maintainers": [
        {
          "email": "zhenwu.czw@alibaba-inc.com",
          "name": "擎空"
        }
      ],
      "changeLog": [
        {
          "log": [
            "feat: 专门创建了一个toolkit-next的主题， 脚手架默认使用dpl-toolkit-next",
            "feat: html里加入了retCode的配置代码和ajax接口统一打点的开关",
            "feat: util里添加log方法和ajax方式，用于统一接口打点和统一异常处理等",
            "deps: 更新ice,新增description字段统计,在fie publish时调用",
            "feat: 新增theme主题变更",
            "tips: 本次更新向下兼容,请放心升级"
          ],
          "version": "2.10.0"
        },
        {
          "log": [
            "feat: fie start 时判断是否有node_module 目录,没有的话执行安装"
          ],
          "version": "2.9.7"
        },
        {
          "log": [
            "deps: 升级apimap 版本到1.1.0"
          ],
          "version": "2.9.6"
        },
        {
          "log": [
            "deps: 升级ice-collector版本到0.2.15"
          ],
          "version": "2.9.5"
        },
        {
          "log": [
            "feat: 兼容云构建环境",
            "deps: 升级ice-collector版本",
            "feat: 新增fie start 时merge控制台参数的功能",
            "feat: 新增debug包,用于显示调试信息,如 DEBUG=fie-toolkit-next fie start"
          ],
          "version": "2.9.4"
        },
        {
          "log": [
            "完善next套件写* 可能会导致不同时期的开发者接手项目时版本不一致的问题"
          ],
          "version": "2.9.3"
        },
        {
          "log": [
            "修改文档",
            "支持 -p [port] 形式定义端口号"
          ],
          "version": "2.9.2"
        },
        {
          "log": [
            "接入ICE统计"
          ],
          "version": "2.9.1"
        },
        {
          "log": [
            "使用fusion-extrnal-webpack-plugin插件,优化fusion外链使用方式",
            "新增防止端口占用"
          ],
          "version": "2.9.0"
        },
        {
          "log": [
            "为各个命令添加callback以支持后置任务流"
          ],
          "version": "2.8.2"
        },
        {
          "log": [
            "修复80端口无法开启bug"
          ],
          "version": "2.8.1"
        },
        {
          "log": [
            "更新文档",
            "新增router页面 spm埋点解决方案",
            "新增title可根据子页面标题进行切换",
            "fie.config.js加入console detect检测"
          ],
          "version": "2.8.0"
        },
        {
          "log": [
            "更新文档",
            "简化发布代码"
          ],
          "version": "2.7.5"
        },
        {
          "log": [
            "修复html文件中,未替换掉路径的bug",
            "新增start build 可以进行单个页面打包和开发"
          ],
          "version": "2.7.4"
        },
        {
          "log": [
            "调整 webpack 的插件配置"
          ],
          "version": "2.7.3"
        },
        {
          "log": [
            "修复ReactTransitionGroup无法引用到的bug"
          ],
          "version": "2.7.2"
        },
        {
          "log": [
            "调整 webpack 配置",
            "将 babel-poly 直接通过 script 标签引入"
          ],
          "version": "2.7.1"
        },
        {
          "log": [
            "添加 redux only 页面类型",
            "webpack dev server 支持跨域访问"
          ],
          "version": "2.7.0"
        },
        {
          "log": [
            "替换项目中中的apimap",
            "修复webpack中ReduxThunk 2.1 版本,不兼容的问题",
            "优化初始化时候的提示信息"
          ],
          "version": "2.6.4"
        },
        {
          "log": [
            "修复liveload无效的问题"
          ],
          "version": "2.6.3"
        },
        {
          "log": [
            "完善文档",
            "修复liveload无效的问题"
          ],
          "version": "2.6.2"
        },
        {
          "log": [
            "修复rrp 名字 如果带 中划线 报错的问题"
          ],
          "version": "2.6.1"
        },
        {
          "log": [
            "新增fie check 插件 及 console 插件"
          ],
          "version": "2.6.0"
        },
        {
          "log": [
            "修复 不支持add带有目录的页面 bug #10"
          ],
          "version": "2.5.6"
        },
        {
          "log": [
            "修复 build的时候 漏了"
          ],
          "version": "2.5.5"
        },
        {
          "log": [
            "新增babel-plugin-transform-class-properties"
          ],
          "version": "2.5.4"
        },
        {
          "log": [
            "将lib 通过外链的方式引用,提升编译效率",
            "add 命令出来的模板文件有不兼容变更,旧项目请谨慎升级",
            "将 lib copy到 build目录",
            "新增 add conf 命令"
          ],
          "version": "2.5.3"
        },
        {
          "log": [
            "将lib 通过外链的方式引用,提升编译效率",
            "add 命令出来的模板文件有不兼容变更,旧项目请谨慎升级",
            "将 lib copy到 build目录",
            "新增 add conf 命令"
          ],
          "version": "2.5.2"
        },
        {
          "log": [
            "将lib 通过外链的方式引用,提升编译效率",
            "add 命令出来的模板文件有不兼容变更,旧项目请谨慎升级",
            "将 lib copy到 build目录"
          ],
          "version": "2.5.1"
        },
        {
          "log": [
            "将lib 通过外链的方式引用,提升编译效率",
            "add 命令出来的模板文件有不兼容变更,旧项目请谨慎升级"
          ],
          "version": "2.5.0"
        },
        {
          "log": [
            "全新的 next 组件调用方式",
            "react-router 配置方式更新"
          ],
          "version": "2.4.1"
        },
        {
          "log": [
            "缺少依赖"
          ],
          "version": "2.2.3"
        },
        {
          "log": [
            "修复dropdown bug"
          ],
          "version": "2.2.2"
        },
        {
          "log": [
            "修改为next组件"
          ],
          "version": "2.2.1"
        },
        {
          "log": [
            "添加发布功能"
          ],
          "version": "1.2.0"
        },
        {
          "log": [
            "添加sourceMap"
          ],
          "version": "1.1.2"
        },
        {
          "log": [
            "添加fie add [type] [name] 功能"
          ],
          "version": "1.1.1"
        },
        {
          "log": [
            "新增初始化模板功能"
          ],
          "version": "1.0.0"
        }
      ],
      "createTime": "2016-05-11T03:17:35.493Z",
      "updateTime": "2016-10-13T02:38:49.300Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": [
        "React",
        "Redux",
        "Sui",
        "Next",
        "muti-page"
      ]
    },
    {
      "_id": "57c3f426be17b1c82997c997",
      "version": "0.0.1",
      "description": "fie-toolkit-polymer description",
      "repository": {
        "type": "git",
        "url": "git@gitlab.alibaba-inc.com:fie/<{%=fiePluginName %}>.git"
      },
      "author": {
        "name": "倾程",
        "email": "chengyuan.zcy@alibaba-inc.com"
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-polymer",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "name": "倾程",
          "email": "chengyuan.zcy@alibaba-inc.com"
        }
      ],
      "changeLog": [
        {
          "version": "0.0.1",
          "log": [
            "新增初始化模板功能"
          ]
        }
      ],
      "createTime": "2016-08-29T08:36:54.531Z",
      "updateTime": "2016-08-29T08:36:54.531Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "577c93285c1f630c79583673",
      "version": "2.0.2",
      "description": "基于Rx的组件开发套件,一套代码可运行web及native",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-toolkit-rx.git",
        "type": "git"
      },
      "author": {
        "email": "yuguo.hyg@alibaba-inc.com",
        "name": "宇果"
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-rx",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "yuguo.hyg@alibaba-inc.com",
          "name": "宇果"
        }
      ],
      "changeLog": [
        {
          "log": [
            "完善文档",
            "替换webpack插件"
          ],
          "version": "2.0.2"
        },
        {
          "log": [
            "修复webpack替换时,没有使用变量的问题"
          ],
          "version": "2.0.1"
        },
        {
          "log": [
            "替换weex-rx-webpack-plugin插件,改用开源共用的版本,新增loader",
            "简化webpack配置"
          ],
          "version": "2.0.0"
        },
        {
          "log": [
            "修复 build文件夹的内容无法运行的bug"
          ],
          "version": "1.0.3"
        },
        {
          "log": [
            "改一下Demo"
          ],
          "version": "1.0.2"
        },
        {
          "log": [
            "修改一下文档"
          ],
          "version": "1.0.1"
        },
        {
          "log": [
            "新增初始化模板功能"
          ],
          "version": "1.0.0"
        }
      ],
      "createTime": "2016-07-06T05:12:08.161Z",
      "updateTime": "2016-08-16T08:31:45.913Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "5796196fce0ac0f578b40065",
      "version": "1.0.3",
      "description": "基于React+Next多页面简单应用解决方案",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/fie-toolkit-simple.git",
        "type": "git"
      },
      "author": {
        "email": "",
        "name": ""
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-simple",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "huiyuan.xhy@alibaba-inc.com",
          "name": "夏驰"
        }
      ],
      "changeLog": [
        {
          "log": [
            "init"
          ],
          "version": "1.0.0"
        },
        {
          "log": [
            "update"
          ],
          "version": "1.0.1"
        },
        {
          "log": [
            "readme"
          ],
          "version": "1.0.2"
        },
        {
          "log": [
            "readme"
          ],
          "version": "1.0.3"
        }
      ],
      "createTime": "2016-07-25T13:51:43.677Z",
      "updateTime": "2016-08-12T02:43:00.821Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": [
        "React",
        "Next",
        "muti-page"
      ]
    },
    {
      "_id": "57e91c8ba7b335b66a4342f4",
      "version": "1.1.0",
      "description": "sketch 插件开发套件",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/<{%=fiePluginName %}>.git",
        "type": "git"
      },
      "author": {
        "email": "shuangling.ysl@alibaba-inc.com",
        "name": "何道"
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-sketch",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "shuangling.ysl@alibaba-inc.com",
          "name": "何道"
        }
      ],
      "changeLog": [
        {
          "log": [
            "新增初始化模板功能"
          ],
          "version": "1.0.0"
        },
        {
          "log": [
            "修改README"
          ],
          "version": "1.0.1"
        },
        {
          "log": [
            "修改README"
          ],
          "version": "1.0.2"
        },
        {
          "log": [
            "修改README"
          ],
          "version": "1.0.3"
        },
        {
          "log": [
            "添加fie.config"
          ],
          "version": "1.0.4"
        },
        {
          "log": [
            "添加打包到zip的命令"
          ],
          "version": "1.1.0"
        }
      ],
      "createTime": "2016-09-26T13:03:07.292Z",
      "updateTime": "2016-10-09T13:06:53.242Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "5734261f722d52141ad28a8e",
      "version": "1.2.7",
      "description": "基于React+Redux+SUI的单页应用解决方案",
      "repository": {
        "url": "http://gitlab.alibaba-inc.com/fie/fie-toolkit-sui",
        "type": "git"
      },
      "author": {
        "email": "zhenwu.czw@alibaba-inc.com",
        "name": "擎空"
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-sui",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "zhenwu.czw@alibaba-inc.com",
          "name": "擎空"
        }
      ],
      "changeLog": [
        {
          "log": [
            "添加 use strict"
          ],
          "version": "1.2.7"
        },
        {
          "log": [
            "更新文档"
          ],
          "version": "1.2.6"
        },
        {
          "log": [
            "发布bug修复",
            "调整创建仓库时机"
          ],
          "version": "1.2.5"
        },
        {
          "log": [
            "优化fie 提示内容"
          ],
          "version": "1.2.2"
        },
        {
          "log": [
            "判断错误,修复一下"
          ],
          "version": "1.2.1"
        },
        {
          "log": [
            "初始化时,新增仓库选择,并默认创建仓库及给用户添加权限"
          ],
          "version": "1.2.0"
        },
        {
          "log": [
            "一键从 template-sui 升级至 toolkit-sui"
          ],
          "version": "1.1.2"
        },
        {
          "log": [
            "添加发布功能"
          ],
          "version": "1.0.6"
        },
        {
          "log": [
            "添加sourceMap"
          ],
          "version": "1.0.5"
        },
        {
          "log": [
            "更新sui版本"
          ],
          "version": "1.0.4"
        },
        {
          "log": [
            "初始化模板",
            "添加帮助信息"
          ],
          "version": "1.0.1"
        }
      ],
      "createTime": "2016-05-12T06:43:43.156Z",
      "updateTime": "2016-10-12T02:27:36.774Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": [
        "redux",
        "react",
        "sui"
      ]
    },
    {
      "_id": "57d3e27a46f7d8cd6adb6de7",
      "version": "0.0.2",
      "description": "fie-toolkit-txp 面向淘小铺业务的开发构建套件，关键词htmlone gulp awp",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/<{%=fiePluginName %}>.git",
        "type": "git"
      },
      "author": {
        "email": "dengce.dc@alibaba-inc.com",
        "name": "督布"
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-txp",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "dengce.dc@alibaba-inc.com",
          "name": "督布"
        }
      ],
      "changeLog": [
        {
          "log": [
            "新增初始化模板功能"
          ],
          "version": "0.0.1"
        },
        {
          "log": [
            "增加bridge生成命令，实现统一retcode封装层的统一"
          ],
          "version": "0.0.2"
        }
      ],
      "createTime": "2016-09-10T10:37:46.611Z",
      "updateTime": "2016-09-20T08:01:52.545Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "5770d36c596c621c2b59a1c7",
      "version": "0.0.2",
      "description": "fie-toolkit-vue description",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/<{%=fiePluginName %}>.git",
        "type": "git"
      },
      "author": {
        "email": "gengyang.gy@alibaba-inc.com",
        "name": "gengyang.gy"
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-vue",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "gengyang.gy@alibaba-inc.com",
          "name": "gengyang.gy"
        }
      ],
      "changeLog": [
        {
          "log": [
            "修改文档格式"
          ],
          "version": "0.0.2"
        },
        {
          "log": [
            "实现基本套件功能，待测试"
          ],
          "version": "0.0.1"
        }
      ],
      "createTime": "2016-06-27T07:19:08.047Z",
      "updateTime": "2016-08-17T02:49:20.720Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    },
    {
      "_id": "57a3f2375c1f630c79584284",
      "version": "1.0.11",
      "description": "旺铺模块开发套件",
      "repository": {
        "url": "git@gitlab.alibaba-inc.com:fie/<{%=fiePluginName %}>.git",
        "type": "git"
      },
      "author": {
        "email": "hongbang.lhb@alibaba-inc.com",
        "name": "hongbang.lhb"
      },
      "readme": "",
      "moduleName": "@ali/fie-toolkit-wangpumod",
      "type": "toolkit",
      "__v": 0,
      "maintainers": [
        {
          "email": "hongbang.lhb@alibaba-inc.com",
          "name": "hongbang.lhb"
        }
      ],
      "changeLog": [
        {
          "log": [
            "新增初始化模板功能"
          ],
          "version": "1.0.0"
        },
        {
          "log": [
            "修复bug"
          ],
          "version": "1.0.1"
        },
        {
          "log": [
            "优化目录结构"
          ],
          "version": "1.0.2"
        },
        {
          "log": [
            "支持模块发布到tnpm"
          ],
          "version": "1.0.3"
        },
        {
          "log": [
            "修改新的目录结构和优化本地server"
          ],
          "version": "1.0.4"
        },
        {
          "log": [
            "优化发布命令和规范化readme"
          ],
          "version": "1.0.5"
        },
        {
          "log": [
            "增加PC模块的支持"
          ],
          "version": "1.0.6"
        },
        {
          "log": [
            "升级套件模板&&优化git配置"
          ],
          "version": "1.0.7"
        },
        {
          "log": [
            "升级套件模板，支持点击事件埋点上报"
          ],
          "version": "1.0.8"
        },
        {
          "log": [
            "bugfix和调整defaultData的获取方式"
          ],
          "version": "1.0.9"
        },
        {
          "log": [
            "bugfix和优化本地联调方式"
          ],
          "version": "1.0.10"
        },
        {
          "log": [
            "加入watch时的信息打印"
          ],
          "version": "1.0.11"
        }
      ],
      "createTime": "2016-08-05T01:56:07.825Z",
      "updateTime": "2016-10-10T11:07:16.919Z",
      "thumb": 0,
      "userNumbers": 0,
      "keyword": []
    }
  ],
  "errMsg": null
}
  }
}
