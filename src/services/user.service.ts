import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import { tokenCreation } from '../auth/jwt';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async postUser(user: User): Promise<string> {
    const { username } = user;
    const token = tokenCreation({ username });
    await this.model.postUser(user);
    return token;
  }
}

export default UserService;
