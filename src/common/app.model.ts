export enum COLOR {
	PRIMARY = '#5590ff',
	ACCENT = '#efdf9c',
	DARK = '#262626',
	WARN = '#ef6c00',
	GRAY1 = '#d6d6d6',
	GRAY2 = '#b8b8b8',
	GRAY3 = '#8f8f8f',
	WHITE = '#ffffff',
	RELATION_COLOR1 = '#5590ff',
	RELATION_COLOR2 = '#7b68ee',
	RELATION_COLOR3 = '#40E0D0',
	RELATION_COLOR4 = '#fa8072',
	RELATION_COLOR5 = '#dc143c'
}

export const MY_PROFILE_ID = 0

export type MBTIType1 = 'E' | 'I'
export type MBTIType2 = 'S' | 'N'
export type MBTIType3 = 'T' | 'F'
export type MBTIType4 = 'J' | 'P'
export type MBTI = `${MBTIType1}${MBTIType2}${MBTIType3}${MBTIType4}`

export interface CharacterInterface {
	id: number
	name: string
	mbti: MBTI
}

export const characters: CharacterInterface[] = [
	{
		id: 1,
		name: '나나카',
		mbti: 'ENTP'
	},
	{
		id: 2,
		name: '네네카',
		mbti: 'INTJ'
	},
	{
		id: 3,
		name: '노조미',
		mbti: 'ESFJ'
	},
	{
		id: 4,
		name: '니논',
		mbti: 'ENFP'
	},
	{
		id: 5,
		name: '라비리스타',
		mbti: 'ENTP'
	},
	{
		id: 6,
		name: '레이',
		mbti: 'ISTJ'
	},
	{
		id: 7,
		name: '루카',
		mbti: 'ESFJ'
	},
	{
		id: 8,
		name: '리노',
		mbti: 'ENFP'
	},
	{
		id: 9,
		name: '리마',
		mbti: 'ENFP'
	},
	{
		id: 10,
		name: '린',
		mbti: 'INTP'
	},
	{
		id: 11,
		name: '마츠리',
		mbti: 'ENFP'
	},
	{
		id: 12,
		name: '마코토',
		mbti: 'ESTP'
	},
	{
		id: 13,
		name: '마호',
		mbti: 'INFP'
	},
	{
		id: 14,
		name: '마히루',
		mbti: 'ENFP'
	},
	{
		id: 15,
		name: '모니카',
		mbti: 'ENTJ'
	},
	{
		id: 16,
		name: '무이미',
		mbti: 'ENFJ'
	},
	{
		id: 17,
		name: '미미',
		mbti: 'INFP'
	},
	{
		id: 18,
		name: '미사키',
		mbti: 'ENTP'
	},
	{
		id: 19,
		name: '미사토',
		mbti: 'ENFJ'
	},
	{
		id: 20,
		name: '미소기',
		mbti: 'ESTP'
	},
	{
		id: 21,
		name: '미야코',
		mbti: 'ESFP'
	},
	{
		id: 22,
		name: '미츠키',
		mbti: 'INTP'
	},
	{
		id: 23,
		name: '미후유',
		mbti: 'ISTJ'
	},
	{
		id: 24,
		name: '사렌',
		mbti: 'ESTJ'
	},
	{
		id: 25,
		name: '셰피',
		mbti: 'ISFJ'
	},
	{
		id: 26,
		name: '스즈나',
		mbti: 'ESFP'
	},
	{
		id: 27,
		name: '스즈메',
		mbti: 'ISFJ'
	},
	{
		id: 28,
		name: '시노부',
		mbti: 'INFJ'
	},
	{
		id: 29,
		name: '시오리',
		mbti: 'ISFP'
	},
	{
		id: 30,
		name: '시즈루',
		mbti: 'ENFJ'
	},
	{
		id: 31,
		name: '아야네',
		mbti: 'INFP'
	},
	{
		id: 32,
		name: '아오이',
		mbti: 'INFP'
	},
	{
		id: 33,
		name: '아유미',
		mbti: 'ISFP'
	},
	{
		id: 34,
		name: '아카리',
		mbti: 'ENTP'
	},
	{
		id: 35,
		name: '아키노',
		mbti: 'ESTJ'
	},
	{
		id: 36,
		name: '안나',
		mbti: 'ISFP'
	},
	{
		id: 37,
		name: '에리코',
		mbti: 'INFJ'
	},
	{
		id: 38,
		name: '요리',
		mbti: 'INTP'
	},
	{
		id: 39,
		name: '유니',
		mbti: 'INTP'
	},
	{
		id: 40,
		name: '유이',
		mbti: 'ISFJ'
	},
	{
		id: 41,
		name: '유카리',
		mbti: 'ISFP'
	},
	{
		id: 42,
		name: '유키',
		mbti: 'ENTP'
	},
	{
		id: 43,
		name: '이노리',
		mbti: 'INTJ'
	},
	{
		id: 44,
		name: '이리야',
		mbti: 'ENTJ'
	},
	{
		id: 45,
		name: '이오',
		mbti: 'ESFJ'
	},
	{
		id: 46,
		name: '쥰',
		mbti: 'ISFJ'
	},
	{
		id: 47,
		name: '츠무기',
		mbti: 'ENTP'
	},
	{
		id: 48,
		name: '치에루',
		mbti: 'ENTP'
	},
	{
		id: 49,
		name: '치카',
		mbti: 'INFJ'
	},
	{
		id: 50,
		name: '카린',
		mbti: 'ESTJ'
	},
	{
		id: 51,
		name: '카스미',
		mbti: 'INTJ'
	},
	{
		id: 52,
		name: '카야',
		mbti: 'ESFP'
	},
	{
		id: 53,
		name: '카오리',
		mbti: 'ESFP'
	},
	{
		id: 54,
		name: '캬루',
		mbti: 'ESTJ'
	},
	{
		id: 55,
		name: '콧코로',
		mbti: 'ISFJ'
	},
	{
		id: 56,
		name: '쿄우카',
		mbti: 'ISFJ'
	},
	{
		id: 57,
		name: '쿠루미',
		mbti: 'INFJ'
	},
	{
		id: 58,
		name: '쿠우카',
		mbti: 'INFP'
	},
	{
		id: 59,
		name: '크레짓타',
		mbti: 'ISTJ'
	},
	{
		id: 60,
		name: '크리스티나',
		mbti: 'ENTJ'
	},
	{
		id: 61,
		name: '클로에',
		mbti: 'ISFP'
	},
	{
		id: 62,
		name: '타마키',
		mbti: 'ESFP'
	},
	{
		id: 63,
		name: '토모',
		mbti: 'ENTJ'
	},
	{
		id: 64,
		name: '페코린느',
		mbti: 'ESFP'
	},
	{
		id: 65,
		name: '하츠네',
		mbti: 'ESFP'
	},
	{
		id: 66,
		name: '호마레',
		mbti: 'INTJ'
	},
	{
		id: 67,
		name: '히요리',
		mbti: 'ESFP'
	}
]
