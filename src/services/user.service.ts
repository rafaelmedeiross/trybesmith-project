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
    console.log(user);
    const token = tokenCreation({ username });
    await this.model.postUser(user);
    return token;
  }

//   public async getAllProducts(): Promise<Product[]> {
//     const allProducts = await this.model.getAllProducts();
//     return allProducts;
//   }
}

export default UserService;
