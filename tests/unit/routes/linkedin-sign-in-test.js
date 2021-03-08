import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | linkedin-sign-in', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:linkedin-sign-in');
    assert.ok(route);
  });
});
