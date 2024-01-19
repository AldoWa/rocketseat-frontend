/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { PrismaClient, type Prisma } from '@prisma/client'
import { fakerPT_BR as faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const baseProducts: Prisma.ProductsCreateInput[] = [
  { name: 'Caneca de cerâmica rústica', description: faker.lorem.paragraph(), imageUrl: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg', category: 'mugs' },
  { name: 'Camiseta not today.', description: faker.lorem.paragraph(), imageUrl: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg', category: 't-shirts' },
  { name: 'Caneca Black Ring', description: faker.lorem.paragraph(), imageUrl: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg', category: 'mugs' },
  { name: 'Camiseta Broken Saints', description: faker.lorem.paragraph(), imageUrl: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg', category: 't-shirts' },
  { name: 'Camiseta Outcast', description: faker.lorem.paragraph(), imageUrl: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg', category: 't-shirts' },
  { name: 'Caneca The Grounds', description: faker.lorem.paragraph(), imageUrl: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg', category: 'mugs' },
  { name: 'Camiseta evening', description: faker.lorem.paragraph(), imageUrl: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg', category: 't-shirts' },
  { name: 'Caneca preto fosco', description: faker.lorem.paragraph(), imageUrl: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg', category: 'mugs' },
  { name: 'Caneca Never settle', description: faker.lorem.paragraph(), imageUrl: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg', category: 'mugs' },
  { name: 'Camiseta DREAMER', description: faker.lorem.paragraph(), imageUrl: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg', category: 't-shirts' },
  { name: 'Caneca Decaf! P&Co', description: faker.lorem.paragraph(), imageUrl: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg', category: 'mugs' },
  { name: 'Camiseta Ramones', description: faker.lorem.paragraph(), imageUrl: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg', category: 't-shirts' },
]

async function main(){
  for (const bP of baseProducts) {
    await prisma.products.create({
      data: bP,
    })
  }
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