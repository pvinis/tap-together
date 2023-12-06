import { useAtom } from "jotai"
import { userUIDAtom } from "../atoms"
import { Redirect } from "expo-router"

export default function Root() {
	const userUID = useAtom(userUIDAtom)

	if (userUID === undefined) {
		return <Redirect href="/login" />
	}

	return null
}
