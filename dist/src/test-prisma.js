"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("./shared/database/prisma");
async function main() {
    const users = await prisma_1.prisma.user.findMany();
    console.log("Users:", users);
}
main()
    .catch((e) => console.error(e))
    .finally(async () => {
    await prisma_1.prisma.$disconnect();
});
