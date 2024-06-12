// prisma/seed.ts

import { PrismaClient } from './client';

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      uuid : 'SDsdsa',
      username: 'Alice',
      password: '123SDs1',
      status: 'ACTIVE',
      createdBy: 'uuid1',
      updatedBy: 'uuid2',
    },
  })


}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
