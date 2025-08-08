import { Tabs, TabsList, TabsTrigger } from './ui/tabs'

export function TableNavigation() {
  return (
    <div className="flex w-full overflow-hidden border-b">
      <Tabs defaultValue="mensal">
        <TabsList className="border-b-0">
          <TabsTrigger value="mensal">Mensal</TabsTrigger>
          <TabsTrigger value="bimestral">Bimestral</TabsTrigger>
          <TabsTrigger value="trimestral">Trimestral</TabsTrigger>
          <TabsTrigger value="semestral">Semestral</TabsTrigger>
          <TabsTrigger value="anual">Anual</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
