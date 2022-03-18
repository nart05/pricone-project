import { createContext, ChangeEventHandler, ReactNode } from 'react'

export interface RadioGroupProps {
	name: string
	value: string
	onChange?: (value: string) => void
	children: ReactNode
}

export const RadioButtonNameContext = createContext('')
export const RadioButtonValueContext = createContext<string>(null)

export function RadioGroup({ children, name, value, onChange }: RadioGroupProps) {
	const onRadioChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		if (target.type !== 'radio') return

		onChange && onChange(target.value)
	}

	return (
		<div onChange={onRadioChange} className="radio-group-container">
			<RadioButtonNameContext.Provider value={name}>
				<RadioButtonValueContext.Provider value={value}>
					{children}
				</RadioButtonValueContext.Provider>
			</RadioButtonNameContext.Provider>
		</div>
	)
}
