import { useEffect, useState } from "react"
import { Button, Text, View } from "react-native"
import { auth, db } from "../../firebaseConfig"
import { signOut } from "firebase/auth"
import { userUIDAtom } from "../../atoms"
import { useAtom } from "jotai"
import { useRouter } from "expo-router"
import { addDoc, collection, onSnapshot } from "firebase/firestore"
import SmartSettings from "local:smart-settings"

export default function Main() {
	const [userUID, setUserUID] = useAtom(userUIDAtom)
	const router = useRouter()
	const [taps, setTaps] = useState<number | null>(null)

	useEffect(() => {
		const query = collection(db, "taps")

		const unsub = onSnapshot(
			query,
			async (querySnapshot) => {
				setTaps(querySnapshot.size)
				SmartSettings.set("taps", querySnapshot.size, "group.is.pvin.tap-together.data")
			},
			(err) => {
				console.log(`Encountered error: ${err}`)
			}
		)

		return () => {
			unsub()
		}
	}, [])

	return (
		<View className="items-center justify-center flex-1">
			<Text className="text-4xl">Taps: {taps ?? "loading.."}</Text>
			<Button
				title="tap tap tap!"
				onPress={async () => {
					const tapsRef = collection(db, "taps")
					await addDoc(tapsRef, { userUID })
				}}
			/>
			<Button
				title="Log out"
				onPress={async () => {
					await signOut(auth)
					setUserUID(null)
					router.replace("/login")
				}}
			/>
		</View>
	)
}
