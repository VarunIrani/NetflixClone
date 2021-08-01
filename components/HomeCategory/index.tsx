import * as React from 'react';
import styles from "./styles";
import {FlatList, Image, Text} from "react-native";
import {View} from "../Themed";

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
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{category.title}</Text>
			<FlatList horizontal={true} data={category.movies}
								showsHorizontalScrollIndicator={false}
								renderItem={({item}) => <Image source={{uri: item.poster}} style={styles.image}/>}/>
		</View>
	);
}

export default HomeCategory;