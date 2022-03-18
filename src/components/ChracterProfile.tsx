import { useRecoilState, useRecoilValue } from 'recoil'

import { characterSelectedState, isSelectState } from '~common/store'
import { CharacterInterface, COLOR } from '~common/app.model'
import styled, { css } from 'styled-components'

export function CharacterProfile(character: CharacterInterface) {
	const [selected, setSelected] = useRecoilState(characterSelectedState(character.id))
	const isSelect = useRecoilValue(isSelectState)

	const selectCharacter = () => {
		if (!isSelect && !selected) {
			return alert('캐릭터는 최대 10명까지만 추가할 수 있습니다.')
		}

		setSelected(!selected)
	}

	return (
		<Container selected={selected}>
			<img
				src={`/characters/${character.name}.png`}
				alt={character.name}
				onClick={selectCharacter}
			/>
			<p className="mbti">{character.mbti}</p>
		</Container>
	)
}

const Container = styled.div<{ selected: boolean }>`
	position: relative;
	width: 76px;
	height: 76px;
	cursor: pointer;
	img {
		width: 100%;
	}
	.mbti {
		position: absolute;
		width: 100%;
		text-align: right;
		font-size: 14px;
		font-weight: bold;
		background-color: rgba(255, 255, 255, 0.6);
		bottom: 0;
		letter-spacing: 2px;
	}
	${({ selected }) =>
		selected &&
		css`
			border: 1px solid ${COLOR.DARK};
			img,
			.mbti {
				opacity: 0.4;
			}
		`}
`
