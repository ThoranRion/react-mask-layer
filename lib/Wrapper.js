'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _Layer = require('./Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _getContainerRenderMixin = require('./_util/getContainerRenderMixin');

var _getContainerRenderMixin2 = _interopRequireDefault(_getContainerRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Wrapper = (0, _createReactClass2["default"])({
  displayName: 'Wrapper',

  mixins: [(0, _getContainerRenderMixin2["default"])({
    isVisible: function isVisible(instance) {
      return instance.props.visible;
    },

    autoDestroy: false,
    getComponent: function getComponent(instance, extra) {
      return _react2["default"].createElement(_Layer2["default"], _extends({}, instance.props, extra, {
        key: 'dialog'
      }));
    }
  })],

  getDefaultProps: function getDefaultProps() {
    return {
      visible: false
    };
  },
  shouldComponentUpdate: function shouldComponentUpdate(_ref) {
    var visible = _ref.visible;

    return !!(this.props.visible || visible);
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.props.visible) {
      this.renderComponent({
        afterClose: this.removeContainer,
        onClose: function onClose() {},

        visible: false
      });
    } else {
      this.removeContainer();
    }
  },
  getElement: function getElement(part) {
    return this._component.getElement(part);
  },
  render: function render() {
    return null;
  }
});

exports["default"] = Wrapper;
module.exports = exports['default'];