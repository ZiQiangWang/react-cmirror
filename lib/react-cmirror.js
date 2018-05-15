'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _codemirror = require('codemirror');

var _codemirror2 = _interopRequireDefault(_codemirror);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('codemirror/lib/codemirror.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @authors ZiQiangWang
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @email   814120507@qq.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date    2017-08-01 23:26:21
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ReactCodeMirror = function (_Component) {
  _inherits(ReactCodeMirror, _Component);

  function ReactCodeMirror(props) {
    _classCallCheck(this, ReactCodeMirror);

    var _this = _possibleConstructorReturn(this, (ReactCodeMirror.__proto__ || Object.getPrototypeOf(ReactCodeMirror)).call(this, props));

    _this.getEventHandleFromProps = function () {
      var propNames = Object.keys(_this.props);
      var eventHandle = propNames.filter(function (prop) {
        var p = /^on+/;
        return p.test(prop);
      });

      var eventDict = {};
      eventHandle.forEach(function (ele) {
        eventDict[ele] = ele.replace(/^on[A-Z]/g, function (s) {
          return s.slice(2).toLowerCase();
        });
      });

      return eventDict;
    };

    _this.codemirror = null;
    _this.codemirrorInstance = null;
    return _this;
  }

  _createClass(ReactCodeMirror, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // 生成codemirror实例
      this.codemirrorInstance = _codemirror2.default.fromTextArea(this.textarea, this.props.options);
      // 获取CodeMirror用于获取其中的一些常量
      this.codemirror = _codemirror2.default;
      // 事件处理映射
      var eventDict = this.getEventHandleFromProps();

      Object.keys(eventDict).forEach(function (event) {
        _this2.codemirrorInstance.on(eventDict[event], _this2.props[event]);
      });

      // 初始化值
      this.codemirrorInstance.setValue(this.props.value || '');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var val = this.codemirrorInstance.getValue();
      var next = nextProps.value;
      if (next !== undefined && next !== this.props.value && next !== val) {
        this.codemirrorInstance.setValue(nextProps.value);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.codemirror) {
        this.codemirror.toTextArea();
      }
    }

    // 将props中所有的事件处理函数映射并保存

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          className = _props.className,
          style = _props.style;

      return _react2.default.createElement(
        'div',
        { className: className, style: style },
        _react2.default.createElement('textarea', { ref: function ref(instance) {
            _this3.textarea = instance;
          } })
      );
    }
  }]);

  return ReactCodeMirror;
}(_react.Component);

ReactCodeMirror.defaultProps = {
  value: '',
  options: {},
  className: '',
  style: {}
};

ReactCodeMirror.propTypes = {
  value: _propTypes2.default.string,
  options: _propTypes2.default.object,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};

exports.default = ReactCodeMirror;
module.exports = exports['default'];