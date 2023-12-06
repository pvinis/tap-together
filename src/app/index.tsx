import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

export default function Page() {
	return (
		<View style={styles.container}>
			<Text className="text-4xl">Open ng on your app!</Text>
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
})
