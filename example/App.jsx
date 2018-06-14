import React, { Component } from 'react';

import ReactCodeMirror from '../src/react-cmirror';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/night.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';


const themes = ['monokai', 'material', 'night'];
const modes = ['markdown', 'javascript', 'python']
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: `# CHNAGELOG

## 1.2.0(2018-06-02)

- 取消了属性class和style，添加了width和height属性，用来修改尺寸
- 修改向外暴露的codemirror相关属性，editor作为codemirror实例，codemirror为对象本身`,
      theme: 'monokai',
      mode: 'markdown',
      width: '100%',
      height: '400'
    };
  }

  getInstance = (instance) => {
    this.codemirror = instance.codemirror;
    this.codemirrorInstance = instance.codemirrorInstance;
  }

  handleChange = (instance) => {
    this.setState({
      text: instance.getValue(),
    });
  }

  inputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  changeTheme = (e) => {
    this.setState({ theme: e.target.value });
  }

  changeMode = (e) => {
    this.setState({ mode: e.target.value });
  }

  changeWidth = (e) => {
    this.setState({ width: e.target.value });
  }

  changeHeight = (e) => {
    this.setState({ height: e.target.value });
  }

  render() {
    const { text, theme, mode, width, height } = this.state;
    const themeOptions = themes.map((item, index) => {
      return <option key={index}>{ item }</option>
    });

    const modeOptions = modes.map((item, index) => {
      return <option key={index}>{ item }</option>
    });

    return (
      <div>

        <textarea value={text} onChange={this.inputChange} style={{
          width: '100%',
          height: '100px'
        }}/>
        <select value={theme} onChange={this.changeTheme}>
          {themeOptions}
        </select>

        <select value={mode} onChange={this.changeMode}>
          {modeOptions}
        </select>
        <label>宽</label>
        <input value={width} onChange={this.changeWidth}/>
        <label>高</label>
        <input value={height} onChange={this.changeHeight}/>
        <ReactCodeMirror
          ref={this.getInstance}
          value={text}
          width={width}
          height={height}
          options={{
            autofocus: true,
            lineWrapping: true,
            lineNumbers: true,
            mode,
            theme
          }}

          onChange={this.handleChange}
        />
      </div>

    );
  }
}
