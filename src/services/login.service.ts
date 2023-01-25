import connection from '../models/connection';
import LoginModel from '../models/login.model';
import Login from '../interfaces/login.interface';
import { tokenCreation } from '../auth/jwt';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async loginUser(login: Login): Promise< { token?: string, message?: string } > {
    const loggedUser = await this.model.loginUser(login);
    if (!loggedUser) return { message: 'Username or password invalid' };
    const { id, username } = loggedUser;
    const token = tokenCreation({ username, id });
    return { token };
  }
}

export default LoginService;