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
import 'codemirror/theme/monokai.css';
import ReactCodeMirror from './react-cmirror';

render(
  <ReactCodeMirror
    ref={(instance) => {
      console.log(instance.codemirror);
      console.log(instance.codemirrorInstance);
    }}
    options={{
      autofocus: true,
      mode: 'markdown',
      theme: 'monokai',
    }}

    onChange={(instance, changeObj) => {
      console.log(instance.getValue());
    }}
  />,
  document.getElementById('root'),
);
