/**
 *
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-08-01 23:26:21
 */

import CodeMirror from 'codemirror';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReactCodeMirror extends Component {
  constructor(props) {
    super(props);
    this.codemirror = null;
    this.editor = null;
  }

  componentDidMount() {
    // 生成codemirror实例
    this.editor = CodeMirror.fromTextArea(this.textarea, this.props.options);
    // 获取CodeMirror用于获取其中的一些常量
    this.codemirror = CodeMirror;
    // 事件处理映射
    const eventDict = this.getEventHandleFromProps();

    Object.keys(eventDict).forEach((event) => {
      this.editor.on(eventDict[event], this.props[event]);
    });

    const { value, width, height } = this.props;
    // 初始化值
    this.editor.setValue(value || '');

    if (width || height) {
      // 设置尺寸
      this.editor.setSize(width, height);
    }
  }

  componentWillReceiveProps(nextProps) {
    const val = this.editor.getValue();
    const next = nextProps.value;
    if (next !== undefined && next !== this.props.value && next !== val) {
      this.editor.setValue(nextProps.value);
    }
  }

  componentWillUnmount() {
    if (this.editor) {
      this.editor.toTextArea();
    }
  }

  // 将props中所有的事件处理函数映射并保存
  getEventHandleFromProps = () => {
    const propNames = Object.keys(this.props);
    const eventHandle = propNames.filter((prop) => {
      const p = /^on+/;
      return p.test(prop);
    });

    const eventDict = {};
    eventHandle.forEach((ele) => {
      eventDict[ele] = ele.replace(/^on[A-Z]/g, s => s.slice(2).toLowerCase());
    });

    return eventDict;
  }

  render() {
    return (
      <textarea ref={(instance) => { this.textarea = instance; }} />
    );
  }
}

ReactCodeMirror.defaultProps = {
  value: '',
  options: {},
  width: null,
  height: null,
};

ReactCodeMirror.propTypes = {
  value: PropTypes.string,
  options: PropTypes.object,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default ReactCodeMirror;
