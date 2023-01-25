import { Request, Response, NextFunction } from 'express';

const nameVerifier = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  console.log(typeof name);
  const firstMessage = '"name" is required';
  const secondMessage = '"name" must be a string';
  const thirdMessage = '"name" length must be at least 3 characters long';
  if (!name) return res.status(400).json({ message: firstMessage });
  if (typeof name !== 'string') return res.status(422).json({ message: secondMessage });
  if (name.length < 3) return res.status(422).json({ message: thirdMessage });
  next();
};

const amountVerifier = async (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  const firstMessage = '"amount" is required';
  const secondMessage = '"amount" must be a string';
  const thirdMessage = '"amount" length must be at least 3 characters long';
  if (!amount) return res.status(400).json({ message: firstMessage });
  if (typeof amount !== 'string') return res.status(422).json({ message: secondMessage });
  if (amount.length < 3) return res.status(422).json({ message: thirdMessage });
  next();
};

export { nameVerifier, amountVerifier };