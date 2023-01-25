import { Request, Response, NextFunction } from 'express';

const usernameVerifier = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  const firstMessage = '"username" is required';
  const secondMessage = '"username" must be a string';
  const thirdMessage = '"username" length must be at least 3 characters long';
  if (!username) return res.status(400).json({ message: firstMessage });
  if (typeof username !== 'string') return res.status(422).json({ message: secondMessage });
  if (username.length < 3) return res.status(422).json({ message: thirdMessage });
  next();
};

const vocationVerifier = async (req: Request, res: Response, next: NextFunction) => {
  const { vocation } = req.body;
  const firstMessage = '"vocation" is required';
  const secondMessage = '"vocation" must be a string';
  const thirdMessage = '"vocation" length must be at least 3 characters long';
  if (!vocation) return res.status(400).json({ message: firstMessage });
  if (typeof vocation !== 'string') return res.status(422).json({ message: secondMessage });
  if (vocation.length < 3) return res.status(422).json({ message: thirdMessage });
  next();
};

const levelVerifier = async (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  const firstMessage = '"level" is required';
  const secondMessage = '"level" must be a number';
  const thirdMessage = '"level" must be greater than or equal to 1';
  if (level < 1) return res.status(422).json({ message: thirdMessage });
  if (!level) return res.status(400).json({ message: firstMessage });
  if (typeof level !== 'number') return res.status(422).json({ message: secondMessage });
  console.log(`level: ${level}`);
  next();
};

const passwordVerifier = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  const firstMessage = '"password" is required';
  const secondMessage = '"password" must be a string';
  const thirdMessage = '"password" length must be at least 8 characters long';
  if (!password) return res.status(400).json({ message: firstMessage });
  if (typeof password !== 'string') return res.status(422).json({ message: secondMessage });
  if (password.length < 8) return res.status(422).json({ message: thirdMessage });
  next();
};
export { usernameVerifier, vocationVerifier, levelVerifier, passwordVerifier };