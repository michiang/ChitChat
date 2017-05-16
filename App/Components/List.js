import React from 'react';
import {
  ListView
} from 'react-native';

var SimpleList = React.createClass({

},

render: function() {
    var Component = this.props.reloadList ? RefreshableListView : ListView;
    return (
    );
  }
});

export default SimpleList;
