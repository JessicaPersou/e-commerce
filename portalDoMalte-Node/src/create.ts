import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const create = await prisma.client.create({
    data:{
    name :"Jessica Sousa",
    cpf : "111.222.333-00",
    phone : "11989898000",
    birthdate: "1993-03-19",
    email: "jessica.persou@gmail.com",
    password: "teste123"
    }
  })
  console.log(create);
}

main();

