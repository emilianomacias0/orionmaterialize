Router.route('/', function () {
  this.render('Home');
});


//Router.route('/items');

Router.route('/items', function () {
  var req = this.request;
  var res = this.response;
  res.end('hello from the server\n');
}, {where: 'server'});