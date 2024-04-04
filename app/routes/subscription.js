import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SubscriptionRoute extends Route {
    @service store;
        
    async model(params) {
        return this.store.findRecord('subscription', params.subscription_id);
    }
}