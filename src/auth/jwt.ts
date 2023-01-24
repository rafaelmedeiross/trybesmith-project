import jwt from 'jsonwebtoken';

const secret = 'mySecretSignature';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export const tokenCreation = (payload: object) => jwt
  .sign(payload, secret, <object> jwtConfig);

export const tokenValidation = (token: string) => {
  try {
    const decoded = jwt.verify(token, secret);
    return { decoded };
  } catch (error) {
    return { message: 'Expired or invalid token' };
  }
};
