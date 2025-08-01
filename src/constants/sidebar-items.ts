import {
  BarChart2,
  BriefcaseBusiness,
  Building2,
  CircleArrowUp,
  Globe2,
  HelpCircle,
  Layout,
  ListOrdered,
  Monitor,
  History,
  Settings,
  Sigma,
  UploadCloud,
  Users2,
  type LucideIcon,
} from 'lucide-react'
import type { Messages } from 'next-intl'

type SidebarItem = {
  title: keyof Messages['Sidebar']
  url: string
  icon: LucideIcon
}

export const MAIN_NAVIGATION_ITEMS: SidebarItem[] = [
  {
    title: 'dashboard',
    url: '#',
    icon: Layout,
  },
  {
    title: 'planOfAccounts',
    url: '#-of-accounts',
    icon: ListOrdered,
  },
  {
    title: 'formulas',
    url: '#',
    icon: Sigma,
  },
  {
    title: 'comparative',
    url: '#',
    icon: BarChart2,
  },
  {
    title: 'upload',
    url: '#',
    icon: UploadCloud,
  },
  {
    title: 'history',
    url: '#',
    icon: History,
  },
  {
    title: 'reports',
    url: '#',
    icon: Monitor,
  },
  {
    title: 'companies',
    url: '#',
    icon: Building2,
  },
  {
    title: 'projects',
    url: '#',
    icon: BriefcaseBusiness,
  },
  {
    title: 'users',
    url: '#',
    icon: Users2,
  },
]

export const SYSTEM_OPTIONS_ITEMS: SidebarItem[] = [
  {
    title: 'settings',
    url: '#',
    icon: Settings,
  },
  {
    title: 'helpSupport',
    url: '#',
    icon: HelpCircle,
  },
  {
    title: 'upgrade',
    url: '#',
    icon: CircleArrowUp,
  },
  {
    title: 'languageRegion',
    url: '#',
    icon: Globe2,
  },
]
