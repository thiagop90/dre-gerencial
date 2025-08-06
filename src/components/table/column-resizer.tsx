'use client'

import type { Header } from '@tanstack/react-table'
import type { DREAccount } from '@/types/dre'

interface ColumnResizerProps {
  header: Header<DREAccount, unknown>
}

export function ColumnResizer({ header }: ColumnResizerProps) {
  if (!header.column.getCanResize()) return null

  return (
    <div
      data-column-resizer="true"
      {...{
        onDoubleClick: () => header.column.resetSize(),
        onMouseDown: header.getResizeHandler(),
        onTouchStart: header.getResizeHandler(),
        className:
          'absolute top-0 h-full w-4 cursor-col-resize user-select-none touch-none -right-2 z-10 flex justify-center before:absolute before:w-px before:inset-y-0 before:bg-border before:-translate-x-px',
      }}
    />
  )
}
