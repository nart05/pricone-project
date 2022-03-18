import { DefaultTheme } from 'styled-components'

import { COLOR } from '~common/app.model'

const theme: DefaultTheme = {
	baseFontSize: 16,
	color: {
		primary: COLOR.PRIMARY,
		accent: COLOR.ACCENT,
		dark: COLOR.DARK,
		warn: COLOR.WARN,
		gray1: COLOR.GRAY1,
		gray2: COLOR.GRAY2,
		gray3: COLOR.GRAY3
	}
}

export default theme
