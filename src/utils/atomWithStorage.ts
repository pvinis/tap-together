import { atomWithStorage as atomWithStorageOrig, createJSONStorage } from "jotai/utils"
import { MMKVStorage } from "./MMKVStorage"

export const atomWithStorage = <T>(key: string, initialValue: T) =>
	atomWithStorageOrig<T>(
		key,
		initialValue,
		createJSONStorage<T>(() => ({
			getItem: MMKVStorage.getItem,
			setItem: MMKVStorage.setItem,
			removeItem: MMKVStorage.removeItem,
			clearAll: MMKVStorage.clearAll,
		}))
	)
