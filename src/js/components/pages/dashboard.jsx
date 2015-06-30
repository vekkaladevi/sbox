import React from 'react';
let { Paper,Slider, Styles, Tab, Tabs } = require('material-ui');
let { Typography } = Styles;


let TenantList = require('./tenant_list') ;

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
        /*
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
        */
	return (
            <div className="dashboard grid">
                <div className="col-1-3"/>
                <div className="col-2-3">
                    <Paper zDepth={1}>
                        {this.dashboardItems()}
                    </Paper>
                </div>
            </div>
	);
    }
    _onActive(tab){
        RouterContext.get().transitionTo(tab.props.route);
    }
}

export default Dashboard;
