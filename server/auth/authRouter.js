// var authController = require('./authController.js');

module.exports = function(app, passport) {
  //authenticate with facebook
  app.get('/facebook', passport.authenticate('facebook', { scope : 'email' }));
  app.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect : '/#/purgatory', 
    failureRedirect : '/#/login'
  }));

  //authenticate with local strategy
  app.post('/login', passport.authenticate('local-login'), function(req, res){
        res.json(req.user);
      });
  app.post('/signup', passport.authenticate('local-signup'), function(req,res){
        res.json(req.user);
      });

  //connect jawbone
  app.get('/jawbone', passport.authorize('jawbone', { scope : ['basic_read','extended_read','friends_read','move_read','sleep_read','meal_read'] }));
  app.get('/jawbone/callback', passport.authorize('jawbone'), function(req, res){
    res.redirect('/#/purgatory');
  });

  app.post('/jawbone/pubsub', function(req,res){
    var info = req.body;
    console.log('body', info);
    console.log('url', req.url);
  })


};

// function hasGoal (req, res) {
//   var user = req.userData;
//   if (user.goals.length) 
//     goalHandler(req, res);
//   makeGoalHandler(req, res);
// }