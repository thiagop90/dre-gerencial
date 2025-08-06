export function formatCurrency(
  value: number,
  locale: string = 'pt-br',
): string {
  return value.toLocaleString(locale, {
    style: 'currency',
    currency: locale === 'pt-br' ? 'BRL' : 'USD',
  })
}
