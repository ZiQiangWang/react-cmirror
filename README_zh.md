# react-cmirror

> react-cmirror是一个对codemirror组件的react封装，支持所有的codemirror的配置和事件。

[中文](README_zh.md)|[English](README.md)

[![npm](https://img.shields.io/npm/v/react-cmirror.svg)](https://www.npmjs.com/package/react-cmirror)
[![npm](https://img.shields.io/npm/dm/react-cmirror.svg)](https://www.npmjs.com/package/react-cmirror)

## 1. 安装

```js
npm install --save react-cmirror
```

## 2. 运行例子

执行以下命令，在本地运行例子：

```js
npm install
npm run start
```

## 3. 使用说明

最简使用方案:

```js
import ReactCodeMirror from 'react-cmirror';
<ReactCodeMirror value={text} />
```

## 4. 参数

- `value`:  CodeMirror显示的值
- `options`:  CodeMirror的配置, 参考 [ 这里](http://codemirror.net/doc/manual.html#config) 查看所有可用的配置.
- `width`:  设置编辑器宽度，可以使用数字（例如： 400，单位为像素）、CSS单位（例如: '100%'，如果设置为null，表示宽度不需要改变
- `height`:  设置编辑器高度，和宽度类似

**注意**: `width` 和 `height` 会覆盖CodeMirror的CSS样式，如果有其他方面的修改需求，参考 [这里](http://codemirror.net/doc/manual.html#styling)

## 5. 事件

CodeMirror 支持各种 [事件](https://codemirror.net/doc/manual.html#events), 请按照以下规则响应事件操作:

- 将CodeMirror支持的事件名首字母大写，并在前面添加`on`，以此作为属性
- 事件处理函数接受的参数，是CodeMirror定义的参数

以滚动事件为例，应该设置`onScroll`, 其处理函数接受CodeMirror的实例

```js
handleScroll = (instance /*CodeMirror instance*/) => {
  console.log(instance);
}

<ReactCodeMirror onScroll={this.handleScroll} />
```

## 6. 访问CodeMirror本身

可以通过使用`ref`获得CodeMirror的实例`editor`和CodeMirror对象`codemirror`

```js
getInstance = (instance) => {
  this.codemirror = instance.codemirror;
  this.editor = instance.editor;
}
<ReactCodeMirror ref={this.getInstance}/>
```

## 7. 设定语言和主题

**语言类型**
CodeMirror 支持各种类型语言的语法高亮.  [这里](https://codemirror.net/mode/) 是可用的语言类型.但是在默认情况下，没有设置该参数，可以通过以下方式来支持:

- 从codemirror的 `mode` 文件夹下导入mode
- 在 `options` 中设置`mode`选项

**主题**
通过设置主题，可以改变各种配色方案，支持的主题可以在 [这里](http://codemirror.net/demo/theme.html)查看，使用方式如下：

- 从codemirror的 `theme` 文件夹下导入主题
- 在 `options` 中设置`theme`选项

```js
import ReactCodeMirror from 'react-cmirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/theme/monokai.css';

<ReactCodeMirror options={{mode: 'markdown', theme: 'monokai'}} />
```

## 8. 插件

[插件](http://codemirror.net/doc/manual.html#addons) 用来给Codemirror提供额外的功能，在导入 `react-cmirror` 导入插件对应的文件，并按照说明设置options

```js
import ReactCodeMirror from 'react-cmirror';
import 'codemirror/addon/display/fullscreen';
import 'codemirror/addon/display/fullscreen.css';
<ReactCodeMirror options={{fullScreen: true}} />
```

## 9. 异步加载

react页面异步加载可能会导致渲染问题，使用插件[autorefresh](http://codemirror.net/addon/display/autorefresh.js) 解决，或者在页面加载完毕后，手动调用CodeMirror的refresh方法。

## License

Copyright (c) 2017 ZiQiangWang [MIT](https://github.com/ZiQiangWang/react-cmirror/blob/master/LICENSE) Licensed.
