App = React.createClass({
  componentWillMount() {
    analytics.load(Meteor.settings.public.analytics.key);
  },

  render() {
    return <div id="wrapper" className="fixed-header fixed-sidebar">
      <header id="header-navbar" className="navbar">
        {this.props.header}
      </header>
      <div className="container" id="page-wrapper">
        <div id="content-wrapper">
          {this.props.main}
          {this.props.footer}
        </div>
      </div>
    </div>
  }
});