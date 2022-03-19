import styled from 'styled-components'

import { Characters } from '~components/Characters'
import { MyProfile } from '~components/MyProfile'
import dynamic from 'next/dynamic'

export default function Main() {
	const NodeGraph = dynamic(() => import('~components/NodeGraph'), { ssr: false })

	return (
		<Container>
			<NodeGraph />
			<div className="wrapper">
				<MyProfile />
				<Characters />
			</div>
		</Container>
	)
}

const Container = styled.main`
	display: flex;
	justify-content: space-around;
	gap: 20px;
	margin: 50px 20px 100px;
	.wrapper {
		max-width: 800px;
	}

	@media screen and (max-width: 1440px) {
		flex-direction: column-reverse;
		align-items: center;
	}
`
