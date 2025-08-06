'use client'

import { flexRender, type Cell, type Row } from '@tanstack/react-table'
import { TableCell } from '@/components/ui/table'
import { getPinningStyles } from '@/lib/table'
import { cn } from '@/lib/utils'
import type { DREAccount } from '@/types/dre'

interface TableBodyCellProps {
  cell: Cell<DREAccount, unknown>
  row: Row<DREAccount>
}

export function TableBodyCell({ cell, row }: TableBodyCellProps) {
  const { column } = cell
  const isPinned = column.getIsPinned()
  // const isLastLeftPinned = isPinned === 'left' && column.getIsLastColumn('left')
  // const isFirstRightPinned =
  //   isPinned === 'right' && column.getIsFirstColumn('right')
  const isDescription = cell.column.id === 'description'

  const handleClick =
    isDescription && row.getCanExpand()
      ? row.getToggleExpandedHandler()
      : undefined

  return (
    <TableCell
      key={cell.id}
      onClick={handleClick}
      className={cn(
        '[&[data-pinned]]:border-border data-pinned:bg-background/90 truncate data-pinned:backdrop-blur-xs [&[data-pinned=left]]:border-r [&[data-pinned=right]]:border-l',
        isDescription && row.getCanExpand() && 'cursor-pointer',
      )}
      style={{ ...getPinningStyles(column) }}
      data-pinned={isPinned || undefined}
      // data-last-col={
      //   isLastLeftPinned ? 'left' : isFirstRightPinned ? 'right' : undefined
      // }
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </TableCell>
  )
}
