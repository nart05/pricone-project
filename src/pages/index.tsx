import { Characters } from '~components/Characters'
import { NodeGraph } from '~components/NodeGraph'
import { MyProfile } from '~components/MyProfile'
import styled from 'styled-components'

export default function Main() {
	return (
		<Container>
			<MyProfile />
			<NodeGraph />
			<Characters />
		</Container>
	)
}

const Container = styled.main`
	width: 800px;
	margin: 50px auto 100px;
`
