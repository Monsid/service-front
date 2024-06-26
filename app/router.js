import EmberRouter from '@ember/routing/router';
import config from 'service-front/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('subscriptions');
  this.route('subscription', { path: '/subscription/:subscription_id' });
});
