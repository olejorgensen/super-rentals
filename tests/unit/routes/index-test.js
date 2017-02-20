import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index');

test('should transition to rentals route', function(assert) {
  let route = this.subject({
    // A stub is simply a fake function that we provide to an object 
    // we are testing, that takes the place of one that is already there.
    // In this case we are stubbing the replaceWith function to assert 
    // that it is called with what we expect.
    replaceWith(routeName) {
      assert.equal(routeName, 'rentals', 'replace with route name rentals');
    }
  });
  route.beforeModel();
});