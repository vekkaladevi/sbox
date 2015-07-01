let React = require('react');
let bt = require('./../../../../../images/bottom-tear.svg');

let MobileTearSheet = React.createClass({

  propTypes: {
    height: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      height: 500
    };
  },

  render() {

    let styles = {
      root: {
        float: 'left',
        marginBottom: 24,
        marginRight: 24,
        width: 360
      },

      container: {
        border: 'solid 1px #d9d9d9',
        borderBottom: 'none',
        height: this.props.height,
        overflow: 'hidden'
      },

      bottomTear: {
        display: 'block',
        position: 'relative',
        marginTop: -10,
        width: 360
      }
    };

    return (
      <div >
        <div>
          {this.props.children}
        </div>
        <img style={styles.bottomTear} src={bt} />
      </div>
    );
  }

});

module.exports = MobileTearSheet;
