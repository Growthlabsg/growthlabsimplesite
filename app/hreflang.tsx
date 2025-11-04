// Hreflang tags for geographic targeting
export default function HreflangTags() {
  const baseUrl = 'https://www.growthlab.sg'
  const locales = [
    { lang: 'en-SG', href: `${baseUrl}`, region: 'Singapore' },
    { lang: 'en-IN', href: `${baseUrl}`, region: 'India' },
    { lang: 'en-US', href: `${baseUrl}`, region: 'United States' },
    { lang: 'en-GB', href: `${baseUrl}`, region: 'United Kingdom' },
    { lang: 'en-AU', href: `${baseUrl}`, region: 'Australia' },
    { lang: 'en-MY', href: `${baseUrl}`, region: 'Malaysia' },
    { lang: 'en', href: `${baseUrl}`, region: 'Global' },
  ]

  return (
    <>
      {locales.map((locale) => (
        <link
          key={locale.lang}
          rel="alternate"
          hrefLang={locale.lang}
          href={locale.href}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />
    </>
  )
}

