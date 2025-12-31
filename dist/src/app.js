"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./modules/auth/auth.routes"));
const users_routes_1 = __importDefault(require("./modules/users/users.routes"));
const tickets_routes_1 = __importDefault(require("./modules/tickets/tickets.routes"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use('/auth', auth_routes_1.default);
exports.app.use('/users', users_routes_1.default);
exports.app.use('/tickets', tickets_routes_1.default);
