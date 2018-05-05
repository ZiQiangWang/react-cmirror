import React, { Component } from 'react';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/theme/monokai.css';
import ReactCodeMirror from './react-cmirror';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'test',
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
          options={{
            autofocus: true,
            mode: 'markdown',
            theme: 'monokai',
          }}

          onChange={this.handleChange}
        />
      </div>

    );
  }
}
