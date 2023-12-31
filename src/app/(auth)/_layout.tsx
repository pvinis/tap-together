import { useAtom } from "jotai"
import { userUIDAtom } from "../../atoms"
import { Redirect, Slot } from "expo-router"

export default function AuthRoot() {
	const [userUID] = useAtom(userUIDAtom)

	if (userUID === null) return <Redirect href="/login" />

	return <Slot />
}
