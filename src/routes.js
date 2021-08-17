import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Post from './Components/Post/Post';
import Home from './Components/Home/Home';
import TopicList from './Components/TopicList/TopicList';

export default (
  <Switch>
    <Route exact component={Home} path='/' />
    <Route component={Post} path='/topics/:id' />
    <Route component={TopicList} path='/topics' />
  </Switch>
);