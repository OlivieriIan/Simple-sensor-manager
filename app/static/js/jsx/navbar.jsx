class NavMenu extends React.Component {
  state = {
    isOpen: false
  };

  // handleClick(){
  //   this.setState({ isOpen: !this.state.isOpen });
  //   //this.setState(state => ({ isOpen: !state.isOpen }));
  // }

  render(){
    const classes = "navbar-menu-burger";
    const {isOpen} = this.state;
    var open = ((isOpen) ?" open":"");
    //<div className="navbar-menu" onClick={() => this.handleClick()}>
    return(
      <div className="navbar-menu" onClick={() => this.setState({ isOpen: !isOpen })}>
        <span className={classes + open}>
        </span>
      </div>
    );
  }
}

class NavLink extends React.Component {
  state = {
    active: (
      this.props.href ==
       ("/" + window.location.pathname.split('/')[1]))
        ?" active"
        :""
  };

  render(){
    const {hidden, href, text, classes} = this.props;
    const {active} = this.state;
    if(hidden){return(null);}

    return(
      <li className={classes + active}>

        <a href={href}>{text}</a>
      </li>
    );
  }
}

class NavImg extends React.Component {

  render(){
    const {hidden, img_url, classnames} = this.props;
    if(hidden){return(null);}
    return(
      <li>
        <img src={img_url} alt="logo" className={classnames}/>
      </li>
    )
  }
}

class NavBar extends React.Component {

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render(){
    const {no_logo} = this.props;
    return(
      <header>
        <nav>
          <ul className="navbar">
            <NavImg img_url="/static/img/react-logo.png" classnames="navbar-logo" hidden={no_logo}/>
            <NavLink href="/home" text="Home" classes="navbar-item" />
            <NavLink href="/configuration" text="Configuration" classes="navbar-item" />
            <NavLink href="/about" text="About" classes="navbar-item"/>
          </ul>
          <NavMenu />
        </nav>

      </header>
    )
  }
}

ReactDOM.render(
  <NavBar />,
  document.getElementById("app-navbar")
);