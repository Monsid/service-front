import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NewUserComponent extends Component {
  @service callenoApi;

  userName = '';
  password = '';

  @action
  createUser() {
    this.callenoApi.createUser(
      this.userName,
      this.password,
      this.args.subscription
    );
  }
}
