import { signInWithEmailAndPassword } from "firebase/auth"
import { useAtom } from "jotai"
import { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"
import { auth } from "../firebaseConfig"
import { Link } from "expo-router"
import { userUIDAtom } from "../atoms"

export default function Page() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [, setUserUID] = useAtom(userUIDAtom)

	return (
		<View className="items-center justify-center flex-1">
			<Text className="text-4xl">Login!!</Text>
			<TextInput value={email} onChangeText={setEmail} className="border w-full" />
			<TextInput value={password} onChangeText={setPassword} className="border w-full" />
			<Button
				title="Login"
				onPress={async () => {
					try {
						// const userCred = await createUserWithEmailAndPassword(auth, email, password)
						const userCred = await signInWithEmailAndPassword(auth, email, password)
						const user = userCred.user
						setUserUID(user.uid)
					} catch (error) {
						console.log({ error })
					}
				}}
			/>
			<Link href="/taps">Signup</Link>
		</View>
	)
}
