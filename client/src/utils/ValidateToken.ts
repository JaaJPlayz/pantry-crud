import jwt from 'jsonwebtoken';

const JWT_SECRET: string = import.meta.env.JWT_SECRET || "dev-env-secret";

const validateToken = (token: string) => {
    try {
        jwt.verify(token, JWT_SECRET);
        return true;
    } catch (error: unknown) {
        throw new Error(error as string);
    }
};

export default validateToken;