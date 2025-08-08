'use client'

import * as React from 'react'
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ArrowDown, ArrowUp, Play, Stop } from 'solar-icon-set'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  isPlaying: boolean
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  onButtonAutoplayClick: (callback: () => void) => void
  toggleAutoplay: () => void
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

function Carousel({
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      breakpoints: {
        '(max-width: 512px)': { axis: 'y' },
      },
      dragFree: true,
    },
    [AutoScroll({ playOnInit: false, startDelay: 300, speed: 1.5 })],
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const [isPlaying, setIsPlaying] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext],
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])

  const onButtonAutoplayClick = React.useCallback(
    (callback: () => void) => {
      const autoScroll = api?.plugins()?.autoScroll
      if (!autoScroll) return

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop

      resetOrStop()
      callback()
    },
    [api],
  )

  const toggleAutoplay = React.useCallback(() => {
    const autoScroll = api?.plugins()?.autoScroll
    if (!autoScroll) return

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play
    playOrStop()
  }, [api])

  React.useEffect(() => {
    const autoScroll = api?.plugins()?.autoScroll
    if (!autoScroll) return

    setIsPlaying(autoScroll.isPlaying())
    api
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
  }, [api])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        onButtonAutoplayClick,
        toggleAutoplay,
        isPlaying,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef, canScrollNext, canScrollPrev } = useCarousel()

  const showStartShadow = canScrollPrev
  const showEndShadow = canScrollNext

  return (
    <div
      ref={carouselRef}
      className="relative overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          '-mt-4 flex flex-col min-[512px]:mt-0 min-[512px]:-ml-4 min-[512px]:flex-row',
          className,
        )}
        {...props}
      />

      {/* Left (start) */}
      <div
        className={cn(
          'dark:from-popover absolute top-0 left-0 hidden h-full w-10 bg-gradient-to-r from-[#FAFAFA] to-transparent transition-opacity duration-200 min-[512px]:block',
          showStartShadow ? 'opacity-100' : 'opacity-0',
        )}
      />

      {/* Right (end) */}
      <div
        className={cn(
          'dark:from-popover absolute top-0 right-0 hidden h-full w-10 bg-gradient-to-l from-[#FAFAFA] to-transparent transition-opacity duration-200 min-[512px]:block',
          showEndShadow ? 'opacity-100' : 'opacity-0',
        )}
      />

      {/* Top (start) */}
      <div
        className={cn(
          'dark:from-popover absolute top-0 left-0 h-10 w-full bg-gradient-to-b from-[#FAFAFA] to-transparent transition-opacity duration-200 min-[512px]:hidden',
          showStartShadow ? 'opacity-100' : 'opacity-0',
        )}
      />

      {/* Bottom (end) */}
      <div
        className={cn(
          'dark:from-popover absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t from-[#FAFAFA] to-transparent transition-opacity duration-200 min-[512px]:hidden',
          showEndShadow ? 'opacity-100' : 'opacity-0',
        )}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full pt-4 min-[512px]:pt-0 min-[512px]:pl-4',
        className,
      )}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollPrev, canScrollPrev, onButtonAutoplayClick } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn('size-10 rounded-full min-[512px]:-rotate-90', className)}
      disabled={!canScrollPrev}
      onClick={() => onButtonAutoplayClick(scrollPrev)}
      {...props}
    >
      <ArrowUp />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollNext, canScrollNext, onButtonAutoplayClick } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn('size-10 rounded-full min-[512px]:-rotate-90', className)}
      disabled={!canScrollNext}
      onClick={() => onButtonAutoplayClick(scrollNext)}
      {...props}
    >
      <ArrowDown />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

function CarouselAutoScrollToggle({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { isPlaying, toggleAutoplay } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn('size-10 rounded-full')}
      // disabled={!canScrollNext}
      onClick={toggleAutoplay}
      {...props}
    >
      {isPlaying ? <Stop /> : <Play />}
    </Button>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselAutoScrollToggle,
}
