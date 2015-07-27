var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
var HomeFeature = require('./home-feature.jsx');
var FullWidthSection = require('../full-width-section.jsx');
var ThemeManager = new mui.Styles.ThemeManager().getCurrentTheme();

var homePageLogo = require('../../../../images/tc.png');
var signupLogo = require('../../../../images/t.png');
var loginLogo = require('../../../../images/c.png');
var logoutLogo = require('../../../../images/c.png');

var {StylePropable, StyleResizable} = mui.Mixins;
var {Colors, Spacing, Typography} = mui.Styles;

var HomePage = React.createClass({

    mixins: [StylePropable, StyleResizable],

    contextTypes: {
	router: React.PropTypes.func
    },

    render: function() {
	return (
	    <div>
              {this._getHomePageHero()}
              {this._getHomePurpose()}
              {this._getHomeFeatures()}
              {this._getHomeContribute()}
	    </div>
	);
    },
    
    _getHomePageHero: function() {

	var styles = {
	    root: {
		backgroundColor: Colors.cyan500,
		overflow: 'hidden'
	    },
	    svgLogo: {
		marginLeft: (window.innerWidth * 0.5) - 130 + 'px',
		width: '420px'
	    },
	    label: {
		color: ThemeManager.palette.primary1Color,
	    },
	    h1: {
		color: Colors.darkWhite,
		fontWeight: Typography.fontWeightLight,
	    }
	};
	

    return (
	  <div className="banner">
	    <div className="banner__content">
              <h1 style={styles.h1}>Chintamani</h1>
              <h2 style={styles.h1}>
		Rental management easy. Relax while we take care of your home!!
              </h2>
	      <div className="banner__row ">
	      <div className="banner__item">
	      <RaisedButton 
              label="Demo" 
              onTouchTap={this._onDemoClick}
	      linkButton={true} 
              labelStyle={styles.label}/>
	      </div>
	      <div className="banner__item">
	      <RaisedButton 
              label="GitHub" 
              linkButton={true} 
	      href="https://github.com/callemall/material-ui" 
              labelStyle={styles.label}/>
	    </div>
	      </div>
	    </div>
	  </div>
    );
  },

  _getHomePurpose: function() {
    var styles = {
      root: {
        backgroundColor: Colors.grey200
      },
      content: {
        maxWidth: '700px',
        padding: 0,
          margin: '0 auto',
        fontWeight: Typography.fontWeightLight,
        fontSize: '20px',
        lineHeight: '28px',
        paddingTop: '19px',
        marginBottom: '13px',
        letterSpacing: '0',
        color: Typography.textDarkBlack
      }
    };

    return (
      <FullWidthSection style={styles.root} useContent={true} contentStyle={styles.content} contentType="p" className="home-purpose">
        Material-UI came about from our love of&nbsp;
        <a href="http://facebook.github.io/react/">React</a> and&nbsp;
        <a href="https://www.google.com/design/spec/material-design/introduction.html">
          Google's Material Design
        </a>. We're currently using it on a project at&nbsp;
        <a href="https://www.call-em-all.com/">Call-Em-All</a> and plan on adding to it 
        and making it better in the coming months.
      </FullWidthSection>
    );
  },

  _getHomeFeatures: function() {
    var styles = {maxWidth: '906px'};
    return (
      <FullWidthSection useContent={true} contentStyle={styles}>
        <HomeFeature heading="Get Started" route="signup" img={signupLogo} firstChild={true}/>
        <HomeFeature heading="Customization" route="login" img={loginLogo} />
        <HomeFeature heading="Dashboard" route="dashboard" img={logoutLogo} lastChild={true}/>
      </FullWidthSection>
    );
  },

  _getHomeContribute: function() {
    var styles = {
      root: {
        backgroundColor: Colors.grey200,
        textAlign: 'center'
      },
      h3: {
        margin: '0',
        padding: '0',
        fontWeight: Typography.fontWeightLight,
        fontSize: '22'
      },
      button: {
        marginTop: 32
      }
    };

    return (
      <FullWidthSection useContent={true} style={styles.root}>
        <h3 style={styles.h3}>
          Want to help make this <span style={styles.nowrap}>project awesome?</span> <span style={styles.nowrap}>Check out our repo.</span>
        </h3>
        <RaisedButton label="GitHub" primary={true} linkButton={true} href="https://github.com/callemall/material-ui" style={styles.button}/>
      </FullWidthSection>
    );
  },

  _onDemoClick: function() {
    this.context.router.transitionTo('components');
  }
});

module.exports = HomePage;
