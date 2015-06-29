import React from 'react';
let { Slider, Styles, Tab, Tabs } = require('material-ui');
let { Typography } = Styles;
import RouterContext from '../../lib/router.js';
import UserAction from '../../actions/user_action';
//import TenantStore from '../../stores/tenant_store';
//import UserStore from '../../stores/user_store';

class Dashboard extends React.Component {
    constructor() {
	super();
        this._onActive = this._onActive.bind(this);
    }
    dashboardItems() {
        let dummy = (
            <div><h2>Dasboard Item</h2></div>
        );
        
        let items = [
            { label: "Tenants", component: dummy},
            { label: "Accounts", component: dummy},
            { label: "Contacts", component: dummy}
        ];
        let dbItems = (
            <Tabs onChange={this._onChange}>
                {items.map((item, index) => (
                    <Tab key={index} label={item.label}>
                    {item.component}
                    </Tab>
                 ))}
            </Tabs>
        );
        return (
            {dbItems}  
        );        
    }
    render() {
        let style = {
            boxSizing: 'border-box',
            padding:80,
            maxWidth: 896,
            marginLeft: 192,
            borderLeftStyle: 'solid',
            borderLeftWidth: 1,
            borderLeftColor: 'rgb(224, 224, 224)',
            minHeight: 800
        };
	return (
            <div style={style}>
                {this.dashboardItems()}
            </div>
	);
    }
    _onActive(tab){
        RouterContext.get().transitionTo(tab.props.route);
    }
}

export default Dashboard;
