import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const accounts = await prisma.account.findMany({
    where: {
      parent_id: null,
    },
    include: {
      values: {
        select: {
          period: true,
          value: true,
        },
      },
      children: {
        include: {
          values: {
            select: {
              period: true,
              value: true,
            },
          },
        },
      },
    },
  })

  return NextResponse.json(accounts)
}
