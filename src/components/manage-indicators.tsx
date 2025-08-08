import { Button } from './ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Icons } from './icons'
import { useState } from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer'
import { useMediaQuery } from '@/hooks/use-media-query'
import { KpiCardList } from './kpi-card/kpi-card-list'
import { XIcon } from 'lucide-react'
import { Chart } from 'solar-icon-set'

// interface ManageIndicatorsProps {
//   selectedCardIds: number[]
//   toggleCardSelection: (cardId: number) => void
// }

export function ManageIndicators() {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 640px)')

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button size="lg" variant="outline" className="z-20">
            <Icons.chart />
            <span>Insights</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="border-b">
            <DrawerTitle>Gerenciar Indicadores</DrawerTitle>
            <DrawerDescription>
              Selecione os indicadores que seja exibir no dashboard
            </DrawerDescription>
          </DrawerHeader>

          <KpiCardList />
          <DrawerFooter className="border-t">
            <DrawerClose asChild>
              <Button variant="outline">Fechar</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="">
          <Chart />
          <span>Insights</span>
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="flex max-h-[calc(100dvh-2rem)] flex-col gap-0 overflow-hidden rounded-3xl p-0 xl:max-w-6xl"
      >
        <DialogHeader className="relative border-b p-6 text-left">
          <DialogTitle className="">Gerenciar Indicadores</DialogTitle>
          <DialogDescription>
            Selecione os indicadores que seja exibir no dashboard
          </DialogDescription>

          <DialogClose asChild>
            <Button
              size="icon"
              variant="outline"
              className="absolute top-1/2 right-6 size-10 -translate-y-1/2 rounded-full"
            >
              <XIcon />
            </Button>
          </DialogClose>
        </DialogHeader>
        <KpiCardList />
        {/* <DialogFooter className="flex justify-end space-x-2 border-t p-5 sm:p-6">
          <Button variant="outline">Resetar</Button>
          <DialogClose asChild>
            <Button variant="outline">Fechar</Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}
