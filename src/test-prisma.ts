import prisma from "./shared/database/prisma";

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "test@test.com",
      password: "123456",
    },
  });

  console.log("User creado:", user);

  const ticket = await prisma.ticket.create({
    data: {
      title: "Primer ticket",
      status: "OPEN",
      userId: user.id,
    },
  });

  console.log("Ticket creado:", ticket);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
