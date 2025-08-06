'use client'

import { flexRender, type Header } from '@tanstack/react-table'
import { TableHead } from '@/components/ui/table'
import { PinControls } from './pin-controls'
import { ColumnResizer } from './column-resizer'
import { getPinningStyles } from '@/lib/table'
import type { DREAccount } from '@/types/dre'

interface TableHeaderCellProps {
  header: Header<DREAccount, unknown>
}

export function TableHeaderCell({ header }: TableHeaderCellProps) {
  const { column } = header
  const isPinned = column.getIsPinned()
  const isLastLeftPinned = isPinned === 'left' && column.getIsLastColumn('left')
  const isFirstRightPinned =
    isPinned === 'right' && column.getIsFirstColumn('right')

  const headerTitle = header.column.columnDef.header as string

  return (
    <TableHead
      key={header.id}
      className="[&[data-pinned][data-last-col]]:border-border data-pinned:bg-muted/90 relative h-10 truncate data-pinned:backdrop-blur-xs [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=left]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=left][data-last-col=left]]:border-r [&[data-pinned=right]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=right][data-last-col=right]]:border-l"
      colSpan={header.colSpan}
      style={{ ...getPinningStyles(column) }}
      data-pinned={isPinned || undefined}
      data-last-col={
        isLastLeftPinned ? 'left' : isFirstRightPinned ? 'right' : undefined
      }
    >
      <div className="flex items-center justify-between gap-2">
        <span className="truncate">
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </span>

        {!header.isPlaceholder && (
          <PinControls column={column} headerTitle={headerTitle} />
        )}

        <ColumnResizer header={header} />
      </div>
    </TableHead>
  )
}
