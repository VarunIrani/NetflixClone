import * as React from 'react';
import styles from "./styles";
import {FlatList, Image, Pressable, Text} from "react-native";
import {View} from "../Themed";
import {useNavigation} from '@react-navigation/native';

interface HomeCategoryProps {
	category: {
		id: string,
		title: string,
		movies: {
			id: string,
			poster: string
		}[]
	}
}

const HomeCategory = (props: HomeCategoryProps) => {
	const {category} = props;
	const navigation = useNavigation();
	const onMoviePress = (movie: any) => {
		navigation.navigate('MovieDetailsScreen', {id: movie.id})
	}
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{category.title}</Text>
			<FlatList horizontal={true} data={category.movies}
								showsHorizontalScrollIndicator={false}
								renderItem={({item}) =>
									<Pressable onPress={() => onMoviePress(item)}>
									<Image source={{uri: item.poster}} style={styles.image}/>
									</Pressable>
								}/>
		</View>
	);
}

export default HomeCategory;