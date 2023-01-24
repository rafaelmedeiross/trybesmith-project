import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public postUser = async (req: Request, res: Response) => {
    const user = req.body;
    const feedback = await this.userService.postUser(user);
    res.status(201).json({ token: feedback });
  };

//   public getAllProducts = async (re:Request, res: Response) => {
//     const allProducts = await this.userService.getAllProducts();
//     res.status(200).json(allProducts);
//   };
}

export default UserController;
