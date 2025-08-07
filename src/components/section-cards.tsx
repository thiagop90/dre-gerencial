'use client'

import { financialIndicators } from '@/constants/financial-indicators'
import { ManageIndicators } from './manage-indicators'
import { useState } from 'react'
import { KpiCard } from './kpi-card/kpi-card'

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
      <div className="grid grid-cols-1 gap-4 @2xl/main:grid-cols-2 @6xl/main:grid-cols-4">
        {selectedIndicators.map((item) => (
          <KpiCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
