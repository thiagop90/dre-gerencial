'use client'

import { ColumnDef } from '@tanstack/react-table'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import 'dayjs/locale/en'
import type { DREAccount } from '@/types/dre'
import { ChevronRightIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function getDREColumns(
  locale: string,
  year: number,
): ColumnDef<DREAccount>[] {
  dayjs.locale(locale === 'pt-br' ? 'pt-br' : 'en')

  const months = Array.from({ length: 12 }, (_, i) =>
    dayjs().year(year).month(i).format('YYYY-MM'),
  )

  return [
    {
      header: 'Conta',
      accessorKey: 'description',
      cell: ({ row }) => (
        <div
          className={cn(
            'flex items-center gap-1 truncate',
            row.getCanExpand() && 'cursor-pointer',
          )}
          style={{ paddingLeft: `${row.depth * 20}px` }}
        >
          {row.getCanExpand() && (
            <ChevronRightIcon
              className={cn('opacity-60', row.getIsExpanded() && 'rotate-90')}
              size={16}
              aria-hidden="true"
            />
          )}
          {row.getValue('description')}
        </div>
      ),

      minSize: 270,
      maxSize: 350,
    },
    ...months.map<ColumnDef<DREAccount>>((month) => ({
      id: month,
      header: () => (
        <div className="capitalize">{dayjs(month).format('MMMM')}</div>
      ),
      accessorFn: (row) => row.values[month] ?? 0,
      cell: (info) => {
        const value = info.getValue() as number
        return value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })
      },
      minSize: 130,
      maxSize: 200,
    })),
  ]
}
