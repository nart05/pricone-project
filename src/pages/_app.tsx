import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'

import GlobalStyle from '~styles/global'
import theme from '~styles/theme'
import { Header } from '~components/Header'

export default function RootApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>프리코네 MBTI 궁합</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<GlobalStyle />
			<RecoilRoot>
				<Header />
				<Component {...pageProps} />
			</RecoilRoot>
		</ThemeProvider>
	)
}
