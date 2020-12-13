var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavMenu = function (_React$Component) {
  _inherits(NavMenu, _React$Component);

  function NavMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NavMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavMenu.__proto__ || Object.getPrototypeOf(NavMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NavMenu, [{
    key: "render",


    // handleClick(){
    //   this.setState({ isOpen: !this.state.isOpen });
    //   //this.setState(state => ({ isOpen: !state.isOpen }));
    // }

    value: function render() {
      var _this2 = this;

      var classes = "navbar-menu-burger";
      var isOpen = this.state.isOpen;

      var open = isOpen ? " open" : "";
      //<div className="navbar-menu" onClick={() => this.handleClick()}>
      return React.createElement(
        "div",
        { className: "navbar-menu", onClick: function onClick() {
            return _this2.setState({ isOpen: !isOpen });
          } },
        React.createElement("span", { className: classes + open })
      );
    }
  }]);

  return NavMenu;
}(React.Component);

var NavLink = function (_React$Component2) {
  _inherits(NavLink, _React$Component2);

  function NavLink() {
    var _ref2;

    var _temp2, _this3, _ret2;

    _classCallCheck(this, NavLink);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = NavLink.__proto__ || Object.getPrototypeOf(NavLink)).call.apply(_ref2, [this].concat(args))), _this3), _this3.state = {
      active: _this3.props.href == "/" + window.location.pathname.split('/')[1] ? " active" : ""
    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  _createClass(NavLink, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          hidden = _props.hidden,
          href = _props.href,
          text = _props.text,
          classes = _props.classes;
      var active = this.state.active;

      if (hidden) {
        return null;
      }

      return React.createElement(
        "li",
        { className: classes + active },
        React.createElement(
          "a",
          { href: href },
          text
        )
      );
    }
  }]);

  return NavLink;
}(React.Component);

var NavImg = function (_React$Component3) {
  _inherits(NavImg, _React$Component3);

  function NavImg() {
    _classCallCheck(this, NavImg);

    return _possibleConstructorReturn(this, (NavImg.__proto__ || Object.getPrototypeOf(NavImg)).apply(this, arguments));
  }

  _createClass(NavImg, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          hidden = _props2.hidden,
          img_url = _props2.img_url,
          classnames = _props2.classnames;

      if (hidden) {
        return null;
      }
      return React.createElement(
        "li",
        null,
        React.createElement("img", { src: img_url, alt: "logo", className: classnames })
      );
    }
  }]);

  return NavImg;
}(React.Component);

var NavBar = function (_React$Component4) {
  _inherits(NavBar, _React$Component4);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
  }

  _createClass(NavBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({ isLoading: false });
    }
  }, {
    key: "render",
    value: function render() {
      var no_logo = this.props.no_logo;

      return React.createElement(
        "header",
        null,
        React.createElement(
          "nav",
          null,
          React.createElement(
            "ul",
            { className: "navbar" },
            React.createElement(NavImg, { img_url: "/static/img/react-logo.png", classnames: "navbar-logo", hidden: no_logo }),
            React.createElement(NavLink, { href: "/home", text: "Home", classes: "navbar-item" }),
            React.createElement(NavLink, { href: "/configuration", text: "Configuration", classes: "navbar-item" }),
            React.createElement(NavLink, { href: "/about", text: "About", classes: "navbar-item" })
          ),
          React.createElement(NavMenu, null)
        )
      );
    }
  }]);

  return NavBar;
}(React.Component);

ReactDOM.render(React.createElement(NavBar, null), document.getElementById("app-navbar"));