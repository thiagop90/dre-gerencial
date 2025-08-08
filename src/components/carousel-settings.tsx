import { Settings } from 'solar-icon-set'
import { Button } from './ui/button'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function CarouselSettings() {
  const [open, setOpen] = useState(false)
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="icon" variant="outline" className={cn('size-10 rounded-full duration-300', open ? 'rotate-90' : '')}>
          <Settings />
        </Button>
      </PopoverTrigger>
    </Popover>
  )
}
