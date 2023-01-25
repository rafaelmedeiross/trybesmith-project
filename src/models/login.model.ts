import { Pool, RowDataPacket } from 'mysql2/promise';
import Login from '../interfaces/login.interface';
import User from '../interfaces/user.interface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async loginUser(login: Login): Promise<User> {
    const { username, password } = login;
    console.log(login);
    const [[result]] = await this.connection.execute<RowDataPacket[] & User[]>(
      'SELECT *  FROM Trybesmith.users AS u WHERE u.username = ? AND u.password = ?;', 
      [username, password],
    );
    return result;
  }
}