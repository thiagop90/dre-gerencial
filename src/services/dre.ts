import { executeQuery } from '@/lib/db'

type DREAccounts = {
  id: number
  code: string
  description: string
  parent_id: number | null
}

type DREValues = {
  id: number
  account_id: number
  period: string
  amount: number
}

export async function getAccountsWithValues() {
  const accounts = await executeQuery(`
    SELECT a.id, a.code, a.description, a.parent_id
    FROM dre_accounts a
  `)

  const values = await executeQuery(`
    SELECT av.account_id, DATE_FORMAT(av.period, '%Y-%m') as period, av.value
    FROM dre_entries av
  `)

  const valuesByAccount: Record<number, { period: string; value: number }[]> =
    {}

  for (const row of values as any[]) {
    if (!valuesByAccount[row.account_id]) {
      valuesByAccount[row.account_id] = []
    }
    valuesByAccount[row.account_id].push({
      period: row.period,
      value: Number(row.value),
    })
  }

  const map = new Map<number, any>()

  for (const acc of accounts as any[]) {
    map.set(acc.id, {
      id: acc.id,
      code: acc.code,
      description: acc.description,
      parentId: acc.parent_id,
      values: valuesByAccount[acc.id] || [],
      children: [],
    })
  }

  const tree: any[] = []

  for (const acc of map.values()) {
    if (acc.parentId) {
      map.get(acc.parentId)?.children.push(acc)
    } else {
      tree.push(acc)
    }
  }

  return tree
}
