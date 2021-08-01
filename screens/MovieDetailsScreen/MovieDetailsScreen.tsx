import * as React from 'react';
import {useState} from 'react';
import {View} from "../../components/Themed";
import {FlatList, Image, Pressable, Text} from "react-native";

import movie from "../../assets/data/movie";
import styles from "./styles";
import {AntDesign, Entypo, Feather, MaterialIcons} from "@expo/vector-icons";
import {MonoText} from "../../components/StyledText";
import EpisodeItem from "../../components/EpisodeItem";
import {Picker} from "@react-native-picker/picker";

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0]


const MovieDetailsScreen = () => {
	const seasonNames = movie.seasons.items.map((season) => season.name);

	const [currentSeason, setCurrentSeason] = useState(firstSeason);

	return <View style={styles.container}>
		<Image style={styles.image} source={{uri: firstEpisode.poster}}/>
		{/*<ScrollView style={styles.details}>*/}

		<FlatList data={currentSeason.episodes.items} renderItem={({item}) => <EpisodeItem episode={item}/>
		} ListHeaderComponent={(<View>
			<Text style={styles.title}>{movie.title}</Text>
			<View style={styles.tags}>
				<Text style={styles.match}>98% match</Text>
				<Text style={styles.year}>{movie.year}</Text>
				<View style={styles.ageContainer}>
					<Text style={styles.age}>12+</Text>
				</View>
				<Text style={styles.numberOfSeasons}>{movie.numberOfSeasons} Seasons</Text>
				<View style={styles.hdContainer}>
					<Text style={styles.hd}>HD</Text>
				</View>
			</View>
			{/*	Play Button */}
			<Pressable onPress={() => console.warn("Play")} style={styles.playButton}>
				<Entypo name="controller-play" size={28} color="black" style={{marginRight: 5}}/>
				<Text style={styles.playText}>
					Play
				</Text>
			</Pressable>
			{/*	Download Button */}
			<Pressable onPress={() => console.warn("Download")} style={styles.downloadButton}>
				<AntDesign name="download" size={20} color="white" style={{marginRight: 10}}/>
				<Text style={styles.downloadText}>
					Download
				</Text>
			</Pressable>
			{/*	Plot, Cast, Creator */}
			<MonoText style={{marginTop: 10}}>{movie.plot}</MonoText>
			<MonoText style={{marginTop: 10, color: "#888"}}>Cast: {movie.cast}</MonoText>
			<MonoText style={{marginTop: 1, color: "#888"}}>Creator: {movie.creator}</MonoText>
			{/*Icon Buttons*/}
			<View style={styles.iconButtons}>
				<View style={{alignItems: "center", marginLeft: 20, marginRight: 50}}>
					<MaterialIcons name="add" size={28} color="white" style={{marginBottom: 5}}/>
					<MonoText style={{color: "#888"}}>My List</MonoText>
				</View>
				<View style={{alignItems: "center", marginRight: 50}}>
					<AntDesign name="like2" size={24} color="white" style={{marginBottom: 9}}/>
					<MonoText style={{color: "#888"}}>Rate</MonoText>
				</View>
				<View style={{alignItems: "center", marginRight: 50}}>
					<Feather name="send" size={24} color="white" style={{marginBottom: 9}}/>
					<MonoText style={{color: "#888"}}>Share</MonoText>
				</View>
			</View>
			<Picker style={{color: "white", width: 130}} selectedValue={currentSeason.name} onValueChange={(itemValue, itemIndex) => {
				setCurrentSeason(movie.seasons.items[itemIndex]);
			}} dropdownIconColor="white">
				{seasonNames.map((seasonName, key) =>
					<Picker.Item value={seasonName} label={seasonName} key={key}/>)}
			</Picker>
		</View>)}/>
		{/*</ScrollView>*/}
	</View>;
}

export default MovieDetailsScreen;