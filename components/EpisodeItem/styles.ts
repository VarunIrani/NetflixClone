import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},
	poster: {
		flex: 4,
		height: 80,
		resizeMode: "contain",
	},
	titleDuration: {
		flex: 6,
		marginLeft: 10
	},
	title: {
		fontFamily: "netflix-sans-medium",
		color: "darkgrey"
	},
	duration: {
		fontFamily: "netflix-sans",
		color: "#888"
	}
});

export default styles;