import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"
import { auth, db } from "../firebaseConfig"
import { Link } from "expo-router"
import { collection } from "firebase/firestore/lite"

export default function Page() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	return (
		<View className="items-center justify-center flex-1">
			<Text className="text-4xl">Login!!</Text>
			<TextInput value={email} onChangeText={setEmail} className="border w-full" />
			<TextInput value={password} onChangeText={setPassword} className="border w-full" />
			<Button
				title="Login"
				onPress={async () => {
					// const userCred = await createUserWithEmailAndPassword(auth, email, password)
					const userCred = await signInWithEmailAndPassword(auth, email, password)
					const user = userCred.user
					console.log({ user })
				}}
			/>
			<Link href="/taps">Signup</Link>
			{/* <Button
				title="add"
				onPress={() => {
					collection(db, "taps").add({
						value: 9,
					})
				}}
			/> */}
		</View>
	)
}
