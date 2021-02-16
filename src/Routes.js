import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// screens
import Home from './screens/Home'
import Settings from './screens/Settings'
import Profile from './screens/Profile'

// Navigators
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()


const StackNavigator = ({ navigation }) => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen
            name="Profile"
            component={Profile}
            // options={{ title: 'John Doe' }}
        />
    </Stack.Navigator>
)

const TabNavigator = ({ navigation }) => (
    <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
            name="Profile"
            component={Profile}
            // options={{ title: 'John Doe' }}
        />
    </Tab.Navigator>
)

function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={TabNavigator} />
                <Drawer.Screen name="Settings" component={Settings} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Routes