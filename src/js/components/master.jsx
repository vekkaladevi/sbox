var React = require('react');
var Router = require('react-router');
import { Link } from 'react-router';
var RouteHandler = Router.RouteHandler;
var AppLeftNav = require('./app-left-nav');
var AppTopNav = require('./app-top-nav');
var FullWidthSection = require('./full-width-section');
var MediaQuery = require('react-responsive');
var mui = require('material-ui');

var {Colors, Typography} = mui.Styles;
var ThemeManager = new mui.Styles.ThemeManager();

var { AppBar, AppCanvas, IconButton} = mui;

import RouterContext from '../lib/router.js';

class Master extends React.Component {

  constructor() {
    super();
    this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
  }
    
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  getStyles() {
    var darkWhite = Colors.darkWhite;
    return {
      footer: {
          backgroundColor: Colors.grey900,
          textAlign: 'center',
          left:'0px',
          bottom:'0px',
          height:'30px',
          width:'100%'
      },
      a: {
        color: darkWhite
      },
      p: {
        margin: '0 auto',
        padding: '0',
        color: Colors.lightWhite,
        maxWidth: '335px'
      },
      iconButton: {
        color: darkWhite
      }
    };
  }

  render() {
      var styles = this.getStyles();
      var title =
      RouterContext.get().isActive('dashboard') ? 'Dashboard' : 'SreeMaata';

    return (
      <AppCanvas>
        <AppBar
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
          title={title}
          zDepth={0}>
            <MediaQuery minWidth={768}>
                <AppTopNav/>
            </MediaQuery>
        </AppBar>

        <AppLeftNav ref="leftNav" />
        <RouteHandler />

        <FullWidthSection style={styles.footer}>
            <p>Contact us, faq</p>
            <p>Copyright</p>
        </FullWidthSection>

      </AppCanvas>
    );
  }

  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }
}

Master.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = Master;
