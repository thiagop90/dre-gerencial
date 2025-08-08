'use client'

import { financialIndicators } from '@/constants/financial-indicators'
import { ManageIndicators } from './manage-indicators'
// import { useState } from 'react'
import { KpiCard } from './kpi-card/kpi-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import { Separator } from './ui/separator'
import { CarouselSettings } from './carousel-settings'

export function SectionCards() {
  // const [selectedCardIds, setSelectedCardIds] = useState<number[]>(
  //   financialIndicators.slice(0, 4).map((indicator) => indicator.id),
  // )

  // const selectedIndicators = financialIndicators.filter((indicator) =>
  //   selectedCardIds.includes(indicator.id),
  // )

  // const addCard = (cardId: number) => {
  //   if (!selectedCardIds.includes(cardId)) {
  //     setSelectedCardIds((prev) => [...prev, cardId])
  //   }
  // }

  // const removeCard = (cardId: number) => {
  //   setSelectedCardIds((prev) => prev.filter((id) => id !== cardId))
  // }

  // const toggleCardSelection = (cardId: number) => {
  //   if (selectedCardIds.includes(cardId)) {
  //     removeCard(cardId)
  //   } else {
  //     addCard(cardId)
  //   }
  // }

  return (
    <div className="@2xl/main:px-6">
      <Carousel className="dark:bg-popover relative flex flex-col overflow-hidden border-b bg-[#fafafa] @2xl/main:rounded-3xl @2xl/main:border">
        <div className="flex items-center justify-between p-6">
          <ManageIndicators />

          <div className="ml-auto flex items-center gap-2">
            <CarouselPrevious />
            <CarouselNext />

            <Separator
              orientation="vertical"
              className="mx-1 data-[orientation=vertical]:h-5"
            />

            <CarouselSettings />
            {/* <CarouselAutoScrollToggle /> */}
          </div>
        </div>

        <CarouselContent className="mb-6 max-h-[55dvh] px-6 pt-px min-[512px]:max-h-full">
          {financialIndicators.map((item) => {
            return (
              <CarouselItem className="min-[512px]:max-w-[22rem]" key={item.id}>
                <KpiCard {...item} />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
