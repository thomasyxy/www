'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './mods/home';
import Article from './mods/article';

let pageTitle = document.title;

const onRouteEnter = (nextState, replace, callback) => {
  callback();
};
const onRouteChange = (prevState, nextState, replace, callback) => {
  callback();
  document.title = nextState.routes[1].title || pageTitle;
};

export default (
  <Route path="/" onEnter={onRouteEnter} onChange={onRouteChange}>
    <Route path="index" component={Home} title="主页" />
    <Route path="article" component={Article} title="文章" />
    <IndexRoute component={Home} />
    <Route path="*" component={Home} />
  </Route>
)
