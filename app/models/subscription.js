import Model, {belongsTo, attr } from '@ember-data/model';

export default class SubscriptionModel extends Model {
  @attr('string') name;
  @belongsTo('subscriptions') subscriptions;
}