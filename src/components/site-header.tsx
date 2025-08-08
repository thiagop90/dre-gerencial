import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import ThemeToggle from './theme-toggle'
import { LanguageSelector } from './language-selector'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Button } from './ui/button'
import { BellIcon, HelpCircle } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <LanguageSelector />

          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-muted! text-muted-foreground size-8 rounded-full"
          >
            <BellIcon />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-muted! text-muted-foreground size-8 rounded-full"
          >
            <HelpCircle />
          </Button>

          <Button size="sm" variant="ghost" className="gap-2">
            <span className='hidden'>Jonathan Doe</span>

            <Avatar className="size-7">
              <AvatarFallback className="bg-[#E59CFD] text-white">
                JD
              </AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>
    </header>
  )
}
