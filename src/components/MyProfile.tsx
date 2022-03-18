import { useRouter } from 'next/router'

import { useRecoilState, useRecoilValue } from 'recoil'
import styled, { css } from 'styled-components'

import { COLOR } from '~common/app.model'
import { myCenterModeState, myProfileState } from '~common/store'

export interface MyProfileProps {}

export function MyProfile({}: MyProfileProps) {
	const myProfile = useRecoilValue(myProfileState)
	const isMyProfile = !!myProfile
	const [myCenterMode, setMyCenterMode] = useRecoilState(myCenterModeState)
	const router = useRouter()

	const goToMyMBTI = () => {
		router.push('/my-mbti')
	}

	return (
		<Container isMyProfile={isMyProfile}>
			<button onClick={goToMyMBTI}>{isMyProfile ? '내 프로필 변경' : '내 프로필 추가'}</button>
			{isMyProfile && (
				<label>
					<input
						type="checkbox"
						defaultChecked={myCenterMode}
						onChange={evt => setMyCenterMode(evt.target.checked)}
					/>
					<span>내 프로필을 중심으로 보기</span>
				</label>
			)}
		</Container>
	)
}

const Container = styled.div<{ isMyProfile: boolean }>`
	button {
		margin-bottom: 20px;
		padding: 10px;
		background-color: ${COLOR.PRIMARY};
		color: ${COLOR.WHITE};
		border: 3px solid ${COLOR.ACCENT};
		border-radius: 10px;
		text-shadow: 0 0 3px ${COLOR.DARK};
		font-weight: bold;
		box-shadow: 0 0 3px ${COLOR.DARK};
		${({ isMyProfile }) =>
			isMyProfile &&
			css`
				background-color: ${COLOR.WHITE};
				color: ${COLOR.DARK};
				text-shadow: none;
			`}
	}
	label {
		margin-left: 20px;
		cursor: pointer;
		input {
			margin-right: 5px;
		}
	}
`
