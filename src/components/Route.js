import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Product from '../screens/Product';

const Route = createStackNavigator({
    Home: {
        screen: Home
    },
    Product: {
        screen: Product
    }
});

export default createAppContainer(Route);