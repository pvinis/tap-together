import { useEffect, useState } from "react"
import { Button, Text, View } from "react-native"
import { auth, db } from "../../firebaseConfig"
import { signOut } from "firebase/auth"
import { userUIDAtom } from "../../atoms"
import { useAtom } from "jotai"
import { useRouter } from "expo-router"
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore"

export default function Main() {
	const [userUID, setUserUID] = useAtom(userUIDAtom)
	const router = useRouter()
	const [taps, setTaps] = useState<number | null>(null)

	useEffect(() => {
		const query = collection(db, "taps")

		const unsub = onSnapshot(
			query,
			(querySnapshot) => {
				setTaps(querySnapshot.size)
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
					await addDoc(tapsRef, { userUID: userUID })
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
