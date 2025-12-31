"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const users_service_1 = require("./users.service");
exports.UsersController = {
    async getProfile(req, res) {
        const userId = req.user.userId;
        const user = await users_service_1.UsersService.getProfile(userId);
        res.json(user);
    },
    async getAll(req, res) {
        const role = req.user.role;
        const users = await users_service_1.UsersService.getAllUsers(role);
        res.json(users);
    },
    async updateProfile(req, res) {
        const userId = req.user.userId;
        const updated = await users_service_1.UsersService.updateProfile(userId, req.body);
        res.json(updated);
    }
};
