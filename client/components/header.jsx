Header = React.createClass({
  headerClick(e) {
    headerLink = e.target.id;
    analytics.track('Header Click', {
      link: headerLink
    });
  },

  render() {
    return (
      <div className="header">
        <div className="container">
          <a id="logo" href="#" className="navbar-brand">
            <img src="//d2gwl2nm6rhtp1.cloudfront.net/img/steve.jpg" />
            <span>Steven Hornung</span>
          </a>
          <div id="header-nav" className="nav-no-collapse">
            <ul className="nav navbar-nav">
              <li><a className="btn-header" id="about" onClick={this.headerClick}>About</a></li>
              <li><a className="btn-header" id="contact" onClick={this.headerClick}>Contact</a></li>
              <li><a className="btn-header" id="career" onClick={this.headerClick}>Career</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});