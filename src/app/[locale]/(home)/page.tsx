import { AppSidebar } from '@/components/app-sidebar'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { SiteHeader } from '@/components/site-header'
import { DataTable } from '@/components/table/_index'
import { data } from '@/lib/data'
import { TableNavigation } from '@/components/table-navigation'
import { SectionCards } from '@/components/section-cards'
import { DREHeader } from '@/components/dre-header'

export default async function Home() {
  // const data = await prisma.account.findMany({
  //   where: {
  //     parent_id: null,
  //   },
  //   include: {
  //     values: {
  //       select: {
  //         period: true,
  //         value: true,
  //       },
  //     },
  //     children: {
  //       include: {
  //         values: {
  //           select: {
  //             period: true,
  //             value: true,
  //           },
  //         },
  //       },
  //     },
  //   },
  // })

  return (
    <SidebarProvider
      style={
        {
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        {/* <DREHeader /> */}

        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />

              <TableNavigation />

              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
