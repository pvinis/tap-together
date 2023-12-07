import { atomWithStorage } from "./utils/atomWithStorage"

export const userUIDAtom = atomWithStorage<string | null>("userUID", null)
