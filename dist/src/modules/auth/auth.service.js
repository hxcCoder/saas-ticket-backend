"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const auth_repository_1 = require("./auth.repository");
const password_1 = require("../../shared/utils/password");
const jwt_1 = require("../../shared/utils/jwt");
exports.AuthService = {
    async register(data) {
        const exists = await auth_repository_1.AuthRepository.findByEmail(data.email);
        if (exists)
            throw new Error('User already exists');
        const hashed = await (0, password_1.hashPassword)(data.password);
        const user = await auth_repository_1.AuthRepository.createUser({
            email: data.email,
            password: hashed,
            name: data.name
        });
        return {
            id: user.id,
            email: user.email
        };
    },
    async login(data) {
        const user = await auth_repository_1.AuthRepository.findByEmail(data.email);
        if (!user)
            throw new Error('Invalid credentials');
        const valid = await (0, password_1.comparePassword)(data.password, user.password);
        if (!valid)
            throw new Error('Invalid credentials');
        const token = (0, jwt_1.signToken)({
            userId: user.id,
            role: user.role
        });
        return { token };
    }
};
