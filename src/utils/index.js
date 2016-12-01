import extend from 'extend';

export default {
  extend: (...args) => {
    return extend.apply(null, args);
  },
  isLocal: () => {
    const hostname = location.hostname;
    return /127\.0\.0\.1/.test(hostname) || /localhost/.test(hostname) || /^(\d+\.){1,}\d+$/.test(hostname);
  },
  getUrlParam: (name) => {
    const params = QueryString.parse(localion.search);
    return typeof name === 'undefined' ? undefined : params[name];
  }
}
