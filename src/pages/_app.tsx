import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'
import { IntlProvider, createIntl, createIntlCache } from 'react-intl'
import { dark, light } from '@/theme/Theme.styled'
import { GlobalStyles } from '@/theme/Global.styled'
import en from '@/locales/en/common.json'
import fa from '@/locales/fa/common.json'
import { Layout_comp } from '@/components'
import { Auth } from '@/tools'
import '@/public/fonts/fonts.css'

const cache = createIntlCache()
const messages = { fa, en }
const themes = { dark, light }

type AppType = AppProps & {
  Component: {
    auth?: boolean
    header?: JSX.Element | 'empty'
    footer?: JSX.Element | 'empty'
  }
}

export default function App(props: AppType): JSX.Element {
  const {
    Component,
    pageProps: { ...otherProps },
  } = props
  const themeMode = 'dark'
  const { locale: nextLocale = 'en' } = useRouter()
  const intl = createIntl(
    {
      locale: nextLocale,
      messages: messages[nextLocale as keyof typeof messages],
    },
    cache,
  )

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <IntlProvider {...intl} onError={() => null}>
      <ThemeProvider theme={themes[themeMode as keyof typeof themes]}>
        <GlobalStyles />
        <Layout_comp>
          {Component.auth ? (
            <Auth>
              <Component {...otherProps} />
            </Auth>
          ) : (
            <Component {...otherProps} />
          )}
        </Layout_comp>
      </ThemeProvider>
    </IntlProvider>
  )
}
