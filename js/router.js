App.Router.map(function() {
  this.resource('game', { path: '/'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
