/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-08-01 23:22:58
 */

import React from 'react';
import { render } from 'react-dom';
import ReactCodeMirror from './react-cm';
import 'codemirror/mode/markdown/markdown';

render(
  <ReactCodeMirror options={{
    autofocus: true,
    mode: 'markdown',
  }}
    onChange={(instance, changeObj) => {
      console.log(instance.getValue());
    }}
  />,
  document.getElementById('root'),
);
