import React from 'react';
import { Image, StyleSheet, Text, View, ToastAndroid } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import NetInfo from '@react-native-community/netinfo';

import { connect } from 'react-redux';
import { fetchDishes, fetchPromos, fetchLeaders, fetchComments } from '../redux/ActionCreators';

import Home from './HomeComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';
import Favorites from './FavoriteComponent';
import Reservation from './ReservationComponent';
import Login from './LoginComponent';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
})

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderOptions = {
    headerStyle: {
        backgroundColor: '#512DA8',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: '#fff',
    },
};

const CustomDrawerContentComponent = (props) => (
    <DrawerContentScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </SafeAreaView>
    </DrawerContentScrollView>
);

function MenuNavigator({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName={"Menu"}
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
            <Stack.Screen name="Menu" component={Menu}
                options={{
                    headerLeft: () => (
                        <Icon name="menu" size={24}
                            color='white'
                            containerStyle={{ marginLeft: 10 }}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                }}
            />
            <Stack.Screen name="Dishdetail" options={{ title: 'Dish Detail' }} component={Dishdetail} />
        </Stack.Navigator>
    );
}

function HomeNavigator({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"
                }
            }}>
            <Stack.Screen name="Home" component={Home}
                options={{
                    headerLeft: () => (
                        <Icon name="menu" size={24}
                            color='white'
                            containerStyle={{ marginLeft: 10 }}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                }}
            />
        </Stack.Navigator>
    );
}

function AboutNavigator({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"
                }
            }}>
            <Stack.Screen name="About" component={About}
                options={{
                    title: 'About Us',
                    headerLeft: () => (
                        <Icon name="menu" size={24}
                            color='white'
                            containerStyle={{ marginLeft: 10 }}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                }}
            />
        </Stack.Navigator>

    );
}

function ContactNavigator({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"
                }
            }}>
            <Stack.Screen name="Contact" component={Contact}
                options={{
                    title: 'Contact Us',
                    headerLeft: () => (
                        <Icon name="menu" size={24}
                            color='white'
                            containerStyle={{ marginLeft: 10 }}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                }}
            />
        </Stack.Navigator>
    );
}

function FavoritesNavigatorScreen() {
    return (
        <Stack.Navigator screenOptions={HeaderOptions}>
            <Stack.Screen
                name="Favorites"
                component={Favorites}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name="menu"
                            size={24}
                            color="white"
                            containerStyle={{ marginLeft: 10 }}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    ),
                })}
            />
        </Stack.Navigator>
    );
}

function LoginNavigatorScreen() {
    return (
        <Stack.Navigator screenOptions={HeaderOptions}>
            <Stack.Screen
                name="Login"
                component={Login}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name="menu"
                            size={24}
                            color="white"
                            containerStyle={{ marginLeft: 10 }}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
}

function ReservationNavigator({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#512DA8"
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: "#fff"
                }
            }}>
            <Stack.Screen name="Reservation" component={Reservation}
                options={{
                    title: 'Reservation',
                    headerLeft: () => (
                        <Icon name="menu" size={24}
                            color='white'
                            containerStyle={{ marginLeft: 10 }}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                }}
            />
        </Stack.Navigator>
    );
}

function MainNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Home"
            drawerStyle={{
                backgroundColor: "#D1C4E9"
            }}
            drawerContent={props => <CustomDrawerContentComponent {...props} />}
        >
            <Drawer.Screen name="Login" component={LoginNavigatorScreen}
                options={{
                    drawerIcon: ({ tintColor }) => (
                        <Icon
                            name="sign-in"
                            type="font-awesome"
                            size={24}
                            color={tintColor}
                        />
                    )
                }}
            />
            <Drawer.Screen name="Home" component={HomeNavigator} options={{
                drawerLabel: 'Home',
                drawerIcon: ({ tintColor, focused }) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }} />
            <Drawer.Screen name="About" component={AboutNavigator} options={{
                title: 'About Us',
                drawerLabel: 'About Us',
                drawerIcon: ({ tintColor, focused }) => (
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }} />
            <Drawer.Screen name="Menu" component={MenuNavigator} options={{
                drawerLabel: 'Menu',
                drawerIcon: ({ tintColor, focused }) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }} />
            <Drawer.Screen name="Contact" options={{ title: 'Contact Us' }} component={ContactNavigator} options={{
                title: 'Contact Us',
                drawerLabel: 'Contact Us',
                drawerIcon: ({ tintColor, focused }) => (
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={22}
                        color={tintColor}
                    />
                )
            }} />
            <Drawer.Screen name="My Favorites" component={FavoritesNavigatorScreen}
                options={{
                    drawerIcon: ({ tintColor }) => (
                        <Icon
                            name="heart"
                            type="font-awesome"
                            size={24}
                            color={tintColor}
                        />
                    ),
                }}
            />
            <Drawer.Screen name="Reservation" options={{ title: 'Reservation' }} component={ReservationNavigator} options={{
                title: 'Reserve table',
                drawerLabel: 'Reserve table',
                drawerIcon: ({ tintColor, focused }) => (
                    <Icon
                        name='cutlery'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }} />
        </Drawer.Navigator>
    );
}

class Main extends React.Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();

        NetInfo.fetch().then((connectionInfo) => {
            ToastAndroid.show(
                'Initial Network Connectivity Type: ' + connectionInfo.type,
                ToastAndroid.LONG
            );
        });

        NetInfo.addEventListener((connectionChange) =>
            this.handleConnectivityChange(connectionChange)
        );
    }

    UNSAFE_componentWillUnmount() {
        NetInfo.removeEventListener((connectionChange) =>
            this.handleConnectivityChange(connectionChange)
        );
    }

    handleConnectivityChange = (connectionInfo) => {
        switch (connectionInfo.type) {
            case 'none':
                ToastAndroid.show('You are now offline', ToastAndroid.LONG);
                break;
            case 'wifi':
                ToastAndroid.show('You are now on WiFi', ToastAndroid.LONG);
                break;
            case 'cellular':
                ToastAndroid.show('You are now on Cellular', ToastAndroid.LONG);
                break;
            case 'unknown':
                ToastAndroid.show(
                    'You are now have an Unknown connection',
                    ToastAndroid.LONG
                );
                break;
            default:
        }
    };

    render() {
        return (
            <SafeAreaProvider>
                <NavigationContainer>
                    <MainNavigator />
                </NavigationContainer>
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
