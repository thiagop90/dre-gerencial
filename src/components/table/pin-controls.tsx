'use client'

import type { Column } from '@tanstack/react-table'
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
import type { DREAccount } from '@/types/dre'

interface PinControlsProps {
  column: Column<DREAccount>
  headerTitle: string
}

export function PinControls({ column, headerTitle }: PinControlsProps) {
  if (!column.getCanPin()) return null

  if (column.getIsPinned()) {
    return (
      <Button
        size="icon"
        variant="ghost"
        className="-mr-1 size-7 shadow-none"
        onClick={() => column.pin(false)}
        aria-label={`Unpin ${headerTitle} column`}
        title={`Unpin ${headerTitle} column`}
      >
        <PinOffIcon className="opacity-60" size={16} aria-hidden="true" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="-mr-1 size-7 shadow-none"
          aria-label={`Pin options for ${headerTitle} column`}
          title={`Pin options for ${headerTitle} column`}
        >
          <EllipsisIcon className="opacity-60" size={16} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => column.pin('left')}>
          <ArrowLeftToLineIcon
            size={16}
            className="opacity-60"
            aria-hidden="true"
          />
          Fixar à esquerda
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => column.pin('right')}>
          <ArrowRightToLineIcon
            size={16}
            className="opacity-60"
            aria-hidden="true"
          />
          Fixar à direita
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
