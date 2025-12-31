"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const prisma_1 = require("../../shared/database/prisma");
exports.AuthRepository = {
    findByEmail(email) {
        return prisma_1.prisma.user.findUnique({ where: { email } });
    },
    createUser(data) {
        return prisma_1.prisma.user.create({ data });
    }
};
