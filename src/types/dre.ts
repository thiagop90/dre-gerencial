export type DREAccount = {
  code: string
  description: string
  values: Record<string, number>
  children?: DREAccount[]
}
