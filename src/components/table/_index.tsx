'use client'

import {
  TableCell,
  Table,
  TableBody,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import {
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useLocale } from 'next-intl'

import { getDREColumns } from './columns'
import { TableHeaderCell } from './table-header-cell'
import { TableBodyCell } from './table-body-cell'
import type { DREAccount } from '@/types/dre'
import { TableNavigation } from '../table-navigation'
// import { TableFooterRow } from './table-footer-row'

export function DataTable({ data }: { data: DREAccount[] }) {
  const locale = useLocale()
  const year = 2025

  const columns = getDREColumns(locale, year)

  const table = useReactTable({
    initialState: {
      columnPinning: {
        left: ['code', 'description'],
        // right: ['total'],
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
    <div className="space-y-6 px-4 lg:px-6">
      <TableNavigation />

      <div className="overflow-hidden rounded-lg border">
        <Table
          className="[&_td]:border-border [&_th]:border-border table-fixed border-separate border-spacing-0 [&_th]:border-b [&_tr]:border-none [&_tr:not(:last-child)_td]:border-b"
          style={{
            width: table.getTotalSize(),
            scrollbarWidth: 'none',
          }}
        >
          <TableHeader className="sticky top-0 z-10 backdrop-blur-xs">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-muted/50">
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell key={header.id} header={header} />
                ))}
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
                  {row.getVisibleCells().map((cell) => (
                    <TableBodyCell key={cell.id} cell={cell} row={row} />
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Nenhum resultado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          {/* <TableFooterRow table={table} /> */}
        </Table>
      </div>
    </div>
  )
}
