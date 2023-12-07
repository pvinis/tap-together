import { signInWithEmailAndPassword } from "firebase/auth"
import { useAtom } from "jotai"
import { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"
import { auth } from "../firebaseConfig"
import { userUIDAtom } from "../atoms"
import { useRouter } from "expo-router"

export default function Login() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [, setUserUID] = useAtom(userUIDAtom)
	const router = useRouter()

	const [mode, setMode] = useState<"signup" | "login">("login")
	const toggleMode = () => setMode(mode === "login" ? "signup" : "login")

	return (
		<View className="items-center justify-center flex-1">
			<Text className="text-4xl">Login!!</Text>
			<TextInput value={email} onChangeText={setEmail} className="border w-full" />
			<TextInput value={password} onChangeText={setPassword} className="border w-full" />
			<Button
				title="Login"
				onPress={async () => {
					try {
						/// const userCred = await createUserWithEmailAndPassword(auth, email, password)
						const userCred = await signInWithEmailAndPassword(auth, email, password)
						const user = userCred.user
						setUserUID(user.uid)
						router.replace("/(auth)")
					} catch (error) {
						console.log({ error })
					}
				}}
			/>
			<Button title={(mode === "login" ? "Sign up" : "Log in") + " instead"} onPress={toggleMode} />
		</View>
	)
}
