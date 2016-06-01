import React from 'react';

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  render: function() {
    return (<div><h1>Testing</h1><div className="voting">
          {this.getPair().map(entry =>
            <button key={entry}>
              <h1>{entry}</h1>
            </button>
          )}
        </div></div>);
  }
});
