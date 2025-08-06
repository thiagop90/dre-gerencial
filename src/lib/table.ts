import type { Column } from '@tanstack/react-table'
import type { CSSProperties } from 'react'
import type { DREAccount } from '@/types/dre'

export const getPinningStyles = (column: Column<DREAccount>): CSSProperties => {
  const isPinned = column.getIsPinned()
  return {
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  }
}
