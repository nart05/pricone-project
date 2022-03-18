import { atom, atomFamily, selector } from 'recoil'

import { CharacterInterface, characters } from './app.model'

export const charactersState = atom<CharacterInterface[]>({
	key: 'CharactersState',
	default: characters
})

export const characterSelectedState = atomFamily<boolean, number>({
	key: 'CharacterSelectedState',
	default: false
})

export const selectedCharactersState = selector({
	key: 'SelectedCharactersState',
	get: ({ get }) => {
		const characters = get(charactersState)
		const filteredCharacters = characters.filter(({ id }) => get(characterSelectedState(id)))
		const myProfile = get(myProfileState)

		if (myProfile) filteredCharacters.unshift(myProfile)

		return filteredCharacters
	}
})

export const myProfileState = atom<CharacterInterface>({
	key: 'MyProfileState',
	default: null
})

export const isSelectState = selector({
	key: 'IsSelectState',
	get: ({ get }) => {
		const characters = get(charactersState)
		const filteredCharacters = characters.filter(({ id }) => get(characterSelectedState(id)))

		return filteredCharacters.length < 10
	}
})

export const myCenterModeState = atom({
	key: 'MyCenterModeState',
	default: false
})
