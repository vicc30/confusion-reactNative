import React from 'react';
import { View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

//Creates About stack
const AboutNavigator = createStackNavigator();

function AboutNavigatorScreen() {
    return(
        <AboutNavigator.Navigator 
            initialRouteName='About'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"
                }
            }}
        >
            <AboutNavigator.Screen
                name="About"
                component={About}
                options={{ headerTitle: "About Us" }}
            />
        </AboutNavigator.Navigator>
    );
}

//Creates Contact stack
const ContactNavigator = createStackNavigator();

function ContactNavigatorScreen() {
    return(
        <ContactNavigator.Navigator
            initialRouteName='Contact'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"
                }
            }}
        >
            <ContactNavigator.Screen
                name="Contact"
                component={Contact}
                options={{ headerTitle: "Contact Us" }}
            />
        </ContactNavigator.Navigator>
    );
}

// This creates Menu stack
const MenuNavigator = createStackNavigator();

function MenuNavigatorScreen() {
    return (
        <MenuNavigator.Navigator
            initialRouteName='Menu'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff"
                }
            }}
        >
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
            />
            <MenuNavigator.Screen
                name="Dishdetail"
                component={Dishdetail}
                options={{ headerTitle: "Dish Detail" }}
            />
        </MenuNavigator.Navigator>
    );
}

//This creates  stack Home
const HomeNavigator = createStackNavigator();

function HomeNavigatorScreen() {
    return (
        <HomeNavigator.Navigator
            initialRouteName='Home'
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: '#512DA8',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff',
                },
            })}
        >
            <HomeNavigator.Screen name='Home' component={Home} />
        </HomeNavigator.Navigator>
    );
}

//This join Home and Menu on Drawer

const Drawer = createDrawerNavigator();

class Main extends React.Component {

    render() {

        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeNavigatorScreen} />
                    <Drawer.Screen name="About" component={AboutNavigatorScreen} />
                    <Drawer.Screen name="Menu" component={MenuNavigatorScreen} />
                    <Drawer.Screen name="Contact Us" component={ContactNavigatorScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

export default Main;