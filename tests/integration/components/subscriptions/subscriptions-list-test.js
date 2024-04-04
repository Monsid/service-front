import { module, test } from 'qunit';
import { setupRenderingTest } from 'service-front/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | subscriptions/subscriptions-list',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<Subscriptions::SubscriptionsList />`);

      assert.dom(this.element).hasText('');

      // Template block usage:
      await render(hbs`
      <Subscriptions::SubscriptionsList>
        template block text
      </Subscriptions::SubscriptionsList>
    `);

      assert.dom(this.element).hasText('template block text');
    });
  }
);
