import React, { Component } from 'react';

import ReactCodeMirror from '../dist/react-cmirror.min';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/markdown/markdown';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: `# CHNAGELOG

## 1.2.0(2018-06-02)

- 取消了属性class和style，添加了width和height属性，用来修改尺寸
- 修改向外暴露的codemirror相关属性，editor作为codemirror实例，codemirror为对象本身`,
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


  render() {
    const { text } = this.state;
    return (
      <div>
        <input value={text} onChange={this.inputChange} />
        <ReactCodeMirror
          ref={this.getInstance}
          value={text}
          height="500px"
          width="100%"
          options={{
            autofocus: true,
            lineWrapping: true,
            lineNumbers: true,
            mode: 'markdown',
            theme: 'monokai',
          }}

          onChange={this.handleChange}
        />
      </div>

    );
  }
}
