import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="entry">
      <h1>{this.props.entry}</h1>
      <div className="voteCount">
        {this.props.voteCount}
      </div>
    </div>;
  }
});
