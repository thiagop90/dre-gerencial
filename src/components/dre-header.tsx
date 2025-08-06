import { SettingsIcon } from 'lucide-react'
import { Button } from './ui/button'

export function DREHeader() {
  return (
    <div className="h-16 w-full border-b">
      <div className="flex h-full items-center justify-between px-4 md:px-6">
        {/* <div className="text-xl font-semibold">Indicadores Financeiros</div> */}

        <Button variant="outline" className="ml-auto">
          <SettingsIcon />
          Gerenciar Indicadores
        </Button>
      </div>
    </div>
  )
}
