var User = require("./models").User;

var renderAccount = function (user) {
  var out = {
    id: user.id,
    token: user.token,
    username: user.username
  };
  return out;
};

exports.loginUser = function *() {
  var params = this.request.body || {};
  var username = (params.username || "").trim();
  var password = (params.password || "").trim();

  if(!username) this.throw("No username provided", 422);
  if(!password) this.throw("No password provided", 422);
  
  var user = User.findByUsername(username);
  if (user && user.authenticate(password)) {
    this.status = 200;
    this.body = renderAccount(user);
  }
  else {
    this.status = 422;
    this.body = {error: "Username and password not found"}
  }
};
