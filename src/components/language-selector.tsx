'use client'

import { GlobeIcon } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { useLocale } from 'next-intl'
import { useRouter } from '@/i18n/navigation'

const locales = [
  { value: 'pt-br', label: 'Português' },
  { value: 'en-us', label: 'English' },
]

export function LanguageSelector() {
  const locale = useLocale()
  const router = useRouter()

  function handleLanguageChange(newLocale: 'pt-br' | 'en-us') {
    router.replace('/', { locale: newLocale })
  }
  return (
    <Select defaultValue={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger
        className="[&>svg]:text-muted-foreground/80 hover:bg-accent hover:text-accent-foreground h-8 border-none px-2 shadow-none"
        aria-label="Select language"
      >
        <GlobeIcon size={16} aria-hidden="true" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2">
        {locales.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            <span className="flex items-center gap-2">
              <span className="truncate">{lang.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
