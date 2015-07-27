import React from 'react';
import MobileTearSheet from './components/mobile_tearsheet';

let mui = require('material-ui');
let { Avatar, ClearFix} = mui;
let Colors = mui.Styles.Colors;
var FullWidthSection = require('./../full-width-section');
import UserAction from '../../actions/user_action';
import TenantStore from '../../stores/tenant_store';
import UserStore from '../../stores/user_store';

import Communication from '../svg-icons/communication';

let {CommunicationCall, CommunicationEmail, CommunicationChatBubble} = Communication;

let images_dir = './../../../../images';

let bt = require("./../../../../images/bottom-tear.svg");

let {
  List,
  ListDivider,
  ListItem,
} = mui;


class TenantList extends React.Component {
    constructor() {
	super();
	this.state = {
	    db: this.getTenantList(),
	};
	this._changeListener = this._onChange.bind(this);
    }
    componentDidMount(){
	TenantStore.addChangeListener(this._changeListener);
    }
    
    componentWillUnmount() {
	TenantStore.removeChangeListener(this._changeListener);
    }
    
    getTenantList() {
	let db = {
	    tenants: TenantStore.getTenants()
	};
	return db;
    }
    _onChange() {
	this.setState({
	    db: this.getTenantList()
	});	
    }
    renderTenantAvatar(tenant) {
        let imageSrc = `${images_dir}/${tenant.name}.jpg`;
        
        console.log(imageSrc);
        return(
            <ListItem
              leftAvatar={<Avatar src={imageSrc} />}
              rightIcon={<CommunicationChatBubble />}>
                {tenant.name}
            </ListItem>
        );
    }

    renderTenantBalance(tenant) {
        return(
            <ListItem  leftIcon={<CommunicationCall color={Colors.indigo500} />}
                       secondaryText="Balance">
                {tenant.balance}
            </ListItem>
        );
    }
    renderTenantPhone(tenant) {
        return(
            <ListItem  leftIcon={<CommunicationCall color={Colors.indigo500} />}
                       rightIcon={<CommunicationChatBubble />}
                       secondaryText="Mobile">
                {tenant.phone}
            </ListItem>
        );
    }


    renderTenantEmail(tenant) {
        return(
            <ListItem  leftIcon={<CommunicationEmail color={Colors.indigo500} />}
                       secondaryText="Personal">
                {tenant.email}
            </ListItem>
        );
    }
    render() {
        let styles = {
            boxStyle: {
                border: 'solid 1px #d9d9d9',
                borderBottom: 'none',
                overflow: 'hidden',
		height:'auto'
            },
              bottomTear: {
                  display: 'block',
                  position: 'relative',
                  marginTop: -10,
              }
        };

        let tenants = 
                this.state.db.tenants.map((tenant, index) => (
                    <div  className="flex-item" style={styles.boxStyle} key={index}>
                        <List subheader={tenant.location}>
                            {this.renderTenantAvatar(tenant)}
                            <ListDivider inset={true} />
                            {this.renderTenantBalance(tenant)}
                            <ListDivider inset={true} />
                            {this.renderTenantPhone(tenant)}
                            {this.renderTenantEmail(tenant)}
                        </List>
                        <img style={styles.bottomTear} src={bt} />
                        
                    </div>
                ));
        
        let style = {
                     position: 'relative',
                     background: 'orange'
                     };
            
            return (
                <div className="flex-container">
                    {tenants}                    
                </div>            
        );
    }
};



export default TenantList;
