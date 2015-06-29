import React from 'react';

import UserAction from '../../actions/user_action';
import TenantStore from '../../stores/tenant_store';
import UserStore from '../../stores/user_store';

class Dashboard extends React.Component {
    constructor() {
	super();
	this.state = {
	    ui: UserStore.getUserInfo()
	};
    }
    render () {
	if (!this.state.ui.loggedIn) {
	    return (
	      <h1>Welecome User</h1>
	    );
	}
	
	return (
	  <div className="row">
	    <div className="col-sm-10 col-sm-offset-1">
	    </div>
	  </div>
	);
    }
}

export default Dashboard;
