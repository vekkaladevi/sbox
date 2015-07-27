import React from 'react';
import '../../../less/style.less';
var sri=require('../../../../images/sri.jpg');

var Drag = React.createClass({

  /* LOGIC */

  dragStart: function (event) {

    var data = {
      pic: event.target.id  
    };

    event.dataTransfer.setData('text', JSON.stringify(data)); 

  },

  /* RENDER */

  render: function () {
    return (
      <div style={{
		  border: '2px solid red',
		  background:'blue',
		  padding:'10px',
		  width: '200px',
		  height: '300px'
      }} 
	>
	<img src={sri} id="drag1" width="100px" height="250px" draggable="true" onDragStart={this.dragStart} />
      </div>
    );
  },

});

var Drop = React.createClass({

  /* LOGIC */

  preventDefault: function (event) {
    event.preventDefault();
  },

  drop: function (event) {

    event.preventDefault();

    var data;

    try {
      data = JSON.parse(event.dataTransfer.getData('text'));
    } catch (e) {
      // If the text data isn't parsable we'll just ignore it.
      return;
    }
      console.log(data);
      event.target.appendChild(document.getElementById(data.pic));


  },

  /* RENDER */

  render: function () {
    return (
      <div style={{
	  
		  border: '2px solid red',
		  background:'pink',
		  padding:'10px',
		  width: '200px',
		  margin: '5px'
		  }} 

			      onDragOver={this.preventDefault} onDrop={this.drop}>Drop</div>
    );
  },

});

class Quiz extends React.Component {
    render() {
	return(
	    <div className="flex-container">
	      <Drag/>
	      <Drop/>
	    </div>
	);
    }
};
export default Quiz;
