import { Request, Response, NextFunction } from 'express';

const verifier = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const message1 = '"username" is required';
  const message2 = '"password" is required';
  if (!username) return res.status(400).json({ message: message1 });
  if (!password) return res.status(400).json({ message: message2 });
  next();
};
  
export default verifier;