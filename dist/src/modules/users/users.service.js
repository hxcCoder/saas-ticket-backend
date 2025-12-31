"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const users_repository_1 = require("./users.repository");
exports.UsersService = {
    async getProfile(userId) {
        const user = await users_repository_1.UsersRepository.findById(userId);
        if (!user)
            throw new Error('User not found');
        return user;
    },
    async getAllUsers(requestingRole) {
        if (requestingRole !== 'ADMIN') {
            throw new Error('Forbidden');
        }
        return users_repository_1.UsersRepository.findAll();
    },
    async updateProfile(userId, data) {
        return users_repository_1.UsersRepository.update(userId, data);
    }
};
