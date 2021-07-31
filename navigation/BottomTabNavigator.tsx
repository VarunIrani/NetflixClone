/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import {Ionicons, AntDesign, MaterialIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {BottomTabParamList, HomeScreenParamList, TabTwoParamList} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			tabBarOptions={{activeTintColor: Colors[colorScheme].tint}}>
			<BottomTab.Screen
				name="Home"
				component={HomeNavigator}
				options={{
					tabBarIcon: ({color}) => <AntDesign name="home" size={24} color={color}/>,
				}}
			/>
			<BottomTab.Screen
				name="Coming Soon"
				component={TabTwoNavigator}
				options={{
					tabBarIcon: ({color}) => <MaterialIcons name="video-library" size={24} color={color}/>,
				}}
			/>
			<BottomTab.Screen
				name="Search"
				component={TabTwoNavigator}
				options={{
					tabBarIcon: ({color}) => <Ionicons name="search" size={24} color={color}/>,
				}}
			/>
			<BottomTab.Screen
				name="Downloads"
				component={TabTwoNavigator}
				options={{
					tabBarIcon: ({color}) => <AntDesign name="download" size={24} color={color}/>,
				}}
			/>
		</BottomTab.Navigator>
	);
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeScreenStack = createStackNavigator<HomeScreenParamList>();

function HomeNavigator() {
	return (
		<HomeScreenStack.Navigator>
			<HomeScreenStack.Screen
				name="HomeScreen"
				component={TabOneScreen}
				options={{headerShown: false}}
			/>
		</HomeScreenStack.Navigator>
	);
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
	return (
		<TabTwoStack.Navigator>
			<TabTwoStack.Screen
				name="TabTwoScreen"
				component={TabTwoScreen}
				options={{headerTitle: 'Tab Two Title'}}
			/>
		</TabTwoStack.Navigator>
	);
}
