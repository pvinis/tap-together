import { MMKV } from "react-native-mmkv"

export const mmkvStorage = new MMKV()

function getItem<T>(key: string): T | null {
	const value = mmkvStorage.getString(key)
	return value ? JSON.parse(value) : null
}

function setItem<T>(key: string, value: T): void {
	mmkvStorage.set(key, JSON.stringify(value))
}

function removeItem(key: string): void {
	mmkvStorage.delete(key)
}

function clearAll(): void {
	mmkvStorage.clearAll()
}

export const MMKVStorage = {
	getItem,
	setItem,
	removeItem,
	clearAll,
}
