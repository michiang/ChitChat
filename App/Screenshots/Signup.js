import React from 'react';

var SignUp = React.createClass({

  getDefaultProps: function() {
    return {
      authType: 'signup'
    };
  },

  //Set up authentication
  onAuthButton: function() {
    var username = this.state.username;
    var password = this.state.password;
    AuthActions.submitSignup(username, password, function(error) {
      if (error) {
        alert(error.message);
      }
    });
  },
});

export default SignUp;