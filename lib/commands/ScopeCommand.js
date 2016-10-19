"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BootstrapCommand = function (_Command) {
  _inherits(BootstrapCommand, _Command);

  function BootstrapCommand() {
    _classCallCheck(this, BootstrapCommand);

    return _possibleConstructorReturn(this, (BootstrapCommand.__proto__ || Object.getPrototypeOf(BootstrapCommand)).apply(this, arguments));
  }

  _createClass(BootstrapCommand, [{
    key: "initialize",
    value: function initialize(callback) {

      callback(null, true);
    }
  }, {
    key: "execute",
    value: function execute(callback) {
      var _this2 = this;

      this.bootstrapPackages(function (err) {
        if (err) {
          callback(err);
        } else {
          _this2.logger.success("Successfully bootstrapped " + _this2.filteredPackages.length + " packages.");
          callback(null, true);
        }
      });
    }
  }]);

  return BootstrapCommand;
}(Command);

exports.default = BootstrapCommand;
module.exports = exports["default"];