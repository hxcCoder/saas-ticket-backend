import { prisma } from '../../shared/database/prisma';

export const AuthRepository = {
    findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
    },

    createUser(data: { email: string; password: string; name: string }) {
    return prisma.user.create({ data });
    }
};
