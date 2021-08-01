import * as React from 'react';
import {View} from "../Themed";
import {MonoText} from "../StyledText";
import {Image, Text} from "react-native";
import styles from "./styles";
import {AntDesign} from "@expo/vector-icons";

interface EpisodeItemProps {
	episode: {
		id: string,
		title: string,
		poster: string,
		duration: string,
		plot: string,
		video: string
	}
}

const EpisodeItem = (props: EpisodeItemProps) => {
	const {episode} = props;
	return <View style={styles.container}>
		<View style={{flexDirection: "row", alignItems: "center"}}>
			<Image source={{uri: episode.poster}} style={styles.poster} />
			<View style={styles.titleDuration}>
				<Text style={styles.title}>{episode.title}</Text>
				<Text style={styles.duration}>{episode.duration}</Text>
			</View>
			<AntDesign name="download" size={20} color="white" style={{flex: 1}}/>
		</View>
		<MonoText style={{color: "#888", marginVertical: 10}}>{episode.plot}</MonoText>
	</View>;
}

export default EpisodeItem;