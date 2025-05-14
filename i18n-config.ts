export const i18n = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  defaultLocale: 'en',
  locales: ['en', 'it'],
} as const

export type Locale = (typeof i18n)['locales'][number]
