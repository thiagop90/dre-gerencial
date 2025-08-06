import { SettingsIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { financialIndicators } from '@/constants/financial-indicators'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

interface ManageIndicatorsProps {
  selectedCardIds: number[]
  toggleCardSelection: (cardId: number) => void
}

export function ManageIndicators({
  selectedCardIds,
  toggleCardSelection,
}: ManageIndicatorsProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <SettingsIcon />
          <span className="line-clamp-1">Gerenciar</span>
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="flex max-h-[60vh] flex-col gap-0 overflow-hidden rounded-xl p-0 md:max-w-2xl"
      >
        <DialogHeader className="border-b p-4 text-left">
          <DialogTitle>Gerenciar Indicadores</DialogTitle>
          <DialogDescription>
            Selecione os indicadores que seja exibir no dashboard
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 overflow-y-auto p-4 pr-2 md:grid-cols-2">
          {financialIndicators.map((indicator) => {
            const isSelected = selectedCardIds.includes(indicator.id)

            return (
              <div
                key={indicator.id}
                className="has-data-[state=checked]:bg-muted/50 has-data-[state=checked]:border-primary/20 has-data-[state=unchecked]:hover:bg-muted/30 relative flex items-start gap-2 rounded-lg border p-4 transition-colors"
              >
                <Checkbox
                  id={String(indicator.id)}
                  checked={isSelected}
                  onClick={() => toggleCardSelection(indicator.id)}
                  className="order-1 after:absolute after:inset-0 after:cursor-pointer"
                />

                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <indicator.Icon className="size-5" />
                    <label
                      htmlFor={String(indicator.id)}
                      className="text-sm font-medium"
                    >
                      {indicator.label}
                    </label>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    {indicator.description}
                  </p>
                  <p className="text-primary text-sm font-semibold">
                    {indicator.value}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        <DialogFooter className="flex justify-end space-x-2 border-t p-4">
          {/* <Button variant="outline">Resetar</Button> */}
          <DialogClose asChild>
            <Button variant="outline">Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
