import { AuthRepository } from './auth.repository';
import { hashPassword, comparePassword } from '../../shared/utils/password';
import { signToken } from '../../shared/utils/jwt';
import { RegisterDTO, LoginDTO } from './auth.types';

export const AuthService = {
    async register(data: RegisterDTO) {
    const exists = await AuthRepository.findByEmail(data.email);
    if (exists) throw new Error('User already exists');

    const hashed = await hashPassword(data.password);

    const user = await AuthRepository.createUser({
        email: data.email,
        password: hashed,
        name: data.name
    });

    return {
        id: user.id,
        email: user.email
    };
},

    async login(data: LoginDTO) {
    const user = await AuthRepository.findByEmail(data.email);
    if (!user) throw new Error('Invalid credentials');

    const valid = await comparePassword(data.password, user.password);
    if (!valid) throw new Error('Invalid credentials');

    const token = signToken({
        userId: user.id,
        role: user.role
    });

    return { token };
}
};
