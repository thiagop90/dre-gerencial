import type { KpiItem } from '@/constants/financial-indicators'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

export function KpiCard({ Icon, title, value, description }: KpiItem) {
  return (
    <Card className="dark:shadow-inner-dark-float dark:bg-[#1A1A1A]">
      <div className="group shadow-elevation-light dark:shadow-inner-dark relative flex flex-1 flex-col rounded-2xl bg-[#fafafa] p-4 dark:bg-[#1F1F1F]">
        <CardHeader>
          <Icon className="mb-1 text-[#888888]" />
          <div className="text-base font-semibold">{title}</div>
          <CardTitle className="text-lg">{value}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </div>
    </Card>
  )
}
