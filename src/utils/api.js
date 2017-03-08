// 接口配置

// 测试接口
const DEFAULT = {
  local: '/mock/data/default.json',
  type: 'GET'
}

const GET_INIT_DATA = {
  local: '/mock/data/mock-init-data.json',
  url: '/home/getInitData',
  type: 'GET'
}

const GET_ARTICLE_LIST = {
  local: '/mock/data/article-list.json',
  url: '/home/getArticleList',
  type: 'GET'
}

const GET_ARTICLE = {
  local: '/mock/data/get-article.json',
  url: '/blog/getArticle',
  type: 'GET'
}







export default {
    DEFAULT,
    GET_INIT_DATA,
    GET_ARTICLE_LIST
};
