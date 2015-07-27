import React from 'react';

let {Paper, RaisedButton} = require('material-ui');

import '../../../less/style.less';

class Quiz extends React.Component  {
    render() {
	let categories = [ "Mythology", "Telugu", "Sanskrit", "India"];
	let categoriesList = categories.map((category, index) => (
	    <div key={index} style={{ margin: '1em' }} >
	      <RaisedButton  label={category} primary={true}/>
	    </div>
	));
	
	return (
	    <div className="flex-container-center" >
	      <Paper>
		<div className="flex-container-column" >
		  <div className="flex-container-center">
		    <h2>Select Category </h2>
		  </div>
		  <div className="flex-container-center">
		    {categoriesList}
		  </div>
		</div>
	      </Paper>
	    </div>
	);	
    }
};
export default Quiz;
