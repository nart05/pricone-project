import { ReactNode, useContext } from 'react'

import styled, { css } from 'styled-components'

import { COLOR } from '~common/app.model'
import { RadioButtonNameContext, RadioButtonValueContext } from './RadioGroup'

export interface RadioButtonProps {
	value: string
	color: COLOR
	className?: string
	children: ReactNode
}

export function RadioButton({ children, value, color, className }: RadioButtonProps) {
	const radioButtonName = useContext(RadioButtonNameContext)
	const radioButtonValue = useContext(RadioButtonValueContext)

	const checked = radioButtonValue === value

	return (
		<Container className={className} color={color}>
			<input type="radio" name={radioButtonName} defaultChecked={checked} value={value} />
			<Label color={color}>{children}</Label>
		</Container>
	)
}

const Label = styled.div<{ color: COLOR }>`
	width: 200px;
	height: 150px;
	border: 3px solid ${COLOR.GRAY1};
	border-radius: 10px;
	box-shadow: 0 0 3px ${COLOR.DARK};
`

const Container = styled.label`
	display: inline-block;
	user-select: none;
	cursor: pointer;
	input {
		display: none;
		&:checked + ${Label} {
			border: 5px solid ${({ color }) => color};
		}
	}
`
