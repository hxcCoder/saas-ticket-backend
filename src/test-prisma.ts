import { prisma } from './shared/database/prisma';

async function main() {
    const users = await prisma.user.findMany();
    console.log("Users:", users);
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});