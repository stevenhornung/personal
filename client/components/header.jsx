Header = React.createClass({
  render() {
    return <div className="header">
      <div className="container">
        <a id="logo" href="{{pathFor 'index'}}" class="navbar-brand">
          <img src="/img/steve.jpg" />
          <span>Steven Hornung</span>
        </a>
        <div id="header-nav" className="nav-no-collapse pull-right">
          <ul className="nav navbar-nav pull-right">
            <li><a className="btn-header">About</a></li>
            <li><a className="btn-header">Contact</a></li>
            <li><a className="btn-header">Career</a></li>
          </ul>
        </div>
      </div>
    </div>
  }
});