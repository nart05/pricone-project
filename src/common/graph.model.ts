import { Edge, Options } from 'react-graph-vis'

import { COLOR, MBTI } from './app.model'

export const RADIUS = 300

export const graphOptions: Options = {
	interaction: {
		zoomView: false
	},
	nodes: {
		physics: false,
		borderWidth: 5,
		borderWidthSelected: 10,
		scaling: {
			max: 40,
			min: 40
		},
		size: 40,
		widthConstraint: {
			maximum: 80,
			minimum: 80
		},
		color: {
			background: COLOR.WHITE,
			border: COLOR.ACCENT,
			highlight: {
				background: COLOR.WHITE,
				border: COLOR.ACCENT
			}
		},
		margin: {
			top: 10,
			bottom: 8,
			left: 10,
			right: 10
		}
	},
	edges: {
		arrows: {
			to: false
		},
		smooth: {
			enabled: true,
			roundness: 0.2,
			type: 'dynamic'
		},
		scaling: {
			max: 10
		},
		value: 10,
		font: {
			align: 'top'
		},
		chosen: {
			edge: values => {
				values.width = 10
			},
			label: values => {
				values.size = 30
				values.strokeWidth = 3
				values.strokeColor = COLOR.DARK
			}
		} as any
	}
}

// 천생연분
const relationEdge1: Edge = {
	color: {
		color: COLOR.RELATION_COLOR1,
		highlight: COLOR.RELATION_COLOR1
	},
	label: '천생연분',
	font: {
		color: COLOR.RELATION_COLOR1
	}
}
// 좋음
const relationEdge2: Edge = {
	color: {
		color: COLOR.RELATION_COLOR2,
		highlight: COLOR.RELATION_COLOR2
	},
	label: '좋음',
	font: {
		color: COLOR.RELATION_COLOR2
	}
}
// 무난
const relationEdge3: Edge = {
	color: {
		color: COLOR.RELATION_COLOR3,
		highlight: COLOR.RELATION_COLOR3
	},
	label: '무난',
	font: {
		color: COLOR.RELATION_COLOR3
	}
}
// 그닥
const relationEdge4: Edge = {
	color: {
		color: COLOR.RELATION_COLOR4,
		highlight: COLOR.RELATION_COLOR4
	},
	label: '그닥',
	font: {
		color: COLOR.RELATION_COLOR4
	}
}
// 파국
const relationEdge5: Edge = {
	color: {
		color: COLOR.RELATION_COLOR5,
		highlight: COLOR.RELATION_COLOR5
	},
	label: '파국',
	font: {
		color: COLOR.RELATION_COLOR5
	}
}

