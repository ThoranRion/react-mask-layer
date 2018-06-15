'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addEventListener = require('./_util/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _Wrapper = require('./Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mousePosition = void 0;
var mousePositionEventBinded = void 0;

function noop() {}

var MaskLayer = (0, _createReactClass2["default"])({
  displayName: 'MaskLayer',


  propTypes: {
    prefixCls: _react.PropTypes.string,
    /** 对话框是否可见*/
    visible: _react.PropTypes.bool,
    /** 点击蒙层是否允许关闭*/
    maskClosable: _react.PropTypes.bool,
    wrapClassName: _react.PropTypes.string,
    maskTransitionName: _react.PropTypes.string,
    transitionName: _react.PropTypes.string,
    className: _react.PropTypes.string,
    onCancel: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'mx-mask',
      transitionName: 'zoom',
      maskTransitionName: 'fade',
      visible: false,
      maskClosable: true,
      onCancel: noop
    };
  },
  componentDidMount: function componentDidMount() {
    if (mousePositionEventBinded) {
      return;
    }
    // 只有点击事件支持从鼠标位置动画展开
    (0, _addEventListener2["default"])(document.documentElement, 'click', function (e) {
      mousePosition = {
        x: e.pageX,
        y: e.pageY
      };
      // 100ms 内发生过点击事件，则从点击位置动画展示
      // 否则直接 zoom 展示
      // 这样可以兼容非点击方式展开
      setTimeout(function () {
        return mousePosition = null;
      }, 100);
    });
    mousePositionEventBinded = true;
  },
  _handleCancel: function _handleCancel(e) {
    this.props.onCancel(e);
  },
  render: function render() {
    var visible = this.props.visible;


    return _react2["default"].createElement(_Wrapper2["default"], _extends({
      onClose: this._handleCancel
    }, this.props, {
      visible: visible,
      mousePosition: mousePosition
    }));
  }
});

exports["default"] = MaskLayer;
module.exports = exports['default'];