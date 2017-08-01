/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-08-01 23:22:58
 */

import React from 'react';
import { render } from 'react-dom';
import 'codemirror/mode/markdown/markdown';
import ReactCodeMirror from './react-cmirror';

render(
  <ReactCodeMirror
    options={{
      autofocus: true,
      mode: 'markdown',
    }}
    /* eslint-disable no-unused-vars */
    onChange={(instance, changeObj) => {
      console.log(instance.getValue());
    }}
  />,
  document.getElementById('root'),
);
