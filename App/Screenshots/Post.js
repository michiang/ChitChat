import React from 'react';
import {
  View,
  Stylesheet
} from 'react-native';

const CreatePost = React.createClass({
  mixins: [KeyboardListener],

  getInitialState: function() {
    return {
      content: ""
    };
  },

  render: function() {
    return {
      <View style={styles.flex}>
    }
  }
}

export default CreatePost;