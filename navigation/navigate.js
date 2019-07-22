
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import HomeScreen from '../Screens/homescreen'
import Favourite from '../Screens/Favourite'
import Cart from '../Screens/chart'
import Categories from '../Screens/Categories'
import MoreItems from '../Screens/moreitems'
import Icon from 'react-native-vector-icons/EvilIcons';
import Ficon from 'react-native-vector-icons/MaterialIcons'
import Itemlist from '../Screens/items'
import React from 'react'
import { isNullLiteralTypeAnnotation, whileStatement } from '@babel/types';
// const icons = <Icon name="home" size={30} color="#900" />


const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {

            tabBarLabel: "Home Page",
            tabBarIcon: ({ tintColor }) => (
                <Ficon name="home" size={30}  color={tintColor}/>
            )

        },
    },
    Categories: {
        screen: Categories,
        navigationOptions: {

            tabBarLabel: "Categories",
            tabBarIcon: ({ tintColor }) => (
                <Ficon name="list" size={30} color={tintColor} />
            )

        },
    },
    Favourite: {
        screen: Favourite,
        navigationOptions: {

            tabBarLabel: "Favourite",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="heart" size={30}  color={tintColor}/>
            )

        },
    },
    Cart: {
        screen: Cart,
        navigationOptions: {

            tabBarLabel: "Cart",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="cart" size={30} color={tintColor} />
            )

        },
    },
    MoreItems: {
        screen: MoreItems, navigationOptions: {

            tabBarLabel: "More Items",
            tabBarIcon: ({ tintColor }) => (
                <Ficon name="clear-all" size={30} color={tintColor} />
            )

        },
    }

},

    {
        order: ['Home', 'Categories', 'Favourite', 'Cart', 'MoreItems'],
        tabBarOptions: {
            
            showIcon: true,
            activeTintColor: 'black',
            inactiveTintColor: 'lightgrey',
          
          
            style: {
                backgroundColor: 'white',
height:50
            },
          
        },
        


        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                headerTitle: routeName
            };
        }
    },

);
const stacknavigator = createStackNavigator(
    {
        TabNavigator: TabNavigator,
        Itemlist:Itemlist
    },
    {
        defaultNavigationOptions: {
         
            headerStyle: {
                backgroundColor: 'white',
                tintColor: 'grey',
            
            },
       }
    }

)



const Appcontainer = createAppContainer(stacknavigator);
export default Appcontainer
