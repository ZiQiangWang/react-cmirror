/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-08-01 23:22:58
 */

/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import React from 'react';
import { render } from 'react-dom';
import 'codemirror/mode/markdown/markdown';
import ReactCodeMirror from '../lib/react-cmirror';

render(
  <ReactCodeMirror
    options={{
      autofocus: true,
      mode: 'markdown',
    }}
    onKeyHandled={(instance, name, event) => {
    }}

    onChange={(instance, changeObj) => {
      console.log(instance.keyNames);
      console.log(instance.getValue());
    }}
  />,
  document.getElementById('root'),
);
