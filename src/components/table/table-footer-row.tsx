'use client'

import { TableFooter, TableRow, TableCell } from '@/components/ui/table'
import type { Table } from '@tanstack/react-table'
import type { DREAccount } from '@/types/dre'

interface TableFooterRowProps {
  table: Table<DREAccount>
}

export function TableFooterRow({ table }: TableFooterRowProps) {
  const columns = table.getAllColumns()

  return (
    <TableFooter>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            className="h-12 font-medium"
            // style={{
            //   width: column.getSize(),
            //   minWidth: column.columnDef.minSize,
            //   maxWidth: column.columnDef.maxSize,
            // }}
          >
            {/* Conteúdo do footer será adicionado aqui futuramente */}
          </TableCell>
        ))}
      </TableRow>
    </TableFooter>
  )
}
