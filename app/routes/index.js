import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    // In our index route, we simply add the actual replaceWith invocation.
    this.replaceWith('rentals');
  }
});
