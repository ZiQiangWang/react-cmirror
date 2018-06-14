import React, { Component } from 'react';

import ReactCodeMirror from '../src/react-cmirror';
import 'codemirror/addon/display/fullscreen';
import 'codemirror/addon/display/fullscreen.css';
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
      mode: 'markdown'
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

  render() {
    const { text, theme, mode } = this.state;
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
        <ReactCodeMirror
          ref={this.getInstance}
          value={text}
          width="100%"
          options={{
            autofocus: true,
            fullScreen: true,
            lineWrapping: true,
            lineNumbers: true,
            mode: mode,
            theme: theme,
          }}

          onChange={this.handleChange}
        />
      </div>

    );
  }
}
