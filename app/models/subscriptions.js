import Model, { hasMany, attr } from '@ember-data/model';

export default class SubscriptionsModel extends Model {
  @hasMany('subscription') subscription;
  @attr('string') name;
}