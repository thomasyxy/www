# www

* JS runtime environment: Node ~~v4.4.7~~ v6.9.5
* Using Koa
* Equip with React, ES6 & babel 6
* Build with webpack
* MongoDB

## Build Setup

``` bash
# install dependencies
npm install

# serve at localhost:3000
# please launch mongodb
npm run dev

# debug with node-inspector at localhost:3000
node-inspector
npm run debug

# build test at localhost
npm run build

# deploy and Initialized
pm2 deploy production setup

# deploy with pm2 after commit to github
pm2 deploy production
```
