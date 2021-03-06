import { CSSProperties, useCallback } from 'react'

import { useRecoilValue } from 'recoil'
import Graph, { Node, Edge } from 'react-graph-vis'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

import { myCenterModeState, selectedCharactersState } from '~common/store'
import { NodeRemoveButton } from './NodeRemoveButton'
import { CharacterInterface, MY_PROFILE_ID } from '~common/app.model'
import { graphOptions, mbtiEdges, RADIUS } from '~common/graph.model'

const randomPoints = () => {
	const negative = Math.random() < 0.5 ? -1 : 1
	return Math.round(Math.random() * 10) * negative
}

const getMyCenterEdges = ([myProfile, ...characters]: CharacterInterface[]) => {
	return characters.map(character => {
		return {
			from: MY_PROFILE_ID,
			to: character.id,
			...mbtiEdges.get(`${myProfile.mbti}-${character.mbti}`)
		}
	})
}

const getTupleEdges = (characters: CharacterInterface[]) => {
	const nodeTuples: Array<[CharacterInterface, CharacterInterface]> = characters.reduce(
		(nodeTuple, node, index, array) => {
			const tuple = array.slice(index + 1).map(value => [node, value])
			return nodeTuple.concat(tuple)
		},
		[]
	)

	return nodeTuples
		.map(([node1, node2]) => {
			return {
				from: node1.id,
				to: node2.id,
				...mbtiEdges.get(`${node1.mbti}-${node2.mbti}`)
			}
		})
		.reverse()
}

const graphStyles = (): CSSProperties => {
	console.log(window.innerWidth)
	return {
		width: isMobile ? window.innerWidth : '800px',
		height: isMobile ? window.innerWidth + 40 : '800px'
	}
}

export default function NodeGraph() {
	const selectedCharacters = useRecoilValue(selectedCharactersState)
	const myCenterMode = useRecoilValue(myCenterModeState)

	const sides = selectedCharacters.length + (myCenterMode ? -1 : 0)
	const getPoints = useCallback(
		(index: number) => {
			if (selectedCharacters.length === 1) {
				return { x: 0, y: 0 }
			}

			const angle = (Math.PI * 2) / sides

			return {
				x: RADIUS * Math.sin(angle * index) + randomPoints(),
				y: RADIUS * Math.cos(angle * index) * -1 + randomPoints()
			}
		},
		[sides]
	)

	const nodes: Node[] = selectedCharacters.map((character, index) => {
		if (character.id === MY_PROFILE_ID) {
			return {
				id: MY_PROFILE_ID,
				label: character.name,
				shape: 'box',
				...(myCenterMode ? { x: 0, y: 0 } : getPoints(index))
			}
		}

		return {
			id: character.id,
			label: character.name,
			image: `/characters/${character.name}.png`,
			shape: 'circularImage',
			...getPoints(index + (myCenterMode ? -1 : 0))
		}
	})

	const edges: Edge[] = myCenterMode
		? getMyCenterEdges(selectedCharacters)
		: getTupleEdges(selectedCharacters)

	return (
		<Container>
			{!nodes.length && <Text>??? ????????? ?????? ????????? ???????????? ???????????????.</Text>}
			<Graph graph={{ nodes, edges }} options={graphOptions} style={graphStyles()} />
			<Section>
				{selectedCharacters.map(character => (
					<NodeRemoveButton key={character.id} id={character.id}>
						{character.id === MY_PROFILE_ID ? (
							character.name
						) : (
							<Img src={`/characters/${character.name}.png`} alt={character.name} />
						)}
					</NodeRemoveButton>
				))}
			</Section>
		</Container>
	)
}

const Container = styled.div`
	max-width: 800px;
`

const Section = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`

const Img = styled.img`
	width: 100%;
	border-radius: 50%;
`

const Text = styled.p`
	padding: 50px 0;
	text-align: center;
	font-size: 20px;
`
