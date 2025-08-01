import { PrismaClient } from '@/app/generated/prisma'

const prisma = new PrismaClient()

function createMonthDate(month: number, year: number = 2025) {
  return new Date(`${year}-${String(month).padStart(2, '0')}-01`)
}

async function main() {
  await prisma.account.create({
    data: {
      code: '1',
      description: 'Receita Bruta',
      values: {
        create: [
          { period: createMonthDate(1), value: 120000 },
          { period: createMonthDate(2), value: 140000 },
          { period: createMonthDate(3), value: 100000 },
        ],
      },
      children: {
        create: [
          {
            code: '1.1',
            description: 'Receita de Vendas',
            values: {
              create: [
                { period: createMonthDate(1), value: 100000 },
                { period: createMonthDate(2), value: 120000 },
                { period: createMonthDate(3), value: 80000 },
              ],
            },
          },
          {
            code: '1.2',
            description: 'Receita de Serviços',
            values: {
              create: [
                { period: createMonthDate(1), value: 20000 },
                { period: createMonthDate(2), value: 20000 },
                { period: createMonthDate(3), value: 20000 },
              ],
            },
          },
        ],
      },
    },
  })
}

main().finally(() => prisma.$disconnect())
