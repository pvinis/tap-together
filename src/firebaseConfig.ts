import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

export async function getCities(db) {
	const citiesCol = collection(db, "taps")
	const citySnapshot = await getDocs(citiesCol)
	const cityList = citySnapshot.docs.map((doc) => doc.data())
	return cityList
}
