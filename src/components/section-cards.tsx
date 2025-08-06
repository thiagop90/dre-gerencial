'use client'

import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { financialIndicators } from '@/constants/financial-indicators'
import { ManageIndicators } from './manage-indicators'
import { useState } from 'react'

export function SectionCards() {
  const [selectedCardIds, setSelectedCardIds] = useState<number[]>(
    financialIndicators.slice(0, 4).map((indicator) => indicator.id),
  )

  const selectedIndicators = financialIndicators.filter((indicator) =>
    selectedCardIds.includes(indicator.id),
  )

  const addCard = (cardId: number) => {
    if (!selectedCardIds.includes(cardId)) {
      setSelectedCardIds((prev) => [...prev, cardId])
    }
  }

  const removeCard = (cardId: number) => {
    setSelectedCardIds((prev) => prev.filter((id) => id !== cardId))
  }

  const toggleCardSelection = (cardId: number) => {
    if (selectedCardIds.includes(cardId)) {
      removeCard(cardId)
    } else {
      addCard(cardId)
    }
  }

  return (
    <div className="flex flex-col gap-4 border-b px-4 pb-4 lg:px-6 lg:pb-6">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold">Indicadores Financeiros</div>

        <ManageIndicators
          selectedCardIds={selectedCardIds}
          toggleCardSelection={toggleCardSelection}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 overflow-x-auto @2xl/main:grid-cols-2 @6xl/main:grid-cols-4">
        {selectedIndicators.map(({ Icon, description, label, value }) => (
          <Card
            className="dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]"
            key={label}
          >
            <div className="shadow-elevationLight dark:shadow-inner-shadow-dark-sm flex flex-1 flex-col rounded-lg bg-[#fafafa] p-4 dark:bg-[#1F1F1F]">
              <CardHeader className="mt-auto gap-2.5">
                <Icon className="size-6" />
                <div className="text-sm font-semibold">{label}</div>
                <CardTitle className="@2xl/main:text-lg">{value}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
