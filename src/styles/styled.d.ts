import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		baseFontSize: number
		color: {
			primary: string
			accent: string
			dark: string
			warn: string
			gray1: string
			gray2: string
			gray3: string
		}
	}
}
