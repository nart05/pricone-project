import { useRouter } from 'next/router'
import { SyntheticEvent, useState } from 'react'

import { useRecoilState } from 'recoil'
import styled from 'styled-components'

import { CharacterInterface, COLOR, MY_PROFILE_ID } from '~common/app.model'
import { myProfileState } from '~common/store'
import { RadioButton } from '~components/RadioButton'
import { RadioGroup } from '~components/RadioGroup'

export default function MyMBTI() {
	const [myProfile, setMyProfile] = useRecoilState(myProfileState)
	const [_mbti1, _mbti2, _mbti3, _mbti4] = (myProfile?.mbti || '').split('')
	const [name, setName] = useState(myProfile?.name)
	const [mbti1, setMbti1] = useState(_mbti1)
	const [mbti2, setMbti2] = useState(_mbti2)
	const [mbti3, setMbti3] = useState(_mbti3)
	const [mbti4, setMbti4] = useState(_mbti4)
	const router = useRouter()

	const onSubmit = (evt: SyntheticEvent) => {
		evt.preventDefault()

		if (!name) {
			return alert('이름을 입력해 주세요.')
		}
		if (!mbti1 || !mbti2 || !mbti3 || !mbti4) {
			return alert('MBTI를 전부 선택해 주세요')
		}

		const mbti = `${mbti1}${mbti2}${mbti3}${mbti4}` as CharacterInterface['mbti']
		setMyProfile({
			id: MY_PROFILE_ID,
			name,
			mbti
		})

		router.push('/')
	}

	return (
		<Container>
			<form onSubmit={onSubmit}>
				<label className="my-name">
					<p>📛 내 이름</p>
					<input
						type="text"
						placeholder="키시쿤"
						defaultValue={name}
						onChange={evt => setName(evt.target.value)}
						maxLength={12}
					/>
				</label>
				<fieldset>
					<RadioGroup name="mbti1" value={mbti1} onChange={setMbti1}>
						<StyledRadioButton value="E" color={COLOR.RELATION_COLOR2}>
							<p className="mbti-char">E</p>
							<div className="mbti-desc">
								<p>외향형</p>
								<p>사교적이며 활동적인</p>
							</div>
						</StyledRadioButton>
						<Arrow>⇆</Arrow>
						<StyledRadioButton value="I" color={COLOR.RELATION_COLOR2}>
							<p className="mbti-char">I</p>
							<div className="mbti-desc">
								<p>내향형</p>
								<p>깊이있는 대인관계</p>
							</div>
						</StyledRadioButton>
					</RadioGroup>
					<RadioGroup name="mbti2" value={mbti2} onChange={setMbti2}>
						<StyledRadioButton value="S" color={COLOR.RELATION_COLOR3}>
							<p className="mbti-char">S</p>
							<div className="mbti-desc">
								<p>감각형</p>
								<p>오감에 의존하며 철저한</p>
							</div>
						</StyledRadioButton>
						<Arrow>⇆</Arrow>
						<StyledRadioButton value="N" color={COLOR.RELATION_COLOR3}>
							<p className="mbti-char">N</p>
							<div className="mbti-desc">
								<p>직관형</p>
								<p>영감에 의존하며 신속한</p>
							</div>
						</StyledRadioButton>
					</RadioGroup>
					<RadioGroup name="mbti3" value={mbti3} onChange={setMbti3}>
						<StyledRadioButton value="T" color={COLOR.RELATION_COLOR4}>
							<p className="mbti-char">T</p>
							<div className="mbti-desc">
								<p>사고형</p>
								<p>분석적이고 논리적인</p>
							</div>
						</StyledRadioButton>
						<Arrow>⇆</Arrow>
						<StyledRadioButton value="F" color={COLOR.RELATION_COLOR4}>
							<p className="mbti-char">F</p>
							<div className="mbti-desc">
								<p>감정형</p>
								<p>사람관계에 관심 갖는</p>
							</div>
						</StyledRadioButton>
					</RadioGroup>
					<RadioGroup name="mbti4" value={mbti4} onChange={setMbti4}>
						<StyledRadioButton value="J" color={COLOR.RELATION_COLOR5}>
							<p className="mbti-char">J</p>
							<div className="mbti-desc">
								<p>판단형</p>
								<p>철저하고 계획적인</p>
							</div>
						</StyledRadioButton>
						<Arrow>⇆</Arrow>
						<StyledRadioButton value="P" color={COLOR.RELATION_COLOR5}>
							<p className="mbti-char">P</p>
							<div className="mbti-desc">
								<p>인식형</p>
								<p>자율적이고 융통성 있는</p>
							</div>
						</StyledRadioButton>
					</RadioGroup>
				</fieldset>
				<Section>
					<p className="result">
						<span style={{ color: COLOR.RELATION_COLOR2 }}>{mbti1 || '?'}</span>
						<span style={{ color: COLOR.RELATION_COLOR3 }}>{mbti2 || '?'}</span>
						<span style={{ color: COLOR.RELATION_COLOR4 }}>{mbti3 || '?'}</span>
						<span style={{ color: COLOR.RELATION_COLOR5 }}>{mbti4 || '?'}</span>
					</p>
					<button type="submit">내 MBTI 추가</button>
				</Section>
			</form>
		</Container>
	)
}

const Arrow = styled.span`
	font-size: 48px;
	color: ${COLOR.GRAY3};
`

const Container = styled.main`
	width: 500px;
	margin: 50px auto 100px;
	.my-name {
		display: block;
		margin-bottom: 30px;
		& > p {
			font-weight: bold;
			font-size: 20px;
			margin-bottom: 8px;
		}
		input {
			width: 100%;
			padding: 14px 20px;
			border: 2px solid ${COLOR.GRAY1};
			border-radius: 10px;
		}
	}
	fieldset {
		margin-bottom: 30px;
		.radio-group-container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 20px;
		}
	}
`

const StyledRadioButton = styled(RadioButton)`
	.mbti-char {
		margin: 12px 0 6px 0;
		font-size: 50px;
		font-weight: bold;
		text-align: center;
		color: ${({ color }) => color};
	}
	.mbti-desc {
		p {
			text-align: center;
			&:first-child {
				margin-bottom: 2px;
				font-weight: bold;
			}
		}
	}
`

const Section = styled.div`
	display: flex;
	justify-content: space-between;
	.result {
		display: flex;
		justify-content: space-evenly;
		width: 310px;
		border: 2px dashed ${COLOR.GRAY1};
		border-radius: 4px;
		font-size: 50px;
	}
	button {
		width: 160px;
		background-color: ${COLOR.PRIMARY};
		color: ${COLOR.WHITE};
		border: 3px solid ${COLOR.ACCENT};
		border-radius: 10px;
		text-shadow: 0 0 3px ${COLOR.DARK};
		font-weight: bold;
		font-size: 18px;
		box-shadow: 0 0 3px ${COLOR.DARK};
	}
`
