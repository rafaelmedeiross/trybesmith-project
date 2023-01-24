import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async postUser(user: User): Promise<User> {
    const postedUser = await this.model.postUser(user);
    return postedUser;
  }

//   public async getAllProducts(): Promise<Product[]> {
//     const allProducts = await this.model.getAllProducts();
//     return allProducts;
//   }
}

export default UserService;