export const mbtiEdges = new Map<`${MBTI}-${MBTI}`, Edge>([
	['ENTJ-ENTJ', relationEdge5],
	['ENTJ-ENTP', relationEdge4],
	['ENTJ-INTJ', relationEdge3],
	['ENTJ-INTP', relationEdge3],
	['ENTJ-ESTJ', relationEdge4],
	['ENTJ-ESFJ', relationEdge5],
	['ENTJ-ISTJ', relationEdge4],
	['ENTJ-ISFJ', relationEdge5],
	['ENTJ-ENFJ', relationEdge4],
	['ENTJ-ENFP', relationEdge3],
	['ENTJ-INFJ', relationEdge3],
	['ENTJ-INFP', relationEdge1],
	['ENTJ-ESTP', relationEdge2],
	['ENTJ-ESFP', relationEdge2],
	['ENTJ-ISTP', relationEdge3],
	['ENTJ-ISFP', relationEdge1],

	['ENTP-ENTJ', relationEdge4],
	['ENTP-ENTP', relationEdge2],
	['ENTP-INTJ', relationEdge3],
	['ENTP-INTP', relationEdge3],
	['ENTP-ESTJ', relationEdge2],
	['ENTP-ESFJ', relationEdge2],
	['ENTP-ISTJ', relationEdge1],
	['ENTP-ISFJ', relationEdge1],
	['ENTP-ENFJ', relationEdge3],
	['ENTP-ENFP', relationEdge4],
	['ENTP-INFJ', relationEdge3],
	['ENTP-INFP', relationEdge3],
	['ENTP-ESTP', relationEdge4],
	['ENTP-ESFP', relationEdge5],
	['ENTP-ISTP', relationEdge4],
	['ENTP-ISFP', relationEdge5],

	['INTJ-ENTJ', relationEdge3],
	['INTJ-ENTP', relationEdge3],
	['INTJ-INTJ', relationEdge3],
	['INTJ-INTP', relationEdge4],
	['INTJ-ESTJ', relationEdge4],
	['INTJ-ESFJ', relationEdge5],
	['INTJ-ISTJ', relationEdge3],
	['INTJ-ISFJ', relationEdge5],
	['INTJ-ENFJ', relationEdge3],
	['INTJ-ENFP', relationEdge3],
	['INTJ-INFJ', relationEdge3],
	['INTJ-INFP', relationEdge2],
	['INTJ-ESTP', relationEdge1],
	['INTJ-ESFP', relationEdge1],
	['INTJ-ISTP', relationEdge3],
	['INTJ-ISFP', relationEdge2],

	['INTP-ENTJ', relationEdge3],
	['INTP-ENTP', relationEdge3],
	['INTP-INTJ', relationEdge4],
	['INTP-INTP', relationEdge3],
	['INTP-ESTJ', relationEdge2],
	['INTP-ESFJ', relationEdge1],
	['INTP-ISTJ', relationEdge3],
	['INTP-ISFJ', relationEdge1],
	['INTP-ENFJ', relationEdge1],
	['INTP-ENFP', relationEdge3],
	['INTP-INFJ', relationEdge2],
	['INTP-INFP', relationEdge4],
	['INTP-ESTP', relationEdge4],
	['INTP-ESFP', relationEdge5],
	['INTP-ISTP', relationEdge4],
	['INTP-ISFP', relationEdge5],

	['ESTJ-ENTJ', relationEdge4],
	['ESTJ-ENTP', relationEdge2],
	['ESTJ-INTJ', relationEdge4],
	['ESTJ-INTP', relationEdge2],
	['ESTJ-ESTJ', relationEdge3],
	['ESTJ-ESFJ', relationEdge4],
	['ESTJ-ISTJ', relationEdge3],
	['ESTJ-ISFJ', relationEdge3],
	['ESTJ-ENFJ', relationEdge5],
	['ESTJ-ENFP', relationEdge3],
	['ESTJ-INFJ', relationEdge5],
	['ESTJ-INFP', relationEdge1],
	['ESTJ-ESTP', relationEdge5],
	['ESTJ-ESFP', relationEdge3],
	['ESTJ-ISTP', relationEdge3],
	['ESTJ-ISFP', relationEdge1],

	['ESFJ-ENTJ', relationEdge5],
	['ESFJ-ENTP', relationEdge2],
	['ESFJ-INTJ', relationEdge5],
	['ESFJ-INTP', relationEdge1],
	['ESFJ-ESTJ', relationEdge4],
	['ESFJ-ESFJ', relationEdge3],
	['ESFJ-ISTJ', relationEdge3],
	['ESFJ-ISFJ', relationEdge3],
	['ESFJ-ENFJ', relationEdge3],
	['ESFJ-ENFP', relationEdge2],
	['ESFJ-INFJ', relationEdge4],
	['ESFJ-INFP', relationEdge3],
	['ESFJ-ESTP', relationEdge3],
	['ESFJ-ESFP', relationEdge4],
	['ESFJ-ISTP', relationEdge1],
	['ESFJ-ISFP', relationEdge3],

	['ISTJ-ENTJ', relationEdge4],
	['ISTJ-ENTP', relationEdge1],
	['ISTJ-INTJ', relationEdge3],
	['ISTJ-INTP', relationEdge3],
	['ISTJ-ESTJ', relationEdge3],
	['ISTJ-ESFJ', relationEdge3],
	['ISTJ-ISTJ', relationEdge3],
	['ISTJ-ISFJ', relationEdge4],
	['ISTJ-ENFJ', relationEdge5],
	['ISTJ-ENFP', relationEdge1],
	['ISTJ-INFJ', relationEdge5],
	['ISTJ-INFP', relationEdge2],
	['ISTJ-ESTP', relationEdge3],
	['ISTJ-ESFP', relationEdge3],
	['ISTJ-ISTP', relationEdge4],
	['ISTJ-ISFP', relationEdge2],

	['ISFJ-ENTJ', relationEdge5],
	['ISFJ-ENTP', relationEdge1],
	['ISFJ-INTJ', relationEdge5],
	['ISFJ-INTP', relationEdge1],
	['ISFJ-ESTJ', relationEdge3],
	['ISFJ-ESFJ', relationEdge3],
	['ISFJ-ISTJ', relationEdge4],
	['ISFJ-ISFJ', relationEdge4],
	['ISFJ-ENFJ', relationEdge4],
	['ISFJ-ENFP', relationEdge1],
	['ISFJ-INFJ', relationEdge4],
	['ISFJ-INFP', relationEdge3],
	['ISFJ-ESTP', relationEdge3],
	['ISFJ-ESFP', relationEdge3],
	['ISFJ-ISTP', relationEdge2],
	['ISFJ-ISFP', relationEdge5],

	['ENFJ-ENTJ', relationEdge4],
	['ENFJ-ENTP', relationEdge3],
	['ENFJ-INTJ', relationEdge3],
	['ENFJ-INTP', relationEdge1],
	['ENFJ-ESTJ', relationEdge5],
	['ENFJ-ESFJ', relationEdge3],
	['ENFJ-ISTJ', relationEdge5],
	['ENFJ-ISFJ', relationEdge4],
	['ENFJ-ENFJ', relationEdge2],
	['ENFJ-ENFP', relationEdge4],
	['ENFJ-INFJ', relationEdge3],
	['ENFJ-INFP', relationEdge3],
	['ENFJ-ESTP', relationEdge2],
	['ENFJ-ESFP', relationEdge2],
	['ENFJ-ISTP', relationEdge1],
	['ENFJ-ISFP', relationEdge3],

	['ENFP-ENTJ', relationEdge3],
	['ENFP-ENTP', relationEdge4],
	['ENFP-INTJ', relationEdge3],
	['ENFP-INTP', relationEdge3],
	['ENFP-ESTJ', relationEdge2],
	['ENFP-ESFJ', relationEdge2],
	['ENFP-ISTJ', relationEdge1],
	['ENFP-ISFJ', relationEdge1],
	['ENFP-ENFJ', relationEdge4],
	['ENFP-ENFP', relationEdge3],
	['ENFP-INFJ', relationEdge3],
	['ENFP-INFP', relationEdge4],
	['ENFP-ESTP', relationEdge5],
	['ENFP-ESFP', relationEdge5],
	['ENFP-ISTP', relationEdge5],
	['ENFP-ISFP', relationEdge3],

	['INFJ-ENTJ', relationEdge3],
	['INFJ-ENTP', relationEdge3],
	['INFJ-INTJ', relationEdge3],
	['INFJ-INTP', relationEdge2],
	['INFJ-ESTJ', relationEdge5],
	['INFJ-ESFJ', relationEdge4],
	['INFJ-ISTJ', relationEdge5],
	['INFJ-ISFJ', relationEdge4],
	['INFJ-ENFJ', relationEdge3],
	['INFJ-ENFP', relationEdge3],
	['INFJ-INFJ', relationEdge3],
	['INFJ-INFP', relationEdge5],
	['INFJ-ESTP', relationEdge1],
	['INFJ-ESFP', relationEdge1],
	['INFJ-ISTP', relationEdge1],
	['INFJ-ISFP', relationEdge3],

	['INFP-ENTJ', relationEdge1],
	['INFP-ENTP', relationEdge3],
	['INFP-INTJ', relationEdge2],
	['INFP-INTP', relationEdge4],
	['INFP-ESTJ', relationEdge1],
	['INFP-ESFJ', relationEdge3],
	['INFP-ISTJ', relationEdge2],
	['INFP-ISFJ', relationEdge3],
	['INFP-ENFJ', relationEdge3],
	['INFP-ENFP', relationEdge4],
	['INFP-INFJ', relationEdge5],
	['INFP-INFP', relationEdge3],
	['INFP-ESTP', relationEdge5],
	['INFP-ESFP', relationEdge4],
	['INFP-ISTP', relationEdge4],
	['INFP-ISFP', relationEdge4],

	['ESTP-ENTJ', relationEdge2],
	['ESTP-ENTP', relationEdge4],
	['ESTP-INTJ', relationEdge1],
	['ESTP-INTP', relationEdge4],
	['ESTP-ESTJ', relationEdge5],
	['ESTP-ESFJ', relationEdge3],
	['ESTP-ISTJ', relationEdge3],
	['ESTP-ISFJ', relationEdge3],
	['ESTP-ENFJ', relationEdge2],
	['ESTP-ENFP', relationEdge5],
	['ESTP-INFJ', relationEdge1],
	['ESTP-INFP', relationEdge5],
	['ESTP-ESTP', relationEdge3],
	['ESTP-ESFP', relationEdge4],
	['ESTP-ISTP', relationEdge3],
	['ESTP-ISFP', relationEdge3],

	['ESFP-ENTJ', relationEdge2],
	['ESFP-ENTP', relationEdge5],
	['ESFP-INTJ', relationEdge1],
	['ESFP-INTP', relationEdge5],
	['ESFP-ESTJ', relationEdge3],
	['ESFP-ESFJ', relationEdge4],
	['ESFP-ISTJ', relationEdge3],
	['ESFP-ISFJ', relationEdge3],
	['ESFP-ENFJ', relationEdge2],
	['ESFP-ENFP', relationEdge5],
	['ESFP-INFJ', relationEdge1],
	['ESFP-INFP', relationEdge4],
	['ESFP-ESTP', relationEdge4],
	['ESFP-ESFP', relationEdge4],
	['ESFP-ISTP', relationEdge3],
	['ESFP-ISFP', relationEdge3],

	['ISTP-ENTJ', relationEdge3],
	['ISTP-ENTP', relationEdge4],
	['ISTP-INTJ', relationEdge3],
	['ISTP-INTP', relationEdge4],
	['ISTP-ESTJ', relationEdge3],
	['ISTP-ESFJ', relationEdge1],
	['ISTP-ISTJ', relationEdge4],
	['ISTP-ISFJ', relationEdge2],
	['ISTP-ENFJ', relationEdge1],
	['ISTP-ENFP', relationEdge5],
	['ISTP-INFJ', relationEdge1],
	['ISTP-INFP', relationEdge5],
	['ISTP-ESTP', relationEdge3],
	['ISTP-ESFP', relationEdge3],
	['ISTP-ISTP', relationEdge4],
	['ISTP-ISFP', relationEdge4],

	['ISFP-ENTJ', relationEdge1],
	['ISFP-ENTP', relationEdge5],
	['ISFP-INTJ', relationEdge2],
	['ISFP-INTP', relationEdge5],
	['ISFP-ESTJ', relationEdge1],
	['ISFP-ESFJ', relationEdge3],
	['ISFP-ISTJ', relationEdge2],
	['ISFP-ISFJ', relationEdge5],
	['ISFP-ENFJ', relationEdge3],
	['ISFP-ENFP', relationEdge3],
	['ISFP-INFJ', relationEdge3],
	['ISFP-INFP', relationEdge4],
	['ISFP-ESTP', relationEdge3],
	['ISFP-ESFP', relationEdge3],
	['ISFP-ISTP', relationEdge4],
	['ISFP-ISFP', relationEdge3]
])
