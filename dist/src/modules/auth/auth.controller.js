"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
exports.AuthController = {
    async register(req, res) {
        const user = await auth_service_1.AuthService.register(req.body);
        res.status(201).json(user);
    },
    async login(req, res) {
        const token = await auth_service_1.AuthService.login(req.body);
        res.json(token);
    }
};
