"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Analyst = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _reactChartjs = require("react-chartjs-2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Analyst =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Analyst, _React$Component);

  function Analyst() {
    _classCallCheck(this, Analyst);

    return _possibleConstructorReturn(this, _getPrototypeOf(Analyst).apply(this, arguments));
  }

  _createClass(Analyst, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var profile = this.props.profile;
      if (!profile) return true;
      if (profile.ticker !== nextProps.profile.ticker) return true;
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var profile = this.props.profile;

      if (!profile) {
        return _react["default"].createElement("div", {
          className: "font-12"
        }, "Not available at this time... ");
      }

      if (profile.analyst_img) {
        return _react["default"].createElement("img", {
          src: profile.analyst_img,
          style: {
            width: '100%'
          }
        });
      }

      var recommendation = _lodash["default"].first((profile.recommendation || {}).data) || {};
      var pricetarget = _lodash["default"].first((profile.pricetarget || {}).data) || {};
      var data = {
        labels: ["Buy (".concat(recommendation.ratingBuy, ")"), "Overweight (".concat(recommendation.ratingOverweight, ")"), "Hold (".concat(recommendation.ratingHold, ")"), "Underweight (".concat(recommendation.ratingUnderweight, ")"), "Sell (".concat(recommendation.ratingSell, ")")],
        datasets: [{
          data: [recommendation.ratingBuy, recommendation.ratingOverweight, recommendation.ratingHold, recommendation.ratingUnderweight, recommendation.ratingSell],
          backgroundColor: ['darkgreen', 'green', 'gold', 'orange', 'red']
        }]
      };
      return _react["default"].createElement("div", {
        className: "row no-gutters font-12"
      }, _react["default"].createElement("div", {
        className: "col-md-12"
      }, pricetarget.priceTargetHigh ? _react["default"].createElement("div", null, _react["default"].createElement("b", null, "Target high:"), " ", _react["default"].createElement("b", {
        className: "green"
      }, pricetarget.priceTargetHigh)) : null, pricetarget.priceTargetLow ? _react["default"].createElement("div", null, _react["default"].createElement("b", null, "Target low:"), " ", _react["default"].createElement("b", {
        className: "green"
      }, pricetarget.priceTargetLow)) : null, pricetarget.priceTargetAverage && pricetarget.numberOfAnalysts ? _react["default"].createElement("div", null, _react["default"].createElement("b", null, "Average:"), " ", _react["default"].createElement("b", {
        className: "green"
      }, pricetarget.priceTargetAverage), " based on ", _react["default"].createElement("b", {
        className: "green"
      }, pricetarget.numberOfAnalysts), " analysts as of ", _react["default"].createElement("b", null, pricetarget.updatedDate)) : null, _react["default"].createElement("br", null)), _react["default"].createElement("div", {
        className: "col-md-12"
      }, recommendation ? _react["default"].createElement("div", null, _react["default"].createElement(_reactChartjs.Doughnut, {
        height: 120,
        data: data,
        options: {
          legend: {
            position: 'left',
            display: true,
            fontSize: 8
          }
        }
      })) : null));
    }
  }]);

  return Analyst;
}(_react["default"].Component);

exports.Analyst = Analyst;
var _default = Analyst;
exports["default"] = _default;