import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import { Text, View } from "react-native"
import { db, getCities } from "../firebaseConfig"

export default function Page() {
	useEffect(() => {
		const doIt = async () => {
			const a = await getCities(db)
			console.log({ a })
		}
		doIt()
	}, [])

	return (
		<View className="items-center justify-center flex-1">
			<Text className="text-4xl">Openaa ng on your app!</Text>
			<StatusBar style="auto" />
		</View>
	)
}
