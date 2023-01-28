import { Request, Response, NextFunction } from 'express';

const productIdVerifier = async (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  const firstMessage = '"productsIds" is required';
  const secondMessage = '"productsIds" must be an array';
  const thirdMessage = '"productsIds" must include only numbers';
  if (!productsIds) return res.status(400).json({ message: firstMessage });
  if (!Array.isArray(productsIds)) return res.status(422).json({ message: secondMessage });
  // const arrayOfNumbers = productsIds.every((element) => typeof element !== 'number');
  if (productsIds.length < 1) {
    return res.status(422).json({ message: thirdMessage });
  }
  next();
};

export default productIdVerifier;