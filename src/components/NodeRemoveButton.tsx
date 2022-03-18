import { memo, ReactNode } from 'react'

import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'

import { COLOR, MY_PROFILE_ID } from '~common/app.model'
import { characterSelectedState, myCenterModeState, myProfileState } from '~common/store'

interface NodeRemoveButtonProps {
	id: number
	children: ReactNode
}

export const NodeRemoveButton = memo(function NodeRemoveButton({
	id,
	children
}: NodeRemoveButtonProps) {
	const setSelected = useSetRecoilState(characterSelectedState(id))
	const setMyProfile = useSetRecoilState(myProfileState)
	const setMyCenterMode = useSetRecoilState(myCenterModeState)

	const remove = () => {
		setSelected(false)
		if (id === MY_PROFILE_ID) {
			setMyCenterMode(false)
			setMyProfile(null)
		}
	}

	return <Container onClick={remove}>{children}</Container>
})

const Container = styled.button`
	position: relative;
	width: 70px;
	height: 70px;
	border-radius: 50%;
	::before {
		content: 'X';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: none;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.5);
		font-size: 50px;
	}
	:hover::before {
		display: flex;
	}
`
