import { IUser } from "../interfaces/User";

const validateUserInfo = (user: IUser) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = emailRegex.test(user.email) && passwordRegex.test(user.password);
    return isValid;
}

export default validateUserInfo