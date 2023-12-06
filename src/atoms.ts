import { atomWithStorage } from "./utils/atomWithStorage"

export const userUIDAtom = atomWithStorage<string | undefined>("userUID", undefined)
