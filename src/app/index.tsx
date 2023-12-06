import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"

export default function Page() {
	return (
		<View className="items-center justify-center flex-1">
			<Text className="text-4xl">Openaa ng on your app!</Text>
			<StatusBar style="auto" />
		</View>
	)
}
