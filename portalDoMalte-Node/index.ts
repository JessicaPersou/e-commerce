import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.user.create({
    data: {
      name: "Adriano Siqueira",
      cpf: "99988877700",
      birthdate: "1988-11-22",
      phone: "1188887766",
      email: "adriano.fds@outlook.com",
      password: "teste321",
    },
  });

  console.log(result);
}

main();