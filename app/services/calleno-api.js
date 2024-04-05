import Service from '@ember/service';

export default Service.extend({
  createSubscription(name) {
    fetch('http://localhost:3000/subscriptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
  },
  createUser(name, password, subscription) {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        password: password,
        subscription_id: subscription.id,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
  },
});
