var User = require('./models').User;

var renderFollow = function(follow) {
  return {
    id: follow.follow_id,
    username: follow.username
  };
};

var renderFollows = function(user) {
  var output = {
    follows: [],
    username: user.username
  };
  var follows = user.getFollows();
  for(let i in follows) {
    let follow = follows[i];
    output.follows.push(renderFollow(follow));
  }

  return output;
};

exports.userFollows = function *() {
  var username = this.params.username;
  var user = User.findByUsername(username);
  if (!user) {
    this.throw("No user found", 404);
  }
  this.status = 200;
  this.body = renderFollows(user);
};