import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NewSubscriptionComponent extends Component {
  @service callenoApi;

  subscriptionName = '';

  @action
  createSubscription() {
    this.callenoApi.createSubscription(this.subscriptionName);
  }
}
