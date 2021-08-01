import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
		fontFamily: 'netflix-sans',
	},
	tags: {
		flex: 1,
		flexDirection: "row",
		// backgroundColor: "red",
		marginBottom: 10,
	},
	details: {
		flex: 1,
	},
	iconButtons: {
		flex: 3,
		flexDirection: "row",
		marginVertical: 10,
	},
	image: {
		width: "100%",
		aspectRatio: 16 / 9,
		resizeMode: "cover"
	},
	title: {
		color: "white",
		fontSize: 28,
		fontFamily: 'netflix-sans-medium',
		marginTop: 10,
		marginBottom: 10
	},
	match: {
		color: "#68f062",
		fontSize: 16,
		fontFamily: 'netflix-sans-medium',
		flex: 3,
	},
	year: {
		flex: 2,
		color: "#888",
		fontSize: 16,
		fontFamily: 'netflix-sans'
	},
	ageContainer: {
		flex: 1,
		flexDirection: "row",
		borderRadius: 5,
		justifyContent: "center",
		height: 20,
		backgroundColor: "yellow"
	},
	age: {
		fontFamily: "netflix-sans-medium"
	},
	numberOfSeasons: {
		flex: 3,
		color: "#888",
		fontSize: 16,
		fontFamily: 'netflix-sans',
		textAlign: "center",
	},
	hdContainer: {
		flex: 1,
		borderColor: "#888",
		borderWidth: 1,
		borderRadius: 5,
		fontFamily: "netflix-sans-medium",
		flexDirection: "row",
		justifyContent: "center",
		height: 20,
		backgroundColor: "transparent"
	},
	hd: {
		fontFamily: "netflix-sans-medium",
		color: "#aaa",
	},
	playText: {
		fontFamily: 'netflix-sans-medium',
		fontSize: 18,
	},
	playButton: {
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: "white",
		borderRadius: 5,
		alignItems: "center",
		height: 40,
	},
	downloadButton: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: "#333",
		borderRadius: 5,
		alignItems: "center",
		height: 40,
	},
	downloadText: {
		fontFamily: 'netflix-sans-medium',
		fontSize: 18,
		color: "white",
	},
})

export default styles