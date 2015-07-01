import React from 'react';
import MobileTearSheet from './components/mobile_tearsheet';

let mui = require('material-ui');
let ClearFix = mui.ClearFix;
let Colors = mui.Styles.Colors;
var FullWidthSection = require('./../full-width-section');
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
        let tenants = 
                this.state.db.tenants.map((tenant, index) => (
                    <div className="flex-item" style={{  background: 'pink'}} key={index}>
                        <List subheader={tenant.location}>
                            <ListItem  leftIcon={<CommunicationCall color={Colors.indigo500} />}
                                       rightIcon={<CommunicationChatBubble />}
                                       secondaryText="Mobile">
                                (650) 555 - 1234
                            </ListItem>
                            <ListItem insetChildren={true}
                                      rightIcon={<CommunicationChatBubble />}
                                      secondaryText="Work">
                                (323) 555-6789
                            </ListItem>
                            <ListItem leftIcon={<CommunicationCall color={Colors.indigo500} />}
                                      rightIcon={<CommunicationChatBubble />}
                                      secondaryText={
                                                     <p>
                                                     <span style={{color: Colors.darkBlack}}>
                                                     Balance {tenant.balance} 
                                                     </span><br/>
                                                     Email  {tenant.email} 
                                                     </p>
                                                     }
                                      secondaryTextLines={1}>
                                {tenant.name}
                            </ListItem>
                        </List>
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
