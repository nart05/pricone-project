import Link from 'next/link'

import styled from 'styled-components'

import { COLOR } from '~common/app.model'

export function Header() {
	return (
		<Container>
			<h1>
				<Link href="/">
					<a>프리코네 MBTI 궁합</a>
				</Link>
			</h1>
		</Container>
	)
}

const Container = styled.header`
	position: sticky;
	top: 0;
	padding: 20px;
	background-color: ${COLOR.GRAY3};
	background-image: url(/banner.png);
	background-size: cover;
	background-position: center 20%;
	background-blend-mode: multiply;
	box-shadow: 0 3px 8px ${COLOR.GRAY3};
	z-index: 1;
	h1 {
		a {
			color: white;
			font-size: 24px;
		}
	}
`
