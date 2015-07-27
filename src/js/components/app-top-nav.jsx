var React = require('react');
import {Router, Link } from 'react-router';
import UserStore from '../stores/user_store';

var mui = require('material-ui');
var {Colors, Typography, Spacing} = mui.Styles;
var FlatButton = mui.FlatButton;


class AppTopNav extends React.Component {
    constructor() {
        super();
        this.state = { userInfo: this.getUserInfo()};
    }
    componentDidMount(){
	UserStore.addChangeListener(this._onChange.bind(this));
    }
    
    componentWillUnmount() {
	UserStore.removeChangeListener(this._onChange.bind(this));
    }

    _onChange() {
	this.setState(this.getUserInfo())
    }
    
    getUserInfo() {
	return UserStore.getUserInfo();
    }

    getStyles() {
        return {
            paddingLeft: Spacing.desktopGutter,
  //          display: 'inline-block',
            textDecoration:'none'
        };
    }

    renderMenu() {
        let user = this.state.userInfo;
        let userMenu;
	
	let navStyle={
	    display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent:'flex-end',
	    listStyle:'none'
	};

        if (user.loggedIn) {
            let routes = [
                { to: 'settings', text:user.userName },
                { to: 'logout', text: 'Logout' }
            ];
            userMenu = (
                <ul style={navStyle}>
                    {routes.map((route, index) => (
	
                        <Link key={index} to={route.to} style={this.getStyles()}>{route.text}</Link>
                     ))}
                </ul>
            );
        } else {
            let routes = [
                { to: 'login', text:'Login', primary:true, secondary:false },
                { to: 'signup', text:'Signup', primary:false, secondary:true }
            ];

            userMenu = (
                 <ul style={navStyle}>
                    {routes.map((route, index) => (
                        <Link key={index} to={route.to} style={this.getStyles()}>
                        <FlatButton  primary={route.primary} secondary={route.secondary}>{route.text}</FlatButton>
                        </Link>
                     ))}
                </ul>
            );
        }
        return (
            {userMenu}
        );        
    }
    render() {
        return (
            <nav>
                {this.renderMenu()}
            </nav>
        );
    }
}

AppTopNav.contextTypes = {
    router: React.PropTypes.func
};

module.exports = AppTopNav;
