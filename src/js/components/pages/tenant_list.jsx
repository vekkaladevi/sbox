import React from 'react';
import MobileTearSheet from './components/mobile_tearsheet';

let mui = require('material-ui');
let Colors = mui.Styles.Colors;
import UserAction from '../../actions/user_action';
import TenantStore from '../../stores/tenant_store';
import UserStore from '../../stores/user_store';

import Communication from '../svg-icons/communication';

let {CommunicationCall, CommunicationChatBubble} = Communication;


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
    render() {
        let tenants = this.state.db.tenants.map((tenant, index) => {
            return(
                <List subheader={tenant.location}>
                    <ListItem key={index}
                              leftIcon={<CommunicationCall color={Colors.indigo500} />}
                              rightIcon={<CommunicationChatBubble />}
                              secondaryText={
                                             <p>
                                             <span style={{color: Colors.darkBlack}}>
                                             Balance {tenant.balance} 
                                             </span><br/>
                                             Email  {tenant.email} 
                                             </p>
                                             }
                              secondaryTextLines={2}>
                        {tenant.name}
                    </ListItem>
                </List>
            )                    
        });
        return (
            <MobileTearSheet>
                {tenants}
            </MobileTearSheet>
        );
    }
};



export default TenantList;
