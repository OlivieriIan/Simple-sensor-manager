"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SensorPlaceholder = function SensorPlaceholder() {
  return React.createElement(
    ContentLoader.default,
    { viewBox: "0 0 560 100" },
    React.createElement("rect", { x: "0", y: "0", rx: "5", ry: "5", width: "70", height: "100" })
  );
};

function shallowEqual(object1, object2) {
  var keys1 = Object.keys(object1);
  var keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
}

function deepEqual(object1, object2) {
  function isObject(object) {
    return object != null && (typeof object === "undefined" ? "undefined" : _typeof(object)) === 'object';
  }
  var keys1 = Object.keys(object1);
  var keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = keys1[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var key = _step2.value;

      var val1 = object1[key];
      var val2 = object2[key];
      var areObjects = isObject(val1) && isObject(val2);
      if (areObjects && !deepEqual(val1, val2) || !areObjects && val1 !== val2) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return true;
}

var SensorManager = function (_React$Component) {
  _inherits(SensorManager, _React$Component);

  function SensorManager() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SensorManager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SensorManager.__proto__ || Object.getPrototypeOf(SensorManager)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      error: null,
      isLoading: true,
      data: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SensorManager, [{
    key: "update",
    value: function update() {
      var _this2 = this;

      fetch("http://localhost:5000/data/fast").then(function (response) {
        return response.json();
      }).then(function (res) {
        return _this2.setState({ isLoading: false, data: res });
      }).catch(function (error) {
        return _this2.setState({ error: error, isLoading: false });
      });
      // var currentdate = new Date(); 
      // var datetime = currentdate.getMinutes() + ":" 
      //                 + currentdate.getSeconds() + "."
      //                 + currentdate.getMilliseconds();
      // console.log(datetime);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.update(); // Call first time (time 0)
      this.interval = setInterval(function () {
        return _this3.update();
      }, 500);
      this.setState({ isLoading: true });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }

    // // Use deep equal comparison to check if it's necessary to re-render the obj
    // shouldComponentUpdate(nextProps, nextState){
    //   if(!deepEqual(this.state, nextState)){return true;}
    //   //if(!deepEqual(this.props, nextProps)){return true;}
    //   return false;
    // }

  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          error = _state.error,
          isLoading = _state.isLoading,
          data = _state.data;


      if (isLoading) {
        return React.createElement(SensorPlaceholder, null);
      } else if (error) {
        return React.createElement(
          "div",
          null,
          "Error: ",
          error.message
        );
      }

      var rend = [];
      if (Object.keys(data).length != 0) {
        // if data (dictionary) is not empty
        for (var sensor in data) {
          rend.push(React.createElement(Sensor, { name: data[sensor]["name"], data: data[sensor]["data"] }));
        }
      } else {
        rend.push("No sensors found");
      }

      return React.createElement(
        React.Fragment,
        null,
        " ",
        rend,
        " "
      );
    }
  }]);

  return SensorManager;
}(React.Component);

var Sensor = function (_React$Component2) {
  _inherits(Sensor, _React$Component2);

  function Sensor() {
    _classCallCheck(this, Sensor);

    return _possibleConstructorReturn(this, (Sensor.__proto__ || Object.getPrototypeOf(Sensor)).apply(this, arguments));
  }

  _createClass(Sensor, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          name = _props.name,
          data = _props.data;


      var sensor_rows = [];
      for (var arg in data) {
        sensor_rows.push(React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            null,
            arg
          ),
          React.createElement(
            "td",
            null,
            data[arg]
          )
        ));
      }
      return React.createElement(
        "fieldset",
        null,
        React.createElement(
          "legend",
          null,
          name
        ),
        React.createElement(
          "table",
          null,
          sensor_rows
        )
      );
    }
  }]);

  return Sensor;
}(React.Component);