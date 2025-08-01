'use client'

import {
  Column,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {
  ArrowLeftToLineIcon,
  ArrowRightToLineIcon,
  EllipsisIcon,
  PinOffIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { CSSProperties } from 'react'
import { getDREColumns } from './columns'
import { useLocale } from 'next-intl'
import type { DREAccount } from '@/types/dre'
import { cn } from '@/lib/utils'

const getPinningStyles = (column: Column<DREAccount>): CSSProperties => {
  const isPinned = column.getIsPinned()
  return {
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  }
}

export function DataTable({ data }: { data: DREAccount[] }) {
  const locale = useLocale()
  const year = 2025

  const columns = getDREColumns(locale, year)

  const table = useReactTable({
    initialState: {
      columnPinning: {
        left: ['description'],
        right: ['total'],
      },
    },
    data,
    columns,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSubRows: (row) => row.children,
  })

  return (
    <div className="overflow-hidden rounded-lg border">
      <Table
        className="[&_td]:border-border [&_th]:border-border table-fixed border-separate border-spacing-0 [&_th]:border-b [&_tr]:border-none [&_tr:not(:last-child)_td]:border-b"
        style={{
          width: table.getTotalSize(),
          scrollbarWidth: 'none',
        }}
      >
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-muted/50">
              {headerGroup.headers.map((header) => {
                const { column } = header
                const isPinned = column.getIsPinned()
                const isLastLeftPinned =
                  isPinned === 'left' && column.getIsLastColumn('left')
                const isFirstRightPinned =
                  isPinned === 'right' && column.getIsFirstColumn('right')

                return (
                  <TableHead
                    key={header.id}
                    className="[&[data-pinned][data-last-col]]:border-border data-pinned:bg-muted/90 relative h-10 truncate data-pinned:backdrop-blur-xs [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=left]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=left][data-last-col=left]]:border-r [&[data-pinned=right]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=right][data-last-col=right]]:border-l"
                    colSpan={header.colSpan}
                    style={{ ...getPinningStyles(column) }}
                    data-pinned={isPinned || undefined}
                    data-last-col={
                      isLastLeftPinned
                        ? 'left'
                        : isFirstRightPinned
                          ? 'right'
                          : undefined
                    }
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </span>
                      {/* Pin/Unpin column controls with enhanced accessibility */}
                      {!header.isPlaceholder &&
                        header.column.getCanPin() &&
                        (header.column.getIsPinned() ? (
                          <Button
                            size="icon"
                            variant="ghost"
                            className="-mr-1 size-7 shadow-none"
                            onClick={() => header.column.pin(false)}
                            aria-label={`Unpin ${header.column.columnDef.header as string} column`}
                            title={`Unpin ${header.column.columnDef.header as string} column`}
                          >
                            <PinOffIcon
                              className="opacity-60"
                              size={16}
                              aria-hidden="true"
                            />
                          </Button>
                        ) : (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="-mr-1 size-7 shadow-none"
                                aria-label={`Pin options for ${header.column.columnDef.header as string} column`}
                                title={`Pin options for ${header.column.columnDef.header as string} column`}
                              >
                                <EllipsisIcon
                                  className="opacity-60"
                                  size={16}
                                  aria-hidden="true"
                                />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => header.column.pin('left')}
                              >
                                <ArrowLeftToLineIcon
                                  size={16}
                                  className="opacity-60"
                                  aria-hidden="true"
                                />
                                Fixar à esquerda
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => header.column.pin('right')}
                              >
                                <ArrowRightToLineIcon
                                  size={16}
                                  className="opacity-60"
                                  aria-hidden="true"
                                />
                                Fixar à direita
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ))}
                      {header.column.getCanResize() && (
                        <div
                          {...{
                            onDoubleClick: () => header.column.resetSize(),
                            onMouseDown: header.getResizeHandler(),
                            onTouchStart: header.getResizeHandler(),
                            className:
                              'absolute top-0 h-full w-4 cursor-col-resize user-select-none touch-none -right-2 z-10 flex justify-center before:absolute before:w-px before:inset-y-0 before:bg-border before:-translate-x-px',
                          }}
                        />
                      )}
                    </div>
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => {
                  const { column } = cell
                  const isPinned = column.getIsPinned()
                  const isLastLeftPinned =
                    isPinned === 'left' && column.getIsLastColumn('left')
                  const isFirstRightPinned =
                    isPinned === 'right' && column.getIsFirstColumn('right')

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
                        '[&[data-pinned][data-last-col]]:border-border data-pinned:bg-background/90 truncate data-pinned:backdrop-blur-xs [&[data-pinned=left][data-last-col=left]]:border-r [&[data-pinned=right][data-last-col=right]]:border-l',
                        isDescription && row.getCanExpand() && 'cursor-pointer',
                      )}
                      style={{ ...getPinningStyles(column) }}
                      data-pinned={isPinned || undefined}
                      data-last-col={
                        isLastLeftPinned
                          ? 'left'
                          : isFirstRightPinned
                            ? 'right'
                            : undefined
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
