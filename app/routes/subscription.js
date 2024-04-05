import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SubscriptionRoute extends Route {
  @service store;
  async model(params) {
    let subscription = await this.store.findRecord('subscription', params.subscription_id, { include: 'users' });
    let users = await subscription.get('users');
    console.log("reached ")
    console.log(users)
    return { subscription, users };
  }
  
}