import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import './demo/scss/index.scss';

import Layout from './demo/layout';
import ListComponent from './demo/list';
import PickerComponent from './demo/picker/picker-demo';
import ToastComponent from './demo/toast';
import ConfirmComponent from './demo/confirm';
import InfiniteScroll from './demo/infinite-scroll';
import SearchbarComponent from './demo/searchbar';
import AccordionComponent from './demo/accordion';

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={ListComponent}/>
      <Route path='/list' component={ListComponent}></Route>
      <Route path='/picker-demo' component={PickerComponent}></Route>
      <Route path='/toast-demo' component={ToastComponent}></Route>
      <Route path='/confirm-demo' component={ConfirmComponent}></Route>
      <Route path='/infinite-scroll-demo' component={InfiniteScroll}></Route>
      <Route path='/searchbar-demo' component={SearchbarComponent}></Route>
      <Route path='/accordion-demo' component={AccordionComponent}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
