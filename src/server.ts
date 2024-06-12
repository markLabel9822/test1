import UserRoute from 'api/routes/user.route';
import App from 'app';

const app = new App([
  new UserRoute(),
]);

app.listen();
