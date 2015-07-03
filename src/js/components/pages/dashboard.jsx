import React from 'react';
let { Paper,Slider, Styles, Tab, Tabs } = require('material-ui');
let { Typography } = Styles;


let TenantList = require('./tenant_list') ;
var FullWidthSection = require('./../full-width-section');

import RouterContext from '../../lib/router.js';
import UserAction from '../../actions/user_action';
//import TenantStore from '../../stores/tenant_store';
//import UserStore from '../../stores/user_store';

import '../../../less/style.less';

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
            { label: "Tenants", component: <TenantList/>},
            { label: "Accounts", component: dummy},
            { label: "Contacts", component: dummy}
        ];
        let dbItems = (
            <Tabs onChange={this._onChange}>
                {items.map((item, index) => (
                    <Tab key={index} label={item.label}>
                    <Paper zDepth={1}>
                    
                    {item.component}
                    </Paper>
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
            paddingTop:200,
            background:'yellow'
        };
        
	return (
            <div>
                {this.dashboardItems()}
            </div>
        );
    }
    _onActive(tab){
        RouterContext.get().transitionTo(tab.props.route);
    }
}

export default Dashboard;
