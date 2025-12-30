import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

export interface JwtPayload {
    userId: string;
    role: string;
}

export const signToken = (payload: JwtPayload): string =>
    jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

export const verifyToken = (token: string): JwtPayload =>
    jwt.verify(token, JWT_SECRET) as JwtPayload;
