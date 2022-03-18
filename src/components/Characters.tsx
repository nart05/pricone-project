import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import { charactersState } from '~common/store'
import { CharacterProfile } from './ChracterProfile'

export function Characters() {
	const characters = useRecoilValue(charactersState)

	return (
		<Container>
			{characters.map(character => (
				<CharacterProfile key={character.id} {...character} />
			))}
		</Container>
	)
}

const Container = styled.section`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 4px;
	margin-top: 10px;
`
