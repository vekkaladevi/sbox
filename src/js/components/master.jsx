var React = require('react');
var Router = require('react-router');
import { Link } from 'react-router';
var RouteHandler = Router.RouteHandler;
var AppLeftNav = require('./app-left-nav');
var AppTopNav = require('./app-top-nav');
var MediaQuery = require('react-responsive');
var mui = require('material-ui');

import '../../less/style.less';


var {Colors, Typography} = mui.Styles;
var ThemeManager = new mui.Styles.ThemeManager();

var { AppBar,  IconButton} = mui;

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
          textAlign: 'center'
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
      <div>
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
	
	<footer>
	  <div>
            <p>Contact us, faq</p>
            <p>Copyright</p>
	  </div>
        </footer>


      </div>
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
