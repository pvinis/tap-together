import { ExpoConfig, ConfigContext } from "expo/config"
import packageJson from "./package.json"

export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	version: packageJson.version,
	name: "tap-together",
	slug: "tap-together",
	scheme: "tap-together",
	orientation: "portrait",
	icon: "./assets/icon.png",
	userInterfaceStyle: "light",
	splash: {
		image: "./assets/splash.png",
		resizeMode: "contain",
		backgroundColor: "#ffffff",
	},
	assetBundlePatterns: ["**/*"],
	ios: {
		bundleIdentifier: "is.pvin.tap-together",
		buildNumber: packageJson.build.toString(),
		supportsTablet: true,
		config: {
			usesNonExemptEncryption: false,
		},
		entitlements: {
			"com.apple.security.application-groups": ["group.is.pvin.tap-together.data"],
		},
	},
	android: {
		adaptiveIcon: {
			foregroundImage: "./assets/adaptive-icon.png",
			backgroundColor: "#ffffff",
		},
		package: "is.pvin.tap_together",
		versionCode: packageJson.build,
	},
	plugins: ["expo-router", ["@bacons/apple-targets", { appleTeamId: "CAG2W9M777" }]],
	experiments: { typedRoutes: true },
	extra: {
		eas: {
			projectId: "9903e8a0-3361-4bdd-abe4-be3890ea1f68",
			build: {
				experimental: {
					ios: {
						appExtensions: [
							{
								bundleIdentifier: "is.pvin.tap-together.widgets",
								targetName: "widgets",
								entitlements: {
									"com.apple.security.application-groups": ["group.is.pvin.tap-together.data"],
								},
							},
						],
					},
				},
			},
		},
	},
})
