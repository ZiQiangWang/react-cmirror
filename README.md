# react-cmirror

> Codemirror Component for React.js, all Codemirror options and events are supported.

[中文](README_zh.md)|[English](README.md)

[![npm](https://img.shields.io/npm/v/react-cmirror.svg)](https://www.npmjs.com/package/react-cmirror)
[![npm](https://img.shields.io/npm/dm/react-cmirror.svg)](https://www.npmjs.com/package/react-cmirror)

## 1. Installation

```js
npm install --save react-cmirror
```

## 2. Demo & Examples

To build the examples locally, run:

```js
npm install
npm run start
```

## 3. Usage

Minimal usage:

```js
import ReactCodeMirror from 'react-cmirror';
<ReactCodeMirror value={text} />
```

## 4. Properties

- `value`:  the editor value
- `options`:  options for CodeMirror, see the [ CodeMirror Configuration](http://codemirror.net/doc/manual.html#config) for available options.
- `width`:  set width the editor, width and height can be either numbers (interpreted as pixels) or CSS units ("100%", for example). You can pass null for either of them to indicate that that dimension should not be changed.
- `height`:  set height the editor, same as width

**Note**: `width` and `height` overriding the css style of CodeMirror, if you want to change the style of CodeMirror, refer to [CodeMirror Customized Styling](http://codemirror.net/doc/manual.html#styling) for detail.

## 5. Events

CodeMirror support kinds of [Events](https://codemirror.net/doc/manual.html#events), to use these events, you need to follow the rules:

- `Uppercase` the first letter of event name, and add `on` at the beginning, as the property of editor.
- Event handle function recieve arguments as CodeMirror defined.

For example, to deal with `scroll` event, you need set property `onScroll`, and handeScroll will recieve `instance` argument :

```js
handleScroll = (instance /*CodeMirror instance*/) => {
  console.log(instance);
}

<ReactCodeMirror onScroll={this.handleScroll} />
```

## 6. Access to CodeMirror

You can get CodeMirror instance from `editor` and CodeMirror object from `codemirror` by using ref.

```js
getInstance = (instance) => {
  this.codemirror = instance.codemirror;
  this.editor = instance.editor;
}
<ReactCodeMirror ref={this.getInstance}/>
```

## 7. Language modes&Themes

**Language modes**
CodeMirror support syntax highlighting by setting language mode. These [Language Modes](https://codemirror.net/mode/) are available. By default, no modes is included, to enable this:

- import language mode from `mode` directory of codemirror
- set `mode` option  in `options` property

**Themes**
To change the color schemes of highlighting, theme option is supplied, these  [Themes](http://codemirror.net/demo/theme.html)  are avalible, to use like this:

- import theme from `theme` directory of codemirror
- set `theme` in `options` property

```js
import ReactCodeMirror from 'react-cmirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/theme/monokai.css';

<ReactCodeMirror options={{mode: 'markdown', theme: 'monokai'}} />
```

## 8. Addon

[Addons](http://codemirror.net/doc/manual.html#addons) are used to  implement extra editor functionality, import addon after `react-cmirror`, and set options follow the instruction.

```js
import ReactCodeMirror from 'react-cmirror';
import 'codemirror/addon/display/fullscreen';
import 'codemirror/addon/display/fullscreen.css';
<ReactCodeMirror options={{fullScreen: true}} />
```

## 9. Async loading

Asynchronous loading page may cause unexpected rendering, use addon [autorefresh](http://codemirror.net/addon/display/autorefresh.js) to resolve it. Or you can call **refresh** function of CodeMirror manually after the page loaded.

## License

Copyright (c) 2017 ZiQiangWang [MIT](https://github.com/ZiQiangWang/react-cmirror/blob/master/LICENSE) Licensed.
